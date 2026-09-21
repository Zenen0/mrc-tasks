# Project State

Handoff doc for a fresh Claude Code session. Read this first.
Last updated: 2026-09-21.

Note: `STATUS.md` also exists in this repo but is stale (pre-dates this
session's restructuring - still describes the old placeholder content
and a flat task/subtask hierarchy). This file supersedes it. No
`CLAUDE.md` exists yet.

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
  load-bearing callouts (deadlines, scope changes).
- Misc entries (`src/content/misc/<slug>/index.md`) are for mentor
  material that isn't specific to one task. They support an optional
  `relatedTask: "N"` frontmatter field (added this session to
  `src/content.config.ts`), which shows a clickable "-> Task N: title"
  tag on both the Misc card and the entry page.
- Subtask `index.md` no longer needs `mentorPrompt` repeated in its
  frontmatter now that the task-level assignment page exists - only
  set it for a note specific to that one subtask. The subtask
  assignment section simply doesn't render when there's nothing to
  show (no more awkward "Pending.").

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
- **Misc**: one entry, "Rationality & Backtesting Discipline" (general
  mentor content, not task-specific - cross-linked to Task 1).
  Misc/Task cards were polished to match (title fills the empty
  thumbnail, centered badge) via new `TaskCard.astro` /
  `MiscCard.astro` components.
- All placeholder content (old Task 1/2, old Misc example) deleted.

## Open question - flagged to user, unresolved

In Task 2's assignment, images captioned under "keep the 1 min simple"
(numbered 13-15 in the source Discord message) are actually **4hr**
charts, while the image under the unrelated "objectives" section
(numbered 16) is the actual **1-min** chart. Very likely a numbering
mixup when the user saved the files. Placed exactly per the user's
given numbering as instructed, and flagged clearly - the user has not
yet responded on whether to swap them.

## Next session must start with

**The Task 2 extension / new task.** The user's last message paused
here explicitly ("we can pause here as then we have another task 2
extension / new task u will see"), after finishing Task 2's assignment
and the Misc cleanup. Pick up the same workflow (see below) for
whatever he sends next.

## Working conventions from this session (not elsewhere in the repo)

- **Content intake workflow**: the user pastes the mentor's Discord
  text in chat, with inline `image N` markers at the point each image
  belongs. He separately saves the actual files to `~/Downloads`
  (named inconsistently, e.g. `Image 1.jpg` / `image 2.jpg`) before or
  after pasting the text - check there. He is on holiday without his
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
