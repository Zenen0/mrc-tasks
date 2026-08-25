# MrC Tasks Storage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static Astro site that turns folders of backtesting screenshots into a 3-level browsable system (task overview to subtask gallery to lightbox), with per-subtask Open Graph previews, deployed to GitHub Pages.

**Architecture:** Astro content collections (`tasks`, `misc`) hold one `index.md` per subtask/entry, colocated with the screenshots for that entry. Pure TypeScript modules (`src/lib/`) parse filenames, sort/group images, and build OG excerpts, unit-tested with Vitest. `.astro` components and pages consume those modules to render the three view levels. No UI framework, no CSS framework, no backend, no client-side data fetching.

**Tech Stack:** Astro (latest), TypeScript (strict), Vitest, `astro:assets` (Sharp) for image optimization, hand-rolled CSS with custom-property tokens, vanilla JS for the theme toggle and lightbox.

**Spec:** [`docs/superpowers/specs/2026-08-25-mrc-tasks-storage-design.md`](../specs/2026-08-25-mrc-tasks-storage-design.md) — read it alongside this plan; this plan implements it task by task. `BRIEF.md` (project root) is the original brief the spec refines.

## Global Constraints

- No em-dashes anywhere in UI copy or generated site text (use a colon, comma, or period instead).
- No gradient/glassmorphism styling, no bento-grid filler cells, no generic decorative icon set (icons are hand-drawn inline SVG, used only where they carry meaning).
- No new runtime dependency beyond Astro + `sharp` (its image pipeline). `vitest` is a devDependency only, never shipped.
- No CMS, no backend, no Discord bot/API integration, no auth.
- No win/loss/outcome tracking — this is backtesting practice, not trade P&L.
- Dark by default, light theme via `[data-theme="light"]`, toggle persisted to `localStorage`.
- Accent color is amber, not teal/blue (that is motorsport-calendar's territory).
- `site: 'https://zenen0.github.io'`, `base: '/mrc-tasks'` — every internal link and asset URL must go through the `base`-aware helper, not a hardcoded root-relative path.
- Actually creating the GitHub repo and running `git push` is explicit-permission-required (publishing public content). Every other step in this plan (local file changes, local commits, local builds) does not require re-asking.

---

### Task 1: Scaffold the Astro project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `src/env.d.ts`
- Create: `src/pages/index.astro` (temporary placeholder, replaced in Task 7)

**Interfaces:**
- Produces: `npm run dev`, `npm run build`, `npm run preview`, `npm test` scripts that every later task relies on.

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "mrc-tasks",
  "type": "module",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "test": "vitest run"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run:
```bash
npm install astro sharp
npm install -D vitest
```

Expected: `node_modules/` created, `package.json` gains `dependencies.astro`, `dependencies.sharp`, `devDependencies.vitest` with whatever versions npm resolves as current. `package-lock.json` is created.

- [ ] **Step 3: Write `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zenen0.github.io',
  base: '/mrc-tasks',
});
```

- [ ] **Step 4: Write `tsconfig.json`**

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

- [ ] **Step 5: Write `src/env.d.ts`**

```ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
```

- [ ] **Step 6: Write `vitest.config.ts`**

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
```

- [ ] **Step 7: Write a temporary placeholder homepage so the build has something to render**

`src/pages/index.astro`:
```astro
---
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>MrC Tasks</title>
  </head>
  <body>
    <p>Scaffold OK. Replaced in Task 7.</p>
  </body>
</html>
```

- [ ] **Step 8: Verify the build works**

Run: `npm run build`
Expected: exits 0, `dist/index.html` exists.

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json vitest.config.ts src/env.d.ts src/pages/index.astro
git commit -m "Scaffold Astro project"
```

---

### Task 2: Design tokens, global CSS, and page shell

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/lib/paths.ts`
- Create: `src/scripts/theme.js`
- Create: `src/components/Layout.astro`
- Modify: `src/pages/index.astro` (use the real Layout)

**Interfaces:**
- Produces: `withBase(path: string, base: string): string` from `src/lib/paths.ts`, used by every page/component that builds an internal link.
- Produces: `<Layout title, description?, ogImage?>` component (default-exported `.astro` file) with a named `<slot />` for page body content. Every page in later tasks wraps its content in this.

- [ ] **Step 1: Write `src/lib/paths.ts`**

```ts
export function withBase(path: string, base: string): string {
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
```

- [ ] **Step 2: Write `src/lib/paths.test.ts` and confirm it fails first**

```ts
import { describe, expect, it } from 'vitest';
import { withBase } from './paths';

describe('withBase', () => {
  it('joins a base with a trailing slash and a path with a leading slash', () => {
    expect(withBase('/tasks/1/a/', '/mrc-tasks/')).toBe('/mrc-tasks/tasks/1/a/');
  });

  it('joins a base without a trailing slash and a path without a leading slash', () => {
    expect(withBase('tasks/1/a/', '/mrc-tasks')).toBe('/mrc-tasks/tasks/1/a/');
  });

  it('handles the root path', () => {
    expect(withBase('/', '/mrc-tasks/')).toBe('/mrc-tasks/');
  });
});
```

Run: `npm test -- paths` (before writing `paths.ts`, or comment it out) to see it fail if you're following strict TDD order; since `paths.ts` was just written in Step 1, instead run it now and confirm it passes:

Run: `npm test -- paths`
Expected: 3 passed.

- [ ] **Step 3: Write `src/styles/tokens.css`**

```css
:root {
  --color-bg: #0a0c0f;
  --color-bg-raised: #12151a;
  --color-border: #23272e;
  --color-text: #e6e8eb;
  --color-text-muted: #8b93a1;
  --color-accent: #d99a3c;
  --font-mono: ui-monospace, "Cascadia Code", "SF Mono", Consolas, monospace;
  --font-sans: system-ui, -apple-system, "Segoe UI", sans-serif;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --radius: 3px;
}

[data-theme="light"] {
  --color-bg: #f4f5f6;
  --color-bg-raised: #ffffff;
  --color-border: #d8dbe0;
  --color-text: #14171a;
  --color-text-muted: #5b6470;
  --color-accent: #b5762a;
}
```

- [ ] **Step 4: Write `src/styles/global.css`**

```css
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  line-height: 1.5;
}

a {
  color: inherit;
}

.mono {
  font-family: var(--font-mono);
}

.site-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-6);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-raised);
  position: sticky;
  top: 0;
  z-index: 10;
}

.site-title {
  font-family: var(--font-mono);
  font-weight: 600;
  text-decoration: none;
}

