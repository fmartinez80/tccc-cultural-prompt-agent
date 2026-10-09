---
country: china (mainland — People's Republic of China; Hong Kong SAR, Macau SAR and Taiwan are NOT covered by this file)
ou: APAC (TCCC's public segment grouping; no confirmed internal TCCC OU code — the same standing caveat every started market's file carries, see `market-roadmap.md`). What this pass did confirm: mainland China is bottled by two franchise bottlers, **COFCO Coca-Cola Beverages** and **Swire Coca-Cola**, after TCCC sold its company-owned Chinese bottling to them in 2017 (1 April and 1 July 2017); each runs a contiguous territory, COFCO ~18 plants and Swire ~17–18 plants in 11 provinces plus Shanghai, Swire serving "over 650 million people" [HIGH — TCCC FY2017 10-K, ESM Magazine, Swire News (via search)]. **Which provinces belong to which bottler was not confirmed this pass** — do not write a bottler into a scene.
status: DRAFT — NEEDS SME/HUMAN REVIEW. First pass, built directly from model knowledge with WebSearch verification of the load-bearing claims (~41 searches; see RESEARCH LOG). Entries that were not searched say so in their tags. See METHOD NOTE.
research_method: Claude web research (WebSearch; one direct page read of COFCO's product page was blocked by the network egress proxy, so pack claims rest on search-result snippets from JD.com, Suning, COFCO and Baidu and are marked "(via search)" — disclosed per `country-file-schema.md` §6). Most dish specs were checked against Chinese-language sources (Baidu Baike, municipal/provincial standards, Chinese press) via search snippets. Structure follows `latam/mexico.md`, `europe/turkey.md` and `latam/brazil.md` (single file with zones); HERO PRODUCT SLOT and ICONIC BEVERAGES follow `africa/south-africa.md`.
date_drafted: 2026-09-29
---

# China (mainland)

## FILE ROLE & METHOD

This file is mainland China's country file: a single national staging
brief with eight labeled internal zones. One TCCC hero beverage per scene
(named by the brief — see HERO PRODUCT SLOT), staged against real Chinese
dishes, vessels and settings, with the full drinks landscape — tea, soy
milk, herbal tea, baijiu and beer — documented as context even where a
drink is never itself staged.

**Scope** (the project default, not a new decision): **午饭 (lunch)**,
**晚饭 (dinner — the main family meal)**, snacks and street food are in
scope. **早饭 (breakfast)** is out of scope except through the opt-in
MORNING MODULE; the brief for this file named jianbing and baozi
explicitly, so they are written in full but flagged as morning-register.
No beverage other than the hero TCCC product is staged; the others are
documented in ICONIC BEVERAGES.

**Hong Kong, Macau and Taiwan are out of scope.** They are separate
markets with different bottlers, pack formats, scripts (traditional
characters) and table registers. Cantonese dim sum here is staged in
**Guangzhou**, not Hong Kong. [EDITORIAL scope decision — flagged for
Fernando]

### Hard staging rules specific to China (read before any scene)

1. **Chopsticks never stand upright in a bowl of rice.** Upright
   chopsticks resemble incense sticks at funerals and ancestor rites and
   are the best-known table taboo [HIGH — Wikipedia "Customs and etiquette
   in Chinese dining", Chinese Language Institute, chinatravel.com (via
   search)]. Chopsticks lie side by side on a chopstick rest (筷架) or
   neatly across the rim of the plate or bowl, tips pointing left or away
   from the diner, never crossed in an X, never stuck in food.
   [upright taboo HIGH; rest placement MEDIUM — not independently
   re-checked]
2. **Every diner has their own small rice bowl; the dishes are shared.**
   A Chinese meal is several shared dishes in the centre (on a turntable
   at a round restaurant table) plus an individual bowl of plain rice (or
   a noodle/dumpling staple in the north) per person, a small plate or
   bone dish, chopsticks and a ceramic soup spoon. **Never plate a Chinese
   family meal as one composed Western plate per person.** [HIGH —
   Wikipedia and several etiquette guides agree]
3. **No alcohol staged, ever — and the strongest priors are beer at
   barbecue/hot pot and baijiu at banquets.** Baijiu (small glasses,
   toasts of 干杯) and beer (Tsingtao, Snow) are real and documented in
   ICONIC BEVERAGES only. A model will put green beer bottles on every
   shaokao (skewer) table and every hot-pot table unless told not to —
   negate them by name. Never a TCCC product as a mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5).
4. **Halal settings are halal.** In a Hui or Uyghur (清真, qīngzhēn)
   restaurant — Lanzhou beef noodles, Xi'an Muslim-quarter beef or lamb
   rou jia mo, Xinjiang polo, dapanji, lamb skewers in zone 7 — **no pork
   anywhere in frame and no alcohol cues**. Do not put a pork dish (red-
   braised pork, char siu, pork dumplings) on the same table as a halal
   dish. [EDITORIAL rule; qīngzhēn as the norm of Xinjiang cuisine is
   MEDIUM — China Cuisine Association and Huaxia.com (via search)]
   **Outside those settings pork is China's default meat** — do not strip
   pork from Han Chinese scenes out of misplaced caution. [MEDIUM — not
   independently re-checked this pass; uncontested]
5. **Tea, soy milk, herbal tea and sour-plum drink are not staged beside
   the hero.** A model adds a teapot and cups to every Chinese table. Name
   them in the negative.
6. **Text is everywhere in Chinese scenes — keep it unreadable.** Shop
   signs, menu boards, red spring couplets (春联), the upside-down 福
   character on doors, lantern tassels with characters, order tickets.
   **A 福 or 春联 is legible text** under the project rule; show them only
   as blurred red-and-gold shapes, or leave them out. [EDITORIAL; text
   rule from `country-file-schema.md` §7.5]
7. **No political, national or ethnic set-dressing.** No national flags,
   portraits, Tiananmen Gate, slogans, uniforms. Uyghur, Hui and other
   minority scenes are staged as ordinary restaurants and home tables, not
   costume or folklore tableaux. [EDITORIAL — sensitivity flagged for
   Fernando]
8. **General project rules**: no legible text anywhere; nothing held in a
   hand; no drinks other than the hero; never a TCCC product as a mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5).

### Structural decision: one file, eight zones (recommendation — reviewer has final say)

The `country-file-schema.md` §1.1 swap test, applied with the evidence
gathered this pass:

- **A national table grammar travels everywhere**: shared dishes plus an
  individual staple bowl, chopsticks, the ceramic spoon, the round table
  and turntable in restaurants, 公筷 serving chopsticks in public [HIGH].
  A handful of home dishes are genuinely national (西红柿炒鸡蛋 tomato and
  egg, 可乐鸡翅 cola wings, fried rice, 麻婆豆腐 and 宫保鸡丁 as
  nationalised Sichuan dishes) [MEDIUM — cola wings called a "national
  home dish" (国民家常菜) in Sina/Baike (via search); others not
  independently re-checked].
- **But China fails the swap test more than any market built so far.**
  The **staple itself** changes: wheat (noodles, dumplings, steamed buns,
  flatbread) in the north and northwest vs. rice in the south [MEDIUM —
  not independently re-checked; uncontested]. The **New Year food**
  changes: dumplings in the north, niangao and fish in the south [HIGH —
  Tencent News, Huaxia.com, Laodongbao (via search)]. **Zongzi** are
  sweet in the north and savoury in the south, wrapped in reed leaves vs.
  bamboo or banana leaves [HIGH — Beijing News, GMW (via search)]. **Hot
  pot** is a clear-broth copper chimney pot with sesame dip in Beijing
  and a red beef-tallow grid pot with a sesame-oil-and-garlic dip in
  Chongqing [HIGH — Beijing market-supervision bureau, Beijing Daily,
  China Daily (via search)]. Halal Northwest tables exclude pork entirely.
- **Environment does not travel**: Beijing's hutong courtyards and
  ring-road towers, Shanghai's lane houses (里弄) and glass skyline,
  Guangzhou's arcaded street shophouses (骑楼) and tea houses,
  Chongqing's stacked hillside city and river fog, Hunan's red-chilli
  market towns, the snowy Northeast, the loess and desert oases of the
  Northwest, and Yunnan's highland old towns look nothing alike.

**Recommendation: one national file, eight zones**, handled as dish-
variant and environment deltas — the same call as Mexico, Spain,
Türkiye and Brazil. **But China is the strongest candidate so far for a
US-style national index + regional files** (§2.2): the country is
continental, the staple changes by zone, and several zones (Cantonese,
Sichuan–Chongqing, Northwest halal) each carry a whole cuisine. This pass
keeps one file because the brief asked for one; **the split is a decision
for Fernando** (§7). If split, the likely first files are `china-canton.md`,
`china-sichuan-chongqing.md` and `china-northwest.md`.

### Zones (one scheme, used throughout)

| # | Zone | Covers | Visual register |
|---|---|---|---|
| 1 | North China & Beijing | Beijing, Tianjin, Hebei, Shandong, Shanxi, Henan | Wheat country: dumplings, steamed buns, hand noodles, jianbing; grey-brick hutong courtyards and ring-road apartment towers; dry, bright winters, dusty spring light; copper-pot mutton, roast duck |
| 2 | Shanghai & Jiangnan | Shanghai, Jiangsu, Zhejiang, southern Anhui | Rice and river country: sweet-savoury soy braises, soup dumplings, freshwater fish; Shanghai lane houses and a glass skyline, whitewashed canal towns with black-tiled roofs, humid grey light |
| 3 | Cantonese / Guangdong | Guangzhou, Foshan, Shenzhen, Chaoshan (Hong Kong excluded) | Dim sum tea houses with trolleys or tick-sheets, roast-meat shop windows (烧腊), congee; arcaded shophouses, banyan trees, subtropical glare and afternoon rain |
| 4 | Sichuan & Chongqing | Sichuan (Chengdu), Chongqing | Numbing-hot red: beef-tallow hot pot, mapo tofu, noodles; Chengdu teahouse bamboo chairs and willow-lined lanes; Chongqing's stacked hills, stairs, river fog and night neon |
| 5 | Hunan (Xiang) | Hunan (Changsha), with Jiangxi and Hubei as a thin extension | Pure-chilli heat (no numbing pepper): chopped-chilli fish head, stir-fried pork with green chilli, smoked pork; busy night-market streets, rice paddies and green hills |
| 6 | Northeast (Dongbei) | Heilongjiang (Harbin), Jilin, Liaoning | Big, hearty portions: guobaorou, iron-pot stews, dumplings, sauerkraut; long snowy winters, Russian-era façades in Harbin, steamy restaurant windows |
| 7 | Northwest & Xinjiang (incl. halal) | Shaanxi (Xi'an), Gansu (Lanzhou), Ningxia, Qinghai, Xinjiang | Wheat and mutton, largely **halal (清真)** in Hui and Uyghur settings: Lanzhou beef noodles, rou jia mo, dapanji, polo, lamb skewers, nang; loess and desert light, Xi'an's city walls, oasis bazaars |
| 8 | Yunnan & the Southwest | Yunnan (Kunming, Mengzi, Dali), Guizhou, Guangxi | Rice noodles (米线, 米粉), wild mushrooms, sour and herbal flavours; high clear light, old towns of wood and grey tile, terraced green hills |

Zone boundaries are a staging convenience, not a claim about identity.
Tianjin sits in zone 1 but has its own snack canon (jianbing guozi);
Shaanxi's Han (pork) and Hui (beef/lamb, halal) kitchens both live in
zone 7 and must not be mixed on one table [EDITORIAL].

### Default when no zone is named

Fall back to **zone 1 (Beijing) at the everyday register for the
environment**: a Beijing apartment dining table in a 6–20-storey block,
or a neighbourhood 家常菜 (home-style) restaurant — **with a rice bowl at
each place** so the table reads nationally, not as a dumpling-only
northern table. Beijing is chosen because its restaurants carry every
regional cuisine side by side; Shanghai is an equally defensible
default. [EDITORIAL fallback — not a sourced "most typical China" claim]

---

## METHOD NOTE (read first)

**Build method, this pass.** Drafted directly from model knowledge and
checked with ~41 WebSearch queries, prioritising the claims a scene
visibly depends on (can size and pack formats, bottlers, housing, meal
times, festival dates, and the physical specs of the signature dishes —
pleat counts, diameters, noodle widths, bowl sizes), mostly in Chinese.
Tags mean:

- **[HIGH] / [MEDIUM] / [LOW]** — schema §6 tags earned this pass (HIGH =
  2+ independent corroborating sources; MEDIUM = 1 credible source).
- **[… — not independently re-checked this pass]** — model knowledge that
  is uncontested general culinary or cultural knowledge but was not
  individually searched. Plausible, not verified.
- **[EDITORIAL]** — a judgment call (defaults, portion counts, surface
  shares, caricature-avoidance guidance), never a factual claim.
- **[HIGH — first-party test]** — this project's own image-generation
  findings (`coca-cola-guidelines.md` §1, `country-file-schema.md` §7.5).
  **No China-specific image tests have been run.**
- **"(via search)"** — the claim rests on a search-result snippet (the
  page was not read, or was blocked by the egress proxy).
- **Source tiers used here**: Baidu Baike and Wikipedia (tier 1),
  government/municipal standards and Chinese national press (tier 1–2),
  Sina/Sohu/Zhihu food columns (tier 2–3), Xiachufang/Meishichina recipe
  sites and Baidu Zhidao Q&A (tier 4, marked when used).

**Writing principle.** Describe what the camera sees: surface, sheen,
steam, char, pleats, translucency, the red of chilli oil, and real-world
size relative to the can.

**File-wide rules for every scene built from this file:**

1. **Text as atmosphere.** Chinese characters on signs, menus, couplets,
   lanterns, takeaway bags, dim sum tick-sheets and packaging appear only
   as heavily blurred, unreadable colour. Any readable character, number
   or brand mark means reject or retouch. Blur instructions are known to
   fail [HIGH — first-party test; `country-file-schema.md` §7.5]; Chinese
   street and festival scenes carry a very strong signage prior.
2. **The hero product is a TCCC beverage named by the brief** (HERO
   PRODUCT SLOT). Branding is composited in post (`coca-cola-guidelines.md`
   §1–2).
3. **No alcohol in any scene** (hard rule 3); never a TCCC product as a
   mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5).
4. **No drinks in frame other than the hero product** unless the brief
   explicitly allows a named non-alcoholic companion. Name the likely
   intruders in the negative: teapots and small tea cups, glass tea
   tumblers with floating leaves, bowls or cups of soy milk, herbal-tea
   cans, sour-plum drink jugs, beer bottles, baijiu glasses.
5. **Nothing held in a hand.** Jianbing, rou jia mo, baozi and skewers
   rest on paper, a plate, a steamer or a tray (`country-file-schema.md`
   §7.5). **Chopsticks rest on a chopstick rest or across a dish — never
   in a hand, never upright in rice.**
6. **Halal settings are halal** (hard rule 4).

---

## QUICK-REFERENCE: GENERIC SCENE REGISTERS

| Generic scene type | What to draw on |
|---|---|
| **Home dinner (三菜一汤)** | A square or round wooden or glass-topped dining table in an apartment; three or four shared dishes on plain white or patterned porcelain plates, a soup in a larger bowl in the middle, a small white rice bowl, chopsticks on rests and a ceramic spoon at each place. |
| **Home-style restaurant (家常菜馆)** | Round tables with a glass turntable, white tablecloths or bare wood, plastic-wrapped sealed tableware sets (消毒餐具) at each place, a steel teapot (exclude), shared dishes on oval plates. |
| **Noodle shop (面馆)** | Small square tables, stools, a steamy open kitchen with a noodle-puller or big stock pot; large ceramic bowls; jars of chilli oil and vinegar on the table. |
| **Dim sum tea house (早茶, zone 3)** | A bright banquet hall with round tables; stacked bamboo steamers, small plates, a teapot on every table (exclude it); carpets, chandeliers or a plainer old-style hall. |
| **Hot pot restaurant (zone 4, or national chains)** | A pot sunk into or set on an induction hob in the centre of the table; a rack or trolley of raw ingredients on plates; individual dipping bowls; fog of steam. |
| **Shaokao / skewer street (夜宵)** | Night, low folding tables and plastic stools on the pavement, a long charcoal trough grill, skewers on stainless trays; strong beer prior (negate). |
| **Breakfast stall (早点摊)** | A griddle cart or a steamer stack at a stall front, a folding table; paper bags. Morning Module only. |

Full background-first profiles for the main venues: see VENUE PROFILES below.

---

## VENUE PROFILES

Per `country-file-schema.md` §5.9 (wave 1, 2026-10-01): the default
camera is a close-up hero, so each profile leads with what must read in
the **soft background**. The register table above stays the index. The
national default zone is **zone 1, Beijing** (see Default when no zone
is named). Every China hard rule applies: own rice bowl per diner,
chopsticks never upright, halal tables stay halal, no teapot, soy milk
or beer, **no legible characters** (couplets, 福, 囍, menus, shop
signs), no flags or political set-dressing. **Swap from the brief's
default list**: home outdoor is not profiled, because private gardens
are rare in cities and the file's evidence for courtyards and balconies
is LOW (Meal outdoors at home); the noodle shop takes its place as the
most-used 1-person venue. Hot pot and the dim sum tea house are queued
for wave 2.

#### Venue: Beijing apartment dining area (家里的餐厅, 客餐厅)

- Use for: home indoor; casual lunch (1–3), dinner at home, New Year's
  Eve and Mid-Autumn reunion dinners, weekend dinner at the
  grandparents', home watch parties; all party sizes. The national urban
  default (General environmental norms: two-thirds urban, flat in a
  小区). [HIGH for the housing basis; EDITORIAL default]
- Soft background (the core): **back wall** white or warm off-white
  latex paint, often meeting the **living-room side** of a combined
  客餐厅: the sofa back and the large **TV feature wall** (电视背景墙:
  a pale stone-effect, wood-veneer or wallpapered panel with the dark
  TV rectangle on it). **Middle distance**: the kitchen doorway, often
  a **sliding glass door** to a narrow kitchen with white or grey
  cabinets and a stainless range hood; a tall fridge; a glass-fronted
  side cabinet or wine-cabinet-style display unit (keep it free of
  bottles) with tea sets and ornaments as small blurred shapes; potted
  green plants (money plant, pothos) on the floor; in older flats, the
  **enclosed balcony** beyond a glass partition with laundry racks
  (soft, or out of frame). **Light**: a **pendant lamp** directly over
  the table (warm 3000 K LED, often a multi-head or round shade) is the
  key light at dinner; recessed downlights or an LED strip in a false-
  ceiling border; daylight from a wide aluminium window. Winter
  evenings are dark by 17:30 in Beijing. **Palette**: white walls,
  **light-grey or beige polished floor tiles** (large-format, glossy),
  pale wood or white furniture, white porcelain, one warm colour from a
  table runner or cushions. **Signature shapes**: the pendant lamp over
  the table; the TV feature wall; the sliding kitchen door with a range
  hood behind; large glossy floor tiles reflecting the lamp; slippers
  and a shoe cabinet near the door. **Density and wear**: tidy, lived-
  in, practical; rice cooker and thermos on the counter; New Year adds
  red paper-cuts on the window and red decorations (blurred, no
  characters). **People**: a blurred elder or parent at the kitchen
  door, at most about 2.5 faces, none sharp. [MEDIUM — combined
  living-dining with grey floor tiles, pendant lamp over the table and
  strip lights in Chinese home-design cases (Haohaozhu, 163.com, Zhihu
  70 m² case) plus this file's interior markers; side-cabinet contents
  and sliding kitchen door LOW-MEDIUM — general knowledge]
- Shell: a 6–7-storey walk-up from the 1980s–2000s or a high-rise in a
  gated compound; aluminium or uPVC windows with outward AC units;
  ceramic-tile floor (wood-effect laminate in some bedrooms); plain
  white ceiling, often a stepped plaster border.
- The table as set here: a square or rectangular table for four to six
  (wood, or a **sintered-stone/glass top**; a clear PVC or patterned
  table mat over wood is common); a round folding top appears at New
  Year. Shared dishes on white or blue-patterned porcelain plates, soup
  in a big bowl, a small rice bowl, chopsticks on rests and a ceramic
  spoon at each place. Upholstered or wooden chair backs at the frame
  edge. [MEDIUM — register row "Home dinner"; table-mat detail from a
  design case]
- Subregional variants and the national default: **Shanghai/Jiangnan
  (zone 2)** — smaller old-lane flats (石库门 or 1990s blocks), wooden
  floors, humid grey window light; **Guangzhou (zone 3)** — no heating,
  ceiling fans or AC, louvred windows, bright subtropical light;
  **Northeast (zone 6)** — double-glazed windows steamed up in winter,
  radiators under the sill; **Sichuan/Chongqing** — hillside towers,
  fog beyond the window; **rural** — self-built house, concrete or
  tiled floor, a round table in a large front room. Default: the
  Beijing flat above.
- Hallucination traps: red lanterns, dragons and calligraphy scrolls in
  an ordinary home; carved rosewood "imperial" furniture and moon gates;
  Japanese tatami, shoji or low tables with floor cushions; a Western
  open-plan kitchen island; a teapot and cups on the table; a 福 or
  couplet rendered legibly; a sterile showroom.
- Never stage: tea, soy milk, beer, baijiu; legible characters on
  calendars, paper-cuts or packaging; flags or portraits; a brand-name
  appliance logo; identifiable children.
- Prompt-ready line: "A Beijing apartment dining area at dinner: a
  table of shared dishes with a rice bowl at each place under a warm
  pendant lamp, glossy grey floor tiles and a pale TV feature wall
  softly blurred behind, a sliding glass kitchen door glowing at the
  side."
- Confidence and sources: MEDIUM; 1 search (Chinese home-design cases:
  Haohaozhu, 163.com, Zhihu, To8to) plus this file's interior markers.

#### Venue: Neighbourhood home-style restaurant (家常菜馆)

- Use for: restaurant indoor; away from home 2–3 people, family meals
  out, small birthday dinners, colleagues' lunch; 2 to a small group,
  private room (包间) for larger family meals. The national default sit-
  down restaurant. [EDITORIAL; register row "Home-style restaurant"]
- Soft background (the core): **back wall** of light painted plaster or
  wood-effect panelling, sometimes a nostalgic theme (old street
  photos, retro posters, painted murals of a local lane: all illegible);
  a **kitchen pass window** or doorway with a flash of flame and the
  clatter shape of a wok, cooks in white jackets; a **glass-fronted
  display fridge** with raw dishes or cold dishes on plates (a common
  ordering point in smaller places). **Middle distance**: other round
  tables with **glass turntables**, many crowded with dishes, family
  groups as blurred shapes; waitresses in a uniform waistcoat or apron;
  a cashier counter with a lucky cat or small plant (blurred). **Light**:
  bright and even, artificial: white LED panels or rows of downlights
  (cool-neutral, 4000–5000 K) in cheaper places; warmer pendant lamps
  in mid-range ones; little daylight except near the street window.
  **Palette**: white tablecloths or bare brown wood, the clear glass
  turntable, white porcelain, red accents (chair cushions, lanterns
  only in themed places), steam. **Signature shapes**: the round glass
  turntable crowded with oval plates; shrink-wrapped tableware sets at
  each seat; the kitchen-pass flame; a display fridge glow; tables of
  blurred families. **Density and wear**: loud, busy, well-used, clean
  enough. **People**: within the limit; a server's back. [MEDIUM — 苍蝇
  馆子 and mid-range 家常菜馆 environment from Sina/Weibo food columns
  (wooden tables, retro posters, "市井" feel, private rooms as standard);
  turntable and sterilised sets HIGH per GENERAL NORMS; lighting and
  display fridge LOW — general knowledge]
- Shell: a ground-floor shop unit on a residential street, often two
  floors with private rooms upstairs; glass frontage; ceramic-tile or
  stone-effect floor; plain or false ceiling.
