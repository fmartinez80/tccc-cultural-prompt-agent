// Renders the Camera step's line-art illustrations (every look x angle pair)
// once, to static PNGs in public/camera/, so browsers load images instead of
// spinning up a WebGL renderer per card. Re-run after changing the looks or
// angles in rules/camera-options.json, or the scene in
// src/client/lib/cameraIllustrations.ts:
//
//   npx tsx scripts/render-camera-illustrations.ts
//
// This is a small CPU rasterizer that reproduces the browser renderer's two
// passes exactly: a geometry pass writing view-space normals (8-bit, as in the
// render target), linear depth and the subject/background flag per pixel,
// then the same edge-detect post pass as QUAD_FRAGMENT. Back faces are culled
// like three.js's default FrontSide; triangles are clipped at the near plane.

import { writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import * as THREE from 'three';

import cameraOptions from '../rules/camera-options.json';
import { makeCameraParams, toThreeCamera } from '../src/shared/camera.ts';
import { buildScene, HEIGHT, LOOK_FRAMING, TABLE_D, WIDTH, type LookFraming } from '../src/client/lib/cameraIllustrations.ts';

/** Matches the browser renderer at devicePixelRatio 2 (the sharpest it renders). */
const SCALE = 2;
const W = WIDTH * SCALE;
const H = HEIGHT * SCALE;
const LINE = [0x26, 0x26, 0x26];
const EDGE_THRESHOLD = 0.06;
const OUT_DIR = new URL('../public/camera/', import.meta.url);
const MANIFEST = new URL('../src/client/lib/cameraIllustrationSet.json', import.meta.url);

interface Buffers {
  depth: Float32Array; // linear view depth; the camera's far plane where nothing was drawn
  normal: Float32Array; // view-space normal, 0..1 encoded and 8-bit quantized, 3 per pixel
  region: Float32Array; // 0 = subject, 1 = background (and the cleared background)
}

type V = { x: number; y: number; z: number; w: number; n: THREE.Vector3; vz: number };

function rasterize(scene: THREE.Group, cam: THREE.PerspectiveCamera): Buffers {
  const N = W * H;
  const depth = new Float32Array(N).fill(cam.far);
  const normal = new Float32Array(N * 3); // cleared to black, like the render target
  const region = new Float32Array(N).fill(1);
  scene.updateMatrixWorld(true);
  const near = cam.near;

  const mv = new THREE.Matrix4();
  const nm = new THREE.Matrix3();
  const p = new THREE.Vector3();

  scene.traverse((o) => {
    if (!(o instanceof THREE.Mesh)) return;
    const geo = o.geometry as THREE.BufferGeometry;
    const pos = geo.getAttribute('position');
    const nor = geo.getAttribute('normal');
    const idx = geo.getIndex();
    const flag = (o.material as THREE.ShaderMaterial).uniforms.uRegion!.value as number;
    mv.multiplyMatrices(cam.matrixWorldInverse, o.matrixWorld);
    nm.getNormalMatrix(mv);

    const view = (i: number) => {
      p.fromBufferAttribute(pos, i).applyMatrix4(mv);
      const n = new THREE.Vector3().fromBufferAttribute(nor, i).applyMatrix3(nm);
      return { p: p.clone(), n };
    };
    const count = idx ? idx.count : pos.count;
    for (let t = 0; t < count; t += 3) {
      const ids = idx ? [idx.getX(t), idx.getX(t + 1), idx.getX(t + 2)] : [t, t + 1, t + 2];
      let poly = ids.map(view);
      // Clip against the near plane (view space looks down -z).
      const clipped: typeof poly = [];
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i]!;
        const b = poly[(i + 1) % poly.length]!;
        const ina = a.p.z <= -near;
        const inb = b.p.z <= -near;
        if (ina) clipped.push(a);
        if (ina !== inb) {
          const k = (-near - a.p.z) / (b.p.z - a.p.z);
          clipped.push({ p: a.p.clone().lerp(b.p, k), n: a.n.clone().lerp(b.n, k) });
        }
      }
      if (clipped.length < 3) continue;
      poly = clipped;
      const verts: V[] = poly.map(({ p: vp, n }) => {
        const c = new THREE.Vector4(vp.x, vp.y, vp.z, 1).applyMatrix4(cam.projectionMatrix);
        // Pixel space, origin bottom-left like GL.
        return { x: ((c.x / c.w + 1) / 2) * W, y: ((c.y / c.w + 1) / 2) * H, z: c.z / c.w, w: c.w, n, vz: -vp.z };
      });
      for (let i = 1; i + 1 < verts.length; i++) drawTri(verts[0]!, verts[i]!, verts[i + 1]!, flag);
    }
  });

  function drawTri(a: V, b: V, c: V, flag: number) {
    const area = (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y);
    if (area <= 0) return; // back face (three.js FrontSide = counter-clockwise)
    const x0 = Math.max(0, Math.floor(Math.min(a.x, b.x, c.x)));
    const x1 = Math.min(W - 1, Math.ceil(Math.max(a.x, b.x, c.x)));
    const y0 = Math.max(0, Math.floor(Math.min(a.y, b.y, c.y)));
    const y1 = Math.min(H - 1, Math.ceil(Math.max(a.y, b.y, c.y)));
    const iw = [1 / a.w, 1 / b.w, 1 / c.w];
    for (let y = y0; y <= y1; y++) {
      const py = y + 0.5;
      for (let x = x0; x <= x1; x++) {
        const px = x + 0.5;
        let l0 = (b.x - px) * (c.y - py) - (c.x - px) * (b.y - py);
        let l1 = (c.x - px) * (a.y - py) - (a.x - px) * (c.y - py);
        let l2 = (a.x - px) * (b.y - py) - (b.x - px) * (a.y - py);
        if (l0 < 0 || l1 < 0 || l2 < 0) continue;
        l0 /= area;
        l1 /= area;
        l2 /= area;
        const z = l0 * a.z + l1 * b.z + l2 * c.z;
        if (z < -1 || z > 1) continue;
        // Perspective-correct attributes.
        const q0 = l0 * iw[0]!,
          q1 = l1 * iw[1]!,
          q2 = l2 * iw[2]!;
        const qs = q0 + q1 + q2;
        const vz = (q0 * a.vz + q1 * b.vz + q2 * c.vz) / qs;
        const i = y * W + x;
        if (vz >= depth[i]!) continue;
        depth[i] = vz;
        const nx = (q0 * a.n.x + q1 * b.n.x + q2 * c.n.x) / qs;
        const ny = (q0 * a.n.y + q1 * b.n.y + q2 * c.n.y) / qs;
        const nz = (q0 * a.n.z + q1 * b.n.z + q2 * c.n.z) / qs;
        const len = Math.hypot(nx, ny, nz) || 1;
        normal[i * 3] = Math.round(((nx / len) * 0.5 + 0.5) * 255) / 255;
        normal[i * 3 + 1] = Math.round(((ny / len) * 0.5 + 0.5) * 255) / 255;
        normal[i * 3 + 2] = Math.round(((nz / len) * 0.5 + 0.5) * 255) / 255;
        region[i] = flag;
      }
    }
  }

  return { depth, normal, region };
}

