// The draggable, selectable card every workspace node is built from: a
// header (chip, title, badges, actions) that doubles as the drag handle and
// selection target, and a body slot for the node's own content.

import { ChevronDown, ChevronRight, GripVertical } from 'lucide-react';
import type { KeyboardEvent, PointerEvent, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import { Button } from '../ui/Button.tsx';
import { CopyButton } from '../ui/CopyButton.tsx';
import { useCanvasContext } from './context.ts';
import styles from './NodeCard.module.css';

export function NodeCard({
  id,
  x,
  y,
  chip,
  title,
  note,
  badges,
  actions,
  dimmed = false,
  ariaLabel,
  copyText,
  children,
}: {
  id: string;
  x: number;
  y: number;
  chip: string;
  title: string;
  note?: string | undefined;
  badges?: ReactNode | undefined;
  actions?: ReactNode | undefined;
  dimmed?: boolean | undefined;
  ariaLabel: string;
  /** The node's text, for its Copy button. */
  copyText?: string | undefined;
  children: ReactNode;
}) {
  const ctx = useCanvasContext();
  const rootRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const h = entries[0]?.borderBoxSize?.[0]?.blockSize ?? entries[0]?.contentRect.height;
      if (h) ctx.registerHeight(id, Math.round(h));
    });
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const collapsed = ctx.isCollapsed(id);
  const dragging = ctx.drag?.ids.includes(id) ?? false;
  const offset = dragging ? ctx.drag! : { dx: 0, dy: 0 };

  const onHeaderPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    (e.target as Element).setPointerCapture?.(e.pointerId);
    originRef.current = { x: e.clientX, y: e.clientY };
    movedRef.current = false;
    ctx.startDrag(id);
  };
  const onHeaderPointerMove = (e: PointerEvent) => {
    if (!originRef.current) return;
    const dx = (e.clientX - originRef.current.x) / ctx.scale;
    const dy = (e.clientY - originRef.current.y) / ctx.scale;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) movedRef.current = true;
    ctx.dragBy(dx, dy);
  };
  const onHeaderPointerUp = (e: PointerEvent) => {
    if (!originRef.current) return;
    originRef.current = null;
    ctx.endDrag();
    if (!movedRef.current) ctx.onNodeSelect(id, e.shiftKey);
  };
  const onHeaderKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      ctx.onNodeSelect(id, e.shiftKey);
    }
  };

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label={ariaLabel}
      className={styles.card}
      data-selected={ctx.isSelected(id) || undefined}
      data-dimmed={dimmed || undefined}
      data-dragging={dragging || undefined}
      data-collapsed={collapsed || undefined}
      style={{ transform: `translate(${x + offset.dx}px, ${y + offset.dy}px)` }}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div
        className={styles.header}
        role="button"
        tabIndex={0}
        aria-pressed={ctx.isSelected(id)}
        aria-label={`Select ${ariaLabel}, or drag to move it`}
        onPointerDown={onHeaderPointerDown}
        onPointerMove={onHeaderPointerMove}
        onPointerUp={onHeaderPointerUp}
        onKeyDown={onHeaderKeyDown}
      >
        <div className={styles.toggle} onPointerDown={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <Button
            size="sm"
            variant="ghost"
            icon={collapsed ? <ChevronRight size={14} aria-hidden /> : <ChevronDown size={14} aria-hidden />}
            aria-label={`${collapsed ? 'Expand' : 'Collapse'} ${ariaLabel}`}
            onPress={() => ctx.toggleCollapsed(id)}
          />
        </div>
        <GripVertical size={14} className={styles.grip} aria-hidden />
        <div className={styles.headText}>
          <span className={styles.chip}>{chip}</span>
          <span className={styles.title}>{title}</span>
        </div>
        {badges && <div className={styles.badges}>{badges}</div>}
        {(actions || copyText !== undefined) && (
          <div className={styles.actions} onPointerDown={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
            {copyText !== undefined && <CopyButton compact text={copyText} label={`${chip} text`} />}
            {actions}
          </div>
        )}
      </div>
      <div className={styles.body} hidden={collapsed}>
        {note && <p className={styles.note}>{note}</p>}
        {children}
      </div>
    </div>
  );
}
