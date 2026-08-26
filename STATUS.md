# Status

Last updated: 2026-08-26. Read this first in a new session to pick up where things left off.

## Live

- Site: https://zenen0.github.io/mrc-tasks/
- Repo: https://github.com/Zenen0/mrc-tasks (public, unlisted, GitHub user `Zenen0`)
- Local path: `C:\Users\zanni\Documents\MrC Tasks Storage`, branch `main`
- Every push to `main` auto-deploys via `.github/workflows/deploy.yml` (GitHub Actions, ~30-90s)

## What's built

- Astro static site, hand-rolled CSS (dark/light theme, amber accent), no UI framework
- 4-level browsing: Home (one block per task) -> Task page (that task's subtasks) -> Subtask page (mentor prompt, hour-grouped annotated screenshots, written response) -> Lightbox (full image, timestamp, caption, prev/next)
- Misc section: flat list, for anything that doesn't fit a numbered task
- Breadcrumbs on every task/subtask/misc page; prev/next links between sibling subtasks
- Per-page Open Graph tags, so a subtask link pasted into Discord auto-generates a title/description/thumbnail preview card
- 54 passing unit tests (Vitest) covering the pure logic: filename parsing, image sorting/grouping, OG excerpt truncation, task-hierarchy helpers
- Local-only tool: `npm run add-content` opens a form at `localhost:4322` for adding a task/subtask/misc entry with drag-and-drop screenshots; writes files locally only, never runs git

## Current content (all placeholder, none real yet)

- Task 1 "Liquidity Marking" / subtask 1A
- Task 2 "Zone Marking" / subtask 2A
- Misc "Example misc entry"

## What's next

Pull the real backlog out of Discord and add it via `npm run add-content` or by hand, following `ADDING-CONTENT.md`. Replace or delete the placeholders above once real entries exist, then share the live link in the Discord thread.

## Reference docs

- `BRIEF.md` — original build brief plus decisions made during planning
- `ADDING-CONTENT.md` — exact steps for adding content, both by hand and via the local form
- `docs/superpowers/specs/` and `docs/superpowers/plans/` — the original design spec and implementation plan this site was built from
