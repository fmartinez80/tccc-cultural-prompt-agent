// One dish's feedback, lessons and knowledge-base edits.

import { SignInPrompt, signInRequiredFrom } from '@runway/bay-react/runway-sign-in';
import { ArrowLeft } from 'lucide-react';

import type { DishSummary } from '../../shared/feedback.ts';
import { useOnRunwaySignedIn } from '../lib/useOnRunwaySignedIn.ts';
import { useProgress } from '../lib/progress.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { ProgressBar } from '../ui/ProgressBar.tsx';
import { SkeletonBlock, SkeletonText } from '../ui/Skeleton.tsx';
import { FeedbackSection } from './FeedbackSection.tsx';
import { KbEditsSection } from './KbEditsSection.tsx';
import { LessonsSection } from './LessonsSection.tsx';
import { LEARN_TIMING_KEY, useLearnRun } from './useLearnRun.ts';
import styles from './DishDetail.module.css';

function isForbidden(err: unknown): boolean {
  if (typeof err !== 'object' || err === null || !('data' in err)) return false;
  const data = (err as { data?: unknown }).data;
  return typeof data === 'object' && data !== null && (data as { code?: unknown }).code === 'FORBIDDEN';
}

function LearnPanel({ dishKey, recordsCount }: { dishKey: string; recordsCount: number }) {
  const run = useLearnRun(dishKey);
  const onSignedIn = useOnRunwaySignedIn();
  const busy = run.status === 'starting' || run.status === 'polling';
  const progress = useProgress(LEARN_TIMING_KEY, busy ? run.startedAt : null, run.reported);
  const signIn = run.status === 'error' ? signInRequiredFrom(run.trpcError) : null;
  const forbidden = run.status === 'error' && isForbidden(run.trpcError);

  return (
    <div className={styles.learnPanel}>
      <div className={styles.learnRow}>
        <div>
          <Button onPress={() => run.run()} loading={busy} disabled={recordsCount === 0 || busy}>
            Draft lessons and knowledge-base edits
          </Button>
          <p className={styles.learnHelp}>
            {recordsCount === 0
              ? 'Rate at least one image for this dish first.'
              : "Runs on the signed-in Runway account and spends its credits."}
          </p>
        </div>
      </div>

      {busy && progress && <ProgressBar label="Drafting lessons and edits" progress={progress} />}

      {run.status === 'error' && signIn && (
        <SignInPrompt
          reauth={signIn.reauth}
          onSignedIn={() => onSignedIn(() => run.run())}
          description="Drafting lessons runs on your own Runway account and uses your own credits."
        />
      )}

      {run.status === 'error' && !signIn && (
        <Alert tone="error" title={forbidden ? "This needs a model your plan can't run" : "The learning agent couldn't answer"}>
          {run.learnError ?? (forbidden ? 'Upgrade the signed-in Runway account’s plan to draft lessons.' : 'Something went wrong. Try again.')}
          {!forbidden && (
            <div className={styles.retryRow}>
              <Button size="sm" onPress={() => run.run()}>
                Try again
              </Button>
            </div>
          )}
        </Alert>
      )}

      {run.status === 'done' && run.summary && <Alert tone="success" title="Drafted new lessons and edits">{run.summary}</Alert>}
    </div>
  );
}

export function DishDetail({ dishKey, summary, onBack }: { dishKey: string; summary: DishSummary | null; onBack: () => void }) {
  const query = trpc.feedbackDish.useQuery({ dishKey });

  return (
    <div className={styles.page}>
      <Button variant="ghost" size="sm" icon={<ArrowLeft size={14} aria-hidden />} onPress={onBack} className={styles.back}>
        Back to all dishes
      </Button>

      <h1 className={styles.title}>{summary ? `${summary.heroDish} · ${summary.countryLabel}` : dishKey}</h1>

      {query.isPending ? (
        <>
          <SkeletonBlock height={72} />
          <SkeletonText rows={5} />
        </>
      ) : query.isError ? (
        <Alert tone="error" title="Couldn't load this dish's feedback">
          {query.error.message}
          <div className={styles.retryRow}>
            <Button size="sm" onPress={() => query.refetch()}>
              Try again
            </Button>
          </div>
        </Alert>
      ) : (
        (() => {
          const { records, learning } = query.data;
          const usable = records.filter((r) => r.verdict === 'usable').length;
          const fixes = records.filter((r) => r.verdict === 'fixes').length;
          const unusable = records.filter((r) => r.verdict === 'unusable').length;
          const lessonsConfirmed = learning?.lessons.filter((l) => l.status === 'confirmed').length ?? 0;
          const lessonsProposed = learning?.lessons.filter((l) => l.status === 'proposed').length ?? 0;
          const editsApproved = learning?.kbEdits.filter((e) => e.status === 'approved').length ?? 0;
          const editsProposed = learning?.kbEdits.filter((e) => e.status === 'proposed').length ?? 0;

          return (
            <>
              <div className={styles.counts}>
                <span>
                  {records.length} rating{records.length === 1 ? '' : 's'} ({usable} usable · {fixes} with fixes · {unusable} unusable)
                </span>
                <span>
                  {lessonsConfirmed} lesson{lessonsConfirmed === 1 ? '' : 's'} confirmed · {lessonsProposed} proposed
                </span>
                <span>
                  {editsApproved} KB edit{editsApproved === 1 ? '' : 's'} approved · {editsProposed} proposed
                </span>
              </div>

              <LearnPanel dishKey={dishKey} recordsCount={records.length} />

              <LessonsSection dishKey={dishKey} lessons={learning?.lessons ?? []} records={records} />

              <KbEditsSection dishKey={dishKey} edits={learning?.kbEdits ?? []} />

              <FeedbackSection dishKey={dishKey} records={records} />
            </>
          );
        })()
      )}
    </div>
  );
}
