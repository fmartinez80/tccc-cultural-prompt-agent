# tablescape (test build)

SceneSpec → rule-based layout → headless three.js proxy render. First slice of `docs/tablescape/PLAN.md` (branch `claude/upbeat-curie-2k9ion`), with the composition rules from the 30° / 50% table-horizon spec.

```
npm install          # three + playwright (uses the preinstalled Chromium)
npm test             # rule checks on every spec x archetype, no WebGL needed
npm run render       # writes out/<spec>/<archetype>/{labeled,clean}.png, layout.json, report.json + out/contact-sheet.png
```

- `specs/`: one SceneSpec per test scene (meal only, meal + side, meal + 3).
- `registry/objects.json`: real sizes in meters, each with its knowledge-base source.
- `rules/rules.json`: camera (30°, 50 mm, 16:9), 50% table-horizon limit, spacing, condiment 1–3 in, occlusion limits.
- `src/solve.js`: odd/even enrichment, two archetypes (Center Hero = knowledge-base rules, Phi Diagonal = composition doc 2), camera auto-fit, pre-render checks.
- `src/render/page.js`: proxy geometry (contour bottle lathe, plates, bowls, food masses), label overlay, flat ID pass for occlusion and visual mass.

The 50% rule is checked on the table-top surface only; objects on the table may rise above it.
