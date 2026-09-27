// ErgonomicSpatialLayoutBlueprint (Fernando, 2026-09-27) -> SceneSpec.
// The blueprint says what sits where by role, base layer and clock position.
// Its center_coordinates are kept as the author's intent but not used for
// placement: the solver places from real sizes, clock positions and rules.
// `x_asset` on a primitive is our extension naming the registry items to draw.

const CLOCK = {
  '6:00_CENTER': 6,
  '1:00-2:00_TOP_RIGHT': 1.5,
  '10:00-11:00_TOP_LEFT': 10.5,
  '4:00-5:00_BOTTOM_RIGHT': 4.5,
  '7:00-8:00_BOTTOM_LEFT': 7.5,
};
// Each entree sits on its ideal vessel, an entree plate unless the blueprint says
// otherwise; a carrier under the vessel is opt-in (rules/serving-stacks.json).
// `x_serving_stack: {vessel, carrier}` on the main overrides this mapping.
const STACK = {
  standard_plate: { vessel: 'plate' },
  bowl: { vessel: 'bowl' },
  basket: { vessel: 'basket' },
  wooden_board: { vessel: 'board' },
  butcher_paper: { vessel: 'paper_wrap' },
  plate_on_tray: { vessel: 'plate', carrier: 'tray' },
  plate_on_board: { vessel: 'plate', carrier: 'board' },
  plate_on_butcher_paper: { vessel: 'plate', carrier: 'butcher_paper' },
  basket_on_tray: { vessel: 'basket', carrier: 'tray' },
};
// An ON_BOARD item whose base_layer_type names the vessel itself shares the vessel;
// otherwise it shares the carrier when there is one. `x_share` overrides.
const VESSEL_OF = { standard_plate: 'plate', bowl: 'bowl', basket: 'basket', wooden_board: 'board', butcher_paper: 'paper_wrap' };
const ROLE = { SIDE_DISH: 'side', CONDIMENT_SAUCE: 'sauce', LIFESTYLE_PROP: 'prop' };
const REQUIRED = ['canvas_metadata', 'horizon_clamp', 'table_dining_mode', 'primitives'];

export function blueprintToSpec(bp, { id, brief, market, setting, table = 'table-2top' } = {}) {
  for (const k of REQUIRED) if (!(k in bp)) throw new Error(`blueprint is missing ${k}`);
  if (bp.table_dining_mode !== 'SINGLE_DINER') throw new Error(`table_dining_mode ${bp.table_dining_mode} is not built yet (SINGLE_DINER only)`);
  const horizon = bp.horizon_clamp.max_table_rear_y_normalized;
  if (horizon > 0.5) throw new Error('max_table_rear_y_normalized must be <= 0.50');
  const byId = Object.fromEntries(bp.primitives.map((p) => [p.id, p]));
  const asset = (p) => {
    if (!p.x_asset) throw new Error(`primitive ${p.id} has no x_asset (which registry item to draw)`);
    return p.x_asset;
  };
  const clock = (p) => {
    if (p.clock_position === 'ON_BOARD' || p.clock_position === 'CENTER_EPICENTER') return undefined;
    if (!(p.clock_position in CLOCK)) throw new Error(`unknown clock_position ${p.clock_position}`);
    return CLOCK[p.clock_position];
  };

  const mains = bp.primitives.filter((p) => p.component_role === 'MAIN_ENTREE');
  const drinks = bp.primitives.filter((p) => p.component_role === 'HERO_BEVERAGE');
  if (mains.length !== 1 || drinks.length !== 1) throw new Error('SINGLE_DINER needs exactly one MAIN_ENTREE and one HERO_BEVERAGE');
  const main = mains[0], drink = drinks[0];
  main.base_layer_type ??= 'standard_plate';
  if (!main.x_serving_stack && !(main.base_layer_type in STACK)) throw new Error(`MAIN_ENTREE base_layer_type ${main.base_layer_type} is not built yet`);
  const stack = main.x_serving_stack ?? STACK[main.base_layer_type];

  const [aw, ah] = bp.canvas_metadata.aspect_ratio.split(':').map(Number);
  const spec = {
    specVersion: '0.3',
    id,
    brief,
    market,
    setting,
    source: 'ErgonomicSpatialLayoutBlueprint',
    canvas: { aspect: [aw, ah], shopperZone: bp.canvas_metadata.shopper_zone },
    horizonMax: horizon,
    layouts: ['clock-face'],
    oddEvenAuto: false, // the blueprint author has already balanced the count
    table,
    entree: { text: asset(main).text, stack, food: asset(main).food, yaw: main.rotation_euler_deg?.yaw ?? 0 },
    sku: {
      registry: asset(drink).registry,
      text: asset(drink).text,
      clock: clock(drink),
      logoBaseOverlapAllowed: drink.glass_logo_base_overlap_allowed ?? true,
    },
    accompaniments: [],
    props: [],
  };
  for (const p of bp.primitives) {
    const role = ROLE[p.component_role];
    if (!role) continue;
    const a = asset(p);
    const target = p.proximity_target_id && byId[p.proximity_target_id];
    const item = {
      role,
      text: a.text,
      clock: clock(p),
      onBase: p.clock_position === 'ON_BOARD' || undefined,
      share: p.clock_position === 'ON_BOARD' ? p.x_share ?? (VESSEL_OF[p.base_layer_type] === stack.vessel ? 'vessel' : undefined) : undefined,
      pairedWith: role === 'sauce' && target?.component_role === 'MAIN_ENTREE' ? 'DISH' : undefined,
    };
    if (role === 'prop') spec.props.push({ ...item, registry: a.registry });
    else spec.accompaniments.push({ ...item, vessel: a.registry, food: a.food });
  }
  return spec;
}
