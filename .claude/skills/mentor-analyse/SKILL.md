---
name: mentor-analyse
description: Take one explicitly named, populated mentor source batch (sources/tasks/... or sources/misc/...) through image import, source verification and deep analysis, producing ANALYSIS.md for user approval. Use after /mentor-new and after raw.md has been filled. Does not modify the site, PROJECT_STATE.md or git.
argument-hint: "<batch folder, e.g. sources/misc/2026-09-27-misc-batch>"
---

# /mentor-analyse - verify the source and write ANALYSIS.md

Stage 1 of the raw-source workflow in `CLAUDE.md`. `CLAUDE.md` is the
authority. This skill only adds the mechanics and the checklist.

Batch argument: `$ARGUMENTS`

**Quality and fidelity come before token economy.** Keep it efficient by
reading each source file and image once, carefully, not by making the analysis
shorter.

## 0. Identify the batch - never guess

- If `$ARGUMENTS` names a folder, use exactly that folder.
- If it is empty, run the list command below and show it. If exactly one batch
  is populated and not analysed, name it and ask the user to confirm. If there
  are several, ask which one. Never pick between unfinished batches yourself.
  ```bash
  node .claude/skills/mentor-analyse/scripts/mentor-source.mjs list
  ```
- If `ANALYSIS.md` already exists, stop and ask whether to revise it or leave
  it.

## 1. Read the rules and the source

1. Read `CLAUDE.md` (and skim `PROJECT_STATE.md` for the current Misc
   entries, Task list, open threads and deferred items. You need these to
   recommend extend-vs-new).
2. Read the batch's `raw.md` in full. Decide the type from the folder
   (`sources/tasks/` = formal Task, `sources/misc/` = Misc). If the content
   contradicts the folder (e.g. a "Misc" paste that is really Task 4's
   instructions), flag it to the user before going further.

## 2. Import images (mechanical, via script)

1. Dry run. It changes nothing:
   ```bash
   node .claude/skills/mentor-analyse/scripts/mentor-source.mjs plan <batch>
   ```
   It lists every standalone image-reference line, the matching file in
   `~/Downloads`, and flags `MISSING`, `AMBIGUOUS`, `STALE` (byte-identical to
   an image already imported in another batch, which usually means a leftover
   from an earlier batch with the same name), `DUPLICATE`, numbering gaps or
   repeats, inline prose mentions, and unmatched recent Downloads images.
2. Resolve every flag with evidence. Never assume.
   - STALE or AMBIGUOUS: look at the candidate images. Ask the user if the
     right original isn't clear. Downloads often holds old files with the
     same names from earlier batches.
   - MISSING: check the "unmatched recent" list and other likely names. If it
     is genuinely absent, ask the user, or `--skip` it and record it in
     ANALYSIS.md as a missing image.
   - A standalone line the script took for a reference but that is really
     prose: `--skip` it.
3. Apply:
   ```bash
   node .claude/skills/mentor-analyse/scripts/mentor-source.mjs apply <batch> \
     [--pick "<label>=<exact Downloads filename>"] [--skip "<label>"] [--allow-stale "<label>"]
   ```
   It copies originals (never modifies or moves them), byte-verifies each copy,
   rewrites **only** the reference lines to `![label](<./images/file>)`,
   checks that no other line changed, and removes `images/.gitkeep`. If it
   refuses, fix the cause. Never hand-edit around it.
4. Confirm with `git diff --stat -- <batch>` (raw.md should show only the
   image-line changes, as the script reported). Images already in `images/`
   and referenced by the user directly need no import. Just check they exist.

## 3. Verify the source

Before analysing, check and record:
- **Completeness:** start and end points, truncated messages, gaps where
  something was omitted.
- **Chronology:** does the order make sense? Are there separate messages or
  dates? Infer dates only from evidence, and label them as inferred.
- **Image matching:** view **every** image (Read tool). Confirm it fits the
  surrounding text: timeframe label, subject, sequence. Resolve obvious
  numbering or label mistakes from chart evidence and record the correction.
  Flag genuine ambiguity. Don't invent certainty.
- **Non-mentor text** in raw.md (the user's notes, reply-context
  reconstructions).
- **Links** referenced but not supplied.

## 4. Deep analysis → `ANALYSIS.md`

Follow `reference/analysis-guide.md`. It has the section structure, the
Task-vs-Misc priorities, the epistemic labels and the implementation
recommendation checklist. Write `ANALYSIS.md` in the batch folder. Make it
complete enough that `/mentor-implement` never needs to reopen `raw.md` or
the images, except for points you explicitly mark unresolved.

## 5. Stop

Do **not** modify `src/`, `public/` or any site file. Do not update
`PROJECT_STATE.md`. Do not commit or push.

Give the user a concise **approval summary**:
- Source status: images imported/skipped/missing, corrections made to labels
  or order.
- What the batch is, in 2-3 lines.
- Proposed architecture: new entries/sections vs extensions of existing ones,
  titles, ordering, relatedTask, image use.
- Proposed raw-only / excluded material.
- Decisions needed from the user (numbered), including how to treat any
  disputed or sensitive material.
- Next step: approve or amend, then `/mentor-implement <batch>/ANALYSIS.md`,
  ideally in a fresh session.
