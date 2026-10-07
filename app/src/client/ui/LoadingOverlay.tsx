// A small modal that dims the page while a whole step waits on its content:
// the Coca-Cola contour bottle fills with cola as the work progresses, above
// the line saying what's being prepared and a percentage that counts up. When
// the work finishes the bottle tops up to 100% and the modal closes a moment
// later; when it fails the modal closes at once (the error shows in the page).

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './LoadingOverlay.module.css';

/** How long the modal holds at 100% after the work finishes. */
const FINISH_MS = 700;

/** Eases the shown whole number toward `target` so it tallies up instead of jumping. */
function useCountUp(target: number): number {
  const [shown, setShown] = useState(target);
  const shownRef = useRef(target);
  useEffect(() => {
    let frame = 0;
    const step = () => {
      const cur = shownRef.current;
      if (cur === target) return;
      const next = target > cur ? Math.min(target, cur + Math.max(1, Math.ceil((target - cur) * 0.12))) : target;
      shownRef.current = next;
      setShown(next);
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return shown;
}

export function LoadingOverlay({
  open,
  label,
  percent,
  failed = false,
}: {
  /** The work is running. Keep the overlay mounted after it stops so it can finish at 100%. */
  open: boolean;
  label: string;
  /** 0-99 while running; null before the first estimate. */
  percent: number | null;
  /** The work ended in an error: close without topping up to 100%. */
  failed?: boolean;
}) {
  const [finishing, setFinishing] = useState(false);
  const wasOpen = useRef(open);
  useEffect(() => {
    if (wasOpen.current && !open && !failed) {
      setFinishing(true);
      const id = setTimeout(() => setFinishing(false), FINISH_MS);
      wasOpen.current = open;
      return () => clearTimeout(id);
    }
    if (open) setFinishing(false);
    wasOpen.current = open;
  }, [open, failed]);

  const target = finishing ? 100 : open ? Math.max(0, Math.min(99, percent ?? 0)) : 0;
  const shown = useCountUp(target);
  const visible = open || finishing;
  if (!visible) return null;

  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.card} role="status" aria-live="polite">
        <div className={styles.bottle} aria-hidden>
          <div className={styles.liquidMask}>
            <div className={styles.liquid} style={{ height: `${target}%` }}>
              <span className={styles.wave} />
              <span className={styles.bubble} />
              <span className={styles.bubble} />
              <span className={styles.bubble} />
              <span className={styles.bubble} />
            </div>
          </div>
          <img className={styles.outline} src="/loading-bottle-outline.png" alt="" draggable={false} />
        </div>
        <p className={styles.label}>{label}</p>
        <p className={styles.percent} aria-label={`${shown} percent`}>
          {shown}%
        </p>
      </div>
    </div>,
    document.body
  );
}
