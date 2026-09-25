---
status: REFERENCE — intended end-to-end architecture, shared by the user
  2026-09-26 as a diagram; describes the target system this knowledge base
  feeds, not something implemented in this repo yet
---

# Image generation pipeline — intended end-to-end architecture

This documents the full pipeline this knowledge base is built to feed,
from a client brief to a validated final image. It exists so anyone
extending `02-culture/regions/**` or the `00-methods/*.md` files knows
which pipeline stage(s) their work will plug into, and so pipeline
implementation work (elsewhere) has one canonical description to build
against instead of re-deriving it from a diagram in chat history.

## Stage 1 — Client Brief

The user arrives with a meal, a region, a product SKU, a side dish, and an
occasion they want to visualize (e.g., "lunch at home," "meal on the go,"
"family dinner at a restaurant," among others) — but doesn't hand these
over as a flat form. The Agentic interface walks them through **a guided
series of questions**, narrowing toward specific options at each step
(e.g., which regional variant of a dish, which occasion register), rather
than accepting free-text for every field. The end state is the same brief
fields as before — Operating Unit, Local Region, Product SKU, Hero Dish,
Side Dish Request, Occasion, misc notes — but arrived at conversationally,
not typed in all at once.

## Stage 2 — Agentic Prompt Generator

A single agent that takes the Client Brief and pulls in supporting
context to decompose it into a structured prompt:
- Tableware Dimension Guidelines
- Product Specifications (bottle sizing + diameters)
- Cultural Guardrails — Environment
- Food Stylist — Regional Expert (the cultural/dish knowledge)
- Brand Guidelines
- Misc Notes

**Mapping to this KB**: this is where `country-file-schema.md` (structure/
rules), `tableware-composition-reference.md` (dimension/placement
guidance), `coca-cola-guidelines.md` (product specs and brand rules), and
the relevant `02-culture/regions/**/*.md` country file (the "Food Stylist —
Regional Expert" content, selected by Operating Unit + Local Region) are
consumed. `market-roadmap.md` tracks which regions have that content ready.

## Stage 3 — Decomposed prompt segments

The Agentic Prompt Generator's output is split into discrete text-prompt
segments, each independently generatable/editable:
- Entree Dish
- Brand Vis ID (camera + lens, framing detail)
- Traditional Side Dish (one segment per side)
- Environmental Overview
- Product Detail
- Plating + Tableware Input
- Product Serving Details
- **Scene Summary** — a detailed text recap of the whole scene, including
  cultural do's and don'ts, used for validation rather than image
  generation directly.

## Stage 4 — Scene Validation (pre-generation loop)

The Scene Summary is run back through the Agentic Prompt Generator, which
checks the decomposed segments against the original brief **and directly
against this knowledge base's `.md` files** — the country file for the
selected region, `country-file-schema.md`, `tableware-composition-
reference.md`, `coca-cola-guidelines.md` — for cultural authenticity and
any gaps, before any image is generated.
- **Fail** → re-run the Agentic Prompt Generator with notes on the
  discrepancy.
- **Pass** → the user is good with the story + prompt segments; proceed
  to Scene Creator.

This is a text-only validation pass — catching a wrong dish, a broken
cultural rule, or an inconsistent brief interpretation before spending a
generation on it. **This is the pipeline's direct, load-bearing use of
this KB's country files as a validation reference**, not just as
generation source material — a country file's Gap Log, confidence tags,
and §4.6 coexisting-variant disclosures are exactly the content this
check would need to catch a culturally wrong or unsupported claim in a
generated Scene Summary.

## Stage 5 — Scene Creator

A **Three.js-based 3D layout tool** (in active development, not yet
built) that takes the validated prompt segments and outputs a **PNG of
the intended scene layout with proxy labels** for each element — top-down
composition grids assigning zones (hero dish, sides, drink, tableware)
per `tableware-composition-reference.md`'s hero-zone/depth-hierarchy
framework. Either an existing template is reused for a quick generation,
or a new one is composed from scratch for a novel layout.

This proxy-labeled layout PNG is what pairs with the actual scene-content
prompt segments (Entree Dish, Traditional Side Dish, etc.) at Stage 6 —
i.e., the layout/composition (where things go) and the content (what
each thing is) are generated separately and then combined, rather than
one image-gen call handling both placement and content at once.

## Stage 6 — Node-based workflow (image generation graph)

Each prompt segment generates its own component image node in parallel:
- Entree Dish → its own image
- Traditional Side Dish(es) → their own image(s)
- Product Detail + a reference product image ("Digital Twin PNG") →
  combined into a "Stylized Bottle" node

The Product Detail + reference-image compositing step exists specifically
because of the brand-fidelity finding in `coca-cola-guidelines.md` §1
(generated logo/wordmark text is unreliable run-to-run) — rather than
relying on the model to render correct branding from a text prompt alone,
an actual reference product image is composited in. This is the same
approach `coca-cola-guidelines.md` §5 flags as "reference-image
conditioning (untested)."

All component nodes, plus Brand Vis ID and Environmental Overview
segments, **and the Scene Creator's proxy-labeled layout PNG**, feed into
**Image Composition**, which produces the final **Image Output**.

## Stage 7 — Scene Validation (post-generation loop)

The composition (Image Output) and the original story (Scene Summary) are
brought back to the Agentic interface together, to validate the actual
generated image against a defined set of criteria — closing the loop with
a second validation pass that a text-only Stage 4 check can't catch (e.g.,
a composition or scale error that only shows up in the rendered image).

