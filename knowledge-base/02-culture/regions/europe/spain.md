---
country: spain
ou: NOT CONFIRMED — TCCC's internal OU code for Spain was not found via
  WebSearch in this session; flag for correction from TCCC's own market
  documentation, do not guess. What this pass *did* confirm, and what
  should substitute for a formal OU code until one is found: Spain's
  bottling partner is Coca-Cola Europacific Partners (CCEP) **Iberia** —
  the same commercial unit that also covers Portugal and Andorra — not a
  Spain-only bottling operation, per CCEP's own current corporate
  materials.
status: DRAFT — NEEDS SME/HUMAN REVIEW — WebSearch verification-and-merge
  pass over a model-knowledge-only scaffold (third non-US country file,
  after the UK/Scotland pair)
research_method: Claude web research (WebSearch only). Built as a
  verification-and-merge pass over
  `knowledge-base/scratch-spain-model-knowledge-draft.md`, a model-
  knowledge-only scaffold produced by a separate, tool-less Claude
  session — every load-bearing claim in that scaffold was checked against
  real search results in this pass, not carried over on trust. See
  RESEARCH LOG for what was confirmed, corrected, or left honestly
  unconfirmed.
date_drafted: 2026-09-24
---

## FILE ROLE & METHOD

This is Spain's country file: one file, with six labeled internal zones
plus a Canary Islands callout, rather than a national-index-plus-regional-
files structure. **This structural choice, and the festival-sensitivity
calls in the FESTIVALS register below, were decided by the orchestrating
session before this verification pass began and are not relitigated
here** — see that session's own reasoning (summarized below for context)
and `DECISIONS.md`'s entry for this build.

### Structure: one file, six zones + a Canaries callout (already decided)

The scaffold's own swap test (`country-file-schema.md` §1.1) found Spain's
everyday dish set travels reasonably well nationally (tortilla, croquetas,
jamón, bravas, the bocadillo, the menú del día), while environment and
some serving formats do not (a Basque pintxo counter or Granada's
free-tapa ritual would look wrong transplanted elsewhere; the Atlantic
green-and-granite north looks nothing like whitewashed Andalusia). The
orchestrating session weighed this against the identity-driven-regional-
cuisine-over-predicts-splits caution `country-file-schema.md` §1.1 itself
flags, and decided: **one file, six zones, handled as environment/format
deltas rather than a US-style regional-file split.** This pass did not
revisit that call. It did spot-check two of the zone-anchoring claims the
task specifically flagged as worth checking even with the structure
settled:
- **Is pintxo culture really Basque/Northern-specific?** Yes — every
  source consulted treats pintxos as a Basque Country/Navarre-region
  institution (the counter-top, skewered, composed-bite format), not a
  nationwide bar norm; the zone-coded treatment holds.
- **Is paella really Valencia-anchored, not a floating national dish?**
  Confirmed directly, and more strongly than the scaffold's own hedge:
  paella is documented as **a lunch-only dish, most commonly a Sunday
  family meal**, that "nació en la huerta valenciana" — multiple current
  Spanish food-culture sources state plainly that eating paella at dinner
  is treated as a digestive/cultural mismatch in Valencia specifically,
  not a case of one region merely preferring it more. [CONFIDENCE: HIGH]
  [SOURCE: [Tu Arrocero — Paella en verano](https://tuarrocero.com/blogs/el-sabor-del-domingo/paella-en-verano); [Gastraval — Cómo se come la paella](https://gastraval.com/como-se-come-la-paella-el-protocolo-definitivo/)]

**Cantabria's placement between zones 1 and 2 remains the scaffold's own
editorial judgment call**, not independently re-adjudicated this pass —
carried forward as-is.

### Zones (one scheme, used throughout)

| # | Zone | Covers | Visual register |
|---|---|---|---|
| 1 | Atlantic Northwest | Galicia, Asturias | Green hills, rain, granite, slate roofs, hórreos (stone granaries on stilts), harbours |
| 2 | North | Basque Country, Navarre, Cantabria, La Rioja | Green valleys, stone and timber farmhouses, dense old quarters, pintxo counters |
| 3 | Catalonia & Balearics | Barcelona, Girona, Tarragona, Mallorca | Mediterranean light, old-quarter stone streets, covered markets |
| 4 | Valencia & Murcia | Valencia, Alicante, Murcia | Bright coast, orange groves, rice fields (huerta/albufera), wide beaches |
| 5 | Andalusia | Seville, Córdoba, Granada, Málaga, Cádiz, Almería, Jaén | Whitewash, flower-pot patios, azulejos, iron rejas, hard sun, deep shade |
| 6 | Centre | Madrid, Castilla y León, Castilla-La Mancha, Extremadura, Aragón | Brick and stone, arcaded plazas mayores, taverns with hanging hams, plains |
| — | Canary Islands (callout) | Tenerife, Gran Canaria, others | Subtropical, black volcanic sand, dry volcanic slopes |

**Scope (inherited from the scaffold, not relitigated):** in scope —
comida (lunch), cena (dinner), and snacks (tapas, pintxos, aperitivo,
merienda). Out of scope — breakfast, except through the opt-in Morning
Module below. No beverage other than Coca-Cola is catalogued as a subject.

### File-wide rules for every scene built from this file

1. **Text as atmosphere.** Background text (menu chalkboards, price
   cards, shop signs, tins, napkin dispensers) may appear only as heavily
   blurred, unreadable patches of color, in the midground or background.
   Never quote example words or prices in a prompt. Any readable word,
   number, or brand mark in the output means reject or retouch. Blur
   instructions are known to fail on background signage regardless
   [`country-file-schema.md` §7.5, HIGH — first-party finding].
2. **The can.** Always write "the classic red Coca-Cola can (original,
   not Diet Coke or Coke Zero)." Its branding is composited in post,
   never trusted from the generation (`coca-cola-guidelines.md` §1–§2).
3. **No other drinks in frame.** Spanish bar, terraza, and festival
   scenes carry strong training priors toward beer (caña), wine, vermut,
   sangría, tinto de verano, rebujito, cava, coffee, and fresh juice.
   Exclude them explicitly in every prompt.
4. **Nothing held in a hand.** Stage all food and the can resting on a
   surface (`country-file-schema.md` §7.5).
5. **Breakfast is out of scope**, except through the opt-in Morning
   Module (off by default; log every use in `DECISIONS.md` as a scope
   exception).

---

## QUICK-REFERENCE: GENERIC SCENE REGISTERS

| Generic scene type | What to draw on |
|---|---|
| **Neighbourhood bar / bar de barrio** | Stainless-steel or zinc counter, high stools, a glass tapas display case, a TV in the corner, blurred bottle shelves behind, a chrome napkin dispenser. The default everyday Spanish venue. |
| **Traditional tavern (Centre)** | Dark wood, tiled wainscot, hanging jamón legs, marble-topped tables. |
| **Pintxo bar (zone 2)** | Platters of composed bites lined along the counter, toothpicks upright, a standing ledge for eating. |
| **Neighbourhood covered market (mercado municipal)** | Cast-iron-and-glass roof, fixed stalls, tiled floors, an in-market bar with 6–10 stools. The default for an everyday market brief. |
| **Terraza / plaza café table** | Small square metal table and plain chairs on a stone plaza, a plain parasol, golden-hour light. |
| **Chiringuito (beach bar)** | Wooden deck or plastic tables on sand, reed/thatch shade, the sea behind. |
| **Menú-del-día dining room** | A small table with a paper tablecloth, fast turnover, a set three-course sequence. |

---

## ZONE CHARACTERIZATION

Spain's everyday lunch/dinner/snack repertoire (tortilla, croquetas,
jamón, bravas, the bocadillo, the menú del día) travels nationally without
looking visibly wrong — the swap test's food axis mostly passes, per the
structural decision above. What does not travel is **environment** (see
the zone table above) and **some serving formats** (a pintxo counter, a
free tapa, a paellera on the table) — these are handled as zone-coded
deltas inside this one file rather than a structural split.

**What this is not claiming.** Catalonia, the Basque Country, and Galicia
have co-official languages and strong, real regional identities that go
well beyond food; this file's "zone" framing is a staging convenience for
an image-generation brief, not a claim about political or cultural
identity, and a human reviewer retains final say on whether that framing
is the right one for TCCC's purposes (`country-file-schema.md` §7).
**Caricature-avoidance note (editorial judgment, not a sourced claim):**
do not default every Spain-set scene to flamenco dress, bulls, castanets,
or sangría pitchers (see the sensitivity notes under FESTIVALS); do not
default the whole country to Andalusia's whitewash-and-hard-sun register;
do not conflate Spanish and Mexican food iconography (sombreros, cacti,
maize tortillas, chili sauces have no place here — a Spanish tortilla is
a potato omelette, not a flatbread).

---

## TRUSTED CONTENT

### GENERAL NORMS

**Meal clock and light** — the most load-bearing staging fact in this
file, and the one this pass verified most directly.

| Occasion | Typical time | Confidence |
|---|---|---|
| Aperitivo | ~13:00–14:00 | MEDIUM |
| **Comida** (main meal) | ~14:00–16:00 | HIGH |
| Sobremesa | ~15:30–17:00 | MEDIUM |
| Merienda | ~17:30–19:00 | MEDIUM |
| Tapeo / terraza | ~20:00–23:00 | MEDIUM |
| **Cena** | ~21:00–22:30 | HIGH |

