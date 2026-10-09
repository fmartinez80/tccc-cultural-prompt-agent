// Runs turnaround sheets: for each element, the profile view first, then the
// 30° and top-down views in parallel with the profile as their reference, so
// all three show the same object. Each view is submit-now, poll-a-status-
// endpoint (turnaroundStart / turnaroundPoll). At most two elements run at
// once so "generate all" stays under the account's concurrent-task ceiling.

import { useCallback, useEffect, useRef, useState } from 'react';

import { TURNAROUND_VIEWS, type TurnaroundView } from '../../shared/turnaround.ts';
import type { ProductRefs } from '../../shared/workspace.ts';
import type { SavedTurnaround } from '../intake/useIntake.ts';
import { trpc } from '../trpc.ts';
import { recordDuration } from './progress.ts';

export type ViewStatus = 'idle' | 'queued' | 'running' | 'done' | 'error';

export interface LiveTurnaround {
  views: ViewStatus[];
  /** When the element's first view started, for the progress bar. */
  startedAt: number | null;
  error: string | null;
  /** The raw failure, so the UI can tell a sign-in or plan problem from the rest. */
  cause: unknown;
}

const MAX_ELEMENTS_AT_ONCE = 2;
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

/** `product`: the catalog photos the server adds to the SKU and GLASS views (read at submit time). */
export function useTurnarounds(onView: (label: string, text: string, index: number, url: string) => void, product?: ProductRefs) {
  const utils = trpc.useUtils();
  const [live, setLive] = useState<Record<string, LiveTurnaround>>({});
  const aliveRef = useRef(true);
  const queueRef = useRef<Array<{ label: string; text: string }>>([]);
  const activeRef = useRef(0);
  const onViewRef = useRef(onView);
  onViewRef.current = onView;
  const productRef = useRef(product);
  productRef.current = product;

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      queueRef.current = [];
    };
  }, []);

  const patch = useCallback((label: string, fn: (t: LiveTurnaround) => LiveTurnaround) => {
    if (!aliveRef.current) return;
    setLive((all) => ({ ...all, [label]: fn(all[label] ?? { views: ['idle', 'idle', 'idle'], startedAt: null, error: null, cause: null }) }));
  }, []);

  const runView = useCallback(
    async (label: string, text: string, view: TurnaroundView, referenceUrl?: string): Promise<string> => {
      const begun = Date.now();
      let taskId: string | undefined;
      for (let attempt = 0; !taskId; attempt++) {
        if (!aliveRef.current) throw new Cancelled();
        try {
          ({ taskId } = await utils.client.turnaroundStart.mutate({ label, text, view, referenceUrl, product: productRef.current }));
        } catch (err) {
          // Busy account: nothing was created, so wait for one of its own tasks to finish and resubmit.
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
        const snap = await utils.client.turnaroundPoll.mutate({ taskId });
        if (snap.done) {
          if ('error' in snap) throw new Error(snap.error);
          recordDuration('turnaround-view', begun);
          return snap.url;
        }
        if (Date.now() - started > POLL_TIMEOUT_MS) {
          throw new Error('Nano Banana 2 took longer than 6 minutes on this view. Generate again.');
        }
      }
    },
    [utils],
  );

  const setView = (label: string, i: number, status: ViewStatus) =>
    patch(label, (t) => ({ ...t, views: t.views.map((v, j) => (j === i ? status : v)) }));

  const fail = (label: string, err: unknown, views: number[]) => {
    if (err instanceof Cancelled) return;
    patch(label, (t) => ({
      views: t.views.map((v, j) => (views.includes(j) ? 'error' : v)),
      startedAt: t.startedAt,
      error: err instanceof Error ? err.message : String(err),
      cause: err,
    }));
  };

  const runElement = useCallback(
    async (label: string, text: string) => {
      patch(label, () => ({ views: ['running', 'queued', 'queued'], startedAt: Date.now(), error: null, cause: null }));
      let profile: string;
      try {
        profile = await runView(label, text, 'profile');
      } catch (err) {
        fail(label, err, [0, 1, 2]);
        return;
      }
      onViewRef.current(label, text, 0, profile);
      patch(label, (t) => ({ ...t, views: ['done', 'running', 'running'] }));
      await Promise.all(
        TURNAROUND_VIEWS.slice(1).map(async (v, k) => {
          const i = k + 1;
          try {
            const url = await runView(label, text, v.id, profile);
            onViewRef.current(label, text, i, url);
            setView(label, i, 'done');
          } catch (err) {
            fail(label, err, [i]);
          }
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [patch, runView],
  );

  const pump = useCallback(() => {
    while (aliveRef.current && activeRef.current < MAX_ELEMENTS_AT_ONCE && queueRef.current.length > 0) {
      const next = queueRef.current.shift()!;
      activeRef.current++;
      void runElement(next.label, next.text).finally(() => {
        activeRef.current--;
        pump();
      });
    }
  }, [runElement]);

  /** Queue elements for generation; an element already queued or running is skipped. */
  const generate = useCallback(
    (items: Array<{ label: string; text: string }>) => {
      for (const it of items) {
        const t = live[it.label];
        const busy = t?.views.some((v) => v === 'running' || v === 'queued');
        if (busy || queueRef.current.some((q) => q.label === it.label)) continue;
        queueRef.current.push(it);
        patch(it.label, () => ({ views: ['queued', 'queued', 'queued'], startedAt: null, error: null, cause: null }));
      }
      pump();
    },
    [live, patch, pump],
  );

  return { live, generate };
}

/** A saved set counts only while its text matches the segment's current text. */
export function savedUrls(saved: SavedTurnaround | undefined, text: string): Array<string | null> {
  return saved && saved.text === text ? saved.urls : [null, null, null];
}
