// Keeps the whole composer session on the server once it has produced a scene,
// so My Projects can reopen it from any of those scenes. A new scene saves at
// once (and points its generation at this session); later changes save a few
// seconds after the operator stops editing.

import { useEffect, useRef } from 'react';

import { trpc } from '../trpc.ts';
import type { Draft } from './useIntake.ts';

const SETTLE_MS = 4000;
/** Scene images are stored as generations/<user>/<generation id>-<n>.<ext>. */
const GENERATION_ID = /\/media\/generations\/[^/]+\/([0-9a-f-]{36})-\d+\.\w+$/;

function generationIds(draft: Draft): string[] {
  const ids = new Set<string>();
  for (const r of draft.workspace.results) {
    for (const url of r.urls) {
      const m = GENERATION_ID.exec(url);
      if (m) ids.add(m[1]!);
    }
  }
  return [...ids];
}

export function useSessionSync(draft: Draft): void {
  const { mutateAsync } = trpc.saveSession.useMutation();
  const save = useRef(mutateAsync);
  save.current = mutateAsync;
  const pointed = useRef(new Set<string>());

  useEffect(() => {
    if (!draft.sessionId || draft.workspace.results.length === 0) return;
    const fresh = generationIds(draft).filter((id) => !pointed.current.has(id));
    const timer = setTimeout(
      () => {
        save
          .current({ sessionId: draft.sessionId, draft: draft as unknown as Record<string, unknown>, generationIds: fresh })
          .then(() => fresh.forEach((id) => pointed.current.add(id)))
          .catch(() => {
            // Not fatal: the draft is still in this browser, and the next change tries again.
          });
      },
      fresh.length ? 0 : SETTLE_MS,
    );
    return () => clearTimeout(timer);
  }, [draft]);
}
