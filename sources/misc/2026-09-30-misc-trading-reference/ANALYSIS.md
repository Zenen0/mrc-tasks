# Analysis - Misc batch 2026-09-30 (trading reference)

Claude's interpretation of `raw.md` + `images/`. `raw.md` is the untouched
source (only the 19 standalone image-reference lines were linked by the import
script; every other line is byte-identical to the user's paste).

Conventions used in this file:

- `> quote` = mentor wording, **verbatim** (typos kept inside quotes; the
  obvious ones are listed in §1.6 with the spelling to publish).
- *Analyst note* = Claude's observation or inference, not mentor teaching, not
  for publication unless §13 approves it.
- `L##` = line number in `raw.md`. `Img N` = `images/misc N.jpg`.
- Chart annotations are transcribed in "double quotes" exactly as drawn.
- Epistemic labels follow the analysis guide: Instruction, Definition / rule,
  Warning, Teaching / interpretation, Opinion, Forecast / speculation,
  Documented / established, Disputed / unsupported.

Although this batch sits under `sources/misc/`, the folder is only an intake
location. Nothing in it is a formal numbered Task (no deliverable, count or
deadline is set anywhere in the source). The destination of each part is
decided on meaning, in §6-§7.

---

## 1. Source status

### 1.1 Package verification

| Check | Result |
|---|---|
| raw.md | 177 lines. Header L1-L7, content L9-L176. Starts mid-context with a glossary (no greeting/intro line) and ends on a chart comment (L176). No sign of truncation inside any paragraph. |
| Images referenced | 21: `misc 18` - `misc 38` (continuous, no gaps, no repeats). The "~38 images" estimate in the request was the highest label number, not the count: this batch holds **21** images. `misc 1-17` belong to the earlier Misc batches (`misc image 1-17`). |
| Imported by script | 19 standalone lines (L21-L30, L137-L142, L152-L153, L174), each copied from `~/Downloads/misc N.jpg` and byte-verified; only those lines were rewritten to links. |
| Imported separately | `misc 28` (L32) and `misc 37` (L166) sit on lines that also carry the user's own notes, so the script correctly did not treat them as reference lines. Both copied from `~/Downloads` with `cp -p` and verified byte-identical with `cmp`. Their raw lines were **not** edited (they stay as the user wrote them). |
| Missing / ambiguous / stale images | None. All 21 Downloads files were modified 2026-09-30 and none matches any previously imported image. |
| Tooling change | `mentor-source.mjs` only recognised labels containing the word "image". Its three label patterns were widened to accept `misc N` as well (`image` or `misc` keyword). Behaviour for all earlier label styles is unchanged. |
| Links | L160 "The free streaming link is shared below" and L162 (user's note) "VIP stream link": **neither link was supplied.** Not needed (see §5.4, §13). |
| Non-mentor text | L32 note, L155, L162, L164, L166 note are the user's own words (marked "my note" or plainly conversational). Img 37 is a Discord screenshot of **another student's** question. Img 28 is a Google search-result snippet (see §4.1). |

### 1.2 Source structure (as pasted)

| Block | Lines | Content |
|---|---|---|
| A | L9-L30 | Glossary: 6 one-line definitions (FU, Negation, HCS, x3, LAOL, Core liquidity) + Img 18-27, ten annotated definition charts |
| A' | L32 | Img 28 (homograph note), per the user "links to misc 18" |
| B | L34-L113 | The psychology post ("psychology intensive"), including the worldview "underlying causes", supplements and a closing line |
| C | L116-L150 | "Practical rules related to analysis and the extraction processes": 13 bullet rules, with Img 29-34 inserted after the "Zones" bullet |
| C' | L152-L153 | Img 35-36 (1-min execution), posted after the rules' closing paragraph |
| D | L155-L162 | Documentary recommendation (+ user's notes) |
| E | L164-L176 | Q&A: Img 37 (a student's question), mentor's answer, Img 38 |

### 1.3 Chronology and dating (all inferred, from chart evidence)

- **Block C/C'/E were written on one day, with XAUUSD trading at ~3,023.**
  Every worked-example chart (Img 29, 32, 33, 34, 36) shows the live last
  price `C3,023.61`; Img 30/31 show `3,011.92` (earlier the same session);
  Img 38 (a phone chart) shows `3022.94`. Img 37 says the student asked
  "Today at 15:53", forwarding the mentor's own chart from #reflection posted
  at 14:41. So the rules post and the Q&A are same-day.
  Gold first traded above $3,000 in mid-March 2025 (documented), and the
  charts show a drop from ~3,038-3,046 back to 2,999.56 and a reversal. This
  is **consistent with roughly late March 2025**. Inferred, not verified; do
  not publish a date as fact.
- **Block A (glossary charts) was captured at a different time,** with gold
  at ~2,648-2,656 (Img 18, 20, 21, 27 all show the identical live OHLC
  `O2,650.62 H2,650.90 L2,647.30 C2,648.88`; Img 22-26 show `2,653.29...`).
  That price range fits roughly Nov 2024-Jan 2025 (inferred). So the glossary
  was probably made earlier than the rules post, or at least its charts were.
  The paste order (glossary first) is still the right teaching order and
  is kept.
- **Block B precedes C** by the mentor's own words (L111: "In the next
  segment, we will go over practical rules related to analysis. This base was
  more important to set first.").
- All of this post-dates Task 3: the rules cite "task 1", "task 2", "task 3"
  (L124, L128, L132).

### 1.4 Text-image relationships (resolved)

- Img 18-27 illustrate the glossary above them (L9-L19), in the same order as
  the definitions: FU (18) -> attempted FU (19, 20) -> Negation (21) -> HCS
  (22, 23) -> x3 (24-27). LAOL and Core liquidity have no glossary chart;
  they are illustrated by the worked example (Img 29-35).
- Img 29-34 were posted after the "Zones" bullet (L134) but illustrate the
  preceding rules **in bullet order**: LAOL (Img 29) -> TS/POI + trail (30,
  31) -> TFS, 10 min TS and core target (32) -> TFS confirmation on the 4hr
  (33) -> zones (34). They are one continuous worked example (same
  instrument, same levels: TS 2,999.56, LAOL ~3,000.4-3,000.8, Trail 3,002.39,
  Core ~3,021.65-3,022.06). Img 34 is titled by the mentor "Backtest
  sequence".
- Img 35-36 (1-min) are the execution end of the same example and illustrate
  the "final entries" bullet (L144).
- Img 37 forwards Img 33 (identical annotations, confirmed visually). The
  user's note at L166 ("it links to certain misc images") is resolved: **it is
  Img 33.**
- Img 38 belongs to the mentor's answer (L168-L176) and shows the "30 min
  doji" of L176.

### 1.5 Genuine source ambiguities (detail in §13)

1. Img 28 (homograph "Close"/"close"): who posted it, and which sense of
   "close" in Img 18 it clarifies.
2. The direction of the student's question in Img 37.
3. Img 29's timeframe is not visible (header cropped). Candle density
   suggests a low timeframe (probably 1 min). Levels match Img 30-32.
4. Whether the recommended documentary is the film *2073* (named only in the
   user's note, L162).

### 1.6 Typos inside mentor text / annotations (publish corrected)

"an Complete FU" -> "a complete FU" (Img 18); "un manipulated" ->
"unmanipulated" (Img 19); "didnt" -> "didn't" (Img 29); "LAOl" -> "LAOL"
(Img 32-34); "liqudity"/"liqudidty" -> "liquidity" (Img 33, 36); "EST" is his
abbreviation for "established" (keep). In raw text: L99 "xd" dropped;
L95 "to best the probabilities in your favor" kept verbatim (meaning is
clear enough; do not guess a replacement).

---

## 2. Executive overview

This batch is the densest **technical** material received outside the Tasks,
plus one major **psychology** post. It contains:

1. **A terminology set with definitive charts.** FU, attempted FU (ATT FU,
   two forms), Negation, HCS (and HCS + negation), x3 (x3 negation, pure x3
   negation, self-negating x3), LAOL, Core liquidity. Several of these terms
   are used in Tasks 1-3 without definition. Task 3's implementation
   explicitly left "ATT FU, LAOL, x3" undefined, and Task 1 deferred "the
   attempted FU - a subject of later discussion". This batch delivers them.
2. **"Practical rules related to analysis and the extraction processes".**
   Thirteen rules that the mentor calls "The base of your trading plan and
   confident profitable extraction". They tie Tasks 1, 2 and 3 together
   (he cites each task by name) and add new rules on leverage, zones, the
   final entry checklist, targets (core + trail + LAOL) and refreshing the
   liquidity calculation each timing.
3. **A complete worked "backtest sequence"** on XAUUSD, 4hr -> 30m -> 10m ->
   1m (8 charts), showing the rules applied from HTF context to 1-min entries,
   including an "aggressive" entry on a *forming* 10 min TS versus the
   standard entry after it is *established*.
4. **A Q&A** in which a student challenges the worked example and the mentor
   explains why the area was *not* a valid POI (no 10 min TS, no timing, x3
   self negation weak by default, liquidity/POI not yet met).
5. **A trading-psychology post**: why trading is psychology-intensive (chess
   vs markets), practical mindset steps (think in RR maths, don't trade every
   day, backtest more than you trade), and "underlying causes" (money,
   media, society, governments, entertainment, habits, maturity,
   spirituality), plus supplements.
6. **A documentary recommendation** (worldview).

Why it matters: items 1-4 are the mentor's reusable technical framework,
taught but not assigned. They are the reference the Tasks keep pointing to.
Item 5 is the fullest statement of his trading psychology and expands,
almost term for term, the list of distortions in the existing Rationality
entry ("society, environment, media, negative habits and targeted
distractions").

---

## 3. Topic cluster map

| # | Cluster | Lines / images | Class | Destination (see §6) |
|---|---|---|---|---|
| T1 | Terminology: FU family, x3, LAOL, core liquidity | L9-L30, Img 18-27, (Img 28) | Technical trading | **Trading Reference** - new page "Terminology" |
| T2 | Practical rules of analysis & extraction | L116-L150 | Technical trading (+ execution psychology) | **Trading Reference** - new page "Rules of Analysis & Extraction" |
| T3 | Worked backtest sequence (XAUUSD 4hr -> 1m) | Img 29-36 | Technical trading | **Trading Reference** - new page "Worked Example" |
| T4 | Q&A: why that area was not a POI | L166-L176, Img 37-38 | Technical trading | Section on the T3 page |
| P1 | Why trading is psychology-intensive; chess analogy | L34-L58 | Psychology | **Misc** - new entry "Trading Psychology" |
| P2 | Practical mindset steps (RR maths, rest, backtest more) | L61-L71 | Psychology tied to execution | Same Misc entry, cross-linked to T2 and Task 3 |
| P3 | Underlying causes: manipulation, money, media, society, governments, entertainment, habits, maturity, spirituality | L73-L101 | Psychology + worldview (opinion) | Same Misc entry, attributed; cross-links to Worldview / Morality / Rationality |
| P4 | Supplements | L105-L109 | Health opinion | Same Misc entry with caveat, or raw-only (**decision 2**) |
| P5 | Closing / future update | L111-L113 | Context | Same Misc entry |
| W1 | Documentary recommendation | L156-L160 | Worldview | **Misc** - extend "Mr Casino's Worldview" |
| N | User notes, Discord screenshot, search snippet, links | L32 note, L155, L162, L164, L166 note; Img 28, 37 | Non-mentor | Raw-only (content of Img 28/37 carried as text, §12) |

Relationships:

- T1 is prerequisite vocabulary for T2-T4 and for Tasks 1-3.
- T2 is the rule layer. It cites Task 1 (liquidity calculation), Task 2 (LAOL
  targets, top-down) and Task 3 (TFS, 10 min TS, timing, RR).
- T3/T4 apply T2 on a real chart. Img 34's "Backtest sequence" annotation is
  a compressed form of the final-entry rule (L144).
- P2 repeats in psychological terms what T2 says technically (RR focus,
  detachment, backtesting). The execution-psychology bullets L120, L146 and
  L148 are inside the rules and stay there.
- P3 connects to the existing worldview/morality entries but is presented by
  the mentor as part of psychology, so it stays with P1-P2.

---

## 4. Technical trading knowledge

### 4.1 Terminology (T1)

The mentor's one-line definitions (all **Definition / rule**, quote exactly):

> FU = Refers to candle of manipulation - the macro level banks get in (L9)

> Negation = "Negates" (Look up definition) previous FU manipulation - more powerful than the sole FU (L11)

> HCS = When a new FU forms retesting the other - Base refined entry anticipation (L13)

> x3 = Refers to that candle which has both FU and negation aspects embedded at a macro level within the single candle (L15)

> LAOL = Last area of liquidity (within reversal POI) (L17)

> Core liquidity = liquidity which has to be taken or manipulated greatly first (Swing hint always present) (L19)

Expansions from the rules (L126, L128), same status:

> Core liquidity = most important (obvious/concentrated) liquidity that confirms direction for confident entry—that which you would like to hold minimum until. Something that finalizes bias.

> LAOL = refined liquidity area within POI (TS/TFS) where we expect reversal—our extended major targets. Price moves from LAOL to LAOL. We have scalp, intraday, and swing LAOL targets in this regard (we determine depending on TFS strength, core targets opposite, and new POI/TS respected - task 2).

Notes on the terms:

- **HCS is never expanded** as an abbreviation anywhere on the site or in
  this batch. Keep "HCS" unexpanded; do not invent.
- **ATT FU = "attempted FU".** Confirmed: Img 19 and Img 20 say "attempted
  FU" in full, and Img 21/23 label the same thing "ATT FU". Task 3 rule 5
  already describes it ("if the first candle after doesn't make a complete FU
  wick but reacts - ATT FU").
- The two Core liquidity definitions are complementary, not conflicting:
  the obvious, concentrated liquidity that must be taken or manipulated
  first, that finalises bias, and that is the **minimum hold target** once
  direction is confirmed. Img 32 calls it "Core Breakout Liquidity - minimum
  target after LAOL opposite/ POI respected".
- "(Look up definition)" in L11 is his instruction to look up the English
  word "negate". Keep it.
- **POI, TS, TFS, doji, big wick to fill** are used but not defined here.
  They are defined or used on existing pages: TS = true stop (Task 3), TFS
  definition "when price establishes a confirmed prevalent direction" (Task
  3), doji rule (Task 1: "Must be within a previous wick and a non FU high or
  low"). The glossary should point to those, quoting the existing wording,
  not coin new definitions. "POI" is never expanded by the mentor. *Analyst
  note:* it is the standard abbreviation "point of interest", but that is
  not his wording; publish only as "POI" or, if expanded, mark the expansion
  as editorial.
- **"Trail" / "trail of liquidity"** (L144 "core + trail + LAOL to target";
  Img 27 "A future trail of liquidity especially on the LTF"; Img 29 "we have
  a trail of liquidity onto this point"; Img 30-32 line labelled "Trail").
  Used, not defined. From the charts: a series of liquidity left behind
  during a move, leading onto a level. Include as a "used as" entry, flagged
  as inferred from usage.
- **"£"** on charts (Img 33, 35, 36) marks liquidity levels. *Analyst note,*
  inferred from its placement on doji / wick-to-fill / retail liquidity
  lines. Do not publish as a definition. Mention it at most as "£ marks on
  his charts sit on liquidity levels".
- **"EST"** = established (Img 32, 34, 35, 36; contrasts with "forming").

#### Definition charts (Img 18-27)

All are XAUUSD (Gold Spot / U.S. Dollar, FOREXCOM, TradingView) at ~2,600-2,675.

**Img 18 - FU (1hr).** Two annotated candles.
- A long green candle whose lower wick dips just below the prior red
  candle's low (short red line, level 2,637.09 / body open 2,638.32):
  "This is an Complete FU", "We close within the last candle open/close".
- Later, a small candle after a big red candle, whose lower wick dips below
  the red candle's close (short red line): "FU criteria met".
- Bottom note: "We are interested only in the wick range (or close) and the
  information of true direction it tells".
- *Analyst note:* the charts show the FU as a wick that runs beyond the
  previous candle's level and the candle then closing back. The exact
  mechanical criterion ("close within the last candle open/close") is his
  wording and should be published as written. Do not restate it as a
  tighter rule than he gives.

**Img 28 - homograph note** (per the user, linked to Img 18). A search-result
snippet: "Close" and "close" are homographs, spelled the same, different
meanings and pronunciations. It clarifies the "(or close)" in Img 18:
*close* as in "near" (klohs) versus *close* as in a candle close (klohz).
*Analyst reading:* the note only makes sense if the non-trading sense
("near") was meant, i.e. "the wick range (or near it)". Img 26 supports this
("not quite met the wick but near enough in the moment"). But the image does
not say which sense, so this is unresolved (§13 #5).

**Img 19 - attempted FU, form 1 (1hr).** A small candle at a low after a red
candle, marked with lines 2,647.08 / 2,645.37.
- "Price does not make a new high/low"
- "Still counted as FU retest POI"
- "This is one form of "attempted FU" It makes the distinction between a un
  manipulated doji (Major liquidity)"
- Meaning: an attempted FU that does not make a new high/low is still valid
  as an FU-retest POI, and this is what separates it from an unmanipulated
  doji (major liquidity, Task 1). This delivers Task 1's deferred point
  ("The doji we Mark is separate from the attempted FU - a subject of later
  discussion").

**Img 20 - attempted FU, form 2 (1hr).**
- "This is the other form of attempted FU - A weaker form of manipulation
  and minor liquidity (consider alongside bias)"
- ""The candle starts from where an FU would form""
- "See how we did not make a wick closure within the last candle open/close"
- Meaning: form 2 is weaker manipulation and only minor liquidity, to be
  weighed with bias.

**Img 21 - Negation (1hr).** At a local top: "ATT FU" on a candle's lower
wick; the following red candle's upper wick labelled "Negation", then price
falls.
- ""Negates" last manipulation - base concept alongside FU retest and
  branches"
- "Stronger than FU alone (2 manipulations)"

**Img 22 - HCS (30m).** A big green candle whose lower wick retests an
earlier FU wick (levels 2,633.37 / 2,631.21):
- "HCS - price forms a new FU retesting last FU wick"

**Img 23 - HCS + negation (30m, same chart as Img 22).** "ATT FU" at an upper
wick two candles earlier.
- "Negations can occur up to two candles after"
- "Thus this is a HCS + negation"
- Same rule as Task 3 rule 5 ("A negation can be counted two candles after
  an FU"). Link to it; don't duplicate.

**Img 24 - x3 and x3 negation (1hr).** A highlighted green candle with long
wicks on both sides:
- "The candle we refer to as "x3""
- The candle two after it, at the top: "x3 negation"
- "Its negation does not have to close as a full FU" ... "(the only
  instance)"
- **Rule:** an x3's negation is the one case where the negation need not
  close as a full FU.

**Img 25 - self-negating x3 vs pure x3 negation (30m).**
- "Self negating x3" at a candle whose top is immediately negated by the
  next large red candle.
- "Pure x3 negation" at the upper wick of the candle after a highlighted x3
  candle, followed by the decline.

**Img 26 - same chart as Img 25.**
- "See the TS respected" at the later top, which stops just under the line
  "Self negating x3 TS" (2,659.65).
- "Can be considered HCS ( not quite met the wick but near enough in the
  moment)"
- "X3 confirmations take prevalence"
- Meaning: the self-negating x3's high acts as the TS; a retest near it
  counts as HCS; x3 confirmations outrank others.

**Img 27 - x3 self negating (1hr).**
- "This is a x3 self negating" (a red candle's long lower wick at the low)
- "It is not as strong as a x3 negation (watch if other TF has this) - but
  important manipulation regardless"
- "A future trail of liquidity especially on the LTF"
- "The candle after takes TS placement"
- **Rules:** x3 self negating < x3 negation in strength; check other TFs; the
  TS goes on the candle after. Consistent with the Q&A (L170: "X3 self
  negation is weaker by default").

Strength ordering stated in the source (publish as a small table):

| Stronger | Weaker | Source |
|---|---|---|
| Negation (2 manipulations) | FU alone | L11, Img 21 |
| x3 negation | x3 self negating | Img 27 |
| x3 confirmations | other confirmations ("take prevalence") | Img 26 |
| Attempted FU form 1 (valid FU retest POI) | Attempted FU form 2 (weaker, minor liquidity) | Img 19-20 (*analyst reading* of "the other form ... A weaker form") |

### 4.2 Practical rules of analysis and extraction (T2)

The mentor's heading (L116): "Practical rules related to analysis and the
extraction processes". These are formal rules, so **publish them close to
verbatim**, one per item. Labels: Definition / rule unless noted.

1. **Leverage** (L118): "You do not need more than 1:200 leverage to
   correctly utilize the system. In fact, it is not recommended. Learn first
   to maximize quality." (Rule + Warning.) Complements Task 3's leverage
   talking point.
2. **Pure price action, detached** (L120): "Make your decisions based on
   pure price action from the lens of liquidity manipulation and mechanical
   TFS. You only improve this via a collected mind, backtesting, and its
   erasure of doubt. Learn to detach emotions—something that doesn't affect
   how price moves or increases your extraction (make it like the closed
   ended game of chess—you know all the rules)." Links to the chess analogy
   in the psychology entry.
3. **Wait for the 10/15 min TS** (L122): "Follow, and wait for the
   established 10/15 min TS (HCS or negation) from POI. The average minimum
   manipulation to start the true move. This rule will have you know when to
   take a trade or watch price gathering liquidity details for that moment.
   Stick to it." Matches Task 3 rules 2-3 ("No 10 min + HCS / negation
   backing = no trade").
4. **Targets first, manipulation first** (L124): "Know your liquidity
   targets before any entry. Not only that, account for liquidity
   manipulation first before the true move (early retail liquidity will be
   manipulated first). A full liquidity calculation (trust its fact - task
   1)." Illustrated by Img 35-36 ("Retail liquidity first manipulated",
   "Early retail buys taken").
5. **Core liquidity** (L126). See §4.1.
6. **LAOL** (L128). See §4.1. "Price moves from LAOL to LAOL." Scalp /
   intraday / swing LAOL targets.
7. **Refresh** (L130): "Refresh liquidity calculation at the start of each
   new timing." Timing = Task 3 §3 Key timing.
8. **TFS** (L132): "TFS tells you the power of the move/the current range of
   the price. Wait for the right quality-aligned manipulation and follow the
   direction of its TS build-up. 1hr/3hr/4hr/5hr/7hr/11hr backed generally
   gives a 300 pip + AVG move (true swing backed move - task 3)."
   *Analyst note:* Task 3's table puts 1hr+ as intraday and 3hr+ as swing;
   here 1hr is in the "true swing backed" list. Not a contradiction to
   resolve (backing by the list of HTFs together gives the swing move), but
   publish verbatim and do not merge into Task 3's table. "300 pip" is his
   gold pip convention; do not convert.
9. **Zones** (L134): "Zones are secondary confirmations, similar to an HCS
   POI—their reactions make the true move." Illustrated by Img 34 ("4hr HCS
   Zone reaction - secondary confluence that makes up POI").
10. **Final entries** (L144): "Your final entries are taken with confidence
    in liquidity direction, established 10 min TS, following TFS, in timing.
    Generally speaking, you will always have a refined HCS or negation POI,
    a LTF TS formed and respected (a strong entry model that occurred after
    previous liquidity was manipulated), LAOL taken, core + trail + LAOL to
    target." **This is the entry checklist.** Publish verbatim and also as a
    checklist (editorial restatement, clearly marked):
    - liquidity direction (confident)
    - established 10 min TS
    - following TFS
    - in timing
    - refined HCS or negation POI
    - LTF TS formed and respected (after previous liquidity manipulated)
    - LAOL taken
    - targets: core + trail + LAOL
11. **Don't chase entry models** (L146, Rule + Warning): "Do not get caught
    up in final entry models as many traders do, and forget the main
    theme—liquidity calculation. You have all that is required for a high
    level of extraction. Accept you won't be right every time. But every
    loss is due to a missing liquidity calculation, which you must aspire to
    figure out, not have confusion or think one entry model will fix it all
    (wasted energy). Focus instead on RR—One win makes you x10, x20, x50 any
    loss."
12. **Optimism/pessimism** (L148): quoted adage "Losing traders are
    optimistic in a losing position, and pessimistic in a winning
    position—winning traders are pessimistic in a losing position and
    optimistic in a winning position." Then: "Make the mindset shift to truly
    focus and maximize on RR." He presents it as a known saying ("Some of
    you will have heard this statement previously"). Source unknown; do not
    attribute to anyone.
13. **Closing** (L150): "The above rules were mentioned very
    matter-of-factly. You must study each point deeper. You should know what
    to backtest now. The base of your trading plan and confident profitable
    extraction ^. Utilize the clarity." (Instruction: study each point
    deeper, backtest them.)

The mentor ties the rules to the Tasks himself. Keep these as links:
L124 -> Task 1, L128 -> Task 2, L132 -> Task 3; L122/L144 -> Task 3 rules;
L130 / "in timing" -> Task 3 Key timing.

### 4.3 Worked example: the backtest sequence (T3, Img 29-36)

XAUUSD, one continuous example. Recurring levels: **TS 2,999.56**; **LAOL
3,000.61** on 30m/10m/LTF (Img 29-31), **3,000.43** on the 4hr/10m
follow-up (Img 32-34), and 3,000.81 / 3,000.51 on the 1m (Img 35). These
are redrawn lines for the same area, not different levels; publish levels
as shown on each chart. **Trail 3,002.39**; **Core 3,021.65 (10m) /
3,022.06 (4hr)**.

Recommended publication order: **top-down** (4hr -> 30m -> 10m -> LTF ->
1m), because Img 34 is titled "Backtest sequence" and the site's Tasks teach
top-down. The mentor's paste order was 29-36 (bottom-up, following his
bullet order). Record that order in an editorial note and link each chart to
the rule it illustrates.

**Img 33 - 4hr context and TFS confirmation.**
- Left: "Major HTF liquidity (breakout) build up we expected to be taken -
  overall direction shown" (two "£" lines at ~3,017 and ~3,002).
- Top-right: "Doji", "Wick to fill", "£" (~3,026-3,028).
- A large bearish 4hr candle from ~3,030 to ~3,006, then a candle wicking to
  the TS.
- At the low: "TFS confirms LAOL and refined POI: 4hr+11hr x3 negation /
  3hr+5hr negation / 7hr x3 self negating"
- "TS respected - LAOl taken - new 10 min HCS TS for established direction
  / Core liqudity to target (confident prevailing direction)"
- Right-side levels: Core 3,022.06; 3,016.12; 3,009.99; LAOL 3,000.43; TS
  2,999.56.
- Shows multi-TF TFS alignment (4hr, 11hr, 3hr, 5hr, 7hr) confirming one
  POI. Direct application of Task 3's TFS ladder.

**Img 34 - 4hr zones: "Backtest sequence".**
- Two blue 4hr zones: upper ~3,034.5-3,038.5, lower ~2,997.5-3,005.
- Top: "Backtest sequence" ↓ "HCS zone reaction / TFS/ LAOl met/TS
  respected/10 min TS EST /core + major+ LAOl to target/timing"
- Bottom: "4hr HCS Zone reaction - secondary confluence that makes up POI"
- The top annotation is the entry checklist in the order to backtest it
  (zone reaction -> TFS -> LAOL met -> TS respected -> 10 min TS established
  -> targets core + major + LAOL -> timing). **Essential image.**

**Img 30 - 30m: TS/POI, LAOL, Trail.** "TS/ POI" at the low wick of a
rising green candle; lines TS 2,999.56, LAOL 3,000.61, Trail 3,002.39,
3,003.96. The POI sits in the earlier rally (the "build up" of Img 33), which
price later returns to.

**Img 31 - 10m: refined POI.** "HCS POI refined" (line 3,000.46) between LAOL
3,000.61 and TS 2,999.56; Trail 3,002.39; 3,003.96.

**Img 29 - LTF (timeframe not visible, probably 1m): the LAOL concept.**
- "LAOL example - we have a trail of liquidity onto this point" (3,000.61)
- "Even if one didnt refine in full and chose this area instead. We still
  wait for PA to confirm with TFS +new HCS/entry model+ previous TS after
  LAOL respected" (3,003.96)
- "In this example the LAOL of the moment - started reversal" (3,007.04)
- Unlabelled line 3,002.39 (= Trail on Img 30-31).
- **Teaching:** a less-refined choice of level is not fatal. You still wait
  for PA confirmation (TFS + new HCS/entry model + previous TS) after the
  LAOL is respected. "LAOL of the moment" means LAOLs are relative to the
  current move ("Price moves from LAOL to LAOL").

**Img 32 - 10m: after the TS is respected.**
- Bottom: "TS respected - LAOl taken - new 10 min HCS TS for established
  direction"
- Stepping 10 min TSs as price rises: "10 min HCS TS" (3,009.99), "10 min
  FU retest TS" (3,013.04), "10 min negation TS" (3,016.12)
- Top: "Core Breakout Liquidity - minimum target after LAOL opposite/ POI
  respected" (3,021.65), reached at the right edge.
- Lines Trail 3,002.39, LAOL 3,000.43, TS 2,999.56.

**Img 35 - 1m: two entries.** Blue zone background (the 4hr zone).
- "LTF LAOL taken - 1 min Negation / 3 min HCS+ negation"
- "More aggressive but with full TFS factors and 10 min TS forming"
- "With extra zone confluence possible"
- "Retail liquidity first manipulated" (twice: at the low, and at a later
  pullback)
- "After 10 min TS EST /1 min HCS/ core to target"
- Two long-position boxes: an aggressive entry at ~3,000.5 (LAOL) and a
  standard entry at ~3,005.7 after the 10 min TS is established.
- **Important clarification:** an entry on a **forming** 10 min TS is shown
  as legitimate but "more aggressive", with full TFS factors (and optional
  zone confluence). The standard entry waits for the 10 min TS to be
  **established**. This refines Task 3's "forming vs established" editorial
  note (§11).

**Img 36 - 1m: continuation, same process.**
- "Retail liqudidty manipulated - LTF LAOL taken starts 10 min TS" (low
  ~3,010.12; line labelled "10 min TS")
- "Early retail buys taken"
- "1 min x3 negation ( x3 by x3) - 10 min HCS EST"
- "1 min HCS x3"
- "Same process" -> "1 min x3 negation - HCS x2"
- "£" lines on liquidity above; long-position boxes at each entry.
- Shows the process repeating after each new TS (re-entries). Matches the
  10m TS ladder in Img 32 (the 10 min TS ~3,010 = Img 32's 3,009.99).
- "x3 by x3" is not explained. Publish verbatim, don't define.

### 4.4 Q&A: why the big 4hr candle area was not a POI (T4)

- **Question (Img 37, a student, not the mentor):** he forwards Img 33 and
  circles the large bearish 4hr candle: "TFS confirms lal, but what about
  this: isnt all that area possible 4h TFS?" ("lal" = LAOL).
- **Answer (L168-L172), Teaching / rule, quote verbatim:**
  > Simple answer : We had no 10 min TS established prior.
  >
  > We were also not within timing. X3 self negation is weaker by default (not enough on its own for a strong POI)
  >
  > With the LAOL / major liquidity below / POI yet to be met:
- **Img 38 (M30, phone chart, XAUUSD):** candles ~3,001-3,018 with a
  horizontal line at 3,007.11 at the level where a red candle closes and the
  next candle opens (and a moving-average line from the charting app, not
  an annotation).
  > This 30 min doji (and below) most notable. (L176)
- **Lesson (direction-neutral, safe to publish):** a big HTF candle area is
  not a POI by itself. It needs (1) an established 10 min TS, (2) timing,
  (3) more than a lone x3 self negation, and (4) the liquidity below / LAOL /
  POI to have been met. Here the 30-min doji and liquidity below were still
  unmet.
- *Analyst note:* the 3,007.11 doji line matches Img 29's "LAOL of the
  moment" at 3,007.04, which supports reading the 30-min doji as that
  liquidity. Which way the student meant "4h TFS" (sell from the red
  candle, or buy anywhere within its range) is not stated. The answer's
  four conditions apply either way, so publish without asserting the
  direction (§13 #4).
- The four missing conditions mirror the final-entry checklist (L144),
  which makes this Q&A a useful "counter-example" beside the worked example.

### 4.5 Connections to existing Tasks (technical)

| This batch | Existing | Relationship |
|---|---|---|
| ATT FU form 1 vs unmanipulated doji (Img 19) | Task 1 "The doji we Mark is separate from the attempted FU - a subject of later discussion" | **Delivers** the deferred discussion |
| x3, self-negating x3 (Img 24-27) | Task 2 4hr negation-marking caption "not marking the doji after self-negating x3 (advanced)"; Task 3 examples "5 min x3 negation", "10 min negation (self negating x3)", "x3 entry model" | **Defines** terms used there. The "x3 *entry model*" itself is still advanced-stage and undefined |
| LAOL (L17, L128, Img 29-35) | Task 2 "last area of liquidity found on 4hr", "The LAOL accounted for in the moment"; Task 3 "refined Major liquidity (LAOL) taken" | **Defines** |
| Negation up to two candles after (Img 23) | Task 3 rule 5 | Same rule, independent illustration |
| HCS = new FU retesting the other (L13, Img 22) | Task 3 aid "For the HCS there is an FU from the left to react", "When an FU is retested - the wick retest becomes part of the HCS range" | Consistent; the glossary gives the short definition |
| 10/15 min TS rule (L122), final entries (L144) | Task 3 rules 1-3 | Restates and extends into a checklist |
| TFS 300 pip+ swing (L132) | Task 3 TFS ladder (3hr-5hr-7hr-11hr), tier table | Adds a magnitude heuristic |
| Refresh each timing (L130), "in timing", Q&A "not within timing" | Task 3 §3 Key timing | Applies timing |
| Liquidity calculation (L124, L146) | Task 1 (major liquidity), Task 3 "final Liquidity calculation" | Emphasis: every loss = missing liquidity calculation |
| Forming 10 min TS = "more aggressive" (Img 35) | Task 3 italic note on forming vs established | **Clarifies** (see §11) |
| RR (L65, L146: x10/x20/x50) | Task 3 §1 RR | Reinforces |

---

## 5. Broader mentor knowledge

### 5.1 Psychology intensive (P1, L34-L58)

- Opening (L34-L36), **Opinion / self-description**: "We operate here from
  a unique understanding at the highest levels of extraction found nowhere
  else." Different characteristics and personalities come from "respective
  societies/economies/education/media/upbringing/self-resilience/habits". The
  aim is "the transition into a mindset of true power - for all
  (irrespective of previous influence)".
- "It is a fact that trading is a game of the most intricate psychology.",
  summarised in 3 points (**Teaching**):
  1. Money-making is among the most emotionally charged parts of life,
     linked to "the innate will for survival, freedom, and then
     power/influence", and trading's potential makes one "even more
     emotionally involved (not to mention the fair share of external
     manipulation shaping perceptions)".
  2. **Chess vs trading.** Quote exactly (distinctive):
     > A game of chess is closed-ended, has fixed rules (complete information), and you are only playing against one.
     >
     > On the contrary, trading is open-loop (has no end), there are no fixed rules (rather vast misinformation), you compete against vast unknown external forces, and have no control over the outcome of price movement (you only control your own decisions).
  3. The average trader doesn't comprehend points 1-2. The odds are stacked
     against them, their minds "prey to excitement and impulse", they become
     "new retail liquidity", having been "introduced to the markets via
     false information - and this is the tainted cycle from which most
     traders begin".
- "So now do the opposite." (L52-L58), **Instruction**:
  - "Work on your relationship with money, understand the default human
    inclination to be more emotionally impacted."
  - > Know that trading is open-ended with no rules easy to get lost in - a profitable trading plan objective is to make it akin to a game of chess (mechanical, a limited variation).
  - Knowing and concentrating on these factors strengthens foundations:
    "the true trading mindset of clarity" (the entry's title phrase).

### 5.2 Practical mindset steps (P2, L61-L71)

"Each has far more depth for individual study."

- **RR and probabilities** (Teaching + Rule):
  > It is a fact that with our system, 1 win makes up for 10 losses or more.
  Over-risking on one trade "ruins average RR"; over-trading on false
  opportunities "is not adhering to true probabilities". "So transform your
  risk management and mindset into one that thinks mathematically. There is
  no positive impact from involved emotions." The RR property is the
  mentor's claim about his system; present it as his statement.
- **Rest** (Instruction): "You do not need to trade every day, every
  session, or every opportunity. Take breaks and solidify your roots." After
  a bad or a good performance, "take time to clear your mind after". The
  claim "the returns we earn in a day can be equal to what others take a
  year to achieve" is **his claim, unverified**. Attribute it.
- **Backtest more than you trade** (Rule, exact):
  > What is certain is you must backtest more than you trade.
  Backtesting makes trading "peaceful", the mind stronger, RR understood,
  bad habits "erased via true disciplined efforts". "Quality > quantity."

### 5.3 Underlying causes: breaking free from manipulation (P3, L73-L101)

Framing (L73): the causes behind how one understands manipulation, deals
with rising equity, frees the mind and avoids "targeted distractions". "Part
of what makes trading so special is the journey of self-mastery."

- **Distinctive line (quote):** "To read past the manipulation, one cannot
  be part of the manipulated. Rather one must become a counterforce in
  truth." (L76)
- **Money** (L78-L82), **Opinion / interpretation**: "The world is lied to
  about the true nature of money", societies "subjugated under a hidden
  oppression"; the pay-gap image ("billions daily" vs "$100 a day or less")
  is rhetorical. **Link to trading, his teaching:** "You can't read (or
  believe in) liquidity manipulation truly until you achieve this shift."
  Ties to Task 2 foundation 1 ("A firm concrete belief in the manipulation
  of common retail liquidity") and the Fundamentals/Worldview entries.
- **Media** (L84), Opinion + Instruction: "false narratives, subconscious
  programming, stirs low vibrational feelings (divide and conquer
  strategy). Be only as informed as you need to - via verified independent
  outlets. A respect for true journalism, not a blind following." Consistent
  with the Morality entry's "Knowledge as an edge: be informed, verify
  everything".
- **Society** (L86), Instruction: patience with those who don't know
  better, "you are responsible for helping those around you", think
  objectively, "don't let society steal your dreams".
- **Governments** (L88), **Opinion** (strongly worded, qualified by him:
  "at least in most major countries", "we do not speak of all governments
  here"): the belief that governments have citizens' best interests at
  heart is "A fallacy"; "The leading power is the banking system, their
  network, and funding"; rhetorical questions on war spending vs social
  development, morals, and the options for the "Democratically elected".
  Stopping belief in "government as saviors" unlocks "mental freedom". L90:
  "a harder pill to swallow ... It matters for your freedom." Connects to
  the Worldview entry's banking critique.
- **Entertainment** (L92): "Give them bread and circuses and they will
  never revolt". *Documented:* "bread and circuses" (panem et circenses) is
  from Juvenal's *Satires* (X); the "they will never revolt" form is a
  popular modern paraphrase, not Juvenal's text. Publish his quote as his,
  with at most a short editorial note. Teaching: fun is fine but "secondary
  after definitive purpose"; "In today's age of AI targeting protecting your
  dopamine system is more critical than ever. The trader requires a sharp
  focus."
- **Bad habits** (L95), Instruction: poor diet, lack of exercise, smoking,
  drinking, excessive entertainment substitute for "willpower, resilience,
  and focus"; "taking accountability"; "Each day of life should be an
  improvement".
- **Feeling worthy and mental maturity** (L97), Teaching + Warning: "You
  want to be in the top 1%, but your actions show otherwise? ... You can't
  trick your subconscious." No backtesting, not free of manipulation, bad
  habits unchanged -> "you are only to blame". Warning about traders who,
  after "small lucky wins (generally via funded accounts)", harbour
  "borderline arrogance". He calls this "a form of "doublethink""
  ("Politicians of today specialize in it", Opinion). Link to the Morality
  entry, which already covers doublethink.
- **Spirituality** (L99), **Opinion / belief**: quoted line "Faith in God
  makes one leave all which is trivial" (source not given; do not
  attribute). To earn at the highest levels "one must do either ... A) Sell
  your soul (this means sacrificing good morality for illicit gain) B) Have
  faith in God." "We are up against the bank's manipulation, who are an
  evil force (some may see that as extreme but it is wholly true), and its
  opposite force is the force of light. You will certainly find the best
  traders are those who have this grounding and faith." Publish attributed
  as his belief. "xd" dropped.
- Close (L101): "And this is how we are able to beat banks at their own game
  - our minds are stronger".

### 5.4 Supplements (P4, L105-L109): health opinion

- "coffee (take breaks) or green tea" for laziness / extra study sessions.
- "ashwagandha (will alter emotional sensitivity so be careful and only use
  once or twice a fortnight)" for impulse.
- Personal suggestion, not medical guidance. If published, it needs an
  editorial "his personal suggestion, not medical advice; check with a
  doctor" note (decision 2).

### 5.5 Closing (P5, L111-L113)

- "This section will also be updated more in depth again in the future. It
  is much information condensed ... I will always encourage all to study the
  points presented objectively, no matter how uncomfortable they may be."
  (**Opens a deferred thread**: an expanded psychology section.)
- "All you ever need for your trading psychology at the highest level 🎩 ^"
  Keep as the closing line without the emoji/caret.

### 5.6 Documentary (W1, L156-L160)

- He calls it "part of your syllabus": a "movie" (really a documentary) that
  should "wake one up and provoke thought"; "Connect with your empathy and
  think deeper about the true state of the world and where we are headed if
  there is no resistance."
- Epistemic framing he gives himself: "80% or so is fact, apart from the
  vision of the future—which no one can claim to know in its entirety"
  (**his assessment, Opinion**); "There are other spiritual forces that are
  not taken into account"; "Don't skip by without watching it. It will help
  break past the manipulation. I encourage you all to share it as well."
- **Title:** not in the mentor's text. The user's note (L162) says he
  "added some VIP stream link some movie called 2073". *Documented:* *2073*
  (2024), directed by Asif Kapadia, is a docu-fiction: a dystopian drama set
  in 2073 intercut with real documentary footage of contemporary
  authoritarianism, surveillance and climate issues. That matches "movie
  (really a documentary)" and "vision of the future", so it is very likely
  the film, but confirm (decision 3).
- Destination: Worldview entry, short "Recommended viewing" section.

---

## 6. Proposed final site architecture

| Cluster | Destination | New / extend | Class | Title | Reason | Cross-links |
|---|---|---|---|---|---|---|
| T1 | `/reference/terminology/` | New page | **Trading Reference** | "Terminology: FU, Negation, HCS, x3, LAOL & Core Liquidity" | Cross-Task vocabulary, not an assignment; Tasks 1-3 depend on it | Task 1 (doji vs ATT FU), Task 2 (LAOL, self-negating x3), Task 3 (rule 5, aid, x3 entry model), Fundamentals ("On the chart: FU") |
| T2 | `/reference/rules-of-analysis/` | New page | **Trading Reference** | "Practical Rules of Analysis & Extraction" (his heading, lightly shortened) | His stated "base of your trading plan"; spans all Tasks | Tasks 1/2/3 (as he cites them), Task 3 Key timing, Terminology, Worked example, Psychology entry |
| T3 + T4 | `/reference/worked-example-3000-reversal/` | New page | **Trading Reference** | "Worked Example: Backtest Sequence at the 3,000 Low (XAUUSD 4hr -> 1 min)" | Applied demonstration of T2; Q&A is about this chart | Rules page, Terminology, Task 3 (TFS ladder, forming vs established), Task 2 (top-down) |
| P1-P5 | `/misc/trading-psychology-the-mindset-of-clarity/` | New Misc entry | **Misc** | "Trading Psychology: The Mindset of Clarity" | Non-technical; the mentor's own framing is psychology; worldview parts are "underlying causes" of it | Rationality (same distortion list, backtesting), Morality (doublethink, verify), Worldview (banking), Task 3 (RR), Rules page |
| W1 | `/misc/mr-casinos-worldview-banking-power-and-history/` | Extend | **Misc** | New section "Recommended viewing" | Worldview material, not psychology or trading | Psychology entry |
| N | raw.md only | - | - | - | Non-mentor / private / no content | - |

**Misc ordering** (organisational, resolved): the psychology entry goes
directly after Rationality, because the Rationality entry frames
psychology as its branch ("All other branches related to psychology fall
under it") and lists the same distortions this post expands. New order:
1 Rationality, **2 Trading Psychology**, 3 Morality, 4 Fundamentals,
5 Earning the Advanced Stage, 6 Worldview (renumber four `order` fields).
`relatedTask: "3"` (its practical steps are RR/Task 3.1 material).

**Trading Reference ordering:** 1 Terminology, 2 Rules, 3 Worked example.

---

## 7. Top-level section decision

**Recommendation: yes, introduce a third top-level section, "Trading
Reference" (nav label "Reference"), placed between Tasks and Misc.**

Why it is justified (the distinction, not the batch size):

- There are three durable kinds of mentor material, not two:
  1. **Tasks**: assigned work with deliverables, counts and deadlines.
  2. **Taught technical framework**: definitions, rules, models, worked
     examples and technical Q&A that apply across Tasks and are never
     assigned as such.
  3. **Broader knowledge**: psychology, rationality, morality,
     fundamentals, worldview, progression.
  Until now kind 2 had no home. It was either absent (terms left undefined
  in Task 3) or would have had to be pushed into a Task it doesn't belong to,
  or into Misc next to worldview essays.
- Every existing Misc entry is kind 3. Putting FU/x3 definitions and entry
  rules among them would bury the most-used material in the least-technical
  section.
- **Future material will clearly recur there.** The mentor says the rules
  "must" be studied deeper and the psychology section "will also be updated
  more in depth again in the future". The "x3 entry model" is explicitly
  still to come (advanced stage). The Task pages keep using terms that need
  a single definition point. Q&A clarifications on charts (like Img 37-38)
  are a recurring Discord pattern. A glossary also naturally grows with
  every Task.
- It is the page students will revisit most: when reading any Task, the
  terms and entry checklist are what they need to look up.

What belongs in Trading Reference:

- Mentor definitions of terms (with his definition charts), and pointers to
  definitions already given inside Tasks (quoted, with a link, never
  re-worded into new definitions).
- Mentor rules, checklists and heuristics that are taught, not assigned.
- Mentor worked examples and technical Q&A clarifications.
- Execution psychology **only when the mentor places it inside his technical
  rules** (e.g. L120, L146, L148).

What does NOT belong there:

- Anything with a deliverable, count or deadline (-> Tasks), including
  scope changes and corrections to a Task (the triage rule still routes
  them to that Task).
- The user's own backtests (-> each Task's "My task").
- General psychology, rationality, morality, fundamentals / market-context
  essays, worldview, progression / advanced-stage announcements (-> Misc).
  The Fundamentals entry stays in Misc: it is market context and bias, not a
  mechanical rule set.
- Claude's own synthesis presented as mentor teaching. Editorial summaries
  (e.g. the checklist restatement) must be marked as such.

Relationship to Tasks and Misc:

- Nav: **Tasks · Reference · Misc**. Home page unchanged (Tasks). `/reference/`
  lists entries as cards, ordered by `order`, like `/misc/`.
- Tasks link *to* Reference for terms and rules; Reference links *back* to
  the Task where a term was first used or assigned. Content is not moved out
  of Tasks. Task pages keep the mentor's text exactly where he posted it.
- Misc and Reference cross-link where the mentor connects them
  (psychology <-> rules).

Durability for future imports: yes. The test for each future item is simple.
"Is it assigned?" -> Task. "Is it technical framework taught for use
across trading?" -> Reference. "Otherwise" -> Misc. `/mentor-analyse` should
apply this test from now on. Record it in PROJECT_STATE and the skill's
analysis guide at implementation time.

Implementation shape (for the implementing session; keep it minimal):

- New content collection `reference` in `src/content.config.ts`, same schema
  as `misc` (`entrySchema.extend({ order })`). Optionally allow
  `relatedTasks: z.array(z.string()).optional()`, since Reference pages
  relate to several Tasks. Otherwise use the body "Related" line.
- `src/pages/reference/index.astro` + `[slug].astro`, cloned from the misc
  pages. Card via `MiscCard.astro` with a "REFERENCE" badge (parameterise
  the badge rather than duplicating the component).
- Images in `src/assets/reference/<topic>/` (the same rule as Misc: never
  inside the entry folder, which would auto-show an "Images" grid), inline
  with `.response img` + lightbox + optional `<details
  class="response-gallery">`.
- Nav link in `src/components/Layout.astro`.
- Breadcrumb support for the new section.

---

## 8. Image map

Publication status: **E** essential, **U** useful, **O** optional,
**X** unsuitable / raw-only. Target filenames are suggestions.

| Img | Shows | Belongs with | Status | Destination / target file |
|---|---|---|---|---|
| 18 | 1hr: complete FU; "FU criteria met"; "close within the last candle open/close"; "wick range (or close)" | L9 FU | E | Terminology · `terminology/fu-complete-1hr.jpg` |
| 19 | 1hr: attempted FU form 1, no new high/low, "Still counted as FU retest POI", distinction vs unmanipulated doji | L9 (ATT FU) | E | Terminology · `att-fu-form-1-1hr.jpg` |
| 20 | 1hr: attempted FU form 2, weaker, minor liquidity; no wick closure within last candle | L9 (ATT FU) | E | Terminology · `att-fu-form-2-1hr.jpg` |
| 21 | 1hr: Negation after ATT FU; "Stronger than FU alone (2 manipulations)" | L11 | E | Terminology · `negation-1hr.jpg` |
| 22 | 30m: HCS = new FU retesting last FU wick | L13 | E | Terminology · `hcs-30min.jpg` |
| 23 | 30m (same chart): ATT FU + "Negations can occur up to two candles after" = HCS + negation | L13 / L11 | E | Terminology · `hcs-plus-negation-30min.jpg` |
| 24 | 1hr: the "x3" candle; x3 negation needn't close as a full FU "(the only instance)" | L15 | E | Terminology · `x3-negation-1hr.jpg` |
| 25 | 30m: self-negating x3 vs pure x3 negation | L15 | E | Terminology · `x3-self-negating-vs-pure-30min.jpg` |
| 26 | 30m (same chart): TS respected at self-negating x3 TS; near-enough HCS; "X3 confirmations take prevalence" | L15 | U | Terminology · `x3-ts-respected-30min.jpg` |
| 27 | 1hr: x3 self negating weaker than x3 negation; TS on candle after; future LTF trail | L15 | E | Terminology · `x3-self-negating-1hr.jpg` |
| 28 | Search snippet: "Close"/"close" homographs | Img 18 note | X (convert to a one-line text note if decision 5 confirms) | raw-only |
| 29 | LTF (TF not visible): LAOL example, trail, "even if one didn't refine in full...", "LAOL of the moment" | L128 LAOL | E | Worked example · `worked-3000/ltf-laol-trail.jpg` |
| 30 | 30m: TS/POI, LAOL, Trail | L128, L132 | U | Worked example · `30min-ts-poi-laol-trail.jpg` |
| 31 | 10m: HCS POI refined | L122, L144 | U | Worked example · `10min-hcs-poi-refined.jpg` |
| 32 | 10m: TS respected, LAOL taken, 10 min TS ladder, core breakout liquidity target | L126, L144 | E | Worked example · `10min-ts-ladder-core-target.jpg` |
| 33 | 4hr: HTF breakout build-up, multi-TF TFS confirmation of LAOL/POI, core target | L132 | E | Worked example (and Q&A reference) · `4hr-tfs-confirmation.jpg` |
| 34 | 4hr: HCS zones; "Backtest sequence" checklist | L134, L144 | E | Worked example · `4hr-zones-backtest-sequence.jpg` |
| 35 | 1m: aggressive entry on forming 10 min TS vs standard entry after established; retail liquidity first manipulated | L124, L144 | E | Worked example · `1min-entries-forming-vs-established.jpg` |
| 36 | 1m: continuation; x3 negations, HCS x3, "Same process" | L144 | U | Worked example · `1min-continuation-same-process.jpg` |
| 37 | Discord screenshot: another student's question forwarding Img 33 | L166 | X | raw-only (other member's name/avatar; question paraphrased anonymously) |
| 38 | M30 phone chart: 30-min doji line at 3,007.11 | L168-L176 | U | Worked example, Q&A section · `30min-doji-liquidity-below.jpg` |

19 of 21 images proposed for publication (Img 28 and 37 raw-only).
Alt text should carry the key annotation, since it doubles as the lightbox
caption. Under each image, transcribe the annotations as text (the same
convention as Task 3).

---

## 9. Existing-page extensions

Mentor text on existing pages is **not** changed. Additions are editorial
"See also" lines or new sections.

1. **Task 1** (`src/content/tasks/1/task.md`), after the line "The doji we
   Mark is separate from the attempted FU - a subject of later discussion."
   (in "The 30-chart task", step 1): an italic editorial pointer, e.g.
   *"The attempted FU was later defined, with charts: see
   [Terminology](...#attempted-fu)."* Add Terminology to Task 1's Related
   line if it has one.
2. **Task 2** (`src/content/tasks/2/task.md`): add Terminology (LAOL, x3)
   and Rules to the Related line at the end.
3. **Task 3** (`src/content/tasks/3/task.md`):
   - After rule 5 ("ATT FU"): a pointer to Terminology.
   - After the italic "forming vs established" note: one italic sentence
     noting that the worked example later shows an entry on a *forming*
     10 min TS labelled "More aggressive but with full TFS factors", while
     the standard entry waits for it to be established, with a link.
   - Related line: add Rules + Worked example.
4. **Fundamentals entry**, section "On the chart: FU and the fractal
   approach": add "(definitions and charts: [Terminology](...))" after "FU
   is the manipulated high/low".
5. **Rationality entry**: add "Follow-up: [Trading Psychology](...)" to
   the Related line (its distortion list is expanded there).
6. **Morality entry**: the Related/cross-link line gets Trading Psychology
   (doublethink, verify-your-sources parallel).
7. **Worldview entry**: new short section **"Recommended viewing"** before
   "His closing stance" (W1, §5.6), plus a link to the Psychology entry's
   "underlying causes" section.
8. **`/misc/` ordering**: renumber `order` (§6).

---

## 10. Cross-link map

| From | To | Why |
|---|---|---|
| Terminology § ATT FU | Task 1 step 1 | Delivers the deferred distinction |
| Terminology § Negation / HCS | Task 3 rule 5 and Task aid | Same rules |
| Terminology § x3 | Task 2 4hr negation marking; Task 3 "x3 entry model" (still advanced) | Defines the term |
| Terminology § LAOL | Task 2, Task 3 11hr->1min example | Defines |
| Terminology § TS/TFS/doji pointers | Task 3 TFS definition, Task 1 doji rule | Single definitions stay where given |
| Rules 4 / 6 / 8 | Task 1 / Task 2 / Task 3 | The mentor's own citations |
| Rules 3, 10 | Task 3 rules 1-3 | 10 min TS backing |
| Rules 7, 10 | Task 3 Key timing | "each new timing", "in timing" |
| Rules 2, 11, 12 | Psychology entry (chess, RR mindset) | Same themes |
| Worked example | Rules, Terminology, Task 3 TFS ladder, Task 2 top-down | Application |
| Worked example § Q&A | Task 3 Key timing | "not within timing" |
| Psychology § RR | Task 3 §1 RR; Rules 11 | Same maths |
| Psychology § backtest more | Rationality (500 hours, data storage); Task 3 "Backtest before you trade" | Same principle |
| Psychology § media / doublethink | Morality entry | Same concepts |
| Psychology § governments / money / banks | Worldview, Fundamentals | Same worldview |
| Worldview § Recommended viewing | Psychology entry | "break past the manipulation" |

PROJECT_STATE open threads: this batch closes Task 3's "ATT FU / LAOL / x3
left undefined" (except "x3 entry model") and Task 1's "attempted FU - a
subject of later discussion". It does **not** deliver the Trump
assassination-attempt thread. It opens "psychology section to be updated
in more depth" and "x3 entry model (advanced stage)".

---

## 11. Duplication / conflicts

- **Negation two candles after an FU**: Img 23 = Task 3 rule 5. Define once
  in Terminology, link from Task 3; don't restate the rule text twice.
- **HCS range / FU retest**: Img 22 matches Task 3 aid ("the wick retest
  becomes part of the HCS range"). Consistent.
- **10 min TS**: L122/L144 restate Task 3 rules 2-3. Publish in Rules
  (they are his words here too) but link Task 3 as the origin.
- **Forming vs established (clarification):** Task 3's editorial note
  concluded "the 10 min + backing itself must be established; the higher
  timeframe structure above it may still be forming". Img 35 shows the
  mentor taking a *forming* 10 min TS entry, labelled "More aggressive but
  with full TFS factors and 10 min TS forming", alongside the standard entry
  "After 10 min TS EST". This matches Task 3 rule 3 ("Established in most
  cases, sometimes taken as forming") better than the note's strict
  reading. **Recommendation:** add the one-sentence clarification to Task 3
  (§9.3). Do not rewrite the existing note.
- **Swing timeframes:** Task 3 table: 1hr+ intraday, 3hr+ swing. L132 lists
  "1hr/3hr/4hr/5hr/7hr/11hr backed" as "true swing backed move". This is a
  different statement (magnitude when backed by those TFs together), not a
  redefinition. Publish verbatim, no reconciliation note needed beyond a
  link.
- **FU charts on 1hr/30m vs Task 3 rule 4** ("Only on the 3hr + will we pay
  attention to confirmed FU closures that indicate a prevalent direction"):
  Img 18 shows what an FU *is* on any TF. Rule 4 is about using FU closures
  for *direction*. Add a one-line editorial note in Terminology to prevent
  a misreading.
- **Core liquidity** two phrasings (L19 vs L126): complementary; present
  both.
- **Rationality entry** already covers "backtesting over live trading",
  500 hours, and the distortion list. The psychology post is new material
  that expands it. No duplicate text.
- **Doublethink**: already explained in Morality. The psychology entry
  should link, not re-explain.
- **Chess analogy** appears in P1 and Rule 2. Keep both (the mentor uses it
  twice) and cross-link.

No outright conflict with existing documentation was found.

---

## 12. Raw-only material

| Item | Reason |
|---|---|
| L32 note "(my note: this image links to misc 18) - Misc 28" | User's note; its content is resolved in §4.1 |
| Img 28 (search snippet) | Not mentor-authored content. Its point becomes a one-line note in Terminology if decision 5 is answered |
| L155 "(Real misc here i feel just under my note):" | User's note |
| L162 "and he also added some VIP stream link ... lmk if its worth xd" | User's note; the title *2073* is used only after confirmation |
| L164, L166 notes | User's notes; Img 37 identified as a forward of Img 33 |
| Img 37 (Discord screenshot) | Shows another member's display name and avatar; the question is paraphrased anonymously ("a student asked") |
| Streaming links (not supplied) | Not needed; a "free streaming link" to a 2024 film may not be an authorised source. Publish the title only |
| "xd" (L99), "🎩 ^" (L113), "^" (L150) | Chat mannerisms |

Not raw-only (deliberately kept): the governments/banks/spiritual passages,
the self-description (L34) and the returns claim (L69). All are published
with attribution, because they are substantive mentor views tied by him to
trading psychology.

---

## 13. Ambiguities / decisions required

Decisions (need your judgement):

1. **Third top-level section.** Approve "Trading Reference" (nav
   "Reference", between Tasks and Misc) with the three pages in §6?
   Alternatives: "Core Concepts", or no new section (then T1-T4 become Misc
   entries at orders 2-4, with a "technical" note). **Recommend: approve
   "Trading Reference".**
2. **Supplements (L105-L109).** (a) Publish attributed with a short "his
   personal suggestion, not medical advice" note, or (b) keep raw-only.
   **Recommend (a)** for fidelity. (b) is reasonable if you'd rather not
   host dosing suggestions.
3. **Documentary.** Confirm it is *2073* (2024, Asif Kapadia), and approve
   publishing the title and his framing ("80% or so is fact") without any
   streaming link. **Recommend: yes, no link.**
4. **Sensitive opinions in the psychology post** (governments "a fallacy",
   banks "an evil force", "Sell your soul" / "Have faith in God"). Publish
   attributed as his views (consistent with your Batch 2 policy), or
   condense? **Recommend: publish attributed, lightly condensed, with the
   distinctive lines quoted.**

Unresolved source points (the implementation may note these but shouldn't
guess):

5. **Img 28 / "(or close)":** who posted the homograph note, and in reply to
   what? If you know it was the mentor clarifying Img 18, the Terminology
   page can add: *"close" here means near, not the candle close*. Otherwise
   keep "(or close)" verbatim with no gloss. Default if unanswered: verbatim,
   no gloss.
6. **Img 37 question direction:** whether the student meant the red 4hr
   candle as sell-side TFS or the area as a buy POI. Default: publish the
   answer direction-neutral (§4.4).
7. **Img 29 timeframe** not visible. Default caption: "lower timeframe".
8. **"x3 by x3"** (Img 36) and the **"x3 entry model"** (Task 3):
   undefined. Kept verbatim.

---

## 14. Recommended implementation plan

(Fresh session: read `CLAUDE.md`, `PROJECT_STATE.md`, this file. Do not
reopen `raw.md` or the images except for §13 items 5-8.)

1. **Scaffold Trading Reference** (if decision 1 is approved):
   `reference` collection in `content.config.ts`; `src/pages/reference/`
   index + `[slug]`; parameterise the card badge; nav link "Reference" in
   `Layout.astro`; breadcrumb support.
2. **Copy images** Img 18-27 -> `src/assets/reference/terminology/` and
   Img 29-36, 38 -> `src/assets/reference/worked-3000/` with the §8
   filenames.
3. **Terminology page** (`reference/terminology/index.md`, order 1):
   intro -> FU -> Attempted FU (forms 1 & 2) -> Negation -> HCS (+ HCS +
   negation) -> x3 (x3 negation, pure, self-negating) -> strength table ->
   LAOL -> Core liquidity -> "Used on the charts" (Trail, EST, £) ->
   "Defined elsewhere" pointers (TS, TFS, doji, big wick to fill, POI). Each
   definition quotes his line exactly; charts inline with transcribed
   annotations. Add the Task 3 rule 4 note in FU. Stable anchors
   (`#fu`, `#attempted-fu`, `#negation`, `#hcs`, `#x3`, `#laol`,
   `#core-liquidity`).
4. **Rules page** (order 2): the 13 rules close to verbatim with anchors,
   the task citations as links, the final-entry checklist (marked as a
   restatement), and closing instruction.
5. **Worked example page** (order 3): intro (instrument, date inferred,
   paste-order note) -> 4hr (33, 34) -> 30m (30) -> 10m (31) -> LTF (29) ->
   10m after (32) -> 1m entries (35, 36) -> "Q&A: why the big 4hr candle
   wasn't a POI" (question paraphrased, answer verbatim, Img 38).
6. **Misc psychology entry** `trading-psychology-the-mindset-of-clarity`
   (order 2, relatedTask "3"), in the sections of §5.1-§5.5; renumber other
   Misc `order` fields.
7. **Existing-page extensions** per §9 (Tasks 1-3 pointers, Fundamentals,
   Rationality, Morality, Worldview "Recommended viewing").
8. **Docs:** PROJECT_STATE (new section, the Task/Reference/Misc test,
   closed and opened threads); `ADDING-CONTENT.md` (how to add a Reference
   entry); the analysis guide in `.claude/skills/mentor-analyse/reference/`
   (third destination).
9. **Validate:** clean rebuild (`rm -rf .astro node_modules/.astro dist`),
   tests, `check-dist.mjs`, browser check of the new nav, pages, lightbox,
   anchors and mobile width. Then stop for review (no commit without
   approval).

---

## 15. Approval summary

- **Source:** 21 images (misc 18-38; the "~38" was the top label number).
  All imported and byte-verified: 19 via the script (after widening its
  label pattern to `misc N`) and misc 28/37 copied separately because their
  lines carry your notes (lines left untouched). No missing, stale or
  ambiguous files. Img 37 = a student forwarding Img 33. Glossary charts
  date from roughly Nov 2024-Jan 2025 and the rules/example/Q&A from about
  late March 2025 (inferred from price, same-day live prices).
- **New section (recommended):** **Trading Reference**, for technical
  framework taught but not assigned. Durable: Tasks = assigned, Reference =
  taught technical framework, Misc = broader knowledge.
- **New pages:**
  1. Reference · *Terminology: FU, Negation, HCS, x3, LAOL & Core
     Liquidity* (Img 18-27)
  2. Reference · *Practical Rules of Analysis & Extraction*
  3. Reference · *Worked Example: Backtest Sequence at the 3,000 Low* incl.
     the Q&A (Img 29-36, 38)
  4. Misc · *Trading Psychology: The Mindset of Clarity* (order 2,
     relatedTask 3)
- **Extensions:** pointers in Task 1 (attempted FU delivered), Task 2,
  Task 3 (terms + forming-vs-established clarification), Fundamentals;
  Related-line links in Rationality/Morality; Worldview gets "Recommended
  viewing"; Misc renumbered.
- **Images:** 19 published, 2 raw-only (28 search snippet, 37 Discord
  screenshot).
- **Raw-only:** your notes, the streaming links, the Discord screenshot, chat
  mannerisms.
- **Decisions needed:** (1) approve Trading Reference; (2) supplements,
  published with a caveat or raw-only; (3) confirm the documentary is *2073*
  and publish the title with no link; (4) sensitive opinions published
  attributed. Optional: (5) who posted the "close" homograph note.

---

## 16. User approval (2026-09-30) - binding for implementation

Analysis approved in full. The user's decisions override any "recommend" or
"default" wording above:

1. **Trading Reference: approved.** New top-level section; nav order
   **Tasks · Reference · Misc**. Permanent distinction: Tasks = formal
   assigned mentor work; Reference = technical trading knowledge taught but
   not assigned; Misc = broader mindset, fundamentals, worldview, psychology
   and other mentor material. Record this rule in PROJECT_STATE and the
   analysis guide.
2. **Reference pages approved as proposed:** Terminology; Practical Rules of
   Analysis & Extraction; Worked Example at the 3,000 Low (with the Q&A).
3. **Misc "Trading Psychology: The Mindset of Clarity" approved**, including
   order 2 and renumbering the other Misc entries (§6).
4. **Supplements: include**, clearly framed as the mentor's personal
   suggestion, not a trading rule or medical recommendation. A short caveat
   only; it must not dominate the section.
5. **Documentary is *2073* (2024, dir. Asif Kapadia).** Publish the title
   with his framing. No streaming link.
6. **Psychology/worldview opinions: include**, attributed to the mentor where
   they are opinions or worldview claims. Preserve his faith/God references
   and wider reasoning; do not sanitise.
7. **misc 28: raw-only; no gloss.** Keep "(or close)" in Img 18 verbatim. Do
   **not** state or imply that "close" means "near" (§4.1's analyst reading
   stays out of the site). §13 #5 is closed.
8. **Images approved:** publish the 19 in §8; misc 28 and misc 37 raw-only.
9. **All §9 existing-page additions approved**, including the Task 3 sentence
   that the mentor calls an entry on a still-forming 10 min TS "More
   aggressive but with full TFS factors" (valid, more aggressive), alongside
   the standard entry after it is established.
10. **x3 is defined; the "x3 entry model" (and "x3 by x3") stay undefined.**
    Say so where relevant; do not invent a definition.
11. **Keep the `mentor-source.mjs` change** (accepts `misc N` labels) and
    include it in the eventual commit.

Still open, handled by default: §13 #6 (Q&A published direction-neutral),
#7 (Img 29 captioned "lower timeframe"), #8 (verbatim, undefined).