.site-header nav {
  display: flex;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.site-header nav a {
  text-decoration: none;
  color: var(--color-text-muted);
}

.site-header nav a:hover,
.site-header nav a:focus-visible {
  color: var(--color-accent);
}

#theme-toggle {
  margin-left: auto;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: var(--radius);
  padding: var(--space-1) var(--space-2);
  cursor: pointer;
}

main {
  padding: var(--space-6);
  max-width: 1400px;
  margin: 0 auto;
}

.task-group {
  margin-bottom: var(--space-6);
}

.task-group h2 {
  font-size: 1rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-3);
}

.card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-raised);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  text-decoration: none;
  color: var(--color-text);
  overflow: hidden;
}

.card:hover,
.card:focus-visible {
  border-color: var(--color-accent);
}

.card-thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--color-bg);
  overflow: hidden;
}

.card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-thumb-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.card-count {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: var(--radius);
}

.card-body {
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.card-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent);
}

.card-title {
  margin: 0;
  font-size: 1rem;
}

.card-excerpt {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.subtask-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.subtask-badge {
  color: var(--color-accent);
  font-size: 0.9rem;
}

.assignment,
.captures,
.response {
  margin-bottom: var(--space-6);
}

.assignment h2,
.captures h2,
.response h2 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.mentor-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.mentor-images img {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

.hour-block {
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  margin-bottom: var(--space-2);
  background: var(--color-bg-raised);
}

.hour-block summary {
  cursor: pointer;
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.hour-count {
  color: var(--color-accent);
}

.thumb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3) var(--space-3);
}

.thumb {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: none;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.thumb-time {
  position: absolute;
  bottom: 4px;
  left: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 1px 4px;
  border-radius: var(--radius);
}

.thumb:hover,
.thumb:focus-visible {
  border-color: var(--color-accent);
}

.empty-state {
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.lightbox {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-bg-raised);
  color: var(--color-text);
  padding: var(--space-4);
  max-width: min(90vw, 1200px);
  max-height: 90vh;
  opacity: 1;
  transition: opacity 150ms ease, display 150ms allow-discrete, overlay 150ms allow-discrete;
}

.lightbox:not([open]) {
  opacity: 0;
}

@starting-style {
  .lightbox[open] {
    opacity: 0;
  }
}

.lightbox::backdrop {
  background: rgba(0, 0, 0, 0.7);
}

.lightbox img {
  max-width: 100%;
  max-height: 70vh;
  display: block;
  margin: 0 auto;
  border-radius: var(--radius);
}

.lightbox-meta {
  margin-top: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.lightbox-close,
.lightbox-nav {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  padding: var(--space-1) var(--space-2);
}

.lightbox-close {
  top: var(--space-3);
  right: var(--space-3);
}

.lightbox-prev {
  top: 50%;
  left: var(--space-3);
  transform: translateY(-50%);
}

.lightbox-next {
  top: 50%;
  right: var(--space-3);
  transform: translateY(-50%);
}

*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

- [ ] **Step 5: Write `src/scripts/theme.js`**

```js
const button = document.getElementById('theme-toggle');

button?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('mrc-theme', next);
});
```

- [ ] **Step 6: Write `src/components/Layout.astro`**

```astro
---
import '../styles/tokens.css';
import '../styles/global.css';
import { withBase } from '../lib/paths';

export interface Props {
  title: string;
  description?: string;
  ogImage?: string;
}

const { title, description = 'Backtesting task review.', ogImage } = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
const resolvedOgImage = ogImage ?? new URL(withBase('/og-default.png', import.meta.env.BASE_URL), Astro.site).toString();
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title} · MrC Tasks</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={resolvedOgImage} />
    <meta property="og:url" content={canonicalURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <script is:inline>
      (function () {
        var stored = localStorage.getItem('mrc-theme');
        var theme = stored === 'light' ? 'light' : 'dark';
        document.documentElement.dataset.theme = theme;
      })();
    </script>
  </head>
  <body>
    <header class="site-header">
      <a class="site-title" href={withBase('/', import.meta.env.BASE_URL)}>MrC Tasks</a>
      <nav>
        <a href={withBase('/', import.meta.env.BASE_URL)}>Tasks</a>
        <a href={withBase('/misc/', import.meta.env.BASE_URL)}>Misc</a>
      </nav>
      <button id="theme-toggle" type="button" aria-label="Toggle theme">&#9680;</button>
    </header>
    <main>
      <slot />
    </main>
    <script src="../scripts/theme.js"></script>
  </body>
</html>
```

- [ ] **Step 7: Replace the placeholder homepage to use the real Layout**

`src/pages/index.astro`:
```astro
---
import Layout from '../components/Layout.astro';
---
<Layout title="Tasks" description="Backtesting task review, organized by task and subtask.">
  <p>Layout OK. Replaced with real content in Task 7.</p>
</Layout>
```

- [ ] **Step 8: Verify build and tests**

Run: `npm test`
Expected: 3 passed (the `paths` tests from Step 2).

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 9: Commit**

```bash
git add src/lib/paths.ts src/lib/paths.test.ts src/styles src/scripts/theme.js src/components/Layout.astro src/pages/index.astro
git commit -m "Add design tokens, global styles, and page shell"
```

---

### Task 3: Filename parsing and OG excerpt utilities (TDD)

**Files:**
- Create: `src/lib/filename.ts`
- Create: `src/lib/filename.test.ts`
- Create: `src/lib/og.ts`
- Create: `src/lib/og.test.ts`

**Interfaces:**
- Produces: `parseFilename(filename: string): ParsedFilename` and `prettifyLabel(slug: string): string` from `src/lib/filename.ts`. `ParsedFilename = { date: string | null; hour: number | null; minute: number | null; label: string; isMentorImage: boolean; valid: boolean; raw: string }`. Consumed by Task 4's `images.ts`.
- Produces: `truncateExcerpt(text: string, maxLength: number): string` from `src/lib/og.ts`. Consumed by Task 10's detail pages.

- [ ] **Step 1: Write the failing tests for `filename.ts`**

`src/lib/filename.test.ts`:
```ts
import { describe, expect, it } from 'vitest';
import { parseFilename, prettifyLabel } from './filename';

describe('parseFilename', () => {
  it('parses a bare HH-MM_label filename', () => {
    const result = parseFilename('09-14_entry.png');
    expect(result).toEqual({
      date: null,
      hour: 9,
      minute: 14,
      label: 'Entry',
      isMentorImage: false,
      valid: true,
      raw: '09-14_entry.png',
    });
  });

  it('parses a date-prefixed filename', () => {
    const result = parseFilename('2026-08-20_10-02_management-tight.png');
    expect(result.date).toBe('2026-08-20');
    expect(result.hour).toBe(10);
    expect(result.minute).toBe(2);
    expect(result.label).toBe('Management Tight');
  });

  it('flags mentor images without requiring a timestamp', () => {
    const result = parseFilename('mentor_zone-diagram.png');
    expect(result).toMatchObject({ isMentorImage: true, valid: true, label: 'Zone Diagram' });
  });

  it('marks an unparseable filename as invalid without throwing', () => {
    const result = parseFilename('screenshot.png');
    expect(result.valid).toBe(false);
    expect(result.raw).toBe('screenshot.png');
  });
});

describe('prettifyLabel', () => {
  it('replaces separators with spaces and title-cases each word', () => {
    expect(prettifyLabel('resistance-test_zone')).toBe('Resistance Test Zone');
  });
});
```

- [ ] **Step 2: Run the tests and confirm they fail**

Run: `npm test -- filename`
Expected: FAIL, `Cannot find module './filename'` (the file doesn't exist yet).

- [ ] **Step 3: Write `src/lib/filename.ts`**

```ts
export interface ParsedFilename {
  date: string | null;
  hour: number | null;
  minute: number | null;
  label: string;
  isMentorImage: boolean;
  valid: boolean;
  raw: string;
}

const TIMESTAMPED = /^(?:(\d{4}-\d{2}-\d{2})_)?(\d{2})-(\d{2})_(.+)\.(png|jpe?g|webp)$/i;
const MENTOR_PREFIX = /^mentor_/i;
const EXTENSION = /\.[^.]+$/;

export function prettifyLabel(slug: string): string {
  return slug
    .replace(/[_-]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function parseFilename(filename: string): ParsedFilename {
  if (MENTOR_PREFIX.test(filename)) {
    const withoutPrefix = filename.replace(MENTOR_PREFIX, '').replace(EXTENSION, '');
    return {
      date: null,
      hour: null,
      minute: null,
      label: prettifyLabel(withoutPrefix),
      isMentorImage: true,
      valid: true,
      raw: filename,
    };
  }

  const match = TIMESTAMPED.exec(filename);
  if (!match) {
    return {
      date: null,
      hour: null,
      minute: null,
      label: filename,
      isMentorImage: false,
      valid: false,
      raw: filename,
    };
  }

  const [, date, hh, mm, labelSlug] = match;
  return {
    date: date ?? null,
    hour: Number(hh),
    minute: Number(mm),
    label: prettifyLabel(labelSlug),
    isMentorImage: false,
    valid: true,
    raw: filename,
  };
}
```

- [ ] **Step 4: Run the tests and confirm they pass**

Run: `npm test -- filename`
Expected: 5 passed.

- [ ] **Step 5: Write the failing tests for `og.ts`**

`src/lib/og.test.ts`:
```ts
import { describe, expect, it } from 'vitest';
import { truncateExcerpt } from './og';

describe('truncateExcerpt', () => {
  it('returns short text unchanged', () => {
    expect(truncateExcerpt('Mark the liquidity zones.', 160)).toBe('Mark the liquidity zones.');
  });

  it('collapses internal whitespace and trims', () => {
    expect(truncateExcerpt('  Mark   the   zones.  ', 160)).toBe('Mark the zones.');
  });

  it('truncates long text at a word boundary and appends an ellipsis', () => {
    const text = 'Mark the liquidity zones on EURUSD fifteen minute chart';
    expect(truncateExcerpt(text, 20)).toBe('Mark the liquidity...');
  });
});
```

- [ ] **Step 6: Run the tests and confirm they fail**

Run: `npm test -- og`
Expected: FAIL, `Cannot find module './og'`.

- [ ] **Step 7: Write `src/lib/og.ts`**

```ts
export function truncateExcerpt(text: string, maxLength = 160): string {
  const trimmed = text.trim().replace(/\s+/g, ' ');
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  const cut = trimmed.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  const base = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return `${base}...`;
}
```

- [ ] **Step 8: Run the tests and confirm they pass**

Run: `npm test -- og`
Expected: 3 passed.

- [ ] **Step 9: Run the full suite and build**

Run: `npm test`
Expected: 11 passed (3 paths + 5 filename + 3 og).

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 10: Commit**

```bash
git add src/lib/filename.ts src/lib/filename.test.ts src/lib/og.ts src/lib/og.test.ts
git commit -m "Add filename parsing and OG excerpt utilities"
```

---

### Task 4: Image gallery utilities (TDD)

**Files:**
- Create: `src/lib/images.ts`
- Create: `src/lib/images.test.ts`

**Interfaces:**
- Consumes: `parseFilename` and `ParsedFilename` from `src/lib/filename.ts` (Task 3).
- Produces: `GlobMap`, `GalleryImage`, `HourBlock` types, and `filterImagesForEntry`, `sortCaptureImages`, `getMentorImages`, `groupIntoHourBlocks`, `getCoverImage` functions from `src/lib/images.ts`. Consumed by Task 7 (overview pages) and Task 10 (detail pages).

- [ ] **Step 1: Write the failing tests**

`src/lib/images.test.ts`:
```ts
import { describe, expect, it } from 'vitest';
import { parseFilename } from './filename';
import {
  filterImagesForEntry,
  getCoverImage,
  getMentorImages,
  groupIntoHourBlocks,
  sortCaptureImages,
  type GalleryImage,
  type GlobMap,
} from './images';

function image(filename: string): GalleryImage {
  return { src: filename as unknown as GalleryImage['src'], parsed: parseFilename(filename), caption: null };
}

describe('filterImagesForEntry', () => {
  it('returns only images under the given entry path', () => {
    const globMap: GlobMap = {
      '/src/content/tasks/1/a/09-14_entry.png': { default: 'a-entry' as never },
      '/src/content/tasks/1/a/10-02_exit.png': { default: 'a-exit' as never },
      '/src/content/tasks/1/b/09-00_entry.png': { default: 'b-entry' as never },
    };
    const result = filterImagesForEntry(globMap, '/src/content/tasks/1/a', {});
    expect(result.map((img) => img.parsed.raw).sort()).toEqual(['09-14_entry.png', '10-02_exit.png']);
  });

  it('attaches a caption when the filename matches the captions map', () => {
    const globMap: GlobMap = {
      '/src/content/tasks/1/a/09-14_entry.png': { default: 'a-entry' as never },
    };
    const result = filterImagesForEntry(globMap, '/src/content/tasks/1/a', {
      '09-14_entry.png': 'Waiting for the retest.',
    });
    expect(result[0].caption).toBe('Waiting for the retest.');
  });

  it('leaves caption null when there is no match', () => {
    const globMap: GlobMap = {
      '/src/content/tasks/1/a/09-14_entry.png': { default: 'a-entry' as never },
    };
    const result = filterImagesForEntry(globMap, '/src/content/tasks/1/a', {});
    expect(result[0].caption).toBeNull();
  });
});

describe('sortCaptureImages', () => {
  it('sorts valid timestamped images chronologically and excludes mentor images', () => {
    const images = [image('10-02_exit.png'), image('mentor_diagram.png'), image('09-14_entry.png')];
    const result = sortCaptureImages(images);
    expect(result.map((img) => img.parsed.raw)).toEqual(['09-14_entry.png', '10-02_exit.png']);
  });

  it('appends unparseable filenames after valid ones', () => {
    const images = [image('screenshot.png'), image('09-14_entry.png')];
    const result = sortCaptureImages(images);
    expect(result.map((img) => img.parsed.raw)).toEqual(['09-14_entry.png', 'screenshot.png']);
  });
});

describe('getMentorImages', () => {
  it('returns only images flagged as mentor images', () => {
    const images = [image('09-14_entry.png'), image('mentor_diagram.png')];
    expect(getMentorImages(images).map((img) => img.parsed.raw)).toEqual(['mentor_diagram.png']);
  });
});

describe('groupIntoHourBlocks', () => {
  it('groups images into hour-range blocks in chronological order', () => {
    const images = [image('09-14_entry.png'), image('09-45_add.png'), image('10-02_exit.png')];
    const blocks = groupIntoHourBlocks(images);
    expect(blocks.map((b) => b.label)).toEqual(['09:00–10:00', '10:00–11:00']);
    expect(blocks[0].images).toHaveLength(2);
    expect(blocks[1].images).toHaveLength(1);
  });

  it('puts unparseable filenames into a trailing Unsorted block', () => {
    const images = [image('09-14_entry.png'), image('screenshot.png')];
    const blocks = groupIntoHourBlocks(images);
    expect(blocks.at(-1)?.label).toBe('Unsorted');
    expect(blocks.at(-1)?.images).toHaveLength(1);
  });
});

describe('getCoverImage', () => {
  it('returns the chronologically first capture image and total capture count, excluding mentor images', () => {
    const images = [image('mentor_diagram.png'), image('10-02_exit.png'), image('09-14_entry.png')];
    const { cover, count } = getCoverImage(images);
    expect(cover).toBe('09-14_entry.png');
    expect(count).toBe(2);
  });

  it('returns null cover and zero count when there are no capture images yet', () => {
    const { cover, count } = getCoverImage([image('mentor_diagram.png')]);
    expect(cover).toBeNull();
    expect(count).toBe(0);
  });
});
```

- [ ] **Step 2: Run the tests and confirm they fail**

Run: `npm test -- images`
Expected: FAIL, `Cannot find module './images'`.

- [ ] **Step 3: Write `src/lib/images.ts`**

```ts
import type { ImageMetadata } from 'astro';
import { parseFilename, type ParsedFilename } from './filename';

export interface GlobModule {
  default: ImageMetadata;
}

export type GlobMap = Record<string, GlobModule>;

export interface GalleryImage {
  src: ImageMetadata;
  parsed: ParsedFilename;
  caption: string | null;
}

export interface HourBlock {
  label: string;
  images: GalleryImage[];
}

export function filterImagesForEntry(
  globMap: GlobMap,
  entryPath: string,
  captions: Record<string, string> = {},
): GalleryImage[] {
  const prefix = entryPath.endsWith('/') ? entryPath : `${entryPath}/`;
  return Object.entries(globMap)
    .filter(([path]) => path.startsWith(prefix))
    .map(([path, mod]) => {
      const filename = path.slice(prefix.length);
      return {
        src: mod.default,
        parsed: parseFilename(filename),
        caption: captions[filename] ?? null,
      };
    });
}

export function sortCaptureImages(images: GalleryImage[]): GalleryImage[] {
  const captures = images.filter((img) => !img.parsed.isMentorImage);
  const valid = captures
    .filter((img) => img.parsed.valid)
    .sort((a, b) => a.parsed.raw.localeCompare(b.parsed.raw));
  const invalid = captures
    .filter((img) => !img.parsed.valid)
    .sort((a, b) => a.parsed.raw.localeCompare(b.parsed.raw));
  return [...valid, ...invalid];
}

export function getMentorImages(images: GalleryImage[]): GalleryImage[] {
  return images.filter((img) => img.parsed.isMentorImage);
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function groupIntoHourBlocks(images: GalleryImage[]): HourBlock[] {
  const captures = sortCaptureImages(images);
  const valid = captures.filter((img) => img.parsed.valid && img.parsed.hour !== null);
  const invalid = captures.filter((img) => !img.parsed.valid || img.parsed.hour === null);

  const order: string[] = [];
  const blocks = new Map<string, GalleryImage[]>();
  for (const img of valid) {
    const hour = img.parsed.hour as number;
    const label = `${pad(hour)}:00–${pad((hour + 1) % 24)}:00`;
    if (!blocks.has(label)) {
      blocks.set(label, []);
      order.push(label);
    }
    blocks.get(label)!.push(img);
  }

  const result: HourBlock[] = order.map((label) => ({ label, images: blocks.get(label)! }));
  if (invalid.length > 0) {
    result.push({ label: 'Unsorted', images: invalid });
  }
  return result;
}

export function getCoverImage(images: GalleryImage[]): { cover: ImageMetadata | null; count: number } {
  const captures = sortCaptureImages(images);
  return { cover: captures[0]?.src ?? null, count: captures.length };
}
```

- [ ] **Step 4: Run the tests and confirm they pass**

Run: `npm test -- images`
Expected: 9 passed.

- [ ] **Step 5: Run the full suite and build**

Run: `npm test`
Expected: 20 passed.

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 6: Commit**

```bash
git add src/lib/images.ts src/lib/images.test.ts
git commit -m "Add image gallery filtering, sorting, and grouping utilities"
```

---

### Task 5: Content collections and placeholder Task 1A content

**Files:**
- Create: `src/content/config.ts`
- Create: `scripts/generate-placeholder-images.mjs`
- Create: `src/content/tasks/1/a/index.md`
- Create (generated by script): `src/content/tasks/1/a/09-14_entry.png`, `src/content/tasks/1/a/10-02_management.png`, `src/content/tasks/1/a/11-30_exit.png`

**Interfaces:**
- Produces: `tasks` and `misc` collections queryable via `getCollection('tasks' | 'misc')`, each entry's `id` shaped like `<task>/<letter>` (tasks) or `<slug>` (misc), `data` shaped `{ title: string; date: Date; mentorPrompt?: string; captions?: Record<string,string> }`. Consumed by Task 7 and Task 10.

- [ ] **Step 1: Write `src/content/config.ts`**

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entrySchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  mentorPrompt: z.string().optional(),
  captions: z.record(z.string(), z.string()).optional(),
});

const stripIndexSuffix = ({ entry }: { entry: string }) => entry.replace(/\/index\.md$/, '');

const tasks = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/tasks', generateId: stripIndexSuffix }),
  schema: entrySchema,
});

