// Finer kinds of place within each venue, picked on the Scene step. The label
// goes to the story agent as the environment brief; `surfaceText` (and a
// smaller `surface` where the table really is smaller) override the default
// table so the proxy and the prompt match the place.

import type { Surface, Venue } from "./types";

export interface VenueType {
  id: string;
  label: string;
  /** How the place is described to the story agent. */
  prompt: string;
  surfaceText?: string;
  surface?: Surface;
}

export const VENUE_TYPES: Record<Venue, VenueType[]> = {
  home: [
    { id: "family-home", label: "Family home", prompt: "a lived-in family home: kitchen or everyday eating area, family touches, relaxed and busy" },
    { id: "genz-apartment", label: "Gen Z apartment", prompt: "a small, styled Gen Z rental apartment: plants, a few design objects, personal touches, compact and bright", surfaceText: "a small apartment dining table", surface: "table-2top" },
    { id: "kitchen-island", label: "Kitchen island", prompt: "a home kitchen seen from a seat at the kitchen island, cabinets and counters behind", surfaceText: "a kitchen island countertop" },
    { id: "dining-room", label: "Dining room", prompt: "a home dining room: a proper dining table, chairs, a sideboard or window behind", surfaceText: "a dining-room table" },
  ],
  restaurant: [
    { id: "casual-dining", label: "Casual sit-down", prompt: "a casual sit-down neighborhood restaurant" },
    { id: "local-spot", label: "Traditional local spot", prompt: "a traditional, family-run local restaurant typical of this region" },
    { id: "food-court", label: "Food court", prompt: "a busy shopping-mall food court: shared seating, bright and practical", surfaceText: "a food-court table" },
    { id: "gastropub", label: "Gastropub", prompt: "a gastropub: dark wood, warm pendant lights, bar in the background", surfaceText: "a solid wooden gastropub table" },
    { id: "fast-casual", label: "Fast casual", prompt: "a modern fast-casual restaurant: clean counters, simple fixtures, order-at-the-counter feel", surfaceText: "a fast-casual restaurant table" },
    { id: "cafe", label: "Café", prompt: "a small neighborhood café", surfaceText: "a small café table", surface: "table-2top" },
  ],
  "on-the-go": [
    { id: "park", label: "Park", prompt: "a city park: trees, grass and paths" },
    { id: "street-market", label: "Street market", prompt: "an open-air street market with stalls" },
    { id: "food-truck", label: "Food truck", prompt: "beside a food truck on a city street" },
    { id: "beach", label: "Beach or waterfront", prompt: "a beach or waterfront promenade" },
    { id: "stadium", label: "Stadium or event", prompt: "outside a stadium or at an outdoor event" },
  ],
};

export function venueType(venue: Venue, id: string | undefined): VenueType | undefined {
  return id ? VENUE_TYPES[venue].find((t) => t.id === id) : undefined;
}

/** The environment brief for the story agent, or "" when the operator gave none. */
export function environmentBrief(scene: { venue: Venue; venueType?: string | undefined; environmentNote?: string | undefined }): string {
  const t = venueType(scene.venue, scene.venueType);
  const note = scene.environmentNote?.trim();
  return [t && `Place: ${t.label} (${t.prompt}).`, note && `The operator's description: ${note}`].filter(Boolean).join(" ");
}
