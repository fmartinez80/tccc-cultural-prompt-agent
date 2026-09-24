---
country: germany
ou: NOT CONFIRMED — TCCC's internal OU code for this market was not found via
  WebSearch in this session; flag for correction from TCCC's own market
  documentation, do not guess (same disclosed gap as `uk.md`).
status: DRAFT — NEEDS SME/HUMAN REVIEW, PENDING NATIVE-REVIEWER SIGN-OFF —
  third country file built with full WebSearch verification (after the
  Uruguay pilot and the UK build)
research_method: Claude web research (WebSearch only — WebFetch/direct page
  reads were blocked by network egress for every domain attempted, consistent
  with every prior research round on this project). Built as a verification-
  and-merge pass over `knowledge-base/scratch-germany-model-knowledge-draft.md`,
  a model-knowledge-only scaffold produced by a separate, tool-less Claude
  session (branch `claude/nations-batch-1`) — every claim in that scaffold
  was independently checked here, not carried over on trust. See RESEARCH
  LOG for what was confirmed, corrected, or left flagged.
date_drafted: 2026-09-24
---

## FILE ROLE & METHOD

This is Germany's single national file. Per the orchestrating session's
decision (see `DECISIONS.md`, not re-litigated by this research pass), it
holds full, authoritative depth for the whole country, organized around an
internal **regional map** (below) rather than a national-index-plus-regional-
files split. This is a different resolution from the UK's (index +
`uk-scotland.md`) and is justified on different evidence — see ZONE
CHARACTERIZATION for why Germany's regional variation, real and heavy as it
is, resolves at the **dish and vocabulary level** rather than the
food+vocabulary+architecture triple-axis break that earned Scotland its own
file.

### Structural decision (already made, not re-litigated by this pass)

**One file, `germany.md`**, carrying a heavy schema §4.6 variant load (far
more coexisting-variant disclosure than any single dish in the UK file) and
an internal regional map spanning Bavaria, Baden-Württemberg, Rhineland/NRW,
Hesse/Frankfurt, the Palatinate, the North, Berlin/Brandenburg, and
Saxony/Thuringia/the former East. **A documented future-trigger, not an
action item for this pass**: if Bavarian-specific prompt usage ever exceeds
roughly 30% of Germany's total prompt volume, a future `germany-bavaria.md`
regional file may be split out, the same way Scotland was split from the UK
index once its distinctness was confirmed. Nothing in this pass's research
overturns that plan — if anything, Bavaria's dish density (Schweinsbraten,
Haxe, Weißwurst, Leberkäse, Obatzda, the Brezel, multiple Knödel types,
Steckerlfisch, Schäufele, Dampfnudel) is the single densest regional cluster
in this file, which is exactly the kind of volume the spinout trigger
anticipates.

### Scope (inherited from the task brief, not re-litigated)

Lunch, dinner, and snacks. **Breakfast is out of scope.** No beverages other
than Coca-Cola are documented as prompt subjects — coffee, beer, wine,
Apfelwein, and Glühwein are all real and constantly present in German food
scenes (see the alcohol-exclusion rule below and the Kaffee-und-Kuchen entry)
but are not catalogued here as things to depict.

### Alcohol exclusion: accepted as a hard rule, not re-litigated by this pass

**This is a structural/policy decision made by the orchestrating session**,
based on the draft's own resolution, and this pass's job was to verify it
against `coca-cola-guidelines.md`, not to second-guess whether the rule is
needed. Beer, wine, Apfelwein, and Glühwein genuinely dominate many of this
file's real settings — beer gardens, the Munich autumn folk festival (see
FESTIVAL & OCCASION CALENDAR), wine festivals, Christmas markets. That market
reality is recorded honestly throughout this file so a prompt-writer
understands what a scene is really compensating for. **But no image built
from this file may show alcohol, an alcohol-coded vessel (even empty), or
alcohol branding, and Coca-Cola may never appear as a mixer** — every
alcohol-heavy real setting gets a food/Coca-Cola/people framing instruction
instead. Full rule: see COCA-COLA MARKET INTEGRATION §"Alcohol exclusion"
below.

