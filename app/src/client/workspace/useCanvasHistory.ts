// Undo/redo for canvas-level changes (moves, bypass toggles, reset-to-story,
// tidy layout, use-as-reference toggles, text edits committed on blur).
// Snapshots exclude `results` and `proxy` so undo can never take back a
// generated image or a completed upload.

import { useCallback, useReducer, useRef } from 'react';

import type { WorkspaceState } from '../../shared/workspace.ts';

const MAX_HISTORY = 50;

type Snapshot = Pick<WorkspaceState, 'edits' | 'bypassed' | 'previews' | 'useAsRef' | 'settings' | 'positions'>;

function pick(ws: WorkspaceState): Snapshot {
  return {
    edits: ws.edits,
    bypassed: ws.bypassed,
    previews: ws.previews,
    useAsRef: ws.useAsRef,
    settings: ws.settings,
    positions: ws.positions,
  };
}

export function useCanvasHistory(ws: WorkspaceState, updateWorkspace: (fn: (ws: WorkspaceState) => WorkspaceState) => void) {
  const past = useRef<Snapshot[]>([]);
  const future = useRef<Snapshot[]>([]);
  const [, bump] = useReducer((n: number) => n + 1, 0);

  const push = useCallback((snap: Snapshot) => {
    past.current = [...past.current, snap].slice(-MAX_HISTORY);
    future.current = [];
  }, []);

  /** Apply a change and remember how to undo it. */
  const record = useCallback(
    (mutate: (ws: WorkspaceState) => WorkspaceState) => {
      push(pick(ws));
      bump();
      updateWorkspace(mutate);
    },
    [ws, push, updateWorkspace],
  );

  /**
   * Remember a past state without changing the current one — for an edit
   * that already autosaved keystroke-by-keystroke (a segment textarea):
   * call this on blur with the value the field held when it gained focus.
   */
  const pushBefore = useCallback(
    (overrides: Partial<Snapshot>) => {
      push({ ...pick(ws), ...overrides });
      bump();
    },
    [ws, push],
  );

  const undo = useCallback(() => {
    if (!past.current.length) return;
    const prev = past.current[past.current.length - 1]!;
    past.current = past.current.slice(0, -1);
    future.current = [...future.current, pick(ws)];
    bump();
    updateWorkspace((w) => ({ ...w, ...prev }));
  }, [ws, updateWorkspace]);

  const redo = useCallback(() => {
    if (!future.current.length) return;
    const next = future.current[future.current.length - 1]!;
    future.current = future.current.slice(0, -1);
    past.current = [...past.current, pick(ws)];
    bump();
    updateWorkspace((w) => ({ ...w, ...next }));
  }, [ws, updateWorkspace]);

  return {
    record,
    pushBefore,
    undo,
    redo,
    canUndo: past.current.length > 0,
    canRedo: future.current.length > 0,
  };
}

export type CanvasHistory = ReturnType<typeof useCanvasHistory>;