const misc = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/misc', generateId: stripIndexSuffix }),
  schema: entrySchema,
});

export const collections = { tasks, misc };
```

- [ ] **Step 2: Write `src/content/tasks/1/a/index.md`**

```markdown
---
title: "EURUSD London session, liquidity marking drill"
date: 2026-08-20
mentorPrompt: |
  Mark the liquidity zones on EURUSD 15m and 1h before London open.
  Annotate where you would expect a sweep, then walk it forward through
  the session and note where price actually reacted.
captions:
  09-14_entry.png: "Marked the equal highs off the Asia range as the first target."
  10-02_management.png: "Price swept the marked zone and reclaimed, watching for continuation."
  11-30_exit.png: "Full sweep confirmed, zone held as resistance for the rest of the session."
---

## My read

Placeholder response, drop your own here. This is a placeholder subtask
proving the folder convention end to end. Replace the images, prompt,
and this section with a real backtest once you have pulled it from
Discord, following ADDING-CONTENT.md.
```

- [ ] **Step 3: Write `scripts/generate-placeholder-images.mjs`**

```js
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const outDir = 'src/content/tasks/1/a';
await mkdir(outDir, { recursive: true });

const shots = [
  { file: '09-14_entry.png', label: 'ENTRY: 15m equal highs', bg: '#12151a' },
  { file: '10-02_management.png', label: 'MANAGEMENT: sweep and reclaim', bg: '#151a12' },
  { file: '11-30_exit.png', label: 'EXIT: zone held as resistance', bg: '#1a1512' },
];

