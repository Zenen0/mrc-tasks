# MrC Tasks Storage — Design Spec

Date: 2026-08-25
Status: Approved, proceeding to implementation plan

## Context

See [`BRIEF.md`](../../../BRIEF.md) for the original brief. This document is the technical delta produced by brainstorming: the concrete content model, page structure, visual tokens, and build/deploy mechanics needed to implement it.

## Goals

- A static Astro site that turns unlabeled Discord trading-backtest screenshots into a 3-level browsable system (task overview → subtask gallery → lightbox).
- Shareable per-subtask links with Open Graph previews, for pasting into the Discord thread.
- Manual, folder-based content entry with zero build-time configuration per new task.
- Visual register: dark trading-terminal restraint, not consumer SaaS. See dial settings in `BRIEF.md`.

## Non-goals

- No backend, no CMS, no Discord bot/API integration.
- No auth / access control (public-but-unlisted GitHub Pages is accepted).
- No win/loss/outcome tracking — this is backtesting practice, not trade P&L.
- No UI framework or CSS framework dependency.

## Content model

```
src/content/
  tasks/
    <task-number>/
      <subtask-letter>/
        index.md                    # mentor prompt + your response + captions
        mentor_<anything>.png       # optional — images the mentor posted
        HH-MM_<label>.png           # your annotated screenshots, capture order
        YYYY-MM-DD_HH-MM_<label>.png  # optional multi-day form
  misc/
    <slug>/
      index.md
      <any images>
```

### `index.md` frontmatter (tasks and misc, same schema)

```yaml
---
title: "EUR/USD — London session FVG"
date: 2026-08-20            # default date for bare HH-MM filenames
mentorPrompt: |
  Mark the liquidity zones on EUR/USD 15m and 1h before London open.
  Annotate where you'd expect a sweep.
captions:                   # optional, keyed by exact filename
  09-14_entry.png: "Waiting for the 15m FVG retest before sizing in."
  10-02_exit.png: "Partial at prior high, trailing the rest."
---

## My read

Your written explanation / final read goes here as the markdown body.
```

Validated via an Astro Content Collections `zod` schema (`title` and `date` required, everything else optional). A subtask/misc entry with an empty body and no `mentorPrompt` is valid — it renders as "pending", not an error, so a scaffolded-but-not-yet-written entry doesn't break the build.

### Filename parsing rules

- Pattern: `^(?:(\d{4}-\d{2}-\d{2})_)?(\d{2})-(\d{2})_(.+)\.(png|jpe?g|webp)$`
- Capture group 2/3 → hour/minute. Capture group 1 (optional) → overrides the entry's `date`. Capture group 4 → label, prettified (`_`/`-` → space, title-cased) as the fallback caption when `captions` doesn't have an entry for that filename.
- Files matching `^mentor_` are treated as the mentor's own images (rendered in the assignment section, not the capture sequence) regardless of whether they match the timestamp pattern.
- A file that matches neither pattern: build emits a `console.warn` naming it and the offending path, still renders it (sorted last within its folder, raw filename as label) rather than failing the build.

### Images

- Colocated per entry, read via `import.meta.glob<{ default: ImageMetadata }>('/src/content/**/*.{png,jpg,jpeg,webp}', { eager: true })`, filtered by the entry's directory prefix.
- Rendered through `astro:assets` `<Image>` — a small `~320px` width variant for grid thumbnails, full original width (capped ~1600px) for the lightbox and OG image. No manual resizing at any point.

## Routing / pages

| Route | Renders |
|---|---|
| `/` | Task overview: cards grouped by task number, one card per subtask (cover thumbnail, image count badge, mentor prompt excerpt). Separate "Misc" nav entry. |
| `/misc/` | Flat grid of misc entry cards, same card component as subtasks. |
| `/tasks/[task]/[subtask]/` | Mentor's assignment (text + his images) → chronological screenshot grid grouped into collapsible `<details>` hour blocks → your written response. |
| `/misc/[slug]/` | Same page shell as a subtask page, without task/subtask numbering. |

