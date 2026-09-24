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
and a drink — here, the classic red Coca-Cola can is an unusually natural
product fit — eaten on a park bench, a low wall, at a desk, or on a train
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
- Can fit: This is the single most natural Coca-Cola-in-frame scene in
  the file. Use the classic red Coca-Cola can (original, not Diet Coke or
  Coke Zero) at the 330mL UK dimensions above, or the 500mL PET bottle as
  the natural "meal deal" format per `coca-cola-guidelines.md` §4.3.
- Sources: [The Critic](https://thecritic.co.uk/the-real-deal-with-meal-deals/); [Wikipedia: Meal deal](https://en.wikipedia.org/wiki/Meal_deal)

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
- **Welsh rarebit** — a thick, savory cheese sauce (cheddar, ale, mustard,
  often Worcestershire sauce, sometimes cayenne), spread on toasted bread
  and grilled/broiled until bubbling and blistered brown in patches.
  **Not a toastie** — it's open-faced, with a distinct poured/spread
  sauce layer visible on top, not a closed pressed sandwich or plain
  melted cheese slices. [CONFIDENCE: HIGH]
- **Welsh cakes** — small, flat, griddle-cooked fruit-studded cakes
  (currants/sultanas), lightly spiced, dusted with sugar; a snack rather
  than a meal-occasion dish, cooked on a bakestone/griddle rather than
  baked in an oven — a genuine, checkable difference from a Western
  drop-scone or biscuit.
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
- **Gravy chips** (chips with brown gravy) are a common NI order,
  alongside the same gravy-on-chips convention documented for North
  England above.
- **Traybakes** such as "fifteens" (a no-bake refrigerator traybake made
  from digestive biscuits, marshmallows, and glacé cherries — a
  snack/dessert register) are real but thin at this file's scope.
- Architecture: red-brick terraces broadly similar to northern England's.
- Caricature-avoidance (editorial judgment): avoid defaulting every
  NI-set scene to a sectarian/"Troubles-era" visual frame — an ordinary
  NI chip shop, pub, or kitchen scene is the more representative default
  for this file's food-and-lunch/dinner/snack scope.

---

## GAP LOG

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
