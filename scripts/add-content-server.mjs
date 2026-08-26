import { createServer } from 'node:http';
import { readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildFrontmatter,
  buildImageFilename,
  sanitizeSlug,
  sanitizeTaskNumber,
} from '../src/lib/add-content.ts';

const PORT = 4322;
const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const FORM_PATH = path.join(ROOT, 'scripts', 'add-content-form.html');
const ALLOWED_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'webp']);

async function pathExists(targetPath) {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
}

function extensionOf(filename) {
  const ext = path.extname(filename).slice(1).toLowerCase();
  return ext;
}

function jsonResponse(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  });
  res.end(payload);
}

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}

async function handleSubmit(req, res) {
  let payload;
  try {
    const raw = await readRequestBody(req);
    payload = JSON.parse(raw);
  } catch {
    jsonResponse(res, 400, { ok: false, error: 'Request body was not valid JSON.' });
    return;
  }

  const title = String(payload.title ?? '').trim();
  const date = String(payload.date ?? '').trim();
  const mentorPrompt = String(payload.mentorPrompt ?? '');
  const response = String(payload.response ?? '');
  const collection = payload.collection === 'misc' ? 'misc' : 'tasks';
  const images = Array.isArray(payload.images) ? payload.images : [];

  if (!title) {
    jsonResponse(res, 400, { ok: false, error: 'Title is required.' });
    return;
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    jsonResponse(res, 400, { ok: false, error: 'Date must be a valid YYYY-MM-DD date.' });
    return;
  }

  let entryId;
  let entryDir;
  if (collection === 'tasks') {
    const task = sanitizeTaskNumber(String(payload.task ?? ''));
    const subtask = sanitizeSlug(String(payload.subtask ?? ''));
    if (!task || !subtask) {
      jsonResponse(res, 400, { ok: false, error: 'Task number and subtask are both required.' });
      return;
    }
    entryId = `${task}/${subtask}`;
    entryDir = path.join(ROOT, 'src', 'content', 'tasks', task, subtask);
  } else {
    const slug = sanitizeSlug(String(payload.slug ?? ''));
    if (!slug) {
      jsonResponse(res, 400, { ok: false, error: 'A slug is required for a misc entry.' });
      return;
    }
    entryId = slug;
    entryDir = path.join(ROOT, 'src', 'content', 'misc', slug);
  }

  if (await pathExists(entryDir)) {
    jsonResponse(res, 409, {
      ok: false,
      error: `${entryDir.replace(ROOT + path.sep, '')} already exists. Choose a different task/subtask or slug, or edit that entry directly.`,
    });
    return;
  }

  const captions = {};
  const filesToWrite = [];

  for (const image of images) {
    const originalName = String(image.filename ?? 'capture.png');
    const extension = extensionOf(originalName);
    if (!ALLOWED_EXTENSIONS.has(extension)) {
      jsonResponse(res, 400, {
        ok: false,
        error: `"${originalName}" has an unsupported extension. Use png, jpg, jpeg, or webp.`,
      });
      return;
    }

    const isMentor = Boolean(image.isMentor);
    const hour = Number.parseInt(image.hour, 10) || 0;
    const minute = Number.parseInt(image.minute, 10) || 0;
    const label = String(image.label ?? '').trim();
    const filename = buildImageFilename({ hour, minute, label, isMentor, extension });

    const dataUrl = String(image.dataBase64 ?? '');
    const base64 = dataUrl.includes(',') ? dataUrl.slice(dataUrl.indexOf(',') + 1) : dataUrl;
    if (!base64) {
      jsonResponse(res, 400, { ok: false, error: `"${originalName}" had no image data attached.` });
      return;
    }

    const caption = String(image.caption ?? '').trim();
    if (caption && !isMentor) {
      captions[filename] = caption;
    }

    if (filesToWrite.some((existing) => existing.filename === filename)) {
      jsonResponse(res, 400, {
        ok: false,
        error: `Two images both resolve to "${filename}" (same time and label). Adjust the time or label so each image's filename is unique.`,
      });
      return;
    }

    filesToWrite.push({ filename, buffer: Buffer.from(base64, 'base64') });
  }

  const frontmatter = buildFrontmatter({ title, date, mentorPrompt, captions });
  const body = response.trim();
  const indexContent = `${frontmatter}\n\n${body}\n`;

  await mkdir(entryDir, { recursive: true });
  await writeFile(path.join(entryDir, 'index.md'), indexContent, 'utf-8');
  for (const file of filesToWrite) {
    await writeFile(path.join(entryDir, file.filename), file.buffer);
  }

  jsonResponse(res, 200, {
    ok: true,
    entryId,
    collection,
    path: entryDir.replace(ROOT + path.sep, ''),
    filesWritten: ['index.md', ...filesToWrite.map((f) => f.filename)],
  });
}

const server = createServer(async (req, res) => {
  try {
    if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
      const html = await readFile(FORM_PATH, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
      return;
    }

    if (req.method === 'POST' && req.url === '/api/submit') {
      await handleSubmit(req, res);
      return;
    }

    jsonResponse(res, 404, { ok: false, error: 'Not found.' });
  } catch (error) {
    console.error('[add-content] Unhandled error:', error);
    jsonResponse(res, 500, { ok: false, error: 'Something went wrong writing the entry. See the terminal for details.' });
  }
});

server.listen(PORT, () => {
  console.log(`Add-content helper running at http://localhost:${PORT}`);
  console.log('This writes files locally only. Nothing is committed or pushed automatically.');
  console.log('Press Ctrl+C to stop.');
});
