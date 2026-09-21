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
