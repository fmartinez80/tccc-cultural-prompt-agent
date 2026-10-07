// A labeled progress bar with percent complete and time left, for every wait
// in the app. Estimated numbers are marked with "about".

import type { Progress } from '../lib/progress.ts';
import styles from './ProgressBar.module.css';

export function timeLeftText(p: Progress): string {
  if (p.secondsLeft === null) return 'taking longer than usual';
  const s = p.secondsLeft;
  const t = s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, '0')}s`;
  return `${p.estimated ? 'about ' : ''}${t} left`;
}

export function ProgressBar({
  label,
  progress,
  size = 'md',
}: {
  label: string;
  progress: Progress;
  /** `sm` for the compact node cards and turnaround rows. */
  size?: 'sm' | 'md';
}) {
  const left = timeLeftText(progress);
  return (
    <div className={styles.wrap} data-size={size}>
      <div className={styles.row}>
        <span className={styles.label}>{label}</span>
        <span className={styles.meta} aria-hidden>
          <strong className={styles.percent}>{progress.percent}%</strong> · {left}
        </span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress.percent}
        aria-valuetext={`${progress.percent}%${progress.estimated ? ' (estimated)' : ''}, ${left}`}
      >
        <div className={styles.fill} style={{ width: `${Math.max(2, progress.percent)}%` }} />
      </div>
    </div>
  );
}
