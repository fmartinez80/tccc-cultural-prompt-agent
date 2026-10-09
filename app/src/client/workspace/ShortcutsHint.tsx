// A small popover listing the canvas's keyboard shortcuts.

import { Keyboard } from 'lucide-react';
import { useState } from 'react';

import { Button } from '../ui/Button.tsx';
import styles from './ShortcutsHint.module.css';

const SHORTCUTS: Array<[string, string]> = [
  ['Click / Shift-click', 'Select / add to selection'],
  ['Shift-drag canvas', 'Marquee-select'],
  ['Drag node header', 'Move node (or selection)'],
  ['Arrow keys', 'Nudge selection 16px'],
  ['B', 'Toggle bypass on selection'],
  ['Escape', 'Clear selection'],
  ['Ctrl/Cmd + Z', 'Undo'],
  ['Ctrl/Cmd + Shift + Z', 'Redo'],
  ['Ctrl/Cmd + Enter', 'Generate scene'],
  ['Ctrl/Cmd + scroll', 'Zoom'],
];

export function ShortcutsHint() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.wrap} onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}>
      <Button
        size="sm"
        variant="ghost"
        icon={<Keyboard size={14} aria-hidden />}
        aria-label={open ? 'Hide keyboard shortcuts' : 'Show keyboard shortcuts'}
        onPress={() => setOpen((o) => !o)}
      >
        Shortcuts
      </Button>
      {open && (
        <div className={styles.panel} role="dialog" aria-label="Keyboard shortcuts" onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
          {SHORTCUTS.map(([key, what]) => (
            <div key={key} className={styles.row}>
              <span>{what}</span>
              <span className={styles.key}>{key}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
