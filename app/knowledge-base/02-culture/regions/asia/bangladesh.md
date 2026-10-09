---
country: bangladesh
ou: Not confirmed. The internal TCCC operating-unit code was not searched or confirmed this pass (same standing caveat as every other started market, see `market-roadmap.md`). What this pass did confirm, and what **corrects the brief's framing**: Bangladesh's bottler is **Coca-Cola Bangladesh Beverages Ltd (CCBB)** — the company formerly known as **International Beverages Private Limited (IBPL)**, TCCC's wholly owned bottler — which **TCCC sold to Coca-Cola İçecek (CCI, Türkiye) for ~$130 million; the sale was completed on 20 February 2024** [HIGH — CCI's own news page, The Daily Star, The Financial Express, just-drinks all agree]. CCI therefore now bottles for Bangladesh, Pakistan and Türkiye. At the sale, CCBB had one bottling plant, three main warehouses, ~500 distributors, ~300,000 points of sale, and a reported **45.3% share of sparkling soft drinks in 2023** [MEDIUM — company-reported figure via The Daily Star / CCI]. A separate franchise bottler, **Abdul Monem Ltd**, has historically bottled Coca-Cola in the Dhaka area [LOW-MEDIUM — Abdul Monem's own page and a law-student case study via search; current status not confirmed].
status: DRAFT — NEEDS SME/HUMAN REVIEW. First pass, built directly with ~40 WebSearch queries on the load-bearing claims. Unchecked claims are tagged as such (see METHOD NOTE and GAP LOG).
research_method: Claude web research (WebSearch; direct page reads of Bangladeshi grocery retailers — Chaldal — were blocked by the network egress proxy, so pack-format claims rest on search-result snippets and are marked "(via search)", per `country-file-schema.md` §6). Structure follows `europe/turkey.md` and `latam/mexico.md` (single-file-with-zones); the Bengal overlap is cross-referenced with `asia/india.md` zone 8, not duplicated or contradicted.
date_drafted: 2026-10-01
---

# Bangladesh

## FILE ROLE & METHOD

This file is Bangladesh's country file: a single national staging brief
with six labeled internal zones. One TCCC hero beverage per scene (named by
the brief — see HERO PRODUCT SLOT), staged against real Bangladeshi dishes,
vessels and settings, with the full drinks landscape — cha (milk tea),
borhani, lassi, Rooh Afza and lemon sharbat at iftar, daab (green coconut)
— documented as context even where a drink is never itself staged.

**Scope.** Lunch (dupurer khabar — the main everyday rice meal), dinner
(raater khabar, late), the afternoon tea-and-snack hour (bikel-er nasta),
street food, iftar, and the Eid and Pohela Boishakh tables are in scope.
Breakfast (nasta) is covered only through a few dishes that are also
eaten as snacks (porota-bhaji, khichuri, pitha) — the project default
(§1.2). No beverage other than the hero TCCC product is staged; the others
are documented in ICONIC BEVERAGES.

**Relationship to `asia/india.md`.** Bengali cuisine is shared across the
border: India's zone 8 (East — Bengal & Odisha) covers West Bengal. This
file **cross-references** that zone's entries (Bengali fish meal,
shorshe ilish, puchka, rasgulla/mishti doi, Kolkata biryani) and does not
contradict them; where Bangladesh's form differs visibly, this file says
so explicitly. The two most important differences for staging: **(1)
beef is an ordinary, widely eaten meat in Bangladesh** (Muslim-majority)
whereas India's file gates it; **(2) Dhaka's biryani is the kacchi
(raw-marinated mutton, potato, no egg in the rice by default)**, not the
Kolkata biryani with potato *and* boiled egg. [EDITORIAL framing; the
underlying claims are tagged in their entries]

### Hard staging rules specific to Bangladesh (read before any scene)

1. **Halal table: no pork, ever.** Bangladesh is ~91% Muslim (2022
   census: Muslims ~91.0%, Hindus ~8.0%, Buddhists and Christians under
   1% each) [MEDIUM — census figures, not independently re-checked this
   pass]. Pork is effectively absent from mainstream food culture (it is
   eaten in some Christian and indigenous communities of the Chittagong
   Hill Tracts and the Garo hills — documented only, never staged)
   [MEDIUM — not independently re-checked]. No ham, bacon, pork sausage,
   pork ribs or pink cold cuts in any scene; no "char siu"-looking red
   meat. Beef, mutton (khashi — goat), chicken (murgi — including the
   tougher free-range deshi murgi), duck (hash) and fish are the meats.
   [EDITORIAL rule]
2. **No alcohol staged, ever.** Under the Narcotics Control Act 2018 and
   the Alcohol Control Rules 2022, alcohol is sold only to permit holders
   (Muslims need a doctor's prescription from an associate-professor-rank
   physician to obtain one) and served only in licensed hotel bars and
   clubs [HIGH — The Daily Star, Dhaka Tribune, New Age, Movendi]. Alcohol
   is socially invisible at an ordinary Bangladeshi table. No beer, wine,
   spirits, bar counters, hotel-bar settings, or toddy/tari (palm wine)
   pots in any scene; never a TCCC product as a mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5).
3. **Hindu households (~8%) avoid beef.** A brief that names a Hindu
   family, a Durga Puja or Pohela Boishakh-at-a-Hindu-home scene, or a
   Hindu sweet shop must carry **no beef** (fish, mutton/goat, chicken
   and vegetarian dishes are fine; some Vaishnav households are
   vegetarian). [MEDIUM — not independently re-checked; uncontested]
4. **Ramadan and Eid scenes are religious occasions.** No eating or
   drinking scene is set in Ramadan daytime. An iftar scene is set at
   the moment before sunset, the table full and **untouched**. **The hero
   product is never staged as the first thing that breaks the fast** —
   dates (khejur) and water or sharbat hold that role, and are kept out of
   the hero's immediate frame or out of frame. **This is an editorial
   sensitivity call, not a TCCC Bangladesh policy** — flagged for
   Fernando (see FESTIVALS, GAP LOG). Never stage the Eid ul-Adha
   sacrifice, live animals in the street, carcasses, blood or raw meat
   piles.
5. **Cha, borhani, lassi, Rooh Afza and daab are not staged beside the
   hero.** Each is a near-automatic companion in its setting (cha at
   every tong stall and afternoon table; borhani with every kacchi; red
   Rooh Afza or lemon sharbat at iftar). A model will add them unless
   told not to — negate them by name.
6. **General project rules**: no legible text anywhere (Bangla script
   shop signs, rickshaw art lettering, newspaper wrapping, cinema
   posters — all blurred to colour); nothing held in a hand; no drinks
   other than the hero; never a TCCC product as a mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5).

### Structural decision: one file, six zones (recommendation — reviewer has final say)

The `country-file-schema.md` §1.1 swap test, applied with the evidence
gathered this pass:

- **A national core travels.** Bhaat-maach-dal, bhorta, khichuri, morog
  polao, tehari, fuchka and chotpoti, singara and samosa, the iftar
  spread, pitha and mishti read correctly anywhere in the country
  [MEDIUM-HIGH — each is described as nationwide in the sources in its
  entry].
- **Some dishes are regionally owned and would look odd transplanted
  without a reason**: **mezbani beef and kala bhuna** are Chattogram's
  feast dishes [HIGH — Wikipedia "Mezban", "Kala Bhuna", The Daily Star,
  TBS]; **shatkora beef** is Sylheti [HIGH — Wikipedia "Satkara beef",
  Sylheti-cuisine sources]; **chui jhal** meat is the South-west's
  (Khulna, Jashore, Satkhira, Bagerhat) [HIGH — Dhaka Tribune, Wikipedia
  "Piper chaba"]; **kalai ruti** is Chapai Nawabganj–Rajshahi's [HIGH —
  The Daily Star, TBS, BSS]; **kacchi biryani** is Old Dhaka's signature,
  now national [HIGH].
- **Environment differs, but less than in Mexico or Türkiye.** The whole
  country is a flat, green, river delta (Sylhet's tea hills and the
  Chittagong Hill Tracts are the exceptions); what changes the picture is
  **city vs. village** and **Dhaka's density** far more than region.

**Recommendation: one national file, six zones**, handled as dish-variant
and environment deltas — not a US-style split. No spinout candidate is
flagged: no zone carries enough distinct dishes or architecture to justify
its own file at current usage. [EDITORIAL — reviewer decision, §7]

### Zones (one scheme, used throughout)

| # | Zone | Covers | Visual register |
|---|---|---|---|
| 1 | **Dhaka (metro)** | Dhaka city (Gulshan, Dhanmondi, Mirpur, Uttara, Mohammadpur), Narayanganj, Gazipur | Dense 6–10-storey residential blocks with grilled balconies, rooftop water tanks and potted plants, rickshaw-choked streets, flyovers and metro rail, tong tea stalls, fuchka carts, food courts and "kacchi houses" |
| 2 | **Old Dhaka (Puran Dhaka)** | Chawkbazar, Lalbagh, Nazira Bazar, Bangshal, Armanitola, Shankhari Bazar | Narrow lanes, older 2–4-storey brick buildings with wooden shutters and wrought-iron balconies, deg (biryani pots) on street-side burners, Chawkbazar iftar market; kacchi, tehari, bakarkhani, Nazira Bazar's beef, Shakrain kites (January) |
| 3 | **Chattogram (Chittagong) & the coast** | Chattogram city, Cox's Bazar, the Hill Tracts (Rangamati, Bandarban) | Port city on hills, the Karnaphuli river, the long Cox's Bazar beach; mezbani beef, kala bhuna, dried-fish (shutki) markets, sea fish and prawns; Hill Tracts' indigenous cuisines (bamboo-shoot, documented only) |
| 4 | **Sylhet** | Sylhet, Moulvibazar, Sreemangal, Habiganj, Sunamganj | Tea-garden hills (the national tea belt), haor wetlands, Londoni (British-Bangladeshi diaspora) villas; shatkora beef, akhni (rice-and-meat pulao), shutki and hutki shira, "seven-layer tea" (Sreemangal) |
| 5 | **Rajshahi & the North** | Rajshahi, Chapai Nawabganj, Bogura, Rangpur, Dinajpur | Drier, flatter, mango orchards, the Padma's sandbanks, silk; kalai ruti with bhorta and beef, Bogura doi (GI), mangoes (GI: Fazli, Langra, Ashwina), Kataribhog rice (GI, Dinajpur) |
| 6 | **The South: Khulna & Barishal** | Khulna, Jashore, Satkhira, Bagerhat, Barishal, Bhola, Patuakhali | Rivers, canals and boats everywhere, the Sundarbans edge, shrimp ponds (gher), coconut and betel palms; chui jhal meat, river fish, prawns (golda, bagda), and the ilish heartland (Chandpur in Dhaka division and the Meghna-Barishal river system) |

Zone boundaries are a staging convenience, not a claim about identity.
**Chandpur**, the country's best-known ilish town, sits administratively
in Chattogram division at the Padma–Meghna confluence; this file treats
ilish as national with a zone 6 / Chandpur emphasis. [EDITORIAL]

### Default when no zone is named

Fall back to **zone 1 (Dhaka) at the everyday register**: a middle-class
Dhaka flat's dining table, or a busy neighbourhood restaurant
("hotel" — the Bangladeshi word for a cheap eatery) or kacchi house.
Dhaka is the megacity where every regional cuisine is sold side by side.
[EDITORIAL fallback — not a sourced "most typical Bangladesh" claim; note
that ~68% of Bangladeshis live in rural areas (2022 census) [HIGH — BBS
via Dhaka Tribune], so a village default would be statistically defensible
— see ENVIRONMENT]

---

## METHOD NOTE (read first)

**Build method, this pass.** Drafted directly from model knowledge and
checked with about 40 WebSearch queries, prioritising the claims a scene
visibly depends on (pack formats and the bottler, housing, meal patterns,
signature-dish forms, festival dates, alcohol law, the hilsa ban). Tags
mean:

- **[HIGH] / [MEDIUM] / [LOW]** — schema §6 tags earned this pass (HIGH =
  2+ independent corroborating sources; MEDIUM = 1 credible source).
- **[… — not independently re-checked this pass]** — model knowledge that
  is uncontested general culinary or cultural knowledge but was not
  individually searched. Plausible, not verified.
- **[EDITORIAL]** — a judgment call (defaults, portion counts, surface
  shares, caricature-avoidance guidance), never a factual claim.
- **[HIGH — first-party test]** — this project's own image-generation
  findings (`coca-cola-guidelines.md` §1, `country-file-schema.md` §7.5).
  No Bangladesh-specific image tests have been run.
- **"(via search)"** — the source page itself was blocked by the egress
  proxy; the claim rests on the search-result snippet. All Chaldal pack
  listings were read this way.

**Writing principle.** Describe what the camera sees: the grain of the
rice, the mustard-oil sheen, the yellow of turmeric, the crackle of a
fried piyaju, the matte crumble of a bhorta, and real-world size.

**File-wide rules for every scene built from this file:**

1. **Text as atmosphere.** Bangla-script shop signs, rickshaw-art
   panels, cinema-style banners, menu boards, newspaper wrapping (street
   snacks are often served in paper cones — use plain unprinted paper),
   price cards and cooler lids appear only as heavily blurred, unreadable
   colour. Any readable letter, number or brand mark means reject or
   retouch. Blur instructions are known to fail [HIGH — first-party test;
   `country-file-schema.md` §7.5]. Dhaka street scenes carry an
   extremely strong prior toward dense signage — expect to fight it.
2. **The hero product is a TCCC beverage named by the brief** (HERO
   PRODUCT SLOT). Branding is composited in post
   (`coca-cola-guidelines.md` §1–2).
3. **No alcohol in any scene**, never a TCCC product as a mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5) (hard
   rule 2).
4. **No drinks in frame other than the hero product** unless the brief
   explicitly allows a named non-alcoholic companion. Name the likely
   intruders in the negative: small glass cups of milk tea, clay cups
   (bhar) of tea, steel tumblers of water, glasses of borhani or lassi,
   red Rooh Afza sharbat, a green coconut with a straw, water jugs (the
   steel or plastic water jug, jug-glass, sits on nearly every table).
5. **Nothing held in a hand.** Fuchka, jhalmuri and singara rest on a
   plate, leaf or counter (`country-file-schema.md` §7.5) — note that
   eating rice with the right hand is the real norm (GENERAL NORMS), so
   scenes show the meal laid out before or between bites, never a hand
   in the rice.
6. **Halal only** (hard rule 1). No pork in any form; no beef in a
   Hindu-household scene (hard rule 3).

---

## QUICK-REFERENCE: GENERIC SCENE REGISTERS

| Generic scene type | What to draw on |
|---|---|
| **Home rice meal (bhaat)** | Dining table in a flat (or a mat on the floor in a village), each person with a large steel or melamine/white ceramic plate, a big bowl of white rice with a serving spoon, small bowls of dal, a bhorta or two, a vegetable, and a fish or meat curry in the centre; a steel water jug and glasses (exclude them). All dishes on the table at once. |
| **Kacchi house / biryani restaurant** | Big aluminium or copper **deg** pots with sealed lids on a counter or near the door; plates of kacchi with a mutton piece and a potato on top; a small salad of cucumber, onion and green chilli; a glass of borhani (exclude). Tiled walls, fans, steel chairs. |
| **"Hotel" (cheap neighbourhood eatery)** | Formica or steel-topped tables, plastic chairs, a glass display box of fried snacks at the front (singara, samosa, puri, porota), rice-and-curry by the plate, a washbasin on the wall. |
| **Tong (tea stall)** | A tiny wooden or tin shack with a bench, a kettle on a kerosene/gas burner, glass jars of biscuits and cake, bananas hanging, small glass cups of milk tea. A huge part of street life — but the cha is the intruder; stage only snacks with the hero. |
| **Fuchka-chotpoti stand** | A wheeled cart or a small stall with a glass box of puffed round puri shells, a pot of warm chotpoti (yellow peas), bowls of tamarind water, plastic stools, melamine plates. |
| **Iftar table** | Many small piles on plates and a big platter: dates, piyaju, beguni, alur chop, chola, muri, jilapi, haleem, fruit; laid out before sunset, untouched. See FESTIVALS. |
| **Village courtyard (uthan)** | A packed-earth courtyard ringed by tin-roofed houses, banana and betel palms, a pond beyond; a low wooden stool, a pati (woven mat), food in aluminium or clay pots. |

Full background-first profiles for the main venues: see VENUE PROFILES below.

## VENUE PROFILES

Per `country-file-schema.md` §5.9 (background-first). The register table
above stays as the index. Heading levels follow CELEBRATIONS & LARGE
GATHERINGS (`##` section, `###` entries). The **hard staging rules** at
the top of the file apply to every profile, above all: no cha, borhani,
lassi, Rooh Afza, daab, sharbat or water jug beside the hero (rule 5); no
legible Bangla script (rule 6). **The Ramadan/iftar staging rule stays
open**; no profile is set at iftar.

Wave 1: the Dhaka flat's drawing-dining room, the Dhaka rooftop
(chhad), the kacchi house, the fuchka-chotpoti stand, and the
community-centre wedding hall. The neighbourhood "hotel", the tong, the
village courtyard (uthan) and the Chinese-Bangla restaurant are left for
a later wave.

### Venue: Dhaka flat drawing-dining room (drawing-dining; "dining")
- **Use for:** home indoor; casual lunch for 1–3, the late family dinner
  for 3–5, Friday lunch, Eid lunch, dawats, cricket at home, carrom and
  ludo. The default home interior for a Dhaka brief (the file's fallback
  zone); a village homestead is the statistical majority (see variants).
  [MEDIUM — Dhaka renting and flat living per ENVIRONMENT; living and
  dining combined in about 90% of small Dhaka flat layouts (Oakwood
  Craft BD, a design firm, tier 3)]
- **Soft background (the core):**
  - *Back wall:* painted plaster in white, off-white, pale blue, mint or
    cream, sometimes scuffed at chair height; a **showcase cabinet**
    (glass-fronted wooden display unit) with crockery, glass sets and
    souvenirs as a tall dark box with glints; a wall clock; curtains with
    a **pelmet** over the window. [MEDIUM — showcase units, curtain and
    pelmet, sofa set and centre table listed as traditional
    drawing-room elements (Interior Ace BD); showcase per ENVIRONMENT]
  - *Middle distance:* the **dining table pushed against a wall** with
    plastic or wooden chairs; a **refrigerator** standing in the dining
    area; a **wall-mounted washbasin** with a small mirror near the table
    for hand-washing; through the open plan, a **sofa set** and centre
    table with a TV on a wooden cabinet. [MEDIUM — ENVIRONMENT interior
    markers, not independently re-checked; uncontested]
  - *Light:* daylight through **window grilles** (every window), often
    patterned iron, casting a grid; the **ceiling fan** always turning;
    dinner (~21:00–22:00): warm white LED or a cool **tube light**
    (both real; warm reads better, per the dinner scenario). Monsoon:
    grey, soft, wet light. [MEDIUM — ENVIRONMENT]
  - *Palette:* white or speckled floor tiles, pale walls, dark wood
    furniture, a printed or plastic table cover in bright pattern.
  - *Signature shapes (3–5):* the window grille's pattern against
    light; the ceiling fan; the showcase cabinet; a fridge beside the
    table; the washbasin with a mirror.
  - *Density and wear:* crowded and lived-in: furniture close together,
    a fitted plastic table cover, a fruit bowl, a calendar (blank blur).
  - *People cues:* family members in salwar kameez, saree, panjabi or
    lungi at home, soft, within the limit.
- **Shell:** a flat in a 6–10-storey walk-up or lift block; **white or
  speckled ceramic floor tiles** (or mosaic in older buildings); low
  plastered ceilings; grilled windows and a small grilled balcony with
  potted plants. [MEDIUM — ENVIRONMENT; Dhaka zone register]
- **The table as set here:** a fitted **plastic or printed table cover**;
  each person with a large **steel, melamine or white ceramic plate**; a
  big bowl of white rice with a serving spoon; small bowls of dal, bhorta
  and a vegetable; a fish or meat curry in the centre; a green chilli and
  lemon wedge on the plate edge; all dishes at once. (The steel water jug
  and glasses are real and always excluded.) [MEDIUM — Home rice meal
  register]
- **Subregional variants and the national default:** national default
  for a Dhaka or city brief: a middle-class flat's drawing-dining room
  as above. **No-city brief:** a village homestead is defensible (~68%
  rural, 58.8% kancha houses): a tin-walled room or the uthan on a pati
  mat (village register; a later-wave profile). Old Dhaka: an older
  building with higher ceilings, wooden shutters and an iron balcony.
  Sylhet: Londoni villas with larger, newer rooms. Hindu household
  (Durga Puja, Boishakh): no beef on the table; a puja shelf is never
  near the product. [EDITORIAL]
- **Hallucination traps:** generic "India" (diyas, rangoli, a thali on
  a banana leaf, naan, butter chicken, copper karahis); a Kolkata
  colonial interior with red-oxide floors as the default; a Gulf
  marble palace; disaster or slum framing; prayer mats or Qur'an stands
  near the food.
- **Never stage:** cha, borhani, Rooh Afza, sharbat, the water jug or
  glasses beside the hero; legible Bangla text on calendars, packaging
  or screens; alcohol; pork; brand marks; a full flag.
- **Prompt-ready line:** "A Dhaka flat's drawing-dining room in soft
  focus: pale painted walls and white floor tiles, a ceiling fan turning,
  a glass-fronted showcase cabinet and a fridge beside the table, and
  daylight through a patterned iron window grille."
- **Confidence and sources:** MEDIUM (ENVIRONMENT markers; Interior Ace
  BD, Oakwood Craft BD design firms); colours editorial. 1 search this
  pass.

### Venue: Dhaka rooftop (chhad; chhad-er bagan)
- **Use for:** home outdoor; rooftop BBQ parties, winter evenings, Eid and
  birthday gatherings, the World Cup football watch party on the roof;
  1, 2 or a small group of settings inside a gathering of 6–30. The real
  outdoor space of a Dhaka flat. [MEDIUM — rooftop BBQ parties and
  rooftop gardens in Dhaka (The Daily Star "Planning a rooftop BBQ?" and
  rooftop-gardening features)]
- **Soft background (the core):**
  - *Back wall:* the roof **parapet** (plastered, white or grey with damp
    stains), **potted plants and rooftop-garden tubs** (bougainvillea,
    chilli, lemon, papaya, drum planters), the **water tank** and the
    stair-head room; **laundry lines** (taken down for guests or soft at
    the edge). [MEDIUM — rooftops used for water tanks, drying clothes and
    gardens (The Daily Star; rooftop garden studies)]
  - *Middle distance:* neighbouring blocks at different heights, their
    own tanks, potted plants and **tangled cables**; a charcoal grill with
    chicken and kebab; plastic chairs; a projector or TV on a table for a
    match night (soft glow). [LOW-MEDIUM — ENVIRONMENT exterior markers]
  - *Light:* evening is the signature: **fairy lights** strung along the
    parapet, a bulb by the stair door, the grill's glow, and the city's
    lit windows and the haze of Dhaka's sky beyond; winter afternoon:
    soft, hazy, smoggy gold. [EDITORIAL]
  - *Palette:* dusk blue and grey haze, warm bulb gold, plant green,
    terracotta pots, white and grey concrete.
  - *Signature shapes (3–5):* potted plants along the parapet; the water
    tank; neighbouring blocks with lit windows; a string of fairy lights;
    the grill's smoke.
  - *Density and wear:* weathered concrete, plants crowded, practical.
  - *People cues:* relatives and neighbours as soft shapes, within the
    limit; no identifiable children.
- **Shell:** the flat concrete roof of a 6–10-storey block, shared by the
  building's residents. [MEDIUM]
- **The table as set here:** a folding or plastic table with a cloth, or a
  mat; BBQ chicken, kebab, naan or paratha, salad (cucumber, onion,
  tomato); melamine or disposable plates; plastic chairs. [LOW-MEDIUM]
- **Subregional variants and the national default:** national default
  when nothing is named: a Dhaka residential-block roof at dusk with
  plants, fairy lights and a grill. Chattogram: hills and the port as
  haze beyond. Village equivalent: the **uthan** courtyard (register;
  later wave). Monsoon (June–Sept): wet surfaces, heavy sky; prefer
  winter.
- **Hallucination traps:** a luxury hotel rooftop bar with cocktails; a
  New York rooftop with skyline icons; Indian Diwali diyas; a slum
  skyline; kite festival scenes as default (Shakrain is an Old Dhaka
  January event).
- **Never stage:** cha or borhani beside the hero; legible signage on
  neighbouring buildings; alcohol; minarets near the product (distant
  blur at most); identifiable children.
- **Prompt-ready line:** "A Dhaka apartment rooftop at dusk in soft
  focus: potted plants along a weathered parapet, a water tank and a
  string of warm fairy lights, smoke from a charcoal grill, and
  neighbouring blocks with lit windows in the hazy sky beyond."
- **Confidence and sources:** MEDIUM (The Daily Star; rooftop garden
  studies); colours and set dressing editorial. 1 search this pass.

