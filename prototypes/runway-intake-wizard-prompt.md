---
status: PROTOTYPE BUILD PROMPT — written to hand to Runway's Claude-Code-
  powered webapp builder for an early UX experiment; not itself part of
  the knowledge base or the production pipeline
purpose: covers Stages 1-4 of `knowledge-base/00-methods/
  image-generation-pipeline.md` (guided brief -> Agentic Prompt Generator
  -> decomposed segments -> pre-generation Scene Validation). Stages 5-7
  (Scene Creator, node-based generation, post-gen validation) are
  explicitly out of scope for this prototype.
---

# Build prompt: TCCC scene-intake wizard prototype

Paste everything below the divider into the Runway webapp builder as the
initial build request.

---

## What we're building

A web app prototype that walks a user through a guided intake flow to
produce a culturally-grounded "scene" for a Coca-Cola product photography
brief — a meal, a region, an occasion — and outputs a structured story
(a human-readable **Scene Summary**) plus a set of discrete **prompt
segments**, then validates that output for cultural accuracy before
letting the user finalize it.

This is a **front-end/UX prototype**, not a production system. The
"intelligence" behind prompt generation and validation should be
**mocked/stubbed behind a clean API boundary** so the real backend (an
LLM agent doing the actual reasoning, described below) can be swapped in
later without changing the UI. Don't build actual image generation —
this prototype stops at producing and validating the text-based scene
description.

## The user flow (build this as a linear, step-by-step wizard — one
decision per screen, with the ability to go back and change a previous
answer without losing later ones)

1. **Country** — a dropdown. Seed it with the 5 markets that currently
   have real content behind them: United States, United Kingdom, Germany,
   Spain, South Africa. Design the dropdown so more countries can be
   added later without a UI change (data-driven list, not hardcoded
   options in markup).
2. **Region** — a free-text field, not a dropdown. This is deliberate:
   regions vary a lot by country (US has 13 named regions down to
   individual states/metro areas; South Africa has 5 zones; Germany has
   8), so a single fixed dropdown per country isn't the right pattern for
   a prototype. Show 2-3 example placeholder values under the field
   based on the selected country (e.g., for United States: "e.g. Texas,
   Pacific Northwest, Hawaii") to guide the user, but accept free text.
3. **Meal** — a free-text field (blank, no placeholder options) where the
   user names the hero dish they want to visualize.
4. **Occasion & specifics** — a short branching set of questions/dropdowns
   that go deeper once the basics above are set:
   - **Setting**: at home / on the go / at a restaurant / another
     option (dropdown)
   - **Formality**: casual / semi-formal / formal (dropdown)
   - **Group size**: a number input or a small set of buttons (1 / 2-3 /
     4-6 / 7+)
   - **Meal occasion/time**: breakfast / lunch / dinner / snack /
     celebration or holiday (dropdown) — if "celebration or holiday" is
     picked, show one more free-text field for which occasion (e.g.
     "Heritage Day," "a birthday")
   - Leave room in the data model for more questions here later (this
     set is a starting point, not final) — build the question flow as a
     config-driven list rather than hardcoded form fields, so adding a
     new question later is a data change, not a UI rewrite.
5. **Product** — a dropdown for the TCCC brand/product SKU the scene
   should feature (e.g., Coca-Cola Original, Coca-Cola Zero Sugar, Sprite,
   Fanta — again seed with a handful of real options, data-driven so more
   can be added). *(Flagging this step as an addition beyond what was
   asked for — it maps to the pipeline's "Product SKU" brief field, which
   wasn't mentioned in the specific step order given. Reorder or drop it
   if that's not wanted — it slots in cleanly at the end, right before
   generation.)*
6. **Review screen** — before generating anything, show the user their
   full answer set in one place (country, region, meal, all occasion
   answers, product) with an edit link back to each step.
7. **Generate** — a single action that sends the full answer set to a
   (stubbed) backend endpoint and shows a loading state, then renders:
   - The **Scene Summary** — a few paragraphs of readable prose
     describing the intended scene, written as if by a food stylist:
     what's on the table, who's there, the setting, the mood, and any
     cultural framing notes.
   - The **prompt segments** — a set of labeled, separately-editable text
     blocks: Entree Dish, Traditional Side Dish (one per side, if more
     than one), Product Detail, Environmental Overview, Plating +
     Tableware Input, Product Serving Details, Brand Vis ID (camera/lens/
     framing detail). Render each as its own labeled card/section so a
     user could plausibly hand-edit one later (editing doesn't need to
     be functional in this prototype — just show the structure).
8. **Validate** — a button that sends the Scene Summary + segments to a
   second (stubbed) endpoint representing a cultural-authenticity check,
   and shows one of two states:
   - **Pass** — a clear success state, with a "this scene is ready" call
     to action (doesn't need to lead anywhere yet — just show the state).
   - **Fail** — a list of specific notes explaining what's wrong (e.g.,
     "this dish is not typically served with rice in this region" —
     mocked example content is fine), and a "regenerate with these notes"
     button that loops back to step 7's generation call, passing the
     failure notes along.

## Data model / API contract (stub this; design for a real backend later)

Define (and mock) two endpoints with this shape, so a real agent can be
dropped in later without changing the front end:

**POST /generate-scene**
- Request: `{ country, region, meal, occasion: { setting, formality,
  groupSize, mealTime, celebrationDetail? }, product }`
- Response: `{ sceneSummary: string, segments: { entreeDish: string,
  traditionalSideDishes: string[], productDetail: string,
  environmentalOverview: string, platingAndTableware: string,
  productServingDetails: string, brandVisId: string } }`

**POST /validate-scene**
- Request: `{ sceneSummary, segments, country, region }` (the same
  segments object from above, plus enough context to fake a
  region-aware check)
- Response (pass): `{ pass: true }`
- Response (fail): `{ pass: false, notes: string[] }`

Mock both endpoints with realistic-looking canned responses (vary them a
little based on the country/meal input so it doesn't look obviously
static) rather than a real LLM call — this prototype is about proving out
the UI/UX flow, not the underlying intelligence.

## Explicitly out of scope for this prototype

- Actual image generation of any kind
- The Scene Creator 3D layout tool (separate, in-development elsewhere)
- Any node-based compositing workflow
- A real LLM-backed generation or validation call (stub both, per above)
- User accounts, saved history, or multi-session state — a single
  in-memory session per visit is fine

## Design notes

- Mobile-friendly, but this will primarily be used on desktop for now —
  don't over-invest in mobile polish.
- Keep the tone/branding neutral-professional (this is an internal
  creative tool, not consumer-facing) unless you want to explore a more
  branded look — your call as the person driving this experiment.
- Favor a clean, minimal wizard aesthetic (progress indicator across the
  top showing the 6-7 steps) over anything heavier.
