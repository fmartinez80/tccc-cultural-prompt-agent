// SceneSpec -> layout.json. Deterministic: same spec + archetype gives the same layout.
import { makeCamera, project } from './camera.js';

const rad = (d) => (d * Math.PI) / 180;
const LAYER = { DISH: 1, SKU: 1, SIDE: 2, SAUCE: 3, ACCENT: 3, PROP: 3 };

// ---------- 1. Enrich the spec (odd/even rule, labels) ----------

export function enrich(spec, rules) {
  const items = [
    { role: 'DISH', text: spec.entree.text, vessel: spec.entree.vessel, food: spec.entree.food },
    ...spec.accompaniments.map((a) => ({ role: a.role.toUpperCase(), text: a.text, vessel: a.vessel, food: a.food, pairedWith: a.pairedWith })),
    ...spec.props.map((p) => ({ role: 'PROP', text: p.text, vessel: p.registry })),
    { role: 'SKU', text: spec.sku.text, vessel: spec.sku.registry },
  ];
  const n = items.length;
  let injected = null;
  if (n % 2 === 0) {
    const inj = rules.oddEven.inject;
    injected = { role: 'ACCENT', text: 'odd/even accent (agent picks a culturally fitting condiment)', vessel: inj.vessel, food: 'food-mound', pairedWith: inj.pairedWith, injected: true };
    items.push(injected);
  }
  const counts = {};
  for (const it of items) counts[it.role] = (counts[it.role] || 0) + 1;
  const seen = {};
  for (const it of items) {
    seen[it.role] = (seen[it.role] || 0) + 1;
    it.label = counts[it.role] > 1 ? `${it.role} ${seen[it.role]}` : it.role;
    it.layer = LAYER[it.role];
  }
  return { items, nBrief: n, nFinal: items.length, injected: !!injected };
}

// ---------- 2. Footprints ----------

function dims(item, reg) {
  const v = reg[item.vessel];
  const f = item.food ? reg[item.food] : null;
  const round = v.diameter !== undefined;
  let foodH = 0;
  if (f) foodH = f.kind === 'roll' ? f.diameter * 0.85 : f.kind === 'bun' ? f.h : f.kind === 'fries' ? f.h : f.h;
  const inBowl = v.kind === 'bowl' || v.kind === 'ramekin';
  const h = v.kind === 'bottle' ? v.h : inBowl ? v.h + foodH * 0.4 : v.h + foodH;
  return round ? { round: true, r: v.diameter / 2, h } : { round: false, w: v.w, d: v.d, h };
}

export function footprint(o) {
  const pts = [];
  if (o.round) {
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * 2 * Math.PI;
      pts.push([o.x + o.r * Math.cos(a), o.z + o.r * Math.sin(a)]);
    }
    return pts;
  }
  const c = Math.cos(rad(o.yaw)), s = Math.sin(rad(o.yaw));
  for (const [lx, lz] of [[-o.w / 2, -o.d / 2], [o.w / 2, -o.d / 2], [o.w / 2, o.d / 2], [-o.w / 2, o.d / 2]]) {
    // same convention as three.js rotation.y: local +x -> (cos, -sin)
    pts.push([o.x + lx * c + lz * s, o.z - lx * s + lz * c]);
  }
  return pts;
}

function axes(poly) {
  return poly.map((p, i) => {
    const q = poly[(i + 1) % poly.length];
    return [-(q[1] - p[1]), q[0] - p[0]];
  });
}
function overlaps(a, b) {
  for (const ax of [...axes(a), ...axes(b)]) {
    const pa = a.map((p) => p[0] * ax[0] + p[1] * ax[1]);
    const pb = b.map((p) => p[0] * ax[0] + p[1] * ax[1]);
    if (Math.max(...pa) < Math.min(...pb) || Math.max(...pb) < Math.min(...pa)) return false;
  }
  return true;
}
function segDist(p, a, b) {
  const dx = b[0] - a[0], dz = b[1] - a[1];
  const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / (dx * dx + dz * dz)));
  return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dz);
}
// Edge-to-edge gap in meters; negative when footprints overlap.
export function gap(a, b) {
  if (overlaps(a, b)) return -1;
  let m = Infinity;
  for (const [P, Q] of [[a, b], [b, a]])
    for (const p of P) for (let i = 0; i < Q.length; i++) m = Math.min(m, segDist(p, Q[i], Q[(i + 1) % Q.length]));
  return m;
}

