// The scene generator: settings, the Generate button, and the results —
// the latest batch large, older ones as a history strip.

import { CircleCheck, Download, ExternalLink, ImageOff, MessageSquareWarning, TriangleAlert, Wand2, X } from 'lucide-react';
import { useState } from 'react';

import { VERDICT_LABELS, type Verdict } from '../../shared/feedback.ts';
import { PROXY_ASPECT_RATIO, type WorkspaceState } from '../../shared/workspace.ts';
import { isForbidden, type LiveTask } from '../lib/useWorkspaceTasks.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { CopyButton, triggerDownload } from '../ui/DownloadCopy.tsx';
import { EmptyState } from '../ui/EmptyState.tsx';
import { SegmentedControl } from '../ui/SegmentedControl.tsx';
import { Select } from '../ui/Select.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { useCanvasContext } from './context.ts';
import { GENERATE_NODE_ID } from './layout.ts';
import { NodeCard } from './NodeCard.tsx';
import { ImageCheckPanel, type CheckIssue, type ImageCheckState } from './ImageCheckPanel.tsx';
import { TaskError } from './TaskError.tsx';
import type { CanvasHistory } from './useCanvasHistory.ts';
import { useProgress } from '../lib/progress.ts';
import { ProgressBar } from '../ui/ProgressBar.tsx';
import styles from './GenerateNode.module.css';

async function downloadUrl(url: string, name: string) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    triggerDownload(name, blobUrl);
    URL.revokeObjectURL(blobUrl);
  } catch {
    window.open(url, '_blank', 'noreferrer');
  }
}

function ResultTile({
  url,
  index,
  slug,
  pass,
  feedback,
  onRate,
}: {
  url: string;
  index: number;
  slug: string;
  pass: boolean | undefined;
  /** This image's rating, when the operator has already rated it. */
  feedback: { verdict: Verdict } | undefined;
  onRate: () => void;
}) {
  const ctx = useCanvasContext();
  const [broken, setBroken] = useState(false);
  return (
    <div className={styles.tile} data-unusable={feedback?.verdict === 'unusable' || undefined}>
      {broken ? (
        <div className={styles.tileBroken}>
          <ImageOff size={16} aria-hidden />
          Link expired
        </div>
      ) : (
        <button
          type="button"
          className={styles.tileButton}
          onClick={() => ctx.openLightbox(url, `Scene, image ${index + 1}`, onRate)}
          aria-label={`View scene image ${index + 1} full size`}
        >
          <img className={styles.tileImg} src={url} alt={`Generated scene, variant ${index + 1}`} onError={() => setBroken(true)} />
        </button>
      )}
      {!broken && pass !== undefined && (
        <span className={pass ? styles.tileOk : styles.tileBad} role="img" aria-label={pass ? 'Matches the story' : "Doesn't match the story"}>
          {pass ? <CircleCheck size={14} aria-hidden /> : <TriangleAlert size={14} aria-hidden />}
        </span>
      )}
      {!broken && feedback && (
        <span className={styles.ratedPill} data-verdict={feedback.verdict}>
          {VERDICT_LABELS[feedback.verdict]}
        </span>
      )}
      {!broken && (
        <div className={styles.tileActions}>
          <Button size="sm" icon={<MessageSquareWarning size={14} aria-hidden />} aria-label={`Rate image ${index + 1}`} onPress={onRate}>
            {feedback ? 'Re-rate' : 'Rate'}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            icon={<Download size={14} aria-hidden />}
            aria-label={`Download scene image ${index + 1}`}
            onPress={() => downloadUrl(url, `${slug}-scene-${index + 1}.png`)}
          />
        </div>
      )}
    </div>
  );
}

