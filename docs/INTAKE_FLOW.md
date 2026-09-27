# Intake → Tailored Scene (front-end flow)

This is the front half of the pipeline: the exchange between the operator and the Cultural Prompt Agent that turns a short intake into a tailored meal and scene. It ends by producing the `SceneSpec`, which the tablescape composer ([`tablescape/PLAN.md`](./tablescape/PLAN.md)) turns into layout options.

```
Intake ─► 1 Meal prep ─► 2 Plating ─► 3 Sides + accompaniments ─► 4 Scene details ─► 5 Camera
                                                                                         │
                     Meal summary + prompt manifest ◄─ 6 Layout pick (tablescape) ◄─ SceneSpec
                                     │
                                     ▼
                              Image generation
```
Every scene is composed at **16:9**. Crops are made in post (priority: 1:1, 4:5, 2:3, 3:2, 5:4, 9:16), so the operator never picks an aspect ratio.

## One pattern for every decision step

Every step works the same way, and the layout pick at the end (step 6) uses the same pattern:

- **One way:** the agent finds the dish is only served one way in this country. It fills in the detail and moves on without asking.
- **Several ways:** the agent offers up to 3 options, with **A marked as suggested**. The operator picks one.
- The chosen detail goes into **both the prompt and the meal summary**.

This lets the front end be a single reusable "decision card" component. Suggested data shape per step:

