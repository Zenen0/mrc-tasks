# CLAUDE.md — Project Operating Rules

## Project purpose

This repository is a long-term trading knowledge, education, backtesting, and reference system.

The project converts raw mentor material, primarily from Discord messages and chart images, together with the user's own trading work and backtests, into a clear, structured, high-quality reference site.

The objective is not merely to archive information. The finished system should make the mentor's trading framework easier to understand, review, study, backtest, and apply while preserving the meaning and nuance of the original material.

The existing architecture distinguishes between mentor/assignment material and the user's own work/backtests. Preserve that distinction and the existing project conventions.

---

## Sources of truth

Treat the following as separate layers:

1. **Raw source material**
   - Original Discord text.
   - Original downloaded images/charts.
   - Original ordering and image references.
   - Must remain unchanged.

2. **Analysed material**
   - Claude's interpretation and organisation of the raw source.
   - Resolves chronology, text/image relationships, obvious labelling mistakes, and structure.
   - Preserves all meaningful information from the source.

3. **Implemented site**
   - The polished educational/reference version presented through the existing site architecture.

4. **PROJECT_STATE.md**
   - Records current project progress, completed work, unresolved issues, and exactly where the next session should continue.

5. **CLAUDE.md**
   - Contains permanent operating rules.
   - Do not put temporary task progress here.

Never overwrite or "clean up" the original raw source material.

---

## Core quality principle

Accuracy, fidelity, organisation, and trading-context understanding take priority over token minimisation.

Efficiency means:
- avoiding redundant rereads,
- avoiding unnecessary tool calls,
- avoiding repeated analysis of material that has already been analysed correctly,
- avoiding unrelated repository exploration,
- and batching sensible work together.

Efficiency must **not** mean shallow analysis, omitted information, rushed interpretation, or lower-quality implementation.

---

## Mentor material interpretation

When analysing mentor/Discord material:

- Preserve all meaningful teaching points.
- Preserve the relationship between surrounding text and referenced images.
- Preserve intended chronology where possible.
- Understand what each chart is actually demonstrating, not merely its filename.
- Use trading context and the visible chart content when interpreting the material.
- Organise muddled source material into the clearest logical teaching sequence without changing its meaning.

The mentor's raw Discord ordering, filenames, captions, or image numbers may occasionally contain mistakes.

When text, filenames, numbering, timeframe labels, chart content, or ordering conflict:

1. Inspect the actual evidence.
2. Use context to identify obvious mistakes.
3. Resolve obvious inconsistencies when the intended meaning is clear.
4. Record the corrected interpretation in the analysed material.
5. If there is genuine ambiguity, flag it for the user rather than inventing certainty.

Do not blindly follow an obviously incorrect image label simply because it appears in the raw source.

---

## Raw import workflow

For new mentor material, prefer this two-stage workflow.

### Stage 1 — Source ingestion and analysis

Raw Discord text and downloaded images should first be preserved together as source material.

Create or use a task-specific raw source area containing:
- `raw.md`
- the referenced original images
- an analysed/normalised document such as `ANALYSIS.md`

`raw.md` should preserve the material approximately as supplied by the user, including the sequence of text and image references.

Analyse `raw.md` together with the referenced images.

Create `ANALYSIS.md` that:
- captures every meaningful concept,
- correctly associates text with images,
- resolves obvious source inconsistencies,
- establishes the clearest teaching order,
- records useful chart observations,
- preserves important nuance,
- flags genuinely unresolved ambiguity,
- and contains enough information for implementation without requiring repeated analysis of the original screenshots.

Do not modify the site during this analysis stage unless explicitly instructed.

### Stage 2 — Implementation

In a fresh context where practical:

- Read `CLAUDE.md`.
- Read `PROJECT_STATE.md`.
- Read the relevant task's `ANALYSIS.md`.
- Inspect only the existing project files needed for implementation.
- Integrate the analysed material into the established site architecture.

Do not repeatedly reread the raw Discord material or original screenshots during implementation unless:
- `ANALYSIS.md` explicitly identifies an unresolved issue, or
- information required for correct implementation is genuinely missing.

---

## Site implementation

Preserve the existing architecture, styling language, navigation, naming conventions, and organisation unless there is a strong reason to change them.

When adding new material:

- Fit it naturally into the existing system.
- Preserve the distinction between mentor/assignment content and the user's own trading/backtest content.
- Prefer extending existing reusable components and patterns over creating unnecessary duplicates.
- Maintain consistency across tasks.
- Keep educational structure clear and easy to revisit.
- Use headings, chart placement, explanations, callouts, and cross-links where they genuinely improve understanding.
- Do not redesign unrelated areas while completing a focused task.
- Do not remove useful existing content unless specifically required.

Claude may make sensible organisational and presentation decisions when they improve clarity while remaining faithful to the source.

---

## Working efficiently

Before editing:

- Read `PROJECT_STATE.md`.
- Inspect only the files relevant to the current task.
- Form a clear plan before making widespread edits.

During editing:

- Batch related changes where practical.
- Avoid repeatedly rereading unchanged files.
- Avoid scanning the entire repository when the relevant area is already known.
- Do not perform unnecessary exploratory work.
- Do not repeatedly rebuild or validate after every minor edit.

After implementation:

- Run an appropriate validation/build check.
- If validation succeeds, stop.
- If it fails, diagnose the actual failure, fix it, and validate again.
- Do not continue unnecessary polishing loops after the requested work is complete.

Keep chat/terminal explanations concise. Spend tokens and reasoning on the quality of the project rather than lengthy narration of routine actions.

---

## Session and handoff discipline

This is a long-running project and should not depend on one enormous Claude conversation.

When a meaningful unit of work is complete:

Update `PROJECT_STATE.md` concisely with:
- what was completed,
- any important decisions made,
- unresolved questions,
- files/areas that materially changed when useful,
- and exactly where the next session should continue.

Do not turn `PROJECT_STATE.md` into a transcript.

It should be a compact handoff document that allows a fresh Claude Code session to resume confidently without needing the previous conversation.

When beginning a fresh session:
1. Read `CLAUDE.md`.
2. Read `PROJECT_STATE.md`.
3. Inspect only the relevant implementation.
4. Continue from the recorded handoff point.
5. Do not redo completed work.

---

## Git and source preservation

Treat the repository and committed files as the durable project memory.

Do not rely on chat history as the only record of important decisions or progress.

Preserve original source files.

Do not delete or alter raw mentor material simply because a cleaned interpretation exists.

When appropriate, completed logical units of work should remain easy to identify through Git history and project state.

---

## User interaction

When the user's intent is clear, proceed without unnecessary questions.

Ask for clarification when:
- source material is genuinely ambiguous,
- an important trading interpretation cannot be determined reliably,
- or a choice would materially alter existing architecture/content.

When reporting completion:
- be concise,
- state what was done,
- mention genuine unresolved issues,
- and identify the next logical step when useful.
