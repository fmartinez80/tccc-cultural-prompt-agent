// Submit-now, poll-from-a-status-endpoint client for one agent step.
// `agentStart` returns a task id immediately; `agentPoll` is called on an
// interval until the task is done. Two-phase because the underlying Runway
// task can take 10-90s, well past what a single request should hold open.

import { useCallback, useEffect, useRef, useState } from 'react';

import type { AgentResult } from '../../api.ts';
import type { Selections } from '../../shared/spec.ts';
import type { Blueprint, SceneSpec } from '../../shared/types.ts';
import type { Story } from '../../shared/story.ts';
import type { Brief } from '../intake/types.ts';
import { trpc } from '../trpc.ts';
import { recordDuration } from './progress.ts';

export type AgentKind = 'prep' | 'plating' | 'sides' | 'surface' | 'accent' | 'express' | 'story' | 'validate' | 'imageCheck';

export type AgentTaskStatus = 'idle' | 'starting' | 'polling' | 'done' | 'error';

export interface AgentTaskInput {
  brief: Brief;
  selections?: Selections | undefined;
  spec?: SceneSpec | undefined;
  blueprint?: Blueprint | undefined;
  story?: Story | undefined;
  notes?: string[] | undefined;
  directions?: string[] | undefined;
  custom?: string | undefined;
  shownOptions?: string[] | undefined;
  imageUrls?: string[] | undefined;
  prompt?: string | undefined;
  elements?: string[] | undefined;
}

const POLL_INTERVAL_MS = 2500;

/** What a progress bar needs to show percent complete and time left for one run. */
export interface TaskTiming {
  /** Learned-duration key, e.g. "agent:prep". */
  key: string;
  startedAt: number | null;
  /** 0-1 when Runway reports progress; null otherwise. */
  reported: number | null;
}

/**
 * Runs one agent task of a fixed `kind`. `result` narrows on `.kind` at the
 * call site (it's a plain discriminated union), so no cast is needed there.
 */
export function useAgentTask(kind: AgentKind, timingKey: string = `agent:${kind}`) {
  const startMutation = trpc.agentStart.useMutation();
  const pollMutation = trpc.agentPoll.useMutation();
  const [status, setStatus] = useState<AgentTaskStatus>('idle');
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [reported, setReported] = useState<number | null>(null);
  const startedRef = useRef<number | null>(null);
  const [result, setResult] = useState<AgentResult | null>(null);
  const [agentError, setAgentError] = useState<string | null>(null);
  /** True while the server is fixing up a malformed answer. */
  const [repairing, setRepairing] = useState(false);

  const pollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeTaskRef = useRef<string | null>(null);
  const liveRef = useRef(true);

  const stopTimers = useCallback(() => {
    setStartedAt(null);
    if (pollTimerRef.current) {
      clearTimeout(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    liveRef.current = true;
    return () => {
      liveRef.current = false;
      activeTaskRef.current = null;
      stopTimers();
    };
  }, [stopTimers]);

  const poll = useCallback(
    (taskId: string, repair = false) => {
      pollMutation.mutate(
        { taskId, kind, repair },
        {
          onSuccess: (data) => {
            if (!liveRef.current || activeTaskRef.current !== taskId) return;
            if (!data.done) {
              setReported(data.progress);
              // The server sent a malformed answer back for a fix-up; follow the new task.
              const next = data.taskId ?? taskId;
              if (data.taskId) {
                activeTaskRef.current = data.taskId;
                setRepairing(true);
              }
              pollTimerRef.current = setTimeout(() => poll(next, repair || !!data.taskId), POLL_INTERVAL_MS);
              return;
            }
            stopTimers();
            if ('error' in data) {
              setStatus('error');
              setAgentError(data.error);
              return;
            }
            if (startedRef.current !== null) recordDuration(timingKey, startedRef.current);
            setStatus('done');
            setResult(data.result);
          },
          onError: () => {
            if (!liveRef.current || activeTaskRef.current !== taskId) return;
            stopTimers();
            setStatus('error');
          },
        },
      );
    },
    [kind, pollMutation, stopTimers, timingKey],
  );

  const run = useCallback(
    (input: AgentTaskInput) => {
      liveRef.current = true;
      stopTimers();
      setStatus('starting');
      setRepairing(false);
      setAgentError(null);
      setResult(null);
      const now = Date.now();
      startedRef.current = now;
      setStartedAt(now);
      setReported(null);
      startMutation.mutate(
        { kind, ...input },
        {
          onSuccess: ({ taskId }) => {
            if (!liveRef.current) return;
            activeTaskRef.current = taskId;
            setStatus('polling');
            poll(taskId);
          },
          onError: () => {
            stopTimers();
            setStatus('error');
          },
        },
      );
    },
    [kind, poll, startMutation, stopTimers],
  );

  const reset = useCallback(() => {
    activeTaskRef.current = null;
    stopTimers();
    setStatus('idle');
    setResult(null);
    setAgentError(null);
  }, [stopTimers]);

  return {
    status,
    timing: { key: timingKey, startedAt, reported } satisfies TaskTiming,
    repairing,
    result,
    agentError,
    trpcError: startMutation.error ?? pollMutation.error ?? null,
    run,
    reset,
  };
}
