// Express mode's one screen: the agent answers preparation, plating and
// sides together (card group, list layout, same "Your own version" custom
// panel as the guided decision steps), then a compose call turns that into
// a few simple layout proxies. "Fast track to scene" jumps straight to Story.

import { ArrowRight, RotateCcw } from 'lucide-react';
import { useEffect, useState } from 'react';

import { MODEL_FRAMING_WIDEN } from '../../shared/rules.ts';
import type { Selections } from '../../shared/spec.ts';
import type { Decision, ExpressChoice } from '../../shared/types.ts';
import { recordDuration } from '../lib/progress.ts';
import { renderProxy } from '../lib/renderProxy.ts';
import { useAgentTask } from '../lib/useAgentTask.ts';
import { useOnRunwaySignedIn } from '../lib/useOnRunwaySignedIn.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { ChoiceCardGroup, splitSources } from '../ui/ChoiceCard.tsx';
import { EmptyState } from '../ui/EmptyState.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { AgentStatus } from './AgentStatus.tsx';
import { CustomOption } from './DecisionStep.tsx';
import decisionStyles from './DecisionStep.module.css';
import { vesselLine, vesselName } from './optionText.ts';
import type { Brief, ComposeResult } from './types.ts';
import { keepCustom, useCustomOption } from './useCustomOption.ts';
import styles from './ExpressStep.module.css';
import { StepActions } from './StepActions.tsx';

const OPTION_LETTERS = ['A', 'B', 'C'];

function isSameExpress(a: ExpressChoice, b: ExpressChoice): boolean {
  return a.prep.label === b.prep.label && a.plating.label === b.plating.label && a.sides.label === b.sides.label;
}

