---
country: mexico
ou: LATAM (TCCC's public segment grouping; no confirmed internal TCCC OU code — same standing caveat every other started market's file carries, see `market-roadmap.md`). What this pass did confirm, as a substitute until an OU code is found: Mexico is served by several Coca-Cola bottlers, of which **Coca-Cola FEMSA** and **Arca Continental** are the two largest, with FEMSA's own filings describing distinct territory profiles (dense, higher-income central Mexico vs. large, mountainous, lower-consumption parts of the south). The full current bottler map (smaller regional bottlers) was not confirmed this pass.
status: DRAFT — NEEDS SME/HUMAN REVIEW. First pass, built directly (no separate model-knowledge scaffold) with WebSearch verification of the load-bearing claims. See METHOD NOTE for how unverified claims are tagged.
research_method: Claude web research (WebSearch only; direct page reads of Wikipedia were blocked by the network egress proxy, so Wikipedia-sourced claims rest on search-result snippets — disclosed per `country-file-schema.md` §6). Structure follows `country-file-schema.md` and the single-file-with-zones pattern of `spain.md`, `germany.md` and `africa/south-africa.md`; the HERO PRODUCT SLOT and ICONIC BEVERAGES sections follow `south-africa.md`.
date_drafted: 2026-09-27
---

# Mexico

## FILE ROLE & METHOD

This file is Mexico's country file: a single national staging brief with
seven labeled internal zones. One TCCC hero beverage per scene (chosen per
brief — see HERO PRODUCT SLOT), staged against real Mexican dishes,
vessels, and settings, with the full iconic-beverage landscape documented
as context even where a beverage (alcohol) is never itself staged.

**Scope** (same default as the Spain/Germany/South Africa files, not a new
decision): comida (the main midday meal), cena (evening meal), and snacks
(antojitos, street food, botanas) are in scope. Breakfast (desayuno) and
the mid-morning almuerzo are out of scope except via the opt-in Morning
Module. No beverage other than the hero TCCC product is staged; others are
documented in ICONIC BEVERAGES as context only.

### Structural decision: one file, seven zones (recommendation — reviewer has final say)

The `country-file-schema.md` §1.1 swap test, applied with the evidence
gathered this pass:

- **Food partly travels, partly does not.** A national core reads
  correctly almost anywhere in Mexico: tacos on small corn tortillas with
  onion, cilantro, lime and salsa; quesadillas; enchiladas; tamales;
  pozole on a holiday night; tortas; arroz rojo and frijoles beside a
  guisado; the fonda's comida corrida. [CONFIDENCE: HIGH that these are
  national — each is documented as eaten nationwide in the sources cited
  in its entry below]
- **Some dishes are genuinely form-changing by region** and would look
  wrong transplanted (§4.2): the **tortilla itself** (corn in most of the
  country; very large, thin wheat-flour tortillas in the North — Sonora's
  sobaqueras run 30–60 cm across [HIGH]); **pozole's colour** (rojo in
  Jalisco/Michoacán, verde and blanco in Guerrero [HIGH]); **tamal
  wrappers** (banana leaf in Oaxaca, Yucatán, Chiapas, Tabasco; corn husk
  elsewhere [MEDIUM-HIGH]); **birria's meat and format** (goat stew with
  consomé in Jalisco vs. beef quesabirria tacos from Tijuana [HIGH]).
- **Environment does not travel**: the Sonoran desert and Monterrey's
  industrial north, Guadalajara's colonial centre, Mexico City's dense
  colonias, Oaxaca's valleys, the humid Gulf, and the Yucatán's limestone
  flatlands with Maya-influenced houses look nothing alike.

**Recommendation: one national file, seven zones, handled as
dish-variant and environment deltas** — the same call this project made
for Spain (six zones), Germany, and South Africa (five zones), rather than
a US-style index-plus-regional-files split. Reasoning: the form-changing
dishes are real but concentrated in a manageable set of entries, each of
which can carry its own §4.3/§4.6 variant list inside one file.

**Flagged spinout candidate (not triggered)**: the **Yucatán Peninsula**
(zone 7) is the zone most likely to justify its own file later — a
distinct Maya-rooted cuisine (recado pastes, achiote, sour orange,
habanero, pib pit-cooking), its own bread/tortilla-snack formats (panuchos,
salbutes), and a distinct architecture and climate. If briefs set there
start to exceed roughly a quarter of Mexico usage, or a reviewer judges
the zone callout insufficient, split to `mexico-yucatan.md` following
`country-file-schema.md` §2.2. **This is a recommendation for the human
reviewer, not a decision** (§7).

### Zones (one scheme, used throughout)

| # | Zone | Covers | Visual register |
|---|---|---|---|
| 1 | North (Norte) | Sonora, Chihuahua, Coahuila, Nuevo León, Durango, interior Tamaulipas | Desert and scrub, mountains behind Monterrey, wide streets, low flat-roofed houses, carports, backyard grills; flour-tortilla country |
| 2 | Northwest Pacific | Baja California, Baja California Sur, Sinaloa, Nayarit | Dry coast meeting the sea, fishing ports, marisquerías and seafood carts, palapa shade |
| 3 | West & Bajío (Occidente) | Jalisco, Michoacán, Guanajuato, Colima, Aguascalientes, Querétaro | Colonial stone centres, arcaded plazas, market halls, agave fields (Jalisco), lakes and pine uplands (Michoacán) |
| 4 | Centre (Centro) | Mexico City, Estado de México, Puebla, Hidalgo, Tlaxcala, Morelos | Dense colonias, multi-storey concrete houses, street stalls on every corner, Talavera tile (Puebla), highland light, volcanoes on the horizon |
| 5 | Gulf (Golfo) | Veracruz, Tabasco, coastal Tamaulipas, the Huasteca | Humid, green, tropical; port cafés, portales, bright painted walls, banana and palm |
| 6 | South (Sur) | Oaxaca, Guerrero, Chiapas | Mountain valleys and highlands, adobe and colourful stucco, open-air markets, the Pacific coast of Guerrero |
| 7 | Yucatán Peninsula | Yucatán, Campeche, Quintana Roo | Flat limestone scrub, pastel colonial fronts (Mérida, Campeche), hammocks, intense sun, thatched Maya houses in villages |

Zone boundaries are a staging convenience, not a claim about political or
cultural identity; Querétaro and Hidalgo sit on zone edges and could be
argued either way [EDITORIAL].

### Default when no zone is named

Fall back to **zone 4 (Centre) at the everyday register**: a Mexico City
or Puebla-area home or a neighbourhood taquería/fonda. Mexico City is the
country's largest metro and the origin of several of the most portable
national formats (tacos al pastor, tortas, tacos de canasta).
[EDITORIAL fallback — not a sourced "most typical Mexico" claim]

---

## METHOD NOTE (read first)

**Build method, this pass.** Unlike the UK, Spain, Germany and South Africa
files, this file was **not** built as a verification pass over a separate
tool-less scaffold. It was drafted directly from model knowledge and
checked with roughly 35 WebSearch queries in the same session, prioritising
the claims a scene would visibly depend on (pack formats, meal timing,
housing type, tortilla and vessel sizes, and the form-changing dishes).
Tags therefore mean:

- **[HIGH] / [MEDIUM] / [LOW]** — schema §6 tags earned this pass (HIGH =
  2+ independent corroborating sources; MEDIUM = 1 credible source).
- **[MEDIUM — not independently re-checked this pass]** /
  **[LOW-MEDIUM — not independently re-checked]** — model knowledge that
  is uncontested general culinary or cultural knowledge but was not
  individually searched. Treat these like the Spain file's "carried from
  the scaffold" claims: plausible, not verified.
- **[EDITORIAL]** — a judgment call (defaults, caricature-avoidance
  guidance, zone boundaries), never a factual claim.
- **[HIGH — first-party test]** — this project's own image-generation
  findings (`coca-cola-guidelines.md` §1, `country-file-schema.md` §7.5).
  No Mexico-specific image tests have been run yet.

**Writing principle.** Describe what the camera sees: surface, sheen,
crust, char, cut face, how salsa sits, and real-world size. Background
notes only where they prevent a visual error.

**File-wide rules for every scene built from this file:**

1. **Text as atmosphere.** Menu boards, hand-painted stall signs (rótulos),
   price cards, packaging, branded plastic furniture and cooler lids may
   appear only as heavily blurred, unreadable colour in the midground or
   background. Never quote example words or prices. Any readable word,
   number or brand mark means reject or retouch. Blur instructions are
   known to fail. [HIGH — first-party test; `country-file-schema.md` §7.5]
   Mexico has a stronger prior than most markets toward painted street
   lettering on walls and stalls — expect to fight it.
2. **The hero product is a TCCC beverage chosen per brief.** Fill the HERO
   PRODUCT SLOT below with the exact product, variant and format. Branding
   is composited in post, never trusted from the generation
   (`coca-cola-guidelines.md` §1–2).
3. **No alcohol in any scene, ever**, and never show a TCCC product as a
   mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5). Mexico has specific, well-known Coca-Cola cocktails (the
   batanga and charro negro, tequila with Coca-Cola) — documented in
   ICONIC BEVERAGES as context, never staged. This follows the same rule
   `germany.md` and `south-africa.md` ground in TCCC's public Responsible
   Marketing policies.
4. **No drinks in frame other than the hero product**, unless the brief
   explicitly allows a named non-alcoholic companion. Mexican food scenes
   carry strong training priors toward beer (with a lime in the neck),
   micheladas, margaritas and big jars of agua fresca — exclude them
   explicitly.
5. **Nothing held in a hand.** Stage food and the product resting on a
   surface, even for hand-eaten tacos and tortas
   (`country-file-schema.md` §7.5).
6. **Breakfast is out of scope**, except via the opt-in Morning Module.

---

## QUICK-REFERENCE: GENERIC SCENE REGISTERS

| Generic scene type | What to draw on |
|---|---|
| **Street taco stand (puesto)** | A stainless steel counter or folding table under a coloured tarp; a comal or a trompo; plastic-bag-wrapped plates; bowls of chopped onion and cilantro, lime wedges, two or three salsas; plain plastic stools. The default everyday street register. |
| **Taquería (sit-down)** | Tiled or painted walls, a taquero's station in front, stainless counter, plain plastic or metal tables, napkins in a dispenser, salsas on the table. |
| **Fonda / comida corrida** | A small family-run dining room or market stall, oilcloth-covered tables, enamelled (peltre) or plain ceramic plates, a pitcher of agua fresca (kept out of frame per rule 4), a set sequence of courses. |
| **Mercado comedor** | A covered municipal market, a long counter with stools facing the cook's pots (cazuelas), a hanging lamp, produce stalls blurred behind. |
| **Marisquería / seafood cart** | Zones 2 and 5: plastic tables near the water, tostadas, cocteles in tall glass cups, aguachile on a flat plate or in a molcajete. |
| **Family comida at home** | A dining table with an oilcloth (hule) or embroidered cloth, a tortilla basket or cloth-wrapped tortillas, a salsa in a molcajete, a shared pot or platter, a multi-serve bottle in the midground. |
| **Carne asada at home (North)** | A backyard or carport with a charcoal grill, a plastic or folding table, flour and corn tortillas, grilled cebollitas and chiles, salsa, guacamole. |

Full background-first profiles for the main venues: see VENUE PROFILES below.

---

## VENUE PROFILES

Built 2026-10-01 under `country-file-schema.md` §5.9 (wave 1: the five most-used staging venues). The default camera is a close-up hero, so each profile leads with what must read correctly as **soft background**. Zone 4 (Centre, Mexico City and Puebla area) is the default; other zones are given as variants, and where a zone has no detail the Centre version applies [EDITORIAL]. File-wide rules 1–6 apply to every profile: nothing legible, no alcohol, no drinks but the hero, nothing held in a hand. The QUICK-REFERENCE table above stays as the short index.

### Venue: Colonia house, kitchen-dining corner (casa en colonia: comedor y cocina)
- **Use for:** home indoor; casual lunch for 1, 2 or 3, the light cena, Nochebuena and Sunday comida tables, the living-room side of a home watch party. The national default home: 73.2% of dwellings are a single house on its own lot (INEGI 2020; see ENVIRONMENT & STAGING SCENES) [HIGH for the statistic; EDITORIAL for the staging default].
- **Soft background (the core):**
  - *Back wall:* smooth painted plaster in one flat warm or saturated colour (terracotta, mango yellow, salmon, pistachio green) or plain cream, with a slight satin sheen where the window light hits it. On it, kept small and soft: a paper wall calendar (an unreadable rectangle of colour), a small framed religious image or family photo, a round wall clock [MEDIUM — file interior markers, not individually re-checked].
  - *Middle distance:* the compact kitchen through a wide doorway or open to the dining corner: a short run of white or wood-look laminate "cocina integral" units, a four-burner gas stove with a flat steel **comal** on one burner, a blender on the counter, and the **garrafón** (a 20 L water jug) on a stand or dispenser, which reads as a pale blue translucent cylinder. A dark-wood china cabinet (trinchador or vitrina) with glassware behind its doors often stands against the dining wall [MEDIUM — file markers; Homify and La Haus on the small social-housing kitchen; the trinchador is LOW — not verified].
  - *Light:* daylight through an aluminium-framed window with a **wrought-iron grille**, often behind a sheer or lace curtain, so the window reads as a bright panel crossed by a soft dark grid. After dark: a cool-white ceiling fitting (round plafón or a fluorescent or LED tube, 4000–6500 K) that flattens the room, sometimes one warm bulb [MEDIUM for grilles (file exterior markers); LOW-MEDIUM for the cool ceiling light — not verified].
  - *Palette:* the warm wall colour, glossy beige or off-white floor tile, dark wood or wood-look furniture, and the pattern of the hule.
  - *Signature shapes (3–5):* the grille grid over the window; the blue garrafón cylinder; the comal disc on the stove; potted plants on the sill or floor; the dark mass of the china cabinet.
  - *Density and wear:* lived-in and tidy, moderately full; a few things on every surface, not a showroom and not clutter.
  - *People:* one blurred family member at the stove or passing the doorway, back or profile only.
