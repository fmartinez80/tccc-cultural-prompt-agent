import { LoaderCircle } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import styles from './Button.module.css';

export type ButtonProps = {
  variant?: 'primary' | 'default' | 'ghost' | undefined;
  size?: 'sm' | 'md' | undefined;
  icon?: ReactNode | undefined;
  /** Shown after the label, e.g. a forward arrow (the mirror of Back's arrow). */
  iconEnd?: ReactNode | undefined;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  /**
   * Looks disabled and says so (`aria-disabled`) but stays focusable and
   * pressable, so pressing it can point at what's missing. Pair it with a
   * visible reason (`aria-describedby`).
   */
  blocked?: boolean | undefined;
  'aria-describedby'?: string | undefined;
  onPress?: (() => void) | undefined;
  type?: 'button' | 'submit' | undefined;
  'aria-label'?: string | undefined;
  /** For a button that shows or hides a panel. */
  'aria-expanded'?: boolean | undefined;
  /** For a nav link that points at the current page. */
  'aria-current'?: 'page' | undefined;
  className?: string | undefined;
  children?: ReactNode | undefined;
};

export function Button({
  variant = 'default',
  size = 'md',
  icon,
  iconEnd,
  loading = false,
  disabled = false,
  blocked = false,
  'aria-describedby': ariaDescribedBy,
  onPress,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-expanded': ariaExpanded,
  'aria-current': ariaCurrent,
  className,
  children,
}: ButtonProps) {
  const spinnerSize = size === 'sm' ? 14 : 16;
  const iconOnly = !children && (icon || loading);
  return (
    <AriaButton
      type={type}
      isDisabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-disabled={blocked || undefined}
      aria-describedby={ariaDescribedBy}
      data-blocked={blocked || undefined}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-current={ariaCurrent}
      onPress={onPress}
      className={[
        styles.button,
        styles[variant],
        styles[size],
        iconOnly && styles.iconOnly,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {loading ? (
        <LoaderCircle size={spinnerSize} className={styles.spinner} />
      ) : (
        icon
      )}
      {children}
      {iconEnd}
    </AriaButton>
  );
}