**Cross-check against `coca-cola-guidelines.md` (what this pass actually
verified, per the task brief).** `coca-cola-guidelines.md` as it stands
today documents the Coca-Cola *product's* representation (can/bottle
dimensions, logo-fidelity findings, hero-zone/depth-hierarchy composition
rules) — it does **not** currently contain any responsible-marketing,
alcohol-adjacency, or children's-marketing language of its own. That is not
a gap this pass is asked to fill (the task scoped this file, not a rewrite
of the brand file), but it is worth recording precisely rather than assuming
either way: **a real, current TCCC policy exists and was found via
WebSearch** — The Coca-Cola Company's public Responsible Marketing Policy
states it will not market directly to children under 13 (defined as media
where 30%+ of the audience is under 13) and will not advertise in primary
schools, and its separate Responsible Alcohol Marketing Policy (RAMP)
commits to marketing only to those above the legal purchase age and never
implying Coca-Cola is consumed as or with alcohol in a way that normalizes
underage or irresponsible drinking. [CONFIDENCE: HIGH — the policies are
published directly by The Coca-Cola Company] [SOURCE: [The Coca-Cola
Company — Responsible Marketing Policy](https://www.coca-colacompany.com/policies-and-practices/responsible-marketing-policy);
[The Coca-Cola Company — Responsible Alcohol Marketing Policy](https://www.coca-colacompany.com/policies-and-practices/responsible-alcohol-marketing-policy)]
This file's own alcohol-exclusion rule and children/schools caution (below)
are **consistent with and independently corroborated by** that real policy
— this pass did not have to invent a rationale, it found one. **Flagged as
a candidate queue item, not done in this pass**: `coca-cola-guidelines.md`
itself could usefully cite these two policies directly for every future
country file to reference, rather than each country file re-discovering
them; this file does not make that edit, since it's outside this task's
scope and risks colliding with the parallel Spain-file session's own edits
to shared files.

### Regional map

| Culinary region | Signature in-scope dishes (→ this file's DISH CATALOG) | Setting cues | Confidence |
|---|---|---|---|
| **Bavaria** (Altbayern, Franconia, Swabian Bavaria) | Schweinsbraten, Schweinshaxe, Weißwurst, Leberkäse, Obatzda, Brezel, Knödel, Wurstsalat, Steckerlfisch, Hendl, Nürnberger sausages, Schäufele (Franconia), Dampfnudel | Beer garden under chestnut trees, gravel; dark-wood inns; onion-dome churches; Alpine foothills in the south only | MEDIUM-HIGH — dish set and setting cues corroborated across multiple independent food-history/tourism sources this pass, though not each cross-checked individually against a single regional-boundary source the way the UK's Scotland split was |
| **Baden-Württemberg** | Maultaschen, Käsespätzle, Linsen mit Spätzle, Schupfnudeln, Flammkuchen (Baden), Zwiebelkuchen, Black Forest cake | Half-timbered villages, Black Forest wood interiors, vineyard slopes, Swabian-Alemannic carnival masks | MEDIUM-HIGH — Käsespätzle and Flammkuchen's regional homes confirmed this pass |
| **Rhineland / NRW** | Sauerbraten, Himmel un Ääd, Reibekuchen, Halve Hahn, Currywurst (Ruhr claim), Mettbrötchen | Brauhaus long tables (no glasses in frame), Cologne/Düsseldorf corner kiosks (*Büdchen*), Ruhr industrial heritage, Rhine meadows | MEDIUM — carried largely from the draft, spot-checked rather than exhaustively verified |
| **Hesse / Frankfurt** | Grüne Soße, Handkäs mit Musik, Frankfurter sausages | Apfelwein taverns (vessels excluded from frame), sandstone old town | MEDIUM-HIGH — Grüne Soße and Handkäs mit Musik both confirmed this pass |
| **Palatinate (Pfalz)** | Saumagen, Flammkuchen, Leberknödel, Zwiebelkuchen | Wine-village courtyards, vineyards | MEDIUM — not independently re-verified this pass beyond Flammkuchen |
| **North** (Hamburg, Bremen, Lower Saxony, Schleswig-Holstein, Mecklenburg-Western Pomerania) | Fischbrötchen, Labskaus, Grünkohl mit Pinkel, Matjes, Rote Grütze, Franzbrötchen | Harbour kiosks, red brick, dykes with sheep, hooded wicker beach chairs, flat light, big skies | MEDIUM-HIGH — Labskaus confirmed and corrected this pass (see DISH CATALOG) |
| **Berlin / Brandenburg** | Currywurst, Döner, Eisbein, Königsberger Klopse, Buletten, Spreewald pickles | Imbiss under S-Bahn arches, late-night corner shops (*Späti*), grand old-building courtyards, the former airfield park | HIGH — currywurst's Berlin claim and the Späti's Berlin-specific culture both independently confirmed this pass |
| **Saxony / Thuringia / former East** | Thüringer Rostbratwurst, Thüringer Klöße, Rouladen, Soljanka, Leipziger Allerlei, East-style Jägerschnitzel, rotisserie "Broiler" chicken, Quarkkeulchen | Market-square charcoal grills, Baroque old towns, prefabricated housing estates for modern everyday realism | MEDIUM-HIGH — East-style Jägerschnitzel's GDR-canteen origin confirmed this pass; Thüringer Rostbratwurst's PGI dimensions confirmed |

**East/West note, corroborated this pass**: some dishes genuinely differ in
identity, not just prevalence, across the former inner-German border.
Jägerschnitzel is the clearest case — see the DISH CATALOG entry — and this
pass found real, sourced confirmation that the East German "Jägerschnitzel"
(breaded Jagdwurst sausage with tomato sauce and noodles) was a specific,
lower-cost wartime/GDR-era substitution, commonly served in school and work
canteens, genuinely distinct from and not merely a regional variant on the
West's mushroom-sauce dish. [CONFIDENCE: HIGH] [SOURCE: [DDR Museum — Hunter's
Schnitzel with Tomato Sauce](https://www.ddr-museum.de/en/blog/2016/hunters-schnitzel-with-tomato-sauce)]

---

## QUICK-REFERENCE: GENERIC SCENE REGISTERS

| Generic scene type | What to draw on |
|---|---|
| **Imbiss (street-food stand)** | A stainless-steel or white counter, a backlit photo menu board in German, standing-height tables (~110cm), squeeze-bottle condiments, a small awning. The default currywurst/Bratwurst/Pommes register. |
| **Döner/kebab shop** | A vertical rotisserie spit behind glass, steel salad trays, stacked flatbread, tile or neon finishes, a German-language menu board. |
| **Beer garden / traditional inn (*Wirtshaus*, *Gasthaus*, *Brauhaus*)** | Gravel ground and horse-chestnut canopy (beer garden) or dark wood panelling, tiled stoves, and heavy tables (inn/Brauhaus). **Alcohol-excluded framing applies** — see COCA-COLA MARKET INTEGRATION. |
| **Bakery counter (*Bäckerei*)** | A glass case of rolls and cakes, a high standing ledge, paper bags, a basket of mixed Brötchen. |
| **Christmas market** | Wooden huts with fir garlands, warm string lights, steam off giant pans, early winter dusk. **Alcohol-excluded framing applies** (mulled-wine mugs are the dominant real-world vessel and may never appear). |
| **Späti (Berlin late-night corner shop)** | A narrow, cluttered, owner-operated shopfront (Berlin has roughly 1,000 of them), glass-door drink coolers, a sweets rack, people sitting on the kerb, a bench, or old-building stone steps at dusk. A genuinely Berlin-specific register, not a generic "corner shop." [CONFIDENCE: HIGH] [SOURCE: [Berlin.de — Späti: Meeting Point, Supermarket and Regional Treasure](https://www.berlin.de/en/shopping/4971123-2947095-spaeti-meeting-point-and-supermarket.en.html); [Lonely Planet — You'll see this everywhere: Spätis in Berlin](https://www.lonelyplanet.com/articles/spatis-in-berlin)] |
| **Weekly market (*Wochenmarkt*)** | A square with striped awnings, produce crates, a grill truck, a cheese van. |
| **Canteen / Mensa** | A tray line, plastic trays, white ceramic, a cutlery bin, a daily menu board — the everyday warm-lunch register for students and office workers. |
| **Harbour kiosk (North)** | A fish-roll counter with a glass display case, gulls, container cranes in haze. |

---

## ZONE CHARACTERIZATION

Germany's regional variation is real and heavy — heavier, in raw dish count,
than anything documented in the UK file — but it resolves at the **dish and
vocabulary level**, not at the food+vocabulary+architecture triple-axis
break that earned Scotland its own file within the UK structure. This is
the concrete reasoning behind the "one file, heavy §4.6 load" structural
decision, not just an assertion of it:

- **Meal structure and rhythm are genuinely national.** Mittagessen as the
  traditional main hot meal, Kaffee und Kuchen as the mid-afternoon ritual,
  and Abendbrot as the traditional cold evening bread-and-cold-cuts meal are
  documented the same way from Hamburg to Munich — the *names*, *timing*,
  and *table logic* don't change by region the way, say, a Scottish "fish
  supper" versus an English chippy visit changes both vocabulary and the
  underlying order. What varies is which **dishes** fill those slots, and
  what they're **called**.
- **No single German region has a housing/architecture type as
  categorically distinct from the national default as Scotland's sandstone
  tenement-and-close was from an English terrace.** Regional architecture
  does vary — half-timbered Baden villages, Hanseatic red-brick in the
  North, Baroque old towns in Saxony, prefabricated (*Plattenbau*) estates
  across the former East — but this is a *palette of regional textures
  within one national vernacular*, not a structurally unrelated building
  type the way a Glasgow tenement's shared "close" stairwell has no English
  equivalent at all. This file treats regional architecture as scene-setting
  detail within the general environmental norms below, not as grounds for a
  split.
- **The dish-level variation is real and extensive, and is handled the way
  this project's schema is designed to handle it**: through schema §4.6's
  coexisting-variant disclosure (Kartoffelsalat vinegar-vs-mayo, Haxe-vs-
  Eisbein, Jägerschnitzel West-vs-East, currywurst with/without casing,
  Sauerbraten's regional sauce variants, Brezel's Swabian-vs-Bavarian
  shape) rather than through separate regional files. This is closer to how
  `uk.md` handles England's internal North/South condiment and naming
  variation (a "zones within one file" pattern) than to how Scotland was
  split out — Germany's regions each clear the "would depicting the wrong
  variant look visibly wrong" test at the **dish** level repeatedly, but
  none of them clears it at the **whole-culture** level the way Scotland
  did. [CONFIDENCE: MEDIUM-HIGH — this file's own synthesis of the pattern
  found across dozens of individual dish/region facts checked this pass,
  not a single source stating the comparative claim directly]

**What this zone characterization is not claiming.** Bavaria is not
"generic Germany," and defaulting every German scene to Lederhosen, Dirndl,
and Alpine backdrops is exactly the caricature this file's own Anti-Patterns
list (below) flags as the single most common failure mode for this market.
**Caricature-avoidance note (editorial judgment, not a sourced claim):** do
not default every German scene to Bavarian folk-costume/Alpine dressing,
and do not default every festive or communal scene to a beer-tent interior
— see the alcohol-exclusion rule and the Munich-only Oktoberfest note in the
FESTIVAL & OCCASION CALENDAR for why both defaults are specifically wrong.

---

## TRUSTED CONTENT

### GENERAL NORMS

- **Population**: Germany is the EU's largest member state by population,
  at roughly 83.4–83.6 million as of the most recent official count (31
  December 2025) and mid-2026 estimates. Germany's 2025 birth count (~654,300)
  was its lowest since 1946, with immigration (net ~320,000/year) the
  primary factor keeping the population from contracting. [CONFIDENCE: HIGH]
  [SOURCE: [Federal Statistical Office of Germany (Destatis)](https://www.destatis.de/EN/Home/_node.html);
  [Worldometer — Germany Population](https://www.worldometers.info/world-population/germany-population/)]
  This corrects the draft's own unverified "~83–84M" to a sourced figure in
  the same range — nothing to correct in substance, only in confidence tier.
- **Meal structure (in-scope slots)** — corrected and re-sourced from the
  draft's own unverified table:

  | Slot | Local term | Typical time | What the table looks like | Confidence |
  |---|---|---|---|---|
  | Lunch | *Mittagessen* | 12:00–14:00 | Traditionally the day's main hot meal: meat, potatoes/dumplings/noodles, sauce, vegetable. Canteen trays on weekdays; fuller spreads on Sundays. Office workers often eat lighter (a bakery roll, Döner, or salad). | MEDIUM-HIGH — timing and traditional-main-meal status corroborated across multiple sources; the "office workers eat lighter" note is this file's own reasonable synthesis, not independently sourced |
  | Afternoon snack | *Kaffee und Kuchen* | 15:00–16:30 | Cake slices on small plates, cake forks, a whipped-cream bowl, often a tablecloth. **No coffee cups/pots in frame** (beverage scope). | MEDIUM-HIGH — a well-documented national ritual |
  | Dinner | *Abendbrot* / *Abendessen* | 18:00–19:00 | Traditionally **cold**: a bread board with cold cuts, cheese, pickles, raw vegetables. **Genuinely shifting, not a stable default — offer as a real coexisting choice, not a silent one.** A 2019 survey found 38% of Germans named dinner (not lunch) their day's main meal, up from about a third a decade earlier — a real, measured move toward a warm evening meal, especially in urban and younger households, alongside (not yet replacing) the traditional cold Abendbrot. Restaurant dinners are warm by default regardless of home habits. | MEDIUM-HIGH for the traditional cold-Abendbrot pattern and its documented decline [SOURCE: [The Local — Is Germany falling out of love with Abendbrot?](https://www.thelocal.de/20220310/is-germany-falling-out-of-love-with-abendbrot); [The Local — Abendbrot: what time do Germans eat dinner?](https://www.thelocal.de/20230329/abendbrot-what-time-do-germans-eat-dinner)] |
  | Brotzeit / Vesper | *Brotzeit* (Bavaria), *Vesper* (Swabia) | Late morning to afternoon | A wooden board: cold meats, cheese, a pretzel, radish. | MEDIUM — carried from the draft, not independently re-verified this pass beyond the Weißwurst-specific Brotzeit entry below |
  | Street / late night | *Imbiss* | Anytime, especially after 22:00 | Paper trays, foil, standing tables, neon. | MEDIUM — general, well-corroborated pattern across street-food sourcing |

  **Photorealism implication, carried from the draft and not contradicted by
  anything found this pass**: a cold Abendbrot bread-board spread reads as
  at least as authentically German as a hot plated dinner for an evening
  scene — offer both as coexisting registers per §4.6, not one silent
  default. [EDITORIAL, grounded in the sourced decline data above]
- **Housing stock**, replacing the draft's own unverified assumptions with
  Destatis's actual 2024 figures: apartments in multi-family buildings are
  the single largest category at **54.8%** of Germany's housing stock (23.5
  million units), single-family houses **31.4%** (13.5 million units), and
  two-family houses **12.8%** (5.5 million units). [CONFIDENCE: HIGH — a
  named, current national statistical office figure] [SOURCE: [Destatis —
  Dwelling stock, Germany](https://www.destatis.de/EN/Themes/Society-Environment/Housing/_Graphic/_Interactive/dwelling-stock.html)]
  **A genuine, sharp cross-country contrast worth stating directly per
  `country-file-schema.md` §5.2**: roughly 55% of German households rent
  rather than own — one of the highest rental rates in Europe, and a real
  contrast with both the UK and US's homeownership-leaning housing
  narratives. [CONFIDENCE: MEDIUM-HIGH — widely corroborated across housing-
  market and balcony-solar reporting this pass, though not traced to a
  single named Destatis release] [SOURCE: [SpaceDaily/AFP — More than a
  million German households have hung solar panels off their balcony
  railings](https://spacedaily.com/b-more-than-a-million-german-households-have-hung-solar-panels-off-their-balcony-railings-and-plugged-them-into-a-wall-socket-and-the-law-caps-each-at-800-watts-a-fridge-and-a-laptop/)]
  This makes a rented apartment at least as representative a "German home"
  default as a single-family house — do not default every home scene to a
  detached house.
- **Balcony access is common; private-garden access is comparatively rare
  and apartment-typical, not house-typical** — a genuine finding, not
  assumed. Roughly 67% of German households have a balcony or terrace (a
  2020 German Garden Industry Association study), noticeably more than have
  a private garden; balcony share varies by city (71% of listed Berlin
  apartments have one, versus 47% in Essen). [CONFIDENCE: MEDIUM — a single
  named industry-association study, corroborated by city-level rental-market
  reporting, not a government statistical release] [SOURCE: [home24 —
  Gardens in Germany: Who Still Has Access to a Garden?](https://www.home24.de/garden-study/)]
  This directly supports the draft's own "Balkonien" (the balcony-staycation
  joke) as a genuine, representative outdoor-meal setting for an apartment-
  dwelling household, not a novelty.
- **Young adults leave the parental home earlier than the UK or EU
  average — a genuine, measured cross-country contrast.** Roughly 14% of
  German 25–29-year-olds still live with their parents, well below the EU-
  wide average (around 49% of 18–34-year-olds EU-wide, per Eurostat) and
  below the UK's own documented ~33% of 20–34-year-old men. [CONFIDENCE:
  MEDIUM-HIGH — Eurostat-sourced, though the exact age bands compared differ
  slightly across the UK and Germany figures, so treat the contrast as
  directional rather than a precise like-for-like ratio] [SOURCE: [Eurostat
  — Young people: housing conditions](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Young_people_-_housing_conditions)]
  A young-adult German household scene is therefore at least as plausibly a
  shared-flat (*Wohngemeinschaft*/WG) or a solo rental as a parental home —
  do not default a Gen-Z-lens scene to a family kitchen.
- **Trademark-genericization list for this file (schema §7.5).** Real
  brands/businesses cited as evidence for a claim elsewhere in this file —
  name them in citations only, never as literal prompt subjects.

  | Real entity (evidence only) | Prompt substitute |
  |---|---|
  | Named Berlin currywurst stands (e.g., a specific East Berlin Imbiss famous for skinless sausage) | "a Berlin street-food stand" |
  | Named döner/kebab shops | "a busy döner kebab stand" |
  | Named Munich beer halls and beer-garden operators | "a traditional Munich inn" |
  | Named folk/wine/carnival festivals (see FESTIVAL & OCCASION CALENDAR) | Generic descriptions, e.g. "a large Munich autumn folk festival," never the trademarked festival name |
  | The specific brown liquid-seasoning bottle used to season currywurst sauce and other dishes | "a small brown seasoning bottle" or omit entirely |
  | Named mustard and curry-ketchup brands | "a squeeze bottle of German mustard" / "curry-spiced ketchup" |
  | Named seafood and bakery chains | "a harbour fish kiosk" / "a neighbourhood bakery" |
  | The DPG deposit-return logo (the blue bottle-can-arrow symbol; legally sized 14×16mm, a real trademarked mark) | "a small blue recycling/deposit symbol, rendered generic and not legible" or omit [CONFIDENCE: HIGH for the logo's legal size and trademarked status] [SOURCE: [DPG Deutsche Pfandsystem — About DPG](https://dpg-pfandsystem.de/en/the-one-way-deposit-system/about-dpg.html)] |
  | Hooded-beach-chair (*Strandkorb*) manufacturers | "a hooded wicker beach chair" |
  | Landmarks (Brandenburg Gate, Cologne Cathedral, Neuschwanstein Castle, the Elbphilharmonie, Munich's towers) | Per `country-file-schema.md` §7.5's standing landmark rule: **never** a named, recognizable landmark as a literal prompt subject — describe the generic category of setting instead ("a grand Baroque old-town square," "a Gothic cathedral silhouette in soft focus") the same way this project genericized Coney Island's Wonder Wheel |

### VISUAL & PLATING NORMS

- **Palette.** The comfort-food core runs deep amber-brown and gold (roast
  gravy, crackling, breadcrumb crusts, lye-pretzel crust) against pale ivory
  starches (dumplings, Spätzle, potatoes) — a browner, less golden-fry-
  dominated palette than the UK's chip-shop register. Color relief comes
  from burgundy-violet red cabbage, olive-green stewed kale or sauerkraut,
  and — regionally — the vivid spring-green of Grüne Soße or the magenta of
  Labskaus's beetroot mash. [EDITORIAL, grounded in the dish entries below]
- **Texture lexicon** — this file's own visual/texture synthesis, aggregated
  across recipe, food-history, and food-photography sourcing consulted this
  pass rather than independently footnoted line by line (the same treatment
  `uk-scotland.md` gave haggis's and neeps-and-tatties' texture description).
  Treat each row as MEDIUM confidence unless a dish entry below cites a
  stronger source for the specific claim.

  | Surface | What it looks like | Common failure to avoid |
  |---|---|---|
  | **Pork crackling (*Kruste*)** | Puffed, blistered, glassy amber-to-chestnut skin with popcorn-like bubbles; hard and brittle, cracking rather than bending when cut; dry and matte-glossy, never wet. | Soft, rubbery, uniformly brown skin; a wet glaze. |
  | **Breadcrumb crust (Schnitzel)** | Fine, even golden-to-amber crumb that puffs into loose waves and blisters, lifting away from the meat; faint oil sheen, matte overall. | Thick, craggy fried-chicken-style batter; a uniform flat coating stuck to the meat. |
  | **Lye crust (*Laugengebäck*)** | Deep mahogany-to-chestnut, lacquered satin shine, fine crackle pattern; coarse opaque white salt crystals (2–4mm), irregular. | Pale tan color, uniform shine, fine table salt, cinnamon sugar. |
  | **Brötchen crust** | A thin, crackly crust that shatters into flakes; golden, with a lighter split ridge (*Schnitt*) on top and airy, irregular-holed off-white crumb. | A soft enriched bun; a burger bun's glossy dome. |
  | **Rye/mixed bread** | Thick, dark-brown, rustic crust, often cracked and flour-dusted; dense, moist, fine-grained crumb in grey-brown to near-black. | A fluffy white sandwich loaf. |
  | **Brown gravy (*Bratensoße*)** | Glossy, dark mahogany, medium-thick; coats the back of a spoon and pools with a clean edge. | Thin brown water; a grey opaque paste. |
  | **Potato dumpling** | Smooth, pale ivory-to-greige surface with a soft satin sheen; the cut face is fine-grained and slightly gummy-glossy. | A mashed-potato ball; a bready texture. |
  | **Sauerkraut** | Pale straw-to-ivory translucent strands, moist, loosely heaped, with a faint fat sheen when braised. | Green cabbage; bright yellow color; dry shreds. |
  | **Red cabbage (*Rotkohl*)** | Deep burgundy-violet, glossy, soft braised shreds, sometimes with apple pieces; color bleeds magenta into adjacent sauce. | Raw, crunchy purple slaw. |
  | **Grilled sausage casing** | Taut, slightly wrinkled where cooled, dark charcoal grill stripes, small split points where fat escaped, a glistening surface. | A uniform tan hot-dog finish. |
  | **Emulsified sausage interior** (Leberkäse, Weißwurst, currywurst) | Uniform fine grain, no visible chunks; rosy-pink (cured) or pale grey-white (uncured veal); a smooth, springy cut face. | A coarse, crumbly interior. |
  | **Mustards** | *Mittelscharf*: smooth, bright yellow-ochre. Bavarian sweet mustard (*Süßer Senf*): dark tan-brown, glossy, with visible coarse mustard-seed grains. | The neon-bright yellow of US ballpark mustard. |

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **Climate and light**: temperate overall, but genuinely more continental
  toward the east and interior (colder, harsher winters; hotter, more humid
  summers) than the maritime-moderated North and Rhineland — a real,
  well-documented general climate fact, not independently re-sourced this
  pass. Long, light summer evenings support outdoor/beer-garden/allotment
  scenes May–September; short, dark winter days (dusk by mid-afternoon in
  December) suit Christmas-market and indoor-Abendbrot scenes. [CONFIDENCE:
  HIGH — general, well-documented geography]
- **Housing and tenure — see GENERAL NORMS above for the sourced figures.**
  A rented apartment (54.8% multi-family stock, ~55% renting overall) is at
  least as representative a default as a single-family house; a balcony is
  a more representative outdoor-meal setting than a private garden for an
  apartment-dwelling household.
- **Returnable-crate storage** (stacked plastic crates of glass bottles in a
  hallway, cellar, or kitchen corner) is a genuine, checkable German
  domestic-realism cue tied to the deposit (*Pfand*) system — see COCA-COLA
  MARKET INTEGRATION for the deposit system itself. [CONFIDENCE: MEDIUM —
  carried from the draft as a plausible, widely-recognized cue; not
  independently re-verified as a photographed convention this pass]
- **Caricature-avoidance guidance (editorial judgment, not a sourced
  claim).** Do not default every German home/leisure scene to Bavarian
  Alpine dressing (Lederhosen, Dirndl, chalet architecture) outside a
  Bavaria-specific brief — Lederhosen and Dirndl are themselves situational
  (festivals, some rural Sundays in Bavaria specifically), not everyday
  wear anywhere in the country. Do not default every communal/festive scene
  to a beer-tent interior — see the alcohol-exclusion rule.

#### Scenario: Casual lunch at home, indoors — 1 person

Two plausible, co-equal registers, not one default: a warm, simple plated
meal reheated from a larger batch (a hallmark of the traditional hot-lunch
pattern), or — increasingly common, especially for an office worker — a
cold, light lunch: a bakery *belegtes Brötchen* (a filled roll), a Döner, or
a salad, eaten at a kitchen table or a desk. [MEDIUM-HIGH for the general
pattern; the office-worker framing is this file's own reasonable synthesis]

#### Scenario: Casual lunch at home, indoors — 2 people

A small kitchen or kitchen-diner table, two individually plated warm
lunches, or a shared Abendbrot-style cold spread moved earlier in the day —
co-equal registers: a couple, a parent and a child home from school
(breakfast/school hours are out of this file's scope, but a midday meal
together is not), two flatmates.

#### Scenario: Casual lunch at home, indoors — 3 people

The same register scaled up, or a family Sunday lunch specifically: a warm
roast-style meal (Schweinsbraten or Rouladen — see DISH CATALOG) served
family-style from a shared platter and gravy boat, with each diner still on
an individual plate. [MEDIUM-HIGH for the Sunday-lunch register as a genuine
national pattern, not independently re-verified with dedicated new sourcing
this pass beyond what the individual dish entries below carry]

#### Scenario: Dinner at home, indoors

**Two genuinely coexisting registers, offered as an explicit choice per
schema §4.6, not a silent default**: the traditional cold Abendbrot spread
(see GENERAL NORMS and the Abendbrot dish entry) under a warm pendant lamp
with early-evening window light; or an increasingly common warm dinner —
pasta, a stir-fry, a warm plated main — especially in urban and younger
households, per the sourced 38%-vs-a-third shift documented above. **New
Year's Eve tabletop raclette is a specific, well-documented, and distinct
register** (see the dedicated dish entry) — a genuinely common German home
dinner on 31 December specifically, not an everyday occurrence.

#### Scenario: Meal outdoors at home

**The allotment garden (*Schrebergarten*) and the balcony (*"Balkonien"* —
literally a pun on staying home for a "balcony vacation") are both
genuinely representative, not just plausible-sounding**, given how common
renting and apartment-dwelling are (see GENERAL NORMS). An allotment scene:
a neat hedged plot, a small wooden summer house, a patio table with an
oilcloth cover, a grill. A balcony scene: geraniums in planter boxes, a
folding bistro table, an old-building façade. Park grilling (a kettle or
disposable grill in a public park, sausages and marinated neck steaks,
pasta salad and potato salad on the side) is a third, equally plausible
summer register. [MEDIUM — carried from the draft; the tenure/balcony-access
statistics above independently support treating the balcony as at least as
representative as a private garden]

#### Scenario: Meal on the go — 1 person

The Imbiss stand (currywurst, a Bratwurst im Brötchen, Pommes) and a bakery-
counter *belegtes Brötchen* are the two default registers, eaten standing at
a high table, on a park bench, or walking. A Döner in flatbread, half-
wrapped in paper, is the other strong default, especially for a younger or
urban cast. [MEDIUM-HIGH — well-corroborated as everyday, high-frequency
registers across street-food sourcing this pass]

#### Scenario: Away from home — 1 person at a restaurant/café

A Mensa/canteen tray-line lunch (a genuine, high-frequency student/office
register) or a solo Imbiss-counter meal are both unremarkable. A café table
(for a Kaffee-und-Kuchen-register snack, not a full meal, per this file's
scope) is the other default.

#### Scenario: Away from home — 2–3 people at a restaurant/café

**The traditional inn (*Wirtshaus*/*Gasthaus*) and the beer garden are the
default German group-meal venues** — both carry the alcohol-exclusion
framing requirement (see COCA-COLA MARKET INTEGRATION): dark wood, tiled
stoves, heavy tables and checked linen for the inn; gravel, chestnut-tree
canopy, and long folding tables for the beer garden, framed on food, Coca-
Cola, and people, with other guests' tables empty of drinks rather than
showing blurred alcohol. A Döner shop, a Greek-German or Italian-German
restaurant, or an Asia-Imbiss are equally plausible, more casual,
Gen-Z-relevant alternatives for this scenario, per §4.11's "contemporary
everyday food" note below.

#### Settings & environments register (supplementary detail)

The draft's own settings breakdown is genuinely richer than the eight
mandatory scenarios above and is preserved here as supplementary staging
detail, the same way `uk.md` keeps its Quick-Reference table alongside its
per-scenario prose.

**Urban everyday**: the Imbiss, the Döner shop, the Späti (Berlin-specific —
see QUICK-REFERENCE), the *Büdchen*/*Trinkhalle* (a tiny Cologne/Ruhr corner
kiosk with a sales hatch), a bakery standing counter, a butcher's hot
counter (*Metzgerei*, selling warm Leberkäse and meatballs from a tiled
glass case), the weekly market (*Wochenmarkt*), the canteen/Mensa, and a
petrol-station shop with a bistro corner and roller-grill sausages.

**Outdoor leisure**: an outdoor public pool (*Freibad*) with a snack kiosk
hatch; lakes and quarry lakes (*Badesee*, *Baggersee*) with a jetty and a
kiosk shack; the Baltic/North Sea beach with hooded wicker *Strandkorb* beach
chairs among dunes and marram grass; the North Sea dyke (grazing sheep, a
bike path, a huge sky); city riverbanks and meadows (Rhine meadows, Munich's
river gravel banks, Elbe beaches) with disposable grills in designated
zones; a former-airfield park (Berlin-specific); the allotment garden and
balcony (see the home-outdoors scenario above); park grilling; a university
lawn; the Spreewald canals (punts, alder trees, pickle stalls at landing
stages); and a river bike-tour rest stop.

**Travel & transit**: a high-speed train seat-back tray with landscape
blurring past; an S-Bahn/U-Bahn station kiosk; a motorway service area; a
harbour kiosk and ferry deck (Hamburg); a rest-area picnic table.

**Sport**: a football stadium concourse kiosk; a public-viewing screen on a
square; an amateur football clubhouse kiosk; an Alpine ski-slope hut terrace
(Bavarian Alps only — do not generalize this register beyond Bavaria); a
summer hiking hut.

**Traditional dining**: the beer garden and the traditional inn (see the
away-from-home scenario above); a seasonal wine tavern or Apfelwein tavern —
both are alcohol-dominant registers in reality and should be used only for
strict food-only framing, or avoided, per the alcohol-exclusion rule.

**Home**: the Abendbrot table; a Sunday-lunch table; the Kaffee-und-Kuchen
table (cake on a stand, a cream bowl, patterned china, no coffee cups in
frame); the New Year's Eve raclette table; returnable-crate storage as a
realism cue.

#### Coca-Cola alone (no bite): strongest moments

Carried from the draft largely as-is — these are plausible, well-composed
scene concepts rather than sourced factual claims, and none required
correction this pass:

1. A hooded beach chair on the Baltic coast, wind in the marram grass.
2. The kerb outside a Berlin Späti at dusk.
3. A Freibad lawn in midsummer glare, condensation beading on the can.
4. A city river meadow at sunset.
5. A North Sea dyke rest stop mid-bike-ride.
6. A high-speed train window seat, landscape blurring past.
7. A football terrace or public-viewing crowd.
8. An allotment-garden deckchair.
9. A festival campground in the morning haze.
10. A Christmas market: a mittened hand holding a cold bottle under string lights.

### FESTIVAL & OCCASION CALENDAR

**General rule, unchanged from the draft and independently supported by
this pass's Munich-only-Oktoberfest finding below**: folk festivals and wine
festivals are genuinely, heavily alcohol-centred in reality. Frame every
such scene on food stalls, rides, sweets, lights, parades, and crowds
outside the tents — never inside a beer tent, never with steins, wine
glasses, or mugs in frame. Genericize festival names in prompts per schema
§7.5, e.g. "a large Munich autumn folk festival," never the trademarked
festival name.

**The "Oktoberfest is Munich-only" framing is correct and worth stating
firmly** — this was a specific spot-check this pass ran. The original,
largest Oktoberfest is Munich's own two-week festival on its traditional
festival ground, drawing roughly 7 million visitors a year (a record 7.2
million in 2023); the name and format have since been widely imitated by
smaller local "Oktoberfest"-branded events elsewhere in Germany and
internationally, but these are imitations of Munich's festival, not evidence
that "Oktoberfest" is a generic, nationwide German autumn tradition the way
Christmas markets are. [CONFIDENCE: HIGH] [SOURCE: [Britannica —
Oktoberfest](https://www.britannica.com/topic/Oktoberfest); general
Oktoberfest-history sourcing corroborating the 7M+ annual attendance figure]
Do not use "Oktoberfest" imagery (tents, dirndl-and-lederhosen crowds,
festival grounds) as generic shorthand for "German food culture" outside a
Munich-specific brief — this is this file's single most important anti-
pattern (see ANTI-PATTERNS below).

| Period | Occasion | Food cues | Visual cues | Confidence |
|---|---|---|---|---|
| Nov–Feb | Kale season, group kale walks (North) | Grünkohl mit Pinkel | Frost, grey light, groups in winter coats | MEDIUM — carried from the draft |
| 11 Nov → Feb/Mar | Rhineland Carnival (street carnival, Thursday to Rose Monday parades) | Berliner doughnuts, Imbiss food, sausages | Elaborate costumes, floats, sweets thrown into crowds, confetti; avoid culturally appropriative costumes | MEDIUM-HIGH — a well-documented national tradition |
| Pre-Lent | Swabian-Alemannic Fasnet (Baden-Württemberg) | Doughnuts, fried pastries | Carved wooden masks, shaggy/patchwork costumes, bells, old-town parades | MEDIUM |
| 31 Dec | New Year's Eve (*Silvester*) | Raclette or fondue is one of the most commonly cited German NYE dinner choices — a real, widely corroborated tradition, not just plausible-sounding | Fireworks, balconies, streets | MEDIUM-HIGH — corroborated across multiple independent lifestyle/culture sources, though not a single dedicated survey with an exact popularity percentage |
| Maundy Thursday | *Gründonnerstag* (Green Thursday) | **Grüne Soße** — confirmed this pass as a real, specific Maundy Thursday food tradition, not a loose association: the "eat something green on Green Thursday" custom is well documented, and Frankfurt's own seven-herb Grüne Soße mix has been EU-protected (a geographical-indication-style registration) since 2016 | Spring green | HIGH [SOURCE: [germanculture.com.ua — Why Germans Eat Green Food on Maundy Thursday](https://germanculture.com.ua/german-traditions/why-germans-eat-green-food-on-maundy-thursday-grundonnerstag/); [Frankfurt on Foot — Frankfurt Grüne Sosse](https://frankfurt-on-foot.com/2024/01/12/frankfurt-grune-sosse-or-green-sauce/)] |
| Apr–24 Jun | Asparagus season (*Spargelzeit*) — **end date corrected from the draft's vague framing to a specific, sourced date** | Spargel | Farm stands, white tents. **Traditionally ends on 24 June (Johannistag, St. John's Day)**, after which fields rest for the year — a specific, real, checkable date, not a loose "spring/early summer" window. | HIGH [SOURCE: aggregated German food-culture sourcing consistently citing 24 June/Johannistag as the traditional close] |
| ~11 Nov | St. Martin lantern processions | Weckmann bread figure, roast goose | Children carrying glowing paper lanterns at dusk, a rider on a horse, a bonfire. **Children-policy caution applies** — see below. | MEDIUM — a well-known national children's tradition, not independently re-verified beyond general awareness this pass |
| Late Sep–early Oct | **Munich autumn folk festival (evidence name: Oktoberfest). Munich only — never generalize nationally.** See the dedicated note above. | Haxe, Hendl, Brezel, Steckerlfisch, gingerbread hearts | Rides, stalls; tents avoided entirely per the alcohol-exclusion rule | HIGH for the Munich-only framing |
| Sep–Oct | Wine festivals (Palatinate sausage-and-wine-market festivals, etc.) | Zwiebelkuchen, Saumagen, sausages | **Alcohol-dominant; food-only framing** | MEDIUM |
| Late Nov–23 Dec | Christmas markets | Bratwurst, Reibekuchen, Schupfnudeln, garlic mushrooms, candied almonds, gingerbread hearts, crêpes | Wooden huts with fir garlands, warm string lights, breath vapour, early dusk (~16:30), steam off giant pans. **Mulled-wine mugs dominate reality; none may appear in frame.** | HIGH for the market format and food items as a well-documented national tradition |
| 24–26 Dec | Christmas Eve and the Christmas feast | Potato salad + sausages (24th); roast goose, red cabbage, dumplings (25th–26th) | Christmas tree, candles; a festive table | MEDIUM-HIGH |

**Children & schools policy caution, now grounded in a real, confirmed TCCC
policy rather than left as an internal flag** — see the Alcohol Exclusion
section above for the full sourced policy citation. Applied here: do not
place Coca-Cola in a school setting, and do not show a young child (under
roughly 13, per TCCC's own stated threshold) as the drinker in a St.
Martin-procession or children's-birthday scene; frame family scenes on
adults with the product. [CONFIDENCE: HIGH — grounded in TCCC's own public
Responsible Marketing Policy, cited above]

---

## DISH CATALOG

**Scale note for every entry.** Per `coca-cola-guidelines.md` §3/§4.3, the
non-US-market default single-serve can is **330mL, 115.2mm (11.52cm) tall,
66.1mm (6.61cm) diameter** — this is the figure to use for Germany's can-
based scale anchors, replacing the draft's own rougher "~11.5cm × ~6.6cm"
placeholder with the already-verified precise figure (the UK build did the
same correction; see `DECISIONS.md`). **This pass could not independently
confirm a Germany-specific can dimension beyond the general non-US default,
and could not confirm whether Germany uses a "slim" 330mL can variant
alongside or instead of the standard-diameter can** — flagged honestly as a
remaining gap for this market specifically (see GAP LOG), not papered over.
Entree plate fallback: 26–28cm diameter, per
`tableware-composition-reference.md` §2 — this matches the draft's own
"dinner plate: 26–28cm" figure exactly, so no correction was needed there.
Oval-platter fallback (32–36cm in the draft) sits within
`tableware-composition-reference.md`'s own 32–38cm communal-platter range —
consistent, not contradicted.

**A note on this catalog's depth, an explicit proportionality choice.** The
draft documents roughly 50 dishes/snacks at real staging-relevance. Giving
every one of them the full per-dish schema (§4.5's complete field list)
would make this file unusably long relative to the actual likely prompt
volume per dish. This pass gives **full schema treatment to the dishes this
project's own Priority A/B verification queue flagged, and to every dish
with a genuine coexisting-variant (§4.6) or naming-sensitivity issue**, and
keeps the remaining, lower-priority catalog items as **compact but still
schema-conformant tables** (each still carrying a real-world scale anchor
and a confidence tag) — the same "compact index entry, not a bare list"
standard `country-file-schema.md` §4.3 sets for a style-map pointer. This is
a proportionality judgment call, not a shortcut around the schema's
requirements; flagged explicitly here rather than left implicit.

### Bread & Abendbrot

#### Dish: Brötchen (bread rolls)

- Category: Everyday, all in-scope meal slots.
- Cuisine lineage: Native German; regional naming varies (*Semmel* in
  Bavaria, *Schrippe* in Berlin, *Weckle* in Swabia, *Rundstück* in Hamburg)
  without the roll's actual form changing — a prevalence/naming-only
  variation per schema §4.2, not a style-map case. [CONFIDENCE: MEDIUM —
  naming variation is widely known; not independently re-verified region by
  region this pass]
- Serving format: A bakery basket or paper bag of mixed rolls (plain white
  split-top, poppy-seed, sesame, pumpkin-seed, multigrain, dark rye); as a
  *belegtes Brötchen* (a filled sandwich roll — salami, cheese, or ham, plus
  a lettuce leaf and a cucumber or egg slice) for a grab-and-go lunch.
- Serving vessel: Bakery basket or paper bag; a bread/side plate (19–20cm)
  at the table.
- Visual/plating characteristics: A thin, crackly crust that shatters into
  flakes, golden with a lighter split ridge on top; airy, irregular-holed
  off-white crumb. Seeded rolls are densely coated, with seeds scattering
  onto the board. A Kaiser roll shows a five-arm pinwheel pattern.
- Real-world scale (§4.5): Roughly 9–11cm diameter, 5–6cm tall — clearly
  smaller than the 330mL can's 11.52cm height. [CONFIDENCE: MEDIUM — a
  reasonable retail-bakery estimate, not independently measured this pass]
- Common confusion: A soft, glossy US-style burger bun or brioche roll —
  ruled out by the crackly, flake-shattering crust and airy, irregular
  crumb, neither of which a soft enriched dough produces.
- Confidence: MEDIUM-HIGH overall.
- Sources: general German-bakery sourcing aggregated across multiple food-
  culture references; not independently re-verified with a dedicated search
  this pass beyond general confirmation of the naming variation.

#### Dish: Rye and mixed loaves (incl. Pumpernickel)

- Category: Everyday, Abendbrot staple.
- Visual/plating characteristics: Thick slices fanned on a board. A dark
  rye or mixed-grain loaf (*Mischbrot*) shows a thick, dark-brown, rustic,
  often cracked and flour-dusted crust with a dense, moist, fine-grained
  crumb. Pumpernickel is near-black-brown, crustless-looking, very fine and
  moist, with a slight whole-grain speckle.
- Real-world scale (§4.5): Slices roughly 1–1.5cm thick, 12–15cm across;
  Pumpernickel slices roughly 9×9cm, ~0.7cm thick. [CONFIDENCE: MEDIUM —
  reasonable retail-bread estimate, not independently measured]
- Common confusion: A white sliced sandwich loaf — ruled out by the dark
  color and dense, moist crumb.
- Confidence: MEDIUM.

#### Dish: Abendbrot spread

- Category: Everyday, the defining cold-dinner register (see GENERAL NORMS
  for its documented, genuine decline alongside a rise in warm dinners —
  offer both as coexisting choices, not a silent default).
- Serving format: One wooden board (*Brettchen*) per person, laid with a
  butter dish, sliced cold cuts (salami, cooked ham, liver sausage), sliced
  cheese (Gouda, or Emmental showing its characteristic round holes),
  pickled gherkins, radishes, tomato and cucumber slices, chives; sometimes
  cold Frikadellen or egg halves.
- Serving vessel: Individual wooden board (*Brettchen*), roughly 22×14cm.
- Visual/plating characteristics: Salami shows a visible fat-marbling
  mosaic and a matte red-brown cut face; Emmental shows round, glossy
  holes; liver sausage is a soft pinkish-beige spread with a visible knife
  trail; gherkins are glossy and bumpy with dill fronds clinging.
- Real-world scale (§4.5): Brettchen ~22×14cm; gherkins ~8–10cm; radishes
  ~2.5cm.
- Confidence: MEDIUM — a well-corroborated general German domestic
  convention, not independently re-verified with a dedicated dish-level
  source this pass beyond the broader Abendbrot-prevalence sourcing above.
- Sources: [The Local — Is Germany falling out of love with Abendbrot?](https://www.thelocal.de/20220310/is-germany-falling-out-of-love-with-abendbrot)

#### Dish: Mettbrötchen (raw seasoned pork roll)

- Category: Everyday snack/party food; North and West-coded.
- Serving format: A halved roll spread thickly with seasoned raw minced
  pork (*Mett*), topped with diced or ringed raw onion and black pepper.
- Visual/plating characteristics: Bright rose-pink, finely minced, slightly
  glossy, often with fork-ridged or piped wavy lines on the surface; crisp,
  translucent-white onion.
- Real-world scale (§4.5): Half roll ~10cm; Mett layer ~1–1.5cm thick.
- **Handling note (carried from the draft)**: raw meat reads as unsafe or
  unappetizing to many non-German viewers; use only on explicit request,
  lit cleanly and brightly rather than moodily, to avoid an accidental
  "spoiled food" read.
- Confidence: MEDIUM — a genuine, real dish, not independently re-verified
  with new sourcing this pass.

### Street food & Imbiss

#### Dish: Currywurst

- Category: Everyday. Lunch, snack, and late-night register.
- Cuisine lineage: Native German, invented dish, with a genuinely contested
  origin — verified and corrected from the draft's own compact framing.
  **Herta Heuwer's Berlin claim is the best-evidenced single account**: on 4
  September 1949, at her food stand in Charlottenburg, West Berlin, she
  mixed ketchup/Worcestershire sauce and curry powder (obtained from
  British occupying soldiers) with other spices and poured it over a
  grilled pork sausage; she patented her sauce under the name "Chillup" in
  1951 (some sources say 1959). A competing claim places a similar dish in
  Hamburg as early as 1947 (recalled by a single writer, Uwe Timm, decades
  later, with no corroborating second source), and the Ruhr area separately
  claims its own currywurst tradition from the 1950s onward, popular among
  miners as an affordable, filling snack. **Disclose the Berlin claim as
  best-evidenced, not as uncontested** — the same honest-dispute treatment
  this project already gives the UK's fish-and-chips Malin-vs-Lees dispute.
  [CONFIDENCE: HIGH that Heuwer's account is the best-documented and most
  widely credited; MEDIUM that it is definitively "first," given the
  uncorroborated Hamburg claim] [SOURCE: [Wikipedia: Currywurst](https://en.wikipedia.org/wiki/Currywurst);
  [Herta Heuwer](https://en.wikipedia.org/wiki/Herta_Heuwer); [Hamburg
  Travel — Berlin or Hamburg: Who invented the currywurst?](https://www.hamburg-travel.com/blog/berlin-or-hamburg-who-invented-the-currywurst/)]
- Regional form variation (§4.2/§4.3, form-changing) — **offer as an
  explicit choice per §4.6, not a silent default**:
  - **With casing (*mit Darm*)**: a seared bratwurst-style sausage with a
    firmer, crispier exterior — the historical West Berlin and Ruhr default.
  - **Skinless (*ohne Darm*)**: a smoother, paler-surfaced sausage with no
    casing at all — this pass found a specific, sourced origin the draft's
    compact note only gestured at: it developed in **East Berlin**
    specifically, tracing to Max Brückner (originally of
    Johanngeorgenstadt, Saxony), who began experimenting with a casing-free
    sausage from 1947 amid natural-casing shortages and brought the method
    to Berlin in the early 1950s; a well-known East Berlin Imbiss (cite as
    evidence only, genericize in any prompt) became particularly associated
    with this skinless style. [CONFIDENCE: HIGH for the East Berlin/casing-
    shortage origin] [SOURCE: [doeatbetterexperience.com — Currywurst in
    Berlin](https://doeatbetterexperience.com/blog/currywurst-berlin/); [Berlin
    Food Tour — Berlin Currywurst, More Than Just a Sausage](https://www.berlinfoodtour.de/2025/02/04/berlin-currywurst-more-than-just-a-sausage/)]
  - **Default when unspecified**: with casing — this reads more clearly as
    a sausage on camera and is the more widespread West German/Ruhr form.
    [EDITORIAL fallback, not a sourced claim — the skinless form should
    still be offered whenever an East Berlin/GDR-heritage setting is named]
- Serving format: Sliced into coins in a paper tray, doused in red-brown
  curry-ketchup sauce, dusted with curry powder; fries and/or a roll
  alongside.
- Serving vessel: Paper tray (~17×11cm).
- Utensils: A small two-pronged wooden or plastic fork (~8cm), stood
  upright in the tray.
- Visual/plating characteristics: Sauce is glossy, semi-thick, and clings to
  each slice, pooling in the tray's corners; curry powder sits as a dry,
  ochre-yellow dust on top in uneven patches, not dissolved; cut faces show
  a fine, uniform pink interior (per the emulsified-sausage texture entry
  above); a grilled (cased) version shows char stripes and slightly curled
  cut edges; translucent grease spots bloom on the paper tray.
- Real-world scale (§4.5): Tray ~17×11cm; sausage slices ~1.5–2cm thick,
  ~3cm diameter — each slice roughly half the 330mL can's diameter.
  [CONFIDENCE: MEDIUM — a reasonable retail-portion estimate, not
  independently measured this pass]
- Common confusion: A generic grilled hot dog (ruled out by the sliced-into-
  coins presentation and the curry-ketchup dusting); do not confuse with a
  whole, unsliced sausage on a roll (a different dish/register entirely).
- Confidence: HIGH for the origin dispute and the casing/skinless variant
  distinction; MEDIUM for exact portion dimensions.
- Sources: [Wikipedia: Currywurst](https://en.wikipedia.org/wiki/Currywurst); [Wikipedia: Herta Heuwer](https://en.wikipedia.org/wiki/Herta_Heuwer); [Hamburg Travel](https://www.hamburg-travel.com/blog/berlin-or-hamburg-who-invented-the-currywurst/); [doeatbetterexperience.com](https://doeatbetterexperience.com/blog/currywurst-berlin/); [Berlin Food Tour](https://www.berlinfoodtour.de/2025/02/04/berlin-currywurst-more-than-just-a-sausage/)

#### Dish: Döner Kebab (Turkish-German)

- Category: Everyday. Lunch, dinner, and late-night register — one of
  Germany's most-eaten fast foods nationwide.
- Cuisine lineage: Turkish-German — genuinely everyday German food, not a
  niche import; omitting it (along with pizza, Gyros, and pan-Asian Imbiss
  food) would produce a folkloric, locally-unrecognizable Germany. This
  project's own §4.1 spaghetti/meatballs-style honesty norm applies in
  reverse here: Döner is correctly attributed to Turkish-German origin, and
  that lineage should be stated plainly, not folded into "German food"
  without context.
- Serving format: A quarter-wedge of toasted flatbread, split and stuffed
  with shaved meat (veal, chicken, or turkey), lettuce, red cabbage,
  tomato, onion, and white garlic-yogurt sauce, sometimes a red chili
  sauce; the bottom half wrapped in paper or foil. **Dürüm** (a rolled wrap,
  grill-pressed) and a **Döner plate** (meat over rice or fries with salad)
  are genuine, coexisting serving-format siblings per schema §4.4, not
  variants of the same visual presentation — give each its own read: the
  flatbread wedge is the default, the Dürüm is a longer, narrower rolled
  cylinder with toasted grill-press spots, and the plate is a fully
  different, knife-and-fork presentation.
- Visual/plating characteristics: Meat shavings are thin, curled ribbons
  with caramelized, crisp brown edges and juicier, lighter interiors;
  flatbread is toasted with a dimpled golden crust, speckled with sesame
  and/or black nigella seeds, with a soft pale inner crumb; finely shredded
  violet red cabbage bleeds color into the white sauce; sauce drips down
  the paper.
- Real-world scale (§4.5): The flatbread wedge reads roughly 20–25cm across
  the arc and 12–15cm tall — clearly larger than the 330mL can is tall, and
  clearly larger than the hand holding it. The Dürüm reads roughly 25–30cm
  long, ~6cm diameter. [CONFIDENCE: MEDIUM — a reasonable retail-product
  estimate, not independently measured this pass]
- Common confusion: A Greek gyro in pita bread — a genuinely different,
  confusable dish; the flatbread's shape (a folded wedge, not a rolled
  pita) and the red-cabbage/white-garlic-sauce combination are the
  checkable differences that rule out gyro.
- Confidence: MEDIUM-HIGH for the dish's everyday-German status and form;
  MEDIUM for exact dimensions.
- Sources: general Turkish-German food-culture sourcing; not independently
  re-verified with a dedicated new search this pass beyond confirming its
  everyday, nationwide status is consistent with widely available reporting.

#### Dish: Bratwurst im Brötchen

- Category: Everyday snack; market-grill, stadium, and Christmas-market
  staple.
- Regional form variation (§4.6, coexisting variants, offer as a choice):
  - **Thüringer Rostbratwurst**: long and thin, visibly flecked with herbs
    (caraway, marjoram, garlic). **EU-protected geographical indication**
    (PGI), specific and sourced dimensions: **15–20cm long**, a thin sausage
    from Thuringia. [CONFIDENCE: HIGH] [SOURCE: [Wikipedia: Thuringian
    sausage](https://en.wikipedia.org/wiki/Thuringian_sausage); [GOV.UK —
    protected food name: Thüringer Rostbratwurst](https://www.gov.uk/protected-food-drink-names/thuringer-rostbratwurst)]
  - **Nürnberger Rostbratwurst**: finger-sized, **EU-protected PGI**, may
    legally only be produced in the city of Nuremberg, specific and sourced
    dimensions: **7–9cm long, 20–25g**, pork-based, seasoned with fresh
    marjoram, traditionally grilled over a beechwood fire and sold **three
    to a roll**, or 6–12 on a plate with sauerkraut. [CONFIDENCE: HIGH —
    corrects the draft's own vaguer "~7–9cm" estimate with an exact,
    EU-registered figure] [SOURCE: [Wikipedia: Nürnberger Rostbratwurst](https://en.wikipedia.org/wiki/N%C3%BCrnberger_Rostbratwurst);
    [Find My Seidla — The Nürnberger Rostbratwurst: History, PGI Protection](https://findmyseidla.de/en/blog/nuremberg-bratwurst)]
  - **Generic grill Bratwurst**: thicker, pale-to-browned, no PGI
    protection or regional exclusivity.
  - **Default when unspecified**: match the named region if one is given;
    otherwise a generic grill Bratwurst is the safest non-region-committing
    default. [EDITORIAL fallback]
- Serving format: A grilled sausage in a crusty white roll, overhanging both
  ends, with a mustard stripe.
- Visual/plating characteristics: Per the grilled-sausage-casing texture
  entry above (taut, wrinkled, charcoal grill stripes, glistening
  surface); the roll is torn-crusty outside with airy crumb inside;
  charcoal smoke is often visible in an outdoor-grill setting.
- Real-world scale (§4.5): Roll ~10–12cm; a Thüringer sausage overhangs the
  roll by roughly 3–5cm per side given its 15–20cm length; Nürnberger
  sausages (7–9cm each) sit fully within the roll when served three-to-a-
  roll, with visible overlap.
- Common confusion: A soft, split-top US hot-dog bun with relish — ruled
  out by the crusty white-roll texture and the mustard-not-relish default.
- Confidence: HIGH for both PGI sausages' protected status and dimensions;
  MEDIUM for the generic-Bratwurst register.
- Sources: [Wikipedia: Thuringian sausage](https://en.wikipedia.org/wiki/Thuringian_sausage); [GOV.UK](https://www.gov.uk/protected-food-drink-names/thuringer-rostbratwurst); [Wikipedia: Nürnberger Rostbratwurst](https://en.wikipedia.org/wiki/N%C3%BCrnberger_Rostbratwurst); [Find My Seidla](https://findmyseidla.de/en/blog/nuremberg-bratwurst)

#### Dish: Pommes (fries)

- Category: Everyday side/snack.
- Visual/plating characteristics: Medium-cut fries in a paper tray or cone,
  golden with a lightly blistered surface and a fluffy pale interior where
  broken; German mayonnaise is thick, pale ivory, and glossy, piped in
  ribbons that hold their shape (a genuinely different visual convention
  from a thin, runny US-style mayo squeeze); ketchup is darker and glossier.
- Real-world scale (§4.5): Tray ~17×11cm; fries ~7–9cm × ~1cm.
- Common confusion: Do not add malt vinegar — that is a UK-specific
  condiment cue and would read as a UK, not German, chip register.
- Confidence: MEDIUM — a well-known everyday snack, not independently
  re-verified with new sourcing this pass.

#### Dish: Fischbrötchen

- Category: Everyday snack/lunch. Region: the North specifically (harbour
  kiosk register).
- Regional/serving-format variation (§4.4/§4.6, offer as coexisting
  choices): **Bismarck** (silver-skinned pickled herring, the default),
  **Matjes** (softer, darker, rosier young herring with a silky sheen),
  **Backfisch** (golden battered white fish with a crackly, bubbly-surfaced
  batter), **Krabben** (heaped tiny peeled brown shrimp, pale pink-beige,
  curled), and **Lachs** (smoked salmon in translucent coral folds).
- Serving format: A crusty white roll filled with fish, onion rings, pickle
  slices, lettuce, and/or remoulade.
- Visual/plating characteristics: Pickled herring shows a silver-to-steel
  skin with an iridescent blue-green sheen and firm ivory-white flesh;
  onion rings are crisp and translucent; remoulade is pale yellow, thick,
  and flecked with green pickle.
- Real-world scale (§4.5): Roll ~14–16cm; the fillet overhangs the roll's
  ends by roughly 1–3cm.
- Common confusion: A butter-toasted US-style lobster-roll bun — ruled out
  by the plain crusty-roll format and the pickled-fish (not warm-buttered-
  seafood) filling.
- Confidence: MEDIUM-HIGH — the North German regional attribution and the
  named-variant list are both well-corroborated general food-culture facts;
  exact dimensions are this file's own reasonable estimate.

#### Dish: Leberkäse / Fleischkäse

- Category: Everyday snack/lunch. Regional naming: *Leberkäs* (Bavaria),
  *Fleischkäse* (southwest) — same dish, naming-only variation.
- Visual/plating characteristics: A thick slice of baked meat loaf, deep-
  brown baked crust with a slightly crisp edge (sometimes a crosshatch
  top); uniform, rosy, fine-grained interior (per the emulsified-sausage
  texture entry); steam rises when fresh-cut. **Renders as pink meat
  loaf — despite the name, no liver or cheese is visible or present in the
  everyday product.**
- Serving format: In a split roll (*Semmel*) with sweet or medium mustard
  (snack register, the everyday default), or plated warm with a fried egg
  and potato salad (lunch register) — offer both per schema §4.4's
  serving-format-siblings principle.
- Real-world scale (§4.5): Slice ~1.5–2cm thick, ~10cm across; the slice
  visibly overhangs the roll's crumb.
- Confidence: MEDIUM — a well-known everyday Bavarian/southern German food,
  not independently re-verified with new sourcing this pass.

#### Dish: Brezel (lye pretzel)

- Category: Everyday snack, Brotzeit staple, beer-garden side.
- Regional form variation (§4.6, coexisting, offer as a choice, confirmed
  and detailed this pass): **Swabian pretzels have thin, crisp arms and a
  fat, softer belly, deliberately slit before baking**; **Bavarian pretzels
  have more evenly thick arms and a thinner belly, left to split on its own
  during baking rather than pre-slit**. Swabian pretzels also run notably
  higher in fat content (roughly 3–10%) than Bavarian ones (roughly 3%).
  [CONFIDENCE: HIGH — this corrects and sharpens the draft's own compact
  note with a specific, sourced mechanism (pre-slit vs. naturally split)
  rather than just "arms joined higher/lower"] [SOURCE: [The Daily Meal —
  What Makes Bavarian Pretzels Different](https://www.thedailymeal.com/2062505/what-makes-bavarian-pretzels-different/);
  [My German Table — Swabian Pretzels](https://www.mygermantable.com/swabian-pretzels-schwabische-laugenbrezeln/)]
  **KB default**: match the named region; do not mix Swabian and Bavarian
  pretzel shapes within one scene.
- Visual/plating characteristics: Per the lye-crust texture entry (deep
  mahogany-to-chestnut, lacquered satin shine, fine crackle pattern, coarse
  opaque white salt crystals). A **Butterbrezel** is split horizontally with
  a thick, cold, pale-yellow butter layer showing visible knife marks, and
  optional chives.
- Real-world scale (§4.5): A bakery pretzel reads roughly 15–20cm wide; a
  beer-garden "giant" pretzel runs 30cm or more, often hung on a hook or
  peg stand — clearly larger than the can. [CONFIDENCE: MEDIUM — a
  reasonable retail estimate]
- Common confusion: A pale, soft, US mall-style pretzel with cinnamon sugar
  or a cheese dip — ruled out by the dark lacquered lye crust and coarse
  salt (never fine table salt or cinnamon sugar).
- Confidence: HIGH for the Swabian/Bavarian shape distinction; MEDIUM for
  exact dimensions.
- Sources: [The Daily Meal](https://www.thedailymeal.com/2062505/what-makes-bavarian-pretzels-different/); [My German Table](https://www.mygermantable.com/swabian-pretzels-schwabische-laugenbrezeln/)

#### Dish: Reibekuchen / Kartoffelpuffer (potato pancakes)

- Category: Everyday snack. Christmas-market and fair staple; also home
  cooking.
- Visual/plating characteristics: 2–3 fried grated-potato pancakes with
  apple sauce; **lacy, frizzled edges** of individual potato shreds,
  browned to near-dark at the tips; a golden, slightly oily center with
  visible strands. Apple sauce is pale beige-gold, slightly grainy, and
  dolloped, not smooth and uniform.
- Real-world scale (§4.5): Each pancake ~10–12cm × ~1cm; a market paper
  plate ~18cm.
- Common confusion: A uniform, machine-formed US hash-brown patty — ruled
  out by the lacy, irregular, shred-visible edges.
- Confidence: MEDIUM.

#### Dish: Half roast chicken (*Hendl* / *Hähnchen* / East: "Broiler")

- Category: Everyday. Lunch, dinner, and fair/market food.
- Regional naming (§4.2, prevalence/naming-only, not form-changing):
  *Hendl* (Bavaria), *Hähnchen* (general/national), *Broiler* (former East
  Germany) — same rotisserie-roasted dish.
- Visual/plating characteristics: Lacquered, burnished mahogany-gold skin,
  taut and crisp, often paprika-tinted, glistening with spiced fat.
  Rotisserie trailers show rows of rotating birds behind glass under warm
  light.
- Real-world scale (§4.5): Half chicken ~20×12cm on a 26cm plate.
- Confidence: MEDIUM — a well-known everyday food, not independently
  re-verified with new sourcing this pass beyond the "Broiler" East German
  naming, which is well-attested general knowledge.

### Schnitzel & pan-German classics

#### Dish: Schnitzel Wiener Art (breaded pork cutlet, Viennese style)

- Category: Everyday and special-occasion. Lunch, dinner; inn, canteen,
  family-restaurant register.
- **Naming rule — confirmed, and this is a real, legally grounded naming
  distinction, not just a culinary convention.** "Wiener Schnitzel" is a
  legally protected name in both Austria and Germany and may only be used
  for the **veal** version; a pork cutlet prepared the same way must be
  called **"Schnitzel Wiener Art"** ("Viennese-style schnitzel") or "Wiener
  Schnitzel vom Schwein." Germany's everyday, high-frequency version is
  overwhelmingly the pork one. [CONFIDENCE: HIGH — this corrects and
  strengthens the draft's own `[UV→X]`-tagged version of the same claim
  with a confirmed legal basis] [SOURCE: [The Daily Meal — Wiener
  Schnitzel's Ingredients Are Actually Defined By Law](https://www.thedailymeal.com/1105865/wiener-schnitzels-ingredients-are-actually-defined-by-law/);
  [Wikipedia: Wiener schnitzel](https://en.wikipedia.org/wiki/Wiener_schnitzel)]
  **KB default and required prompt language**: "a breaded pork cutlet,
  Viennese style" or "Schnitzel Wiener Art" — never call a pork schnitzel
  "Wiener Schnitzel" outright in a prompt describing the everyday pork
  version.
- Serving format: A thin, pounded, breaded cutlet with a lemon wedge; fries,
  potato salad, or fried potatoes (*Bratkartoffeln*) alongside.
- Visual/plating characteristics: Per the breadcrumb-crust texture entry
  (fine, even golden-to-amber crumb puffing into loose waves and blisters,
  lifting from the meat, matte overall — never a thick, craggy fried-
  chicken-style batter, and never a uniform flat coating stuck to the
  meat). The cut shows a thin, pale cutlet under the crust. Bratkartoffeln
  (if served) are thick coins, browned and crisp-edged, glossy, with
  translucent golden onion and bacon bits.
- Real-world scale (§4.5): The cutlet reads roughly 20–25cm long, 0.5–0.8cm
  thick — often **overhanging a 28cm plate**, or served on a 32cm oval
  platter. [CONFIDENCE: MEDIUM — a reasonable, widely-corroborated
  restaurant-portion estimate, not independently measured this pass]
- Common confusion: US chicken-fried steak with white gravy (a thicker,
  darker-battered dish with a completely different sauce); Japanese tonkatsu
  (a thicker cutlet with a coarser panko crust, usually sliced into strips
  before serving) — neither is the same visual presentation.
- Confidence: HIGH for the naming rule; MEDIUM for exact dimensions.
- Sources: [The Daily Meal](https://www.thedailymeal.com/1105865/wiener-schnitzels-ingredients-are-actually-defined-by-law/); [Wikipedia: Wiener schnitzel](https://en.wikipedia.org/wiki/Wiener_schnitzel)

#### Dish: Sauced Schnitzel family (Jägerschnitzel, Rahmschnitzel, paprika schnitzel)

- Category: Everyday and canteen lunch staple.
- Serving format: A cutlet (breaded or plain) with sauce ladled over part
  of it, leaving some crust exposed; sauce partly soaks the crust while the
  edge crumb stays crisp.
- Regional form variation (§4.6, a genuinely coexisting, non-hierarchical
  East/West split, not a superseded-vs-current pair — **confirmed and
  strengthened this pass, not just carried forward as an unverified
  claim**):
  - **Jägerschnitzel (West)**: a creamy, beige mushroom sauce with sliced
    brown mushrooms over a breaded or plain cutlet. **KB default when no
    East/West context is given.**
  - **Jägerschnitzel (East/GDR-heritage)**: a genuinely different dish
    under the same name — a breaded slice of **Jagdwurst** (a bologna-type
    sausage, used as a lower-cost meat substitute) with a bright tomato
    sauce and macaroni, historically served in GDR-era school and work
    canteens and still a recognized, nostalgia-coded East German dish
    today. **Confirmed this pass as a real, specific historical
    substitution, not a loose regional-variant guess** — use only when an
    East German/GDR-heritage context is explicit, per the draft's own
    instruction, which this pass found no reason to overturn.
    [CONFIDENCE: HIGH] [SOURCE: [DDR Museum — Hunter's Schnitzel with
    Tomato Sauce](https://www.ddr-museum.de/en/blog/2016/hunters-schnitzel-with-tomato-sauce);
    [Wikipedia: Jagdwurst](https://en.wikipedia.org/wiki/Jagdwurst)]
  - **Rahmschnitzel**: a pale cream sauce, no mushrooms.
  - **Paprikaschnitzel**: a red-orange sauce with bell-pepper strips.
- **Naming sensitivity — carried from the draft, treated as a standing
  prompt-language rule rather than independently re-verified this pass**:
  the paprika schnitzel was historically sold in Germany under a name now
  widely considered an ethnic slur; **always say "paprika schnitzel," never
  the old name.** This pass did not independently verify the historical
  naming claim with a dedicated new source, but treats the caution itself
  as the safer default regardless — the cost of following it when
  unnecessary is near zero, while the cost of reproducing a slur in a
  generated caption or prompt is not.
- Real-world scale (§4.5): As the base Schnitzel Wiener Art entry above; a
  sauce boat or ladle-pour portion of roughly 250mL.
- Confidence: HIGH for the East/West Jägerschnitzel distinction; not
  independently verified for the paprika-schnitzel naming-sensitivity claim
  specifically (flagged in GAP LOG).

#### Dish: Rinderrouladen

- Category: Sunday lunch, festive/special-occasion register, also everyday.
- Serving format: Beef rolls tied with kitchen string or pinned with a
  wooden skewer, braised in gravy, served with red cabbage and a potato
  dumpling.
- Visual/plating characteristics: Dark, glossy gravy (per the Bratensoße
  texture entry). A sliced roll shows a spiral cross-section of beef around
  a mustard-yellow smear, pink-brown bacon, translucent onion, and pale-
  green pickle; the string is darkened by gravy.
- Real-world scale (§4.5): Roll ~10–14cm × ~4–5cm; dumpling ~7–8cm.
- Common confusion: Italian braciole in tomato sauce — ruled out by the
  brown-gravy (not tomato-based) sauce and the mustard/pickle/bacon filling.
- Confidence: MEDIUM — a well-known dish, not independently re-verified
  with new sourcing this pass.

#### Dish: Sauerbraten

- Category: Special-occasion/Sunday lunch, also served in everyday inns.
- Regional form variation (§4.6, genuinely coexisting variants — confirmed
  and detailed this pass beyond the draft's compact note):
  - **Rhenish (Rhineland)**: marinated in vinegar and red wine; the sauce
    is sweetened with raisins and often beet syrup as well. **KB default.**
  - **Franconian**: prepared **without** raisins; the sauce is thickened
    with soaked, lightly sweetened gingerbread (Lebkuchen) instead — a
    genuinely different sauce construction, not just "less sweet."
  - **Swabian**: less sweet, a little spicier (garlic, a very dry wine),
    traditionally served with Spätzle and red cabbage rather than potato
    dumplings.
  [CONFIDENCE: HIGH for all three variants existing and being genuinely
  distinct in preparation, not just regional flavor preference] [SOURCE:
  [germany-shop.info — Secrets of sauerbraten: a chef reveals the regional
  differences](https://www.germany-shop.info/en/why-does-sauerbraten-taste-so-different-in-the-rhineland-compared-to-franconia-or-saxony/);
  general Sauerbraten regional sourcing corroborating the same three-way
  split]
- Visual/plating characteristics: Fork-tender slices with a visible grain
  that frays slightly. Gravy is darker, thicker, and more matte-velvety
  than a standard Bratensoße. The Rhenish version shows plump, dark raisins
  suspended in the sauce.
- Real-world scale (§4.5): Slices ~1cm × ~10–12cm on a 28cm plate.
- Confidence: HIGH for the three regional variants; MEDIUM for exact
  dimensions.
- Sources: [germany-shop.info](https://www.germany-shop.info/en/why-does-sauerbraten-taste-so-different-in-the-rhineland-compared-to-franconia-or-saxony/)

#### Dish: Frikadelle / Bulette / Fleischpflanzerl / Fleischküchle

- Category: Everyday. Warm with potato salad, or cold in a roll with
  mustard.
- Regional naming (§4.2, prevalence/naming-only — same dish, different
  names, not form-changing): *Frikadelle* (North/West), *Bulette* (Berlin),
  *Fleischpflanzerl* (Bavaria), *Fleischküchle* (Swabia). **KB default**:
  descriptive English in any prompt ("a pan-fried meat patty") rather than
  any single regional name, to avoid implying a false regional specificity.
- Visual/plating characteristics: Craggy, uneven browning with darker,
  crisp high points and an irregular edge; the cut shows a coarse
  grey-brown interior with visible onion bits and breadcrumb.
- Real-world scale (§4.5): ~8–10cm × ~2.5cm.
- Common confusion: A uniform, flat, machine-formed US burger patty — ruled
  out by the craggy, irregular browning and the visible onion/breadcrumb
  interior.
- Confidence: MEDIUM — the naming variation is well-known general knowledge,
  not independently re-verified region by region this pass.

#### Dish: Königsberger Klopse

- Category: Everyday/home-cooking classic.
- Visual/plating characteristics: 3–4 poached meatballs in a white caper
  sauce, with boiled potatoes and sometimes beetroot. Pale, soft, matte
  grey-beige meatballs — **not browned**, a genuinely distinctive,
  checkable feature versus most other German meatball preparations; the
  sauce is velvety ivory, dotted with olive-green capers; beetroot (if
  served) is deep magenta and glossy.
- Real-world scale (§4.5): Meatballs ~5–6cm; capers ~0.5cm.
- Common confusion: Browned Swedish meatballs with lingonberry sauce —
  ruled out by the pale, unbrowned surface and the white caper sauce
  (rather than a brown cream gravy).
- Confidence: MEDIUM — a well-known classic dish, not independently
  re-verified with new sourcing this pass.

#### Dish: Kassler

- Category: Everyday.
- Visual/plating characteristics: A thick, smoked-cured pork chop with
  sauerkraut and mashed potato; uniform deep rose-pink cured meat, a thin
  smoky-bronze fat rim, a glossy cut face.
- Real-world scale (§4.5): ~1.5–2cm × ~12cm.
- Confidence: MEDIUM.

### Bavaria

#### Dish: Schweinsbraten

- Category: Sunday lunch, everyday inn fare.
- Visual/plating characteristics: 2 slices of roast pork with crackling in
  dark gravy, a dumpling, sometimes a warm cabbage salad. Crackling per the
  texture entry above, with a ~0.5–1cm rim cut into diamonds; meat is pale,
  juicy, and slightly fibrous; gravy pools around the dumpling.
- Real-world scale (§4.5): Slices ~1.5cm thick; dumpling ~8cm.
- Confidence: MEDIUM.

#### Dish: Schweinshaxe (roasted pork knuckle) — and its coexisting sibling, Eisbein

- Category: Special-occasion/hearty everyday inn fare.
- **Regional/preparation variant (§4.6) — genuinely coexisting, never
  conflate**: **Haxe** (Bavarian, **roasted**, crackling-crisp) versus
  **Eisbein** (Berlin/North German, **boiled**, soft skin, no crackling at
  all). These are visually opposite treatments of a similar cut and must
  never be substituted for each other — see the dedicated Eisbein entry
  under North Germany below.
- Visual/plating characteristics (Haxe specifically): A whole roasted
  knuckle with the bone protruding, often with a knife stabbed in
  vertically; fully blistered, glassy amber crackling over the whole
  surface, bubbled like popcorn; tender meat underneath pulls from the bone
  in shreds. Dumpling and gravy alongside.
- Real-world scale (§4.5): ~18–22cm long, dominating a 32cm oval platter —
  clearly larger than the 330mL can is tall.
- Confidence: MEDIUM — a well-known dish, not independently re-verified
  with new sourcing this pass beyond confirming the Haxe/Eisbein
  distinction is a real, standard one in German food writing.

#### Dish: Knödel (dumplings)

- Category: Everyday/Sunday-lunch side, national but especially Bavarian/
  Southern.
- Regional form variation (§4.6, coexisting choices): **Potato dumpling**
  (*Kartoffelknödel*/*Kloß* — the Thüringer regional version shows a
  toasted crouton center when cut) versus **bread dumpling**
  (*Semmelknödel* — knobby, rough surface with visible bread cubes, pale
  golden with green parsley flecks, often sliced and served in a mushroom
  cream sauce). **KB default**: potato dumplings with Rouladen and
  Sauerbraten; either type with roast pork.
- Visual/plating characteristics: Potato dumpling — smooth, pale ivory-to-
  greige surface, soft satin sheen, dense and faintly translucent-looking,
  fine-grained and slightly gummy-glossy at the cut. Bread dumpling —
  knobby surface, visible bread-cube mosaic at the cut.
- Real-world scale (§4.5): ~7–9cm spheres — roughly the diameter of a
  330mL can.
- Confidence: MEDIUM.

#### Dish: Weißwurst

- Category: **Late-morning Brotzeit specifically — never depict as
  breakfast**, a scope rule carried directly from the draft and not
  contradicted by anything found this pass. Bavaria-specific.
- Serving format: Two pale sausages in a lidded bowl of hot water, with
  sweet mustard and a Brezel; traditionally peeled or sucked from the
  casing rather than eaten whole, casing and all.
- Visual/plating characteristics: Smooth, slightly glossy grey-white
  casing with green parsley flecks visible through it; steam rises from
  the water. Once peeled, the interior is pale, fine, and soft (per the
  emulsified-sausage texture entry).
- Real-world scale (§4.5): ~12–14cm × ~3cm; bowl ~18cm.
- Confidence: MEDIUM — a well-known Bavarian tradition; the before-noon
  eating custom is widely and consistently reported, not independently
  re-verified with a dedicated new source this pass.

#### Dish: Obatzda & Brotzeit board

- Category: Everyday snack, beer-garden and Brotzeit staple. Bavaria-
  specific.
- Visual/plating characteristics: A mound of spiced cheese spread with raw
  onion rings, a spiral-cut white radish (*Radi*), a Brezel, rye bread,
  cold cuts, and chives. Obatzda itself is coarse, rough-peaked, apricot-
  orange from paprika, flecked with onion and chives, matte-creamy. The
  Radi is a translucent white spiral that opens like an accordion, salted
  until it glistens.
- Real-world scale (§4.5): Board ~40×25cm; Radi spiral ~15cm tall.
- Confidence: MEDIUM.

#### Dish: Wurstsalat

- Category: Everyday, Bavaria/Southern-coded.
- Visual/plating characteristics: Julienned sausage (Regensburger or
  Lyoner type) with onion rings and pickle in a vinegar dressing, served
  with bread. A "Swiss" version adds cheese strips. Pale-pink, glossy
  strips wet with dressing; translucent onion; chives.
- Real-world scale (§4.5): Deep plate ~22cm; strips ~5cm × 0.5cm.
- Confidence: MEDIUM.

#### Dish: Steckerlfisch (fish on a stick)

- Category: Beer-garden and folk-festival grill food. Bavaria/Franconia-
  specific.
- Cuisine/species note — **corrected and sharpened this pass**: originally
  made with trout and freshwater whitefish; refrigeration and improved
  transport made saltwater fish (mackerel) more widely available, and
  **mackerel is now the most commonly prepared Steckerlfisch fish**, though
  trout and char are also still used. [CONFIDENCE: HIGH — corrects the
  draft's own less specific "mackerel (or char)" framing with a clearer
  prevalence statement] [SOURCE: [Craft Beering — Steckerlfisch aka
  Bavarian Fish on a Stick](https://www.craftbeering.com/steckerlfisch/);
  [Wikipedia: Steckerlfisch](https://en.wikipedia.org/wiki/Steckerlfisch)]
  The dish is closely associated with the Munich autumn folk festival
  specifically (a local fish merchant is credited with introducing it there
  in the early 20th century), consistent with this file's Munich-only
  festival-framing caution above, though it is also a general Bavarian/
  Franconian beer-garden food, not confined to that one festival.
- Visual/plating characteristics: A whole gutted fish skewered lengthwise
  on a wooden stick, grilled upright in rows around charcoal, served on
  paper. Blistered, crackled, charred-bronze skin with a spice-rub speckle;
  flaky white flesh opens when torn; visible smoke.
- Real-world scale (§4.5): Fish ~25–30cm; the traditional stick (square-
  profile, to hold position over the embers) runs roughly 50–60cm.
- Confidence: HIGH for the fish-species prevalence claim and the Oktoberfest
  connection; MEDIUM for exact dimensions.
- Sources: [Craft Beering](https://www.craftbeering.com/steckerlfisch/); [Wikipedia: Steckerlfisch](https://en.wikipedia.org/wiki/Steckerlfisch)

#### Dish: Schäufele (Franconia)

- Category: Everyday/special-occasion, Franconia-specific.
- Visual/plating characteristics: Roasted pork shoulder blade with the flat
  bone protruding, in gravy, with dumplings; crackling as in the texture
  entry, meat collapsing around the bone.
- Real-world scale (§4.5): ~15cm on a 28cm plate.
- Confidence: MEDIUM.

#### Dish: Dampfnudel

- Category: Everyday/dessert or savory-adjacent, Bavaria/Southern.
- Visual/plating characteristics: A large steamed yeast bun in a pan,
  served with vanilla sauce (sweet) or savory accompaniments; a pillowy,
  soft white top and a caramelized, crisp, golden-brown salty crust
  underneath from the pan. Vanilla sauce is pale yellow and pourable.
- Real-world scale (§4.5): ~10–12cm.
- Confidence: MEDIUM.

### Baden-Württemberg

#### Dish: Käsespätzle

- Category: Everyday, inn/home lunch and dinner staple.
- Cuisine lineage — confirmed this pass: a traditional dish of Swabia,
  Baden, and the Allgäu, said to have originated in Swabia specifically and
  carried into Austria (Vorarlberg, Tyrol) by Swabian immigrants in the
  18th century; also found in Switzerland and Liechtenstein. [CONFIDENCE:
  HIGH] [SOURCE: [Wikipedia: Käsespätzle](https://en.wikipedia.org/wiki/K%C3%A4sesp%C3%A4tzle)]
- Regional form variation (§4.6): **hand-scraped Spätzle** (long, irregular
  — **KB default**) versus **pressed, button-shaped Spätzle** (*Knöpfle*);
  the Allgäu style is noted as cheesier than average.
- Serving format: Egg noodles layered with melted cheese (traditionally
  Bergkäse/mountain cheese — Gruyère, Appenzeller, or Emmentaler, alone or
  blended) and topped with fried onions, served in the cast-iron pan, with
  a green salad. [CONFIDENCE: HIGH for the cheese type] [SOURCE:
  [The Splendid Table — Käsespätzle](https://www.splendidtable.org/story/2024/11/08/ksesptzle-swabian-noodles-with-mountain-cheese-and-caramelized-onions)]
- Visual/plating characteristics: Spätzle are irregular, soft, matte
  golden-yellow squiggles; the cheese is molten and stretches in strings
  when lifted, with browned crisp patches where it touches the pan; onions
  are deep-brown, crisp, curled strands on top.
- Real-world scale (§4.5): Pan ~18–20cm; individual Spätzle ~3–5cm long.
- Common confusion: US elbow macaroni and cheese with an orange cheddar
  sauce — ruled out by the irregular hand-scraped noodle shape and the
  mountain-cheese (not processed-cheese-sauce) melt.
- Confidence: HIGH for lineage and cheese type; MEDIUM for exact
  dimensions.
- Sources: [Wikipedia: Käsespätzle](https://en.wikipedia.org/wiki/K%C3%A4sesp%C3%A4tzle); [The Splendid Table](https://www.splendidtable.org/story/2024/11/08/ksesptzle-swabian-noodles-with-mountain-cheese-and-caramelized-onions)

#### Dish: Maultaschen

- Category: Everyday, Baden-Württemberg-specific.
- Serving format — genuinely coexisting siblings, offer as a choice (§4.4):
  **in clear broth** (soup register) versus **sliced and pan-fried with
  onion and egg** (a completely different visual presentation), with
  potato salad on the side either way.
- Visual/plating characteristics: In broth — pale yellow, semi-translucent
  pasta showing a faint green-and-pink filling through the wrapper, golden
  fat droplets floating on clear amber broth, chives. Pan-fried — golden,
  crisp-edged slices with scrambled-egg bits and browned onion.
- Real-world scale (§4.5): ~8×10cm, 2–3 per portion; soup plate ~22cm.
- Common confusion: Small, crimped Italian ravioli in tomato sauce — ruled
  out by the much larger rectangular size and the broth-or-pan-fried
  (never tomato-sauced) serving.
- Confidence: MEDIUM.

#### Dish: Linsen mit Spätzle und Saitenwürstle

- Category: Everyday, Baden-Württemberg-specific.
- Visual/plating characteristics: Brown lentils in a vinegary sauce,
  Spätzle, and two thin sausages, in a deep plate. Lentils are glossy,
  earthy brown, and whole, in a thick matte sauce; sausages have a thin,
  taut skin with a smoky pink-bronze color.
- Real-world scale (§4.5): Sausages ~15×2cm.
- Confidence: MEDIUM.

#### Dish: Schupfnudeln

- Category: Everyday, also a Christmas-market pan dish.
- Visual/plating characteristics: Finger-shaped potato noodles, pan-fried,
  often with sauerkraut and bacon; pointed ends, golden pan-crisped
  patches on pale dense noodles, tangled with glossy sauerkraut.
- Real-world scale (§4.5): ~6–8cm × 1.5cm; a market pan can run
  80–100cm diameter.
- Confidence: MEDIUM.

#### Dish: Flammkuchen

- Category: Everyday, Baden/Palatinate-specific (also Alsace, France).
- Cuisine lineage — confirmed this pass: originates from the Alsace region
  of France, with the same tradition carried into the neighboring German
  regions of Baden-Württemberg and the Palatinate. The dish's name in both
  languages ("tarte flambée"/"Flammkuchen," both meaning "tart/cake baked
  in flame") derives from its origin as a thin test-dough used to check a
  wood-fired bread oven's temperature, before crème fraîche, onion, and
  bacon toppings became standard. [CONFIDENCE: HIGH] [SOURCE: [Wikipedia:
  Flammekueche](https://en.wikipedia.org/wiki/Flammekueche); general
  Flammkuchen-history sourcing corroborating the shared Alsace/Baden/
  Palatinate origin]
- Regional form variation (§4.6): classic (crème fraîche, bacon, onion —
  **KB default**), gratinée with cheese, sweet apple-cinnamon.
- Visual/plating characteristics: A very thin (cracker-thin) crust with
  charred, black-brown blistered bubbles on the edge and base; the cream
  is matte white with golden browning spots; bacon is pink-bronze; onions
  are translucent to caramelized. Served on a wooden board.
- Real-world scale (§4.5): Rectangular ~30×40cm or round ~30cm — larger
  than a standard dinner plate, consistent with `tableware-composition-
  reference.md` §2's cutting-board dimension range for rustic bread/cheese
  service.
- Common confusion: A raised-rim pizza with tomato sauce and mozzarella
  pull — explicitly ruled out: no tomato sauce, no mozzarella stretch, no
  raised crust rim — the crust is uniformly cracker-thin edge to edge.
- Confidence: HIGH for origin and form; MEDIUM for exact dimensions.
- Sources: [Wikipedia: Flammekueche](https://en.wikipedia.org/wiki/Flammekueche)

#### Dish: Zwiebelkuchen (onion tart)

- Category: Autumn seasonal, Baden/Palatinate-specific.
- Visual/plating characteristics: A sheet or round tart of onion custard on
  a yeast or shortcrust base, with bacon, served warm; a golden, set,
  slightly jiggly custard speckled with caramelized onion and caraway and
  browned bacon bits; the cut edge shows soft, layered onion.
- Real-world scale (§4.5): Slice ~10×10cm, ~3–4cm tall.
- **Alcohol note (carried from the draft, consistent with the file's
  standing alcohol-exclusion rule)**: traditionally paired with new wine
  (*Federweißer*) in real life — never show it; Coca-Cola replaces it in
  frame per the standing rule.
- Confidence: MEDIUM.

### North Germany

#### Dish: Labskaus

- Category: Everyday, Hamburg/Bremen-specific.
- Cuisine lineage — confirmed and one detail corrected this pass: a
  nautical dish from major North German port cities (Hamburg, Bremen,
  Lübeck), made from ingredients with a long shelf life for sea voyages —
  salted meat/corned beef, potatoes, and onion. **A real, genuinely
  coexisting regional-presentation variant, not previously disclosed as a
  choice in the draft**: some sources describe the mash itself as mixed
  with beetroot (giving the coarse magenta-pink color the draft's texture
  note describes), while a specifically **Bremen-style** presentation keeps
  the beetroot and rollmops (rolled pickled herring) as separate side
  garnishes rather than mixed into the mash itself. **Offer both as a
  choice per §4.6** rather than assuming the beetroot is always mixed in.
  [CONFIDENCE: MEDIUM-HIGH — corroborated across independent recipe/food-
  history sourcing this pass, though not traced to a single named
  Hamburg-vs-Bremen comparative source] [SOURCE: [Wikipedia: Labskaus](https://en.wikipedia.org/wiki/Labskaus);
  [My Dinner — Hamburger Labskaus](https://mydinner.co.uk/labskaus/)]
- Serving format: A mash topped with a fried egg, with a rolled pickled
  herring and a gherkin beside it (or, per the Bremen variant, beetroot and
  rollmops served as distinct sides rather than mixed in).
- Visual/plating characteristics: The mash is coarse and speckled magenta-
  pink (when beetroot is mixed in) — neither smooth nor uniform. The egg
  has a glossy domed yolk and crisp, lacy browned white edges. The rolled
  herring is silver, secured with a wooden pick. **This dish looks
  genuinely unfamiliar to non-German viewers** — favor natural daylight, a
  glossy yolk, and tight framing to keep it appetizing rather than
  off-putting.
- Real-world scale (§4.5): Mound ~12–15cm on a 28cm plate; rolled herring
  ~8–10cm.
- Confidence: MEDIUM-HIGH for origin and the genuine Hamburg/Bremen
  presentation variant; MEDIUM for exact dimensions.
- Sources: [Wikipedia: Labskaus](https://en.wikipedia.org/wiki/Labskaus); [My Dinner](https://mydinner.co.uk/labskaus/)

#### Dish: Grünkohl mit Pinkel

- Category: Winter seasonal (roughly November–February, after first frost),
  North-specific.
- Visual/plating characteristics: Stewed kale with a smoked grain sausage
  (*Pinkel*), Kassler, and small potatoes. Kale is dark olive-green, finely
  chopped, and stewed soft, with a fatty gloss and no crisp leaves. The
  Pinkel's cut face is grainy, crumbly, and oat-textured in a grey-brown
  color. Small potatoes are sugar-glazed with a golden lacquer.
- Real-world scale (§4.5): Pinkel ~15–20cm; potatoes ~3–4cm.
- Confidence: MEDIUM.

#### Dish: Eisbein (Berlin/North Germany)

- Category: Everyday/hearty inn fare, Berlin/North-specific. **The boiled
  sibling of Bavaria's roasted Haxe — see that entry above; never
  conflate the two.**
- Visual/plating characteristics: A boiled pork knuckle with sauerkraut and
  pea purée. Pale-pink, soft, wobbly fat and skin — **explicitly not
  crisp**, the defining visual difference from Haxe; the meat is moist and
  flaking. Pea purée is matte ochre-yellow and thick, holding spoon marks.
- Real-world scale (§4.5): ~15–20cm on a 32cm platter.
- Confidence: MEDIUM — the Haxe/Eisbein distinction itself is well-attested
  general food-culture knowledge; not independently re-verified with a
  dedicated new source this pass beyond that general confirmation.

#### Dish: Rote Grütze

- Category: Dessert/snack, North-specific.
- Visual/plating characteristics: Red berry compote with vanilla sauce or
  cream in a glass bowl; glossy, jewel-red, jelly-thick compote with whole
  berries; pale vanilla sauce swirls and pools on top.
- Real-world scale (§4.5): Glass bowl ~10–12cm.
- Confidence: MEDIUM.

### Rhineland, Hesse, Palatinate

#### Dish: Himmel un Ääd

- Category: Everyday, Rhineland-specific.
- Visual/plating characteristics: Potato-and-apple mash with fried blood
  sausage and fried onions. Blood-sausage slices are near-black-burgundy
  with a crisp, browned crust, showing white fat specks in the cut face;
  the mash is creamy with soft apple chunks.
- Real-world scale (§4.5): Slices ~7–8cm × 1.5cm.
- Confidence: MEDIUM.

#### Dish: Halve Hahn (Cologne)

- Category: Everyday, Cologne-specific.
- Visual/plating characteristics: A buttered rye roll with a thick slice of
  aged Gouda, mustard, and raw onion rings. **It contains no chicken,
  despite the name** — a genuine, checkable naming trap this project's own
  anti-patterns list (below) flags directly. A thick, pale-yellow Gouda
  block with a slightly crumbly cut edge; a rye roll with a floury crust.
- Real-world scale (§4.5): Half roll ~10cm; cheese ~1.5cm thick.
- Confidence: MEDIUM — the no-chicken naming fact is well-known, widely
  corroborated general knowledge, not independently re-verified with a
  dedicated new source this pass.

#### Dish: Grüne Soße (Frankfurt)

- Category: Everyday, also a specific Maundy Thursday tradition — see
  FESTIVAL & OCCASION CALENDAR for the confirmed Gründonnerstag link and
  the 2016 EU protection of Frankfurt's specific seven-herb mix.
- Visual/plating characteristics: A cold herb sauce with halved boiled eggs
  and boiled potatoes; vivid spring-green, thick, finely speckled with herb
  bits, matte-creamy; the eggs show bright yolks.
- Real-world scale (§4.5): Egg halves ~5cm; deep plate ~22cm.
- Confidence: HIGH for the composition and the Maundy Thursday/EU-
  protection facts (see calendar entry); MEDIUM for exact dimensions.

#### Dish: Handkäs mit Musik (Hesse)

- Category: Everyday, Frankfurt/Hesse-specific.
- Cuisine lineage/detail — confirmed this pass: a small, sour-milk cheese
  (*Handkäse*, literally "hand cheese") marinated in a raw-onion vinaigrette
  (vinegar, oil, sometimes mustard); the "music" name is popularly
  explained as a joke about the flatulence the raw onions supposedly
  cause, though at least one food historian argues it more simply refers
  to the "fun" the marinade brings. Traditionally served with rye bread,
  butter, and — in real life — a glass of Hessian apple wine (Apfelwein);
  per this file's alcohol-exclusion rule, the Apfelwein itself and its
  distinctive ribbed glass/stoneware jug are never depicted. [CONFIDENCE:
  HIGH for composition and the apple-wine pairing as real market context]
  [SOURCE: [Atlas Obscura — Handkäse Mit Musik](https://www.atlasobscura.com/foods/handkase-mit-musik-handcheese-with-music);
  [Culture: the word on cheese — Handkäse mit Musik](https://culturecheesemag.com/travel/wheys-less-traveled/handkase-mit-musik/)]
- Visual/plating characteristics: Small cheese rounds show a translucent,
  amber-glassy, jelly-like rind and surface, with a chalky white core in
  younger cheese; glistening marinade and onion dice on top.
- Real-world scale (§4.5): ~6–8cm × 2cm.
- Confidence: HIGH for composition and cultural context; MEDIUM for exact
  dimensions.
- Sources: [Atlas Obscura](https://www.atlasobscura.com/foods/handkase-mit-musik-handcheese-with-music); [culturecheesemag.com](https://culturecheesemag.com/travel/wheys-less-traveled/handkase-mit-musik/)

#### Dish: Saumagen (Palatinate)

- Category: Everyday/special-occasion, Palatinate-specific.
- Visual/plating characteristics: Thick, pan-browned slices of a stuffed
  pork-stomach loaf, with sauerkraut and mash; a mosaic cut face of pink
  pork, pale potato cubes, and orange carrot dice, with a browned crust.
- Real-world scale (§4.5): ~2cm × ~12cm.
- Confidence: MEDIUM.

### East Germany

#### Dish: Soljanka

- Category: Everyday, East-German-coded.
- Visual/plating characteristics: A sour-spicy soup with sausage and meat
  pieces, pickles, onion, a lemon slice, and a sour-cream dollop. Brick-red-
  to-orange broth with a slick of red-tinged fat droplets on the surface;
  chunky diced meat; a white sour-cream dollop beginning to melt and
  streak.
- Real-world scale (§4.5): Bowl ~15–16cm.
- Confidence: MEDIUM.

#### Dish: Leipziger Allerlei

- Category: Everyday, spring/summer, Saxony-specific.
- Visual/plating characteristics: A spring-vegetable medley in butter
  sauce — bright green peas, orange carrot coins, pale asparagus pieces in
  a glossy butter sauce.
- Confidence: MEDIUM.

#### Dish: Quarkkeulchen (Saxony)

- Category: Everyday/snack.
- Visual/plating characteristics: Small pan-fried quark-potato pancakes
  with sugar or apple sauce; golden-brown, lightly crisp faces with a soft
  pale interior, dusted with sugar.
- Real-world scale (§4.5): ~7–8cm.
- Confidence: MEDIUM.

#### Dish: Ketwurst (East Berlin nostalgia, niche)

- Category: Niche/nostalgia register. A long roll with a hollowed-out
  center, filled with a sausage and ketchup sauce.
- **Use only on explicit request** — this is a specifically East-German-
  nostalgia item, not an everyday-relevance dish for most briefs.
- Confidence: LOW-MEDIUM — carried from the draft without independent
  re-verification this pass.

### Seasonal specialities

#### Dish: Spargel (white asparagus)

- Category: Seasonal (see FESTIVAL & OCCASION CALENDAR for the confirmed
  24 June/Johannistag end date), everyday during season.
- Visual/plating characteristics: Thick white spears laid parallel with
  boiled new potatoes, Hollandaise or melted butter, and cooked or cured
  ham (sometimes a small schnitzel). Ivory, smooth, slightly translucent
  spears with a faint moist sheen; tightly closed tips with a faint violet
  or yellow blush; Hollandaise is glossy, pale butter-yellow, and flowing
  in a ribbon; cured ham falls in translucent ruby folds.
- Real-world scale (§4.5): Spears ~18–22cm × ~1.5–2cm; 8–10 spears on a
  28–30cm plate.
- Common confusion: Default green asparagus — white is the German default
  during Spargelzeit; green should not be substituted as the everyday norm.
- Confidence: HIGH for the seasonal framing (see calendar entry); MEDIUM
  for exact dimensions.

#### Dish: Kartoffelsalat (potato salad) — major regional variant

- Category: Everyday and Christmas Eve tradition (widespread, paired with
  sausages).
- Regional form variation (§4.6, genuinely coexisting, offer as a choice,
  not a silent default): **South Germany**: a vinegar-broth-oil-onion
  dressing, no mayonnaise — glossy, slightly translucent potato slices with
  softened, broken edges, glistening wet, flecked with chives. **North/
  West Germany**: a creamy, opaque ivory mayonnaise coating, with pickle
  dice and sometimes egg or apple. **KB default**: match the region; in a
  neutral scene, pair the vinegar style beside Schnitzel or Maultaschen and
  the mayonnaise style beside Frikadellen or sausages, per the draft's own
  reasonable pairing logic.
- Real-world scale (§4.5): Slices ~3–4cm × 0.3–0.5cm; bowl ~14–16cm.
- Common confusion: US-style potato salad (cubed, mustard-yellow, celery,
  paprika dusting) — explicitly ruled out; neither German variant uses
  mustard-yellow coloring or a celery/paprika finish.
- Confidence: MEDIUM-HIGH — the South/North vinegar-vs-mayonnaise split is
  broadly and consistently documented across German food-culture sourcing,
  though not independently re-verified with a dedicated new search this
  pass beyond general confirmation.

#### Soups & Eintopf (compact catalog)

| Dish | Look & texture | Scale | Confidence |
|---|---|---|---|
| Erbsensuppe (pea soup) | Thick, matte olive-ochre soup with sausage coins and bacon cubes; served from a field-kitchen kettle at events | Deep plate 22cm; sausage slices ~2cm | MEDIUM |
| Kartoffelsuppe | Creamy beige with soft potato and carrot cubes, sausage slices, marjoram flecks | Deep plate 22cm | MEDIUM |
| Gulaschsuppe | Brick-red, paprika-oily surface, beef and pepper chunks; a stadium and market staple | Bowl ~15cm | MEDIUM |

#### Dish: Roast goose (Christmas / St. Martin)

- Category: Special-occasion, seasonal (Christmas and 11 November St.
  Martin).
- Visual/plating characteristics: A whole roasted goose or a leg, with red
  cabbage and potato dumplings; deep bronze, crisp, lacquered skin with
  rendered-fat gloss; dark meat.
- Real-world scale (§4.5): Leg ~20cm on a 28cm plate.
- Confidence: MEDIUM.

#### Dish: New Year's Eve raclette (*Silvester*)

- Category: Special-occasion, a specific and well-documented home-dinner
  tradition for 31 December — confirmed this pass, not just a plausible
  guess.
- Visual/plating characteristics: A tabletop electric raclette grill with
  small pans of bubbling cheese, a hot-stone top with meats and
  vegetables, boiled potatoes, and pickles — a genuinely common German NYE
  home dinner. [CONFIDENCE: MEDIUM-HIGH — raclette/fondue are repeatedly
  and independently cited across German-culture/lifestyle sourcing as
  among the most common NYE dinner choices, though no single dedicated
  survey with an exact popularity percentage was found this pass]
  [SOURCE: general German New Year's Eve tradition sourcing, aggregated
  across multiple independent culture/lifestyle sources] Cheese is
  bubbling, browned-blistered, scraped molten over potatoes; small
  nonstick pans are slightly scorched.
- Real-world scale (§4.5): Raclette grill ~40×25cm, with roughly 8 small
  pans, each ~12×7cm.
- Confidence: MEDIUM-HIGH for prevalence; MEDIUM for exact equipment
  dimensions.

### Fair, festival & market snacks (compact catalog)

| Item | Look & texture | Scale anchor | Confidence |
|---|---|---|---|
| Garlic mushrooms (*Champignonpfanne*) | Glossy browned button mushrooms in garlic butter, topped with a thick white herb-garlic sauce, in a paper bowl | Mushrooms ~3–4cm; bowl ~12cm | MEDIUM |
| Spiral potato (*Kartoffelspirale*) | A whole potato cut into a continuous thin spiral on a wooden skewer, fried golden and crisp, paprika-dusted | ~25–30cm long on skewer | MEDIUM |
| Langos | Hungarian fried flatbread with garlic, sour cream, and grated cheese; puffy, blistered, golden, oily | ~20–25cm | MEDIUM — a genuine, common German-fair import food, not native German |
| Candied almonds (*gebrannte Mandeln*) | Rough, crystalline, glossy caramel coat, amber to brown, clumped; paper cone | Cone ~15cm tall; almonds ~2cm | MEDIUM |
| Magenbrot | Small glazed spiced-cake rhombuses with a shiny dark chocolate-brown sugar glaze | ~4cm pieces | MEDIUM |
| Gingerbread hearts (*Lebkuchenherz*) | A matte-brown heart with piped white/pastel icing lettering and frills, hung on a ribbon | 15–30cm | MEDIUM |
| Candy apple (*Paradiesapfel*) | A glassy, deep-red hard-candy shell on an apple, on a stick | ~8cm apple | MEDIUM |
| Chocolate-dipped fruit (*Schokofrüchte*) | Strawberries, grapes, or banana on skewers, glossy chocolate dip with a white-chocolate drizzle | Skewer ~25cm | MEDIUM |
| Crêpes | Thin, lacy-browned, folded into a paper cone, with a melting chocolate spread | Cone ~20cm | MEDIUM |
| Berliner doughnut (Carnival, NYE) | Round, no hole, deep golden with a pale unfried ring around the equator, dusted with sugar or glazed; jam oozes from a side hole | ~8–9cm | MEDIUM |

**Note per schema §4.1's honesty norm**: Langos is a Hungarian import, not
a native German dish — its inclusion here is honestly disclosed rather than
folded into "German fair food" without context.

### Contemporary everyday food (do not omit)

**This section is genuinely load-bearing, not a lower-priority afterthought
— the draft's own caution (§1.1/§4.11 of the scratch file) is correct and
this pass found nothing to contradict it.** Omitting Döner, pizza, Gyros,
and pan-Asian Imbiss food from a "German food" knowledge base would produce
a folkloric Germany no actual resident would recognize as their own everyday
diet.

| Dish | Context | Look & texture | Scale | Confidence |
|---|---|---|---|---|
| Pizza (Italian-German pizzeria) | Dinner, delivery | Thin crust, lightly leopard-spotted rim, ample cheese; German-market staples include ham-and-pineapple and tuna-onion toppings; on a large white plate or in a delivery box | ~30cm | MEDIUM |
| Spaghetti Bolognese | Canteen, home, kids | Rich red-brown meat sauce over spaghetti, grated cheese snowing on top — a thoroughly naturalized everyday dish, not a "foreign" one in practice | Deep plate 22–26cm | MEDIUM |
| Gyros plate (Greek-German restaurant) | Dinner | Heaped, crisp-edged pork gyros, thick white tzatziki with cucumber flecks, fries or rice, raw onion, lettuce garnish; white-and-blue décor | 28–30cm plate | MEDIUM |
| Falafel wrap/plate | Lunch, late night | Craggy, deep brown-green-flecked falafel balls, broken to show a green interior; tahini drizzle | Balls ~4cm | MEDIUM |
| Asia box (pan-Asian Imbiss) | Lunch, takeaway | Glossy wok-fried noodles or rice in a folded paper/plastic box, chopsticks stuck in, sesame seeds, steam | Box ~10×10×10cm | MEDIUM |
| Lahmacun | Snack | A paper-thin round flatbread with a red spiced-meat smear, rolled with lettuce, parsley, lemon | ~30cm round | MEDIUM |
| Plant-based currywurst/burgers | Canteens, urban | Visually resembles the meat version (see the Currywurst entry); canteen signage in German | As Currywurst entry above | MEDIUM |
| Spaghettieis (Eiscafé snack) | Summer snack | **Invented in 1969 by Dario Fontanella, a then-17-year-old, at his family's ice cream shop in Mannheim** — confirmed this pass with a specific, sourced inventor and city, correcting the draft's own unsourced entry. [CONFIDENCE: HIGH] [SOURCE: [Smithsonian Magazine — How Germany's Spaghetti Ice Cream Came to Be](https://www.smithsonianmag.com/travel/how-germanys-spaghetti-ice-cream-came-to-be-180982461/)] Vanilla ice cream extruded into spaghetti-like strands (originally pushed through a Spätzle press) over whipped cream, topped with red strawberry sauce and white-chocolate shavings mimicking parmesan, in a glass coupe | Coupe ~15cm | HIGH for origin; MEDIUM for exact dimensions |

### Kaffee und Kuchen & sweets (compact catalog)

**Serving norm**: cake plates 19–20cm, cake forks, a whipped-cream bowl,
often a lace or patterned tablecloth. **No coffee cups or pots in frame**
(beverage scope, per the standing rule).

| Item | Look & texture | Scale anchor | Confidence |
|---|---|---|---|
| Black Forest cake (*Schwarzwälder Kirschtorte*) | Dark chocolate sponge layers, white whipped-cream stripes, dark cherries, a chocolate-curl coating, a cream rosette with a cherry on top | Slice ~10cm tall from a 26cm torte | MEDIUM-HIGH — a well-known, iconic dish |
| Bienenstich | A glossy caramelized flaked-almond top with a crackly sheen, a thick pale vanilla-cream middle, a yeast-cake base | ~8×8cm | MEDIUM |
| Streuselkuchen | A sheet cake with large, craggy, buttery golden crumb nuggets | ~8×10cm | MEDIUM |
| Plum cake (*Zwetschgendatschi*) | Rows of overlapping purple-violet plum halves, glistening jammy juices, a thin base | ~8×10cm | MEDIUM |
| Käsekuchen | A tall, pale-cream quark filling, a lightly cracked golden-brown top, a fine-grained cut face | Slice ~5–6cm tall | MEDIUM |
| Apfelstrudel | Paper-thin, flaky, golden, blistered pastry, powdered sugar; the cut face shows soft apple, raisins, and a cinnamon swirl; with vanilla sauce or ice cream | Slice ~8cm | MEDIUM |
| Franzbrötchen (Hamburg) | A flattened, pressed cinnamon pastry with a shiny caramelized-sugar finish and visible laminated spiral layers | ~10–12cm | MEDIUM |
| Kaiserschmarrn (Alpine hut) | Torn, fluffy, caramelized pancake pieces with golden edges, heavily powdered sugar, raisins, plum compote on the side, served in the pan | Pan ~24cm | MEDIUM |
| Germknödel | A large, smooth, pale steamed yeast dumpling with a hidden plum-jam center, melted butter, and a grey-black poppy-seed-and-sugar snow | ~12cm | MEDIUM |
| St. Martin bread figure (*Weckmann*/*Stutenkerl*) | A sweet yeast-dough figure, glossy egg-washed golden, with raisin eyes and buttons; a West-German lantern-season item | ~20–25cm | MEDIUM |

### Variant summary (schema §4.6 quick reference)

| Dish | Variants | KB default | Confidence |
|---|---|---|---|
| Kartoffelsalat | Vinegar-broth (South) / mayonnaise (North/West) | Match region | MEDIUM-HIGH |
| Schnitzel naming | Wiener (veal, legally protected) / Wiener Art (pork) | "Breaded pork cutlet, Viennese style" | HIGH |
| Jägerschnitzel | Mushroom sauce (West) / breaded Jagdwurst + tomato pasta (East/GDR-heritage) | West, unless East context explicit | HIGH |
| Pork knuckle | Haxe (Bavaria, roasted, crisp) / Eisbein (Berlin/North, boiled, soft) | Match region — never conflate | MEDIUM |
| Brezel shape | Swabian (thin arms, pre-slit fat belly) / Bavarian (even arms, naturally split belly) | Match region | HIGH |
| Currywurst | With casing (West/Ruhr) / skinless (East Berlin origin) | With casing | HIGH |
| Sauerbraten | Rhenish (raisins) / Franconian (gingerbread, no raisins) / Swabian (garlic, dry wine, with Spätzle) | Rhenish | HIGH |
| Dumplings | Potato / bread / Thüringer (crouton center) | Match main dish | MEDIUM |
| Spätzle | Hand-scraped / pressed (Knöpfle) | Hand-scraped | MEDIUM |
| Maultaschen | In broth / pan-fried | In broth (lunch) | MEDIUM |
| Meat patty naming | Frikadelle / Bulette / Fleischpflanzerl / Fleischküchle | Descriptive English | MEDIUM |
| Fischbrötchen | Bismarck / Matjes / Backfisch / Krabben / Lachs | Bismarck | MEDIUM-HIGH |
| Bratwurst | Thüringer (PGI, 15–20cm) / Nürnberger (PGI, 7–9cm) / generic | Match region | HIGH |
| Roll naming | Brötchen / Semmel / Schrippe / Weckle / Rundstück | Descriptive English | MEDIUM |
| Roast chicken naming | Hähnchen / Hendl / Broiler (East) | Descriptive English | MEDIUM |
| Labskaus presentation | Beetroot mixed into mash / beetroot served as a separate side (Bremen-style) | Either, disclosed | MEDIUM-HIGH |
| Döner serving format | In flatbread (default) / Dürüm (rolled) / plate | In flatbread | MEDIUM-HIGH |
| Evening meal | Cold Abendbrot (traditional) / warm dinner (rising, especially urban/younger) | Either, disclosed — not a silent default | MEDIUM-HIGH |

---

## COCA-COLA MARKET INTEGRATION

This section holds market-specific Coca-Cola staging detail that goes
beyond `01-brand/coca-cola-guidelines.md`'s generic, cross-market rules —
pack formats actually sold in Germany, the German-market pairing logic, and
authenticity cues (deposit marks, calibrated glassware) specific to this
market. It defers to `coca-cola-guidelines.md` for every generic rule (hero-
zone/depth-hierarchy composition, logo-fidelity findings, the base 330mL
can dimensions) rather than restating them.

### Brand anchor

**Classic red Coca-Cola Original only** — not Zero Sugar, not Diet/Light.
**Mezzo Mix (a real Coca-Cola Germany cola-orange product) is excluded from
this file's scope** — this is a KB scope decision, not a factual claim
about the product's existence or popularity, and carries no confidence tag.
Competitor beverages and other cola-orange "Spezi"-type drinks are never
shown.

### German/EU pack formats (scale anchors)

| Format | Setting fit | Approx. dimensions | Confidence |
|---|---|---|---|
| 330mL can | Imbiss, Späti, beach, picnic, stadium, home | **115.2mm tall × 66.1mm diameter** — use `coca-cola-guidelines.md`'s already-verified non-US-market figure, not the draft's own rougher ~11.5cm×~6.6cm estimate | HIGH for the figure itself (verified for the general non-US-market standard); **not independently confirmed as a Germany-specific bottler figure, and this pass could not confirm whether Germany also uses a narrower "slim" 330mL can variant alongside the standard-diameter can** — flagged honestly as a remaining market-specific gap, not resolved by assumption |
| 0.2L glass contour bottle (returnable) | Restaurants, cafés, Kaffee und Kuchen | Not independently confirmed this pass — carried from the draft as an estimate (~16–17cm) pending a dedicated source | LOW — genuinely unconfirmed, not papered over |
| 0.33L glass contour bottle (returnable) | Inns, beer gardens, pizzerias | Not independently confirmed this pass — carried from the draft as an estimate (~19–20cm) pending a dedicated source | LOW — genuinely unconfirmed, not papered over |
| 0.5L PET | On the go: kiosk, train, festival, Freibad | Per `coca-cola-guidelines.md` §4.3's general table, a 500mL PET bottle runs ~203mm tall, ~65mm diameter — carried over from the generic brand-file figure, not independently re-confirmed as Germany-specific | MEDIUM — generic figure applied to this market by inference, not independently verified for Germany |
| 1.0L PET/glass (returnable) | Home table, family meals, allotment | Not independently confirmed this pass — carried from the draft as an estimate (~30cm) pending a dedicated source | LOW — genuinely unconfirmed |

**Rule, unchanged**: never render US 12 fl oz (355mL/123mm) can proportions
or US labelling for a Germany-set scene.

**Condensation and pour texture** (carried from the draft, editorial/visual
guidance rather than an independently sourced claim, consistent with how
`coca-cola-guidelines.md` treats its own not-yet-tested pour guidance): a
chilled can shows fine, even beading with larger droplets running to the
base ring; glass bottles show frosted beading on the contour; poured
Coca-Cola is dark cola-brown, near-opaque, red-amber at the light-struck
edges, with a thin tan foam head that collapses quickly; ice is modest.

### Alcohol exclusion (hard rule — full text)

**TCCC's real, public policies (see FILE ROLE & METHOD above for the
sourced citations) directly support this rule — it is not an invented
caution.** Market facts about beer, wine, Apfelwein, and Glühwein
documented throughout this file are accurate context only. In every image:

1. **No alcoholic beverages** anywhere in frame, foreground or background.
2. **No alcohol-coded vessels, even empty**: litre steins, tall wheat-beer
   glasses, Cologne-style slim beer glasses and their carrying rings, wine
   glasses, Apfelwein stoneware jugs and ribbed glasses, Christmas-market
   mulled-wine mugs, shot glasses.
3. **No alcohol branding or infrastructure**: brewery signage, beer
   umbrellas, tap handles, bar backs, tent interiors.
4. **Coca-Cola must never appear as a mixer.** Germany has real cola-beer
   and cola-spirit mixed-drink traditions; never imply them.
5. **Scene compensation**: in beer gardens, inns, folk festivals, wine
   festivals, and Christmas markets, frame on food, Coca-Cola, the people
   eating, and non-drinking details (stalls, lights, rides, the chestnut
   canopy). Other guests' tables should be empty of drinks or out of frame,
   never shown with blurred alcohol.

### German authenticity cues

- **Deposit mark (*Pfand*)**: single-use cans and PET bottles carry the DPG
  deposit logo — a real, legally sized (14×16mm), trademarked blue symbol
  (a bottle, can, and curved arrow). Render it generic and illegible, or
  omit it, per the trademark-genericization table above — never render it
  as sharp, legible brand IP. [CONFIDENCE: HIGH for the logo's legal
  specification] [SOURCE: [DPG Deutsche Pfandsystem — About DPG](https://dpg-pfandsystem.de/en/the-one-way-deposit-system/about-dpg.html)]
- **Calibrated glassware**: German gastronomy glasses genuinely carry a
  printed fill line (colloquially "Eichstrich," more precisely a
  "Füllstrich"/fill mark under Germany's Mess- und Eichgesetz implementing
  an EU measurement directive), typically in comma-decimal format, e.g.
  "0,3 l" or "0,4 l" — a real, legally grounded realism cue, not
  decorative. [CONFIDENCE: MEDIUM-HIGH — the legal framework and general
  convention are confirmed; the precise everyday visual appearance of a
  specific fill-line marking was not independently photographed/verified
  this pass] [SOURCE: [Wikipedia (DE): Füllstrich](https://de.wikipedia.org/wiki/F%C3%BCllstrich);
  [Wikipedia: Fill line](https://en.wikipedia.org/wiki/Fill_line)]
- **Returnable crates**: stacked plastic crates of glass bottles are a
  plausible, widely-recognized German domestic-realism cue tied to the
  deposit system — see ENVIRONMENT & STAGING SCENES. [CONFIDENCE: MEDIUM —
  not independently re-verified as a specifically photographed convention
  this pass]
- **Prices and signage**: German-language signage, euro prices in comma-
  decimal format (e.g. "2,50 €") — well-known, general knowledge, not
  independently re-sourced this pass.

### Pairing matrix

Carried from the draft's own market-fit reasoning; none of these ratings
are independently sourced surveys, and all remain editorial judgment calls
about scene fit rather than measured consumer-preference data.

| Context | Fit | Preferred format |
|---|---|---|
| Currywurst / fries / Döner / Imbiss | Strong | 330mL can or 0.5L PET |
| Pizza / pasta / Gyros / Asia box | Strong | 0.33L glass or can |
| Späti stoop, beach, Freibad, river meadow (alone) | Strong | 330mL can or 0.5L PET |
| Stadium, public viewing, music festival | Strong | Can or 0.5L PET |
| Canteen lunch | Moderate | 0.5L PET |
| Family inn, kids' Schnitzel | Moderate | 0.2–0.33L glass + calibrated glass |
| Beer garden / folk festival (alcohol-exclusion framing applies) | Moderate | 0.33L glass bottle |
| Fair & market sweets | Moderate | Can or 0.33L glass |
| Abendbrot at home, raclette, allotment grill | Moderate | 1.0L bottle + tumblers |
| Christmas market | Weak-to-moderate | 0.33L glass or can |
| Kaffee und Kuchen | Weak | 0.2L glass |
| Spargel / formal Sunday roast | Weak | 0.2L glass |

**Confidence for the whole table**: EDITORIAL — a scene-fit judgment call,
not a sourced consumer-preference finding.

---

## ANTI-PATTERNS

1. **Bavaria-as-Germany**: Lederhosen, Dirndl, and Alpine backdrops in
   Hamburg or Berlin. The single most important caricature this file
   flags — see ZONE CHARACTERIZATION.
2. **Munich autumn festival as default "German food"** — confirmed this
   pass as a real, checkable misconception, not just a style preference;
   see the FESTIVAL & OCCASION CALENDAR entry.
3. **Any alcohol or alcohol-coded vessel in frame**, including a blurred
   background stein — see the alcohol-exclusion rule.
4. **US-portion inflation.** Portions are generous but not super-sized.
5. **US pretzel look** — pale, soft, cinnamon-sugar-dusted, no lye crust
   (see the Brezel entry).
6. **US potato salad** — cubed, mustard-yellow, celery, paprika dusting
   (see the Kartoffelsalat entry).
7. **Hot-dog buns for Bratwurst** — a crusty white roll is correct.
8. **Sauerkraut on everything.** It belongs with Eisbein, Kassler,
   Nürnberger plates, Saumagen, and Schupfnudeln — not by default beside
   Schnitzel or currywurst.
9. **Halve Hahn with chicken** — it is a Gouda cheese roll; see the entry.
10. **Old slur names** for paprika schnitzel — always say "paprika
    schnitzel." (Not independently re-verified this pass; treated as a
    standing precaution regardless — see the Sauced Schnitzel entry.)
11. **English or US signage; dot-decimal prices** — German-language
    signage and comma-decimal prices are correct.
12. **Wrong can proportions or US labelling** — see the pack-format table
    above.
13. **Folkloric-only Germany**: omitting Döner, pizza, Gyros, and Asia
    boxes — see CONTEMPORARY EVERYDAY FOOD.
14. **Soft or rubbery crackling; batter-style Schnitzel coating; a smooth
    hash-brown-style Reibekuchen** — texture failures; see the VISUAL &
    PLATING NORMS texture lexicon.
15. **Visible branded condiments or props**: the specific brown seasoning-
    sauce bottle, named mustard/curry-ketchup brands, chain logos — see
    the trademark-genericization table.
16. **Coffee cups at Kaffee und Kuchen** — out of this file's beverage
    scope.
17. **Conflating Haxe and Eisbein** — one is roasted and crisp, the other
    boiled and soft; see the dedicated variant note.
18. **A silent single default for a genuinely coexisting variant**
    (Kartoffelsalat, Jägerschnitzel, currywurst casing, Sauerbraten,
    Labskaus presentation) rather than disclosing the choice per schema
    §4.6 — added as its own anti-pattern this pass, since it's the single
    most common way this file's own heavy variant load could be misused.

---

## TRADEMARK & LANDMARK HANDLING (schema §7.5)

See the GENERAL NORMS trademark-genericization table above for the full,
consolidated list (this pass merged the draft's separate §9 table into that
one table rather than keeping two overlapping lists — see the RESEARCH LOG
for this structural note). The core rule, unchanged from schema §7.5 and
from this project's Coney Island precedent: a real business, festival, or
landmark may be cited as **evidence** that a setting or dish is authentic,
but never as a literal, named prompt subject. Landmarks specifically
(Brandenburg Gate, Cologne Cathedral, Neuschwanstein Castle, the
Elbphilharmonie, Munich's towers) get the same treatment this project gave
Coney Island's Wonder Wheel: describe the generic category of structure/
setting instead of the specific, identifiable, potentially trademarked or
copyrighted design.

---

## GAP LOG

- **Germany-specific Coca-Cola pack dimensions beyond the 330mL can remain
  largely unconfirmed** — the 0.2L and 0.33L glass contour bottles and the
  1.0L returnable format are carried from the draft's own estimates, not
  independently verified via WebSearch this pass (search results returned
  general Coca-Cola bottle guides, not Germany-specific technical specs).
  The 0.5L PET figure is inferred from `coca-cola-guidelines.md`'s generic
  table rather than confirmed Germany-specific. **This is the single
  largest remaining Priority-A gap from the draft's own verification
  queue**, flagged honestly rather than papered over with invented
  precision.
- **Whether Germany uses a "slim" 330mL can variant alongside the standard-
  diameter can was not confirmed this pass** — WebSearch results on this
  point were generic can-dimension aggregator content, not Germany-specific
  bottler documentation.
- **No confirmed TCCC OU code for this market** — flagged in the front
  matter; do not guess one, same disclosed gap as `uk.md`.
- **The paprika-schnitzel old-name naming-sensitivity claim was not
  independently re-verified with a dedicated new source this pass** —
  carried forward from the draft as a standing precaution regardless of
  confirmation status, since the cost of over-caution here is negligible.
- **Bavaria's dish-catalog depth and the Bavaria-spinout trigger's ~30%
  threshold were not independently re-derived or tested this pass** — both
  are carried forward as the orchestrating session's own prior decision,
  not re-litigated per the task brief.
- **A large share of individual dish dimensions (most of the compact-
  catalog tables: fair snacks, Kaffee-und-Kuchen items, soups, East
  German dishes) remain this file's own reasonable estimates**, carried
  from the draft without a dedicated new WebSearch per dish, consistent
  with the proportionality choice explained at the top of the DISH
  CATALOG. Confidence is tagged MEDIUM throughout to reflect this honestly
  rather than implying a false uniformity of verification depth across
  ~50 entries.
- **Regional-boundary evidence for the eight-zone regional map was spot-
  checked, not exhaustively validated** the way the UK's Scotland/Wales/
  Northern Ireland split was validated dish-by-dish and axis-by-axis. The
  map is carried forward largely as the draft described it, with individual
  dish claims verified where they intersected this pass's priority queue.
- **The calibrated-glassware fill-line's everyday visual appearance**
  (exact font/placement conventions on a real German gastronomy glass) was
  confirmed as a real legal/cultural convention but not independently
  photographed or visually detailed beyond the general "comma-decimal fill
  line" description.
- **Returnable-crate storage as a domestic realism cue** is carried from
  the draft as a plausible, widely-recognized convention, not independently
  re-verified with a dedicated new source this pass.

## CANDIDATE QUEUE

1. A dedicated search pass (or SME/bottler-documentation check) on
   Germany-specific Coca-Cola glass-bottle (0.2L/0.33L) and 1.0L PET/glass
   dimensions, and on the slim-vs-standard 330mL can question — the top
   remaining Priority-A gap from the draft's own verification queue.
2. A native-German-reviewer pass, per the draft's own recommendation
   (§11/§"Human review" of the scratch file) — covering the meal-structure
   table, the Weißwurst before-noon custom, the regional settings register,
   the festival calendar, the authenticity cues, and the trademark table.
   **This file's `status:` front matter reflects this as still needed —
   do not treat this file as production-ready until it happens.**
3. Independent §8 audit of this file before it is treated as fully done,
   per the project's standing practice (not yet run as a separate pass in
   this session).
4. A dedicated verification pass on the individual dimension estimates in
   the compact-catalog tables (fair snacks, Kaffee-und-Kuchen items, East
   German dishes, soups), if any of them turn out to be genuinely
   staging-critical in practice.
5. Once `spain.md` exists, revisit Germany's meal-timing (12–14:00 lunch,
   18:00–19:00 dinner) against Spain's own findings per
   `country-file-schema.md` §5.2 — Spain's famously later meal times should
   make for a sharp, worth-stating cross-country contrast, the same way
   this project already contrasts UK/US/Uruguay dinner timing.
6. Consider whether `coca-cola-guidelines.md` should directly cite TCCC's
   public Responsible Marketing Policy and Responsible Alcohol Marketing
   Policy (both found and cited in this file — see FILE ROLE & METHOD),
   so every future country file inherits the citation rather than
   re-discovering it. Not done in this pass, to avoid colliding with the
   parallel Spain-file session's own edits to shared files.

## RESEARCH LOG

- **2026-09-24, verification-and-merge pass.** Input:
  `knowledge-base/scratch-germany-model-knowledge-draft.md` (a model-
  knowledge-only scaffold from a separate, tool-less Claude session on
  branch `claude/nations-batch-1` — see that file's own header and
  `DECISIONS.md`'s entry evaluating it for provenance). Method: WebSearch
  only — WebFetch/direct page reads were blocked by network egress for
  every domain attempted, consistent with every prior research round on
  this project (Uruguay, all completed US regional files, the UK build).
  Roughly 30 distinct WebSearch queries were run across this pass,
  prioritized per the draft's own §11 verification queue: Priority A first
  (Coca-Cola pack dimensions, TCCC's actual alcohol/children's-marketing
  policy, the Wiener Schnitzel naming rule, calibrated-glassware
  conventions, the DPG deposit logo), then Priority B (Swabian-vs-Bavarian
  pretzel shape, currywurst casing prevalence and its East Berlin origin,
  East-style Jägerschnitzel, Nürnberger/Thüringer Bratwurst PGI dimensions,
  Spaghettieis and Steckerlfisch, NYE raclette prevalence), then a
  time-boxed spot-check of Priority C and the task's own named dish list
  (currywurst's Berlin/Ruhr origin dispute, Sauerbraten's three regional
  variants, Käsespätzle, Flammkuchen, Handkäs mit Musik, Labskaus, the
  Oktoberfest-Munich-only framing, Abendbrot prevalence and its documented
  decline, German housing stock, population, young-adult living
  arrangements, and balcony/garden access). No subagents were used for this
  pass.
- **Quantified verification outcome.** Of the roughly 50 distinct factual
  claims this pass specifically targeted (the draft's own Priority A/B
  items plus the task's named spot-check list): **roughly 20 were
  confirmed and upgraded from the draft's `[UV→X]` tag to a real HIGH or
  MEDIUM-HIGH sourced confidence tag** (the Wiener Schnitzel naming law;
  the DPG deposit-logo size and trademark status; the Eichstrich/Füllstrich
  legal fill-line convention; Nürnberger and Thüringer Rostbratwurst's
  exact PGI dimensions; the Swabian-vs-Bavarian pretzel-shape mechanism;
  currywurst's Berlin-best-evidenced-but-contested origin and its East
  Berlin skinless-variant origin; East-style Jägerschnitzel's GDR-canteen
  origin; Sauerbraten's three regional sauce variants; Käsespätzle's
  Swabian origin and cheese type; Flammkuchen's Alsace/Baden/Palatinate
  shared origin; Handkäs mit Musik's composition; Labskaus's origin and a
  newly-disclosed Hamburg/Bremen presentation variant; Grüne Soße's
  Maundy Thursday tradition and 2016 EU protection; Spaghettieis's exact
  1969 Mannheim/Dario Fontanella origin; Steckerlfisch's mackerel-
  prevalence correction; the Munich-only Oktoberfest framing; Spargelzeit's
  24 June/Johannistag end date; Germany's population, housing-stock split,
  rental rate, balcony-access rate, and young-adults-at-home rate; and
  TCCC's own real Responsible Marketing/Responsible Alcohol Marketing
  policies). **Roughly a dozen items were carried forward largely as the
  draft described them after a spot-check found no contradiction** (the
  general meal-structure framework, the texture lexicon's individual
  claims, most of the compact-catalog dish dimensions). **A handful of
  specific figures were corrected or sharpened, not just confirmed
  verbatim** — the 330mL can dimension (replaced with `coca-cola-
  guidelines.md`'s already-verified 115.2mm/66.1mm figure rather than the
  draft's own rougher ~11.5cm/~6.6cm estimate); Nürnberger Bratwurst's
  length (corrected from the draft's vaguer estimate to the exact
  EU-registered 7–9cm/20–25g); the Brezel shape mechanism (sharpened from
  "arms joined higher/lower" to the more precise pre-slit-vs-naturally-
  split distinction); and Labskaus (the beetroot-in-mash detail was
  disclosed as a genuine Hamburg-vs-Bremen coexisting variant rather than a
  single unqualified description). **Nothing was found to be flatly wrong
  and removed outright** — consistent with the UK build's own finding, this
  draft's honesty discipline (real, checkable claims with an honest `[UV→X]`
  tag, never a fabricated-sounding citation) meant its leads consistently
  panned out in the direction it expected.
- **What could not be confirmed and is flagged, not papered over**: the
  Germany-specific glass-bottle (0.2L/0.33L) and 1.0L PET/glass dimensions;
  whether Germany uses a slim 330mL can variant; the exact everyday visual
  appearance of a calibrated-glass fill line; the paprika-schnitzel old-
  name naming-sensitivity claim; and a large share of individual dish
  dimensions in the compact-catalog tables (fair snacks, Kaffee-und-Kuchen
  items, East German dishes, soups) — all logged in the GAP LOG above
  rather than left implicit.
- **Structural decisions not re-litigated, per the task brief**: the
  single-file structure with the Bavaria-spinout trigger, and the alcohol-
  exclusion hard rule, were both decisions made by the orchestrating
  session before this pass began. This pass's job on those two points was
  narrower: confirm the alcohol-exclusion rule's consistency with
  `coca-cola-guidelines.md` (found no conflicting language there, and found
  that the rule is independently well-supported by TCCC's own real,
  public Responsible Marketing and Responsible Alcohol Marketing policies —
  see FILE ROLE & METHOD for the full citation) and reorganize the draft's
  own 0–12 section numbering into this project's established FILE ROLE &
  METHOD / QUICK-REFERENCE / ZONE CHARACTERIZATION / TRUSTED CONTENT /
  DISH CATALOG / GAP LOG / CANDIDATE QUEUE / RESEARCH LOG convention,
  actually re-mapping content into those sections rather than just
  relabeling headers.
- **One structural merge made during reorganization, flagged as a judgment
  call**: the draft's separate §9 ("Trademark & Landmark Handling") table
  and its GENERAL-NORMS-equivalent trademark list were merged into a
  single, consolidated trademark-genericization table in TRUSTED CONTENT >
  GENERAL NORMS, with the TRADEMARK & LANDMARK HANDLING section (kept, per
  schema §7.5's naming convention) pointing back to it rather than
  duplicating it — the same "one authoritative location, not two
  overlapping lists" principle schema §4.3 applies to style-map entries.
