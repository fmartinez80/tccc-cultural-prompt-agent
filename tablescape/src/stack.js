// Serving stacks: what the entree is served in (vessel), what that sits on
// (carrier, optional), and what else each one holds.
// Rules live in rules/serving-stacks.json; sizes come from the registry.

const width = (r) => r.w ?? r.diameter;
const depth = (r) => r.d ?? r.diameter;
// Where food and shared items rest, measured from the vessel's bottom.
const seat = (r) => ({ plate: r.h * 0.45, bowl: r.h * 0.55, basket: 0.004, trayPlain: 0.004 })[r.kind] ?? r.h;
const EDGE = 0.01; // shared items stay this far inside the host's rim

export function resolveStack(entree, stacks) {
  const vessel = entree.stack?.vessel ?? stacks.defaults.vessel;
  const carrier = entree.stack?.carrier ?? stacks.defaults.carrier;
  if (!stacks.vessels[vessel]) throw new Error(`unknown vessel "${vessel}" (allowed: ${Object.keys(stacks.vessels).join(', ')})`);
  if (carrier) {
    const c = stacks.carriers[carrier];
    if (!c) throw new Error(`unknown carrier "${carrier}" (allowed: ${Object.keys(stacks.carriers).join(', ')})`);
    if (!c.canCarry.includes(vessel)) throw new Error(`a ${carrier} does not carry a ${vessel} (it carries: ${c.canCarry.join(', ')})`);
  }
  return { vessel, carrier };
}

function foodLength(food, vesselReg) {
  if (!food) return 0;
  if (food.kind === 'roll') return food.length;
  if (food.kind === 'bun') return food.diameter;
  return width(vesselReg) * 0.6;
}

const itemW = (s) => (s.round ? 2 * s.r : s.w);
const itemD = (s) => (s.round ? 2 * s.r : s.d);

// Which `holds` bucket a shared item uses. Small sides fall back to SIDE.
function buckets(s, stacks) {
  if (s.role === 'SAUCE' || s.role === 'ACCENT') return ['CONDIMENT'];
  if (s.role === 'SIDE') return Math.max(itemW(s), itemD(s)) <= stacks.smallSideMaxM + 1e-6 ? ['SMALL_SIDE', 'SIDE'] : ['SIDE'];
  return [];
}
function checkCapacity(host, holds, items, stacks) {
  const used = {};
  for (const s of items) {
    const b = buckets(s, stacks).find((k) => (used[k] || 0) < (holds[k] ?? 0));
    if (!b) {
      const what = s.role === 'SIDE' ? (buckets(s, stacks)[0] === 'SMALL_SIDE' ? 'small side' : 'side') : 'condiment';
      const cap = Object.entries(holds).map(([k, n]) => `${n} ${k.toLowerCase().replace('_', ' ')}`).join(', ');
      throw new Error(`a ${host} holds ${cap}; no room for ${s.label} (${what})`);
    }
    used[b] = (used[b] || 0) + 1;
  }
}

// Is a footprint of half-size (hw, hd) at (x, z) inside the host, EDGE in from its rim?
function inside(host, s, x, z) {
  if (host.diameter) {
    const R = host.diameter / 2 - EDGE;
    if (s.round) return Math.hypot(x, z) + s.r <= R + 1e-9;
    const hw = s.w / 2, hd = s.d / 2;
    return [[hw, hd], [hw, -hd], [-hw, hd], [-hw, -hd]].every(([a, b]) => Math.hypot(x + a, z + b) <= R + 1e-9);
  }
  return Math.abs(x) + itemW(s) / 2 <= host.w / 2 - EDGE + 1e-9 && Math.abs(z) + itemD(s) / 2 <= host.d / 2 - EDGE + 1e-9;
}

// Packs shared items into columns at the host's right-hand end (toward the SKU):
// each column stacks items front to back, pushed as far right as the rim allows.
// Returns placements and the x of the packed block's left edge.
function pack(host, items, gapM) {
  const out = [];
  let left = width(host) / 2;
  let i = 0;
  while (i < items.length) {
    // grow the column while it still fits front to back
    let n = 1;
    const colDepth = (k) => items.slice(i, i + k).reduce((a, s) => a + itemD(s), 0) + gapM * (k - 1);
    while (i + n < items.length && colDepth(n + 1) <= depth(host) - 2 * EDGE) n++;
    const col = items.slice(i, i + n);
    const colW = Math.max(...col.map(itemW));
    let z = -colDepth(n) / 2;
    const zs = col.map((s) => {
      const c = z + itemD(s) / 2;
      z += itemD(s) + gapM;
      return c;
    });
    let x = left - (out.length ? gapM : 0) - colW / 2;
    while (x > -width(host) / 2 && !col.every((s, k) => inside(host, s, x, zs[k]))) x -= 0.002;
    col.forEach((s, k) => out.push({ label: s.label, lx: x, lz: zs[k] }));
    left = x - colW / 2;
    i += n;
  }
  return { placements: out, left };
}

