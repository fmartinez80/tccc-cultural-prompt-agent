import { Check, ChevronDown } from 'lucide-react';
import {
  Button as AriaButton,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectValue,
} from 'react-aria-components';

import styles from './Select.module.css';

export type SelectOption = { id: string; label: string; disabled?: boolean | undefined };

export type SelectProps = {
  label?: string | undefined;
  'aria-label'?: string | undefined;
  value: string | null;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
  /** The trigger's id, so a step can focus it. */
  id?: string | undefined;
};

/** A dropdown select built on react-aria's Select/ListBox/Popover trio. */
export function Select({
  label,
  'aria-label': ariaLabel,
  value,
  onChange,
  options,
  placeholder = 'Select…',
  disabled = false,
  className,
  id,
}: SelectProps) {
  return (
    <AriaSelect
      selectedKey={value ?? null}
      onSelectionChange={(key) => onChange(key === null ? '' : String(key))}
      isDisabled={disabled}
      placeholder={placeholder}
      aria-label={label ? undefined : ariaLabel}
      className={[styles.field, className].filter(Boolean).join(' ')}
    >
      {label && <Label className={styles.label}>{label}</Label>}
      <AriaButton id={id} className={styles.trigger}>
        <SelectValue className={styles.value} />
        <ChevronDown size={16} className={styles.chevron} aria-hidden />
      </AriaButton>
      <Popover className={styles.popover}>
        <ListBox className={styles.listbox} items={options}>
          {(o: SelectOption) => (
            <ListBoxItem id={o.id} textValue={o.label} isDisabled={o.disabled} className={styles.item}>
              {({ isSelected }) => (
                <>
                  <span>{o.label}</span>
                  {isSelected && <Check size={14} aria-hidden />}
                </>
              )}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}
