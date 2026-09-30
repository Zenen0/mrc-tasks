#!/usr/bin/env node
// Mechanical source-batch operations for /mentor-analyse. Judgement stays with Claude.
//
//   node mentor-source.mjs list
//       Every batch under sources/ with its stage. Read-only.
//   node mentor-source.mjs plan  <batch-dir> [--downloads DIR]
//       Dry run: find image references in raw.md, resolve them in ~/Downloads,
//       flag missing / ambiguous / already-imported (stale) files. Changes nothing.
//   node mentor-source.mjs apply <batch-dir> [--downloads DIR]
//                                [--pick "<label>=<filename>"]... [--skip "<label>"]...
//                                [--allow-stale "<label>"]...
//       Copy originals into images/, byte-verify, convert ONLY the reference
//       lines of raw.md to markdown image links, remove images/.gitkeep, and
//       verify no other raw.md line changed. Refuses if anything is unresolved.
//
// A "reference line" is a line whose whole content is an image label such as
// `image 25`, `Image 3.png`, `misc image 17`, `misc 18` (up to two words before "image"/"misc").
// Mentions inside prose ("linking to image 31") are reported but never changed.
// Run from the repository root.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';

const IMG_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.heic'];
const REF_RE = /^((?:[A-Za-z][\w-]*\s+){0,2}(?:image|misc)\s*\d+[a-z]?)(\.(?:jpe?g|png|webp|gif|heic))?$/i;
const LINKED_RE = /^!\[([^\]]*)\]\(<?(\.?\/?images\/[^>)]+)>?\)$/;
const INLINE_RE = /\b(?:[A-Za-z]+\s+)?(?:image|misc)\s*\d+\b/gi;
const HEADER_END = '---';

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}
const norm = (s) => s.toLowerCase().replace(/\s+/g, ' ').trim();
const sha = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const root = process.cwd();
const rel = (p) => path.relative(root, p);

// ---------- args ----------
const argv = process.argv.slice(2);
const cmd = argv.shift();
const opts = { downloads: path.join(os.homedir(), 'Downloads'), pick: {}, skip: new Set(), allowStale: new Set() };
const positional = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--downloads') opts.downloads = argv[++i];
  else if (a === '--pick') {
    const v = argv[++i] || '';
    const eq = v.lastIndexOf('=');
    if (eq < 1) fail(`--pick expects "<label>=<filename>", got "${v}"`);
    opts.pick[norm(v.slice(0, eq))] = v.slice(eq + 1);
  } else if (a === '--skip') opts.skip.add(norm(argv[++i] || ''));
  else if (a === '--allow-stale') opts.allowStale.add(norm(argv[++i] || ''));
  else if (a.startsWith('--')) fail(`unknown option ${a}`);
  else positional.push(a);
}
if (!fs.existsSync(path.join(root, 'sources'))) fail('run from the repository root (no sources/ here)');

// ---------- helpers ----------
function allBatches() {
  const out = [];
  for (const kind of ['tasks', 'misc']) {
    const p = path.join(root, 'sources', kind);
    if (!fs.existsSync(p)) continue;
    for (const d of fs.readdirSync(p).sort()) {
      const full = path.join(p, d);
      if (fs.statSync(full).isDirectory()) out.push({ kind, name: d, dir: full });
    }
  }
  return out;
}

function readRaw(dir) {
  const file = path.join(dir, 'raw.md');
  if (!fs.existsSync(file)) fail(`${rel(file)} does not exist`);
  const text = fs.readFileSync(file, 'utf8');
  return { file, text, lines: text.split('\n') };
}

function bodyStart(lines) {
  const i = lines.findIndex((l) => l.trim() === HEADER_END);
  return i === -1 ? 0 : i + 1;
}

