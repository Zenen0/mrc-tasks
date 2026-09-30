# Analysis - Week 1 (Zones)

Claude's interpretation of `raw.md` + `images/`. `raw.md` is the untouched
source (only standalone image-reference lines were linked by the import
script; nothing else changed). This file is the handoff for
`/mentor-implement`. Implementation should not need to reopen `raw.md` or the
images except for the points listed in §15 "Unresolved - check against source".

Conventions in this file:

- `> quote` = mentor wording, **verbatim, typos kept**. Typos are not fixed
  inside quotes here. The publication typo list is in §13.4.
- "Chart annotations" = the mentor's own text on his charts, transcribed
  verbatim.
- *Analyst note* = Claude's observation or inference. It is not mentor
  teaching and is not for publication unless §15/§17 approves it.
- `L##` = line numbers in `raw.md` (as displayed by `cat -n`; the image lines
  are now `![image N](<./images/image N.jpg>)`). `Img N` =
  `images/image N.jpg`.
- **"Week 1 Task N" is never standalone Task N** (`/tasks/N/`,
  `src/content/tasks/N/`). Standalone Tasks 1-3 are separate, earlier,
  historical assignments. This file says "standalone Task N" whenever it
  means the old ones.

---

## 1. Source status

### 1.1 Raw integrity

| Check | Result |
|---|---|
| Header | Standard `mentor-new` week header (L1-11), ends with `---`. |
| Body | L13-247. Starts at the Week title "Week 1 : Zones" and ends with the ChatGPT clarification. No visible truncation of mentor text. |
| Script edits | 54 standalone lines `image 44`...`image 97` rewritten to markdown image links. Script confirmed "all other lines unchanged". |
| Manual handling | **L29 `iamge 43`** (typo in the paste) is not matched by the script's label pattern. **The line was left unchanged, as instructed.** `~/Downloads/image 43.jpg` was copied by hand into `images/` and byte-verified with `cmp` (identical). The line still reads `iamge 43`, so it will not render as an image in raw.md. That is correct; raw.md is not "fixed". |
| Inline mentions (not converted) | L156 `(my note: linking to image 82)` and L240 `(my note: linking to image 87)`. These are the user's notes, not mentor text. |
| `images/.gitkeep` | Removed by the script. |

### 1.2 Images

- **55 images** in `images/`: `image 43.jpg` to `image 97.jpg`, continuous, no
  gaps and no repeats.
- 54 matched by the script (all `OK`: none MISSING, AMBIGUOUS, STALE or
  DUPLICATE). One (`image 43`) imported by hand, as above.
- Every image was viewed. All the charts are **XAUUSD (Gold Spot / U.S.
  Dollar, FOREXCOM, TradingView)**. 11 images are Discord screenshots of other
  students' questions or of channel messages, and 1 is a ChatGPT text screenshot.
- No label corrections were needed. Every chart's own timeframe label fits
  the surrounding text and sequence. The one order point (Img 65 7 min, Img 66
  1 min, Img 67 10 min, so the 10 min comes last) is deliberate: Img 67 is a
  closing summary chart. See §8.

### 1.3 Non-mentor text in raw.md

- L156 `(my note: linking to image 82) - Yes it will be better for personal review.`
  The user's note says the mentor text "Yes it will be better for personal
  review." is his reply to Img 82.
- L240 `(my note: linking to image 87) - ---`. It says the following ChatGPT
  clarification (L241-247) refers back to Img 87.
- Img 68, 69, 72-75, 82-85 are **other students'** Discord messages. Img 81 is
  a screenshot of **the mentor's own** replies in the backtesting channel.
- The mentor appears as "@Sensei" in students' mentions (Img 82, 84, 85) and
  as "Mr Casino" in Img 81. Same person.

### 1.4 Dating (inferred, low to medium confidence)

Nothing in raw.md carries a date. Evidence from the images:

- Most HTF teaching charts (Img 44-56, 64, 70-78) show a last price of
  **3,310.59**. XAUUSD closed around there on Fri 6 June 2025, so these charts
  were most likely prepared on the weekend of **7-8 June 2025**.
- A student's chart (Img 68) is stamped "Jun 08, 2025". Another student's
  phone screenshot (Img 75) shows "8 Iyun" (8 June).
- Img 57 is labelled "Starting from NY session 07/06/25". 7 June 2025 was a
  Saturday, so there was no NY session. The charts in the session sequence
  (Img 57-67) show prices of about 3,356-3,390 falling to 3,310. That fits
  the NY session of **Fri 6 June 2025**, not the 7th. *Analyst note:* this is
  probably a date slip in the annotation. It does not matter for learning.
  Publish the annotation verbatim, with no correction (§15, decision D10).
- The "today's NY session" mark-up (Img 92-97) shows live candle timers and
  prices of about 3,320-3,345. It is a weekday **after** 8 June 2025. The
  exact date cannot be determined.
- L236 mentions "the events since yesterday" (unspecified). This cannot be
  dated reliably, so do not publish a date for it.

**Recommendation:** publish no dates for Week 1 beyond "June 2025
(inferred)" in PROJECT_STATE / analysis only. The site does not need a date.

---

## 2. Executive overview

Week 1 is **one topic: Zones**. It is Mr Casino's mechanical method for
marking the "blocks" of banks' true orders that hold price up in the present,
and for refining them top-down from the higher timeframes (HTF) to the 1 min.

It teaches:

1. **Theory**: zones are the largest blocks of banks' true orders. "The real
   money is always in the present". Past moves are deactivated zones.
2. **Four zone types**, each a manipulated candle: the broken FU wick zone,
   the broken HCS zone, the broken weakest ATT FU zone (= "failed FU") and the
   broken body-in-wick orderblock. They are ranked in an order of strength.
3. **Rules**: activation by body break; expansion to nearby manipulation;
   refinement within HTF zones; natural equal spacing; expiry after 1 (FU wick,
   weakest ATT FU) or 2 (HCS) same-TF reactions; what counts as a reaction.
4. **Three levels of use**: the HTF (the main flow of orders), the 7/10/15 min
   (confirm true POIs and refine HTF zones) and the 1 min (strong FU zones:
   the exact final orders).