- **Shell:** a concrete-block house of one to three storeys; flat concrete slab ceiling (losa) painted white; glossy ceramic floor tiles (beige, white or stone-look) or polished cement in newer social housing, which is often delivered with cement floors and a 2 × 2 m kitchen [MEDIUM — Homify, La Haus on casas de interés social].
- **The table as set here:** a rectangular wooden or wood-look table for 4–6 under a **patterned plastic oilcloth (hule)**, floral, fruit or checked; for occasions an embroidered cloth, sometimes under a clear plastic cover. Always on it: a napkin holder with thin paper napkins, a salt shaker, salsa in a **molcajete** or small bowl, a tortillero or cloth-wrapped tortillas, lime wedges. Plain ceramic or enamelled (peltre) plates and plain glass tumblers. Chair edges: wooden chairs or metal-framed chairs with vinyl seats [MEDIUM — consistent with the register table and GENERAL NORMS].
- **Subregional variants and the national default:** Centre is the default. *North (zone 1):* larger open-plan rooms, a split air-conditioner high on the wall, flour tortillas on the table. *Gulf and Yucatán (zones 5, 7):* a ceiling fan as a soft blurred disc, louvred or larger windows, pastel walls; in Yucatán, hammock hooks on the wall. *Mexico City apartment (5.6% nationally):* the same table in a smaller open living-dining room with a narrower window and no grille on upper floors [EDITORIAL; LOW — not verified for the zone details].
- **Hallucination traps:** hacienda beams and Talavera tile on every surface; sombreros, sarapes or a guitar hung on the wall; papel picado on an ordinary day; a Día de Muertos ofrenda; a US suburban kitchen with an island and stainless appliances; the yellow filter; poverty framing (bare block walls, exposed rebar indoors).
- **Never stage:** agua fresca jugs, beer or any non-hero drink (rule 4); legible calendars, garrafón labels, appliance brands or fridge magnets; a religious image as the subject; identifiable children.
- **Prompt-ready line:** "A tidy Mexican family house at midday: soft background of a terracotta-painted plaster wall, a bright window behind a black iron grille, a blurred compact kitchen with a steel comal on the gas stove and a pale blue water jug; in focus, a table with a floral plastic oilcloth, a stone molcajete and a cloth-wrapped stack of tortillas."
- **Confidence and sources:** MEDIUM overall. Housing type HIGH (INEGI, as cited above); social-housing interior MEDIUM ([Homify — casas de interés social](https://www.homify.com.mx/libros_de_ideas/3788854/casas-de-interes-social-en-mexico-8-cosas-que-debes-debes-saber-en-cuanto-antes); [La Haus — casa de interés social](https://www.lahaus.mx/blog/comprar-vivienda/casa-de-interes-social-que-es-y-como-acceder-a-este-tipo-de-vivienda)); the rest from the file's interior markers; staging EDITORIAL. One search this pass.

### Venue: Patio, carport or closed street under a tarp (patio o cochera con lona)
- **Use for:** home outdoor; children's birthday taquiza, baptism and first-communion lunches, posada lotería, Fiestas Patrias night, Sunday comida spilling outside, family dominoes; parties of 1, 2 or a small group as a snapshot of 10–80 guests. The everyday-party venue for most of the country (see CELEBRATIONS: How large gatherings work here) [EDITORIAL synthesis; MEDIUM for tarps and rented furniture as a standard service].
- **Soft background (the core):**
  - *Overhead:* a stretched polyester **tarp (lona or toldo)** on metal poles, white, blue or striped, that glows translucent by day and puts a soft colour cast over the whole scene; for a fiesta, string lights and papel picado hung beneath it [MEDIUM — CDMX party-rental listings for toldos, lonas, tables and chairs].
  - *Back wall:* the painted block perimeter wall (barda) of the lot or the house front, in a flat colour, with a **wrought-iron gate or a roll-up garage door**, potted plants in clay pots or reused tins along its foot.
  - *Middle distance:* **rows of rented folding tables** under plain or coloured cloths and identical folding chairs (white plastic, or padded metal); the **taquiza line**: a long table of clay cazuelas and steel chafing pans with a cook behind it; for a birthday, a piñata silhouette and balloon clusters as soft colour [MEDIUM — rental and taquiza vendor offers, as cited in CELEBRATIONS].
  - *Light:* by day, diffused light through the tarp (cool under blue, warm under white or yellow) with bright sky at the open edges; after dark, warm string lights and bare bulbs on a cable as bokeh dots, and a dark sky beyond.
  - *Palette:* the tarp colour over everything, white or bright tablecloths, terracotta of the cazuelas, the painted wall colour.
  - *Signature shapes (3–5):* the tarp ridge and its poles; the receding row of folding chairs; the line of round clay cazuelas; string-light dots; the iron gate.
  - *Density and wear:* busy and crowded at a party; ordinary, slightly worn concrete or tile underfoot.
  - *People:* one or two blurred guests seated at a far table or at the taquiza line, within the limit.
- **Shell:** an open concrete or tiled patio, the carport at the front of the house, or the street in front of the house closed off with the tarp; no ceiling except the tarp.
- **The table as set here:** a rented folding table with a **plastic tablecloth** (bright solid colours or a party print) or a hule; **disposable plates** (white foam or thick paper), plastic forks or none, paper napkins; salsas in plastic or clay bowls, a tortilla basket, limes. Chair edges: white plastic or folding metal chairs [MEDIUM — taquiza vendor menus list desechables; file CELEBRATIONS].
- **Subregional variants and the national default:** Centre is the default. *North (zone 1):* a carport or backyard with a **half-barrel or kettle charcoal grill** smoking at the edge, cebollitas on the grate (see Scenario: Meal outdoors at home). *Azotea (roof terrace), dense colonias:* the black or beige **tinaco** water tank and a gas cylinder as soft shapes, a horizon of flat roofs, a strip of washing line kept minimal. *Towns:* a dirt or concrete yard with fruit trees; the same tarp and rented tables [EDITORIAL; MEDIUM for the northern carne asada, per the file].
- **Hallucination traps:** a US backyard lawn with a picket fence; a Tex-Mex fiesta with sombreros, maracas and a cactus; mariachis in costume (only for an explicit fiesta brief, and never as the subject); a glamping or wedding-marquee look with fairy-light canopies and wooden crates; beer coolers.
- **Never stage:** beer, tequila, ponche jarros or agua fresca jugs; legible banners or birthday names; licensed cartoon characters; branded coolers or furniture (stage unbranded red or white plastic); identifiable children, children near the product; a full flag at Fiestas Patrias (tricolour streamers only).
- **Prompt-ready line:** "A Mexican family party under a stretched white tarp in a concrete patio: softly blurred rows of folding chairs, a line of clay cazuelas on a long table and warm string lights against a painted block wall with an iron gate; in focus, a folding table with a bright plastic cloth and disposable plates of tacos de guisado."
- **Confidence and sources:** MEDIUM overall. Rentals: [Renta de Carpas CDMX — toldos](https://rentadecarpascdmx.com/renta-de-toldos-para-fiestas); [Alquiler para Fiestas — sillas y mesas](https://alquiler-para-fiestas.com.mx/renta-de-sillas-y-mesas.html) (tier 3, vendors); the patio and azotea markers from the file; staging EDITORIAL. One search this pass.

### Venue: Fonda / comida corrida (fonda, fondita, cocina económica)
- **Use for:** restaurant, indoor; the weekday comida (~14:00–16:00), 1 person, 2 or a small group of co-workers; small, family-run, near offices and markets. The default casual sit-down restaurant [HIGH — comida-corrida sources in Scenario: Away from home; Grupo Animal].
- **Soft background (the core):**
  - *Back wall:* painted walls, often a warm colour or two-tone with a tiled lower band; a **blackboard or handwritten card with the day's menu** (an unreadable field of chalk or marker strokes); clay pots, jarritos and large wooden spoons hung as decor; an old calendar as a soft rectangle [MEDIUM — Grupo Animal: menu board, plastic tablecloths, a TV and a fast cook as the "classic" fonda; pilot (Algarabía, Chilango)].
  - *Middle distance:* the **cook at the back** working over big pots and cazuelas on a range, steam rising, sometimes behind a low counter or pass; other small tables with diners as blurred shapes.
  - *Light:* daylight flooding in from the **open street front** (a bright, overexposed rectangle at one side of the frame); inside, fluorescent tubes or bare bulbs (cool to neutral); the **television high in a corner**, a soft bluish glow with no picture detail.
  - *Palette:* the warm wall colour, the floral or checked plastic cloths repeating table after table, terracotta clay, the white steam.
  - *Signature shapes (3–5):* the blackboard rectangle; the TV box high in the corner; the row of pots and steam at the back; the repeating patterned tablecloths; the bright street opening with the rolled-up metal shutter.
  - *Density and wear:* compact, full and well-used; slightly worn but clean.
  - *People:* the cook or a server in an apron (mandil), blurred; one or two diners at other tables, backs or profiles.
- **Shell:** a narrow street-front room, often with a **roll-up metal shutter (cortina metálica)** open to the street; tiled floor or lower walls; a low ceiling with exposed fittings [MEDIUM — pilot].
- **The table as set here:** a small square table with four simple metal or wooden chairs (folding chairs in busy fondas); a **plastic or oilcloth tablecloth**, often floral or checked; a napkin dispenser; red and green salsa in small bowls or a molcajete; limes; a tortilla basket with a cloth; **melamine or peltre plates**, the sopa aguada in a deep bowl [HIGH for plastic cloths (Grupo Animal; pilot citing Chilango); HIGH for the course sequence, per Scenario: Away from home].
- **Subregional variants and the national default:** Mexico City is the default. *Market fondas (mercado comedor):* a counter with stools facing the cazuelas, a hanging lamp, produce stalls blurred behind (see the register table). *North:* bigger rooms, more flour tortillas. *Gulf, Yucatán:* ceiling fans and open sides in the heat [EDITORIAL; LOW — not verified for the zone details].
- **Hallucination traps:** sombreros, piñatas and papel picado as everyday decor (fiesta and tourist cues); a cantina with bottles; brightly painted "tourist Mexican" restaurant interiors; Talavera everywhere; a white-tablecloth restaurant; a hipster chalkboard café.
- **Never stage:** beer; agua fresca jugs in the hero zone (rule 4; the agua del día is real but kept out of frame); legible menu boards or prices; brand-name refrigerators or coolers; a legible TV picture.
- **Prompt-ready line:** "A small Mexico City fonda at lunchtime: soft background of a warm-painted wall with a blurred chalk menu board and clay pots, a cook working over steaming pots at the back and bright daylight from the open street front; in focus, a square table with a floral plastic tablecloth, a napkin dispenser, salsas in small bowls and melamine plates."
- **Confidence and sources:** MEDIUM-HIGH. Rewritten background-first from the 2026-10-01 pilot (one search there: Chilango, CDMX food guide, Algarabía); this pass added [Grupo Animal — ¿Qué es una fonda mexicana?](https://grupoanimal.mx/gastronomia/recetas/fonda-mexicana-historia-comida-corrida). One search this pass.

### Venue: Street taco stand (puesto de tacos)
- **Use for:** other / street; meal on the go for 1, a late-night taco stop for 2–3; midday and night. The default everyday street register and Mexico's strongest one (see Scenario: Meal on the go) [HIGH].
- **Soft background (the core):**
  - *Overhead and behind:* the stand's **tarp in pink, blue, orange or yellow** stretched over a metal frame, glowing with colour by day; the printed menu banner (lona) hung from it as an unreadable block of colour [MEDIUM — file street-food register; tarp and awning listed in stand-maker specs].
  - *Middle distance:* the **stainless steel cart or counter** catching light in long highlights; the **trompo** for al pastor, a cone of red-orange meat glowing in front of its vertical gas burner with a pineapple on top; or a round **choricera** griddle with a domed centre steaming with suadero and longaniza; the taquero's back or hands as a blur [MEDIUM — stand-maker listings (comal, plancha, pastor oven, awning); Wikipedia on al pastor via search; choricera LOW — not verified].
  - *Street beyond:* other stalls' tarps as colour blocks, a wall with hand-painted lettering (blurred, unreadable), parked cars, a corner shop's lit doorway, passers-by as soft shapes.
  - *Light:* day, the coloured tarp light with bright street behind; night (stands peak ~22:00–03:00), **bare bulbs or a fluorescent tube hung from the frame**, the warm glow of the trompo burner, white-LED or sodium streetlights and car lights as bokeh [MEDIUM for the night peak (mexicocity-trip guide); bulbs LOW-MEDIUM — not verified].
  - *Palette:* saturated tarp colour, steel, the red-orange of the trompo, green cilantro and lime.
  - *Signature shapes (3–5):* the glowing trompo cone; the tarp edge overhead; the long steel counter; the row of plastic salsa bowls; low plastic stools.
  - *Density and wear:* busy and lived-in; steel worn bright, stools stacked at one end.
  - *People:* the taquero and one or two customers standing at the counter, blurred, faces turned away.
- **Shell:** the sidewalk and a strip of street; no walls but the tarp and the city.
- **The table as set here:** the stainless counter or a folding table: **plastic plates wrapped in a plastic bag** (plato con bolsa), plastic bowls of chopped onion and cilantro, lime wedges, radish slices, two or three salsas in bowls with spoons or squeeze bottles, a stack of thin paper napkins. Chair edges: low plastic stools [HIGH for bag-wrapped plates; MEDIUM for the rest, per the street-food register].
- **Subregional variants and the national default:** Mexico City is the default (al pastor, suadero, tacos de canasta on a bicycle basket). *North:* flour tortillas and carne asada tacos on a mesquite or charcoal grill. *Zones 2 and 5:* seafood carts with tostadas and glass cocktail cups (see register). *Yucatán:* cochinita in the morning, outside scope [EDITORIAL].
- **Hallucination traps:** a US food truck; Tex-Mex hard shells and yellow cheese; a neon taquería sign; mariachis, sombreros or luchador masks; a clean minimalist "Tulum" stall; tortilla chips in baskets; everyone holding a taco (rule 5).
- **Never stage:** beer, any soft drink other than the hero, agua fresca jugs; legible menu banners, prices or painted wall text; branded coolers or the real branded red plastic furniture (stage unbranded red or white plastic); food in a hand.
- **Prompt-ready line:** "A Mexico City taco stand at night: softly blurred pink tarp overhead, a glowing al pastor spit and the long highlights of a stainless steel counter, bare bulbs and street lights as warm bokeh; in focus, a bag-wrapped plastic plate of tacos beside bowls of onion, cilantro, lime and salsa on the counter edge."
- **Confidence and sources:** MEDIUM-HIGH. [Mexico City Trip — guía de comida callejera](https://www.mexicocity-trip.com/es/guias/guia-comida-callejera-mexico/) (tier 4, night timing); [Dinnova Inox — carritos para tacos](https://www.dinnovainox.com.mx/tacos.html) (tier 3, stand fittings); the file's street-food register and Turismo CDMX guide. Two searches this pass.

### Venue: Hired party hall (salón de fiestas / salón de eventos)
- **Use for:** other; quinceañera and wedding banquets, children's birthdays in a salón infantil, larger baptism lunches; evening, sometimes afternoon; 1, 2 or a small group as a snapshot of 50–200 guests (see CELEBRATIONS) [MEDIUM — vendor and planning sources cited there].
- **Soft background (the core):**
  - *Back wall and ceiling:* a large rectangular hall; walls hidden behind **draped fabric** (white or the theme colour) or a backdrop curtain; a dropped ceiling with draped fabric swags, chandeliers or simple fittings [MEDIUM — rental package listings: manteles, cubremanteles, fundas, cortinas de fondo; draping LOW-MEDIUM — not verified].
  - *Middle distance:* **round tables for 8–10** with floor-length cloths and a coloured overlay (cubremantel), **chairs in covers with sashes** (moños) in the theme colour, tall centrepieces; a parquet or laminate **dance floor** at the far end; a balloon arch; the candy table (mesa de dulces) and the tall cake as soft shapes [MEDIUM — salaslounge.mx rental package; quinceañera entry].
  - *Light:* evening: dim, with **coloured LED washes** (purple, pink, blue) on the walls, moving dance-floor lights and a mirror ball scattering dots, and warmer light over the tables; candles in centrepieces. Afternoon salones infantiles are brightly lit [LOW-MEDIUM — not verified].
  - *Palette:* white cloth plus one theme colour repeated on every overlay and sash; coloured light washes behind.
  - *Signature shapes (3–5):* round tables receding in rows; the hourglass of covered chairs with bows; tall centrepieces; the glitter of dance-floor light dots; the balloon arch.
  - *Density and wear:* dense and decorated, new-looking textiles over a worn hall.
  - *People:* one or two blurred guests at a far table or a waiter in a black vest and white shirt, backs or profiles; the quinceañera herself never in the hero frame.
- **Shell:** a purpose-built hall on a main road or in a garden venue; few windows (or curtained ones); tile or laminate floor.
- **The table as set here:** a white floor-length cloth with a coloured overlay; a **charger plate** under a white china plate, folded cloth napkin, full cutlery; a tortilla or bread basket; plain glass tumblers (no wine glasses or flutes). Chair edge: a covered chair with a satin sash [MEDIUM — rental package; quinceañera entry].
- **Subregional variants and the national default:** the central salón is the default. *Towns:* the family yard or street under a tarp instead (see the patio profile). *Upscale or garden venues and haciendas:* wooden "crossback" or chiavari chairs, long imperial tables, a garden or stone arcade behind [LOW — not verified].
- **Hallucination traps:** a US hotel ballroom with carpet and a buffet station; a rustic barn wedding; open-bar bottles on every table (a real norm at many parties, exclude explicitly); champagne towers and toasts; banda or mariachi on stage as the subject; Catholic imagery from the Mass.
- **Never stage:** bottles, wine glasses, flutes; the toast; legible names or initials on backdrops; the quinceañera, bride or children identifiable; DJ screens with text.
- **Prompt-ready line:** "A Mexican salón de eventos at night: softly blurred round tables in white cloths with lilac overlays, chairs in covers with satin bows, tall centrepieces and dance-floor lights scattering coloured dots against draped walls; in focus, a plated serving of mole with rice on a charger plate and a folded cloth napkin."
- **Confidence and sources:** MEDIUM for the furniture package ([Salas Lounge — renta de mesas redondas, mantel, cubremantel, fundas y moños](https://www.salaslounge.mx/producto/renta-de-mesas-redondas-de-banquete-juego-para-10-personas-mantel-cubre-mantel-fundas-y-monos/), tier 3); the rest LOW-MEDIUM and EDITORIAL. One search this pass.

---

## TRUSTED CONTENT

### HERO PRODUCT SLOT

Every scene carries one TCCC hero product, chosen by the brief. This file
uses `south-africa.md`'s generalised slot; since 2026-09-27 that is the
project-wide rule for every country file (the brief dictates the SKU,
never the region — see `DECISIONS.md`).

**Template:**
> [HERO PRODUCT]: {brand and variant exactly as named on pack}, in
> {format and size}, {dominant pack colour and material cue},
> {negated lookalikes}. {Position: standing upright on the surface,
> label facing camera or turned slightly}. Pack text will be composited
> in post.

**Rules:**
- **Name the variant; negate the closest lookalike** (Original vs. Sin
  Azúcar vs. Light; Fanta flavours; Sidral Mundet vs. a generic apple
  soda). An unspecified "Coca-Cola can" rendered as the wrong variant in
  2 of 3 generations [HIGH — first-party test, `coca-cola-guidelines.md` §1].
- **Mexico is a 355 mL-can market, not a 330 mL one.** Mexican retail
  listings sell Coca-Cola in 355 mL cans (standard and slim) and 235 mL
  cans. The `coca-cola-guidelines.md` §4.3 rule "default to 330 mL for any
  non-US market" does **not** apply here: use the North American 355 mL
  can dimensions (123 mm tall, 66 mm diameter) for a standard Mexican can.
  [CONFIDENCE: MEDIUM-HIGH for 355 mL being the Mexican standard can size —
  multiple Mexican retailer listings (Mercado Libre, Smart & Final México)
  and a Mexican format round-up agree; exact Mexican-bottler can height
  not independently confirmed, so the US figure is a close stand-in]
- **The brief always names the SKU — never the region or this file**
  (standing rule, 2026-09-27; see `DECISIONS.md`). If a brief names no
  product, ask for one rather than inferring it. The register list below
  is reference for whoever writes the brief, not a default:
  - street taco stand, fonda, market, taquería: a **355 mL returnable
    glass bottle** ("Coca de vidrio") or a **600 mL PET** bottle — the two
    most characteristic single-serve formats in everyday Mexican food
    settings [MEDIUM — both formats confirmed as current; "most
    characteristic" is an editorial synthesis, not a measured share]
  - on the go, convenience store, office desk: a 600 mL PET or a 355 mL can
  - Sunday family comida, pozole night, carne asada with guests: a
    **2.5 L returnable** or 3 L PET in the midground, one filled glass per
    place setting (`coca-cola-guidelines.md` §4.4)
  - restaurant: a glass bottle or can, optionally poured over ice into
    plain unbranded glassware
- **Use the chosen format's real dimensions as the scale anchor** (see
  SCALE REFERENCE).
- **One hero product per scene** unless the brief asks for several.
- **Don't write sweetener claims into a prompt.** Mexican Coca-Cola in
  returnable glass is widely reported to use cane sugar, with some other
  formats reported to use high-fructose syrup or blends — it is a real,
  recurring consumer topic but invisible on camera and not a staging fact.
  [CONFIDENCE: MEDIUM — Mexican business press (Merca 2.0, Vanguardia)
  agree on cane sugar for glass; the blend claim for PET/cans is reported,
  not officially confirmed here]

**Slot sketches (verify local pack details before a production run):**

| Brief calls for | Slot wording |
|---|---|
| Coca-Cola Original, returnable glass | "a Coca-Cola Original 355 ml returnable glass bottle, clear contoured glass showing the dark cola, cap on, not a plastic bottle and not Coca-Cola Sin Azúcar" |
| Coca-Cola Original, 600 mL PET | "a Coca-Cola Original 600 ml plastic bottle, red label, not the black-labelled Sin Azúcar" |
| Coca-Cola Original, can | "a Coca-Cola Original 355 ml can, red aluminium, not Sin Azúcar or Light" |
| Coca-Cola Sin Azúcar | "a Coca-Cola Sin Azúcar (zero sugar) {format}, black label, not the red Original" |
| Family multi-serve | "a 2.5-litre Coca-Cola Original returnable plastic bottle in the midground, one filled plain glass per place setting" |
| Sidral Mundet | "a Sidral Mundet apple soda {format}, pale golden soda, not a beer and not apple juice" — Sidral Mundet is a confirmed current TCCC Mexico brand [HIGH — Expansión and Coca-Cola México's own portfolio statement]; pack colours not confirmed [LOW] |
| Fanta / Fresca / Sprite | name the flavour and pack colour; negate the nearest lookalike |
| Topo Chico / Ciel water | "a Topo Chico mineral water glass bottle, clear glass" / "a Ciel water bottle" — only as a hero if the brief asks for water; never the Topo Chico alcoholic ready-to-drink line (see ICONIC BEVERAGES) |

### ICONIC BEVERAGES (documented context — staging rules follow)

This section documents the real Mexican drinks landscape, including
alcohol, and restricts only what is staged, never what is recorded — the
same design `south-africa.md` uses.

**TCCC Mexico portfolio — partly verified this pass.** Coca-Cola México
states a portfolio of 80+ brands, with locally developed brands including
**Ciel** (water), **Fresca**, **Sidral Mundet** (apple soda), and **Santa
Clara** (dairy); **Topo Chico** (mineral water), **Del Valle** (juices and
nectars) and **Joya** are also TCCC brands in Mexico. [HIGH for the named
brands being TCCC-owned in Mexico — Expansión (Nov 2025) and Coca-Cola
México's own statements corroborate] Coca-Cola (Original, Sin Azúcar,
Light), Sprite and Fanta are sold nationally [MEDIUM — not individually
re-checked this pass, uncontested].

- **Topo Chico alcoholic line**: Coca-Cola México has announced "Topo Chico
  Drinks Mexicanos", a line of ready-to-drink cocktails under the Topo
  Chico name. [MEDIUM — one first-party press page found; exact product
  details not read] **Never stage it**, and don't let a plain "Topo Chico"
  hero drift toward it — specify the mineral water.

**Non-alcoholic context (not staged unless the brief allows a named
companion):**
- **Aguas frescas** — jamaica (deep ruby hibiscus), horchata (milky white
  rice drink with cinnamon), tamarindo (cloudy brown), and seasonal fruit
  waters, served from large glass barrel jars (vitroleros) at stalls and
  from a pitcher at home and in fondas. The fonda comida corrida commonly
  includes an agua del día. [HIGH for the comida-corrida pairing — Larousse
  Cocina and Recetas Nestlé; MEDIUM for the vitrolero, not re-checked]
- **Café de olla** (clay-pot coffee with piloncillo and cinnamon), **atole**
  and **champurrado** (hot masa drinks, especially with tamales),
  **tejuino** (fermented masa, Jalisco) and **tepache** (fermented
  pineapple). [MEDIUM — not independently re-checked this pass]

**Alcohol context (never staged):**
- Beer, tequila, mezcal, pulque, micheladas.
- **Tequila with Coca-Cola is a named Mexican cocktail family**: the
  **charro negro** (tequila and cola, Mexico's counterpart to the Cuba
  Libre) and the **batanga** (tequila, lime and Coca-Cola, salted rim,
  stirred with the knife used to cut the limes), created in the 1950s by
  Don Javier Delgado Corona at La Capilla cantina in the town of Tequila,
  Jalisco. [HIGH — Punch, Tequila-town and Mexican cocktail sources
  corroborate] **Never stage a TCCC product in a cocktail glass, beside a
  spirits bottle, with a salted rim, or with a lime squeezed into it in a
  bar setting** — the batanga is the likeliest thing an image model will
  drift toward in a Jalisco cantina scene.
- **Ritual Coca-Cola use in San Juan Chamula, Chiapas.** In the Tsotsil
  Maya community of San Juan Chamula, Coca-Cola is used in ritual healing
  inside the church of San Juan Bautista, alongside candles and pox
  (a local cane spirit); reports date its adoption to the 1960s. [HIGH that
  the practice exists and is widely reported — La Jornada Maya, Atlas
  Obscura, Xataka México] **Never stage it, reference it, or use the church
  or its rituals as a setting.** It is a living religious practice, and
  photography inside the church is itself restricted by the community
  [MEDIUM — travel sources consistently report the restriction]. Also
  avoid framing it as a brand-marketing anecdote [EDITORIAL].

### GENERAL NORMS

**Meal clock and light** — the most load-bearing timing facts in this file.

| Occasion | Typical time | Confidence |
|---|---|---|
| Desayuno (out of scope) | ~07:00–10:00 | MEDIUM |
| Almuerzo (mid-morning, out of scope) | ~10:00–12:00 | LOW-MEDIUM |
| **Comida** (main meal) | ~14:00–16:00 in cities; range 13:00–17:00 | HIGH |
| Merienda (light afternoon/evening snack) | ~18:00–19:00 | LOW-MEDIUM |
| **Cena** (light) | ~20:00–22:00 | MEDIUM |

Comida at 14:00–16:00 is corroborated directly, with a wider national
13:00–17:00 range, and dinner described as light and running 20:00–23:00.
[CONFIDENCE: HIGH for comida; MEDIUM for cena — Remitly's Mexico meal-time
guide, Grupo Animal and La Verdad Noticias agree] [SOURCE:
[Remitly — Horarios de comida en México](https://www.remitly.com/blog/es/cultura-y-estilo-de-vida/horarios-de-comida-en-mexico/);
[Grupo Animal — Horarios de comida en México](https://grupoanimal.mx/gastronomia/recetas/horarios-de-comida-en-mexico)]

**§5.2 cross-country contrasts:**
- **Comida lands in almost exactly Spain's window (14:00–16:00)** and is
  similarly the day's biggest meal — but **cena is lighter and more
  snack-like than Spain's**: tacos, quesadillas, a tamal, or pan dulce
  with coffee or atole, rather than a second sit-down meal. [MEDIUM]
- **Evening light differs from Spain**: most of Mexico sits far further
  south (Mexico City ~19°N vs. Madrid ~40°N), so summer sunsets come
  earlier (roughly 19:30–20:15) and seasonal day length varies much less.
  A cena scene is usually after dark, under interior light. [MEDIUM — the
  latitude figures are uncontested; the sunset range is model knowledge,
  not independently re-checked this pass]

**Table norms:**
- **Tortillas at almost every comida**, kept warm in a cloth-lined basket,
  a tortillero (a lidded cloth, plastic, or palm container), or wrapped in
  a cloth napkin. In the North, flour tortillas appear beside or instead of
  corn. [HIGH for corn tortillas as the everyday staple and flour in the
  North — see the tortilla-size sources below and Recetas Mexas' northern
  cuisine guide]
- **Salsa is the table condiment**, not a garnish: a red and/or green
  salsa in a molcajete or small bowl, often both; lime wedges; a small dish
  of salt. At street stands, chopped onion and cilantro are self-served
  from bowls. [MEDIUM-HIGH — consistent across every taco and fonda source
  consulted; salsa roja and verde named in the comida-corrida sources]
- **Bottled hot sauce** is common on street and snack tables; never name
  or show a brand label (rule 1). [MEDIUM]
- **The tortilla is a utensil.** Tacos, tortas, tlayudas and many antojitos
  are eaten by hand; guisados are often scooped with torn tortilla. Forks
  appear for rice, beans and plated dishes; knives are uncommon outside
  steak and restaurant plating. [MEDIUM — not independently re-checked this
  pass] Staging rule 5 still applies: food rests on a surface.
- **Cutlery layout**: in restaurants and formal settings, the
  Continental/North American layout (fork left, knife and spoon right) —
  no Mexico-specific convention found or searched. [LOW-MEDIUM — not
  independently re-checked]
- **Sobremesa** (lingering at the table after comida) is a real Mexican
  custom as in Spain. [MEDIUM — not independently re-checked this pass]

### SCALE REFERENCE — MEXICO

**Product anchors.**

| Format | Size | Confidence |
|---|---|---|
| 355 mL can (standard; also a slim can) | ~123 mm tall, ~66 mm diameter (North American 12 oz can figures; see HERO PRODUCT SLOT) | MEDIUM-HIGH for the format, MEDIUM for applying the US dimensions |
| 235 mL can | Current format; dimensions not confirmed | MEDIUM (format), dimensions unconfirmed |
| **355 mL returnable glass bottle ("Coca de vidrio")** | **~20 cm (7.87 in) tall**; heavy, thick glass, classic contour silhouette | LOW-MEDIUM for the height — one tier-4 dimension guide (GetAcademy); the 355 mL returnable format itself is HIGH (Walmart México, Rappi, Coca-Cola en tu hogar listings) |
| 500 mL glass bottle | Current format; dimensions not confirmed | MEDIUM (format) |
| 600 mL PET | Current, widely sold personal format; dimensions not confirmed | MEDIUM-HIGH (format) |
| 2.5 L returnable PET, 1 L, 1.25 L, 2 L, 3 L PET | Current formats; dimensions not confirmed | MEDIUM (formats, from a Mexican format round-up and retail listings) |

Sources: [Walmart México — Coca-Cola de vidrio 500 ml](https://www.walmart.com.mx/ip/refresco-coca-cola-de-vidrio-500-ml/00750105530208);
[Coca-Cola en tu hogar — 355 ml retornable](https://www.coca-colaentuhogar.com/refresco-coca-cola-355-ml-retornable);
[Mercado Libre — lata 355 ml](https://www.mercadolibre.com.mx/refresco-coca-cola-original-lata-355ml/p/MLM19097614);
[Tekoha — presentaciones de Coca-Cola en México](https://tekoha.com.ar/que-presentaciones-y-tamanos-de-coca-cola-estan-disponibles-en-mexico/) (tier 4);
[GetAcademy — Coca-Cola bottle measurements](https://getacademy.blog/coca-cola-bottle-measurements) (tier 4).

**Tortillas — the most useful food scale anchor in the country.**

| Tortilla | Diameter | Use | Confidence |
|---|---|---|---|
| Taquera No. 10 | ~10 cm (about 1.5× the can's diameter) | Street tacos: al pastor, suadero, cabeza | HIGH |
| Taquera No. 11–12 | ~11–12 cm | Tacos de canasta | HIGH |
| Taquera No. 14 | ~14 cm | Tacos de guisado | MEDIUM-HIGH |
| **Tortilla de mesa** | **~15–16 cm** | The everyday table tortilla, in the basket | HIGH |
| Flour tortilla (everyday, North) | ~20–30 cm | Carne asada, burritos, with guisados | LOW-MEDIUM (not independently re-checked) |
| **Sobaquera (Sonora)** | **~30–60 cm, paper-thin, translucent** | Burritos, with carne asada and cocido | HIGH |
| **Tlayuda (Oaxaca)** | **≥30 cm**, semi-crisp, brittle | Its own dish (see catalog) | HIGH |

Sources: [Cocina Delirante — tamaños de tortillas](https://www.cocinadelirante.com/curiosidades/que-tamanos-de-tortillas-hay-en-mexico-conoce-sus-numeros-y-como-se-miden);
[TIA — medidas estándar de tortillas](https://www.tiasaalimentos.com.mx/medidas-de-tortillas/);
[UDG TV — tortillas sobaqueras](https://udgtv.com/noticias/las-tortillas-sobaqueras-toda-una-tradicion-de-sonora-/251958);
[Recetas Mexas — tlayuda](https://recetasmexas.com/guia/tlayuda).

**Relative sizes, stated plainly for prompt-writers:** a
10 cm taquera tortilla is about **1.5× the 355 mL can's diameter (6.6 cm)
and a little shorter than the can is tall (12.3 cm)**. A tortilla de mesa
(15–16 cm) is **about 1.3× the can's height**. These relative comparisons
are the ones to write into a prompt (`country-file-schema.md` §7.5).

**Vessels.**

| Vessel | Typical size | Visual notes | Confidence |
|---|---|---|---|
| **Molcajete** | **~18–20 cm across the bowl, ~13–14 cm tall**, on three short legs | Grey-black porous volcanic stone (basalt); a tejolote (pestle) of the same stone; salsa or guacamole served in it, or aguachile/molcajete mixto in larger ones | MEDIUM-HIGH — multiple Mexican molcajete makers list 18–20 cm as standard |
| **Comal** | **Clay: ~30–60 cm; household ~30–32 cm**; thin (1–2 cm), slightly concave, unglazed cooking face | Pale terracotta, blackened in patches from the fire; a round steel comal is the common modern home and stall version | MEDIUM-HIGH for clay sizes — several artisan sellers and Recetas Mexas agree |
| **Peltre (enamelled steel) plates and cups** | Plates ~22–26 cm [LOW-MEDIUM — size not sourced] | Glossy vitrified enamel, classically speckled blue (azul punteado), also green, yellow or cream, with a darker rim; small chips at the rim showing black steel | HIGH for peltre as a fonda and market-stall staple and for the colour range — Noroeste, Gastrolab |
| Plastic plate in a plastic bag | ~20–23 cm plastic plate slipped inside a clear, thin plastic bag, knotted or tucked underneath | Street stands only; the bag is changed per customer so plates need no washing | HIGH for the practice — multiple sources incl. a Change.org petition against it and HiNative/press explanations; plate size LOW |
| Tortillero / tortilla basket | ~18–22 cm | Palm or plastic basket with an embroidered cloth (servilleta) folded over the tortillas | LOW-MEDIUM (not independently re-checked) |
| Cazuela de barro | Individual ~15–20 cm; family pots 30–60 cm+ | Glazed brown-green or brick-orange inside, matte red-brown outside; the giant ones hold guisados on a market or fonda stove | LOW-MEDIUM |
| Jarrito de barro | ~8–10 cm tall | Small glazed clay mug; café de olla (never the hero) | LOW-MEDIUM |
| Talavera plate/bowl | ~20–28 cm | Tin-glazed white with cobalt blue (and yellow/green) hand painting; Puebla and Tlaxcala | MEDIUM — the ware is uncontested; sizes not searched |
| Cóctel glass (seafood) | Tall glass cup ~15–18 cm, sometimes a footed sundae glass | Zone 2/5 marisquerías | LOW-MEDIUM |
| Foam/cardboard takeaway container | Clamshell ~20 × 15 cm | Street and market takeaway | LOW-MEDIUM |

Sources: [El Rey del Molcajete — molcajete 20 cm](https://elreydelmolcajete.com/tienda/molcajete-tradicional/molcajete-tradicional-no-820-cm-poro-cerrado-piedra-volcanica/);
[Recetas Mexas — comal de barro](https://recetasmexas.com/guia/comal-de-barro);
[Noroeste — vajillas de peltre](https://www.noroeste.com.mx/amp/buen-vivir/tu-vida-disfruta-el-sabor-de-la-nostalgia-con-vajillas-de-peltre-PYNO1025956);
[Gastrolab — pueblos del peltre](https://www.gastrolabweb.com/tips/2026/9/2/ollas-y-pocillos-de-peltre-5-pueblitos-cerca-de-cdmx-para-comprar-utensilios-de-cocina-de-este-mater-68844.html);
[HiNative — bolsas en los platos](https://es.hinative.com/questions/13801800);
[Change.org — eliminar las bolsas de los platos](https://www.change.org/p/miguel-%C3%A1ngel-mancera-eliminar-las-bolsas-de-pl%C3%A1stico-de-los-platos-de-comida-callejera).

**Breads.**

| Bread | Size | Look | Confidence |
|---|---|---|---|
| **Bolillo** | ~13–16 cm long | Torpedo-shaped white roll, one lengthwise slash, crisp golden crust, soft white crumb | MEDIUM (size not sourced; form HIGH) |
| **Telera** | ~12–15 cm across | **Flatter, softer and rounder than the bolillo, with two parallel grooves across the top dividing it into three sections**; the classic Mexico City torta roll | HIGH for the bolillo/telera distinction — El Financiero, Gourmet de México; size LOW-MEDIUM |
| **Birote salado** | ~15–20 cm | Guadalajara's sourdough roll, very hard, crackly, dark-golden crust and dense crumb — made to survive being drowned in salsa | HIGH (form) — multiple torta-ahogada sources; size LOW |
| Cemita (Puebla) | ~15–20 cm round | Domed, glossy egg-washed top scattered with sesame seeds | MEDIUM — not independently re-checked |
| Pan dulce (concha) | ~9–11 cm across | Soft sweet bun with a crackled, shell-patterned sugar-paste crust (white, pink or chocolate) | MEDIUM — not independently re-checked |

### TEXTURE LEXICON (use in prompts)

| Surface | Use | Avoid |
|---|---|---|
| Corn tortilla (fresh) | "soft, matte, pale-yellow or off-white corn tortilla with faint toasted brown freckles from the comal, slightly uneven edge" | "flour wrap," "shiny," "perfect circle," "hard shell" |
| Doubled street tortillas | "two small soft corn tortillas stacked, slightly glossy from the grill fat" | "one large tortilla folded like a burrito" |
| Flour tortilla (North) | "thin, pliable, pale wheat tortilla with scattered brown blisters, translucent in places" | "thick pita," "naan" |
| Fried tortilla (tostada, dorado) | "flat, rigid, deep-golden, blistered, visibly crisp" | "U-shaped hard taco shell" |
| Salsa roja / verde | "loose, slightly chunky salsa with visible seeds and flecks of charred skin" | "smooth ketchup-like sauce," "pico de gallo" (unless specified) |
| Mole | "thick, glossy, near-black (or brick-red) sauce with an oily sheen, a scattering of toasted sesame seeds" | "brown gravy," "chocolate sauce" |
| Stewed meat (guisado) | "tender pieces in a loose, oily red or green sauce with a slick of chile-stained fat" | "thick gravy," "creamy" |
| Carnitas | "tender pork with crisp, bronzed edges and glossy rendered fat, some pieces shredding" | "pulled pork in barbecue sauce" |
| Al pastor | "thin shaved pork, brick-red from adobo, with charred crisp edges and small pineapple pieces" | "grilled chicken," "gyro meat" |
| Crema / cheese | "a thin drizzle of pourable white crema; crumbled dry white queso fresco or cotija" | "thick sour-cream dollop," "shredded yellow cheddar" |
| Grilled (asada) | "irregular char and blackened edges from charcoal, juicy, sliced or chopped" | "neat crosshatch grill marks" |

The two most common image-model failures for Mexican food are both
Tex-Mex conflations — **shredded yellow cheese** and **a U-shaped hard
taco shell** — and both should be negated explicitly in any taco prompt.
[EDITORIAL — consistent with this project's `us-texas.md` Tex-Mex
treatment, which documents those as US forms]

### VISUAL & PLATING NORMS

- **Palette**: the matte cream-yellow of corn tortillas; salsa verde's
  tomatillo green and salsa roja's brick-to-scarlet; the deep-black and
  brick-red of moles; achiote orange-red (zone 7); lime green wedges;
  white onion and bright cilantro confetti; the black of refried or whole
  frijoles; avocado green. [EDITORIAL synthesis of the dish entries]
- **Plating is generous and informal.** Home and fonda plates are heaped
  rather than composed: a guisado with arroz rojo and frijoles in adjacent
  mounds on one plate, tortillas on the side. Street tacos come two to
  five to a plate, open-faced, toppings scattered on. Micro-herbs,
  sauce swooshes and tweezered garnishes read as fine dining, not
  everyday Mexico. [MEDIUM — consistent with the comida-corrida and
  taco sources below; not independently re-sourced beyond that]
- **Garnish logic**: raw white onion and cilantro, lime wedges, sliced
  radish, shredded lettuce or cabbage, crumbled queso fresco and a thin
  crema drizzle — which ones depends on the dish (see each entry).
  Never add all of them to everything (`country-file-schema.md` §7.5).
- **Steam and freshness**: tortillas hot enough to steam when stacked;
  consomé and pozole steaming in the bowl. [EDITORIAL]
- **Colour grading — avoid the "Mexico yellow filter."** Hollywood's
  practice of tinting Mexico-set scenes yellow or sepia is well documented
  and widely criticised as a stereotype (popularised around *Traffic*,
  2000). Grade Mexican scenes neutrally, with the real light of the zone —
  clear highland light, humid coastal haze, hard northern sun — never a
  blanket warm/sepia cast. [HIGH for the filter being a documented,
  criticised convention — Spanish-language Wikipedia (via search), Diario
  Uno, Malcriadas] [SOURCE: [Diario Uno — Por qué México se ve amarillo en las películas](https://www.diariouno.com.ar/series-y-peliculas/por-que-mexico-siempre-se-ve-las-peliculas-un-filtro-color-amarillo-n1493711)]

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **"At home" means a house, not a flat — by a wide margin.** INEGI's 2020
  Census (extended questionnaire) counts 34,987,915 inhabited private
  dwellings: **73.2% a single house on its own lot, 18.1% a house sharing a
  lot with other dwellings, 5.6% an apartment in a building, 1.5% a duplex,
  1.1% a vecindad or rooftop room.** [CONFIDENCE: HIGH — INEGI figures, as
  reported by INEGI's own 2023 housing press release and El Horizonte]
  [SOURCE: [INEGI — Estadísticas a propósito del Día Nacional de la Vivienda (2023)](https://www.inegi.org.mx/contenidos/saladeprensa/aproposito/2023/EAP_Vivienda.pdf);
  [El Horizonte](https://www.elhorizonte.mx/finanzas/estadisticas-a-proposito-del-dia-nacional-de-la-vivienda/vl1460212)]
  **§5.2 contrast**: this is close to the exact opposite of Spain, where
  65.3% of people live in flats (`spain.md`). A Mexican home scene should
  default to a house — often a narrow, multi-storey concrete-block house
  in a dense colonia, sometimes with relatives on another floor or
  another house on the same lot (the 18.1% "shared lot" figure) — not an
  apartment block. Apartments are a real, co-equal register mainly in
  Mexico City and large-metro towers. [EDITORIAL on the staging default;
  the statistic is HIGH]
- **Interior markers (pick one or two per scene)**: tiled or polished
  cement floors; painted plaster walls in warm or saturated colours; a
  compact kitchen with a gas stove and a steel comal on a burner; a
  dining table with a patterned plastic oilcloth (hule) or an embroidered
  cloth; a glass or plastic tortillero; a blender on the counter (salsas);
  a garrafón (20 L water jug) on a stand; potted plants; a religious image
  or calendar on the wall (keep unreadable). [MEDIUM — uncontested general
  knowledge, not individually re-checked this pass; the garrafón is
  well-known and consistent with Mexico's reliance on purified water]
- **Exterior markers**: flat concrete roofs (azoteas) with a black or
  beige plastic water tank (tinaco) and a gas cylinder; painted façades
  in bright or pastel colours; wrought-iron window grilles and gates;
  exposed rebar on some roofs for a future storey. [MEDIUM — not
  individually re-checked] **Use exposed rebar and unfinished upper
  storeys sparingly** — they are real and common, but over-used they turn
  a scene into a poverty cliché [EDITORIAL].
- **Gen Z lens (§5.3)**: young adults commonly live with parents in the
  family house; shared rentals and small studios are real in Mexico City,
  Guadalajara, Monterrey and university cities. [LOW-MEDIUM — direction
  consistent with the housing statistics above; no Mexico-specific
  leaving-home age was found or searched this pass, flagged in the Gap
  Log] Stage a young adult at the family table, or in a small rented
  room/shared kitchen with a laptop, string lights and plants — neither a
  chaotic dorm nor a sterile showroom.
- **Caricature avoidance [EDITORIAL]**:
  - **Tourist-costume Mexico**: sombreros, sarapes, ponchos, piñatas,
    mariachis, luchador masks, maracas, a cactus in every frame, papel
    picado on every ceiling. Papel picado and mariachis are authentic only
    for an explicit fiesta brief (see FESTIVALS).
  - **Tex-Mex conflation**: hard U-shaped taco shells, shredded yellow
    cheese, big sour-cream dollops, nachos under cheese sauce, fajita
    skillets, chili con carne, chimichangas, burritos as the default
    everywhere (burritos are real, but a northern flour-tortilla format —
    see zone 1). These are documented as US forms in `us-texas.md`.
  - **The yellow filter** (see VISUAL & PLATING NORMS).
  - **Poverty or danger framing**: dusty streets, crumbling walls, stray
    dogs as the default "authentic" look.
  - **Día de Muertos as costume**: sugar-skull face paint and Catrina
    dress outside an explicit Día de Muertos brief.
  - The ordinary baseline is a tidy, lived-in, colourful family house or a
    busy, clean neighbourhood taquería or fonda.

#### Scenario: Casual lunch at home — 1 person

A kitchen or dining table in a colonia house, ~14:30–15:30, daylight from
a window with an iron grille; hule on the table. Plate: a guisado (e.g.
chicken in salsa verde, picadillo, chicharrón en salsa) with arroz rojo
and frijoles in adjacent mounds on a plain ceramic or peltre plate; a
small stack of tortillas de mesa wrapped in a cloth; a salsa in a small
bowl. Hero (from the brief; formats that fit): a 600 mL PET or a 355 mL glass bottle beside the plate.
Gen Z: the same table in the family house, or a shared-kitchen counter
with leftover tacos reheated on a steel comal. [EDITORIAL synthesis;
dish list MEDIUM]

#### Scenario: Casual lunch at home — 2 people

A couple or two friends at a small dining table; shared bowls of frijoles
and arroz, a shared salsa in a molcajete, one tortilla basket, each with
their own plate of guisado. Or a "taquiza for two": a platter of tacos
brought from the corner taquería, still in paper, transferred to plates.
Hero (from the brief; formats that fit): two cans or two glass bottles, or one 1.25–2 L bottle with two
glasses. [EDITORIAL]

#### Scenario: Casual lunch at home — 3 people

The family comida: a parent and two teenagers or three adults; a shared
pot or platter in the centre (enchiladas in a baking dish, a cazuela of
guisado, or tinga for tostadas), a tortilla basket, salsas, a plate of
lime wedges; individual plates. Hero (from the brief; formats that fit): a 2.5 L returnable or 2–3 L PET in
the midground, a filled glass at each place. Leave room on the table —
Mexican family tables get crowded but not cluttered with props.
[EDITORIAL]

#### Scenario: Dinner at home, indoors

Cena is **light and late** (~20:00–22:00, after dark): a few tacos from a
street stand, quesadillas made on the comal, a tamal, or pan dulce.
Warm interior light; the table half-set, casual. A heavy multi-course
plated dinner reads as a special occasion, not an ordinary Mexican cena.
[MEDIUM for the light-cena norm — see GENERAL NORMS sources]

#### Scenario: Meal outdoors at home

- **Zone 1 (North): the carne asada.** A backyard, patio or carport; a
  charcoal grill (a half-barrel or kettle); a folding table with a plastic
  cloth; arrachera or thin-cut beef, grilled cebollitas (spring onions)
  and chiles toreados, flour and corn tortillas, guacamole, frijoles
  charros in a pot, salsa in a molcajete. Weekend afternoon. [HIGH for
  carne asada as a northern social institution — Recetas Mexas northern
  cuisine guide, Superprof; composition MEDIUM]
- **Elsewhere**: a patio or azotea (roof terrace) with plants, a plastic
  table and chairs, the comida carried out; or a garden with fruit trees
  in a larger house. [EDITORIAL]
- Hero (from the brief; formats that fit): a multi-serve bottle on the table with glasses, or cans in a
  cooler (keep cooler branding blurred).

#### Scenario: Meal on the go — 1 person

The street-food register, and Mexico's strongest one. A single person at
a taco stand's counter or a stool, a plastic plate in a bag with two to
four tacos, a lime wedge and salsa; or a torta in its paper wrapper on a
ledge; or a tamal and a guajolota from a morning/evening tamal cart;
or tacos de canasta from a bicycle basket. Hero (from the brief; formats that fit): a 355 mL glass bottle
with a straw sometimes, a 600 mL PET or a can, resting on the counter.
**§5.2 contrast**: unlike Uruguay's "grab-and-go barely exists", Mexico's
street-food density is among the highest in the KB; a stand on every
corner is normal, not a tourist flourish. [HIGH for street food as a
mass everyday institution — Mexico City's own tourism-ministry street-food
guide and multiple press sources on stall density] [SOURCE:
[Turismo CDMX — Guía de comida callejera](https://www.turismo.cdmx.gob.mx/storage/app/media/inf_2024/GUIA%20COMIDA%20CALLEJERA.pdf)]

#### Scenario: Away from home — 1 person at a restaurant/café

A fonda at 14:00 for the comida corrida: a small table with an oilcloth,
the set sequence of **sopa aguada** (a broth soup), **sopa seca** (usually
arroz rojo or pasta), a **guisado** plated with frijoles, tortillas, red
and green salsa, and a small dessert. [HIGH for the comida-corrida
structure — Larousse Cocina, Recetas Nestlé, Grupo Animal, México Travel
Channel] Or a taquería counter. Hero (from the brief; formats that fit): a glass bottle or can.
[SOURCE: [Larousse Cocina — comida corrida](https://laroussecocina.mx/palabra/comida-corrida/);
[México Travel Channel — qué significa comida corrida](https://mexicotravelchannel.com.mx/que-significa-comida-corrida/)]

#### Scenario: Away from home — 2–3 people

A taquería table late at night after an outing, with a shared order of
tacos al pastor and gringas; a marisquería under a palapa (zones 2 and 5)
with a shared aguachile, tostadas and cocteles; a mercado comedor
counter; or a family restaurant for Sunday barbacoa (zone 4). Plain
plastic tables and chairs are authentic — the real red branded ones exist
widely (Arca Continental installed a designed branded red furniture line
in 670+ establishments) but carry legible logos, so **stage unbranded red
or white plastic furniture** [HIGH for the branded furniture being real and
widespread — La Tempestad, ROC21; staging instruction EDITORIAL].
[SOURCE: [La Tempestad — Mobiliario para Coca-Cola](https://www.latempestad.mx/mobiliario-coca-cola/)]

---

## CROSS-CUTTING REGISTER: STREET FOOD & MARKETS

- **The stand**: a steel cart or folding table under a tarp in pink, blue,
  orange or yellow; a comal or plancha heated by gas; a trompo (vertical
  spit) for al pastor; plastic bowls of onion, cilantro, lime, radish and
  salsas; plastic-bag-wrapped plates; a roll of paper napkins or a stack
  of thin napkins; plastic stools. [HIGH for plastic-bag plates; MEDIUM for
  the rest — uncontested, not individually re-checked]
- **Tacos de canasta**: a bicycle carrying a wicker basket lined with blue
  plastic and cloth, the steamed tacos packed inside, sauce containers on
  the side. [HIGH — Wikipedia (via search) on tacos de canasta]
- **Tamal carts**: a large steel steamer pot (tamalera) on a cart or
  tricycle, with atole in a second pot; morning and evening. [MEDIUM]
- **Mercado municipal**: a covered hall, fonda counters with stools,
  giant cazuelas of guisados behind the counter, produce stacked in
  pyramids, piñatas and plastic buckets hanging (blurred). [MEDIUM]
- **Marisquería carts and stands** (zones 2, 5): tostadas stacked, big
  glass cocktail cups, shucked shells, a molcajete of aguachile. [MEDIUM]
- **Staging**: food on the counter or a stool, never in hand; the hero
  product on the counter beside the plate. Backgrounds busy but soft.

## CROSS-CUTTING REGISTER: TCCC BEVERAGE MOMENTS — WITH OR WITHOUT A BITE

- **The "Coca y taco" pairing is a genuinely strong, everyday Mexican
  association** — a glass bottle or 600 mL PET beside tacos at a stand or
  taquería is an ordinary scene, not a staged one. [MEDIUM — consistent
  with Mexico's very high per-capita consumption (Coca-Cola FEMSA's SEC
  filings report 483 eight-ounce servings per capita of soft drinks in
  2003, and 598 servings of its products per capita in its Mexican
  territories in 2010) and with the ubiquity of TCCC-branded furniture;
  no survey of "most common taco drink" was found]
  [SOURCE: [Coca-Cola FEMSA Form 20-F FY2005](https://www.sec.gov/Archives/edgar/data/0000910631/000129281406001009/kof_form20f.htm);
  [Coca-Cola FEMSA Form 20-F FY2010](https://www.sec.gov/Archives/edgar/data/0000910631/000129281411001761/kofform20f2010.htm)]
- **Sunday comida with a returnable 2.5 L** in the midground is the family
  register. [EDITORIAL, consistent with the format being current]
- **Price and policy context (not a staging fact)**: Mexico's special
  excise tax (IEPS) on sugar-sweetened drinks rose from 1.64 to **3.08
  pesos per litre on 1 January 2026**, and a new 1.50 pesos/L tax applies
  to non-caloric-sweetened drinks. [HIGH — Expansión, El Financiero,
  Medscape] This matters for brief strategy (formats, zero-sugar variants),
  not for image content. [SOURCE: [Expansión — IEPS 2026](https://expansion.mx/economia/2025/12/31/ieps-impuesto-2026)]

## CROSS-CUTTING REGISTER: FESTIVALS & SEASONAL OCCASIONS

- **Fiestas Patrias — the night of 15 September (the Grito) and 16
  September.** Families mostly celebrate with a dinner at home or with
  relatives and friends: **pozole** with tostadas, **pambazos**,
  **enchiladas**, **tamales**, **sopes**, **tinga**, and in Puebla season
  **chiles en nogada**; green-white-red decorations and papel picado are
  authentic here. [HIGH — PROFECO, Infobae, El Universal, Record] Staging:
  a table crowded with antojitos, pozole bowls with the garnish plates,
  tricolour paper decorations blurred behind. No flags with legible
  emblems in hero position [EDITORIAL].
- **Chiles en nogada season (July–September, peaking August–September)**,
  tied to walnut (nuez de Castilla) and pomegranate harvests. [HIGH —
  Milenio, N+, Puebla state tourism]
- **Día de Muertos (1–2 November).** Home ofrendas with photographs,
  candles, cempasúchil (marigold) flowers, pan de muerto, the deceased's
  favourite food, fruit, and sometimes their favourite drink, soda
  included. [HIGH — El Universal, CNN Español, La Silla Rota] **Sensitivity
  [EDITORIAL]**: an ofrenda is a family's memorial to real dead relatives.
  **Never place the hero product on an ofrenda**, even though soft drinks
  genuinely appear on some — it reads as product placement on a grave
  altar. A Día de Muertos brief should stage the living family's meal
  (pan de muerto, mole, tamales) at a table, with an ofrenda softly in the
  background at most. No sugar-skull face paint.
- **Christmas Eve (Nochebuena, 24 December)**: bacalao a la vizcaína,
  romeritos in mole (especially central Mexico), roast pork leg or turkey,
  tamales, ponche. [HIGH — Diario del Yaqui, Directo al Paladar]
- **Día de Reyes (6 January)**: the rosca de Reyes, an oval ring of sweet
  bread with candied fruit strips and a hidden figurine; whoever finds the
  figurine hosts tamales on **Día de la Candelaria (2 February)**. [HIGH]
- **Lent (Cuaresma)**: fish and seafood, capirotada. [MEDIUM — not
  independently re-checked this pass]
- **Jueves pozolero**: Thursday pozole, a Guerrero custom (traced to
  19th-century Iguala) now served by restaurants in many states. [HIGH —
  Mexico News Daily, UnoTV]
- **Religious processions and pilgrimages** (e.g. 12 December, Virgin of
  Guadalupe): do not stage a TCCC product in or beside religious imagery
  or processions [EDITORIAL, same stance as `spain.md`'s Semana Santa].

Full staging for each celebration: see CELEBRATIONS & LARGE GATHERINGS below.

## CELEBRATIONS & LARGE GATHERINGS

Built 2026-10-01 under `country-file-schema.md` §5.7 (the snapshot rule).
The FESTIVALS register above stays as the calendar index; this section
holds the staging. Party size is the place settings in frame, never the
size of the event. The hero SKU always comes from the brief (§5.4).

### How large gatherings work here

- **Who gathers.** Mexican celebrations are extended-family events first:
  grandparents, aunts and uncles, cousins, compadres and padrinos, then
  friends and neighbours. Nine in ten Mexicans report eating Christmas
  dinner with family (90.2% in a Consulta Mitofsky survey, as reported by
  Infobae; 84.1% for New Year). [MEDIUM — one survey, 2013, reported
  second-hand] Life events are large: an average wedding plans for about
  140–146 guests (bodas.com.mx sector report), and a quinceañera
  typically for 120–200, with intimate parties of 50–80 (PartyPass
  planning guide). [MEDIUM for the wedding figure — industry survey with
  commercial interest; LOW-MEDIUM for the quinceañera range — a single
  planning-industry source]
- **Where (intake venues).** Holiday dinners and Sunday comidas are
  **home indoor** (the family house, often the grandparents'). Children's
  birthdays, baptisms and first-communion lunches are **home outdoor**
  (patio, yard, carport, azotea, or the street in front of the house
  closed off with a tarp) or a rented **salón de fiestas** (map to
  "other"). Weddings and quinceañeras are a **salón de eventos**, garden
  venue or hacienda ("other"); in towns, a yard or street under a tarp
  with rented tables. Restaurants host smaller milestones (a graduation
  meal, a family birthday) but are not the default for the big events.
  [EDITORIAL synthesis; MEDIUM for salones and taquiza services being
  standard — multiple vendor sources]
- **Table form.** At home: the dining table pushed against a second
  table, both under one cloth or hule, with folding chairs brought in.
  At parties: rows of **rented folding tables** (rectangular, or round
  tables of 8–10) with plastic or metal folding chairs, white or coloured
  tablecloths and sometimes chair covers at salones. [EDITORIAL; the
  rented-furniture package is standard in vendor offers]
- **Who serves and how.** Holiday dinners are family-style: platters and
  cazuelas in the centre, the hostess and aunts serving plates from the
  kitchen. Parties at home run on a **taquiza**: a buffet line of 5–10
  guisados in clay cazuelas or steel chafing pans, with arroz, frijoles,
  salsas, lime, nopales and a tortilla warmer, often staffed by a
  caterer. [MEDIUM — taquiza vendor menus (comidasparafiestas.com.mx,
  taquizas-adomicilio.com.mx), tier 3] Weddings default to a **plated
  three-course banquet** (about 65% of couples choose served courses over
  a buffet, per a wedding-planning source); in towns the banquet is mole
  with chicken, arroz rojo and tamales. [LOW-MEDIUM — planning-industry
  sources; the town mole banquet is reported by Vice and widely known]
- **Plates and cutlery.** At home parties, **disposable plates** (white
  foam or thick paper, sometimes coloured plastic) and plastic forks or
  just tortillas are normal and authentic; the taquiza service itself
  lists "desechables". Holiday dinners and salones use real china and
  full cutlery. [MEDIUM for disposables at taquizas — vendor menus;
  EDITORIAL for the rest]
- **Snapshot-staging default for Mexico [EDITORIAL].** The three most
  authentic crowd cues here are: (1) **more clay cazuelas than the
  visible diners could use**, lids off and partly cropped; (2) **a tarp
  or papel picado overhead with string lights**, soft, for home parties;
  (3) **a long run of identical folding tables and chairs behind**,
  soft, with one or two blurred guests. Use two of the three. Keep the
  tablecloth plain or embroidered; avoid tourist-costume decor (see
  ENVIRONMENT & STAGING SCENES caricature list).
- **Product format.** When the brief allows a multi-serve bottle, the
  implied gathering justifies a 2.5–3 L bottle in the midground of the
  visible stretch (schema §5.7). Soft drinks are a real, expected part of
  Mexican party tables ("refrescos al infinito" is how food writers
  describe the classic children's party). [LOW-MEDIUM — one food-brand
  blog] Exclude the other drinks Mexican party tables carry: jarras of
  agua fresca, ponche, beer and tequila.

#### Celebration: Fiestas Patrias night (Noche Mexicana, 15 September)
- Type: calendar holiday
- When: night of 15 September (the Grito at about 23:00) into the 16th;
  the dinner runs ~20:00–midnight; intake time: **evening**.
- Gathering: family plus friends and neighbours, roughly 10–30 at home;
  **home indoor** or a **home outdoor** patio under a tarp; also
  restaurant "noches mexicanas". [EDITORIAL headcount; HIGH that home
  dinners dominate — see FESTIVALS sources: PROFECO, Infobae, El Universal]
- The spread: a pot of **pozole** with its garnish plates (see catalog:
  Pozole), **tostadas** and **sopes** (see catalog: Masa antojitos),
  **tinga**, **enchiladas** (see catalog: Enchiladas), **tamales** (see
  catalog: Tamales), **pambazos** (no catalog entry; see below), and in
  Puebla season **chiles en nogada** (see catalog: Chiles en nogada).
  A real table carries 5–8 serving vessels plus garnish bowls.
  - **Pambazo** (no catalog entry): a soft white roll about 1.5 times the
    can's height, dipped whole in a guajillo-chile sauce and griddled so
    the outside is a soft, matte brick-red, filled with potato and
    chorizo, shredded lettuce, crema and crumbled cheese; served on a
    plate, eaten by hand. [MEDIUM — not individually re-checked this
    pass; PROFECO lists pambazos among Grito dishes] Added to CANDIDATE
    QUEUE.
- Snapshot staging:
  - **1 setting**: one bowl of pozole rojo with a pinch of garnish, a
    small plate with two tostadas; behind it, cropped, the big pozole pot
    and three or four garnish bowls (onion, radish, lime, oregano) that
    clearly serve a crowd.
  - **2 settings**: two identical pozole bowls facing each other across
    the table end; between them a platter of sopes and tostadas de tinga
    and a garnish tray; a cazuela of enchiladas cut off by the frame edge.
  - **Small group (3–4)**: identical pozole bowls, a tostada plate each;
    the centre runs out of frame with platters of antojitos and a tamal
    basket.
  - **Crowd cues**: green-white-red papel picado overhead, soft; a second
    table with blurred guests behind; the pot on a portable burner at
    the edge.
- Decor and cues: tricolour paper streamers, papel picado, tricolour
  paper flowers; night, warm string lights. Avoid sombreros, sarapes,
  fake moustaches and mariachi costumes in frame unless briefed.
- Never stage: tequila, beer, the Grito ceremony itself on a TV with
  legible graphics; legible national flags or the eagle emblem in hero
  position (soft tricolour colour fields only).
- Confidence and sources: dishes HIGH (PROFECO, Infobae, El Universal,
  Record, as cited in FESTIVALS); headcount and staging EDITORIAL.

#### Celebration: Christmas Eve dinner (Cena de Nochebuena, 24 December)
- Type: calendar holiday
- When: 24 December; dinner late, often after 22:00, running to midnight;
  intake time: **evening**. Posadas (16–24 December) are separate
  neighbourhood parties with tamales and ponche; stage them like the
  Fiestas Patrias night, without the tricolour.
- Gathering: the extended family, ~10–25 at the grandparents' or a
  sibling's house; **home indoor**. [MEDIUM that family dinner is near
  universal — Consulta Mitofsky via Infobae; headcount EDITORIAL]
- The spread: the centrepiece is **turkey** (pavo, the most common at
  about 48% of families in a survey summarised by Infobae) or a **roast
  pork leg** (pierna, about 16%) or loin; alongside, **bacalao a la
  vizcaína** (salt cod stewed with tomato, olives, capers and potato,
  especially central Mexico), **romeritos** in mole with shrimp
  fritters (tortitas de camarón), **ensalada de Nochebuena** (beet,
  apple, jícama, orange, peanut) or a creamy apple-and-walnut salad,
  pasta salad, and **tamales** (see catalog: Tamales). A table carries
  4–7 serving dishes. [HIGH for the dish set — Infobae, UNAM Global,
  Conecta Tec, FESTIVALS sources; MEDIUM for the survey percentages,
  attributed to unnamed polling houses] None of the centrepieces has a
  catalog entry:
  - **Pierna adobada / pierna al horno**: a whole roast pork leg, glossy
    lacquered brown to brick-red, sliced partly, on a large oval platter
    about three cans long, with pineapple or prune garnish. [MEDIUM —
    not individually re-checked]
  - **Bacalao a la vizcaína**: a red-orange tomato stew with flaked white
    cod, green olives, capers and yellow güero chiles, in a deep platter
    or clay cazuela; eaten in a bolillo or with a fork. [HIGH for the
    ingredients — Infobae; visual MEDIUM]
  - **Romeritos**: dark mole sauce clinging to thin green sprigs of
    seepweed with round tortitas de camarón and potato, in a clay
    cazuela. [HIGH for composition — Infobae; visual MEDIUM]
  All three added to CANDIDATE QUEUE.
- Snapshot staging:
  - **1 setting**: a china plate with a slice of pierna or turkey, a
    spoon of romeritos and a spoon of bacalao, a bolillo on a side plate;
    the carved pierna platter and the bacalao cazuela cropped at the
    edge.
  - **2 settings**: two identical plates; between them the turkey or
    pierna platter (partly cropped), a salad bowl, a bread basket.
  - **Small group**: identical plates on a red or white embroidered
    cloth, the centre a row of platters running out of frame.
  - **Crowd cues**: the table running out of frame on both sides; a
    Christmas tree or nacimiento lights blurred behind (no religious
    figures readable); extra chairs at the table edge.
- Decor and cues: red or green cloth, a red nochebuena (poinsettia) pot,
  candles, Christmas lights; evening interior light. Avoid snow imagery,
  US-style stockings by a fireplace.
- Never stage: ponche with piquete (spirit added), cider or wine bottles,
  the nacimiento as the scene, Midnight Mass.
- Confidence and sources: see above; [Infobae — cómo celebran los mexicanos la Navidad (2024)](https://www.infobae.com/mexico/2024/12/21/como-celebran-los-mexicanos-la-navidad-pinatas-regalos-y-fiestas-familiares/);
  [UNAM Global — la cena de Navidad en el Valle de México](https://unamglobal.unam.mx/global_revista/la-cena-de-navidad-en-el-valle-de-mexico/).

#### Celebration: Rosca de Reyes and Candelaria tamalada (6 January and 2 February)
- Type: calendar holiday (paired: the figurine finder on 6 January hosts
  the tamales on 2 February)
- When: Reyes is an afternoon-into-evening merienda (~17:00–20:00);
  Candelaria is a comida or early evening (~14:00–20:00). Intake time:
  **golden-hour** for Reyes, **midday** or **evening** for Candelaria.
- Gathering: family, office or friend groups, ~8–20; **home indoor**,
  or an office table (map to "other"). [EDITORIAL]
- The spread: Reyes: one large oval **rosca** (see catalog: Sweets,
  Rosca de Reyes) on a board or tray, often 50–80 cm long for a big
  family, sliced; hot chocolate is the traditional companion (not
  staged). Candelaria: a **tamalera** or basket of mixed tamales — verde,
  rojo, rajas, dulce (see catalog: Tamales) — sometimes oaxaqueños in
  banana leaf; atole is the traditional companion (not staged). [HIGH for
  the pairing — FESTIVALS sources; rosca length LOW, not checked]
- Snapshot staging:
  - **1 setting**: a small plate with a slice of rosca; the rest of the
    ring cropped by the frame, its scale obvious against the can.
  - **2 settings**: two plates with tamales opened on their husks; a
    basket of husk-wrapped tamales in the centre, more than two people
    could eat.
  - **Small group**: identical plates, the rosca ring or the tamal basket
    running out of frame.
  - **Crowd cues**: the rosca's ring continuing beyond the frame; a
    second steaming tamalera on the counter behind; a stack of extra
    plates.
- Decor and cues: plain home table, the plastic baby-figure is inside
  the bread (never shown as a religious object). No Three Kings figures
  as props.
- Never stage: religious images, the Candelaria church blessing of the
  Niño Dios figure.
- Confidence and sources: HIGH for the customs (FESTIVALS sources);
  staging EDITORIAL.

#### Celebration: Children's birthday party (fiesta infantil)
- Type: life event
- When: weekend afternoon, ~14:00–19:00; intake time: **midday** or
  **golden-hour**.
- Gathering: the child's classmates plus the whole extended family:
  30–80 people is common for a home party (adults outnumber children);
  **home outdoor** (patio, yard, carport, closed street under a tarp) or
  a salón de fiestas infantiles ("other"). [LOW — headcount not verified
  this pass; EDITORIAL]
- The spread: a **taquiza** of guisados in cazuelas (chicharrón en salsa
  verde, tinga, papa con chorizo, rajas con crema, mole) with arroz,
  frijoles, salsas and tortillas (see catalog: Tacos; Arroz rojo,
  frijoles and the guisado plate), or a pozole pot (see catalog:
  Pozole); a decorated **birthday cake** (pastel) with bright frosting;
  **gelatinas** (jelly) in cups or a mould; candy from the piñata;
  refrescos. [MEDIUM — taquiza vendor menus; LOW-MEDIUM for the cake,
  gelatina and refresco picture — Productos Chata blog, tier 3/4]
  - **Pastel de cumpleaños** (no catalog entry): a round or sheet cake,
    often tres leches or chocolate, frosted in bright, sometimes neon
    colours with a character theme, about two to three cans across.
  - **Gelatina**: individual clear cups of red, green or layered milk
    jelly (gelatina de mosaico, white with coloured cubes), or one
    large ring mould. Both added to CANDIDATE QUEUE.
- Snapshot staging:
  - **1 setting**: a disposable plate with two tacos de guisado and a
    spoon of rice and beans, a gelatina cup beside it; two or three
    cazuelas cropped behind.
  - **2 settings**: two identical plates on a plastic tablecloth; a
    tortilla basket and salsas between them; the cake on a separate
    table, soft, in the background.
  - **Small group**: identical plates along a folding table; the taquiza
    line soft behind with its row of clay cazuelas.
  - **Crowd cues**: a hanging piñata and balloons, out of focus; tarp
    or papel picado overhead; rows of rented folding chairs.
- Decor and cues: balloons, a themed banner (unreadable), plastic
  tablecloths in bright colours, candy bags. Licensed cartoon characters
  must stay generic and unrecognisable.
- Never stage: recognisable licensed characters or readable names;
  children as the hero subject near the product (keep children soft,
  background only, per TCCC marketing-to-children norms [EDITORIAL —
  confirm against TCCC policy]); beer for the adults.
- Confidence and sources: [Productos Chata — platillos icónicos de fiesta infantil](https://productoschata.com/blog/sabores-que-crecieron-contigo-platillos-iconicos-de-fiesta-infantil/) (tier 3/4, a food brand's blog);
  [Comidas para Fiestas — taquizas](https://www.comidasparafiestas.com.mx/taquizas-para-fiestas/) (tier 3, vendor).

#### Celebration: Quinceañera (XV años)
- Type: life event
- When: Saturday evening; the banquet ~20:00–22:00 after the religious
  service and the entrance; intake time: **evening**.
- Gathering: 120–200 guests is typical, 50–80 for an intimate party;
  about half family, then parents' friends, the girl's friends, padrinos
  and chambelanes. **Salón de eventos** or garden venue ("other"); in
  towns, the family yard or street under a tarp. Round tables of 8–10.
  [LOW-MEDIUM — PartyPass planning guide, single tier-3 source]
- The spread: in salones, a plated three-course banquet (a cream soup or
  pasta, then pechuga rellena, pork medallion or similar with sides);
  in towns, **mole with chicken, arroz rojo and tamales** (see catalog:
  Moles; Tamales; Arroz rojo); **barbacoa** or **birria** are also
  popular centrepieces (see catalog: Barbacoa; Birria). A tall
  multi-tier cake and a candy table (mesa de dulces) stand apart.
  [MEDIUM — Vice on the pueblo mole banquet; vendor menus for the salón
  banquet]
- Snapshot staging:
  - **1 setting**: one plated portion of mole with chicken and a mound of
    rice on a white charger plate, a folded napkin, full cutlery; the
    edge of the round table and a centrepiece base cropped.
  - **2 settings**: two identical plates side by side on the curve of a
    round table; a tortilla basket and a bread basket shared.
  - **Small group**: three or four identical plates around one arc of
    the table; the floral centrepiece cropped at the top of frame.
  - **Crowd cues**: further round tables with chair covers soft behind;
    dance-floor lights as bokeh; a blurred guest or two.
- Decor and cues: tablecloths and chair sashes in the quinceañera's
  theme colour, tall centrepieces, balloon arches. Keep the girl and her
  gown out of the hero frame or soft and faceless.
- Never stage: the Mass, the crown or "last doll" ritual as the scene;
  the toast; open bar bottles on the tables (a real norm at many
  parties — exclude explicitly).
- Confidence and sources: [PartyPass — lista de invitados para una quinceañera](https://www.partypass.mx/blog/lista-invitados-quinceanera);
  [Vice — comer como quinceañera mexicana](https://www.vice.com/es/article/comer-como-quinceanera-mexicana-en-california/)
  (written about California, cites Mexican town practice).

#### Celebration: Wedding banquet (boda)
- Type: life event
- When: Saturday; banquet ~19:00–22:00 (evening) or ~15:00–18:00 for a
  daytime garden or hacienda wedding; intake time: **evening** or
  **golden-hour**.
- Gathering: about 140–146 guests on average (bodas.com.mx sector
  report); salón, garden, hacienda or beach venue ("other"); round or
  long imperial tables. [MEDIUM — industry survey; the venue mix is
  EDITORIAL]
- The spread: a **plated three-course menu** is the standard (cream or
  soup, a main of beef fillet, chicken breast or pork with sides,
  dessert); a late-night **tornafiesta** snack of chilaquiles, tacos or
  pozole (see catalog: Pozole; Tacos) after midnight is a known custom
  (not verified this pass). Town weddings serve mole, rice, tamales or
  barbacoa family-style. [MEDIUM for three courses — wedding-planning
  sources; LOW for the tornafiesta]
- Snapshot staging:
  - **1 setting**: one plated main on a charger, full cutlery, folded
    napkin, a bread roll on a side plate; the table edge and a candle or
    centrepiece base cropped.
  - **2 settings**: two identical plates side by side on a long imperial
    table with a runner; a shared bread basket.
  - **Small group**: identical plates along one stretch of the long
    table, which runs out of frame both ways.
  - **Crowd cues**: candles and greenery runners continuing out of
    frame; string lights or a garden canopy overhead; blurred guests at
    the far end.
- Decor and cues: white or neutral linen, flowers, candles; the lazo
  (wedding cord) and religious elements belong to the ceremony, not the
  table.
- Never stage: the church ceremony, the toast, wine or champagne glasses
  at the setting (a real wedding table has them; remove every stemmed
  glass), the bride and groom as the subject.
- Confidence and sources: [bodas.com.mx — Informe del Sector Nupcial 2025](https://www.bodas.com.mx/articulos/organizacion-de-una-boda-datos-y-curiosidades-en-mexico--c10606);
  [theww.mx — banquete servido vs buffet](https://theww.mx/blog/banquete-servido-vs-buffet-boda-mexico) (tier 3).

#### Celebration: Baptism and first-communion lunch (bautizo, primera comunión)
- Type: life event
- When: Saturday or Sunday; the meal after the late-morning service,
  ~14:00–18:00; intake time: **midday**.
- Gathering: family, padrinos and friends, ~40–100; **home outdoor**
  (yard or patio under a tarp) or a salón ("other"). [LOW — headcount
  not verified]
- The spread: a **taquiza** (5–10 guisados in cazuelas: mole, cochinita,
  chicharrón en salsa verde, tinga, rajas, papa con chorizo) with arroz
  with hard-boiled egg, refried beans, salsas, nopales, grilled
  cebollitas and tortillas; or a single centrepiece such as **carnitas**
  or **barbacoa** by the kilo (see catalog: Carnitas; Barbacoa;
  Cochinita pibil); a white decorated cake. [MEDIUM — taquiza vendor
  menus list bautizos and primera comunión explicitly]
- Snapshot staging:
  - **1 setting**: a plate with two or three tacos de guisado (different
    guisados visible), rice and beans; three cazuelas cropped along the
    back edge.
  - **2 settings**: two identical plates on a white tablecloth; a
    tortilla basket and a salsa molcajete between them.
  - **Small group**: identical plates; the cazuela buffet line soft
    behind.
  - **Crowd cues**: white and pastel balloons or tulle; rented folding
    tables with white cloths in rows; a carnitas pot or chafing pans at
    the edge.
- Decor and cues: white, pale blue or pale pink decor; white
  tablecloths.
- Never stage: the church rite, the baptismal font, rosaries or
  religious figures on the table; the child in christening clothes as
  the subject.
- Confidence and sources: [Taquizas a Domicilio CDMX — taquizas para fiestas](https://www.taquizas-adomicilio.com.mx/taquizas-para-fiestas-infantiles/);
  [Cocina Mestiza — cómo organizar la taquiza](https://cocinamestiza.com/como-organizar-taquiza-perfecta/) (tier 3/4).

#### Celebration: Sunday family comida and the northern carne asada
- Type: community or family gathering
- When: Sunday, ~14:00–18:00; intake time: **midday** (indoors) or
  **golden-hour** (yard).
- Gathering: three generations, ~8–20, at the parents' or grandparents'
  house; **home indoor** in most of the country, **home outdoor** in
  zone 1 (North) where the weekend carne asada is the social
  institution. [HIGH for the northern carne asada — see Meal outdoors at
  home; headcount EDITORIAL]
- The spread: central and southern Mexico: a big cazuela of mole,
  pozole, barbacoa bought by the kilo, or carnitas (see catalog: Moles;
  Pozole; Barbacoa; Carnitas), with arroz and frijoles. North: grilled
  arrachera and thin-cut beef, cebollitas, chiles toreados, flour and
  corn tortillas, guacamole, frijoles charros (see catalog: Carne asada &
  flour tortillas; Guacamole). 4–6 shared vessels.
- Snapshot staging:
  - **1 setting**: one plate with a taco or a portion of the main; the
    tortilla basket, salsa molcajete and a cazuela cropped.
  - **2 settings**: two identical plates; between them a wooden board of
    sliced arrachera (North) or a cazuela of mole, a tortilla basket.
  - **Small group**: identical plates on a folding table under a tree
    or carport; the grill smoking soft in the background (North).
  - **Crowd cues**: the grill with more meat than the visible diners
    need; extra folding chairs; a blurred relative at the grill.
- Decor and cues: hule or plastic cloth, plastic or clay serving bowls,
  unbranded plastic furniture.
- Never stage: beer cans or a cooler full of beer (the strongest prior
  for a carne asada scene); legible cooler branding.
- Confidence and sources: see ENVIRONMENT & STAGING SCENES, Meal
  outdoors at home; staging EDITORIAL.

## GAME NIGHT

Built 2026-10-01 under `country-file-schema.md` §5.8 from the
cross-market game-night research notes (no new searches for this file).
Party size is the place settings in frame (§5.7 snapshot rule); the hero
SKU comes from the brief (§5.4). Screens, cards and boards are never
legible; no crests, kits, sponsor or league marks; no gambling as the
subject; no identifiable children; never a full flag. Beer, micheladas,
tequila and the batanga are the default priors at every Mexican viewing
table, so negate them in every prompt (file-wide rules 3–4).

### Watch parties

Football is the main viewing occasion (Liga MX, the Selección, the
derbies such as América–Chivas), with boxing as the second national
format and the NFL and Formula 1 as smaller followings. Most viewing is at
home around a botana spread or a carne asada, and the public form that
stages cleanly is the fan-zone food court: Mexico City's 2026 FIFA Fan
Festival in the Zócalo sold no alcohol at all. Signature foods: botanas
(tostadas, chicharrón, cacahuates, guacamole in a molcajete), tacos and
tortas, and in the North the carne asada.

#### Watch party: football at home (Selección and Liga MX)
- When: Liga MX on weekend afternoons and evenings; Selección matches in
  tournament summers (World Cup, Gold Cup, Copa América years) and
  qualifier windows. Intake time: **golden-hour** for weekend afternoon
  kick-offs, **evening** for night games. [LOW — not verified; the notes
  map Latin American weekend afternoons to golden-hour; no Liga MX
  schedule was checked]
- Gathering: family or 4–8 friends in the living room, or the extended
  family in the patio when a Sunday comida and a match coincide; **home
  indoor** (living room) or **home outdoor** (patio, carport). [EDITORIAL,
  following the notes' cross-market home-viewing pattern]
- The spread: a **botana** spread on the centre table: tostadas with
  toppings (see catalog: Masa antojitos — sopes, huaraches, tlacoyos,
  gorditas, tostadas), chicharrón and chicharrones de harina with hot
  sauce (see catalog: D. Snacks), cacahuates japoneses (coated peanuts)
  and salted peanuts in small bowls, potato chips with salsa, **guacamole
  in a molcajete** with totopos (see catalog: Guacamole with totopos;
  elotes and esquites), then tacos or tortas for the meal (see catalog:
  Tacos — the national format; Tortas). Plastic or clay bowls, a
  tortillero, paper napkins. In zone 1 the patio carne asada replaces
  the botana (see catalog: Carne asada & flour tortillas; and Celebration:
  Sunday family comida and the northern carne asada). [LOW — not verified;
  the notes list the botana spread as model knowledge]
- Surface and environment: a low centre table (mesa de centro) in front
  of the sofa, or a folding table with hule in the patio; the TV as a
  soft green glow with no score bug or channel mark; green-white-red
  paper streamers or a scarf in national colours with no emblem, soft;
  tiled floor, painted plaster walls (see ENVIRONMENT & STAGING SCENES,
  General environmental norms). It reads as Mexico through the
  molcajete, the clay and plastic bowls, the hule and the house interior,
  not through costume.
- Snapshot staging:
  - **1 setting**: one small plate with two tostadas and a spoon of
    guacamole; the molcajete and a bowl of cacahuates cropped at the
    edge of the centre table; the hero on the table; the TV glow soft
    behind.
  - **2 settings**: two identical plates side by side on the centre
    table facing the screen; between them the molcajete, a bowl of
    chicharrón and a bowl of totopos.
  - **Small group (3–4)**: identical plates along the table edge;
    bowls repeating and running out of frame; the sofa running out of
    frame.
  - **Crowd cues**: more bowls than the visible diners need; extra
    folding chairs brought in; one or two blurred backs of heads toward
    the screen.
- Never stage: beer cans or bottles with lime, micheladas, a cooler of
  beer; team crests, kits, Liga MX or federation marks; a legible TV
  screen; betting apps or quinielas (football pools) on paper; a full
  flag or the eagle emblem; sombreros or luchador masks as fan props.
- Confidence and sources: overall LOW — model knowledge carried from the
  research notes; football as a high-popularity viewing occasion in
  Mexico per the notes' per-market table; staging EDITORIAL.

#### Watch party: fan-zone food court (public viewing)
- When: tournament summers; Mexico City's FIFA Fan Festival in the
  Zócalo ran through the 2026 World Cup (11 June–19 July 2026), with
  more than 100,000 people in the square for the final. Intake time:
  **midday** or **evening**, following kick-off. [HIGH — mexicocityfwc26,
  La Silla Rota, Informador]
- Gathering: the operator's party of 1–4 at a food-court table inside a
  crowd of tens of thousands (capacity about 55,000, ~2.2 million
  cumulative visitors); **other: fan zone**. [HIGH for the capacity and
  attendance — mexicocityfwc26, La Silla Rota; party size EDITORIAL]
- The spread: street-stall food on paper or plastic plates and in
  paper trays: **tacos al pastor** (see catalog: Tacos al pastor),
  **esquites** in cups (see catalog: Guacamole with totopos; elotes and
  esquites), **tortas** (see catalog: Tortas). [LOW — not verified; the
  notes rank this scene but cite no menu source]
- Surface and environment: a folding table or high standing table in a
  food-court area; string lights or temporary lighting rigs; a giant
  LED screen far behind as a soft field of colour; crowd as blurred
  shapes. Keep the specific colonial façades of the Zócalo generic and
  soft so the scene does not pin to a real venue.
- Snapshot staging:
  - **1 setting**: one paper tray of three tacos al pastor and a cup of
    esquites on the table edge, the hero beside it; the screen glow and
    blurred crowd far behind.
  - **2 settings**: two identical trays facing each other across a
    small folding table.
  - **Small group**: identical trays on a longer shared table; more
    tables and blurred backs beyond.
  - **Crowd cues**: rows of tables running out of frame; blurred
    figures (within the background-people limit) facing the distant
    screen; temporary lighting.
- Never stage: FIFA, tournament or sponsor marks on screens, signage,
  cups or tables; legible screens; beer (the 2026 Zócalo fan fest sold
  none, which makes the alcohol-free version authentic); face paint on
  identifiable people; crowd crushes or flares.
- Confidence and sources: event facts HIGH ([Mexico City FWC26 — FIFA
  Fan Festival](https://www.mexicocityfwc26.com.mx/fifa-fan-festival);
  [La Silla Rota](https://lasillarota.com/metropoli/2026/3/4/mundial-2026-asi-sera-el-fan-fest-del-zocalo-cdmx-588878.html);
  [Informador](https://www.informador.mx/mexico/mundial-2026--fan-fest-del-zocalo-cdmx-luce-repleto-en-la-final-espana-argentina-asisten-mas-de-100-mil-aficionados-20260719-0116.html));
  food LOW; staging EDITORIAL. The 2026 fan fest is over; use it as the
  template for a future public screening, not as a current event.

#### Watch party: boxing fight night (Canelo weekend, mid-September)
- When: Canelo Álvarez has fought on Mexican Independence Day weekend
  (mid-September) since 2010; families and friends gather for a carne
  asada in the afternoon and watch the pay-per-view at night. Intake
  time: **golden-hour** for the asado, then **late night** for the main
  event (US main events land late in central Mexico [LOW — time-zone
  arithmetic, not verified]). [MEDIUM — Boxing247, Round by Round Boxing]
- Gathering: family and friends, about 6–15; **home outdoor** (patio,
  carport, backyard grill) moving to **home indoor** (living room) for
  the fight. Overlaps with the Fiestas Patrias night (see Celebration:
  Fiestas Patrias night) in some years. [EDITORIAL headcount]
- The spread: the afternoon is a **carne asada** — arrachera and thin-cut
  beef, cebollitas, chiles toreados, flour and corn tortillas, guacamole,
  frijoles charros (see catalog: Carne asada & flour tortillas;
  Guacamole with totopos). At night, what is left moves to the centre
  table as tacos and botanas.
- Surface and environment: golden-hour: a folding table with a plastic
  cloth beside a charcoal grill in a patio or carport. Late night: the
  living room lit by a lamp and the soft glow of the TV (a dark, blurred
  ring of light only), plates of tacos on the centre table, dark
  windows.
- Snapshot staging:
  - **1 setting**: golden-hour: a plate with two carne asada tacos, the
    board of sliced meat and the molcajete cropped, the grill smoking
    soft behind. Late night: one plate on the centre table, TV glow
    behind, a warm lamp.
  - **2 settings**: two identical plates facing each other across the
    patio table; between them the board of arrachera and the tortilla
    basket.
  - **Small group**: identical plates along a folding table; bowls
    repeating out of frame; the grill with more meat than the diners
    need.
  - **Crowd cues**: extra plastic chairs; a blurred figure at the grill;
    blurred backs of heads toward the screen at night.
- Never stage: beer (the stated default at these gatherings: stage the
  carne asada table only), fighters' faces or bodies on screen, blood,
  belts or promoter logos, betting on the fight, cash.
- Confidence and sources: the Canelo September tradition and the asado-
  then-fight pattern MEDIUM ([Boxing247](https://www.boxing247.com/boxing-news/canelo-smith-heating-up/60781);
  [Round by Round Boxing](https://roundbyroundboxing.com/news/canelo-alvarez-takes-back-mexican-independence-day/));
  carne asada composition per the catalog entry; staging EDITORIAL.

Smaller formats, no entries [LOW — not verified]: the NFL has a real
Mexican following (regular-season games in Mexico City), mainly a
Sunday home or carne asada scene; Formula 1's Mexico City Grand Prix
(late October, ~400,000 weekend crowds) is watched at home in a
brunch-style **midday** register (breakfast out of scope; stage it as a
midday table); baseball is medium in the northern states. Stage any of
these with the home-football template above.

### Social game nights

Popularity as an occasion to gather and eat around: **medium-high** —
lotería is the posada game "while the food finishes cooking" and is
played at fairs and family parties [MEDIUM — Press Democrat, Loco
Gringo]; dominoes [LOW — not verified]; party karaoke [LOW — not
verified]. Games are part of family gatherings rather than a set
"night".

#### Game night: lotería at a posada (and family parties)
- When: posadas, 16–24 December, and fairs and family Sundays through
  the year. Intake time: **evening**. [MEDIUM for posadas — Press
  Democrat, Loco Gringo]
- Gathering: neighbours and extended family, about 15–40, with the
  caller (the "gritón") and players around folding tables; **home
  outdoor** (patio, street in front of the house under a tarp) or a
  neighbourhood courtyard ("other"). [EDITORIAL headcount]
- The spread: **tamales** (see catalog: Tamales), **pozole** with its
  garnish plates (see catalog: Pozole), tostadas (see catalog: Masa
  antojitos), **buñuelos** (fried discs of dough with syrup or sugar,
  no catalog entry; see CANDIDATE QUEUE). Ponche (warm fruit punch,
  alcohol-free) in jarritos is authentic but is another drink: out of
  frame unless the brief names it, and never "con piquete" (spiked).
  Clay cazuelas, a tamal pot, disposable plates.
- Surface and environment: rented folding tables with an oilcloth,
  each player's **tabla** (picture board) with **pinto beans** as
  markers; a deck of picture cards face down or soft. String lights and
  papel picado under a tarp; a night sky; warm bulbs. The cards and
  tablas carry only unreadable, generic picture art.
- Snapshot staging:
  - **1 setting**: a disposable plate with a tamal and a spoon of
    pozole beside it, a tabla with scattered beans pushed to one side,
    the hero; the tamal pot cropped.
  - **2 settings**: two identical plates at a folding table, two tablas
    between them with beans, a bowl of buñuelos.
  - **Small group**: identical plates and tablas along one table that
    runs out of frame.
  - **Crowd cues**: more folding tables under the tarp behind, string
    lights, blurred neighbours; the caller as a soft shape at the far
    end.
- Never stage: a publisher's lotería deck or its trademarked card art
  (use generic unreadable picture cards); legible card names or numbers;
  prize money or coins as stakes; ponche con piquete, beer; religious
  imagery from the posada procession (the pilgrims, the nativity) as the
  scene; identifiable children breaking a piñata.
- Confidence and sources: lotería at posadas MEDIUM ([Press Democrat](https://www.pressdemocrat.com/article/specialsections/loteria-pinatas-help-latino-families-create-memories-that-last-a-lifetime/);
  [Loco Gringo](https://www.locogringo.com/blog/activities/mexican-posadas-fun-guide-holiday-parties-mexico));
  posada foods per the notes and FESTIVALS (tamales and ponche HIGH
  there for Nochebuena); staging EDITORIAL.

#### Game night: family dominoes on the patio
- When: weekend afternoons, often after the Sunday comida. Intake time:
  **golden-hour**. [LOW — not verified]
- Gathering: four players with onlookers, older relatives and
  neighbours; **home outdoor** (patio, carport, sidewalk table).
  [LOW — not verified]
- The spread: botanas in small bowls: cacahuates, chicharrón, tostadas
  (see catalog: D. Snacks; Masa antojitos), fruit cups with lime and
  chile powder (see catalog: D. Snacks). Food on a side table or the
  table corner so the tiles keep their space.
- Surface and environment: a plastic folding table or a square wooden
  table, tiles face down or as generic ivory rectangles; late sun on a
  painted wall, a potted plant, plastic chairs.
- Snapshot staging:
  - **1 setting**: a small plate of botana at the table corner, the hero
    beside it, a few tiles soft in the foreground.
  - **2 settings**: two plates at opposite corners, tiles in a line
    between them, a bowl of cacahuates.
  - **Small group**: four corners of a square table with tiles in the
    middle; bowls on a side table.
  - **Crowd cues**: a blurred onlooker standing; extra chairs.
- Never stage: money or stakes; beer; scoring sheets with legible
  numbers.
- Confidence and sources: LOW — the notes list dominoes in Mexico as
  model knowledge, not verified; staging EDITORIAL.

Party karaoke (a speaker and microphone at birthday parties) is reported
but not verified [LOW]; at most a background cue at an adult birthday
taquiza (see How large gatherings work here), mics resting on a table, never
held, no legible lyrics.

## OPTIONAL MODULE — MORNING OCCASIONS (off by default)

Use only when a brief explicitly asks for a morning scene; log the scope
exception in `DECISIONS.md`.
- **Chilaquiles** — fried tortilla pieces simmered briefly in salsa roja
  or verde, topped with crema, crumbled cheese, raw onion, often a fried
  egg or shredded chicken; frijoles on the side. Should look partly soft,
  partly still crisp at the edges, not soggy mush. [MEDIUM — not
  independently re-checked]
- **Tamales + atole, or a guajolota** from a morning tamal cart (see
  catalog). [HIGH for the guajolota — see its entry]
- **Molletes** (bolillo halves with frijoles and melted cheese, pico de
  gallo), **huevos rancheros**, **huevos a la mexicana**. [MEDIUM]
- **Pan dulce with café de olla.** [MEDIUM]

---

## ZONE CALLOUTS (environment + dish pointers)

1. **North** — Desert light, wide low houses with carports, mountains
   behind Monterrey. Flour tortillas (sobaqueras in Sonora), carne asada,
   arrachera, machaca, burritos, cabrito (Nuevo León), discada.
   → catalog: Carne asada & flour tortillas; Burritos & machaca; Cabrito.
2. **Northwest Pacific** — Sea, ports, marisquerías. Baja fish tacos,
   aguachile (Sinaloa origin; Nayarit green style), pescado zarandeado
   (Nayarit), cocteles, tostadas de mariscos; Tijuana's quesabirria.
   → catalog: Baja fish tacos; Aguachile; Pescado zarandeado; Birria.
3. **West & Bajío** — Stone colonial centres, market halls, agave. Birria
   (Jalisco), torta ahogada (Guadalajara), pozole rojo, carnitas
   (Michoacán), corundas and uchepos (Michoacán), enchiladas mineras
   (Guanajuato, compact).
   → catalog: Birria; Torta ahogada; Pozole; Carnitas; Tamales.
4. **Centre** — Dense colonias, street stands everywhere, Talavera in
   Puebla, volcanoes. Tacos al pastor, suadero, tacos de canasta, tortas
   on telera, guajolota, quesadillas (the with-or-without-cheese debate),
   tlacoyos and huaraches, barbacoa (Hidalgo), mole poblano, chiles en
   nogada, cemitas (Puebla).
   → catalog: most of section B.
5. **Gulf** — Humid tropical green, port cafés with arcades. Pescado a la
   veracruzana, picadas and gordas, seafood cocktels, zacahuil (Huasteca).
   → catalog: Pescado a la veracruzana; Masa antojitos; Tamales.
6. **South** — Highland valleys and markets, adobe and stucco. Tlayudas,
   Oaxaca's seven moles, tamales oaxaqueños in banana leaf, tasajo and
   cecina, quesillo, chapulines (a real food, use only if briefed —
   insects are a strong novelty cliché for image models) [EDITORIAL];
   Guerrero's pozole verde and blanco.
   → catalog: Tlayuda; Moles; Tamales; Pozole.
7. **Yucatán Peninsula** — Flat, hot, pastel colonial fronts, hammocks.
   Cochinita pibil, panuchos and salbutes, poc chuc, sopa de lima,
   papadzules, relleno negro; habanero salsa and pickled red onion on
   every table. **Spinout candidate** (see FILE ROLE & METHOD).
   → catalog: Cochinita pibil; Panuchos & salbutes; Sopa de lima; Poc chuc.

---

## DISH CATALOG

*Fields per `country-file-schema.md` §4.5: category · lineage · variants
(§4.6, with a default when unspecified) · format (§4.4) · serving vessel
& scale · texture & finish · staging · model failure / confusion ·
confidence · sources. Scale anchors: the 355 mL can (123 mm / 66 mm), the
355 mL returnable glass bottle (~20 cm), the tortilla-size table, and the
vessel table above.*

### A. National core

#### Tacos — the national format (street, taquería, home)

- **Category**: Everyday — lunch, dinner, late night, street.
- **Lineage**: Native Mexican; the taco predates and is unrelated to the
  US hard-shell "taco" (`us-texas.md`).
- **Variants (§4.6), offered as choices**: the filling defines the taco
  and is strongly regional — al pastor, suadero, bistec, campechano (Centre);
  carnitas (West/Michoacán); birria (Jalisco / Tijuana); carne asada
  (North); fish and shrimp (Baja, coasts); cochinita (Yucatán); tacos de
  guisado; tacos de canasta; tacos dorados. Each has its own entry or
  pointer below. **Default when unspecified**: tacos al pastor at a
  Centre-zone street stand. [EDITORIAL fallback]
- **Format (§4.4)**: soft, open-faced on the plate (the street norm, two
  to five per plate, served flat or loosely curled, never stood upright
  in a rack); tacos dorados are rolled and fried (see Flautas).
- **Vessel & scale**: a 20–23 cm plastic plate (in a bag at a stand) or a
  ceramic/peltre plate; street tortillas 10 cm (No. 10), usually doubled
  for pastor/suadero; tacos de guisado on 14 cm tortillas. A street taco
  is therefore **roughly the can's height across and about as wide as the
  palm** — a small food, not a burrito. [HIGH for tortilla sizes — see
  SCALE REFERENCE]
- **Garnish (the self-serve set)**: finely chopped raw white onion and
  cilantro, lime wedges, salsa verde and roja; radish slices and grilled
  cebollitas at some stands. [HIGH — every al pastor and taquería source]
- **Texture & finish**: see TEXTURE LEXICON — matte, freckled corn tortilla
  slightly glossy from grill fat; the filling heaped along the centre;
  onion-cilantro confetti on top; salsa spooned in loose streaks.
- **Model failure**: U-shaped hard shells; lettuce + shredded yellow
  cheese + tomato dice + sour cream (Tex-Mex); large flour tortillas;
  tacos stood upright in a metal rack.
- **Confidence**: HIGH for format and garnish set; see sub-entries.
- **Composition & proportions (§4.7)** — one street order.
  - **What dominates**: **the tortilla and the meat together**; a street
    taco carries only **~30–50 g of meat** — a strip along the centre
    covering roughly half to two-thirds of the tortilla, the tortilla
    edge visible all round. [MEDIUM — Infobae and taquería portioning
    guides give ~30 g average, 40–50 g for fattier pastor/carnitas]
  - **Count**: an order is **3–5 tacos** on one plate. [MEDIUM]
  - **Garnish share**: onion-cilantro confetti is a light scatter (~1
    tablespoon per taco), not a salad; salsa one streak or a few drops;
    1–2 lime wedges per plate.
  - **Arrangement**: tacos laid flat or loosely curled, side by side,
    slightly overlapping.
  - **Absent on purpose**: cheese, lettuce, tomato dice, sour cream,
    hard shells, taco racks, beans inside.
  - **Prompt-ready line**: see Tacos al pastor.

#### Quesadillas (and the Mexico City cheese question)

- **Category**: Everyday antojito — street stands, home cena.
- **Variants (§4.6)**: **the Mexico City quesadilla** is a folded corn
  (often blue-corn) masa turnover or folded tortilla, cooked on a comal or
  fried, filled with any guisado — flor de calabaza, huitlacoche, tinga,
  chicharrón prensado, papa, hongos — **and cheese is optional, ordered
  explicitly ("con queso")**; elsewhere in Mexico, a quesadilla contains
  cheese by definition. Both are real, simultaneously-true answers — a
  genuine long-running national debate. [MEDIUM — widely reported and
  uncontested as a debate; not individually re-searched this pass]
  **Default when unspecified**: a corn tortilla folded over melted
  quesillo (Oaxaca string cheese), cooked on a comal. [EDITORIAL]
- **Vessel & scale**: a half-moon ~15–18 cm across on a plate; the
  masa-turnover version is thicker (~1 cm) with a crimped edge.
  [LOW-MEDIUM]
- **Texture & finish**: comal-cooked — matte, dry, toasted brown spots;
  fried — deep golden, blistered, glossy; cut edge shows stretchy white
  quesillo threads, never orange cheddar.
- **Model failure**: a flour-tortilla wedge quesadilla cut into triangles
  with orange cheese and sour cream (US chain style).
- **Composition & proportions (§4.7)**.
  - **What dominates**: the folded tortilla or masa shell; the filling is
    a thin layer (~1 cm) visible only where the half-moon is opened or
    cut; 1–3 quesadillas per plate. [EDITORIAL]
  - **Absent on purpose**: triangles, orange cheese, sour cream, guac
    scoops on top.
  - **Prompt-ready line**: "Two folded corn tortilla half-moons, each a
    little wider than the can is tall, toasted with brown freckles from
    a griddle, one opened slightly to show stretchy white string cheese;
    a small bowl of green salsa beside."

#### Masa antojitos — sopes, huaraches, tlacoyos, gorditas, tostadas

- **Category**: Everyday antojitos; street and market; Fiestas Patrias.
- **Forms**:
  - **Sope**: a thick (~1 cm) masa disc ~8–10 cm across with a pinched
    raised rim, topped with frijoles, salsa, crumbled cheese, crema,
    lettuce or onion, and optionally a meat. [MEDIUM]
  - **Huarache** (Centre): a long oval masa base ~25–30 cm, the shape of a
    sandal sole, spread with beans, salsa, cheese and a meat. [MEDIUM]
  - **Tlacoyo** (Centre): a thick oval ~12–15 cm, usually blue-corn, stuffed
    with beans, fava or requesón, topped with nopales, onion, cheese and
    salsa; sold by women from comales at market edges and metro exits.
    [MEDIUM]
  - **Gordita**: a thick masa pocket split open and stuffed (chicharrón
    prensado in the Centre; in the North a thicker flour or corn gordita).
    [MEDIUM]
  - **Tostada**: a flat fried (or baked) corn tortilla spread with beans
    and topped with **tinga** (chicken in chipotle-tomato), shredded
    lettuce, crema, cheese — or seafood on the coasts. Always flat and
    rigid, ~12–15 cm. [MEDIUM-HIGH — tostadas with pozole and tinga are
    documented in the Fiestas Patrias sources]
- **Texture & finish**: masa bases are matte, slightly grainy, with
  toasted patches; blue-corn masa reads grey-violet, not bright blue.
- **Model failure**: a pizza-like crust; bright-blue dough; flour pastry.
- **Confidence**: MEDIUM (forms uncontested; not individually re-searched).
- **Composition & proportions (§4.7)**.
  - **What dominates**: the masa base; toppings sit in a thin layer that
    leaves the raised rim (sope) or oval edge (huarache, tlacoyo) visible.
    Beans a thin dark spread; 1 tablespoon each of crumbled cheese and
    crema; a pinch of onion; meat, if any, a small mound in the centre.
    Plate: 2–3 sopes, or 1 huarache, or 2 tlacoyos, or 2–3 tostadas.
    [EDITORIAL]
  - **Tostada de tinga**: the flat tostada fully covered by a thin bean
    layer, a ~1.5 cm layer of shredded chipotle chicken, then a loose
    handful of shredded lettuce, crema drizzle and crumbled cheese on top.
  - **Absent on purpose**: melted yellow cheese, piped sour cream.
  - **Prompt-ready line (sopes)**: "Three thick round corn-masa discs, each
    a little wider than the can, with pinched raised rims, spread with
    black refried beans, a small spoon of green salsa, crumbled dry white
    cheese, a drizzle of thin crema and a pinch of chopped onion."

#### Enchiladas

- **Category**: Everyday comida and special occasions.
- **Variants (§4.6)**: **enchiladas rojas** (guajillo/ancho red sauce),
  **verdes** (tomatillo), **suizas** (verde with a cream-and-cheese
  gratin, a Mexico City café classic), **de mole**, **enfrijoladas**
  (bean sauce), **entomatadas**; regional: potosinas (red-chile masa,
  San Luis Potosí), mineras (Guanajuato), Sonoran flat-stacked enchiladas.
  **Default when unspecified**: enchiladas verdes with chicken. [EDITORIAL]
- **Format**: three or four rolled or folded corn tortillas **dipped in
  sauce, not baked in a casserole under a cheese blanket**, plated in a
  row, sauced over, topped with crema, crumbled queso fresco and raw onion
  rings; often with arroz rojo and frijoles. Suizas are the exception
  (gratinéed). [MEDIUM-HIGH — uncontested; not individually re-searched]
- **Vessel & scale**: a 26–28 cm dinner plate or oval platter, enchiladas
  ~12–14 cm long each, filling two-thirds of the plate.
- **Texture & finish**: tortillas soft and sauce-stained right through;
  sauce loose and glossy; crema in thin drizzles; cheese crumbled, dry,
  white.
- **Model failure**: Tex-Mex casserole enchiladas smothered in melted
  yellow cheese and chili gravy (see `us-texas.md`); burrito-sized rolls.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: **the sauced tortillas**: 3–4 enchiladas side by
    side cover about two-thirds of the plate; sauce covers them fully
    and pools around; toppings are sparse — thin crema lines, a light
    scatter of crumbled cheese, 4–6 raw onion rings. Rice and beans, if
    present, are two small mounds in the remaining third. [EDITORIAL]
  - **Filling**: shredded chicken, visible only at the open ends.
  - **State cues**: sauce glossy, tortillas soft and stained, a little
    steam.
  - **Absent on purpose**: melted yellow cheese blanket, baking-dish
    casserole look (except suizas), lettuce heap, black olives.
  - **Prompt-ready line (verdes)**: "Four rolled corn tortillas side by
    side on a plate, completely covered in loose, glossy tomatillo-green
    sauce that pools around them, with thin drizzles of white crema,
    crumbled dry white cheese and a few raw white onion rings on top;
    small mounds of orange-red rice and black beans beside them."

#### Tamales (national — regional forms)

- **Category**: Everyday (morning and evening carts), celebratory
  (Candelaria, Christmas, Día de Muertos, Fiestas Patrias).
- **Form-changing (§4.2/§4.3) — wrapper and shape change by zone:**
  - **Centre and most of the country**: corn-husk wrapped, ~10–12 cm long
    oblong; verde (chicken in salsa verde), rojo (pork in red chile),
    rajas con queso, dulce (pink, sweet). [MEDIUM-HIGH]
  - **Oaxaca / South / Gulf / Yucatán**: **banana-leaf wrapped**, flat and
    rectangular, ~12–15 cm, softer and moister; the oaxaqueño filled with
    mole negro and chicken or pork. [HIGH for banana leaf in Oaxaca,
    Yucatán, Chiapas, Tabasco; Directo al Paladar, Xochitla, Recetas Mexas]
  - **Michoacán**: **corundas** — triangular, wrapped in a corn *plant*
    leaf so the tamal takes a multi-pointed shape, served with salsa and
    crema; **uchepos** — elongated fresh-corn tamales, slightly sweet.
    [HIGH]
  - **Huasteca (Veracruz/San Luis Potosí/Hidalgo)**: **zacahuil**, a
    colossal tamal feeding ~50, wrapped in many banana leaves and baked in
    a wood oven — a festival/market spectacle, not a single-serve scene.
    [HIGH]
  - **Guajolota** (Centre): a tamal inside a bolillo or telera — see its
    own entry.
  **Default when unspecified**: a corn-husk tamal verde, husk opened on
  the plate. [EDITORIAL]
- **Staging**: one or two tamales on a plate with the husk or leaf peeled
  back to show the masa; husk left under the tamal, not discarded.
- **Texture & finish**: masa pale-yellow, fluffy, moist and fine-crumbed,
  with sauce stains where the filling meets it; husk dry, papery,
  straw-coloured with fine ridges; banana leaf dark glossy green,
  softened, slightly translucent.
- **Model failure**: US-style tamales in parchment; dry cornbread; a
  burrito.
- **Sources**: [Directo al Paladar — tipos de tamales](https://www.directoalpaladar.com.mx/cocina-popular-mexicana/principales-tipos-tamales-mexico);
  [Xochitla — tipos de tamales según la región](https://blog.xochitla.org.mx/2021/01/22/los-tipos-de-tamales-segun-la-region/).
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: **masa** — the filling is a narrow core (~1/4 to
    1/3 of the cut face) running down the centre; 1–2 tamales per plate,
    the husk or leaf opened beneath. [EDITORIAL]
  - **Absent on purpose**: sauce blanket, cheese on top (unless rajas
    con queso inside), parchment.
  - **Prompt-ready line**: "One tamal on a plate, its dry straw-coloured
    corn husk peeled open beneath it, the soft pale-yellow cornmeal dough
    about the length of the can, split to show a thin stripe of chicken
    in green sauce down the centre."

#### Pozole (national holiday dish — colour changes by region)

- **Category**: Special-occasion and weekly (Thursday) — Fiestas Patrias,
  birthdays, jueves pozolero.
- **Form-changing (§4.2/§4.3):**
  - **Rojo** (Jalisco, Michoacán, and the Centre): broth reddened by
    soaked, blended guajillo and ancho; pork; hominy. [HIGH]
  - **Verde** (Guerrero): thickened with ground pumpkin seed, tomatillo,
    epazote, poblano/serrano — an opaque green, thicker broth. [HIGH]
  - **Blanco** (Guerrero, and widely): clear broth; chile added at table.
    [HIGH]
  **Default when unspecified**: pozole rojo with pork. [EDITORIAL]
- **Garnish plates (served on the side, added at table)**: shredded
  lettuce or cabbage, sliced radish, chopped onion, dried oregano (rubbed
  between the palms), ground chile piquín, lime wedges, and **tostadas**
  (often spread with crema or beans). **Guerrero's pozoles are commonly
  served without lettuce and radish** — sources disagree on how firmly,
  so offer both. [HIGH for the garnish set; MEDIUM for the Guerrero
  exception]
- **Vessel & scale**: a deep bowl ~15–18 cm across, often clay or
  Talavera-style, broth near the rim; hominy kernels ~1.5–2 cm, puffed and
  split like popcorn-white flowers; the garnish in small bowls around it.
- **Texture & finish**: rojo — brick-red broth with a slick of red fat
  droplets; hominy matte chalk-white; pork in soft tender chunks; steam
  rising.
- **Model failure**: a chunky chili; menudo (tripe, similar red broth —
  rule out by showing pork chunks, not honeycomb tripe); corn kernels
  instead of large puffed hominy.
- **Sources**: [UnoTV — pozole más famoso](https://www.unotv.com/nacional/pozole-mas-famoso-de-mexico-jalisco-guerrero-blanco-rojo/);
  [Mexico News Daily — Guerrero pozole](https://mexiconewsdaily.com/food/state-by-plate-guerrero-pozole/);
  [PROFECO — pozole del 15 de septiembre](https://www.gob.mx/profeco/documentos/el-pozole-en-la-cena-del-15-de-septiembre?state=published).
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: **broth and hominy**; the bowl is filled to ~1–2
    cm below the rim; puffed white hominy kernels crowd the surface
    (~50–60% of what shows above the broth line); 2–4 chunks of pork
    (~3–4 cm) partly visible. Garnish is **served on the side** in small
    bowls and plates; in the bowl itself, at most a small pinch of
    lettuce, 2–3 radish slices and a sprinkle of oregano on top.
    [EDITORIAL]
  - **Alongside**: 2–3 tostadas on a small plate, lime wedges.
  - **Absent on purpose**: beans, ground meat, tortilla chips, cheese,
    sour cream.
  - **Prompt-ready line (rojo)**: "A deep clay bowl of brick-red broth with
    a slick of red fat droplets, crowded with large puffed chalk-white
    hominy kernels and a few tender chunks of pork, steam rising; a pinch
    of shredded lettuce, three thin radish slices and dried oregano on
    top. Around it, small bowls of chopped onion and lime wedges and a
    plate of flat crisp tostadas."

#### Tortas (national sandwich — bread changes by region)

- **Category**: Everyday lunch, on the go, school and office.
- **Form**: a split **telera** (Mexico City) or **bolillo**, toasted on
  the plancha, spread with refried beans and mayonnaise, layered with a
  filling — milanesa, pierna (roast pork), jamón, chorizo con huevo,
  cochinita, tamal (the guajolota) — plus avocado slices, pickled
  jalapeños, tomato, onion, sometimes quesillo; the **torta cubana** is a
  towering multi-meat version. [HIGH for the telera/bolillo roles — El
  Financiero, Gourmet de México; MEDIUM for the fillings]
  Regional forms: **torta ahogada** (Guadalajara, birote — own entry),
  **cemita** (Puebla, sesame bun, papalo herb — see compact entry),
  **pambazo** (Centre — bread dipped in guajillo sauce and griddled,
  filled with potato and chorizo).
- **Vessel & scale**: ~15–18 cm long, ~8–10 cm tall when fully loaded;
  wrapped in paper, served on the paper or a plate. **Cut in half** at
  many stands; if a half is shown cut-face forward, state that the other
  half sits beside it face down or out of frame (§7.5 byproduct rule).
  [LOW-MEDIUM for dimensions]
- **Texture & finish**: telera crust soft, thin, lightly golden with the
  two grooves visible; cut face shows the bean layer as a dark stripe,
  avocado green, milanesa's thin breaded edge.
- **Model failure**: a baguette sub; a burger bun; a panini with grill
  stripes.
- **Sources**: [El Financiero — bolillo vs telera](https://www.elfinanciero.com.mx/food-and-drink/2023/04/20/diferencia-entre-el-bolillo-y-la-telera/).
- **Composition & proportions (§4.7)** — one torta.
  - **What dominates**: unlike a Spanish bocadillo, **the filling is
    thick** — roughly half of the cut-face height (~3–5 cm of layers
    inside ~2 cm of bread top and bottom): a dark bean stripe on the base,
    the main filling (milanesa, pierna), then thin avocado slices, 1–2
    tomato slices, onion, a few pickled jalapeño strips. [EDITORIAL]
  - **Served portion**: whole or halved on its paper; if halved, one
    half cut-face forward and the other beside it.
  - **Absent on purpose**: lettuce shreds overflowing, sauces dripping
    (except ahogada and pambazo), grill stripes.
  - **Prompt-ready line**: "A torta cut in half on white paper, one half
    facing the camera: a soft flat white roll with two shallow grooves,
    lightly toasted, filled thickly with a dark refried-bean stripe, a
    thin golden breaded cutlet, green avocado slices, a red tomato slice
    and a few pickled jalapeño strips; the other half lies beside it."

#### Flautas / tacos dorados

- **Category**: Everyday comida and fonda plate.
- **Form**: corn tortillas rolled tight around shredded chicken, beef or
  potato, fried crisp; **flautas** are the long ones (on larger
  tortillas), **tacos dorados** shorter; served three or four in a row,
  under shredded lettuce, crema, crumbled cheese, salsa, sometimes a
  broth (tacos ahogados). [MEDIUM — not individually re-searched]
- **Scale**: flauta ~18–25 cm long, ~2–3 cm thick; dorado ~12–14 cm.
- **Texture**: deep golden, blistered, rigid, visible ridges where the
  tortilla overlaps.
- **Model failure**: taquitos in a fast-food box; egg rolls.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: 3–4 crisp rolled flautas side by side; toppings
    cover their middle third only (a band of shredded lettuce, crema,
    crumbled cheese, a spoon of salsa), leaving the crisp ends visible.
    [EDITORIAL]
  - **Prompt-ready line**: "Three long, tightly rolled, deep-golden
    crisp-fried corn tortillas side by side on a plate, each longer than
    the can, with a band of shredded lettuce, thin crema drizzle and
    crumbled white cheese across their middles, crisp ends showing."

#### Arroz rojo, frijoles and the guisado plate

- **Category**: Everyday comida — the default home and fonda plate.
- **Form**: a guisado (chicken in mole or salsa verde, picadillo,
  chicharrón en salsa, tinga, bistec a la mexicana, albóndigas en
  chipotle) plated beside a mound of **arroz rojo** (tomato-tinted rice,
  orange-red, loose grains, often with peas and diced carrot) and
  **frijoles** (black in the Centre, South and Gulf; pinto or bayo
  in the North and West [MEDIUM]) — whole in broth (de olla) or refried
  (refritos, a smooth dark paste). Tortillas de mesa in a basket. [HIGH for
  the rice-then-guisado sequence, per comida-corrida sources; MEDIUM for
  bean-colour geography]
- **Vessel & scale**: a 26–28 cm plate, three mounds taking about
  two-thirds; or rice as its own sopa seca course in a smaller plate.
- **Model failure**: yellow Spanish rice; refried beans topped with melted
  cheddar; a burrito bowl.
- **Composition & proportions (§4.7)** — the guisado plate.
  - **What dominates**: **the guisado** (~40–50% of the plate), with rice
    (~25–30%) and beans (~20–25%) in adjacent mounds; tortillas in a
    basket or cloth, not on the plate. Rice grains separate, a few peas
    and carrot cubes (~5 mm) visible; beans either a smooth dark paste
    with a sheen or whole in a little broth. [EDITORIAL]
  - **Absent on purpose**: cheese melted on the beans, lettuce garnish,
    lime on everything.
  - **Prompt-ready line**: "A plate with three adjacent mounds: chicken
    pieces in loose green tomatillo sauce taking half the plate, a mound
    of separate orange-red rice grains flecked with peas and diced
    carrot, and smooth dark refried black beans; warm corn tortillas in
    a cloth basket beside the plate."

#### Sopa de tortilla / caldo de pollo (sopa aguada)

- **Category**: Everyday first course (comida corrida).
- **Form**: **sopa de tortilla** (sopa azteca) — a tomato-chile broth
  poured over fried tortilla strips, topped with avocado cubes, crumbled
  cheese, crema, a fried pasilla chile; **caldo de pollo** — clear broth,
  chicken pieces, carrot, potato, chayote, rice on the side, lime and
  chopped onion/cilantro to add; **sopa de fideo** — thin noodles in
  tomato broth. [MEDIUM — not individually re-searched]
- **Vessel**: a soup plate or bowl ~20–22 cm.
- **Composition & proportions (§4.7)**.
  - **Sopa de tortilla**: a shallow bowl, broth filling to ~1 cm below
    the rim; a nest of fried tortilla strips (~1 cm wide) in the centre
    rising slightly above the broth; on top, 4–6 avocado cubes, a spoon of
    crumbled cheese, a thin crema drizzle, one crumbled dark pasilla
    chile. **Caldo de pollo**: one chicken piece, 2–3 chunks each of
    carrot, potato and chayote in clear broth; rice, onion-cilantro and
    lime on the side. [EDITORIAL]
  - **Prompt-ready line (sopa de tortilla)**: "A shallow bowl of rich
    brick-red tomato-chile broth with a nest of crisp fried tortilla
    strips in the centre, topped with a few green avocado cubes, crumbled
    white cheese, a thin drizzle of crema and a crumbled dark dried chile."

#### Milanesa, chiles rellenos and fonda staples (compact)

- **Milanesa**: a very thin breaded beef or chicken cutlet, pounded thin,
  served with rice, beans or salad and lime; or in a torta. Wider than the
  plate is normal. [MEDIUM]
- **Chile relleno**: a roasted poblano (dark glossy green, ~12–15 cm)
  stuffed with cheese or picadillo, coated in egg batter (capeado — puffy,
  pale-gold, uneven) and served in a thin tomato broth. [MEDIUM]
- **Mole con pollo** at a fonda: a chicken piece under a pool of mole,
  sesame on top, rice beside. → see Moles.
- **Composition & proportions (§4.7)**.
  - **Milanesa**: one very thin cutlet covering most of a 26–28 cm plate
    (often reaching the rim); rice and beans or a small salad squeezed
    at one edge; 1–2 lime wedges. **Chile relleno**: one chile (~12–15 cm)
    centred in a shallow pool of thin tomato broth that covers the plate's
    base; rice on the side. [EDITORIAL]

#### Guacamole with totopos; elotes and esquites (snacks)

- **Guacamole**: chunky mashed avocado with onion, tomato, cilantro,
  serrano, lime; served in a molcajete (18–20 cm) with totopos (fried
  tortilla triangles) around it. Chunky, not a smooth purée. [MEDIUM]
- **Elote**: a boiled or grilled corn cob on a stick, coated in mayonnaise,
  crumbled cotija and ground chile, with lime. **Esquites**: the kernels in
  a cup with broth, epazote, mayonnaise, cheese, chile and lime. Street and
  plaza snack, evenings. [MEDIUM]
- Staging: the cup or cob rests on a counter or a plate, not held.
- **Composition & proportions (§4.7)**.
  - **Guacamole**: the molcajete filled to the rim with a chunky green
    mash; visible accents are small (~5 mm) — white onion, red tomato
    dice, cilantro flecks; 15–25 totopos tucked around the base or in a
    basket. **Elote**: one cob, the white coating covering it thinly, cheese
    and red chile dusted over; **esquites**: a cup filled to the rim,
    toppings a small cap. [EDITORIAL]
  - **Prompt-ready line (guacamole)**: "A grey volcanic-stone mortar on
    three short legs, about three cans wide, filled with chunky mashed
    avocado flecked with small bits of white onion, red tomato and
    cilantro, crisp triangular corn chips tucked around its base."

### B. Regional signatures

#### Tacos al pastor (zone 4 authoritative)

- **Lineage**: Mexican, from Lebanese and Syrian immigrants' shawarma
  technique in Puebla and Mexico City in the early 20th century — lamb
  replaced by pork, pita by corn tortilla. Don't label it "Mexican
  shawarma" in a prompt; do use the trompo. [HIGH — Wikipedia (via
  search), Infobae, Recetas Mexas]
- **Form**: pork marinated in red adobo, stacked on a vertical spit
  (**trompo**) topped with a pineapple; the taquero shaves thin slices
  onto **two small doubled corn tortillas** and flicks a sliver of
  pineapple on top; onion, cilantro, salsa verde or roja, lime. [HIGH]
  **Gringa**: al pastor with melted cheese in a flour tortilla. [MEDIUM]
- **Scale**: 10 cm tortillas; a trompo roughly 40–60 cm tall.
  [LOW-MEDIUM for the trompo]
- **Texture & finish**: see TEXTURE LEXICON — brick-red, thin, charred
  crisp edges; pineapple glossy pale yellow with browned edges.
- **Staging**: three or four tacos on a bagged plate at a stand counter;
  the trompo glowing out of focus behind. The trompo's vertical grill is
  distinctive — keep it soft so it reads as al pastor, not a kebab shop.
- **Model failure**: gyro/shawarma in pita; chicken; big pineapple chunks
  as the main filling.
- **Sources**: [Infobae — origen de los tacos al pastor](https://www.infobae.com/america/mexico/2022/01/21/cual-es-el-origen-de-los-tacos-al-pastor/);
  [Recetas Mexas — tacos al pastor](https://recetasmexas.com/es-us/guia/tacos-al-pastor).
- **Composition & proportions (§4.7)** — one order of three.
  - **What dominates**: per taco, **~30–40 g of shaved meat** heaped in a
    loose strip down two stacked 10 cm tortillas, covering about
    two-thirds of the top tortilla; **one** thumbnail-size sliver of
    pineapple (~2 cm) per taco — an accent, not a filling. [MEDIUM for
    meat weight — Infobae, taquería portion guides; pineapple EDITORIAL]
  - **Garnish**: a pinch of onion-cilantro per taco; one streak of salsa;
    2 lime wedges on the plate rim.
  - **Prompt-ready line**: "Three small soft corn tacos side by side on a
    plastic plate in a clear bag, each on two stacked corn tortillas
    about one and a half times the can's width. On each, a loose strip
    of thin shaved brick-red pork with crisp charred edges covers most
    of the tortilla, with one small sliver of golden pineapple, a pinch
    of finely chopped white onion and cilantro and a streak of green
    salsa. Two lime wedges on the rim. No cheese, no lettuce."

#### Tacos de canasta and the guajolota (zone 4)

- **Tacos de canasta**: small tacos (11–12 cm tortillas) filled with
  potato, chicharrón, frijoles or adobo, bathed in oil and packed hot into
  a cloth-lined basket so they steam and soften; carried by bicycle in a
  basket lined with blue plastic, sauces in containers alongside. Glossy,
  soft, slightly translucent, orange-stained tortillas, pressed flat. [HIGH
  — Wikipedia (via search)]
- **Guajolota (torta de tamal)**: a steamed tamal (verde, rojo or rajas)
  inside a bolillo or telera, sold from tamal carts in Mexico City and the
  State of Mexico, morning and evening. Bread soft, tamal visible as a
  pale thick layer in the cross-section. [HIGH — Wikipedia (via search),
  Infobae, Chilango]
- **Staging**: canasta tacos three to a small plate or on paper;
  guajolota on its paper beside the cart's steaming pot, never in hand.
- **Composition & proportions (§4.7)**.
  - **Canasta**: 3–5 small tacos per plate, folded flat, slightly
    overlapping, glossy; the filling a thin (~5 mm) layer inside, not
    visible except at the fold; a spoon of salsa and pickled chiles on the
    side. **Guajolota**: the tamal fills the bread almost end to end;
    bread ~40% and tamal ~60% of the cut-face height. [EDITORIAL]
  - **Prompt-ready line (canasta)**: "Four small, soft, folded corn tacos
    pressed flat and glossy with oil, their tortillas stained orange,
    overlapping on a small plate with a spoonful of green salsa."

#### Chiles en nogada (zone 4, Puebla; seasonal)

- **Category**: Special-occasion, seasonal (July–September, peak August
  and Fiestas Patrias).
- **Form**: a roasted poblano stuffed with picadillo (meat with fruit —
  apple, pear, peach, plantain — and nuts), covered with **nogada**
  (a white walnut-cream sauce), scattered with **pomegranate seeds** and
  **parsley** — green, white and red, the flag's colours. [HIGH]
- **Variants (§4.6)**: **capeado** (egg-battered and fried) vs. **sin
  capear** (bare roasted chile) — a genuine, recurring debate; tradition
  sources favour capeado. **Default when unspecified**: capeado. [HIGH
  that the debate is real — Milenio, Tagers; default EDITORIAL]
- **Vessel & scale**: one chile per plate, ~15–18 cm long, on a 26–28 cm
  plate, nogada pooled to cover the chile and spread onto the plate.
  [LOW-MEDIUM for chile size]
- **Texture & finish**: nogada thick, matte ivory, smooth; pomegranate
  seeds glossy, jewel-red, translucent; parsley leaves bright green.
  Served at room temperature — no steam.
- **Model failure**: a red-sauced chile relleno; cream sauce with
  cranberries or cherries; pomegranate halves.
- **Sources**: [Milenio — temporada de chiles en nogada](https://www.milenio.com/consejos/temporada-chiles-en-nogada-cuando-empieza-termina);
  [N+ — temporada en Puebla](https://www.nmas.com.mx/cultura/asi-se-preparan-en-puebla-para-la-temporada-de-chiles-en-nogada/).
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: **the white nogada**, which covers the whole
    chile and ~60–70% of the plate; pomegranate seeds are scattered
    (~30–50 seeds, not a heap), with 3–5 flat parsley leaves; the chile's
    green shows only at its stem end. [EDITORIAL]
  - **Absent on purpose**: red sauce, rice mounds on top, cheese.
  - **Prompt-ready line**: "One large stuffed green poblano chile, about
    one and a half times the can's length, entirely covered in a smooth,
    thick ivory walnut sauce that spreads across most of the white plate,
    scattered with glossy jewel-red pomegranate seeds and a few flat
    green parsley leaves; only the green stem end shows."

#### Moles (zone 4 Puebla; zone 6 Oaxaca authoritative)

- **Form-changing / coexisting (§4.3, §4.6)**:
  - **Mole poblano** (Puebla): dark, near-black-brown with an oily sheen;
    ancho, mulato, pasilla, chipotle, chocolate, almonds, raisins, sesame
    and fried bread; served over turkey or chicken, **dusted with toasted
    sesame seeds**, with arroz rojo. [HIGH]
  - **Oaxaca's seven moles**: **negro** (the darkest, from toasted
    chilhuacle and other chiles, up to ~34 ingredients), **rojo**,
    **coloradito** (sweet-savoury, brick red), **amarillo** (golden
    orange, no chocolate, hoja santa), **verde**, **chichilo**,
    **estofado**. [HIGH]
  **Default when unspecified**: mole poblano with chicken. [EDITORIAL]
- **Vessel & scale**: a chicken piece or two under mole on a 26–28 cm
  plate, the sauce covering most of the plate's centre; or in a clay
  cazuela at a fiesta.
- **Texture & finish**: thick, glossy, clinging; oil beads at the edges;
  sesame seeds pale gold against the dark sauce.
- **Model failure**: brown gravy; chocolate dessert sauce; an Indian curry.
- **Sources**: [Gastronosfera — moles mexicanos](https://www.gastronosfera.com/tendencias/moles-mexicanos-historia-variedades-y-recetas-tradicionales);
  [Rutopía — los siete moles de Oaxaca](https://www.rutopia.com/es/articulo/sabores-de-oaxaca-y-sus-siete-diferentes-moles).
- **Composition & proportions (§4.7)** — mole con pollo.
  - **What dominates**: **the sauce**: mole covers the chicken (one leg
    or thigh-and-leg, or a breast piece) completely and floods ~60% of
    the plate; sesame seeds a light sprinkle (~a teaspoon); rice a small
    mound at one edge; tortillas in a basket. [EDITORIAL]
  - **Absent on purpose**: visible bare chicken skin, herbs, cream.
  - **Prompt-ready line (poblano)**: "A piece of chicken completely
    covered in thick, glossy, near-black mole sauce that floods most of
    the plate, lightly sprinkled with pale toasted sesame seeds, a small
    mound of orange-red rice at the edge."

#### Barbacoa (zone 4, Hidalgo; Sunday)

- **Form**: lamb (borrego) wrapped in **maguey leaves** and pit-cooked
  overnight Saturday into Sunday; a copper pot beneath catches the drippings
  to make **consomé** with chickpeas and rice. Served by weight with
  tortillas, salsa, onion, cilantro, lime, and a cup of consomé. [HIGH —
  Larousse Cocina, Entorno Turístico]
- **Staging**: Sunday morning-to-midday family meal at a market stand or
  barbacoa restaurant (lunch register is in scope; early-morning is Morning
  Module); tender shredded lamb glistening, a thick grey-green maguey leaf
  under it, consomé steaming in a clay bowl.
- **Model failure**: US barbecue; Texas beef barbacoa (a different thing).
- **Composition & proportions (§4.7)**.
  - **What dominates**: a heap of shredded and chunked lamb (~200–250 g)
    on a piece of maguey leaf or a plate; consomé in a separate bowl with
    a few chickpeas and rice grains visible; tortillas, salsa borracha
    kept out (contains pulque) — use a salsa roja; onion-cilantro and
    lime. [EDITORIAL]
  - **Prompt-ready line**: "A heap of tender, glistening shredded lamb on a
    thick grey-green agave leaf, a clay bowl of steaming broth with a few
    chickpeas beside it, warm corn tortillas, chopped onion and cilantro,
    lime wedges."

#### Cemita poblana (zone 4, compact)

A sesame-seed-topped round bun filled with milanesa, quesillo, avocado,
chipotle, and **pápalo** (a strong herb with broad leaves), in Puebla.
[MEDIUM — not individually re-searched]
- **Composition & proportions (§4.7)**: the cutlet overhangs the round
  bun slightly; string cheese in a visible nest (~2 cm), avocado slices,
  a few papalo leaves; filling ~half the height. [EDITORIAL]

#### Birria (zone 3 Jalisco; zone 2 Tijuana — two coexisting forms)

- **Coexisting variants (§4.6)**:
  - **Jalisco birria**: goat (chivo) or lamb slow-cooked in a dried-chile
    adobo, **served as a stew in a bowl with its consomé**, tortillas on the
    side, onion, cilantro, lime; a weekend and celebration dish. [HIGH]
  - **Tijuana-style tacos de birria / quesabirria**: **beef**, tortillas
    dipped in the red fat and griddled crisp and orange, filled with meat
    (and melted cheese for quesabirria), **a cup of consomé alongside for
    dipping**; emerged in Tijuana in the 2000s–2010s and spread nationally
    and to the US. [HIGH]
  **Default when unspecified**: Jalisco birria in a bowl in zone 3;
  quesabirria tacos in zone 2 or on the street elsewhere. [EDITORIAL]
- **Texture & finish**: consomé deep red with a floating slick of orange
  fat; tacos crisp, red-orange, glossy, with molten cheese at the edge.
- **Sources**: [Wikipedia — Birria / Quesabirria (via search)](https://en.wikipedia.org/wiki/Quesabirria);
  [Eat Your World — birria Tijuana](https://eatyourworld.com/destinations/mexico/baja-california/what-to-eat/tacos-de-birria-tijuana/).
- **Composition & proportions (§4.7)**.
  - **Jalisco bowl**: meat chunks (~3–5 cm) fill about half the bowl,
    consomé to ~1 cm below the rim; onion-cilantro and lime on the side;
    tortillas in a basket. **Quesabirria**: 3 tacos per plate, each
    folded, with ~40–50 g meat and melted cheese oozing at the edges; a
    ~250 mL cup of consomé topped with onion and cilantro beside them.
    [EDITORIAL]
  - **Prompt-ready line (quesabirria)**: "Three folded tacos with crisp,
    glossy red-orange tortillas, stuffed with shredded beef and melted
    white cheese oozing at the edges, next to a cup of deep red broth
    with an orange fat slick, topped with chopped onion and cilantro."

#### Torta ahogada (zone 3, Guadalajara)

- **Form**: a **birote salado** filled with carnitas (and often beans),
  **partly or fully submerged** in a thin tomato sauce, with a fierce chile
  de árbol sauce added to taste; topped with pickled or sliced onion,
  lime. Eaten with a spoon or by hand from a plate or bowl. [HIGH]
- **Origin note (background only)**: Guadalajara, 1920s folk tradition
  (Luis de la Torre); earliest documented stand 1959 in Barrio de San Juan
  de Dios. [MEDIUM — Wikipedia via search]
- **Vessel & scale**: a deep plate or shallow bowl, the ~15–20 cm roll
  sitting in a pool of red sauce reaching halfway or more up its sides.
- **Texture & finish**: hard, crackly, dark-golden birote crust that stays
  crisp above the sauce line; sauce thin, bright tomato-red; carnitas
  visible at the cut.
- **Model failure**: a soft bun gone soggy; a French dip.
- **Sources**: [Wikipedia — Torta ahogada (via search)](https://en.wikipedia.org/wiki/Torta_ahogada).
- **Composition & proportions (§4.7)**.
  - **What dominates**: the roll and the sauce: the sauce fills the plate
    to ~2–3 cm and reaches halfway up the roll; carnitas show at the cut
    as a ~2–3 cm layer; sliced onion (and lime) a small topping.
    [EDITORIAL]
  - **Prompt-ready line**: "A crusty, dark-golden hard roll, a little longer
    than the can, sitting in a shallow bowl of thin bright tomato-red
    sauce that reaches halfway up its sides, the cut end showing tender
    pork, topped with a few thin rings of pickled onion."

#### Carnitas (zone 3, Michoacán)

- **Form**: pork cooked for many hours in its own lard in a large **copper
  cazo** (Quiroga, Michoacán is the reference town); sold by the kilo with
  tortillas, salsa, onion, cilantro, pickled chiles, and chicharrón. [HIGH
  — Latino Detroit, Directo al Paladar]
- **Texture & finish**: see TEXTURE LEXICON; a mix of cuts — shredded
  maciza, crisp bronzed edges, glossy skin (cuerito).
- **Staging**: a heap on butcher paper or a plate, tortillas beside;
  the copper cazo glinting behind.
- **Model failure**: US pulled pork in barbecue sauce.
- **Composition & proportions (§4.7)** — tacos de carnitas or a plate.
  - **What dominates**: pork (~40–50 g per taco); crisp browned bits are
    ~20–30% of the meat, the rest tender and pale gold. A sold-by-the-kilo
    plate: a mound of mixed cuts on paper, tortillas in a stack beside.
    [MEDIUM for per-taco weight — taquería portion guides]
  - **Prompt-ready line**: "A mound of tender pork pieces, pale gold with
    crisp bronzed edges and glossy rendered fat, on brown butcher paper,
    a stack of warm corn tortillas, chopped onion and cilantro and a
    bowl of green salsa beside it."

#### Carne asada & flour tortillas (zone 1)

- **Form**: thin beef (arrachera/skirt, diezmillo, rib-eye) grilled over
  mesquite or charcoal, chopped or served in strips with **flour tortillas**
  (and corn), cebollitas, chiles toreados, guacamole, salsa, frijoles
  charros; a weekend social institution in Sonora, Chihuahua and Nuevo
  León. [HIGH — Recetas Mexas northern cuisine guide, Superprof]
- **Scale**: flour tortillas 20–30 cm everyday; Sonoran sobaqueras 30–60 cm,
  paper-thin and translucent, folded into quarters on the table. [HIGH for
  sobaqueras]
- **Staging**: a wooden board or platter on a folding table, the grill
  smoking softly behind.
- **Model failure**: a US steakhouse plate; fajita skillet.
- **Composition & proportions (§4.7)** — a shared board.
  - **What dominates**: sliced grilled beef (~60% of the board); 4–6
    grilled cebollitas and 3–4 blistered chiles as accents; flour tortillas
    folded in a cloth beside; guacamole and salsa in bowls. [EDITORIAL]
  - **Prompt-ready line**: "A wooden board of thin grilled beef with
    irregular charcoal char, sliced into strips, a few whole grilled
    spring onions and blistered green chiles, with a stack of large thin
    flour tortillas folded in a cloth beside it."

#### Burritos and machaca (zone 1, compact)

Burritos are a **northern** flour-tortilla form (Sonora, Chihuahua, Baja),
slim and usually one-filling — machaca (shredded dried beef) with egg,
frijoles, chile colorado, carne asada — **not** the fat, rice-stuffed US
Mission burrito. Outside zone 1, don't default to burritos. [MEDIUM-HIGH —
northern flour-tortilla sources; slimness MEDIUM, not individually
re-searched]
- **Composition & proportions (§4.7)**: slim — ~4–5 cm thick, the
  filling a single ingredient plus beans, the tortilla wrapping several
  times; 1–2 per plate, one cut to show the cross-section. [EDITORIAL]

#### Cabrito (zone 1, Nuevo León, compact)

Young goat roasted over charcoal on a stake (al pastor style) — the
special-occasion dish of Monterrey; served in portions with tortillas,
salsa and frijoles. Golden-brown, crisp skin, small bones. [HIGH for the
dish and its Nuevo León status]
- **Composition & proportions (§4.7)**: one portion is a leg or rib
  section (~200–300 g) on a plate, with tortillas, salsa and a small bowl
  of beans. [EDITORIAL]

#### Baja fish tacos (zone 2)

- **Form**: a **battered, deep-fried white fish** strip on a corn tortilla,
  topped with shredded cabbage, pico de gallo, a thin creamy white sauce
  (crema/mayonnaise-based) and lime; associated with Ensenada's fish market
  area; the batter technique is often credited to Japanese fishermen's
  tempura. [HIGH for the form and Ensenada association; MEDIUM for the
  Japanese-origin story]
- **Texture & finish**: batter pale-gold, puffy, crisp, irregular; cabbage
  crunchy white-green; sauce in a thin drizzle.
- **Staging**: two tacos on a small plate at a seaside stand; self-serve
  salsas.
- **Model failure**: grilled fish with mango salsa (a US restaurant take).
- **Composition & proportions (§4.7)** — two tacos.
  - **What dominates**: one battered fish strip (~10–12 cm, as long as
    the tortilla) per taco; cabbage a light handful; pico de gallo a
    spoon; sauce a thin drizzle. [EDITORIAL]
  - **Prompt-ready line**: "Two soft corn tacos, each holding one long
    strip of puffy, pale-golden battered white fish, topped with shredded
    cabbage, a spoon of chopped tomato-onion salsa and a thin drizzle of
    white creamy sauce, lime wedges beside."

#### Aguachile (zone 2, Sinaloa / Nayarit)

- **Form**: raw butterflied shrimp "cooked" briefly in lime juice with a
  blended fresh chile sauce (chiltepín traditionally in Sinaloa; serrano
  and cilantro in the green Nayarit style), topped with cucumber slices
  and red onion, sometimes avocado; served in a molcajete or on a flat
  plate, with tostadas. [HIGH — Excélsior, Cocina Delirante, Recetas Mexas]
- **Texture & finish**: shrimp translucent at the centre, opaque pink-white
  at the edges; sauce bright green (or red), thin and glossy; cucumber
  crisp and pale.
- **Model failure**: cooked cocktail shrimp; Peruvian ceviche with sweet
  potato and corn.
- **Composition & proportions (§4.7)**.
  - **What dominates**: 10–15 butterflied shrimp fanned in a single
    layer, half-submerged in the green chile-lime liquid; cucumber slices
    (8–10) and red onion slivers as accents on top; 2–3 tostadas beside.
    [EDITORIAL]
  - **Prompt-ready line**: "A flat plate of raw butterflied shrimp fanned
    in a single layer, translucent in the middle and pale pink at the
    edges, sitting in a thin bright green chile-lime sauce, topped with
    thin cucumber half-moons and slivers of red onion, crisp tostadas
    beside it."

#### Pescado zarandeado (zone 2, Nayarit)

A whole butterflied fish marinated in a chile-achiote-based paste and
grilled over charcoal in a hinged basket; charred, red-orange, served
flat on a platter with tortillas, salsa, cucumber and onion. [MEDIUM —
one source confirms; details not individually re-searched]
- **Composition & proportions (§4.7)**: one whole butterflied fish
  (~35–45 cm) fills a platter; tortillas, cucumber and onion on the side.
  [EDITORIAL]

#### Pescado a la veracruzana (zone 5)

A white fish (traditionally red snapper) baked or simmered in a tomato
sauce with green olives, capers, pickled güero chiles, onion and bay —
bright red sauce studded with olive green, on a platter with white rice.
[MEDIUM — not individually re-searched]
- **Composition & proportions (§4.7)**: the fish fillet (or whole fish)
  under a sauce that covers it; olives (6–10), capers and 2–3 güero
  chiles scattered on top; white rice a small mound beside. [EDITORIAL]

#### Tlayuda (zone 6, Oaxaca)

- **Form**: a **very large (≥30 cm) corn tortilla** toasted on the comal
  until semi-crisp and brittle, spread with **asiento** (unrefined pork
  lard with crackling bits), black refried beans, **quesillo** pulled into
  ribbons, cabbage, tomato, avocado, and a meat — **tasajo** (thin salted
  dried beef), cecina enchilada (chile-rubbed pork) or chorizo; served
  open-faced or folded in half; Zapotec origin. [HIGH]
- **Staging**: open-faced on a large plate or directly on a paper-lined
  tray, the edges overhanging; tasajo strips laid across the top.
- **Texture & finish**: tortilla matte, pale, charred in spots, cracked
  at the edge; quesillo white and stringy.
- **Model failure**: a pizza; a Tex-Mex tostada; a flour tortilla.
- **Sources**: [Recetas Mexas — tlayuda](https://recetasmexas.com/guia/tlayuda);
  [El Independiente — el asiento de las tlayudas](https://elindependiente.mx/estados/2025/10/29/oaxaca-y-su-secreto-mejor-guardado-el-asiento-de-las-tlayudas/).
- **Composition & proportions (§4.7)**.
  - **What dominates**: the huge tortilla; toppings cover it to ~2 cm
    from the edge: a thin dark bean layer, quesillo in loose white
    ribbons (~30% coverage), shredded cabbage, 2–3 tomato and avocado
    slices, and **2–3 long thin tasajo strips laid across the top**
    rather than chopped meat all over. [EDITORIAL]
  - **Prompt-ready line**: "An enormous round, semi-crisp corn tortilla,
    about two and a half cans across, charred in spots, spread with a
    thin layer of black beans and loose white ribbons of string cheese,
    shredded cabbage, a few slices of tomato and avocado, with two long
    thin strips of grilled dried beef laid across it."

#### Cochinita pibil (zone 7)

- **Form**: pork marinated in **achiote** and sour orange, wrapped in
  banana leaves and traditionally cooked in an underground pit (pib);
  shredded, deep red-orange, juicy; served in tacos, tortas, panuchos or
  salbutes, always with **pickled red onion** (in sour orange, with
  habanero). [HIGH]
- **Texture & finish**: tender shreds glistening with orange juices; red
  onion strands a vivid magenta-pink, translucent; banana leaf edges
  under the meat.
- **Model failure**: US pulled pork; carnitas (pale gold, not orange-red).
- **Sources**: [Larousse Cocina — cochinita pibil](https://laroussecocina.mx/receta/cochinita-pibil/);
  [Wikipedia — Cochinita pibil (via search)](https://en.wikipedia.org/wiki/Cochinita_pibil).
- **Composition & proportions (§4.7)** — tacos de cochinita.
  - **What dominates**: shredded orange-red pork (~40–50 g per taco) with
    **pickled red onion as a generous magenta topping** (~1/4 of the
    visible taco) — the one garnish that always appears; habanero salsa
    on the side. [EDITORIAL]
  - **Prompt-ready line**: "Three soft corn tacos filled with shredded,
    juicy orange-red pork, each topped with a generous tangle of thin
    translucent magenta pickled red onion, on a plate lined with a piece
    of banana leaf, a small bowl of orange habanero salsa beside."

#### Panuchos and salbutes (zone 7)

- **Panucho**: a small fried tortilla **stuffed with refried black beans**
  (puffed and filled), topped with shredded turkey or chicken (or
  cochinita), lettuce or cabbage, tomato, pickled onion, avocado.
  **Salbute**: a puffy fried tortilla **without the bean filling**, softer,
  topped the same way. The bean layer is the visual difference. [HIGH]
- **Scale**: ~10–12 cm each, three or four to a plate. [LOW-MEDIUM]
- **Sources**: [Imperial Las Perlas — panuchos y salbutes](https://imperialperlas.com/blog/gastronomia-de-yucatan-cochinita-panuchos-y-salbutes-explicados/).
- **Composition & proportions (§4.7)**: 3–4 per plate; toppings cover
  the tortilla: a small heap of shredded poultry, a pinch of lettuce, one
  tomato slice, one avocado slice, pickled onion; on panuchos the black
  bean layer shows at the torn edge. [EDITORIAL]

#### Sopa de lima, poc chuc, papadzules (zone 7, compact)

- **Sopa de lima**: clear chicken broth with shredded chicken, fried
  tortilla strips and slices of the local lima (a sweet-aromatic lime).
- **Poc chuc**: thin citrus-marinated pork grilled over charcoal, with
  pickled onion, charred tomato salsa, black beans.
- **Papadzules**: tortillas rolled around chopped egg, bathed in a pale
  green pumpkin-seed sauce and topped with tomato sauce.
[MEDIUM — not individually re-searched]
- **Composition & proportions (§4.7)**: sopa de lima — clear broth to
  near the rim, shredded chicken, a nest of tortilla strips, 1–2 lima
  slices floating; poc chuc — sliced pork taking half the plate with
  pickled onion, charred tomato salsa and beans; papadzules — 3–4 rolls
  under pale green sauce with a stripe of red tomato sauce. [EDITORIAL]

### C. Sweets (compact)

- **Pan dulce** — conchas (crackled sugar-shell top), cuernos, orejas,
  sold from open trays with tongs. [MEDIUM]
- **Rosca de Reyes** — oval ring of sweet bread, candied fig/quince strips,
  sugar-paste stripes; 6 January. [HIGH]
- **Pan de muerto** — round sweet bread with bone-shaped dough crosses,
  sugar-dusted (Centre); pan de yema in Oaxaca; red-sugared breads in
  Puebla and Michoacán. [HIGH — see FESTIVALS sources]
- **Flan, arroz con leche, churros with chocolate, capirotada (Lent),
  paletas and raspados (ice pops and shaved ice)**. [MEDIUM]

### D. Snacks (compact)

Fruit cups with lime and chile powder (mango, jícama, cucumber, watermelon);
chicharrones de harina with hot sauce; esquites and elotes (above);
packaged snack bags — keep brands unbranded and blurred. [MEDIUM]

---

## EXAMPLE PROMPT LANGUAGE (illustrative — not validated by any image test)

**Street tacos al pastor, meal on the go, zone 4:**
> Eye-level photograph at a Mexico City street taco stand at night. On a
> stainless-steel counter: a plastic plate slipped inside a thin clear
> plastic bag, holding three small soft corn tacos, each on two stacked
> 10 cm corn tortillas (each tortilla about one and a half times the width
> of the can beside it), filled with thin shaved brick-red pork with
> charred crisp edges and a small sliver of pineapple, topped with finely
> chopped white onion and cilantro, a streak of loose green salsa; two lime
> wedges on the plate edge. No shredded cheese, no lettuce, no sour cream,
> no hard shells. Beside the plate: a Coca-Cola Original 355 ml returnable
> glass bottle, clear contoured glass showing the dark cola, cap off, not
> a plastic bottle, not Sin Azúcar. Behind, softly out of focus: a vertical
> spit of red-marinated pork glowing under a warm lamp, a coloured tarp,
> small bowls of onion and salsas. Neutral colour grading, no yellow or
> sepia cast. No legible text or signage anywhere; no other drinks; nothing
> held in a hand. Pack text will be composited in post.

**Family comida, 3 people, zone 4 home:**
> Midday light through a window with a wrought-iron grille in a Mexican
> family house. A dining table with a patterned plastic oilcloth. In the
> centre: an oval dish of four enchiladas verdes (corn tortillas soaked in
> loose tomatillo sauce, thin drizzles of white crema, crumbled dry white
> cheese, raw onion rings — not baked under melted yellow cheese), a
> bowl of black frijoles de olla, a mound of orange-red arroz rojo, a
> palm tortilla basket with an embroidered cloth folded over warm corn
> tortillas, and a grey volcanic-stone molcajete of red salsa. Three
> plates, forks. In the midground, a 2.5-litre Coca-Cola Original plastic
> bottle, and a filled plain glass of cola with ice at each place. No
> legible text, no other drinks, nothing held in a hand.

*Before use: run at least two generations per prompt
(`country-file-schema.md` §7.5), and apply this file's confidence tags.*

---

## GAP LOG

- **Composition & proportions blocks (added 2026-09-27, `country-file-schema.md`
  §4.7) are mostly editorial synthesis.** Piece sizes are sourced where
  tagged; counts and surface shares are reasoned from recipe quantities and
  serving norms, tagged [EDITORIAL], and should be checked against image
  tests — two or more generations per prompt-ready line — before being
  treated as reliable.

- **No Mexico-specific pack dimensions confirmed.** The 355 mL can uses the
  US figures as a stand-in; the 355 mL returnable glass bottle's ~20 cm
  height comes from a single tier-4 source; the 235 mL can, 500 mL glass,
  600 mL PET and 2.5 L returnable have no dimensions here. **An
  authoritative TCCC product-dimension/spec drop is already expected**
  (`coca-cola-guidelines.md` front-matter flag) — hold further searching
  on these until it lands, then add Mexico's formats there.
- **`coca-cola-guidelines.md` §4.3's "non-US market ⇒ 330 mL can" default
  does not fit Mexico** (a 355 mL market). Not edited here to keep the
  brand-file footprint minimal, as the Spain and South Africa builds did;
  flagged for that file's planned overhaul — the rule should probably read
  "non-North-American market".
- **Bottler map incomplete.** Coca-Cola FEMSA and Arca Continental are
  confirmed; smaller regional bottlers were not researched. No TCCC OU code
  confirmed.
- **No Mexico-specific leaving-home age or Gen Z housing statistic** was
  found or searched; the Gen Z lens is directional only.
- **Wikipedia pages could not be read directly** (egress proxy block);
  claims tagged "(via search)" rest on search-result snippets.
- **Sunset times, cutlery layout, frijoles colour geography, pan dulce and
  bread sizes, peltre plate size, cóctel glass size, trompo size** are
  model knowledge, not individually checked.
- **Many compact entries** (flautas, milanesa, chiles rellenos, sopa de
  tortilla, cemita, pescado a la veracruzana, zarandeado, sopa de lima/poc
  chuc/papadzules, sweets, snacks) would need full three-dimension entries
  if a brief leans on them.
- **Quesadilla cheese debate** is presented as a real, well-known debate
  without a dedicated source this pass.
- **Guerrero pozole garnish exception** (no lettuce/radish) — one source
  asserts it and another source hedges; left as MEDIUM with both options.
- **The Yucatán spinout recommendation** needs a human decision (§7).
- **Día de Muertos ofrenda rule** (never place the product on an ofrenda)
  is an editorial sensitivity call, not company policy — a reviewer
  should confirm it matches TCCC Mexico's own guidance.

- **Celebrations pass (2026-10-01) open items.** Headcounts for the
  children's birthday party, baptism/first-communion lunch, Fiestas
  Patrias and Nochebuena dinners are editorial, not sourced; the
  quinceañera range rests on one planning-industry source and the
  wedding average on one industry survey. The Nochebuena dish
  percentages are attributed to unnamed polling houses via Infobae. The
  wedding tornafiesta, rosca length and the children-in-frame rule need
  checking (the last against TCCC's own marketing-to-children policy).
- **Game-night pass (2026-10-01) open items.** Only the Zócalo fan-fest
  facts (HIGH) and the Canelo September weekend and lotería at posadas
  (MEDIUM) are sourced. Unverified [LOW]: the home botana spread for
  football, the fan-zone food menu, Liga MX kick-off times, the late-night
  main-event time for fights, dominoes as a family pastime, party
  karaoke, the NFL and F1 viewing registers and northern baseball.

- **Venue-profile pass, wave 1 (2026-10-01) open items.** Background
  details not verified this pass [LOW]: the dark-wood china cabinet
  (trinchador) and the cool-white ceiling fitting in the colonia house;
  zone variants for the house and the fonda (northern air-conditioning,
  Gulf and Yucatán fans and hammock hooks); the choricera griddle and
  bare-bulb lighting at taco stands; fabric draping, LED colour washes
  and the upscale chair styles at salones de eventos. Tarps, rented
  furniture and the salón furniture package rest on tier-3 vendor
  listings only. Check all five prompt-ready lines in image tests.

## CANDIDATE QUEUE

1. Reviewer decision on the Yucatán spinout and on the zone boundaries
   (Querétaro, Hidalgo, the Huasteca).
2. Once the TCCC spec drop lands: Mexico's 355 mL glass, 500 mL glass,
   600 mL PET, 235 mL can and 2.5 L returnable dimensions into
   `coca-cola-guidelines.md` §4.3, and the §4.3 330 mL rule reworded.
3. Image tests (two or more generations each), starting with tacos al
   pastor, enchiladas verdes, pozole rojo and tlayuda — the entries with
   the strongest sourcing and the most distinctive failure modes (hard
   shells, yellow cheese, yellow filter).
4. Promote compact entries to full entries as briefs need them; research
   zone 5 (Gulf) more deeply — it is the thinnest zone.
5. Independent §8 audit of this file.
6. A Mexico-specific Gen Z housing/living-arrangement source.
7. Full dish entries for the celebration centrepieces described only
   briefly in CELEBRATIONS & LARGE GATHERINGS: pambazo; pierna adobada /
   pierna al horno; bacalao a la vizcaína; romeritos con tortitas de
   camarón; pavo navideño; pastel de cumpleaños (tres leches) and
   gelatinas; promote Rosca de Reyes from the compact Sweets list.
8. Dish entries for game-night foods described only in GAME NIGHT:
   the botana spread (cacahuates japoneses, chicharrón, tostadas with
   toppings, papas with salsa) as one compact entry; buñuelos (posada
   sweet); promote chicharrones de harina from the compact Snacks list.

## RESEARCH LOG

- **2026-09-27, first pass (this file).** Built directly — no separate
  model-knowledge scaffold existed for Mexico. Approximately 35 WebSearch
  queries, prioritised by what a scene visibly depends on:
  - **Packs and brand**: Mexican Coca-Cola formats (355 mL and 500 mL
    returnable glass, 235/355 mL cans, 600 mL PET, 2.5 L returnable,
    1–3 L PET); cane-sugar reporting for glass; Coca-Cola México portfolio
    (Ciel, Topo Chico, Fresca, Sidral Mundet, Santa Clara, Del Valle,
    Joya); Topo Chico ready-to-drink cocktails; bottlers and per-capita
    consumption (Coca-Cola FEMSA SEC filings); IEPS 2026 rates; branded red
    furniture (Arca Continental); the batanga/charro negro; San Juan
    Chamula ritual use.
  - **Meal timing and housing**: comida/cena windows; INEGI 2020 dwelling
    classes (73.2% single house, 5.6% apartment).
  - **Scale**: tortilla numbering sizes (10/11–12/14/15–16 cm), sobaquera
    size (30–60 cm), tlayuda (≥30 cm), molcajete (18–20 cm), comal
    (30–60 cm), 355 mL glass bottle height (~20 cm, tier 4).
  - **Dishes**: al pastor origin and garnish; cochinita pibil; panuchos vs
    salbutes; pozole rojo/verde/blanco and jueves pozolero; chiles en
    nogada season and capeado debate; birria vs quesabirria; torta ahogada
    and birote; comida corrida; plastic-bag plates; peltre; moles (poblano
    and Oaxaca's seven); regional tamales; barbacoa and carnitas; Baja fish
    tacos; aguachile and zarandeado; telera vs bolillo, guajolota, tacos de
    canasta; Christmas, Reyes, Candelaria; Fiestas Patrias dinner; Día de
    Muertos ofrenda; the Hollywood "yellow filter".
- **Access limitation**: WebFetch of es.wikipedia.org was blocked by the
  network egress proxy; Wikipedia content was used only as it appeared in
  search snippets and is marked "(via search)".
- **Sources considered and down-weighted**: generic recipe blogs and SEO
  round-ups (tier 4) were used only for sizes where nothing better
  surfaced, and are marked; TikTok results were ignored.
- **No subagents were used.**
- **2026-10-01 celebrations pass (schema §5.7): 5 searches**, covering
  quinceañera guest counts and banquet menus, taquiza service for
  baptisms and children's parties, wedding guest averages and the
  three-course banquet norm, Nochebuena dishes and the Mitofsky family
  dinner figure, and the children's party table. Added CELEBRATIONS &
  LARGE GATHERINGS with 8 entries; sources are mostly tier 3 (planning
  and catering vendors) plus Infobae and UNAM Global, tagged accordingly.
- **2026-10-01 game-night pass (schema §5.8)**: built from the
  cross-market research notes (45 searches across all markets), 0 new
  searches. Added GAME NIGHT after CELEBRATIONS & LARGE GATHERINGS: three
  watch-party entries (football at home, fan-zone food court, Canelo
  fight night) plus a smaller-formats note, and two social game-night
  entries (lotería at a posada, family dominoes).
- **2026-10-01 venue-profile pass, wave 1 (schema §5.9): 5 profiles, 6
  searches.** Added VENUE PROFILES after the QUICK-REFERENCE table:
  colonia house kitchen-dining corner, patio/carport under a tarp, fonda
  (rewritten background-first from the pilot), street taco stand, and
  the salón de eventos. Sources are mostly tier 3 (rental and stand
  vendors) plus Grupo Animal and Homify; open items in GAP LOG.
