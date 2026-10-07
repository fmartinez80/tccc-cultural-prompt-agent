import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Separator,
} from 'react-aria-components';

import { Avatar } from './Avatar.tsx';
import styles from './UserMenu.module.css';

export type UserMenuProps = {
  /** Display name shown next to the avatar. */
  name: string;
  /** Shown (disabled) at the top of the menu, when present. */
  email?: string | undefined;
  /** Profile picture URL. Falls back to initials via {@link Avatar}. */
  avatarUrl?: string | null | undefined;
  /** Called when "Sign out" is selected. Omit to hide that item. */
  onSignOut?: (() => void) | undefined;
  /** URL for a "Back to home" link; omit or pass `null` to hide the item. */
  homeUrl?: string | null | undefined;
  /** Label for the launcher link. Defaults to `"Back to home"`. */
  homeLabel?: string | undefined;
};

/**
 * A navbar identity chip — avatar + name — with a menu carrying an optional
 * "Back to home" link and an optional sign-out.
 */
export function UserMenu({
  name,
  email,
  avatarUrl,
  onSignOut,
  homeUrl,
  homeLabel = 'Back to home',
}: UserMenuProps): ReactNode {
  const home = homeUrl ?? null;

  const chip = (
    <span className={styles.chip}>
      <Avatar name={name} src={avatarUrl} size={28} />
      <span className={styles.name}>{name}</span>
    </span>
  );

  if (!home && !email && !onSignOut) return chip;

  return (
    <MenuTrigger>
      <Button className={styles.trigger}>{chip}</Button>
      <Popover placement="bottom end" offset={6} className={styles.popover}>
        <Menu
          className={styles.menu}
          onAction={(key) => {
            if (key === 'sign-out') onSignOut?.();
          }}
        >
          {home && (
            <MenuItem id="home" href={home} className={styles.item}>
              <ArrowLeft size={14} aria-hidden />
              {homeLabel}
            </MenuItem>
          )}
          {email && (
            <MenuItem id="email" isDisabled className={styles.email}>
              {email}
            </MenuItem>
          )}
          {(home || email) && onSignOut && (
            <Separator className={styles.separator} />
          )}
          {onSignOut && (
            <MenuItem id="sign-out" className={styles.item}>
              Sign out
            </MenuItem>
          )}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