for (const shot of shots) {
  const columns = Array.from(
    { length: 12 },
    (_, i) => `<line x1="${i * 107}" y1="0" x2="${i * 107}" y2="720" stroke="#2a2f38" stroke-width="1" />`,
  ).join('');
  const rows = Array.from(
    { length: 7 },
    (_, i) => `<line x1="0" y1="${i * 103}" x2="1280" y2="${i * 103}" stroke="#2a2f38" stroke-width="1" />`,
  ).join('');
  const svg = `
    <svg width="1280" height="720" xmlns="http://www.w3.org/2000/svg">
      <rect width="1280" height="720" fill="${shot.bg}" />
      ${columns}
      ${rows}
      <text x="40" y="60" font-family="monospace" font-size="20" fill="#8b93a1">EURUSD, 15m, placeholder capture</text>
      <text x="40" y="660" font-family="monospace" font-size="28" fill="#d99a3c">${shot.label}</text>
    </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile(`${outDir}/${shot.file}`);
  console.log(`Wrote ${outDir}/${shot.file}`);
}
```

- [ ] **Step 4: Run the script**

Run: `node scripts/generate-placeholder-images.mjs`
Expected: 3 lines of `Wrote src/content/tasks/1/a/...` output, and the 3 PNG files exist in `src/content/tasks/1/a/`.

- [ ] **Step 5: Verify the build still works**

Run: `npm run build`
Expected: exits 0 (the homepage doesn't query collections yet, so this just confirms `content/config.ts` itself is valid).

- [ ] **Step 6: Commit**

```bash
git add src/content/config.ts src/content/tasks/1/a scripts/generate-placeholder-images.mjs
git commit -m "Add content collections and a placeholder Task 1A entry"
```

---

### Task 6: SubtaskCard component

**Files:**
- Create: `src/components/SubtaskCard.astro`

**Interfaces:**
- Consumes: nothing beyond `astro:assets`'s `<Image>`.
- Produces: `<SubtaskCard href, badge, title, cover, imageCount, promptExcerpt>` component. Consumed by Task 7.

- [ ] **Step 1: Write `src/components/SubtaskCard.astro`**

```astro
---
import type { ImageMetadata } from 'astro';
import { Image } from 'astro:assets';

export interface Props {
  href: string;
  badge: string;
  title: string;
  cover: ImageMetadata | null;
  imageCount: number;
  promptExcerpt: string;
}

const { href, badge, title, cover, imageCount, promptExcerpt } = Astro.props;
---
<a class="card" href={href}>
  <div class="card-thumb">
    {cover ? (
      <Image src={cover} width={320} alt="" />
    ) : (
      <div class="card-thumb-empty">No captures yet</div>
    )}
    <span class="card-count mono">{imageCount}</span>
  </div>
  <div class="card-body">
    <span class="card-badge">{badge}</span>
    <h3 class="card-title">{title}</h3>
    {promptExcerpt && <p class="card-excerpt">{promptExcerpt}</p>}
  </div>
</a>
```

- [ ] **Step 2: Verify the build works**

Run: `npm run build`
Expected: exits 0 (component isn't used by a page yet, so this just confirms it compiles).

- [ ] **Step 3: Commit**

```bash
git add src/components/SubtaskCard.astro
git commit -m "Add SubtaskCard component"
```

---

### Task 7: Task overview and Misc overview pages

**Files:**
- Modify: `src/pages/index.astro` (replace placeholder with the real task overview)
- Create: `src/pages/misc/index.astro`

**Interfaces:**
- Consumes: `getCollection` from `astro:content` (Task 5), `filterImagesForEntry`/`getCoverImage` from `src/lib/images.ts` (Task 4), `withBase` from `src/lib/paths.ts` (Task 2), `<SubtaskCard>` (Task 6), `<Layout>` (Task 2).

- [ ] **Step 1: Replace `src/pages/index.astro`**

```astro
---
import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import Layout from '../components/Layout.astro';
import SubtaskCard from '../components/SubtaskCard.astro';
import { filterImagesForEntry, getCoverImage } from '../lib/images';
import { withBase } from '../lib/paths';

const globMap = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/tasks/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

const entries = await getCollection('tasks');
const byTask = new Map<string, typeof entries>();
for (const entry of entries) {
  const [task] = entry.id.split('/');
  if (!byTask.has(task)) byTask.set(task, []);
  byTask.get(task)!.push(entry);
}
const sortedTasks = [...byTask.entries()].sort((a, b) => Number(a[0]) - Number(b[0]));
---
<Layout title="Tasks" description="Backtesting task review, organized by task and subtask.">
  {sortedTasks.length === 0 && <p class="empty-state">No tasks yet.</p>}
  {sortedTasks.map(([task, subtasks]) => (
    <section class="task-group">
      <h2>Task {task}</h2>
      <div class="card-grid">
        {subtasks
          .sort((a, b) => a.id.localeCompare(b.id))
          .map((entry) => {
            const [, letter] = entry.id.split('/');
            const images = filterImagesForEntry(
              globMap,
              `/src/content/tasks/${entry.id}`,
              entry.data.captions ?? {},
            );
            const { cover, count } = getCoverImage(images);
            return (
              <SubtaskCard
                href={withBase(`/tasks/${task}/${letter}/`, import.meta.env.BASE_URL)}
                badge={`${task}${letter.toUpperCase()}`}
                title={entry.data.title}
                cover={cover}
                imageCount={count}
                promptExcerpt={entry.data.mentorPrompt ?? ''}
              />
            );
          })}
      </div>
    </section>
  ))}
</Layout>
```

- [ ] **Step 2: Write `src/pages/misc/index.astro`**

```astro
---
import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import Layout from '../../components/Layout.astro';
import SubtaskCard from '../../components/SubtaskCard.astro';
import { filterImagesForEntry, getCoverImage } from '../../lib/images';
import { withBase } from '../../lib/paths';

const globMap = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/misc/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

const entries = await getCollection('misc');
---
<Layout title="Misc" description="Extra reference material that doesn't fit a task or subtask.">
  {entries.length === 0 && <p class="empty-state">No misc entries yet.</p>}
  <div class="card-grid">
    {entries
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((entry) => {
        const images = filterImagesForEntry(globMap, `/src/content/misc/${entry.id}`, entry.data.captions ?? {});
        const { cover, count } = getCoverImage(images);
        return (
          <SubtaskCard
            href={withBase(`/misc/${entry.id}/`, import.meta.env.BASE_URL)}
            badge="MISC"
            title={entry.data.title}
            cover={cover}
            imageCount={count}
            promptExcerpt={entry.data.mentorPrompt ?? ''}
          />
        );
      })}
  </div>
</Layout>
```

- [ ] **Step 3: Verify the build works and the overview renders the placeholder card**

Run: `npm run build`
Expected: exits 0, `dist/index.html` contains the text `EURUSD London session`.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro src/pages/misc/index.astro
git commit -m "Add task overview and misc overview pages"
```

---

### Task 8: ThumbnailGrid component

**Files:**
- Create: `src/components/ThumbnailGrid.astro`

**Interfaces:**
- Consumes: `HourBlock` type from `src/lib/images.ts` (Task 4).
- Produces: `<ThumbnailGrid blocks>` component rendering `.thumb` buttons with `data-full-src`, `data-timestamp`, `data-label`, `data-caption` attributes. Task 9's lightbox script reads these attributes; Task 10 renders this component.

- [ ] **Step 1: Write `src/components/ThumbnailGrid.astro`**

```astro
---
import { Image, getImage } from 'astro:assets';
import type { HourBlock } from '../lib/images';

export interface Props {
  blocks: HourBlock[];
}

const { blocks } = Astro.props;
---
{blocks.map((block) => (
  <details class="hour-block" open>
    <summary>
      {block.label} <span class="hour-count mono">{block.images.length}</span>
    </summary>
    <div class="thumb-grid">
      {block.images.map(async (img) => {
        const full = await getImage({ src: img.src, width: 1600 });
        const timestamp =
          img.parsed.hour !== null && img.parsed.minute !== null
            ? `${String(img.parsed.hour).padStart(2, '0')}:${String(img.parsed.minute).padStart(2, '0')}`
            : img.parsed.raw;
        return (
          <button
            type="button"
            class="thumb"
            data-full-src={full.src}
            data-timestamp={timestamp}
            data-label={img.parsed.label}
            data-caption={img.caption ?? ''}
          >
            <Image src={img.src} width={320} alt={img.parsed.label} />
            <span class="thumb-time mono">{timestamp}</span>
          </button>
        );
      })}
    </div>
  </details>
))}
```

- [ ] **Step 2: Verify the build works**

Run: `npm run build`
Expected: exits 0 (component isn't used by a page yet, so this confirms it compiles).

- [ ] **Step 3: Commit**

```bash
git add src/components/ThumbnailGrid.astro
git commit -m "Add ThumbnailGrid component with hour-block grouping"
```

---

### Task 9: Lightbox component and script

**Files:**
- Create: `src/components/Lightbox.astro`
- Create: `src/scripts/lightbox.js`

**Interfaces:**
- Consumes: `.thumb` buttons and their `data-full-src`/`data-timestamp`/`data-label`/`data-caption` attributes (produced by Task 8's `ThumbnailGrid`).
- Produces: `<Lightbox>` component, one native `<dialog id="lightbox">` per detail page. Consumed by Task 10.

- [ ] **Step 1: Write `src/components/Lightbox.astro`**

```astro
<dialog id="lightbox" class="lightbox">
  <button type="button" class="lightbox-close" data-lightbox-close aria-label="Close">&times;</button>
  <img id="lightbox-image" alt="" />
  <div class="lightbox-meta">
    <span id="lightbox-timestamp" class="mono"></span>
    <p id="lightbox-caption"></p>
  </div>
  <button type="button" class="lightbox-nav lightbox-prev" data-lightbox-prev aria-label="Previous">&lsaquo;</button>
  <button type="button" class="lightbox-nav lightbox-next" data-lightbox-next aria-label="Next">&rsaquo;</button>
</dialog>
<script src="../scripts/lightbox.js"></script>
```

- [ ] **Step 2: Write `src/scripts/lightbox.js`**

```js
const dialog = document.getElementById('lightbox');
const imageEl = document.getElementById('lightbox-image');
const timestampEl = document.getElementById('lightbox-timestamp');
const captionEl = document.getElementById('lightbox-caption');

let thumbs = [];
let currentIndex = -1;

function refreshThumbs() {
  thumbs = Array.from(document.querySelectorAll('.thumb'));
}

function openAt(index) {
  const thumb = thumbs[index];
  if (!thumb || !dialog || !(imageEl instanceof HTMLImageElement)) return;
  currentIndex = index;
  imageEl.src = thumb.dataset.fullSrc ?? '';
  imageEl.alt = thumb.dataset.label ?? '';
  if (timestampEl) timestampEl.textContent = thumb.dataset.timestamp ?? '';
  if (captionEl) captionEl.textContent = thumb.dataset.caption || thumb.dataset.label || '';
  if (!dialog.open) dialog.showModal();
}

function step(delta) {
  if (currentIndex < 0 || thumbs.length === 0) return;
  const next = (currentIndex + delta + thumbs.length) % thumbs.length;
  openAt(next);
}

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target.closest('.thumb') : null;
  if (!target) return;
  refreshThumbs();
  const index = thumbs.indexOf(target);
  if (index >= 0) openAt(index);
});

dialog?.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('[data-lightbox-close]')) {
    dialog.close();
  }
});

