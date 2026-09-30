# Project State

Handoff doc for a fresh Claude Code session. Read this first.
Last updated: 2026-09-30 (Week 3: Liquidity implemented - Week 3 landing + one Assignment, new Reference Liquidity page, Week helper `label`/`parts`/`part`, extensions. **Not yet committed**; awaiting user review).

Note: `CLAUDE.md` (repo root) holds the permanent operating rules -
read it first. `STATUS.md` also exists but is stale (pre-dates the
two-branch restructuring); this file supersedes it.

## Goal

Replace a messy Discord thread of a trading mentor's ("Mr Casino")
assignments and the user's screenshots with one clean, static site:
a shareable link for the mentor, and a self-review tool for the user's
own backtesting practice. See `BRIEF.md` for the original build brief.

- Site: https://zenen0.github.io/mrc-tasks/
- Repo: https://github.com/Zenen0/mrc-tasks (GitHub user `Zenen0`)
- Astro, hand-rolled CSS (dark/amber, no framework), GitHub Pages, deploys automatically on every push to `main`.

## Architecture (current, as of this session)

Each Task now has **two branches**, not a flat subtask list:

- `/tasks/N/` - a branch-selector page (title + two cards).
- `/tasks/N/assignment/` - "Mr Casino's task". Rendered straight from
  `src/content/tasks/N/task.md`'s markdown **body** - his text verbatim,
  with his own images embedded inline via normal `![alt](./file.jpg)`
  markdown, placed exactly where he posted them in Discord. Images live
  in the task's root folder (`src/content/tasks/N/`), not a subtask
  folder. Every image in this body is click-to-zoom in the lightbox
  automatically (no cropping) - this required generalizing
  `src/scripts/lightbox.js` to trigger on `.assignment-body img` and
  `.mentor-images img`, not just `.thumb`.
- `/tasks/N/mine/` - "My task", the user's own subtask grid (1A, 1B,
  ...), what used to live at `/tasks/N/` before this session.
- A task shows up on the home page once it has **either** a `task.md`
  or a subtask - see `allTaskNumbers()` in `src/lib/tasks.ts` (this
  replaced the old `distinctTaskNumbers()`, which required a subtask
  to exist first and is now deleted).
- Section headings inside `task.md` bodies use `## Heading` and render
  styled (amber, uppercase) via `.assignment-body h2` in
  `src/styles/global.css`. `**bold**` renders amber too - used for
  load-bearing callouts (deadlines, scope changes). Added for Task 3
  (all scoped to `.assignment-body`, reusable by any task): `### h3`
  sub-headings, markdown tables, list spacing, `> blockquote` styled
  as an amber-edged callout box (used only for formal deliverables -
  not for ordinary mentor quotes), and `scroll-margin-top` on h2/h3 so
  in-page `#anchor` links clear the sticky header.
- Misc entries (`src/content/misc/<slug>/index.md`) are for mentor
  material that isn't specific to one task. They support an optional
  `relatedTask: "N"` frontmatter field (added this session to
  `src/content.config.ts`), which shows a clickable "-> Task N: title"
  tag on both the Misc card and the entry page. They also support an
  optional `order: N` field: `/misc/` sorts by `order`, then `date`,
  then `title`. The current order is 1 Rationality, 2 Trading
  Psychology, 3 Morality, 4 Fundamentals, 5 Earning the Advanced Stage,
  6 Mr Casino's Worldview. Give new entries an explicit `order`.
- **Reference section** (added 2026-09-30, nav **Tasks · Reference ·
  Misc**): `src/content/reference/<slug>/index.md` -> `/reference/<slug>/`,
  index at `/reference/` (cards ordered by `order`). Collection `reference`
  in `src/content.config.ts` (same schema as misc). Pages
  `src/pages/reference/index.astro` + `[slug].astro` (cloned from misc; the
  body renders in `.assignment-body` so it gets Task-style h2/h3/tables/
  anchors; the empty "Images" section is omitted). `MiscCard.astro` now takes
  a `badge` prop (default `MISC`). Images in `src/assets/reference/<topic>/`.
  In Reference, `> blockquote` = the mentor's verbatim definition/rule.