function scanRefs(lines) {
  const refs = [];
  const linked = [];
  const inline = [];
  const start = bodyStart(lines);
  lines.forEach((raw, idx) => {
    if (idx < start) return;
    const line = raw.replace(/\r$/, '').trim();
    if (!line) return;
    const lm = line.match(LINKED_RE);
    if (lm) {
      linked.push({ idx, label: lm[1], target: lm[2] });
      return;
    }
    const m = line.match(REF_RE);
    if (m) {
      refs.push({ idx, text: line, label: m[1].replace(/\s+/g, ' '), ext: (m[2] || '').toLowerCase() });
      return;
    }
    const hits = line.match(INLINE_RE);
    if (hits) inline.push({ idx, hits });
  });
  return { refs, linked, inline, bodyEmpty: lines.slice(start).every((l) => !l.trim()) };
}

function importedHashes(excludeDir) {
  // Hash every image already in the repo's sources/ and src/ so a leftover
  // Downloads file from an earlier batch is caught instead of re-imported.
  const map = new Map();
  const walk = (d) => {
    if (!fs.existsSync(d)) return;
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (IMG_EXT.includes(path.extname(e.name).toLowerCase()) && !(excludeDir && full.startsWith(excludeDir + path.sep))) {
        const h = sha(full);
        if (!map.has(h)) map.set(h, []);
        map.get(h).push(rel(full));
      }
    }
  };
  walk(path.join(root, 'sources'));
  walk(path.join(root, 'src'));
  return map;
}

function downloadsIndex(dir) {
  if (!fs.existsSync(dir)) fail(`downloads folder ${dir} not found (use --downloads)`);
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && IMG_EXT.includes(path.extname(e.name).toLowerCase()))
    .map((e) => {
      const full = path.join(dir, e.name);
      return { name: e.name, full, key: norm(path.parse(e.name).name), ext: path.extname(e.name).toLowerCase(), mtime: fs.statSync(full).mtime };
    });
}

function resolve(refs, batchDir) {
  const idx = downloadsIndex(opts.downloads);
  const known = importedHashes(batchDir);
  const seenHash = new Map();
  return refs.map((r) => {
    const key = norm(r.label);
    const res = { ...r, key, status: 'ok', candidates: [], chosen: null, notes: [] };
    if (opts.skip.has(key)) {
      res.status = 'skipped';
      return res;
    }
    if (opts.pick[key]) {
      const f = idx.find((c) => c.name === opts.pick[key]);
      if (!f) {
        res.status = 'missing';
        res.notes.push(`--pick file "${opts.pick[key]}" not in ${opts.downloads}`);
        return res;
      }
      res.candidates = [f];
    } else {
      res.candidates = idx.filter((c) => c.key === key && (!r.ext || c.ext === r.ext));
    }
    if (res.candidates.length === 0) res.status = 'missing';
    else if (res.candidates.length > 1) res.status = 'ambiguous';
    else {
      res.chosen = res.candidates[0];
      res.hash = sha(res.chosen.full);
      if (res.chosen.name !== `${r.label}${res.chosen.ext}`) res.notes.push(`name differs in case/spacing: "${res.chosen.name}"`);
      const prior = known.get(res.hash);
      if (prior) {
        res.notes.push(`identical to already-imported ${prior.join(', ')}`);
        if (!opts.allowStale.has(key)) res.status = 'stale';
      }
      if (seenHash.has(res.hash)) {
        res.notes.push(`same bytes as "${seenHash.get(res.hash)}" in this batch`);
        if (res.status === 'ok') res.status = 'duplicate';
      } else seenHash.set(res.hash, r.label);
    }
    return res;
  });
}

