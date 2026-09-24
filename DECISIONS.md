# DECISIONS.md

Log of judgment calls made during knowledge-base builds, kept at the project
root so they're visible without digging into individual output files.

---

## Uruguay pilot (`knowledge-base/02-culture/regions/latam/uruguay.md`) — 2026-09-21

**Context:** First-ever build for this repo. No prior brief, template, or
directory structure existed — `knowledge-base/02-culture/regions/latam/`
was created fresh for this task. Any conventions below are precedent-setting,
not inherited.

**Judgment calls:**

1. **No sub-region split.** Triaged Montevideo/coastal-vs-interior,
   Brazil-border towns (Rivera/Chuy), and Afro-Uruguayan tradition as the
   three plausible fault lines, per the task brief's explicit prompts.
   Concluded none rises to a structural split — coastal/interior is an
   emphasis shift (seafood presence, asado intensity) not a different dish
   set; border-town hybridization is town-scale, not regional; Afro-Uruguayan
   food tradition returned no sourced dish-level content at all (logged as a
   gap, not treated as evidence of absence). Single file produced, per the
   task's default expectation.

2. **Dish count: 10, not 8-10 exactly on the nose.** Included chorizo y
   morcilla/choripán as a separate entry from asado itself, since it has its
   own "common confusion" profile (choripán is an Argentine invention, not
   Uruguayan-original, and the sweet-morcilla variant is a distinct
   Río de la Plata detail worth flagging on its own) rather than folding it
   as a sub-bullet under the asado entry.

3. **WebFetch was network-blocked** (EGRESS_BLOCKED) for every domain tried,
   including en.wikipedia.org, nationalgeographic.com, and chefspencil.com.
   All research relied on the WebSearch tool's own retrieval/excerpting
   rather than direct full-page fetches. This is disclosed in the output
   file's RESEARCH LOG. Did not attempt to route around this via other
   means (e.g., inspecting the proxy directly) since that path was itself
   blocked by the permission classifier as out of scope for this task —
   flagged rather than worked around.

4. **Confidence calibration**: kept recipe-only sources (Cookidoo, Cookpad,
   personal food blogs) capped at MEDIUM even when internally consistent,
   per the brief's instruction to favor editorial/journalistic/encyclopedic
   sources. Grokipedia was excluded outright as an AI-generated source
   despite surfacing in search results — not treated as citable at any
   confidence level.

5. **Two dish-level "not confirmed" calls** (pastel de carne's and puchero's
   common-confusion-with-Argentina/Brazil fields) were left explicitly
   unfilled rather than inferring a plausible-sounding confusion point, per
   the brief's instruction not to pad gaps with assumptions.

6. **Directory structure**: created `knowledge-base/02-culture/regions/latam/`
   matching the exact path the task specified. No sibling country files or
   README exist yet in this tree — first-of-its-kind, so no cross-file
   consistency was possible to check against.

---

## Uruguay pilot — correction pass, 2026-09-21 (post-draft human/SME review)

The user (who has direct personal familiarity with Uruguay — the whole
reason this market was chosen as the pilot) flagged three issues after
reading the first draft:

1. **Bread service was factually wrong.** The draft said bread is placed
   directly on the tablecloth, sourced from a single generic (not
   Uruguay-specific) etiquette site — exactly the kind of thin, single-source
   claim the brief warned against overtrusting. Corrected to bread-basket
   service based on the reviewer's direct knowledge. **Judgment call:** since
   I could not find a dedicated Uruguay-specific citation for "basket" either
   (only generic Argentina-focused bread-basket culture pieces), I documented
   the correction as sourced from direct SME/reviewer knowledge rather than
   inventing or overstating a web citation for it. This is logged explicitly
   in the file's Research Log as a claim still wanting a stronger source.

2. **On-table condiments were missing.** Chimichurri as a standing table
   condiment (not just an asado-specific side) was absent from
   REGION-WIDE NORMS despite being well-documented in sources already
   gathered for the asado dish entry. Added as its own norm bullet, sourced
   from the sauce-specific sources found in the correction-pass search.

3. **Pasta was missing as its own dish entry**, despite the triage section's
   own reasoning explicitly naming "pizza/faina, pasta" as part of Uruguay's
   core immigration-derived repertoire — an internal inconsistency the
   reviewer's question exposed rather than something I'd independently
   caught. Researched and added a full Pasta entry covering both the Sunday
   ravioles/tallarines-con-tuco custom and the Ñoquis del 29 monthly ritual
   (money-under-the-plate tradition included), sourced in part from a
   Uruguayan newspaper (El Observador) and Uruguayan alt-weekly (la diaria).
   **Judgment call:** this brings the dish catalog to 11 entries, one over
   the brief's stated 8-10 range. Did not remove an existing entry to
   compensate, since every existing entry was independently well-sourced and
   removing one to hit a round number would have been arbitrary; flagging
   the overage here instead.

   Note: pizza a la piedra/faina was *not* actually missing from the first
   draft (it was already dish entry #6) — the reviewer's comment listed it
   alongside the genuine pasta omission, but on review the pizza/faina entry
   was already present and accurate, so no change was needed there.

---

## US knowledge base — subagent research round, 2026-09-24

After building `us.md`'s first pass directly, the user authorized delegating
four remaining Candidate Queue items to parallel background subagents
(snacks; Tier 2 global cuisine; New Mexican vs. Tex-Mex chile; regional-
boundary validation), explicitly confirming they should run together and
that I should continue through to a merged result rather than checking in
after each one.

**Judgment calls:**

1. **Each subagent was told to write to its own scratch file, never to edit
   `us.md` directly.** With four agents running concurrently against the
   same target file, letting them all edit it directly risked silent
   overwrites/conflicts. Merging sequentially myself, after reading each
   draft, meant every addition went through the same review I'd apply to my
   own work before landing in the canonical file.

2. **Two of the four agents disagreed with each other, and I surfaced the
   disagreement rather than picking a side.** The regional-boundary
   validation agent recommended keeping New Mexico combined with Arizona
   inside `us-desert-southwest.md` (as internal named sub-styles, the same
   pattern already used for BBQ/pizza/hot dogs). The New Mexican chile agent,
   working independently and citing different converging evidence (separate
   Wikipedia categories, a specialist culinary school framing the comparison
   as "Tex-Mex vs. New Mexican" not "vs. Desert Southwest," Arizona's Sonoran
   style being explicitly described as its own distinct thing), recommended
   splitting New Mexico into its own file. Both cite real, credible sources.
   I did not adjudicate this myself — it's exactly the kind of structural
   call the user should make, not something to resolve by picking whichever
   agent sounded more confident. Flagged explicitly, in the file itself and
   here, as unresolved.

3. **The regional-validation finding is bigger than a routine addition, so I
   did not silently apply it.** It recommends growing the region list from
   10 to 12 (adding Appalachia and Florida, renaming two files) — a real
   change to the project's structure, not a dish-level correction. I'd told
   the user earlier I'd surface anything that "changes the plan materially"
   rather than fold it in silently, so I marked the entire working-list
   section in `us.md` as "SUPERSEDED BY A VALIDATION PASS, PENDING HUMAN
   SIGN-OFF" and left the original ten-file pointers in place elsewhere in
   the document until that sign-off happens, rather than unilaterally
   renaming files that don't exist yet or changing pointers throughout the
   document based on a recommendation alone.

4. **Trusted but verified each agent's output before merging** — read every
   scratch draft in full rather than merging on the strength of the agent's
   own summary. All four held to the sourcing discipline I'd specified
   (real citations, honest confidence tags, explicit "not confirmed" flags,
   no invented sources) closely enough that I did not need to reject or
   substantially rewrite any section, only integrate them and adjust
   surrounding cross-references (Gap Log, Candidate Queue, Research Log).

5. **Kept the four raw scratch drafts out of the actual knowledge-base tree**
   (they remain in the session's scratchpad directory, not the repo) — only
   the merged, reviewed content was committed. Noted their scratch paths in
   `us.md`'s own Research Log as a paper trail in case the fuller
   per-source detail in any one draft is needed later.

---

## US knowledge base — regional-list decision closed, 2026-09-24

The user reviewed the validation findings and made the two calls the research
itself couldn't make: go with the 12-region recommendation, and split New
Mexico into its own file rather than leaving it bundled with Arizona. That
makes 13 files total (12 already implied bundling NM+AZ as one file; splitting
them adds a 13th) — I flagged that arithmetic explicitly rather than letting
"go with 12" and "split New Mexico" quietly average out to the wrong count.

**Naming calls I made on my own initiative were all three rejected on review,
in three separate follow-up messages:**

1. Splitting New Mexico out meant "Desert Southwest" as a name for the
   remaining Arizona-only file had the same precision problem that got West
   Coast renamed to California, so I renamed it to `us-arizona.md` on that
   logic. Rejected — the reviewer isn't aware of significant internal
   variance within what's left to justify narrowing the name.
2. I had left the validation pass's `us-louisiana.md` rename (from
   `us-gulf-south.md`) in place since it came with real research behind it.
   Rejected — the reviewer's point: po'boys and this file's other anchor
   dishes are not confined to Louisiana in practice even though they
   originated there, so the broader "Gulf South" label better reflects
   actual reach than a single-state name would.
3. Same pattern for `us-west-coast.md` → `us-california.md`. Rejected,
   no reason given beyond "keep west coast" — treated as the reviewer's
   preference for the broader framing, consistent with the other two.

In all three cases, the underlying research finding (that the file's content
is a real, distinct culinary tradition) was never in dispute — only what to
*call* the file holding it. I reverted all three renames, fixed every
downstream pointer that had already propagated the new names (Po'boy and
Baja fish taco index entries, the FILE ROLE & METHOD table, the Gap Log
summary), and marked each reverted row in `us.md` as a reviewer naming/framing
judgment call, distinct from the underlying distinctness evidence, so a
future pass doesn't mistake "kept the broader name" for "the narrower category
isn't real."

---

## US knowledge base — Lowcountry closed, environment section added, Gen Z reweight requested, 2026-09-24

Three things happened in quick succession. First, the user asked directly why
Lowcountry wouldn't just be "the South" — a fair challenge, and I gave an
honest answer rather than defending the file split reflexively: the evidence
for Lowcountry's distinctness was thin (surfaced incidentally by the
validation agent, never independently stress-tested the way Appalachia/
Florida/Louisiana were), so I recommended folding it into `us-south.md` as a
callout rather than defending a 14th file on a hunch. The user agreed
("proceed with south"), closing the regional-list question entirely.

