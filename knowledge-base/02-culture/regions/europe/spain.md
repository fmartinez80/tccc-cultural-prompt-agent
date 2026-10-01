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
2. **The hero product comes from the brief, never from the region.**
   The brief names the exact TCCC brand, variant and format; this file
   never defaults to one (standing rule, 2026-09-27 — see `DECISIONS.md`;
   it replaces this file's earlier red-can default). Write it with
   `africa/south-africa.md`'s HERO PRODUCT SLOT template: name the variant exactly and negate the closest lookalike
   (e.g. Original vs. Zero Sugar vs. Light). Its branding is composited in
   post, never trusted from the generation (`coca-cola-guidelines.md`
   §1–§2).
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

Full background-first profiles for the main venues: see VENUE PROFILES below.

---

## VENUE PROFILES

Schema §5.9 applies: the default camera is a close-up hero (sharp table,
soft room), so each profile leads with what reads in the soft background.
Wave 1 (2026-10-01) covers the six most-used Spanish staging venues: the
piso living-dining room and kitchen, the chalet or village-house patio,
the neighbourhood bar, the menú-del-día dining room, the plaza terraza,
and the village fiesta's long tables. Default zone when none is named:
an urban flat or neighbourhood bar in the Centre zone (zone 6), per
ENVIRONMENT & STAGING SCENES. The file-wide rules hold in every profile:
text only as unreadable colour patches (rule 1), the brief dictates the
SKU (rule 2), no other drinks in frame including beer, wine, vermut and
coffee (rule 3), nothing held in a hand (rule 4); plus no alcohol cues
(no bottle shelves, taps or glasses behind bars), no brand marks, never a
full flag, no identifiable children, no more than about 2.5 background
faces and none sharp.

#### Venue: Piso living-dining room and kitchen (home, indoor)
- Use for: home indoor; casual lunch at about 14:00 to 15:00 (1, 2, 3),
  late dinner, Nochebuena and Navidad at the grandparents' piso (table
  extended), El Clásico at home; the national default home. 65.3% of
  Spaniards live in flats, the highest share in the EU [HIGH — Eurostat via
  idealista, see ENVIRONMENT].
- Soft background (the core): what reads first is the light: roller
  shutters (*persianas*) half-lowered over a balcony door or window,
  throwing horizontal bars of bright light across a cool, shiny floor of
  terrazzo, ceramic or porcelain tiles in beige, grey or speckled cream
  [MEDIUM — ENVIRONMENT interior markers; tile-maker sources for terrazzo
  and porcelain floors]. Behind the table in the *salón-comedor*: light
  painted walls (white, cream, pale beige), a wall unit or sideboard with
  family photos and a few ornaments, the TV as a dark rectangle, a sofa
  edge, a framed print; through the balcony door, the wrought-iron or
  aluminium balcony rail, a geranium pot, laundry on a rack, and the
  façade of the block opposite in brick or render with its own persianas
  and awnings (*toldos*, often green, orange or striped) [MEDIUM]. In the
  kitchen version: wall tiles up to the ceiling or high on the wall
  (white, cream or patterned), compact fitted units, a glazed laundry
  gallery (*galería*) with a washing machine and a hanging line, an
  orange butane cylinder in older kitchens [LOW for the butane cylinder,
  declining]. Light: hard midday brightness filtered by persianas at
  lunch; at dinner (21:00 to 22:30), a ceiling lamp or a warm pendant over
  the table, blue dusk through the balcony in summer. Palette: cream and
  white walls, warm beige floor sheen, dark wood or white furniture, green
  of plants, the striped toldo. Signature shapes: the slatted persiana
  with light bars, the balcony door with its iron rail, the tiled floor
  sheen, the glazed galería, the wall unit with photos. Density: tidy,
  clean, family-ornamented; grandparents' pisos fuller (doilies, a
  display cabinet with the good glassware empty and soft, a clock).
- Shell: a mid-rise block from the 1960s to the 2000s; flat ceilings,
  sliding aluminium windows or wooden balcony doors with persianas [MEDIUM].
- The table as set here: an extendable rectangular dining table, wood or
  glass-topped; a tablecloth or an oilcloth (*hule*) in the kitchen; a
  barra of bread directly on the cloth; the cruet set (oil and vinegar
  cruets, salt); everyday white or patterned plates, a soup plate for
  lentejas; a festive red or gold cloth at Christmas. In older homes, a
  round *mesa camilla* with a long skirted cloth (historically over a
  heater) [LOW — not verified this pass].
- Subregional variants and the national default: Centre (zone 6): brick
  block, terrazzo, persianas; Andalusia (zone 5): whiter walls, an
  azulejo dado, deeper shade; Atlantic Northwest (zone 1): glazed
  balconies (*galerías* on the façade), greyer light, wood floors;
  Catalonia (zone 3): Eixample flats with hydraulic patterned floor
  tiles and high ceilings; Valencia (zone 4): bright coastal light, a
  paella pan on the wall or in the kitchen. National default: a Centre
  zone piso with persianas, a tiled floor and a balcony.
- Hallucination traps: a sunny rustic farmhouse with terracotta and
  hanging copper pans in every flat; tourist kitsch (flamenco fans,
  bull posters, castanets); Mexican decor (papel picado, cacti); an
  Italian trattoria look; a US open-plan kitchen with an island; the
  siesta cliché; a wine bottle or porrón on the table.
- Never stage: wine, beer, vermut, coffee cups; legible labels or TV; a
  full flag on the balcony (football tournament summers: a cropped
  red-yellow pattern at most); religious images as a subject.
- Prompt-ready line: "A Spanish piso at lunchtime: the table with a barra
  of bread and a cruet set sharp in front, behind it half-lowered roller
  shutters throwing bars of hard light across a shiny terrazzo floor, a
  cream wall with a softly blurred sideboard and the iron rail of a small
  balcony."
