// The wiring: an SVG layer under the nodes drawing a cubic bezier from each
// source's output port to each target's input port, plus the small circle
// ports themselves. Topology is fixed — nothing here is user-drawn.

import type { NodeGeometry } from './layout.ts';
import styles from './Edges.module.css';

export interface EdgeSpec {
  from: string;
  to: string;
  variant: 'flow' | 'reference';
  dashed: boolean;
  fromPortIndex: number;
  fromPortCount: number;
  toPortIndex: number;
  toPortCount: number;
}

function portPoint(geo: NodeGeometry, side: 'left' | 'right', index: number, count: number): { x: number; y: number } {
  const frac = (index + 1) / (count + 1);
  return { x: side === 'left' ? geo.x : geo.x + geo.width, y: geo.y + frac * geo.height };
}

export function Edges({
  edges,
  geometry,
  width,
  height,
}: {
  edges: EdgeSpec[];
  geometry: Record<string, NodeGeometry>;
  width: number;
  height: number;
}) {
  return (
    <svg className={styles.layer} width={width} height={height} aria-hidden>
      {edges.map((e, i) => {
        const from = geometry[e.from];
        const to = geometry[e.to];
        if (!from || !to) return null;
        const p1 = portPoint(from, 'right', e.fromPortIndex, e.fromPortCount);
        const p2 = portPoint(to, 'left', e.toPortIndex, e.toPortCount);
        const bend = Math.max(40, Math.abs(p2.x - p1.x) / 2);
        const d = `M ${p1.x} ${p1.y} C ${p1.x + bend} ${p1.y}, ${p2.x - bend} ${p2.y}, ${p2.x} ${p2.y}`;
        return (
          <g key={`${e.from}->${e.to}-${i}`}>
            <path className={styles.edge} data-variant={e.variant} data-dashed={e.dashed || undefined} d={d} />
            <circle className={styles.port} data-variant={e.variant} cx={p1.x} cy={p1.y} r={3.5} />
            <circle className={styles.port} data-variant={e.variant} cx={p2.x} cy={p2.y} r={3.5} />
          </g>
        );
      })}
    </svg>
  );
}