// Lays out the stack in the entree's local frame (x across, z toward the diner).
// Returns local offsets, or throws when the rules or real sizes say it can't be done.
export function layoutStack(dishItem, sharing, stacks, reg) {
  const { vessel, carrier } = resolveStack({ stack: dishItem.stackSpec }, stacks);
  const V = reg[stacks.vessels[vessel].registry];
  const C = carrier ? reg[stacks.carriers[carrier].registry] : null;
  const gapM = stacks.gapOnStackM;
  const shareOf = (s) => s.share ?? (C ? 'carrier' : 'vessel');
  const onVessel = sharing.filter((s) => shareOf(s) === 'vessel');
  const onCarrier = sharing.filter((s) => shareOf(s) === 'carrier');
  if (onCarrier.length && !C) throw new Error(`${onCarrier.map((s) => s.label).join(', ')} should share a carrier, but the entree has none`);
  for (const s of sharing) if (!buckets(s, stacks).length) throw new Error(`${s.label} (${s.role}) cannot share the entree's stack`);
  checkCapacity(vessel, stacks.vessels[vessel].holds, onVessel, stacks);
  if (C) checkCapacity(carrier, stacks.carriers[carrier].holds, onCarrier, stacks);

  // Vessel: the food takes what the shared items leave, across the middle.
  const food = dishItem.food ? reg[dishItem.food] : null;
  const pv = pack(V, onVessel, gapM);
  const vesselLeft = -width(V) / 2 + (V.diameter ? EDGE : 0);
  const room = (onVessel.length ? pv.left - gapM : width(V) / 2) - vesselLeft;
  const need = foodLength(food, V);
  if (need > room + 1e-6)
    throw new Error(`the ${vessel} is ${Math.round(width(V) * 100)} cm across; ${onVessel.map((s) => s.label).join(', ')} leave ${Math.round(room * 100)} cm for the entree, which needs ${Math.round(need * 100)} cm`);
  const foodInVesselX = onVessel.length ? vesselLeft + room / 2 : 0;
  for (const p of pv.placements) if (!inside(V, onVessel.find((s) => s.label === p.label), p.lx, p.lz)) throw new Error(`${p.label} does not fit on the ${vessel}`);

  // Carrier: the vessel takes what the carrier's shared items leave.
  let vesselOffsetX = 0;
  let pc = { placements: [] };
  if (C) {
    if (depth(V) > depth(C) - EDGE) throw new Error(`the ${vessel} is deeper than the ${carrier}`);
    pc = pack(C, onCarrier, gapM);
    const cRoom = (onCarrier.length ? pc.left - gapM : width(C) / 2) - -width(C) / 2;
    if (width(V) > cRoom + 1e-6)
      throw new Error(`the ${carrier} is ${Math.round(width(C) * 100)} cm wide; ${onCarrier.map((s) => s.label).join(', ')} leave ${Math.round(cRoom * 100)} cm for the ${vessel}, which needs ${Math.round(width(V) * 100)} cm`);
    vesselOffsetX = onCarrier.length ? -width(C) / 2 + cRoom / 2 : 0;
    for (const p of pc.placements) if (!inside(C, onCarrier.find((s) => s.label === p.label), p.lx, p.lz)) throw new Error(`${p.label} does not fit on the ${carrier}`);
  }

  const baseY = C ? seat(C) : 0;
  const placements = [
    ...pc.placements.map((p) => ({ ...p, y: baseY })),
    ...pv.placements.map((p) => ({ ...p, lx: p.lx + vesselOffsetX, y: baseY + seat(V), host: 'vessel' })),
  ];
  const foodH = food ? (food.kind === 'roll' ? food.diameter * 0.85 : food.h) : 0;
  return {
    vessel,
    carrier,
    vesselRegistry: stacks.vessels[vessel].registry,
    carrierRegistry: C ? stacks.carriers[carrier].registry : null,
    footprint: C ? { round: false, w: C.w, d: C.d } : V.diameter ? { round: true, r: V.diameter / 2 } : { round: false, w: V.w, d: V.d },
    vesselFootprint: V.diameter ? { round: true, r: V.diameter / 2 } : { round: false, w: V.w, d: V.d },
    h: baseY + V.h + foodH,
    vesselOffsetX,
    vesselY: baseY,
    foodOffsetX: vesselOffsetX + foodInVesselX,
    foodY: baseY + seat(V),
    placements,
  };
}
