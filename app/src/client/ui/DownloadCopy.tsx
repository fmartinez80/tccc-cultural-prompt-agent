// Shared "Download" / "Copy" buttons used by any step that hands the
// operator a file or a prompt to take away (Story, Workspace).

import { Check, Copy, Download } from 'lucide-react';
import { useState } from 'react';

import { Button } from './Button.tsx';

export function triggerDownload(name: string, data: string, type = 'text/plain') {
  const a = document.createElement('a');
  a.href = data.startsWith('data:') || data.startsWith('blob:') ? data : URL.createObjectURL(new Blob([data], { type }));
  a.download = name;
  a.click();
}

export function DownloadButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Button size="sm" variant="ghost" icon={<Download size={14} aria-hidden />} aria-label={`Download ${label}`} onPress={onPress}>
      Download
    </Button>
  );
}

export function CopyButton({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);
  const onPress = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked: the text is still selectable, so there's nothing else to do.
    }
  };
  return (
    <Button
      size="sm"
      variant="ghost"
      icon={copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
      aria-label={copied ? 'Copied' : `Copy ${label}`}
      onPress={onPress}
    >
      {copied ? 'Copied' : 'Copy'}
    </Button>
  );
}
