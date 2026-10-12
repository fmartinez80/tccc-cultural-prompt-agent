// Step 10: the node workspace. Imports the layout proxy and the story's
// prompt segments as an editable node canvas, lets the operator preview
// individual elements and the environment with Nano Banana Pro, and
// generates the final scene from the assembled prompt.

import { LayoutGrid, Maximize, Redo2, Sparkles, Undo2, ZoomIn, ZoomOut } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { MODEL_FRAMING_WIDEN } from '../../shared/rules.ts';
import type { LayoutOption } from '../../shared/solver.ts';
import {
  assembleWorkspacePrompt,
  isActive,
  PROXY_URL_MAX_AGE_MS,
  previewAspectRatio,
  previewKeyText,
  previewPrompt,
  previewReferences,
  replacementUpload,
  previewStale,
  brandConflicts,
  checkElements, ratedElements,
  checkFixEdits,
  referenceLabel,
  sceneReferences,
  staleReference,
  workspaceSegments,
  WORKSPACE_MODEL_LABEL,
  productRefLabels,
  productRefs,
  type WorkspaceState,
  type WsResult,
  type WsSegment,
} from '../../shared/workspace.ts';
import { MODEL_PROXY_WIDTH, renderProxy } from '../lib/renderProxy.ts';
import { useAgentTask } from '../lib/useAgentTask.ts';
import { uploadImage } from '../lib/uploadImage.ts';
import { useOnSignedIn } from '../lib/useOnSignedIn.ts';
import { type WorkspaceTaskInput, useWorkspaceTasks } from '../lib/useWorkspaceTasks.ts';
import { trpc } from '../trpc.ts';
import { Button } from '../ui/Button.tsx';
import { Canvas, INITIAL_VIEW, type CanvasHandle, type ViewState } from '../workspace/Canvas.tsx';
import type { LightboxState } from '../workspace/Lightbox.tsx';
import { FeedbackDialog } from '../workspace/FeedbackDialog.tsx';
import { GenerateNode } from '../workspace/GenerateNode.tsx';
import type { CheckIssue } from '../workspace/ImageCheckPanel.tsx';
import {
  buildEdges,
  buildNodeList,
  computeDefaultLayout,
  defaultCollapsed,
  GENERATE_NODE_ID,
  GRID_SNAP,
  NODE_WIDTH,
  PROMPT_NODE_ID,
  PROXY_NODE_ID,
  type NodeGeometry,
} from '../workspace/layout.ts';
import { ProxyNode, type ProxyUploadStatus } from '../workspace/ProxyNode.tsx';
import { PromptNode } from '../workspace/PromptNode.tsx';
import { SegmentNode } from '../workspace/SegmentNode.tsx';
import { ShortcutsHint } from '../workspace/ShortcutsHint.tsx';
import { useCanvasHistory } from '../workspace/useCanvasHistory.ts';
import type { Brief, ComposeResult, StoryState } from './types.ts';
import styles from './WorkspaceStep.module.css';

const FLASH_MS = 4000;

function isTextInput(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.tagName === 'TEXTAREA' || target.tagName === 'INPUT' || target.isContentEditable;
}

