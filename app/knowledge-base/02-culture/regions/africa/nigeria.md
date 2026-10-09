---
country: nigeria
ou: EMEA (TCCC's public segment grouping; no confirmed internal TCCC OU code — same standing caveat every other started market's file carries, see `market-roadmap.md`). What this pass did confirm, as a substitute until an OU code is found: Nigeria's Coca-Cola franchise bottler is the **Nigerian Bottling Company (NBC)**, headquartered in Lagos and a subsidiary of **Coca-Cola HBC AG** (Coca-Cola Hellenic). NBC's plant count differs between sources (13 plants per Wikipedia via search; "8 plants, 11 depots, 58+ commercial territories" per a more recent search snippet) — the newer, smaller figure is more plausible after consolidation, but neither was read first-hand (see GAP LOG).
status: DRAFT — NEEDS SME/HUMAN REVIEW. First pass, built directly (no separate model-knowledge scaffold) with WebSearch verification of the load-bearing claims. Two framings are explicitly PENDING HUMAN SIGN-OFF (settlement registers; the buka/mama put and tenement registers' socioeconomic framing) — see FILE ROLE & METHOD.
research_method: Claude web research (WebSearch only; direct page fetches of ng.coca-colahellenic.com and canmaker.com were blocked by the network egress proxy, so those claims rest on search-result snippets and are marked "(via search)" per `country-file-schema.md` §6). Structure follows `country-file-schema.md` and `latam/mexico.md`; the HERO PRODUCT SLOT, ICONIC BEVERAGES and PENDING-SIGN-OFF handling follow `africa/south-africa.md`.
date_drafted: 2026-09-27
---

# Nigeria

## FILE ROLE & METHOD

This file is Nigeria's country file: a single national staging brief with
six labeled internal zones. One TCCC hero beverage per scene (chosen per
brief — see HERO PRODUCT SLOT), staged against real Nigerian dishes,
vessels and settings, with the full iconic-beverage landscape documented
as context even where a beverage (alcohol, Chapman) is never itself staged.

**Scope** (same default as the Mexico/Spain/South Africa files, not a new
decision): lunch, dinner and snacks (small chops, street food) are in
scope. Breakfast is out of scope except via the opt-in Morning Module
(akara and pap, bread and tea). No beverage other than the hero TCCC
product is staged; others are documented in ICONIC BEVERAGES as context.

### Structural decision: one file, six zones (recommendation — reviewer has final say)

The `country-file-schema.md` §1.1 swap test, applied with the evidence
gathered this pass:

- **A real national core travels.** Party jollof rice, Nigerian fried
  rice, dodo (fried plantain), moi moi, white rice and stew, beans, puff-
  puff, meat pie, small chops, pepper soup and suya read correctly almost
  anywhere in Nigeria. Jollof is described as present at every party
  "regardless of the region or tribe". [HIGH — African Food Network owambe
  guide and multiple party-food guides agree]
- **The swallow-and-soup meal changes form by region (§4.2)**, and this is
  the biggest visual difference in the file: amala with ewedu and gbegiri
  (Yoruba, Ibadan-coded); pounded yam with egusi (widely, Southwest and
  Middle Belt); akpu/fufu with ofe onugbu, oha or ogbono (Igbo Southeast);
  starch with banga (Niger Delta/Urhobo); afang and edikang ikong (Efik-
  Ibibio, Cross River/Akwa Ibom); tuwo shinkafa with miyan kuka (Hausa
  North). [HIGH for each pairing's regional home — sources in each entry]
- **Dietary law changes by region, and it is a hard staging rule, not a
  flavour note.** The North is predominantly Muslim; about a dozen northern
  states reintroduced sharia after 1999 and prohibit the sale and
  consumption of alcohol (Kano's Hisbah publicly destroyed ~3.9 million
  bottles of beer). Pork is absent from Muslim tables. [HIGH — Guardian
  Nigeria, Agenzia Nova, Digital Journal/AFP, Wikipedia (via search)]
- **Environment does not travel**: Lagos's dense mainland streets and
  lagoon, the Southwest's rust-roofed towns, the green hills and cement
  bungalows of the Southeast, the creeks and mangroves of the Delta, and
  the Sahelian North's dry-season harmattan haze and walled compounds look
  nothing alike.

**Recommendation: one national file, six zones, handled as dish-variant
and environment deltas** — the same call this project made for Mexico,
Spain, Germany and South Africa. The form-changing dishes are real but
concentrated in the swallow/soup entries, each of which carries its own
variant list.

**Flagged spinout candidate (not triggered)**: **the North (zone 6)** is
the zone most likely to need its own file later — a distinct cuisine
(tuwo, miyan kuka, masa, kilishi, fura da nono), a different religious
and legal staging regime (sharia states, Ramadan fasting, Sallah Durbar),
a different built environment (walled compounds, zaure entrance halls,
Sahel light), and Hausa rather than English/Pidgin as the street
language. If briefs set there exceed roughly a quarter of Nigeria usage,
split to `nigeria-north.md` per `country-file-schema.md` §2.2. **This is a
recommendation for the human reviewer, not a decision** (§7).

### Settlement-register and socioeconomic framing — PENDING HUMAN SIGN-OFF, not resolved by this pass

Following `south-africa.md`'s precedent. The ENVIRONMENT section below
describes five **settlement registers** (gated estate duplex/bungalow;
flat in a block or "self-contain"; tenement ("face-me-I-face-you") rooms
off a shared corridor; northern walled family compound; rural village
compound) and two **eating-out registers** that are strongly class-coded
(the buka/mama put roadside canteen and the owambe party under canopies).
These are real, documented and among the most characteristic Nigerian
settings — but:

- **Housing type in Nigerian cities is a direct marker of income.** A
  Southwest study found ~80% of respondents in Osogbo living in
  face-me-I-face-you houses [MEDIUM — one peer-reviewed study, one city];
  Guardian Nigeria describes most urban Nigerians as living in rented
  rooms in tenement buildings or modest self-contained flats [MEDIUM].
  A scene built on a shared-corridor tenement, a lagoon settlement or an
  unfinished building reads as a statement about poverty whether meant or
  not.
- **The mama put is explicitly used as an economic indicator in Nigerian
  business press** ("Mama Put has become Nigeria's new poverty barometer",
  BusinessDay) [MEDIUM — one article; the framing itself is the point].
  Staging a TCCC product as the treat in a hardship setting risks reading
  as exploitation; staging the buka as sanitized middle-class dining risks
  erasing it.
- **Owambe spending and money spraying** are publicly debated in Nigeria
  as extravagance ("Is Owambe a waste of money?") [MEDIUM].

**Status: PENDING HUMAN SIGN-OFF.** The registers are kept, factually
described, with caricature guidance in both directions. **No scene should
be generated from the settlement registers, the tenement register, or a
buka scene framed around hardship until a human reviewer (ideally a
Nigerian SME and TCCC Nigeria brand/legal) confirms the framing.** The
ordinary, sign-off-safe baseline in the meantime: a tidy family home
interior (flat or bungalow), an owambe food table without money or
alcohol, and a clean, busy buka counter framed as a beloved everyday
institution rather than as a poverty marker.

### Zones (one scheme, used throughout)

| # | Zone | Covers | Visual register |
|---|---|---|---|
| 1 | Lagos & Southwest | Lagos, Ogun, Oyo (Ibadan), Osun, Ondo, Ekiti | Dense, humid megacity: yellow danfo minibuses, okada, lagoon and bridges, new towers on the islands, rust-red corrugated roofs in Ibadan; Yoruba cuisine (amala, ewedu, efo riro, ofada, asun, ewa agoyin); owambe capital. Religiously mixed (Muslim and Christian Yoruba) |
| 2 | Southeast (Igbo heartland) | Enugu, Anambra (Onitsha, Awka), Imo (Owerri), Abia (Aba), Ebonyi | Green rolling hills and red laterite roads, cement bungalows and storey houses, busy market cities; akpu/fufu with ofe onugbu, oha, ogbono, egusi; nkwobi, isi ewu, abacha, ugba. Predominantly Christian |
| 3 | Niger Delta (South-South, west) | Rivers (Port Harcourt), Bayelsa, Delta (Warri, Asaba), Edo (Benin City) | Creeks, mangroves, heavy rain, very humid; fish and seafood; banga with starch, owho, fisherman soup, boli and fish, pepper soup. Predominantly Christian |
| 4 | Cross River & Akwa Ibom (South-South, east) | Calabar, Uyo | Green, hilly, coastal; the most leaf-heavy soups in the country — afang, edikang ikong; Calabar Carnival in December. Predominantly Christian |
| 5 | Middle Belt & Abuja | FCT (Abuja), Plateau (Jos), Benue, Kwara (Ilorin), Kogi, Nasarawa, Niger, Kaduna's south | Savanna, rocky outcrops (Jos plateau, Abuja's Aso and Zuma-style rock inselbergs — keep generic), wide planned avenues in Abuja; yam country (Benue); religiously mixed; pounded yam and a blend of northern and southern food |
| 6 | North (North-West & North-East) | Kano, Kaduna, Katsina, Sokoto, Zamfara, Kebbi, Jigawa, Bauchi, Gombe, Borno (Maiduguri), Yobe, Adamawa | Sahel and dry savanna, harmattan haze Dec–Feb, walled mud and cement compounds with a zaure entrance, flat roofs, indigo-dyed and embroidered robes; tuwo, miyan kuka, masa, kilishi, suya's home. **Predominantly Muslim; sharia states** |

Zone boundaries are a staging convenience, not a claim about ethnic or
political identity; Kwara (Yoruba, heavily Muslim, Ilorin Emirate) and
southern Kaduna sit on edges and could be argued either way [EDITORIAL].
Religion splits roughly half and half nationally, with the 2018 DHS
recording ~46% Christian among adults 15–49, and a Christian-majority
South (~84%) and Muslim-majority North (~82%), with the North-Central
more mixed (~56% Christian, ~42% Muslim). [HIGH for the North/South
pattern — DHS 2018 as reported by McKinnon 2021 and Wikipedia (via
search); Pew 2012 gives 49.3% Christian / 48.8% Muslim]

### Default when no zone is named

Fall back to **zone 1 (Lagos & Southwest) at the everyday register**: a
Lagos family home or a busy buka, and for celebrations an owambe. Lagos
is the country's largest city and the source of the party-rice, owambe
and small-chops idioms that now read as "Nigerian" nationally.
[EDITORIAL fallback — not a sourced "most typical Nigeria" claim]
**Halal-compatible by default everywhere**: even in zone 1, a large share
of Yoruba households are Muslim, so the default table carries no pork and
no alcohol (see GENERAL NORMS).

---

## METHOD NOTE (read first)

**Build method, this pass.** Drafted directly from model knowledge and
checked with 37 WebSearch queries in the same session, prioritising what a
scene visibly depends on (pack formats, dietary law by region, meal
timing, housing, the swallow/soup pairings, party food, sizes of the
small items). The session's shared search budget ran out before every
dimension could be checked; unchecked claims are tagged. Tags:

- **[HIGH] / [MEDIUM] / [LOW]** — schema §6 tags earned this pass (HIGH =
  2+ independent corroborating sources; MEDIUM = 1 credible source).
- **[MEDIUM — not independently re-checked this pass]** / **[LOW-MEDIUM —
  not independently re-checked]** — model knowledge, uncontested general
  culinary or cultural knowledge, not individually searched.
- **[EDITORIAL]** — a judgment call (defaults, shares, caricature
  guidance, zone boundaries), never a factual claim.
- **[HIGH — first-party test]** — this project's own image-generation
  findings (`coca-cola-guidelines.md` §1, `country-file-schema.md` §7.5).
  **No Nigeria-specific image tests have been run yet.**

**Writing principle.** Describe what the camera sees: the oil sheen and
colour of a soup, the smoothness or grain of a swallow, the char and spice
dust on suya, the crumb of a puff-puff, and real-world size relative to
the can. Background notes only where they prevent a visual error.

**File-wide rules for every scene built from this file:**

1. **Text as atmosphere.** Nigeria has one of the strongest training
   priors in this KB toward legible text: painted slogans on danfo buses
   and trucks, hand-painted buka and shop signs, church and mosque
   banners, party backdrops with the celebrants' names, printed sachet
   water, naira notes during money spraying, and **suya wrapped in
   newspaper**. All of it may appear only as heavily blurred, unreadable
   colour in the midground or background. Never quote example words or
   prices. **Suya is staged on plain, unprinted brown or white paper**, not
   newspaper. Any readable word, number or brand mark means reject or
   retouch. Blur instructions are known to fail. [HIGH — first-party test;
   `country-file-schema.md` §7.5]
2. **The hero product is a TCCC beverage chosen per brief.** Fill the HERO
   PRODUCT SLOT below with the exact product, variant and format. Branding
   is composited in post, never trusted from the generation
   (`coca-cola-guidelines.md` §1–2).
3. **No alcohol in any scene, ever**, and never show a TCCC product as a
   mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5). In the North this is also the law in the sharia states. Party
   and bar scenes in the South carry strong priors toward lager and stout
   bottles, palm wine in calabashes or jerrycans, and **Chapman** in big
   mugs — exclude them explicitly. Chapman is itself mixed from Fanta and
   Sprite (see ICONIC BEVERAGES) and is never staged.
4. **No pork, and halal-compatible tables by default** (see GENERAL
   NORMS). In zone 6 this is absolute; nationally it is the default.
5. **No drinks in frame other than the hero product**, unless the brief
   explicitly allows a named non-alcoholic companion. A small bowl of
   water for hand-washing beside a swallow meal is allowed and should be
   described as "a small bowl of water for washing hands, not a drinking
   glass".
6. **Nothing held in a hand.** Swallows are eaten with the right hand;
   stage the swallow mound on its plate with one pinched-off, thumb-dented
   morsel resting at the edge of the soup instead of in a hand
   (`country-file-schema.md` §7.5).
7. **Breakfast is out of scope**, except via the opt-in Morning Module.

---

## QUICK-REFERENCE: GENERIC SCENE REGISTERS

| Generic scene type | What to draw on |
|---|---|
| **Buka / mama put** | A roadside canteen under a canopy or a tarpaulin-and-zinc shed, wooden benches, a counter of wide aluminium pots and trays (rice, beans, eba, spaghetti, stew with fried meat pieces), plates served by the cook; plastic chairs. Everyday lunch. **Framing PENDING HUMAN SIGN-OFF** — stage as busy, clean, beloved; see FILE ROLE & METHOD. |
| **Owambe (Yoruba party)** | Rows of white canopies (marquees), white plastic or chiavari-style chairs with covers, round tables, guests in matching aso ebi fabric and gele headwraps, a band or DJ area blurred behind; food from party coolers: jollof, fried rice, dodo, chicken or beef, moi moi, salad. No money spraying near the product, no alcohol. |
| **Suya spot (evening)** | A mai suya's open grill — a wire grill over glowing charcoal on a wooden or metal stand, a hurricane or bulb lamp, skewers of dark spiced meat, a mound of yaji (spice powder), sliced onions and tomato; night. |
| **Family lunch at home** | A dining table with a plastic or lace tablecloth, a swallow wrapped in cling film on each plate, a pot or bowl of soup, a bowl of water for washing hands; or a big pot of jollof served onto plates. |
| **Small-chops tray** | A round or rectangular foil or plastic tray with puff-puff, samosas, spring rolls, peppered gizzard or chicken on toothpicks — an event starter or a Friday office treat. |
| **Northern compound meal (zone 6)** | A mat or low table in a shaded courtyard, a large enamel or aluminium bowl of tuwo, a bowl of miyan kuka, men and women often eating separately [LOW-MEDIUM — not independently re-checked]; strictly halal, no alcohol anywhere. |

Full background-first profiles for the main venues: see VENUE PROFILES below.

## VENUE PROFILES

Per `country-file-schema.md` §5.9 (background-first). The register table
above stays as the index. Heading levels follow CELEBRATIONS & LARGE
GATHERINGS (`##` section, `###` entries).

**The settlement-register, tenement and buka framing is still PENDING
HUMAN SIGN-OFF** (FILE ROLE & METHOD). These profiles use the file's
sign-off-safe baseline (a tidy family flat or bungalow, a compound
forecourt under a canopy, a clean busy buka framed as a beloved everyday
institution, an owambe without money or alcohol). Where a register would
change the background it is named as a **variant, described factually,
not as a default**, and is not generated from until sign-off. The
tenement (face-me-I-face-you) register gets no profile. The Ramadan/iftar
call stays open; no profile is set in Ramadan daylight.

Wave 1: the parlour and dining corner, the compound forecourt under a
canopy, the buka, the suya spot, and the owambe under canopies or in an
event hall. The viewing centre (GAME NIGHT) and the pepper-soup joint are
left for a later wave.

### Venue: Family parlour and dining corner (the "parlour", "sitting room")
- **Use for:** home indoor; casual lunch for 1–3, dinner, Sunday family
  lunch, Christmas and Sallah family meals, the Premier League and Super
  Eagles watch parties, ludo and Whot. The national default home
  interior, in a flat or a bungalow. [MEDIUM — the parlour, sofa set and
  centre table as the core of Nigerian sitting rooms (Guardian Nigeria
  "How the Nigerian living room has evolved"; furniture and POP-ceiling
  trade sites); share of flat vs. bungalow not sourced, see GAP LOG]
- **Soft background (the core):**
  - *Back wall:* smooth painted plaster in cream, beige, pale peach or
    light grey; framed **family and wedding portraits** in gold or dark
    frames, a wall clock, a calendar (blank blur, never legible); a TV on
    the wall or on a low console as a dark rectangle. [LOW-MEDIUM — not
    independently re-checked; interior markers carried from General
    environmental norms]
  - *Ceiling (often in frame at a low angle):* a **POP (plaster of Paris)
    ceiling** with a stepped tray, **recessed downlights** and often a
    **chandelier** at its centre, plus a **ceiling fan**. Out of focus
    this is a cluster of bright points and a white stepped edge.
    [MEDIUM — POP ceiling with chandelier described as the visual
    signature of a modern Nigerian sitting room (Guardian Nigeria; Vento
    Furniture, Lead Interior Decor trade sites)]
  - *Middle distance:* a large **sofa set** (three-seater plus armchairs,
    fabric or leather-look, often in brown, cream or grey, sometimes with
    throw cushions); the **centre table** (glass-topped or dark wood);
    a glass-fronted cabinet with plates and ornaments; the dining table
    beyond, with insulated **food flasks** (round lidded food warmers)
    or a covered pot on it [food flasks LOW — not verified].
  - *Light:* daylight through windows with **burglar-proof grilles** and
    either **lace or heavy curtains** (older homes) or **blinds** (newer
    homes), often a bright, slightly hazy tropical light; evening: cool
    or warm LED downlights, the TV glow, a **rechargeable lamp** on a side
    table for outages. [MEDIUM — blinds replacing thick curtains (Guardian
    Nigeria); grilles and rechargeable lamp per General environmental
    norms]
  - *Palette:* cream and beige walls, glossy pale ceramic tiles, a darker
    sofa, gold picture frames, flashes of bright print in cushions.
  - *Signature shapes (3–5):* the POP ceiling edge with downlights or a
    chandelier; the ceiling fan; the long sofa set; the glass centre
    table; a window grille behind a lace curtain.
  - *Density and wear:* tidy, furnished for receiving guests, slightly
    formal; a plastic cover on a remote, a doily on the side table.
    [EDITORIAL]
  - *People cues:* one or two family members on the sofa, soft, no sharp
    face.
- **Shell:** a flat in a 2–4-storey block or a cement bungalow: **large
  glossy ceramic floor tiles**, plastered and painted walls, POP ceiling,
  aluminium or steel-framed windows with grilles. [LOW-MEDIUM — carried
  from the estate and flat register descriptions]
- **The table as set here:** the dining table with a **plastic or lace
  tablecloth**; ceramic or glass plates; a spoon for rice, the right
  hand for swallow, with **a small bowl of water for washing hands** (file
  rule 5); swallow on its own plate, soup in a bowl; or the centre table
  with side plates for snacks. Upholstered dining chairs. [MEDIUM — the
  family-lunch register; rule 5]
