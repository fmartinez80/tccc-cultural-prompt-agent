// Submit-now, poll-from-a-status-endpoint hook for one dish's learn run
// (learnStart/learnPoll). Shaped like src/client/lib/useAgentTask.ts but
// carries a dishKey and merges the result straight into the feedbackDish
// query cache so Lessons/KbEdits sections re-render with the new drafts.

import { useCallback, useEffect, useRef, useState } from 'react';

import { recordDuration } from '../lib/progress.ts';
import { trpc } from '../trpc.ts';

export type LearnRunStatus = 'idle' | 'starting' | 'polling' | 'done' | 'error';

const POLL_INTERVAL_MS = 3000;
export const LEARN_TIMING_KEY = 'learn';

export function useLearnRun(dishKey: string) {
  const utils = trpc.useUtils();
  const startMutation = trpc.learnStart.useMutation();
  const pollMutation = trpc.learnPoll.useMutation();
  const [status, setStatus] = useState<LearnRunStatus>('idle');
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [reported, setReported] = useState<number | null>(null);
  const [learnError, setLearnError] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const startedRef = useRef<number | null>(null);
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
    (taskId: string) => {
      pollMutation.mutate(
        { taskId, dishKey },
        {
          onSuccess: (data) => {
            if (!liveRef.current || activeTaskRef.current !== taskId) return;
            if (!data.done) {
              setReported(data.progress);
              pollTimerRef.current = setTimeout(() => poll(taskId), POLL_INTERVAL_MS);
              return;
            }
            stopTimers();
            if ('error' in data) {
              setStatus('error');
              setLearnError(data.error);
              return;
            }
            if (startedRef.current !== null) recordDuration(LEARN_TIMING_KEY, startedRef.current);
            setStatus('done');
            setSummary(data.learning.summary);
            utils.feedbackDish.setData({ dishKey }, (prev) => (prev ? { ...prev, learning: data.learning } : prev));
          },
          onError: () => {
            if (!liveRef.current || activeTaskRef.current !== taskId) return;
            stopTimers();
            setStatus('error');
          },
        }
      );
    },
    [dishKey, pollMutation, stopTimers, utils]
  );

  const run = useCallback(() => {
    liveRef.current = true;
    stopTimers();
    setStatus('starting');
    setLearnError(null);
    setSummary(null);
    const now = Date.now();
    startedRef.current = now;
    setStartedAt(now);
    setReported(null);
    startMutation.mutate(
      { dishKey },
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
      }
    );
  }, [dishKey, poll, startMutation, stopTimers]);

  return {
    status,
    startedAt,
    reported,
    learnError,
    summary,
    trpcError: startMutation.error ?? pollMutation.error ?? null,
    run,
  };
}
