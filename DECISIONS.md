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