// ---------- 3. Archetypes ----------
// Angles are around the anchor, in table coords: 0 = diner's right (+x), 90 = away from diner (-z).

export const ARCHETYPES = {
  'center-hero': {
    title: 'Center Hero',
    source: 'knowledge base: coca-cola-guidelines s4.1-4.4, tableware-composition-reference s3-4',
    dishX: 0,
    dishYaw: 90, // rectangular vessel >25cm runs front-to-back (tableware ref s6)
    sku: { angles: [45, 35, 55, 25, 65], gap: 0.04 },
    side: [150, 105, 190],
    condiment: [120, 135, 100, 150, 165],
    prop: { angles: [-15, -30, 0, 200], yaw: 90 },
    compose: { groupCenterX: 0.5 },
  },
  'phi-diagonal': {
    title: 'Phi Diagonal',
    source: 'composition doc 2: entree lower-left phi point, beverage midground right, odd-count depth triangle',
    dishX: -0.12,
    dishYaw: 30, // long axis leads toward the SKU
    sku: { angles: [30, 40, 20, 50], gap: 0.1 },
    side: [110, 145, 75],
    condiment: [165, 180, 150, 195],
    prop: { angles: [-20, -35, -5], yaw: 'pointAtDish' },
    compose: { dishX: 0.382, skuX: 0.618 },
  },
};

export function place(enriched, spec, reg, rules, archetypeId) {
  const A = ARCHETYPES[archetypeId];
  const table = reg[spec.table];
  const placed = [];
  const mk = (item) => ({ ...item, ...dims(item, reg), x: 0, z: 0, yaw: 0 });
  const insideTable = (poly) =>
    poly.every(([x, z]) => Math.abs(x) <= table.w / 2 - rules.tableEdgeMarginM && Math.abs(z) <= table.d / 2 - rules.tableEdgeMarginM);
  const clearOfAll = (poly) => placed.every((p) => gap(poly, p.poly) >= rules.minGapM);

  const dish = mk(enriched.items.find((i) => i.role === 'DISH'));
  dish.yaw = dish.round ? 0 : A.dishYaw;
  dish.x = A.dishX;
  dish.z = 0;
  const fp0 = footprint(dish);
  const front = Math.max(...fp0.map((p) => p[1]));
  dish.z = table.d / 2 - rules.dishFrontMarginM - front;
  dish.poly = footprint(dish);
  placed.push(dish);

  // Put `o` at the given edge gap from `anchor`, along angle a.
  const around = (anchor, o, a, g) => {
    const dir = [Math.cos(rad(a)), -Math.sin(rad(a))];
    let lo = 0, hi = 1.5;
    for (let i = 0; i < 40; i++) {
      const mid = (lo + hi) / 2;
      o.x = anchor.x + dir[0] * mid;
      o.z = anchor.z + dir[1] * mid;
      if (gap(footprint(o), anchor.poly) < g) lo = mid;
      else hi = mid;
    }
    o.x = anchor.x + dir[0] * hi;
    o.z = anchor.z + dir[1] * hi;
    o.poly = footprint(o);
    return o.poly;
  };
  const tryAngles = (o, angles, g, extra = () => true, yawFor = () => o.yaw) => {
    const cands = [];
    for (const a of angles) for (const d of [0, 10, -10, 20, -20, 30, -30]) cands.push(a + d);
    for (const a of cands) {
      o.yaw = yawFor(a);
      const poly = around(dish, o, a, g);
      if (insideTable(poly) && clearOfAll(poly) && extra(o)) {
        o.angle = a;
        placed.push(o);
        return true;
      }
    }
    o.unplaced = true;
    return false;
  };

  const rest = enriched.items.filter((i) => i.role !== 'DISH').map(mk);
  const sku = rest.find((o) => o.role === 'SKU');
  tryAngles(sku, A.sku.angles, A.sku.gap, (o) => o.x > dish.x);

  let s = 0;
  for (const o of rest.filter((o) => o.role === 'SIDE')) tryAngles(o, [A.side[s++ % A.side.length]], 0.06);

  const cg = rules.condimentGapM;
  for (const o of rest.filter((o) => o.role === 'SAUCE' || o.role === 'ACCENT'))
    tryAngles(o, A.condiment, (cg.min + cg.max) / 2, (p) => {
      const g = gap(p.poly, dish.poly);
      return g >= cg.min - 1e-4 && g <= cg.max + 1e-4;
    });

  for (const o of rest.filter((o) => o.role === 'PROP'))
    tryAngles(o, A.prop.angles, 0.05, () => true, (a) => (A.prop.yaw === 'pointAtDish' ? a : A.prop.yaw));

  // Pack the setting toward the table's rear edge. The 50% horizon rule keeps the rear
  // edge at or below frame center, so any table left behind the setting is dead space
  // that pushes the camera back and shrinks the food (see the PRODX reference template).
  // With the camera yawed, the rear corner farthest from the camera is the table's
  // highest point in frame, so the setting also packs sideways toward that corner.
  const rearMost = Math.min(...placed.flatMap((o) => o.poly.map((p) => p[1])));
  const shiftZ = -table.d / 2 + rules.rearMarginM - rearMost;
  const xs = placed.flatMap((o) => o.poly.map((p) => p[0]));
  const yaw = rules.camera.yawDeg;
  const shiftX = yaw > 0 ? -table.w / 2 + rules.sideMarginM - Math.min(...xs) : yaw < 0 ? table.w / 2 - rules.sideMarginM - Math.max(...xs) : 0;
  for (const o of placed) {
    o.x += shiftX;
    o.z += shiftZ;
    o.poly = footprint(o);
  }

  return { archetype: archetypeId, objects: placed, unplaced: rest.filter((o) => o.unplaced).map((o) => o.label), table: { ...table, id: spec.table } };
}

