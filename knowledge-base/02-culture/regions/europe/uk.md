---
country: united_kingdom
ou: NOT CONFIRMED — TCCC's internal OU code for this market was not found via
  WebSearch in this session; flag for correction from TCCC's own market
  documentation, do not guess. What this pass *did* confirm, and what should
  substitute for a formal OU code until one is found: the market's actual
  bottler footprint is split, not unified — see FILE ROLE & METHOD below.
status: DRAFT — NEEDS SME/HUMAN REVIEW — first non-US country file built with
  full WebSearch verification (second country file overall, after the
  Uruguay pilot)
research_method: Claude web research (WebSearch only — WebFetch/direct page
  reads were blocked by network egress for every domain attempted, consistent
  with every prior research round on this project). Built as a verification-
  and-merge pass over `knowledge-base/scratch-uk-model-knowledge-draft.md`, a
  model-knowledge-only scaffold produced by a separate, tool-less Claude
  session — every claim in that scaffold was independently checked here, not
  carried over on trust. See RESEARCH LOG for what was confirmed, corrected,
  or dropped.
date_drafted: 2026-09-24
---

## FILE ROLE & METHOD

This is the United Kingdom's national index file. It holds full,
authoritative depth for everything genuinely UK-wide (fish and chips, the
Sunday roast, pub pies, the Cornish pasty, the sausage roll, the meal-deal
sandwich, curry-house dishes, the ploughman's lunch, bangers and mash,
shepherd's/cottage pie, the Scotch egg, the jacket potato), plus compact,
visually-usable **callout** entries for Wales and Northern Ireland (their
signature dishes don't clear the bar for their own files — see below — but
get more than a bare mention), plus a **pointer** to `uk-scotland.md` for
Scotland-specific full depth.

### Structural decision: index + one regional file (Scotland), not inherited from the scaffold's guess

The scaffold this file supersedes flagged two structural recommendations
from its own two drafting rounds — round 1 recommended no split at all
(one file, four nation callouts); round 2, self-revising, recommended
"index + `uk-scotland.md`, with Wales and NI as callouts" (its Option B) —
and explicitly deferred the actual decision to a research pass. This pass
ran the §1.1 swap test with real evidence for each candidate, rather than
inheriting either round's guess:

- **Scotland fails the swap test on food, vocabulary, and architecture
  simultaneously — a stronger case than any single-axis US regional
  split.** [CONFIDENCE: HIGH]
  - **Food**: haggis, neeps and tatties; the Scotch pie; Cullen skink — a
    thick smoked-haddock-and-potato soup with real institutional
    documentation (originating in the Moray coastal town of Cullen, now a
    fixture from seaside cafés to hotel menus) — are dishes with no
    equivalent presence in an English pub or chippy's everyday repertoire.
    [SOURCE: [Wikipedia: Cullen skink](https://en.wikipedia.org/wiki/Cullen_skink)]
  - **Vocabulary that changes what a scene should be captioned/staged as,
    not just word choice**: "fish supper" (fish and chips; a "single" is
    chips alone) and Edinburgh's "salt and sauce" (chippy brown sauce,
    thinned with water or vinegar, applied instead of or alongside plain
    vinegar) are both real, specifically Scottish chip-shop conventions,
    not simply regional slang for the same thing. [SOURCE: [The Scotsman —
    Shocking secret of Edinburgh's chippy sauce revealed](https://www.edinburghnews.scotsman.com/news/shocking-secret-of-edinburghs-chippy-sauce-revealed-104357)]
  - **Architecture**: sandstone tenement flats accessed by a shared stone
    stairwell (a "close") are Scotland's dominant historic urban housing
    type in Glasgow and Edinburgh, built largely 1840–1920 — there is no
    equivalent English building type, and an English red-brick terrace
    staged as a generic "UK home" in a Scottish-set scene would look
    visibly wrong to anyone from Glasgow or Edinburgh. [CONFIDENCE: HIGH]
    [SOURCE: [Vanilla Square — A History of Glasgow's Tenements](https://vanillasquare.co.uk/history-glasgows-tenements/); [Engine Shed — Exploring tenement building details](https://blog.engineshed.scot/2020/12/22/exploring-tenement-building-details-around-edinburgh/)]
  - This is a genuinely stronger case than any single US regional split in
    this project to date, which typically clears the bar on one or two of
    these three axes (a distinct dish set, or a distinct settlement
    history/architecture), not all three at once.
- **Wales is real but thin at this file's lunch/dinner/snack scope, once
  the breakfast-leaning laverbread is excluded** — cawl, Welsh rarebit, and
  Welsh cakes are genuine, well-documented dishes, but they don't add up to
  a whole second everyday dish *set* the way Scotland's does: the Sunday
  roast, the chippy, the pub, and the curry house are shared with England,
  not swapped out. **Decision: callout, not a file** — the same
  "borderline, thin, fold it in" resolution this project already reached
  for Lowcountry inside `us-south.md`. [CONFIDENCE: MEDIUM-HIGH]
- **Northern Ireland is a genuinely different, harder case — not a simple
  "thin, so callout" call.** The food evidence alone reads similarly thin
  to Wales's (champ, the chip-shop "pastie," traybakes), which would argue
  for the same callout treatment. But **a real, checkable piece of market-
  structure evidence changes the analysis**: Coca-Cola's own bottler
  footprint does not treat Northern Ireland as part of the same commercial
  unit as England/Scotland/Wales. Great Britain is bottled and distributed
  by Coca-Cola Europacific Partners (CCEP) GB, which employs staff "across
  England, Scotland and Wales" specifically. Northern Ireland, by contrast,
  is served by **Coca-Cola HBC Ireland & Northern Ireland** — a single
  combined all-island operation headquartered in Dublin, with its largest
  production site (Knockmore Hill, Lisburn) serving both jurisdictions as
  one market. [CONFIDENCE: HIGH — both companies' own current corporate
  pages state this directly] [SOURCE: [Coca-Cola EP — Great Britain](https://www.cocacolaep.com/gb/); [Coca-Cola HBC Ireland — Ireland & Northern Ireland At a Glance](https://ie.coca-colahellenic.com/en/about-us/coca-cola-hbc-ireland-and-northern-ireland-at-a-glance)] In other words: for the one brand this entire knowledge base exists to
  serve, "the UK market" and "Northern Ireland" are not the same
  commercial thing — Northern Ireland's actual bottling/distribution
  partner is shared with the Republic of Ireland, not with Great Britain.
  - **Decision, made rather than left silently open**: Northern Ireland
    stays in this file for now, as a compact callout alongside Wales —
    there is no Ireland file yet to hold it, it is constitutionally part
    of the United Kingdom, and its documented dishes (champ, the pastie
    supper, traybakes) are real and worth having somewhere. **But this is
    flagged explicitly, here and in DECISIONS.md, as provisional and
    likely to be revisited**: when a future Ireland file is built, the
    right outcome may be an island-of-Ireland treatment of Northern
    Ireland's food culture (which the cultural sourcing above already
    suggests shares more with the Republic — champ, soda bread, the Ulster
    fry lineage — than with Great Britain specifically) rather than
    leaving it split across two files indefinitely. This is the same kind
    of explicit, not-fully-resolved cross-boundary caveat
    `us-arizona.md`/`us-new-mexico.md` left for the Navajo Nation's span
    across state lines — a real structural tension named honestly rather
    than forced to a tidy resolution the evidence doesn't support yet.
- **English internal (North/South) variation stays as an emphasis note,
  not a split** — condiment/frying-fat geography (dripping vs. vegetable
  oil, cod vs. haddock), "tea" vs. "dinner" naming, and city-specific
  dishes (London pie and mash) are dish-level and terminology-level
  variation within one shared everyday repertoire, the same `us-northeast.md`-
  style "zones within one file" pattern the scaffold itself proposed and
  this pass confirms rather than a further file split.

### Regional-file table

| Region | File | Status |
|---|---|---|
| England, Wales (callout), Northern Ireland (callout) | `uk.md` (this file) | National index — full depth for UK-wide dishes |
| Scotland | `uk-scotland.md` | Built this pass — full depth |

### Scope (per task brief, inherited without re-litigating)

Lunch, dinner, and snacks. **Breakfast is out of scope** — this rules out
the full English/Ulster fry, Lorne sausage, and laverbread as full entries
(Wales's callout below notes laverbread exists but doesn't cover it for
this reason). No beverages other than Coca-Cola are documented as subjects
— tea, beer, Irn-Bru, and squash are real and constantly present in UK
food scenes but are not catalogued here, and see the beverage-leak note
under VISUAL & PLATING NORMS for how to keep them out of frame without
making a scene look unnatural.

---

## QUICK-REFERENCE: GENERIC SCENE REGISTERS

| Generic scene type | What to draw on |
|---|---|
| **Chippy/fish-and-chip shop (takeaway)** | A walk-up counter, fish sliced/battered to order or held warm under a heat lamp, chips scooped from a hot well, food wrapped in plain white paper or boxed in cardboard (not polystyrene — see the ban dates below), a small wooden two-prong chip fork, a vinegar bottle and salt shaker on the counter. |
| **Traditional pub** | Dark wood, patterned carpet, upholstered banquettes, a fireplace, low ceilings/beams in older buildings — the default UK group-meal venue. Explicitly exclude pint glasses/ale pumps/lager bottles per the beverage-leak note. |
| **Gastropub** | Painted walls in muted heritage colors, scrubbed wooden tables, mismatched chairs, food served on boards/slates, chips in a mini wire fry-basket — a real, more recent register, not the default. |
| **Curry house** | Old-school: dark red/burgundy décor, flock wallpaper, white tablecloths. Modern: minimalist, bright. Poppadoms with a condiment tray are the near-universal opener. |
| **Supermarket/high-street meal deal, eaten on the go** | A pedestrian, transit, or desk-lunch culture, not a car/drive-thru one — a genuine, sourced contrast with the US. A sandwich wedge pack, a crisp packet, and a can, eaten on a park bench, a low wall, or a train seat. |
| **Pie-and-mash shop (East London-coded)** | White/green tiled walls, marble-topped tables, wooden bench seating, mirrors — a distinctive, well-documented register. Genericize any real named shop per §7.5. |
| **Bakery-chain counter** | A high-street bakery selling sausage rolls, pasties, and other pastry snacks in paper bags — genericize the chain name. |

Full background-first profiles for the main venues: see VENUE PROFILES below.

---

## VENUE PROFILES

Schema §5.9 applies: the default camera is a close-up hero (sharp table,
soft room), so each profile leads with what reads in the soft background.
Wave 1 (2026-10-01) covers the six most-used UK staging venues: the
terraced or semi-detached kitchen-diner, the living room set up for a
takeaway or watch party, the back garden patio, the gastropub, the
traditional pub, and the chippy. Scotland's deltas (tenement kitchen,
Scottish pub) are in `uk-scotland.md`. National default zone: an English
town or city outside London (see ZONE CHARACTERIZATION). File-wide rules
hold in every profile: nothing legible (chalkboards are the top UK trap,
see VISUAL & PLATING NORMS), no alcohol cues (the beverage-leak note), no
brand marks, never a full flag, no identifiable children, no more than
about 2.5 background faces and none sharp; the brief dictates the SKU.

#### Venue: Terraced or semi-detached kitchen-diner (home, indoor)
- Use for: home indoor; casual lunch (1, 2, 3), dinner at home, Sunday
  roast and Christmas or Easter at home (with the table extended); the
  national default home interior. Terraced houses are the most common
  English dwelling (29%), semi-detached close behind (25%) [HIGH — English
  Housing Survey, see ENVIRONMENT & STAGING SCENES].
- Soft background (the core): behind the table, a run of fitted kitchen
  units reads as a long horizontal band: pale wood-effect, white gloss,
  sage or grey Shaker doors, with a laminate or wood worktop carrying an
  electric kettle, a toaster, a knife block, a fruit bowl and a few jars
  as small rounded shapes [MEDIUM-HIGH — consistent with the kitchen-details
  note in ENVIRONMENT]. Under the counter, the round glass door of a
  front-loading washing machine is the signature British shape. A white
  panel radiator sits under the window. The back window or glazed back door
  (uPVC double glazing in white frames, or bi-fold or French doors in a
  knocked-through or extended terrace) shows a narrow back garden as a
  soft green and grey field: a wooden or panel fence, a shed roof, the
  backs of the neighbouring terrace in red or brown brick
  [MEDIUM — knock-through and rear-extension layouts per Real Homes and
  homeowner forums; Wikipedia, byelaw terraced house]. In a knocked-through
  Victorian terrace, a chimney breast or fireplace alcove can read on one
  wall, sometimes painted a darker accent colour. Walls: off-white,
  magnolia, light grey or a soft heritage colour. Fridge door with magnets
  and a calendar (illegible), a wall clock, a tea towel over the oven door
  handle. Light: grey-white diffuse daylight from the rear window most of
  the year (overcast is the default), a warm ceiling spotlight grid or a
  single pendant over the table in the evening, under-cabinet strip glow.
  Palette: off-white, pale wood, sage or grey, stainless steel, the green
  of the garden. Signature shapes: the kettle silhouette on the worktop,
  the round washing-machine door, the white radiator under the window, the
  rectangular fence-and-shed view through the glass. Density: lived-in and
  slightly cluttered, modest, not a show kitchen [EDITORIAL]. People cues:
  one blurred figure at the counter (making tea, at the hob) at most.
- Shell: two-storey brick house; the kitchen at the back, often in a
  narrow rear projection (the "back addition") or knocked through into the
  dining room; low-to-standard ceilings with spotlights or a single
  pendant; vinyl, laminate or tiled floor [MEDIUM].
- The table as set here: a small rectangular or round wooden or white
  table for four, bare or with placemats (cork or wipe-clean), a
  tablecloth only for Sunday roast and festive meals; salt and pepper,
  a bottle of brown or tomato sauce with the label turned away (see the
  trademark list); everyday white or patterned stoneware plates;
  mismatched or matching wooden or upholstered chairs, chair backs
  cropped at the frame edge [EDITORIAL].
- Subregional variants and the national default: northern towns and
  Welsh valleys: smaller rear kitchen, stone or dark brick outside the
  window, a back yard rather than a lawn. 1930s suburban semi: a separate
  dining room with a bay window, a lawn and patio outside. London flat or
  flatshare: a galley kitchen with a small table or a breakfast bar,
  a balcony or other buildings through the window (see the Gen Z note).
  Scotland: tenement flat, see `uk-scotland.md`. National default: a
  modest kitchen-diner at the back of a brick terrace or semi, overcast
  light, a narrow garden through the window.
- Hallucination traps: a huge American open-plan kitchen with an island
  and double-door fridge; a farmhouse Aga and copper pans in every
  kitchen; chintz and "olde tea shop" twee; Union Jack tea towels and
  mugs; a London skyline or red bus through the window; harsh golden sun
  as the default; a US-style dishwasher-and-garbage-disposal layout with
  no washing machine in the kitchen.
- Never stage: wine bottles or glasses on the worktop or table; legible
  calendar, fridge notes or jar labels; branded appliances or packaging.
- Prompt-ready line: "A modest British terraced-house kitchen-diner: the
  table sharp in front, behind it a soft run of sage fitted units with a
  kettle on the worktop, a round front-loader door under the counter,
  a white radiator below a double-glazed window and a narrow fenced garden
  blurred in grey daylight."
- Confidence and sources: MEDIUM overall; HIGH for the housing mix (EHS);
  MEDIUM for knock-through and rear-extension layouts ([Real Homes —
  terraced house design](https://www.realhomes.com/design/terraced-house-design);
  [Wikipedia — Byelaw terraced house](https://en.wikipedia.org/wiki/Byelaw_terraced_house));
  EDITORIAL for density and staging.

#### Venue: Living room set up for a takeaway or watch party (home, indoor)
- Use for: home indoor; Friday-night takeaway, England tournament night,
  Premier League weekend, Six Nations, Christmas board games (see GAME
  NIGHT); 1, 2 or a small group around a coffee table. The UK's top
  tournament-viewing choice is at home with family [MEDIUM — Samsung UK
  survey, see GAME NIGHT].
- Soft background (the core): the TV on a low media unit or wall bracket
  reads only as a soft rectangle of green or diffuse colour with no detail.
  A two- or three-seat fabric sofa in grey, navy or oatmeal runs out of
  frame with a throw and two or three cushions; blurred backs of heads
  toward the screen within the people limit. Behind or beside: a chimney
  breast with a simple fire surround or an electric fire, a mantelpiece
  with a few soft objects (candles, cards, a clock); a white radiator; a
  bay or double-glazed window with curtains or blinds, dark outside for an
  evening game or grey daylight at a weekend lunchtime; a floor lamp or
  table lamp with a fabric shade as the warm glow. Walls: off-white, grey
  or a single darker feature wall; a framed print or mirror. Palette:
  greys and oatmeal, warm lamp amber against the cool TV glow. Signature
  shapes: the low coffee table with open pizza boxes and foil trays, the
  sofa arm and cushions, the lamp's glowing shade, the TV's soft rectangle,
  the radiator under the window. Density: modest and slightly cluttered
  (remote, phone, a folded blanket) [EDITORIAL; consistent with GAME
  NIGHT].
- Shell: front room of a terrace or semi, often with a bay window; carpet
  or laminate with a rug; standard ceiling with a pendant or ceiling light
  switched off in favour of lamps at night [EDITORIAL].
- The table as set here: a low wooden or white coffee table; takeaway
  boxes and foil trays with lids off, poppadoms, a crisp bowl, side plates
  or dinner plates on laps; kitchen roll instead of napkins; an extra dining
  chair pulled in at the edge for a group [EDITORIAL].
- Subregional variants and the national default: flatshare living room
  (a smaller sofa, a mix of chairs, a laptop mirrored to the TV); Wales in
  the Six Nations (a red-toned throw or plain red bunting at most).
  National default: a terrace front room at night, lamp and TV glow.
- Hallucination traps: a US "man cave" with a sectional sofa, recliners,
  neon and a bar; a giant wall of screens; team flags draped across walls;
  lager cans and multipacks on the coffee table (the strongest prior);
  golden-hour light for a night kick-off.
- Never stage: beer, crests, kits or sponsor marks, a legible screen or
  score bug, betting apps or a sweepstake sheet with names and money, a
  full St George's Cross or Union Jack, identifiable children.
- Prompt-ready line: "A British front room at night: the coffee table
  sharp with open takeaway boxes, behind it a grey fabric sofa running out
  of frame, a warm table-lamp glow, a white radiator under curtained
  windows and the TV only a soft green blur."
- Confidence and sources: MEDIUM for home viewing (GAME NIGHT sources);
  EDITORIAL for the room, consistent with ENVIRONMENT; no new search this
  pass.

#### Venue: Back garden patio (home, outdoor)
- Use for: home outdoor; summer lunch or barbecue, garden birthday party,
  a back-garden projector screening; 1 to small group; seasonal, weather
  contingent. Not universal: 12% of GB households (21% in London) have no
  garden [HIGH — ONS, see ENVIRONMENT].
- Soft background (the core): a narrow, long rectangle bounded by
  close-board or lap-panel wooden fences in orange-brown or painted
  sage, grey or black, with climbing plants or a trellis; a small lawn,
  sometimes patchy; a timber shed at the far end as a soft brown box; a
  rotary washing line folded or a wheelie bin at the edge; the brick backs
  and windows of the neighbouring terrace and the house's own back wall
  with a uPVC door [MEDIUM — EDITORIAL from ENVIRONMENT and the meal-outdoors
  scenario; garden-furniture retail sources]. The barbecue (charcoal kettle
  or gas grill) as a dark rounded shape with a thin plume of smoke. Light:
  overcast white sky as the default, soft shadowless light; a bright
  summer day is real but seasonal; long June evenings give a low warm
  light after 20:00; solar fairy lights or festoon lights along the fence
  for an evening scene. Palette: green lawn and pots, brown fence, grey
  paving, red or yellow brick. Signature shapes: the fence-panel grid, the
  shed roof, the round parasol canopy, a kettle barbecue, the neighbours'
  back windows.
- Shell: grey or buff concrete or sandstone-effect paving slabs, or
  composite or timber decking just outside the back door [MEDIUM].
- The table as set here: a garden table in synthetic rattan (grey or
  brown weave, glass top) or slatted wood, a parasol through the centre,
  matching chairs or a rattan corner sofa; paper plates and napkins for
  a barbecue, everyday plates for a lunch; ketchup and a bowl of salad
  [MEDIUM — synthetic rattan is the common UK patio material because
  natural rattan rots in damp, per retail guides, commercial tier].
- Subregional variants and the national default: suburban semi: a wider
  lawn and borders. Northern terrace: a paved back yard with a high brick
  wall and a gate onto a back alley (ginnel). Flats: a balcony with no
  grill (see the balcony-BBQ note). National default: a narrow fenced
  terrace garden with a small patio under a grey-white sky.
- Hallucination traps: a sprawling US backyard with a pool or a big
  wooden deck and string of Edison bulbs; a manicured stately-home lawn
  or English country garden with roses everywhere; Mediterranean sun and
  terracotta; Union Jack bunting (plain bunting at most).
- Never stage: beer cans or bottles in a cool box or on the table;
  branded barbecue or garden furniture; a full flag; identifiable children
  (a paddling pool or toys far back and out of focus at most).
- Prompt-ready line: "A British back-garden patio under a soft grey sky:
  the rattan-effect table sharp in front, behind it a blurred brown fence
  with climbing plants, a small lawn, a shed roof and the brick backs of
  neighbouring houses."
- Confidence and sources: MEDIUM-LOW for specific furniture and fence
  materials (retail sources, commercial tier: [Furniture in Fashion —
  rattan for UK patios](https://www.furnitureinfashion.net/blog/best-rattan-garden-furniture-uk-patios/));
  HIGH for garden access (ONS); EDITORIAL for staging.

#### Venue: Gastropub
- Use for: restaurant, indoor; weekend lunch, Sunday roast out, dinner,
  birthday meal; 1, 2 or a small group. A real, more recent register (from
  the 1990s), not the default; the traditional pub stays the default group
  venue [HIGH, register above].
- Soft background (the core): plaster walls in muted heritage colours
  (sage, slate blue, deep green, off-white), often with a stretch of
  exposed brick or stone; a large chalk blackboard on the wall or an easel,
  always out of focus (a dark rectangle with pale illegible marks); the
  bar counter as a warm horizontal band of dark or waxed wood, its back
  shelves blurred into dark shapes with no bottles in focus; a fireplace
  or wood-burning stove as a small orange glow with a basket of logs
  beside it; framed prints or old maps, a shelf of old books or jars;
  other scrubbed tables with mismatched chairs receding; a dog bed or water
  bowl near the bar is a real, warm detail [MEDIUM — scrubbed tables,
  blackboards, dark green walls, beams, flagstones and wood-burners per
  Test. Taste. Repeat., Yahoo/Independent roast guide and Wikipedia
  (gastropub); LOW for the dog bowl]. Light: by day, cool soft light from
  small-paned sash or casement windows; by evening, warm low light from
  wall sconces, simple pendant shades (enamel, glass or Edison-style
  bulbs) and tea-light candles on the tables. Palette: muted green or blue,
  dark waxed wood, warm amber. Signature shapes: the blackboard rectangle,
  the long wooden bar band, the stove or hearth glow, small-paned window
  grids, a mismatched chair back. Density: relaxed, half-full, well-worn
  but cared for. People cues: staff in plain shirts and long dark aprons,
  blurred; diners in casual weekend clothes, within the limit.
- Shell: an 18th- or 19th-century pub, coaching inn or former farmhouse
  refitted; flagstone or worn wide-board floors; exposed beams only in
  genuinely old rural buildings; small-paned windows [MEDIUM].
- The table as set here: bare scrubbed or oiled solid wood, no cloth;
  cutlery laid directly or brought in a small tin or jar; paper or linen
  napkin; salt and pepper mills; a small candle or a jar of flowers; food
  on heavy plain plates, boards or slates, chips in a mini wire fry-basket
  or enamel cup [HIGH for boards, slates and baskets, register above];
  mismatched wooden chairs and an upholstered wall bench at the frame
  edge.
- Subregional variants and the national default: London: a Victorian
  corner building, larger windows, a tiled or wooden bar front, more
  painted panelling. Countryside (Cotswolds, Yorkshire, Devon): stone
  walls, flagstones, beams, an inglenook fire. Scotland: see
  `uk-scotland.md`. National default when none is named: a village or
  market-town pub with muted plaster walls, scrubbed tables, a blackboard
  and a fireplace.
- Hallucination traps: Tudor black-and-white beams in every room; a Union
  Jack; a red phone box or double-decker bus through the window; Irish-pub
  clutter (enamel ads, Celtic signs); dark, gloomy "ye olde" lighting;
  white tablecloths (that is a restaurant); fine-dining towers and foams.
- Never stage: beer pumps, pump clips, pint or wine glasses, beer mats,
  bottles behind the bar in focus, legible blackboard text, pub signs with
  names. The bar is a soft band of wood only.
- Prompt-ready line: "A relaxed British gastropub: a scrubbed oak table
  with no cloth in sharp focus, behind it muted sage-green plaster walls,
  a softly blurred chalk blackboard, the long dark band of a wooden bar
  and the warm glow of a log burner."
- Confidence and sources: MEDIUM overall; rewritten from the 2026-10-01
  pilot plus one new search ([Test. Taste. Repeat. — the new wave of
  gastropubs](https://goodfoodeveryday.substack.com/p/the-new-wave-of-gastropubs);
  [Yahoo/Independent — best places for a roast](https://www.yahoo.com/news/15-best-places-roast-dinner-100000888.html);
  [Wikipedia — Gastropub](https://en.wikipedia.org/wiki/Gastropub)).

#### Venue: Traditional pub (the default group venue)
- Use for: restaurant, indoor; weekday lunch, solo pub lunch, dinner,
  Sunday roast out, food-led pub screening (see GAME NIGHT); all party
  sizes. The national default for eating out in a group [HIGH].
- Soft background (the core): dark-stained wood panelling to dado height
  or full height, with plaster or patterned wallpaper above in deep red,
  green or nicotine cream; partitions of panelling topped with etched or
  frosted glass dividing snugs; brass wall lamps with small fabric or
  frosted-glass shades as round warm glows; the long dark bar with a
  brass foot rail as a heavy horizontal band, the bar back a dark blur
  with no bottles, pumps or optics in focus; horse brasses, framed local
  photographs, a mirror with gilt lettering made illegible; a dartboard
  as a soft disc in some rooms; the patterned carpet (deep red, green or
  blue, busy floral or geometric) where the frame dips low; in winter, an
  open fire in a cast-iron grate [MEDIUM — panelling, etched glass,
  patterned carpet, red velvet or leather banquettes, brass wall lights and
  snugs per Fat Badgers pub-interior guide, The Victorian Emporium and
  pub-culture sources]. Light: dim and warm; daylight only as a pale glow
  through etched or frosted bay windows; amber lamp glows by evening. At
  most one wall-mounted screen, high and soft, for a screening scene.
  Palette: oxblood, bottle green, dark brown wood, brass gold. Signature
  shapes: the etched-glass window with its pale glow, the brass lamp
  glows along the panelling, the bar's horizontal band and foot rail, the
  curve of a tufted banquette back, a small round table on a cast-iron
  base. Density: well-worn, ring-marked, comfortable. People cues: a few
  blurred regulars on stools at the bar (no glasses visible) or at a
  far table, within the limit.
- Shell: a Victorian or older building; low ceilings and beams in older
  rural pubs, high ornate ceilings in city Victorian pubs; bay windows
  with etched glass; carpet or worn floorboards [MEDIUM].
- The table as set here: a small round or square dark-wood table, often
  on a cast-iron base, bare with a few ring marks; cutlery rolled in a
  paper napkin; sachets or a small caddy with ketchup, mustard, vinegar;
  plain white oval or round plates; an upholstered banquette (red velvet,
  green or oxblood leather) or a wooden stool at the edge.
- Subregional variants and the national default: city Victorian "gin
  palace" (ornate mirrors, carved wood, tiled lobby) in London, Liverpool,
  Birmingham; rural inn (beams, stone fireplace, settles); northern
  estate or town local (plainer, brighter, a pool table area kept out of
  frame). Scotland: see `uk-scotland.md`. National default: a town pub
  with dark panelling, patterned carpet, a banquette and brass lamps.
- Hallucination traps: everything in the gastropub list; a sports-bar wall
  of TVs; American booths with neon; Irish-pub memorabilia clutter;
  Tudor beams in a city Victorian pub; a pub so dark the food cannot be
  read.
- Never stage: pumps, pump clips, pint glasses, optics, bottles behind the
  bar, beer towels and mats, legible signs or mirror lettering. When the
  brief allows a glass, the Coca-Cola pub serve is ice and a slice of lemon
  (VISUAL & PLATING NORMS).
- Prompt-ready line: "A traditional British pub corner: a small dark-wood
  table in sharp focus, behind it an oxblood leather banquette against
  dark wood panelling, round brass wall lamps glowing softly, etched-glass
  windows as pale blurs and the long wooden bar a dark band in the
  distance."
- Confidence and sources: MEDIUM; rewritten from the 2026-10-01 pilot plus
  one new search ([Fat Badgers — Pub interiors](https://www.fatbadgers.co.uk/britain/interior.htm);
  [The Victorian Emporium — Victorian pub renovation](https://www.thevictorianemporium.com/publications/advice/article/10_essential_elements_of_victorian_pub_renovation);
  [The Spaces — pub design](https://thespaces.com/pub-design-is-going-back-to-basics/)).

#### Venue: Chippy (fish-and-chip shop, takeaway counter or small sit-in)
- Use for: meal on the go (chips eaten from the paper outdoors) and
  restaurant indoor (a small sit-in area); Friday-night takeaway pickup;
  1 or 2. The UK's signature everyday hot takeaway (see catalog: Fish and
  chips; Quick-Reference: Chippy).
- Soft background (the core): the stainless-steel frying range along the
  back or side as the dominant shape, a long gleaming block with lidded
  fryer wells, a heated glass display cabinet holding battered fish and
  sausages under warm lamp light, and a chip "scuttle" or chute; older
  ranges have a coloured glass (vitrolite) or enamel front panel in green,
  cream or blue [MEDIUM — frying-range manufacturers Mallinsons and Trevor
  Howsam]. Walls: white or pale tiles, or a coloured tile band; a long
  illuminated menu board high above the range (a bright pale rectangle,
  always illegible). On the counter: the till, a stack of white paper and
  cardboard boxes, a tall vinegar bottle and salt shaker as small upright
  shapes, a pickled-egg or pickled-onion jar. Middle distance: a small
  queue as blurred coats, the plate-glass shopfront with the street at
  night (wet pavement reflections, streetlights as orange or white bokeh)
  [MEDIUM — Wikipedia, fish-and-chip shop; Infatuation London guide for
  sit-in Formica tables]. Light: bright, even, cool-white overhead
  fluorescent or LED; the warm glow of the heated cabinet; night outside
  the glass. Palette: stainless steel, white tile, golden batter, a strong
  accent colour (blue, green or red). Signature shapes: the long steel
  range with its lids, the lit warming cabinet, the high menu board, the
  vinegar bottle, the paper-wrapped bundle. Density: functional, busy at
  peak, a little worn. People cues: a fryer in a white jacket and cap or
  a dark polo with an apron, blurred, plus one or two customers.
- Shell: a high-street or parade shop unit with a large glass front; tiled
  or vinyl floor; low suspended ceiling with panel lights [MEDIUM].
- The table as set here: on the go, the paper-wrapped or boxed portion
  resting on a wall or bench (per §7.5), a small wooden chip fork; sit-in,
  a red, white or blue Formica-topped table with fixed chairs or a booth,
  a vinegar bottle, salt shaker and ketchup in a squeeze bottle with no
  label, plain white plates [MEDIUM].
- Subregional variants and the national default: seaside chippy (blue
  and white decor, a view of the promenade, gulls and railings through
  the window); northern chippy (beef dripping, a sit-in café room, mushy
  peas in polystyrene-free tubs); urban late-night chippy combined with
  kebab and pizza. Northern Ireland and Scotland: chippy menus differ (see
  `uk-scotland.md`, the NI callout). National default: a town high-street
  chippy at early evening, bright tiles and a steel range.
- Hallucination traps: an American diner with chrome stools and neon;
  newspaper wrapping (banned for food contact; plain white paper only);
  polystyrene trays (see the ban dates in the Quick-Reference); a pub or
  restaurant with tablecloths; a "seaside" palette applied to every
  inland shop; a branded fridge of soft drinks dominating the frame.
- Never stage: a legible menu board, shop name or price list; branded
  drinks fridges or cans other than the brief's SKU; beer.
- Prompt-ready line: "A British chippy at dusk: a paper-wrapped portion of
  fish and chips sharp on the counter, behind it a long gleaming stainless
  frying range with lidded wells, a warm-lit glass cabinet of battered
  fish, white tiles and a bright illegible menu board softly blurred."
- Confidence and sources: MEDIUM overall; two searches ([Mallinsons —
  frying ranges](https://mallinsonsofoldham.com/frying-ranges/);
  [Trevor Howsam — vitrolite range](https://trevorhowsam.com/thb2040-acme-frying-range-stainless-steel-yellow-and-green-vitrilite/);
  [Wikipedia — Fish-and-chip shop](https://en.wikipedia.org/wiki/Fish-and-chip_shop);
  [The Infatuation — London fish and chips](https://www.theinfatuation.com/london/guides/best-fish-and-chips-london));
  LOW for the pickled-egg jar and the regional variants (model knowledge,
  not verified this pass).
---

## ZONE CHARACTERIZATION

The United Kingdom, taken as England + Wales + Northern Ireland (Scotland
handled separately in `uk-scotland.md`), clears the "genuinely shared
repertoire" side of the §1.1 test for its everyday lunch/dinner/snack
scope: the chippy, the Sunday roast, the pub, the curry house, the
supermarket meal deal, and the high-street bakery are not visibly wrong to
depict anywhere in England, Wales, or Northern Ireland. What varies is
**dish-level and vocabulary-level**, not the underlying dish set —
condiments and frying fat (North/South England), the PGI-protected Cornish
pasty, London-coded pie and mash, and the nation-specific callout dishes
below.

**A genuine, causal explanation for this uniformity, not just an
observation of it**: much of the everyday repertoire — the chippy, the
supermarket meal deal, chain pub dining — is chain- and supermarket-driven
at a national scale, which plausibly explains why swapping it between
English regions and Wales/NI mostly does not look wrong the way swapping
a Scottish dish set into England would. [CONFIDENCE: MEDIUM — this is this
file's own synthesis of the pattern, not a single dedicated source stating
the causal claim directly]

**What this zone characterization is not claiming.** England is not
internally uniform — see the North/South emphasis notes throughout this
file — and Wales and Northern Ireland are not culturally interchangeable
with England just because their everyday lunch/dinner scene overlaps with
it; their own signature dishes (below) are real, sourced, and should be
used when a brief names Wales or Northern Ireland specifically.
**Caricature-avoidance note (editorial judgment, not a sourced claim):** do
not default every Wales-set scene to daffodils/leeks/dragons/sheep, and do
not default every NI-set scene to a purely sectarian or "Troubles-era"
visual frame — both would be exactly the kind of caricature this project
has flagged for every country file so far.

---

## TRUSTED CONTENT

### GENERAL NORMS

- **Meal naming is a real, measured class-and-geography marker, not folk
  belief.** A 2018 YouGov poll of over 42,000 English adults found that,
  across England as a whole, 57% call the evening meal "dinner" and 36%
  say "tea" (the remainder including "supper" or other terms); "tea" is
  most entrenched in Greater Manchester, Merseyside, and Tyne and Wear,
  "dinner" in the Home Counties, and the contest is closest in the
  Midlands. There is also a real class split specifically in the North:
  middle-class Northerners are nine points more likely than working-class
  Northerners to say "dinner" (37% vs. 28%), while Southerners show almost
  no class difference (70–74% "dinner" either way). "Supper" is also used,
  in Scotland and Northern Ireland specifically, for a chip-shop meal
  ("fish supper" — see `uk-scotland.md`). [CONFIDENCE: HIGH] [SOURCE:
  [YouGov — Dinner time or tea time? It depends on where you live](https://yougov.com/en-gb/articles/20826-dinner-time-or-tea-time-it-depends-where-you-live)]
  This doesn't change how a scene should look, but it does change how it
  should be captioned/briefed for a given setting.
- **Evening meal timing is early — corrected from the scaffold's own
  hedge, and now directly measured, not estimated.** A 2020 YouGov survey
  of GB adults found 6–6:59pm the single most popular window for the
  evening meal (34% of respondents), with 7–7:59pm second (23%); more
  recent industry data (2025–26) puts the national average even earlier,
  around 6:12pm, with a documented trend toward earlier dining especially
  among 18–34-year-olds. [CONFIDENCE: MEDIUM-HIGH — YouGov's own polling is
  HIGH; the more recent "6:12pm average" figure comes from hospitality-
  industry survey data (Zonal), a lower source tier, and is treated as
  corroborating the direction, not the exact minute] [SOURCE: [YouGov Daily
  Question — evening meal time](https://yougov.co.uk/topics/consumer/survey-results/daily/2020/09/03/c114d/3)]
  This is far earlier than Uruguay's 9:30pm+ and close to (slightly earlier
  than) the US's own ~6:19pm peak — worth stating directly per
  `country-file-schema.md` §5.2's cross-country-contrast guidance. Daylight
  varies strongly by season (see climate note below): the same 18:30
  dinner is daylit in June and fully artificial-lit by December.
- **UK "chips" are thick-cut, soft-centred, pale-to-mid-gold, and often
  slightly limp from vinegar — not "fries."** "Fries" (thin, crisp,
  uniform) is fast-food-chain vocabulary, not chip-shop or home cooking.
  Rendering chip-shop chips as thin, crisp fries is the single most likely
  and most checkable model error for this whole cuisine. [CONFIDENCE: HIGH]
- **Sunday lunch (the roast) is a lunch-occasion meal**, typically eaten
  early-to-mid afternoon (roughly 1–3pm), at home or as a pub's
  Sunday-only menu. It falls inside this file's lunch scope, not dinner.
  [CONFIDENCE: HIGH]
- **Condiments are paired with specific dishes, not used generically —
  each pairing is a checkable authenticity marker**: horseradish sauce or
  English mustard with roast beef; mint sauce with lamb; apple sauce with
  pork; malt vinegar and salt on chips; brown sauce or ketchup with
  sausages and chips; English mustard with ham, sausages, and pies.
  [CONFIDENCE: HIGH]
- **Condiment service format**: at home, from the bottle/jar on the table,
  with gravy from a gravy boat or jug; in pubs, in sachets or small
  ramekins brought to the table; at a chip shop, shaker salt and a vinegar
  bottle on the counter, with the server applying condiments to a
  takeaway order if asked. [CONFIDENCE: MEDIUM-HIGH]
- **UK cutlery style is Continental, not American "cut-and-switch" —
  confirmed, not just plausible.** The fork stays in the left hand
  (tines generally down) and the knife in the right hand throughout the
  meal; unlike the US style, the fork is never switched to the right hand
  after cutting. Fork sits left of the plate, knife right — this is a real
  conflict with `tableware-composition-reference.md` §2's stated
  Western-default "fork/knife always right side" placement rule, and for a
  UK place setting the authentic layout (fork left, knife right) should
  override that generic default. [CONFIDENCE: HIGH] [SOURCE: [The Takeout
  — Why Do Americans Switch Hands When Eating With A Fork And Knife?](https://www.thetakeout.com/1757983/british-american-fork-knife-etiquette/)]
- **Bread**: a sliced white or brown tin loaf is the everyday default. Soft
  bread-roll naming is regionally varied (bap, barm, cob, batch,
  "bread cake" — a naming table like the US hoagie/sub/hero split) without
  the roll's actual form changing — a prevalence-only variation per
  `country-file-schema.md` §4.2, not something that needs a style-map
  entry. [CONFIDENCE: MEDIUM-HIGH]
- **Trademark-genericization list for this file (§7.5).** Real brands
  often cited as evidence for a claim in this file — name them in
  citations only, never in a prompt.

  | Brand | Prompt language |
  |---|---|
  | Greggs | "a high-street bakery chain" |
  | Boots / Tesco meal deal | "a supermarket/pharmacy meal deal" |
  | Wetherspoons | "a large chain pub" |
  | Nando's | "a peri-peri chicken restaurant" |
  | Walkers | "a packet of crisps, blank or blurred packaging" |
  | HP | "brown sauce" |
  | Bisto | "gravy" |
  | Branston | "brown pickle/chutney" |
  | Heinz | "baked beans" |
  | Colman's | "English mustard" |

  The same applies to named chip shops, pie-and-mash shops, and football
  grounds.

### VISUAL & PLATING NORMS

- **Palette.** The comfort-food core is golden-brown and beige: battered
  fish, chips, pastry, roast potatoes, gravy. The main color relief is
  bright/olive green (garden peas, mushy peas) and roasted orange
  (carrots). An all-beige plate is authentic, not a styling failure — a
  gastropub-modern plate with microgreens and colorful sauce swooshes is a
  real, more recent register, not the default. [EDITORIAL, grounded in the
  dish entries below]
- **Texture is the single most checkable authenticity detail across this
  cuisine (§4.5's texture rule)**: chip-shop batter should be crisp,
  blistered, and irregular, not smooth or breadcrumbed; roast potatoes
  should be craggy and crisp outside, fluffy inside; chip-shop chips
  should be soft, pale-golden, and slightly limp — not crisp shoestring
  fries; pie pastry should be flaky or glossy egg-washed, not matte.
  [CONFIDENCE: HIGH for each, see individual dish entries]
- **Gravy is thick, glossy, and brown**, poured over or pooled — not a thin
  jus drizzle, except in gastropub-modern plating. [CONFIDENCE: HIGH]
- **Portions are generous and plates are full**, especially for Sunday
  roasts and pub mains, where food often reaches the rim. Negative space
  and fine-dining-style composition reads as restaurant-modern, not the
  everyday default. [CONFIDENCE: MEDIUM]
- **Beverage-leak risk is specific and strong for this market.** Pub,
  beer-garden, and curry-house scenes carry a strong training prior toward
  pint glasses, ale pumps, and lager bottles. Scope is Coca-Cola only —
  prompts for these registers should explicitly state no beer, pint
  glasses, or other drinks on the table, and keep bar-top pump clips
  blurred/unbranded. **When Coca-Cola itself is ordered in a pub, the
  genuine UK service convention is a glass with ice and a slice of
  lemon** — a legitimate in-scope serve for that specific venue register,
  not a beverage-leak violation. [CONFIDENCE: MEDIUM-HIGH for the
  ice-and-a-slice pub serve — this is Coca-Cola's own stated GB foodservice
  "perfect serve" guidance, a primary/brand-side source, though not
  independently corroborated by a second source] [SOURCE: [Coke Pub & Bar
  — Perfect Serve](http://www.cokepubandbar.co.uk/perfect-serve.html)]
- **Chalkboards are everywhere in UK pubs and cafés** (specials boards,
  menus). Per the no-legible-text rule, they must be blank, turned away,
  or out of focus — a high-frequency trap for this market specifically.
  [EDITORIAL]

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **Climate and light: temperate maritime — frequently overcast, soft,
  diffuse, low-contrast light, with frequent rain.** Harsh, saturated,
  high-sun light reads wrong for most of the year; a bright summer garden
  scene is authentic but seasonal, not the default. Daylight varies
  strongly with season and latitude: long summer evenings (sunset well
  after 21:00 in June, later still in Scotland) and short winter days
  (dark by mid-to-late afternoon in December). [CONFIDENCE: HIGH — general,
  well-documented UK climate fact]
- **Housing stock — England, per the 2023-24 English Housing Survey, not
  the scaffold's unverified ranking.** Terraced houses are the single most
  common dwelling type (29% of all English dwellings), with semi-detached
  close behind (25%); detached houses are 25% specifically within the
  owner-occupied sector (a much smaller share of the private-rented and
  social-rented stock — 5% and 1% respectively), and bungalows make up a
  further 8%. Flats (converted houses, purpose-built blocks, new-build
  developments) fill out the rest. [CONFIDENCE: HIGH — a named, current
  government survey] [SOURCE: [GOV.UK — English Housing Survey Headline
  Report 2023-24](https://assets.publishing.service.gov.uk/media/6746f3242cdbaeed4c527f5f/Annex_A_-_2023-24_EHS_Headline_Report_on_household_demographics_and_resilience.pdf)]
  Victorian/Edwardian brick terraces are dense in cities and northern
  towns specifically; 1930s semi-detached houses (bay windows, sometimes
  pebbledash render) are a major suburban category; stone-built terraces
  appear in the Pennines, Cotswolds, and Welsh valleys (see Wales
  callout). Scotland's sandstone tenements are documented separately in
  `uk-scotland.md`, since they are architecturally unlike anything on this
  list.
- **Distinctly British kitchen details a model is unlikely to add
  unprompted** — cheap, strong authenticity signals, pick one or two per
  scene rather than all of them (§7.5): a front-loading washing machine
  plumbed in under the kitchen counter; an electric kettle on the
  worktop; switched three-pin wall sockets; a radiator under the window;
  uPVC double-glazed or sash windows; a small, often narrow back garden
  visible through the window. [CONFIDENCE: MEDIUM-HIGH — these are
  well-known, widely-corroborated everyday UK domestic conventions rather
  than each individually footnoted]
- **Access to a private garden is not universal — verified, not assumed.**
  ONS analysis found roughly 1 in 8 households (12%) in Great Britain has
  no access to a private or shared garden, rising to more than 1 in 5
  (21%) in London specifically — the highest of any GB region/nation.
  Access also varies sharply by ethnicity (Black people in England are
  nearly four times as likely as White people to lack any private/shared
  outdoor space: 37% vs. 10%) and by occupation (people in semi-skilled/
  unskilled manual work are almost three times as likely to lack a garden
  as those in managerial/professional occupations: 20% vs. 7%).
  [CONFIDENCE: HIGH — a dedicated ONS analysis] [SOURCE: [ONS — One in
  eight British households has no garden](https://www.ons.gov.uk/economy/environmentalaccounts/articles/oneineightbritishhouseholdshasnogarden/2020-05-14)]
- **Gen Z/young-adult lens (§5.3) — measured, not estimated.** ONS found
  that in 2023, a third (33%, 2.2 million) of young men aged 20–34 living
  in households were living in their parental home, versus under a
  quarter (22%, 1.4 million) of young women in the same age band; the age
  at which under half of young people still live at home is 25 for men
  and 22 for women. Private renting in shared houses/flats (HMOs) is the
  other major young-adult tenure. Either is at least as plausible as an
  owner-occupied kitchen for a young cast. [CONFIDENCE: HIGH] [SOURCE: [ONS
  — Families and households in the UK](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/families/bulletins/familiesandhouseholds/2023/pdf)]
- **Balcony grilling in flats is genuinely restricted, not just
  plausible-sounding** — corrected from the scaffold's own explicitly
  flagged LOW-confidence guess. UK fire-safety guidance and most lease/
  tenancy agreements actively discourage or prohibit barbecues on
  balconies (a documented, rising cause of balcony fires, which spread
  faster than an equivalent indoor fire), and post-Grenfell fire-safety
  scrutiny of balconies specifically has intensified since 2017.
  [CONFIDENCE: MEDIUM-HIGH — corroborated across housing-association and
  fire-safety-advisory sources, though not a single blanket national law]
  [SOURCE: [Southern Housing — Ignite fun not fire: never barbecue on a
  balcony](https://www.southernhousing.org.uk/latest-news/2024/ignite-fun-not-fire-this-weekend-never-barbecue-on-a-balcony); [House of Commons Library — Fire safety rules for blocks of flats
  since the Grenfell Tower fire](https://commonslibrary.parliament.uk/fire-safety-rules-for-blocks-of-flats-since-the-grenfell-tower-fire-england/)] A balcony meal with no grill is the
  safer, more representative default for a flat-dwelling scene.
- **Caricature-avoidance guidance (editorial judgment, not a sourced
  claim).** Avoid "tourist Britain" in both directions: Union Jack
  bunting, red phone boxes, black cabs, Big Ben/Tower Bridge skylines,
  bowler hats, and twee "olde tea shop" chintz on one side; rain-lashed
  council-estate grey misery as the default for every non-affluent scene
  on the other. Ordinary British homes are modest, a bit cluttered, and
  comfortable. Do not anchor every scene to London by default — most of
  the market lives elsewhere, and a northern-town terrace is as
  representative a UK setting as a London flat.

#### Scenario: Casual lunch at home, indoors — 1 person

Three co-equal, plausible settings, not one default: a kitchen-diner table
in a terraced or semi-detached house; a flatshare kitchen (see the Gen Z
note above); or a small one-bed flat's sofa/coffee table. Likely dishes:
a sandwich, a jacket potato, beans on toast (a lunch-register dish here,
not a breakfast one), soup and bread, or leftovers — everyday and
low-effort. [EDITORIAL for the setting synthesis; dish list MEDIUM]

#### Scenario: Casual lunch at home, indoors — 2 people

A small kitchen-diner table, two individually-plated settings, everyday
crockery. Co-equal registers: a couple; a parent and child; two flatmates
sharing a kitchen table.

#### Scenario: Casual lunch at home, indoors — 3 people

Same register, scaled up. A Sunday roast is the strongest culturally-
anchored multi-person home lunch (see dish entry): food served from
shared dishes in the middle of the table (roasting tin/platter, veg
dishes, gravy boat), with everyone still on an individual plate.
[CONFIDENCE: HIGH] Equally plausible: three flatmates sharing a weekend
takeaway spread. [EDITORIAL]

#### Scenario: Dinner at home, indoors

Early-evening timing (see the norms above — most commonly 6–7pm).
**The Friday-night takeaway is a documented national ritual, not just a
plausible guess**: fish and chips, curry, or Chinese, eaten from
containers or tipped onto plates, on a sofa/coffee table in front of the
TV or at the kitchen table — as authentic a register as a set table.
[CONFIDENCE: MEDIUM-HIGH] Everyday home dinners: bangers and mash,
shepherd's/cottage pie, spaghetti bolognese (a thoroughly naturalized
British staple), a curry, or a stir-fry.

#### Scenario: Meal outdoors at home

A small rear garden with patio/decking, a garden table (often
rattan-effect or wooden) with a parasol. The summer barbecue is a real
but weather-contingent, seasonal ritual: charcoal kettle and gas grills
are both common, with sausages, burgers, chicken, and halloumi as the
default food, and disposable foil-tray barbecues common in parks. An
overcast "we're doing it anyway" sky is, if anything, more representative
than blazing sun. [CONFIDENCE: MEDIUM] For flats: a balcony meal with no
grill is the safer, better-evidenced default — see the balcony-BBQ note
above.

#### Scenario: Meal on the go — 1 person

**The supermarket/high-street meal deal is the defining UK on-the-go
lunch** — a genuine, sharp contrast with both Uruguay ("grab-and-go
barely exists") and the US's car-centric drive-thru culture: this is a
pedestrian/transit culture. A triangle-pack sandwich, a packet of crisps,
and a drink — a single-serve can or small bottle is an unusually natural
product fit here (the brief names the exact SKU) — eaten on a park bench, a low wall, at a desk, or on a train
seat. [CONFIDENCE: HIGH] A bakery-chain sausage roll or pasty in a paper
bag is a close second. Chips from the chippy, eaten outdoors from the
paper (classically on a seafront wall or bench, resting on the wall/paper
rather than in-hand per §7.5) round out the register. Late-night kebab-
and-chicken-shop food is real and Gen Z-relevant but is a late-night, not
daytime, register.

#### Scenario: Away from home — 1 person at a restaurant/café

A solo pub lunch at a small table or the bar is common and unremarkable
(watch the beverage-leak note). A café/sandwich-shop lunch — an
independent café (Formica or wooden tables) or a genericized high-street
coffee chain — is the other default. The traditional "greasy spoon" caff
is real but breakfast-leaning; use it for a lunch scene only with lunch
dishes (a jacket potato or chips with a main), consistent with this
file's scope.

#### Scenario: Away from home — 2–3 people at a restaurant/café

**The pub is the default UK group-meal venue** [CONFIDENCE: HIGH], offered
as two coexisting registers per §4.6: the traditional pub (dark wood,
patterned carpet, upholstered banquettes, brass fittings, a fireplace,
low beamed ceilings in older buildings) and the gastropub (muted heritage
paint colors, scrubbed wooden tables, mismatched chairs, food on boards
and slates). The curry house is a strong second (see Quick-Reference
table). Chain casual dining and peri-peri chicken restaurants are the
Gen Z/young-group default alongside pubs (genericize names).

---

## CELEBRATIONS & LARGE GATHERINGS

Placement note: the UK file has no festivals register yet, so this section
sits directly after ENVIRONMENT & STAGING SCENES, per schema §5.7. It
doubles as the calendar index until a register is written (see GAP LOG).
The party-size rule from §5.7 applies throughout: the place settings in
frame are the operator's party; the gathering is implied.
Scotland's deltas (Burns Night, Hogmanay and New Year's Day, the wedding
ceilidh) are in `uk-scotland.md`.

### How large gatherings work here

- **Who gathers.** The core UK celebration unit is the extended family at
  home: parents, adult children and their partners, grandparents, and
  sometimes in-laws, typically around 6 to 12 people. One retailer-cited
  survey puts the average Christmas table at about eight, rising to about
  11 in Northern Ireland. [LOW — figure seen only in search-result
  summaries of a commercial survey, original not identified this pass]
  Weddings are the large outlier: Hitched's survey data, as reported by
  wedding-industry sites, puts the average at roughly 80 day guests and
  100 to 110 evening guests, with micro-weddings under 30 guests now a
  real share. [MEDIUM — Hitched survey figures via secondary wedding-
  industry sources, not read at source]
- **Where (intake venues).** *Home indoor* is the default for Christmas,
  Easter and the Sunday roast: a kitchen-diner or dining-room table,
  often extended with a folding table or a desk chair pulled in.
  *Restaurant* covers the pub Sunday roast and pub/restaurant birthday
  meals. *Other* covers weddings (a hired venue, hotel function room,
  barn or marquee) and Bonfire Night (a back garden or a community
  display field). *Home outdoor* is a summer birthday or garden party.
  [EDITORIAL, consistent with the scenario blocks above]
- **Table form and serving style.** At home the table is one rectangular
  table, everyone seated, served **family-style**: the host carves the
  joint at the table or in the kitchen, and vegetable dishes, roast
  potatoes and a gravy jug are passed around, with everyone on an
  individual plate (see catalog: Sunday roast). Weddings use **round
  tables of 8 to 10** with a plated, sequential "wedding breakfast"
  (starter, main, dessert) served by caterers; a buffet is the evening
  register. Children's birthdays and garden parties are buffet-style
  on a single table. [MEDIUM for wedding service format, Hitched-derived
  sources; EDITORIAL for the rest]
- **Plate and cutlery norms that differ from everyday.** Christmas and
  Easter bring out the "best" crockery, a tablecloth, and paper crackers
  at each setting at Christmas. Cutlery stays Continental (fork left,
  knife right, per GENERAL NORMS). Birthday and garden buffets switch to
  paper plates and napkins. [EDITORIAL]
- **Snapshot-staging default for this market.** The three most authentic
  UK cues for an implied crowd are: (1) the table running out of frame
  with more serving dishes (roasting tin, two or three vegetable dishes,
  gravy jug) than the visible diners need; (2) an extra mismatched chair
  or a second, lower table pushed against the end; (3) occasion-specific
  table clutter at the frame edge (pulled crackers and paper hats,
  a birthday card row on a shelf, wedding table-number stand blurred).
  Overcast window light or warm artificial light, never harsh sun, per
  ENVIRONMENT. [EDITORIAL]

#### Celebration: Sunday roast as the family gathering (Sunday lunch)
- Type: community or family gathering (weekly; larger when relatives
  visit).
- When: Sunday, roughly 1 to 3pm; intake time midday. Larger family
  roasts cluster around visits, birthdays and Mothering Sunday.
  [HIGH for timing, see GENERAL NORMS]
- Gathering: the household, often extended to grandparents or adult
  children visiting, typically 4 to 8; home indoor (dining table or
  kitchen-diner) or restaurant (a pub's Sunday menu, pre-plated, a long
  table pushed together). [EDITORIAL]
- The spread: see catalog: Sunday roast for the plate. Shared dishes on
  a home table: the joint on a carving board or in its roasting tin,
  one dish of roast potatoes, two or three vegetable dishes (carrots,
  greens or broccoli, peas), a cauliflower cheese dish, a gravy jug and
  the jarred condiment for the meat (horseradish, mint sauce, apple
  sauce, English mustard). A real table carries about 5 to 7 shared
  vessels. [HIGH for components, catalog entry; EDITORIAL for count]
- Snapshot staging: **1 setting**: one full plate at the near end of the
  table, the carving board with the cut joint and a gravy jug just behind
  it, a vegetable dish cropped at the frame edge, and an empty-but-used
  setting's chair back at the side. **2 settings**: two identical full
  plates side by side or facing, the roasting tin and potato dish between
  them, a second vegetable dish and the gravy jug, table continuing out
  of frame. **Small group (3 to 4)**: plates around one end, all shared
  vessels clustered in the middle, the far end of the table soft and out
  of frame. Cues: more vegetable dishes than the visible diners need;
  a child's chair or booster seat soft at the edge; window light from a
  grey Sunday. [EDITORIAL]
- Decor and cues: tablecloth or placemats, the everyday "good" plates,
  a jar of mint sauce or horseradish with its lid off. Avoid: candelabra
  and stately-home dining rooms; a herb-sprig garnish.
- Never stage: wine or beer at the table (a strong prior here; prompt
  "no wine glasses, no beer"); legible jar labels (genericize per
  the trademark list).
- Confidence and sources: HIGH for the meal itself (catalog entry and
  GENERAL NORMS sources); EDITORIAL for headcount and staging.

#### Celebration: Christmas dinner (Christmas Day, 25 December)
- Type: calendar holiday.
- When: Christmas Day, served early to mid-afternoon (commonly cited as
  1 to 4pm); intake time midday, or golden-hour for a late-afternoon
  dinner (winter light fades by about 4pm). [MEDIUM — timing range from
  general sources; no YouGov figure found this pass]
- Gathering: the extended family at one home, roughly 6 to 12 people
  (see the ~8 average above, LOW); home indoor. [LOW for the figure]
- The spread: a roast dinner built around **roast turkey** (on 57% of
  British Christmas plates in YouGov's Big Survey on Christmas), with
  **pigs in blankets** (small sausages wrapped in streaky bacon; on about
  two-thirds of plates, and favourites in YouGov polling), roast
  potatoes, Brussels sprouts, carrots and parsnips, stuffing, cranberry
  sauce, bread sauce, and gravy. Christmas pudding (dark, domed, with a
  sprig of holly) follows. [HIGH — YouGov Big Survey on Christmas and
  YouGov best-Christmas-food polling] No turkey or pigs-in-blankets
  catalog entry exists: **roast turkey** reads as a whole bird, deep
  golden-brown glossy skin, on a large oval platter about 40 to 45cm
  long, roughly four can-heights across; plated, 2 to 3 pale sliced
  pieces. **Pigs in blankets** are finger-length (about 6 to 8cm, a
  little over half the can's height), glossy brown bacon wrap, piled in
  a small dish. Both added to CANDIDATE QUEUE. The rest of the plate
  follows catalog: Sunday roast (roast potatoes, gravy, full-to-the-rim
  look). A real Christmas table carries 6 to 9 shared vessels.
  [EDITORIAL for sizes and count]
- Snapshot staging: **1 setting**: one full plate (turkey slices, two pigs
  in blankets, roast potatoes, sprouts, carrots and parsnips, gravy), a
  pulled cracker and folded paper hat beside it, the turkey platter
  cropped at the top edge, a sprout dish and gravy jug in the
  midground. **2 settings**: two identical plates, the carved turkey
  between them, pigs-in-blankets dish and roast-potato dish, cranberry
  sauce in a small bowl, the table running out of frame. **Small group**:
  three or four identical plates at one end, every shared dish crowded
  into the middle, crackers and hats at each place. Cues: crackers and
  paper hats at settings beyond the visible plates; a decorated tree
  soft-focus in the background; extra chairs. [EDITORIAL]
- Decor and cues: crackers, paper crowns, a red or white tablecloth,
  fairy lights or a tree blurred behind, winter dark at the window by
  late afternoon. Avoid: snow-scene kitsch, Union Jack anything, a
  stately-home banquet.
- Never stage: wine, champagne, sherry or a flaming brandy-lit pudding
  (the flame comes from spirits; show the pudding unlit); religious
  imagery (nativity scenes) as the subject.
- Confidence and sources: HIGH for menu composition ([YouGov — The YouGov
  Big Survey on Christmas: Christmas dinner](https://yougov.com/en-gb/articles/53593-the-yougov-big-survey-on-christmas-christmas-dinner);
  [YouGov — What is the best Christmas food?](https://yougov.com/en-gb/articles/26343-best-christmas-food));
  MEDIUM for timing; LOW for headcount.

#### Celebration: Easter Sunday lunch (Easter Sunday)
- Type: calendar holiday.
- When: Easter Sunday (March or April), midday; intake time midday.
- Gathering: family at home, similar to a large Sunday roast, about 4 to
  10; home indoor, occasionally a pub. [EDITORIAL]
- The spread: **roast lamb** is the meal most associated with Easter
  Sunday, served as a roast dinner with mint sauce, roast potatoes and
  spring vegetables (see catalog: Sunday roast for the plate; lamb is one
  of its listed meats). Sweet items around the meal: **simnel cake** (a
  light fruitcake covered in toasted marzipan, topped with 11 marzipan
  balls) and **hot cross buns** (spiced currant buns with a pale cross,
  more a Good Friday and teatime item). [MEDIUM — food-media and
  caterer sources agree, no institutional source found] Simnel cake has
  no catalog entry: a round cake about 20cm across (roughly three can
  diameters), golden-brown toasted marzipan top, the ring of 11 small
  balls; added to CANDIDATE QUEUE as a compact sweets item. Shared
  vessels: about 5 to 7, as for a Sunday roast.
- Snapshot staging: as the Sunday roast entry, with the lamb joint
  (browned, pink when sliced) on the board and a jar of mint sauce in
  frame. For a small group, the simnel cake can sit on a cake stand at
  the far edge, partly cropped. Cues: a bowl of small foil-wrapped
  chocolate eggs or a few daffodils in a jug; bright spring daylight,
  still soft. [EDITORIAL]
- Decor and cues: daffodils, pastel napkins. Avoid: oversized Easter
  bunny props, US-style ham as the default centrepiece.
- Never stage: church services, crosses or religious imagery as the
  subject (the cross on a hot cross bun is fine as food); wine.
- Confidence and sources: MEDIUM ([Gambero Rosso — Discover British
  Easter treats](https://www.gamberorossointernational.com/news/food-news/easter-in-the-uk-hot-cross-buns-and-simnel-cake-2/);
  [Fine Food Specialist — Hosting Easter dinner](https://www.finefoodspecialist.co.uk/blogs/blog/hosting-easter-dinner-heres-your-meat-guide));
  EDITORIAL for staging.

#### Celebration: Bonfire Night (Guy Fawkes Night, 5 November)
- Type: calendar holiday (secular, community).
- When: 5 November or the nearest weekend, after dark (about 5 to 8pm);
  intake time evening.
- Gathering: families and friends at a back-garden bonfire (home
  outdoor), or a community fireworks display on a field or park (other),
  with food eaten standing or on garden chairs. A garden party is about
  6 to 20 people; displays are much larger. [EDITORIAL]
- The spread: winter-warming, hand-held food. Documented traditional
  items include **toffee apples**, **treacle toffee**, **parkin** (a soft,
  sticky spiced oat-and-treacle cake, strongly Yorkshire and Northern),
  **black peas** (Lancashire), **jacket potatoes** cooked in the embers,
  hog roast, and in practice sausages and hot dogs. [HIGH for the list —
  Wikipedia (Bonfire Night) and Love Food Hate Waste agree] See catalog:
  Jacket potato (here wrapped in foil, eaten from a paper plate or the
  foil); see catalog: Bangers and mash for the sausage (here in a soft
  white bread roll). Parkin and toffee apples have no catalog entry:
  **parkin** is cut in dark brown, slightly glossy squares about 5cm a
  side (under the can's width); **toffee apples** are whole apples in a
  glassy deep-red toffee shell on a wooden stick, about the can's
  diameter or a little wider. Both added to CANDIDATE QUEUE. A garden
  table carries 3 to 6 serving vessels: a foil tray of jacket potatoes,
  a tray of sausages in rolls, a plate of parkin, toffee apples on a
  board.
- Snapshot staging: **1 setting**: a paper plate with a foil-split jacket
  potato (butter, grated cheese or beans) on a garden table edge, the
  can beside it, the foil tray cropped at the frame edge. **2 settings**:
  two identical paper plates (sausage in a roll plus jacket potato), a
  plate of parkin squares and a toffee apple between them. **Small
  group**: three plates around one end of a garden table, foil trays and
  the parkin plate in the middle. Cues: bonfire glow and a few sparks
  soft in the background; people in coats, scarves and hats, blurred;
  a sparkler trail in the distance. The can should carry the warm orange
  firelight, not studio light. [EDITORIAL]
- Decor and cues: coats and wool hats, garden fence and dark sky,
  firelight. Avoid: daylight, summer clothes, US Fourth-of-July styling.
- Never stage: the "Guy" effigy on the bonfire (an effigy burning, with
  a historically anti-Catholic origin, and in Lewes and elsewhere other
  effigies that court controversy); a child holding a lit firework near
  the product; alcohol (mulled wine is common, keep it out).
- Confidence and sources: HIGH for foods ([Wikipedia — Bonfire Night](https://en.wikipedia.org/wiki/Bonfire_Night);
  [Love Food Hate Waste — Bonfire night feast ideas](https://www.lovefoodhatewaste.com/blog/7-bonfire-night-feast-ideas));
  EDITORIAL for staging and the effigy rule.

#### Celebration: Birthday party (children's party; adult birthday meal)
- Type: life event.
- When: any time of year; children's parties are usually weekend
  midday or early afternoon (midday); adult birthdays are an evening
  meal out (evening) or a garden party in summer (golden-hour).
  [EDITORIAL]
- Gathering: a children's party is often 10 to 30 children in a hired
  church or community hall, soft-play centre, or the home; an adult
  birthday is 4 to 12 at a pub, curry house or restaurant, or at home.
  Map: home indoor, home outdoor, restaurant, other (hall). [EDITORIAL]
- The spread: the children's party buffet on one long table: sandwiches
  cut into triangles, sausage rolls (see catalog: Sausage roll), crisps
  in bowls, cocktail sausages, carrot and cucumber sticks, fairy cakes,
  jelly, and the birthday cake (a decorated sponge, often a character or
  number cake). Adult meal out: see catalog: Curry-house dishes, or a
  pub meal (see catalog: Pies, Fish and chips). [MEDIUM — widely known
  UK party-food repertoire, not specifically sourced this pass]
- Snapshot staging: **1 setting** (children's buffet): one paper plate
  with two sandwich triangles, a sausage roll and a few crisps on a
  long paper-covered table, the cake partly cropped at one end, bowls
  of crisps behind. **2 settings**: two identical paper plates, a shared
  platter of sandwiches and a bowl of crisps between them, a party
  plate of fairy cakes. **Small group**: plates at one stretch of the
  table with the cake (candles unlit or lit) in the midground. Cues:
  balloons tied to a chair back, a paper tablecloth with a print,
  blurred children behind (no sharp faces); keep the product with the
  adult or teen cast, per TCCC's Responsible Marketing Policy (no
  marketing to children under 13, as cited in `germany.md`). [EDITORIAL]
- Decor and cues: balloons, bunting (plain coloured, not Union Jack),
  party bags at the edge. Avoid: legible "Happy Birthday" banners with
  names; licensed characters on the cake.
- Never stage: a young child as the drinker of the hero product (TCCC
  Responsible Marketing Policy, see `germany.md`); alcohol at an adult
  party.
- Confidence and sources: MEDIUM for repertoire; EDITORIAL for staging.

#### Celebration: Wedding breakfast and evening reception (wedding)
- Type: life event.
- When: weddings cluster May to September; the "wedding breakfast" (the
  meal after the ceremony, despite the name, not a morning meal) is
  mid to late afternoon (golden-hour); the evening reception and buffet
  follow (evening). [MEDIUM — the name and timing are widely documented]
- Gathering: about 80 day guests and about 100 to 110 evening guests on
  average (Hitched, via secondary sources); a hired venue (hotel, barn,
  country house, marquee), round tables of 8 to 10. Venue mapping:
  other. [MEDIUM]
- The spread: the wedding breakfast is a plated three-course meal, often
  a roast-style main (chicken breast, beef or lamb with potatoes and
  vegetables), served by caterers; the evening buffet adds bacon or
  sausage rolls, a hog roast, pizza or a cheese board. The tiered wedding
  cake stands on its own table. [MEDIUM — wedding-industry sources]
- Snapshot staging: **1 setting**: one plated main on a white charger at
  a white-clothed round table, name card blank, the cake table blurred
  behind. **2 settings**: two identical plated mains, the table's floral
  centrepiece partly cropped, empty settings continuing round the table.
  **Small group**: three or four settings on one arc of the round table,
  a second round table soft in the background. Cues: the round table's
  curve leaving frame; fairy lights or bunting in a barn; blurred
  guests in formal clothes (no more than about 2.5 faces, none sharp).
  For the evening buffet: a paper plate at a high table, the hog-roast
  station soft behind. [EDITORIAL]
- Decor and cues: white linen, floral centrepieces, chair covers or
  wooden barn chairs. Avoid: the couple themselves as identifiable
  subjects; legible table plans.
- Never stage: champagne flutes, the toast, wine bottles on the table
  (all real and a strong prior; prompt "no glasses other than the hero
  serve"); the ceremony itself.
- Confidence and sources: MEDIUM ([Party Houses — Wedding statistics UK](https://partyhouses.co.uk/wedding-statistics-uk/),
  citing Hitched; [Weddings Hub — UK wedding statistics](https://weddingshub.co.uk/uk-wedding-statistics/);
  both industry tier, flagged per §6); EDITORIAL for staging.

#### Celebration: Eid al-Fitr and Eid al-Adha family meal (British Muslim communities)
- Type: calendar holiday (community; dates move about 11 days earlier
  each year).
- When: Eid day; morning prayers and sweets come first (sheer khurma is
  the first thing eaten by many South Asian-heritage families), then the
  main **family lunch or dinner**, which is the staging target per this
  pass's breakfast exclusion. Intake time midday or evening.
- Gathering: extended family and visiting relatives, often 10 to 30 in
  and out of the home through the day; home indoor (living room and
  dining table both used), sometimes a restaurant or hall. Strongest in
  Birmingham, Bradford, East London, Manchester, Leicester and Luton.
  [MEDIUM]
- The spread: for the largest UK Muslim communities (Pakistani,
  Bangladeshi and Indian heritage), the centrepiece is a **biryani or
  pulao** in a large platter, with karahi or a meat curry, kebabs or
  samosas, raita and salad, then sweets (gulab jamun, sheer khurma,
  mithai). Eid al-Adha centres on the sacrificed animal's meat (lamb,
  goat or beef) cooked the same day. For staging the dishes, point to
  `asia/pakistan.md` (FESTIVALS register and section G, Festive tables
  and sweets), `asia/bangladesh.md` and `asia/india.md`; British versions
  match their family-cooked forms rather than the curry-house menu. A
  table carries 5 to 8 shared dishes. [MEDIUM — Wikipedia (Eid cuisine)
  plus UK grocery and sweet-retailer sources, lower tier, flagged]
- Snapshot staging: **1 setting**: one plate of biryani with a spoon of
  raita on a dining table, the large biryani platter cropped at the
  top edge, a plate of samosas and a sweets box in the midground.
  **2 settings**: two identical plates, the biryani platter and a
  karahi between them, a mithai box open behind. **Small group**: three
  or four settings, every shared dish clustered in the middle. Cues:
  more serving dishes than diners; an open box of mithai; relatives in
  festive clothes blurred in the background; a UK living room (radiator,
  double-glazed window) behind, so it reads as Britain and not South
  Asia. [EDITORIAL]
- Decor and cues: festive shalwar kameez or other best clothes, fairy
  lights or "Eid Mubarak" bunting (illegible). Avoid: desert or
  "Arabian" clichés for a South Asian-heritage family.
- Never stage: pork or alcohol anywhere; prayer, mosque interiors or
  the Qur'an; the animal sacrifice; Ramadan-day eating (see the source
  country files' Ramadan rules).
- Confidence and sources: MEDIUM ([Wikipedia — Eid cuisine](https://en.wikipedia.org/wiki/Eid_cuisine);
  [Sunshine Snacks — What sweets do families enjoy on Eid in the UK](https://sunshinesnacks.co.uk/blogs/posts/what-sweets-do-families-enjoy-on-eid-in-the-uk),
  a retailer, lower tier); EDITORIAL for staging.

#### Celebration: Diwali family meal (British Hindu and Sikh communities)
- Type: calendar holiday (community; October or November).
- When: Diwali evening (intake time evening), after lighting diyas;
  Leicester's Diwali lights are among the largest outside India.
  [MEDIUM — widely reported; not re-searched this pass]
- Gathering: extended family at home, about 8 to 20, with visits to
  relatives and exchanges of sweet boxes; home indoor. [EDITORIAL]
- The spread: a vegetarian-led family meal is common in Hindu households
  (curries, dal, rice, puri, samosas, pakoras), with **mithai** (barfi,
  ladoo, jalebi) as the signature food; Sikh families mark Bandi Chhor
  Divas the same day with similar food. Point to `asia/india.md` for
  dish staging. [MEDIUM — Diwali food norms are well documented in the
  India file's sources; the UK-specific practice is LOW, not separately
  verified this pass]
- Snapshot staging: **1 setting**: a thali-style plate or dinner plate
  with dal, a vegetable curry, rice and a puri, a mithai box open
  beside it, a diya lit at the frame edge. **2 settings**: two identical
  plates, a serving bowl of curry and a basket of puris between them.
  **Small group**: settings at one end, sweets platter mid-table. Cues:
  several lit diyas along a windowsill, string lights, an open sweet
  box. [EDITORIAL]
- Decor and cues: diyas, rangoli soft on the floor at the edge, best
  clothes. Avoid: fireworks as the focus.
- Never stage: beef; deities, shrines or puja as the subject; alcohol.
- Confidence and sources: LOW to MEDIUM (see above); EDITORIAL for
  staging. GAP LOG item added.

---

## GAME NIGHT

Schema §5.8 applies throughout: screens, cards, boards and quiz sheets
are never legible; no crests, kits, sponsor marks or league logos; no
betting slips, odds screens, betting apps, cash or scoring for money
(sports betting and bingo are both prominent in the UK); party size is
the place settings in frame, the crowd implied (§5.7); no identifiable
children; a late kick-off is a night scene. The brief dictates the SKU
(§5.4). This file has no earlier sports or games lines to point to.
Scotland's deltas (Scottish football, the Old Firm, Scotland at rugby)
are in `uk-scotland.md`.

### Watch parties

Football is the main viewing occasion, with England tournament nights
the biggest; Six Nations rugby (February to March) is the second format,
and Test and white-ball cricket is a real but smaller summer audience
(medium). The UK's top choice for watching a tournament is "at home with
the family" (41%), though more than four in ten fans also watch their
team's games in the pub [MEDIUM — Samsung UK survey; JOE]. The pub is
fundamentally drinking-led, so home viewing is the default staging; the
signature viewing foods are takeaway (pizza boxes, curry foil trays),
crisps in bowls and sausage rolls.

#### Watch party: England tournament night at home (World Cup, Euros)
- When: June to July in tournament years (Euros and World Cup
  alternate every two years). Group and knockout games in a European
  tournament usually kick off 17:00 or 20:00 UK time, so the intake
  time is golden-hour or evening; long June daylight means a 20:00
  kick-off still has light outside at the start [LOW — not verified,
  model knowledge for typical kick-off slots]. Games of a tournament
  in the Americas (World Cup 2026) landed in the UK evening or late
  night: stage a late-night kick-off as a night scene with TV glow and
  a lamp, not golden hour.
- Gathering: family or 4 to 8 friends in a living room; 41% watch
  tournaments at home with family [MEDIUM — Samsung UK survey]. Venue:
  home indoor; a back-garden screening on a projector is a real summer
  variant (home outdoor) [EDITORIAL].
- The spread: delivery and takeaway food, eaten from the boxes or
  tipped onto plates: pizza in open cardboard boxes, curry in foil
  trays with lids off and poppadoms (see catalog: Curry-house dishes),
  fish and chips in paper (see catalog: Fish and chips), crisps in
  bowls, a plate of sausage rolls (see catalog: Sausage roll) [MEDIUM —
  takeaway and crisps per Samsung/Bar Magazine; specific dish mix
  EDITORIAL, consistent with the Friday-night takeaway note in
  ENVIRONMENT & STAGING SCENES].
- Surface and environment: a low coffee table in front of the sofa;
  a modest, slightly cluttered living room (radiator, double-glazed
  window, a lamp); the TV a soft out-of-focus field of green with no
  score bug or channel mark. Bunting in plain red and white or
  generic colours at most; never a full St George's Cross or Union
  Jack (reviewer ruling, §5.7).
- Snapshot staging: **1 setting**: one plate with two pizza slices and
  a few chips on the coffee-table edge, the open pizza box and a crisp
  bowl beside it, the sofa running out of frame. **2 settings**: two
  identical plates side by side on the coffee table, a curry tray and
  the pizza box shared between them. **Small group**: three or four
  plates around the table edge, more boxes and trays than the visible
  diners could finish, blurred backs of heads toward the screen (no
  more than about 2.5 faces, none sharp), an extra dining chair pulled
  in.
- Never stage: lager cans, pints or beer multipacks (the strongest
  prior for this scene; prompt "no beer, no other drinks"); England or
  club shirts with crests or sponsor marks; face paint on children;
  a legible screen; betting apps or a sweepstake sheet with names and
  money.
- Confidence and sources: MEDIUM for home-with-family viewing and the
  takeaway/crisps spread ([Samsung — how the UK plans to watch
  football](https://news.samsung.com/global/infographic-this-is-how-the-uk-plans-to-watch-football);
  [Bar Magazine — Sport, snacks and the British pub](https://barmagazine.co.uk/sport-snacks-and-the-british-pub/));
  LOW for kick-off times; EDITORIAL for staging.

#### Watch party: Premier League weekend at home
- When: August to May. The traditional Saturday 15:00 kick-off is, as
  generally understood, not shown live on UK television (the "3pm
  blackout"), so home viewing centres on the televised slots:
  Saturday 12:30 and 17:30, Sunday afternoon, and Monday or Friday
  evening games [LOW — not verified, model knowledge]. Intake time
  midday or golden-hour for weekend games; in winter a 17:30 game is
  already dark outside, so stage it as evening.
- Gathering: 2 to 6 friends or family members; home indoor. A flatshare
  living room is as plausible as a family house (see the Gen Z note in
  ENVIRONMENT & STAGING SCENES).
- The spread: sausage rolls (see catalog: Sausage roll), crisps in a
  bowl, sandwiches cut in halves or triangles on a plate, or a weekend
  takeaway [MEDIUM — the notes rank this as the UK's second stageable
  scene; crisps are 72% of pub sport snacking per Bar Magazine, a trade
  source, flagged; home dish mix EDITORIAL].
- Surface and environment: coffee table or a lap tray on the sofa;
  overcast window light for a midday game, lamp and TV glow for a
  winter evening; a scarf in plain colours (no crest) over the sofa
  arm at most.
- Snapshot staging: **1 setting**: one plate with a sausage roll and
  a handful of crisps on the coffee table, the crisp bowl beside it.
  **2 settings**: two identical plates, one shared crisp bowl and a
  plate of sandwiches between them. **Small group**: three or four
  plates, a second crisp bowl and an extra sausage-roll plate cropped
  at the edge, blurred shapes on the sofa facing the screen.
- Never stage: club crests, kits, sponsor marks; a legible screen;
  beer; betting apps or accumulator slips (football betting is heavily
  advertised in the UK) [LOW — not verified for prevalence].
- Confidence and sources: LOW for broadcast slots; MEDIUM for the
  crisps lead (Bar Magazine, trade tier); EDITORIAL for staging.

#### Watch party: Six Nations rugby weekend
- When: February to March, five weekends; Saturday afternoon games
  (intake time midday or golden-hour; light goes by about 17:30 in
  February, so a late game is evening) and some Friday-evening games
  [LOW — not verified, model knowledge for the slots].
- Gathering: family or friends at home, 4 to 8; strongest in Wales,
  England and Scotland (see `uk-scotland.md`). Venue: home indoor.
  Rugby clubhouse screenings exist but are bar-led [EDITORIAL].
- The spread: hot pies or a pie cut into wedges (see catalog: Pies),
  sausage rolls (see catalog: Sausage roll), Scotch eggs halved on a
  board (see catalog: Scotch egg), a sharing board of cheese, ham and
  pickle in the ploughman's style (see catalog: Ploughman's lunch)
  [LOW — not verified; the notes list pies, sausage rolls and a sharing
  board].
- Surface and environment: coffee table or a kitchen-diner table turned
  toward the TV; winter light, rain on the window, a radiator; the
  screen a soft green blur. In Wales, a red-toned throw or plain red
  bunting is the most a scene carries; never a full flag.
- Snapshot staging: **1 setting**: one small plate with a pie wedge and
  half a Scotch egg, the sharing board cropped beside it. **2
  settings**: two identical plates, the board and a bowl of crisps
  between them. **Small group**: plates around a coffee table, the
  pie dish and a second board running out of frame, blurred figures
  standing behind the sofa.
- Never stage: national rugby shirts with crests or sponsors; beer and
  the clubhouse bar; a legible screen.
- Confidence and sources: LOW for food and timing (no source this
  pass); the format itself is MEDIUM from the notes' rugby section;
  EDITORIAL for staging.

#### Watch party: pub screening (food-led form only)
- When: any big game; evening for tournaments and midweek European
  nights, midday or golden-hour for weekend league games.
- Gathering: more than four in ten fans watch their team in the pub
  [MEDIUM — Samsung UK survey; JOE]. Venue: restaurant (pub).
- The spread: a pub meal at a table, not the bar: pub pie and chips
  (see catalog: Pies), fish and chips (see catalog: Fish and chips),
  a bowl of chips to share, crisps.
- Surface and environment: a dark wooden pub table, patterned carpet,
  a wall-mounted screen soft and out of focus high in the background
  (see Quick-Reference: Traditional pub). The Coca-Cola pub serve is a
  glass with ice and a slice of lemon, when the brief allows a glass
  (see VISUAL & PLATING NORMS).
- Snapshot staging: **1 or 2 settings** at a small table, plated pub
  meals, the bar and other drinkers entirely out of frame or as soft
  dark shapes. Small groups at a pub screen are hard to show without
  drinkers; prefer the home entries above.
- Never stage: pints, the bar back, taps or pump clips, beer mats with
  marks, a crowded standing bar. **The pub screening is drinking-led
  in reality; stage it only as this food-led, alcohol-free table
  scene, or use a home entry instead.**
- Confidence and sources: MEDIUM for pub viewing share; EDITORIAL for
  the staging form.

### Social game nights

Popularity as an occasion to gather and eat around: **high**, but the
best-known formats carry risks. The pub quiz runs about 22,000 times a
week in roughly half of pubs and YouGov ranks it about the 10th most
popular social activity (69% positive) [MEDIUM — Wikipedia, YouGov],
but it is drinking-led; bingo is a gambling activity (in-person bingo
3.3% of adults in the past four weeks; traditional clubs fell from 335
to 248 between 2018 and 2024) [HIGH — Gambling Commission] and is not
staged. Board games at Christmas are the safest high-popularity format.
Video-game nights at home are real [LOW — not verified] and can follow
the US pattern in `usa/us.md` if a brief asks.

#### Game night: board games after Christmas dinner (and other holidays)
- When: Christmas Day and Boxing Day afternoons into evening (intake
  golden-hour; dark by about 16:00 in late December, so most scenes are
  evening light), and holiday weekends [MEDIUM — notes rank this the
  UK's top stageable game scene; timing EDITORIAL].
- Gathering: the extended family from the Christmas entry (see
  CELEBRATIONS: Christmas dinner), 4 to 10 people, at the cleared dining
  table or around the living-room coffee table; home indoor.
- The spread: a tin of chocolates, mince pies on a plate, a cheese board
  with crackers, leftover turkey sandwiches later in the evening [LOW —
  not verified, the notes' editorial spread]. No catalog entries yet
  (see CANDIDATE QUEUE: festive sweets block).
- Surface and environment: food on side plates and a separate board so
  it does not cover the game; a generic board with abstract tiles or a
  fanned pack of plain cards; paper crown hats, pulled crackers, fairy
  lights and a tree soft in the corner.
- Snapshot staging: **1 setting**: one side plate with a mince pie and
  a wedge of cheese at the table edge, the generic board partly in frame.
  **2 settings**: two identical side plates, the chocolate tin open
  between them, dice and cards on the board. **Small group**: plates
  round the edge of the coffee table, the cheese board cropped at one
  end, blurred relatives on the sofa behind.
- Never stage: licensed or branded games (Monopoly, Scrabble or Trivial
  Pursuit layouts), legible cards or boards, money on the board, wine
  or port glasses (a strong Christmas prior), identifiable children.
- Confidence and sources: MEDIUM for the occasion, LOW for the spread;
  EDITORIAL for staging.

#### Game night: quiz night (church hall, charity, or home form only)
- When: weeknights Tuesday to Thursday (Sunday in London), 19:30 to
  22:00; intake time evening [MEDIUM — Wikipedia, tickts.co.uk].
- Gathering: teams of 4 to 6 friends or colleagues at one table, several
  teams across the room. Venue: other (a church or community hall
  running a charity quiz, a school fundraiser) or home indoor (a home
  quiz with the questions on the TV).
- The spread: sausage rolls (see catalog: Sausage roll), crisps in
  bowls, sandwiches on a platter; at home, a sharing platter of nibbles
  [EDITORIAL; LOW — not verified].
- Surface and environment: a folding table with a paper cloth in a hall
  with strip or pendant lights, a quizmaster's microphone and speaker
  blurred, a projector screen with an unreadable slide; at home, a
  coffee table with a laptop mirrored to the TV as a soft glow.
- Snapshot staging: **1 setting**: one paper plate with a sausage roll
  and crisps beside a blank answer sheet and pencil. **2 settings**:
  two identical plates, a shared crisp bowl, the answer sheet face-down
  or illegible. **Small group**: a team table of four, other team
  tables soft behind, the speaker blurred at the edge.
- Never stage: the pub quiz in its pub form (**fundamentally
  drinking-led; staged only as this hall or home form**); pints, wine,
  a bar; legible questions, answer sheets or quiz brands; a cash prize.
- Confidence and sources: MEDIUM for the format and timing ([Wikipedia
  — Pub quiz](https://en.wikipedia.org/wiki/Pub_quiz); [YouGov — Pub quizzes](https://yougov.co.uk/topics/society/explore/activity/Pub_quizzes);
  [tickts.co.uk guide](https://tickts.co.uk/blog/guide-to-uk-quiz-nights-pub-trivia?lang=en));
  EDITORIAL for the non-drinking venue choice and staging.

#### Game night: board-game café
- When: weekend midday to evening; intake midday or evening [LOW — not
  verified for UK specifically].
- Gathering: 2 to 6 friends, often a young-adult cast; venue: restaurant
  (café).
- The spread: toasties cut in halves, chips or fries in a basket,
  nachos to share [LOW — not verified, the notes' editorial spread].
- Surface and environment: wooden café tables, shelves of game boxes
  blurred behind with unreadable spines, warm pendant lights.
- Snapshot staging: **1 or 2 settings**: a toastie on a plate at each
  setting, the shared chip basket at the side so it does not cover the
  generic board. **Small group**: four plates at the table edge, other
  tables soft behind.
- Never stage: branded games or legible boxes; beer (many cafés also
  serve it).
- Confidence and sources: LOW; the notes list board-game cafés for the
  UK without a size figure. EDITORIAL for staging.

---

## DISH CATALOG

**Scale note for every entry**: per `coca-cola-guidelines.md` §3/§4.3, the
UK's standard single-serve can is **330mL, 115.2mm (11.52cm) tall, 66.1mm
(6.61cm) diameter** — not the US 355mL/123mm can. This corrects the
scaffold's own unverified ~11.5cm estimate with the now-verified figure;
use 115.2mm, not the round number. The 500mL PET bottle (203mm tall, 65mm
diameter) is the natural alternative anchor for a meal-deal scene
specifically, since it's the format actually sold alongside a meal-deal
sandwich. Entree plate fallback: 26–28cm diameter, per
`tableware-composition-reference.md` §2.

#### Dish: Fish and chips

- Category: Everyday, with a Friday-night ritual layer.
- Cuisine lineage: Native British, with a genuinely two-source lineage,
  not a single-origin dish. **The fried-fish half traces to Sephardic
  Jewish immigrant tradition, not a British invention** — Sephardic Jews
  fleeing Spain and Portugal brought a Friday/Sabbath-eve dish of
  battered, fried, cold-eaten fish ("pescado frito"/"peshkado frito") to
  England from the 16th–17th centuries onward; it was known in England as
  "fish fried in the Jewish fashion" well before it was paired with chips.
  [CONFIDENCE: HIGH — corroborated across multiple independent sources,
  though one source (Forward) pushes back on an overstated "fish and chips
  is a Jewish invention" framing specifically — the fried-fish *component*
  and its Sephardic lineage is well-corroborated; the combined dish's full
  invention is not solely a Jewish one] [SOURCE: [Atlas Obscura — How Fish
  and Chips Migrated to Great Britain](https://www.atlasobscura.com/articles/who-invented-fish-and-chips); [JTA — Fish and chips' surprising Jewish
  history](https://www.jta.org/2019/11/06/food/fish-and-chips-surprising-jewish-history)] **The contested first-shop claim**: Joseph Malin (Bow, East London,
  c. 1860 — recognized by the National Federation of Fish Friers in 1968
  as the world's oldest fish-and-chip business) vs. John Lees (Mossley,
  Lancashire, c. 1863, who inscribed his shop window "the first fish and
  chip shop in the world"). This is a genuine, unresolved North/South
  dispute — food historian Prof. John K. Walton's own assessment is
  "we don't really know who was first... nobody knew at the time that
  something important was beginning." Disclose both, pick neither.
  [CONFIDENCE: HIGH that the dispute exists and is genuinely unresolved]
  [SOURCE: [Manchester's Finest — Myths of Manchester: Birthplace of Fish &
  Chips?](https://www.manchestersfinest.com/articles/myths-manchester-birthplace-fish-chips/)]
- Regional form variation: Form-changing on condiments/fat/fish species;
  the core form is uniform. Options to offer (§4.6), not silently default:
  - **Fish**: cod (England, South-leaning) vs. haddock (Scotland, North
    East England, Yorkshire) — a real geographic split with a specific,
    sourced causal mechanism: both fish were historically sourced from
    Scottish North Sea waters, but haddock spoiled faster than cod in
    pre-refrigeration transport, so haddock stayed a northern/Scottish
    preference while cod (which traveled better) became the southern
    English default. [CONFIDENCE: MEDIUM-HIGH]
  - **Frying fat**: beef dripping (commonly, though not universally, used
    north of roughly Birmingham, and traditional in Scotland) vs.
    vegetable oil (the modern default further south and increasingly
    nationwide). Dripping produces a darker, crisper, more savory chip —
    a real, checkable texture difference, not just a flavor claim.
    [CONFIDENCE: MEDIUM]
  - **Condiment**: salt and malt vinegar (UK-wide default); salt and sauce
    (Edinburgh — see `uk-scotland.md`); gravy or curry sauce (North
    England, Northern Ireland).
  - **Side**: mushy peas (strongly Northern/Midland-coded but sold UK-wide);
    "scraps"/"bits" (loose fried batter, North England).
  - **Default when unspecified**: cod, salt and vinegar, with a pot of
    mushy peas optional. [EDITORIAL fallback, not a sourced claim]
- Serving format — three genuinely different presentations (§4.4):
  1. **Takeaway**: wrapped in plain white paper or in a cardboard
     box/tray, with a small wooden two-prong chip fork.
     **Expanded/extruded polystyrene food containers are now banned**:
     in England from 1 October 2023 (part of a wider single-use-plastics
     ban covering plates, trays, bowls, cutlery, and polystyrene food/
     drink containers), and in Scotland from 1 June 2022 (fully effective
     from 12 August 2022, after a UK Internal Market Act exclusion issue
     was resolved). A polystyrene clamshell is therefore an outdated or
     incorrect detail for a current-day scene in either nation.
     [CONFIDENCE: HIGH — both dates verified against government/legal
     sources] [SOURCE: [Defra media blog — single-use plastics
     restrictions](https://deframedia.blog.gov.uk/2023/10/02/coverage-of-the-introduction-of-restrictions-on-a-range-of-single-use-plastics/); [Highland Council — Scotland's single-use plastics ban](https://www.highland.gov.uk/news/article/14700/scotlands_single-use_plastics_ban_fully_effective_from_12_august_2022)]
  2. **Sit-in chippy/café**: on a plate, often with sliced white bread and
     butter on the side.
  3. **Pub/gastropub**: on a large plate or oval platter, with a lemon
     wedge and tartare sauce in a ramekin; gastropub-modern may use a
     mini fry-basket or tin cup for the chips — a real register, not the
     default.
- Condiment service: takeaway condiments applied by the server at the
  counter if asked; at a table, a vinegar bottle and salt shaker sit on it.
- Utensils: takeaway — wooden fork; plated — knife and fork.
- Visual/plating characteristics: **Batter** — deep golden, crisp,
  blistered, and irregular, with craggy edges and bubbles; thicker than a
  tempura coating, never smooth or breadcrumbed. **Fish interior (if
  broken)** — bright white, large, moist flakes. **Chips** — thick-cut,
  pale-to-medium golden, soft and slightly limp, often vinegar-damp; not
  crisp, thin, or uniform. **Mushy peas** — thick, bright-to-olive green,
  lumpy purée, not whole peas (note: some chip shops' peas are
  artificially colored a brighter green than a home-cooked batch, so a
  vivid green is not itself inauthentic). **Curry sauce** — smooth,
  yellow-brown, glossy.
- Real-world scale (§4.5): A "regular" chip-shop cod portion runs roughly
  6oz (170g) of raw fillet, a "large" roughly 10–12oz (280–340g) —
  figures from a working fish frier's own account, not an official NFFF
  standard, since the trade itself has no standardized portion (a 2016
  industry survey found medium cod portions varying from 93g to 562g
  shop to shop). [CONFIDENCE: MEDIUM for the weight figures; LOW-MEDIUM
  for translating that into a visible length, this file's own reasonable
  synthesis] A battered "regular" fillet reads as roughly 15–18cm long, a
  "large" 20–25cm — visibly longer than the can's 11.52cm height, roughly
  1.5–2× it. Chips read as roughly 1–1.5cm square in cross-section and
  6–10cm long, each visibly thicker than a finger.
- Common confusion: US "fish and chips" with thin fries; beer-battered
  gastropub fish (a valid variant, but lighter/darker — offer as a
  choice); breaded fish fingers (not the same dish).
- Confidence: HIGH for the origin/dispute/geography claims; MEDIUM-LOW for
  the specific size figures, flagged individually above.
- Sources: [Manchester's Finest](https://www.manchestersfinest.com/articles/myths-manchester-birthplace-fish-chips/); [Atlas Obscura](https://www.atlasobscura.com/articles/who-invented-fish-and-chips); [JTA](https://www.jta.org/2019/11/06/food/fish-and-chips-surprising-jewish-history); [Quora-aggregated cod/haddock geography, corroborated by TasteScot and Newington Fish Bar]; [Defra media blog](https://deframedia.blog.gov.uk/2023/10/02/coverage-of-the-introduction-of-restrictions-on-a-range-of-single-use-plastics/); [Highland Council](https://www.highland.gov.uk/news/article/14700/scotlands_single-use_plastics_ban_fully_effective_from_12_august_2022); [RestaurantOnline — Campaign calls for standardised fish and chip portion sizes](https://www.restaurantonline.co.uk/Article/2016/11/29/Campaign-calls-for-standardised-fish-and-chip-portion-sizes/)
- Composition & proportions (§4.7) — one regular portion, default register
  (cod, salt and vinegar, optional mushy peas). No new sourcing this pass:
  sizes restate this entry's own Real-world scale figures and keep their
  tags; counts and shares are [EDITORIAL].
  - What dominates: **fish and chips in roughly equal measure** — the fillet
    ~40–45% of the food area, chips ~45–50%, mushy peas (if present) ~10%.
    The fillet is the single largest object; the chips are the largest mass.
    Nothing else is more than an accent. [EDITORIAL]
  - Component table:

    | Component | Real size | Count (portion) | Look | Where it sits |
    |---|---|---|---|---|
    | Battered fillet | Regular ~15–18 cm long (~1.5× the can's height), ~6–8 cm wide, ~2–3 cm thick with batter [LOW-MEDIUM — this entry's own synthesis; width/thickness EDITORIAL] | 1 | Deep golden, craggy, blistered batter | Lying on or against the chips, usually on a diagonal |
    | Chips | ~1–1.5 cm square, 6–10 cm long — each shorter than the can [LOW-MEDIUM — this entry] | ~20–30 [EDITORIAL] | Pale to mid gold, soft, some bent, vinegar-damp | A loose, low heap beside and partly under the fish |
    | Mushy peas (optional) | A small pot or spoonful ~7–8 cm across, about the can's width [EDITORIAL] | 0–1 | Thick, lumpy, bright-to-olive green | Beside the chips, never spread over them |
    | Lemon wedge / tartare ramekin (pub only) | Wedge ~5 cm; ramekin ~6–7 cm | 0–1 each | Pale yellow; ivory sauce | Wedge on the fish, ramekin at the plate edge |

  - Arrangement: the fillet lies whole across or alongside the chip heap,
    overlapping it at one end; chips jumbled, not stacked like a tower or
    lined up. [EDITORIAL]
  - Vessel fill: plated, fish and chips cover ~70–80% of a 26–28 cm plate or
    oval platter, the fillet sometimes reaching the rim; takeaway, the food
    sits in the middle of opened plain white paper or fills a card box to
    its rim. [EDITORIAL]
  - Served portion: one fillet and one portion of chips per person — not
    shared from a platter. [EDITORIAL]
  - State cues: batter dry-crisp with a faint oil sheen, no oil pooling;
    chips matte and slightly limp; a light wisp of steam if just served.
    [EDITORIAL]
  - Absent on purpose: thin fries; breadcrumb coating; ketchup poured over;
    coleslaw, salad leaves, parsley; a polystyrene clamshell; lemon and
    tartare in the takeaway register; a beer glass.
  - Prompt-ready line: "One whole battered fish fillet about one and a half
    times the can's height, with a deep golden, craggy, blistered crust,
    lying diagonally across a loose low heap of thick, soft, pale-gold
    chips, each chip a little shorter than the can. A small pot of thick
    green mushy peas about the can's width sits beside them. Faint steam, no
    oil pooling. No thin fries, no salad, no ketchup."

#### Dish: Sunday roast

- Category: Weekly ritual lunch, at home or in the pub.
- Cuisine lineage: Native British.
- Regional form variation: None structurally — the meat choice is an
  option set (§4.6), not a regional variant: roast beef with Yorkshire
  pudding and horseradish (the "classic" pairing); roast chicken (at least
  as common at home) with stuffing; roast lamb with mint sauce; roast pork
  with crackling and apple sauce. **Default when unspecified**: roast beef
  with Yorkshire pudding [EDITORIAL fallback]; chicken should be offered
  as an equally common alternative, not suppressed. Yorkshire puddings are
  now commonly served with every meat in pubs — traditionalists object;
  disclose as a live dispute, not a rule.
- Serving format: Plate. At home, family-style from shared dishes; in
  pubs, pre-plated.
- Components: roast potatoes (non-negotiable); two or three vegetables
  (carrots, peas, green beans, cabbage/greens, broccoli, parsnips); gravy;
  cauliflower cheese (common optional). [CONFIDENCE: HIGH]
- Serving vessel: Entree/dinner plate (26–28cm); gravy boat/jug on the
  table; at home, a roasting tin or carving board plus vegetable dishes.
- Visual/plating characteristics: **Roast potatoes** — craggy, deep-golden,
  crisp exterior, fluffy white interior; not smooth, pale, or
  boiled-looking. **Yorkshire pudding** — a tall, puffed, hollow-centred
  cup with crisp, deep-brown, irregular risen edges and a soft, slightly
  eggy base, often filled with gravy. **Beef** — sliced thin, pink to
  medium in the centre, browned edge. **Crackling** — blistered, puffy,
  golden, hard-crisp strips. **Gravy** — thick, glossy, brown, poured
  across. **Plate** — full to the rim; abundance is part of the look.
- Real-world scale (§4.5): An individual Yorkshire pudding made in a
  standard muffin/popover-style tin reads roughly 7–9cm across at the rim
  and 5–8cm tall once risen — shorter than the can's 11.52cm height, and
  roughly the can's diameter or a little wider. **A separate, larger
  "novelty"/pub register exists and should not be confused with the
  everyday size**: some pubs serve a single oversized Yorkshire pudding
  (8–10in/20–25cm across) as a bowl for the whole roast — a real, sourced,
  but distinctly different and much more recent presentation, not the
  traditional individual-pudding default. [CONFIDENCE: MEDIUM for the
  everyday individual size; HIGH that the oversized "pudding bowl" is a
  real, separate, more recent register] A widely repeated 2008 Royal
  Society of Chemistry statement said a "successful" Yorkshire pudding
  should be at least 4 inches (10cm) tall — this is a competition/novelty
  claim about a specific baking challenge, not an everyday styling
  standard, and should not be used as the scale anchor for an ordinary
  roast-dinner scene. [SOURCE: [RSC — Yorkshire pudding must be four
  inches tall, chemists rule](https://www.rsc.org/news-events/articles/2008/11-november/perfect-yorkshire/)] Roast potato pieces read golf-ball to egg-sized. The
  plate is full, with food to or over the rim of a 26–28cm plate.
- Common confusion: US Thanksgiving plates (different sides entirely — no
  Yorkshire pudding or roast potatoes as standard); popovers (a similar
  batter, but a different vessel/context/serving role).
- Confidence: HIGH for composition and components; MEDIUM for the
  individual-pudding size figures.
- Sources: [YouGov](https://yougov.com/en-gb/articles/20826-dinner-time-or-tea-time-it-depends-where-you-live) (meal-timing context); [RSC](https://www.rsc.org/news-events/articles/2008/11-november/perfect-yorkshire/); general Yorkshire-pudding-tin-size sourcing aggregated across multiple recipe/bakeware sources.
- Composition & proportions (§4.7) — one pre-plated roast beef dinner (pub
  register; the home register serves the same portion from shared dishes).
  Sizes restate this entry's own figures with their tags; counts and shares
  are [EDITORIAL].
  - What dominates: **the plate is full and mixed** — roast potatoes and
    vegetables together ~45–50% of the surface, sliced meat ~20–25%,
    Yorkshire pudding ~10–15%, gravy glossing across the meat and part of
    the potatoes. No single element covers the plate; the full-to-the-rim
    abundance is the look. [EDITORIAL]
  - Component table:

    | Component | Real size | Count (plate) | Look | Where it sits |
    |---|---|---|---|---|
    | Roast beef slices | ~10–14 cm across, 3–5 mm thick [EDITORIAL] | 2–3 | Pink centre, browned edge | Overlapping, fanned at the front or centre, under the gravy |
    | Roast potatoes | Golf-ball to egg size, ~4–6 cm — under the can's width [this entry, unsourced size] | 3–5 [EDITORIAL] | Craggy, deep golden, crisp | Grouped together on one side |
    | Yorkshire pudding | ~7–9 cm across, 5–8 cm tall — shorter than the can, about its width [MEDIUM — this entry] | 1 | Puffed, hollow cup, deep-brown risen edges | Perched on or beside the meat, often gravy-filled |
    | Carrots | Batons ~6–8 cm × 1–1.5 cm or rounds ~2–3 cm [EDITORIAL] | 5–8 pieces | Bright orange, glossy | A small separate heap |
    | Green veg (broccoli, greens, peas or beans) | Florets ~4–5 cm; peas a spoonful [EDITORIAL] | 3–4 florets or one spoonful | Deep green | A small separate heap |
    | Gravy | — | Poured, plus a jug on the table | Thick, glossy brown | Over meat and pudding, pooling at the edges |

  - Arrangement: components in distinct small groups around the plate,
    touching; gravy over the meat, not drowning the potatoes' crisp tops.
    [EDITORIAL]
  - Vessel fill: 26–28 cm plate full to or slightly over the rim (this
    entry); ~0–1 cm of rim visible. [EDITORIAL]
  - Served portion vs. whole dish: at home the joint sits on a board or in a
    roasting tin with vegetable dishes and a gravy jug; each plate is loaded
    to the same full portion. [EDITORIAL]
  - State cues: gravy glossy and thick; potatoes' edges dry and crackly;
    light steam. [EDITORIAL]
  - Absent on purpose: mash as the potato (not the roast default); sweet
    potatoes, corn, cranberry sauce, stuffing balls with beef (a chicken
    pairing); herb sprig garnish; thin watery jus; a wine glass; the
    oversized 20–25 cm novelty pudding unless briefed.
  - Prompt-ready line: "A dinner plate filled to the rim: two or three thin
    slices of pink-centred roast beef fanned at the front under thick glossy
    brown gravy, one puffed hollow Yorkshire pudding about the can's width
    and shorter than it, four craggy deep-golden roast potatoes each smaller
    than the can's width grouped to one side, and small separate heaps of
    orange carrot batons and green broccoli. Light steam. No herb garnish,
    no mash."

#### Dish: Pies — pub pie (steak and ale / chicken and mushroom) and pie and mash

- Category: Everyday. Pub staple; East London institution.
- Cuisine lineage: Native British.
- Serving-format and definitional choice (§4.6), disclosed rather than
  resolved: **a "proper pie"** is fully enclosed in pastry (base, sides,
  and lid); **a casserole topped with a puff-pastry lid**, served in a
  dish, is widely sold as a "pie" in pubs and is a real, loudly contested
  popular debate ("not a real pie"). Both exist; offer both, don't
  silently default. [CONFIDENCE: MEDIUM]
- Accompaniments: mash or chips, peas, gravy.
- Visual (enclosed pie): tall-sided, glossy egg-washed golden shortcrust
  or puff lid; cut open to reveal dark, glossy chunks of beef in thick
  gravy.
- Visual (puff-lid): an individual ceramic pie dish or casserole with a
  risen, flaky, golden puff lid, stew visible at the edge.
- Sub-variant: **London pie and mash** (East London-coded). A small
  minced-beef pie; mashed potato spread in a smooth smear across one side
  of the plate with the back of a spoon (a checkable detail); covered in
  bright-green, thin, glossy parsley "liquor" (traditionally made with eel
  stock); optional jellied or stewed eels; chilli vinegar on the table.
  Eaten in a tiled shop (see Quick-Reference table). [CONFIDENCE: HIGH for
  overall form]
- Real-world scale (§4.5): An individual pub pie reads roughly 12–15cm
  across, filling most of the plate's centre with sides around it. A
  pie-and-mash shop pie reads smaller, roughly 10–12cm, oval or round.
  [CONFIDENCE: LOW-MEDIUM — this file's own reasonable synthesis from
  recipe/retail-tier sourcing, not an independently measured industry
  figure] Lock the plate itself from `tableware-composition-reference.md`
  §2 (26–28cm).
- Common confusion: US pot pie; Australian meat pie (a genuinely similar
  enclosed form — the closest international confusable); the Scotch pie
  (`uk-scotland.md` — smaller, hot-water-crust, recessed-lid construction,
  visually distinct).
- Confidence: HIGH for the definitional dispute and pie-and-mash's form;
  LOW-MEDIUM for exact dimensions.
- Sources: general "proper pie" definitional-dispute coverage aggregated
  across UK food journalism; pie-and-mash form corroborated across
  multiple food-history sources.
- Composition & proportions (§4.7) — one pub pie plate, then the
  pie-and-mash sub-variant. Pie diameters restate this entry's LOW-MEDIUM
  figures; heights, counts and shares are [EDITORIAL].
  - What dominates (pub pie): **the pie** — ~40% of the plate; mash (or
    chips) ~30%; peas ~10–15%; gravy the rest. [EDITORIAL]
  - Components: enclosed pie ~12–15 cm across, ~5–7 cm tall (about half the
    can's height); when cut, beef chunks ~2–3 cm in thick dark gravy, 4–6
    visible in the cut face; puff-lid version a ceramic dish ~14–16 cm with
    the lid domed 1–3 cm above the rim; mash one scoop ~8–10 cm; peas one
    heaped spoonful. [EDITORIAL]
  - Arrangement: pie at the centre or slightly off-centre, mash and peas
    beside it, gravy poured over the pie or in a jug. [EDITORIAL]
  - Vessel fill: pie plus sides cover ~70–80% of the 26–28 cm plate.
    [EDITORIAL]
  - Pie and mash (sub-variant): one or two small pies ~10–12 cm (this entry)
    take ~35–40% of the plate; mash smeared in a flat band across one side
    ~30%; parsley liquor covers the mash and pools across ~30% of the plate.
    Absent: gravy, peas, garnish. [EDITORIAL]
  - State cues: egg-washed lid glossy; gravy thick, oozing only where cut;
    faint steam. [EDITORIAL]
  - Absent on purpose: lattice tops; a pot pie in a soup bowl with no pastry
    lid; herb garnish; ketchup; a pint glass.
  - Prompt-ready line: "A round, tall-sided golden shortcrust pie with a
    glossy egg-washed lid, a little wider than the can's height and about
    half as tall, cut open to show dark chunks of beef in thick glossy
    gravy, sitting at the centre of a dinner plate beside a scoop of smooth
    mash and a heaped spoonful of green peas. Gravy poured over one side. No
    garnish, no lattice."

#### Dish: Cornish pasty

- Category: Everyday. Lunch and on-the-go.
- Cuisine lineage: Native British (Cornish).
- Regional form variation: Form-changing and legally protected. **PGI
  status, verified with its exact date**: awarded 20 July 2011 by the
  European Commission, after a nine-year campaign by the Cornish Pasty
  Association. To be sold as "Cornish pasty," it must be made in Cornwall,
  D-shaped, and **crimped on one curved side, not across the top**.
  Filling: roughly diced or sliced beef, swede (called "turnip" in
  Cornwall), potato, and onion, with peppery seasoning, sealed raw and
  baked. [CONFIDENCE: HIGH] [SOURCE: [The Travel Trunk — Pasty Crimping
  side or top the big question in Cornwall](https://www.thetraveltrunk.net/pasty-crimping-top-or-side/)] **The side-crimp-vs-top-crimp
  question is a real, sourced Cornwall-vs-Devon identity marker, not
  folklore** — the Devon pasty is traditionally oval and crimped across
  the top, while the Cornish pasty is semi-circular ("D"-shaped) and
  crimped along the curved side; per both the Cornish Pasty Association
  and the PGI specification, a top-crimped pasty is not, by definition, a
  genuine Cornish pasty. [CONFIDENCE: HIGH]
- Serving format: Handheld, in a paper bag. Also plated with chips/gravy
  in cafés (less traditional).
- Visual: golden, glossy egg-washed shortcrust; a thick, rope-like crimp
  along the curved edge; chunky vegetable-and-beef filling visible if
  broken, peppery and not saucy. **Not** a flaky puff-pastry turnover;
  **not** an empanada, which is smaller and has a fork-pressed or repulgue
  edge rather than a hand-rolled rope crimp.
- Real-world scale (§4.5): A standard retail pasty reads roughly 18–22cm
  long — noticeably longer than the can is tall. [CONFIDENCE: LOW-MEDIUM
  — no single authoritative Cornish Pasty Association size specification
  was found via WebSearch in this session; this figure is this file's own
  reasonable synthesis from typical retail-pasty sizing and should be
  treated as an estimate, not a locked figure, pending a source that
  states an exact dimension]
- Common confusion: Empanada; NI's chip-shop "pastie" (a battered,
  fried, round pork patty — see the NI callout below; visually and
  structurally unrelated despite the near-identical name); a generic
  "hand pie."
- Confidence: HIGH for PGI status, shape, and crimp-direction; LOW-MEDIUM
  for exact length.
- Sources: [The Travel Trunk](https://www.thetraveltrunk.net/pasty-crimping-top-or-side/); [Coast & Country Cottages — The Devon pasty](https://www.coastandcountry.co.uk/blog/the-devon-pasty-our-comprehensive-guide); [GOV.UK — Cornish Pasty protected food name](https://www.gov.uk/protected-food-drink-names/cornish-pasty)
- Composition & proportions (§4.7) — one pasty. Length restates this entry's
  LOW-MEDIUM 18–22 cm estimate; other sizes and counts [EDITORIAL].
  - What dominates: **the pastry** — unbroken, the whole visible object is
    golden shortcrust; if broken, the cut face is ~80% filling and ~20%
    pastry wall. Filling by volume: potato ~40–50%, swede ~20%, beef
    ~20–25%, onion the rest. [EDITORIAL]
  - Components: pasty ~18–22 cm long (about 1.5–2× the can's height), ~9–11
    cm deep across the D, ~5–6 cm tall at the thickest; rope crimp ~1.5–2 cm
    wide along the curved side; filling pieces roughly 1–2 cm (beef chunks,
    potato and swede slices or dice), peppery, no sauce. [EDITORIAL]
  - Count: one per person. [EDITORIAL]
  - Arrangement: lying flat on its base with the crimp curving along one
    side, or half out of a plain paper bag; a broken-open one shows the
    chunky cut face. [EDITORIAL]
  - Vessel fill: on a plate it takes most of a 22–26 cm side plate on its
    own; café version with chips takes about half a dinner plate.
    [EDITORIAL]
  - State cues: glossy, dry pastry; a wisp of steam from a broken one; no
    gravy leaking. [EDITORIAL]
  - Absent on purpose: a crimp across the top; a fork-pressed edge; flaky
    puff layers; carrots, peas or minced meat in the filling (not in the
    filling listed above); a sauce or gravy inside.
  - Prompt-ready line: "One large D-shaped pasty about one and a half to two
    times the can's height, glossy golden egg-washed shortcrust with a thick
    rope-like hand crimp running along the curved side, lying flat on plain
    white paper. One end broken open showing chunky peppery pieces of
    potato, pale orange swede and beef, no sauce. No top crimp, no puff
    pastry, no garnish."

#### Dish: Sausage roll (bakery-chain snack register)

- Category: Everyday snack.
- Form: Pork sausage meat in puff pastry.
- Variants to offer: bakery-chain rolls (paper bag, fairly uniform,
  flaky); homemade/party rolls (small, cut, on a platter); gastro/deli
  rolls (larger, hand-made, often seeded); vegan versions (now mainstream).
- Visual: golden, laminated, flaky puff with visible layers; egg-wash
  gloss; diagonal knife-score marks on top (common); cut end shows a
  pale-pink-to-grey sausage-meat cylinder; pastry flakes scattered on the
  surface (a checkable texture detail).
- Real-world scale (§4.5): A standard high-street bakery-chain roll reads
  as roughly **15cm (6in) long** — a specific, sourced commercial-product
  figure, genericized here per §7.5 rather than named — and roughly 4cm
  thick: noticeably longer than the can's 11.52cm height. [CONFIDENCE:
  MEDIUM-HIGH — a specific, repeatedly-cited commercial dimension, though
  sourced to a single well-known chain's product rather than an
  industry-wide standard] Party/cocktail rolls read roughly 4–6cm.
- Sources: aggregated bakery-chain sausage-roll size reporting (retail/
  consumer press) and general sausage-roll history sourcing.
- Composition & proportions (§4.7) — one bakery-chain roll; party rolls as a
  platter. Length restates this entry's MEDIUM-HIGH ~15 cm; other figures
  [EDITORIAL].
  - What dominates: **the pastry** — the outside is all laminated puff; on
    the cut end, a sausage-meat cylinder ~2.5–3 cm across fills ~50–60% of
    the face, pastry layers the rest. [EDITORIAL]
  - Components: roll ~15 cm long (a little longer than the can's height) and
    ~4 cm thick; 3–5 diagonal score marks; loose pastry flakes around it.
    Party rolls ~4–6 cm, 10–16 on a platter. [EDITORIAL]
  - Arrangement: single roll lying on or half out of a plain paper bag;
    party rolls in loose rows on a plate. [EDITORIAL]
  - State cues: egg-wash gloss, crisp flakes, faint grease spots on the
    paper bag. [EDITORIAL]
  - Absent on purpose: ketchup blobs, dipping sauces, salad garnish, sesame
    or seeds (gastro register only), legible bag print.
  - Prompt-ready line: "One golden, flaky puff-pastry sausage roll a little
    longer than the can's height and about half its width thick, glossy on
    top with a few diagonal score marks, lying on a plain paper bag with
    loose pastry flakes around it. The cut end shows pale pink-grey sausage
    meat filling about half the face, wrapped in thin crisp layers. No
    sauce, no garnish."

#### Dish: Meal-deal sandwich (triangle pack) + crisps

- Category: Everyday. The defining on-the-go lunch.
- Cuisine lineage: Native British. The pre-packed sandwich was a UK
  supermarket-era development. **The "meal deal" as a bundled
  sandwich+snack+drink promotion is more precisely dated than the
  scaffold's own hedge suggested**: Boots pioneered systemized, identical
  sandwich production across all its branches starting in 1985, but the
  actual bundled "meal deal" promotion (sandwich, drink, and snack
  together) was introduced by Boots specifically in 1999, at £2.50 — a
  later, more specific date than the scaffold's flagged-as-unverified
  "1985" claim, which conflated sandwich standardization with the meal
  deal itself. [CONFIDENCE: MEDIUM — a specific claim repeated across
  multiple retail-history sources, though not an academically or
  institutionally sourced date] [SOURCE: [The Critic — The real deal with
  meal deals](https://thecritic.co.uk/the-real-deal-with-meal-deals/); [Wikipedia: Meal deal](https://en.wikipedia.org/wiki/Meal_deal)]
- Form: Two triangles of sandwich (a square sandwich cut diagonally) in a
  clear-fronted cardboard/plastic wedge pack.
- Common fillings: prawn mayo; cheese and pickle; egg and cress; chicken
  and bacon; BLT; tuna and sweetcorn.
- Serving format: The pack itself, or unpacked on a desk or bench. Crisps
  in a packet.
- Visual: soft sliced bread (white or brown/seeded) with a neat diagonal
  cut face; filling visible at the cut, pressed thin, not piled high (the
  opposite of a dense US deli sandwich); crisps thin, flat-to-curled,
  pale golden.
- Text rule: supermarket packs and crisp packets are dense with legible
  branding — render the pack blank/blurred, or stage the sandwich
  unpacked on its opened wedge, per the standing no-legible-text rule.
- Real-world scale (§4.5): Each triangle has roughly 10–12cm sides (a
  square slice cut diagonally) and is 2–3cm thick — each triangle's long
  edge close to the can's 11.52cm height. [CONFIDENCE: LOW-MEDIUM — a
  reasonable inference from standard sliced-bread dimensions, not an
  independently measured figure]
- Product fit: This is the single most natural Coca-Cola-in-frame scene
  in the file. **The brief names the SKU** (brand, variant, format) — this
  file never picks one by region (standing rule, 2026-09-27; see
  `DECISIONS.md`). Name the variant exactly and negate its closest
  lookalike, per `africa/south-africa.md`'s HERO PRODUCT SLOT template. Scale: a 330mL can uses the UK dimensions
  above; a 500mL PET per `coca-cola-guidelines.md` §4.3.
- Sources: [The Critic](https://thecritic.co.uk/the-real-deal-with-meal-deals/); [Wikipedia: Meal deal](https://en.wikipedia.org/wiki/Meal_deal)
- Composition & proportions (§4.7) — one pack plus crisps. Triangle size
  restates this entry's LOW-MEDIUM figure; the rest [EDITORIAL].
  - What dominates: **bread** — on each cut face the two slices take ~65–75%
    of the height, the filling a thin ~0.5–1 cm band. Sandwich ~60% of the
    scene's food area, crisps ~40%. [EDITORIAL]
  - Components: two triangles, sides ~10–12 cm, 2–3 cm thick (this entry) —
    the long edge about the can's height; crisps ~3–4 cm across, curled, a
    small handful spilling from an opened plain packet or 10–15 loose beside
    it. [EDITORIAL]
  - Arrangement: triangles upright in the opened wedge pack, cut faces
    forward, or laid side by side on the opened pack; crisps beside, not
    piled on the sandwich. [EDITORIAL]
  - Absent on purpose: a tall deli stack, toothpicks, a plate and cutlery,
    side salad, legible pack or packet print.
  - Prompt-ready line: "Two soft sandwich triangles, each long edge about
    the can's height, standing cut-face-forward in an opened blank
    clear-fronted wedge pack; the cut faces show two thick slices of soft
    bread with a thin, pressed band of filling between them. Beside it, a
    small spill of thin pale-golden curled crisps from an opened plain
    packet. No legible print, no plate, no toothpicks."

#### Dish: Curry-house dishes (chicken tikka masala, korma, balti, poppadoms)

- Category: Everyday. Friday-night takeaway and group dinner out.
- Cuisine lineage: British Indian/British Bangladeshi, and specifically
  and heavily Bangladeshi-owned — **a figure the scaffold flagged as
  MEDIUM-confidence that this pass confirmed at a higher tier, with a
  precise source rather than a general impression.** More than 8 in 10
  "Indian" restaurants in Britain are Bangladeshi-owned (roughly 7,200 of
  an estimated 8,500), and roughly 95% of those trace to the Sylhet region
  specifically — a dominance already over 80% by the 1980s and sustained
  since. The sector generates over £4.5 billion annually and employs
  roughly 100,000 people UK-wide. [CONFIDENCE: HIGH — multiple
  independent, consistent figures, including Wikipedia's dedicated
  "Business of British Bangladeshis" article] [SOURCE: [Wikipedia:
  Business of British Bangladeshis](https://en.wikipedia.org/wiki/Business_of_British_Bangladeshis); [Pipasha — Understanding British Indian Cuisine](https://pipasha-restaurant.co.uk/understanding-british-indian-cuisine-why-many-indian-restaurants-are-bangladeshi-owned/)]
- **Chicken tikka masala's origin dispute and the "national dish" claim —
  see `us.md`'s Indian-American entry for the full documented dispute
  (Ali Ahmed Aslam/Shish Mahal, Glasgow, 1970s, vs. a Delhi/Moti Mahal
  counter-claim tied to butter chicken; Robin Cook's 2001 "Britain's true
  national dish" speech). This file is the more natural home for that
  dispute's depth, since it's a claim about British — specifically
  Scottish — culinary identity, not an American one; `us.md` keeps its own
  compact version (documenting how the two dishes appear side-by-side,
  indistinguishably, on US menus) and now cross-references here rather
  than duplicating.** The Glasgow claim specifically belongs to Scotland's
  own food history (Shish Mahal is a Glasgow restaurant); see
  `uk-scotland.md` for that half of the story in full, including the
  invention anecdote itself (a customer complaint about dry chicken,
  answered with an improvised tomato-and-cream sauce built from canned
  tomato soup and spices). [CONFIDENCE: HIGH that the dispute exists and
  is genuinely unresolved; MEDIUM for which specific account is correct]
- Regional form variation: The **balti** is Birmingham-coded, with a
  specific, sourced origin — introduced to Birmingham's Pakistani
  community around 1975, cooked and served in the same thin, two-handled
  pressed-steel bowl (the dish's own scorched, caramelized edges are part
  of its flavor and its visual signature), often with a very large shared
  "table naan." Birmingham's Balti Triangle (Ladypool Road/Stoney
  Lane/Stratford Road, Balsall Heath) became a named cluster by the
  1980s, replacing what had previously been a fish-and-chip-shop-dense
  area. [CONFIDENCE: HIGH] [SOURCE: [National Geographic — The story
  behind balti, the Pakistani dish born in Birmingham](https://www.nationalgeographic.com/travel/article/story-behind-balti-birmingham-uk); [BhamGuide — The Fascinating History of the Balti Triangle](https://bhamguide.com/the-history-of-the-balti-triangle-in-birmingham/)] Offer as a choice for a Birmingham/Midlands brief.
- Serving format: Opener — poppadoms stacked on a plate with a condiment
  tray/carousel (mango chutney, lime pickle, mint-yogurt raita, diced
  onion salad); curries in small metal karahi/balti dishes or white
  bowls, with an oval dish of pilau rice and naan; takeaway in clear/foil
  containers with card lids.
- Utensils: Fork and spoon, or knife and fork; naan torn by hand.
- Visual: **Tikka masala** — orange-red, creamy, glossy sauce. **Korma** —
  pale cream-yellow. **Madras/vindaloo** — darker red with an oil sheen.
  **Pilau rice** — mixed white and yellow/orange grains (food coloring is
  common). **Poppadoms** — large, thin, blistered, crisp discs.
- Real-world scale (§4.5): A restaurant-served poppadom reads
  substantially larger than the scaffold's own estimate — **commercial/
  restaurant poppadoms commonly run 20–28cm (8–11in) across**, clearly
  larger than the can is tall, and roughly comparable to or larger than
  an entree plate's own diameter before it's broken for sharing.
  [CONFIDENCE: MEDIUM — general commercial-product sizing, not a single
  dedicated dimensional source] Balti bowl and karahi dimensions: lock
  from `tableware-composition-reference.md` §2 once populated for this
  market.
- Confidence: HIGH for Bangladeshi-ownership share and balti's Birmingham
  origin; HIGH that the tikka masala dispute exists; MEDIUM for
  poppadom size and pilau-rice coloring detail.
- Sources: [Wikipedia: Business of British Bangladeshis](https://en.wikipedia.org/wiki/Business_of_British_Bangladeshis); [National Geographic](https://www.nationalgeographic.com/travel/article/story-behind-balti-birmingham-uk); [BhamGuide](https://bhamguide.com/the-history-of-the-balti-triangle-in-birmingham/); [Adventure.com — The plight of the Balti](https://adventure.com/birmingham-balti-curry-south-asian-food-heritage/); `us.md`'s existing tikka masala sourcing (Wikipedia, CNN, Britannica).
- Composition & proportions (§4.7) — a two-person table and one diner's
  plate. Poppadom size restates this entry's MEDIUM 20–28 cm; everything
  else [EDITORIAL].
  - What dominates (table): **sauce and rice** — curry surfaces ~35–40% of
    the food area, pilau rice ~25%, naan ~20%, poppadoms and the chutney
    tray the rest. In each curry dish, sauce covers ~60–70% of the surface
    and meat pieces show through the rest. [EDITORIAL]
  - Components: curries in metal karahi/balti dishes or white bowls ~15–18
    cm, one per person, each with 8–12 chicken tikka pieces ~3–4 cm (about
    half the can's width), half-submerged; pilau rice one oval dish ~20–25
    cm; one naan ~25–30 cm long, teardrop, torn; poppadoms 2–4 stacked,
    20–28 cm; chutney tray of 3–4 small pots ~6–7 cm. [EDITORIAL]
  - Arrangement: curries and rice in the middle of the table, poppadoms at
    one side, plates in front of each diner. [EDITORIAL]
  - Served portion: a diner's plate has a mound of rice on about a third,
    curry ladled beside it with 3–5 chicken pieces, and a torn piece of naan
    at the edge. [EDITORIAL]
  - State cues: sauce glossy with a thin oil sheen at the edge; steam over
    the dishes; poppadoms dry and blistered. [EDITORIAL]
  - Absent on purpose: heavy coriander piles (a light sprinkle at most),
    whole chillies heaped, lime-and-herb Thai-style garnish, lager bottles
    or glasses, candles, legible menus.
  - Prompt-ready line: "On a restaurant table, a small metal balti dish of
    glossy orange-red creamy curry with chicken pieces each about half the
    can's width half-sunk in the sauce, a pale cream-yellow korma beside it,
    an oval dish of white-and-yellow speckled pilau rice, a torn teardrop
    naan longer than two cans, and a stack of large blistered poppadoms
    wider than the can is tall. Light steam. No heaped garnish."

#### Dish: Ploughman's lunch

- Category: Everyday pub/café lunch.
- Cuisine lineage: Native British, **with the marketing-origin honesty
  this project applies consistently (the same pattern as `us.md`'s apple
  pie entry) — now confirmed with a more specific mechanism than the
  scaffold's own hedge.** Bread-and-cheese pub lunches are genuinely old,
  but the *named* "ploughman's lunch" as a pub-menu item traces to a
  specific 1950s marketing campaign: the Cheese Bureau began promoting it
  in pubs to boost cheese sales after wartime rationing ended, and the
  Milk Marketing Board expanded the promotion nationally through the
  1960s, reportedly under a named Devon & Cornwall marketing manager,
  producing thousands of bar-top show-cards. [CONFIDENCE: MEDIUM-HIGH for
  the marketing-campaign mechanism and decade — corroborated across
  multiple food-history sources, though not an academic/primary source]
  [SOURCE: [Pong Cheese — A History of the Ploughman's Lunch](https://www.pongcheese.co.uk/blog/a-history-of-the-ploughmans-lunch/); [Zythophile — The ploughman's lunch: guilty or innocent?](https://zythophile.co.uk/2007/07/16/the-ploughmans-lunch-guilty-or-innocent/)]
- Components: a wedge of Cheddar (or Stilton); crusty bread or roll with
  butter; brown pickle/chutney; pickled onions; apple slices; salad
  leaves; optional ham, pork pie, or Scotch egg.
- Serving vessel: A wooden board (gastropub) or large plate (traditional).
  Components sit separately, not assembled into a sandwich.
- Visual: Deliberately rustic and unassembled — separate piles, a glossy
  dark-brown chunky chutney, pearly pickled onions. The cheese is a cut
  wedge, not slices.
- Real-world scale (§4.5): A Cheddar wedge reads roughly 8–10cm long; a
  serving board roughly 30–40cm. [CONFIDENCE: LOW — this file's own
  reasonable estimate; lock the board dimension from
  `tableware-composition-reference.md` §2's cutting-board table
  (30–35cm × 20cm) once treated as authoritative for this dish]
- Sources: [Pong Cheese](https://www.pongcheese.co.uk/blog/a-history-of-the-ploughmans-lunch/); [Zythophile](https://zythophile.co.uk/2007/07/16/the-ploughmans-lunch-guilty-or-innocent/); [Wikipedia: Ploughman's lunch](https://en.wikipedia.org/wiki/Ploughman's_lunch)
- Composition & proportions (§4.7) — one board. Board and wedge sizes
  restate this entry's LOW figures; the rest [EDITORIAL].
  - What dominates: **bread and cheese** — together ~50% of the board's
    food; chutney, pickled onions, apple and leaves each a small separate
    accent (~10% each). [EDITORIAL]
  - Components: one Cheddar wedge ~8–10 cm long (a little shorter than the
    can); a crusty roll or 2 thick slices ~10–12 cm; butter pat ~3–4 cm;
    chutney in a ramekin ~6–7 cm (about the can's width); 3–5 pickled onions
    ~2.5–3 cm; 4–6 apple slices; a small handful of leaves. Optional ham
    slice or a Scotch egg half. [EDITORIAL]
  - Arrangement: components in separate piles around a 30–35 × 20 cm board,
    bread and cheese at the centre, nothing assembled into a sandwich.
    [EDITORIAL]
  - State cues: cheese matte with a clean cut face; chutney glossy; onions
    pearly and wet. [EDITORIAL]
  - Absent on purpose: grapes and cured-meat charcuterie spread, crackers
    fanned like a grazing board, honey drizzle, a beer glass.
  - Prompt-ready line: "A wooden board set with separate small piles: a cut
    wedge of pale-yellow Cheddar a little shorter than the can, a crusty
    roll with a pat of butter, a small ramekin of glossy dark-brown chunky
    chutney about the can's width, a few pearly pickled onions, fanned green
    apple slices and a small tuft of salad leaves. Nothing assembled. No
    grapes, no crackers."

#### Dish: Bangers and mash

- Category: Everyday. Home and pub.
- Variation (§4.6): standard links (pork; Lincolnshire, herby) vs.
  **Cumberland sausage** — a continuous coiled spiral, verified as
  Protected Geographical Indication status since **March 2011**, requiring
  production in Cumbria, at least 80% meat content, a coarse cut with a
  minimum 20% fat, strong seasoning, and — the checkable visual marker —
  sale as one continuous coil at least 20mm in diameter, traditionally
  very long (documented up to 50cm/20in) and sold rolled into a flat
  circular coil rather than linked sausages. [CONFIDENCE: HIGH]
  [SOURCE: [Wikipedia: Cumberland sausage](https://en.wikipedia.org/wiki/Cumberland_sausage)] Offer the coil as a choice for a
  Cumbria/North brief.
- Components: Mash, glossy onion gravy, peas. Often served with English
  mustard.
- Visual: sausages deeply browned, with slightly split or blistered
  skins; mash mounded under or beside; dark brown onion gravy with
  translucent onion strands pooled over. **Not** a thin hot dog; **not**
  bratwurst on a bun.
- Real-world scale (§4.5): A standard British sausage reads roughly
  12–14cm × 2.5cm; two to three per portion on a 26–28cm plate. A
  Cumberland coil, sold and plated as one continuous spiral, reads
  roughly 15–20cm across when coiled flat — clearly wider than the can's
  6.61cm diameter and taller than the can when uncoiled to its full,
  sourced 50cm length. [CONFIDENCE: MEDIUM for the coil's diameter-when-
  plated figure, given the sourced 50cm total-length figure; LOW-MEDIUM
  for standard-link dimensions, this file's own estimate]
- Naming-origin note: the WWI "water-filled sausages burst" origin story
  for "bangers" is widely repeated but not independently confirmed in
  this pass — treat as folk etymology, not fact.
- Sources: [Wikipedia: Cumberland sausage](https://en.wikipedia.org/wiki/Cumberland_sausage)
- Composition & proportions (§4.7) — one plate. Sausage size and count
  restate this entry's LOW-MEDIUM figures; shares [EDITORIAL].
  - What dominates: **mash** ~35–40% of the plate, sausages ~30%, onion
    gravy ~20% (pooled over both), peas ~10% if present. [EDITORIAL]
  - Components: 2–3 links ~12–14 × 2.5 cm (about the can's height, a third
    of its width); mash one mound ~10–12 cm across, 4–5 cm tall; peas one
    spoonful; a dab of English mustard at the rim optional. Cumberland
    option: one flat coil ~15–20 cm across replaces the links. [EDITORIAL]
  - Arrangement: sausages leaning on or lying across the mash, gravy poured
    over both with onion strands visible. [EDITORIAL]
  - Vessel fill: ~70% of a 26–28 cm plate (or a wide shallow bowl).
    [EDITORIAL]
  - State cues: split, blistered, deeply browned skins; gravy glossy; steam.
    [EDITORIAL]
  - Absent on purpose: hot-dog franks, bratwurst on a bun, herb sprigs, thin
    jus, ketchup.
  - Prompt-ready line: "Two or three deeply browned pork sausages, each
    about the can's height and a third of its width, with split blistered
    skins, leaning across a soft mound of smooth mashed potato, both covered
    in glossy dark-brown onion gravy with translucent onion strands, a small
    heap of green peas beside them on a dinner plate. Steam rising. No
    garnish, no bun."

#### Dish: Shepherd's pie / cottage pie

- Category: Everyday home dinner.
- Naming distinction (a real, HIGH-confidence authenticity note):
  shepherd's pie is lamb; cottage pie is beef. They are often used
  interchangeably in casual speech, and pedants object.
- Visual: mashed-potato top, fork-ridged or piped; browned, crisp peaks;
  optional grated cheese; minced meat in gravy with carrot/peas beneath;
  served from an oven dish (ceramic or Pyrex-style), scooped.
- Cross-file note (not edited there): `uruguay.md`'s pastel de carne
  entry names pastry-shelled British/Australian meat pies as its
  confusable alternative, but shepherd's/cottage pie (mash top, no
  pastry at all) is the closer British match — mash top *and bottom*,
  plus olives and raisins, are pastel de carne's actual differentiators.
  Logged in DECISIONS.md rather than edited into `uruguay.md` directly.
- Real-world scale (§4.5): A home oven dish reads roughly 20×25–30cm; a
  portion is a scooped mound covering roughly a third to a half of a
  26–28cm plate. [CONFIDENCE: LOW-MEDIUM — reasonable estimate, not an
  independently sourced figure]
- Composition & proportions (§4.7) — the oven dish and one scooped portion.
  Dish and portion sizes restate this entry's LOW-MEDIUM figures; layers and
  shares [EDITORIAL].
  - What dominates: **mash** — in the dish the top is ~100% browned mash; in
    a scooped portion the mash is ~50–60% of the visible volume, the dark
    mince-and-gravy layer ~40–50%, with carrot dice and peas as small flecks
    in it. [EDITORIAL]
  - Components: mash top 2–3 cm deep, fork-ridged or piped peaks; meat layer
    3–4 cm; carrot dice ~1 cm, peas scattered; optional grated cheese crust.
    [EDITORIAL]
  - Vessel fill: the 20 × 25–30 cm oven dish filled to ~1 cm below the rim;
    one corner or edge scooped out to show the layers. [EDITORIAL]
  - Served portion: a slumped scoop covering a third to half of a 26–28 cm
    plate, optionally with a spoonful of peas or greens beside it.
    [EDITORIAL]
  - State cues: crisp browned ridges, gravy seeping at the scooped edge,
    steam. [EDITORIAL]
  - Absent on purpose: a pastry crust; a sweet-potato top; herb garnish;
    neat square slices that hold like lasagne.
  - Prompt-ready line: "A rectangular ceramic oven dish filled almost to the
    rim with a thick layer of mashed potato, fork-ridged with crisp browned
    peaks; one corner scooped away shows a dark minced-meat layer in glossy
    gravy with small flecks of carrot and peas beneath the mash. A slumped
    portion sits on a plate beside it. Steam, no pastry, no garnish."

#### Dish: Scotch egg

- Category: Snack. Picnic, pub bar snack, supermarket.
- Variants: supermarket (hard-boiled egg, uniform, cold) vs. gastropub
  (soft/runny yolk, served warm, often halved to show the yolk). Offer
  both.
- Visual: deep golden-brown breadcrumb shell; a pale sausage-meat layer
  roughly 1cm thick; the egg at the centre; gastropub halves show a
  glossy orange yolk.
- Real-world scale (§4.5): Roughly 6–8cm diameter — close to the can's
  6.61cm diameter, a useful direct visual comparison.
- Origin note: **the Fortnum & Mason 1738 claim is genuinely, actively
  disputed, not just an unconfirmed rumor** — the retailer's own history
  page states it, but food historians specifically challenge it (the
  dish isn't practical for the carriage travel the story describes, and
  the supporting records are, as multiple sources put it, "conveniently"
  lost); competing theories trace it to a 19th-century Whitby product
  ("Scotties," from William J. Scott & Sons) or to British adaptation of
  the Indian dish nargisi kofta. [CONFIDENCE: HIGH that the dispute is
  real and multi-sided, not settled] Genericize — do not present any one
  origin as fact. [SOURCE: [Fortnum & Mason — The History of The Scotch
  Egg](https://www.fortnumandmason.com/stories/scotch-egg-archive); [Tasting Table — The Mysterious Origins Of Scotch Eggs](https://www.tastingtable.com/1007982/the-mysterious-origins-of-scotch-eggs/)]
- Composition & proportions (§4.7) — one egg, whole (supermarket) or halved
  (gastropub). Diameter restates this entry's 6–8 cm; layers [EDITORIAL].
  - What dominates: **the crumb shell** when whole; on a halved face, the
    egg ~50–60% of the cut area (yolk ~3 cm, white ring ~0.8–1 cm),
    sausage-meat ring ~1 cm, crumb ~2–3 mm. [EDITORIAL]
  - Count: one whole, or two halves side by side; a picnic tray may hold 3–4
    whole. [EDITORIAL]
  - Arrangement: halves cut face up on a small plate or board; optionally a
    small dab of mustard or piccalilli in a ramekin. [EDITORIAL]
  - State cues: gastropub yolk glossy orange and just runny; supermarket
    yolk firm and pale. [EDITORIAL]
  - Absent on purpose: sauce drizzles, microgreen piles, a crumb that looks
    panko-shaggy.
  - Prompt-ready line: "One Scotch egg about the can's width, deep
    golden-brown fine breadcrumb shell, cut in half and set cut-face up on a
    small white plate: a ring of pale sausage meat about a finger thick around a
    white ring and a glossy, just-runny orange yolk. No sauce drizzle, no
    garnish pile."

#### Dish: Jacket potato

- Category: Everyday lunch. Café, canteen, home.
- Toppings to offer: cheese and beans (the classic), tuna mayo, coleslaw,
  chilli.
- Visual: crisp, dark, slightly wrinkled and salt-flecked skin; split
  open (cross-cut or lengthwise); fluffy white interior, butter melting
  in; toppings heaped over; often a side salad.
- Real-world scale (§4.5): A large baking potato reads roughly 12–15cm
  long — roughly the can's 11.52cm height. [CONFIDENCE: LOW-MEDIUM —
  reasonable estimate for a standard large baking potato, not an
  independently sourced figure]
- Composition & proportions (§4.7) — one cheese-and-beans jacket. Potato
  size restates this entry's LOW-MEDIUM 12–15 cm; the rest [EDITORIAL].
  - What dominates: **the topping** — beans ~35–40% of the visible surface,
    melted grated cheese ~20%, the dark skin ~25% at the edges; a side salad
    ~15%. [EDITORIAL]
  - Components: one potato ~12–15 cm long (about the can's height), split
    and pushed open; a butter knob melting; beans ~2 heaped spoonfuls
    spilling to the plate; cheese a handful melted over; side salad a few
    leaves, tomato and cucumber slices. [EDITORIAL]
  - Vessel fill: potato and topping take ~60% of a 26–28 cm plate, salad the
    rest. [EDITORIAL]
  - State cues: steam from the split, cheese soft and stringy, bean sauce
    glossy orange. [EDITORIAL]
  - Absent on purpose: foil wrapping (US steakhouse cue), sour cream and
    chives, bacon bits.
  - Prompt-ready line: "One large baked potato about the can's height, crisp
    dark salt-flecked skin, split open with fluffy white insides and melting
    butter, heaped with glossy orange baked beans spilling onto the plate
    and a layer of melted grated cheese, a small side salad of leaves and
    tomato beside it. Steam rising. No foil, no sour cream."

---

## NATION CALLOUTS (Wales, Northern Ireland — emphasis, not structural files; see FILE ROLE & METHOD for why)

### Wales

- **Cawl** — Wales's national dish: a lamb-or-beef-and-root-vegetable
  broth-stew (leeks, potatoes, swedes, carrots), simmered slowly from a
  cheap bone-in cut, with leeks added late. Served in a warmed bowl,
  accompanied by crusty bread and a wedge of Caerphilly cheese — the
  cheese is traditionally crumbled directly into the hot broth at the
  table, where it softens and half-melts rather than being eaten
  separately, a real and checkable serving detail. [CONFIDENCE: HIGH]
  [SOURCE: [Visit Wales — Cawl: our traditional Welsh recipe](https://www.wales.com/visit/food-and-drink/welsh-recipes/cawl); [Lavender and Lovage — Welsh Cawl](https://www.lavenderandlovage.com/2018/02/welsh-cawl-lamb-vegetable-stew.html)]
  - *Composition & proportions (§4.7)*: one warmed bowl ~18–20 cm filled to
    ~2 cm below the rim; clear-ish broth ~40% of the surface, chunky lamb,
    potato, swede and carrot pieces ~2–4 cm ~45%, leek rings ~15%; a slice
    of crusty bread and a small wedge of Caerphilly (~6–8 cm, about the
    can's width) beside it, a little crumbled into the broth. Absent: cream,
    herb garnish, thick gravy-like stew. [EDITORIAL]
- **Welsh rarebit** — a thick, savory cheese sauce (cheddar, ale, mustard,
  often Worcestershire sauce, sometimes cayenne), spread on toasted bread
  and grilled/broiled until bubbling and blistered brown in patches.
  **Not a toastie** — it's open-faced, with a distinct poured/spread
  sauce layer visible on top, not a closed pressed sandwich or plain
  melted cheese slices. [CONFIDENCE: HIGH]
  - *Composition & proportions (§4.7)*: 1–2 slices of toast ~10–12 cm (about
    the can's height), open-faced, the cheese sauce covering ~90% of each
    slice ~0.5–1 cm thick and blistered brown in patches; on a small plate,
    nothing else. Absent: a top slice, melted cheese slices, salad garnish.
    [EDITORIAL]
- **Welsh cakes** — small, flat, griddle-cooked fruit-studded cakes
  (currants/sultanas), lightly spiced, dusted with sugar; a snack rather
  than a meal-occasion dish, cooked on a bakestone/griddle rather than
  baked in an oven — a genuine, checkable difference from a Western
  drop-scone or biscuit.
  - *Composition & proportions (§4.7)*: flat rounds ~6–7 cm across (about
    the can's width) and ~1 cm thick, 4–6 stacked or overlapping on a plate,
    currants as small dark flecks, a light sugar dusting. Absent: icing, jam
    and cream, domed scone shape. [EDITORIAL]
- Out of scope: laverbread (a seaweed dish, traditionally a breakfast
  item alongside bacon and cockles — excluded here on the same
  breakfast-exclusion logic as the full English).
- Architecture: stone terraces in valley towns, often built in rows
  stepped up a hillside, with slate roofs — a genuinely distinct visual
  from an English brick terrace, though this file treats it as an
  emphasis note rather than grounds for a separate file, given the thin
  everyday dish-set evidence above.
- Caricature-avoidance (editorial judgment): no daffodils, leeks,
  dragons, or sheep as default scene dressing for an ordinary Welsh
  domestic or restaurant scene.

### Northern Ireland

**See FILE ROLE & METHOD above for why NI is documented here, provisionally,
rather than promoted to its own file or deferred to a future Ireland file.**

- **Champ** — mashed potato infused with milk and butter, mixed with
  chopped spring onion/scallion, mounded in a bowl with a hollow pressed
  into the centre and a knob of butter melting into a golden pool at the
  centre — each forkful dipped into the butter well before eating, a
  real and specific serving custom, not just a garnish choice.
  [CONFIDENCE: HIGH] [SOURCE: aggregated across multiple Irish-food
  sources describing the identical well-and-butter serving convention]
  - *Composition & proportions (§4.7)*: one bowl ~15–18 cm of mash heaped
    ~5–6 cm high; green spring-onion flecks ~10–15% of the surface; one
    central well ~3–4 cm across holding a melting butter pool. Absent:
    gravy, herb sprig, a second topping. [EDITORIAL]
- **The "pastie supper" naming trap — a real, checkable confusion risk,
  not a minor curiosity.** A Northern Irish chip-shop "pastie" is a
  large-to-medium, battered, deep-fried round patty of minced pork,
  onion, and potato — shaped like a burger patty, then battered and
  deep-fried, sometimes historically dyed pink with cochineal — served
  with chips as a "pastie supper" or in a bread roll as a "pastie bap."
  It is **structurally and visually unrelated to the Cornish pasty**
  (above): it is round, battered, and deep-fried, not D-shaped,
  shortcrust-wrapped, and baked. Depicting one as the other would be a
  direct, checkable authenticity error. [CONFIDENCE: HIGH]
  [SOURCE: [Wikipedia: Pastie](https://en.wikipedia.org/wiki/Pastie)]
  - *Composition & proportions (§4.7)*: pastie supper: one round battered
    patty ~9–11 cm across and ~2–3 cm thick (wider than the can) on a heap
    of chips about equal in area, on paper or a plate; pastie bap: the patty
    in a soft round roll. Absent: shortcrust, a D shape, a crimp.
    [EDITORIAL]
- **Gravy chips** (chips with brown gravy) are a common NI order,
  alongside the same gravy-on-chips convention documented for North
  England above.
  - *Composition & proportions (§4.7)*: a regular portion of thick chips
    (~1–1.5 cm square, per the fish-and-chips entry) in a box or on a plate,
    brown gravy poured over ~60–70% of the top and pooling at the base.
    Absent: cheese curds (a poutine cue), herbs. [EDITORIAL]
- **Traybakes** such as "fifteens" (a no-bake refrigerator traybake made
  from digestive biscuits, marshmallows, and glacé cherries — a
  snack/dessert register) are real but thin at this file's scope.
  - *Composition & proportions (§4.7)*: fifteens: 4–6 slices ~2 cm thick cut
    from a log ~5–6 cm across, on a plate; pink-and-white marshmallow and
    red cherry pieces ~1 cm visible in a pale-brown crumb, coconut-rolled
    edge. Absent: icing drizzles, chocolate coating. [EDITORIAL]
- Architecture: red-brick terraces broadly similar to northern England's.
- Caricature-avoidance (editorial judgment): avoid defaulting every
  NI-set scene to a sectarian/"Troubles-era" visual frame — an ordinary
  NI chip shop, pub, or kitchen scene is the more representative default
  for this file's food-and-lunch/dinner/snack scope.

---

## GAP LOG

- **Composition & proportions blocks (added 2026-09-27,
  `country-file-schema.md` §4.7) are mostly editorial synthesis.** Piece
  sizes are sourced where tagged; counts and shares are reasoned from recipe
  quantities and serving norms, tagged [EDITORIAL], and should be checked
  against image tests before being treated as reliable.
- **The Cornish pasty's exact retail length (18–22cm) and the pub-pie/
  pie-and-mash sizes (12–15cm/10–12cm) remain this file's own reasonable
  estimates, not independently sourced measurements** — no Cornish Pasty
  Association or British Pie Awards dimensional specification was found
  via WebSearch this pass. Flagged as the top remaining §4.5 gap in this
  file; a future pass should try the Cornish Pasty Association's own
  member-standards documentation directly (likely blocked by this
  session's WebFetch restriction, but worth a targeted WebSearch attempt).
- **Northern Ireland's placement is provisional, not settled** — see
  FILE ROLE & METHOD's full reasoning. The market-structure evidence
  (Coca-Cola HBC's combined Ireland & Northern Ireland operation, distinct
  from CCEP GB) is real and checkable, but this file does not yet know
  whether TCCC's own internal market/OU structure treats "United Kingdom"
  as GB-only or GB+NI for planning purposes — that would settle the
  question more authoritatively than this file's own inference from
  public bottler-website copy. Flagged for a human reviewer with access
  to TCCC's actual market documentation.
- **No confirmed TCCC OU code for this market** — flagged in the front
  matter; do not guess one.
- **Meal deal "1985 Boots" claim, corrected but not fully resolved.**
  This pass found a more specific two-stage account (1985 sandwich
  standardization, 1999 the actual bundled meal-deal promotion), sourced
  to retail-history journalism rather than Boots' own corporate archive —
  treat as MEDIUM confidence, not settled fact.
- **Poppadom size (20–28cm) and sausage-roll thickness (~4cm) are general
  commercial-product estimates**, not dedicated dimensional sources.
- **"Salt and sauce" recipe details** (exact ratio, which specific brand
  of brown sauce is most commonly used) vary by source and by chip shop —
  treated here at the level of "what it is," not an exact recipe, since
  the exact ratio is genuinely locally contested even among chip-shop
  owners themselves per the sourcing found.
- **Beans-on-toast, spaghetti bolognese as a "naturalized British staple,"
  and the balcony-BBQ finding** are all carried at the confidence level
  stated in their respective entries; none received a dedicated
  additional verification pass beyond what's cited, since none turned up
  contested or surprising evidence worth a deeper dig.

- **Celebrations pass (2026-10-01) open items.** No FESTIVALS & SEASONAL
  OCCASIONS register exists yet; CELEBRATIONS & LARGE GATHERINGS stands in
  as the calendar index until one is written. The Christmas-table
  headcount (~8, ~11 in NI) comes from an unidentified commercial survey
  seen only in search summaries (LOW). Christmas dinner timing (1 to 4pm)
  has no YouGov figure behind it. Wedding guest numbers are Hitched data
  read via secondary wedding-industry sites. UK-specific Eid and Diwali
  table practice was not separately verified beyond lower-tier sources;
  it leans on the asia/ country files. Children's party and wedding-menu
  repertoires are general knowledge, MEDIUM at best.

- **Game-night pass (2026-10-01) open items.** Not verified: typical UK
  kick-off slots for tournament, Premier League and Six Nations games,
  including the Saturday 3pm broadcast blackout (model knowledge, LOW);
  the Six Nations home spread (pies, Scotch eggs, sharing board); the
  Christmas board-game spread; home video-game nights; board-game café
  prevalence and menus; prevalence of football betting. The crisps
  figure (72% of pub sport snacking) is trade-press (Bar Magazine). The
  41% home-with-family and pub-viewing figures are a Samsung consumer
  survey and a JOE report, not read at source.

- **Venue-profile pass, wave 1 (2026-10-01) open items.** Not verified
  at source (search summaries only, no pages read): kitchen-diner fittings
  (washing machine, kettle, radiator) rest on the existing ENVIRONMENT
  note, not a new source; the living-room profile had no new search;
  garden furniture and fence materials come from retail sites (commercial
  tier); the gastropub dog bowl, chippy pickled-egg jars, vitrolite range
  fronts as a common sight (not just a manufacturer offering) and the
  chippy regional variants are LOW. Interior photo review of real
  terraced kitchens, pubs and chippies would firm these up.

## CANDIDATE QUEUE

1. A dedicated pass on Cornish Pasty Association / British Pie Awards
   dimensional standards, if a working WebFetch or a different search
   angle can reach them.
2. Full entries for the scaffold's deprioritized items, on the same
   staging-relevance grounds it originally used: scone/cream tea (the
   Devon-cream-first vs. Cornwall-jam-first dispute is a textbook §4.6
   case, but it's a tea-anchored occasion where a Coca-Cola pairing is
   atypical — kept in the queue, not dropped); chip butty; pork pie
   (Melton Mowbray PGI); chicken-shop fried chicken (Gen Z-relevant).
3. A human/TCCC-documentation check on Northern Ireland's actual OU/
   market classification, to settle the provisional placement above.
4. Once `uk-scotland.md` and a future `spain.md`/`germany.md` exist,
   revisit the UK's own dinner-timing (6–7pm) against those countries'
   findings per `country-file-schema.md` §5.2 — the round 2 scaffold
   draft flagged this comparison as worth stating once Spain exists;
   this file states the UK-vs-Uruguay/US contrast now but the UK-vs-
   Spain contrast should be added when Spain is built.
5. Independent §8 audit of this file (and `uk-scotland.md`) before either
   is treated as fully done, per the project's standing practice.

6. Celebration dishes with no catalog entry yet (celebrations pass
   2026-10-01): roast turkey Christmas plate (with pigs in blankets,
   sprouts, parsnips, bread and cranberry sauce); pigs in blankets as a
   compact entry; a compact British festive sweets block (Christmas
   pudding, simnel cake, hot cross buns, parkin, toffee apples, treacle
   toffee); children's party buffet (sandwich triangles, fairy cakes);
   and a FESTIVALS & SEASONAL OCCASIONS register for this file.

7. Viewing and game-night foods with no catalog entry yet (game-night
   pass 2026-10-01): takeaway pizza as eaten at home (box, slices);
   crisps in a bowl as a compact entry (blank-packet rule); British
   sharing board / nibbles platter; toastie (café register); the festive
   sweets block in item 6 also serves the Christmas board-game entry.

## RESEARCH LOG

- **2026-09-24, verification-and-merge pass.** Input:
  `knowledge-base/scratch-uk-model-knowledge-draft.md` (a model-knowledge-
  only scaffold from a separate, tool-less Claude session — see that
  file's own header and `DECISIONS.md`'s "UK file: evaluating a
  model-knowledge-only scaffold" entry for its provenance). Method:
  WebSearch only — **WebFetch/direct page reads were blocked by network
  egress for every domain attempted, consistent with every prior research
  round on this project** (Uruguay, all ten completed US regional files).
  Every claim in the scaffold was independently re-searched, not carried
  over on trust; see the file's own entries for what was confirmed
  as-is, corrected, or dropped. Roughly 30 distinct WebSearch queries were
  run across this pass, covering: the structural/swap-test evidence for
  Scotland/Wales/Northern Ireland; the fish-and-chips origin dispute and
  Sephardic lineage; the polystyrene-ban dates for England and Scotland;
  the meal-deal, ploughman's-lunch, and Scotch-egg origin claims; PGI
  status and crimp-direction for the Cornish pasty and Cumberland
  sausage; Bangladeshi restaurant-ownership share and the balti's
  Birmingham origin; meal-naming and dinner-timing polling (YouGov);
  English housing-stock, garden-access, and young-adults-at-home
  statistics (English Housing Survey, ONS); balcony-BBQ fire-safety
  restrictions; UK cutlery convention; and Coca-Cola's own GB/NI bottler
  structure (which directly informed the Northern Ireland placement
  decision above). No subagents were used for this pass.
- **What was confirmed largely as the scaffold described it (roughly a
  dozen claims)**: the Malin-vs-Lees dispute's existence and genuine
  unresolvedness; the Sephardic origin of the fried-fish tradition; cod/
  haddock geography and its causal (spoilage-based) mechanism; Cornish
  pasty PGI status and crimp direction; Cumberland sausage PGI status;
  Welsh rarebit's definition; cawl's composition; champ's construction;
  the NI pastie/Cornish-pasty confusion trap; UK Continental-style
  cutlery; the Scotch egg's genuinely disputed origin; shepherd's-vs-
  cottage-pie naming.
- **What was corrected (specific figures the scaffold flagged as
  UV→LOW/MEDIUM, now replaced with a checked figure)**: the polystyrene-
  ban dates (England 1 Oct 2023, Scotland 1 June/12 Aug 2022 — the
  scaffold had these right in direction but unverified); the meal-deal
  "1985" origin (refined to a two-stage 1985/1999 account); the
  ploughman's-lunch marketing mechanism (Cheese Bureau/Milk Marketing
  Board, with a named 1950s originator); Bangladeshi-ownership share
  (upgraded from the scaffold's MEDIUM guess to a HIGH-confidence,
  multiply-corroborated ~80%+/7,200-of-8,500 figure); English housing-
  stock shares (replaced the scaffold's unranked guess with the actual
  2023-24 EHS percentages); young-adults-at-home and garden-access shares
  (replaced with exact ONS figures); balcony-BBQ restrictions (upgraded
  from the scaffold's own explicitly-flagged LOW guess to MEDIUM-HIGH,
  with real fire-safety-advisory sourcing); the 330mL can dimension
  (replaced the scaffold's own unverified ~11.5cm estimate with the
  now-verified 115.2mm figure already added to `coca-cola-guidelines.md`).
- **What was dropped or downgraded**: the scaffold's own "1985 Boots"
  single-date claim (superseded by the two-stage account above); no
  claims were found to be flatly wrong and removed outright this pass —
  the scaffold's own honesty discipline (real "sources to check" rather
  than fabricated citations) meant most leads panned out in the direction
  it expected, which is itself a finding worth recording: a well-
  disciplined unverified scaffold is a genuinely efficient starting point
  for a verification pass, not a wasted one.
- **Structural decision**: made in this pass, not inherited from either
  scaffold round — see FILE ROLE & METHOD above for the full reasoning
  and evidence (index + `uk-scotland.md`; Wales and Northern Ireland as
  callouts; Northern Ireland's placement flagged as provisional pending
  a human check against TCCC's actual market/OU documentation).
- **The chicken tikka masala cross-reference**: resolved by adding this
  file's own fuller Scottish-origin depth (cross-referencing
  `uk-scotland.md`) and adding one narrow cross-reference line to `us.md`
  pointing here — see DECISIONS.md for the exact edit made and why it was
  kept minimal.
- **2026-10-01 celebrations pass (schema §5.7):** 6 searches (YouGov
  Christmas dinner menu, Christmas timing/headcount, Bonfire Night foods,
  Easter lunch, Hitched wedding guest numbers, British Eid/Diwali family
  food). Added CELEBRATIONS & LARGE GATHERINGS after ENVIRONMENT & STAGING
  SCENES (no festivals register exists) with 8 entries: Sunday roast as
  the family gathering, Christmas dinner, Easter Sunday lunch, Bonfire
  Night, birthday party, wedding breakfast/evening reception, Eid
  al-Fitr/al-Adha family meal, Diwali family meal. WebSearch only; no
  pages read at source.
- **2026-10-01 game-night pass (schema §5.8):** built from the
  cross-market research notes (45 searches across all markets), 0 new
  searches. Added GAME NIGHT after CELEBRATIONS & LARGE GATHERINGS with
  four watch-party entries (England tournament night at home, Premier
  League weekend at home, Six Nations weekend, pub screening in a
  food-led form only) and three social game-night entries (Christmas
  board games, quiz night in hall or home form only, board-game café).
  Bingo and the pub quiz in its pub form are recorded as not staged.
- **2026-10-01 venue-profile pass, wave 1 (schema §5.9): 6 profiles, 6
  searches.** Added VENUE PROFILES after the QUICK-REFERENCE table:
  terraced or semi kitchen-diner, living room for takeaway or watch party,
  back garden patio, gastropub and traditional pub (both rewritten
  background-first from the 2026-10-01 pilots), chippy. WebSearch only;
  no pages read at source.
