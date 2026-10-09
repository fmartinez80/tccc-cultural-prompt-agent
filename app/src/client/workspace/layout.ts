// Canvas geometry: node ids, the default column layout used when a node has
// no saved position, and the small pure-math helpers the canvas view needs.

import { isActive, sceneReferences, type WorkspaceState, type WsSegment } from '../../shared/workspace.ts';
import type { EdgeSpec } from './Edges.tsx';

export const NODE_WIDTH = 340;
export const COL_GAP = 48;
export const ROW_GAP = 28;
export const CANVAS_PADDING = 32;
export const GRID_SNAP = 16;
export const MIN_ZOOM = 0.25;
export const MAX_ZOOM = 2;

export const PROXY_NODE_ID = 'proxy';
export const PROMPT_NODE_ID = 'prompt';
export const GENERATE_NODE_ID = 'generate';

/** The nodes that open expanded; every other node starts collapsed to its header. */
const OPEN_BY_DEFAULT = new Set([PROXY_NODE_ID, PROMPT_NODE_ID, GENERATE_NODE_ID]);

export function defaultCollapsed(id: string): boolean {
  return !OPEN_BY_DEFAULT.has(id);
}

/** Object nodes per column before the next column starts, so many objects stack instead of running off to the right. */
const OBJECTS_PER_COLUMN = 5;

/** Fallback height for a node the canvas hasn't measured yet (first paint only). */
const COLLAPSED_HEIGHT = 56;
const DEFAULT_HEIGHT: Record<string, number> = {
  [PROXY_NODE_ID]: 300,
  [PROMPT_NODE_ID]: 360,
  [GENERATE_NODE_ID]: 520,
};
const DEFAULT_SEGMENT_HEIGHT = 260;
const DEFAULT_PREVIEWABLE_HEIGHT = 420;

export interface LayoutNode {
  id: string;
  col: number;
}

/**
 * Every node in prompt order, assigned to a column: 0 = proxy + the layout
 * guide + environment; 1 = camera/lighting/color/exclusions; then the object
 * segments, up to OBJECTS_PER_COLUMN per column; then the prompt; then the
 * scene (generate) last.
 */
export function buildNodeList(segments: WsSegment[]): LayoutNode[] {
  const objects = segments.filter((s) => s.kind === 'object');
  const nodes: LayoutNode[] = [{ id: PROXY_NODE_ID, col: 0 }];
  for (const s of segments) {
    if (s.kind === 'guide' || s.kind === 'environment') nodes.push({ id: s.key, col: 0 });
    else if (s.kind === 'camera' || s.kind === 'lighting' || s.kind === 'color' || s.kind === 'exclusions') {
      nodes.push({ id: s.key, col: 1 });
    }
  }
  objects.forEach((s, i) => nodes.push({ id: s.key, col: 2 + Math.floor(i / OBJECTS_PER_COLUMN) }));
  const promptCol = 2 + Math.ceil(objects.length / OBJECTS_PER_COLUMN);
  nodes.push({ id: PROMPT_NODE_ID, col: promptCol });
  nodes.push({ id: GENERATE_NODE_ID, col: promptCol + 1 });
  return nodes;
}

function fallbackHeight(id: string, segmentsByKey: Map<string, WsSegment>, collapsed: (id: string) => boolean): number {
  if (collapsed(id)) return COLLAPSED_HEIGHT;
  if (DEFAULT_HEIGHT[id]) return DEFAULT_HEIGHT[id];
  const seg = segmentsByKey.get(id);
  if (seg?.previewable) return DEFAULT_PREVIEWABLE_HEIGHT;
  return DEFAULT_SEGMENT_HEIGHT;
}

/**
 * Stack each column top-down using measured heights (falling back to an
 * estimate before the first measurement). Heights are live, so expanding a
 * node slides the ones below it down and collapsing it closes the gap again —
 * nodes keep ROW_GAP between them either way.
 */
export function computeDefaultLayout(
  nodes: LayoutNode[],
  heights: Record<string, number>,
  segments: WsSegment[],
  collapsed: (id: string) => boolean,
): Record<string, { x: number; y: number }> {
  const segmentsByKey = new Map(segments.map((s) => [s.key, s]));
  const byCol = new Map<number, LayoutNode[]>();
  for (const n of nodes) {
    if (!byCol.has(n.col)) byCol.set(n.col, []);
    byCol.get(n.col)!.push(n);
  }
  const out: Record<string, { x: number; y: number }> = {};
  for (const [col, list] of byCol) {
    let y = CANVAS_PADDING;
    const x = CANVAS_PADDING + col * (NODE_WIDTH + COL_GAP);
    for (const n of list) {
      out[n.id] = { x, y };
      y += (heights[n.id] ?? fallbackHeight(n.id, segmentsByKey, collapsed)) + ROW_GAP;
    }
  }
  return out;
}

export function clampZoom(z: number): number {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
}

export function snapToGrid(v: number): number {
  return Math.round(v / GRID_SNAP) * GRID_SNAP;
}

export interface NodeGeometry {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * The fixed wiring: every segment feeds the prompt node; the prompt and the
 * proxy both feed the generate node; a segment whose preview is used as a
 * scene reference gets a second, dashed-accent edge straight to generate.
 */
export function buildEdges(all: WsSegment[], ws: WorkspaceState): EdgeSpec[] {
  const edges: EdgeSpec[] = [];
  const n = all.length;
  const refs = sceneReferences(all, ws);
  const refKeys = new Set(refs.map((r) => r.seg.key));
  all.forEach((seg, i) => {
    edges.push({
      from: seg.key,
      to: PROMPT_NODE_ID,
      variant: 'flow',
      dashed: !isActive(seg, ws),
      fromPortIndex: 0,
      fromPortCount: refKeys.has(seg.key) ? 2 : 1,
      toPortIndex: i,
      toPortCount: n,
    });
  });
  const generateInputs = 2 + refs.length;
  edges.push({
    from: PROXY_NODE_ID,
    to: GENERATE_NODE_ID,
    variant: 'flow',
    dashed: false,
    fromPortIndex: 0,
    fromPortCount: 1,
    toPortIndex: 0,
    toPortCount: generateInputs,
  });
  edges.push({
    from: PROMPT_NODE_ID,
    to: GENERATE_NODE_ID,
    variant: 'flow',
    dashed: false,
    fromPortIndex: 0,
    fromPortCount: 1,
    toPortIndex: 1,
    toPortCount: generateInputs,
  });
  refs.forEach((r, i) => {
    edges.push({
      from: r.seg.key,
      to: GENERATE_NODE_ID,
      variant: 'reference',
      dashed: false,
      fromPortIndex: 1,
      fromPortCount: 2,
      toPortIndex: 2 + i,
      toPortCount: generateInputs,
    });
  });
  return edges;
}
