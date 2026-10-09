// A small "are you sure?" dialog for actions that throw work away (Start over).

import { Dialog, Heading, Modal } from 'react-aria-components';
import type { ReactNode } from 'react';

import { Button } from './Button.tsx';
import styles from './ConfirmDialog.module.css';

export function ConfirmDialog({
  isOpen,
  title,
  children,
  confirmLabel,
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}: {
  isOpen: boolean;
  title: string;
  children?: ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onCancel()} isDismissable className={styles.overlay}>
      <Dialog role="alertdialog" className={styles.dialog}>
        <Heading slot="title" className={styles.title}>
          {title}
        </Heading>
        {children && <div className={styles.body}>{children}</div>}
        <div className={styles.actions}>
          <Button onPress={onCancel}>{cancelLabel}</Button>
          <Button variant="primary" onPress={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </Dialog>
    </Modal>
  );
}
