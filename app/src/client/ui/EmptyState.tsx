import type React from 'react';

import styles from './EmptyState.module.css';

export type EmptyStateProps = {
  title: React.ReactNode;
  hint?: React.ReactNode;
  action?: React.ReactNode;
  /** A muted line icon shown above the title. */
  icon?: React.ReactNode;
};

export function EmptyState({ title, hint, action, icon }: EmptyStateProps) {
  return (
    <div data-bay-block="empty-state" className={styles.emptyState}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.title}>{title}</div>
      {hint && <div className={styles.hint}>{hint}</div>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
