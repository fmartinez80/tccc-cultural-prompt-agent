// The assembled prompt: exactly what `assembleWorkspacePrompt` sends, plus
// the numbered reference-image list so the operator can see what feeds the
// scene generation before pressing it.

import { useState } from 'react';

import { assembleWorkspacePrompt, referenceLabel, sceneReferences, type WorkspaceState, type WsSegment } from '../../shared/workspace.ts';
import { Button } from '../ui/Button.tsx';
import { CodeBlock } from '../ui/CodeBlock.tsx';
import { NodeCard } from './NodeCard.tsx';
import { PROMPT_NODE_ID } from './layout.ts';
import styles from './PromptNode.module.css';

export function PromptNode({ x, y, allSegments, ws }: { x: number; y: number; allSegments: WsSegment[]; ws: WorkspaceState }) {
  const prompt = assembleWorkspacePrompt(allSegments, ws);
  const refs = sceneReferences(allSegments, ws);
  const refLines = ['Image 1: layout proxy', ...refs.map((r, i) => `Image ${i + 2}: ${referenceLabel(r)}`)];
  // The full prompt is long: a few lines until the operator opens it.
  const [open, setOpen] = useState(false);

  return (
    <NodeCard id={PROMPT_NODE_ID} x={x} y={y} chip="PROMPT" title="Assembled prompt" ariaLabel="Assembled prompt node" copyText={prompt}>
      <div className={styles.countRow}>
        <span className={styles.count}>{prompt.length} characters</span>
        <Button size="sm" variant="ghost" aria-expanded={open} onPress={() => setOpen((o) => !o)}>
          {open ? 'Collapse' : 'Show full prompt'}
        </Button>
      </div>
      <div id="assembled-prompt" className={styles.codeWrap} data-open={open || undefined} onWheel={(e) => e.stopPropagation()}>
        <CodeBlock code={prompt} label="assembled prompt" />
      </div>
      <ol className={styles.refs}>
        {refLines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ol>
    </NodeCard>
  );
}
