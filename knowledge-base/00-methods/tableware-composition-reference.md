---
status: DRAFT — MIGRATED FROM AN EARLIER STANDALONE DOCUMENT (v2.0), NEEDS SME/HUMAN REVIEW
scope: generic plate/vessel dimensions and scene-composition rules for any food photography prompt in this KB — independent of country/region and independent of the Coca-Cola product itself (see `01-brand/coca-cola-guidelines.md` for the Coca-Cola-SKU-specific composition rules that build on this document)
source: migrated from "TABLEWARE COMPOSITION REQUIREMENTS - AGENTIC SYSTEM" (an earlier project document, v2.0), reorganized to split out Coca-Cola-specific content into `01-brand/coca-cola-guidelines.md`
date_migrated: 2026-09-24
---

# Tableware & scene-composition reference

This file holds the reusable, brand-agnostic composition rules and vessel dimensions for staging any food photography scene in this KB — how big a plate is, how a bowl and a plate scale relative to each other, how to orient an oval platter, how many supporting elements a scene should carry. `01-brand/coca-cola-guidelines.md` holds everything specific to placing the Coca-Cola product itself (hero-zone rule, depth hierarchy, bottle/can dimensions, SKU selection logic) and cross-references this file for the plate/vessel side of a composition.

**This document's regional coverage is currently a placeholder, not a gap that's been overlooked** — see §5 below. The working decision (2026-09-24) is to populate regional/cultural tableware overrides as each country/region file in `02-culture/regions/` gets researched, rather than researching all 18 target markets' tableware conventions speculatively in advance. See `DECISIONS.md` for the reasoning.

---

## 1. Core composition framework

- **Hero Zone Rule**: the vertical center third of the frame is the hero zone. It must contain the hero dish/plate and (when Coca-Cola is in the scene) the hero Coca-Cola SKU — see `01-brand/coca-cola-guidelines.md`. Everything else composes around this protected zone. This keeps the composition crop-flexible across aspect ratios (1:1, 4:5, 16:9, 9:16).
- **Depth Hierarchy Rule**: composition is layered front-to-back —
  - Layer 1 (Foreground): hero dish + hero beverage
  - Layer 2 (Midground): supporting dishes, bread, clustered condiments
  - Layer 3 (Background): a second place setting, additional elements

## 2. Plate and vessel dimensions

**Entree plates (hero-zone plate):**

| Element | Dimensions | Notes |
|---|---|---|
| Entree plate — Standard (round) | 26–28cm diameter | Default |
| Entree plate — Large (round) | 30cm diameter | Statement dishes |
| Entree plate — Small (round) | 22–24cm diameter | Appetizer hero |
| Entree plate — Rectangular | 28–32cm L × 18–22cm W | Modern/Asian presentation |

**Place setting components (Western default — see §5 for regional variation):**

| Element | Dimensions | Placement rule |
|---|---|---|
| Napkin (folded rectangular) | 20cm × 10cm | Always under utensils |
| Fork/Knife | 20cm length | Always right side of entree plate |
| Spoon | 18cm length | Always right side of entree plate |
| Napkin + utensils | Clustered unit | Position as a single element |

**Communal main dishes:**

| Element | Dimensions | Scale relationship | Orientation notes |
|---|---|---|---|
| Communal bowl (round) | 30–35cm diameter | 1.2–1.3× hero plate | Traditional serving |
| Communal platter (ovular) | 35–40cm L × 25–28cm W | 1.2–1.3× hero plate | Formal presentation |
| Rectangular serving vessel (baking pan) | 35–40cm L × 25–30cm W | 1.2–1.3× hero plate | Casseroles, baked dishes, rustic |
| Ovular serving vessel | 32–38cm L × 22–26cm W | 1.2–1.3× hero plate | Roasts, fish, elegant family-style |

**Side dishes:**

| Element | Dimensions | Scale relationship |
|---|---|---|
| Side bowl — medium (round) | 15–18cm diameter | 0.5–0.6× hero plate |
| Side bowl — small (round) | 12–15cm diameter | 0.5–0.6× hero plate |

**Bread service:**

| Element | Dimensions | Scale relationship | Orientation notes |
|---|---|---|---|
| Bread basket (round) | 22–25cm diameter | Similar to hero plate | Traditional, casual |
| Bread basket (ovular) | 28–32cm L × 18–20cm W | Similar to hero plate | Elongated loaves, formal |
| Cutting board (rectangular) | 30–35cm L × 20cm W | Larger than hero plate | Rustic, artisan bread, cheese |
| Cutting board (square) | 25–30cm × 25–30cm | Similar to hero plate | Modern presentation |

