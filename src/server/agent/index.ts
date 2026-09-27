import { ClaudeAgent } from "./claude";
import { SampleAgent } from "./sample";
import type { IntakeAgent } from "./types";

/** Claude when credentials are configured (or AGENT_MODE=claude), otherwise the offline sample provider. */
export function createAgent(): IntakeAgent {
  const mode = process.env.AGENT_MODE;
  if (mode === "sample") return new SampleAgent();
  if (mode === "claude" || process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN) return new ClaudeAgent();
  return new SampleAgent();
}

export type { IntakeAgent, Brief } from "./types";
