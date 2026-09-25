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

The starting input, supplied per generation request:
Operating Unit, Local Region, Product SKU, Hero Dish, Side Dish Request,
Occasion, and misc notes.

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

The Scene Summary is run back through the Agentic Prompt Generator to
check the decomposed segments against the original brief and cultural
guardrails before any image is generated.
- **Fail** → re-run the Agentic Prompt Generator with notes on the
  discrepancy.
- **Pass** → proceed to Scene Creator.

This is a text-only validation pass — catching a wrong dish, a broken
cultural rule, or an inconsistent brief interpretation before spending a
generation on it.

## Stage 5 — Scene Creator

Takes the validated prompt segments into scene-composition templates —
top-down layout grids assigning zones (hero dish, sides, drink,
tableware) per `tableware-composition-reference.md`'s hero-zone/depth-
hierarchy framework. Either an existing template is reused for a quick
generation, or a new one is created from scratch for a novel composition.

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
segments, feed into **Image Composition**, which produces the final
**Image Output**.

## Stage 7 — Scene Validation (post-generation loop)

The Image Output and the original Scene Summary are run back through the
Agentic Prompt Generator together, to validate the actual generated image
against the intended scene (dish accuracy, cultural correctness, brand
compliance, composition rules) — closing the loop with a second
validation pass that a text-only Stage 4 check can't catch (e.g., a
composition or scale error that only shows up in the rendered image).

## Open questions (not yet specified by the diagram)

- How the Scene Creator's template library is stored/versioned, and how
  "reuse an existing template" vs. "create new" is decided.
- The exact mechanism/source for the "Digital Twin PNG" reference image
  per product SKU (a fixed asset library? Pulled per-market?).
- What "re-run with notes" actually changes in the Agentic Prompt
  Generator's next pass (full re-decomposition vs. targeted segment
  edits).
- Whether Stage 7's validation failure loops back to Stage 6 (re-generate
  the image), Stage 5 (re-compose), or Stage 2 (re-brief) — the diagram
  doesn't show a fail path out of the second Scene Validation.

## Current state

This repo currently implements the knowledge inputs to Stage 2 (schema,
tableware/product reference data, and country files) and none of the
pipeline mechanics themselves (Stages 2–7 are not implemented here). Prompt
testing so far in this project has been manual/single-shot, not run
through this pipeline.
