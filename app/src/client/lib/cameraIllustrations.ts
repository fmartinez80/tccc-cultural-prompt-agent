// Line-art illustrations of the camera "look" x "angle" grid, used by
// CameraStep (Look cards) and AnglePicker (Angle cards) so an operator can
// see roughly what each combination frames without reading a focal length or
// a pitch number. This is a fixed, generic scene — a table setting with room
// context around it — that never depends on the user's actual blueprint.
//
// Normally served as static PNGs pre-rendered by scripts/render-camera-illustrations.ts
// (public/camera/, listed in cameraIllustrationSet.json). When a look or angle no
// longer matches the numbers a file was drawn with, it falls back to rendering
// lazily, once per (look, angle) pair, to an offscreen
// WebGLRenderer: a geometry pass encodes view-space normals + a foreground/
// background region flag into a render target (with an attached depth
// texture), then a fullscreen post pass Sobel-detects edges from the depth
// and normal discontinuities and draws them as dark lines on white, fading
// or dimming the background so the subject reads first. Results (data URLs)
// are cached at module level, keyed `${look}|${angle}`, so re-mounting a
// picker doesn't re-render.

import * as THREE from 'three';
import { useEffect, useState } from 'react';
import { ASPECT, makeCameraParams, toThreeCamera } from '../../shared/camera.ts';
import PRERENDERED from './cameraIllustrationSet.json';

// ---------------------------------------------------------------------------
// Fallbacks for the numbers `trpc.config` exposes per look/angle
// (`looks[].focalMm`, `angles[].pitchDeg`), mirroring rules/camera-options.json
// `hidden.focal_length_mm` / `hidden.pitch_deg`. Callers should pass the real
// values off the config response; these only cover a config load that hasn't
// resolved yet or an unrecognized id.
// ---------------------------------------------------------------------------
export const LOOK_FOCAL_MM_FALLBACK: Record<string, number> = {
  'close-hero': 50,
  'table-context': 35,
  'wide-scene': 15,
};
export const ANGLE_PITCH_DEG_FALLBACK: Record<string, number> = {
  low: 15,
  'diners-eye': 30,
  high: 45,
};
const DEFAULT_FOCAL_MM = LOOK_FOCAL_MM_FALLBACK['table-context']!;
const DEFAULT_PITCH_DEG = ANGLE_PITCH_DEG_FALLBACK['diners-eye']!;

export const WIDTH = 640;
export const HEIGHT = Math.round(WIDTH / ASPECT);
const LINE_COLOR = new THREE.Color(0x262626);

// ---------------------------------------------------------------------------
// Fixed generic scene, in meters, using the same world axes as shared/camera.ts:
// x = lateral, y = up (tabletop at y = 0), d = depth from the table's front
// edge (world z = -d). One scene serves every look; only the camera framing
// changes, so table edges genuinely fall out of frame for close-hero instead
// of being a different, smaller model.
// ---------------------------------------------------------------------------
const TABLE_W = 1.0;
export const TABLE_D = 0.78;
const TABLE_THICK = 0.045;
const TABLE_LEG_H = 0.72;
const TABLE_LEG_SIZE = 0.045;
const FLOOR_Y = -(TABLE_THICK + TABLE_LEG_H);

const PLATE_R = 0.15;
const PLATE_H = 0.02;
const PLATE_D = 0.4;
const MOUND_H = 0.05;
const BOWL_R = 0.06;
const BOWL_H = 0.045;
const BOWL_X = 0.27;
const BOWL_D = 0.34;
const RAMEKIN_R = 0.04;
const RAMEKIN_H = 0.03;
const RAMEKIN_X = 0.22;
const RAMEKIN_D = 0.48;
const BOTTLE_R = 0.035;
const BOTTLE_H = 0.28;
const BOTTLE_X = 0.17; // top right of the plate, where the product sits in real layouts
const BOTTLE_D = PLATE_D + 0.12;
const NAPKIN_W = 0.16;
const NAPKIN_D_SIZE = 0.22;
const NAPKIN_THICK = 0.008;
const NAPKIN_X = -0.3;
const NAPKIN_D = 0.32;

const WALL_D = TABLE_D + 1.6;
const WALL_W = 3.4;
const WALL_H = 2.4;
const WALL_THICK = 0.05;
const CEILING_Y = FLOOR_Y + WALL_H;

