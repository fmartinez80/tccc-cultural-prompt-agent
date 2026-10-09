// Short card text for the option cards: the full text goes to "More details".

import { VESSEL_SHORT } from '../../shared/registry.ts';
import type { Vessel } from '../../shared/types.ts';

/** "Paella pan" */
export function vesselName(v: Vessel): string {
  const s = VESSEL_SHORT[v] ?? v;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** "Paella pan · glazed terracotta" */
export function vesselLine(v: Vessel, style?: string): string {
  return style?.trim() ? `${vesselName(v)} · ${style.trim()}` : vesselName(v);
}

// Words ending in s that are singular dishes (hummus, couscous, …).
const SINGULAR_S = /(ss|us|is)$/i;
const PLURAL_WORD = /^[a-z]+[^s\W]s$|^[a-z]+(es|ies)$/i;

/**
 * "is" or "are" for a dish name: plural when its first or last word is a
 * plural noun ("tacos al pastor", "fish and chips", "patatas bravas").
 */
export function isOrAre(dish: string): 'is' | 'are' {
  const words = dish.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return 'is';
  const plural = (w: string) => PLURAL_WORD.test(w) && !SINGULAR_S.test(w);
  return plural(words[0]!) || plural(words[words.length - 1]!) ? 'are' : 'is';
}

/** "the United Kingdom", "the Philippines", "Spain". */
export function countryPhrase(label: string): string {
  const needsThe = /^(united |czech |dominican |central african )|republic|kingdom|emirates|islands$|^netherlands$|^philippines$|^bahamas$|^maldives$|^gambia$/i;
  return needsThe.test(label.trim()) && !/^the /i.test(label.trim()) ? `the ${label.trim()}` : label.trim();
}

/** "Montevideo, Uruguay" from a region and country label, or just the country; "this country" before one is picked. */
export function placeName(countryLabel: string, regionLabel?: string): string {
  const country = countryLabel.trim();
  if (!country) return 'this country';
  const region = regionLabel?.trim();
  return region ? `${region}, ${countryPhrase(country)}` : countryPhrase(country);
}