function numberingReport(labels) {
  // Group by prefix ("image", "misc image") and report gaps / repeats.
  const groups = new Map();
  for (const l of labels) {
    const m = norm(l).match(/^(.*?(?:image|misc))\s*(\d+)/);
    if (!m) continue;
    if (!groups.has(m[1])) groups.set(m[1], []);
    groups.get(m[1]).push(Number(m[2]));
  }
  const out = [];
  for (const [prefix, nums] of groups) {
    const sorted = [...nums].sort((a, b) => a - b);
    const dupes = sorted.filter((n, i) => i && sorted[i - 1] === n);
    const gaps = [];
    for (let n = sorted[0]; n <= sorted[sorted.length - 1]; n++) if (!sorted.includes(n)) gaps.push(n);
    const outOfOrder = nums.some((n, i) => i && nums[i - 1] > n);
    out.push(`  "${prefix} N": ${sorted[0]}-${sorted[sorted.length - 1]} (${nums.length} refs)` +
      (gaps.length ? `; GAPS: ${gaps.join(', ')}` : '') +
      (dupes.length ? `; REPEATED: ${[...new Set(dupes)].join(', ')}` : '') +
      (outOfOrder ? '; NOT in ascending order in raw.md' : ''));
  }
  return out;
}

function stage(b) {
  const rawFile = path.join(b.dir, 'raw.md');
  if (!fs.existsSync(rawFile)) return { stage: 'no raw.md' };
  const { lines } = readRaw(b.dir);
  const s = scanRefs(lines);
  const imgDir = path.join(b.dir, 'images');
  const imgs = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).filter((f) => !f.startsWith('.')) : [];
  const analysed = fs.existsSync(path.join(b.dir, 'ANALYSIS.md'));
  let st;
  if (s.bodyEmpty) st = 'scaffolded - raw.md empty';
  else if (s.refs.length) st = `raw populated - ${s.refs.length} image ref(s) not yet linked`;
  else if (!analysed) st = 'source ready - not analysed';
  else st = 'analysed';
  return { stage: st, images: imgs.length, linked: s.linked.length, analysed };
}

// ---------- commands ----------
if (cmd === 'list') {
  const state = fs.existsSync(path.join(root, 'PROJECT_STATE.md')) ? fs.readFileSync(path.join(root, 'PROJECT_STATE.md'), 'utf8') : '';
  for (const b of allBatches()) {
    const s = stage(b);
    const inState = state.includes(b.name) ? ' | named in PROJECT_STATE.md' : '';
    console.log(`sources/${b.kind}/${b.name}: ${s.stage} | images: ${s.images ?? 0}${inState}`);
  }
  process.exit(0);
}

if (cmd !== 'plan' && cmd !== 'apply') fail('usage: mentor-source.mjs <list|plan|apply> [batch-dir] [options]');
if (!positional[0]) fail(`"${cmd}" needs an explicit batch folder, e.g. sources/misc/2026-09-27-misc-batch`);
const batchDir = path.resolve(root, positional[0]);
if (!batchDir.startsWith(path.join(root, 'sources') + path.sep) || !fs.existsSync(batchDir)) fail(`${positional[0]} is not an existing folder under sources/`);

const raw = readRaw(batchDir);
const scan = scanRefs(raw.lines);
if (scan.bodyEmpty) fail(`${rel(raw.file)} has no content below the header yet`);
const resolved = resolve(scan.refs, batchDir);

function printPlan() {
  console.log(`Batch: ${rel(batchDir)}`);
  console.log(`Downloads: ${opts.downloads}`);
  console.log(`raw.md: ${raw.lines.length} lines; ${scan.refs.length} unlinked reference line(s); ${scan.linked.length} already linked`);
  for (const r of resolved) {
    const src = r.chosen ? `${r.chosen.name}  (modified ${r.chosen.mtime.toISOString().slice(0, 16).replace('T', ' ')})` : r.candidates.map((c) => c.name).join(' | ') || '-';
    console.log(`  L${r.idx + 1}  "${r.text}"  ->  ${r.status.toUpperCase()}  ${src}${r.notes.length ? '  [' + r.notes.join('; ') + ']' : ''}`);
  }
  for (const l of scan.linked) {
    const exists = fs.existsSync(path.join(batchDir, l.target));
    console.log(`  L${l.idx + 1}  linked -> ${l.target}${exists ? '' : '  [TARGET MISSING]'}`);
  }
  const nums = numberingReport([...scan.refs, ...scan.linked].sort((a, b) => a.idx - b.idx).map((r) => r.label));
  if (nums.length) console.log('Numbering:\n' + nums.join('\n'));
  if (scan.inline.length) {
    console.log('Inline mentions in prose (context only, not converted):');
    for (const m of scan.inline) console.log(`  L${m.idx + 1}: ${m.hits.join(', ')}`);
  }
  const used = new Set(resolved.filter((r) => r.chosen).map((r) => r.chosen.name));
  const known = importedHashes(null);
  const recent = downloadsIndex(opts.downloads).filter((c) => !used.has(c.name) && Date.now() - c.mtime.getTime() < 3 * 864e5);
  const fresh = recent.filter((c) => !known.has(sha(c.full))).map((c) => c.name);
  if (fresh.length) console.log(`Unmatched, not-yet-imported images in Downloads modified in the last 3 days: ${fresh.join(', ')}`);
  if (recent.length - fresh.length) console.log(`(${recent.length - fresh.length} other recent Downloads image(s) are copies of already-imported files - ignored.)`);
}

