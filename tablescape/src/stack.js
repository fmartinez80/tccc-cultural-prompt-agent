// Serving stacks: what the entree is served in (vessel), what that sits on
// (carrier, optional), and which other items may share either one.
// Rules live in rules/serving-stacks.json; sizes come from the registry.

const SHARE_ROLE = { SAUCE: 'CONDIMENT', ACCENT: 'CONDIMENT', SIDE: 'SIDE' };
const width = (r) => r.w ?? r.diameter;
const depth = (r) => r.d ?? r.diameter;
// Where food and shared items rest, measured from the vessel's bottom.
const seat = (r) => ({ plate: r.h * 0.45, bowl: r.h * 0.55, basket: 0.004, trayPlain: 0.004 })[r.kind] ?? r.h;

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

// Lays out the stack along the entree's local x axis. Shared items line up at the
// right-hand end (toward the SKU); the vessel and the food shift left to make room.
// Returns local offsets, or throws when the rules or real sizes say it can't be done.
export function layoutStack(dishItem, sharing, stacks, reg) {
  const { vessel, carrier } = resolveStack({ stack: dishItem.stackSpec }, stacks);
  const V = reg[stacks.vessels[vessel].registry];
  const C = carrier ? reg[stacks.carriers[carrier].registry] : null;
  const gapM = stacks.gapOnStackM;
  const onVessel = sharing.filter((s) => (s.share ?? (C ? 'carrier' : 'vessel')) === 'vessel');
  const onCarrier = sharing.filter((s) => (s.share ?? (C ? 'carrier' : 'vessel')) === 'carrier');
  if (onCarrier.length && !C) throw new Error(`${onCarrier.map((s) => s.label).join(', ')} should share a carrier, but the entree has none`);

  const checkCapacity = (host, rulesOf, items) => {
    const allowed = rulesOf.canShare || {};
    const count = {};
    for (const s of items) {
      const k = SHARE_ROLE[s.role];
      if (!k) throw new Error(`${s.label} (${s.role}) cannot share the ${host}`);
      count[k] = (count[k] || 0) + 1;
      if (count[k] > (allowed[k] ?? 0)) throw new Error(`a ${host} holds at most ${allowed[k] ?? 0} ${k.toLowerCase()}(s); ${s.label} does not fit`);
    }
  };
  checkCapacity(vessel, stacks.vessels[vessel], onVessel);
  if (C) checkCapacity(carrier, stacks.carriers[carrier], onCarrier);

  const itemW = (s) => (s.round ? 2 * s.r : s.w);
  const itemD = (s) => (s.round ? 2 * s.r : s.d);
  const run = (items) => items.reduce((a, s) => a + itemW(s) + gapM, 0);

  // Vessel: food + shared items must fit across it.
  const food = dishItem.food ? reg[dishItem.food] : null;
  const vesselNeed = foodLength(food, V) + run(onVessel);
  if (vesselNeed > width(V) - 0.02 + 1e-6) throw new Error(`the ${vessel} is ${Math.round(width(V) * 100)} cm across; the food and ${onVessel.map((s) => s.label).join(', ')} need ${Math.round(vesselNeed * 100)} cm`);
  for (const s of onVessel) if (itemD(s) > depth(V) - 0.02) throw new Error(`${s.label} is deeper than the ${vessel}`);

  let carrierNeed = 0;
  if (C) {
    carrierNeed = width(V) + run(onCarrier);
    if (carrierNeed > width(C) - 0.02 + 1e-6) throw new Error(`the ${carrier} is ${Math.round(width(C) * 100)} cm wide; the ${vessel} and ${onCarrier.map((s) => s.label).join(', ')} need ${Math.round(carrierNeed * 100)} cm`);
    if (depth(V) > depth(C) - 0.01) throw new Error(`the ${vessel} is deeper than the ${carrier}`);
    for (const s of onCarrier) if (itemD(s) > depth(C) - 0.02) throw new Error(`${s.label} is deeper than the ${carrier}`);
  }

  const baseY = C ? seat(C) : 0;
  const place = (items, hostW, y) => {
    let edge = hostW / 2 - 0.01;
    return items.map((s) => {
      const lx = edge - itemW(s) / 2;
      edge -= itemW(s) + gapM;
      return { label: s.label, lx, y };
    });
  };
  const vesselOffsetX = C ? -run(onCarrier) / 2 : 0;
  const foodInVesselX = -run(onVessel) / 2;
  const placements = [
    ...place(onCarrier, C ? width(C) : 0, baseY),
    ...place(onVessel, width(V), baseY + seat(V)).map((p) => ({ ...p, lx: p.lx + vesselOffsetX, host: 'vessel' })),
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
