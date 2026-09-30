# Analysis - Week 2: Timeframe Strength

Claude's interpretation of `raw.md` + `images/`. `raw.md` is the untouched
source: only the 34 standalone image-reference lines were linked by the import
script. `image 128` appears only inside the user's own note (L145), so that
line was left untouched and the file was copied by hand (see §1).

Conventions in this file:

- `> quote` = mentor wording, **verbatim including typos**. Proposed
  spelling-only fixes for publication are listed in §15.4 (decision D3).
- *Analyst note* = Claude's observation. Not mentor teaching, and not for
  publication unless approved.
- `L##` = line number in `raw.md`. `Img N` = `images/image N.jpg`.
- "Week 2 Task M" is **not** standalone Task M (`/tasks/M/`) and not Week 1
  Task M. This file says "standalone Task 3" or "W1 T3" wherever confusion
  is possible.

---

## 1. Source status

| Check | Result |
|---|---|
| raw.md integrity | 175 lines. Only the 34 image-reference lines (L60-68, L78-90, L104, L120, L124-125, L129-130, L136, L142, L149, L155, L167, L171) were rewritten to `![image N](<./images/image N.jpg>)`. The script verified that no other line changed. |
| Images | **35 files** in `images/`: Img 98-132 continuous. |
| Imported by script | 34, all byte-verified (`cmp`) against `~/Downloads`. No STALE, AMBIGUOUS or DUPLICATE flags. |
| Imported by hand | **Img 128**. It is referenced only inside the user's note on L145 ("image 128 - A clear explanation well done."), so the script correctly did not treat it as a reference line, and it reported a numbering gap at 128. Copied with `cp -p` and verified with `cmp`. The L145 line was **not** rewritten. |
| Missing | None. |
| Instrument | Every mentor chart is **Gold Spot / U.S. Dollar (XAUUSD), FOREXCOM**, TradingView. Student screenshots show gold too (Img 132 header). |
| Chronology | Coherent (§3). The main Week post runs L13-102. The Q&A and the live worked example (L104-173) came later: student screenshots are stamped "Yesterday" and "23h", and gold had moved from ~3,432 to ~3,380. |
| Non-mentor text | The user's notes at L112, L122, L144 and L145, each marked "(my note: ...)". In every case the note only says **which image the mentor text after the dash refers to**. The text after " - " is mentor text (see §3). |
| Student material | Img 120, 128, 130, 131, 132 are Discord screenshots of other students' posts (names and avatars visible). |
| Truncation | None apparent. The Week post ends with a closing lesson ("upon which we will finish"), and the file ends after the Img 132 answer. |
| Links | None referenced, none missing. |
| Dates | None in the mentor text. *Inferred only:* every Task chart shows gold at **3,432.50**, a close consistent with Friday 13 June 2025. The live example (~3,380) is a few days later. Student Img 132 is dated "16/06/2025". Week 1 was also inferred as June 2025. **Put no dates on the site.** |

### 1.1 How the user's notes resolve the image links

- **L112** "(my note: links to the 5th image under task 1 from this week...)".
  The 5th image under Week 2 Task 1 is **Img 102** (98, 99, 100, 101, 102).
  Confirmed by the chart evidence: the student's question screenshot (Img 120)
  is a crop of Img 102 ("So here is the EST TFS POI", "HCS was not EST with a
  retest first", "This HCS was not established as we did not yet establish a
  retest from the FU on left"). The mentor text after the dash ("On the other
  hand the first example here...") contrasts the left-hand HCS on Img 102
  ("This HCS was established as we had price first retest the FU").
- **L122** "(My note: Linking to image 121)". "Starting from the 4hr only, we
  have a strong base to follow" is the caption of Img 121 (4hr).
- **L144** "(My note: Linking to image 127)". "Advanced rule." is the caption of
  Img 127, whose chart carries an "*Advanced*" label.
- **L145** "(my note: also linking to image 127) - image 128 - A clear
  explanation well done." The mentor's reply "A clear explanation well done."
  answers the student post in Img 128. *Analyst note:* L147 "Same theory as
  normal TFS (banks orders are in, then entry from premium established retest
  area)" most likely continues that reply, because Img 128 is exactly an
  FU → retest → HCS sequence. It could also be a closing caption for Img 127,
  whose label "HCS from FU POI from left that has been retested first (sign of
  banks orders)" makes the same point. The teaching is identical either way,
  so placement does not change meaning (§17, not a decision).

### 1.2 Caption placement

In this batch the mentor's caption **follows** its image(s): L122 after
Img 121, L127 after Img 122-123, L132-134 after Img 124-125, L138-140 after
Img 126, L144 after Img 127, L151-153 after Img 129. The lead-in sentences
(L118, L56-58, L72-76) come before the images. Student screenshots (Img 120,
128, 130, 131, 132) are each followed by the mentor's answer.

---

## 2. Executive overview

