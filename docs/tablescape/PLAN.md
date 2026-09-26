# Tablescape Composer — Plan

Turn the Cultural Prompt Agent's scene guidance (table type, entree, number of accompaniments, SKU, camera angle and lens) into a **labeled 3D proxy tablescape** that is well composed every time. When a layout signature has been solved before, reuse the approved template.

Reference proxies we're aiming for: [`reference/`](./reference)

| | |
|---|---|
| ![](reference/example-1.webp) | ![](reference/example-2.webp) |
| ![](reference/example-3.webp) | ![](reference/example-4.webp) |

---

## 0. Guiding principle

**The LLM decides *what* is on the table. Deterministic code decides *where* it goes.**

The Prompt Agent outputs a semantic `SceneSpec` (roles, counts, vessel types, camera intent). A rule-based layout solver turns that into geometry. The same input always gives the same layout, the rules can be audited and tested, and templates work because layouts are plain data.

```
Prompt Agent ──► SceneSpec (JSON) ──► Template lookup ──hit──► Layout
                                          │ miss/near-miss        │
                                          ▼                       ▼
                                   Layout Solver ─────────► Validators ──► Renderer ──► labeled proxy PNG
                                   (rules + scoring)                                   + depth / ID masks
                                                                                       + layout manifest
                                          ▲                                            │
                                          └──── feasibility feedback to agent ◄────────┘
```

---

## 1. Define the contract first (`SceneSpec`)

The agent's output format is still WIP, so the **schema is the first deliverable**. It lets the agent and composer tracks move in parallel, and the composer can be built against hand-written fixtures.

```jsonc
{
  "specVersion": "0.1",
  "market": "MX",
  "arrangementStyle": "individual-plated",   // individual-plated | family-style | banchan-grid | street-food
  "table":  { "shape": "rect", "surface": "wood", "size": "2-top" },
  "sku":    { "id": "coke-classic-8oz-glass", "package": "contour-glass-bottle", "vessel": null },
  "entree": { "name": "tacos al pastor", "vessel": "plate", "sizeClass": "L" },
  "accompaniments": [
    { "role": "sauce",  "vessel": "small-bowl", "sizeClass": "S" },
    { "role": "side",   "vessel": "bowl",       "sizeClass": "M" }
  ],
  "props":  [ { "role": "napkin" } ],          // optional, low priority
  "camera": { "preset": "three-quarter-45", "focalLengthMm": 50, "aspect": "16:9" }
}
```

Tasks:
- JSON Schema (or Zod/Pydantic) plus ~20 fixture specs that cover the markets and edge cases.
- A **closed vocabulary** for `vessel`, `package`, `role`, `camera.preset` and `arrangementStyle`. The agent maps free text such as "molcajete of salsa" onto `vessel: small-bowl, role: sauce` and keeps the free text for the image prompt.
- Stable **role labels** (`SKU`, `MAIN`, `SIDE_1`, `SAUCE_1`, `PROP_1`). The labels in the proxy render, the ID mask and the final prompt manifest must be the same strings, so regional prompts map 1:1.

## 2. Real-scale proxy asset registry

Every proxy gets real-world dimensions (in meters) and a **bottom-center pivot**, so objects sit on the tabletop without guessing heights.

```js
registry['contour-glass-bottle-8oz'] = {
  category: 'sku', footprint: { type: 'circle', r: 0.031 }, height: 0.195,
  build: () => latheFromProfile(CONTOUR_8OZ_PROFILE),   // silhouette matters: see example 1
  labelAnchor: [0, 0.6],                                // relative height for the label pin
  frontFacing: true                                     // yaw toward camera
}
registry['plate-dinner'] = { category: 'vessel', footprint: { type: 'circle', r: 0.135 }, height: 0.025, ... }
```

- SKU proxies by package: contour glass bottle (8 / 12 oz), can (12 oz, sleek), PET (500 ml), glass with ice. Build them with `LatheGeometry` from real profiles, and swap in GLBs later.
- Vessels: dinner plate, side plate, bowl, small sauce bowl, board, basket, tray.
- Tables: rect / round / square with real sizes (2-top ≈ 0.75 × 0.75 m, 4-top ≈ 1.2 × 0.8 m, etc.) and surface materials.
- Optional "contents" proxies (sphere/cone for food mass, as in example 3) so a heaped entree gets its real silhouette height.

## 3. Camera model (replace fixed presets)

Each preset is **photographic parameters** (elevation, azimuth, focal length, aspect), not an absolute position. The camera distance is solved to fit the content.

| preset | elevation | azimuth | default lens |
|---|---|---|---|
| `eye-level` | 5–10° | 0° | 85 mm |
| `three-quarter-45` | 30–45° | ±25° | 50 mm |
| `high-angle` | 60° | 0–20° | 35 mm |
| `overhead` | 90° | 0° | 35 mm |

