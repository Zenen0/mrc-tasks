# Analysis - Week 3: Liquidity

Claude's interpretation of `raw.md` + `images/`. `raw.md` is the untouched
source (only image-reference lines were linked by the import script; L49
"iamge 142" was left exactly as typed, see §1). Awaiting user approval (§12)
before `/mentor-implement`.

Conventions in this file:
- `> quote` = mentor wording, exactly as posted, **typos kept** (e.g.
  "nessesary", "liqudidty", "visability", "likley", "capured",
  "enscapulated", "preception"). Per the Week 2 convention (D3), spelling may be
  corrected only in paraphrase, prose and chart-annotation transcriptions on
  the site, never inside `>` quotes.
- Chart annotations are transcribed in "double quotes" exactly as drawn.
- *Analyst note* = Claude's observation, not mentor teaching, not for
  publication unless approved.
- `L##` = line numbers in `raw.md`. `Img N` = `images/image N.jpg`.
- "Week 3 Task M" is **not** standalone Task M (`src/content/tasks/M/`) and not
  Week 1/2 Task M.

---

## 1. Source verification

| Check | Result |
|---|---|
| Completeness | One continuous post, L13-L71. Starts with the Week heading, ends with the closing "Primed now for ... RR extraction." Nothing appears truncated in the text. No Discord reply markers, no student messages, no user notes. |
| Images | 21 referenced (Img 133-153), 21 imported, byte-verified (`cmp`). 20 via `mentor-source.mjs apply`; Img 142 copied by hand (see next row). None missing, none stale, none skipped. |
| Label typo | L49 reads "iamge 142" (typo). The script's pattern does not match it, so it reported a numbering gap at 142 and an unmatched `image 142.jpg` in Downloads (same download minute as 141/143). The chart is a **3hr** chart, exactly the slot between 4hr (Img 141) and 50 min (Img 143) in the stated sequence "12hr,7hr,5hr,4hr,3hr,50 min". Resolved: L49 = Img 142. `raw.md` L49 left unlinked and untouched (never hand-edit the source); the file is in `images/`. |
| Image/text matching | All 21 viewed. Img 133-135: screenshots of text (not charts), each placed after the statement it expands. Img 136-147: the zones walkthrough; timeframes read from each chart header: 12h (136), 7h (137-139), 5h (140), 4h (141), 3h (142), 50 (143-147), exactly the stated list at L39. Img 148-153: TFS + liquidity; 30 (148-150), 45 (151), 10 (152), 1 (153). No label or order corrections needed apart from the 142 typo. |
| Instrument | Every chart header: "Gold Spot / U.S. Dollar ... FOREXCOM" (XAUUSD). The text never names an instrument. |
| Chronology / date | No date in the source. *Inferred only:* last price 3,274.24 on Img 136, 141, 143 (same snapshot), price range ~3,190-3,440, consistent with late June 2025 and with Weeks 1-2 (also inferred June 2025). Do not publish a date. |
| Non-mentor text | None. |
| Links | None referenced. |

---

## 2. Source structure and chronology

One post, in this order:

| Part | Lines | Content |
|---|---|---|
| Heading | L13 | "Week 3: Liquidity  Foundational stage" |
| Intro | L15-L17 | "basic review ... for all"; "muse over the following statements"; research it yourself |
| Five statements | L19-L35 | Liquidity definition; banks hunt retail / we hunt banks; banks engineer retail patterns (+Img 133); price only moves due to liquidity (+Img 134); news is an excuse for volatility (+Img 135); liquidity tells us the final intention (LAOL to LAOL) |
| Application 1: zones | L37-L54 | "First drawing our zones (12hr,7hr,5hr,4hr,3hr,50 min in this illustration)"; Img 136-147 |
| Application 2: TFS + liquidity | L56-L63 | "Then add TFS ... And basic 30 min + liquidity"; Img 148-153 |
| The task | L65-L67 | "Now backtest intently like so ..."; 30 sessions + 10 LTF price points |
| Closing | L69-L71 | repetitions, working memory, rest; daily backtesting base; RR extraction |

No deadline, no scope change, no correction to earlier Tasks.

### Task boundary map

The mentor does **not** number Tasks in Week 3 (Weeks 1-2 used "Task 1:",
"Task 2:"). There is one instruction block (L65-L67) containing **two
separately counted deliverables** in one sentence:

> For minimum repetition go over 30 sessions (30 min + so easier), and 10 specific price points on the LTF (choose 2 TF below 15 min)

- Deliverable A: 30 sessions, 30 min and above.
- Deliverable B: 10 specific price points on the LTF, on two timeframes below
  15 min.