**Scoring criteria** (each graded out of 100; fail threshold TBD):
1. **Brand guardian** — checks for correct logos, brand colors, and
   overall brand compliance.
2. **General creative direction** — checks for generation artifacts and
   glitches (e.g., a hand with extra fingers), unrelated to brand,
   culture, or styling — pure generation-quality/defect detection.
3. **Cultural authenticity** — do the meals look the way they should, and
   is there anything in the scene that shouldn't be there. **This is the
   criterion this KB's country files most directly serve** — the same
   dish-description, texture, model-failure, and "never stage X" content
   used at Stage 4 is the reference standard this criterion grades
   against, just applied to the rendered image instead of the text
   summary.
4. **Food Stylist / Composition QA** — a distinct criterion from #2,
   grading aesthetic/compositional judgment rather than technical defects:
   hero-zone rule adherence, depth hierarchy, plating and garnish
   standards, vessel-scale correctness, overall layout quality. This is
   this KB's second direct grading target — `tableware-composition-
   reference.md` and `coca-cola-guidelines.md` §4 (hero-zone/depth-
   hierarchy/clearance-radii/composition-scenario rules) are the reference
   standard here, the same way country files are the reference standard
   for #3. Kept separate from #2 rather than folded in, since "no extra
   fingers" (binary defect-spotting) and "is this well-composed"
   (aesthetic judgment against a documented standard) are different
   skills that produce differently-actionable fail notes; kept separate
   from #3 because a scene can be culturally accurate but poorly composed,
   or vice versa. **Open overlap to resolve**: some country-specific
   plating/presentation norms (e.g., South Africa's "seven colours" Sunday
   plate) are both a cultural fact and a composition rule — which
   criterion owns that overlap isn't decided yet.

### Scoring methodology — candidate approaches (undecided)

The goal is consistent, less-subjective grading across runs. Four
candidate approaches, not mutually exclusive:

1. **Holistic 0–100 judgment call (the current implicit default).**
   A single "how good is this, 0–100" score per criterion. **Con**: this
   is exactly the subjectivity problem the checklist idea was proposed to
   fix — no reproducibility, no actionable failure reason, score drifts
   run to run on an identical image. Not recommended as the sole method.
2. **Weighted yes/no checklist, summed to 100.** Each criterion gets a
   fixed set of concrete questions ("is the hero SKU in the vertical
   center third? Y/N," "does the plate match the dish's documented scale
   anchor? Y/N"), each worth N points; the score is the sum. **Pro**:
   reproducible, and every failure comes with a specific, actionable
   question to fix. **Con**: treats every question as equally severe,
   which doesn't match reality — a wrong garnish and a visible competitor
   logo shouldn't cost the same points.
3. **Gate + weighted-deduction hybrid (recommended starting point).**
   Split each criterion's questions into **hard gates** (an automatic
   fail regardless of everything else — e.g., wrong/garbled logo, visible
   alcohol in a South Africa scene, a dish that violates a country file's
   explicit "never do X") and **weighted deductions** (start at 100,
   subtract per failed question, weighted by severity — a wrong garnish
   costs less than a wrong hero dish). This mirrors standard QA-rubric
   practice (critical/major/minor defect tiers) and matches how this KB
   already distinguishes severity implicitly — a country file's hard
   "never stage X" rules (e.g., no alcohol, no legible fabricated text,
   no trademark landmarks) are natural hard-gate candidates; ordinary
   dish-detail accuracy is a natural deduction candidate.
4. **Vision-model-as-judge, answering the checklist directly.** Whichever
   of #2/#3 is chosen, the actual grading mechanism is a vision-capable
   model given the rendered image plus the fixed question set, answering
   each question and producing the rollup score — not a human grading
   every image by hand. **Consistency safeguard**: run the judge twice per
   image and flag disagreement for human review, the same
   two-generations-minimum discipline `coca-cola-guidelines.md` already
   applies to testing prompt phrasing — a judge that disagrees with itself
   on the same image is exactly the failure mode worth catching before
   trusting its scores.

**Refinement specific to Cultural Authenticity**: this KB already tags
every claim HIGH/MEDIUM/LOW confidence. A checklist question generated
from a LOW-confidence claim (e.g., an estimated dish dimension, an
editorial judgment call) probably shouldn't be eligible as a hard gate —
only HIGH-confidence, well-sourced claims (a documented "never do X" rule,
a verified dish-identity fact) should be able to auto-fail a scene;
LOW-confidence claims are better as deductions or informational-only,
since a hard gate built on the file's own admittedly-uncertain content
would fail images for the wrong reason.

**Still not built for any criterion**: the actual question sets, the
point/severity weighting, which questions are gates vs. deductions, the
final pass/fail cutoff, and the judge-disagreement-review process. This
KB's own content remains the natural source for at least two of the four
checklists — country-file facts for Cultural Authenticity, `tableware-
composition-reference.md`/`coca-cola-guidelines.md` §4 for Composition QA.

If any criterion fails, the resulting notes are used for reprompting —
feeding back into the loop (most likely to Stage 2/Stage 6, re-generating
the specific failing element) rather than starting over from Stage 1.

## Tooling — which systems run which stages

The pipeline is implemented across (at least) three distinct systems, not
one monolithic app:

1. **Agentic interface** — handles prompt generation and both Scene
   Validation loops: Stage 2 (Agentic Prompt Generator), Stage 3
   (decomposed segments + Scene Summary), Stage 4 (pre-generation
   validation), and Stage 7 (post-generation validation). This is the
   system this knowledge base is written for/consumed by.
2. **Scene Creator** — the Three.js layout tool (Stage 5), in active
   development, producing the proxy-labeled layout PNG.
3. **Node-based workflow tool** — a Runway-style node graph (Stage 6),
   handling per-segment component image generation, the Digital Twin PNG
   compositing step, and final Image Composition/Output.

The Agentic interface is the orchestrator across the other two: it
produces the inputs the node-based tool and Scene Creator consume, and
consumes their outputs (layout PNG, final Image Output) back in for
validation. This KB is consumed only by the Agentic interface, never
directly by Scene Creator or the node-based tool — but it's used there
**at three points**: once at Stage 2 to generate a culturally grounded
scene, again at Stage 4 to validate the pre-generation story against it,
and again at Stage 7 to grade the rendered image — country files for the
Cultural Authenticity criterion, `tableware-composition-reference.md`/
`coca-cola-guidelines.md` §4 for the Food Stylist/Composition QA
criterion.

## Build approach under consideration (undecided)

Two architectures for Stages 5–7 are being weighed. Both keep Stages 1–4
(the Agentic interface) identical — this decision only affects how layout,
generation, and compositing get built.

**Option A — hybrid (current documented design): agent network + a
separate node-based workflow tool.** Scene Creator (Three.js) plus a
Runway-style node graph, orchestrated by the Agentic interface, per
Stages 5–6 above.
- **Pros**: composability — each element (entree, side, product) is its
  own node, independently regeneratable without re-rendering the whole
  scene, which matters directly for Stage 7's fail-path targeting (fix
  just what failed). A validated, brand-correct Digital Twin PNG asset can
  be generated once and reused across many scenes rather than re-risking
  brand fidelity on every single generation — this is the direct fix for
  the branding-unreliability finding in `coca-cola-guidelines.md` §1.
  Explicit intermediate checkpoints give a human (or brand/legal reviewer)
  a place to intervene before final composition, which a brand as
  regulated as Coca-Cola likely wants for auditability. Model-agnostic —
  the underlying image model in any given node can be swapped without
  touching the rest of the graph.
- **Cons**: three systems to build, integrate, and keep in sync (agentic
  interface, Scene Creator, node graph), each with its own API/versioning
  surface — more engineering overhead and more places for the pipeline to
  break. Multiple round-trips add latency. Requires ongoing node-graph
  tool cost/expertise (Runway or equivalent).

**Option B — fully agentic single flow: one model (e.g., Nano Banana 2)
generating the image directly from the decomposed prompts**, with the
Agentic interface still doing Stages 1–4/7 but Stages 5–6 collapsing into
one generation call instead of a separate layout tool + node graph.
- **Pros**: far simpler to build and ship — one system instead of three,
  lower latency, fewer integration points. Models like Nano Banana are
  specifically strong at multi-image composition and instruction-following
  edits, which could handle "combine entree + side + product reference +
  layout intent" in fewer steps, and their built-in reference-image
  conditioning may help with branding fidelity without a separate
  compositing step.
- **Cons**: less deterministic control over exact placement — without an
  explicit layout-planning step enforcing it, hero-zone/depth-hierarchy
  adherence (the new Composition QA criterion's whole domain) becomes
  harder to guarantee rather than structurally enforced. Loses the
  reusable, pre-validated Digital Twin asset approach — branding fidelity
  becomes a per-generation risk again on every single image, the exact
  problem the Digital Twin PNG step exists to solve. Harder to isolate and
  fix just the failing element on a Stage 7 fail unless the model's edit
  capability supports precise, targeted inpainting of only the flagged
  region (plausible with Nano Banana's edit features, but unconfirmed).
  Single-vendor/model dependency. A monolithic single-shot generation is
  also a harder story for brand/legal audit trail than a node graph with
  visible intermediate checkpoints.

**Recommendation**: given TCCC's brand sensitivity, this project's own
already-documented branding-fidelity problem, and the new Composition QA
criterion's need for enforceable (not just hoped-for) layout control,
Option A's composability and auditability are worth its extra build cost
for a production system — but Nano Banana 2's compositing strength could
still be used *inside* Option A's node graph (replacing specific Runway
nodes) rather than framing this as all-or-nothing. Option B is a
reasonable choice for a fast prototype/MVP to validate the Agentic
interface and scoring rubric end-to-end before committing to the
heavier build, if speed-to-first-test matters more than production
readiness right now. **Not yet decided** — this is an open call, not a
made one.

## Open questions (not yet specified by the diagram)

- How the Scene Creator's (Three.js) template library is stored/
  versioned, and how "reuse an existing template" vs. "create new" is
  decided.
- The exact mechanism/source for the "Digital Twin PNG" reference image
  per product SKU (a fixed asset library? Pulled per-market?).
- What "re-run with notes" actually changes in the Agentic Prompt
  Generator's next pass (full re-decomposition vs. targeted segment
  edits).
- Stage 7's exact fail path: confirmed that a failing criterion produces
  notes used for reprompting, but not yet specified whether that always
  loops back through the full node-based workflow (Stage 6) or can target
  just the specific failing element/segment.
- Each Stage-7 criterion's fail threshold (all graded out of 100, no
  pass/fail cutoff set yet), and the yes/no question sets + score-rollup
  method for the placeholder scoring methodology above — not yet built for
  any of the four criteria.
- Which criterion (Cultural Authenticity or Food Stylist/Composition QA)
  owns a plating/presentation norm that is simultaneously a cultural fact
  and a composition rule (e.g., South Africa's "seven colours" plate).

## Current state

This repo currently implements the knowledge inputs to Stage 2 (schema,
tableware/product reference data, and country files) and none of the
pipeline mechanics themselves (Stages 2–7 are not implemented here). The
Scene Creator (Stage 5) is under active development elsewhere as a
Three.js tool. Prompt testing so far in this project has been manual/
single-shot, not run through this pipeline. See
`readiness-checklist.md` for the full outstanding-work list across both
the knowledge base and this pipeline.