// ---------- 4. Camera auto-fit ----------

function objPoints(o) {
  const step = o.round ? 4 : 1;
  const pts = [];
  o.poly.forEach((p, i) => {
    if (i % step) return;
    pts.push([p[0], 0, p[1]], [p[0], o.h, p[1]]);
  });
  return pts;
}
function tableSamples(t) {
  const cs = [[-t.w / 2, -t.d / 2], [t.w / 2, -t.d / 2], [t.w / 2, t.d / 2], [-t.w / 2, t.d / 2]];
  const pts = [];
  for (let i = 0; i < 4; i++) {
    const a = cs[i], b = cs[(i + 1) % 4];
    for (let k = 0; k <= 60; k++) pts.push([a[0] + ((b[0] - a[0]) * k) / 60, 0, a[1] + ((b[1] - a[1]) * k) / 60]);
  }
  return pts;
}
export function tableHorizon(c, t) {
  let top = -Infinity;
  for (const p of tableSamples(t)) {
    const q = project(c, p);
    if (q && q.x >= 0 && q.x <= 1) top = Math.max(top, q.y);
  }
  return top;
}
export function screenBox(c, o) {
  const q = objPoints(o).map((p) => project(c, p));
  if (q.some((v) => !v)) return null;
  const xs = q.map((v) => v.x), ys = q.map((v) => v.y);
  return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys), cx: (Math.min(...xs) + Math.max(...xs)) / 2 };
}