dialog?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') step(1);
  if (event.key === 'ArrowLeft') step(-1);
});

document.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => step(-1));
document.querySelector('[data-lightbox-next]')?.addEventListener('click', () => step(1));
```

- [ ] **Step 3: Verify the build works**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/Lightbox.astro src/scripts/lightbox.js
git commit -m "Add Lightbox component and vanilla JS navigation"
```

---

### Task 10: Subtask and Misc detail pages

**Files:**
- Create: `src/pages/tasks/[task]/[subtask].astro`
- Create: `src/pages/misc/[slug].astro`

**Interfaces:**
- Consumes: `getCollection`/`render` from `astro:content` (Task 5); `filterImagesForEntry`, `sortCaptureImages`, `getMentorImages`, `groupIntoHourBlocks` from `src/lib/images.ts` (Task 4); `<ThumbnailGrid>` (Task 8); `<Lightbox>` (Task 9); `<Layout>` (Task 2).

- [ ] **Step 1: Write `src/pages/tasks/[task]/[subtask].astro`**

```astro
---
import type { ImageMetadata } from 'astro';
import { getCollection, render } from 'astro:content';
import { Image, getImage } from 'astro:assets';
import Layout from '../../../components/Layout.astro';
import ThumbnailGrid from '../../../components/ThumbnailGrid.astro';
import Lightbox from '../../../components/Lightbox.astro';
import { filterImagesForEntry, getMentorImages, groupIntoHourBlocks, sortCaptureImages } from '../../../lib/images';

export async function getStaticPaths() {
  const entries = await getCollection('tasks');
  return entries.map((entry) => {
    const [task, subtask] = entry.id.split('/');
    return { params: { task, subtask }, props: { entry } };
  });
}

const { entry } = Astro.props;
const [task, subtask] = entry.id.split('/');
const { Content } = await render(entry);

const globMap = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/tasks/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);
const allImages = filterImagesForEntry(globMap, `/src/content/tasks/${entry.id}`, entry.data.captions ?? {});

for (const filename of Object.keys(entry.data.captions ?? {})) {
  if (!allImages.some((img) => img.parsed.raw === filename)) {
    console.warn(`[mrc-tasks] Task ${entry.id}: caption references missing file "${filename}"`);
  }
}

const captureImages = sortCaptureImages(allImages);
const mentorImages = getMentorImages(allImages);
const blocks = groupIntoHourBlocks(captureImages);

const cover = captureImages[0]?.src;
const ogImageResult = cover ? await getImage({ src: cover, width: 1200 }) : null;
const ogImage = ogImageResult ? new URL(ogImageResult.src, Astro.site).toString() : undefined;
const description = (entry.data.mentorPrompt ?? '').slice(0, 160);
---
<Layout title={`${task}${subtask.toUpperCase()}: ${entry.data.title}`} description={description} ogImage={ogImage}>
  <article class="subtask">
    <header class="subtask-header">
      <span class="subtask-badge mono">{task}{subtask.toUpperCase()}</span>
      <h1>{entry.data.title}</h1>
    </header>

    <section class="assignment">
      <h2>Assignment</h2>
      {entry.data.mentorPrompt && <p>{entry.data.mentorPrompt}</p>}
      {mentorImages.length > 0 && (
        <div class="mentor-images">
          {mentorImages.map((img) => (
            <Image src={img.src} width={480} alt={img.parsed.label} />
          ))}
        </div>
      )}
    </section>

    <section class="captures">
      <h2>Captures</h2>
      {blocks.length > 0 ? <ThumbnailGrid blocks={blocks} /> : <p class="empty-state">No captures yet.</p>}
    </section>

    <section class="response">
      <h2>My read</h2>
      <Content />
    </section>
  </article>

  <Lightbox />
</Layout>
```

