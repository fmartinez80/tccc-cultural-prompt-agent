import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import styles from './CodeBlock.module.css';

export type CodeBlockProps = {
  code: string;
  /** Names what's being copied, for the button's accessible label. */
  label: string;
  className?: string | undefined;
};

/** A monospace block with a copy-to-clipboard button and "Copied" feedback. */
export function CodeBlock({ code, label, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard access blocked (permissions, insecure context) — the text
      // is still selectable in the block, so there's nothing else to do.
    }
  };

  return (
    <div className={[styles.block, className].filter(Boolean).join(' ')}>
      <pre className={styles.pre}>{code}</pre>
      <AriaButton className={styles.copy} onPress={onCopy} aria-label={copied ? 'Copied' : `Copy ${label}`}>
        {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
        {copied ? 'Copied' : 'Copy'}
      </AriaButton>
    </div>
  );
}