- Confidence and sources: MEDIUM; one search, tile-maker sources only
  ([Marazzi — terrazzo-effect floors](https://www.marazzi.es/blog/valorizar-los-suelos-de-terrazo-en-la-decoracion-moderna-ideas-con-gres-porcelanico/),
  commercial tier) plus the ENVIRONMENT interior markers (MEDIUM and LOW,
  carried from the scaffold). The mesa camilla and the grandparents' detail
  are LOW.

#### Venue: Chalet or village-house patio, with the balcony and azotea variants (home, outdoor)
- Use for: home outdoor; the Sunday family paella (strongest in zone 4),
  a summer lunch or late dinner, a birthday; 1 to small group as a
  snapshot of 8 to 20. See ENVIRONMENT: Meal outdoors at home and
  CELEBRATIONS: Sunday family paella.
- Soft background (the core): a covered *porche* or a vine or
  canvas-shaded pergola throwing dappled shade; a built-in brick or stone
  barbecue (*barbacoa de obra*) with a chimney as a solid block at one
  side, or a gas-ring paellero with the wide pan on its stand and a thin
  haze of smoke; white or cream rendered walls of the house, terracotta
  or ceramic tiled floor, potted geraniums and a lemon or orange tree,
  a hedge or a whitewashed boundary wall; in an urbanización, the blue
  rectangle of a community or private pool glinting far behind and the
  rooftops of neighbouring chalets [MEDIUM — rental listings consistently
  pair built-in barbecues, porches, pergolas and pools; LOW for exact
  prevalence]. Light: high bright midday sun cut into hard-edged shade
  under the porch; long warm late-afternoon light for the sobremesa;
  summer dinner after 21:30 under string lights or a wall lamp. Palette:
  whitewash and cream, terracotta, vine green, pool blue, the saffron
  gold of paella. Signature shapes: the round paella pan on the table,
  the built-in barbecue chimney, the pergola slats or vine canopy, plastic
  or resin garden chairs, the pool's blue band.
- Shell: a single-family chalet, adosado (terraced house) with a small
  garden, or the family *casa del pueblo* with a courtyard [MEDIUM].
- The table as set here: a long folding or resin table, or two pushed
  together, under a plastic or cotton cloth; the paella pan centred on
  a trivet, lemon wedges, a bread barra, a salad bowl; everyday plates or
  eating straight from the pan in some families; resin chairs in white,
  green or grey [MEDIUM — CELEBRATIONS entry].
- Subregional variants and the national default: Valencia (zone 4):
  orange groves or huerta beyond the wall, a wood-fired paellero. Andalusia
  (zone 5): a whitewashed courtyard with an azulejo dado and geranium pots
  on the walls. Centre: a village-house courtyard with stone and a
  grapevine. Flats: the balcony (a bistro table on tiles, geraniums, a
  toldo, no grill) or the shared roof terrace (*azotea*) with water
  tanks and laundry lines. National default: a chalet porch with a vine
  pergola and a built-in barbecue.
- Hallucination traps: a Tuscan villa with cypress rows; Mexican hacienda
  tiles and cacti; "everything-seafood" paella with lobsters as decor; a
  US backyard deck with a big gas grill; sangría pitchers on the table
  (the strongest prior).
- Never stage: sangría, wine, beer, tinto de verano; legible labels;
  identifiable children by the pool; a full flag.
- Prompt-ready line: "A Spanish chalet porch at Sunday lunch: a paella pan
  sharp on a long cloth-covered table, behind it dappled shade from a vine
  pergola, a white rendered wall with geranium pots, a brick built-in
  barbecue chimney and the blue glint of a pool, all softly blurred."
- Confidence and sources: MEDIUM-LOW for the background (one search,
  rental listings only: [Casas Rurales — houses with pool and barbecue near
  Madrid](https://www.casasrurales.net/blog/10-casas-rurales-con-piscina-y-barbacoa-cerca-de-madrid),
  commercial tier); MEDIUM for the paella occasion (CELEBRATIONS sources).

#### Venue: Neighbourhood bar (*bar de barrio*, *bar de toda la vida*)
- Use for: restaurant, indoor; a tapa or ración at the counter, a quick
  pincho, LaLiga matchday (food-led only), solo or 2 to 3; the default
  everyday Spanish venue [register above].
- Soft background (the core): the long bar counter in stainless steel
  or zinc with a curved front edge (marble or wood in older castizo bars),
  its front often clad in tiles; on it, a glass refrigerated tapas display
  case with trays of tortilla, ensaladilla, croquetas and boquerones as
  soft colour blocks; a chrome napkin dispenser; behind the counter, a
  wall of white or patterned tiles or a mirror, with shelves blurred to
  abstract shapes (no bottle silhouettes, no taps, no coffee machine in
  focus); legs of jamón hanging from a rail in many bars as dark
  teardrop shapes; a TV high in a corner as a soft glow; tiled floor,
  sometimes with paper napkins on it near the counter; wooden or chrome
  high stools along the bar; a few small tables with marble or laminate
  tops [MEDIUM — Revista Interiores on castizo bars (steel counters,
  gresite tiles, wooden stools); the register above]. Light: cool-white
  overhead fluorescent or LED with warm spots over the counter; daylight
  through a glass front and door. Palette: stainless steel, white or
  cream tile, warm wood, the gold of fried tapas. Signature shapes: the
  curved steel counter edge, the glass display case, hanging jamón legs,
  the high TV, the napkin dispenser. Density: busy, noisy, well-worn,
  regulars. People cues: a waiter in a white shirt and black waistcoat
  or a plain polo with an apron, blurred; regulars at the counter as
  backs, within the limit.
- Shell: a ground-floor unit of a residential block, a glass front with
  a door, low ceiling with panel lights or fans [MEDIUM].
- The table as set here: the counter itself, or a small marble or steel
  table; small white plates and brown clay cazuelas, a plate of bread,
  toothpicks, paper napkins from the dispenser; forks laid on the plate
  [MEDIUM — the LaLiga entry].
- Subregional variants and the national default: Basque Country (zone 2):
  the pintxo bar, platters of composed bites along the counter with
  toothpicks upright, a standing ledge; Granada, León, Jaén (free tapa
  with a soft drink): the same bar, a small free plate beside the hero;
  Andalusia: azulejo wainscot, barrels as tables (keep empty and plain,
  or avoid since they read as wine); Madrid: a castizo tavern with dark
  wood, tiled wainscot and marble tables (see register: Traditional
  tavern). National default: a Centre zone steel-counter bar.
- Hallucination traps: a Mexican cantina; a British pub; a dim "tapas
  restaurant" abroad with Spanish flags, bullfight posters, fans and
  flamenco dolls; wine racks and sherry casks as decor; a cocktail bar.
- Never stage: cañas, beer taps, wine, vermut, coffee cups, bottle
  shelves in focus, legible chalkboards, price cards or lottery tickets;
  slot machines (*tragaperras*, a real bar fixture and a gambling cue);
  club crests on the TV.
- Prompt-ready line: "A Spanish neighbourhood bar: small plates of
  croquetas and bravas sharp on a curved stainless-steel counter, behind
  them a softly blurred glass tapas case, white tiled walls, hanging legs
  of jamón and a TV glowing high in the corner."
- Confidence and sources: MEDIUM; one search ([Revista Interiores — bares
  de toda la vida](https://www.revistainteriores.es/tendencias/bueno-bonito-y-castizo-5-bares-toda-vida-para-comer-lujo-y-pillar-ideas-deco_9296))
  plus the register and the LaLiga entry. The slot-machine note is LOW
  (model knowledge).

#### Venue: Menú-del-día dining room (*casa de comidas*, *restaurante de menú*)
- Use for: restaurant, indoor; weekday lunch (about 14:00 to 15:30) with
  primero, segundo and postre; 1 (a worker alone) or 2 to 3 colleagues;
  the default casual sit-down restaurant [HIGH for the format, scenario
  above].
- Soft background (the core): a small, bright dining room behind or
  beside a bar: rows of small square tables, each with a white paper
  tablecloth (or red-and-white check cloth in castizo houses), close
  together; walls with a tiled dado (white, blue-and-white or Andalusian
  patterned tiles) and plain plaster above with framed old photographs,
  paintings or plates; a menu board or a typed sheet on the wall (an
  unreadable white patch); a TV in a corner; a doorway to the bar with a
  waiter passing; a sideboard with stacked plates and bread baskets
  [MEDIUM — esMadrid and eldiario.es on Madrid casas de comidas (tiled
  walls, check cloths, marble bars, old photographs)]. Light: cool
  overhead light plus daylight from the street window. Palette: white
  paper, tile blue or green, warm wood, the beige of bread. Signature
  shapes: the rows of small paper-clothed tables receding, the tiled
  dado line, framed photographs, a bread basket on each table, the
  waiter's white shirt. Density: fast turnover, full at 14:30, worn but
  clean. People cues: workers in office or work clothes at other tables,
  blurred, within the limit.
- Shell: a ground-floor room behind a bar; terrazzo or tiled floor;
  low ceiling with fans or panel lights [MEDIUM].
- The table as set here: white paper tablecloth over cloth or bare,
  a paper napkin, cutlery laid fork left knife right, a basket of sliced
  barra, an oil-and-vinegar cruet, a salt shaker, thick white plates;
  the primero then the segundo; a plain glass for the hero serve when the
  brief allows (no wine or water bottle, per the scenario).
- Subregional variants and the national default: Madrid casa de comidas
  (check cloths, tiles, old photographs); Catalonia (a *menú* in a
  plainer modern room); Andalusia (azulejos, ceiling fans); Basque (a
  dining room behind a pintxo bar). National default: a small room with
  paper cloths and a tiled dado.
- Hallucination traps: a white-linen fine-dining room; a tourist
  "paella and sangría" restaurant with photo menus and flags; Mexican
  decor; bullfighting posters and heads as the default (some real
  castizo houses have them; do not stage).
- Never stage: wine bottles (the menú traditionally includes wine; the
  strongest prior), water bottles, coffee, legible menus or prices,
  bullfighting imagery.
- Prompt-ready line: "A Spanish menú-del-día dining room at lunchtime: a
  small table with a white paper cloth, a bread basket and a cruet sharp
  in front, behind it rows of close-set tables, a blue-and-white tiled
  dado and framed old photographs on cream walls, softly blurred."
- Confidence and sources: MEDIUM; one search ([esMadrid — traditional
  casa de comidas](https://www.esmadrid.com/en/traditional-casa-comidas);
  [eldiario.es — Madrid casas de comidas that survive](https://www.eldiario.es/madrid/somos/caminando-por-madrid/casas-comidas-sobreviven-madrid-15-negocios-clasicos-3-nuevas-recomendaciones_132_12735813.html);
  [Telemadrid — casas de comidas to neotabernas](https://www.telemadrid.es/experimenta-madrid/Ruta-de-sabores-por-Madrid-de-las-casas-de-comidas-mas-tradicionales-a-las-neotabernas-0-2708129176--20240919080000.html)).

#### Venue: Plaza terraza (bar or café tables outdoors)
- Use for: restaurant, outdoor, and the on-the-go register (a bocadillo
  or a ración between errands); tapeo for 2 to 3, Selección tournament
  night, a merienda; golden-hour and evening. The everyday outdoor
  Spanish table [register above].
- Soft background (the core): a stone or concrete paved plaza or a wide
  pavement; more small square tables (aluminium, steel or resin, often
  brushed silver or dark grey) with stackable aluminium or resin chairs
  in rows receding; plain canvas parasols in cream, white or dark green
  or a fixed awning (*toldo*) over the bar's frontage; behind, the bar's
  glass front and the façades of the plaza (in the Centre, brick or
  rendered three- to five-storey buildings with iron balconies and
  persianas; arcades in a *plaza mayor*); plane or acacia trees, street
  lamps, a church tower or fountain far off as a soft silhouette
  [MEDIUM — hospitality-furniture suppliers on stackable aluminium chairs,
  aluminium and resin tables, parasols and awnings; municipal terrace
  rules on movable furniture]. Light: golden hour at 20:00 to 21:30 in
  summer, long shadows across stone; blue hour with the lamps on.
  Palette: honey stone, brushed aluminium, canvas cream, brick red, tree
  green. Signature shapes: rows of small square tables and stackable
  chairs, the parasol canopies, iron balconies above, the arcade arches.
  People cues: blurred neighbours at other tables, a waiter with a tray,
  within the limit.
- Shell: open air; the plaza paving, the bar's frontage [MEDIUM].
- The table as set here: a small square metal table, no cloth (a paper
  placemat at most); small plates of tapas or raciones in the centre,
  toothpicks, paper napkins from a dispenser, bread; for on the go, a
  bocadillo in white paper or foil resting on the table or a stone
  bench (rule 4) [MEDIUM].
- Subregional variants and the national default: Andalusia (whitewash,
  orange trees, hard sun and deep shade, awnings stretched across
  streets); Basque and Galicia (greyer light, granite, a glazed
  windbreak around the terrace); Catalonia (a rambla or Gothic quarter
  square); Madrid (a plaza with brick façades). National default: a
  Centre zone plaza terrace at golden hour.
- Hallucination traps: Parisian bistro rattan chairs and marble
  tables; Italian piazza clichés; landmark skylines (Sagrada Família,
  the Alhambra) behind every table; sangría pitchers; flamenco
  performers.
- Never stage: beer, sangría, wine, vermut, coffee; branded parasols and
  chairs (in reality often brewery-branded: render them plain); legible
  signs; a full flag.
- Prompt-ready line: "A Spanish plaza terraza at golden hour: small plates
  of tapas on a brushed-aluminium table sharp in front, behind it rows of
  stackable chairs and plain cream parasols softly blurred, a bar's glass
  front and brick façades with iron balconies in warm low light."
- Confidence and sources: MEDIUM-LOW; one search, supplier sources
  ([Hevea — terrace furniture for bars](https://hevea.es/mesas-sillas-terraza-bar/);
  [Ceuta — terrace and velador regulation](https://www.ceuta.es/gobiernodeceuta/images/stories/documentos/ordenanza_reguladora_terrazas_veladores_Comisi%C3%B3n_Informativa.pdf),
  municipal tier). Brewery-branded parasols as common is LOW (model
  knowledge).

#### Venue: Village fiesta long tables (*cena popular*, *paella popular*) (other)
- Use for: other (the village plaza or sports ground); summer fiestas,
  especially August; 1 to small group as a snapshot of dozens to several
  hundred (see CELEBRATIONS: Village fiesta communal dinner). The
  signature Spanish large-gathering venue outside the home.
- Soft background (the core): long trestle tables with white or coloured
  paper tablecloths running away to a soft vanishing point in both
  directions; white or green plastic chairs in long rows; strings of small
  coloured pennant flags (*banderines*) zig-zagging overhead between
  lamp posts and balconies; the plaza's façades with iron balconies and a
  church tower silhouette (fine as background); the verbena stage at one
  end with coloured stage lights as large soft bokeh; for a paella
  popular, the giant pans on wood fires with smoke and figures stirring
  far back; peña groups in matching coloured shirts as blurred colour
  blocks (no legible text) [MEDIUM — CELEBRATIONS entry sources (municipal
  fiesta programmes, local press); the search this pass found only
  supplier pages]. Light: late golden hour for the paella cook-off;
  after 21:30, warm string bulbs and stage colour against a deep blue
  sky. Palette: paper white, plastic white or green, multicoloured
  pennants, warm bulb amber, stage magenta and blue. Signature shapes:
  the endless trestle line, plastic chairs, pennant strings, the church
  tower, the giant pan.
- Shell: open air; stone paving, asphalt or a sports-ground floor.
- The table as set here: paper cloth on a trestle; plastic or paper
  plates and cutlery; tortillas on plates, a bread bag, embutidos on
  paper, a paella portion per plate; the hero product as the brief says.
- Subregional variants and the national default: Valencia (zone 4):
  giant paella over orange-wood fires; Centre and Aragón: cena popular
  with each group's tortillas and embutidos; North: a sardine or
  chorizo grill. National default: a village plaza with trestle tables
  and pennants on an August night.
- Hallucination traps: running of the bulls or bullring imagery; a
  Mexican fiesta (papel picado, piñatas, sombreros); a fairground with
  rides as the main frame; beer cups on every table; a religious
  procession as the subject.
- Never stage: the bar stall and its plastic beer cups, sangría or
  kalimotxo; bull events; the patron saint's procession; legible peña
  names; fireworks near the product; identifiable children.
- Prompt-ready line: "A Spanish village fiesta dinner on an August
  night: one paper plate of paella sharp on a paper-covered trestle table,
  behind it the long table and rows of plastic chairs receding, strings of
  coloured pennants overhead and the verbena stage lights blurred into
  bokeh beneath a church tower."
- Confidence and sources: MEDIUM for the occasion (CELEBRATIONS sources);
  EDITORIAL for the background; one search this pass, no usable result.

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

Full staging for each celebration: see CELEBRATIONS & LARGE GATHERINGS below.

---

## CELEBRATIONS & LARGE GATHERINGS

The FESTIVALS & SEASONAL OCCASIONS register above stays the calendar
index; this section is the staging layer, per schema §5.7. File-wide rules
1 to 5 apply to every entry, especially rule 3: Spanish celebrations carry
cava, wine, beer and the after-meal liqueur in reality, and none may
appear. The register's sensitivity column (no bulls, no processions, no
product near fire) also applies.

### How large gatherings work here

- **Who gathers.** The extended family is the core unit and gatherings
  run large: a Nochebuena table of 10 to 20 relatives is ordinary, and
  life events are big (a First Communion averages about 50 guests in
  consumer-association studies; a wedding about 116). Summer village
  fiestas feed the whole village at a *cena popular*. [MEDIUM for the
  communion and wedding figures, see entries; EDITORIAL for Nochebuena]
- **Where (intake venues).** *Home indoor*: Nochebuena, Navidad,
  Nochevieja and the Reyes merienda, usually the grandparents' piso,
  with the living-room table extended. *Home outdoor*: the Sunday paella
  at a chalet, village house or patio (see ENVIRONMENT, Meal outdoors at
  home). *Restaurant*: First Communions almost always, and many
  birthdays. *Other*: weddings at a *finca* or banquet venue; fiestas in
  the village plaza on long trestle tables. [MEDIUM — Asociación
  Española de Consumidores, bodas.net; EDITORIAL elsewhere]
- **Table form and serving style.** One long table, often two tables
  pushed together under one tablecloth, everyone seated. Home festive
  meals are **shared from the centre**: platters of jamón, cheese and
  seafood as *entrantes* for the whole table, then a main course plated
  or carved at the table, then a tray of turrón and polvorones during a
  long sobremesa. Paella is served from the pan at the table, and in
  some families eaten straight from it. Weddings start with a standing
  *cóctel* of small bites, then a seated banquet at round tables.
  [MEDIUM — bodas.net; Sunday-paella sources; EDITORIAL]
- **Plate and cutlery norms that differ from everyday.** A festive
  tablecloth (often red or gold at Christmas), the good plates, a small
  side plate for shellfish shells, seafood crackers and picks at
  Christmas, small forks or toothpicks for jamón. Fork left, knife right
  (see this file's place-setting override). [EDITORIAL]
- **Snapshot-staging default for this market.** The three most
  authentic cues are: (1) the long table running out of frame with
  shared *entrante* platters (jamón, seafood, cheese, croquetas) set
  down the middle, more than the visible diners could finish; (2) the
  late hour, warm lamp light and the remains of a long meal (shell
  plates, a turrón tray, napkins dropped) that read as a sobremesa
  going on beyond the frame; (3) extra folding chairs or a second,
  mismatched table butted on. Blurred relatives stay within the
  2.5-face limit. [EDITORIAL]

#### Celebration: Christmas Eve and Christmas Day (Nochebuena, Navidad, Sant Esteve)
- Type: calendar holiday.
- When: Nochebuena dinner on 24 December, about 21:30 to midnight
  (intake time evening); Christmas Day comida on 25 December, about 14:30
  (midday); in Catalonia, a second big comida on 26 December (Sant
  Esteve). [HIGH for dates; MEDIUM for hours, per the meal clock above]
- Gathering: the extended family, about 10 to 20, at one home; home
  indoor. [EDITORIAL; one chef family's ~20 is reported anecdotally]
- The spread: *entrantes* first for the whole table: jamón (see catalog:
  Jamón (serrano / ibérico) + pan con tomate), cured sausages, cheese,
  croquetas (see catalog: Croquetas), and **seafood**: boiled red prawns
  and langoustines on platters, crab. The main is most often seafood
  (named by about 36% in an online-retailer survey) or **roast lamb**
  (about 21%; suckling lamb or a leg, in an earthenware dish), with
  turkey far behind (about 9%). [MEDIUM — Organizados.es survey via
  Diario de Gastronomía, commercial tier] Regional mains: Catalonia's
  *escudella i carn d'olla* (galets-pasta broth, then the boiled meats)
  on Christmas Day and **canelones** (cannelloni filled with the leftover
  meats, under béchamel and grated cheese) on Sant Esteve; cochinillo in
  Castile. [HIGH for Catalan dishes — Bonviveur, Vilapress, several
  agreeing sources] Sweets at the sobremesa: see catalog: Turrón and
  polvorones (section E). A real table carries 6 to 10 shared platters.
  No catalog entry exists for the Christmas seafood platter, roast lamb
  (*cordero asado*), escudella or canelones; all added to CANDIDATE
  QUEUE. The seafood platter reads as a 35 to 40cm oval platter of
  glossy coral-red prawns (each about the can's height in length) and
  langoustines in rows, lemon wedges; roast lamb as a golden, crackling-
  skinned quarter in a 35cm earthenware *cazuela* with its juices.
- Snapshot staging: **1 setting**: one plate with two red prawns and a
  slice of jamón, a shell plate beside it, the seafood platter and jamón
  plate cropped at the frame edge, a festive tablecloth. **2 settings**:
  two identical plates of roast lamb with roast potatoes, the lamb
  cazuela between them, the seafood platter partly cropped behind.
  **Small group**: three or four settings at one end, entrante platters
  crowding the centre, a turrón tray at the far edge. Cues: the table
  running out of frame with more platters; a nativity *belén* or tree
  blurred far behind (never in focus); late-night lamp light. [EDITORIAL]
- Decor and cues: red or gold tablecloth, poinsettia (*flor de Pascua*),
  the good glassware for water only. Avoid: US-style turkey dinners as
  the default; snow kitsch.
- Never stage: cava and the toast (the register's rule); wine bottles;
  the King's televised speech legible on a screen; the belén as the
  subject or with the product beside it.
- Confidence and sources: MEDIUM to HIGH ([Diario de Gastronomía —
  ¿Qué cenamos los españoles en Nochebuena?](https://diariodegastronomia.com/que-cenamos-los-espanoles-en-nochebuena/);
  [eldiario.es — Comidas navideñas típicas por comunidades](https://www.eldiario.es/consumoclaro/comer/comidas-navidenas-tipicas-comunidades-autonomas_1_1183163.html);
  [Bonviveur — Canelones de San Esteban](https://www.bonviveur.es/recetas/canelones-de-san-esteban);
  [Vilapress — Sant Esteve](https://www.vilapress.cat/articulo/actualidad-general/2025-12-26/5714955-sant-esteve-fiesta-singular-calendario-catalan-celebramos-cual-tradicion));
  EDITORIAL for staging.

#### Celebration: New Year's Eve dinner (Nochevieja)
- Type: calendar holiday.
- When: 31 December, dinner from about 21:30, the 12 grapes at midnight
  with the televised chimes; intake time evening.
- Gathering: family or friends, about 6 to 15; home indoor. [EDITORIAL]
- The spread: a dinner similar to Nochebuena (seafood, jamón, a roast
  main), then **12 grapes** per person in a small bowl ready for
  midnight; turrón and polvorones on the table. [HIGH for the grapes,
  register; MEDIUM for the dinner, not separately searched this pass]
- Snapshot staging: **1 setting**: a small bowl of 12 peeled or whole
  green grapes in front of one plate, the can beside it, a turrón plate
  and a cropped seafood platter behind. **2 settings**: two identical
  grape bowls, the remains of dinner between. **Small group**: a row of
  identical grape bowls continuing along the table beyond the frame,
  the strongest crowd cue for this night. Cues: the grape-bowl row;
  paper party hats and streamers; a TV glow far behind with no legible
  screen. [EDITORIAL]
- Decor and cues: gold and silver decor, streamers. Avoid: the red-
  underwear custom (real, but off-brand); legible clock faces or year
  numbers.
- Never stage: the cava toast (the register's rule); fireworks near the
  product.
- Confidence and sources: HIGH for grapes (register); MEDIUM for dinner.

#### Celebration: Three Kings merienda (Reyes, 5–6 January)
- Type: calendar holiday.
- When: the roscón is often eaten at breakfast on 6 January, which is
  out of scope; stage it as the **afternoon merienda** on 5 or 6 January
  (about 17:30 to 19:00; golden-hour into evening), per the register's
  rule. Families also gather for the 6 January comida.
- Gathering: grandparents, parents and children, about 6 to 12; home
  indoor. [EDITORIAL]
- The spread: see catalog: Roscón de Reyes (section E): one ring about
  20 to 26cm, split and filled with whipped cream, candied fruit on top,
  sliced into 4 to 5cm pieces; the hidden figurine is never shown. Hot
  chocolate is the real companion and is out of frame (another drink).
- Snapshot staging: **1 setting**: one dessert plate with a cream-filled
  roscón slice, the cut ring on its board behind, the paper crown that
  comes with it folded at the edge. **2 settings**: two identical slices,
  the ring between them. **Small group**: slices at three or four
  settings, a second (larger) roscón soft at the far end. Cues: the
  gold paper crown; unwrapped gifts and wrapping paper on a sofa behind;
  extra chairs. [EDITORIAL]
- Decor and cues: wrapping paper, the paper crown. Avoid: the cabalgata
  (parade) floats as the scene; children's faces sharp.
- Never stage: hot chocolate or coffee cups in frame; a child as the
  drinker.
- Confidence and sources: MEDIUM (register and catalog entry); EDITORIAL
  for staging.

#### Celebration: Sunday family paella (comida familiar del domingo)
- Type: community or family gathering (weekly; larger in summer).
- When: Sunday comida, about 14:00 to 16:00, followed by a long
  sobremesa; intake time midday (summer shade at a chalet reads
  midday too).
- Gathering: grandparents, adult children and grandchildren, about 6 to
  14; home outdoor (chalet patio, village house, Valencian huerta) or
  home indoor; a beach-town restaurant terrace is the restaurant
  variant. [MEDIUM — Sunday paella sourcing; ENVIRONMENT scenarios]
- The spread: the **paella** in its wide pan, cooked outdoors over a gas
  paellero or wood fire and carried to the table (see catalog: Paella
  and arroces; never silently seafood, never chorizo), preceded by a
  few shared entrantes (see catalog: Aperitivo spread; a salad; jamón).
  Paella is described as the typical Sunday family dish, sometimes eaten
  straight from the pan. [MEDIUM — Fuerte Hoteles and food sources;
  a La Fallera brand study (commercial) says three in four Spaniards see
  paella as a dish that brings people together] Shared vessels: the pan
  (about 36 to 48cm for 6 to 11 servings, 50 to 70cm for 11 to 20, per
  the SPANISH VESSEL & SCALE REFERENCE), a salad
  bowl, a bread basket, 2 or 3 entrante plates.
- Snapshot staging: **1 setting**: one plate of paella with a lemon
  wedge, the big pan cropped at the top edge on a trivet, a salad bowl
  beside it. **2 settings**: two identical plates either side of the pan's
  near edge. **Small group**: three or four settings round the near half
  of the pan, the far half and the table soft and out of frame; or, in
  the eat-from-the-pan register, wooden spoons resting on the pan rim
  at each setting. Cues: the pan wider than the visible diners need; the
  paellero and its gas ring soft in the background; a vine pergola or
  awning shade; a pool edge or white wall. [EDITORIAL]
- Decor and cues: oilcloth or cotton tablecloth, plastic or wooden
  garden chairs, summer shade. Avoid: flamenco or bullfight props;
  "tourist paella" with every seafood on top.
- Never stage: wine, beer or tinto de verano (rule 3); the after-meal
  liqueur at the sobremesa.
- Confidence and sources: MEDIUM ([Fuerte Hoteles — Tipos de
  paella](https://blog.fuertehoteles.com/comer-y-beber/recetas-de-paella-espanola/);
  [Gastronomía y Moda — La paella, el plato que más une](https://gastronomiaymoda.com/la-paella-el-plato-que-mas-une-a-los-espanoles-el-85-cree-que-ayuda-a-reconciliarse-tras-un-conflicto/),
  reporting a brand study); the Sunday-lunch framing is already
  MEDIUM-HIGH in this file's ENVIRONMENT section.

#### Celebration: Village fiesta communal dinner (fiestas del pueblo, cena popular)
- Type: community or family gathering (summer, especially August).
- When: evening, from about 21:30 into the verbena (intake time evening;
  golden-hour for the paella cook-off in the late afternoon).
- Gathering: the whole village and returning summer families, from
  dozens to several hundred, at long trestle tables in the plaza or
  sports ground (venue: other). Peñas (groups of friends in matching
  shirts) sit together. Councils often supply tables, chairs and
  firewood for a communal paella day. [MEDIUM — municipal fiesta
  programmes and local press]
- The spread: a **giant paella** (pans one to several metres across,
  cooked over wood fires) served onto plates, or a *cena popular* where
  each group brings tortillas, embutidos and salads; grilled sausages and
  bocadillos at the stalls. See catalog: Paella and arroces; Tortilla de
  patatas; Bocadillo family. [MEDIUM]
- Snapshot staging: **1 setting**: one plastic or paper plate of paella
  on a paper-covered trestle table, the can beside it, a tortilla on a
  plate and a bread bag next to it, the table running away to a soft
  vanishing point. **2 settings**: two identical plates side by side on
  the trestle, shared tortilla between. **Small group**: three or four
  plates on one stretch of the long table. Cues: the trestle table
  leaving frame in both directions; strings of small coloured flags
  overhead; the stage lights of the verbena far behind; blurred peña
  shirts (no legible text). [EDITORIAL]
- Decor and cues: paper tablecloths, plastic chairs, flag strings,
  church-tower silhouette fine as background. Avoid: bull events (never),
  legible peña names.
- Never stage: the bar stall and its plastic beer cups; the procession
  of the patron saint; fireworks near the product.
- Confidence and sources: MEDIUM ([Objetivo Castilla-La Mancha — Verbena,
  paella popular](https://objetivocastillalamancha.es/contenidos/verbena-paella-popular-conciertos-reconocimientos-recta-final-fiestas-jesus-perdon);
  [La Marina — El Verger fiestas patronales](https://lamarina.eldiario.es/evento/el-verger-fiestas-patronales-festes-programacion-celebran-del-7-al-16-de-agosto/));
  EDITORIAL for staging.

#### Celebration: First Communion banquet (Primera Comunión)
- Type: life event (religious milestone; staging is the meal only).
- When: April to June weekends; a restaurant comida after the church
  service, about 14:00 to 17:00 (intake time midday).
- Gathering: about 20 to 60 guests, with about 50 a common reference in
  consumer studies; the average total cost is put above €5,600, with the
  banquet the largest item. A restaurant salon or a finca (restaurant).
  [MEDIUM — Asociación Española de Consumidores study via El Debate and
  its own release]
- The spread: shared entrantes (jamón, croquetas, prawns, cheese; see
  catalog: Jamón, Croquetas, Gambas al ajillo) then a plated main
  (sirloin, lamb or fish), then a decorated communion cake. A children's
  table with a simpler menu is common. [MEDIUM for the banquet format,
  restaurant and consumer sources; EDITORIAL for the menu detail]
- Snapshot staging: **1 setting**: one plated main on a white-clothed
  round or long table, an entrante platter of jamón cropped beside,
  a white-and-pastel flower centrepiece. **2 settings**: two identical
  plates, the centrepiece between. **Small group**: three or four
  settings, the entrante platters crowding the middle, a second table
  soft behind. Cues: white table linen and pastel decor; blurred guests
  in formal spring clothes; the cake table soft in the background. The
  child honoree (about 8 to 10) is never shown with the product.
  [EDITORIAL]
- Decor and cues: white flowers, pastel ribbons. Avoid: the communion
  dress or suit as the subject.
- Never stage: the church service, chalice or host; wine; the child
  honoree as the drinker.
- Confidence and sources: MEDIUM ([El Debate — El coste de la Primera
  Comunión supera los 5.600 euros](https://www.eldebate.com/economia/20250323/coste-primera-comunion-supera-5600-euros-media-llega-alcanzar-13500_279580.html);
  [Asociación Española de Consumidores — nota de prensa](https://www.consumoenpositivo.es/nota-de-prensa/segun-estudio-de-la-asociacion-espanola-de-consumidores-una-comunion-media-supera-los-5600-euros/));
  EDITORIAL for staging.

#### Celebration: Wedding banquet (boda)
- Type: life event.
- When: May to October; the banquet is a late comida (about 15:00 to
  18:00, golden-hour) or a cena (from about 21:30, evening), with dancing
  and a late-night snack after.
- Gathering: about 116 guests on average (bodas.net Informe del Sector
  Nupcial 2025); a finca, hotel or banquet venue, round tables of about
  10 (venue: other). [MEDIUM — bodas.net, an industry platform, flagged
  per §6]
- The spread: two stages. A standing **cóctel** of small bites (croquetas,
  jamón carved at a station, small spoons, mini burgers, rice stations),
  then a seated banquet: a starter, a fish and/or meat main, the wedding
  cake. [MEDIUM — bodas.net]
- Snapshot staging: **1 setting** (banquet): one plated main at a white-
  clothed round table, a tall floral centrepiece partly cropped, a blank
  menu card. **2 settings**: two identical plates on one arc of the
  table. **Small group**: three or four settings, a second round table
  soft behind. Cóctel variant: a small plate with two croquetas and a
  jamón slice on a high table, the jamón-carving station blurred behind.
  Cues: round-table curve leaving frame; string lights in a finca
  courtyard; blurred guests in formal clothes. [EDITORIAL]
- Decor and cues: olive-tree or bougainvillea finca settings, string
  lights. Avoid: flamenco costume as the default.
- Never stage: the open bar (*barra libre*), cava toasts, wine on the
  table, the gin-tonic station.
- Confidence and sources: MEDIUM ([bodas.net — Cuánto cuesta una boda en
  España](https://www.bodas.net/articulos/cuanto-cuesta-casarse--c841);
  [bodas.net — Cuánto cuesta un banquete](https://www.bodas.net/articulos/cuanto-cuesta-banquete-boda--c8700));
  EDITORIAL for staging.

#### Celebration: Birthday (cumpleaños)
- Type: life event.
- When: children's parties are an afternoon **merienda** (about 17:30 to
  19:30, golden-hour); adult birthdays are a family comida at home or a
  restaurant (midday) or a dinner out with friends (evening).
  [LOW — not verified this pass; consistent with the meal clock]
- Gathering: children's party: classmates at a play centre, park or
  home, 10 to 25 children; family birthday: 6 to 12 at home or a
  restaurant. [LOW — not verified this pass]
- The spread: children's merienda: small sandwiches (*sándwiches de
  jamón york y queso*), crisps (see catalog: Aperitivo spread), tortilla
  pieces, sweets and a birthday cake; adult family comida: a shared
  picoteo of entrantes then a main or a paella. [LOW — general
  knowledge, not verified this pass]
- Snapshot staging: **1 setting**: one paper plate with two sandwich
  triangles, a wedge of tortilla and a few crisps on a party table, the
  cake partly cropped. **2 settings**: two identical plates, a crisps
  bowl and sandwich tray between. **Small group**: three or four plates,
  the cake with candles in the midground. Cues: balloons, a paper
  tablecloth, blurred guests (no sharp faces). [EDITORIAL]
- Decor and cues: balloons, garlands. Avoid: legible name banners;
  licensed characters.
- Never stage: a child as the drinker; beer at an adult birthday.
- Confidence and sources: LOW — not verified this pass (GAP LOG);
  EDITORIAL for staging.

---

## GAME NIGHT

Schema §5.8 and file-wide rules 1 to 5 apply to every entry: screens,
cards, boards and tiles are never legible (rule 1); the brief dictates
the SKU (rule 2); no other drinks in frame (rule 3: caña, wine, vermut,
coffee and the after-meal liqueur are all real at these occasions);
nothing held in a hand (rule 4). No crests, kits, sponsor marks or league
logos; no betting slips, odds screens, betting apps or money on the
table (sports betting is heavily advertised in Spain [LOW — not
verified]); party size is the place settings in frame, the crowd implied
(§5.7); no identifiable children; a 21:00 kick-off is a night scene.
Existing lines this section builds on rather than repeats: the
**Football in a bar** and **Stadium stands** rows in CROSS-CUTTING
REGISTER: COCA-COLA MOMENTS (raciones and bocadillos at the bar; a
bocadillo in foil and pipas in the stands), and catalog: F. Snacks, Pipas.

### Watch parties

Football is the viewing occasion, and Spain's distinctive form is the
**neighbourhood bar**: 39% of fans (about 3.3 million) watch each
matchday in bars and cafés, 84% of them men aged 25 to 64 [MEDIUM —
Barlovento/PuroMarketing]. El Clásico is the peak league game (2.37
million viewers and an 18.8% share on 10 May 2026 [MEDIUM — eldiario.es])
and the Selección draws the biggest home and terraza audiences in
tournament summers. Signature viewing foods are raciones on small plates
at the bar (patatas bravas, croquetas, tortilla wedges), bocadillos,
pipas, and a home picoteo of jamón, cheese and tortilla. Because Spanish
dinner runs about 21:00 to 22:30 (GENERAL NORMS), a 21:00 match is the
dinner itself.

#### Watch party: LaLiga matchday at the neighbourhood bar
- When: August to May, weekend afternoons and evenings; kick-offs are
  spread across the day, with the prime slot at 21:00 [LOW — not
  verified, model knowledge for the exact slots]. Intake time evening
  (dinner time, artificial light, dark outside in winter; dusk in late
  summer).
- Gathering: the operator's party is 1 to 3 at the counter or a small
  table; the bar around them is busy with regulars, mostly men [MEDIUM —
  Barlovento]. Venue: restaurant (bar).
- The spread: raciones on small white plates or in clay cazuelas on the
  counter: patatas bravas (see catalog: Patatas bravas), croquetas (see
  catalog: Croquetas), a tortilla wedge (see catalog: Tortilla de
  patatas), a bocadillo cut in half (see catalog: Bocadillo family), a
  free tapa of olives or crisps (see catalog: Aperitivo spread) [MEDIUM
  — the existing Football in a bar row; specific raciones EDITORIAL].
- Surface and environment: a steel or marble bar counter with paper
  napkins (the dispenser blurred, per rule 1), a TV high on the wall as an
  out-of-focus green glow, a plain scarf at most, tiled walls, warm
  overhead light. Coca-Cola in a glass with ice and lemon is a real bar
  serve if the brief allows a glass (see GAP LOG on its sourcing).
- Snapshot staging: **1 setting**: one small plate of bravas and a
  croqueta plate on the counter edge, the TV glow high and soft behind.
  **2 settings**: two identical small plates, a shared cazuela of
  croquetas between them. **Small group**: a small table with three
  plates and two shared raciones, other tables and the counter soft
  behind, blurred backs of heads toward the screen (no more than about
  2.5 faces, none sharp).
- Never stage: cañas, beer taps, wine, vermut or coffee cups on the
  counter (the strongest priors; prompt "no beer, no other drinks"); a
  legible screen, chalkboard or price card; club kits or crests;
  betting terminals or apps. **The bar is drink-heavy in reality;
  stage it only as this food-led, alcohol-free counter scene.**
- Confidence and sources: MEDIUM for bar viewing ([PuroMarketing — TV in
  bars during LaLiga](https://www.puromarketing.com/39/30792/social-media-bares-claves-para-anunciantes-lleguen-consumidores-durante-liga);
  [Barlovento — football on TV](https://barloventocomunicacion.es/informes-barlovento/el-futbol-en-television-la-liga-de-las-audiencias/));
  LOW for kick-off slots; EDITORIAL for staging.

#### Watch party: El Clásico at home with friends
- When: two league meetings a season plus cup games; the 10 May 2026
  game was on a Sunday [MEDIUM — eldiario.es]. Evening kick-offs are
  typical [LOW — not verified]; intake time evening.
- Gathering: 4 to 8 friends or family in a piso living room; home
  indoor. A young-adult flat-share is as plausible as a family home
  (see ENVIRONMENT).
- The spread: a picoteo on the coffee table: jamón on a plate (see
  catalog: Jamón), cheese wedges, a tortilla cut into squares with
  toothpicks (see catalog: Tortilla de patatas), crisps and olives (see
  catalog: Aperitivo spread), a pizza delivery box [LOW — not verified;
  the notes' editorial spread, consistent with the picoteo line in
  ENVIRONMENT].
- Surface and environment: a low coffee table or the extended dining
  table turned toward the TV; shutters, a tiled floor, a sofa; the TV a
  soft green blur. Fans of both clubs in one room is a real dynamic;
  show it with neutral clothes, never kits.
- Snapshot staging: **1 setting**: one small plate with two tortilla
  squares and a slice of jamón at the coffee-table edge, the jamón plate
  and an olive bowl beside it. **2 settings**: two identical plates, the
  shared plates between them. **Small group**: three or four plates, more
  shared plates than needed, the pizza box cropped, blurred figures on
  the sofa facing the screen.
- Never stage: either club's crest, colours worn as kits, or sponsor
  marks; beer; a legible screen; betting apps.
- Confidence and sources: MEDIUM for audience ([eldiario.es — Barcelona–Real
  Madrid audience, 10 May 2026](https://www.eldiario.es/vertele/audiencias-tv/domingo-10-mayo-2026-barcelona-real-madrid-mas-visto-dia-2-millones-supervivientes-divide-maquillar-dato_1_13210479.html));
  LOW for the spread; EDITORIAL for staging.

#### Watch party: Selección tournament night (terraza or home)
- When: June to July in Euro and World Cup years; evening games under a
  late summer sunset (Madrid sunset about 21:00 to 21:50 in June, per
  GENERAL NORMS), so a 21:00 kick-off starts at dusk and ends in the
  dark. Games of the 2026 World Cup in North America landed in the
  Spanish evening or late night [LOW — arithmetic].
- Gathering: family or friends at home, or a group at a bar terraza with
  a screen outside; big screens in plazas are reported for big games
  [LOW — not verified]. Venue: home indoor or outdoor (patio, terrace),
  restaurant (terraza).
- The spread: as the Clásico picoteo at home, or raciones on the terraza
  table (see the bar entry); summer additions: a gazpacho or salmorejo
  (see catalog: Gazpacho vs. salmorejo), ensaladilla rusa (see catalog:
  Ensaladilla rusa) [LOW — EDITORIAL].
- Surface and environment: a square aluminium terraza table on a plaza
  at blue hour, a screen soft and out of focus under an awning; or a
  home terrace table with string lights. A red-and-yellow paper garland
  or a cropped stripe at most; never a full flag (reviewer ruling,
  §5.7).
- Snapshot staging: **1 setting**: one small plate of ensaladilla and a
  croqueta plate on the terraza table, the screen glow soft behind.
  **2 settings**: two identical plates, two shared raciones between them.
  **Small group**: three or four plates, a second table pushed against
  the first, blurred figures facing the screen.
- Never stage: beer, tinto de verano or other drinks on the terraza;
  national kits with crests or sponsor marks; a legible screen;
  identifiable children with face paint.
- Confidence and sources: LOW for venues and spread; EDITORIAL for
  staging.

### Social game nights

Popularity as an occasion to gather and eat around: **medium**. Card
games (mus, brisca, tute) are played at the long sobremesa and in bars,
with mus "very common in bars and competitions"; parchís and dominoes
are the most-played tabletop games, mainly among older adults
[LOW-MEDIUM — Spanish regional press]. The long sobremesa itself is
enjoyed weekly by most people [MEDIUM — Mallorcadiario survey]. Bingo
halls exist but are gambling and are not staged [LOW].

#### Game night: cards at the sobremesa (mus, brisca, tute)
- When: after Sunday or holiday lunch, at the sobremesa, about 16:00 to
  18:00; intake time midday (the late Spanish lunch). Mus in a bar is
  the golden-hour variant [MEDIUM — the notes' card-game timing].
- Gathering: four players in pairs (mus and tute), with onlookers; family
  at home (home indoor) or older men at a bar's marble table
  (restaurant). Prefer the family-home version: it avoids the bar's
  drinks and its male-only crowd.
- The spread: the cleared lunch table's remnants: a bread basket, a fruit
  bowl, a plate of turrón or polvorones in season (see catalog: E.
  Desserts & festival sweets), a leftover tortilla wedge; at the bar,
  olives, croquetas or bravas (see catalog: Croquetas, Patatas bravas)
  [LOW — the notes' editorial spread; consistent with the Sobremesa at
  home row in COCA-COLA MOMENTS].
- Surface and environment: a tablecloth with crumbs, shutters half down
  and slatted afternoon light; a Spanish-suit deck (generic card faces
  are fine) with the cards fanned or face-down, never readable as a
  hand; at the bar, a small marble table.
- Snapshot staging: **1 setting**: one small plate with a slice of fruit
  or a piece of turrón beside a face-down pile of cards. **2 settings**:
  two identical small plates, the fruit bowl between them, cards in the
  middle of the table. **Small group**: four places around a square of
  table, the bread basket and dessert tray cropped, onlookers as soft
  shapes behind.
- Never stage: coffee cups, the after-meal liqueur or wine (rule 3; all
  real at a sobremesa); money or stakes; printed brand decks; the bar
  counter with beer.
- Confidence and sources: LOW-MEDIUM ([El Periódico de Yecla — card
  games](https://elperiodicodeyecla.com/juegos-de-cartas-mas-populares-espana/);
  [Soria Noticias](https://sorianoticias.com/noticia/2023-08-22-estos-son-los-juegos-de-cartas-mas-populares-en-espana-103300);
  [Mallorcadiario — sobremesa survey](https://www.mallorcadiario.com/tapas-sobremesa-y-siesta-asi-late-la-cultura-cotidiana-que-mas-seduce-y-resiste-en-espana));
  EDITORIAL for staging.

#### Game night: parchís or dominoes with the grandparents (merienda)
- When: summer afternoons into evening on a terrace or patio, or a
  winter afternoon at home; intake time golden-hour [LOW — not verified
  for timing].
- Gathering: grandparents with adult children or older neighbours, 2 to
  4 players; home outdoor (terrace, patio, village house) or home indoor.
  Older men at a bar or *hogar del jubilado* (seniors' centre) are the
  public form [LOW].
- The spread: a merienda: a bocadillo cut in pieces (see catalog:
  Bocadillo family), a bowl of nuts or kikos (see catalog: F. Snacks,
  Frutos secos), a fruit plate [LOW — the notes' editorial spread, which
  also lists churros; they are left out here because this file keeps
  churros in the off-by-default Morning Module].
- Surface and environment: a plastic or wrought-iron terrace table, a
  plain parchís board (four-colour cross, generic) or white dominoes
  laid in a line; potted geraniums, a whitewashed wall, late sun.
- Snapshot staging: **1 setting**: one plate with half a bocadillo beside
  the domino line. **2 settings**: two identical plates, a nut bowl
  between them, the board in the centre. **Small group**: four plates
  round the table edge, the board in the middle, a second chair at the
  frame edge.
- Never stage: branded boards; money on the table; identifiable
  grandchildren; beer or coffee.
- Confidence and sources: LOW-MEDIUM for the games' popularity (regional
  press); LOW for timing and spread; EDITORIAL for staging.

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
- **Composition & proportions (§4.7)** — whole tortilla, 24 cm pan.
  - **What dominates**: **potato**, bound by egg. A purist ratio is about
    1 kg peeled potato to 8 eggs (roughly 1 egg per 100 g cooked potato);
    on a cut face, potato layers take roughly 60–70% of the area and egg
    the rest; onion, if used, is a thin minority (~10%). [MEDIUM-HIGH —
    El Español, Directo al Paladar, Hogarmanía agree on the ratios; the
    cut-face shares are EDITORIAL]
  - **Components**:

    | Component | Size | Look | Where |
    |---|---|---|---|
    | Potato | Thin slices ~2–3 mm, or "chascada" (broken off with a twist of the knife, irregular edges) [HIGH — Hogarmanía]; pieces ~2–4 cm across | Soft, pale cream, stacked in layers; never crisp or fried-brown inside | Throughout, visible as layered strata on the cut face |
    | Egg | — | Jugosa: glossy, loose, barely set yellow between the layers; cuajada: matte, fully set | Binding the layers; forming the golden outer skin |
    | Onion (con cebolla) | Thin slivers, cooked soft | Translucent golden | Between potato layers, sparse |
    | Olive oil | — | A light sheen on the surface | Surface only, no pools |

  - **Arrangement**: a single thick cushion 3–5 cm tall, rounded tucked
    edges; one wedge removed (see Staging).
  - **Served portion**: a pincho wedge ~9–12 cm on its long edge, cut
    face toward camera, on a small plate with a slice of bread or on bread.
  - **State cues**: room temperature or just warm — no steam needed; the
    jugosa centre may ooze slightly onto the plate.
  - **Absent on purpose**: toppings of any kind, herbs, peppers, chorizo,
    cheese, visible browned fried-potato crunch inside.
  - **Prompt-ready line**: "A thick, round Spanish potato omelette about as
    tall as a third of the can, smooth golden-amber outside with rounded,
    tucked-under edges. A wedge is cut away to show the inside: many thin
    layers of soft pale-cream potato slices held together by glossy,
    barely set yellow egg that is just starting to ooze. No toppings, no
    herbs, no vegetables on top."

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
- **Composition & proportions (§4.7)** — ración.
  - **What dominates**: **béchamel**. Inside, a creamy béchamel makes up
    most of the filling; the flavour ingredient (jamón, chicken, cod) is
    small flecks or cubes, perhaps 15–25% of the cut face; the crumb shell
    is a thin 1–2 mm skin. [EDITORIAL from recipe norms — MEDIUM]
  - **Components**: croquetas ~3.5 cm long (cocktail ~15 g, standard
    ~25–35 g) [MEDIUM — Croquetas Ricas]; jamón cubes ~3–5 mm, pink;
    chicken shreds pale; breadcrumb fine, even, amber-gold.
  - **Count**: ración 6–10 on a 22–26 cm oval, loosely heaped or in a row;
    tapa 2–4.
  - **Arrangement**: touching, slightly jumbled; one broken open to show
    the cut face.
  - **State cues**: a thin wisp of steam from the broken one; no oil
    pooling on the plate.
  - **Absent on purpose**: dipping sauces, ketchup, salad garnish, panko
    texture, potato filling.
  - **Prompt-ready line**: "Six small golden croquettes, each shorter than
    half the can's height, with a fine, even, dry-crisp breadcrumb shell,
    piled on a white oval plate. One is broken open: the inside is
    mostly smooth, glossy ivory béchamel that slumps slightly, with only
    small pink flecks of cured ham. No sauce, no garnish."

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
- **Composition & proportions (§4.7)** — ración de jamón.
  - **What dominates**: thin slices of lean meat; each slice ~5–8 cm long,
    near-translucent, with a rim or marbling of fat taking roughly 20–30%
    of its area. [LOW-MEDIUM — slice size not independently re-searched]
  - **Count and arrangement**: ~15–25 slices fanned in **a single
    overlapping layer** covering a 22–26 cm plate edge to edge, no
    stacking or folding into roses. [MEDIUM]
  - **Pan con tomate alongside**: 2–4 slices of toasted bread, each ~10–12
    cm, the tomato a thin coral-pink layer soaked into the crumb, not
    chunks on top.
  - **State cues**: fat glistening, slightly translucent at room
    temperature; no condensation.
  - **Absent on purpose**: melon, figs, cheese boards, herbs, thick
    machine-cut deli slices.
  - **Prompt-ready line**: "A white plate covered edge to edge by a single
    overlapping layer of very thin, hand-carved slices of deep-red cured
    ham, each shorter than the can is tall, with glistening ivory fat at
    the edges and a few tiny white crystal specks. Beside it, toasted
    bread rubbed with a thin coral-pink layer of tomato and olive oil."

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
- **Composition & proportions (§4.7)** — tapa and ración.
  - **What dominates**: **potato** — roughly 75–85% of what is seen;
    sauce covers the top third of the pile, not the whole of it; alioli
    (Catalan variant) a smaller accent. [EDITORIAL]
  - **Components**: potato chunks ~2–3 cm (recipes cite ~2 cm dice; bar
    bravas are often rougher, irregular chunks) [MEDIUM — Consumer,
    Wikipedia via search]; sauce spooned over, orange-red; alioli a dollop
    or zigzag.
  - **Count**: tapa (~50–100 g) ≈ 6–10 pieces on a small plate or
    cazuelita; ración ≈ four times a tapa, ~25–40 pieces on a 20–24 cm
    oval. [MEDIUM — Directo al Paladar on tapa weight and ración ratio]
  - **Arrangement**: a loose low heap, sauce running down into gaps and
    pooling slightly at the base; 2–4 toothpicks upright.
  - **State cues**: steam faintly visible; crisp edges still dry where
    the sauce hasn't reached.
  - **Absent on purpose**: ketchup, chives, parsley, chilli flakes,
    uniform cubes, wedges, fries, sauce only in a ramekin.
  - **Prompt-ready line**: "A small white plate of fried potato chunks,
    each about the width of a thumb joint, irregular with crackly golden
    corners and fluffy white centres, in a loose low heap. Glossy
    orange-red paprika sauce is spooned over the top and runs into the
    gaps; a few toothpicks stand in the potatoes. Mostly potato; the
    sauce covers only the top."

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
- **Composition & proportions (§4.7)** — ración and bocadillo.
  - **What dominates**: squid rings, each ring ~1 cm thick (a finger's
    width) and ~4–6 cm across; the coating is a thin skin (andaluza) or a
    visibly thicker shell (romana), never more than ~2–3 mm. [MEDIUM —
    Gallina Blanca and recipe sources on ring thickness]
  - **Count**: ración ~15–25 rings heaped on an oval with 2 lemon wedges;
    bocadillo ~10–15 rings (roughly 125–150 g of squid per roll).
    [MEDIUM — recipe quantities 500–600 g for four bocadillos]
  - **Arrangement**: rings tumbled and overlapping; in the bocadillo,
    spilling out of both ends of the split barra.
  - **Served portion**: **a Madrid bocadillo de calamares is plain — no
    lettuce, no tomato, no sauce** (mayonnaise or alioli only as an
    option, a squeeze of lemon at most). [MEDIUM-HIGH — Directo al
    Paladar, Bonviveur]
  - **State cues**: just-fried, dry-crisp coating; no grease pool.
  - **Absent on purpose**: marinara or dipping sauce, parsley shower,
    onion rings, thick breadcrumb coating, salad in the bocadillo.
  - **Prompt-ready line (bocadillo)**: "A crusty baguette-style roll about
    twice the can's height, split and overfilled with fried squid rings
    about a finger thick in a thin pale-golden coating, rings spilling
    out of both ends. Nothing else in the roll: no lettuce, no tomato,
    no sauce. On white paper on a bar counter."

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
- **Composition & proportions (§4.7)** — a standard bocadillo.
  - **What dominates**: **bread**. On a cut face the barra's crust and
    crumb take roughly 70–80% of the height; the filling is **one modest
    layer ~1–2 cm thick** (jamón: 3–5 folded slices; tortilla: one
    ~2 cm slab; lomo: 2–3 thin fillets). [EDITORIAL — consistent with
    the "single modest layer" norm above]
  - **Serranito**: from the bottom up — 2 slices of tomato, 1 thin pork
    loin fillet, 1 whole fried green pepper opened flat, 2–3 slices of
    jamón on top; fries on the side. [HIGH for composition, above]
  - **State cues**: bread fresh and shattering, crumbs on the paper.
  - **Absent on purpose**: lettuce, mayonnaise slathers, cheese slices
    (except lomo con queso), stacked deli layers.
  - **Prompt-ready line**: "Half of a crusty baguette-style sandwich, about
    the can's height long, cut face toward the camera: a thick golden
    crackly crust and pale open crumb with one thin layer of folded
    deep-red cured ham, crust flakes scattered on the white paper beneath.
    The other half is out of frame."

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
- **Composition & proportions (§4.7)** — tapa.
  - **What dominates**: potato (roughly 60%), then mayonnaise binding
    everything; carrot, peas and tuna are small visible accents (~10% each)
    in ~5–8 mm dice. [EDITORIAL from recipe norms]
  - **Toppings (choose one or two, sparse)**: 2–4 olives, 2–3 thin roasted
    red pepper strips, a few tuna flakes or egg crumbs.
  - **Served portion**: a mound ~8–10 cm across, ~3–4 cm high, smoothed or
    forked, with 3–5 picos or regañás.
  - **Absent on purpose**: celery, mustard yellow, large chunks, lettuce.
  - **Prompt-ready line**: "A small smooth dome of creamy pale-ivory potato
    salad on a small white plate, dotted with tiny cubes of orange carrot
    and green peas, a glossy mayonnaise surface, two green olives and a
    thin strip of red pepper on top, crunchy breadsticks alongside."

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
- **Composition & proportions (§4.7)** — individual cazuela.
  - **What dominates**: **olive oil and prawns together** — the oil fills
    the cazuela to ~1–2 cm, and 8–12 peeled prawns (each ~5–7 cm when
    curled) sit half-submerged; garlic slices (~10–15, 2 mm thick) and
    1–2 guindilla rings are accents. [MEDIUM for counts — EDITORIAL from
    recipe portions]
  - **Arrangement**: prawns jumbled in a single layer, the golden oil
    visible between them.
  - **State cues**: sizzling — tiny bubbles at the rim, a haze of steam.
  - **Absent on purpose**: shells and heads, cream, rice, skewers.
  - **Prompt-ready line**: "A small round terracotta dish, glazed inside,
    holding a shallow pool of bubbling golden olive oil with about ten
    peeled, curled pink prawns half-submerged, thin golden garlic slices
    and one dried red chilli ring; parsley flecks; bread beside it."

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
- **Composition & proportions (§4.7)** — ración.
  - **What dominates**: the peppers — ~15–25 small peppers, each ~4–7 cm
    (about half the can's height), heaped loosely; flaky salt a visible
    white accent. [MEDIUM]
  - **State cues**: glossy with oil, blistered, some blackened patches,
    stems intact.
  - **Absent on purpose**: large peppers, sliced peppers, sauces.
  - **Prompt-ready line**: "A small oval plate heaped with about twenty
    small green peppers, each about half the can's height, glossy,
    blistered and wrinkled with blackened patches, stems on, scattered
    with big white flakes of salt."

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
- **Composition & proportions (§4.7)** — ración for two.
  - **What dominates**: **fried potato** (roughly 60–70% of the visible
    area) — thick-cut, ~1 cm batons or rough slices; 2 fried eggs lie on
    top and are broken; 3–5 slices of jamón (or chistorra pieces) are
    accents draped over. [EDITORIAL]
  - **State cues**: yolk just broken and running in rivulets; whites
    lacy-crisp at the edges; steam.
  - **Absent on purpose**: toast, cheese, herbs, neat intact yolks.
  - **Prompt-ready line**: "An oval plate of golden fried potatoes, cut
    thick, topped with two fried eggs with lacy crisp brown edges whose
    yolks have just been broken and run in glossy orange rivulets over
    the potatoes, a few thin slices of cured ham draped on top."

#### Albóndigas

- **Form**: meatballs in a light brown almond/onion sauce or tomato
  sauce, in a cazuela with bread; common as a menú del día dish or tapa.
  [CONFIDENCE: MEDIUM-HIGH]
- **Vessel & scale**: balls ~3–4cm; cazuela ~15–20cm. [CONFIDENCE: LOW-
  MEDIUM]
- **Texture**: browned, slightly rough surfaces half-submerged in glossy
  sauce; sometimes peas or fried potato cubes alongside.
- **Common model failure**: spaghetti and meatballs.
- **Composition & proportions (§4.7)** — cazuela.
  - **What dominates**: meatballs (~3–4 cm, 6–10 per cazuela) half-
    submerged in sauce that fills the cazuela to about half their height.
    [LOW-MEDIUM]
  - **Absent on purpose**: pasta, grated cheese, herbs piled on top.
  - **Prompt-ready line**: "A small terracotta dish of about eight browned,
    slightly rough meatballs, each about half the can's width, half-
    submerged in a glossy light-brown sauce, bread beside it."

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
- **Composition & proportions (§4.7)** — one drink's aperitivo.
  - **What dominates**: **one or two small things only**: a small bowl
    (~8–12 cm) of 8–12 olives, or a small bowl of crisps, or both; a tin
    of conservas or a plate of 6–10 boquerones fillets is a separate,
    ordered item. [EDITORIAL — the free aperitivo is small]
  - **Absent on purpose**: a full spread of everything at once;
    charcuterie boards; nuts in large quantities.
  - **Prompt-ready line**: "A small white bowl of about ten glossy green
    olives in a little brine and a small bowl of thin, pale-golden crisps
    beside it, on a bar-table."

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
- **Composition & proportions (§4.7) — paella valenciana, a 4-person pan
  (~38–40 cm).** Added 2026-09-27 after a test render drew the plated
  portion as large chicken pieces and giant beans.
  - **What dominates**: **rice is the dish.** Roughly 60–70% of the
    visible surface is rice; meat roughly 20–25%; green beans and
    garrofó together roughly 10–15%. The meat and beans are scattered
    accents sitting in the rice, never a pile on top of it. [EDITORIAL
    synthesis from the recipe sources below — shares are not measured]
  - **Component table**:

    | Component | Real size | Count (pan / one portion) | Look | Where it sits |
    |---|---|---|---|---|
    | Rice (bomba or similar round grain) | Raw grain ~5.2–5.8 mm long, ~2.2–2.5 mm wide; roughly doubles when cooked — each cooked grain well under 1 cm, plump, short and round-ended [HIGH for raw size — Gallina Blanca, Cultura Valenciana] | Thousands / a thin layer | Separate, loose grains, saffron gold to amber, a light oil gloss, drier and matte towards the rim | A thin even layer across the whole pan, **~1 cm deep (a finger's thickness)**, flat, never mounded [HIGH for thin layer, not stirred — Gastraval, Tú te lo guisas] |
    | Chicken | Bone-in pieces ~4–6 cm, "not very large", no loose small bones [MEDIUM — recipe sources agree pieces are moderate and cleaned; exact cm is an inference] | ~8–10 / 2 | Skin browned golden to deep amber, matte-crisp in patches | **Half-sunk in the rice**, top third showing |
    | Rabbit | Smaller bone-in pieces ~3–5 cm [LOW-MEDIUM] | ~6–8 / 1–2 | Paler, browned edges, lean | Half-sunk, scattered between chicken pieces |
    | Ferraura (flat green bean) | Cut by hand into lengths of **two to three fingers (~4–6 cm)**, ~1.5–2 cm wide, flat [MEDIUM-HIGH — hola.com, UA blog] | ~20–30 / 5–7 | Olive to dull green (cooked, not bright blanched green), soft, slightly wrinkled | Lying flat on the rice surface, scattered |
    | Garrofó (large flat white bean) | **~2.5 × 1.5 cm**, flat, not very rounded [MEDIUM — Colono Gourmet, Secofrut] — about a third of the can's diameter; **smaller than a chicken piece, not bean-stew sized** | ~25–40 / 5–8 | Ivory to pale cream, matte, skin slightly wrinkled | Scattered, half-sunk, a few on top |
    | Tomato and pimentón | Grated, cooked into the base — **no visible tomato pieces** | — | Tints the rice a warmer amber-orange at the base | Invisible except as colour |
    | Rosemary (optional, household custom) | One sprig ~10–15 cm | 0–1 / 0 | Dark green, needles intact | Laid on top at the end, then usually removed before serving [MEDIUM — custom varies by household] |
    | Snails (optional, valid variant) | Shells ~2–3 cm | 0–20 / 0–5 | Brown-striped small shells | Scattered on top |

  - **Arrangement**: meat and beans evenly scattered across the whole pan,
    not grouped, not radial (radial prawns belong to paella de marisco).
    Rice is visible between every piece — no piece touches the next over
    more than a few centimetres. [EDITORIAL]
  - **Vessel fill and depth**: the rice reaches roughly a third to half of
    the 4–6 cm rim; the whole base is covered edge to edge; the pan rim and
    both looped handles clearly visible. [MEDIUM]
  - **Served portion vs. whole dish**: **in Valencia the family eats
    straight from the pan** with spoons, each person from their own
    wedge-shaped sector, no plates. [HIGH — Gastraval, Restaurante Casa
    Ángel, Nurimar] Outside Valencia, or for a single-diner scene, one
    portion on a flat plate is **a thin, low layer of rice covering most
    of the plate, with about two small meat pieces, five or six green bean
    pieces, a handful of garrofó, and one or two shards of socarrat** — not
    a mound, not a pile of meat. [EDITORIAL portion synthesis]
  - **State cues**: no liquid left on top; the surface dry and matte at the
    edges, faintly glossy in the centre; socarrat darkening the base and
    rim; a light wisp of steam if just off the fire. [HIGH for dry,
    socarrat-finished rice]
  - **Absent on purpose**: seafood, chorizo, peas, red pepper strips,
    onion, hard-boiled egg, parsley garnish; **lemon wedges** (a non-
    Valencian habit — lemon was traditionally for cleaning hands after
    cooking over wood) [HIGH that lemon on the rice is not Valencian
    tradition — Gastraval, Directo al Paladar]; any liquid broth pooling.
  - **Prompt-ready line**: "A wide, shallow, two-handled steel paella pan
    covered edge to edge in a thin, flat layer of separate saffron-gold
    rice grains about a finger deep, dry on top with a dark caramelised
    crust at the rim. Scattered sparsely through the rice and half-sunk in
    it: a few small browned bone-in chicken and rabbit pieces, short flat
    olive-green bean pieces, and flat ivory beans each about a third the
    width of the can. Mostly rice; the meat and beans are small accents.
    No seafood, no chorizo, no peas, no lemon."
  - **Sources**: [Gastraval — paso a paso](https://gastraval.com/como-hacer-una-paella-valenciana-tradicional-paso-a-paso/);
    [hola.com — paella valenciana de pollo y conejo](https://www.hola.com/cocina/recetas/2013112768369/paella-valenciana-conejo/);
    [Tú te lo guisas — paella valenciana tradicional](https://tuteloguisas.com/paella-valenciana-tradicional/);
    [Colono Gourmet — the garrofón](https://colonogourmet.at/en/blogs/elblogdeoche/der-garrofon-wesentliche-zutat-der-valencianischen-paella);
    [Gallina Blanca — arroces para paella](https://www.gallinablanca.es/reportaje/arroces-indispensables-para-hacer-paella/);
    [Restaurante Casa Ángel — cómo se come una paella](https://restaurantecasaangel.com/arroces/como-se-come-una-paella/).
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
- **Composition & proportions (§4.7)** — a counter row and one plate.
  - **What dominates**: **the topping**, which is taller than the bread:
    a ~8–10 cm baguette slice ~1 cm thick carries a topping mound 3–5 cm
    high that covers the whole slice to its edges; one toothpick through
    the centre. [EDITORIAL from the scale above]
  - **Count**: a diner's plate holds 2–3 pintxos; the counter behind holds
    rows of 20–40 on platters. A gilda: one olive, one anchovy coiled
    around, 2–3 guindillas, on an 8–10 cm stick.
  - **Absent on purpose**: plated tapas without bread, formal canapé
    piping, cocktail sticks with frills.
  - **Prompt-ready line**: "On a small white plate on a bar counter, two
    bite-size open sandwiches on thick slices of baguette, each piled
    higher than the bread with a glossy topping (roasted red peppers and
    a silvery anchovy; a creamy salt-cod spread), a toothpick through
    each. Behind, softly out of focus, rows of similar bites along the
    counter."

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
- **Composition & proportions (§4.7)** — a slice.
  - **What dominates**: the creamy interior; the burnt top is a ~3–5 mm
    near-black skin, no base or crust. [EDITORIAL]
  - **Served portion**: one wedge ~1/8 of a 20–22 cm cake, ~6–8 cm tall
    (a little over half the can's height), cut face to camera, crinkled
    parchment left under or peeled back; nothing else on the plate.
  - **Absent on purpose**: berry coulis, whipped cream, biscuit base,
    icing sugar.
  - **Prompt-ready line**: "One wedge of crustless cheesecake about half
    the can's height, top deep caramel-black and blistered, sides
    ruffled and bronzed from crumpled baking paper, the cut face pale
    cream and very soft, sagging slightly at the centre. Plain white
    plate, no sauce, no garnish."

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
- **Composition & proportions (§4.7)** — one wooden plate.
  - **What dominates**: octopus rounds (~1–1.5 cm thick, 2–4 cm across),
    ~20–30 of them covering the plate in a single layer; cachelos
    (potato slices) beneath if used, visible only at the edges; pimentón
    and salt a surface dusting. [EDITORIAL for counts]
  - **Absent on purpose**: grill marks, whole tentacles, lemon, parsley,
    salad, ceramic plate.
  - **Prompt-ready line**: "A round, oil-darkened wooden plate covered in
    a single layer of octopus cut into thick coins, each about a third of
    the can's width, purple-pink skin with pale suction-cup rims and
    firm white centres, dusted unevenly with red paprika, coarse salt and
    a pool of golden olive oil; toothpicks stuck in a few pieces."

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
- **Composition & proportions (§4.7)** — one square.
  - **What dominates**: the filling layer (~1.5–2 cm) between two thin
    crusts (~5–8 mm each); a square ~8–10 cm on a plate or napkin.
    [LOW-MEDIUM]
  - **Absent on purpose**: crimped half-moon shapes, sauces.
  - **Prompt-ready line**: "A square slice of a large flat Galician pie,
    about the can's height across, thin golden egg-washed top crust with
    a strip of dough decoration, the cut side showing a reddish, oily
    onion-and-pepper filling with flakes of tuna between two thin crusts."

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
- **Composition & proportions (§4.7)** — individual cazuela.
  - **What dominates**: **beans** (~60–70% of the surface) — large
    ivory fabes ~2.5–3 cm long; the compango (1–2 chorizo rounds or
    chunks, 1 slice of morcilla, 1 piece of pork belly) sits on top as
    accents or is served on a separate plate. Broth reaches just below the
    top layer of beans. [EDITORIAL]
  - **Absent on purpose**: tomato sauce, a crust, small dark beans.
  - **Prompt-ready line**: "An earthenware bowl of large, plump, creamy
    white beans, each nearly half the can's width, in a loose orange-
    tinted broth with fat droplets, topped with a few glossy red chorizo
    slices, a slice of near-black blood sausage and a piece of pork
    belly."

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
- **Composition & proportions (§4.7)** — one cachopo.
  - **What dominates**: **the breaded cutlet itself**, ~30 cm+ long,
    ~2–3 cm thick in total, overhanging a 26–28 cm plate; fries and 2–3
    roasted pepper strips on a separate plate or tucked at one edge.
    Cut face: thin pale veal top and bottom (~5 mm each), a pink jamón
    layer, molten cheese. [MEDIUM for size, see above]
  - **Absent on purpose**: sauces, salad heaps.
  - **Prompt-ready line**: "A huge golden breaded cutlet, wider than the
    dinner plate it sits on and about three cans across, cut open at one
    end to show two thin layers of pale veal around pink cured ham and
    stretching melted cheese; a pile of chips beside it."

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
- **Composition & proportions (§4.7)** — the three vuelcos.
  - **Vuelco 1**: soup plate of clear golden broth with fine noodles, the
    noodles filling about a third of the depth. **Vuelco 2**: platter of
    chickpeas (the bulk, ~60%), with boiled potato, carrot and cabbage.
    **Vuelco 3**: platter of meats — a chunk of beef shank, a piece of
    chicken, 2–3 chorizo pieces, 2–3 morcilla slices, pork belly, a
    tocino slab, a bone. [MEDIUM-HIGH for the three-part structure;
    counts EDITORIAL]
  - **Staging**: pick one vuelco per shot or show them in sequence; never
    one bowl with everything mixed.
  - **Prompt-ready line (vuelco 2)**: "An oval platter heaped mostly with
    plump golden-beige chickpeas, with boiled potato halves, carrot
    lengths and soft pale green cabbage beside them."

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
- **Composition & proportions (§4.7)**.
  - **Gazpacho**: liquid fills a tumbler to ~80% (or a small ~100 mL
    glass); garnish is tiny (~5 mm) dice of cucumber, pepper and bread on
    a side plate or a spoonful on top — a small accent. [EDITORIAL]
  - **Salmorejo**: a 12–15 cm bowl filled to ~1 cm below the rim; topping
    is sparse — a spoonful of chopped egg and 3–5 small jamón shards
    clustered in the centre, a thread of oil. [EDITORIAL]
  - **Prompt-ready line (salmorejo)**: "A small shallow bowl of thick,
    velvety deep-orange cold tomato cream holding spoon ridges, with a
    small cluster of chopped hard-boiled egg and a few shards of cured
    ham in the centre and a thin thread of olive oil."

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
- **Composition & proportions (§4.7)**.
  - **Pescaíto**: a mixed plate is mostly small whole fish (15–25
    anchovies or small fish ~8–12 cm, often fanned by the tails) with a
    few pieces of cuttlefish or squid; 1–2 lemon wedges; on a paper
    cone or oval plate. [EDITORIAL]
  - **Espeto**: one cane with 5–6 sardines (~15–18 cm each) threaded
    through, laid on a plate; skins charred and blistered; coarse salt.
    [MEDIUM]
  - **Absent on purpose**: thick batter, tartar sauce, fillets.
  - **Prompt-ready line (espeto)**: "A plate with five whole sardines
    threaded crosswise on a thin cane, each a little longer than the can,
    skins silver and blistered black in patches from wood fire, coarse
    salt crystals, a beach behind softly out of focus."

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
- **Composition & proportions (§4.7)** — a tapa.
  - **What dominates**: the puffed crackling crown (~1–1.5 cm of the
    height), over alternating bands of fat and meat; 3–5 strips on a
    small plate, standing on their sides or lying. [EDITORIAL]
  - **Prompt-ready line**: "Four thick strips of fried pork belly, each
    about half the can's height, on a small plate, the skin puffed into a
    blistered, glassy golden crackling crown over clear bands of pale fat
    and pink-brown meat."

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
- **Composition & proportions (§4.7)** — a calçotada serving.
  - **What dominates**: a pile of 10–20 blackened calçots on a roof tile
    or wrapped in paper; a bowl of romesco (~10–12 cm) is the only
    accompaniment in frame; one or two shown peeled. [EDITORIAL]
  - **Prompt-ready line**: "A curved terracotta roof tile piled with long
    spring onions charred black and ashy, each about two cans long, one
    peeled to its soft glossy white-and-pale-green centre, beside a bowl
    of coarse brick-orange nut sauce."

#### Serranito and flamenquín (zone 5, compact)

- **Serranito**: see Bocadillo family above (confirmed this pass).
- **Flamenquín (Córdoba)**: pork loin rolled around jamón, breaded and
  fried into a log ~15–25cm long, sliced into rounds that show a spiral;
  with chips and mayo. [CONFIDENCE: MEDIUM — not individually re-searched
  this pass]
- **Composition & proportions (§4.7)** — flamenquín.
  - **What dominates**: the breaded log; served as 4–6 rounds (~2–3 cm
    thick, ~4–5 cm across) each showing the jamón-and-loin spiral, with
    fries and a little mayonnaise. [EDITORIAL] Serranito: see Bocadillo
    family.
  - **Prompt-ready line**: "Five thick rounds cut from a golden breaded
    pork roll, each about the can's width, the cut faces showing a
    spiral of pale pork loin and pink cured ham, with fries beside them."

### C. Grill & meat (compact)

*None of the entries in this subsection were individually re-searched
this pass — carried at the scaffold's own reasonable-consensus level,
downgraded one notch from its own self-assessment where it had claimed
higher than general knowledge supports.*

- **Chuletillas de cordero**: tiny lamb chops ~8–10cm with the bone,
  piled on a plate. Crisp charred fat edges, a pink centre, coarse salt;
  eaten by the bone. [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: 8–12 chops fanned or piled on a 26–28 cm plate, bones outward; meat ~60%, charred fat rim ~20%; 3–5 fried potato pieces or nothing else. Absent: mint sauce, garnish. [EDITORIAL]
- **Pinchos morunos**: paprika- and spice-marinated pork cubes on a
  ~20–25cm metal skewer; orange-red, glossy, charred edges. [CONFIDENCE:
  MEDIUM]
  - *Composition & proportions (§4.7)*: one skewer of 5–7 cubes (~2–2.5 cm) per portion, laid on a small plate with a bread slice under the tip. Absent: vegetables between the cubes. [EDITORIAL]
- **Secreto ibérico**: a marbled pork cut, grilled and sliced into
  strips; a deep brown sear over a juicy, pink-white marbled interior.
  [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: 8–12 strips (~1.5 cm wide, 8–10 cm long) fanned on a plate, half the plate; fries or piquillo peppers on the other half. Absent: sauces. [EDITORIAL]
- **Chistorra/txistorra**: a thin (~2cm) long orange-red sausage fried in
  coils or pieces; glossy, blistered skin; on a small plate or a bread
  slice. [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: one coil ~12–15 cm across or 6–8 finger-length pieces on a small plate or a bread slice; a thin oil pool. Absent: garnish. [EDITORIAL]
- **Chorizo and morcilla a la brasa**: grilled sausages, charred and
  split; morcilla near-black, crumbly and rice- or onion-studded at the
  cut. [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: 2–4 sausages or split halves on a board, bread alongside; sausage ~70% of the board area, bread the rest. [EDITORIAL]
- **Chorizo a la sidra (zone 1)**: chorizo pieces simmered in cider and
  served sizzling in a cazuela, red oil pooling. The cider is a cooking
  ingredient, not a drink in frame. [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: 8–12 thick chorizo rounds (~2–3 cm) half-submerged in red-orange oil and cider in a small cazuela; bread beside. Absent: a cider bottle or glass. [EDITORIAL]

### D. Menú del día plates (compact)

*Not individually re-searched this pass — carried at the scaffold's own
level, since none of these surfaced as contested or surprising.*

- **Lentejas**: brown lentils in a loose, glossy, brick-brown broth with
  chorizo rounds and carrot pieces, in a 22–24cm soup plate. [CONFIDENCE:
  MEDIUM-HIGH]
  - *Composition & proportions (§4.7)*: lentils ~70% of the bowl surface; 3–5 chorizo rounds and a few carrot pieces as accents; broth just covering. Absent: cream, herbs. [EDITORIAL]
- **Pisto**: a soft, jammy, glossy red stew of peppers, onion, courgette,
  and tomato, often topped with a fried egg. [CONFIDENCE: MEDIUM-HIGH]
  - *Composition & proportions (§4.7)*: the vegetable stew covers the plate or cazuela in a loose layer; one fried egg on top as the single accent. Pieces ~1–1.5 cm dice, soft and jammy. [EDITORIAL]
- **Merluza a la romana**: battered hake fillets, puffy, pale-gold and
  smooth, with lemon and salad. [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: 2–3 battered fillets (~10–12 cm) take half the plate; a small green-lettuce-and-tomato salad or fries the other half; 1 lemon wedge. [EDITORIAL]
- **San Jacobo**: ham and cheese between thin breaded pork or ham slices,
  fried; a kid and Gen Z favourite. Golden crumb, cheese oozing at the
  cut. [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: one golden breaded rectangle ~10–12 cm, cut to show oozing cheese and ham; fries alongside take about half the plate. [EDITORIAL]
- **Filete con patatas**: a thin fried beef or pork fillet with chips and
  a fried egg or salad. [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: one thin fillet covering about half a 26–28 cm plate, chips the other half, optionally one fried egg on the chips. [EDITORIAL]
- **Flan**: a glossy, smooth, pale-custard cylinder ~7–9cm tall, amber
  caramel pooling around it, tiny air bubbles at the sides, on a small
  plate. [CONFIDENCE: MEDIUM-HIGH]
  - *Composition & proportions (§4.7)*: one unmoulded flan (~7–9 cm tall, a little shorter than the can) centred on a small plate with a thin caramel pool around it; nothing else, or one rosette of cream. [EDITORIAL]
- **Arroz con leche**: creamy rice pudding in a small bowl with a
  cinnamon-dusted surface, sometimes a strip of lemon peel. [CONFIDENCE:
  MEDIUM-HIGH]
  - *Composition & proportions (§4.7)*: a small bowl filled to ~1 cm below the rim; a dusting of cinnamon covers the surface; one strip of lemon peel at most. [EDITORIAL]
- **Natillas**: pale-yellow custard in a bowl with a biscuit on top.
  [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: a small bowl of custard filled near the rim; one round biscuit (María) on top, half-sunk; a cinnamon dusting. [EDITORIAL]

### E. Desserts & festival sweets (compact)

- **Crema catalana**: in a shallow 10–12cm cazuelita; a thin, hard,
  glassy amber burnt-sugar crust that cracks into shards when tapped,
  over smooth pale-yellow custard. [CONFIDENCE: MEDIUM-HIGH — not
  individually re-searched this pass]
  - *Composition & proportions (§4.7)*: the whole cazuelita surface is the burnt-sugar crust (~2 mm), cracked in one or two places with a spoon; nothing on top. [EDITORIAL]
- **Tarta de Santiago**: an almond cake ~20–24cm across and ~3–4cm tall;
  dense, moist, slightly grainy crumb; powdered-sugar top with a
  stencilled cross silhouette in bare cake. [CONFIDENCE: MEDIUM-HIGH]
  - *Composition & proportions (§4.7)*: one wedge (~1/8) on a plate, powdered sugar top showing part of the cross stencil; no cream or fruit. [EDITORIAL]
- **Torrijas (Semana Santa)**: thick slices of bread soaked and fried;
  golden, caramelized crust over a custardy, wobbly interior; a sugar-
  cinnamon crust or honey gloss. [CONFIDENCE: MEDIUM-HIGH]
  - *Composition & proportions (§4.7)*: one or two thick slices (~3 cm) per plate, glossy with honey or crusted with sugar-cinnamon; no fruit or ice cream. [EDITORIAL]
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
  - *Composition & proportions (§4.7)*: the whole ring on a board or a few ~4–5 cm slices showing the cream band; candied fruit spaced around the top, not covering it. [EDITORIAL]
- **Turrón and polvorones**: soft Jijona turrón — beige, oily-grainy nut
  paste; hard Alicante turrón — white nougat studded with whole almonds;
  polvorones — small, crumbly, powdery shortbreads in twisted paper
  wrappers (wrapper text blurred). [CONFIDENCE: HIGH]
  - *Composition & proportions (§4.7)*: a small plate with 4–6 turrón bars/pieces (~3 × 1.5 cm) and 3–4 wrapped polvorones; no bars stacked high. [EDITORIAL]
- **Coca de Sant Joan (zone 3, 23 June) — corrected this pass.** A long,
  flat, oval brioche-like pastry with rounded corners, traditionally
  twice as long as it is wide; a dedicated recipe source gives a
  10–12-person coca as roughly **40cm × 25cm**, about 2.5–3cm thick before
  baking (thinning to roughly 1cm as the dough is stretched) — **wider
  than the scaffold's own 40×15–20cm estimate**, corrected here. Glossy
  crust topped with candied fruit, pine nuts, and sugar; cut into slices.
  [CONFIDENCE: MEDIUM] [SOURCE: [Cocinatis — Coca de San Juan](https://www.cocinatis.com/receta/coca-de-san-juan.html); [Bonviveur — Coca de San Juan](https://www.bonviveur.es/recetas/coca-de-san-juan)]
  - *Composition & proportions (§4.7)*: one long oval coca on a board, or 3–4 slices; candied fruit pieces spaced every few cm, pine nuts scattered, sugar crust visible between. [EDITORIAL]
- **Panellets (1 November, zone 3)**: small marzipan balls ~3–4cm, rolled
  in pine nuts toasted golden. [CONFIDENCE: HIGH]
  - *Composition & proportions (§4.7)*: 6–10 small balls on a plate or in a paper tray, pine-nut coated; nothing else. [EDITORIAL]
- **Castañas asadas**: roasted chestnuts with split, charred, glossy-
  brown shells showing golden flesh, in a paper cone. [CONFIDENCE: HIGH]
  - *Composition & proportions (§4.7)*: a paper cone holding ~10–12 chestnuts, a few split open; nothing else. [EDITORIAL]
- **Buñuelos**: buñuelos de viento — small, hollow, puffy golden balls
  ~3–4cm, sugar-dusted; Fallas buñuelos de calabaza — irregular, knotty
  rings, crisp outside. The chocolate cup is excluded. [CONFIDENCE:
  MEDIUM]
  - *Composition & proportions (§4.7)*: 8–12 small puffs in a paper cone or on a plate, sugar dusting; the chocolate cup excluded. [EDITORIAL]
- **Rosquillas de San Isidro**: "tontas" are plain golden rings; "listas"
  are glazed with yellow-and-white icing; ~6–8cm. [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: 4–6 rings on a plate or paper, tontas and listas mixed if asked. [EDITORIAL]

### F. Snacks (compact)

- **Pipas**: sunflower seeds in black-and-white striped shells, from a
  small bag; eaten on benches and in stadiums. Authentic detail: a small
  pile of split, empty shells beside the bag. [CONFIDENCE: HIGH]
  - *Composition & proportions (§4.7)*: one small bag and a small pile of 20–40 split empty shells beside it on a bench or step. [EDITORIAL]
- **Frutos secos**: salted almonds, peanuts, and kikos (big, puffed,
  golden, crunchy corn kernels) in paper cones or bowls. [CONFIDENCE:
  MEDIUM]
  - *Composition & proportions (§4.7)*: a small bowl or paper cone (~8–10 cm) holding one kind of nut; not a mixed platter. [EDITORIAL]
- **Vasito de fruta**: pre-cut fruit in a clear cup with a small fork.
  Show the chunks and the fork so it doesn't read as juice. [CONFIDENCE:
  MEDIUM]
  - *Composition & proportions (§4.7)*: a clear cup filled with ~2 cm chunks of 2–3 fruits, a small plastic fork standing in it. [EDITORIAL]
- **Pollo asado**: a whole rotisserie chicken with bronzed, glossy,
  crackly skin in a crimped foil tray (~25×20cm), with golden potatoes.
  [CONFIDENCE: MEDIUM]
  - *Composition & proportions (§4.7)*: one whole bronzed chicken fills the foil tray; potatoes (~3–4 cm) tucked around it take about a third of the tray. [EDITORIAL]
- **Papas arrugadas con mojo (Canaries)**: small potatoes ~3–5cm with
  wrinkled skins and a dusty white salt crust; red mojo (brick-orange,
  oily) and green mojo (herby green) in small bowls. [CONFIDENCE: HIGH]
  - *Composition & proportions (§4.7)*: 8–15 small potatoes on a plate (~70% of it); two small bowls of red and green mojo beside; the salt crust visible on every potato. [EDITORIAL]

---

## EXAMPLE PROMPT LANGUAGE (illustrative — not validated by any image test)

**A. Terraza, drink with a free tapa**

> A small square aluminium table on a stone plaza in a Spanish city at
> golden hour on a summer evening, long warm shadows, plane trees behind.
> On the table: {HERO PRODUCT from the brief — here, for illustration, a
> Coca-Cola Original can, not Zero Sugar or Light}, a standard 330ml can
> (11.52cm tall, 6.61cm diameter), beaded
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
> small bread basket. Beside the plate: {HERO PRODUCT from the brief —
> e.g. a Coca-Cola Original 330ml can, not Zero Sugar or Light}. Behind,
> softly out of focus: fruit stacked in pyramids and hanging hams; stall
> signs and price cards visible only as blurred, unreadable colour. No
> juice cups, no other drinks. Nothing held in a hand.

*Before use: run at least two generations per prompt per
`country-file-schema.md` §7.5, and apply this file's own confidence tags
— several dish dimensions above remain LOW-MEDIUM even after this pass.*

---

## GAP LOG

- **Composition & proportions blocks (added 2026-09-27, `country-file-schema.md`
  §4.7) are mostly editorial synthesis.** Piece sizes are sourced where
  tagged; counts and surface shares are reasoned from recipe quantities and
  serving norms, tagged [EDITORIAL], and should be checked against image
  tests — two or more generations per prompt-ready line — before being
  treated as reliable.

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

- **Celebrations pass (2026-10-01) open items.** The birthday entry is LOW
  throughout (no searches spent; general knowledge). The Nochebuena main-
  dish shares (seafood ~36%, lamb ~21%, turkey ~9%) come from one online-
  retailer survey reported by Diario de Gastronomía, not a national
  statistic. Headcounts for Nochebuena, Nochevieja, Reyes and the Sunday
  paella are editorial. Communion (about 50 guests) and wedding (about
  116) figures are consumer-association and industry-platform data read
  in search summaries. The Nochevieja dinner menu beyond the grapes was
  not separately verified.
- **Game-night pass (2026-10-01) open items.** Not verified: LaLiga and
  Clásico kick-off slots; big screens in plazas for Selección games; the
  home picoteo and terraza spreads; the prevalence of sports betting;
  the merienda spread and timing for parchís and dominoes. The bar-
  viewing share (39%, 3.3 million) is Barlovento data read via
  PuroMarketing; card-game popularity rests on Spanish regional press
  (LOW-MEDIUM). The bar's Coca-Cola glass-with-ice-and-lemon serve is
  still unsourced for Spain (see the brand-file note above).

- **Venue-profile pass, wave 1 (2026-10-01) open items.** Not verified
  (search summaries only, no pages read): piso interior markers still
  rest on the scaffold (persianas, galería, butane cylinder) plus
  tile-maker pages; the mesa camilla is LOW; chalet patio prevalence of
  built-in barbecues and pools rests on rental listings; terraza furniture
  on supplier pages, and brewery-branded parasols as common is LOW; the
  village-fiesta background search returned nothing usable (background is
  editorial on the CELEBRATIONS sources); slot machines in bars LOW.

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
7. Celebration dishes with no catalog entry (celebrations pass
   2026-10-01): Christmas seafood platter (*mariscada*: red prawns,
   langoustines, crab); roast lamb (*cordero asado* / lechazo) and
   cochinillo; *escudella i carn d'olla* (zone 3); *canelones de Sant
   Esteve* (zone 3); children's party merienda.
8. Game-night foods with no catalog entry (game-night pass 2026-10-01):
   home picoteo board (cheese wedges, tortilla squares on toothpicks) as a
   compact entry; pizza delivery as eaten at home (no Spain entry yet).

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
- **2026-10-01 celebrations pass (schema §5.7):** 6 searches (Nochebuena
  main-dish survey, First Communion guests and cost, wedding guest
  numbers, Sunday family paella, village fiesta communal dinners, Sant
  Esteve canelones and escudella). Added CELEBRATIONS & LARGE GATHERINGS
  after the FESTIVALS register with 8 entries: Nochebuena/Navidad/Sant
  Esteve, Nochevieja, Reyes merienda, Sunday family paella, village
  fiesta cena popular, First Communion, wedding, birthday. WebSearch only.
- **2026-10-01 game-night pass (schema §5.8):** built from the
  cross-market research notes (45 searches across all markets), 0 new
  searches. Added GAME NIGHT after CELEBRATIONS & LARGE GATHERINGS with
  three watch-party entries (LaLiga matchday at the neighbourhood bar,
  staged food-led and alcohol-free; El Clásico at home; Selección
  tournament night on a terraza or at home) and two social game-night
  entries (cards at the sobremesa; parchís or dominoes with the
  grandparents). Points to the existing Football in a bar and Stadium
  stands rows and the Pipas entry rather than repeating them. Bingo halls
  recorded as not staged.
- **2026-10-01 venue-profile pass, wave 1 (schema §5.9): 6 profiles, 7
  searches.** Added VENUE PROFILES after the QUICK-REFERENCE table: piso
  living-dining room and kitchen, chalet or village-house patio (balcony
  and azotea variants), neighbourhood bar, menú-del-día dining room, plaza
  terraza, village fiesta long tables. WebSearch only; no pages read at
  source.