- [ ] **Step 2: Write `src/pages/misc/[slug].astro`**

```astro
---
import type { ImageMetadata } from 'astro';
import { getCollection, render } from 'astro:content';
import { Image, getImage } from 'astro:assets';
import Layout from '../../components/Layout.astro';
import ThumbnailGrid from '../../components/ThumbnailGrid.astro';
import Lightbox from '../../components/Lightbox.astro';
import { filterImagesForEntry, getMentorImages, groupIntoHourBlocks, sortCaptureImages } from '../../lib/images';

export async function getStaticPaths() {
  const entries = await getCollection('misc');
  return entries.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

const { entry } = Astro.props;
const { Content } = await render(entry);

const globMap = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/misc/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);
const allImages = filterImagesForEntry(globMap, `/src/content/misc/${entry.id}`, entry.data.captions ?? {});

for (const filename of Object.keys(entry.data.captions ?? {})) {
  if (!allImages.some((img) => img.parsed.raw === filename)) {
    console.warn(`[mrc-tasks] Misc ${entry.id}: caption references missing file "${filename}"`);
  }
}

const captureImages = sortCaptureImages(allImages);
const mentorImages = getMentorImages(allImages);
const blocks = groupIntoHourBlocks(captureImages);

const cover = captureImages[0]?.src;
const ogImageResult = cover ? await getImage({ src: cover, width: 1200 }) : null;
const ogImage = ogImageResult ? new URL(ogImageResult.src, Astro.site).toString() : undefined;
const description = (entry.data.mentorPrompt ?? '').slice(0, 160);
---
<Layout title={entry.data.title} description={description} ogImage={ogImage}>
  <article class="subtask">
    <header class="subtask-header">
      <span class="subtask-badge mono">MISC</span>
      <h1>{entry.data.title}</h1>
    </header>

    <section class="assignment">
      <h2>Context</h2>
      {entry.data.mentorPrompt && <p>{entry.data.mentorPrompt}</p>}
      {mentorImages.length > 0 && (
        <div class="mentor-images">
          {mentorImages.map((img) => (
            <Image src={img.src} width={480} alt={img.parsed.label} />
          ))}
        </div>
      )}
    </section>

    <section class="captures">
      <h2>Images</h2>
      {blocks.length > 0 ? <ThumbnailGrid blocks={blocks} /> : <p class="empty-state">No images yet.</p>}
    </section>

    <section class="response">
      <Content />
    </section>
  </article>

  <Lightbox />
</Layout>
```