**Condiments:**

| Element | Dimensions | Scale relationship |
|---|---|---|
| Condiment ramekin (round) | 6–8cm diameter | 0.25–0.3× hero plate |
| Condiment bowl/dish | 10–12cm diameter | 0.25–0.3× hero plate |

## 3. Place-setting structure

- **Standard layout**: entree plate anchors the setting; drink at top right of the entree plate; napkin + utensils clustered to the right of the plate. Utensils always sit on top of the folded napkin.
- **Hero place setting**: foreground/midground, anchored in the vertical center third, larger/closer to the viewer.
- **Second place setting** (if a brief calls for more than one diner): background, on the *opposite* side of the table from the hero setting — depth, not width. This uses depth rather than creating horizontal clutter, and keeps the hero setting uncontested for attention.

## 4. Supporting-element placement rules

- **Communal main dish** (if present): position between the center third and the left third, in the midground/background — creates left-to-right eye flow toward the hero. Round bowls take any rotation; ovular platters and elongated rectangular vessels default to their long axis perpendicular to the camera (running front-to-back), to minimize horizontal frame width. A rectangular vessel ≤25cm wide can run parallel to the camera instead; wider than 25cm should stay perpendicular.
- **Side dishes** (if present): maximum 1–2, higher visual priority than condiments; primary position is the left zone near the communal dish if present, secondary is background center, tertiary is the right side if bread isn't there. Keep them separated from each other (5–8cm minimum) and mostly visible in standard crops.
- **Bread service** (if present): primary position is the right third, midground/background (an alternative to a communal dish on the left, balancing the composition); a round basket takes any rotation, an ovular basket or elongated loaf runs perpendicular to the camera, a cutting board runs perpendicular or parallel depending on its own width, a square cutting board can run straight or at a 45° diamond angle depending on formality. A cutting board with bread plus butter/spreads/cheese is treated as one clustered unit; a large board (35cm+) sits further back so it doesn't dominate the frame; rustic scenes favor a cutting board, formal scenes favor a basket.
- **Condiments** (if present): maximum 2–3 small vessels, lower priority than side dishes, placed in the background center so they read as accessible to every place setting, clustered tightly (1–3cm apart or touching, as one visual unit) — condiments can be partially cropped without loss.

## 5. Regional/cultural overrides — PLACEHOLDER, not yet populated

**This section is a structural placeholder, deliberately left unpopulated for now.** A 2026-09-24 working decision was to fill in each region's tableware/eating-custom conventions as that region's own `02-culture/regions/**` file gets researched, rather than researching all target markets' tableware speculatively before any of them have a country file. Every country file's dish-entry schema already has an "Utensils/eating customs" field (`country-file-schema.md` §4.5) — that's the primary, sourced record of a region's cutlery/vessel conventions; this table should be filled in by aggregating what those entries establish, not by independent, disconnected research.

