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
- **Distinct from the wordmark-text problem above: the can's product
  variant/color (classic red original vs. Diet Coke's silver vs. Coke
  Zero's black) is not reliably rendered as "the classic red can" when a
  prompt says only "a Coca-Cola can" without specifying which variant.**
  A beignets test prompt asked for "a single unopened 12 fl oz aluminum
  Coca-Cola can" with no color/variant specified; across three
  generations of the same prompt, one rendered the correct red original
  can, and two rendered a silver Diet-Coke-style can instead (one of
  those two also showed a garbled, duplicated volume readout). This is a
  color/product-identity miss, not just illegible text on an otherwise-
  correct can — a silver can is the wrong product, not a correctly-shaped
  can with bad label text. [CONFIDENCE: MEDIUM — a single three-generation
  test batch, but a clean 2-of-3 miss rate is suggestive; treat as a real
  risk to guard against by default, not yet a fully powered finding]
  **Standing practice going forward**: every prompt should explicitly
  state "the classic red Coca-Cola can (original, not Diet Coke or Coke
  Zero)" rather than relying on "Coca-Cola can" alone to imply the
  original red variant.

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

- **Standard US can (12 fl oz / 355 mL)**: ~4.83 in (12.3 cm) tall, ~2.6 in
  (6.6 cm) diameter. This is the format used in every test prompt in this
  project to date, and the correct default **for US market files only**.
  [CONFIDENCE: HIGH — standard, publicly documented packaging dimension,
  not project-specific research]
- **Standard UK/European can (330 mL)**: ~4.53 in (11.52 cm) tall, ~2.6 in
  (6.61 cm) diameter — see §4.3's full table and market note. **Use this
  figure, not the 355mL one above, for any UK, European, or other
  non-US-market prompt**, unless that market's own file documents a
  different confirmed local standard.
- Other formats (mini can, 20 fl oz bottle, 2-liter bottle, glass bottle)
  are not yet documented here beyond §4.3's table — add their dimensions
  before using them as a scale anchor in a prompt; don't assume the US
  standard can's numbers apply to a different format or market.

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

## 4. Product representation and scene-composition rules

**Source note**: this section is migrated from an earlier standalone project
document ("TABLEWARE COMPOSITION REQUIREMENTS - AGENTIC SYSTEM," v2.0),
split so that the Coca-Cola-SKU-specific rules live here and the general
plate/vessel composition rules (that apply whether or not Coca-Cola is in
the frame) live in `00-methods/tableware-composition-reference.md`, which
this section cross-references rather than duplicates. Status: DRAFT,
inherited from the source document, not yet re-validated against this
project's own image-generation testing the way §1's findings were.

### 4.1 Hero Zone Rule (non-negotiable)

The vertical center third of the frame is the hero zone. It must contain
the hero Coca-Cola SKU (bottle, can, or glass) **and** the hero dish/plate
— both together, not just the food. Every other element composes around
this protected zone. This is what keeps a composition crop-flexible across
aspect ratios (1:1, 4:5, 16:9, 9:16) without losing the product.

### 4.2 Depth Hierarchy Rule (non-negotiable)

Nothing is positioned in front of the Coca-Cola bottle/can. Layer 1
(foreground) holds the hero dish and the Coca-Cola SKU; layer 2 (midground)
holds supporting dishes, bread, and clustered condiments; layer 3
(background) holds a second place setting and any additional elements.

### 4.3 Coca-Cola product dimensions

**Single-serve formats:**

| Product | Height | Diameter/width | Volume | Context |
|---|---|---|---|---|
| Glass bottle (contour) | 200–210mm | 60–65mm | 330mL | Classic, premium, on-premise |
| PET bottle | 210mm | 60mm | 330mL | Convenience, retail |
| Aluminum can | 123mm | 66mm | 355mL | Casual, convenience, on-the-go — **US/North American standard single-serve can** |
| Aluminum can | 115.2mm | 66.1mm | 330mL | Casual, convenience, on-the-go — **UK/European (and most non-US-market) standard single-serve can — do not substitute the 355mL/123mm figure for a non-US market** |
| PET bottle | 203mm | 65mm | 500mL | Single-serve, retail, hearty meals |

**Market-specific can size — read before writing a non-US prompt.** The 355mL/123mm can is a US-market convention, not a universal one. The UK's (and most of Europe's) standard single-serve can is 330mL, roughly 7mm shorter at the same 66mm diameter — a small but real difference that matters for §3's scale-anchor technique, since anchoring a UK/European food item's size against the wrong (longer) US can would introduce exactly the kind of ungrounded-scale error this project's beignet finding already flagged, just in reverse (making the food read smaller than it really is relative to the can). Verified via standard packaging-dimension sources; not yet cross-checked against a specific market's actual bottler SKU data per §4.8. [CONFIDENCE: HIGH for the 330mL can existing as the standard UK/European single-serve size and for its approximate dimensions; not yet verified per-market via TCCC's own bottler documentation] [SOURCE: [Wikipedia: Drink can](https://en.wikipedia.org/wiki/Drink_can); UK retail listings confirming 330mL as the standard single-can size (Tesco, Amazon UK, Coca-Cola GB's own product listings)] **When a country file's market is not the US, default to the 330mL can dimensions above for any can-based scale-anchor clause, not the 355mL figure**, unless that market's own file states a different confirmed local standard.