- **Permanent destination rule (user-approved 2026-09-30):** Tasks = formal
  assigned mentor work (deliverables, counts, deadlines); Reference =
  technical trading knowledge taught but not assigned (terms, rules,
  checklists, worked examples, technical chart Q&A); Misc = broader mindset,
  psychology, fundamentals, worldview, progression. The `sources/tasks|misc`
  folder is only an intake location. Recorded in
  `.claude/skills/mentor-analyse/reference/analysis-guide.md`.
- **Inline images in Misc bodies** (added for Misc batch 2): images go
  in `src/assets/misc/<topic>/` (NOT the entry folder - anything in
  `src/content/misc/<slug>/` is auto-shown in the page's "Images" grid)
  and are referenced from the markdown with a relative path. Styled by
  `.response img`; `.response img` added to the lightbox trigger. A
  `<details class="response-gallery"><summary>..</summary>` wrapper
  (blank lines around the images) gives a collapsible thumbnail grid;
  alt text doubles as the lightbox caption.
- Subtask `index.md` no longer needs `mentorPrompt` repeated in its
  frontmatter now that the task-level assignment page exists - only
  set it for a note specific to that one subtask. The subtask
  assignment section simply doesn't render when there's nothing to
  show (no more awkward "Pending.").

- **Weekly Programme** (added 2026-09-30 for Week 1; part of Tasks, nav
  unchanged): content `src/content/weeks/<N>/` (`week.md`,
  `task-<M>/task.md`, future `task-<M>/mine/<entry>/index.md`), collections
  `weekMeta`/`weekTasks`/`weekWork`, helpers `src/lib/weeks.ts`, pages
  `src/pages/tasks/weeks/` -> `/tasks/weeks/`, `/tasks/weeks/N/` (landing:
  Assignment | My Work card pair per Task, rows `#task-M`),
  `/tasks/weeks/N/task-M/{assignment,mine}/`, `.../mine/<entry>/`,
  `.../task-M/` (redirect to the landing row). Week assignment pages use
  `chart-page`. Home page: "Weekly Programme" section above "Standalone
  tasks". Images `src/assets/weeks/N/task-M/`. Details in
  `.claude/skills/mentor-implement/reference/site-conventions.md`.
  Standalone Tasks 1-3 untouched. Breadcrumbs now wrap on narrow screens
  (`.breadcrumb` flex-wrap, site-wide).
  Week 3 added optional `weekTasks` fields `label` (replaces "Task M" in all
  Week UI via `weekTaskLabel()`; a labelled Task's assignment breadcrumb ends
  at the label, and its landing card badge reads "MR CASINO'S <LABEL>") and
  `parts: [{key,label,target,unit}]` (one progress line per part via
  `partProgress()`), and `weekWork` field `part`. Weeks 1-2 HTML verified
  identical to the previous build.

See `ADDING-CONTENT.md` (updated this session) for the exact by-hand
and local-form (`npm run add-content`) steps. The local form does
**not** yet support creating a task's `task.md` assignment - that's
still done by hand.

## Completed so far

- **Mac migration**: verified clean (git, `gh auth`, tests). Fixed a
  missing git identity (was falling back to a bogus auto-generated
  author) - global git config now `Zenen0 <zannino.kristian@gmail.com>`,
  matching the GitHub account and prior Windows commits. Installed nvm
  via Homebrew, pinned Node 22 (`.nvmrc`, matches the deploy workflow).
  Fixed 3 `npm audit` vulnerabilities (one critical RCE in Astro's
  image optimization) - all within existing `package.json` ranges.
- **Task 1 - Major Liquidity**: assignment fully imported (the
  30-chart doji/wick/HCS task, an "Update - before Task 2" section
  documenting the real scope change to **100 repetitions minimum**,
  and a "Corrections" section with 2 correction images). No subtask
  data (1A-1J, the user's own backtests) has been imported yet - "My
  task" is still empty.
- **Task 2 - Top-Down Analysis**: assignment fully imported (the "why
  does major liquidity hold" theory, the 10-example multi-timeframe
  task across 4hr/15min/1min, deadline **20/09/24**, advanced-pacing
  notes, 3 foundational objectives). No subtask data imported yet
  either - "My task" is empty. See "Open question" below.
- **Task 2 extension** (same `task.md`, appended as new `##` sections -
  judged not to warrant its own task/folder since the mentor framed it
  as "we expand on task 2" ahead of Task 3): a new 1-min-only marking
  assignment (10 charts + 30 extra without annotations), Mr Casino's
  own worked full breakdown example (8 charts: 4hr/1hr/15min x2/5min/
  1min x3, saved as `breakdown-4hr.jpg` etc. in
  `src/content/tasks/2/`), and the follow-up assignment (one 4hr-to-1min
  example, one 1min-to-4hr example). Deadline "next Friday" (mentor
  gave no explicit date this time - kept verbatim, not invented).
  Image-to-chart mapping was inferred from each chart's own timeframe
  label rather than the literal position of the "image N" marker in
  the pasted text, since the two didn't line up 1:1 - flagged to the
  user, not corrected silently.
- **Misc**: one entry, "Rationality & Backtesting Discipline" (general
  mentor content, not task-specific - cross-linked to Task 1).
  Misc/Task cards were polished to match (title fills the empty
  thumbnail, centered badge) via new `TaskCard.astro` /
  `MiscCard.astro` components. This session: the Misc entry page's own
  header (`src/pages/misc/[slug].astro`, new `.misc-header`/
  `.misc-badge` CSS) now stacks the title above the "MISC" badge
  instead of side by side, matching the Task-card visual treatment -
  the shared `.subtask-header`/`.subtask-badge` classes used by
  task/subtask pages were deliberately left untouched.
- All placeholder content (old Task 1/2, old Misc example) deleted.
- **Task 3 - RR, Timeframe Strength & Timing** (source + approved
  analysis in `sources/tasks/2026-09-25-task-3/`; 18 images copied
  into `src/content/tasks/3/` with descriptive names - mapping in
  `ANALYSIS.md` section 9). One assignment page, no sub-pages: Overview
  (mentor's 3-subsection list) -> At a glance table (3.1/3.2/3.3 +
  timing + deadline, with in-page links) -> `## 1 · Risk to reward and
  the % compound` (-> Task 3.1 callout) -> `## 2 · Timeframe strength
  and the HTF true stop` (refresh Img 25-30, TFS definition, 5 rules,
  TF tier table, 15m->1hr->3hr, Task 3.2, 11hr->1min, Task 3.3, Task
  aid) -> `## 3 · Key timing` -> Deadline -> After the deadline.
  Chart annotations reproduced as text under each image. Decisions
  (user-approved): "3.1" is marked as an editorial label (mentor's own
  labels are only 3.2/3.3); "breakdown of each swing low..." is the
  lead-in to 3.3; forming-vs-established explained conservatively in
  one italic note (10 min+ backing established, HTF may be forming);
  ATT FU / LAOL / x3 entry model left undefined as written; "1min -
  4hr" kept verbatim; post-deadline summary shown verbatim plus a
  two-column enter/target table introduced as "appears to split";
  Claude's maths/calendar/DST notes kept out of the site. Rule 3's raw
  "complete to our manual capability" published as "compete" (obvious
  typo, per analysis). Dropped: the three "react ✅ when complete"
  lines, Discord reply markers, emoji chatter. Cross-links added from
  Task 2's Related line and the Misc morality entry ("Task 3 will be
  given on Friday") to Task 3. `/tasks/3/mine/` is empty. Committed as
  `628b69d` and deployed (GitHub Actions success; `/tasks/3/assignment/`
  live, HTTP 200).
- **Misc batch 2026-09-25** (first import via the new raw-source
  workflow - source + analysis in `sources/misc/2026-09-25-misc-batch/`).
  A long text-only mentor post (moral relativism, fundamentals, 2023-24
  geopolitics timeline vs gold, discipline). Implemented as two entries,
  both `relatedTask: "2"`:
  - `misc/morality-rationality-and-the-opposing-side/` - rationality +
    "correct morality", market = opposing minds, personal practice,
    discipline (Task 3 "on Friday", repeat Tasks 1-2, **500-1000+
    hours** with stored data, no entitlement, learn from mistakes).
  - `misc/fundamentals-usd-banks-and-gold/` - USD/banks/XAU control
    model, banks' tolerance limit -> swing holds, FU + fractal
    approach, "news reinforces a liquidity-derived bias, doesn't create
    it", the mentor's event timeline, speculation caveats.
  - Existing rationality entry got a "Follow-up" link to the first.
  - Editorial decision (user-approved): geopolitical/worldview material
    kept secondary and attributed; contested claims not stated as fact.
    The "loyal to a different creed" banking passage and the detailed
    Gaza/Israel claims stay in `raw.md`/`ANALYSIS.md` only.
  - Two source links (Instagram footage, Amnesty report) were never
    supplied - judged not needed.
  - The mentor deferred follow-ups (final banking segment, "to whom
    their loyalties lie", Trump attempt, "apocalypse prophecies") -
    cross-link/extend the fundamentals entry when they arrive.
    (Batch 2 delivered the banking/"loyalties"/"apocalypse" threads;
    only the Trump assassination-attempt thread is still open.)
- **Misc batch 2026-09-25 (2)** (source + approved analysis in
  `sources/misc/2026-09-25-misc-batch-2/`; the mentor's long
  "Miscellaneous" worldview post, ~late Oct-early Nov 2024, plus the
  advanced-stage announcement). Committed as `1f4853f` and deployed:
  - New `misc/earning-the-advanced-stage/` (order 4, no relatedTask):
    criteria verbatim, following-instructions test, "value what is
    shared already", what is watched. Framed as a future stage to be
    earned (the user is not a member); the private server is not named
    ("advanced, invite-only stage"), no operational details.
  - New `misc/mr-casinos-worldview-banking-power-and-history/` (order 5,
    no relatedTask): banking critique, Freemasonry account, claims
    list, present-day reading, forecast. Every claim labelled
    (Documented / his interpretation / forecast / disputed /
    unsupported / contradicted / fabricated). Per the user's
    instruction this batch, disputed material is **included with status
    labels** rather than kept raw-only (JFK, 9/11, Pike letter, the
    Zevi/Frank "entwined" claim labelled as a recognised antisemitic
    conspiracy narrative). 12 images (source images 1-12) in
    `src/assets/misc/worldview/`; images 13-17 raw-only.
  - Morality entry: new section "Knowledge as an edge: be informed,
    verify everything" (before "Personal practice").
  - Fundamentals entry: new section "The wider picture: challenges to
    USD dominance (late 2024)" (before "Caveats"); "Still to come"
    replaced by "Deferred threads" with per-thread status.
  - Rationality entry: cross-link to Earning the Advanced Stage.
  - Raw-only: channel logistics, sign-offs, "xd", "don't bash those
    who make the mistake", images 13-17, the user's own annotations.
  - Batch 1's raw-only "loyal to a different creed" passage was NOT
    revisited.

- **Misc batch 2026-09-30 "trading reference"** (source + approved
  analysis in `sources/misc/2026-09-30-misc-trading-reference/`; 21 images
  `misc 18-38`; §16 of its ANALYSIS.md holds the binding user decisions).
  Implemented, validated, user-approved, committed and pushed to `main`:
  - New **Reference** section (see Architecture) with three pages:
    `reference/terminology/` (order 1: FU, attempted FU forms 1/2,
    negation, HCS, HCS + negation, x3 / x3 negation / self-negating x3,
    strength table, LAOL, core liquidity, "used on the charts" (Trail,
    EST, £), "defined elsewhere" pointers; Img 18-27 in
    `src/assets/reference/terminology/`), `reference/rules-of-analysis/`
    (order 2: the 12 rules verbatim + editorial entry checklist + closing
    instruction), `reference/worked-example-3000-reversal/` (order 3:
    XAUUSD 4hr -> 1 min, shown top-down, plus the student Q&A published
    direction-neutral; Img 29-36, 38 in `src/assets/reference/worked-3000/`).
  - New Misc `misc/trading-psychology-the-mindset-of-clarity/` (order 2,
    relatedTask 3): chess vs trading, RR/probability, breaks, backtest more
    than you trade, underlying causes (money, media, society, governments,
    entertainment, habits, maturity/doublethink, faith - attributed, not
    sanitised), supplements with a short "personal suggestion, not medical
    advice" caveat, "still to come". Other Misc entries renumbered.
  - Extensions: Task 1 italic pointer after "attempted FU - a subject of
    later discussion"; Task 2 Related line; Task 3 pointer after rule 5,
    one italic sentence after the forming-vs-established note (forming
    10 min TS entry = "More aggressive but with full TFS factors"), Related
    line; Fundamentals FU -> Terminology; Rationality and Morality Related
    lines; Worldview new "Recommended viewing" section (*2073*, 2024, dir.
    Asif Kapadia; no streaming link).
  - Raw-only: misc 28 (homograph search snippet - "(or close)" kept
    verbatim, no gloss), misc 37 (Discord screenshot of another student),
    the user's notes, streaming links, chat mannerisms.
  - CSS: `.page-intro` (Reference index intro) and `overflow-wrap:
    break-word` on `.response` / `.assignment-body` (a long slash-joined
    quote overflowed at 375px).
  - Tooling: `mentor-source.mjs` label patterns accept `misc N` as well as
    `image N` (from the analysis session - include in the commit).
  - Threads closed: Task 1's "attempted FU - a subject of later
    discussion"; Task 3's undefined ATT FU / LAOL / x3. Threads opened:
    "psychology section to be updated in more depth" (mentor's words);
    "x3 entry model" and "x3 by x3" still undefined (advanced stage). The
    Trump assassination-attempt thread is still open.
- **Misc batch 2026-09-30 "economy"** (source + approved analysis in
  `sources/misc/2026-09-30-misc-economy/`; no images). Despite the intake
  label, the content is worldview/media ("the war of disinformation"), late
  2024 or later (date not verified). User approved all recommended options:
  - No new entry. **Worldview** gets a new `## The war of disinformation (a
    later post)` section (after *Recommended viewing*): why he raised it,
    "Take a side", the team (1000+ members, "traitors"), Zionism as he frames
    it (disclaimer first, Herzl documented-simplified, the Frankism/"elite
    satanism" claim labelled unsupported + antisemitic trope, Icke named with
    his caveat + status note), the trading link blockquote ("to beat the
    manipulation, you can not be the manipulated"), Still to come.
    `mentorPrompt` updated. **Morality** *Knowledge as an edge*: new bullet
    "Independent sources for facts, your own research for conclusions".
    **Psychology** *Media*: one sentence + cross-link.
  - Raw-only: the user's notes, the Instagram/Telegram link lists (only the
    fact they were shared is published), "Forgive me ... I really do not
    care", "they live through the real deal". Folder name left as-is.
  - Thread opened: "next post: the political state of affairs the world is
    reaching for" / "a even deeper exposé". Trump assassination-attempt
    thread still open.

- **Week 1: Zones** (source + approved analysis, §18 authoritative, in
  `sources/tasks/2026-09-30-week-1/`; dated June 2025 by inference only, no
  dates on the site). Committed and pushed as `8a3b374`:
  - Weekly Programme infrastructure (see Architecture) + Week 1 landing,
    3 assignments (Task 1 HTF Zones 2 years; Task 2 Session Zones 10 NY days;
    Task 3 10/7 min Zones & LTF HCS Refinement 30 sessions) and 3 empty My
    Work pages (progress "Not started" / "0 / 10 sessions" / "0 / 30
    sessions", editorial "What goes here" list; no fabricated work).
  - New Reference `zones/` (order 4): theory, 4 zone types, rules + Q&A
    answers (questions paraphrased, no names), weakest ATT FU, three levels,
    HTF sequence, reactions/expiry, try-first practice (answers in
    `details.practice-answer`), live-time application, full NY session
    mark-up, "Where zones sit".
  - Extensions: Terminology (Attempted FU pointer; "Zone" under Defined
    elsewhere; Related), Rules § 9 pointer + Related, worked example Related,
    Misc Psychology new section "Asking questions well (Week 1 reflection)"
    + "Using ChatGPT" + Img 87 collapsed (before *Still to come*).
  - Images: 44 copied and `cmp`-verified - Ref Zones 21, W1 T1 7, W1 T2 11,
    W1 T3 4, Misc 1. The analysis's "Ref Zones 23" total was a miscount (its
    own list has 21; 21+7+11+4+1+11 raw-only = 55).
  - Raw-only: all 11 student screenshots (Img 68, 69, 72-75, 81-85; Img 81's
    mentor text is transcribed), the user's notes, the Week 2 postponement
    reasons ("leak potential", "events since yesterday"), emoji/"xd",
    "A "happy" intensive backtesting now".
  - Unresolved, shown as unresolved on the site (not inferred): U1
    instrument, U2 Task 3 "later" clause (shown as a later step), U3
    standard timeframes for Tasks 1-2 (a student asked; no answer in the
    source - worth asking the mentor), U4 Task 2 HTF TFs, U5 Task 3 session
    type, U6 "HCS x1" (no gloss), U7 body-in-wick expiry, U8 "fade", U9
    1 min "strong FU", U10 chart colours.
  - Threads opened: 3 fundamentals/geopolitics segments announced after
    Week 1 (link to Worldview *Still to come*); Week 2 on schedule.

- **Week 2: Timeframe Strength** (source + approved analysis, **§20
  authoritative**, in `sources/tasks/2026-09-30-week-2/`; June 2025 by
  inference only, no dates on the site). Committed and pushed as `66bb7d9`:
  - `src/content/weeks/2/`: `week.md` (summary, keyQuote "The LTF builds the
    HTF but HTF commands the LTF", study -> TFS page, Focus for now, How the two
    Tasks fit, Also from Week 2 -> Morality), `task-1/task.md` "Established
    TFS Retest POI (2 months, 3hr–30 min)" (no target -> My Work "Not
    started"), `task-2/task.md` "Swing TFS Forming & Zones (30 examples)"
    (`target: 30`, `unit: "examples"` -> "0 / 30 examples"). No `mine/`
    entries.
  - New Reference `timeframe-strength/` (order 5): what TFS is, theory
    (advanced, verbatim), five categories (verbatim + table + note that the
    boundaries overlap and differ from Task 3's tiers / Rules § 8), LTF/HTF
    statement, established vs forming (power POI), TFS and zones, the
    established TFS retest (rules linking to W2 T1 charts; D5 neutral note on
    Task 3 rule 4 vs FU closures down to 45/30 min, no reconciliation;
    nullification; retest proximity table), both sides established, advanced
    hints, and the live worked example (4hr -> 7 min, Img 128 exchange
    paraphrased after the 30 min advanced chart).
  - Extensions: Terminology (TFS pointer, Power POI bullet, Related), Rules
    § 8 pointer, Zones (italic pointer after the "later explored with TFS"
    blockquote - **closes that thread**; 7/10/15 min pointer; Related),
    Worked example 3000 Related, standalone Task 3 one italic line after the
    "(3hr - 5hr - 7hr - 11hr TFS)" ladder, Misc Morality new last section
    "Success, privilege and intention (Week 2 closing lesson)" + mentorPrompt
    + Related. Week 1 pages untouched.
  - Images: 29 copied + `cmp`-verified (W2 T1 9, W2 T2 12, Ref TFS 8) +
    `src/assets/weeks/2/task-1/model-answer-3hr.jpg`, a derived crop of Img
    132 (chart only; student name/avatar/timestamp/share line removed; made
    with `sips` from a scratch copy; the source file's hash is unchanged).
  - D3 applied: spelling fixed only in prose/paraphrase/chart transcriptions;
    `>` verbatim quotes keep his spelling. On Task pages the Q&A answer and the
    model-answer comment are quoted inline/as a list, not `>` (Task-page
    blockquote = formal deliverable only).
  - Raw-only: Img 108 (superseded draft of 109), student screenshots Img 120,
    128, 130, 131 (questions paraphrased anonymously), the user's notes,
    student names, "xd".
  - Unresolved, shown as unresolved: instrument (not stated; examples XAUUSD),
    no standard-TF alternative (50/45 min, 18/14/12/11/7/5hr), "HCS x1 /
    x2 / HCSx2", "x3 body retest", "advanced entry models", FU closures
    below 3hr vs Task 3 rule 4 (worth asking the mentor), Task 2 depth below
    3hr (requirement "3hr +"; his example continues to 30 min).
  - Threads opened: "more on this when we speak about TS" (forming TFS);
    "advanced entry models"; "x3 body retest". Still open: "x3 entry model",
    "x3 by x3", Trump thread, Week 1's 3 fundamentals segments.

- **Week 3: Liquidity** (source + approved analysis, **§13 authoritative**,
  in `sources/tasks/2026-09-30-week-3/`; one post, no date published).
  Implemented, **not committed**:
  - Structure (user decision): ONE Assignment with two required parts, not
    numbered Tasks. `src/content/weeks/3/week.md` (summary quotes
    "Liquidity  Foundational stage", keyQuote "This should now be the base of
    how you backtest.", study -> Liquidity, body `## How it builds` + closing
    L71 quote) and `task-1/task.md` (internal slug only; `label: "Assignment"`,
    `parts` A = 30 sessions, B = 10 price points; body: the two instruction
    paragraphs as `>`, italic note that Part A/B are editorial labels, At a
    glance with A/B columns, What "like so" means + U2 note, On the
    repetitions). Landing shows one Assignment | My Work pair; My Work shows
    "0 / 30 sessions" and "0 / 10 price points". No `mine/` entries. No
    images on Week pages.
  - New Reference `liquidity/` (order 6, title "Liquidity"): definition,
    statements (S2-S6 as h3; Img 133-135 transcribed + collapsed
    `response-gallery`, framed as "appears to be a ChatGPT answer, shared as
    research material"; 134/135 cut-off noted), basic vs advanced table +
    U2 note, worked example (Step 1 zones 12hr -> 50 min, one h4 per chart,
    Img 144 question -> `practice-answer` "Show the answer" with 145-146;
    Step 2 30 min; LAOL; 45/10/1 min), Unresolved list, Related. All 21
    images in `src/assets/reference/liquidity/` (`cmp`-verified, names per
    ANALYSIS §11). Annotations transcribed exactly (typos kept); "xd" dropped.
  - Extensions: Terminology (LAOL "no definition chart" sentence replaced by
    pointer to Liquidity · the last area of liquidity; Defined elsewhere +
    Liquidity, basic/advanced, partially manipulated doji; Related), Zones
    (`#### More refinement rules (Week 3)` under Priority and refinement;
    italic "fade" evidence note after the Final clarity rule - still not a
    definition; Related), TFS (Week 3 "bank order pressure" line alongside the
    existing definitions; Related), Rules + Worked example 3000 (Related),
    standalone Task 1 (italic pointer after step 2: Week 3 calls doji/big
    wick the "basic" types), Misc Fundamentals (one sentence + link after
    "Reading news against the chart").
  - Unresolved, shown as unresolved: manipulated (Img 152) vs unmanipulated
    (Task 1) doji as "most major" - neutral, not reconciled, worth asking the
    mentor; basic vs advanced list; "TFS settings" names vs Week 2 categories;
    "ITF"; instrument/session/deadline; "core LTF liquidity" and "advanced
    entry model TS" (join the "advanced entry models" thread); 134/135
    cut-offs; "fade" (evidence noted, still undefined).
  - "(Task 1)" on Img 140: verbatim + note that it *appears* to mean Week 1
    Task 1.

## Open question - flagged to user, unresolved

In Task 2's assignment, images captioned under "keep the 1 min simple"
(numbered 13-15 in the source Discord message) are actually **4hr**
charts, while the image under the unrelated "objectives" section
(numbered 16) is the actual **1-min** chart. Very likely a numbering
mixup when the user saved the files. Placed exactly per the user's
given numbering as instructed, and flagged clearly - the user has not
yet responded on whether to swap them.

## Next session must start with

1. User review of Week 3 (local preview `/mrc-tasks/tasks/weeks/3/`,
   `/mrc-tasks/reference/liquidity/`). After approval: commit
   (`sources/tasks/2026-09-30-week-3/`, `src/content/weeks/3/`,
   `src/content/reference/liquidity/`, `src/assets/reference/liquidity/`,
   `src/content.config.ts`, `src/lib/weeks.ts` + test, the 5 Week page
   templates under `src/pages/tasks/weeks/[week]/`, the 7 extended content
   files, site-conventions.md, this file) and push, then confirm the deploy
   (`gh run list --repo Zenen0/mrc-tasks --limit 1`).
2. Then the next mentor batch (`/mentor-new week 4` or `misc`).

Committed and deployed before this batch: Week 2 (`66bb7d9`), Week 1 (`8a3b374`), Misc batch 2026-09-25
(`304b640`, `d820ad9`, `6acff89`), Task 3 (`628b69d`), Misc batch 2
(`1f4853f`), mentor workflow skills (`3b766b5`), Misc batch 2026-09-30
"trading reference" (`814bf9c`), chart-page house style (`4392a68`), Misc batch
2026-09-30 "economy" (`d6605b5`).

## Mentor workflow skills (project-local, `.claude/skills/`)

Tested and committed 2026-09-27. They automate the raw-source workflow
below. `CLAUDE.md` stays the authority:
1. `/mentor-new task <N>` | `week <N>` | `misc` - scaffold (`week <N>` = one
   chronological batch for a whole mentor Week of several Tasks, split into
   Tasks only at analysis) `sources/...` (raw.md header,
   `images/.gitkeep`).
2. The user populates `raw.md` (each image label on its own line) and
   downloads the referenced images to `~/Downloads`.
3. `/mentor-analyse <batch>` - import and verify the images, write
   `ANALYSIS.md`, stop for user approval.
4. `/mentor-implement <batch>/ANALYSIS.md` - fresh session, approved
   architecture only, full validation, update this file.
5. User review, then commit/push/deploy. `/mentor-implement` deliberately
   stops before committing or pushing and needs explicit user approval.

## Working conventions from this session (not elsewhere in the repo)

- **Raw-source workflow** (per `CLAUDE.md`, in use since 2026-09-25):
  each import gets `sources/<misc|tasks>/<YYYY-MM-DD>-<label>/` with
  `raw.md` (the user's paste, never edited), `images/` (original
  files), and `ANALYSIS.md` (Claude's interpretation, approved by the
  user before implementation). `sources/` is outside `src/`, so the
  build never loads it. Images may still arrive in `~/Downloads` first
  (named inconsistently, e.g. `Image 1.jpg` / `image 2.jpg`) - copy
  originals into `images/`. He is on holiday without his
  PC, so he cannot yet produce his own backtest data (the "My task"
  side) - only mentor content is being imported for now.
- **Content triage rule**: preserve mentor text close to verbatim,
  organized into clear `## ` sections. Only drop pure Discord logistics
  (react-with-an-emoji instructions, channel/thread-spam etiquette) -
  always report exactly what was dropped and why. Never silently drop
  or reinterpret anything substantive (deadlines, scope/requirement
  changes, corrections) even if it arrives inside a message nominally
  about a different task - route it to whichever task it actually
  concerns, and cross-link. If a placement is genuinely ambiguous,
  flag it to the user rather than guessing silently (see "Open
  question" above).
- **Strategy, per the user**: digest and import *all* existing Discord
  backlog first, across all tasks, before building a real prioritized
  "attack plan" (with sequencing and time budget) - not simultaneously.
  He wants to move fast once his own chart-analysis work starts.
- **Verification habit expected every time**: run tests, do a clean
  rebuild (`rm -rf .astro node_modules/.astro dist` first - Astro's
  content-layer cache silently masks content deletions otherwise),
  preview in the browser, check console errors, only then commit,
  push, and confirm the GitHub Actions deploy succeeded
  (`gh run list --repo Zenen0/mrc-tasks --limit 1`).
- User's own edits to structure (e.g. the two-branch split) were
  agreed via a short in-chat design proposal before implementation,
  not just built silently - keep doing that for any further structural
  changes.