- **Subregional variants and the national default:** national default
  when nothing is named: a Lagos family flat or bungalow parlour with a
  POP ceiling, tiles, sofa set and ceiling fan, in tropical daylight.
  Southeast and Delta: the same, often a storey house with a larger
  parlour; more Christian imagery (keep any wall text or religious art
  illegible and out of the product's zone). North (zone 6): carpets or
  rugs on the floor, floor cushions or low seating in some homes, more
  modest decor; meals sometimes on a mat (Northern compound register).
  Harmattan (Dec–Feb): a pale, dusty haze in the window light. *Register
  variants (PENDING SIGN-OFF, factual only):* a gated-estate duplex with a
  double-height parlour and marble-look tiles; a room-and-parlour flat
  where the centre table is the dining table.
- **Hallucination traps:** a placeless glass-and-marble showroom (the
  file's sanitized over-correction); "tribal" masks, drums, carved
  figures or animal skins as decor; an African-American US living room;
  a Ghanaian or Kenyan interior presented as generic "African"; open
  drains, generator smoke or flood water through the window (poverty
  framing).
- **Never stage:** beer, stout or palm wine; Chapman; legible
  calendars, Bible verses, wall plaques, screens or packaging; fuel cans
  (a generator is a cable at most); brand marks; a full flag;
  identifiable children.
- **Prompt-ready line:** "A Nigerian family parlour in soft focus: a
  white stepped plaster ceiling with recessed lights and a ceiling fan,
  cream walls with framed family portraits, a large sofa set and a glass
  centre table, and bright tropical daylight through a lace curtain over
  a window grille."
- **Confidence and sources:** MEDIUM overall (Guardian Nigeria; POP and
  furniture trade sites for the ceiling and centre table); colours,
  food flasks and set dressing LOW or editorial. 1 search this pass.

### Venue: Compound forecourt under a canopy (the "compound", the forecourt)
- **Use for:** home outdoor; the family BBQ or get-together, naming
  ceremonies, Christmas in the hometown, the after-party Whot game, a
  Super Eagles night with the TV carried out; 1, 2 or a small group of
  settings inside a gathering of 10–40 or more. The market's home
  outdoor default. [LOW-MEDIUM — Meal outdoors at home scenario; not
  independently re-checked]
- **Soft background (the core):**
  - *Back wall:* the **house front** (painted cement in cream, white,
    peach or pale yellow, with grilled windows and a covered porch) or
    the **compound wall**, plastered and painted, topped with spikes or
    wire kept soft; a **metal gate** (sliding or swing, painted black,
    grey or brown). [LOW-MEDIUM — estate register; not independently
    re-checked]
  - *Overhead:* a hired **party canopy**, a white or striped fabric roof
    on metal poles, its scalloped fringe a strong shape at the top of the
    frame. [MEDIUM — canopies, chairs and covers are standard party
    hire in Lagos and Ibadan (Jiji listings; J & E Party Rentals)]
  - *Middle distance:* rows of **white plastic chairs**, some with
    covers; a charcoal grill with smoke; **coolers** (large insulated
    food coolers) and covered pots on a side table; a **water tank on a
    stand** or on the roof and a small **generator house** at the side as
    soft block shapes; a parked car; a mango, plantain or palm tree.
    [MEDIUM for interlocking pavers and water tanks as common features
    (daibau.ng; general); generator housing per the estate register]
  - *Light:* hard tropical daylight on the pavers with deep shade under
    the canopy; golden-hour from about 17:30, short dusk (equatorial);
    after dark, a bulb or floodlight on the house wall. Dry-season light
    is the default (rainy-season caution in the scenario). [EDITORIAL]
  - *Palette:* grey or terracotta **interlocking pavers**, cream walls,
    white canopy, green foliage, the colour of guests' fabric.
  - *Signature shapes (3–5):* the canopy fringe; rows of white chairs;
    the gate; the water tank on its stand; a grill with smoke.
  - *Density and wear:* busy and used, swept clean for guests.
  - *People cues:* relatives in bright prints or matching fabric, soft,
    within the background-people limit.
- **Shell:** an open paved forecourt between the gate and the house, or
  a yard; interlocking paving stones (the most popular outdoor flooring
  in Nigeria [MEDIUM — daibau.ng]) or concrete.
- **The table as set here:** a plastic party table with a cloth or a
  plastic cover; plates of jollof, chicken and dodo; disposable plates
  and plastic spoons at a big gathering; a cooler at the frame edge.
  White plastic chairs. [LOW-MEDIUM; EDITORIAL]
- **Subregional variants and the national default:** national default
  when nothing is named: a Lagos or Ibadan bungalow forecourt with
  pavers, a canopy and white chairs. Southeast hometown at Christmas:
  a larger family house, red laterite earth beyond the wall, green
  hills. North (zone 6): a walled compound with a zaure entrance, sand or
  beaten earth, a shade tree, mats rather than chairs. *Register
  variants (PENDING SIGN-OFF, factual only):* a rural village compound
  of zinc-roofed bungalows around an earth yard.
- **Hallucination traps:** a US backyard with lawn and picket fence;
  a South African braai with brick fireplace; savanna and acacias; an
  unfinished building or rubble as "authentic"; a beach-party look.
- **Never stage:** beer crates, stout, palm wine in calabashes or
  jerrycans, Chapman mugs; sachet water; slaughter (goat, ram) or a live
  animal near the product; printed banners with names; brand marks on
  coolers or canopies; money spraying.
- **Prompt-ready line:** "A Nigerian compound forecourt in soft focus: a
  white party canopy with a scalloped fringe over grey interlocking
  pavers, rows of white plastic chairs and a black metal gate in a cream
  wall, a water tank on its stand and green plantain leaves beyond."
- **Confidence and sources:** LOW-MEDIUM overall; canopies and pavers
  MEDIUM (Jiji, J & E Party Rentals, daibau.ng); the rest carried from
  the file's registers or editorial. 1 search this pass (plus the owambe
  canopy search).

### Venue: Buka / mama put (buka, bukka; mama put)
- **Use for:** restaurant, indoor or semi-outdoor; weekday lunch, 1 or
  2 people (Away from home 1 person), a small group of co-workers. The
  default casual sit-down eating-out venue. **Framing PENDING HUMAN
  SIGN-OFF — stage as busy, clean, beloved; never as a hardship
  setting** (FILE ROLE & METHOD). [HIGH for the buka form — Demand
  Africa, BusinessDay, All Nigerian Recipes, Guardian Nigeria "Abuja's
  buka boom"]
- **Soft background (the core):**
  - *Back wall and counter:* the **food counter**: a row of wide
    **aluminium pots and trays** (jollof, fried rice, white rice, beans),
    a bowl of red stew, fried meat and chicken stacked, boiled eggs,
    fried plantain, and the cook ladling; behind it, painted or tiled
    walls, steam rising. [HIGH — Guardian Nigeria (trays of jollof and
    fried rice, stew, meat stacked, plantain "catching the light");
    Demand Africa (view of the hot cooking pot)]
  - *Middle distance:* **wooden benches and tables**, or plastic chairs
    around small tables; other diners as blurred backs; a ceiling fan or
    standing fan; the open front to the street. [HIGH — Demand Africa:
    shacks of roofing sheets with wooden benches and tables, or open
    canopy tents with plastic chairs, or tarpaulin-and-roofing
    structures]
  - *Light:* bright daylight from the open front, **shade under a
    corrugated roof or canopy**; steam and, where cooked on firewood, a
    faint smoke haze catching the light; a fluorescent tube inside.
    [MEDIUM — firewood cooking per Guardian Nigeria; light editorial]
  - *Palette:* aluminium silver, red-orange stew and jollof, golden
    plantain, wood brown, the green or blue of plastic chairs, painted
    walls in pale blue, green or cream.
  - *Signature shapes (3–5):* the row of wide silver pots; steam; the
    cook's back and ladle; wooden benches; a canopy or roof edge with
    the bright street beyond.
  - *Density and wear:* busy, well-used and clean: scrubbed tables,
    plastic or enamel plates in stacks.
  - *People cues:* the cook (apron, headscarf or cap) and diners, soft,
    within the background-people limit.
- **Shell:** a street-front room, a roofing-sheet shed or a canopy on a
  concrete pad; newer urban bukas are indoor rooms with tiled floors and
  plastic furniture. [HIGH — Demand Africa; Guardian Nigeria on new
  Abuja bukas]
- **The table as set here:** a bare wooden or plastic table; a plate
  (melamine, enamel or ceramic) of rice, beans and stew with assorted
  meat, or amala with ewedu and gbegiri; a spoon; **a small bowl of water
  for washing hands** for swallow (rule 5); a plastic napkin holder or
  roll of tissue. Bench or plastic-chair edge in frame. [MEDIUM — buka
  scenario; tableware LOW-MEDIUM]
- **Subregional variants and the national default:** national default
  when nothing is named: a Lagos buka with a roofed front, wooden
  benches and a counter of aluminium pots. Ibadan and Southwest: amala
  spots, darker interiors, firewood smoke. Abuja: newer, indoor, tiled
  "buka" restaurants. Southeast: canteens built around swallow
  and soups. North: rice-and-stew and tuwo canteens with benches (not yet
  profiled). [LOW-MEDIUM; EDITORIAL]
- **Hallucination traps:** a generic Western café; a Ghanaian chop bar
  with Ghanaian dishes (banku, kenkey); a sit-down "African restaurant"
  of the diaspora with themed decor; open drains, flies, flood water or
  a ragged shack (poverty framing); a buffet in a hotel.
- **Never stage:** beer, stout, sachet water, a bar fridge with bottles;
  hand-painted signs or menus that read; brand marks on the fridge,
  umbrella or chairs; money changing hands.
- **Prompt-ready line:** "A busy, clean Lagos buka at lunchtime in soft
  focus: a counter of wide aluminium pots of jollof and stew with steam
  rising, a cook ladling under a corrugated roof, wooden benches and a
  bright street beyond the open front."
- **Confidence and sources:** HIGH for the form (Demand Africa, Guardian
  Nigeria, BusinessDay); palettes and tableware editorial. 1 search this
  pass.

### Venue: Suya spot (mai suya's stand)
- **Use for:** on-the-go or "other", outdoor; the evening snack, after
  work, 1–3 people; the BEVERAGE MOMENTS "Suya night" row. The national
  default street venue: suya is now sold everywhere, not only in the
  North. [HIGH — Wikipedia (Suya); Tasting Table; this file's registers]
- **Soft background (the core):**
  - *Back wall:* the night street: a dark, warm-toned field with a few
    bulb glows, a lit kiosk or shop front, passing traffic as streaks and
    bokeh, the yellow of a danfo far behind. [EDITORIAL]
  - *Middle distance:* the **mai suya's stand**: a **wire grill over
    glowing charcoal** on a wooden or metal stand or a cut-down drum,
    rows of skewers of dark, spice-dusted meat; a **wooden board** with a
    knife; a mound of yaji in a tray; sliced onions, tomato and cabbage;
    sometimes a glass display box with hanging meat. The vendor in a
    kaftan and cap, or a T-shirt, soft. [HIGH for stands on street corners
    with coal-fired grills and evening trade — Tasting Table; Wikipedia;
    the register's structure "wire grill on stand, spice mound, knife,
    board"]
  - *Light:* the **charcoal's orange glow** from below, smoke catching
    it; a single **bare bulb** or a **hurricane or rechargeable lamp**
    hung on the stand; the cooler, whiter light of a shop front. [MEDIUM
    — register (bulb or lamp, charcoal glow); lamp type LOW]
  - *Palette:* black night, ember orange, smoke grey, the reddish-brown
    spice crust, white onion rings.
  - *Signature shapes (3–5):* the glowing grill; smoke column; a hanging
    bulb; the vendor's silhouette; car headlights as bokeh.
  - *Density and wear:* busy street corner, worn but clean stand.
  - *People cues:* the vendor and one or two customers as silhouettes.
- **Shell:** a pavement or roadside corner, often near shops, a filling
  station or a bar (exclude the bar); the stand sometimes under a small
  zinc roof. [MEDIUM — register alcohol note: "often beside a bar —
  exclude"]
- **The table as set here:** no table: a **ledge**, a stool or the stand's
  edge; suya on **plain, unprinted brown or white paper** (never
  newspaper, rule 1), with onion, tomato and a pinch of yaji. [HIGH —
  rule 1; first-party text finding]
- **Subregional variants and the national default:** national default
  when nothing is named: a Lagos street-corner suya stand at night.
  North (zone 6): the home of suya, with kilishi and balangu also on
  sale; a roadside stand under a tree, harmattan haze at dusk. Abuja:
  stands along wide avenues. Viewing centre: suya sold at the door
  (GAME NIGHT).
- **Hallucination traps:** a Turkish or Middle Eastern kebab shop with a
  döner spit; Southeast Asian satay; American barbecue; newspaper
  wrapping (strong prior); a bar with beer bottles behind the stand.
- **Never stage:** newspaper or printed paper; beer, stout or a bar;
  legible signs; brand marks; money on the ledge; pork.
- **Prompt-ready line:** "A Nigerian suya stand at night in soft focus:
  skewers of spice-dusted meat on a wire grill over glowing charcoal,
  smoke lit orange, a bare bulb hanging over the vendor's silhouette, and
  passing headlights blurred beyond."
- **Confidence and sources:** HIGH for the form and night trade
  (Wikipedia, Tasting Table, file registers); lamp type LOW. 1 search
  this pass.

### Venue: Owambe under canopies or in an event hall (owambe; "party")
- **Use for:** "other"; wedding receptions, milestone birthdays, naming
  ceremonies of well-off families, igba nkwu receptions; 1, 2 or a small
  group of settings at one arc of a round table of 8–10 inside a crowd of
  hundreds. The market's signature event venue. [HIGH for the owambe look
  (OWAMBE register sources); MEDIUM for hire items — Lagos party-rental
  firms (J & E Party Rentals, Eloquent Displays, Naphtali Rentals) list
  marquee canopies, chiavari and white chairs, chair covers and round
  banquet tables]
- **Soft background (the core):**
  - *Overhead and back wall:* **street or compound version:** rows of
    **white canopies** (or marquee tents) with fringed edges, metal
    poles, the sky between them; **hall version:** a large hall with a
    POP ceiling, chandeliers, draped fabric and uplighting in the
    celebrants' colours. The printed backdrop or stage is far behind and
    illegible. [HIGH for white canopies — register; hall dressing
    LOW-MEDIUM]
  - *Middle distance:* other **round tables** with long cloths and
    centrepieces; **chairs in covers** (white, gold or the event colour)
    or white **chiavari** chairs; guests in **aso ebi**, one fabric
    colour or print repeated across many people, women's **gele**
    headwraps as tall sculpted silhouettes; waiters in matching uniforms
    carrying plates; the band or DJ area as a dark cluster with lights.
    [HIGH — aso ebi, gele, band/DJ (register); MEDIUM — chair covers and
    chiavari (rental firms)]
  - *Light:* under canopies: bright, even shade with hot sun beyond;
    golden-hour as the party runs into evening; in a hall: warm
    chandelier light and coloured uplights. [EDITORIAL]
  - *Palette:* white canopy and linen dominated, with the **aso ebi
    colour** (gold, wine, emerald, coral, lace) repeated through the
    crowd as the key accent.
  - *Signature shapes (3–5):* canopy roofs in rows; gele silhouettes;
    covered chairs; round tables receding; a cooler or chafing dish at a
    serving point.
  - *Density and wear:* dense, festive, new: crisp covers, guests packed
    table to table.
  - *People cues:* guests as blurred colour and silhouettes, within the
    background-people limit; no identifiable children.
- **Shell:** a closed street or a compound with hired canopies on
  tarmac or pavers, or an event hall with tiled floor. [HIGH — register;
  How large gatherings work here]
- **The table as set here:** a round table with a white or coloured
  cloth; each guest's **plated meal** (two rices, protein, dodo, moi moi,
  salad) on disposable or hired white plates; a plastic spoon or fork;
  small chops in a small box first; serviettes. [MEDIUM — La Heiress via
  How large gatherings work here]
- **Subregional variants and the national default:** national default
  when nothing is named: a Lagos owambe under white canopies with covered
  chairs and aso ebi guests. Southeast igba nkwu: a family compound with
  canopies and a central space for the wine-carrying (rite never the
  subject). North: weddings are more gender-separated, modest dress
  (see the file's northern notes); halls in Kano or Kaduna. Hall
  version for upscale Lagos and Abuja.
- **Hallucination traps:** a Western white wedding with champagne; an
  Indian wedding mandap; a Ghanaian kente-dominated look; "tribal"
  costume; money raining over the table; a party backdrop with readable
  names.
- **Never stage:** money spraying or naira notes; beer, stout, palm wine,
  Chapman mugs, sachet water; printed backdrop text; brand marks on
  coolers, chairs or canopies; a full flag; identifiable children.
- **Prompt-ready line:** "A Lagos owambe in soft focus: rows of white
  canopies over round tables with white-covered chairs, guests in
  matching gold aso ebi and tall gele headwraps as blurred silhouettes,
  and waiters carrying plates between the tables in bright afternoon
  shade."
- **Confidence and sources:** HIGH for the canopy and aso ebi look
  (register sources); MEDIUM for hire items (Lagos rental firms); hall
  dressing LOW-MEDIUM. 1 search this pass.

---

## TRUSTED CONTENT

### HERO PRODUCT SLOT

Every scene carries one TCCC hero product, chosen by the brief. This file
uses `south-africa.md`'s generalised slot; since 2026-09-27 that is the
project-wide rule (the brief dictates the SKU, never the region — see
`DECISIONS.md`).

**Template:**
> [HERO PRODUCT]: {brand and variant exactly as named on pack}, in
> {format and size}, {dominant pack colour and material cue},
> {negated lookalikes}. {Position: standing upright on the surface,
> label facing camera or turned slightly}. Pack text will be composited
> in post.

**Rules:**
- **Name the variant; negate the closest lookalike** (Coca-Cola Original
  vs. Coke Zero; Fanta flavours; Sprite vs. a generic lemon-lime soda;
  Schweppes vs. a tonic in a bar). An unspecified "Coca-Cola can" rendered
  as the wrong variant in 2 of 3 generations [HIGH — first-party test,
  `coca-cola-guidelines.md` §1].
- **The brief always names the SKU — never the region or this file**
  (standing rule, 2026-09-27; see `DECISIONS.md`). If a brief names no
  product, ask for one rather than inferring it. The register list below
  is reference for whoever writes the brief, not a default:
  - buka, suya spot, roadside, market: a 35 cl or 50 cl PET bottle, or a
    glass bottle where the brief confirms the format is current
  - on the go, office desk, mall: a 33 cl can or a 35–50 cl PET
  - owambe table, family lunch for several: a 1 L PET in the midground,
    one filled plain glass per place setting, or single-serve PET at each
    place (party guests are commonly served individual bottles —
    [LOW-MEDIUM — not independently re-checked])
  - restaurant: a can or glass bottle, optionally poured over ice into
    plain unbranded glassware
- **Use the chosen format's real dimensions as the scale anchor** (see
  SCALE REFERENCE — **the Nigerian 33 cl can appears to be the tall
  "sleek" format, not the standard 330 mL can**; this changes every
  "relative to the can" comparison).
- **One hero product per scene** unless the brief asks for several.
- **Never let a Fanta or Sprite hero drift into Chapman** — no large
  mug, no cucumber or orange slices, no red grenadine layer, no ice-filled
  pint glass (see ICONIC BEVERAGES).

**Slot sketches (verify local pack details before a production run):**

| Brief calls for | Slot wording |
|---|---|
| Coca-Cola Original, can | "a Coca-Cola Original 33 cl can, tall slim red aluminium can, not Coke Zero" (confirm sleek vs. standard can per SCALE REFERENCE) |
| Coca-Cola Original, 35 cl PET | "a small Coca-Cola Original 35 cl plastic bottle, red label, not the black-labelled Coke Zero" |
| Coca-Cola Original, 50 cl PET | "a Coca-Cola Original 50 cl plastic bottle, red label, not Coke Zero" |
| Coke Zero | "a Coke Zero {format}, black label, not the red Original" |
| Fanta Orange | "a Fanta Orange {format}, bright orange soda, not Chapman, no mug, no fruit slices" |
| Sprite | "a Sprite {format}, clear lemon-lime soda in green-labelled pack, not a generic lemonade, not Chapman" |
| Family multi-serve | "a 1-litre Coca-Cola Original plastic bottle in the midground, one filled plain glass per place setting" |
| Eva Water / Five Alive / Schweppes | name the product and pack; only when the brief asks for it (portfolio confirmed, pack looks not confirmed [LOW]) |

### ICONIC BEVERAGES (documented context — staging rules follow)

This section documents the real Nigerian drinks landscape, including
alcohol, and restricts only what is staged, never what is recorded — the
same design `south-africa.md` uses.

**TCCC Nigeria portfolio — verified this pass (via search).** The
Nigerian Bottling Company (Coca-Cola HBC) bottles and distributes
**Coca-Cola, Coke Zero, Fanta, Sprite, Schweppes and Limca** (sparkling),
the **Five Alive** juice range and **Eva** water, and has added energy
drinks — **Monster** and **Predator (Predator Gold)**. [HIGH for the core
roster — NBC's own "at a glance" page and site (via search), Coca-Cola
Company's Coca-Cola HBC system page, Adexen company profile] NBC
announced in October 2025 that it was expanding into snacks with Plazma
biscuits [MEDIUM — Nairametrics; not a beverage, never a hero]. The
**Seven-Up Bottling Company** (Pepsi, 7Up, Mirinda) is the main
competitor [HIGH — Wikipedia (via search)]; keep its products and any
Pepsi-blue out of frame.

**Non-alcoholic cultural beverages (not staged unless the brief allows a
named companion):**
- **Chapman** — Nigeria's signature mocktail: **Fanta and Sprite**,
  grenadine or blackcurrant cordial, Angostura bitters, lemon/orange and
  cucumber slices, served over ice in a large mug or tall glass; believed
  to originate at the Ikoyi Club in Lagos. It is "predominantly served
  without alcohol" but can take vodka or rum, and Angostura itself
  contains alcohol. [HIGH — Wikipedia (via search), Food52, Yummy Medley,
  All Nigerian Recipes, Dash of Jazz converge] **Document only — never
  staged**, because Angostura adds alcohol content (a TCCC product mixed
  with alcohol, file-wide rule 3) and it is a second drink. (Non-alcoholic
  TCCC-brand mixes are otherwise allowed, schema §5.5.) Flag
  for Fernando: whether a TCCC-sanctioned Chapman execution exists in
  Nigeria (a "Fanta Chapman" product was recalled from model knowledge but
  **could not be verified** — search budget exhausted; see GAP LOG).
- **Zobo** — deep ruby-purple hibiscus drink, often with ginger and
  pineapple; sold chilled in reused plastic bottles. [MEDIUM — named in
  the owambe drink list, African Food Network; details not re-checked]
- **Kunu** (millet or sorghum drink; **kunun aya**, tiger-nut milk) and
  **fura da nono** (spiced millet balls in fermented milk) — North.
  [HIGH for fura da nono's composition — Guardian Nigeria's Kano dishes,
  NICO, Legit.ng]
- **Malt drinks** (dark, sweet, non-alcoholic, in brown glass or cans),
  **tea with evaporated milk**, **chocolate malt drinks**, and sachet
  **"pure water"** (500 mL printed plastic sachets). [MEDIUM — not
  independently re-checked; genericize all brands] Pure-water sachets are
  printed and appear at every event — exclude.

**Alcohol context (never staged):**
- **Lager and stout** in brown bottles, big at parties, bars and
  "joints" in the South; Nigeria is one of the world's largest stout
  markets. [LOW-MEDIUM — not independently re-checked]
- **Palm wine** (emu, milky white, from calabashes or jerrycans),
  **ogogoro** (distilled palm spirit), **burukutu/pito** (sorghum beer,
  Middle Belt). [MEDIUM — not independently re-checked; uncontested]
- **Alcohol is prohibited in the sharia states** (Kano, and about a dozen
  others). [HIGH — see FILE ROLE & METHOD sources]
- No specifically Nigerian Coca-Cola cocktail was found or searched; the
  mixer risk is generic (spirits with cola at bars and parties) and
  Chapman-specific (Fanta, Sprite).

**Staging rules for prompters** (grounded in TCCC's Responsible Marketing
and Responsible Alcohol Marketing policies as `south-africa.md` documents):
1. **No alcohol in any scene**: no bottles, crates, calabashes of palm
   wine, jerrycans, bar taps or labels.
2. **Never stage a TCCC product as a mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5)** — including Chapman: no big
   mug with ice, fruit and cucumber beside a Fanta or Sprite.
3. **Venues whose default is alcohol** (bars, "joints", beer parlours,
   many evening pepper-soup spots, the drinks side of an owambe): either
   stage alcohol-free with an explicit exclusion line ("no beer bottles,
   no palm wine, no Chapman, no other drinks") or choose a different
   register. Beer parlours are **not recommended** as settings. [EDITORIAL]
4. **Age-appropriate casting**: scenes with children follow TCCC's
   under-13 marketing rules (see GAP LOG).

### GENERAL NORMS

**Meal clock and light.**

| Occasion | Typical time | Confidence |
|---|---|---|
| Breakfast (out of scope) | ~07:00–09:00 | MEDIUM |
| **Lunch** | ~12:00–15:00, flexible around work and school | MEDIUM |
| **Dinner** (a family meal) | ~19:00–21:00 | MEDIUM |

[MEDIUM — Remitly's Nigeria meal-times guide, with Nigerian food-timetable
blogs (Sisiyemmie, 9jafoods) consistent; one well-structured source plus
tier-4 corroboration] [SOURCE: [Remitly — Meal Times in Nigeria](https://www.remitly.com/blog/food/meal-times-in-nigeria/)]

**§5.2 cross-country contrasts:**
- **Light**: Lagos sits at ~6.5°N, Kano at ~12°N — close to the equator,
  so sunset is ~18:30–19:15 all year and day length barely changes.
  **Dinner is always after dark**, under interior or generator/bulb
  light. Contrast Spain's 21:30 summer light. [MEDIUM — latitudes are
  uncontested; the sunset range is model knowledge, not re-checked]
- **Seasons are wet and dry, not hot and cold**: rainy season roughly
  Apr–Oct in the south (heavy, green, grey skies); the **harmattan**
  (Dec–Feb) brings dusty, hazy, pale-gold light and cool mornings,
  strongest in the North. [MEDIUM — not independently re-checked]

**Dietary and religious norms (hard staging rules):**
- **Zone 6 (North): halal, no pork, no alcohol — absolute.** Sharia law in
  about a dozen northern states prohibits sale and consumption of
  alcohol [HIGH]. Pork is not eaten by Muslims [HIGH, uncontested].
- **Nationally: halal-compatible by default.** Nigeria is roughly half
  Muslim, and Muslims are a large share of Yoruba zone 1 too, so a
  default scene carries no pork and no alcohol. Pork is eaten in parts of
  the Christian South (e.g. in pepper soup or at some bars) but is not a
  national-core meat; beef, goat, chicken and fish are. [HIGH for the
  demographic split; LOW-MEDIUM for pork's place in southern eating — not
  independently re-checked] This file catalogues no pork dish.
- **Ramadan**: in the North (and Muslim households everywhere), no
  daytime eating or drinking scenes during the fasting month; food scenes
  are iftar (after sunset) or suhur (pre-dawn). **2027: Ramadan expected
  to begin ~8 February, ending ~8 March.** [MEDIUM — projected dates from
  AnyCalendar and TimeandDate; moon-sighting may shift by a day]
- **Right hand for eating.** Swallows are eaten with the right hand: a
  small piece is pinched off, rolled, dented with the thumb to scoop soup,
  and swallowed. [HIGH — Wikipedia's swallow/pounded yam entries (via
  search), Immaculate Bites, Travel & Munchies] A bowl of water for hand-
  washing is set out. Rice, beans and stews are eaten with a spoon; forks
  appear with rice at parties and restaurants. [LOW-MEDIUM — not
  independently re-checked]

**Table norms:**
- **Soup and swallow are served separately**: the swallow as a smooth
  mound on a flat plate (often still wrapped in cling film or a plastic
  "nylon" sheet), the soup in a bowl beside it, with the meat and fish
  pieces sitting in the soup. [MEDIUM — the cling-film wrapping is
  documented as a shaping step (Immaculate Bites); serving still wrapped
  is common practice, not independently re-checked]
- **"Assorted" meat**: soups and stews carry mixed pieces — beef, shaki
  (tripe, pale honeycomb or ridged), ponmo (cow skin, pale and
  gelatinous), cow foot, goat, dried or smoked fish, stockfish,
  periwinkles in Delta/Efik soups. [HIGH for the assorted concept —
  multiple soup recipes above; composition per dish in each entry]
- **Palm oil colour is a regional and dish signal**: deep orange-red
  (egusi, banga, afang, ofe onugbu, ayamase's bleached-green look aside);
  a mix of palm and vegetable oil for everyday obe ata; **bleached palm
  oil** for buka stew. [HIGH — 9jafoodie, All Nigerian Recipes, My Diaspora
  Kitchen]
- **Cutlery layout**: in restaurants and hotels, the British/Continental
  layout (fork left, knife right). No Nigeria-specific convention
  searched. [LOW-MEDIUM — not independently re-checked]

**Price and policy context (not a staging fact).** Nigeria's N10-per-litre
excise on sugar-sweetened beverages (Finance Act 2021, collected from
2022–23) raised ~N108.6 billion by September 2025; a bill replacing it
with an ad valorem levy passed the Senate on 4 June 2026 and was before
the House as of September 2026. [HIGH — Nairametrics, BusinessDay,
Bloomberg Tax] Relevant to brief strategy (Coke Zero, formats), not image
content.

### SCALE REFERENCE — NIGERIA

**Product anchors — Nigeria's formats are confirmed; can shape is the
open question.**

| Format | Size | Confidence |
|---|---|---|
| **33 cl can** | Current. **Probably the "sleek" 330 mL can: ~146 mm tall × ~57.4 mm diameter**, not the standard 330 mL can (115.2 × 66.1 mm) | HIGH that a 33 cl Coca-Cola can is sold (Shoprite Nigeria, The Drink Shop Nigeria, Jumia 6-can packs). **MEDIUM that it is the sleek format** — The Canmaker reports a high-speed line for **"sleek cans"** installed at NBC's Ikeja plant (via search), and a retailer lists "Coca-Cola Original Taste (Nigeria), in can slim, 330 ml" (via search). Sleek 330 mL dimensions from packaging suppliers (Packfine, Vaza) [HIGH for the generic sleek dimensions] |
| **35 cl PET** | Current; the small everyday bottle. Dimensions not confirmed | HIGH (Jumia official store, Next Cash and Carry, The Drink Shop) |
| **50 cl PET** | Current, widely sold. Use `coca-cola-guidelines.md` §4.3's 500 mL PET, 203 × 65 mm | HIGH for format (Supermart.ng, New Beginnings); MEDIUM for applying generic dimensions |
| **60 cl PET** | Current (Coca-Cola and Coke Zero 60 cl × 12 packs). Dimensions not confirmed | HIGH (Next Cash and Carry, Toybetts, Sidel reference on NBC 600 mL/350 mL PET lines) |
| **1 L PET** | Current. Dimensions not confirmed | MEDIUM (Jumia official store, via search) |
| 50 cl glass bottle | Listed as "Nigerian Coke 50cl" — **only by UK diaspora import shops**; current in-Nigeria returnable-glass status **not confirmed** | LOW — do not stage a glass bottle for an in-Nigeria scene until confirmed |
| 33 cl PET | One Nigerian liquor retailer lists "Coca Cola Pet Bottle 33cl" | LOW — possibly a mislabel of 35 cl |

**Practical guidance [EDITORIAL]:** if the brief names a can, state
"a tall, slim 33 cl can" and anchor to **~14.6 cm tall, ~5.7 cm across**
— until a Nigerian spec confirms the shape; if the brief's art direction
shows a standard-proportion can, use 11.5 × 6.6 cm and note it. Every
"relative to the can" comparison in this file's dish entries uses the
**sleek can (14.6 cm tall, 5.7 cm across)** and gives a PET alternative
where it matters. **This contradicts `coca-cola-guidelines.md` §4.3's
implicit assumption that a non-US 330 mL can is the 115.2 × 66.1 mm
standard can — logged in GAP LOG, not edited there.**

Sources: [Shoprite Nigeria — Coca-Cola 33cl can](https://shoprite.ng/product/coca-cola-33cl-can/);
[Jumia — Coca-Cola 35cl PET x 12](https://www.jumia.com.ng/coca-cola-drink-35cl-pet-x-12-81076430.html);
[Supermart.ng — Coca-Cola PET 50cl x12](https://www.supermart.ng/products/coca-cola-coke-pet-bottle-50-cl-x12);
[Next Cash and Carry — Coca-Cola 60cl x 12](https://nextcashandcarry.com.ng/product/coca-cola-50cl-pet-x-12/);
[Sidel — NBC reference](https://www.sidel.com/about/media/global-references/nigeria-bottling-company/);
[The Canmaker — new high-speed canning line for Nigerian Coca-Cola plant](https://canmaker.com/new-high-speed-canning-line-for-nigerian-coca-cola-plant/) (via search; fetch blocked);
[Packfine — 330 ml standard vs sleek](https://www.packfine.com/news/what-are-the-dimensions-of-a-330ml-can-standard-and-sleek-cans-compared/).

**Food scale anchors.**

| Anchor | Size | Confidence |
|---|---|---|
| Puff-puff | Dropped as **golf-ball-sized** batter (~4 cm), puffs to ~4.5–5.5 cm | HIGH for golf-ball portioning — Immaculate Bites, Cooking with Claudy, Recipes from a Pantry; post-fry size EDITORIAL |
| Akara | A heaped tablespoon of batter; fritters ~5–6 cm, irregular; some recipes aim for golf-ball size | MEDIUM — Chef Lola's Kitchen, My Diaspora Kitchen, Splendid Table vary |
| Swallow portion ("one wrap") | A smooth dome ~10–13 cm across, ~6–8 cm tall — about fist-sized; roughly the can's diameter ×2, half its height | LOW-MEDIUM — EDITORIAL from the fist-sized ball shaping described in recipes; not measured |
| Moi moi (leaf or tin) | Leaf parcel or tin-shaped block ~8–10 cm long/across, ~4–6 cm tall | LOW-MEDIUM — leaf/tin documented (Yummy Medley, African Stores); size EDITORIAL |
| Meat pie | Half-moon pastry ~10–13 cm across, fork-crimped edge | LOW-MEDIUM — cutter-dependent per My Active Kitchen; size EDITORIAL |
| Suya slice | Very thin strips ~6–8 cm long, 2–4 cm wide, a few mm thick | LOW-MEDIUM — "thin-sliced" HIGH (Wikipedia via search, 196 Flavors); dimensions EDITORIAL |
| Ripe plantain (dodo) | Whole plantain ~20–25 cm; cut into diagonal ovals ~5–7 cm or cubes ~2 cm | LOW-MEDIUM — not independently re-checked |
| Agege bread | Soft, pale, rectangular pullman-like loaf, ~25–35 cm long | LOW — not independently re-checked |

**Vessels.**

| Vessel | Typical size | Visual notes | Confidence |
|---|---|---|---|
| **Party cooler** | A 5 L cooler of party rice feeds ~15; event coolers range to very large | Insulated plastic tub, lid, usually blue, red or white; rice ladled out at the serving table | MEDIUM — Aso Rock Food (UK caterer) on 5 L = ~15 people; "coolers" as the party serving vessel HIGH (African Food Network, caterers) |
| Disposable takeaway pack / party pack | ~20 × 20 cm foam or plastic clamshell | White foam or clear/black plastic, lid; owambe "take-home" packs and buka takeaway | LOW-MEDIUM — not independently re-checked |
| Enamel / ceramic plate | ~24–28 cm | Home and buka plates; white or patterned enamel, some with coloured rims | LOW-MEDIUM |
| Soup bowl | ~15–18 cm | Ceramic, melamine or plastic; for soup beside a swallow | LOW-MEDIUM |
| Hand-washing bowl | ~15–20 cm | Small plastic or stainless bowl of water beside the plate | MEDIUM — practice uncontested; size EDITORIAL |
| **Okwa (wooden bowl)** | ~15–20 cm | Carved dark wooden bowl, sometimes lidded; nkwobi and isi ewu | HIGH for okwa as the traditional vessel (Nkenne, Wikipedia via search); size LOW |
| Clay pot (for pepper soup, banga) | ~15–25 cm | Unglazed or lightly glazed brown-black pot | LOW-MEDIUM |
| Big aluminium pot / "buka tray" | Pots 40–60 cm; rectangular trays | Dented, bright aluminium on the buka counter | MEDIUM — "wide metal trays" (BusinessDay) |
| Calabash | ~20–30 cm | Halved gourd, pale tan; fura da nono, kunu, **palm wine — keep palm-wine associations out** | LOW-MEDIUM |

### TEXTURE LEXICON (use in prompts)

| Surface | Use | Avoid |
|---|---|---|
| Party jollof | "separate, long, parboiled grains stained deep orange-red, a light oil gloss, a few darker smoky-browned grains, no sauce pooling" | "risotto," "Spanish rice," "paella," "mushy tomato rice," "Mexican rice with peas and carrots" |
| Nigerian fried rice | "separate grains tinted pale yellow from curry powder, flecked with small diced green beans, carrot, sweet corn and green pea, a few pieces of liver or shrimp" | "Chinese egg fried rice with soy colour," "risotto" |
| Pounded yam | "very smooth, bright white to ivory, stretchy dome with a soft satin sheen, no grain" | "mashed potato," "dough ball," "bread" |
| Eba (yellow garri) | "pale butter-yellow, slightly grainy, matte dome with faint granular texture" | "polenta," "cornmeal mush," "mashed squash" |
| Eba (white garri) | "off-white, faintly granular, matte" | "mashed potato" |
| Amala | "smooth, soft, **grey-brown to dark brown** dome with a faint sheen" | "chocolate pudding," "brownie," "mud" |
| Fufu / akpu | "smooth, off-white to faintly grey, dense, slightly tacky, faint sour-fermented sheen" | "pounded yam" (brighter white, stretchier) |
| Egusi | "thick, curdled-looking clusters of pale ground melon seed in orange-red palm oil, with dark green leaf ribbons" | "scrambled egg," "cottage cheese," "curry" |
| Ogbono | "glossy, dark olive-brown, visibly drawy — strands stretch when lifted" | "gravy," "okra gumbo" |
| Palm-oil sheen | "a clear orange-red oil pooling at the edges" | "tomato sauce," "chilli oil" |
| Suya | "dark reddish-brown, dry, matte spice crust dusted with coarse peanut-chilli powder, charred tips" | "glossy barbecue glaze," "kebab," "satay with sauce" |
| Dodo | "ripe plantain ovals, deep golden-orange with caramelised dark-brown edges, glossy with oil" | "banana," "potato chips," "sweet potato fries" |
| Puff-puff | "irregular golden-brown balls, slightly craggy, matte, a light sugar dusting optional; soft airy interior" | "glazed doughnut holes," "perfect spheres" |

### VISUAL & PLATING NORMS

- **Palette**: the deep orange-red of jollof and palm-oil soups; pale
  yellow fried rice; the white, yellow, grey-brown and ivory of swallows;
  dark leaf greens (ugu, bitter leaf, waterleaf, afang, ewedu's deep
  green); golden dodo; the rust-brown of suya spice; white and red
  onion rings as the classic garnish. [EDITORIAL synthesis]
- **Plating is generous and heaped**: party plates carry two rices, a
  protein, dodo, a slab of moi moi and salad; buka plates are rice or
  swallow with a ladle of stew and several meat pieces. Composed fine-
  dining plating reads as a hotel, not ordinary Nigeria. [MEDIUM —
  consistent with party-food and buka sources; not independently
  re-sourced beyond them]
- **Protein pieces are separate and countable**: a Nigerian plate names
  its meat — "rice and one chicken", "two meat". [LOW-MEDIUM — common
  idiom, not independently re-checked] Count pieces explicitly in prompts.
- **Leak risks**: standard exclusion line for every prompt: "no other
  drinks, no alcohol, no beer bottles, no palm wine, no Chapman mug, no
  sachet water, no bottles other than the hero product, no legible text."

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **No national census split of house vs. flat was found this pass.**
  Nigeria's last completed census was 2006; the 2024 DHS reports dwelling
  materials, rooms and utilities, not a clean house/apartment split.
  Direction from the sources that were found: most urban Nigerians rent
  **rooms in tenement buildings or modest self-contained flats** (Guardian
  Nigeria); common residential types are the duplex, single-family
  bungalow, traditional courtyard house, flat/apartment and face-me-I-
  face-you (Osogbo housing study); rural households differ sharply from
  urban ones (DHS: ~half of rural households have earth or sand floors vs.
  ~10% urban; electricity 85% urban vs. 34% rural). [MEDIUM for each
  finding; no single HIGH national split — see GAP LOG] [SOURCE:
  [Guardian Nigeria — What kind of house do most Nigerians live in?](https://guardian.ng/nigerian/what-kind-of-house-do-most-nigerians-live-in/);
  [ScienceDirect — house-type and residential quality in Osogbo](https://www.sciencedirect.com/science/article/pii/S2095263513000812);
  [DHS — household and housing characteristics](https://dhsprogram.com/pubs/pdf/FR148/02Chapter02.pdf)]
- **Settlement registers (choose one; don't blend) — PENDING HUMAN
  SIGN-OFF, see FILE ROLE & METHOD. Factually described; not to be used
  for generation until sign-off:**
  1. **Estate duplex or bungalow**: a walled compound with a sliding or
     swing metal gate, painted concrete walls, interlocking-paver or
     tiled forecourt, a generator housing, a water tank on a stand; inside,
     tiled floors, a POP (plaster) ceiling with recessed lights, a large
     sofa set, a dining table. [LOW-MEDIUM — not independently re-checked]
  2. **Flat / "self-contain"**: a room-and-parlour or 2–3-bedroom flat in
     a 2–4-storey block; tiled floor, curtains, ceiling fan, a small
     dining table or a centre table in the parlour. [LOW-MEDIUM]
  3. **Face-me-I-face-you tenement**: single rooms off a shared central
     corridor, shared kitchen and bathroom. [HIGH for the definition —
     Wikipedia (via search), Guardian Nigeria] **Highest caricature risk;
     do not stage without sign-off.**
  4. **Northern family compound (zone 6)**: mud-render or cement walls, a
     zaure (entrance hall), a courtyard, flat roofs, shade trees.
     [LOW-MEDIUM — not independently re-checked]
  5. **Rural village compound**: bungalows with zinc roofs around a yard,
     plantain or cassava plots, a firewood kitchen. [LOW-MEDIUM]
- **Interior markers (pick one or two, register-neutral)**: ceramic floor
  tiles; a ceiling fan; a rechargeable lamp or the sound-free hint of a
  generator (never visible fuel cans in hero); lace or plastic tablecloth;
  a glass-fronted cabinet; a gas cooker with a small cylinder; a big
  plastic water drum in the kitchen; wall calendar or family photos (keep
  unreadable). [LOW-MEDIUM — not independently re-checked]
- **Gen Z lens (§5.3)**: many young adults live in the family home until
  marriage; students in hostels and shared "self-contains"; social venues
  are malls, fast-food chains (genericize), suya spots, lounges (stage
  alcohol-free), small-chops and shawarma kiosks. [LOW-MEDIUM — no
  Nigeria-specific leaving-home statistic searched; see GAP LOG]
- **Caricature avoidance [EDITORIAL]:**
  - **Poverty-only framing**: lagoon stilt settlements, open drains,
    unfinished buildings, flood water, generator smoke, rubbish heaps as
    the default "authentic Lagos".
  - **Sanitized over-correction**: a placeless glass-and-marble interior
    with nothing Nigerian about it.
  - **"Tribal" costume and safari Africa**: masks, drums, grass skirts,
    wildlife, savanna sunsets in ordinary scenes. Aso ebi and gele are
    authentic for an owambe or festival brief, not as everyday costume.
  - **Oil, conflict and insurgency imagery**: oil flares, spills, soldiers,
    checkpoints, 419/scam tropes — never.
  - **Political imagery**: protest symbols, party colours, the national
    flag outside an explicit Independence Day brief.
  - **Money spraying** near the product: naira notes are legible and the
    wealth-display reading is contested (see Owambe below).
  - The ordinary baseline: a tidy, lived-in family flat or bungalow, or a
    busy, clean, well-lit eatery.

#### Scenario: Casual lunch at home — 1 person

A dining table or the centre table in a parlour, ~13:00–14:30, window
light through a burglar-proof grille and a lace curtain, ceiling fan
above. Plate: white rice with a ladle of red stew and two pieces of fried
beef, a few slices of dodo; or leftover jollof reheated with one chicken
piece. Hero (from the brief; formats that fit): a 35 cl or 50 cl PET or a
33 cl can beside the plate. Gen Z: the same plate on a desk in a hostel
room or small self-contain, a laptop closed beside it. [EDITORIAL; dish
list MEDIUM]

#### Scenario: Casual lunch at home — 2 people

Two plates of swallow and soup — e.g. eba with egusi — each swallow on its
own plate, one shared bowl of soup or two bowls, a bowl of water for
hand-washing between them; or two plates of beans and dodo. Hero (from
the brief; formats that fit): two cans or two small PETs, or a 1 L PET
with two glasses. [EDITORIAL]

#### Scenario: Casual lunch at home — 3 people

The Sunday family lunch after church (Christian South) or after Friday
prayers/weekend (Muslim households): a pot of jollof or fried rice served
onto plates, a platter of fried chicken or turkey, dodo, a bowl of
Nigerian salad or coleslaw, moi moi. Or a swallow meal with a big pot of
soup in the centre and a swallow per person. Hero (from the brief;
formats that fit): a 1 L PET in the midground, a filled glass at each
place. [LOW-MEDIUM — Sunday rice is common knowledge, not independently
re-checked]

#### Scenario: Dinner at home, indoors

~19:00–21:00, always after dark (equatorial latitude): bulb or LED light,
ceiling fan, TV glow (blurred screen). Everyday: a swallow with soup (the
classic dinner), yam and egg sauce, beans and bread, white rice and stew,
indomie-style noodles (genericize). [MEDIUM for timing; dishes LOW-MEDIUM]
Hero (from the brief; formats that fit): a can or small PET.

#### Scenario: Meal outdoors at home

- **A compound or balcony barbecue ("BBQ") or a family get-together** in
  the forecourt: plastic chairs, a canopy, a charcoal grill with chicken
  and fish, a cooler of jollof. [LOW-MEDIUM — not independently re-checked]
- **Zone 6 courtyard meal**: a mat or low table in the shade, tuwo and
  miyan kuka in shared bowls. [LOW-MEDIUM]
- **Rainy-season caution**: outdoor scenes Apr–Oct read as risky under
  heavy cloud; choose dry-season light unless briefed. [EDITORIAL]
- Hero (from the brief; formats that fit): a 1 L PET on the table or
  single-serve PET/cans on a side table (cooler branding blurred).

#### Scenario: Meal on the go — 1 person

The street register is strong: **suya** on plain paper with onions and
tomato on a ledge at night; **boli and fish** from a roadside roaster
(zone 3); **akara in a paper bag** or with agege bread; **puff-puff** in a
small clear bag; a **meat pie** in a paper sleeve; **roasted corn and
coconut** by the roadside in the rainy season [LOW-MEDIUM]. Traffic,
danfo yellow and okada blurred behind. Hero (from the brief; formats that
fit): a 35 cl PET or a can on the ledge. **§5.2 contrast**: like Mexico,
street food is dense and everyday, but it is organised around grills,
fryers and pots rather than a taco-stand counter; it is often eaten
standing or taken home in a nylon (plastic) bag. [MEDIUM — Naija Food
Tour, 9jakitchen street-food guides]

#### Scenario: Away from home — 1 person at a restaurant/café

- **Buka / mama put at lunch** (framing PENDING HUMAN SIGN-OFF — stage as
  busy, clean, beloved): a wooden bench and table under a canopy, a plate
  of white rice, beans and buka stew with assorted meat, or amala with
  abula; the cook's pots blurred behind. [HIGH for the buka form —
  Demand Africa, BusinessDay, All Nigerian Recipes] Hero (from the brief;
  formats that fit): a 35 cl or 50 cl PET beside the plate.
- **Fast-food chain or eatery** (genericize: "a Nigerian fast-food
  restaurant"): jollof, fried rice, chicken, moi moi on a tray; plastic
  tables. [LOW-MEDIUM]

#### Scenario: Away from home — 2–3 people

- **Suya spot after work** (evening; stage alcohol-free).
- **Pepper-soup joint**: point-and-kill catfish pepper soup in bowls —
  often a drinking venue, **stage explicitly alcohol-free or prefer a
  restaurant register**.
- **Owambe table** (see the cross-cutting register): three guests at a
  round table under a canopy with party-rice plates.
- **A Calabar/Uyo restaurant** with afang and fufu (zone 4), or a Port
  Harcourt spot with boli and fish (zone 3).
Hero (from the brief; formats that fit): one single-serve per person, or
a 1 L PET with glasses. [EDITORIAL]

---

## CROSS-CUTTING REGISTER: OWAMBE & PARTY FOOD

- **What it is**: Owambe (from Yoruba "ó wà níbẹ̀", "it's happening there")
  is the term for elaborate Yoruba parties — weddings, birthdays,
  funerals of the elderly, naming ceremonies, house-warmings — and the
  word now reaches beyond Yoruba events. [HIGH — Wikipedia (via search),
  Pulse Nigeria, Discover Lagos]
- **Look**: white canopies and rows of white chairs; guests in **aso ebi**
  (matching "family cloth" chosen by the hosts), women in gele headwraps;
  live band or DJ; **money spraying** on celebrants as they dance. [HIGH —
  Wikipedia, Asoebi Assist, Cultural Kanvas]
- **Food**: party jollof, fried rice, dodo, moi moi, chicken or beef or
  fish, coleslaw or Nigerian salad; small chops as a starter (puff-puff,
  samosa, spring roll, peppered gizzard, "stick meat"), with suya, asun,
  meat pies and chin chin also common. Rice arrives in **coolers**.
  [HIGH — African Food Network owambe list, Africanstores party guide,
  Wikipedia's small chops entry (via search)]
- **Staging**: a round table under a canopy, each guest's plate in front,
  the hero at each place (single-serve) or one 1 L PET per table; aso ebi
  fabric on the blurred guests behind. **Exclude**: money in hand or in
  the air near the product; beer and Chapman; printed backdrop text with
  names; sachet water.
- **§5.2 contrast**: like Mexico's fiesta or South Africa's braai, but the
  food is **cooked in bulk by caterers and served from coolers**, and the
  party rice is a distinct smoky "party" style rather than the home
  version (see Party jollof).

## CROSS-CUTTING REGISTER: STREET FOOD & MARKETS

| | 1. Buka / mama put | 2. Suya spot | 3. Roadside roaster/fryer | 4. Open-air market |
|---|---|---|---|---|
| **What it is** | Informal canteen | Hausa grill (now everywhere) | Boli, corn, akara, puff-puff | Produce, fish, spices, cloth |
| **Light** | Shade under canopy, bright day outside | Night, charcoal glow, bulb | Hard daylight or dusk | Hard sun, umbrella colour |
| **Structure** | Benches, pots, trays | Wire grill on stand, spice mound, knife, board | Wire grill on a drum or a wok of oil over a stove | Stalls, woven trays, basins |
| **How people eat** | Seated at benches | Standing or take-home in paper | Standing, take-away bag | Rarely eaten in place |
| **Default use** | Weekday lunch | Evening snack | Commute, rainy-season snack | Background colour only |
| **Alcohol note** | Low risk | Often beside a bar — exclude | Low risk | Low risk |

[MEDIUM — buka and suya forms HIGH (sources above); market row LOW-MEDIUM]
Signs, price boards and printed wrapping blurred or plain (rule 1).

## CROSS-CUTTING REGISTER: TCCC BEVERAGE MOMENTS — WITH OR WITHOUT A BITE

| Setting | Visual register | Bite (optional) | Suggested format | Tag |
|---|---|---|---|---|
| **Suya night** | Charcoal glow, dark street, bulb light | Suya on plain paper | Can or small PET on a ledge | MEDIUM |
| **Owambe table** | Canopy, aso ebi blur | Party plate or small chops | Single-serve at each place | MEDIUM |
| **Buka lunch** | Bench, pots behind | Rice and stew | 35–50 cl PET | MEDIUM |
| **Lagos traffic / commute** | Danfo yellow blurred through a window | Meat pie, puff-puff | Can on a dashboard or seat (not in hand) | LOW-MEDIUM |
| **Harmattan afternoon (North)** | Pale-gold haze, compound wall | Masa, kilishi | PET on a low table | LOW-MEDIUM |
| **Watching football at home** | TV glow (blurred), parlour | Small chops, suya | 1 L PET on a centre table | MEDIUM |
| **Iftar table (Ramadan)** | After sunset, family on a mat or at a table | Dates, kosai, masa, then the meal | Single-serve at the later meal — see festivals | LOW-MEDIUM; sensitivity |
| **Campus / Gen Z** | Hostel, campus kiosk | Shawarma, small chops | Can | LOW-MEDIUM |

## CROSS-CUTTING REGISTER: FESTIVALS & SEASONAL OCCASIONS

**Sensitivity ratings are editorial; brand/legal sign-off needed.**

| Occasion | When (2026 / 2027) | Setting | Food | TCCC fit | Sensitivity |
|---|---|---|---|---|---|
| **Eid al-Fitr (Small Sallah)** | Fri 20 Mar 2026 (FG public holidays 19–20 Mar) [HIGH — Ministry of Interior, Legit.ng]; ~9–10 Mar 2027 [MEDIUM — projected] | Family visits, new clothes, compound or parlour tables | Rice dishes, tuwo, fried meat, masa, chin chin | Good at a family table | Religious; no alcohol anywhere; nothing near prayer |
| **Eid al-Adha (Eid el-Kabir, Big Sallah)** | Wed 27 May 2026 (holidays 27–28 May) [HIGH — Ministry of Interior, Legit.ng]; ~16 May 2027 [MEDIUM — projected] | Ram slaughter, feasting, sharing meat | Ram meat — fried, peppered, suya, pepper soup; jollof | Good at the feast table | **Never show slaughter or a live ram beside the product** |
| **Ramadan** | ~8 Feb–8 Mar 2027 [MEDIUM] (2026: ended 19 Mar) | Iftar after sunset | Dates, kunu, koko (millet pap), kosai, masa, then a meal | Iftar table only, later meal | No daytime eating scenes in Muslim settings |
| **Ojude Oba (Ijebu-Ode)** | 29 May 2026 (third day after Eid el-Kabir) [HIGH — Channels TV, BellaNaija, The Will] | Parade of regberegbe age-grades and horsemen, spectacular aso-oke fashion | — | Low (parade) | Keep product out of the royal/palace procession |
| **Sallah Durbar (Kano, Katsina, etc.)** | At each Eid | Horse processions | — | **Not recommended** | Royal and religious; **Kano's 2026 Durbar was suspended/contested over security and an emirship dispute** [HIGH — Guardian Nigeria, Vanguard, Legit.ng] |
| **Christmas & "Detty December"** | 25–26 Dec; Dec season | Family homes, church, beach and concerts in Lagos, travel to home villages in the East | Jollof, fried rice, chicken/turkey, goat, salad; ofe owerri or other soups in the East | Very good | Exclude alcohol defaults; church interiors not a setting |
| **New Year** | 1 Jan | Family tables | As Christmas | Good | — |
| **Easter** | 5 Apr 2026; 28 Mar 2027 | Family table | Rice, chicken, salad | Good at home | Home table only |
| **Independence Day** | 1 October | Family, events | Jollof, small chops | Fair | Avoid flags, political imagery, protest associations |
| **New Yam Festival (Iri ji)** | Early August (end of rainy season) | Igbo communities, first yams offered and eaten | Roasted yam with palm-oil sauce, yam pottage | Low–fair | **Traditional and ritual elements (offering, elders, shrines) not a staging setting** [HIGH for timing/meaning — Wikipedia (via search), NICO] |
| **Calabar Carnival** | 1–31 Dec; peak 26–30 Dec 2026, Parade of the Bands Mon 28 Dec 2026 [HIGH — Cross River State carnival site, Rio Times, Africanews] | Costumed bands, floats | Street food | Fair (crowd backdrop only) | Genericize bands; exclude alcohol |
| **Weddings, naming, birthdays (owambe)** | Year-round, most on Saturdays [LOW-MEDIUM] | Canopies | Party food | **Excellent** | See OWAMBE register |

Full staging for each celebration: see CELEBRATIONS & LARGE GATHERINGS below.

---

## CELEBRATIONS & LARGE GATHERINGS

Per `country-file-schema.md` §5.7 (the snapshot rule). The frame shows
only the operator's party (1, 2 or a small group of identical place
settings) at one table or one stretch of a long table; the crowd is
implied. This section deepens the OWAMBE & PARTY FOOD register and the
FESTIVALS calendar above; it does not replace them. **The settlement-
register and buka/tenement framing is still PENDING HUMAN SIGN-OFF** (FILE
ROLE & METHOD); every entry below uses the sign-off-safe baseline (a tidy
family home, a family compound forecourt under a canopy, or a hired event
hall) and none depends on the pending registers. **Ramadan rules stand
unchanged** (GENERAL NORMS: no daytime eating scenes in Muslim settings;
iftar staging is an open editorial call flagged in the GAP LOG); iftar is
not given a celebration entry here.

### How large gatherings work here

- **Who and how many.** Nigerian celebrations are big. Weddings, milestone
  birthdays, naming ceremonies of well-off families and funerals of the
  elderly are owambe-scale events; caterers advise planning for far more
  guests than invited (food for about 700–800 when 500 are expected) and
  using more than one caterer above about 400 guests [MEDIUM — La Heiress
  Weddings, a Lagos wedding planner; tier 2–3]. A Christmas or Sallah
  family day is smaller, roughly 10–40 across extended family and
  visitors [LOW-MEDIUM — estimate].
- **Where (intake venues).** "Other" for the big ones: an event hall, or
  **canopies and rows of chairs on a street or in a compound forecourt**
  (the owambe look, see register). Home outdoor: a compound or forecourt
  under a canopy for naming ceremonies and Christmas in the village. Home
  indoor: the parlour and dining table for Sallah and Christmas family
  meals, with visitors coming and going.
- **Table form.** Owambe: **round tables of 8–10** under canopies or in a
  hall, covered in cloth with chair covers; food comes to the guest. Home
  days: the dining table plus the parlour's centre table, plates handed
  round; in the North, a mat or low table in the compound. [MEDIUM — the
  owambe form is HIGH (register sources); home forms LOW-MEDIUM]
- **Who serves.** At owambes, **caterers cook in bulk and waiters bring
  each guest a plated meal**, rice carried from coolers; planners advise
  25–30 waiters for 500 guests and disposable plates and cups to stretch
  service [MEDIUM — La Heiress]. At home, the women of the family cook
  and serve; guests are served before the household eats.
- **Serving style.** Plated individual portions at events (one heaped
  plate per guest: two rices, protein, dodo, moi moi, salad), small chops
  in small boxes or on side plates first; family-style pots and platters
  at home. Swallow and soup are served per person at home and at Igbo
  and northern events.
- **Plates and cutlery.** At events, disposable plastic or styrofoam
  plates and plastic spoons and forks are common, or hired white crockery
  at upscale halls; **a spoon for rice**, the right hand for swallow, a
  hand-washing bowl for swallow meals. [LOW-MEDIUM — disposable plates
  per La Heiress; rest not independently re-checked]
- **Snapshot-staging default for this market [EDITORIAL].** The three
  most authentic cues: (1) **aso ebi fabric** (one colour or print
  repeated) on blurred guests behind, gele headwraps as silhouettes;
  (2) **white canopy roof and rows of covered chairs** soft in the
  background; (3) **a cooler or chafing dish at a serving point** soft
  at the frame edge. The operator's table is a round table, so "the
  visible stretch" is one arc of it.
- **Never staged**: money spraying or naira notes near the product; the
  drinks side (beer, stout, palm wine, Chapman mugs, sachet water); the
  live band's printed backdrop; slaughter of rams, goats or cows (Sallah,
  aqiqah naming, Christmas village goat); church or mosque interiors.

### Celebration: Wedding reception (owambe)
- Type: life event
- When: year-round, mostly Saturdays; the reception follows a morning
  church or nikkah ceremony and runs from early afternoon into evening.
  Intake time: midday or golden-hour
- Gathering: families, aso ebi groups, friends and community; commonly
  several hundred, 500+ at big Lagos weddings [MEDIUM — La Heiress
  planning figures; no survey]. Venue: other (event hall, or canopies on
  a street or forecourt)
- The spread: **party jollof** and **fried rice** (see catalog: Party
  jollof rice; Nigerian fried rice), **dodo** (see catalog: Dodo), **moi
  moi** (see catalog: Moi moi), fried or peppered chicken, beef or fish,
  **Nigerian salad or coleslaw** (see catalog: Nigerian salad and
  coleslaw); a **small chops** box first (see catalog: Small chops
  platter); amala or pounded yam with soup at Yoruba weddings (see
  catalog: Amala with abula; Pounded yam and egusi). The wedding cake is
  a tall tiered white cake on its own table (no catalog entry; added to
  the CANDIDATE QUEUE). Per guest table: no shared serving vessels beyond
  a small-chops box and a napkin holder; the shared vessels are the
  caterers' coolers and chafing dishes at the service point.
  [HIGH for the party menu — OWAMBE register sources; service MEDIUM]
- Snapshot staging: **1 setting** — one place at a round, cloth-covered
  table: a heaped plate of jollof and fried rice with a chicken
  drumstick, three dodo slices, a moi moi slab and a spoon of salad; a
  small-chops box beside it; the table edge curves out of frame.
  **2 settings** — two identical plates on one arc of the table, two
  small-chops boxes, chair covers visible. **Small group (3–4)** — one
  arc of the round table with four identical plates; the next round
  table soft behind with aso ebi guests (no more than two faces, none
  sharp); a waiter's tray or a chafing dish soft at the frame edge. If
  the brief allows a multi-serve bottle, one sits at the table centre
  (schema §5.7); otherwise the brief's single-serve at each place, as
  the OWAMBE register says.
- Decor and cues: aso ebi colour on blurred guests, gele silhouettes,
  canopy roof, chair covers and sashes, a flower centrepiece kept low.
  Avoid printed names, monograms and hashtags on backdrops (legible
  text).
- Never stage: money spraying, beer and stout crates, Chapman mugs,
  palm wine, sachet water, the bride and groom as identifiable faces.
- Confidence and sources: as tagged; staging EDITORIAL.

### Celebration: Igbo traditional wedding (igba nkwu / wine-carrying)
- Type: life event
- When: in the bride's family compound or hometown, often around the
  Christmas and Easter homecoming seasons and on Saturdays. Intake time:
  midday or golden-hour
- Gathering: both extended families and the community; usually hundreds
  [LOW-MEDIUM — estimate]. Venue: home outdoor (compound or village
  square under canopies)
- The spread: **abacha** (African salad) as a starter, **pepper soup**
  (see catalog: Pepper soup), **nkwobi** (see catalog: Nkwobi and isi
  ewu), **akpu/fufu or pounded yam with ofe onugbu or oha** (see catalog:
  Swallows; Ofe onugbu and oha), **party jollof** (see catalog), and
  sometimes **ukwa** (breadfruit). [MEDIUM — Pulse Nigeria on Igbo
  traditional-wedding foods, Joy Ribbons and The Circular; tier 2–3]
  Abacha has no full entry: pale cream shreds of dried cassava dressed in
  orange-red palm-oil sauce with sliced garden egg, onion rings, ugba
  slivers, a scatter of green leaves and a piece of fried fish, heaped on
  a plate about two can-widths across (already in the GAP LOG and
  CANDIDATE QUEUE).
- Snapshot staging: **1 setting** — a plate of abacha with fish, or a
  swallow on its plate with a bowl of ofe onugbu beside it and a hand-
  washing bowl; a covered pot partly in frame. **2 settings** — two
  swallow plates and soup bowls, a shared bowl of nkwobi between them.
  **Small group** — one arc of a round table under a canopy with four
  identical plates of jollof and abacha, a pepper-soup tureen at the
  centre. Cues: george and wrapper fabrics and red coral beads on blurred
  guests; a canopy roof; plastic chairs in rows behind.
- Decor and cues: george wrappers, coral beads, red caps on elders (soft,
  background). Avoid "tribal" costume, masks.
- Never stage: **the wine-carrying rite itself** (the bride carrying palm
  wine to the groom is the ceremony's core and is a drinking rite); palm
  wine in calabashes or jerrycans; kola nut rites; money spraying.
- Confidence and sources: food MEDIUM (sources above); headcount and
  staging EDITORIAL.

### Celebration: Naming ceremony (isomoloruko; suna in Hausa; iba nwa in Igbo)
- Type: life event
- When: traditionally the eighth day after birth (Yoruba; also the
  seventh/eighth day in Muslim families), with the naming in the morning
  and food served afterwards to visitors. Intake time: midday
- Gathering: family, neighbours, church or mosque community; from about
  20 at home to owambe scale [LOW-MEDIUM — estimate]. Venue: home indoor
  or home outdoor (forecourt with a canopy)
- The spread: **jollof rice with fried plantain and meat**, or **amala
  with ewedu or egusi, pounded yam**, plenty of chicken and meat (see
  catalog: Party jollof rice; Dodo; Amala with abula; Pounded yam and
  egusi); small chops (see catalog: Small chops platter). [MEDIUM —
  Pulse Nigeria naming-ceremony ideas and Wikipedia (Yoruba name) for the
  eighth day; food from Pulse and tier-4 sources that agree]
- Snapshot staging: **1 setting** — a plate of jollof, dodo and a piece
  of chicken on a parlour centre table, a cooler's lid cropped at the
  edge. **2 settings** — two plates on the dining table; between them a
  covered pot of amala and a bowl of ewedu. **Small group** — four plates
  at a forecourt table under a canopy, a small-chops tray in the middle;
  women in matching fabric soft behind. Cues: a cooler or stacked
  takeaway packs at the table edge; visitors' shoes or chairs at the door;
  a canopy roof.
- Decor and cues: soft family-colour fabrics, a canopy. Keep the baby
  out of frame or unidentifiable (kid-adjacent scene, see GAP LOG).
- Never stage: the naming rites (water, honey, kola, salt and other
  symbolic items, prayers), the Muslim aqiqah ram slaughter, alcohol.
- Confidence and sources: as tagged.

### Celebration: Birthday party (milestone and children's)
- Type: life event
- When: any day, big ones on Saturdays; milestone birthdays (40th, 50th,
  60th, 70th) are full owambes. Intake time: golden-hour or evening
- Gathering: milestone: hundreds, as a wedding; a young adult's or
  child's party: 15–50 at home [LOW-MEDIUM — estimate]. Venue: other
  (hall or canopies) for milestones; home indoor or outdoor otherwise
- The spread: the party plate (see the wedding entry), **small chops**
  (see catalog: Small chops platter; Puff-puff; Meat pie), **chin chin**
  in bowls (see catalog: Chin chin), and a birthday cake (no catalog
  entry; added to the CANDIDATE QUEUE). [MEDIUM — party-food sources in
  the OWAMBE register; birthday specifics not separately searched]
- Snapshot staging: **1 setting** — a party plate and a small-chops box
  at a decorated table; the cake on its stand cropped at the edge.
  **2 settings** — two plates, a shared bowl of chin chin and a tray of
  puff-puff. **Small group** — one arc of a round table with four plates
  and a small-chops tray; balloons in plain colours and a soft canopy or
  ceiling drape behind.
- Decor and cues: plain balloons, a dessert table soft in the background.
  Avoid numerals, names and printed banners (legible text).
- Never stage: children as the target of the product (TCCC under-13
  rule; a children's party needs reviewer clearance, see GAP LOG); money
  spraying; alcohol.
- Confidence and sources: MEDIUM for the food; staging EDITORIAL.

### Celebration: Christmas and New Year at home and in the hometown
- Type: calendar holiday
- When: 25–26 December and 1 January; many families travel to their
  hometowns or villages, especially to the Southeast. Main meal at
  midday or afternoon. Intake time: midday
- Gathering: extended family (grandparents, uncles, aunts, cousins) plus
  neighbours dropping in; roughly 15–40 [LOW-MEDIUM — estimate]. Venue:
  home indoor (parlour and dining table) or home outdoor (village
  compound)
- The spread: **jollof rice** with fried chicken, beef or **goat meat**
  (see catalog: Party jollof rice), **fried rice**, **moi moi**, **dodo**,
  **pounded yam with egusi** (see catalog: Nigerian fried rice; Moi moi;
  Dodo; Pounded yam and egusi), Nigerian salad, goat **pepper soup** (see
  catalog: Pepper soup); in the East, ofe owerri or other soups (no entry;
  already in the GAP LOG). About 6–10 pots and platters. [HIGH for the
  menu and the homecoming — Vanguard, Remitly, Commonwealth's Your
  Commonwealth, and the FESTIVALS register converge]
- Snapshot staging: **1 setting** — a plate of jollof and chicken with
  dodo on the dining table; the jollof pot and a salad bowl cropped at
  the edge. **2 settings** — two plates; between them a platter of fried
  chicken and goat meat and a bowl of salad. **Small group** — the end of
  the dining table with jollof, fried rice, chicken and moi moi platters
  and a soup pot, a second table or the parlour's centre table with
  more dishes soft behind. Cues: more pots than diners; plastic chairs
  brought in from outside; a Christmas tree with lights soft in the
  parlour or a village compound wall in harmattan haze.
- Decor and cues: tinsel, a small tree, new clothes. Avoid snow and
  northern-winter imagery.
- Never stage: the goat or chicken before cooking; church interiors;
  beer, stout or palm wine.
- Confidence and sources: HIGH for the menu; headcount LOW-MEDIUM.

### Celebration: Eid al-Fitr (Small Sallah)
- Type: calendar holiday
- When: the day after Ramadan ends (~9–10 March 2027, moon-dependent);
  after Eid prayers in the morning, families eat, dress up and visit
  relatives and neighbours through the day. Intake time: midday
- Gathering: extended family and visitors, roughly 15–40 over the day
  [LOW-MEDIUM — estimate]. Venue: home indoor (parlour) or home outdoor
  (northern compound)
- The spread: in the North, **tuwo shinkafa with miyan kuka or miyan
  taushe** (see catalog: Tuwo shinkafa with miyan kuka), **masa** (see
  catalog: Masa), fried meat; across Muslim homes everywhere, **jollof
  and fried rice** with chicken or beef, and **chin chin** for visitors
  (see catalog: Party jollof rice; Nigerian fried rice; Chin chin).
  Miyan taushe has no entry: a thick orange pumpkin and groundnut soup
  with spinach-like greens, served in a bowl beside the tuwo (added to
  the CANDIDATE QUEUE). [MEDIUM — Daily Trust on Eid al-Fitr dishes and
  Vanguard (May 2026) on Sallah foods; FESTIVALS register]
- Snapshot staging: **1 setting** — a plate of jollof with fried meat on
  a parlour centre table, a bowl of chin chin cropped at the edge.
  **2 settings** — two tuwo mounds on plates with a shared bowl of miyan
  kuka between them on a low table. **Small group** — the end of a
  dining table or a mat with tuwo, soup bowls, a rice platter and a plate
  of masa; visitors in embroidered robes soft in the doorway. Cues: more
  bowls than diners; guests' sandals at the door; Sallah clothes on
  blurred figures.
- Decor and cues: new embroidered kaftans and babban riga, bright
  wrappers and headscarves (blurred). Avoid mosque and prayer imagery and
  Durbar horsemen beside the product.
- Never stage: alcohol or pork anywhere; daytime eating during Ramadan;
  the product near prayer.
- Confidence and sources: as tagged.

### Celebration: Eid el-Kabir (Big Sallah / Ileya)
- Type: calendar holiday
- When: 10 Dhul Hijja (~16 May 2027, moon-dependent); the ram is
  sacrificed after morning prayers, and the meat is cooked and shared
  through the day and the following days. Intake time: midday or evening
- Gathering: extended family and neighbours, meat sent to relatives and
  to non-Muslim neighbours too; roughly 15–40 at the table over the day
  [LOW-MEDIUM — estimate]. Venue: home indoor or home outdoor
- The spread: **ram meat** fried, in stew, in **pepper soup** and as
  **ram suya** (see catalog: Pepper soup; Suya), with **jollof or fried
  rice** (see catalog: Party jollof rice; Nigerian fried rice); in the
  North, tuwo with miyan taushe or kuka (see catalog: Tuwo shinkafa with
  miyan kuka). [HIGH — Vanguard (May 2026), Zikoko, Pulse and Wikipedia's
  "Eid al-Adha in Nigeria" agree that ram meat is the centrepiece,
  prepared fried, as suya and in pepper soup]
- Snapshot staging: **1 setting** — a plate of jollof with two pieces of
  fried ram meat and dodo; a platter of peppered ram cropped at the
  edge. **2 settings** — two plates; between them a pepper-soup bowl and
  a platter of ram suya with onion rings. **Small group** — four plates
  at the end of a table or on a mat, platters of fried meat and suya,
  a rice pot; a charcoal grill's smoke soft in the compound behind.
  Cues: a grill's glow or smoke; extra platters of meat; plates covered
  with foil for sending to neighbours.
- Decor and cues: Sallah clothes, compound courtyard. Avoid live rams.
- Never stage: **the sacrifice, a live or tethered ram, carcasses,
  blood or raw meat piles** (FESTIVALS register rule); alcohol; pork.
- Confidence and sources: HIGH for the menu; staging EDITORIAL.

---

## GAME NIGHT

Per `country-file-schema.md` §5.8. The snapshot rule (§5.7) applies: the
frame shows only the operator's party, and the crowd is implied. **The
file-wide rules apply to every entry**: suya on plain unprinted paper,
never newspaper (rule 1); no alcohol and no Chapman (rule 3); no pork
(rule 4); no other drinks in frame (rule 5); nothing held in a hand (rule
6). **The settlement-register and buka/tenement framing is still PENDING
HUMAN SIGN-OFF**; entries use a tidy family parlour or a public viewing
venue and depend on none of the pending registers. **The Ramadan/iftar
editorial call stays open** (GAP LOG); no entry here is set in Ramadan
daylight. This section expands the BEVERAGE MOMENTS line "Watching
football at home" (small chops, suya, 1 L PET on a centre table); it does
not replace it.

### Watch parties

Football is the national viewing occasion: English Premier League clubs
(Arsenal, Chelsea and Manchester United have very large Nigerian
followings [MEDIUM — Soccernet NG]), the Champions League, and the Super
Eagles at AFCON and World Cup qualifiers. Viewing happens in two places:
the **family parlour** around the TV, and the **viewing centre**, a
paid room with benches, a TV or projector and a generator, where groups
of roughly 30–150 mostly male fans watch European football [HIGH for the
viewing-centre culture — Global Media Journal; headcount MEDIUM, same
source]. The signature viewing foods are **suya**, **small chops**,
roasted groundnuts and chin chin (`nigeria.md:734`).

#### Watch party: Premier League afternoon in the parlour (football)
- When: the EPL season, August to May; Saturday 15:00 UK games land at
  about 15:00–16:00 WAT (**golden-hour** light through the window); late
  Saturday and Sunday games and Champions League nights at about
  20:00–21:00 WAT (**evening**: lamp and screen glow, dark window) [LOW —
  time-zone arithmetic, not verified].
- Gathering: family, or 3–6 friends or brothers and cousins [LOW-MEDIUM —
  editorial estimate]. Venue: home indoor (the parlour).
- The spread: a **small chops** tray of puff-puff, samosas, spring rolls
  and peppered gizzard on toothpicks (see catalog: Small chops platter
  (party starter); Puff-puff); **suya** on plain paper with sliced onion
  and tomato (see catalog: Suya); a bowl of chin chin (see catalog: Chin
  chin); roasted groundnuts in a small bowl (no entry; see CANDIDATE
  QUEUE). [MEDIUM — `nigeria.md:734`; research notes]
- Surface and environment: the **centre table** in front of a large sofa
  set; ceramic floor tiles, a ceiling fan, lace curtains, a rechargeable
  lamp on a side table; the TV a soft green field. A generator's presence
  is a cable along the floor at most, never fuel cans (GENERAL NORMS).
- Snapshot staging: **1 setting** — one side plate of small chops and
  a glass on the centre table, the suya paper open beside it, the TV glow
  behind. **2 settings** — two side plates; between them the small chops
  tray and the suya. **Small group** — the centre table with the tray,
  the suya, the chin chin bowl and four side plates; the sofa running out
  of frame, two blurred heads toward the screen. If the brief allows a
  multi-serve bottle, a 1 L PET stands on the centre table
  (`nigeria.md:734`).
- Never stage: club crests, shirts with sponsors, legible screens or
  score bugs; sports-betting slips, betting apps, odds or a betting-shop
  backdrop (betting sits very close to football in Nigeria [LOW — not
  verified]); beer, stout or Chapman; suya on newspaper.
- Confidence and sources: as tagged; staging EDITORIAL.

#### Watch party: the viewing centre (European football nights)
- When: weekend afternoons and Champions League evenings, the big games
  drawing the fullest rooms. Intake time: **golden-hour** or **evening**
  (a night scene for a 20:00–21:00 WAT kick-off) [LOW — arithmetic].
- Gathering: 30–150 fans, mostly young men, often split by club
  allegiance [MEDIUM — Global Media Journal]. Venue: other (a viewing
  centre: a hall, shop front or shed with benches, a TV or projector, a
  generator outside).
- The spread: what is sold at or just outside the door: **suya** on
  paper from a mai suya nearby (see catalog: Suya), roasted groundnuts,
  a meat pie or puff-puff (see catalog: Meat pie; Puff-puff) [LOW —
  editorial; the notes stage "roasted groundnuts and suya on a ledge"].
- Surface and environment: wooden benches in rows, a plank ledge or a
  bench end used as a table; a projector beam or a TV high on a bracket
  as a soft glow; a bare bulb or fluorescent tube; a cable on the floor
  for the generator. **Stage the food, not the crowded room**
  [EDITORIAL — notes].
- Snapshot staging: **1 setting** — a suya paper and the hero on a plank
  ledge at the end of a bench, the screen glow and the backs of blurred
  heads behind. **2 settings** — two suya portions on the ledge side by
  side. **Small group** — a short bench end with suya, a groundnut cone
  and a meat pie for three or four, more benches running back toward the
  screen. Keep the crowd as silhouettes (background-people limit).
- Never stage: crests and jerseys, legible posters of fixtures or
  prices, betting-shop branding or slips (often next door [LOW — not
  verified]), alcohol of any kind, fights or crowd conflict (the source
  studies conflict between rival fans; never the subject).
- Confidence and sources: venue HIGH; food LOW; staging EDITORIAL.

#### Watch party: Super Eagles night at home (AFCON and qualifiers)
- When: AFCON (the Morocco edition ran December 2025 to January 2026
  [LOW — not verified]) and World Cup qualifiers; evening kick-offs.
  Intake time: **evening** [LOW — not verified].
- Gathering: family and neighbours, 5–15, larger than an EPL afternoon
  [LOW-MEDIUM — editorial]. Venue: home indoor (parlour and dining
  table), or home outdoor (a compound forecourt with the TV carried out).
- The spread: a real meal rather than snacks: **party jollof** with
  peppered chicken and dodo (see catalog: Party jollof rice; Dodo (fried
  ripe plantain)); small chops first (see catalog: Small chops platter).
  Peppered chicken has no entry (see CANDIDATE QUEUE). [LOW — research
  notes rank this scene; food not verified]
- Surface and environment: the dining table plus the centre table, a
  pot of jollof on a trivet, plates handed round; green-and-white paper
  napkins or a plain green-and-white cushion as the most national colour
  a scene carries.
- Snapshot staging: **1 setting** — a plate of jollof, a chicken piece
  and dodo on the centre table, the jollof pot cropped at the edge.
  **2 settings** — two identical plates; between them the chicken platter.
  **Small group** — four plates around the centre table with the jollof
  pot, the chicken platter and the small chops tray; blurred figures
  standing behind the sofa toward the TV glow.
- Never stage: a full Nigerian flag (file rule: flags only for an
  explicit Independence Day brief, and never full, schema §5.7); the
  Super Eagles crest or kit; political or protest imagery; betting;
  alcohol.
- Confidence and sources: LOW for timing and food; staging EDITORIAL.

### Social game nights

Popularity as an occasion to gather and eat around: **medium**. The basis:
"every Nigerian household seems to own at least one Ludo board", and
**Whot**, a shedding card game, is the national card game; **draughts**
is also played [MEDIUM — Guardian Nigeria; Wikipedia "Whot!"]. FIFA
video-game centres for young men are reported but not verified [LOW — not
verified]; a home FIFA night is stageable only as the parlour entry
above with a controller on the table and an abstract screen glow.
Draughts at an outdoor "relaxation spot" is ranked third in the notes,
but such spots usually sell beer; it gets no entry here.

#### Game night: ludo in the parlour
- When: evenings and weekend afternoons, at family gatherings and
  holidays. Intake time: **evening** (or golden-hour) [LOW — editorial].
- Gathering: 2–4 players, family or friends, with onlookers [LOW-MEDIUM
  — editorial]. Venue: home indoor (parlour centre table or dining table).
- The spread: puff-puff, chin chin and a small chops platter on a side
  of the table so the board stays clear (see catalog: Puff-puff; Chin
  chin; Small chops platter). [LOW — notes; pairing editorial]
- Surface and environment: a plain wooden or painted ludo cross board in
  the four primary colours, generic counters and two dice; the centre
  table, a lace or plastic cloth, ceiling fan, lamp light in the evening.
- Snapshot staging: **1 setting** — the board at one side of the table,
  one side plate of puff-puff and a glass beside it. **2 settings** — two
  players' plates at opposite sides of the board. **Small group** — four
  side plates, one per colour, the chin chin bowl and the small chops
  tray at the table end; a blurred onlooker on the sofa arm.
- Never stage: a branded or licensed board, the Ludo King app on a
  legible phone, money on the board; children's faces (a family game:
  children may be implied only, schema §5.7).
- Confidence and sources: ludo's ubiquity MEDIUM; staging EDITORIAL.

#### Game night: Whot at a family gathering
- When: at Christmas, Sallah and owambe-adjacent family days, after the
  meal; evenings at home. Intake time: **golden-hour or evening** [LOW —
  editorial].
- Gathering: 3–6 players from the extended family, onlookers around
  [LOW — editorial]. Venue: home indoor (parlour) or home outdoor
  (compound forecourt under a canopy after a party).
- The spread: party leftovers in their trays: **jollof and chicken**
  (see catalog: Party jollof rice), dodo and moi moi (see catalog: Dodo;
  Moi moi (steamed bean pudding)), small chops boxes (see catalog: Small
  chops platter). [LOW — notes; not verified]
- Surface and environment: a plastic party table or the centre table, a
  draw pile and a discard pile; aso ebi fabric on blurred figures for a
  party evening; canopy edge and covered chairs soft behind.
- Snapshot staging: **1 setting** — a plate of jollof and chicken at the
  table edge, cards fanned face-down beside it. **2 settings** — two
  plates and two fanned hands of cards, the discard pile between.
  **Small group** — four plates around the table, the jollof tray
  cropped, the card piles at the centre; more chairs and blurred guests
  behind.
- Never stage: card faces that read (Whot cards carry numbers and
  shapes; keep them face-down or blurred), the printed brand deck, money
  or stakes, alcohol, money spraying.
- Confidence and sources: Whot as the national card game MEDIUM; the
  gathering pairing LOW; staging EDITORIAL.

---

## OPTIONAL MODULE — MORNING OCCASIONS (off by default)

Use only when a brief explicitly asks for a morning scene; log the scope
exception in `DECISIONS.md`.
- **Akara and pap (ogi/akamu)**: bean fritters beside a bowl of smooth,
  pourable fermented corn pap (pale cream/beige, or pinkish-brown from
  sorghum); or **akara and agege bread**. [MEDIUM — akara with bread HIGH
  (Naija Food Tour); pap pairing not independently re-checked] See the
  akara entry.
- **Bread and tea** (sliced agege bread, margarine, tea with evaporated
  milk), **yam and egg sauce**, **moi moi and pap**. [LOW-MEDIUM]
- **Kosai and koko** (North). [HIGH that kosai is eaten in the morning —
  Guardian Nigeria's Kano dishes]
- **Honesty note [EDITORIAL]**: a soft drink as a breakfast beverage is a
  brand proposition, not a documented norm.

---

## ZONE CALLOUTS (environment + dish pointers)

1. **Lagos & Southwest** — Humid megacity light; danfo yellow; lagoon;
   rust roofs in Ibadan. Party jollof, owambe, amala and abula, efo riro,
   ofada with ayamase, asun, ewa agoyin with agege bread, moi moi, akara,
   buka stew; pepper soup joints. Halal-compatible default (mixed faith).
   → catalog: Party jollof; Fried rice; Amala & abula; Efo riro; Ofada &
   ayamase; Ewa agoyin; Asun; Buka stew.
2. **Southeast** — Green hills, laterite roads, market cities. Akpu/fufu
   with ofe onugbu, oha, ogbono or egusi; nkwobi, isi ewu, abacha (African
   salad, compact — see GAP LOG); ugba; ofe owerri at celebrations.
   → catalog: Swallows; Ofe onugbu & oha; Ogbono; Egusi; Nkwobi & isi ewu.
3. **Niger Delta** — Creeks, rain, fish. Banga with starch, owho soup,
   fisherman soup, boli and fish (Port Harcourt), catfish pepper soup.
   → catalog: Banga & starch; Boli & fish; Pepper soup.
4. **Cross River & Akwa Ibom** — Green coast, Calabar's old town
   (genericize). Afang, edikang ikong, fisherman soup; Calabar Carnival.
   → catalog: Afang & edikang ikong; Swallows.
5. **Middle Belt & Abuja** — Savanna, rocks, planned avenues. Pounded yam
   with egusi (yam country), suya everywhere, a mix of northern and
   southern dishes; Kwara (Ilorin) is Yoruba and strongly Muslim.
   → catalog: Pounded yam & egusi; Suya; Pepper soup.
6. **North** — Sahel light, harmattan haze, walled compounds. Tuwo
   shinkafa with miyan kuka or miyan taushe; masa; kosai; kilishi; suya
   at its origin; fura da nono. **Halal, no pork, no alcohol — absolute.**
   **Spinout candidate** (see FILE ROLE & METHOD).
   → catalog: Tuwo & miyan kuka; Masa; Suya; Kilishi.

---

## DISH CATALOG

*Fields per `country-file-schema.md` §4.5: category · lineage · variants
(§4.6, with a default when unspecified) · format (§4.4) · serving vessel
& scale · texture & finish · staging · model failure / confusion ·
confidence · sources · Composition & proportions (§4.7). **Scale anchor
used in every prompt-ready line: the 33 cl sleek can, ~14.6 cm tall and
~5.7 cm across** (see SCALE REFERENCE; if the brief uses a 50 cl PET,
~20 cm tall and ~6.5 cm across, restate the comparisons). Counts and
surface shares are editorial synthesis from recipe quantities and serving
norms unless tagged otherwise — see GAP LOG.*

### A. National core & party food

#### Party jollof rice (national; the party-rice style)

- **Category**: Everyday and, above all, celebration — owambe, Christmas,
  Sunday lunch.
- **Lineage**: West African one-pot tomato rice; the Nigeria–Ghana "jollof
  war" is a real, affectionate rivalry [MEDIUM — not independently
  re-checked]; never mix in Ghanaian cues (jasmine/basmati, shito) for a
  Nigerian brief.
- **Variants (§4.6)**: **party jollof** — cooked in bulk over firewood,
  with a smoky "bottom-pot" flavour and a few darker grains [HIGH — Chef
  Immaculate Ruému, Carne Diem, Sisi Jemimah]; **home jollof** — same
  colour, less smoky, sometimes with mixed vegetables stirred in; **ofada
  or native jollof** (palm oil, locust beans — compact, see GAP LOG).
  **Default when unspecified**: party jollof on a party plate. [EDITORIAL]
- **Base**: long-grain **parboiled** rice cooked in a blended tomato, red
  bell pepper (tatashe), scotch bonnet and onion base fried with tomato
  paste, with stock, thyme, curry powder, bay leaves. [HIGH — Food52,
  Chef Lola's Kitchen, Sisi Jemimah, Kikifoodies]
- **Served with** (the party plate): fried or grilled chicken or turkey,
  or beef; dodo; a slab of moi moi; coleslaw or Nigerian salad; often
  fried rice alongside. [HIGH — African Food Network, Africanstores]
- **Vessel & scale**: served from a **cooler** onto a 24–28 cm plate or
  into a takeaway pack; the rice mound covers about half the plate.
- **Texture & finish**: see TEXTURE LEXICON — separate, firm, orange-red
  grains, a light oil gloss, a few browned smoky grains; bay leaf pieces
  occasionally visible; no liquid.
- **Model failure**: Spanish rice, paella, risotto, Mexican arroz rojo
  with peas and carrots, Indian biryani with visible whole spices, mushy
  tomato rice.
- **Confidence**: HIGH for ingredients and party context; shares EDITORIAL.
- **Sources**: [Sisi Jemimah — Party Jollof Rice](https://sisijemimah.com/2015/06/19/party-jollof-rice-nigerian/);
  [Chef Immaculate Ruému — smoky party jollof](https://immaculateruemu.com/smoky-party-style-jollof-rice-the-nigerian-way/);
  [African Food Network — owanbe food](https://afrifoodnetwork.com/articles/owanbe-food/).
- **Composition & proportions (§4.7)** — one party plate, 26 cm.
  - **What dominates**: **rice** — jollof ~40% of the plate's visible
    surface (with fried rice beside it, the two rices together ~55–60%);
    protein ~15–20%; dodo ~10%; moi moi ~8–10%; salad ~8–10%; plate rim
    visible ~15%. [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count (plate) | Look | Where it sits |
    |---|---|---|---|---|
    | Jollof rice | Long parboiled grains ~7–8 mm; mound ~12–14 cm across, ~4–5 cm high (about a third of the can's height) | 1 mound (~1.5 cups) | Orange-red, separate grains, light gloss, a few darker smoky grains | Back-left, the largest mass |
    | Fried rice (optional) | Same grain; mound ~10 cm | 0–1 | Pale yellow with diced vegetable flecks | Beside the jollof, touching it |
    | Chicken or turkey | Drumstick or thigh ~10–12 cm long (shorter than the can) | 1 piece | Deep golden-brown fried skin, or dark-red peppered sauce coating | Front-right, resting on the rice edge |
    | Dodo | Diagonal ovals ~5–7 × 3 cm, ~1 cm thick | 4–6 | Golden-orange, dark caramelised edges, oil gloss | Fanned at the front, overlapping |
    | Moi moi | Slab or leaf-shaped piece ~8 × 5 × 4 cm (about as tall as the can is wide) | 1 | Matte salmon-orange, fine smooth crumb, cut face shows a slice of boiled egg or flakes of fish sometimes | Right side, standing |
    | Coleslaw / salad | Heap ~7–8 cm | 1 small heap | Pale shredded cabbage and orange carrot in creamy dressing | Tucked at the rim |
    | Bay leaf piece | ~3–5 cm | 0–1 | Olive-brown, limp | On the rice |
  - **Arrangement**: components in separate adjacent heaps, touching but
    not layered; the protein placed on the rice edge, never buried.
  - **Vessel fill and depth**: plate ~85% covered, heaped but not
    towering; ~2 cm of rim shows.
  - **Served portion vs. whole dish**: the whole dish is a cooler; what
    appears on camera is always one plated portion. A cooler, if shown,
    is closed or half-open behind, rice surface flat and glossy.
  - **State cues**: faint steam; oil gloss on rice and dodo; chicken skin
    crisp, dry.
  - **Absent on purpose**: peas and carrots **in** jollof (that is fried
    rice), sauce pooling, cheese, herbs sprinkled on top, lime, visible
    whole spices, seafood.
  - **Prompt-ready line**: "A white plate heaped with long, separate,
    orange-red grains of smoky Nigerian party jollof rice with a light oil
    gloss, a mound about a third as tall as the can; beside it pale-yellow
    fried rice, one deep-golden fried chicken drumstick shorter than the
    can, five glossy caramelised plantain slices fanned at the front, a
    smooth salmon-orange slab of bean pudding, and a small heap of
    coleslaw. No peas in the jollof, no sauce pooling, no herbs."

#### Nigerian fried rice

- **Category**: Party and Sunday; almost always beside jollof at parties.
- **Lineage**: Nigerian adaptation of Chinese-style fried rice; distinctly
  Nigerian in its **curry-yellow** colour. [HIGH that it's a party staple
  paired with jollof — African Food Network; curry colour MEDIUM — Food52
  and recipe sources cite curry powder for Nigerian rice generally]
- **Variants**: with liver (diced beef liver), shrimp, or mixed. Default:
  mixed vegetables with diced liver. [EDITORIAL]
- **Base**: parboiled long-grain rice cooked in stock with curry powder
  and thyme, then stir-fried with diced carrots, green beans, sweet corn,
  green peas, spring onion, sometimes green bell pepper.
  [MEDIUM — not independently re-checked beyond curry powder]
- **Vessel & scale**: party plate or pack; mound ~10–12 cm.
- **Texture & finish**: dry, separate, pale yellow-gold grains with an oil
  sheen; bright confetti of vegetable dice ~5–8 mm.
- **Model failure**: soy-brown Chinese fried rice with egg; biryani;
  pilaf with raisins.
- **Composition & proportions (§4.7)** — as a side on the party plate or
  one full plate.
  - **What dominates**: **rice ~80%** of the heap's surface; vegetable
    dice ~15%; liver or shrimp ~5%. [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count (one mound) | Look | Where it sits |
    |---|---|---|---|---|
    | Rice | Grains ~7–8 mm | Mound ~10–12 cm, ~4 cm high | Pale curry yellow, separate | Base |
    | Carrot dice | ~5–7 mm cubes | ~25–40 | Orange | Evenly mixed through |
    | Green beans / peas | ~5–8 mm pieces | ~20–30 | Bright green | Mixed through |
    | Sweet corn | Kernels ~6 mm | ~15–25 | Yellow | Mixed through |
    | Liver dice / small shrimp | ~1 cm dice / 2–3 cm shrimp | ~5–10 / ~4–6 | Dark brown / pink-orange | Scattered, a few on top |
    | Spring onion | ~5 mm rings | a few | Green | Scattered |
  - **Arrangement**: vegetables evenly distributed — no clumps; rice
    visible between every piece.
  - **Vessel fill**: as a side, ~20–25% of a 26 cm plate.
  - **Served portion vs. whole dish**: served from a cooler; one mound.
  - **State cues**: dry, glossy, faint steam.
  - **Absent on purpose**: scrambled egg shreds, soy darkness, pineapple,
    raisins, cashews.
  - **Prompt-ready line**: "A mound of separate, pale curry-yellow long
    rice grains about a third as tall as the can, evenly flecked with small
    diced orange carrot, bright green beans and peas, yellow sweet-corn
    kernels, a few dark-brown cubes of liver and small pink shrimp, a light
    oil sheen. Not brown soy fried rice, no egg."

#### Dodo (fried ripe plantain)

- **Category**: Everyday side and snack; on every party plate.
- **Lineage**: West/Central African; ripe (yellow-black skinned) plantain.
- **Variants**: diagonal ovals (default), cubes (with rice or beans),
  rounds; **gizdodo** (with peppered gizzard, a party small-chop).
  [LOW-MEDIUM — not independently re-checked]
- **Vessel & scale**: side of a plate or a small bowl; ovals ~5–7 × 3 cm.
- **Texture & finish**: see TEXTURE LEXICON — deep golden-orange, darker
  caramelised edges and spots, glossy with oil, soft interior.
- **Model failure**: banana slices, potato chips, sweet-potato fries, pale
  unripe-plantain chips (those are a different snack — plantain chips).
- **Composition & proportions (§4.7)** — one side serving.
  - **What dominates**: plantain only; the look is about colour gradient
    (orange centre, near-black edge spots).
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Plantain ovals | ~5–7 cm long, ~3 cm wide, ~1 cm thick — each about the can's width | 5–8 per serving | Golden-orange, caramelised brown-black edges, oil gloss | Fanned, overlapping by a third |
  - **Arrangement**: fanned in a short arc or a loose pile at the plate's
    front.
  - **Vessel fill**: ~10% of a party plate; a snack bowl ~15 cm filled.
  - **State cues**: glistening oil, a few darker spots.
  - **Absent on purpose**: sugar, sauce, garnish.
  - **Prompt-ready line**: "Six diagonal slices of fried ripe plantain,
    each about as long as the can is wide, deep golden-orange with dark
    caramelised edges and a glossy oil sheen, fanned and overlapping at
    the front of the plate. Not banana, not chips."

#### Moi moi (steamed bean pudding)

- **Category**: Everyday, party, Sunday; a slab on the party plate.
- **Lineage**: Yoruba in origin, national today.
- **Base**: peeled black-eyed beans or brown beans blended with red bell
  pepper, scotch bonnet, onion and oil, steamed. Additions: boiled egg,
  flaked fish, corned beef, crayfish. [HIGH for base — Yummy Medley,
  Chef Lola's Kitchen, Wikipedia (via search)]
- **Variants (§4.6)**: **moi moi elewe** — steamed in **ewe eran/uma
  leaves**, a pointed-cone or pyramid parcel with leaf-veined faces
  (prestige, "authentic" register); **tin or foil-cup moi moi** — neat
  cylinders; plastic-bag moi moi. **Default**: leaf-wrapped for an
  owambe/traditional brief, tin for everyday. [HIGH that both leaf and
  tin are current — Yummy Medley, African Stores, 9jafoodie]
- **Texture & finish**: matte, smooth, fine-crumbed, salmon to
  orange-pink; firm but tender; leaf-steamed faces show faint vein
  imprints and a greener edge.
- **Model failure**: meatloaf, terrine, polenta cake, pink cake, quiche.
- **Composition & proportions (§4.7)** — one portion.
  - **What dominates**: the pudding itself (~90%); inclusions show only
    on the cut face.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Moi moi (tin) | Cylinder ~7–8 cm across, ~5 cm tall — a bit wider than the can, about a third as tall | 1 | Matte salmon-orange, smooth sides with faint tin ridges | Standing on the plate |
    | Moi moi (leaf) | Cone/pyramid parcel ~9–10 cm long, ~5 cm high | 1 | Unwrapped: leaf-veined faces, orange, a green-tinged skin | Leaf opened beneath it or removed |
    | Egg slice / fish flake | Egg quarter ~3 cm; flakes ~1 cm | 0–1 / 2–4 | White and yellow; pale grey-white | Visible only on the cut face |
  - **Arrangement**: one piece, whole or halved to show the cut face.
  - **Vessel fill**: ~10% of a party plate; alone on a small plate ~50%.
  - **State cues**: faint steam; slight moisture sheen on leaf-steamed
    faces; no oil pooling.
  - **Absent on purpose**: sauce, herbs on top, crispy crust.
  - **Prompt-ready line**: "One steamed Nigerian bean pudding, a smooth,
    matte, salmon-orange cylinder slightly wider than the can and about a
    third as tall, halved to show a fine, even crumb with a quarter of
    boiled egg inside; faint steam. No crust, no sauce, not a meatloaf."

#### White rice and stew (obe ata / buka stew)

- **Category**: The everyday lunch plate — home and buka.
- **Base**: plain boiled white rice with red **obe ata** (tomato, tatashe,
  scotch bonnet, onion, palm and/or vegetable oil) and fried beef or
  chicken; **buka stew** uses bleached palm oil, is oilier and more
  peppery, with **assorted** meat (beef, shaki, goat, cow leg) cut small.
  [HIGH — Wikipedia's obe ata (via search), 9jafoodie, All Nigerian Recipes]
- **Variants**: home stew (redder, tomato-forward) vs. buka stew (darker
  brick-red, oil layer). Default: buka stew at a buka; home stew at home.
- **Vessel & scale**: 26 cm plate; rice mound ~14 cm.
- **Texture & finish**: rice snowy and slightly sticky; stew a loose,
  chunky red sauce with a **clear orange-red oil layer** at the edges;
  meat pieces fried, browned, glossy.
- **Model failure**: marinara/pasta sauce, curry, chilli con carne.
- **Composition & proportions (§4.7)** — one buka plate.
  - **What dominates**: **white rice ~55%**; stew ladled over one side
    ~25%; meat ~10–15%; rim ~10%. [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | White rice | Mound ~14 cm, ~4–5 cm high | 1 | Bright white, grains visible | Centre-back |
    | Stew | One ladle, pooled ~10 cm wide | 1 ladle | Brick-red, loose, flecked with pepper seeds, oil layer glowing orange at edges | Over the front half of the rice and onto the plate |
    | Beef pieces | ~4–5 cm chunks (smaller than the can's width) | 2–3 | Fried dark brown, glossy | Sitting in the stew |
    | Shaki / ponmo (buka) | Strips ~4–6 cm | 1–3 | Pale ridged tripe; translucent beige cow skin | In the stew |
    | Boiled egg (optional) | Whole ~5 cm | 0–1 | Stained orange by stew | In the stew |
  - **Arrangement**: stew half-covers the rice; meat clustered in the stew.
  - **Vessel fill**: ~80%; rim visible.
  - **State cues**: oil glisten, steam from the rice.
  - **Absent on purpose**: herbs, cheese, pasta, vegetables in the stew.
  - **Prompt-ready line**: "A white enamel plate with a snowy mound of
    boiled white rice about a third as tall as the can, a ladle of loose
    brick-red pepper stew over its front half with a clear orange-red oil
    layer at the edges, three dark-fried chunks of beef each smaller than
    the can's width and a strip of pale ridged tripe in the stew."

#### Beans and dodo (ewa riro / beans porridge)

- **Category**: Everyday lunch and dinner; buka staple.
- **Base**: brown or black-eyed beans cooked soft in a palm-oil pepper
  sauce with onion and crayfish. [MEDIUM — not independently re-checked;
  uncontested]
- **Variants**: beans porridge (thicker, redder); **ewa agoyin** (mashed,
  pale, with a dark pepper sauce — own entry). Default: beans porridge.
- **Vessel & scale**: 24–26 cm plate or bowl.
- **Texture & finish**: soft, partly broken beans in a thick, orange-brown
  sauce, palm oil gleaming; dodo golden on the side.
- **Model failure**: baked beans; chilli; refried beans.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: beans ~70%; dodo ~20%; rim ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Beans | Each ~1 cm; mound ~14 cm, ~4 cm high | 1 mound | Soft, partly mashed, orange-brown, oil gloss | Centre |
    | Dodo | Cubes ~2 cm or ovals ~6 cm | 8–12 cubes / 5–6 ovals | Golden-orange, caramelised | Beside or on top of one side |
    | Crayfish flecks | ~2–4 mm | many | Orange-pink specks | Through the sauce |
  - **Arrangement**: beans heaped, dodo at one side.
  - **Vessel fill**: ~80%.
  - **State cues**: thick, not soupy; oil gloss.
  - **Absent on purpose**: tomato-sauce sweetness look, sausage, rice.
  - **Prompt-ready line**: "A plate of soft Nigerian beans porridge,
    partly mashed brown beans in a thick orange-brown palm-oil sauce with
    tiny crayfish flecks, a mound about a third as tall as the can, with
    glossy golden cubes of fried plantain heaped at one side. Not baked
    beans, not chilli."

#### Nigerian salad and coleslaw (party sides)

- **Category**: Party and Christmas side.
- **Base**: **Nigerian salad** — lettuce, cabbage, tomato, cucumber,
  carrot, sweet corn and baked beans, topped with boiled egg slices,
  dressed with **salad cream** (sweeter, tangier than mayonnaise);
  sometimes sardines or macaroni. **Coleslaw** — shredded cabbage and
  carrot in creamy dressing. [HIGH — Sisi Jemimah, Foodaciously, My
  Active Kitchen, Chop Chop (Ozoz Sokoh)]
- **Composition & proportions (§4.7)** — one party-plate side.
  - **What dominates**: pale greens and white cabbage ~60%; orange carrot
    and red tomato ~20%; beans/corn ~10%; egg ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Shredded cabbage / lettuce | Shreds ~3–5 mm wide | heap ~8 cm | Pale green-white | Base |
    | Carrot | Grated / julienne | a scatter | Orange | Through the heap |
    | Tomato / cucumber | Slices ~3–4 cm | 2–3 each | Red; pale green with dark skin | Edges |
    | Baked beans / sweet corn | ~1 cm / 6 mm | a spoonful | Orange sauce-coated; yellow | On top |
    | Boiled egg | Slices ~4 cm | 2–3 | White ring, yellow centre | On top |
    | Salad cream | Drizzle | 1 | Pale cream-yellow, glossy | Drizzled over or mixed in |
  - **Arrangement**: compact heap at the plate rim.
  - **Vessel fill**: ~10% of a party plate.
  - **State cues**: fresh, cool, dressing glossy.
  - **Absent on purpose**: leafy mesclun, vinaigrette look, croutons.
  - **Prompt-ready line**: "A small heap of Nigerian party salad, about
    the can's width across: shredded pale cabbage and lettuce with grated
    carrot, two tomato and cucumber slices, a spoonful of baked beans and
    sweet corn, two slices of boiled egg, drizzled with glossy pale-yellow
    salad cream."

#### Pepper soup (goat, catfish "point and kill", assorted)

- **Category**: Evening, social, comfort; also for the unwell and new
  mothers [LOW-MEDIUM]; common at bars (alcohol risk — see ICONIC
  BEVERAGES).
- **Base**: a thin, light, very spicy broth with pepper-soup spice mix
  (calabash nutmeg, alligator pepper and others), scotch bonnet, and
  **uziza** or **utazi** leaves. **Catfish pepper soup** is called "point
  and kill" because the diner points at a live fish in the market or joint.
  [HIGH — Guardian Nigeria, All Nigerian Recipes, Nigerian Food TV,
  Wikipedia's goat-meat pepper soup (via search)]
- **Variants (§4.6)**: goat meat (default in the Southwest/Middle Belt),
  catfish (default at "point and kill" joints, zones 1 and 3), chicken,
  cow foot, assorted. [EDITORIAL default: goat meat]
- **Served with**: alone, or with boiled yam, boiled plantain, agidi/eko
  or white rice. [HIGH — All Nigerian Recipes]
- **Vessel & scale**: a deep bowl or small clay pot ~15–18 cm.
- **Texture & finish**: thin, cloudy golden-brown to reddish broth with
  specks of ground spice; meat on the bone; catfish in thick cross-cut
  steaks with dark grey-black skin; torn green leaves floating.
- **Model failure**: ramen, pho, tom yum (with lemongrass and lime),
  thick stew, curry.
- **Composition & proportions (§4.7)** — one bowl, catfish.
  - **What dominates**: **broth ~50% of what shows**; fish steaks ~35%;
    leaves ~10%; floating spice/pepper flecks ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Broth | Fills to ~1.5 cm below the rim | — | Thin, cloudy, reddish-golden, fine spice sediment, a few oil droplets | Base |
    | Catfish steaks | Cross-cut ~4–6 cm across, ~3 cm thick (about the can's width) | 2–3 | Grey-black glossy skin, white flesh, split in places | Half-submerged |
    | Uziza / utazi / scent leaf | Torn pieces ~2–4 cm | 5–8 | Dark green, wilted | Floating on top |
    | Scotch bonnet (optional) | Whole ~3 cm | 0–1 | Red-orange | Floating |
    | (Goat variant) goat pieces | Bone-in ~4–5 cm | 4–5 | Grey-brown, skin-on pieces | Heaped, half-submerged |
  - **Arrangement**: fish steaks mounded in the centre, leaves scattered.
  - **Vessel fill**: broth near the rim; fish breaking the surface.
  - **Served portion vs. whole dish**: pot to individual bowl; one bowl
    per person.
  - **State cues**: **strong steam**; small oil droplets; broth clear
    enough to see fish below the surface.
  - **Absent on purpose**: noodles, lime, coriander sprigs, coconut milk,
    thick sauce, **beer bottles** (bar prior).
  - **Prompt-ready line**: "A deep bowl of steaming Nigerian catfish
    pepper soup: thin, cloudy, reddish-golden broth full of fine spice
    specks and a few oil droplets, three thick cross-cut catfish steaks
    each about the can's width with glossy grey-black skin and white
    flesh, half-submerged, torn dark-green leaves floating. No noodles, no
    lime, no beer."

#### Yam porridge (asaro)

- **Category**: Everyday home lunch or dinner.
- **Base**: yam cubes simmered in a palm-oil pepper sauce, partly mashed,
  with crayfish, smoked fish, and often ugu or spinach. [MEDIUM — not
  independently re-checked; uncontested]
- **Composition & proportions (§4.7)** — one bowl/plate.
  - **What dominates**: yam ~80% (half chunks, half mashed into the sauce);
    greens ~10%; fish ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Yam chunks | ~3–4 cm cubes, edges softened | 10–15 visible | Pale yellow-orange, stained by palm oil, broken edges | Throughout |
    | Mashed yam sauce | — | — | Thick, orange, creamy-looking | Binding the chunks |
    | Smoked fish | Flakes/pieces ~3–5 cm | 2–4 | Dark brown-gold | On top |
    | Ugu / spinach | Ribbons ~2 cm | a scatter | Dark green | Stirred through, some on top |
  - **Arrangement**: a heaped, rough mound; greens and fish visible on top.
  - **Vessel fill**: ~75% of a 24 cm plate or a full bowl.
  - **State cues**: steam, oil gloss.
  - **Absent on purpose**: potato-stew look with carrots, cream.
  - **Prompt-ready line**: "A rough mound of Nigerian yam porridge:
    softened pale-yellow yam cubes each about half the can's width, partly
    mashed into a thick orange palm-oil sauce, with a few dark-gold pieces
    of smoked fish and ribbons of dark green leaves on top, steaming. Not
    potato stew."

### B. Swallows & soups (form-changing by region)

#### Swallows — the reference entry (eba, pounded yam, amala, fufu/akpu, semo, starch, tuwo)

- **Category**: Everyday lunch and dinner; the core of the home meal.
- **What a swallow is**: a soft, dough-like starch that is pinched,
  rolled, dented and used to scoop soup, then swallowed with little
  chewing. [HIGH — African Food Network, Radiant Health, Wikipedia (via
  search)]
- **Form-changing (§4.2/§4.3)** — each is visibly different:

  | Swallow | Made from | Colour & finish | Regional home | Confidence |
  |---|---|---|---|---|
  | **Eba (yellow)** | Garri processed with palm oil | Pale butter-yellow, faintly granular, matte | National; Southwest, South-South | HIGH — Wikipedia (via search), Nexxtmart, Chef Lola |
  | **Eba (white)** | Garri without palm oil | Off-white, faintly granular, slightly sour | National | HIGH |
  | **Pounded yam** | Boiled yam pounded (or poundo yam flour) | Bright white to ivory, very smooth, stretchy, satin | Southwest, Middle Belt (Benue), East for celebrations | HIGH |
  | **Amala** | Yam flour (elubo) | **Grey-brown to dark brown**, smooth, soft | Southwest (Ibadan/Oyo) | HIGH |
  | **Fufu / akpu** | Fermented cassava | Off-white to faintly grey, very smooth, dense, faint sour smell | Southeast, South-South | HIGH |
  | **Semo / semovita** | Semolina / wheat product | Cream-white, fine-textured, smooth | National, urban | HIGH — Afrifood Network, Radiant Health |
  | **Starch** | Cassava starch cooked with palm oil | **Glossy, translucent yellow-orange, jelly-like, very elastic** | Niger Delta (Urhobo/Isoko) with banga or owho | MEDIUM — named with banga (Ajoke Brown Media); colour LOW-MEDIUM |
  | **Tuwo shinkafa** | Soft rice, cooked down and mashed | White, soft, sticky, faintly grainy | North | HIGH — Wikipedia (via search), Guardian Nigeria |

- **Serving**: one smooth dome per person on a flat plate, often wrapped
  in cling film ("nylon") to keep it warm and shaped; soup in a separate
  bowl; meat and fish pieces in the soup; bowl of water for hand-washing.
- **Model failure**: mashed potato (for pounded yam and fufu), polenta
  (for eba), bread dough, rice balls, chocolate pudding (for amala), jelly
  or custard (for starch).
- **Composition & proportions (§4.7)** — one swallow portion (any type).
  - **What dominates**: the dome itself; on the plate it covers ~40–50% of
    a 24 cm plate, rim and empty plate around it.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Swallow dome | ~10–13 cm across, ~6–8 cm tall — roughly twice the can's width, about half its height [LOW-MEDIUM, EDITORIAL] | 1 (sometimes 2 smaller wraps) | Per table above; smooth, seamless surface with a soft sheen (pounded yam, fufu) or faint grain (eba) | Centre of its own plate |
    | Cling film (optional) | Wrapped tight, ends twisted underneath | 0–1 | Clear, faint crinkle highlights | Around the dome; or opened back |
    | Pinched morsel | ~3 cm ball with a thumb dent | 0–1 | Same colour as dome | Resting at the soup bowl's edge (never in a hand) |
  - **Arrangement**: swallow plate front, soup bowl behind-right, water
    bowl to one side.
  - **State cues**: faint steam; pounded yam and semo glossy; eba matte.
  - **Absent on purpose**: garnish on the swallow, sauce poured over it,
    cutlery stuck in it, butter.
  - **Prompt-ready line (pounded yam)**: "On its own white plate, one
    smooth, seamless dome of bright ivory pounded yam about twice the can's
    width and half its height, with a soft satin sheen and faint steam; one
    small pinched-off ball with a thumb dent rests at the edge of the soup
    bowl behind it. Not mashed potato, no garnish, no sauce on the dome."

#### Pounded yam and egusi soup

- **Category**: Everyday and celebratory; arguably the most recognisable
  swallow meal nationally. [HIGH — Wikipedia's pounded yam (via search),
  Immaculate Bites, Travel & Munchies]
- **Egusi**: ground **melon seeds** cooked in palm oil with pepper,
  crayfish, stock, assorted meat and fish, and leafy greens (ugu, bitter
  leaf or spinach). The seeds **curdle into clusters** — two styles:
  **lumpy/clumped** (fried first) and **smooth/pasty** (mixed as a paste).
  [HIGH for base — My Active Kitchen, All Nigerian Foods, K's Cuisine;
  MEDIUM for the two-style distinction, not independently re-checked]
- **Variants**: default pounded yam; eba, fufu or semo equally common.
- **Vessel & scale**: soup bowl 15–18 cm; swallow per the reference entry.
- **Texture & finish**: see TEXTURE LEXICON.
- **Model failure**: scrambled eggs in curry; cottage cheese; saag paneer.
- **Composition & proportions (§4.7)** — one bowl of egusi.
  - **What dominates**: **egusi clusters ~50%** of the bowl's surface;
    greens ~20%; meat and fish ~20%; visible palm-oil pools ~10%.
  - **Component table**:

    | Component | Real size | Count (bowl) | Look | Where it sits |
    |---|---|---|---|---|
    | Egusi clusters | Curds ~0.5–2 cm | many | Pale cream-yellow tinged orange, curdled, grainy | The body of the soup |
    | Leafy greens (ugu/bitter leaf) | Ribbons ~1–3 cm | a generous scatter | Dark green | Stirred through, some on top |
    | Beef / goat | ~3–4 cm chunks (smaller than the can's width) | 3–4 | Browned, glossy | Half-sunk |
    | Shaki / ponmo | Strips ~4 cm | 1–2 | Pale ridged tripe; beige translucent skin | Half-sunk |
    | Stockfish / smoked fish | ~4–6 cm pieces | 1–2 | Grey-white dry flakes / dark gold | Half-sunk |
    | Palm oil | Pools ~1–2 cm | several | Clear orange-red | Edges and between curds |
  - **Arrangement**: meat evenly spread; greens through the curds.
  - **Vessel fill**: to ~1–2 cm below the rim.
  - **Served portion vs. whole dish**: one bowl per person or a shared
    bowl for two.
  - **State cues**: steam, oil glistening, curds moist not dry.
  - **Absent on purpose**: cream, coriander, tomato chunks, rice.
  - **Prompt-ready line**: "A bowl of Nigerian egusi soup beside a smooth
    ivory dome of pounded yam: thick, curdled pale cream-yellow clusters of
    ground melon seed tinged orange by palm oil, with ribbons of dark green
    bitter leaf, three browned chunks of beef each smaller than the can's
    width, a strip of pale tripe and a piece of smoked fish, clear orange
    oil pooling at the edges, steaming."

#### Efo riro (Yoruba vegetable soup)

- **Category**: Everyday, Southwest (zone 1); eaten with amala, pounded
  yam, eba or rice.
- **Base**: chopped spinach (efo tete/shoko) or ugu in a red **pepper and
  palm-oil** base with **iru** (fermented locust beans), assorted meat,
  smoked fish, crayfish. [MEDIUM — not independently re-checked this pass;
  uncontested Yoruba classic]
- **Model failure**: creamed spinach, saag, callaloo.
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: **greens ~55%**; red pepper-oil sauce ~20%; meat
    and fish ~20%; iru specks ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Spinach / ugu | Chopped ~1–3 cm | mass | Dark green, wilted but distinct | Body |
    | Pepper-palm-oil base | — | — | Red-orange, oily, coats the leaves | Throughout, pooling |
    | Assorted meat | ~3–4 cm | 3–5 pieces | Browned, ridged tripe, cow skin | Half-sunk |
    | Smoked fish | ~4 cm | 1–2 | Dark gold | On top |
    | Iru | Seeds ~5 mm | a scatter | Dark brown | Through the sauce |
  - **Arrangement**: greens heaped, meats spread.
  - **Vessel fill**: near the rim; thick, not soupy.
  - **State cues**: oil gleam, steam.
  - **Absent on purpose**: cream, blended smoothness.
  - **Prompt-ready line**: "A bowl of Yoruba efo riro: chopped dark-green
    spinach thickly coated in a red-orange pepper and palm-oil sauce, with
    a few chunks of browned beef and ridged tripe each smaller than the
    can's width, a piece of dark-gold smoked fish and tiny dark locust-bean
    specks; oil gleaming at the edges. Not creamed spinach."

#### Amala with abula (ewedu, gbegiri and buka stew)

- **Category**: Everyday; **Ibadan and Oyo's signature**, the classic buka
  meal. [HIGH — Tribune, Wikipedia's Abula and Gbegiri (via search),
  My Active Kitchen]
- **What abula is**: amala served with **ewedu** (jute-leaf soup),
  **gbegiri** (bean soup) and **obe ata/buka stew** together. [HIGH]
- **Vessel & scale**: at a buka, all three soups ladled **onto the same
  plate or bowl** around/over the amala; at home, in separate bowls.
  [MEDIUM — buka practice consistent in sources and video; not measured]
- **Texture & finish**: amala grey-brown and smooth; **ewedu** deep green,
  finely blended, slimy-drawy; **gbegiri** smooth, pale yellow-orange bean
  purée; stew red with an oil layer.
- **Model failure**: brown bread dough; chocolate mousse; pea soup.
- **Composition & proportions (§4.7)** — one buka plate.
  - **What dominates**: amala ~35%; the three soups together ~45% (ewedu
    ~15%, gbegiri ~15%, stew ~15%); meat ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Amala | Dome ~10–12 cm, ~6 cm high (about twice the can's width) | 1 (or 2 small) | Grey-brown, smooth, soft sheen | Centre-left |
    | Ewedu | Ladle, spread ~8 cm | 1 | Deep green, fine, glossy, drawy | Beside the amala, touching |
    | Gbegiri | Ladle, spread ~8 cm | 1 | Smooth pale yellow-orange purée | Beside the ewedu, colours meeting |
    | Buka stew | Ladle | 1 | Brick-red, oil layer | Over the other soups |
    | Assorted meat | ~3–5 cm pieces | 3–5 (beef, shaki, ponmo) | Browned; ridged; translucent | In the stew |
  - **Arrangement**: the three soups in **adjacent colour zones**
    (green, yellow, red) with the stew poured across, around the amala.
  - **Vessel fill**: ~80–90% of a 24 cm plate.
  - **State cues**: steam, glossy ewedu, oil sheen on the stew.
  - **Absent on purpose**: rice, vegetables on top, garnish.
  - **Prompt-ready line**: "A buka plate of amala and abula: a smooth grey-
    brown dome of yam-flour swallow about twice the can's width, with
    ladles of glossy deep-green blended jute-leaf soup and smooth pale
    yellow-orange bean soup beside it in adjacent colour zones, brick-red
    oily pepper stew poured across both, and a few pieces of browned beef
    and ridged tripe in the stew."

#### Ogbono soup

- **Category**: Everyday; national, strongly Southeast/South-South.
- **Base**: ground **ogbono (wild mango) seeds**, palm oil, stock, crayfish,
  assorted meat, fish; often ugu or bitter leaf; distinctly **drawy**
  (mucilaginous). [HIGH for drawy ogbono — Ajoke Brown Media, Google Arts
  & Culture (Pan-Atlantic University); composition MEDIUM]
- **Model failure**: gravy; okra gumbo; mushroom sauce.
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: glossy drawy base ~60%; meat/fish ~25%; greens
    ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Ogbono base | — | — | Dark olive-brown to khaki, very glossy, stretchy strands | Body |
    | Assorted meat | ~3–4 cm | 3–5 | Browned, tripe, cow skin | Half-sunk |
    | Dried fish / stockfish | ~4–6 cm | 1–2 | Dark, dry-looking | On top |
    | Ugu / bitter leaf | Ribbons ~1–2 cm | a scatter | Dark green | On the surface |
  - **Arrangement**: meat half-sunk; a spoon lifted to show strands is
    the tell — but a spoon in a hand is not allowed: show a strand
    stretched from the spoon resting on the bowl rim. [EDITORIAL]
  - **Vessel fill**: near the rim.
  - **State cues**: very glossy, thick, steaming.
  - **Absent on purpose**: okra rounds (that is okra soup), cream.
  - **Prompt-ready line**: "A bowl of Nigerian ogbono soup, very glossy
    dark olive-brown and thick, with long stretchy strands trailing from a
    spoon resting on the rim; a few chunks of browned beef and a piece of
    dried fish half-sunk, ribbons of dark green leaves on the surface.
    Not gravy, no okra rounds."

#### Ofe onugbu and oha (Igbo leaf soups)

- **Category**: Everyday and festive; Southeast (zone 2); eaten with akpu,
  pounded yam or eba.
- **Base**: **ofe onugbu** — washed **bitter leaf** in a palm-oil soup
  thickened with cocoyam paste; **oha** — oha leaves with cocoyam, palm
  oil, ogiri; both with assorted meat and stockfish. [HIGH that ofe onugbu
  is a signature bitter-leaf soup — Ajoke Brown Media; cocoyam thickener
  and oha details MEDIUM — not independently re-checked]
- **Model failure**: spinach soup; curry.
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: orange-yellow palm-oil broth ~45%; leaves ~25%;
    meat and fish ~25%; cocoyam lumps ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Soup base | — | — | Thick, orange-yellow, opaque, palm-oil gleam | Body |
    | Bitter leaf / oha leaves | Small whole or torn leaves ~2–4 cm | a generous scatter | Dark green (bitter leaf), small rounded brighter leaves (oha) | Surface and through |
    | Cocoyam lumps | ~1 cm | a few | Pale beige | Partly dissolved |
    | Stockfish / assorted meat | ~4–5 cm | 3–5 | Grey-white; browned | Half-sunk |
  - **Arrangement**: leaves over the surface, meats breaking through.
  - **Vessel fill**: near the rim.
  - **State cues**: oil gleam, steam.
  - **Absent on purpose**: tomato, cream.
  - **Prompt-ready line**: "A bowl of Igbo bitter-leaf soup, a thick
    opaque orange-yellow palm-oil broth scattered with small dark-green
    leaves, a few pale cocoyam lumps, and several pieces of stockfish and
    browned beef smaller than the can's width breaking the surface, beside
    a smooth off-white dome of fermented cassava fufu."

#### Afang and edikang ikong (Efik-Ibibio; zone 4)

- **Category**: Special and everyday in Cross River and Akwa Ibom;
  prestige soups nationally.
- **Base**: **afang** — sliced **okazi/afang** leaves (tough, finely
  shredded) with **waterleaf**, palm oil, crayfish, periwinkles, beef,
  shaki, fish. **Edikang ikong** — **ugu** (fluted pumpkin) leaves with
  waterleaf, similar proteins. [HIGH — Wikipedia's Afang and Edikang ikong
  (via search), All Nigerian Recipes, 9jafoodie, My Diaspora Kitchen]
- **Variants**: afang (finer, darker, drier-looking shreds) vs. edikang
  ikong (softer, brighter green). Default: afang. [EDITORIAL]
- **Served with**: fufu, pounded yam, eba.
- **Model failure**: spinach curry, collard greens, pesto.
- **Composition & proportions (§4.7)** — one bowl of afang.
  - **What dominates**: **greens ~65%** — the soup is mostly leaf; meat,
    fish and periwinkle ~25%; oil pools ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Afang (okazi) shreds | Very fine, ~1–3 mm × 2–4 cm | mass | Dark, deep green, slightly matte | Body |
    | Waterleaf | Chopped ~1–2 cm | mass | Softer, brighter green | Mixed through |
    | Periwinkles | Shells ~1.5–2 cm | 10–20 | Small dark spiral shells | Scattered on top and through |
    | Beef / shaki | ~3–4 cm | 3–4 | Browned; ridged pale tripe | Half-sunk |
    | Dried fish | ~4 cm | 1 | Dark | On top |
    | Palm oil | Pools | several | Orange-red | Edges |
  - **Arrangement**: dense green body, periwinkles as dark dots.
  - **Vessel fill**: heaped to the rim, thick.
  - **State cues**: glossy, dense, steaming.
  - **Absent on purpose**: cream, blending, tomatoes.
  - **Prompt-ready line**: "A bowl of Efik afang soup, a dense heap of very
    finely shredded dark-green leaves mixed with softer bright-green
    waterleaf, glossy with orange palm oil, dotted with small dark spiral
    periwinkle shells, with a few browned beef pieces and ridged tripe
    each smaller than the can's width. Mostly leaves. Not creamed spinach."

#### Banga soup with starch (Niger Delta; zone 3)

- **Category**: Everyday and festive; Urhobo/Isoko and Delta State.
- **Base**: **palm-nut concentrate** (the fruit pulp, not refined oil),
  with fresh fish or seafood, banga spices, beletete or other leaves;
  eaten with **starch** (glossy cassava swallow). [HIGH for banga + starch
  pairing — Ajoke Brown Media; composition MEDIUM]
- **Model failure**: tomato soup, curry, pumpkin soup.
- **Composition & proportions (§4.7)** — one bowl with starch.
  - **What dominates**: rich orange-brown palm-nut body ~60%; fish ~30%;
    leaves ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Banga base | — | — | Thick, opaque, deep orange-brown, velvety, oil at the edges | Body |
    | Fresh fish | Steaks/pieces ~5–7 cm | 2–3 | White flesh, grey skin | Half-sunk |
    | Leaves (beletete/scent leaf) | Torn ~2 cm | a scatter | Dark green | Surface |
    | Starch | Dome ~10 cm | 1 | Glossy, translucent yellow-orange, jelly-like | On its own plate |
  - **Arrangement**: fish in the centre of the bowl, starch plate beside.
  - **Vessel fill**: near the rim; often in a clay pot. [LOW-MEDIUM]
  - **State cues**: velvety sheen, steam.
  - **Absent on purpose**: cream, tomato chunks, rice.
  - **Prompt-ready line**: "A clay bowl of Delta banga soup, thick,
    velvety, deep orange-brown palm-nut sauce with a sheen of oil at the
    edges, two white-fleshed fish pieces about the can's width half-sunk
    and torn dark-green leaves on top; beside it a glossy, translucent
    yellow-orange dome of cassava starch."

#### Tuwo shinkafa with miyan kuka (North; zone 6)

- **Category**: Everyday dinner and lunch in the Hausa North.
- **Base**: **tuwo shinkafa** — soft rice cooked down and mashed into a
  smooth-ish white swallow; **miyan kuka** — soup of dried, powdered
  **baobab leaf**, dark green, with a distinct sour edge, drawy, with
  dried fish or meat and daddawa (locust bean). Also **miyan taushe**
  (pumpkin and groundnut). [HIGH — Wikipedia's Tuwon shinkafa and Miyar
  kuka (via search), Guardian Nigeria's Kano dishes, NICO]
- **Serving**: often shaped as **several smooth balls** or a mound in an
  enamel bowl or plate, soup in a separate bowl. [LOW-MEDIUM — not
  independently re-checked]
- **Staging**: halal; no alcohol; courtyard or parlour; a mat or low
  table.
- **Model failure**: mochi, rice pudding, sushi rice; spinach soup.
- **Composition & proportions (§4.7)** — one serving.
  - **What dominates**: white tuwo ~50% of the frame's food; dark-green
    kuka ~40%; meat ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Tuwo shinkafa | Balls ~7–8 cm (slightly wider than the can) or one dome ~12 cm | 2–3 balls | White, soft, faintly grainy, matte-satin | On an enamel plate |
    | Miyan kuka | Bowl ~15 cm, filled near rim | 1 | Dark khaki-green, smooth, drawy, faint oil sheen | Separate bowl |
    | Dried fish / meat | ~3–4 cm | 2–3 | Dark brown | In the soup |
  - **Arrangement**: balls in a small cluster, soup bowl beside.
  - **Vessel fill**: tuwo plate ~50%; soup bowl near full.
  - **State cues**: steam; soup glossy.
  - **Absent on purpose**: pork, alcohol, garnish, cutlery in the tuwo.
  - **Prompt-ready line**: "On an enamel plate, three smooth, soft, white
    balls of mashed rice swallow, each slightly wider than the can, beside
    a bowl of dark khaki-green baobab-leaf soup with a faint oil sheen and
    a few pieces of dried fish; a small bowl of water for washing hands.
    Not mochi, no garnish."

### C. Regional signatures & street food

#### Suya (Hausa origin; national evening street food)

- **Category**: Evening street snack; also at parties and Sallah.
- **Lineage**: **Hausa** smoke-grilled spiced meat, sold by the **mai
  suya**; now national. [HIGH — Wikipedia (via search), 196 Flavors, Suya
  Standard]
- **Base**: **thin-sliced** beef (also ram, goat, chicken, offal), rubbed
  with **yaji** — ground chilli, cayenne, ginger, dried onion, salt and
  **kuli-kuli** (ground peanut cake) — threaded on wooden skewers and
  grilled over charcoal. [HIGH — Wikipedia's Yaji (via search), Elle
  Gourmet, Chef Lola's Kitchen]
- **Serving**: slid off the skewer, cut into bite pieces, topped with
  **sliced raw onion, tomato, sometimes cabbage**, extra yaji, and
  wrapped in paper — **traditionally newspaper**. [HIGH — 196 Flavors,
  Skabash] **Stage on plain, unprinted brown or white paper** (rule 1).
- **Variants**: on-skewer (at the grill) vs. off-skewer on paper
  (served). Default: served on paper. [EDITORIAL]
- **Model failure**: kebab, satay with peanut sauce, glazed BBQ, shawarma.
- **Composition & proportions (§4.7)** — one served portion on paper.
  - **What dominates**: **meat ~60%**; raw onion ~20%; tomato ~10%;
    loose yaji dust ~5%; cabbage ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Suya meat | Pieces ~3–5 cm cut from strips ~6–8 cm long, 2–4 mm thin | ~20–30 pieces | Dark reddish-brown, dry, matte spice crust, charred tips, some fat edges | Heaped in the centre of the paper |
    | Yaji | Powder | heavy dusting + a small pile | Rust-orange to brown, coarse | Over the meat, a small mound at the side |
    | Raw onion | Thin rings/slivers | ~10–15 pieces | Translucent white / pale purple | Scattered over and around |
    | Tomato | Thin slices ~4–5 cm | 3–5 | Bright red | Tucked at the edge |
    | Cabbage (optional) | Shreds | a small heap | Pale green | At the edge |
    | Paper | ~30 × 30 cm sheet opened flat | 1 | Plain brown or white, creased, a few oil spots | Under everything |
  - **Arrangement**: meat heaped, onions scattered over, tomatoes at the
    edge; the paper opened out with creases.
  - **Vessel fill**: food covers ~60% of the sheet.
  - **Served portion vs. whole dish**: at the grill, skewers are ~25–30 cm
    long with meat bunched along ~15–20 cm [LOW-MEDIUM]; served portion is
    always off-skewer.
  - **State cues**: dry, spice-dusted, faint smoke; **no sauce, no gloss**.
  - **Absent on purpose**: newspaper print, sauce, lime, herbs, pita,
    fries, skewers left in the served portion.
  - **Prompt-ready line**: "On a sheet of plain unprinted brown paper
    opened flat on a ledge at night: a heap of thin, dark reddish-brown
    grilled beef pieces with a dry, matte crust of rust-orange peanut-chilli
    spice powder and charred tips, each piece shorter than the can's width,
    scattered with raw onion slivers, three thin tomato slices at the edge
    and a small mound of loose spice. No sauce, no printed paper."

#### Kilishi (North; dried spiced meat)

- **Category**: Snack, travel food, Sallah gifting.
- **Base**: very thin sheets of beef, sun-dried, coated in a spiced
  **peanut paste** and dried again. Chewy, spicy-sweet. [HIGH — Guardian
  Nigeria, Mysasun, Rexclarke]
- **Model failure**: jerky strips, beef bacon, fruit leather.
- **Composition & proportions (§4.7)** — one snack portion.
  - **What dominates**: kilishi sheets only.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Kilishi sheet | Irregular pieces ~8–15 cm × 5–8 cm, paper-thin (~1–2 mm) — longer than the can is wide | 4–6 | Dark red-brown, dry, matte, coarse speckled peanut-spice coating, slightly translucent at thin edges, brittle-crinkled | Overlapping on paper or a small plate |
  - **Arrangement**: loosely overlapping, some broken.
  - **State cues**: dry, no gloss.
  - **Absent on purpose**: sauce, onion, glaze.
  - **Prompt-ready line**: "Five irregular paper-thin sheets of northern
    Nigerian dried spiced beef, each longer than the can is wide, dark
    red-brown and matte with a coarse speckled peanut-chilli crust,
    slightly translucent at the thin edges, overlapping on plain paper.
    Not jerky strips, no glaze."

#### Masa / waina (North; fermented rice cakes)

- **Category**: Snack, breakfast, Ramadan iftar; Kano and the North.
- **Base**: fermented rice batter cooked in a **multi-well clay or cast
  pan** (like a small-cup griddle), giving round, domed, spongy cakes,
  eaten with yaji, pepper sauce or miyan taushe. [HIGH for fermented rice
  cakes served with yaji or sauce — Guardian Nigeria, BusinessDay, Mysasun;
  the multi-well pan MEDIUM — not independently re-checked]
- **Model failure**: pancakes, idli (close cousin — rule out by browned
  base), aebleskiver.
- **Composition & proportions (§4.7)** — one serving.
  - **What dominates**: masa cakes ~80%; spice/sauce ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Masa | Round ~6–8 cm across, ~2–3 cm thick (slightly wider than the can) | 4–6 | Pale cream top, spongy with small holes, golden-brown underside | Stacked or overlapping on a plate |
    | Yaji | Powder | a small heap | Rust-orange | Beside |
    | Pepper sauce / miyan taushe (optional) | Small bowl | 0–1 | Red, oily / orange-brown pumpkin-groundnut | Beside |
  - **Arrangement**: overlapping ring or a small stack.
  - **State cues**: warm, soft, faint steam.
  - **Absent on purpose**: syrup, butter, berries.
  - **Prompt-ready line**: "Five round, spongy fermented rice cakes,
    each slightly wider than the can, pale cream on top with small holes
    and golden-brown undersides, overlapping on an enamel plate beside a
    small heap of rust-orange ground-peanut chilli spice. Not pancakes,
    no syrup."

#### Nkwobi and isi ewu (Igbo; zone 2)

- **Category**: Evening delicacy, often at bars ("joints") — **alcohol
  risk**; stage at home or in a restaurant, alcohol-free.
- **Base**: **nkwobi** — cooked cow foot pieces in a thick, spicy,
  yellow-orange **"potash-emulsified" palm-oil sauce** with ugba (oil bean
  slivers), crayfish; **isi ewu** — goat head, similar sauce. Both
  garnished with sliced onion and **utazi** leaves, served in a wooden
  **okwa** bowl. [HIGH — Nkenne, Wikipedia's Nkwobi and Isi ewu (via
  search), Eat Well Abi]
- **Staging note**: isi ewu may be served with the goat head visibly
  presented [LOW-MEDIUM]; **default nkwobi** — less confronting on camera.
  [EDITORIAL]
- **Model failure**: curry in a wooden bowl, chicken wings, stew.
- **Composition & proportions (§4.7)** — one okwa of nkwobi.
  - **What dominates**: cow-foot pieces coated in sauce ~65%; onion and
    utazi garnish ~20%; ugba ~10%; visible sauce ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Cow foot pieces | ~3–5 cm, gelatinous with bone and skin | 8–12 | Coated in thick, creamy-looking **mustard-yellow to orange** sauce | Heaped |
    | Ugba slivers | ~2–4 cm × 3–5 mm | a scatter | Pale beige-grey, glossy | Through the sauce |
    | Onion rings | ~4–5 cm | 4–6 | White, raw | On top |
    | Utazi leaves | Leaves ~4–6 cm, sometimes shredded | 3–5 | Dark green | On top, tucked |
    | Okwa bowl | ~15–18 cm | 1 | Carved dark wood, sometimes with a lid beside | Vessel |
  - **Arrangement**: heaped dome, garnish on top.
  - **Vessel fill**: heaped above the rim.
  - **State cues**: thick, glossy, emulsified sauce (not oily-separated).
  - **Absent on purpose**: rice, bottles, cutlery stuck in.
  - **Prompt-ready line**: "A carved dark wooden bowl heaped with Igbo
    nkwobi: gelatinous cow-foot pieces about half the can's width coated
    in a thick, glossy, mustard-yellow to orange spiced palm-oil sauce,
    with pale oil-bean slivers through it, topped with raw white onion
    rings and a few dark-green utazi leaves. Not curry."

#### Ofada rice with ayamase (Southwest; zone 1)

- **Category**: Everyday and party (prestige "native" option).
- **Base**: **ofada** — a local, short-to-medium grain, unpolished,
  aromatic rice, often patchy cream/brown; **ayamase** ("designer stew")
  — a **green** pepper stew of green bell pepper and scotch bonnet in
  **bleached palm oil** with iru and assorted meat, often with boiled
  eggs; traditionally served on **uma/eran leaves**. [HIGH for ofada +
  ayamase + assorted meat + eggs — Naija Food Tour, 9jakitchen, Medium
  street-food list; leaf serving MEDIUM — not independently re-checked]
- **Model failure**: brown rice with pesto, Thai green curry.
- **Composition & proportions (§4.7)** — one plate (or leaf-lined plate).
  - **What dominates**: ofada rice ~50%; ayamase stew ~30%; meat and egg
    ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Ofada rice | Shorter, plumper grains ~5–6 mm; mound ~12 cm | 1 | Mixed cream, beige and reddish-brown grains, some broken, matte | Centre on a green leaf |
    | Ayamase | Ladle ~10 cm pool | 1 | Olive-green, coarse-blended, oily, flecks of dark iru | Beside the rice and over its edge |
    | Assorted meat | ~3–4 cm | 3–5 | Fried dark-brown, tripe | In the stew |
    | Boiled egg | Whole ~5 cm | 1 | White, stew-coated | In the stew |
    | Uma leaf | ~30 × 20 cm | 1 | Broad, glossy green | Lining the plate |
  - **Arrangement**: rice mound and green stew side by side on the leaf.
  - **Vessel fill**: leaf covers the plate; food ~70%.
  - **State cues**: oil gleam on the stew; rice matte.
  - **Absent on purpose**: red stew (ayamase is green), coconut milk.
  - **Prompt-ready line**: "On a broad glossy green leaf lining a plate, a
    mound of local ofada rice about a third as tall as the can, its grains
    a mix of cream, beige and reddish-brown, beside a ladle of oily
    olive-green pepper stew flecked with dark locust beans, holding a
    boiled egg and a few dark-fried meat pieces. Not Thai curry."

#### Boli and fish (Port Harcourt; zone 3)

- **Category**: Street food, lunch and evening.
- **Base**: **roasted ripe plantain** (boli) — sometimes roasted yam —
  with grilled fish (mackerel, tilapia), a palm-oil pepper sauce, raw
  onion, **ugba** and shredded **utazi**. [HIGH — Wikipedia's Boli (via
  search), Rexclarke, Folu Oyefeso]
- **Model failure**: grilled banana dessert, sweet potato.
- **Composition & proportions (§4.7)** — one serving on paper or a plate.
  - **What dominates**: plantain ~45%; fish ~35%; sauce and garnish ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Roasted plantain | Whole ~18–22 cm (longer than the can), or split in halves | 1–2 | Blackened char stripes and patches over deep yellow-orange flesh, matte, dry | Laid diagonally |
    | Grilled fish | Mackerel ~20–25 cm or a half | 1 | Charred skin, silvery-grey under char | Beside the plantain |
    | Pepper sauce | Small pool | 1 | Red-orange palm-oil sauce | Spooned over fish |
    | Onion / utazi / ugba | Rings / shreds / slivers | a scatter | White; dark green; pale beige | On top |
  - **Arrangement**: plantain and fish side by side, sauce and garnish on
    the fish.
  - **Vessel fill**: fills a paper sheet or a 26 cm plate.
  - **State cues**: char, faint smoke, sauce glossy.
  - **Absent on purpose**: sugar, cream, lime.
  - **Prompt-ready line**: "On plain paper, a whole roasted ripe plantain
    longer than the can, deep yellow-orange with blackened char stripes,
    beside a charred grilled mackerel spooned with glossy red-orange palm-oil
    pepper sauce and scattered with raw onion rings, shredded dark-green
    leaves and pale oil-bean slivers."

#### Ewa agoyin with agege bread (Lagos; zone 1)

- **Category**: Street breakfast and lunch; Lagos-coded.
- **Base**: soft, **mashed pale beans** with a **dark, almost black-red,
  fiery pepper sauce** of dried peppers and onions in palm oil cooked
  until very dark; eaten with **agege bread** — a soft, stretchy, pale
  loaf. [HIGH — Naija Food Tour, 9jakitchen, Medium street-food list]
- **Model failure**: refried beans; hummus; baked beans.
- **Composition & proportions (§4.7)** — one serving.
  - **What dominates**: pale beans ~55%; dark sauce ~25%; bread ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Mashed beans | Mound ~12 cm | 1 | Pale beige-brown, very soft, some whole beans | Centre |
    | Agoyin sauce | Ladle | 1 | Very dark red-brown to near-black, oily, with crisp dark onion bits | Spooned over the top in a dark pool |
    | Agege bread | Thick slices ~10 × 10 cm, ~3 cm thick, or a torn chunk | 2 slices | Pale golden thin crust, very white soft crumb | Beside the plate or on paper |
  - **Arrangement**: dark sauce in a pool over the pale beans; bread
    leaning against the plate.
  - **Vessel fill**: ~70% of a plate or a takeaway pack.
  - **State cues**: oil sheen on the dark sauce.
  - **Absent on purpose**: red tomato stew colour, cheese.
  - **Prompt-ready line**: "A plate of soft, mashed pale beige-brown beans,
    a mound about a third as tall as the can, with a pool of very dark,
    oily red-black fried pepper sauce with crisp onion bits on top; two
    thick slices of soft white Nigerian bread with a thin golden crust
    beside it. Not refried beans."

#### Asun (spicy smoked goat; Yoruba party and bar food)

- **Category**: Party small-chop and bar snack — **alcohol risk**; stage
  at an owambe food table or at home.
- **Base**: goat meat grilled or smoked, then tossed with scotch bonnet,
  onions and bell pepper. [MEDIUM — named in the owambe list (African Food
  Network); preparation not independently re-checked]
- **Composition & proportions (§4.7)** — one small bowl or tray section.
  - **What dominates**: goat ~75%; peppers and onion ~25%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Goat pieces | ~2–4 cm, skin-on, some bone | 12–20 | Charred brown-black edges, glossy with pepper oil, smoky | Heaped |
    | Scotch bonnet / bell pepper | Diced ~1 cm | a scatter | Red, orange, green | Through |
    | Onion | Slivers | a scatter | Translucent, lightly cooked | Through and on top |
  - **Arrangement**: a heaped pile, peppers visible throughout.
  - **Vessel fill**: heaped above a small bowl's rim.
  - **State cues**: glossy, charred, faint smoke.
  - **Absent on purpose**: sauce pooling, skewers, bottles.
  - **Prompt-ready line**: "A small bowl heaped with Nigerian asun: bite-
    size pieces of smoky grilled goat, each about half the can's width,
    skin-on with charred brown-black edges and a glossy chilli-oil coat,
    tossed with diced red scotch bonnet, green pepper and onion slivers."

### D. Small chops, snacks & sweets

#### Small chops platter (party starter)

- **Category**: Party starter, office event, "small chops" catering.
- **Contents**: **puff-puff, samosas, spring rolls, peppered gizzard,
  peppered chicken or "stick meat"**, sometimes mini meat pies, scotch
  eggs; served on a tray or in a small box; toothpicks. [HIGH —
  Wikipedia's Small chops (via search), African Food Network]
- **Model failure**: Western canapé platter, dim sum.
- **Composition & proportions (§4.7)** — one guest's small-chops pack or a
  tray section.
  - **What dominates**: fried golden browns — puff-puff ~30%; samosas and
    spring rolls ~40%; peppered meats ~30%.
  - **Component table**:

    | Component | Real size | Count (per guest pack) | Look | Where it sits |
    |---|---|---|---|---|
    | Puff-puff | ~4.5–5.5 cm balls | 3–4 | Irregular golden-brown | One corner |
    | Samosa | Triangles ~7–9 cm | 2 | Crisp pale-gold pastry, blistered | Beside |
    | Spring roll | ~9–11 cm long, ~2.5 cm thick | 2 | Golden, blistered wrapper | Beside |
    | Peppered gizzard / "stick meat" | Gizzard pieces ~2–3 cm on toothpicks; stick meat ~8–10 cm | 3–5 / 1–2 | Dark red-brown, glossy pepper coating | In a group, toothpicks up |
    | Dodo cubes (gizdodo) | ~2 cm | optional | Golden-orange | With gizzard |
  - **Arrangement**: grouped by type in a white box or on a round tray.
  - **Vessel fill**: pack full; tray ~80%.
  - **State cues**: fried crisp, a little oil, no sauce bowls.
  - **Absent on purpose**: dips in ramekins, garnish leaves, cocktail sticks
    with olives.
  - **Prompt-ready line**: "A small white box of Nigerian party small
    chops: three irregular golden puff-puff balls each slightly smaller
    than the can's width, two blistered pale-gold samosas, two golden
    spring rolls shorter than the can, and a cluster of glossy dark-red
    peppered gizzard pieces on toothpicks. No dips, no garnish."

#### Puff-puff

- **Category**: Street snack and party small-chop.
- **Base**: sweet yeasted batter dropped by hand as **golf-ball-sized**
  portions into hot oil, fried golden. [HIGH — Immaculate Bites, Cooking
  with Claudy, Recipes from a Pantry, Sisiyemmie]
- **Model failure**: glazed doughnut holes, beignets with heavy sugar,
  perfect spheres.
- **Composition & proportions (§4.7)** — a snack serving.
  - **What dominates**: the balls only; sugar dusting optional and light.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Puff-puff | ~4.5–5.5 cm, irregular round with a small tail or bump | 6–10 | Golden to deep brown, matte, faintly craggy; torn one shows a soft, airy, pale yellow-white crumb with irregular holes | Piled in a bowl or a small clear bag |
    | Sugar (optional) | Dusting | light | White specks | On top |
  - **Arrangement**: loose pile.
  - **Vessel fill**: small bowl ~12–15 cm, heaped.
  - **State cues**: faint oil sheen, warm.
  - **Absent on purpose**: glaze, sprinkles, chocolate, syrup.
  - **Prompt-ready line**: "A small bowl piled with eight Nigerian
    puff-puff, each an irregular golden-brown fried dough ball slightly
    smaller than the can's width, matte and faintly craggy with small
    tails, one torn open to show a soft airy pale crumb. Not glazed, no
    sprinkles."

#### Akara (bean fritters)

- **Category**: Street snack and breakfast (Morning Module); with agege
  bread or pap.
- **Base**: peeled black-eyed beans blended with pepper and onion, whipped
  and fried by the spoonful. [HIGH — Splendid Table, Chef Lola's Kitchen,
  My Diaspora Kitchen]
- **Model failure**: falafel (the closest confusable — rule out by
  **paler, puffier, craggier, orange-flecked** interior, no herbs green),
  hush puppies.
- **Composition & proportions (§4.7)** — a serving.
  - **What dominates**: fritters only.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Akara | ~5–6 cm, irregular, lumpy balls or flattish rounds | 5–8 | Deep golden-brown, very craggy with crisp tendrils; split one shows fluffy pale-cream interior with red pepper flecks | Piled on paper or a plate |
    | Agege bread (optional) | Slice ~10 × 10 cm | 1–2 | White crumb | Beside |
  - **Arrangement**: pile.
  - **Vessel fill**: heaped plate or a paper bag opened.
  - **State cues**: crisp, freshly fried, light oil.
  - **Absent on purpose**: green herbs, tahini, pita.
  - **Prompt-ready line**: "A pile of six Nigerian bean fritters on plain
    paper, each an irregular, very craggy deep-golden ball about the
    can's width with crisp fried tendrils, one split to show a fluffy
    pale-cream interior flecked with red pepper; two slices of soft white
    bread beside. Not falafel, no herbs."

#### Meat pie

- **Category**: Snack, party, bakery, school/office.
- **Base**: buttery **shortcrust** half-moon filled with minced beef,
  diced potato and carrot, thyme and seasoning; fork-crimped edge, egg
  wash. [HIGH — My Active Kitchen, Sisi Jemimah, All Nigerian Recipes]
- **Model failure**: empanada (similar shape — rule out by **thicker,
  crumbly shortcrust, pale gold, fork-crimped** not rope-braided);
  Cornish pasty (larger, crimped along the top).
- **Composition & proportions (§4.7)** — one pie, halved.
  - **What dominates**: pastry ~70% of the visible surface; filling ~30%
    on the cut face.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Pastry half-moon | ~10–13 cm across (slightly shorter than the can's height), ~3 cm thick | 1–2 | Pale gold, egg-wash shine on top, fork-pressed crimp, a few flaky crumbs | On a plate or paper |
    | Filling (cut face) | Minced beef, potato and carrot cubes ~5–8 mm | — | Brown mince, pale potato, orange carrot | Visible in the cut half |
  - **Arrangement**: one whole pie with one halved beside it.
  - **State cues**: dry crumbly pastry, crumbs on the plate.
  - **Absent on purpose**: gravy, sauce, peas.
  - **Prompt-ready line**: "A pale-gold Nigerian meat pie, a fork-crimped
    shortcrust half-moon slightly shorter than the can's height with a
    light egg-wash shine, beside a halved one showing brown minced beef
    with small cubes of potato and orange carrot; a few pastry crumbs on
    the plate. Not an empanada."

#### Chin chin

- **Category**: Snack, party, Christmas, gifting jars.
- **Base**: sweet, nutmeg-flavoured dough cut into small cubes or strips
  and deep-fried until hard and crunchy. [HIGH — Wikipedia (via search),
  All Nigerian Recipes, Immaculate Bites]
- **Model failure**: croutons, granola, cereal.
- **Composition & proportions (§4.7)** — a bowl.
  - **What dominates**: pieces only.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Chin chin | Cubes ~1–1.5 cm or strips ~3 × 0.7 cm | ~80–120 in a bowl | Golden-brown, uneven tones, matte, hard and crisp | Heaped in a bowl or jar |
  - **Arrangement**: loose heap.
  - **Vessel fill**: small glass bowl ~12 cm, full.
  - **State cues**: dry, crisp.
  - **Absent on purpose**: sugar coating, chocolate, nuts.
  - **Prompt-ready line**: "A small glass bowl heaped with Nigerian chin
    chin: hundreds of small, hard, crunchy fried-dough cubes each about a
    fifth of the can's width, golden-brown in uneven tones and matte. Not
    croutons."

---

## EXAMPLE PROMPT LANGUAGE (illustrative — not validated by any image test)

**Owambe party plate, zone 1:**
> Eye-level photograph at a round table under a white party canopy in
> Lagos, afternoon light. A white plate heaped with long, separate,
> orange-red grains of smoky party jollof rice with a light oil gloss,
> pale-yellow fried rice flecked with diced carrot and green beans, one
> deep-golden fried chicken drumstick shorter than the can, five glossy
> caramelised plantain slices fanned at the front, a smooth salmon-orange
> slab of steamed bean pudding and a small heap of coleslaw. Beside the
> plate: {HERO PRODUCT SLOT, e.g. "a Coca-Cola Original 33 cl can, tall
> slim red aluminium can, not Coke Zero"}. Behind, softly out of focus,
> guests in matching patterned fabric and headwraps, rows of white
> chairs. No legible text, no money, no beer bottles, no Chapman, no
> sachet water, no other drinks; nothing held in a hand.

**Suya at night, zone 5 or 1:**
> Night, a warm bulb and the orange glow of a charcoal grill blurred
> behind. On a wooden ledge, a sheet of plain unprinted brown paper opened
> flat with a heap of thin, dark reddish-brown grilled beef pieces coated
> in a dry, matte rust-orange peanut-chilli spice, charred at the tips,
> scattered with raw onion slivers and three tomato slices. Beside it:
> {HERO PRODUCT SLOT}. No newspaper, no printed text, no sauce, no beer,
> no other drinks; nothing held in a hand.

*Before use: run at least two generations per prompt
(`country-file-schema.md` §7.5), and apply this file's confidence tags.*

---

## GAP LOG

- **Can shape contradiction with `coca-cola-guidelines.md` §4.3.** The
  guidelines' non-US default is the standard 330 mL can (115.2 × 66.1 mm).
  Evidence found this pass suggests **Nigeria's 33 cl Coca-Cola can is the
  sleek format (~146 × 57.4 mm)** — The Canmaker reports a "sleek can"
  line at NBC Ikeja (via search; page fetch blocked) and a retailer lists
  "Coca-Cola Original Taste (Nigeria), in can slim, 330 ml". MEDIUM, not
  bottler-confirmed. Not edited in the guidelines; flagged for the pending
  TCCC spec drop. If confirmed, the §4.3 rule should say "330 mL, standard
  or sleek — check the market file".
- **Glass bottles unconfirmed for in-market use.** Only UK diaspora shops
  list "Nigerian Coke 50cl" glass; no current NBC returnable-glass source
  was found. Don't stage glass for an in-Nigeria scene until confirmed.
- **No PET dimensions** for 35 cl, 60 cl or 1 L; 50 cl uses the generic
  guidelines figure.
- **NBC plant count** conflicts (13 vs. 8 plants) between search snippets;
  the NBC site was blocked.
- **"Fanta Chapman" product**: recalled from model knowledge that a Fanta
  Chapman flavour was launched in Nigeria; **not verified** (search budget
  exhausted). If real, it creates a legitimate stageable "Chapman" hero
  distinct from the mixed drink — Fernando to decide.
- **No national house/flat split.** Nigeria's last census was 2006; DHS
  2023–24 gives materials and utilities only. The settlement registers
  rest on a one-city study and press — MEDIUM at best.
- **Settlement registers, tenement and buka framing — PENDING HUMAN
  SIGN-OFF** (see FILE ROLE & METHOD).
- **Composition & proportions blocks are mostly editorial synthesis.**
  Sourced sizes: puff-puff (golf-ball), akara (tablespoon), party cooler
  (5 L ≈ 15 people), sleek can. Swallow dome size, moi moi, meat pie,
  suya pieces, kilishi and masa sizes are EDITORIAL/LOW-MEDIUM and need
  image tests or SME checks.
- **Not individually searched**: efo riro, ofe onugbu/oha details, yam
  porridge, beans porridge, asun preparation, starch colour, tuwo serving
  shape, masa pan, agege bread size, sunset times, harmattan months,
  cutlery layout, pork's place in southern eating, beer/stout market
  claims, zobo details, most interior markers.
- **Missing entries** a brief may need: abacha (African salad), ofe
  owerri, fisherman soup, owho, okra soup, native/palm-oil jollof, yam
  and egg sauce, shawarma (a major Gen Z street food), roasted corn and
  ube (African pear), gala-style sausage rolls (genericize), zobo as a
  companion if briefs allow.
- **Kid-adjacent scenes** (school snacks, children at owambes) need a
  review against TCCC's under-13 marketing policy.
- **Ramadan/iftar staging** of a soft drink is an editorial call; a
  Muslim SME should confirm what reads as respectful.
- **Kano Durbar 2026** status was contested (security suspension,
  emirship dispute) — re-check before any Sallah brief.
- **Fetch access**: ng.coca-colahellenic.com and canmaker.com blocked by
  the egress proxy; Wikipedia used via search snippets only.
- **Celebrations pass (2026-10-01) open items.** Headcounts for
  Christmas, Sallah, naming and birthday gatherings are editorial
  estimates; the owambe figures come from one Lagos wedding planner (La
  Heiress), not a survey. Birthday-party food and children's parties
  were not separately searched, and a children's party needs a check
  against TCCC's under-13 policy. Igbo traditional-wedding food rests on
  Pulse and tier-3 wedding sites. Event plate and cutlery norms
  (disposable vs. hired crockery) are LOW-MEDIUM.
- **Game-night pass (2026-10-01) open items.** EPL, Champions League
  and AFCON kick-off times in WAT are time-zone arithmetic; the AFCON
  Morocco 2025–26 dates are not verified. Viewing-centre food, the
  betting-shop proximity, and how pervasive sports betting is around
  football are LOW (not verified). FIFA video-game centres and draughts
  at relaxation spots are unverified. Ludo and Whot food pairings are
  editorial. The viewing-centre gender mix comes from one academic study
  (Global Media Journal).
- **Venue-profile pass (2026-10-01) open items.** Unverified background
  details: parlour wall colours, food flasks on the dining table, lace vs.
  blinds by region and age; compound-forecourt layout (water tank,
  generator house) beyond trade-site evidence; the suya stand's lamp type;
  event-hall dressing; northern variants of every venue. All register
  variants in VENUE PROFILES stay PENDING HUMAN SIGN-OFF with the
  settlement-register and buka framing. Viewing centre and pepper-soup
  joint not yet profiled (later wave).

## CANDIDATE QUEUE

1. **Human sign-off** on the settlement registers and the buka/tenement
   framing (Nigerian SME + TCCC Nigeria brand/legal).
2. **Confirm the Nigerian can shape** (sleek vs. standard) and PET/glass
   dimensions via the TCCC spec drop or NBC; then correct every
   "relative to the can" line if needed.
3. Reviewer decision on the **North spinout** and zone boundaries (Kwara,
   southern Kaduna, Niger State).
4. Verify **Fanta Chapman** and whether TCCC Nigeria has its own Chapman
   guidance.
5. Image tests (two or more generations each), starting with the party
   plate (jollof vs. Spanish/Mexican rice drift), pounded yam and egusi
   (mashed-potato drift), suya (kebab drift and newspaper text), amala
   (chocolate drift).
6. Add the missing entries in the Gap Log as briefs need them.
7. Independent §8 audit.
8. Celebration dishes without a full entry (2026-10-01 celebrations
   pass): **miyan taushe** (northern pumpkin-groundnut soup, Sallah),
   a shared **celebration cake** entry (tiered wedding cake, birthday
   cake), **abacha** (already listed in the Gap Log; now needed by the
   igba nkwu entry), **ofe owerri** (Christmas in the East), **ukwa**.
9. Viewing foods without an entry (2026-10-01 game-night pass):
   **roasted groundnuts** (in a cone or small bowl), **peppered
   chicken** (Super Eagles night and party trays), and **shawarma**
   (already in the Gap Log; Gen Z viewing and FIFA nights).

## RESEARCH LOG

- **2026-09-27, first pass (this file).** Built directly — no separate
  scaffold existed. **37 WebSearch queries** (the session's shared search
  budget was then exhausted), plus 3 WebFetch attempts blocked by the
  egress proxy (ng.coca-colahellenic.com ×1, canmaker.com ×1; one further
  blocked on the NBC "at a glance" page). Prioritised by what a scene
  depends on:
  - **Packs and brand (10)**: NBC pack sizes; 330 mL can in Nigeria;
    35 cl glass/returnables (nothing found); NBC canning line (sleek
    cans, Ikeja); NBC portfolio; Jumia/Shoprite can listings; PET sizes
    (35/50/60 cl, 1 L); returnable-glass deposit (nothing found); sleek
    can in Nigeria; sleek 330 mL dimensions.
  - **Policy and context (4)**: religion split (DHS 2018, Pew 2012);
    sharia alcohol ban (Kano Hisbah); SSB tax status 2026; meal times.
  - **Housing (2)**: house types / face-me-I-face-you; DHS housing
    characteristics.
  - **Dishes (17)**: owambe food; Chapman; suya/yaji; pounded yam and
    egusi; amala/abula; afang/banga/ogbono/onugbu; pepper soup; buka/mama
    put; moi moi; northern dishes (tuwo, kuka, masa, kosai, kilishi, fura);
    boli/agoyin/ofada; nkwobi/isi ewu; puff-puff and akara sizes;
    party jollof/fried rice; eba/fufu/semo; meat pie/chin chin/salad;
    obe ata/buka stew.
  - **Festivals (4)**: Eid 2026 dates; Ojude Oba, Durbar, Calabar
    Carnival, New Yam; Ramadan and Eids 2027; owambe/aso ebi/spraying.
- **Sources down-weighted**: diaspora grocery listings (used only as
  LOW evidence for the 50 cl glass bottle); recipe blogs used for sizes
  only where nothing better surfaced, and marked.
- **No subagents were used.**
- **2026-10-01 celebrations pass (schema §5.7): 5 searches** (naming
  ceremony food; wedding guest numbers, caterers and service; Sallah
  food in the North; Christmas homecoming food; igba nkwu food). Added
  CELEBRATIONS & LARGE GATHERINGS after the FESTIVALS register: how
  gatherings work plus 7 entries (owambe wedding reception, igba nkwu,
  naming ceremony, birthday party, Christmas and New Year, Eid al-Fitr,
  Eid el-Kabir). Settlement-register/buka framing and the Ramadan/iftar
  editorial call left unresolved. No subagents.
- 2026-10-01 game-night pass (schema §5.8): built from the cross-market
  research notes (45 searches across all markets), 0 new searches. Added
  GAME NIGHT after CELEBRATIONS & LARGE GATHERINGS: 3 watch-party entries
  (Premier League afternoon in the parlour, the viewing centre, Super
  Eagles night at home) and 2 social game-night entries (ludo in the
  parlour, Whot at a family gathering; popularity medium). Settlement-
  register/buka framing and the Ramadan/iftar call left untouched. No
  subagents.
- 2026-10-01 venue-profile pass, wave 1 (schema §5.9): 5 profiles, 5 searches (family parlour and dining corner, compound forecourt under a canopy, buka, suya spot, owambe under canopies or in a hall). Sign-off-safe baseline used; register variants kept factual, framing not resolved; iftar untouched. No subagents.
