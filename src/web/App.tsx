import { useEffect, useMemo, useState } from "react";
import { api, type AppConfig, type RuleEffects } from "./api";
import { renderProxy } from "./render";
import type { LayoutOption } from "../shared/solver";
import type { Selections } from "../shared/spec";
import type { Story, StoryFacts, Validation } from "../shared/story";
import type { LightingPreset } from "../shared/rules";
import type { AccentChoice, Decision, IntakeInput, PlatingChoice, PrepChoice, SceneSpec, SidesChoice, StepName, SurfaceChoice } from "../shared/types";

type StepId = "brief" | "prep" | "plating" | "sides" | "scene" | "camera" | "accent" | "layout" | "story";
const STEPS: Array<{ id: StepId; label: string }> = [
  { id: "brief", label: "Brief" },
  { id: "prep", label: "Preparation" },
  { id: "plating", label: "Plating" },
  { id: "sides", label: "Sides" },
  { id: "scene", label: "Scene" },
  { id: "camera", label: "Camera" },
  { id: "accent", label: "Accent" },
  { id: "layout", label: "Layout" },
  { id: "story", label: "Story" },
];

// Changing an answer clears everything that depends on it.
const ORDER: Array<keyof Selections> = ["prep", "plating", "sides", "scene", "glass", "camera", "accent"];

const OCCASION_LABELS: Record<string, string> = {
  breakfast: "Breakfast",
  brunch: "Brunch",
  "weekday-lunch": "Weekday lunch",
  "afternoon-snack": "Afternoon snack",
  dinner: "Dinner",
  "late-night": "Late night",
  celebration: "Celebration or holiday",
  "game-night": "Game night",
};

type Brief = IntakeInput & { countryLabel: string };

