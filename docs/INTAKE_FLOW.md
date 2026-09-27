# Intake → Tailored Scene (front-end flow)

This is the front half of the pipeline: the exchange between the operator and the Cultural Prompt Agent that turns a short intake into a tailored meal and scene. It ends by producing the `SceneSpec`, which the tablescape composer ([`tablescape/PLAN.md`](./tablescape/PLAN.md)) turns into layout options.

```
Intake ─► 1 Meal prep ─► 2 Plating ─► 3 Sides + accompaniments ─► 4 Scene details ─► 5 Format + camera*
                                                                                         │
                     Meal summary + prompt manifest ◄─ 6 Layout pick (tablescape) ◄─ SceneSpec
                                     │
                                     ▼
                              Image generation
```
\* Step 5 is proposed. Aspect ratio and shopper zone are required by the composition rules but aren't in the intake yet (see gaps). Camera lens and angle are dropdowns.

## One pattern for every decision step

Every step works the same way, and the layout pick at the end (step 6) uses the same pattern:

- **One way:** the agent finds the dish is only served one way in this region. It fills in the detail and moves on without asking.
- **Several ways:** the agent offers up to 3 options, with **A marked as suggested**. The operator picks one.
- The chosen detail goes into **both the prompt and the meal summary**.

This lets the front end be a single reusable "decision card" component. Suggested data shape per step:

```jsonc
{
  "step": "plating",                        // prep | plating | sides | scene | format | layout
  "status": "choose",                       // resolved (one way) | choose (several ways)
  "options": [
    { "id": "A", "suggested": true,  "label": "On a flat comal-style plate", "detail": "…", "rationale": "most common in CDMX taquerías", "sources": ["kb:mx/tacos#plating"] },
    { "id": "B", "suggested": false, "label": "In a paper-lined basket",     "detail": "…", "rationale": "…", "sources": ["…"] },
    { "id": "C", "suggested": false, "label": "Wrapped in foil",             "detail": "…", "rationale": "…", "sources": ["…"] }
  ],
  "selected": "A",
  "writes": { "sceneSpec": ["entree.vessel"], "prompt": ["plating_phrase"], "summary": ["Plating"] }
}
```

Each option keeps its **rationale and knowledge-base sources**, so the cultural-authenticity reasoning stays attached to the final image.

## Intake fields

| Intake field | Used for | Lands in `SceneSpec` |
|---|---|---|
| Operating Unit | brand/legal rule set, SKU catalog available in that OU | `operatingUnit` |
| Local Region | cultural knowledge-base module (how the dish is prepared, plated and served locally) | `region` |
| Product SKU | beverage proxy (package, size) and trademark rules | `sku.id`, `sku.package` |
| Hero Dish | starting point for steps 1–3 | `entree.name` |
| Side Dish Request | pre-fills step 3. The agent checks it for cultural fit and still offers the common alternatives | seeds `accompaniments[]` |
| Occasion | mood and environment in the prompt; sets the time of day when unambiguous (breakfast → morning), which selects the lighting | `occasion` |

## Steps and what each one writes

### 1. Primary meal detail (prep)
The agent identifies the meal and the conditions it's enjoyed in within the region. It proceeds if there's one way, or offers Meal Prep A (suggested) / B / C.
- **Writes:** `entree.prep` (prompt text), and the **food-mass proxy class** (flat, heaped, stacked, wrapped). This sets the entree's silhouette height in the proxy.

### 2. Primary meal plating
The agent identifies how the dish is most commonly served (entree plate, wrapped in foil, basket, cutting board…). It proceeds, or offers Meal Dish A (suggested) / B / C.
- **Writes:** `entree.vessel`. This must come from the **closed vessel vocabulary** that has a proxy in the registry (`plate`, `foil-wrap`, `basket`, `board`, `bowl`, `tray`, `leaf`…). If the agent finds a plating with no proxy, it maps it to the nearest proxy class and keeps the exact wording for the prompt.

### 3. Side dishes + accompaniments
The agent identifies the most common sides and accompaniments (grain, vegetable, side dish, condiment) and what container each is served in. It proceeds, or offers A (suggested) / B / C.
- **Writes:** `accompaniments[]`, each with `name`, `role` (side, starch, salad, sharing-bowl, bread, condiment, sauce, garnish), `vessel`, and **`pairsWith`** (which dish a condiment belongs to). `pairsWith` is needed for the 1–3 inch condiment rule.
- **Composition check shown here:** the odd/even rule (see below) and the side-size rule. Side vessels should be 40–60 % of the entree's size. If a pick breaks it, the card warns, rather than the layout failing later.

### 4. Scene details
Defines the time and place of the meal. The operator picks one:

| | Indoor | Outdoor |
|---|---|---|
| At home | 1 person · 2 people · group | 1 person · 2 people · family |
| At a restaurant | 1 person · 2 people · group | 1 person · 2 people · group (outdoor dining) |
| On the go | — | 1 person · 2 people |

