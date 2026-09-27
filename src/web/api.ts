import type { LayoutOption, SolveResult } from "../shared/solver";
import type { Selections } from "../shared/spec";
import type { Story, StoryFacts, Validation } from "../shared/story";
import type { LightingPreset } from "../shared/rules";
import type { Blueprint, Decision, IntakeInput, SceneSpec, SkuInfo, StepName } from "../shared/types";

export interface AppConfig {
  agentMode: "claude" | "sample";
  knowledge: { available: boolean; source: string };
  countries: Array<{ id: string; label: string; ou: string; regions: Array<{ id: string; label: string }> }>;
  skus: Array<SkuInfo & { markets?: string[] }>;
  occasions: string[];
  looks: Array<{ id: string; label: string; help: string; placeholder: boolean }>;
  angles: Array<{ id: string; label: string; placeholder: boolean }>;
  defaults: { look: string; angle: string };
}

export interface RuleEffects {
  venues: Array<{ venue: "home" | "restaurant" | "on-the-go"; allowed: boolean; glass: "never" | "required" | "optional" }>;
  timeFromOccasion: SceneSpec["scene"]["time"] | null;
  lighting?: LightingPreset;
  needsAccent?: boolean;
}

async function call<T>(path: string, body?: unknown): Promise<T> {
  const res = await fetch(path, body === undefined ? undefined : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`);
  return data as T;
}

export const api = {
  config: () => call<AppConfig>("/api/config"),
  rules: (brief: IntakeInput, selections: Selections) => call<RuleEffects>("/api/rules", { brief, selections }),
  step: <T>(step: StepName, brief: IntakeInput, selections: Selections) => call<Decision<T>>(`/api/step/${step}`, { brief, selections }),
  compose: (brief: IntakeInput, selections: Selections) =>
    call<SolveResult & { spec: SceneSpec; lighting: LightingPreset; options: LayoutOption[] }>("/api/compose", { brief, selections }),
  story: (brief: IntakeInput, spec: SceneSpec, blueprint: Blueprint, notes?: string[]) =>
    call<{ story: Story; facts: StoryFacts; prompt: string; source: string }>("/api/story", { brief, spec, blueprint, notes }),
  validate: (brief: IntakeInput, spec: SceneSpec, story: Story) => call<Validation>("/api/validate", { brief, spec, story }),
};
