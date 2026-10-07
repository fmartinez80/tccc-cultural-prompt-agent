// Renders a blueprint to the labeled proxy PNG: flat-colored real-scale
// shapes, lit by the scene's lighting preset, seen through the exact camera
// the solver used, with role labels drawn as a 2D overlay.
//
// Ported from the tablescape reference implementation (src/web/render.ts);
// only the import paths changed.

import * as THREE from 'three';
import { Projector, toThreeCamera } from '../../shared/camera.ts';
import { BELL_GLASS, VESSELS, napkinDef, type ProxyDef } from '../../shared/registry.ts';
import type { LightingPreset } from '../../shared/rules.ts';
import type { Blueprint, Primitive } from '../../shared/types.ts';

export const ROLE_COLORS: Record<string, string> = {
  main: '#4f9d69',
  'shared-hero': '#3f7fbf',
  sku: '#d7263d',
  glass: '#f28b82',
  side: '#e8a33d',
  'shared-side': '#6fa8dc',
  bread: '#a0703c',
  condiment: '#8e6bbf',
  accent: '#2bb3a3',
  'napkin-set': '#e9e9e4',
  // Second place setting (party "2"): lighter variants of the matching hero color.
  'partner-main': '#8cc29c',
  'partner-napkin': '#e9e9e4',
  'partner-sku': '#e8707f',
  'partner-glass': '#f6b3ac',
};

function kelvinToColor(k: number): THREE.Color {
  const t = k / 100;
  const r = t <= 66 ? 255 : 329.698727446 * Math.pow(t - 60, -0.1332047592);
  const g = t <= 66 ? 99.4708025861 * Math.log(t) - 161.1195681661 : 288.1221695283 * Math.pow(t - 60, -0.0755148492);
  const b = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  const c = (v: number) => Math.min(255, Math.max(0, v)) / 255;
  return new THREE.Color(c(r), c(g), c(b));
}

// Profiles: [radius fraction, height fraction], base to top.
// Traced from the 330 mL contour glass bottle reference: near-straight body with a
// slight lower waist, label band in the middle, rounded shoulder, narrow neck and lip.
const CONTOUR_BOTTLE: Array<[number, number]> = [
  [0.0, 0], [0.9, 0], [0.98, 0.03], [1.0, 0.07], [0.93, 0.13], [0.97, 0.2], [1.0, 0.28], [1.0, 0.45], [0.98, 0.58], [0.9, 0.67], [0.74, 0.76], [0.55, 0.84], [0.45, 0.89], [0.43, 0.94], [0.5, 0.955], [0.5, 0.985], [0.45, 1.0], [0.0, 1.0],
];
const PET_BOTTLE: Array<[number, number]> = [
  [0.0, 0], [0.95, 0], [1.0, 0.05], [1.0, 0.62], [0.8, 0.75], [0.4, 0.88], [0.32, 0.93], [0.36, 0.95], [0.3, 1.0], [0.0, 1.0],
];
/** A plain condiment bottle: straight body, round shoulder, short neck and cap — nothing like the contour bottle. */
const CONDIMENT: Array<[number, number]> = [
  [0.0, 0], [0.96, 0], [1.0, 0.03], [1.0, 0.64], [0.9, 0.72], [0.62, 0.79], [0.42, 0.84], [0.42, 0.9], [0.5, 0.9], [0.5, 1.0], [0.0, 1.0],
];
const BELL: Array<[number, number]> = [
  [0.0, 0], [0.64, 0], [0.64, 0.03], [0.2, 0.08], [0.18, 0.18], [0.55, 0.3], [0.62, 0.45], [0.58, 0.6], [0.72, 0.8], [1.0, 1.0], [0.96, 1.0], [0.0, 0.1],
];

function lathe(profile: Array<[number, number]>, r: number, h: number): THREE.BufferGeometry {
  return new THREE.LatheGeometry(
    profile.map(([pr, ph]) => new THREE.Vector2(pr * r, ph * h)),
    40,
  );
}

function defFor(p: Primitive): ProxyDef {
  if (p.role === 'glass' || p.role === 'partner-glass') return BELL_GLASS;
  if (p.role === 'napkin-set' || p.role === 'partner-napkin') return napkinDef(p.footprint ?? 'rect', p.proxy.includes('-dinner') ? 'dinner' : 'luncheon');
  if (p.role === 'sku' || p.role === 'partner-sku') {
    // Rebuild from the blueprint's dimensions (the SKU proxy key is catalog-specific).
    const kind = p.proxy.includes('can') ? 'lathe-can' : 'lathe-bottle';
    return { kind, radius: p.dimensions.width / 2, height: p.dimensions.height, tall: true };
  }
  return VESSELS[p.proxy as keyof typeof VESSELS] ?? { kind: 'cylinder', radius: p.dimensions.width / 2, height: p.dimensions.height };
}

