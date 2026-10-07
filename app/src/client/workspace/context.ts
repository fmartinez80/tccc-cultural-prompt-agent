// What a node card needs from the canvas that owns it: whether it's
// selected, how to report its measured height, how the current drag (if
// any) is moving it, and how to open the lightbox. Avoids drilling all of
// this through every node component's props.

import { createContext, useContext } from 'react';

export interface DragState {
  ids: string[];
  dx: number;
  dy: number;
}

export interface CanvasCtx {
  scale: number;
  isSelected: (id: string) => boolean;
  onNodeSelect: (id: string, additive: boolean) => void;
  registerHeight: (id: string, height: number) => void;
  drag: DragState | null;
  startDrag: (id: string) => void;
  dragBy: (dx: number, dy: number) => void;
  endDrag: () => void;
  isCollapsed: (id: string) => boolean;
  toggleCollapsed: (id: string) => void;
  /** `rate`, when given, lets the lightbox offer a "Rate image" action next to Download. */
  openLightbox: (src: string, alt: string, rate?: () => void) => void;
}

export const CanvasContext = createContext<CanvasCtx | null>(null);

export function useCanvasContext(): CanvasCtx {
  const ctx = useContext(CanvasContext);
  if (!ctx) throw new Error('useCanvasContext must be used within the workspace Canvas');
  return ctx;
}
