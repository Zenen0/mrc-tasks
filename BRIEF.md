# MrC Tasks Storage — Build Brief

## Purpose

Replace a messy Discord thread of unlabeled trading screenshots with one clean system serving two purposes: a shareable link for a trading mentor, and a self-review tool.

## Location

`C:\Users\zanni\Documents\MrC Tasks Storage`

## Architecture (locked)

- Core unit: per-task. Task 1 has subtasks A / B / C (etc.), each subtask is its own page.
- Each task/subtask entry contains:
  - The mentor's original assignment (text + any images he posted in Discord)
  - A chronological sequence of your TradingView screenshots (each one annotated, one per timeframe/hour), in capture order
  - Your written explanation / final read
  - Date/time metadata per image
- View hierarchy (3 levels, so image volume never dumps as a wall):
  1. Task overview — cards per subtask, cover thumbnail + image count badge + mentor's prompt text
  2. Subtask page — chronological filmstrip/grid of thumbnails, optionally grouped into collapsible time blocks (e.g. "09:00–10:00")
  3. Lightbox — click a thumbnail → full-size annotated image + timestamp + your note

## Entry workflow (locked)

- Manual, folder-based. One folder per task/subtask.
- Filenames sort by capture time (e.g. `09-14_entry.png`, `10-02_exit.png`) so no manual ordering step is needed.
- One short text/markdown file per subtask holds the mentor's prompt + your written response.
- Build step (Astro) handles image optimization/thumbnailing automatically — no manual resizing.

## Mentor access & hosting (locked)

- Static site, Astro, no backend.
- Hosting: GitHub Pages (reuses existing GitHub workflow, no new account).
- Every subtask page needs Open Graph meta tags (title, description, thumbnail) so pasting the link into the Discord thread auto-generates a preview card, same behavior as a YouTube link.
- Discord thread stays the communication channel — post one link per task instead of raw dumped screenshots.

## Design direction (from vault audit — taste-skill dial system)

This is a separate visual identity from motorsport-calendar — do not reuse its teal-to-blue accent system, countdown-timer energy, or racing aesthetic. This is a professional trading-ops tool.

- VISUAL_DENSITY: 7–8 (cockpit-dense — needs to hold many images/data points without feeling sparse or padded)
- MOTION_INTENSITY: 2–3 (minimal — functional transitions only, no cinematic/scroll-driven flourishes)
- DESIGN_VARIANCE: 3–4 (structured, consistent grid — mentor needs to scan fast, not admire asymmetric layout)

Register: professional trading-terminal restraint — closer to a Bloomberg terminal or trading dashboard than a consumer SaaS landing page. Dark or restrained-neutral palette, tight grid, monospace or data-forward type for timestamps/tickers, minimal chrome.

Hard bans (anti-AI-look, from taste-skill):

- No em-dashes anywhere in UI copy
- No generic gradient/glassmorphism "premium SaaS" styling
- No bento-grid cells added purely for visual filler — every grid cell maps to real content
- No stock/generic icon sets used decoratively without purpose

## Build sequence

1. Scaffold Astro project in `MrC Tasks Storage`
2. Content structure: `tasks/1/a/`, `tasks/1/b/`, etc. — images + prompt/response text file per subtask
3. Build the 3-level view (overview → subtask gallery → lightbox) per the dial settings above
4. Add OG meta tags per subtask page
5. Init git, push to GitHub, connect GitHub Pages
6. Populate with real current tasks (pull from Discord thread)
7. Review against acceptance bar: does it look template-default or AI-scaffolded? If yes, revisit dial settings before shipping.

## Not in scope for this build

- Discord bot / automated task import (decided: manual copy-paste of mentor's task into the subtask folder)
- Any new dependencies, hosting accounts, or paid services beyond GitHub Pages
- Reusing motorsport-calendar's component library, color system, or animation style

---

## Decisions made during brainstorming (2026-08-25)

These refine the brief above; see [`docs/superpowers/specs/2026-08-25-mrc-tasks-storage-design.md`](docs/superpowers/specs/2026-08-25-mrc-tasks-storage-design.md) for the full technical spec.

- **This is backtesting practice**, not live trades — no win/loss/outcome tracking. Tasks are drills like liquidity marking, zone marking, etc.
- **Misc section**: a top-level, unnumbered area (alongside Tasks) for extra mentor material that doesn't fit the Task/Subtask structure. Same card/page shape as a subtask, just not numbered.
- **Per-image captions**: optional, stored in each subtask's `index.md` frontmatter as a `captions:` map keyed by filename — no sidecar files.
- **Theme**: dark by default, with a light-mode toggle (persisted).
- **Styling**: hand-rolled CSS with custom-property tokens. No Tailwind, no UI framework — keeps the dependency footprint to Astro itself.
- **Accent color**: amber (classic terminal register), explicitly not teal/blue (motorsport-calendar's territory).
- **Hosting**: public GitHub repo (`mrc-tasks`, under GitHub user `Zenen0`), public-but-unlisted GitHub Pages site — confirmed acceptable for this content. Private/access-controlled hosting was ruled out (needs a paid GitHub plan, out of scope).
- **Real Discord content**: not pulled yet as of this build. Site ships with one placeholder subtask demonstrating the real folder/frontmatter convention; real tasks get dropped in afterward following `ADDING-CONTENT.md`.