**Multi-serve formats (at-home):**

| Product | Height | Diameter | Volume | Serves | Context |
|---|---|---|---|---|---|
| PET bottle | 310–320mm | 95–100mm | 1.5L | 2–3 | Intimate family dining |
| PET bottle | 325–335mm | 105–110mm | 2L | 3–4 | Standard family dinner |
| PET bottle | 340–350mm | 110–115mm | 2.5L | 4–6 | Large family gatherings |
| PET bottle | 360–370mm | 115–120mm | 3L | 6+ | Parties, celebrations |

**Glassware**: a contour (bell-shaped) glass, 171–173mm tall, 95mm diameter at the top, 640mL (22oz) — used in every multi-serve scenario below, one per place setting.

**Note on the 12 fl oz/355mL can's dimensions above (123mm tall, 66mm diameter) vs. §3's scale-anchor figures (~4.83in/12.3cm tall, ~2.6in/6.6cm diameter)**: these are the same can, expressed in mm vs. inches/cm from two different source documents — 123mm ≈ 4.84in and 66mm ≈ 2.6in, consistent to within rounding. Use either; they agree.

### 4.4 Conditional drink placement

- **Single-serve scenario** (330mL bottle, 355mL can, or 500mL bottle): the bottle/can itself is the drink for the hero place setting, positioned at the top right of the hero entree plate — no glass needed. Product choice signals register: glass bottle for premium/nostalgic/on-premise settings, PET bottle for everyday convenience, can for casual/modern/on-the-go, 500mL for a heartier individual meal.
- **Multi-serve scenario** (1.5L–3L bottle, at-home): the large bottle sits in the midground, between the hero zone and a side third — not directly at the plate. Each place setting instead gets its own 640mL contour glass, filled, at the top right of that setting's plate; the hero setting's glass can shift further right to let the bottle sit closer to the hero dish for a tighter lockup in narrow/vertical crops. Bottle size signals occasion: 1.5L for 2–3 people, 2L for a standard 3–4-person family dinner (the most common multi-serve choice), 2.5L for 4–6, 3L for 6+/parties.

### 4.5 Bottle clearance radii (multi-serve)

Nothing else in the scene should encroach within these radii of a multi-serve bottle, consistent with the depth-hierarchy rule above:

| Bottle | Height | Clearance radius |
|---|---|---|
| 1.5L | 31–32cm | 10cm |
| 2L | 32.5–33.5cm | 10–12cm |
| 2.5L | 34–35cm | 12–15cm |
| 3L | 36–37cm | 15cm |

### 4.6 Composition scenarios (Coca-Cola-specific layer)

These build on `00-methods/tableware-composition-reference.md` §8's general scenarios A–F, adding the Coca-Cola-specific product/placement choice for each:

- **Single setting + single-serve** (general scenario A): choose the single-serve format per §4.4's register guidance; position at the hero plate's top right.
- **Single setting + multi-serve** (general scenario B): multi-serve bottle in the midground per §4.4; one filled contour glass at the plate's top right.
- **Multiple settings + multi-serve** (general scenario C): as above, plus a second contour glass (filled) at the second place setting.
- **Multiple settings + communal spread** (general scenario D): as C, with the multi-serve bottle sized to the implied number of diners (2L standard, 2.5–3L for a festive/celebratory spread).
- **Rustic single shared dish** (general scenario E): a 1.5–2L bottle for family-style sharing, or a single 355mL can for a more casual, individual-servings feel.
- **Elevated/minimal presentation** (general scenario F): a 330mL glass bottle specifically — the premium/nostalgic single-serve format is the natural fit for this register.

### 4.7 Validation checklist (Coca-Cola-specific — use alongside the general checklist in `00-methods/tableware-composition-reference.md` §9)

- Hero dish **and** hero Coca-Cola SKU both sit in the vertical center third.
- Nothing is positioned in front of the Coca-Cola bottle/can (depth-hierarchy rule).
- The Coca-Cola product format matches the scene's register (single- vs. multi-serve, casual vs. premium) per §4.4.
- A multi-serve bottle's size matches the implied number of diners, and its clearance radius (§4.5) is respected.
- Every multi-serve place setting has its own filled 640mL contour glass.
- Per §1–§2 above: don't rely on the generation to render correct can/bottle branding text — that's a compositing task, not a prompt-instruction target.

### 4.8 Regional/market note

Coca-Cola product format availability can vary by market (not every size is stocked everywhere) — flag this if a specific market's brief calls for a format not confirmed available there. This KB does not yet track per-market SKU availability; treat §4.3's dimension tables as generally applicable but verify format availability against real market data before treating a specific SKU choice as confirmed for a given country.

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