export function App() {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [step, setStep] = useState<StepId>("brief");
  const [brief, setBrief] = useState<Brief>({ operatingUnit: "", country: "", countryLabel: "", region: "", skuId: "", heroDish: "", sideDishRequest: "", occasion: "dinner" });
  const [sel, setSel] = useState<Selections>({});
  const [decisions, setDecisions] = useState<Partial<Record<StepName, Decision<unknown>>>>({});
  const [rules, setRules] = useState<RuleEffects | null>(null);
  const [compose, setCompose] = useState<{ spec: SceneSpec; lighting: LightingPreset; options: LayoutOption[]; infeasible: Array<{ archetype: string; reason: string }> } | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [story, setStory] = useState<{ story: Story; facts: StoryFacts; prompt: string; source: string } | null>(null);
  const [validation, setValidation] = useState<Validation | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.config().then((c) => {
      setConfig(c);
      setSel((s) => ({ ...s, camera: { look: c.defaults.look, angle: c.defaults.angle } }));
    }, (e) => setError(String(e)));
  }, []);

  // Rule effects (venue limits, glass lock, lighting, accent) follow the answers.
  useEffect(() => {
    if (!brief.skuId) return;
    api.rules(brief, sel).then(setRules, () => undefined);
  }, [brief, sel]);

  const choose = <K extends keyof Selections>(key: K, value: Selections[K]) => {
    setSel((s) => {
      const next: Selections = { ...s, [key]: value };
      const i = ORDER.indexOf(key);
      for (const k of ORDER.slice(i + 1)) if (k !== "camera") delete next[k];
      return next;
    });
    const i = ORDER.indexOf(key);
    const stepDeps: Record<string, StepName[]> = { prep: ["plating", "sides", "accent"], plating: ["sides", "accent"], sides: ["accent"], scene: ["accent"], glass: ["accent"], camera: [] };
    setDecisions((d) => {
      const next = { ...d };
      for (const s of stepDeps[key as string] ?? []) delete next[s];
      if (key === "scene") delete next.surface;
      return next;
    });
    if (i >= 0) {
      setCompose(null);
      setPicked(null);
      setStory(null);
      setValidation(null);
    }
  };

  const run = async <T,>(label: string, fn: () => Promise<T>): Promise<T | undefined> => {
    setBusy(label);
    setError(null);
    try {
      return await fn();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      return undefined;
    } finally {
      setBusy(null);
    }
  };

  const loadDecision = async (s: StepName) => {
    if (decisions[s]) return;
    const d = await run(`Asking the ${config?.agentMode === "claude" ? "cultural agent" : "sample agent"}…`, () => api.step(s, brief, sel));
    if (d) setDecisions((x) => ({ ...x, [s]: d }));
  };

  const go = (id: StepId) => {
    setError(null);
    setStep(id);
  };

  const idx = STEPS.findIndex((s) => s.id === step);
  const canVisit = (id: StepId): boolean => {
    const reqs: Record<StepId, boolean> = {
      brief: true,
      prep: briefOk(brief),
      plating: !!sel.prep,
      sides: !!sel.plating,
      scene: !!sel.sides,
      camera: !!sel.scene && (sel.scene.venue !== "on-the-go" || !!sel.scene.surface),
      accent: !!sel.camera && !!sel.scene,
      layout: !!sel.camera && !!sel.scene && (rules?.needsAccent === false || !!sel.accent),
      story: picked !== null,
    };
    return reqs[id];
  };

  if (!config) return <div className="app"><div className="loading">{error ?? "Loading…"}</div></div>;

  return (
    <div className="app">
      <header className="top">
        <div className="brand">
          <span className="dot" /> Tablescape Intake
        </div>
        <div className="meta">
          <span className={`pill ${config.agentMode}`}>{config.agentMode === "claude" ? "Claude agent" : "Sample agent (offline)"}</span>
          <span className={`pill ${config.knowledge.available ? "ok" : "warn"}`}>{config.knowledge.available ? "Knowledge base loaded" : "Knowledge base missing"}</span>
        </div>
      </header>
      <nav className="progress">
        {STEPS.map((s, i) => (
          <button key={s.id} className={`crumb ${s.id === step ? "active" : ""} ${i < idx ? "done" : ""}`} disabled={!canVisit(s.id)} onClick={() => go(s.id)}>
            <span className="n">{i + 1}</span>
            {s.label}
          </button>
        ))}
      </nav>
      <main className="panel">
        {error && <div className="error">{error}</div>}
        {busy && <div className="busy"><span className="spinner" />{busy}</div>}

        {step === "brief" && (
          <BriefStep config={config} brief={brief} setBrief={(b) => { setBrief(b); setSel((s) => ({ camera: s.camera })); setDecisions({}); setCompose(null); setPicked(null); setStory(null); }} onNext={() => go("prep")} />
        )}

        {step === "prep" && (
          <DecisionStep<PrepChoice>
            title="How is it prepared?"
            intro={`How ${brief.heroDish} is prepared and enjoyed in ${brief.countryLabel}.`}
            decision={decisions.prep as Decision<PrepChoice>}
            load={() => loadDecision("prep")}
            selected={sel.prep}
            render={(v) => ({ label: v.label, detail: v.detail, extra: `Silhouette: ${v.massClass}` })}
            onPick={(v) => choose("prep", v)}
            onNext={() => go("plating")}
            same={(a, b) => a.label === b.label}
          />
        )}

        {step === "plating" && (
          <DecisionStep<PlatingChoice>
            title="How is it served?"
            intro="The most common way this dish reaches the table."
            decision={decisions.plating as Decision<PlatingChoice>}
            load={() => loadDecision("plating")}
            selected={sel.plating}
            render={(v) => ({ label: v.label, detail: v.detail, extra: `${v.vessel}${v.service === "shared" ? " · family-style (shared vessel + one plated portion)" : ""}` })}
            onPick={(v) => choose("plating", v)}
            onNext={() => go("sides")}
            same={(a, b) => a.label === b.label}
          />
        )}

        {step === "sides" && (
          <DecisionStep<SidesChoice>
            title="Sides and accompaniments"
            intro={brief.sideDishRequest ? `Including your request for ${brief.sideDishRequest} where it fits.` : "What this dish is usually served with here."}
            decision={decisions.sides as Decision<SidesChoice>}
            load={() => loadDecision("sides")}
            selected={sel.sides}
            render={(v) => ({ label: v.label, detail: v.detail, extra: v.accompaniments.map((a) => `${a.name} (${a.role}, ${a.vessel}${a.service === "shared" ? ", shared" : ""})`).join(" · ") || "No sides" })}
            onPick={(v) => choose("sides", v)}
            onNext={() => go("scene")}
            same={(a, b) => a.label === b.label}
          />
        )}

        {step === "scene" && (
          <SceneStep
            brief={brief}
            sel={sel}
            rules={rules}
            surfaceDecision={decisions.surface as Decision<SurfaceChoice> | undefined}
            loadSurface={() => loadDecision("surface")}
            onScene={(scene) => choose("scene", scene)}
            onGlass={(g) => choose("glass", g)}
            onNext={() => go("camera")}
          />
        )}

        {step === "camera" && (
          <CameraStep config={config} sel={sel} onCamera={(c) => choose("camera", c)} onNext={() => go("accent")} />
        )}

        {step === "accent" && (
          <AccentStep
            needsAccent={rules?.needsAccent}
            decision={decisions.accent as Decision<AccentChoice> | undefined}
            load={() => loadDecision("accent")}
            selected={sel.accent ?? undefined}
            onPick={(v) => choose("accent", v)}
            onNext={() => go("layout")}
          />
        )}

        {step === "layout" && (
          <LayoutStep
            compose={compose}
            load={async () => {
              const r = await run("Composing layout options…", () => api.compose(brief, { ...sel, accent: rules?.needsAccent ? sel.accent : null }));
              if (r) setCompose(r);
            }}
            picked={picked}
            onPick={(i) => { setPicked(i); setStory(null); setValidation(null); }}
            onNext={() => go("story")}
          />
        )}

        {step === "story" && compose && picked !== null && (
          <StoryStep
            brief={brief}
            compose={compose}
            option={compose.options[picked]}
            story={story}
            validation={validation}
            busy={!!busy}
            generate={async (notes) => {
              const r = await run(notes ? "Rewriting the story with the validation notes…" : "Writing the scene story…", () => api.story(brief, compose.spec, compose.options[picked].blueprint, notes));
              if (r) { setStory(r); setValidation(null); }
            }}
            validate={async () => {
              if (!story) return;
              const v = await run("Checking cultural authenticity…", () => api.validate(brief, compose.spec, story.story));
              if (v) setValidation(v);
            }}
          />
        )}
      </main>
    </div>
  );
}

