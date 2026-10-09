// The brief the operator is working on, sent with every API request (the
// `x-scene-brief` header) so each generated image is filed under its country,
// region and dish for My scenes and the Studio dashboard.

export interface ActiveBrief {
  country: string;
  countryLabel?: string | undefined;
  region?: string | undefined;
  heroDish: string;
  occasion?: string | undefined;
  skuId?: string | undefined;
}

let current: ActiveBrief | null = null;

export function setActiveBrief(brief: ActiveBrief | null): void {
  current = brief && brief.country && brief.heroDish ? brief : null;
}

/** Header value for the current brief, or undefined when there is none. */
export function activeBriefHeader(): string | undefined {
  return current ? encodeURIComponent(JSON.stringify(current)) : undefined;
}
