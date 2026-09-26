// Runs in headless Chromium. Builds a proxy scene from layout.json and renders
// clean + labeled frames plus a flat ID pass used for occlusion and visual mass.
import * as THREE from 'three';

const COLORS = {
  background: 0x6f7072,
  table: 0xf4f4f4,
  tableSide: 0xbdbdbd,
  vessel: 0x2f2f31,
  board: 0x4a4a4c,
  sheet: 0xd9d9d9,
  food: 0xb4b4b4,
  sku: 0xf6f6f6,
  prop: 0xe8e8e8,
};
const LABEL_FILL = { 1: 'rgba(52, 52, 110, 0.88)', 2: 'rgba(92, 92, 160, 0.85)', 3: 'rgba(128, 128, 196, 0.82)' };

const std = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0, ...opts });

// Coke contour bottle, normalized profile [radius fraction, height fraction].
const CONTOUR = [
  [0, 0], [0.9, 0], [0.97, 0.02], [1.0, 0.07], [0.93, 0.16], [0.86, 0.24], [0.9, 0.32], [0.99, 0.41], [1.0, 0.47],
  [0.93, 0.55], [0.72, 0.64], [0.5, 0.74], [0.4, 0.83], [0.37, 0.93], [0.43, 0.95], [0.43, 0.985], [0.38, 1.0], [0, 1.0],
];
function lathe(profile, r, h, segs = 64) {
  return new THREE.LatheGeometry(profile.map(([a, b]) => new THREE.Vector2(a * r, b * h)), segs);
}
function roundPlate(r, h) {
  return lathe([[0, 0], [0.78, 0], [0.84, 0.35], [1.0, 1.0], [0.97, 1.0], [0.8, 0.45], [0, 0.45]], r, h);
}
function bowl(r, h) {
  return lathe([[0, 0], [0.58, 0], [0.62, 0.08], [0.9, 0.6], [1.0, 1.0], [0.94, 1.0], [0.84, 0.62], [0.55, 0.14], [0, 0.14]], r, h);
}
function ramekin(r, h) {
  return lathe([[0, 0], [0.92, 0], [1.0, 0.1], [1.0, 1.0], [0.88, 1.0], [0.88, 0.18], [0, 0.18]], r, h);
}
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function foodMesh(food, top, o, reg) {
  const f = reg[food];
  const mat = std(COLORS.food, { roughness: 0.8 });
  const g = new THREE.Group();
  if (f.kind === 'roll') {
    const m = new THREE.Mesh(new THREE.CapsuleGeometry(f.diameter / 2, f.length - f.diameter, 8, 24), mat);
    m.rotation.z = Math.PI / 2;
    m.scale.set(0.85, 1, 1); // flatten slightly (scale x is the capsule's radial axis after rotation)
    m.position.y = top + (f.diameter / 2) * 0.85;
    g.add(m);
  } else if (f.kind === 'bun') {
    const bottom = new THREE.Mesh(new THREE.CylinderGeometry(f.diameter / 2, f.diameter / 2 * 0.95, f.h * 0.3, 40), mat);
    bottom.position.y = top + f.h * 0.15;
    const filling = new THREE.Mesh(new THREE.CylinderGeometry(f.diameter / 2 * 1.04, f.diameter / 2 * 1.04, f.h * 0.25, 40), std(0x9a9a9a, { roughness: 0.9 }));
    filling.position.y = top + f.h * 0.42;
    const crown = new THREE.Mesh(new THREE.SphereGeometry(f.diameter / 2, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), mat);
    crown.scale.y = (f.h * 0.48) / (f.diameter / 2);
    crown.position.y = top + f.h * 0.52;
    g.add(bottom, filling, crown);
  } else if (f.kind === 'fries') {
    const rand = rng(7);
    const r = o.r * 0.7;
    for (let i = 0; i < 70; i++) {
      const a = rand() * Math.PI * 2, d = Math.sqrt(rand()) * r;
      const len = f.h * (0.6 + rand() * 0.8);
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.009, len, 0.009), mat);
      m.position.set(Math.cos(a) * d, top + len * 0.35, Math.sin(a) * d);
      m.rotation.set((rand() - 0.5) * 1.1, rand() * Math.PI, (rand() - 0.5) * 1.1);
      g.add(m);
    }
  } else if (f.kind === 'mound') {
    const r = (o.round ? o.r : Math.min(o.w, o.d) / 2) * 0.8;
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), mat);
    m.scale.y = f.h / r;
    m.position.y = top;
    g.add(m);
  }
  return g;
}

