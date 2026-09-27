---
name: mentor-new
description: Scaffold a new mentor-material source batch (formal numbered Task or Misc) under sources/ with raw.md and images/. Use when the user wants to start importing new Discord mentor material. Scaffolding only - no analysis, no site changes, no commits.
argument-hint: "task <N> [--label <slug>] [--date YYYY-MM-DD] | misc [--label <slug>] [--date YYYY-MM-DD]"
---

# /mentor-new - scaffold a raw source batch

Stage 0 of the raw-source workflow in `CLAUDE.md`. Purely mechanical.

Arguments: `$ARGUMENTS`

## Steps

1. Work out the batch type from the arguments:
   - `task <N>`: a formal numbered Task from the mentor (`sources/tasks/`).
   - `misc`: anything not a formal numbered Task (`sources/misc/`).
   - Optional `--label <slug>`: a descriptive suffix (e.g. `--label extension`
     for a continuation of an existing Task, or `--label trump-thread` for Misc).
   - Optional `--date YYYY-MM-DD`: defaults to today (local time).
   If the arguments are missing or it's unclear whether the material is a
   formal Task or Misc, ask the user one short question. Do not guess.

2. From the repository root, run the helper (always run it; it handles naming
   and collisions deterministically):
   ```bash
   node .claude/skills/mentor-new/scripts/new-batch.mjs <args>
   ```
   Use `--dry-run` first only if the user asked for a preview.
   The script:
   - creates `sources/tasks/<date>-task-<N>[-label]/` or
     `sources/misc/<date>-misc-batch/` (`<date>-misc-<label>/` with a label);
   - adds `-2`, `-3`, ... if a same-day folder already exists (never overwrites);
   - writes `raw.md` containing only the standard header, ending with `---`;
   - creates `images/.gitkeep`;
   - notes any other existing batch for the same Task number.

3. Stop. Do **not**: analyse anything, read Downloads, touch `src/`, edit
   `PROJECT_STATE.md`, or commit.

## Report to the user (concise)

- The exact folder, `raw.md` and `images/` paths the script printed.
- Any collision suffix or same-Task note it printed.
- How to fill `raw.md`:
  - Paste the Discord text **below the `---` line**, in the original order,
    exactly as posted (typos, emoji and all). Don't tidy it.
  - Where an image was posted, put its label **on its own line**, matching the
    downloaded filename without extension, e.g. `image 43` or `misc image 1`.
    One image per line. Mentions inside a sentence are fine but won't be linked.
  - Leave the images in `~/Downloads` under those names. `/mentor-analyse`
    copies and links them. (Or drop originals straight into `images/` and
    reference them the same way.)
  - Your own notes are fine, but mark them clearly (e.g. `(my note: ...)`) so
    they are not taken as mentor text.
- Next step: `/mentor-analyse <batch folder>`.
