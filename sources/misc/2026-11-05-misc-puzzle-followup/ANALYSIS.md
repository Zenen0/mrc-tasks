# Analysis - Misc batch 2026-11-05 (puzzle follow-up)

Claude's interpretation of `raw.md` + `images/`. `raw.md` is the untouched
source. **It was not modified at all in this batch** (see §1: the import
script could not link these image labels, so the originals were copied into
`images/` by hand and byte-verified; the labels in `raw.md` already equal the
filenames).

Conventions in this file:
- `> quote` and "quoted text" = mentor wording, exactly as in `raw.md` or on
  his charts. **No typos were fixed inside quotes** (kept: "Liquidty",
  "liqudity", "unmanipuated", "postion", "Fratcal", "catagory", "Hilghlighted",
  "ones foundational", "It has been chosen"). Only whitespace was normalised:
  the double spaces at L79 are single, and the line break inside L105-106
  ("from the professional execution / perspective") is joined.
- *Analyst note* = Claude's observation, not mentor teaching, not for
  publication unless approved.
- `L##` = line numbers in `raw.md`. `P1`-`P10` = `images/Image Puzzle 1.jpg` ...
  `Image Puzzle 10.jpg`. `HCS-img` = `images/V IMP IMAGE I THINK.jpg`.
  `Img 168` = `images/IMAGE LINK.png` (byte-identical to the existing puzzle chart).
- Epistemic labels as in the analysis guide (Instruction, Definition / rule,
  Warning, Teaching / interpretation, Opinion, Forecast / speculation).

**Bottom line:** this batch is the mentor's **debrief of the Recap & Puzzle**
plus a **step-by-step entry sequence ("level 1")** taught through a 10-chart
XAUUSD worked example, a short **"base edge"** highlight, a list of
**"further advancements"** (to be continued), and a separate later post on
**HCS and the limit-order approach ("level 2")** with one chart. It contains
**no new formal assignment**: no deliverable, count or deadline. The only
imperative aimed at the student is "To memorise:" (L75-77) and the "level 2"
objective (L106). It is not "Segment 4" and not "Reflection 3.2", and neither
label should be used.

---

## 1. Source package verification

