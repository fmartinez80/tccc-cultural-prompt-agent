// The wait every generative step shows inline, in place of the content on its
// way (the step renders skeletons of that content underneath): the Coca-Cola
// contour bottle filling with cola, the phase in plain words ("Finding
// authentic sides…"), a live time-left estimate and a note that it's safe to
// step away. Never a bare percentage: the time left is the number shown.

import { Check } from 'lucide-react';

import type { Progress } from '../lib/progress.ts';
import { timeLeftText } from './ProgressBar.tsx';
import styles from './WaitCard.module.css';

export const SAFE_TO_LEAVE = 'Safe to leave: your draft is saved and this keeps going, so you can pick up where you left off.';

export function WaitCard({
  phase,
  detail,
  progress,
  note = SAFE_TO_LEAVE,
}: {
  /** What's happening, in a few words ("Finding authentic sides…"). */
  phase: string;
  /** One more sentence about it, optional. */
  detail?: string | undefined;
  /** null before the first estimate. */
  progress: Progress | null;
  /** The "safe to leave" line; pass null to leave it out. */
  note?: string | null;
}) {
  const left = progress ? timeLeftText(progress) : 'Starting…';
  const fill = progress?.percent ?? 0;
  return (
    <div className={styles.card} role="status" aria-live="polite" aria-label={`${phase} ${left}`}>
      <div className={styles.bottle} aria-hidden>
        <div className={styles.liquidMask}>
          <div className={styles.liquid} style={{ height: `${fill}%` }}>
            <span className={styles.wave} />
            <span className={styles.bubble} />
            <span className={styles.bubble} />
            <span className={styles.bubble} />
          </div>
        </div>
        <img className={styles.outline} src="/loading-bottle-outline.png" alt="" draggable={false} />
      </div>
      <div className={styles.text}>
        <p className={styles.phase}>{phase}</p>
        {detail && <p className={styles.detail}>{detail}</p>}
        <div className={styles.timeRow}>
          <span className={styles.left}>{left}</span>
          <span className={styles.track} aria-hidden>
            <span className={styles.fill} style={{ width: `${Math.max(2, fill)}%` }} />
          </span>
        </div>
        {note && (
          <p className={styles.note}>
            <Check size={14} aria-hidden className={styles.noteIcon} />
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
