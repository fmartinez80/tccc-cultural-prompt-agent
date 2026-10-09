// The image check under the latest scene: each image compared with the scene
// story and the prompt it came from, issue by issue, with a way to add the
// suggested fixes to the matching nodes before generating again.

import { CircleCheck, ListPlus, ScanSearch, TriangleAlert } from 'lucide-react';

import type { ImageCheck } from '../../shared/story.ts';
import { AgentStatus } from '../intake/AgentStatus.tsx';
import type { AgentTaskStatus, TaskTiming } from '../lib/useAgentTask.ts';
import { Button } from '../ui/Button.tsx';
import styles from './ImageCheckPanel.module.css';

export type CheckIssue = ImageCheck['images'][number]['issues'][number];

export interface ImageCheckState {
  status: AgentTaskStatus;
  timing: TaskTiming;
  agentError: string | null;
  trpcError: unknown;
  /** The result the running (or last failed) check belongs to. */
  resultId: string | null;
}

export function ImageCheckPanel({
  resultId,
  check,
  state,
  onCheck,
  onApplyFixes,
  onSignedIn,
}: {
  resultId: string;
  check: ImageCheck | undefined;
  state: ImageCheckState;
  onCheck: () => void;
  onApplyFixes: (issues: CheckIssue[]) => void;
  onSignedIn: () => void;
}) {
  const mine = state.resultId === resultId;
  const busy = mine && (state.status === 'starting' || state.status === 'polling');
  const failed = mine && state.status === 'error';
  const single = (check?.images.length ?? 0) === 1;

  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <span className={styles.label}>Check against the story</span>
        {!busy && (
          <Button size="sm" variant={check ? 'ghost' : 'default'} icon={<ScanSearch size={14} aria-hidden />} onPress={onCheck}>
            {check ? 'Check again' : 'Check image'}
          </Button>
        )}
      </div>

      {(busy || failed) && (
        <AgentStatus
          status={state.status}
          timing={state.timing}
          agentError={state.agentError}
          trpcError={state.trpcError}
          workingLabel="Comparing the image with the scene story"
          onSignedIn={onSignedIn}
          onRetry={onCheck}
        />
      )}

      {!busy && !failed && !check && (
        <p className={styles.muted}>The agent compares each image with the scene story and the prompt, and lists anything that doesn't match.</p>
      )}

      {!busy && check && (
        <>
          <p className={styles.summary}>{check.summary}</p>
          {check.images.map((img) => (
            <section key={img.image} className={styles.image} aria-label={`Check for image ${img.image}`}>
              <p className={img.pass ? styles.verdictOk : styles.verdictBad}>
                {img.pass ? <CircleCheck size={14} aria-hidden /> : <TriangleAlert size={14} aria-hidden />}
                {single ? '' : `Image ${img.image}: `}
                {img.pass
                  ? img.issues.length
                    ? `Matches, with ${img.issues.length} small difference${img.issues.length > 1 ? 's' : ''}`
                    : 'Matches the story'
                  : `Doesn't match: ${img.issues.filter((i) => i.severity === 'major').length} major issue${img.issues.filter((i) => i.severity === 'major').length > 1 ? 's' : ''}`}
              </p>
              {img.issues.length > 0 && (
                <ul className={styles.issues}>
                  {img.issues.map((issue, i) => (
                    <li key={i} className={styles.issue}>
                      <span className={styles.chips}>
                        <span className={styles.chip}>{issue.element}</span>
                        <span className={issue.severity === 'major' ? styles.major : styles.minor}>{issue.severity}</span>
                      </span>
                      <span>
                        <strong>Asked for:</strong> {issue.expected}
                      </span>
                      <span>
                        <strong>Image shows:</strong> {issue.seen}
                      </span>
                      <span className={styles.fix}>
                        <strong>Fix:</strong> {issue.fix}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {img.issues.length > 0 && (
                <Button size="sm" icon={<ListPlus size={14} aria-hidden />} onPress={() => onApplyFixes(img.issues)}>
                  Add {single ? 'these' : `image ${img.image}'s`} fixes to the nodes
                </Button>
              )}
            </section>
          ))}
        </>
      )}
    </div>
  );
}
