import type { AccentChoice, Decision, IntakeInput, PlatingChoice, PrepChoice, SceneSpec, SidesChoice, SurfaceChoice } from "../../shared/types";
import type { Selections } from "../../shared/spec";
import type { Story, StoryFacts, Validation } from "../../shared/story";
import type { Blueprint } from "../../shared/types";

export interface Brief extends IntakeInput {
  countryLabel: string;
  regionLabel: string;
}

/**
 * The intake agent behind the guided interface. Each method returns the
 * decision cards for one step: one resolved option when the dish is served
 * one way, or up to 3 options with the first suggested.
 */
export interface IntakeAgent {
  readonly mode: "claude" | "sample";
  prep(brief: Brief): Promise<Decision<PrepChoice>>;
  plating(brief: Brief, sel: Selections): Promise<Decision<PlatingChoice>>;
  sides(brief: Brief, sel: Selections): Promise<Decision<SidesChoice>>;
  surface(brief: Brief, sel: Selections): Promise<Decision<SurfaceChoice>>;
  accent(brief: Brief, sel: Selections): Promise<Decision<AccentChoice>>;
  story(brief: Brief, spec: SceneSpec, bp: Blueprint, facts: StoryFacts, notes?: string[]): Promise<Story>;
  validate(brief: Brief, spec: SceneSpec, story: Story): Promise<Validation>;
}
