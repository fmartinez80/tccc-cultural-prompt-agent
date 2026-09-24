STATUS: NOT A SOURCED DRAFT. This file is a model-knowledge-only scaffold produced by a different Claude session that had no working WebSearch/WebFetch access. Every claim in it is self-tagged [UV→expected-tier] (unverified) by its own author, with named "sources to check" that are leads, not citations that were actually read. It is preserved here verbatim as an input to a verification pass, not as KB content. Do not cite this file as a source for any claim; verify each claim independently via WebSearch and cite the real source found.

The original author supplied two overlapping drafts/rounds in the same message; both are preserved below in full, in the order given, since the second round revises some of the first round's numbers (notably the can-anchor approach) and structural recommendation. Reconcile between them using real research, not by picking one arbitrarily.

================================================================================
ROUND 1
================================================================================

Preliminary region-split analysis
This is from my own knowledge, not WebSearch-verified. It's meant to give a research pass hypotheses to test.

United Kingdom: likely one file, with explicit §4.6 variant callouts

Most lunch, dinner, and snack staples are UK-wide: fish and chips, pub mains, pies, the curry house, the sandwich meal deal, and the Sunday roast. Swapping settings mostly doesn't look wrong.
Genuine variants to document as choices:
Fish and chips: mushy peas vs. curry sauce vs. gravy (Northern England), and Edinburgh's "salt and sauce."
Chippy wrap vs. polystyrene or cardboard box vs. pub plate as serving formats.
Scottish, Welsh, and Northern Irish dishes (haggis with neeps and tatties, Scotch pie, cawl, Welsh rarebit, champ) are probably callout sections rather than separate files. Test this honestly: a Scotch pie in a Cornish seaside setting may fail the swap test.
Watch the scope: the full breakfast and Ulster fry are out.

Germany: the strongest split candidate of the three, but probably still borderline

Regional identity is strong:
Bavaria: Schweinshaxe, Brezn, beer-garden settings.
Swabia: Spätzle, Maultaschen.
Rhineland: Sauerbraten, often with a raisin gravy.
North: Fischbrötchen, Labskaus.
Berlin and the Ruhr: Currywurst, Döner as a de facto national snack.
A Fischbrötchen in a Munich beer garden plausibly does look wrong, so run the swap test seriously.
Currywurst is a textbook §4.6 case: skinned (ohne Darm, associated with Berlin) vs. with skin, sauce style, and pairing with Pommes vs. Brötchen.
Brand risk to flag: beer-garden and Imbiss scenes default to beer steins. Scope is Coca-Cola only, so prompt language may need to exclude beer glassware explicitly.
Weißwurst is traditionally a pre-noon dish, which is borderline for a no-breakfast scope. Worth a DECISIONS.md note.

Spain: likely one file, but the heaviest §4.6 load

Paella: Valenciana (chicken, rabbit, garrofó beans, no seafood) vs. marisco vs. mixta. This is contested and must be documented as an explicit choice. The serving vessel, the paellera, is sized by diameter, which suits §4.5's scale anchor. Verify the diameter-to-serving tables.
Tortilla de patatas: with vs. without onion is a well-known live dispute. Disclose it rather than pick a side. Runny vs. set centre is a second axis.
Tapas formats vary visibly by region:
Basque pintxos: on bread, often skewered, displayed on bar counters.
Granada and other Andalusian cities: a free tapa served with each drink.
Madrid: bocadillo de calamares.
These may need region-tagged serving-format entries even within one file.
Lighting and time-of-day: lunch around 14:00–16:00 and dinner around 21:00 or later affect ambient light in prompts. This is worth a note if the schema has a lighting field.

Candidate schema gaps to log in DECISIONS.md
These are guesses, since I haven't read the schema:

Whether §4.6 variant handling covers serving-format variants that are regional, as with pintxos.
How scope handles dishes whose traditional timing straddles breakfast and lunch, like Weißwurst.

