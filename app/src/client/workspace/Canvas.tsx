// The pannable, zoomable viewport: owns pointer/wheel interaction and drag
// state, and provides the CanvasContext every node reads from. Layout
// (positions, edges) is computed by the caller and passed in.

import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { CanvasContext, type CanvasCtx, type DragState } from './context.ts';
import { Edges, type EdgeSpec } from './Edges.tsx';
import { clampZoom, snapToGrid, type NodeGeometry } from './layout.ts';
import { Lightbox, type LightboxState } from './Lightbox.tsx';
import styles from './Canvas.module.css';

export interface ViewState {
  x: number;
  y: number;
  scale: number;
}

export const INITIAL_VIEW: ViewState = { x: 24, y: 24, scale: 1 };

export interface CanvasHandle {
  zoomIn: () => void;
  zoomOut: () => void;
  fitToView: () => void;
}

const CLICK_THRESHOLD = 4;

function rectsIntersect(a: { x0: number; y0: number; x1: number; y1: number }, b: NodeGeometry): boolean {
  return a.x0 < b.x + b.width && b.x < a.x1 && a.y0 < b.y + b.height && b.y < a.y1;
}

export const Canvas = forwardRef<CanvasHandle, {
  view: ViewState;
  onViewChange: (v: ViewState) => void;
  selected: Set<string>;
  onSelectedChange: (s: Set<string>) => void;
  geometry: Record<string, NodeGeometry>;
  edges: EdgeSpec[];
  worldWidth: number;
  worldHeight: number;
  onMove: (updates: Record<string, { x: number; y: number }>) => void;
  registerHeight: (id: string, height: number) => void;
  isCollapsed: (id: string) => boolean;
  onToggleCollapsed: (id: string) => void;
  lightbox: LightboxState | null;
  onOpenLightbox: (src: string, alt: string, rate?: () => void) => void;
  onCloseLightbox: () => void;
  children: ReactNode;
}>(function Canvas(
  { view, onViewChange, selected, onSelectedChange, geometry, edges, worldWidth, worldHeight, onMove, registerHeight, isCollapsed, onToggleCollapsed, lightbox, onOpenLightbox, onCloseLightbox, children },
  ref,
) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef(view);
  viewRef.current = view;
  const [drag, setDrag] = useState<DragState | null>(null);
  const [marquee, setMarquee] = useState<{ x0: number; y0: number; x1: number; y1: number } | null>(null);
  const panRef = useRef<{ startClientX: number; startClientY: number; startX: number; startY: number; moved: boolean } | null>(null);

  const toWorld = useCallback((clientX: number, clientY: number) => {
    const rect = viewportRef.current!.getBoundingClientRect();
    const v = viewRef.current;
    return { x: (clientX - rect.left - v.x) / v.scale, y: (clientY - rect.top - v.y) / v.scale };
  }, []);

  const zoomAt = useCallback(
    (screenX: number, screenY: number, factor: number) => {
      const v = viewRef.current;
      const newScale = clampZoom(v.scale * factor);
      if (newScale === v.scale) return;
      const wx = (screenX - v.x) / v.scale;
      const wy = (screenY - v.y) / v.scale;
      onViewChange({ x: screenX - wx * newScale, y: screenY - wy * newScale, scale: newScale });
    },
    [onViewChange],
  );

  useImperativeHandle(
    ref,
    () => ({
      zoomIn: () => {
        const rect = viewportRef.current?.getBoundingClientRect();
        zoomAt(rect ? rect.width / 2 : 0, rect ? rect.height / 2 : 0, 1.25);
      },
      zoomOut: () => {
        const rect = viewportRef.current?.getBoundingClientRect();
        zoomAt(rect ? rect.width / 2 : 0, rect ? rect.height / 2 : 0, 1 / 1.25);
      },
      fitToView: () => {
        const rect = viewportRef.current?.getBoundingClientRect();
        const ids = Object.keys(geometry);
        if (!rect || !ids.length) return;
        const xs = ids.flatMap((id) => [geometry[id]!.x, geometry[id]!.x + geometry[id]!.width]);
        const ys = ids.flatMap((id) => [geometry[id]!.y, geometry[id]!.y + geometry[id]!.height]);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        const margin = 48;
        const scale = clampZoom(Math.min((rect.width - margin * 2) / (maxX - minX), (rect.height - margin * 2) / (maxY - minY), 1));
        onViewChange({
          x: margin - minX * scale + Math.max(0, rect.width - margin * 2 - (maxX - minX) * scale) / 2,
          y: margin - minY * scale + Math.max(0, rect.height - margin * 2 - (maxY - minY) * scale) / 2,
          scale,
        });
      },
    }),
    [geometry, onViewChange, zoomAt],
  );

  // A native, non-passive listener: React's onWheel is passive by default,
  // and preventDefault (needed so wheel zooms/pans the canvas instead of
  // scrolling the page) throws in a passive listener.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      if (e.ctrlKey || e.metaKey) {
        zoomAt(e.clientX - rect.left, e.clientY - rect.top, e.deltaY < 0 ? 1.08 : 1 / 1.08);
      } else {
        const v = viewRef.current;
        onViewChange({ ...v, x: v.x - e.deltaX, y: v.y - e.deltaY });
      }
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [onViewChange, zoomAt]);

  const onBackgroundPointerDown = (e: ReactPointerEvent) => {
    if (e.button !== 0) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    if (e.shiftKey) {
      const w = toWorld(e.clientX, e.clientY);
      setMarquee({ x0: w.x, y0: w.y, x1: w.x, y1: w.y });
    } else {
      panRef.current = { startClientX: e.clientX, startClientY: e.clientY, startX: view.x, startY: view.y, moved: false };
    }
  };
  const onBackgroundPointerMove = (e: ReactPointerEvent) => {
    if (marquee) {
      const w = toWorld(e.clientX, e.clientY);
      setMarquee((m) => (m ? { ...m, x1: w.x, y1: w.y } : m));
      return;
    }
    if (panRef.current) {
      const dx = e.clientX - panRef.current.startClientX;
      const dy = e.clientY - panRef.current.startClientY;
      if (Math.abs(dx) > CLICK_THRESHOLD || Math.abs(dy) > CLICK_THRESHOLD) panRef.current.moved = true;
      onViewChange({ ...view, x: panRef.current.startX + dx, y: panRef.current.startY + dy });
    }
  };
  const onBackgroundPointerUp = () => {
    if (marquee) {
      const rect = {
        x0: Math.min(marquee.x0, marquee.x1),
        y0: Math.min(marquee.y0, marquee.y1),
        x1: Math.max(marquee.x0, marquee.x1),
        y1: Math.max(marquee.y0, marquee.y1),
      };
      const ids = Object.entries(geometry)
        .filter(([, g]) => rectsIntersect(rect, g))
        .map(([id]) => id);
      onSelectedChange(new Set(ids));
      setMarquee(null);
      return;
    }
    if (panRef.current) {
      if (!panRef.current.moved) onSelectedChange(new Set());
      panRef.current = null;
    }
  };

  const startDrag = useCallback(
    (id: string) => {
      const ids = selected.has(id) && selected.size > 1 ? Array.from(selected) : [id];
      setDrag({ ids, dx: 0, dy: 0 });
    },
    [selected],
  );
  const dragBy = useCallback((dx: number, dy: number) => setDrag((d) => (d ? { ...d, dx, dy } : d)), []);
  const endDrag = useCallback(() => {
    setDrag((d) => {
      if (d && (d.dx !== 0 || d.dy !== 0)) {
        const updates: Record<string, { x: number; y: number }> = {};
        for (const id of d.ids) {
          const g = geometry[id];
          if (!g) continue;
          updates[id] = { x: snapToGrid(g.x + d.dx), y: snapToGrid(g.y + d.dy) };
        }
        onMove(updates);
      }
      return null;
    });
  }, [geometry, onMove]);

  const ctx: CanvasCtx = {
    scale: view.scale,
    isSelected: (id) => selected.has(id),
    onNodeSelect: (id, additive) => {
      if (!additive) {
        onSelectedChange(new Set([id]));
        return;
      }
      const next = new Set(selected);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      onSelectedChange(next);
    },
    registerHeight,
    isCollapsed,
    toggleCollapsed: onToggleCollapsed,
    drag,
    startDrag,
    dragBy,
    endDrag,
    openLightbox: onOpenLightbox,
  };

  const marqueeRect = marquee && {
    left: Math.min(marquee.x0, marquee.x1),
    top: Math.min(marquee.y0, marquee.y1),
    width: Math.abs(marquee.x1 - marquee.x0),
    height: Math.abs(marquee.y1 - marquee.y0),
  };

  return (
    <>
      <div
        ref={viewportRef}
        className={styles.viewport}
        onPointerDown={onBackgroundPointerDown}
        onPointerMove={onBackgroundPointerMove}
        onPointerUp={onBackgroundPointerUp}
      >
        <div
          className={styles.world}
          style={{ width: worldWidth, height: worldHeight, transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}
        >
          <Edges edges={edges} geometry={geometry} width={worldWidth} height={worldHeight} />
          <CanvasContext.Provider value={ctx}>{children}</CanvasContext.Provider>
          {marqueeRect && <div className={styles.marquee} style={marqueeRect} />}
        </div>
      </div>
      <Lightbox state={lightbox} onClose={onCloseLightbox} />
    </>
  );
});