function mesh(geo: THREE.BufferGeometry, color: string, opts: { opacity?: number } = {}): THREE.Mesh {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0, transparent: opts.opacity !== undefined, opacity: opts.opacity ?? 1 });
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function buildItem(p: Primitive): THREE.Object3D {
  const g = new THREE.Group();
  const def = defFor(p);
  const color = ROLE_COLORS[p.role] ?? '#999';
  const vesselH = def.height;
  const foodH = Math.max(0, p.dimensions.height - vesselH);
  const isPet = p.proxy.includes('pet');

  if (def.kind === 'lathe-bottle') {
    g.add(mesh(lathe(isPet ? PET_BOTTLE : CONTOUR_BOTTLE, def.radius!, def.height), color));
  } else if (def.kind === 'lathe-can') {
    const c = mesh(new THREE.CylinderGeometry(def.radius! * 0.88, def.radius! * 0.9, def.height, 40), color);
    c.position.y = def.height / 2;
    g.add(c);
  } else if (def.kind === 'lathe-condiment') {
    g.add(mesh(lathe(CONDIMENT, def.radius!, def.height), color));
  } else if (def.kind === 'lathe-bell-glass') {
    g.add(mesh(lathe(BELL, def.radius!, def.height), color, { opacity: 0.92 }));
  } else if (def.kind === 'napkin') {
    const w = def.width!,
      d = def.depth!,
      h = def.height;
    let nap: THREE.Mesh;
    if (p.footprint === 'triangle') {
      const shape = new THREE.Shape([new THREE.Vector2(-w / 2, -d / 2), new THREE.Vector2(w / 2, -d / 2), new THREE.Vector2(0, d / 2)]);
      const geo = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false });
      geo.rotateX(-Math.PI / 2);
      nap = mesh(geo, color);
    } else {
      nap = mesh(new THREE.BoxGeometry(w, h, d), color);
      nap.position.y = h / 2;
    }
    g.add(nap);
    // Fork and knife resting on the napkin, pointing toward the entree (+d is away from camera).
    // A plain napkin (on the go, paper) has none.
    for (const [dx, len] of p.proxy.endsWith('-plain')
      ? []
      : ([
          [-w * 0.22, 0.19],
          [w * 0.22, 0.2],
        ] as const)) {
      const u = mesh(new THREE.BoxGeometry(0.018, 0.006, len), '#b8bcc2');
      u.position.set(dx, h + 0.003, 0);
      g.add(u);
    }
  } else if (def.radius !== undefined) {
    const v = mesh(new THREE.CylinderGeometry(def.radius, def.radius * 0.82, vesselH, 48), color);
    v.position.y = vesselH / 2;
    g.add(v);
    if (foodH > 0.006) {
      const dome = mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), shade(color, 0.82));
      dome.scale.set(def.radius * 0.72, foodH, def.radius * 0.72);
      dome.position.y = vesselH;
      g.add(dome);
    }
  } else {
    const v = mesh(new THREE.BoxGeometry(def.width!, vesselH, def.depth!), color);
    v.position.y = vesselH / 2;
    g.add(v);
    if (foodH > 0.006) {
      const dome = mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), shade(color, 0.82));
      dome.scale.set(def.width! * 0.36, foodH, def.depth! * 0.36);
      dome.position.y = vesselH;
      g.add(dome);
    }
  }
  g.position.set(p.world.x, p.world.elevation, -p.world.d);
  g.rotation.y = (-p.world.yawDeg * Math.PI) / 180;
  return g;
}

function shade(hex: string, f: number): string {
  const c = new THREE.Color(hex);
  c.multiplyScalar(f);
  return `#${c.getHexString()}`;
}

