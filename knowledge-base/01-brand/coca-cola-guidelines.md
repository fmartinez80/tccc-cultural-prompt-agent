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
  instruction, inconsistently — and a fifth test complicated the pattern
  further rather than confirming it.** A prompt asked for the can's label
  to face away from camera or stay soft-focus/not legible, in the same
  sentence as instructions to keep background signage and ride marquees
  blurred. The first two tests (four generations) suggested a clean split:
  background signage instructions followed every time, can-label
  instructions followed in roughly a quarter of generations. **A third
  test (a Queens street-cart scene) inverted that pattern**: background
  signage — a yellow storefront sign, a red neon sign — rendered as sharp,
  legible-looking (if gibberish) text despite the same "keep signage
  blank/blurred" instruction, while the can rendered with fully correct,
  legible branding in the same image. **Revised conclusion: neither
  background text nor the can label is a reliable target for a "keep it
  illegible" instruction — both are unpredictable run to run, not a clean
  case of "background complies, only the can defies."** The can does still
  appear to fail more often in aggregate across all three tests, but the
  margin is not as clean as the first two tests alone suggested. [CONFIDENCE:
  HIGH that neither is a dependable instruction target; MEDIUM that the can
  fails more often than background specifically, given the small sample]

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

## 3. Physical specifications — scale-anchor reference for prompts

Use this section directly when writing a prompt; don't re-derive these
numbers per country file or leave scale to the model's judgment. This is
reference data, kept here rather than in `country-file-schema.md`, because
it's about the product itself, not a food-culture fact or a general
prompting technique.

- **Standard can (12 fl oz / 355 mL)**: ~4.83 in (12.3 cm) tall, ~2.6 in
  (6.6 cm) diameter. This is the format used in every test prompt in this
  project to date. [CONFIDENCE: HIGH — standard, publicly documented
  packaging dimension, not project-specific research]
- Other formats (mini can, 20 fl oz bottle, 2-liter bottle, glass bottle)
  are not yet documented here — add their dimensions before using them as
  a scale anchor in a prompt; don't assume the standard can's numbers apply.

**Why this matters**: this project found that scale/size consistency for
the hero food item is unreliable across generations of the same prompt,
and that lens/aperture phrasing ("50mm at f/2.8") is not a dependable lever
for fixing it — see `country-file-schema.md` §7.5 for the general finding
and the reasoning. The fix that's actually expected to help is anchoring
the food's size to the can's known, fixed real-world dimensions above,
rather than describing the food's size in isolation.

**Template scale-anchor clause** — adapt the comparison to what the scene
actually needs, but keep the structure: name the can's real size, then
state the food's size relative to it.

> "[Food item] is [taller than / roughly the same length as / shorter
> than] the can standing beside it — a standard 12 fl oz can, about 4.83
> inches (12.3 cm) tall — use the can's real size as the scale reference
> for the whole scene."

Not yet confirmed across multiple generations as of this writing; apply
the two-generations-minimum discipline below before treating a specific
phrasing as settled.

## 4. Product representation best practices

*Pending — to be compiled and added.* Expected to cover: camera-facing
orientation, optimal framing (e.g., seen full-height, not cropped or
partially obscured), positioning relative to the food, and other
composition rules that make the generated can easiest to composite over or
verify against in production.

## 5. Reference-image conditioning (untested)

Hypothesis, not yet tested: supplying an actual Coca-Cola product reference
image alongside the text prompt (image-conditioned generation, where
supported by the tool) may improve label legibility and overall product
accuracy beyond what text description alone achieves, since the model would
be grounding the render on a real asset rather than reconstructing the logo
from memory. Flagged as the next thing to test, not a proven technique —
apply the same two-generations-minimum discipline from
`country-file-schema.md` §7.5 before treating any result as confirmed.

---
