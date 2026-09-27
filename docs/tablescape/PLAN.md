# Tablescape Composer — Plan

Turn the Cultural Prompt Agent's scene guidance into a **labeled 3D perspective proxy** of the tablescape that follows the CokeMeals composition rules:
- camera lens and angle chosen from dropdowns (default: 30° diner's eye)
- table horizon at or below 50 % of the frame
- the main entree and SKU as co-heroes
- 50 / 30 / 20 visual mass across the three layers
- odd item counts that form depth triangles

The composer generates **up to 3 layout options** that use the same elements and meet the same requirements. The prompt operator, who is also the art director, picks one, so nobody has to design a layout by hand. Once a layout has been picked for a given combination of elements and format, it becomes the template and is reused.

Related docs:
- [`../INTAKE_FLOW.md`](../INTAKE_FLOW.md): the front-end exchange that produces the `SceneSpec` this composer consumes.
- [`source/composition-rules.md`](./source/composition-rules.md) and [`source/blueprint.schema.json`](./source/blueprint.schema.json): the composition rules and blueprint schema as provided. Section 13 traces every rule to where it's implemented.
- [`reference/`](./reference): earlier proxy examples. These predate the composition rules: their camera is higher and their table horizon sits above 50 %.

| | |
|---|---|
| ![](reference/example-1.webp) | ![](reference/example-2.webp) |
| ![](reference/example-3.webp) | ![](reference/example-4.webp) |

---

## 0. Guiding principles

1. **The LLM decides *what* is on the table. Deterministic code decides *where* it goes.** The composition rules were written as a system prompt for an LLM that outputs coordinates (Part B). We keep every rule, but **the solver implements them in code, and the solver outputs the blueprint JSON (Part A)**. The LLM keeps the parts it's good at:
   - assigning each item to a layer
   - choosing the culturally right accent when the odd/even rule adds one
   - pairing each condiment with its dish

   Why not let the LLM place things:
   - An LLM can't check projection, occlusion or the horizon clamp.
   - It gives different coordinates for the same brief.
   - It can't guarantee 3 distinct options that all comply.
2. **Choose, don't design.** The operator never places objects. They see up to 3 finished, rule-compliant proxies and pick one. That pick is the approval.
3. **SKU always on the diner's right.** It's a fixed brand rule (2a), and it matches the composition rule placing the beverage midground-right.
4. **Batch job, not an app.** Nobody watches the layout come together: spec in → solve → one render per option → images out.
5. **Rules come from data, not taste.** Composition rules, brand rules and real object sizes live in versioned files, so every option is compliant by construction.

```
Intake flow (../INTAKE_FLOW.md) ──► SceneSpec
                                       │
                          Layer classification + odd/even check (agent picks the accent)
                                       │
                          signature ──► approved template? ──yes──► cached proxy + blueprint (no solve, no render)
                                       │ no
                                       ▼
                          Solver: one best layout per archetype
                          (composition rules + brand rules + known sizes)
                                       │
                          Pick up to 3 distinct, compliant options
                                       │
                          Headless render ×N ──► options bundle (labeled + clean PNG, masks, blueprint.json)
                                       │
                          Operator selects 1 ──► promoted to template for this signature
                                       │
                                       ▼
                          Selected proxy + blueprint + prompt manifest ──► image generation workflow
```

---

## 1. Contracts

### 1a. Input: `SceneSpec`
Produced by the intake flow. The full field list and an example are in [`../INTAKE_FLOW.md`](../INTAKE_FLOW.md#resulting-scenespec-example). What the composer relies on:

| field | used for |
|---|---|
| `format.aspectRatio` (1:1, 2:3, 1:3, 3:2, 3:1) | frame shape and table-zone shape |
| `format.shopperZone` (Transition, Impulse, Destination) | copy reserve blocks in the upper zone |
| `camera.lens`, `camera.angle` | proxy focal length, focus distance and pitch; prompt fragments |
| `scene.{setting, venue, party}` | table type/size, arrangement style, environment prompt |
| `sku.package` | beverage proxy, logo box, seam offset |
| `entree.{vessel, massClass}` | main proxy footprint and silhouette height |
| `accompaniments[]` with `role`, `vessel`, `pairsWith` | layer assignment, condiment proximity |
| `props[]` (napkin, cutlery with `targets`) | Layer 3 props, directional vectors |

- **Closed vocabularies** for `vessel`, `role`, `package`, `massClass`. The agent maps free text such as "molcajete of salsa" onto `vessel: small-bowl, role: sauce` and keeps the free text for the prompt.
- **Stable role labels** (`SKU`, `MAIN`, `SIDE_1`, `SAUCE_1`, `ACCENT_1`, `NAPKIN_1`, `CUTLERY_1`). The same strings are used in the proxy labels, the ID mask, the blueprint `id` and the prompt manifest.
- `camera.{lens, angle}` are dropdown ids from [`camera-options.json`](./camera-options.json) (section 4a).

### 1b. Output: `blueprint.json` (Part A schema + extensions)
Every option's layout is emitted as a `CokeMeals3DTablescapeBlueprint` ([schema](./source/blueprint.schema.json)). It's the shared format between the composer, template cache, renderer and prompt manifest. The extensions below are allowed because the schema doesn't forbid extra properties. We should fold them into schema v2:

| extension | why it's needed |
|---|---|
| `frame.units` `{ x_span_m, z_span_m }` | links normalized coordinates to meters, needed for the 1–3 inch condiment rule and real sizes |
| `primitives[].role`, `primitives[].pairs_with` | role labels; which dish a condiment belongs to |
| `primitives[].screen_bbox` `{x0, y0, x1, y1}` | projected silhouette, for the horizon, occlusion and trademark checks |
| `primitives[].logo_bbox` (beverage only) | trademark clear zone check |
| `primitives[].shape_type: "curve_path"` + `control_points` | napkin S- and C-curves, which `bounding_box` can't express |
| `primitives[].injected: true` + `injected_reason` | marks the accent added by the odd/even rule |
| `layout_meta` `{ archetype, seed, score, rule_results[], signature }` | traceability and template cache |
| `copy_reserve[]` | copy blocks for the shopper zone in the upper 50 % |

## 2. Rule sources

Three versioned data files drive the solver. Changing a rule never needs a code change.

| file | owns | contents (from the composition rules) |
|---|---|---|
| `registry/*.json`: **known sizes** | real dimensions (m), footprint, height, bottom-center pivot, logo box, label anchor | 8 oz contour bottle Ø 6.2 × 19.5 cm; dinner plate Ø 27 cm; ramekin Ø 7 cm; 2-top 75 × 75 cm… |
| `rules/brand.json`: **brand rules** | non-negotiables for the SKU | SKU on the diner's right; trademark clear zone; "Coca" script fully visible and in frame; clockwise seam offset; upright |
| `rules/composition.json`: **composition rules** | CokeMeals layout rules | default camera 30°; horizon ≤ 0.50; depth bands; phi-grid anchors; 50/30/20 mass; odd/even; condiment 1–3 in; cutlery vectors; no line-of-sight stacking; side size 40–60 % |

**Hard** rules reject an option and are never relaxed. **Soft** rules are scored, with weights in `composition.json`. Section 13 lists which is which.

### 2a. SKU placement: always on the diner's right
- The SKU sits to the **right of MAIN, on the diner's right-hand side**, in every market. This avoids cultural problems where use of the left hand while dining is discouraged. It also matches the composition rule: beverage in the midground-right, over the upper-right phi intersection.
- The diner's right is defined from the diner's seat. Every camera option shoots from the diner's side, so the diner's right is always **screen-right**.
- **Hard constraint:** the SKU centroid is right of MAIN's centroid and inside the right half of the frame. It targets the right phi line (x = +0.236).
- There's no per-market override. Any other drinkware goes on the right with the SKU.

## 3. Real-scale proxy registry

- Every proxy has real dimensions and a **bottom-center pivot**, so objects sit on the tabletop without guessed spawn heights. The blueprint's shape types map onto the registry: `cylinder` (beverages, glasses), `flattened_cylinder` (plates, bowls, ramekins), `bounding_box` (cutlery, boards, baskets, foil wraps) and `curve_path` (napkins).
- **Beverages:** contour glass 8 / 12 oz, can 12 oz, PET 500 ml, glass with ice. They're built with `LatheGeometry` from real profiles, and each has a **logo box** (the "Coca" script region) for the trademark clear zone.
- **Plating vessels** cover every option the intake's plating step can offer: plate, bowl, board, basket, foil wrap, tray, leaf, paper-lined basket. A plating with no proxy maps to the nearest class.
- **Food-mass proxies** per `massClass` (flat, heaped, stacked, wrapped) give the entree its real silhouette height. This matters, because the horizon clamp applies to silhouettes.
- **Props:** ramekins, sauce boats, lime dish, cutlery, and napkins as flat ribbons along a curve.
- **Proxies render with one flat color per layer or role** under fixed lighting. The image model is the only real viewer, so consistency beats looks.

## 4. Camera and frame

### 4a. Camera dropdowns

The operator picks **Lens** and **Angle** from two dropdowns. Both are defined once in [`camera-options.json`](./camera-options.json), which the front end, the prompt builder and the proxy camera all read. Each option carries:
- a **UI label**
- a **prompt fragment**: one complete sentence in a consistent style, with no markdown or bullet syntax, so fragments concatenate cleanly
- **proxy parameters** (focal length, focus distance, pitch). The proxy must be rendered with the same lens and angle the prompt describes, or the composition reference and the prompt disagree.

**Lens + depth of field**

| id | label | proxy | prompt fragment (abridged) |
|---|---|---|---|
| `standard-50` *(default)* | Standard · 50mm · f/2.8 | 50 mm, focus auto | "Shot with a 50mm lens at f/2.8 for a shallow depth of field, with the main dish and the Coca-Cola bottle in sharp focus…" |
| `wide-35` | Wide · 35mm · f/1.4 · focus 1.5 m | 35 mm, camera ~1.5 m from MAIN | "Shot on a 35mm wide-angle lens… at f/1.4, focused at about 1.5 meters on the main dish and the Coca-Cola bottle…" |
| `ultrawide-15` | Ultra-wide · 15mm rectilinear · street food | 15 mm, focus auto | "Shot on an ultra-wide 15mm rectilinear lens at f/8 with deep depth of field… straight verticals and no fisheye distortion." |

**Angle**

| id | label | proxy pitch | status |
|---|---|---|---|
| `low-10` | Low · 10° | 10° | from your list |
| `medium-25` | Medium · 25° | 25° | from your list |
| `diners-eye-30` *(default)* | Diner's eye · 30° | 30° | proposed: the composition rules' default was missing |
| `high-45` | High · 45° | 45° | proposed: upper end of the schema's 30–45° range |

Overhead (90°) and hyper-low (0°) stay excluded, per the composition rules.

**Adjustments made to the source options for prompt use**
- **Ranges → one value.** "14–16mm" → 15 mm and "28–35mm" → 35 mm. The prompt could keep a range, but the proxy camera needs one number, and the two must match.
- **Every option names what's sharp.** At 50 mm f/2.8 only ~6–9 cm of depth is in focus, and at 35 mm f/1.4 / 1.5 m only ~15 cm. The entree and the bottle sit 20–30 cm apart, so "shallow depth of field" alone lets the model blur one of them. Naming "the main dish and the Coca-Cola bottle in sharp focus" protects the brand rule that the "Coca" script stays in focus.
- **"Moderate depth of field" → "shallow".** f/1.4 at 1.5 m is shallow, and the prompt should say what the lens really does.
- **Genre moved out of the lens.** "Photorealistic street food photography" is scene text, not a lens property. It now comes from the scene step (`venue: on-the-go`), so picking the ultra-wide for a restaurant scene doesn't turn it into street food.
- **Ultra-wide aperture added (f/8, proposed).** None was given. Ultra-wides are normally shot stopped down.
- **Consistent sentence form.** Lens fragments start "Shot with/on…" and angle fragments describe the camera position. The prompt order is fixed: `scene/genre → subject → angle → lens → lighting`.

**How the choices affect the layout**
- **Focal length** sets the proxy's field of view, `fov = 2·atan(24 / (2·f))` (full-frame vertical).
- **Focus distance** (35 mm option) fixes the camera ~1.5 m from MAIN, so auto-fit only adjusts the aim. The result is a wider, more environmental frame with smaller items.
- **Ultra-wide** stretches objects near the frame edges, so the SKU must stay out of the outer 15 % (extra hard constraint). It's recommended for outdoor and on-the-go scenes.
- **Low angle (10°)** makes items hide behind each other more. Fewer items fit before the no-stacking rule fails, and the solver reports infeasible rather than stacking.
- **Azimuth** is 0° ± 10°, always from the diner's side, which keeps diner's-right = screen-right.
- **Aperture is prompt-only.** The proxy doesn't render blur.
- Lens and angle are **part of the template signature**. A template picked at 50 mm / 30° isn't reused for 35 mm / 10°.

### 4b. Frame zones

```
y = 1.0 ┌───────────────────────────────────────────┐
        │  ENVIRONMENT / CONTEXT ZONE               │  bokeh environment from scene details (prompt-only)
        │  + copy reserve blocks for shopperZone    │  never table elements
y = 0.5 ├ ─ ─ ─ ─ ─ ─ table rear edge ≤ here ─ ─ ─ ─ ┤
        │  TABLE SUBSTRATE ZONE                     │  every table primitive lives here
        │        ● SKU (upper-right phi, y≈0.309)   │
        │  ● MAIN (lower-left phi, y≈0.191)         │
y = 0.0 └───────────────────────────────────────────┘
```

- **Auto-fit:** the chosen pitch and lens stay locked, as does the azimuth. Camera distance, height and aim point are solved so that:
  - the table's rear edge projects at y ≤ 0.50 (target 0.44–0.50, which uses the table zone fully)
  - every table primitive's silhouette stays inside the table zone (see open question 1)
  - MAIN and the SKU land near their phi anchors
- **Aspect ratios:** all five ShRED / ShopX ratios are supported, and templates are keyed per ratio. The extremes are tight:
  - **3:1** banners leave a very thin, wide table band.
  - **1:3** strips leave a narrow table band, which may only fit the co-heroes plus one item.

  The solver returns "infeasible, suggest ≤ N items" rather than breaking a rule.
- **Copy reserves:** each shopper zone reserves blocks in the upper 50 %. These are recorded in the blueprint and drawn in `labeled.png` only, never in `clean.png`. The block sizes per zone need the ShRED definitions (open question 8).

## 5. Layout solver

### 5.1 Coordinate frame
The blueprint's normalized frame is defined as follows:
- **x ∈ [-1, 1]:** lateral position across the table. -1 is left, +1 is right (the diner's right).
- **z ∈ [0, 1]:** depth. 0 is the immediate foreground at the bottom of the frame, **0.5 is the table's rear edge (the horizon)**, and 1 is far background.
- **y ∈ [0, 0.50]:** the primitive center's **projected height on the canvas**, from the bottom. The solver derives it from x/z and the camera. It's used to check the clamp, not to place objects.

The solver works in meters internally (real sizes, the 1–3 inch rule) and converts to the normalized frame for output, recording the scale in `frame.units`.

Depth bands (from the rules):

| band | z | holds |
|---|---|---|
| immediate foreground | 0.0–0.2 | MAIN only |
| midground | 0.2–0.4 | SKU + Layer 2 sides |
| rear table margin | 0.4–0.5 | Layer 3 accents only, if needed |
| background | > 0.5 | never table elements (environment, prompt-only) |

### 5.2 Pre-step: layers and the odd/even engine
1. **Classify** every item into a layer. The agent does this with the closed role vocabulary:
   - **Layer 1, Primary Co-Heroes:** MAIN + SKU.
   - **Layer 2, Secondary:** sides, starches, salads, sharing bowls, bread baskets.
   - **Layer 3, Tertiary:** ramekins, sauces, garnishes, napkins, cutlery.
2. **Count N** = MAIN + SKU + Layer 2 + ramekins / sauces / garnishes + napkins. Cutlery is not counted, since it's a directional prop (open question 4).
3. **If N is even:** the solver requests one Layer 3 accent. The **agent picks what it is** from the region's knowledge base (lime dish, pickled onions, kimchi, chutney ramekin…) and falls back to a plain ramekin. The accent is marked `injected: true` and shown in the meal summary as "added for composition", where the operator can swap it.
4. **Side-size check:** each Layer 2 vessel should be 40–60 % of the MAIN vessel's size. Real sizes are never rescaled, because that would make the proxy lie. If a side breaks the rule, the intake's sides step warns (open question 6).

### 5.3 Hard constraints (reject the option)

| # | rule | check |
|---|---|---|
| H1 | Horizon clamp | table rear edge projects at y ≤ 0.50 |
| H2 | Table zone | every table primitive's `screen_bbox.y1` ≤ 0.50 |
| H3 | Depth bands | MAIN z ∈ [0, 0.2]; SKU and Layer 2 z ∈ [0.2, 0.4]; Layer 3 z ≤ 0.5 |
| H4 | SKU right | SKU x > MAIN x, SKU in the right half |
| H5 | Trademark clear zone | nothing overlaps the SKU's `logo_bbox` + margin in screen space; the "Coca" script is fully in frame |
| H6 | Seam offset | SKU yaw = camera-facing + clockwise offset (`brand.json`, default 12°, to confirm); roll and pitch 0 (upright) |
| H7 | No line-of-sight stacking | a nearer item may cover at most 30 % of the width of an item directly behind it; sides are never directly behind MAIN |
| H8 | Condiment proximity | edge-to-edge gap to the `pairs_with` dish is 2.5–7.6 cm (1–3 in) |
| H9 | Cutlery vectors | the handle→tip axis points within ±15° of its target's center; no handle points toward the frame edge; fully in frame |
| H10 | Odd count | N (after the odd/even step) is odd |
| H11 | Physical | footprints don't overlap (gap ≥ 1.5 cm, except condiments meant to sit on their dish); everything on the table |
| H12 | Co-heroes visible | MAIN ≤ 15 % occluded and not cropped at the sides |

### 5.4 Soft score (screen space)
Each primitive is projected through the camera: analytic silhouettes for the solver, and the ID pass for the final check. The score terms:

| term | intent (source rule) |
|---|---|
| `phiAnchors` | MAIN near the lower-left phi point of the table zone (x -0.236, y 0.191), SKU near the upper-right point (x +0.236, y 0.309) |
| `goldenTriangle` | MAIN → SKU sits along the golden-triangle diagonal |
| `visualMass` | projected area share per layer is close to 50 / 30 / 20 (tolerance ± 5 pts, see open question 3) |
| `depthTriangles` | odd groups form real triangles in x–z (no three items in a line), per the depth-loop rule |
| `lateralStagger` | midground items staggered diagonally or laterally behind MAIN |
| `napkinFlow` | the napkin curve passes through a midground gap, S- or C-shaped |
| `leadingLines` | cutlery and napkin lead the eye toward MAIN or the SKU |
| `breathingRoom` | even negative space, no tangents between objects or with the frame edge |
| `horizonUse` | the table rear edge is close to 0.50, using the table zone fully |

`score = Σ wᵢ·termᵢ`, with weights in `composition.json`.

### 5.5 Archetypes
The co-heroes are anchored by the rules (MAIN front-left, SKU mid-right), so the archetypes vary **how the Layer 2 and 3 items sit around them**. Each archetype is a named slot map in the normalized frame.

| archetype | idea | Layer 2 / 3 placement | default when |
|---|---|---|---|
| **Triangle Loop** | depth loop MAIN → SKU → accent | accent / side at far-left midground; more items build nested triangles | N = 3 (the rules' 2 + 1 case) |
| **Crescent Arc** | secondaries wrap behind MAIN | 3+ items in a midground arc from left to center, behind MAIN | N = 5 (the rules' 4 + 1 case) |
| **Diagonal Stagger** | leading line into the SKU | items stepped along a diagonal from front-left toward the SKU | N ≥ 5 alternative |
| **Counterweight** | mass balances the SKU | secondaries grouped mid-left, opposite the SKU | N ≥ 5 alternative |

Napkin shape (S or C) and cutlery target (MAIN or SKU) are variants within an archetype. Arrangement styles for group and family scenes bring their own archetype sets (open question 9). A market can reorder archetypes but not break any rule.

### 5.6 Search (per archetype)
1. Place the co-heroes near their phi anchors, then enumerate slot assignments for Layer 2 and 3 (small: usually < 200 combinations).
2. Auto-fit the camera, then reject on hard constraints.
3. Score, and refine the top-k with a **seeded** jitter pass (positions ± 3 cm, non-SKU yaw, napkin control points).
4. Keep the best layout for the archetype, or mark the archetype infeasible.

If no archetype is feasible, return an infeasible result with a relaxation suggestion, such as "1:3 fits at most 3 items" or "drop one side", to feed back to the intake.

## 6. Generating up to 3 options

**Locked across options:**
- elements, vessels and counts, including the injected accent
- format (aspect ratio, shopper zone)
- camera lens and angle (the operator's dropdown choices)
- every hard rule

**Allowed to vary:**
- archetype and slot assignment
- Layer 2 and 3 positions, napkin shape and cutlery target
- small co-hero shifts around their phi anchors
- camera distance and aim, via auto-fit

**Selection:**
1. Solve every enabled archetype (5.6).
2. Rank by score. Break ties with past picks for this market (section 7).
3. Pick greedily. An option is added only if it's a different archetype **and** its Layer 2 and 3 role centroids move ≥ 10 % of frame width on average versus every option already picked. Co-heroes are anchored, so they don't count toward difference.
4. Stop at 3. **Never pad.** Small scenes have fewer ways to comply: N = 3 (main + SKU + accent) is nearly prescribed by the rules, so expect 1–2 options there, and 3 for N ≥ 5.

**Bundle:**
```
out/<runId>/
  options.json            # per option: archetype, score breakdown, rule results, one-line rationale
  contact-sheet.png       # A / B / C side by side for the operator's pick
  A/ labeled.png  clean.png  depth.png  ids.png  blueprint.json
  B/ …
  C/ …
```
Each option has a one-line rationale, for example *"Crescent Arc: sides wrap behind the tacos; napkin C-curve leads to the bottle; mass 51/29/20"*.

## 7. Templates (reuse what was picked)

A **signature** is a key over everything locked:
```
standard-50 | diners-eye-30 | 3:2 | Impulse | table:2-top | party:1 | sku:contour-8oz | main:plate(flat) | L2:bowl | L3:small-bowl,accent:small-bowl | props:napkin,cutlery | proxyset:v3 | rules:v2
```

**Lookup:**
1. **Approved template exists:** return the cached proxy and blueprint, with no solve and no render.
2. **Cached options exist but none was picked:** return them again.
3. **Near hit** (one item different): seed the solver from the approved layout.
4. **Miss:** full solve, then cache.

**Promotion and upkeep:**
- **Promotion:** the operator's pick is the approval and becomes the signature's template (versioned, with who picked it and when).
- **Retire:** if final images from a template keep disappointing, the operator retires it. The next run shows fresh options, excluding it.
- **Learning:** pick counts per archetype, by market and scene, reorder the ranking.
- **Invalidation:** `proxyset` and `rules` versions are in the key. Any change to a size or rule re-validates approved templates and flags failures for a re-pick.

## 8. Rendering and outputs (headless, one frame per option)

- A small **`scene-core`** function, with no React and no render loop, turns `blueprint.json` into a three.js scene and renders one frame at the spec's aspect ratio. It runs in headless Chromium (Playwright) or Node with headless GL.
- Passes per option:
  1. **`labeled.png`**: role labels as a 2D overlay, plus the horizon line and copy-reserve blocks. For the operator's pick and debugging.
  2. **`clean.png`**: no labels, lines or blocks. **This is what the image model gets.**
  3. **`depth.png`** and **`ids.png`** (flat color per role): for depth / segmentation control and regional prompting, if the workflow supports them. `ids.png` also measures visual mass exactly.
  4. **`blueprint.json`**: Part A plus extensions, including every rule's pass/fail result.
- **Validators are the quality gate.** Hard rules are re-checked on the rendered ID mask. A failure fails the run loudly and never ships a frame.
- **Prompt-only rules** travel in the prompt manifest, not the proxy:
  - aperture / depth of field and focus target (the lens dropdown's prompt fragment)
  - environment and bokeh content for the upper zone
  - ≤ 2.5 background faces
  - the "Coca" script slanting diagonally upward, which is inherent to an upright bottle facing the camera

## 9. Integration with the Cultural Prompt Agent

- **Intake flow → `SceneSpec`** ([`../INTAKE_FLOW.md`](../INTAKE_FLOW.md)). The layout pick is the flow's last decision step and uses the same A (suggested) / B / C card as the meal steps.
- **Agent responsibilities in the composer:** layer classification, the accent choice for the odd/even rule, and `pairsWith` links.
- **Feasibility feedback:** infeasible results go back to the sides or format step with a concrete suggestion.
- **Post-gen validators:**
  - the SKU's detected box matches the blueprint's SKU box (IoU)
  - the table horizon in the generated image is ≤ 0.50
  - the logo isn't covered
  - the face count in the background is within the rule
- The **selected proxy and blueprint are stored with the final image** as the record of what was decided.

## 10. What to reuse from `wpp-scene-composer`

| Keep | Drop from the pipeline / change |
|---|---|
| Lighting + shadow setup (`Canvas3D.jsx`) → `scene-core` | React canvas, render loop, resize handling, raycast selection |
| Geometry builders (`objectGeometries.js`) → registry | Scales aren't real-world (plate is 0.8 m across on a 2 m table), and pivots are centered (hence `spawnHeight 0.85`). Switch to meters, bottom pivots and the blueprint shape types |
| Object model `{id, type, category, label, position, rotation, scale}` | Replace with blueprint primitives (`layer`, `role`, `shape_type`…) |
| Aspect-ratio selector | Use the five ShRED ratios, driven by the spec |
| — | CameraPresets (replaced by the dropdowns in `camera-options.json`), TransformGizmo, CategoryPicker, LayersPanel, LOAD/SAVE UI. The composer can stay as an **optional debug viewer** for `blueprint.json` |

## 11. Module layout

```
tablescape/
  schema/        SceneSpec, Blueprint (Part A + extensions), Options, Template schemas + fixtures
  registry/      known sizes: beverages (+ logo boxes), plating vessels, food-mass, props, tables
  rules/         brand.json, composition.json, archetypes/*.json, shopper-zones.json
  camera/        camera-options.json → proxy camera, auto-fit, horizon clamp
  solver/        layer + odd/even pre-step, constraints H1–H12, scoring, archetype search, option selection
  templates/     signature(), lookup, cache, approvals, pick counts
  render/        scene-core, label / horizon / copy-reserve overlay, depth + ID passes, contact sheet, headless runner
  cli/           `tablescape options spec.json --out ./out`
                 `tablescape select <runId> B`
```
The solver only needs projection and footprint math, so it's unit-testable without WebGL.

## 12. Phased roadmap

| Phase | Deliverable | Done when |
|---|---|---|
| **0: Contracts + rules** | `SceneSpec` v0.2 (from the intake flow), blueprint schema v2 (Part A + extensions), `brand.json` / `composition.json` from the composition rules, open questions 1–8 answered | Agent, intake and composer all code against the same schemas |
| **1: Render from blueprint** | Registry at real scale; `scene-core` + headless runner + overlays: hand-written `blueprint.json` → labeled / clean / ID PNG | A hand-written N = 3 blueprint renders with the horizon at ≤ 0.50 |
| **2: Solver, one option** | Camera auto-fit, odd/even pre-step, H1–H12, scoring, *Triangle Loop* | Every N = 3 fixture passes all hard rules, deterministic per seed |
| **3: Three options** | *Crescent Arc*, *Diagonal Stagger*, *Counterweight*; diversity selection; bundle + contact sheet + rationale | N ≥ 5 fixtures return 3 distinct, compliant options; all five aspect ratios handled or reported infeasible |
| **4: Pick → template** | Signature cache, pick = approval, template bypass, pick counts | Repeat specs return the approved proxy instantly |
| **5: Pipeline hookup** | Intake decision cards → SceneSpec → options → pick → manifest; post-gen validators | End-to-end run from intake to final image |
| **6: Scale out** | Group and family arrangement styles, on-the-go mode (if in scope), shopper-zone copy reserves | Template hit rate and option-A pick rate tracked |

## 13. Rule traceability

| Source rule | Implemented as | Where |
|---|---|---|
| ~30° diner's-eye camera; no overhead or hyper-low | 30° is the default angle; 10°, 25°, 45° also offered; 0° and 90° excluded | 4a (open question 13) |
| Table rear edge ≤ Y 0.50 | **H1** + auto-fit | 4b, 5.3 |
| All table items in the lower 50 % | **H2** | 5.3 (open question 1) |
| Upper 50 % for bokeh + ShRED copy | environment is prompt-only; `copy_reserve[]` | 4b, 8 |
| MAIN at Z 0–0.2; beverage + sides at Z 0.2–0.4; nothing on the table at Z > 0.5 | **H3** | 5.1, 5.3 |
| MAIN at lower-left phi; beverage at upper-right phi / golden triangle | `phiAnchors`, `goldenTriangle` (table-zone phi grid) | 5.4 (open question 2) |
| 50 / 30 / 20 visual mass | `visualMass` soft score, measured on `ids.png` | 5.4 (open question 3) |
| Sides 40–60 % smaller than MAIN | selection-time warning, never rescaled | 5.2 (open question 6) |
| Stagger sides diagonally or laterally behind MAIN | `lateralStagger` + **H7** | 5.3, 5.4 |
| Don't stack along the line of sight | **H7** | 5.3 |
| Even N → inject +1 Layer 3 accent; form depth triangles | odd/even pre-step + **H10** + `depthTriangles`; Triangle Loop / Crescent Arc defaults | 5.2, 5.5 |
| Condiments within 1–3 in of their dish | **H8** (via `pairs_with`) | 5.3 |
| Cutlery points inward; never off-canvas | **H9** + `leadingLines` | 5.3, 5.4 |
| Napkin S- / C-curves through midground gaps | `curve_path` shape + `napkinFlow` | 1b, 5.4 (open question 7) |
| Clockwise seam offset on bottles / cans | **H6** | 5.3 (open question 5) |
| Trademark clear zone; nothing overlaps the logo box | **H5** | 5.3 |
| "Coca" fully visible, in focus, slanting upward, even if tightly cropped | **H5** (in frame and uncovered); focus and slant are prompt-only | 5.3, 8 |
| f/4–f/5.6 depth of field | superseded by the lens dropdown (f/1.4–f/8); every fragment names the entree and bottle as sharp | 4a (open question 13) |
| ≤ 2.5 faces in the background | prompt manifest + post-gen check | 8, 9 |
| SKU on the diner's right (our rule) | **H4** | 2a |

## 14. Testing and quality

- **Golden tests:** fixture spec → options snapshot (archetypes, blueprints, scores) → PNG diff in CI.
- **Rule tests:** one unit test per hard rule, H1–H12. Every option from every fixture is asserted to pass all of them across all five aspect ratios.
- **Odd/even tests:** N = 2, 4, 6 inputs always gain exactly one accent. Odd inputs never do.
- **Diversity tests:** options from one spec always pass the distinctness check. Small scenes return fewer rather than near-duplicates.
- **Metrics:** template hit rate, pick distribution per archetype, visual-mass error, and post-gen SKU IoU.

## 15. Open questions

Questions about the composition rules. Answers go into `composition.json` / `brand.json`:

1. **Horizon clamp scope.** Read literally, *every* item's full silhouette must stay below y = 0.50. That caps how tall the bottle can appear, since it stands in the midground and its top can't cross the midline. Is that intended, or may tall beverages rise above the line as long as their base and the table stay below?
2. **Phi grid frame.** The upper-right phi point of the full canvas is at y ≈ 0.618, which is above the horizon. v1 applies the phi grid **within the table zone** (anchors at y 0.191 and 0.309). Confirm, or tell us whether the beverage's visual center should target the full-canvas point, which only works if question 1 allows tall items to rise.
3. **Visual mass.** Should it be measured as the share of projected area? What tolerance? And when a layer is empty (for example main + SKU + accent has no Layer 2), how should 50 / 30 / 20 apply? Proposed: enforce the split only when all three layers are present, otherwise Layer 1 ≥ 50 % and Layer 3 ≤ 20 %.
4. **What counts toward N?** The N = 4 example adds a napkin, so napkins count. Proposed: MAIN, SKU, sides, condiments and napkins count; cutlery doesn't.
5. **Seam offset value.** How many degrees clockwise (viewed from above), and what margin around the logo box for the trademark clear zone?
6. **"40–60 % smaller".** Should a side be 40–60 % *of* the entree's size, or 40–60 % *smaller than* it (that is, 40–60 % of the size vs 60–40 %)? Is it measured by diameter or by area?
7. **Napkin curves** need a curve shape. OK to add `curve_path` to the schema?
8. **ShRED shopper zones.** We need the copy-reserve blocks for Transition, Impulse and Destination, and what "humanity presence" means for the proxy (hands in frame?).
9. **2-person and group scenes.** The rules assume one co-hero pair. See [`../INTAKE_FLOW.md`](../INTAKE_FLOW.md#gaps-to-decide), gap 3.

Pipeline questions (carried over):

10. **Image workflow inputs:** does the workflow accept depth / segmentation / region masks, or only a reference image plus prompt?
11. **Label semantics:** role labels (`SKU`, `MAIN`) in `labeled.png` and content labels in the manifest (recommended)?
12. **Where it lives:** a standalone `tablescape/` package in this repo, with `wpp-scene-composer` as an optional debug viewer (recommended)?

Camera dropdowns:

13. **Dropdowns vs composition rules.** The rules say ~30° and f/4–f/5.6. The dropdowns now offer 10° and 25° angles and f/1.4–f/2.8 apertures. OK to treat the rules' values as the **defaults** rather than fixed requirements? The focus wording in each fragment covers the "Coca in focus" rule.
14. **Ultra-wide aperture:** is f/8 right? And should the ultra-wide be offered only for outdoor and on-the-go scenes, or for all scenes?
15. **Lighting dropdown:** lighting (natural window light, golden hour, overcast, warm evening interior…) is the next big prompt lever and isn't covered yet. Same structure as the camera dropdowns, with a default tied to occasion and scene.