- `fov = 2·atan(24 / (2·focal))` (full-frame vertical), with aspect taken from the spec.
- **Auto-fit:** after layout, compute the screen-space bounding box of the "must-see" set (SKU + MAIN + accompaniments). Move the camera along its view ray, and adjust the target, until that box fills the frame to the target coverage within safe margins.
- The renderer's aspect must come from the spec. Today the aspect dropdown in the WIP tool doesn't drive the renderer.

## 4. Layout solver (the core)

Work in **camera-relative table coordinates**: `x` = screen left↔right and `z` = depth away from the camera, both on the tabletop plane. The same rules then apply at any azimuth, and the result is rotated into world space at the end.

### 4a. Slots (candidate generation)
Each arrangement style defines a **slot map** on the tabletop in normalized coordinates (0–1 across the visible table area):

- **Hero slot:** MAIN, front-center or on the lower-left third.
- **SKU slots:** beside and slightly behind MAIN on the opposite third (right-third default, as in examples 1–3), never in front of MAIN.
- **Accompaniment arc:** a back arc and flanks behind and around MAIN, filled in a ranked order.
- **Prop slots:** foreground corners and edges (napkin, cutlery), partly croppable.

Family-style and banchan-grid use different slot maps (central shared dish, grid of small vessels). These are also where market and cultural rules plug in.

### 4b. Hard constraints (reject the candidate)
- No footprint overlap (min gap ≈ 1.5 cm). Everything stays on the table with an edge margin.
- **SKU fully visible:** ≤ 5 % occluded, never cropped, logo side yawed toward the camera.
- MAIN ≤ 15 % occluded and never cropped.
- The object count matches the spec exactly.

### 4c. Soft constraints (scored in screen space)
Project each object's bounding box through the actual camera to 2D, then score:

| term | intent |
|---|---|
| `skuProminence` | SKU height ≈ 35–55 % of frame height (brand rule) |
| `heroArea` | MAIN is the largest 2D area |
| `thirds` | SKU and MAIN centroids near rule-of-thirds lines or intersections |
| `balance` | visual-weight centroid near frame center, not all mass on one side |
| `depthOrder` | tall objects behind short ones relative to the camera |
| `breathingRoom` | even negative space, no tangents (object edges kissing each other or the frame edge) |
| `occlusionSoft` | penalty for accompaniments overlapping each other > 20 % |
| `tableEdge` | table front edge visible or cropped consistently per preset (examples 1–2 show it) |

`score = Σ wᵢ·termᵢ`, with weights in a versioned `rules.json` so art direction can tune it without code changes.

### 4d. Search
1. Place MAIN at the hero slot. Enumerate SKU slots × accompaniment slot permutations (small: usually < 500 combinations).
2. Reject on hard constraints, then score.
3. Refine the top-k with a small **seeded** jitter pass (position ± 3 cm, yaw) and keep improvements.
4. Auto-fit the camera, then re-score, since framing changes screen-space terms.
5. If nothing passes, return an **infeasible** result with a relaxation suggestion (for example "max 3 accompaniments at close-up on a 2-top") to feed back to the agent.

## 5. Templates ("revert to a known layout")

A **signature** is a canonical key over everything that changes composition:

```
rect-2top | three-quarter-45 | 16:9 | sku:bottle | main:plate | acc:1(bowl) | props:0 | individual-plated
```

A template stores the solved layout in **normalized slot coordinates plus camera params**, not raw meters, so it survives small size changes (a plate swapped for a slightly larger plate).

Lookup flow:
1. **Exact hit:** load the template, instantiate it with the current proxies, and **run the validators anyway**. If it passes, done. If it fails (for example the entree grew from plate to board), fall through.
2. **Near hit** (same everything except, say, one extra accompaniment): use the template as the solver's **seed** and only place the delta.
3. **Miss:** solve from scratch.
4. **Promotion:** a human approves a solved layout in the composer UI, and it becomes the template for that signature (versioned, with an approver and date). Store templates as JSON in the repo so changes are reviewable.

Seed the library first with the known common layouts (1 SKU + 1 entree + 0–2 accompaniments × 3 camera presets × 2 aspects ≈ 18 templates). Most production runs should hit them.

## 6. Rendering and outputs

Pull scene construction **out of React** into a pure module that runs both in the browser (composer UI) and headless (Playwright + Chromium, or `node` + headless GL) for batch jobs.

Per composition:
1. **Labeled proxy render** (PNG). Labels are drawn as a **2D overlay** from projected anchor points, not as in-scene meshes, so they stay crisp, never get occluded, and are styled consistently (examples 1–3).
2. **Clean proxy render** (no labels), for image-to-image / structure guidance.
3. **Depth map** and **ID / segmentation mask** (flat color per role label). These are what the node-based image workflow can use for depth/segmentation control and regional prompting per role.
4. **Layout manifest** (JSON): signature, template id or solver seed, camera params, and per-object `{label, role, world transform, 2D bbox, mask color}`. The Prompt Agent's manifest references these labels.

