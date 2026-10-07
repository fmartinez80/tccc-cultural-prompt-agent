// The node workspace (step 10): the composition prompt broken into editable
// nodes — the proxy image, one node per prompt segment (camera, lighting and
// color split into their own nodes), the assembled prompt, and the scene
// generator. Every generation point here uses Nano Banana Pro.

import type { Verdict } from './feedback.ts';
import { compositionSegments, type ImageCheck, type Story, type StoryFacts } from './story.ts';
import { turnaroundPrompt } from './turnaround.ts';
import type { SceneSpec } from './types.ts';

export const WORKSPACE_MODEL = 'gemini_3_pro' as const;
export const WORKSPACE_MODEL_LABEL = 'Nano Banana Pro';
export const WORKSPACE_IMAGE_SIZES = ['1K', '2K', '4K'] as const;
export type WorkspaceImageSize = (typeof WORKSPACE_IMAGE_SIZES)[number];
/** Nano Banana Pro takes up to 14 reference images; image 1 is always the proxy. */
export const WORKSPACE_MAX_REFERENCES = 14;
/** The proxy is rendered 16:9; other scene ratios make the model reframe the layout. */
export const PROXY_ASPECT_RATIO = '16:9';

export type WsSegmentKind = 'guide' | 'object' | 'environment' | 'camera' | 'lighting' | 'color' | 'exclusions';

/** One editable node's source: the story's own text for this part of the prompt. */
export interface WsSegment {
  key: string;
  kind: WsSegmentKind;
  chip: string;
  title: string;
  note: string;
  /** Written from the rules, not by the agent. Still editable here. */
  fixed: boolean;
  /** The story's text; the node shows the user's edit when there is one. */
  baseText: string;
  /** Objects and the environment can be previewed on their own and fed to the scene as a reference. */
  previewable: boolean;
  /** The layout guide cannot be bypassed: it is what tells the model how to read image 1. */
  bypassable: boolean;
}

export interface WsPreview {
  /** The segment text the preview was made from; a different current text makes it stale. */
  text: string;
  url: string;
}

/**
 * An image the operator uploaded for one node (an ephemeral Runway URL, ~1–2 days).
 * `reference`: the node's preview is generated from it, keeping its design and
 * applying the node's text. `replace`: it is the node's image as-is, going
 * straight to the scene in place of a generated preview.
 */
export interface WsUpload {
  url: string;
  name: string;
  at: number;
  mode: 'reference' | 'replace';
}

export interface WsSettings {
  aspectRatio: string;
  imageSize: WorkspaceImageSize;
  numImages: 1 | 4;
}

export interface WsResult {
  id: string;
  createdAt: number;
  urls: string[];
  prompt: string;
  settings: WsSettings;
  /** Chips of the segment previews that went in as references (the proxy is always image 1). */
  references: string[];
  /** The images compared with the story; absent until the check has run. */
  check?: ImageCheck;
  /** The operator's rating per image, keyed by 1-based image number; absent until rated. */
  feedback?: Record<number, { id: string; verdict: Verdict; at: number }>;
}

export interface WorkspaceState {
  /** User edits by segment key; absent = the story's text. */
  edits: Record<string, string>;
  /** Bypassed segments are left out of the prompt. */
  bypassed: Record<string, boolean>;
  previews: Record<string, WsPreview>;
  /** The operator's own images by segment key; kept when a new story comes in. */
  uploads: Record<string, WsUpload>;
  /** Whether a segment's preview goes to the scene as a reference image. Defaults to true once a preview exists. */
  useAsRef: Record<string, boolean>;
  settings: WsSettings;
  /** Newest first. */
  results: WsResult[];
  /** Canvas positions by node id; absent = the default layout. */
  positions: Record<string, { x: number; y: number }>;
  /** Collapsed (true) or expanded (false) by node id; absent = the node's default (see `defaultCollapsed`). */
  collapsed?: Record<string, boolean>;
  /** The uploaded proxy PNG (an ephemeral Runway URL, ~1–2 days), keyed by the blueprint it shows. */
  proxy: { key: string; url: string; at: number } | null;
}

export const EMPTY_WORKSPACE: WorkspaceState = {
  edits: {},
  bypassed: {},
  previews: {},
  uploads: {},
  useAsRef: {},
  settings: { aspectRatio: PROXY_ASPECT_RATIO, imageSize: '2K', numImages: 1 },
  results: [],
  positions: {},
  proxy: null,
};

