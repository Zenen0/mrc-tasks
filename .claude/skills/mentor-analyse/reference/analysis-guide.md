# ANALYSIS.md guide

Distilled from the approved analyses in `sources/tasks/2026-09-25-task-3/`
and `sources/misc/2026-09-25-misc-batch*/`. Open one of those if you need a
worked example. `CLAUDE.md` rules take precedence over anything here.

## File header (both types)

```
# Analysis - <Task N | Week N | Misc batch DATE [(k)]>

Claude's interpretation of `raw.md` + `images/`. `raw.md` is the untouched
source (only image-reference lines were linked). ...
```
Then state the conventions used in the file:
- `> quote` = mentor wording. Say whether typos were silently fixed inside
  quotes, and list them. Change nothing else inside a quote.
- *Analyst note* = Claude's observation, not mentor teaching, not for
  publication unless approved.
- `L##` = line numbers in `raw.md`. `Img N` = `images/<file>`.

## Formal Task structure

1. **Source verification**: completeness, images (found, copied, verified,
   skipped), label/numbering corrections with the evidence, non-mentor text.
2. **Source structure and chronology**: the messages or posts in order, with
   dates (stated or inferred), and where the deadline or scope changes fall.
3. **Purpose and learning progression**: what this Task builds on (Tasks
   1..N-1) and what it sets up next.
4. **Analysed content**, section by section in the clearest teaching order:
   - exact wording (quoted) for task instructions, definitions, rules, counts,
     timeframes, deadlines, warnings and distinctive phrases;
   - connective explanation, marked as paraphrase where it could be mistaken
     for his words;
   - **per image**: what it shows (timeframe, instrument if visible, marked
     levels/annotations transcribed as text), what it demonstrates, and which
     text it belongs to.
5. **Formal requirements, consolidated** (table): each deliverable with count,
   timeframes, method/rules, deadline, and exact wording.
6. **Ambiguities and decisions for the user**: numbered, each with options and
   a recommendation.
7. **Excluded / consolidated material**: exactly what is dropped (Discord
   logistics, react-with-emoji lines, reply markers) and why.
8. **Classification**: see labels below.
9. **Implementation architecture recommendation** (checklist below), including
   an image mapping table: source file -> descriptive site filename -> section.

Task priorities: exact requirements, wording, counts, timeframe rules,
definitions, sequencing, warnings and chart relationships. Scope changes or
corrections that concern a *different* Task are routed to that Task and
cross-linked (see PROJECT_STATE "Content triage rule").

## Week structure

A `week-N` batch is one chronological paste of everything the mentor posted
for Week N: several formal Tasks plus teaching and context. Week N Task M is
**not** standalone Task M (`src/content/tasks/M/`); keep them apart and say
so wherever confusion is possible. Use the Formal Task structure, with:

1. **Source verification** and **chronology** for the whole Week (sections 1-2
   above), then a **Task boundary map**: each formal Task in the Week with its
   `L##` range, how the boundary was identified (his numbering, "task 2:",
   a change of subject), and any material that sits between Tasks.
2. **Week overview**: what the Week covers and how its Tasks progress.
3. **Per Task** (Week N Task 1, 2, ...): sections 3-5 above - purpose,
   analysed content with per-image notes, and a consolidated requirements
   table. Keep the mentor's **teaching/context** separate from the actual
   **deliverables**, and assign every image to exactly one Task (or to
   shared Week context), with the evidence when it isn't obvious.
4. Week-level teaching that is really taught technical framework -> also
   recommend **Reference** entries/cross-links (destination test below).
5. Ambiguities, exclusions and classification for the whole Week.
6. **Implementation architecture**: the Week pages are not built yet. Propose
   the Week/Task structure (routes, content folders, per-Task assignment and
   My Work pairing, landing-page cards, Tasks index placement) so it cannot
   collide with standalone Tasks 1-N, plus the image mapping table per Task.
   This is a decision for the user; mark it as such.

## Misc structure