export function autofit(layout, rules) {
  const cam = rules.camera;
  const A = ARCHETYPES[layout.archetype];
  const objs = layout.objects;
  const dish = objs.find((o) => o.role === 'DISH');
  const sku = objs.find((o) => o.role === 'SKU');
  let best = null;
  for (let tx = -1.0; tx <= 1.0001; tx += 0.025)
    for (let tz = -1.2; tz <= 0.3001; tz += 0.025) // aim point may sit behind the table: the 50% rule puts the rear edge at or below frame center
      for (let d = 0.5; d <= 4.0; d += 0.02) {
        const c = makeCamera(cam, [tx, 0, tz], d);
        let ok = true;
        const boxes = {};
        for (const o of objs) {
          const b = screenBox(c, o);
          const m = o.layer === 1 ? rules.frameMargin.hero : rules.frameMargin.other;
          if (!b || b.x0 < m.side || b.x1 > 1 - m.side || b.y0 < m.bottom || b.y1 > 1 - m.top) { ok = false; break; }
          boxes[o.label] = b;
        }
        if (!ok) continue;
        const horizon = tableHorizon(c, layout.table);
        if (horizon > rules.tableHorizonMax) continue;
        // first feasible distance for this target is the tightest framing
        const all = Object.values(boxes);
        const fill = Math.max(...all.map((b) => b.x1)) - Math.min(...all.map((b) => b.x0));
        const db = boxes[dish.label], sb = boxes[sku.label];
        let comp;
        if (A.compose.groupCenterX !== undefined) comp = ((Math.min(db.x0, sb.x0) + Math.max(db.x1, sb.x1)) / 2 - A.compose.groupCenterX) ** 2;
        else comp = (db.cx - A.compose.dishX) ** 2 + (sb.cx - A.compose.skuX) ** 2;
        const low = Math.max(0, rules.tableHorizonMinPreferred - horizon);
        const cost = 20 * comp + 2 * (1 - fill) + 5 * low;
        if (!best || cost < best.cost) best = { cost, target: [tx, 0, tz], distance: d, horizon, fill };
        break;
      }
  if (!best) return null;
  const c = makeCamera(cam, best.target, best.distance);
  return { ...best, position: c.position, vfovDeg: c.vfovDeg, aspect: c.ratio, elevationDeg: cam.elevationDeg, yawDeg: cam.yawDeg, focalMm: cam.focalMm };
}

// ---------- 5. Pre-render checks ----------

export function checks(layout, camera, enriched, rules) {
  const c = makeCamera(rules.camera, camera.target, camera.distance);
  const objs = layout.objects;
  const dish = objs.find((o) => o.role === 'DISH');
  const sku = objs.find((o) => o.role === 'SKU');
  const out = [];
  const add = (id, pass, detail, hard = true) => out.push({ id, pass, hard, detail });
  add('all-items-placed', layout.unplaced.length === 0, layout.unplaced.length ? `could not place: ${layout.unplaced.join(', ')}` : `${objs.length} items`);
  add('odd-count', objs.length % 2 === 1, `brief N=${enriched.nBrief}${enriched.injected ? ' (even) -> injected 1 accent' : ' (odd)'} -> ${objs.length}`);
  let minGap = Infinity;
  for (let i = 0; i < objs.length; i++) for (let j = i + 1; j < objs.length; j++) minGap = Math.min(minGap, gap(objs[i].poly, objs[j].poly));
  add('no-overlap', minGap >= rules.minGapM - 1e-4, `min gap ${(minGap * 100).toFixed(1)} cm (>= ${rules.minGapM * 100} cm)`);
  add('sku-diner-right', sku.x > dish.x, `SKU ${((sku.x - dish.x) * 100).toFixed(0)} cm right of DISH on the table`);
  const sb = screenBox(c, sku), db = screenBox(c, dish);
  add('sku-screen-right', sb.cx > db.cx && sb.cx > 0.5, `SKU center x ${sb.cx.toFixed(2)}, DISH ${db.cx.toFixed(2)}`);
  add('table-horizon', camera.horizon <= rules.tableHorizonMax, `table rear edge at ${(camera.horizon * 100).toFixed(0)}% of frame height (max 50%)`);
  add('sku-top', true, `SKU top at ${(sb.y1 * 100).toFixed(0)}% of frame height (objects may cross the 50% line)`, false);
  for (const o of objs.filter((o) => o.pairedWith)) {
    const g = gap(o.poly, dish.poly);
    add(`condiment-proximity:${o.label}`, g >= rules.condimentGapM.min - 1e-3 && g <= rules.condimentGapM.max + 1e-3, `${(g / 0.0254).toFixed(1)} in from DISH (1-3 in)`);
  }
  const heroInCenterThird = [sb, db].every((b) => b.cx >= 1 / 3 && b.cx <= 2 / 3);
  add('kb-hero-center-third', heroInCenterThird, `DISH x ${db.cx.toFixed(2)}, SKU x ${sb.cx.toFixed(2)} (KB wants both in 0.33-0.67)`, false);
  add('phi-points', true, `DISH x ${db.cx.toFixed(2)} vs 0.38, SKU x ${sb.cx.toFixed(2)} vs 0.62`, false);
  return out;
}

export function screenBoxes(layout, camera, rules) {
  const c = makeCamera(rules.camera, camera.target, camera.distance);
  return Object.fromEntries(layout.objects.map((o) => [o.label, screenBox(c, o)]));
}
