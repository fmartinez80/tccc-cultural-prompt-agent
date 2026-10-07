// Percent complete and time left for the app's waits. The cultural agent
// (claude_api) reports no progress, so most waits are estimated from how long
// the same kind of job took the last few times in this browser, with a
// starting guess per job. When Runway does report progress (image models
// sometimes do), that number wins.

import { useEffect, useState } from 'react';

const STORE_KEY = 'tablescape.durations.v1';
const KEEP = 5;
/** The estimate stops here until the job really finishes. */
const ESTIMATE_CAP = 92;

/** Starting guesses in seconds, replaced by real timings as jobs finish. */
const DEFAULT_SECONDS: Record<string, number> = {
  'agent:prep': 35,
  'agent:plating': 35,
  'agent:sides': 40,
  'agent:surface': 30,
  'agent:accent': 30,
  'agent:story': 80,
  'agent:validate': 50,
  'agent:imageCheck': 60,
  compose: 3,
  'image-upload': 6,
  'turnaround-view': 30,
  'review-sketch': 40,
  'workspace:preview': 45,
  'workspace:scene:1': 60,
  'workspace:scene:4': 90,
};
const FALLBACK_SECONDS = 45;

function readStore(): Record<string, number[]> {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number[]>) : {};
  } catch {
    return {};
  }
}

/** Typical duration of a job in seconds: the median of recent runs, else the starting guess. */
export function expectedSeconds(key: string): number {
  const runs = readStore()[key];
  if (runs?.length) {
    const sorted = [...runs].sort((a, b) => a - b);
    return sorted[Math.floor(sorted.length / 2)]!;
  }
  // "workspace:scene:4:2K" falls back to "workspace:scene:4", then "workspace:scene".
  for (let k = key; k; k = k.includes(':') ? k.slice(0, k.lastIndexOf(':')) : '') {
    if (DEFAULT_SECONDS[k] !== undefined) return DEFAULT_SECONDS[k];
  }
  return FALLBACK_SECONDS;
}

/** Remember how long a successful job took, so the next estimate is closer. */
export function recordDuration(key: string, startedAt: number): void {
  const seconds = (Date.now() - startedAt) / 1000;
  if (!(seconds > 0.2) || seconds > 900) return;
  try {
    const store = readStore();
    store[key] = [...(store[key] ?? []), Math.round(seconds * 10) / 10].slice(-KEEP);
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch {
    // Private mode or full storage: estimates just stay at the starting guess.
  }
}

export interface Progress {
  /** 0-99 while running. */
  percent: number;
  /** Whole seconds left, or null once the job runs past its usual time. */
  secondsLeft: number | null;
  /** True when the number comes from the time a job usually takes, not the model. */
  estimated: boolean;
}

export function progressAt(elapsedS: number, expectedS: number, reported?: number | null): Progress {
  if (reported != null && reported > 0.02) {
    const p = Math.min(reported, 0.99);
    const left = elapsedS > 1 ? (elapsedS / p) * (1 - p) : expectedS - elapsedS;
    return { percent: Math.round(p * 100), secondsLeft: Math.max(1, Math.round(left)), estimated: false };
  }
  if (elapsedS < expectedS) {
    return {
      percent: Math.round((elapsedS / expectedS) * ESTIMATE_CAP),
      secondsLeft: Math.max(1, Math.round(expectedS - elapsedS)),
      estimated: true,
    };
  }
  // Past the usual time: creep toward 99% without ever claiming it's done.
  const over = (elapsedS - expectedS) / expectedS;
  return {
    percent: Math.min(99, Math.round(ESTIMATE_CAP + (99 - ESTIMATE_CAP) * (1 - Math.exp(-over * 1.5)))),
    secondsLeft: null,
    estimated: true,
  };
}

/**
 * Ticks once a second while `startedAt` is set. `expectedS` overrides the
 * learned duration for `key` (for jobs made of several steps).
 */
export function useProgress(key: string, startedAt: number | null, reported?: number | null, expectedS?: number): Progress | null {
  const [now, setNow] = useState(() => Date.now());
  const [expected, setExpected] = useState(() => expectedSeconds(key));
  useEffect(() => {
    if (startedAt === null) return;
    setExpected(expectedSeconds(key));
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(id);
  }, [key, startedAt]);
  if (startedAt === null) return null;
  return progressAt(Math.max(0, (now - startedAt) / 1000), expectedS ?? expected, reported);
}