5. **Two worked demonstrations** (the mentor's "exercise" 1 and "exercise
   2"). They are the models for Tasks 1 and 2.
6. **Three formal Tasks**, all labelled by him as "Task 1:", "Task 2:" and
   "Task 3:". Each is a volume backtesting exercise that climbs from HTF
   history to session-level refinement.
7. A Q&A and feedback phase with rule clarifications, a live-session "full
   zone mark-up process" and application notes.
8. A non-technical **reflection on questioning and self-sabotage**, with a
   ChatGPT clarification. This is Misc material.
9. Logistics: no deadline, "ideally ... no longer than 2 weeks", share
   practice in the backtesting channel, and Week 2 stays on schedule.

---

## 3. Week 1 chronology map

| Phase | Lines | Images | What it is | Label |
|---|---|---|---|---|
| A. Week title | L13 | - | "Week 1 : Zones" | Heading |
| B. Theory | L15-23 | - | Why zones matter: banks' true orders, "The real money is always in the present" | Teaching |
| C. Candlestick language: the 4 zone types | L25-33 | 43-47 | Zone types with definition charts | Definition / teaching |
| D. Four rules | L35-43 | - | Activation, expansion, refinement, spacing | Rule |
| E. Three methods | L45-55 | 48, 49 | HTF; 7/10/15 min; 1 min | Teaching |
| F. "Every entry will fall into these zones" (**exercise 1**, HTF demonstration) | L57-65 | 50-56 | 18hr to 3hr top-down over ~2 months of price action. Img 56 calls it "this exercise" | Worked example (model for Task 1) |
| G. **"Session basis (exercise 2)"** | L67-79 | 57-67 | Top-down for one NY session: HTF untested zones, then the outcome, then 7/10/1 min refinement | Worked example (model for Task 2) |
| H. Review instructions | L81 | - | Share practice in #backtesting-results; review together; "take it one at a time" | Instruction (logistics + pacing) |
| I. **Task 1** | L83 | - | 2 years of HTF zones | **Formal deliverable** |
| J. **Task 2** | L85 | - | 10 days of NY price action | **Formal deliverable** |
| K. Notes on both tasks | L87-93 | - | Body-in-wick optional; clear markings; practice; "intended for your deeper studies" | Instruction / warning |
| L. Q&A and feedback | L95-173 | 68-86 | Student questions (screenshots) and the mentor's answers, one practice exercise, his channel feedback | Clarification / Q&A / optional practice |
| M. Live-time application notes | L175-186 | - | Task 1 (months) vs one session; 11hr too vague for a session; 50 min "sweet spot"; 4 dot rules | Teaching / rule |
| N. Reflection on questioning | L188-206 | 87 | "Avoid making things unnecessarily difficult", 80/20, arrogance/apathy | Misc (psychology) |
| O. **Task 3** | L208-216 | 88-91 | 10/7 min zones + LTF HCS refinement, 30 sessions; deadline note | **Formal deliverable** + worked charts |
| P. Full zone mark-up process for "today's NY session" | L223-234 | 92-97 | Final clarity rule + 6 annotated charts (11hr to 5 min review) | Worked example / rule |
| Q. Schedule | L236-238 | - | Week 2 stays on schedule; 3 fundamentals/geopolitics segments to follow | Context / logistics |
| R. ChatGPT clarification | L240-247 | (87) | "surrender" clarified; how to use ChatGPT | Misc (rationality) |

*Analyst note:* phases L and M sit between Task 2 and Task 3 in the paste.
The Discord timestamps in the screenshots ("Yesterday at 19:03", "07:39",
"13:20") show that the Q&A ran over at least two days. Whether any of the Q&A
came after Task 3 cannot be known. The source order is treated as
authoritative. The Q&A answers are general zone rules and apply to all three
Tasks, so exact timing does not change any requirement.

### 3.1 Q&A pairing (phase L), reconstructed

| Q | Question (paraphrased; asker in raw only) | Mentor answer | Answer images |
|---|---|---|---|
| Q1 | Img 68: a student's 11hr chart with many zones, some labelled "not activ": "is my marking correct or is it the right path?" | L97, L99 | - |
| Q2 | Img 69: "Why were these wick marked as a zone? I can't see a FU ..." (about the "Untested - mechanical marking" zone on the mentor's 7hr chart, Img 58) | L103, L105 | Img 70, 71 |
| Q3 | Img 72: a student's chart of a zone that "here becomes active" | L111 ("Correct marking...") | - |
| Q4 | Img 73: "why it wasn't broken?" about the mentor's 3hr chart (Img 60: "Not broken yet - not active"). The student drew a line and asked "This candle closed below?" | L115 | - |
| Q5 | Img 74: "sometimes Mr. Casino marks the entire wick, and other times he only marks the part of the wick that wasn't touched ... what is the correct method?" (about the mentor's 14hr chart, Img 51: "Just free part" vs "All the wick") | L119, L121 | - |
| Q6 | Img 75: "What should we pay attention to when multiple zones overlap?" (a student's 1D chart labelled "Attfu broken", "F. Neg. Broken", "Body inside") | L125-131 | - |
| - | Practice exercise set by the mentor | L135-150 | Img 76-80 |
| Q7 | Img 81: the mentor's own feedback to a student in #backtesting-results (transcribed in §6.1.5) | Img 81 text | - |
| Q8 | Img 82: "do you want us to create threads to upload in backtesting channel? Or ... just have it stored for inspection. And only questions and minimal uploads there" | L156 "Yes it will be better for personal review." | - |
| Q9 | Img 83: "we only mark untested zone?" / "is there actually a difference between tested and untested zones in terms of strength?" | L160 | - |
| Q10 | Img 84: "Is it possible to complete the task within another timeframes (H12 H4 H3 H2 H1 M30 M15 M5 M1)?" | **No direct answer in the paste.** Partly covered by Task 3 (L210): "Use 15 min, 5 min,3 min,1 min if only access to standard timeframes". See §15 U3. | - |
| Q11 | Img 85: "How to define/decide a reaction ... Is there a condition/criteria" | L165-171 | Img 86 |

*Analyst note on Q8:* the question offers two options. "Yes" most naturally
answers the first: create threads in the backtesting channel. "Better for
personal review" supports that reading. This is an **inference**. Publish it as
"share your practice in #backtesting-results (a personal thread is fine)", or
leave out the thread detail (§15 D8).

---

## 4. Formal deliverable map

### 4.1 Result: three formal Tasks, all explicitly labelled

| Mentor label (exact) | Line | Proposed site label | Deliverable |
|---|---|---|---|
| "Task 1:" | L83 | **Week 1 · Task 1 - HTF Zones (2 years)** | Yes |
| "Task 2:" | L85 | **Week 1 · Task 2 - Session Zones (10 NY days)** | Yes |
| "Task 3:" | L208 | **Week 1 · Task 3 - 10/7 min Zones & LTF HCS Refinement (30 sessions)** | Yes |

### 4.2 How "Task 1" and "Exercise 2" were interpreted

- **Task 1 is explicit, not implicit.** L83 reads "Task 1: Complete 2 years
  of data using HTF zones ...". Before the "Task 1:" line, the material is
  teaching plus two demonstrations. None of it is phrased as an assignment.
- **"Exercise 2" is not a deliverable and is not "Task 2" itself.** It is the
  heading of the mentor's second **worked demonstration**:
  1. L67 "Session basis (exercise 2):" is followed directly by 11 of his own
     annotated charts (Img 57-67). There is no instruction to the student.
  2. The first demonstration (Img 50-56) ends with his own words on Img 56:
     "**In this exercise** we were looking comprehensively to show the power
     of zone in starting every true swing move ... That objective is met ...
     **We will refresh now and view on a session basis**". So "exercise" is
     his word for a demonstration. Img 50-56 is exercise 1 and the session
     demonstration is exercise 2.
  3. Each exercise is the **model for the Task with the same number**:
     - Exercise 1 is an HTF top-down over months ("We look at 2 month of PA
       here", Img 54) that catches "every true main swing move". **Task 1** is
       "2 years of data using HTF zones ... zones ... which start the main true
       swing moves".
     - Exercise 2 marks untested HTF zones for one NY session, shows the
       outcome (Img 64), then adds 7/10/15 min zones (Img 65, 67) and 1 min
       strong FU zones (Img 66). **Task 2** is "10 days of NY price action,
       marking out the relevant untested HTF zones ... then after viewing the
       outcome refine 7/10/15 min zones ... and 1 min strong FU zones".
- **Conclusion:** exercise 1 is the worked example for Task 1, and exercise 2
  is the worked example for Task 2. Keep the mentor's word "exercise" on the
  site, e.g. "Worked example - the mentor's 'exercise 2' (session basis)", so
  that nobody mistakes it for an extra deliverable.

### 4.3 Other assignment-like items (not deliverables)

| Item | Line | Classification |
|---|---|---|
| "What do you see in the above chart? (only 1 timeframe- fun practice exercise)" | L135 | **Optional practice** (answer given straight after, Img 77-80) |
| "Study in detail the text annotations of the following charts" | L227 | **Study instruction** attached to the full mark-up example (Img 92-97). Not a deliverable. |
| "later look comprehensively at refinement from 50 min + HTF zones also" | L214 | **Deferred / later** extension to Task 3. Not part of the 30-session count (§15 U2). |
| "share your practice in 📋backtesting-results📋" | L81 | Submission logistics (Week-level) |
| "Start by focusing on one swing low/high at a time" | Img 81 | Method advice (Task 1 especially) |

---

## 5. Week-level teaching and context

This is material that belongs to **no single Task**:

1. **The theory of zones** (L15-23). It is technical framework, so it goes to
   Reference (§7). The landing page carries a 2-3 sentence overview plus the
   key quote.
   > What are zones exactly? The theory:
   > Simply the largest "blocks" of banks true orders that hold up price in the present. The state of the floating markets are linked to them - all of the banks ability to manipulate and control price first stem from these.

   > What moves have occurred in past price action are now the past (deactivated zones that have already been met) - only the present matters and how banks decide to move price from their fresh true block of orders for a profitable outcome. The real money (billions/trillions) of the markets is always in the present. And that energy is stored within these institutional zones. From it all subsequent price movements occur dependent on the banks (loose term for real players- the Fed and co branches) intentions of manipulation based on fundamentals and the major retail liquidity trail indication.

   > Our purpose is related to practicals today. But the above passages highlights a crucial aspect to understand and explore. "The real money is always in the present".
   > "From it all subsequent price movements occur".

   The opening line also belongs on the landing page:
   > From all concepts zones can be the most fun to use. For one does not have to think when drawing them out - it is a purely mechanical process- from which one gains much information about the present state of price action at a quick glance.

2. **Review, pacing and submission** (Week-level logistics, publishable):
   > After a few repetitions of the given tasks (share your practice in ⁠📋backtesting-results📋 ) we will review together alongside any further questions. It may seem a little overwhelming as we tackle all related to this concept at once - take it one at a time. Everyone should see zones (especially HTF) fairly similar as the rules are the same.

   > Alot to take in but it is intended for your deeper studies and the full comprehsive rule based outlook on the topic. We will touch more on it with clarity in review of the tasks. A "happy" intensive backtesting now xd 🎩

   > There is no set deadline for now (It is intensive after all and I do not wish to make one rush sacrificing quality) but you will fall behind in the next segment without adequate practice. Ideally these tasks should take no longer than 2 weeks.

   *Analyst note:* the deadline sentence sits inside the Task 3 message, but
   it says "**these tasks**" (plural) and "the next segment" (Week 2). The
   natural reading is that it applies to all three Week 1 Tasks. Recommend
   showing it once on the landing page ("Pacing") and repeating it briefly on
   each Task page (§15 D6).

3. **Live-time application** (L175-186). Technical, so it goes to Reference
   Zones. It is also referenced from Tasks 2 and 3.

4. **After Week 1** (L236-238). Context:
   > I had initially planned to postpone week 2 due to the intensity of week 1 still requiring more of your attention. [...] But decided against it- we will stick to the schedule. I will do my part, and hope all of you will take your studies with maximum focus and utalize the opportunity correctly.

   > After this 3 segments will be given related to fundamentals and the current geopolitical climate (goes much more deeper than "geopolitics"). Presented may be uncomfortable truths for some, yet it is a requested and nessesary subject - we will deleve into exposing the world's manipulation from its roots. I consider it my responsibility not only for your trading growth, but to fight the disinformation agendas and prepare one for what is really coming. Then set on your own paths of great impact and free minded discussion

   Recommendation: a short "After Week 1" note on the landing page covering
   Week 2 on schedule and the three fundamentals segments to follow (attributed,
   linked to the Worldview entry's *Still to come*). The reasons for
   considering a postponement ("leak potential", "the events since
   yesterday") stay raw-only (§14).

5. **The reflection on questioning + the ChatGPT note** (L188-206, L240-247,
   Img 87). This goes to Misc (§9, §11).

---

## 6. Task-by-task deep analysis

Shared prerequisites for all three Tasks are the **zone types, rules and
methods** (§7.2: the new Reference "Zones" page). Each Task page should open
with "Study first: [Zones](...)" and not re-teach them.

### 6.1 Week 1 · Task 1 - HTF Zones (2 years)

#### 6.1.1 Mentor label and exact instruction

> Task 1: Complete 2 years of data using HTF zones (11hr-7hr-5hr-4hr-3hr-1hr-50 min). The objective is to capture the zones (with overlap refinement) which start the main true swing moves.

#### 6.1.2 Purpose

To train the eye to see that every main swing move starts from a zone, and to
mark HTF zones mechanically with overlap refinement over a long history
(volume practice). Img 56 states the demonstration's objective: "to show the
power of zone in starting every true swing move / And how to refine correct
overlap within untested larger HTF zones".

#### 6.1.3 Requirements, consolidated

| Field | Value | Source |
|---|---|---|
| Volume | "2 years of data" | L83 |
| Instrument | Not stated. Every example is XAUUSD. | *Analyst note* |
| Timeframes | "11hr-7hr-5hr-4hr-3hr-1hr-50 min" (in this order, HTF to LTF) | L83 |
| Optional higher start | "The optimal sequence to mark HTF main zones would be from : 4D-daily-18hr-15/14 hr-12hr -11hr-7hr-5hr-4hr-3hr-1hr-50 min" / "Start from 18hr ... (can skip to 11hr if managing too many TF is difficult- here we view the complete picture)" | Img 50-53 |
| Zone types on 1hr / 50 min | "Only marking HCS zones on 1hr/50 min" | Img 50-53 |
| Zone types overall | All four types (§7.2). Body-in-wick is optional: "Do not use body in wick zones if they confuse." (L87); "Beginners can ignore this / body in wick orderblocks" (L105). Weakest ATT FU only 3hr+ (L103). | L87, L103, L105 |
| Objective | "capture the zones (with overlap refinement) which start the main true swing moves" | L83 |
| What to mark (past data) | "Don't mark zones that have not produced a reaction. You are looking at past data - your goal is to capture what zones started those reactions" | Img 81 |
| What not to mark | "Do not mark the zones that are not active and your picture will be much more clear." | L97 |
| Method | "Start by focusing on one swing low/high at a time. And refine its reaction from multiple timeframes before moving to the next. As you progress you will be able to do multiple at a time." | Img 81 |
| Clarity | "Make the markings clear to you , even if you omit a few zones" (L89); "Note you are marking months of price action. Zooming into the minute timeframes will provide a larger gap between your zones for clarity" (L99) | L89, L99 |
| Screenshots / sharing | Share practice in #backtesting-results for review (L81); a personal thread there (Q8, inferred) | L81, L156 |
| Deadline | None; "ideally ... no longer than 2 weeks" (all tasks) | L216 |
| Entries / stops / targets | **None required.** Zones only. "We are not looking to predict price with zones (no RR certainty)" (L186). | - |

#### 6.1.4 Worked example: the mentor's "exercise 1" (HTF, Img 50-56)

Introduced by:
> Every entry will fall into these zones. All true moves occur from from them:

One continuous top-down demonstration on the same stretch of price action
(about 2 months to 6 June 2025; last price 3,310.59), going down the
timeframes. **Keep it in this order.**

| Img | TF | Chart annotations (verbatim) | What it shows |
|---|---|---|---|
| 50 | 18hr | "The optimal sequence to mark HTF main zones would be from : 4D-daily-18hr-15/14 hr-12hr -11hr-7hr-5hr-4hr-3hr-1hr-50 min" / "Only marking HCS zones on 1hr/50 min" / "Start from 18hr and make your way down refining each true move reaction starting from zone" / "(can skip to 11hr if managing too many TF is difficult- here we view the complete picture)" | ~6 wide 18hr zones |
| 51 | 14hr | Same sequence header. "There will always be refinement- All the way down" (arrow to a darker overlap inside a zone). "All large zones we will look to refine further / zones will be equally spaced especially in the moment of fresh session analysis". A measure tool shows "115.15 (3.50%)" from the refined zone. | More zones; first overlap refinement |
| 52 | 12hr | Same header. "Refine and adjust / See how many swing moves we have already captured" | Zones adjusted |
| 53 | 11hr | Same header. "Pure mechanicals refining true orders with precision reaction / (Remember "on the same TF". The more HTF the more power)" | Refined overlap zone at the swing low |
| 54 | 7hr | "We have caught every true main swing move already (still some refinement remaining) / Of course this is in the past so more visable. The same application in the moment / (We look at 2 month of PA here - over the session basis we will live time- LTF refinment will matter more then)". "(new HCS zone)" at a mid-chart high. "Untested FU wick zone" (bottom left). "May take an avid eye to locate but mare mechanicals (untested FU zone gives 1 reaction)" | Dense set of zones catching the swings |
| 55 | 5hr | "Note how each of these true zones are equally spaced and refined. For each zone is for its own particular new level by default" / "We zoom in now. See how there is still refinement to go / (HTF zones are hundreds of pips away and hours or days away)- there are many more refinement in between / Keep going and see how many moves are encapsulated until 50 min". Arrows mark reactions. | Equal spacing; more refinement |
| 56 | 3hr | "In this exercise we were looking comprehensively to show the power of zone in starting every true swing move / And how to refine correct overlap within untested larger HTF zones / That objective is met. / Going lower now will only refine further reactions (50 min/1hr HCS zones)- Have fun with seeing the mechanical refined reactions / We will refresh now and view on a session basis - how we refine and prime for extraction with full top down" | Ends exercise 1; hands over to exercise 2 |

Image 45 ("HCS zone rules", 1hr) and Image 44 (HCS zone, 1hr) are on the same
stretch of data and are useful companions, but they belong to the Reference
page (§7.2).

#### 6.1.5 Clarifications and feedback that apply to Task 1

- **L97** (to Q1, a student's 11hr marking): "Do not mark the zones that are not active and your picture will be much more clear. You have caught some good reactions."
- **L99**: "Note you are marking months of price action. Zooming into the minute timeframes will provide a larger gap between your zones for clarity"
- **Img 81** (the mentor's own channel feedback to a student, verbatim):
  - "Don't mark zones that have not produced a reaction."
  - "You are looking at past data - your goal is to capture what zones started those reactions"
  - "So many of these are incorrect and rushed."
  - "Start by focusing on one swing low/high at a time. And refine its reaction from multiple timeframes before moving to the next"
  - "As you progress you will be able to do multiple at a time."
- **Img 86** (1hr): "Zones are pre marked - every move encapsulated (Task 1)". This is the mentor's own label tying the 1hr view to the Task 1 method (see §7.2 "What counts as a reaction").
- **L176** (live-time notes): "we will have more zone clarity than task 1 (marking many months of data vs preparation for 1 session)".

*Analyst note (reconciled, not a contradiction):* "Don't mark zones that have
not produced a reaction" (Img 81) is about **past-data** marking in Task 1.
Task 2's "marking out the relevant untested HTF zones" is about **pre-session**
marking, where the zone's reaction is still to come. Img 56 also says
"refine correct overlap within **untested** larger HTF zones": each zone is
untested at the moment it is drawn, and in hindsight you keep the ones that
started reactions. Publish both instructions in their own Task and add a short
italic note that reconciles them (§13.2 C1).

#### 6.1.6 Final authoritative requirement (Task 1)

Across **2 years** of data, mark HTF zones mechanically on **11hr, 7hr, 5hr,
4hr, 3hr, 1hr and 50 min** (HCS zones only on 1hr/50 min; optionally start
higher from 18hr). Use overlap refinement to capture the zones that started
the main true swing moves. Mark only zones that are active and that produced a
reaction. Work one swing at a time, refining it across timeframes. Share
practice in #backtesting-results for review. No deadline; ideally within 2
weeks together with Tasks 2-3.

#### 6.1.7 Cross-links

- Reference **Zones** (new; all types and rules). Reference **Terminology**
  (FU, HCS, attempted FU).
- Standalone **Task 3** (TFS tiers "3hr - 5hr - 7hr - 11hr"; "The more HTF the
  more power" on Img 53 connects to TFS). This is a related concept, not a
  prerequisite.
- Week 1 Task 2 (next).

#### 6.1.8 Unresolved (Task 1)

- The instrument is not stated (U1). Recommend: "Examples use XAUUSD" as an
  italic note; do not state that the instrument is required.
- The standard-timeframe substitute for 11/7/5hr/50 min is not answered for
  Task 1 (U3).

---

### 6.2 Week 1 · Task 2 - Session Zones (10 NY days)

#### 6.2.1 Mentor label and exact instruction

> Task 2: Complete 10 days of NY price action , marking out the relevant untested HTF zones , without any other analysis factors, and then after viewing the outcome refine 7/10/15 min zones (chose 1 TF) , and 1 min strong FU zones to fill in the gaps / extra refinement

Followed by notes that apply to both Tasks 1 and 2 (L87-91):
> . Do not use body in wick zones if they confuse.
>
> . Make the markings clear to you , even if you omit a few zones
>
> . Practice will make perfect. Once you see it you cant unsee it. Now you learn to view the fractal model - following banks orders that make every move via a mechanical approach (based on decoded signs of manipulation).

#### 6.2.2 Purpose

To move from history to the **session**: before a NY session, mark the
untested HTF zones that frame it, with no other factors. Then look at what
happened, and fill in the gaps with LTF zones. This trains the "fractal
model": every move in the session starts from some zone.

#### 6.2.3 Requirements, consolidated

| Field | Value | Source |
|---|---|---|
| Volume | "10 days of NY price action" | L85 |
| Session | NY | L85 |
| Step 1 | Mark "the relevant untested HTF zones, without any other analysis factors" | L85 |
| Step 2 | "after viewing the outcome" | L85 |
| Step 3 | "refine 7/10/15 min zones (chose 1 TF)", so one of 7, 10 or 15 min | L85 |
| Step 4 | "1 min strong FU zones to fill in the gaps / extra refinement" | L85 |
| Zone types on 7/10/15 | All except weakest ATT FU / failed FU ("without weakest ATT FU/failed FU zones", Img 48) | Img 48 |
| 1 min zone | "We mark the full strong FU candle (breaks low and high) for the 1 min zone" | Img 49 |
| HTF TFs | Not restated. Exercise 2 uses 7hr, 5hr, 4hr, 3hr, 1hr, 50 min (Img 58-63). | *Analyst note* |
| Body-in-wick | Optional: "Do not use body in wick zones if they confuse." | L87 |
| Clarity | "Make the markings clear to you , even if you omit a few zones" | L89 |
| Entries / stops / targets | None required. | - |
| Sharing | #backtesting-results (L81) | L81 |
| Deadline | None; ideally within 2 weeks (all tasks) | L216 |

#### 6.2.4 Teaching that frames Task 2: three methods (L45-55)

> There are three methods to use zones. On the HTF, the 7/10/15 min, and the 1 min:

The full text goes on the Reference Zones page (§7.2). The Task 2 page quotes
the three one-liners and links there.

#### 6.2.5 Worked example: the mentor's "exercise 2" (session basis, Img 57-67)

Heading in the source: **"Session basis (exercise 2):"** (L67). Keep this
order. It is a single narrative: pre-session HTF, then the outcome, then LTF
fill-in.

| Img | TF | Chart annotations (verbatim) | What it shows |
|---|---|---|---|
| 57 | 1hr | "Now we refine on a session baisis. Fewer options remain for untested zones - we simply locate , refine and await true reaction / This top down will tell us the present climate of banks orders (zones reacted from for direction, expired zones to push past, or new untested)" / "Starting from NY session 07/06/25" | Clean 1hr chart before marking. Date: see §1.4 |
| 58 | 7hr | "Untested body in wick refined area" / "7hr Untested Fu wick zone" / "Untested - mechanical marking" (a lower zone) | Pre-session HTF zones. The "Untested - mechanical marking" zone is the one a student asked about (Q2) |
| 59 | 5hr | "Untested FU wick zone - evenly spaced from last zone" / "Old zone" (green, lower) | Spacing; an old zone shown in green |
| 60 | 4hr | "We already see this zone reaction prior to the session" / "And this zone reaction" / "New body in wick zone" / "Old zone" / "Untested 4hr" (lower) | Reactions already used before the session |
| 61 | 3hr | "We have enough zones here / And by default the true untested zones are equally spaced" / "Not broken yet - not active" (arrow to a wick inside the green zone) | Activation rule. This is the chart Q4 (Img 73) asked about |
| 62 | 1hr | "Refined overlap reaction" / "No other 1hr HCS zone here- full picture is refined" / "Not broken yet - not active" | Overlap refinement at 1hr |
| 63 | 50 min | "Gave 2 reactions already" / "Can fade or delete this zone - the refined zone was relevant and met" / "No relevant 50 min HCS zones - so we are done here with our main HTF zones" | Expiry by 2 reactions; end of HTF marking |
| 64 | 4hr | "Each of these HTF reactions (same TF as zones) are caught" (last price 3,310.59: **after** the session) | **The outcome**: HTF reactions confirmed |
| 65 | 7 min | "HTF zone reactions-HTF push- swing power of main true move" / "Adding 7/10/15 min zones for max clarity confirming and following the true moves of moment" | Step 3 (7 min chosen) |
| 66 | 1 min | "1 min strong Fu zones fill in the final gaps / Following the exact trail of banks orders that make up every true move in a purely mechanical marking" | Step 4 |
| 67 | 10 min | "After all is said and done... / We follow the banks orderflow with utmost precison / This is only one concept. Yet already a great advantage in our favour for extraction / They can run. But they cant hide their intentions from us). We follow it all. / The essence of the fractal scope is shown here." | Closing summary (same data at 10 min) |

*Analyst note:* Img 65-67 show 7 min, then 1 min, then 10 min. Img 67 is a
summary view, not a step out of order. The Task itself says "chose 1 TF" for
7/10/15. The demonstration shows both 7 and 10 min only to illustrate.

#### 6.2.6 Clarifications that apply to Task 2

- Q4 / L115 (activation, using Img 61): "See previous explanation. The first break of was respected with a new wick. That wick was not yet broken with a body closure below." The "previous explanation" is L111: "Correct marking. If respected via a new wick reaction and not a body closure then keep on going until the subsequent new wick is broken with a body closure".
- Q2 / L103-105 (the "Untested - mechanical marking" zone on Img 58; answer images 70-71): see §7.2 "Weakest ATT FU / failed FU".
- Img 63 "Can fade or delete this zone" and L160 expiry: expired zones are "no longer considered".

#### 6.2.7 Final authoritative requirement (Task 2)

For **10 NY sessions**: first mark the relevant **untested HTF zones only**
(no other analysis factors). After viewing the session's outcome, refine with
zones on **one** of 7/10/15 min (no weakest ATT FU zones there), then add **1
min strong FU zones** (the full candle that breaks both low and high) to fill
the gaps. Body-in-wick zones are optional. Keep markings clear even if a few
zones are left out. Share in #backtesting-results.

#### 6.2.8 Cross-links

- Reference **Zones** (three methods, rules, full NY session mark-up).
- Standalone **Task 3** "Key timing" (NY session hours). This is related
  context, not a requirement of Week 1 Task 2.
- Standalone **Task 2** (top-down analysis): a related method, the older
  4hr/15/1 min top-down. Distinct assignment.
- Reference **Rules of analysis**, rule 3 (10/15 min TS) and rule 9 (zones as
  secondary confirmations).

#### 6.2.9 Unresolved (Task 2)

- Which HTF timeframes to use is not restated (U4). Recommend "the HTF
  timeframes from Task 1 (exercise 2 uses 7hr to 50 min)" as an italic
  editorial note.

---

### 6.3 Week 1 · Task 3 - 10/7 min Zones & LTF HCS Refinement (30 sessions)

#### 6.3.1 Mentor label and exact instruction

> Task 3:
>
> Mark zones on the 10 min and 7 min now (all zones but failed ATT FU) and then refine the LTF HCS zone within. Use 15 min, 5 min,3 min,1 min if only access to standard timeframes
>
> The 10/7 min charts present some more advanced markings (additional refinement on the same timeframe- still task 1 form) . However still upon the same mechanical rules , and easier to spot (as the move has already occured). They are shared without text annotation- for you to muse over and come back to for reference.
>
> Complete examples for 30 sessions , later look comprehensively at refinement from 50 min + HTF zones also.
>
> There is no set deadline for now (It is intensive after all and I do not wish to make one rush sacrificing quality) but you will fall behind in the next segment without adequate practice. Ideally these tasks should take no longer than 2 weeks.

#### 6.3.2 Purpose

To take zone marking down to the intraday level: mark 10 and 7 min zones, then
refine the LTF **HCS** zone inside them. Img 91 says the HCS refinement is
done "only within HTF zone for final refinement". It is volume practice over
30 sessions.

#### 6.3.3 Requirements, consolidated

| Field | Value | Source |
|---|---|---|
| Volume | "Complete examples for 30 sessions" | L214 |
| Session | Not specified (Task 2 was NY; the final example is NY) | *Analyst note*, U5 |
| Timeframes | 10 min **and** 7 min (both) | L210 |
| Zone types on 10/7 | "all zones but failed ATT FU" | L210 |
| Then | "refine the LTF HCS zone within" | L210 |
| Where the refinement is done | "The current task focuses only within HTF zone for final refinement." | Img 91 |
| LTF used in his charts | 3 min (Img 90), 1 min (Img 91) | Img 90-91 |
| Standard-TF substitute | "Use 15 min, 5 min,3 min,1 min if only access to standard timeframes" | L210 |
| Form | "still task 1 form" ("additional refinement on the same timeframe") | L212 |
| Later (not yet required) | "later look comprehensively at refinement from 50 min + HTF zones also" | L214, U2 |
| Deadline | "There is no set deadline for now ... Ideally these tasks should take no longer than 2 weeks." | L216 |

*Analyst note on standard timeframes:* the most coherent reading is that 15
min stands in for the 10/7 min zone timeframes, and 5/3/1 min are the LTF on
which the HCS zone is refined. This matches his own charts: 10 and 7 min
zones, with HCS refinement shown on 3 and 1 min. It is an **inference** (U3).
Publish the sentence verbatim and add a one-line italic "appears to mean" note
only if D7 approves it.

#### 6.3.4 Charts attached to Task 3 (Img 88-91)

| Img | TF | Annotations | Role |
|---|---|---|---|
| 88 | 10 min | **None** (arrows and zones only) | "shared without text annotation- for you to muse over and come back to for reference" |
| 89 | 7 min | **None** (arrows and zones only), same data as 88 | Same |
| 90 | 3 min | "The whole FU is part of the HCS zone" / "But the refined HCS x1 is the concenrated area we will mostly see a reaction from" / "Expanded main HTF zone to include LTF HCS - captures move" / "Expanded HCS zone - full range" / "Even without the advanced 10 min body in wick refinement - the LTF HCS captures" | LTF HCS refinement within an expanded zone |
| 91 | 1 min | "Sole 1 min HCS zones have a part to play (extreme refinement and PA reading) / But context is everything - no sole confirmation is ever enough on its own / Matters only after the full story of TFS -liquidity- and TS build mastery especially / The current task focuses only within HTF zone for final refinement. / Serving more as confirmation in that final moment over prediction" | Limits of 1 min HCS; scope of the Task |

Presentation: Img 88 and 89 should be shown **large and without an
annotation list**, with a line such as "Shared without text annotation - study
them and come back to them" (his intent). Img 90-91 get annotation lists.

#### 6.3.5 Final authoritative requirement (Task 3)

For **30 sessions**, mark zones on **10 min and 7 min** (every zone type except
the failed/weakest ATT FU). Then, **within the HTF zones**, refine the **LTF
HCS zone** (his examples: 3 min and 1 min). With standard timeframes only, use
15 min, 5 min, 3 min and 1 min. Later, look at refinement from 50 min + HTF
zones as well. No deadline; ideally all Week 1 tasks within 2 weeks.

#### 6.3.6 Cross-links

- Reference **Zones**, especially "Full zone mark-up for a NY session" (Img
  92-97, posted right after Task 3 with "(and every session after)").
- Reference **Terminology** HCS.
- Standalone **Task 3** (TFS, TS: Img 91 says "Matters only after the full
  story of TFS -liquidity- and TS"). Related, and effectively a prerequisite
  for understanding, though it was not assigned as one.
- Reference **Rules of analysis**, rule 10 (final entries: "a refined HCS or
  negation POI").

#### 6.3.7 Unresolved (Task 3)

- U2: whether "later look comprehensively at refinement from 50 min + HTF
  zones also" is part of the 30 sessions or a later step. Reading: later.
- U3: the standard-TF mapping (above).
- U5: the session type (NY implied, not stated).
- U6: "refined HCS x1" (Img 90). "x1" is undefined (see §11).

---

## 7. Technical concept map

### 7.1 Concepts already on the site (Week 1 uses, extends or demonstrates them)

| Concept | Where defined now | What Week 1 adds | Action |
|---|---|---|---|
| FU | Terminology § FU | The FU **wick** as a zone type ("Broken FU wick zone", 1 main reaction); true bullish/bearish FU wick "Note where it starts from" (Img 70) | Link; the zone use goes on the Zones page |
| Attempted FU (ATT FU) | Terminology § Attempted FU (forms 1/2) | "**weakest ATT FU** wick" = "**failed FU**", a zone type, 3hr+ only, 1 reaction. Img 71: "Starting from the same place a bullish Fu would form". This matches form 2's "The candle starts from where an FU would form" | Link. Add a pointer in Terminology (§12). Equating it with form 2 is an **inference** (strong) |
| HCS | Terminology § HCS | "**Broken HCS zone**", 2 main reactions; HCS zone rules 1-3 (Img 45); "refined HCS"; LTF HCS refinement (Task 3) | Link |
| Negation / x3 negation | Terminology | Img 71: "The reasoning x3 negations do not need a full Fu close / Or how HCS zones are still activated with them". This agrees with the Terminology "(the only instance)" | Link; quote on Zones page |
| TS (true stop) | Standalone Task 3 rule 1 | "7/10/15 min TS" used with 7/10/15 min zones (L49) | Link |
| TFS | Standalone Task 3 | "TFS,TS and liquidity take priority first" (L49); "The more HTF zone we react from ... the more powerful ... (later explored with TFS)" (L180) | Link |
| POI | Used throughout, never spelled out | "confirm true POI and refine HTF zones" (L49); "confirm relevant POI (every true move starts from some zone)" (Img 48) | Link |
| Trail of liquidity | Terminology § Used on the charts | "the major retail liquidity trail indication" (L20); "Following the exact trail of banks orders" (Img 66) | Link |
| Zones as confirmation | Rules of analysis rule 9: "Zones are secondary confirmations, similar to an HCS POI—their reactions make the true move." | Full zone method. Consistent: "yet TFS,TS and liquidity take priority first" (L49); "We are not looking to predict price with zones (no RR certainty)" (L186); "no sole confirmation is ever enough on its own" (Img 91) | Pointer from rule 9 to Zones |
| Worked example 3,000 low | "4hr HCS Zone reaction - secondary confluence that makes up POI" | Shows how a zone reaction is used inside a full analysis | Optional pointer |
| Banks' control / tolerance | Misc Fundamentals | Zone theory: banks' "fresh true block of orders" hold price; "the Fed and co branches" | Related-concept link from the Zones intro |
| Timing / NY session | Standalone Task 3 § Key timing | Tasks 2-3 are session-based | Related link on Task 2 |

### 7.2 New reusable technical material: a new Reference page "Zones"

Per the destination test, the zone framework is technical trading knowledge
taught for use across trading (definitions, rules, methods, Q&A and a worked
example). It is shared by all three Week 1 Tasks, and later Weeks will build on
it. **Recommend one new Reference page** (details §10, §11). Content, in
teaching order:

**A. What zones are** (L15-23): the theory quotes from §5, with "The real money
is always in the present" as the key quote.

**B. Candlestick language: the four zone types** (L27 verbatim):
> To draw zones one must first understand candlestick language. Most of you are already familiar with them. This opportunity can be used to refresh. We have 4 variations: The broken FU wick zone, the broken HCS zone, the broken weakest ATT FU zone, and the broken body in wick orderblock. Each are a form of a manipulated candle and low (retail) liquidity by default.

Each type with its definition chart (in source order 43, 44, 45, 46, 47):

- **Broken FU wick zone**, Img 43 (7hr): "Broken FU wick zone / Holds for one main (true move) reaction on the same TF / Can hold for two but only the first is confirmed and matters most" / "Was broken with a body closure and becomes active only at this point" / "True reaction 1" / "We cant be sure this reaction is due to this zone- but likely another TF and top down reasoning" / "The main true move reaction".
- **Broken HCS zone**, Img 44 (1hr): "Broken HCS zone / Holds for two main (true move) reaction on the same TF / Can hold for three but two are confirmed and matter more" / "True reaction 1" / "True reaction 2" / "We have a few rules to cover here - study deeply first theis chart and really see the flow of the banks orders". Measure boxes: -54.14 (-1.73%), -163.93 (-5.23%), -99.35 (-3.25%).
- **HCS zone rules**, Img 45 (1hr, same data):
  - "Rule 1 : The better HCS zone does not start from an exact pivot high/low - else it is obvious as a retail type break and retest zone" / "(Rule 1) Not at exact pivot low makes this a prime zone"
  - "Rule 2: We can look to expand the HCS zone with new HCS reaction / The full range matters - any large zone we will look to refine within"
  - "Rule 3: Even a small weak ATT FU wick reaction from where the HCS would form suffices / When using only 50 min + - these areas still contain order power / And are not so obvious to retailers as they are well hidden so can be used against rule 1"
- **Body-in-wick orderblock**, Img 46 (5hr): "This candle body" / "Is within this wick" / "These candles represent the true orderblock.When the body is within the wick of the candle previous or after. / Although we do not expect the most accurate confirmed reaction from them- it shows a large clump of banks orders to be met. / A manipulated candle on their own".
- **Weakest ATT FU zone (failed FU)**, Img 47 (3hr): "The weakest ATT FU wick also counts as a zone - for one main reaction only / Matters on the 3hr + (swing Timeframes) as they still contain banks order power / Also can be classed as "failed FU"" / "Price would form or rather attempt to form an FU from these areas" / "*Note how obvious break and retest zones are not given to common supply and demand retailers".

**C. Rules** (L35-43 verbatim):
> We have a few rules to be noted:
>
> • The zone is only activated after its low (for bullish FU) or high (for bearish FU) closes with body break
>
> • We can expand our zones to include relevant close new manipulation. Understanding the full true range of banks orders.
>
> • We refine within HTF large zones. For example a 200 pip 11hr zone - price will react from further refinement overlap zone within- generally within a 20 to 50 pip range. "Refined"
>
> • True untested zones will always be naturally spaced by default. For each upholds its own level of price away from the last zone

Plus, from the Q&A (keep them together as rules):
- **Priority and refinement** (L125-131, answering Q6 on overlapping zones):
  > Two rules:
  >
  > 1) Prioritise the order of strength (HCS zones, broken FU wick zone- and body in wick/failed FU zones are secondary for additional refinement)
  >
  > 2) Note the complete zone of manipulation, but mark the most refined area , upon top down analysis prioritising the stronger area
  >
  > If a zone is too close to another , something is amiss in your zone refinement. You will expand your zone to include the full area, and find the refined area- equally spaced from the next zone (same process, expand and refine in top down)
- **Activation, wick respected** (L111, Q3): "Correct marking. If respected via a new wick reaction and not a body closure then keep on going until the subsequent new wick is broken with a body closure"; (L115, Q4) "See previous explanation. The first break of was respected with a new wick. That wick was not yet broken with a body closure below."
- **Which part of the wick** (L119-121, Q5, about Img 51): "The first zone is based on the broken HCS and the latter only the broken FU wick zone." / "The refined area is from where the HCS reaction takes place". *Analyst note:* so the zone's extent depends on its **type**: an HCS zone is drawn from where the HCS reaction takes place (the "free part"), and an FU wick zone takes the whole wick. This is a strong inference; publish his answer verbatim with the student's question paraphrased.
- **Expiry** (L160, Q9): "If the zone has been met for its subsequent reaction (HCS zone for 2 on the same TF or broken FU wick for 1 reaction) - then it is expired and no longer considered."
- **What counts as a reaction** (L165-171, Q11):
  > Price holds for a significant reaction on that same timeframe. Generally over 3 closed candles
  >
  > Consider the move in relation to the size and strength of the zone.
  >
  > I.e if price moves for a 30 pip move from a 3hr HCS zone - that barely makes a dent.
  >
  > From this base you can apply rationale thought.

  Illustrated by **Img 86** (1hr): "These "small" wick reactions matter - it is all about finding the same TF reaction to "retest" zone / Within it we will find more Fu manipulation contributing to the true reasoning for its push / We are only looking at zone reactions now." / "*(banks managing their orders- key in theory reflection)" / "New HCS zone = still active" / "Zones are pre marked - every move encapsulated (Task 1)".

  *Analyst note:* "Generally over 3 closed candles" and "barely makes a
  dent" for small moves, next to Img 86's "'small' wick reactions matter",
  can look inconsistent. They are not: Img 86 is about a same-TF wick
  **retest** of the zone (the reaction's start), and L165-171 is about
  whether the move that follows counts as significant. Present them next to
  each other and state no reconciliation beyond his words (§13.2 C3).

**D. Weakest ATT FU / failed FU in depth** (Q2, L103-105, Img 70-71, 78):
> .  Only used on the 3hr + TF , and expires after one reaction. You will have a limited usage of this zone.
>
> . Beginners can ignore this / body in wick orderblocks. Know they add to refinement. Practise the other types first- the purpose is to refine the zones that start true moves and its precision , predicted advantage to your favour

- Img 70 (3hr): "Look at this true Bullish FU wick / Note where it starts from" / "Look at this true bearish FU wick / Note where it starts from".
- Img 71 (3hr, same data): "Now look at these "weakest ATT FU wick"/ "failed FU" / Starting from the same place a bullish Fu would form / I.e low liquidty for retailers/ manipulated / Thus contains remmentants of banks orders / (only used 3hr+ due to its HTF strength)". The same annotation is given for the bearish case. "Do not use if confused - An advanced concept / Yet understand they expire after 1 reaction and only 3hr + - so we wont have many" / "The reasoning x3 negations do not need a full Fu close / Or how HCS zones are still activated with them".

**E. Three methods (levels)** (L45-55 verbatim):
> There are three methods to use zones. On the HTF, the 7/10/15 min, and the 1 min:
>
> As we want to see the main flow of orders and then use TFS, TS and liquidity to make our decision for entries alongside the banks - the HTF zone suffices. The bulk of the banks true orders that make up price. Everyday price will react from these zones, and we can purely mechanically mark them out for a predicted confirmed reaction , without any other aspect in bias
>
> The 7/10/15 zones are used in conjunction with our 7/10/15 min TS. To affirm the true areas - yet TFS,TS and liquidity take priority first. From these zones down we merely see the full picture more clear and follow the banks intentions at the macro level. Not much used to anticipate, but confirm true POI and refine HTF zones:

- Img 48 (7 min): "On the 7/10/15 min we use zones just as we would on the HTF- only at a faster pace and without weakest ATT FU/failed FU zones / However the dynamics change as they are updated and expire more frequently- and Top down analysis matters more / Mainly to see banks intentions and confirm relevant POI (every true move starts from some zone)".

> Finally on the LTF , namely the 1 min, after all previous full refinement - we locate the exact placement of the moment where banks true orders are present , awaiting final entry decision. Either a retest or break and retest or the strong FU zone - banks final decision and orders to manipulate price:

- Img 49 (1 min): "The three rules of zones apply (expand or refine zone to include other manipulation , refine HCS) / But the strong FU is what makes the area matters more and shows the bulk of final orders refinement / At this point after top down other analysis factors are our focus." / "We mark the full strong FU candle (breaks low and high) for the 1 min zone / Price will retest , or break and retest - the final bank orderblock power to move price".

  *Analyst note:* Img 49 says "The **three** rules of zones" and lists
  expand/refine/refine HCS, while L35-43 gives **four** bullet rules. His
  "three" appears to be the expand/refine/refine-HCS operations, not a
  miscount of L35-43. Publish it verbatim with no comment (§13.2 C4).

**F. HTF marking sequence**: from Img 50-53 (see Task 1): "4D-daily-18hr-15/14 hr-12hr -11hr-7hr-5hr-4hr-3hr-1hr-50 min", "Only marking HCS zones on 1hr/50 min", "can skip to 11hr". This is quoted on the Zones page too, because it is general method, and linked to Task 1's worked example.

**G. Practice: "What do you see?"** (optional practice, L133-154, Img 76-80). Recommend showing it as a practice block, with the answer charts inside a collapsible `<details>` so the reader can try first:
- Img 76 (3hr, **blank**): "What do you see in the above chart? (only 1 timeframe- fun practice exercise)"
- Img 77 (3hr, answer): "Our refinement advantage ^". Annotations: "Broken FU wick zone" (x5), "Broken weakest ATT FU/failed FU zone" (x2), "True move reaction 1" (x8+), "(other broken FU zone is expired)".
- Img 78 (3hr, same data, refinement): "Pay attention to the rule mentioned (broken HCS/ FU wick priority- Body in wick refinement)". Annotations: "If we mark the full FU + body in wick OB..." / "We capture this move" / "The full range includes both the FU wick and body in wick OB / But the FU wick is the more important refinement / Presently we are looking at comprehensive PA so only finding the most refined area" / "After 1 reaction the weakest ATT FU/failed FU expires. Only used on 3hr +" / ""weakest" - comes after all other zone types for extra refinment and location of banks remaining orders / More advanced - practise other types first".
- Img 79 (10 min, **blank**): "And again this time on the 10 min:"
- Img 80 (10 min, answer): "Fractal defined - we see the organization in what others precieve as chaos: / Following the exact flow of banks true orders in each moment , mechanically , for our first precise reaction RR advantage". Annotations: "Broken FU zone with body in wick Ob refinement" (x3), "Broken FU zone", "Reaction from refined body in wick OB within", "Extra refinement - not missing any - expires after 1 reaction / Keep an avid eye to spot".

*Analyst note:* on Img 80, "expires after 1 reaction" points at a small zone
near the top right. Its type is not labelled. It is probably a body-in-wick OB
or an FU wick zone. The source never gives an expiry rule for body-in-wick
zones. Do not generalise (U7).

**H. Live-time application** (L176-186 verbatim):
> When it comes to live-time final application, we will have more zone clarity than task 1 (marking many months of data vs preparation for 1 session) – each zone holds only for its own TF reaction, else we refine within/other zones lower.
>
> For example, one cannot simply mark out an 11hr zone and expect a reaction in the session. It is too vague. Price will react accordingly to its 11hr time-lapse (reaction can occur multiple days later). Hence, we will refine various zones all the way down to 50 min (which is the sweet spot to spot banks' true intraday/swing intentions) and lower (scalp – but not main orders holding up price).
>
> .The more HTF zone we react from (with same TF reaction), the more powerful we can expect the move to be (later explored with TFS).
>
> .The refined zones within HTF zones take priority (main power institutional levels located).
>
> .Pay attention to all reactions (zoom in) or you will miss the correct expiry of the zone
>
> .We are not looking to predict price with zones (no RR certainty) – rather, find those refined areas of assured reaction, in the moment, alongside corresponding TFS/liquidity/TS power.

(The raw text uses a curly apostrophe in "banks’"; keep it as is.)

**I. The full zone mark-up process for a NY session** (L223-234, Img 92-97):
> We finish for the topic with the full zone mark up process for today's NY session (and every session after):
>
> .Final clarity rule : Expand zones to include close manipulation, refine within HTF zones and as we go lower they fade ( as the zone is mostly active for the reaction with its subsequent TFS and we still look for refinement within larger HTF areas ).
>
> Study in detail the text annotations of the following charts

| Img | TF | Annotations (verbatim) |
|---|---|---|
| 92 | 11hr | "DEACTIVE" (x2, green zones) / "Note the limited possibility for more 11hr zones and natural equal spacing in between / Each zone is created to hold up a specific level in relation to the last zone / + Timeframe reaction possibility (11hr has only 4 possibilities daily) / There would be no need for banks to create a new zone if we already have one in the same level" |
| 93 | 5hr | "(7hr zone)" / "(7hr)" / "Rather banks and the fact "the money is in the present"- so its refinement is the primary aim for most profit (RR extraction) / Then its about refining the space in between. For in relation to the LTF we trade from - much refinement possibility / The more lower we go - the more data to fill in" |
| 94 | 3hr | "It makes sense here with plenty of space onto the next zone ( Then note corresponding TF reaction)" / "Expanded" / "And seek to refine as necessary as we go lower to 50 min" / "(7hr)" |
| 95 | 1hr | "Nothing interesting for the 1hr HCS zones here" |
| 96 | 50 min | "Final zone / Wont make sense to mark full range else it expands into previous zone" |
| 97 | 5 min | "Review post session / Every we have will the confirmed refined main true move reactions." / "Main HTF zone respected - 7/1 min refinement zone" / "LTF important manipulation- even if we have not met yet on the corresponding 1hr (still active)" / "1 min HCS refinment zones" / "5hr weakest ATT FU zone- reacted with 5hr low" |

*Analyst note:* Img 97's first line is garbled in the source ("Every we have
will the confirmed ..."). Transcribe it verbatim. Do not reconstruct it.
"11hr has only 4 possibilities daily" is his statement (24h / 11h ≈ 2.2
candles a day, so "4 possibilities" may count something other than candle
closes). Publish it as written, with no maths note.

### 7.3 Concepts demonstrated (not newly defined) in Week 1

- The top-down refinement workflow (HTF to 1 min) on real XAUUSD data.
- The "fractal model / fractal scope": every move starts from a zone at some
  TF (L91, Img 67, L148).
- Post-session review (Img 64, Img 97).
- "Refined overlap" (Img 51, 53, 62).

---

## 8. Complete image map (55 images)

Value key: **E** essential, **U** useful, **O** optional, **X** unsuitable for
the polished site (raw-only).

| Img | Content | TF | Text it belongs to | Section / Task | Value | Destination | Proposed filename |
|---|---|---|---|---|---|---|---|
| 43 | Broken FU wick zone definition | 7hr | L27 | Zone types | E | Ref Zones | `zone-broken-fu-wick-7hr.jpg` |
| 44 | Broken HCS zone definition | 1hr | L27 | Zone types | E | Ref Zones | `zone-broken-hcs-1hr.jpg` |
| 45 | HCS zone rules 1-3 | 1hr | L27 | Zone types | E | Ref Zones | `zone-hcs-rules-1hr.jpg` |
| 46 | Body-in-wick orderblock | 5hr | L27 | Zone types | E | Ref Zones | `zone-body-in-wick-ob-5hr.jpg` |
| 47 | Weakest ATT FU / failed FU zone | 3hr | L27 | Zone types | E | Ref Zones | `zone-weakest-att-fu-3hr.jpg` |
| 48 | 7/10/15 min zones | 7 min | L49 | Three methods | E | Ref Zones | `zones-7min-level.jpg` |
| 49 | 1 min strong FU zones | 1 min | L53 | Three methods | E | Ref Zones | `zones-1min-strong-fu.jpg` |
| 50 | Exercise 1: optimal sequence, start | 18hr | L57 | Task 1 WE | E | W1 Task 1 | `ex1-18hr.jpg` |
| 51 | Exercise 1 | 14hr | L57 | Task 1 WE | E | W1 Task 1 | `ex1-14hr.jpg` |
| 52 | Exercise 1 | 12hr | L57 | Task 1 WE | E | W1 Task 1 | `ex1-12hr.jpg` |
| 53 | Exercise 1 | 11hr | L57 | Task 1 WE | E | W1 Task 1 | `ex1-11hr.jpg` |
| 54 | Exercise 1 | 7hr | L57 | Task 1 WE | E | W1 Task 1 | `ex1-7hr.jpg` |
| 55 | Exercise 1 | 5hr | L57 | Task 1 WE | E | W1 Task 1 | `ex1-5hr.jpg` |
| 56 | Exercise 1 conclusion | 3hr | L57 | Task 1 WE | E | W1 Task 1 | `ex1-3hr.jpg` |
| 57 | Exercise 2 start (clean) | 1hr | L67 | Task 2 WE | E | W1 Task 2 | `ex2-01-1hr-start.jpg` |
| 58 | Exercise 2 | 7hr | L67 | Task 2 WE | E | W1 Task 2 | `ex2-02-7hr.jpg` |
| 59 | Exercise 2 | 5hr | L67 | Task 2 WE | E | W1 Task 2 | `ex2-03-5hr.jpg` |
| 60 | Exercise 2 | 4hr | L67 | Task 2 WE | E | W1 Task 2 | `ex2-04-4hr.jpg` |
| 61 | Exercise 2 "Not broken yet - not active" | 3hr | L67 | Task 2 WE | E | W1 Task 2 | `ex2-05-3hr.jpg` |
| 62 | Exercise 2 | 1hr | L67 | Task 2 WE | E | W1 Task 2 | `ex2-06-1hr.jpg` |
| 63 | Exercise 2, end of HTF | 50 min | L67 | Task 2 WE | E | W1 Task 2 | `ex2-07-50min.jpg` |
| 64 | Exercise 2 outcome | 4hr | L67 | Task 2 WE | E | W1 Task 2 | `ex2-08-4hr-outcome.jpg` |
| 65 | Exercise 2 LTF | 7 min | L67 | Task 2 WE | E | W1 Task 2 | `ex2-09-7min.jpg` |
| 66 | Exercise 2 LTF | 1 min | L67 | Task 2 WE | E | W1 Task 2 | `ex2-10-1min.jpg` |
| 67 | Exercise 2 summary | 10 min | L67 | Task 2 WE | E | W1 Task 2 | `ex2-11-10min-summary.jpg` |
| 68 | Student Q1 screenshot (11hr marking, "not activ") | - | L97-99 | Q&A | X | raw-only (student identity) | - |
| 69 | Student Q2 screenshot (crop of Img 58) | - | L103-105 | Q&A | X | raw-only | - |
| 70 | True bullish/bearish FU wick | 3hr | L103-105 | Q&A: failed FU | E | Ref Zones | `true-fu-wicks-3hr.jpg` |
| 71 | Weakest ATT FU / failed FU explained | 3hr | L103-105 | Q&A: failed FU | E | Ref Zones | `failed-fu-wicks-3hr.jpg` |
| 72 | Student Q3 chart ("here becomes active") | - | L111 | Q&A | X (O) | raw-only by default (D4) | - |
| 73 | Student Q4 screenshot (annotated crop of Img 61) | - | L115 | Q&A | X | raw-only; link Img 61 instead | - |
| 74 | Student Q5 screenshot (crop of Img 51) | - | L119-121 | Q&A | X | raw-only; link Img 51 instead | - |
| 75 | Student Q6 screenshot (1D overlap) | 1D | L125-131 | Q&A | X | raw-only | - |
| 76 | Practice chart, blank | 3hr | L135 | Practice | U | Ref Zones (practice) | `practice-3hr-blank.jpg` |
| 77 | Practice answer | 3hr | L139 | Practice | E | Ref Zones (in details) | `practice-3hr-answer.jpg` |
| 78 | Practice refinement / priority rule | 3hr | L143 | Practice | E | Ref Zones (in details) | `practice-3hr-refinement.jpg` |
| 79 | Practice chart, blank | 10 min | L144 | Practice | U | Ref Zones (practice) | `practice-10min-blank.jpg` |
| 80 | Practice answer, "Fractal defined" | 10 min | L148-150 | Practice | E | Ref Zones (in details) | `practice-10min-answer.jpg` |
| 81 | Mentor's own feedback in #backtesting-results | - | Q7 | Task 1 feedback | U (text) | **Transcribe the text** onto the W1 Task 1 page; screenshot raw-only (another student's name) | - |
| 82 | Student Q8 (threads?) | - | L156 | Logistics | X | raw-only | - |
| 83 | Student Q9 (untested?) | - | L160 | Q&A | X | raw-only | - |
| 84 | Student Q10 (standard TFs) | - | none | Q&A | X | raw-only | - |
| 85 | Student Q11 (reaction criteria) | - | L165-171 | Q&A | X | raw-only | - |
| 86 | Small wick reactions / "(Task 1)" | 1hr | L165-171 | Reaction rule | E | Ref Zones | `zone-reactions-1hr.jpg` |
| 87 | ChatGPT text: "Arrogance vs Apathy in Questioning" | - | L196-198, L240-247 | Reflection | O | Misc Psychology (collapsible, labelled as ChatGPT output), or raw-only (D9) | `chatgpt-arrogance-vs-apathy.jpg` |
| 88 | Task 3 chart, unannotated | 10 min | L212 | Task 3 | E | W1 Task 3 | `t3-10min-unannotated.jpg` |
| 89 | Task 3 chart, unannotated | 7 min | L212 | Task 3 | E | W1 Task 3 | `t3-7min-unannotated.jpg` |
| 90 | LTF HCS refinement | 3 min | L210 | Task 3 | E | W1 Task 3 | `t3-3min-ltf-hcs.jpg` |
| 91 | 1 min HCS: context and task scope | 1 min | L210 | Task 3 | E | W1 Task 3 | `t3-1min-hcs-context.jpg` |
| 92 | NY session mark-up | 11hr | L223-227 | Full process | E | Ref Zones | `ny-markup-1-11hr.jpg` |
| 93 | NY session mark-up | 5hr | L223-227 | Full process | E | Ref Zones | `ny-markup-2-5hr.jpg` |
| 94 | NY session mark-up | 3hr | L223-227 | Full process | E | Ref Zones | `ny-markup-3-3hr.jpg` |
| 95 | NY session mark-up | 1hr | L223-227 | Full process | E | Ref Zones | `ny-markup-4-1hr.jpg` |
| 96 | NY session mark-up | 50 min | L223-227 | Full process | E | Ref Zones | `ny-markup-5-50min.jpg` |
| 97 | NY session post-session review | 5 min | L223-227 | Full process | E | Ref Zones | `ny-markup-6-5min-review.jpg` |

Totals: **Ref Zones 23** (43-49, 70, 71, 76-80, 86, 92-97), **W1 Task 1: 7**
(50-56), **W1 Task 2: 11** (57-67), **W1 Task 3: 4** (88-91), **Misc: 1** (87,
subject to D9), **raw-only 11** (68, 69, 72-75, 81-85; Img 81's text is
published). 23 + 7 + 11 + 4 + 1 + 11 = 55.

Target folders: `src/assets/reference/zones/` for Ref Zones;
`src/assets/weeks/1/` for Week 1 Task images (not inside `src/content/`, to
avoid auto-galleries); `src/assets/misc/psychology/` for Img 87.

---

## 9. Existing-content relationship map

| Existing page | Relationship | Nature | Action |
|---|---|---|---|
| Standalone Task 1 - Major Liquidity | Uses FU/HCS; Week 1 L27 calls zones "low (retail) liquidity by default", in contrast with Task 1's major-liquidity doji | Related concept | None required (optional Related line) |
| Standalone Task 2 - Top-Down Analysis | Older top-down method (4hr/15/1 min). Week 1 exercise 2 is a zone top-down | Related method; distinct assignment | Optional Related line only. **Do not merge** |
| Standalone Task 3 - RR, TFS & Timing | TFS, TS, HTF true stop, TF tiers, key timing (NY) | Prerequisite concepts for using zones (L49, L180, Img 91) | Week 1 pages link to it. No edit to Task 3 needed |
| Reference Terminology | FU, ATT FU, HCS, negation, x3, trail, POI | Definitions used by Week 1 | Extend: pointer from Attempted FU; add "Zone" to "Defined elsewhere" (§12) |
| Reference Rules of analysis | Rule 9 "Zones are secondary confirmations" | Direct; Week 1 is the full method behind rule 9 | Extend: one pointer under rule 9 |
| Reference Worked example (3,000 low) | "4hr HCS Zone reaction - secondary confluence" | Worked example of a zone inside full analysis | Optional pointer (recommend: yes, one line in Related) |
| Misc Fundamentals (USD/banks/gold) | Banks' control, "banks' tolerance limit" | Related (theory of banks' orders) | Link from Zones intro (one-way); no edit |
| Misc Trading Psychology | Has the "psychology section to be updated in more depth" thread | Destination for the Week 1 reflection | Extend (§11) |
| Misc Rationality / Morality | Rationality as the fix; "Knowledge as an edge: be informed, verify everything" | Related to the ChatGPT note | Optional one-line cross-link |
| Misc Worldview | "Still to come": next posts | L238 promises 3 fundamentals/geopolitics segments | No edit now; record in PROJECT_STATE as an open thread |

No contradictions with existing Reference or Tasks were found (§13.3).

---

## 10. Proposed Week architecture (DECISION FOR THE USER)

### 10.1 Principles

- Weeks are a **separate content collection and route tree**. Nothing lives
  under `src/content/tasks/`, so there is no collision with standalone Tasks
  1-3. *Technical reason:* the `tasks` collection globs
  `src/content/tasks/**/index.md` and `taskMeta` globs `*/task.md`. A
  `src/content/tasks/week-1/...` folder would be swept into standalone subtasks,
  and `allTaskNumbers()` would produce a bogus task "week-1".
- Mirror the standalone Task conventions: an **assignment** page with the
  mentor's text, and a **mine** (My Work) page with the user's grid of
  entries, so the site feels uniform.
- One **Week landing page** is the selector (no per-Task branch page).

> **Superseded where it conflicts: §18 (approved decisions) is authoritative.**
> The final routes are `/tasks/weeks/...`, not `/weeks/...`.

### 10.2 Routes (original proposal - see §18.2 for the final routes)

```
/weeks/1/                     Week 1 landing (overview + 3 task rows of 2 cards)
/weeks/1/task-1/assignment/   Week 1 · Task 1 - mentor's assignment
/weeks/1/task-1/mine/         Week 1 · Task 1 - My Work (empty grid for now)
/weeks/1/task-2/assignment/
/weeks/1/task-2/mine/
/weeks/1/task-3/assignment/
/weeks/1/task-3/mine/
/weeks/1/task-1/mine/<entry>/ future: one My Work entry (repetition/session)
```

- `/weeks/1/task-N/` (no suffix): redirect to `/weeks/1/#task-N`, or leave it
  unbuilt. Recommend a meta-refresh redirect so the URL can be hacked. Minor.
- Optional `/weeks/` index listing all Weeks. Recommend building it: it is
  cheap and it scales.
- **Alternative (D1):** `/tasks/weeks/1/...` nests literally under Tasks. It
  works (a static `weeks` segment beats the `[task]` param), but it makes the
  URLs longer and puts two systems in one folder. The recommended option is
  `/weeks/...` with Tasks-level navigation and breadcrumbs, as below.

### 10.3 Navigation

- Top nav unchanged: **Tasks · Reference · Misc**. Week pages highlight
  **Tasks**.
- The Tasks index (home page) gets two sections:
  1. **Weekly programme**: Week cards ("Week 1 · Zones · 3 tasks"), newest
     last (or first; D2).
  2. **Standalone tasks**: the existing Task 1-3 cards, unchanged.
- Breadcrumbs: `Tasks › Week 1: Zones › Task 2 › Assignment` (and `› My
  Work`).
- On assignment pages: "← Task 1 | Task 3 →" within the Week, plus a
  "My Work for this task →" button. On My Work pages: "← Assignment".

### 10.4 Content-folder structure

```
src/content/weeks/
  1/
    week.md                 # frontmatter: title "Week 1: Zones", week: 1, summary; body = landing overview
    task-1/
      task.md               # frontmatter: title, label ("Task 1"), short, volume ("2 years"); body = assignment
      mine/                 # empty now; later <entry>/index.md + images (same schema as standalone subtasks)
    task-2/task.md, mine/
    task-3/task.md, mine/
src/assets/weeks/1/         # Week 1 assignment images (task-1/, task-2/, task-3/ subfolders)
```

Collections (in `src/content.config.ts`): `weekMeta` (`*/week.md`),
`weekTasks` (`*/*/task.md`), `weekWork` (`*/*/mine/**/index.md`, the existing
`entrySchema`). Helpers in a new `src/lib/weeks.ts`. Reuse `TaskCard`,
`SubtaskCard`, the lightbox and `.assignment-body` styles.

### 10.5 Landing page design (`/weeks/1/`)

1. Header: "Week 1: Zones" with a WEEK 1 badge (same treatment as the Task/Misc
   headers).
2. Overview (from `week.md`): 2-3 sentences + the key quote "The real money is
   always in the present", and "purely mechanical process" (L15).
3. "Study first" callout: **[Zones](/reference/zones/)** (Reference). It
   contains the types, rules, methods, clarifications, practice and the NY
   session mark-up.
4. **Task grid**: 3 rows. Each row has a heading ("Task 1 · HTF zones · 2
   years") and two cards side by side (stacked on mobile): **Assignment**
   (MR CASINO badge) | **My Work** (entry count, "Not started" when empty).
   That makes 6 cards.
5. "Pacing and review": no deadline; "Ideally these tasks should take no
   longer than 2 weeks"; share practice in #backtesting-results; "take it one
   at a time".
6. "Also from Week 1": link to the Misc Psychology section (questioning
   reflection).
7. "After Week 1": Week 2 stays on schedule; 3 fundamentals/geopolitics
   segments to follow (attributed, one line).

### 10.6 Page styling

- Week assignment pages and the Reference Zones page use the **`chart-page`**
  house style from the start (wide charts up to 1280px, prose at 820px,
  inline, original aspect ratio, lightbox). These are new templates, not
  conversions of existing ones. The site convention still asks for approval
  before applying `chart-page` to Task templates (D3).
- Standalone Tasks 1-3 are **not** changed.
- Chart annotations go as a bullet list under each image (existing
  convention). Unannotated charts (Img 88, 89, 76, 79) get no list.
- `> blockquote` on assignment pages = formal deliverable callout (existing
  convention).

### 10.7 Scalability to Week 2+

- A new Week is a new folder `src/content/weeks/<N>/` with `week.md` +
  `task-<M>/`. The landing page renders however many Tasks exist (1..n rows).
  A Week with a different number of deliverables needs no template change.
- Week-level teaching that is technical keeps going to Reference (new pages or
  extensions). The landing page only summarises it and links to it.
- `/mentor-new week <N>` → `/mentor-analyse` → `/mentor-implement` stays the
  workflow. Update `site-conventions.md` with the Week pattern at
  implementation time.

---

## 11. Proposed page list

| # | Page | Classification | Purpose | Source material | Images | Links |
|---|---|---|---|---|---|---|
| P1 | `/weeks/1/` **Week 1: Zones** | Week landing | Overview, study-first link, 3 Task pairs, pacing, after Week 1 | L13-23 (summary), L81, L93, L216, L236-238 (summary) | none | Ref Zones; all 6 Task pages; Misc Psychology; Worldview |
| P2 | `/weeks/1/task-1/assignment/` **Week 1 · Task 1 - HTF Zones (2 years)** | Task assignment | Instruction, requirements table, exercise 1, feedback | L57, L83, L87-93, L97-99, Img 81 text, L176 (one line), Img 50 text | 50-56 | Ref Zones (types, sequence); Terminology; standalone Task 3 TFS; W1 T2 |
| P3 | `/weeks/1/task-1/mine/` **My Work - Week 1 · Task 1** | My Work | Empty grid + "What goes here" | none | none | P2 |
| P4 | `/weeks/1/task-2/assignment/` **Week 1 · Task 2 - Session Zones (10 NY days)** | Task assignment | Instruction, requirements, three methods (short), exercise 2, activation clarification | L45-55 (short quotes), L67, L85-91, L111, L115 | 57-67 | Ref Zones (methods, activation, NY mark-up); standalone Task 3 timing; W1 T1/T3 |
| P5 | `/weeks/1/task-2/mine/` | My Work | Empty; 10 sessions | none | none | P4 |
| P6 | `/weeks/1/task-3/assignment/` **Week 1 · Task 3 - 10/7 min Zones & LTF HCS Refinement (30 sessions)** | Task assignment | Instruction, requirements, unannotated charts, LTF HCS charts, deadline | L208-216 | 88-91 | Ref Zones (NY mark-up, "Final clarity rule"); Terminology HCS; standalone Task 3 TFS/TS; Rules rule 10 |
| P7 | `/weeks/1/task-3/mine/` | My Work | Empty; 30 sessions | none | none | P6 |
| P8 | `/reference/zones/` **Zones: Types, Rules & Refinement** (order 4) | Reference (new) | The complete zone framework: theory, 4 types, rules, failed FU, three methods, HTF sequence, clarifications (Q&A), reactions and expiry, practice, live-time application, full NY session mark-up | L15-55, L103-105, L111-131, L135-171, L175-186, L223-234; Img 50 sequence text | 43-49, 70, 71, 76-80, 86, 92-97 (23) | Terminology; Rules (3, 8, 9, 10); worked example; standalone Task 3; W1 landing + Tasks; Misc Fundamentals |
| P9 | Misc **Trading Psychology** (extend) | Misc extension | New section "Asking questions well (Week 1 reflection)" | L190-206, L241-247 | 87 (D9) | W1 landing; Rationality; Morality *Knowledge as an edge* |

**Counts:** 1 landing + 3 Assignment + 3 My Work = **7 Week pages**, plus 1 new
Reference page and 1 Misc extension. Optional: a `/weeks/` index and 3 redirect
stubs.

### 11.1 Proposed body outlines

**P2 - Week 1 · Task 1**
1. Intro line: "Part of **Week 1: Zones**. Study [Zones] first." (italic)
2. `## The task`: blockquote callout with L83 verbatim.
3. `## At a glance`: table (volume, timeframes, zone types, objective,
   what not to mark, sharing, pacing).
4. `## How to work through it`: Img 81 bullets (quoted, attributed "his
   feedback in the backtesting channel"), L97, L99, L87-91 bullets.
5. `## Worked example - the mentor's "exercise 1" (HTF)`: L57 lead-in, then
   Img 50-56 each with its annotation list. Add a note that Img 50-53 carry the
   optimal-sequence header.
6. `## Notes`: the C1 reconciliation (italic), "Examples use XAUUSD"
   (italic), and "Week 1 Task 1 is not [standalone Task 1](/tasks/1/)" (small
   italic, optional: D5).
7. Related line.

**P4 - Week 1 · Task 2**
1. Intro line. 2. `## The task`: callout L85 + L87-91. 3. `## At a glance`:
table. 4. `## The three levels` (short): three one-line quotes + link to Zones
§ Three methods. 5. `## Worked example - the mentor's "exercise 2" (session
basis)`: Img 57-67 in order, with sub-heads "Before the session: HTF untested
zones" (57-63), "The outcome" (64), "Filling in: 7/10/15 min and 1 min" (65-67).
6. `## Clarification - when a zone is active`: L111 + L115, referring to Img 61
above. 7. Related.

**P6 - Week 1 · Task 3**
1. Intro line. 2. `## The task`: callout with L210 + L214. 3. `## At a
glance`: table. 4. `## The 10 and 7 min charts (no annotations)`: L212 +
Img 88, 89. 5. `## Refining the LTF HCS zone`: Img 90, 91 with annotations.
6. `## Pacing`: L216. 7. `## Then: the full mark-up for every session` →
link to Zones § Full zone mark-up. 8. Related.

**P8 - Reference: Zones** (`chart-page`; "Jump to" line like Terminology)
1. `## What zones are` (L15-23). 2. `## The four zone types` (L27; `###` per
type, Img 43-47, annotations). 3. `## The rules` (L35-43 blockquote; then
`### Priority and refinement` L125-131; `### When a zone becomes active`
L111/L115; `### Which part of the wick` L119-121). 4. `## The weakest ATT FU
(failed FU)` (L103-105, Img 70-71). 5. `## Three levels: HTF, 7/10/15 min,
1 min` (L45-55, Img 48-49). 6. `## HTF marking sequence` (Img 50 text; link to W1
Task 1 exercise 1). 7. `## Reactions and expiry` (L160, L165-171, Img 86).
8. `## Practice: what do you see?` (Img 76 → `<details>` 77, 78; Img 79 →
`<details>` 80). 9. `## Live-time application` (L176-186). 10. `## Full zone
mark-up for a NY session` (L223-227, Img 92-97). 11. `## Where zones sit in
the analysis`: rule 9 quote + L186 + Img 91's "no sole confirmation"
(editorial linking, attributed). 12. Related.

Q&A presentation on P8: paraphrase each student question in one line (no
names), then give his answer verbatim. Label the block "From the Week 1 Q&A".

**P9 - Misc Psychology extension**: `## Asking questions well (Week 1
reflection)`, placed before that entry's "Still to come". Content:
- L190-192 "To avoid making things unnecessarily difficult for yourselves."
- L194-196 (paraphrase plus a short quote); the arrogance/apathy passage
  L200 attributed (it is his opinion: "tainted innate disposition ... The root
  of self sabotage").
- L202 "Focus on the advantage first (80% of your thought power) and then any
  arising questions (20% of thought power)." (quote)
- L204-206 "Questions are welcomed- but how much do you first work on your
  mind ..." / "Questions and exploring different analysis scenarios / live
  price action / reflection/ together are different- the latter is more
  encouraged".
- Img 87 inside a collapsible `response-gallery`, captioned "ChatGPT output
  shared by the mentor: 'Arrogance vs Apathy in Questioning'" (D9).
- `### Using ChatGPT` (L241-247): the "surrender" clarification (attributed,
  including "the only one to worthy surrender to is god"), "Chat gpt is
  nothing more than a fun tool ...", "learn something new - to ask then the
  better question", "(again without being consumed, the human is more
  powerful)", "(And no, I do not use it for these writings here xd)" → drop
  the "xd".
- Cross-link to Week 1 landing. Keep his framing: "It pertains to, and will
  strengthen your trading ability."

### 11.2 My Work placeholders (no fabricated content)

Each `mine` page shows the standard empty state plus a short "What goes here"
list (editorial, clearly the site's own text, not the mentor's):

- **Task 1:** chart sets by period (e.g. one entry per month or quarter across
  the 2 years), each showing 11hr → 50 min zones and the swings they caught;
  notes on missed or incorrect zones; mentor feedback.
- **Task 2:** one entry per NY session (10): pre-session HTF zones, the
  outcome, 7/10/15 min + 1 min fill-in, and notes.
- **Task 3:** one entry per session (30): 10/7 min zones, LTF HCS refinement,
  and notes.
- Optional progress indicator "0 / 10 sessions", "0 / 30 sessions" (D11).

Entry ids when they arrive: `task-2/mine/s01/index.md` ... (zero-padded).
Existing subtask frontmatter (`title`, `date`, `captions`) is reused.

---

## 12. Cross-link map

| From | To | Anchor / text |
|---|---|---|
| Home (Tasks index) | `/weeks/1/` | Weekly programme card |
| W1 landing | Ref Zones; 3 × assignment; 3 × mine; Misc Psychology § Asking questions well; Worldview § Still to come | - |
| W1 Task 1/2/3 assignment | Ref Zones (specific anchors); each other (prev/next); own My Work | - |
| W1 Task 1 | Terminology § FU, § HCS; standalone Task 3 § Timeframe strength | "The more HTF the more power" |
| W1 Task 2 | Ref Zones § Three levels, § When a zone becomes active; standalone Task 3 § Key timing | NY session |
| W1 Task 3 | Ref Zones § Full zone mark-up; Terminology § HCS; Rules § 10; standalone Task 3 § The rules (TS) | Img 91 "TFS -liquidity- and TS" |
| Ref Zones | Terminology (FU, Attempted FU, HCS, x3 negation, Trail); Rules § 3, § 8, § 9, § 10; worked example; standalone Task 3; W1 landing + 3 assignments; Misc Fundamentals | - |
| Terminology § Attempted FU | Ref Zones § weakest ATT FU | New italic line: "Week 1 uses a zone built from the weakest ATT FU wick, also called 'failed FU' (3hr+ only, one reaction): see [Zones]." Add "(this appears to be form 2)" only if D12 approves |
| Terminology § Defined elsewhere | Ref Zones | New bullet: "**Zone** (and zone types): [Zones]" |
| Rules § 9 Zones | Ref Zones | New italic line: "The full zone method (Week 1) is on [Zones]." |
| Worked example § Related | Ref Zones | Optional |
| Misc Psychology new section | W1 landing | - |
| Reference index | Ref Zones card (order 4) | automatic |

Not linked, deliberately: standalone Tasks 1 and 2 (related only loosely; no
edits to historical pages), Misc Morality and Worldview (no edit; landing links
to Worldview only if D13 is yes).

---

## 13. Duplication, conflict and correction report

### 13.1 Duplicates

- The optimal-sequence header is repeated on Img 50-53. Transcribe it once
  and write "(same header)" for 51-53.
- The weakest ATT FU / failed FU rule (3hr+, 1 reaction) is stated on Img 47,
  L103, Img 71 and Img 78. Consolidate it on the Zones page. Quote the text
  line once and keep each chart's annotations as they are.
- The deadline appears once only (L216), but it applies to all Tasks
  (§5.2). Show it on the landing page and in each Task's table.
- "Body in wick optional for beginners" appears at L87, L105 and Img 78.

### 13.2 Apparent conflicts, all reconciled or flagged

| # | Apparent conflict | Resolution |
|---|---|---|
| C1 | "Don't mark zones that have not produced a reaction" (Img 81) vs Task 2 "marking out the relevant untested HTF zones" | Different contexts: past-data (Task 1) vs pre-session (Task 2). Italic note on both Task pages. **Not** a correction |
| C2 | Task 2 "7/10/15 min zones (chose 1 TF)" vs Task 3 "10 min and 7 min" (both) | Different Tasks, different requirements. Publish each as stated |
| C3 | Reaction "Generally over 3 closed candles" (L165) vs Img 86 "'small' wick reactions matter" | Retest wick vs size of the following move (§7.2 C). Present side by side |
| C4 | Img 49 "The three rules of zones" vs four bullet rules (L35-43) | Img 49 lists three operations (expand/refine/refine HCS). Publish verbatim, no comment |
| C5 | Img 57 "NY session 07/06/25" was a Saturday | Probably 06/06/25. Publish verbatim; analysis only (D10) |
| C6 | "Every entry will fall into these zones" (L57) vs Rules § 9 "Zones are secondary confirmations" and L49 "TFS,TS and liquidity take priority first" | Consistent: zones locate where moves start, and other factors decide entries. The Zones page § "Where zones sit" quotes both. No correction |
| C7 | Img 43 FU wick: "Can hold for two"; L160 "broken FU wick for 1 reaction - then it is expired" | Consistent: the second reaction is possible but not confirmed/"matters most" is the first. Publish both |

### 13.3 Contradictions with existing Reference/Tasks

**None found.** Week 1 agrees with the Terminology (attempted FU starting "from
where an FU would form"; x3 negation needing no full FU close), with standalone
Task 3 (3hr+ as swing timeframes; TFS/TS priority) and with Rules § 9.

### 13.4 Typos (for publication; keep them in raw.md and in this file's quotes)

Fix silently when publishing, as with Task 3's "compete":
- L29 `iamge` (label line, not published).
- L115 "The first break of was respected" → publish verbatim (a missing
  word; not guessable).
- "theis" → "this" (Img 44); "precieve" → "perceive" (L148); "precison" →
  "precision" (Img 67); "concenrated" → "concentrated" (Img 90); "refinment" →
  "refinement" (Img 54, 78, 97); "remmentants" → "remnants" (Img 71);
  "liquidty" → "liquidity" (Img 71); "baisis" → "basis" (Img 57); "visable" →
  "visible" (Img 54); "mare mechanicals" → "mere mechanicals" (Img 54);
  "comprehsive" → "comprehensive" (L93); "Alot" → "A lot" (L93); "chose 1 TF"
  → keep (reads as "choose"; meaning clear, harmless either way; recommend
  "choose"); "cant" → "can't"; "occured" → "occurred" (L212); "alongisde",
  "nessesary", "deleve", "utalize", "broden" → corrected spellings; "from from"
  (L57) → "from".
- **Keep as written:** "Fu"/"FU" and "Ob"/"OB" capitalisation (house:
  normalise to FU/OB); "failed ATT FU" (L210) vs "failed FU" (the same thing;
  keep his words); "HCS x1"; Img 97's garbled first line; "Every we have
  will..." (verbatim).
- Recommendation: typo fixes inside blockquotes are allowed only for spelling
  (as in earlier batches), never for wording (D14 confirms).

---

## 14. Raw-only material

| Material | Lines / Img | Reason |
|---|---|---|
| Student screenshots | Img 68, 69, 72, 73, 74, 75, 82, 83, 84, 85 | Other students' names, avatars and charts. The questions are paraphrased on the site without names. The mentor's answers are published |
| Img 81 as an image | Img 81 | It shows another student's name. The mentor's text is transcribed and published |
| The user's notes | L156 prefix, L240 prefix | Not mentor text |
| `iamge 43` label line | L29 | Source artefact |
| Reasons for considering a Week 2 postponement: "leak potential", "not making week 2 public ... alongside weeks 3 and 4" | L236 | Community logistics / security, no learning value |
| "the events since yesterday" | L236 | Unspecified and undated |
| Emoji / "xd" / "🎩" | L93, L190, L236, L241, L247 | Chat mannerisms (the house convention drops them) |
| "A "happy" intensive backtesting now" | L93 | Optional: tone only. Recommend dropping it (or keep, D15) |
| Discord channel emoji wrapper "⁠📋backtesting-results📋" | L81 | Publish as "#backtesting-results" |

Everything else (all trading teaching, warnings, Q&A answers, pacing, the
psychology reflection, the ChatGPT note, the schedule summary) is published
somewhere.

---

## 15. Ambiguities, decisions and unresolved points

### 15.1 Decisions needed from the user (numbered, with recommendations)

- **D1 - Routes.** `/weeks/1/task-N/{assignment,mine}/` (recommended) or
  `/tasks/weeks/1/...`.
- **D2 - Tasks index order.** Weekly programme above standalone tasks
  (recommended), Weeks listed oldest-first.
- **D3 - `chart-page` on the new Week assignment pages** (and the new Reference
  page, which already uses it). Recommended: yes. Standalone Tasks untouched.
- **D4 - Student screenshots.** All raw-only, with questions paraphrased
  without names (recommended). Alternative: include Img 72 (a student's
  correctly marked chart) anonymised/cropped as an illustration of L111.
- **D5 - "Not standalone Task N" notice** on Week Task pages: a small italic
  line (recommended) or none (the breadcrumb may be enough).
- **D6 - Deadline scope.** Treat "Ideally these tasks should take no longer
  than 2 weeks" as Week-wide (recommended) or Task 3 only.
- **D7 - Standard-timeframe note for Task 3.** Verbatim only (recommended), or
  verbatim + an italic "appears to mean 15 min in place of 10/7 min; 5/3/1 min
  for the LTF HCS".
- **D8 - Submission detail.** "Share your practice in #backtesting-results"
  only (recommended), or add "(a personal thread there is fine)" from the Q8
  inference.
- **D9 - Img 87 (ChatGPT screenshot).** Include it in the Misc Psychology
  section, collapsed and labelled as ChatGPT output (recommended: the mentor
  deliberately posted it, and the "surrender" clarification refers to it), or
  keep it raw-only and paraphrase.
- **D10 - Img 57 date "07/06/25".** Verbatim, with no correction on the site
  (recommended).
- **D11 - My Work progress indicator** ("0 / 10 sessions"): yes (recommended;
  cheap) or no.
- **D12 - Terminology pointer.** Say that the weakest ATT FU "appears to be" form
  2 of the attempted FU (strong inference), or only link it (recommended: only
  link, and state his explicit equivalence "failed FU").
- **D13 - "After Week 1" note on the landing page** (Week 2 on schedule + 3
  fundamentals segments, attributed): include (recommended) or omit.
- **D14 - Spelling fixes inside published quotes** (§13.4): spelling only
  (recommended).
- **D15 - Zones Reference page placement:** order 4, appended (recommended), or
  order 2, right after Terminology (renumbers Rules and the worked example).
- **D16 - Where the Q&A and practice go.** On the Reference Zones page
  (recommended: they are general zone technique), or on a Week 1 page
  ("Week 1 Q&A").

### 15.2 Genuinely unresolved (do not invent; implementation may re-check only these)

- **U1** The Task 1-3 instrument is never stated. All examples are XAUUSD.
- **U2** Task 3's "later look comprehensively at refinement from 50 min + HTF
  zones also": now or later? The reading "later" (not part of the 30) is not
  certain.
- **U3** The standard-TF substitution: only Task 3 gives one. The student's
  question about other TFs (Img 84: H12/H4/H3/H2/H1/M30/M15/M5/M1) has **no
  answer in the paste**. Whether 12hr/4hr/3hr/1hr can replace 11/7/5hr/50 min in
  Tasks 1-2 is unknown. Suggest the user asks the mentor, or checks whether an
  answer exists that was not pasted.
- **U4** Task 2's HTF timeframes are not restated (exercise 2 uses 7hr to 50
  min).
- **U5** Task 3's session type (NY implied).
- **U6** "refined HCS **x1**" (Img 90). "x1" is undefined. Leave it as
  written; do not link it to x3.
- **U7** The expiry of body-in-wick zones is not stated. Img 80's "expires
  after 1 reaction" points at an unlabelled zone.
- **U8** "as we go lower they fade" (L225) vs "Can fade or delete this zone"
  (Img 63). "Fade" appears to mean de-emphasising or deleting a zone on the
  chart once its reaction is used. That is an inference: publish it verbatim
  with no gloss.
- **U9** The "strong FU" on the 1 min ("breaks low and high") is not defined
  elsewhere. It may relate to the x3 definition, but **do not equate them**.
- **U10** The colour conventions on his charts (green = old zone / refined
  overlap / expanded HCS in different charts) are not explained. Do not state a
  colour legend.

---

## 16. Recommended implementation order

1. Read `CLAUDE.md`, `PROJECT_STATE.md` and this file. Check the decisions in
   §15.1 as approved.
2. **Reference Zones page (P8)**: copy the 23 images to
   `src/assets/reference/zones/` with the §8 names, then write the page. The
   Week pages link into its anchors, so do it first.
3. **Week infrastructure**: collections `weekMeta`/`weekTasks`/`weekWork`,
   `src/lib/weeks.ts`, pages `src/pages/weeks/index.astro`,
   `[week]/index.astro`, `[week]/[task]/assignment.astro`,
   `[week]/[task]/mine.astro` (reusing the Task assignment/mine templates +
   `chart-page`), and the Tasks index sections.
4. **Week 1 content**: `week.md`, `task-1..3/task.md` (P1, P2, P4, P6), images
   into `src/assets/weeks/1/`. Leave the `mine/` folders empty (use a
   placeholder `.gitkeep` only if a folder is needed).
5. **Extensions**: Terminology (2 lines), Rules § 9 (1 line), worked example
   Related (optional), Misc Psychology section (P9) + Img 87.
6. Clean rebuild (`rm -rf .astro node_modules/.astro dist`), `npm test`,
   `npm run build`, `check-dist.mjs`, browser check at desktop and 375px
   (charts inline, lightbox, cards, breadcrumbs), console errors.
7. Update `PROJECT_STATE.md` (Week architecture, open threads: U2, U3,
   fundamentals segments, "x1", Trump thread) and `site-conventions.md` (Week
   pattern). Stop for user review before committing.

---

## 17. Approval summary

- **Formal Week 1 tasks: 3**, all explicitly labelled by him ("Task 1:",
  "Task 2:", "Task 3:").
  - **Week 1 · Task 1 - HTF Zones:** 2 years of data, 11hr → 50 min, capture
    the zones that start the main true swing moves.
  - **Week 1 · Task 2 - Session Zones:** 10 NY days. Untested HTF zones, then
    the outcome, then one of 7/10/15 min, then 1 min strong FU zones.
  - **Week 1 · Task 3 - 10/7 min Zones & LTF HCS Refinement:** 30 sessions,
    within HTF zones.
- **Task 1 is explicit** (L83), not implicit. **"Exercise 2" is not a
  deliverable**: it is the mentor's second worked demonstration (session
  basis, Img 57-67) and the model for Task 2. Exercise 1 is the unlabelled HTF
  demonstration (Img 50-56; his "this exercise" on Img 56), the model for Task
  1. The practice "What do you see?" (Img 76-80) is optional.
- **Architecture:** a separate `weeks` collection and routes
  `/weeks/1/` + `/weeks/1/task-{1,2,3}/{assignment,mine}/`, which cannot collide
  with `/tasks/1-3/`. The Tasks index gets "Weekly programme" above "Standalone
  tasks". The landing page pairs Assignment | My Work for each Task (**6
  cards**). **7 Week pages** in total (1 landing + 3 Assignment + 3 My Work,
  empty).
- **Week-level overview content exists**: the zone theory summary, pacing
  (no deadline, ideally 2 weeks, applied Week-wide), review/sharing, and
  After Week 1.
- **New Reference page: "Zones: Types, Rules & Refinement"** (`/reference/
  zones/`, order 4, 23 images). The zone framework is technical knowledge
  shared by all three Tasks and future Weeks.
- **Extensions:** Terminology (Attempted FU pointer; "Zone" under Defined
  elsewhere), Rules § 9 (pointer), worked example Related (optional), and Misc
  **Trading Psychology** (new section "Asking questions well (Week 1
  reflection)" + ChatGPT note). Standalone Tasks 1-3: **no changes**.
- **Images: 55.** Ref Zones 23 · W1 Task 1 7 · W1 Task 2 11 · W1 Task 3 4 ·
  Misc 1 (Img 87, D9) · raw-only 11 (student screenshots; Img 81's text is
  published).
- **Raw-only:** student screenshots, the user's notes, the Week 2 postponement
  reasoning ("leak potential", "events since yesterday"), emoji/"xd".
- **Genuine ambiguities:** U1-U10. The key ones are U3 (the standard-timeframe
  question, Img 84, has no answer in the paste), U2 (the Task 3 "later"
  clause), U6 ("HCS x1") and U7 (body-in-wick expiry).
- **Decisions needed before implementation:** D1-D16 in §15.1. Each has a
  recommendation. Approving "all recommendations" is enough to proceed.

---

## 18. Approved decisions (AUTHORITATIVE for implementation)

Approved by the user on 2026-09-30. Where this section conflicts with anything
earlier in this file (especially §10.2-10.3, §11 routes and §12 link paths),
**this section wins**.

### 18.1 Conceptual hierarchy (user clarification, binding)

- Weeks are **part of the Tasks system**. They are **not** a fourth top-level
  category. The permanent structure is: **Tasks** = all formal mentor
  assignments · **Reference** = technical mentor knowledge not itself
  assigned · **Misc** = broader mentor material.
- Within Tasks there are two groups: **Standalone tasks** (the earlier Tasks
  1-3, unchanged) and the **Weekly Programme** (Week 1, Week 2, ...).
- Main navigation stays exactly **Tasks · Reference · Misc**. There is no
  "Weeks" nav item. Users reach Week 1 through Tasks → Weekly Programme. No
  page, card, badge or heading may present Weeks as equivalent to Reference or
  Misc. Breadcrumbs always start with **Tasks**.

### 18.2 Final route decision: `/tasks/weeks/...`

Decision: **`/tasks/weeks/<N>/...`** (the user's stated preference when it is
equally clean). Technical check against the current Astro routing:

- The standalone routes are `src/pages/tasks/[task]/{index,assignment,mine,[subtask]}.astro`.
  Their `getStaticPaths` only emit the standalone task numbers and subtask
  ids from the `tasks` / `taskMeta` collections, so they never generate
  `task = "weeks"`.
- A static folder `src/pages/tasks/weeks/` has priority over the dynamic
  `[task]` segment in Astro's route ranking. There is no ambiguity and no
  collision with `/tasks/1-3/`.
- The nav in `src/components/Layout.astro` is plain links with no path-based
  active state. Nothing needs to change for Week pages to sit under Tasks.
- Content stays in a **separate collection folder** `src/content/weeks/`
  (never under `src/content/tasks/`, whose `**/index.md` and `*/task.md` globs
  would sweep Week files into standalone tasks; see §10.1).

Final routes:

```
/tasks/weeks/                       Weekly Programme index (lists Weeks)
/tasks/weeks/1/                     Week 1: Zones - landing page (6 paired cards)
/tasks/weeks/1/task-1/assignment/   Week 1 · Task 1 - HTF Zones (2 years)
/tasks/weeks/1/task-1/mine/         My Work - Week 1 · Task 1 (empty)
/tasks/weeks/1/task-2/assignment/   Week 1 · Task 2 - Session Zones (10 NY days)
/tasks/weeks/1/task-2/mine/         My Work - Week 1 · Task 2 (empty)
/tasks/weeks/1/task-3/assignment/   Week 1 · Task 3 - 10/7 min Zones & LTF HCS Refinement (30 sessions)
/tasks/weeks/1/task-3/mine/         My Work - Week 1 · Task 3 (empty)
/tasks/weeks/1/task-N/mine/<entry>/ future My Work entries
```

`/tasks/weeks/1/task-N/` (no suffix): a meta-refresh redirect to
`/tasks/weeks/1/#task-N` (or omit it). Page files:
`src/pages/tasks/weeks/index.astro`, `src/pages/tasks/weeks/[week]/index.astro`,
`src/pages/tasks/weeks/[week]/[wtask]/assignment.astro`, `.../mine.astro`
(optional `.../index.astro` redirect, and later `.../mine/[entry].astro`).

Breadcrumbs: `Tasks › Weekly Programme › Week 1: Zones › Task 2 › Assignment`
(or `› My Work`).

Tasks index (home page `src/pages/index.astro`): two sections under the Tasks
heading: **Weekly Programme** (Week cards, oldest first; link to
`/tasks/weeks/`) above **Standalone tasks** (the existing Task 1-3 cards,
unchanged). Week cards and the landing badge read "WEEK 1" in the Task badge
style, never a Reference/Misc-style badge.

All internal links in §11-§12 that say `/weeks/...` mean `/tasks/weeks/...`.

### 18.3 Approved recommendations (§15.1)

| # | Decision (final) |
|---|---|
| D1 | Routes: **`/tasks/weeks/...`** (§18.2), overriding the `/weeks/...` recommendation |
| D2 | Weekly Programme section above Standalone tasks; Weeks oldest-first |
| D3 | `chart-page` on the new Week assignment pages (chart-heavy) and on the new Reference Zones page. Standalone Tasks untouched |
| D4 | All 11 student Discord screenshots (Img 68, 69, 72-75, 81-85) stay **source-only**. Questions are paraphrased anonymously; the mentor's answers are published verbatim. Img 81's mentor text is transcribed |
| D5 | Small italic "not standalone Task N" line on each Week Task page |
| D6 | Pacing ("no set deadline ... ideally no longer than 2 weeks") is **Week-wide**: shown on the landing page and in each Task's table |
| D7 | Task 3 standard-timeframe sentence published **verbatim only**, with no interpretive note |
| D8 | Submission: "share your practice in #backtesting-results" only (no thread inference) |
| D9 | Img 87 (ChatGPT screenshot) in the Misc Psychology section, collapsed, labelled as ChatGPT output shared by the mentor |
| D10 | Img 57 "07/06/25" published verbatim, uncorrected; no dates on the site |
| D11 | My Work progress indicator ("0 / 10 sessions", "0 / 30 sessions"; Task 1 no count or "0 entries") |
| D12 | Terminology: link only, stating his explicit equivalence "weakest ATT FU" = "failed FU". Do **not** say it is attempted-FU form 2 |
| D13 | "After Week 1" note on the landing page (Week 2 on schedule; 3 fundamentals/geopolitics segments to follow, attributed) |
| D14 | Spelling-only fixes inside published quotes (§13.4); never wording |
| D15 | Reference Zones page at **order 4** (appended); existing orders unchanged |
| D16 | Q&A answers and the "What do you see?" practice go on the Reference Zones page |

Also approved: the three-task mapping (§4); "Exercise 2" (and the unlabelled
exercise 1) as worked demonstrations, not deliverables; the Week-level overview
and pacing; the new Reference page **Zones: Types, Rules & Refinement**
(`/reference/zones/`); the Terminology / Rules § 9 / worked-example Related /
Misc Psychology additions (§12, §11 P9); the image allocation (§8); the
landing page with **six paired cards** (Task 1-3 × Assignment | My Work).

### 18.4 Ambiguity handling (binding)

- Do **not** invent or infer missing rules. Where an ambiguity touches
  published material, **show it as unresolved** (e.g. a short italic "not
  specified by the mentor" note) rather than silently resolving it:
  - **U1** instrument not stated (examples use XAUUSD): italic note on the
    Task pages.
  - **U2** Task 3 "later look comprehensively at refinement from 50 min + HTF
    zones also": published verbatim and presented as a **later step**, **not**
    part of the 30-session requirement (e.g. listed as "Later" in the
    requirements table).
  - **U3** standard timeframes: publish Task 3's sentence verbatim. For Tasks
    1-2, an italic note that a student asked about standard timeframes and no
    mentor answer is in the source. Do not suggest substitutes.
  - **U4** Task 2's HTF timeframes are not restated: note "not restated; the
    worked example uses 7hr to 50 min".
  - **U5** Task 3 session type not stated: "sessions" verbatim; note that the
    examples are NY.
  - **U6** "refined HCS x1" (Img 90): transcribe verbatim, **no gloss**, no
    link to x3.
  - **U7** body-in-wick zone expiry: **unresolved**. Do not state a count.
    Img 80's "expires after 1 reaction" is transcribed as an annotation only.
  - **U8** "fade": verbatim, no gloss.
  - **U9** 1 min "strong FU": his wording only; do not equate it with x3.
  - **U10** chart colours: no colour legend.
- Keep the C1-C7 reconciliations (§13.2) as short italic editorial notes, and
  only where §11 says so. They are presentation of his own statements, not new
  rules.

### 18.5 Implementation boundaries

- Stage 2 runs in a **fresh session** via `/mentor-implement`. It reads
  `CLAUDE.md`, `PROJECT_STATE.md` and this file. It reopens `raw.md` or the
  images only for U1-U10, if at all.
- Do not modify standalone Tasks 1-3 content or routes.
- Follow §16's order, with the route paths from §18.2. Update
  `PROJECT_STATE.md` and `.claude/skills/mentor-implement/reference/site-conventions.md`
  (the Weekly Programme pattern under Tasks, routes, collections). Stop before
  committing, for user review.