Astro Content Collections generate these as static paths at build time (`getStaticPaths`); no server, no client routing.

## Lightbox

- Native `<dialog>`, opened/closed via a small vanilla-JS module (no framework). Populated from a `data-*` attribute set on each thumbnail button (image src, timestamp, label, caption) — no client-side data fetch.
- Left/Right arrow keys move to the previous/next image in the same subtask without closing the dialog. `Esc` / backdrop click closes (native `<dialog>` behavior).
- Motion: a single ~150ms opacity transition on open/close. Nothing else animated.

## Visual system

- **Palette**: dark by default (near-black background, high-contrast off-white text, single amber accent for active/hover/current-block state). Light theme is a neutral off-white/gray inversion of the same token set. Toggle button in the header; choice persisted to `localStorage`; a tiny inline `<script>` in `<head>` applies the stored theme before first paint to avoid a flash.
- **Type**: `ui-monospace, "Cascadia Code", "SF Mono", Consolas, monospace` for timestamps, filenames, badges, nav chrome. System sans stack (`system-ui, -apple-system, "Segoe UI", sans-serif`) for mentor-prompt/response prose. No web fonts.
- **Density**: tight consistent grid (CSS Grid, `auto-fill`/`minmax` for thumbnail rows), small gutters, no card padding bloat. Every grid cell maps to a real image or entry — no filler cells.
- **Anti-slop compliance** (from `BRIEF.md`'s hard bans): zero em-dashes in any UI copy or generated text; no gradient/glassmorphism; no decorative icon set — the few icons needed (theme toggle, close, chevron) are hand-drawn inline SVG, used only where they carry meaning.

## Build & deploy

- `astro.config.mjs`: `site: 'https://zenen0.github.io'`, `base: '/mrc-tasks'`.
- GitHub repo: `Zenen0/mrc-tasks`, public (required for free GitHub Pages on a personal account — confirmed acceptable).
- Deploy via the standard `withastro/action` GitHub Actions workflow, triggered on push to `main`. No new paid service.
- OG tags per subtask/misc page: `og:title` from `title`, `og:description` from a truncated `mentorPrompt`/response excerpt, `og:image` from that entry's cover screenshot (first chronologically) built to a fixed OG-friendly size via `getImage()`, served as an absolute URL using `site`+`base`. An entry with zero screenshots yet falls back to one static site-wide default OG image instead of failing the build.

## Error handling / edge cases

| Case | Behavior |
|---|---|
| Malformed image filename | Console warning at build time; image still renders, sorted last, raw filename as label. |
| Subtask with zero images yet | Card and page still render; thumbnail area shows a "no captures yet" placeholder tile; count badge shows `0`. |
| Missing `mentorPrompt` / empty response body | Renders a "pending" placeholder instead of blank space; does not fail the build. |
| `captions` entry for a filename that doesn't exist in the folder | Console warning at build time (stale caption); ignored otherwise. |
| Entry with zero screenshots, OG image requested | Falls back to one static site-wide default OG image (a plain dark card with the site name) instead of failing the build. |

## Out of scope confirmations

- No Discord bot / automated import — content entry is manual folder + `index.md` editing, documented in `ADDING-CONTENT.md`.
- No dependencies beyond Astro + its built-in `astro:assets`/Sharp image pipeline. No Tailwind, no component library, no icon package, no animation library.
- Not reusing motorsport-calendar's components, color tokens, or animation style. Accent is amber, not teal/blue.

## Testing / verification approach

Static site, no backend logic beyond build-time content processing, so verification is:

1. `npm run build` completes with no errors, and the malformed-filename/stale-caption warnings above are the only expected console warnings (verified against a deliberately-malformed test file removed before the real build).
2. Manual pass through all 3 view levels in the Browser preview tool: overview → subtask page → lightbox (including arrow-key navigation and theme toggle).
3. View page source on a subtask page to confirm OG tags resolve to absolute, correct URLs.
4. Acceptance-bar review per `BRIEF.md` step 7: does it read as template-default/AI-scaffolded? If yes, revisit the dial settings before shipping.