- [ ] **Step 3: Verify the build works and the subtask page renders**

Run: `npm run build`
Expected: exits 0, `dist/tasks/1/a/index.html` exists and contains `Assignment` and `My read`.

- [ ] **Step 4: Commit**

```bash
git add src/pages/tasks src/pages/misc/[slug].astro
git commit -m "Add subtask and misc detail pages"
```

---

### Task 11: Default OG image

**Files:**
- Create: `scripts/generate-og-default.mjs`
- Create (generated by script): `public/og-default.png`

**Interfaces:**
- Produces: `public/og-default.png`, a static file at `<site><base>/og-default.png` once deployed. Consumed by `Layout.astro`'s fallback (Task 2), used whenever a page has no cover image to build a real OG image from (currently the two overview pages, and any future entry with zero captures).

- [ ] **Step 1: Write `scripts/generate-og-default.mjs`**

```js
import sharp from 'sharp';

const svg = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0a0c0f" />
    <rect x="0" y="0" width="1200" height="630" fill="none" stroke="#23272e" stroke-width="2" />
    <text x="60" y="330" font-family="monospace" font-size="64" fill="#e6e8eb">MrC Tasks</text>
    <text x="60" y="390" font-family="monospace" font-size="28" fill="#d99a3c">Backtesting task review</text>
  </svg>
`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('Wrote public/og-default.png');
```

- [ ] **Step 2: Run the script**

Run: `node scripts/generate-og-default.mjs`
Expected: `Wrote public/og-default.png`, file exists at 1200x630.

- [ ] **Step 3: Verify the build works and the fallback resolves**

Run: `npm run build`
Expected: exits 0, `dist/og-default.png` exists, and `dist/misc/index.html` (which has no cover image) contains `og-default.png` in its `og:image` meta tag.

- [ ] **Step 4: Commit**

```bash
git add scripts/generate-og-default.mjs public/og-default.png
git commit -m "Add default OG image and fallback wiring"
```

---

### Task 12: Content-entry guide, deploy workflow, and full verification pass

**Files:**
- Create: `ADDING-CONTENT.md`
- Create: `.github/workflows/deploy.yml`

**Interfaces:**
- None (documentation and CI config, no code consumed or produced).

- [ ] **Step 1: Write `ADDING-CONTENT.md`**

```markdown
# Adding content