| Check | Result |
|---|---|
| Completeness | 108 lines after the header. Starts with the user's note on the re-supplied puzzle image (L9), ends mid-thought-complete at L109 ("...our broader underlying framework of TFS"; no closing full stop, but the sentence is complete). No sign of truncation inside messages. Whether other ☯reflection☯ posts between these messages were omitted cannot be checked. |
| Messages | At least 4 distinct posts, identified from the user's reply-context notes and placement: **M1** debrief + step sequence + memorise (L11-79); **M2** a reply to M1's "Now A Step by step Sequence..." line: further advancements (L82-90); **M3** a reply to P5: the base edge (L93-95); **M4** the HCS image + "level 2" text, posted "by itself a week later" per the user (L98-109). M1 may itself be several Discord messages (one per chart group); the order is consistent either way. |
| Images | 12 files in `images/`: `IMAGE LINK.png`, `Image Puzzle 1-10.jpg`, `V IMP IMAGE I THINK.jpg`. All 12 copied from `~/Downloads` with `cp -p` and **byte-verified with `cmp`** (all OK). None missing. No duplicates among the 11 new images. |
| Import script | `mentor-source.mjs plan` found **0 reference lines**: its label pattern accepts `image N` / `misc image N` forms only, not `Image Puzzle N`, and L9/L98 carry the user's notes on the same line. Nothing was rewritten in `raw.md` (no `apply` run). The labels in `raw.md` equal the filenames, so implementation can map them directly. *(Tooling note, out of scope here: the pattern could later be widened to allow `<word> <word> N`.)* |
| Stale / known images | `IMAGE LINK.png` is **byte-identical** to `sources/misc/2026-10-01-misc-final-mixed-section/images/image 168.png` and to `src/assets/segments/4/puzzle-xauusd-30min.png` (the Recap & Puzzle chart). It is a re-supply for reference, as the user's L9 note says. **Do not copy it again.** None of the 11 other images match any file under `sources/*/images/` or `src/assets/`. |
| Image order | Each image line sits **before** the step text it illustrates. Resolved from chart evidence: P2 is titled "2-Mark the Established swing retest POI" and refers back to "step 1", so it belongs to PREMIUM (which follows it), not AUTHORITY (which precedes it). Every chart's own step number (1-8) then lines up with the text steps in order (table in §4.2). No renumbering is needed. |
| Chronology | No dates in the source. M1-M3 appear to be one sitting (M2/M3 reply to M1). M4 came "a week later" (user's L98 note, not verifiable). *Inferred:* all after the Recap & Puzzle post (the user dated that 26/09/2026 in the previous batch) because L11 calls it "the previous Puzzle". **Publish no dates.** |
| Links | None referenced. The re-supplied puzzle image was a link in Discord (L9 note); its content is already in the repo. |
| Non-mentor text | **L9** (user's note on IMAGE LINK); the parenthetical prefixes at **L82** "(Linking to message - Now A Step by step Sequence onto final clarification entry (level 1): ) ---" and **L93** "(Linking to Image Puzzle 5) ---" (the user's reconstruction of Discord reply context; the text after `---` is the mentor's); **L98** (user's note "V IMP IMAGE I THINK (...)"). All raw-only. |

---

## 2. What this batch is

The ☯reflection☯ channel continuing directly from **Recap & Puzzle**
(`src/content/segments/4/`, visible label "Recap & Puzzle", title "Recap & the
Direction Puzzle"). That assignment asked the student to recap the direction
layer and "redo the puzzle gist with your own markings". It promised that he
would "advance through the stages of implementation step by step" and named
the assignment "the final explicit stages to bridge onto proper
implementation".

This batch delivers, in his order:

1. **The purpose of the puzzle** (L11-21): what Img 168 was showing. TS
   build-up from the highest swing, line thickness = power, fractality,
   establishment, and the governing lesson. This is the closest thing to the
   puzzle's answer in the source. It is conceptual; no solved markings of
   Img 168 are given.
2. **"A Step by step Sequence onto final clarification entry (level 1)"**
   (L23-72): eight question-headed stages (Authority, Premium, Interaction,
   Confirmation, Scalp, LTF, Execution, Management) illustrated by **one new
   worked example** on XAUUSD, top-down from 18hr to 3 min (P1-P10). This is
   a **different chart and price area** from the puzzle (about 4,066-4,185 vs
   the puzzle's 4,231-4,400), so it is not the puzzle solved.
3. **"To memorise"** (L75-79): the one-line sequence and what each timeframe
   layer tells you (WHAT / WHERE / HOW / WHEN and WHERE).
4. **"Further advancements"** (L82-90): five topics beyond level 1, "To be
   continued".
5. **The base edge** (L93-95), attached to P5: swing retest with intraday
   closure within.
6. **"Level 2"** (L98-109, HCS-img): what HCS represents, its use for limit
   orders, the "professional execution" objective with "A maximum of one entry
   before proper establishment", and why the cold limit approach is shown at
   all.

Classification by content (not by the Misc folder):

| Part | Destination test | Why |
|---|---|---|
| 1 Puzzle purpose | **Task** (Recap & Puzzle) **+ Reference pointer** | It is his explanation of the puzzle the assignment set. Needed to check one's own puzzle attempt. |
| 2-3 Step sequence + memorise | **Reference** (technical framework, worked example) **+ Task** (Recap & Puzzle: these are the "stages of implementation" the assignment said would follow) | Taught for use across trading; not assigned as a deliverable. See D2 for how much goes on the Task page. |
| 4 Further advancements | Reference (with the sequence) + Recap & Puzzle "Still to come" | Announced topics, not delivered. |
| 5 Base edge | Reference (with step 4 / P5) + Recap & Puzzle (it says this was "a focus of previous tasks") | Definition-like rule. |
| 6 Level 2 / HCS | **Reference** + Terminology HCS extension | Technical framework. No assignment. |
| Misc | **None** | Nothing here is psychology, worldview or fundamentals. "Trading like a retailer" (L103) is placed inside a technical rule. |

---

## 3. Source structure (line map)

| L## | Content | Who |
|---|---|---|
| 9 | IMAGE LINK + note | User (label + note) |
| 11-21 | Purpose of the previous puzzle: 4 bullets + Lesson | Mentor |
| 23 | "Now A Step by step Sequence onto final clarification entry (level 1):" | Mentor |
| 25 | P1 | - |
| 27-29 | AUTHORITY | Mentor |
| 31-33 | P2, P3, P4 | - |
| 35-37 | PREMIUM | Mentor |
| 39 | P5 | - |
| 41-43 | INTERACTION | Mentor |
| 45 | P6 | - |
| 47-49 | CONFIRMATION | Mentor |
| 51-52 | P7, P8 | - |
| 54-56 | SCALP | Mentor |
| 58 | P9 | - |
| 60-62 | LTF | Mentor |
| 64 | P10 | - |
| 66-68 | EXECUTION | Mentor |
| 70-72 | MANAGEMENT (no image) | Mentor |
| 75-77 | "To memorise:" + sequence | Mentor |
| 79 | Swing / Intraday / Scalp / LTF roles | Mentor |
| 82 | "(Linking to message - ...) ---" | User prefix |
| 82-90 | Further advancements (5 items), "To be continued." | Mentor |
| 93 | "(Linking to Image Puzzle 5) ---" | User prefix |
| 93-95 | Base edge | Mentor |
| 98 | V IMP IMAGE + note | User (label + note) |
| 101-109 | HCS, application, level 2, cold limit order approach | Mentor |

---

## 4. Analysed content

### 4.1 The purpose of the puzzle (L11-21) - Teaching / interpretation

> Some of the purpose of the previous Puzzle:
>
> . To showcase TS build up , starting from the highest swing (thickest TS line - the most power- our entries closest to that premium)
>
> . The fractal expression - how each higher structure is made /refined/continued from its micro structure.
>
> . The importance of establishment. LTF builds the HTF - yet HTF authority is not to be ignored and auto includes its power upon establishment.
>
> .Price may take out early buyers/sellers, retrace and challenge or negate weaker TFS while the stronger structure remains intact.
>
> Lesson: The stronger established structure governs , while the weaker structures express, challenge and progressively build the higher movement.

- "Some of the purpose" - he does not claim this is the full answer.
- **"thickest TS line - the most power"** is his own confirmation that the
  **line thickness on Img 168 encodes strength**. That matches the hint
  "Established - TF catagory width". The previous analysis
  (`2026-10-01-misc-final-mixed-section/ANALYSIS.md` §U5) deliberately did
  **not** publish a line-width reading because he had not given one. He has
  now given the principle. *Analyst note:* on Img 168 the thickest lines are
  the lows at about 4,233, about 4,290 and about 4,245 (double bottom) and a
  thick short line at about 4,262 (far left). The highs at about 4,368 and
  about 4,397-4,400 are medium. This description of the chart is factual. Which
  of these is "the highest swing" and where "our entries closest to that
  premium" would be is **not stated by him**. See D4.
- "LTF builds the HTF - yet HTF authority is not to be ignored" restates the
  TFS rule already on the site ("The LTF builds the HTF but HTF commands the
  LTF", `timeframe-strength/#the-ltf-builds-the-htf-but-htf-commands-the-ltf`).
  Cross-link it.
- "early buyers/sellers" adds to the existing chart-only descriptions (Cycle
  page `#laol-and-early-buyerssellers-3hr`).
- The **Lesson** line is a distinctive governing rule. Quote it exactly.

### 4.2 The step-by-step sequence (level 1) - the stage map

His text has eight headings; his charts are numbered 1-8; his memorise line
has eight items. They line up like this:

| Text heading (his question) | Chart(s) and chart step | Memorise item |
|---|---|---|
| AUTHORITY - What are we following? | P1 "1-Follow the highest swing" (18hr) | Authority |
| PREMIUM - Where should price interact? | P2 "2-Mark the Established swing retest POI of the now" (4hr); P3 "3- Mark the swing/Intraday Liquidty" (3hr); P4 same "3-" (1hr) | Premium |
| INTERACTION - Has the main structure activated? | P5 "4- Mark the Intraday FU retesting swing FU (or at the start of swing)" (40 min) | Interaction |
| CONFIRMATION - What TFS and EM support it? | P6 "5-Write down the TFS and note the EM" (40 min) | EM/TFS |
| SCALP - How is the Swing being expressed? | P7 "6-Mark scalp POI /liqudity" (9 min); P8 same "6-" (6 min) | Scalp |
| LTF - Where is the precise entry? | P9 "7- Complete LTF entry and TFS" (4 min); P10 "8-Refine with 50% zone retest (optional)" (3 min) | LTF Liquidity → Entry |
| EXECUTION - Is the entry structurally justified? | (P10 shows the position) | Entry |
| MANAGEMENT - What are we holding? | none (P8's "Hold swing in full..." note is management) | Management |

*Analyst notes:*
- P10 sits in `raw.md` between the LTF and EXECUTION text. Its title ("Refine
  with 50% zone retest (optional)") matches LTF's last sentence ("Refine with
  the optional 50% zone"), and it also shows the short-position box that
  EXECUTION checks. Keep it where he posted it: after the LTF text, before
  EXECUTION.
- P3/P4 (liquidity, "Building narrative/targets") sit under PREMIUM. PREMIUM's
  text says "the relevant Intraday POI/LAOL". The match is looser than for the
  other steps, but his chart numbering (2, 3, 3, then 4 = INTERACTION) settles
  the placement.
- The step 6 → 7 move follows his own memorise line ("Scalp → LTF Liquidity
  → Entry").

**The worked example as a whole** (P1-P10, *analyst summary*): XAUUSD
(FOREX.com), all charts captured at the same moment (sell/buy 4,098.41). A
**bearish swing** from the 18hr FU retest range at about **4,164.55-4,184.77**
(P1 labels 4,165.10 / 4,184.22). The intraday interaction at about
**4,166.18-4,170.10**. The liquidity targets below at **4,127.92** and
**4,104.49** (both already taken when captured). Continuation levels at
about 4,149.84 / 4,145.84 and 4,139.65 / 4,132.47. The final LTF entry at the
LTF LAOL just under 4,170.10. Timeframes descend 18hr → 4hr → 3hr → 1hr →
40 min → 40 min → 9 min → 6 min → 4 min → 3 min.

### 4.3 Stage by stage (text + charts)

Each stage's text is mentor wording; quote it exactly (Definition / rule,
Instruction). Chart annotations are transcribed in quotes; positions are
*analyst description*.

**AUTHORITY - What are we following?** (L27-29)

> Identify the highest established Swing, its direction, strength and active FU premium. Do not get distracted by counter-movements or at least categorise retracement Swing strength vs macro

- **P1 - 18hr.** Title "1-Follow the highest swing". Annotation "18hr FU
  retest/18hr negation/18hr HCS/18hr x3 negation" with an arrow down to the
  long upper wick at about 4,184. Teal lines at **4,184.22** and **4,165.10**
  (the FU retest range). The next 18hr candle is a large red close at
  4,098.41. Shows: the highest swing is a bearish 18hr structure. Four
  confirmation types sit on one candle.
- "categorise retracement Swing strength vs macro" ties to Segment 1's
  ".Start to categorise between the highest timeframe swings" and to
  "Following exact macro swing vs retracement swing interactions" (L84, a
  further advancement).

**PREMIUM - Where should price interact?** (L35-37)

> Mark the established Swing FU retest and the relevant Intraday POI/LAOL. Distinguish the main premium from weaker internal levels.

- **P2 - 4hr.** Boxed title "2-Mark the Established swing retest POI of the
  now". Subtitle "Can be the same as macro or retracement swing-noted
  distinction in step 1". Teal lines **4,184.77** and **4,164.55** from the
  wick high and the open of the rejection candle, extended right. Price then
  falls through four red candles to 4,098.41 (low wick about 4,066).
- **P3 - 3hr.** Title "3- Mark the swing/Intraday Liquidty". Bottom right
  "Simple: Major Liquidity". Teal 4,184.77 / 4,164.55; red lines **4,127.92**
  (from a prior low) and **4,104.49** (from a long lower wick), both swept by
  the decline.
- **P4 - 1hr.** Same title, "3- Mark the swing/Intraday Liquidty", plus
  "Building narrative/targets". Bottom: "Focus on 2 push breakout +retest
  requirement (early buyers/sellers)/unmanipuated doji". Teal 4,184.77 /
  4,164.55; red 4,127.92, 4,104.49 and an unlabelled red line at about
  4,139; short red marks at about 4,150 and 4,155 inside the earlier rally.
- New phrase: **"2 push breakout +retest requirement (early
  buyers/sellers)"**. Not defined further (U4). The unmanipulated doji is
  already defined (Task 1).
- *Progression note:* the Recap task said "not liquidity or zones or even LTF
  execution yet". This sequence now adds liquidity (P3-P4) and LTF
  execution (P9-P10). That fits "the next stages".

**INTERACTION - Has the main structure activated?** (L41-43)

> Look for Intraday FU/EM interacting with the Swing premium. Determine whether we are seeing the initial Swing interaction or continuation.

- **P5 - 40 min.** Title "4- Mark the Intraday FU retesting swing FU (or at
  the start of swing)". Arrow down to the candle at **4,170.10**: "Main swing
  interaction complete (Intraday within swing retest)". Teal lines 4,184.77,
  4,170.10, 4,166.18, 4,164.55. Lower: arrow to 4,149.84 "Continuation of
  swing"; teal 4,145.84, 4,139.65 (with a down arrow), 4,132.47; red 4,127.92.
  Bottom: "Weaker swing 1 origin vs swing 3", with two arrows to red lines at
  about 4,138 and about 4,128 (U3). Red lines on the left mark earlier lows
  inside the rally.
- **The base edge (M3, L93-95), a reply to P5.** Definition / rule:

  > Hilghlighted concept which had been a focus of previous tasks- the base edge - ones foundational profitability:
  >
  > Swing retest , intraday closure within- the most fluent extraction area. Anything else and all refinement is built around its confirmed directional understanding (higher established TS "line" strength)

  Show it next to P5. It names P5's "Intraday within swing retest" as the base
  edge. *Analyst note:* "a focus of previous tasks" most likely means Segment
  1 Task 1 ("intraday and swing FU retest closures") and Segment 3's "Swing
  Intraday Activation". That is an inference; he does not name them.
  "(higher established TS "line" strength)" ties back to "thickest TS line" in
  the puzzle purpose.

**CONFIRMATION - What TFS and EM support it?** (L47-49)

> Write down the established timeframes and their negations, x3, FU or HCS. Understand which structures have closed and gained authority.

- **P6 - 40 min.** Title "5-Write down the TFS and note the EM / Our first
  directional TS structure is now ready". Labels, top to bottom:
  - "6hr-x3 third negation-18hr x3 negation-Daily x3 by x3" and "55 min x3
    negation-50 min x3 self negating" (at the 4,164.55-4,170.10 top)
  - "40 min -35 min x3 self negating" (at 4,149.84)
  - "40 min x3 self negating" (under 4,145.84, at the red line about 4,138)
  - "55 min -50 min-45 min x3 self negating" (at 4,139.65)
  - "55 min-40 min LAOL negation" (bottom, near 4,127.92)
- This is the TFS "write-down" in practice: a list of timeframes, each with
  its confirmation type. From here on (P7-P10) the top lines are repeated as a
  growing header:
  - "6hr-x3 third negation-18hr x3 negation-Daily x3 by x3"
  - "55 min x3 negation-50 min x3 self negating"
  - "8 min-9 min x3 self negating" (added on P7)
  - "4 min-3 min x3 negation" (added on P9)
- *Analyst note (strongly supported, not stated):* the four header lines
  match the TFS categories. The first is the swing / longterm swing, the
  second intraday (30 min-3hr), the third scalp (7-30 min), the fourth LTF
  (1-5 min). Reading the header this way shows "Swing tells WHAT ...
  Intraday WHERE ... Scalp HOW ... LTF WHEN". Publish as an editorial note
  only.
- **EM:** the stage heading "What TFS and EM support it?", the instruction to
  write down "negations, x3, FU or HCS", "qualifying EM" (L62), and "EM/TFS"
  in the memorise line strengthen the existing inference that EM = entry
  model. **It is still not spelled out** (U6).
- "x3 by x3" (again) and "third negation" are new or still undefined (U1, U2).

**SCALP - How is the Swing being expressed?** (L54-56)

> Identify the Scalp FU, waves and liquidity forming within the higher movement. Locate the active Scalp POI for entry refinement.

- **P7 - 9 min.** Title "6-Mark scalp POI /liqudity / We have a fixed
  direction -now to refine its entry so". TFS header with the new line "8
  min-9 min x3 self negating". A green box at the 4,170.10 high, with an arrow
  and "Proper activation of POI-Intraday/swing based-The premium edge
  starts". Yellow highlights on the candles of the earlier up-waves and the
  first down-candles after the box. Red lines (liquidity) at about 4,169 and
  about 4,164. Teal 4,170.10 / 4,166.18 / 4,164.55. Bottom "40 min -35 min
  x3 self negating".
- **P8 - 6 min.** Same title and header. "Scalp waves-an expression of the
  same swing -further TS building", with arrows to a scalp lower high at
  about 4,162.8 and another at about 4,154.8. Then the **management** line:
  "Hold swing in full/hold swing and hold scales/build postion through scales
  and holding partials". Teal tops at 4,170.10 (two touches). A yellow
  highlight on a falling candle at about 4,156-4,153. Bottom "40 min -35 min
  x3 self negating".
- New phrase: **"The premium edge starts"** (at proper activation of the
  intraday/swing POI).

**LTF - Where is the precise entry?** (L60-62)

> Wait for the relevant LTF LAOL interaction, retest and qualifying EM. Refine with the optional 50% zone. Avoid chasing displacement.

- **P9 - 4 min.** Title "7- Complete LTF entry and TFS-Enter only
  after/near Liquidity (red line) taken". Header adds "4 min-3 min x3
  negation". "LTF LAOL" label between two teal tops (about 4,170.10 and
  about 4,169.6). Red liquidity lines at about 4,169.3 (long, from the left),
  about 4,168.2, about 4,164 and about 4,162.3. Price sweeps above the red
  line, then turns down. Teal 4,166.18 / 4,164.55.
- **P10 - 3 min.** Title "8-Refine with 50% zone retest (optional)". Same
  header. A Fibonacci "0.5 (4,169.61)" on the LTF LAOL range; "LTF LAOL" box
  shaded between about 4,169.0 and 4,170.1. A short-position tool: the axis
  labels show **4,169.03** (grey, entry) and **4,169.73** (dark red, stop);
  the green target area extends below the visible chart (*inferred from the
  tool's standard colours*). Red liquidity line at about 4,169.3 from the
  left, taken before the entry.
- **Warning:** "Avoid chasing displacement." Rule: "Enter only after/near
  Liquidity (red line) taken" (P9).

**EXECUTION - Is the entry structurally justified?** (L66-68)

> Confirm the higher direction remains valid, the liquidity interaction has occurred, and the entry has a clear invalidation and acceptable risk.

No chart of its own. P10's position box shows a tight invalidation just above
the LTF LAOL.

**MANAGEMENT - What are we holding?** (L70-72)

> Remember that the entry is LTF, but the intended movement is Swing. Use subsequent Scalp waves to manage continuation while respecting higher structural changes.

Pairs with P8's "Hold swing in full/hold swing and hold scales/build postion
through scales and holding partials".

### 4.4 To memorise (L75-79) - Instruction + Definition / rule

> To memorise:
>
> Authority → Premium → Interaction → EM/TFS → Scalp → LTF Liquidity → Entry → Management.
>
> Swing tells WHAT to follow. Intraday tells WHERE the main interaction is. Scalp tells HOW the movement is developing. LTF tells WHEN and WHERE to execute.

Load-bearing; show as a callout. It is the one direct instruction in the batch
("To memorise"), with no count or deadline. The roles line maps onto the
Cycle page's "Swing Campaign - Intraday Wave - Scalp Flow - LTF Timing"
(cross-link both ways).

### 4.5 Further advancements (L82-90) - Forecast / announced topics

A reply to "Now A Step by step Sequence onto final clarification entry (level 1):":

> Further advancements consists of:
>
> .Following exact macro swing vs retracement swing interactions.<br>
> .Trading Forming swing intraday origin.<br>
> .Adding continuation entries / scalp waves<br>
> .Forming intraday setups<br>
> .Early buyers and sellers
>
> To be continued.

Open thread. *Analyst notes:* "Forming" connects to TFS "Forming: the power
POI"; "origin" connects to the three tradable points (Origin) and Segment 3's
"future origin lesson"; "continuation entries / scalp waves" connects to P8.
Pointers only. Do not claim these are the "future (locked) final advanced
segement".

### 4.6 Level 2: HCS and the limit-order approach (L101-109, HCS-img)

**HCS-img - XAUUSD 30 min** (FOREX.com; price about 4,166; axis about
4,132-4,204). Three teal zones:
- top, from about **4,195.78** up to about 4,190 (the band sits between about
  4,190 and 4,195.8; a teal line at 4,200.44 above it);
- middle, about **4,169-4,173**;
- bottom, about **4,150-4,156.90**.

Many down-arrows at highs touching the zones and up-arrows at lows touching
them. Two position boxes:
- a long from about **4,146.15** (grey) with stop **4,143.50** (red), in the
  bottom zone, mid-chart;
- a short from **4,197.24** (grey) with stop **4,200.44** (dark red) at the
  top zone, right side.

Text:
- Upper left: "Each arrow shows reaction from HCS or 50 min/1hr HCS zone /
  The key Predictive POI-HCS representing LAOL swept"
- Lower right: "Limit order potential approach is made possible / Basic scalp
  refinement/do not neglect RR/Think Fratcal application" and "Better
  usage/reaction timing: knowing of key tradable TFS as it forms"

Shows: zones built from HCS (50 min/1hr) giving repeated reactions, so a limit
order at the zone is possible, if refined.

The text (association with the image: the user placed it after the image, and
the image text matches it point for point. **Strongly supported**):

> What does the HCS represent? Price establishes a protected, manipulated level, clears its LAOL, and marks the beginning of genuine premium price formation. Through previous tasks, one should already be well acquainted with its recognition.

Definition / rule. It **adds to** the existing HCS material and does not
replace it. Terminology already has "What HCS represents (Segments)" with
"FU formed-LAOL taken-respected" (Segment 3, 1 min). This wording is close and
fuller.

> Its application for potential limit order execution: One must still understand and apply the fractality of the concept to refine RR and entry timing, lest one falls into the trap of trading like a retailer, relying on pure prediction without a firm bias grounded in developing price action.

Warning + rule.

> Or more fittingly rephrased from the professional execution perspective, the concise objective (level 2) is to recognise valid, tradable structures as they form, allowing earlier participation where justified. A maximum of one entry before proper establishment.

Definition / rule. **"A maximum of one entry before proper establishment."**
is a quantitative rule. Quote exactly and make it prominent.

> The cold limit order approach is not particularly encouraged, yet It has been chosen to highlight to help bridge the gap for those struggling with more in-depth analysis — an easier foundational edge to build upon. The advanced hint lies in the fractality of the concept. By applying it across multiple timeframe layers, one begins to see how the predictive picture merges into our broader underlying framework of TFS

Opinion / teaching. Attribute it; keep "not particularly encouraged" visible.

*Analyst note:* "level 1" (L23, "final clarification entry") and "level 2"
(L106) are his labels for two levels of the entry. Level 1 waits for
confirmation down the whole sequence. Level 2 means earlier participation at
a forming structure, one entry at most before establishment. They are **not**
Segment, Week or Reflection numbers.

---

## 5. Relationship with the existing Recap & Puzzle

| Existing page says | This batch | Effect |
|---|---|---|
| "**The mentor's answer has not been supplied in this source.** ... no answer, solved markings or interpretation of the lines are published here." | L11-21 give the puzzle's purpose and confirm thick line = most power. Still no solved markings. | Update the sentence: purpose now given (link the new section); specific markings / "particular answers" still not given. |
| Unresolved: "The puzzle's answer and the 'particular answers' he looks for: not given." | Partly answered (purpose, lesson). | Keep "particular answers" unresolved; note that the purpose is now given. |
| Unresolved: "The point and flow mentioned: not restated here." | The Lesson (L21) and "Swing tells WHAT..." are the closest restatement. | Keep it unresolved, with a pointer. Do not equate them. |
| Still to come: "His answer to the puzzle, and the 3 examples reviewed together." | Purpose posted. **No 3 reviewed examples** in this batch. | Keep the "3 examples" item. |
| Still to come: "The next 'stages of implementation', which he says follow 'step by step'." | **Delivered**, most likely: "A Step by step Sequence onto final clarification entry (level 1)" + level 2. *Strongly supported inference* ("step by step" in both). | Move to "now posted" with a link. Mark it as inference. |
| At a glance: recap leaves out "liquidity or zones or even LTF execution yet". | The sequence now includes liquidity and LTF execution. | Note it as the progression; leave the original task wording unchanged. |
| My Work: two uncounted parts. | No new deliverable. | **No My Work change.** |
| TFS page: "His answer has not been posted." | Stale. | Replace with a pointer to the debrief. |

**Spoiler concern:** the user is now doing the Tasks from the beginning. The
debrief tells what the puzzle shows, so a reader who has not tried the puzzle
yet should not see it by accident (D1).

---

## 6. Deferred threads

| Thread (PROJECT_STATE) | Status after this batch |
|---|---|
| The puzzle answer / "particular answers" | **Partly delivered**: purpose and lesson given; specific answers not. |
| The next implementation stages after the 3 reviewed examples | **Delivered (inferred)**: level 1 sequence + level 2. Whether the 3 examples were reviewed is unknown (not in source). |
| The 3 reviewed examples | Not delivered. |
| x3 / x3 entry model; advanced entry models | **Not resolved.** x3 used heavily; "x3 by x3" again; "third negation" new. EM inference strengthened only. |
| Early buyers/sellers | **Partly**: "Price may take out early buyers/sellers" (L17); "2 push breakout +retest requirement (early buyers/sellers)" (P4); listed as a further advancement. Still no formal definition. |
| Future origin lesson | Not delivered; "Trading Forming swing intraday origin" is announced (L85). |
| The 3 xauusd-main-focus sessions | Not delivered. |
| Reflection 3.2 / 3.3 / final reflection post | **Not delivered.** This batch is technical, not the Fundamentals/Reflection series. Do not label it 3.2. |
| Segment 3's locked final advanced segment | Not delivered; not linked. |
| **New thread opened** | "Further advancements ... To be continued." (5 topics, L84-88). |

---

## 7. Fact-status and attribution register

| Claim | Label | Present as |
|---|---|---|
| Puzzle purpose bullets, Lesson (L13-21) | Teaching / interpretation | His words, quoted |
| Thick TS line = most power (L13) | Teaching (his convention for his own chart) | Quoted; the chart-width description is analyst |
| Stage texts (L29-72) | Definition / rule; Instruction | Quoted |
| "Avoid chasing displacement." | Warning | Quoted, highlighted |
| "Enter only after/near Liquidity (red line) taken" (P9) | Rule | Chart text, quoted |
| "To memorise" sequence + roles | Instruction + rule | Callout |
| Base edge (L95) | Definition / rule | Quoted |
| Further advancements | Announced topics | List, "To be continued" |
| HCS represents (L101) | Definition | Quoted |
| Limit-order application, "trap of trading like a retailer" | Warning | Quoted |
| "A maximum of one entry before proper establishment." | Quantitative rule | Quoted, highlighted |
| Cold limit order "not particularly encouraged" | Opinion | Attributed |
| EM = entry model | Inference (stronger now) | Editorial note only |
| Header lines = TFS categories | Analyst inference (strongly supported) | Editorial note only |
| Walkthrough ≠ puzzle chart | Documented from the images (different price range and TFs) | Editorial note |
| Level 2 text belongs to HCS-img | Strongly supported (user placement + matching chart text) | Present together; no note needed beyond the source line |
| Timing ("a week later") | User's note | Raw-only; no dates published |

No market-fact, geopolitical or disputed claims. No fact-checking needed.

---

## 8. Images

| Source | Shows | Belongs to | Class | Publish? | Target file |
|---|---|---|---|---|---|
| `IMAGE LINK.png` (= Img 168) | The original puzzle (30 min) | Puzzle purpose | already published | **Reuse** existing `src/assets/segments/4/puzzle-xauusd-30min.png`; no copy | - |
| P1 | 18hr: highest swing, FU retest / negation / HCS / x3 negation | AUTHORITY | Reference (+ Task, see D2) | Yes, large, lightbox | `step-1-authority-18hr.jpg` |
| P2 | 4hr: established swing retest POI 4,164.55-4,184.77 | PREMIUM | same | Yes | `step-2-swing-retest-poi-4hr.jpg` |
| P3 | 3hr: swing/intraday liquidity 4,127.92, 4,104.49, "Simple: Major Liquidity" | PREMIUM | same | Yes | `step-3-liquidity-3hr.jpg` |
| P4 | 1hr: liquidity, narrative/targets, 2-push breakout + retest | PREMIUM | same | Yes | `step-3-liquidity-targets-1hr.jpg` |
| P5 | 40 min: intraday FU in swing retest, continuation, swing 1 vs 3 | INTERACTION + base edge | same | Yes | `step-4-intraday-in-swing-retest-40min.jpg` |
| P6 | 40 min: TFS write-down per level | CONFIRMATION | same | Yes | `step-5-tfs-and-em-40min.jpg` |
| P7 | 9 min: scalp POI, proper activation, premium edge starts | SCALP | same | Yes | `step-6-scalp-poi-9min.jpg` |
| P8 | 6 min: scalp waves, hold/build position | SCALP (+ MANAGEMENT) | same | Yes | `step-6-scalp-waves-6min.jpg` |
| P9 | 4 min: LTF LAOL, enter after liquidity taken | LTF | same | Yes | `step-7-ltf-entry-4min.jpg` |
| P10 | 3 min: 50% refine, short position | LTF / EXECUTION | same | Yes | `step-8-fifty-percent-refine-3min.jpg` |
| HCS-img | 30 min: HCS zone reactions, limit-order approach | Level 2 | Reference | Yes, large, lightbox | `level-2-hcs-limit-orders-30min.jpg` |

Proposed folder: `src/assets/reference/entry-sequence/` (one copy; any Task
page reuses the same files, as Segments 1-3 share files with the Cycle page).
All are teaching charts: inline at the point they illustrate, original aspect
ratio, not thumbnails. Alt text: step number + timeframe + the chart's title,
for example "18hr - 1-Follow the highest swing: 18hr FU retest / negation /
HCS / x3 negation". Transcribe every annotation as text under each chart
(house style).

---

## 9. External links

None supplied, none needed.

---

## 10. Ambiguities and decisions for the user

### Approved decisions (user, 2026-11-05) - binding

The user approved D1-D6 below, with a clarification to D2. **These override
the option lists that follow** (kept for the record).

1. **D1 Puzzle debrief: approved (a).**
   - It stays on the existing Recap & Puzzle page, collapsed under a clear
     "Read after your own attempt" disclosure.
   - The original puzzle, its chart (Img 168) and every puzzle-specific
     explanation already on the page stay as they are.
2. **D2 Entry sequence: approved (a), with a clarification.**
   - The complete 10-chart XAUUSD walkthrough (P1-P10) goes on the new
     Reference page, because it is a separate worked example.
   - The Recap & Puzzle page introduces the follow-on teaching and links
     clearly to it.
   - **Do not strip** puzzle-specific teaching, rules, chart interpretation
     or explanations out of the Task page just to avoid duplication. The
     original puzzle and its debrief must stay self-contained on that page.
     This covers:
     - the full L11-21 debrief including the Lesson;
     - the line-width reading (D4);
     - the base edge (L93-95), which he calls "a focus of previous tasks" and
       which ties back to the "line" strength in the debrief.
3. **D3 New Reference page: approved.**
   - Title "The Step-by-Step Entry Sequence", slug
     `step-by-step-entry-sequence`, `order: 8`.
   - Preserve all eight stages, the full walkthrough, chart order (P1-P10),
     timeframe transitions (18hr → 3 min), explanations, conditions and his
     exact terminology.
4. **D4 Line widths: approved.**
   - Publish his "thickest TS line - the most power" and the directly
     supported chart observations on Img 168: which lines are thickest, in
     plain description.
   - Do not invent the missing "particular answers", and do not claim the
     puzzle is fully solved.
5. **D5 Level 2: approved.**
   - A clearly separated continuation section on the new Reference page,
     after the level 1 material (source chronology: posted later).
   - Preserve the level 1 / level 2 distinction, the HCS wording, the
     limit-order teaching and its explicit conditions:
     - "A maximum of one entry before proper establishment.";
     - "not particularly encouraged";
     - the retailer-trap warning;
     - the "Think Fratcal application" / "do not neglect RR" chart text.
   - Plus one Terminology HCS bullet.
6. **D6 My Work: approved.** No change. This is mentor teaching, not the
   user's own backtesting.

**Fidelity requirements (binding, from the user):**
- "To memorise" (with its sequence and the roles line) and "A maximum of one
  entry before proper establishment." are quoted exactly, each in its own
  context: level 1 and level 2 respectively. Do not merge them.
- Preserve every warning, exception, timeframe relationship, entry condition
  and sequence. The warnings and conditions include:
  - "Avoid chasing displacement.";
  - "Enter only after/near Liquidity (red line) taken";
  - "Refine with the optional 50% zone";
  - "Do not get distracted by counter-movements...";
  - the EXECUTION checks;
  - MANAGEMENT.
- The 12 source images stay byte-identical:
  - the 11 new ones are copied to the site unchanged (cmp-verified), each
    placed with the mentor text it belongs to (§4, §8);
  - the puzzle image is **reused** from
    `src/assets/segments/4/puzzle-xauusd-30min.png`, not duplicated.
- Terminology, Timeframe Strength and Top-Down Extraction Cycle are changed
  only where the new source genuinely supports a correction or extension
  (§13 lists each change and its source line).
- No invented definitions for HCS (beyond quoting L101), "x3 by x3", "third
  negation", EM or any other unresolved term. U1-U10 stay unresolved.
- `raw.md` stays completely unchanged.
- No new formal Task, no "Segment 4", no "Reflection 3.2", no extra pages
  beyond the one new Reference page, no site redesign.

### Decisions needed (original options; resolved above)

**D1. Spoiler handling of the debrief on Recap & Puzzle.**
- (a) **Recommended:** a new section after "The puzzle", titled e.g. "His
  debrief (posted later)", with the content inside a collapsed
  `<details><summary>Read after your own attempt</summary>`. The visible part
  is one line saying the debrief exists.
- (b) A plain section, visible.
- (c) Reference only, with a link from the Task page.

**D2. How much of the step sequence goes on the Recap & Puzzle page.**
- (a) **Recommended:** the full sequence (text + P1-P10 + memorise + base
  edge + further advancements) on a **new Reference page**. Recap & Puzzle
  gets the debrief (D1), plus a short "What came next: the step-by-step
  sequence (level 1)" section: his intro line, the memorise callout, the roles
  line, the eight stage questions as a list, and a link. Rationale: the
  sequence is not needed to *do* the recap/puzzle, which explicitly excludes
  liquidity and LTF execution "yet". It is the next stage, so Reference-only
  for the charts passes the destination test, and the Task page still shows
  what he taught next.
- (b) The full sequence with all 10 charts on **both** pages (same files).
  Most self-contained, heaviest duplication.
- (c) The full sequence on Recap & Puzzle only; Reference gets a pointer.

**D3. New Reference page title and slug.**
**Recommended:** "The Step-by-Step Entry Sequence", slug
`step-by-step-entry-sequence`, `order: 8`. Sections:
1. Where this comes from (after Recap & Puzzle)
2. The sequence at a glance (memorise + roles)
3. The eight stages with charts
4. The base edge (with Stage 3, Interaction)
5. Further advancements (to be continued)
6. Level 2: HCS and the limit-order approach (HCS-img)
7. Unresolved

Alternative: add these as new sections of the Top-Down Extraction Cycle page.
That page is already long and is organised by Segment concepts, so a separate
page is cleaner.

**D4. Publish the line-width reading of the puzzle chart?**
**Recommended:** publish his words ("thickest TS line - the most power") and
a short factual description of which lines on Img 168 are thickest, labelled
as a description, not his answer. Do **not** publish an inferred "highest
swing" or entry markings. Alternative: his words only.

**D5. Level 2 placement.**
**Recommended:** a section of the new Reference page, plus one bullet under
Terminology `### What HCS represents (Segments)` quoting L101 (heading kept;
the bullet labelled "(level 2, after the puzzle)"). Alternative: its own
Reference page (too small on its own).

**D6. My Work.** **Recommended:** no change. There is no deliverable; "To
memorise" is not counted.

### Unresolved (implementation must not invent answers)

- **U1** "x3 by x3" ("Daily x3 by x3"): still undefined.
- **U2** "third negation" ("6hr-x3 third negation"): undefined. Third of
  what is not said.
- **U3** "Weaker swing 1 origin vs swing 3" (P5): the swings numbered 1 and 3
  are not labelled on the chart. Which two lines the arrows mean is visible;
  why they are 1 and 3 is not.
- **U4** "2 push breakout +retest requirement (early buyers/sellers)" (P4):
  not defined beyond the chart.
- **U5** "intraday closure within" (base edge): read as an intraday-timeframe
  FU/candle closing inside the swing retest, as P5 shows. That reading is
  close to his words, but the exact closure rule is not restated.
- **U6** EM: still not spelled out. The evidence now leans more strongly to
  "entry model".
- **U7** "active FU premium", "premium edge", "main premium" vs "weaker
  internal levels": used, not defined. Keep his wording.
- **U8** The puzzle's specific answer and the "particular answers": still not
  given. The walkthrough is a different chart.
- **U9** The P10 position values are read from the tool's axis labels
  (entry 4,169.03, stop 4,169.73); the target is off-chart. Publish them as
  approximate, or omit them.
- **U10** A 6 min chart is used for the scalp; the TFS categories list
  nothing between 5 and 7 min. Note only. The Cycle page already notes TF
  differences; one more clause there is enough.

---

## 11. Excluded / raw-only

- L9 user note (and the IMAGE LINK re-supply itself, already published).
- L82 and L93 reply-context prefixes (user reconstructions).
- L98 user note "V IMP IMAGE I THINK (...)", including "a week later" and "xd".
- No dates published.
- Nothing substantive from the mentor is dropped.

---

## 12. Classification summary

- **Task (Recap & Puzzle):** puzzle purpose + lesson (L11-21), the line-width
  observation and the base edge (Task + Reference, per the approved D2
  clarification); updates to "The puzzle", Unresolved and Still to come; a
  short pointer section for the sequence.
- **Reference (new page):** the step sequence, P1-P10, memorise, base edge,
  further advancements, level 2 + HCS-img.
- **Reference (extensions):** Terminology (HCS bullet; x3 note on "x3 by x3"
  and "third negation"; EM evidence; Defined elsewhere entries); TFS (replace
  the stale "His answer has not been posted" line); Cycle page (intro pointer,
  roles cross-link after "The cycle" table, Unresolved EM line, U10 clause).
- **Misc:** none.

---

## 13. Implementation architecture recommendation

**Status: APPROVED by the user (2026-11-05).** D1-D6 were approved with the
D2 clarification and the binding fidelity requirements in §10 ("Approved
decisions"). Where anything below differs from §10, §10 wins. Implement
exactly this; nothing beyond it.

**Order of work for `/mentor-implement`:**
1. Copy the 11 new images to `src/assets/reference/entry-sequence/`
   unchanged, and `cmp`-verify each against
   `sources/misc/2026-11-05-misc-puzzle-followup/images/`.
2. Write the new Reference page.
3. Extend the Recap & Puzzle assignment.
4. Make the minimal Reference extensions.
5. Validate.
6. Update PROJECT_STATE.

Leave `raw.md` and the source `images/` untouched.

**New entry**
- `src/content/reference/step-by-step-entry-sequence/index.md`
  - title "The Step-by-Step Entry Sequence", `order: 8`, date per collection
    convention
  - `mentorPrompt`: one paragraph: his level 1 sequence after the Recap &
    Puzzle, one worked XAUUSD example from 18hr to 3 min, plus level 2 (HCS
    and limit orders)
  - Body in `.assignment-body` (Reference default). `> blockquote` for his
    verbatim stage texts, memorise line, base edge, the level 2 rules.
    Charts inline, large, lightbox, with transcribed annotations.
  - "Jump to" line; sections as in D3, in source order.
  - Level 2 is a clearly separated `##` section after Further advancements,
    opening with one line saying he posted it later, on its own (no date).
  - Each stage gets a `###` heading with his heading and question, e.g.
    "### 1 · Authority: what are we following? (18hr)".
  - Under each stage, in this order:
    - his stage text verbatim as `>`;
    - the chart(s) in P-order, at the point he posted them (images precede
      their stage text in the source, so a stage's charts may sit just above
      its quoted text or just below; choose one pattern and use it
      consistently);
    - the full annotation transcription (§4.3);
    - the timeframe in the alt text and caption.
  - Place P10 after the LTF text and before EXECUTION. MANAGEMENT has no
    chart; quote P8's "Hold swing in full..." line there as a cross-reference.
  - The base edge (L93-95) goes with Stage 3 Interaction / P5.
  - "To memorise" goes as a callout in "At a glance" (level 1 context only).
  - "A maximum of one entry before proper establishment." goes in the level
    2 section only, highlighted.
  - A small stage-map table (§4.2) after "At a glance".
  - Editorial notes in italics: the walkthrough is not the puzzle chart; the
    TFS header reading; the EM inference.
  - Unresolved: U1-U7, U9, U10. Related line.
- Images: 11 files to `src/assets/reference/entry-sequence/` (names in §8),
  copied from `sources/misc/2026-11-05-misc-puzzle-followup/images/` and
  cmp-verified.

**Extend: Recap & Puzzle** (`src/content/segments/4/assignment.md`)
- "The puzzle": replace "**The mentor's answer has not been supplied in this
  source.** ..." with a sentence saying he later explained the puzzle's
  purpose (link `#his-debrief-posted-later`), but no solved markings or
  "particular answers".
- **Keep everything already on the page**: the puzzle chart, title/hint
  transcription, his L127 text, the task, At a glance, What to recap. Edit
  only the sentences named here.
- New `## His debrief (posted later)` after "The puzzle". Outside the
  disclosure: one visible line saying he later posted the puzzle's purpose,
  and that it is collapsed so you can attempt the puzzle first. Then
  `<details><summary>Read after your own attempt</summary>` (D1a) holding,
  self-contained (D2 clarification):
  - L11-21 verbatim, including "Some of the purpose" (he does not claim it
    is the full answer) and the Lesson as a `>` rule;
  - the D4 line-width observation: "thickest TS line - the most power",
    tied to the hint "Established - TF catagory width". Then the plain
    description of the thickest lines on Img 168:
    - lows about 4,233, about 4,290, about 4,245 (double bottom);
    - a thick short line about 4,262 far left;
    - highs about 4,368 and 4,397-4,400 medium.
    Label it as a description of the chart. Do not choose "the highest swing",
    do not mark entries, and do not say the puzzle is solved;
  - the base edge (L93-95) verbatim, with one line saying he attached it to
    the follow-on walkthrough and that it ties back to "line" strength (link
    to the Reference stage 3);
  - one sentence saying the specific "particular answers" and solved markings
    were not posted;
  - links: TFS "The LTF builds the HTF but HTF commands the LTF" and the
    Cycle page's early buyers/sellers.
- Blank lines around the markdown inside `<details>` so it renders. Reuse the
  existing `response-gallery`-style `<details>` pattern or a plain
  `<details>`. No new component; at most a minimal scoped style if the
  disclosure is unreadable.
- New `## What came next: the step-by-step sequence (level 1)` after "What to
  recap" (or after the debrief):
  - the L23 intro;
  - the memorise callout and the roles line;
  - the eight stage questions;
  - one line that it is one worked example on a different XAUUSD chart;
  - a link to the Reference page.
  - Only the intro and the memorise callout appear here, not P1-P10 (D2).
    Put this section outside the spoiler disclosure: it does not reveal the
    puzzle.
  - No My Work change (`parts`, `mineGuide` untouched).
- "Unresolved": update the answer bullet as in §5; add nothing invented.
- "Still to come":
  - "stages of implementation": now posted (inference; link);
  - keep "the 3 examples reviewed together";
  - add "Further advancements ... To be continued" with a link.
- `segment.md`: leave unchanged (summary/keyQuote still accurate), unless the
  user wants a one-line mention.

**Extend: Reference**
- Terminology:
  - `### What HCS represents (Segments)`: add a bullet with L101 (+ link to
    the new page `#level-2`);
  - the x3 italic note: add "Daily x3 by x3" and "third negation" (P1/P6)
    as still undefined;
  - Used on the charts → EM: add the new evidence, still an inference;
  - Defined elsewhere: add "Base edge", "Level 1 / level 2", "50% zone retest
    (optional)" → the new page;
  - Related.
- Timeframe Strength: replace "His answer has not been posted." with a
  pointer to the debrief; add one italic line linking the new page's
  Confirmation stage (TFS write-down in practice); Related.
- Top-Down Extraction Cycle:
  - intro italic line gains a link to the new page;
  - after "The cycle" table, a pointer that "Swing tells WHAT ... LTF tells
    WHEN and WHERE" restates the cycle (new page link);
  - Unresolved: the EM bullet notes the new evidence;
  - a U10 clause in the timeframes note;
  - Related.
- Optional (low value, skip unless asked): Rules of analysis § 10 Final
  entries pointer.

**Source support for each Reference extension** (change only these):

| Change | Supported by |
|---|---|
| Terminology HCS bullet | L101 |
| Terminology x3 note | P1 "18hr x3 negation"; P6 "Daily x3 by x3", "6hr-x3 third negation" |
| Terminology EM evidence | L47, L62, L77 |
| Terminology Defined elsewhere | L95, L23 / L106, L62 / P10 |
| TFS stale-line replacement | L11-21 |
| TFS write-down pointer | L49, P6 |
| Cycle roles pointer | L79 |
| Cycle EM | as for Terminology EM |
| Cycle U10 clause | P8 |

Nothing else on those pages changes.

**Not to do**
- No "Segment 4", "Task 4", "Week 4" or "Reflection 3.2" anywhere.
- No new Segments folder or Task route.
- No dates.
- Do not equate "further advancements" with the "(locked) final advanced
  segement".
- Do not draw or describe solved puzzle markings.

**Validation (for /mentor-implement)**
- Tests, clean build, check-dist.
- The new page plus the changed pages render, with lightbox and no overflow
  at 1280/375px.
- Every other page byte-identical.
- No "Segment/Task/Week 4" in dist.

**PROJECT_STATE after implementation**
- Close or partly close the threads in §6.
- Open "Further advancements (to be continued)".
- Note the import-script label limitation.

**Only reasons `/mentor-implement` may reopen the source:** U9 (reading the P10
axis labels again, if values are published), and checking annotation
transcriptions against P1-P10 / HCS-img while writing the alt text and
captions.