[The author then received: DECISIONS (1).md, country-file-schema.md, uruguay (1).md, us-northeast.md, us.md, coca-cola-guidelines.md, market-roadmap.md, tableware-composition-reference.md — NOTE per the author's own later statement, only five of these eight actually came through; coca-cola-guidelines.md, tableware-composition-reference.md, and market-roadmap.md were NOT received in this exchange, despite being listed.]

I didn't receive three of the five files: coca-cola-guidelines.md, tableware-composition-reference.md §2, and market-roadmap.md. The UK draft below works around that and says so wherever it matters. Here's what you need to know before using it.

What this draft is
It's a scaffold, not a finished file. I have no WebSearch here, so every claim comes from my own knowledge and nothing has been verified. §6 has no confidence tier for that. Rather than assign HIGH, MEDIUM or LOW tags I haven't earned, every claim carries a [UV→X] tag: unverified, with the tier I expect it to reach if confirmed. Each entry also lists sources to check. These are real, named places to look, not citations I've read. A verification pass needs to run before this is merged as a finished file.
Scale anchor problem. The only can dimensions I've seen (4.83 in / 12.3 cm, from your DECISIONS log) are for the US 12 fl oz can. The standard UK, German and Spanish can is 330 ml, which is shorter, at roughly 11.5 cm. Your brand-file note explicitly says not to assume other formats share the US numbers, so this affects all three European markets. I've flagged it rather than written US dimensions into any UK prompt clause.
Plate sizes. Without tableware §2, the only vessel dimension I use is the 26–28 cm entree plate quoted in schema §4.5. Everything else is marked "lock from §2."
The file, a DECISIONS.md entry and a roadmap status line follow. Germany is next if you want me to continue in this mode.

---
country: united_kingdom
ou: NOT CONFIRMED — TCCC's OU code for the UK was not available in this session; flag for correction, do not guess
status: DRAFT — SCAFFOLD ONLY — MODEL-KNOWLEDGE, NO WEB RESEARCH PERFORMED — NEEDS VERIFICATION PASS, THEN SME/HUMAN REVIEW
research_method: Claude model knowledge only (no WebSearch/WebFetch available in the drafting session). Every claim is tagged UV (unverified). "Sources to check" lists name real candidate sources for the verification pass; none were consulted.
date_drafted: 2026-09-24
---

## METHOD NOTE — confidence tagging in this file (read first)

This file departs from `country-file-schema.md` §6 in one disclosed way. §6's
tiers (HIGH = 2+ independent sources, MEDIUM = 1, LOW = weak/contested) assume
sources were consulted. None were. Instead of assigning tiers this draft hasn't
earned, every claim carries:

- `[UV→HIGH]` — unverified; expected to reach HIGH easily (widely documented,
  multiple obvious sources). Verify quickly.
- `[UV→MEDIUM]` — unverified; expected to find one credible source, or
  details may shift.
- `[UV→LOW]` — unverified, and I am genuinely unsure. **Verify before use.
  Delete rather than soften if no source turns up.**
- `[EDITORIAL]` — a synthesis or judgment call, not a factual claim. This
  matches how `uruguay.md` tags its caricature-avoidance guidance.

The verification pass should replace each `UV` tag with a real §6 tag plus a
real citation, or delete the claim. It should not upgrade prose to sound more
settled than what it finds. Priority order for that pass: every `[UV→LOW]`
first, then every scale/dimension claim, then everything else.

---

## SUB-REGION TRIAGE DECISION

**Recommendation (pending human sign-off — see §7): NO structural file split.
One `united-kingdom.md`, with four labeled nation callouts (England, Scotland,
Wales, Northern Ireland) plus a North/South England emphasis note.**

This is the `us-northeast.md` "zones within one file" pattern at a lighter
weight. It is not the US multi-file pattern.

**The §1.1 swap test, applied honestly.** I checked where swapping one part of
the UK's norms into another would look visibly wrong to someone who knows the
place:

1. **Food.** The core lunch/dinner/snack repertoire is genuinely UK-wide:
   - fish and chips
   - the Sunday roast
   - pub mains (pies, bangers and mash)
   - the curry house
   - the supermarket sandwich meal deal
   - crisps and sausage rolls

   A curry house or meal-deal scene is not visibly wrong anywhere in the UK.
   [UV→HIGH] The regional differences are real but **dish-level**, and are
   handled by the dish-level form-variation mechanism (§4.2/§4.6):
   - Fish-and-chip condiments and frying fat vary North/South and by nation.
   - The Cornish pasty is PGI-bound to Cornwall.
   - The Scotch pie is Scotland-coded.
   - Pie and mash is East London-coded.

   None of these amounts to a different dish *set*. That is the same finding
   Uruguay's coastal/interior triage reached.
2. **Architecture — the strongest argument for a split.** It is still not
   strong enough:
   - Scottish urban tenements (sandstone, Glasgow/Edinburgh) and harled
     (roughcast) houses read differently from English red-brick terraces
     [UV→MEDIUM].
   - Welsh valley stone terraces and slate roofs read differently again
     [UV→MEDIUM].

   A Glasgow tenement kitchen staged as "generic UK" would look off to a Scot.
   But the interiors that dominate staging (kitchens, living rooms, pubs,
   takeaways) converge far more than exteriors do. So this is handled as
   per-nation environment callouts, not separate files. [EDITORIAL]
3. **Terminology is the one area where the swap test fails sharply, and it
   costs nothing to get right.** It matters for scene framing and captions,
   not visuals:
   - "tea" vs "dinner" vs "supper" for the evening meal
   - "fish supper" (Scotland, fish and chips)
   - "chippy" vs "chip shop"
   - "salt and sauce" (Edinburgh)

   [UV→HIGH for the tea/dinner North-South divide; UV→MEDIUM for the others]

**Why this needs explicit sign-off rather than being decided here:** Scotland,
Wales and Northern Ireland are nations, not regions, and there is an identity
dimension to calling them "callouts" that a food-evidence test alone shouldn't
settle. The reviewer may prefer nation-level files for organizational or
market reasons even though the food evidence doesn't strictly require it. Two
things to check: does TCCC treat GB and NI as one market? (The bottler
footprint may differ — **not confirmed**.) And does Northern Ireland belong
here or with Ireland? That second question is a real, open structural call.

**Scope (per task brief):** lunch, dinner, snacks. Breakfast excluded, which
rules out the full English, the Ulster fry and Lorne sausage. No beverages
other than Coca-Cola: tea, beer, Irn-Bru and squash are out of scope as
subjects, and see the VISUAL & PLATING beverage-leak note.

---

## TRUSTED CONTENT

*(Heading kept for schema consistency. In this draft, "trusted" means
"structured for verification," not verified.)*

### REGION-WIDE NORMS

- **Meal naming is a real class and geography marker.**
  - In much of northern England, Scotland and working-class usage generally,
    "dinner" is the midday meal and "tea" is the evening meal.
  - In southern and middle-class usage, "lunch" and "dinner"; "supper" is a
    later or lighter evening meal.
  - Scenes don't change visually, but captions, briefs and any dialogue should
    match the setting.

  [UV→HIGH] Sources to check: YouGov polling on tea/dinner/supper usage;
  Wikipedia: Tea (meal).
- **UK "chips" are thick-cut and "crisps" are what the US calls chips.** This
  is a translation trap for any brief written in US English. [UV→HIGH]
- **Sunday lunch (the roast) is a lunch-occasion meal.** It is typically eaten
  early-to-mid afternoon, and pubs serve it as a Sunday-only menu. It falls
  inside this file's "lunch" scope. [UV→HIGH]
- **Condiments are paired with specific dishes, not used generically.** Each
  pairing is a checkable authenticity marker:
  - horseradish sauce with roast beef
  - mint sauce with lamb
  - apple sauce with pork
  - malt vinegar and salt on chips
  - brown sauce or ketchup with sausages and chips
  - English mustard with ham, sausages and pies

  [UV→HIGH]
- **Condiment service format.** At home, condiments come from the bottle or
  jar on the table, and gravy from a gravy boat or jug. In pubs they come in
  sachets or small ramekins brought to the table. Chip shops have shaker salt
  and a vinegar bottle on the counter, applied by the server if asked.
  [UV→MEDIUM]
- **Continental cutlery grip** (fork in left hand, tines down; knife in right)
  is the UK norm, with a distinctively British "fork tines-down, food balanced
  on the back" habit for peas. [UV→MEDIUM] **Utensils are left together,
  parallel, at roughly 6:30 on the plate to signal finished.** [UV→MEDIUM]
- **Trademark genericization list for this file (§7.5).** These are real
  brands often cited as the evidence for a register. Name them in citations
  only; never name or depict them in a prompt.

  | Brand | Prompt language |
  |---|---|
  | Greggs | "a high-street bakery chain" |
  | Tesco / Boots meal deal | "a supermarket meal deal" |
  | Wetherspoons | "a large chain pub" |
  | Nando's | "a peri-peri chicken restaurant" |
  | Walkers | "a packet of crisps, blank or blurred packaging" |
  | HP | "brown sauce" |
  | Bisto | "gravy" |
  | Branston | "brown pickle/chutney" |
  | Heinz | "baked beans" |
  | Colman's | "English mustard" |

  The same applies to named chip shops, pie-and-mash shops and football
  grounds.

### VISUAL & PLATING NORMS

- **Palette.** The comfort-food core is golden-brown and beige:
  - battered fish
  - chips
  - pastry
  - roast potatoes
  - gravy

  The main color relief is bright green (mushy peas, garden peas) and roasted
  orange (carrots). An all-beige plate is authentic, not a styling failure.
  Over-garnishing it with microgreens or colourful sauces reads as
  gastropub-modern, which is a real register but not the default. [EDITORIAL,
  grounded in the dish entries below]
- **Texture is the most checkable detail across this cuisine (§4.5 texture
  rule):**
  - batter should be crisp, blistered and irregular, not smooth
  - roast potatoes should be craggy and crisp outside, fluffy inside
  - chip-shop chips should be soft, pale-golden and slightly limp, not crisp
    shoestring fries
  - pie pastry should be flaky or glossy egg-washed, not matte

  [UV→HIGH for each individually; see entries]
- **Gravy is thick, glossy and brown.** It is poured over or pooled, not a thin
  jus drizzle, except in gastropub-modern plating. [UV→HIGH]
- **Portions are generous and plates are full**, especially for Sunday roasts
  and pub mains, where food often reaches the rim. Negative space and
  fine-dining composition read as restaurant-modern. [UV→MEDIUM]
- **Beverage-leak risk, specific to UK settings.** Pub, beer-garden and
  curry-house scenes carry a strong training prior toward pint glasses, ale
  pumps and lager bottles. Scope is Coca-Cola only. Prompts for these
  registers should explicitly say no beer, pint glasses or other drinks on the
  table, and keep bar-top pump clips blurred and unbranded. Background taps
  are a legibility problem as well as a scope problem. [EDITORIAL — see Gap
  Log schema recommendation]
- **Chalkboards are everywhere in UK pubs and cafés** (specials boards, menus).
  Under the no-legible-text rule they must be blank, turned away or out of
  focus. This is a high-frequency trap for this market specifically.
  [EDITORIAL]

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **Climate and light.** Temperate maritime: frequently overcast, with soft,
  diffuse, low-contrast light and frequent rain.
  - Harsh, saturated, high-sun light reads wrong for most of the year.
  - A bright summer garden scene is authentic but seasonal.
  - Daylight varies strongly with latitude and season: long summer evenings
    (sunset after 21:00 in June, later in Scotland) and short winter days
    (dark before 16:00–16:30 in December).
  - The same 18:30 dinner is daylit in June and fully artificial-lit in
    January.

  [UV→HIGH] Sources to check: Met Office climate summaries; timeanddate.com
  sunrise/sunset tables.
- **Housing stock.**
  - England's single most characteristic type is the terraced house: Victorian
    and Edwardian red-brick terraces are dense in cities and northern towns.
  - Semi-detached houses (inter-war and post-war suburbs) and flats (converted
    houses, purpose-built blocks, new-build developments) are major categories
    alongside it.
  - Detached houses are a minority and skew rural/affluent.

  [UV→MEDIUM for the ranking; exact shares LOW until checked] Source to check:
  English Housing Survey (DLUHC/MHCLG) dwelling-type tables. Scotland,
  Wales and NI have their own surveys.
- **Kitchens are small by US standards.** Galley kitchens and "kitchen-diners"
  (a small table in the kitchen) are common. Islands with bar stools are a
  newer-build or renovation feature, not the default. [UV→MEDIUM]
- **Distinctly British kitchen details a model is unlikely to add unprompted.**
  These are cheap, strong authenticity signals:
  - a front-loading washing machine plumbed into the kitchen under the counter
  - an electric kettle on the worktop
  - switched three-pin wall sockets
  - a radiator under the window
  - uPVC double-glazed or sash windows
  - a small, often narrow back garden visible through the window

  [UV→HIGH for washing machine in kitchen and electric kettle; UV→MEDIUM for
  the rest] Per §7.5, pick one or two per scene, not all of them.
- **Materials.**
  - exterior: red or London stock brick (England), sandstone/harling
    (Scotland), stone and slate (Wales)
  - interiors: laminate or wood worktops, tiled splashbacks, often carpeted
    living rooms

  [UV→MEDIUM]
- **Caricature-avoidance guidance [EDITORIAL].** Avoid "tourist Britain" in
  both directions.
  - **Heritage kitsch:** Union Jack bunting, red phone boxes, black cabs,
    Big Ben and Tower Bridge skylines, bowler hats, royal memorabilia, a
    country-house dining room, twee "olde tea shop" chintz.
  - **Grim-realism cliché:** rain-lashed council estates and grey misery for
    every non-affluent scene.
  - Ordinary British homes are modest, a bit cluttered, and comfortable.
  - Do not anchor scenes to London by default. Much of the market lives
    elsewhere, and the northern-town terrace is as representative as a London
    flat.
  - Recognizable public landmarks aren't the privately-owned IP that §7.5's
    trademark rule targets. They are still over-specific anchors in the same
    way Pocitos was for Uruguay — use only if a brief names the place.

#### Scenario: Casual lunch at home, indoors — 1 person

- **Likely setting — three co-equal options:**
  - a kitchen-diner table in a terraced or semi-detached house
  - a flatshare kitchen (see Gen Z note below)
  - a small one-bed flat's sofa or coffee table

  A soup or sandwich lunch eaten at the counter is equally plausible.
  [EDITORIAL]
- **Likely dishes:** a sandwich, a jacket potato, beans on toast (lunch
  register, not breakfast), soup and bread, or leftovers. Everyday and low
  effort. [UV→MEDIUM]
- **Gen Z/young-adult lens (§5.3).**
  - Private renting in shared houses and flats (HMOs) is a major young-adult
    tenure.
  - A large share of young adults live with parents.
  - Either is at least as plausible as an owner-occupied kitchen for a young
    cast.

  [UV→MEDIUM; exact shares LOW] Sources to check: ONS "Young adults living
  with their parents"; English Housing Survey private rented sector reports.

#### Scenario: Casual lunch at home, indoors — 2 people

- Small kitchen-diner table, two place settings, everyday crockery, often
  mismatched mugs in the background (not used as a beverage in frame).
  Individually plated.
- The co-equal registers are:
  - a couple at a kitchen-diner table
  - a parent and child
  - two flatmates at a shared-kitchen table

  [EDITORIAL]

#### Scenario: Casual lunch at home, indoors — 3 people

- Same register, scaled up. A Sunday roast is the strongest culturally-anchored
  multi-person home lunch (see dish entry).
  - Food is served from shared dishes in the middle of the table: roasting
    tin or platter, veg dishes, gravy boat.
  - Everyone has an individual plate.

  [UV→HIGH]
- Equally plausible: three flatmates with a shared takeaway spread for a
  weekend lunch. [EDITORIAL]

#### Scenario: Dinner at home, indoors

- **Timing.** The evening meal is typically early evening, around 18:00–19:30.
  That is far earlier than Uruguay's 21:30+ and much closer to the US pattern.
  Lighting depends on season (see climate note). [UV→MEDIUM] Source to check:
  ONS Time Use Survey. This contrast should also be stated against Spain once
  `spain.md` exists (§5.2).
- **The Friday-night takeaway is a documented national ritual.**
  - Fish and chips, curry or Chinese, eaten from containers or tipped onto
    plates.
  - Setting: a sofa and coffee table in front of the TV, or the kitchen table.
  - This is as authentic as a set table.

  [UV→MEDIUM for "ritual" framing]
- **Everyday home dinners:** spaghetti bolognese (a thoroughly naturalized
  British staple), shepherd's/cottage pie, bangers and mash, a curry, a stir
  fry. [UV→MEDIUM]

#### Scenario: Meal outdoors at home

- **Back garden with patio or decking.** Seating is a garden table, often
  rattan-effect or wooden, with a parasol. The lawn is often small.
  [UV→MEDIUM] Most houses have a private garden, while flats generally do
  not. [UV→MEDIUM; share LOW] Source to check: ONS access-to-garden
  statistics.
- **The summer barbecue is a real ritual, but weather-contingent and
  seasonal.**
  - Grills: charcoal kettle and gas are both common, and disposable foil-tray
    barbecues are common in parks.
  - Food: sausages, burgers, chicken, halloumi.
  - Plates: paper or everyday.
  - An overcast "we're doing it anyway" sky is more British than blazing sun.

  [UV→MEDIUM for grill types; EDITORIAL for the sky note]
- **Flats.** A balcony meal with no grill is the safer default. Tenancy
  agreements and building rules commonly prohibit balcony barbecues, and
  post-Grenfell fire-safety attention to balconies has increased. This parallels
  the US balcony-grill finding but has not been checked: specific UK rules
  were not verified. [UV→LOW]

#### Scenario: Meal on the go — 1 person

- **The supermarket/high-street meal deal is the defining UK on-the-go lunch.**
  The UK contrasts with both Uruguay ("grab-and-go barely exists") and the US
  (car-centric drive-thru): it is a pedestrian culture.
  - A triangle-pack sandwich, a packet of crisps and a drink.
  - Here the drink is the classic red Coca-Cola can, which is an unusually
    natural product fit.
  - Eaten on a park bench, a low wall, a desk, or a train seat.

  [UV→HIGH for meal-deal ubiquity; EDITORIAL for "pedestrian" framing]
- **A bakery-chain sausage roll or pasty in a paper bag.** [UV→HIGH]
- **Chips from the chippy eaten outdoors from the paper,** classically on a
  seafront wall or bench. Stage resting on the wall or bench, not in hand
  (§7.5 anti-hand-holding rule). [UV→HIGH]
- **Late-night kebab and chicken-shop food** (kebab-shop doner with chips;
  fried chicken and chips in a cardboard box) is real and Gen Z-relevant. It
  is a late-night register, not a daytime lunch default. [UV→MEDIUM]

#### Scenario: Away from home — 1 person at a restaurant/café

- **Solo pub lunch at a small table or the bar.** Common and unremarkable.
  Watch the beverage-leak note. [UV→MEDIUM]
- **Café/sandwich-shop lunch.**
  - An independent café (formica or wooden tables) or a high-street coffee
    chain (genericize).
  - The traditional "greasy spoon" caff is real but breakfast-leaning. Use it
    for a lunch scene only with lunch dishes: a jacket potato or chips with a
    main.

  [UV→MEDIUM]
- **Traditional pie-and-mash shop interior (East London-coded).** A very
  distinctive and well-documented register. Genericize any real shop.
  - white/green tiled walls
  - marble-topped tables
  - wooden bench seating
  - mirrors

  [UV→HIGH]

#### Scenario: Away from home — 2–3 people at a restaurant/café

- **The pub is the default UK group-meal venue** [UV→HIGH]. Two coexisting
  registers, offered as a choice (§4.6):
  - **Traditional pub:** dark wood, patterned carpet, upholstered banquettes,
    brass fittings, a fireplace, low ceilings/beams in older buildings.
  - **Gastropub:** painted walls in muted heritage colors, scrubbed wooden
    tables, mismatched chairs, food on boards and slates.
- **Curry house.**
  - Old-school: dark red/burgundy décor, flock wallpaper, white tablecloths,
    folded napkins in glasses.
  - Modern: minimalist, bright.
  - Poppadoms with a pickle/chutney tray are the opener.

  [UV→MEDIUM for décor]
- **Chain casual dining and peri-peri chicken restaurants** are the Gen Z and
  young-group default alongside pubs (genericize names). [UV→MEDIUM]
- **Fish-and-chip restaurant (sit-in chippy).** Café-style tables, fish served
  on plates with bread and butter on the side. Northern-coded. [UV→MEDIUM]

---

## NATION & REGIONAL CALLOUTS (emphasis, not structural splits)

### England — North/South emphasis
- North: stronger chip-shop culture, fish often fried in beef dripping
  (Yorkshire especially), and more likely:
  - haddock over cod
  - gravy and curry sauce on chips
  - "scraps"/"bits" (loose fried batter)
  - "tea" as the evening meal

  [UV→MEDIUM each]
- South: vegetable-oil frying, cod dominant, "dinner" as the evening meal.
  London adds pie and mash and the densest chicken-shop scene. [UV→MEDIUM]
- **Cornwall/Devon:** the Cornish pasty (PGI). The scone jam/cream-order
  dispute is noted in the Candidate Queue as a deprioritized entry.

### Scotland
- **Fish supper** means fish and chips (a "single" is chips alone). Edinburgh
  is known for **"salt and sauce"**: brown sauce thinned with vinegar,
  replacing plain vinegar. [UV→HIGH for fish supper; UV→MEDIUM for salt and
  sauce]
- **Scotch pie** (see entry) as football-ground and bakery snack.
- **Haggis, neeps and tatties.** Burns Night (25 January) is special-occasion.
  Haggis also appears year-round in pubs and chip shops. [UV→HIGH]
- **Architecture.** Sandstone tenements with shared closes (Glasgow,
  Edinburgh); harled houses; slate roofs. This is the strongest visual
  divergence in the UK — a Scottish-set home scene should not default to an
  English brick terrace. [UV→MEDIUM]
- **Caricature avoidance [EDITORIAL].** No tartan, bagpipes, Highland-cow or
  "deep-fried Mars bar" shorthand for ordinary urban scenes.

### Wales
- **Cawl** (lamb and vegetable broth-stew); Welsh rarebit (a savoury cheese
  sauce on toast, not a cheese toastie); **Welsh cakes** (griddle cakes,
  snack). Laverbread is breakfast-leaning and out of scope. [UV→HIGH for
  existence; visual details MEDIUM]
- **Architecture.** Stone terraces in valley towns (rows stepped up a
  hillside); slate roofs. [UV→MEDIUM]
- **Caricature avoidance [EDITORIAL].** No daffodils, leeks, dragons or sheep
  as default scene dressing.

### Northern Ireland
- **Champ** (mashed potato with spring onion, butter pooled in a well).
  [UV→HIGH]
- **Pastie supper:** an NI chip-shop "pastie" is a battered, fried minced-pork
  patty, **not** a Cornish pasty. This is a real confusion trap. [UV→MEDIUM]
- **Gravy chips** (chips with gravy) are a common NI order. [UV→MEDIUM]
- **Traybakes** such as "fifteens" are a snack. [UV→MEDIUM]
- **Architecture.** Red-brick terraces broadly similar to northern England.
  [UV→MEDIUM]
- **Open structural question:** whether NI belongs in this file or with an
  Ireland file. See the triage section. Not decided here.

---

## DISH CATALOG

*Scale fields follow §4.5. Can anchor: the classic red Coca-Cola can
(original, not Diet Coke or Coke Zero), 330 ml, ~11.5 cm tall × ~6.6 cm
diameter [UV→MEDIUM — the 330 ml dimensions are NOT in
`coca-cola-guidelines.md` §3 as last seen; see Gap Log]. Entree plate fallback:
26–28 cm per schema §4.5's own example. All other vessel dimensions must be
locked from `tableware-composition-reference.md` §2, which was not available
in this session.*

#### Dish: Fish and chips
- **Category:** Everyday, with a Friday-night ritual layer.
- **Cuisine lineage:** Native British. Fried fish is traced to Sephardic
  Jewish immigrant tradition in London; the chips half to northern England.
  **Contested first-shop claim:** Joseph Malin (London, c. 1860) vs John Lees
  (Mossley, Lancashire, c. 1863). This is a North/South dispute — disclose
  both, pick neither. [UV→HIGH that the dispute exists]
- **Regional form variation:** Form-changing on condiments and fat; the core
  form is uniform. Options to offer (§4.6), not silently default:
  - **Fish:** cod (England, South-leaning) vs haddock (Scotland, North East,
    Yorkshire). [UV→MEDIUM]
  - **Condiment:** salt and malt vinegar (UK-wide default); salt and sauce
    (Edinburgh); gravy or curry sauce (North, NI). [UV→MEDIUM]
  - **Side:** mushy peas (strongly Northern and Midland-coded, but UK-wide);
    "scraps"/"bits" (North). [UV→MEDIUM]
  - **Default when unspecified:** cod, salt and vinegar, with a pot of mushy
    peas optional. [EDITORIAL fallback, not a sourced claim]
- **Serving format — three genuinely different presentations (§4.4):**
  1. **Takeaway:** wrapped in white paper, or in a cardboard box/tray, with a
     small wooden two-prong chip fork. Newspaper wrapping is historical, not
     current [UV→MEDIUM]. **Expanded-polystyrene boxes are now banned in
     England (from Oct 2023) and Scotland (from 2022)**, so a polystyrene
     clamshell is an outdated or incorrect detail for a current scene
     [UV→MEDIUM — verify dates and scope].
  2. **Sit-in chippy/café:** on a plate, often with sliced white bread and
     butter on the side. [UV→MEDIUM]
  3. **Pub/gastropub:** on a large plate or oval platter. Lemon wedge,
     tartare sauce in a ramekin, garden or mushy peas in a ramekin.
     Gastropub-modern may serve chips in a mini fry-basket or tin cup — a real
     register, not the default. [UV→MEDIUM]
- **Condiment service:** takeaway condiments are applied by the server at the
  counter. At a table, a vinegar bottle and salt shaker sit on it.
- **Utensils:** takeaway — wooden fork or fingers; plated — knife and fork.
- **Visual/plating characteristics:**
  - **Batter:** deep golden, crisp, blistered and irregular, with craggy
    edges and bubbles. Thicker than a tempura coating, not smooth or
    breadcrumbed.
  - **Fish interior (if broken):** bright white, large moist flakes.
  - **Chips:** thick-cut, pale-to-medium golden, soft and slightly limp,
    often vinegar-damp — **not** crisp, thin, uniform fries. The fry-vs-chip
    confusion is the single most likely model error for this dish.
  - **Mushy peas:** thick, bright-to-olive green, lumpy purée (not whole peas).
  - **Curry sauce:** smooth, yellow-brown, glossy.

  [UV→HIGH for batter and chips; UV→MEDIUM for pea color — some chip shops'
  peas are artificially colored, so verify]
- **Real-world scale:**
  - Fillet: a "regular" is roughly 20–25 cm long and a "large" can overhang a
    26–28 cm plate. It is visibly longer than the can is tall — roughly 1.5–2×
    the 330 ml can's height.
  - Chips: roughly 1–1.5 cm square in cross-section and 6–10 cm long; each
    visibly thicker than a finger.

  [UV→LOW — verify with NFFF or chip-shop portion data; do not use until
  checked]
- **Common confusion:** US "fish and chips" with thin fries; beer-battered
  gastropub fish (a valid variant but lighter/darker, so offer as a choice);
  breaded fish fingers (not the same dish).
- **Sources to check:** Wikipedia: Fish and chips; National Federation of Fish
  Friers (NFFF); Seafish (UK public body); DEFRA guidance on the single-use
  plastics ban (England); Scottish Government equivalent.

#### Dish: Sunday roast
- **Category:** Weekly ritual lunch, at home or in the pub.
- **Cuisine lineage:** Native British.
- **Regional form variation:** None structurally. The meat choice is the
  option set (§4.6), not a regional variation:
  - **Roast beef** with Yorkshire pudding and horseradish (the "classic" pairing).
  - **Roast chicken** (arguably the most common at home) with stuffing.
  - **Roast lamb** with mint sauce.
  - **Roast pork** with crackling and apple sauce.
  - **Default when unspecified:** roast beef with Yorkshire pudding
    [EDITORIAL]. Chicken is at least as common at home, so offer it.

  Yorkshire puddings are now commonly served with every meat in pubs.
  Traditionalists object — a live dispute to disclose, not a rule.
  [UV→MEDIUM]
- **Serving format:** Plate. At home, family-style from shared dishes; in pubs,
  pre-plated.
- **Components:**
  - roast potatoes (non-negotiable)
  - two or three vegetables (carrots, peas, green beans, cabbage/greens,
    broccoli, parsnips)
  - gravy
  - cauliflower cheese (common optional)

  [UV→HIGH]
- **Serving vessel:** entree/dinner plate (26–28 cm); gravy boat or jug on the
  table. At home, a roasting tin or carving board plus vegetable dishes.
- **Visual/plating characteristics:**
  - **Roast potatoes:** craggy, deep-golden, crisp exterior with fluffy white
    interior — **not** smooth, pale, boiled-looking potatoes (a top texture
    check). [UV→HIGH]
  - **Yorkshire pudding:** a tall, puffed, hollow-centred cup with crisp,
    deep-brown, irregular risen edges and a soft, slightly eggy base, often
    filled with gravy. [UV→HIGH]
  - **Beef:** sliced thin, pink to medium in the centre, browned edge.
  - **Crackling:** blistered, puffy, golden, hard-crisp strips.
  - **Gravy:** thick, glossy, brown, poured across.
  - **Plate:** full to the rim — abundance is part of the look.
- **Real-world scale:** Individual Yorkshire pudding roughly 9–12 cm across at
  the rim and 5–8 cm tall; noticeably less than the can's height, and roughly
  the can's diameter or a bit wider across. Roast potato pieces are
  golf-ball to egg-sized. The plate is full, with food to or over the rim of a
  26–28 cm plate. [UV→LOW for Yorkshire dimensions — verify] (Aside: a widely
  repeated 2008 Royal Society of Chemistry statement said a Yorkshire pudding
  should be at least 4 inches tall. [UV→LOW] That is a novelty claim, not a
  styling standard — don't use it as the scale anchor.)
- **Common confusion:** US Thanksgiving plates (different sides — no Yorkshire
  pudding or roast potatoes as standard); popovers (a similar batter, but a
  different vessel and context).
- **Sources to check:** Wikipedia: Sunday roast; Wikipedia: Yorkshire pudding
  (Hannah Glasse 1747 naming); YouGov roast-dinner polling.

#### Dish: Pies — pub pie (steak and ale / chicken and mushroom) and pie and mash
- **Category:** Everyday. Pub staple; East London institution.
- **Cuisine lineage:** Native British.
- **Serving-format and definitional choice (§4.6), disclosed rather than
  resolved:**
  - **A "proper pie"** is fully enclosed in pastry — base, sides and lid.
  - **A casserole topped with a puff-pastry lid**, served in a dish, is widely
    served as a "pie" in pubs, and is loudly contested as "not a real pie."
    This is a well-publicized popular debate.
  - Both exist. Offer both; don't default silently. [UV→MEDIUM]
- **Accompaniments:** mash or chips, peas, gravy.
- **Visual (enclosed pie):** tall-sided, glossy egg-washed golden shortcrust or
  puff lid; cut open to reveal dark, glossy chunks of beef in thick gravy.
- **Visual (puff-lid):** an individual ceramic pie dish or casserole with a
  risen, flaky, golden puff lid, stew visible at the edge.
- **Sub-variant: London pie and mash** (East London-coded). [UV→HIGH for
  overall form]
  - A small minced-beef pie.
  - Mashed potato spread in a smooth smear across one side of the plate with
    the back of a spoon — a checkable detail. [UV→MEDIUM]
  - Covered in bright-green, thin, glossy parsley "liquor" (traditionally made
    with eel stock).
  - Optional jellied or stewed eels; chilli vinegar on the table.
  - Eaten in a tiled shop (see environment).
- **Real-world scale:** Individual pub pie ~12–15 cm across, filling most of
  the plate's centre with sides around it [UV→LOW]. Pie-and-mash shop pie
  ~10–12 cm, oval or round [UV→LOW]. Lock the plate from §2.
- **Common confusion:** US pot pie; Australian meat pie (similar enclosed form —
  the confusable pair to verify distinctions against); Scotch pie (see below).
- **Sources to check:** Wikipedia: Pie and mash; British Pie Awards
  (Melton Mowbray) for the enclosed-pie definition.

#### Dish: Cornish pasty
- **Category:** Everyday. Lunch and on-the-go.
- **Cuisine lineage:** Native British (Cornish).
- **Regional form variation:** Form-changing and legally protected. PGI status
  (2011): must be made in Cornwall to be sold as "Cornish."
  - D-shape, crimped on one side (not across the top).
  - Filling: roughly diced or sliced beef, swede (called "turnip" in Cornwall),
    potato, onion, with peppery seasoning, sealed raw and baked.

  [UV→HIGH for PGI, shape and filling] The side-crimp vs top-crimp question is
  a Cornwall-vs-Devon identity marker — top-crimped is claimed as Devonian or
  generic. [UV→MEDIUM]
- **Serving format:** Handheld, in a paper bag. Also plated with chips/gravy in
  cafés (less traditional).
- **Visual:**
  - golden, glossy egg-washed shortcrust
  - thick rope-like crimp along the curved edge
  - chunky vegetable and beef filling visible if broken, peppery and not saucy

  **Not** a flaky puff-pastry turnover; **not** an empanada, which is smaller
  and has a fork-pressed or repulgue edge.
- **Real-world scale:** A standard pasty is roughly 18–22 cm long and noticeably
  longer than the can is tall [UV→LOW — verify with Cornish Pasty Association
  specs].
- **Common confusion:** Empanada; NI "pastie" (a battered pork patty — unrelated);
  a generic "hand pie."
- **Sources to check:** Cornish Pasty Association; DEFRA / UK GI register;
  Wikipedia: Pasty.

#### Dish: Sausage roll (and bakery-chain snack register)
- **Category:** Everyday snack.
- **Form:** Pork sausage meat in puff pastry.
- **Variants to offer:**
  - bakery-chain rolls: paper bag, fairly uniform, flaky
  - homemade/party rolls: small, cut, on a platter
  - gastro/deli rolls: larger, hand-made, often with seeds on top
  - vegan versions: now mainstream

  [UV→HIGH]
- **Visual:**
  - golden, laminated, flaky puff with visible layers
  - egg-wash gloss
  - diagonal knife-score marks on top (common)
  - cut end shows a pale-pink-to-grey sausage-meat cylinder
  - pastry flakes scattered on the surface (texture detail)
- **Real-world scale:** Bakery roll roughly 12–15 cm long × 4–5 cm thick; about
  the can's height in length, a bit wider than half the can's diameter
  [UV→LOW]. Party rolls ~4–6 cm.
- **Sources to check:** Wikipedia: Sausage roll; UK trade press on bakery-chain
  volumes (genericize the chain in prompts).

#### Dish: Meal-deal sandwich (triangle pack) + crisps
- **Category:** Everyday. The defining on-the-go lunch.
- **Cuisine lineage:** Native British. The pre-packed sandwich was a UK
  supermarket development [UV→MEDIUM]. **"Meal deal" origin commonly attributed
  to Boots in 1985 [UV→LOW — verify].**
- **Form:** Two triangles of sandwich (a square sandwich cut diagonally) in a
  clear-fronted cardboard/plastic wedge pack.
- **Common fillings:**
  - prawn mayo
  - cheese and pickle
  - egg and cress
  - chicken and bacon
  - BLT
  - tuna and sweetcorn

  [UV→MEDIUM]
- **Serving format:** The pack itself, or unpacked on a desk or bench. Crisps in
  a packet.
- **Visual:**
  - soft sliced bread (white or brown/seeded) with a neat diagonal cut face
  - filling visible at the cut, pressed thin, not piled high (the opposite of
    a NYC deli sandwich — a checkable contrast with `us-northeast.md`)
  - crisps: thin, flat-to-curled, pale golden
- **Text rule:** supermarket packs and crisp packets are dense with legible
  branding. **Render the pack blank or blurred, or stage the sandwich
  unpacked on its opened wedge.** Walkers' famously "swapped" pack colors
  (cheese & onion blue, salt & vinegar green) are a brand detail, not
  something to reproduce. [UV→MEDIUM]
- **Real-world scale:** Each triangle has roughly 10–12 cm sides (a square slice
  cut diagonally) and is 2–3 cm thick. Each triangle's long edge is close to
  the can's height [UV→LOW — verify standard sliced-bread dimensions].
- **Can fit:** This is the most natural Coca-Cola-in-frame scene in the file.
  Use the classic red Coca-Cola can (original, not Diet Coke or Coke Zero). In
  the UK market the prior toward Diet Coke/Zero may be stronger than in the US
  because of their large UK share — a hypothesis to test, not a finding.
- **Sources to check:** Wikipedia: Meal deal; British Sandwich & Food to Go
  Association.

#### Dish: Curry-house dishes (chicken tikka masala, korma, balti, poppadoms)
- **Category:** Everyday. Friday-night takeaway and group dinner out.
- **Cuisine lineage:** British Indian/British Bangladeshi. A large majority of
  UK "Indian" restaurants are reported to be Bangladeshi- (largely
  Sylheti-)owned [UV→MEDIUM]. **Chicken tikka masala:** Glasgow origin claim
  (Ali Ahmed Aslam, Shish Mahal, 1970s) vs Delhi counter-claim, and Robin
  Cook's 2001 "national dish" speech — already documented in `us.md`'s
  Indian-American entry. Cross-reference it; don't duplicate. **This file is
  arguably the more natural home for that dispute; flag for reconciliation.**
- **Regional form variation:** The **balti** is Birmingham-coded (1970s–80s).
  - Cooked and served in the same thin pressed-steel bowl, with two small
    handles.
  - Often with a very large shared "table naan" hung or propped up.

  [UV→MEDIUM] Offer as a choice for a Birmingham or Midlands brief.
- **Serving format:**
  - Opener: poppadoms stacked on a plate, with a condiment tray/carousel
    (mango chutney, lime pickle, mint-yogurt raita, diced onion salad). [UV→HIGH]
  - Curries: in small metal karahi dishes or white bowls, with an oval dish of
    pilau rice and naan.
  - Takeaway: clear/foil containers with card lids.
- **Utensils:** Fork and spoon or knife and fork. Naan torn by hand.
- **Visual:**
  - **Tikka masala:** orange-red, creamy, glossy sauce.
  - **Korma:** pale cream-yellow.
  - **Madras/vindaloo:** darker red with an oil sheen.
  - **Pilau rice:** mixed white and yellow/orange grains (food colouring is
    common) [UV→MEDIUM].
  - **Poppadoms:** large, thin, blistered, crisp discs.
- **Real-world scale:** A poppadom is ~18–22 cm across — larger than the can is
  tall [UV→LOW]. Balti bowl and karahi: lock from §2 [not available].
- **Sources to check:** Wikipedia: Balti (food); Wikipedia: British Indian
  cuisine; Wikipedia: Chicken tikka masala.

#### Dish: Ploughman's lunch
- **Category:** Everyday pub/café lunch.
- **Cuisine lineage:** Native British, **with a disclosed authenticity
  wrinkle.** Bread-and-cheese lunches are old, but the named "ploughman's
  lunch" as a pub-menu item is widely reported to have been popularized by
  post-war cheese-marketing campaigns (English Country Cheese Council / Milk
  Marketing Board, 1950s–60s). Earlier attestations of the phrase are debated.
  [UV→MEDIUM for the marketing role; LOW for the earliest-use dates] This is
  the same honesty pattern as `us.md` on apple pie.
- **Components:**
  - a wedge of Cheddar (or Stilton)
  - crusty bread or roll with butter
  - brown pickle/chutney
  - pickled onions
  - apple slices
  - salad leaves
  - optional ham, pork pie or Scotch egg
- **Serving vessel:** A wooden board (gastropub) or large plate (traditional).
  Components sit separately, not assembled into a sandwich.
- **Visual:** Deliberately rustic and unassembled — separate piles, a glossy
  dark-brown chunky chutney, pearly pickled onions. The cheese is a cut wedge,
  not slices.
- **Real-world scale:** Cheddar wedge ~8–10 cm long; board ~30–40 cm [UV→LOW —
  lock board size from §2 if listed].
- **Sources to check:** Wikipedia: Ploughman's lunch; Oxford English Dictionary
  attestation notes.

#### Dish: Bangers and mash
- **Category:** Everyday. Home and pub.
- **Variation (§4.6):**
  - standard links (pork; Lincolnshire, herby)
  - **Cumberland sausage** — a continuous coiled spiral, PGI (2011)
    [UV→MEDIUM]

  Offer the coil as a choice for a Cumbria/North brief.
- **Components:** Mash, glossy onion gravy, peas. Often served with English
  mustard.
- **Visual:**
  - sausages deeply browned, with slightly split or blistered skins
  - mash mounded under or beside
  - dark brown onion gravy with translucent onion strands pooled over

  **Not** a thin hot dog; **not** bratwurst on a bun.
- **Real-world scale:** A standard British sausage is ~12–14 cm × ~2.5 cm
  [UV→LOW]; two to three per portion on a 26–28 cm plate. Cumberland coil
  ~15–20 cm across [UV→LOW].
- **Naming-origin note:** the WWI "water-filled sausages burst" story is widely
  repeated. [UV→LOW] Don't state it as fact.
- **Sources to check:** Wikipedia: Bangers and mash; DEFRA GI register
  (Cumberland sausage).

#### Dish: Shepherd's pie / cottage pie
- **Category:** Everyday home dinner.
- **Naming distinction (a real authenticity note):** shepherd's pie is lamb;
  cottage pie is beef. They are often used interchangeably in casual speech,
  and pedants object. [UV→HIGH]
- **Visual:**
  - mashed-potato top, fork-ridged or piped
  - browned, crisp peaks
  - optional grated cheese
  - minced meat in gravy with carrot/peas beneath
  - served from an oven dish (ceramic or Pyrex-style), scooped
- **Cross-file note (not edited here):** `uruguay.md`'s pastel de carne entry
  contrasts it with "British/Australian meat pies, which do have a pastry
  shell." Shepherd's/cottage pie is the closer British confusable — mash-topped,
  no pastry. Pastel de carne's differentiators vs shepherd's pie would be mash
  top **and bottom**, olives and raisins. See `DECISIONS.md`.
- **Real-world scale:** Home oven dish roughly 20×25–30 cm; a portion is a
  scooped mound covering about a third to a half of a 26–28 cm plate [UV→LOW].

#### Dish: Scotch egg
- **Category:** Snack. Picnic, pub bar snack, supermarket.
- **Variants:**
  - supermarket: hard-boiled egg, uniform, cold
  - gastropub: soft/runny yolk, served warm, often halved to show the yolk

  Offer both.
- **Visual:**
  - deep golden-brown breadcrumb shell
  - a pale sausage-meat layer about 1 cm thick
  - the egg at the centre
  - gastropub halves show a glossy orange yolk
- **Real-world scale:** ~6–8 cm diameter — roughly the can's diameter
  [UV→LOW].
- **Origin note:** the Fortnum & Mason (London, 1738) claim is commonly cited
  and contested [UV→LOW]. Genericize.

#### Dish: Jacket potato
- **Category:** Everyday lunch. Café, canteen, home.
- **Toppings to offer:** cheese and beans (the classic), tuna mayo, coleslaw,
  chilli.
- **Visual:**
  - crisp, dark, slightly wrinkled and salt-flecked skin
  - split open (cross-cut or lengthwise)
  - fluffy white interior, butter melting in
  - toppings heaped over
  - often a side salad

  [UV→HIGH]
- **Real-world scale:** A large baking potato ~12–15 cm long — roughly the
  can's height [UV→LOW].

### Nation-callout dishes (compact entries — full entries in a later pass)

- **Scotch pie (Scotland):**
  - small, round, hot-water-crust pie
  - traditionally mutton
  - the lid sits recessed about 1 cm below a raised pastry rim, forming a
    well (sometimes filled with beans, mash or gravy)
  - pale-golden, firm crust
  - ~8–9 cm diameter, smaller than the can is tall

  [UV→MEDIUM form; UV→LOW size] Sources to check: Scottish Bakers' World
  Scotch Pie Championship.
- **Haggis, neeps and tatties (Scotland):**
  - dark crumbly haggis
  - bright orange mashed swede ("neeps")
  - pale mashed potato ("tatties")
  - often served in three separate mounds or stacked in a ring mould
    (restaurant); whisky sauce optional

  [UV→HIGH]
- **Cawl (Wales):** clear-to-cloudy broth with chunks of lamb, leek, potato and
  swede, in a bowl, often with bread and a wedge of Caerphilly cheese.
  [UV→MEDIUM]
- **Welsh rarebit (Wales):** a thick, savoury, mustard-and-cheese sauce spread
  on toast, grilled until bubbling and blistered brown in patches. **Not** a
  toastie. [UV→HIGH]
- **Champ (NI):** mash flecked with green spring onion and mounded, with a pool
  of melted butter in a central well. [UV→HIGH]
- **Pastie supper (NI):** a battered, fried round pork patty with chips. Visually
  distinct from a Cornish pasty — must not be confused. [UV→MEDIUM]

---

## EXAMPLE PROMPT LANGUAGE (demonstrates this file's rules — not validated by any test generation)

> A takeaway portion of British fish and chips resting on its opened white
> paper wrapping on a weathered wooden bench by a grey-green seaside
> promenade on an overcast afternoon, soft diffuse daylight. One large
> battered cod fillet, about one and a half times the height of the can
> beside it, with a deep-golden, crisp, blistered, irregular batter; a heap
> of thick-cut, soft, pale-golden chips, each thicker than a finger, not
> thin fries; a small wooden two-pronged chip fork resting on the chips. Beside
> the paper, standing upright: the classic red Coca-Cola can (original, not
> Diet Coke or Coke Zero), a standard 330 ml can. Nothing is held in a hand. No
> legible text or writing anywhere in the frame — keep any signage, shopfronts,
> or packaging blank or out of focus. No other drinks in the scene.

*Before use: the fillet-to-can ratio and the 330 ml can dimension are both
UV→LOW/MEDIUM and must be verified. Per `country-file-schema.md` §7.5, run two
or more generations before drawing any conclusion.*

---

## GAP LOG

- **Whole file: no web research performed.** Every claim is model knowledge.
  This is the dominant gap and supersedes everything below. The file should be
  treated as a structured research plan with draft content, not a source of
  truth.
- **330 ml can dimensions are missing from `coca-cola-guidelines.md` §3.** The
  UK market standard is 330 ml, not the 12 fl oz can §3 documents. Every
  scale-anchor clause here depends on a number (~11.5 cm × 6.6 cm) that has not
  been verified. It affects Germany and Spain equally. **Recommend adding it to
  the brand file as a verified entry before any European prompt is tested.**
- **Tableware §2 was not available,** so vessel fallbacks are unlocked except
  the 26–28 cm entree plate taken from schema §4.5's own example.
- **UK-specific Diet Coke/Coke Zero prior risk** is a hypothesis, not a
  finding.
- **Structural questions for human sign-off:** single file vs nation files, and
  where Northern Ireland belongs.
- **All `[UV→LOW]` items, especially every dish dimension.** These are the
  highest-priority verification targets because §4.5 exists precisely because
  an ungrounded size guess failed (beignets).
- **The polystyrene ban** affects the correctness of current takeaway scenes —
  verify dates and scope (England, Scotland, Wales).
- **Housing-type shares, garden access, and young-adults-with-parents shares**
  are expected to be well covered by ONS and the English Housing Survey. They
  should come out of the first research pass at HIGH if the sources say what
  is expected here.

## CANDIDATE QUEUE

1. Full verification pass across the file (WebSearch; replace every UV tag).
2. Verified 330 ml can dimensions added to `coca-cola-guidelines.md` §3.
3. Human decision on file structure and Northern Ireland's placement.
4. Full entries for the nation-callout dishes (Scotch pie, haggis, cawl,
   rarebit, champ, pastie supper).
5. **Deprioritized, not dropped:**
   - Scone/cream tea, which has the §4.6-perfect Devon (cream first) vs
     Cornwall (jam first) dispute. Deprioritized on staging-relevance grounds:
     it is a tea-anchored occasion, and a Coca-Cola pairing is atypical.
     Revisit if a brief asks for it.
   - Chip butty, pork pie, and chicken-shop fried chicken as a full entry
     (Gen Z-relevant).
6. Reconcile the chicken tikka masala dispute between `us.md` and this file:
   decide which file owns the full entry.
7. Independent §8 audit after verification.

## RESEARCH LOG

- **2026-09-24, scaffold draft.** Drafted without tool access (no WebSearch,
  WebFetch or repository access in this session). Built from the user-supplied
  texts of `country-file-schema.md`, `uruguay.md`, `us.md`, `us-northeast.md`
  and `DECISIONS.md`. **Not available:** `coca-cola-guidelines.md`,
  `tableware-composition-reference.md`, `market-roadmap.md`. No sources were
  consulted. "Sources to check" lines are research leads, not citations. No
  subagents were used.

### DECISIONS.md — append this entry (round 1 proposal — superseded in round 2, see below)

## United Kingdom scaffold (`knowledge-base/02-culture/regions/europe/united-kingdom.md`) — 2026-09-24

**Context:** Drafted in a session without tool access — no repository clone, no
WebSearch/WebFetch, no subagents. The user chose to paste the source files
into chat and have a draft built from them. `coca-cola-guidelines.md`,
`tableware-composition-reference.md` §2, and `market-roadmap.md` were not
among the pasted files. This is the first file on this project written with
zero web research, which is itself the headline judgment call.

**Judgment calls:**

1. **Did not use §6's HIGH/MEDIUM/LOW tags.** Those tiers count consulted
   sources, and none were consulted. Assigning them anyway would have been
   exactly the "confident prose, unearned tag" defect §6 and the audit
   practice exist to catch. Introduced a disclosed `[UV→X]` tag (unverified,
   expected tier X) instead, plus per-entry "sources to check" that are
   explicitly research leads, not citations. The expected-tier half exists so
   a verification pass can prioritize: every `UV→LOW` and every dimension
   first.

2. **Recommended no structural split — one file with four nation callouts
   plus a North/South England note — but left it for human sign-off.** Food
   passes the swap test (differences are dish-level: condiments and frying
   fat, PGI-bound Cornish pasty, Scotch pie, pie and mash); architecture is
   the strongest counter-argument (Scottish tenements/harling, Welsh valley
   terraces) but is handled as environment callouts. Did not decide this
   unilaterally because Scotland/Wales/NI are nations, and there is an
   identity/market-structure dimension a food-evidence test shouldn't settle
   alone. Separately flagged whether Northern Ireland belongs here or with an
   Ireland file — genuinely open.

3. **Flagged rather than filled the 330 ml can gap.** European markets use a
   330 ml can, not the 12 fl oz can documented in the brand file, and the
   brand file explicitly warns not to assume other formats share its
   numbers. Used an approximate ~11.5 cm × 6.6 cm figure only inside an
   explicitly unverified tag and recommended adding a verified entry to the
   brand file before any European test generation. This blocks confident
   scale anchoring for Germany and Spain too.

4. **Deprioritized scone/cream tea despite the textbook §4.6 dispute (jam-
   first Cornwall vs cream-first Devon).** Staging relevance: it's a
   tea-anchored occasion, and a Coca-Cola pairing is atypical. Kept in the
   Candidate Queue rather than dropped, so the dispute isn't lost.

5. **Cross-file observations logged, not edited:**
   - `uruguay.md`'s pastel de carne entry names pastry-shelled British meat
     pies as the confusable alternative, but shepherd's/cottage pie (mash top,
     no pastry) is the closer British match.
   - The chicken tikka masala origin dispute lives in `us.md` but arguably
     belongs to the UK file.

   Neither file was touched — both are flagged for a deliberate reconciliation
   rather than a drive-by edit.

6. **Made the UK beverage-leak risk explicit in prompt guidance.** Pub, beer-
   garden and curry-house scenes carry a strong training prior toward pints
   and ale pumps, and scope is Coca-Cola only.

**Flagged schema recommendations (not applied — schema not edited):**

- §6 has no tier for model-knowledge scaffolds. If tool-less drafting recurs,
  consider formalizing something like the `UV→X` convention used here.
- §1.2 excludes other beverages from the *catalog* but says nothing about
  excluding them from the *frame*. Recommend a §7.5 rule: in venues whose
  default imagery includes other drinks (pubs, beer gardens, cafés),
  explicitly exclude them in the prompt.
- §4.6's variant principle covers dish variants. It could explicitly extend to
  *definitional* disputes (the UK "is a puff-lidded casserole a real pie"
  debate) and to *serving-format* variants that are regionally coded.

### market-roadmap.md — suggested status for the UK row (round 1 proposal)

> **United Kingdom — DRAFT SCAFFOLD (2026-09-24).** Model-knowledge only; needs a WebSearch verification pass, human sign-off on file structure and Northern Ireland placement, and verified 330 ml can dimensions before it counts as a first draft.

================================================================================
ROUND 2 (same author, later message — self-revises round 1's can-anchor approach and structural recommendation; treat as superseding round 1 where they conflict)
================================================================================

Below are the UK draft file, structure recommendations for all three countries, and the DECISIONS.md and roadmap text. First, two limits and two gaps.

Limits of this pass:

I still have no WebSearch, repo access, or git. Nothing is committed or pushed, and nothing under usa/, us.md, or country-file-schema.md is touched.
Schema §6 forbids invented sources. So every claim below is tagged [UNVERIFIED → expected X]: X is the confidence tier I'd expect after a real research pass, not a confidence claim. "Lookup targets" are search leads, not citations.
Brand-guidelines gap that matters for all three markets. coca-cola-guidelines.md §3 and §4.3 document the 12 fl oz / 355 mL can as the standard can. In the UK, Germany and Spain, the everyday single-serve can is 330 mL, which is a different, shorter can (commonly cited around 115 mm tall × 66 mm, unverified). Reusing the 123 mm figure as a scale anchor would repeat the beignet mistake in reverse. The UK draft below uses the 500 mL PET row (203 × 65 mm, already in §4.3) wherever the scene allows, since that's also the natural meal-deal format. I've logged adding a 330 mL row as a recommendation rather than editing the brand file, since you said it's still in progress.

1. Structure decisions (schema §1.1 and §7 need your sign-off)
United Kingdom: recommend Option B (national index plus one regional file)
The swap test at nation level, as hypotheses for the research pass to confirm or kill:

Candidate | Swap test | Why
Scotland | Likely fails the swap (visibly different) | Distinct dish set (haggis/neeps/tatties, Scotch pie, Cullen skink); distinct chippy vocabulary ("fish supper," Edinburgh "salt 'n' sauce"); distinct housing (sandstone tenement flats read nothing like an English brick terrace).
Wales | Borderline | Real signature dishes (cawl, Welsh rarebit, Welsh cakes), but the everyday lunch/dinner scene (roast, chippy, curry, pub, meal deal) is largely shared with England. Valleys stone terraces and slate are distinctive, but it's thin for a whole file.
Northern Ireland | Borderline | Champ, the "pastie supper" (a battered pork patty, a genuine naming collision with the Cornish pasty) and traybakes. The breakfast-centred Ulster fry is out of scope, which thins it further.
English regions | Emphasis, not split | North/South chippy sides (gravy, curry sauce, mushy peas), "tea" vs "dinner" meal naming, and city dishes (London pie and mash, scouse, parmo, Birmingham balti). This is the us-northeast internal-zone pattern, not separate files.

Caveat for the research pass: schema §1.1 criterion (a), a dedicated Wikipedia cuisine article, will pass all four nations, because each has a "Scottish/Welsh/… cuisine" article largely for political-identity reasons. It over-predicts here. I've logged this as a schema recommendation.

Your options:

A. Single uk.md with nation callouts (Uruguay pattern).
B (recommended). uk.md national index plus uk-scotland.md, with Wales and NI as labeled callouts in uk.md (the Lowcountry pattern).
C. Index plus three nation files (US pattern).

The draft below is written to work under A or B. The Scotland callout block becomes a pointer if you pick B.

Paths if B: knowledge-base/02-culture/regions/europe/uk/uk.md and .../europe/uk/uk-scotland.md, mirroring usa/. If A: .../europe/uk.md.

Germany: recommend one file with 4–5 labeled internal zones (us-northeast pattern)
Germany is a stronger split case than the UK, but each zone's lunch/dinner/snack dish set is probably only 4–6 items. Candidate zones:

Bavaria. Schweinshaxe, Brezn, Obatzda, Leberkäse; beer-garden long benches under chestnut trees.
North. Fischbrötchen, Labskaus, Grünkohl mit Pinkel; brick architecture.
Southwest (Swabia/Baden/Pfalz). Spätzle, Maultaschen, Flammkuchen.
Rhineland/West. Sauerbraten, Reibekuchen, Himmel un Ääd.
Berlin/East. Currywurst, Döner, Buletten, Thuringian Rostbratwurst; Altbau and Plattenbau housing.

Three staging-critical national findings to verify first:

Abendbrot. The evening meal is traditionally cold: bread, cold cuts and cheese on a board, with the warm meal at midday. This contrasts sharply with the US/UK evening hot dinner.
Renter majority. Apartment living should likely be the default "at home" setting, not a house.
Beer-garden scenes will default to steins. Scope is Coca-Cola only, so prompts need an explicit exclusion.

Two scope questions to log:

Currywurst is a §4.6 case: with vs without skin (ohne Darm), and served with Pommes vs Brötchen.
Weißwurst is traditionally eaten before noon, which straddles the breakfast exclusion. I recommend excluding it and logging the decision.

Spain: recommend one file with internal zones, but this is the closest call of the three
Spain is the strongest candidate for a full US-style split. Candidate zones:

Basque Country / north: pintxo counter culture, caseríos.
Galicia / Asturias: pulpo á feira on wooden plates, fabada, granite architecture.
Catalonia: pa amb tomàquet, seasonal calçotada.
Valencia / Mediterranean: paella over a wood fire, Sunday outdoors.
Andalusia: free-tapa-with-drink in Granada and elsewhere, whitewash, patios and azulejos.
Madrid / Castile: cocido, bocadillo de calamares, callos.

The Atlantic-green north vs arid interior vs Mediterranean coast also changes light and landscape. A lot is genuinely national, though: tortilla, croquetas, jamón, bravas, the menú del día, the bocadillo, and late meal times (lunch around 14:00–16:00, dinner around 21:00+).

Heavy §4.6 load:

Paella: Valenciana (chicken, rabbit, garrofó beans) vs marisco vs mixta.
Tortilla: con vs sin cebolla, and runny vs set centre.
Tapa vs pintxo vs ración serving formats.

If you'd rather split Spain like the US, I'd validate the zone list with a dedicated pass first, as was done for the US.

What I need from you: A/B/C for the UK, and a yes or change to the zone approach for Germany and Spain. Once you confirm, I'll draft Germany, then Spain, in the same format.

2. Draft file: knowledge-base/02-culture/regions/europe/uk/uk.md

---
country: united_kingdom
ou: europe (assumed — TCCC's actual OU code not confirmed; flag for correction)
status: DRAFT — SCAFFOLD FROM MODEL KNOWLEDGE ONLY, NOT YET RESEARCHED. No WebSearch pass has been run. Structure (single file vs. national index + uk-scotland.md) PENDING HUMAN SIGN-OFF. Do not build production prompts from this file until a sourced research pass replaces the UNVERIFIED tags.
research_method: Claude model knowledge (no web access in the drafting session) — see RESEARCH LOG
date_drafted: 2026-09-24
---

## CONFIDENCE CONVENTION FOR THIS DRAFT (temporary — remove once researched)

`country-file-schema.md` §6 tiers (HIGH/MEDIUM/LOW) are defined by source
count, and no sources were consulted for this draft. Every claim therefore
carries `[UNVERIFIED → expected X]`, where X is the tier the claim would be
*expected* to reach once researched — a prioritization hint for the research
pass, **not** a confidence claim. "Lookup targets" are search leads, not
citations; none have been read. Per §6, the research pass should treat every
line here as a lead to verify, not a fact to build on.

## SUB-REGION TRIAGE DECISION — PROVISIONAL, PENDING SIGN-OFF

**Recommendation: Option B — this file as a national index, plus one
regional file (`uk-scotland.md`); Wales and Northern Ireland as labeled
callouts here; English regional variation as internal emphasis callouts.**
Options A (single file, all nations as callouts) and C (index + three nation
files) remain open. This section follows the US pattern of presenting a
recommendation rather than a decision (§7).

Reasoning (hypotheses to test with §1.1's three criteria):

- **Most of the staging-relevant repertoire is genuinely UK-wide** — the
  chippy, the Sunday roast, the pub, the curry house, the supermarket meal
  deal, the high-street bakery. Supermarket and chain-driven homogenization
  is a plausible causal reason (§1.1c) for why swapping these between
  English regions and nations mostly does *not* look wrong.
  [UNVERIFIED → expected MEDIUM]
- **Scotland is the one nation likely to fail the swap test on both food
  and architecture**: a distinct dish set, distinct chippy vocabulary, and
  sandstone tenement flats as a dominant urban housing type unlike any
  English equivalent. [UNVERIFIED → expected MEDIUM-HIGH]
- **Wales and Northern Ireland have real signature dishes but thin
  lunch/dinner/snack depth once breakfast (Ulster fry, laverbread) is
  excluded** — likely callout-sized, not file-sized. [UNVERIFIED → expected
  MEDIUM]
- **Criterion (a) caution**: all four nations have dedicated cuisine
  articles on Wikipedia, partly for national-identity reasons rather than
  culinary distinctness. Criterion (a) alone over-predicts splits here;
  weight (b) and (c) more heavily. (Logged as a schema recommendation in
  DECISIONS.md.)

## TRUSTED CONTENT

### GENERAL NORMS

- **Meal naming is regional and class-coded, and it changes timing.** In
  much of northern England and in working-class usage generally, the midday
  meal is "dinner" and the evening meal is "tea" (roughly 5:30–6:30pm). In
  southern and middle-class usage it's "lunch" and "dinner." "Supper" is
  either a late light meal or, in Scotland and NI, a chip-shop meal
  ("fish supper" = fish and chips). A brief saying "tea" may mean an
  evening meal, not the drink. [UNVERIFIED → expected HIGH]
  Lookup: Wikipedia "Tea (meal)"; YouGov UK meal-naming polling.
- **Evening meal timing is early, roughly 6–7pm** — close to the US norm,
  far earlier than Uruguay's 9:30pm+ (and Spain's, once built). Early-
  evening light for most of the year, full darkness in winter.
  [UNVERIFIED → expected MEDIUM] Lookup: ONS time-use survey; YouGov
  dinner-time polling.
- **Sunday lunch/roast is the main weekly family meal**, eaten early-to-
  mid afternoon (roughly 1–3pm), at home or at a pub.
  [UNVERIFIED → expected HIGH]
- **Cutlery**: knife stays in the right hand and fork in the left
  throughout, fork held tines-down, food pushed onto the back of the fork —
  distinct from the US cut-and-switch style. Fork left of plate, knife
  right, at home and in restaurants. Note the conflict with
  `tableware-composition-reference.md` §2's "fork/knife always right side"
  default: for a UK place setting, fork left and knife right is the
  authentic layout. [UNVERIFIED → expected MEDIUM-HIGH]
- **Table condiments are bottles and sachets, applied by the diner.**
  Ketchup, brown sauce, malt vinegar and table salt (for chips),
  mayonnaise. Traditional meat pairings: English mustard or horseradish
  with beef, mint sauce with lamb, apple sauce with pork. Cafés and chippies
  use sachets or squeezy bottles; at home, gravy comes in a gravy boat or
  jug. **Prompt note**: brown sauce and ketchup bottles carry prominent
  brand labels — describe them as generic unlabeled bottles per §7.5.
  [UNVERIFIED → expected HIGH]
- **Bread**: sliced tin loaf (white or brown) is the everyday default.
  Soft bread rolls carry a strong **naming regionalism**, like the US
  hoagie/sub/hero table, mostly without form change: bap, barm (north-
  west), cob (East Midlands), batch (Coventry, Merseyside), bread cake
  (parts of Yorkshire), roll. **Exception**: the north-east's stottie is a
  genuinely distinct large, flat, dense round loaf — see regional callouts.
  [UNVERIFIED → expected MEDIUM-HIGH] Lookup: Wikipedia "Bread roll"
  regional names; BBC regional-dialect coverage.
- **"Chips" are not "fries."** Chip-shop and home chips are thick-cut,
  soft-centred and pale-to-mid gold, often slightly limp from vinegar.
  "Fries" (thin, crisp) is fast-food-chain vocabulary. Rendering chippy
  chips as thin fries is a checkable error. [UNVERIFIED → expected HIGH]
- **Beverage scope**: tea is visually ubiquitous in UK homes and cafés,
  but per scope it is not added to scenes. See the Gap Log for the one
  dish (cream tea) where this creates a real staging conflict.

### VISUAL & PLATING NORMS

- **Warm brown/golden palette for pub and chippy food**: golden batter,
  golden-brown pastry, dark gravy. Green comes from peas: bright round
  garden peas, or khaki-green, thick, spoonable mushy peas. These are
  visually unmistakable from each other and should not be interchanged.
  [UNVERIFIED → expected MEDIUM]
- **Generous, filled-plate plating, not composed fine-dining plating**: a
  roast or pie plate is covered to the rim, gravy pooling across it. The
  gastropub register (wooden boards, chips in mini wire fryer baskets, a
  ramekin of peas) is a real, recognizable, more recent alternative — one
  option, not the default. [UNVERIFIED → expected MEDIUM]
- **Texture/finish markers (per §4.5)**:
  - Chip-shop batter should be crisp and bubbly/blistered, not a smooth
    breadcrumb coat.
  - Roast potatoes have rough, fluffed, crunchy edges on a soft interior.
  - Yorkshire pudding is puffed and hollow, with crisp browned rims and a
    soft, slightly soggy base.
  - Pie pastry is glossy and egg-washed. Shortcrust is matte; puff pastry
    shows flaky visible layers.
  [UNVERIFIED → expected MEDIUM]

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **Climate and light: temperate maritime.** Soft, diffuse, frequently
  overcast light; rain; low winter sun; very long summer evenings (late
  sunsets, later still in Scotland); very short winter days (dark by mid-
  afternoon in December, earlier in Scotland). Don't default to harsh sun
  or saturated golden-hour light unless the brief specifies summer.
  [UNVERIFIED → expected HIGH] Lookup: Met Office climate summaries.
- **Housing types — multiple coexisting defaults, none singular**:
  - Victorian/Edwardian brick terraces (through-lounge, narrow galley or
    rear-extension kitchen, small back yard or garden).
  - 1930s semi-detached houses (bay windows, sometimes pebbledash render).
  - Post-war council/social housing.
  - Modern new-build estates.
  - Flats, including converted Victorian houses and purpose-built blocks.
  - Stone-built terraces in the Pennines, Cotswolds and Welsh valleys.
  - Sandstone tenements in Scotland (see callout).
  [UNVERIFIED → expected MEDIUM-HIGH] Lookup: English Housing Survey
  (dwelling age and type); ONS.
- **Interior authenticity markers** — small, checkable, low-clutter
  details:
  - UK three-pin sockets with individual switches.
  - An electric kettle on the counter.
  - A washing machine in the kitchen.
  - Radiators under windows.
  - uPVC double-glazed windows in many homes.
  - Separate hot/cold taps in older bathrooms and kitchens.
  - Kitchen-diners in extended or modern homes.
  Pick one or two per scene, not all (§7.5). [UNVERIFIED → expected
  MEDIUM-HIGH]
- **Gen Z / younger-adult lens (§5.3)**: house shares and flatshares
  (renting rooms in a shared house) and living with parents are plausibly
  the dominant young-adult arrangements, alongside student halls. These
  are co-equal alternatives to the family-home framing, not replacements.
  [UNVERIFIED → expected MEDIUM] Lookup: ONS "young adults living with
  parents"; English Housing Survey private-rented sector.
- **Caricature-avoidance (editorial judgment, not a sourced claim)**:
  - Avoid the heritage cliché: thatched cottages, Tudor beams, stately
    homes, red phone boxes, Union Jack bunting, bowler hats, Big Ben
    skylines. The last is also a named-landmark issue under §7.5.
  - Equally avoid the grim-urban cliché: every scene a rain-streaked
    council estate.
  - An ordinary terrace or semi, clean and lived-in, is the unremarkable
    baseline.

#### Scenario: Casual lunch at home — 1 person
- Small kitchen table or kitchen-diner counter; a sandwich (sliced bread,
  diagonally cut), beans on toast, soup with bread, or a jacket potato.
  Remote/hybrid worker or student register. For Gen Z: a shared-house
  kitchen with a housemate's belongings in the background.
  [UNVERIFIED → expected LOW-MEDIUM — editorial synthesis]

#### Scenario: Casual lunch at home — 2 people
- Same register. Two plates individually plated (not family-style) at a
  small kitchen table; weekend or two-housemate framing.
  [editorial synthesis]

#### Scenario: Casual lunch at home — 3 people
- Weekend family or three housemates. Shared items in the middle of the
  table (a plate of sandwiches, crisps tipped into a bowl) are plausible.
  [editorial synthesis]

#### Scenario: Dinner at home, indoors
- Early-evening timing (see norms). Everyday: bangers and mash, shepherd's
  or cottage pie, pasta, a curry or takeaway. Dinner on a tray or on laps
  in front of the TV is plausibly common alongside the table.
  [UNVERIFIED → expected MEDIUM]
- **Friday takeaway night** is a plausible, distinct register: foil
  curry-house containers with card lids, or wrapped chippy parcels, opened
  on the coffee table or kitchen table. Takeaway lids are often
  handwritten — keep them blank (no legible text). [UNVERIFIED → expected
  MEDIUM]
- **Sunday roast at home** (see dish entry) is the elevated version.

#### Scenario: Meal outdoors at home
- Small rear garden: patio slabs, lawn, wooden fence panels, possibly a
  rotary washing line in view. BBQ is weather-contingent and a summer
  event, not routine — a charcoal kettle or gas BBQ, with sausages and
  burgers the default food. Contrast with Uruguay's quincho (a permanent
  structure) and the US backyard (larger, more routine). Flats: a balcony
  or a shared communal garden. [UNVERIFIED → expected MEDIUM]

#### Scenario: Meal on the go — 1 person
- **The supermarket meal deal** (sandwich + snack + drink) is the defining
  UK on-the-go lunch — eaten at a desk, on a park bench or a low wall. The
  500 mL PET is the natural Coca-Cola format here. [UNVERIFIED → expected
  HIGH]
- Also: a high-street bakery sausage roll or pasty in a paper bag; chips
  eaten on a seafront bench.
- Likely contrast with the US: less car-eating, more walking and transit in
  cities. [UNVERIFIED → expected MEDIUM]
- Prompt: meal-deal packaging is heavily branded — describe a plain
  cardboard sandwich wedge with a clear film window, no legible text.

#### Scenario: Away from home — 1 person
- A café ("greasy spoon": Formica tables, squeezy sauce bottles, laminated
  menus kept illegible) or a pub corner table. Pub interiors:
  - dark wood, patterned carpet, a fireplace in older pubs;
  - generic unbranded beer mats if any.
  Keep beer taps and glasses out of frame per scope. **Coca-Cola ordered
  at a pub is often served in a glass with ice and a lemon slice** —
  [UNVERIFIED → expected MEDIUM]; a legitimate in-scope serve if verified.

#### Scenario: Away from home — 2–3 people
- **The pub is the default register** — the UK analogue of Uruguay's
  neighbourhood parrilla and the US casual-dining booth. Sunday roast,
  fish and chips, pie, or burgers.
- The curry house is a strong second: white tablecloths, poppadoms with a
  chutney/pickle tray, and dishes in small metal karahis/balti bowls.
- Gen Z alternative: peri-peri chicken chains, burger chains and Asian
  street-food chains are plausible venues. Genericize names.
  [UNVERIFIED → expected MEDIUM]

### DISH CATALOG — UK-WIDE

**Scale note for every entry**: per `coca-cola-guidelines.md` §3 and §4.3.
The UK standard single-serve can is 330 mL (not the 355 mL can the brand
[TRUNCATED IN THE ORIGINAL PASTE — the message was cut off here at "guidelines.md documents..."]

---

### UK verification checklist (round 2's step-3 sample — the 31-row table also delivered as the UK_MD_TEST.docx upload)

This is the same 31-row checklist already extracted from the uploaded
UK_MD_TEST.docx — see that extraction for the full table (claims 1-30,
covering: can dimensions, the polystyrene ban dates, Cornish pasty/Melton
Mowbray pork pie/Cumberland sausage protected-status specifics, fish fillet
and pasty and Yorkshire-pudding sizes, tea/dinner naming and dinner-time
survey data, the meal-deal 1985 Boots origin, Bangladeshi curry-house
ownership share, the Balti Triangle, ploughman's-lunch marketing origin,
NI pastie and Edinburgh salt'n'sauce, Scotch pie construction, the
Malin-vs-Lees fish-and-chips dispute, Sephardic origin, cod/haddock and
dripping-frying geography, housing-type/young-adult-at-home/garden-access
ONS shares, balcony-BBQ restrictions, UK cutlery style, pigs-in-blankets
naming, pub Coca-Cola service, and Welsh rarebit/cawl/champ descriptions).

### Next steps proposed by the author (not yet actioned)

1. Whether to continue drafting Germany/Spain in this same no-web mode, or
   have the verification pass run first and use its result as the Germany/
   Spain template.
2. Two structural calls flagged as needing a human decision: UK single file
   vs. nation-file split (and which option, A/B/C), and where Northern
   Ireland belongs.
3. The 330 mL (and 500 mL PET, already partly in §4.3) can-dimension gap in
   `coca-cola-guidelines.md`, recommended to be resolved before any European
   market goes to image testing.
