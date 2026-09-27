# ANALYSIS.md guide

Distilled from the approved analyses in `sources/tasks/2026-09-25-task-3/`
and `sources/misc/2026-09-25-misc-batch*/`. Open one of those if you need a
worked example. `CLAUDE.md` rules take precedence over anything here.

## File header (both types)

```
# Analysis - <Task N | Misc batch DATE [(k)]>

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

- New entries to create (Task: sections inside `task.md`; Misc: entry slug,
  title, `order`, `relatedTask`), and why.
- Existing entries or sections to **extend** instead, with the exact target
  section and insertion point.
- Broader knowledge worth preserving, and where it goes.
- **Raw-only** material (kept in `raw.md`, not published), each with a reason.
- Images per page or section, with descriptive target filenames and alt-text
  intent. Irrelevant images stay raw-only.
- Cross-links (both directions) and any PROJECT_STATE open threads this closes.
- Any reusable styling need (prefer existing `.assignment-body` / `.response`
  patterns).
- Numbered **decisions needed** from the user, and **unresolved** points that
  implementation must check against the source (the only reasons
  `/mentor-implement` may reopen `raw.md` or images).
