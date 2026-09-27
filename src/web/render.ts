// Renders a blueprint to the labeled proxy PNG: flat-colored real-scale
// shapes, lit by the scene's lighting preset, seen through the exact camera
// the solver used, with role labels drawn as a 2D overlay.

import * as THREE from "three";
import { Projector, toThreeCamera } from "../shared/camera";
import { BELL_GLASS, NAPKIN, VESSELS, type ProxyDef } from "../shared/registry";
import type { LightingPreset } from "../shared/rules";
import type { Blueprint, Primitive } from "../shared/types";

export const ROLE_COLORS: Record<string, string> = {
  main: "#4f9d69",
  "shared-hero": "#3f7fbf",
  sku: "#d7263d",
  glass: "#f28b82",
  side: "#e8a33d",
  "shared-side": "#6fa8dc",
  bread: "#a0703c",
  condiment: "#8e6bbf",
  accent: "#2bb3a3",
  "napkin-set": "#e9e9e4",
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
const CONTOUR_BOTTLE: Array<[number, number]> = [
  [0.0, 0], [0.9, 0], [1.0, 0.03], [0.93, 0.18], [1.0, 0.3], [0.86, 0.45], [0.8, 0.55], [0.62, 0.68], [0.42, 0.8], [0.36, 0.93], [0.4, 0.95], [0.38, 1.0], [0.0, 1.0],
];
const PET_BOTTLE: Array<[number, number]> = [
  [0.0, 0], [0.95, 0], [1.0, 0.05], [1.0, 0.62], [0.8, 0.75], [0.4, 0.88], [0.32, 0.93], [0.36, 0.95], [0.3, 1.0], [0.0, 1.0],
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
  if (p.role === "glass") return BELL_GLASS;
  if (p.role === "napkin-set") return NAPKIN[p.footprint ?? "rect"];
  if (p.role === "sku") {
    // Rebuild from the blueprint's dimensions (the SKU proxy key is catalog-specific).
    const kind = p.proxy.includes("can") ? "lathe-can" : "lathe-bottle";
    return { kind, radius: p.dimensions.width / 2, height: p.dimensions.height, tall: true };
  }
  return VESSELS[p.proxy as keyof typeof VESSELS] ?? { kind: "cylinder", radius: p.dimensions.width / 2, height: p.dimensions.height };
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
  const color = ROLE_COLORS[p.role] ?? "#999";
  const vesselH = def.height;
  const foodH = Math.max(0, p.dimensions.height - vesselH);
  const isPet = p.proxy.includes("pet");

  if (def.kind === "lathe-bottle") {
    g.add(mesh(lathe(isPet ? PET_BOTTLE : CONTOUR_BOTTLE, def.radius!, def.height), color));
  } else if (def.kind === "lathe-can") {
    const c = mesh(new THREE.CylinderGeometry(def.radius! * 0.88, def.radius! * 0.9, def.height, 40), color);
    c.position.y = def.height / 2;
    g.add(c);
  } else if (def.kind === "lathe-bell-glass") {
    g.add(mesh(lathe(BELL, def.radius!, def.height), color, { opacity: 0.92 }));
  } else if (def.kind === "napkin") {
    const w = def.width!,
      d = def.depth!,
      h = def.height;
    let nap: THREE.Mesh;
    if (p.footprint === "triangle") {
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
    for (const [dx, len] of [
      [-w * 0.22, 0.19],
      [w * 0.22, 0.2],
    ] as const) {
      const u = mesh(new THREE.BoxGeometry(0.018, 0.006, len), "#b8bcc2");
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
  scene.background = new THREE.Color("#8a8d91");
  const { width: W, depth: D } = bp.table;

  const top = new THREE.Mesh(new THREE.BoxGeometry(W, 0.04, D), new THREE.MeshStandardMaterial({ color: "#f4f4f2", roughness: 0.9 }));
  top.position.set(0, -0.02, -D / 2);
  top.receiveShadow = true;
  scene.add(top);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: "#7d8085", roughness: 1 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.75;
  scene.add(floor);

  for (const p of bp.primitives) scene.add(buildItem(p));

  // Key light from the preset: azimuth 0 = behind the camera, 180 = behind the table, negative = diner's left.
  const k = lighting.rig.key;
  const az = (k.azimuth_deg * Math.PI) / 180;
  const el = (k.elevation_deg * Math.PI) / 180;
  const center = new THREE.Vector3(bp.camera.target[0], 0, -D / 2);
  // Color temperature is only hinted at: role colors must stay recognizable in the proxy.
  const tint = (kelvin: number) => kelvinToColor(kelvin).lerp(new THREE.Color("#ffffff"), 0.6);
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
  scene.add(new THREE.HemisphereLight(tint(lighting.rig.ambient_kelvin), "#666", 0.6 + lighting.rig.fill_ratio * 1.6));
  return scene;
}

/** Where each label is pinned: SKU on its lower body (below the logo box), others at their visual center. */
function labelAnchor(p: Primitive): number {
  if (p.role === "sku") return p.dimensions.height * 0.22;
  if (p.role === "glass") return p.dimensions.height * 0.3;
  return p.dimensions.height * 0.6;
}

function drawLabels(ctx: CanvasRenderingContext2D, bp: Blueprint, w: number, h: number) {
  const proj = new Projector(bp.camera);
  const size = Math.round(h * 0.026);
  ctx.font = `700 ${size}px "Inter", "Helvetica Neue", Arial, sans-serif`;
  ctx.textBaseline = "middle";
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
    let x = s.x * w - bw / 2;
    let y = (1 - s.y) * h - bh / 2;
    // Nudge down until it doesn't collide with an earlier label.
    for (let tries = 0; tries < 12 && placed.some((q) => x < q.x1 && q.x0 < x + bw && y < q.y1 && q.y0 < y + bh); tries++) y += bh * 0.6;
    x = Math.max(4, Math.min(w - bw - 4, x));
    y = Math.max(4, Math.min(h - bh - 4, y));
    placed.push({ x0: x, y0: y, x1: x + bw, y1: y + bh });
    ctx.fillStyle = "rgba(16, 20, 40, 0.86)";
    const r = bh * 0.22;
    ctx.beginPath();
    ctx.roundRect(x, y, bw, bh, r);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.fillText(text, x + padX, y + bh / 2 + 1);
  }
}

export interface RenderOptions {
  width?: number;
  labels?: boolean;
  guides?: boolean;
}

let sharedRenderer: THREE.WebGLRenderer | null = null;

/** Render the proxy to a PNG data URL (16:9). */
export function renderProxy(bp: Blueprint, lighting: LightingPreset, opts: RenderOptions = {}): string {
  const width = opts.width ?? 1920;
  const height = Math.round(width / (16 / 9));
  if (!sharedRenderer) {
    sharedRenderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    sharedRenderer.shadowMap.enabled = true;
    sharedRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sharedRenderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  const renderer = sharedRenderer;
  renderer.setPixelRatio(1);
  renderer.setSize(width, height, false);
  const scene = buildScene(bp, lighting);
  const cam = toThreeCamera(bp.camera);
  renderer.render(scene, cam);

  const out = document.createElement("canvas");
  out.width = width;
  out.height = height;
  const ctx = out.getContext("2d")!;
  ctx.drawImage(renderer.domElement, 0, 0);
  if (opts.guides) {
    ctx.strokeStyle = "rgba(255,255,255,0.85)";
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
  scene.traverse((o) => {
    if (o instanceof THREE.Mesh) {
      o.geometry.dispose();
      (o.material as THREE.Material).dispose();
    }
  });
  return out.toDataURL("image/png");
}
