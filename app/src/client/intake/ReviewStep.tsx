// Sketch review: the picked layout seen through the photo's camera as a detailed
// black-and-white pencil sketch of the finished scene (Nano Banana 2, drawn
// automatically on arrival): the food, dishes and drinks where the photo will put
// them. The numbered markers, the click map and the Change highlight come from
// the 3D layout traced off-screen, so the art director marks each item Keep or
// Change (with placement reasons and a note) right on the drawing and adds
// scene-wide notes; all of it amends the story and image prompt before anything
// else is generated, and a redraw shows the changes. The traced line drawing is
// only shown while the detailed sketch can't be (failed, plan-gated or expired).

import { SignInPrompt, signInRequiredFrom } from '../lib/signIn.tsx';
import { ArrowRight, Check, CheckCheck, Download, Move, PencilLine, RotateCw, Sparkles } from 'lucide-react';
import { Dialog, Heading, Modal } from 'react-aria-components';
import { useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react';

import { PLACEMENT_REASONS, emptyReview, layoutKey, sketchKey, reviewAdjustments, reviewCounts, reviewDirections, type ItemReview, type LayoutReview } from '../../shared/review.ts';
import { MODEL_FRAMING_WIDEN } from '../../shared/rules.ts';
import { SKETCH_MODEL_LABEL, sketchChanges, sketchPrompt } from '../../shared/sketch.ts';
import type { LayoutOption } from '../../shared/solver.ts';
import type { Blueprint } from '../../shared/types.ts';
import { recordDuration, useProgress } from '../lib/progress.ts';
import { MODEL_PROXY_WIDTH, renderProxy, renderSketch, type Sketch } from '../lib/renderProxy.ts';
import { uploadImage } from '../lib/uploadImage.ts';
import { isForbidden } from '../lib/useTurnarounds.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { ProgressRing } from '../ui/ProgressRing.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { TextArea } from '../ui/TextArea.tsx';
import { TextInput } from '../ui/TextInput.tsx';
import { SketchEditor } from './SketchEditor.tsx';
import { StepActions } from './StepActions.tsx';
import type { ComposeResult } from './types.ts';
import type { Draft } from './useIntake.ts';
import styles from './ReviewStep.module.css';

type DetailSketch = NonNullable<Draft['sketch']>;

const POLL_MS = 3000;
const POLL_TIMEOUT_MS = 6 * 60_000;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * The detailed sketch being drawn, kept for the browser session so leaving the step (or
 * reloading) mid-draw picks the same task back up instead of paying for a second one.
 */
type Pending = { layout: string; prompt: string; taskId: string; startedAt: number; edits: Record<string, string> };
const PENDING_KEY = 'scene-composer:sketch-pending';

function readPending(layout: string): Pending | null {
  try {
    const p = JSON.parse(sessionStorage.getItem(PENDING_KEY) ?? 'null') as Pending | null;
    return p && p.layout === layout && Date.now() - p.startedAt < POLL_TIMEOUT_MS ? p : null;
  } catch {
    return null;
  }
}

function writePending(p: Pending | null) {
  try {
    if (p) sessionStorage.setItem(PENDING_KEY, JSON.stringify(p));
    else sessionStorage.removeItem(PENDING_KEY);
  } catch {
    // Session storage is unavailable (private mode): a revisit mid-draw simply draws again.
  }
}

/** An item's Change, in words: the placement reasons and the note. Empty when nothing is picked yet. */
function changeSummary(r: ItemReview): string {
  const reasons = r.reasons.map((id) => PLACEMENT_REASONS.find((x) => x.id === id)?.label).filter(Boolean);
  const note = r.note.trim();
  return [reasons.join(', '), note && `"${note}"`].filter(Boolean).join(' · ');
}

/** The review edits that change the sketch, by item id ('scene' for the scene notes). Keeps don't change it. */
function sketchEdits(review: LayoutReview, bp: Blueprint): Record<string, string> {
  const out: Record<string, string> = {};
  bp.primitives.forEach((p, i) => {
    const r = review.items[p.id];
    const summary = r?.verdict === 'change' ? changeSummary(r) : '';
    if (summary) out[p.id] = `${i + 1}. ${p.component_name}: ${summary}`;
  });
  const notes = review.notes.trim();
  if (notes) out['scene'] = `Whole scene: "${notes}"`;
  return out;
}

/** The detailed sketch as a PNG, forced to greyscale in case the model let any color through. */
async function greyscalePng(url: string): Promise<Blob> {
  const bitmap = await createImageBitmap(await (await fetch(url)).blob());
  const canvas = document.createElement('canvas');
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext('2d')!;
  ctx.filter = 'grayscale(1)';
  ctx.drawImage(bitmap, 0, 0);
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Could not encode the sketch'))), 'image/png'));
}

function errorText(err: unknown): string {
  const code = typeof err === 'object' && err && 'data' in err ? (err as { data?: { code?: string } }).data?.code : undefined;
  if (code === 'TOO_MANY_REQUESTS') return 'Gemini is busy right now. Wait a moment, then draw again.';
  return err instanceof Error ? err.message : String(err);
}

export function ReviewStep({
  compose,
  option,
  review: savedReview,
  onReview,
  hasStory,
  detail: savedDetail,
  onDetail,
  arrangement,
  sourceName,
  onEditLayout,
  onNext,
}: {
  compose: ComposeResult;
  option: LayoutOption;
  /** How this arrangement is named in an edit of it, e.g. "arrangement A". */
  sourceName: string;
  /** Saves an edit from the sketch editor as a new arrangement and switches to it. */
  onEditLayout: (edit: { blueprint: Blueprint; styleUrl: string | undefined; review: LayoutReview }) => void;
  /** Null when there is no review yet for this layout. */
  review: LayoutReview | null;
  onReview: (r: LayoutReview) => void;
  /** A story already exists for this layout: changing the review rewrites it. */
  hasStory: boolean;
  /** The detailed sketch, when one was drawn (for any layout; only this layout's is shown). */
  detail: DetailSketch | null;
  onDetail: (d: DetailSketch) => void;
  /** The side panel beside the sketch (layout guide, arrangements, accent), told whether a sketch is drawing (switching then would orphan that draw). */
  arrangement?: (drawing: boolean) => ReactNode;
  onNext: () => void;
}) {
  const bp = option.blueprint;
  const review = savedReview ?? emptyReview(bp);
  const [sketch, setSketch] = useState<Sketch | null>(null);
  const [sketchError, setSketchError] = useState<string | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  /** Items whose Change editor is open; a Change that's been confirmed with Done folds to one line. */
  const [editing, setEditing] = useState<ReadonlySet<string>>(() => new Set());
  const [confirmRedraw, setConfirmRedraw] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const rowRefs = useRef<Array<HTMLLIElement | null>>([]);

  // The detailed sketch: this layout's, if one was drawn, and whether the review has changed since.
  const signature = sketchKey(bp);
  const detail = savedDetail && savedDetail.layout === signature ? savedDetail : null;
  const [expired, setExpired] = useState(false);
  const [run, setRun] = useState<{ startedAt: number; reported: number | null; error: string | null; cause: unknown } | null>(null);
  const showDetail = !!detail && !expired;
  const drawing = !!run && !run.error;
  const progress = useProgress('review-sketch', drawing ? run.startedAt : null, run?.reported);
  const aliveRef = useRef(true);
  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
    };
  }, []);
  useEffect(() => setExpired(false), [detail?.url]);
  const start = trpc.sketchStart.useMutation();
  const poll = trpc.turnaroundPoll.useMutation();

  // Drawn after the first paint so the skeleton shows while the CPU traces the lines.
  useEffect(() => {
    setSketch(null);
    setSketchError(null);
    const frame = requestAnimationFrame(() => {
      try {
        setSketch(renderSketch(bp, compose.lighting, { width: 1280 }));
      } catch (err) {
        setSketchError(err instanceof Error ? err.message : String(err));
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [bp, compose.lighting]);

  // Highlights: Change = amber with black diagonal hatching; the selected non-change item in the selected red,
  // the hovered one in the hover grey.
  useEffect(() => {
    const canvas = overlayRef.current;
    if (!canvas || !sketch) return;
    const { width, height, hit } = sketch;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;
    const img = ctx.createImageData(width, height);
    const change = bp.primitives.map((p) => review.items[p.id]?.verdict === 'change');
    const picked = selected === null ? -1 : selected + 1;
    const hovered = hover === null ? -1 : hover + 1;
    for (let i = 0; i < hit.length; i++) {
      const item = hit[i]!;
      if (!item) continue;
      const o = i * 4;
      if (change[item - 1]) {
        const x = i % width;
        const y = (i / width) | 0;
        if ((x + y) % 8 < 2) {
          img.data[o + 3] = 120;
        } else {
          img.data[o] = 255;
          img.data[o + 1] = 204;
          img.data[o + 2] = 51;
          img.data[o + 3] = item === picked || item === hovered ? 150 : 110;
        }
      } else if (item === picked) {
        img.data[o] = 231;
        img.data[o + 1] = 34;
        img.data[o + 2] = 58;
        img.data[o + 3] = 80;
      } else if (item === hovered) {
        img.data[o] = 120;
        img.data[o + 1] = 120;
        img.data[o + 2] = 120;
        img.data[o + 3] = 60;
      }
    }
    ctx.putImageData(img, 0, 0);
  }, [sketch, review.items, selected, hover, bp]);

  const itemAt = (e: MouseEvent<HTMLElement>): number | null => {
    if (!sketch) return null;
    const r = e.currentTarget.getBoundingClientRect();
    const x = Math.floor(((e.clientX - r.left) / r.width) * sketch.width);
    const y = Math.floor(((e.clientY - r.top) / r.height) * sketch.height);
    const item = sketch.hit[y * sketch.width + x] ?? 0;
    return item ? item - 1 : null;
  };

  const select = (i: number | null) => {
    setSelected(i);
    if (i !== null) rowRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const setItem = (id: string, next: ItemReview | null) => {
    const items = { ...review.items };
    if (next) items[id] = next;
    else delete items[id];
    onReview({ ...review, items });
  };

  const setEditingItem = (id: string, on: boolean) =>
    setEditing((cur) => {
      const next = new Set(cur);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });

  const setVerdict = (id: string, verdict: ItemReview['verdict']) => {
    const cur = review.items[id];
    // Pressing the active verdict again clears it back to unmarked.
    if (cur?.verdict === verdict) setItem(id, null);
    else setItem(id, { verdict, reasons: cur?.reasons ?? [], note: cur?.note ?? '' });
    setEditingItem(id, verdict === 'change' && cur?.verdict !== 'change');
  };

  const markAllWorking = () => {
    const items: Record<string, ItemReview> = {};
    for (const p of bp.primitives) items[p.id] = review.items[p.id]?.verdict === 'change' ? review.items[p.id]! : { verdict: 'keep', reasons: [], note: '' };
    onReview({ ...review, items });
  };

  const adjustments = useMemo(() => reviewAdjustments(review, bp), [review, bp]);
  const directions = useMemo(() => reviewDirections(review, bp), [review, bp]);
  const counts = reviewCounts(review);
  const changes = useMemo(() => sketchChanges(adjustments, directions), [adjustments, directions]);
  // An edited arrangement is drawn in the style of the sketch it was edited on (image 2).
  const styleUrl = option.edit?.styleUrl;
  const detailPrompt = useMemo(() => sketchPrompt(compose.spec, bp, changes, { restyle: !!styleUrl }), [compose.spec, bp, changes, styleUrl]);
  const detailStale = !!detail && detail.prompt !== detailPrompt;

  // What the next redraw adds, one line per edit that differs from the sketch on screen.
  const edits = useMemo(() => sketchEdits(review, bp), [review, bp]);
  const drawnEdits = detail?.edits;
  const inSketch = (key: string) => !!drawnEdits && drawnEdits[key] === edits[key];
  const pending = useMemo(() => {
    if (!drawnEdits) return Object.values(edits);
    const keys = [...new Set([...Object.keys(edits), ...Object.keys(drawnEdits)])];
    return keys.filter((k) => edits[k] !== drawnEdits[k]).map((k) => edits[k] ?? `${drawnEdits[k]} (removed)`);
  }, [edits, drawnEdits]);
  const pendingText = pending.length === 1 ? '1 edit' : `${pending.length} edits`;
  // Items marked Change with nothing picked yet: they don't change anything until they're filled in.
  const unfinished = bp.primitives.filter((p) => review.items[p.id]?.verdict === 'change' && !edits[p.id]);

  /** Submits a new drawing, or picks up `resume` (a task already running for this layout), and polls it to the end. */
  const drawDetail = async (resume?: Pending) => {
    const startedAt = resume?.startedAt ?? Date.now();
    const prompt = resume?.prompt ?? detailPrompt;
    const drawn = resume?.edits ?? edits;
    setRun({ startedAt, reported: null, error: null, cause: null });
    try {
      let taskId = resume?.taskId;
      if (!taskId) {
        // Image 1 is the same labeled proxy, at the same framing, that the photograph is made from.
        const png = renderProxy(bp, compose.lighting, { width: MODEL_PROXY_WIDTH, widen: MODEL_FRAMING_WIDEN });
        const { url: proxyUrl } = await uploadImage(png);
        taskId = (await start.mutateAsync({ prompt, proxyUrl, ...(styleUrl ? { styleUrl } : {}) })).taskId;
        writePending({ layout: signature, prompt, taskId, startedAt, edits: drawn });
      }
      const deadline = startedAt + POLL_TIMEOUT_MS;
      for (;;) {
        await sleep(POLL_MS);
        // Leaving the step stops polling; the pending task is picked up on the way back.
        if (!aliveRef.current) return;
        const r = await poll.mutateAsync({ taskId });
        if (!r.done) {
          setRun((cur) => (cur && cur.startedAt === startedAt ? { ...cur, reported: r.progress } : cur));
          if (Date.now() > deadline) throw new Error(`${SKETCH_MODEL_LABEL} is taking much longer than usual. Draw again in a minute.`);
          continue;
        }
        writePending(null);
        if ('error' in r) throw new Error(r.error);
        recordDuration('review-sketch', startedAt);
        onDetail({ url: r.url, prompt, at: Date.now(), layout: signature, edits: drawn });
        if (aliveRef.current) setRun(null);
        return;
      }
    } catch (err) {
      writePending(null);
      if (aliveRef.current) setRun({ startedAt, reported: null, error: errorText(err), cause: err });
    }
  };

  // The detailed sketch is the default view: draw it on arrival when this layout has none yet,
  // or pick up one still drawing from an earlier visit. Review changes never redraw on their own.
  const autoRef = useRef<string | null>(null);
  useEffect(() => {
    if (autoRef.current === signature) return;
    autoRef.current = signature;
    const pending = readPending(signature);
    if (pending) void drawDetail(pending);
    else if (!detail) void drawDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- once per layout
  }, [signature]);

  const unmarked = bp.primitives.length - counts.keep - counts.change;

  const download = async () => {
    const save = (href: string, name: string) => {
      const a = document.createElement('a');
      a.href = href;
      a.download = name;
      a.click();
    };
    if (showDetail) {
      try {
        const blob = await greyscalePng(detail.url);
        const href = URL.createObjectURL(blob);
        save(href, 'detailed-sketch.png');
        setTimeout(() => URL.revokeObjectURL(href), 10_000);
      } catch {
        // The image host doesn't allow a direct download: open it so it can be saved from the tab.
        window.open(detail.url, '_blank', 'noopener');
      }
      return;
    }
    if (sketch) save(sketch.url, 'layout-sketch.png');
  };

  const redraw = () => {
    setConfirmRedraw(false);
    setEditing(new Set());
    void drawDetail();
  };

  // The long explanation sits behind a link so the sketch lands in the first screen.
  const [howOpen, setHowOpen] = useState(false);

  /** The edited layout becomes a new arrangement; marks on items that stayed put carry over, and so do the scene notes. */
  const saveEdit = (edited: Blueprint) => {
    setEditOpen(false);
    const items: Record<string, ItemReview> = {};
    for (const p of edited.primitives) {
      const r = review.items[p.id];
      const was = bp.primitives.find((q) => q.id === p.id);
      if (!r || !was) continue;
      const moved = was.world.x !== p.world.x || was.world.d !== p.world.d;
      if (!moved) items[p.id] = r;
      // A moved item keeps its note about the dish, not its placement reasons.
      else if (r.note.trim()) items[p.id] = { ...r, reasons: [] };
    }
    onEditLayout({
      blueprint: edited,
      styleUrl: showDetail ? detail.url : styleUrl,
      review: { key: layoutKey(edited), items, notes: review.notes },
    });
  };

  const signIn = run?.error ? signInRequiredFrom(run.cause) : null;
  const forbidden = run?.error ? isForbidden(run.cause) : false;

  return (
    <section>
      <h1>Review the Sketch</h1>
      <p className={styles.lede}>
        The photo is made from this sketch. Mark each item Working or Change, then continue.{' '}
        <button type="button" className={styles.howLink} aria-expanded={howOpen} onClick={() => setHowOpen((v) => !v)}>
          {howOpen ? 'Hide how this works' : 'How this works'}
        </button>
      </p>
      {howOpen && (
        <p className={styles.how}>
          This is the scene sketched in pencil through the camera you picked: the food, dishes and drinks where they will land in the photo. Click an item
          or its number to mark what is working and what isn't, and add anything else the scene needs. Your notes go into the scene description and the image prompt
          before the photograph is made.
        </p>
      )}

      <div className={styles.compare}>
        <div className={styles.frameCol}>
        <div className={styles.frame}>
          {showDetail ? (
            <img
              className={`${styles.sketch} ${styles.mono}`}
              src={detail.url}
              alt="Detailed black-and-white pencil sketch of the finished scene, 16:9, through the photo's camera"
              onError={() => setExpired(true)}
            />
          ) : drawing ? (
            <SkeletonBlock height="100%" />
          ) : sketchError ? (
            <div className={styles.frameMessage} role="alert">
              Couldn't draw the sketch: {sketchError}
            </div>
          ) : sketch ? (
            <img className={styles.sketch} src={sketch.url} alt="Black-and-white outline drawing of the picked layout, 16:9" />
          ) : (
            <SkeletonBlock height="100%" />
          )}
          {sketch && <canvas className={styles.overlay} ref={overlayRef} aria-hidden />}
          {(sketch || showDetail) && !drawing && (
            <button type="button" className={styles.frameDownload} onClick={() => void download()} aria-label={showDetail ? 'Download the sketch' : 'Download the outline'}>
              <Download size={16} aria-hidden />
            </button>
          )}
          {drawing && <ProgressRing label={showDetail ? 'Redrawing the sketch' : 'Drawing the sketch'} progress={progress ?? null} />}
          {sketch && (
            <div
              className={styles.hitArea}
              data-pointer={hover !== null || undefined}
              aria-hidden
              onMouseMove={(e) => setHover(itemAt(e))}
              onMouseLeave={() => setHover(null)}
              onClick={(e) => select(itemAt(e))}
            />
          )}
          {sketch?.anchors.map((a, i) => {
            const p = bp.primitives[i]!;
            if (!a) return null;
            const verdict = review.items[p.id]?.verdict;
            return (
              <button
                key={p.id}
                type="button"
                className={styles.marker}
                style={{ left: `${a.x * 100}%`, top: `${a.y * 100}%` }}
                data-verdict={verdict}
                data-selected={selected === i || undefined}
                aria-label={`${i + 1}. ${p.component_name} (${p.id})${verdict ? `, marked ${verdict}` : ''}`}
                onClick={() => select(i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                {verdict === 'keep' ? <Check size={12} strokeWidth={3} aria-hidden /> : i + 1}
              </button>
            );
          })}
        </div>

        {/* Under the sketch: change it by hand on the left, draw it again on the right; its status line and any note below. */}
        <div className={styles.toolbar}>
          <Button size="sm" icon={<Move size={14} aria-hidden />} onPress={() => setEditOpen(true)} disabled={!sketch || drawing}>
            Edit sketch
          </Button>
          <Button
            size="sm"
            variant={!detail || expired ? 'primary' : 'default'}
            icon={detail ? <RotateCw size={14} aria-hidden /> : <Sparkles size={14} aria-hidden />}
            onPress={() => (detail && !expired ? setConfirmRedraw(true) : void drawDetail())}
            disabled={drawing}
          >
            {!detail || expired ? 'Draw the sketch' : detailStale && pending.length ? `Redraw with ${pendingText}` : 'Redraw'}
          </Button>
        </div>
          <div className={styles.detailBar} aria-live="polite">
            {drawing ? null : run?.error ? (
              signIn ? (
                <SignInPrompt
                  onSignedIn={() => void drawDetail()}
                />
              ) : (
                <Alert tone="error" title={forbidden ? 'Monthly limit reached' : "Couldn't draw the sketch"}>
                  {forbidden ? (
                    `${run.error} The outline drawing below still shows where each item sits.`
                  ) : (
                    <span className={styles.errorBody}>
                      {run.error} The outline drawing below shows where each item sits until it can be drawn.
                      <Button size="sm" icon={<RotateCw size={14} aria-hidden />} onPress={() => void drawDetail()}>
                        Try again
                      </Button>
                    </span>
                  )}
                </Alert>
              )
            ) : (
              <div className={styles.detailRow}>
                <p className={styles.detailText}>
                  {!detail
                    ? `The sketch draws the food, the dishes and the drinks in pencil, as they will land in the photo (${SKETCH_MODEL_LABEL}, counted toward your monthly limit).`
                    : expired
                      ? 'The sketch has expired. Draw it again to see it; the outline drawing shows where each item sits meanwhile.'
                      : detailStale
                        ? pending.length
                          ? `${pendingText} since this sketch was drawn. Make all your edits first, then redraw once: each redraw counts toward your monthly limit.`
                          : 'The sketch was drawn from an earlier version of the prompt. Redraw it to bring it up to date.'
                        : changes.length
                          ? 'The sketch includes your changes.'
                          : 'The sketch is up to date with this layout.'}
                </p>
              </div>
            )}
          </div>
          {hasStory && (
            <Alert tone="info" title="This layout already has a scene">
              Changing anything here rewrites the scene when you continue.
            </Alert>
          )}
        </div>

        {arrangement?.(drawing)}
      </div>

      <div className={styles.layoutGrid}>
        <div className={styles.itemsCol}>
        <div className={styles.itemsHead}>
          <h2 className={styles.sectionTitle}>Items</h2>
          <span className={styles.tally}>
            {counts.keep} working · {counts.change} to change{unmarked ? ` · ${unmarked} unmarked` : ''}
          </span>
          <Button size="sm" variant="ghost" icon={<CheckCheck size={14} aria-hidden />} onPress={markAllWorking} disabled={unmarked === 0}>
            Mark the rest working
          </Button>
        </div>
        <ol className={styles.items}>
          {bp.primitives.map((p, i) => {
            const r = review.items[p.id];
            const hidden = sketch && !sketch.anchors[i];
            return (
              <li
                key={p.id}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className={styles.item}
                data-selected={selected === i || undefined}
                data-verdict={r?.verdict}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                <div className={styles.itemHead}>
                  <button type="button" className={styles.itemName} onClick={() => select(selected === i ? null : i)} aria-label={`Show ${p.component_name} on the sketch`}>
                    <span className={styles.itemNumber} data-verdict={r?.verdict} aria-hidden>
                      {i + 1}
                    </span>
                    <span className={styles.itemText}>
                      <span className={styles.itemTitle}>{p.component_name}</span>
                      <span className={styles.itemMeta}>
                        {p.id}
                        {hidden ? ' · not visible from this camera' : ''}
                      </span>
                    </span>
                  </button>
                  <div className={styles.verdicts} role="group" aria-label={`${p.component_name}: is it working?`}>
                    <button type="button" className={styles.verdict} data-kind="keep" aria-pressed={r?.verdict === 'keep'} onClick={() => setVerdict(p.id, 'keep')}>
                      <Check size={14} aria-hidden /> Working
                    </button>
                    <button
                      type="button"
                      className={styles.verdict}
                      data-kind="change"
                      aria-pressed={r?.verdict === 'change'}
                      onClick={() => {
                        setVerdict(p.id, 'change');
                        setSelected(i);
                      }}
                    >
                      <PencilLine size={14} aria-hidden /> Change
                    </button>
                  </div>
                </div>

                {r?.verdict === 'change' && !editing.has(p.id) && (
                  <div className={styles.changeDone}>
                    <Check size={14} className={styles.changeDoneIcon} aria-hidden />
                    <span className={styles.changeDoneText}>
                      {edits[p.id] ? changeSummary(r) : <span className={styles.muted}>Marked to change, nothing picked yet</span>}
                    </span>
                    {edits[p.id] && detail && (
                      <span className={styles.sketchTag} data-in={inSketch(p.id) || undefined}>
                        {inSketch(p.id) ? 'In the sketch' : 'Next redraw'}
                      </span>
                    )}
                    <Button size="sm" variant="ghost" icon={<PencilLine size={14} aria-hidden />} onPress={() => setEditingItem(p.id, true)}>
                      Edit
                    </Button>
                  </div>
                )}

                {r?.verdict === 'change' && editing.has(p.id) && (
                  <div className={styles.change}>
                    <div className={styles.reasons} role="group" aria-label="What's off about its placement">
                      {PLACEMENT_REASONS.map((reason) => {
                        const on = r.reasons.includes(reason.id);
                        return (
                          <button
                            key={reason.id}
                            type="button"
                            className={styles.reason}
                            data-active={on || undefined}
                            aria-pressed={on}
                            onClick={() =>
                              setItem(p.id, { ...r, reasons: on ? r.reasons.filter((x) => x !== reason.id) : [...r.reasons, reason.id] })
                            }
                          >
                            {reason.label}
                          </button>
                        );
                      })}
                    </div>
                    <TextInput
                      label="Anything else about this item"
                      placeholder="A different dish, vessel or garnish, e.g. grilled not fried, a clay bowl"
                      value={r.note}
                      maxLength={400}
                      onChange={(note) => setItem(p.id, { ...r, note })}
                      onPressEnter={edits[p.id] ? () => setEditingItem(p.id, false) : undefined}
                    />
                    <div className={styles.changeFoot}>
                      <span className={styles.changeHint}>
                        {edits[p.id] ? 'Saved. Add your other edits too, then redraw once.' : "Pick what's off, or describe the change."}
                      </span>
                      <Button size="sm" variant="primary" icon={<Check size={14} aria-hidden />} onPress={() => setEditingItem(p.id, false)} disabled={!edits[p.id]}>
                        Done
                      </Button>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <div className={styles.notesCol}>
      <h2 className={styles.sectionTitle}>Notes for the Whole Scene</h2>
      <TextArea
        aria-label="Notes for the whole scene"
        placeholder="Anything that isn't one item's placement: the environment, the mood, the light, a dish swap. E.g. make it feel like a busy Saturday market stall."
        rows={3}
        value={review.notes}
        onChange={(notes) => onReview({ ...review, notes })}
      />
      {edits['scene'] && (
        <p className={styles.notesSaved} role="status">
          <Check size={12} aria-hidden /> Saved
          {detail && <span className={styles.sketchTag} data-in={inSketch('scene') || undefined}>{inSketch('scene') ? 'In the sketch' : 'Next redraw'}</span>}
        </p>
      )}

      <div className={styles.preview} aria-live="polite">
        <h3 className={styles.previewTitle}>What Changes in the Prompt</h3>
        {adjustments.length === 0 && directions.length === 0 ? (
          <p className={styles.previewEmpty}>Nothing yet. Unmarked items are described just as the sketch shows them.</p>
        ) : (
          <>
            {adjustments.length > 0 && (
              <div className={styles.previewBlock}>
                <span className={styles.previewLabel}>Layout guide, in the image prompt</span>
                <ul>
                  {adjustments.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            )}
            {directions.length > 0 && (
              <div className={styles.previewBlock}>
                <span className={styles.previewLabel}>Directions for the scene description</span>
                <ul>
                  {directions.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
      </div>
      </div>

      <StepActions pinned={false}>
        {detail && !expired && detailStale && !drawing && pending.length > 0 && (
          <Button icon={<RotateCw size={16} aria-hidden />} onPress={() => setConfirmRedraw(true)}>
            Redraw with {pendingText}
          </Button>
        )}
        <Button variant="primary" iconEnd={<ArrowRight size={16} aria-hidden />} onPress={onNext}>
          {hasStory ? 'Continue to the scene' : 'Create the scene'}
        </Button>
      </StepActions>

      <SketchEditor
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        blueprint={bp}
        spec={compose.spec}
        lighting={compose.lighting}
        sourceName={sourceName}
        onSave={saveEdit}
      />

      <Modal isOpen={confirmRedraw} onOpenChange={setConfirmRedraw} isDismissable className={styles.modalOverlay}>
        <Dialog className={styles.dialog}>
          <Heading slot="title" className={styles.dialogTitle}>
            {pending.length ? `Redraw with ${pending.length === 1 ? "1 Edit" : `${pending.length} Edits`}?` : 'Draw the Same Sketch Again?'}
          </Heading>
          <p className={styles.dialogText}>
            Each redraw counts toward your monthly limit ({SKETCH_MODEL_LABEL}), so make all your edits first and redraw once.
          </p>
          {pending.length > 0 ? (
            <>
              <span className={styles.previewLabel}>This redraw includes</span>
              <ul className={styles.dialogList}>
                {pending.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className={styles.dialogText}>Nothing has changed since this sketch, so this gives a new take on the same scene.</p>
          )}
          {unfinished.length > 0 && (
            <Alert tone="info" title={unfinished.length === 1 ? '1 item has no change picked' : `${unfinished.length} items have no change picked`}>
              {unfinished.map((p) => p.component_name).join(', ')} {unfinished.length === 1 ? 'is' : 'are'} marked to change with nothing
              picked yet, so the sketch won't change {unfinished.length === 1 ? 'it' : 'them'}.
            </Alert>
          )}
          <div className={styles.dialogActions}>
            <Button onPress={() => setConfirmRedraw(false)}>Keep editing</Button>
            <Button variant="primary" icon={<RotateCw size={16} aria-hidden />} onPress={redraw}>
              Redraw
            </Button>
          </div>
        </Dialog>
      </Modal>
    </section>
  );
}
