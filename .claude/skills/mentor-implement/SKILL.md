---
name: mentor-implement
description: Implement a user-approved ANALYSIS.md for a mentor source batch into the Astro site (Task assignment or Misc entries), validate (tests, clean build, link/image check, browser preview, mobile overflow) and update PROJECT_STATE.md. Stops before committing. Only run when the user has approved the analysis.
argument-hint: "<path to approved ANALYSIS.md> [notes on approved decisions]"
disable-model-invocation: true
---

# /mentor-implement - build the approved analysis into the site

Stage 2 of the raw-source workflow in `CLAUDE.md`. Ideally a fresh session.

Arguments: `$ARGUMENTS`

## 0. Inputs - explicit only

- The `ANALYSIS.md` path must be supplied. If it's missing, ask. Don't pick one.
- Implement only what the user approved. If the arguments or chat record
  decisions on the analysis's open questions, those win. If a decision the
  analysis marked "needed" hasn't been made, ask before building that part.

## 1. Read (once each)

1. `CLAUDE.md`, the authority, including **Source wording and fidelity**.
2. `PROJECT_STATE.md`: current architecture, entries, orders, open threads.
3. The supplied `ANALYSIS.md`, in full.
4. `reference/site-conventions.md` (this skill): file locations, frontmatter,
   image placement, CSS hooks.
5. Only the existing site files you will edit or pattern-match (e.g. the
   target `task.md`, one or two Misc `index.md` files, the relevant CSS
   block).

Do **not** reread the full `raw.md` or all raw images. Open a specific source
line or image only when the analysis marks the point unresolved, or when
implementation genuinely can't proceed without checking the source (e.g.
confirming exact wording the analysis paraphrased). Say when you did this and
why.

## 2. Implement

- Formal Tasks stay numbered Tasks (`src/content/tasks/N/task.md`). Reference
  (taught technical framework) is `src/content/reference/<slug>/index.md`.
  Misc stays Misc (`src/content/misc/<slug>/index.md`). Keep mentor/assignment
  content apart from the user's own work (`/mine/`).
- Build exactly the approved architecture: new vs extended entries, sections,
  order, relatedTask, cross-links, raw-only exclusions.
- Wording: exact for instructions, definitions, counts, rules, warnings and
  distinctive phrases. Direct instructional prose elsewhere, without repeated
  "the mentor says". Attribute opinion. Label forecasts and disputed claims as
  the analysis specifies. Never present them as established fact.
- Images: only the relevant ones. Copy from the batch `images/` to the site
  location under the descriptive names from the analysis, and byte-verify
  (`cmp`). Transcribe chart annotations as text where the analysis says so.
  Present them by function (teaching charts inline and large, supporting
  screenshots by judgement), per "Image presentation by function" in
  `reference/site-conventions.md`.
- Styling: reuse the existing classes first. If something new is needed, make
  it a minimal, reusable, scoped rule. Don't redesign unrelated areas or
  remove useful content.

## 3. Validate (then stop polishing)

Run from the repo root:
```bash
npm test
rm -rf .astro node_modules/.astro dist && npm run build
node .claude/skills/mentor-implement/scripts/check-dist.mjs
```
Then preview (`preview_start` with name `mrc-tasks-preview`, which serves
`dist/`, at `http://localhost:4321/mrc-tasks/`). For every new or changed page:
- it renders, no console errors, images load, lightbox opens;
- index/order/cards correct, cross-links and in-page anchors work;
- at 375px width (`resize_window` preset `mobile`), no horizontal overflow:
  `document.documentElement.scrollWidth <= document.documentElement.clientWidth`.
  Reset to `desktop` afterwards.

Fix actual failures only, re-run the failing check, and stop when all pass.

## 4. Handoff

Update `PROJECT_STATE.md` concisely (not a transcript): what was implemented
(entries, files, images), decisions made, what stayed raw-only, unresolved
items, open threads opened or closed, and **Next session must start with**
(normally: commit and push this batch after user review, then confirm the
deploy).

Then **stop**. Do not commit or push. Report to the user: pages changed or
added (with local URLs), validation results, anything that deviated from the
analysis and why, and the files to be committed.
