// One prompt segment as a node: its editable text, whether it's bypassed,
// and — for objects and the environment — a Nano Banana Pro preview that
// can feed back into the scene as a reference image.

import { ImageOff, ImageUp, RotateCcw, Sparkles, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';

import {
  isActive,
  isEdited,
  nodeImage,
  referenceUpload,
  replacementUpload,
  previewAspectRatio,
  previewStale,
  sceneReferences,
  segmentText,
  type WorkspaceState,
  type WsSegment,
} from '../../shared/workspace.ts';
import { prepareImage } from '../lib/prepareImage.ts';
import { uploadImage } from '../lib/uploadImage.ts';
import { isForbidden, type LiveTask } from '../lib/useWorkspaceTasks.ts';
import { SegmentedControl } from '../ui/SegmentedControl.tsx';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { Switch } from '../ui/Switch.tsx';
import { TextArea } from '../ui/TextArea.tsx';
import { Badge } from './Badge.tsx';
import { useCanvasContext } from './context.ts';
import { NodeCard } from './NodeCard.tsx';
import { TaskError } from './TaskError.tsx';
import type { CanvasHistory } from './useCanvasHistory.ts';
import { recordDuration, useProgress } from '../lib/progress.ts';
import { ProgressBar } from '../ui/ProgressBar.tsx';
import styles from './SegmentNode.module.css';

const UPLOAD_TIMEOUT_MS = 90_000;

export function SegmentNode({
  seg,
  allSegments,
  ws,
  x,
  y,
  history,
  updateWorkspace,
  live,
  onPreview,
  onFlash,
}: {
  seg: WsSegment;
  allSegments: WsSegment[];
  ws: WorkspaceState;
  x: number;
  y: number;
  history: CanvasHistory;
  updateWorkspace: (fn: (ws: WorkspaceState) => WorkspaceState) => void;
  live: LiveTask | undefined;
  onPreview: () => void;
  onFlash: (message: string) => void;
}) {
  const ctx = useCanvasContext();
  const baselineRef = useRef<string | null>(null);
  const [broken, setBroken] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadStarted, setUploadStarted] = useState<number | null>(null);
  const uploadBusy = uploadStarted !== null;
  const uploadProgress = useProgress('image-upload', uploadStarted);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const text = segmentText(seg, ws);
  const edited = isEdited(seg, ws);
  const active = isActive(seg, ws);
  const preview = ws.previews[seg.key];
  const upload = ws.uploads?.[seg.key];
  const replacement = replacementUpload(seg, ws);
  const guide = referenceUpload(seg, ws);
  /** What the frame shows: the operator's stand-in image, else the generated preview. */
  const shown = nodeImage(seg, ws);
  const stale = preview && !replacement ? previewStale(seg, ws, allSegments) : false;
  const busy = live?.status === 'running' || live?.status === 'queued';
  const forbidden = live?.error ? isForbidden(live.cause) : false;
  const progress = useProgress(live?.timingKey ?? '', live?.status === 'running' ? live.startedAt : null, live?.progress);
  const refs = seg.previewable ? sceneReferences(allSegments, ws) : [];
  const refIndex = refs.findIndex((r) => r.seg.key === seg.key);
  const sentAs = refIndex >= 0 ? { n: refIndex + 2, source: refs[refIndex]!.source } : null;
  const aspect = seg.previewable ? previewAspectRatio(seg, ws).replace(':', ' / ') : '4 / 3';

  const onFocusChange = (isFocused: boolean) => {
    if (isFocused) {
      baselineRef.current = text;
      return;
    }
    const before = baselineRef.current;
    baselineRef.current = null;
    if (before === null || before === text) return;
    history.pushBefore({ edits: { ...ws.edits, [seg.key]: before } });
  };
  const onChange = (value: string) => {
    updateWorkspace((w) => ({ ...w, edits: { ...w.edits, [seg.key]: value } }));
  };
  const onReset = () => {
    history.record((w) => {
      const edits = { ...w.edits };
      delete edits[seg.key];
      return { ...w, edits };
    });
    onFlash(`Reset ${seg.chip} to the story text.`);
  };
  const onBypassChange = (value: boolean) => {
    history.record((w) => ({ ...w, bypassed: { ...w.bypassed, [seg.key]: value } }));
  };
  const onPickFile = async (file: File | undefined) => {
    if (!file) return;
    setUploadError(null);
    const begun = Date.now();
    setUploadStarted(begun);
    // An upload cut off midway (a dropped connection, a server restart) must fail visibly, not hang.
    const abort = new AbortController();
    const timer = setTimeout(() => abort.abort(), UPLOAD_TIMEOUT_MS);
    try {
      const dataUrl = await prepareImage(file);
      const { url } = await uploadImage(dataUrl, abort.signal).catch((err: unknown) => {
        if (abort.signal.aborted) throw new Error(`The upload didn't finish within ${UPLOAD_TIMEOUT_MS / 1000} seconds. Add the image again.`);
        throw err;
      });
      recordDuration('image-upload', begun);
      history.record((w) => ({
        ...w,
        uploads: { ...w.uploads, [seg.key]: { url, name: file.name, at: Date.now(), mode: w.uploads?.[seg.key]?.mode ?? 'reference' } },
        useAsRef: w.useAsRef[seg.key] === undefined ? { ...w.useAsRef, [seg.key]: true } : w.useAsRef,
      }));
      onFlash(`Added ${file.name} to ${seg.chip}.`);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : String(err));
    } finally {
      clearTimeout(timer);
      setUploadStarted(null);
      if (fileRef.current) fileRef.current.value = '';
    }
  };
  const onModeChange = (mode: string) => {
    history.record((w) => {
      const u = w.uploads?.[seg.key];
      return u ? { ...w, uploads: { ...w.uploads, [seg.key]: { ...u, mode: mode as 'reference' | 'replace' } } } : w;
    });
  };
  const onRemoveUpload = () => {
    history.record((w) => {
      const uploads = { ...w.uploads };
      delete uploads[seg.key];
      return { ...w, uploads };
    });
    onFlash(`Removed your image from ${seg.chip}. Undo brings it back.`);
  };
  const onUseAsRefChange = (value: boolean) => {
    history.record((w) => ({ ...w, useAsRef: { ...w.useAsRef, [seg.key]: value } }));
  };

  return (
    <NodeCard
      id={seg.key}
      x={x}
      y={y}
      chip={seg.chip}
      title={seg.title}
      note={seg.note}
      dimmed={!active}
      ariaLabel={`${seg.chip}, ${seg.title} node`}
      copyText={text}
      badges={
        <>
          {edited && <Badge>Edited</Badge>}
          {seg.fixed && <Badge>From rules</Badge>}
        </>
      }
    >
      <TextArea
        aria-label={`${seg.chip} text`}
        value={text}
        onChange={onChange}
        onFocusChange={onFocusChange}
        rows={4}
        onWheel={(e) => e.stopPropagation()}
      />

      <div className={styles.footer}>
        <Button size="sm" variant="ghost" icon={<RotateCcw size={14} aria-hidden />} disabled={!edited} onPress={onReset}>
          Reset to story text
        </Button>
        {seg.bypassable && (
          <Switch isSelected={!!ws.bypassed[seg.key]} onChange={onBypassChange}>
            Bypass
          </Switch>
        )}
      </div>

      {seg.previewable && (
        <div className={styles.previewBlock}>
          <div className={styles.previewFrame} style={{ aspectRatio: aspect }}>
            {busy && !replacement ? (
              <SkeletonBlock height="100%" />
            ) : shown ? (
              <button
                type="button"
                className={styles.previewButtonFrame}
                onClick={() => ctx.openLightbox(shown.url, `${seg.chip} ${shown.source === 'upload' ? 'image' : 'preview'}`)}
                aria-label={`View the ${seg.chip} ${shown.source === 'upload' ? 'image' : 'preview'} full size`}
              >
                {broken === shown.url ? (
                  <span className={styles.broken}>
                    <ImageOff size={16} aria-hidden />
                    Link expired
                  </span>
                ) : (
                  <img
                    className={shown.source === 'upload' ? styles.previewImgContain : styles.previewImg}
                    src={shown.url}
                    alt={`${seg.chip} ${shown.source === 'upload' ? 'image' : 'preview'}`}
                    onError={() => setBroken(shown.url)}
                  />
                )}
              </button>
            ) : (
              <span className={styles.emptyPreview}>Not previewed yet</span>
            )}
          </div>

          {replacement ? (
            <span className={styles.statusLine}>Your image goes to the scene as-is.</span>
          ) : busy ? (
            progress ? (
              <ProgressBar size="sm" label="Generating with Nano Banana Pro" progress={progress} />
            ) : (
              <span className={styles.statusLine} role="status" aria-live="polite">
                Waiting to start
              </span>
            )
          ) : (
            <Button size="sm" variant={preview ? 'default' : 'primary'} icon={<Sparkles size={14} aria-hidden />} disabled={forbidden} onPress={onPreview}>
              {preview ? 'Preview again' : guide ? 'Generate from your image' : 'Preview with Nano Banana Pro'}
            </Button>
          )}

          {!busy && preview && stale && !replacement && (
            <Alert tone="warning" title="Made from earlier text">
              {ws.useAsRef[seg.key] !== false && active
                ? 'Left out of the scene until you preview again, so your edited text is what the scene follows.'
                : 'Preview again to match the current text.'}
            </Alert>
          )}

          {!busy && live?.error && <TaskError error={live.error} cause={live.cause} onRetry={onPreview} />}

          <div className={styles.uploadBlock}>
            <input
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className={styles.fileInput}
              tabIndex={-1}
              aria-hidden
              onChange={(e) => void onPickFile(e.target.files?.[0])}
            />
            {upload ? (
              <>
                <div className={styles.uploadRow}>
                  <button
                    type="button"
                    className={styles.uploadThumbButton}
                    onClick={() => ctx.openLightbox(upload.url, `${seg.chip}: your image`)}
                    aria-label={`View your ${seg.chip} image as uploaded`}
                  >
                    <img className={styles.uploadThumb} src={upload.url} alt="" onError={() => setBroken(upload.url)} />
                  </button>
                  <span className={styles.uploadName} title={upload.name}>
                    {broken === upload.url ? 'Link expired — upload it again' : upload.name}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    icon={<ImageUp size={14} aria-hidden />}
                    aria-label={`Replace your image for ${seg.chip}`}
                    disabled={uploadBusy}
                    onPress={() => fileRef.current?.click()}
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    icon={<Trash2 size={14} aria-hidden />}
                    aria-label={`Remove your image from ${seg.chip}`}
                    onPress={onRemoveUpload}
                  />
                </div>
                <SegmentedControl
                  aria-label={`How ${seg.chip} uses your image`}
                  value={upload.mode}
                  onChange={onModeChange}
                  options={[
                    { value: 'reference', label: 'Generate from it' },
                    { value: 'replace', label: 'Use as-is' },
                  ]}
                />
                <span className={styles.uploadHint}>
                  {upload.mode === 'reference'
                    ? 'The preview keeps your image’s design and applies this node’s text.'
                    : 'Your image stands in for the preview and goes straight to the scene.'}
                </span>
              </>
            ) : (
              <Button
                size="sm"
                variant="default"
                icon={<ImageUp size={14} aria-hidden />}
                disabled={uploadBusy}
                onPress={() => fileRef.current?.click()}
              >
                {uploadBusy ? 'Uploading…' : 'Add your own image'}
              </Button>
            )}
            {uploadBusy && uploadProgress && <ProgressBar size="sm" label="Uploading your image" progress={uploadProgress} />}
            {!uploadBusy && upload && (
              <span className={styles.statusLine} role="status">
                {broken === upload.url
                  ? 'This upload has expired. Add the image again.'
                  : !active
                    ? 'Uploaded. Not sent to the scene while this node is bypassed.'
                    : ws.useAsRef[seg.key] === false
                      ? 'Uploaded. Not sent to the scene: "Use as reference" is off.'
                      : sentAs?.source === 'upload'
                        ? `Uploaded. Your image goes to the scene as image ${sentAs.n}.`
                        : sentAs
                          ? `Uploaded. The preview made from it goes to the scene as image ${sentAs.n}.`
                          : 'Uploaded.'}
              </span>
            )}
            {uploadError && (
              <Alert tone="error" title="Couldn't add that image">
                {uploadError}
              </Alert>
            )}
          </div>

          {(shown || upload) && (
            <Switch isSelected={ws.useAsRef[seg.key] !== false} onChange={onUseAsRefChange}>
              Use as reference in the scene
            </Switch>
          )}
        </div>
      )}
    </NodeCard>
  );
}