const CHAIR_SEAT_W = 0.4;
const CHAIR_SEAT_D = 0.4;
const CHAIR_SEAT_THICK = 0.04;
const CHAIR_SEAT_Y = -0.3;
const CHAIR_BACK_H = 0.45;
const CHAIR_D = TABLE_D + 0.22;

const WINDOW_W = 0.9;
const WINDOW_H = 1.1;
const WINDOW_X = -0.55;
const WINDOW_Y_BOTTOM = 0.15;
const WINDOW_FRAME_T = 0.045;

const PLANT_X = 1.25;
const PLANT_D = WALL_D - 0.35;

const SHELF_X = -1.5;
const SHELF_D = WALL_D - 0.08;

const LAMP_X = 0;
const LAMP_D = PLATE_D;
const LAMP_SHADE_Y = 0.58;
const LAMP_SHADE_H = 0.12;

// Rough contour-bottle profile: [radius fraction, height fraction], base to lip.
const BOTTLE_PROFILE: Array<[number, number]> = [
  [0, 0],
  [0.85, 0],
  [0.9, 0.05],
  [0.85, 0.35],
  [0.85, 0.55],
  [0.55, 0.68],
  [0.32, 0.8],
  [0.3, 0.92],
  [0.34, 0.96],
  [0.3, 1.0],
  [0, 1.0],
];

function latheGeometry(profile: Array<[number, number]>, r: number, h: number): THREE.BufferGeometry {
  return new THREE.LatheGeometry(
    profile.map(([pr, ph]) => new THREE.Vector2(pr * r, ph * h)),
    32,
  );
}

// ---------------------------------------------------------------------------
// Per-look camera framing: distance and look-at point are fixed per look (so
// the three angles for a look only differ by pitch, at the same distance);
// the look's focal length (passed in by the caller) sets the field of view.
// close-hero fades line darkness past the table's far edge instead of using
// a flat background weight, so the background genuinely "melts away".
// ---------------------------------------------------------------------------
export type LookFraming = {
  distance: number;
  targetX: number;
  targetD: number;
  fadeWithDistance: boolean;
  backgroundWeight: number;
  fadeRange: number;
};

export const LOOK_FRAMING: Record<string, LookFraming> = {
  'close-hero': {
    distance: 0.58,
    targetX: BOTTLE_X / 2,
    targetD: (PLATE_D + BOTTLE_D) / 2,
    fadeWithDistance: true,
    backgroundWeight: 1,
    fadeRange: 0.45,
  },
  'table-context': {
    distance: 1.5,
    targetX: 0,
    targetD: PLATE_D - 0.05,
    fadeWithDistance: false,
    backgroundWeight: 0.55,
    fadeRange: 0,
  },
  'wide-scene': {
    distance: 3.1,
    targetX: 0,
    targetD: PLATE_D - 0.1,
    fadeWithDistance: false,
    backgroundWeight: 0.55,
    fadeRange: 0,
  },
};
const DEFAULT_FRAMING = LOOK_FRAMING['table-context']!;

// ---------------------------------------------------------------------------
// Geometry pass: each mesh is either the subject (table + meal — always
// drawn at full line weight) or background room dressing (chairs, wall,
// window, plant, lamp, floor, shelf — dimmed or faded by the post pass). The
// fragment shader packs a view-space normal into rgb and the region flag
// into alpha; two singleton materials (never disposed — cheap, reused across
// every render) carry that flag so per-mesh geometry is all that needs
// creating and disposing per render.
// ---------------------------------------------------------------------------
const REGION_VERTEX = `
varying vec3 vViewNormal;

void main() {
  vViewNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const REGION_FRAGMENT = `
uniform float uRegion;
varying vec3 vViewNormal;

