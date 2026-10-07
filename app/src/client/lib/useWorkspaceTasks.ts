// Generic submit-now, poll-a-status-endpoint runner for the workspace's Nano
// Banana Pro jobs: one call per segment preview, one for the scene. Mirrors
// useTurnarounds' busy-retry / poll-timeout / cancel-on-unmount pattern, but
// keyed generically (segment key, or 'scene') instead of by view index.

import { useCallback, useEffect, useRef, useState } from 'react';

import type { ProductRefs } from '../../shared/workspace.ts';
import { trpc } from '../trpc.ts';
import { recordDuration } from './progress.ts';

export type TaskStatus = 'idle' | 'queued' | 'running' | 'error';

export interface LiveTask {
  status: TaskStatus;
  startedAt: number | null;
  /** Learned-duration key for the progress bar, e.g. "workspace:scene:4:2K". */
  timingKey: string;
  /** 0-1 when Runway reports progress; null otherwise. */
  progress: number | null;
  error: string | null;
  /** The raw failure, so the UI can tell a sign-in or plan problem from the rest. */
  cause: unknown;
}

export interface WorkspaceTaskInput {
  purpose: 'element' | 'environment' | 'scene';
  label: string;
  prompt: string;
  aspectRatio: string;
  imageSize: '1K' | '2K' | '4K';
  numImages: 1 | 4;
  references: Array<{ tag: string; url: string }>;
  /** Catalog product photos the server appends after `references`. */
  product?: ProductRefs;
}

const MAX_CONCURRENT = 2;
const POLL_MS = 3000;
const POLL_TIMEOUT_MS = 6 * 60_000;
const BUSY_RETRY_MS = 15_000;
const BUSY_RETRIES = 8;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function errorCode(err: unknown): string | undefined {
  if (typeof err !== 'object' || err === null || !('data' in err)) return undefined;
  const data = (err as { data?: unknown }).data;
  return typeof data === 'object' && data !== null ? ((data as { code?: unknown }).code as string | undefined) : undefined;
}

export function isForbidden(err: unknown): boolean {
  return errorCode(err) === 'FORBIDDEN';
}

class Cancelled extends Error {}

const IDLE_TASK: LiveTask = { status: 'idle', startedAt: null, timingKey: '', progress: null, error: null, cause: null };

export function timingKey(input: WorkspaceTaskInput): string {
  return input.purpose === 'scene' ? `workspace:scene:${input.numImages}:${input.imageSize}` : `workspace:preview:${input.imageSize}`;
}

export function useWorkspaceTasks() {
  const utils = trpc.useUtils();
  const [live, setLive] = useState<Record<string, LiveTask>>({});
  const aliveRef = useRef(true);
  const queueRef = useRef<Array<{ key: string; run: () => Promise<void> }>>([]);
  const activeRef = useRef(0);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      queueRef.current = [];
    };
  }, []);

  const patch = useCallback((key: string, fn: (t: LiveTask) => LiveTask) => {
    if (!aliveRef.current) return;
    setLive((all) => ({ ...all, [key]: fn(all[key] ?? IDLE_TASK) }));
  }, []);

  const submitAndPoll = useCallback(
    async (input: WorkspaceTaskInput, onProgress: (p: number | null) => void): Promise<string[]> => {
      let taskId: string | undefined;
      for (let attempt = 0; !taskId; attempt++) {
        if (!aliveRef.current) throw new Cancelled();
        try {
          ({ taskId } = await utils.client.workspaceStart.mutate(input));
        } catch (err) {
          // At the account's concurrent-task ceiling, nothing was created: wait and resubmit.
          if (errorCode(err) === 'TOO_MANY_REQUESTS' && attempt < BUSY_RETRIES) {
            await sleep(BUSY_RETRY_MS);
            continue;
          }
          throw err;
        }
      }
      const started = Date.now();
      for (;;) {
        await sleep(POLL_MS);
        if (!aliveRef.current) throw new Cancelled();
        const snap = await utils.client.workspacePoll.mutate({ taskId });
        if (snap.done) {
          if ('error' in snap) throw new Error(snap.error);
          return snap.urls;
        }
        onProgress(snap.progress);
        if (Date.now() - started > POLL_TIMEOUT_MS) {
          throw new Error('Nano Banana Pro took longer than 6 minutes. Generate again.');
        }
      }
    },
    [utils],
  );

  /** Run one job right away (a single preview / generate button press). */
  const run = useCallback(
    (key: string, input: WorkspaceTaskInput): Promise<string[]> => {
      const begun = Date.now();
      const tk = timingKey(input);
      patch(key, () => ({ status: 'running', startedAt: begun, timingKey: tk, progress: null, error: null, cause: null }));
      return submitAndPoll(input, (progress) => patch(key, (t) => ({ ...t, progress })))
        .then((urls) => {
          recordDuration(tk, begun);
          patch(key, () => IDLE_TASK);
          return urls;
        })
        .catch((err) => {
          if (err instanceof Cancelled) throw err;
          patch(key, () => ({ ...IDLE_TASK, status: 'error', error: err instanceof Error ? err.message : String(err), cause: err }));
          throw err;
        });
    },
    [patch, submitAndPoll],
  );

  const pump = useCallback(() => {
    while (aliveRef.current && activeRef.current < MAX_CONCURRENT && queueRef.current.length > 0) {
      const next = queueRef.current.shift()!;
      activeRef.current++;
      void next.run().finally(() => {
        activeRef.current--;
        pump();
      });
    }
  }, []);

  /**
   * Queue several jobs behind a small concurrency limit ("preview all
   * elements"). A key already queued or running is skipped; each item's
   * `onDone` runs once its own job succeeds (a failure is left visible in
   * `live[key]` and does not call it).
   */
  const runMany = useCallback(
    (items: Array<{ key: string; input: WorkspaceTaskInput; onDone: (urls: string[]) => void }>) => {
      for (const it of items) {
        const t = live[it.key];
        if (t?.status === 'running' || t?.status === 'queued') continue;
        if (queueRef.current.some((q) => q.key === it.key)) continue;
        patch(it.key, () => ({ ...IDLE_TASK, status: 'queued' }));
        queueRef.current.push({ key: it.key, run: () => run(it.key, it.input).then(it.onDone, () => {}) });
      }
      pump();
    },
    [live, patch, pump, run],
  );

  return { live, run, runMany };
}
