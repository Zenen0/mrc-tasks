# Adding content

## First-time setup

Before the deploy workflow can publish anything, the GitHub repo needs three things in place, once:

1. The repo must be named exactly `mrc-tasks`. This has to match the `base: '/mrc-tasks'` setting in `astro.config.mjs`, or every link on the built site will point at the wrong path.
2. In the repo's Settings > Pages, set the Source to "GitHub Actions". The workflow file alone does not turn this on, it has to be selected in the repo settings first.
3. The default branch must be `main`, since `.github/workflows/deploy.yml` only triggers on pushes to `main`.

Once those three are set, every push to `main` rebuilds and republishes the site automatically.

## New task or subtask

1. Create a folder: `src/content/tasks/<task-number>/<subtask-letter>/` (for example `src/content/tasks/2/a/`).
2. Add an `index.md` inside it:
   ```yaml
   ---
   title: "Short descriptive title"
   date: 2026-08-25
   mentorPrompt: |
     Paste the mentor's assignment text here, exactly as posted in Discord.
   captions:
     09-14_entry.png: "Optional short note for this specific image."
   ---

   Your written explanation goes here.
   ```
   The page already shows a "My read" heading above this section, so don't repeat it in your markdown, just start writing.

3. Drop your annotated TradingView screenshots into the same folder, named `HH-MM_label.png` in capture order (for example `09-14_entry.png`, `10-02_management.png`, `11-30_exit.png`). If a subtask spans more than one day, prefix with the date: `2026-08-25_09-14_entry.png`.
4. If the mentor posted his own reference images, name them `mentor_<anything>.png` so they show up in the assignment section instead of the capture sequence.
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
