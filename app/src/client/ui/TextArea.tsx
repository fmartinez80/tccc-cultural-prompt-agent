import type { WheelEvent } from 'react';
import {
  Label,
  TextArea as AriaTextArea,
  TextField,
} from 'react-aria-components';

import styles from './TextArea.module.css';

export type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string | undefined;
  rows?: number | undefined;
  label?: string | undefined;
  'aria-label'?: string | undefined;
  disabled?: boolean | undefined;
  autoFocus?: boolean | undefined;
  className?: string | undefined;
  /** Fires when the field gains or loses focus — a node that autosaves on every keystroke uses this to record one undo step on blur. */
  onFocusChange?: ((isFocused: boolean) => void) | undefined;
  /** Lets a scrollable textarea opt out of a wheel handler above it (the workspace canvas pans on wheel). */
  onWheel?: ((e: WheelEvent<HTMLDivElement>) => void) | undefined;
};

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
  label,
  'aria-label': ariaLabel,
  disabled = false,
  autoFocus,
  className,
  onFocusChange,
  onWheel,
}: TextAreaProps) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      isDisabled={disabled}
      onFocusChange={onFocusChange}
      onWheel={onWheel}
      aria-label={label ? undefined : ariaLabel}
      className={[styles.field, className].filter(Boolean).join(' ')}
    >
      {label && <Label className={styles.label}>{label}</Label>}
      <AriaTextArea
        placeholder={placeholder}
        rows={rows}
        autoFocus={autoFocus}
        className={styles.textarea}
      />
    </TextField>
  );
}
