// "Your own version" on the decision steps (prep, plating, sides): the
// operator describes what they want — an adjusted option ("like B, but
// grilled") or something else entirely — and the agent turns it into one
// structured option. It is added next to A/B/C with id "custom" and picked.

import { useEffect, useState } from 'react';

import type { AgentResult } from '../../api.ts';
import type { Selections } from '../../shared/spec.ts';
import type { Decision, StepName } from '../../shared/types.ts';
import { useAgentTask, type TaskTiming } from '../lib/useAgentTask.ts';
import { useOnSignedIn } from '../lib/useOnSignedIn.ts';
import type { Brief } from './types.ts';

type Option<T> = Decision<T>['options'][number];

/** Fresh agent options, keeping the operator's own version if there was one. */
export function keepCustom<T>(next: Decision<T>, prev: Decision<T> | null): Decision<T> {
  const custom = prev?.options.find((o) => o.id === 'custom');
  return custom ? { ...next, options: [...next.options.filter((o) => o.id !== 'custom'), custom] } : next;
}

export interface CustomOptionState {
  text: string;
  setText: (t: string) => void;
  submit: () => void;
  status: ReturnType<typeof useAgentTask>['status'];
  timing: TaskTiming;
  agentError: string | null;
  trpcError: unknown;
  onSignedIn: () => void;
}

export function useCustomOption<T>({
  kind,
  brief,
  sel,
  decision,
  onDecision,
  onPick,
  describe,
  extract,
}: {
  kind: Extract<StepName, 'prep' | 'plating' | 'sides' | 'express'>;
  brief: Brief;
  sel?: Selections | undefined;
  decision: Decision<T> | null;
  onDecision: (d: Decision<T>) => void;
  onPick: (v: T) => void;
  /** One line per shown option, so the agent can follow "like B, but…". */
  describe: (v: T) => string;
  /** This step's option out of the agent result. */
  extract: (r: AgentResult) => Option<T> | undefined;
}): CustomOptionState {
  // One option instead of three: timed separately from the step's own call.
  const task = useAgentTask(kind, `agent:${kind}:custom`);
  const signIn = useOnSignedIn();
  const [text, setText] = useState('');

  const submit = () => {
    const custom = text.trim();
    if (!custom) return;
    task.run({
      brief,
      selections: sel,
      custom,
      shownOptions: decision?.options.filter((o) => o.id !== 'custom').map((o) => `${o.id}: ${describe(o.value)}`),
    });
  };

  useEffect(() => {
    if (!task.result) return;
    const o = extract(task.result);
    if (!o) return;
    const own: Option<T> = { id: 'custom', suggested: false, rationale: o.rationale, value: o.value };
    const base: Decision<T> = decision ?? { step: kind, status: 'choose', options: [], source: 'agent' };
    onDecision({ ...base, options: [...base.options.filter((x) => x.id !== 'custom'), own] });
    onPick(o.value);
    task.reset();
    // Only when a new answer lands.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.result]);

  return {
    text,
    setText,
    submit,
    status: task.status,
    timing: task.timing,
    agentError: task.agentError,
    trpcError: task.trpcError,
    onSignedIn: () => signIn(submit),
  };
}
