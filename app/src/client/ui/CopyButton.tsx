// A small Copy button with "Copied" feedback, for any text (a workspace node's
// segment, the assembled prompt).

import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Button } from './Button.tsx';

export function CopyButton({
  text,
  label,
  compact = false,
}: {
  text: string;
  /** What is copied, for the accessible name ("MAIN text"). */
  label: string;
  /** Icon only until pressed, then "Copied" (for tight headers like the workspace nodes). */
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked (insecure origin or permissions): nothing to copy into.
    }
  };
  return (
    <Button
      size="sm"
      variant="ghost"
      icon={copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
      aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
      disabled={!text}
      onPress={() => void copy()}
    >
      {compact ? copied ? <span aria-live="polite">Copied</span> : null : <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>}
    </Button>
  );
}
