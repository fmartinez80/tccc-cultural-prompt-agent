// Gemini answers in one long request, but the browser was built to start a
// task and poll it (as it did with Runway). Jobs bridge the two: `*Start`
// begins the call and returns an id at once, `*Poll` reads where it is.
//
// Jobs live in this process's memory, so the app runs as a single instance
// (render.yaml). A restart loses running jobs; the browser then shows
// "generate again".

import { randomUUID } from 'node:crypto';

export type Job<T> =
  | { status: 'running'; userId: string; startedAt: number }
  | { status: 'done'; userId: string; startedAt: number; result: T }
  | { status: 'failed'; userId: string; startedAt: number; error: string; rateLimited: boolean };

const KEEP_MS = 3 * 60 * 60 * 1000;
const jobs = new Map<string, Job<unknown>>();

function prune(): void {
  const cutoff = Date.now() - KEEP_MS;
  for (const [id, job] of jobs) if (job.startedAt < cutoff) jobs.delete(id);
}

export function startJob<T>(userId: string, work: () => Promise<T>): string {
  prune();
  const id = randomUUID();
  const startedAt = Date.now();
  jobs.set(id, { status: 'running', userId, startedAt });
  work().then(
    (result) => jobs.set(id, { status: 'done', userId, startedAt, result }),
    (err: unknown) => {
      const error = err instanceof Error ? err.message : String(err);
      const rateLimited = !!(err && typeof err === 'object' && 'rateLimited' in err && err.rateLimited);
      console.warn(`[jobs] ${id} failed: ${error}`);
      jobs.set(id, { status: 'failed', userId, startedAt, error, rateLimited });
    },
  );
  return id;
}

/** A finished job, for answers already known (a cached agent answer). */
export function doneJob<T>(userId: string, result: T): string {
  const id = randomUUID();
  jobs.set(id, { status: 'done', userId, startedAt: Date.now(), result });
  return id;
}

/** The job, if it exists and belongs to this user. */
export function getJob<T>(id: string, userId: string): Job<T> | null {
  const job = jobs.get(id) as Job<T> | undefined;
  return job && job.userId === userId ? job : null;
}