Second, the user asked me to also run the environment/staging-scenes section.
I delegated this to a fifth subagent (same pattern as the four dish-research
agents), mirroring Uruguay's exact six-scenario structure. It came back with
strong, quantified confirmation of both hypothesized US/Uruguay contrasts
(drive-thru culture: ~20% of meals eaten in a car, ~83% of fast-food orders
off-premise; dinner timing: ~6:19pm US peak vs. Uruguay's 9:30pm+) plus one
genuinely useful finding I hadn't hypothesized: most US fire codes ban
charcoal/propane grills on apartment balconies — the mirror image of
Uruguay's parrillero-terrace correction. I merged this in full.

Third — while I was still in the middle of that merge — the user sent a
follow-up asking to reweight the section's decor/setting defaults toward Gen
Z specifically: Gen Z hangout venues, Gen Z home furnishings, non-traditional
home environments, and roommate/shared-living quarters, rather than the
"older"/traditional-family framing the just-merged section defaulted to
(suburban homeownership, nuclear-family dinner scenes, etc.).

**Judgment call:** rather than discarding the just-merged section, I finished
committing it as a checkpoint first, then launched a dedicated revision pass
targeting specifically the demographic framing layered on top of the
statistical findings — not the statistical findings themselves. The
distinction matters: drive-thru share, dinner timing, grill-type prevalence,
and the apartment-balcony grill ban are all demographic-agnostic facts about
the US as a whole and remain valid regardless of who's being staged. What
needed revision was the "likely setting" narrative decisions layered on top
(e.g., defaulting a solo-lunch scene to a homeowner's kitchen island rather
than to a shared rental with roommates) — logged this distinction explicitly
in `us.md`'s own Gap Log so the next pass revises the right layer rather than
re-deriving statistics that don't need to change.

---

## US knowledge base — Gen Z reweighting merged, 2026-09-24

The Gen Z revision pass came back with a genuinely useful asymmetry: housing/
living-arrangement claims (roommate prevalence, boomerang living, co-buying,
multigenerational households) were solidly sourced — Pew Research, Census
PUMS-grounded industry surveys, National Association of Realtors data — while
decor-aesthetic claims (dopamine decor, cluttercore, named micro-aesthetics
like "cottagecore" or "clean girl") turned out to rest only on retailer
content and lifestyle-blog round-ups, exactly the sourcing tier this project
has deprioritized since the Uruguay pilot. The agent kept those two tiers
honestly separate rather than smoothing them into uniform confidence, and I
preserved that distinction rather than upgrading the weaker claims for a
tidier-looking merge.

**Judgment call on how to merge:** the draft was explicitly additive — every
new bullet was written to sit alongside, not replace, the existing family/
general-household framing already in `us.md`. I kept that structure exactly:
roommate/shared-living bullets were added as co-equal alternatives in the
three "casual lunch at home" scenarios (1/2/3 people) rather than swapping
out the existing kitchen-island/family framing, and boba shops/aesthetic
cafes were added alongside the casual-dining-chain default for "away from
home — 2-3 people" rather than replacing it. This matches the reviewer's
original phrasing ("prioritize... but factor in") — prioritizing Gen Z
framing doesn't mean deleting the general-population framing that was
already correct and sourced.

**What I did not add**, per the agent's own honest flagging: food halls and
shopping malls as Gen Z hangout venues (insufficient/self-interested sourcing
for both), and I did not upgrade any of the LOW-confidence decor claims to
sound more settled than the sourcing supports — they're marked "not confirmed
as a purchasing pattern, flag for review" in the merged text, not softened
into ordinary prose the way a less careful merge might have done.

---

## Photorealism audit and fixes, 2026-09-24

The user asked for a genuinely independent quality audit — not another
building pass — evaluating whether both files could actually brief an
image-generation system to an unmistakable, region-true result. I ran this
as a skeptical subagent review rather than grading my own work, with an
explicit instruction not to soften findings for diplomacy.

**What came back was real, specific, and mostly fixable, not vague:**

1. A genuine confidence/completeness mismatch in `us.md`'s "city/region-
   specific sandwiches" block — five entries (cheesesteak, po'boy, lobster
   roll, Cuban sandwich, Chicago Italian beef) carried HIGH confidence tags
   but had zero visual/plating detail, just an ingredient list. The
   confidence was earned for the *facts* (origin, composition) but not for
   *staging-readiness*, and a downstream user skimming the tag alone would
   be misled. I fixed all five with real, freshly-researched visual detail
   (bread texture, cheese-melt behavior, press-mark specifics, jus/dressing
   appearance) rather than inferring plausible-sounding detail from general
   knowledge — consistent with this project's sourcing discipline throughout.

2. One genuinely stale pointer: the Cuban sandwich entry still said
   "→ Florida, file TBD" even though `us-florida.md` had already been
   finalized in the same document's FILE ROLE & METHOD table earlier in this
   session. A small thing, but exactly the kind of drift that accumulates
   silently across many rounds of edits — fixed.

3. A named, specific gap in the pizza entry: Detroit-style and Sicilian
   pizza are both rectangular-pan pizzas and a real confusable pair, but the
   original entry only contrasted Detroit against Chicago/NY/New Haven/St.
   Louis. Rather than accept the audit's suggested fix on faith, I ran a
   fresh verification search before writing it in — the frico-edge
   distinction held up under a dedicated Sicilian-vs-Detroit search, so I
   added it with its own citation rather than just taking the audit
   subagent's word for a factual claim.

4. The "Casual lunch at home — 2 people / 3 people" scenarios in `us.md`
   were, in the audit's words, "confidently narrated but would not actually
   produce a specific scene" — demographic reasoning with no incremental
   visual detail beyond the 1-person version. Added concrete staging detail
   (seating arrangement, individual-vs-shared plating, a specific dish
   anchor) to both, explicitly marked as editorial synthesis rather than
   independently sourced, matching how the rest of the file already
   discloses that tier of claim.

5. For Uruguay, the audit's finding was different in kind — not a completion
   gap but an honesty gap: the Milanesa napolitana and Pizza a la piedra
   entries are well-defended against confusion with other countries' dishes
   (Italian, American) but the file never states outright that it *cannot*
   prove "Uruguayan, not Argentine" for these two specifically, since both
   are genuinely Río de la Plata-shared dishes with no sourced visual
   distinction between the two countries' versions. Added that limitation
   explicitly to both entries rather than leaving a downstream user to
   discover it only by reading the surrounding prose closely.

**What I did not do**: the audit's #2 priority fix (Gen Z reweighting) was
already resolved by the time the audit's findings arrived — a timing
artifact of running two subagents in overlapping windows, not a real gap.
I noted this in `us.md`'s own log rather than re-doing work that was already
done. I also did not touch the clam-chowder schema-rule inconsistency the
audit flagged (its own rule says the entry should defer to `us-northeast.md`
once that file exists, but keeps a near-full entry here anyway) — the audit
itself called this "not blocking," and keeping the content accessible while
no regional file exists is the more useful choice than removing it to
satisfy the letter of a rule written for a different point in the build.

---

## Schema/criteria document written, 2026-09-24

The user asked, early in the US build, for a reusable list of criteria
capturing the schema so future countries could start from a template. I said
I'd write it once the current round (environment section, Gen Z reweighting,
audit fixes) actually landed, rather than freezing it mid-revision — that
round is now done, so I wrote
`knowledge-base/00-methods/country-file-schema.md`.

