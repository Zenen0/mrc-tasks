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

## Weekly programme (Week N, Task M)

Part of the Tasks system (not a fourth section; nav stays Tasks · Reference ·
Misc). Built for Week 1 (2026-09-30). Week N Task M never reuses the
standalone Task routes or folders (`/tasks/M/`, `src/content/tasks/M/`).

- Content: `src/content/weeks/<N>/` (never under `src/content/tasks/`, whose
  globs would sweep Week files into the standalone Tasks).
  - `week.md`: frontmatter `title` (topic, e.g. "Zones"), `summary`, optional
    `keyQuote`, optional `study: {label, href, note}` ("Study first" callout;
    `href` without the base, e.g. `/reference/zones/`). Body = the landing
    page's closing sections (pacing, also-from, after).
  - `task-<M>/task.md`: frontmatter `title`, `short` (row heading / pager
    label), optional `target` + `unit` (My Work progress "0 / 10 sessions"),
    optional `mineGuide` (editorial "What goes here" list). Body = the
    assignment, same conventions as a standalone `task.md` (`> blockquote` =
    formal deliverable only; At a glance table; notes in italics).
  - `task-<M>/mine/<entry>/index.md`: future My Work entries (standalone
    subtask schema; zero-padded ids, e.g. `s01`). Leave `mine/` absent until
    the user has real work. Never mix mentor material in.
- Collections (`src/content.config.ts`): `weekMeta` (`*/week.md`, id `1`),
  `weekTasks` (`*/*/task.md`, id `1/task-2`), `weekWork`
  (`*/*/mine/**/index.md`, id `1/task-2/mine/s01`). Helpers:
  `src/lib/weeks.ts` (+ tests).
- Routes (`src/pages/tasks/weeks/`): `/tasks/weeks/` (Weekly Programme
  index), `/tasks/weeks/<N>/` (landing: summary, study-first, one
  `#task-<M>` row per Task with Assignment | My Work cards, then the body),
  `/tasks/weeks/<N>/task-<M>/assignment/` (`chart-page`, prev/next pager),
  `.../mine/`, `.../mine/<entry>/`, and `.../task-<M>/` (meta-refresh to the
  landing row). Breadcrumbs: Tasks › Weekly Programme › Week N: Topic ›
  Task M › Assignment | My Work.
- Home page (`src/pages/index.astro`): "Weekly Programme" section (WEEK N
  cards, oldest first) above "Standalone tasks".
- Images: `src/assets/weeks/<N>/task-<M>/`, referenced as
  `![alt](../../../../assets/weeks/<N>/task-<M>/file.jpg)`. Week-level
  technical teaching goes to Reference, not the Week pages.
- `.assignment-body h4` exists for chart headings under an h3 phase (e.g.
  Week 1 Task 2's exercise 2). `details.practice-answer` = collapsible answer
  charts for a try-first practice exercise, full chart width on `chart-page`.

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
  `worked-example-3000-reversal` (3), `zones` (4), `timeframe-strength` (5). Stable anchors: Terminology `#fu`,
  `#attempted-fu`, `#negation`, `#hcs`, `#x3`, `#laol`, `#core-liquidity`;
  Rules `#1-leverage` ... `#12-optimism-and-pessimism`, `#entry-checklist`;
  Zones `#the-four-zone-types`, `#the-rules`, `#which-part-of-the-wick`,
  `#the-weakest-att-fu-in-depth`, `#three-levels-of-use`,
  `#reactions-and-expiry`, `#full-zone-mark-up-for-a-ny-session`;
  TFS `#the-five-tfs-categories`, `#established`, `#forming-the-power-poi`,
  `#tfs-and-zones`, `#the-established-tfs-retest`, `#how-close-is-a-retest`,
  `#both-sides-established`, `#worked-example-zones-and-tfs-on-current-price`.

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

## Image presentation by function

The principle is in `CLAUDE.md`. This is how to build it.

**Teaching charts** (Reference pages, technical worked examples, chart-heavy
mentor explanations, Task charts that teach or demonstrate the assignment):
the Reference pages are the model.

- Render inside `.assignment-body` (Task assignment pages and Reference
  pages already do). Its `img` rule is `display: block; max-width: 100%;
  height: auto`, with a border, a `--space-3` vertical margin and lightbox
  zoom. Astro writes the file's real `width`/`height`, so the aspect ratio is
  kept and a chart never renders larger than its native pixels.
- One chart per paragraph (`![alt](...)` on its own line with blank lines
  around it), never several on one line and never in `<details>` galleries.
- The sequence for each chart: the sentence or heading that introduces it,
  then the chart, then `Chart annotations (<timeframe>):` as a list of the
  annotations transcribed exactly, then a short explanation or rule link.
  Sequential examples (e.g. 4hr -> 30 min -> 10 min -> 1 min) get their own
  `##`/`###` heading each, so every chart stays attached to its text.
- Alt text states the timeframe and the key annotation. It is also the
  lightbox caption.
- Width comes from the **`chart-page`** class (in `global.css`), the house
  style for chart-heavy instructional pages. The Reference template uses it
  (`<article class="subtask chart-page">`). The article is capped at 1280px,
  so a chart shows up to its native width. Prose, headings, lists,
  blockquotes, the header and the Context block are capped at 820px (a
  readable measure). Chart paragraphs (`p:has(> img)`) and tables keep the
  full width. Standalone Task assignment pages don't use it
  (`article.assignment-page` is capped at 760px, text and charts alike); Week
  assignment pages do (user-approved).
- For a new chart-heavy page that isn't a Task, use the Reference template
  or add `chart-page` to its article. Converting Task or Misc templates to
  `chart-page` needs the user's approval.

**Supporting / contextual screenshots** (ChatGPT or web captures, news
screenshots, Discord screenshots, portrait phone captures, image dumps):
use judgement. In Misc (`.response`), a single inline image is capped at
420px (`.response > p > img`), and a group goes in
`<details class="response-gallery">` (160px thumbnail grid, zoom kept).
That cap is deliberate for tall portrait screenshots, which would dominate
the page at full width.

A Misc entry currently has **no opt-in** for full-width teaching charts
(the 420px cap applies). If a Misc batch has teaching charts, route them to
Reference under the destination rule, or propose a style change to the user
first.

In the analysis's image map, record each image's function (teaching chart
or supporting screenshot) so implementation can pick the presentation.

Don't mass-convert older pages to this style without the user's approval.

## Shared code touched by earlier batches (reuse before adding)

- `src/styles/global.css`: `.assignment-body ...`, `.response img`,
  `.response-gallery`, `.misc-header` / `.misc-badge`.
- `src/scripts/lightbox.js`: triggers on `.thumb`, `.assignment-body img`,
  `.mentor-images img`, `.response img`.
- `src/content.config.ts`: collection schemas (`tasks`, `misc`, `reference`, `taskMeta`, `weekMeta`, `weekTasks`, `weekWork`). Add a field only if genuinely
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
