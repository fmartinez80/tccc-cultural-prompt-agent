// Shared presentation for one agent decision step (prep, plating, sides):
// status line + skeleton while the agent answers, the option cards once it
// has, and Continue/Ask again actions. Accent and Surface reuse the option
// cards but embed differently, so they compose ChoiceCardGroup directly
// instead of this wrapper.

import { PencilLine, RotateCcw, Sparkles } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';

import type { Decision } from '../../shared/types.ts';
import type { AgentTaskStatus, TaskTiming } from '../lib/useAgentTask.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { ChoiceCardGroup, splitSources, type ChoiceCardDetails } from '../ui/ChoiceCard.tsx';
import { TextArea } from '../ui/TextArea.tsx';
import { AgentStatus } from './AgentStatus.tsx';
import styles from './DecisionStep.module.css';
import type { CustomOptionState } from './useCustomOption.ts';
import { ContinueButton, StepActions } from './StepActions.tsx';

export interface DecisionStepProps<T> {
  title: ReactNode;
  intro: ReactNode;
  clearsNote?: string | null | undefined;
  status: AgentTaskStatus;
  timing: TaskTiming;
  agentError: string | null;
  trpcError: unknown;
  workingLabel: string;
  /** The wait card's headline, e.g. "Finding authentic sides…". */
  phase: string;
  decision: Decision<T> | null;
  selected: T | undefined;
  isSame: (a: T, b: T) => boolean;
  /** Card title + one short subhead; `body` and `facts` go to the "More details" dialog. */
  renderOption: (v: T) => {
    label: string;
    summary: ReactNode;
    body?: ReactNode | undefined;
    facts?: ChoiceCardDetails['facts'];
  };
  onPick: (v: T) => void;
  onAskAgain: () => void;
  onSignedIn: () => void;
  onNext: () => void;
  nextLabel?: string | undefined;
  /** "Your own version": adapt an option or describe another, built by the agent. */
  custom?: CustomOptionState | undefined;
  /** Placeholder for the custom description. */
  customExample?: string | undefined;
}

export function DecisionStep<T>({
  title,
  intro,
  clearsNote,
  status,
  timing,
  agentError,
  trpcError,
  workingLabel,
  phase,
  decision,
  selected,
  isSame,
  renderOption,
  onPick,
  onAskAgain,
  onSignedIn,
  onNext,
  nextLabel = 'Continue',
  custom,
  customExample,
}: DecisionStepProps<T>) {
  const isBusy = status === 'starting' || status === 'polling';
  const selectedId = selected !== undefined ? (decision?.options.find((o) => isSame(o.value, selected))?.id ?? null) : null;

  // The recommended option is the answer until the operator picks another, so Continue always moves on.
  useEffect(() => {
    if (decision && selected === undefined) {
      const rec = decision.options.find((o) => o.suggested) ?? decision.options[0];
      if (rec) onPick(rec.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decision, selected]);

  return (
    <section>
      <h1>{title}</h1>
      <p>{intro}</p>
      {clearsNote && (
        <Alert tone="warning" title="Changing this clears later choices">
          Changing this clears {clearsNote} you already chose.
        </Alert>
      )}
      <AgentStatus
        status={status}
        timing={timing}
        agentError={agentError}
        trpcError={trpcError}
        workingLabel={workingLabel}
        phase={phase}
        card
        onSignedIn={onSignedIn}
        onRetry={onAskAgain}
        skeletonCards={3}
        skeletonLayout="list"
      />
      {decision && (
        <>
          {decision.status === 'resolved' && decision.options.length === 1 && (
            <Alert tone="info" title="Served one way here">
              This is filled in for you.
            </Alert>
          )}
          <ChoiceCardGroup
            layout="list"
            aria-label={typeof title === 'string' ? title : 'Options'}
            value={selectedId}
            onChange={(id) => {
              const o = decision.options.find((x) => x.id === id);
              if (o) onPick(o.value);
            }}
            options={decision.options.map((o) => {
              const r = renderOption(o.value);
              const why = splitSources(o.rationale);
              return {
                id: o.id,
                value: o.id,
                label: r.label,
                summary: r.summary,
                details: {
                  body: r.body,
                  facts: r.facts,
                  rationale: why.rationale,
                  sources: why.sources,
                },
                badge: o.id === 'custom' ? 'Your version' : decision.options.length > 1 && o.suggested ? 'Recommended' : undefined,
              };
            })}
          />
        </>
      )}
      {custom && (decision || status === 'error') && (
        <div className={styles.customWrap}>
          <CustomOption custom={custom} example={customExample} />
        </div>
      )}
      <StepActions>
        {decision && (
          <Button variant="ghost" size="sm" icon={<RotateCcw size={14} aria-hidden />} onPress={onAskAgain} disabled={isBusy}>
            Ask again
          </Button>
        )}
        <ContinueButton
          blocked={
            selected
              ? null
              : { reason: status === 'error' ? "The options didn't load. Try again above." : 'The options are on their way. Continue picks the recommended one.' }
          }
          onPress={onNext}
        >
          {nextLabel}
        </ContinueButton>
      </StepActions>
    </section>
  );
}

export function CustomOption({ custom, example }: { custom: CustomOptionState; example?: string | undefined }) {
  const busy = custom.status === 'starting' || custom.status === 'polling';
  return (
    <div
      className={styles.custom}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          if (!busy) custom.submit();
        }
      }}
    >
      <div className={styles.customIntro}>
        <div className={styles.customHead}>
          <PencilLine size={18} aria-hidden />
          <span>Your own version</span>
        </div>
        <p className={styles.customHint}>
          Adapt one of the options or describe something else. The agent turns it into an option and says if it's unusual for this region.
        </p>
      </div>
      <div className={styles.customForm}>
        <TextArea
          aria-label="Describe your own version"
          value={custom.text}
          onChange={custom.setText}
          rows={2}
          disabled={busy}
          placeholder={example ?? 'Like B, but…'}
        />
        <AgentStatus
          status={custom.status}
          timing={custom.timing}
          agentError={custom.agentError}
          trpcError={custom.trpcError}
          workingLabel="The cultural agent is building your version"
          onSignedIn={custom.onSignedIn}
          onRetry={custom.submit}
          skeletonCards={1}
        />
        <div className={styles.customActions}>
          <span className={styles.customKeys}>Ctrl + Enter</span>
          <Button
            variant="default"
            size="sm"
            icon={<Sparkles size={14} aria-hidden />}
            onPress={custom.submit}
            disabled={busy || !custom.text.trim()}
          >
            {busy ? 'Building…' : 'Build my version'}
          </Button>
        </div>
      </div>
    </div>
  );
}
