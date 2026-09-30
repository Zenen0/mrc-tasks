#!/usr/bin/env node
// Scaffold a new mentor-material source batch.
//
//   node new-batch.mjs task <N> [--label <slug>] [--date YYYY-MM-DD] [--dry-run]
//   node new-batch.mjs week <N> [--label <slug>] [--date YYYY-MM-DD] [--dry-run]
//   node new-batch.mjs misc     [--label <slug>] [--date YYYY-MM-DD] [--dry-run]
//
// A week is one chronological batch holding every Task the mentor grouped into
// that Week; it lives under sources/tasks/ and is split into Tasks by analysis.
// Creates sources/<tasks|misc>/<date>-<label>[-k]/ with raw.md (standard
// header only) and images/.gitkeep. Never touches an existing folder.
// Run from the repository root (or pass --root <dir>).

import fs from 'node:fs';
import path from 'node:path';

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}

const argv = process.argv.slice(2);
const opts = { dryRun: false, root: process.cwd() };
const positional = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--dry-run') opts.dryRun = true;
  else if (a === '--label') opts.label = argv[++i];
  else if (a === '--date') opts.date = argv[++i];
  else if (a === '--root') opts.root = argv[++i];
  else if (a.startsWith('--')) fail(`unknown option ${a}`);
  else positional.push(a);
}

const kind = (positional[0] || '').toLowerCase();
if (kind !== 'task' && kind !== 'week' && kind !== 'misc') {
  fail('first argument must be "task <N>", "week <N>" or "misc"');
}
// task and week both take a number; `unit` is the folder/label stem.
let taskNo;
if (kind === 'task' || kind === 'week') {
  taskNo = positional[1];
  if (!taskNo || !/^\d+$/.test(taskNo)) fail(`a ${kind === 'task' ? 'formal Task' : 'Week'} needs its number, e.g. "${kind} 4"`);
  taskNo = String(Number(taskNo));
  if (positional.length > 2) fail(`unexpected argument "${positional[2]}" (use --label for a descriptive suffix)`);
} else if (positional.length > 1) {
  fail(`unexpected argument "${positional[1]}" for misc (use --label for a descriptive suffix)`);
}

function localToday() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
const date = opts.date || localToday();
if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) {
  fail(`invalid --date "${date}" (expected YYYY-MM-DD)`);
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
const unit = kind === 'misc' ? null : `${kind}-${taskNo}`;
const Kind = kind === 'task' ? 'Task' : 'Week';
let label;
if (opts.label) {
  label = slugify(opts.label);
  if (!label) fail(`--label "${opts.label}" has no usable characters`);
  if (unit && !label.startsWith(unit)) label = `${unit}-${label}`;
  if (kind === 'misc' && !label.startsWith('misc')) label = `misc-${label}`;
} else {
  label = unit || 'misc-batch';
}

const sourcesRoot = path.join(opts.root, 'sources');
if (!fs.existsSync(sourcesRoot)) fail(`no sources/ folder under ${opts.root} - run from the repo root`);
const parent = path.join(sourcesRoot, kind === 'misc' ? 'misc' : 'tasks');

// Collision handling mirrors the existing convention (misc-batch, misc-batch-2).
const base = `${date}-${label}`;
let name = base;
let k = 1;
while (fs.existsSync(path.join(parent, name))) {
  k += 1;
  name = `${base}-${k}`;
}
const dir = path.join(parent, name);

let title;
if (unit) {
  title = `${Kind} ${taskNo} (${date})`;
  if (opts.label && label !== unit) title = `${Kind} ${taskNo} - ${label.slice(`${unit}-`.length).replace(/-/g, ' ')} (${date})`;
} else {
  title = `Misc batch ${date}`;
  if (opts.label && label !== 'misc-batch') title += ` - ${label.replace(/^misc-/, '').replace(/-/g, ' ')}`;
}
if (k > 1) title += ` (${k})`;

const header = `# Raw source - ${title}

Original mentor Discord material, preserved approximately as supplied.
Do not edit or clean up. Interpretation goes in \`ANALYSIS.md\`.
Images referenced below live in \`./images/\` under their original filenames.
${kind === 'week' ? `
One chronological batch for the whole Week, in source order. It may hold
several formal Tasks plus teaching/context; their boundaries are determined in
\`ANALYSIS.md\`, not here.
` : ''}
---

`;

// Informational: other batches for the same Task/Week number (possible continuation).
let related = [];
if (unit && fs.existsSync(parent)) {
  related = fs.readdirSync(parent).filter((d) => new RegExp(`-${unit}(-|$)`).test(d));
}

const rel = (p) => path.relative(opts.root, p) || '.';
console.log(`${opts.dryRun ? '[dry-run] would create' : 'Created'}:`);
console.log(`  ${rel(dir)}/`);
console.log(`  ${rel(path.join(dir, 'raw.md'))}`);
console.log(`  ${rel(path.join(dir, 'images', '.gitkeep'))}`);
console.log(`Header title: "Raw source - ${title}"`);
if (k > 1) console.log(`Note: ${base} already existed - used suffix -${k}.`);
if (related.length) console.log(`Note: existing batch(es) for ${Kind} ${taskNo}: ${related.join(', ')}`);

if (!opts.dryRun) {
  fs.mkdirSync(path.join(dir, 'images'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'raw.md'), header, { flag: 'wx' });
  fs.writeFileSync(path.join(dir, 'images', '.gitkeep'), '', { flag: 'wx' });
}