/** The QUAD_FRAGMENT post pass, per pixel (clamp-to-edge sampling). */
function edges(buf: Buffers, framing: LookFraming, fadeStartDist: number): Uint8Array {
  const out = new Uint8Array(W * H * 3);
  const at = (x: number, y: number) => Math.min(H - 1, Math.max(0, y)) * W + Math.min(W - 1, Math.max(0, x));
  const nd = (i: number, j: number) => {
    const dx = buf.normal[i * 3]! - buf.normal[j * 3]!;
    const dy = buf.normal[i * 3 + 1]! - buf.normal[j * 3 + 1]!;
    const dz = buf.normal[i * 3 + 2]! - buf.normal[j * 3 + 2]!;
    return Math.hypot(dx, dy, dz);
  };
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = at(x, y);
      const xp = at(x + 1, y),
        xm = at(x - 1, y),
        yp = at(x, y + 1),
        ym = at(x, y - 1);
      const dx = buf.depth[xp]! - buf.depth[xm]!;
      const dy = buf.depth[yp]! - buf.depth[ym]!;
      const depthEdge = Math.min(1, (Math.abs(dx) + Math.abs(dy)) * 6);
      const normalEdge = Math.min(1, (nd(xp, xm) + nd(yp, ym)) * 4);
      let edge = Math.max(depthEdge, normalEdge);
      if (edge < EDGE_THRESHOLD) edge = 0;
      let weight: number;
      if (framing.fadeWithDistance) {
        const t = Math.min(1, Math.max(0, (buf.depth[i]! - fadeStartDist) / Math.max(framing.fadeRange, 0.0001)));
        weight = 1 + (0.08 - 1) * t;
      } else {
        weight = 1 + (framing.backgroundWeight - 1) * buf.region[i]!;
      }
      const k = edge * weight;
      // Flip to top-down rows for the PNG.
      const o = ((H - 1 - y) * W + x) * 3;
      for (let c = 0; c < 3; c++) out[o + c] = Math.round((1 + (LINE[c]! / 255 - 1) * k) * 255);
    }
  }
  return out;
}

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(b: Buffer): number {
  let c = 0xffffffff;
  for (const x of b) c = CRC_TABLE[(c ^ x) & 0xff]! ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type: string, data: Buffer): Buffer {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(rgb: Uint8Array): Buffer {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // RGB
  const raw = Buffer.alloc((W * 3 + 1) * H);
  for (let y = 0; y < H; y++) {
    raw[y * (W * 3 + 1)] = 0;
    Buffer.from(rgb.buffer, y * W * 3, W * 3).copy(raw, y * (W * 3 + 1) + 1);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

const manifest: Record<string, { focalMm: number; pitchDeg: number; src: string }> = {};
for (const look of cameraOptions.look.options) {
  for (const angle of cameraOptions.angle.options) {
    const focal = look.hidden.focal_length_mm;
    const pitch = angle.hidden.pitch_deg;
    const framing = LOOK_FRAMING[look.id] ?? LOOK_FRAMING['table-context']!;
    const cam = toThreeCamera(makeCameraParams(focal, pitch, framing.targetX, framing.targetD, framing.distance));
    const fadeStart = framing.fadeWithDistance ? cam.position.distanceTo(new THREE.Vector3(framing.targetX, 0, -TABLE_D)) : 0;
    const buf = rasterize(buildScene(), cam);
    const file = `${look.id}__${angle.id}.png`;
    writeFileSync(new URL(file, OUT_DIR), png(edges(buf, framing, fadeStart)));
    manifest[`${look.id}|${angle.id}`] = { focalMm: focal, pitchDeg: pitch, src: `/camera/${file}` };
    console.log('wrote', file);
  }
}
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log('wrote cameraIllustrationSet.json');