**Judgment call on scope**: this captures everything actually established
across both builds — the split-vs-no-split test, the document section order,
the three-dimension dish schema (cuisine lineage / regional-form-variation
with the style-map mechanism / serving-format splits), the eight-scenario
environment structure, the demographic-lens principle the Gen Z round
introduced, the sourcing/confidence discipline, the human-sign-off and
subagent-disagreement handling from the regional-list decision, the
subagent-delegation criteria, and the independent-audit practice from this
same session. I did not invent new criteria beyond what this project actually
did and learned — every section traces back to a specific decision or
correction made earlier in this conversation, cited by what it was (e.g. "a
finding from this project's own audit") rather than presented as abstract
best practice.

**Placement**: created a new `knowledge-base/00-methods/` directory rather
than putting this in the existing `02-culture/regions/` tree, since it's
process documentation that sits above any one country's content and should
be the first thing a future country-file build reads, not a peer of
`uruguay.md`/`us.md`.

---

## Corrected framing on milanesa napolitana / pizza a la piedra, 2026-09-24

After the audit fix landed, the user pointed out that my phrasing was subtly
wrong: I'd written the Uruguay-vs-Argentina limitation on these two dishes as
something a "dedicated cross-border comparison pass" might someday resolve.
That framing was incorrect, not just imprecise — these dishes are genuinely
shared Río de la Plata heritage, eaten and claimed by both countries, not
exclusively Uruguayan to begin with. No amount of further research would
produce a "provably Uruguayan, not Argentine" distinction, because that
distinction likely doesn't exist as a real difference between the two
countries' versions — it's a structural fact about the dishes, not an
unfinished research task.

**Fixed** both entries and the Gap Log summary to say this outright, and
removed the line suggesting a future research pass could resolve it. This
matters for how a future reader (or a future automated pass acting on the
Candidate Queue) treats this: without the correction, someone could
reasonably read the original phrasing as "open item, go dig for a source,"
when the right instruction is "don't — this isn't a sourcing problem."

---

## Real-world prompt test surfaces a table-setting gap, then a self-correction, 2026-09-24

The user generated an actual image from the Chivito entry's prompt and asked
me to evaluate it against `uruguay.md`. I flagged two real mismatches (bread
type, steak cut) and confirmed several things the file got right. The user
then asked about napkins, sauces, and utensils — the image had none of the
three, and the file didn't address any of them either.

I researched it (two dedicated searches, no Uruguay-specific source found for
napkins or condiment caddies) and reported back — but I made a real mistake
in that same reply: I said "utensils are not a gap" because a source confirms
the sandwich itself is hand-eaten. The user immediately caught the error:
**the plate also includes ensalada rusa**, a mayo-bound potato salad, which
obviously requires a fork regardless of how the sandwich is eaten. I'd
checked the headline dish's own eating custom and stopped there, without
checking the plate's other documented component for its own requirement.

**Fixed**: the Chivito entry's Utensils field now says a fork is required at
the table for the side even when the sandwich is hand-eaten, and the Gap Log
entry was corrected in place (not left standing next to a contradicting
correction) to show the mistake and the fix, not just the final answer.

Separately, the user gave direction not to add chimichurri to the scene,
reasoning that not every documented cultural detail should be added to every
generated scene — doing so risks clutter/over-indexing on local color rather
than a clean, natural shot. I agreed this was a real, generalizable principle
and wrote both this one and the utensils-checking mistake into
`knowledge-base/00-methods/country-file-schema.md` (new §7.5) so future
country builds check every scene component's own requirements rather than
generalizing from the main dish, and don't checklist-include every sourced
fact into one image.

---

## Two generations of the revised prompt confirm a real limitation, 2026-09-24

The user ran the corrected prompt (fixed bread/steak language, added fork
and napkin, explicit no-clutter instruction) twice and shared both results.
Fork, napkin, and no-clutter all landed correctly in both. Bread and steak
did not move at all — both generations reproduced the same crusty loaf and
thick steak cut the original prompt had, despite explicit named corrections
with negation ("NOT a crusty artisan loaf," "NOT a thick steak medallion").

**Judgment call**: rather than write a third prompt with the same jargon
terms said more forcefully, I treated two identical failures as a real
signal about *which lever isn't working* — the terms "pan catalán" and
"churrasco-cut" themselves, not the strength of the instruction. Proposed a
third iteration that drops both terms entirely in favor of plain sensory
description (crumb texture, crust thickness, meat thickness in millimeters,
a familiar comparison object like "a schnitzel") to test vocabulary
recognition as the actual variable, rather than re-running the same
approach a third time and hoping.

**Second finding, unprompted**: comparing the two generations side by side,
one rendered the Coca-Cola can's text correctly ("ORIGINAL TASTE") and the
other garbled it ("ORIGINAL TAST"). This is concrete, first-party evidence
for the brand-fidelity risk flagged earlier in this session, not just a
theoretical caution anymore — logged as such.

**Logged both as reusable methodology** in
`knowledge-base/00-methods/country-file-schema.md` §7.5 rather than as
Uruguay-specific facts, since they're about how *any* KB entry's terms
survive translation into a specific image model, not about Uruguayan food
culture itself: (1) a named correction needs at least two generations before
being treated as confirmed or refuted, in either direction; (2) when a
targeted fix doesn't move two independent generations, suspect the term's
recognizability before assuming the instruction needs to be stronger; (3)
never trust generated brand/logo text as production-safe regardless of how
a single sample looks — composite an approved asset instead.

---

## Third iteration: plain-language swap fixes texture, not proportion, 2026-09-24

The user ran the plain-language revision (dropped "pan catalán" and
"churrasco-cut" for sensory description) and shared two more generations.
Direct side-by-side comparison against the prior round: bread crumb/crust
corrected cleanly and reproducibly — tight fine crumb, smooth golden crust,
a real fix. Meat thickness did not move at all — still 2-3x the thickness
of the adjacent ham slice in both new generations, unchanged from before the
"fix" was applied.

**Judgment call**: rather than treat this as "the technique partially
worked, close enough," I treated the bread/steak split as itself the
finding — the same fix technique succeeded on one attribute and failed on
another *within the same prompt*, which is more diagnostically useful than
either a clean pass or a clean fail would have been. Formed a specific
hypothesis for why: "a few millimeters" is an absolute unit with nothing in
the frame to anchor against, while a crumb/crust description is a
self-contained recognizable pattern. Proposed the next lever as a relative
comparison instruction (thinner than the ham slice beside it) rather than
another absolute restatement of thinness, and explicitly flagged this as
untested — a hypothesis for the next attempt, not a claimed fix, consistent
with this project's discipline against presenting an unconfirmed idea as
settled.

Also caught a second independent data point on the brand-logo risk: the
punctuation between "Coca" and "Cola" rendered as a plain dot instead of the
correct connecting mark, and the "ORIGINAL TASTE" line wasn't legible in
this framing — reinforcing rather than repeating the earlier finding, logged
as an additional data point in the same file section rather than a new one.

Went through the file afterward to catch every other pointer that still used
old names (`us-gulf-south.md`, `us-west-coast.md`) from before the decision
was finalized — the Po'boy and Baja fish taco index entries still pointed to
the pre-rename names and would have silently drifted out of sync with the
FILE ROLE & METHOD table if not caught. Also caught and fixed an invented
date (I'd written "2026-09-26" in one edit without checking against the
session's actual confirmed date of 2026-09-24) before it propagated further.

---

## Uruguay pilot — visual/plating + bread-specificity pass, 2026-09-21

The user asked two things: (1) whether the file should specify plating and
visual aesthetics (grilling style, color, texture, shape) given the KB's
actual purpose is verifying AI-generated food photography, and (2) flagged
that bread references were generic ("bread bun") when Uruguay has specific,
visually distinct local breads (naming tortugas and Italian-style bread as
examples, asking me to confirm what's actually appropriate).

**Judgment calls:**

1. **This was a real structural gap, not a stylistic nice-to-have.** The
   original draft had zero visual/appearance information anywhere — every
   field described ingredients, customs, and sourcing, but nothing about
   what the dish should actually *look like* on camera, which is the one
   thing most directly relevant to the KB's stated purpose (verifying
   AI-generated photography). Rather than answering "yes we should add
   this" and stopping, I added it: a new VISUAL & PLATING NORMS subsection
   (grilling doneness/color, grill-mark pattern, plating style, overall
   color palette) plus a per-dish "Visual/plating characteristics" field on
   all 11 entries.

2. **Confidence discipline on the new visual claims.** Some visual claims
   have real sourcing (asado doneness/color from INAC Uruguay — the
   national meat institute, a primary/institutional source; chivito's
   height from The Kitchn; milanesa napolitana's layered top from Paulina
   Cocina; chajá's pale layering from Laylita; pizza a la piedra's
   thickness/cut from Wikipedia ES and a dedicated recipe source). Others
   (pastel de carne, torta frita, puchero, pasta) had no source that
   discussed appearance directly, only preparation steps — for those I
   wrote visual descriptions inferred from how the dish is assembled/cooked
   and explicitly marked each one "not confirmed by a dedicated visual
   source... flag for review" rather than presenting inferred detail with
   the same confidence as sourced detail. This distinction is also called
   out in the Gap Log so a reviewer knows which visual claims to
   sanity-check hardest.

3. **The grill-mark/grate-shape claim is the single most actionable
   authenticity flag in this whole pass.** Uruguayan asado uses round-rod
   grates (per the earlier-cited Scoolinary comparison), which don't
   produce the bold, evenly-spaced crosshatch sear-stripe pattern that
   V-grooved grates (or AI image generation's defaults, which skew toward
   American-BBQ-style grill marks) produce. I called this out explicitly
   as something to treat as a likely inauthenticity signal, since it's a
   concrete, checkable visual detail rather than a vague "make it look
   authentic" instruction.

4. **Bread: confirmed tortugas, corrected "Italian bread" to more specific
   named breads.** Research confirmed pan tortuga is real and used for
   sausages/hamburgers (now cited for choripán). "Italian bread" as such
   wasn't the right frame — Uruguay's bread repertoire is described in
   sources as its own named set (flauta, felipe, marsellés, pan de campo,
   pan catalán, galleta) rather than as a single "Italian-style" category,
   even though the country's baking tradition is Italian/Spanish-immigrant
   derived like everything else in this file. I corrected three specific
   generic "bread bun/roll" references: chivito → pan catalán (soft,
   faintly sweet), milanesa al pan → pan flauta/felipe, choripán → pan
   tortuga or an individual pan flauta segment. **Caveat carried into the
   file itself:** I could not find a Uruguay-dedicated source describing
   each bread's visual/textural detail (crust color, crumb density) beyond
   the Wikipedia list naming them — flagged as MEDIUM-HIGH confidence for
   which breads exist and are used where, but not fully verified for
   granular visual description of each one.

---

## Uruguay pilot — environment/staging-scenes pass, 2026-09-21

The user asked for the file to cover the physical environments meals take
place in, explicitly mapped to Coca-Cola's standard photography staging
scenarios (casual lunch at home for 1/2/3 people, dinner at home, an
outdoor meal at home, a solo meal on the go, and away-from-home dining for
1 person vs. 2-3 people) — architecture, materials, outdoor-scene detail —
plus cultural cues that thread the needle between generic/flag-coded and
caricature/stereotype.

**Judgment calls:**

1. **This is a new subsection, not a retrofit of existing fields.** Unlike
   the bread and visual-plating corrections (which fixed/extended existing
   fields), nothing in the first two drafts addressed setting/environment
   at all. Added a full ENVIRONMENT & STAGING SCENES subsection under
   TRUSTED CONTENT, covering general norms once (climate, housing types,
   materials, a caricature-avoidance note) and then each of the six
   requested scenarios individually, rather than repeating the general
   norms six times.

2. **The single most load-bearing finding is the "quincho."** This is a
   real, specifically-named Rioplatense architectural feature — a covered
   outdoor structure built around a parrilla, used for exactly the "meal
   outdoors at home" scenario — and it is a much stronger, more specific
   answer than a generic "backyard patio." I gave it its own bullet with a
   direct Wikipedia citation rather than folding it into a general
   materials note.

3. **Explicitly caveated the quincho as aspirational, not universal.**
   A private quincho requires a house with a yard; a large share of urban
   Montevideo households live in apartments. Rather than presenting the
   quincho as the default "outdoors at home" answer, I flagged that this
   is the iconic version and that an apartment-appropriate alternative
   (rooftop terrace, balcony, or the historic casa-chorizo interior patio)
   may be needed depending on which household the brief is depicting. This
   judgment call is my own synthesis, not directly sourced, and is labeled
   as such in the file.

4. **Handled the caricature-avoidance ask as editorial guidance, explicitly
   marked as such — not dressed up as a sourced factual claim.** The
   architecture/materials sourcing (Art Deco apartment buildings, muted
   stucco tones, decorative wrought-iron balconies rather than defensive
   window bars) supports a specific claim: Uruguay's visual register reads
   closer to modest Southern European than to the "tropical Latin America"
   shorthand (bright saturated color, palm fronds, market-stall chaos,
   security-grille windows) that generic prompting tends to default to. I
   said this directly, and paired it with an equal warning against
   over-correcting into a rural gaucho cliché (ponchos, campfires, dirt
   roads) for what should be an ordinary urban/domestic scene — that
   register belongs to the interior "campo" context the triage section
   already separated out, not to a default Montevideo home. I labeled this
   whole bullet "editorial judgment, not a sourced factual claim" rather
   than assigning it a HIGH/MEDIUM/LOW confidence tag like the factual
   bullets, since it's a synthesis call, not a claim with citable sources
   behind it in the same way.

5. **Handled "don't pin to a specific neighborhood" by keeping named
   neighborhoods (Pocitos, etc.) in citations only, never in the operative
   guidance.** Research kept surfacing Pocitos' Art Deco beachfront towers
   as the most-written-about example of Montevideo residential
   architecture — precisely because it's distinctive enough to get written
   about, which is exactly the kind of over-specific anchor the user asked
   me to avoid defaulting to. I used it only as evidence that the Art Deco
   *style* exists and is real, and explicitly wrote that this or any other
   single named neighborhood should be treated as one option, not the
   required default. Logged in the Gap Log that this is a structural
   tension in what's sourceable at all: distinctive things get written
   about, "ordinary and unremarkable" mostly doesn't, so the "ordinary"
   guidance leans more on my own synthesis of the contrast than on a
   source that directly describes an ordinary, unremarkable setting.

6. **Flagged, rather than silently resolved, a real tension in the
   sourcing**: one source states the "grab-and-go" concept barely exists
   in Uruguay (long, scheduled lunch/dinner windows), while another
   describes chivito as commonly eaten as street/on-the-go food. Rather
   than picking one and dropping the other, both are presented with the
   contradiction named directly, and mate-carrying plus the "carrito"
   street-cart custom are offered as the better-supported "on the go"
   anchors than a generic rushed-coffee-and-pastry trope.

7. **This is now explicitly logged as the thinnest-sourced section in the
   file overall** (see the file's own Gap Log and Research Log), since
   architecture/urban-planning-level cultural detail is inherently harder
   to find dedicated, citable sources for than named dishes and customs
   are. Flagged for SME review ahead of the other sections if review time
   is limited.

---

## Uruguay pilot — environment sourcing-upgrade pass, 2026-09-21

The user asked a methodology question: given that architecture/setting
detail is thinly sourced, how do we get trusted material here without
using actual imagery (no downloading or licensing photos — text
descriptions and trends only)? I proposed three source types that are
text describing real, specific, current things rather than generic
commentary: architecture portals publishing real projects in prose
(ArchDaily), real estate listing copy (infocasas.com.uy), and municipal
photo-archive metadata (Centro de Fotografía de Montevideo). The user
said to go ahead.

**What this pass found, and the judgment calls involved:**

1. **It surfaced a real correction, not just additional color.** The
   original "meal outdoors at home" scenario said apartment dwellers
   "mostly lack quincho-equivalent access" — a plausible-sounding inference
   I had explicitly flagged as an unconfirmed judgment call at the time.
   Actual current infocasas.com.uy listings directly contradict it:
   private "terraza con parrillero" and shared building "SUM con
   parrillero" are routine, explicitly advertised features. I corrected
   the scenario text rather than just adding a caveat on top of the wrong
   claim, and marked the correction inline with today's date so a reviewer
   can see exactly what changed and why, the same pattern used for the
   earlier bread-service correction.

2. **Treated real estate listings as primary market evidence, not as a
   weaker source to apologize for.** A live, currently-posted listing
   describing an actual apartment's actual features is arguably stronger
   evidence for "what is common in Montevideo housing right now" than a
   general architecture essay would be — it's revealed preference/market
   reality, not someone's characterization of a trend. I labeled it that
   way in the confidence tag rather than defaulting to a lower confidence
   just because it's a commercial listing site rather than a media outlet.

3. **Added monoambientes as a fourth housing category, not folded into an
   existing one.** El Observador's reporting gave a specific, current,
   statistically-grounded finding (2,200+ subsidized units built since
   2020, real price data, a documented resident's actual studio layout)
   that materially changes the "1 person at home" scenario — eating,
   sleeping, and living happen in one undivided room, not a separate
   dining nook. This was strong enough to warrant its own bullet rather
   than a footnote, and directly improved a scenario I'd previously
   flagged as weakly sourced ("modest apartment kitchen" was a generic
   guess; monoambiente specifics are a documented reality).

4. **Deliberately did not fetch or analyze any actual images**, consistent
   with what the user asked for — every source used here is text (listing
   copy, architect's project description, press reporting) describing a
   real thing, never a photo I looked at myself. Flagged the Centro de
   Fotografía de Montevideo archive as a strong candidate for a *future*
   pass rather than using it now, since actually using it well would mean
   engaging with specific cataloged photos (even just their metadata/
   descriptions) in a more deliberate way than a single search pass
   allows — didn't want to gesture at using it without doing it properly.

5. **Did not stretch the ArchDaily "Urban House" project's residential
   register into a claim about typicality.** It's one renovated
   architect-designed house in Cordón, published because it's distinctive
   — the same caution from the earlier Pocitos/Art Deco discussion applies.
   Used it only as concrete corroboration that the casa-de-patio/interior-
   courtyard pattern is real and still being built around today, not as
   evidence of what an "ordinary" Cordón house looks like.

---

## Fourth prompt iteration: diagnosing the stacked-halves defect, 2026-09-24

The user asked a targeted diagnostic question about the fourth chivito test
image (fork moved beside the plate, steak thickness reworded as a relative
comparison to the ham slice): why does the sandwich keep rendering as two
stacked halves instead of one cross-section, and is that traceable to the
`uruguay.md` plating text or to prompt phrasing?

Checked the actual Chivito "Visual/plating characteristics" text directly
rather than relying on memory: it says the dish's defining trait is
"height/stacking... a tall, multi-layer cross-section (steak, ham, melted
cheese, egg if canadiense, vegetables)... genuinely difficult to bite into,
not a flat, thin sandwich." That sentence describes the *whole/half
sandwich's own internal layering* as a trait of the dish — it never
instructs cutting the sandwich for the photo, and never mentions two
pieces or a stack of pieces. The KB is not the source of the defect.

Re-examined all six generated images rather than just the newest one, to
find when the pattern actually started: images 1 and 2 (earliest prompts)
show a single, uncut sandwich. Images 4 and 5 are two generations from the
*same* prompt — 4 shows a correct single half with the cut face toward the
camera, 5 shows two stacked halves. Image 6 (the newest) also shows two
stacked halves. That split within a single identical-prompt run set is the
key evidence: the defect isn't tied to what changed in the newest prompt
(fork position, steak phrasing), and it isn't a one-off bad generation —
it's the same prompt resolving two genuinely different ways across runs.

**Diagnosis**: the prompt's own recurring phrase — "cut in half to reveal
its tall, multi-layer cross-section" — is ambiguous about what happens to
the second half once the sandwich is cut. Two real food-photography
conventions both satisfy those words: showing one half with its cut face
to the camera (intended), or stacking both halves with cut faces exposed
(a "club-sandwich tower" convention, arguably the more common stock-photo
trope of the two). Nothing in the prompt tells the model which one to
produce or what to do with the half not facing the camera, so it picks
between two valid readings inconsistently.

**Fix applied**: logged this as a new generalizable prompt-engineering
finding in `country-file-schema.md` §7.5 (not a cultural fact, so it goes
in the methods doc, not `uruguay.md`) — when an instruction implies a
byproduct (cutting produces a second piece), state explicitly what happens
to it, rather than leaving the model to default to a convention on its
own. Did not touch `uruguay.md`, since the audit confirmed it isn't the
cause. Did not yet re-test a revised prompt phrase — that's the next step,
and per this project's own two-generations rule, any fix needs at least
two runs before being called confirmed.

---

## Fifth iteration: stacking fix confirmed, new "no legible text" rule, 2026-09-24

The user ran the revised (v5) prompt — explicit "only one half is shown,
the other half is not in frame" language — and shared four generations
total. All four held the single-half, cut-face-forward composition with no
stacking. Updated the §7.5 entry from "fix applied, untested" to
confirmed: naming the byproduct explicitly resolved the ambiguity rather
than just reducing it, a clean result against the roughly 50/50 split seen
across the four generations that used the old unresolved phrasing.

The user separately flagged a new, broader issue: one generation's
background included a chalkboard menu board that rendered fully legible
and coherent text ("CHÍVITO AL PAN $450 / ASADO $520 / PILSEN") — nothing
in the prompt asked for this, and nothing about it is guaranteed to
reproduce correctly (rather than as garbled nonsense) on the next run. The
user's direction: never want text or legible signage in any composition,
not just the Coca-Cola can. Logged this as a new §7.5 rule in
`country-file-schema.md`, generalizing the existing "don't trust generated
brand text" finding: default every prompt to explicitly excluding all
legible text/signage from the frame (packaging, menu boards, chalkboards,
receipts, wall décor), and treat any text that must be accurate — the
Coca-Cola can included — as a post-production compositing task, never
something to ask the generation itself to render correctly. Placed in
`country-file-schema.md` since it's the only non-region-specific file in
the KB and the rule applies to every future country/region file, not just
Uruguay.

---

## New Jersey pizza gap filled ahead of a test prompt, 2026-09-24

The user asked for a photorealistic prompt of pizza outdoors in New Jersey.
`us.md`'s Pizza entry only documented NY-style, Chicago deep-dish,
Detroit-style, New Haven apizza, and St. Louis-style — no New Jersey-
specific style, and `us-northeast.md` doesn't exist yet, so there was
nothing to point to. Rather than default NJ to generic "NY-style" (an
approximation, not a sourced NJ claim) or fabricate detail to fill the
prompt, ran two quick, targeted web searches before writing anything.

Found two real, well-corroborated, NJ-specific facts and added both
directly to the Pizza entry (same pattern as the existing New
Haven/St. Louis bullets — full sourced detail lives in the national file
now, pointer to `us-northeast.md` for future expansion):
1. **Trenton tomato pie**: reversed construction (cheese/toppings down
   first, sauce ladled on top last), tangy tomato-forward flavor, traced to
   specific still-operating originators (Papa's Tomato Pies, 1912). HIGH
   confidence — Wikipedia plus independent regional food journalism.
2. **Jersey Shore boardwalk pizza**: thin-crust, sweet sauce, often cut
   Sicilian-style into squares, sold by the slice at walk-up boardwalk
   stands rather than sit-down pizzerias — an inherently outdoor,
   walking/handheld eating register tied to summer beach-vacation culture,
   not an everyday meal. HIGH confidence — trade press plus a named
   business's own documented history (Manco & Manco since 1956).

**Judgment call**: picked the boardwalk register, not Trenton tomato pie,
as the basis for the actual test prompt, since the user specifically asked
for "outdoors" — boardwalk pizza is inherently an outdoor/walking scene,
where Trenton tomato pie is a sit-down pizzeria style with no inherent
outdoor context. Documented both anyway since a future request could
reasonably want the sit-down NJ style instead.

---

## New production rule: no hand-held framing, even for handheld foods, 2026-09-24

Two generations of the boardwalk-pizza prompt (which included "a hand
holds a...") both came back as an in-hand, POV-style shot. The user's
direction: scenes should always be staged on a table or other surface, not
held in a hand — a standing production/composition choice for this whole
image program, not a correction to any KB fact. `us.md`'s Pizza entry still
correctly documents boardwalk pizza as authentically handheld/by-the-slice
— that fact isn't being changed. The convention only governs how the
*photograph* is composed: even a genuinely by-hand food should be shown
resting on a surface (a counter, table, railing — a boardwalk slice can sit
on its own wax-paper liner set on the railing, which is still realistic
boardwalk behavior) rather than staged as a hand-held POV shot. Logged as a
new §7.5 rule in `country-file-schema.md`, since it applies to every future
country/region file and every handheld dish in this project (sandwiches,
choripán, tacos, hot dogs), not just this one test.

---

## Verified, not overturned: the visible sauce spiral, 2026-09-24

The user challenged the "spiral of sauce" detail in the boardwalk-pizza
images as likely a food-prep artifact (a mixing/ladling motion) rather
than something a food stylist would actually see in a finished, plated
photo — reasoning that in ordinary pizza-making, sauce goes down first and
gets fully covered by cheese, so any spiral shape disappears by the time
the pie is baked. That reasoning is correct for ordinary pizza. It doesn't
apply here specifically because Trenton tomato pie and Manco & Manco
boardwalk pizza are documented as doing the layering backwards on purpose
— cheese down first, sauce ladled on last — which means the sauce is the
top-most layer in the finished, baked pie, not something later buried.

Ran two more targeted searches to verify before answering rather than
trusting the original characterization from memory. Found independent,
specific corroboration that the visible spiral is a genuine finished-plate
trait, explicitly called out as one of the style's defining, photographed
characteristics — not a prep-motion detail: a pizza-making forum's
description of Manco & Manco's technique ("the sauce is placed on top of
the cheese in a swirling spiral pattern... visually distinctive and very
visible on top of the pizza... one of the defining characteristics"), and
Central Jersey's description of Trenton tomato pie ("the vibrant red sauce
is clearly visible draped across the top of the white cheese layer").

**Outcome**: did not change the underlying claim, since it held up under
scrutiny — but tightened the `us.md` wording for both the Trenton and
boardwalk pizza bullets to state explicitly that this is a finished-plate
visual trait surviving the bake, not a mixing step, specifically to
prevent this exact reasonable-sounding but incorrect assumption from
recurring for a future reader who hasn't seen the verification. This is
the same discipline as the earlier chivito utensils correction: treat a
user's skepticism as a prompt to re-verify, and either fix the file or
clarify it so the same question doesn't need to be re-litigated.

---

## New schema principle: surface variants as choices, not silent defaults, 2026-09-24

The user's forward-looking point: as this KB eventually feeds a guided
tool that walks a user toward a finished image prompt, a dish with
multiple real, coexisting regional/local variants (Trenton tomato pie vs.
Jersey Shore boardwalk pizza vs. NJ's everyday NY-influenced pizzeria pie)
should offer those as an explicit choice, not have the tool (or me, writing
a prompt by hand) silently pick one. Added this as a new §4.6 in
`country-file-schema.md`, tied directly to the existing regional
form-variation schema (§4.2/§4.3) so it's read as guidance on how that
data gets *used* by a downstream tool, not just how it's documented: the
variant list is the option set to offer; "Default when unspecified" is a
fallback for no-preference cases, never a reason to skip asking.

While checking whether NJ actually has a sourceable "most common statewide"
default (needed to know whether a third option belonged in the picker
alongside the two already-documented specialty styles), hit and caught a
real research error worth recording plainly: an initial search summary
suggested "Grandma-style" square pizza as particularly associated with New
Jersey. A second, more specific search contradicted this directly —
Wikipedia's Grandma pizza entry attributes the style's origin to Umberto's
Pizzeria in New Hyde Park, Long Island, NY, not New Jersey; only Sicilian-
style (a different, already-documented style) was actually called out as
popular in NJ. Did not add the Grandma-pizza claim anywhere. Instead added
a Gap Log entry to `us.md` documenting both the surviving lead (NJ's
everyday pizzeria style is broadly NY-influenced with a thicker, sturdier
crust — MEDIUM at best, commercial/enthusiast sourcing only) and the
discarded one, so a future pass doesn't waste time re-chasing the same
false lead. Consistent with this project's standing practice: a search
result is a lead to verify, not a fact to write down on first read,
especially when a second, more specific source directly contradicts it.

---

## Coney Island pizza scene: checked the location before writing the prompt, 2026-09-24

The user asked for a similar outdoor pizza prompt, this time at Coney
Island, NY. NY-style pizza itself was already fully documented (no new
dish research needed), but the location warranted a quick check before
staging it: is pizza actually Coney Island's own iconic food the way
boardwalk pizza is for the Jersey Shore, or would that overclaim?

Search results confirmed Coney Island's own signature food is Nathan's
Famous hot dogs, not pizza — the pizzeria found in the research
(Totonno's) is a few blocks inland, not a boardwalk stand. Rather than
stage the scene as if pizza were Coney Island's defining food (the same
overclaiming mistake this project has caught before, e.g. milanesa
napolitana/pizza a la piedra), added a venue note to the NY-style pizza
entry in `us.md` stating this plainly, while still using the setting: it's
a real, plausible place to eat a NY-style slice outdoors, just not the
location's own culinary claim to fame.

Also sourced the specific visual landmarks that make an outdoor Coney
Island scene unmistakable without relying on legible signage: the Wonder
Wheel (1920) and the Cyclone (1927), both on the Riegelmann Boardwalk
(1923) — recognizable by silhouette alone, a clean fit with the
no-legible-text production rule already in the schema doc. Also added the
NY-style slice's triangular wedge cut as an explicit point-of-difference
against Jersey Shore boardwalk pizza's square Sicilian cut, so the two
test prompts stay visually distinguishable from each other.

---

## Coney Island test results: strong overall, one consistent can-legibility miss, 2026-09-24

Both generations landed the cultural/compositional targets well: correct
triangular NY-style wedge cut (vs. the prior test's square Sicilian cut),
sauce correctly hidden under the cheese (vs. the prior test's exposed
spiral), Wonder Wheel and coaster silhouettes clearly establishing Coney
Island without any legible signage, food resting on the railing rather
than hand-held.

One consistent miss across both: the prompt explicitly asked for the
Coca-Cola can's label to be soft-focus/not legible, in the same sentence
asking for background signage and ride marquees to stay blurred. Both
generations complied for the background elements but rendered the can's
own logo sharp and fully legible regardless — as if that specific clause
had no effect. Logged as a new, more specific finding in
`country-file-schema.md` §7.5: the "no legible text" rule reliably works
for incidental/background text but does not reliably work for the
Coca-Cola can itself, which appears to have too strong a training prior
toward being rendered sharply and recognizably. Practical takeaway: this
doesn't change the existing plan to composite an approved can asset in
production — it confirms that plan is the *only* reliable control for the
can, not a fallback for when the prompt-level instruction happens to fail.

---

## New standing rule: never name real trademarked landmarks in a prompt, 2026-09-24

The user flagged a legal concern with the Coney Island prompt: it named
the Wonder Wheel and Cyclone specifically, and both are proprietary,
trademarked attractions operated by named businesses (Deno's Wonder Wheel
Amusement Park; Luna Park), not generic public architecture. Specifying
them by name asks the model to reproduce another company's identifiable
structure/design — a legal exposure distinct from this project's usual
authenticity concerns.

Added a new standing rule to `country-file-schema.md` §7.5: a KB entry can
still document a real, specific landmark as useful context for
understanding a place (the same role Mercado del Puerto plays for
Uruguayan asado) — that's real, useful research and stays in the file —
but a prompt built from that entry should describe the generic category of
structure/setting instead ("a large Ferris wheel and a wooden roller
coaster silhouette") rather than naming or specifying the real one. This
applies broadly, not just to this example — stadiums, theme park rides,
distinctively branded storefronts, any other entity's recognizable IP.
Cross-referenced this rule directly from the Coney Island venue note in
`us.md` so a future prompt-writer reading that entry doesn't repeat the
same mistake. Did not remove the landmark research itself — it's accurate
and useful for understanding the place, just not something to be spec'd
literally into an image-generation prompt.

---

## Landmark-genericization rule confirmed, 2026-09-24

Ran the revised (generic-landmark) Coney Island prompt twice. Both
generations produced a plausible Ferris wheel/roller coaster skyline with
no recognizable resemblance to the Wonder Wheel's or Cyclone's actual
distinctive designs (no wood-lattice structure, no matching ride geometry)
— the boardwalk-amusement-park category read correctly without reproducing
either real attraction. Marked the rule "confirmed" rather than just
proposed in `country-file-schema.md`, same pattern as the earlier
stacked-halves fix.

Also picked up an additional data point on the can-legibility finding: one
of the two generations showed the blurred back label (compliant), the
other the sharp, fully legible front logo (non-compliant) — a mixed rather
than uniform result. Didn't change the existing finding or the production
plan over this, since "unreliable, don't depend on it, composite instead"
already covers a mixed outcome as well as a uniform one.

---

## New file: knowledge-base/01-brand/coca-cola-guidelines.md, 2026-09-24

The user pointed out that product-representation rules (camera-facing,
full-height framing, and the reference-image best practices they're
compiling) don't obviously belong in `country-file-schema.md` — that file
is about building and using cultural/culinary content, not about
representing the Coca-Cola product itself, which is the one constant
across every country file regardless of cuisine or location. Agreed and
acted on it rather than just discussing it, since the folder scheme
(`00-methods/`, `02-culture/`, skipping `01-`) already signaled a reserved
spot for exactly this category.

Created `knowledge-base/01-brand/coca-cola-guidelines.md` and moved the
genuinely product-specific findings out of `country-file-schema.md` §7.5
into it: the logo/wordmark unreliability finding (ORIGINAL TASTE/TAST
variance, the hyphen-vs-dot connector error) and the can's inconsistent
resistance to "keep it illegible" instructions, plus the resulting
production standard (composite an approved asset, never trust generated
brand text). Left two placeholder sections for the user's incoming rules:
product representation best practices (camera-facing, full-height, etc.)
and reference-image-conditioning best practices, the latter marked
explicitly as an untested hypothesis, not a confirmed technique, per this
project's own two-generations-before-concluding discipline.

Left in `country-file-schema.md` §7.5: everything genuinely
subject-agnostic — the two-generations testing discipline itself (general
rule, illustrated with a pointer to the brand doc for the Coca-Cola
example rather than restating it), the general no-legible-text/signage
rule (applies to any incidental text, not just the can), the cut-in-half
ambiguity finding, the hand-holds framing rule, the trademarked-landmark
rule (about *other* companies' IP, not Coca-Cola's own), and the
vocabulary/texture-vs-proportion findings. Each place in the schema doc
that used to hold Coca-Cola-specific detail now points to the new file
instead of restating it, so there's one place to update as the can
findings evolve rather than two.

---

## NYC halal cart gyro added as a second coexisting form, 2026-09-24

The user asked for a gyro-in-Queens-from-a-street-cart prompt. `us.md`'s
existing Gyro entry only documented the traditional Greek-American form
(spit-shaved meat, pita, tzatziki, restaurant-served) — nothing about
street carts, which is almost certainly what "a gyro in Queens from a
cart" actually means in practice, and a real, visually distinct form in
its own right (chicken/lamb blend rolled burrito-style in pita, the white/
red/green sauce trio, foil wrap, silver cart with umbrella), not a lesser
version of the restaurant gyro.

Researched and added it as a second entry under Gyro, explicitly framed
using the §4.6 "surface coexisting variants" principle added earlier this
session — this is exactly the kind of case that principle exists for.
Also added real historical/demographic context (Muslim immigrant vendors,
predominantly Egyptian, Bangladeshi, and Afghan, took over NYC's street-
cart trade from Greek vendors in the late 1980s/1990s, who had themselves
succeeded Italian/German vendors — with sourced before/after vendor-count
data) since it explains why a NYC cart "gyro" today is often this distinct
form rather than the traditional Greek one.

Checked for Queens-specific detail (rather than generic NYC-wide claims)
and didn't find a dedicated source beyond general borough-diversity
framing — flagged honestly as LOW confidence for anything Queens-specific,
rather than implying the halal cart phenomenon is somehow unique to Queens
when the sourcing only supports a citywide claim.

Also flagged a prompt-writing implication directly in the entry: the
traditional cart umbrella is itself a specific commercial brand's product
(a named hot-dog-cart umbrella maker whose umbrellas became a general NYC
street-cart fixture) — per the landmark/trademark rule in
`country-file-schema.md` §7.5, describe it generically ("a yellow cart
umbrella") in an actual prompt rather than naming the brand.

---

## Queens gyro test complicates the can-vs-background pattern, 2026-09-24

The generated image validated the new KB research well: correct burrito-
style tight roll (not open-faced), the white-sauce-base/red-sauce-drizzle
combination rendered accurately, silver cart with visible grill and
condiment squeeze bottles, food resting on the cart counter rather than
hand-held — all consistent with the halal cart entry just added.

But it also complicated a finding rather than confirming it. The prior
Coney Island tests suggested a clean pattern: background signage reliably
stays blurred, only the Coca-Cola can resists the "keep it illegible"
instruction. This test inverted that — a background storefront sign and a
neon sign both rendered as sharp, legible-looking (if gibberish) text
despite the same instruction, while the can rendered with fully correct,
legible branding. Rather than let the earlier, cleaner-looking pattern
stand on a small sample, revised the finding in
`knowledge-base/01-brand/coca-cola-guidelines.md` §1 to state plainly that
neither background text nor the can is a dependable target for a "keep it
illegible" instruction — the can still appears to fail more often in
aggregate, but the margin is weaker than the first two tests alone
suggested. Consistent with this project's practice of revising a finding
when new evidence complicates it rather than cherry-picking the tests that
confirm the original claim.

Also noted, but not logged as a KB finding: the cart umbrella rendered
navy/dark blue rather than the yellow specified in the prompt. A single
data point isn't enough to call this a pattern under this project's own
two-generations discipline — flagging it here for awareness, not writing
it into either methods file yet.

---

## New finding: scale consistency and the lens-spec question, 2026-09-24

The user flagged that the two gyro generations disagreed sharply on scale
— one where the wrap looked nearly twice the can's width, one much more
realistic — and asked whether the "50mm at f/2.8" lens spec was
responsible, wondering if a longer lens/greater distance would help.

Answered from how these models actually work rather than real camera
physics: lens/aperture language in a prompt is a stylistic cue toward a
bokeh/framing convention the model associates with that phrasing from
training data, not a literal optical simulation — there's no real 3D scene
being rendered through virtual glass, so changing the focal-length number
isn't expected to reliably fix scale on its own, even though it's a
reasonable real-world photography intuition.

Recommended the already-established, already-proven lever instead:
anchor the food's size to another object in frame with a known, fixed
real-world size, the same technique that fixed the chivito steak-vs-ham
thickness problem. The Coca-Cola can is a natural fit here specifically
because it's already present in nearly every scene this project generates
and has a fixed, standard real-world size (~4.83 in tall) most people have
an intuitive sense of — logged as a new, general (not brand-specific)
finding in `country-file-schema.md` §7.5, flagged explicitly as untested
pending a revised prompt and the usual two-generations check.

---

## Moved the can's real dimensions into structured reference data, 2026-09-24

The user pointed out a real gap in how the scale-anchor finding was
recorded: the can's actual dimensions only existed inline, inside a
paragraph of prose in `country-file-schema.md` §7.5 explaining a specific
past test. That's fine for me to reference from memory of this
conversation, but a user building a prompt from the KB directly — without
having read that narrative — would have no way to find the actual number
to use, and no template to copy. Same underlying issue as the earlier
"where should camera-facing/full-height rules live" question: physical
product specs are reference data about the product, not a narrative
finding about a testing methodology, and they need to be locatable and
directly usable, not just mentioned in passing.

Added a new §3 "Physical specifications — scale-anchor reference for
prompts" to `knowledge-base/01-brand/coca-cola-guidelines.md`: the standard
12 fl oz can's real dimensions (4.83 in / 12.3 cm tall, 2.6 in / 6.6 cm
diameter), an explicit note that other formats (bottles, mini cans) aren't
documented yet and shouldn't be assumed to share these numbers, and a
copy-adaptable template scale-anchor clause. Trimmed the
`country-file-schema.md` §7.5 finding to keep the general lesson (why lens
spec doesn't control scale, why a known-size in-frame anchor works) and
point to the brand file for the actual number, rather than duplicating it
in both places — consistent with how the can-legibility findings were
already split earlier this session.

---

## Market roadmap received and recorded, 2026-09-24

The user provided TCCC's top-markets priority list (US, UK, Germany,
Spain, Mexico, Argentina, Brazil, Turkey, South Africa, Nigeria, China,
India, Japan, Thailand, Philippines, plus Pakistan/Bangladesh/Indonesia
listed without a numbered rank) alongside confirming the sequencing
strategy from the prior turn: build the US first and in maximum depth,
specifically because it's the hardest, most structurally complex case, on
the theory that the schema will generalize more easily to simpler markets
if it holds up here first.

Created `knowledge-base/00-methods/market-roadmap.md` as a living status
tracker rather than leaving this list to live only in chat — a genuine
gap, since nothing in the repo previously recorded which markets were
planned or in what order, and this will matter increasingly as more
countries get built. Noted Uruguay separately in that file, since it's not
on TCCC's list but is the KB's existing pilot/schema-origin country and
should stay visible as such rather than being conflated with the numbered
priority markets.

---

## Starting us-northeast.md: internal zone triage and subagent delegation, 2026-09-24

The user directed going in depth on the US specifically because it's the
hardest, most structurally complex market — the theory being that if the
schema holds up here, it generalizes more easily to every simpler,
typically single-file market on the new roadmap. Started the first
regional file, `us-northeast.md`, since three separate `us.md` index
entries (NY-style pizza incl. NJ specialty styles, NYC halal cart gyro,
several deli/sandwich dishes) already depend on it and it's the most
immediately useful build.

**Internal zone decision**: the 13-file regional list (including keeping
Northeast as one file, not further split) was already decided in an
earlier round — not re-litigated here. But evidence already sitting in
`us.md` shows genuine internal texture within "Northeast" (Connecticut vs.
Maine lobster roll are already documented as materially different; New
Haven apizza vs. NY-style pizza are already different; Boston's "grinder"
vs. NYC's "hero" terminology already different) — enough to warrant
labeled internal zones within the one file, the same treatment Uruguay
gave its coastal-vs-interior distinction and `us-south.md` gives
Lowcountry. Split into three zones based on that existing evidence: NYC
Metro & New Jersey; Southern New England (CT/RI); Northern New England
(Boston/MA, VT, NH, ME).

**Delegation**: launched three parallel background research subagents, one
per zone, each instructed to read `country-file-schema.md` and the
existing `us.md`/`uruguay.md` content first, pull forward (not duplicate)
the dish entries already sourced in `us.md` that point to
`us-northeast.md`, research genuinely new dishes/environment detail for
their zone with the same sourcing discipline as the rest of this project,
and write a scratch draft rather than edit any KB file directly. This
mirrors the original `us.md` buildout's parallel-subagent pattern. Each
agent was also asked to flag (not decide) whether their zone might warrant
further internal subdivision — e.g., whether Boston/MA reads different
enough from rural Vermont/NH/Maine to eventually need a fourth zone — since
that's a structural call for human review, not something a research pass
should settle on its own. Results pending; will review, reconcile, and
merge into `us-northeast.md` by hand once all three complete, checking for
duplication against `us.md`'s existing entries before anything is written.

---

## us-northeast.md merged and published, 2026-09-24

All three zone research passes (NYC Metro & NJ; Southern New England;
Northern New England) completed. Two structural questions surfaced
independently by the research were put to the user rather than decided
unilaterally, per this project's human-sign-off practice: (1) whether
Boston proper should get its own internal callout distinct from rural
Vermont/New Hampshire/Maine — **decided: no, stays one zone**; (2) where
New Haven apizza's authoritative entry should live, since both the
Southern New England pass and the NYC Metro/NJ pass independently wrote
full entries for it — **decided: Southern New England** (geographically
correct; keeps zone boundaries predictable). The NYC/NJ pass's extra,
independently-sourced apizza detail (Modern Apizza's coke-to-oil oven
switch, the specific Pepe's/Sally's/Modern founding chronology) was merged
into the single surviving entry rather than discarded, so no sourced
research from either pass was lost — this was a hand-reconciliation
judgment call, not an instruction either pass could have resolved itself.

Wrote the merged file to `knowledge-base/02-culture/regions/usa/us-northeast.md`
— the first regional file built under the 13-file US structure, and the
first real test of whether `country-file-schema.md` holds up one level
below the national-index layer. Tightened each zone's repeated
scaffolding language (all three drafts independently restated "this is one
of three zones, not a separate file" boilerplate) into a single statement
in the file's FILE ROLE & METHOD section rather than three redundant
copies.

**Immediately after publishing, the user gave a calibrating note**: the
realistic use case skews toward general, archetypal Northeastern scenes
(coastal/seafood-shack, fall outdoors, indoor restaurant, beach moment)
rather than hyper-local neighborhood-level staging (a named NYC block, a
Beacon-Hill-vs-South-End architectural distinction). This didn't invalidate
the neighborhood-level research — it's still real, sourced, and needed to
get dish-level authenticity right — but it meant the file's most-used
content wasn't easy to find on top. Added a "Typical use note" and a new
"QUICK-REFERENCE: GENERIC SCENE REGISTERS" table right after the zone
characterizations, surfacing the four broadly-reusable registers (coastal
seafood shack, fall outdoors, indoor restaurant, beach/boardwalk) ahead of
the more granular city/neighborhood depth further down, without deleting
or downgrading that depth. This is itself a generalizable lesson for every
future country/region file — noted for `country-file-schema.md` if a
similar signal recurs on a future file.

---

## Tableware composition document integrated, regional population deferred, 2026-09-24

The user shared an existing standalone document ("TABLEWARE COMPOSITION
REQUIREMENTS - AGENTIC SYSTEM," v2.0, a .docx) and asked to evaluate the
cutlery/tableware it covers against the 18-market roadmap, adding what's
most common across those regions — while explicitly leaving open whether
to do that now or after the 18 country files exist.

Read the full document (642 lines once extracted) rather than skimming —
it turned out to be considerably more developed than a simple dimensions
list: a full scene-composition framework with a non-negotiable hero-zone
rule, a depth-hierarchy rule (nothing in front of the Coca-Cola bottle),
detailed plate/bowl/vessel dimension tables, vessel shape/orientation
logic, spacing rules and clearances, six labeled decision-tree scenarios,
and a validation checklist. Its own §11 ("Regional/Contextual Overrides")
was already a self-aware placeholder — it named the categories that would
need regional attention (chopsticks/hands-only cultures, communal vs.
individual serving, traditional vessel shapes by cuisine) but had zero
actual content, consistent with the user's own read that the document was
incomplete specifically on this axis.

**Split the content by concern, the same separation-of-concerns pattern
established earlier for the can-legibility/scale findings**: created
`knowledge-base/00-methods/tableware-composition-reference.md` for the
general plate/vessel/composition rules that apply whether or not
Coca-Cola is even in frame (dimensions, spacing, vessel orientation,
scenario templates, validation checklist) — genuinely reusable across
every country file, brand-agnostic. Moved the Coca-Cola-SKU-specific
content (hero-zone rule, depth hierarchy, bottle/can/glass dimension
tables, multi-serve bottle clearance radii, SKU-selection-by-register
logic) into `knowledge-base/01-brand/coca-cola-guidelines.md` §4 — this
turned out to be exactly the "product representation best practices"
placeholder left open earlier in this project, now filled by real content
rather than a promise to add it later. Cross-referenced both directions
rather than duplicating.

**Decided (with the user's sequencing question left open, so this is my
own call, stated plainly rather than silently made)**: defer populating
the regional/cultural tableware overrides (§5 of the new methods file)
until each country/region file gets its own research pass, rather than
researching all 18 markets' tableware conventions in a dedicated pass
now. Reasoning: (1) this project's entire discipline is sourced-research-
first, and speculatively researching "common Indian tableware" disconnected
from actually building `india.md` risks duplicate work now and
inconsistency later, if the two research passes land on different
specifics; (2) the schema already has a natural home for this
exact information — the "Utensils/eating customs" field on every dish
entry (`country-file-schema.md` §4.5) — so a country file's own research
will surface its tableware/cutlery norms as a side effect of normal dish
research, not as separate work; (3) the source document's own structure
(a placeholder table naming categories, not populated) was already built
to be filled in incrementally this way. Built the placeholder as an
actual per-market status table (all 18 roadmap markets plus a note on
Uruguay/Argentina's mate-gourd overlap) with an explicit instruction not
to treat its "expected" flags (chopsticks for China/Japan, thali plates
for India, fork-and-spoon for Thailand) as sourced claims — they're
research-priority hints for whoever builds those files next, not
findings this KB stands behind yet.

---

## Fixed an overclaim: street food isn't staged only at point of sale, 2026-09-24

The user caught a real overclaim in `us-northeast.md`'s cross-cutting
Visual & Plating norm on street-cart/bodega food: it listed only
point-of-sale surfaces ("the cart's own counter ledge, a folding table, a
bodega counter, or a boardwalk railing/bench") as if grab-and-go food must
be staged right where it was bought. The actual idea behind "grab-and-go"
is that someone buys it and eats it wherever they end up — a home
tabletop, a park bench, the beach, a subway-platform bench are all equally
authentic. Fixed the wording to state the point-of-sale location is one
option, not a rule, and name several non-point-of-sale surfaces explicitly
so it doesn't read as a closed list. Checked `country-file-schema.md`'s
general anti-hand-holding rule for the same issue — it already says "a
table, counter, railing, or other stable surface" with an open-ended
qualifier, so the overclaim was specific to how this file narrowed the
general rule's examples, not a flaw in the rule itself; no change needed
there.

---

## Texture/finish standing rule added; starting Mid-Atlantic, 2026-09-24

The user confirmed `us-northeast.md`'s depth level is the right bar going
forward, and asked for one refinement applied to every remaining
subregion: more emphasis on texture/finish detail specifically — char,
crispiness, doneness, crumb structure — not just color and shape. Added
this as a standing rule in `country-file-schema.md` §4.5, under the
existing mandatory Visual/plating characteristics field, rather than as a
one-off note — this needs to apply to every future dish entry in every
future country/region file, not just the remaining US subregions. Used
this project's own existing strong examples (New Haven apizza's charring/
pecorino-dusting description, RI clam cakes' craggy-not-smooth exterior)
as the model to match, since they were already doing this well by
instinct even before the rule was written down explicitly.

Starting the next regional file, `us-mid-atlantic.md`. Only one dish
(Philly cheesesteak) currently points there from `us.md`; the exact state
scope (Pennsylvania/Philadelphia plus Delaware are clear; whether
Maryland/DC/Virginia's Chesapeake Bay identity belongs here or is better
split as its own internal zone is a real open question, not yet decided)
will be established by the research itself, the same way Northeast's
three-zone structure emerged from its own research rather than being
assumed in advance.

---

## Authorized to proceed autonomously through the remaining US regions, 2026-09-24

The user instructed continuing through every remaining US region until the
13-file list is complete, and explicitly authorized using judgment on
further dividing or clustering regions based on what the research finds,
rather than escalating every internal-zone question the way the Boston/
New Haven-apizza questions were escalated for `us-northeast.md`. Judgment
calls will still be logged here as they're made, and anything genuinely
surprising or high-stakes (a major scope dispute, evidence that changes
the already-decided 13-file boundary itself) will still go to the user —
but routine internal-zone clustering (which states group together within
one file) will be decided and documented, not asked about each time.

Launched `us-south.md`'s research in parallel with the still-running
`us-mid-atlantic.md` passes: three zones, based on evidence already
sitting in `us.md` before this file existed — Tennessee has two already-
documented, genuinely distinct pointers (Nashville hot chicken; Memphis
dry-rub BBQ), which alone justified treating Nashville/Memphis as their
own zone rather than folding Tennessee into a generic "Deep South" bucket.
The other two zones: Deep South core (Georgia, Alabama, Mississippi) and
the Carolinas plus the already-decided Lowcountry callout (South Carolina,
coastal Georgia). Kentucky and Arkansas's placement was left unresolved —
each Deep South/Carolinas pass was told to flag, not research, any strong
evidence that either state belongs in this file, rather than guess at
scope neither research pass was asked to settle.

Adopted a pipelining rhythm to move through the remaining 10 regions at a
reasonable pace without producing an unreviewable backlog: keep roughly
one to two regions' worth of research running in the background at a time
(so the next region's research is already underway by the time the
current one is ready to review and merge), rather than either serializing
everything (slow) or launching all 10 remaining regions' passes at once
(too much simultaneous unreviewed output to reconcile responsibly).

---

## us-mid-atlantic.md merged and published, 2026-09-24

Both Mid-Atlantic passes (Philadelphia/PA/Delaware; Chesapeake Bay) landed
strong. Merged into `knowledge-base/02-culture/regions/usa/us-mid-atlantic.md`
as a two-zone file (Philadelphia & Pennsylvania, including Delaware;
Chesapeake Bay). Two structural questions were decided by hand this round,
using the judgment the user authorized rather than escalating:

1. **Delaware's placement**: folded into the Philadelphia & Pennsylvania
   zone, on the strength of the PA/Philly pass's sourced finding that
   Delaware's food culture (scrapple's Sussex County roots, the cross-
   border cheesesteak/hoagie tradition) largely overlaps with
   Pennsylvania's — with Delaware's own independent Delaware Bay coastal
   identity, untouched by either pass, logged as a real gap rather than
   assumed covered.
2. **Virginia's placement**: the Chesapeake pass surfaced genuinely split
   evidence (a tourism consortium groups it with the Mid-Atlantic;
   Wikipedia's own Southern-cuisine article names Tidewater cuisine a
   Southern subregion) and recommended a geographic split rather than a
   single verdict. Decided: Tidewater/coastal Virginia (Hampton Roads, the
   Eastern Shore, Smithfield) joins this file's Chesapeake Bay zone, since
   it shares the same blue crab/oyster/Smithfield-ham identity; inland/
   Southside/Piedmont Virginia (Brunswick stew's territory) is assigned to
   `us-south.md` instead. This mirrors the New Mexico/Desert Southwest
   split decided earlier in this project — a real internal distinction
   resolved by geography and evidence, not left open.

Both passes independently found strong new dishes beyond what `us.md`
pointed here for (only the Philly cheesesteak existed as a prior pointer)
— Chesapeake alone contributed nine new full entries (crab cake, steamed
crabs, soft-shell crab sandwich, Baltimore pit beef, DC half-smoke, mumbo
sauce, Smith Island cake, Smithfield ham, Chesapeake oysters), and
Philadelphia/PA contributed six (scrapple, water ice, roast pork sandwich,
Philadelphia tomato pie — verified as genuinely distinct from Trenton
tomato pie, not the same tradition — plus the Capriotti's Bobbie sandwich
for Delaware). Added the same "typical use note" and quick-reference table
`us-northeast.md` got after its own calibration, applying that lesson
forward without being asked again.

---

## us-south.md merged and published, 2026-09-24

All three South passes (Deep South: GA/AL/MS; Carolinas & Lowcountry:
NC/SC/coastal GA; Tennessee: Nashville/Memphis) landed strong. Merged into
`knowledge-base/02-culture/regions/usa/us-south.md` as a three-zone file,
per the structure already anticipated in the Mid-Atlantic merge's own
decision log. Several structural questions were decided by hand this
round, using the same authorized judgment as the prior two regional files:

1. **Georgia's split between two zones**: the Deep South pass's Georgia
   content (peach country, Atlanta-area soul food) and the Carolinas &
   Lowcountry pass's Georgia content (coastal Georgia's Gullah Geechee
   foodways) are genuinely different halves of the same state. Decided:
   coastal Georgia joins the Carolinas & Lowcountry zone's Lowcountry
   callout; inland/Atlanta-area Georgia stays in the Deep South zone —
   mirroring the Virginia Tidewater/Piedmont split from the Mid-Atlantic
   merge above.
2. **Hoppin' John's cross-zone duplication**: both the Deep South and
   Carolinas & Lowcountry passes independently drafted full entries. The
   Carolinas & Lowcountry version is the historically accurate one
   (Gullah Geechee origin, an 1847 cookbook citation, corroborated by
   Frederick Law Olmsted's 1861 travelogue) and is kept as the sole full
   authoritative entry; the Deep South pass's own version — which itself
   honestly disclosed the dish's true origin lies outside its own zone —
   is trimmed to a cross-reference rather than duplicated in full. Same
   resolution pattern as New Haven apizza in `us-northeast.md`.
3. **Meat-and-three's cross-zone overlap** (Deep South and Tennessee both
   independently sourced the same 1930s Nashville/May Hosiery Mill
   origin): not a disagreement, so no trimming was needed — the Tennessee
   zone carries the fuller origin sourcing, and the Deep South zone's own
   environment-section coverage now cross-references it instead of
   re-deriving the same history a second time.
4. **Nashville-vs-Memphis structure**: the Tennessee pass itself flagged,
   rather than resolved, whether Nashville and Memphis should be two
   labeled callouts within one Tennessee zone or split into separate
   files, noting the split is comparably sharp to the state's own West/
   Middle Tennessee divide. Decided: kept as one zone with two labeled
   callouts, per the pass's own recommendation (the two cities read as
   "two anchor cities each carrying one dominant, non-overlapping
   signature dish" rather than a broad multi-county cultural region) —
   flagged as a live question a future pass with more evidence could
   revisit, not treated as permanently closed.
5. **Gulf Coast Alabama/Mississippi** (Mobile; Biloxi/Gulfport) was
   deliberately left out of this file, per the Deep South pass's own
   scope instructions and its finding that the strip reads culinarily
   closer to Louisiana Creole/Cajun than to the inland Deep South content
   documented here — logged as an open boundary question for whoever
   researches `us-gulf-south.md`, not resolved.
6. **Kentucky and Arkansas** were left as a fully open question, not a
   decided inclusion or exclusion — real "Southern BBQ belt" evidence
   exists for both (Kentucky's Hot Brown sandwich; Arkansas's internally
   split BBQ sauce styles) but neither was researched in depth, per the
   Deep South pass's own scope instructions.

All three passes contributed strong new dishes beyond `us.md`'s existing
pointers (classic fried chicken, Carolina barbecue, Nashville hot chicken,
Memphis BBQ): Deep South contributed eight new full entries (collard
greens, skillet cornbread, soul food mac and cheese, Alabama white sauce
chicken, Georgia peach cobbler, pimento cheese, Mississippi Delta hot
tamales, plus the trimmed Hoppin' John cross-reference); Carolinas &
Lowcountry contributed six (SC barbecue hash and rice, shrimp and grits,
she-crab soup, the full Hoppin' John entry, Charleston/Gullah red rice,
Frogmore stew/Lowcountry boil); Tennessee contributed six (the Nashville
hot chicken sandwich sibling and meat-and-three note, Memphis wet ribs,
Memphis pulled pork sandwich, Memphis BBQ spaghetti, Memphis BBQ nachos).
Carried forward the "typical use note" and quick-reference table pattern
from the two prior regional files without being asked again.

Three background research passes (Appalachia; North Florida; South
Florida/Floribbean) completed while this merge was underway and are
queued for the next two regional files (`us-appalachia.md`,
`us-florida.md`), continuing the pipelining rhythm adopted earlier.

---

## us-appalachia.md and us-florida.md merged and published, 2026-09-24

**us-appalachia.md** (sixth regional file, fourth chronologically) is a
single-pass, single-zone file — the researcher found no evidence of a
sharp-enough internal split (e.g., Central vs. Southern Appalachia) to
justify the multi-zone structure the prior three files used, and flagged
that judgment explicitly as a one-pass call rather than an exhaustively
validated triage. Published close to as-drafted, since there was no
cross-zone merge work to do. Eight full dish entries: soup beans, skillet
cornbread (explicitly checked and found NOT genuinely distinct from
`us-south.md`'s own cornbread tradition — the no-sugar divide runs along
the Ohio River, not the Appalachian boundary, stated honestly rather than
claimed as a differentiator), leather britches beans, ramps, the
pepperoni roll (West Virginia coal-camp origin), fried apple pie, apple
stack cake, and the West Virginia slaw dog (flagged as a candidate fifth
regional hot dog style for `us.md`'s national entry). The file explicitly
treats meat-and-three and church-potluck/"dinner on the grounds" as
shared-with-the-South institutions, not Appalachia-exclusive — a judgment
this pass made before `us-south.md` existed, now corroborated rather than
just assumed, since `us-south.md`'s own Tennessee and Deep South zones
independently reached the same conclusion.

**us-florida.md** (seventh regional file, fifth chronologically) merges
two parallel zone passes (North Florida; South Florida/Floribbean) into a
two-zone file, resolving three cross-zone questions both passes flagged
rather than resolved on their own:

1. **The Cuban sandwich** (`us.md`'s existing pointer) stays a single,
   full entry in the North Florida zone (Tampa/Ybor City origin, salami
   included) — Miami's genuinely different venue register (no salami,
   softer bread, a "double press" technique) is folded in as a documented
   addendum rather than duplicated as a competing entry, per the South
   Florida pass's own explicit deference to the North Florida pass's
   ownership of this dish.
2. **Key lime pie**: the North Florida pass researched it, found the
   origin points to Key West, and explicitly recommended the South
   Florida zone take it rather than writing a competing entry. Decided
   exactly as recommended — full entry lives in the South Florida zone.
3. **Stone crab claws**: both passes wrote full entries and both flagged
   the same real geographic tension (Joe's Stone Crab's Miami Beach
   origin and the Keys/Everglades City's dominant modern harvest volume,
   versus a smaller, genuine, decades-old North Florida/Big Bend
   presence). Decided: the full entry stays in the South Florida zone;
   North Florida keeps a short cross-reference to its own real but
   secondary presence — the same trim-to-cross-reference pattern used for
   Hoppin' John in `us-south.md`.

A fourth item, the screened porch/"lanai," was resolved as a Florida-wide,
climate-driven feature documented once in a shared TRUSTED CONTENT section
rather than claimed by either zone exclusively — the North Florida pass
found only South-Florida-sourced material on it and asked the merge to
decide; the South Florida pass's own climate sourcing confirmed the
underlying driver (heat, humidity, mosquitoes, a wet season) is not
South-Florida-exclusive, so neither zone should claim it as a unique find.

Both files' Gap Logs and Candidate Queues were carried forward largely
intact rather than re-litigated, consistent with this project's practice
of surfacing open questions rather than silently resolving them without
new evidence.

---

## us-gulf-south.md merged and published, 2026-09-24

Merges three parallel passes (New Orleans/Louisiana Creole; Cajun/Acadiana;
Mississippi & Alabama Gulf Coast) into a three-zone file, closing the
Gulf Coast AL/MS boundary question `us-south.md`'s Deep South zone had
explicitly left open. The dedicated pass found that coast is neither
"just Deep South" nor "just New Orleans in another state" — it has real,
independent colonial/settlement history predating New Orleans in places
(Mobile founded 1702, the first Mardi Gras in North America there in
1703), a genuine, sourced Creole-cuisine import layer, and its own
locally-invented dishes (West Indies salad, fried crab claws, Royal Red
shrimp) with no New Orleans equivalent.

Five cross-zone questions were resolved by hand:

1. **Gumbo** and **jambalaya**: both have a real, sourced, non-hierarchical
   Creole ("red"/lighter roux/seafood-leaning) vs. Cajun ("brown"/dark
   roux/tomato-free) fork. Kept as two full, coexisting entries each per
   `country-file-schema.md` §4.6, exactly as both research passes
   recommended — not collapsed into one silent default. The Gulf Coast
   AL/MS pass's own gumbo research explicitly found no visual
   differentiator from Creole gumbo and flagged its entry for a
   merge-check; trimmed to a short cross-reference (Mobile's own claimed
   pre-New-Orleans gumbo history is real and worth keeping) rather than a
   third, visually-duplicative full entry — the same pattern used for
   Hoppin' John in `us-south.md`.
2. **Crawfish étouffée**: the Creole/New Orleans pass explicitly declined
   to research it, deferring to Acadiana as the dish's actual origin
   (Breaux Bridge, 1920s) — kept as a single full entry, with the later
   Creole restaurant adaptation (darker roux, tomato, sometimes cream)
   noted inside it rather than duplicated.
3. **King cake**: the Cajun/Acadiana pass explicitly declined to claim it,
   finding its origin is Creole New Orleans-specific — kept as a single
   full entry in that zone, with Cajun Country's secondary, derivative
   bakery variant (simpler, less sweet, more bread-forward) noted as an
   addendum.
4. **Trout meunière, oysters Rockefeller, and oysters Bienville**: real,
   imported, locally-embraced dishes on the Gulf Coast, but that pass's
   own research found no visually distinct coastal form and deferred full
   depth to New Orleans/Creole, per the placement rule. Full entries kept
   in that zone (oysters Bienville newly written, since neither original
   pass had researched it as deeply as Rockefeller); the Gulf Coast zone
   keeps a cross-reference plus one honestly-flagged LOW-confidence local
   curiosity (a Mobile restaurant's "redfish Bienville," possibly named
   for Mobile's own founder).
5. **The "holy trinity"** (onion, celery, bell pepper) is documented once,
   Gulf-South-wide, with each zone's differing *treatment* of it (oil/lard
   vs. butter, tomato vs. no tomato) as the actual point of distinction.

This brings the US regional structure to 6 of 13 files complete.

---

## Beignets test (New Orleans, evening, Coca-Cola can): strong confirming result, 2026-09-24

Ran the beignet prompt (built off the newly-published `us-gulf-south.md`
entry) twice. Both generations landed the dish's checkable authenticity
markers cleanly and consistently:

- Thick, heaping, matte-white powdered sugar mounding in both — not a
  light dusting — matching the entry's flagged "under-sugared beignet is
  a real, checkable authenticity miss" note.
- Deep golden-brown fried crust visible at the edges where sugar didn't
  fully cover, in both.
- The torn-open beignet showed a light, airy interior with visible
  irregular air pockets in both — image 2's cross-section was the
  stronger, more textbook example of this specific texture/finish detail.
- Square/rectangular, irregular, puffed/domed shape (not a ring doughnut,
  not a smooth geometric square) in both.
- No hand-holding — food rests on the marble table in both, per the
  standing anti-hand-holding composition rule.
- Background genericized correctly — wrought-iron balconies, string
  lights/warm sconces, a dusky sky, no legible signage or menu boards,
  no recognizable specific real venue reproduced.

One recurring item, not a new finding: the Coca-Cola can's logo rendered
fully correct and legible in both generations this run. Per the standing
`01-brand/coca-cola-guidelines.md` §1 finding, two clean samples in a row
does not overturn the established run-to-run unreliability — still never
trust the can's rendered branding as production-safe; compositing remains
the standard regardless of how clean a given sample looks.

One minor compositional note for future iteration, not a KB correction:
in the second generation, the can reads slightly large/dominant relative
to the beignets and sits close to the frame's right edge, a looser fit to
the hero-zone/scale-anchor phrasing than the first generation's tighter
composition. Not treated as a failure — flagged for whoever refines this
prompt template next.