**Week 2 teaches timeframe strength (TFS)**: the directional energy release
out of zones. It covers five TFS categories with minimum average ranges, the
two ways TFS is used (**established**, meaning the confirmed prevalent
direction, and **forming**, meaning the "power POI"), the rule that every
TFS needs a refined zone reaction, and the entry logic of **retesting an
established TFS POI**. Every rule of the retest method is taught through
annotated charts ("The rules are given within the chart examples to
dissect").

**Week 2 assigns two formal Tasks:**

1. **Task 1**: the retest of the established TFS POI. Mark 2 months of data
   from 3hr to 30 min.
2. **Task 2**: the complete picture. Zones plus swing TFS forming (the power
   POI) plus established TFS for later entry. Mark 30 examples of any swing
   move (3hr+).

A closing moral/faith lesson, the students' Q&A and a live worked example
("zones and TFS" on current price) follow.

**Relationship to Week 1:** Week 2 builds directly on it. Zones are "the
energy from which all subsequent market reactions occur" and TFS is the
release of that energy. Task 2 marks zones as part of the deliverable. The
live example is explicitly "the two concepts we have covered, zones and TFS".
It also delivers Week 1's promise that zone power would be "later explored
with TFS".

**Relationship to standalone Task 3:** Task 3 first defined TFS ("when price
establishes a confirmed prevalent direction") and gave trade-type tiers.
Week 2 is the full TFS segment: new categories, forming vs established as the
two uses, and the retest method. The Week 2 categories differ from Task 3's
tiers (§15).

---

## 3. Week 2 chronology map

| # | Lines | Phase | Content | Label |
|---|---|---|---|---|
| 1 | L13 | Week heading | "Week 2 : Timeframe strength" | Title |
| 2 | L15-19 | Theory (advanced) | Zones = energy, TFS = signature of its release. Liquidity came first historically, but TFS is explored first. TFS carries all key concepts. "Try to really understand this passage. Come back to it." Left for the students to complete. | Teaching + study instruction |
| 3 | L23-35 | Theory | 5 TFS categories and ranges. "minimal average ranges based upon negation / HCS". The LTF/HTF statement to study, and its gloss. | Definition / rule |
| 4 | L39-43 | Theory | The two ways TFS is used: established and forming | Definition |
| 5 | L45-49 | Theory, advanced hints | Scalp and below: liquidity and TS matter more. Exact swing entries are possible (example list). "not our focus yet", intraday and swing first. | Teaching + scope |
| 6 | L51 | Rule | "All TFS must have some kind of refined zone reaction" / matching TFS + same TF zone = strongest | Rule |
| 7 | L54-68 | **Task 1** | Instruction, then Img 98-106 (the rules are in the charts) | **Formal task** |
| 8 | L70-90 | **Task 2** | Instruction + focus note, then Img 107-119 | **Formal task** |
| 9 | L92-102 | Closing lesson | "A lesson that matters": the proverb, success, privilege as a trust, intention | Misc (opinion / faith) |
| 10 | L104-116 | Q&A (later) | Img 120 student question on Img 102 → established TFS nullified; an HCS as an established-TFS retest | Clarification of Task 1 |
| 11 | L118-155 | Live worked example (later) | "How we would understand current price action with only basic application of ... zones and TFS": Img 121 (4hr) → 122 (3hr) → 123-125 (50 min) → 126-127 (30 min) → 129 (7 min). The Img 128 Q&A is interleaved at L145-147. | Reference worked example |
| 12 | L157-165 | Q&A | Img 130 "What is TFS? Sell or buy?" → both sides established, fixed main direction per side | Reference Q&A |
| 13 | L167-169 | Q&A | Img 131 "why is that marked?" (not retested) → retest proximity gradient | Rule (Reference) |
| 14 | L171-173 | Q&A | Img 132 a student's chart → "An example of the exercise done correctly" | Task 1 model answer |

No deadline, pacing, submission channel, review plan or "after Week 2"
announcement appears anywhere in the source.

---

## 4. Formal deliverable map

**Two formal Tasks.** The mentor labels them "Task 1:" (L54) and "Task 2:"
(L70). Nothing else in the source is assigned.

| Candidate | Lines | Class | Why |
|---|---|---|---|
| "Task 1: ... Mark 2 months of data from 3hr - 30 min" | L54-58 | **A. Formal** | Labelled Task, with volume, TFs and an objective |
| "Task 2: ... Mark 30 examples of any swing move" | L70-76 | **A. Formal** | Labelled Task, with a count and TFs |
| "Try to really understand this passage. Come back to it." | L17 | Study instruction (D) | No deliverable. Goes to Reference + the landing "study first" note |
| "Study now this statement : ..." | L33 | Study instruction (D) | Same |
| "I leave some aspects for you to think over ... you are expected to complete - through your own comprehension, research and practice" | L19 | Expectation (D) | Open-ended self-study, not countable |
| Hints for exact swing entries | L45-49 | F. Future work | "That is not our focus yet" |
| Live zones + TFS example | L118-155 | B/G. Demonstration | Worked example, nothing assigned |
| Img 132 "An example of the exercise done correctly" | L173 | G. Example (student's, endorsed) | Model answer for Task 1 |

| Mentor label | Proposed site title | `short` | Progress |
|---|---|---|---|
| Task 1 | **Established TFS Retest POI (2 months, 3hr–30 min)** | "Established TFS retest · 2 months" | No count → "Not started" (like W1 T1's "2 years") |
| Task 2 | **Swing TFS Forming & Zones (30 examples)** | "Swing TFS forming · 30 examples" | `target: 30`, `unit: "examples"` → "0 / 30 examples" |

---

## 5. Week-level content

Supported by the source:

- **Topic and title:** "Week 2 : Timeframe strength" (L13).
- **Key quote:** "The LTF builds the HTF but HTF commands the LTF". The mentor
  asks for this statement to be studied (L33) and refers back to it in Task 2
  (L76).
- **Study-first:** the theory passage (L15-19) and the statement belong on the
  new Reference page. The landing's `study` note should say he asked for the
  passage to be understood and revisited ("Try to really understand this
  passage. Come back to it.").
- **Focus of the Week** (landing body, short): "we will work on mastering
  intraday and swing first (general flow of price action, and moves similarly
  on LTF/scalp)". Task 2 repeats it: "For now, our focus is intraday and
  above". The exact-swing-low/high hints were "given here first for advanced
  learners". This explains why both Tasks stop at 30 min.
- **How the Tasks fit together** (1-2 sentences, editorial): Task 1 = the
  **established** use (retest POI, 3hr-30 min). Task 2 = the **forming** use
  (the swing power POI from zones, 3hr+) followed by the established retests
  beneath it. These are the "two ways we use TFS" (L39-43).
- **Also from Week 2:** pointer to the closing lesson in Misc (§9).

Not supported, so **do not add**: pacing, deadline, submission guidance,
"After Week 2". *Analyst note:* stating "no deadline given" is unnecessary.
Omit the section instead.

---

## 6. Task-by-task deep analysis

### 6.1 Week 2 Task 1: the retest of the established TFS POI

**A. Purpose.** Practise the **established** use of TFS: once price has
confirmed a direction, the entry comes on the retest of that established TFS
POI, "in line with the confirmed prevalent move of the moment". Marked
top-down from 3hr to 30 min.

**D. Formal assignment (exact, L54-58):**

> Task 1:
>
> Focused on the retest of established TFS POI. Mark 2 months of data from 3hr - 30 min. Observe the main entry potential in line with the confirmed prevalent move of the moment.
>
> The rules are given within the chart examples to dissect

**At a glance:**

| | Requirement |
|---|---|
| Volume | "Mark 2 months of data" |
| Timeframes | "from 3hr - 30 min". His charts: 3hr → 1hr → 50 min → 45 min → 30 min (Img 99-106). |
| What to mark | The retest of the established TFS POI. On 1hr: "Marking the retest or HCS of established TFS" (Img 101) |
| Observe | "the main entry potential in line with the confirmed prevalent move of the moment" |
| Rules | "given within the chart examples to dissect" |
| Instrument | Not stated. His charts are XAUUSD. |
| Deadline | None given |

**B. Teaching needed on the page** (short, then link to Reference TFS):
established TFS = "the confirmed prevalent direction" (L41); "Generally
30 min + (intraday) is our minimum requirement for a true move" (Img 98).

**C. Worked example: the rules in the charts.** Order as posted. Img 98 is
the concept intro, then the top-down sequence.

| Img | TF | What it shows, with all annotations transcribed |
|---|---|---|
| 98 | 45 min | **Intro: FU → established TFS → retest.** A big bearish drop, then an FU candle whose wick high is marked (levels 3,336.98 and 3,332.27). "Price forms the FU to the downside. We now have Established TFS down. Generally 30 min + (intraday)is our minimum requirement for a true move*". An arrow at the next candle: "We look to enter upon its retest with a confirmed direction (prevalent TFS)". Footnote: "*Not the case for every true move but will capture majority daily / (scalp TFS that gives complete refinement of every reversal needs more advanced TS/liquidity understanding)". Price then falls. |
| 99 | 3hr | **The marking, unannotated.** ~3,245-3,440 over several weeks. Up and down arrows at every established-TFS retest POI. This is what a finished Task 1 chart looks like. |
| 100 | 3hr | **The same chart with its rules.** "Fu retest down also. But we Start with marking only the true moves in relation to TF" (arrow to a small candle in the up-leg near 3,390). "Fu retest of established TFS" (the FU wick 3,338.68 → retest at 3,365.86). "x3 negation doesnt need full Fu closure*" (a mid-range swing high). "HCS doesn't need full Fu closure (weakest ATT FU suffices)*" (a swing low near 3,305). "*Advanced rules - beginners can ignore". |
| 101 | 1hr | "Now the 1hr: / Marking the retest or HCS of established TFS". Large and small up/down arrows over the same period. *Analyst note:* larger arrows appear to carry over the 3hr marks and smaller ones are the new 1hr marks. This is not stated. |
| 102 | 1hr | **Established vs not-established HCS** (the Q&A in §6.1 E refers to this chart). Left low: "Retest of FU first so the next HCS is forming as EST TFS" and "This HCS was established as we had price first retest the FU". Middle: "Fu retest adds to FU range (for latter HCS to occur from)". Right, ~3,380: "This HCS was not established / as we did not yet establish a retest from the FU on left", then "So here is the EST TFS POI" at the next low. Top, ~3,410: "HCS was not EST with a retest first", then "So here is the EST TFS POI". |
| 103 | 50 min | "Now the 50 min:" Arrows as before. At the top right, "Fill in the gaps", with marked levels 3,422.82 / 3,419.2x / 3,417.65 / 3,410.47. *Analyst note:* the lower TF adds retest POIs that the higher TFs did not show. |
| 104 | 50 min (zoom of the top right of 103) | "Price retested FU first" → "So the HCS is from EST TFS". |
| 105 | 45 min | "Then the 45 min:" Arrows. A horizontal level at 3,315.39 from a marked low. |
| 106 | 30 min | "Then the 30 min: / We havealready captured almost every true move- following the established TFS retest POI". Full arrows. |

**Rules extracted from the charts** (for the page's "Rules in the charts" list
and for Reference). Each is quoted from a chart:

1. An FU establishes TFS in its direction: "Price forms the FU to the downside. We now have Established TFS down" (Img 98).
2. Enter on its retest: "We look to enter upon its retest with a confirmed direction (prevalent TFS)" (Img 98).
3. Minimum TF for a true move: "Generally 30 min + (intraday) is our minimum requirement for a true move*", which captures the majority daily (Img 98).
4. Mark only the true moves in relation to the TF: "Fu retest down also. But we Start with marking only the true moves in relation to TF" (Img 100).
5. An HCS counts as established only after the FU was retested first: "This HCS was established as we had price first retest the FU" / "This HCS was not established as we did not yet establish a retest from the FU on left" (Img 102); "Price retested FU first → So the HCS is from EST TFS" (Img 104).
6. "Fu retest adds to FU range (for latter HCS to occur from)" (Img 102).
7. Advanced (beginners can ignore): "x3 negation doesnt need full Fu closure" and "HCS doesn't need full Fu closure (weakest ATT FU suffices)" (Img 100).
8. Work down the TFs to "fill in the gaps" (Img 103). By 30 min, "almost every true move" is captured (Img 106).

**E. Clarifications and Q&A (later)**

*Q (Img 120, paraphrase, anonymous):* On the 1hr chart (Img 102), a student
circled the green FU left of the "not established" HCS. They noted that the
next candle retested it and asked whether that was the retest. Answer
(L106-116, verbatim):

> Price first moved away from the original FU POI , and retested the bearish FU consequently.
>
> That previous "established" TFS is null now.
>
> When price came back to form the HCS I have marked for example , we did not have a new established bullish TFS. Thus we wait for the new closure, and retest.
>
> On the other hand the first example here was preceeded with an FU retest (active bullish TFS) and no new established (bearish) TFS opposite.
>
> So the next HCS that forms serves a retest of an already established bullish TFS for entry opportunity location (the same way we use FU retest).
>
> Summary: even though it may seem we are taking the HCS as forms , it actually falls into the criteria of established TFS retest

Take-aways: an established TFS is **nullified** when price leaves its POI and
retests the opposite FU. After that, wait for a new closure and its retest.
An HCS that forms after an active established TFS (FU retested, no opposite
established TFS) *is* an established-TFS retest, even though it looks like
entering "as forms".

This maps directly onto Task 2's Img 119: "Also 30 min retest of EST TFS UP in
tis HCS as we retested the FU to the left first / So we can look for buys as
this forms - but it falls under EST TFS parameters". Cross-link the two.

*Q (Img 131, paraphrase):* Students asked why an arrow was marked at a point
that had not been retested exactly. Answer (L169, verbatim):

> Price does not always have to meet the exact FU wick. It is ideal yes , but close enough still counts (think of anything past the 70% fib of the full FU as a weak retest, touching the FU wick stronger, and touching the 50% of the FU wick stongest)

Present this as a small graded table on Reference (weak / stronger /
strongest) plus a one-line pointer on Task 1. *Analyst note:* "70% fib of the
full FU" and "50% of the FU wick" are his measures. Don't add a diagram, and
don't guess the fib anchor direction.

*Q (Img 130, paraphrase):* On a 1hr chart (a student's), "after this candle,
what is TFS, sell or buy?" Answer (L157-165), verbatim:

> When we come to the lower bullish FU wick retest , we can look for the buy POI
>
> When we come to the upper bearish FU retest , we can look for the sell POI
>
> Each side will give us a fixed main direction to look at so there isn't a confusion
>
> Here price has established both sides. We have notable POI in both regions.
>
> Ultimately it will come to HTF (we only see one TF here) and liquidity calauction + entry model (we had a x3 negation up which was more powerful)

Goes to Reference TFS (general), with a pointer from Task 1.

*Model answer (Img 132, a student's 3hr chart, L173):*

> An example of the exercise done correctly. (Ignore the x3 body retest part). Observe the flow of buy and sell TFS signals

The chart's labels, left to right: "attfu down est TFS" → "here sell" →
"hcs up est TFS" → "small retest buy here" → "closed hcsn, sell est / next
candle sell when retest" → "negation + hcs est buy" → "x3 neg + hcs sell est"
/ "retest buy (x3 body retest)" → "retest sell" / "hcs est" → "hcs est" /
"retest buy" → "retest sell" / "hcs est" → "retest buy". "The exercise" =
Week 2 Task 1 (3hr, established-TFS retest buy/sell signals). Publication:
decision **D1**.

**F. Images for the page:** Img 98-106 (9) + Img 132 cropped (D1). Img 120
and 131 stay raw-only (student screenshots; their questions are paraphrased).

**H. Final authoritative requirement:** mark 2 months of data, 3hr → 30 min,
marking every retest of the established TFS POI (FU retests, and HCS after an
FU retest), "in line with the confirmed prevalent move of the moment",
following the rules in his charts. No later correction or amendment exists.

**I. Cross-links:** Reference TFS (established use, retest proximity, both
sides, nullification). Terminology (FU, HCS, negation, x3, attempted FU,
EST). Zones (weakest ATT FU zone, for the advanced HCS rule). Task 2's
Img 119. Standalone Task 3 rule 4 (§15 C4).

**J. Unresolved:** U1 (instrument), U2 (non-standard TFs), U4 (FU closures
below 3hr). See §17.

**My Work (`mineGuide`, editorial):**
- "Two months of data, marked top-down: 3hr, 1hr, 50 min, 45 min, 30 min (or the TFs you have)."
- "Each entry: the charts with every established-TFS retest POI arrowed, and notes on the prevalent direction."

---

### 6.2 Week 2 Task 2: the complete picture (swing TFS forming)

**A. Purpose.** Practise the **forming** use of TFS: find the swing "power
POI" where multi-TF HCS/negation/x3 form from zones and from established TFS.
Know "the exact premiums and potential of the move". Then follow it down with
established TFS retests for the entry.

**D. Formal assignment (exact, L70-76):**

> Task 2:
>
> Focused on the complete picture. Zones, and power swing TFS forming (knowing of the exact premiums and potential of the move upon multi TF alignment and stronger manipulation models) , with established TFS for subsequent entry potential.
>
> Mark 30 examples of any swing move (3hr +, add more HTF as comfortable).

Followed by (L76, context for the charts):

> Price moves similarly across the LTF. Remember the statement mentioned previously that you are to study. For now, our focus is intraday and above - the general flow of the markets true moves, and how we are positioned correctly to capture them:

**At a glance:**

| | Requirement |
|---|---|
| Volume | "Mark 30 examples of any swing move" |
| Timeframes | "3hr +, add more HTF as comfortable". His example goes 18hr → 14hr → 12hr → 11hr → 7hr → 5hr → 4hr → 3hr, then 1hr and 30 min. |
| Mark | "Zones, and power swing TFS forming ... with established TFS for subsequent entry potential". The chart header: "We will mark zones and established TFS POI- / Note the entry area opportunity and strength of true move" |
| Know | "the exact premiums and potential of the move upon multi TF alignment and stronger manipulation models" |
| Below 3hr | *From his example, not the written instruction:* "Complete 1hr/50 min zones and established TFS POI utill 30 min" (Img 117) |
| Focus | "intraday and above" |
| Deadline | None given |

**B. Teaching the page needs:** forming TFS = "the power POI - the premium
level for that category". It "must be used in conjcture with some kind of
already established prevalent TFS" (L43). Swing category = 3hr-7hr (250+
pips) and 7hr-4D+ (350+) (L28-29). "All TFS must have some kind of refined
zone reaction. When we have matching TFS with the same TF zone - the
strongest true move potential/power POI" (L51). Link to Reference TFS for the
rest.

**C. Worked example: one swing low, top-down (Img 107-119).** The same bullish
swing (gold, the low around 3,290-3,320, then the rally to ~3,440). Every chart
carries the header "TFS as forming: the power POI / We will mark zones and
established TFS POI- / Note the entry area opportunity and strength of true
move" (Img 107-115). The labels **accumulate**: each lower TF repeats the
higher-TF labels and adds its own. Cyan boxes = zones.

| Img | TF | New on this chart (the labels that TF adds) |
|---|---|---|
| 107 | 18hr | One 18hr zone ~3,312-3,322. At the high: "18hr HCS x2" (bearish). Lows: "18hr HCS x1 + negation" (the first low) and "18hr HCS x2 -from established bullish TFS POI and 18hr zone" (the second low, inside the zone). |
| 108 | 14hr | **Superseded draft of 109** (same chart; one label reads "14hr negation+HCS" where 109 has "14hr negation+HCSx2"). Raw-only (§15 C5). |
| 109 | 14hr | A second, lower zone ~3,290-3,297 and a 14hr zone at the high ~3,372-3,385. High: "18hr HCS x2 / 14hr zone reaction". Lows: "18hr HCS x1 + negation / 14hr HCS x1 negation- from established bullish TFS POI" and "18hr HCS x2 -from established bullish TFS POI and 18hr zone / 14hr negation+HCSx2 - from established bullish TFS POI". Arrow to an earlier leg: "(not focused on this move- same process)". |
| 110 | 12hr | Labels become "14hr/12hr ...". New: "18hr/14hr/12hr established bullish TFS POI retest" (the candle after the second low). |
| 111 | 11hr | High adds "11hr HCSx1". The retest label becomes "18hr/14hr/12hr/11hr established bullish TFS POI retest". Lows become "14hr/12hr/11hr ...". |
| 112 | 7hr | More zones, including a lower refined one. High: "14hr/12hr/7hr zone reaction". Retest adds "7hr negation +HCS from 7hr HCS zone". Second low adds "7hr negation from 7hr HCS(or weakest ATT FU (refined) zone". First low adds "7hr HCS from broken weakest ATT FU zone". Down arrows mark the earlier highs. |
| 113 | 5hr | High adds "5hr EST bearish TFS retest(same region)". Retest adds "5hr x3 negation + HCS". Second low adds "5hr negation". First low adds "5hr HCS+negation". |
| 114 | 4hr | "14hr/12hr/7hr/5hr/4hr zone reaction", "5hr/4hr EST bearish TFS retest(same region)", "5hr/4hr x3 negation + HCS". |
| 115 | 3hr | "…/4hr/3hr zone reaction". Retest adds "3hr negation + HCS from 3hr refined zone". Second low "5hr/3hr negation". First low adds "3hr HCS". A thin green refined band sits inside the main zone. |
| 116 | 3hr (summary) | The same labels. New header: "Any multi forming 3hr+ TFS from zonefalls into our swing category and so we pay extra attention for the true moves of higher potential / (following and confirmed by the EST TFS POI)". **The key sentence of the example.** |
| 117 | 1hr | Header: "Complete 1hr/50 min zones and established TFS POI utill 30 min / As we have seen- every move will be captured along swing (power POI) TFS+zone confirmation / As forming (power multi TFS) and established retest TFS POI=true entry points located". High adds "1hr negation from refined 1hr HCS zone". A new mid-level: "Following swing TFS - new 1hr EST TFS POI from HCS zone". Retest adds "1hr negation from refined 1hr HCS zone". First low adds "1hr HCS x1 from established bullish TFS POI". |
| 118 | 30 min | Zoom on the lows. "Live time - retest of the established 30 min TFS up" (the left low) and "Live time - retest POI of the established 30 min(minimum intraday) TFS up" (the right low), each with the cumulative HTF labels. |
| 119 | 30 min | The same chart, re-annotated at the right low: "Also 30 min retest of EST TFS UP in tis HCS as we retested the FU to the left first / So we can look for buys as this forms - but it falls under EST TFS parameters". |

**Presentation recommendation:** one `###` per TF (18hr … 30 min), in posted
order. For each chart, list **only the labels new at that TF** as the chart
annotation text. Give the full cumulative label set once, under the 3hr
summary (Img 116), which has the most complete low/high stacks. This avoids
eleven near-identical text walls while keeping every label once. Img 116's
header and Img 117's header go in bold as the lesson of the example.

Final cumulative stacks (for Img 116/117):

- **High (bearish reaction):** "18hr HCS x2 / 14hr/12hr/7hr/5hr/4hr/3hr zone reaction / 11hr HCSx1 / 5hr/4hr EST bearish TFS retest(same region) / 1hr negation from refined 1hr HCS zone"
- **First low:** "18hr HCS x1 + negation / 14hr/12hr/11hr HCS x1 negation- from established bullish TFS POI / 7hr HCS from broken weakest ATT FU zone / 5hr HCS+negation / 3hr HCS / 1hr HCS x1 from established bullish TFS POI"
- **Second low:** "18hr HCS x2 -from established bullish TFS POI and 18hr zone / 14hr/12hr/11hr negation+HCSx2 - from established bullish TFS POI / 7hr negation from 7hr HCS or weakest ATT FU (refined) zone / 5hr/3hr negation"
- **Retest (entry):** "18hr/14hr/12hr/11hr established bullish TFS POI retest / 7hr negation +HCS from 7hr HCS zone / 5hr/4hr x3 negation + HCS / 3hr negation + HCS from 3hr refined zone / 1hr negation from refined 1hr HCS zone"

**E. Clarifications:** none specific to Task 2. The Q&A at L106-116 (Task 1)
explains Img 119's "falls under EST TFS parameters". Cross-link it.

**F. Images:** Img 107, 109-119 (12). Img 108 raw-only.

**H. Final requirement:** 30 examples of any swing move on 3hr+ (more HTF as
comfortable). Each marks the zones, the forming multi-TF swing TFS (power
POI, its premiums and potential), and the established TFS POI for the
subsequent entry. Following his example, complete the 1hr/50 min zones and
established TFS POI down to 30 min. No later amendment exists.

**I. Cross-links:** Reference TFS (categories, forming use, zone rule).
Reference Zones (HTF marking sequence: his 18hr→3hr order matches W1's
"4D-daily-18hr-15/14 hr-12hr -11hr-7hr-5hr-4hr-3hr-1hr-50 min"; "Only marking
HCS zones on 1hr/50 min" ↔ Img 117; weakest ATT FU zone ↔ Img 112). W1 Task 1
(HTF zones). Terminology (HCS, negation, x3, EST). Task 1 Q&A.

**J. Unresolved:** U3 ("HCS x1 / x2"), U5 (the depth each example needs).

**My Work (`mineGuide`):**
- "One entry per swing move (30 in total)."
- "Each entry: the 3hr+ charts with zones and the forming swing TFS (power POI) labelled per TF, then the 1hr/50 min zones and established TFS POI down to 30 min, and notes on the move's potential."

---

## 7. Technical concept map

| Concept | Week 2 content (source) | Existing coverage | Action |
|---|---|---|---|
| TFS definition | Task 3: "when price establishes a confirmed prevalent direction". Week 2 L15: "contains the signature of the directional energy release (overpowering true profitable move - from utmost premium - contrarian lowest liquidity move)" | Task 3 definition; Terminology "Defined elsewhere"; Rules § 8 | **New Reference page** (Task 3's definition quoted + linked) |
| TFS theory: zones = energy, TFS = release; liquidity → TFS; TFS contains the key concepts; "x=" | L15-19 | none | New page, verbatim (advanced, study instruction) |
| Five TFS categories and ranges | L23-31 | Task 3 tier table (different), Rules § 8 "300 pip + AVG" | New page table + a note on how it differs (§15 C2, C3) |
| "The LTF builds the HTF but HTF commands the LTF" | L33-35, L76 | none | New page + Week key quote |
| Established vs forming (two uses), power POI | L39-43 | Task 3 notes on forming vs established; Worked example 3000 "More aggressive ... 10 min TS forming" | New page. Pointer from Task 3's forming note |
| Scalp and below: liquidity and TS more important; exact swing entries (advanced) | L45-49 | none | New page ("Advanced hints"), labelled not current focus |
| All TFS need a refined zone reaction; TFS + same-TF zone = strongest | L51 | Zones "The more HTF zone ... (later explored with TFS)" | New page + pointer from Zones (closes that thread) |
| Established TFS retest rules | Img 98-106 | none | Task 1 (charts) + summary list on the new page linking to Task 1 |
| Nullified established TFS; HCS as an established retest | L106-116 | none | Task 1 Clarifications (verbatim) + short summary on Reference |
| Both sides established; fixed direction per side | L157-165 | none | New page Q&A |
| Retest proximity (70% fib / wick / 50% of wick) | L169 | Zones "Which part of the wick" (a different question) | New page rule + Task 1 pointer |
| Multi-TF forming swing = swing category | Img 116 | none | Task 2 (chart) + New page one line |
| "30 min + minimum for a true move" | Img 98 | Task 3: 10 min+ backing for entries | Task 1 + new page, with a note (§15 C7) |
| Zones + TFS live application | L118-155 | Zones "Live-time application", "Three levels of use" | New page worked-example section (D2) |
| Refining 7/10/15 min zones for the scalp TS area | Img 129 | Zones "7/10/15 min" level | In the worked example; pointer to Zones |
| Refined zone within the 4hr main zone (advanced) | Img 125, L132-134 | Zones "Priority and refinement" | In the worked example; pointer |
| Body-in-wick zone / broken FU wick / HCS zone | Img 121-124 | Zones four types | Link only |
| FU, HCS, negation, x3, ATT FU, weakest ATT FU | throughout | Terminology, Zones | Link only |
| x3 negation / HCS without full FU closure (advanced) | Img 100 | Terminology x3; Zones weakest ATT FU | New page "advanced rules" + a Terminology x3 pointer (optional) |
| "weakest ATT FU suffices for x3" | Img 127 | Terminology x3 | Include in the worked example |
| LAOL, TS, liquidity calculation | L47, L165 | Terminology, Task 3 | Link only |
| "HCS x1 / x2", "x3 body retest", "advanced entry models", "extraction", "premium" | various | undefined | Keep verbatim, unglossed (§16 terminology) |

**Terminology tracking:**

- **Defined in Week 2:** power POI (the forming TFS: "Presents the power POI ... the premium level for that category"); established TFS ("the confirmed prevalent direction"); the five categories; "HTF TFS = strongest orders = price has already manipulated sufficiently on LTF".
- **Already in Reference, so link:** FU, HCS, negation, x3 / x3 negation, attempted FU / weakest ATT FU, EST, LAOL, TS, zones and zone types.
- **Strongly inferred (label it as inference if used at all):** "extraction" = taking profit from the move ("prepared for TFS extraction", "refined POI for extraction (liquidity and TS build)"). Recommend **no gloss**.
- **Unexplained, keep verbatim:** "HCS x1", "HCS x2", "HCSx2" (W1's U6 "HCS x1" is still open); "x3 body retest" (he says to ignore it); "advanced entry models" / "manipulation entry model"; "utmost premium", "contrarian lowest liquidity move"; "(In a way akin to the x= part of algebraic equation)"; "Fill in the gaps".

---

## 8. Reference impact

### 8.1 New page: `reference/timeframe-strength/`, order 5

Justified: TFS now has a full taught framework (theory, categories, two uses,
rules, Q&A, worked example) that is referenced across standalone Task 3,
Rules § 8, Zones, W1 and both W2 Tasks. Today it exists only as a one-line
definition inside Task 3.

- **Title:** "Timeframe Strength (TFS)". `mentorPrompt`: "Week 2 : Timeframe strength" or the L15 sentence.
- **Sections (proposed):**
  1. `## What TFS is`: Task 3's definition (quoted, linked), then L15 verbatim as a blockquote. Zones → TFS link.
  2. `## The theory (advanced)`: L17-19 verbatim, with his instruction "Try to really understand this passage. Come back to it." Keep it attributed and unexplained ("you are expected to complete - through your own comprehension, research and practice").
  3. `## The five TFS categories`: a table (TF range | category | move), L23-31 verbatim in the caption, and the note on minimal averages / entry models / news days. An italic note on the overlapping boundaries (C1) and on Task 3's earlier tiers (C2/C3).
  4. `## "The LTF builds the HTF but HTF commands the LTF"`: L33-35.
  5. `## Two ways to use TFS`: `### Established` and `### Forming: the power POI` (L41-43). Pointer to Task 3's forming/established note and the 3000 worked example's forming 10 min entry.
  6. `## TFS and zones`: L51 + Zones pointer.
  7. `## The established TFS retest`: rules 1-8 from §6.1, each linking to its Task 1 chart (no duplicated images), then `### When an established TFS is nullified` (L106-116, summary + link to Task 1 for the verbatim answer) and `### How close is a retest?` (L169 table: past 70% fib of the full FU = weak; touching the FU wick = stronger; touching 50% of the FU wick = strongest).
  8. `## Both sides established` (the Img 130 Q&A, question paraphrased, answer verbatim).
  9. `## Lower timeframes and exact entries (advanced hints)`: L45-49, labelled "not our focus yet".
  10. `## Worked example: zones and TFS on current price` (D2). Img 121, 122, 123, 124, 125, 126, 127, 129 with the captions and annotations (§10), plus the Img 128 exchange (paraphrased question, verbatim "A clear explanation well done." and L147) placed after Img 127.
  11. Closing `Related:` line: Task 3, Rules § 8, Zones, Terminology, W2 Tasks 1-2, W1.
- **Images:** 8 in `src/assets/reference/timeframe-strength/`. Chart-page width like Zones.

### 8.2 Extensions (small, pointer-level)

| Page | Insertion point | Change |
|---|---|---|
| Terminology | `## Defined elsewhere`, TFS bullet | Add "Full framework: [Timeframe Strength](/reference/timeframe-strength/)". Add a bullet **Power POI** → TFS page. Add TFS to the Related line. |
| Rules of analysis | § 8 TFS, after the "task 3" line | "Week 2 set out the full TFS framework: categories, established vs forming, the retest method: [Timeframe Strength]." |
| Zones | After L311's quote "...(later explored with TFS)." | Italic: Week 2: "When we have matching TFS with the same TF zone - the strongest true move potential/power POI" → TFS page. Optional: Related line. |
| Zones | "7/10/15 min" level, after "TS and TFS are defined in Task 3..." | Change the pointer to include the TFS page. |
| Worked example 3000 | Related line | Add TFS. |

**Duplication avoided:** Task 1's charts stay on Task 1 only, and Reference
lists the rules and links to them. Task 3's definition stays in Task 3 and is
quoted and linked. Zone types are not re-taught.

---

## 9. Misc impact

**"A lesson that matters" (L92-102)** is the Week's closing reflection: the
proverb "There are many people unknown on earth, but known in the heavens",
success vs wealth ("Do we count someone as successful merely because they are
rich and yet sold their souls?"), "with power comes greater responsibility",
"Every privilege is a trust that must be accounted for", actions judged by
intention "for God's pleasure" (and why not to praise someone to their face),
the duty to maintain that trust "until we expire", and his note that this is
"The closer truth of the 'law of attraction' (which is fundamentally based on
positivity, and faith)". Label: opinion / faith. Attribute it, do not
sanitise, and make no claims of fact.

- **Recommended:** extend **Morality, Rationality & the Opposing Side** with a
  new last section `## Success, privilege and intention (Week 2 closing
  lesson)`. Its theme (correct morality, character) fits best. Keep his
  thanks line as context in one sentence. Add "xd" nowhere.
- Week 2 landing: an "Also from Week 2" pointer to that section (the Week 1
  precedent).
- No new Misc entry (D4).

Nothing else in the batch is Misc.

---

## 10. Complete image map

Legend: E = essential, U = useful, S = source-only. All mentor charts are
XAUUSD FOREXCOM.

| Img | TF | Shows | Source text | Belongs to | Status | Destination (proposed filename) |
|---|---|---|---|---|---|---|
| 98 | 45 min | FU down → established TFS → retest; 30 min+ rule | L56-58 | W2 T1 intro | E | `weeks/2/task-1/est-tfs-fu-retest-45min.jpg` |
| 99 | 3hr | Full retest marking, arrows only | L58 | W2 T1 | E | `.../task-1/3hr-marked.jpg` |
| 100 | 3hr | Same, with the rules (FU retest, x3/HCS advanced) | L58 | W2 T1 | E | `.../task-1/3hr-rules.jpg` |
| 101 | 1hr | Retest/HCS of established TFS, arrows | L58 | W2 T1 | E | `.../task-1/1hr-marked.jpg` |
| 102 | 1hr | Established vs not-established HCS | L58; Q&A L106-116 | W2 T1 | E | `.../task-1/1hr-hcs-established.jpg` |
| 103 | 50 min | Arrows; "Fill in the gaps" | L58 | W2 T1 | E | `.../task-1/50min-marked.jpg` |
| 104 | 50 min zoom | FU retested first → HCS from EST TFS | L58 | W2 T1 | E | `.../task-1/50min-hcs-from-est-tfs.jpg` |
| 105 | 45 min | Arrows | L58 | W2 T1 | U | `.../task-1/45min-marked.jpg` |
| 106 | 30 min | "almost every true move" captured | L58 | W2 T1 | E | `.../task-1/30min-marked.jpg` |
| 107 | 18hr | Power POI start; 18hr zone, HCS x1/x2 | L72-76 | W2 T2 | E | `weeks/2/task-2/18hr.jpg` |
| 108 | 14hr | Superseded draft of 109 | - | W2 T2 | S | raw-only |
| 109 | 14hr | 14hr zones and labels | L72-76 | W2 T2 | E | `.../task-2/14hr.jpg` |
| 110 | 12hr | + established bullish TFS POI retest | L72-76 | W2 T2 | E | `.../task-2/12hr.jpg` |
| 111 | 11hr | + 11hr labels | L72-76 | W2 T2 | E | `.../task-2/11hr.jpg` |
| 112 | 7hr | + 7hr zones, weakest ATT FU zone | L72-76 | W2 T2 | E | `.../task-2/7hr.jpg` |
| 113 | 5hr | + 5hr EST bearish retest, x3 negation | L72-76 | W2 T2 | E | `.../task-2/5hr.jpg` |
| 114 | 4hr | + 4hr labels | L72-76 | W2 T2 | U | `.../task-2/4hr.jpg` |
| 115 | 3hr | + 3hr refined zone | L72-76 | W2 T2 | E | `.../task-2/3hr.jpg` |
| 116 | 3hr | Swing category header (key lesson) | L72-76 | W2 T2 | E | `.../task-2/3hr-swing-category.jpg` |
| 117 | 1hr | Complete 1hr/50 min zones + EST TFS POI to 30 min | L72-76 | W2 T2 | E | `.../task-2/1hr-complete.jpg` |
| 118 | 30 min | Live-time retests of the established 30 min TFS | L72-76 | W2 T2 | E | `.../task-2/30min-live-retests.jpg` |
| 119 | 30 min | An HCS as it forms = EST TFS retest | L72-76; cf. L116 | W2 T2 | E | `.../task-2/30min-hcs-est-retest.jpg` |
| 120 | - | Student question: crop of Img 102, circled FU | L106-116 | W2 T1 Q&A | S | raw-only (question paraphrased) |
| 121 | 4hr | Live: 4hr zone, untested broken FU wicks, FU down bearish TFS EST, retest POI, "already refined" | L118-122 | Ref TFS worked ex. | E | `reference/timeframe-strength/live-4hr.jpg` |
| 122 | 3hr | Live: "Big zone yet to be refined", "3hr Body in wick zone/1hr HCS" | L127 | Ref | E | `.../live-3hr.jpg` |
| 123 | 50 min | Live: three "50 min HCS zone"s | L127 | Ref | E | `.../live-50min-hcs-zones.jpg` |
| 124 | 50 min | "50 min HCS zone including FU wick retest" | L132-134 | Ref | E | `.../live-50min-fu-wick-retest.jpg` |
| 125 | 50 min | "*Advanced* We capture the refined zone by marking out only the area withib our 4hr main zone (TFS is reacting on 4hr also)" | L132-134 | Ref | E | `.../live-50min-refined-advanced.jpg` |
| 126 | 30 min | Basic 30 min retest POIs, sell and buy | L138-140 | Ref | E | `.../live-30min-retest-poi.jpg` |
| 127 | 30 min | Advanced: HCS from retested FU POI, x3 negation retest | L144 | Ref | E | `.../live-30min-advanced.jpg` |
| 128 | - | Student diagram: FU → retest → hcs | L145-147 | Ref Q&A | S | raw-only (paraphrase) |
| 129 | 7 min | Refining 7/10/15 min zones; "every move starts from its zone" | L151-153 | Ref | E | `.../live-7min-refinement.jpg` |
| 130 | 1hr (student) | "What is TFS? Sell or buy?" | L157-165 | Ref Q&A | S | raw-only (paraphrase) |
| 131 | - | Students' circled arrows, "why is that marked?" | L169 | Ref Q&A | S | raw-only (paraphrase) |
| 132 | 3hr (student) | Endorsed model answer | L173 | W2 T1 | U (D1) | cropped → `weeks/2/task-1/model-answer-3hr.jpg`, or raw-only |

**Totals:** 35 = W2 T1 9 (+1 if D1) · W2 T2 12 · Reference TFS 8 · raw-only 5
(+1 if D1 says raw-only): Img 108, 120, 128, 130, 131.

**Live worked-example annotations** (for the page text, in order):

- **121 (4hr)**, caption "Starting from the 4hr only , we have a strong base to follow". "Basic zone marking on the 4hr encapsulates the true move origin". "Untested broken FU wick" (×2, left). Top right: "FU down- bearish TFS EST" → "Retest POI". In the zone: "These moves have reacted from other refinement zones" (two wicks) and "This reaction is already refined" (the last candle, in the darker band).
- **122 (3hr)**. "Big zone yet to be refined" (upper box ~3,389-3,403). "3hr Body in wick zone/1hr HCS" (a green band ~3,373-3,376).
- **123 (50 min)**. Three "50 min HCS zone" labels (upper ~3,386-3,404 green/teal bands and one near 3,424).
- *Caption for 122-123:* "Adding the 3hr and 50 min encapsulates already the true moves of both sides (prepared for TFS extraction)".
- **124 (50 min)**. "50 min HCS zone including FU wick retest" (a lower box ~3,357-3,367).
- **125 (50 min)**. "*Advanced* / We capture the refined zone by marking out only the area withib our 4hr main zone (TFS is reacting on 4hr also)" (a thin band ~3,366-3,368).
- *Caption for 124-125:* "The above is an advanced rule. I would advise beginners to come back to this." "Simply : marking the key refinement in the zone that corresponds with TFS".
- **126 (30 min)**. "30 min bearish TFS- retest POI (only looking for sell in this premium confirmed area of banks orders))". "After the new 30 min bearish FU down - retest POI - only looking for sell in the area". "Same idea - retest of EST Sell TFS". "30 min up - retest POI". "Even by using only the 30 min we capture the gist of many moves". *Caption:* "Basic 30 min retest POI following established TFS." "I note many have been overcomplicating this concept. Simply: you have the buy or sell signal and its refined POI".
- **127 (30 min)**. "Retest establishing TFS potential down". "HCS from FU POI from left that has been retested first (sign of banks orders)". "(weakest ATT FU suffices for x3)". "After x3 negation TFS retest POI". "Retest". "*Advanced* / HCS from FU POI from left respected - more room to enter as forming". *Caption:* "Advanced rule."
- **128 exchange.** A student asks whether it can be looked at as FU → retest → HCS (diagram). "A clear explanation well done." "Same theory as normal TFS (banks orders are in, then entry from premium established retest area)".
- **129 (7 min)**. "Refining 7/10/15 min zones - drawn to confirm the specific scalp TS area that make the larger move/refined entry". "And within these areas more refined LTF zones- but not always necessary to go so low / See how every move starts from its zone". *Captions:* "Finally adding LTF zone refinement." "And we have like that we are able to follow the gist of current price action , prepared with refined POI for extraction (liquidity and TS build)".

---

## 11. Week 1 relationship map

| Week 2 | Week 1 | Relationship | Link |
|---|---|---|---|
| L15 "Zones contain the energy from which all subsequent market reactions occur" | Zones "What zones are"; W1 keyQuote "From it all subsequent price movements occur" | Assumes W1 | TFS page → Zones |
| L51 "matching TFS with the same TF zone - the strongest" | Zones L311 "...(later explored with TFS)" | **Delivers the W1 promise** | Both directions |
| Task 2 "Zones, and power swing TFS forming" | W1 T1 HTF zones (18hr down) | Uses W1 T1 as a skill prerequisite | W2 T2 → W1 T1, Zones HTF sequence |
| Img 107-117 order 18→14→12→11→7→5→4→3→1hr | Zones "HTF marking sequence" | The same sequence | W2 T2 note |
| Img 117 "Complete 1hr/50 min zones" | "Only marking HCS zones on 1hr/50 min" | Consistent | Link |
| Img 112 weakest ATT FU (refined) zone | Zones "Weakest ATT FU zone" | Uses | Link |
| Img 122 body-in-wick; Img 121 broken FU wick; 123-124 HCS zones | Zones four types | Uses | Link |
| Img 129 7/10/15 min refinement | W1 T3 (10/7 min zones); Zones "7/10/15 min" level | Reinforces | Link |
| Img 125 refined zone within the 4hr main zone | Zones "Priority and refinement" | Extends (advanced) | Link |
| Live example "the two concepts we have covered, zones and TFS" | Week 1 as a whole | Combines | TFS page intro → W1 landing |
| "HCS x1" | W1 U6 "HCS x1" (no gloss) | Still unexplained, now also "HCS x2" | Keep unresolved |

No correction to Week 1 content. Week 1 pages need **no edits**. The Weekly
Programme index and the home page list Week 2 automatically.

---

## 12. Existing site relationships

- **Standalone Task 3** (`/tasks/3/assignment/`): the TFS definition, rules
  1-5, the tier table, the forming-vs-established note. Recommend **one italic
  pointer** after the tier table ("(3hr - 5hr - 7hr - 11hr TFS)" line): *"Week
  2 later set out five TFS categories with average ranges, and the two ways TFS
  is used: see [Timeframe Strength](/reference/timeframe-strength/)."* This is
  a genuine clarification. Nothing else in Task 3 changes.
- **Standalone Tasks 1-2:** no change.
- **Rules of analysis § 8, Terminology, Zones, Worked example 3000:** pointers
  per §8.2.
- **Misc Morality:** a new section (§9).
- **PROJECT_STATE threads:** this closes the Zones thread "later explored
  with TFS". It opens "more on this when we speak about TS" (L43: TS is a
  later segment) and "advanced entry models". "x3 entry model" and "x3 by x3"
  stay open. "x3 body retest" is new and unexplained.

---

## 13. Proposed Week 2 site structure

Following the Week 1 architecture exactly. **No template or schema changes.**

```
src/content/weeks/2/week.md
src/content/weeks/2/task-1/task.md
src/content/weeks/2/task-2/task.md
src/assets/weeks/2/task-1/   (9-10 images)
src/assets/weeks/2/task-2/   (12 images)
src/content/reference/timeframe-strength/index.md
src/assets/reference/timeframe-strength/  (8 images)
```

| Route | Page | Progress |
|---|---|---|
| `/tasks/weeks/2/` | Landing: "Week 2: Timeframe Strength", 2 Task rows | - |
| `/tasks/weeks/2/task-1/assignment/` | Established TFS Retest POI | - |
| `/tasks/weeks/2/task-1/mine/` | My Work (empty) | "Not started" (no count) |
| `/tasks/weeks/2/task-2/assignment/` | Swing TFS Forming & Zones | - |
| `/tasks/weeks/2/task-2/mine/` | My Work (empty) | "0 / 30 examples" |

- **2 Assignment pages + 2 My Work pages + 1 landing.** No `mine/` entries (no user work in this source).
- Both assignments use `chart-page` (automatic for Week assignments). The Reference TFS page gets chart treatment like Zones.
- `week.md`: `title: "Timeframe Strength"`; `summary` (Week 2 covers TFS: the release of the zones' energy; five categories; established vs forming; two Tasks: established retests 3hr-30 min, then the complete swing picture with zones); `keyQuote: '"The LTF builds the HTF but HTF commands the LTF".'`; `study: {label: "Timeframe Strength (TFS)", href: "/reference/timeframe-strength/", note: "The theory, the five categories, established vs forming, the retest rules and Q&A, and a live zones + TFS worked example. He asked for the opening passage to be studied and revisited: \"Try to really understand this passage. Come back to it.\""}`.
- `week.md` body: `## Focus for now` (L49 + L76 sentence), `## How the two Tasks fit` (1-2 editorial sentences), `## Also from Week 2` (→ Misc Morality new section).

---

## 14. Proposed page / content changes

| Page | New/existing | Purpose | Source | Images | Links |
|---|---|---|---|---|---|
| `weeks/2/week.md` | New | Landing | L13, L33, L49, L76, L92 | none | TFS ref, Misc Morality, W1 |
| `weeks/2/task-1/task.md` | New | Task 1 assignment: intro line (part of Week 2; not standalone Task 1; study TFS first) → `## The task` (blockquote) → `## At a glance` → `## The rules in the charts` (numbered list §6.1) → `## Worked example: top-down 3hr to 30 min` (`###` 45 min intro, 3hr, 1hr, 50 min, 45 min, 30 min) → `## Clarifications` (Q&A on Img 102 verbatim; retest-proximity pointer; both-sides pointer) → `## An example done correctly` (D1) | L54-68, L106-116, L169, L157-165, L173 | 98-106 (+132) | TFS ref, Terminology, W2 T2 Img 119 |
| `weeks/2/task-2/task.md` | New | Task 2 assignment: intro line → `## The task` (blockquote + L76) → `## At a glance` → `## What "forming" means here` (short, link) → `## Worked example: one swing low, 18hr to 30 min` (`###` per TF, new labels only, cumulative stacks at 3hr) → `## Notes` | L70-90 | 107, 109-119 | TFS ref, Zones HTF sequence, W1 T1, W2 T1 Q&A |
| `reference/timeframe-strength/` | New (order 5) | Full TFS framework (§8.1) | L15-51, L106-116 summary, L118-169 | 121-127, 129 | Task 3, Rules § 8, Zones, Terminology, W2 T1-2, W1 |
| `reference/terminology/` | Existing | TFS pointer, Power POI bullet, Related | - | - | TFS ref |
| `reference/rules-of-analysis/` | Existing | § 8 pointer | - | - | TFS ref |
| `reference/zones/` | Existing | Pointer after "(later explored with TFS)"; 7/10/15 min pointer | L51 | - | TFS ref |
| `reference/worked-example-3000-reversal/` | Existing | Related line | - | - | TFS ref |
| `tasks/3/task.md` (standalone) | Existing | One italic pointer after the tier table | - | - | TFS ref |
| `misc/morality-.../` | Existing | New section "Success, privilege and intention (Week 2 closing lesson)" | L92-102 | - | W2 landing |

Page intros should repeat the Week 1 wording pattern: *"Part of [Week 2:
Timeframe Strength]. Study [Timeframe Strength (TFS)] first... This is Week
2's Task 1, not [standalone Task 1] or [Week 1's Task 1]."*

---

## 15. Duplication / conflict / correction report

**C1: the category boundaries overlap.** "1 min -5 min", "7min -30 min",
"30 min - 3hr", "3hr -7hr", "7hr -4D +": 30 min, 3hr and 7hr each appear in
two categories. There is also a gap between 5 and 7 min. Publish verbatim with
a one-line italic note that the boundaries are as written. Do not resolve.

**C2: Week 2 categories vs standalone Task 3 tiers.** Task 3: 10 min+ scalp,
1hr+ intraday, 3hr+ swing, 11hr+ multi-day. Week 2: 7-30 min scalp, 30 min-3hr
intraday, 3hr-7hr swing, 7hr-4D+ strongest. Intraday starts at 30 min in
Week 2 (matching Img 98 and Img 118 "30 min(minimum intraday)") versus 1hr in
Task 3. The Task 3 tiers are about **true-stop backing** ("Only once we have a
higher timeframe true stop potential (10 min + scalp, 1hr + intraday, 3hr +
swing) we refine lower"). The Week 2 categories are about **TFS category and
move size**. *Recommend:* present Week 2's table as its own and add an italic
note that Task 3's earlier tier table (true-stop backing) uses different
boundaries. Do not merge or edit Task 3's table.

**C3: move sizes.** Rules § 8: "1hr/3hr/4hr/5hr/7hr/11hr backed generally
gives a 300 pip + AVG move". Week 2: intraday 100+, swing 250+, strongest
350+, "minimal average ranges based upon negation / HCS", expanded on news
days. These are different framings, not a contradiction. Mention them together
in the same italic note.

**C4: FU closures below 3hr (genuine tension).** Standalone Task 3 rule 4:
"Only on the 3hr + will we pay attention to confirmed FU closures that indicate
a prevalent direction, on the lower timeframes we are only concerned with HCS +
negation." Week 2 Task 1 establishes TFS from an FU on the **45 min** (Img 98)
and marks "Fu retest of established TFS" down to 1hr/50 min/30 min
(Img 100-106, 118, 126: "After the new 30 min bearish FU down - retest POI").
Week 2 appears to extend FU-established TFS down to 30 min ("Generally 30 min +
(intraday) is our minimum requirement for a true move"), but the mentor does
not say that rule 4 changed. *Recommend:* a neutral italic note on the TFS
page ("Task 3 rule 4 limited FU closures to 3hr+; the Week 2 charts mark
FU-established TFS down to 30 min. He has not said how the two relate."),
logged as a question for the mentor. No edit to Task 3 (U4).

**C5: Img 108 vs Img 109.** Same 14hr chart. 108 reads "14hr negation+HCS"
and 109 "14hr negation+HCSx2". Every later chart (110-119) carries "HCSx2", so
109 is the corrected version. Publish 109 only. 108 stays raw-only.

**C6: Img 98 (45 min) comes before the 3hr charts.** It is the concept intro
(FU → established TFS → retest), not part of the top-down. Keep it first under
its own heading. Not an error.

**C7: "30 min + minimum for a true move" vs Task 3 "10 min + backing".** These
are different things: the 30 min+ minimum is for a *true move* to follow and
capture, and the 10 min+ is for the true-stop backing of an *entry*. Img 98's
footnote itself says scalp TFS "needs more advanced TS/liquidity
understanding". Consistent. Mention it in one sentence on the TFS page.

**C8: Task numbering.** Week 2 Task 1/2 ≠ standalone Task 1/2 ≠ W1 Task 1/2.
Handled by the page intros.

**C9: Non-standard TFs.** Task 1 uses 50 and 45 min, Task 2 uses 18/14/12/11/7/5hr.
There is no standard-TF fallback this Week (W1 T3 had one; W1 U3 asked about
Tasks 1-2 and got no answer). Keep it unresolved (U2).

**C10: Repeated instructions.** "focus is intraday and above" (L49, L76) and
the LTF/HTF statement (L33, L76). Consolidate them on the landing and the TFS
page, and keep L76 in Task 2 verbatim.

**C11: Retest HCS "as forms" vs established.** L116 and Img 119 say the same
thing. Not a conflict. Cross-link them.

### 15.4 Typos (quotes stay verbatim here; proposed spelling-only fixes when published, D3)

energinerring → engineering · utiliazition → utilization · "is is" → "is" ·
utalize → utilize · conjcture → conjunction · antipcating → anticipating ·
maintaince → maintenance · preceeded → preceded · calauction → calculation ·
stongest → strongest · Chart text: "havealready" → "have already", "tis HCS" →
"this HCS", "withib" → "within", "utill" → "until", "zonefalls" → "zone falls",
"doesnt" → "doesn't". Keep grammar, punctuation spacing (" , "), the
capitalisation and "xd" as is. Drop "xd" from the published Misc text; it is
a chat mannerism.

---

## 16. Raw-only material

| Item | Lines | Reason |
|---|---|---|
| The user's notes "(my note: ...)" | L112, L122, L144, L145 | Linking aids. Their content is resolved in §1.1 |
| Img 108 | L79 | A superseded duplicate of 109 |
| Img 120, 128, 130, 131 | L104, L145, L155, L167 | Student screenshots (names, avatars). The questions are paraphrased anonymously and the answers kept |
| Img 132 (if D1 = raw-only) | L171 | Student screenshot |
| "xd" (×2) | L94, L102 | Chat mannerism |
| Student names (Moza, Robert, Mr Papier, Gen C. minja, Mr. rule!) | images | Privacy |

Nothing substantive is dropped. Every mentor sentence has a destination.

---

## 17. Genuine ambiguities

**Decisions needed (each with a recommendation):**

- **D1: Img 132 (a student's chart the mentor endorses as "An example of the exercise done correctly").**
  (a) Publish on W2 Task 1, **cropped to the chart only** (drop the name, avatar, timestamp and the "freigegeben für TradingView" share line), with his verbatim comment, "(Ignore the x3 body retest part)", and the transcribed labels. (b) Keep it raw-only and describe it in text.
  **Recommend (a):** it is the only model answer for the Task, and the mentor put it forward as one.
- **D2: where the live zones + TFS worked example goes (Img 121-129, 8 charts).**
  (a) A section at the end of the new TFS Reference page. (b) A separate Reference page ("Worked Example: Zones + TFS on Live Price", order 6).
  **Recommend (a):** the TFS page otherwise has no charts, and the example is explicitly "basic application" of the concepts on that page. (b) is fine if you prefer shorter pages, as with the 3000 example.
- **D3: typos in published quotes** (§15.4).
  (a) Fix spelling-only typos (the Task 3 precedent). (b) Publish exactly as typed.
  **Recommend (a).**
- **D4: the closing lesson.**
  (a) A new section in Misc *Morality, Rationality & the Opposing Side*. (b) A section in *Trading Psychology*. (c) A new Misc entry.
  **Recommend (a).**
- **D5: C4 (FU closures below 3hr).**
  (a) A neutral italic note on the TFS page, logged for the mentor. (b) Say nothing.
  **Recommend (a).**

**Unresolved: show as written, don't infer** (implementation may not reopen
raw/images for these except U5):

- **U1:** The instrument is not stated. His charts are XAUUSD (the same as W1 U1).
- **U2:** No standard-TF alternative for 50/45 min or 18/14/12/11/7/5hr.
- **U3:** "HCS x1", "HCS x2", "HCSx2", "x3 body retest", "advanced entry models": undefined.
- **U4:** C4 (FU closures below 3hr).
- **U5:** How far down each Task 2 example must go. The written instruction says 3hr+. His example completes to 30 min (Img 117 header). Present the instruction as the requirement and the 1hr-30 min part as "his example continues..." (the At a glance row in §6.2).
- **U6 (minor, no decision):** Whether L147 answers Img 128 or captions Img 127 (§1.1). Place it after the Img 128 paraphrase. The meaning is the same either way.

---

## 18. Recommended implementation order

1. Copy the images (`cp -p` + `cmp`) into `src/assets/weeks/2/task-1/`, `task-2/` and `src/assets/reference/timeframe-strength/` with the §10 filenames. Crop Img 132 only if D1 = (a), and save the crop as a new file; never alter `sources/`.
2. `reference/timeframe-strength/index.md` (order 5). Other pages link to it.
3. `weeks/2/week.md`, then `task-1/task.md`, then `task-2/task.md`.
4. Pointer extensions: Terminology, Rules § 8, Zones (×2), Worked example 3000 Related, standalone Task 3 (one italic line).
5. Misc Morality new section.
6. Clean build (`rm -rf .astro node_modules/.astro dist`), tests, `check-dist.mjs`, preview (desktop + 375px, lightbox, anchors, the Week 2 landing rows, My Work "Not started" / "0 / 30 examples").
7. PROJECT_STATE update (Week 2 done; threads closed/opened per §12; U1-U5).

---

## 19. Approval summary

- **Formal Week 2 tasks: 2.** Mentor labels "Task 1:" (the retest of the established TFS POI: 2 months, 3hr-30 min) and "Task 2:" (the complete picture: zones + swing TFS forming + established TFS; 30 swing examples, 3hr+).
- **Structure:** `/tasks/weeks/2/` landing + `task-1/{assignment,mine}` + `task-2/{assignment,mine}`. That is **2 Assignment + 2 My Work** pages. Progress: Task 1 "Not started" (no count), Task 2 "0 / 30 examples". No template changes.
- **Week-level material:** the title "Timeframe Strength", the key quote "The LTF builds the HTF but HTF commands the LTF", study-first → the TFS Reference page (with his "come back to it" instruction), "Focus for now" (intraday and swing first), how the two Tasks fit, and "Also from Week 2" → Misc. No deadline or pacing exists, so none is shown.
- **Reference:** **new** `timeframe-strength/` (order 5: theory, 5 categories, the LTF/HTF statement, established vs forming, the zone rule, the retest rules, the nullification / both-sides / proximity Q&A, advanced hints, the live worked example). **Pointer extensions** to Terminology, Rules § 8, Zones, Worked example 3000, and one italic line in standalone Task 3.
- **Misc:** extend *Morality* with the Week 2 closing lesson. No new entry.
- **Week 1 links:** Zones (energy ↔ TFS; closes "later explored with TFS"; HTF sequence; zone types; 7/10/15 min level), W1 T1 (HTF zones, the Task 2 prerequisite), W1 T3 (7/10 min refinement ↔ Img 129). No Week 1 edits.
- **Images: 35.** W2 T1 9 (+ Img 132 cropped), W2 T2 12, Reference 8. Raw-only 5: Img 108 (the superseded duplicate) and student screenshots 120, 128, 130 and 131.
- **Raw-only:** the user's notes, student screenshots and names, "xd".
- **Unresolved (shown as such):** U1 instrument, U2 non-standard TFs, U3 "HCS x1/x2", "x3 body retest", entry models, U4 FU closures below 3hr, U5 Task 2 depth.
- **Decisions:** D1 publish Img 132 cropped (**a**), D2 live example on the TFS page (**a**), D3 fix spelling-only typos (**a**), D4 Misc Morality section (**a**), D5 a neutral note on C4 (**a**).

**If you agree with every recommendation, "approve all recommendations" is
enough.** Next: `/mentor-implement sources/tasks/2026-09-30-week-2/ANALYSIS.md`
in a fresh session.

---

## 20. Approved decisions (AUTHORITATIVE, user-approved 2026-09-30)

This section overrides anything earlier in this file. `/mentor-implement`
follows this section first and uses §1-19 for detail.

### 20.1 Architecture

- Week 2 has **exactly 2 formal Tasks**. Use the established Week architecture with no template or schema changes:
  - `/tasks/weeks/2/`: the landing page ("Week 2: Timeframe Strength"). `week.md` per §13. There is no pacing, deadline or "After Week 2" section.
  - `/tasks/weeks/2/task-1/assignment/` + `/mine/`. Title "Established TFS Retest POI (2 months, 3hr–30 min)". **No `target`**, so My Work shows **"Not started"**.
  - `/tasks/weeks/2/task-2/assignment/` + `/mine/`. Title "Swing TFS Forming & Zones (30 examples)". `target: 30`, `unit: "examples"`, so My Work shows **"0 / 30 examples"**.
  - No `mine/` entries. Fabricate no user work.
- **New Reference page** `src/content/reference/timeframe-strength/index.md`, title "Timeframe Strength (TFS)", order 5, sections per §8.1.
- **Do not edit Week 1** just to add links.

### 20.2 Decisions D1-D5 (final)

- **D1 (Img 132):** publish on W2 Task 1 under "An example done correctly", as a **derived cropped copy** (the chart only: no student name, avatar, timestamp or share line), saved as `src/assets/weeks/2/task-1/model-answer-3hr.jpg`. The original `sources/tasks/2026-09-30-week-2/images/image 132.jpg` stays **untouched**. Crop from a copy and never write to `sources/`. Keep the mentor's text verbatim: "An example of the exercise done correctly. (Ignore the x3 body retest part). Observe the flow of buy and sell TFS signals". Transcribe the chart labels. Don't name the student.
- **D2 (live worked example, Img 121-127, 129):** a section `## Worked example: zones and TFS on current price` at the end of the TFS Reference page, before Related. **No separate Reference page.** Place the Img 128 exchange (question paraphrased, answer verbatim) after Img 127.
- **D3 (spelling):** `raw.md` stays exact.
  - On the site, **spelling-only** fixes from §15.4 are allowed in editorial prose, paraphrase and chart-annotation transcriptions, and only where meaning clearly cannot change.
  - Anything **presented as an explicitly verbatim quotation** (`>` blockquotes: formal task wording, definitions, rules, the verbatim Q&A answers, and text introduced as "in full" / "verbatim") keeps the **original spelling**. Do not silently change it.
  - Never "correct" mentor terminology or technical wording (e.g. EST, ATT FU, HCSx2, x3, "power POI", "premium", "extraction", "Fill in the gaps").
- **D4 (closing lesson, L92-102):** a new last section on the existing Misc *Morality, Rationality & the Opposing Side*, titled "Success, privilege and intention (Week 2 closing lesson)". Attributed as his view, not sanitised, no "xd". **No new Misc entry.** Point to it from the Week 2 landing ("Also from Week 2").
- **D5 (FU closures below 3hr):** a short neutral italic note on the TFS page, in the established-TFS-retest section. It should say three things: standalone Task 3 (rule 4) states FU closures show a prevalent direction only on the 3hr and above; the Week 2 examples use FU closures down to 45 min / 30 min (Img 98, 100-106, 118, 126); and the supplied source does not explain how these statements fit together. **Invent no reconciliation.**

### 20.3 Other approved points

- The Week 2 TFS categories (L23-31) and standalone Task 3's tier table are **both preserved as written**. Add a concise italic note that their boundaries differ, and that the Week 2 boundaries overlap (30 min, 3hr, 7hr). Do not harmonise them, and do not edit Task 3's table.
- **Pointer-level extensions only:** Terminology (TFS pointer under Defined elsewhere, a Power POI bullet, Related), Rules of analysis § 8 (pointer), Zones (after "(later explored with TFS)" and at the 7/10/15 min pointer), Worked example 3000 (Related), standalone Task 3 (one italic line after the tier table / "(3hr - 5hr - 7hr - 11hr TFS)" line).
- **Source-only images:** Img 108 (the superseded draft of 109) and the student screenshots Img 120, 128, 130, 131. Paraphrase the student questions anonymously and keep the mentor's answers verbatim.
- **Instrument stays unspecified** on the site, even though the examples are XAUUSD.
- **Unresolved, shown as unresolved (no gloss, no inference):** the non-standard-timeframe fallback (U2); "HCS x1 / x2 / HCSx2", "x3 body retest", "advanced entry models" (U3); FU closures below 3hr (U4 = D5 note); the lower-TF depth each Task 2 example needs (U5: the written requirement is "3hr +"; the 1hr-30 min part is shown as "his example continues...").

### 20.4 Final image allocation (35)

| Destination | Images | Count |
|---|---|---|
| W2 Task 1 (`src/assets/weeks/2/task-1/`) | 98, 99, 100, 101, 102, 103, 104, 105, 106 + 132 (derived crop) | 10 |
| W2 Task 2 (`src/assets/weeks/2/task-2/`) | 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119 | 12 |
| Reference TFS (`src/assets/reference/timeframe-strength/`) | 121, 122, 123, 124, 125, 126, 127, 129 | 8 |
| Source-only | 108, 120, 128, 130, 131 | 5 |

Filenames per §10. Copy with `cp -p` and verify with `cmp` (except the Img 132 crop, which is a new derived file).
