// Express server: the intake API plus the web app (Vite middleware in
// development, the built bundle in production).

import express, { type Request, type Response } from "express";
import Anthropic from "@anthropic-ai/sdk";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { createAgent, type Brief } from "./agent";
import { loadKnowledge } from "./knowledge";
import { SKU_CATALOG } from "../shared/registry";
import { ANGLES, DEFAULT_ANGLE, DEFAULT_LOOK, LOOKS, glassRule, selectLighting, timeFromOccasion, venueAllowed } from "../shared/rules";
import { buildSpec, skuById, type Selections } from "../shared/spec";
import { needsAccent } from "../shared/scene";
import { solve } from "../shared/solver";
import { assemblePrompt, storyFacts, type Story } from "../shared/story";
import { IntakeInput, Occasion, type Blueprint, type SceneSpec } from "../shared/types";

const app = express();
app.use(express.json({ limit: "2mb" }));
const agent = createAgent();

function toBrief(body: unknown): Brief {
  const b = body as Record<string, unknown>;
  const input = IntakeInput.parse(b);
  const kb = loadKnowledge();
  const country = kb.countries.find((c) => c.id === input.country);
  const region = country?.regions.find((r) => r.id === input.region);
  return { ...input, countryLabel: country?.label ?? input.country, regionLabel: region?.label ?? input.region ?? "" };
}

type Handler = (req: Request, res: Response) => Promise<unknown>;
const route = (fn: Handler) => async (req: Request, res: Response) => {
  try {
    res.json(await fn(req, res));
  } catch (err) {
    const status = err instanceof Anthropic.RateLimitError ? 429 : err instanceof Anthropic.APIError ? 502 : 400;
    const message =
      err instanceof Anthropic.AuthenticationError
        ? "The Anthropic API key was rejected. Check ANTHROPIC_API_KEY."
        : err instanceof Anthropic.RateLimitError
          ? "Rate limited by the Claude API. Wait a moment and retry."
          : err instanceof Error
            ? err.message
            : String(err);
    console.error(`[${req.path}]`, message);
    res.status(status).json({ error: message });
  }
};

app.get(
  "/api/config",
  route(async () => {
    const kb = loadKnowledge();
    return {
      agentMode: agent.mode,
      knowledge: { available: kb.available, source: kb.source },
      countries: kb.countries.map((c) => ({ id: c.id, label: c.label, ou: c.ou, regions: c.regions.map((r) => ({ id: r.id, label: r.label })) })),
      skus: SKU_CATALOG,
      occasions: Occasion.options,
      looks: LOOKS.map((l) => ({ id: l.id, label: l.label, help: l.help, placeholder: l.status === "placeholder" })),
      angles: ANGLES.map((a) => ({ id: a.id, label: a.label, placeholder: a.status === "placeholder" })),
      defaults: { look: DEFAULT_LOOK, angle: DEFAULT_ANGLE },
    };
  }),
);

/** Rule effects the UI needs as the operator goes (glass lock, venue limits, accent, lighting). */
app.post(
  "/api/rules",
  route(async (req) => {
    const { brief, selections } = req.body as { brief: IntakeInput; selections: Selections };
    const sku = skuById(brief.skuId);
    if (!sku) throw new Error("unknown SKU");
    const venues = (["home", "restaurant", "on-the-go"] as const).map((v) => ({ venue: v, allowed: venueAllowed(sku, v), glass: glassRule(sku, v) }));
    const out: Record<string, unknown> = { venues, timeFromOccasion: timeFromOccasion(Occasion.parse(brief.occasion)) };
    if (selections.scene) {
      const time = selections.scene.time ?? timeFromOccasion(brief.occasion) ?? "midday";
      out.lighting = selectLighting({ ...selections.scene, time, surface: selections.scene.surface ?? "table-4top" } as SceneSpec["scene"]);
    }
    if (selections.prep && selections.plating && selections.sides && selections.scene && selections.camera) {
      out.needsAccent = needsAccent(buildSpec(brief, { ...selections, accent: null }));
    }
    return out;
  }),
);

app.post(
  "/api/step/:step",
  route(async (req) => {
    const brief = toBrief(req.body.brief);
    const sel = (req.body.selections ?? {}) as Selections;
    switch (req.params.step) {
      case "prep":
        return agent.prep(brief);
      case "plating":
        return agent.plating(brief, sel);
      case "sides":
        return agent.sides(brief, sel);
      case "surface":
        return agent.surface(brief, sel);
      case "accent":
        return agent.accent(brief, sel);
      default:
        throw new Error(`unknown step ${req.params.step}`);
    }
  }),
);

app.post(
  "/api/compose",
  route(async (req) => {
    const brief = toBrief(req.body.brief);
    const spec = buildSpec(brief, req.body.selections as Selections);
    const result = solve(spec);
    return { spec, lighting: selectLighting(spec.scene), ...result };
  }),
);

app.post(
  "/api/story",
  route(async (req) => {
    const brief = toBrief(req.body.brief);
    const spec = req.body.spec as SceneSpec;
    const bp = req.body.blueprint as Blueprint;
    const facts = storyFacts(spec, bp);
    const story = await agent.story(brief, spec, bp, facts, req.body.notes as string[] | undefined);
    return { story, facts, prompt: assemblePrompt(story, facts), source: agent.mode };
  }),
);

app.post(
  "/api/validate",
  route(async (req) => {
    const brief = toBrief(req.body.brief);
    return agent.validate(brief, req.body.spec as SceneSpec, req.body.story as Story);
  }),
);

const port = Number(process.env.PORT || 5173);
const prod = process.env.NODE_ENV === "production";

if (prod) {
  const dist = resolve("dist");
  if (!existsSync(dist)) throw new Error("dist/ is missing; run npm run build first");
  app.use(express.static(dist));
  app.get(/^(?!\/api\/).*/, (_req, res) => res.sendFile(resolve(dist, "index.html")));
} else {
  const { createServer } = await import("vite");
  const vite = await createServer({ server: { middlewareMode: true }, appType: "spa", configFile: resolve("vite.config.ts") });
  app.use(vite.middlewares);
}

app.listen(port, () => {
  const kb = loadKnowledge();
  console.log(`Tablescape intake on http://localhost:${port} (agent: ${agent.mode}, knowledge base: ${kb.available ? kb.source : "missing — run npm run kb:sync"})`);
});