### Venue: Kacchi house (kacchi biryani restaurant; kacchi ghor)
- **Use for:** restaurant, indoor; lunch and dinner, 1 person (Away
  from home 1) or 2–3; the default casual sit-down eat-out for a Dhaka
  brief. [MEDIUM — register; TBS and Bangladesh Post best-kacchi
  features name the format; interiors not described]
- **Soft background (the core):**
  - *Back wall and counter:* big **aluminium or copper deg pots** with
    sealed lids on a counter or near the door, a cook lifting a lid or
    serving with a wide flat ladle; the steaming rice and meat as pale
    gold and brown; behind, **tiled walls** (white or patterned). [MEDIUM
    — register; specific decor LOW — not described in sources found]
  - *Middle distance:* rows of **steel or plastic chairs** and tables,
    other diners eating with the right hand, **ceiling and wall fans**, a
    washbasin on the wall, a cash counter; small and congested in Old
    Dhaka originals, larger and air-conditioned in newer chains (keep the
    chain look generic). [MEDIUM — Old Dhaka shops described as small and
    congested (TBS); fans and tiles per register]
  - *Light:* bright tube or LED light, the street's daylight at the
    door; steam rising from the deg. [EDITORIAL]
  - *Palette:* aluminium and copper, saffron-gold rice, white tile, steel.
  - *Signature shapes (3–5):* the round deg with its lid; steam; rows of
    steel chairs; a wall fan; the washbasin.
  - *Density and wear:* busy, well-used, clean enough; older places
    crowded and worn.
  - *People cues:* the cook and diners as soft shapes, within the limit.
- **Shell:** a street-front room in a busy lane or market, sometimes with
  an upstairs dining room. [LOW-MEDIUM]
- **The table as set here:** a steel-topped or laminate table; a plate
  of kacchi with a mutton piece and a potato on top, a small salad of
  cucumber, onion and green chilli; a steel plate or white ceramic;
  sometimes a jali kebab or chicken roast on a side plate. **No borhani**
  (it is always served; always excluded). [MEDIUM — register]
- **Subregional variants and the national default:** national default
  when nothing is named: a Dhaka kacchi house with degs at the front,
  tiled walls and steel chairs. Old Dhaka (zone 2, authoritative for
  biryani): smaller, older, crowded rooms; tehari and Haji-style
  shops. Chattogram: mezbani beef restaurants instead. Sylhet: akhni.
- **Hallucination traps:** a Hyderabadi or Lucknowi Indian biryani
  restaurant look; a UK "Indian" curry house with tablecloths and wine;
  orientalist brass lanterns; a dum seal of dough shown as a Moroccan
  tagine.
- **Never stage:** borhani, cha or water jugs beside the hero; legible
  Bangla signage or menus; alcohol; brand marks.
- **Prompt-ready line:** "A busy Dhaka kacchi house in soft focus: big
  copper and aluminium deg pots steaming by the door, a cook lifting a
  lid, white tiled walls, rows of steel chairs and a wall fan under bright
  light."
- **Confidence and sources:** MEDIUM for the format (register; TBS,
  Bangladesh Post); interior decor LOW (no source described it). 1 search
  this pass.

### Venue: Fuchka-chotpoti stand (fuchka stall; fuchkawala)
- **Use for:** on-the-go or "other", outdoor; late afternoon and evening
  snacks, 1 person or friends (Away from home 2–3); the default street
  venue (the tong is chai-led and excluded beside the hero). [HIGH for
  fuchka as Dhaka's king of street food — TBS, Visit Bangladesh; stall
  clusters by Dhanmondi Lake 15:00–22:00 (ratekom guide, tier 3)]
- **Soft background (the core):**
  - *Back wall:* the evening street or lakeside: trees, a railing, lit
    stalls in a row, a few **cycle-rickshaws** with painted panels as
    colour (text blurred), green **CNG auto-rickshaws** as shapes, street
    lamps. [MEDIUM — Dhaka zone register; Dhanmondi lakeside stalls]
  - *Middle distance:* the **cart or small stall**: a **glass box
    stacked with puffed round fuchka shells**, a pot of warm chotpoti
    (yellow peas), bowls of tamarind water, a bowl of grated egg, the
    fuchkawala cracking shells; **plastic stools** and a low table.
    [HIGH — register; TBS]
  - *Light:* golden late afternoon or evening: a **bare bulb or LED tube**
    on the cart, other stalls' lights as bokeh, rickshaw reflectors.
    [EDITORIAL]
  - *Palette:* the pale gold of shells, yellow peas, tamarind brown, the
    blues and reds of plastic stools and plates, painted rickshaw colour.
  - *Signature shapes (3–5):* the glass box of round shells; plastic
    stools; a hanging bulb; rickshaws passing; a row of lit stalls.
  - *Density and wear:* busy, cheerful, worn carts, clean plates.
  - *People cues:* the vendor and a few customers, soft, within the
    limit; students and couples are typical.
- **Shell:** a pavement, lakeside walk or campus edge; the cart on
  wheels or a fixed stall with a small awning.
- **The table as set here:** a **melamine plate** of cracked fuchka
  filled with pea-and-potato mash and grated egg, with a small bowl of
  tamarind water; or a bowl of chotpoti; plastic stools at the frame
  edge. [HIGH for the food form — street-food sources]
- **Subregional variants and the national default:** national default
  when nothing is named: a Dhaka fuchka cart by a lake or campus in the
  evening. Bailey Road and Dhanmondi: fixed stalls and small shops with
  seating. Chattogram and Sylhet: the same form. Winter: pitha stalls
  beside it (bhapa pitha steam).
- **Hallucination traps:** Indian pani puri (Mumbai) or Kolkata puchka
  served one at a time with no egg; a Western food truck; newspaper
  wrapping (legible); slum or flood framing; the Cox's Bazar beach as a
  default.
- **Never stage:** cha or tamarind water poured into a glass beside the
  hero (the small bowl is part of the dish, kept beside the plate);
  legible rickshaw art, cart signs or Bangla script; newspaper; alcohol.
- **Prompt-ready line:** "A Dhaka fuchka stand at dusk in soft focus: a
  glass box stacked with round puffed shells and a pot of yellow
  chotpoti on a cart under a hanging bulb, plastic stools, and painted
  cycle-rickshaws and lit stalls blurred beyond."
- **Confidence and sources:** HIGH for the form (register; TBS, Visit
  Bangladesh); street backdrop MEDIUM; light editorial. 1 search this
  pass.

