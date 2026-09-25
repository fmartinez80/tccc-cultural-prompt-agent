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
   glitches (e.g., a hand with extra fingers) unrelated to brand or
   culture, just generation quality.
3. **Cultural authenticity** — do the meals look the way they should, and
   is there anything in the scene that shouldn't be there. **This is the
   criterion this KB's country files most directly serve** — the same
   dish-description, texture, model-failure, and "never stage X" content
   used at Stage 4 is the reference standard this criterion grades
   against, just applied to the rendered image instead of the text
   summary.
4. **TBD** — a fourth criterion, not yet defined.

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
**twice**: once at Stage 2 to generate a culturally grounded scene, and
again at Stage 4 (and, for the cultural-authenticity criterion
specifically, at Stage 7) to validate against the same reference content.

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
- The 4th Stage-7 scoring criterion (brand, creative-direction, and
  cultural-authenticity are defined; one more is TBD) and each criterion's
  fail threshold (all graded out of 100, no pass/fail cutoff set yet).

## Current state

This repo currently implements the knowledge inputs to Stage 2 (schema,
tableware/product reference data, and country files) and none of the
pipeline mechanics themselves (Stages 2–7 are not implemented here). The
Scene Creator (Stage 5) is under active development elsewhere as a
Three.js tool. Prompt testing so far in this project has been manual/
single-shot, not run through this pipeline.
