#!/usr/bin/env node
// Post-build link/image check for the static site in dist/.
//
//   node check-dist.mjs [--base /mrc-tasks] [--dist dist]
//
// Every internal href/src/srcset in every dist HTML page must resolve to a
// file in dist/, and every #anchor must exist on its target page. External
// URLs are listed (count only), never fetched. Exit 1 on any failure.

import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
let base = '/mrc-tasks';
let dist = 'dist';
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--base') base = argv[++i].replace(/\/$/, '');
  else if (argv[i] === '--dist') dist = argv[++i];
}
dist = path.resolve(dist);
if (!fs.existsSync(dist)) {
  console.error(`ERROR: ${dist} not found - build first`);
  process.exit(1);
}

const pages = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const full = path.join(d, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.html')) pages.push(full);
  }
};
walk(dist);

const idCache = new Map();
function idsOf(file) {
  if (!idCache.has(file)) {
    const html = fs.readFileSync(file, 'utf8');
    idCache.set(file, new Set([...html.matchAll(/\s(?:id|name)="([^"]+)"/g)].map((m) => m[1])));
  }
  return idCache.get(file);
}

function toFile(urlPath) {
  let p = decodeURIComponent(urlPath);
  if (base && (p === base || p.startsWith(base + '/'))) p = p.slice(base.length);
  else if (base) return { error: `outside base ${base}` };
  let f = path.join(dist, p);
  if (p.endsWith('/') || p === '') f = path.join(f, 'index.html');
  else if (!path.extname(f) && fs.existsSync(path.join(f, 'index.html'))) f = path.join(f, 'index.html');
  return { file: f };
}

const failures = [];
let checked = 0;
let external = 0;
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  const urls = [];
  for (const m of html.matchAll(/\s(href|src)="([^"]*)"/g)) urls.push(m[2]);
  for (const m of html.matchAll(/\ssrcset="([^"]*)"/g)) for (const part of m[1].split(',')) urls.push(part.trim().split(/\s+/)[0]);
  const pageRel = '/' + path.relative(dist, page);
  for (const raw of urls) {
    const u = raw.replace(/&amp;/g, '&');
    if (!u || /^(mailto:|tel:|javascript:|data:)/i.test(u)) continue;
    if (/^(https?:)?\/\//i.test(u)) {
      external++;
      continue;
    }
    checked++;
    const [pathPart, hash] = u.split('#');
    const clean = pathPart.split('?')[0];
    let target;
    if (clean === '') target = { file: page };
    else if (clean.startsWith('/')) target = toFile(clean);
    else target = toFile(path.posix.join(path.posix.dirname(base + pageRel.replace(/index\.html$/, 'x')), clean) + (clean.endsWith('/') ? '/' : ''));
    if (target.error) {
      failures.push(`${pageRel}: ${u} (${target.error})`);
      continue;
    }
    if (!fs.existsSync(target.file)) {
      failures.push(`${pageRel}: ${u} -> missing ${path.relative(dist, target.file)}`);
      continue;
    }
    if (hash && target.file.endsWith('.html') && !idsOf(target.file).has(decodeURIComponent(hash))) {
      failures.push(`${pageRel}: ${u} -> anchor #${hash} not found`);
    }
  }
}

console.log(`Pages: ${pages.length}; internal refs checked: ${checked}; external refs (not fetched): ${external}`);
if (failures.length) {
  console.log(`FAILURES (${failures.length}):`);
  for (const f of failures) console.log('  ' + f);
  process.exit(1);
}
console.log('OK: all internal links, images and anchors resolve.');