- The table as set here: a round table (or square for 2–4) with a white
  cloth, a disposable plastic cover or bare wood; a glass turntable for
  larger tables; **the shrink-wrapped sterilised set (消毒餐具)** at each
  place — cup, small plate, bowl, spoon — opened for the meal (the
  wrap's printing is legible, so show it opened or cropped); chopsticks
  on a rest or the plate; shared dishes on oval and round white plates;
  a steel teapot (exclude); a toothpick holder and napkin box. [MEDIUM]
- Subregional variants and the national default: **Sichuan/Chongqing**
  — the tiny 苍蝇馆子 with bamboo-backed or plastic stools, small square
  tables, chilli everywhere; **Northeast** — big rooms, big plates,
  plastic-covered tables, steamy windows; **Cantonese** — the
  neighbourhood restaurant shares rooms with the dim sum tea house
  (register row); **Jiangnan** — darker wood, quieter, smaller plates.
  Default: the Beijing neighbourhood restaurant above.
- Hallucination traps: Western "Chinese restaurant" decor (gold dragons,
  red lacquer pillars, paper lanterns everywhere, fortune cookies);
  a fine-dining tasting room with plated single portions; Japanese
  izakaya wood and noren curtains; a banquet toast table; legible menu
  boards on the wall.
- Never stage: beer bottles or crates (very common on these tables),
  baijiu, the teapot and tea cups; cigarettes; legible menus, wall text,
  printed tableware wrap; one plated Western portion per diner.
- Prompt-ready line: "A busy Chinese neighbourhood home-style restaurant:
  a round table with a glass turntable crowded with shared dishes and a
  rice bowl at each place, wood-panelled walls, a glowing kitchen pass
  and other tables of blurred diners under bright downlights behind."
- Confidence and sources: MEDIUM; 1 search (Sina/Weibo food columns,
  tier 3) plus the register and GENERAL NORMS.

#### Venue: Noodle shop (面馆, Lanzhou beef-noodle default)

- Use for: restaurant indoor; 1 person at a restaurant, quick lunch,
  meal on the go seated; 1–2. National: Lanzhou beef-noodle shops are in
  every city; the shop type is the national quick-lunch default.
  Lanzhou shops are **halal** (hard rule 4). [MEDIUM — Xinhua on
  Lanzhou noodles spreading nationally; EDITORIAL default]
- Soft background (the core): **back plane** is the **noodle-pulling
  window**: a glass-fronted prep counter (newer shops) or open pass
  where a cook in a white jacket and cap pulls dough (a blurred white
  figure with a pale arc of noodles), a steel table dusted with flour,
  and a **huge stock pot** sending up steam; beside it a counter of
  steel trays with sliced beef, coriander, garlic shoots and a big
  bowl of red chilli oil. **Back wall** plain white tile or white
  panelling, often with a big photographic menu board (illegible
  coloured rectangles; frame to keep it soft) and, in halal shops, the
  green 清真 sign (blurred, no characters). **Middle distance**: small
  square tables with bench-like stools or plastic-backed chairs,
  customers hunched over bowls. **Light**: flat, cool white LED panels or
  fluorescent tubes; daylight from the street door; steam softening
  everything. **Palette**: white tile and steel, pale noodle-dough
  colours, deep red chilli oil, green coriander, the clear amber broth.
  **Signature shapes**: the noodle-puller's arms and arc of dough; the
  steaming stock pot; rows of steel trays; big ceramic bowls; vinegar
  and chilli jars on each table. **Density and wear**: plain, quick,
  busy at noon; older shops worn (sticky tables, which you clean up for
  the frame); new shops "窗明几净" with modern Chinese finishes.
  **People**: one blurred cook, one or two blurred diners. [MEDIUM —
  glass noodle-pulling window and modern-vs-old shop look from CBNData
  and Zhihu (via search); jars on the table per register row; menu
  board and green halal sign LOW — general knowledge]
- Shell: a narrow street-level shop unit; glass front with a plastic
  strip curtain or door; tiled floor; low ceiling.
- The table as set here: a small laminate or stainless-edged table;
  a big white or patterned **ceramic bowl** (~20 cm) of noodles; jars
  of **vinegar** and **chilli oil**, a chopstick canister, a napkin box;
  a small side plate of cold cucumber or a marinated egg. Disposable
  wooden chopsticks in a paper sleeve (blur it). [MEDIUM]
- Subregional variants and the national default: **Beijing** — the
  zhajiangmian shop with wooden tables and side plates of shredded
  vegetables; **Shanghai** — the 面馆 with a bowl of soup noodles and a
  topping (浇头) plate, smaller, wood-trimmed; **Chongqing** — xiaomian
  shops with low stools on the pavement; **Yunnan** — rice-noodle (米线)
  shops; **Shaanxi** — biangbiang or liangpi shops. Default: the Lanzhou
  beef-noodle shop above.
- Hallucination traps: Japanese ramen-ya (counter seats, noren,
  ticket machine, wooden interior); a Western "noodle bar" with
  industrial lighting; pork in a halal Lanzhou shop; a dirty-kitchen
  poverty frame; a legible photo menu.
- Never stage: pork or alcohol cues in a halal shop; tea or soup bowls
  of soy milk; legible menu boards, 清真 sign or chopstick sleeve; the
  cook's hands in close-up holding noodles toward camera.
- Prompt-ready line: "A Lanzhou beef-noodle shop at noon: a big ceramic
  bowl of clear-broth noodles with chilli oil on a small table beside
  vinegar and chilli jars, and behind it a softly blurred glass pulling
  window where a cook in white stretches dough beside a steaming stock
  pot."
- Confidence and sources: MEDIUM; 1 search (CBNData, Xinhua, Zhihu,
  Sina) plus the register and the Lanzhou niurou mian catalog entry.

#### Venue: Shaokao night street and skewer restaurant (烧烤摊 / 烧烤店, 撸串)

- Use for: street / on the go and other (street-side tables); night
  snacks (夜宵), friends' evenings, late-night football watch party;
  1 to a small group. National, origin zone 7, strongest in the North
  and Northeast. [MEDIUM — Street food register; Watch party: Late-night
  football at a shaokao restaurant]
- Soft background (the core): **back plane** is the **charcoal trough
  grill**: a long narrow steel box glowing orange, a cook fanning it,
  **blue-grey smoke** rising into the light; beside it a lit **chiller
  or shelf of raw skewers** on trays. **Middle distance**: more **low
  folding tables** with plastic covers and **red or blue plastic stools**
  on the pavement, groups as blurred silhouettes, a shopfront with a
  roll-up shutter open and a big screen glowing inside on match nights,
  parked e-bikes, plane trees in eastern cities. **Light**: night;
  **warm orange bulbs** strung over the tables and the charcoal glow
  against the cooler white of shopfront LEDs and a neon sign (coloured
  blur, no characters); smoke turns all lights into soft halos.
  **Palette**: charcoal orange, smoky blue, red plastic, steel trays,
  warm amber; black night sky. **Signature shapes**: the long glowing
  trough; smoke halos round bulbs; low tables and stools; piles of bare
  bamboo sticks in a cup; stainless skewer trays. **Density and wear**:
  crowded, loud, informal, a little greasy but lively ("烟火气").
  **People**: blurred groups within about 2.5 faces, a cook's back.
  [MEDIUM — folding tables, small stools, charcoal, orange light and
  smoke per The Paper and Sina/Weibo night-snack columns; Watch party
  entry HIGH for the format; neon detail LOW]
- Shell: pavement outside a small skewer shop, or the shop's own tiled
  room with steel tables and an extractor fan; awning or open sky.
- The table as set here: a low folding table with a disposable plastic
  sheet; stainless trays of skewers laid flat; a steel cup for the bare
  sticks; paper napkin box; small plates; garlic and cumin-chilli dish;
  plastic disposable gloves by a crawfish bowl in summer. [MEDIUM —
  watch-party entry]
- Subregional variants and the national default: **Northeast (zone 6)**
  — 东北烧烤 with indoor tables, bigger skewers, steamy windows in
  winter; **Xinjiang/Xi'an (zone 7)** — halal lamb skewers on long iron
  rods over charcoal, no pork, no beer cues; **Sichuan/Chongqing** —
  串串 in red broth replaces the grill; **Guangdong** — the 大排档 with
  seafood and congee. Default: the northern pavement shaokao above.
- Hallucination traps: Japanese yakitori counters and lanterns; Korean
  BBQ table grills; Western barbecue; green beer bottles and crates
  (the strongest prior); legible neon signs; a night market so crowded
  that faces become sharp.
- Never stage: beer, baijiu, cigarettes; legible signs, price boards,
  screens; betting slips; full flags; pork on a halal table.
- Prompt-ready line: "A Chinese street-side skewer stall at night: a
  stainless tray of cumin-dusted lamb skewers on a low folding table,
  red plastic stools, and behind it a long glowing charcoal grill with
  smoke drifting through strings of warm orange bulbs."
- Confidence and sources: MEDIUM; 1 search (The Paper, Sina/Weibo,
  Zhihu) plus the watch-party entry (China Daily).

#### Venue: Restaurant or hotel banquet hall (宴会厅, 婚宴大厅)

- Use for: restaurant and other; wedding banquet, elder's longevity
  banquet, full-month banquet, New Year's Eve dinner booked out; 1, 2
  or a small group as the snapshot of many tables of ten. The signature
  event venue (CELEBRATIONS: How large gatherings work here). [MEDIUM]
- Soft background (the core): **ceiling** with **crystal chandeliers**
  or a grid of recessed lights, sometimes swagged fabric; **far end** a
  raised **stage with a backdrop** (wedding: flowers, LED screen glow;
  never the couple) and a **T-stage aisle** carpeted down the middle of
  the hall, lit by spotlights and coloured wash lights (pink, purple,
  blue) [MEDIUM — Sohu, Zhihu, jiehun.com.cn wedding-venue guides].
  **Middle distance**: **rows of round tables of ten** with white or
  red cloths, **chair covers** (red, gold or white, often with a sash)
  matching the hall, glass turntables, floral centrepieces, small red
  boxes of wedding candy at each seat. **Light**: warm chandelier
  sparkle and gold wall sconces; stage colour washes in the distance;
  at an elder's banquet or full-month, the same hall plainer. **Palette**:
  red and gold (traditional), or white, champagne and blush (modern
  weddings); white porcelain; clear glass turntables. **Signature
  shapes**: chandelier sparkle; the next round table with its covered
  chairs; the crowded turntable; the distant stage glow; a carpeted
  aisle. **Density and wear**: formal, glossy, crowded. **People**: blurred
  guests at the next table, within about 2.5 faces, none sharp. [MEDIUM
  — round tables, glass turntables, metal-frame upholstered chairs,
  cloths and chair covers, crystal chandeliers per Chinese wedding-
  planning sites (tier 3) and the existing Wedding banquet entry]
- Shell: a ballroom-like hall on an upper floor of a large restaurant
  or hotel; carpet with a pattern; mirrored or panelled walls.
  **Private room (包间)** is the smaller variant: one large round table,
  a wall-mounted TV, a sofa corner and a coat stand, wood-panelled walls.
- The table as set here: a round table for ten with a cloth and glass
  turntable; banquet setting of side plate, rice bowl, ceramic spoon on
  a rest, chopsticks in a sleeve (blurred), napkin folded in a glass;
  **one glass only** for the hero (real tables have two or three);
  cold dishes pre-set on the turntable. [MEDIUM — How large gatherings
  work here]
- Subregional variants and the national default: **Cantonese (zone 3)**
  — the tea-house restaurant converts to a banquet hall at night;
  roast suckling pig platter; **villages** — courtyard banquet (流水席)
  with rented round tables under a tarp (LOW); **halal** — no pork, no
  alcohol cues. Default: the city restaurant banquet hall above.
- Hallucination traps: Western wedding ballroom with long tables and
  champagne; legible 囍 everywhere; dragon-and-phoenix costumes;
  imperial-palace decor; the toasting round; the couple in frame.
- Never stage: baijiu, wine, beer, the toasting round (敬酒); wedding
  cigarettes (喜烟); legible 囍, 寿 or name boards; the bride and groom
  identifiable; identifiable children (full-month banquet baby never
  shown).
- Prompt-ready line: "A Chinese wedding banquet hall: a round table with
  a glass turntable crowded with dishes and a single banquet setting,
  red chair covers on the next round table, crystal chandeliers and a
  distant stage glowing pink and gold in soft bokeh behind."
- Confidence and sources: MEDIUM; 1 search (Sohu, Zhihu, jiehun.com.cn,
  Sina) plus Celebration: Wedding banquet.

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
- **Name the variant; negate the closest lookalike** (可口可乐 Original vs.
  零度 Zero; Sprite 雪碧, Fanta 芬达 flavours). An unspecified "Coca-Cola
  can" rendered as the wrong variant in 2 of 3 generations [HIGH —
  first-party test, `coca-cola-guidelines.md` §1].
- **Negate the local competitor colas.** Pepsi (bottled in China by
  Tingyi/Master Kong), **Future Cola (非常可乐, Wahaha)** and **Tianfu Cola
  (天府可乐, Chongqing)** are real; Coca-Cola was reported at ~24.4% of the
  Chinese soft-drinks market in 2020, Tingyi ~15.5% [MEDIUM — Daxue
  Consulting citing Statista; Future Cola and Tianfu from Wikipedia and a
  trade blog (via search)]. State "not any other cola brand".
- **China is a 330 mL-can market — but with two different 330 mL can
  shapes on sale at once.** This is the key pack finding of this pass:
  - **摩登罐 ("modern can", sleek 330 mL)** — taller and slimmer, about
    **145 mm tall × 57 mm wide** per one Chinese Q&A source [format HIGH —
    JD.com, Suning, Air China Phoenix Miles mall and office-supply
    listings of "摩登罐 330ml ×24/×20/×12" (via search); dimensions LOW-
    MEDIUM — single tier-4 source (Baidu Zhidao) via search]. City-themed
    摩登罐 were launched around Chinese New Year 2018 [MEDIUM — VOA
    Chinese, Jiemian (via search)].
  - **经典罐 / "胖罐" (classic "fat" 330 mL can)** — still sold alongside
    the sleek can, e.g. "经典胖罐 330ml×24" on JD [MEDIUM-HIGH — JD
    listings (via search); the claim that neither replaced the other is
    from the search summary, not a market-share source]. Use the brand
    file's **115.2 mm × 66.1 mm** for it. (The same Baidu source gives
    123.1 mm for a "classic 330 mL" can — that is the 355 mL US can's
    height and is treated as an error [LOW].)
  - **200 mL mini can (迷你罐)** — introduced 2018 and re-promoted in 2024
    [MEDIUM-HIGH — Jiemian and Economic Observer (2024), JD listings (via
    search)]. Dimensions not found.
  **The brief must say which 330 mL can** — the silhouettes differ by ~3
  cm in height and ~1 cm in width, and a sleek can beside a dumpling
  changes the apparent size of the food. Logged in the GAP LOG as a
  `coca-cola-guidelines.md` §4.3 gap (the brand file lists only one
  330 mL can).
- **Other formats confirmed or reported current** (reference for whoever
  writes the brief — never a default):
  - **Glass bottles**: **275 mL** (sold in ×12 cases), **200 mL** (marketed
    to restaurants, including self-service hot-pot restaurants, 餐饮) and a
    ~248 mL listing [MEDIUM — JD listings (via search); heights not found].
  - **PET**: **300 mL, 500 mL, 888 mL, 1.25 L, 2 L** [MEDIUM — COFCO
    product page and CBNData/Baidu snippets (via search); COFCO page
    itself blocked]. One tier-4 source gives heights of ~165 mm (500 mL),
    ~260 mm (1.25 L) and ~310 mm (2 L) [LOW — Baidu Zhidao via search; do
    not use as a scale anchor without checking].
- **Which formats fit which setting** (reference only, not a default):
  - noodle shop, street, office desk, on the go: a 330 mL can (either
    shape — the brief chooses), a 500 mL PET, or a 300 mL PET
  - home-style restaurant, hot pot, dim sum: a 275 mL or 200 mL glass
    bottle, or a can; the 200 mL glass is sold for 餐饮 [MEDIUM]
  - family dinner for three or more, New Year's Eve table, hot pot for a
    group: a **1.25 L or 2 L PET** (888 mL for a smaller group) in the
    midground with one filled plain glass per place
- **Use the chosen format's real dimensions as the scale anchor** (see
  SCALE REFERENCE). Every prompt-ready line in this file measures against
  the **classic 330 mL can (11.5 cm tall, 6.6 cm wide)**; if the brief
  names the sleek can, multiply "can heights" by ~0.8 (the sleek can is
  ~14.5 cm tall) and "can widths" by ~1.15. [EDITORIAL conversion]
- **One hero product per scene** unless the brief asks for several.

**Slot sketches (verify local pack details before a production run):**

| Brief calls for | Slot wording |
|---|---|
| Coca-Cola Original, sleek can | "a Coca-Cola Original 330 ml sleek can, tall and slim, red aluminium, not a short wide can, not Zero Sugar, not any other cola brand" |
| Coca-Cola Original, classic can | "a Coca-Cola Original 330 ml standard can, red aluminium, the usual short wide can, not a tall slim can, not Zero Sugar" |
| Coca-Cola Zero Sugar (零度) | "a Coca-Cola Zero Sugar {format}, black, not the red Original" |
| Coca-Cola Original, mini can | "a Coca-Cola Original 200 ml mini can, red aluminium, noticeably shorter than a standard can" (dimensions unconfirmed) |
| Coca-Cola Original, glass | "a small Coca-Cola Original glass bottle, clear contoured glass showing the dark cola, cap on, not a plastic bottle" (275/200 mL heights unconfirmed) |
| Family multi-serve | "a 2-litre (or 1.25-litre) Coca-Cola Original plastic bottle in the midground, red label, one filled plain glass per place setting" |
| Sprite 雪碧 / Fanta 芬达 | name the flavour and pack colour; negate the nearest lookalike (not a lemon-lime competitor, not an orange competitor) |

### ICONIC BEVERAGES (documented context — staging rules follow)

This section records the real Chinese drinks landscape, including alcohol,
and restricts only what is staged.

**TCCC China portfolio — not verified this pass.** Coca-Cola (Original,
Zero), Sprite, Fanta, Minute Maid and other brands are sold; COFCO lists
可口可乐 含糖 (full-sugar) as a product line [MEDIUM — COFCO product page
title (via search)]. The full current portfolio (teas, waters, coffee) was
not researched. **Market shift worth knowing**: carbonated drinks were
reported at only ~14% of China's soft-drink market, with bottled water,
ready-to-drink tea and juice ~71% [LOW-MEDIUM — Daxue Consulting (via
search); date of the figure unclear].

**Non-alcoholic context (never beside the hero; staged only if a brief
allows a named companion):**

- **Tea (茶)** — the default drink at restaurants and dim sum (a pot on
  every table; 饮茶 "drink tea" *is* the Cantonese name for dim sum),
  at offices (a lidded glass tumbler with floating leaves) and at home
  [MEDIUM — not independently re-checked this pass; uncontested]. **The
  single most likely intruder in any Chinese scene — negate it by name.**
- **Soy milk (豆浆)** — the breakfast drink with youtiao; warm, in a bowl
  or cup [MEDIUM — not independently re-checked]. Negate in any breakfast
  scene.
- **Herbal tea (凉茶)** — Wong Lo Kat (王老吉) and similar, in red cans,
  strongly associated with hot pot and fried or spicy food, and with
  Guangdong [MEDIUM — Wang Lao Ji named as the local herbal drink by
  Daxue Consulting (via search); the hot-pot association not
  re-checked]. **A red can that a model may draw in place of, or beside,
  the hero — negate it.**