export function ExpressStep({
  brief,
  sel,
  decision,
  compose,
  picked,
  onDecision,
  onPick,
  onCompose,
  onPickLayout,
  onNext,
}: {
  brief: Brief;
  sel: Selections;
  decision: Decision<ExpressChoice> | null;
  compose: ComposeResult | null;
  picked: number | null;
  onDecision: (d: Decision<ExpressChoice>) => void;
  onPick: (v: ExpressChoice) => void;
  onCompose: (c: ComposeResult | null) => void;
  onPickLayout: (i: number | null) => void;
  onNext: () => void;
}) {
  const task = useAgentTask('express');
  const onSignedIn = useOnRunwaySignedIn();
  const composeMutation = trpc.compose.useMutation();
  const [images, setImages] = useState<string[] | null>(null);

  const selected: ExpressChoice | undefined =
    sel.prep && sel.plating && sel.sides ? { prep: sel.prep, plating: sel.plating, sides: sel.sides } : undefined;

  const load = () => task.run({ brief, selections: sel });

  useEffect(() => {
    if (!decision) load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (task.result?.kind === 'express') onDecision(keepCustom(task.result.decision, decision));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.result, onDecision]);

  const custom = useCustomOption<ExpressChoice>({
    kind: 'express',
    brief,
    sel,
    decision,
    onDecision,
    onPick,
    describe: (v) =>
      `${v.prep.label} — ${v.plating.label}, ${v.plating.detail} (${vesselLine(v.plating.vessel, v.plating.vesselStyle)}); sides: ${v.sides.label}`,
    extract: (r) => (r.kind === 'express' ? r.decision.options[0] : undefined),
  });

  useEffect(() => {
    if (decision?.status === 'resolved' && !selected) onPick(decision.options[0]!.value);
  }, [decision, selected, onPick]);

  const loadCompose = () => {
    const begun = Date.now();
    composeMutation.mutate(
      { brief, selections: { ...sel, accent: null, napkin: false } },
      {
        onSuccess: (c) => {
          recordDuration('compose', begun);
          onCompose(c);
        },
      },
    );
  };

  // Keyed on the draft's own (stable) choices: one layout request per plating, never a re-send while one is pending.
  useEffect(() => {
    if (selected && !compose && !composeMutation.isPending) loadCompose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sel.prep, sel.plating, sel.sides, compose]);

  useEffect(() => {
    if (!compose || compose.options.length === 0) {
      setImages([]);
      return;
    }
    setImages(null);
    const frame = requestAnimationFrame(() => {
      setImages(compose.options.map((o) => renderProxy(o.blueprint, compose.lighting, { width: 640, widen: MODEL_FRAMING_WIDEN })));
    });
    return () => cancelAnimationFrame(frame);
  }, [compose]);

  useEffect(() => {
    if (compose && compose.options.length > 0 && picked === null) onPickLayout(0);
  }, [compose, picked, onPickLayout]);

  const isBusy = task.status === 'starting' || task.status === 'polling';
  const isComposing = composeMutation.isPending;
  const selectedId = selected ? decision?.options.find((o) => isSameExpress(o.value, selected))?.id ?? null : null;

  return (
    <section>
      <h1>Plating &amp; layout</h1>
      <p>How this is plated and served here, confirmed in one go — then a quick layout to check it with.</p>

      <AgentStatus
        status={task.status}
        timing={task.timing}
        agentError={task.agentError}
        trpcError={task.trpcError}
        workingLabel="The cultural agent is checking how this is plated and served"
        overlay
        onSignedIn={() => onSignedIn(load)}
        onRetry={load}
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
            aria-label="Plating and sides"
            value={selectedId}
            onChange={(id) => {
              const o = decision.options.find((x) => x.id === id);
              if (o) onPick(o.value);
            }}
            options={decision.options.map((o) => {
              const why = splitSources(o.rationale);
              return {
                id: o.id,
                value: o.id,
                label: `${o.value.prep.label} · ${o.value.plating.label}`,
                summary: `${o.value.plating.detail} Sides: ${o.value.sides.label}.`,
                details: {
                  facts: [
                    { label: 'Vessel', value: vesselName(o.value.plating.vessel) },
                    {
                      label: 'Service',
                      value:
                        o.value.plating.service === 'shared'
                          ? 'Family-style: the shared vessel plus one plated portion'
                          : 'Individual plate',
                    },
                    ...o.value.sides.accompaniments.map((a) => ({
                      label: a.name,
                      value: `${a.role} · ${vesselLine(a.vessel, a.vesselStyle)}`,
                    })),
                  ],
                  rationale: why.rationale,
                  sources: why.sources,
                },
                badge: o.id === 'custom' ? 'Your version' : decision.options.length > 1 && o.suggested ? 'Suggested' : undefined,
              };
            })}
          />
        </>
      )}

      {custom && (decision || task.status === 'error') && (
        <div className={decisionStyles.customWrap}>
          <CustomOption custom={custom} example={'Like A, but plated on a wooden board'} />
        </div>
      )}

      <h2 className={styles.sectionTitle}>Layout</h2>
      {!selected ? (
        <EmptyState title="Pick a plating above to see layouts" hint="Once the plating and sides are set, a few simple layouts show up here." />
      ) : (
        <>
          {isComposing && (
            <div className={styles.grid}>
              {Array.from({ length: 3 }, (_, i) => (
                <SkeletonBlock key={i} height={180} />
              ))}
            </div>
          )}

          {composeMutation.isError && (
            <Alert tone="error" title="Couldn't compose a layout">
              {composeMutation.error.message}
              <div className={styles.retryRow}>
                <Button size="sm" onPress={loadCompose}>
                  Try again
                </Button>
              </div>
            </Alert>
          )}

          {!isComposing && compose && images !== null && !composeMutation.isError && (
            <>
              {compose.options.length === 0 ? (
                <EmptyState
                  title="No layout fits these items"
                  hint="A smaller serving vessel or one fewer side or condiment usually fixes it. Switch to Guided mode for finer control."
                />
              ) : (
                <ChoiceCardGroup
                  aria-label="Layout options"
                  value={picked !== null ? String(picked) : null}
                  onChange={(v) => onPickLayout(Number(v))}
                  options={compose.options.map((o, i) => ({
                    id: String(i),
                    value: String(i),
                    media: <img src={images[i]} alt={`Layout option ${OPTION_LETTERS[i]}`} />,
                    label: (
                      <>
                        {OPTION_LETTERS[i]} &middot; {o.blueprint.layout_meta.archetype}
                      </>
                    ),
                    summary: o.blueprint.layout_meta.rationale,
                  }))}
                />
              )}
            </>
          )}
        </>
      )}

      <StepActions>
        {decision && (
          <Button variant="ghost" size="sm" icon={<RotateCcw size={14} aria-hidden />} onPress={load} disabled={isBusy}>
            Ask again
          </Button>
        )}
        <Button variant="primary" iconEnd={<ArrowRight size={16} aria-hidden />} disabled={picked === null} onPress={onNext}>
          Fast track to scene
        </Button>
      </StepActions>
    </section>
  );
}
