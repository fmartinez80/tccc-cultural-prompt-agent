// The assembled prompt: exactly what `assembleWorkspacePrompt` sends, plus
// the numbered reference-image list so the operator can see what feeds the
// scene generation before pressing it.

import { assembleWorkspacePrompt, referenceLabel, sceneReferences, type WorkspaceState, type WsSegment } from '../../shared/workspace.ts';
import { CodeBlock } from '../ui/CodeBlock.tsx';
import { NodeCard } from './NodeCard.tsx';
import { PROMPT_NODE_ID } from './layout.ts';
import styles from './PromptNode.module.css';

export function PromptNode({ x, y, allSegments, ws }: { x: number; y: number; allSegments: WsSegment[]; ws: WorkspaceState }) {
  const prompt = assembleWorkspacePrompt(allSegments, ws);
  const refs = sceneReferences(allSegments, ws);
  const refLines = ['Image 1: layout proxy', ...refs.map((r, i) => `Image ${i + 2}: ${referenceLabel(r)}`)];

  return (
    <NodeCard id={PROMPT_NODE_ID} x={x} y={y} chip="PROMPT" title="Assembled prompt" ariaLabel="Assembled prompt node">
      <span className={styles.count}>{prompt.length} characters</span>
      <div className={styles.codeWrap} onWheel={(e) => e.stopPropagation()}>
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
