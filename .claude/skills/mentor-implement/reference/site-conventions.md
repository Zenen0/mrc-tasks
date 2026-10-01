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
    Optional (added for Week 3): `label` replaces "Task M" everywhere it is
    shown (landing row, badges, titles, breadcrumbs, pager, redirect) via
    `weekTaskLabel()` - use it when the mentor did not number the Week's Tasks
    (Week 3: `label: "Assignment"`, internal slug still `task-1`); `parts:
    [{key, label, target, unit}]` for separately counted components - the
    landing card and My Work page then show one progress line per part
    (`partProgress()`), instead of `target`/`unit`. Weeks without these fields
    render exactly as before.
  - `task-<M>/mine/<entry>/index.md`: future My Work entries (standalone
    subtask schema plus optional `part: "A"` = the `parts` key the entry counts
    toward; zero-padded ids, e.g. `s01`). Leave `mine/` absent until
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
  technical teaching may *also* go to Reference, but the assignment page keeps
  whatever is needed to do the Task (see "Task pages stay self-contained").
- `.assignment-body h4` exists for chart headings under an h3 phase (e.g.
  Week 1 Task 2's exercise 2). `details.practice-answer` = collapsible answer
  charts for a try-first practice exercise, full chart width on `chart-page`.

## Segments (Segment N, one assignment each)

Part of Tasks (nav unchanged), built 2026-10-01 for Mr Casino's three-part
top-down programme given after the Weekly Programme. One Assignment + My Work
pair per Segment, so there is **no `task-M` level**.

- Content: `src/content/segments/<N>/`:
  - `segment.md`: `title`, `summary`, `purpose` (his own one-line purpose,
    shown on the Segments index), optional `keyQuote`, optional `study`
    (as `week.md`). Body = a short closing note on the landing page.
    Optional `label` (added for "Recap & Puzzle", folder `4`): replaces
    "Segment N" everywhere it is shown (index/home badges, landing h2,
    breadcrumbs, pager, titles) via `segmentLabel()`. Use it for an unnumbered
    follow-on so the folder number stays internal. Unlabelled Segments render
    exactly as before.
  - `assignment.md`: `title`, `short` (landing row heading), `parts: [{key,
    label, target?, unit?}]` (required), optional `mineGuide`. Body = the
    assignment page (same conventions as a Week `task.md`).
  - `mine/<entry>/index.md`: future My Work entries (`part: "<key>"`).
- Collections `segmentMeta`, `segmentAssignments`, `segmentWork`; helpers
  `src/lib/segments.ts` (+ tests); progress lines reuse `partProgress()` from
  `src/lib/weeks.ts`.
- Routes (`src/pages/tasks/segments/`): `/tasks/segments/` (index: intro +
  branch cards with `purpose`), `/tasks/segments/<N>/` (landing, pair at
  `#assignment`), `/tasks/segments/<N>/assignment/` (`chart-page`, prev/next
  Segment pager), `/tasks/segments/<N>/mine/`, `.../mine/<entry>/`.
  Breadcrumbs: Tasks › Segments › Segment N: Title › Assignment | My Work.
- Home page: "Segments" section directly above "Weekly Programme" (TaskCard
  without a count; `subtaskCount` is optional).
- Mentor labels stay visible: Segment 1's own "Task 1/2/3" are part labels
  and headings; editorial labels (Segment 3 "Task A/B/C") need an italic note.
- Images: `src/assets/segments/<N>/`, referenced as
  `![alt](../../../assets/segments/<N>/file.jpg)` from both the Segment
  `assignment.md` and a Reference `index.md` (same depth, one shared file).

**Uncounted parts (Weeks and Segments):** `parts[].target` / `unit` are
optional. A part without `target` is a requirement with no number from the
mentor; My Work shows "No set count · Not started" (or "N entries · no set
count"). Never invent a target.

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
  `worked-example-3000-reversal` (3), `zones` (4), `timeframe-strength` (5),
  `liquidity` (6), `top-down-extraction-cycle` (7, images shared from
`src/assets/segments/`). Stable anchors: Terminology `#fu`,
  `#attempted-fu`, `#negation`, `#hcs`, `#x3`, `#laol`, `#core-liquidity`;
  Rules `#1-leverage` ... `#12-optimism-and-pessimism`, `#entry-checklist`;
  Zones `#the-four-zone-types`, `#the-rules`, `#which-part-of-the-wick`,
  `#the-weakest-att-fu-in-depth`, `#three-levels-of-use`,
  `#reactions-and-expiry`, `#full-zone-mark-up-for-a-ny-session`;
  TFS `#the-five-tfs-categories`, `#established`, `#forming-the-power-poi`,
  `#tfs-and-zones`, `#the-established-tfs-retest`, `#how-close-is-a-retest`,
  `#both-sides-established`, `#worked-example-zones-and-tfs-on-current-price`;
  Liquidity `#what-liquidity-is`, `#the-statements`,
  `#liquidity-types-basic-and-advanced`,
  `#the-complete-picture-a-worked-example`, `#step-1-zones-12hr-to-50-min`,
  `#step-2-tfs-and-liquidity-on-30-min`, `#the-last-area-of-liquidity`,
  `#45-min-the-directional-outlook`, `#10-min-which-side-is-more-major`,
  `#1-min-the-banks-execution`, `#unresolved`; Cycle `#the-cycle`,
  `#the-base-execution-and-extraction-model`, `#ts-build`,
  `#hcs-as-the-refinement`, `#laol-down-the-cycle`,
  `#the-three-tradable-points`, `#choosing-a-style`, `#laol-ts-and-tfs`; Zones also
  `#more-refinement-rules-week-3`.

## Misc entry

- File: `src/content/misc/<slug>/index.md`, rendered at `/misc/<slug>/`.
- Frontmatter: `title`, `date` (import date), `order: N` (always explicit;
  `/misc/` sorts by order, then date, then title), optional
  `mentorPrompt: |` (short framing shown above the body), optional
  `relatedTask: "N"` (shows a "-> Task N" tag).
- Body renders inside `.response`.
- **Text-heavy entries (opt-in):** wrap the whole markdown body in
  `<div class="assignment-body">` ... `</div>` (blank line after the opening
  tag and before the closing one). It gets the Task/Reference body styles
  (amber h2, h3/h4, styled `>` quotes, lists) and a 760px measure
  (`.response > .assignment-body`). First used by the Fundamentals Series
  page; older Misc entries are not converted.
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

## Task pages stay self-contained

Principle in `CLAUDE.md` ("Task material stays self-contained"). In practice:

- Every chart/teaching block the analysis classifies **Task** or
  **Task + Reference** is published on the Task/Assignment page, beside the
  instruction it illustrates, even when Reference shows it too. Do not replace
  it with a "see Reference" link. Links to Reference are for going deeper.
- One image file, two pages: store it once (in the Reference topic folder if
  Reference uses it, else the Task/Week folder) and reference the same file
  from both markdown bodies with the right relative depth (from a Week
  `task.md`: `../../../../assets/...`; from a Reference `index.md`:
  `../../../assets/...`). Astro emits one shared output file. Don't copy an
  image just to have a second copy.
- Keep the same transcribed annotations and unresolved notes on both pages;
  the Task page may trim Reference-only cross-link commentary.
- Only **Reference-only** material (broader theory/background the Task is
  fully understandable without) is left off the Task page.
- Don't mass-convert older Tasks to this; apply it to new batches and to
  pages being edited anyway.

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
- `src/content.config.ts`: collection schemas (`tasks`, `misc`, `reference`, `taskMeta`, `weekMeta`, `weekTasks`, `weekWork`, `segmentMeta`,
  `segmentAssignments`, `segmentWork`). Add a field only if genuinely
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
