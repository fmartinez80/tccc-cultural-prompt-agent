# Tablescape Intake: Rebuild Specification

This document describes everything built so far for the Coca-Cola cultural tablescape tool, in enough detail to rebuild it from scratch in another environment. It covers the product, the data, every rule and threshold, the layout algorithm, the proxy image, the language-model steps and their exact instructions, the image prompts, and what the image tests taught us.

The reference implementation is in GitHub: `fmartinez80/tccc-cultural-prompt-agent`, branch `claude/upbeat-curie-2k9ion` (TypeScript: Node + Express server, React wizard, three.js renderer). The knowledge base is on branch `claude/quirky-mayer-m01mg7` of the same repository, in `knowledge-base/`. Where this document and the code disagree, the code is the tie-breaker; where the code and the knowledge base disagree, see §12.

Appendix A holds the rules files verbatim, Appendix B the team's composition rules, and Appendix C the blueprint JSON schema.

---

## 0. How to use this document

Build in this order. Each phase has acceptance checks in §16.

1. Data: the knowledge-base loader (§3), the registry of real sizes (§6) and the rules files (Appendix A).
2. Intake: the step-by-step decision flow and the scene spec it produces (§4, §5).
3. Layout solver: placement, camera fit, rule checks, scoring, up to 3 options (§7, §8).
4. Proxy renderer: the labeled 3D proxy image (§9).
5. Language-model steps: decision cards, story, validation (§10). If no language model is available, a person fills these in by hand from the knowledge base, which is how every image test so far was run.
6. Prompt assembly: the composition prompt and the product swap prompt (§11).
7. Operator workflow for image generation (§13).

---

## 1. What the tool does

An operator (who is also the art director) enters a short brief: country, product, hero dish, occasion. The tool walks them through a guided sequence of decisions and produces:

1. **A labeled proxy template**: a 16:9 PNG of simple, real-scale 3D shapes in perspective, showing where every object goes, each with a role label (`MAIN`, `SKU`, `GLASS`, `SIDE_1`, …).
2. **A scene story**: a scene summary, cultural do's and don'ts, and prompt segments, including one text segment per label in the proxy.
3. **Two image prompts**:
   - a **composition prompt** for Nano Banana 2 (input image 1 = the proxy);
   - a **product swap prompt** for Seedream (image 1 = the composed photo, image 2 = the product reference photo).

The tool stops there. Image generation happens outside it (§13).

Key principles, decided with the team:

- **The operator never designs a layout.** The tool generates up to 3 rule-compliant layout options from the same elements; the operator picks one. A picked layout can be saved and reused as a template.
- **A template is the layout only.** Lighting is not part of a template; it is chosen separately.
- **The proxy keeps its labels when sent to the image model.** The image model needs the labels to match each shape to its prompt segment.
- **The product is always on the diner's right**, to avoid cultural issues where the left hand is discouraged at the table.
- **Every scene is composed at 16:9.** Other ratios (1:1, 4:5, 2:3, 3:2, 5:4, 9:16) are cropped in post. The hero meal and the product stay in the vertical center third so every crop keeps at least one fully branded element.
- **The Coca-Cola product is the only drink** in the scene. No water, wine, beer or other beverages.
- **Food is never held in a hand.** On the go, it sits on a surface (picnic table, bench, counter, ledge).

Scope today: one place setting (one diner), including family-style meals with a shared centerpiece. Two-person and group layouts are designed (§15) but not built.

---

## 2. Pipeline

```
Brief (OU, country, region, SKU, hero dish, side request, occasion)
  → 1 Preparation      decision card (agent: A suggested / B / C, or resolved)
  → 2 Plating          decision card
  → 3 Sides            decision card
  → 4 Scene            venue, setting, party, time, surface, glass Y/N (rules gate choices)
  → 5 Camera           look + angle dropdowns (defaults: close-hero, diner's eye)
  → 6 Accent           only if the table item count is even (agent picks a local accent)
  → 7 Layout           solver returns up to 3 options, rendered as labeled proxies; operator picks
  → 8 Story            agent writes the story; validation pass; prompts assembled
  → Downloads          proxy PNG, blueprint JSON, story JSON, composition prompt, swap prompt
```

---

## 3. Knowledge base

A set of Markdown files. The agent (language model) reads them; the layout code does not (see §12).

```
knowledge-base/
  00-methods/   country-file-schema.md, image-generation-pipeline.md, market-roadmap.md,
                readiness-checklist.md, tableware-composition-reference.md
  01-brand/     coca-cola-guidelines.md
  02-culture/regions/<area>/<country>.md   (e.g. europe/spain.md, usa/us-texas.md)
```