function objectMesh(o, reg) {
  const v = reg[o.vessel];
  const g = new THREE.Group();
  let top = 0;
  if (v.kind === 'bottle') g.add(new THREE.Mesh(lathe(CONTOUR, v.diameter / 2, v.h), std(COLORS.sku, { roughness: 0.18 })));
  else if (v.kind === 'rectPlate' || v.kind === 'board' || v.kind === 'sheet' || v.kind === 'slab') {
    const color = v.kind === 'board' ? COLORS.board : v.kind === 'sheet' ? COLORS.sheet : v.kind === 'slab' ? COLORS.prop : COLORS.vessel;
    const m = new THREE.Mesh(new THREE.BoxGeometry(v.w, v.h, v.d), std(color));
    m.position.y = v.h / 2;
    g.add(m);
    top = v.h;
  } else if (v.kind === 'bowl' || v.kind === 'ramekin') {
    g.add(new THREE.Mesh((v.kind === 'bowl' ? bowl : ramekin)(v.diameter / 2, v.h), std(COLORS.vessel)));
    top = v.h * 0.55;
  } else {
    g.add(new THREE.Mesh(roundPlate(v.diameter / 2, v.h), std(COLORS.vessel)));
    top = v.h * 0.45;
  }
  if (o.food) g.add(foodMesh(o.food, top, o, reg));
  g.position.set(o.x, 0, o.z);
  g.rotation.y = (o.yaw * Math.PI) / 180;
  g.traverse((m) => {
    if (m.isMesh) {
      m.castShadow = true;
      m.receiveShadow = true;
    }
  });
  return g;
}

