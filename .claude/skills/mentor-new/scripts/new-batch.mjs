#!/usr/bin/env node
// Scaffold a new mentor-material source batch.
//
//   node new-batch.mjs task <N> [--label <slug>] [--date YYYY-MM-DD] [--dry-run]
//   node new-batch.mjs misc     [--label <slug>] [--date YYYY-MM-DD] [--dry-run]
//
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
if (kind !== 'task' && kind !== 'misc') {
  fail('first argument must be "task <N>" or "misc"');
}
let taskNo;
if (kind === 'task') {
  taskNo = positional[1];
  if (!taskNo || !/^\d+$/.test(taskNo)) fail('a formal Task needs its number, e.g. "task 4"');
  taskNo = String(Number(taskNo));
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
let label;
if (opts.label) {
  label = slugify(opts.label);
  if (!label) fail(`--label "${opts.label}" has no usable characters`);
  if (kind === 'task' && !label.startsWith(`task-${taskNo}`)) label = `task-${taskNo}-${label}`;
  if (kind === 'misc' && !label.startsWith('misc')) label = `misc-${label}`;
} else {
  label = kind === 'task' ? `task-${taskNo}` : 'misc-batch';
}

const sourcesRoot = path.join(opts.root, 'sources');
if (!fs.existsSync(sourcesRoot)) fail(`no sources/ folder under ${opts.root} - run from the repo root`);
const parent = path.join(sourcesRoot, kind === 'task' ? 'tasks' : 'misc');

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
if (kind === 'task') {
  title = `Task ${taskNo} (${date})`;
  if (opts.label && label !== `task-${taskNo}`) title = `Task ${taskNo} - ${label.slice(`task-${taskNo}-`.length).replace(/-/g, ' ')} (${date})`;
} else {
  title = `Misc batch ${date}`;
  if (opts.label && label !== 'misc-batch') title += ` - ${label.replace(/^misc-/, '').replace(/-/g, ' ')}`;
}
if (k > 1) title += ` (${k})`;

const header = `# Raw source - ${title}

Original mentor Discord material, preserved approximately as supplied.
Do not edit or clean up. Interpretation goes in \`ANALYSIS.md\`.
Images referenced below live in \`./images/\` under their original filenames.

---

`;

// Informational: other batches for the same Task number (possible continuation).
let related = [];
if (kind === 'task' && fs.existsSync(parent)) {
  related = fs.readdirSync(parent).filter((d) => new RegExp(`-task-${taskNo}(-|$)`).test(d));
}

const rel = (p) => path.relative(opts.root, p) || '.';
console.log(`${opts.dryRun ? '[dry-run] would create' : 'Created'}:`);
console.log(`  ${rel(dir)}/`);
console.log(`  ${rel(path.join(dir, 'raw.md'))}`);
console.log(`  ${rel(path.join(dir, 'images', '.gitkeep'))}`);
console.log(`Header title: "Raw source - ${title}"`);
if (k > 1) console.log(`Note: ${base} already existed - used suffix -${k}.`);
if (related.length) console.log(`Note: existing batch(es) for Task ${taskNo}: ${related.join(', ')}`);

if (!opts.dryRun) {
  fs.mkdirSync(path.join(dir, 'images'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'raw.md'), header, { flag: 'wx' });
  fs.writeFileSync(path.join(dir, 'images', '.gitkeep'), '', { flag: 'wx' });
}