void main() {
  vec3 n = normalize(vViewNormal) * 0.5 + 0.5;
  gl_FragColor = vec4(n, uRegion);
}
`;

const subjectMaterial = new THREE.ShaderMaterial({
  uniforms: { uRegion: { value: 0 } },
  vertexShader: REGION_VERTEX,
  fragmentShader: REGION_FRAGMENT,
});
const backgroundMaterial = new THREE.ShaderMaterial({
  uniforms: { uRegion: { value: 1 } },
  vertexShader: REGION_VERTEX,
  fragmentShader: REGION_FRAGMENT,
});

type PartOpts = {
  position?: [number, number, number];
  rotationY?: number;
  scale?: [number, number, number];
};

function part(geo: THREE.BufferGeometry, region: 'subject' | 'background', opts: PartOpts = {}): THREE.Mesh {
  const mesh = new THREE.Mesh(geo, region === 'subject' ? subjectMaterial : backgroundMaterial);
  if (opts.position) mesh.position.set(...opts.position);
  if (opts.rotationY) mesh.rotation.y = opts.rotationY;
  if (opts.scale) mesh.scale.set(...opts.scale);
  return mesh;
}

export function buildScene(): THREE.Group {
  const group = new THREE.Group();

  // --- Table: top slab, visible front edge (the slab's own front face), 4 legs.
  group.add(part(new THREE.BoxGeometry(TABLE_W, TABLE_THICK, TABLE_D), 'subject', { position: [0, -TABLE_THICK / 2, -TABLE_D / 2] }));
  const legInset = 0.05;
  for (const sx of [-1, 1]) {
    for (const sd of [legInset, TABLE_D - legInset]) {
      group.add(
        part(new THREE.BoxGeometry(TABLE_LEG_SIZE, TABLE_LEG_H, TABLE_LEG_SIZE), 'subject', {
          position: [sx * (TABLE_W / 2 - legInset), -(TABLE_THICK + TABLE_LEG_H / 2), -sd],
        }),
      );
    }
  }

  // --- The meal: dinner plate + mound, side bowl, ramekin, bottle, napkin + fork.
  group.add(part(new THREE.CylinderGeometry(PLATE_R, PLATE_R * 0.94, PLATE_H, 40), 'subject', { position: [0, PLATE_H / 2, -PLATE_D] }));
  group.add(
    part(new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), 'subject', {
      position: [0, PLATE_H, -PLATE_D],
      scale: [PLATE_R * 0.55, MOUND_H, PLATE_R * 0.55],
    }),
  );
  group.add(part(new THREE.CylinderGeometry(BOWL_R, BOWL_R * 0.85, BOWL_H, 32), 'subject', { position: [BOWL_X, BOWL_H / 2, -BOWL_D] }));
  group.add(
    part(new THREE.CylinderGeometry(RAMEKIN_R, RAMEKIN_R * 0.85, RAMEKIN_H, 24), 'subject', {
      position: [RAMEKIN_X, RAMEKIN_H / 2, -RAMEKIN_D],
    }),
  );
  group.add(part(latheGeometry(BOTTLE_PROFILE, BOTTLE_R, BOTTLE_H), 'subject', { position: [BOTTLE_X, 0, -BOTTLE_D] }));
  group.add(
    part(new THREE.BoxGeometry(NAPKIN_W, NAPKIN_THICK, NAPKIN_D_SIZE), 'subject', { position: [NAPKIN_X, NAPKIN_THICK / 2, -NAPKIN_D] }),
  );
  group.add(
    part(new THREE.BoxGeometry(0.012, 0.006, 0.17), 'subject', {
      position: [NAPKIN_X + 0.03, NAPKIN_THICK + 0.006, -NAPKIN_D],
    }),
  );

  // --- Room context: two chairs at the far side of the table.
  for (const sx of [-1, 1]) {
    group.add(
      part(new THREE.BoxGeometry(CHAIR_SEAT_W, CHAIR_SEAT_THICK, CHAIR_SEAT_D), 'background', {
        position: [sx * 0.28, CHAIR_SEAT_Y, -CHAIR_D],
      }),
    );
    group.add(
      part(new THREE.BoxGeometry(CHAIR_SEAT_W, CHAIR_BACK_H, 0.035), 'background', {
        position: [sx * 0.28, CHAIR_SEAT_Y + CHAIR_BACK_H / 2, -(CHAIR_D + CHAIR_SEAT_D / 2)],
      }),
    );
  }

  // --- Back wall with a window (frame + mullions).
  group.add(
    part(new THREE.BoxGeometry(WALL_W, WALL_H, WALL_THICK), 'background', {
      position: [0, FLOOR_Y + WALL_H / 2, -WALL_D],
    }),
  );
  const winZ = -(WALL_D - 0.03);
  const winTop = WINDOW_Y_BOTTOM + WINDOW_H;
  group.add(part(new THREE.BoxGeometry(WINDOW_W, WINDOW_FRAME_T, 0.02), 'background', { position: [WINDOW_X, WINDOW_Y_BOTTOM, winZ] }));
  group.add(part(new THREE.BoxGeometry(WINDOW_W, WINDOW_FRAME_T, 0.02), 'background', { position: [WINDOW_X, winTop, winZ] }));
  group.add(
    part(new THREE.BoxGeometry(WINDOW_FRAME_T, WINDOW_H, 0.02), 'background', {
      position: [WINDOW_X - WINDOW_W / 2, WINDOW_Y_BOTTOM + WINDOW_H / 2, winZ],
    }),
  );
  group.add(
    part(new THREE.BoxGeometry(WINDOW_FRAME_T, WINDOW_H, 0.02), 'background', {
      position: [WINDOW_X + WINDOW_W / 2, WINDOW_Y_BOTTOM + WINDOW_H / 2, winZ],
    }),
  );
  group.add(
    part(new THREE.BoxGeometry(WINDOW_FRAME_T * 0.6, WINDOW_H, 0.015), 'background', {
      position: [WINDOW_X, WINDOW_Y_BOTTOM + WINDOW_H / 2, winZ],
    }),
  );
  group.add(
    part(new THREE.BoxGeometry(WINDOW_W, WINDOW_FRAME_T * 0.6, 0.015), 'background', {
      position: [WINDOW_X, WINDOW_Y_BOTTOM + WINDOW_H / 2, winZ],
    }),
  );

  // --- Potted plant.
  group.add(part(new THREE.CylinderGeometry(0.12, 0.09, 0.22, 16), 'background', { position: [PLANT_X, FLOOR_Y + 0.11, -PLANT_D] }));
  group.add(part(new THREE.IcosahedronGeometry(0.22, 1), 'background', { position: [PLANT_X, FLOOR_Y + 0.4, -PLANT_D] }));

  // --- Pendant lamp above the table.
  const shadeBottomY = LAMP_SHADE_Y - LAMP_SHADE_H / 2;
  const cordLen = CEILING_Y - (LAMP_SHADE_Y + LAMP_SHADE_H / 2);
  group.add(
    part(new THREE.CylinderGeometry(0.11, 0.055, LAMP_SHADE_H, 20, 1, true), 'background', {
      position: [LAMP_X, LAMP_SHADE_Y, -LAMP_D],
    }),
  );
  group.add(
    part(new THREE.CylinderGeometry(0.006, 0.006, cordLen, 6), 'background', {
      position: [LAMP_X, shadeBottomY + LAMP_SHADE_H + cordLen / 2, -LAMP_D],
    }),
  );

  // --- Floor and a shelf unit, so the wide look reads as a room.
  const floorNearD = -0.6;
  const floorFarD = WALL_D;
  group.add(
    part(new THREE.BoxGeometry(WALL_W, 0.02, floorFarD - floorNearD), 'background', {
      position: [0, FLOOR_Y - 0.01, -(floorNearD + floorFarD) / 2],
    }),
  );
  const shelfH = 1.4;
  const shelfW = 0.6;
  for (const sx of [-shelfW / 2, shelfW / 2]) {
    group.add(part(new THREE.BoxGeometry(0.03, shelfH, 0.28), 'background', { position: [SHELF_X + sx, FLOOR_Y + shelfH / 2, -SHELF_D] }));
  }
  for (const sy of [0.35, 0.75, 1.15]) {
    group.add(part(new THREE.BoxGeometry(shelfW, 0.03, 0.28), 'background', { position: [SHELF_X, FLOOR_Y + sy, -SHELF_D] }));
  }
  group.add(part(new THREE.BoxGeometry(0.16, 0.16, 0.16), 'background', { position: [SHELF_X - 0.12, FLOOR_Y + 0.35 + 0.1, -SHELF_D] }));
  group.add(part(new THREE.BoxGeometry(0.12, 0.24, 0.1), 'background', { position: [SHELF_X + 0.1, FLOOR_Y + 0.75 + 0.14, -SHELF_D] }));

  return group;
}

function disposeGroup(root: THREE.Object3D) {
  root.traverse((o) => {
    if (o instanceof THREE.Mesh) o.geometry.dispose();
  });
}

// ---------------------------------------------------------------------------
// Fullscreen post pass: Sobel-ish edge detect on depth (silhouettes) and
// view-space normals (creases), composited as dark lines on white. The
// region flag packed into the geometry pass's alpha channel dims background
// lines relative to the subject; close-hero instead fades lines toward white
// past the table's far edge, by camera distance, for a "melts away" background.
// ---------------------------------------------------------------------------
const QUAD_VERTEX = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const QUAD_FRAGMENT = `
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform vec2 uTexel;
uniform float uCameraNear;
uniform float uCameraFar;
uniform vec3 uLineColor;
uniform float uEdgeThreshold;
uniform float uFadeMode;
uniform float uBackgroundWeight;
uniform float uFadeStartDist;
uniform float uFadeRange;