printPlan();
const blocking = resolved.filter((r) => !['ok', 'skipped'].includes(r.status));

if (cmd === 'plan') {
  console.log(blocking.length ? `\nPLAN: ${blocking.length} reference(s) need a decision before apply.` : '\nPLAN: all references resolved - apply is safe.');
  process.exit(0);
}

// ---------- apply ----------
if (blocking.length) fail(`${blocking.length} unresolved reference(s): ${blocking.map((r) => `"${r.label}" (${r.status})`).join(', ')}. Resolve with --pick / --skip / --allow-stale.`);
const toCopy = resolved.filter((r) => r.status === 'ok');
if (!toCopy.length) {
  console.log('\nNothing to import - every reference is already linked or skipped.');
  process.exit(0);
}

const imgDir = path.join(batchDir, 'images');
fs.mkdirSync(imgDir, { recursive: true });
for (const r of toCopy) {
  const dest = path.join(imgDir, r.chosen.name);
  if (fs.existsSync(dest)) {
    if (sha(dest) !== r.hash) fail(`${rel(dest)} exists with different content - not overwriting`);
  } else {
    fs.copyFileSync(r.chosen.full, dest, fs.constants.COPYFILE_EXCL);
    const st = fs.statSync(r.chosen.full);
    fs.utimesSync(dest, st.atime, st.mtime);
  }
  if (!fs.readFileSync(dest).equals(fs.readFileSync(r.chosen.full))) fail(`byte mismatch after copy: ${rel(dest)}`);
}

const newLines = [...raw.lines];
for (const r of toCopy) {
  const cr = raw.lines[r.idx].endsWith('\r') ? '\r' : '';
  newLines[r.idx] = `![${r.text.replace(/\.(?:jpe?g|png|webp|gif|heic)$/i, '')}](<./images/${r.chosen.name}>)${cr}`;
}
// Verify: same line count, and only the intended lines differ.
const changed = new Set(toCopy.map((r) => r.idx));
if (newLines.length !== raw.lines.length) fail('line count changed - aborting');
for (let i = 0; i < newLines.length; i++) {
  if (!changed.has(i) && newLines[i] !== raw.lines[i]) fail(`unexpected change at L${i + 1} - aborting`);
}
fs.writeFileSync(raw.file, newLines.join('\n'));

const gitkeep = path.join(imgDir, '.gitkeep');
const realImgs = fs.readdirSync(imgDir).filter((f) => !f.startsWith('.'));
let removedKeep = false;
if (realImgs.length && fs.existsSync(gitkeep)) {
  fs.unlinkSync(gitkeep);
  removedKeep = true;
}

console.log(`\nAPPLIED: ${toCopy.length} image(s) copied and byte-verified; ${changed.size} raw.md line(s) linked; all other lines unchanged.`);
if (removedKeep) console.log('Removed images/.gitkeep.');
const skipped = resolved.filter((r) => r.status === 'skipped');
if (skipped.length) console.log(`Left unlinked (skipped): ${skipped.map((r) => r.label).join(', ')}`);
