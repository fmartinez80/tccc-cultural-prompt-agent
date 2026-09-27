# tablescape (test build)

SceneSpec → rule-based layout → headless three.js proxy render. First slice of `docs/tablescape/PLAN.md` (branch `claude/upbeat-curie-2k9ion`), with the composition rules from the 30° / 50% table-horizon spec.

```
npm install          # three + playwright (uses the preinstalled Chromium)
npm test             # rule checks on every spec x archetype, no WebGL needed
npm run render       # writes out/<spec>/<archetype>/{labeled,clean}.png, layout.json, report.json + out/contact-sheet.png
```

- `blueprints/`: the three test scenes plus `scene-4-carrier-demo` (a plate on a tray, exercising the carrier path) in Fernando's ErgonomicSpatialLayoutBlueprint schema (`schema/ergonomic-blueprint.schema.json`); `src/blueprint.js` converts them to SceneSpecs. Raw SceneSpecs can also go in `specs/`.
- `registry/objects.json`: real sizes in meters, each with its knowledge-base source.
- `rules/rules.json`: camera (30°, 50 mm, 16:9), 50% table-horizon limit, spacing, condiment 1–3 in, occlusion limits.
- `rules/serving-stacks.json` + `src/stack.js`: the entree's serving stack. A vessel (plate, bowl, basket, board, paper_wrap; default plate) and an optional carrier under it (tray, board, butcher_paper; default none), which vessels each carrier takes, and how many condiments or sides may share the vessel or the carrier. Real sizes are checked too, with an error that says what doesn't fit. In a blueprint, the main's `base_layer_type` picks the stack (`plate_on_tray` = plate on a tray) or `x_serving_stack: {vessel, carrier}` sets it; an `ON_BOARD` item shares the vessel when its `base_layer_type` names it, otherwise the carrier, or `x_share` says which.
- `src/solve.js`: odd/even enrichment, two archetypes (Center Hero = knowledge-base rules, Phi Diagonal = composition doc 2), camera auto-fit, pre-render checks.
- `src/render/page.js`: proxy geometry (contour bottle lathe, plates, bowls, food masses), label overlay, flat ID pass for occlusion and visual mass.

The 50% rule is checked on the table-top surface only; objects on the table may rise above it.
