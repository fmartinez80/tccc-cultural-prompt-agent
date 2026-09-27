// Loads the markdown knowledge base (see scripts/sync-knowledge.mjs).
// Country files carry `country:` front matter; regional files carry
// `region:` and `parent_file:`. The brand and tableware references apply to
// every market.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

export const KNOWLEDGE_DIR = process.env.KNOWLEDGE_DIR || "knowledge-base";

export interface KbFile {
  path: string;
  file: string; // basename
  text: string;
}

export interface CountryEntry {
  id: string; // front matter `country`, e.g. united_states
  label: string;
  ou: string;
  file: KbFile;
  regions: Array<{ id: string; label: string; file: KbFile }>;
}

export interface KnowledgeBase {
  available: boolean;
  source: string;
  countries: CountryEntry[];
  references: KbFile[]; // brand + tableware
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".md")) out.push(p);
  }
  return out;
}

function frontMatter(text: string): Record<string, string> {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  const fm: Record<string, string> = {};
  if (!m) return fm;
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return fm;
}

const LABELS: Record<string, string> = {
  united_states: "United States",
  uk: "United Kingdom",
  united_kingdom: "United Kingdom",
  south_africa: "South Africa",
};

function titleCase(s: string): string {
  return s.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

let cached: KnowledgeBase | null = null;

export function loadKnowledge(): KnowledgeBase {
  if (cached) return cached;
  if (!existsSync(KNOWLEDGE_DIR)) {
    cached = { available: false, source: "", countries: [], references: [] };
    return cached;
  }
  const files = walk(KNOWLEDGE_DIR).map((p) => ({ path: p, file: basename(p), text: readFileSync(p, "utf8") }));
  const countries: CountryEntry[] = [];
  const regional: Array<{ fm: Record<string, string>; f: KbFile }> = [];
  for (const f of files) {
    if (!f.path.includes("02-culture")) continue;
    const fm = frontMatter(f.text);
    if (fm.country) {
      countries.push({
        id: fm.country,
        label: LABELS[fm.country] ?? titleCase(fm.country),
        ou: /^not confirmed/i.test(fm.ou ?? "") ? "not confirmed" : (fm.ou ?? "").split(/[\s(—]/)[0] || "not confirmed",
        file: f,
        regions: [],
      });
    } else if (fm.region) {
      regional.push({ fm, f });
    }
  }
  for (const { fm, f } of regional) {
    const parent = (fm.parent_file ?? "").split(/\s/)[0];
    const c = countries.find((c) => c.file.file === parent);
    if (!c) continue;
    const prefix = c.file.file.replace(/\.md$/, "") + "-";
    c.regions.push({ id: fm.region, label: titleCase(fm.region.replace(prefix, "")), file: f });
  }
  for (const c of countries) c.regions.sort((a, b) => a.label.localeCompare(b.label));
  countries.sort((a, b) => a.label.localeCompare(b.label));

  const references = files.filter((f) => f.file === "coca-cola-guidelines.md" || f.file === "tableware-composition-reference.md");
  const sourcePath = join(KNOWLEDGE_DIR, ".source");
  cached = {
    available: countries.length > 0,
    source: existsSync(sourcePath) ? readFileSync(sourcePath, "utf8").split("\n")[0] : KNOWLEDGE_DIR,
    countries,
    references,
  };
  return cached;
}

/** The knowledge files the agent reads for one intake: references + country file + regional file. */
export function contextFiles(countryId: string, regionId?: string): KbFile[] {
  const kb = loadKnowledge();
  const c = kb.countries.find((c) => c.id === countryId);
  if (!c) return kb.references;
  const r = regionId ? c.regions.find((r) => r.id === regionId) : undefined;
  return [...kb.references, c.file, ...(r ? [r.file] : [])];
}