### Venue: Community-centre wedding hall (community centre; convention hall)
- **Use for:** "other"; wedding and walima/bou-bhat dinners, big
  birthdays; 1, 2 or a small group of settings along a long table inside
  a crowd of 300 to over 1,000. The market's signature event venue.
  [MEDIUM — community centres hosting 500–1,500 guests with in-house
  catering and stage decoration (Humayra, Prianka Community Center
  listings); the shift to community centres (Global Voices, via this
  file's gatherings section)]
- **Soft background (the core):**
  - *Overhead and back wall:* a large hall with a high ceiling,
    **chandeliers** or rows of lights, fabric draping or flower garlands,
    **fairy lights**; the **stage** far behind as a bright block of
    flowers and backdrop (the couple never identifiable). [MEDIUM —
    venue listings: high ceilings, lighting systems, customizable
    stages]
  - *Middle distance:* **long rows of tables with white cloths** (or
    round tables), covered chairs; **waiters with catering buckets and
    trays**, a **deg** soft at the edge; guests seated in **batches**
    as tables fill and clear. [MEDIUM — gatherings section (Global
    Voices, TBS); batch seating LOW-MEDIUM]
  - *Light:* warm, bright interior light (evening events); colour
    uplighting on the stage. [EDITORIAL]
  - *Palette:* white cloths, red and gold wedding fabrics, marigold and
    rose; guests in jamdani, silk sarees and panjabis as rich blur;
    **yellow and orange** for gaye holud (daytime). [MEDIUM — wedding
    entry]
  - *Signature shapes (3–5):* the long white table receding; a waiter
    with a bucket; chandeliers; the stage block; flower strings.
  - *Density and wear:* crowded, festive, fast-moving.
  - *People cues:* guests and waiters as soft shapes, within the limit;
    no identifiable children.
- **Shell:** a purpose-built community centre or convention hall, tiled
  or carpeted, air-conditioned in newer venues. [MEDIUM — Prianka listing]
- **The table as set here:** a long white cloth; a white plate, a bowl
  and often a spoon and fork; kacchi or morog polao with a roast chicken
  leg, jali kebab, salad; jorda or firni bowl. **No borhani.** [HIGH for
  the menu — wedding entry]
- **Subregional variants and the national default:** national default
  when nothing is named: a Dhaka community centre with long white tables
  and a flower-lit stage. Village or small-town wedding: a **shamiana**
  (striped cloth tent) in a courtyard or lane. Chattogram: mezban-style
  serving from buckets. Hindu wedding: different iconography; never near
  the product.
- **Hallucination traps:** an Indian Hindu wedding mandap, sacred fire
  or sindoor in a Muslim wedding; a Western white wedding with champagne;
  a Pakistani mehndi look; a luxury hotel ballroom as the default.
- **Never stage:** borhani (rule 5), cha or water jugs beside the hero;
  turmeric rites on people; legible names on banners or stage; alcohol;
  identifiable children.
- **Prompt-ready line:** "A Dhaka community-centre wedding hall in soft
  focus: long tables with white cloths receding under chandeliers and
  fairy lights, a waiter carrying a catering bucket, and a flower-banked
  stage glowing far behind."
- **Confidence and sources:** MEDIUM (community-centre listings; this
  file's gatherings and wedding sources); colours editorial. 1 search
  this pass.

---

## TRUSTED CONTENT

### HERO PRODUCT SLOT

Every scene carries one TCCC hero product, **named by the brief**. This
file uses `south-africa.md`'s generalised slot; since 2026-09-27 that is
the project-wide rule (the brief dictates the SKU, never the region — see
`DECISIONS.md` and `country-file-schema.md` §5.4). **If a brief names no
product, ask for one.** Nothing below is a default.

**Template:**
> [HERO PRODUCT]: {brand and variant exactly as named on pack}, in
> {format and size}, {dominant pack colour and material cue},
> {negated lookalikes}. {Position: standing upright on the surface,
> label facing camera or turned slightly}. Pack text will be composited
> in post.

**Rules:**
- **Name the variant; negate the closest lookalike** (Coca-Cola Original
  vs. Coca-Cola Zero Sugar vs. Diet Coke; Sprite vs. 7Up; Fanta vs. Mirinda).
  An unspecified "Coca-Cola can" rendered as the wrong variant in 2 of 3
  generations [HIGH — first-party test, `coca-cola-guidelines.md` §1].
- **Also negate the local competitors — Bangladesh's cola market is
  unusually contested.** Pepsi (bottled by Transcom Beverages — not re-checked), **Mojo**
  (Akij Food & Beverage's cola, a fast-growing local brand promoted with
  nationalist marketing; named "number one beverage brand" in a 2024
  Bangladesh Brand Forum award), **RC Cola** (Partex), Pran's and
  Globe's colas, and 7Up, Mirinda and Clemon as the lemon/orange
  lookalikes [MEDIUM — Wikipedia "Mojo (soft drink)", TBS, Business
  Inspection BD; **market-share figures conflict sharply across sources**
  (one gives Coca-Cola 41.8% and PepsiCo 39.8% of CSDs; another gives
  PepsiCo 35%, Coca-Cola 25%, Akij 15%; CCI reported CCBB at 45.3% for
  2023) — none is used here]. Always state "not any other cola brand".
  In 2024 Bangladeshi consumers ran boycott campaigns against some
  Western brands over Gaza, which local brands used in marketing [LOW —
  aggregator/press snippets only, not re-checked]; this is a
  brand-strategy context note, not a staging rule.
- **Bangladesh is a 250 mL-can market — not 330 mL, not 355 mL.** Every
  Bangladeshi retailer listing found sells **Coca-Cola, Coca-Cola Zero
  and Diet Coke in 250 mL cans** (Chaldal ৳70; Shwapno; foodpanda
  pandamart; Arogga; listed as "Product of Bangladesh" on foodpanda)
  [HIGH — Chaldal, Shwapno, foodpanda and Arogga listings agree (via
  search)]. One snippet mentions a **320 mL Coca-Cola Zero Sugar can**
  [LOW — single snippet; probably an import; not used]. **This
  contradicts `coca-cola-guidelines.md` §4.3's "default to 330 mL for any
  non-US market"** — after Mexico (355), Brazil (350) and India (300),
  the fourth market to break it, and the first found where the standard
  single-serve can is 250 mL. Logged in the GAP LOG; not edited here.
- **The 250 mL can's silhouette is NOT confirmed.** A 250 mL can is made
  in two common shapes worldwide: a **short standard-diameter can**
  (~66 mm wide, roughly 90–92 mm tall — visibly squat next to a 330 mL)
  and a **tall slim can** (~53 mm wide, ~115 mm tall — the "sleek" energy-
  drink shape) [LOW — general packaging knowledge, not searched for
  Bangladesh]. No source found says which shape Bangladesh uses. **Do not
  write an absolute can height into a production prompt until a real
  Bangladeshi can is measured or photographed.** This file's prompt-ready
  lines use **the plate, the bowl or the hand-width** as the primary scale
  anchor and "the can" only as a secondary, relative cue, worded so that
  either silhouette reads acceptably (e.g. "about one and a half times the
  can's height" is avoided where a 25 mm difference would matter).
  [EDITORIAL]
- **Cans are a premium format in Bangladesh; small PET is the everyday
  one.** A 250 mL can costs ~৳70 against ~৳23–25 for a **250 mL PET**
  bottle of the same drink [MEDIUM-HIGH — Chaldal (via search), fbbazar,
  Wholesale Club listings]. A can reads as a supermarket, office,
  café-chain, delivery or affluent-household object; the small PET and
  the glass bottle read as the tong, the "hotel" and the street.
  [EDITORIAL inference from price]
- **Formats confirmed current in Bangladesh this pass** (reference for
  whoever writes the brief — never a default):
  - **Cans**: **250 mL** (Coca-Cola, Coca-Cola Zero, Diet Coke) [HIGH].
  - **PET**: **250 mL** (৳25 MRP) [HIGH], **400 mL** (৳40 at Shwapno)
    [HIGH — Shwapno, fbbazar], **1 L** [MEDIUM — Abdul Monem page via
    search], **2.25 L** (৳160 at Shwapno) [HIGH — Shwapno listing];
    1.25 L and 1.5 L **not confirmed**. CCBB launched **100% recycled
    PET (rPET)** first on Kinley water 2 L, with plans to extend across
    sizes [MEDIUM — CCI news page via search].
  - **Glass**: a small contour glass bottle (historically 6.5 oz /
    ~200 mL, and 250 mL — collectors' listings show green and clear
    Bangladeshi contour bottles) [LOW — eBay/PicClick collector listings
    only]. **Whether returnable glass is still sold in Bangladesh today
    was not confirmed** — no current retailer or bottler source surfaced.
    **Do not stage a glass bottle without checking.**
  - **Note: the personal PET is 400 mL, not 500 mL** — another mismatch
    with `coca-cola-guidelines.md` §4.4's "500mL" (India's are 400/600 mL;
    Türkiye's 450 mL). Logged.
- **Which formats fit which setting** (reference only, not a default):
  - tong, street cart, "hotel", fuchka stand: a **250 mL PET** (or a
    small glass bottle if confirmed current)
  - office lunch, delivery, food court, café chain, on the go: a **250 mL
    can** or a **400 mL PET**
  - home dinner for three or more, iftar, Eid, a dawat (invitation meal),
    a birthday: a **1 L or 2.25 L PET** in the midground with one filled
    plain glass per place
  - kacchi house, Chinese-Bangla restaurant: a 250 mL can or 250 mL PET,
    optionally poured into a plain unbranded glass
- **One hero product per scene** unless the brief asks for several.

**Slot sketches (verify local pack details before a production run):**

| Brief calls for | Slot wording |
|---|---|
| Coca-Cola Original, can | "a Coca-Cola Original 250 ml can, red aluminium, not Zero Sugar or Diet Coke, not any other cola brand" (silhouette unconfirmed — see above) |
| Coca-Cola Zero Sugar / Diet Coke, can | "a Coca-Cola Zero Sugar 250 ml can, black" / "a Diet Coke 250 ml can, silver" — negate the red Original |
| Coca-Cola Original, small PET | "a small 250 ml Coca-Cola Original plastic bottle, red label, dark cola visible, red cap — a small bottle, shorter than a 500 ml bottle, not a glass bottle, not any other cola brand" |
| Coca-Cola Original, 400 mL PET | "a 400 ml Coca-Cola Original plastic bottle, red label" |
| Family multi-serve | "a 2.25-litre Coca-Cola Original plastic bottle in the midground, red label, one filled plain glass per place setting" |
| Sprite / Fanta | name the flavour and pack colour; negate **7Up / Clemon** for Sprite and **Mirinda** for Fanta |
| Kinley / Minute Maid | only if the brief asks; Kinley is TCCC's packaged drinking water in Bangladesh (launched December 2016) and also a soda water [MEDIUM — coca-cola.com/bd and Wikipedia "Kinley (brand)" via search]; Minute Maid juices are listed in the portfolio [MEDIUM] |

### ICONIC BEVERAGES (documented context — staging rules follow)

This section records the real Bangladeshi drinks landscape, including
alcohol, and restricts only what is staged — the same design
`south-africa.md` uses.

**TCCC Bangladesh portfolio — partly verified.** Coca-Cola (Original,
Zero, Diet Coke in cans), Sprite, Fanta (orange), **Kinley** (packaged
drinking water since December 2016, and a soda water) and **Minute Maid**
juices [MEDIUM — coca-cola.com/bd and Wikipedia via search]. **Thums Up**
(TCCC's Indian cola) was not found in the Bangladeshi portfolio this pass
— do not assume it is sold here [LOW — absence of evidence only].

**Non-alcoholic context (never beside the hero; staged only if a brief
allows a named companion):**

- **Cha (tea)** — the everyday social drink. **Doodh cha** (milk tea) is
  strong CTC tea boiled and then enriched with **sweetened condensed milk**
  or long-boiled milk and plenty of sugar, served in **small clear glass
  cups** at roadside **tongs** (tea stalls); **rong cha** (black), **lebu
  cha** (lemon tea), **ada cha** (ginger) and **tetul cha** (tamarind) are
  the variants; Dhaka is said to have ~160,000 tongs [MEDIUM-HIGH — The
  Daily Star "To the tong for tea", Tea Journey, The Spice Odyssey; the
  160,000 count is a single press figure, LOW]. Sylhet/Sreemangal is the
  tea-garden belt; Sreemangal's multi-layered "seven-layer tea" is a
  tourist novelty [MEDIUM — not independently re-checked]. **The single
  most likely intruder in any afternoon or street scene — negate "small
  glass cups of milk tea" by name.**
- **Borhani** — a thin, savoury, spiced yoghurt drink, pale green-white
  from mint and green chilli, flecked; the standard companion of kacchi
  biryani and every wedding/Eid meal [HIGH — Haji Biryani and kacchi
  sources (Wikipedia, TBS)]. **Negate it in every biryani scene.**
- **Lassi** (sweet yoghurt drink, often in clay cups in Old Dhaka) and
  **mattha / ghol** (thin salted buttermilk) [MEDIUM — not independently
  re-checked].
- **Rooh Afza** (a bright red rose syrup by Hamdard) and **lebur sharbat**
  (lemon-sugar water) are "the two drinks that break nearly every fast" in
  Bangladesh, alongside dates [MEDIUM-HIGH — Wikipedia "Rooh Afza", NPR,
  Wego]. Also isabgul sharbat and tokma (basil-seed) sharbat at iftar
  [LOW — not re-checked]. **Never beside the hero at iftar — and the hero
  never stands in their role** (hard rule 4).
- **Daab** (green coconut water, sold whole with the top hacked off and a
  straw) and **akher rosh** (fresh-pressed sugarcane juice) — summer street
  drinks [MEDIUM — not independently re-checked].
- **Water**: a steel or plastic jug and steel tumblers or glasses stand on
  nearly every home and "hotel" table [LOW-MEDIUM — not re-checked;
  uncontested]. Negate them.

**Alcohol context (never staged; see hard rule 2):**

- Sold only to permit holders under the **Narcotics Control Act 2018**
  and the **Alcohol Control Rules 2022** (minimum age 21; limits of three
  units at a time and seven a month; Muslims need a medical prescription
  from an associate-professor-rank doctor); served only in licensed bars
  in hotels (one bar for a two-star hotel up to seven-plus for a five-star)
  and clubs [HIGH — The Daily Star, Dhaka Tribune, New Age, Movendi].
  A domestic beer (Hunter) and Carew & Co's spirits exist [MEDIUM —
  Wikipedia "Hunter (Bangladeshi beer)", "Alcohol in Bangladesh" via
  search]. Tari (palm toddy) and village-brewed liquor exist in some
  communities and are a public-health issue (toxic-alcohol deaths) [MEDIUM
  — TBS opinion piece]. None of this appears at an ordinary family table;
  no TCCC scene carries any of it.

### GENERAL NORMS

**Meal pattern — who eats, and when.**

| Occasion | Typical time | Confidence |
|---|---|---|
| Nasta (breakfast) | ~07:30–09:00 — porota (layered flatbread) or ruti with bhaji (fried vegetables), dal, egg; or rice left from the night before in villages | MEDIUM — not independently re-checked |
| **Dupurer khabar (lunch — the main rice meal)** | **~13:00–14:30**; on Fridays after jumma prayer, often later and larger | MEDIUM-HIGH — Five Colleges LangMedia ("about 1:00–1:30 p.m.… as late as 2:30 p.m. at weekends"), Remitly, Facts and Details |
| **Bikel-er nasta (afternoon tea and snacks)** | **~17:00–18:00** — cha with singara, samosa, chanachur, muri, biscuits, puri | MEDIUM-HIGH — LangMedia (tea "at about 5:30 p.m.") and Remitly |
| **Raater khabar (dinner)** | **~21:00–22:00, often later** | MEDIUM-HIGH — LangMedia ("about 9:00 p.m. or even later"), Remitly ("8:30–9:30 pm") |
| Iftar (Ramadan) | at sunset — in Dhaka ~17:50–18:10 in Feb–Mar 2027 | LOW-MEDIUM — clock time inferred from Dhaka's latitude and the 2026 calendars; check the Islamic Foundation timetable for the exact day |

**§5.2 contrasts**: unlike Türkiye (main family meal at dinner, ~19:00–20:00),
the **heaviest everyday rice meal in Bangladesh is lunch**, and **dinner
comes late, close to Spain's hour** — a family-dinner scene in Bangladesh
is set under warm interior light with full dark outside, never dusk, for
most of the year. [MEDIUM]

**Table norms:**
- **Rice (bhaat) is the meal.** "Lunch and dinner are similar meals of
  rice, dal… and curries of beef, chicken, mutton, fish or vegetables"
  [HIGH — LangMedia, Facts and Details, Remitly agree]. A Bangladeshi
  meal without a big mound of white rice reads wrong.
- **All dishes on the table at once, shared from the centre**, each
  person helping themselves with serving spoons; guests are served first,
  then elders by seniority, and nobody starts before the eldest [MEDIUM-
  HIGH — SBS Cultural Atlas, Remitly, Together Women Rise]. A loose order
  of eating (rice with bhorta/vegetables or dal first, then fish or meat)
  is followed on the plate, not by courses arriving [MEDIUM — Remitly;
  the elaborate Bengali bitter-to-sweet course order described in
  `india.md` is a West Bengal / formal-occasion pattern and is **not** the
  everyday Bangladeshi table — EDITORIAL reading, not contradicted].
- **Eating with the right hand** — the rice is mixed with curry and
  gathered with the fingertips; the left hand is not used for food
  [HIGH — SBS Cultural Atlas, Facts and Details]. A spoon and fork appear
  in restaurants, for biryani at some tables, and in middle-class
  urban homes; **staging consequence**: show the plate laid and untouched
  or mid-meal with no hand, and leave a small bowl or the washbasin out
  of frame. [EDITORIAL]
- **The plate**: a large round **steel (stainless) plate**, a white
  ceramic or melamine dinner plate (~27–30 cm), or in villages an
  aluminium or enamel plate; in Hindu homes and at some feasts a
  **banana leaf** [MEDIUM — not independently re-checked]. Curries come
  to the table in **bowls with lids or straight in the aluminium/steel
  pot (patil, dekchi, korai)**.
- **On the plate edge**: a **green chilli** (kacha morich) and a pinch of
  salt, a **lemon/lime wedge** (Bangladeshi lebu, often the
  aromatic kagzi or the big jara lebu), sliced raw onion [MEDIUM — not
  independently re-checked; uncontested].
- **Bhorta** — small mounds of mashed potato, aubergine, dal, dried fish,
  tomato, greens, each bound with **raw mustard oil**, onion and chilli —
  sit on the plate or in small bowls; a dawat (guest meal) or a "bhorta
  restaurant" may lay out ten or more [HIGH — withaspin, Whetstone, The
  Spice Odyssey].
- **Low/floor eating** on a pati (woven mat) or with a low stool (piri) is
  a real village and traditional register; do not make it the default
  urban scene. [MEDIUM — not independently re-checked]

**The national palette of flavour, as the camera sees it**: the yellow
of turmeric and mustard, the rust-red of bhuna (dry-fried) meat curries,
the gloss of mustard oil, green chilli, and white rice. [EDITORIAL]

### SCALE REFERENCE — BANGLADESH

**Product anchors.**

| Format | Size | Confidence |
|---|---|---|
| **250 mL can** (the standard single-serve can) | Dimensions **not confirmed** — either ~66 mm × ~90–92 mm (short standard-diameter) or ~53 mm × ~115 mm (slim). Treat "the can" as a *relative* anchor only | HIGH (format, via search); LOW (silhouette) |
| 250 mL PET (everyday small bottle) | Current, ৳23–25; dimensions not confirmed (roughly 15–17 cm tall is typical for the format — not checked) | HIGH (format); LOW (height) |
| 400 mL PET | Current, ৳40; dimensions not confirmed | HIGH (format) |
| 1 L PET | Reported; not confirmed current | MEDIUM |
| 2.25 L PET | Current, ৳160; dimensions not confirmed (the brand file's 2 L/2.5 L rows bracket it: ~33–35 cm tall) | HIGH (format) |
| Small contour glass bottle | Historical 6.5 oz / 250 mL; **current availability not confirmed** | LOW |

Sources: [Chaldal — Coca-Cola Can 250 ml](https://chaldal.com/coca-cola-can-250-ml) (via search);
[Chaldal — Coca-Cola Zero Can 250 ml](https://chaldal.com/coke-zero-can-250-ml) (via search);
[Shwapno — Coca Cola 250ml (Can)](https://www.shwapno.com/coca-cola-250-ml-can?lang=en);
[foodpanda — Coca-Cola Can 250ml](https://www.foodpanda.com.bd/groceries/product/X2I736/coca-cola-can-250ml);
[foodpanda — Diet Can 250ml](https://www.foodpanda.com.bd/groceries/product/3JD2H7/cocacola-diet-can-250ml);
[Chaldal — Coca-Cola 250 ml PET](https://chaldal.com/coca-cola-250-ml-2) (via search);
[Shwapno — Coca Cola Drink 400ml](https://www.shwapno.com/coca-cola-drink-400ml);
[Shwapno — Coca Cola 2.25Ltr (PET)](https://www.shwapno.com/coca-cola-2-25-ltr-pet?lang=en);
[Abdul Monem Beverage Ltd](https://www.amlbd.com/page/8/abdul-monem-beverage-ltd) (via search);
[CCI — 100% recycled PET in Bangladesh](https://www.cci.com.tr/en/cci-at-a-glance/news-from-us/coca-cola-launches-100-recycled-pet-bottles-in-bangladesh) (via search).

**Because the can is unconfirmed, every dish entry below anchors size
first to the plate (~27–30 cm), the hand-width (~9 cm across the palm)
or a named vessel, and to the can second.** [EDITORIAL]

**Food and table scale anchors.**

| Item | Real size | Relative to the plate / can | Confidence |
|---|---|---|---|
| Steel or ceramic rice plate | ~27–30 cm | — | LOW-MEDIUM (`tableware-composition-reference.md` §2 band; Bangladeshi steel plates not measured) |
| Rice mound for one at lunch | ~14–16 cm across, 5–7 cm high (~250–350 g cooked) | about half the plate | EDITORIAL — generous by Western standards; Bangladesh's per-head rice consumption is among the world's highest (not re-checked) |
| **Ilish (hilsa), whole** | **~35–45 cm long; 500 g–2 kg**; a "big" market ilish is 1–1.5 kg | longer than the plate is wide | MEDIUM-HIGH — Chandpur market reports (Ittefaq, BDStall) and fishmonger listings |
| Ilish steak (peti or gada cut) | ~8–10 cm across, 2–2.5 cm thick, from a 1 kg fish | about a palm's width | EDITORIAL from fish size; not measured |
| Rui steak | ~7–9 cm, 2 cm thick, bone in the centre | palm-sized | LOW — not re-checked (consistent with `india.md`'s 6–8 cm) |
| Fuchka shell | ~4–5 cm across | smaller than the can's diameter | MEDIUM — consistent with `india.md`'s 3–6 cm puri; Dhaka's is a puffed round shell |
| Piyaju (lentil-onion fritter) | ~5–6 cm across, ~1.5 cm thick, flat-ish disc | a little wider than a bottle cap ×2 | LOW — not re-checked |
| Beguni (aubergine fritter) | slices ~10–12 cm long, ~1 cm thick, battered | about the length of a hand | LOW — not re-checked |
| Regular jilapi | coil ~7–8 cm across | palm-sized | LOW — not re-checked |
| **Shahi jilapi** (Chawkbazar, Ramadan) | **a huge coil, ~20–30 cm across, sold by weight** | most of a plate | MEDIUM — The Daily Star/Ittefaq describe "oversized"; dimension LOW |
| Bhapa pitha | dome ~7–8 cm across, ~4 cm tall | palm-sized | LOW — size not sourced; form HIGH (Wikipedia, The Daily Star) |
| Chitoi pitha | disc ~10–12 cm across, ~2 cm thick | about a palm | LOW — form HIGH (Wikipedia), size not sourced |
| Kalai ruti | **larger and thicker than an ordinary ruti** — ~22–25 cm, ~5 mm thick | nearly the plate's width | MEDIUM for "larger and thicker" (The Daily Star); dimension LOW |
| Singara | pyramid ~6–7 cm tall | palm-sized | LOW — not re-checked |
| Clay doi pot (sora / tok-doi pot) | wide shallow terracotta bowl ~12–20 cm | — | LOW — not re-checked |
| Small glass tea cup (never staged beside hero) | ~7–8 cm tall | — | LOW — not re-checked |

**Vessels.**

| Vessel | Look | Confidence |
|---|---|---|
| **Steel plate (thala) and steel bowls (bati)** | Plain stainless, slightly raised rim; the everyday home and "hotel" plate | MEDIUM — not independently re-checked |
| **White melamine or ceramic dinner plate** | The middle-class Dhaka table; often with a printed floral border | LOW-MEDIUM — not re-checked |
| **Deg / dekchi** | Big round-bellied aluminium or tinned-copper pot with a lid sealed with dough or cloth, used for kacchi and tehari; at Old Dhaka shops it sits on the counter | MEDIUM — kacchi sources describe the sealed pot (Wikipedia, Dhaka Tribune) |
| **Korai** | Iron or aluminium two-handled wok-like pan; bhuna dishes, bhaji, fried fish | MEDIUM — not re-checked |
| **Patil / handi (clay)** | Unglazed terracotta pot; doi, some village cooking | MEDIUM — Bogura doi in a sora (Wikipedia "Bogurar doi") |
| **Clay cup (bhar)** | Small unglazed terracotta cup for tea or lassi in Old Dhaka | LOW — not re-checked |
| **Melamine snack plate** | Small (15–18 cm) brightly coloured melamine plate for fuchka and chotpoti | LOW — not re-checked |
| **Paper cone (thonga) / leaf plate** | For jhalmuri, chanachur and fried snacks — newspaper is the real material; **use plain unprinted paper** (no legible text) | MEDIUM (form); EDITORIAL (the paper swap) |

### TEXTURE LEXICON (use in prompts)

| Surface | Use | Avoid |
|---|---|---|
| Plain rice (bhaat) | "soft, separate, slightly translucent white grains of boiled medium-grain rice, matte, a loose mound" | "sticky sushi rice," "fluffy long basmati with saffron streaks" (that is biryani) |
| Mustard-paste gravy (shorshe) | "thick, opaque, grainy mustard-yellow paste-gravy, flecked darker with ground mustard husk, a glossy rim of mustard oil, slit green chillies" | "smooth yellow curry," "coconut curry," "Dijon sauce" |
| Jhol | "thin, runny, turmeric-yellow to orange broth with small beads of oil on the surface" | "thick creamy curry" |
| Bhuna (dry-fried meat) | "deep rust-brown to almost black-brown meat pieces coated in a thick, clinging, oily masala, little liquid, a sheen of separated oil at the edge" | "stew," "tikka masala," "glossy BBQ glaze" |
| Bhorta | "a small, rough, hand-pressed mound, matte, flecked with raw onion, green chilli and coriander, a faint yellow-gold gloss of mustard oil" | "smooth purée," "hummus swirl," "guacamole" |
| Fried fish (maach bhaja) | "turmeric-rubbed fish steak, shallow-fried to a crisp golden-brown crust with darker edges" | "battered fish and chips," "breaded fillet" |
| Fritters (piyaju, beguni) | "craggy, deep-golden gram-flour fritters with crisp ragged edges and visible onion or aubergine, slightly oily sheen" | "smooth falafel balls," "tempura," "onion rings" |
| Kacchi rice | "long, separate, fragrant grains, mostly white with patches of yellow-orange and ghee gloss, flecked with fried onion" | "uniform yellow rice," "fried rice" |
| Jilapi | "glossy, sticky, deep orange-amber interlocking coils, crisp with a syrup shine" | "funnel cake," "pretzel" |

The most common model failures for Bangladeshi food: **everything rendered
as "Indian curry" in copper karahis with naan**; **biryani as uniform
yellow rice**; **fish as a Western fillet**; **a "South Asian" scene
defaulting to Indian Hindu markers** (diyas, rangoli, saris in temple
colours) in a Muslim-household scene; and **poverty framing**. Negate them
explicitly. [EDITORIAL]

### VISUAL & PLATING NORMS

- **Palette**: white rice; turmeric and mustard yellow; rust-red and
  brown bhuna; green chilli and coriander; the gold of fried fish and
  fritters; the orange of jilapi; the matte terracotta of clay pots; the
  silver of steel plates. [EDITORIAL]
- **Home food is homely and abundant, not composed.** Curry in a bowl or
  pot with a serving spoon; rice in a big bowl; nothing garnished beyond
  a few coriander leaves or slit chillies. Restaurant-style "swoosh"
  plating is wrong for nearly every scene. [MEDIUM — EDITORIAL synthesis
  from the norms above]
- **Plenty is hospitality.** A dawat or Eid table is crowded with dishes
  edge to edge, and a host keeps refilling plates — show more dishes than
  people. [MEDIUM — not independently re-checked; uncontested]
- **Oil is visible and correct.** Mustard oil gloss on bhorta, a layer of
  separated oil on bhuna and tehari, oil beads on jhol — do not
  "clean up" the oil; it is a freshness and quality cue. [EDITORIAL]
- **Grade neutrally.** Avoid the brown-yellow "third-world" filter image
  models apply to South Asia. Bangladesh's light is humid and soft: bright
  white overcast in the monsoon (June–September), warm hazy sun in winter
  (December–February), harsh pre-monsoon heat (April–May). Greens are
  saturated. [EDITORIAL]

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **Most Bangladeshis live in villages, in single-storey houses.** The
  2022 Population and Housing Census puts **~68% of the population in
  rural areas** [HIGH — BBS via Dhaka Tribune and the census report].
  By dwelling structure, **58.8% of general households live in kancha
  houses** (walls and roof of tin/corrugated iron, bamboo, wood or mud),
  **22.5% in pucca** (brick/concrete) and **18.2% in semi-pucca** (brick
  walls with a tin roof), 0.6% in jhupri (shacks); pucca rose from 6.7%
  (2001) and 11.3% (2011) [HIGH — BBS census national report (via search),
  figures consistent across two census-report snippets]. **Note**: one
  search summary garbled these into "urban/rural" columns; the 6.68 /
  11.32 figures are the 2001 / 2011 pucca shares, not urban/rural.
- **The census does not publish a house-vs-flat split** in the snippets
  found. In **Dhaka** the middle class mostly **rents flats** in
  6–10-storey residential blocks — ~45% of households in Dhaka Division
  rented or sublet in 2023 vs. ~19% nationally [MEDIUM — Daily Star /
  housing-research snippets]; one research figure says only ~8% of
  Dhaka's population lives in (formal, developer-built) apartments
  [LOW — a single dated research claim; the rest live in older walk-up
  buildings, sublets, family houses and informal settlements].
  **Staging inference**: "at home" in a Dhaka brief = a flat in a
  walk-up or lift block; "at home" in a no-city brief could defensibly be
  a village homestead. [MEDIUM for the inference]
- **§5.2 contrast**: the inverse of Türkiye's apartment default and
  closer to Mexico's single-house majority, but with **tin, not concrete,**
  as the dominant rural material.
- **Interior markers — Dhaka flat (pick one or two)**: a dining table
  pushed against a wall in the drawing-dining room with plastic or
  wooden chairs and a fitted table cover (plastic or printed cloth); a
  showcase cabinet with crockery; a ceiling fan always present; window
  **grilles** on every window; tiled floors (white or speckled); a
  refrigerator in the dining area (a common real arrangement); a
  wall-mounted washbasin near the dining table for hand-washing. [MEDIUM —
  not independently re-checked; uncontested middle-class markers]
- **Exterior markers — Dhaka**: pastel or white concrete blocks with
  grilled balconies, potted plants and laundry; rooftop water tanks and
  rooftop gardens; tangled overhead cables; cycle-rickshaws with painted
  panels (blur); CNG auto-rickshaws (green); the metro rail viaduct;
  mosques' minarets in the distance (never a backdrop for the hero).
  [MEDIUM — not independently re-checked]
- **Village markers**: a homestead (bari) of tin-roofed houses around a
  packed-earth courtyard (uthan), a pond (pukur) with a bathing ghat,
  banana, coconut, betel-nut and mango trees, a clay oven (chula) under a
  lean-to, rice paddies to the horizon, a jute or bamboo fence. [MEDIUM —
  not independently re-checked]
- **Gen Z lens (§5.3)**: young adults typically live with family until
  marriage; students and young workers in Dhaka live in **messes**
  (shared rented rooms) and sublets, increasingly pushed there by rents
  [MEDIUM — Dhaka Tribune 2025 report on sublets]. Young urban
  Bangladeshis are heavy users of food-delivery apps (foodpanda), cafés
  in Dhanmondi and Gulshan, burger and "fast food" shops, and
  Chinese-Bangla restaurants [LOW-MEDIUM — not independently re-checked].
  Stage a young adult at a shared-flat table with a laptop and a delivery
  box, or at a café table with a burger or a kacchi box — neither a
  slum nor a luxury penthouse.
- **Caricature avoidance [EDITORIAL]**:
  - **Disaster/poverty Bangladesh**: floods, slums, garment-factory
    imagery, beggars, crumbling everything. Real, but not the ordinary
    baseline for a meal scene.
  - **Generic "India"**: Hindu temple bells, diyas, rangoli, sari-and-
    bindi styling, naan baskets, butter chicken, "Indian restaurant"
    copper karahis in a Muslim-majority household scene.
  - **Postcard Bangladesh**: the Sundarbans tiger, Cox's Bazar sunset,
    rickshaw art and the Parliament building as every backdrop.
  - **Over-Islamicised staging**: prayer mats, Qur'an stands or mosques
    framed beside food and product (see FESTIVALS).
  - The ordinary baseline is a tidy, crowded, lived-in Dhaka flat with a
    full rice table, a lively "hotel" or kacchi house, a village courtyard
    under green trees, and a street snack cart.

#### Scenario: Casual lunch at home — 1 person

A Dhaka flat, ~13:30, daylight through grilled windows, the ceiling fan
blurred above. A steel or white plate with a mound of rice, a small bowl
of dal, two small bhorta mounds (alu and begun) and one piece of rui or
chicken curry in a bowl; a green chilli and lemon wedge on the plate edge.
Or a reheated plate of khichuri with an omelette. Hero (from the brief;
formats that fit): a 250 mL can or 250/400 mL PET beside the plate. No
water jug, no tea cup. Gen Z: a delivered kacchi in its foil box, opened on
a plate at a shared-flat table. [EDITORIAL; lunch as the main rice meal is
MEDIUM-HIGH]

#### Scenario: Casual lunch at home — 2 people

Two places at a small dining table: a shared bowl of rice, a bowl of
macher jhol or chicken curry, dal, two or three bhorta, a fried fish
(maach bhaja) or begun bhaja on a side plate. Hero (from the brief;
formats that fit): two cans, or a 1 L PET with two glasses. [EDITORIAL]

#### Scenario: Casual lunch at home — 3 people

**The Friday lunch** (after jumma prayer) — the week's big family meal:
morog polao or khichuri, or rice with beef bhuna and a fish curry, dal,
salad (cucumber, tomato, onion), and a firni or shemai bowl for after.
Hero (from the brief; formats that fit): a 1 L or 2.25 L PET in the
midground, one plain glass per place. [EDITORIAL; Friday lunch as the
family meal MEDIUM — LangMedia notes weekend lunches run later, not
independently re-checked beyond that]

#### Scenario: Dinner at home, indoors

**Late** (~21:00–22:00), dark outside, warm white or cool tube-light
interior (both are real; warm reads better). A dining table with the
whole meal laid out at once: rice, dal, a vegetable, a fish or beef/
chicken curry, bhorta, salad; 3–5 people. Hero (from the brief; formats
that fit): a 1 L or 2.25 L PET in the midground, one filled glass per
place. **§5.2 contrast**: Bangladesh's dinner is ~2 hours later than
Türkiye's and lighter than lunch. [MEDIUM for timing; composition
EDITORIAL]

#### Scenario: Meal outdoors at home

- **Village courtyard or rooftop**: in villages, a meal in the uthan on a
  pati mat or low stools, pots in the centre; in Dhaka, the **rooftop**
  (chhad) is the real outdoor space of a flat — rooftop gardens,
  barbecue parties (chicken, kebab, naan) and winter picnics are common
  among the urban middle class [MEDIUM — not independently re-checked].
  Hero: a 2.25 L PET with glasses, or cans.
- **Winter picnic (bonbhojon)**: December–January picnic outings with a
  big pot of khichuri or biryani cooked on site [LOW-MEDIUM — not
  re-checked]. Stage the food table, not a crowd.

#### Scenario: Meal on the go — 1 person

A **fuchka** plate at a cart stool (Dhanmondi Lake, Dhaka University,
Bailey Road); **jhalmuri** in a plain paper cone on a ledge; a **singara**
and **samosa** plate at a tong bench (no tea); a **kacchi box** on a
delivery-rider-free office desk; a **chicken roll** or **shawarma** from a
Dhaka fast-food counter. Hero (from the brief; formats that fit): a
250 mL PET at street level; a 250 mL can at an office or café. **§5.2
contrast**: like India and Mexico, street food is dense, cheap and
everyday. [MEDIUM — street foods are HIGH in TBS/Visit Bangladesh; venue
detail EDITORIAL]

#### Scenario: Away from home — 1 person at a restaurant/café

A neighbourhood **"hotel"** at 13:30: a steel plate of rice, dal, a bowl
of beef or fish curry, a bhorta; or a single plate of **kacchi** at a
kacchi house, with a small cucumber-onion salad (no borhani). Hero: a
250 mL PET or a can. [EDITORIAL]

#### Scenario: Away from home — 2–3 people

A kacchi house table with two or three kacchi plates, a jali kebab or
chicken roast on a side plate, salad; a **Chinese-Bangla** restaurant
with fried rice, chicken corn soup, chilli chicken (the dim-lit,
red-lantern Dhaka "Chinese" restaurant is a beloved middle-class
outing register — keep lanterns soft and text-free) [MEDIUM — not
independently re-checked]; or friends round a **fuchka-chotpoti** stand
with shared plates. Hero: cans or a 1 L PET with glasses. [EDITORIAL]

---

## CROSS-CUTTING REGISTER: STREET FOOD

- **Fuchka and chotpoti** — the king of Dhaka street food. **Fuchka**:
  hollow, crisp, round puffed shells, cracked and filled with a heavy
  mash of **yellow peas (motor/dabli) and potato**, chilli, onion and
  coriander, topped with **grated boiled egg**, served with a small bowl
  of cold **tetul pani** (tamarind water with black salt) — heartier and
  more egg-topped than Kolkata's puchka or Mumbai's pani puri [HIGH — TBS
  "Best fuchkawalas of Dhaka", Visit Bangladesh, Hungry Bangla, The Spice
  Odyssey]. **Chotpoti**: a warm bowl of the same yellow peas with diced
  potato, chopped egg, onion, chilli, tamarind sauce and crushed fuchka
  shell on top [HIGH — same sources]. Cross-reference: `india.md`'s pani
  puri/puchka entry (zone 8) — the Bangladeshi form is distinct (see
  catalog).
- **Jhalmuri** — puffed rice tossed with mustard oil, chanachur, onion,
  chilli, coriander and cucumber, served in a paper cone [MEDIUM — not
  independently re-checked; uncontested].
- **Singara, samosa, puri, alur chop, piyaju** — the tong and "hotel"
  fried-snack case [MEDIUM — LangMedia's afternoon-tea description].
- **Pitha stalls (winter)** — from the onset of winter, makeshift pitha
  stalls built from vegetable carts, tea tables and steel drums appear
  across Dhaka, selling **bhapa pitha** (steamed rice-flour dome with
  date-palm jaggery and coconut, Tk 10–20) and **chitoi pitha** (Tk 5,
  with shutki, mustard or chilli bhorta) [HIGH — NTV, The Daily Star,
  UNB, Wikipedia].
- **Kebab and grill shops** — Old Dhaka's Nazira Bazar and Bihari-camp
  (Mohammadpur) kebab and chaap; **beef/chicken chaap with naan** (flat
  pressed meat, fried) [LOW-MEDIUM — not re-checked].
- **Haleem** in the evening and at iftar; **velpuri**, **momos** and
  shawarma among students [LOW — not re-checked].
- **Staging**: food on a plate, leaf, paper or counter, never in hand;
  no legible newspaper, no cart signage.

## CROSS-CUTTING REGISTER: FESTIVALS & SEASONAL OCCASIONS

Religious holidays follow the lunar Hijri calendar, moving ~11 days
earlier each year; **Bangladesh sights the moon locally and is often one
day later than Saudi Arabia**. As of drafting (2026-10-01), the 2027 dates
are the next full cycle.

| Occasion | 2026 | 2027 | Confidence |
|---|---|---|---|
| **Ramadan (Ramzan) fasting month** | ~19/20 Feb – 20 Mar 2026 (not re-checked) | **expected first roza Tue 9 Feb 2027**, ending ~9/10 Mar (moon) | MEDIUM — bangladatetoday, Wego; Islamic Foundation Bangladesh confirms by sighting |
| **Eid ul-Fitr** | ~21 Mar 2026 (not re-checked) | **~Wed 10 Mar 2027** (public holiday 10–12 Mar; moon) | MEDIUM — bangladatetoday, publicholidays.com.bd |
| **Pohela Boishakh** (Bengali New Year, 1434 BS) | 14 Apr 2026 | **Wed 14 Apr 2027** (fixed under the revised Bangla Academy calendar) | HIGH — bangladatetoday, Wikipedia "Pohela Boishakh" |
| **Eid ul-Adha** (Qurbani Eid) | ~27 May 2026 (not re-checked) | **~Mon 17 May 2027** (holiday 17–19 May; moon) | MEDIUM — bangladatetoday, holidays-info |
| Durga Puja (Hindu) | ~mid-Oct 2026 | **~5–9 Oct 2027** — use `india.md`'s Bengal dates; Bangladesh's Bijoya Dashami holiday may differ by a day | MEDIUM — cross-reference, not re-searched for Bangladesh |
| Victory Day / Independence Day / Language Day | 16 Dec / 26 Mar / 21 Feb | same | HIGH — fixed national days (uncontested) |

**Hilsa conservation bans** (matter for any "fresh ilish" scene):
the government bans catching, transporting, storing and selling hilsa for
**22 days in October** during peak spawning (recent years: 4–25 Oct, and
8–29 Oct in another year — the exact window is announced annually), plus
a spring jatka (juvenile) ban [HIGH for the 22-day October ban — TBS, The
Daily Star, BSS, Daily Sun; exact 2027 dates not yet announced]. **Since
around 2016 ministers have urged people to eat panta without ilish at
Pohela Boishakh**, because the April fishing pressure falls on juvenile
fish [MEDIUM-HIGH — Wikipedia "Panta bhat", Dhaka Tribune 2018 (the then
PM chose shutki over ilish)]. **Staging consequence**: a Pohela Boishakh
panta-ilish scene is real and iconic, but **panta with bhorta and fried
dried fish or eggs is the current conservation-friendly alternative** —
offer both to the brief-writer (§4.6). [EDITORIAL]

- **Ramadan iftar — handle with care.** The fast is broken at sunset
  with **khejur (dates)** and **Rooh Afza or lemon sharbat** or water;
  then the iftar spread: **piyaju** (lentil-onion fritters), **beguni**
  (battered aubergine slices), **alur chop** (potato cutlets), **chola**
  (spiced chickpeas) mixed with **muri** (puffed rice), mustard oil,
  onion and chilli into **muri makha**, **jilapi**, **haleem**, fruit
  (watermelon, banana, guava), sometimes kebab and **chicken/beef
  "chap"** [HIGH for items — The Daily Star, Ittefaq, Daily Sun,
  Dhaka Tribune Chawkbazar reports, Wego]. **Chawkbazar** in Old Dhaka is
  the oldest and largest iftar market (from early afternoon): **shahi
  jilapi**, haleem, kebabs, and **"boro baper polay khay"** ("the rich
  man's son eats it") — a mash of chickpeas, minced meat, potato, brain,
  flattened rice, egg, chicken, spices and ghee, sold by the kilo
  [HIGH — The Daily Star, Ittefaq, Independent BD]. Muri makha is often
  mixed in one big bowl and eaten together from it [MEDIUM — not
  independently re-checked].
  **Staging (EDITORIAL — flagged for Fernando):**
  1. Set the scene **just before sunset**: table full, nothing touched,
     dusk blue at the window or the lamp just lit.
  2. **The hero product is never the first item breaking the fast**,
     never mid-pour, never with a hand reaching for it, never placed
     beside the dates as if it replaced the sharbat. It stands, closed or
     already poured into a glass, **in the midground among the spread**,
     as part of the meal that follows.
  3. Keep the **dates out of the hero's immediate frame or out of frame
     entirely**, and keep **Rooh Afza/sharbat glasses and water out**
     (rule 4/5).
  4. **No prayer mats, Qur'an, tasbih, mosque interiors or the call to
     prayer imagery** in a product frame.
  5. TCCC Bangladesh's own Ramadan communications practice was **not
     researched** — a reviewer should confirm against local guidance. A
     neutral alternative is the **after-iftar evening snack** or a
     **community iftar** table shown as a spread.
- **Sehri** (pre-dawn meal): rice and curry, milk and banana — a dark
  03:00–04:30 scene; use only if briefed. [LOW — not re-checked]
- **Eid ul-Fitr**: morning **shemai** (fine vermicelli in sweetened
  milk, or the dry-fried "jorda" style), **firni**, **lachha shemai**;
  then a lunch of **polao, korma, roast chicken, beef rezala or kala
  bhuna**, borhani; guests visiting from house to house; new clothes,
  mehndi [MEDIUM — not independently re-checked; uncontested]. Stage a
  dining or coffee table with shemai bowls and a polao-korma spread, hero
  in the midground.
- **Eid ul-Adha (Qurbani)**: families sacrifice a cow or goat and divide
  the meat; days of **beef** — kala bhuna, rezala, beef bhuna with
  porota or polao, **kalijar bhuna** (liver), nihari [MEDIUM — not
  independently re-checked; uncontested]. **Never stage the animals, the
  sacrifice, street slaughter, blood or meat heaps** — stage the meal.
  [EDITORIAL]
- **Pohela Boishakh**: the national secular festival — red-and-white
  clothes, **Mangal Shobhajatra** procession (renamed in 2025 — not
  re-checked) with giant papier-mâché masks, Ramna Batamul songs at dawn,
  fairs (mela) with **pitha, murki, batasha, jilapi**; the iconic meal is
  **panta bhat** (rice soaked overnight in water) with **fried ilish**,
  green chilli, onion, salt and **several bhorta** [HIGH — Wikipedia
  "Pohela Boishakh", "Panta bhat"; procession renaming LOW]. Stage a clay
  sanki (plate) of panta with the accompaniments on a red-white cloth;
  festival masks blurred in the background; the hero beside.
  **Sensitivity note**: Pohela Boishakh is a secular-cultural festival
  but has been contested by some religious conservatives; staging is
  uncontroversial for a brand at the food level. [LOW-MEDIUM — Ramna 2001
  bombing on Wikipedia as context; EDITORIAL]
- **Winter (Poush–Magh, Dec–Jan) — pitha season and khejur gur**
  (date-palm jaggery), **Poush Sankranti / Shakrain** kite festival in Old
  Dhaka (mid-January) [MEDIUM for pitha season (HIGH); Shakrain LOW — not
  re-checked].
- **Monsoon (borsha, June–September) — khichuri-and-ilish-bhaja season**
  [HIGH — withaspin, regional food writing].
- **Durga Puja** (Hindu): pandals in Dhaka (Dhakeshwari temple) and across
  the country; bhog (khichuri, labra, payesh); **no beef** (hard rule 3).
  Do not stage the product inside a pandal or beside an idol. [MEDIUM —
  not independently re-checked]
- **Weddings** (biye, gaye holud): kacchi or morog polao with borhani,
  roast, rezala, firni or jorda in big catered spreads [MEDIUM — not
  independently re-checked].

Full staging for each celebration: see CELEBRATIONS & LARGE GATHERINGS below.

---

## CELEBRATIONS & LARGE GATHERINGS

Per `country-file-schema.md` §5.7 (the snapshot rule). The frame shows
only the operator's party (1, 2 or a small group of identical place
settings) at one stretch of a bigger table; the crowd is implied. **The
hard staging rules at the top of this file apply to every entry**, and
the **Ramadan/iftar staging rule stays exactly as open as it was**
(editorial call flagged for Fernando, hard rule 4, FESTIVALS, GAP LOG).
Nothing here resolves it.

### How large gatherings work here

- **Who and how many.** Celebrations are extended-family and community
  affairs. Eid lunches and family dawats are commonly 10–30 people
  [LOW-MEDIUM — estimate]; urban weddings run from about 300 to over
  1,000 guests [LOW-MEDIUM — one tier-3 wedding source; plausible against
  the hall-catering norm]; a Chattogram **mezban** can feed thousands
  (3,000–4,000 at a rich household's mezban, five cows for such a crowd)
  [HIGH — The Daily Star, Wikipedia "Mezban", Banglapedia, TBS].
- **Where (intake venues).** Home indoor (the Dhaka flat's drawing-dining
  room, extended) for Eid and dawats; home outdoor (the village uthan,
  a rooftop, or a **shamiana** (cloth tent) pitched in a courtyard or lane)
  for village weddings, mezbans and big family events; "other" for most
  urban weddings, now held in **community centres and convention halls**
  with professional caterers [MEDIUM — Global Voices on the shift to
  community centres; The Daily Star on mezban settings].
- **Table form.** At home, every dish on the table at once, shared from
  the centre (GENERAL NORMS); for big home events, long tables under a
  shamiana or a floor spread in villages. At community-centre weddings,
  long rows of tables with white cloths, or round tables; guests sit in
  shifts ("batches") as tables fill and clear. [LOW-MEDIUM — batch
  seating is common knowledge, not independently re-checked]
- **Who serves.** At home, the women of the family cook; guests are
  served first, then elders. At weddings and mezbans, **caterers or
  bawarchis (cooks) cook in degs** and waiters serve **plated portions
  or ladle from buckets and trays at the table**. [MEDIUM — Global Voices,
  TBS on Biye Bari; mezban serving form from The Daily Star]
- **Plates and cutlery.** Wedding tables carry a white plate, a bowl and
  often a spoon and fork; many guests still eat with the right hand.
  Mezbans and village events may use steel or disposable plates.
  [LOW-MEDIUM]
- **Snapshot-staging default for this market [EDITORIAL].** The three
  most authentic cues: (1) **a long table running out of frame** with a
  white cloth, the next guest's plate edge visible; (2) **a deg or
  catering buckets and a waiter's tray soft at the frame edge**; (3)
  **festive fabric on blurred figures** (jamdani, Eid panjabis, wedding
  red or holud yellow) or a shamiana's striped cloth roof. Dhaka's late
  dinner hour means most wedding scenes are evening, warm interior light.
- **Never staged**: animal sacrifice or live animals (Eid ul-Adha,
  aqiqah); prayer, mosques, Qur'an; borhani, Rooh Afza, sharbat, cha or
  water jugs beside the hero (hard rule 5: borhani is the near-automatic
  wedding and kacchi drink); legible banners and Bangla script.

### Celebration: Eid ul-Fitr lunch
- Type: calendar holiday
- When: ~10 March 2027 (moon). **Shemai and firni in the morning** for
  visitors (mentioned, not staged as the main meal); the family lunch is
  the main meal. Intake time: midday
- Gathering: the family plus visiting relatives and neighbours moving
  house to house; 10–30 over the day [LOW-MEDIUM — estimate]. Venue:
  home indoor
- The spread: **polao with chicken roast** at the heart of the plate,
  with **shami kabab**, **korma** or **beef rezala**, sometimes beef
  tehari or kacchi (see catalog: Morog polao; Chicken roast (biyebarir
  roast); Gorur mangsho bhuna, rezala variant; Tehari; Kacchi biryani);
  desserts **firni, jorda, payesh, shemai** (see catalog: Bakarkhani,
  firni and jorda; Shemai). About 6–9 dishes. Shami kabab and korma have
  no entries: shami kabab is a flat round minced-meat-and-lentil patty
  about the can's width, browned on both sides; Bangladeshi chicken korma
  is a pale ivory, ghee-glossed, yoghurt-and-onion gravy with whole
  spices (both added to the CANDIDATE QUEUE). [HIGH for polao and roast
  as the Eid core — Asia News Network (The Daily Star) "the iconic duo
  that anchors Eid", with The Daily Star's Eid menu (polao or tehari,
  korma or rezala, payesh) and the FESTIVALS register]
- Snapshot staging: **1 setting** — a plate of polao with a roast
  chicken leg and a shami kabab; the polao dish and the roast platter
  cropped at the edge. **2 settings** — two identical plates; between them
  the roast platter and a bowl of rezala. **Small group** — the end of
  the dining table with polao, roast, rezala, kabab plate and salad, a
  firni bowl waiting; a showcase cabinet and guests in new clothes soft
  behind. Cues: more dishes than diners; extra chairs pulled from the
  drawing room; small dessert bowls stacked.
- Decor and cues: the best tablecloth, new panjabis and saris, mehndi on
  hands resting at the table edge (no faces). Avoid mosque imagery.
- Never stage: borhani or soft-drink-plus-borhani pairs (only the hero);
  eidi cash; alcohol or pork.
- Confidence and sources: as tagged.

### Celebration: Eid ul-Adha (Qurbani Eid) meals
- Type: calendar holiday
- When: ~17 May 2027 and the days after; beef or mutton dishes from the
  first day's afternoon. Intake time: midday or evening
- Gathering: extended family and neighbours (meat is shared out in
  thirds); 10–30 at the table [LOW-MEDIUM — estimate]. Venue: home
  indoor; rooftop or courtyard in the evening
- The spread: **beef** in quantity: **kala bhuna**, **rezala**, **beef
  bhuna** with porota or polao, **kalijar bhuna** (liver), sometimes
  nihari (see catalog: Kala bhuna; Gorur mangsho bhuna; Morog polao);
  rice, dal and salad. About 6–8 dishes. [MEDIUM — FESTIVALS register,
  not independently re-checked; uncontested]
- Snapshot staging: **1 setting** — a plate of polao or rice with a
  serving of near-black kala bhuna and salad; the bhuna bowl cropped.
  **2 settings** — two plates; between them a kala bhuna bowl, a beef
  rezala dish and a porota stack. **Small group** — the end of a table
  with three beef dishes, polao, dal and salad, foil-covered plates
  stacked at the edge for neighbours. Cues: the foil-covered shares;
  more meat dishes than diners; a rooftop's string lights at dusk.
- Decor and cues: as Eid ul-Fitr.
- Never stage: the sacrifice, animals, street slaughter, blood, raw meat
  (hard rule 4).
- Confidence and sources: MEDIUM; staging EDITORIAL.

### Celebration: Pohela Boishakh (Bengali New Year, 14 April)
- Type: calendar holiday
- When: 14 April (fixed). Morning songs and processions; the festive
  meal is staged at **midday**, not as breakfast. Intake time: midday
- Gathering: family and friends at home, or groups at melas and
  restaurants; 6–20 [LOW — estimate]. Venue: home indoor, home outdoor
  (rooftop), or restaurant (Boishakhi menus)
- The spread: **panta bhat with fried ilish**, green chilli, onion, salt
  and **several bhorta** (see catalog: Panta-ilish and ilish bhaja;
  Bhorta platter), or the conservation-friendly variant with bhorta and
  **fried shutki or eggs** (see catalog: Shutki); mela sweets **jilapi**,
  murki and batasha (see catalog: Jilapi and shahi jilapi). Served in
  clay sanki plates and small clay bowls. [HIGH for the dishes —
  FESTIVALS register (Wikipedia "Pohela Boishakh", "Panta bhat"); the
  midday staging time is EDITORIAL, chosen to keep the scene out of the
  breakfast scope]
- Snapshot staging: **1 setting** — a clay sanki of panta with an ilish
  piece, chilli, onion and two bhorta mounds on a red-and-white cloth;
  a clay bowl of more bhorta cropped. **2 settings** — two sankis;
  between them a plate of fried ilish pieces and a row of bhorta bowls.
  **Small group** — the end of a table or floor mat with four sankis,
  bhorta bowls running out of frame, a jilapi plate. Cues: red-and-white
  clothes on blurred figures; paper-craft masks or a mela stall soft in
  the background; a long cloth running off frame.
- Decor and cues: red-and-white saris and panjabis, alpona-style floor
  patterns (no lettering), marigolds. Offer ilish and no-ilish variants
  (FESTIVALS register).
- Never stage: legible Bangla New Year greetings; procession floats
  beside the product; political symbols.
- Confidence and sources: as tagged.

### Celebration: Wedding (biye, walima/bou-bhat; gaye holud)
- Type: life event
- When: peaks in winter (roughly November to February) [LOW — not
  re-checked]; the wedding and reception dinners are in the evening.
  Intake time: evening
- Gathering: about 300 to over 1,000 in cities [LOW-MEDIUM — one tier-3
  source]. Venue: other (community centre or convention hall), or home
  outdoor (shamiana) in villages
- The spread: **biyebarir khabar**: **kacchi biryani** or **morog polao**
  (see catalog: Kacchi biryani; Morog polao), **biye barir roast** (see
  catalog: Chicken roast (biyebarir roast)), **jali kebab**, **beef
  rezala** (see catalog: Gorur mangsho bhuna, rezala variant), salad,
  and **jorda or firni** (see catalog: Bakarkhani, firni and jorda);
  borhani is always served and always excluded. Guests receive
  portioned servings of roast; the bride and groom traditionally share a
  whole chicken. [HIGH — Global Voices, TBS "Biye Bari", Yahoo/Tasting
  Table on biye barir roast, Dhaka Tribune]. **Gaye holud** variant
  (turmeric ceremony, daytime): trays of **mishti** (see catalog:
  Mishti), **pitha** (see catalog: Pitha), fruit and the decorated whole
  rui fish gift; chotpoti is often eaten [MEDIUM — Wikipedia "Gaye
  holud", Banglapedia, tier-3 wedding sites].
- Snapshot staging: **1 setting** — a place at a long white-clothed table:
  a plate of kacchi with a mutton piece and potato, a roast chicken leg
  on a side plate, salad; a jorda bowl cropped. **2 settings** — two
  identical places side by side on the long table, the next guest's
  plate edge visible beyond. **Small group** — four places along the
  table; a waiter with a catering bucket and a deg soft behind; the
  stage's flowers far in the background. Cues: the table running out of
  frame on both sides; chafing dishes or a deg; festive fabric on
  blurred guests. Gaye holud variant: daylight, yellow and orange
  marigold decor, a mishti tray and pitha plate in front.
- Decor and cues: marigold and rose strings, fairy lights, red and gold
  fabrics. Avoid Hindu wedding iconography in a Muslim wedding scene.
- Never stage: borhani (hard rule 5); the couple as identifiable faces;
  turmeric-smearing rites on people; legible names on banners.
- Confidence and sources: as tagged.

### Celebration: Mezban (Chattogram community feast)
- Type: community or family gathering
- When: held for a death anniversary, a family milestone, a new
  business or simply as hospitality [LOW-MEDIUM — occasions from
  model knowledge, not confirmed in this pass's search snippets]; lunch.
  Intake time: midday
- Gathering: open to all comers; commonly thousands (3,000–5,000 at
  large ones) [HIGH — sources above]. Venue: home outdoor (a shamiana in
  a courtyard or field) or other (a community ground or hall)
- The spread: steamed **white rice** and **mezbani beef** (see catalog:
  Mezbani beef), with **chonar dal** (chana dal with beef fat chunks),
  **nolar kanji** (beef bone-marrow soup) and **kala bhuna** (see
  catalog: Kala bhuna; the Mezbani beef entry covers chonar dal and
  nolar kanji). [HIGH — The Daily Star, Wikipedia "Mezban", TBS]
- Snapshot staging: **1 setting** — a steel or white plate with a mound
  of rice, a ladle of red, oily mezbani beef and a pool of chonar dal at
  a long trestle table; the next plate's edge in frame. **2 settings** —
  two plates side by side; a bucket of mezbani beef with a ladle
  cropped at the edge. **Small group** — four plates along the table;
  rows of further tables and the shamiana's striped roof soft behind.
  Cues: tables running out of frame; serving buckets and degs; a large
  crowd implied by empty chairs and a server's back, not by faces.
- Decor and cues: plain shamiana, trestle tables, steel plates. A mezban
  for a death anniversary is a memorial: keep the tone warm and
  communal, never festive-party.
- Never stage: the cattle; religious recitation (milad) that may precede
  the meal; alcohol.
- Confidence and sources: HIGH; staging EDITORIAL.

### Celebration: Birthday party
- Type: life event
- When: evenings; at home, a rooftop or a restaurant. Intake time: evening
- Gathering: family and friends, 10–40 [LOW — estimate, not searched].
  Venue: home indoor, home outdoor (rooftop), or restaurant (a Chinese-
  Bangla restaurant or kacchi house)
- The spread: a cake (no entry; shared celebration-cake item in the
  CANDIDATE QUEUE), with **kacchi** or **morog polao** and chicken roast
  at home or delivered (see catalog: Kacchi biryani; Morog polao; Chicken
  roast), or **Chinese-Bangla** dishes at a restaurant (see catalog:
  Chinese-Bangla fried rice, chilli chicken and chicken corn soup).
  [LOW — not searched this pass; built from the file's existing
  restaurant and Gen Z registers]
- Snapshot staging: **1 setting** — a plate of kacchi with roast on a
  table, the cake cropped at the edge. **2 settings** — two plates; the
  roast platter and a salad between them. **Small group** — the end of a
  table with kacchi boxes opened onto a platter, a roast tray and the
  cake; plain balloons soft behind.
- Decor and cues: plain balloons; no numerals or names.
- Never stage: children as the product's audience (TCCC under-13 rule);
  borhani beside kacchi.
- Confidence and sources: LOW; staging EDITORIAL.

### Celebration: Iftar gathering (iftar party / community iftar)
- Type: community or family gathering
- When: Ramadan evenings (~9 Feb–9 Mar 2027), at sunset. Intake time:
  golden-hour to evening
- Gathering: relatives, friends, colleagues or a community; 10–50
  [LOW — estimate]. Venue: home indoor, rooftop, or other (a hall or
  office iftar)
- The spread: the iftar spread (see catalog: Iftar spread; Haleem; Jilapi
  and shahi jilapi), muri makha in one big bowl, fruit; at a party,
  kebabs and chap. [HIGH — FESTIVALS register]
- Snapshot staging: **apply the FESTIVALS register's five iftar staging
  points exactly as written** (untouched table before sunset; hero never
  the fast-breaker; dates and sharbat away from the hero; no religious
  objects; editorial call, not TCCC Bangladesh policy). Within those:
  **1 setting** — an empty plate with the spread in front; **2
  settings** — two places, the muri makha bowl and a piyaju-beguni
  platter between them; **small group** — a stretch of table with the
  fried snacks, chola-muri and fruit running out of frame. The file's
  own neutral alternative (an after-iftar evening snack table) needs no
  new rule.
- Never stage: eating before sunset; prayer imagery; sharbat or water
  beside the hero. **Use only within whatever Fernando decides on the
  open iftar question.**
- Confidence and sources: food HIGH; staging pending sign-off.

---

## GAME NIGHT

Per `country-file-schema.md` §5.8. The snapshot rule (§5.7) applies: the
frame shows only the operator's party, and the crowd is implied. **The
hard staging rules at the top of this file apply to every entry** (halal,
no alcohol, Hindu-household beef rule, Ramadan, cha/borhani/Rooh Afza
never beside the hero, no legible Bangla script, nothing in a hand).
**The Ramadan/iftar staging rule stays exactly as open as it was**
(hard rule 4, FESTIVALS, GAP LOG): any game-night scene in Ramadan is an
after-iftar evening scene and is usable only within whatever Fernando
decides. No existing line in this file covered sport or games before
this pass.

### Watch parties

Two formats dominate: **cricket** (the national team and the
Bangladesh Premier League), watched at home and at neighbourhood **tong**
tea stalls [LOW — not verified], and **World Cup football**, where
Bangladesh's Argentina and Brazil fandom fills public screens and
apartment blocks: about 12,000 people watched on LED screens at Dhaka
University, and neighbours hold overnight watch parties in apartment
blocks [HIGH — AFP/France24 2022; Al Jazeera July 2026]. The signature
viewing foods are jhalmuri, singara, chanachur and muri, with cha at the
tong [LOW — not verified].

#### Watch party: cricket at home and at the tong (national team, BPL)
- When: the BPL, usually December to February in recent seasons, with
  evening matches; national-team T20s in the evening, ODIs from early
  afternoon [LOW — not verified]. Intake time: **golden-hour into
  evening**; winter BPL evenings are cool and dark early.
- Gathering: **home**: the family, 4–10 in a Dhaka flat's drawing-dining
  room [LOW-MEDIUM — editorial]; **tong**: men and young men on the
  bench, 4–12, around a small TV [LOW — not verified]. Venue: home indoor,
  or other (tong tea stall).
- The spread: **home**: **jhalmuri** in a big bowl (see catalog:
  Jhalmuri), **singara** on a plate (see catalog: Singara and samosa),
  chanachur in a bowl (no standalone entry; see CANDIDATE QUEUE), and for
  a family match night **khichuri** or **kacchi** (see catalog: Khichuri;
  Kacchi biryani) or **fuchka** from a cart (see catalog: Fuchka);
  **tong**: singara and biscuits from the glass jars on the counter.
  [LOW — notes]
- Surface and environment: **home**: the dining table against the wall
  or a low centre table, a fitted printed table cover, ceiling fan,
  window grilles, the TV a soft green field. **Tong**: a wooden bench, a
  small TV on a shelf, glass jars of biscuits, bananas hanging, a string
  bulb at dusk. **Cha is the authentic tong drink but an intruder
  drink**: keep the kettle and small glass cups out of frame or fully
  soft, never beside the hero (hard rule 5; QUICK-REFERENCE "Tong").
- Snapshot staging: **1 setting** — a small plate of two singara and a
  paper cone of jhalmuri on plain paper, the hero beside them, the TV
  glow behind. **2 settings** — two plates; the jhalmuri bowl between.
  **Small group** — the centre table with the jhalmuri bowl, a singara
  plate, the chanachur bowl and four small plates; blurred family figures
  facing the screen. Tong variant: a short stretch of bench with two
  singara plates and the hero, blurred backs toward the TV.
- Never stage: the BCB crest, BPL franchise marks, kits with sponsors, a
  legible screen; betting or fantasy apps; cha glasses beside the hero;
  newspaper cones (use plain unprinted paper, SCALE REFERENCE).
- Confidence and sources: LOW throughout (notes, not verified); staging
  EDITORIAL.

#### Watch party: World Cup night (Argentina and Brazil fandom)
- When: the FIFA World Cup (June–July every four years) and Copa
  América. Matches played in the Americas land between midnight and
  dawn in Bangladesh; European evening kick-offs land around midnight to
  03:00 [LOW — time-zone arithmetic]. Intake time: **late night**: a
  night scene with dark windows, a lamp, screen glow and string lights.
  A dawn final is breakfast-adjacent and out of scope; stage it as the
  late-night watch, not a breakfast.
- Gathering: **apartment block**: neighbours from several flats, 10–40,
  on a rooftop or in a ground-floor parking area with a projector
  [HIGH for overnight apartment parties — Al Jazeera July 2026;
  headcount editorial]; **campus or public screen**: thousands [HIGH —
  France24]. Venue: home outdoor (rooftop or the building's ground
  floor), or other (campus LED screen).
- The spread: chanachur and muri in big shared bowls, jhalmuri in paper
  cones, singara (see catalog: Jhalmuri; Singara and samosa) [HIGH for
  the overnight party format, food LOW — notes]; at a rooftop party,
  khichuri or kacchi boxes ordered in (see catalog: Khichuri; Kacchi
  biryani) [LOW — editorial].
- Surface and environment: plastic chairs in rows, a folding table, a
  projector beam on a white sheet or wall as a soft glow, string lights
  along the parapet, rooftop water tanks as silhouettes; sky-blue-and-
  white or yellow-and-green **bunting and paper streamers** as colour.
  Giant Argentina and Brazil flags on rooftops are a real and famous
  Bangladeshi sight, **but never a full flag** (schema §5.7): cropped
  flag-palette bunting soft in the background is the most a scene
  carries.
- Snapshot staging: **1 setting** — a paper cone of jhalmuri and a
  singara on a plate at the edge of a folding table, the projector glow
  far behind. **2 settings** — two plates; a chanachur bowl between.
  **Small group** — the folding table with the muri and chanachur bowls,
  a singara platter and four plates; rows of plastic chairs and blurred
  backs of heads toward the glow (background-people limit).
- Never stage: a full flag of any country, crests, kits with sponsor
  marks, Messi or Neymar faces or cut-outs (real people), legible
  screens; fan clashes; betting; cha glasses beside the hero.
- Confidence and sources: format HIGH (France24, Al Jazeera); timings and
  food LOW; staging EDITORIAL.

### Social game nights

Popularity as an occasion to gather and eat around: **medium**. The
basis: **ludo** "may be the most played" board game and **carrom** is
part of the culture, played at home, in para (neighbourhood) clubs and
at tea-stall corners [MEDIUM — Financial Express BD; Sylhet Today].
Cards are played too but are often gambling-coded and get no entry [LOW
— not verified]. Iftar-then-games (piyaju, beguni, jilapi, muri) is
listed in the notes at LOW and inherits the open iftar decision; this
file's own neutral alternative, the after-iftar evening snack table,
covers it without a new rule.

#### Game night: family ludo at home
- When: evenings at home, rainy-season and winter evenings, Eid
  holidays. Intake time: **evening** [LOW — editorial].
- Gathering: 2–4 players (siblings, cousins, parents), onlookers
  [LOW-MEDIUM — editorial]. Venue: home indoor (the bed or a floor mat,
  the dining table or the centre table in a Dhaka flat).
- The spread: **muri makha** or **jhalmuri** in a bowl (see catalog:
  Jhalmuri), chanachur, and in winter **pitha** on a plate (see catalog:
  Pitha — bhapa, chitoi and patishapta) [LOW — notes list muri makha,
  chanachur, pitha and tea; tea excluded].
- Surface and environment: a plain wooden or card ludo board, generic
  counters and a dice; a ceiling fan, window grilles, a tube light or a
  warm lamp; a monsoon window with rain for a rainy evening.
- Snapshot staging: **1 setting** — the board at one side, a small bowl
  of jhalmuri and the hero beside it. **2 settings** — two small bowls at
  opposite corners of the board. **Small group** — four small plates, one
  by each colour, the muri bowl and a pitha plate at the edge; a blurred
  onlooker on the bed's edge.
- Never stage: a phone showing a ludo app legibly, a branded board,
  money; children's faces (implied only, schema §5.7); cha cups beside
  the hero.
- Confidence and sources: ludo MEDIUM; food LOW; staging EDITORIAL.

#### Game night: carrom in the para club or courtyard
- When: late afternoons and evenings, all year; a winter-evening
  favourite [LOW — not verified]. Intake time: **golden-hour** into
  evening.
- Gathering: 4 players in pairs, young men with onlookers in a para
  club; family members in a village courtyard [MEDIUM for the venues —
  Financial Express BD; headcount editorial]. Venue: other (para club
  room or a corner by the tong) or home outdoor (village uthan, rooftop).
- The spread: **singara** on a plate (see catalog: Singara and samosa),
  chanachur, biscuits; the notes add cha in glasses, which is excluded
  here (hard rule 5) [LOW — notes].
- Surface and environment: a plain wooden carrom board on a stand under
  a bare bulb or tube light, black and white coins and a striker, a
  bench along the wall; a courtyard under trees at golden hour for the
  village variant.
- Snapshot staging: **1 setting** — one corner of the board with coins,
  a stool beside it with a plate of singara and the hero. **2 settings**
  — two plates on a bench by the board. **Small group** — the board with
  stools on four sides, a bench with singara, chanachur and biscuits for
  four; blurred onlookers against the wall.
- Never stage: printed brand marks, money or stakes, cha glasses beside
  the hero, legible club signs or posters.
- Confidence and sources: carrom MEDIUM; food LOW; staging EDITORIAL.

---

## ZONE CALLOUTS (environment + dish pointers)

1. **Dhaka (metro)** — Flats with grilled balconies, rooftops, rickshaw
   streets, food courts, Chinese-Bangla restaurants, fuchka carts by
   Dhanmondi Lake. Everything national is here.
   → catalog: Bhaat-maach-dal; Bhorta platter; Khichuri; Morog polao;
   Fuchka; Chotpoti; Jhalmuri; Singara; Chicken roast; Chinese-Bangla
   fried rice and chilli chicken.
2. **Old Dhaka** — Narrow lanes, old brick, deg pots on street burners,
   Chawkbazar iftar, Nazira Bazar beef, Bangshal, bakarkhani bakeries,
   lassi in clay cups. The kacchi and tehari heartland.
   → catalog: Kacchi biryani; Tehari; Bakarkhani; Boro baper polay khay
   and the iftar spread; Haleem. (Nihari not yet catalogued.)
3. **Chattogram & the coast** — Hills, port, Cox's Bazar's sea fish and
   **shutki** (dried-fish) markets with fish drying on bamboo racks.
   **Mezbani beef**, kala bhuna, chonar dal with beef fat, nolar kanzi
   (bone-marrow soup), loitta (Bombay duck) fry, sea prawns. Hill Tracts
   indigenous food (bamboo-shoot, bamboo-tube chicken — **pork is real in
   some Hill Tracts communities; never staged**).
   → catalog: Mezbani beef; Kala bhuna; Shutki bhorta and shutki
   (zones 3–4).
4. **Sylhet** — Tea gardens, haor wetlands, Londoni houses. **Shatkora
   beef**, akhni pulao, hutki shira (shutki curry with vegetables),
   **shidol** (fermented dried fish) chutney, chunga pitha (rice cooked
   in bamboo), seven-layer tea (documented only). Ties to British
   "curry houses": most UK "Indian" restaurants are Bangladeshi- and
   largely Sylheti-owned (Sylheti share not re-checked) — see `europe/uk.md`.
   → catalog: Shatkora beef; Shutki (zones 3–4). (Akhni not yet catalogued.)
5. **Rajshahi & the North** — Mango orchards, the Padma's sandbanks,
   silk; **kalai ruti** with begun bhorta, chilli bhorta and beef or duck
   (Chapai Nawabganj–Rajshahi); **Bogura doi** (GI 2023; ~50 t a day from
   ~400 producers); mangoes (Fazli, Langra, Ashwina — GI); Kataribhog
   rice (Dinajpur, GI); Natore kanchagolla sweet; Rangpur's shidol and
   "shutki" too (not re-checked).
   → catalog: Kalai ruti; Mishti — rosogolla, chomchom and Bogura doi.
6. **The South: Khulna & Barishal** — Rivers, boats, canals, shrimp
   ponds, coconut palms, the Sundarbans edge; **chui jhal** meat
   (mutton or beef with chopped stems of *Piper chaba*); golda chingri
   (giant river prawn) malaikari; **ilish** heartland (Barishal's rivers,
   Chandpur at the confluence); Barishal's sweets and pitha.
   → catalog: Chui jhal mangsho; Golda chingri malaikari; Shorshe ilish;
   Panta-ilish and ilish bhaja.

---
## DISH CATALOG

*Fields per `country-file-schema.md` §4.5: category · lineage · variants
(§4.6, with a default when unspecified) · format (§4.4) · vessel & scale ·
texture & finish · staging · model failure / confusion · confidence ·
sources · **Composition & proportions (§4.7)**. **Scale anchors: the plate
(~27–30 cm) and named vessels first; "the can" (250 mL, silhouette
unconfirmed — see HERO PRODUCT SLOT) second, and only in comparisons that
hold for either a squat or a slim 250 mL can.** Surface shares and counts
in the §4.7 blocks are editorial synthesis from recipes, market reports and
serving norms unless tagged otherwise — they need image tests.*

### A. The rice table (national core)

#### Bhaat-maach — rui macher jhol with rice (national everyday)

- **Category**: Everyday lunch and dinner. The archetypal Bangladeshi meal
  ("maache-bhaate Bangali" — "fish and rice make a Bengali") [MEDIUM —
  proverb uncontested, not re-checked].
- **Lineage**: Bengali, shared with West Bengal. **Cross-reference**:
  `india.md` zone 8 "Bengali fish meal" carries the same dish; this entry
  agrees with its form (thin turmeric jhol, fried cross-cut steaks, potato)
  and adds the Bangladeshi table around it.
- **Variants (§4.6)**: **rui** (rohu) or **katla** steaks in jhol with
  potato, aubergine or cauliflower (winter); **pabda, tengra, koi, shing,
  magur** (small river and catfish, cooked whole); **chingri** (prawn);
  **ilish** (see its own entries). **Default when unspecified**: rui macher
  jhol with potato. [EDITORIAL fallback; rui as the everyday carp MEDIUM —
  not re-checked]
- **Format**: one plated portion from a shared bowl.
- **Vessel & scale**: rice on a steel or white plate (~27–30 cm); jhol in a
  steel or ceramic bowl (~15 cm) with a serving spoon; on the plate, one
  steak and one potato piece with a ladle of jhol poured over the rice
  edge.
- **Texture & finish**: rice soft and matte; steaks pre-fried, so a
  golden turmeric crust with darker edges, silver-grey skin at the rim,
  the round backbone visible in the centre of the cross-cut; jhol thin,
  orange-yellow, with oil beads; coriander leaves and slit green chillies
  floating.
- **Model failure**: a white fish fillet; a thick "fish masala"; coconut
  milk; a Thai yellow curry with basil.
- **Confidence**: HIGH (form, via `india.md` and Bangladeshi meal-pattern
  sources); MEDIUM (plating and sizes).
- **Composition & proportions (§4.7)** — one person's plate, mid-meal set.
  - **What dominates**: **rice ~55% of the plate surface**; jhol pool
    with fish and potato ~25%; dal and bhorta ~15%; chilli/lemon ~5%.
    [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count (plate / bowl) | Look | Where it sits |
    |---|---|---|---|---|
    | White rice | mound ~15 cm × 6 cm | 1 | Soft, separate, matte white grains | Centre-left of the plate |
    | Rui steak (cross-cut) | ~7–9 cm across, ~2 cm thick, round backbone in centre | 1 on plate; 4–6 in the bowl | Golden-orange fried crust, darker edges, silver-grey skin rim | Right of the rice, half in a pool of jhol |
    | Potato | halves/quarters ~4–5 cm | 1 on plate; 4–6 in bowl | Pale yellow, soft, turmeric-stained | Beside the fish |
    | Jhol | thin, ~1 cm pool on plate | — | Orange-yellow, runny, oil beads | Seeping into the rice edge |
    | Dal | a small bowl ~10 cm, or a ladle on the rice | 1 | Pale yellow, thin, a few cumin/onion bits | Upper edge |
    | Bhorta | mounds ~4–5 cm | 1–2 | Matte, rough, onion and chilli flecks | Upper edge of the plate |
    | Green chilli, lemon wedge, salt | chilli ~6–7 cm | 1 each, a pinch of salt | Bright green; pale yellow-green | Plate rim, top right |

  - **Arrangement**: rice as a low mound left of centre; fish and potato
    to its right with jhol pooling; the small sides at 12 o'clock; the
    serving bowl of jhol behind the plate with 4–6 steaks half-submerged.
  - **Vessel fill**: plate ~75% covered, rim visible; serving bowl ~70%
    full.
  - **Served portion vs. whole**: one steak and one potato per plate, the
    rest stays in the bowl.
  - **State cues**: steam off the rice and jhol; oil beads; fried crust
    softened at the bottom where submerged.
  - **Absent on purpose**: fillets, coconut cream, basil, lemon butter,
    naan, a hand in the rice, a water jug.
  - **Prompt-ready line**: "A round steel dinner plate (about 28 cm), with a low mound of soft white rice filling half of
    it; to its right one round cross-cut fish steak with a golden fried
    crust, silver skin rim and a central bone, a potato piece, in a
    shallow pool of thin orange-yellow curry with oil beads; a small
    rough mound of mashed potato with chilli flecks and a green chilli and
    lemon wedge at the rim. Behind, a steel bowl of the same curry. No
    fillet, no coconut cream."

#### Shorshe ilish (hilsa in mustard)

- **Category**: Special / seasonal (monsoon peak, July–September); the
  dish most often called **Bangladesh's national dish**; ilish is the
  national fish and holds a Bangladeshi GI [HIGH — Wikipedia "Shorshe
  ilish"; TBS GI list].
- **Lineage**: Bengali. **Cross-reference** `india.md` zone 8 (same dish,
  same form: thick opaque mustard gravy, slit chillies) — no contradiction.
- **Variants (§4.6)**: **shorshe ilish** (pan-cooked in mustard paste),
  **bhapa ilish** (steamed in mustard, sometimes in a covered tiffin box
  or banana leaf), **ilish bhaja** (fried, see Panta-ilish), **ilish
  paturi** (in banana leaf), **ilish polao**. **Default when
  unspecified**: shorshe ilish with rice. [EDITORIAL]
- **Cuts**: a 1–1.5 kg Padma/Meghna ilish (35–45 cm long) is cut
  crosswise into steaks; the **peti** (belly, boneless-looking, fattier,
  crescent-shaped) and **gada** (back, round with the spine) are named
  cuts [MEDIUM-HIGH for fish size — Chandpur market reports, fishmonger
  listings; peti/gada terms not re-checked].
- **Vessel & scale**: cooked in a flat **korai** or pan and served in a
  shallow bowl or straight on rice; 2 pieces per portion.
- **Texture & finish**: the gravy is **thick, opaque, grainy
  mustard-yellow**, flecked with darker husk from black mustard, clinging
  rather than pooling, with a glossy rim of **mustard oil**; steaks show
  pale pinkish-white flesh at the cut, silver skin with a faint sheen,
  many fine bones (not visible at a distance); 3–4 **slit green
  chillies** laid on top. [HIGH for paste/chilli/oil — recipes and
  Wikipedia agree]
- **Model failure**: a smooth yellow "curry"; salmon-like fillets;
  Dijon-coloured cream sauce; mackerel.
- **Confidence**: HIGH (form); MEDIUM (cut sizes).
- **Composition & proportions (§4.7)** — the serving dish, 4 pieces, with
  one plated portion.
  - **What dominates**: in the serving dish, **gravy ~45%** of the
    visible surface, fish steaks ~45%, green chillies ~10%; on the plate,
    rice ~60%, two steaks with gravy ~35%.
  - **Component table**:

    | Component | Real size | Count (dish / portion) | Look | Where it sits |
    |---|---|---|---|---|
    | Ilish steaks (gada and peti) | ~8–10 cm across, ~2–2.5 cm thick; peti a crescent ~10 × 5 cm | 4 / 2 | Silver skin edge, pale flesh visible at the cut, coated in yellow paste | Flat in a single layer |
    | Mustard gravy | ~1 cm deep | — | Opaque, grainy mustard-yellow with darker flecks, oil rim | Around and over the fish |
    | Slit green chillies | ~6–7 cm | 3–4 / 1 | Glossy bright green, split lengthwise | Laid across the top |
    | Rice | mound ~15 cm | 1 portion | Soft white | Plate, left |

  - **Arrangement**: steaks in one layer, not stacked; chillies across
    them; gravy filling the gaps.
  - **Vessel fill**: a 20–22 cm shallow bowl or korai ~70% covered; rim
    shows.
  - **Served portion vs. whole**: a portion is 1–2 pieces (one gada, one
    peti) with a spoonful of gravy beside the rice.
  - **State cues**: light steam; oil separating at the edge in a thin
    gold ring.
  - **Absent on purpose**: coconut, tomato, onion rings, coriander heap,
    lemon slices on top, cream, fillets.
  - **Prompt-ready line**: "A shallow round bowl about 22 cm across holding four cross-cut hilsa fish steaks, each about
    the width of a palm, in one layer, coated in a thick, opaque, grainy
    mustard-yellow paste-gravy flecked with darker seed, a thin golden
    ring of mustard oil at the edge, three glossy slit green chillies laid
    across the top; silver skin showing at the steak edges. Not fillets,
    no cream, no coconut."

#### Panta-ilish and ilish bhaja (Pohela Boishakh; monsoon)

- **Category**: Festival (Pohela Boishakh, 14 April) and rural everyday
  (panta); ilish bhaja is everyday-special in the monsoon.
- **Lineage**: Bengali, rural; panta bhat is fermented rice soaked in
  water overnight [HIGH — Wikipedia "Panta bhat"].
- **Variants (§4.6)**: **panta with ilish bhaja** (the iconic Boishakh
  plate); **panta with bhorta and shutki or fried egg** (the
  conservation-friendly version urged since ~2016, see FESTIVALS);
  **ilish bhaja with plain hot rice** (monsoon). **Default when a
  Boishakh brief names none**: offer both; fall back to panta-ilish with
  bhorta. [EDITORIAL, §4.6]
- **Vessel & scale**: panta in a **clay sanki (shallow plate) or a bowl**
  — the clay plate is the festive register at Boishakh restaurants and
  melas [MEDIUM — not independently re-checked].
- **Texture & finish**: panta: soft, swollen, slightly translucent rice
  sitting in cloudy white water; ilish bhaja: turmeric-rubbed steaks
  fried to a **crisp golden-brown crust, darker at the edges**, with a
  little of the frying oil (ilish oil, a prized dark-gold drizzle)
  [MEDIUM — not re-checked].
- **Model failure**: congee or rice pudding; a fried fish fillet with
  chips; milky rice.
- **Confidence**: HIGH (panta and festival link); MEDIUM (plating).
- **Composition & proportions (§4.7)** — one Boishakh clay plate.
  - **What dominates**: **panta rice and water ~55%**; ilish bhaja
    ~20%; bhorta mounds ~15%; onion, chilli, salt ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Panta bhat | ~2 cups in water, ~4–5 cm deep in a bowl, or a low wet mound on a clay plate | 1 | Swollen soft white grains, cloudy water around them | Centre of a clay plate or in a clay bowl |
    | Ilish bhaja | steaks ~8–10 cm, 2 cm thick | 1–2 | Crisp golden-brown crust, dark edges, oil sheen | Resting on the plate edge, not in the water |
    | Bhorta | mounds ~4–5 cm | 2–3 (alu, begun, shutki or dal) | Matte; cream, smoky brown-grey, rust-red | Around the rim |
    | Raw onion | a few thick slices/halves | 3–4 | White-purple, crisp | Rim |
    | Green chillies (sometimes charred dry red chillies) | ~6 cm | 2 | Green / dark red | Rim |
    | Salt | pinch | 1 | White | Rim |

  - **Arrangement**: rice in the centre, accompaniments ringing it.
  - **Vessel fill**: a ~25–28 cm terracotta plate ~80% covered; a
    terracotta rim shows.
  - **Served portion vs. whole**: this is the portion.
  - **State cues**: panta cool (no steam); ilish freshly fried, glistening;
    the clay matte and dry at the rim.
  - **Absent on purpose**: steam on the panta, milk, sugar, cutlery
    beyond a spoon, Western garnish, festival text banners.
  - **Prompt-ready line**: "A round unglazed terracotta plate about 26 cm
    across: in the centre soft swollen white rice sitting in cloudy
    water, cool and steam-free; at the edge one crisp golden-brown fried
    hilsa steak about the width of a palm with dark crusted edges and an
    oil sheen; around the rim three small matte mounds of mashed potato,
    smoky aubergine and rust-red dried-fish paste, thick slices of raw
    onion, two green chillies and a pinch of salt."

#### Bhorta platter (alu, begun, shutki, dal and more)

- **Category**: Everyday; a central part of nearly every rice meal and
  the star of "bhorta-bhaat" restaurants and dawat tables.
- **Lineage**: Bengali; **bhorta is more central and more varied in
  Bangladesh than in West Bengal** (where "bhaja" and "bata" carry more
  weight) [MEDIUM — Whetstone, withaspin; contrast EDITORIAL].
- **Variants**: **alu** (potato, the most popular, smooth), **begun**
  (fire-roasted aubergine, coarser), **shutki** (dried fish — shrimp,
  anchovy, loitta), **dal** (fried lentils), **tomato** (charred), **kalo
  jira**, **shim** (bean), **lau-shak**, **chingri** (prawn), **sorshe**
  (mustard), **kacha morich** (green chilli) [HIGH — withaspin, The Spice
  Odyssey, Whetstone]. **Default**: alu + begun + one shutki or dal.
- **Form**: one main ingredient boiled, roasted or fried, then hand-mashed
  with raw onion, chilli, coriander and **raw mustard oil**, often shaped
  into a small ball or mound by hand [HIGH].
- **Model failure**: hummus, guacamole, baba ganoush with olive oil and
  pita, a smooth swirl with a well of oil.
- **Confidence**: HIGH (form and types); MEDIUM (sizes).
- **Composition & proportions (§4.7)** — a six-bhorta platter for a
  dawat, with a rice bowl.
  - **What dominates**: **six small mounds ~85%** of the platter surface,
    white platter showing between them ~15%; each mound roughly equal,
    the colours doing the work.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Alu bhorta | ball/mound ~5–6 cm, ~3 cm tall | 1 | Smooth-ish pale cream-yellow, chopped onion, green chilli and coriander flecks, faint mustard-oil gloss | Clockwise from 12 |
    | Begun bhorta | mound ~5–6 cm | 1 | Coarse, smoky grey-brown-green, fibrous, a few charred skin flecks | Next |
    | Shutki bhorta | mound ~4–5 cm | 1 | Dense, dry, rust-red to brick-red, fine fibrous texture | Next |
    | Dal bhorta | mound ~5 cm | 1 | Matte ochre-yellow, slightly grainy | Next |
    | Tomato bhorta | mound ~5 cm | 1 | Soft orange-red, flecked with charred skin | Next |
    | Shak/green bhorta (e.g. coriander, lau shak) | mound ~4–5 cm | 1 | Dark green, coarse | Centre or last |
    | Fried dry red chilli | ~5 cm | 2–3 | Dark crimson, shiny | Tucked between mounds |

  - **Arrangement**: mounds in a ring on a round platter, or in a row of
    small bowls; deliberately not touching.
  - **Vessel fill**: a ~28 cm platter ~85% covered.
  - **Served portion vs. whole**: a diner takes a teaspoon-sized pinch of
    2–3 bhortas onto the rice edge.
  - **State cues**: room temperature, no steam; mustard-oil gloss, matte
    otherwise.
  - **Absent on purpose**: olive-oil pools, pita, crackers, smooth swirled
    dips, herbs as leafy garnish, paprika dusting.
  - **Prompt-ready line**: "A round white platter about 28 cm across
    with six separate small hand-shaped mounds, each about the size of a
    golf ball flattened slightly: smooth pale cream mashed potato flecked with onion and green
    chilli, coarse smoky grey-brown mashed aubergine, dense brick-red
    dried-fish paste, matte ochre lentil mash, soft orange-red charred
    tomato mash and a dark green herb mash, with a few shiny fried dry red
    chillies between them; a faint mustard-oil gloss. Not hummus, no pita."

#### Masoor dal and shobji (lentils and everyday vegetables)

- **Category**: Everyday — on almost every rice table.
- **Form**: **patla dal** — thin, pourable red-lentil (masoor) dal,
  pale yellow, tempered with **panch phoron or kalo jira**, onion, dried
  chilli and garlic fried in oil; **shobji/bhaji/torkari** — lau
  (bottle gourd), lal shak (red amaranth, which stains the plate pink-red),
  mixed vegetables, begun bhaja [MEDIUM — not independently re-checked;
  uncontested].
- **Model failure**: a thick dal makhani (black, creamy — North Indian);
  a lentil soup with croutons.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one dal bowl and one shak
  side, as a pair.
  - **What dominates**: dal liquid ~70% of the bowl surface, tempering
    ~10%; the shak plate: leaves ~80%, garlic ~10%, red juice ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Patla dal | bowl ~12–15 cm, ~4 cm deep | 1 | Thin, pale golden-yellow, slightly frothy, lentils dissolved | Bowl |
    | Tempering (fried onion, garlic slivers, dry chilli, seeds) | small bits | a spoonful | Brown, glossy, a few black kalo jira seeds | Floating on top, one side |
    | Lal shak bhaji | portion ~10 cm | 1 | Wilted dark green leaves with crimson-pink stems and juice | Small plate or plate edge |
    | Garlic slivers in the shak | ~1 cm | 6–10 | Pale gold | Through the leaves |

  - **Arrangement**: tempering floating to one side of the dal; shak in a
    loose heap.
  - **Vessel fill**: dal bowl ~80%; shak covers a 15 cm plate ~60%.
  - **Served portion vs. whole**: one ladle of dal over the rice edge.
  - **State cues**: steam on dal; shak glossy with oil.
  - **Absent on purpose**: cream, butter swirl, thick black lentils,
    croutons.
  - **Prompt-ready line**: "A steel bowl about 14 cm across of
    thin, slightly frothy, pale golden-yellow lentil dal with a scatter of
    browned onion, garlic slivers, black seeds and one dark dried chilli
    floating at one side, steaming; beside it a small heap of wilted dark
    green leaves with crimson stems bleeding pink juice onto the plate."

#### Gorur mangsho bhuna (beef bhuna)

- **Category**: Everyday-special; weekend, guests, and every Eid ul-Adha.
- **Lineage**: Bengali Muslim; **beef is mainstream in Bangladesh** —
  this is the single largest visual difference from `india.md`'s gated
  beef. Not for Hindu-household scenes (hard rule 3).
- **Variants**: home beef curry (jhol-er mangsho, with potato, thinner);
  **bhuna** (dry-fried, thick masala); **kala bhuna** (Chattogram, see
  B); **rezala** (white, yoghurt-and-poppy, Mughlai — Eid/weddings);
  **mezbani** (Chattogram). **Default when unspecified**: beef bhuna.
- **Vessel & scale**: a korai or bowl; pieces bone-in, ~4–5 cm cubes.
- **Texture & finish**: dark rust-brown, oil separated at the edges,
  thick masala clinging, some fat and bone pieces; whole spices (cardamom,
  bay leaf, cinnamon stick) visible.
- **Model failure**: a Western beef stew with carrots; a smooth "tikka
  masala"; beef rendered pink.
- **Confidence**: MEDIUM — not independently re-checked; uncontested.
- **Composition & proportions (§4.7)** — the serving bowl.
  - **What dominates**: **meat pieces ~70%**, clinging masala ~20%,
    separated oil ~5%, whole spices/potato ~5%.
  - **Component table**:

    | Component | Real size | Count (bowl / portion) | Look | Where it sits |
    |---|---|---|---|---|
    | Beef pieces, bone-in, some with fat | ~4–5 cm chunks | 12–16 / 3–4 | Deep rust-brown, matte-glossy coating, fat edges translucent | Heaped |
    | Masala | thick, clinging | — | Dark brown-red, grainy | Coating the meat |
    | Separated oil | thin ring | — | Red-tinged gold | At the bowl edge |
    | Whole spices | cardamom pods, bay leaf ~6 cm, cinnamon ~5 cm | 3–5 | Green-brown, dull | Scattered on top |
    | Potato (optional) | halves ~5 cm | 2–3 | Rust-stained | Among the meat |

  - **Arrangement**: a heaped, irregular pile; no garnish beyond a few
    coriander leaves.
  - **Vessel fill**: a ~18 cm bowl ~80% full, heaped slightly in the
    centre.
  - **Served portion vs. whole**: 3–4 pieces next to the rice.
  - **State cues**: hot, faint steam, oil glistening.
  - **Absent on purpose**: carrots, peas, cream, pink meat, cubes of
    uniform size, rice on top.
  - **Prompt-ready line**: "A bowl about 18 cm across heaped with
    bone-in beef chunks each about 4–5 cm, a bite-and-a-half size,
    coated in a thick dark rust-brown dry masala, some with translucent
    fat edges; a thin red-gold ring of separated oil at the bowl's edge;
    a bay leaf, cardamom pods and a cinnamon stick on top; faint steam.
    Not a stew with carrots, no cream."

#### Chicken roast (biyebarir roast) and murgir jhol

- **Category**: Special (weddings, Eid, dawat) — **"roast"** in
  Bangladesh means **whole chicken legs or halves braised in a rich,
  sweetish, ghee-and-yoghurt onion gravy**, not oven-roasted [MEDIUM —
  not independently re-checked; well known]. Everyday chicken is
  **murgir jhol/korma** with potato.
- **Model failure**: an oven-roasted whole chicken with crisp skin;
  tandoori chicken (red, charred).
- **Confidence**: MEDIUM — not independently re-checked.
- **Composition & proportions (§4.7)** — one plate of polao with roast.
  - **What dominates**: polao rice ~55%, roast quarter ~30%, gravy ~10%,
    egg/salad ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Chicken roast (leg quarter) | ~14–16 cm long | 1 | Pale golden-brown, skin soft not crisp, glossy with ghee, fried-onion bits | On top of the polao, right |
    | Roast gravy | spoonful | — | Thick, beige-golden, oily, flecked with fried onion | Around the chicken |
    | Polao (white, fragrant) | mound ~16 cm | 1 | Ivory-white, short fragrant grains, ghee gloss, a few cardamom pods | Plate centre-left |
    | Boiled egg (optional, in roast gravy) | ~5 cm | 1 | Golden-tinged | Beside chicken |
    | Salad | cucumber slices, onion rings, green chilli | small heap | Fresh green-white | Plate edge |

  - **Arrangement**, **vessel fill**: one quarter on a mound of polao on a
    ~28 cm plate, ~80% covered.
  - **Served portion vs. whole**: one piece per guest.
  - **State cues**: ghee sheen; warm.
  - **Absent on purpose**: crisp oven skin, tandoori red, grill marks,
    potatoes roasted.
  - **Prompt-ready line**: "A plate of ivory-white fragrant rice with a
    ghee sheen, topped with one chicken leg quarter about half the plate's
    width long in soft pale golden-brown skin glossy with ghee, sitting
    in a little thick golden onion-yoghurt gravy flecked with fried
    onion; a few slices of cucumber, onion and a green chilli at the edge.
    Not oven-roasted, no grill marks."

#### Khichuri — rainy-day (naram/bhuna) with ilish bhaja, beef or egg

- **Category**: Everyday comfort; **the monsoon dish** — "rain is almost
  synonymous with eating khichuri for Bengalis" [HIGH — withaspin, British
  Curry Network, regional food writing]. Also Friday lunch, winter
  picnics, and Durga Puja bhog (Hindu, no beef).
- **Variants (§4.6)**: **naram (soft/wet) khichuri** — a loose,
  porridge-like rice-and-lentil dish, pale yellow, spooned into a
  pool; **bhuna khichuri** — moong dal dry-roasted first, then cooked
  with rice, whole spices and often potato and vegetables into a
  **thicker, drier, grain-separate** dish [HIGH — withaspin, Not Out of the
  Box]. In Bangladesh it is "mainly served with **fried hilsa, beef
  (rezala/bhuna) or an egg curry and alu bhorta**", with **begun bhaja**
  and achar [HIGH — British Curry Network, foodingbd]. **Default when a
  rainy-day brief names none**: bhuna khichuri with begun bhaja and dim
  bhuna (egg curry) — works for any household; offer the ilish and beef
  pairings. [EDITORIAL]
- **Vessel & scale**: served from the pot (dekchi) onto a plate or a deep
  plate; sides in small bowls.
- **Texture & finish**: naram: soft, glossy, loose, pale turmeric-yellow,
  some lentils whole, ghee on top; bhuna: grains distinct, deeper golden,
  flecked with green peas, potato cubes, whole spices.
- **Model failure**: Indian dal-rice khichdi as a beige mush (for the
  bhuna form); risotto; Spanish paella colours.
- **Confidence**: HIGH (form and pairings).
- **Composition & proportions (§4.7)** — one rainy-day plate of bhuna
  khichuri with begun bhaja and dim bhuna.
  - **What dominates**: **khichuri ~60% of the plate**; egg curry ~15%;
    begun bhaja ~15%; achar/chilli ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Bhuna khichuri | mound ~16 cm × 5 cm | 1 | Golden-yellow, grains distinct, flecked with yellow moong, a few peas and potato cubes (~2 cm), cardamom/bay leaf | Centre-left |
    | Begun bhaja | round slices ~7–9 cm, ~1 cm thick | 2 | Turmeric-orange edges crisp and dark, silky pale centre, purple skin rim | Right edge, overlapping |
    | Dim bhuna (egg curry) | halved boiled eggs ~5 cm | 1 egg (2 halves) | Egg white golden-browned (fried before saucing), in thick red-brown onion masala | Upper right |
    | Ghee | a small spoon | — | Golden melt | On top of the khichuri |
    | Achar / green chilli | spoonful / 1 chilli | 1 | Oily red mango pickle; green | Rim |

  - **Arrangement**: khichuri mounded, sides fanned around it.
  - **Vessel fill**: ~28 cm plate ~80% covered.
  - **Served portion vs. whole**: the portion; the pot stays behind.
  - **State cues**: **steam** (rainy-day register), grey wet light at a
    window with rain streaks.
  - **Absent on purpose**: cheese, cream, Western sausage, prawn-and-
    mussel paella cues, a tea cup.
  - **Prompt-ready line**: "A plate about 28 cm across with a steaming
    mound of golden-yellow rice-and-lentil khichuri, grains distinct,
    flecked with yellow lentils, a few green peas and small potato cubes,
    a melting spoon of ghee on top; beside it two round slices of fried
    aubergine about a hand's palm across with crisp dark turmeric edges and
    silky centres, and a halved golden-browned boiled egg in thick red-brown
    masala; a little oily red pickle. Rain-grey window light."

#### Morog polao (chicken pulao, Dhaka)

- **Category**: Special — weddings, dawat, Friday, Eid; Old Dhaka
  restaurants (Nanna's "shahi morog polao" is a famous name) [MEDIUM —
  Bangladesh business directory, Haji/Nanna listings].
- **Form**: fragrant short-grain **polao rice (chinigura or kalijira)**,
  ivory-white with patches of ghee-yellow, cooked in chicken stock with
  whole spices, with **chicken pieces** (often half or quarter "roast"
  pieces or a ghee-braised curry piece) on top, a **boiled egg**, fried
  onion (beresta), sometimes a few raisins or plums (alu bokhara) [MEDIUM
  — not independently re-checked; chinigura as the polao rice MEDIUM].
- **Confusable**: kacchi (long-grain, mutton, potato, deeper colour
  patches); biryani in general; Indian pulao with peas and carrots.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one restaurant plate.
  - **What dominates**: **rice ~65%**, chicken ~20%, egg ~7%, beresta and
    garnish ~8%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Polao rice (short, fragrant grain) | mound ~16 cm | 1 | Small, plump ivory grains, ghee gloss, a few yellow patches, cardamom pods | Bulk of the plate |
    | Chicken piece (leg or breast quarter, braised) | ~10–14 cm | 1 | Pale golden, gravy-coated, soft skin | Half-buried on top |
    | Boiled egg | ~5 cm | 1 (whole or halved) | White, sometimes ghee-browned | Beside the chicken |
    | Beresta (fried onion) | slivers | a pinch | Deep brown, crisp | Scattered on top |
    | Alu bokhara / raisins (optional) | ~1.5 cm | 2–4 | Dark red-brown, glossy | Scattered |
    | Salad on the side | cucumber, onion, chilli | small | Fresh | Side plate |

  - **Arrangement**: chicken nested into the rice mound.
  - **Vessel fill**: plate ~75% covered.
  - **Served portion vs. whole**: one piece of chicken, one egg.
  - **State cues**: steam, ghee sheen.
  - **Absent on purpose**: peas and carrots, saffron-red rice, long
    basmati, potato (that's kacchi), raita.
  - **Prompt-ready line**: "A white plate about 28 cm across filled with a
    mound of small, plump, ivory-white fragrant rice grains glossy with
    ghee and scattered with cardamom pods and crisp brown fried onion; a
    pale golden braised chicken piece about half the plate's width half
    buried on top, a whole boiled egg beside it, two dark glossy dried
    plums. Steam rising. No peas or carrots, no potato."

### B. Biryani and pilaf (Old Dhaka — zone 2 authoritative)

#### Kacchi biryani (Old Dhaka; national)

- **Category**: Special-everyday — weddings, celebrations, and the
  weekday kacchi-house lunch; Dhaka's signature.
- **Lineage**: Mughal/Awadhi lineage, **Dhakai** form. **Kacchi = raw**:
  **raw mutton (khashi, goat) marinated in yoghurt and spices is laid at
  the bottom of the pot, partly cooked rice layered over it with
  potatoes, and the lid sealed** (dum) [HIGH — Haji Biryani Wikipedia;
  Dhaka Tribune; experiencesofagastronomad]. Fakhruddin's version is
  noted for **potatoes with meat in a specific ratio** [MEDIUM — Dhaka
  Tribune history piece].
- **Variants (§4.6)**: mutton kacchi (default), **beef kacchi** (cheaper,
  common), chicken kacchi; **Haji biryani** (Old Dhaka; mutton, not a
  sealed-pot "kacchi" in every account); Sultan's Dine / Kacchi Bhai
  chains for the modern register. **Default**: mutton kacchi with a
  potato. Served with **borhani** (never staged), a small salad, and at
  some houses a **jali kebab** or chicken roast as an extra. [HIGH for
  borhani + salad + egg as accompaniments — Wikipedia Haji biryani]
- **Cross-reference / contrast with `india.md`**: India's **Kolkata
  biryani** has "a large potato and a boiled egg"; **Dhaka kacchi
  typically has the potato, and the egg is an optional side**, not
  standard in the rice [MEDIUM — the Haji biryani entry says "often a
  boiled egg… served with this"; EDITORIAL default: egg off the plate
  unless briefed]. Kolkata biryani is pale; Dhaka kacchi shows
  **saffron/food-colour patches and a strong ghee gloss** [LOW-MEDIUM —
  not re-checked].
- **Vessel & scale**: cooked in a deg; served on a white or steel plate,
  or in a **foil/plastic takeaway box** (the Gen Z/office register).
- **Texture & finish**: long, separate grains (Bangladeshi kacchi uses
  long-grain, often basmati or kataribhog) — **mostly white with
  saffron-orange and yellow patches**, ghee-glossy, flecked with fried
  onion; the mutton piece bone-in, soft, dark brown with spice coating
  from the marinade; the **potato** whole or halved, golden-orange,
  stained, soft; a few **plums (alu bokhara)** and whole spices.
- **Model failure**: uniform yellow biryani; Hyderabadi biryani with mint
  heaps and lemon wedges; fried rice; chicken drumsticks standing up.
- **Confidence**: HIGH (method, accompaniments); MEDIUM (plating).
- **Composition & proportions (§4.7)** — one kacchi-house plate.
  - **What dominates**: **rice ~65%** of the plate; mutton piece(s)
    ~15%; potato ~10%; salad/garnish ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Kacchi rice | mound ~18 cm × 6 cm | 1 | Long separate grains, mostly white, patches of saffron-orange and pale yellow, ghee gloss, fried onion flecks | Bulk of the plate |
    | Mutton piece, bone-in | ~6–8 cm | 1–2 (a "full" plate has 2) | Dark brown, soft, spice-crusted from the marinade, a little exposed bone | On top of the rice |
    | Potato | whole medium ~6 cm or a half | 1 | Golden-orange stained, soft, smooth | Beside the meat, on the rice |
    | Alu bokhara (dried plum) | ~1.5–2 cm | 1–2 | Dark red-brown, glossy | On the rice |
    | Whole spices | cardamom, cinnamon, bay | 2–4 | Green-brown | Scattered |
    | Salad | cucumber slices, onion, green chilli, lemon | small | Fresh green-white | Plate edge or side dish |

  - **Arrangement**: meat and potato placed on top of a domed rice
    heap, the salad at the side.
  - **Vessel fill**: ~28 cm plate ~80% covered.
  - **Served portion vs. whole**: a "half" plate (one piece) or "full"
    plate (two); the deg is never on the table.
  - **State cues**: steam; ghee shine; grains just separated by a
    serving spoon.
  - **Absent on purpose**: boiled egg in the rice (unless briefed),
    mint/coriander heaps, lemon wedges on the rice, raita, borhani glass,
    peas, carrots, chicken drumstick for a mutton brief.
  - **Prompt-ready line**: "A white plate about 28 cm across with a
    domed heap of long, separate rice grains, mostly white with patches of
    saffron-orange and pale yellow, glossy with ghee and flecked with
    fried onion; on top one bone-in piece of dark brown, spice-crusted,
    tender mutton about the size of a palm and one whole golden-orange
    stained potato; a dark glossy dried plum; cucumber, onion and green
    chilli at the edge. Steam rising. No egg, no mint heap, no yoghurt
    drink."

#### Tehari (Old Dhaka beef pilaf)

- **Category**: Everyday — cheap Old Dhaka lunch; breakfast-to-lunch at
  famous tehari shops.
- **Form**: **short-grain aromatic rice** cooked in the leftover gravy of a
  **beef (or mutton) curry made in mustard oil**, then mixed with the
  meat and **lots of fresh green chillies** and cooked on low heat;
  "a strong whiff of mustard oil" [HIGH — The Spice Odyssey, Cookish
  Creation, Wikipedia "Varieties of biryani"]. Small beef cubes, not big
  bone-in pieces; **no potato** (by most accounts) [MEDIUM].
- **Confusable**: kacchi (long grain, big mutton piece, potato, white with
  saffron patches); tehri of North India (vegetarian, with potato and
  peas).
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: **rice ~75%**; small beef pieces ~15% (scattered
    through); green chillies ~5%; salad ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Tehari rice | mound ~16 cm | 1 | Short plump grains, evenly **pale yellow-gold to light ochre** throughout (not patchy), oily sheen | Bulk |
    | Beef cubes | ~2–3 cm | 8–12 | Dark brown, oily, soft | Scattered through and on top |
    | Whole green chillies | ~5–6 cm | 3–5 | Bright glossy green, some blistered | On top |
    | Salad (cucumber, onion) | slices | small | Fresh | Side |

  - **Arrangement**: beef evenly distributed through the rice, chillies on
    top.
  - **Vessel fill**: ~26 cm plate ~75%; often a melamine or steel plate.
  - **Served portion vs. whole**: the portion.
  - **State cues**: mustard-oil sheen, steam.
  - **Absent on purpose**: big bone-in meat, potato, egg, saffron
    patches, peas.
  - **Prompt-ready line**: "A steel plate about 26 cm across with a mound
    of short, plump rice grains evenly tinted pale ochre-gold and glossy
    with mustard oil, studded throughout with small dark brown beef cubes
    each about the size of a thumb tip, four bright green whole chillies
    laid on top; steam; cucumber and onion slices at the side. No large
    meat pieces, no potato, no egg."

#### Chinese-Bangla fried rice, chilli chicken and chicken corn soup (compact)

- **Category**: Special outing — the Dhaka "Chinese restaurant" is a
  middle-class celebration register since the late 20th century [LOW-
  MEDIUM — not independently re-checked; widely written about].
- **Form**: pale fried rice with egg, diced carrot and spring onion;
  **chilli chicken / chicken jhal fry** with green capsicum and onion in a
  glossy dark sauce; thick **Thai/chicken corn soup** with egg ribbons in
  a big bowl; prawn crackers [LOW-MEDIUM].
- **Model failure**: authentic Chinese dim sum, chopsticks-only
  presentation, red pork.
- **Confidence**: LOW-MEDIUM.
- **Composition & proportions (§4.7)** — shared table for two.
  - **What dominates**: fried rice platter ~40% of the table area, soup
    bowl ~25%, chilli chicken ~25%, crackers ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Fried rice | oval platter ~30 cm, mound ~6 cm | 1 | Pale golden, egg bits, carrot dice, spring onion | Centre |
    | Chilli chicken | pieces ~3 cm | 12–15 | Glossy dark-brown sauce, green capsicum squares, onion petals | Oval dish right |
    | Corn soup | big bowl ~22 cm | 1 | Thick, cloudy pale yellow, egg ribbons, corn kernels | Left, with small bowls |
    | Prawn crackers | ~5–6 cm | a handful | Puffy, pale pink-white | Small plate |

  - **Arrangement**, **vessel fill**: dishes in the table centre, each
    ~75% full; two small plates.
  - **Served portion vs. whole**: shared.
  - **State cues**: steam from soup; glossy sauce.
  - **Absent on purpose**: pork, chopsticks only, legible menu.
  - **Prompt-ready line**: "In a dimly lit restaurant, an oval platter
    about 30 cm long of pale golden fried rice with egg bits, diced carrot
    and spring onion; a dish of glossy dark-brown chilli chicken with
    green capsicum squares and onion; a large bowl of thick, cloudy pale
    yellow corn soup with egg ribbons, steaming; a small plate of puffy
    pale prawn crackers."

### C. Regional signatures

#### Mezbani beef (zone 3 — Chattogram)

- **Category**: Feast — the Chattogram **mezban** (community feast for a
  death anniversary, a celebration, or a good harvest), now also
  restaurant food [HIGH — Wikipedia "Mezban", The Daily Star "Majestic
  Mezban", TBS].
- **Form**: **beef slow-cooked in huge pots for hours** with a regional
  spice blend (nutmeg, mace, **white mustard**, a fiery local chilli),
  using every part — **meat, bones, fat, offal** — into a **rich, dark,
  oily, very hot gravy**; served with plain white rice, **chonar dal**
  (chana dal cooked with beef fat chunks and bones) and **nolar kanzi**
  (bone-marrow soup); **kala bhuna** alongside [HIGH — Wikipedia "Mezban",
  The Daily Star, TBS].
- **Vessel & scale**: feast-hall: rice heaped on plates, beef ladled from
  buckets; restaurant: a bowl. Pieces mixed, ~3–5 cm, many with fat and
  bone.
- **Texture & finish**: dark red-brown gravy, **a thick layer of red oil
  on top**, meat pieces irregular, some fat cubes translucent, bone
  fragments.
- **Model failure**: a neat steak; a goulash; a pho.
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — one mezbani plate.
  - **What dominates**: **rice ~50%**; mezbani beef with gravy ~35%;
    chonar dal ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | White rice | mound ~16 cm | 1 | Plain, soft | Left |
    | Mezbani beef pieces (meat, fat, bone, some offal) | ~3–5 cm, irregular | 6–8 | Dark red-brown; translucent fat; bone pieces | Right, in gravy |
    | Gravy with red oil | ~1 cm pool, oil layer | — | Dark red-brown, **red oil slick on top** | Around the meat, bleeding into rice |
    | Chonar dal with beef fat | ladle | 1 | Thick, ochre-yellow, lentils whole, fat chunks | Upper part of plate or small bowl |

  - **Arrangement**: beef ladled heavily to one side; dal beside it.
  - **Vessel fill**: steel or white plate ~85% covered — a feast plate is
    full.
  - **Served portion vs. whole**: as above; seconds are ladled.
  - **State cues**: steam, the oil slick shining.
  - **Absent on purpose**: neat uniform cubes, carrots, cream, coriander
    heap.
  - **Prompt-ready line**: "A steel plate about 28 cm across, full: a
    mound of plain white rice on the left; on the right a heavy ladle of
    irregular beef pieces, some with translucent fat and bits of bone, in
    a dark red-brown gravy under a shining slick of red oil that bleeds
    into the rice; a ladle of thick ochre chickpea-lentil dal with fat
    chunks at the top. Steam. No neat cubes, no garnish."

#### Kala bhuna (zone 3 — Chattogram; national)

- **Category**: Special — mezban, Eid ul-Adha, restaurants.
- **Form**: **beef (or mutton) cooked down for a long time until almost
  black — "kala" means black** — dry, with onions, in mustard oil; little
  or no gravy [HIGH — Wikipedia "Kala Bhuna", The Daily Star].
- **Model failure**: burnt meat; a glossy black-bean stir fry; jerky.
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — a serving bowl.
  - **What dominates**: **meat ~85%**, onion/spice crust ~10%, oil ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Beef pieces | ~3–4 cm | 15–20 | Very dark brown-black, matte-glossy, dry, slightly crusted edges | Heaped |
    | Caramelised onion and spice crust | flakes | — | Near-black, clinging | On the meat |
    | Oil | thin film | — | Dark | At the bottom edge |
    | Whole spices, a green chilli | — | few | Contrast colour | On top |

  - **Arrangement**, **vessel fill**: heaped in a ~18 cm bowl ~80% full.
  - **Served portion vs. whole**: 4–6 pieces with rice or porota.
  - **State cues**: dry, no gravy; a slight oil gleam.
  - **Absent on purpose**: gravy, sauce, burnt char marks, sesame.
  - **Prompt-ready line**: "A bowl about 18 cm across heaped with dry
    bite-sized beef pieces cooked down to a very dark, almost black
    brown, crusted with caramelised onion and spice, a faint oil gleam,
    no gravy; a single green chilli and a bay leaf on top. Not burnt, no
    sauce."

#### Shatkora beef (zone 4 — Sylhet)

- **Category**: Everyday-special in Sylhet; British-Bangladeshi diaspora
  favourite.
- **Form**: beef slow-cooked with **shatkora** (*Citrus macroptera*, a
  wild bitter-sour citrus, "hatkora" in Sylheti) — the **thick rind** cut
  into wedges or chunks and cooked with the meat, giving a tangy, slightly
  bitter, aromatic curry [HIGH — Wikipedia "Satkara beef", Sylheti-cuisine
  sources].
- **Model failure**: beef with lemon slices; an orange-glazed stir-fry.
- **Confidence**: HIGH (form); MEDIUM (look of the rind pieces — not
  photographed this pass).
- **Composition & proportions (§4.7)** — serving bowl.
  - **What dominates**: **beef ~65%**, gravy ~20%, shatkora pieces ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Beef pieces | ~4 cm | 12–15 | Rust-brown, soft | Heaped |
    | Shatkora rind pieces | wedges ~4–5 cm × 1.5 cm | 5–7 | Thick, pale yellow-green rind with white pith, softened, curry-stained | Among the meat, visible on top |
    | Gravy | medium-thick | — | Brown-red, oil at the edge | Around |

  - **Arrangement**, **vessel fill**: ~18 cm bowl ~80%.
  - **Served portion vs. whole**: 3–4 pieces + 1 rind piece on rice.
  - **State cues**: steam, oil.
  - **Absent on purpose**: lemon slices, orange segments, zest
    garnish, cream.
  - **Prompt-ready line**: "A bowl about 18 cm across of rust-brown beef
    pieces in a medium-thick brown-red gravy with oil at the edge, mixed
    with several thick wedges of softened citrus rind, pale yellow-green
    with white pith and curry-stained; steaming. Not lemon slices, no
    orange segments."

#### Shutki — shutki bhorta and hutki shira (zones 3–4; national)

- **Category**: Everyday in Chattogram, Cox's Bazar and Sylhet; national
  as bhorta. Dried fish (loitta/Bombay duck, chingri/prawn, churi/
  ribbonfish, mola) sun-dried on **bamboo racks** along the coast
  [MEDIUM — Wikipedia, Sylheti sources; racks not re-checked]. Sylhet's
  **shidol** is a fermented dried fish (puti), and **hutki shira** a curry
  of dried fish with vegetables and greens [HIGH — Sylheti-cuisine
  sources].
- **Sensitivity**: strong smell; some urban viewers find it rustic. It is
  a proud regional food — stage it plainly, not as an oddity. [EDITORIAL]
- **Model failure**: whole dried fish heaped as on a market tarp at the
  table; jerky.
- **Confidence**: MEDIUM-HIGH.
- **Composition & proportions (§4.7)** — a hutki shira bowl with a shutki
  bhorta mound.
  - **What dominates**: in the bowl, vegetables and greens ~50%, gravy
    ~30%, dried fish pieces ~20%; the bhorta is a separate rust-red mound.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Dried fish pieces (loitta or shidol) | ~4–6 cm | 6–8 | Grey-brown, fibrous, softened, curling | In the curry |
    | Vegetables (aubergine, potato, gourd, greens) | ~3–4 cm | mixed | Soft, stained | Bulk of the bowl |
    | Gravy | thin-medium | — | Red-brown, oily, chilli heat visible | Around |
    | Shutki bhorta | mound ~5 cm | 1 | Dense brick-red, fibrous, onion and chilli flecks | Side plate |

  - **Arrangement**, **vessel fill**: ~16 cm bowl ~80%.
  - **Served portion vs. whole**: a spoon over rice; a pinch of bhorta.
  - **State cues**: oily, hot, steam.
  - **Absent on purpose**: whole stiff dried fish on the dining table,
    flies, market tarps.
  - **Prompt-ready line**: "A bowl about 16 cm across of a red-brown,
    oily, chilli-hot curry of soft aubergine, potato and greens with
    several softened, curling grey-brown dried-fish pieces; beside it a
    small dense brick-red mound of dried-fish paste flecked with onion and
    chilli. Steaming."

#### Chui jhal mangsho (zone 6 — Khulna, Jashore, Satkhira, Bagerhat)

- **Category**: Special-everyday in the South-west; now on Dhaka menus
  (e.g. restaurants named after it) [MEDIUM — Tripadvisor listing of a
  Dhaka "Choi Jhal" restaurant].
- **Form**: mutton (khashi) or beef curry cooked with **chopped stems,
  roots and peeled bark of chui jhal (*Piper chaba*)**, added 10–15
  minutes before the end; acrid, hot, lemony, "the South Asian
  horseradish" [HIGH — Dhaka Tribune "Choi Jhal: the culinary fire of
  Bengal", Wikipedia "Piper chaba", GOYA]. The **chui pieces are visible
  in the curry as short, pale, woody discs and batons** and are chewed
  and spat out, not swallowed whole [MEDIUM — Dhaka Tribune; the
  chewing detail not re-checked].
- **Model failure**: ginger slices; bamboo shoot; a plain curry with no
  visible chui.
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — serving bowl, mutton.
  - **What dominates**: **meat ~60%**, gravy ~25%, chui pieces ~10%,
    garlic cloves/whole spice ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Mutton pieces, bone-in | ~4–5 cm | 10–14 | Dark brown, glossy, soft | Heaped |
    | Chui jhal stem pieces | discs/batons ~2–4 cm long, ~1–2 cm thick | 8–12 | Pale beige-grey woody stem, fibrous cut face, curry-stained edges | Scattered on top and among the meat |
    | Whole garlic cloves | ~2 cm | 6–10 | Soft, golden | Among the meat |
    | Gravy | medium | — | Dark brown, oil layer | Around |

  - **Arrangement**, **vessel fill**: ~18 cm bowl or the korai itself,
    ~80% full.
  - **Served portion vs. whole**: 3–4 pieces, 1–2 chui pieces, on rice.
  - **State cues**: thick oil, steam.
  - **Absent on purpose**: ginger slices, bamboo shoots, cream, coriander
    heap.
  - **Prompt-ready line**: "A dark iron two-handled pan about 22 cm across
    of bone-in mutton pieces in a dark brown oily gravy, scattered with
    short pale beige-grey woody stem pieces, each about the length of a
    finger joint, with fibrous cut faces, and whole soft golden garlic
    cloves; steaming. Not ginger, not bamboo shoot."

#### Kalai ruti with bhorta and beef (zone 5 — Chapai Nawabganj, Rajshahi)

- **Category**: Everyday-special street and restaurant food of the North,
  now in Dhaka too; winter evenings especially [HIGH — The Daily Star
  "A guide to kalai ruti", TBS "3 dishes from North Bengal", BSS].
- **Form**: a flatbread of **mashkalai (black gram) flour mixed with
  other flours** — **larger and thicker than an ordinary ruti**, cooked on
  a clay griddle (tawa/khola) over a wood or straw fire, slightly charred;
  eaten with **begun bhorta**, a **green chilli–coriander–onion–garlic
  bhorta with mustard oil**, and beef bhuna or duck [HIGH — same sources].
- **Model failure**: naan, pita, a tortilla, roti canai.
- **Confidence**: HIGH (form, accompaniments); LOW (dimensions).
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: **kalai ruti ~60%** of the plate (it overhangs);
    bhortas ~20%; beef bhuna ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Kalai ruti | ~22–25 cm round, ~5 mm thick | 1 | Matte, off-white to pale grey-beige, dusty with flour, charred brown-black spots and blisters, soft and slightly crumbly | Flat, filling most of the plate, folded edge |
    | Begun bhorta | mound ~5 cm | 1 | Coarse smoky grey-green | On the ruti or plate edge |
    | Green chilli–coriander bhorta | mound ~4 cm | 1 | Bright coarse green, oily | Beside |
    | Beef bhuna | 4–5 pieces ~4 cm | 1 bowl | Dark rust-brown | Small bowl beside the plate |
    | Raw onion, green chilli | slices | few | Fresh | Plate edge |

  - **Arrangement**: the ruti laid flat with one edge folded; bhortas on
    it; beef in a side bowl.
  - **Vessel fill**: a ~26 cm steel plate, ruti overhanging slightly.
  - **Served portion vs. whole**: one ruti per person (some eat two).
  - **State cues**: just off the griddle — faint steam, flour dust, fresh
    char.
  - **Absent on purpose**: butter gloss, naan bubbles, cheese, a
    tortilla's even pale surface.
  - **Prompt-ready line**: "A large, thick, matte off-white flatbread
    nearly the width of a 26 cm steel plate, dusty with flour, with
    scattered charred brown-black blisters, one edge folded over; on it a
    small mound of coarse smoky grey-green mashed aubergine and a bright
    oily green chilli-coriander mash; beside the plate a small bowl of
    dark rust-brown beef pieces; faint steam. Not naan, no butter."

#### Golda chingri malaikari (prawn in coconut; zone 6; national)

- **Category**: Special — guests, weddings; Khulna's freshwater prawn
  (golda — giant river prawn) and bagda (tiger prawn) from the shrimp
  belt [MEDIUM — not independently re-checked; the shrimp-farming belt is
  well known]. **Note**: one of the few Bangladeshi dishes **with
  coconut milk** — distinct from the mustard family.
- **Form**: whole large prawns, head on (the head's orange fat is prized),
  in a creamy, pale orange-ivory coconut-milk gravy with a little ghee
  and whole spices, mildly sweet [MEDIUM — not re-checked].
- **Model failure**: Thai red curry, peeled shrimp cocktail, lobster.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — serving bowl, 4 prawns.
  - **What dominates**: **prawns ~55%** (heads and claws make them big),
    gravy ~40%, spices ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Golda prawns, head on, body shell partly on | ~15–20 cm long incl. head; long blue-orange claws | 4 | Bright orange-red shell, curved, glossy; head bulbous | Arranged curling in the bowl |
    | Coconut gravy | ~2 cm | — | Creamy, pale orange-ivory, ghee sheen | Around |
    | Whole spices, green chilli | — | few | Contrast | On top |

  - **Arrangement**, **vessel fill**: prawns curled side by side in a
    ~22 cm bowl, heads to one side; ~75% full.
  - **Served portion vs. whole**: 1–2 prawns per guest on rice.
  - **State cues**: glossy; light steam.
  - **Absent on purpose**: basil, lime leaves, red Thai paste, peeled
    tails only.
  - **Prompt-ready line**: "A bowl about 22 cm across with four large
    curled river prawns, head-on, each longer than a hand, bright
    orange-red glossy shells and long thin claws, lying in a creamy pale
    orange-ivory coconut gravy with a ghee sheen, a few whole spices and a
    green chilli. Not Thai curry, no basil."

### D. Street food, snacks, iftar and breakfast

#### Fuchka (Dhaka street; national)

- **Category**: Everyday — street, evening; the iconic Dhaka snack,
  eaten especially by students and friends together [HIGH — TBS, Visit
  Bangladesh].
- **Lineage**: Same family as pani puri/puchka; **cross-reference
  `india.md`'s Pani puri / golgappa / puchka entry**. **Visible Bangladeshi
  differences**: a **heavier filling of yellow peas (motor/dabli) and
  potato**, spiced, **topped with grated boiled egg** and chopped onion,
  coriander, chilli; the **tetul pani** (tamarind water) is served in a
  **separate small bowl** to spoon or dip into, rather than the
  Mumbai/Delhi dunk-and-hand-over at the cart [HIGH for filling and egg —
  TBS, Hungry Bangla, Spice Odyssey; MEDIUM for the bowl service — not
  independently re-checked]. Usually a **plate of 8–10** is ordered at
  once and shared [LOW-MEDIUM].
- **Model failure**: tortilla chips, macarons, profiteroles; Mumbai-style
  pani puri with green mint water and boondi; a hand dunking a puri
  (banned by project rule).
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — one plate of 8.
  - **What dominates**: **puri shells ~60%** of what the camera sees;
    filling and egg at their open tops ~25%; the tamarind bowl ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Fuchka shells | ~4–5 cm spheres, cracked open on top (hole ~2 cm) | 8 | Thin, crisp, golden-tan, blistered, hollow | Ring around a small plate |
    | Pea-potato filling | heaped in each | — | Yellow-ochre mash, chunky | Inside, mounding from the hole |
    | Grated boiled egg | fine shreds | a sprinkle on each + a heap in the centre | White and pale yellow | On top of the filling |
    | Chopped onion, coriander, green chilli | fine | sprinkle | White, green | On top |
    | Tetul pani | small bowl ~8 cm | 1 | Cloudy, dark brown-amber, a few chilli bits | Centre of the plate or beside |

  - **Arrangement**: shells in a ring on a small melamine or steel plate,
    open sides up; the tamarind bowl in the centre.
  - **Vessel fill**: ~18 cm plate fully ringed.
  - **Served portion vs. whole**: a plate is one or two people's order.
  - **State cues**: crisp, dry shells, egg freshly grated; no sogginess.
  - **Absent on purpose**: green mint water, boondi, sev, yoghurt, a hand,
    paper with print.
  - **Prompt-ready line**: "A small melamine plate about 18 cm across
    holding a ring of eight thin, crisp, golden hollow puffed shells, each
    a little narrower than a can, cracked open on top and heaped with a
    chunky yellow pea-and-potato filling, sprinkled with finely grated
    boiled egg, chopped onion, green chilli and coriander; in the centre a
    small bowl of cloudy dark-amber tamarind water. Not mint water, no
    yoghurt."

#### Chotpoti (Dhaka street; national)

- **Category**: Everyday — street, evening; sold at the same stands as
  fuchka.
- **Form**: warm **yellow peas** with diced potato, **chopped or grated
  egg**, raw onion, green chilli, coriander, tamarind sauce, spice
  powder, and **crushed fuchka shell** on top [HIGH — Visit Bangladesh,
  TBS, Dhaka food guides].
- **Model failure**: chickpea chana masala (brown-red chickpeas in thick
  gravy); a salad.
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: **peas ~55%**, toppings (egg, onion, chilli,
    coriander) ~25%, crushed shell ~10%, tamarind ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Yellow peas (dabli) | ~8–10 mm each | a bowlful | Soft, ochre-yellow, some split, in a little thick broth | Base |
    | Potato dice | ~1.5 cm | 6–10 | Pale yellow | Mixed in |
    | Egg | grated or chopped | ½ egg | White and yellow | Top |
    | Onion, green chilli, coriander | fine | sprinkle | White, green | Top |
    | Tamarind sauce | drizzle | — | Dark brown, glossy | Over the top |
    | Crushed fuchka shell | flakes ~1–2 cm | a handful | Crisp, golden | Top, one side |

  - **Arrangement**, **vessel fill**: a ~14 cm melamine or steel bowl
    ~85% full, toppings heaped centrally.
  - **Served portion vs. whole**: one bowl per person with a spoon.
  - **State cues**: warm, light steam; shell still crisp.
  - **Absent on purpose**: red chana masala gravy, yoghurt, sev.
  - **Prompt-ready line**: "A small bowl about 14 cm across of soft,
    warm ochre-yellow peas with small potato cubes, topped with grated
    boiled egg, chopped raw onion, green chilli and coriander, a glossy
    drizzle of dark tamarind sauce, and a scatter of crisp golden broken
    shell; light steam. Not red chickpea curry."

#### Jhalmuri (national street)

- **Category**: Everyday — street, trains, launches, tong; evening snack.
- **Form**: puffed rice (muri) tossed with **mustard oil**, chanachur
  (spicy fried-lentil-and-gram mix), chopped onion, green chilli,
  coriander, cucumber or tomato, boiled chickpeas, sometimes lemon,
  shaken in a tin and poured into a paper cone [MEDIUM — not
  independently re-checked; uncontested].
- **Model failure**: popcorn, rice crispy cereal, granola.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one paper cone on a plate or
  counter.
  - **What dominates**: **muri ~65%**, chanachur ~15%, onion/chilli/
    coriander/cucumber ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Muri (puffed rice) | grains ~5–8 mm | a heap | Off-white, matte, light, a yellow mustard-oil tint | Bulk |
    | Chanachur | bits ~3–10 mm | scattered | Orange-brown, crunchy | Mixed through |
    | Onion, cucumber, tomato | dice ~5 mm | scattered | White-purple, green, red | Mixed through |
    | Green chilli, coriander | fine | scattered | Green | On top |
    | Paper cone (thonga) | ~15 cm tall | 1 | Plain brown/white paper, **no print** | Holds the heap, standing in a glass or lying on the counter |

  - **Arrangement**, **vessel fill**: heaped over the cone's rim.
  - **Served portion vs. whole**: the cone.
  - **State cues**: just tossed, dry-crisp, slight oil gloss.
  - **Absent on purpose**: printed newspaper, caramel, a hand.
  - **Prompt-ready line**: "A plain unprinted paper cone about 15 cm tall,
    lying on a wooden counter, spilling a heap of light off-white puffed
    rice tinted faintly yellow with mustard oil, mixed with crunchy
    orange-brown fried bits, diced onion, cucumber and tomato, chopped
    green chilli and coriander. No printed paper, no hand."

#### Singara and samosa (tong and "hotel" snack)

- **Category**: Everyday — afternoon tea snack, iftar.
- **Form**: **singara** — a smaller, softer-crusted triangular pastry
  filled with **spiced potato (sometimes with peanuts, liver or
  cauliflower)**; **samosa** in Bangladesh is a **flat, crisp, thinner-
  walled triangle** filled with **minced meat or onion-dal** — the two
  are distinct snacks here, unlike India where "samosa" is the potato
  pyramid [MEDIUM — not independently re-checked; widely described.
  Cross-reference `india.md`'s note on Bengali singara].
- **Model failure**: an Indian Punjabi samosa (large, tall pyramid) for
  a Bangladeshi samosa; empanadas.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — a small plate of two singara
  and two samosa.
  - **What dominates**: pastries ~85% of the plate, sauce/onion ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Singara | pyramid ~6–7 cm tall, ~7 cm base | 2 | Pale-golden, slightly blistered, soft-crisp, a pleated seam | Left |
    | Samosa (Bangladeshi) | flat triangle ~8–9 cm side, ~2 cm thick | 2 | Deeper golden-brown, thin crisp layered pastry, flat | Right |
    | Raw onion and cucumber slices, tomato sauce or tamarind | slices; small dab | few | Fresh, red | Side |

  - **Arrangement**, **vessel fill**: on a ~18 cm plate ~70% covered.
  - **Served portion vs. whole**: the plate.
  - **State cues**: just fried, a little oil on the plate.
  - **Absent on purpose**: tea cups, mint chutney bowls (North Indian),
    printed paper.
  - **Prompt-ready line**: "A small plate about 18 cm across with two
    pale-golden, blistered, pleated triangular pastries standing upright,
    each about the height of a palm's width, and two flatter, deeper
    golden-brown, thin-crusted triangular pastries lying flat beside them;
    a few raw onion and cucumber slices; a little oil on the plate. No tea
    cups."

#### Iftar spread — piyaju, beguni, alur chop, chola-muri, jilapi (national; Ramadan)

- **Category**: Ramadan, daily at sunset. **Editorial flag: see FESTIVALS
  staging rules — never the hero as the first item breaking the fast.**
- **Form**: **piyaju** — lentil (masoor/khesari) and onion fritters,
  craggy flat discs; **beguni** — aubergine slices in gram-flour batter,
  deep-fried; **alur chop** — potato cutlets in batter; **chola** —
  chickpeas cooked dry with onion, chilli and spices; **muri** — puffed
  rice; **jilapi** — orange syrup-soaked spirals; plus **haleem**, dates
  and fruit [HIGH for items — The Daily Star, Ittefaq, Wego, Daily Sun].
  At home, the fried items are often all **mixed with chola and muri in
  one big bowl** (muri makha) and eaten together [MEDIUM — not
  independently re-checked].
- **Variants (§4.6)**: **plated spread** (each item in its own pile — the
  default for staging, clearer to read) vs. **muri makha bowl** (everything
  mixed). [EDITORIAL default]
- **Model failure**: a Middle Eastern iftar (hummus, fattoush,
  samosas only); Turkish Ramazan pidesi; dates and water in the hero
  slot.
- **Confidence**: HIGH (items); MEDIUM (arrangement).
- **Composition & proportions (§4.7)** — a family iftar table centre
  (4 people), plated spread.
  - **What dominates**: **fried items ~40%** of the table centre;
    chola-muri bowl ~20%; jilapi ~10%; haleem ~10%; fruit ~15%; dates ~5%
    (kept away from the hero).
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Piyaju | discs ~5–6 cm, ~1.5 cm thick | 10–12 | Craggy deep-golden, onion strands and lentils visible, crisp edges | Pile on a platter |
    | Beguni | slices ~10–12 cm × 4 cm, ~1 cm | 6–8 | Smooth-crisp golden-orange batter, aubergine purple at the cut edge | Fanned on the same platter |
    | Alur chop | ovals ~6–7 cm | 6 | Golden, slightly bumpy | Same platter or another |
    | Chola | bowl ~16 cm | 1 | Dry, ochre-brown chickpeas with onion, chilli, coriander | Bowl |
    | Muri | bowl ~18 cm | 1 | Off-white puffed rice | Beside the chola |
    | Jilapi | coils ~7–8 cm (or one shahi coil ~20+ cm) | 8–10 | Glossy deep orange, sticky | Plate |
    | Haleem | bowl ~14 cm | 1 | Thick, brown, meaty porridge with fried onion, ginger shreds, lemon | Bowl, garnished |
    | Fruit | watermelon wedges, banana, guava slices | a plate | Red, yellow, green | Plate |
    | Dates | ~3–4 cm | 8–10 | Dark brown, wrinkled, glossy | Small plate, **far side of the table from the hero** |

  - **Arrangement**: platters spread across the table, all untouched; one
    small empty plate and spoon at each place.
  - **Vessel fill**: platters heaped, ~80%.
  - **Served portion vs. whole**: the scene is before anyone starts.
  - **State cues**: fried items fresh and glossy, haleem steaming; dusk
    blue at the window, lamp on.
  - **Absent on purpose**: half-eaten plates, glasses of red Rooh Afza or
    lemon sharbat, water jugs, tea, prayer mats, Qur'an, mosque imagery,
    a hand.
  - **Prompt-ready line**: "A family table at dusk, untouched: a platter
    of craggy deep-golden lentil-onion fritters each about the size of a
    palm's centre, long golden-orange battered aubergine slices and golden
    potato cutlets; a bowl of dry ochre spiced chickpeas beside a bowl of
    off-white puffed rice; a plate of glossy orange syrup spirals; a
    steaming bowl of thick brown meat-and-lentil porridge topped with
    fried onion and ginger shreds; watermelon wedges and bananas; a small
    plate of dates at the far side. No sharbat glasses, no water jug."

#### Haleem (iftar and evening; Old Dhaka)

- **Category**: Ramadan and winter evening; sold in clay or plastic pots
  at Chawkbazar and across Dhaka [HIGH — Daily Star, Ittefaq].
- **Form**: a slow-cooked stew of **lentils, wheat and meat** (beef or
  mutton, sometimes chicken), thick and porridge-like, topped with
  **fried onion (beresta), ginger julienne, green chilli, coriander,
  lemon** [HIGH for base — sources above; garnish MEDIUM — not re-
  checked]. Bangladeshi/Kolkata haleem is looser and chunkier with meat
  pieces than Hyderabad's smooth, pounded haleem [LOW-MEDIUM — not
  re-checked].
- **Model failure**: brown soup with croutons; oatmeal; a smooth purée.
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: **haleem body ~75%**, garnish ~20%, lemon ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Haleem | bowl ~14 cm, ~5 cm deep | 1 | Thick, glossy, mid-brown, grainy, visible meat shreds and 2–3 cm meat chunks, oil pooling | Base |
    | Beresta | crisp slivers | a heap ~5 cm | Deep brown | Centre top |
    | Ginger julienne, green chilli, coriander | fine | sprinkle | Pale gold, green | Top |
    | Lemon wedge | ~4 cm | 1 | Pale yellow | Rim |

  - **Arrangement**, **vessel fill**: bowl ~90% full, garnish centred.
  - **Served portion vs. whole**: the bowl, sometimes with naan or
    bakarkhani.
  - **State cues**: steam, oil gloss.
  - **Absent on purpose**: cream swirl, croutons, smooth purée.
  - **Prompt-ready line**: "A bowl about 14 cm across filled to the brim
    with thick, glossy, grainy mid-brown meat-and-lentil porridge with
    visible shreds and small chunks of meat and a little oil pooling,
    topped with a heap of crisp deep-brown fried onion, fine ginger
    shreds, green chilli and coriander; a lemon wedge at the rim; steam."

#### Boro baper polay khay (Chawkbazar iftar, compact)

- **Category**: Ramadan only — Old Dhaka's Chawkbazar signature
  [HIGH — The Daily Star, Ittefaq, Independent BD].
- **Form**: a heavy, mixed mash of **chickpeas, minced meat, potato,
  brain, chira (flattened rice), egg, chicken, spices and ghee**, sold by
  the kilo (~Tk 800/kg) from huge metal bowls, scooped into bags or
  bowls [HIGH — same].
- **Model failure**: a salad; fried rice; hash.
- **Confidence**: HIGH (form); LOW (look — not photographed this pass).
- **Composition & proportions (§4.7)** — one home serving bowl.
  - **What dominates**: a uniform brown mash ~80%, visible chunks
    (egg, chicken, potato) ~15%, ghee/onion ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Mash body (chickpea, mince, chira, brain) | bowl ~16 cm | 1 | Coarse, mottled ochre-brown, oily | Base |
    | Egg pieces | ~2–3 cm | 3–5 | White and yellow | Scattered |
    | Chicken pieces | ~2–3 cm | 4–6 | Pale brown | Scattered |
    | Potato | ~2 cm | several | Yellow | Mixed |
    | Fried onion, ghee | — | sprinkle | Brown; golden sheen | Top |

  - **Arrangement**, **vessel fill**: heaped in a bowl ~90%.
  - **Served portion vs. whole**: shared at iftar.
  - **State cues**: warm, oily; no steam needed.
  - **Absent on purpose**: market scene with legible signs, plastic bags
    with print, hands.
  - **Prompt-ready line**: "A bowl about 16 cm across heaped with a
    coarse, mottled, oily ochre-brown mash of chickpeas, minced meat and
    flattened rice, studded with pieces of boiled egg, chicken and potato,
    topped with fried onion and a ghee sheen."

#### Porota-bhaji and dim porota (breakfast, compact)

- **Category**: Everyday breakfast at "hotels" and home; also a late
  evening snack [MEDIUM — LangMedia/Remitly on breakfast; form not
  independently re-checked].
- **Form**: **porota** — a flaky, layered, griddle-fried flatbread with
  oil/ghee; with **bhaji** (diced potato, vegetables or papaya fried
  with turmeric) or **dal**, or **dim porota** (egg cooked into it); or
  with an omelette (dim bhaji).
- **Model failure**: Kerala parotta (larger, more spiral-layered — see
  `india.md`); croissant; tortilla.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: **porota ~60%**, bhaji ~25%, omelette ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Porota | ~18–20 cm round (or triangular-folded) | 2 | Golden, flaky, brown griddle spots, oil sheen, layered edges | Overlapping, one folded |
    | Alu/shobji bhaji | portion ~10 cm | 1 | Small diced potato and vegetables, turmeric-yellow, a few dry chillies | Beside |
    | Dim bhaji (omelette) | ~15 cm, folded | 1 | Yellow with onion and green chilli bits, browned edges | Beside |

  - **Arrangement**, **vessel fill**: on a ~26 cm steel plate ~85%.
  - **Served portion vs. whole**: the plate.
  - **State cues**: hot, oily sheen, steam from the bhaji.
  - **Absent on purpose**: butter pats, syrup, tea.
  - **Prompt-ready line**: "A steel plate about 26 cm across with two
    overlapping golden, flaky, layered griddle flatbreads with brown spots
    and an oil sheen, a small heap of turmeric-yellow diced potato and
    vegetables, and a folded omelette flecked with onion and green
    chilli; steam. No tea cup."

### E. Sweets and pitha

#### Pitha — bhapa, chitoi and patishapta (winter; national)

- **Category**: Seasonal — winter (Poush–Magh), with **khejur gur**
  (date-palm jaggery); street stalls and home pitha festivals [HIGH —
  NTV, The Daily Star, UNB, Wikipedia].
- **Variants (§4.6)**: **bhapa pitha** — a **steamed dome** of damp,
  coarse rice flour with a **heart of date-palm jaggery and grated
  coconut**, steamed in a small bowl under cloth over a pot (Tk 10–20);
  **chitoi pitha** — a thick rice-flour pancake cooked in a clay mould,
  eaten **with savoury bhortas (shutki, mustard, green chilli) or with
  jaggery or duck curry** (Tk 5); **patishapta** — thin crepes rolled
  around coconut-jaggery filling; also puli, dudh-puli, nokshi (carved)
  pitha [HIGH — Wikipedia "Bhapa pitha", "Chitoi pitha", "Patisapta";
  The Daily Star]. **Default**: bhapa pitha.
- **Model failure**: Japanese mochi, rice cakes with sesame, idli (for
  chitoi), French crêpes with Nutella (for patishapta).
- **Confidence**: HIGH (forms); LOW (dimensions).
- **Composition & proportions (§4.7)** — a plate of three bhapa pitha and
  two chitoi with a bhorta.
  - **What dominates**: **white rice-flour surfaces ~70%**, jaggery and
    coconut visible ~15%, bhorta ~10%, plate ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Bhapa pitha | domes ~7–8 cm across, ~4 cm tall | 3 (one broken open) | Rough, granular, matte bright-white, cloth-print texture; the broken one shows a dark brown molten jaggery core and white coconut shreds | Left half |
    | Chitoi pitha | discs ~10–12 cm, ~2 cm thick | 2 | Off-white, smooth top, fine pores/"eyes" across the surface, pale brown underside | Right half |
    | Shutki or shorshe bhorta | mound ~4 cm | 1 | Brick-red or mustard-yellow, matte | Beside the chitoi |
    | Khejur gur (liquid) | small bowl or drizzle | 1 | Dark amber, glossy, thick | Near the bhapa |

  - **Arrangement**: on a round plate or banana leaf; one bhapa broken in
    half to show the inside.
  - **Vessel fill**: ~26 cm plate ~70%.
  - **Served portion vs. whole**: two or three pitha are a portion.
  - **State cues**: **steam** curling from the bhapa (winter morning or
    evening), cold blue light outside.
  - **Absent on purpose**: sesame, icing sugar, chocolate, tea.
  - **Prompt-ready line**: "A round plate about 26 cm across with three
    small steamed domes of coarse, granular, matte bright-white rice flour,
    each about the size of a palm's centre, one broken open to show a dark
    brown molten jaggery heart and white coconut shreds, steam rising; two
    thick off-white rice pancakes with fine pores across their tops; a
    small mound of brick-red dried-fish paste and a little dish of glossy
    dark amber palm syrup. Not mochi, no sesame."

#### Shemai (Eid morning)

- **Category**: Eid ul-Fitr and Eid ul-Adha mornings; the dish served to
  every visitor [MEDIUM — not independently re-checked; uncontested].
- **Variants**: **dudh shemai** (fine roasted vermicelli in sweetened,
  reduced milk with cardamom, raisins, almonds — soupy) vs. **jorda/
  lachha shemai** (dry, ghee-fried, sweetened, fluffy strands) [MEDIUM —
  not independently re-checked].
- **Model failure**: spaghetti, instant noodles, rice pudding.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one glass/ceramic bowl of dudh
  shemai (and a plate of lachha beside).
  - **What dominates**: milk and vermicelli ~85%, nuts/raisins ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Vermicelli in milk | bowl ~12 cm | 1 | Fine, short, pale gold-brown strands suspended in creamy off-white milk | Bowl |
    | Raisins, sliced almonds, cashew | ~1 cm | 8–12 | Dark; ivory | On top |
    | Lachha shemai (optional side) | heap ~12 cm | 1 plate | Dry, fluffy, fine golden strands, ghee-glossy | Side plate |

  - **Arrangement**, **vessel fill**: bowl ~85%; nuts scattered on top.
  - **Served portion vs. whole**: one small bowl per guest.
  - **State cues**: warm or chilled (both real); no skin on the milk.
  - **Absent on purpose**: pasta-thick strands, saffron colour, whipped
    cream.
  - **Prompt-ready line**: "A small glass bowl about 12 cm across of
    creamy off-white sweetened milk with fine, short, pale gold-brown
    vermicelli strands suspended in it, topped with a few raisins and
    slivered almonds; beside it a small plate of a dry, fluffy heap of
    fine golden ghee-fried vermicelli. Not spaghetti, no cream."

#### Mishti — rosogolla, chomchom and Bogura doi (national; zone 5 for doi)

- **Category**: Sweets — guests, good news ("mishti mukh"), Eid, Pohela
  Boishakh. **Cross-reference `india.md`'s Rasgulla and mishti entry**
  (same rosogolla and mishti doi forms — agreed).
- **Bangladesh specifics**: **Bogurar doi** (Bogura's sweet yoghurt,
  made from milk and khoa, served cold in a **clay sora**) — a Bangladeshi
  GI since 26 June 2023; Bogura makes ~50 t a day in ~400 units [HIGH —
  Wikipedia "Bogurar doi", TBS, The Daily Star]. **Chomchom** (Tangail's
  Porabarir chomchom — an oblong, brown-crusted chhena sweet, often coated
  in dry khoa crumbs) [MEDIUM — not independently re-checked], **kalojam**
  (dark fried chhena ball), **roshmalai** (Cumilla's, in thick reduced
  milk) [LOW — not re-checked].
- **Model failure**: gulab jamun for rosogolla; Greek yoghurt for doi;
  plastic tubs.
- **Confidence**: HIGH (doi GI, forms); MEDIUM (chomchom).
- **Composition & proportions (§4.7)** — a guest plate: one clay pot of
  doi with a plate of four sweets.
  - **What dominates**: the doi pot ~40% of the frame area; the sweets
    plate ~55%; spoon ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Bogura doi in sora | wide shallow terracotta bowl ~15–18 cm, doi ~4 cm deep | 1 | Matte red-brown clay; doi surface smooth, set, creamy beige to light caramel, a thin darker skin | Left |
    | Rosogolla | ~5 cm spheres | 2 | Porous bright white, glistening syrup | Plate |
    | Chomchom | oblong ~7 × 4 cm | 2 | Brown-crusted, pinkish-cream inside, dusted with dry khoa crumbs | Plate |
    | Spoon | — | 1 | Plain steel | In the doi, at an edge |

  - **Arrangement**: pot and plate side by side; doi untouched but for a
    single spoon-scoop.
  - **Vessel fill**: doi fills the pot to ~1 cm below the rim.
  - **Served portion vs. whole**: a guest gets a scoop of doi and one or
    two sweets.
  - **State cues**: chilled — slight condensation on the clay.
  - **Absent on purpose**: plastic tubs with labels, gulab jamun,
    whipped cream.
  - **Prompt-ready line**: "A wide, shallow, matte red-brown terracotta
    bowl about 16 cm across filled almost to the rim with smooth, set,
    creamy light-caramel sweet yoghurt with one spoon-scoop taken; beside
    it a small plate with two porous, glistening bright-white cheese balls
    a little narrower than a can, and two oblong brown-crusted sweets
    dusted with pale crumbs."

#### Jilapi and shahi jilapi (iftar, melas; national)

- **Category**: Iftar (daily), Pohela Boishakh melas, sweet shops.
- **Form**: fermented batter piped into **interlocking spirals**,
  deep-fried and soaked in syrup; Bangladeshi jilapi is **thicker,
  orange-amber and crisp-chewy**; **shahi jilapi** at Chawkbazar is an
  **oversized** multi-loop coil sold by weight, only in Ramadan [HIGH for
  shahi jilapi as oversized Chawkbazar Ramadan item — The Daily Star,
  Ittefaq; thickness and colour MEDIUM — not re-checked].
- **Confusable**: Indian jalebi (thinner, brighter orange, more regular
  — North India); imarti (flower-shaped, made from urad dal).
- **Confidence**: MEDIUM-HIGH.
- **Composition & proportions (§4.7)** — a plate with one shahi jilapi
  and a few regular ones.
  - **What dominates**: shahi coil ~60% of the plate, regular jilapi
    ~35%, syrup ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Shahi jilapi | coil ~20–25 cm across, strands ~1.5 cm thick | 1 | Deep orange-amber, glossy, crisp ridged surface, interlocking loops | Centre |
    | Regular jilapi | coils ~7–8 cm | 3–4 | Same colour, smaller | Around the edge |
    | Syrup | thin pool | — | Clear amber | Plate surface |

  - **Arrangement**, **vessel fill**: the big coil dominates a ~28 cm
    plate.
  - **Served portion vs. whole**: broken by hand at the table (never
    shown — no hands).
  - **State cues**: sticky gloss, fresh.
  - **Absent on purpose**: powdered sugar, funnel-cake shape, pretzels.
  - **Prompt-ready line**: "A plate about 28 cm across almost filled by
    one huge, glossy, deep orange-amber fried spiral sweet of thick
    interlocking loops with a crisp ridged surface, three or four smaller
    palm-sized spirals around its edge, a thin pool of clear amber syrup.
    Not a funnel cake, no powdered sugar."

#### Bakarkhani, firni and jorda (compact sweets and bakes, Old Dhaka and festive)

- **Bakarkhani** — Old Dhaka's thick, flaky, layered, crisp biscuit-bread
  baked in a tandoor, ~8–10 cm across, eaten with tea or with haleem/
  meat [MEDIUM — not independently re-checked; strongly associated with
  Old Dhaka]. **Firni** — rice-flour milk pudding set in small clay bowls
  (shora), ivory, with pistachio; **jorda** — sweet yellow/orange rice with
  ghee, raisins, nuts and cherries, a wedding and Eid dessert [MEDIUM —
  not re-checked].
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — a small dessert set: two
  bakarkhani, one firni cup, a small mound of jorda.
  - **What dominates**: jorda ~40%, firni cup ~30%, bakarkhani ~30%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Bakarkhani | disc ~8–10 cm, ~1.5 cm thick | 2 | Pale gold, flaky, crisp layered edges, a few sesame or poppy seeds | Stacked, left |
    | Firni in clay cup | cup ~9 cm | 1 | Smooth ivory set pudding, green pistachio slivers | Centre |
    | Jorda | mound ~10 cm | 1 | Bright yellow-orange glossy rice, raisins, red cherry halves, almond slivers | Right |

  - **Arrangement**, **vessel fill**: on a ~26 cm platter ~75% covered.
  - **Served portion vs. whole**: a guest serving.
  - **State cues**: room temperature; ghee gloss on jorda.
  - **Absent on purpose**: cake, custard tarts, cookies.
  - **Prompt-ready line**: "On a 26 cm platter: two stacked pale-gold,
    flaky, crisp-edged round bread-biscuits about a palm across; a small
    unglazed clay cup of smooth ivory rice pudding with green pistachio
    slivers; a small glossy mound of bright yellow-orange sweet rice with
    raisins, red cherry halves and almond slivers."

---

## EXAMPLE PROMPT LANGUAGE (illustrative — not validated by any image test)

**Kacchi at a Dhaka kacchi house, 2 people, zone 1 (hero named by the
brief as Coca-Cola Original 250 mL can):**
> Eye-level photograph at a busy Dhaka biryani restaurant at lunchtime,
> white-tiled walls and ceiling fans softly out of focus, a large sealed
> aluminium pot on the counter behind. On a plain steel-topped table: two
> white plates about 28 cm across, each with a domed heap of long,
> separate rice grains, mostly white with patches of saffron-orange and
> pale yellow, glossy with ghee and flecked with fried onion; on each, one
> bone-in piece of dark brown spice-crusted mutton about the size of a
> palm and one whole golden-orange stained potato; a small shared plate
> of cucumber, onion and green chillies. Beside the plates: two Coca-Cola
> Original 250 ml cans, red aluminium, not Zero Sugar or Diet Coke, not
> any other cola brand. No glasses of yoghurt drink, no tea, no water
> jug, no other drinks; no egg on the rice; no legible text or signage
> anywhere; nothing held in a hand; neutral colour grading. Pack text
> will be composited in post.

**Rainy-day khichuri at home, 3 people, zone 1 (hero named by the brief
as a 2.25-litre Coca-Cola Original PET):**
> Grey monsoon light through a window with rain streaks and a window
> grille, a Dhaka flat's dining table with a printed cloth. In the centre
> an open aluminium pot of steaming golden-yellow rice-and-lentil
> khichuri with distinct grains and green peas; a plate of round fried
> aubergine slices with crisp dark turmeric edges; a bowl of halved
> golden-browned boiled eggs in thick red-brown masala; three plates each
> with a mound of khichuri. In the midground a 2.25-litre Coca-Cola
> Original plastic bottle, red label, not Zero Sugar, not any other cola
> brand, with three filled plain glasses. No tea cups, no water jug, no
> legible text, nothing held in a hand.

*Before use: run at least two generations per prompt
(`country-file-schema.md` §7.5) and apply this file's confidence tags.
**Before any can-hero production run, confirm the 250 mL can's
silhouette** (squat vs. slim) and add it to the slot wording.*

---

## GAP LOG

- **Can size contradicts the brand file.** Bangladesh's standard
  single-serve can is **250 mL** (HIGH, four retailers via search), not
  the 330 mL non-US default of `coca-cola-guidelines.md` §4.3. Not edited
  there — **report to Fernando**; the brand file now has four
  documented exceptions (Mexico 355, Brazil 350, India 300, Bangladesh
  250), which argues for replacing the "330 default" with a per-market
  lookup.
- **250 mL can silhouette unknown** (squat ~66 mm × ~92 mm vs. slim
  ~53 mm × ~115 mm). All prompt-ready lines in this file were written
  plate-first to survive either; confirm from a real can or the expected
  TCCC spec drop.
- **Personal PET is 400 mL**, not 500 mL (§4.4 mismatch, same pattern as
  India 400/600 and Türkiye 450). 1 L reported; 1.25/1.5 L not
  confirmed; 2.25 L confirmed. No PET heights found.
- **Glass bottle**: no evidence that returnable glass is currently sold
  in Bangladesh; only collector listings of old 6.5 oz/250 mL bottles.
  Treat as unavailable until confirmed.
- **Bottler correction**: the brief named International Beverages Pvt
  Ltd; that company is now **Coca-Cola Bangladesh Beverages Ltd, owned by
  Coca-Cola İçecek since 20 Feb 2024**. Abdul Monem Ltd's current
  franchise status is unconfirmed.
- **Market share** figures conflict wildly across sources (CCBB 45.3% for
  2023 per company; aggregators give 25–42%); Mojo's rise is real but its
  share is unverified. Not used.
- **Ramadan/iftar staging** (never the hero as fast-breaker; dates kept
  away; no religious objects) is an **editorial sensitivity call**, not
  TCCC Bangladesh guidance — needs local confirmation. 2024 consumer
  boycotts of Western brands in Bangladesh were seen only in low-tier
  snippets.
- **Pohela Boishakh panta-ilish vs. conservation**: the government has
  urged panta without ilish since ~2016; this file offers both variants.
  The procession's 2025 renaming was not verified.
- **Housing**: census structure shares (kancha/pucca/semi-pucca) are
  HIGH; there is **no house-vs-flat figure**; the Dhaka "flat" default is
  an inference; the "8% in apartments" figure is LOW and dated.
- **Meal clock times** rest on LangMedia (an academic language-learning
  site), Remitly and factsanddetails — MEDIUM-HIGH, not a survey.
- **Dish dimensions** are mostly LOW (pitha, piyaju, beguni, jilapi,
  kalai ruti, singara/samosa, shatkora rind, chui pieces); ilish size is
  MEDIUM-HIGH. Counts and surface shares in all §4.7 blocks are
  editorial synthesis.
- **Not searched this pass** (tagged in place): Hindu-share and beef
  avoidance details; Chinese-Bangla restaurant culture; singara vs.
  samosa distinction; chomchom/roshmalai; bakarkhani, firni, jorda;
  shemai; rooftop culture; Eid menus; Durga Puja 2027 dates for
  Bangladesh; the pork-in-Hill-Tracts note; Sylheti ownership share of UK
  curry houses (`uk.md` gives the Bangladeshi share; the Sylheti share
  is model knowledge).
- **Breakfast** is covered only via porota-bhaji (compact) — project
  default scope; extend if briefs ask.
- **India overlap**: no contradiction found with `india.md` zone 8. Two
  deliberate differences recorded: beef is mainstream here (gated in
  India), and Dhaka kacchi's egg is optional (standard in Kolkata
  biryani). The Bengali course order in `india.md` is noted as a
  West-Bengal/formal pattern, not the everyday Bangladeshi table — a
  reading, not a correction.
- **Celebrations pass (2026-10-01) open items.** Eid and dawat
  headcounts are editorial estimates; the 300–1,000+ wedding figure is
  from one tier-3 source. Wedding season months, batch seating, birthday
  parties and Eid ul-Adha menus were not searched. Pohela Boishakh's
  midday staging is an editorial choice to keep panta out of breakfast
  scope; how many households eat panta at midday vs. morning is unknown.
  The iftar-gathering entry inherits the open iftar decision.
- **Game-night pass (2026-10-01) open items.** Cricket viewing at tongs
  and homes, the BPL season and match times, and every viewing food are
  LOW (research notes, not verified); only the World Cup public-screen
  and overnight apartment-block formats are HIGH (France24, Al Jazeera).
  World Cup and Copa América kick-off times in Dhaka are time-zone
  arithmetic. Carrom's winter-evening timing, cards as gambling-coded,
  and iftar-then-games are unverified; the last inherits the open iftar
  decision. Ludo and carrom food pairings are editorial.
- **Venue-profile pass (2026-10-01) open items.** Unverified background
  details: kacchi-house interiors (no source described decor beyond
  "small and congested" in Old Dhaka); the flat's wall colours and
  washbasin placement beyond ENVIRONMENT; rooftop set dressing (cables,
  plant types); fuchka-cart lighting; community-centre batch seating and
  decor colours. Neighbourhood "hotel", tong, village uthan and
  Chinese-Bangla restaurant not yet profiled (later wave).

## CANDIDATE QUEUE

1. **Fernando decisions**: (a) the iftar staging rules and whether TCCC
   Bangladesh has its own Ramadan guidance; (b) the brand-file can-size
   default (four exceptions now); (c) Dhaka-flat vs. village default
   (68% rural); (d) Pohela Boishakh with or without ilish as the default.
2. Confirm the 250 mL can silhouette and PET heights (TCCC spec drop or a
   photo); confirm whether returnable glass and 1.25/1.5 L PET exist.
3. When search budget allows: Eid menus, shemai forms, singara vs.
   samosa, Chinese-Bangla restaurants, chomchom, bakarkhani; a dated
   source on Dhaka apartment share; Sylhet and Barishal zone detail.
4. Image tests (two or more generations each), starting with kacchi
   (uniform-yellow-biryani failure), shorshe ilish (fillet/smooth-curry
   failure), fuchka (pani puri failure), bhorta platter (hummus failure)
   and the iftar spread (sharbat/date intrusion; hero-as-fast-breaker).
5. Independent §8 audit of this file.
6. Celebration dishes without an entry (2026-10-01 celebrations pass):
   **shami kabab**, **chicken korma** (Bangladeshi white korma), **jali
   kebab**, a shared **celebration cake** entry; consider promoting
   **rezala** from a variant line to its own entry.
7. Viewing and game-night foods without an entry (2026-10-01
   game-night pass): **chanachur** as a standalone bowl (now covered
   only inside Jhalmuri), **muri makha** if it needs more than the
   Iftar spread and Jhalmuri entries give, and **tong biscuits and
   cake** (the glass-jar counter snacks).

## RESEARCH LOG

- **2026-10-01, first pass (this file).** Built directly, no subagents.
  **40 WebSearch queries and 1 WebFetch** (Chaldal product page — blocked
  by the egress proxy). Topics searched:
  - **Packs and bottler**: Chaldal/Shwapno/foodpanda/Arogga can listings
    (250 mL Coca-Cola, Zero, Diet); 250 mL and 400 mL and 2.25 L PET; glass
    bottle availability (collector listings only); IBPL/CCBB and the CCI
    acquisition (Feb 2024); rPET launch; portfolio (Kinley, Sprite, Fanta,
    Minute Maid); competitors (Mojo/Akij, Pepsi, RC/Partex, Pran).
  - **Law and religion**: Narcotics Control Act 2018 / Alcohol Control
    Rules 2022; Ramadan 2027 start; Eid ul-Fitr, Eid ul-Adha and Pohela
    Boishakh 2027.
  - **Housing and meals**: 2022 census dwelling structure; Dhaka rental
    and apartment share; meal times; eating customs (right hand, shared
    dishes, seniority).
  - **Drinks**: tong tea culture; iftar sharbat and Rooh Afza; alcohol law.
  - **Dishes**: kacchi (Haji, Fakhruddin); tehari; shorshe ilish; hilsa
    size and Chandpur prices; the October hilsa ban; panta-ilish and
    conservation; iftar items and Chawkbazar (boro baper polay khay);
    mezbani and kala bhuna; Sylheti shatkora beef and shutki/shidol; chui
    jhal; kalai ruti; Bogura doi GI; fuchka and chotpoti; khichuri and
    bhuna khichuri; winter pitha; bhorta types.
- **Access limitation**: chaldal.com blocked; Chaldal listings read via
  search snippets and marked "(via search)". Census PDFs on
  file.portal.gov.bd not opened; figures from snippets (two agreeing).
- **Sources considered and down-weighted**: recipe blogs (withaspin,
  Spice Odyssey, Cookpad) used for forms only and marked; marketing
  aggregators for market share (conflicting) not used; eBay/PicClick
  collector listings used only to note historical glass bottles.
- **Cross-file checks**: `asia/india.md` zone 8 (Bengali fish meal,
  shorshe ilish, puchka, Kolkata biryani, rasgulla/mishti doi) read and
  cross-referenced; `europe/turkey.md` used as the structural model;
  `europe/uk.md` referenced for the British-Bangladeshi restaurant link.
  `asia/pakistan.md` was not opened or edited.
- **2026-10-01 celebrations pass (schema §5.7): 4 searches** (wedding
  food and venues; Chattogram mezban scale and food; Eid lunch menu;
  gaye holud food). Added CELEBRATIONS & LARGE GATHERINGS after the
  FESTIVALS register: how gatherings work plus 7 entries (Eid ul-Fitr,
  Eid ul-Adha, Pohela Boishakh, wedding with gaye holud variant, mezban,
  birthday party, iftar gathering). The iftar staging rule was left open
  for Fernando. No subagents.
- 2026-10-01 game-night pass (schema §5.8): built from the cross-market
  research notes (45 searches across all markets), 0 new searches. Added
  GAME NIGHT after CELEBRATIONS & LARGE GATHERINGS: 2 watch-party entries
  (cricket at home and at the tong; World Cup night) and 2 social
  game-night entries (family ludo at home; carrom in the para club or
  courtyard; popularity medium). The iftar staging rule left untouched.
  No subagents.
- 2026-10-01 venue-profile pass, wave 1 (schema §5.9): 5 profiles, 5 searches (Dhaka flat drawing-dining room, Dhaka rooftop, kacchi house, fuchka-chotpoti stand, community-centre wedding hall). Iftar rule untouched. No subagents.