## 7. Integration with the Cultural Prompt Agent

- Add a `tablescape` stage after the agent produces its scene guidance: `SceneSpec → layout → outputs` attached to the prompt manifest.
- **Pre-gen validator:** layout feasibility (from 4d). If infeasible, the agent revises its counts or camera before generation.
- **Knowledge base hooks:** cultural modules can set `arrangementStyle` and slot preferences (for example family-style center dish, banchan grid, street-food handheld with the SKU in hand-zone).
- **Post-gen validator:** compare the generated image's detected SKU bbox against the manifest's SKU bbox (IoU threshold) to catch drift from the composed layout.

## 8. What to reuse from `wpp-scene-composer`

| Keep | Change |
|---|---|
| three.js scene setup: lighting, shadows, ground (`Canvas3D.jsx`) | Move scene building out of the React `useEffect` into a pure `scene-core` module |
| Object registry idea + category taxonomy (`objectGeometries.js`, `CategoryPicker.jsx`) | Scales aren't real-world (plate is 0.8 m across on a 2 m table), and pivots are centered, which is why there's the hard-coded `spawnHeight 0.85`. Switch to meters and bottom pivots |
| Object model `{id, type, category, label, position, rotation, scale}` (`App.jsx`) | Add `role` and `slot`, and make `label` the canonical role label |
| Camera presets concept + tweened transitions (`CameraPresets.jsx`) | Presets become elevation / azimuth / lens with auto-fit, not fixed positions targeting `[0, 0.5, 0]` |
| Aspect-ratio selector, `preserveDrawingBuffer` for export | Aspect must drive the renderer, and LOAD / SAVE / EXPORT are still stubs |
| Manual gizmo editing | Becomes the **review/tweak step** before template promotion |

The composer UI stays useful: it loads a generated layout, lets an art director nudge it, and saves the result as a template.

## 9. Proposed module layout

```
tablescape/
  schema/        SceneSpec + Layout + Template JSON schemas, fixtures
  registry/      real-scale proxies (lathe profiles, vessels, tables)
  camera/        preset → camera params, auto-fit
  solver/        slot maps, constraints, scoring, search (pure, no three.js renderer)
  templates/     signature(), lookup(), *.json approved templates
  render/        scene-core (three.js), label overlay, depth / ID passes, headless runner
  cli/           `tablescape compose spec.json --out ./out`
```

The solver only needs geometry math (projection and bboxes), so it can be unit-tested without WebGL.

## 10. Phased roadmap

| Phase | Deliverable | Done when |
|---|---|---|
| **0: Contract** | `SceneSpec` schema, vocabularies, 20 fixtures; real-scale registry incl. contour bottle | Agent team and composer team both code against it |
| **1: Render from JSON** | `scene-core` extracted; headless CLI renders a hand-written layout → labeled PNG + clean PNG + manifest | Example 2 reproduced from JSON alone |
| **2: Templates v1** | Signature + lookup; hand-author ~18 known layouts in the composer UI (LOAD/SAVE implemented) | 1 SKU + 1 entree + ≤2 accompaniments render consistently with no solver |
| **3: Solver v1** | Slots + hard constraints + scoring + camera auto-fit for `individual-plated` | All fixtures produce a valid layout or a clear infeasible result; deterministic per seed |
| **4: Pipeline hookup** | Depth / ID masks; agent integration; feasibility feedback; post-gen SKU IoU check | End-to-end: agent output → proxy → final image |
| **5: Scale-out** | More arrangement styles (family, banchan, street); template promotion workflow; weight tuning | Template hit rate tracked; AD sign-off rate ≥ target |

## 11. Testing and quality

- **Golden tests:** fixture spec → layout JSON snapshot (deterministic seed) → rendered PNG diff in CI.
- **Rule tests:** unit tests per constraint (SKU occlusion, overlap, cropping).
- **Metrics per run:** score breakdown saved in the manifest, so "why does this look off" can be debugged.
- **Human rubric:** AD reviews a sample weekly, and approved results get promoted to templates.

## 12. Open questions for the team

1. **SKU side:** always right-third, or mirror per market (for example RTL markets) or per campaign?
2. **Image workflow inputs:** does the node-based workflow accept depth / segmentation / region masks, or only an image plus prompt? This decides how much of section 6 matters.
3. **Label semantics:** should labels in the render be role labels (`SKU`, `MAIN`) or content labels (`Coke 8oz`, `tacos al pastor`)? Recommendation: role in the render, with content in the manifest.
4. **Table in frame:** must the table edge always be visible (examples 1–2), or can close-ups fill the frame with the surface?
5. **SKU prominence range** and whether it varies by camera preset: this is the most brand-sensitive weight.
6. **Where it lives:** a new `tablescape/` package here, shared by the WIP composer, or inside `wpp-scene-composer`? Recommendation: pure package here, with the composer as its UI.
