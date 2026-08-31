# Setting up on a Mac (or any new machine)

Everything content-related lives in git, and `.gitignore` already excludes
everything OS-specific (`node_modules/`, `dist/`, `.astro/`, `.DS_Store`), so
this is a normal "clone and install" — nothing was Windows-only.

## One-time setup

1. **Node 22** — matches what the deploy workflow uses
   (`.github/workflows/deploy.yml`). Install via [nvm](https://github.com/nvm-sh/nvm)
   or the official installer.
2. **Clone the repo:**
   ```bash
   git clone https://github.com/Zenen0/mrc-tasks.git
   cd mrc-tasks
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
   Do this fresh on the Mac — don't copy the `node_modules` folder over from
   Windows. `sharp` (image processing) has a native binary per OS; a fresh
   `npm install` pulls the right one.
4. **Set up push access** (the remote is HTTPS, not SSH, so a fresh machine
   needs to authenticate once):
   - Easiest: install [GitHub CLI](https://cli.github.com/) and run
     `gh auth login` — it wires up git credentials automatically.
   - Or: generate a GitHub Personal Access Token and enter it as the
     password the first time you `git push` (macOS Keychain remembers it
     after that).

## Verify it actually works

```bash
npm test          # 54 tests should pass
npm run dev        # localhost — browse the site
npm run add-content  # localhost:4322 — the drag-and-drop content form
```

## Day-to-day

Nothing else changes — same [ADDING-CONTENT.md](ADDING-CONTENT.md) steps,
same `git add / commit / push` to publish. The site rebuilds and redeploys
automatically on every push to `main`.