- **Sour plum drink (酸梅汤)** at hot pot and Beijing restaurants; **soy
  milk drinks**, **bubble tea (奶茶)** as a youth register; **Beibingyang
  (北冰洋, Beijing orange soda)** and **Ice Peak (冰峰, Xi'an)** as local
  nostalgic sodas [LOW-MEDIUM — not independently re-checked].
- **Warm water** is still commonly served at meals, especially to older
  people [LOW — not re-checked].

**Coca-Cola as a cooking ingredient — 可乐鸡翅 (cola chicken wings).** A
home dish braising chicken wings in Coca-Cola until glossy and
red-brown, described as a "national home dish" (国民家常菜) that
"dominates family tables"; recipes specify full-sugar cola for colour
[HIGH — Chinese Wikipedia, Baidu Baike, Sina, The Paper (via search);
origin disputed between Jinan and Taipei]. This is **not** the mixer the
project rule bans (that rule concerns alcohol), but staging a TCCC
product as a cooking ingredient is a brand decision — see the dish entry
and **flagged for Fernando**.

**Alcohol context (never staged; see hard rule 3):**

- **Baijiu (白酒)** — the national spirit, served at room temperature in
  small glasses, drunk in rounds of communal toasts (干杯, "dry the cup")
  at banquets and business dinners; Moutai the prestige brand [HIGH —
  Yoyo Chinese, China Educational Tours, Kaiwa and others agree (via
  search)]. Toast etiquette: the junior person's glass lower than the
  senior's rim. **Any banquet or business-dinner scene carries a baijiu
  prior** — small tulip glasses, a white porcelain bottle, a decanter.
- **Beer** — Tsingtao and Snow are the everyday beers [HIGH — several
  sources (via search)]; standard with shaokao skewers, crayfish, hot pot
  and Northeast food [MEDIUM — not independently re-checked]. **The
  strongest prior in street-food scenes** — green bottles, big glasses.
- **Huangjiu (黄酒)**, Shaoxing yellow rice wine, in Jiangnan — also a
  cooking wine [MEDIUM — not re-checked].
- **Staging consequence**: no small glasses, no clinking, no bottles on
  the floor by the table (a real shaokao habit), no ice buckets.

### GENERAL NORMS

**Meal pattern.**

| Occasion | Typical time | Confidence |
|---|---|---|
| 早饭 breakfast (Morning Module only) | ~07:00–09:00, often bought on the street on the way to work | MEDIUM — travel-guide tier sources (ChinaHighlights, China Xian Tour) (via search) |
| **午饭 lunch** | **~11:30–13:30**, restaurants busiest 12:00–13:30 | MEDIUM — same sources |
| **晚饭 dinner (main family meal)** | **~18:00–19:30** (range 17:00–20:00); early dinner is considered good for digestion | MEDIUM — same sources; no time-use survey found |
| 夜宵 late-night snack | ~21:00–01:00: skewers, crayfish, noodles | LOW — not re-checked |

- **§5.2 contrast**: China's dinner is ~3 hours earlier than Spain's and
  around the US's ~18:00; lunch is a real hot meal (not a sandwich),
  often eaten out or from a delivery box by office workers. A dinner
  scene in winter is lamp-lit and dark at the window by 18:00 in the
  north. [EDITORIAL; times MEDIUM]

**Table norms.**

- **Place setting**: a small rice bowl, a small plate or bone dish, a
  pair of chopsticks (on the right, on a rest), a ceramic soup spoon, and
  a teacup [HIGH — Wikipedia "Customs and etiquette in Chinese dining" and
  others (via search)]. **Stage without the teacup** (rule 4).
- **Rice bowl is lifted to eat** — so it is small and light, not a large
  Western bowl [HIGH — etiquette sources].
- **Shared dishes, several at once**: a home dinner for three is typically
  3 dishes + 1 soup (三菜一汤) [EDITORIAL phrase, widely used; not
  independently re-checked]. Restaurant tables for 6–12 are **round with
  a glass turntable** (lazy Susan) [HIGH].
- **Serving chopsticks (公筷)** placed with dishes in public; at home family
  members often use their own [HIGH — Chinese Language Institute,
  Wikipedia].
- **Bones and shells** go on the small plate or the table, not in the
  rice bowl [MEDIUM — not re-checked].
- **Condiments on the table**: in noodle shops, dark vinegar (醋) and
  chilli oil (辣椒油) in jars; in dumpling houses, vinegar with garlic;
  at home, condiments are cooked in, not served [MEDIUM — not re-checked].
- **Restaurant tableware in sealed plastic wrap** (消毒餐具 — a cup, bowl,
  plate and spoon shrink-wrapped as a set) is a very common, very Chinese
  detail of casual restaurants [MEDIUM — not re-checked; uncontested].
  The wrap usually carries printed text — keep it blurred or unwrapped.

### SCALE REFERENCE — CHINA

**Product anchors.**

| Format | Size | Confidence |
|---|---|---|
| **330 mL classic can (经典罐)** | **115.2 mm tall, 66.1 mm diameter** (brand file) | HIGH for format; dims from `coca-cola-guidelines.md` §4.3 |
| **330 mL sleek can (摩登罐)** | **~145 mm tall, ~57 mm diameter** | HIGH for format; LOW-MEDIUM for dims (one tier-4 source) |
| 200 mL mini can | current; dims not found | MEDIUM-HIGH (format) |
| 275 mL / 200 mL glass | current; heights not found | MEDIUM (format) |
| 300 / 500 / 888 mL, 1.25 / 2 L PET | current; ~165 mm (500 mL), ~260 mm (1.25 L), ~310 mm (2 L) | MEDIUM (formats); LOW (heights) |

Sources: [JD — 可口可乐330](https://www.jd.com/hprm/1320e9d31ba7a821a534.html);
[Suning — 可口可乐摩登罐 330ml×24](https://product.suning.com/0071516120/621620273.html);
[Air China Phoenix Miles — 可口可乐摩登罐330毫升(24)](https://ffp.airchina.com.cn/app/product/detail?id=580933);
[Baidu Zhidao — 摩登罐 dimensions](https://zhidao.baidu.com/question/1500262569584137899.html);
[Jiemian — 可口可乐再推"迷你罐"](https://m.jiemian.com/article/11261890.html);
[VOA Chinese — 城市摩登罐 2018](https://www.voachinese.com/a/coca-cola-china-20180420/4358405.html);
[JD — 可口可乐玻璃瓶](https://www.jd.com/chanpin/2651326.html);
[COFCO — 可口可乐/含糖可乐](https://productandservice.cofco.com/search/single-products/2836) (blocked; via search).

**Food and table scale anchors.**

| Item | Real size | Relative to the classic can (11.5 × 6.6 cm) | Confidence |
|---|---|---|---|
| **Xiaolongbao (Nanxiang)** | **~2.5 cm across per one standard; ~18 pleats; 8 g wrapper + 14–16 g filling; wrapper ~1.5 mm** | the sourced 2.5 cm is under half the can's width; a 24 g dumpling more plausibly sits ~3.5–4 cm across — treat as "about half the can's width" | MEDIUM-HIGH for pleats and weights (Wenhui, Jiading gov, Baike via search); the 2.5 cm diameter looks small against the 24 g weight — LOW, see entry |
| **Tianjin jianbing guozi** | **crêpe 38–45 cm across** before folding | more than three can-heights across, folded to a packet ~15 × 12 cm | HIGH (Tianjin standard via The Paper, 21 Jingji) |
| **Bai ji mo (Xi'an flatbread)** | **10.5–11 cm across** | about the can's height across | MEDIUM (Baidu Baike via search) |
| Beijing pork-and-scallion baozi | ~18 pleats; ~160 g each in some shops (!) — a typical shop bun is smaller | ~8–10 cm across (LOW) — a bit wider than the can | LOW-MEDIUM (one Beijing source via search) |
| Har gow (虾饺) | 12–13 pleats; ~4–5 cm long (size not sourced) | about the can's width long | HIGH for pleats (Baidu Baike, Southcn); LOW for size |
| Crossing-bridge noodle bowl | **> 22 cm across** (Yunnan food-safety standard); raw meat slices ≤ 2 mm | about twice the can's height across | HIGH-MEDIUM (Yunnan standard via search) |
| Guobaorou pork slice | ~1.5 mm raw; fried pieces ~6–8 × 4–5 cm (size not sourced) | slice about the can's width long | MEDIUM (thickness, Sohu); LOW (size) |
| Duojiao yutou fish head | head of ~1 kg (2 jin) is the recommended size | a head about 1.5–2 can-heights long | MEDIUM (Sina/Weibo food columns via search) |
| Cantonese mooncake | **100 g or 125 g** standard moulds (also 50–75 g) | a 125 g cake ~7–8 cm across, ~3.5 cm tall — about the can's width | MEDIUM for weights (Xiachufang, multiple recipes); LOW for diameter |
| Rice bowl (饭碗) | ~11–12 cm across, ~6 cm deep | about the can's height across, half its height deep | LOW — not re-checked |
| Chopsticks | ~24–27 cm | a little more than twice the can's height | LOW — not re-checked |
| Ceramic soup spoon | ~13–14 cm | a bit longer than the can is tall | LOW — not re-checked |
| Bamboo dim sum steamer | ~13–15 cm across for 3–4 dumplings | about the can's height across | LOW — not re-checked |
| Standard dinner/serving plate | 20–28 cm (oval serving plates to ~30 cm) | 2–2.5 can-heights | per `tableware-composition-reference.md` §2 |

**Vessels.**

| Vessel | Look | Confidence |
|---|---|---|
| **Rice bowl (饭碗)** | Small white or blue-and-white porcelain bowl with a foot ring | MEDIUM — not re-checked |
| **Bamboo steamer (蒸笼)** | Round woven bamboo basket with slatted base, stacked, lined with paper or cabbage leaf | HIGH (dim sum sources) |
| **Hot pot — 九宫格 / 鸳鸯锅** | Chongqing: a shallow round steel pot divided by a grid into nine squares; national chains: a round pot split into two halves by an S-curve (spicy red / clear) | HIGH (Zhihu, Sina, China Daily via search) |
| **Beijing copper chimney pot (铜锅)** | Brass/copper pot with a central charcoal chimney and a ring moat of clear broth | HIGH (Beijing market bureau, Beijing Daily via search) |
| **Large noodle bowl (大碗)** | Ceramic, ~18–22 cm, deep; Lanzhou shops use plain white or blue-rimmed bowls | MEDIUM — not re-checked |
| **Clay pot (砂锅 / 煲仔)** | Unglazed outside, glazed inside, with a wire cage | LOW-MEDIUM — not re-checked |
| **Oval serving plate (鱼盘)** | Long white porcelain plate for a whole fish, ~35–40 cm | LOW — not re-checked |
| **Iron wok-plate / iron pot** | Dongbei iron-pot stews cooked at the table in a big black wok | LOW — not re-checked |

### TEXTURE LEXICON (use in prompts)

| Surface | Use | Avoid |
|---|---|---|
| Plain white rice | "fluffy short-grain white rice, individual grains visible, slightly glossy, heaped just above the rim of a small bowl" | "fried rice," "sushi rice pressed," "risotto" |
| Steamed wheat bun (包子/馒头) | "matte, soft, bright white dough, faintly dimpled, with fine spiral pleats twisted to a point on top" | "bread roll," "golden-baked," "shiny glaze" |
| Dumpling wrapper, boiled | "thin, smooth, slightly translucent white wrapper with a crimped half-moon edge, a faint wet sheen" | "fried gyoza," "ravioli" |
| Har gow wrapper | "translucent, glassy, pale wrapper through which the pink shrimp shows, fine pleats along one side" | "opaque white," "fried" |
| Chilli oil / red oil | "a slick of clear, deep ruby-red oil pooling at the edge, with toasted chilli flakes and seeds sunk in it" | "tomato sauce," "ketchup," "orange grease" |
| Sichuan peppercorn | "small, split, rust-brown husks scattered, some ground to a brown powder on top" | "black pepper" |
| Soy-braised glaze (红烧) | "deep mahogany-brown, glossy, sticky glaze clinging to each piece, reflecting light" | "barbecue sauce," "black," "burnt" |
| Wok hei stir-fry | "glossy, lightly oiled, barely sauced pieces with small scorched edges, vegetables bright and just-cooked" | "saucy takeaway," "gloopy cornstarch sauce" |
| Roast duck skin | "thin, lacquered, crackling mahogany skin, a layer of white fat beneath, pale pink-white meat" | "fried chicken," "Peking-duck-as-orange-glazed" |
| Hand-pulled noodles | "long, even, pale yellow wheat noodles, slightly irregular, springy, folded in the bowl" | "ramen with egg," "spaghetti" |

The most common model failures for Chinese food: **American-Chinese
takeaway** (orange chicken, fortune cookies, white paper boxes with wire
handles, egg rolls); **one plated portion per person** instead of shared
dishes and rice bowls; **Japanese conflation** (ramen with a soft egg and
nori, sushi, a tatami room, pointed Japanese chopsticks); **chopsticks
upright in rice**; **"Oriental" décor** (red lanterns and dragons in every
room, gongs). Negate them explicitly. [EDITORIAL]

### VISUAL & PLATING NORMS

- **Palette**: white rice and white porcelain; the mahogany brown of soy
  braises; the ruby red of chilli oil (zones 4, 5); the translucent pale
  of dim sum; bright green of greens and scallion; dark vinegar;
  bamboo-steamer tan. [EDITORIAL]
- **Home plating is unfussy**: food piled or poured onto a plate from the
  wok, no garnish towers; a scatter of scallion or coriander at most.
  Restaurant plating is fuller and glossier, still shared. [MEDIUM — not
  independently re-checked]
- **Whole fish and whole birds** are served whole at celebrations (fish =
  余 "surplus"; chicken = 吉 "luck") [HIGH — New Year sources].
- **Steam and freshness**: steamers breathing, soup and noodles steaming,
  hot pot boiling with a visible roll, stir-fries glossy and just off the
  wok. [EDITORIAL]
- **Grade neutrally.** Avoid the red-gold "Oriental" haze. Use the zone's
  real light: bright dry northern sun, soft grey Jiangnan humidity,
  subtropical Guangzhou glare, Chongqing fog, clear Yunnan highland light.
  [EDITORIAL]

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **China is now two-thirds urban**: the urbanisation rate of permanent
  residents reached **67.89% at the end of 2025** [HIGH — NBS 2025
  Statistical Communiqué; CEIC and Statista agree]. The 2020 census
  recorded **63.89% urban**, an average household of **2.62 people** (down
  from 3.10 in 2010) [HIGH — NBS census bulletin, gov.cn].
- **"At home" in a city usually means a flat in a residential compound
  (小区).** The census does not publish a flat-vs-house share in the
  snippets found, but: urban households average **~92 m²** (36.5 m² per
  person), and **36.7% of urban households live in buildings with a lift**
  (17.4% in towns, 1.8% in villages) [MEDIUM-HIGH — 2020 census yearbook
  via Beijing gov, The Paper, CBNData (via search)]. Read together: the
  urban default is an apartment, either a **6–7-storey walk-up block**
  from the 1980s–2000s or a **high-rise tower (18–33 storeys)** in a gated
  compound; rural homes are self-built 2–3-storey houses. [MEDIUM for the
  inference; the lift figures are MEDIUM-HIGH]
- **§5.2 contrast**: like Spain and Türkiye (flats), the opposite of
  Mexico's single-house majority; households are smaller than Türkiye's
  (2.6 vs ~3.1).
- **Interior markers (pick one or two per scene)**: a compact kitchen with
  a gas hob and a large carbon-steel wok, a range hood; a dining table in
  the living room (客厅) near the sofa and a large TV wall; tiled floors
  (light ceramic tile is very common), white walls, an enclosed balcony
  (封闭阳台) with laundry racks and plants; a rice cooker on the counter;
  slippers at the door; a small red decoration or a paper-cut on a
  window at New Year only. [MEDIUM — uncontested general knowledge, not
  individually re-checked]
- **Exterior markers**: gated compounds of identical towers, air-
  conditioner units on every façade, security grilles on low floors,
  electric scooters (e-bikes) parked in rows, street-level shops with
  roll-up shutters, plane-tree-lined streets in Shanghai and many
  eastern cities. [MEDIUM — not individually re-checked]
- **Gen Z lens (§5.3)**: young urban workers often rent a room in a shared
  flat (合租) or a small studio; university students live in 4–6-person
  dormitories; food delivery (外卖) is a daily habit [LOW-MEDIUM — not
  independently re-checked]. Stage a young adult at a small desk-table
  with a delivery box unpacked onto plates, a laptop, a plant and a rice
  cooker — neither a squalid dorm nor a showroom.
- **Caricature avoidance [EDITORIAL]**:
  - **"Oriental" China**: red lanterns, dragons, gongs, silk robes,
    pagodas and the Great Wall behind every table, fortune cookies,
    chopsticks in hair.
  - **American-Chinese takeaway China**: white oyster-pail boxes, orange
    chicken, egg rolls, fortune cookies — none of these is mainland food.
  - **Japanese or Korean conflation**: tatami, low tables with floor
    cushions, sushi, kimchi, metal Korean chopsticks.
  - **Poverty or pollution framing**: crumbling hutongs and smog as the
    "authentic" default.
  - **Tech-glass-only China**: a sterile glass-tower backdrop in every
    scene.
  - The ordinary baseline is a tidy, lived-in apartment table under a
    ceiling lamp, a busy clean noodle shop, a loud round restaurant table.

#### Scenario: Casual lunch at home — 1 person

Weekday lunch at home is less common for office workers than a canteen
or delivery [LOW — not re-checked]. Stage a retired person or a remote
worker at the kitchen or dining table, ~12:00: a bowl of rice, one plate
of 西红柿炒鸡蛋 and one of stir-fried greens; or a large bowl of noodles.
Gen Z: a 外卖 delivery lunch (a rice box of 宫保鸡丁 or a bowl of noodles)
unpacked onto a plate at a small desk. Hero (from the brief; formats that
fit): a 330 mL can or a 500 mL PET beside the bowl. No teacup. [EDITORIAL]

#### Scenario: Casual lunch at home — 2 people

Two at a small square table: two rice bowls, two or three shared dishes
(tomato and egg, a stir-fried meat dish, greens), chopsticks on rests.
Or two bowls of boiled dumplings with a shared dish of vinegar (zone 1,
6). Hero (from the brief; formats that fit): two cans, or a 888 mL PET
with two glasses. [EDITORIAL]

#### Scenario: Casual lunch at home — 3 people

A weekend family lunch: three rice bowls, 三菜一汤 in the centre — a
braise, a stir-fry, a green vegetable and a soup in a larger bowl.
Zone 1 or 6 variant: a plate of dumplings at the centre. Hero (from the
brief; formats that fit): a 1.25 L PET in the midground with a glass at
each place. [EDITORIAL]

#### Scenario: Dinner at home, indoors

**The main family meal** (~18:00–19:30): a square or round dining table
under a warm ceiling lamp, 3–5 people (often three generations), four to
six shared dishes — a whole steamed fish (zone 2, 3), 可乐鸡翅, a braise,
tomato and egg, greens — and a soup, a rice bowl at each place.
Evening dark at the window in winter. Hero (from the brief; formats that
fit): a 1.25 L or 2 L PET in the midground, one filled glass per place.
[EDITORIAL; times MEDIUM]

#### Scenario: Meal outdoors at home

Private gardens are rare in cities; the realistic outdoor-at-home
registers are **a rural courtyard (院子)** with a folding table for a
family meal, **an apartment balcony** (small, usually enclosed), or a
**park or riverside picnic** on a mat (a growing weekend habit, with
camping gear, among young urban people — 露营) [LOW — not re-checked].
Stage: a folding table in a courtyard with tiled or earth ground, shared
dishes, rice bowls; or a picnic mat with boxed snacks, fruit and skewers
from home. Hero: a 1.25 L PET with glasses, or cans. [EDITORIAL]

#### Scenario: Meal on the go — 1 person

A **rou jia mo** on its paper on a stall ledge (zone 7); **jianbing** on
its paper bag (Morning Module); **a skewer tray** at a night stall
(beer negated); **a bowl of noodles** on a small shop table; a box of
**fried rice** or a **delivery rice box** on a park bench or office desk.
Hero (from the brief; formats that fit): a 330 mL can or 500 mL PET on
the ledge or bench. **§5.2 contrast**: like Mexico and Türkiye, street
and counter food is dense and everyday. [MEDIUM — not independently
re-checked; uncontested]

#### Scenario: Away from home — 1 person at a restaurant/café

A **noodle shop (面馆)** at 12:30: a big bowl of Lanzhou beef noodles or
zhajiangmian on a small table with vinegar and chilli-oil jars; or a
Cantonese **roast-meat rice plate (烧腊饭)** at a canteen table; or a
fast-casual **mala tang** bowl. Hero: a can or a 500 mL PET. [EDITORIAL]

#### Scenario: Away from home — 2–3 people

A **hot pot table** (zone 4 or a national chain) with a split pot and
plates of raw ingredients; a **dim sum table** with stacked steamers
(zone 3; exclude the teapot, which every real table has); a **home-style
restaurant** round table with a turntable and 4–5 shared dishes; a
**Peking duck** table with the carved duck (zone 1). Hero: two cans or
two small glass bottles, or a 1.25 L PET. **Never a banquet toast
table** (hard rule 3). [EDITORIAL]

---

## CROSS-CUTTING REGISTER: STREET FOOD & NIGHT MARKETS

- **Breakfast stalls**: a jianbing griddle cart, a steamer stack of
  baozi, a youtiao fryer; paper bags; commuters. Morning Module only.
  [MEDIUM — not independently re-checked]
- **Skewers (烤串 / 撸串)**: long charcoal troughs, cumin-and-chilli lamb
  (zone 7 origin, now national), low tables and plastic stools on the
  pavement at night. Beer is the norm — negate it. [MEDIUM]
- **Mala tang / chuan chuan (串串, zone 4)**: bamboo sticks of ingredients
  in a pot of red broth, counted by sticks. [LOW-MEDIUM — not re-checked]
- **Night markets**: a real register in many cities; stall signage and
  price boards everywhere — expect to fight legible text. [EDITORIAL]
- **Staging**: food on a ledge, stool, tray or paper, never in hand.

## CROSS-CUTTING REGISTER: FESTIVALS & SEASONAL OCCASIONS

China's traditional festivals follow the lunisolar calendar. As of
drafting (2026-09-29) the 2026 dates below are past; the 2027 dates are
the next a production would hit.

| Occasion | 2026 | 2027 | Confidence |
|---|---|---|---|
| **Spring Festival / Lunar New Year (春节)** | **17 Feb 2026** (public holiday 15–23 Feb) | **6 Feb 2027** (Year of the Goat); New Year's Eve (除夕) **5 Feb 2027** | HIGH — Chinese consulate 2026 holiday notice, ChinaHighlights, Wikipedia, Smithsonian (via search) |
| Lantern Festival (元宵节) | ~3 Mar 2026 (not re-checked) | **~20 Feb 2027** (15th day — computed, not independently re-checked) | LOW-MEDIUM |
| **Dragon Boat Festival (端午节)** | **19 Jun 2026** | **9 Jun 2027** (Wednesday) | HIGH — travelchinaguide, ChinaHighlights, National Today, Chinese holiday calendars (via search) |
| **Mid-Autumn Festival (中秋节)** | **25 Sep 2026** | **15 Sep 2027** (Wednesday) | HIGH — Chinese Language Institute, chineselunarcalendar.org, Chinese holiday calendars (via search) |
| National Day (国庆) | 1 Oct (Golden Week) | 1 Oct | HIGH (fixed) — holiday lengths vary |

The 2027 bridge days (调休) for Dragon Boat and Mid-Autumn had not been
announced as of the sources found; the State Council publishes them late
in the previous year [MEDIUM].

- **New Year's Eve dinner (年夜饭, 除夕)** — the most important family meal
  of the year, at home, three generations. **Regional split**: the
  **north eats jiaozi** (dumplings, shaped like silver ingots — wealth;
  "交子" the changing of the year) and often a **whole stewed chicken**;
  the **south eats niangao** (glutinous rice cake — "higher every year")
  and **fish is indispensable** (鱼 yú = 余 "surplus", 年年有余); across the
  country, **fish and chicken** (鸡 jī = 吉 luck) are the shared symbols
  [HIGH — Tencent News, Huaxia.com, 163.com, Laodongbao (via search)].
  **Staging**: a crowded round or square table, 8–10 dishes, a whole
  steamed fish on a long oval plate (often left partly uneaten on
  purpose — the "surplus"), a plate of dumplings (north), the hero PET in
  the midground, warm lamp light, red decorations blurred at the edge.
  **Negate baijiu and red wine**, both strong priors at this table.
  Real but text-heavy: 春联 couplets and 福 characters — blur or omit.
  [EDITORIAL]
- **Lantern Festival**: **tangyuan / yuanxiao** (glutinous rice balls)
  [MEDIUM — not re-checked]; lanterns.
- **Dragon Boat Festival**: **zongzi** (see entry: sweet reed-leaf north,
  savoury bamboo-leaf south) and dragon-boat races [HIGH for zongzi
  regionality]. Do not stage realgar wine (雄黄酒) — alcohol.
- **Mid-Autumn Festival**: family reunion, **mooncakes** shared and gifted
  in boxes, moon-viewing on a balcony or courtyard, pomelo and osmanthus
  [MEDIUM — mooncake weights from recipes; customs not re-checked].
  Staging: an evening balcony table with a cut mooncake, a whole one, a
  pomelo, a full moon in a clear sky; the hero on the table. Gift boxes
  carry heavy text — blurred. Tea is the traditional pairing — negate.
- **Qingming (tomb-sweeping, ~5 April)**: a mourning occasion — **no TCCC
  staging** [EDITORIAL].
- **Religious and ethnic festivals** (Eid among Hui and Uyghur Muslims,
  Tibetan Losar) — not researched; do not stage without SME review.

Full staging for each celebration: see CELEBRATIONS & LARGE GATHERINGS below.

## CELEBRATIONS & LARGE GATHERINGS

Per `country-file-schema.md` §5.7: the frame shows the operator's party
(1, 2 or a small group of identical place settings) at one stretch of a
bigger event, and the crowd is implied. Every China hard rule applies:
own rice bowl per diner with shared dishes, chopsticks never upright,
halal tables stay halal, no tea beside the hero, and **no baijiu, red
wine or beer at any celebration table**, which is where they are the
strongest prior of all.

### How large gatherings work here

- **Who and how many.** Celebrations are family-led and banquet-shaped.
  Festival meals (New Year's Eve, Mid-Autumn) gather three generations,
  roughly 6–15 people [EDITORIAL estimate]. Life-event banquets (weddings,
  full-month, an elder's birthday) are hosted by the family for relatives,
  colleagues and friends and run to **many round tables of about ten**
  [MEDIUM — 婚礼纪 and 中国婚博会 wedding-menu guides via search, tier 3;
  diaspora sources agree on the round-table-of-ten form]. Total guest
  counts were not sourced this pass.
- **Where (intake venues).** *Home indoor*: New Year's Eve dinner (a
  2025 China Youth Daily survey found **83.6% of respondents eat 年夜饭 at
  home**, 94.8% in the Northeast), Mid-Autumn, the weekend family dinner
  [MEDIUM-HIGH — 中国青年报社会调查中心 survey of 1,347 people, via Sina;
  CCTV]. *Restaurant*: banquet halls and private rooms (包间) for weddings,
  full-month and birthday banquets, and a fast-growing share of New
  Year's Eve dinners (Meituan reported online 年夜饭 bookings up 305%
  year on year in January 2025) [MEDIUM — Meituan data via Sina Finance,
  Guangzhou Daily; commercial source]. *Home outdoor*: a rural courtyard
  (院子) with rented folding tables for a village banquet (农村流水席)
  [LOW — not verified this pass]. *Other*: a hotel ballroom.
- **Table form and serving style.** The **round table for ten with a
  glass turntable** is the banquet unit; dishes arrive in sequence,
  **cold dishes (凉菜) pre-set on the turntable before guests sit**, then
  hot dishes, soup, staple (rice, noodles, dumplings) and fruit; plates
  are not cleared, so the turntable gets more crowded as the meal goes
  on [MEDIUM — wedding-menu guides via search; turntable HIGH from GENERAL
  NORMS]. At home it is the family table extended with a folding round
  top, every dish placed at once.
- **Plates and cutlery that differ from everyday.** Banquet settings add
  a small side plate, a ceramic spoon on a rest, chopsticks in a paper
  sleeve (printed, keep blurred), a folded napkin in a glass and **two or
  three glasses per seat** (water, wine, baijiu thimble glass); **stage
  one glass only** for the hero. Restaurants often use the shrink-wrapped
  sterilised set (GENERAL NORMS). Home festival tables bring out the
  matching good china.
- **Snapshot-staging default for China [EDITORIAL].** The most authentic
  crowd cues: (1) **a crowded turntable** with more dishes than the
  visible diners could eat, overlapping and partly cropped; (2) **a second
  round table soft in the background** with its own turntable and red
  chair covers (banquets); (3) **red decor at the edge**, blurred so no
  character is legible (囍 at weddings, 福 and 春联 at New Year, a 寿 at
  birthdays). Empty chairs with chair covers pushed in also work. Never
  count out ten place settings.

#### Celebration: New Year's Eve reunion dinner (年夜饭, 除夕)

- Type: calendar holiday
- When: 除夕, the eve of Spring Festival (5 Feb 2027); dinner ~18:00–20:00,
  often running into the 20:00 CCTV gala on the TV; intake time
  **evening**.
- Gathering: three generations at the grandparents' or parents' home,
  6–15 people, at the dining table extended with a round top [MEDIUM —
  83.6% eat at home per the 2025 China Youth Daily survey; headcount
  EDITORIAL]. A minority book a restaurant private room.
- The spread: 8–10 or more dishes, every one symbolic: a **whole steamed
  fish** on a long oval plate (see catalog: Qingzheng yu), a whole stewed
  or white-cut chicken, **jiaozi** in the north (see catalog: Jiaozi),
  **niangao** in the south, red-braised pork (see catalog: Hongshao rou),
  cola chicken wings (see catalog: Kele jichi), braised prawns, cold
  dishes (sliced braised beef, jellyfish, pickled vegetables), greens, a
  soup [HIGH for fish/chicken/jiaozi/niangao — see the festivals
  register sources]. A real table carries 8–12 dishes.
- Snapshot staging: **1 setting**: a rice bowl (or a small plate of
  jiaozi with a vinegar dish in the north), chopsticks on a rest, a
  spoon, one glass with the hero; in front, the edge of the fish plate
  and two overlapping dishes, more cropped by the frame. **2 settings**:
  two identical settings at one curve of the round table, the whole
  fish between them with its head and tail in frame, the chicken plate
  and jiaozi plate overlapping behind. **Small group**: one arc of the
  table, 6–8 dishes crowding the centre and running out of frame, a
  multi-serve bottle in the midground if the brief allows. Crowd cues:
  a third and fourth rice bowl at the frame edge; the red glow of
  decorations (lanterns, paper-cuts) blurred on the wall; a TV glow
  behind (no legible screen).
- Decor and cues: red paper-cuts on windows, small red lanterns, a dish
  of tangerines, sunflower seeds and candy on the coffee table behind.
  Clichés: dragons, gongs, firecrackers in the room, qipao.
- Never stage: baijiu or red wine (the strongest prior); legible 福 or
  春联; ancestor offerings (an altar with incense); red envelopes being
  handed over (hands).
- Confidence and sources: [HIGH] symbolic dishes; [MEDIUM-HIGH] home
  share (China Youth Daily survey via Sina, CCTV); [EDITORIAL] staging.

#### Celebration: Mid-Autumn reunion dinner (中秋团圆饭)

- Type: calendar holiday
- When: 15th of the 8th lunar month (15 Sep 2027); dinner ~18:00–19:30,
  then mooncakes and moon-viewing later; intake time **evening** (or
  golden-hour for the balcony mooncake table).
- Gathering: the family reunion at home, 4–12 people; *home indoor*, with
  the balcony or courtyard for the moon [MEDIUM — Xinhua and China
  Intangible Cultural Heritage (ihchina.cn) on the 家宴/赏月 custom].
- The spread: a family feast with seasonal **hairy crab** (Jiangnan,
  zone 2; steamed whole, bright orange), **osmanthus duck** (桂花鸭, pale,
  salted, Nanjing), a **soup** (pigeon, fish-head tofu or chicken soup),
  plus the household's usual festive dishes (whole fish, braised pork),
  and afterwards **mooncakes** cut into wedges, pomelo and osmanthus
  cake [MEDIUM — Xinhua, ihchina.cn, chinafolklore.org via search; see
  catalog: Yuebing; Qingzheng yu; Hongshao rou]. 6–8 dishes.
- Snapshot staging: **1 setting**: rice bowl, chopsticks, a small plate
  with one steamed crab, the soup tureen and a duck plate cropped behind.
  **2 settings**: two settings, a platter of crabs and the duck between
  them, the soup tureen at the edge. **Small group**: one arc of the table
  with 5–6 dishes running out of frame. For the after-dinner register, a
  balcony table with a plate of mooncakes cut in quarters, a pomelo, the
  full moon in a clear sky. Crowd cues: an open mooncake gift box
  (blurred text) set aside; a fourth chair at the edge; children's
  lanterns soft in the background.
- Decor and cues: rabbit lanterns, osmanthus sprigs. Clichés: Chang'e
  costumes, oversized moons.
- Never stage: tea (the traditional mooncake pairing) or osmanthus wine
  (桂花酒, alcohol); legible box text.
- Confidence and sources: [MEDIUM]; crab and osmanthus duck are regional
  (zone 2), not national.

#### Celebration: Wedding banquet (婚宴)

- Type: life event
- When: midday or evening banquet on the wedding day (intake time
  **midday** or **evening**); auspicious dates and the National Day and
  May Day holidays are popular [LOW — not verified this pass].
- Gathering: many round tables of ten in a restaurant banquet hall or
  hotel ballroom (*restaurant* / *other*); in villages a courtyard
  banquet with rented tables (*home outdoor*).
- The spread: an even number of dishes for "pairs", commonly **16–24 per
  table** (for example 6 cold dishes, 12 hot dishes, 2 snacks, a soup
  and a fruit platter), with auspicious menu names (龙凤, 鸳鸯, 百年好合)
  [MEDIUM — 婚礼纪 (hunliji.com), 中国婚博会 (jiehun.com.cn), Zhihu, via
  search]. Fish served whole (abundance) is expected everywhere; in the
  Cantonese register a **whole roast suckling pig** (red-brown crackling
  skin, served in a row of tiles on a long platter) opens the banquet
  [MEDIUM — SCMP; diaspora banquet sources agree]. Also lobster or
  prawns, a whole chicken, braised abalone or sea cucumber, a sweet soup
  and a fruit platter (see catalog: Qingzheng yu; Siu mei fan for the
  roast-meat register). **Halal (Hui/Uyghur) weddings carry no pork.**
- Snapshot staging: **1 setting**: a banquet setting (side plate, rice
  bowl, chopsticks in a blurred sleeve, spoon on a rest, folded napkin),
  one glass with the hero, the turntable edge in front crowded with two
  cold dishes and the whole-fish plate. **2 settings**: two settings at
  one curve of the table, the suckling-pig platter (Cantonese brief) or
  the fish between them, several cold dishes overlapping. **Small group**:
  3–4 settings in an arc, the turntable full and cropped, the next round
  table soft behind with its red chair covers. Crowd cues: a small red
  box or bag of wedding candy (喜糖) at each seat; the next table behind;
  red-and-gold stage lighting blurred.
- Decor and cues: red table runners, red or gold chair covers, floral
  centrepieces, a stage glow far behind. Clichés: dragon-and-phoenix
  costumes on every guest.
- Never stage: the toasting round (敬酒) or any baijiu, wine or beer on
  the table; the **wedding cigarettes (喜烟)** that sit on many real
  banquet tables; legible 囍; the bride and groom identifiable;
  the tea ceremony.
- Confidence and sources: [MEDIUM] (Chinese wedding-planning sites, tier
  3, and SCMP); [EDITORIAL] staging.

#### Celebration: Elder's longevity birthday banquet (寿宴)

- Type: life event
- When: milestone birthdays of parents and grandparents (60, 70, 80, by
  custom often counted in the Chinese way) [LOW for milestone ages — not
  verified this pass]; lunch or dinner (**midday** or **evening**).
- Gathering: children and grandchildren host relatives, 10–40, in a
  restaurant private room or banquet hall (*restaurant*), or at home for
  a smaller family meal [MEDIUM — contextualchinese.com and
  lunarbirthdayfinder via search, tier 4; scale EDITORIAL].
- The spread: a banquet table (see the wedding entry for the form) with
  two signature items: **longevity noodles (长寿面)**, long uncut noodles
  in a bowl, and **longevity peach buns (寿桃包)**, white steamed buns
  with a blushed pink tip and a leaf-green dough leaf, piled in a stack
  or pyramid, about the can's width each [MEDIUM — Wikipedia "Longevity
  peach", CBC Kids, Huang Kitchen; the noodle custom is widely reported].
  A Western cream cake now often joins them.
- Snapshot staging: **1 setting**: a small bowl of longevity noodles at
  the setting, the hero beside it, a plate of peach buns and a whole
  fish cropped on the turntable. **2 settings**: two settings, the
  pyramid of peach buns between them as the visual centre, cold dishes
  around. **Small group**: an arc of the round table with the buns, a
  cream cake, a whole fish and other dishes running out of frame.
  Crowd cues: a large red backdrop with a gold character (寿) blurred
  beyond reading; extra chairs; grandchildren blurred.
- Decor and cues: red tablecloth, gold accents. Clichés: a "crane and
  pine" painting in every frame.
- Never stage: alcohol toasts to the elder; legible 寿 or banners.
- Confidence and sources: [MEDIUM] for peach buns and noodles; [LOW]
  milestone ages; [EDITORIAL] staging.

#### Celebration: Baby's full-month banquet (满月酒)

- Type: life event
- When: about one month after birth; lunch or dinner (**midday** or
  **evening**).
- Gathering: relatives and friends at a restaurant banquet, often a few
  tables (*restaurant*); smaller families celebrate at home [MEDIUM —
  Wikipedia "Chinese red eggs", contextualchinese.com, Nspirement; most
  detailed sources are from Singapore and diaspora communities, so the
  mainland form is less certain].
- The spread: a banquet table as above, with **red-dyed hard-boiled
  eggs** (bright red shell) and, in southern and diaspora custom,
  **pickled pink ginger**, on plates at each table [MEDIUM for red eggs,
  Wikipedia; LOW for ginger as mainland custom]. Odd numbers of eggs for
  a boy, even for a girl, are reported in some sources [LOW].
- Snapshot staging: **1 setting**: a banquet setting with a small dish
  holding two red eggs beside the rice bowl; turntable dishes cropped.
  **2 settings**: two settings, a platter of red eggs between them with a
  whole fish and a cold-dish platter. **Small group**: an arc of the
  table with the red-egg platter as the colour accent. Crowd cues: red
  balloons, a second table behind, a pram soft in the far background.
- Never stage: the baby as the subject; red envelopes in hand; alcohol
  (the name 满月酒 means "full-month wine", so negate it by name).
- Confidence and sources: [MEDIUM] red eggs; [LOW] mainland ginger custom
  and egg counts; [EDITORIAL] staging.

#### Celebration: Birthday dinner with cake and noodles (生日)

- Type: life event
- When: evening (**evening**), at home or a restaurant.
- Gathering: the family (3–6) for a child or adult, or friends (4–8) at
  a hot pot or restaurant table for young adults [EDITORIAL].
- The spread: a **bowl of longevity noodles** (often with a fried or
  poached egg on top) for the birthday person, the family's favourite
  dishes, and a **cream birthday cake** with fresh fruit from a bakery
  [MEDIUM for noodles — sources in the elder's entry; cake EDITORIAL,
  uncontested]. Young adults often celebrate over hot pot (see catalog:
  Chongqing hot pot).
- Snapshot staging: **1 setting**: a rice bowl and the noodle bowl, the
  hero, the cake at the frame edge with one slice cut. **2 settings**: two
  settings, the cake centred between them, two shared dishes behind.
  **Small group**: a hot pot table with the split pot, raw-ingredient
  plates crowding the edges and a cake box set aside. Crowd cues: a
  paper crown (no text), a cake box with the ribbon untied, extra plates.
- Never stage: legible text on the cake or candles spelling a name; beer
  at the hot pot table.
- Confidence and sources: [MEDIUM] noodles; [EDITORIAL] rest.

#### Celebration: Weekend family dinner at the grandparents' (周末回家吃饭)

- Type: community or family gathering
- When: Saturday or Sunday, lunch or early dinner (**midday** or
  **evening**).
- Gathering: adult children and grandchildren return to the parents'
  flat, 5–8 people; *home indoor* [EDITORIAL; widely described, not
  sourced this pass].
- The spread: the national home table at its fullest: 4–6 dishes and a
  soup (see catalog: The home table: rice bowl + 三菜一汤; Xihongshi chao
  jidan; Hongshao rou; Kele jichi; Qingzheng yu), a rice bowl each, or
  jiaozi made together in the north (see catalog: Jiaozi).
- Snapshot staging: **1 setting**: rice bowl, chopsticks, hero, two
  shared dishes overlapping in front. **2 settings**: two settings, three
  dishes and a soup between them. **Small group**: the table edge with
  4–6 dishes. Crowd cues: a grandparent blurred at the far end, a
  child's plastic bowl at the edge, a tray of uncooked jiaozi on a
  floured board on the side table (north).
- Never stage: tea; a teapot on the table; baijiu.
- Confidence and sources: [EDITORIAL], built on the existing scenarios.

## GAME NIGHT

Per `country-file-schema.md` §5.8: two meanings, watching sport together
and social game nights. Every China hard rule applies unchanged: own
rice bowl per diner where rice is served, chopsticks never upright,
halal tables stay halal, no tea, herbal tea or sour-plum drink beside
the hero, no legible characters, no flags or political set-dressing.
**Beer is the strongest prior in every scene in this section** (shaokao,
crawfish, mahjong evenings, KTV): negate it by name every time. Screens,
cards and tiles are never legible; no team crests, kits, sponsor marks or
league logos; no gambling as the subject. The snapshot rule (§5.7) sets
party size.

### Watch parties

Football tournaments are the big watch-party occasion, and because
European and North American matches land between late evening and
morning in China, they drive a **late-night eating economy**: during the
2026 World Cup, venues stayed open to 6 am, crawfish takeaway surged and
restaurants' dine-in viewing packages rose about 80% [HIGH — China
Daily Jul 2026, Asia News Network, Global Times]. China Daily describes
"eating skewers, drinking Coke and watching soccer" as everyday life in
the season [HIGH — China Daily]. The two stageable forms are the
**shaokao (skewer) restaurant with a big screen** and **takeaway at home
in front of the TV**; signature foods are lamb and chicken-wing skewers
on stainless trays, a big bowl of spicy crawfish, and sunflower seeds.
Basketball (CBA and NBA) is a second, home-based format, medium-high but
unverified [LOW — not verified]. Existing lines: the shaokao scene
register (`china.md:222`), the STREET FOOD register skewers bullet
(`china.md:658-660`) and the beer note in ICONIC BEVERAGES
(`china.md:373-380`); this section builds on them.

#### Watch party: Late-night football at a shaokao restaurant (World Cup, Euros, Champions League)

- When: summer tournaments (World Cup and Euros, June–July, even years)
  and the European club season (August–May). Kick-offs fall roughly
  21:00–03:00 Beijing time, so this is a **late-night** scene: intake
  **evening** with explicit late-night cues (dark street, neon, screen
  glow), never golden hour [HIGH for the late-night economy and 6 am
  venues, China Daily; kick-off arithmetic LOW]. A dawn final is the
  only morning variant.
- Gathering: 3–6 friends or colleagues, mostly young adults, at an
  indoor shaokao restaurant with a projector or big TV, or at low tables
  on the pavement outside with the screen visible through the shopfront
  [HIGH for the format, China Daily; headcount EDITORIAL]. Intake venue:
  *restaurant* (indoor) or *other: street-side tables*.
- The spread: stainless trays of **lamb skewers** dusted with cumin and
  chilli (see catalog: Yangrou chuan), grilled chicken wings, skewered
  vegetables (garlic aubergine, chives, mushrooms), grilled buns or
  mantou slices; a big bowl of **spicy crawfish** (麻辣小龙虾) with a
  stack of disposable gloves; a small dish of sunflower seeds (瓜子) or
  peanuts [HIGH for skewers and crawfish, China Daily; side dishes LOW —
  not verified]. Skewer sticks pile up in a steel cup or on the table
  edge as the count of what was eaten.
- Surface and environment: a **low folding table** (often with a
  disposable plastic cover) and red or blue **plastic stools**, or a
  laminated restaurant table; neon and fluorescent light, a smoky haze
  from the charcoal trough, the screen a large blurred green field on the
  wall. What reads as China: the stainless skewer tray, the pile of
  bare sticks in a cup, the plastic stools, the gloves beside the
  crawfish bowl.
- Snapshot staging: **1 setting**: a small plate with a few skewers laid
  across it, the shared tray cropped beside it, a bare-stick cup, hero
  on the table; the screen glow soft behind. **2 settings**: two plates
  facing the screen side of the table, one tray of lamb skewers and the
  crawfish bowl between them, gloves folded beside each plate.
  **Small group (3–4)**: the full low table with two trays, the crawfish
  bowl, a seed dish and the stick cup; a multi-serve bottle in the
  midground if the brief allows. Crowd cues: a second table of blurred
  backs of heads toward the screen (at most ~2.5 faces, none sharp),
  empty stools stacked by the wall, more skewers than the visible diners
  could finish.
- Never stage: beer bottles on the table or crates on the floor (the
  real norm; negate), baijiu; a legible screen, broadcaster bug, crest,
  kit or league logo; menu boards or shop signs with readable characters;
  betting apps or lottery (sports lottery is promoted around the World
  Cup [LOW — not verified]); a full flag of any country. In a Hui or
  Uyghur halal skewer restaurant, lamb and beef only: no pork belly
  skewers and no beer cues (hard rule 4).
- Confidence and sources: format, hours, skewers and the China Daily
  phrase [HIGH — China Daily, Asia News Network, Global Times]; side
  dishes, seeds and kick-off times [LOW]; staging [EDITORIAL].

#### Watch party: Late-night football with takeaway at home

- When: same calendar as above; late-night to pre-dawn matches watched
  at home; intake **evening** with a deep-night cue (dark window, one warm
  lamp, the TV glow) [HIGH for the takeaway surge, China Daily].
- Gathering: a couple, 2–4 flatmates or friends, or a father and adult
  son; *home indoor* (living room) [EDITORIAL].
- The spread: delivery: a large **crawfish** tub or bowl (spicy or
  garlic) with a box of gloves, a delivery bag of skewers (see catalog:
  Yangrou chuan) laid out on their foil, fried chicken in a box, a bag
  of sunflower seeds tipped into a dish with a second dish for shells
  [HIGH for crawfish takeaway; the rest LOW — not verified].
- Surface and environment: a **coffee table** (often glass-top or
  wooden) in front of a fabric sofa, a newspaper or plastic sheet spread
  under the crawfish, delivery bags on the floor (any printed app logo
  or text blurred); the TV a soft green glow; one floor lamp; dark
  window, city lights faint beyond.
- Snapshot staging: **1 setting**: a pair of gloves and a small bone
  dish of shells beside the crawfish bowl on the coffee table, hero next
  to it, the TV glow behind. **2 settings**: two sets of gloves and two
  shell dishes either side of the bowl, the skewer foil between them.
  **Small group**: the coffee table covered, the sofa running out of
  frame, a second delivery bag at the edge. Crowd cues: a third pair of
  gloves, an extra cushion on the floor.
- Never stage: beer cans (the norm at a crawfish night; negate), a
  legible TV, delivery-app branding or receipts, a phone with a betting
  or lottery screen, tea beside the hero.
- Confidence and sources: crawfish takeaway surge [HIGH — China Daily,
  Global Times]; other foods [LOW]; staging [EDITORIAL].

#### Watch party: CBA or NBA basketball at home

- When: the CBA season runs roughly October–April with evening games
  (~19:35 local), intake **evening**; NBA games land on Chinese mornings
  and are better staged as a CBA evening scene [LOW — not verified, model
  knowledge; breakfast is out of scope].
- Gathering: 2–4 friends or family; *home indoor* [LOW].
- The spread: jiaozi (see catalog: Jiaozi) or a fried-chicken delivery
  box, sunflower seeds, fruit [LOW — research notes, not verified].
- Surface and environment: coffee table, sofa, TV glow (an orange-wood
  court as a blurred field of colour), evening lamp light.
- Snapshot staging: as the takeaway entry: **1 setting** a small plate
  of jiaozi with a vinegar dish; **2 settings** two plates and one shared
  plate; **small group** the coffee table with a delivery box running out
  of frame.
- Never stage: team jerseys, NBA/CBA marks, player names or numbers, a
  legible screen; beer; tea beside the hero.
- Confidence and sources: [LOW — not verified] throughout; flagged in the
  GAP LOG.

### Social game nights

Popularity as an occasion to gather and eat around: **high**. Basis:
mahjong is China's top tabletop game and central to Spring Festival
[MEDIUM — Wikipedia "Mahjong culture", research notes]; KTV is shrinking
(enterprises fell from about 120,000 in 2015 to 56,300, still a 7-billion-
yuan market in 2024) and now skews to retirees and daytime sessions,
while board-game cafés and **jubensha** (剧本杀, script-murder role-play)
are taking its place for young people [HIGH — Xinhua 2025, China Daily
2025]. Family poker (斗地主, dou dizhu) after the reunion dinner is real
but unverified [LOW — not verified], so it gets no entry.

#### Game night: Family mahjong (Spring Festival and everyday)

- When: Spring Festival afternoons and evenings after the reunion meals
  (6 Feb 2027), and everyday at weekends; intake **golden-hour** or
  **evening**; mahjong parlours and teahouses run **midday** to evening
  [MEDIUM — research notes].
- Gathering: four players at the table with relatives watching; at home
  (*home indoor*) or in a mahjong parlour or teahouse (*other*)
  [MEDIUM].
- The spread: on a **side table**, because the mahjong table is full: a
  New Year candy tray (a round lidded tray with compartments), sunflower
  seeds, peanuts, mandarins, a fruit plate; dumplings later in the
  evening (see catalog: Jiaozi) [LOW — not verified]. Tea is the real
  drink here and is an intruder (hard rule 5).
- Surface and environment: a **square table** with a green cloth, or an
  automatic mahjong table with a recessed centre; tiles as pale
  rectangles; red New Year decor (lanterns, paper-cuts) blurred on the
  wall at Spring Festival; a TV glow in the background.
- Snapshot staging: **1 setting**: the side-table corner with a small
  plate of mandarin segments and seeds, hero beside it; the edge of the
  mahjong table soft behind with tiles face-down. **2 settings**: two
  small plates on the side table and two chairs angled toward the game
  (the watchers' seats). **Small group**: the candy tray, fruit plate and
  seed dish on the side table, the mahjong table out of focus behind, a
  multi-serve bottle in the midground if the brief allows. Crowd cues: a
  fourth chair half-cropped, a blurred onlooker, more cups and plates
  than the visible people.
- Never stage: money, chips, counters or the counting of winnings
  (mahjong for money is common; keep it clearly social); **tile faces
  turned up** (they carry characters, which is legible text; show backs
  or a soft blur); legible 福 or 春联; beer or baijiu; tea beside the
  hero; no identifiable children (implied only).
- Confidence and sources: mahjong and Spring Festival [MEDIUM — Wikipedia
  "Mahjong culture", research notes]; snacks [LOW]; staging [EDITORIAL].
  See also Celebration: New Year's Eve reunion dinner.

#### Game night: Board-game café or jubensha with friends

- When: weekend **midday** to **evening**; jubensha sessions run 3–5
  hours, often afternoon into evening [MEDIUM for the shift to these
  formats, Xinhua/China Daily; session length LOW — not verified].
- Gathering: 4–8 young adults (students, young professionals) at a café
  table or a themed private room; intake venue *restaurant* (café) or
  *other: game room* [HIGH for the trend; headcount LOW].
- The spread: café plates: fried chicken pieces, fries, a snack plate,
  milk tea (bubble tea is the companion drink and an intruder) [LOW —
  research notes].
- Surface and environment: a wooden café table, game boxes on shelves
  behind with spines blurred; for jubensha, a dim themed room, a long
  table, character booklets as closed, unreadable shapes, warm spotlight.
- Snapshot staging: **1 setting**: a plate of fries and chicken on the
  table edge, hero beside it, a closed generic game box soft behind.
  **2 settings**: two plates and one shared snack plate, a scatter of
  generic tokens at the far edge. **Small group**: the table with three
  plates and the shared plate, booklets or cards face-down. Crowd cues:
  the table running out of frame, chairs pulled up, a blurred figure
  across.
- Never stage: licensed games or branded boxes; open script booklets or
  cards with text; gore or crime-scene props from murder themes; beer;
  milk tea beside the hero.
- Confidence and sources: trend [HIGH — Xinhua 2025, China Daily 2025];
  food and staging [LOW / EDITORIAL].

#### Game night: Daytime KTV room for an older group

- When: weekday **midday** and afternoon; cheap daytime packages draw
  retirees [MEDIUM — China Daily 2025, "in tune with retirees"].
- Gathering: 4–8 friends in their 50s–70s in a private room; intake
  venue *other: KTV room* [MEDIUM].
- The spread: a **fruit platter** (watermelon, melon, cherry tomatoes,
  orange wedges on a large plate), popcorn, sunflower seeds, small snack
  plates [LOW — not verified]; tea is the real drink and an intruder.
- Surface and environment: a **low glass-top table** in front of a long
  sofa bench, a big screen as soft coloured light (lyrics unreadable),
  two microphones resting on the table, coloured LED wash.
- Snapshot staging: **1 setting**: a small plate with fruit and a few
  seeds on the table corner, hero beside it, a resting microphone soft
  behind. **2 settings**: two small plates, the fruit platter between
  them. **Small group**: the table with fruit platter, popcorn and seeds
  running out of frame. Crowd cues: the sofa curving out of frame, a
  blurred figure standing by the screen (no face).
- Never stage: beer towers or bottle buckets (the norm at evening youth
  KTV; that version is not staged); legible lyrics, song titles or
  machine brands; someone holding a microphone near the camera; tea
  beside the hero.
- Confidence and sources: KTV decline and retiree shift [HIGH — Xinhua
  2025; MEDIUM — China Daily 2025]; food [LOW]; staging [EDITORIAL].

---

## ZONE CALLOUTS (environment + dish pointers)

1. **North China & Beijing** — hutong courtyards (grey brick, red doors,
   persimmon trees), ring-road towers, dry winter sun. Wheat everywhere.
   → catalog: Jiaozi; Peking duck; Copper-pot mutton; Zhajiangmian;
   Jianbing guozi (Tianjin); Baozi.
2. **Shanghai & Jiangnan** — lane houses (石库门/里弄), plane trees, canal
   towns. Sweet-savoury, soy-rich, rice-based.
   → catalog: Xiaolongbao; Shengjian bao; Hongshao rou; Tangcu paigu;
   Yangzhou fried rice; Steamed fish.
3. **Cantonese / Guangdong** — arcaded shophouses, banyans, tea houses.
   Light, fresh, steamed and roasted.
   → catalog: Har gow; Siu mai; Char siu bao; Siu mei rice; Steamed fish;
   Egg tart (compact).
4. **Sichuan & Chongqing** — hills, stairs, fog, teahouses, neon.
   Numbing-hot (麻辣).
   → catalog: Chongqing hot pot; Mapo tofu; Kung pao chicken.
5. **Hunan** — chilli-red markets, night streets, green hills. Hot and
   sour, smoked; no numbing pepper.
   → catalog: Duojiao yutou; Hongshao rou (Mao-style variant).
6. **Northeast** — snow, Harbin's Russian-era façades, steamed windows.
   Big shared portions.
   → catalog: Guobaorou; Jiaozi.
7. **Northwest & Xinjiang** — loess, desert oases, Xi'an walls, bazaars;
   **halal (清真) in Hui and Uyghur settings — hard rule 4.**
   → catalog: Lanzhou beef noodles; Rou jia mo; Dapanji; Polo; Lamb
   skewers.
8. **Yunnan & the Southwest** — highland old towns, terraces, markets.
   Rice noodles, mushrooms, sour-spicy.
   → catalog: Crossing-the-bridge noodles.

---

## DISH CATALOG

*Fields per `country-file-schema.md` §4.5: category · lineage · variants
(§4.6, with a default when unspecified) · format (§4.4) · vessel & scale
· texture & finish · staging · model failure / confusion · confidence ·
sources · **Composition & proportions (§4.7)**. Scale anchor: the
**classic 330 mL can (11.5 cm tall, 6.6 cm wide)** unless the brief names
the sleek can (see HERO PRODUCT SLOT for the conversion). Surface shares
and counts in the §4.7 blocks are editorial synthesis from recipes,
standards and serving norms unless tagged otherwise — they need image
tests. Chinese dish names are given for brief-writers; **prompts should
use the plain-language descriptions**, per `country-file-schema.md` §7.5.*

### A. The national home table

#### The home table: rice bowl + 三菜一汤 (three dishes and a soup)

- **Category**: Everyday — home lunch and dinner. The frame every other
  home-dish entry sits inside.
- **Lineage**: National Han Chinese table grammar.
- **Form**: several shared dishes cooked in sequence in one wok, placed in
  the centre together; a soup; one small bowl of plain steamed rice per
  person (in zones 1, 6, 7 the staple may be steamed buns, dumplings or
  noodles instead). [HIGH for shared dishes + individual bowl; "三菜一汤"
  as the standard count EDITORIAL]
- **Vessel & scale**: shared dishes on 20–26 cm round or oval plates;
  soup in a 20–22 cm bowl with a ladle; rice bowls ~11–12 cm [LOW — not
  re-checked]; chopsticks ~25 cm on rests; ceramic spoons.
- **Model failure**: individual Western plates with rice and three items
  on each; a bento box; a teapot centrepiece; chopsticks upright in rice.
- **Confidence**: MEDIUM-HIGH for the grammar; sizes LOW.
- **Composition & proportions (§4.7)** — a table for three, top-down or
  45°.
  - **What dominates**: **the ring of shared dishes** (~55% of the table
    surface in frame), the three rice bowls (~15%), bare table between
    (~30%). [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count (table / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Shared dishes | 20–26 cm plates, food heaped 3–5 cm | 3 plates | Each a different colour: red-yellow egg, mahogany braise, bright green greens | Centre, touching or nearly |
    | Soup | 20–22 cm bowl, filled ~3/4 | 1 | Clear or pale broth with a few floating pieces | Centre of the ring |
    | Rice bowl | ~11–12 cm across | 3 / 1 each | Small white porcelain, rice mounded just above the rim | In front of each diner |
    | Chopsticks | ~25 cm | 3 pairs | Plain wood, bamboo, or dark melamine; square top, round tips | On a small rest, right of the bowl, tips to the left or forward |
    | Ceramic spoon | ~13 cm | 3 | White porcelain, flat-bottomed | Beside the bowl or in the soup |
    | Small plate/bone dish | ~12–15 cm | 3 | White | Under or beside the rice bowl |

  - **Arrangement**: dishes clustered in the centre so everyone can reach;
    each place has only bowl, plate, chopsticks, spoon.
  - **Vessel fill**: rice bowls full and slightly domed; shared plates
    well filled, not sparse.
  - **Served portion vs. whole**: the diner takes one or two pieces at a
    time onto the rice; nothing is pre-portioned.
  - **State cues**: steam off the rice and soup; stir-fries glossy.
  - **Absent on purpose**: teapot and teacups, a Western knife and fork,
    placemats with a composed plate each, soy sauce bottles (at home
    seasoning is cooked in), chopsticks upright or crossed.
  - **Prompt-ready line**: "A home dinner table for three seen from
    above at an angle: three plates of different stir-fried and braised
    dishes and a bowl of clear soup in the centre, a small white bowl of
    fluffy plain rice at each place, about the can's height across, with
    a pair of plain wooden chopsticks lying on a small rest and a white
    porcelain spoon beside it. No teapot, no individual composed plates."

#### Xihongshi chao jidan (西红柿炒鸡蛋, tomato and egg stir-fry)

- **Category**: Everyday — the most common home dish, often the first
  dish a person learns to cook. [MEDIUM — not independently re-checked;
  uncontested]
- **Lineage**: National home cooking.
- **Variants (§4.6)**: sweeter with added sugar (zone 2, parts of south)
  vs. saltier with scallion (north); with or without a little ketchup in
  restaurant versions. **Default**: the plain home version with scallion.
  [LOW — regional sweetness not re-checked; EDITORIAL default]
- **Vessel & scale**: a 20–22 cm plain white plate, heaped ~4 cm.
- **Texture & finish**: large, soft, fluffy curds of bright yellow egg
  with lightly browned edges, tomato wedges collapsed into a glossy
  orange-red juice that pools at the plate's edge; a scatter of green
  scallion rings.
- **Model failure**: a Western omelette; shakshuka in a pan; scrambled
  egg on toast.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one shared plate.
  - **What dominates**: egg curds ~50%, tomato ~40%, scallion ~5%, juice
    pooling ~5%. [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count (plate) | Look | Where it sits |
    |---|---|---|---|---|
    | Egg curds | irregular 3–6 cm pieces | ~12–15 (3–4 eggs) | Bright yellow, fluffy, a few golden-browned edges | Mixed through, prominent on top |
    | Tomato | wedges ~3–4 cm, softened | ~10–14 (2 tomatoes) | Red-orange, skin curling, flesh slumped | Tucked between egg pieces |
    | Tomato juice | a shallow pool | — | Glossy orange-red, slightly thick | Around the base, at the plate rim |
    | Scallion | rings ~5 mm | a pinch | Bright green | Scattered on top |

  - **Arrangement**: loosely heaped mound in the centre, juice spreading
    toward the rim; no arrangement.
  - **Vessel fill**: mound covers ~70% of the plate; rim visible.
  - **Served portion vs. whole**: diners pick pieces onto their rice; the
    juice is spooned over rice.
  - **State cues**: glossy, steaming slightly, egg still soft.
  - **Absent on purpose**: cheese, herbs other than scallion, toast, a
    folded omelette, ketchup drizzle on top.
  - **Prompt-ready line**: "A loose mound of soft, fluffy bright-yellow
    scrambled-egg curds tossed with slumped red tomato wedges on a plain
    white plate about twice the can's height across, glossy orange-red
    tomato juice pooling at the edge, a few green scallion rings on top.
    Not an omelette, no cheese, no herbs."

#### Hongshao rou (红烧肉, red-braised pork belly)

- **Category**: Everyday-to-special — home dinner, New Year, restaurant
  favourite.
- **Lineage**: Han Chinese; strongest identities in **Shanghai/Jiangnan**
  (sweet, dark soy and rock sugar) and **Hunan** ("Mao-style" 毛氏红烧肉,
  no dark soy, caramelised sugar and chilli). [MEDIUM — not independently
  re-checked this pass; widely documented]
- **Variants (§4.6)**: **Shanghai style** (default when unspecified —
  deep mahogany, very glossy, sweet) vs. **Hunan Mao style** (lighter
  red-brown, dried chillies among the cubes) vs. **Dongpo rou** (Hangzhou,
  a single large square in a small pot). **Pork dish — never in a halal
  scene (hard rule 4).** [EDITORIAL default]
- **Vessel & scale**: a 20–22 cm plate or shallow bowl; cubes ~3–4 cm.
- **Texture & finish**: each cube shows three to five layers — skin,
  fat, lean, fat — glazed in a sticky, lacquered mahogany sauce, the fat
  translucent and wobbly, skin gelatinous; a little thick sauce pooled.
- **Model failure**: American BBQ burnt ends; char siu (red-edged); dry
  roast pork belly with crackling.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one shared plate.
  - **What dominates**: pork cubes ~85%, sauce pool ~10%, garnish ~5%.
  - **Component table**:

    | Component | Real size | Count (plate / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Pork belly cubes | 3–4 cm cubes | 12–16 / 2–4 | Layered skin-fat-lean stripes visible on cut faces; lacquered deep mahogany | Stacked in a low heap |
    | Sauce | thick, sticky pool 3–5 mm | — | Glossy dark brown, reflective | Pooled underneath and at the edges |
    | Scallion / greens (optional) | a few rings or blanched bok choy halves | 0–6 | Bright green | Ring around the edge (restaurant) or none (home) |
    | Dried chilli (Hunan only) | whole, 4–6 cm | 4–8 | Dark red | Among the cubes |

  - **Arrangement**: cubes in a compact heap, layered faces turned
    outward.
  - **Vessel fill**: ~60% of the plate, rim clear.
  - **Served portion vs. whole**: 1–2 cubes onto the rice at a time.
  - **State cues**: a high gloss; slight steam; fat trembling.
  - **Absent on purpose**: crackling, char marks, sesame seeds, BBQ
    sauce, orange-red char siu edges, potato or carrot chunks.
  - **Prompt-ready line**: "A compact heap of about a dozen pork-belly
    cubes, each roughly half the can's width, showing stripes of skin,
    translucent fat and lean, lacquered in a sticky, glossy deep-mahogany
    glaze, a little thick dark sauce pooled beneath, on a white plate
    about twice the can's height across. No crackling, no grill marks,
    no sesame."

#### Qingzheng yu (清蒸鱼, whole steamed fish)

- **Category**: Special occasion and everyday in the south — obligatory at
  New Year's Eve as 年年有余 [HIGH for the New Year symbolism].
- **Lineage**: Cantonese (zone 3) and Jiangnan (zone 2) style; eaten
  nationally at New Year.
- **Variants (§4.6)**: Cantonese — a whole mandarin fish, grouper or sea
  bass, steamed, topped with fine-shredded scallion and ginger, hot oil
  poured over, light soy around [MEDIUM — not independently re-checked].
  Hunan's chopped-chilli fish head is a separate entry. **Default**:
  Cantonese style.
- **Vessel & scale**: a long oval plate ~35–40 cm; fish ~30–35 cm
  including head and tail. [LOW — not re-checked]
- **Texture & finish**: skin intact, silvery-grey, glistening; flesh
  opaque white, flaking at a cut; fine white-and-green scallion threads
  and ginger slivers on top; a pool of thin, clear-brown soy with beads
  of oil around the fish.
- **Model failure**: a grilled fish with char marks; fish fillets;
  lemon slices and parsley; Western "whole baked fish" with herbs.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one whole fish.
  - **What dominates**: the whole fish ~70% of the plate, soy pool ~20%,
    scallion-ginger threads ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Whole fish | 30–35 cm long, ~10 cm deep | 1 | Silvery-grey skin, eye clouded white, 2–3 shallow diagonal scores on the side | Lying flat, head left or right, diagonal on the plate |
    | Scallion & ginger threads | fine shreds 5–8 cm long, 1–2 mm | a loose tuft | White, pale yellow, bright green | Heaped along the back |
    | Light soy sauce | pool 3–5 mm | — | Thin, transparent amber-brown with oil beads | Surrounding the fish |
    | Coriander (optional) | sprigs | 2–4 | Green | On the tuft |

  - **Arrangement**: fish straight or slightly curved, head and tail
    intact.
  - **Vessel fill**: fish fills the oval plate almost end to end.
  - **Served portion vs. whole**: diners pick flakes of flesh with
    chopsticks directly from the fish; at New Year some is left.
  - **State cues**: steam rising; oil still sizzling on the scallion.
  - **Absent on purpose**: lemon, butter, parsley, grill marks, a filleted
    or headless fish.
  - **Prompt-ready line**: "A whole steamed fish about three times the
    can's height long lying on a long white oval plate, silvery-grey skin
    glistening with two shallow diagonal cuts, a tuft of fine white and
    green scallion threads and pale ginger slivers along its back, a thin
    pool of clear amber soy sauce with beads of oil around it, steam
    rising. Head and tail on. No lemon, no grill marks."

#### Kele jichi (可乐鸡翅, Coca-Cola chicken wings)

- **Category**: Everyday home dish, a children's favourite. **Brand-
  relevant — read the staging note.**
- **Lineage**: Modern Chinese home cooking (origin disputed: Jinan or
  Taipei) [HIGH — Chinese Wikipedia, Baidu Baike, The Paper (via search)].
- **Form**: chicken wings (usually the mid-joint) browned, then braised
  in full-sugar Coca-Cola with soy and ginger until the sauce reduces to
  a sticky red-brown glaze; sesame or scallion on top [HIGH — recipe and
  encyclopedia sources agree; "use full-sugar cola for colour" from Sina
  food column].
- **Staging note (flagged for Fernando)**: this is the one Chinese home
  dish that *contains* the hero product. Two options: (a) treat as an
  ordinary dish with the hero beside it (no cooking implied); (b) a
  kitchen scene with a can beside the wok. Option (b) shows a TCCC
  product as an ingredient — not the alcohol-mixer the project bans, but
  a brand decision nonetheless. **Default to (a) until decided.**
  [EDITORIAL]
- **Vessel & scale**: a 20–22 cm plate; wing mid-joints ~6–8 cm long.
- **Texture & finish**: glossy, sticky, reddish-mahogany glaze clinging
  to plump wings, skin tight and shiny, a little thick glaze pooled.
- **Model failure**: Buffalo wings (orange, with celery and blue
  cheese); fried crispy wings; a can poured over the plate.
- **Confidence**: HIGH for the dish; MEDIUM for plating.
- **Composition & proportions (§4.7)** — one shared plate.
  - **What dominates**: wings ~85%, glaze pool ~10%, garnish ~5%.
  - **Component table**:

    | Component | Real size | Count (plate / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Wing mid-joints | 6–8 cm long, ~3 cm wide | 10–14 / 3–4 | Plump, lacquered red-brown, shiny | Overlapping in a heap or fanned |
    | Glaze | 2–4 mm pool | — | Sticky, glossy, dark amber-brown | Beneath and between wings |
    | Sesame / scallion | seeds; rings | a pinch | White / green | Scattered on top |

  - **Arrangement**: wings heaped or fanned in a circle.
  - **Vessel fill**: ~65% of the plate.
  - **Served portion vs. whole**: one or two wings at a time; bones to the
    small plate.
  - **State cues**: very glossy, lightly steaming.
  - **Absent on purpose**: celery, dip, crispy batter, cola being poured.
  - **Prompt-ready line**: "About a dozen plump chicken wings, each a
    little longer than the can is wide, lacquered in a sticky, glossy
    red-brown glaze, heaped on a white plate about twice the can's
    height across with a little thick amber glaze pooled beneath and a
    pinch of sesame and scallion on top. Not Buffalo wings, no dip, no
    batter."

#### Jiaozi (饺子, boiled dumplings — zones 1 and 6, national at New Year)

- **Category**: Everyday in the north; **the** northern New Year's Eve
  food [HIGH — New Year sources].
- **Lineage**: Northern Chinese.
- **Variants (§4.6)**: **boiled (水饺)** — default; **pan-fried (锅贴 /
  煎饺)**; **steamed**. Fillings: pork and cabbage, pork and chive
  (韭菜), egg and chive (vegetarian), lamb or beef (halal zones). **Default**:
  boiled pork-and-cabbage, served with black vinegar. [EDITORIAL default;
  fillings not re-checked]
- **Vessel & scale**: a large plate (24–26 cm) of 20–30 dumplings, or a
  bowl per person; each dumpling ~5–6 cm long, ~3 cm tall [LOW — not
  re-checked]; a small dish of dark vinegar, optionally with garlic or
  chilli oil.
- **Texture & finish**: smooth, thin, slightly translucent white wrappers
  with a wet sheen, plump crescent bodies with crimped or pinched edges,
  faint shadow of filling showing through.
- **Model failure**: Japanese gyoza (pan-fried, thin-skinned, in a row
  with a lattice crust); Italian ravioli; har gow.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one shared plate for 2–3.
  - **What dominates**: dumplings ~90% of the plate, vinegar dish a side
    accent.
  - **Component table**:

    | Component | Real size | Count (plate / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Boiled dumplings | ~5–6 cm long, ~3 cm tall | 24–30 / 10–15 | White, smooth, glossy-wet, crescent, pinched ridge along the top | Plate covered in a single overlapping layer, some slumped |
    | Vinegar dish | ~8–10 cm saucer, 3–5 mm deep | 1 per person | Near-black, glossy; a few garlic bits or a red chilli-oil slick | Beside the plate |

  - **Arrangement**: in concentric rings or a loose single layer,
    ridges up.
  - **Vessel fill**: plate full edge to edge.
  - **Served portion vs. whole**: diners take dumplings one at a time and
    dip.
  - **State cues**: fresh from the pot — steam, a sheen of water.
  - **Absent on purpose**: a crisp brown base (that is guotie), lattice
    crust, soy sauce bottle, sesame seeds, herbs.
  - **Prompt-ready line**: "A large white plate about twice the can's
    height across covered with about two dozen plump boiled dumplings,
    each a little shorter than the can is wide, smooth glossy white
    wrappers with a pinched crescent ridge along the top, faintly
    translucent, steaming; a small saucer of near-black vinegar beside.
    Not pan-fried, no crisp base."

#### Yangzhou chaofan (扬州炒饭, Yangzhou fried rice)

- **Category**: Everyday — restaurant staple, home leftovers dish.
- **Lineage**: Jiangsu (zone 2); national.
- **Form**: day-old rice fried with egg, diced ham or char siu, small
  shrimp, peas, carrot dice and scallion; separate, golden-flecked
  grains. [MEDIUM — not independently re-checked] Plainer **蛋炒饭**
  (egg fried rice) is the home default. **Contains pork in the classic
  form** — use egg or shrimp only in a halal scene.
- **Vessel & scale**: a mound on a 22–24 cm plate, often shaped with a
  bowl into a dome ~12 cm across, ~6 cm tall.
- **Texture & finish**: every grain separate and lightly oiled, not
  clumped; pale gold with yellow egg flecks; small bright accents.
- **Model failure**: brown soy-drenched takeaway fried rice; nasi goreng
  with a fried egg on top; paella.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: rice ~75%, egg ~10%, peas/carrot ~8%, meat and
    shrimp ~7%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Rice | grains ~5 mm | dome ~12 × 6 cm | Pale gold-white, separate, glossy | The whole dome |
    | Egg | bits 5–15 mm | many | Yellow | Evenly through |
    | Peas / carrot dice | 5–8 mm | ~20–30 | Green / orange | Scattered evenly |
    | Shrimp | small, ~1.5–2 cm | 6–10 | Pink-white curls | Scattered, a few on top |
    | Ham or char siu dice | 5–8 mm | ~15–20 | Pink / red-edged | Scattered |
    | Scallion | rings | a pinch | Green | Top |

  - **Arrangement**: a neat bowl-moulded dome (restaurant) or a loose
    heap (home).
  - **Vessel fill**: dome occupies the centre ~50% of the plate.
  - **Served portion vs. whole**: often one plate per person (a single-
    dish meal), or shared.
  - **State cues**: light sheen, faint steam, no sauce.
  - **Absent on purpose**: a fried egg on top, dark soy colour,
    pineapple, sauce pool.
  - **Prompt-ready line**: "A neat dome of fried rice about the can's
    height across on a white plate, every grain separate and pale
    golden, flecked evenly with yellow egg, green peas, tiny orange
    carrot dice, small pink shrimp and pink ham dice, a pinch of
    scallion on top. No dark soy colour, no fried egg on top."

#### Tangcu paigu (糖醋排骨, sweet-and-sour spare ribs — zone 2) — compact

- **Form**: short rib pieces (~3–4 cm) fried then glazed in a dark,
  glossy sweet-vinegar sauce, sesame on top; served as a cold or warm
  starter in Shanghai/Wuxi, a home dish nationally [MEDIUM — not
  independently re-checked]. **Pork.** Model failure: bright-red
  American sweet-and-sour pork with pineapple and peppers.
- **Composition & proportions (§4.7)**: ribs ~90% of a 20 cm plate, 15–20
  pieces heaped, each ~3–4 cm with a bone end showing; glaze a sticky
  dark red-brown, glossy, clinging, a thin pool below; white sesame
  scattered; absent: pineapple, peppers, batter, red food colour.
  **Prompt-ready line**: "A heap of small spare-rib pieces, each about
  half the can's width, glazed in a sticky, glossy dark red-brown sauce
  with bone ends showing, white sesame scattered, on a small white
  plate. No pineapple, no peppers, no bright red batter." [EDITORIAL]

### B. Sichuan, Chongqing and Hunan (zones 4–5)

#### Chongqing hot pot (重庆火锅 — 九宫格 / 鸳鸯锅)

- **Category**: Social meal — friends, colleagues, family; dinner and
  late night. National via chains, but the tallow-grid form is
  Chongqing's.
- **Lineage**: Chongqing / Sichuan.
- **Variants (§4.6)**:
  - **Chongqing 九宫格 (nine-grid)**: a single pot of **beef-tallow
    (牛油) broth** divided by a steel grid into nine squares — the centre
    square hottest (quick-cook items: tripe, duck intestine), the four
    edge squares medium (mushrooms, meatballs, lotus root), the corners
    gentlest (slow items) [HIGH — Zhihu, Sina (via search)].
  - **鸳鸯锅 (mandarin-duck pot)**: a round pot split by an S-curve into
    a red spicy side and a pale clear or tomato side — the national-
    chain default and the choice for mixed groups. [MEDIUM — not
    independently re-checked; uncontested]
  - Beijing copper-pot mutton is a different dish (see C).
  - **Default when unspecified**: 鸳鸯锅 for a national scene; 九宫格 if
    the brief names Chongqing.
- **Dipping sauce**: the Chongqing **油碟** — sesame oil with minced
  garlic, plus oyster sauce, scallion and coriander to taste, in a small
  bowl per person [HIGH — China Daily, Sina (via search)]. Northern and
  chain alternative: sesame-paste sauces from a self-serve sauce bar.
- **Ingredients**: 毛肚 (beef tripe, the "hot pot king"; dipped ~20 s),
  鸭肠 (duck intestine), 黄喉 (aorta), thin-sliced beef and lamb rolls,
  meatballs, tofu skin, potato and lotus-root slices, mushrooms, greens,
  noodles [HIGH for tripe/duck intestine/aorta as the "three treasures" —
  Sina (via search)].
- **Vessel & scale**: pot ~30–36 cm across [LOW — not re-checked] on an
  induction hob set into the table; raw ingredients on 15–25 cm plates or
  a tiered rack beside; individual sauce bowls ~10 cm.
- **Texture & finish**: a deep red, opaque, rolling boil with a thick
  layer of shimmering red-orange tallow on top, dried chillies and
  Sichuan peppercorns floating; steam fogging the air; tripe ruffled and
  pale grey-beige; beef slices rosy, curling.
- **Model failure**: Japanese shabu-shabu (clear, individual pots,
  refined); Korean army stew; a Western fondue; beer bottles on the table.
- **Confidence**: HIGH for forms and dip; MEDIUM for sizes.
- **Composition & proportions (§4.7)** — table for 3, 鸳鸯锅, mid-meal.
  - **What dominates**: **the pot** (~35% of the frame, the visual
    centre); raw-ingredient plates around it ~40%; sauce bowls and rice/
    drink ~25%. In the pot: red side ~50%, clear side ~50%. [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count (table / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Split pot | ~32 cm round, 8–10 cm deep | 1 | Steel, S-curve divider; one half deep red with a floating oil layer, dried chillies and peppercorns; the other pale clear or tomato-orange | Centre of the table on a flush hob |
    | Beef tripe (毛肚) | ruffled sheets ~8 × 6 cm | 10–15 on one plate | Pale grey-beige, ridged/ruffled, glistening wet | On a plate, often over ice or on a leaf |
    | Beef or lamb slices | thin rolls ~8–10 cm, 1–2 mm | 15–20 per plate | Rosy red with white fat marbling, curled | On a plate |
    | Duck intestine | long strands ~15–20 cm | a loose coil | Pale pink, glossy | On a small plate |
    | Vegetables | lotus-root and potato slices ~5–6 cm; greens | 3–4 plates | White lotus with holes, pale potato, bright green leaves | Around the pot |
    | Sauce bowl (油碟) | ~10 cm bowl, 1–2 cm deep | 1 each | Golden sesame oil with a mound of white minced garlic, green scallion and coriander | In front of each diner |
    | Cooked morsels | — | 3–6 visible | Tripe curling in the red broth | Bobbing in the pot |

  - **Arrangement**: the pot central, plates arranged in a ring or on a
    side rack; each place has a sauce bowl, a small plate and chopsticks
    (longer cooking chopsticks optional).
  - **Vessel fill**: broth ~2 cm below the rim, bubbling.
  - **Served portion vs. whole**: everyone cooks their own pieces; a
    portion is a dipped piece on the small plate.
  - **State cues**: rolling boil, heavy steam, red oil shimmer, plates
    wet and fresh.
  - **Absent on purpose**: beer bottles, baijiu glasses, sour-plum drink
    jugs, herbal-tea cans, tea; individual small pots; fondue forks.
  - **Prompt-ready line**: "A round steel hot pot about three times the
    can's height across, set into the middle of the table, split by an
    S-shaped divider: one half a rolling deep-red broth under a
    shimmering layer of chilli oil with dried red chillies and
    peppercorns, the other half pale and clear, heavy steam rising;
    around it plates of ruffled pale tripe, curled thin marbled beef
    slices, lotus-root slices and greens; a small bowl of golden sesame
    oil with minced garlic at each place. No beer, no tea."

#### Mapo doufu (麻婆豆腐)

- **Category**: Everyday — home and restaurant; national.
- **Lineage**: Chengdu, Sichuan (Chen Mapo, the reference restaurant).
- **Form**: soft tofu cubes simmered in a red chilli-bean (豆瓣) sauce
  with **crisp-fried minced beef** (the Chen Mapo standard says beef,
  not pork), thickened in three stages so red oil separates at the edge,
  finished with a heavy dusting of freshly ground Sichuan pepper; the
  eight-character ideal 麻辣烫嫩酥香鲜活 (numbing, hot, scalding, tender,
  crisp, fragrant, fresh, "alive") [HIGH — Sina/Weibo food columns citing
  Chen Mapo; Baidu Baike (via search)]. Home and chain versions often use
  pork mince [LOW — not re-checked].
- **Vessel & scale**: a 18–22 cm shallow bowl or deep plate; tofu cubes
  ~1.5–2 cm.
- **Texture & finish**: white tofu cubes, intact, glossy, bathed in a
  thick, translucent brick-red sauce with a ring of clear ruby oil at
  the edge; brown crisp mince crumbs; brown peppercorn powder dusted on
  top; green garlic-sprout (蒜苗) slivers.
- **Model failure**: a brown Americanised mapo with peas and carrots;
  tofu crumbled to mush; a creamy curry.
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — one shared dish.
  - **What dominates**: tofu cubes ~55% of the surface, red sauce ~30%,
    mince ~8%, greens and pepper ~7%.
  - **Component table**:

    | Component | Real size | Count (dish / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Tofu cubes | 1.5–2 cm | ~40–50 / 10–15 | White, smooth, wobbly, edges intact, glossy with sauce | Evenly through the dish, many breaking the surface |
    | Chilli-bean sauce | thick, 1–2 cm deep | — | Translucent brick red | Around and over the tofu |
    | Red oil | a 5–10 mm ring | — | Clear ruby | Pooling at the rim |
    | Crisp beef mince | crumbs 2–5 mm | ~2 tbsp | Dark brown, crisp | Scattered on top and through |
    | Ground Sichuan pepper | powder | a heavy dusting | Rust-brown | Dusted over the centre |
    | Garlic sprouts / scallion | slivers 2–3 cm | a pinch | Bright green | Top |

  - **Arrangement**: an even field of cubes; no pattern.
  - **Vessel fill**: to ~1 cm below the rim.
  - **Served portion vs. whole**: spooned (with the ceramic spoon) over
    each person's rice.
  - **State cues**: scalding — steam, bubbling oil at the edge.
  - **Absent on purpose**: peas, carrots, crumbled tofu, cream,
    coriander heaps, pork chunks.
  - **Prompt-ready line**: "A shallow bowl about twice the can's width
    across filled with small, intact, glossy white tofu cubes, each
    smaller than a thumb tip, in a thick translucent brick-red sauce,
    a ring of clear ruby chilli oil at the edge, dark crisp crumbs of
    minced beef, a heavy dusting of rust-brown ground peppercorn and a
    few green slivers on top, steaming. No peas or carrots."

#### Gongbao jiding (宫保鸡丁, kung pao chicken)

- **Category**: Everyday — home, restaurant, delivery; national.
- **Lineage**: Sichuan (Guizhou also claims it).
- **Form**: diced chicken stir-fried with dried chillies, Sichuan
  peppercorns, scallion segments and fried peanuts in a light glossy
  sweet-sour-savoury sauce ("lychee flavour" 荔枝味) [MEDIUM — not
  independently re-checked; widely documented]. Some northern and
  delivery versions add cucumber or carrot dice.
- **Vessel & scale**: a 20–22 cm plate; chicken dice ~1.5 cm.
- **Texture & finish**: small, even cubes of chicken, lightly glazed
  red-brown, glossy but not saucy; dark-red chilli pieces lightly
  scorched; whole golden-brown peanuts; pale scallion segments.
- **Model failure**: American kung pao with bell peppers, zucchini and
  thick brown sauce; General Tso's chicken.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one shared plate.
  - **What dominates**: chicken ~50%, peanuts ~20%, dried chilli ~15%,
    scallion ~15%.
  - **Component table**:

    | Component | Real size | Count (plate) | Look | Where it sits |
    |---|---|---|---|---|
    | Chicken dice | ~1.5 cm cubes | ~60 | Glossy light red-brown | Throughout |
    | Fried peanuts | ~1.2 cm | ~40 | Golden-brown, skinless | Throughout, many on top |
    | Dried chilli pieces | 2–3 cm segments | ~15–20 | Dark red, a little scorched | Throughout |
    | Scallion segments | ~1.5 cm | ~20 | Pale white-green | Throughout |
    | Sichuan peppercorns | 3–4 mm husks | a sprinkling | Rust-brown | Visible here and there |

  - **Arrangement**: an even heap.
  - **Vessel fill**: ~60% of the plate; almost no liquid on the plate.
  - **Served portion vs. whole**: a few pieces onto rice.
  - **State cues**: glossy, dry-looking, steaming.
  - **Absent on purpose**: bell peppers, courgette, broccoli, thick
    brown gravy, sesame seeds.
  - **Prompt-ready line**: "A heap of small glossy red-brown diced
    chicken, each piece smaller than a fingertip, tossed with golden
    fried peanuts, short dark-red dried chilli pieces and pale scallion
    segments, almost no sauce on the white plate, which is about twice
    the can's height across. No bell peppers, no thick brown gravy."

#### Duojiao yutou (剁椒鱼头, chopped-chilli fish head — zone 5)

- **Category**: Signature — Hunan restaurants and celebrations.
- **Lineage**: Hunan (Xiang cuisine).
- **Form**: a bighead-carp (鳙鱼/胖头鱼) head split in half, laid open on
  a plate, covered in chopped fermented red chilli (剁辣椒) cooked in oil,
  steamed; scallion on top; the remaining juice is often used to toss
  plain noodles (拌面) afterwards [MEDIUM — Sina, Weibo food columns, Baidu
  Baike (via search); the noodle finish not independently re-checked].
  A **two-colour (双色)** version with red chilli on one half and green
  pickled chilli on the other is common [LOW — not re-checked].
  Recommended head ~1 kg (2 jin) [MEDIUM].
- **Vessel & scale**: a large round or oval plate ~30–35 cm; the split
  head ~20–25 cm across. [LOW]
- **Texture & finish**: the head spread flat like an open book, entirely
  blanketed in glistening bright-red chopped chilli, oil pooling orange
  around it, white flesh visible at the edges, scallion rings.
- **Model failure**: a whole grilled fish; a Western fish-head soup; a
  fillet.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one shared plate.
  - **What dominates**: chopped chilli ~65% of the surface, visible fish
    ~20%, chilli-oil pool ~10%, scallion ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Split fish head | ~20–25 cm across when opened | 1 (two halves joined) | White flesh, grey skin at the edges, eye and gill plate visible | Flat, open, centre of plate |
    | Chopped red chilli | a 5–10 mm layer | covers the head | Glistening bright red, coarse, seeds visible | Blanketing the head |
    | Chilli oil / juices | pool 5 mm | — | Orange-red, oily | Around the head |
    | Scallion | rings | a handful | Green | Scattered on top |

  - **Arrangement**: head centred, open; two-colour version split red/
    green down the middle.
  - **Vessel fill**: fills ~80% of a large plate.
  - **Served portion vs. whole**: flesh picked with chopsticks; the cheek
    offered to the guest [LOW — not re-checked].
  - **State cues**: steam, glistening oil.
  - **Absent on purpose**: lemon, herbs other than scallion, a whole body.
  - **Prompt-ready line**: "A large fish head split open and laid flat
    like an open book on a big white plate, about twice the can's height
    across, completely blanketed in glistening coarse chopped bright-red
    chilli, white flesh showing at the edges, orange-red oil pooling
    around it, green scallion rings on top, steaming."

### C. North, Northeast and Northwest (zones 1, 6, 7)

#### Beijing kaoya (北京烤鸭, Peking roast duck — zone 1)

- **Category**: Special occasion — restaurant; hosting guests.
- **Lineage**: Beijing (hung-oven 挂炉 tradition of Quanjude; closed-oven
  焖炉 tradition of Bianyifang).
- **Form**: a whole roast duck carved at the table — Quanjude's hung-oven
  duck is carved into **108 slices**, skin, meat and breast plated in
  layers; eaten wrapped in thin **lotus-leaf pancakes (荷叶饼)** with
  **sweet bean sauce (甜面酱), scallion shreds and cucumber batons**;
  garlic is an alternative accompaniment [HIGH — Sohu, Visit Beijing
  (official), Ctrip (via search)].
- **Vessel & scale**: long oval or round plates of fanned slices; a
  bamboo steamer or plate of folded pancakes (~15–18 cm across when open
  — LOW, not re-checked); small dishes of sauce, scallion and cucumber.
- **Texture & finish**: skin thin, crackling-crisp, lacquered deep
  mahogany-amber and glossy; a thin layer of white fat beneath; meat
  pale ivory-pink; pancakes paper-thin, soft, matte off-white, almost
  translucent.
- **Model failure**: Cantonese roast goose (glossier, chopped on the
  bone, with plum sauce); orange-glazed duck breast; Peking-duck bao
  (a Western restaurant form).
- **Confidence**: HIGH.
- **Composition & proportions (§4.7)** — table for 2–3, duck carved.
  - **What dominates**: **the fanned duck slices** (~45% of the dish
    area), pancakes ~25%, condiment dishes ~20%, the carcass/head plate if
    shown ~10%.
  - **Component table**:

    | Component | Real size | Count (table / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Duck slices (skin + meat) | ~5–6 × 3 cm, 3–5 mm thick | ~100 across 2–3 plates / ~30–40 | Mahogany crisp skin edge, white fat line, ivory meat | Fanned in overlapping rows on oval plates |
    | Skin-only pieces (optional) | ~4 × 3 cm | ~10 | Glossy amber, brittle | A separate small plate, sometimes with a sugar dish |
    | Lotus-leaf pancakes | ~15–18 cm across, <1 mm | ~20–30 | Thin, soft, off-white, folded in quarters, faint pale spots | In a small bamboo steamer |
    | Sweet bean sauce | ~6–8 cm dish | 1–2 | Dark glossy brown, thick | Small dish |
    | Scallion shreds | ~6–7 cm × 2 mm | a heap | White with green tips | Small dish |
    | Cucumber batons | ~6–7 cm × 5 mm | ~12–20 | Pale green with dark skin | Small dish |

  - **Arrangement**: slices in neat rows or a fan, skin side up.
  - **Vessel fill**: slices cover ~80% of each plate.
  - **Served portion vs. whole**: each diner assembles a wrap on the small
    plate; staged unassembled or with one open pancake flat on a plate —
    **never a wrap held in a hand**.
  - **State cues**: skin glossy and crisp, meat just warm, light sheen.
  - **Absent on purpose**: plum sauce, bao buns, orange glaze, a whole
    un-carved duck being eaten, a knife-and-fork setting.
  - **Prompt-ready line**: "An oval plate of roast duck slices fanned in
    overlapping rows, each slice a little shorter than the can is wide,
    with thin crisp glossy mahogany skin over a thin white fat line and
    ivory meat; beside it a small bamboo steamer of paper-thin folded
    pale pancakes and three small dishes of dark sweet bean sauce, fine
    scallion shreds and cucumber batons. No plum sauce, no buns."

#### Lao Beijing shuan yangrou (老北京涮羊肉, copper-pot mutton — zone 1)

- **Category**: Social meal — winter, friends and family.
- **Lineage**: Beijing (Donglaishun popularised it; Hui Muslim roots —
  often halal) [MEDIUM — Baidu Baike (via search); halal status of
  individual restaurants varies — LOW].
- **Form**: a **brass/copper chimney pot heated by charcoal**, filled with
  **plain water or very light broth** (scallion, ginger, dried shrimp,
  goji, jujube, mushroom — no seasoning); **hand-cut mutton slices, very
  thin, cut with the grain**; dip is **sesame paste** mixed with
  fermented tofu and chive-flower sauce [HIGH — Beijing market-supervision
  bureau, Beijing Daily, Baidu Baike (via search)]. Sides: frozen tofu,
  napa cabbage, glass noodles, sesame flatbread (烧饼), sugar-garlic
  [MEDIUM — not re-checked].
- **Vessel & scale**: pot ~30 cm across with a chimney rising ~15–20 cm
  above the rim [LOW — not re-checked]; mutton on 20–25 cm plates.
- **Texture & finish**: a gleaming golden-copper pot, a glowing ember
  glimpse at the chimney base, clear pale broth simmering in the ring
  moat; mutton slices deep pink-red with white fat edges, laid in
  overlapping fans; sesame sauce thick, matte beige-brown with a red
  chilli-oil swirl.
- **Model failure**: Chongqing red hot pot (the opposite: red, tallow,
  grid); Mongolian barbecue; a fondue pot.
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — table for 3.
  - **What dominates**: **the copper pot** (~30% of the frame, tall);
    mutton plates ~30%; vegetables and sides ~25%; sauce bowls ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Copper chimney pot | ~30 cm across; chimney ~15–20 cm tall | 1 | Polished golden copper/brass, chimney smoking faintly | Centre |
    | Broth | a ring moat | — | Clear, pale, scallion and goji floating | Around the chimney |
    | Hand-cut mutton | ~12 × 5 cm, ~1–2 mm | 2–3 plates of ~20 slices | Deep pink-red with white fat edges, flat, slightly irregular | Fanned on plates around the pot |
    | Sesame dip | ~10 cm bowl | 1 each | Thick matte beige-brown, a red chilli-oil swirl, chopped coriander | In front of each diner |
    | Frozen tofu / napa cabbage / glass noodles | tofu cubes ~3 cm; leaves | 2–3 plates | Spongy off-white; pale green-white; translucent | Around the pot |
    | Sesame flatbread (烧饼) | ~8–10 cm | a plate of 4–6 | Golden, sesame-crusted | Side |

  - **Arrangement**: pot central; plates ringed; sauce at each place.
  - **Vessel fill**: broth ~3 cm below the rim.
  - **Served portion vs. whole**: each person swishes a slice for a few
    seconds and dips it in sesame sauce.
  - **State cues**: steam, charcoal glow, fresh raw meat.
  - **Absent on purpose**: red chilli broth, grid dividers, beer, baijiu,
    pork (in a halal restaurant).
  - **Prompt-ready line**: "A polished golden copper hot pot with a tall
    central chimney, about three times the can's height across, a ring
    of clear pale broth simmering around the chimney with a few spring
    onion pieces and red goji berries; around it plates of very thin,
    deep-pink hand-cut mutton slices with white fat edges fanned in
    rows, and at each place a small bowl of thick beige sesame sauce
    with a red swirl. No red chilli broth."

#### Zhajiangmian (炸酱面, Beijing noodles with fried bean sauce — zone 1)

- **Category**: Everyday — home and noodle shop, summer especially.
- **Lineage**: Beijing (Shandong-influenced). Not Korean jajangmyeon.
- **Form**: thick hand-cut wheat noodles, a dollop of **dark fried
  soybean-and-pork sauce** on top, and a ring of **菜码 (vegetable
  toppings)** — julienned cucumber, radish, bean sprouts, soybeans,
  celery — mixed by the diner [MEDIUM — not independently re-checked;
  widely documented].
- **Vessel & scale**: a large bowl ~18–20 cm; noodles ~4–5 mm thick.
- **Texture & finish**: pale, matte, slightly irregular noodles, a glossy
  dark-brown, oily sauce with visible pork dice, crisp bright julienne
  strips in separate small heaps.
- **Model failure**: Korean jajangmyeon (black, runny, with onion);
  spaghetti bolognese.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one bowl, unmixed.
  - **What dominates**: noodles ~55%, vegetable toppings ~30%, sauce ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Wheat noodles | 4–5 mm thick, long | one nest | Pale ivory, matte | Filling the bowl |
    | Fried bean sauce | ~3 tbsp dollop | 1 | Dark glossy brown with pork dice, oil sheen | Centre, on top |
    | Cucumber julienne | 6–8 cm × 3 mm | a small heap | Pale green with dark edges | Around the sauce |
    | Radish / bean sprouts / soybeans | julienne; sprouts; beans ~8 mm | small heaps | White / cream / pale green | Around the sauce |

  - **Arrangement**: sauce in the middle, toppings in separate little
    heaps like clock segments.
  - **Vessel fill**: to ~2 cm below the rim.
  - **Served portion vs. whole**: one bowl per person.
  - **State cues**: noodles just drained, slight steam, sauce glistening.
  - **Absent on purpose**: black runny sauce, onion chunks, egg, meat
    sauce drowning the noodles.
  - **Prompt-ready line**: "A large bowl about twice the can's width
    across filled with thick pale wheat noodles, a small dollop of
    glossy dark-brown bean sauce with little pork dice in the centre,
    surrounded by separate small heaps of fine cucumber strips, white
    radish strips, bean sprouts and green soybeans, unmixed. Not a
    black runny sauce."

#### Guobaorou (锅包肉, Harbin sweet-and-sour crispy pork — zone 6)

- **Category**: Signature — every Dongbei restaurant; banquets.
- **Lineage**: Harbin; created by chef Zheng Xingwen, who reworked
  Beijing 焦炒肉片 into a sweet-sour dish for Russian guests [HIGH —
  Chinese Wikipedia, Baidu Baike, Sohu (via search)].
- **Form (old Harbin style)**: pork tenderloin slices (~1.5 mm raw),
  coated in a starch-only batter (no egg), double-fried to a "glass-
  crisp" shell, tossed in a sugar-and-rice-vinegar sauce (1 : 1.2);
  garnish only scallion, ginger and carrot shreds, garlic slices and
  coriander [MEDIUM — one Sohu feature, consistent with Baike]. Newer
  versions are ketchup-red. **Pork.**
- **Vessel & scale**: a large 26–30 cm plate; pieces ~6–8 × 4–5 cm (LOW).
- **Texture & finish**: large, flat, irregular pieces with a pale-golden,
  glassy, crackly batter shell, lightly glossed with a clear amber
  sweet-sour glaze; bright orange carrot shreds and green coriander
  threaded on top.
- **Model failure**: American sweet-and-sour pork balls in red sauce with
  pineapple; tonkatsu.
- **Confidence**: MEDIUM-HIGH.
- **Composition & proportions (§4.7)** — one shared plate.
  - **What dominates**: pork pieces ~85%, garnish shreds ~10%, glaze
    sheen ~5%.
  - **Component table**:

    | Component | Real size | Count (plate / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Battered pork slices | ~6–8 × 4–5 cm, ~1 cm thick fried | 16–20 / 4–6 | Pale-golden, glassy-crisp, bubbled surface, thin clear amber glaze | Piled loosely in a heap |
    | Carrot shreds | fine, 5–6 cm | a pinch | Bright orange | Threaded on top |
    | Scallion / ginger shreds | fine | a pinch | White-green / pale yellow | On top |
    | Coriander | short sprigs | 4–6 | Green | On top |

  - **Arrangement**: large pieces in a loose, generous pile.
  - **Vessel fill**: fills ~70% of a large plate — Dongbei portions are
    large.
  - **Served portion vs. whole**: one piece at a time.
  - **State cues**: crisp shell, faint sheen, steam.
  - **Absent on purpose**: red ketchup sauce (unless briefed for the
    newer style), pineapple, bell peppers, round balls.
  - **Prompt-ready line**: "A generous loose pile of large, flat, crisp
    fried pork pieces, each about the can's width long, with a pale-
    golden glassy bubbled batter lightly glossed in a clear amber
    sweet-sour glaze, fine orange carrot and white scallion shreds and a
    few coriander sprigs on top, on a big white plate. No red sauce, no
    pineapple."

#### Lanzhou niurou mian (兰州牛肉面, Lanzhou beef noodles — zone 7, halal)

- **Category**: Everyday — noodle shops nationwide; breakfast and lunch
  in Lanzhou.
- **Lineage**: Lanzhou, Gansu; Hui Muslim — **halal shops (hard rule 4)**.
  National Intangible Cultural Heritage (2021) [MEDIUM — search summary
  of Baike]. Not the same as the "兰州拉面" chains, largely run by Hualong
  (Qinghai) Hui families [MEDIUM — China Daily (via search)].
- **Form — "一清二白三红四绿五黄"**: **clear** beef broth, **white** radish
  slices, **red** chilli oil, **green** coriander and garlic sprouts,
  **yellow** hand-pulled noodles [HIGH — China Daily, Sina, Baike (via
  search)]. Noodle widths from 毛细 (hair-thin) through 细, 二细 (~4 mm),
  三细 (~3 mm), 韭叶 (chive-leaf flat) to 大宽 (wide belt) — the diner
  chooses [HIGH for the list; MEDIUM for mm].
  **Default when unspecified**: 二细.
- **Vessel & scale**: a large ceramic bowl ~20–22 cm (LOW); a few thin
  slices of beef (often ordered extra on a side plate).
- **Texture & finish**: clear amber-gold broth, a floating slick of
  ruby-red chilli oil across one side, pale-yellow round noodles folded
  in the bowl, a few thin white radish slices, a big scatter of bright
  green chopped coriander and garlic sprouts, a few small brown beef
  dice.
- **Model failure**: Japanese ramen (egg, nori, chashu pork — **a halal
  violation**); pho with lime and basil; cloudy tonkotsu broth.
- **Confidence**: HIGH.
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: broth surface ~40%, chilli oil ~20%, greens ~20%,
    visible noodles ~15%, radish and beef ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Hand-pulled noodles | ~4 mm round (二细), long | one folded nest | Pale yellow, springy, slightly uneven | Mostly under the broth, loops breaking the surface |
    | Clear beef broth | fills to ~2 cm below rim | — | Clear amber-gold | Whole bowl |
    | Chilli oil | a slick 5–8 cm wide | 1 | Ruby-red oil with dark chilli flakes | Floating across one side |
    | White radish | thin slices ~3–4 cm | 4–6 | Translucent white | Floating |
    | Coriander & garlic sprouts | chopped 0.5–1 cm | a large pinch | Bright green | Scattered over the centre |
    | Beef dice | ~1 cm | 8–12 | Brown | Floating near the greens |

  - **Arrangement**: red on one side, green in the centre, radish white
    among them — the five colours visible at once.
  - **Vessel fill**: broth near the rim.
  - **Served portion vs. whole**: one bowl per person.
  - **State cues**: steaming hard.
  - **Absent on purpose**: egg, seaweed, pork, lime, basil, cloudy broth,
    beer, anything pork on the table.
  - **Prompt-ready line**: "A large ceramic bowl about twice the can's
    width across of clear amber-gold beef broth, loops of pale-yellow
    hand-pulled noodles folded underneath, a slick of ruby-red chilli oil
    floating across one side, a few thin translucent white radish slices,
    a generous scatter of bright green chopped coriander in the centre
    and small brown beef dice, steaming. No egg, no seaweed, no pork."

#### Rou jia mo (肉夹馍 — zone 7)

- **Category**: Everyday — street and counter; Xi'an's signature.
- **Lineage**: Shaanxi. **Two kitchens — never mix them in one scene:**
  - **腊汁肉夹馍 (Han, pork)**: pork (often belly/rib meat) braised in an
    aged master stock, chopped and stuffed into a **白吉馍** flatbread
    [HIGH — Baidu Baike, Zhihu (via search)].
  - **牛肉/羊肉夹馍 (Hui, halal)**: beef or lamb in the Muslim Quarter
    (回民街) — halal (hard rule 4) [MEDIUM — not re-checked].
  **Default when unspecified**: 腊汁肉夹馍 (pork) — but in any Muslim-
  quarter setting, the halal beef version. [EDITORIAL]
- **The bread**: 白吉馍, **10.5–11 cm across**, hollow inside, with the
  three marks **"铁圈虎背菊花心"** — a crisp golden "iron ring" edge, a
  "tiger back" top with pale and toasted mottling, a "chrysanthemum
  heart" spiral on the underside [MEDIUM-HIGH — Baidu Baike, Zhihu (via
  search)].
- **Texture & finish**: the bread split along its side like a pita but
  not through; filled with chopped, moist, dark-brown meat with glistening
  fat and a few green chilli bits (optional), juice soaking the crumb.
- **Model failure**: a hamburger; a pita gyro; a Taiwanese gua bao
  (steamed, folded, white).
- **Confidence**: MEDIUM-HIGH.
- **Composition & proportions (§4.7)** — one bun on paper.
  - **What dominates**: the bread ~70% of the visible item, the meat
    filling ~30% at the open side.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | 白吉馍 | 10.5–11 cm across, ~3 cm thick | 1 | Pale-golden, crisp darker ring at the edge, mottled "tiger" top | Round, slit open on one side |
    | Chopped braised meat | pieces 0.5–1.5 cm | ~80–100 g | Dark brown lean and glistening translucent fat, moist | Packed in the slit, bulging out |
    | Green chilli (optional) | chopped 5 mm | a few | Bright green | Mixed in |

  - **Arrangement**: the open side facing the camera, meat bulging.
  - **Vessel fill**: resting in a half-open paper sleeve on a counter or
    a small plate.
  - **Served portion vs. whole**: one bun; two for a meal.
  - **State cues**: warm, juices darkening the crumb at the slit.
  - **Absent on purpose**: lettuce, tomato, cheese, a sesame burger bun,
    sauce drizzle, a hand holding it.
  - **Prompt-ready line**: "A round flatbread about the can's height
    across and half its width thick, pale golden with a crisp darker rim
    and a mottled toasted top, slit open along one side and packed with
    moist, finely chopped dark-brown braised meat with glistening fat,
    resting in a paper sleeve on a counter, open side facing the camera.
    Not a burger bun, no lettuce, no cheese."

#### Dapanji (大盘鸡, "big plate chicken" — zone 7)

- **Category**: Shared restaurant meal; national via Xinjiang restaurants.
- **Lineage**: Shawan, Xinjiang; a 1980s roadside dish for long-distance
  truck drivers [HIGH — China News Service, Tacheng prefecture govt,
  Baike (via search)]. Halal in Xinjiang (hard rule 4).
- **Form**: a whole chicken chopped on the bone into chunks, stir-fried
  then stewed with **potato chunks**, dried red chillies, green chillies,
  Sichuan peppercorn, onion and garlic; finished with **皮带面 (belt
  noodles)** — two-finger-wide, long, thin hand-pulled noodles — tossed
  in the sauce, sometimes underneath [HIGH — Chinanews, Tacheng govt (via
  search)].
- **Vessel & scale**: a **very large plate or oval platter, ~40–45 cm**
  (it is named for it) [LOW for the size]; chicken chunks ~4–5 cm.
- **Texture & finish**: a glossy, spicy red-brown sauce, chicken on the
  bone with skin, soft golden potato chunks with edges collapsing into
  the sauce, bright green and red chilli pieces; wide, glossy noodles
  under or beside.
- **Model failure**: Indian chicken curry; a Western chicken stew; a
  small single portion.
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — one platter for 3–4.
  - **What dominates**: chicken ~40%, potato ~25%, belt noodles ~20%,
    chillies/onion ~10%, sauce pool ~5%.
  - **Component table**:

    | Component | Real size | Count (platter / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Chicken chunks on bone | ~4–5 cm | ~25–30 / 6–8 | Red-brown, glossy, skin on | Heaped over the centre |
    | Potato chunks | ~3–4 cm | ~15–20 | Golden-yellow, soft, edges melting | Among the chicken |
    | Green chilli | pieces 3–4 cm | ~10–15 | Bright green, glossy | Scattered on top |
    | Dried red chilli | whole 4–6 cm | ~10 | Dark red | Scattered |
    | Belt noodles | ~2.5–3 cm wide, long | a nest | Pale, glossy with sauce | Under the stew or heaped at one end |
    | Sauce | thick 5–10 mm | — | Glossy red-brown, oily | Coating everything |

  - **Arrangement**: a mountain of stew in the middle, noodles beneath
    or at one end of the platter.
  - **Vessel fill**: almost to the platter edge.
  - **Served portion vs. whole**: diners pick from the platter; noodles
    added once the chicken is half eaten.
  - **State cues**: steam, glossy oil.
  - **Absent on purpose**: rice, cream, coriander heaps, pork, beer.
  - **Prompt-ready line**: "A very large oval platter, about four times
    the can's height long, piled high with chunks of chicken on the bone
    and soft golden potato chunks in a glossy spicy red-brown sauce,
    scattered with bright green chilli pieces and dark red dried chillies,
    wide flat glossy noodles tucked underneath at one end, steaming. No
    rice, no cream."

#### Polo / zhuafan (手抓饭, Xinjiang pilaf — zone 7, halal) — with nang

- **Category**: Everyday and festive in Xinjiang; Uyghur "polo".
- **Lineage**: Uyghur and other Xinjiang peoples; halal (hard rule 4)
  [HIGH — Baidu Baike, Ili prefecture govt, China Cuisine Association (via
  search)].
- **Form**: rice steamed over **mutton**, **yellow and orange carrots** (黄
  萝卜 and 胡萝卜, julienned) and onion in oil; sometimes raisins or dried
  apricot; served heaped with a large piece of mutton on top [HIGH for
  ingredients — Baike, CCAS (via search)]. **Nang (馕)** — a round baked
  flatbread, crisp or soft, often sesame-scattered — is on every table
  [HIGH — same sources].
- **Vessel & scale**: a large shallow plate per person or a big platter;
  mutton on-the-bone piece ~8–10 cm (LOW).
- **Texture & finish**: glistening, oil-rich, amber-tinted rice with
  separate grains; long carrot strips in yellow and orange; a big piece
  of tender mutton; raisins dark and plump.
- **Model failure**: Uzbek plov is visually close (acceptable only if
  briefed); Indian biryani (saffron-white-and-yellow layered rice with
  whole spices, fried onion); Spanish paella.
- **Confidence**: HIGH.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: rice ~65%, carrot ~20%, mutton ~12%, raisins ~3%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Rice | grains | a mound ~15 cm across, 6–8 cm tall | Amber-tinted, glossy, separate | Base |
    | Carrot strips | 5–6 cm × 5 mm | many | Yellow and orange, soft, glossy | Through and on top |
    | Mutton | a piece on bone ~8–10 cm, or 3–4 chunks ~4 cm | 1 or 3–4 | Brown, tender | On top of the mound |
    | Raisins (optional) | ~1 cm | 10–15 | Dark brown-green, plump | Scattered on top |
    | Nang (side) | ~20–25 cm round (LOW) | 1 on the table, torn | Golden, sesame, dimpled centre | Beside the plate |

  - **Arrangement**: a heaped mound, meat crowning it.
  - **Vessel fill**: mound covers ~60% of the plate.
  - **Served portion vs. whole**: one plate each, or served from a platter.
  - **State cues**: oil sheen, steam.
  - **Absent on purpose**: pork, alcohol, saffron-white rice layers, fried
    onion crowns, yoghurt raita.
  - **Prompt-ready line**: "A heaped mound of glossy amber-tinted rice
    about twice the can's width across, every grain separate, mixed with
    long soft strips of yellow and orange carrot, a large tender piece of
    mutton on the bone resting on top and a few plump raisins; beside
    the plate a round golden flatbread with a pressed, sesame-scattered
    centre. No saffron layers, no fried onions."

#### Yangrou chuan (羊肉串, lamb skewers — zone 7 origin, national)

- **Category**: Street and night food; national shaokao culture.
- **Lineage**: Xinjiang (Uyghur red-willow skewers 红柳烤肉 are a regional
  form [MEDIUM — via search]); national street form on steel skewers.
- **Form**: small cubes of lamb with interspersed lamb fat on a thin
  steel or bamboo skewer, grilled over a charcoal trough, dusted with
  **cumin, chilli flakes and salt** [MEDIUM — not independently re-
  checked; uncontested].
- **Vessel & scale**: steel skewers ~25–30 cm; meat pieces ~1.5–2 cm;
  served in bundles on a stainless tray or foil. [LOW]
- **Texture & finish**: charred edges, glistening rendered fat, a heavy
  crust of cumin seed and red chilli flakes, crisp translucent fat cubes
  between the meat.
- **Model failure**: Turkish şiş kebab with peppers and onions; satay
  with peanut sauce; American BBQ skewers with vegetables.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one tray for two.
  - **What dominates**: the skewered meat ~60% of the tray, skewer sticks
    ~25%, tray showing ~15%.
  - **Component table**:

    | Component | Real size | Count (tray / person) | Look | Where it sits |
    |---|---|---|---|---|
    | Lamb cubes | ~1.5–2 cm | 4–5 per skewer | Browned, charred edges, dusted | On skewers |
    | Fat cubes | ~1–1.5 cm | 1–2 per skewer | Crisp, translucent gold | Between meat cubes |
    | Spice crust | seeds and flakes | heavy | Cumin tan, chilli red | All over the meat |
    | Skewers | ~25–30 cm steel | 10–20 / 5–10 | Dull steel, ring handles | Laid in parallel on a stainless tray |

  - **Arrangement**: parallel, overlapping, handles all one way.
  - **Vessel fill**: the tray covered.
  - **Served portion vs. whole**: counted by the skewer; 10–20 per person
    is ordinary [LOW].
  - **State cues**: sizzling fat, a curl of smoke.
  - **Absent on purpose**: vegetables on the skewer, peanut sauce, beer
    bottles, the cook's hand.
  - **Prompt-ready line**: "A stainless steel tray holding a dozen thin
    steel skewers laid in parallel, each about twice the can's height
    long, threaded with small charred lamb cubes, each smaller than a
    thumb tip, and crisp translucent fat cubes, heavily crusted with
    cumin seeds and red chilli flakes, fat glistening. No vegetables on
    the skewers, no beer bottles."

### D. Shanghai/Jiangnan and Cantonese (zones 2–3)

#### Xiaolongbao (小笼包, soup dumplings — zone 2)

- **Category**: Everyday-to-treat — breakfast, lunch, snack; Shanghai's
  signature (Nanxiang).
- **Lineage**: Nanxiang, Jiading (Shanghai). Changzhou/Wuxi (sweeter),
  Hangzhou and Shengzhou forms differ in size and sweetness [LOW-MEDIUM —
  Sina comparison piece (via search)].
- **Form (Nanxiang standard, 2000)**: wrapper ~**1.5 mm**, **8 g of dough
  holding 14–16 g of pork filling** with set aspic that melts to soup,
  **~18 pleats** (the 2000 standard required at least 14), finished size
  given as **2.5 cm** across; "shaped like a water chestnut" [MEDIUM-HIGH
  for pleats and weights — Wenhui Bao, Jiading government, Baike (via
  search); the 2.5 cm diameter is LOW — a 24 g dumpling is more
  plausibly ~3.5–4 cm across; flagged in the GAP LOG]. Served **in the
  bamboo steamer it was cooked in**, 8–10 per basket (LOW), on a pine-
  needle, paper or cabbage liner; with **dark Zhenjiang vinegar and fine
  ginger shreds**. **Pork** (crab-roe versions exist).
- **Texture & finish**: very thin, slightly translucent, soft-matte white
  skin, the base sagging and bulging with soup, a tight spiral of fine
  pleats twisted to a small knot on top; soup shadow visible through the
  lower half.
- **Model failure**: fluffy thick-skinned baozi; har gow (translucent
  pleated crescent); Japanese gyoza; dumplings on a plate instead of the
  steamer.
- **Confidence**: MEDIUM-HIGH.
- **Composition & proportions (§4.7)** — one basket.
  - **What dominates**: the dumplings ~75% of the basket top, liner
    showing ~25%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Bamboo steamer | ~15–18 cm across (LOW) | 1 | Woven tan bamboo, slatted, lid off beside it | On the table |
    | Xiaolongbao | ~3.5–4 cm across (see note), ~2.5–3 cm tall | 8–10 | Thin, translucent-white, ~18 fine pleats spiralling to a knot, base sagging with soup | In rings on the liner, not touching |
    | Liner | paper, pine needles or cabbage leaf | 1 | Pale / green | Under the dumplings |
    | Vinegar with ginger | ~8 cm saucer | 1 | Near-black vinegar with fine pale-yellow ginger shreds | Beside the steamer |

  - **Arrangement**: one ring round the edge, 1–3 in the centre, small
    gaps between.
  - **Vessel fill**: basket full.
  - **Served portion vs. whole**: one basket per person, or shared by two.
  - **State cues**: steam rising, a damp sheen, skins slightly slumped.
  - **Absent on purpose**: broken dumplings leaking soup, soy sauce, chilli
    oil (Shanghai uses vinegar), sesame, herbs.
  - **Prompt-ready line**: "A round bamboo steamer basket, a little
    wider than the can is tall, holding nine small soup dumplings, each
    about half the can's width across, with very thin soft translucent
    white skins, a tight spiral of fine pleats twisted to a small knot
    on top and bases sagging with hot soup inside, steam rising; a small
    saucer of near-black vinegar with fine ginger shreds beside."

#### Shengjian bao (生煎包, pan-fried soup buns — zone 2) — compact

- **Form**: yeasted pork buns with soup, pan-fried pleat-side down in a
  huge flat iron pan, crusted golden at the base, the tops scattered with
  **sesame and chopped scallion**; served four to a portion [MEDIUM — not
  independently re-checked]. **Pork.** Model failure: guotie (long
  crescents); plain steamed baozi.
- **Composition & proportions (§4.7)**: 4 buns (~5 cm across, ~4 cm tall)
  on a small plate or paper tray, ~70% of the plate; tops soft white with
  black and white sesame and green scallion; bottoms (turned up on one
  bun) a hard, deep-golden, crackly crust; glistening oil at the base;
  a saucer of vinegar; absent: soy, chilli oil. **Prompt-ready line**:
  "Four plump pan-fried buns, each a little narrower than the can, soft
  white tops scattered with sesame seeds and green scallion, one turned
  over to show a crackly deep-golden fried base, glistening with oil on
  a small plate." [EDITORIAL]

#### Har gow (虾饺, crystal shrimp dumplings — zone 3)

- **Category**: Dim sum — the first of the "four heavenly kings" (虾饺,
  烧卖, 叉烧包, 蛋挞) [HIGH — Baidu Baike, Southcn, Yangcheng Evening News
  (via search)].
- **Lineage**: Guangzhou.
- **Form**: a **wheat-starch (澄面) wrapper**, steamed to a glassy
  translucence; **crescent shape with a "spider's belly" and 12–13 fine
  pleats**; the base and top should be the same colour — an even
  translucence means correctly steamed; whole shrimp inside [HIGH — Baidu
  Baike and Southcn (via search)].
- **Vessel & scale**: a small bamboo steamer (~13–15 cm, LOW) of 3–4
  dumplings, each ~4–5 cm long (LOW), on paper or a leaf.
- **Texture & finish**: glassy, slightly glossy, translucent white skin
  through which pink-orange shrimp shows; fine pleats along the curved
  back; plump belly.
- **Model failure**: opaque white jiaozi; gyoza; xiaolongbao spiral tops.
- **Confidence**: HIGH (form); LOW (size).
- **Composition & proportions (§4.7)** — one steamer.
  - **What dominates**: the dumplings ~80% of the basket.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Bamboo steamer | ~13–15 cm | 1 | Tan woven bamboo | On the table, stacked with others behind |
    | Har gow | ~4–5 cm long, ~3 cm tall | 4 (Guangzhou baskets often 3–4) | Translucent glassy skin, pink shrimp visible, 12–13 fine pleats | Close together, pleats up |
    | Liner | paper or leaf | 1 | White/green | Under |

  - **Arrangement**: four in a square, pleats facing the same way.
  - **Vessel fill**: basket snugly full.
  - **Served portion vs. whole**: shared basket; one per person per round.
  - **State cues**: steam, glossy skin.
  - **Absent on purpose**: soy dipping sauce bowls in front of every
    dumpling, garnish, a plated arrangement.
  - **Prompt-ready line**: "A small bamboo steamer basket, about the
    can's height across, holding four plump crescent dumplings, each
    about the can's width long, with glassy translucent skins showing
    pink shrimp inside and a row of fine pleats along the curved top,
    steaming."

#### Siu mai (烧卖, Cantonese pork-and-shrimp dumplings — zone 3)

- **Form**: **干蒸烧卖** — a thin yellow wheat wrapper gathered round an
  **open-topped** cylinder of pork and shrimp filling, the top exposed,
  dotted with orange roe or a dice of carrot [HIGH for the half-open form
  — Southcn (via search); roe dot MEDIUM — not re-checked]. **Pork.**
  Not the northern glutinous-rice shaomai (a different form).
- **Composition & proportions (§4.7)** — one steamer of 4: cylinders
  ~3.5–4 cm across, ~3.5 cm tall (LOW); wrapper pale yellow, pleated
  frill round the top edge; filling top pink-beige, glossy, coarse; a
  tiny orange dot in the centre; 4 per basket touching; absent: fully
  enclosed tops, soy pools. **Prompt-ready line**: "Four open-topped
  dumplings, each about half the can's width across and nearly as tall,
  thin pale-yellow wrappers gathered in a frilled collar around a
  glossy pink-beige pork-and-shrimp filling with a tiny orange dot on
  top, snug in a small bamboo steamer." [EDITORIAL]

#### Char siu bao (叉烧包 — zone 3)

- **Form**: a steamed fluffy white bun with barbecued-pork filling; a
  good one **splits open at the top when steamed, showing the red-brown
  filling** [HIGH for the split — Southcn (via search)]. **Pork.** Not a
  baked char siu bun (glazed golden) unless briefed.
- **Composition & proportions (§4.7)** — one steamer of 3: buns ~6–7 cm
  across (LOW), bright white, matte, soft; the top cracked in 3–4 petals
  exposing ~20% glossy red-brown diced pork in sauce; on paper squares;
  steam; absent: pleated tops (that is a baozi), golden glaze.
  **Prompt-ready line**: "Three fluffy, matte bright-white steamed buns,
  each about the can's width across, their tops split open into three
  or four petals revealing glossy red-brown diced roast pork, on paper
  squares in a bamboo steamer, steaming." [EDITORIAL]

#### Siu mei fan (烧腊饭, roast-meat rice plate — zone 3)

- **Category**: Everyday — Cantonese canteen and roast-shop lunch.
- **Form**: steamed rice topped with sliced **char siu (叉烧)** and/or
  **roast goose (烧鹅)** or soy chicken, a few blanched choy sum stems,
  sauce poured over the rice [MEDIUM — not independently re-checked; the
  shop-window of hanging roast meats is a zone-3 register]. **Pork /
  poultry.**
- **Vessel & scale**: a 24–26 cm plate or a takeaway box; char siu slices
  ~5–6 cm × 3 cm × 5 mm.
- **Texture & finish**: char siu with a lacquered, sticky, dark-red
  caramelised edge and pink-red interior; goose chopped on the bone with
  glossy mahogany crisp skin; greens bright; rice white, partly stained
  by sauce.
- **Model failure**: Peking duck slices with pancakes; bright pink food-
  coloured takeaway char siu with a thick red crust all the way through.
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one plate, char siu and goose.
  - **What dominates**: rice ~50%, meats ~35%, greens ~10%, sauce ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Rice | a flattened mound | ~250 g | White, glossy, sauce-stained at one side | Base, half the plate |
    | Char siu slices | ~5–6 × 3 cm, 5 mm | 6–8 | Dark red caramelised edges, pink interior, sticky gloss | Fanned over the rice |
    | Roast goose pieces | ~5 × 3 cm on bone | 4–6 | Crisp mahogany skin, fat layer | Beside the char siu over the rice |
    | Choy sum | stems ~8–10 cm | 3–4 | Bright green, glossy | Along the plate edge |
    | Soy-based sauce | drizzle | — | Thin dark brown | Soaked into the rice under the meat |

  - **Arrangement**: meats fanned in an overlapping line over one side of
    the rice.
  - **Vessel fill**: fills ~80% of the plate.
  - **Served portion vs. whole**: one plate per person.
  - **State cues**: gloss on meat, light steam from rice.
  - **Absent on purpose**: pancakes, plum sauce, fried egg (unless
    briefed), chopsticks upright in the rice.
  - **Prompt-ready line**: "A white plate of steamed rice with a fanned
    line of roast pork slices, each about the can's width long, with
    sticky dark-red caramelised edges and pink centres, beside a few
    pieces of roast goose with crisp mahogany skin, three bright green
    choy sum stems along the edge, dark sauce soaked into the rice."

#### Dan tat (蛋挞, Cantonese egg tart — zone 3) — compact

- **Form**: the fourth "heavenly king" of dim sum [HIGH — Baike]; a flaky
  or shortcrust shell with a smooth, glossy, bright-yellow custard, **not
  caramelised** (that is the Portuguese/Macau tart). [MEDIUM — not
  independently re-checked]
- **Composition & proportions (§4.7)**: three tarts ~7 cm across (LOW) on
  a small plate, crust pale golden with fine flaky layers at the rim,
  custard ~80% of the top, smooth, mirror-glossy, uniform yellow; absent:
  brown blistered spots, cinnamon, fruit. **Prompt-ready line**: "Three
  small round tarts, each about the can's width across, pale golden
  flaky rims around smooth, mirror-glossy bright-yellow custard with no
  browning, on a small white plate." [EDITORIAL]

### E. Yunnan and the Southwest (zone 8)

#### Guoqiao mixian (过桥米线, crossing-the-bridge rice noodles)

- **Category**: Signature — Yunnan restaurants; national chains.
- **Lineage**: Mengzi, Yunnan (Jianshui also associated) [MEDIUM — Baike
  (via search)].
- **Form**: four parts — **soup, raw slices, rice noodles, condiments**.
  A **very hot soup** (chicken, duck, pork bone) under a **film of chicken
  fat** that keeps the heat in, served in a large bowl; the diner adds
  **raw thin meat and fish slices**, a **raw quail egg**, ham slices,
  vegetables, tofu skin, then the rice noodles [HIGH — Baike, Wikipedia
  (via search)]. **Yunnan food-safety standard**: the noodle bowl **≥
  22 cm across**; raw meat slices **≤ 2 mm** thick [MEDIUM-HIGH —
  standard cited in search summary; page not read].
- **Vessel & scale**: the big bowl ≥ 22 cm; 6–12 small saucers of
  toppings (~8–10 cm) around it (count LOW); a plate of white rice
  noodles.
- **Texture & finish**: a golden, shimmering fat-film on a pale broth
  that barely steams (the fat traps it); pale raw pink slices, a bright
  yellow quail yolk, green chives, white round rice noodles.
- **Model failure**: Vietnamese pho with herbs and lime; ramen; all
  ingredients pre-cooked in the bowl.
- **Confidence**: HIGH for form.
- **Composition & proportions (§4.7)** — one person's set, before
  assembly.
  - **What dominates**: **the big soup bowl** (~40% of the set), the ring
    of small saucers ~40%, the noodle plate ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Soup bowl | ≥ 22 cm, deep | 1 | Thick white or blue-and-white porcelain; golden fat-film surface | Centre |
    | Raw meat / fish slices | ~4–5 cm, ≤ 2 mm | 6–10 slices on 1–2 saucers | Translucent pink / white | Saucers |
    | Quail egg | raw, in shell or cracked | 1–2 | Speckled shell / bright yellow yolk | Small saucer |
    | Ham slices | ~3–4 cm | 4–6 | Deep red | Saucer |
    | Vegetables, chives, tofu skin, mushrooms | bite-size | 4–6 saucers | Greens, yellow, cream | Ring around the bowl |
    | Rice noodles | round, ~2–3 mm | a plate or bowl | Bright white, soft | Beside the soup bowl |

  - **Arrangement**: the bowl in the centre, saucers in a crescent around
    it, noodles to one side.
  - **Vessel fill**: soup to ~3 cm below the rim.
  - **Served portion vs. whole**: one set per person.
  - **State cues**: a faint wisp of steam only; glistening fat surface.
  - **Absent on purpose**: lime, basil, bean sprouts heap (pho), boiled
    egg halves, chilli-oil pools.
  - **Prompt-ready line**: "A very large deep white bowl, about twice the
    can's height across, of hot broth under a shimmering golden film of
    fat, surrounded by a crescent of small saucers holding paper-thin raw
    pink meat slices, a raw quail egg, deep-red ham slices, green chives
    and yellow tofu skin, with a plate of soft white round rice noodles
    beside it. No lime, no herbs."

### F. MORNING MODULE — street breakfast (off by default)

Use only when a brief explicitly asks for a morning scene; log the scope
exception in `DECISIONS.md`. Soy milk (豆浆) is the morning drink and a
real prior — exclude it from any hero scene.

#### Jianbing guozi (煎饼果子 — Tianjin, zone 1; national street breakfast)

- **Category**: Everyday — street breakfast, bought from a griddle cart.
- **Lineage**: Tianjin. The **Tianjin standard (2018)** fixes the form:
  a crêpe of **mung-bean flour (pure, or with millet flour), 38–45 cm
  across**, egg spread on it, **sweet bean sauce, chilli sauce, fermented
  tofu (腐乳) sauce, chopped scallion and sesame**, wrapped round **either
  a youtiao (果子) or a crisp flat fried sheet (果篦儿)** — and **no
  lettuce, ham, pork cutlet, pickles or shredded potato** [HIGH — The
  Paper, 21st Century Business Herald (via search)]. Outside Tianjin,
  wheat-flour crêpes with a crisp cracker (薄脆), lettuce and sausage are
  common [LOW — not re-checked].
- **Variants (§4.6)**: Tianjin (standard) vs. the national street version
  (lettuce, sausage, cracker). **Default**: Tianjin. [EDITORIAL]
- **Vessel & scale**: folded into a flat packet ~15 × 12 cm, ~3–4 cm
  thick [LOW — derived], in a paper bag or on paper.
- **Texture & finish**: the outer crêpe thin, matte, pale khaki-green
  (mung bean) mottled with golden-yellow cooked egg and dark sauce
  streaks, speckled with green scallion and black/white sesame; a crisp
  golden youtiao or cracker visible at the open end.
- **Model failure**: a French crêpe; a burrito; a Taiwanese egg crêpe
  (danbing, rolled thin).
- **Confidence**: HIGH (form).
- **Composition & proportions (§4.7)** — one jianbing on its paper.
  - **What dominates**: the folded crêpe ~85% of the item; the crisp
    filling edge ~15% at the open end.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Mung-bean crêpe | 38–45 cm unfolded; folded ~15 × 12 cm | 1 | Pale khaki-beige, thin, matte, lightly browned spots | Outside, folded in thirds |
    | Egg | spread across | 1–2 | Golden-yellow, lacy, cooked flat onto the crêpe | Visible on the outer face |
    | Sauces | streaks | — | Dark brown bean, red chilli | Brushed, peeking at the folds |
    | Scallion & sesame | rings; seeds | a sprinkle | Green; black and white | Stuck to the egg side |
    | Youtiao or 果篦儿 | youtiao ~15 cm cut to fit; or a flat crisp sheet | 1 | Golden, blistered, crisp | Inside, visible at the open end |

  - **Arrangement**: folded packet lying on half-open paper, open end
    toward the camera.
  - **Vessel fill**: n/a — on paper on a cart ledge or a small table.
  - **Served portion vs. whole**: one per person.
  - **State cues**: steaming, fresh off the griddle.
  - **Absent on purpose**: lettuce, ham, sausage (in the Tianjin form),
    a hand holding it, soy milk.
  - **Prompt-ready line**: "A flat folded street crêpe packet a little
    wider than the can is tall, thin pale khaki crêpe cooked with a lacy
    golden egg layer, streaks of dark bean sauce and red chilli, speckled
    with green scallion and sesame, a crisp golden fried dough stick
    showing at the open end, resting on a paper bag on a cart ledge,
    steaming. No lettuce, no ham."

#### Baozi (包子, steamed filled buns — national, zone 1 register)

- **Category**: Everyday — breakfast and snack; the Beijing chain 庆丰
  is the everyday reference.
- **Form**: a leavened wheat bun with a pleated top; pork-and-scallion
  (猪肉大葱) the classic, also vegetable (素), beef (halal zones) and
  sauce-pork (酱肉). **~18 even pleats** gathered to a "pomegranate
  mouth" top [MEDIUM — Baike and a Beijing source (via search)]. One
  Beijing source cites ~160 g per bun in some shops [LOW — unusually
  heavy; typical shop buns are smaller, not re-checked].
- **Vessel & scale**: 8–10 cm across, 5–6 cm tall (LOW); in a bamboo or
  steel steamer tray, or 2–4 on a plate with a vinegar dish.
- **Texture & finish**: matte, soft, bright-white, faintly dimpled dough;
  fine pleats spiralling to a small twisted top; a little moisture
  darkening the base.
- **Model failure**: xiaolongbao (translucent, soup); char siu bao
  (split top); a Western dinner roll; mantou (plain, no pleats).
- **Confidence**: MEDIUM.
- **Composition & proportions (§4.7)** — one plate of 4.
  - **What dominates**: buns ~75% of the plate.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Baozi | 8–10 cm across, 5–6 cm tall | 4 | Matte bright-white, ~18 fine pleats to a twisted top | Two by two on a plate or in a steamer |
    | Vinegar dish | ~8 cm saucer | 1 | Near-black | Beside |
    | One broken bun (optional) | — | 1 | Shows pork-and-scallion filling: brown meat, green flecks, juices soaking the crumb | Front |

  - **Arrangement**: close together, not touching.
  - **Vessel fill**: plate ~70% covered.
  - **Served portion vs. whole**: 2–4 per person.
  - **State cues**: steaming, soft sheen at the base.
  - **Absent on purpose**: soy milk, glaze, sesame on top, a hand.
  - **Prompt-ready line**: "Four soft, matte, bright-white steamed buns,
    each a little wider than the can, with about eighteen fine pleats
    spiralling to a small twisted point on top, on a white plate with a
    saucer of dark vinegar beside, steaming. Not translucent soup
    dumplings, no glaze."

#### Youtiao (油条, fried dough sticks) — compact

- **Form**: two strips of dough pressed together and deep-fried into a
  long, puffed, golden-brown, blistered, hollow stick; eaten with soy
  milk (excluded) or congee [MEDIUM — not independently re-checked].
  Model failure: churros (ridged, sugared); breadsticks.
- **Composition & proportions (§4.7)**: 2 sticks ~25–30 cm long, ~4 cm
  wide (LOW) — about 2.5 can-heights — on a plate or paper; deep golden,
  airy, crisp, irregular blisters, the pressed seam line visible along the
  middle; absent: sugar, ridges, dipping chocolate, a bowl of soy milk.
  **Prompt-ready line**: "Two long puffed golden-brown fried dough sticks,
  each about two and a half times the can's height, joined along a
  pressed centre seam, with crisp irregular blistered surfaces, lying on
  paper on a small table. No sugar coating, no ridges." [EDITORIAL]

### G. Festival foods

#### Yuebing (月饼, mooncakes — Mid-Autumn)

- **Category**: Festive — Mid-Autumn (15 Sep 2027); gifted in boxes.
- **Lineage**: Cantonese (广式) is the national default style; Suzhou-style
  flaky mooncakes (苏式, zone 2) and snow-skin (冰皮) are real variants
  [MEDIUM — not independently re-checked].
- **Form (Cantonese)**: a thin glossy brown pastry pressed in a carved
  mould, filled with **lotus-seed paste and one or two salted duck-egg
  yolks** (莲蓉蛋黄); common moulds **100 g and 125 g** (also 50–75 g);
  pastry:filling around 3:7 to 4:6 [MEDIUM — multiple Xiachufang recipes
  (tier 4, via search)].
- **Vessel & scale**: a 125 g cake ~7–8 cm across, ~3.5 cm tall (LOW);
  one whole and one cut into quarters or wedges on a small plate.
- **Texture & finish**: a thin, glossy, amber-brown crust with a crisp,
  embossed pattern and border; the cut face shows smooth, dense, pale
  golden-tan lotus paste and a round orange-red salted yolk, slightly oily.
- **Model failure**: a Western cookie; a pie; Japanese daifuku.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: the whole cake ~45%, the cut wedges ~45%, plate ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Whole mooncake | ~7–8 cm across, ~3.5 cm tall | 1 | Glossy amber-brown, crisp embossed pattern on top (leave the central characters blurred/blank) | Back of the plate |
    | Cut mooncake | quarters | 4 wedges from one cake | Dense tan paste, orange-red yolk cross-section | Front, cut faces to camera |

  - **Arrangement**: whole cake behind, wedges fanned in front.
  - **Vessel fill**: a small 15–18 cm plate.
  - **Served portion vs. whole**: shared in thin wedges — mooncakes are
    rich; one person eats a wedge or two.
  - **State cues**: room temperature, soft sheen on the crust.
  - **Absent on purpose**: legible characters on the top (moulds often
    carry them — keep them blurred or use a flower pattern), tea set.
  - **Prompt-ready line**: "On a small white plate, one round mooncake
    about the can's width across with a glossy amber-brown crust and a
    crisp embossed floral pattern, and in front of it four wedges cut
    from another, showing smooth dense tan lotus paste around a round
    orange-red salted egg yolk. No text on the pattern, no tea set."

#### Zongzi (粽子 — Dragon Boat Festival)

- **Category**: Festive — Dragon Boat (9 Jun 2027).
- **Lineage**: National, **form-changing by region** (§4.2): **north —
  sweet**, glutinous rice with red dates (jujube) or beans, wrapped in
  **reed leaves**, eaten dipped in white sugar; **south — savoury**, with
  pork, salted egg yolk, mushrooms, shrimp, wrapped in **bamboo leaves**
  or, in Guangdong, broad **banana/lotus-type leaves** [HIGH — Beijing
  News, GMW (via search)]. Shapes: triangular, four-cornered pyramid,
  pillow, cylindrical [HIGH — same]. **Default when unspecified**: a
  southern pyramid zongzi in bamboo leaves [EDITORIAL].
- **Vessel & scale**: pyramid ~8–10 cm per side (LOW); on a plate, one
  unwrapped, two still tied with string.
- **Texture & finish**: wrapped — green-olive leaves folded tight, tied
  with cotton string; unwrapped — glossy, compact, sticky glutinous rice
  showing the leaf's ribbed imprint, brown-stained (soy, south) or white
  with red dates (north); cut face shows pork and a yolk (south).
- **Model failure**: Mexican tamales in corn husks; onigiri; lotus-leaf
  sticky rice (a dim sum dish).
- **Composition & proportions (§4.7)** — one plate, southern.
  - **What dominates**: wrapped zongzi ~55%, the opened one ~35%, leaf
    ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Wrapped zongzi | pyramids ~8–10 cm | 2 | Olive-green bamboo leaves, tight folds, white string ties | Back |
    | Opened zongzi | same | 1 | Glossy soy-brown sticky rice with leaf ribs imprinted; cut face showing a chunk of pork and orange yolk | Front, on its opened leaves |
    | Loose string | — | 1 | White cotton | Beside |

  - **Arrangement**: two tied behind, the opened one in front.
  - **Vessel fill**: a 20 cm plate.
  - **Served portion vs. whole**: one per person.
  - **State cues**: warm, faint steam, glossy rice.
  - **Absent on purpose**: corn husks, salsa, realgar wine, tea.
  - **Prompt-ready line**: "Two tight pyramid-shaped parcels of olive-
    green bamboo leaves tied with white string, each a little shorter
    than the can, and in front one opened on its leaves showing glossy
    soy-brown sticky rice with ribbed leaf imprints, cut to reveal a
    chunk of pork and an orange egg yolk, faint steam. Not corn husks."

#### Tangyuan (汤圆 — Lantern Festival, winter solstice in the south) — compact

- **Form**: glutinous rice balls, ~2.5–3 cm (LOW), filled with black
  sesame, peanut or red bean, served in their hot cooking water or a
  sweet osmanthus-scented soup; northern **yuanxiao** are rolled rather
  than wrapped [MEDIUM — not independently re-checked].
- **Composition & proportions (§4.7)**: a ~12 cm bowl, 5–8 balls, the
  balls ~70% of the surface, smooth, glossy, pure white and slightly
  translucent at the edges, one bitten open to show glossy black sesame
  filling; clear or pale soup with a few gold osmanthus flecks; absent:
  mochi dusting, colourful dyes. **Prompt-ready line**: "A small white
  bowl with six smooth, glossy white rice balls, each about half the
  can's width, floating in clear hot syrup with a few tiny gold flower
  flecks, one broken open showing a glossy black sesame filling."
  [EDITORIAL]

---

## EXAMPLE PROMPT LANGUAGE (illustrative — not validated by any image test)

**Home dinner, 3 people, zone 1 (Beijing apartment), hero named as a 2 L
PET:**
> Eye-level photograph of a family dinner table in a Beijing apartment,
> warm ceiling-lamp light, evening dark at the window, tiled floor and a
> sofa softly out of focus. On a plain wooden table: a plate of fluffy
> yellow egg tossed with slumped red tomato, a plate of glossy mahogany
> braised pork-belly cubes, a plate of bright green garlic-stir-fried
> greens and a bowl of clear soup in the centre; at each of three places
> a small white bowl of plain white rice, plain wooden chopsticks resting
> on a small rest beside it, a white porcelain spoon. In the midground a
> 2-litre Coca-Cola Original plastic bottle, red label, not Zero Sugar,
> not any other cola brand, with three filled plain glasses. No teapot or
> teacups, no other drinks, no chopsticks standing in rice, no legible
> text anywhere, nothing held in a hand, neutral colour grading. Pack text
> will be composited in post.

**Hot pot with friends, 3 people, zone 4 (Chongqing), hero named as a
sleek can:**
> Evening in a busy Chongqing hot-pot restaurant, steam hazing warm
> light. In the centre of the table a round steel pot split by an
> S-shaped divider, one half a rolling deep-red broth under shimmering
> chilli oil with dried chillies, the other pale and clear; around it
> plates of ruffled pale beef tripe, curled thin marbled beef slices,
> lotus-root slices and greens; at each place a small bowl of golden
> sesame oil with minced garlic and chopsticks on the plate edge. Beside
> one bowl: a Coca-Cola Original 330 ml sleek can, tall and slim, red
> aluminium, not a short wide can, not Zero Sugar, not any other cola
> brand. No beer bottles, no baijiu glasses, no tea, no red herbal-tea
> cans, no legible signs or menus, nothing held in a hand.

*Before use: run at least two generations per prompt
(`country-file-schema.md` §7.5) and apply this file's confidence tags.*

---

## GAP LOG

- **Composition & proportions blocks (§4.7) are mostly editorial
  synthesis.** Piece sizes are sourced where tagged (xiaolongbao pleats
  and weights, jianbing diameter, bai ji mo diameter, crossing-bridge bowl
  and slice thickness, guobaorou slice thickness, har gow pleats, fish-head
  weight, mooncake weights, noodle widths); counts, surface shares and most
  vessel sizes are reasoned from recipes and serving norms and must be
  checked against two or more image generations per prompt-ready line.
- **Xiaolongbao diameter conflict**: the Nanxiang standard summary gives
  a finished 2.5 cm diameter for a 22–24 g dumpling, which looks too small;
  this file stages them at ~3.5–4 cm pending a better source.
- **Contradiction / gap in `coca-cola-guidelines.md` §4.3 (not edited
  here).** China sells **two 330 mL cans at once** — the classic
  66 mm-wide can and the **sleek 摩登罐 (~57 × 145 mm)** — plus a 200 mL
  mini can. The brand file's "non-US markets default to the 330 mL can
  (115.2 × 66.1 mm)" rule is correct in volume but **ambiguous in
  silhouette** for China. The brand file should add the sleek 330 mL can
  as a separate row, and briefs for China must name which can. The sleek
  can dimensions rest on one tier-4 source (Baidu Zhidao).
- **Brand-file 500 mL row**: China's personal PET is 500 mL, which fits
  `coca-cola-guidelines.md` §4.4; a 300 mL PET and an 888 mL PET also
  exist and are not in the brand file.
- **No verified heights** for the 200 mL mini can, 275/200 mL glass, or
  any PET; tier-4 PET heights are logged LOW only. Awaiting the TCCC
  spec drop flagged in the brand file.
- **Bottler territories** (which provinces COFCO vs. Swire) not confirmed.
- **TCCC China portfolio** (teas, waters, Coca-Cola Plus/fibre variants,
  local flavours) not researched; COFCO's product page was blocked.
- **Housing**: no direct census flat-vs-house share; the apartment
  default is inferred from lift-building shares, household floor area and
  the urbanisation rate.
- **Meal times** rest on travel-guide-tier sources; no time-use survey
  found.
- **Not checked (tagged in place)**: rice bowl, chopstick and spoon
  sizes; tomato-egg regional sweetness; hongshao rou variants; steamed
  fish plating; kung pao; zhajiangmian; siu mei rice; egg tart; tangyuan;
  youtiao; baozi size; shengjian; hot pot pot size; Gen Z housing; Lantern
  Festival 2027 date (computed).
- **Zones 5 (Hunan) and 8 (Yunnan & Southwest)** are thin: one or two
  entries each; Guizhou sour soup fish, Guangxi luosifen, Yunnan
  mushrooms, Hunan 小炒肉 and stinky tofu are not covered.
- **Sensitivities flagged for Fernando (editorial, not TCCC policy)**:
  Xinjiang and Uyghur framing (food only, no ethnic costume, no
  political content); halal separation in zone 7; the cola-chicken-wings
  ingredient question; Qingming no-staging; New Year's 福/couplets as
  legible text.
- **Hong Kong, Macau and Taiwan** are out of scope — separate files
  needed if they become markets.

- **Celebrations pass (2026-10-01) open items**: total guest counts for
  weddings, full-month and longevity banquets were not sourced (only the
  ten-per-table form); the full-month red-egg and ginger custom rests
  mostly on Singapore and diaspora sources; milestone birthday ages,
  wedding-season dates, village courtyard banquets (流水席) and the
  weekend grandparents' dinner were not verified; the Meituan booking
  figure is a commercial source. Banquet-table layouts need image tests
  (turntable crowding, glass-count intrusion).

- **Game-night pass (2026-10-01) open items**: kick-off times (Beijing
  time), the CBA season and game times, and all basketball viewing are
  model knowledge, not verified; viewing side dishes (vegetable skewers,
  sunflower seeds, fried chicken), the mahjong candy-tray spread, KTV
  fruit platters, jubensha session length and food were not verified;
  dou dizhu after the reunion dinner and sports-lottery promotion around
  the World Cup were not searched. No WebSearch was run in this pass.

- **Venue-profile pass (2026-10-01, wave 1) open items**: unverified
  background details: the apartment's sliding kitchen door, side-cabinet
  contents and Beijing winter-dusk time; lighting colour temperatures,
  the display fridge and lucky-cat counter in the home-style restaurant;
  the noodle shop's photo menu board and green halal sign; neon and
  e-bike details at the shaokao street; village courtyard banquets and
  the private-room (包间) furnishings; all subregional variants. Home
  outdoor (courtyard, balcony, picnic) was not profiled (evidence LOW);
  hot pot restaurant and dim sum tea house are queued for wave 2.

## CANDIDATE QUEUE

1. **Fernando decisions**: (a) one file with eight zones vs. a national
   index + regional files (China is the strongest split case so far —
   likely `china-canton.md`, `china-sichuan-chongqing.md`,
   `china-northwest.md` first); (b) cola chicken wings — may a TCCC
   product appear as a cooking ingredient; (c) default zone (Beijing vs.
   Shanghai); (d) Xinjiang framing; (e) HK/Macau/Taiwan scope.
2. Add the sleek 330 mL can (and 200 mL mini can) to
   `coca-cola-guidelines.md` §4.3 once confirmed from a TCCC or bottler
   spec; confirm glass-bottle and PET heights.
3. When search budget allows: bottler territory split; a direct census
   housing-type table; rice bowl/chopstick dimensions; xiaolongbao
   diameter; Hunan and Yunnan/Guizhou/Guangxi entries; egg tart,
   siu mei, zhajiangmian sourcing; Gen Z shared-rental statistics.
4. Image tests (two or more generations each), starting with: the home
   table (individual-plate failure), mapo tofu (Americanised failure),
   xiaolongbao vs. baozi vs. har gow (confusion trio), Lanzhou noodles
   (ramen failure — a halal risk), and hot pot (beer intrusion).
5. Independent §8 audit.

6. Celebrations pass: catalog entries for **roast suckling pig (烤乳猪,
   Cantonese banquet; glossy red-brown crackling in tiles on a long
   platter)**, **longevity peach buns (寿桃包; white buns with a pink tip,
   about can-width, stacked)**, **longevity noodles (长寿面)**, **hairy
   crab (大闸蟹, zone 2, Mid-Autumn)**, **osmanthus / salted duck (桂花鸭,
   Nanjing)**, **niangao (年糕, southern New Year)** and **red eggs (红蛋)**.

7. Game-night pass: catalog entries for **mala xiaolongxia (麻辣小龙虾,
   spicy crawfish; a heap of glossy red crawfish in chilli oil in a big
   bowl or takeaway tub, disposable gloves beside it)**, a **mixed
   shaokao tray** (chicken wings, garlic aubergine, chives, grilled
   mantou slices beside the existing lamb skewers), **guazi (瓜子,
   sunflower seeds in a dish with a shell dish)**, the **New Year candy
   tray (果盘 / 糖果盒)** and the **KTV fruit platter**.

## RESEARCH LOG

- **2026-09-29, first pass (this file).** Built directly — no separate
  scaffold, no subagents. ~41 WebSearch queries (mostly Chinese-language)
  and 1 WebFetch attempt (productandservice.cofco.com — blocked by the
  egress proxy). Topics searched:
  - **Packs and brand**: 330 mL 摩登罐 listings (JD, Suning, Air China
    mall); Swire/COFCO and the 330 mL can; PET sizes (300/500/888 mL,
    1.25/2 L); 摩登罐 vs. classic can dimensions; 200 mL mini can;
    whether the sleek can replaced the classic (both current); glass
    bottles (275/200 mL); 2017 refranchising and bottler plant counts;
    soft-drink market shares and local colas (Future Cola, Tianfu,
    Pepsi/Tingyi); 可乐鸡翅.
  - **Housing and time**: 2020 census households and urban share; 2025
    urbanisation (NBS); lift-building shares and floor area; meal times.
  - **Festivals**: 2027 Spring Festival, Dragon Boat and Mid-Autumn
    dates (Chinese and English sources); 2026 holiday notice; 年夜饭
    north–south differences; zongzi regionality.
  - **Etiquette and drinks**: chopstick taboos, rice bowl, turntable,
    公筷; baijiu toasting and beer brands.
  - **Dishes**: Nanxiang xiaolongbao standard; Tianjin jianbing standard;
    Lanzhou beef noodle five colours and widths; Peking duck carving and
    accompaniments; Chongqing nine-grid hot pot and 油碟; Beijing copper-
    pot mutton; har gow/siu mai/char siu bao; dapanji; guobaorou; duojiao
    yutou; crossing-bridge noodles (incl. Yunnan standard); rou jia mo and
    bai ji mo; Xinjiang polo and nang; Cantonese mooncake weights; mapo
    tofu standard; Beijing baozi.
- **Access limitation**: the COFCO product page was blocked; nearly all
  claims rest on search-result snippets and are marked "(via search)".
- **Sources down-weighted**: Baidu Zhidao Q&A and recipe sites
  (Xiachufang, Meishichina) used only for sizes where nothing better
  surfaced, and marked tier 4 / LOW; Weibo/Sina "3个标准+FAQ" listicles
  treated as corroboration, not sole sources, where possible;
  travel-guide sites (ChinaHighlights, China Xian Tour) used for meal
  times, tagged MEDIUM.
- **No subagents were used.**
- **2026-10-01 celebrations pass (schema §5.7)**: 6 WebSearch queries (wedding banquet form, English and Chinese; longevity birthday buns and noodles; full-month red eggs; 年夜饭 at home vs restaurant 2025 survey; Mid-Autumn reunion dinner dishes). Added CELEBRATIONS & LARGE GATHERINGS with 7 entries (New Year's Eve dinner, Mid-Autumn dinner, wedding banquet, elder's longevity banquet, full-month banquet, birthday dinner, weekend family dinner). Sources: China Youth Daily survey via Sina, CCTV, Xinhua, ihchina.cn, SCMP, Chinese wedding-planning sites (tier 3), Wikipedia; diaspora sources flagged.
- **2026-10-01 game-night pass (schema §5.8)**: built from the cross-market research notes (45 searches across all markets), 0 new searches. Added GAME NIGHT with 3 watch-party entries (late-night football at a shaokao restaurant, late-night football with takeaway at home, CBA/NBA at home [LOW]) and 3 social game-night entries (family mahjong, board-game café or jubensha, daytime KTV for an older group); popularity rated high.
- 2026-10-01 venue-profile pass, wave 1 (schema §5.9): 5 profiles, 5 searches (all in Chinese: apartment dining area, 家常菜馆, Lanzhou noodle shop, shaokao street, wedding banquet hall). Sources were home-design case sites, Sina/Weibo/Zhihu food columns, The Paper, CBNData, Xinhua and wedding-planning sites (tier 2–4); home outdoor swapped out for the noodle shop.