/** Re-use an uploaded proxy for this long; Runway keeps upload URLs for roughly a day or two. */
export const PROXY_URL_MAX_AGE_MS = 20 * 60 * 60 * 1000;

/** The story's segments as workspace nodes, in prompt order. */
export function workspaceSegments(story: Story, facts: StoryFacts): WsSegment[] {
  const out: WsSegment[] = [];
  for (const s of compositionSegments(story, facts)) {
    if (s.kind === 'camera') {
      for (const p of s.parts ?? []) {
        const kind = p.label.toLowerCase() as 'camera' | 'lighting' | 'color';
        out.push({
          key: kind,
          kind,
          chip: p.label.toUpperCase(),
          title: p.label,
          note:
            kind === 'camera'
              ? 'Film look, lens, angle and focus'
              : kind === 'lighting'
                ? 'The light, and how it falls on the product'
                : 'The color treatment',
          fixed: true,
          baseText: p.text,
          previewable: false,
          bypassable: true,
        });
      }
      continue;
    }
    out.push({
      key: s.key,
      kind: s.kind as WsSegmentKind,
      chip: s.chip,
      title: s.title,
      note: s.note,
      fixed: s.fixed,
      baseText: s.text,
      previewable: s.kind === 'object' || s.kind === 'environment',
      bypassable: s.kind !== 'guide',
    });
  }
  return out;
}

export function segmentText(seg: WsSegment, ws: WorkspaceState): string {
  return ws.edits[seg.key] ?? seg.baseText;
}

export function isEdited(seg: WsSegment, ws: WorkspaceState): boolean {
  return ws.edits[seg.key] !== undefined && ws.edits[seg.key] !== seg.baseText;
}

export function isActive(seg: WsSegment, ws: WorkspaceState): boolean {
  return !(seg.bypassable && ws.bypassed[seg.key]);
}

function look(all: WsSegment[], ws: WorkspaceState): string[] {
  return all
    .filter((s) => (s.kind === 'camera' || s.kind === 'lighting' || s.kind === 'color') && isActive(s, ws))
    .map((s) => `${s.title}: ${segmentText(s, ws)}`);
}

/**
 * The text a preview is tied to: save it with the preview, and compare to tell
 * whether the preview is stale. An environment preview also depends on the
 * camera, lighting and color nodes, so they count as its source.
 */
export function previewKeyText(seg: WsSegment, ws: WorkspaceState, all: WsSegment[]): string {
  const ref = referenceUpload(seg, ws);
  const base = seg.kind !== 'environment' ? segmentText(seg, ws) : [segmentText(seg, ws), ...look(all, ws)].join('\n');
  // A preview made from a different reference image is stale too.
  return ref ? `${base}\nreference: ${ref.url}` : base;
}

/** The node's uploaded image when it guides the preview. */
export function referenceUpload(seg: WsSegment, ws: WorkspaceState): WsUpload | undefined {
  const u = ws.uploads?.[seg.key];
  return u?.mode === 'reference' ? u : undefined;
}

/** The node's uploaded image when it stands in for the preview. */
export function replacementUpload(seg: WsSegment, ws: WorkspaceState): WsUpload | undefined {
  const u = ws.uploads?.[seg.key];
  return u?.mode === 'replace' ? u : undefined;
}

/** The image this node contributes to the scene: the operator's replacement, else its preview. */
export function nodeImage(seg: WsSegment, ws: WorkspaceState): { url: string; source: 'upload' | 'preview' } | null {
  const up = replacementUpload(seg, ws);
  if (up) return { url: up.url, source: 'upload' };
  const p = ws.previews[seg.key];
  return p ? { url: p.url, source: 'preview' } : null;
}

/** Reference images for a node's own preview (the uploaded guide image, when there is one). */
export function previewReferences(seg: WsSegment, ws: WorkspaceState): Array<{ tag: string; url: string }> {
  const ref = referenceUpload(seg, ws);
  return ref ? [{ tag: 'reference', url: ref.url }] : [];
}

/** A preview made from text the segment no longer has. */
export function previewStale(seg: WsSegment, ws: WorkspaceState, all: WsSegment[]): boolean {
  const p = ws.previews[seg.key];
  return !!p && p.text !== previewKeyText(seg, ws, all);
}

