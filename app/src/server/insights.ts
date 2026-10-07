// Highlights from the knowledge base for the home screen: what it covers and
// which country and regional files were added most recently (by each file's
// `date_drafted` front matter). Computed once per knowledge-base reload.

import { frontMatter, loadKnowledge } from './knowledge.ts';
import { SKU_CATALOG } from '../shared/registry.ts';

export type KbHighlights = {
  markets: number;
  regions: number;
  files: number;
  skus: number;
  recent: Array<{ label: string; kind: 'country' | 'region'; date: string }>;
};

let cached: { kb: object; value: KbHighlights } | null = null;

export function kbHighlights(): KbHighlights {
  const kb = loadKnowledge();
  if (cached?.kb === kb) return cached.value;
  const entries: KbHighlights['recent'] = [];
  for (const c of kb.countries) {
    const push = (label: string, kind: 'country' | 'region', text: string) => {
      const date = (frontMatter(text).date_drafted ?? '').match(/\d{4}-\d{2}-\d{2}/)?.[0];
      if (date) entries.push({ label, kind, date });
    };
    push(c.label, 'country', c.file.text);
    for (const r of c.regions) push(`${r.label} (${c.label})`, 'region', r.file.text);
  }
  entries.sort((a, b) => b.date.localeCompare(a.date) || a.label.localeCompare(b.label));
  const regions = kb.countries.reduce((n, c) => n + c.regions.length, 0);
  const value: KbHighlights = {
    markets: kb.countries.length,
    regions,
    files: kb.countries.length + regions + kb.references.length,
    skus: SKU_CATALOG.filter((s) => !s.retired).length,
    recent: entries.slice(0, 6),
  };
  cached = { kb, value };
  return value;
}