export function buildScene(bp: Blueprint, lighting: LightingPreset): THREE.Scene {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#8a8d91');
  const { width: W, depth: D } = bp.table;

  const top = new THREE.Mesh(new THREE.BoxGeometry(W, 0.04, D), new THREE.MeshStandardMaterial({ color: '#f4f4f2', roughness: 0.9 }));
  top.position.set(0, -0.02, -D / 2);
  top.receiveShadow = true;
  top.userData.part = 'table';
  scene.add(top);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: '#7d8085', roughness: 1 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.75;
  floor.userData.part = 'floor';
  scene.add(floor);

  bp.primitives.forEach((p, i) => {
    const item = buildItem(p);
    // 1-based, so the sketch's hit map can keep 0 for the table and background.
    item.userData.itemIndex = i + 1;
    scene.add(item);
  });

  // Key light from the preset: azimuth 0 = behind the camera, 180 = behind the table, negative = diner's left.
  const k = lighting.rig.key;
  const az = (k.azimuth_deg * Math.PI) / 180;
  const el = (k.elevation_deg * Math.PI) / 180;
  const center = new THREE.Vector3(bp.camera.target[0], 0, -D / 2);
  // Color temperature is only hinted at: role colors must stay recognizable in the proxy.
  const tint = (kelvin: number) => kelvinToColor(kelvin).lerp(new THREE.Color('#ffffff'), 0.6);
  const key = new THREE.DirectionalLight(tint(k.kelvin), 2.6);
  key.position.set(center.x + 4 * Math.sin(az) * Math.cos(el), 4 * Math.sin(el), center.z + 4 * Math.cos(az) * Math.cos(el));
  key.target.position.copy(center);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.radius = 2 + k.softness * 6;
  const sc = key.shadow.camera as THREE.OrthographicCamera;
  sc.left = -W;
  sc.right = W;
  sc.top = W;
  sc.bottom = -W;
  sc.near = 0.1;
  sc.far = 12;
  scene.add(key, key.target);
  scene.add(new THREE.HemisphereLight(tint(lighting.rig.ambient_kelvin), '#666', 0.6 + lighting.rig.fill_ratio * 1.6));
  return scene;
}

/** Where each label is pinned: SKU on its lower body (below the logo box), others at their visual center. */
function labelAnchor(p: Primitive): number {
  if (p.role === 'sku' || p.role === 'partner-sku') return p.dimensions.height * 0.22;
  if (p.role === 'glass' || p.role === 'partner-glass') return p.dimensions.height * 0.3;
  return p.dimensions.height * 0.6;
}

function drawLabels(ctx: CanvasRenderingContext2D, bp: Blueprint, w: number, h: number) {
  const proj = new Projector(bp.camera);
  const size = Math.round(h * 0.026);
  ctx.font = `700 ${size}px "Inter", "Helvetica Neue", Arial, sans-serif`;
  ctx.textBaseline = 'middle';
  const placed: Array<{ x0: number; y0: number; x1: number; y1: number }> = [];
  // Nearest items first so their labels win the best spot.
  const order = [...bp.primitives].sort((a, b) => a.world.d - b.world.d);
  for (const p of order) {
    const s = proj.project(p.world.x, labelAnchor(p), p.world.d);
    const text = p.id;
    const tw = ctx.measureText(text).width;
    const padX = size * 0.6,
      padY = size * 0.42;
    const bw = tw + 2 * padX,
      bh = size + 2 * padY;
    const x0 = s.x * w - bw / 2;
    const y0 = (1 - s.y) * h - bh / 2;
    // The image model maps each label to the shape under it, so a label that collides with
    // an earlier one moves to the nearest free spot whose center still sits on its own shape.
    const b = p.screen_bbox;
    const onShape = (cx: number, cy: number) => !b || (cx >= b.x0 * w && cx <= b.x1 * w && cy >= (1 - b.y1) * h && cy <= (1 - b.y0) * h);
    const free = (x: number, y: number) => !placed.some((q) => x < q.x1 && q.x0 < x + bw && y < q.y1 && q.y0 < y + bh);
    const clampX = (x: number) => Math.max(4, Math.min(w - bw - 4, x));
    const clampY = (y: number) => Math.max(4, Math.min(h - bh - 4, y));
    const candidates: Array<[number, number]> = [[0, 0]];
    for (let k = 1; k <= 8; k++) candidates.push([0, -k], [0, k], [-k, 0], [k, 0], [-k, -k], [k, -k], [-k, k], [k, k]);
    const spots = candidates.map(([i, j]) => [clampX(x0 + i * bw * 0.35), clampY(y0 + j * bh * 0.6)] as [number, number]);
    const pick =
      spots.find(([x, y]) => free(x, y) && onShape(x + bw / 2, y + bh / 2)) ?? spots.find(([x, y]) => free(x, y)) ?? [clampX(x0), clampY(y0)];
    const [x, y] = pick;
    placed.push({ x0: x, y0: y, x1: x + bw, y1: y + bh });
    ctx.fillStyle = 'rgba(16, 20, 40, 0.86)';
    const r = bh * 0.22;
    ctx.beginPath();
    ctx.roundRect(x, y, bw, bh, r);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, x + padX, y + bh / 2 + 1);
  }
}