function buildScene(layout, reg) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(COLORS.background);
  const t = layout.table;
  const table = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.d), [
    std(COLORS.tableSide), std(COLORS.tableSide), std(COLORS.table, { roughness: 0.7 }), std(COLORS.tableSide), std(COLORS.tableSide), std(COLORS.tableSide),
  ]);
  table.position.y = -t.h / 2;
  table.receiveShadow = true;
  scene.add(table);
  const legs = new THREE.Mesh(new THREE.BoxGeometry(t.w * 0.9, 0.7, t.d * 0.9), std(0x565658));
  legs.position.y = -t.h - 0.35;
  scene.add(legs);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x9a9a9a, 1.6));
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.position.set(1.6, 2.2, 0.5); // from the right, as in the reference template
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  Object.assign(sun.shadow.camera, { left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 6 });
  sun.shadow.bias = -0.0004;
  sun.shadow.radius = 4;
  scene.add(sun);

  const meshes = {};
  for (const o of layout.objects) {
    const m = objectMesh(o, reg);
    m.userData.label = o.label;
    meshes[o.label] = m;
    scene.add(m);
  }
  return { scene, meshes, table, legs };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export async function render({ layout, registry: reg, width, height }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  document.body.appendChild(renderer.domElement);

  const cam = layout.camera;
  const camera = new THREE.PerspectiveCamera(cam.vfovDeg, width / height, 0.02, 20);
  camera.position.set(...cam.position);
  camera.lookAt(new THREE.Vector3(...cam.target));
  camera.updateMatrixWorld();

  const { scene, meshes, table, legs } = buildScene(layout, reg);
  renderer.render(scene, camera);
  const clean = renderer.domElement.toDataURL('image/png');

  // Labels: 2D overlay at each object's projected center, never occluded.
  const c2 = document.createElement('canvas');
  c2.width = width;
  c2.height = height;
  const ctx = c2.getContext('2d');
  const img = new Image();
  img.src = clean;
  await img.decode();
  ctx.drawImage(img, 0, 0);
  const font = Math.round(height * 0.05);
  ctx.font = `700 ${font}px "DejaVu Sans", Arial, sans-serif`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  const boxes = [];
  const order = [...layout.objects].sort((a, b) => a.layer - b.layer);
  for (const o of order) {
    const p = new THREE.Vector3(o.x, o.role === 'SKU' ? o.h * 0.45 : o.h * 0.6, o.z).project(camera);
    const w = ctx.measureText(o.label).width + font * 1.4, h = font * 1.45;
    let x = (p.x * 0.5 + 0.5) * width - w / 2, y = (-p.y * 0.5 + 0.5) * height - h / 2;
    for (let k = 0; k < 8 && boxes.some((b) => x < b.x + b.w && b.x < x + w && y < b.y + b.h && b.y < y + h); k++) y += h * 0.6;
    x = Math.max(4, Math.min(width - w - 4, x));
    boxes.push({ x, y, w, h });
    ctx.fillStyle = LABEL_FILL[o.layer];
    roundRect(ctx, x, y, w, h, font * 0.22);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillText(o.label, x + w / 2, y + h / 2 + font * 0.04);
  }
  const labeled = c2.toDataURL('image/png');

  // ID pass: flat colors, no lights or shadows, no antialiasing (blended edge pixels
  // would decode to the wrong object). Also used for per-object solo passes.
  renderer.dispose();
  renderer.domElement.remove();
  const idRenderer = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
  idRenderer.setSize(width, height);
  idRenderer.setPixelRatio(1);
  idRenderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  scene.background = new THREE.Color(0x000000);
  table.visible = false;
  legs.visible = false;
  const labels = layout.objects.map((o) => o.label);
  labels.forEach((l, i) => {
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color((i + 1) * 40 / 255, 0, 0) });
    meshes[l].traverse((m) => m.isMesh && (m.material = mat));
  });
  const gl = idRenderer.getContext();
  const buf = new Uint8Array(width * height * 4);
  const count = () => {
    idRenderer.render(scene, camera);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, buf);
    const n = new Array(labels.length).fill(0);
    for (let i = 0; i < buf.length; i += 4) {
      const k = Math.round(buf[i] / 40) - 1;
      if (k >= 0 && k < n.length && buf[i + 1] === 0) n[k]++;
    }
    return n;
  };
  const visible = count();
  const solo = labels.map((l, i) => {
    labels.forEach((m) => (meshes[m].visible = m === l));
    return count()[i];
  });
  labels.forEach((m) => (meshes[m].visible = true));
  const pixels = Object.fromEntries(labels.map((l, i) => [l, { visible: visible[i], solo: solo[i] }]));
  idRenderer.dispose();
  return { clean, labeled, pixels };
}

export async function contactSheet(tiles, cols, tileW, tileH, title) {
  const pad = 24, head = 70, cap = 44;
  const rows = Math.ceil(tiles.length / cols);
  const c = document.createElement('canvas');
  c.width = cols * tileW + (cols + 1) * pad;
  c.height = head + rows * (tileH + cap) + (rows + 1) * pad;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1f1f22';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#fff';
  ctx.font = '700 34px "DejaVu Sans", Arial, sans-serif';
  ctx.fillText(title, pad, 48);
  for (let i = 0; i < tiles.length; i++) {
    const img = new Image();
    img.src = tiles[i].src;
    await img.decode();
    const x = pad + (i % cols) * (tileW + pad), y = head + pad + Math.floor(i / cols) * (tileH + cap + pad);
    ctx.font = '600 24px "DejaVu Sans", Arial, sans-serif';
    ctx.fillStyle = tiles[i].pass ? '#cfe8cf' : '#f3c2c2';
    ctx.fillText(tiles[i].caption, x, y + 28);
    ctx.drawImage(img, x, y + cap, tileW, tileH);
  }
  return c.toDataURL('image/png');
}
