import type { ReactNode } from 'react';
import { Switch as AriaSwitch } from 'react-aria-components';

import styles from './Switch.module.css';

export type SwitchProps = {
  isSelected: boolean;
  onChange: (isSelected: boolean) => void;
  children?: ReactNode | undefined;
  'aria-label'?: string | undefined;
  className?: string | undefined;
};

export function Switch({ isSelected, onChange, children, 'aria-label': ariaLabel, className }: SwitchProps) {
  return (
    <AriaSwitch
      isSelected={isSelected}
      onChange={onChange}
      aria-label={children ? undefined : ariaLabel}
      className={[styles.switch, className].filter(Boolean).join(' ')}
    >
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
      {children && <span className={styles.label}>{children}</span>}
    </AriaSwitch>
  );
}
