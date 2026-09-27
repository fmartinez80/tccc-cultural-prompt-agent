# tccc-cultural-prompt-agent

Agentic system for generating photorealistic Coca-Cola meal/beverage image prompts across global markets. Ensures cultural authenticity and brand compliance via modular knowledge base, gap-detection, pre/post-gen validators, and structured prompt manifests feeding an external node-based image generation workflow.

## Tablescape Intake (this build)

A guided intake that turns a short brief into:

1. **A scene story**: a Scene Summary, cultural do's and don'ts, and the prompt segments (Entree Dish, Traditional Side Dishes, Product Detail, Environmental Overview, Plating + Tableware, Product Serving Details, Brand Vis ID), plus one segment per labeled shape in the proxy.
2. **A labeled proxy template** (16:9 PNG): real-scale 3D shapes showing where everything goes, with role labels (`MAIN`, `SKU`, `GLASS`, `SIDE_1`, …) that match the prompt segments.
3. **Two image prompts**, in the order the image tests proved out:
   - **Composition prompt** (Nano Banana 2, image 1 = the proxy): how to read the proxy, one line per label, setting, lighting, camera look, exclusions. Food lines give the exact piece count, the local dish and what it looks like, and the container with its real size. Product, glass and napkin lines are fixed text.
   - **Product swap prompt** (Seedream, image 1 = the composed photo, image 2 = the product reference): swaps in the exact product, keeping position, size and lighting, with the label kept a clean solid red.

The proxy for the image model is rendered 1.25x wider than the true framing (`rules/camera-options.json` → `model_framing`), because the model draws objects larger than their shapes. A true-framing proxy is also downloadable.

It stops there, before photorealistic image generation.

### How it works

```
Brief (country, region, OU, SKU, dish, side request, occasion)
  → Preparation → Plating → Sides        decision cards from the cultural agent (A suggested / B / C)
  → Scene (venue, setting, time, surface, glass)   rules: SKU size/venue/glass, lighting from the scene
  → Camera (look + angle presets)
  → Accent (only when the item count is even)
  → Layout: up to 3 rule-compliant options, rendered as labeled proxies → operator picks one
  → Story + validation → downloads (proxy PNG, blueprint JSON, story JSON, prompt text)
```

- **Cultural agent**: Claude reads the country file (plus the regional file for US/UK regions) and the brand and tableware references from the knowledge base, and returns grounded options with their sources. Without an API key, an offline **sample agent** returns generic options so the flow can be demoed and tested.
- **Layout solver**: places items using the knowledge base's tableware and brand composition rules (drink top-right of the plate, napkin and utensils to the right, sides behind, condiments clustered, multi-serve clearance radii) and the team's composition rules (50% horizon, hero zone in the vertical center third, SKU on the diner's right, depth hierarchy, odd counts, no stacking, clear logo zone). See `docs/tablescape/PLAN.md`.
- **Rules data** lives in `rules/` (camera presets, lighting presets, glass/SKU rules) and can change without code changes.

### Run locally

Requires Node 22+.

```bash
npm install
npm run kb:sync          # download the knowledge base into ./knowledge-base
npm run dev              # http://localhost:5173
```

Set `ANTHROPIC_API_KEY` in the environment to use the Claude agent. Without it the app runs with the sample agent (shown in the header).

| Variable | Default | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | (unset → sample agent) | Claude API key for the cultural agent |
| `AGENT_MODE` | auto | `claude` or `sample` to force a provider |
| `CLAUDE_MODEL` | `claude-opus-5` | model for the cultural agent |
| `KB_REPO` | `fmartinez80/tccc-cultural-prompt-agent` | GitHub repo holding `knowledge-base/` |
| `KB_BRANCH` | `claude/quirky-mayer-m01mg7` | branch to download the knowledge base from |
| `KNOWLEDGE_DIR` | `knowledge-base` | where the knowledge base is read from |
| `PORT` | `5173` | server port |

### Tests

```bash
npm test                 # solver rules, odd/even, determinism, family-style
npm run typecheck
# end to end in headless Chromium against a running server:
BASE_URL=http://localhost:5173 OUT=./out npm run test:e2e
```

### Deploy to Heroku

1. Create an app and connect this GitHub repo (Deploy tab → GitHub), choosing the branch to deploy.
2. Settings → Config Vars:
   - `ANTHROPIC_API_KEY` = your key
   - `KB_BRANCH` = the branch that holds `knowledge-base/` (default above; change it if the knowledge base moves, for example to `main`)
3. Deploy. The Node buildpack runs `heroku-postbuild` (downloads the knowledge base and builds the web app), and the `Procfile` starts `npm start`.

To pick up knowledge-base edits, redeploy (the download runs at build time).

### Project layout

```
rules/                camera-options.json, lighting-presets.json, glass-rules.json, tableware-photo-spec.json
scripts/              sync-knowledge.mjs (knowledge-base download)
src/shared/           types, real-scale registry, rules, camera math, scene items, solver, story, spec
src/server/           Express API, knowledge-base loader, agent (Claude + sample)
src/web/              React wizard, three.js proxy renderer
tests/                solver unit tests, fixtures, end-to-end script
docs/                 REBUILD_SPEC.md (full rebuild spec), INTAKE_FLOW.md, tablescape/PLAN.md, composition rules source
```

### Current scope

- One place setting (1 person), including family-style meals with a shared centerpiece. 2-person layouts (corner, face-to-face) and groups are designed in the plan and come next.
- Camera look and angle values are placeholders until the team finalizes lenses.
- Lighting: every scene uses one even, well-balanced commercial food photography setup for now (`rules/lighting-presets.json` → `default_preset`). The scene-based presets stay in the file; set `default_preset.preset` to null to use them.
- Product dimensions follow `coca-cola-guidelines.md` §4.3 and are provisional pending the TCCC SKU spec drop.