## New task or subtask

1. Create a folder: `src/content/tasks/<task-number>/<subtask-letter>/` (for example `src/content/tasks/2/a/`).
2. Add an `index.md` inside it:
   ```yaml
   ---
   title: "Short descriptive title"
   date: 2026-08-25
   mentorPrompt: |
     Paste the mentor's assignment text here, exactly as posted in Discord.
   captions:
     09-14_entry.png: "Optional short note for this specific image."
   ---

   ## My read

   Your written explanation goes here.
   ```
3. Drop your annotated TradingView screenshots into the same folder, named `HH-MM_label.png` in capture order (for example `09-14_entry.png`, `10-02_management.png`, `11-30_exit.png`). If a subtask spans more than one day, prefix with the date: `2026-08-25_09-14_entry.png`.
4. If the mentor posted his own reference images, name them `mentor_<anything>.png` so they show up in the assignment section instead of the capture sequence.
5. `captions` is optional. Any image without an entry there just shows its filename label (for example `entry` becomes "Entry") in the lightbox.

## New Misc entry

Same as above, but under `src/content/misc/<slug>/` instead of `src/content/tasks/...`, and no task/subtask numbering.

## Publishing

```bash
git add src/content
git commit -m "Add task <n><letter>"
git push
```

GitHub Actions rebuilds and republishes the site automatically. No other step is required: no manual image resizing, no code changes.

## Sharing a link with the mentor

Each subtask has its own URL: `https://zenen0.github.io/mrc-tasks/tasks/<n>/<letter>/`. Paste that into the Discord thread. Discord pulls the Open Graph title, description, and cover thumbnail automatically, the same as a YouTube link.
```

- [ ] **Step 2: Write `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Run the full verification pass**

Run: `npm test`
Expected: 20 passed, 0 failed.

Run: `npm run build`
Expected: exits 0, no unexpected console warnings (only the deliberate malformed-filename/stale-caption warnings should ever appear, and neither should fire against the current placeholder content).

Start the preview server and check it in the Browser tool:
Run: `npm run preview` (leave running)
Then in the Browser pane: open the preview URL, confirm:
- `/mrc-tasks/` shows the Task 1 card with a real thumbnail, badge `1A`, and image count `3`.
- `/mrc-tasks/tasks/1/a/` shows the mentor prompt, three screenshots grouped into hour blocks (09:00 to 10:00, 10:00 to 11:00, 11:00 to 12:00), and the response text.
- Clicking a thumbnail opens the lightbox with the full-size image, timestamp, and caption; Left/Right arrow keys move between images; Escape closes it.
- The theme toggle switches the palette and the choice survives a page reload.
- `/mrc-tasks/misc/` shows the "No misc entries yet." empty state.
- View source on `/mrc-tasks/tasks/1/a/` and confirm `og:title`, `og:description`, and `og:image` are present with absolute URLs under `https://zenen0.github.io/mrc-tasks/`.

Stop the preview server when done.

- [ ] **Step 4: Commit**

```bash
git add ADDING-CONTENT.md .github/workflows/deploy.yml
git commit -m "Add content guide and GitHub Pages deploy workflow"
```

- [ ] **Step 5: Stop and ask before publishing anything**

Everything up to this point is local. Creating the `Zenen0/mrc-tasks` GitHub repository and running `git push` makes this content publicly reachable (per the earlier public-repo confirmation, that's expected, but the push itself still needs an explicit go-ahead in chat before it happens). Do not run `git remote add` / `git push` as part of this task; surface that the site is ready to view locally and ask before publishing it.

---

## Acceptance check (BRIEF.md step 7)

Before calling this done, look at the built site with fresh eyes: does it read as template-default or AI-scaffolded? Specifically check:
- No em-dashes anywhere in rendered UI copy.
- No gradient/glassmorphism, no bento filler cells, no decorative icon set beyond the toggle/close/chevron glyphs.
- The grid reads dense and scannable, not padded like a consumer SaaS landing page.
If any of these fail, revisit `src/styles/tokens.css` / `global.css` before treating this as shippable.