- **Country files** have YAML front matter with `country:` (id, e.g. `spain`, `united_states`) and `ou:` (operating unit; may read "NOT CONFIRMED").
- **Regional files** have `region:` (e.g. `us-texas`) and `parent_file:` (the country file's name).
- **Always loaded as references:** `coca-cola-guidelines.md` and `tableware-composition-reference.md`.
- **Per intake, the agent receives:** the two references + the country file + the regional file (if a region was picked).
- The country list and region list in the brief come from this front matter. Display labels: `united_states` → "United States", `uk`/`united_kingdom` → "United Kingdom", `south_africa` → "South Africa", otherwise title case.
- In the reference build, the knowledge base is downloaded from GitHub at build time.

---

## 4. Intake flow

### 4.1 The decision card pattern

Every agent step returns the same shape. If the dish is served essentially one way in that country, the step is **resolved** (one option, shown and auto-accepted). Otherwise it is **choose** with 2–3 genuinely different options, the most common first, shown as **A (suggested)**, B, C. Each option keeps its rationale and knowledge-base sources.

```jsonc
{
  "step": "plating",            // prep | plating | sides | surface | accent
  "status": "choose",           // resolved | choose
  "options": [
    { "id": "A", "suggested": true,  "rationale": "… (Sources: spain.md › DISH CATALOG › Paella)", "value": { … } },
    { "id": "B", "suggested": false, "rationale": "…", "value": { … } }
  ]
}
```

### 4.2 Brief fields

| Field | Values | Notes |
|---|---|---|
| Operating unit | text | Owns the brand and legal rules and the SKU catalog |
| Country | from KB front matter | Cultural knowledge is per country |
| Region | from KB regional files, optional | e.g. us-texas |
| Product SKU | catalog (§6.2) | |
| Hero dish | text | |
| Side dish request | text, optional | Agent puts it in option A if culturally plausible; otherwise still offers it and says why it's unusual |
| Occasion | breakfast, brunch, weekday-lunch, weekend-lunch, afternoon-snack, dinner, late-night, celebration, game-night | Sets time of day when unambiguous (see lighting file) |

### 4.3 Steps and what they write

| Step | Card value fields | Writes |
|---|---|---|
| 1 Preparation | label, detail, promptText, massClass (flat, heaped, stacked, wrapped) | entree.prep. massClass sets the food height on the proxy |
| 2 Plating | label, detail, vessel (closed vocabulary §6.1), service (individual or shared), promptText | entree.plating. **shared** = family-style: one large vessel on the table plus one plated portion |
| 3 Sides | label, detail, accompaniments[] of {name, role, vessel, service, pairsWith, promptText} | accompaniments. roles: side, starch, salad, bread, condiment, sauce, garnish |
| 4 Scene | setting (indoor/outdoor), venue (home/restaurant/on-the-go), party (1/2/group/family), time (morning/midday/golden-hour/evening), surface | scene. On the go, the surface is a decision card (agent step "surface") |
| 4b Glass | Y/N | sku.glass (rules §5.2) |
| 5 Camera | look, angle | camera (dropdowns, not cards) |
| 6 Accent | label, detail, name, vessel, promptText | accent (only when count is even) |

Rules applied during the intake:

- **Sides:** at most two side dishes, at most two or three condiments, bread only if customary. For a family-style meal, side dishes become shared (in serving bowls); condiments stay individual. A condiment pairs with MAIN unless it belongs to a specific side.
- **Surface default:** on the go → picnic table (agent suggests; §6.4); shared meal, group or family → long table; otherwise 4-top table.
- **Napkin set:** added automatically (folded rectangular napkin with fork and knife on top) except on the go.
- **Time of day:** from the occasion when it maps (breakfast/brunch → morning, weekday-lunch/weekend-lunch → midday, afternoon-snack → golden-hour, dinner/late-night → evening); otherwise asked, default midday.
- **Odd/even rule:** count the table items (MAIN, the shared vessel if any, SKU, GLASS if any, each side, bread, condiment, the napkin set counts once). If even, the agent picks one small accent that genuinely belongs with the meal locally (lime dish, pickled onions, chutney ramekin…), never a drink, never something the KB says to avoid. It is shown as "added for composition" and the operator can swap it.

### 4.4 Scene spec (output of the intake)

```ts
SceneSpec {
  specVersion: "0.2"
  operatingUnit, country, countryLabel, region, occasion, heroDish
  scene: { setting, venue, party, time, surface, surfaceText? }
  camera: { look, angle }                     // preset ids
  sku: { id, displayName, package, volumeMl, glass: boolean }
  entree: { name, prep: PrepChoice, plating: PlatingChoice }
  accompaniments: Accompaniment[]            // shared service forced for non-condiments when plating is shared
  napkinSet: { napkinShape: "rect", cutlery: ["fork","knife"], targets: "MAIN" } | null
  accent: AccentChoice | null
}
```

---

## 5. Rules (brand, product, glass, lighting, camera)

All of these are data files (Appendix A), so the team can change them without code.

### 5.1 Product rules

- Large SKUs (≥ 1000 mL) are **shared**: one bottle for the table. They appear **only at home** (never at a restaurant or on the go). The intake disables those venues for a large SKU.
- Product sizes (§6.2) follow `coca-cola-guidelines.md` §4.3 (provisional there).

### 5.2 Glass rules

| | SKU under 1 L | SKU 1 L and up |
|---|---|---|
| Home | glass optional (Y/N, default N) | shared bottle, glass **required** (Y, locked) |
| Restaurant | glass optional | not allowed |
| On the go | **no glass** (question hidden) | not allowed |

The glass is the branded bell-shaped Coca-Cola glass (640 mL, 17.2 cm tall, 9.5 cm across the top), filled with Coca-Cola and ice. Whenever glasses are in the scene, every place setting gets one.

### 5.3 Lighting

- **Current default for every scene:** one preset, `commercial-balanced` (`default_preset` in the lighting file). Image tests showed the scene-based window presets read too moody.
- The scene-based presets (setting + venue + time → preset) stay in the file; set `default_preset.preset` to null to use them again.
- The key light is always **behind and to the left** of the table: it passes through the bottle toward the camera so the cola glows, and shadows fall forward-right, away from the entree.
- A second sentence is added depending on the package: see-through packages (glass bottle, PET, glass) get a glow sentence with label protection and a faint caramel tint in the drink's shadow; cans get a rim-highlight sentence.

The exact lighting sentence used now:

> Even, well-balanced commercial food photography lighting: a large soft key light from behind and to the left of the table with generous fill from the front, so every item on the table is bright, clearly lit and true to color. Soft, subtle shadows fall forward and to the right, away from the plate. Clean neutral white balance, bright and airy, with no dark vignette, no dark corners and no blown highlights; the background is bright and softly out of focus.

The exact product-light sentence (see-through packages, neutral warmth; `{drinks}` = "the Coca-Cola bottle", or "the Coca-Cola bottle and the bell-shaped Coca-Cola glass"):

> Light passes through {drinks} from behind, giving the cola a clear red-amber glow with clean highlights along the glass. The label itself is never washed out or darkened: it is evenly lit from the front, opaque, clean and a solid, saturated Coca-Cola red, with the white script crisp and fully legible; the glow shows only in the cola above and below the label. A faint caramel-amber tint shows inside the drink's soft shadow on the table.

### 5.4 Camera

Two dropdowns; operators never pick an f-stop.

- **Look** (bundles lens, aperture, focus): Close-up hero (default, **final**: 50 mm, f/2.0), Table in context (35 mm, placeholder), Wide scene (15 mm, placeholder).
- **Angle** (camera pitch): Low near eye level (15°, placeholder), Diner's eye (30°, default), Looking down (45°, placeholder).

The close-up hero look sentence (the team's wording, revised to avoid a plastic look):

> Commercial food photography, shot on a 50mm f/2.0 lens, sharp focus on the foreground elements on the table, with crisp edge detail on the beverage bottle and plated food. Smooth, rapid focus fall-off softly blurring the background immediately past the table edge. Authentic real-world film grain with fine-grain texture across the midtones, clean natural contrast with open shadows, and rich but true-to-life color, with the Coca-Cola red standing out. Food looks real and freshly made: natural textures, visible char, crumbs, moisture and small imperfections, with soft natural highlights, never glossy, waxy or plastic-looking. Lively editorial food styling.

Placeholder prompt text (e.g. `[TABLE_CONTEXT_PROMPT]`) is replaced by a generated sentence: "Shot with a {focal}mm lens[ at {aperture}], with the main dish and {drinks} in sharp focus." Angle placeholders become "Camera angled about {pitch} degrees down toward the table, from the diner's side."

### 5.5 Plate spec for photography

| Plate | Size used | Range | When |
|---|---|---|---|
| Entree / main | 28 cm | 27–29 cm | default |
| Salad / lunch plate | 23 cm | 22–24 cm | a small, delicate protein or a compact stack, so the food fills the plate |
| Appetizer / side | 19 cm | 18–20 cm | side portions, single desserts, bread |

Attributes: rim 1.5–2.5 cm (or rimless coupe); lip height 1.5–2 cm, flat profile; matte or satin glaze, never high-gloss. Never an oversized charger (32+ cm) unless the shot is an intentional wide table scene. Every plate line in the prompt adds: "with a narrow rim (or rimless coupe), a low, flat profile and a matte or satin glaze, never glossy".

---

## 6. Registry: real sizes

All sizes in meters. Every shape sits on the tabletop (bottom-center pivot).

### 6.1 Vessels (closed vocabulary)

| Vessel | Shape | Size | Prompt noun |
|---|---|---|---|
| plate | cylinder | r 0.14 (28 cm), h 0.02 | a round entree plate |
| lunch-plate | cylinder | r 0.115 (23 cm), h 0.02 | a round lunch plate |
| side-plate | cylinder | r 0.095 (19 cm), h 0.02 | a round side plate |
| bowl | cylinder | r 0.08, h 0.06 | a round side bowl |
| small-bowl | cylinder | r 0.0675, h 0.05 | a small round bowl |
| large-bowl | cylinder | r 0.16, h 0.09 | a large communal serving bowl |
| ramekin | cylinder | r 0.035, h 0.035 | a small ramekin |
| board | box | w 0.20 × d 0.32 × h 0.02 | a wooden serving board |
| basket | cylinder | r 0.118, h 0.07 | a small bread basket |
| foil-wrap | box | 0.20 × 0.12 × 0.05 | a foil wrap |
| tray | box | 0.34 × 0.24 × 0.02 | a serving tray |
| leaf | box | 0.30 × 0.20 × 0.005 | a banana leaf |
| casserole | box | 0.27 × 0.37 × 0.07 | a rectangular casserole dish |
| platter | box | 0.26 × 0.37 × 0.03 | an oval serving platter |
| sauce-boat | box | 0.15 × 0.07 × 0.06 | a sauce boat |
| paellera | cylinder | r 0.19 (38 cm), h 0.05 | a shallow carbon-steel paella pan with two looped handles |

In the prompt, a vessel is written as "{noun} about {diameter} cm across" (round) or "about {long} by {short} cm" (box), to the nearest half centimeter, plus the plate attributes for plates. Short names for running text: plate, side plate, bowl, serving bowl, ramekin, board, basket, foil wrap, tray, leaf, casserole dish, platter, sauce boat, paella pan.

Food height added on top of the vessel (massClass): flat 0.02, heaped 0.06, stacked 0.10, wrapped 0.05. Shared-hero plated portion uses at most 0.04. Sides add 0.03, bread 0.04, condiments 0.005, accent 0.005, napkin 0.006.

### 6.2 Product catalog and proxy sizes

| id | Display name | Package | mL |
|---|---|---|---|
| coke-original-330ml-glass | Coca-Cola Original Taste 330 mL contour glass bottle | contour-glass-bottle | 330 |
| coke-original-237ml-glass | Coca-Cola Original Taste 237 mL contour glass bottle | contour-glass-bottle | 237 |
| coke-original-350ml-glass-es | Coca-Cola Original Taste 350 mL returnable glass bottle (Spain on-premise) | contour-glass-bottle | 350 |
| coke-original-355ml-can | Coca-Cola Original Taste 355 mL can (US) | can | 355 |
| coke-original-330ml-can | Coca-Cola Original Taste 330 mL can | can | 330 |
| coke-original-500ml-pet | Coca-Cola Original Taste 500 mL PET bottle | pet-bottle | 500 |
| coke-original-1500ml-pet | Coca-Cola Original Taste 1.5 L PET bottle | pet-bottle | 1500 |
| coke-original-2l-pet | Coca-Cola Original Taste 2 L PET bottle | pet-bottle | 2000 |

Proxy sizes (radius, height):
- Can: ≥ 355 mL r 0.033 h 0.123; else r 0.033 h 0.115.
- Contour glass: 350 mL (Spain) r 0.038 h 0.147; ≤ 250 mL r 0.028 h 0.19; otherwise r 0.031 h 0.205.
- PET: ≥ 3 L r 0.059 h 0.365; ≥ 2.5 L r 0.056 h 0.345; ≥ 2 L r 0.054 h 0.33; ≥ 1.5 L r 0.049 h 0.315; ≥ 1 L r 0.042 h 0.28; ≥ 500 mL r 0.0325 h 0.203; else r 0.03 h 0.21.
- All products and the glass are "tall" (they may rise into the upper half of the frame).

Clearance radius around a shared (multi-serve) bottle, from its center: ≥ 3 L 0.15; ≥ 2.5 L 0.135; ≥ 2 L 0.11; ≥ 1 L 0.10.

Bell glass: r 0.0475, h 0.172. Napkin (folded rectangle, utensils on top): 0.10 wide × 0.20 deep × 0.012.

### 6.3 Surfaces

| Surface | Width × depth (m) | Prompt text |
|---|---|---|
| table-2top | 1.4 × 0.75 | a small dining table |
| table-4top | 1.8 × 0.85 | a dining table |
| long-table | 2.4 × 0.95 | a long family dining table |
| picnic-table | 2.0 × 0.75 | a wooden park picnic table |
| bench | 1.6 × 0.42 (narrow) | a park bench |
| food-truck-counter | 1.8 × 0.40 (narrow) | a food-truck counter |
| street-ledge | 1.6 × 0.34 (narrow) | a street-side ledge |

Widths are generous so the table fills a 16:9 frame; depth drives the horizon rule.

---

## 7. Scene items and labels

The spec becomes a list of labeled items. Labels are the keys that tie the proxy shapes to the prompt segments.

| Label | Kind | Layer | Source |
|---|---|---|---|
| SHARED_HERO | shared-hero | L2 | the family-style vessel (only when plating is shared) |
| MAIN | main | L1 | the entree (or, when shared, "a plated portion of …" on a plate) |
| SKU | sku | L1 | the product |
| GLASS | glass | L1 | bell glass (when sku.glass) |
| SIDE_n | side | L2 | individual sides |
| SHARED_n | shared-side | L2 | shared sides |
| BREAD_n | bread | L2 | bread |
| SAUCE_n | condiment | L3 | condiments, sauces, garnishes (pairsWith MAIN unless stated) |
| NAPKIN_SET_1 | napkin-set | L3 | napkin + cutlery (not on the go) |
| ACCENT_1 | accent | L3 | injected accent (odd/even), pairsWith MAIN |

Layers: L1 = Primary co-hero, L2 = Secondary side, L3 = Tertiary accent. Target visual mass 50 / 30 / 20 %.

---

## 8. Layout solver

### 8.1 Coordinates

- World: x = lateral (+x = screen right = diner's right), y = up (tabletop y = 0), d = depth from the table's front edge (the camera is in front of the table looking back; in 3D, z = −d).
- Screen: x 0 (left) → 1 (right), y 0 (bottom) → 1 (top).
- Camera: perspective, vertical FOV from a full-frame 24 mm sensor height: fov = 2·atan(24 / (2·focal)). Aspect 16:9. Position = target + distance·(0, sin(pitch), cos(pitch)) in (x, y, z); it looks at the target on the tabletop.

### 8.2 Archetypes

| Archetype | Idea | Used when |
|---|---|---|
| Triangle Loop | depth triangle: entree, drink back-right, side back-left, condiment front-left (the team's reference layout) | no shared vessel |
| Crescent Arc | supporting dishes wrap in an arc behind the entree | always |
| Diagonal Stagger | supporting dishes step back on a diagonal leading to the drink | no shared vessel |
| Counterweight | supporting dishes grouped on the left, balancing the drink on the right | always |
| Feast Spread | shared centerpiece back-left, shared sides around it, one plated setting in front | shared vessel only |

With a shared vessel, the archetypes tried are Feast Spread, Crescent Arc, Counterweight. Without, Triangle Loop, Crescent Arc, Diagonal Stagger, Counterweight.

Each archetype has 3 variants (angles in degrees, measured around the plate center from the +x axis, counterclockwise; 90 = straight behind the plate):

| Archetype | condAngle / accentAngle / sideAngle |
|---|---|
| triangle-loop | 208/172/142 · 200/165/150 · 218/178/135 |
| crescent-arc | 92/150 · 120/165 · 140/175 |
| diagonal-stagger | 125/160 · 145/175 · 100/150 |
| counterweight | 135/170 · 155/180 · 115/160 |
| feast-spread | 100/175 · 130/185 · 85/165 |

### 8.3 Preferred positions

Let R = MAIN footprint radius, P = MAIN center = (0, R + 0.05). polar(P, angle, dist) = P + dist·(cos, sin).

- **Product and glass (house rule, `drink_order: bottle-then-glass`)**: bottle at polar(P, 32°, R + 0.03 + c), where c = max(clearance, rs + 0.02) for a shared bottle, else rs (rs = bottle radius). Glass to the bottle's right and slightly forward: (bottle.x + rs + 0.025 + rg, bottle.d − 0.03).
  - The older order (`glass-then-bottle`, the knowledge base's version): glass at polar(P, 52°, R + 0.03 + rg); bottle right of it, set back 0.035 (0.07 for a shared bottle, outside its clearance).
- **Single-serve drink without a glass**: midway between the plate's right edge and the napkin, set back: x = (P.x + R + (napkin.x − napkinHalfWidth)) / 2 + 0.01, d = P.d + max(0.1, rs + 0.07). (This matches the team's reference taco photo: the can evenly spaced between the dish and the napkin.)
- **Napkin set**: to the right of the plate, 3–5 cm from it: x = P.x + R + 0.04 + halfWidth, d = max(0.12, P.d − 0.02).
- **Bread**: right third, beyond the rightmost drink: x = drinkRight + 0.07 + r + k·0.05, d = bottle.d + 0.10 + k·0.08.
- **Condiments**: tight cluster at condAngle, distance R + 0.04 + r; each next one shifts left by (2r + 0.015) and alternates 0.01 in depth.
- **Accent**: polar(P, accentAngle, R + 0.045 + r) (always within 1–3 in of the plate).
- **Sides per archetype**:
  - Triangle Loop: angles [sideAngle, 115, 165, 100] (repeating), distance R + 0.035 + r (+0.12 per extra ring of 4).
  - Crescent Arc: one side at 108°; n sides spread from 165° down to 95° (165 − k·70/(n−1)), distance R + 0.07 + r.
  - Diagonal Stagger: start at (P.x − 0.4R, P.d + R + 0.06); each side at (cur.x − r − 0.03, cur.d + r + 0.02); next cur = (p.x + r + 0.06, p.d + r + 0.03).
  - Counterweight: columns of 2 on the left: x = P.x − R − 0.05 − r − col·0.2, d = P.d + 0.03 + row·0.2.
  - Feast Spread: shared vessel at (P.x − 0.12 − 0.4·r, P.d + R + 0.06 + halfDepth); sides at angles [165, 140, 60, 25], distance R + 0.2 + r (+0.15 per ring).

### 8.4 Settling (no overlaps)

Place items in layer order (L1, then L2, then L3). For each, try its preferred spot; if it breaks spacing or leaves the table, spiral outward (radius 0.01 → 0.35 m in 0.01 steps, 24 angles per ring) to the nearest valid spot. If none, the option is infeasible ("no room for X").

- On the table: 2 cm margin from every edge.
- Minimum edge-to-edge gaps: side–side 5 cm; bread–anything 5 cm; condiment–condiment or accent–condiment 1 cm; main–napkin 3 cm; anything near a shared bottle: its clearance radius (measured from the bottle's center; at least 1.5 cm); otherwise 1.5 cm.

Then **push the whole setting to the back of the table**, so the rearmost item ends 8 cm from the rear edge (like a photographer would: the empty front of the table drops out of frame, and the table's rear edge, the horizon, sits just behind the rearmost item).

### 8.5 Camera fit

Pitch comes from the angle preset, focal length from the look. Search:
- target depth td from D to D + 0.6 in 0.05 steps; distance from 0.3 to 8 m, ×1.04 each step;
- center the hero group (MAIN + SKU + GLASS) horizontally (two passes);
- reject if: the table's rear edge projects above y = 0.50; MAIN's bottom is below y = 0.02; any low item's top, or any tall item's base, is above y = 0.50; the hero group's top is above 0.97;
- score = −|heroSpan − target| − 0.3·(0.5 − rearY). Target hero span (hero group width as a share of the frame): 0.32 with sides, 0.36 meal-and-drink only (`hero_span_target`).
- Refine: distance ×0.94 to ×1.06 in 0.5 % steps, also requiring the hero group inside the center third (±0.02).

### 8.6 Hard rules (every option must pass all)

| ID | Rule | Check |
|---|---|---|
| H1 | Horizon clamp | table rear edge at y ≤ 0.50 |
| H2 | Table zone | every base, and every low item in full, in the lower half; tall drinks may rise |
| H3 | Depth hierarchy | no side, shared side, bread or shared vessel more than 2 cm in front of the entree |
| H4 | SKU on the diner's right | SKU right of MAIN and its center in the right half |
| H5 | Trademark clear zone | nothing nearer the camera covers more than 2 % of a product's or glass's logo box (the band from 35 % to 75 % of its height) |
| H6 | SKU head-on | product and glass upright, logo to camera (by construction) |
| H7 | No line-of-sight stacking | using projected silhouettes (convex hulls of the vessel and the food mound): a nearer item may hide at most 8 % of a product/glass, 15 % of MAIN, 30 % of anything else |
| H8 | Condiment proximity | condiments and the accent sit 2–8 cm (about 1–3 in) from the dish they pair with |
| H10 | Odd item count | total items odd |
| H11 | Physical spacing | all spacing rules met, everything on the surface |
| H12 | Co-heroes visible | MAIN fully in frame |
| H14 | Hero zone | MAIN's center and every drink's full box inside the vertical center third (x 1/3–2/3) |

(H9 and H13 exist in the team's rules; H13, shadows, is handled by the render and the prompt.)

Use silhouettes, not bounding boxes, for H5/H7: bounding boxes badly overstate occlusion (an early bug had a plate "hiding" the can).

### 8.7 Scoring and choosing options

Score terms (0–1), weighted average:

| Term | Weight | Meaning |
|---|---|---|
| heroSpan | 0.20 | 1 − |span − target| / target |
| phiAnchors | 0.15 | MAIN center near x 0.4 and SKU center near x 0.6 |
| horizonUse | 0.10 | rear edge close to 0.5 |
| balance | 0.15 | area-weighted center of all boxes near 0.5 |
| stagger | 0.15 | share of non-hero items not hidden ≥ 15 % |
| breathingRoom | 0.10 | smallest gap / 5 cm |
| visualMass | 0.15 (0.02 for Feast Spread) | layer areas near 50/30/20 % |

For each archetype, keep its best-scoring variant. Sort by score + archetype bonus (`archetype_bonus`: triangle-loop +0.06, feast-spread +0.06). Take options in order, up to 3, keeping one only if its movable items (everything but MAIN, SKU, GLASS, NAPKIN_SET_1) differ from every kept option by a mean screen displacement ≥ 0.08. **Never pad**: if only one distinct option exists, show one.

### 8.8 Blueprint (output per option)

Follows the team's `CokeMeals3DTablescapeBlueprint` schema (Part A) plus extensions: canvas 16:9, camera spec (pitch, focal, aperture), horizon clamp, visual mass targets, and one primitive per item with id (label), component name, layer, shape type, center coordinates, dimensions, rotation, role, proxy key, pairs_with, world position (x, d, yaw), screen bounding box. Plus table size, the full camera, and layout meta (archetype, one-line rationale, score, score terms, rule results, a signature string for saving templates).

**Template signature** (what makes two layouts "the same template"): look | angle | surface | settings count | SKU id | glass Y/N | main vessel + mass class (+shared) | L2 items (kind:vessel, sorted) | L3 items. Lighting is deliberately not part of it.

---

## 9. Proxy image

A 1920 × 1080 PNG rendered through the exact solver camera.

- **Scene:** mid-gray background (#8a8d91), off-white tabletop (#f4f4f2) of the surface's size, floor 0.75 m below.
- **Shapes (flat role colors):** main #4f9d69, shared-hero #3f7fbf, sku #d7263d, glass #f28b82, side #e8a33d, shared-side #6fa8dc, bread #a0703c, condiment #8e6bbf, accent #2bb3a3, napkin-set #e9e9e4.
  - Round vessels: tapered cylinder (bottom radius 0.82 of top) plus a half-dome of food (radius 0.72 of the vessel, height = food height), a shade darker.
  - Box vessels: box plus a flattened dome.
  - Contour bottle, PET bottle, bell glass: lathe (rotated) profiles, radius and height fractions from base to top:
    - Contour bottle: [0,0],[0.9,0],[0.98,0.03],[1,0.07],[0.93,0.13],[0.97,0.2],[1,0.28],[1,0.45],[0.98,0.58],[0.9,0.67],[0.74,0.76],[0.55,0.84],[0.45,0.89],[0.43,0.94],[0.5,0.955],[0.5,0.985],[0.45,1],[0,1] (traced from the 330 mL bottle; an earlier profile read as a ketchup bottle)
    - PET: [0,0],[0.95,0],[1,0.05],[1,0.62],[0.8,0.75],[0.4,0.88],[0.32,0.93],[0.36,0.95],[0.3,1],[0,1]
    - Bell glass: [0,0],[0.64,0],[0.64,0.03],[0.2,0.08],[0.18,0.18],[0.55,0.3],[0.62,0.45],[0.58,0.6],[0.72,0.8],[1,1],[0.96,1],[0,0.1]
  - Can: cylinder. Napkin: thin box with two gray utensil bars on top.
- **Light:** one shadow-casting directional key light placed from the lighting preset (azimuth, elevation; −140° = behind-left), color temperature only hinted (blended 60 % toward white so role colors stay readable), plus a hemisphere fill scaled by the fill ratio.
- **Labels** (drawn in 2D over the render): dark rounded tags (rgba(16,20,40,0.86)) with white bold text, height ≈ 2.6 % of the image. Anchor: product at 22 % of its height (below the logo band), glass at 30 %, others at 60 %. Place nearest items first. If a tag collides with an earlier one, move it to the nearest free spot (steps of 0.35 tag-width sideways and 0.6 tag-height vertically, up to 8 steps) **whose center still sits on its own shape**. A tag drifting onto another shape confuses the image model.
- **Model framing factor** (`model_framing.widen`, currently 1): renders the proxy for the image model with a wider field of view. Tried at 1.25; it had no effect (§14), so it is off.

---

## 10. Language-model steps

In the reference build these run on Claude with structured output (JSON schemas). The whole knowledge base context (§3) is placed in the system prompt so it can be cached across the steps of one intake. **Any capable model works; if none is available, a person writes these by hand from the knowledge base.**

### 10.1 System instructions (verbatim)

> You are the Food Stylist — Regional Expert behind an intake tool that plans photorealistic Coca-Cola meal imagery for The Coca-Cola Company.
>
> The operator is building one scene step by step. At each step you return the options they choose from.
>
> How to work:
> - Ground every suggestion in the knowledge-base files provided (the country file first, then the regional file, then the brand and tableware references). Name the sections you relied on in "sources" (for example "spain.md › DISH CATALOG › Paella and arroces").
> - If the knowledge base doesn't cover something, say so plainly in the rationale ("not covered in the country file; general knowledge") rather than presenting it as sourced. Never contradict a knowledge-base rule, and respect every "never stage" or avoid rule in it.
> - If the dish is served essentially one way in this region, return status "resolved" with exactly one option. Otherwise return status "choose" with two or three genuinely different options, the most common first (it is shown as the suggested option A).
> - Keep labels short (2-6 words). Details are one or two plain sentences. promptText is written for an image model: concrete, visual, no brand names except Coca-Cola.
> - Vessels must come from the allowed vocabulary: {vessel list}. Pick the closest one and put the exact wording in promptText.
> - The Coca-Cola product is always the only drink in the scene; never suggest another beverage.

Followed by `<knowledge_base><file name="…">…</file>…</knowledge_base>`.

Each user message starts with the brief (country and region, OU, hero dish, side request, occasion, SKU) and the choices made so far, then "Step: {name}" and the task.

### 10.2 Step tasks (verbatim)

- **prep:** Identify the hero dish and how it is prepared and enjoyed in this region. If it has regional variants or preparation styles, offer them.
- **plating:** Identify how this dish is most commonly served here (entree plate, wrapped in foil, basket, cutting board, and so on). For a plate, use "plate" (28 cm entree) by default and "lunch-plate" (23 cm) when the main is a small, delicate protein or a compact stack, so the food fills the plate; never an oversized charger. Use service "shared" only when the dish is typically served family-style from one large vessel on the table (a whole roast, a pizza, a paella pan); the scene then shows that vessel plus one plated portion.
- **sides:** Identify the side dishes and accompaniments this dish is commonly served with here: grain, vegetable, side dish, bread, condiment, and the container each is served in. Each option is a complete set. Keep it to what a real table would show: at most two side dishes, at most two or three condiments, bread only if customary (tableware reference §4). [If shared: The meal is family-style, so side dishes are shared (service shared) in serving bowls; condiments stay individual.] If the operator requested a side dish, include it in option A when it is culturally plausible; if it isn't, still include it in one option and say why it's unusual. pairsWith is "MAIN" unless a condiment belongs to a specific side.
- **surface (on the go):** This is a meal on the go. The food always sits on a surface, never in a hand. Suggest the surfaces that fit this dish and country (park or picnic table, bench, food-truck counter, street ledge).
- **accent:** The composition needs one more small table item to make the count odd. Suggest small accents that genuinely belong with this meal here (a condiment, garnish, or lime dish in a ramekin, small bowl or sauce boat). Never a drink, never something the knowledge base says to avoid.

Output per step: `{ status: "resolved"|"choose", options: [{ rationale, sources[], value }] }`, value per §4.3.

### 10.3 Story task (verbatim, with the computed facts filled in)

> Write the scene story for the image team.
>
> Scene spec: {scene, sku, entree, accompaniments, accent, napkinSet as JSON}
>
> Fixed facts (use these, do not contradict them):
> - Surface: {surface text}
> - Lighting: {lighting sentence}
> - Light on the product: {product-light sentence}
> - Camera: {look sentence} {angle sentence}
> - Framing: The entree and the Coca-Cola product sit together in the vertical center third of the frame; the table's far edge sits at or below the middle of the frame, leaving the upper half for soft background.
> - Product serving: {serving sentence}
> - Layout (from the chosen proxy): {LABEL = what, where; …}
>
> Write:
> - sceneSummary: a few paragraphs of prose as a food stylist would brief it: what's on the table, where, the setting, the mood, and the cultural framing.
> - culturalNotes: the do's and don'ts from the knowledge base that matter for this scene.
> - segments: entreeDish, traditionalSideDishes (one per side or condiment), productDetail (the exact Coca-Cola product and its size, with a real-world scale anchor), environmentalOverview (the upper half of the frame: soft background and setting, no text, at most two people's faces, blurred), platingAndTableware, productServingDetails (use the product serving fact), brandVisId (camera, lens, angle and framing from the fixed facts).
> - labelSegments: one entry for each food label below, in this order. The image model draws each labeled shape from this text alone, so each text must make the component unmistakable:
>   - When the dish has countable pieces, start with the exact count ("Exactly three tacos side by side", "Two slices") and say none is hidden behind another.
>   - Name the food by its local name, then what it visibly looks like: colors, textures, how it is cut, filled, sauced and garnished, as it is actually served in this region.
>   - Say how the pieces are arranged on the container ("in one row across the plate, all fully visible").
>   - Give proportions: what makes up most of the dish and what is only an accent ("mostly rice, with only a few small pieces of chicken"), and the real size of distinctive pieces ("beans about 2 cm long"). Listing ingredients with equal weight makes the image model draw each one large and prominent.
>   - A plated portion served from a shared dish is smaller and simpler than the dish in its vessel: mostly the base, with a few small pieces.
>   - Say what it sits on using the given container wording, including the size.
>   - When a common look-alike exists, say what it is not (al pastor is thinly shaved, not shredded; tortillas are small soft corn, not flour).
>   - No position, lighting, mood or camera words; the layout gives the position.
>   - One or two sentences.
>   Food labels: {LABEL = what, on {vessel phrase}; …}.
>   (The product and napkin labels have fixed text; do not write them.)
> - environmentalOverview: start with "Setting:", name the table surface, and give two or three recognizable details of the place (wall color, tile, chairs, plants, a window), never anything with writing on it (no menus, signs or posters), because the image model renders it as garbled text, softly out of focus, so the background reads as this place rather than a blank studio.

If validation failed, append: "A previous version failed validation. Fix these problems:" and the notes.

Serving sentence: with a glass: "A {product} [stands at the top right of the plate as the shared bottle | at the top right of the plate], with a filled branded bell-shaped Coca-Cola glass to its right." Without: "A {product} at the top right of the plate, served as is, no glass."

"Where" words for the layout fact: MAIN = "foreground, center of the frame"; others compared with MAIN: behind / in front of / beside (±6 cm depth), left / right (±6 cm lateral).

Story output schema: `{ sceneSummary, culturalNotes[], segments{entreeDish, traditionalSideDishes[], productDetail, environmentalOverview, platingAndTableware, productServingDetails, brandVisId}, labelSegments[{label, text}] }`.

### 10.4 Validation task (verbatim)

> Check this scene story for cultural authenticity and consistency before any image is generated. Check it against the knowledge base (country file, regional file, brand and tableware references) and against the brief. Fail it only for real problems: a wrong dish or variant for this region, a broken cultural or brand rule, a side or vessel that doesn't belong, an inconsistency between segments, or a claim the knowledge base marks as unconfirmed presented as fact. Each note names the problem and what to change.

Output: `{ pass: boolean, notes[] }`. The operator can regenerate the story with the notes.

---

## 11. Prompt assembly

### 11.1 Composition prompt (Nano Banana 2)

Blocks in this order, separated by blank lines. This order was proven out in the image tests.

1. **Proxy instruction (fixed):**
   > Transform image 1 into a photograph. Image 1 is a layout guide: each colored shape is one object, and its label names the text below that describes it. Keep every object exactly where its shape sits, at the same size, and keep the same camera position and framing; do not zoom in, crop tighter or add objects. Remove all shapes, labels and outlines.
2. **Scale sentence (computed):**
   > Scale: this is a table shot, not a close-up. The camera is about {dist} m from the {plate}, and at that distance the frame is about {W} cm wide, so the {plate size} cm {plate} fills only about {pct}% of the frame width, with open table on both sides. Do not enlarge the food or the product.

   dist = distance from camera to the MAIN center (1 decimal); W = 2 · (depth of MAIN along the view axis) · tan(vfov/2) · aspect, rounded to 5 cm; pct = plate width / W.
3. **One line per label**, in blueprint order: `LABEL: text`. Food labels use the agent's labelSegments. Fixed texts:
   - **SKU** (bottle): "Exactly one {glass Coca-Cola bottle in the classic contour shape, filled to the neck with cola | clear plastic Coca-Cola bottle, filled to the neck with cola}, about {h} cm tall, standing upright and facing the camera straight on so the full logo reads, cold, with fine condensation on the {glass | bottle}. Capped, no straw. A solid red label band wraps the middle of the bottle, with the white Coca-Cola script logo; print no other words, sizes or descriptions on it."
   - **SKU** (can): "Exactly one Coca-Cola can, about {h} cm tall, standing upright and facing the camera straight on so the full logo reads, cold, with fine condensation on the can. Unopened, no straw. The can shows the white Coca-Cola script logo on red; print no other words, sizes or descriptions on it."
   - **GLASS**: "Exactly one branded bell-shaped Coca-Cola glass, about 17 cm tall, filled with Coca-Cola and ice, with the logo facing the camera."
   - **NAPKIN_SET_1**: "A neatly folded plain cloth napkin, about 20 by 10 cm, lying flat with a fork and knife on top, handles toward the camera. No print or text on the napkin."
   - Never use the catalog name in the composition prompt: words like "contour glass" or "330 mL" get printed on the label.
4. **Setting**: the story's environmentalOverview ("Setting: …").
5. **Lighting**: lighting sentence + product-light sentence (§5.3).
6. **Look**: the look sentence (§5.4).
7. **Exclusions (computed):**
   > Only the {N} objects described above are on the table, and no other drinks or glasses (no beer, wine, water or juice). No text anywhere except the Coca-Cola product's own label: no menus, signs, posters or writing in the background either; no hands or people at the table.

### 11.2 Product swap prompt (Seedream)

> Replace the Coca-Cola {bottle|can} in image 1 with the {catalog display name} from image 2. Keep its exact position, size and straight-on angle, and keep its base resting on the table. Match the lighting of image 1: {lighting sentence} {product-light sentence} [Keep the bell-shaped Coca-Cola glass as it is.] Change nothing else in image 1.

(Here the catalog name is fine: image 2 supplies the real label. A shortened lighting clause also works.)

---

## 12. Where each rule comes from

| Source | How it's used in the reference build |
|---|---|
| Knowledge base (country, regional, brand, tableware .md) | Read by the language model at each step: dish, variants, sides, vessels, cultural do's and don'ts, food wording. Changes take effect on the next knowledge-base download. |
| Team composition rules (Appendix B) | Hand-coded as the solver's hard rules H1–H14 and scoring. |
| KB tableware reference and Coca-Cola guidelines (drink top right of the plate, napkin 3–5 cm right of the plate, bread in the right third, condiments 1–3 in, product sizes, clearance radii, bell glass size) | Hand-coded into the solver and registry. |
| `rules/*.json` (Appendix A) | Read at run time: camera looks, lighting, glass rules, plate spec, layout preferences, drink order. |

House rules that override the knowledge base: the glass sits to the right of the bottle (the KB puts the glass next to the plate); the entree plate is 28 cm per the photo spec (the KB says 26–28 cm).

Recommended for the rebuild: move every placement number still in code (drink angle and spacing, napkin gap, bread offsets, condiment distance, side angles) into a `rules/placement.json` with a note of the KB section each came from, so the team can adjust composition without code. Also have the language model quote the knowledge base's own image-prompt sections ("Texture & finish", "Common model failure", wording tables) word for word in the food lines, and tag each food line with its source (KB section or "general knowledge").

---

## 13. Image generation workflow (outside the tool)

1. **Nano Banana 2**: image 1 = the labeled proxy PNG; prompt = the composition prompt. Generate **3–4 images** per prompt.
2. **Pick** the one where the arrangement held best (edge objects like sides and bread in their places, the right counts, no background text).
3. **Seedream**: image 1 = the picked image, image 2 = a clean product reference photo of the **same SKU** in the spec (a 330 mL reference for a 330 mL spec; a 2 L reference for a 2 L spec). Prompt = the swap prompt. This step is required, not optional: it is what guarantees a correct label.

No edit mode, depth map or ControlNet-style input is assumed.

---

## 14. What the image tests taught us

Two dishes were tested by hand: tacos al pastor (Texas taqueria, 330 mL glass bottle, no glass) and paella valenciana (Sunday family lunch at home in Valencia, shared paella pan, ensalada mixta, bread, 330 mL bottle + glass).

**Reliable:**
- The arrangement: left-to-right order, what is in front of or behind what, which side the product is on. This is the proxy's job, and it holds.
- Lighting, once set to the balanced commercial preset.
- The label, when the prompt asks for it clearly and the Seedream swap follows.
- Specific food wording: counts, "not shredded", "not flour", "not a heaped mound", "no seafood, no chorizo".

**Model behaviors to design around:**
- **Scale:** Nano Banana draws the front plate at about **38–45 % of the frame width** whatever the proxy shows (targets were 14–26 %). A 1.25× wider proxy had no effect. The real-world scale sentence helped a little (43 % → 38 %) and coincided with the first run where every object held its position. Treat the proxy as controlling arrangement, not absolute scale.
- **Edge objects drift:** items furthest from the hero (a salad, a bread basket) sometimes swap places or move, because the enlarged hero takes their space. About half the runs get them right, so generate several and pick.
- **Equal-weight ingredient lists** make every ingredient large (giant beans, big chicken pieces). State proportions and piece sizes.
- **Catalog words get printed** on the label ("CONTOUR GLASS"). Describe the shape instead.
- **Anything with writing in the background** (a "menu board") becomes garbled text. Ban writing; name walls, tile, chairs, plants, windows instead.
- **"Deep rich contrast" and heavy saturation** push toward a moody, plastic look. Ask for clean natural contrast, true-to-life color and real food texture.
- **Warm afternoon window light** read as moody; the balanced commercial preset fixed it.
- **The red label band** sometimes disappears in Nano Banana (logo printed on bare glass); the Seedream swap restores it.
- **Arrangement words help:** "in one row across the plate, all fully visible" beat a triangle arrangement roughly half the time.
- Reference photo for the swap must match the spec's SKU; otherwise the model draws the reference's size.

---

## 15. Designed but not built

- **Two people:** same place setting per diner, the product is every diner's drink. Two arrangements: **corner** (diners around one table corner, catty-corner) and **side by side, left and right** at the same depth (not foreground vs background). A shared large bottle sits in the center third between the settings.
- **Groups / family:** long table, shared vessels, each diner a glass when glasses are in the scene.
- **Shared sides budget** for family-style meals: at most 4 vessels and 4 size units (small bowl 0.5, medium bowl 1, large bowl or casserole 2, bread basket or board 1).
- **Side size rule:** side vessels 40–60 % of the entree's size (shared serving vessels exempt), warned at the sides step.
- **Other camera looks and angles:** placeholders until the team settles the lenses.
- **Template library:** save a picked layout by its signature and reuse it.

---

## 16. Acceptance checks

1. Knowledge base loads; the brief lists countries and regions from front matter.
2. A large SKU (≥ 1 L) disables restaurant and on-the-go, and forces the glass (Y, locked); on the go hides the glass question.
3. Item counting: an even count triggers the accent step; after the accent the count is odd.
4. Solver, **tacos** fixture (Texas, 330 mL glass bottle, no glass, side = frijoles charros in a bowl, sauce = salsa verde in a ramekin, napkin set, indoor restaurant, 4-top, close-hero, diner's eye): at least one option; triangle-loop ranked first; the drink sits between the plate and the napkin, set back; every hard rule passes.
5. Solver, **family-style** fixture (paella in a paellera, shared, ensalada mixta in a large bowl, bread in a basket, 2 L PET + glass, home, long table): Feast Spread and Crescent Arc options, all rules pass, the glass is to the right of the bottle, the bread is right of the glass.
6. Determinism: the same spec gives the same options.
7. Options differ: mean displacement of movable items ≥ 0.08 between any two options; no padding.
8. Proxy: 1920×1080, labels on their own shapes, product label anchored below its logo band.
9. Composition prompt: blocks in the §11.1 order; the SKU line never contains the catalog name; exclusions state the right object count.
10. Swap prompt names the catalog product and keeps the glass sentence when there is a glass.

---

## 17. Reference prompts (from the tests)

These are the best-performing hand-written prompts. They are what the tool should produce when the language model does its job.

### 17.1 Tacos al pastor, Texas (proxy: no glass)

```
Transform image 1 into a photograph. Image 1 is a layout guide: each colored shape is one object, and its label names the text below that describes it. Keep every object exactly where its shape sits, at the same size, and keep the same camera position and framing; do not zoom in, crop tighter or add objects. Remove all shapes, labels and outlines.

MAIN: Exactly three tacos al pastor in one row across the plate, side by side, all three fully visible and none behind another: thin slices of red-marinated pork shaved from the spit, with crisp charred edges (not shredded), on two small, thin, soft corn tortillas each (not flour), topped with small diced pineapple, finely chopped white onion and cilantro, on a round entree plate about 28 cm across, with a narrow rim (or rimless coupe), a low, flat profile and a matte or satin glaze, never glossy.
SKU: Exactly one glass Coca-Cola bottle in the classic contour shape, filled to the neck with cola, about 20.5 cm tall, standing upright and facing the camera straight on so the full logo reads, cold, with fine condensation on the glass. Capped, no straw. A solid red label band wraps the middle of the bottle, with the white Coca-Cola script logo; print no other words, sizes or descriptions on it.
SIDE_1: Frijoles charros: pinto beans in a brothy stew with bits of bacon, tomato and jalapeño, in a round side bowl about 16 cm across.
SAUCE_1: Bright green salsa verde in a small white ramekin about 7 cm across.
NAPKIN_SET_1: A neatly folded plain cloth napkin, about 20 by 10 cm, lying flat with a fork and knife on top, handles toward the camera. No print or text on the napkin.

Setting: a casual Texas taqueria, on a worn wooden dining table; the upper half of the frame is a softly out-of-focus view of the restaurant: warm painted walls with colorful tile trim, wooden chairs and a bright window.

{lighting sentence} {product-light sentence}

{look sentence}

Only the 5 objects described above are on the table, and no other drinks or glasses (no beer, wine, water or juice). No text anywhere except the Coca-Cola product's own label: no menus, signs, posters or writing in the background either; no hands or people at the table.
```

(Add the computed scale sentence after the first block.)

### 17.2 Paella valenciana, Sunday lunch at home, Valencia (shared pan, bottle + glass)

```
MAIN: A modest plated portion spooned from the pan, mostly rice: a thin, flat layer of separate saffron-gold rice grains covering most of the plate, with only one small piece of browned chicken, a few short pieces of flat green bean and a few garrofón beans (flat, creamy-white, about 2 cm long) scattered in the rice, and a few crisp golden-brown bits of socarrat. Rice is the main thing on the plate; meat and beans are small accents. On a round entree plate about 28 cm across, with a narrow rim (or rimless coupe), a low, flat profile and a matte or satin glaze, never glossy.
SHARED_HERO: Paella valenciana in a shallow, dark carbon-steel paella pan about 38 cm across with two looped handles, resting on a trivet, with a serving spoon laid in the pan: a thin, flat, even layer of rice about a finger thick, grains separate and saffron-gold, with browned chicken pieces, small bone-in rabbit pieces, flat green beans and garrofón beans (flat, creamy-white, about 2 cm long) spread evenly across the top, with rice showing between them; one small section already served, showing the dark-amber, crackly socarrat on the bottom of the pan. Not a heaped mound, not creamy; no seafood, no chorizo, no peas, no lemon.
SHARED_1: Ensalada mixta, not a green salad: crisp lettuce, tomato wedges, thin slices of white onion, chunks of tuna, green olives and quartered hard-boiled eggs, dressed simply with olive oil, in a large shallow serving bowl about 32 cm across.
BREAD_1: Crusty baguette-style Spanish bread, cut into thick pieces, in a small wicker basket about 24 cm across.
Setting: Sunday lunch in a family home in Valencia, on a long wooden dining table; the upper half of the frame is a softly out-of-focus view of a bright dining room: white walls, a band of blue-and-white tile, wooden chairs and a window with potted plants.
```

(SKU, GLASS and NAPKIN_SET_1 use the fixed texts; the rest of the prompt follows §11.1.) Sources: the paella lines come from `spain.md` › Paella and arroces (official ingredients, no seafood or chorizo in the Valenciana, lunch-only Sunday family dish, pan sizes, thin finger-thick layer, socarrat, staging with a spoon and a served section, and its list of common model failures). The ensalada mixta ingredients, the bean size and the background details are general knowledge added during testing.

---

## Appendix A: rules files (verbatim)


### rules/camera-options.json

```json
{
  "$comment": "Camera presets. Operators pick a plain-language look; the lens, aperture and focus behind it are hidden. Technical values are PLACEHOLDERS until the team settles the final lenses. The structure is final. Earlier draft values (50mm f/2.8, 35mm f/1.4, 15mm ultra-wide) are in git history, commit 1520fc2.",
  "version": "0.1-placeholder",

  "model_framing": {
    "$comment": "Field-of-view factor for the proxy handed to the image model. Tried 1.25 to offset Nano Banana 2 drawing objects larger than their shapes; it had no effect (the model sizes the front plate at about 43% of the frame regardless), so it is back to 1 and the prompt states the scale in real-world terms instead (story.ts scaleSentence).",
    "widen": 1
  },

  "look": {
    "$comment": "One dropdown. Each preset bundles lens + aperture + focus so users never choose an f-stop.",
    "default": "close-hero",
    "options": [
      {
        "id": "close-hero",
        "label": "Close-up hero",
        "help": "Tight on the meal and the bottle, background melts away.",
        "prompt": "Commercial food photography, shot on a 50mm f/2.0 lens, sharp focus on the foreground elements on the table, with crisp edge detail on the beverage bottle and plated food. Smooth, rapid focus fall-off softly blurring the background immediately past the table edge. Authentic real-world film grain with fine-grain texture across the midtones, clean natural contrast with open shadows, and rich but true-to-life color, with the Coca-Cola red standing out. Food looks real and freshly made: natural textures, visible char, crumbs, moisture and small imperfections, with soft natural highlights, never glossy, waxy or plastic-looking. Lively editorial food styling.",
        "hidden": { "focal_length_mm": 50, "aperture": "f/2.0", "focus": "the whole table setting, including the Coca-Cola product; blur begins just past the table's far edge", "focus_distance_m": "auto" },
        "status": "final"
      },
      {
        "id": "table-context",
        "label": "Table in context",
        "help": "The whole table setting, with a hint of the room or place around it.",
        "prompt": "[TABLE_CONTEXT_PROMPT]",
        "hidden": { "focal_length_mm": 35, "aperture": "TBD", "focus": "main dish and bottle (and glass, when present)", "focus_distance_m": "auto" },
        "status": "placeholder"
      },
      {
        "id": "wide-scene",
        "label": "Wide scene",
        "help": "The meal inside its environment: street, patio, restaurant.",
        "prompt": "[WIDE_SCENE_PROMPT]",
        "hidden": { "focal_length_mm": 15, "aperture": "TBD", "focus": "main dish and bottle (and glass, when present)", "focus_distance_m": "auto" },
        "constraints": { "sku_min_distance_from_frame_edge_pct": 15 },
        "status": "placeholder"
      }
    ]
  },

  "angle": {
    "default": "diners-eye",
    "options": [
      { "id": "low",        "label": "Low, near eye level",   "prompt": "[LOW_ANGLE_PROMPT]",        "hidden": { "pitch_deg": 15 }, "status": "placeholder" },
      { "id": "diners-eye", "label": "Diner's eye (default)", "prompt": "[DINERS_EYE_ANGLE_PROMPT]", "hidden": { "pitch_deg": 30 }, "status": "placeholder" },
      { "id": "high",       "label": "Looking down",          "prompt": "[HIGH_ANGLE_PROMPT]",       "hidden": { "pitch_deg": 45 }, "status": "placeholder" }
    ]
  },

  "prompt_order": ["scene_genre", "subject", "angle", "look", "lighting", "sku_light"]
}

```

### rules/lighting-presets.json

```json
{
  "$comment": "Lighting is derived from the scene, never picked by the operator. Scene details (setting, venue) + time of day select one preset. Each preset gives the prompt text AND the proxy light rig, so shadows in the proxy match the light the prompt describes. DRAFT values for team review. Key-light azimuth convention: 0 = from behind the camera, 180 = from behind the table facing the camera (backlight), negative = diner's left, positive = diner's right.",
  "version": "0.1-draft",

  "time_of_day": {
    "$comment": "Derived from occasion when it is unambiguous (breakfast -> morning, dinner -> evening). Otherwise asked as part of scene details.",
    "values": ["morning", "midday", "golden-hour", "evening"],
    "from_occasion": {
      "breakfast": "morning",
      "brunch": "morning",
      "weekday-lunch": "midday",
      "weekend-lunch": "midday",
      "afternoon-snack": "golden-hour",
      "dinner": "evening",
      "late-night": "evening"
    }
  },

  "select": [
    { "setting": "indoor",  "venue": "home",       "time": ["morning", "midday"], "preset": "home-window-daylight" },
    { "setting": "indoor",  "venue": "home",       "time": ["golden-hour"],       "preset": "home-window-golden" },
    { "setting": "indoor",  "venue": "home",       "time": ["evening"],           "preset": "home-evening-lamps" },
    { "setting": "indoor",  "venue": "restaurant", "time": ["morning", "midday"], "preset": "restaurant-late-morning-window" },
    { "setting": "indoor",  "venue": "restaurant", "time": ["golden-hour"],       "preset": "restaurant-day-window" },
    { "setting": "indoor",  "venue": "restaurant", "time": ["evening"],           "preset": "restaurant-evening-ambient" },
    { "setting": "outdoor", "venue": "*",          "time": ["morning"],           "preset": "outdoor-morning" },
    { "setting": "outdoor", "venue": "*",          "time": ["midday"],            "preset": "outdoor-midday-shade" },
    { "setting": "outdoor", "venue": "*",          "time": ["golden-hour"],       "preset": "outdoor-golden-hour" },
    { "setting": "outdoor", "venue": ["home", "restaurant"], "time": ["evening"], "preset": "outdoor-evening-string-lights" },
    { "setting": "outdoor", "venue": "on-the-go",  "time": ["evening"],           "preset": "street-evening" }
  ],

  "rules": {
    "$comment": "Apply to every preset. These are why the key light sits behind-left of the table.",
    "key_light_side": "back-left",
    "why": "The SKU is always front-right of center and MAIN front-left. A key light from behind-left (1) passes through / rims the bottle toward the camera so the cola glows, and (2) throws shadows forward-right, away from the entree, so the bottle's shadow never falls across the main dish.",
    "shadow_checks": [
      "no cast shadow crosses the SKU logo box",
      "the SKU's cast shadow does not fall on MAIN",
      "shadow direction in the proxy matches the prompt's light direction"
    ]
  },

  "default_preset": {
    "$comment": "While the team builds templates for many scenes, every scene uses this one even, well-balanced commercial food photography setup. Set to null to go back to picking a preset from the scene (the select table below).",
    "preset": "commercial-balanced"
  },

  "sku_light": {
    "$comment": "Added after the lighting sentence. Depends on the SKU package, because only glass and PET let light through. {drinks} = 'the Coca-Cola bottle', or 'the Coca-Cola bottle and the bell-shaped Coca-Cola glass' when the glass rule applies (glass-rules.json).",
    "transparent": {
      "packages": ["contour-glass-bottle", "pet-bottle", "glass-with-ice", "bell-glass"],
      "prompt_by_warmth": {
        "neutral": "Light passes through {drinks} from behind, giving the cola a clear red-amber glow with clean highlights along the glass. The label itself is never washed out or darkened: it is evenly lit from the front, opaque, clean and a solid, saturated Coca-Cola red, with the white script crisp and fully legible; the glow shows only in the cola above and below the label. A faint caramel-amber tint shows inside the drink's soft shadow on the table.",
        "cool":    "Light passes through {drinks} from behind, giving the cola a deep red-amber glow with crisp highlights along the glass. The label itself is never washed out: it is evenly lit from the front, opaque, clean and a solid, saturated Coca-Cola red, with the white script crisp and fully legible; the glow shows only in the cola above and below the label. Where the light passes through the cola, it lays a soft caramel-amber tint inside the drink's shadow on the table.",
        "warm":    "Warm light passes through {drinks} from behind, making the cola glow rich amber-red with warm highlights along the glass. The label itself is never washed out: it is evenly lit from the front, opaque, clean and a solid, saturated Coca-Cola red, with the white script crisp and fully legible; the glow shows only in the cola above and below the label. Where the light passes through the cola, it lays a soft caramel-amber tint inside the drink's shadow on the table.",
        "ambient": "A soft glow passes through {drinks} from the light behind, with gentle highlights tracing the glass. The label itself is never washed out: it is evenly lit from the front, opaque, clean and a solid, saturated Coca-Cola red, with the white script crisp and fully legible; the glow shows only in the cola above and below the label."
      }
    },
    "opaque": {
      "packages": ["can"],
      "prompt": "The light rims the edge of the Coca-Cola can with a clean highlight, keeping the red finish rich and the logo clearly lit."
    }
  },

  "presets": {
    "commercial-balanced": {
      "prompt": "Even, well-balanced commercial food photography lighting: a large soft key light from behind and to the left of the table with generous fill from the front, so every item on the table is bright, clearly lit and true to color. Soft, subtle shadows fall forward and to the right, away from the plate. Clean neutral white balance, bright and airy, with no dark vignette, no dark corners and no blown highlights; the background is bright and softly out of focus.",
      "warmth": "neutral",
      "rig": { "key": { "type": "area", "azimuth_deg": -140, "elevation_deg": 45, "kelvin": 5500, "softness": 0.8 }, "fill_ratio": 0.65, "ambient_kelvin": 5800 },
      "notes": "Default for every scene for now (default_preset). Image tests showed the scene-based window presets read too moody."
    },
    "home-window-daylight": {
      "prompt": "Natural daylight from a window behind and to the left of the table, soft directional light with gentle shadows falling forward and to the right, clean neutral color.",
      "warmth": "cool",
      "rig": { "key": { "type": "area", "azimuth_deg": -145, "elevation_deg": 30, "kelvin": 5500, "softness": 0.7 }, "fill_ratio": 0.35, "ambient_kelvin": 6000 }
    },
    "home-window-golden": {
      "prompt": "Low golden afternoon sun through a window behind and to the left of the table, long warm shadows falling forward and to the right.",
      "warmth": "warm",
      "rig": { "key": { "type": "directional", "azimuth_deg": -150, "elevation_deg": 15, "kelvin": 3500, "softness": 0.3 }, "fill_ratio": 0.25, "ambient_kelvin": 4500 }
    },
    "home-evening-lamps": {
      "prompt": "Evening indoors, warm light from a pendant lamp above and slightly behind the table plus a table lamp to the left, soft pools of light and a cozy warm tone.",
      "warmth": "ambient",
      "rig": { "key": { "type": "spot", "azimuth_deg": -160, "elevation_deg": 60, "kelvin": 2700, "softness": 0.6 }, "fill_ratio": 0.2, "ambient_kelvin": 2700, "practicals": ["pendant", "table-lamp-left"] }
    },
    "restaurant-late-morning-window": {
      "prompt": "Natural late-morning daylight from large windows behind and to the left of the table, bright, clean and neutral rather than golden. The foreground is pleasantly and evenly lit, with soft, subtle shadows falling forward and to the right, away from the plate, and the room gently filled by bounced daylight. Balanced fill from the front keeps the face of the bottle and its label evenly lit, never darkened by its own shadow and never blown out.",
      "warmth": "cool",
      "rig": { "key": { "type": "area", "azimuth_deg": -140, "elevation_deg": 40, "kelvin": 5400, "softness": 0.65 }, "fill_ratio": 0.55, "ambient_kelvin": 6000 },
      "notes": "Default for daytime restaurant scenes. Replaces the warm afternoon look after image tests: higher fill protects the label; the caramel cast comes from sku_light."
    },
    "restaurant-day-window": {
      "prompt": "Natural daylight: warm afternoon sunlight streams through large windows behind and to the left of the table, laying soft-edged patches of sun across the tabletop and casting natural shadows that fall forward and to the right, away from the plate, with the rest of the room gently lit by bounced daylight.",
      "warmth": "warm",
      "rig": { "key": { "type": "directional", "azimuth_deg": -140, "elevation_deg": 32, "kelvin": 4800, "softness": 0.45 }, "fill_ratio": 0.4, "ambient_kelvin": 5600 }
    },
    "restaurant-evening-ambient": {
      "prompt": "Restaurant at night, warm ambient lighting from overhead fixtures and a candle or small lamp on the table, soft shadows and warm bokeh in the background.",
      "warmth": "ambient",
      "rig": { "key": { "type": "spot", "azimuth_deg": -155, "elevation_deg": 55, "kelvin": 2800, "softness": 0.6 }, "fill_ratio": 0.25, "ambient_kelvin": 2800, "practicals": ["overhead-fixtures", "table-candle"] }
    },
    "outdoor-morning": {
      "prompt": "Fresh outdoor morning light, the sun low behind and to the left, soft clean shadows falling forward and to the right.",
      "warmth": "cool",
      "rig": { "key": { "type": "directional", "azimuth_deg": -150, "elevation_deg": 20, "kelvin": 5000, "softness": 0.4 }, "fill_ratio": 0.4, "ambient_kelvin": 7000 }
    },
    "outdoor-midday-shade": {
      "prompt": "Bright midday outdoors in the open shade of an umbrella or tree, even soft light with light dappled sun behind the table.",
      "warmth": "cool",
      "rig": { "key": { "type": "area", "azimuth_deg": -150, "elevation_deg": 50, "kelvin": 6000, "softness": 0.85 }, "fill_ratio": 0.55, "ambient_kelvin": 6500 },
      "notes": "Hard overhead noon sun gives short black shadows and blown highlights on glass, so midday is staged in open shade."
    },
    "outdoor-golden-hour": {
      "prompt": "Golden hour outdoors, warm low sun behind and to the left of the table, long soft shadows falling forward and to the right.",
      "warmth": "warm",
      "rig": { "key": { "type": "directional", "azimuth_deg": -155, "elevation_deg": 10, "kelvin": 3300, "softness": 0.35 }, "fill_ratio": 0.3, "ambient_kelvin": 5500 }
    },
    "outdoor-evening-string-lights": {
      "prompt": "Outdoors in the evening, warm string lights overhead and behind the table against a deep blue dusk sky, soft warm light on the food.",
      "warmth": "ambient",
      "rig": { "key": { "type": "area", "azimuth_deg": -160, "elevation_deg": 45, "kelvin": 2700, "softness": 0.7 }, "fill_ratio": 0.2, "ambient_kelvin": 9000, "practicals": ["string-lights"] }
    },
    "street-evening": {
      "prompt": "Street at night, warm light from a food stall lamp behind and to the left, colorful city lights blurred in the background.",
      "warmth": "ambient",
      "rig": { "key": { "type": "spot", "azimuth_deg": -150, "elevation_deg": 40, "kelvin": 3000, "softness": 0.5 }, "fill_ratio": 0.2, "ambient_kelvin": 6000, "practicals": ["stall-lamp", "city-lights"] }
    }
  }
}

```

### rules/glass-rules.json

```json
{
  "$comment": "SKU size, venue and glass rules. Owned by the Operating Unit's brand rules. Large SKUs (1 L and up) are shared bottles, require a glass and appear only at home. Glasses never appear on the go. Otherwise the operator's intake Y/N (sku.glass) decides.",
  "status": "active",
  "version": "0.3",

  "glass": {
    "id": "bell-glass",
    "label": "GLASS",
    "description": "Branded bell-shaped Coca-Cola glass, poured from the SKU, with or without ice."
  },

  "large_sku": {
    "sku_volume_ml_at_least": 1000,
    "shared": true,
    "$shared": "One bottle for the table, placed in the center third between the place settings. Each diner has their own glass when glasses are in the scene.",
    "allowed_venues": ["home"],
    "$venues": "Large SKUs never appear on the go or at restaurants. The intake hides those venues (or the large SKUs) when the other is chosen."
  },

  "glass_rules": [
    { "when": { "venue": "on-the-go" },               "glass": "never",    "$note": "Glass question hidden, answer N." },
    { "when": { "sku_volume_ml_at_least": 1000 },     "glass": "required", "$note": "Glass question answered Y and locked. Large SKUs are home-only, so this never meets the on-the-go rule." },
    { "when": "otherwise",                            "glass": "optional", "$note": "Operator's intake Y/N, default N." }
  ],

  "per_diner": {
    "$comment": "Every place setting stays identical: when glasses are in the scene, each diner gets one.",
    "glass_per_diner": true
  },

  "matrix": {
    "$comment": "Resulting combinations.",
    "home":       { "sku_under_1L": "glass optional",                        "sku_1L_and_up": "shared bottle; glass required" },
    "restaurant": { "sku_under_1L": "glass optional",                        "sku_1L_and_up": "not allowed" },
    "on-the-go":  { "sku_under_1L": "no glass",                              "sku_1L_and_up": "not allowed" }
  }
}

```

### rules/layout-preferences.json

```json
{
  "$comment": "House-style preferences for ranking layout options. A bonus is added to an archetype's score when ordering options (it never overrides a hard rule). triangle-loop matches the team's preferred reference (docs/tablescape/reference/preferred-tacos.webp): side dish back-left, condiment front-left, drink back-right, napkin set to the right.",
  "archetype_bonus": {
    "triangle-loop": 0.06,
    "crescent-arc": 0,
    "diagonal-stagger": 0,
    "counterweight": 0,
    "feast-spread": 0.06
  },
  "drink_order": {
    "$comment": "Left-to-right order of the product and the glass, from the camera. House rule: the bottle sits at the plate's top right and the glass to the right of the bottle, slightly forward. This overrides the knowledge base's tableware reference, which puts the glass next to the plate and a shared bottle beyond it. Values: bottle-then-glass | glass-then-bottle.",
    "value": "bottle-then-glass"
  },
  "hero_span_target": {
    "$comment": "Share of frame width the hero group (entree + drink) should span. Raised 15% after the first taco test (0.28 -> 0.32) to zoom in on the setting.",
    "with_sides": 0.32,
    "meal_and_drink_only": 0.36
  }
}

```

### rules/tableware-photo-spec.json

```json
{
  "$comment": "Photography plate spec (team style guide). Sizes chosen so the plate never overpowers the frame: oversized chargers (32+ cm) make normal portions look tiny and leave empty glaze for light to reflect off. Only use a charger for an intentional wide table scene. The solver uses use_cm for the proxy; the prompt states use_cm and the attributes below.",
  "version": "0.1",
  "plates": {
    "plate":      { "label": "Entree / main dish",            "range_cm": [27, 29], "use_cm": 28, "noun": "round entree plate" },
    "lunch-plate": { "label": "Salad / lunch plate (smaller mains)", "range_cm": [22, 24], "use_cm": 23, "noun": "round lunch plate", "when": "A small, delicate protein or a compact stack: the smaller plate makes the food look bountiful and fill the frame." },
    "side-plate": { "label": "Appetizer / side plate",        "range_cm": [18, 20], "use_cm": 19, "noun": "round side plate", "when": "Side portions, single desserts, or bread flanking the main." }
  },
  "attributes": {
    "rim_width_cm": { "value": [1.5, 2.5], "alt": "coupe (rimless)", "why": "Wide rims push the food into a small area in the middle; a narrow rim or coupe gives the food the most surface." },
    "lip_height_cm": { "value": [1.5, 2.0], "why": "High lips throw harsh shadows onto the food under side light or backlight." },
    "finish": { "value": "matte or satin, never high-gloss", "why": "Glossy glaze gets blinding white hot spots under studio light." }
  },
  "prompt": "with a narrow rim (or rimless coupe), a low, flat profile and a matte or satin glaze, never glossy"
}

```

## Appendix B: team composition rules (verbatim, docs/tablescape/source/composition-rules.md)

````markdown
# CokeMeals Composition Rules (source)

Source material as provided by the team. Kept here so every rule in the solver can be traced back to it. Only formatting has been cleaned: LaTeX math turned into plain text, and stray citation-UI artifacts removed. Bracketed numbers are citations to the original guideline sources (Visual Brand Guidelines, ShRED OS, FoodShot AI, We Eat Together).

How these rules are implemented, and which parts still need a decision, is in [`../PLAN.md`](../PLAN.md) section 5 and the traceability table in section 13.

- Part A (3D JSON primitive coordinate schema): [`blueprint.schema.json`](./blueprint.schema.json)
- Part B (layout agent system prompt): below
- Updated 30° perspective specification: below

---

## Part B: System prompt for the AI layout agent

### Agent role and directive
You are an expert AI Spatial Layout Engine specializing in commercial food and beverage tablescape composition. Your task is to process user briefs (which contain a variable list of meal elements, a target ShRED aspect ratio, and a shopper zone) and generate a 3D primitive wireframe blueprint (using primitive cylinders, flattened cylinders, and bounding boxes) to guide downstream photorealistic image rendering [1, 3].

### 1. Camera and horizon boundary constraints
- **Camera pitch angle**: set to ~30° (diner's-eye view), looking slightly down at the table surface [2, 7].
- **50% table horizon clamp**: the rear edge of the table (horizon line) MUST sit at or below vertical coordinate Y = 0.50 (the midpoint of the frame).
  - **Table surface zone (Y ≤ 0.50)**: all food plates, beverage containers, side dishes, cutlery and napkins must sit completely within this region [1, 2].
  - **Environment / context zone (Y > 0.50)**: reserved for soft background depth-of-field (bokeh) and ShRED copy reserves (headlines, offers, brand logos) [2, 4, 6].

### 2. Component classification and visual mass allocation
Classify every item in the user brief into one of three compositional layers [1, 2]:
1. **Layer 1: Primary Co-Heroes (50% visual weight)**
   - Elements: main entree + hero beverage [1, 3].
   - Rules: the main entree sits upfront in the immediate foreground (Z = 0.0–0.2) over the lower-left Phi Grid / Golden Triangle intersection [2]. The hero beverage sits in the midground (Z = 0.2–0.4) over the upper-right Phi Grid intersection with a clear line of sight [1, 2].
2. **Layer 2: Secondary Accompaniments (30% visual weight)**
   - Elements: side dishes, starches, salads, sharing bowls, bread baskets [1, 2].
   - Rules: scale primitives 40%–60% smaller than the main entree [1]. Stagger laterally/diagonally in the midground behind the main entree to prevent Z-axis occlusion [2].
3. **Layer 3: Tertiary Accents and Directional Props (20% visual weight)**
   - Elements: condiment ramekins, dipping sauces, napkins, cutlery, garnishes [1, 2].
   - Rules: smallest primitive shapes [1]. Position ramekins within 1 to 3 inches of their corresponding food dish [2].

### 3. The odd/even balancing engine
Human visual perception naturally groups even numbers into rigid, static pairs, whereas odd numbers (3, 5, 7) create dynamic triangular optical loops [2, 8, 9].
- **Component count audit**: count total input items (N).
- **Even-number compensation**: if N is EVEN (e.g. N = 2, 4, 6), automatically inject +1 Layer 3 accent primitive (e.g. a dipping sauce ramekin, lime dish or napkin fold) to convert the total count to an ODD number [8, 9].
- **3D triangular grouping**: position the injected element to form a 3D depth triangle across the table surface with adjacent dishes [2, 8].

### 4. Directional vector and brand compliance rules
- **Inward cutlery vectors**: angle cutlery bounding boxes inward toward the focal center of the main entree or beverage container. Cutlery MUST NEVER point out of the canvas boundaries [2, 8].
- **Curved napkin trajectories**: shape napkin bounding boxes into S-curves or C-curves wrapping through midground gaps between dish shapes [2].
- **Condiment proximity**: place sauce/condiment ramekin primitives within 1 to 3 inches of the dish item they complement [2].
- **Seam offset rotation**: apply a default clockwise yaw rotation offset to bottle/can primitives to hide vertical manufacturing seams from the camera lens [1, 2].
- **Trademark clear zone**: maintain an unobstructed clear zone around the beverage primitive's logo bounding box [1, 4].

### 5. Output format
Output a valid JSON object strictly conforming to the `CokeMeals3DTablescapeBlueprint` schema. Ensure all Y coordinates for table primitives are ≤ 0.50.

### Execution summary

| Rule category | Blueprint implementation constraint | Grounding source |
|---|---|---|
| Camera and horizon | ~30° angle; table rear edge clamped at Y ≤ 0.50 (lower 50% of frame) | Visual Brand Guidelines [2], ShRED OS [4] |
| Co-hero weighting | 50% primary co-heroes (main + drink), 30% sides, 20% tertiary accents | Visual Brand Guidelines [1] |
| Grid anchors | Main entree at lower-left Phi Grid; hero beverage at upper-right Golden Triangle | Visual Brand Guidelines [2], Golden Triangle [5] |
| Odd/even engine | Auto-inject +1 condiment ramekin when N is even, to form 3D depth triangles | Visual Brand Guidelines [2], FoodShot AI [6], We Eat Together [7] |
| Condiment proximity | Sauces/ramekins sit within 1–3 inches of their corresponding dish | Visual Brand Guidelines [2] |
| Directional vectors | Cutlery and napkin curves point inward toward food focal points, never off-canvas | Visual Brand Guidelines [2], FoodShot AI [6] |
| Brand protection | Clockwise rotation offset on beverages to conceal seams; clear logo line of sight | Visual Brand Guidelines |

---

## Updated specification: 30° perspective, 50% horizon, variable component counts

How the agent must construct 3D primitive scenes (bounding boxes, cylinders and spatial corridors) to enforce the 30° perspective, maintain the horizon rule and handle variable component counts.

### 1. The 30° perspective and 50% horizon boundary rules

```
+-------------------------------------------------------+  Y = 1.0 (top frame)
|                                                       |
|             BACKGROUND / ENVIRONMENT ZONE             |  Reserved for bokeh,
|             (dining room, garden, or copy)            |  background context, or
|                                                       |  ShRED headline text [1, 4].
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - +  Y = 0.50 (MAXIMUM TABLE HORIZON)
|             TABLE TOP SUBSTRATE ZONE                  |  All table surface,
|   [Hero Beverage]                 [Side Dish]         |  plated food, condiments,
|          \                       /                    |  and cutlery MUST sit below
|           \                     /                     |  this Y-boundary line [1, 2].
|              [PRIMARY MAIN ENTREE]                    |
+-------------------------------------------------------+  Y = 0.0 (bottom frame / forefront)
```

1. **The 50% horizontal rule (table horizon boundary)**
   - The rear edge of the table (horizon line) must be clamped at or below Y = 0.50 (the vertical midpoint of the image canvas) [1].
   - Lower 50% (table substrate zone): houses all 3D food primitives, plateware, beverage containers and tabletop props [4, 5].
   - Upper 50% (environment and context zone): reserved for background bokeh (soft environmental dining context, greenery or kitchen depth) and ShRED copy reserves for headlines or pricing [1].
2. **3D depth layering (Z-axis placement)**
   - Immediate foreground (Z = 0–0.2): primary main entree (upfront, tack-sharp focal plane) [4, 7].
   - Midground (Z = 0.2–0.4): hero beverage + secondary side dishes (positioned laterally/diagonally behind the main plate) [4, 5].
   - Background (Z > 0.5): soft-focus environmental depth (never table elements) [1].

### 2. The 3D odd vs. even rule engine (depth triangles)

At a 30° camera angle, objects group across both the horizontal (X) and depth (Z) axes. Even numbers create linear "wall" barriers, whereas odd numbers create dynamic 3D triangular depth loops that pull the viewer from the foreground entree to the midground beverage [8].

```
Even input (2 items - flat depth):          Odd balancing (3 items - 3D depth loop):

      [HERO BEVERAGE] (midground)                [HERO BEVERAGE] (midground right)
             |                                          /           \
             |                                         /             \
      [MAIN ENTREE] (foreground)                [MAIN ENTREE] --- [CONDIMENT RAMEKIN]
                                                 (foreground)     (midground left)
```

**Automated 3D component compensation protocol:** when the user brief provides an even number of total inputs (N = 2, 4, 6), the layout agent automatically injects a Layer 3 accent primitive (ramekin, garnishes, sauce dish) to form an odd-numbered 3D pyramid [5].

- **Brief input N = 2** (1 main + 1 beverage)
  - Agent action: inject +1 condiment ramekin / lime dish primitive [5, 9].
  - 3D placement: place the main entree at (X_left, Z_front), the hero beverage at (X_right, Z_mid) and the ramekin at (X_far-left, Z_mid). This forms a 3D triangle across the table surface [5, 8].
- **Brief input N = 4** (1 main + 1 drink + 2 sides)
  - Agent action: inject +1 napkin / sauce boat primitive to reach 5 items [9, 10].
  - 3D placement: stagger the 3 secondary/tertiary shapes in a crescent arc in the midground behind the main plate, preventing items from blocking each other along the Z-axis [5, 11].

### 3. Explicit 3D layout DOs and DON'Ts

**Perspective, camera angle and table horizon**
- DO clamp the rear edge of the table at or below the 50% horizontal line (Y ≤ 0.50) [1].
- DO shoot from a ~30° low-to-medium angle, keeping the primary entree upfront in the immediate foreground to emphasize texture and height [2, 3].
- DO use moderate depth of field (f/4–f/5.6) so the upfront entree and beverage are in sharp focus while the upper background falls into a soft, warm bokeh [2].
- DON'T allow the table surface to extend into the top 50% of the frame, as this crushes the background environment and flattens the 3D perspective [1, 6].
- DON'T shoot overhead (90°) or hyper-low (0°) when a 30° medium/tight shot is requested [2, 13].

**3D component staggering and spatial occlusion**
- DO stagger midground side dishes and beverages diagonally or laterally relative to the front entree, so secondary items are not hidden directly behind the main plate [5, 11].
- DO position condiment and sauce primitives within 1 to 3 inches of the specific food item they accompany [5, 14].
- DO angle cutlery shapes inward toward the main dish or glass, to act as 3D leading lines entering the frame [5].
- DON'T stack items directly behind one another along the camera's line of sight [11].
- DON'T point cutlery handles or directional props toward the outer canvas edges [5, 17].

**Brand compliance and visual hierarchy**
- DO allocate visual weight as: 50% primary co-heroes (main entree + beverage), 30% secondary sides and 20% tertiary accents [4, 17].
- DO ensure the "Coca" portion of the Spencerian script logo remains fully visible, in focus and slanting diagonally upward, even if the bottle body is tightly cropped [16].
- DO apply a clockwise rotation offset to bottles or cans to hide vertical manufacturing seams from the lens [20].
- DON'T allow side dishes or cutlery primitives to overlap or obstruct the beverage trademark bounding box [5, 18].
- DON'T include more than 2.5 human faces in the background environment [6, 21].

### 4. Summary checklist for 3D agent execution
1. **Set horizon clamp:** lock the table's rear edge at Y ≤ 0.50 [1].
2. **Evaluate input count (N):** if N is even, inject +1 Layer 3 condiment primitive to establish an odd-numbered 3D depth triangle [5].
3. **Anchor co-heroes:** place the main entree in the lower-left foreground (Phi Grid / Golden Triangle intersection) and the hero beverage in the midground-right [5].
4. **Stagger secondary shapes:** distribute side dishes along diagonal vectors behind the main plate, ensuring no Z-axis occlusion [5, 11].
5. **Direct vectors:** point cutlery and sauce drizzles inward toward the hero food [5].
6. **Reserve background:** keep the upper 50% clean for environmental depth/bokeh and ShRED campaign messaging [1].

````

## Appendix C: blueprint JSON schema (verbatim, docs/tablescape/source/blueprint.schema.json)

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "CokeMeals3DTablescapeBlueprint",
  "type": "object",
  "required": [
    "canvas_metadata",
    "camera_spec",
    "horizon_clamp",
    "visual_mass_distribution",
    "primitives"
  ],
  "properties": {
    "canvas_metadata": {
      "type": "object",
      "required": ["aspect_ratio", "shopper_zone"],
      "properties": {
        "aspect_ratio": {
          "type": "string",
          "enum": ["1:1", "2:3", "1:3", "3:2", "3:1"],
          "description": "ShRED / ShopX POI Base Ratios [4, 5]."
        },
        "shopper_zone": {
          "type": "string",
          "enum": ["Transition", "Impulse", "Destination"],
          "description": "Determines copy reserve blocks and humanity presence [4, 6]."
        }
      }
    },
    "camera_spec": {
      "type": "object",
      "required": ["pitch_angle_degrees", "focal_length_mm", "aperture"],
      "properties": {
        "pitch_angle_degrees": {
          "type": "number",
          "default": 30.0,
          "description": "Diner's eye camera tilt angle (30° - 45°) [2, 7]."
        },
        "focal_length_mm": { "type": "number", "default": 50.0 },
        "aperture": { "type": "string", "default": "f/4 - f/5.6" }
      }
    },
    "horizon_clamp": {
      "type": "object",
      "required": ["max_table_rear_y_normalized"],
      "properties": {
        "max_table_rear_y_normalized": {
          "type": "number",
          "maximum": 0.50,
          "description": "Table surface horizon MUST sit at or below Y = 0.50 (lower 50% of canvas)."
        }
      }
    },
    "visual_mass_distribution": {
      "type": "object",
      "properties": {
        "primary_co_heroes_pct": { "type": "number", "const": 50.0 },
        "secondary_sides_pct": { "type": "number", "const": 30.0 },
        "tertiary_accents_pct": { "type": "number", "const": 20.0 }
      }
    },
    "primitives": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "component_name",
          "layer",
          "shape_type",
          "center_coordinates",
          "dimensions",
          "rotation_euler_deg"
        ],
        "properties": {
          "id": { "type": "string" },
          "component_name": { "type": "string" },
          "layer": {
            "type": "string",
            "enum": [
              "Layer_1_Primary_CoHero",
              "Layer_2_Secondary_Side",
              "Layer_3_Tertiary_Accent"
            ]
          },
          "shape_type": {
            "type": "string",
            "enum": ["cylinder", "flattened_cylinder", "bounding_box"]
          },
          "center_coordinates": {
            "type": "object",
            "required": ["x", "y", "z"],
            "properties": {
              "x": {
                "type": "number",
                "minimum": -1.0,
                "maximum": 1.0,
                "description": "Horizontal axis (-1.0 Left to +1.0 Right)"
              },
              "y": {
                "type": "number",
                "minimum": 0.0,
                "maximum": 0.50,
                "description": "Vertical canvas height (Clamped to <= 0.50)"
              },
              "z": {
                "type": "number",
                "minimum": 0.0,
                "maximum": 1.0,
                "description": "Depth axis (0.0 Immediate Foreground to 1.0 Background)"
              }
            }
          },
          "dimensions": {
            "type": "object",
            "required": ["width", "height", "depth"],
            "properties": {
              "width": { "type": "number" },
              "height": { "type": "number" },
              "depth": { "type": "number" }
            }
          },
          "rotation_euler_deg": {
            "type": "object",
            "required": ["pitch", "yaw", "roll"],
            "properties": {
              "pitch": { "type": "number" },
              "yaw": {
                "type": "number",
                "description": "Includes clockwise rotation offset for brand seam hiding [1, 2]."
              },
              "roll": { "type": "number" }
            }
          },
          "directional_vector_target_id": {
            "type": "string",
            "description": "Target primitive ID for cutlery or leading lines to point toward [2, 8]."
          }
        }
      }
    }
  }
}

```