/** Nano Banana Pro prompt for one segment's own preview. */
export function previewPrompt(seg: WsSegment, ws: WorkspaceState, all: WsSegment[]): string {
  const ref = referenceUpload(seg, ws);
  if (seg.kind === 'environment') {
    return [
      ...(ref
        ? [
            'Image 1 is the reference for this setting. Keep its place, materials, colors and the details that make it recognizable; change only what the description below asks for, and follow the camera, lighting and color below.',
          ]
        : []),
      'Create a photograph of an empty setting for a food scene, ready for the dishes to be placed.',
      `The setting: ${segmentText(seg, ws)}`,
      ...look(all, ws),
      'Show only the bare tabletop in the foreground and the place around and behind it, with the tabletop clear and uncluttered across the lower half of the frame.',
    ].join('\n\n');
  }
  const prompt = turnaroundPrompt(`${seg.chip}: ${segmentText(seg, ws)}`, 'angled', false);
  if (!ref) return prompt;
  return [
    'Image 1 is the reference for this element: the exact object to show. Keep its design, shape, proportions, materials, colors and any label or logo artwork exactly as they are; do not redraw, restyle or re-letter the label.',
    'Change only what the description below asks for — its state or condition (for example filled, chilled with condensation, served, garnished), its size and how it is presented — and show it the way the rest of this prompt describes.',
    prompt,
  ].join('\n\n');
}

export function previewAspectRatio(seg: WsSegment, ws: WorkspaceState): string {
  return seg.kind === 'environment' ? ws.settings.aspectRatio : '4:3';
}

/**
 * The image a node sends to the scene: the operator's replacement image; else
 * its preview, when that was made from the current text; else the operator's
 * guide image itself. An outdated preview is never sent: as a reference the old
 * picture wins over edited text (an edited SKU cap never showed up because the
 * old preview went in as "exactly how SKU looks").
 */
export function sceneImage(seg: WsSegment, ws: WorkspaceState, all: WsSegment[]): { url: string; source: 'upload' | 'preview' } | null {
  const up = replacementUpload(seg, ws);
  if (up) return { url: up.url, source: 'upload' };
  const p = ws.previews[seg.key];
  if (p && !previewStale(seg, ws, all)) return { url: p.url, source: 'preview' };
  const guide = referenceUpload(seg, ws);
  if (guide) return { url: guide.url, source: 'upload' };
  return null;
}

/** A node whose outdated preview is left out of the scene, with nothing to send in its place. */
export function staleReference(seg: WsSegment, ws: WorkspaceState, all: WsSegment[]): boolean {
  return (
    seg.previewable &&
    isActive(seg, ws) &&
    ws.useAsRef[seg.key] !== false &&
    !!ws.previews[seg.key] &&
    previewStale(seg, ws, all) &&
    !sceneImage(seg, ws, all)
  );
}

export interface SceneReference {
  seg: WsSegment;
  url: string;
  /** `upload`: the operator's own image, which overrides any other description of the element. */
  source: 'upload' | 'preview';
}

/** Segment images that go to the scene, in reference order (images 2, 3, …). */
export function sceneReferences(all: WsSegment[], ws: WorkspaceState): SceneReference[] {
  const out: SceneReference[] = [];
  for (const seg of all) {
    if (!seg.previewable || !isActive(seg, ws) || ws.useAsRef[seg.key] === false) continue;
    const img = sceneImage(seg, ws, all);
    if (img) out.push({ seg, ...img });
  }
  return out.slice(0, WORKSPACE_MAX_REFERENCES - 1);
}

/** How a result lists what it was sent with, e.g. "SKU (your image)". */
export function referenceLabel(r: SceneReference): string {
  return r.source === 'upload' ? `${r.seg.chip} (your image)` : `${r.seg.chip} (preview)`;
}

/**
 * The catalog's own product photos the server adds to a generation: the SKU's
 * package shots and the poured bell glass. Left out for a node the operator
 * gave their own image (theirs wins) or bypassed.
 */
export interface ProductRefs {
  skuId?: string;
  glass: boolean;
  /** Looking-down camera: the scene also gets the top shot of the cap. */
  high: boolean;
}

export function productRefs(spec: SceneSpec, all: WsSegment[], ws: WorkspaceState): ProductRefs {
  const own = (chip: string) => {
    const seg = all.find((s) => s.chip === chip);
    return !seg || !isActive(seg, ws) || !!ws.uploads?.[seg.key];
  };
  return {
    ...(spec.sku.gtin && !own('SKU') ? { skuId: spec.sku.id } : {}),
    glass: spec.sku.glass && !own('GLASS'),
    high: spec.camera.angle === 'high',
  };
}

