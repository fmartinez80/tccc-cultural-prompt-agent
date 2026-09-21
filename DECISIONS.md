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
