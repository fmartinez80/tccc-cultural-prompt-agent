import { ChevronRight, ChevronUp } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

import styles from './Accordion.module.css';

export type AccordionProps = {
  title: ReactNode;
  /** A short line under the title, e.g. what the section is for. */
  subtitle?: ReactNode | undefined;
  /** Right-aligned status (a count, a badge). */
  meta?: ReactNode | undefined;
  icon?: ReactNode | undefined;
  /** Buttons in the header (e.g. Download). Pressing them does not open or close the section. */
  actions?: ReactNode | undefined;
  defaultOpen?: boolean | undefined;
  children: ReactNode;
};

/** A collapsible card on native <details>: keyboard (Enter/Space) and screen readers work out of the box. */
export function Accordion({ title, subtitle, meta, icon, actions, defaultOpen = false, children }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <details
      className={styles.accordion}
      open={defaultOpen}
      onToggle={(e) => setOpen(e.currentTarget.open)}
    >
      <summary className={styles.summary}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.heading}>
          <span className={styles.title}>{title}</span>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          {/* Under the title, so the header row only carries the title and its buttons. */}
          {meta && <span className={styles.meta}>{meta}</span>}
        </span>
        {actions && (
          // A click inside <summary> toggles the section; stop it so the buttons only do their own job.
          <span className={styles.actions} onClick={(e) => e.preventDefault()}>
            {actions}
          </span>
        )}
        <span className={styles.chevronCircle} aria-hidden>
          {open ? <ChevronUp size={13} /> : <ChevronRight size={13} />}
        </span>
      </summary>
      <div className={styles.body}>{children}</div>
    </details>
  );
}
