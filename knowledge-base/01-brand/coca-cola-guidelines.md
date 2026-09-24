---
status: DRAFT — WORKING FILE
scope: Coca-Cola product representation in generated scenes — applies across every country/region file, independent of cuisine or location
---

# Coca-Cola product representation guidelines

This file governs how the Coca-Cola product itself (can, bottle, logo) is
represented in any AI-generated scene built from this knowledge base. It's
the one constant across every country file: `02-culture/regions/**` documents
the food/cultural context, `00-methods/country-file-schema.md` documents how
to build and use those cultural files and holds general, subject-agnostic
image-generation findings — this file holds everything specific to getting
the product itself right, so it doesn't need re-discovering per country.

---

## 1. Confirmed findings on generated brand fidelity

- **Generated logo/wordmark text on the can is unreliable, run to run, even
  within the same prompt.** The identical prompt, run twice, produced one
  correct "ORIGINAL TASTE" and one garbled "ORIGINAL TAST" (missing the
  final letter) in the same run set. A separate generation rendered the
  connecting mark between "Coca" and "Cola" as a plain dot instead of the
  correct hyphen/connector. Neither error was tied to a specific prompt
  wording issue — same prompt, same can description, different result each
  time. [CONFIDENCE: HIGH — directly observed across multiple independent
  test generations in this project]
- **The can resists an explicit "keep the label soft-focus/illegible"
  instruction, inconsistently.** A prompt asked for the can's label to face
  away from camera or stay soft-focus/not legible, in the same sentence as
  instructions to keep background signage and ride marquees blurred. Across
  four generations testing this instruction (two per test, two tests), the
  background signage instruction was followed cleanly every time; the can
  label instruction was followed in roughly a quarter of generations and
  ignored — rendered sharp, front-facing, fully legible — in the rest, with
  no clear pattern predicting which. Working theory: "Coca-Cola can" is such
  a strongly-anchored visual concept in the model's training data that it
  competes with and often overrides an explicit instruction to obscure it,
  in a way generic signage doesn't. [CONFIDENCE: HIGH for the inconsistency
  itself; the underlying cause is a working theory, not confirmed]

## 2. Production standard

**Never trust generated brand text, logo, or wordmark as production-safe,
regardless of how good a single sample looks.** Composite an approved
Coca-Cola brand asset over the generated can in production. This is not a
fallback for when prompt instructions happen to fail — per the finding
above, they're expected to fail unpredictably, so compositing is the only
reliable control, not a backup plan.

This does not mean the generation should ignore the can — a correctly
shaped, positioned, and lit can (see §3) is still the right generation
target; only the logo/text rendering itself is untrustworthy.

## 3. Product representation best practices

*Pending — to be compiled and added.* Expected to cover: camera-facing
orientation, optimal framing (e.g., seen full-height, not cropped or
partially obscured), positioning relative to the food, and other
composition rules that make the generated can easiest to composite over or
verify against in production.

## 4. Reference-image conditioning (untested)

Hypothesis, not yet tested: supplying an actual Coca-Cola product reference
image alongside the text prompt (image-conditioned generation, where
supported by the tool) may improve label legibility and overall product
accuracy beyond what text description alone achieves, since the model would
be grounding the render on a real asset rather than reconstructing the logo
from memory. Flagged as the next thing to test, not a proven technique —
apply the same two-generations-minimum discipline from
`country-file-schema.md` §7.5 before treating any result as confirmed.

---