/** How a scene result lists the product photos it was sent with. */
export function productRefLabels(p: ProductRefs): string[] {
  return [...(p.skuId ? ['SKU (product photo)'] : []), ...(p.glass ? ['GLASS (poured reference)'] : [])];
}

const BRAND_WORDS = /coca[\s-]?cola|\bcoke\b/i;

/**
 * Nodes that still name Coca-Cola while the SKU node carries the operator's own
 * product image: those lines pull the model back to a Coca-Cola bottle.
 */
export function brandConflicts(all: WsSegment[], ws: WorkspaceState): string[] {
  const sku = sceneReferences(all, ws).find((r) => r.seg.chip === 'SKU' && r.source === 'upload');
  if (!sku) return [];
  return all.filter((s) => s.key !== sku.seg.key && isActive(s, ws) && BRAND_WORDS.test(segmentText(s, ws))).map((s) => s.chip);
}

/**
 * The scene prompt, assembled from the nodes in the same order as the story's
 * composition prompt: layout guide, one line per label, environment, camera /
 * lighting / color, the reference-image line, exclusions.
 */
export function assembleWorkspacePrompt(all: WsSegment[], ws: WorkspaceState): string {
  const active = all.filter((s) => isActive(s, ws));
  const text = (s: WsSegment) => segmentText(s, ws).trim();
  const guide = active.filter((s) => s.kind === 'guide').map(text);
  const objects = active
    .filter((s) => s.kind === 'object')
    .map((s) => `${s.chip}: ${text(s)}`)
    .join('\n');
  const env = active.filter((s) => s.kind === 'environment').map(text);
  const lookLines = active
    .filter((s) => s.kind === 'camera' || s.kind === 'lighting' || s.kind === 'color')
    .map((s) => `${s.title}: ${text(s)}`)
    .join('\n');
  const refs = sceneReferences(all, ws);
  const refLine = refs.length
    ? [
        'Reference images: ' +
          refs
            .map(({ seg }, i) =>
              seg.kind === 'environment'
                ? `image ${i + 2} shows the table surface and the setting behind it`
                : `image ${i + 2} shows exactly how ${seg.chip} looks`,
            )
            .join('; ') +
          '.',
        ...refs
          .map((r, i) => ({ r, n: i + 2 }))
          .filter(({ r }) => r.source === 'upload' && r.seg.kind === 'object')
          .map(
            ({ r, n }) =>
              `Image ${n} is the exact item to place at ${r.seg.chip}: copy its type, shape, proportions, colors, materials and any label artwork from image ${n}. It takes priority over every other line of this prompt that names or describes the ${r.seg.chip} item differently, including product names, packaging and the shape drawn at ${r.seg.chip} in image 1, which only marks its position and size.`,
          ),
        'Match each referenced element to its image: the same pieces and count, cut, sauce, garnish, colors and container, placed where its shape sits in image 1 and lit by this scene’s light.',
        'Where an element’s description above asks for a detail its image does not show, follow the description for that detail.',
      ].join(' ')
    : '';
  const exclusions = active.filter((s) => s.kind === 'exclusions').map(text);
  return [...guide, objects, ...env, lookLines, refLine, ...exclusions].filter(Boolean).join('\n\n');
}

/** Node names the image check may attribute an issue to: every node the prompt draws from. */
export function checkElements(all: WsSegment[], ws: WorkspaceState): string[] {
  return all.filter((s) => s.kind !== 'guide' && isActive(s, ws)).map((s) => s.chip);
}

type CheckIssue = ImageCheck['images'][number]['issues'][number];

/**
 * The node edits that add an image check's fixes to the matching nodes' text.
 * Issues for the whole scene, or naming no node, are left for the operator.
 */
export function checkFixEdits(all: WsSegment[], ws: WorkspaceState, issues: CheckIssue[]): { edits: Record<string, string>; nodes: string[] } {
  const edits = { ...ws.edits };
  const nodes: string[] = [];
  for (const issue of issues) {
    const seg = all.find((s) => s.chip === issue.element && s.kind !== 'guide');
    const fix = issue.fix.trim();
    if (!seg || !fix) continue;
    const text = edits[seg.key] ?? seg.baseText;
    if (text.includes(fix)) continue;
    edits[seg.key] = `${text.trimEnd()} ${fix}`;
    if (!nodes.includes(seg.chip)) nodes.push(seg.chip);
  }
  return { edits, nodes };
}
