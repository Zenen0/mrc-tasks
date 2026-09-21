# Adding content

There are two ways to add a task, subtask, or misc entry: by hand (below), or with a small local form that writes the same files for you. Either way produces identical results, use whichever is easier at the time.

## Using the local form

Run:

```bash
npm run add-content
```

This starts a server on `http://localhost:4322` (your machine only, nothing is exposed publicly). Open that URL, fill in the task/subtask (or misc slug), title, date, mentor's prompt, and your response, then drag your screenshots onto the page: each one gets a row where you set its capture time and a short label (and a checkbox if it's one of the mentor's own reference images), plus an optional caption.

Hitting "Save entry" writes the `index.md` and renamed image files straight into `src/content/`, exactly matching the folder/filename convention described below. It does **not** run git for you. Review what was created, then `git add` / `commit` / `push` yourself (see Publishing below) whenever you're ready to make it live. Stop the server with Ctrl+C when you're done.

The form covers subtasks and misc entries only - it doesn't write a task's `task.md` assignment. Add that one by hand (see below).

## First-time setup

Before the deploy workflow can publish anything, the GitHub repo needs three things in place, once:

1. The repo must be named exactly `mrc-tasks`. This has to match the `base: '/mrc-tasks'` setting in `astro.config.mjs`, or every link on the built site will point at the wrong path.
2. In the repo's Settings > Pages, set the Source to "GitHub Actions". The workflow file alone does not turn this on, it has to be selected in the repo settings first.
3. The default branch must be `main`, since `.github/workflows/deploy.yml` only triggers on pushes to `main`.

Once those three are set, every push to `main` rebuilds and republishes the site automatically.

## Task structure: two branches

Each task page (`/tasks/<n>/`) is a branch selector with two sides:

- **Mr Casino's task** (`/tasks/<n>/assignment/`) - his assignment, verbatim, built from `task.md`. Only appears once that file exists.
- **My task** (`/tasks/<n>/mine/`) - your own subtask grid (1A, 1B, ...). Always exists, shows "No subtasks yet." when empty.

A task shows up on the home page as soon as it has *either* a `task.md` or a subtask - it doesn't need both.

### The assignment (`task.md`)

`src/content/tasks/<task-number>/task.md`:

```yaml
---
title: "Major Liquidity"
---

Paste the mentor's text here verbatim, in the order he posted it. Drop
each of his images in as a normal markdown image, right where he put
it in the message:

![Short alt text - used as the lightbox caption](./step1-doji-marking.jpg)

Keep going the same way for the rest of his message.
```

- Put his reference images alongside `task.md` in the task's root folder (`src/content/tasks/<task-number>/`, not inside a subtask folder) - any name works, e.g. `step1-doji-marking.jpg`.
- Reference them with normal markdown `![alt](./filename.jpg)` syntax, inline, exactly where he posted them - Astro optimizes and serves them automatically, no separate gallery step needed.
- Alt text becomes the lightbox caption, so make it a short, real description.
- Every image in the assignment body is click-to-zoom (full size, not cropped) automatically - nothing extra needed.
- This file is optional. A task with no `task.md` just shows as "Task N" and its "Mr Casino's task" card reads "Not written up yet."

### A new subtask (by hand)

1. Create a folder: `src/content/tasks/<task-number>/<subtask-letter>/` (for example `src/content/tasks/1/a/`).
2. Add an `index.md` inside it:
   ```yaml
   ---
   title: "Short descriptive title"
   date: 2026-08-25
   captions:
     09-14_entry.png: "Optional short note for this specific image."
   ---

   Your written explanation goes here.
   ```
   The page already shows a "My read" heading above this section, so don't repeat it in your markdown, just start writing. `mentorPrompt` in a subtask's frontmatter is optional now that the full assignment lives in `task.md` - only set it if this specific subtask needs its own extra note from him.

3. Drop your annotated TradingView screenshots into the same folder, named `HH-MM_label.png` in capture order (for example `09-14_entry.png`, `10-02_management.png`, `11-30_exit.png`). If a subtask spans more than one day, date-prefix **every** file for that subtask, including the first day's (for example `2026-08-25_09-14_entry.png`, `2026-08-26_08-00_continuation.png`). Mixing bare and date-prefixed filenames within the same subtask sorts incorrectly.
4. If the mentor posted a reference image specific to this one subtask (rather than the whole task), name it `mentor_<anything>.png` so it shows up in the assignment section instead of the capture sequence.
5. `captions` is optional. Any image without an entry there just shows its filename label (for example `entry` becomes "Entry") in the lightbox.

## New Misc entry

Same as above, but under `src/content/misc/<slug>/` instead of `src/content/tasks/...`, and no task/subtask numbering.

## Publishing

```bash
git add src/content
git commit -m "Add task <n><letter>"
git push
```

GitHub Actions rebuilds and republishes the site automatically. No other step is required: no manual image resizing, no code changes.

## Sharing a link with the mentor

Each subtask has its own URL: `https://zenen0.github.io/mrc-tasks/tasks/<n>/<letter>/`. Paste that into the Discord thread. Discord pulls the Open Graph title, description, and cover thumbnail automatically, the same as a YouTube link.