function briefOk(b: Brief): boolean {
  return !!(b.country && b.skuId && b.heroDish.trim() && b.occasion && b.operatingUnit.trim());
}

// ---------------------------------------------------------------------------

function BriefStep({ config, brief, setBrief, onNext }: { config: AppConfig; brief: Brief; setBrief: (b: Brief) => void; onNext: () => void }) {
  const [b, setB] = useState(brief);
  const country = config.countries.find((c) => c.id === b.country);
  const skus = config.skus.filter((s) => !s.markets || s.markets.some((m) => b.country.includes(m) || (m === "us" && b.country === "united_states")));
  const set = (patch: Partial<Brief>) => setB((x) => ({ ...x, ...patch }));
  return (
    <section>
      <h1>Start with the brief</h1>
      <p className="lede">Country, product and dish. The agent takes it from there, one question at a time.</p>
      <div className="grid2">
        <label>
          Country
          <select
            value={b.country}
            onChange={(e) => {
              const c = config.countries.find((x) => x.id === e.target.value);
              set({ country: e.target.value, countryLabel: c?.label ?? "", region: "", operatingUnit: c && c.ou !== "not confirmed" ? c.ou : "" });
            }}
          >
            <option value="">Choose a country…</option>
            {config.countries.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </label>
        <label>
          Local region
          {country?.regions.length ? (
            <select value={b.region} onChange={(e) => set({ region: e.target.value })}>
              <option value="">National (no specific region)</option>
              {country.regions.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          ) : (
            <input value={b.region} placeholder="Optional, e.g. a city or area" onChange={(e) => set({ region: e.target.value })} />
          )}
        </label>
        <label>
          Operating unit
          <input value={b.operatingUnit} placeholder={country?.ou === "not confirmed" ? "Not confirmed in the knowledge base; enter it" : "e.g. north_america"} onChange={(e) => set({ operatingUnit: e.target.value })} />
        </label>
        <label>
          Product SKU
          <select value={b.skuId} onChange={(e) => set({ skuId: e.target.value })}>
            <option value="">Choose a product…</option>
            {skus.map((s) => (
              <option key={s.id} value={s.id}>{s.displayName}</option>
            ))}
          </select>
        </label>
        <label>
          Hero dish
          <input value={b.heroDish} placeholder="e.g. paella, tacos al pastor, bobotie" onChange={(e) => set({ heroDish: e.target.value })} />
        </label>
        <label>
          Side dish request <span className="opt">optional</span>
          <input value={b.sideDishRequest} placeholder="e.g. patatas bravas" onChange={(e) => set({ sideDishRequest: e.target.value })} />
        </label>
        <label>
          Occasion
          <select value={b.occasion} onChange={(e) => set({ occasion: e.target.value as Brief["occasion"] })}>
            {config.occasions.map((o) => (
              <option key={o} value={o}>{OCCASION_LABELS[o] ?? o}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="actions">
        <button className="primary" disabled={!briefOk(b)} onClick={() => { setBrief(b); onNext(); }}>Continue</button>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function DecisionStep<T>(props: {
  title: string;
  intro: string;
  decision?: Decision<T>;
  load: () => void;
  selected?: T;
  render: (v: T) => { label: string; detail: string; extra?: string };
  onPick: (v: T) => void;
  onNext: () => void;
  same: (a: T, b: T) => boolean;
}) {
  const { decision, load, selected } = props;
  useEffect(() => {
    if (!decision) load();
  }, [decision]);
  // A step served only one way is picked automatically.
  useEffect(() => {
    if (decision?.status === "resolved" && !selected) props.onPick(decision.options[0].value);
  }, [decision]);
  return (
    <section>
      <h1>{props.title}</h1>
      <p className="lede">{props.intro}</p>
      {decision && (
        <>
          {decision.status === "resolved" && <p className="note">Served one way here, so this is filled in for you.</p>}
          <div className="cards">
            {decision.options.map((o) => {
              const r = props.render(o.value);
              const on = !!selected && props.same(selected, o.value);
              return (
                <button key={o.id} className={`card ${on ? "on" : ""}`} onClick={() => props.onPick(o.value)}>
                  <div className="card-head">
                    <span className="opt-id">{o.id}</span>
                    {o.suggested && decision.options.length > 1 && <span className="tag">Suggested</span>}
                  </div>
                  <div className="card-title">{r.label}</div>
                  <div className="card-detail">{r.detail}</div>
                  {r.extra && <div className="card-extra">{r.extra}</div>}
                  <div className="card-why">{o.rationale}</div>
                </button>
              );
            })}
          </div>
        </>
      )}
      <div className="actions">
        {decision && <button onClick={() => load()} className="ghost" title="Ask again">↻ Ask again</button>}
        <button className="primary" disabled={!selected} onClick={props.onNext}>Continue</button>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

const TIME_LABELS: Record<string, string> = { morning: "Morning", midday: "Midday", "golden-hour": "Golden hour", evening: "Evening" };

function SceneStep(props: {
  brief: Brief;
  sel: Selections;
  rules: RuleEffects | null;
  surfaceDecision?: Decision<SurfaceChoice>;
  loadSurface: () => void;
  onScene: (s: NonNullable<Selections["scene"]>) => void;
  onGlass: (g: boolean) => void;
  onNext: () => void;
}) {
  const { sel, rules } = props;
  const scene = sel.scene ?? { setting: "indoor" as const, venue: "home" as const, party: "1" as const };
  const time = scene.time ?? rules?.timeFromOccasion ?? undefined;
  const venueRule = rules?.venues.find((v) => v.venue === scene.venue);
  const update = (patch: Partial<NonNullable<Selections["scene"]>>) => {
    const next = { ...scene, ...patch };
    if (next.venue === "on-the-go") next.setting = "outdoor";
    if (patch.venue && patch.venue !== "on-the-go") {
      delete next.surface;
      delete next.surfaceText;
    }
    props.onScene(next);
  };
  useEffect(() => {
    if (!sel.scene) props.onScene({ ...scene, time: rules?.timeFromOccasion ?? undefined });
  }, []);
  useEffect(() => {
    if (scene.venue === "on-the-go" && !props.surfaceDecision) props.loadSurface();
  }, [scene.venue]);
  const needSurface = scene.venue === "on-the-go" && !scene.surface;
  return (
    <section>
      <h1>Where and when</h1>
      <p className="lede">The time and place of the meal. Lighting follows from these automatically.</p>
      <div className="field">
        <div className="field-label">Venue</div>
        <div className="seg">
          {(["home", "restaurant", "on-the-go"] as const).map((v) => {
            const r = rules?.venues.find((x) => x.venue === v);
            return (
              <button key={v} className={scene.venue === v ? "on" : ""} disabled={r ? !r.allowed : false} onClick={() => update({ venue: v })} title={r && !r.allowed ? "Large (1 L and up) SKUs appear only at home" : ""}>
                {v === "home" ? "At home" : v === "restaurant" ? "At a restaurant" : "On the go"}
              </button>
            );
          })}
        </div>
        {rules?.venues.some((v) => !v.allowed) && <div className="hint">1 L and up SKUs are shared bottles and appear only at home.</div>}
      </div>
      <div className="field">
        <div className="field-label">Setting</div>
        <div className="seg">
          {(["indoor", "outdoor"] as const).map((s) => (
            <button key={s} className={scene.setting === s ? "on" : ""} disabled={scene.venue === "on-the-go" && s === "indoor"} onClick={() => update({ setting: s })}>
              {s === "indoor" ? "Indoor" : "Outdoor"}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <div className="field-label">People</div>
        <div className="seg">
          {(["1", "2", "group", "family"] as const).map((p) => (
            <button key={p} className={scene.party === p ? "on" : ""} disabled={p !== "1"} onClick={() => update({ party: p })} title={p !== "1" ? "Coming in the next build" : ""}>
              {p === "1" ? "1 person" : p === "2" ? "2 people" : p === "group" ? "Group" : "Family"}
            </button>
          ))}
        </div>
        <div className="hint">2-person and group layouts are designed (plan §5.6) and come in the next build.</div>
      </div>
      <div className="field">
        <div className="field-label">Time of day {rules?.timeFromOccasion && <span className="opt">set from the occasion</span>}</div>
        <div className="seg">
          {(["morning", "midday", "golden-hour", "evening"] as const).map((t) => (
            <button key={t} className={time === t ? "on" : ""} onClick={() => update({ time: t })}>{TIME_LABELS[t]}</button>
          ))}
        </div>
      </div>
      {scene.venue === "on-the-go" && (
        <div className="field">
          <div className="field-label">Surface <span className="opt">food always sits on a surface, never in a hand</span></div>
          <div className="cards">
            {props.surfaceDecision?.options.map((o) => (
              <button key={o.id} className={`card ${scene.surface === o.value.surface ? "on" : ""}`} onClick={() => update({ surface: o.value.surface, surfaceText: o.value.promptText })}>
                <div className="card-head"><span className="opt-id">{o.id}</span>{o.suggested && <span className="tag">Suggested</span>}</div>
                <div className="card-title">{o.value.label}</div>
                <div className="card-detail">{o.value.detail}</div>
                <div className="card-why">{o.rationale}</div>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="field">
        <div className="field-label">Branded glass</div>
        {venueRule?.glass === "never" && <div className="hint">No glass on the go.</div>}
        {venueRule?.glass === "required" && <div className="hint">This SKU is a shared bottle (1 L and up), so every place setting gets a branded bell-shaped glass.</div>}
        {venueRule?.glass === "optional" && (
          <div className="seg">
            <button className={sel.glass ? "on" : ""} onClick={() => props.onGlass(true)}>Yes, add a glass</button>
            <button className={sel.glass ? "" : "on"} onClick={() => props.onGlass(false)}>No glass</button>
          </div>
        )}
      </div>
      {rules?.lighting && (
        <div className="lighting">
          <div className="field-label">Lighting (set by the scene)</div>
          <div>{rules.lighting.prompt}</div>
        </div>
      )}
      <div className="actions">
        <button className="primary" disabled={!sel.scene || needSurface} onClick={props.onNext}>Continue</button>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function CameraStep({ config, sel, onCamera, onNext }: { config: AppConfig; sel: Selections; onCamera: (c: { look: string; angle: string }) => void; onNext: () => void }) {
  const cam = sel.camera ?? config.defaults;
  return (
    <section>
      <h1>Camera</h1>
      <p className="lede">Pick a look and an angle. The lens and aperture behind each look are handled for you.</p>
      <div className="field">
        <div className="field-label">Look</div>
        <div className="cards">
          {config.looks.map((l) => (
            <button key={l.id} className={`card ${cam.look === l.id ? "on" : ""}`} onClick={() => onCamera({ ...cam, look: l.id })}>
              <div className="card-title">{l.label}</div>
              <div className="card-detail">{l.help}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <div className="field-label">Angle</div>
        <div className="seg">
          {config.angles.map((a) => (
            <button key={a.id} className={cam.angle === a.id ? "on" : ""} onClick={() => onCamera({ ...cam, angle: a.id })}>{a.label}</button>
          ))}
        </div>
      </div>
      {config.looks.some((l) => l.placeholder) && <div className="hint">Lens and angle values are placeholders until the team finalizes them.</div>}
      <div className="actions">
        <button className="primary" onClick={() => { if (!sel.camera) onCamera(cam); onNext(); }}>Continue</button>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function AccentStep(props: { needsAccent?: boolean; decision?: Decision<AccentChoice>; load: () => void; selected?: AccentChoice; onPick: (v: AccentChoice) => void; onNext: () => void }) {
  useEffect(() => {
    if (props.needsAccent && !props.decision) props.load();
  }, [props.needsAccent]);
  if (props.needsAccent === undefined) return <section><h1>Composition check</h1><p className="lede">Counting the table items…</p></section>;
  if (!props.needsAccent)
    return (
      <section>
        <h1>Composition check</h1>
        <p className="lede">The table already has an odd number of items, so no accent is needed.</p>
        <div className="actions"><button className="primary" onClick={props.onNext}>Continue</button></div>
      </section>
    );
  return (
    <section>
      <h1>One small accent</h1>
      <p className="lede">The table has an even number of items. Odd counts compose better (a depth triangle), so the composition rules add one small accent. It will appear in the image and in the meal summary as "added for composition".</p>
      <div className="cards">
        {props.decision?.options.map((o) => (
          <button key={o.id} className={`card ${props.selected?.name === o.value.name ? "on" : ""}`} onClick={() => props.onPick(o.value)}>
            <div className="card-head"><span className="opt-id">{o.id}</span>{o.suggested && <span className="tag">Suggested</span>}</div>
            <div className="card-title">{o.value.label}</div>
            <div className="card-detail">{o.value.detail}</div>
            <div className="card-extra">{o.value.vessel}</div>
            <div className="card-why">{o.rationale}</div>
          </button>
        ))}
      </div>
      <div className="actions"><button className="primary" disabled={!props.selected} onClick={props.onNext}>Continue</button></div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function LayoutStep(props: {
  compose: { lighting: LightingPreset; options: LayoutOption[]; infeasible: Array<{ archetype: string; reason: string }> } | null;
  load: () => void;
  picked: number | null;
  onPick: (i: number) => void;
  onNext: () => void;
}) {
  const [guides, setGuides] = useState(false);
  useEffect(() => {
    if (!props.compose) props.load();
  }, [props.compose]);
  const images = useMemo(
    () => props.compose?.options.map((o) => renderProxy(o.blueprint, props.compose!.lighting, { width: 1280, guides })) ?? [],
    [props.compose, guides],
  );
  return (
    <section>
      <h1>Pick a layout</h1>
      <p className="lede">Each option uses the same items and passes every composition and brand rule. They differ in how the supporting items sit around the entree and the drink.</p>
      <label className="check"><input type="checkbox" checked={guides} onChange={(e) => setGuides(e.target.checked)} /> Show the center-third and horizon guides</label>
      {props.compose && props.compose.options.length === 0 && (
        <div className="error">
          No layout fits these items. {props.compose.infeasible.map((f) => `${f.archetype}: ${f.reason}`).join(" · ")}
        </div>
      )}
      <div className="layouts">
        {props.compose?.options.map((o, i) => (
          <button key={o.archetype} className={`layout ${props.picked === i ? "on" : ""}`} onClick={() => props.onPick(i)}>
            <img src={images[i]} alt={`Layout option ${"ABC"[i]}`} />
            <div className="layout-meta">
              <span className="opt-id">{"ABC"[i]}</span>
              <strong>{o.blueprint.layout_meta.archetype}</strong>
              <span className="score">score {o.blueprint.layout_meta.score.toFixed(2)}</span>
            </div>
            <div className="card-why">{o.blueprint.layout_meta.rationale}</div>
          </button>
        ))}
      </div>
      <div className="actions">
        <button className="primary" disabled={props.picked === null} onClick={props.onNext}>Use this layout</button>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

const SEGMENT_LABELS: Array<[keyof Story["segments"], string]> = [
  ["entreeDish", "Entree dish"],
  ["traditionalSideDishes", "Traditional side dishes"],
  ["productDetail", "Product detail"],
  ["environmentalOverview", "Environmental overview"],
  ["platingAndTableware", "Plating + tableware"],
  ["productServingDetails", "Product serving details"],
  ["brandVisId", "Brand Vis ID"],
];

function download(name: string, data: string, type = "text/plain") {
  const a = document.createElement("a");
  a.href = data.startsWith("data:") ? data : URL.createObjectURL(new Blob([data], { type }));
  a.download = name;
  a.click();
}

function StoryStep(props: {
  brief: Brief;
  compose: { spec: SceneSpec; lighting: LightingPreset };
  option: LayoutOption;
  story: { story: Story; facts: StoryFacts; prompt: string; source: string } | null;
  validation: Validation | null;
  busy: boolean;
  generate: (notes?: string[]) => void;
  validate: () => void;
}) {
  const { story, validation, option } = props;
  useEffect(() => {
    if (!story) props.generate();
  }, [story]);
  const proxy = useMemo(() => renderProxy(option.blueprint, props.compose.lighting, { width: 1920 }), [option]);
  const slug = `${props.brief.heroDish}-${props.brief.country}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <section>
      <h1>Scene story + proxy template</h1>
      <p className="lede">The story summarizes the final image; the labeled proxy shows where everything goes. Validate the story before handing it to image generation.</p>
      <div className="story-grid">
        <div>
          <img className="proxy" src={proxy} alt="Labeled proxy template" />
          <div className="downloads">
            <button onClick={() => download(`${slug}-proxy.png`, proxy)}>Download proxy PNG</button>
            <button onClick={() => download(`${slug}-blueprint.json`, JSON.stringify(option.blueprint, null, 2), "application/json")}>Blueprint JSON</button>
            {story && <button onClick={() => download(`${slug}-story.json`, JSON.stringify({ spec: props.compose.spec, ...story }, null, 2), "application/json")}>Story JSON</button>}
            {story && <button onClick={() => download(`${slug}-prompt.txt`, story.prompt)}>Prompt text</button>}
          </div>
          <details className="rules">
            <summary>Rule checks ({option.blueprint.layout_meta.rule_results.filter((r) => r.pass).length}/{option.blueprint.layout_meta.rule_results.length} passed)</summary>
            <ul>
              {option.blueprint.layout_meta.rule_results.map((r) => (
                <li key={r.id} className={r.pass ? "pass" : "fail"}><strong>{r.id} {r.name}</strong> {r.detail}</li>
              ))}
            </ul>
          </details>
        </div>
        <div>
          {story && (
            <>
              <h2>Scene Summary</h2>
              {story.story.sceneSummary.split(/\n\n+/).map((p, i) => <p key={i}>{p}</p>)}
              {story.story.culturalNotes.length > 0 && (
                <>
                  <h3>Cultural do's and don'ts</h3>
                  <ul>{story.story.culturalNotes.map((n, i) => <li key={i}>{n}</li>)}</ul>
                </>
              )}
              <div className="validate">
                <button className="primary" disabled={props.busy} onClick={props.validate}>Validate the story</button>
                {validation?.pass && <span className="pass-badge">✓ Passed: this scene is ready</span>}
              </div>
              {validation && !validation.pass && (
                <div className="fail-box">
                  <strong>Needs changes</strong>
                  <ul>{validation.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
                  <button disabled={props.busy} onClick={() => props.generate(validation.notes)}>Regenerate with these notes</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {story && (
        <>
          <h2>Prompt segments</h2>
          <div className="segments">
            {SEGMENT_LABELS.map(([k, label]) => {
              const v = story.story.segments[k];
              return (
                <div key={k} className="segment">
                  <div className="seg-label">{label}</div>
                  {Array.isArray(v) ? v.map((x, i) => <p key={i}>{x}</p>) : <p>{v}</p>}
                </div>
              );
            })}
          </div>
          <h2>Label segments <span className="opt">one per labeled shape in the proxy</span></h2>
          <div className="segments">
            {story.story.labelSegments.map((l) => (
              <div key={l.label} className="segment">
                <div className="seg-label mono">{l.label}</div>
                <p>{l.text}</p>
              </div>
            ))}
          </div>
          <h2>Assembled prompt</h2>
          <pre className="prompt">{story.prompt}</pre>
        </>
      )}
    </section>
  );
}
