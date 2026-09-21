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
