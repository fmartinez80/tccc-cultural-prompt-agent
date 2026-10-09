import type { ReactNode } from 'react';
import { Label, Radio, RadioGroup } from 'react-aria-components';

import styles from './SegmentedControl.module.css';

export type SegmentedOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean | undefined;
};

export type SegmentedControlProps = {
  label?: ReactNode | undefined;
  'aria-label'?: string | undefined;
  value: string | null;
  onChange: (value: string) => void;
  options: SegmentedOption[];
  className?: string | undefined;
};

/** A row of chip-style toggle buttons, single-select, keyboard-navigable. */
export function SegmentedControl({ label, 'aria-label': ariaLabel, value, onChange, options, className }: SegmentedControlProps) {
  return (
    <RadioGroup
      aria-label={label ? undefined : ariaLabel}
      orientation="horizontal"
      value={value ?? ''}
      onChange={onChange}
      className={[styles.group, className].filter(Boolean).join(' ')}
    >
      {label && <Label className={styles.groupLabel}>{label}</Label>}
      <div className={styles.row}>
        {options.map((o) => (
          <Radio key={o.value} value={o.value} isDisabled={o.disabled} className={styles.segment}>
            {o.label}
          </Radio>
        ))}
      </div>
    </RadioGroup>
  );
}
