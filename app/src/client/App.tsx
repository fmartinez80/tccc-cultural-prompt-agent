import { ArrowLeft, Check, GraduationCap, RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { layoutKey, sketchKey } from '../shared/review.ts';
import type { LayoutOption } from '../shared/solver.ts';
import type { AccentChoice, Decision, ExpressChoice, PlatingChoice, PrepChoice, SidesChoice, SurfaceChoice } from '../shared/types.ts';
import { AppShell } from './layouts/AppShell.tsx';
import { trpc } from './trpc.ts';
import { Alert } from './ui/Alert.tsx';
import { Button } from './ui/Button.tsx';
import { EmptyState } from './ui/EmptyState.tsx';
import { ErrorBoundary } from './ui/ErrorBoundary.tsx';
import { BriefStep } from './intake/BriefStep.tsx';
import { CameraStep } from './intake/CameraStep.tsx';
import { ExpressStep } from './intake/ExpressStep.tsx';
import { ArrangementBar } from './intake/ArrangementBar.tsx';
import { PrepareLayout } from './intake/LayoutStep.tsx';
import { PlatingStep } from './intake/PlatingStep.tsx';
import { PrepStep } from './intake/PrepStep.tsx';
import { ReviewStep } from './intake/ReviewStep.tsx';
import { SceneStep } from './intake/SceneStep.tsx';
import { SidesStep } from './intake/SidesStep.tsx';
import { StoryStep } from './intake/StoryStep.tsx';
import { STEP_ORDERS, briefOk, type StepId } from './intake/types.ts';
import { useIntake } from './intake/useIntake.ts';
import { WorkspaceStep } from './intake/WorkspaceStep.tsx';
import { StepBackContext } from './intake/StepActions.tsx';
import { LearningPage } from './learning/LearningPage.tsx';
import styles from './App.module.css';

const LEARNING_HASH = '#learning';

/** Which top-level view is showing: driven by `location.hash`, so a reload or
 * a shared link lands back on the Learning page. The intake's own state lives
 * in `useIntake()` below regardless of which view is rendered, so switching
 * views never resets the draft. */
function viewFromHash(): 'intake' | 'learning' {
  return window.location.hash === LEARNING_HASH ? 'learning' : 'intake';
}

const STEP_META: Record<StepId, { label: string }> = {
  brief: { label: 'Brief' },
  scene: { label: 'Time & Place' },
  prep: { label: 'Preparation' },
  plating: { label: 'Plating' },
  sides: { label: 'Sides' },
  camera: { label: 'Camera' },
  layout: { label: 'Layout' },
  review: { label: 'Sketch review' },
  express: { label: 'Plating & layout' },
  story: { label: 'Story & scene' },
  workspace: { label: 'Node workspace' },
};

export function App() {
  const profile = trpc.profile.useQuery();
  const {
    draft,
    saved,
    setStep,
    setBrief,
    startExpress,
    pickExpress,
    choose,
    setPlace,
    describeClears,
    setDecision,
    setCompose,
    setPicked,
    setStory,
    setReview,
    setSketch,
    setValidation,
    setTurnaroundView,
    updateWorkspace,
    startOver,
  } = useIntake();
  const [confirmingReset, setConfirmingReset] = useState(false);
  const [view, setView] = useState<'intake' | 'learning'>(viewFromHash);

  useEffect(() => {
    const onHashChange = () => setView(viewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Publish the frozen step headline's height so sticky parts below it (the sketch, the composition list) clear it.
  const stepBodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const body = stepBodyRef.current;
    if (!body) return;
    const root = document.documentElement;
    let heading: Element | null = null;
    const sizer = new ResizeObserver(([entry]) => {
      root.style.setProperty('--app-step-head-h', `${Math.ceil(entry.borderBoxSize[0]?.blockSize ?? entry.contentRect.height)}px`);
    });
    const track = () => {
      const next = body.querySelector(':scope > section > h1');
      if (next === heading) return;
      if (heading) sizer.unobserve(heading);
      heading = next;
      if (heading) sizer.observe(heading);
      else root.style.removeProperty('--app-step-head-h');
    };
    track();
    const watcher = new MutationObserver(track);
    watcher.observe(body, { childList: true, subtree: true });
    return () => {
      watcher.disconnect();
      sizer.disconnect();
      root.style.removeProperty('--app-step-head-h');
    };
  }, [view]);

  const rulesQuery = trpc.rules.useQuery({ brief: draft.brief, selections: draft.sel }, { enabled: !!draft.brief.skuId && view === 'intake' });
  const rules = rulesQuery.data ?? null;

  const canVisit = (id: StepId): boolean => {
    switch (id) {
      case 'brief':
        return true;
      case 'scene':
        return briefOk(draft.brief);
      case 'prep':
        return briefOk(draft.brief) && !!draft.sel.scene && (draft.sel.scene.venue !== 'on-the-go' || !!draft.sel.scene.surface);
      case 'plating':
        return !!draft.sel.prep && !!draft.sel.scene;
      case 'sides':
        return !!draft.sel.plating;
      case 'camera':
        return !!draft.sel.sides && !!draft.sel.scene;
      case 'layout':
        // Removed: Sketch review composes and picks the layout itself.
        return false;
      case 'express':
        return draft.mode === 'express' && briefOk(draft.brief) && !!draft.sel.scene;
      case 'review':
        // Sketch review composes and picks the layout itself, so the camera is all it needs.
        return !!draft.sel.camera && !!draft.sel.scene;
      case 'story':
        return draft.picked !== null;
      case 'workspace':
        return draft.picked !== null && !!draft.story;
    }
  };

  const stepOrder = STEP_ORDERS[draft.mode];
  // The node workspace sits outside the rail; it goes back to Story & scene.
  const currentIndex = draft.step === 'workspace' ? stepOrder.length : stepOrder.indexOf(draft.step);

  const prevStep = draft.step === 'workspace' ? 'story' : currentIndex > 0 ? stepOrder[currentIndex - 1] : undefined;
  const back = prevStep ? { label: STEP_META[prevStep].label, onBack: () => setStep(prevStep) } : undefined;

  const goTo = (id: StepId) => {
    if (canVisit(id)) setStep(id);
  };

  // A review only counts for the layout it was made on.
  const reviewFor = (option: LayoutOption) => (draft.review && draft.review.key === layoutKey(option.blueprint) ? draft.review : null);

  const renderStep = () => {
    switch (draft.step) {
      case 'brief':
        return (
          <BriefStep
            brief={draft.brief}
            mode={draft.mode}
            scene={draft.sel.scene}
            onSave={setBrief}
            onStartExpress={startExpress}
            onNext={() => setStep('scene')}
          />
        );

      case 'prep':
        return (
          <PrepStep
            brief={draft.brief}
            sel={draft.sel}
            decision={(draft.decisions.prep as Decision<PrepChoice> | undefined) ?? null}
            selected={draft.sel.prep}
            clearsNote={draft.sel.prep ? describeClears('prep') : null}
            onDecision={(d) => setDecision('prep', d)}
            onPick={(v) => choose('prep', v)}
            onNext={() => setStep('plating')}
          />
        );

      case 'plating':
        return (
          <PlatingStep
            brief={draft.brief}
            sel={draft.sel}
            decision={(draft.decisions.plating as Decision<PlatingChoice> | undefined) ?? null}
            selected={draft.sel.plating}
            clearsNote={draft.sel.plating ? describeClears('plating') : null}
            onDecision={(d) => setDecision('plating', d)}
            onPick={(v) => choose('plating', v)}
            onNext={() => setStep('sides')}
          />
        );

      case 'sides':
        return (
          <SidesStep
            brief={draft.brief}
            sel={draft.sel}
            decision={(draft.decisions.sides as Decision<SidesChoice> | undefined) ?? null}
            selected={draft.sel.sides}
            clearsNote={draft.sel.sides ? describeClears('sides') : null}
            onDecision={(d) => setDecision('sides', d)}
            onPick={(v) => choose('sides', v)}
            onNext={() => setStep('camera')}
          />
        );

      case 'scene':
        return (
          <SceneStep
            brief={draft.brief}
            sel={draft.sel}
            rules={rules}
            clearsNote={draft.sel.scene ? describeClears('scene') : null}
            surfaceDecision={(draft.decisions.surface as Decision<SurfaceChoice> | undefined) ?? null}
            onSurfaceDecision={(d) => setDecision('surface', d)}
            onScene={(s) => choose('scene', s)}
            onPlace={setPlace}
            onGlass={(g) => choose('glass', g)}
            onNext={() => setStep('prep')}
          />
        );

      case 'camera':
        return <CameraStep dish={draft.brief.heroDish} sel={draft.sel} onCamera={(c) => choose('camera', c)} onNext={() => setStep('review')} />;

      // Older drafts saved on the removed Layout step.
      case 'layout':
      case 'review': {
        const accentDecision = (draft.decisions.accent as Decision<AccentChoice> | undefined) ?? null;
        const onAccentDecision = (d: Decision<AccentChoice>) => setDecision('accent', d);
        const onAccent = (v: AccentChoice | null) => choose('accent', v);
        const onNapkin = () => {
          // Picking the napkin replaces any accent (choosing the accent clears the napkin, which comes after it).
          choose('accent', null);
          choose('napkin', true);
        };
        const compose = draft.compose;
        const option = compose && draft.picked !== null ? compose.options[draft.picked] : undefined;
        if (!compose || !option) {
          return (
            <PrepareLayout
              brief={draft.brief}
              sel={draft.sel}
              rules={rules}
              accentDecision={accentDecision}
              onAccentDecision={onAccentDecision}
              onAccent={onAccent}
              onNapkin={onNapkin}
              compose={compose}
              onCompose={setCompose}
              onPick={setPicked}
              onBack={() => setStep('camera')}
            />
          );
        }
        const key = sketchKey(option.blueprint);
        return (
          <ReviewStep
            // A fresh step per arrangement: its marks, selection and sketch run belong to that layout.
            key={key}
            compose={compose}
            option={option}
            review={reviewFor(option)}
            onReview={setReview}
            detail={draft.sketches[key] ?? draft.sketch}
            onDetail={setSketch}
            hasStory={!!draft.story}
            arrangement={(drawing) => (
              <ArrangementBar
                brief={draft.brief}
                sel={draft.sel}
                rules={rules}
                accentDecision={accentDecision}
                onAccentDecision={onAccentDecision}
                compose={compose}
                picked={draft.picked!}
                onPick={setPicked}
                hasSketch={(i) => !!draft.sketches[sketchKey(compose.options[i]!.blueprint)]}
                onAccent={onAccent}
                onNapkin={onNapkin}
                drawing={drawing}
              />
            )}
            onNext={() => setStep('story')}
          />
        );
      }

      case 'story': {
        const option = draft.compose && draft.picked !== null ? draft.compose.options[draft.picked] : undefined;
        if (!draft.compose || !option) {
          return (
            <EmptyState
              title="Pick a layout first"
              hint={
                draft.mode === 'express'
                  ? 'Go back to Plating & layout and choose one of the proposed tablescapes.'
                  : 'Go to Sketch review, which picks the best layout for this table.'
              }
              action={
                <Button onPress={() => setStep(draft.mode === 'express' ? 'express' : 'review')}>
                  {draft.mode === 'express' ? 'Go to Plating & layout' : 'Go to Sketch review'}
                </Button>
              }
            />
          );
        }
        return (
          <StoryStep
            brief={draft.brief}
            compose={draft.compose}
            option={option}
            review={reviewFor(option)}
            story={draft.story}
            validation={draft.validation}
            onStory={setStory}
            onValidation={setValidation}
            turnarounds={draft.turnarounds}
            onTurnaroundView={setTurnaroundView}
            ws={draft.workspace}
            updateWorkspace={updateWorkspace}
            onOpenWorkspace={() => setStep('workspace')}
          />
        );
      }

      case 'express':
        return (
          <ExpressStep
            brief={draft.brief}
            sel={draft.sel}
            decision={(draft.decisions.express as Decision<ExpressChoice> | undefined) ?? null}
            compose={draft.compose}
            picked={draft.picked}
            onDecision={(d) => setDecision('express', d)}
            onPick={pickExpress}
            onCompose={setCompose}
            onPickLayout={setPicked}
            onNext={() => setStep('story')}
          />
        );

      case 'workspace': {
        const option = draft.compose && draft.picked !== null ? draft.compose.options[draft.picked] : undefined;
        if (!draft.compose || !option || !draft.story) {
          return (
            <EmptyState
              title="Create the scene first"
              hint="Go back to Story & scene and create the scene."
              action={<Button onPress={() => setStep('story')}>Go to Story & scene</Button>}
            />
          );
        }
        return (
          <WorkspaceStep
            brief={draft.brief}
            compose={draft.compose}
            option={option}
            story={draft.story}
            ws={draft.workspace}
            updateWorkspace={updateWorkspace}
            saved={saved}
          />
        );
      }
    }
  };

  const goToLearning = () => {
    window.location.hash = LEARNING_HASH;
  };
  const leaveLearning = () => {
    // Clears the hash without leaving a trailing "#" in the address bar.
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    setView('intake');
  };

  return (
    <AppShell
      title={<img src="/prodx-logo.png" alt="Prod X by Studio X" className={styles.logoImg} />}
      user={profile.data ?? undefined}
      actions={
        view === 'learning' ? (
          <Button variant="ghost" size="sm" icon={<ArrowLeft size={14} aria-hidden />} onPress={leaveLearning}>
            Back to the scene
          </Button>
        ) : confirmingReset ? (
          <div className={styles.confirmRow}>
            <span className={styles.confirmText}>Start over and clear the whole draft?</span>
            <Button size="sm" onPress={() => setConfirmingReset(false)}>
              Cancel
            </Button>
            <Button
              size="sm"
              variant="primary"
              onPress={() => {
                startOver();
                setConfirmingReset(false);
              }}
            >
              Start over
            </Button>
          </div>
        ) : (
          <>
            <Button variant="ghost" size="sm" icon={<GraduationCap size={14} aria-hidden />} onPress={goToLearning}>
              Learning
            </Button>
            <Button variant="ghost" size="sm" icon={<RotateCcw size={14} aria-hidden />} onPress={() => setConfirmingReset(true)}>
              Start over
            </Button>
          </>
        )
      }
      maxWidth={view === 'learning' ? 1200 : 1360}
    >
      {view === 'learning' ? (
        <ErrorBoundary label="learning page">
          <LearningPage />
        </ErrorBoundary>
      ) : (
        <div className={styles.layout} data-wide={draft.step === 'workspace' || undefined}>
          <div className={styles.railColumn}>
            <ErrorBoundary label="step navigation">
              <nav className={styles.rail} aria-label="Intake steps">
                {stepOrder.map((id, i) => {
                  const meta = STEP_META[id];
                  const isActive = id === draft.step;
                  const isDone = i < currentIndex;
                  const reachable = canVisit(id);
                  return (
                    <button
                      key={id}
                      type="button"
                      className={styles.railItem}
                      data-active={isActive || undefined}
                      data-done={isDone || undefined}
                      disabled={!reachable}
                      aria-current={isActive ? 'step' : undefined}
                      onClick={() => goTo(id)}
                    >
                      <span className={styles.railNumber} aria-hidden>
                        {i + 1}
                      </span>
                      <span className={styles.railLabel}>{meta.label}</span>
                      {isDone && <Check size={16} className={styles.railCheck} aria-hidden />}
                    </button>
                  );
                })}
              </nav>
            </ErrorBoundary>
            <div className={styles.savedRow} role="status">
              {saved && (
                <>
                  <Check size={12} className={styles.savedIcon} aria-hidden />
                  Draft saved
                </>
              )}
            </div>
          </div>

          <main className={styles.panel}>
            {rulesQuery.isError && draft.brief.skuId && (
              <Alert tone="error" title="Couldn't load the rule effects for this brief">
                {rulesQuery.error.message}
              </Alert>
            )}
            <ErrorBoundary label={STEP_META[draft.step].label.toLowerCase()}>
              <StepBackContext.Provider value={back}>
                <div ref={stepBodyRef} className={styles.stepBody}>
                  {renderStep()}
                </div>
              </StepBackContext.Provider>
            </ErrorBoundary>
          </main>

        </div>
      )}
    </AppShell>
  );
}
