// Camera math shared by the solver (Node) and the renderer (browser).
// World: meters, y up, table top at y = 0, diner sits at +z looking toward -z,
// so +x is the diner's right. Frame coords: x 0..1 left->right, y 0..1 bottom->top.

const deg = (d) => (d * Math.PI) / 180;
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => {
  const l = Math.hypot(a[0], a[1], a[2]);
  return [a[0] / l, a[1] / l, a[2] / l];
};

export function lensToFov({ focalMm, sensorWidthMm, aspect }) {
  const hfov = 2 * Math.atan(sensorWidthMm / 2 / focalMm);
  const ratio = aspect[0] / aspect[1];
  const vfov = 2 * Math.atan(Math.tan(hfov / 2) / ratio);
  return { hfov, vfov, ratio };
}

// Camera orbiting a target point on the table at fixed elevation and yaw.
// yaw 0 = straight from the diner's side; positive yaw swings the camera toward +x.
export function makeCamera(cam, target, distance) {
  const el = deg(cam.elevationDeg);
  const yaw = deg(cam.yawDeg);
  const offset = [Math.sin(yaw) * Math.cos(el), Math.sin(el), Math.cos(yaw) * Math.cos(el)];
  const position = [target[0] + offset[0] * distance, target[1] + offset[1] * distance, target[2] + offset[2] * distance];
  const f = norm(sub(target, position));
  const r = norm(cross(f, [0, 1, 0]));
  const u = cross(r, f);
  const { hfov, vfov, ratio } = lensToFov(cam);
  return { position, target, f, r, u, tanH: Math.tan(hfov / 2), tanV: Math.tan(vfov / 2), vfovDeg: (vfov * 180) / Math.PI, ratio };
}

// Returns {x, y, depth} in frame coords, or null if behind the camera.
export function project(c, p) {
  const v = sub(p, c.position);
  const z = dot(v, c.f);
  if (z <= 1e-6) return null;
  return { x: 0.5 + (0.5 * dot(v, c.r)) / (z * c.tanH), y: 0.5 + (0.5 * dot(v, c.u)) / (z * c.tanV), depth: z };
}