- **Writes:** `scene.setting` (indoor / outdoor), `scene.venue` (home / restaurant / on-the-go) and `scene.party` (1 / 2 / group / family).
- **Time of day:** morning · midday · golden hour · evening. Taken from the occasion when it's unambiguous, otherwise asked here. Writes `scene.time`.
- **Drives:**
  - table type and size (2-top, 4-top, long table, café table)
  - the arrangement style (group and family map to family-style sharing)
  - what fills the **upper 50 % environment zone** (home kitchen, restaurant interior, garden), which is prompt-only and never table elements
  - the **≤ 2.5 faces** rule for background people
  - **the lighting.** Setting + venue + time of day select a lighting preset automatically ([`tablescape/lighting-presets.json`](./tablescape/lighting-presets.json)). The operator never picks it. The meal summary shows it with its reason, for example "Lighting: natural window daylight, because this is a meal at home in the morning". The preset also adds a sentence about light through the SKU (a red-amber glow for glass and PET, a rim highlight for cans).
  - the **genre line** at the start of the prompt (for example "Photorealistic street food photography" for on-the-go, or "Photorealistic restaurant food photography").

### 5. Format + camera (proposed new step)
These are **dropdowns**, not decision cards. The agent doesn't suggest them from cultural knowledge. Each has a default, so the operator can skip the step.
- **Aspect ratio:** 1:1, 2:3, 1:3, 3:2, 3:1. Writes `format.aspectRatio`.
- **Shopper zone:** Transition, Impulse, Destination. Writes `format.shopperZone`. This and aspect ratio usually come from the media placement, so they may belong at intake instead.
- **Look:** *Close-up hero* (default) · *Table in context* · *Wide scene*. Each look bundles lens, aperture and focus, so the operator never picks an f-stop. Writes `camera.look`.
- **Angle:** *Low, near eye level* · *Diner's eye* (default) · *Looking down*. Writes `camera.angle`.
- The technical values behind the looks and angles are placeholders until the team settles the lenses.

Look and angle presets, their prompt sentences and their hidden technical values live in [`tablescape/camera-options.json`](./tablescape/camera-options.json). See `tablescape/PLAN.md` §4a.

### 6. Layout pick
The tablescape composer returns up to 3 layout options for the locked elements. The operator picks one, using the same decision-card pattern. See [`tablescape/PLAN.md`](./tablescape/PLAN.md).

## The odd/even rule shown to the operator

After step 3, the composer counts the table items (main + beverage + sides + condiments). If the count is even, the composition rules add one small accent to make it odd (see `tablescape/PLAN.md` §5.2).
- **The accent is chosen by the agent from the region's knowledge base**, for example a lime dish (MX), pickled onions, kimchi or a chutney ramekin. It's never a generic ramekin when a local one exists.
- It appears in the **meal summary as "added for composition"**, and the operator can swap it for another accent from the same list. It will show up in the final image, so the operator should see it.

## Resulting `SceneSpec` (example)

```jsonc
{
  "specVersion": "0.2",
  "operatingUnit": "LATAM",
  "region": "MX-CDMX",
  "occasion": "weekday lunch",
  "scene":  { "setting": "indoor", "venue": "restaurant", "party": "1", "time": "midday" },
  "format": { "aspectRatio": "3:2", "shopperZone": "Impulse" },
  "camera": { "look": "close-hero", "angle": "diners-eye" },
  "sku":    { "id": "coke-classic-8oz-glass", "package": "contour-glass-bottle" },
  "entree": { "name": "tacos al pastor", "prep": "trompo-shaved pork, pineapple, cilantro, onion", "vessel": "plate", "massClass": "flat" },
  "accompaniments": [
    { "id": "SIDE_1",  "name": "frijoles charros", "role": "side",  "vessel": "bowl",       "pairsWith": "MAIN" },
    { "id": "SAUCE_1", "name": "salsa verde",      "role": "sauce", "vessel": "small-bowl", "pairsWith": "MAIN" }
  ],
  "props":  [ { "role": "napkin" }, { "role": "cutlery", "targets": "MAIN" } ],
  "options": { "max": 3 }
}
```

`camera` holds preset ids. The composer looks up the hidden lens, aperture, focus and pitch in `camera-options.json`. Lighting isn't in the spec: it's derived from `scene` via `lighting-presets.json`.

## Gaps to decide

1. **Format isn't in the intake.** Aspect ratio and shopper zone are required. Add them to intake (if the placement is known up front) or as step 5.
2. **"On the go" has no table.** The horizon clamp, table zone and depth bands all assume a tabletop. Options: a separate handheld composition mode, or keep on-the-go out of the tablescape composer for v1 and use prompt-only guidance.
3. **2-person and group scenes.** The composition rules assume one co-hero pair (one main, one beverage). Proposal: one **hero place setting** follows the rules in full, and extra settings appear partially at the frame edges or midground as Layer 2 mass. Decide whether each extra setting also gets a beverage, and whether it must be the SKU.
4. **Side Dish Request vs agent suggestions.** Proposal: the request is pre-selected as option A if it's culturally plausible. Otherwise the agent flags it and still lets the operator keep it.
5. **Occasion vocabulary.** Occasion needs a closed list (breakfast, weekday lunch, family dinner, celebration, game night…) so it can drive environment and lighting consistently.
6. **Operating Unit vs Local Region.** Confirm that OU owns the SKU catalog and legal rules, and region owns the cultural knowledge base.