L65 introduces both ("on a session basis , or zoom into particular important
price areas") and L65's last sentence ("As you advance, go to the lower
timeframes / increase in intensity of refinement") bridges A to B. Everything
else in the Week (L13-L63, L69-L71) is shared Week teaching. How to split this
into site Tasks is decision **D1**.

---

## 3. Week overview and learning progression

Week 3 adds the third layer of the backtesting picture: **zones (Week 1) →
TFS (Week 2) → liquidity (Week 3)**. The mentor's own summary (L71):

> But this comprehensive outlook of zones, TFS and liquidity - you will use in your daily backtesting- really reading banks intentions and thinking about the true premium areas to enter alongside them.

and (L67):

> This should now be the base of how you backtest.

So Week 3 is framed as the combined, default backtesting method, not a
one-off exercise. It builds on:
- standalone Task 1 (unmanipulated doji, big wick to fill: the "basic"
  liquidity he marks here);
- standalone Task 2/3 and the Terminology page (LAOL, core liquidity, FU,
  attempted FU, x3 negation, HCS);
- Week 1 (zone types, refinement, expiry, "fade");
- Week 2 (established TFS POI; the 30 min stop for intraday+ focus).

It sets up: lower-timeframe refinement ("As you advance, go to the lower
timeframes"), "core LTF liquidity and advanced entry model TS" (Img 151), and
"extra ordinary potential of RR extraction" (L71).

"Foundational stage" (L13) and "a basic review of week 3 for all" (L15)
indicate this is the foundational/public level of the liquidity topic.
*Analyst note:* it may imply a fuller version exists for the advanced stage
(cf. Misc *Earning the Advanced Stage*), but he does not say so. Do not state
it.

---

## 4. Week teaching (shared): the statements (L15-L35)

### 4.1 Intro (L15-L17), verbatim

> I try to be fair in giving a basic review of week 3 for all. You must muse over the following statements. Presented are the general facts pertaining to liquidity application. Explore the perspectives further on your own.

> The nessesary information is given , now build from your research ability- studying this intense topic will certainly increase your knowledge and hone your intuition (seeing past the veil of a deep manipulation that transforms current world perspective)

Label: Instruction (study/"muse over") + Teaching. The parenthesis ties
trading liquidity to his worldview theme (Misc *Worldview*, *Fundamentals*).

### 4.2 The five statements

Each begins with "." in the source (his bullet). Quote all exactly; these are
his definitions and rules for the topic.

**S1 - Definition (L19)**

> Liquidity = "where orders exist to be consumed ,hunted, or used for movement"

Label: Definition. This is the first explicit definition of *liquidity* itself
anywhere on the site (Terminology defines core liquidity and LAOL; Task 1
defines doji/wick). Note he puts the definition in quotation marks himself.

**S2 - Who hunts whom (L21)**

> Banks hunt retail liquidity. We hunt the liquidity of the banks shown in their trace via decoding of FU. The hunters become the hunted xd

Label: Teaching. "decoding of FU" links to Terminology · FU. Publish without
"xd" (house convention: chat mannerism dropped).

**S3 - Banks engineer retail patterns (L23) + Img 133**

> Banks control the engineering of retail patterns, ultimately due to their ability to control price from their zones (they can open and close orders to make price fluctuate in a planned fashion)

Label: Teaching / interpretation. "from their zones" links to Reference ·
Zones ("banks order power", Week 1).

**Img 133** (text screenshot, 🧠 "Think of this:"):
- "If they manipulated *too obviously* → loss of faith → capital flight"
- "If markets were *truly fair* → they couldn't print, front-run, or exploit scale"
- "They maintain just enough **illusion of fairness** to: / Keep the fiat system credible / Encourage retail participation / Disguise theft as "market reality""

Demonstrates: why manipulation must stay plausible. Label: Opinion /
worldview (the "theft", "print" and fiat-credibility framing is his broader
banking critique, cf. Misc *Worldview*, *Fundamentals*). Complete (no
scroll cut-off).

**S4 - Price only moves due to liquidity (L27) + Img 134**

> Price only moves due to liquidity. Be that due to actual trapped retailers (their money to be taken), or true fundamental factors (if they don't move price they let retailers win / destabilise USD due to arbitrage) ,  or the fact that price must eventually trend to take the liquidity of a range.

Label: Rule / teaching. Three sources of liquidity-driven movement: trapped
retailers; true fundamentals (with his reason: not moving would let retailers
win or destabilise USD through arbitrage); ranges that must eventually trend.

**Img 134** (text screenshot):
- "◆ *Retail Doesn't Die in a Range — It Accumulates.*"
  - "Ranges build **hope**. Traders place more stops, widen their risk, double down."
  - "But this creates "**liquidity saturation.**" At some point, there is so much built-up pain to harvest — a move becomes *inevitable*."
  - "**Trending = liquidation.** Without trend, banks don't get full access to retail losses."
- "Also:"
- "◆ *Ranging distorts the RR map.*"
  - "In a range, too many LTF traders begin *winning*."
  - "Eventually, there's a *need* to wipe out built-up retail accuracy."

Demonstrates: the third clause of S4 ("price must eventually trend to take the
liquidity of a range"). A "↓" scroll button at the bottom shows the screenshot
was cut at that point: more text may have followed. Label: Teaching.

**S5 - News (L31) + Img 135**

> All news is an excuse for volatility. Banks know are prepared well before. The only instance of true fundamental is generally a surprise attack of war that directly affects USD value , else market impact is manipulated well before.

Label: Teaching / interpretation (strong claim; attribute). "Banks know are
prepared" is presumably "Banks know and are prepared"; keep verbatim in the
quote, paraphrase can read "banks know and are prepared well before".
Directly continues Misc *Fundamentals* ("news reinforces a liquidity-derived
bias, doesn't create it"): cross-link.

**Img 135** (text screenshot, ✳️ heading):
- "*Price doesn't move because of the fundamental — it moves to make the fundamental look believable to the masses.*"
- "Banks use the **expectation** of fundamentals to: / Justify the moves they already plan / **Manipulate timing** of entries/exits / Trap those trading lagging macro news"
- "They already know the macro narrative. What they *need* is:"
- "◆ **Market justification for manipulation.** / A narrative to trigger herd behavior / A psychological "cover" for liquidity sweeps / A way to make volat[ility] look "natural""

The last line is partly hidden by the "↓" scroll button (screenshot cut; more
may have followed). Transcribe the hidden word as "volat[ility]". Label:
Teaching / interpretation.

**S6 - What liquidity tells us (L35)**

> Liquidity tells us the final intention. The exact perspective of banks , the pinpoint contrarian (where retailers lose the most) true reversal (LAOL to LAOL across all TFS settings - macro,scalp,intraday,swing, extreme swing)

Label: Rule / teaching. Echoes "Price moves from LAOL to LAOL" (Terminology ·
LAOL). *Analyst note:* his five "TFS settings" here (macro, scalp, intraday,
swing, extreme swing) are not the same five names as Week 2's TFS categories
(LTF, scalp, intraday, swing, strongest longterm swing). Keep verbatim; do not
map them (see U3).

(The source has five "." bullets after the definition; "six statements"
counting the definition. Present as "the definition + five statements" or
simply as the list in order.)

### 4.3 Provenance of Img 133-135

*Analyst note (inferred, not stated):* the layout (emoji headings, ◆ bullets,
italic/bold emphasis, the circular "↓" scroll-to-bottom button) matches the
ChatGPT mobile app. He has shared ChatGPT answers before and endorsed using it
to "ask better questions" (Misc *Trading Psychology · Using ChatGPT*). He posts
them without comment, as illustrations of his statements. Presentation is
decision **D3**. If captioned as ChatGPT, say "appears to be" unless the user
confirms.

---

## 5. Week teaching (shared): application 1, zones (L37-L54, Img 136-147)

Verbatim lead-in:

> And now in application
>
> First drawing our zones (12hr,7hr,5hr,4hr,3hr,50 min in this illustration):
>
> Spotting the banks orders origin that started the true moves , refined areas that started their subsequent TFS decisions.

"in this illustration" = these timeframes are his example set, not a mandated
list. All XAUUSD, same snapshot (last 3,274.24). The sequence is one top-down
zone mark-up, HTF → 50 min, each chart carrying the zones from the TFs above.
This closely parallels Reference · Zones · *HTF marking sequence* and
*Full zone mark-up for a NY session*; it adds new rules on overlap limits,
extension vs new zones, fading, and removal.

| Img | TF | Annotations (exact) | What it demonstrates |
|---|---|---|---|
| 136 | 12hr | "12hr HCS zone" (×5 labels); "Weakest att fu zone (only used 3hr +)"; "*Broken HCS zone already includes within it the broken FU wick" | The HTF base: mostly 12hr HCS zones; one weakest ATT FU zone (3hr+ rule, as Reference · Zones); a broken HCS zone can already contain a broken FU wick, so no separate zone is needed |
| 137 | 7hr | "7hr broken FU wick zone" (arrows to two zones, upper area); "7hr broken HCS zone" (×2); "7h Broken weakest ATT FU zone" (arrows to two zones); "7hr broken FU wick zone" (lower left) | 7hr zones added under the 12hr zones: all four zone types except body-in-wick |
| 138 | 7hr | "7hr broken FU wick zone"; "Instead of drawing a new zone we can extend the 12hr to include this refinement" | **Rule:** extend an existing HTF zone to include a nearby refinement rather than drawing a new zone |
| 139 | 7hr | "(matters most for its aligned TF reaction)" ↓ "At least fade visability of larger HTF zones" ↓ "Extra refinement - not always necessary to mark out- Dont have too many overlaps (max 4, ideally 3) / Especially when we are on the HTF with much more important ITF refinement yet to go" | **Rules:** a zone matters most for the reaction on its own TF; fade (reduce visibility of) larger HTF zones as you refine; limit overlaps to **max 4, ideally 3**; don't over-refine on the HTF when ITF refinement is still to come. "ITF" not defined (presumably intermediate TF; U4) |
| 140 | 5hr | "Remember we are  drawing zones after they have formed (Task 1) / Live time would differ and more focused around the session range PA / We aim to capture the refined zones that started subsequent HTF TFS"; "5hr broken FU wick zone"; "5hr broken HCS zone"; "5hr broken FU wick zone (refined in main HTFTFS zone)" | **Framing:** hindsight marking as in "(Task 1)", *inferred* = Week 1 Task 1 (HTF zones over past price; D6); live marking focuses on the session range; the aim is the refined zone that started the next HTF TFS (echoes L41) |
| 141 | 4hr | "Adjustment" (arrow to the top zone's edge); "4hr broken weakest ATT FU zone"; "4hr Body in wick zone- but this is extreme refinement / More likley used live time if we didnt have any other notable zone in the area" | Zone edges get adjusted as lower TFs refine; body-in-wick on 4hr = "extreme refinement", more for live use where no other notable zone exists |
| 142 | 3hr | "We can refine further to this broken 3hr FU"; "Some timeframes will have more zones than others -all depends on placement"; "3hr broken HCS zone" + "Only active after this break" (short black line at the break level); "3hr broken FU wick zone"; "3hr broken weakest ATT FU zone"; "New 3hr broken HCS zone" | Refining the top zone to a 3hr FU; zone count per TF varies with placement; an HCS zone is **only active after the break** (Reference · Zones · *When a zone becomes active*) |
| 143 | 50 min | "We have fewer 1hr/50 min HCS zones in this area. We mark a few - but dont overdo refinement / The picture is enscapulated"; "50 min broken HCS zone" (two labels, three arrows) | 50 min (the 1hr-class TF): only a few zones; "don't overdo refinement"; the picture is already captured ("encapsulated") |
| 144 | 50 min | "Lets remove this zone for visibility now that refinement is drawn"; "Can also remove this one or remove visibility not to show on minutes TF"; "And where did this reaction occur from?" (arrow at a sharp low ~3,296) | **Rules:** remove a parent zone once its refinement is drawn; or hide it on minute TFs. Poses a question answered in 145-146 |
| 145 | 50 min | "Untested refined broken 50 min HCS zone" (three small ↓ arrows over the candles forming it) | Identifies the untested refined 50 min HCS zone (~3,292-3,296) |
| 146 | 50 min | "Untested refined broken 50 min HCS zone"; "True reaction capured" (at the low ~3,296, with the zone extended right) | **Answer to 144:** the sharp reaction came from that untested refined 50 min HCS zone |
| 147 | 50 min | "Final zone refinement complete."; "50 min broken HCS zone" | End of the zone stage |

Img 144 → 146 is a question-and-answer pair. On the site, present 144's
question, then 145-146 as the answer (or a `details.practice-answer`, the
Reference · Zones practice pattern; D5).

---

## 6. Week teaching (shared): application 2, TFS + liquidity (L56-L63, Img 148-153)

Verbatim lead-in (L56):

> Then add TFS (bank order pressure - their signature of how much they want to move price- the more one understands liquidity the better understanding of their exact intentions) And basic 30 min + liquidity (unmanipulated doji, big wick to fill, ATT FU, breakout):

"bank order pressure - their signature of how much they want to move price"
is a new phrasing of TFS worth quoting on the TFS page (cf. Week 2 "the
signature of the directional energy release").

Same XAUUSD data, now on 30 min and below. Horizontal black lines mark
liquidity levels; teal lines mark EST TFS POI (prices shown on the axis).

| Img | TF | Annotations (exact) | What it demonstrates |
|---|---|---|---|
| 148 | 30 min | Header: "Now lets look at basic 30 min + TFS and HTF liquidity / The same applies for LTF TFS and liquidty (and LTF zones) - with extra refinement / We only mark Big wick to fills (unfilled= sudden reaction entices retailers) and unmanipulated dojis / Breakout Liquidity is also an option- but not as important(Some kind of breakout will eventually have to occur) / ↑ / Advanced - mainly used for liquidity grab and further refine obvious concentrated area in line with full picture / (As with ATT FU liquidity)". Lines: "Wick to fill" (top, ~3,394), "Unmanipulated doji" (~3,385), "Big Wick to fill" (~3,359), "Unmanipulated doji" (~3,344) | **Basic** liquidity = big wicks to fill + unmanipulated dojis only. Breakout and ATT FU liquidity = **advanced**, used for the liquidity grab and to refine the obvious concentrated area. Same method applies to LTF with extra refinement |
| 149 | 30 min | "Marking /understanding more advanced breakout/ATT FU Liquidity now"; "30 min EST TFS POI" (×2: teal lines 3,387.67/3,384.65 and 3,357.74/3,352.59); "Breakout" (~3,364); "ATT FU" (×2: ~3,358 and ~3,347); plus the 148 lines | Adds the advanced liquidity types and the two 30 min established TFS POI on the way down |
| 150 | 30 min | Top: "This is liquidiy grab that started the move / So we can refer to the target as "the last area of liquidty"" (arrows to the top wick-to-fill level / high); right: "Gets refined lower Every reversal starts from it (the liquidity target once taken opposite liquidity now overpowers)"; other labels as 149 | **Defines LAOL visually**: the liquidity grab at the high that started the move down = "the last area of liquidity"; it gets refined on lower TFs; every reversal starts from it, because once that target is taken the opposite liquidity overpowers |
| 151 | 45 min | "45min EST TFS POI" (arrow to the high area); "Already 3 clear EST POI for entry wave in this move to the downside"; "Zones, HTF TFS, EST TFS, major liquidity taken , Major liquidity to target"; "Directional outlook - entries still need refinement but with a similar process (more focus on core LTF liquidity and advanced entry model TS)"; lines "Wick to fill", "Unmanipulated doji" (×2), "Big Wick to fill" (×2) | The **checklist summary** of the combined picture: zones, HTF TFS, EST TFS, major liquidity taken, major liquidity to target → directional outlook. Entries need LTF refinement ("core LTF liquidity", "advanced entry model TS" - not yet taught) |
| 152 | 10 min | "Yes we have unmanipulated doji liquidity. / But its all about placement - future target and to to reinforce retail preception / We have more major Liquidty to the downside, 30 min EST TFS POI, zone reaction, HTF TFS"; "Failed FU - ADV" (line ~3,377); "10 min unmanipulated doji" (~3,371); "This is also a type of doji liquidity yet not as major (partially manipulated)"; "30 min big wick +10 min unmanipulated doji" (~3,358); "The most major liquidity target is the manipulated doji preceded by a failed FU" (arrow to the ~3,358 candle) | Weighing liquidity on both sides: upside doji liquidity exists but is placement for "future target" and reinforcing retail perception; the downside is more major (EST TFS POI, zone reaction, HTF TFS). Introduces **partially manipulated doji** (lesser) and a **failed FU** marked as advanced. See **U1** on "manipulated doji" |
| 153 | 1 min | "1 min x3 negation + HCS" (at the high ~3,387.7; teal lines 3,387.74/3,387.06); "30 min EST TFS POI- look at the complete Liquidity picture here- Which side is more major? / Bank decide to sell, chosen due to fundamentals , enabled via their zones order power, / but after carefully engineering liquidity, and their execution shown first in their TFS/TS positioning"; "Breakout filled mostly" (~3,382.6); "Unmanipulated doji" (~3,376.4); unlabelled short lines at ~3,378.1, ~3,377.0, ~3,379.9 | The 30 min EST TFS POI seen on 1 min: a 1 min x3 negation + HCS at the high, breakout liquidity "filled mostly", the question "Which side is more major?", and his causal chain: **fundamentals choose the direction → zones' order power enables it → liquidity is engineered first → execution shows first in TFS/TS positioning** |

*Analyst note:* "TS" (Img 151, 153) appears in Terminology/TFS pages already
(e.g. "TS/TFS" in the LAOL definition). Not redefined here.

### New or sharpened terms from this batch

| Term | Source | Status on site now | Recommendation |
|---|---|---|---|
| Liquidity | S1 (L19) | Not defined | New Reference *Liquidity* page, top |
| Basic vs advanced liquidity | L56, Img 148 | Not stated | Liquidity page |
| Breakout liquidity | Img 148-150, 153 | Not defined (Core Breakout Liquidity appears in the worked example) | Liquidity page + Terminology pointer |
| ATT FU liquidity | Img 148-149 | Attempted FU defined; "liquidity" use not | Liquidity page + Terminology pointer |
| Liquidity grab | Img 148, 150 | Not defined | Liquidity page |
| Partially manipulated doji | Img 152 | Not defined | Liquidity page |
| LAOL (visual definition) | Img 150 | Terminology says "LAOL has no definition chart of its own" | Extend Terminology · LAOL with Img 150 (D7) |
| TFS = "bank order pressure" | L56 | Not quoted | One line on TFS page · *What TFS is* |
| Zone overlaps max 4, ideally 3; extend vs new; remove/hide parent zones | Img 138, 139, 144 | Not stated | Zones page · *Priority and refinement* (or Liquidity page walkthrough with pointer) |
| "fade" = reduce visibility | Img 139, 144 | Week 1 **U8**: "verbatim, no gloss" | D8 |

---

## 7. The task (L65-L71)

Verbatim, all load-bearing:

> Now backtest intently like so - you now have a comprehensive outlook - on a session basis , or zoom into particular important price areas. Pay attention to the small details. Every answer to analysis can be found in liquidity manipulation (and thus bank true order trace). Don't confuse yourselves but rather tailor to your understanding. As you advance, go to the lower timeframes / increase in intensity of refinement

> This should now be the base of how you backtest. For minimum repetition go over 30 sessions (30 min + so easier), and 10 specific price points on the LTF (choose 2 TF below 15 min)

> The previous repetitions may be hard for some - but that is how it is intended. To jump-start your working memory. The actual effects will be seen weeks later (after your mind truly soaks in the information- and it should be mentioned, some minds need more rest than others, especially when doing multiple repetitions).

> But this comprehensive outlook of zones, TFS and liquidity - you will use in your daily backtesting- really reading banks intentions and thinking about the true premium areas to enter alongside them. Primed now for an extra ordinary potential of RR extraction.

Labels: L65-L67 Instruction; L69 Teaching/encouragement (with the rest
caution: Warning-lite); L71 Teaching.

### Consolidated requirements

| | Deliverable A (sessions) | Deliverable B (LTF price points) |
|---|---|---|
| Exact wording | "go over 30 sessions (30 min + so easier)" | "10 specific price points on the LTF (choose 2 TF below 15 min)" |
| Count | 30 sessions (minimum: "For minimum repetition") | 10 price points (minimum) |
| Timeframes | "30 min +" (his example: 12hr → 50 min zones, 30/45 min TFS + liquidity) | Two TFs below 15 min, student's choice (his example: 10 min and 1 min) |
| What to mark | Zones → TFS → liquidity ("this comprehensive outlook of zones, TFS and liquidity"); basic liquidity = big wicks to fill + unmanipulated dojis | Same method on the LTF "with extra refinement" (Img 148 header); "zoom into particular important price areas. Pay attention to the small details" |
| Method | "like so" = the Img 136-153 walkthrough | same |
| Deadline | None given | None given |
| Instrument | Not stated (examples XAUUSD) | Not stated |
| Session type | Not stated (Week 1 used NY; do not infer) | - |
| Progression | "As you advance, go to the lower timeframes / increase in intensity of refinement" | |

---

## 8. Ambiguities and decisions for the user

**D1 - Task split.** He did not number Tasks.
- (a) **Recommended:** two Week 3 Tasks, marked as an editorial split (as
  standalone Task 3's "3.1" label was): Task 1 "Session Liquidity Backtest
  (30 sessions, 30 min +)" `target: 30, unit: "sessions"`; Task 2 "LTF Price
  Points (10, two TFs below 15 min)" `target: 10, unit: "price points"`. Fits
  the Week pages' Assignment | My Work pairing and gives each count its own
  progress tracker.
- (b) One Task with both parts; My Work tracks only one count (the schema has
  a single `target`).

**D2 - Where the walkthrough and statements go.** Per the destination test
they are taught technical framework, not deliverables.
- (a) **Recommended:** new Reference page `reference/liquidity/` (order 6)
  holding the statements, the zones → TFS → liquidity walkthrough (Img
  136-153 inline) and the term list; Week 3 `week.md` `study` → this page; the
  Task pages link to it and do not re-teach it (Week 2 pattern).
- (b) Put the walkthrough on the Week 3 landing/Task page, statements on
  Reference.

**D3 - Img 133-135 (text screenshots, likely ChatGPT).**
- (a) **Recommended:** transcribe their text on the Liquidity page under each
  statement (as a short indented list, attributed "He posted this alongside
  it:"), with the screenshot in a collapsed `details.response-gallery`
  (supporting-image rule). Caption "Screenshot shared by the mentor (appears to
  be a ChatGPT answer)".
- (b) Inline full-size images. (c) Raw-only (loses content he chose to post).

**D4 - Img 133 framing.** "Disguise theft as 'market reality'", fiat
credibility: worldview-flavoured. **Recommended:** keep on the Liquidity page
beside S3 (he placed it there), attributed as his posted view, plus a one-line
cross-link to Misc *Fundamentals* / *Worldview*. No fact-status labelling
needed beyond attribution (opinion, not a factual claim).

**D5 - Img 144 question.** **Recommended:** show 144 with its question, then
the answer (145-146) inside `details.practice-answer` "Show the answer",
matching Reference · Zones practice. Alternative: show all three in sequence.

**D6 - "(Task 1)" in Img 140.** **Recommended:** transcribe verbatim and add
an italic note linking Week 1 Task 1 (HTF Zones, marked after they formed),
worded "presumably". Standalone Task 1 (doji/wick) does not fit "drawing
zones".

**D7 - LAOL definition chart.** **Recommended:** extend Terminology · LAOL:
replace "LAOL has no definition chart of its own" with a sentence + link to
the Liquidity page's Img 150 section (image lives once, on the Liquidity page).

**D8 - "fade" (Week 1 U8).** Img 139 "At least fade visability of larger HTF
zones" and Img 144 "remove visibility not to show on minutes TF" are strong
evidence that "fade" means reducing a zone's visibility on the chart (lower
opacity / hide on lower TFs). **Recommended:** add a short, attributed
italic note on Zones (where U8 is shown) citing these two annotations, still
not presented as his definition. Alternative: leave U8 untouched.

**D9 - Zone rules from Img 138/139/141/143/144.** **Recommended:** add a
compact bullet list "More refinement rules (Week 3)" to Zones · *Priority and
refinement* with a link to the Liquidity walkthrough (extend vs new zone;
max 4 overlaps, ideally 3; fade/remove parent zones once refined; body in
wick on 4hr = extreme refinement; fewer zones on 1hr/50 min, "dont overdo
refinement"). Alternative: keep them only in the walkthrough.

### Unresolved (show as unresolved; do not infer)

- **U1** Img 152: "The most major liquidity target is the manipulated doji
  preceded by a failed FU". Everywhere else the *unmanipulated* doji is "the
  most major form of liquidity" (Task 1), and the arrow points to the level
  labelled "30 min big wick +10 min unmanipulated doji". Possibly a slip for
  "unmanipulated", or a deliberate point (a doji becomes the major target once
  a failed FU sits before it). Transcribe verbatim with a neutral italic note;
  worth asking the mentor.
- **U2** Basic vs advanced list: L56 lists "unmanipulated doji, big wick to
  fill, ATT FU, breakout" as "basic 30 min + liquidity", while Img 148 says
  "We only mark Big wick to fills ... and unmanipulated dojis" and calls
  breakout/ATT FU liquidity "Advanced". Present both as written; for the Task,
  basic = doji + wick, advanced optional.
- **U3** "TFS settings - macro,scalp,intraday,swing, extreme swing" (S6) vs
  Week 2's five categories: names differ; do not map.
- **U4** "ITF" (Img 139): not defined (presumably intermediate TF).
- **U5** Instrument, session type, deadline: not stated.
- **U6** "advanced entry model TS" (Img 151), "core LTF liquidity": not
  taught; joins the open "advanced entry models" thread.
- **U7** Img 134 and 135 were cut off by the screenshot (scroll button); any
  text below is not in the source.

---

## 9. Excluded / consolidated material

- "xd" (L21): chat mannerism, dropped (house convention). The phrase "The
  hunters become the hunted" is kept.
- Leading "." bullet markers: rendered as a list.
- Nothing else excluded. No logistics, no react lines, no student material, no
  user notes.

---

## 10. Classification summary

| Material | Label | Destination |
|---|---|---|
| L13-L17 heading + intro | Instruction (study) / Teaching | Week 3 `week.md` summary + Liquidity page intro |
| S1 definition | Definition | Reference Liquidity (+ Terminology pointer) |
| S2, S3, S4, S6 | Teaching / rule | Reference Liquidity |
| S5 news | Teaching / interpretation (attributed) | Reference Liquidity + cross-link Misc Fundamentals |
| Img 133 | Opinion / worldview (attributed) | Reference Liquidity (collapsed) |
| Img 134, 135 | Teaching (his posted explanation) | Reference Liquidity (collapsed) |
| Img 136-147 zones walkthrough | Worked example + rules | Reference Liquidity (inline); rules summarised on Zones |
| Img 148-153 TFS + liquidity | Worked example + definitions | Reference Liquidity (inline) |
| L65-L67 | Instruction | Week 3 Task(s) |
| L69-L71 | Teaching / encouragement | Week 3 `week.md` (and a line on each Task page) |

---

## 11. Implementation architecture recommendation

(Decision for the user: D1/D2 especially.)

### Week 3 pages (existing Weekly Programme infrastructure; no new code expected)

- `src/content/weeks/3/week.md`
  - `title: "Liquidity"` (heading shows "Week 3: Liquidity"; mention
    "Foundational stage" in the summary or as the first line, verbatim).
  - `summary`: Week 3 adds liquidity to zones (Week 1) and TFS (Week 2): the
    combined outlook that becomes the base of all backtesting; one post with
    statements to study, a zones → TFS → liquidity walkthrough, and the
    repetitions.
  - `keyQuote`: '"This should now be the base of how you backtest."' (alt:
    the liquidity definition).
  - `study`: label "Liquidity", href "/reference/liquidity/", note: he asked
    for the statements to be mused over and researched ("You must muse over
    the following statements ... Explore the perspectives further on your
    own.").
  - Body: `## How the two Tasks fit` (A = sessions 30 min +, B = LTF price
    points; "As you advance, go to the lower timeframes"); `## On the
    repetitions` (L69 paraphrased + key phrases quoted; L71 quote).
- `src/content/weeks/3/task-1/task.md` (per D1a): title "Session Liquidity
  Backtest (30 sessions)", short "Zones + TFS + liquidity · 30 sessions",
  `target: 30`, `unit: "sessions"`, `mineGuide`: one entry per session; each:
  zones HTF → 50 min, TFS (EST TFS POI), basic liquidity (big wicks to fill,
  unmanipulated dojis) on 30 min +, the directional outlook (Img 151
  checklist), notes. Body: part-of line + "not standalone/Week 1-2 Task 1"
  disambiguation, `## The task` (L65 + L67 in `>` as the formal deliverable),
  editorial-split note (italic), `## At a glance` table (from §7), link to the
  Liquidity walkthrough.
- `src/content/weeks/3/task-2/task.md`: title "LTF Price Points (10 points)",
  short "LTF refinement · 10 price points", `target: 10`, `unit: "price
  points"`, `mineGuide`: one entry per price point; two TFs below 15 min; the
  HTF context it sits in, LTF liquidity/TFS/zones with extra refinement,
  notes. Body analogous; point to Img 152-153 as his LTF example.
- No `mine/` entries (no user work yet).
- Images: none on the Task pages (they link to the Reference walkthrough), so
  `src/assets/weeks/3/` is not needed unless D2b is chosen.

### New Reference page `src/content/reference/liquidity/index.md` (order 6)

Title: "Liquidity: Statements, Types & the Complete Picture" (alt: "Liquidity").
Sections:
1. `## What liquidity is` - S1 in `>` + one-line context (first formal
   definition; builds on Task 1's doji/wick).
2. `## The statements` - intro quote (L15-L17), then S2-S6 each in `>`, with
   Img 133/134/135 transcribed + collapsed after S3/S4/S5 (D3). S5 links Misc
   Fundamentals. S6 links Terminology · LAOL.
3. `## Liquidity types: basic and advanced` - Img 148 header transcribed;
   table: unmanipulated doji / big wick to fill (basic; link Task 1 defs) vs
   breakout / ATT FU liquidity (advanced; "liquidity grab", refine the
   concentrated area) + partially manipulated doji (Img 152) + U2 note.
4. `## The complete picture: a worked example` - intro (L37-L41, L56 quotes)
   - `### Step 1 · Zones, 12hr → 50 min` - Img 136-147 inline, each with its
     transcribed annotations; 144 question + practice-answer (D5); D6 note.
   - `### Step 2 · TFS and liquidity, 30 min` - Img 148, 149, 150 (LAOL
     definition, anchor `#the-last-area-of-liquidity`).
   - `### 45 min: the directional outlook` - Img 151 (the checklist).
   - `### 10 min: which side is more major?` - Img 152 + U1 note.
   - `### 1 min: the bank's execution` - Img 153 (causal chain).
5. `## Unresolved` (short list: U1-U4, U6).
6. Related line.

Image mapping (all to `src/assets/reference/liquidity/`, inline at full
width with lightbox except 133-135 collapsed):

| Source | Site filename | Section |
|---|---|---|
| Img 133 | `statement-illusion-of-fairness.jpg` | Statements (S3), collapsed |
| Img 134 | `statement-ranges-accumulate.jpg` | Statements (S4), collapsed |
| Img 135 | `statement-fundamentals-narrative.jpg` | Statements (S5), collapsed |
| Img 136 | `zones-01-12hr.jpg` | Step 1 |
| Img 137 | `zones-02-7hr.jpg` | Step 1 |
| Img 138 | `zones-03-7hr-extend.jpg` | Step 1 |
| Img 139 | `zones-04-7hr-overlaps.jpg` | Step 1 |
| Img 140 | `zones-05-5hr.jpg` | Step 1 |
| Img 141 | `zones-06-4hr.jpg` | Step 1 |
| Img 142 | `zones-07-3hr.jpg` | Step 1 |
| Img 143 | `zones-08-50min.jpg` | Step 1 |
| Img 144 | `zones-09-50min-remove.jpg` | Step 1 (question) |
| Img 145 | `zones-10-50min-untested-hcs.jpg` | Step 1 (answer) |
| Img 146 | `zones-11-50min-reaction.jpg` | Step 1 (answer) |
| Img 147 | `zones-12-50min-final.jpg` | Step 1 |
| Img 148 | `liquidity-01-30min-basic.jpg` | Step 2 |
| Img 149 | `liquidity-02-30min-advanced.jpg` | Step 2 |
| Img 150 | `liquidity-03-30min-laol.jpg` | Step 2 (LAOL) |
| Img 151 | `liquidity-04-45min-outlook.jpg` | 45 min |
| Img 152 | `liquidity-05-10min-placement.jpg` | 10 min |
| Img 153 | `liquidity-06-1min-execution.jpg` | 1 min |

Alt text: TF + the key annotation, as in the tables in §5-§6 (alt doubles as
the lightbox caption).

### Extensions to existing pages

- **Terminology** (`reference/terminology/`): LAOL section: replace "LAOL has
  no definition chart of its own." with a pointer to Liquidity · the last
  area of liquidity (D7); *Defined elsewhere*: add "Liquidity", "Breakout
  liquidity / ATT FU liquidity", "Partially manipulated doji" → Liquidity page;
  title unchanged; Related + Liquidity.
- **Zones** (`reference/zones/`): D9 bullet list in *Priority and refinement*;
  D8 note at U8; Related + Liquidity.
- **Timeframe Strength** (`reference/timeframe-strength/`): *What TFS is*: one
  line quoting "bank order pressure - their signature of how much they want to
  move price" (Week 3); Related + Liquidity.
- **Rules of analysis** / **Worked example 3000**: Related + Liquidity only.
- **Task 1** (standalone): Related/pointer line: doji and big wick are the
  "basic" liquidity of Week 3 → Liquidity page. Optional.
- **Misc Fundamentals** (`misc/fundamentals-usd-banks-and-gold/`): one
  sentence + link at the "news reinforces bias" point: Week 3 statement "All
  news is an excuse for volatility ..." → Liquidity · statements.
- **Week 2** `week.md`: no change needed (Weeks index lists Week 3
  automatically). Check the home/Weeks index picks up Week 3.

### Styling

No new CSS expected: `.assignment-body` (Reference/Task bodies),
`details.response-gallery` (collapsed screenshots), `details.practice-answer`
(D5), existing lightbox.

### Threads

- Closes: Terminology's "LAOL has no definition chart"; Week 1 U8 "fade"
  (partially, if D8a).
- Opens / extends: "advanced entry model TS", "core LTF liquidity" (join
  "advanced entry models"); U1 "manipulated doji preceded by a failed FU"
  (ask the mentor).
- Still open: "x3 entry model", "x3 by x3", Trump thread, Week 1's 3
  fundamentals segments, Week 2's "more on this when we speak about TS".

### Implementation may reopen the source only for

- U1 (Img 152 arrow target), if the user asks for a closer reading.
- Any doubt about an annotation's exact wording (all transcribed in §5-§6).

---

## 12. Decisions needed (summary)

1. **D1** Two Week 3 Tasks (editorial split: 30 sessions / 10 LTF price
   points) or one?
2. **D2** New Reference `liquidity/` page for statements + walkthrough?
3. **D3/D4** Img 133-135: transcribe + collapsed screenshot, captioned "appears
   to be a ChatGPT answer"? Keep Img 133's "illusion of fairness" beside S3?
4. **D5** Img 144 question with 145-146 as a hidden practice answer?
5. **D6** "(Task 1)" in Img 140 → presumably Week 1 Task 1 note?
6. **D7** Update Terminology · LAOL to point at the Img 150 definition?
7. **D8** Add an evidence note to Week 1's U8 "fade"?
8. **D9** Add the Week 3 zone-refinement rules to Zones · *Priority and
   refinement*?

---

## 13. Approved decisions (AUTHORITATIVE - overrides §8, §11, §12)

User approval, 2026-09-30. Where anything above conflicts, this section wins.
`/mentor-implement` builds from this section, using §4-§7 for content and
transcriptions.

### 13.1 Week 3 structure: ONE Assignment, two Parts (overrides D1)

The mentor did not number Tasks in Week 3. Do **not** publish "Task 1" /
"Task 2" or any "Task N" label for Week 3. Structure:

- **Week 3: Liquidity, Foundational Stage**
- **One Assignment**, with two required Parts:
  - **Part A**: "go over 30 sessions (30 min + so easier)"
  - **Part B**: "10 specific price points on the LTF (choose 2 TF below 15 min)"
- **One My Work** area tracking both Parts separately: `0 / 30 sessions` and
  `0 / 10 price points`.
- Part A/Part B are editorial labels for the two components of one sentence;
  say so once in an italic note. The quoted instruction stays verbatim.

Route/content approach (internal id acceptable, published label not):
- Content: `src/content/weeks/3/week.md` + `src/content/weeks/3/task-1/task.md`
  (internal slug `task-1` only, because `src/lib/weeks.ts` ids are
  `<week>/task-<M>`). Routes: `/tasks/weeks/3/` (landing, one Assignment | My
  Work pair), `/tasks/weeks/3/task-1/assignment/`, `/tasks/weeks/3/task-1/mine/`,
  future `/tasks/weeks/3/task-1/mine/<entry>/`.
- The Week pages hard-code "Task {number}" in: `[week]/index.astro` (pair
  heading), `[wtask]/assignment.astro` (title, breadcrumb, prev/next),
  `[wtask]/mine.astro` (title, breadcrumb), `[wtask]/mine/[entry].astro`
  (title, breadcrumb), `[wtask]/index.astro` (redirect link text). Minimal,
  reusable generalisation (preferred; Weeks 1-2 must render unchanged):
  - `weekTasks` schema: optional `label` (e.g. `"Assignment"`). A small helper
    (e.g. `weekTaskLabel(entry)` in `src/lib/weeks.ts`) returns `label` if set,
    else `Task M`; use it in all five places. Week 3 sets `label:
    "Assignment"`.
  - `weekTasks` schema: optional `parts: [{ key, label, target, unit }]`
    (e.g. `{key: "A", label: "Part A · Sessions", target: 30, unit:
    "sessions"}`, `{key: "B", label: "Part B · LTF price points", target: 10,
    unit: "price points"}`). When `parts` is set, the landing card and My Work
    page show one progress line per part.
  - `weekWork` schema: `entrySchema.extend({ part: z.string().optional() })`
    so future My Work entries count toward their Part (only for `weekWork`;
    do not change `entrySchema` itself).
  - Keep `target`/`unit` behaviour unchanged for Weeks 1-2.
  - Record the new fields in
    `.claude/skills/mentor-implement/reference/site-conventions.md`.
- Title (frontmatter): "Liquidity Backtesting: 30 Sessions + 10 LTF Price
  Points" (or similar, no "Task"); `short`: "Zones + TFS + liquidity · 30
  sessions + 10 LTF points". `mineGuide`: one entry per session (Part A) or
  per price point (Part B), tagged with its part; Part A entry = zones HTF →
  50 min, EST TFS POI, basic liquidity (big wicks to fill, unmanipulated
  dojis) at 30 min +, the directional outlook (Img 151 checklist), notes; Part
  B entry = the two sub-15 min TFs, the HTF context, LTF zones/TFS/liquidity
  "with extra refinement", notes.
- No `mine/` entries (no user work yet; no fabricated work).
- The disambiguation line on the Assignment page: this is Week 3's
  Assignment, separate from standalone Tasks 1-3 and from Week 1/2 Tasks.

Assignment page body (enough context to do the work, no duplication of the
Reference page):
1. Part-of line + "Study [Liquidity] first" pointer.
2. `## The assignment` - L65 and L67 in `>` (formal deliverable); italic note
   on the editorial Part A/Part B labels.
3. `## At a glance` - table from §7 with separate Part A / Part B columns
   (count, timeframes, what to mark, method "like so" → Liquidity worked
   example, no deadline, instrument not stated / examples XAUUSD, session type
   not stated, progression "As you advance, go to the lower timeframes /
   increase in intensity of refinement").
4. `## What "like so" means` - 3-5 lines: zones (12hr → 50 min) → TFS → basic
   30 min + liquidity, with links to the Liquidity page steps; the Img 151
   checklist quoted ("Zones, HTF TFS, EST TFS, major liquidity taken , Major
   liquidity to target"); basic vs advanced liquidity note (U2).
5. `## On the repetitions` - L69 and L71 (quoted or close paraphrase with key
   phrases quoted), or put this on `week.md` and link. One place only.
No images on the Assignment page.

`week.md`: `title: "Liquidity"`; summary mentions "Foundational stage"
verbatim; `keyQuote: '"This should now be the base of how you backtest."'`;
`study` → `/reference/liquidity/` with the "muse over the following
statements ... Explore the perspectives further on your own." note. Body:
`## How it builds` (zones Week 1 → TFS Week 2 → liquidity Week 3; L71 quote).
No "How the two Tasks fit" section.

### 13.2 Reference `liquidity/` (D2 approved)

New `src/content/reference/liquidity/index.md`, `order: 6`, as §11 (sections
1-6), holding the reusable theory, definition, statements and the full
walkthrough. Images to `src/assets/reference/liquidity/` per the §11 mapping
table (all 21 images live here only).

### 13.3 Img 133-135 (D3/D4 approved)

Supporting material: transcribe the useful content under the statement each
follows (133 → S3, 134 → S4, 135 → S5); screenshots collapsed in
`details.response-gallery`. Neutral label, e.g. summary "Screenshot shared by
the mentor (appears to be a ChatGPT-generated answer)" and an intro such as
"He posted this alongside it (it appears to be a ChatGPT answer, shared as
research material):". Not presented as mentor-authored technical proof. Note
the cut-off of 134/135 (U7) briefly.

### 13.4 Img 144-146 practice reveal (D5 approved)

Img 144 shown with its question "And where did this reaction occur from?";
Img 145-146 inside `details.practice-answer` with summary "Show the answer",
so the reader can attempt it first.

### 13.5 "(Task 1)" in Img 140 (D6 amended)

Transcribe verbatim. Add at most: *"(Task 1)" appears to refer to Week 1 Task
1 (HTF zones marked after they formed); the chart does not say which Task.*
Never state it as fact.

### 13.6 LAOL (D7 approved)

Terminology · LAOL: replace "LAOL has no definition chart of its own." with a
pointer to Liquidity's Img 150 section as his visual explanation of "the last
area of liquidity". Image stays on the Liquidity page only.

### 13.7 "fade" (D8 amended)

On Zones where U8 appears: add an italic note that Img 139 ("At least fade
visability of larger HTF zones") and Img 144 ("remove visibility not to show on
minutes TF") **suggest** "fade" means reducing a zone's visual prominence /
visibility, and that he never defines the term explicitly. Keep U8 as
unresolved (no definition).

### 13.8 Zone refinement rules (D9 approved)

Add "More refinement rules (Week 3)" to Zones · *Priority and refinement*:
extend an existing HTF zone to include a refinement instead of drawing a new
one (Img 138); "Dont have too many overlaps (max 4, ideally 3)" and don't
over-refine on the HTF (Img 139); a zone "matters most for its aligned TF
reaction" (Img 139); remove or hide a parent zone once its refinement is drawn
(Img 144); 4hr body in wick = "extreme refinement", more for live time (Img
141); fewer 1hr/50 min zones, "dont overdo refinement" (Img 143); some TFs
have more zones than others, "all depends on placement" (Img 142). Link each
to the Liquidity walkthrough.

### 13.9 TFS phrase (approved)

TFS · *What TFS is*: add one line quoting L56 "bank order pressure - their
signature of how much they want to move price" as his Week 3 description,
alongside (not replacing) the existing definition.

### 13.10 Fundamentals pointer (approved)

Misc Fundamentals, at the "news reinforces a liquidity-derived bias" point:
one sentence + link to Liquidity · statements for "All news is an excuse for
volatility ...".

### 13.11 Manipulated vs unmanipulated doji (U1 amended)

Preserve both exactly, no correction, no assumed typo, no reconciliation:
- Week 3 (Img 152): "The most major liquidity target is the manipulated doji
  preceded by a failed FU".
- Task 1: the unmanipulated doji is "The most major form of liquidity (HTF,
  pure doji)".
Neutral italic note on the Liquidity page (10 min section) and in its
Unresolved list: the two statements differ and the source does not explain
the difference. Do not use the "possibly a slip" wording from §8.

### 13.12 Other

- Student-identifying screenshots: none in this batch (all 21 are the
  mentor's charts or text screenshots). The raw-only rule stays for future
  batches.
- "xd" raw-only (§9).
- Other extensions as §11: Terminology *Defined elsewhere* + Related; Zones
  Related; TFS Related; Rules of analysis and Worked example 3000 Related only;
  standalone Task 1 optional pointer (doji/big wick = Week 3 "basic"
  liquidity).
- Unresolved on the site: U1 (as 13.11), U2 basic vs advanced list, U3 "TFS
  settings" names, U4 "ITF", U5 instrument/session type/deadline not stated,
  U6 "advanced entry model TS" / "core LTF liquidity", U7 screenshot cut-offs.