Comida (14:00–16:00) and cena (21:00–22:30) are corroborated directly, not
just carried from the scaffold's hedge: Spanish food-culture reporting
citing time-use patterns states breakfast 7–9am, lunch 14:00–16:00, and
dinner 21:00–22:30 nationally, with Catalonia specifically confirmed at a
slightly later 14:30–15:30 lunch / 21:30–22:30 dinner window via a
dedicated regional time-use source. [CONFIDENCE: HIGH] [SOURCE:
[Agencia SINC — ¿Por qué en España comemos a las tres?](https://www.agenciasinc.es/Reportajes/Por-que-en-Espana-comemos-a-las-tres)]
**§5.2 cross-country contrast, now directly comparable**: Spain's cena
(21:00–22:30) is markedly later than the UK's measured ~18:00–19:00 peak
and the US's ~18:19 peak (`uk.md`), and close to (slightly earlier than)
Uruguay's 21:30+. This is one of the sharpest single cross-market
contrasts in the KB so far and is worth stating in any comparative brief.
Summer sunset in Madrid runs roughly 21:00–21:50 through June, confirmed
directly via sunrise/sunset data (latest sunset 27 June, ~21:50).
[CONFIDENCE: HIGH]

- **Comida is the day's biggest meal; cena is lighter.** A heavy plated
  roast or stew reads as lunch; a spread of small bites reads as dinner.
  [CONFIDENCE: MEDIUM — consistent with, though not separately re-sourced
  from, the meal-timing sourcing above]
- **Sharing is the default for tapas and raciones.** Plates go in the
  middle; each diner has a fork (or toothpicks) and bread. Individually
  plated mains belong to the menú del día and sit-down restaurants. Never
  individually plate a tapas scene. [CONFIDENCE: HIGH — consistent with
  every tapas-culture source consulted this pass]
- **Bread with every lunch and dinner**, via a small basket or a paper/
  plastic bag (picos in a basket, Andalusia). [CONFIDENCE: HIGH]
  **Bread directly on the tablecloth, not on its own plate, is a real,
  documented casual-bar practice — corrected from the scaffold's own
  flagged LOW-confidence guess to a sourced claim.** A Spanish table-
  etiquette source states plainly that bread can be served either on a
  dedicated small plate or directly on the tablecloth, and consumer
  food-safety reporting specifically criticizes the widespread bar habit
  of a shared bread basket/bag touching bare tablecloth and circulating
  table to table — a real, if debated, everyday practice, not the
  scaffold's guessed-at unknown. [CONFIDENCE: MEDIUM — a genuine, sourced
  practice, but one source frames it as a hygiene complaint rather than a
  universal norm, so treat "bread directly on the cloth in a casual bar"
  as an authentic, stageable option, not the only correct one] [SOURCE:
  [protocolo.org — Dónde se coloca el pan en la mesa](https://www.protocolo.org/social/la-mesa/donde-se-coloca-el-pan-en-la-mesa.html); [El Español — La costumbre en los bares en España que convierte el pan en un peligro](https://www.elespanol.com/ciencia/nutricion/20230115/costumbre-bares-espana-convierte-pan-peligro-salud/733427052_0.html)]
- **Olive oil and vinegar cruets** (aceitera y vinagrera, often in a small
  metal stand with salt) are the classic table condiment set for salads.
  [CONFIDENCE: MEDIUM — not independently re-verified this pass beyond
  general, uncontested culinary-culture knowledge]
- **No chili heat as a table default.** Spanish tables don't carry hot
  sauce; bravas sauce (paprika-based) and guindilla peppers are the mild
  exceptions. A chili-heavy table is a Mexican-conflation error.
  [CONFIDENCE: HIGH]
- **Cutlery: Continental, fork left, knife right — confirmed as the
  standard European convention Spain follows, not independently
  Spain-specific sourcing.** `tableware-composition-reference.md` §2
  states a generic Western "fork/knife always right side" default that
  does not hold for Continental Europe; Spanish table-protocol sources
  confirm the fork-left/knife-right layout as standard, consistent with
  the same override `uk.md` already applies for the UK. [CONFIDENCE:
  MEDIUM-HIGH] [SOURCE: aggregated Spanish table-protocol sourcing
  (protocolo.org and related consumer-protocol sites)] **This file adds
  the same §5 override for Spain that `uk.md` already established for the
  UK.**
- **Bar napkins**: small, thin, slippery white paper squares from a metal
  dispenser (servilletero). Dispensers are often branded; blur them or
  keep them plain. [CONFIDENCE: MEDIUM — not independently re-verified
  this pass]
- **Sobremesa**: lingering at the cleared or half-cleared table, talking,
  plates pushed aside, crumbs on the cloth. [CONFIDENCE: MEDIUM-HIGH — a
  widely and consistently documented Spanish social custom, not
  individually re-searched this pass since it did not surface as
  contested]
- **Merienda**: an afternoon snack, especially for children and students —
  a small bocadillo, bread with chocolate, fruit, or a pastry. In scope
  as a snack occasion. [CONFIDENCE: MEDIUM-HIGH]

### SPANISH VESSEL & SCALE REFERENCE

**Scale anchors.** Per `coca-cola-guidelines.md` §3/§4.3, Spain's standard
single-serve can is the **330mL, 115.2mm (11.52cm) tall, 66.1mm (6.61cm)
diameter can** — the verified UK/European figure, not the scaffold's own
unverified ~11.5cm estimate and not the US 355mL/123mm can. **Spain also
has its own confirmed on-premise glass-bottle standard**, found this pass
and now recorded in `coca-cola-guidelines.md` §4.3: Coca-Cola's current
Spanish hostelería (bar/restaurant) returnable-glass-bottle program sells
**350mL (147mm tall, 76.1mm diameter) for meals and 237mL (roughly 19cm
tall, modeled on the 1915 contour design) for an aperitivo/afternoon/
evening drink** — a real, current, named commercial program, not a
generic placeholder. [CONFIDENCE: MEDIUM-HIGH for the two sizes existing
and their meal-vs-aperitivo positioning; MEDIUM for the 350mL dimensions;
LOW-MEDIUM for the 237mL's exact dimensions — see `coca-cola-guidelines.md`
§4.3 for the full citation and caveats] Generic plate sizes fall back to
`tableware-composition-reference.md` §2.

**Vessels** — sizes below reflect this pass's own WebSearch verification
where marked; unmarked rows are carried from the scaffold at a downgraded,
honestly-flagged confidence, not independently re-searched this pass.

| Vessel | Typical size | Visual notes | Confidence |
|---|---|---|---|
| Plato de tapa / platillo | 12–16 cm round or small oval | Plain white, thick rim; saucer-like | LOW-MEDIUM (not independently re-searched) |
| Plato de ración (oval) | 22–28 cm long | White oval; the workhorse of shared bar food | LOW-MEDIUM |
| Dinner plate (plato llano) | 26–28 cm | Per `tableware-composition-reference.md` §2 | — |
| Soup plate (plato hondo) | 22–24 cm, 3–4 cm deep | Lentejas, fabada, cocido broth | LOW-MEDIUM |
| **Cazuela de barro — individual** | **~10 cm for a minimal single portion, up to ~18 cm for a fuller individual tapa serving** — corrected from the scaffold's single 12–15cm guess, which undersold the range | Terracotta; glazed brown or amber inside, matte unglazed rim and underside | MEDIUM — verified this pass, two distinct sizes both genuinely in use depending on portion [SOURCE: aggregated Spanish cazuela/gambas-al-ajillo retail and recipe sourcing] |
| Cazuela — ración | 18–22 cm | Same finish | LOW-MEDIUM |
| Cazuela — family | 28–35 cm | Two small lug handles | LOW-MEDIUM |
| Cazuelita (crema catalana) | 10–12 cm, ~2 cm deep | Shallow, glazed | LOW-MEDIUM |
| **Paellera** | **~30 cm ≈ 4 servings, ~36–48 cm ≈ 6–11 servings, ~50–70 cm ≈ 11–20 servings; festival pans 1–3 m+** — figures adjusted from the scaffold's guess using two independent retail/culinary sizing sources, which broadly agree in direction but not to the centimeter | Polished carbon steel (dark, patinated) or enamelled (black with white flecks); two looped handles; measured by the mouth diameter, excluding handles | MEDIUM — corroborated across multiple current Spanish cookware/culinary sources, though exact per-serving figures vary source to source by a few cm [SOURCE: [Tu Arrocero — Cuántas raciones salen de una paella](https://tuarrocero.com/blogs/el-sabor-del-domingo/cuantas-raciones-salen-de-una-paella-segun-el-diametro); [Hierro y Brasa — Tamaño de paellera](https://hierroybrasa.com/que-tamano-paellera-segun-comensales.html)] |
| Tabla de pulpo (wooden plate) | **~20–30 cm round, most commonly 22–26 cm** — refined from the scaffold's 25–30cm-only range, ~2 cm thick | Pale, knife-scarred, oil-darkened wood | MEDIUM — verified this pass across multiple current Galician cookware retailers, which stock 16/20/22/26/30cm sizes with 22–26cm most common [SOURCE: aggregated Galician wooden-octopus-plate retail sourcing] |
| Tabla de ibéricos | 30–40 cm rectangular board | Wood or slate | LOW-MEDIUM |
| Jamonero + whole leg | Leg ~70–90 cm; stand base ~40–50 cm | Wooden board, metal clamp, hoof up | LOW-MEDIUM |
| Cesta de pan | 18–22 cm | Wicker or cloth-lined metal | LOW-MEDIUM |
| Vinagreras set | Bottles ~12–18 cm tall | Clear glass, one golden, one dark | LOW-MEDIUM |
| Servilletero | ~10–12 cm | Chrome, often branded (blur) | LOW-MEDIUM |
| Paper cone (cucurucho) | 15–20 cm tall | White or kraft paper | LOW-MEDIUM |
| Gazpacho glass | **Two genuinely different registers, not one size**: a small ~100mL shot-style glass for a starter-course tasting pour, or a fuller ~250–400mL "vaso de tubo"-style tumbler if served as a drink-like portion | Slightly shorter than the can for the tumbler register | LOW-MEDIUM — the ~100mL tapa-pour figure and the generic 250–400mL tumbler-capacity figure are each independently sourced, but no source directly confirms which register is more common for a Coca-Cola-adjacent staging brief; offer both rather than picking one silently, per §4.6 [SOURCE: aggregated Spanish gazpacho-serving and vaso-de-tubo hospitality-glassware sourcing] |
| Tupper | ~15 × 10 × 6 cm | Clear plastic, colored lid | LOW-MEDIUM |
| Foil tray (pollo asado) | ~25 × 20 cm | Crimped aluminium | LOW-MEDIUM |

**Breads**

| Bread | Size | Look | Confidence |
|---|---|---|---|
| Barra (pan de barra) | **~60–75 cm × 5–7 cm** — refined from the scaffold's 55–70×6–8cm guess using a dedicated bread-measurement source, close enough that the correction is minor | Crackly golden crust with diagonal slashes, pale open crumb, pointed ends | MEDIUM — corroborated, though figures still vary by bakery/region [SOURCE: [Cocinalidad — ¿Cuánto mide una barra de pan?](https://cocinalidad.com/cuanto-mide-una-barra-de-pan/)] |
| Pistola | ~30–40 cm | Shorter, stubbier barra | LOW-MEDIUM |
| Bocadillo cut | ~20–30 cm (a third to a half barra) | Roughly two to two-and-a-half cans long | LOW-MEDIUM |
| Pan de cristal | ~25–30 cm | **Confirmed**: very thin, glassy, shattering crust from very high (60%+) hydration dough; huge irregular holes; originates in Catalonia, credited to baker Jordi Nomen (background note only — never a prompt subject) | HIGH for the texture/construction description [SOURCE: [Wikipedia (ES): Pan de cristal](https://es.wikipedia.org/wiki/Pan_de_cristal)] |
| Pan gallego | ~25–30 cm round | Thick dark crust, small knob (moño) on top, open glossy-walled crumb | LOW-MEDIUM (not independently re-searched this pass) |
| Hogaza / pan de payés | ~25–30 cm round | Flour-dusted, thick rustic crust | LOW-MEDIUM |
| **Mollete (de Antequera)** | ~12–15 cm soft flat oval | **Confirmed**: low-hydration-relative, high-moisture dough; pale, flour-dusted, very soft crumb, barely browned, elliptical/flattened shape — protected as a Denominación/Indicación de Origen product specifically from Antequera, Andalusia | HIGH [SOURCE: [Gastronomía & Cía — Mollete de Antequera con IGP](https://www.gastronomiaycia.com/2020/11/20/mollete-de-antequera-con-indicacion-geografica-protegida-igp/)] |
| Picos | ~5–8 cm | Tiny crunchy knotted breadsticks | LOW-MEDIUM |
| Regañás | Shards ~8–12 cm | Thin, flat, blistered crackers | LOW-MEDIUM |
| Montadito roll | ~8–10 cm | Mini roll, a bit shorter than the can | LOW-MEDIUM |

**Note:** "barra" means both the bread and the bar counter. In prompts,
say "baguette-style bread" or "the bar counter" to avoid ambiguity.

### VISUAL & PLATING NORMS

- **Palette**: olive-oil gold and sheen; pimentón brick-red (bravas,
  pulpo, chorizo); saffron gold (paella); egg-yellow cut faces (tortilla);
  jamón's garnet red with ivory fat; blistered bright green (Padrón);
  white-and-silver (boquerones); terracotta brown (cazuelas). The south
  and coast read brighter and fresher; the north and centre read heartier
  and browner. [EDITORIAL — a synthesis of the dish entries below, not a
  single sourced claim]
- **Plating is simple and shared.** Plain white plates, terracotta
  cazuelas, wooden boards; food mounded or fanned, not composed, with
  little garnish beyond parsley, a lemon wedge, or an oil drizzle.
  Micro-herbs and sauce swooshes read as a modern restaurant, not ordinary
  Spain. [CONFIDENCE: MEDIUM — consistent with, though not independently
  re-sourced beyond, general Spanish food-photography and culinary-
  culture consensus]
- **Sizzle is a Spanish signature**: dishes arriving still bubbling in
  terracotta (gambas al ajillo, pil-pil, chorizo in cider) — tiny bubbles
  at the rim, a shimmer of hot oil, a light wisp of steam.
  [CONFIDENCE: MEDIUM-HIGH]
- **Bar-counter register (pick two or three per scene)**: a stainless-
  steel or zinc counter; a glass tapas display case (vitrina); a jamón leg
  on its jamonero; hams hanging from the ceiling (traditional); blurred
  bottle shelves behind; a TV in the corner; high stools; a paper napkin
  dispenser. [CONFIDENCE: MEDIUM-HIGH]
- **Coca-Cola bar serve**: a glass with ice cubes and a lemon slice, with
  the bottle or can alongside — condensation beads on the cold can/glass,
  ice clear-to-cloudy, a thin wedge or round of lemon. [CONFIDENCE:
  MEDIUM — not independently re-verified this pass beyond general
  observation of Spanish bar-service convention, though it is directly
  consistent with the same "ice and a slice" Coca-Cola pub serve `uk.md`
  documents from Coca-Cola GB's own foodservice guidance]

#### Texture lexicon (use in prompts)

| Surface type | Use | Avoid |
|---|---|---|
| Fried (flour-dusted, "a la andaluza") | "thin, pale-gold, matte, dry-crisp coating, faintly speckled, no visible egg-batter puff" | "thick batter," "breaded," "tempura" |
| Fried (batter, "a la romana") | "puffier, smoother, slightly thicker pale-golden batter shell (flour + egg)" | "crunchy breadcrumbs" |
| Fried (breadcrumb) | "fine, even breadcrumb shell, amber-gold, tiny crumbs visible" | "panko," "craggy" |
| Fried potato | "jagged edges, crackly golden corners, fluffy white interior" | "uniform cubes," "wedges," "fries" |
| Egg | "glossy, loose, barely-set yolk" / "set, matte cut face" | "rubbery," "folded omelette" |
| Cured meat | "near-translucent slices, glistening ivory fat" | "thick deli slices," "uniform pink ham" |
| Olive oil | "a golden pool with small bubbles," "oil beading on the surface" | "greasy," "shiny glaze" |
| Stew | "loose, glossy broth with fat droplets on top" | "thick gravy," "creamy" |
| Bread crust | "crackly, shattering crust shedding fine flakes; open, irregular crumb" | "soft bun," "sliced sandwich bread" |
| Grilled | "blistered, charred in patches, glossy" | "neat crosshatch grill marks" |

Neat parallel grill stripes are a US-barbecue default; Spanish plancha and
brasa cooking reads as even browning or irregular char. **The andaluza-vs-
romana flour-only-vs-flour-and-egg distinction above is now independently
confirmed, not just a plausible guess** — sourced reporting on the two
styles states directly that a la andaluza uses flour alone (no egg),
shaken to remove excess and fried until dry and light, while a la romana
batters in flour plus egg for a thicker, denser, more tempura-like shell.
[CONFIDENCE: HIGH] [SOURCE: [El Diario — Calamares a la andaluza vs. a la romana](https://www.eldiario.es/viajes/calamares-andaluza-vs-calamares-romana-grandes-diferencias-tapas-clasicas-pm_1_12751009.html)]

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **There is no single "Spain look"; state the zone** (see the zone
  table). With no zone named, fall back to an urban flat or neighbourhood
  bar in the Centre zone. [EDITORIAL fallback]
- **Flats (pisos) are the dominant housing type, and by a wider margin
  than the scaffold's own hedge suggested — now an exact, current EU
  figure, not a vague "among the highest."** Eurostat's Housing in Europe
  2025 data puts **65.3% of Spain's population in flats/multi-family
  dwellings versus 34.7% in single-family houses — the highest flat-share
  of any EU member state**, ahead of Latvia (~64%) and Malta (~63%).
  [CONFIDENCE: HIGH] [SOURCE: [idealista/news — Spain has the largest
  population living in flats in the EU](https://www.idealista.com/en/news/property-for-sale-in-spain/2026/03/24/887223-spain-has-the-largest-population-living-in-flats-in-the-eu); Eurostat Housing in Europe 2025 edition] "At home" should
  default to a flat in a mid-rise block far more confidently than the
  scaffold's own hedge implied. Other real, co-equal registers: suburban
  chalets and adosados (terraced houses) in urbanizaciones, often with a
  community pool; the family village house (casa del pueblo) for summers
  and weekends. [CONFIDENCE: MEDIUM for these two alternates — not
  independently re-sourced this pass, carried from the scaffold]
- **Interior markers (pick one or two per scene)**: tiled or terrazzo
  floors with a cool sheen; roller shutters (persianas) half-lowered,
  casting horizontal bars of light; light walls; a compact kitchen with
  tiled walls; a small table with an oilcloth (hule) or cloth; laundry
  drying on a balcony rack or line (dryers are uncommon); a glazed
  laundry gallery (galería); an orange butane cylinder in older kitchens
  (declining). [CONFIDENCE: MEDIUM each, LOW for the butane cylinder and
  dryer-rarity specifics — none of these were independently re-searched
  this pass; they are carried from the scaffold as plausible, uncontested
  general knowledge, not newly verified]
- **Gen Z lens (§5.3) — now backed by an exact, current Eurostat figure,
  not the scaffold's own softer hedge.** Spain recorded an average age of
  **30.0 years** for young people leaving the parental home in 2024 — one
  of the EU's highest, alongside Croatia (31.3), Slovakia (30.9), Greece
  (30.7), and Italy (30.1), well above the EU-wide average of 26.2.
  [CONFIDENCE: HIGH] [SOURCE: [Eurostat — Age of young people leaving
  their parental home](https://ec.europa.eu/eurostat/en/web/products-eurostat-news/w/ddn-20260915-1)] Living with parents in the family piso is
  therefore a squarely statistical-default young-adult home scene, not
  just a plausible option. Shared flats (pisos compartidos) are the
  documented alternative in Madrid, Barcelona, and university cities.
  [CONFIDENCE: MEDIUM for the shared-flat alternative specifically — not
  independently re-sourced this pass] **§5.2 contrast**: this is the
  near-exact opposite of the US's own younger-skewing home-leaving
  pattern and structurally similar in direction (though not identical in
  degree) to the UK's own documented parental-home statistics for young
  adults (`uk.md`).
- **Caricature avoidance [EDITORIAL]**: tourist kitsch (flamenco dress,
  bulls, castanets, sangría pitchers, "everything-seafood" paella,
  landmark skylines — flamenco dress is authentic only for an explicit
  Feria de Abril brief, see FESTIVALS); Mexican conflation (sombreros,
  cacti, papel picado, maize tortillas, chili sauces — a Spanish tortilla
  is a potato omelette); the siesta cliché (don't stage daytime napping
  as routine); a sunny-south default for the whole country. The ordinary
  baseline is a tidy, tiled, light-walled flat or an unremarkable
  neighbourhood bar.

#### Scenario: Casual lunch at home — 1 person

The kitchen table or small living-dining room of a piso, ~14:00–15:00;
persianas half-down, slatted bright light across a tiled floor. Gen Z:
a young adult at the family table (statistically the default per the age-
leaving-home figure above), or a shared-flat kitchen. Plate: a soup plate
of lentejas, a leftover tortilla wedge with salad, pasta, or a filete with
fried potatoes. A chunk of barra on the table; the cruet set. [EDITORIAL
for the setting synthesis; dish list MEDIUM]

#### Scenario: Casual lunch at home — 2 people

A small table with two place settings (fork left, knife right per the
override above); a shared ensalada mixta in the centre, individually
plated mains, bread on the table. [EDITORIAL]

#### Scenario: Casual lunch at home — 3 people

**Sunday family comida**: a paella in its pan on a trivet at the table's
centre (strongest in zone 4, and now confirmed as specifically a Sunday,
lunchtime, family-gathering dish, not just a common one — see the
structural-decision section above), a cocido (zone 6, winter), or several
shared plates, followed by a long sobremesa. Co-equal alternative: three
flatmates with a tortilla and raciones. [CONFIDENCE: MEDIUM-HIGH for the
paella-as-Sunday-lunch framing specifically, given the direct sourcing
above; MEDIUM for the rest]

#### Scenario: Dinner at home, indoors

~21:00–22:30: dusk or blue hour in summer, artificial light in winter. A
light spread (picoteo): tortilla, a board of cured meats and cheese,
salad, croquetas, fried eggs with potatoes, grilled fish. [CONFIDENCE:
MEDIUM]

#### Scenario: Meal outdoors at home

**Flat balcony or roof terrace (azotea)**: a bistro table on tiles,
potted geraniums, an awning, a summer evening. Balcony grilling is not
typical [CONFIDENCE: LOW for this specific restriction — not
independently verified this pass, though it is directionally consistent
with the balcony-fire-safety caution `uk.md` documents for UK flats].
**Chalet or village house**: a patio with a built-in brick barbecue, or a
paella over a gas-ring paellero or wood fire; a long table under a vine
pergola or awning; the community pool beyond. [CONFIDENCE: MEDIUM]
**Andalusian courtyard**: whitewash, azulejo dado, geranium pots on the
walls, tiled floor. [CONFIDENCE: MEDIUM] **§5.2**: the outdoor paella is
Spain's rough equivalent of Uruguay's asado fire as a defining, sourced,
staging-relevant outdoor-cooking ritual. [EDITORIAL]

#### Scenario: Meal on the go — 1 person

A bocadillo in white paper or foil, resting on a bench or plaza wall; a
quick pincho at the bar counter, standing; a tupper lunch at a desk.
Pedestrian- and bar-counter-based, not car-based like the US and not
meal-deal-based like the UK. [CONFIDENCE: MEDIUM]

#### Scenario: Away from home — 1 person at a restaurant/café

**Menú del día**: a small table with a paper tablecloth, a bread basket,
a primer plato, then a segundo, then a postre, fast service, the menu
board a blurred colour patch. Coca-Cola is a normal included drink
(exclude wine and water). [CONFIDENCE: HIGH for the format] A stool at
the bar counter with a tapa or pincho is the other default.
**Free-tapa cities — confirmed and broadened beyond the scaffold's own
"zone 5, also León" hedge.** Granada, León, Jaén, and Ávila are all
independently documented as cities where a tapa arrives free with a
drink, and **Granada specifically is confirmed to include soft drinks
(refresco), not just alcoholic drinks, in the free-tapa custom** — a
water order typically does not qualify, but a Coca-Cola order does.
[CONFIDENCE: HIGH for the multi-city phenomenon; HIGH for Granada
specifically including soft drinks] [SOURCE: [Info Viajera — Tapas
gratis con la bebida en Granada](https://www.infoviajera.com/2022/04/tapas-gratis-con-la-bebida-en-granada-si-pero-hay-que-ver-donde/); [Moncloa — Tapas gigantes gratis con la bebida... León](https://www.moncloa.com/2026/02/21/tapas-gratis-bebida-leon-3361651/)]

#### Scenario: Away from home — 2–3 people

**Tapeo**: standing at the counter or seated at a terraza table with
several raciones in the centre, forks and toothpicks, bread. [CONFIDENCE:
HIGH] **Traditional tavern**: dark wood, tiled wainscot, hanging hams,
marble-topped tables. [CONFIDENCE: MEDIUM] **Arrocería or marisquería**:
a paellera or seafood platter at the table's centre. [CONFIDENCE: MEDIUM]
**Pintxo crawl (zone 2)**: platters along the counter, plates carried to
a standing ledge. [CONFIDENCE: MEDIUM-HIGH]

---

## CROSS-CUTTING REGISTER: FOOD MARKETS (mercados)

Markets serve three standard scenarios: on the go (1 person), away
(1 person), and away (2–3 people). Offer the three registers as an
explicit choice (§4.6); never blend them. **This register was not the
focus of this pass's verification effort and is carried mostly at the
scaffold's own confidence level, downgraded where a specific figure
wasn't independently re-checked** — treat it as a reasonable, well-
organized starting synthesis, not a freshly sourced one.

| | 1. Neighbourhood covered market | 2. Flagship / gastro-market | 3. Open-air street market |
|---|---|---|---|
| **Terms** | mercado municipal / mercat municipal | mercado gastronómico | mercadillo / mercat ambulant |
| **What it is** | Permanent city market hall; locals' daily shopping | Famous historic or converted hall; mostly ready-to-eat food | Temporary weekly stalls in a street or plaza |
| **Light** | Soft, even, diffuse from an iron-and-glass roof | Warmer, brighter display lighting | Hard direct sun; striped awning shade |
| **Floor/structure** | Stone or tile, wet near fish stalls; fixed stalls with high counters | Polished floors; stalls styled as mini-bars | Paving; fold-out tables, crates, canvas awnings |
| **How people eat** | Seated on stools at an in-market bar; plated dishes | Grazing and standing: cones, skewers, small plates at high tables | Mostly off-site: fruit, nuts, a roast-chicken tray, a bocadillo on a bench |
| **Hours (lunch scope)** | Split schedule (jornada partida) is real and confirmed — a Soria municipal market's current posted hours run roughly 9:00–14:00 with limited afternoon reopenings, and Valencia's Mercat Central runs 7:30–15:00 with no afternoon reopening — **many close entirely by mid-afternoon, corroborating the scaffold's own claim, though exact hours vary market to market** | Midday into evening | Morning to ~14:00–15:00 |
| **Default use** | **Default for any everyday market brief** | A lively, grazing, visitor-facing brief | A town, village, or weekend brief |
| **Coca-Cola fit** | Can or glass bottle at the bar counter beside a plate | Can on a high table beside a cone | Can on a bench beside a wrapped bocadillo |

[CONFIDENCE: MEDIUM-HIGH for the three-way distinction itself, which
matches ordinary, uncontested observation of how Spanish markets
function; MEDIUM for hours, confirmed as genuinely split-schedule and
early-closing via two concrete current examples above rather than a
single national rule]

**1. Neighbourhood covered market** — cast-iron frames, a high glazed
roof, fixed stalls, tiled floors. **The scaffold's specific "Barcelona
runs roughly 40 neighbourhood halls" count was not independently
re-verified this pass and should be treated as unconfirmed** — dropped
from HIGH to a flagged, unresolved item in the Gap Log below rather than
repeated at its original confidence. Stall visuals (pick two or three):
fruit pyramids and tilted crates with a waxy sheen; hanging jamón legs;
glistening fish on crushed ice; olives in open tubs; bins of nuts and
dried red chillies; aproned stallholders. [CONFIDENCE: MEDIUM-HIGH —
general, uncontested market-visual knowledge, not individually
re-searched] Market bar counter: 6–10 stools, a smoking plancha, small
white plates — razor clams, prawns a la plancha, chickpeas with spinach,
tortilla, croquetas, fried eggs with potatoes. [CONFIDENCE: MEDIUM]

**2. Flagship / gastro-market** — glass display cases of pintxos; paper
cones of jamón or fried fish; skewers; high shared tables; dense crowds.
**Authenticity note [EDITORIAL]**: the most famous Barcelona market is
widely reported as heavily visitor-oriented and a poor proxy for local
everyday eating — describe it as "a bustling covered food hall with an
iron-and-glass roof"; never name it or show its entrance arch (§7.5).

**3. Open-air street market** — fold-out stalls under plain or striped
awnings; produce in crates, sold by weight; vans parked behind; the
zone's own architecture as backdrop. Eating: a bag of fruit, a paper cone
of nuts, a roast-chicken van, or a bocadillo from a bar on the square.
[CONFIDENCE: MEDIUM]

**Seasonal**: Christmas fairs (e.g. Barcelona's Santa Llúcia fair) sell
nativity figures and decorations, not food — don't transpose German food-
Christmas-market iconography to Spain. [CONFIDENCE: MEDIUM-HIGH,
uncontested general knowledge]

**Market-specific rules**: markets are the densest text environment
(price cards on sticks, stall signs, numbers) — heavily blurred,
midground/background only. Beverage leak: rows of bright fresh-juice cups
at flagship markets, beer/wine/coffee at market bars — exclude
explicitly. Cones: stage in a cone holder, on their side on a ledge, or
in a small tray. People: soft-focus and non-dominant, no recognisable
faces.

---

## CROSS-CUTTING REGISTER: COCA-COLA MOMENTS — WITH OR WITHOUT A BITE

Settings where a Coca-Cola alone, or with a small bite, is a natural,
authentic moment. All are [EDITORIAL] staging choices; individual facts
are tagged where they were checked this pass.

**Drink-only scenes.** Without food, texture comes from the drink:
condensation beads on the cold can, a glass with ice and a lemon slice,
sweat rings on a metal table, the bright light of the setting. A small
free bite (olives, a few crisps) often sits beside it, which is itself
authentic.

| Setting | Visual register | Bite (optional) | Confidence |
|---|---|---|---|
| **Terraza, late afternoon** | Square aluminium table and plain chairs on a plaza; plain cream parasol; golden low sun | Free tapa, a bowl of olives, a small dish of crisps | MEDIUM-HIGH |
| **Rooftop bar (azotea)** | City rooftops and terracotta tiles at dusk; string lights; low lounge seating | Nothing, or olives or nuts | MEDIUM |
| **Chiringuito (beach bar)** | Wooden deck or plastic tables on sand; reed or thatch shade; sea behind | Espetos, pescaíto, a bocadillo | MEDIUM-HIGH |
| **Beach towel** | Striped towel, beach umbrella, portable cooler (nevera), hard midday light | Tortilla in a tupper, a bocadillo in foil, fruit | MEDIUM |
| **Municipal pool (piscina municipal)** | Lawn with towels, concrete pool edge, blue water, summer; families and teens | A bocadillo in foil, crisps, an ice lolly | MEDIUM |
| **Merendero (picnic area)** | Pine woods, heavy stone or wooden picnic tables, a stone barbecue | Chorizo and chuletillas off the grill, tortilla | MEDIUM |
| **Padel court** | Glass-walled court, blue turf, a bench outside, evening floodlights | Nothing, or a snack | HIGH — see below |
| **Football in a bar** | TV glow (blurred screen), scarves, crowded counter | Raciones, bocadillos | MEDIUM-HIGH |
| **Stadium stands** | Concrete steps or plastic seats, floodlights | A bocadillo in foil, pipas | MEDIUM |
| **Plaza bench** | Stone bench, plane trees, dappled light | **Pipas** (shells piled beside) | MEDIUM-HIGH |
| **Cinema** | Dark foyer or seat row | Popcorn (palomitas) in a tub | MEDIUM |
| **Roadside venta / service area** | Long counter, trucker menú del día, plain dining room | Menú del día plates, a bocadillo | MEDIUM |
| **High-speed train** | Tray table, window blur of dry plains | A sandwich in plastic, crisps | MEDIUM |
| **University cafetería** | Formica tables, students, backpacks | A bocadillo, a pincho de tortilla | MEDIUM |
| **Mirador (viewpoint)** | Stone parapet over a valley, town, or coast | Nothing, or a snack | EDITORIAL |
| **Sobremesa at home** | Cleared lunch table, shutters down, slatted light | Remnants: bread, fruit bowl | MEDIUM-HIGH |

**Padel, verified this pass and upgraded from a general impression to a
hard figure**: padel is Spain's **second most-practiced sport after
football**, with roughly 4 million registered/regular players (and
broader estimates, counting casual players, north of 6 million — about
12.7% of the population), across nearly 4,500 clubs and roughly 17,000
courts nationwide. [CONFIDENCE: HIGH] [SOURCE: [Newtral — Una radiografía
de la fiebre del pádel en España](https://www.newtral.es/padel-espana-jugadores-pistas-europa/20240120/); [PadelAddict — El pádel, de moda en España](https://www.padeladdict.com/espana-epicentro-del-padel-4-millones-de-jugadores-y-17-000-pistas-lo-confirman/)] A post-match Coca-Cola on the court-side bench is
a genuinely well-evidenced, high-frequency, low-risk everyday scene, not
a speculative Gen Z flourish.

---

## CROSS-CUTTING REGISTER: FESTIVALS & SEASONAL OCCASIONS

**The sensitivity column was decided by the orchestrating session and is
not relitigated here**: exclude all bull imagery (including San Fermín
scenes — animal-welfare brand risk); do not stage La Tomatina at all
(food-waste/brand risk); never show product in religious procession
frames (Semana Santa, Corpus/romerías); keep product away from open
flame/fireworks (Fallas, Noche de San Juan). This pass verified the
**factual** claims — existence, dates, visual details — not the
sensitivity judgment calls themselves.

| Occasion | 2026 date (verified) | Zone | Setting visuals | Food | Coca-Cola fit | Sensitivity (already decided) |
|---|---|---|---|---|---|---|
| **Fallas** | **15–19 March** (plantà 15–16, Nit del Foc 18, Cremà 19) [CONFIDENCE: HIGH, verified] | 4 (Valencia) | Huge satirical papier-mâché sculptures in the streets, gunpowder smoke haze, marching bands, traditional costume | Buñuelos de calabaza, street paellas, churros | Street table; can beside buñuelos | Keep product away from fire and fireworks; genericize sculptures |
| **Semana Santa** | **29 March–5 April** (Good Friday 3 April) [CONFIDENCE: HIGH, verified] | All; strongest in 5 | Processions, candles, crowds | Torrijas, pestiños at home | Home table with torrijas only | **No product in procession frames**; religious event |
| **Feria de Abril** | **21–26 April** (alumbrado night of 20–21) [CONFIDENCE: HIGH, verified] | 5 (Seville) | Rows of striped canvas casetas, paper lanterns (farolillos), the Los Remedios fairground, flamenco dresses, horses | Pescaíto, tortilla, jamón, montaditos, gambas | Caseta table; flamenco dress authentic here | Exclude rebujito, sherry, and wine defaults |
| **San Isidro** | ~15 May [CONFIDENCE: MEDIUM — well-established fixed date, not individually re-searched this pass] | 6 (Madrid) | Hillside meadow picnics, chulapo outfits (checked caps, carnations) | Rosquillas "tontas y listas," picnic bocadillos | Picnic blanket | Low |
| **Corpus / romerías** | Movable, spring–summer [CONFIDENCE: MEDIUM] | Many | Countryside pilgrimages, decorated carts, picnics | Picnic tortilla, embutidos | Picnic | Religious; stage the picnic, not the rite |
| **Noche de San Juan** | 23 June [CONFIDENCE: MEDIUM-HIGH, well-established fixed date] | 3, 4, Galicia, coasts | Beach bonfires at night, people on sand, fireworks | **Coca de Sant Joan**; sardines (Galicia) | Can beside a coca slice on a beach blanket at night | Keep product away from flames |
| **San Fermín** | **6–14 July** (first encierro 7 July, 08:00) [CONFIDENCE: HIGH, verified] | 2 (Pamplona) | Crowds in white with red neckerchiefs, brass bands | Almuerzos, chistorra, ajoarriero | Street almuerzo or bar table | **Exclude all bull imagery**; animal-welfare brand risk |
| **Summer village fiestas** (fiestas del pueblo) | July–Sept, esp. August [CONFIDENCE: MEDIUM] | All | Plaza with stage and orchestra (verbena), plastic chairs, strings of small flags, peña groups in matching shirts, long communal dinners, giant community paella | Giant paella, bocadillos, grilled sausages | Long communal table at dusk; strong, low-risk register | Low; avoid bull-related events |
| **Music festivals** | Summer | Varied | Stages, lights, food-truck rows, wristbands | Food-truck burgers, bocadillos, pizza | Gen Z; can on a food-truck ledge | Genericize festival names and stages |
| **La Tomatina** | **26 August** (last Wednesday of August, confirmed as the standing rule) [CONFIDENCE: HIGH, verified] | 4 (Buñol) | Tomato-soaked streets | — | **Not recommended** | Food-waste and brand risk |
| **Magosto / castañas** | Autumn, ~November [CONFIDENCE: MEDIUM] | 1 and nationwide | Street chestnut vendors with smoking roasting drums | Castañas asadas in paper cones | Can beside a cone | Low |
| **Todos los Santos** | 1 November [CONFIDENCE: HIGH, fixed national date] | All | Home or bakery | Buñuelos de viento, huesos de santo, panellets (zone 3) | Home table | Cemetery visits are not a staging setting |
| **Fiestas del Pilar** | ~12 October [CONFIDENCE: MEDIUM] | 6 (Zaragoza) | Crowds, traditional dress | Local tapas | Street bar | Religious elements; stage the social side |
| **Carnaval** | February (movable) [CONFIDENCE: MEDIUM] | Cádiz (5), Canaries | Costumes, street crowds, confetti | Street snacks | Street table | Low |
| **Christmas / Nochebuena** | 24–25 December [CONFIDENCE: HIGH, fixed] | All | Family table, festive tablecloth | Seafood platters, roast lamb, turrón, polvorones, mazapán | Festive family table | Exclude the cava default |
| **Nochevieja** | 31 December [CONFIDENCE: HIGH, fixed] | All | Midnight, blurred TV countdown | **12 grapes** in a small bowl | Can beside the grape bowl | Exclude the cava toast default |
| **Reyes** | 5–6 January [CONFIDENCE: HIGH, fixed] | All | Parades (cabalgata); family merienda | **Roscón de Reyes** | Merienda table with roscón | Roscón is often a breakfast item; stage as merienda |

**Verification note**: the four festivals with the most staging-critical
dates and visuals (Fallas, Feria de Abril, San Fermín, La Tomatina) were
directly checked against 2026-specific sources this pass and confirmed
close to the scaffold's own estimate in every case — dates shift year to
year (Feria de Abril in particular follows Easter, so its exact dates
move), so treat the 2026 dates above as this year's instance of a
recurring pattern, not a fixed annual date, except where marked fixed.
The remaining festivals' dates are fixed calendar dates or well-
established, uncontested annual traditions not individually re-searched
this pass.

---

## OPTIONAL MODULE — MORNING OCCASIONS (off by default)

**Out of default scope.** Use only when a brief explicitly asks for a
morning occasion, and log each use in `DECISIONS.md` with its business
case. **This module was time-boxed this pass — not independently
re-verified beyond what's flagged below** — treat it as carried from the
scaffold at a downgraded confidence, not freshly sourced.

- **The mid-morning meal (~9:30–11:30) is distinct from breakfast.** It is
  hearty and savoury, and the drink is chosen separately, which makes it
  the most credible morning fit for Coca-Cola. [CONFIDENCE: MEDIUM — not
  independently re-verified this pass]
  - **Esmorzar de forquilla (Catalonia)**: plated cooked dishes at a
    market or traditional bar — tripe in a cazuela, salt cod, botifarra
    with white beans, fried eggs. [CONFIDENCE: MEDIUM]
  - **Almuerzo (Valencia)**: a huge bocadillo (omelette, sausage, or in
    some towns horse-meat steak [CONFIDENCE: LOW]); a plate of peanuts in
    their shells (cacaos), olives, and lupins on the table. A cremaet
    coffee usually follows (exclude). [CONFIDENCE: MEDIUM]
- **Churros and porras**: churros — thin, star-ridged, looped or in
  strips, crackly and pale gold; porras — thick, smoother, puffier;
  sugar-dusted or plain, from stalls or a churrería. Show without the
  drinking-chocolate cup unless the business case accepts it.
  [CONFIDENCE: HIGH for the pairing existing — well-established,
  uncontested general knowledge]
- **Honesty note [EDITORIAL]**: Coca-Cola replacing coffee at a
  café-con-leche breakfast is a brand proposition, not a documented
  Spanish norm. Don't present it as one.

---

## ZONE CALLOUTS (environment + dish pointers)

1. **Atlantic Northwest**: soft grey light, drizzle-wet granite, slate
   roofs, hórreos, green hills, fishing harbours with colourful boats.
   Dishes: pulpo á feira, empanada gallega, fabada, cachopo, Padrón
   peppers, shellfish (zamburiñas, navajas), cachelos, tarta de Santiago.
   Don't render whitewash or harsh sun here.
2. **North**: stone and timber farmhouses, green valleys, dense old-
   quarter lanes, pintxo counters stacked with platters — confirmed this
   pass as a genuinely Basque/Northern-specific institution, not a
   nationwide bar norm (see the structural-decision section). Dishes:
   pintxos (gilda), tarta de queso vasca, txistorra/chistorra, bacalao al
   pil-pil (compact), grilled chuletón (compact).
3. **Catalonia & Balearics**: Mediterranean light, old-quarter stone
   lanes, covered markets. Dishes: pa amb tomàquet on pan de cristal,
   calçots, botifarra, crema catalana, coca de Sant Joan, panellets.
   Balearics: sobrasada, pa amb oli (not developed).
4. **Valencia & Murcia**: bright coast, rice fields, orange groves, wide
   beaches. Dishes: paella and arroces (confirmed lunch-anchored — see
   structural-decision section), fideuà, buñuelos (Fallas).
5. **Andalusia**: whitewash, patios, azulejos, rejas, hard sun, deep
   shade; summer nightlife after dark. Dishes: gazpacho and salmorejo,
   pescaíto frito, espetos, serranito (confirmed — see dish catalog),
   flamenquín, free tapas (confirmed for Granada — see scenario above),
   picos and regañás, molletes (confirmed, DOP-protected — see vessel
   table), boquerones.
6. **Centre**: brick and stone, arcaded plazas, hanging-ham taverns, hard
   continental light, cold winters. Dishes: cocido madrileño, bocadillo
   de calamares, huevos rotos, callos, torreznos (now IGP-protected as of
   November 2024 — see dish catalog), roast lamb and suckling pig,
   patatas bravas (Madrid-original recipe confirmed — see dish catalog).
- **Canaries (callout)**: subtropical light, black volcanic sand, dry
  slopes. Dish: papas arrugadas con mojo (compact entry). Don't use for
  mainland briefs.

---

## DISH CATALOG

*Each entry: category · lineage (one line) · variants (§4.6) · format ·
vessel & scale · texture & finish · staging · common model failure ·
confidence · sources. Scale anchors: the 330mL can (115.2mm/66.1mm,
`coca-cola-guidelines.md` §3–4.3), Spain's confirmed 350mL/237mL
on-premise glass bottles (same §), and the vessel table above.*

### A. National core

#### Tortilla de patatas (tortilla española)

- **Category**: Everyday — home, bar, packed lunch, beach, picnic.
- **Lineage**: Native Spanish; unrelated to the Mexican tortilla.
- **Variants (§4.6), offered as choices**: con cebolla vs. sin cebolla
  (with or without onion) — a genuinely long-running, widely documented
  Spanish culinary debate; jugosa vs. cuajada (runny centre vs. fully
  set). **Default when unspecified**: con cebolla, jugosa. [EDITORIAL
  fallback] [CONFIDENCE: HIGH that both debates are real and widely
  known]
- **Format**: whole on a flat plate; a pincho wedge on a tapa plate with
  a bread slice; a bocadillo de tortilla; squares on toothpicks at a
  party.
- **Vessel & scale (§4.5) — confirmed and refined this pass**: the pan
  size actually used for a home tortilla is most commonly **24cm**, with
  22–26cm the practical range — below 22cm the tortilla comes out too
  tall and undercooks in the centre; above 28cm it comes out too thin and
  breaks when flipped, per a dedicated cookware-sizing source, which also
  gives a recommended pan depth of 4–6cm. A whole tortilla made this way
  reads roughly 3–5cm thick, about a third to half the can's height, and
  fills a 26–28cm serving plate with a narrow rim showing. A pincho wedge
  reads roughly 9–12cm on its longest edge. [CONFIDENCE: MEDIUM-HIGH —
  a specific, internally consistent cookware/technique source, not a
  single "gold standard" industry figure] [SOURCE: aggregated Spanish
  tortilla-pan sizing sources (Vaello Campos, IBILI cookware
  specifications)]
- **Texture & finish**: surface smooth, evenly golden to amber, faint
  darker freckles, occasional small blisters; edges rounded and slightly
  tucked under from flipping, like a thick cushion, never a flat, sharp-
  edged disc; cut face (jugosa) shows stacked layers of soft, pale-cream
  potato slices bound by glossy, loose, barely-set yellow egg that slowly
  seeps; cut face (cuajada) is matte, uniform, set egg holding clean
  edges; onion soft and translucent-golden between the potato; a light
  olive-oil sheen, never greasy pools. [CONFIDENCE: MEDIUM-HIGH — a
  well-established, uncontested visual consensus, not individually
  re-verified against a dedicated photography source this pass]
- **Staging**: a wedge removed to show the cut face toward the camera,
  bread beside it; state where the removed piece goes (§7.5 byproduct
  rule).
- **Common model failure**: a flat folded French omelette; an Italian
  frittata with vegetables on top; a Mexican flatbread; a pale, uniform
  "egg bake" with no visible potato layers.
- **Confidence**: HIGH for the con/sin cebolla debate existing; MEDIUM-
  HIGH for the pan-size/scale figures (verified this pass); MEDIUM-HIGH
  for visual description (uncontested consensus, not independently
  re-sourced this pass).
- **Sources**: [Vaello Campos — ¿Cuál es la mejor sartén para hacer las
  tortillas jugosas y perfectas?](https://vaellocampos.com/cual-es-la-mejor-sarten-para-hacer-las-tortillas-jugosas-y-perfectas/); general Spanish tortilla-recipe/cookware sourcing.

#### Croquetas

- **Category**: Everyday tapa or ración; home cooking.
- **Variants**: jamón (default), pollo, bacalao, boletus (mushroom),
  queso azul (blue cheese). [CONFIDENCE: HIGH — an extremely well-
  established, uncontested variant list]
- **Vessel & scale (§4.5) — corrected downward from the scaffold's own
  5–7cm guess.** A dedicated Spanish croqueta-sizing source states the
  ideal length as **roughly 3.5cm**, with commercial croquetas
  categorized by weight (cocktail ~15g, bite-sized ~25g, portion-sized
  ~35g, larger "croquetones" ~45g) rather than by a single fixed length —
  in practice, a standard home/bar croqueta runs noticeably shorter than
  the can's own 6.61cm diameter, not close to it as the scaffold implied.
  Ración: 6–10 on a 22–26cm oval; tapa: 2–4 on a small plate. [CONFIDENCE:
  MEDIUM — a specific, sourced figure, though from a single dedicated
  croqueta-culture site rather than cross-corroborated] [SOURCE:
  [Croquetas Ricas — Ranking tamaños de croquetas más consumidos](https://www.croquetasricas.com/ranking-tamano-croquetas-mas-consumidos/)]
- **Texture & finish**: fine, even, amber-gold breadcrumb shell, tiny
  crumbs visible, dry-crisp rather than oily, sometimes a hairline crack;
  cylinders with softly rounded ends or small ovals, handmade
  irregularity; cut face very creamy, glossy, ivory béchamel that slumps
  slightly when broken, with small pink jamón cubes (or pale chicken
  shreds, dark mushroom flecks); a wisp of steam when fresh. [CONFIDENCE:
  MEDIUM-HIGH — uncontested visual consensus, not individually
  re-sourced this pass]
- **Common model failure**: a mashed-potato croquette (dense, grainy,
  matte); panko-craggy coating; a uniform frozen-food look.
- **Confusion**: Cuban and Latin American croquetas look similar (a
  shared form); no visual distinction claimed.

#### Jamón (serrano / ibérico) + pan con tomate

- **Variants (§4.6)**: serrano (white pig) vs. ibérico (Iberian pig; "de
  bellota" is the top grade). Label tags stay unreadable. [CONFIDENCE:
  HIGH]
- **Format**: hand-carved slices fanned in a single overlapping layer on
  a plate; cut from a leg on a jamonero; with bread or picos; in a
  cucurucho cone at markets.
- **Vessel & scale**: slices ~5–8cm long, bite-size; ración: one layer
  over a 22–26cm plate; leg on stand: ~70–90cm leg, dominating a counter.
  [CONFIDENCE: LOW-MEDIUM — not independently re-searched this pass]
- **Texture & finish**: **tyrosine crystals, confirmed and refined this
  pass.** The small white specks visible on well-cured ibérico ham are
  tyrosine crystals — an amino acid that concentrates and crystallizes
  (typically 1–3mm across) as the ham loses water over a long cure
  (commonly 24 months or more for high-grade ibérico) — a genuine,
  visible sign of proper, prolonged curing, not a defect or contaminant,
  and safe to show. [CONFIDENCE: HIGH] [SOURCE: [FISAN — Tirosina, el
  aminoácido de la buena curación](https://www.fisan.com/blog/tirosina-el-aminoacido-de-la-buena-curacion/); [Jamón Lovers — Mitos del jamón: Puntos blancos o Cristales
  Tirosina](https://www.jamonlovers.es/puntos-blancos-jamon-cristales-tirosina-jamon/)] Ibérico lean is deep garnet-to-purple with fine white
  marbling, fat translucent and glistening at room temperature, slices
  thin enough to glow at the edges when backlit; serrano is rosier-brown,
  firmer, with whiter, more opaque fat and a slightly drier surface; the
  leg shows a dark, dry, almost leathery rind, the cut face a glossy
  garnet oval. [CONFIDENCE: MEDIUM-HIGH for the serrano/ibérico visual
  contrast — uncontested consensus, not independently re-sourced this
  pass beyond the tyrosine point above]
- **Pan con tomate / pa amb tomàquet**: toasted bread with a crackly,
  browned crust; a coral-pink layer of rubbed or grated tomato soaking
  into the crumb; glinting olive-oil drizzle and a few salt flakes; in
  Catalonia, often on pan de cristal (confirmed above — glassy,
  shattering crust, huge holes); served in slices on a board.
  [CONFIDENCE: HIGH]
- **Common model failure**: thick, pink, uniform machine-cut deli ham;
  Italian prosciutto (large rosy sheets); bread topped with chunky tomato
  like bruschetta.

#### Patatas bravas

- **Variants (§4.6) — confirmed this pass, with a real correction to the
  scaffold's framing.** Patatas bravas originated in **Madrid** in the
  1950s (bars including Casa Pellico, La Casona, Las Bravas are the
  commonly cited originating bars — historical evidence only, never a
  prompt subject per §7.5), spreading to Catalonia through 1970s
  migration. **The original Madrid sauce is paprika-based (sweet and
  spicy pimentón, a sautéed onion-and-garlic base, thickened with flour
  and chicken broth) and does not traditionally include tomato at all**
  — a real, sourced correction to any assumption that "brava sauce" means
  a tomato-based sauce. **The alioli pairing is the specifically Catalan
  contribution**: in Barcelona, bravas are commonly served with both the
  spicy brava sauce and a dollop of alioli together, a combination
  understood there as the standard, not an add-on. **Default when
  unspecified**: brava sauce alone (Madrid-original); brava-plus-alioli
  should be offered as an equally real, now-widespread alternative, not
  suppressed. [CONFIDENCE: HIGH] [SOURCE: [El Nacional — ¿Las patatas
  bravas llevan alioli?](https://www.elnacional.cat/es/gourmeteria/articulos/patatas-bravas-alioli-historia_1327639_102.html); [Que.es — Las diferencias entre las recetas de patatas bravas a la
  madrileña y a la catalana](https://www.que.es/2024/11/13/patatas-bravas-madrilena-catalana/)]
- **Vessel & scale**: chunks ~2.5–4cm; tapa: 5–8 pieces on a small plate
  or cazuelita; ración: a mound on a 20–24cm oval. [CONFIDENCE: LOW-
  MEDIUM — not independently re-searched this pass]
- **Texture & finish**: potato — irregular, rough-cut chunks with
  jagged, fractured edges, crackly deep-golden corners, a slightly
  blistered surface, and a fluffy snow-white interior where broken; brava
  sauce — orange-red (from pimentón, not necessarily tomato — see above),
  glossy, spooned or drizzled over the top, pooling slightly at the base;
  alioli, where used — thick, glossy, pale ivory, in a dollop or zigzag
  that holds its shape; toothpicks standing in a few pieces. [CONFIDENCE:
  MEDIUM-HIGH]
- **Common model failure**: uniform cubes, wedges, or fries; ketchup;
  sauce only on the side; chili flakes.

#### Calamares — a la andaluza vs. a la romana (+ bocadillo de calamares)

- **Variants (§4.6), visibly different — confirmed and sharpened this
  pass.** **A la andaluza**: floured directly, with no egg, shaken well
  to remove excess flour, and fried until dry and crisp — a thin, pale-
  gold, matte-crisp coating that hugs the ring, letting the squid's
  flavor read through, slightly irregular with faint speckling. **A la
  romana**: battered in flour plus egg (a tempura-like mixture) — a
  puffier, smoother, noticeably thicker and denser shell that reads more
  substantial, closer to a sandwich filling than the lighter andaluza
  style. [CONFIDENCE: HIGH] [SOURCE: [El Diario — Calamares a la
  andaluza vs. a la romana](https://www.eldiario.es/viajes/calamares-andaluza-vs-calamares-romana-grandes-diferencias-tapas-clasicas-pm_1_12751009.html)]
- **Vessel & scale**: rings ~4–6cm across; a ración heaped on a 22–26cm
  oval with lemon wedges. [CONFIDENCE: LOW-MEDIUM]
- **Bocadillo de calamares (zone 6, Madrid)**: a crusty barra split and
  overfilled, rings spilling from the ends, optionally a streak of mayo
  or alioli; ~20–25cm long, about two cans; on a paper napkin or small
  plate at the counter. [CONFIDENCE: MEDIUM-HIGH — a well-documented
  Madrid institution, not individually re-sourced for exact length this
  pass]
- **Texture**: fried rings glisten slightly; the cut bread shows an open,
  pale crumb and a crackly crust shedding flakes.
- **Common model failure**: thick American breadcrumb onion-ring style;
  marinara dip.

#### Bocadillo family (incl. serranito, lomo con queso, montaditos)

- **Form**: a split barra or pistola with a single, modest filling layer,
  not piled deli-high; often rubbed with tomato and oil instead of mayo.
  [CONFIDENCE: HIGH]
- **Common fillings**: jamón; tortilla; lomo (pork loin) with melted
  cheese; chorizo, salchichón; tuna and pepper; calamares.
- **Serranito (zone 5) — confirmed and corrected this pass.** A soft
  roll (traditionally a "viena andaluza" roll or a mollete) layered, from
  the base up, with sliced tomato, a fried or pan-seared (not necessarily
  grilled — corrected from the scaffold's "grilled" assumption) pork loin
  fillet, an opened whole fried green pepper, and jamón serrano on top —
  jamón is what gives the sandwich its name. Documented as originating in
  **Seville** and spreading across Andalusia. Commonly served with fried
  potatoes on the side. [CONFIDENCE: HIGH] [SOURCE: [Público — Receta de
  serranito: el bocadillo andaluz más universal](https://www.publico.es/culturas/recetas/receta-serranito-bocadillo-andaluz-universal.html); [Anna Recetas Fáciles — Serranito](https://www.annarecetasfaciles.com/serranito-receta-facil-y-rapida.html)]
- **Montaditos**: mini rolls ~8–10cm, several on a plate, each with a
  different filling. [CONFIDENCE: LOW-MEDIUM for exact size]
- **Vessel & scale**: bocadillo ~20–30cm (two to two-and-a-half cans);
  serranito ~15–20cm; wrapped in white paper or foil to go. [CONFIDENCE:
  LOW-MEDIUM]
- **Texture & finish**: crust crackly, golden, shattering, shedding fine
  flakes onto the paper; crumb pale and irregularly holey, faintly pink
  where tomato is rubbed in; jamón fat glistening; the serranito's pepper
  blistered, collapsed, and glossy green; lomo edges seared golden.
  [CONFIDENCE: MEDIUM-HIGH]
- **Staging**: cut in half on its paper, one cut face toward the camera;
  state where the other half goes (§7.5).
- **Common model failure**: a soft sliced-bread sandwich; a US sub
  stacked high with lettuce; a pressed panini with grill stripes.

#### Ensaladilla rusa

- **Form**: diced potato, carrot, peas, and tuna bound in mayonnaise,
  served cold as a flattened or domed mound, often topped with more
  mayo, olives, roasted red pepper strips, or egg; picos or regañás
  alongside. [CONFIDENCE: MEDIUM-HIGH — well-established, uncontested
  dish, not individually re-searched this pass]
- **Vessel & scale**: tapa mound ~8–10cm across on a small plate; ración
  on a 20–24cm plate. [CONFIDENCE: LOW-MEDIUM]
- **Texture & finish**: a creamy, pale-ivory surface, smoothed or lightly
  forked, showing small visible cubes (orange carrot, green peas, pale
  potato, tuna flecks); glossy mayo, not a dry mash.
- **Cross-file**: the parent of `uruguay.md`'s ensalada rusa (the chivito
  side); Spain's version is tuna-forward.
- **Common model failure**: a US mustard potato salad (yellow, chunky,
  celery).

#### Gambas al ajillo

- **Form**: prawns in olive oil with sliced garlic and dried guindilla
  chilli, served sizzling in an individual cazuela, with bread.
  [CONFIDENCE: HIGH]
- **Vessel & scale — refined this pass**: individual cazuelas for this
  dish are documented in a genuine range from a minimal ~10cm single-
  portion size up to an ~18cm fuller tapa-serving size (see the vessel
  table's cazuela entry), not a single fixed 12–15cm as the scaffold
  guessed; prawns ~5–7cm, curled. [CONFIDENCE: MEDIUM]
- **Texture & finish**: prawns curled into tight C-shapes, glossy pink-
  orange with white stripes, submerged in bubbling golden oil (tiny
  bubbles at the rim, a faint haze); garlic slices golden and
  translucent, some browned at the edges; a dried red chilli ring or two;
  parsley flecks; the cazuela's matte terracotta rim against its glossy
  interior. [CONFIDENCE: MEDIUM-HIGH]
- **Common model failure**: a plate of dry grilled shrimp; cream sauce;
  shrimp on skewers.

#### Pimientos de Padrón

- **Form**: small green peppers fried in oil and heavily salted.
  [CONFIDENCE: HIGH]
- **Vessel & scale**: ~4–7cm long (about half the can's height), piled
  on a small oval. [CONFIDENCE: MEDIUM — not independently re-searched
  this pass]
- **Texture & finish**: glossy, bright-to-deep green skins, blistered and
  wrinkled, with blackened-brown patches; slightly collapsed, stems
  intact; big white flaky salt crystals clinging to the skin.
- **Common model failure**: large bell pepper strips; jalapeños.

#### Huevos rotos (huevos estrellados)

- **Form**: thick-cut fried potatoes topped with fried eggs whose runny
  yolks are broken over them, often with jamón or chistorra.
  [CONFIDENCE: HIGH]
- **Vessel & scale**: a 22–26cm oval or a cazuela; each egg ~10–12cm
  with its white. [CONFIDENCE: LOW-MEDIUM]
- **Texture & finish**: eggs — lacy, crisp, browned frilly edges on the
  whites (fried in hot oil), puffed centres; yolk broken and running in
  glossy orange-yellow rivulets over the golden potatoes; jamón slices
  draped, turning translucent from the heat.
- **Staging**: the moment just after the yolk breaks.
- **Common model failure**: neat sunny-side-up eggs on toast; scrambled
  egg.

#### Albóndigas

- **Form**: meatballs in a light brown almond/onion sauce or tomato
  sauce, in a cazuela with bread; common as a menú del día dish or tapa.
  [CONFIDENCE: MEDIUM-HIGH]
- **Vessel & scale**: balls ~3–4cm; cazuela ~15–20cm. [CONFIDENCE: LOW-
  MEDIUM]
- **Texture**: browned, slightly rough surfaces half-submerged in glossy
  sauce; sometimes peas or fried potato cubes alongside.
- **Common model failure**: spaghetti and meatballs.

#### Aperitivo spread (olives, crisps, conservas, boquerones)

- **Olives**: manzanilla — small, green, glossy; gordal — very large,
  plump, pale green; aliñadas — cracked or split, with garlic, herbs, and
  pepper strips; all glistening with brine or oil in a small bowl.
  [CONFIDENCE: HIGH]
- **Crisps (patatas fritas de bolsa)**: thin, pale-gold, slightly
  irregular, glinting with salt, tipped into a small bowl — the classic
  bar freebie. [CONFIDENCE: MEDIUM-HIGH]
- **Conservas**: opened tins of mussels in orange-red escabeche, cockles,
  sardines, or bonito, served in the tin with crisps and a squeeze of
  lemon; the metal tin shines; labels blurred. [CONFIDENCE: MEDIUM]
- **Boquerones en vinagre**: raw anchovy fillets marinated bright white,
  with a thin silver skin line, fanned in oil with chopped garlic and
  parsley. [CONFIDENCE: HIGH]
- **Banderillas**: skewers of pickled guindilla, olive, onion, and
  gherkin. [CONFIDENCE: MEDIUM]
- **Scale**: small bowls ~8–12cm; tins ~10×7cm; fillets ~7–10cm.
  [CONFIDENCE: LOW-MEDIUM]

### B. Regional signatures

#### Paella and arroces (zone 4 authoritative)

- **Variants (§4.6); never silently default to seafood — the official
  ingredient list is now directly confirmed, not just plausible.** A
  documented set of 10 core ingredients recurs across multiple current
  Spanish food-culture sources discussing a 2012-era denomination-of-
  origin initiative: **rice, water, olive oil, salt, saffron (or
  colouring), tomato, flat green bean (ferraura/judía verde plana),
  garrofón (large flat white beans), chicken, and rabbit — with no
  seafood and no chorizo in the Valenciana version.** Accepted variants
  on this orthodox base include duck, snails, artichoke, pimentón,
  garlic, and rosemary. [CONFIDENCE: HIGH] [SOURCE: [Lecturas — Las
  abuelas y los chefs valencianos coinciden](https://www.lecturas.com/recetas/escuela-de-cocina/trucos-chefs-abuelas-cocineras-para-preparar-autentica-paella-valenciana_22158); [Expo B2B Gourmet — Pollo, conejo, garrofó, tomate y judía](https://gourmet.expob2b.es/es/n-/6415/pollo-conejo-garrofo-tomate-y-judia-componen-el-adn-de-la-autentica-paella-valenciana-segun-restaurantes-y-usuarios)]
  - **Marisco**: prawns and langoustines arranged radially on top, open
    mussels, squid pieces. [CONFIDENCE: HIGH]
  - **Mixta**: meat and seafood. Disclose that many Valencians reject it
    as inauthentic. [CONFIDENCE: HIGH that the dispute exists]
  - **Arroz negro**: jet-black glossy rice, squid pieces, alioli on the
    side. **Arroz a banda**: plain golden rice cooked in fish stock.
    **Fideuà**: short thin noodles instead of rice, tips curling upward
    and toasting crisp. **Arroz caldoso/meloso**: soupy or creamy, in a
    cazuela or deep plate — a different look.
  - **Chorizo in paella is a widely mocked error; never include it.**
- **Timing — confirmed directly, and more strongly than the scaffold's
  own hedge (see the structural-decision section above): paella is a
  lunch dish, most authentically a Sunday family lunch, and eating it at
  dinner is treated in Valencia as a real mismatch, not just less common.**
  [CONFIDENCE: HIGH]
- **Vessel & scale — refined this pass using two independent current
  Spanish culinary-retail sources, which broadly but not exactly
  agree**: a **~30cm** pan serves roughly 4; **~36–48cm** serves roughly
  6–11; **~50–70cm** serves roughly 11–20; festival pans run 1–3m+. Pan
  size is measured at the mouth, excluding handles. A 4-person pan
  (~38–42cm on the scaffold's own estimate, ~36–40cm per this pass's
  sourcing — close enough that no correction is needed beyond widening
  the stated range) is wider than any dinner plate; its rim, ~4–6cm, is
  shorter than the can is wide; the rice layer is ~1–1.5cm, about a
  finger's thickness. [CONFIDENCE: MEDIUM — corroborated in direction,
  with a few centimeters' variance between sources, not a single
  authoritative chart]
- **Texture & finish**: a thin, flat, even layer of rice; grains distinct
  and separate, slightly glossy with oil, saffron gold to amber, drier
  and matte toward the edges; **socarrat** — a dark-amber to bronze
  caramelized crust at the base and rim, visibly crackly where a spoon
  has scraped; chicken skin browned; rabbit pieces small and bone-in;
  beans bright and flat; seafood glossy (prawns deep coral, mussel shells
  blue-black and open); lemon wedges on the rim outside Valencia.
  [CONFIDENCE: HIGH]
- **Staging**: the pan on a trivet or board at the table's centre, spoons
  laid in it, a sector eaten away to show the socarrat.
- **Common model failure**: a deep heaped mound of yellow rice; creamy,
  risotto-like texture; peas-and-chorizo "Spanish rice"; a tourist
  "everything" seafood tower; a black non-stick pan with a single handle.
- **Sources**: see above; [Tu Arrocero](https://tuarrocero.com/blogs/el-sabor-del-domingo/cuantas-raciones-salen-de-una-paella-segun-el-diametro); [Hierro y Brasa](https://hierroybrasa.com/que-tamano-paellera-segun-comensales.html); [Gastraval](https://gastraval.com/como-se-come-la-paella-el-protocolo-definitivo/).

#### Pintxos + Gilda (zone 2)

- **Form**: composed bites on baguette slices, often skewered, plus
  skewer-only items, displayed in rows along the counter — confirmed
  this pass as a genuinely Basque/Northern-specific format, not a
  nationwide bar norm (see the structural-decision section above).
  [CONFIDENCE: HIGH]
- **Vessel & scale**: bread ~8–10cm×1cm; toppings mounded 3–5cm, all
  shorter than the can; each on a small plate once chosen. [CONFIDENCE:
  LOW-MEDIUM]
- **Texture & finish**: bread edges toasted golden; glossy toppings
  (roasted red peppers, silvery anchovies, jamón, creamy crab or salt-cod
  spreads, tortilla, fried quail eggs); toothpicks upright.
- **Gilda**: a skewer ~8–10cm with a plump glossy green olive, a coiled
  silver-brown anchovy, and pale green wrinkled pickled guindillas,
  glistening with oil — no bread. [CONFIDENCE: HIGH]
- **Common model failure**: tiny formal canapés; generic "tapas" plates
  with no bread base.

#### Tarta de queso vasca (Basque burnt cheesecake)

- **Form**: a crustless cheesecake baked very hot in crumpled parchment.
  [CONFIDENCE: MEDIUM-HIGH]
- **Vessel & scale — refined this pass.** Recipe/bakeware sourcing most
  commonly recommends an **18–24cm mould**, with 20–22cm the single most
  frequently cited size and roughly 6–8cm tall — the scaffold's own
  20–24cm estimate holds up well and needed only a minor widening at the
  bottom end. A slice reads ~10–12cm on a small plate. [CONFIDENCE:
  MEDIUM — corroborated across multiple recipe sources, though these are
  recipe-tier rather than an industry standard] [SOURCE: aggregated
  Basque cheesecake recipe sourcing (Hogarmania, Laylita, Isabel Vermal)]
- **Texture & finish**: top deeply caramelized, near-black, mottled and
  blistered, slightly sunken in the middle; sides ruffled, crinkled
  parchment edges pressed into the cake, uneven and bronzed; cut face a
  pale-cream, very creamy, glossy centre that sags and oozes slightly,
  firmer toward the edges.
- **Common model failure**: New York cheesecake (smooth pale top, graham
  crust); a burnt-looking failure.
- **Genericize**: the named San Sebastián bar of origin — real, and
  useful as historical background, but never a prompt subject (§7.5).

#### Pulpo á feira / a la gallega (zone 1)

- **Form**: boiled octopus cut into rounds, dressed with pimentón, coarse
  salt, and olive oil on a round wooden plate, often over cachelos
  (boiled potato slices); eaten with toothpicks. [CONFIDENCE: HIGH]
- **Vessel & scale — refined this pass**: wooden plates are commercially
  available at 16, 20, 22, 26, and 30cm, with **22–26cm the most commonly
  stocked range** — a slightly wider range than the scaffold's own
  "25–30cm only" estimate; rounds ~1–1.5cm thick and ~2–4cm across.
  [CONFIDENCE: MEDIUM — corroborated across multiple current Galician
  cookware retailers] [SOURCE: aggregated Galician wooden-plate retail
  sourcing (Leroy Merlin, Ego Galego, Fackelmann)]
- **Texture & finish**: skin purple-pink with a gelatinous gloss; flesh
  firm, white, clean-cut; suckers creamy rings along the edges; pimentón
  dusted unevenly, darker where oil has soaked in; a golden-red oil pool
  on the wood; coarse salt crystals sparkling; pale potato slices
  beneath.
- **Common model failure**: charred grilled tentacles with grill marks;
  a white ceramic plate.

#### Empanada gallega (zone 1)

- **Form**: a large, flat, two-crust pie baked on a tray and cut into
  squares; fillings — tuna and pepper sofrito, pork (zorza), scallop or
  cockle. [CONFIDENCE: MEDIUM-HIGH]
- **Vessel & scale**: whole ~35–40cm round or rectangular; squares
  ~8–10cm; ~3–4cm thick. [CONFIDENCE: LOW-MEDIUM]
- **Texture & finish**: a golden, lightly glossy egg-washed crust, often
  decorated with dough strips or a lattice and a central vent; thin,
  bready-to-flaky pastry; the cut edge shows a reddish, oily onion-and-
  pepper sofrito.
- **Common model failure**: small Argentine crimped hand pies ("empanada"
  means both).

#### Fabada asturiana (zone 1)

- **Form**: large white fabes beans with chorizo, morcilla, and pork
  belly, in a cazuela. [CONFIDENCE: HIGH]
- **Vessel & scale**: individual cazuela ~18–22cm, or a deep plate; beans
  ~2–3cm long, strikingly large. [CONFIDENCE: LOW-MEDIUM]
- **Texture & finish**: plump, creamy, intact ivory beans with smooth
  skins; a loose, orange-tinted broth with fat droplets on top; chorizo
  rounds deep red and glossy; morcilla near-black, crumbly at the cut;
  pork belly pale and wobbly.
- **Common model failure**: small, dark, sweet US baked beans; a crusted
  cassoulet.

#### Cachopo (zone 1, Asturias)

- **Form**: two very large, thin veal fillets sandwiching jamón and
  cheese, breaded and fried, served with chips and roasted peppers.
  Famous for its sheer size. [CONFIDENCE: MEDIUM-HIGH]
- **Vessel & scale — no single standard confirmed; treated honestly as a
  scale story rather than a fixed dimension.** No dedicated size
  specification was found this pass, but multiple sources describe real
  examples running around 30cm and larger, clearly overhanging a
  standard 26–28cm plate — several times the can's height across is a
  reasonable, defensible scale claim, but the exact figure is this file's
  own synthesis, not a measured industry standard. [CONFIDENCE: LOW-
  MEDIUM, honestly flagged — not upgraded past what the sourcing actually
  supports] [SOURCE: [El Español — Así se hace la verdadera receta del
  cachopo asturiano](https://www.elespanol.com/cocinillas/recetas/20241213/hace-verdadera-receta-cachopo-asturiano-plato-tradicional-alto-proteinas-trt/1003570692896_30.html)]
- **Texture & finish**: a large, golden, even breadcrumb shell; the cut
  cross-section shows thin pale meat, a pink jamón layer, and molten,
  stretching cheese.
- **Common model failure**: a normal-size schnitzel.

#### Cocido madrileño (zone 6)

- **Format**: three courses (vuelcos) — 1. broth with fine noodles;
  2. chickpeas and vegetables; 3. meats. In León, the cocido maragato
  reverses the order. [CONFIDENCE: HIGH for the three-course structure
  and its wide documentation; MEDIUM for the León reversal specifically —
  not individually re-searched this pass]
- **Vessel & scale**: broth in a soup plate (22–24cm); chickpeas and
  meats on 35–40cm oval platters, or served from an earthenware pot.
  [CONFIDENCE: LOW-MEDIUM]
- **Texture & finish**: broth clear and golden with small fat droplets
  on the surface, fine noodles; chickpeas plump, golden-beige; cabbage
  soft, pale green; chorizo glossy red, morcilla near-black, pork belly
  pale and trembling, beef shank stringy and brown.
- **Cross-file**: a shared ancestor of `uruguay.md`'s separately served
  puchero (§5.2).
- **Common model failure**: a single bowl of mixed stew.

#### Gazpacho vs. salmorejo (zone 5)

- **Gazpacho**: thin and fluid, with a slight froth on top, pale coral to
  orange-red; in a tumbler or a bowl — **see the vessel table above for
  the two genuinely different glass registers found this pass (a small
  ~100mL tasting pour vs. a fuller ~250–400mL tumbler serving), offered
  as a choice rather than one silently picked**; tiny diced cucumber,
  pepper, and croutons alongside or on top; sometimes an ice cube
  floating. [CONFIDENCE: HIGH for the dish itself; LOW-MEDIUM for the
  exact serving-glass size, honestly flagged]
- **Salmorejo (Córdoba)**: thick, velvety, matte-to-satin, deep orange,
  holds spoon marks and ridges; in a 12–15cm bowl; topped with chopped
  hard-boiled egg (white and yellow crumbs) and jamón shards; olive oil
  beading in golden droplets on the surface. [CONFIDENCE: HIGH]
- **Scope note [EDITORIAL]**: gazpacho in a glass is food. Show a spoon,
  garnish, or croutons so it doesn't read as juice or a second drink.
- **Common model failure**: hot tomato soup; chunky salsa.

#### Pescaíto frito + espetos (zone 5)

- **Pescaíto**: small whole fish (anchovies, often fanned by their
  tails), cuttlefish, red mullet, and squid, flour-dusted and fried in
  olive oil; on a plate or in a paper cone with lemon. [CONFIDENCE: HIGH]
- **Espetos (Málaga) — confirmed and refined this pass, including a real
  modern-practice update the scaffold didn't have.** Sardines skewered on
  a cane and cooked beside a wood fire (traditionally olive wood) in a
  sand-filled boat on the beach — this is a genuine historical/19th-
  century Málaga tradition (a strong UNESCO Intangible Cultural Heritage
  candidacy is documented), but **most espeto boats today are stainless
  steel rather than wood**, raised off the sand for hygiene and ease of
  cleaning rather than the fully traditional low wooden-boat setup — a
  real, current evolution worth reflecting in a contemporary-set scene
  rather than only the historical wooden-boat image. [CONFIDENCE: HIGH
  for the technique and the wood-to-steel shift] [SOURCE: [El Español —
  ¿Cómo se hacen los espetos de sardina en Málaga?](https://www.elespanol.com/malaga/vivir/gastronomia/20230705/hacen-espetos-sardina-malaga-trucos-espeteros/776422677_0.html); [Fuerte Hoteles — Espetos de sardinas](https://blog.fuertehoteles.com/comer-y-beber/gastronomia-malaguena-espeto/)] Skins blistered and crackled silver-black; moist
  flesh; coarse salt.
- **Scale**: anchovies ~8–12cm; an espeto is a ~25–30cm cane with 5–6
  sardines. [CONFIDENCE: LOW-MEDIUM]
- **Texture**: pescaíto coating thin, pale-gold, matte-crisp; tails and
  fins visibly crisp.
- **Common model failure**: thick-battered UK-style fish; neat fillets.

#### Torreznos (zone 6, Soria)

- **Form**: thick strips of pork belly fried until the skin puffs; a bar
  tapa. **Upgraded this pass: Torrezno de Soria received EU Protected
  Geographical Indication (IGP) status in November 2024** — a real,
  current, checkable regulatory fact the scaffold didn't have, not just
  a well-known regional specialty. [CONFIDENCE: HIGH] [SOURCE: [Hola —
  Los torreznos de Soria, a la conquista de Europa](https://www.hola.com/cocina/noticias/20241125731751/el-torrezno-ya-tiene-su-sello-de-calidad-igp/); official IGP registration documentation (itacyl.es)]
- **Scale**: strips ~6–10cm long × ~2–3cm, several on a small plate.
  [CONFIDENCE: LOW-MEDIUM]
- **Texture & finish**: skin puffed, bubbled, and blistered into a
  glassy golden crackling crown — confirmed as the dish's defining
  characteristic, forming gradually as the panceta cooks (25 minutes to
  an hour depending on preparation); thick alternating bands of pale fat
  and pink-brown meat, visible from the side; a glistening edge.
  [CONFIDENCE: HIGH for the puffed-crust description]
- **Common model failure**: flat bacon rashers.

#### Calçots (zone 3, winter–spring)

- **Form**: long spring onions grilled black over a fire, wrapped to
  steam, peeled by hand and dipped in romesco; served on terracotta roof
  tiles. [CONFIDENCE: HIGH]
- **Scale**: ~15–25cm (about two cans); a tile ~40–50cm long.
  [CONFIDENCE: LOW-MEDIUM]
- **Texture & finish**: charred, black, ashy outer layers; peeled to a
  glossy, soft, translucent white-and-pale-green interior; romesco a
  coarse, brick-orange, nutty sauce in a bowl.
- **Staging**: bibs are authentic but add clutter; keep any wrapping
  newspaper unreadable. Beverage leak: exclude the porrón wine jug.

#### Serranito and flamenquín (zone 5, compact)

- **Serranito**: see Bocadillo family above (confirmed this pass).
- **Flamenquín (Córdoba)**: pork loin rolled around jamón, breaded and
  fried into a log ~15–25cm long, sliced into rounds that show a spiral;
  with chips and mayo. [CONFIDENCE: MEDIUM — not individually re-searched
  this pass]

### C. Grill & meat (compact)

*None of the entries in this subsection were individually re-searched
this pass — carried at the scaffold's own reasonable-consensus level,
downgraded one notch from its own self-assessment where it had claimed
higher than general knowledge supports.*

- **Chuletillas de cordero**: tiny lamb chops ~8–10cm with the bone,
  piled on a plate. Crisp charred fat edges, a pink centre, coarse salt;
  eaten by the bone. [CONFIDENCE: MEDIUM]
- **Pinchos morunos**: paprika- and spice-marinated pork cubes on a
  ~20–25cm metal skewer; orange-red, glossy, charred edges. [CONFIDENCE:
  MEDIUM]
- **Secreto ibérico**: a marbled pork cut, grilled and sliced into
  strips; a deep brown sear over a juicy, pink-white marbled interior.
  [CONFIDENCE: MEDIUM]
- **Chistorra/txistorra**: a thin (~2cm) long orange-red sausage fried in
  coils or pieces; glossy, blistered skin; on a small plate or a bread
  slice. [CONFIDENCE: MEDIUM]
- **Chorizo and morcilla a la brasa**: grilled sausages, charred and
  split; morcilla near-black, crumbly and rice- or onion-studded at the
  cut. [CONFIDENCE: MEDIUM]
- **Chorizo a la sidra (zone 1)**: chorizo pieces simmered in cider and
  served sizzling in a cazuela, red oil pooling. The cider is a cooking
  ingredient, not a drink in frame. [CONFIDENCE: MEDIUM]

### D. Menú del día plates (compact)

*Not individually re-searched this pass — carried at the scaffold's own
level, since none of these surfaced as contested or surprising.*

- **Lentejas**: brown lentils in a loose, glossy, brick-brown broth with
  chorizo rounds and carrot pieces, in a 22–24cm soup plate. [CONFIDENCE:
  MEDIUM-HIGH]
- **Pisto**: a soft, jammy, glossy red stew of peppers, onion, courgette,
  and tomato, often topped with a fried egg. [CONFIDENCE: MEDIUM-HIGH]
- **Merluza a la romana**: battered hake fillets, puffy, pale-gold and
  smooth, with lemon and salad. [CONFIDENCE: MEDIUM]
- **San Jacobo**: ham and cheese between thin breaded pork or ham slices,
  fried; a kid and Gen Z favourite. Golden crumb, cheese oozing at the
  cut. [CONFIDENCE: MEDIUM]
- **Filete con patatas**: a thin fried beef or pork fillet with chips and
  a fried egg or salad. [CONFIDENCE: MEDIUM]
- **Flan**: a glossy, smooth, pale-custard cylinder ~7–9cm tall, amber
  caramel pooling around it, tiny air bubbles at the sides, on a small
  plate. [CONFIDENCE: MEDIUM-HIGH]
- **Arroz con leche**: creamy rice pudding in a small bowl with a
  cinnamon-dusted surface, sometimes a strip of lemon peel. [CONFIDENCE:
  MEDIUM-HIGH]
- **Natillas**: pale-yellow custard in a bowl with a biscuit on top.
  [CONFIDENCE: MEDIUM]

### E. Desserts & festival sweets (compact)

- **Crema catalana**: in a shallow 10–12cm cazuelita; a thin, hard,
  glassy amber burnt-sugar crust that cracks into shards when tapped,
  over smooth pale-yellow custard. [CONFIDENCE: MEDIUM-HIGH — not
  individually re-searched this pass]
- **Tarta de Santiago**: an almond cake ~20–24cm across and ~3–4cm tall;
  dense, moist, slightly grainy crumb; powdered-sugar top with a
  stencilled cross silhouette in bare cake. [CONFIDENCE: MEDIUM-HIGH]
- **Torrijas (Semana Santa)**: thick slices of bread soaked and fried;
  golden, caramelized crust over a custardy, wobbly interior; a sugar-
  cinnamon crust or honey gloss. [CONFIDENCE: MEDIUM-HIGH]
- **Roscón de Reyes — corrected downward this pass; the scaffold's own
  30–40cm figure ran too large.** A dedicated recipe source gives an
  individual roscón's diameter as roughly **15–25cm**, with 20cm a
  commonly cited standard; commercial bakeries sell distinctly larger
  festive sizes up to 26cm ("large") and 36cm ("extra-large") for bigger
  gatherings — **30–40cm is close to the upper end of the largest
  commercial size, not the everyday standard the scaffold implied.**
  Corrected range: **~20–26cm for a standard family roscón, up to ~36cm
  for a large festive one.** Glossy crust studded with bright candied
  fruit (red, green, orange), sliced almonds, and sugar crystals;
  sometimes split and filled with a thick band of whipped cream; a small
  hidden figurine (don't show it). [CONFIDENCE: MEDIUM — a specific,
  sourced correction, though from recipe/retail-tier sources rather than
  a single authoritative standard] [SOURCE: [Virutas de Limón — Roscón
  de Reyes tradicional](https://www.virutasdelimon.com/roscon-de-reyes/); aggregated commercial roscón-size retail listings]
- **Turrón and polvorones**: soft Jijona turrón — beige, oily-grainy nut
  paste; hard Alicante turrón — white nougat studded with whole almonds;
  polvorones — small, crumbly, powdery shortbreads in twisted paper
  wrappers (wrapper text blurred). [CONFIDENCE: HIGH]
- **Coca de Sant Joan (zone 3, 23 June) — corrected this pass.** A long,
  flat, oval brioche-like pastry with rounded corners, traditionally
  twice as long as it is wide; a dedicated recipe source gives a
  10–12-person coca as roughly **40cm × 25cm**, about 2.5–3cm thick before
  baking (thinning to roughly 1cm as the dough is stretched) — **wider
  than the scaffold's own 40×15–20cm estimate**, corrected here. Glossy
  crust topped with candied fruit, pine nuts, and sugar; cut into slices.
  [CONFIDENCE: MEDIUM] [SOURCE: [Cocinatis — Coca de San Juan](https://www.cocinatis.com/receta/coca-de-san-juan.html); [Bonviveur — Coca de San Juan](https://www.bonviveur.es/recetas/coca-de-san-juan)]
- **Panellets (1 November, zone 3)**: small marzipan balls ~3–4cm, rolled
  in pine nuts toasted golden. [CONFIDENCE: HIGH]
- **Castañas asadas**: roasted chestnuts with split, charred, glossy-
  brown shells showing golden flesh, in a paper cone. [CONFIDENCE: HIGH]
- **Buñuelos**: buñuelos de viento — small, hollow, puffy golden balls
  ~3–4cm, sugar-dusted; Fallas buñuelos de calabaza — irregular, knotty
  rings, crisp outside. The chocolate cup is excluded. [CONFIDENCE:
  MEDIUM]
- **Rosquillas de San Isidro**: "tontas" are plain golden rings; "listas"
  are glazed with yellow-and-white icing; ~6–8cm. [CONFIDENCE: MEDIUM]

### F. Snacks (compact)

- **Pipas**: sunflower seeds in black-and-white striped shells, from a
  small bag; eaten on benches and in stadiums. Authentic detail: a small
  pile of split, empty shells beside the bag. [CONFIDENCE: HIGH]
- **Frutos secos**: salted almonds, peanuts, and kikos (big, puffed,
  golden, crunchy corn kernels) in paper cones or bowls. [CONFIDENCE:
  MEDIUM]
- **Vasito de fruta**: pre-cut fruit in a clear cup with a small fork.
  Show the chunks and the fork so it doesn't read as juice. [CONFIDENCE:
  MEDIUM]
- **Pollo asado**: a whole rotisserie chicken with bronzed, glossy,
  crackly skin in a crimped foil tray (~25×20cm), with golden potatoes.
  [CONFIDENCE: MEDIUM]
- **Papas arrugadas con mojo (Canaries)**: small potatoes ~3–5cm with
  wrinkled skins and a dusty white salt crust; red mojo (brick-orange,
  oily) and green mojo (herby green) in small bowls. [CONFIDENCE: HIGH]

---

## EXAMPLE PROMPT LANGUAGE (illustrative — not validated by any image test)

**A. Terraza, drink with a free tapa**

> A small square aluminium table on a stone plaza in a Spanish city at
> golden hour on a summer evening, long warm shadows, plane trees behind.
> On the table: the classic red Coca-Cola can (original, not Diet Coke or
> Coke Zero), a standard 330ml can (11.52cm tall, 6.61cm diameter), beaded
> with condensation, beside a plain glass with clear ice cubes and a thin
> lemon slice. Next to it, a small white saucer about 13cm across holding
> four plump, glossy green olives in brine and a few thin, pale-golden
> crisps. Plain cream parasol, plain chairs, no branding. Café signage and
> passers-by in the background only as soft, unreadable patches of
> colour. No other drinks. Nothing held in a hand.

**B. Covered market bar counter, lunch**

> A stool-height steel counter at a bar stall inside a covered food
> market hall, soft even daylight falling from a high iron-and-glass
> roof. On the counter: a small white oval plate of patatas bravas —
> irregular potato chunks about 3cm across with jagged, crackly golden
> corners and fluffy white interiors, glossy orange-red paprika-based
> sauce spooned over the top (no tomato in the sauce itself) — and a
> small bread basket. Beside the plate: the classic red Coca-Cola can
> (original, not Diet Coke or Coke Zero), a standard 330ml can. Behind,
> softly out of focus: fruit stacked in pyramids and hanging hams; stall
> signs and price cards visible only as blurred, unreadable colour. No
> juice cups, no other drinks. Nothing held in a hand.

*Before use: run at least two generations per prompt per
`country-file-schema.md` §7.5, and apply this file's own confidence tags
— several dish dimensions above remain LOW-MEDIUM even after this pass.*

---

## GAP LOG

- **PENDING UPDATE — an authoritative TCCC product-dimension/spec drop is
  expected in the coming days**, per the orchestrating session. Hold off on
  further WebSearch effort toward the 237mL-bottle gap below until it
  lands; see `coca-cola-guidelines.md`'s own front-matter flag.
- **Cachopo's exact size, gazpacho's exact serving-glass size, and the
  237mL Coca-Cola bottle's exact dimensions all remain genuinely
  unconfirmed to a single figure** after a dedicated search this pass —
  each is documented above with the real range found and an honest
  LOW-MEDIUM tag, not silently upgraded.
- **Neighbourhood-market network claims (e.g., a specific city's count of
  market halls) were not independently re-verified this pass** and
  should be treated as unconfirmed until a dedicated pass checks them —
  downgraded from the scaffold's own HIGH.
- **Grill & meat (Section C) and Menú del día (Section D) entries were
  not individually re-searched this pass** — carried at a reasonable,
  uncontested-consensus confidence, one notch below the scaffold's own
  self-assessment, since none of them surfaced as contested or
  surprising during this pass's research.
- **The Morning Module was time-boxed and not independently re-verified
  this pass** beyond the churros/porras pairing (confirmed as
  well-established) — treat the esmorzar/almuerzo depth as carried
  forward, not freshly sourced.
- **Cantabria's placement between zones 1 and 2** remains the scaffold's
  own editorial call, not independently re-adjudicated.
- **No confirmed TCCC OU code for this market** — flagged in the front
  matter; do not guess one. Spain's bottling partner is confirmed as
  CCEP Iberia (spanning Spain, Portugal, and Andorra as one commercial
  unit), which may or may not match TCCC's own internal market/OU
  boundaries — a human reviewer with access to TCCC's actual market
  documentation should confirm which applies.
- **Brand-file footprint kept minimal, per the orchestrating session's
  direction.** `coca-cola-guidelines.md` has a larger dedicated overhaul
  planned separately; this build only added the Spain on-premise glass-
  bottle figures there (350mL/237mL — genuinely load-bearing for this
  file's own §4.5 scale-anchor correctness) and made no other edits.
  Other brand-adjacent observations from this pass that could someday
  belong in that file — e.g. whether Spain's bar "ice and a slice of
  lemon" Coca-Cola serve deserves the same first-party-sourced treatment
  `uk.md` gives the UK's pub serve, or a dedicated per-market glassware-
  convention section — are flagged here as candidates for that file's own
  future dedicated pass, not added inline.
- **Fork-left/knife-right for Spain is sourced to general Continental-
  European table-protocol convention, not a Spain-specific dedicated
  study** — treated at MEDIUM-HIGH, consistent with how `uk.md` handles
  the same override for the UK.
- **Festival sensitivity calls** (bulls, Tomatina, processions, fire/
  fireworks) remain the orchestrating session's editorial decisions, not
  re-litigated or independently validated by this research pass.
- **Several "compact" dish sections (grill/meat, menú del día, desserts,
  snacks) would benefit from full promotion to the three-dimension
  schema** (per `country-file-schema.md` §4) if a future brief needs deep
  staging detail on any of them specifically.

## CANDIDATE QUEUE

1. A dedicated pass on the 237mL Coca-Cola bottle's exact dimensions,
   ideally against TCCC/CCEP Iberia's own packaging specification rather
   than aggregated retail/consumer sources.
2. Independent confirmation of Barcelona's (or any specific city's)
   covered-market count, if a brief needs that specific figure.
3. A dedicated pass on gazpacho's actual most-common serving-glass size
   in a bar/restaurant context specifically (as opposed to a home-recipe
   or generic-glassware source).
4. Promote the compact entries (Section C–F) to full three-dimension
   entries where a specific brief needs deep staging detail on any of
   them.
5. Balearic and Canary depth (sobrasada, pa amb oli, mojo variants) —
   flagged as thin in the scaffold and not deepened this pass.
6. Independent §8 audit of this file after this verification pass, then
   image tests (two or more generations per prompt), starting with
   tortilla, paella, bravas, and croquetas — the four dishes this pass
   was able to verify most thoroughly.

## RESEARCH LOG

- **2026-09-24, scaffold received.** `knowledge-base/scratch-spain-model-
  knowledge-draft.md` — a model-knowledge-only scaffold from a separate,
  tool-less Claude session, self-tagged `[UV→tier]`/`[EDITORIAL]`
  throughout with a 40-item verification checklist. See `DECISIONS.md`
  for the orchestrating session's assessment of the scaffold's own
  honesty discipline (parallel to the UK scaffold's own precedent).
- **2026-09-24, WebSearch verification-and-merge pass (this file).**
  Roughly 35 distinct WebSearch queries run, prioritized per the
  scaffold's own checklist order (Priority 1 scale items first, then
  Priority 2 correctness items, then a time-boxed subset of Priority 3).
  Covered: paellera/tortilla-pan/cazuela/croqueta/cachopo/Basque-
  cheesecake/roscón/coca-de-Sant-Joan/pulpo-plate/barra sizing;
  Coca-Cola's confirmed Spanish on-premise glass-bottle sizes (a genuine
  new finding, not on the checklist as a known-answer item); Spanish
  meal-timing and Madrid summer sunset; paella's official ingredient
  list and lunch-only norm; patatas bravas' Madrid origin and paprika-
  based (not tomato) original sauce; calamares andaluza-vs-romana batter
  distinction; serranito's composition and Seville origin; free-tapa
  cities and Granada's soft-drink inclusion; Eurostat's flat-share and
  parental-home-age figures; 2026 dates for Fallas, Semana Santa, Feria
  de Abril, San Fermín, and La Tomatina; espetos' wood-to-steel boat
  evolution; Torrezno de Soria's new IGP status; ibérico ham's tyrosine
  crystals; pan de cristal and mollete de Antequera; padel's popularity;
  bread-on-the-tablecloth practice; fork-left/knife-right convention;
  and Coca-Cola's Spain/Iberia bottler structure. No subagents were used
  for this pass.
- **Verification outcome, roughly quantified.** Of the roughly 40
  checklist items plus several unlisted claims checked opportunistically
  (on the order of 45 distinct factual claims examined this pass):
  - **Confirmed largely as the scaffold described it (roughly 15
    claims)**: the con/sin-cebolla and jugosa/cuajada tortilla debates;
    the paella valenciana no-seafood/no-chorizo rule and its official
    ingredient list; pintxo culture as Basque-specific; jamón ibérico/
    serrano's visual distinction; pan de cristal's construction; mollete
    de Antequera's DOP status and form; boquerones and gilda's
    composition; the three-vuelco cocido madrileño structure; the
    andaluza/romana calamares batter distinction (sharpened, not just
    confirmed); the con-alioli Barcelona bravas variant; Granada's
    free-tapa custom (broadened to León/Jaén/Ávila); the churros/porras
    pairing; padel's general popularity (upgraded with hard figures);
    the Semana Santa/Fallas/Feria/San Fermín/Tomatina festival dates and
    core visuals.
  - **Corrected with a real checked source in place of the scaffold's
    guess (roughly 12 claims)**: the 330mL can figures (now sourced from
    `coca-cola-guidelines.md` rather than the scaffold's own ~11.5cm
    estimate); croqueta length (corrected down from 5–7cm to ~3.5cm);
    roscón de Reyes diameter (corrected down from 30–40cm to ~20–26cm
    standard/36cm large); coca de Sant Joan width (corrected up from
    15–20cm to 25cm); patatas bravas' origin and sauce composition
    (Madrid, paprika-based, no tomato — not a generic "brava sauce");
    tortilla pan size (refined to 24cm-centered with a technical
    rationale); espetos' modern wood-to-steel boat shift; Torrezno de
    Soria's new IGP status; the age-leaving-home and flat-share
    statistics (both replaced with exact, current Eurostat figures);
    paella pan size-per-serving figures (widened/adjusted); pulpo
    wooden-plate size range (widened downward to include 20–22cm).
  - **A genuinely new finding, not on the scaffold's own checklist**:
    Coca-Cola's confirmed Spain-specific on-premise returnable-glass-
    bottle program (350mL for meals, 237mL for aperitivo/evening),
    distinct from the generic contour-bottle default in
    `coca-cola-guidelines.md` — added to that file's §4.3 as a market-
    specific note, per the same pattern the UK's 330mL can finding
    established.
  - **Left honestly unconfirmed, flagged rather than guessed (roughly
    6–8 items)**: the 237mL bottle's exact dimensions (a range only, not
    a locked figure); gazpacho's actual most-common serving-glass size in
    a bar/restaurant context; cachopo's exact standard dimension (no
    single specification found, treated as a scale story rather than a
    fixed figure); Barcelona's specific covered-market count; the exact
    bread-on-tablecloth prevalence (confirmed as a real, sourced practice,
    but not quantified as "how common"); Cantabria's zone placement
    (an editorial call, not something WebSearch could settle); several
    Priority 3 items (grill/meat section, menú del día section) that were
    time-boxed rather than individually re-searched, per the task's own
    instruction to time-box Priority 3.
  - **Nothing was found to be flatly wrong and removed outright** — the
    scaffold's own honesty discipline (real "sources to check," never a
    fabricated citation) meant its leads consistently panned out in the
    direction it expected, the same finding this project's UK build
    recorded. The genuine corrections above are refinements of specific
    numbers or added nuance, not reversals of the scaffold's core claims.
- **Structural and sensitivity decisions**: made by the orchestrating
  session before this pass began, not revisited here beyond the two
  spot-checks (pintxo/Basque-specificity, paella/Valencia-anchoring)
  the task specifically requested — see FILE ROLE & METHOD above and
  `DECISIONS.md`.