varying vec2 vUv;

float linearDepth(vec2 uv) {
  float z = texture2D(tDepth, uv).x;
  float viewZ = (uCameraNear * uCameraFar) / ((uCameraFar - uCameraNear) * z - uCameraFar);
  return -viewZ;
}

void main() {
  vec2 uv = vUv;
  float d0 = linearDepth(uv);
  float dxp = linearDepth(uv + vec2(uTexel.x, 0.0));
  float dxm = linearDepth(uv - vec2(uTexel.x, 0.0));
  float dyp = linearDepth(uv + vec2(0.0, uTexel.y));
  float dym = linearDepth(uv - vec2(0.0, uTexel.y));
  float dx = dxp - dxm;
  float dy = dyp - dym;
  float depthEdge = clamp((abs(dx) + abs(dy)) * 6.0, 0.0, 1.0);

  vec4 n0 = texture2D(tNormal, uv);
  vec3 nx1 = texture2D(tNormal, uv + vec2(uTexel.x, 0.0)).rgb;
  vec3 nx2 = texture2D(tNormal, uv - vec2(uTexel.x, 0.0)).rgb;
  vec3 ny1 = texture2D(tNormal, uv + vec2(0.0, uTexel.y)).rgb;
  vec3 ny2 = texture2D(tNormal, uv - vec2(0.0, uTexel.y)).rgb;
  float normalEdge = clamp((length(nx1 - nx2) + length(ny1 - ny2)) * 4.0, 0.0, 1.0);

  float edge = max(depthEdge, normalEdge);
  edge = edge < uEdgeThreshold ? 0.0 : edge;

  float region = n0.a;
  float weight;
  if (uFadeMode > 0.5) {
    float t = clamp((d0 - uFadeStartDist) / max(uFadeRange, 0.0001), 0.0, 1.0);
    weight = mix(1.0, 0.08, t);
  } else {
    weight = mix(1.0, uBackgroundWeight, region);
  }

  vec3 color = mix(vec3(1.0), uLineColor, edge * weight);
  gl_FragColor = vec4(color, 1.0);
}
`;

function renderCameraFrame(focalMm: number, pitchDeg: number, framing: LookFraming): string {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.round(WIDTH * dpr);
  const h = Math.round(HEIGHT * dpr);

  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(w, h, false);

  const depthTexture = new THREE.DepthTexture(w, h);
  const rt = new THREE.WebGLRenderTarget(w, h, { depthBuffer: true, depthTexture });

  const scene = new THREE.Scene();
  const sceneGroup = buildScene();
  scene.add(sceneGroup);

  const camParams = makeCameraParams(focalMm, pitchDeg, framing.targetX, framing.targetD, framing.distance);
  const cam = toThreeCamera(camParams);

  const quadScene = new THREE.Scene();
  const fadeStartDist =
    framing.fadeWithDistance ? cam.position.distanceTo(new THREE.Vector3(framing.targetX, 0, -TABLE_D)) : 0;
  const quadMaterial = new THREE.ShaderMaterial({
    uniforms: {
      tNormal: { value: rt.texture },
      tDepth: { value: rt.depthTexture },
      uTexel: { value: new THREE.Vector2(1 / w, 1 / h) },
      uCameraNear: { value: cam.near },
      uCameraFar: { value: cam.far },
      uLineColor: { value: LINE_COLOR },
      uEdgeThreshold: { value: 0.06 },
      uFadeMode: { value: framing.fadeWithDistance ? 1 : 0 },
      uBackgroundWeight: { value: framing.backgroundWeight },
      uFadeStartDist: { value: fadeStartDist },
      uFadeRange: { value: framing.fadeRange },
    },
    vertexShader: QUAD_VERTEX,
    fragmentShader: QUAD_FRAGMENT,
  });
  const quadGeometry = new THREE.PlaneGeometry(2, 2);
  const quad = new THREE.Mesh(quadGeometry, quadMaterial);
  quadScene.add(quad);
  const quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

  try {
    renderer.setRenderTarget(rt);
    renderer.render(scene, cam);

    renderer.setRenderTarget(null);
    renderer.render(quadScene, quadCamera);

    return renderer.domElement.toDataURL('image/png');
  } finally {
    disposeGroup(sceneGroup);
    quadGeometry.dispose();
    quadMaterial.dispose();
    rt.dispose();
    depthTexture.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
  }
}

/**
 * The static file pre-rendered by scripts/render-camera-illustrations.ts (public/camera/), when the
 * look/angle still has the focal length and pitch it was drawn with; null means render it live.
 */
function prerenderedSrc(lookId: string, angleId: string, focalMm?: number, pitchDeg?: number): string | null {
  const pre = (PRERENDERED as Record<string, { focalMm: number; pitchDeg: number; src: string }>)[`${lookId}|${angleId}`];
  const focal = focalMm ?? LOOK_FOCAL_MM_FALLBACK[lookId] ?? DEFAULT_FOCAL_MM;
  const pitch = pitchDeg ?? ANGLE_PITCH_DEG_FALLBACK[angleId] ?? DEFAULT_PITCH_DEG;
  return pre && pre.focalMm === focal && pre.pitchDeg === pitch ? pre.src : null;
}

const cache = new Map<string, string>();
const inflight = new Map<string, Promise<string>>();

/**
 * Resolves to a cached (or freshly rendered) line-art illustration data URL
 * for the given look/angle pair. `focalMm`/`pitchDeg` should come from
 * `trpc.config`'s `looks[].focalMm` / `angles[].pitchDeg`; when either is
 * missing (config still loading, or an id this module doesn't recognize)
 * the fallback maps above stand in.
 */
export function loadCameraIllustration(lookId: string, angleId: string, focalMm?: number, pitchDeg?: number): Promise<string> {
  const key = `${lookId}|${angleId}`;
  const cached = cache.get(key);
  if (cached) return Promise.resolve(cached);

  const pre = prerenderedSrc(lookId, angleId, focalMm, pitchDeg);
  if (pre) return Promise.resolve(pre);
  const resolvedFocal = focalMm ?? LOOK_FOCAL_MM_FALLBACK[lookId] ?? DEFAULT_FOCAL_MM;
  const resolvedPitch = pitchDeg ?? ANGLE_PITCH_DEG_FALLBACK[angleId] ?? DEFAULT_PITCH_DEG;

  let promise = inflight.get(key);
  if (!promise) {
    promise = (async () => {
      // Yield once so the caller's loading state paints before the render
      // call (synchronous, if brief) blocks the main thread.
      await new Promise((resolve) => setTimeout(resolve, 0));
      const framing = LOOK_FRAMING[lookId] ?? DEFAULT_FRAMING;
      const url = renderCameraFrame(resolvedFocal, resolvedPitch, framing);
      cache.set(key, url);
      return url;
    })();
    inflight.set(key, promise);
    void promise.finally(() => inflight.delete(key));
  }
  return promise;
}

export type CameraIllustrationState = { status: 'loading' } | { status: 'ready'; url: string } | { status: 'error' };

/** React hook wrapper around `loadCameraIllustration`, for the Look and Angle cards. */
export function useCameraIllustration(lookId: string, angleId: string, focalMm?: number, pitchDeg?: number): CameraIllustrationState {
  const pre = prerenderedSrc(lookId, angleId, focalMm, pitchDeg);
  const [state, setState] = useState<CameraIllustrationState>({ status: 'loading' });

  useEffect(() => {
    if (pre) return;
    let cancelled = false;
    setState({ status: 'loading' });
    loadCameraIllustration(lookId, angleId, focalMm, pitchDeg).then(
      (url) => {
        if (!cancelled) setState({ status: 'ready', url });
      },
      () => {
        if (!cancelled) setState({ status: 'error' });
      },
    );
    return () => {
      cancelled = true;
    };
  }, [lookId, angleId, focalMm, pitchDeg, pre]);

  return pre ? { status: 'ready', url: pre } : state;
}