export interface RenderOptions {
  width?: number;
  labels?: boolean;
  guides?: boolean;
  /**
   * Widen the field of view by this factor (1.25 = everything 1.25x smaller around the
   * frame center). The image model tightens the framing of the proxy it is given, so the
   * proxy sent to it is rendered wider; the blueprint keeps the true framing.
   */
  widen?: number;
}

let sharedRenderer: THREE.WebGLRenderer | null = null;

function getRenderer(): THREE.WebGLRenderer {
  if (!sharedRenderer) {
    sharedRenderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    sharedRenderer.shadowMap.enabled = true;
    sharedRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sharedRenderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  return sharedRenderer;
}

function disposeScene(scene: THREE.Scene) {
  scene.traverse((o) => {
    if (o instanceof THREE.Mesh) {
      o.geometry.dispose();
      (o.material as THREE.Material).dispose();
    }
  });
}

/**
 * Width of the proxy sent to the image model. It is only a layout guide, so
 * 1280 px is plenty and keeps the upload small (flat shapes compress well).
 */
export const MODEL_PROXY_WIDTH = 1280;

/** Render the proxy to a PNG data URL (16:9). */
export function renderProxy(bp: Blueprint, lighting: LightingPreset, opts: RenderOptions = {}): string {
  const width = opts.width ?? 1920;
  const height = Math.round(width / (16 / 9));
  const renderer = getRenderer();
  if (opts.widen && opts.widen !== 1) {
    const half = (bp.camera.fovDeg * Math.PI) / 360;
    const fovDeg = (Math.atan(Math.tan(half) * opts.widen) * 360) / Math.PI;
    bp = { ...bp, camera: { ...bp.camera, fovDeg } };
  }
  renderer.setPixelRatio(1);
  renderer.setSize(width, height, false);
  const scene = buildScene(bp, lighting);
  const cam = toThreeCamera(bp.camera);
  renderer.render(scene, cam);

  const out = document.createElement('canvas');
  out.width = width;
  out.height = height;
  const ctx = out.getContext('2d')!;
  ctx.drawImage(renderer.domElement, 0, 0);
  if (opts.guides) {
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.setLineDash([12, 10]);
    ctx.lineWidth = Math.max(1, width / 900);
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 3, 0);
    ctx.lineTo(width / 3, height);
    ctx.moveTo((2 * width) / 3, 0);
    ctx.lineTo((2 * width) / 3, height);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  if (opts.labels !== false) drawLabels(ctx, bp, width, height);
  disposeScene(scene);
  return out.toDataURL('image/png');
}

export interface Sketch {
  /** Black line drawing on white, PNG data URL (16:9). */
  url: string;
  width: number;
  height: number;
  /** Per pixel, the 1-based index of the item under it in bp.primitives; 0 is the table or background. */
  hit: Uint8Array;
  /** One per item, in bp.primitives order: where its marker sits (0..1 from the top left), or null when the camera can't see it. */
  anchors: Array<{ x: number; y: number } | null>;
}

/**
 * The layout as a black-and-white line drawing, seen through the blueprint's own camera (the
 * photo's true framing). Two flat passes, one coloring every mesh with its own id and one with
 * its surface normals, are traced on the CPU: outlines where the id changes, lighter creases
 * where the normal turns sharply. Drawn at twice the size and scaled down so the lines are smooth.
 */
export function renderSketch(bp: Blueprint, lighting: LightingPreset, opts: { width?: number } = {}): Sketch {
  const width = opts.width ?? 1280;
  const height = Math.round(width / (16 / 9));
  const S = 2;
  const W = width * S,
    H = height * S;
  const renderer = getRenderer();
  renderer.setPixelRatio(1);
  renderer.setSize(W, H, false);

  const scene = buildScene(bp, lighting);
  const cam = toThreeCamera(bp.camera);
  scene.background = new THREE.Color(0, 0, 0);
  const meshes: THREE.Mesh[] = [];
  // Mesh id (1-based, 0 = background) -> item index (0 = table).
  const itemOfMesh: number[] = [0];
  scene.traverse((o) => {
    if (!(o instanceof THREE.Mesh)) return;
    if (o.userData.part === 'floor') {
      o.visible = false;
      return;
    }
    let item = 0;
    for (let n: THREE.Object3D | null = o; n; n = n.parent) {
      if (typeof n.userData.itemIndex === 'number') {
        item = n.userData.itemIndex;
        break;
      }
    }
    meshes.push(o);
    itemOfMesh.push(item);
  });
  const original = meshes.map((m) => m.material as THREE.Material);
  const idMaterials = meshes.map((_, i) => {
    const id = i + 1;
    return new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB((id & 255) / 255, ((id >> 8) & 255) / 255, 0, THREE.LinearSRGBColorSpace) });
  });
  const normalMaterial = new THREE.MeshNormalMaterial();

  const read = document.createElement('canvas');
  read.width = W;
  read.height = H;
  const rctx = read.getContext('2d', { willReadFrequently: true })!;
  const pass = (): Uint8ClampedArray => {
    renderer.render(scene, cam);
    rctx.clearRect(0, 0, W, H);
    rctx.drawImage(renderer.domElement, 0, 0);
    return rctx.getImageData(0, 0, W, H).data;
  };

  const prevColorSpace = renderer.outputColorSpace;
  const prevShadows = renderer.shadowMap.enabled;
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.shadowMap.enabled = false;
  meshes.forEach((m, i) => (m.material = idMaterials[i]!));
  const ids = pass();
  scene.overrideMaterial = normalMaterial;
  const normals = pass();
  scene.overrideMaterial = null;
  renderer.outputColorSpace = prevColorSpace;
  renderer.shadowMap.enabled = prevShadows;
  meshes.forEach((m, i) => (m.material = original[i]!));

  const meshAt = (i: number) => ids[i * 4]! | (ids[i * 4 + 1]! << 8);
  const ink = new Uint8ClampedArray(W * H * 4).fill(255);
  const paint = (x: number, y: number, v: number) => {
    for (let dy = 0; dy < 3; dy++)
      for (let dx = 0; dx < 3; dx++) {
        const px = x + dx - 1,
          py = y + dy - 1;
        if (px < 0 || py < 0 || px >= W || py >= H) continue;
        const o = (py * W + px) * 4;
        if (ink[o]! > v) ink[o] = ink[o + 1] = ink[o + 2] = v;
      }
  };
  const crease = (a: number, b: number) =>
    Math.abs(normals[a * 4]! - normals[b * 4]!) + Math.abs(normals[a * 4 + 1]! - normals[b * 4 + 1]!) + Math.abs(normals[a * 4 + 2]! - normals[b * 4 + 2]!) > 90;
  for (let y = 0; y < H - 1; y++) {
    for (let x = 0; x < W - 1; x++) {
      const i = y * W + x;
      const m = meshAt(i);
      const r = i + 1,
        d = i + W;
      if (m !== meshAt(r) || m !== meshAt(d)) paint(x, y, 20);
      else if (m !== 0 && (crease(i, r) || crease(i, d))) paint(x, y, 150);
    }
  }
  rctx.putImageData(new ImageData(ink, W, H), 0, 0);

  const out = document.createElement('canvas');
  out.width = width;
  out.height = height;
  const ctx = out.getContext('2d')!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(read, 0, 0, width, height);

  // Hit map at output size, sampled from the id pass; blended edge pixels decode to no item.
  const hit = new Uint8Array(width * height);
  const sum = bp.primitives.map(() => ({ x: 0, y: 0, n: 0 }));
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const item = itemOfMesh[meshAt(y * S * W + x * S)] ?? 0;
      hit[y * width + x] = item;
      if (item > 0) {
        const c = sum[item - 1]!;
        c.x += x;
        c.y += y;
        c.n++;
      }
    }
  }
  // Markers at each item's visible center, nudged apart when two would overlap.
  const minGap = 0.035;
  const anchors: Sketch['anchors'] = sum.map((c) => (c.n > 20 ? { x: c.x / c.n / width, y: c.y / c.n / height } : null));
  const placed: Array<{ x: number; y: number }> = [];
  for (const a of anchors) {
    if (!a) continue;
    for (let k = 0; k < 8 && placed.some((p) => Math.hypot((p.x - a.x) * 16, (p.y - a.y) * 9) < minGap * 16); k++) a.x += minGap;
    placed.push(a);
  }

  idMaterials.forEach((m) => m.dispose());
  normalMaterial.dispose();
  disposeScene(scene);
  return { url: out.toDataURL('image/png'), width, height, hit, anchors };
}
