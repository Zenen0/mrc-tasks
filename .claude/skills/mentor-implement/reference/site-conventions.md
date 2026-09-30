# Site conventions for mentor material

A quick map for implementation. `PROJECT_STATE.md` ("Architecture") and the
code are authoritative. If they disagree with this file, follow them and fix
this file.

## Formal Task assignment ("Mr Casino's task")

- File: `src/content/tasks/N/task.md`. Frontmatter is only `title: "..."`.
- Body: markdown rendered at `/tasks/N/assignment/` inside `.assignment-body`.
  - `## Heading` sections (amber, uppercase), `### h3` sub-headings, tables,
    lists, `**bold**` for load-bearing callouts (deadlines, scope changes).
  - `> blockquote` = amber callout box, **only for formal deliverables**, not
    for ordinary mentor quotes.
  - h2/h3 have `scroll-margin-top`, so in-page `#anchor` links work.
- Images: copy into `src/content/tasks/N/` with descriptive names
  (e.g. `refresh-15min.jpg`), embed with `![alt](./file.jpg)` where he posted
  them. Click-to-zoom is automatic.
- A continuation of an existing Task (e.g. "we expand on task 2") is usually
  new `##` sections appended to that Task's `task.md`, not a new Task.
- The user's own work lives at `/tasks/N/mine/` (subtasks `src/content/tasks/N/<id>/index.md`).
  Never mix mentor material into it.

## Reference entry (taught technical framework)

- File: `src/content/reference/<slug>/index.md`, rendered at
  `/reference/<slug>/`, listed at `/reference/` (nav: Tasks · Reference ·
  Misc). Same frontmatter as Misc (`title`, `date`, `order`, optional
  `mentorPrompt`); no `relatedTask` - Reference pages relate to several Tasks,
  so use a closing "Related:" line instead.
- Body renders inside `.assignment-body` (same styling as Task assignments:
  amber h2, h3, tables, `scroll-margin-top`). Here `> blockquote` is the
  mentor's own definition or rule statement, verbatim.
- Images: `src/assets/reference/<topic>/` (never the entry folder), referenced
  as `![alt](../../../assets/reference/<topic>/file.jpg)`, full width,
  click-to-zoom, annotations transcribed under each image.
- Pages so far: `terminology` (1), `rules-of-analysis` (2),
  `worked-example-3000-reversal` (3). Stable anchors: Terminology `#fu`,
  `#attempted-fu`, `#negation`, `#hcs`, `#x3`, `#laol`, `#core-liquidity`;
  Rules `#1-leverage` ... `#12-optimism-and-pessimism`, `#entry-checklist`.

## Misc entry

- File: `src/content/misc/<slug>/index.md`, rendered at `/misc/<slug>/`.
- Frontmatter: `title`, `date` (import date), `order: N` (always explicit;
  `/misc/` sorts by order, then date, then title), optional
  `mentorPrompt: |` (short framing shown above the body), optional
  `relatedTask: "N"` (shows a "-> Task N" tag).
- Body renders inside `.response`.
- **Images:** put them in `src/assets/misc/<topic>/`, **not** in the entry
  folder (anything in the entry folder is auto-shown in the page's "Images"
  grid). Reference with
  `![alt](../../../assets/misc/<topic>/file.jpg)`. The alt text is the
  lightbox caption.
- Collapsible gallery:
  ```
  <details class="response-gallery">
  <summary>What these images are</summary>

  ![alt](../../../assets/misc/<topic>/a.jpg)
  ![alt](../../../assets/misc/<topic>/b.jpg)

  </details>
  ```
- Extending an existing entry: add a section at the insertion point the
  analysis names, and update any "Deferred threads" / follow-up links.

## Shared code touched by earlier batches (reuse before adding)

- `src/styles/global.css`: `.assignment-body ...`, `.response img`,
  `.response-gallery`, `.misc-header` / `.misc-badge`.
- `src/scripts/lightbox.js`: triggers on `.thumb`, `.assignment-body img`,
  `.mentor-images img`, `.response img`.
- `src/content.config.ts`: collection schemas (`tasks`, `misc`, `reference`, `taskMeta`). Add a field only if genuinely
  needed.
- `ADDING-CONTENT.md`: user-facing how-to. Update it if a convention changes.

## Validation details

- Clean build matters: Astro's content-layer cache hides deletions unless
  `.astro`, `node_modules/.astro` and `dist` are removed first.
- `check-dist.mjs` checks internal hrefs, image srcs/srcsets and `#anchors`
  across all of `dist/` for base `/mrc-tasks`. It does not fetch external URLs.
- Overflow check in the preview tab (run on each changed page at 375px):
  ```js
  [document.documentElement.scrollWidth, document.documentElement.clientWidth,
   [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 5).map(e => e.tagName + '.' + e.className)]
  ```
- Deploy happens on push to `main` (GitHub Actions). Committing and pushing
  come after user review, not in this skill.