export function WorkspaceStep({
  brief,
  compose,
  option,
  story,
  ws,
  updateWorkspace,
  saved,
}: {
  brief: Brief;
  compose: ComposeResult;
  option: LayoutOption;
  story: StoryState;
  ws: WorkspaceState;
  updateWorkspace: (fn: (ws: WorkspaceState) => WorkspaceState) => void;
  saved: boolean;
}) {
  const utils = trpc.useUtils();
  const workspaceOptionsQuery = trpc.workspaceOptions.useQuery();
  const tasks = useWorkspaceTasks();
  const history = useCanvasHistory(ws, updateWorkspace);
  const canvasRef = useRef<CanvasHandle>(null);

  const wsRef = useRef(ws);
  wsRef.current = ws;

  const [view, setView] = useState<ViewState>(INITIAL_VIEW);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [heights, setHeights] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [proxyStatus, setProxyStatus] = useState<'idle' | 'uploading' | 'error'>('idle');
  const [proxyError, setProxyError] = useState<string | null>(null);
  const [feedbackTarget, setFeedbackTarget] = useState<{ resultId: string; imageIndex: number } | null>(null);
  const [feedbackFlash, setFeedbackFlash] = useState<string | null>(null);

  useEffect(
    () => () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    },
    [],
  );

  const showFlash = useCallback((message: string) => {
    setFlash(message);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), FLASH_MS);
  }, []);

  const allSegments = useMemo(() => workspaceSegments(story.story, story.facts), [story]);
  const nodeIds = useMemo(() => buildNodeList(allSegments), [allSegments]);
  const collapsedMap = ws.collapsed;
  const isCollapsed = useCallback((id: string) => collapsedMap?.[id] ?? defaultCollapsed(id), [collapsedMap]);
  // Not an undoable edit: Undo stays for moves and text, not for opening and closing nodes.
  const toggleCollapsed = useCallback(
    (id: string) =>
      updateWorkspace((w) => ({ ...w, collapsed: { ...w.collapsed, [id]: !(w.collapsed?.[id] ?? defaultCollapsed(id)) } })),
    [updateWorkspace],
  );
  const defaultLayout = useMemo(
    () => computeDefaultLayout(nodeIds, heights, allSegments, isCollapsed),
    [nodeIds, heights, allSegments, isCollapsed],
  );

  const registerHeight = useCallback((id: string, height: number) => {
    setHeights((prev) => (prev[id] === height ? prev : { ...prev, [id]: height }));
  }, []);

  const geometry = useMemo(() => {
    const out: Record<string, NodeGeometry> = {};
    for (const n of nodeIds) {
      const pos = ws.positions[n.id] ?? defaultLayout[n.id] ?? { x: 24, y: 24 };
      out[n.id] = {
        x: pos.x,
        y: pos.y,
        width: NODE_WIDTH,
        height: heights[n.id] ?? 260,
      };
    }
    return out;
  }, [nodeIds, ws.positions, defaultLayout, heights]);

  const edges = useMemo(() => buildEdges(allSegments, ws), [allSegments, ws]);

  const { worldWidth, worldHeight } = useMemo(() => {
    let maxX = 800;
    let maxY = 600;
    for (const g of Object.values(geometry)) {
      maxX = Math.max(maxX, g.x + g.width);
      maxY = Math.max(maxY, g.y + g.height);
    }
    return { worldWidth: maxX + 200, worldHeight: maxY + 200 };
  }, [geometry]);

  // The image model's field of view (rules/camera-options.json) is widened for the proxy it's given.
  const proxyDataUrl = useMemo(
    () =>
      renderProxy(option.blueprint, compose.lighting, {
        width: MODEL_PROXY_WIDTH,
        widen: MODEL_FRAMING_WIDEN,
      }),
    [option, compose.lighting],
  );
  const proxyKey = `${option.blueprint.layout_meta.signature}:${compose.lighting.id}`;
  const proxyFresh = !!(ws.proxy && ws.proxy.key === proxyKey && Date.now() - ws.proxy.at < PROXY_URL_MAX_AGE_MS);
  const proxyDisplayStatus: ProxyUploadStatus =
    proxyStatus === 'uploading' ? 'uploading' : proxyStatus === 'error' ? 'error' : proxyFresh ? 'uploaded' : 'idle';
  const slug = `${brief.heroDish}-${brief.country}`.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'scene';

  const ensureProxyUploaded = useCallback(async (): Promise<string> => {
    const cur = wsRef.current;
    if (cur.proxy && cur.proxy.key === proxyKey && Date.now() - cur.proxy.at < PROXY_URL_MAX_AGE_MS) return cur.proxy.url;
    setProxyStatus('uploading');
    setProxyError(null);
    try {
      // Reuse the already-rendered proxy image rather than rendering it again.
      const { url } = await uploadImage(proxyDataUrl);
      updateWorkspace((w) => ({
        ...w,
        proxy: { key: proxyKey, url, at: Date.now() },
      }));
      setProxyStatus('idle');
      return url;
    } catch (err) {
      setProxyStatus('error');
      setProxyError(err instanceof Error ? err.message : String(err));
      throw err;
    }
  }, [proxyKey, proxyDataUrl, utils, updateWorkspace]);

  const previewInput = useCallback(
    (seg: WsSegment): WorkspaceTaskInput => ({
      purpose: seg.kind === 'environment' ? 'environment' : 'element',
      label: seg.chip,
      prompt: previewPrompt(seg, wsRef.current, allSegments),
      aspectRatio: previewAspectRatio(seg, wsRef.current),
      imageSize: '1K',
      numImages: 1,
      references: previewReferences(seg, wsRef.current),
      product: productRefs(compose.spec, allSegments, wsRef.current),
    }),
    [allSegments, compose.spec],
  );

  /** `keyText` is captured at submit time — the text the prompt was actually built from — not at completion, so an edit made while the job is running correctly leaves the saved preview stale. */
  const savePreview = useCallback(
    (seg: WsSegment, keyText: string, urls: string[]) => {
      updateWorkspace((w) => ({
        ...w,
        previews: { ...w.previews, [seg.key]: { text: keyText, url: urls[0] } },
        useAsRef: w.useAsRef[seg.key] === undefined ? { ...w.useAsRef, [seg.key]: true } : w.useAsRef,
      }));
    },
    [updateWorkspace],
  );

  const handlePreviewSegment = useCallback(
    (seg: WsSegment) => {
      const keyText = previewKeyText(seg, wsRef.current, allSegments);
      tasks.run(seg.key, previewInput(seg)).then(
        (urls) => savePreview(seg, keyText, urls),
        () => {},
      );
    },
    [tasks, previewInput, savePreview, allSegments],
  );

  const previewAllTargets = useMemo(
    () =>
      allSegments.filter(
        (s) => s.previewable && isActive(s, ws) && !replacementUpload(s, ws) && (!ws.previews[s.key] || previewStale(s, ws, allSegments)),
      ),
    [allSegments, ws],
  );

  const handlePreviewAll = useCallback(() => {
    tasks.runMany(
      previewAllTargets.map((seg) => {
        const keyText = previewKeyText(seg, wsRef.current, allSegments);
        return {
          key: seg.key,
          input: previewInput(seg),
          onDone: (urls: string[]) => savePreview(seg, keyText, urls),
        };
      }),
    );
  }, [tasks, previewAllTargets, previewInput, savePreview, allSegments]);

  // The image check: Claude compares a scene result with the story and the
  // prompt it came from. Runs on its own after every generation; one at a time.
  const checkTask = useAgentTask('imageCheck');
  const onSignedIn = useOnSignedIn();
  const [checkingId, setCheckingId] = useState<string | null>(null);
  const checkRun = useRef(checkTask.run);
  checkRun.current = checkTask.run;

  const runCheck = useCallback(
    (result: WsResult) => {
      setCheckingId(result.id);
      checkRun.current({
        brief,
        spec: compose.spec,
        story: story.story,
        imageUrls: result.urls,
        prompt: result.prompt,
        elements: checkElements(allSegments, wsRef.current),
      });
    },
    [brief, compose.spec, story.story, allSegments],
  );

  const checkById = useCallback(
    (id: string) => {
      const result = wsRef.current.results.find((r) => r.id === id);
      if (result) runCheck(result);
    },
    [runCheck],
  );

  useEffect(() => {
    const done = checkTask.result;
    if (done?.kind !== 'imageCheck' || !checkingId) return;
    updateWorkspace((w) => ({ ...w, results: w.results.map((r) => (r.id === checkingId ? { ...r, check: done.check } : r)) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkTask.result]);

  const handleApplyFixes = useCallback(
    (issues: CheckIssue[]) => {
      const { nodes } = checkFixEdits(allSegments, wsRef.current, issues);
      if (!nodes.length) {
        showFlash('These issues are about the whole scene, so no node was changed. Edit the nodes by hand.');
        return;
      }
      history.record((w) => ({ ...w, edits: checkFixEdits(allSegments, w, issues).edits }));
      showFlash(`Added the fixes to ${nodes.join(', ')}. Generate the scene again to try them.`);
    },
    [allSegments, history, showFlash],
  );

  const handleGenerateScene = useCallback(async () => {
    let proxyUrl: string;
    try {
      proxyUrl = await ensureProxyUploaded();
    } catch {
      return;
    }
    const cur = wsRef.current;
    const refs = sceneReferences(allSegments, cur);
    const references = [{ tag: 'layout', url: proxyUrl }, ...refs.map((r) => ({ tag: r.seg.chip.toLowerCase(), url: r.url }))];
    const prompt = assembleWorkspacePrompt(allSegments, cur);
    const product = productRefs(compose.spec, allSegments, cur);
    try {
      const urls = await tasks.run('scene', {
        purpose: 'scene',
        label: 'scene',
        prompt,
        aspectRatio: cur.settings.aspectRatio,
        imageSize: cur.settings.imageSize,
        numImages: cur.settings.numImages,
        references,
        product,
      });
      const result: WsResult = {
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        urls,
        prompt,
        settings: cur.settings,
        references: [...refs.map(referenceLabel), ...productRefLabels(product)],
      };
      updateWorkspace((w) => ({ ...w, results: [result, ...w.results] }));
      runCheck(result);
    } catch {
      // surfaced via tasks.live.scene
    }
  }, [ensureProxyUploaded, allSegments, tasks, updateWorkspace, runCheck, compose.spec]);

  const handleTidy = useCallback(() => {
    history.record((w) => ({ ...w, positions: {} }));
    showFlash('Tidied the layout.');
  }, [history, showFlash]);

  // A window-level listener rather than a handler on the section: focus can
  // sit on the page body (nothing clicked yet), which is never a descendant
  // of this step's markup, so a handler placed here would miss it — and
  // Ctrl/Cmd+Enter is meant to work "from anywhere".
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key === 'Enter') {
        e.preventDefault();
        void handleGenerateScene();
        return;
      }
      if (isTextInput(e.target)) return;
      if (mod && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault();
        if (e.shiftKey) history.redo();
        else history.undo();
        return;
      }
      if (mod && (e.key === 'y' || e.key === 'Y')) {
        e.preventDefault();
        history.redo();
        return;
      }
      if (e.key === 'Escape') {
        setSelected(new Set());
        return;
      }
      if (selected.size === 0) return;
      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        history.record((w) => {
          const bypassed = { ...w.bypassed };
          for (const id of selected) {
            const seg = allSegments.find((s) => s.key === id);
            if (seg?.bypassable) bypassed[id] = !bypassed[id];
          }
          return { ...w, bypassed };
        });
        return;
      }
      const nudge: Record<string, [number, number]> = {
        ArrowUp: [0, -GRID_SNAP],
        ArrowDown: [0, GRID_SNAP],
        ArrowLeft: [-GRID_SNAP, 0],
        ArrowRight: [GRID_SNAP, 0],
      };
      const delta = nudge[e.key];
      if (delta) {
        e.preventDefault();
        const [dx, dy] = delta;
        history.record((w) => {
          const positions = { ...w.positions };
          for (const id of selected) {
            const g = geometry[id];
            if (!g) continue;
            positions[id] = { x: g.x + dx, y: g.y + dy };
          }
          return { ...w, positions };
        });
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleGenerateScene, history, selected, allSegments, geometry]);

  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Node Workspace</h1>
      <p>Dial in each part of the prompt, preview elements with Nano Banana Pro, then generate the scene.</p>

      <div className={styles.toolbar}>
        <div className={styles.zoomGroup}>
          <Button
            size="sm"
            variant="ghost"
            icon={<ZoomOut size={14} aria-hidden />}
            aria-label="Zoom out"
            onPress={() => canvasRef.current?.zoomOut()}
          />
          <span className={styles.zoomLabel}>{Math.round(view.scale * 100)}%</span>
          <Button
            size="sm"
            variant="ghost"
            icon={<ZoomIn size={14} aria-hidden />}
            aria-label="Zoom in"
            onPress={() => canvasRef.current?.zoomIn()}
          />
          <Button
            size="sm"
            variant="ghost"
            icon={<Maximize size={14} aria-hidden />}
            aria-label="Fit to view"
            onPress={() => canvasRef.current?.fitToView()}
          />
        </div>
        <div className={styles.divider} />
        <Button size="sm" variant="ghost" icon={<LayoutGrid size={14} aria-hidden />} onPress={handleTidy}>
          Tidy layout
        </Button>
        <Button
          size="sm"
          variant="ghost"
          icon={<Undo2 size={14} aria-hidden />}
          aria-label="Undo"
          disabled={!history.canUndo}
          onPress={history.undo}
        />
        <Button
          size="sm"
          variant="ghost"
          icon={<Redo2 size={14} aria-hidden />}
          aria-label="Redo"
          disabled={!history.canRedo}
          onPress={history.redo}
        />
        {previewAllTargets.length > 0 && (
          <>
            <div className={styles.divider} />
            <Button size="sm" variant="ghost" icon={<Sparkles size={14} aria-hidden />} onPress={handlePreviewAll}>
              Preview all elements ({previewAllTargets.length} image
              {previewAllTargets.length > 1 ? 's' : ''})
            </Button>
          </>
        )}
        <div className={styles.spacer} />
        {flash && (
          <span className={styles.flash}>
            {flash}
            <Button size="sm" variant="ghost" onPress={history.undo}>
              Undo
            </Button>
          </span>
        )}
        <span className={styles.saved} role="status" aria-live="polite">
          {saved ? 'Saved' : 'Draft saved'}
        </span>
        <ShortcutsHint />
      </div>

      <div className={styles.canvasArea}>
        <Canvas
          ref={canvasRef}
          view={view}
          onViewChange={setView}
          selected={selected}
          onSelectedChange={setSelected}
          geometry={geometry}
          edges={edges}
          worldWidth={worldWidth}
          worldHeight={worldHeight}
          onMove={(updates) =>
            history.record((w) => ({
              ...w,
              positions: { ...w.positions, ...updates },
            }))
          }
          registerHeight={registerHeight}
          isCollapsed={isCollapsed}
          onToggleCollapsed={toggleCollapsed}
          lightbox={lightbox}
          onOpenLightbox={(src, alt, rate) => setLightbox({ src, alt, rate })}
          onCloseLightbox={() => setLightbox(null)}
        >
          <ProxyNode
            x={geometry[PROXY_NODE_ID]!.x}
            y={geometry[PROXY_NODE_ID]!.y}
            proxyDataUrl={proxyDataUrl}
            uploadStatus={proxyDisplayStatus}
            uploadError={proxyError}
          />
          {allSegments.map((seg) => (
            <SegmentNode
              key={seg.key}
              seg={seg}
              allSegments={allSegments}
              ws={ws}
              x={geometry[seg.key]!.x}
              y={geometry[seg.key]!.y}
              history={history}
              updateWorkspace={updateWorkspace}
              live={tasks.live[seg.key]}
              onPreview={() => handlePreviewSegment(seg)}
              onFlash={showFlash}
            />
          ))}
          <PromptNode x={geometry[PROMPT_NODE_ID]!.x} y={geometry[PROMPT_NODE_ID]!.y} allSegments={allSegments} ws={ws} />
          <GenerateNode
            x={geometry[GENERATE_NODE_ID]!.x}
            y={geometry[GENERATE_NODE_ID]!.y}
            ws={ws}
            history={history}
            options={workspaceOptionsQuery.data ?? null}
            live={tasks.live.scene}
            preparing={proxyStatus === 'uploading'}
            prepareError={proxyStatus === 'error' ? proxyError : null}
            onGenerate={() => void handleGenerateScene()}
            slug={slug}
            leftOut={allSegments.filter((s) => staleReference(s, ws, allSegments)).map((s) => s.chip)}
            sending={sceneReferences(allSegments, ws).map(referenceLabel)}
            brandConflicts={brandConflicts(allSegments, ws)}
            check={{
              status: checkTask.status,
              timing: checkTask.timing,
              agentError: checkTask.agentError,
              trpcError: checkTask.trpcError,
              resultId: checkingId,
            }}
            onCheck={checkById}
            onApplyFixes={handleApplyFixes}
            onCheckSignedIn={(id) => void onSignedIn(() => checkById(id))}
            onRate={(imageIndex) => {
              const latest = ws.results[0];
              if (latest) setFeedbackTarget({ resultId: latest.id, imageIndex });
            }}
            feedbackFlash={feedbackFlash}
            onDismissFeedbackFlash={() => setFeedbackFlash(null)}
            onOpenLearning={() => {
              window.location.hash = 'learning';
            }}
          />
        </Canvas>
      </div>

      <p className={styles.footer}>
        Drag a node's header to move it, shift-click to select more than one. Ctrl/Cmd+Enter generates the scene from anywhere.
      </p>

      <FeedbackDialog
        result={feedbackTarget ? ws.results.find((r) => r.id === feedbackTarget.resultId) ?? null : null}
        imageIndex={feedbackTarget?.imageIndex ?? 1}
        elements={ratedElements(allSegments, ws)}
        brief={brief}
        spec={compose.spec}
        model={WORKSPACE_MODEL_LABEL}
        sceneSummary={story.story.sceneSummary}
        onClose={() => setFeedbackTarget(null)}
        onSaved={(imageIndex, record) => {
          const targetId = feedbackTarget?.resultId;
          updateWorkspace((w) => ({
            ...w,
            results: w.results.map((r) => (r.id === targetId ? { ...r, feedback: { ...r.feedback, [imageIndex]: record } } : r)),
          }));
          setFeedbackTarget(null);
          setFeedbackFlash('Thanks — saved to Learning. Confirmed lessons feed the next prompts for this dish.');
        }}
      />
    </section>
  );
}