export function GenerateNode({
  x,
  y,
  ws,
  history,
  options,
  live,
  preparing,
  prepareError,
  onGenerate,
  slug,
  leftOut,
  sending,
  brandConflicts,
  check,
  onCheck,
  onApplyFixes,
  onCheckSignedIn,
  onRate,
  feedbackFlash,
  onDismissFeedbackFlash,
  onOpenLearning,
}: {
  x: number;
  y: number;
  ws: WorkspaceState;
  history: CanvasHistory;
  options: { aspectRatios: readonly string[]; imageSizes: readonly string[] } | null;
  live: LiveTask | undefined;
  preparing: boolean;
  prepareError: string | null;
  onGenerate: () => void;
  slug: string;
  /** Chips of nodes whose outdated previews are kept out of the scene. */
  leftOut: string[];
  /** What goes in after the layout (image 1), e.g. "SKU (your image)". */
  sending: string[];
  /** Nodes that still name Coca-Cola while the SKU carries the operator's own product image. */
  brandConflicts: string[];
  /** The image check task (one at a time, for whichever result it was started on). */
  check: ImageCheckState;
  onCheck: (resultId: string) => void;
  onApplyFixes: (issues: CheckIssue[]) => void;
  onCheckSignedIn: (resultId: string) => void;
  /** Opens the feedback dialog for one image of the latest result. */
  onRate: (imageIndex: number) => void;
  /** A message to show after a rating saves, e.g. "Thanks — saved to Learning…"; null when there's none to show. */
  feedbackFlash: string | null;
  onDismissFeedbackFlash: () => void;
  onOpenLearning: () => void;
}) {
  const ctx = useCanvasContext();
  const running = preparing || live?.status === 'running';
  const forbidden = live?.error ? isForbidden(live.cause) : false;
  const progress = useProgress(live?.timingKey ?? '', running && !preparing ? (live?.startedAt ?? null) : null, live?.progress);
  const [latest, ...older] = ws.results;
  const mismatch = ws.settings.aspectRatio !== PROXY_ASPECT_RATIO;

  return (
    <NodeCard id={GENERATE_NODE_ID} x={x} y={y} chip="SCENE" title="Nano Banana Pro" ariaLabel="Scene generator node, Nano Banana Pro">
      <div className={styles.field}>
        <span className={styles.fieldLabel}>Aspect ratio</span>
        {options ? (
          <Select
            aria-label="Scene aspect ratio"
            value={ws.settings.aspectRatio}
            onChange={(v) => history.record((w) => ({ ...w, settings: { ...w.settings, aspectRatio: v } }))}
            options={options.aspectRatios.map((r) => ({ id: r, label: r }))}
          />
        ) : (
          <SkeletonBlock height={36} />
        )}
        {mismatch && (
          <p className={styles.mismatch}>
            <TriangleAlert size={12} aria-hidden style={{ verticalAlign: '-2px' }} /> The proxy is {PROXY_ASPECT_RATIO}, so the layout will be
            reframed to fit.
          </p>
        )}
      </div>

      <div className={styles.field}>
        <span className={styles.fieldLabel}>Image size</span>
        {options ? (
          <SegmentedControl
            aria-label="Image size"
            value={ws.settings.imageSize}
            onChange={(v) => history.record((w) => ({ ...w, settings: { ...w.settings, imageSize: v as WorkspaceState['settings']['imageSize'] } }))}
            options={options.imageSizes.map((s) => ({ value: s, label: s }))}
          />
        ) : (
          <SkeletonBlock height={32} />
        )}
      </div>

      <div className={styles.field}>
        <span className={styles.fieldLabel}>Variants</span>
        <SegmentedControl
          aria-label="Number of variants"
          value={String(ws.settings.numImages)}
          onChange={(v) => history.record((w) => ({ ...w, settings: { ...w.settings, numImages: (Number(v) as 1 | 4) } }))}
          options={[
            { value: '1', label: '1' },
            { value: '4', label: '4' },
          ]}
        />
      </div>

      <p className={styles.sending}>
        <span className={styles.fieldLabel}>Images sent</span>
        {['Layout (image 1)', ...sending.map((l, i) => `${l} (image ${i + 2})`)].join(' · ')}
      </p>

      {brandConflicts.length > 0 && (
        <p className={styles.mismatch}>
          <TriangleAlert size={12} aria-hidden style={{ verticalAlign: '-2px' }} /> SKU uses your image, but{' '}
          {brandConflicts.join(', ')} still {brandConflicts.length > 1 ? 'name' : 'names'} Coca-Cola. The prompt tells the model to follow
          your image, but edit {brandConflicts.length > 1 ? 'those nodes' : 'that node'} for the most reliable swap.
        </p>
      )}

      {leftOut.length > 0 && (
        <p className={styles.mismatch}>
          <TriangleAlert size={12} aria-hidden style={{ verticalAlign: '-2px' }} /> {leftOut.join(', ')}{' '}
          {leftOut.length > 1 ? 'previews were' : 'preview was'} made from earlier text, so{' '}
          {leftOut.length > 1 ? 'they are' : 'it is'} left out and the scene follows the edited text. Preview again to use{' '}
          {leftOut.length > 1 ? 'them' : 'it'} as a reference.
        </p>
      )}

      <Button variant="primary" icon={<Wand2 size={16} aria-hidden />} loading={running} disabled={forbidden} onPress={onGenerate}>
        Generate scene ({ws.settings.numImages} image{ws.settings.numImages > 1 ? 's' : ''})
      </Button>

      {running && (
        <>
          {progress ? (
            <ProgressBar size="sm" label={`Generating ${ws.settings.numImages > 1 ? `${ws.settings.numImages} images` : 'the scene'} with Nano Banana Pro`} progress={progress} />
          ) : (
            <span className={styles.statusLine} role="status" aria-live="polite">
              {preparing ? 'Uploading the layout image…' : 'Starting…'}
            </span>
          )}
          <div className={styles.grid} data-single={ws.settings.numImages === 1 || undefined}>
            {Array.from({ length: ws.settings.numImages }, (_, i) => (
              <SkeletonBlock key={i} height={ws.settings.numImages === 1 ? 180 : 90} />
            ))}
          </div>
        </>
      )}

      {!running && prepareError && (
        <Alert tone="error" title="Couldn't upload the layout image">
          {prepareError}
        </Alert>
      )}
      {!running && live?.error && <TaskError error={live.error} cause={live.cause} onRetry={onGenerate} />}

      {!running && !prepareError && !live?.error && !latest && (
        <EmptyState title="No scene yet" hint="Adjust the nodes, then generate scene." />
      )}

      {!running && latest && (
        <>
          {feedbackFlash && (
            <Alert tone="success" title={feedbackFlash} className={styles.feedbackFlash}>
              <div className={styles.feedbackFlashActions}>
                <Button size="sm" icon={<ExternalLink size={14} aria-hidden />} onPress={onOpenLearning}>
                  Open Learning
                </Button>
                <Button size="sm" variant="ghost" icon={<X size={14} aria-hidden />} aria-label="Dismiss" onPress={onDismissFeedbackFlash} />
              </div>
            </Alert>
          )}
          <div className={styles.resultMeta}>
            <span className={styles.resultWhen}>Latest · {new Date(latest.createdAt).toLocaleTimeString()}</span>
            <CopyButton label="prompt used" text={latest.prompt} />
          </div>
          <span className={styles.resultWhen}>
            Sent with: {['Layout', ...latest.references].join(' · ')}
          </span>
          <div className={styles.grid} data-single={latest.urls.length === 1 || undefined}>
            {latest.urls.map((url, i) => (
              <ResultTile
                key={url + i}
                url={url}
                index={i}
                slug={slug}
                pass={latest.check?.images.find((c) => c.image === i + 1)?.pass}
                feedback={latest.feedback?.[i + 1]}
                onRate={() => onRate(i + 1)}
              />
            ))}
          </div>
          <ImageCheckPanel
            resultId={latest.id}
            check={latest.check}
            state={check}
            onCheck={() => onCheck(latest.id)}
            onApplyFixes={onApplyFixes}
            onSignedIn={() => onCheckSignedIn(latest.id)}
          />
        </>
      )}

      {older.length > 0 && (
        <>
          <span className={styles.historyLabel}>Earlier scenes</span>
          <div className={styles.history} onWheel={(e) => e.stopPropagation()}>
            {older.map((r) => (
              <button
                key={r.id}
                type="button"
                className={styles.historyItem}
                onClick={() => ctx.openLightbox(r.urls[0]!, `Scene from ${new Date(r.createdAt).toLocaleString()}`)}
                aria-label={`View the scene generated ${new Date(r.createdAt).toLocaleString()}`}
              >
                <img className={styles.historyImg} src={r.urls[0]} alt="" />
              </button>
            ))}
          </div>
        </>
      )}
    </NodeCard>
  );
}
