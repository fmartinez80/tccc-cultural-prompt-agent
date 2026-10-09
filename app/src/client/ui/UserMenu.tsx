import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button, Menu, MenuItem, MenuTrigger, Popover, Separator } from 'react-aria-components';

import styles from './UserMenu.module.css';

export type UserMenuItem = {
  id: string;
  label: string;
  /** Marks the page currently showing. */
  current?: boolean | undefined;
};

export type UserMenuProps = {
  /** The signed-in person's email: the menu's label. */
  email: string;
  /** The app's pages, in order. */
  items?: UserMenuItem[] | undefined;
  onAction?: ((id: string) => void) | undefined;
  /** Shows "Log out" under the pages. */
  onSignOut?: (() => void) | undefined;
};

/** The header's only navigation: the signed-in email as a dropdown of the app's pages, then Log out. */
export function UserMenu({ email, items = [], onAction, onSignOut }: UserMenuProps): ReactNode {
  return (
    <MenuTrigger>
      <Button className={styles.trigger}>
        <span className={styles.name}>{email}</span>
        <ChevronDown size={16} aria-hidden />
      </Button>
      <Popover placement="bottom end" offset={6} className={styles.popover}>
        <Menu
          className={styles.menu}
          aria-label="Pages"
          onAction={(key) => {
            if (key === 'sign-out') onSignOut?.();
            else onAction?.(String(key));
          }}
        >
          {items.map((item) => (
            <MenuItem key={item.id} id={item.id} className={styles.item} data-current={item.current || undefined}>
              {item.label}
            </MenuItem>
          ))}
          {items.length > 0 && onSignOut && <Separator className={styles.separator} />}
          {onSignOut && (
            <MenuItem id="sign-out" className={styles.signOut}>
              Log out
            </MenuItem>
          )}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