1. **Source package verification**: a table (completeness, images, image
   references, chronology, links, non-mentor text), plus inferred dating with
   the evidence.
2. **What this batch is**: themes and how they relate to existing entries.
3. **Line-by-line / thematic classification**: by theme, with `L##` refs,
   quotes for distinctive or load-bearing wording, and the label per point.
4. **Deferred threads**: which open threads from earlier batches this batch
   delivers (check PROJECT_STATE), and which it opens.
5. **Fact-status and attribution register**: every factual or contested claim,
   with its status label and a note on how to present it.
6. **Images**: each image, what it shows, publish or raw-only, with reasons.
7. **External links**: supplied, missing, and needed or not.
8. **Implementation architecture recommendation** (checklist below).

Misc priorities: keep useful trading knowledge **and** broader mentor
knowledge (economics, geopolitics, psychology, philosophy, morality, history,
systems thinking, worldview) where it means something, and tie it to trading
where he does.

## Destination test: Task, Reference or Misc

The `sources/tasks/` vs `sources/misc/` folder is only an intake location.
Route each part of a batch by meaning (user-approved rule, 2026-09-30):

1. **Is it assigned?** (deliverable, count, deadline, scope change or
   correction to a Task) -> **Task** (`task.md` of that Task).
2. **Is it technical trading framework taught for use across trading?**
   (definitions, rules, checklists, models, worked examples, technical Q&A on
   charts; execution psychology only when he places it inside his technical
   rules) -> **Reference** (`src/content/reference/<slug>/`).
3. **Otherwise** (psychology, rationality, morality, fundamentals and market
   context, worldview, progression / advanced-stage) -> **Misc**.

Prefer extending an existing Reference page (e.g. adding a term to
Terminology) over creating a new one. Definitions already given inside a Task
stay there; Reference quotes and links them.

The test decides where material *also* goes; it never takes Task teaching off
the Task page (`CLAUDE.md`, "Task material stays self-contained"). Do not
recommend moving teaching to Reference to avoid duplication. In a Task or Week
batch, classify every image and teaching block in the image map as one of:

- **Task**: on the Task page only;
- **Task + Reference**: on the Task page, and also on Reference (same file);
- **Reference-only**: broader theory/background; the Task stays fully
  understandable without it. Give the reason.

Default for charts from the Task's own teaching sequence: Task or
Task + Reference.

## Epistemic labels (use consistently)

| Label | Meaning |
|---|---|
| Instruction | What the student must do (task requirement, rule, deadline) |
| Definition / rule | His defined term or trading rule. Quote it exactly |
| Warning | Explicit caution or prohibition |
| Teaching / interpretation | His explanation or reading of markets or events |
| Opinion | Value judgement or personal view. Attribute it |
| Forecast / speculation | Claims about the future or unverified possibilities |
| Documented / established | Background fact verifiable from mainstream sources |
| Disputed / unsupported / contradicted / fabricated | Contested, no evidence, evidence against, or known fabrication. Say which, and why |

Never state a disputed claim as fact. Never silently drop substantive
material. Classify it and recommend where it goes (published with a label, or
raw-only), and let the user decide on sensitive material.

## Implementation architecture checklist (final section)

- New entries to create (Task: sections inside `task.md`; Reference or Misc:
  entry slug, title, `order`, and `relatedTask` for Misc), and why, per the
  destination test above.
- Existing entries or sections to **extend** instead, with the exact target
  section and insertion point.
- Broader knowledge worth preserving, and where it goes.
- **Raw-only** material (kept in `raw.md`, not published), each with a reason.
- Images per page or section, with descriptive target filenames and alt-text
  intent, and for Task/Week batches the Task / Task + Reference /
  Reference-only class (destination test). Irrelevant images stay raw-only.
- Cross-links (both directions) and any PROJECT_STATE open threads this closes.
- Any reusable styling need (prefer existing `.assignment-body` / `.response`
  patterns).
- Numbered **decisions needed** from the user, and **unresolved** points that
  implementation must check against the source (the only reasons
  `/mentor-implement` may reopen `raw.md` or images).