```jsonc
{
  "step": "plating",                        // prep | plating | sides | scene | layout
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
| Operating Unit | **owns the rules:** brand and legal rule set, and the SKU catalog available in that OU | `operatingUnit` |
| Local Region (country) | **cultural knowledge is per country** (how the dish is prepared, plated and served locally). It may later be clustered by OU; v1 is country-specific | `country` (ISO code, e.g. `MX`) |
| Product SKU | beverage proxy (package, size) and trademark rules | `sku.id`, `sku.package`, `sku.volumeMl` |
| Include a branded glass? (Y/N) | Y adds a branded bell-shaped Coca-Cola glass, poured from the SKU, to **every place setting**. Interim question until rules by setting and SKU size are set (`tablescape/glass-rules.json`) | `sku.glass` |
| Hero Dish | starting point for steps 1–3 | `entree.name` |
| Side Dish Request | pre-fills step 3. The agent checks it for cultural fit and still offers the common alternatives | seeds `accompaniments[]` |
| Occasion | mood and environment in the prompt; sets the time of day when unambiguous (breakfast → morning), which selects the lighting | `occasion` |

## Steps and what each one writes

### 1. Primary meal detail (prep)
The agent identifies the meal and the conditions it's enjoyed in within the country. It proceeds if there's one way, or offers Meal Prep A (suggested) / B / C.
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
- **Surface:** the food always sits on a surface, **never in a hand**. For home and restaurant it's a dining table. For **on the go**, the agent suggests the surface from the country's knowledge base (decision card, A suggested): park or picnic table, bench, food-truck counter, street ledge. Writes `scene.surface`. Narrow surfaces (bench, counter) fit fewer items, and the layout step says so if the selection doesn't fit.
- **Place settings:** 2 people and groups get **the same place setting per diner**: the same main, sides, condiments and napkin set, and the **SKU is every diner's drink**. No other drinks are shown (v1).
- **Time of day:** morning · midday · golden hour · evening. Taken from the occasion when it's unambiguous, otherwise asked here. Writes `scene.time`.
- **Drives:**
  - table type and size (2-top, 4-top, long table, café table)
  - the arrangement style (group and family map to family-style sharing)
  - what fills the **upper 50 % environment zone** (home kitchen, restaurant interior, garden), which is prompt-only and never table elements
  - the **≤ 2.5 faces** rule for background people
  - **the lighting.** Setting + venue + time of day select a lighting preset automatically ([`tablescape/lighting-presets.json`](./tablescape/lighting-presets.json)). The operator never picks it. The meal summary shows it with its reason, for example "Lighting: natural window daylight, because this is a meal at home in the morning". The preset also adds a sentence about light through the SKU (a red-amber glow for glass and PET, a rim highlight for cans).
  - the **genre line** at the start of the prompt (for example "Photorealistic street food photography" for on-the-go, or "Photorealistic restaurant food photography").

### 5. Camera
These are **dropdowns**, not decision cards. The agent doesn't suggest them from cultural knowledge. Each has a default, so the operator can skip the step. There's no aspect-ratio or shopper-zone choice: scenes render at 16:9 and ShRED crops happen in post.
- **Look:** *Close-up hero* (default) · *Table in context* · *Wide scene*. Each look bundles lens, aperture and focus, so the operator never picks an f-stop. Writes `camera.look`.
- **Angle:** *Low, near eye level* · *Diner's eye* (default) · *Looking down*. Writes `camera.angle`.
- The technical values behind the looks and angles are placeholders until the team settles the lenses.

Look and angle presets, their prompt sentences and their hidden technical values live in [`tablescape/camera-options.json`](./tablescape/camera-options.json). See `tablescape/PLAN.md` §4a.

### 6. Layout pick
The tablescape composer returns up to 3 layout options for the locked elements. The operator picks one, using the same decision-card pattern. See [`tablescape/PLAN.md`](./tablescape/PLAN.md).

## The odd/even rule shown to the operator

After step 3, the composer counts the table items (main + bottle + the branded glass if the operator chose one + sides + condiments + the napkin set, where napkin and cutlery count as one). If the count is even, the composition rules add one small accent to make it odd (see `tablescape/PLAN.md` §5.2).
- **The accent is chosen by the agent from the country's knowledge base**, for example a lime dish (MX), pickled onions, kimchi or a chutney ramekin. It's never a generic ramekin when a local one exists.
- It appears in the **meal summary as "added for composition"**, and the operator can swap it for another accent from the same list. It will show up in the final image, so the operator should see it.

## Resulting `SceneSpec` (example)

```jsonc
{
  "specVersion": "0.2",
  "operatingUnit": "LATAM",
  "country": "MX",
  "occasion": "weekday lunch",
  "scene":  { "setting": "indoor", "venue": "restaurant", "party": "1", "time": "midday", "surface": "table-2top" },
  "camera": { "look": "close-hero", "angle": "diners-eye" },
  "sku":    { "id": "coke-classic-8oz-glass", "package": "contour-glass-bottle", "volumeMl": 237, "glass": false },
  "entree": { "name": "tacos al pastor", "prep": "trompo-shaved pork, pineapple, cilantro, onion", "vessel": "plate", "massClass": "flat" },
  "accompaniments": [
    { "id": "SIDE_1",  "name": "frijoles charros", "role": "side",  "vessel": "bowl",       "pairsWith": "MAIN" },
    { "id": "SAUCE_1", "name": "salsa verde",      "role": "sauce", "vessel": "small-bowl", "pairsWith": "MAIN" }
  ],
  "props":  [ { "role": "napkin-set", "napkinShape": "rect", "cutlery": ["fork", "knife"], "targets": "MAIN" } ],
  "options": { "max": 3 }
}
```

The operator answered N to the glass question, so there's no glass. `camera` holds preset ids. The composer looks up the hidden lens, aperture, focus and pitch in `camera-options.json`. Lighting isn't in the spec: it's derived from `scene` via `lighting-presets.json`.

## Decided
- **Aspect ratio:** every scene renders at 16:9; ShRED ratios are cropped down in post. No format step.
- **On the go:** always on a surface (park table, bench, food-truck counter…), never in a hand.
- **2 people and groups:** every diner has the same place setting, and the SKU is the only drink.
- **OU vs country:** the Operating Unit owns the rules (brand, legal, SKU catalog). Cultural knowledge is per country, possibly clustered by OU later.

## Gaps to decide

1. **2-person arrangement:** two layouts are proposed. **Corner:** the diners sit around one table corner. **Face-to-face:** the diners sit at the left and right ends, at the same depth. Offer both as layout options, or have the agent pick one per country and scene? See `tablescape/PLAN.md` §5.6.
2. **Side Dish Request vs agent suggestions.** Proposal: the request is pre-selected as option A if it's culturally plausible. Otherwise the agent flags it and still lets the operator keep it.
3. **Occasion vocabulary.** Occasion needs a closed list (breakfast, weekday lunch, family dinner, celebration, game night…) so it can drive environment and lighting consistently.