| Market | Status | Notes |
|---|---|---|
| United States | Partial | Fork/knife Western default confirmed via `us.md`/`us-northeast.md` dish entries; no dedicated tableware-dimension research yet |
| United Kingdom | Not started | |
| Germany | Not started | |
| Spain | Not started | |
| Mexico | Not started | |
| Argentina | Not started | (Uruguay, the KB's pilot country and a close neighbor, already documents Continental fork-left/knife-right style at MEDIUM confidence and the mate gourd/bombilla as a distinct vessel — worth checking for overlap when Argentina is researched) |
| Brazil | Not started | |
| Turkey | Not started | |
| South Africa | Not started | |
| Nigeria | Not started | |
| China | Not started | (chopsticks/rests, communal serving bowls, and rice-bowl conventions are near-certain to matter here — flagged as an expected, not yet confirmed, need) |
| India | Not started | (thali plates/divided serving, hand-eating conventions in some contexts, and regional variation within the country are near-certain to matter here — flagged as an expected, not yet confirmed, need) |
| Japan | Not started | (chopsticks/rests, small individual dishes rather than one large plate, rice bowls — flagged as an expected, not yet confirmed, need) |
| Thailand | Not started | (fork-and-spoon, not fork-and-knife, is a commonly cited convention — flagged as an expected, not yet confirmed, need) |
| Philippines | Not started | |
| Pakistan | Not started | |
| Bangladesh | Not started | |
| Indonesia | Not started | |

**Do not treat the "expected" notes above as sourced facts** — they're educated flags for what a future research pass should check first, not claims this KB currently stands behind. When a country file is built, its own researched, cited "Utensils/eating customs" fields supersede any flag here.

## 6. Vessel shape and orientation logic

- **Round vessels** (plates, bowls, baskets): no orientation constraints, naturally symmetrical, use freely.
- **Ovular vessels** (platters, bread baskets, serving dishes): default to the long axis perpendicular to the camera (running front-to-back), to minimize horizontal frame width and create depth; exception only if compositionally necessary and width allows.
- **Rectangular vessels** (baking pans, serving vessels, plates, cutting boards): default perpendicular to the camera. Width ≤20cm can run parallel; 20–25cm is a judgment call; >25cm should stay perpendicular.
- **Square vessels** (cutting boards, plates): either straight (edges parallel to the frame) or a 45° diamond angle, chosen for scene formality/available space.

**When to use each shape**: round for traditional plating, soups/stews/liquid dishes, casual-to-formal dining, maximum flexibility. Ovular for formal presentations, elongated foods (whole fish, roasts, long loaves), elegant family-style serving. Rectangular for baked dishes (casseroles, lasagna), rustic/modern aesthetic, some Asian cuisine presentation, cutting boards for bread/cheese. Square for a modern/contemporary aesthetic, specialty presentations, smaller-format items.

## 7. Spacing rules

- Elements must be evenly spaced or deliberately clustered — never randomly or awkwardly placed.
- **Clustered as a single visual unit**: napkin + utensils; a condiment group (2–3 vessels); bread + butter/spreads; a cutting board + its accompaniments.
- **Kept separated**: side dishes from each other (5–8cm minimum); major elements across the table (hero setting, communal dish, bread service).
- **Minimum clearances**: hero plate to utensils, 3–5cm; side dishes to each other, 5–8cm; condiments to each other, 1–3cm (clustered tight); bread basket/cutting board to other elements, 5–6cm.
- **Frame-edge safety margins**: hero elements need 10–15% clearance from all edges (the widest composition allowance in the scene); supporting elements need only about 5% and can be partially cropped; condiments can touch the edge outright — they're disposable in a tight crop.

## 8. Decision-tree scenarios

These are composition templates, not fixed recipes — adapt element choices to what the specific dish/brief actually calls for (per `country-file-schema.md` §7.5's "don't checklist-include every documented fact" rule).

- **A — Single place setting, simple meal**: hero dish (round or rectangular plate) in the center third; a beverage at the plate's top right; napkin + utensils to the right; optionally 1–2 side dishes and/or clustered condiments in the background.
- **B — Single place setting, larger shared beverage present**: as above, but the shared beverage vessel sits in the midground rather than directly beside the plate, with an individual glass/cup at the plate's top right for the diner.
- **C — Multiple place settings, one shared beverage**: hero setting in the foreground center third; the shared beverage vessel in the midground, between the center and one side third; a second place setting in the background, opposite the hero setting (not beside it); optional communal dish, side dishes, and bread service filling out the remaining zones.
- **D — Multiple place settings, full communal spread**: as C, plus a communal main dish (left zone, oriented per its shape), 1–2 side dishes (left zone or background center, separated from each other and the main dish), bread service (right third), and 2–3 clustered condiments — capped at roughly 5–6 total supporting vessels so the scene doesn't overcrowd.
- **E — Rustic single shared baking dish** ("family-style from the center dish" rather than individually plated): a large rectangular baking pan as the hero element, oriented per its own width; a cutting board with bread on the opposite side; a small side bowl; clustered condiments. This register reads as informal/family-style rather than restaurant-plated.
- **F — Elevated/minimal single-serving presentation**: hero dish in the center third, one beverage, at most one side element — a clean, sophisticated register for a premium or formal-restaurant brief.

## 9. Validation checklist

Before finalizing a composition, check:

- Hero dish (and hero beverage, if Coca-Cola is in the scene) sits in the vertical center third.
- A second place setting, if present, is opposite the hero setting, not beside it.
- Side dishes are separated from each other (5–8cm-equivalent spacing); condiments are clustered as one unit.
- All supporting elements read as intentionally placed — evenly spaced or clustered, never scattered at random.
- Total supporting vessels stay at roughly 5–6 or fewer.
- Hero elements have generous edge clearance (10–15%-equivalent); supporting elements can crop tighter (~5%).
- Ovular vessels run perpendicular to the camera by default; rectangular vessels wider than roughly 25cm do too.
- A cutting board with its accompaniments (bread, butter, cheese) is treated as one clustered unit.
- Vessel shapes match the dish type and scene formality (round for traditional/casual, ovular for formal/elongated foods, rectangular for baked/rustic, square for modern).
- Any Coca-Cola-specific rules (hero-zone/depth-hierarchy/SKU selection) — see `01-brand/coca-cola-guidelines.md` — are checked separately; this checklist covers the plate/vessel side only.
