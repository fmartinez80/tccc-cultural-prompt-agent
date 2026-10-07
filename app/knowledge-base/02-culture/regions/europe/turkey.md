---
country: turkey (Türkiye)
ou: Not confirmed. TCCC reports Türkiye inside its EMEA segment; the internal operating-unit code was not searched or confirmed this pass (same standing caveat as every other started market, see `market-roadmap.md`). What this pass did confirm: Türkiye's bottler is **Coca-Cola İçecek (CCI)**, which also bottles for Pakistan, Central Asia and parts of the Middle East, and runs 13 production facilities in Türkiye [MEDIUM — company-profile and aggregator snippets (MarketScreener, Wikipedia via search, Grokipedia), CCI's own site not read].
status: DRAFT — NEEDS SME/HUMAN REVIEW. First pass, built directly with WebSearch verification of the load-bearing claims. The session's shared search budget ran out before every planned check was made; unchecked claims are tagged as such (see METHOD NOTE and GAP LOG).
research_method: Claude web research (WebSearch; direct page reads of Turkish government, municipal and TÜRKPATENT geographical-indication pages were blocked by the network egress proxy, so those claims rest on search-result snippets and are marked "(via search)" — disclosed per `country-file-schema.md` §6). Structure follows `latam/mexico.md` (the most recent complete file) and the single-file-with-zones pattern of `spain.md`; the HERO PRODUCT SLOT and ICONIC BEVERAGES sections follow `africa/south-africa.md`.
date_drafted: 2026-09-27
---

# Türkiye (Turkey)

## FILE ROLE & METHOD

This file is Türkiye's country file: a single national staging brief with
seven labeled internal zones. One TCCC hero beverage per scene (chosen per
brief — see HERO PRODUCT SLOT), staged against real Turkish dishes,
vessels and settings, with the full drinks landscape — çay, ayran, Turkish
coffee and rakı — documented as context even where a drink is never
itself staged.

**Scope.** Lunch (öğle yemeği), dinner (akşam yemeği — the main family
meal in Türkiye), snacks and street food are in scope. **Breakfast
(kahvaltı) is also in scope for this file**, unlike the Mexico and Spain
defaults, because the Turkey brief named the kahvaltı spread explicitly
and because breakfast is one of the two meals Turkish households most
reliably eat together at home (see GENERAL NORMS). This is a scope change
from the project default — **flagged for Fernando's confirmation** (§1.2;
log in `DECISIONS.md`). No beverage other than the hero TCCC product is
staged; the others are documented in ICONIC BEVERAGES.

### Hard staging rules specific to Türkiye (read before any scene)

1. **Halal table: no pork, ever.** Türkiye's population is overwhelmingly
   Muslim; pork is legal to sell but rare, found mainly in specialist
   shops and some big-city restaurants [MEDIUM — Turkish legal-explainer
   and press sources agree (Avukatistan, Manisa Son Haber, Usta Yemek
   Tarifleri); no official consumption figure found]. No ham, bacon,
   pork sausage, pork ribs, prosciutto or salami-looking cold cuts in any
   scene. **Sucuk, pastırma and salam in Türkiye are beef (or other
   halal meat)** — show them only where the entry calls for them, and
   never let a model render them as streaky bacon or pink ham slices.
   [EDITORIAL rule; the "rare and not eaten by most" claim is MEDIUM]
2. **No alcohol staged, ever — rakı above all.** Rakı, beer and wine are
   real parts of Turkish food culture (see ICONIC BEVERAGES) and are
   documented only. **Türkiye's own law is stricter than most markets**:
   Law No. 6487 (2013), amending Law 4250, bans all advertising and
   consumer-directed promotion of alcoholic drinks and stopped retail
   alcohol sales after 22:00 [HIGH — TBMM law text and multiple Turkish
   legal/press sources]. A meyhane (rakı-and-meze tavern) table therefore
   never appears as a setting for a TCCC product, even with the rakı
   removed — its ice bucket, tall narrow glasses and meze layout read as
   a rakı table.
3. **Ramadan and bayram scenes are religious occasions.** No eating or
   drinking scene should be explicitly set in Ramadan daytime; an iftar
   scene is set at sunset, and nothing on the table looks started before
   the fast is broken. Never stage the Kurban sacrifice, carcasses, blood,
   or piles of raw meat. [EDITORIAL]
4. **Çay and ayran are not staged beside the hero.** Both are the most
   natural drinks at a Turkish table — a model will add a tulip tea
   glass to every breakfast and a copper cup of ayran to every kebab
   unless told not to. Exclude them by name.
5. **General project rules**: no legible text anywhere; nothing held in a
   hand; no drinks other than the hero; never a TCCC product as a mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5).

### Structural decision: one file, seven zones (recommendation — reviewer has final say)

The `country-file-schema.md` §1.1 swap test, applied with the evidence
gathered this pass:

- **A national core travels.** Döner, ızgara köfte, lahmacun, mercimek
  çorbası, kuru fasulye with pilav, the meze spread, the kahvaltı spread,
  simit, börek and baklava read correctly anywhere in the country
  [MEDIUM-HIGH — each is described as nationwide in the sources in its
  entry; national reach mostly not independently re-checked].
- **Some dishes are form-changing by region** (§4.2) and would look wrong
  transplanted: the **kebab itself** — Adana (hot pepper in the mince, a
  long flat skewer, high heat) vs. Urfa (no hot pepper, shorter and
  thicker, lower heat) [MEDIUM-HIGH]; **İskender** is a Bursa dish with a
  registered geographical indication [MEDIUM-HIGH]; **pide shape**
  (Black Sea boat-shaped kayık pide vs. Central Anatolian flat long
  Konya etli ekmek, the latter not re-checked); **lahmacun** (Gaziantep's
  registered version has garlic and no onion, and comes with a roasted
  aubergine [HIGH via GI snippets]).
- **Environment does not travel**: an Istanbul apartment with a Bosphorus
  glimpse, an Aegean whitewashed village, a Mediterranean greenhouse
  coast, the Central Anatolian steppe, the steep green tea slopes of the
  Black Sea, and the basalt-and-limestone Southeast look nothing alike.

**Recommendation: one national file, seven zones**, handled as dish-variant
and environment deltas — the same call as Mexico (seven zones) and Spain
(six), not a US-style index-plus-regional-files split.

**Flagged spinout candidate (not triggered)**: **zone 6, Southeast
Anatolia** (Gaziantep, Şanlıurfa, Hatay, Adana's kebab tradition, which
this file places in zone 3 geographically but which shares the Southeast
register). It holds the densest set of registered-GI dishes in this file
(Antep lahmacun, Antep baklava, Urfa patlıcan kebabı, Urfa ciğer, Antakya
künefe) and a distinct basalt/limestone architecture. If Southeast briefs
exceed roughly a quarter of Türkiye usage, split to
`turkey-southeast.md` (§2.2). **Recommendation for the reviewer, not a
decision** (§7).

### Zones (one scheme, used throughout)

| # | Zone | Covers | Visual register |
|---|---|---|---|
| 1 | Istanbul & Marmara | Istanbul, Bursa, Kocaeli, Tekirdağ, Edirne, Çanakkale, Balıkesir | Dense apartment blocks, ferries and the Bosphorus, tiled rooftops, street simit carts, esnaf lokantası steam tables; Bursa's İskender houses |
| 2 | Aegean (Ege) | İzmir, Aydın, Muğla, Manisa, Denizli | Olive groves, whitewashed and stone villages, bougainvillea, seaside promenades (İzmir Kordon); olive-oil vegetable dishes, wild herbs |
| 3 | Mediterranean (Akdeniz) | Antalya, Mersin, Adana, Hatay | Hot bright coast, citrus orchards and greenhouses, palm-lined boulevards; Adana kebab, Mersin tantuni, Antakya künefe (Hatay also shares zone 6's register) |
| 4 | Central Anatolia (İç Anadolu) | Ankara, Konya, Kayseri, Nevşehir (Cappadocia), Eskişehir | Steppe and wheat fields, dry light, modern Ankara blocks, Cappadocian tuff rock; mantı, etli ekmek, testi kebabı |
| 5 | Black Sea (Karadeniz) | Trabzon, Rize, Samsun, Ordu, Giresun, Artvin | Steep green slopes, tea terraces, rain and mist, wooden and stone houses; hamsi, mısır ekmeği, kuymak, Karadeniz pide |
| 6 | Southeast Anatolia (Güneydoğu) | Gaziantep, Şanlıurfa, Diyarbakır, Mardin | Honey-coloured limestone (Mardin, Urfa), black basalt (Diyarbakır), courtyard houses, hot dry summers; kebab capital, lahmacun, baklava, çiğ köfte |
| 7 | Eastern Anatolia (Doğu) | Erzurum, Van, Kars, Malatya | High plateau, long snowy winters, stone houses; cağ kebabı, the Van breakfast, Kars cheese |

Zone boundaries are a staging convenience, not a claim about identity;
Adana and Hatay sit geographically in zone 3 but their kebab and künefe
traditions share zone 6's register, and either can be argued [EDITORIAL].

### Default when no zone is named

Fall back to **zone 1 (Istanbul) at the everyday register**: an Istanbul
apartment kitchen or living-room table, or a neighbourhood kebapçı,
dönerci or esnaf lokantası. Istanbul is the largest city and the place
where every regional kebab and pide house exists side by side.
[EDITORIAL fallback — not a sourced "most typical Türkiye" claim]

---

## METHOD NOTE (read first)

**Build method, this pass.** Drafted directly from model knowledge and
checked with about 40 WebSearch queries in the same session, prioritising
the claims a scene visibly depends on (pack formats, housing, meal
patterns, registered-GI dish specs, tea-glass and bread sizes, bayram
dates). The session's search budget ran out before the iftar table,
İskender plating, meze sizes and regional-cuisine checks were done.
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
  No Türkiye-specific image tests have been run.
- **"(via search)"** — the source page itself was blocked by the egress
  proxy; the claim rests on the search-result snippet. Turkish
  geographical-indication (coğrafi işaret) documents from TÜRKPATENT
  were all read this way.

**Writing principle.** Describe what the camera sees: surface, sheen,
char, crust, crumb, how butter or yoghurt sits, and real-world size.

**File-wide rules for every scene built from this file:**

1. **Text as atmosphere.** Shop signs, menu boards, price cards, packaging,
   branded tea glasses and cooler lids appear only as heavily blurred,
   unreadable colour. Any readable word, number or brand mark means reject
   or retouch. Blur instructions are known to fail [HIGH — first-party test;
   `country-file-schema.md` §7.5]. Istanbul street scenes carry a strong
   prior toward shop signage — expect to fight it.
2. **The hero product is a TCCC beverage chosen per brief** (HERO PRODUCT
   SLOT). Branding is composited in post (`coca-cola-guidelines.md` §1–2).
3. **No alcohol in any scene**, never a TCCC product as a mixer with alcohol (non-alcoholic TCCC-brand mixes are allowed, schema §5.5), and no
   meyhane setting (see hard rule 2).
4. **No drinks in frame other than the hero product** unless the brief
   explicitly allows a named non-alcoholic companion. Name the likely
   intruders in the negative: tulip-shaped tea glasses, copper cups of
   ayran, Turkish coffee cups, water glasses, şalgam.
5. **Nothing held in a hand.** Döner, simit and balık ekmek rest on a
   surface (`country-file-schema.md` §7.5).
6. **Halal only** (hard rule 1). No pork in any form.

---

## QUICK-REFERENCE: GENERIC SCENE REGISTERS

| Generic scene type | What to draw on |
|---|---|
| **Kebapçı / ocakbaşı** | A charcoal grill (mangal or ocakbaşı hood) behind the counter, long skewers, a grill master; tables with plain cloths, lavaş stacked in a basket, plates of sumac onion, parsley, roasted peppers and tomatoes, lemon halves. The everyday kebab register. |
| **Dönerci (street)** | A vertical rotisserie cone behind a glass counter, a long knife, half-loaves of bread and lavaş, a tray of chopped tomatoes, onions, pickles and fries; standing ledge or a few small tables. |
| **Esnaf lokantası** | The tradesmen's canteen: a steam table (benmari) of stews in steel trays, point-and-choose; plain tables, a basket of sliced white bread, small steel or melamine plates; kuru fasulye, pilav, karnıyarık, soups. |
| **Pideci / lahmacun salonu** | A wood-fired stone oven with a long wooden peel; boat-shaped pides or thin lahmacun on wooden boards or oval steel plates; greens and lemon. |
| **Home dinner (apartment)** | A dining table in an apartment living room (salon) with a lace or patterned cloth, a soup course, a main, a salad, a bread basket; family-style serving bowls. |
| **Home kahvaltı** | The table covered edge to edge with small plates: cheeses, olives, tomatoes and cucumbers, jam, honey with kaymak, eggs; a pan of menemen or sucuklu yumurta in the centre. |
| **Seaside / ferry-side** | Istanbul waterfront, İzmir Kordon or an Aegean harbour: balık ekmek, midye dolma, simit on a bench or railing. |

---

## TRUSTED CONTENT

### HERO PRODUCT SLOT

Every scene carries one TCCC hero product, chosen by the brief. This file
uses `south-africa.md`'s generalised slot; since 2026-09-27 that is the
project-wide rule (the brief dictates the SKU, never the region — see
`DECISIONS.md` and `country-file-schema.md` §5.4).

**Template:**
> [HERO PRODUCT]: {brand and variant exactly as named on pack}, in
> {format and size}, {dominant pack colour and material cue},
> {negated lookalikes}. {Position: standing upright on the surface,
> label facing camera or turned slightly}. Pack text will be composited
> in post.

**Rules:**
- **Name the variant; negate the closest lookalike** (Coca-Cola Original
  vs. Zero Sugar vs. Light; Fanta flavours). An unspecified "Coca-Cola can"
  rendered as the wrong variant in 2 of 3 generations [HIGH — first-party
  test, `coca-cola-guidelines.md` §1].
- **Also negate the local competitor colas.** Türkiye has a domestic cola,
  **Cola Turka** (launched by Ülker in 2003, sold to Japan's DyDo Drinco
  in 2015), plus Pepsi [MEDIUM — Hürriyet/Bigpara and Karar press reports;
  current market share not found]. Never render a lookalike or generic
  red-white cola pack; state "not any other cola brand".
- **Türkiye is a 330 mL-can market** — the `coca-cola-guidelines.md` §4.3
  non-US default applies here unchanged. Turkish retailers list Coca-Cola
  in **330 mL cans** (Original and Zero Sugar, singles and 24-packs) and
  **250 mL cans**. Use 115.2 mm tall × 66.1 mm diameter for the 330 mL can.
  [CONFIDENCE: HIGH for 330 mL as the standard can — Migros, Macrocenter,
  Cimri, Akakçe and wholesale listings agree; HIGH for the 250 mL can —
  Carrefoursa/Getir price listings (via Akakçe) and Bonservis (HoReCa);
  dimensions carried from the brand file, not a Turkish-bottler spec]
- **The brief always names the SKU — never the region or this file**
  (standing rule, 2026-09-27). If a brief names no product, ask for one.
  The register list below is reference for whoever writes the brief, not
  a default:
  - kebapçı, pideci, lokanta, café: **200 mL or 250 mL glass bottle**, or
    a 330 mL or 250 mL can [HIGH that 200 mL and 250 mL glass are current
    — Migros, A101, Metro (24 × 200 mL), Ofix and Yemeksepeti listings;
    "fits" is EDITORIAL]
  - on the go, office, street: a **450 mL PET** or a 330 mL can [HIGH for
    450 mL PET — Migros listing]
  - home dinner for three or more, kahvaltı for a family, iftar, bayram:
    a **1 L, 1.5 L or 2.5 L PET** in the midground with one filled glass
    per place [HIGH — Migros PET listings for 1 L, 1.5 L and 2.5 L]
  - **1 L glass bottle**: a heritage format first sold in 1966, dropped
    from 1987, and reintroduced as a non-deposit bottle for an
    anniversary [MEDIUM — Retail Türkiye, one trade source; current
    availability not confirmed — do not use without checking]
- **Note: the personal PET is 450 mL, not 500 mL.** `coca-cola-guidelines.md`
  §4.4 speaks of "500mL for a heartier individual meal" — in Türkiye the
  nearest current PET is 450 mL [HIGH for the 450 mL listing; whether a
  500 mL PET also exists was not confirmed]. Logged in the GAP LOG.
- **One hero product per scene** unless the brief asks for several.

**Slot sketches (verify local pack details before a production run):**

| Brief calls for | Slot wording |
|---|---|
| Coca-Cola Original, can | "a Coca-Cola Original 330 ml can, red aluminium, not Zero Sugar or Light, not any other cola brand" |
| Coca-Cola Zero Sugar, can | "a Coca-Cola Zero Sugar 330 ml can, black, not the red Original" |
| Coca-Cola Original, small glass | "a Coca-Cola Original 250 ml (or 200 ml) glass bottle, clear contoured glass showing the dark cola, cap on, noticeably shorter than a can is wide by half — a small bottle, not a 330 ml or 500 ml bottle" (exact height not confirmed; see SCALE REFERENCE) |
| Coca-Cola Original, 450 mL PET | "a Coca-Cola Original 450 ml plastic bottle, red label, not the black Zero Sugar" |
| Family multi-serve | "a 1.5-litre (or 2.5-litre) Coca-Cola Original plastic bottle in the midground, one filled plain glass per place setting" |
| Fanta / Sprite / Schweppes | name the flavour and pack colour; negate the nearest lookalike |
| Fuse Tea / Cappy / Damla | only if the brief asks; "Damla" is TCCC's still water and "Damla Minera" its sparkling mineral water in Türkiye [MEDIUM — Coca-Cola Türkiye "Merak Ettim" pages (via search)] |

### ICONIC BEVERAGES (documented context — staging rules follow)

This section records the real Turkish drinks landscape, including alcohol,
and restricts only what is staged — the same design `south-africa.md` uses.

**TCCC Türkiye portfolio — partly verified.** Coca-Cola (Original, Zero
Sugar, Light), Fanta, Sprite, Schweppes, Fuse Tea, Cappy (juice), Damla
and Damla Minera (water), Powerade, and Illy coffee are listed as
TCCC brands sold in Türkiye; CCI's figure is 13 brands across 8
categories [MEDIUM — Coca-Cola Türkiye's own Q&A pages and a CCI
portfolio page, both via search snippets only].

**Non-alcoholic context (never beside the hero; staged only if a brief
allows a named companion):**

- **Çay (black tea)** — the national drink. Brewed in a two-part stacked
  kettle (**çaydanlık**: a large water kettle below, a small teapot, the
  demlik, on top) and served in small **tulip-shaped glasses (ince belli
  bardak)** on a small saucer with a tiny spoon and sugar cubes. Türkiye
  is the world's largest tea consumer per head, ~3.16 kg a year
  [HIGH for çaydanlık method — Turkish Wikipedia (via search); MEDIUM for
  the per-capita ranking — Cumhuriyet, Sabah (both reporting one
  ranking)]. The glass holds **~100–130 mL and stands ~8–9 cm tall with a
  ~6 cm rim** — shorter than the 330 mL can (11.5 cm) [HIGH — Paşabahçe,
  LAV and retailer listings]. Tea is served clear, deep red-amber, without
  milk. **The single most likely intruder in any Turkish scene — negate
  it by name.**
- **Ayran** — salted yoghurt diluted with water, the standard drink with
  kebab, lahmacun, pide and döner. Kebab houses serve it frothy in
  **copper cups (bakır tas/bardak)**; elsewhere in sealed plastic cups or
  small bottles [MEDIUM-HIGH — Hürriyet Lezizz, Konya Yenigün; the copper
  cup and froth are consistent across sources]. About 1.2 billion litres
  a year is one reported figure [LOW — single press source]. **The second
  most likely intruder — negate it in every kebab and lahmacun scene.**
- **Türk kahvesi** — unfiltered coffee in a small handleless-looking cup
  with saucer, often with a glass of water and a lokum; after meals and
  at bayram visits [MEDIUM — not independently re-checked this pass].
- **Şalgam** (fermented purple carrot juice, Adana/Mersin, drunk with
  kebab), **boza** (fermented millet, winter), **sahlep** (hot milk with
  orchid-root flour, winter), **şerbet** (sweet drinks at iftar) [MEDIUM —
  not independently re-checked this pass].

**Alcohol context (never staged; see hard rule 2):**

- **Rakı** — anise spirit, drunk mixed with cold water (it turns milky
  white, "aslan sütü", lion's milk) in tall narrow glasses, with ice,
  over a long meal of **meze**: white cheese and melon (beyaz peynir ve
  kavun) is the canonical pairing, then haydari, fava, şakşuka, aubergine
  salad, and hot starters and fish [HIGH — Yemek.com, Gurme Rehberi,
  IWSA and meyhane sources agree]. The setting is the **meyhane**, and
  the fish-and-rakı dinner (rakı-balık).
- Beer (Efes is the dominant brand) and Turkish wine [MEDIUM — not
  independently re-checked].
- **Law 6487 (2013)** bans every form of alcohol advertising and
  promotion in Türkiye and ended retail sales after 22:00 [HIGH — TBMM
  law text; Hürriyet; Özay Law]. This is a further reason — beyond the
  project's own rule — never to let a TCCC scene carry rakı cues: the
  tall narrow glass, the ice bucket, the carafe of water, the
  white-cheese-and-melon plate on a small tavern table.
- **Meze outside the rakı table.** Many meze (haydari, ezme, fava,
  aubergine salad) are also ordinary dishes at kebab houses and family
  tables — they are staged in that register (see the Meze entry), never
  as a meyhane spread. [EDITORIAL]

### GENERAL NORMS

**Meal pattern — who eats at home, and when.**

- Ipsos's "Türkiye'nin Sofra Atlası" (8,000 households, food diaries and
  table photographs, 1–15 February 2026) found **breakfast eaten at home
  in 93% of households and dinner in 94%**, but **lunch at home only
  around 60%** — lunch has become individual and away-from-home. At
  dinner, **all household members eat together at the same table in 74%
  of meals.** [HIGH — Ipsos's own page, Karar and Sabah reports agree]
- **§5.2 contrast**: in Spain and Mexico the big family meal is at midday;
  **in Türkiye it is dinner.** A family table scene defaults to the
  evening.

| Occasion | Typical time | Confidence |
|---|---|---|
| Kahvaltı (weekday) | ~07:00–09:00 | MEDIUM — not independently re-checked this pass |
| Weekend kahvaltı (long, serpme) | ~09:30–12:00, often an hour or more | MEDIUM — "at least an hour" in several serpme sources; times not checked |
| Öğle yemeği (lunch) | ~12:00–13:30 | MEDIUM — not independently re-checked |
| **Akşam yemeği (dinner, main family meal)** | **~19:00–20:00** | LOW-MEDIUM — no survey of clock time found; direction consistent with the Ipsos findings |
| İftar (Ramadan) | at sunset — in Istanbul roughly 18:00–19:00 in Feb–Mar 2027 | MEDIUM — varies by city and date; check the Diyanet imsakiye for the exact day |

**§5.2 contrast on dinner time**: roughly two hours earlier than Spain's
21:00–22:00 dinner; a Turkish dinner scene in spring or autumn can still
have dusk light at the window. [LOW-MEDIUM]

**Table norms:**
- **Bread at every meal.** A basket of sliced white loaf bread (somun or
  francala) at home and in lokantas; lavaş and pide at kebab houses;
  simit and pide at breakfast. [MEDIUM — not independently re-checked,
  uncontested]
- **Soup starts dinner** at many home and lokanta meals — mercimek
  (red lentil) is the everyday default. [MEDIUM — not independently
  re-checked]
- **Family-style serving**: a stew or main in a shared pot or dish, salad
  in one bowl, each person with their own plate; at breakfast, many small
  shared plates (see Serpme kahvaltı). [MEDIUM]
- **Cutlery**: fork and spoon are the core pair; soup spoons at every
  place for a dinner with soup; knives less central than in northern
  Europe. [LOW-MEDIUM — not independently re-checked]
- **Condiments on the table**: salt, red pepper flakes (pul biber), dried
  mint or sumac at kebab houses, lemon halves or wedges. [MEDIUM]
- **Low-table and floor eating (yer sofrası)** is a real village and
  traditional register (a large round tray, sini, on a low stand with
  cushions around); do not make it the default urban scene. [MEDIUM —
  cultural sources describe it; prevalence not checked]

### SCALE REFERENCE — TÜRKİYE

**Product anchors.**

| Format | Size | Confidence |
|---|---|---|
| **330 mL can** (standard) | **115.2 mm tall, 66.1 mm diameter** | HIGH for the format; dimensions from `coca-cola-guidelines.md` §4.3 |
| 250 mL can | Current (retail and HoReCa); dimensions not confirmed | HIGH (format) |
| **200 mL glass bottle** | Current; iconic small contour bottle; height not confirmed | HIGH (format — Migros, A101, Metro) |
| 250 mL glass bottle | Current; height not confirmed | MEDIUM-HIGH (format — Ofix, Yemeksepeti) |
| 450 mL PET | Current personal PET; dimensions not confirmed | HIGH (format — Migros) |
| 1 L, 1.5 L, 2.5 L PET | Current multi-serve; dimensions not confirmed | HIGH (formats — Migros) |
| 1 L glass | Heritage reissue; availability unconfirmed | MEDIUM |

Sources: [Migros — Coca-Cola kutu 330 ml](https://www.migros.com.tr/coca-cola-orijinal-tat-kutu-330-ml-p-7a3911);
[Akakçe — Coca-Cola 330 ml](https://www.akakce.com/gazli-icecek/en-ucuz-coca-cola-330-ml-fiyati,3571342.html);
[Bonservis — Coca-Cola kutu 250 ml](https://www.bonservis.com/coca-cola-kutu-250-ml);
[Migros — cam şişe 200 ml](https://www.migros.com.tr/coca-cola-orijinal-tat-cam-sise-200-ml-p-7a3fdc);
[Metro Türkiye — 24 × 200 ml](https://online.metro-tr.com/coca-cola-owb-icecek-265204-p-265204);
[Ofix — cam şişe 250 ml](https://www.ofix.com/coca-cola-cam-sise-250-ml-x-24-adet-p-3488);
[Migros — PET 450 ml](https://www.migros.com.tr/coca-cola-orijinal-tat-pet-450-ml-p-7a3d6e);
[Migros — PET 1 L](https://www.migros.com.tr/coca-cola-orijinal-pet-1-l-p-7a3bcc);
[Migros — PET 1,5 L](https://www.migros.com.tr/coca-cola-orijinal-tat-pet-15-l-p-7a3c97);
[Retail Türkiye — 1 litre cam şişe geri döndü](https://retailturkiye.com/firmalardan/coca-colanin-efsane-1-litre-cam-sisesi-geri-dondu/).

**Glass-bottle height, stated honestly**: no Turkish source for the 200 mL
or 250 mL bottle's height was found. Don't write an absolute height for
it into a prompt; when a glass bottle is the hero, anchor food size to a
tea-glass-free vessel or the plate instead, or describe the bottle only
as "a small contour glass bottle". [EDITORIAL]

**Food and table scale anchors.**

| Item | Real size | Relative to the 330 mL can (11.5 × 6.6 cm) | Confidence |
|---|---|---|---|
| Tulip tea glass (never staged beside hero) | 8–9 cm tall, ~6 cm rim, 100–130 mL | about three-quarters of the can's height | HIGH |
| **İstanbul simidi** | **12–15 cm across** the outer ring; 100–105 g if molasses-dipped | about the can's height across; roughly twice its diameter | HIGH (GI via search; Türkiye Turizm Ansiklopedisi) |
| **Lahmacun** | **~25–30 cm across**, dough ≤2–3 mm | more than twice the can's height across; thinner than a coin stack — paper-thin | MEDIUM (tier-4 lahmacun trade site) + HIGH for ≤3 mm dough (Antep GI via search) |
| **Karadeniz kayık pide** | **~30–35 cm long, 10–15 cm wide** | about three can-heights long, about two can-widths wide | MEDIUM (Turkish Wikipedia via search + recipe sources) |
| Ramazan pidesi | 300–400 g (up to 500 g) round flatbread; diameter not sourced (~25–30 cm, not re-checked) | wider than two can-heights | MEDIUM for weight (Yemek.com, Safranbolu Fırını) |
| **Kayseri mantı** | **squares 15–16 mm before folding; dough 1–1.2 mm**; "forty in one spoon" | each dumpling smaller than a fingertip, about a quarter of the can's diameter | HIGH (TÜRKPATENT GI via search + Kültür Portalı) |
| **Adana kebab skewer** | flat iron blade **~3 cm wide**; skewers 90–120 cm before cooking | the meat is about half the can's width across | MEDIUM (Adana GI summary via search, Yeni Ankara) |
| Çay glass saucer / tea spoon | ~10 cm / ~10 cm | — | LOW (not re-checked) |
| Copper ayran cup | ~8–10 cm tall | shorter than the can | LOW (not re-checked; never staged beside hero) |
| Standard dinner plate | 26–28 cm | about 2.3 can-heights | per `tableware-composition-reference.md` §2 |
| Lokanta small plate | ~20–22 cm | not re-checked | LOW |
| Baklava piece (kare dilim) | ~4–5 cm square, ~3 cm tall | about the can's diameter across, a quarter of its height | LOW-MEDIUM — not independently re-checked |

**Vessels.**

| Vessel | Look | Confidence |
|---|---|---|
| **Sahan** | Small shallow two-handled pan, copper (tinned inside) or steel, ~16–20 cm, used for menemen, sucuklu yumurta and served straight to the table | MEDIUM — not independently re-checked |
| **Bakır tepsi** (copper tray) | Round copper tray for künefe, baklava | MEDIUM (künefe sources) |
| **Güveç** (clay casserole) and **testi** (sealed clay jug) | Glazed brown-red earthenware | MEDIUM — not independently re-checked |
| **Esnaf lokantası steel tray** | Rectangular steel trays in a steam table, stews ladled onto small plates | MEDIUM |
| **Kahvaltılık** (divided breakfast dish) and small **çukur tabak** | Small white or patterned plates and bowls, ~10–14 cm, many on one table | MEDIUM |
| **Oval steel or wooden pide board** | Holds a boat pide or lahmacun | MEDIUM |

### TEXTURE LEXICON (use in prompts)

| Surface | Use | Avoid |
|---|---|---|
| Lavaş | "thin, soft, pale wheat flatbread with scattered brown blisters, folded, slightly translucent at the edges" | "tortilla," "naan," "pita pocket" |
| Pide / simit crust | "deep golden-brown, glossy from egg wash or molasses, crusted with toasted sesame" | "bagel," "pretzel" |
| Minced-meat kebab (Adana/Urfa) | "a long, flattened log of minced lamb with ridged finger marks along it, charred at the ridges, glistening with rendered fat" | "sausage," "hot dog," "smooth cylinder" |
| Döner slices | "thin, wide, irregular shavings of meat with crisp browned edges and a juicy centre, curled" | "gyro strips," "pulled pork," "ham slices" |
| Yoghurt | "thick, matte, bright-white strained yoghurt, spooned in a soft mound with small peaks" | "sour cream," "mayonnaise," "runny glossy sauce" |
| Sizzled butter | "clear golden foaming butter, poured hot, pooling with a reddish tint from pepper" | "melted cheese," "orange oil slick" |
| Beyaz peynir | "crumbly, bright-white brined sheep's-milk cheese, cut into rough rectangles, matte, slightly moist" | "feta block with herbs," "mozzarella" |
| Char (mangal) | "irregular charcoal char on ridges and edges, blistered skin on peppers and tomatoes" | "neat crosshatch grill marks" |
| Olive-oil vegetables (zeytinyağlı) | "soft, glossy vegetables in a thin, golden, cool olive-oil film, served at room temperature" | "steaming stew," "creamy" |

The most common model failures for Turkish food: **döner rendered as a
Greek gyro in pita with tzatziki and fries inside**; **kebab as a smooth
sausage**; **a bacon-like sucuk**; **"Turkish" scenes as a hookah-and-
lanterns bazaar**. Negate them explicitly. [EDITORIAL]

### VISUAL & PLATING NORMS

- **Palette**: deep charcoal char and brown-red meat; paprika and pul biber
  red in butter and on kebab; bright parsley green; purple-red sumac onion;
  white yoghurt; golden egg-washed and sesame-crusted breads; the olive,
  tomato-red and cucumber green of a breakfast table; copper. [EDITORIAL]
- **Kebab plates are composed on lavaş**: the meat lies on a sheet of
  lavaş, with grilled tomato and green pepper at the edge and a mound of
  sumac onion with parsley; lemon on the side [MEDIUM-HIGH — Lezzet and
  Yemek.com describe this plating for Adana].
- **Breakfast is many small plates, not one plated breakfast.** [HIGH —
  every serpme source]
- **Lokanta food is homely**: stews ladled, pilav in a mound, no
  garnishing beyond a parsley sprig or pepper. [MEDIUM]
- **Steam and freshness**: soup and pilav steaming; butter foaming as it
  lands on İskender; bread fresh from the oven; olive-oil dishes cool and
  steamless. [EDITORIAL]
- **Grade neutrally.** Avoid the golden-hour orientalist haze that image
  models attach to "Turkey" (lanterns, hookah smoke, carpets in every
  room). Use the zone's real light: bright Aegean and Mediterranean sun,
  grey-green Black Sea mist, clear dry Anatolian light. [EDITORIAL]

### ENVIRONMENT & STAGING SCENES

#### General environmental norms

- **"At home" usually means an apartment in a multi-storey block.** TÜİK's
  2021 Building and Dwelling Characteristics Survey (from the census
  frame) reports households by building height: **11.7% in single-storey
  buildings, 17.3% in two-storey, 14.4% in five-storey, 13.0% in
  six-storey, and 9.5% in buildings of ten or more storeys** (the rest in
  three-, four- and seven-to-nine-storey buildings). [HIGH — TÜİK bulletin
  and Habertürk/AA/DHA reports agree] TÜİK does not publish a single
  "flat vs. house" share in the snippets found, so the exact split is
  unconfirmed; but with only ~29% of households in one- or two-storey
  buildings, **an apartment is the safe urban default**, and a detached
  house (müstakil ev) reads as village, small-town, or affluent suburb.
  [MEDIUM for the inference; the storey figures are HIGH]
  [SOURCE: [TÜİK — Bina ve Konut Nitelikleri Araştırması, 2021](https://data.tuik.gov.tr/Bulten/Index?p=Survey-on-Building-and-Dwelling-Characteristics-2021-45870);
  [Habertürk — TÜİK bina ve konut istatistikleri](https://www.haberturk.com/bina-ve-konut-istatistikleri-3550964-ekonomi)]
- **Homes are getting smaller and more single-person**: average household
  size has fallen from 4 (2008) to about 3.08 (2025), single-person
  households are ~20.5%, and the average flat shrank from ~121 m² (2010)
  to ~97 m² (2025). [MEDIUM — Bigpara/Hürriyet and Yeni Asır reports of
  TÜİK data]
- **§5.2 contrast**: close to Spain's flat-dwelling norm and the opposite
  of Mexico's 73% single-house figure.
- **Interior markers (pick one or two per scene)**: a salon (living-dining
  room) with a dining table under a lace or patterned tablecloth; a
  glass-fronted display cabinet (vitrin) with tea sets; a balcony with
  plants and a small table (very common and genuinely used for breakfast
  and tea); a compact kitchen with a gas hob, the çaydanlık on it; rugs or
  kilims on tiled or laminate floors; slippers at the door. [MEDIUM —
  uncontested general knowledge, not individually re-checked]
- **Exterior markers**: concrete apartment blocks of 5–8 storeys with
  balconies and awnings, satellite dishes, rooftop solar water heaters
  (especially in the south and west), laundry on balcony lines; in Istanbul,
  hillside streets with the water in view; mosques' domes and minarets on
  the skyline (keep them distant, never framed as a backdrop for the hero).
  [MEDIUM — not individually re-checked; staging note EDITORIAL]
- **Gen Z lens (§5.3)**: young adults commonly live with parents until
  marriage or work; university students live in dormitories (yurt) or
  shared flats (öğrenci evi) in Istanbul, Ankara, İzmir and Eskişehir
  [LOW-MEDIUM — not independently re-checked]. Stage a young adult at the
  family table or in a small shared-flat kitchen with a laptop, a kettle,
  plants and a small balcony — neither a chaotic dorm nor a showroom.
- **Caricature avoidance [EDITORIAL]**:
  - **Orientalist Türkiye**: hookahs, hanging mosaic lanterns, carpets on
    every surface, belly dancers, fezzes, evil-eye beads everywhere, the
    Grand Bazaar as default background. An evil-eye bead (nazar boncuğu)
    by a door is real — one, small, blurred, at most.
  - **Greek or Arab conflation**: gyro-in-pita, tzatziki, hummus as the
    default meze (hummus is real in the South but not the national meze
    default), falafel.
  - **Postcard-only Türkiye**: Cappadocian balloons, the Blue Mosque and
    Pamukkale as every backdrop.
  - **Poverty framing**: crumbling gecekondu (informal houses) as the
    "authentic" default.
  - The ordinary baseline is a tidy, lived-in apartment, a busy clean
    kebapçı or lokanta, and a crowded weekend breakfast table.

#### Scenario: Casual lunch at home — 1 person

A kitchen table or balcony table in an apartment, ~12:30–13:30, daylight.
A bowl of mercimek çorbası with a lemon wedge and a slice of bread, or a
plate of kuru fasulye with pilav and a small bowl of pickles, or leftover
karnıyarık. Hero (from the brief; formats that fit): a 330 mL can or a
450 mL PET beside the plate. Gen Z: a lahmacun or döner delivered in its
paper, unwrapped on a plate at a shared-flat table. [EDITORIAL; lunch at
home being less common than dinner is HIGH per Ipsos]

#### Scenario: Casual lunch at home — 2 people

Two at a small kitchen or balcony table: a shared plate of börek or
gözleme cut into pieces, a çoban salatası, two soup bowls; or two
lahmacun on plates with parsley and lemon. Hero (from the brief; formats
that fit): two cans, or a 1 L PET with two glasses. No tea glasses.
[EDITORIAL]

#### Scenario: Casual lunch at home — 3 people

A weekend family lunch or a late weekend breakfast-lunch (the serpme
kahvaltı often plays this role on Sundays): the table covered in small
plates, a menemen pan in the centre, bread and simit. Or a pide order
shared on boards. Hero (from the brief; formats that fit): a 1.5 L PET in
the midground with a glass at each place. Leave the tea out of frame.
[EDITORIAL]

#### Scenario: Dinner at home, indoors

**The main Turkish family meal** (~19:00–20:00): a salon dining table
with a patterned cloth; soup in individual bowls to start, then a main in
a shared dish (karnıyarık, köfte with potatoes, tavuk sote, a stew with
pilav), a salad bowl, a bread basket; 3–5 people, all household members
present [HIGH for the family-together norm — Ipsos 74%]. Warm interior
light, dusk at the window in spring and autumn. Hero (from the brief;
formats that fit): a 1.5 L or 2.5 L PET in the midground, one filled
glass per place. [EDITORIAL composition]

#### Scenario: Meal outdoors at home

- **Balcony or garden mangal**: a small charcoal grill (mangal) on a
  balcony, in a garden, or at a picnic spot (piknik is a major weekend
  institution in parks and by the sea); köfte, tavuk kanat (wings),
  şiş, grilled peppers and tomatoes, lavaş, çoban salatası, on a folding
  table. [MEDIUM — not independently re-checked; balcony grilling rules
  vary by building] Hero: a 1.5–2.5 L PET with glasses, or cans.
- **Balcony breakfast**: the kahvaltı spread on a small balcony table
  with plants — a very Turkish register. [EDITORIAL]

#### Scenario: Meal on the go — 1 person

A **döner** or **dürüm** on its paper on a dönerci's ledge; a **simit**
on a bench on the Istanbul waterfront; **balık ekmek** on a railing by the
water; **midye dolma** on a small plate at a stall; a **çiğ köfte dürüm**.
Hero (from the brief; formats that fit): a 330 mL can or 450 mL PET on
the ledge or bench. **§5.2 contrast**: like Mexico and unlike Uruguay,
street food is dense and everyday. [MEDIUM — not independently
re-checked; uncontested]

#### Scenario: Away from home — 1 person at a restaurant/café

An **esnaf lokantası** at 12:30: a tray-table with kuru fasulye and
pilav, a small salad, bread; or a single Adana portion at an ocakbaşı
counter watching the grill. Hero: a small glass bottle or a can.
[EDITORIAL; lunch-away-from-home trend HIGH per Ipsos]

#### Scenario: Away from home — 2–3 people

A kebapçı table with two kebab plates, a shared lahmacun or pide, a meze
starter plate (acılı ezme, haydari), lavaş in a basket; or a pideci with
two boat pides on boards; or a weekend serpme kahvaltı at a café, the
table covered in small plates. Hero: two small glass bottles or cans, or
a 1 L PET. **Never a meyhane table** (hard rule 2). [EDITORIAL]

---

## CROSS-CUTTING REGISTER: STREET FOOD

- **Simit cart** (simitçi): a glass-sided red or wooden cart stacked with
  simit, sometimes poğaça; also carried on a tray on the head in older
  scenes. [MEDIUM — not independently re-checked]
- **Dönerci window**: vertical rotisserie cone behind glass, a long thin
  knife, half-loaves and lavaş stacked. [MEDIUM]
- **Balık ekmek boats** at Eminönü and Karaköy: grilled mackerel
  sandwiches from boats rocking at the quay; the tradition dates to the
  late 19th century [MEDIUM — Hürriyet, Lezzet]. Avoid legible boat
  signage.
- **Midye dolma sellers**: a tray of stuffed mussels with lemon wedges.
  [MEDIUM — not independently re-checked]
- **Kokoreç** (grilled lamb intestines wrapped round a spit, chopped with
  tomato and pepper in bread) — real and halal, but visually confusing to
  outsiders; use only if briefed. [MEDIUM — not independently re-checked]
- **Staging**: food on a ledge, bench, railing or counter, never in hand.

## CROSS-CUTTING REGISTER: FESTIVALS & SEASONAL OCCASIONS

Religious holidays follow the lunar Hijri calendar and move ~11 days
earlier each year. As of drafting (2026-09-27), the 2026 dates below are
past; the 2027 dates are the next ones a production would hit.

| Occasion | 2026 | 2027 | Confidence |
|---|---|---|---|
| **Ramazan (fasting month)** | began ~19 Feb 2026 (inferred from the Bayram date; not independently re-checked) | **8 Feb – 8 Mar 2027** (first sahur the night of 7→8 Feb; first teravih 7 Feb) | HIGH for 2027 — Diyanet calendar via Hürriyet, Habertürk, Sabah |
| **Ramazan Bayramı** (Şeker Bayramı) | **20–22 Mar 2026** | **9–11 Mar 2027** (arife 8 Mar) | HIGH — Dünya, Takvim.com, Timeturk |
| **Kurban Bayramı** | **27–30 May 2026** (arife 26 May) | **16–19 May 2027** (arife 15 May; 19 May also a national holiday) | HIGH — Dünya, CNN Türk, Milliyet, Milli Gazete |

- **İftar (the fast-breaking meal at sunset).** The table is set before
  sunset and nobody eats until the call to prayer. Traditional elements:
  **dates (hurma)** and water or olives to break the fast, a **soup**
  (often mercimek), **Ramazan pidesi** (a round, puffy flatbread, egg-washed
  and scattered with sesame and nigella seed, 300–400 g, bought hot from
  the bakery each afternoon), **iftariyelik** (a small plate of cheeses,
  olives, sucuk, pastırma), a main, and **güllaç** (paper-thin starch
  sheets soaked in rose-scented milk, layered with nuts and pomegranate)
  for dessert [HIGH for Ramazan pidesi form and weight — Yemek.com,
  CarrefourSA, Safranbolu Fırını; MEDIUM for hurma, güllaç and pide as
  "the three symbols of Ramadan" — Hürriyet Aile; iftar order not
  independently re-checked]. **Staging**: the moment just before iftar —
  a full, untouched table, warm lamp light, dusk blue at the window; the
  hero product standing untouched in the midground. **Keep water glasses
  and tea out of frame** (rule 4) and never frame the hero as "the first
  sip" that breaks the fast; dates and water hold that role. [EDITORIAL]
  Also real and stageable: municipal and community iftar tents (keep
  signage blurred). **Sensitivity, flagged for Fernando**: iftar is a
  religious act; TCCC Türkiye's own Ramadan-advertising practice was not
  researched.
- **Sahur** (pre-dawn meal): real, but a dark 03:00–05:00 scene — use only
  if briefed.
- **Ramazan Bayramı (Şeker Bayramı)**: family visits to elders, sweets and
  lokum offered to guests, baklava, Turkish coffee; children collect
  candy. Stage a living-room coffee-table scene with a baklava tray and a
  candy dish, the hero in the midground. [MEDIUM — not independently
  re-checked]
- **Kurban Bayramı**: families who can afford it sacrifice an animal and
  share the meat with relatives and the poor. On the first day,
  **kavurma** — fresh sacrificial meat cooked in its own fat with a
  little butter — is eaten, traditionally with buttered rice pilav;
  baklava is the bayram dessert. [HIGH for kavurma as the first-day dish —
  Yemek.com, Hürriyet, and the Diyanet Bayram Gazetesi's historical piece;
  MEDIUM for baklava, Yemek.com] **Never stage the sacrifice, the animal,
  carcasses, meat piles or blood** — stage the family meal with kavurma
  and pilav. [EDITORIAL]
- **National days**: 23 April (children's day), 19 May, 29 October
  (Republic Day). Flags with the star and crescent are ubiquitous; keep
  them blurred and never in hero position. [LOW-MEDIUM — dates
  uncontested; staging EDITORIAL]
- **New Year's Eve** (yılbaşı) is a secular family-dinner occasion in
  cities — often with turkey or roast chicken. [LOW-MEDIUM — not
  independently re-checked]
- **Mosques and religious imagery**: do not stage a TCCC product in or
  beside a mosque, prayer rugs or Qur'an. [EDITORIAL, same stance as
  `spain.md`'s Semana Santa]

Full staging for each celebration: see CELEBRATIONS & LARGE GATHERINGS below.

---

## CELEBRATIONS & LARGE GATHERINGS

The FESTIVALS & SEASONAL OCCASIONS register above stays the calendar
index; this section is the staging layer, per schema §5.7. The hard
staging rules at the top of this file govern every entry: no pork, no
alcohol or meyhane cues, Ramadan and bayram treated as religious
occasions, and **no çay or ayran beside the hero** (both are on every
real celebration table here and must be negated by name). Breakfast is
in scope for this file generally, but this pass follows the 2026-10-01
project rule: bayram mornings are mentioned, and the main midday or
evening meal is what gets staged.

### How large gatherings work here

- **Who gathers.** The extended family, with elders at the centre:
  bayram means visiting elders' homes in turn; iftar invitations (*iftar
  daveti*) host relatives, neighbours and friends; life events scale up
  fast. A family iftar or bayram meal is about 6 to 15; a sünnet (boys'
  circumcision celebration) feeds dozens to a few hundred; a wedding is
  commonly put at 200 to 450 guests by Turkish wedding-industry sites.
  [LOW-MEDIUM for the wedding figure, industry sites only; EDITORIAL
  for the rest]
- **Where (intake venues).** *Home indoor*: iftar, bayram meals and New
  Year's Eve in the apartment salon, the dining table extended or a
  second table added (see ENVIRONMENT; average household now about 3,
  so celebration tables are visibly larger than the household).
  *Home outdoor*: the weekend mangal on a balcony or garden; *other*:
  piknik in parks and by the sea, wedding salons (*düğün salonu*), village
  squares and gardens for köy düğünü, municipal iftar tents. *Restaurant*:
  hotel and restaurant iftar menus, some sünnet and birthday meals.
  [MEDIUM — ENVIRONMENT section; wedding and catering sources]
- **Table form and serving style.** Urban homes: one dining table with a
  lace or patterned cloth, soup served individually first, then shared
  mains, pilav and salad from the centre, each person on their own plate
  (see GENERAL NORMS). Village and traditional: the **yer sofrası** (a
  large round tray, *sini*, on a low stand or cloth on the floor, cushions
  around) and long trestle tables. Communal events (köy düğünü, sünnet,
  mevlit) are fed from **huge copper or steel cauldrons (*kazan*)** of
  etli pilav, keşkek and stew cooked over wood fires by neighbours
  working together (*imece*), ladled onto plates. Salon weddings serve a
  plated menu (starter, ordövr plate, main, dessert) or no meal at all
  (cake and soft drinks only). [MEDIUM — Samsun and Konya local press,
  catering and wedding-salon sources]
- **Plate and cutlery norms that differ from everyday.** Fork and spoon
  remain the core pair; the "guest" china and the vitrin's glassware come
  out; a soup bowl at every place for iftar. Cauldron food goes onto
  disposable or plain white plates with a spoon. [EDITORIAL]
- **Snapshot-staging default for this market.** The three most authentic
  cues: (1) a table crowded edge to edge with shared dishes, more than the
  visible diners could eat (bread, pilav, a main, salad, börek, a sweets
  tray), partly cropped; (2) an extra table or chairs from the kitchen
  pushed on, or a second sofra soft in the background; (3) the occasion's
  marker at the frame edge: dusk at the window for iftar, a sweets and
  lokum dish on the coffee table for bayram, a kazan steaming in the
  background for a communal event. Blurred relatives stay within the
  2.5-face limit; headscarves and uncovered hair both appear naturally in
  a mixed family. [EDITORIAL]

#### Celebration: İftar invitation (iftar daveti)
- Type: calendar holiday (religious month; nightly, with invitations
  through the month).
- When: at sunset during Ramazan (2027: 8 February to 8 March); intake
  time evening (dusk). See the register for the call-to-prayer rule.
- Gathering: the household plus invited relatives, neighbours or friends,
  about 6 to 15; home indoor. Hotel and restaurant iftar menus and
  municipal iftar tents are the out-of-home variants. [EDITORIAL;
  register for the tents]
- The spread: see catalog: Ramazan pidesi and the iftar table (national)
  for the table centre (pide, mercimek soup, dates, the iftariyelik
  plate). An invitation table adds more: a soup course (see catalog:
  Mercimek çorbası; ezogelin is common), a meat-and-vegetable main with
  rice or bulgur pilav, börek (see catalog: Börek), salad (see catalog:
  Çoban salatası), and a dessert (güllaç or a milk pudding; see Compact
  sweets). [MEDIUM — Yemek.com, lezzet.com.tr and catering menus agree on
  soup, main, side, dessert] A guest table carries about 6 to 10 shared
  dishes plus a soup bowl at each place.
- Snapshot staging: **1 setting**: one untouched soup bowl and an empty
  plate at the near end, the whole Ramazan pidesi and the dates plate in
  the midground, the main-dish pot cropped at the edge. **2 settings**:
  two identical untouched soup bowls, the pide between them, iftariyelik
  plate and börek tray behind. **Small group**: three or four settings,
  every shared dish crowding the centre, the table running out of frame
  toward the window. Cues: dusk blue at the window, warm lamp light;
  more soup bowls continuing beyond the frame; a second pide; extra
  chairs. Nothing looks started, and the hero stands untouched in the
  midground (never "the first sip"). [EDITORIAL, extending the register]
- Decor and cues: the patterned tablecloth, the vitrin behind, a
  crescent-shaped lantern at most (soft). Avoid: Orientalist lanterns and
  hookahs.
- Never stage: eating before sunset; water or tea glasses; prayer, the
  Qur'an or a mosque interior; alcohol.
- Confidence and sources: MEDIUM ([Yemek.com — İftar menüsü](https://yemek.com/ramazan/);
  [Lezzet — İftar yemekleri](https://www.lezzet.com.tr/tarif/iftar-yemekleri));
  register and catalog sources for the table centre; EDITORIAL for
  staging. Sensitivity flag for Fernando carried over from the register.

#### Celebration: Ramazan Bayramı family meal (Şeker Bayramı)
- Type: calendar holiday (3 days; 2027: 9 to 11 March).
- When: bayram morning is prayers, kissing elders' hands and a festive
  breakfast (out of scope here); stage the **family lunch or dinner** at
  the elders' home (midday or evening), or the afternoon visit at the
  coffee table (golden-hour).
- Gathering: children and grandchildren visiting parents and
  grandparents, relatives coming and going; about 8 to 15 at the table;
  home indoor. [MEDIUM — hand-kissing and visiting customs are widely
  documented]
- The spread: a bayram table typically has börek (often several kinds),
  **buttered rice pilav** ("the bayram table's must"), a meat dish such
  as hünkâr beğendi (braised meat on smoky aubergine purée) or et sote,
  a green salad, and baklava for dessert (see catalog: Baklava (zone 6 —
  Antep; national); Börek). Visitors are offered sweets, chocolate and
  lokum from a dish, plus cologne, at the door. [MEDIUM — food-writer
  and recipe-site sources agree; no institutional source] Hünkâr beğendi
  has no catalog entry: a mound of pale, creamy aubergine-and-cheese
  purée under a dark, glossy tomato-braised meat stew, on a 26cm plate;
  added to CANDIDATE QUEUE. Shared vessels: 5 to 8.
- Snapshot staging: **1 setting**: one plate with hünkâr beğendi and a
  spoon of pilav, a börek tray and the pilav dish behind, a baklava tray
  cropped at the edge. **2 settings**: two identical plates, the pilav
  dish and meat pot between them. **Small group**: three or four
  settings, all dishes crowded centrally. Coffee-table variant: a dish
  of wrapped sweets and lokum and a small baklava plate on a living-room
  coffee table, the hero in the midground (register entry). Cues: a
  candy dish and a cologne bottle (unlabelled) on the sideboard;
  visitors' shoes by the door soft in the background; extra chairs.
  [EDITORIAL]
- Decor and cues: the best tablecloth, the vitrin, everyone in good
  clothes. Avoid: legible "İyi bayramlar" banners.
- Never stage: Turkish coffee cups or tea glasses beside the hero; the
  mosque prayer; money handed to children as the subject.
- Confidence and sources: MEDIUM ([Arda'nın Mutfağı — Bayram ve sofra
  ritüelleri](https://www.ardaninmutfagi.com/ardadan-yazilar/bayram-ve-sofra-rituelleri);
  [Migros TV — Bayram gelenekleri](https://migrostv.migros.com.tr/hic-degismeyen-bayram-gelenekleri));
  EDITORIAL for staging.

#### Celebration: Kurban Bayramı family meal (Kurban Bayramı)
- Type: calendar holiday (4 days; 2027: 16 to 19 May).
- When: the first-day kavurma is traditionally a morning dish (see
  catalog: Kavurma); this pass stages the **family midday or evening
  meal** of the first days, when fresh meat dominates every table
  (intake time midday or evening).
- Gathering: extended family, about 8 to 15; home indoor, or home
  outdoor at a garden or village house where meat is grilled. [EDITORIAL]
- The spread: kavurma with buttered pilav (see catalog: Kavurma), grilled
  meat or köfte (see catalog: Izgara köfte), a meat stew, salad, bread,
  baklava. [HIGH for kavurma, register and catalog; MEDIUM for the rest]
  Shared vessels: a kavurma pan or dish, the pilav dish, a salad bowl, a
  bread basket, a baklava tray; about 5 to 7.
- Snapshot staging: **1 setting**: one plate of kavurma and pilav (per the
  catalog's composition), the kavurma pan cropped behind, a salad bowl
  in frame. **2 settings**: two identical plates, the kavurma pan and
  pilav dish between them. **Small group**: three or four settings, a
  baklava tray at the far edge. Cues: more plates continuing out of
  frame; a garden mangal smoking softly behind for the outdoor variant;
  relatives blurred. [EDITORIAL]
- Never stage: the sacrifice, the animal, carcasses, raw meat piles,
  blood, knives in hero position (hard rule 3); ayran beside the hero.
- Confidence and sources: HIGH for kavurma (catalog sources); MEDIUM for
  the wider table; EDITORIAL for staging.

#### Celebration: New Year's Eve dinner (Yılbaşı)
- Type: calendar holiday (secular).
- When: 31 December, from about 20:00 to midnight; intake time evening.
- Gathering: family or friends at home, about 4 to 10; home indoor.
  [EDITORIAL]
- The spread: **hindi dolması** (whole roast turkey stuffed with spiced
  rice pilaf, often with chestnuts and pomegranate molasses) is cited as
  the centrepiece of the urban New Year's table, with the pilaf also
  served alongside, plus meze-style cold dishes (see catalog: Meze, in
  the family register), salads and a cake or dessert. Roast chicken is
  the smaller-household version. [MEDIUM — Hürriyet Lezizz and Lezzet
  recipe features; the register's LOW-MEDIUM note is upgraded for the
  dish, not for prevalence] No catalog entry: the turkey reads as a whole
  glossy amber-brown bird on a 40 to 45cm oval platter, pilaf spilling
  from the cavity and heaped around it, pomegranate seeds scattered;
  added to CANDIDATE QUEUE.
- Snapshot staging: **1 setting**: one plate with turkey slices and
  chestnut pilaf, the whole bird on its platter cropped behind, a meze
  plate in frame. **2 settings**: two identical plates, the platter
  between them. **Small group**: three or four settings round the
  platter end, cold dishes filling the rest. Cues: a small decorated
  New Year's tree (*yılbaşı ağacı*, secular here) soft behind; streamers;
  the table leaving frame. [EDITORIAL]
- Never stage: rakı, wine or champagne (a strong prior for this night);
  a meyhane setting; the national lottery ticket legible.
- Confidence and sources: MEDIUM ([Hürriyet Lezizz — Hindi dolması](https://www.hurriyet.com.tr/lezizz/hindi-dolmasi-nasil-yapilir-yilbasi-sofrasi-icin-hindi-tarifi-41702903);
  [Lezzet — Yılbaşı hindi menüsü](https://www.lezzet.com.tr/lezzetten-haberler/yilbasi-hindi-menusu));
  EDITORIAL for staging.

#### Celebration: Wedding (düğün: village kazan wedding and salon wedding)
- Type: life event.
- When: summer and early autumn weekends; village weddings feed guests
  at midday (midday), salon weddings run in the evening (evening).
- Gathering: commonly cited at 200 to 450 guests, with salons of 150 to
  200 the most booked. Two coexisting registers (§4.6): the **köy
  düğünü**, with neighbours cooking in cauldrons and guests eating at long
  tables in a garden, schoolyard or village square (other); and the
  **salon düğünü** in a wedding hall with round tables (other), either
  with a plated meal (*yemekli*) or without (*yemeksiz*: cake, soft drinks
  and snacks only). [LOW-MEDIUM — wedding-salon and industry sites only]
- The spread: village: **keşkek** (pounded wheat and meat, cooked for
  hours in cauldrons and beaten to a thick, pale, stretchy porridge),
  **etli pilav** (rice with meat chunks), a meat stew (*yahni*), with
  pickles, bread and a dessert; salon: a starter, an ordövr plate, a
  main and a dessert, or the wedding cake alone. [MEDIUM for village
  dishes — Samsun and Konya local press, Trakya regional sources] Keşkek
  and etli pilav have no catalog entries: keşkek reads as a pale beige,
  smooth-stringy mound with a pool of red-pepper butter on top, served
  on a plain plate; etli pilav as glossy white rice studded with brown
  meat chunks, ladled from a cauldron about 80 to 100cm across (roughly
  seven to eight can widths). Added to CANDIDATE QUEUE.
- Snapshot staging: **1 setting** (village): one plain plate of etli pilav
  and a spoon of keşkek on a long trestle table with a paper or oilcloth
  cover, a bread pile beside, a cauldron steaming soft in the background.
  **2 settings**: two identical plates side by side, a shared pickle
  plate and bread between. **Small group**: three or four plates along
  the trestle, the table running out of frame, blurred guests. Salon
  variant: one plated main at a white-clothed round table, the next
  table soft behind. Cues: the kazan and its wood fire behind; the long
  table's vanishing point; strings of lights or a davul-zurna band
  blurred far behind. [EDITORIAL]
- Decor and cues: village gardens, plastic chairs, red ribbons; salons
  with chandeliers. Avoid: Orientalist costume, legible banners.
- Never stage: alcohol (some urban weddings serve it); ayran next to the
  pilav (the real companion, here negated); gold being pinned on the
  couple as the subject.
- Confidence and sources: MEDIUM for food ([Samsun Canlı Haber — Çarşamba
  düğün yemekleri](https://www.samsuncanlihaber.com/carsamba-dugun-yemekleri-gelenegi);
  [Konya İmza — Etli düğün pilavı](https://konyaimza.com/konya/konyanin-geleneksel-lezzeti-etli-dugun-pilavi-tarifi-ve-hikayesi-26992h));
  LOW-MEDIUM for headcount ([Düğün Kolay — Düğün salonu kaç kişilik](https://dugunkolay.com.tr/dugun-salonu-kac-kisilik-olmali/),
  industry tier); EDITORIAL for staging.

#### Celebration: Circumcision feast (sünnet düğünü)
- Type: life event (a boy's coming-of-age rite; staging is the guests'
  meal only).
- When: usually summer, often a weekend; the feast is midday or evening.
- Gathering: relatives and neighbours, dozens to a few hundred; a
  garden, village square or rented salon (other), or a restaurant;
  catering is common in cities. [MEDIUM — catering sources]
- The spread: soup (mercimek or ezogelin), a meat or chicken dish with
  rice or bulgur pilav (etli pilav, stew, grilled meat), and dessert
  (baklava, Kemalpaşa, sütlaç); older village feasts served keşkek and
  meat with chickpeas. [MEDIUM — catering menus and a regional folk-food
  source agree] See catalog: Mercimek çorbası, Baklava, Compact sweets.
- Snapshot staging: as the village or salon wedding: **1 setting**: a
  soup bowl and a plate of etli pilav on a long or round table, a
  dessert plate of baklava; **2 settings**: two identical settings;
  **small group**: three or four settings with shared bread and salad.
  Cues: blue-and-white or silver decorations, balloons, a decorated
  throne-like chair for the boy soft and far in the background (never
  sharp, never with the product); kazan or catering buffet behind.
  [EDITORIAL]
- Never stage: the boy honoree with the product; any medical or
  procedure cue; ayran beside the hero; alcohol.
- Confidence and sources: MEDIUM ([İkramla — Sünnet yemeği menüsü](https://www.ikramla.com.tr/sunnet-yemegi-menusu-nasil-olmali-5);
  [Yerel Kültür — Sakarya Manavlarının kutlama yemekleri](https://yerelkultur.org/sakarya-manavlarinin-kutlama-yemekleri/));
  EDITORIAL for staging.

#### Celebration: Weekend mangal and piknik (family gathering)
- Type: community or family gathering (recurring; spring to autumn).
- When: weekend midday into late afternoon (midday or golden-hour).
- Gathering: extended family or a few families together, about 6 to 15;
  home outdoor (balcony, garden) or a park, forest picnic area or the
  seaside (other). Piknik is a major weekend institution. [MEDIUM — not
  independently re-checked; see ENVIRONMENT, Meal outdoors at home]
- The spread: köfte, chicken wings and şiş from the mangal (see catalog:
  Izgara köfte), grilled peppers and tomatoes, lavaş, çoban salatası (see
  catalog), a dish of ezme or other cold meze (family register), fruit.
  Shared vessels: a grilled-meat platter, salad bowl, bread pile, 2 to 3
  small dishes.
- Snapshot staging: **1 setting**: one plate with köfte, grilled pepper
  and tomato on a folding table or a picnic cloth, lavaş beside, the meat
  platter cropped. **2 settings**: two identical plates, the salad bowl
  and lavaş between. **Small group**: three or four plates, the mangal
  smoking soft behind. Cues: the mangal and smoke; other families'
  picnic cloths blurred under trees; a thermos and çaydanlık would be
  real but are kept out (rule 4). [EDITORIAL]
- Never stage: beer; the samovar or tea setup beside the hero; legible
  park signs.
- Confidence and sources: MEDIUM (ENVIRONMENT section); EDITORIAL.

#### Celebration: Birthday (doğum günü)
- Type: life event.
- When: afternoon or evening; children's parties at home or a play café
  (golden-hour), adult birthdays as a family dinner or a café cake
  (evening). [LOW — not verified this pass]
- Gathering: family and friends, about 6 to 20; home indoor or a café
  (restaurant). [LOW — not verified this pass]
- The spread: a cream cake (*yaş pasta*) with candles is the centre;
  around it börek, poğaça, small sandwiches, crisps, sometimes pizza.
  [LOW — general knowledge, not verified this pass] See catalog: Börek.
- Snapshot staging: **1 setting**: one dessert plate with a cake slice and
  a piece of börek, the cake partly cropped. **2 settings**: two identical
  plates, a börek tray between. **Small group**: plates at one end, the
  cake with candles in the midground. Cues: balloons, a garland, blurred
  guests. [EDITORIAL]
- Never stage: a child as the drinker; tea glasses (a strong prior at
  any Turkish table).
- Confidence and sources: LOW — not verified this pass; EDITORIAL.

---

## GAME NIGHT

The hard staging rules at the top of this file govern every entry: no
pork; no alcohol or meyhane cues; Ramadan treated as a religious
occasion (a match night in Ramadan is staged after iftar, nothing eaten
in daylight); and **no çay or ayran beside the hero**. Tea is the most
authentic drink at every format below (the derby tea tray, okey and
tavla "over tea for hours") and is recorded here as real, but it stays
out of frame unless the brief allows a named companion drink: negate the
tulip glass and the çaydanlık by name in every prompt. Schema §5.8 also
applies: screens, cards, boards and tiles are never legible; no crests,
kits, sponsor marks or league logos; no betting slips, odds screens,
betting apps, cash or scoring for money (okey is often played for
stakes); party size is the place settings in frame, the crowd implied
(§5.7); no identifiable children; a night kick-off is a night scene. The
brief dictates the SKU (§5.4). This file had no earlier sports or games
lines.

### Watch parties

Football is the viewing occasion, and the Fenerbahçe–Galatasaray derby
is described as the biggest match in Türkiye [HIGH — Wikipedia,
Hürriyet Daily News]; the national team and EuroLeague basketball draw
national audiences too [LOW — not verified for basketball]. Home viewing
with friends and family is the stageable default; the neighbourhood
kahvehane showing the game is real but a male space. The signature
viewing foods are **çekirdek** (roasted sunflower seeds) with a dish for
the shells, crisps and kuruyemiş (mixed nuts), and lahmacun or pide
delivery; Turkish food media and forum threads name "crisps, cola,
çekirdek" as the classic match trio [LOW-MEDIUM — Yemek.com and Lezzet
match-snack features, a CarrefourSA retailer blog, and Technopat forum
threads, all found in one search this pass; recipe-media and retailer
tier, flagged].

#### Watch party: derby night at home (Fenerbahçe–Galatasaray, and Beşiktaş derbies)
- When: two league derbies a season plus cup games, August to May; big
  league games usually kick off in the evening, about 19:00 to 20:00
  local time [LOW — not verified, model knowledge]. Intake time evening:
  dark outside for most of the season, lamp and TV glow.
- Gathering: family or 4 to 8 friends in the apartment salon; home
  indoor (see ENVIRONMENT for the salon register). A household split
  between the two clubs is a real dynamic; show it with neutral clothes,
  never kits or club colours worn as uniforms.
- The spread: a bowl of çekirdek with a small empty dish for the shells
  and a scatter of split shells on the table; crisps and kuruyemiş in
  bowls [LOW-MEDIUM — the search above]; lahmacun rolled or flat in
  delivery boxes (see catalog: Lahmacun) and pide cut into strips on a
  wooden board or in its box (see catalog: Pide); a cheese plate with
  olives and crackers is a food-media alternative [LOW-MEDIUM — Yemek.com;
  delivery dishes LOW — not verified].
- Surface and environment: a low coffee table (*orta sehpa*) in front of
  the sofa, a lace runner or plain cloth; the TV a soft green blur with no
  score bug or channel mark; apartment salon with patterned rug and
  curtains. The real-life tea tray with tulip glasses is the most
  authentic detail and the one to keep out of frame (hard rule 4).
- Snapshot staging: **1 setting**: one plate with a rolled lahmacun and a
  lemon wedge on the coffee-table edge, the çekirdek bowl and shell dish
  beside it. **2 settings**: two identical plates, the open lahmacun box
  and the çekirdek bowl shared between them. **Small group**: three or four
  plates round the table, more boxes and bowls than needed, blurred figures
  on the sofa facing the screen (no more than about 2.5 faces, none sharp).
- Never stage: çay glasses, the çaydanlık or ayran (negate by name); beer
  (Efes is a strong prior for football); club crests, yellow-navy or
  red-yellow kits as uniforms, sponsor marks; a legible screen; betting
  slips or the state betting game's coupons; flares or fan violence.
- Confidence and sources: HIGH for the derby's status ([Wikipedia — The
  Intercontinental Derby](https://en.wikipedia.org/wiki/The_Intercontinental_Derby_(football));
  [Hürriyet Daily News](https://www.hurriyetdailynews.com/all-eyes-on-intercontinental-derby-between-galatasaray-fenerbahce-169504));
  LOW-MEDIUM for çekirdek, crisps and nuts ([Yemek.com — derby snacks](https://yemek.com/mac-icin-atistirmaliklar/);
  [Lezzet — match snacks](https://www.lezzet.com.tr/lezzetten-haberler/mac-atistirmaliklari);
  [CarrefourSA blog](https://www.carrefoursa.com/blog/dunya-kupasi-maclarinda-ne-yenir-evde-mac-keyfi-icin-atistirmalik-alisveris-listesi/);
  [Technopat forum](https://www.technopat.net/sosyal/konu/mac-izlerken-en-cok-ne-yemekten-zevk-aliyorsunuz.2529609/));
  LOW for kick-off times and delivery dishes; EDITORIAL for staging.

#### Watch party: national-team night (milli maç)
- When: qualifiers and tournament games, mostly evenings; tournament
  summers in June and July [LOW — not verified].
- Gathering: family or friends at home (home indoor, or a balcony in
  summer, home outdoor); cafés and restaurant terraces with a screen
  are the public form [LOW — not verified].
- The spread: çiğ köfte wraps with lettuce leaves and lemon wedges on a
  platter (see catalog: Çiğ köfte; the meat-free modern form, per that
  entry), çekirdek and kuruyemiş in bowls, simit torn on a plate (see
  catalog: Simit) [LOW — not verified, the notes' list].
- Surface and environment: a coffee table or a balcony table with a
  plastic cloth, summer dusk; a red paper garland or a cropped
  crescent-and-star pattern at most, never a full flag (reviewer ruling,
  §5.7).
- Snapshot staging: **1 setting**: one plate with two çiğ köfte wraps and
  a lemon wedge, the platter cropped beside it. **2 settings**: two
  identical plates, the platter and a çekirdek bowl between them.
  **Small group**: plates round the balcony table, a second platter
  cropped, blurred figures toward the screen through the door.
- Never stage: çay, ayran or beer; a full flag; national kits with crests
  or sponsor marks; a legible screen.
- Confidence and sources: LOW; EDITORIAL for staging.

#### Watch party: neighbourhood café or kahvehane screening (food-led, tea out of frame)
- When: evening league and derby games [LOW].
- Gathering: the kahvehane is a male-dominated space where men watch on
  a wall-mounted TV [LOW — not verified; the social-games notes describe
  it as a male space]. Stage it either as an all-male café group of 2 to
  3 at one small table, without tea, or as a mixed modern café; never a
  crowded room. Venue: restaurant (café).
- The spread: kaşarlı tost (a pressed grilled-cheese sandwich; the
  sucuklu form uses beef sucuk, per hard rule 1) cut in halves on a small plate, simit (see catalog: Simit), a
  bowl of çekirdek [LOW — not verified]. No catalog entry for tost (see
  CANDIDATE QUEUE).
- Surface and environment: small square tables, wooden chairs, a TV
  high on the wall as a soft glow, a window onto the street at night.
- Snapshot staging: **1 or 2 settings** at one small table, a plate of
  tost each, the çekirdek bowl between them; other tables soft and empty
  or with backs only. Small groups are better staged at home.
- Never stage: tulip tea glasses on the table (the default in reality;
  negate by name); okey tables with stakes in the background; a legible
  screen or sign.
- Confidence and sources: LOW; EDITORIAL for staging.

### Social game nights

Popularity as an occasion to gather and eat around: **high**. Okey (tile
rummy) and tavla (backgammon) are played over tea for hours at the
kahvehane and at home; 96% of people drink tea daily (TÜİK); an online
okey app reports 50 million-plus users [MEDIUM — Journal of Ethnic Foods
2022, Intern Network Turkey]. Tombala (a bingo-style numbers game) on
New Year's Eve is a family custom [LOW — not verified]. The kahvehane is
a male space and okey is often played for stakes, so the home and mixed
café versions are staged.

#### Game night: family okey at home (winter evening)
- When: winter evenings and holidays at home; intake time evening
  [MEDIUM / LOW — the notes' timing].
- Gathering: four players with family onlookers in the salon; home
  indoor.
- The spread: a bowl of çekirdek, börek cut in squares on a plate (see
  catalog: Börek), a fruit plate (mandarins, apples), kuruyemiş [LOW —
  not verified; the notes' editorial spread].
- Surface and environment: a square table or the dining table with a
  felt cloth; the four wooden racks (*ıstaka*) with tiles turned so their
  faces are unreadable; food on a side table or at the corners so it does
  not cover the game; lamp light, a patterned rug.
- Snapshot staging: **1 setting**: one small plate with a börek square at
  the table corner, a rack and tiles soft in the foreground. **2
  settings**: two identical small plates at adjacent corners, the
  çekirdek bowl between them. **Small group**: four places round the
  table, the fruit plate and börek tray on a side table cropped, an
  onlooker as a soft shape behind.
- Never stage: tulip tea glasses and the çaydanlık (on every real okey
  table; negate by name); money, chips or score sheets for stakes;
  legible tile faces as a scoring hand.
- Confidence and sources: MEDIUM for popularity ([Journal of Ethnic Foods
  2022 — tea and coffee in Turkey](https://journalofethnicfoods.biomedcentral.com/articles/10.1186/s42779-022-00124-9);
  [Intern Network Turkey — tavla and okey](https://www.internnetworkturkey.com/2022/04/05/tavla-and-okey-turkish-board-games/));
  LOW for the spread; EDITORIAL for staging.

#### Game night: tavla at a café or garden table
- When: afternoons and early evenings, all year; intake time golden-hour
  [MEDIUM / LOW].
- Gathering: two players and an onlooker; a mixed café or a home garden
  or balcony table (home outdoor, restaurant), not the male kahvehane
  [EDITORIAL].
- The spread: simit on a plate (see catalog: Simit), a plate of white
  cheese and olives, a small bowl of çekirdek [LOW — not verified].
- Surface and environment: an inlaid wooden tavla board open on a small
  café or garden table, dice mid-board, a vine or plane tree overhead,
  golden late light.
- Snapshot staging: **1 setting**: one plate with a simit beside the open
  board. **2 settings**: two identical plates either side of the board,
  the cheese plate at the edge. **Small group**: a third chair with a
  plate, a second café table soft behind.
- Never stage: tea glasses; money on the board; legible signage.
- Confidence and sources: MEDIUM for the game, LOW for the spread;
  EDITORIAL for staging.

#### Game night: New Year's Eve tombala
- When: 31 December, after dinner and before midnight; intake time
  evening [LOW — not verified].
- Gathering: the family or friends from the New Year's Eve entry (see
  CELEBRATIONS: New Year's Eve dinner), 4 to 10, at the cleared dining
  table; home indoor.
- The spread: after the hindi dolması course: baklava on a tray (see
  catalog: Baklava), mandarins in a bowl, kuruyemiş, the meze plates
  still on the table (see catalog: Meze, family register) [LOW — the
  notes' editorial spread].
- Surface and environment: the dining table with a festive cloth, the
  tombala cloth bag and numbered pieces with numbers unreadable, plain
  cards with blank grids; the secular New Year's tree and streamers soft
  behind.
- Snapshot staging: **1 setting**: one dessert plate with a baklava piece
  and a mandarin beside a blank tombala card. **2 settings**: two
  identical dessert plates, the baklava tray between them. **Small
  group**: plates round one end of the table, the bag in the middle,
  blurred relatives behind.
- Never stage: prizes of money or the national lottery ticket; rakı,
  wine or champagne; legible numbers or cards; identifiable children.
- Confidence and sources: LOW; EDITORIAL for staging.

---

## ZONE CALLOUTS (environment + dish pointers)

1. **Istanbul & Marmara** — Apartment blocks, ferries, the water, simit
   carts, esnaf lokantası. Balık ekmek, midye dolma, İskender (Bursa),
   İnegöl and Tekirdağ köfte, kokoreç, kumpir (Ortaköy), börek.
   → catalog: Döner; İskender; Köfte; Balık ekmek; Midye dolma; Simit;
   Börek; Kuru fasulye & pilav.
2. **Aegean** — Olive groves, whitewashed villages, İzmir's seafront.
   Zeytinyağlı (olive-oil) vegetables and wild greens (ot), boyoz and
   İzmir kumru sandwich (not re-checked), çökertme kebabı (Muğla).
   → catalog: Zeytinyağlılar & sarma; Meze.
3. **Mediterranean** — Bright coast, citrus, greenhouses. Adana kebab,
   Mersin tantuni, Antakya künefe, şalgam culture (documented only),
   piyaz (Antalya).
   → catalog: Adana kebab; Tantuni; Künefe.
4. **Central Anatolia** — Steppe, Ankara, Cappadocia. Kayseri mantı and
   pastırma, Konya etli ekmek and fırın kebabı, testi kebabı (Cappadocia).
   → catalog: Mantı; Testi kebabı; Pide.
5. **Black Sea** — Green slopes, tea terraces, wooden houses, mist. Hamsi
   in every form, mısır ekmeği (cornbread), kuymak/muhlama (cornmeal and
   cheese fondue, not re-checked), Karadeniz pide, Rize tea terraces
   (background only).
   → catalog: Hamsi tava; Pide.
6. **Southeast Anatolia** — Limestone and basalt, courtyards, heat.
   Urfa kebab, patlıcan kebabı, ciğer, Antep lahmacun, Antep baklava,
   çiğ köfte, beyran (Gaziantep soup, not re-checked). **Spinout
   candidate.**
   → catalog: Urfa kebab; Lahmacun; Baklava; Çiğ köfte.
7. **Eastern Anatolia** — High plateau, snow, stone. Erzurum cağ kebabı,
   the Van breakfast (a huge spread with otlu peynir and murtuğa — not
   re-checked), Kars kaşar and gravyer.
   → catalog: Cağ kebabı; Serpme kahvaltı.

---
## DISH CATALOG

*Fields per `country-file-schema.md` §4.5: category · lineage · variants
(§4.6, with a default when unspecified) · format (§4.4) · vessel & scale ·
texture & finish · staging · model failure / confusion · confidence ·
sources · **Composition & proportions (§4.7)**. Scale anchor: the 330 mL
can (11.5 cm tall, 6.6 cm diameter). Surface shares and counts in the §4.7
blocks are editorial synthesis from recipes, registered-GI specs and
serving norms unless tagged otherwise — they need image tests.*

### A. National core

#### Döner — ekmek arası and dürüm (street)

- **Category**: Everyday — lunch, late night, on the go.
- **Lineage**: Native Turkish (vertical rotisserie). Not a Greek gyro, not
  a German-style "döner kebab" stuffed with salad and garlic sauce.
- **Variants (§4.6)**: **et döner** (beef, or beef-lamb) vs. **tavuk döner**
  (chicken, the cheaper and very common everyday version); served as
  **yarım ekmek** (a half-loaf of crusty white bread, split and filled),
  **dürüm** (rolled in lavaş), or **porsiyon/pilav üstü** (plated over rice
  — see İskender for the plated Bursa form). **Default when unspecified**:
  tavuk döner dürüm. [EDITORIAL fallback; chicken being very common is
  MEDIUM — not re-checked]
- **Format (§4.4)**: two siblings — the half-loaf sandwich and the lavaş
  roll — each described below.
- **Fillings beyond the meat**: sliced tomato, onion (often with sumac and
  parsley), pickles (turşu), and for chicken döner, often a few French
  fries inside and a mayonnaise-type sauce; lettuce at some stalls.
  [MEDIUM — not individually re-checked; varies by stall]
- **Portion**: chicken döner sandwiches are sold at **80, 110 and 140 g**
  of meat; a yarım ekmek döner carries **~90 g** [MEDIUM — Usta Dönerci
  menu; Yemek.com/Türkiye Gazetesi calorie pages].
- **Vessel & scale**: the dürüm ~25–30 cm long, ~5–6 cm thick, wrapped in
  greaseproof paper, served on the paper or a small plate; the yarım ekmek
  ~20–25 cm long. [LOW-MEDIUM — not re-checked]
- **Texture & finish**: meat shavings thin, irregular, crisp-browned at
  the edges; lavaş toasted briefly on the grill so it has faint brown
  stripes from the döner cone's plate; bread crusty and pale gold.
- **Model failure**: a Greek gyro in a thick pita with tzatziki and
  chips; a German döner box piled with red cabbage; meat drawn as
  uniform pink slices (reads as ham — a halal-rule risk).
- **Confidence**: MEDIUM overall.
- **Composition & proportions (§4.7)** — one tavuk döner dürüm, cut in half.
  - **What dominates**: **the lavaş wrap** (~70% of what the camera sees);
    the cut face shows meat ~50% of the cross-section, tomato/pickle/fries
    ~30%, onion-parsley ~20%. [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count (per dürüm) | Look | Where it sits |
    |---|---|---|---|---|
    | Lavaş | ~35–40 cm round, rolled to a cylinder ~25–30 cm × 5–6 cm (not re-checked) | 1 | Pale wheat with brown blisters and faint grill stripes, dry-matte | Outside; rolled tight, one end folded |
    | Chicken döner shavings | Pieces ~3–6 cm, 2–4 mm thick; ~110 g total | ~20–30 shavings | Golden-brown edges, pale juicy centre, a sheen of fat | Core of the roll |
    | Tomato | Half-moon slices ~5 mm | 3–4 | Red, glossy cut face | Mixed through the meat |
    | Pickled cucumber | Spears or slices ~5 mm | 3–5 | Olive-green, translucent | Mixed through |
    | Fries (optional) | ~6–8 cm sticks | 5–8 | Pale gold, soft | Tucked in along the core |
    | Onion–parsley (–sumac) | Thin slivers; parsley leaves | a small handful | White and purple-tinged, bright green flecks | Near the top of the cross-section |

  - **Arrangement**: cut diagonally in half; one half faces the camera cut
    side out, the other half lies behind it on the paper (§7.5 byproduct
    rule — say this in the prompt).
  - **Vessel fill**: the two halves occupy about half of a 22 cm plate or
    a sheet of paper; no side salad on the plate.
  - **Served portion vs. whole**: this *is* the portion.
  - **State cues**: fresh, just rolled; a faint steam from the cut face; a
    little fat sheen on the paper.
  - **Absent on purpose**: pita pocket, tzatziki, red cabbage, lettuce
    heap, cheese, garlic-sauce drizzle over the top, any pink ham-like
    meat, a hand holding it.
  - **Prompt-ready line**: "A lavaş wrap about twice the height of the
    can, cut diagonally in half on white wrapping paper, one half facing
    the camera: tight rolled pale flatbread with faint grill stripes
    around a core of thin browned chicken shavings, slices of tomato and
    pickle, a few soft fries and slivers of onion with parsley; the other
    half lies behind it. No pita, no white sauce on top, no cheese."

#### Lahmacun (national; Antep form registered)

- **Category**: Everyday — lunch, dinner, delivery, kebab-house starter.
- **Lineage**: Southeastern Anatolian; national. Not a pizza — no cheese,
  no tomato sauce layer.
- **Variants (§4.6)**: **the everyday national lahmacun** (minced meat
  with onion, tomato, pepper, parsley, spread paper-thin) and **Gaziantep
  (Antep) lahmacunu**, a registered geographical indication (2017): the
  topping is **55–60% minced meat, with garlic and no onion**, the raw
  dough ball 50–55 g, **dough at most 3 mm thick**, and it is **served
  with a roasted, peeled aubergine** [HIGH — TÜRKPATENT GI and Kültür
  Portalı (via search), Gaziantep municipality GI site (via search)];
  **Urfa** lahmacun is spicier with isot (not re-checked). **Default when
  unspecified**: the everyday national lahmacun. [EDITORIAL]
- **Vessel & scale**: **~25–30 cm across**, round or slightly oval [MEDIUM
  — tier-4 lahmacun trade site]; served 1–3 per person on a wooden board,
  an oval steel plate, or stacked on a plate; a side plate of **flat-leaf
  parsley, sliced onion with sumac, lemon wedges**, sometimes rocket and
  radish. Eaten rolled with the greens inside. [HIGH for parsley-lemon
  rolling — lahmacun sources and Yemek.com agree]
- **Texture & finish**: paper-thin base, crisp and blistered at the rim
  with dark oven spots, softer and pliable in the centre; the topping a
  thin even red-brown film with visible specks of minced meat, pepper and
  parsley, slightly oily.
- **Model failure**: a thick pizza with a raised crust and melted cheese;
  a Lebanese manakish; a flat pide.
- **Composition & proportions (§4.7)** — one person's order, lahmacun flat.
  - **What dominates**: **the topping film over the thin base** — the
    red-brown topping covers ~90% of each disc, leaving only a ~1 cm
    blistered rim; the greens plate is a side accent. [EDITORIAL]
  - **Component table**:

    | Component | Real size | Count (plate / portion) | Look | Where it sits |
    |---|---|---|---|---|
    | Lahmacun base | 25–30 cm round, ≤3 mm thick | 2 (one flat, one folded or stacked under) | Pale gold rim with charred blisters; thin as a tortilla | Flat on the board, overhanging slightly |
    | Meat topping | Spread ~2–3 mm; mince specks 2–4 mm | covers ~90% | Red-brown, faintly oily, fine-grained, parsley and pepper flecks | Pressed into the dough, flat — no mounds |
    | Parsley | Whole flat-leaf sprigs ~10 cm | a loose bunch (~10 sprigs) | Bright green | Side plate |
    | Sumac onion | Thin half-rings | a small mound | White tinged purple-red | Side plate |
    | Lemon | Wedges or halves | 2 wedges | Pale yellow | Side plate or on the lahmacun rim |
    | Roasted aubergine (Antep only) | One whole small aubergine, peeled, ~12–15 cm | 1 | Smoky, soft, grey-brown flesh | On the side |

  - **Arrangement**: one lahmacun lying flat and whole in the foreground
    (the round is the tell), a second folded in half or stacked beneath.
  - **Vessel fill**: the lahmacun overhangs a 26 cm plate or fills a board.
  - **Served portion vs. whole**: each person gets whole pieces.
  - **State cues**: straight from the oven — dry-crisp rim, a faint sheen
    on the topping, slight steam.
  - **Absent on purpose**: cheese, tomato sauce layer, raised crust,
    toppings in chunks, sliced like a pizza into wedges, olives, egg.
  - **Prompt-ready line**: "A paper-thin round flatbread more than twice
    the can's height across, lying flat on a wooden board, completely
    covered edge to edge with a thin, even, red-brown layer of finely
    minced meat with specks of pepper and parsley, only a narrow crisp
    blistered rim showing; a second one folded beneath it. Beside it a
    small plate of flat-leaf parsley, purple sumac onion and lemon
    wedges. No cheese, no raised crust."

#### Mercimek çorbası (red lentil soup)

- **Category**: Everyday — dinner starter, lokanta lunch, iftar.
- **Lineage**: Native Turkish, national. Not an Indian dal.
- **Form**: red lentils cooked with onion, carrot and sometimes potato,
  puréed smooth, finished with a red butter or oil drizzle with pul
  biber and dried mint; served with a lemon wedge and bread. [MEDIUM —
  not independently re-checked; very widely documented]
- **Vessel & scale**: a white or patterned soup bowl ~15–18 cm across,
  filled to ~1 cm below the rim; a lemon wedge on a saucer or the rim.
- **Texture & finish**: smooth, velvety, opaque saffron-orange soup;
  a thin swirl of red pepper butter pooling in small beads on top;
  a few crushed dried-mint flecks.
- **Model failure**: yellow dal with whole lentils and coriander leaves;
  a thick orange purée like squash soup; a cream swirl.
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: **smooth orange soup** (~95% of the surface).
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Soup | ~250–300 mL in a 15–18 cm bowl | 1 bowl | Opaque saffron-orange, velvety, faint surface skin | Fills bowl to ~1 cm below rim |
    | Pepper butter | A thin drizzle, beads 2–8 mm | ~1 teaspoon | Glossy brick-red beads | A loose swirl across the centre |
    | Dried mint / pul biber | Flakes 1–3 mm | a pinch | Dark green / red flakes | Scattered on top |
    | Lemon | Wedge ~6 cm | 1 | Pale yellow | On the saucer beside the bowl |
    | Bread | Slices ~12 × 10 cm | 1–2 per person in the basket | White crumb, golden crust | In a basket behind |

  - **Arrangement**: the swirl off-centre; no garnish leaves.
  - **State cues**: steam rising; the surface beginning to set a thin skin
    at the edge.
  - **Absent on purpose**: croutons, cream, coriander leaves, whole
    lentils, parsley bunches.
  - **Prompt-ready line**: "A white bowl, a little wider than the can is
    tall, filled with smooth, velvety saffron-orange lentil soup, steam
    rising; a thin swirl of glossy brick-red pepper butter beads across
    the centre with a pinch of dried mint flakes; a lemon wedge on the
    saucer. No cream, no croutons, no whole lentils."

#### Kuru fasulye & pilav (esnaf lokantası plate)

- **Category**: Everyday — lokanta lunch, home dinner. Widely called a
  national dish. [MEDIUM — not independently re-checked]
- **Form**: white beans stewed with onion, tomato and pepper paste,
  sometimes with small meat cubes or pastırma; served beside or over
  **pirinç pilavı** (butter rice with toasted şehriye — short thin noodles);
  with pickles (turşu) and raw onion or green pepper on the side.
  [MEDIUM — not independently re-checked]
- **Vessel & scale**: a small 20–22 cm lokanta plate or a shallow bowl;
  beans ~1.2–1.5 cm long.
- **Texture & finish**: beans ivory, tender, whole, in a loose orange-red
  sauce with an oil sheen; pilav glossy, separate grains, pale with brown
  şehriye flecks.
- **Model failure**: Boston baked beans (sweet, brown, thick); chili.
- **Composition & proportions (§4.7)** — one lokanta plate.
  - **What dominates**: beans ~55%, pilav ~40%, meat/pepper accents ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | White beans | ~1.2–1.5 cm long | ~150–200 in the portion | Ivory, whole, matte-skinned | Ladled on half the plate in their sauce |
    | Sauce | loose, ~5 mm pool | — | Orange-red, oil beading on top | Around and under the beans |
    | Meat cubes (optional) | ~1.5–2 cm | 4–6 | Brown, soft | Half-hidden among beans |
    | Pilav | a mound ~10 cm across, ~4 cm high | 1 mound | Glossy white grains with brown noodle flecks | The other half of the plate, touching the beans |
    | Turşu | mixed pickles, pieces 3–6 cm | 4–6 in a small bowl | Translucent green, pink (beet-tinted) | Side bowl |

  - **Arrangement**: beans and pilav side by side, the sauce just meeting
    the rice edge.
  - **State cues**: steam; oil sheen on the sauce.
  - **Absent on purpose**: sausages, bacon, brown sweet sauce, herbs on top.
  - **Prompt-ready line**: "A small plate in a busy canteen: half covered
    with whole ivory white beans in a loose orange-red sauce with beads
    of oil on top, the other half a glossy mound of white rice flecked
    with toasted brown noodles; a small bowl of mixed pickles beside it,
    steam rising. The can stands taller than the rice mound is wide."

#### Izgara köfte (grilled meatballs — national, regional forms)

- **Category**: Everyday — home, köfteci, lokanta, mangal.
- **Form-changing (§4.2)**: **İnegöl köfte** (Bursa; small, oblong,
  finger-shaped), **Tekirdağ köfte** (flat oval patties), **Sultanahmet
  köfte** (Istanbul, served with piyaz — bean salad), **Akçaabat köfte**
  (Trabzon), **home köfte** (flat oval, pan-fried or grilled). **Default
  when unspecified**: flat oval grilled köfte with piyaz and a grilled
  pepper. [EDITORIAL; the regional names are uncontested — not re-checked]
- **Vessel & scale**: each köfte ~7–9 cm long, ~4 cm wide, ~1.5–2 cm
  thick (flat oval); 5–8 per portion on a 26 cm plate; with piyaz, grilled
  green peppers, grilled tomato halves, sometimes fries or rice. [LOW-
  MEDIUM — not re-checked]
- **Texture & finish**: well done throughout; charred ridges from the
  grill rack, darker at the ends; a slight sheen of fat; a coarse,
  crumbly cut face (never pink).
- **Model failure**: round Swedish meatballs in gravy; American burgers.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: köfte ~45%, piyaz ~25%, grilled vegetables ~20%,
    bread/onion ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Köfte | 7–9 × 4 × 1.5–2 cm — each a bit longer than the can is wide | 6 | Deep brown, char stripes, crumbly edges | Fanned in a row on the left half |
    | Piyaz | White beans ~1.3 cm with onion rings, parsley, sumac, vinegar-oil | a heap ~10 cm across | Ivory beans, purple onion, green flecks, glistening | Right side |
    | Sivri biber (long green pepper) | 10–14 cm | 2 | Blistered, collapsing, bright olive green with black patches | Leaning on the köfte |
    | Tomato | halves ~6 cm | 1–2 | Wrinkled, charred skin | Beside peppers |
    | Bread | thick slices | 1–2 | — | On a side plate or under the köfte |

  - **State cues**: straight off charcoal — fat sheen, charred ridges.
  - **Absent on purpose**: gravy, cheese, round balls, ketchup, pork.
  - **Prompt-ready line**: "Six flat oval grilled beef meatballs, each a
    little longer than the can is wide, fanned in a row on a white plate,
    deep brown with charred grill stripes and crumbly edges; beside them a
    heap of white bean salad with purple onion rings and parsley, two
    blistered long green peppers and a charred tomato half. No gravy, no
    round meatballs."

#### Karnıyarık (stuffed aubergine)

- **Category**: Everyday — home dinner and lokanta, summer.
- **Form**: whole aubergines, peeled in stripes, fried, split lengthwise
  and filled with minced meat, onion, tomato and pepper, topped with a
  tomato slice and a green pepper, baked in a tray; served with pilav and
  yoghurt. The meatless sibling is **imam bayıldı** (olive-oil, room
  temperature). [MEDIUM — not independently re-checked]
- **Vessel & scale**: each aubergine ~15–18 cm long (longer than the
  can); 1–2 per plate or in a baking tray (4–6).
- **Texture & finish**: aubergine skin striped purple-black and pale
  green-cream where peeled, glossy and collapsed; filling red-brown; the
  topping tomato slice soft and blistered; sauce pooling orange.
- **Model failure**: moussaka (layered, béchamel top); a stuffed zucchini.
- **Composition & proportions (§4.7)** — one lokanta plate.
  - **What dominates**: the aubergine boat ~55%, pilav ~35%, yoghurt ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Aubergine | 15–18 cm × 5–6 cm, split open | 1 (2 at home) | Striped purple-black and cream, glossy, collapsed | Diagonal across the plate |
    | Mince filling | ~2 cm deep in the split | fills the slit | Red-brown, loose, oily | Inside the split |
    | Tomato slice + green pepper | ~6 cm slice; pepper ~6–8 cm piece | 1 + 1 | Blistered, soft | On top of the filling |
    | Tomato sauce | pool ~5 mm | — | Orange-red with oil | Around the base |
    | Pilav | mound ~10 cm | 1 | White, glossy | Beside |
    | Yoghurt | ~3 tbsp | 1 dollop | Bright white matte | Small bowl or beside the rice |

  - **State cues**: steam, oil sheen, sauce bubbling at the edges if from
    the tray.
  - **Absent on purpose**: béchamel, cheese, layered slices, herbs.
  - **Prompt-ready line**: "One whole aubergine longer than the can,
    peeled in purple and cream stripes, fried glossy and split open along
    its length, filled with loose red-brown minced meat and topped with a
    soft tomato slice and a piece of green pepper, lying in a thin
    orange-red sauce; a mound of white rice and a spoon of thick white
    yoghurt beside it. No cheese, no béchamel."

#### Meze (cold starters — kebab-house and family register)

- **Category**: Everyday starters at kebab houses, family meals, guests.
  **Documented separately from the rakı table (see ICONIC BEVERAGES).**
- **Forms (§4.6, choose 3–4, never all)**: **acılı ezme** (finely chopped
  tomato, pepper, onion, parsley, pomegranate molasses — a coarse red
  relish), **haydari** (thick strained yoghurt with garlic, dill/mint),
  **patlıcan salatası** / **babagannuş** (smoked aubergine), **fava**
  (set purée of broad beans, Aegean), **cacık** (thinned yoghurt with
  cucumber — soupy, in a bowl), **çoban salatası** (see its entry),
  **muhammara** (red pepper and walnut, Southeast), **humus** in the
  South. [HIGH that these are standard meze — Yemek.com, Gurme Rehberi,
  IWSA; kebab-house register EDITORIAL]
- **Vessel & scale**: small plates or shallow bowls ~10–14 cm; 2–3
  tablespoons each (~80–120 g) [LOW-MEDIUM — not re-checked]; served
  with lavaş or bread.
- **Texture & finish**: ezme glossy, coarse, bright red with green flecks;
  haydari thick enough to hold a spoon's shape, matte white with green
  herb flecks and an olive-oil pool; fava a smooth pale-yellow slab with
  a glossy oil film, dill and red onion.
- **Model failure**: a Greek meze board with tzatziki and pita triangles;
  a Lebanese spread with falafel; everything drowned in olive oil.
- **Composition & proportions (§4.7)** — a kebab-house starter for two.
  - **What dominates**: **the small plates themselves**, each mostly
    filled with one colour; the lavaş basket is the largest single item.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Acılı ezme | ~100 g on a 12 cm plate, dice 2–4 mm | 1 plate | Glossy brick-red, coarse, green flecks | Front left |
    | Haydari | ~100 g, ~3 cm high mound | 1 plate | Matte bright white, dill flecks, oil pool, pul biber | Front right |
    | Patlıcan salatası | ~100 g | 1 plate | Smoky grey-beige, stringy, oil sheen | Behind |
    | Lavaş | 30–40 cm sheets, folded in quarters | 3–4 in a basket | Pale, blistered | Back |
    | Lemon | wedges | 2 | Yellow | On a plate edge |

  - **Arrangement**: 3 plates in a loose triangle, lavaş behind; no
    board, no ramekin grid.
  - **State cues**: cool; oil glistening; yoghurt freshly spooned with
    visible spoon ridges.
  - **Absent on purpose**: rakı glasses, ice bucket, melon and white
    cheese pairing plate (rakı cue), tzatziki, pita triangles, falafel.
  - **Prompt-ready line**: "Three small white plates, each about twice the
    can's width, in a loose triangle on a kebab-house table: a coarse,
    glossy brick-red chopped tomato-pepper relish with green herb flecks;
    a thick matte white garlic yoghurt mound with dill and a pool of olive
    oil; a smoky grey-beige mashed aubergine. A basket of folded thin
    flatbread behind. No glasses, no melon, no pita."

#### Çoban salatası (shepherd's salad)

- **Category**: Everyday side at every meal type.
- **Form**: tomato, cucumber, green pepper, onion and flat-leaf parsley
  finely diced (~1 cm), dressed with lemon or pomegranate molasses and
  olive oil, sometimes sumac. No lettuce, no cheese. [MEDIUM — not
  independently re-checked]
- **Vessel & scale**: a shared bowl ~18–20 cm or a small side plate.
- **Texture & finish**: crisp, wet-glossy dice, juice pooling at the
  bottom.
- **Model failure**: a Greek salad (big chunks, feta slab, olives).
- **Composition & proportions (§4.7)** — one shared bowl.
  - **What dominates**: tomato ~40%, cucumber ~30%, pepper ~10%, onion
    ~10%, parsley ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Tomato dice | ~1 cm | many | Red, glossy | Evenly mixed |
    | Cucumber dice | ~1 cm, skin on or striped | many | Pale green, wet | Evenly mixed |
    | Green pepper | ~5 mm | some | Bright green | Mixed |
    | Onion | ~5 mm | some | White/purple | Mixed |
    | Parsley | chopped | a scatter | Bright green | Mixed and on top |

  - **State cues**: juice and oil pooling at the base.
  - **Absent on purpose**: lettuce, feta slab, olives, big wedges.
  - **Prompt-ready line**: "A shallow bowl of finely diced tomato,
    cucumber, green pepper and onion with chopped parsley, every piece
    smaller than a fingertip, glistening with lemon juice and olive oil
    pooling at the bottom. No lettuce, no cheese, no olives."

#### Börek (su böreği, kol böreği, sigara böreği) and gözleme

- **Category**: Everyday — breakfast, tea time, lunch, street.
- **Variants (§4.6)**: **su böreği** (boiled sheets layered with cheese,
  baked — a soft, lasagne-like square), **kol/tepsi böreği** (coiled or
  tray, crisp yufka with cheese, mince or spinach), **sigara böreği**
  (thin fried cigar rolls, ~10 cm), **gözleme** (a large folded yufka
  cooked on a convex griddle (sac), filled with cheese, spinach or
  potato — village and roadside register, often made by women at a sac).
  **Default when unspecified**: a square of su böreği. [MEDIUM — not
  independently re-checked]
- **Vessel & scale**: su böreği squares ~8 × 8 cm × 3–4 cm tall; sigara
  börek ~10 × 2 cm; gözleme a half-moon or folded rectangle ~25–30 cm.
- **Texture & finish**: su böreği golden-brown blistered top, soft pale
  layered interior with white cheese seams; kol böreği flaky, shattering
  layers; gözleme matte with brown sac spots.
- **Model failure**: Greek spanakopita triangles; puff pastry; a crêpe.
- **Composition & proportions (§4.7)** — su böreği, one serving.
  - **What dominates**: **the pastry layers** (~80% of the cut face);
    cheese seams ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Su böreği square | ~8 × 8 × 3–4 cm — about the can's diameter wide, a third its height | 1–2 | Golden, buttery, blistered top; soft ivory layers | Centre of a small plate, cut face to camera |
    | Cheese seams | thin 2–4 mm layers | 2–3 seams | White, soft, lightly melted | Between pastry layers |
    | Parsley (in filling) | flecks | — | Green | In the seams |

  - **State cues**: warm, a butter sheen, faint steam.
  - **Absent on purpose**: flaky puff layers on su böreği, triangles,
    sesame on su böreği.
  - **Prompt-ready line**: "A square of layered baked pastry on a small
    plate, about the can's width across and a third its height, golden and
    blistered on top, its cut face showing soft ivory pastry sheets with
    thin seams of white cheese and parsley flecks, a buttery sheen. Not
    puff pastry, not a triangle."

#### Simit (street and breakfast)

- **Category**: Everyday — breakfast, on the go.
- **Form (registered for Istanbul)**: a ring of twisted two-strand dough,
  dipped in grape/carob/fig molasses and crusted in sesame, **12–15 cm
  across**, 100–105 g when molasses-dipped; Istanbul's GI specifies
  cold molasses-dipping and the double-strand twist [HIGH — İstanbul
  simidi GI reported by Ekonomim and Türkiye Gazetesi; Türkiye Turizm
  Ansiklopedisi]. Regional forms: Ankara simit (darker, crisper),
  İzmir gevrek (not re-checked).
- **Vessel & scale**: stacked on a cart; at home, on a plate or directly
  on the breakfast table; often with a wedge of white cheese.
- **Texture & finish**: deep mahogany-gold crust, glossy, densely
  covered in toasted sesame; the twist visible; interior soft white.
- **Model failure**: a bagel (thick, smooth, boiled look); a pretzel.
- **Composition & proportions (§4.7)** — one simit on a bench.
  - **What dominates**: **sesame crust** (~95% of the visible surface).
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Simit ring | 12–15 cm across, ring ~2.5–3 cm thick, hole ~5–6 cm | 1 | Dark gold, glossy, twisted | Flat on paper or a bench |
    | Sesame | 2–3 mm seeds | 10–20 g, dense coat | Toasted gold | All over |
    | Beyaz peynir (optional) | wedge ~6 × 4 × 2 cm | 1 | Matte white, crumbly | Beside, on paper |

  - **State cues**: fresh, a slight glisten; a few loose seeds on the paper.
  - **Absent on purpose**: cream cheese, split-and-filled bagel look,
    pretzel salt.
  - **Prompt-ready line**: "A thin twisted bread ring about as wide as the
    can is tall, lying flat on white paper, its dark-golden glossy crust
    densely coated with toasted sesame seeds, the two-strand twist
    visible, a few seeds scattered around. Not a bagel, not a pretzel."

#### Serpme kahvaltı (the breakfast spread)

- **Category**: Weekend family breakfast and café brunch; weekday
  breakfast is a smaller version. **In scope for this file** (see FILE
  ROLE — flagged).
- **Form**: food served not on one plate but in **many small plates and
  bowls spread across the whole table**: two or three cheeses (beyaz
  peynir, kaşar, tulum or otlu), black and green olives, sliced tomatoes
  and cucumbers, green peppers, jams, **honey with kaymak** (clotted
  cream), butter, boiled eggs, sucuk (beef) or pastırma, and a hot dish
  in a sahan — **menemen** or **sucuklu yumurta**; simit, bazlama or
  village bread; tea refilled constantly; lasting an hour or more
  [HIGH — multiple serpme sources (ibrahiminyeri, Tıkla Gelsin, Tezcanlar,
  Food on the Move) agree]. Zone 7: the Van breakfast is the most
  elaborate form (not re-checked).
- **Vessel & scale**: 10–20 small plates (~10–14 cm) and bowls; one sahan
  (~16–20 cm) in the centre; bread basket.
- **Model failure**: an English fry-up; a continental buffet; bacon.
- **Composition & proportions (§4.7)** — a family table for four.
  - **What dominates**: **many small plates covering the whole table**;
    no single item dominates; the sahan in the centre is the largest.
  - **Component table**:

    | Component | Real size | Count (table) | Look | Where it sits |
    |---|---|---|---|---|
    | Small plates | ~10–14 cm | 12–16 | White or patterned | Filling the table edge to edge, touching |
    | Beyaz peynir | slabs ~6 × 4 × 1.5 cm | 4–6 | Crumbly bright white | One plate |
    | Kaşar | thin slices ~8 × 5 cm | 6–8 | Pale yellow, smooth | One plate, fanned |
    | Olives | ~1.5–2.5 cm | ~20 black, ~15 green | Wrinkled glossy black; bright green | Two small bowls |
    | Tomato & cucumber | slices ~5 mm | ~8 + ~10 | Red, pale green | One plate, alternating |
    | Honey + kaymak | ~3 tbsp each | 1 plate | Amber honey pooled around a thick ivory kaymak slab | One plate |
    | Jam | ~3 tbsp | 1–2 bowls | Deep red (sour cherry), orange | Small glass bowls |
    | Boiled eggs | halved | 4–6 halves | White, orange-yellow yolk | One plate |
    | Sucuk (beef) | rounds ~4 cm × 5 mm | ~10 | Dark red-brown, fried edges, fat sheen | In the sahan with eggs or on a plate |
    | Menemen / sucuklu yumurta sahan | 16–20 cm pan | 1 | See Menemen entry | Centre |
    | Bread / simit | slices, rings | a basket | Golden | One end |

  - **Arrangement**: plates packed close, overlapping edges; the sahan in
    the centre; the hero in a gap at the edge — **no tea glasses, no
    çaydanlık in frame** (rule 4; a strong prior — negate by name).
  - **State cues**: morning daylight; steam from the sahan; honey
    glistening.
  - **Absent on purpose**: bacon, ham, pork sausage, beans on toast,
    pancakes, tea glasses (unless briefed), orange juice.
  - **Prompt-ready line**: "A table covered edge to edge with a dozen
    small white plates, each about twice the can's width: crumbly white
    cheese, fanned pale yellow cheese, wrinkled black and bright green
    olives, sliced tomatoes and cucumbers, amber honey around a thick
    slab of clotted cream, sour-cherry jam, halved boiled eggs; in the
    centre a small steaming two-handled pan of scrambled eggs with tomato
    and peppers; a basket of sesame bread rings. No tea glasses, no bacon."

#### Menemen (and sucuklu yumurta)

- **Category**: Breakfast hot dish; also a quick supper.
- **Form**: green peppers and tomatoes softened in butter or oil, eggs
  stirred in until just set, served in the pan (sahan) with pul biber;
  **the onion-or-no-onion debate** is a real national argument — offer
  both [MEDIUM — widely reported, not independently re-checked].
  Sucuklu yumurta: fried eggs with slices of beef sucuk in the sahan.
- **Vessel & scale**: a two-handled sahan ~16–20 cm, food ~2–3 cm deep.
- **Texture & finish**: soft, wet, loosely set curds of yellow egg
  threaded through a red-orange tomato base, green pepper pieces, a
  glossy oil rim; not dry scrambled eggs.
- **Model failure**: a Mexican huevos rancheros; shakshuka with whole
  poached yolks (menemen's eggs are stirred, not whole).
- **Composition & proportions (§4.7)** — one sahan for two.
  - **What dominates**: tomato-egg mixture ~85%, pepper pieces ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Tomato base | dice ~1 cm cooked down | fills pan | Red-orange, juicy | Base layer |
    | Egg curds | soft ribbons 2–4 cm | from 3–4 eggs | Yellow-white, glossy, wet | Swirled through |
    | Green pepper | ~1–2 cm pieces | ~10–15 | Olive green, soft | Scattered |
    | Pul biber | flakes | a pinch | Red | On top |

  - **State cues**: steaming, oil bubbling at the rim, just off the heat.
  - **Absent on purpose**: whole unbroken yolks (that's shakshuka), cheese
    blanket, herbs.
  - **Prompt-ready line**: "A small two-handled copper pan, about one and
    a half times the can's height across, filled with soft, glossy, loosely
    set scrambled eggs swirled through a juicy red-orange tomato base with
    pieces of soft green pepper and a pinch of red pepper flakes, steaming,
    oil bubbling at the rim. No whole yolks, no cheese."

### B. Regional signatures and kebab variants

#### Kebab regional variants — index (§4.3 / §4.6)

Kebab in Türkiye is not one thing; offer these as choices and never
default silently. [EDITORIAL framing; each variant's sourcing is in its
entry]

| Variant | Zone | Visual tell | Entry |
|---|---|---|---|
| **Adana** | 3 | Long, flat, ridged minced-lamb kebab, **red-flecked with hot pepper**, on lavaş | Adana kebab |
| **Urfa** | 6 | Same shape, **no hot pepper** — paler brown, softer | Urfa kebab |
| **İskender** | 1 (Bursa) | Thin döner slices over bread cubes, tomato sauce, foaming butter, yoghurt | İskender |
| **Döner** | national | Shaved from a vertical cone; sandwich or wrap | Döner |
| Patlıcan kebabı | 6 | Alternating aubergine slices and meatballs on the skewer | Urfa kebab |
| Ciğer | 6 | Small cubes of lamb liver and tail fat | Urfa kebab |
| Cağ kebabı | 7 | Horizontal rotisserie, lamb cut in small skewered pieces | Cağ kebabı |
| Testi kebabı | 4 | Stew sealed in a clay jug, cracked open at the table | Testi kebabı |
| Tantuni | 3 | Tiny stir-fried beef strips in lavaş | Tantuni |
| Şiş / tavuk şiş | national | Cubes on a skewer | Köfte entry's plate logic applies |

**Default when unspecified**: Adana kebab at an ocakbaşı. [EDITORIAL]

#### Adana kebab (zone 3 authoritative)

- **Category**: Everyday and weekend treat — kebapçı, ocakbaşı, mangal.
- **Lineage**: Adana; a registered geographical indication (origin mark)
  since 2005, applied for by the Adana Chamber of Commerce in 2003; the
  registration defines the meat, the skewer and the cooking [HIGH — Yeni
  Ankara summary and TÜRKPATENT GI listing (via search; the PDF itself
  was blocked)].
- **Form**: lamb (with tail fat) **hand-minced with a zırh** (a broad,
  two-handled crescent knife), mixed with hot red pepper flakes and salt,
  pressed by hand onto **a flat iron skewer ~3 cm wide** (skewers
  90–120 cm long), grilled fast over high charcoal heat. **Hot pepper in
  the mix is what separates it from Urfa.** [MEDIUM-HIGH — GI summary via
  search + multiple kebab-house explainers (Dede Kebap, Çınaraltı)]
- **Serving**: on hot **lavaş**, grilled tomatoes and long green peppers at
  the edge, **sumac onion with parsley**, lemon; ayran is the standard
  drink (never staged) [MEDIUM-HIGH — Lezzet, Yemek.com].
- **Vessel & scale**: an oval or round plate ~28–32 cm; the cooked kebab
  **~20–30 cm long** (one or two per portion), ~3 cm wide, ~2–3 cm high,
  flattened [LOW-MEDIUM — width follows the GI skewer; length not
  re-checked].
- **Texture & finish**: rough, hand-pressed surface with **finger ridges**
  running diagonally; charred dark brown on the ridges, glistening with
  rendered fat; red pepper flecks visible; the lavaş beneath stained with
  red-orange fat drippings.
- **Model failure**: a smooth sausage; a hot dog; a round köfte; Urfa's
  paler meat; grill marks in a neat grid.
- **Composition & proportions (§4.7)** — one portion at an ocakbaşı.
  - **What dominates**: **the kebab and the lavaş** (~60% together), with
    grilled vegetables ~20% and sumac onion-parsley ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Adana kebab | ~25 cm × 3 cm × 2–3 cm — about twice the can's height long, half its width across | 1–2 | Ridged, charred brown, red-flecked, fat-glossy | Lying lengthwise on the lavaş, skewer removed |
    | Lavaş | 30–40 cm sheet, folded under | 1 under, 2–3 in a basket | Pale, soft, red-orange drip stains | Under the kebab, covering the plate |
    | Grilled tomato | whole or half, ~6 cm | 1–2 | Wrinkled, blackened skin | Plate edge |
    | Grilled sivri biber | 10–14 cm | 1–2 | Blistered, collapsed green | Plate edge, parallel to kebab |
    | Sumac onion + parsley | thin purple-tinged slivers, chopped parsley | a mound ~8 cm across | Purple-red and green | Beside the kebab or on a side plate |
    | Lemon | half or wedge | 1 | Yellow | Side |

  - **Arrangement**: kebab straight along the long axis of the plate, the
    vegetables on one side, onions on the other.
  - **Served portion vs. whole**: this is one portion; lavaş is torn and
    wrapped around pieces at the table.
  - **State cues**: just off the charcoal — glistening fat, slight smoke
    wisp, lavaş soft and warm.
  - **Absent on purpose**: skewer left in a round köfte, yoghurt sauce on
    top (that's a different dish), rice mound, fries, ayran cup, pork.
  - **Prompt-ready line**: "A long, flattened minced-lamb kebab about twice
    the can's height long and half its width across, hand-pressed with
    diagonal finger ridges, charred dark brown on the ridges and flecked
    with red pepper, glistening with fat, lying on a sheet of soft thin
    flatbread stained with red drippings; a blistered long green pepper
    and a charred tomato at the edge, a mound of purple sumac onion with
    parsley and a lemon half. No sausage look, no drink cups."

#### Urfa kebab, patlıcan kebabı and ciğer (zone 6)

- **Urfa kebab**: the same hand-minced, hand-pressed form as Adana but
  **without hot pepper** — the mix is milder, the colour a plainer brown;
  it is grilled on a **shorter, thicker skewer over lower heat for longer**
  [MEDIUM-HIGH — Dede Kebap, Çınaraltı, Cihangir Kebap and ekşi sözlük
  agree on no-hot-pepper; the skewer/heat claim from two of them]. Served
  the same way with isot (Urfa's dark, smoky chilli) on the side.
- **Urfa (Şanlıurfa) patlıcanlı kebabı** (registered GI): **each skewer
  carries 4 aubergine slices and 3 minced-meat balls, alternating; one
  portion is two skewers**; fatty mince drawn with a zırh, cooked over
  wood charcoal [HIGH — TÜRKPATENT GI No. 351 (via search)]. The aubergine
  chars black-skinned and collapses; eaten with lavaş, the smoky flesh
  squeezed out.
- **Urfa ciğer kebabı** (registered GI, 2018): **fresh lamb liver and tail
  fat from the same lamb cut to hazelnut size**, threaded on thin skewers,
  sprinkled with Şanlıurfa pepper and salt, grilled over oak charcoal
  [HIGH — TÜRKPATENT GI No. 323 (via search), Kültür Portalı]. Often eaten
  in the morning in Urfa (not re-checked).
- **Composition & proportions (§4.7)** — patlıcan kebabı, one portion
  (the most visually distinctive of the three).
  - **What dominates**: **alternating black aubergine and brown meat**
    along two skewers (~50%), lavaş ~30%, onion/pepper ~20%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Aubergine slices | thick rounds ~4–5 cm across, ~3 cm thick | 8 (4 per skewer) | Skin blackened and wrinkled, flesh collapsing, smoky grey | Alternating on skewer |
    | Meatballs | ~4–5 cm, flattened | 6 (3 per skewer) | Charred brown, fat-glossy | Between aubergine slices |
    | Skewers | long flat iron | 2 | Dark metal | Laid side by side on lavaş |
    | Lavaş | sheet | 1 under | Soft, stained | Under |
    | Onion, isot, parsley | slivers, flakes | small mound | Purple, dark red, green | Side |

  - **State cues**: juices and blackened skin; steam.
  - **Absent on purpose**: pepper-red meat (it is not Adana), yoghurt,
    rice.
  - **Prompt-ready line**: "Two long flat skewers side by side on soft
    flatbread, each threaded with four thick rounds of aubergine, skins
    charred black and wrinkled, flesh collapsing, alternating with three
    flattened brown minced-meat balls about half the can's width, glossy
    with fat; a small mound of sliced onion, parsley and dark red chilli
    flakes beside."

#### İskender kebap (zone 1 — Bursa)

- **Category**: Weekend lunch treat, restaurant.
- **Lineage**: Created in 19th-century Bursa, attributed to İskender
  Efendi; "Bursa İskender Kebap" is a registered GI (applied 2017,
  granted 2019) covering the slicing, cooking, bread, sauce and service
  [MEDIUM-HIGH — Bursa Hakimiyet, HaberGo and BTÇH (Bursa's own culture
  site) via search; the GI text itself not read].
- **Form**: **thin döner slices laid over cubes of pide bread**, covered
  with **tomato sauce**, with **thick yoghurt** on the side, and **butter
  heated until it foams and poured over at the table** — in Bursa's
  traditional houses the butter is poured in front of the diner
  [MEDIUM-HIGH — multiple Bursa sources agree]. Grilled pepper and
  tomato alongside (not re-checked).
- **Vessel & scale**: a round plate ~28 cm, often a heated metal-rimmed
  plate; the meat covers ~two-thirds.
- **Texture & finish**: meat slices thin, wide, overlapping like roof
  tiles, browned edges; tomato sauce glossy red; butter golden, foaming,
  pooling and soaking into the bread cubes; yoghurt matte white,
  untouched by sauce.
- **Model failure**: a döner plate with fries; a Greek gyro platter;
  melted cheese; sauce over the yoghurt too.
- **Composition & proportions (§4.7)** — one portion.
  - **What dominates**: **meat** ~50% of the plate surface, yoghurt ~25%,
    bread visible at the edges ~10%, grilled vegetables ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Döner slices | ~8–12 cm × 4–6 cm, 2–3 mm thick | ~15–20 | Browned edges, juicy, overlapping | Fanned over the bread in the centre-left |
    | Pide cubes | ~3 cm cubes | ~15–20 | Pale crumb soaked red-gold at the edges | Under the meat, peeking out at the rim |
    | Tomato sauce | thin coat | — | Glossy red | Over the meat |
    | Foaming butter | ~40–60 g poured | — | Golden foam, pooling, reddish tint | Over the meat, pooling at the base |
    | Yoghurt | ~150 g mound | 1 | Thick, matte bright white, spoon ridges | Right third of the plate, kept separate |
    | Grilled pepper / tomato | 10–14 cm / ~6 cm | 1 / 1 | Blistered | Plate edge |

  - **Arrangement**: meat and yoghurt side by side, never mixed; butter
    captured mid-pour is optional — without a hand (rule 5), show the
    fresh foaming pool instead.
  - **State cues**: steam; butter visibly foaming and glistening.
  - **Absent on purpose**: fries, rice, cheese, sauce over the yoghurt,
    garnish herbs.
  - **Prompt-ready line**: "A round plate more than twice the can's height
    across: thin wide slices of browned roasted meat overlapping like
    tiles over small cubes of bread, glossy with red tomato sauce and a
    pool of golden, still-foaming butter seeping into the bread; beside
    them, kept separate, a thick matte mound of white yoghurt; a blistered
    green pepper and a grilled tomato at the edge. No fries, no cheese."

#### Pide — Karadeniz kayık pide and the national pide (zones 5, 4, national)

- **Category**: Everyday — pideci lunch or dinner, delivery.
- **Form-changing (§4.2)**: **Karadeniz (Black Sea) pide** — dough rolled
  into a boat (kayık) **~30–35 cm long and 10–15 cm wide**, edges folded
  up, filled with **kıymalı** (mince), **kuşbaşılı** (small meat cubes),
  **peynirli** (cheese), **yumurtalı** or **karışık**; the Trabzon form
  gets an egg cracked on near the end of baking, left soft, and a lot of
  butter on leaving the oven [MEDIUM-HIGH — Turkish Wikipedia (via
  search), Kültür Portalı Trabzon page, Karaca, recipe sites]. **Konya
  etli ekmek** (zone 4) is a very long, flat, open, thin pide cut into
  strips (not re-checked). **Default when unspecified**: kıymalı
  Karadeniz pide. [EDITORIAL]
- **Vessel & scale**: on a long wooden board or oval steel plate; usually
  cut crosswise into ~5–6 cm strips at the pideci.
- **Texture & finish**: rolled edges deep golden, glossy with egg wash
  and butter, crisp; the filling bubbling, mince fine and red-brown, cheese
  melted and pale; the Trabzon egg yolk unbroken and glossy.
- **Model failure**: an Italian calzone; a pizza with a wide round crust;
  a flatbread with no walls.
- **Composition & proportions (§4.7)** — one kıymalı pide, cut.
  - **What dominates**: **the filling channel** (~55% of the top view)
    framed by golden dough walls (~45%).
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Pide boat | 30–35 × 10–15 cm — about three can-heights long, two can-widths wide | 1 | Deep golden, glossy, pinched pointed ends | On a board, long axis across frame |
    | Rolled walls | ~2 cm high, ~2–3 cm wide | 2 long sides | Crisp, blistered, butter-shiny | Framing the filling |
    | Mince filling | ~1 cm layer | fills channel | Red-brown, fine, with pepper and tomato flecks | Centre channel |
    | Butter | a few pats melting | 2–3 | Glossy pools | On top of filling |
    | Cuts | crosswise strips ~5–6 cm | 5–6 | Clean cut faces | Across the boat, pieces still in line |

  - **Arrangement**: strips cut but left in their boat shape; greens and
    lemon on a side plate.
  - **State cues**: fresh from the wood oven, butter melting, steam.
  - **Absent on purpose**: round pizza shape, tomato sauce layer, basil,
    cheese pull on kıymalı.
  - **Prompt-ready line**: "A long boat-shaped flatbread about three times
    the can's height long on a wooden board, its rolled edges deep golden
    and glossy with butter, pointed pinched ends, the channel filled with
    a thin layer of fine red-brown minced meat with melting butter pats,
    cut crosswise into strips still in line. Not a pizza, not a calzone."

#### Kayseri mantı (zone 4)

- **Category**: Home dinner, lokanta, a point of regional pride.
- **Lineage**: Kayseri; registered origin mark (No. 113, 2009).
- **Form**: **tiny dumplings — dough 1–1.2 mm thick cut into 15–16 mm
  squares**, each pinched round a pinch of minced meat with onion; "forty
  fit on one boxwood spoon"; boiled, served under **garlic yoghurt** and
  **butter with tomato paste / red pepper**, with dried mint and sumac
  [HIGH — TÜRKPATENT GI (via search), Kültür Portalı, Türkiye Turizm
  Ansiklopedisi].
- **Vessel & scale**: a shallow bowl or deep plate ~22–24 cm.
- **Texture & finish**: dumplings pale, soft, slightly translucent, tiny
  four-pointed parcels; yoghurt glossy-white, loose enough to pool; the
  red butter streaked and beading over the yoghurt.
- **Model failure**: large Chinese dumplings or Italian ravioli; Georgian
  khinkali; big Afghan manti.
- **Composition & proportions (§4.7)** — one bowl.
  - **What dominates**: **yoghurt** covers ~60% of the surface, dumplings
    showing through ~30%, red butter streaks ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Mantı | each ~1.5 cm — about a quarter of the can's diameter, smaller than a fingertip | ~80–120 | Pale, soft, four pinched corners | Heaped in the bowl, half-submerged |
    | Garlic yoghurt | ~150–200 g | — | Glossy white, loose | Poured over, pooling |
    | Red pepper butter | ~2 tbsp | — | Brick-red, glossy beads and streaks | Drizzled over the yoghurt |
    | Dried mint, sumac | flakes | pinches | Green, purple-red | Scattered |

  - **State cues**: warm; butter sizzling beads; steam.
  - **Absent on purpose**: large dumplings, pleated crescents, soy sauce,
    herbs sprigs, cheese.
  - **Prompt-ready line**: "A shallow bowl heaped with dozens of tiny
    pale dumplings, each smaller than a fingertip — about a quarter of the
    can's width — with pinched corners, half-covered in glossy white
    garlic yoghurt streaked with beads of brick-red pepper butter and
    flecks of dried mint and sumac. No large dumplings, no ravioli."

#### Testi kebabı (zone 4 — Cappadocia, compact)

- **Form**: meat (lamb or beef) and vegetables slow-cooked in a sealed
  clay jug (testi), which is **cracked open at the table** and poured onto
  a plate; a tourist-restaurant spectacle in Cappadocia as much as a home
  dish [MEDIUM — not independently re-checked].
- **Composition & proportions (§4.7)**.
  - **What dominates**: the stew on the plate ~70%, the broken jug ~30%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Clay testi | ~20–25 cm tall, neck broken off | 1 | Terracotta, matte, blackened at the base, jagged rim | Behind the plate |
    | Stew | ~350 g | — | Meat cubes ~2–3 cm, tomato, pepper, onion, a thin red broth | On the plate |
    | Pilav | mound ~10 cm | 1 | White | Beside |

  - **Absent on purpose**: flames, a hand with a hammer (rule 5).
  - **Prompt-ready line**: "A terracotta jug about twice the can's height
    with its neck freshly broken off, standing behind a plate of steaming
    stew — tender meat cubes smaller than the can's width, soft tomato and
    pepper in a thin red broth — and a mound of white rice."

#### Tantuni (zone 3 — Mersin, compact)

- **Form**: very small strips of beef stir-fried on a wide, shallow,
  domed steel pan (sac) with a little cottonseed oil and water, rolled in
  lavaş with tomato, onion, parsley and sumac; lemon squeezed in [MEDIUM
  — not independently re-checked].
- **Composition & proportions (§4.7)**.
  - **What dominates**: the lavaş roll ~75%; filling visible at the open
    end ~25%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Lavaş roll | ~20 cm × 4 cm (slimmer than a döner dürüm) | 1–2 | Pale, faintly oily | On paper |
    | Beef strips | ~1–2 cm × 3–5 mm | many | Brown, glossy, soft | Visible at the open end |
    | Tomato, onion, parsley | fine dice / chop | — | Red, white, green | Mixed at the end |
    | Lemon, pickled pepper | wedge, 1 pepper | 1 each | — | Side |

  - **Prompt-ready line**: "Two slim flatbread rolls, each a little
    longer than the can is tall and thinner than it is wide, on paper,
    open ends showing tiny glossy brown beef strips with fine chopped
    tomato, onion and parsley; a lemon wedge and a pickled green pepper
    beside."

#### Cağ kebabı (zone 7 — Erzurum, compact)

- **Form**: marinated lamb stacked on a **horizontal** rotisserie beside
  a wood fire; the outer layer is cut in small pieces onto thin skewers
  (cağ) and served on the skewer, eaten with lavaş, onion and green
  pepper [MEDIUM — not independently re-checked].
- **Composition & proportions (§4.7)**.
  - **What dominates**: skewered meat pieces ~60%, lavaş ~30%, onion ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Skewer of lamb | thin skewer ~25–30 cm; meat pieces ~2–3 cm, thin | 2–3 skewers | Browned, crisp edges, juicy | Laid across lavaş |
    | Lavaş | sheet | 1–2 | Pale | Under |
    | Onion, parsley, green pepper | slivers | small mound | — | Side |

  - **Absent on purpose**: a vertical döner cone (cağ is horizontal).
  - **Prompt-ready line**: "Two thin skewers laid across soft flatbread,
    each packed with small, thin, crisp-edged pieces of roast lamb, each
    piece smaller than the can's width; a small mound of onion slivers,
    parsley and a green pepper beside."

#### Balık ekmek (zone 1 — Istanbul)

- **Form**: a grilled or pan-fried **mackerel (uskumru)** fillet in a
  half-loaf of white bread with **onion, lettuce and lemon**, sold from
  boats at Eminönü and Karaköy since the late 19th century [MEDIUM —
  Lezzet, Hürriyet, Yemek.com]. Sprinkle of salt and sumac common (not
  re-checked).
- **Vessel & scale**: bread ~20–25 cm long, split; the fillet runs the
  full length and pokes out.
- **Texture & finish**: fish skin silvery-grey with dark char stripes,
  flesh off-white and flaky; bread crusty, pale gold.
- **Model failure**: fish and chips; a burger; tuna salad.
- **Composition & proportions (§4.7)**.
  - **What dominates**: bread ~55%, fillet ~30%, greens and onion ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Half-loaf | ~22 cm × 8 cm | 1 | Crusty pale gold, split | On paper on a railing or table |
    | Mackerel fillet | ~20 cm × 4–5 cm | 1 | Silver-grey skin with char stripes, flaky white flesh | Inside, tail end protruding |
    | Lettuce | shredded or leaf | a small handful | Pale green | Under fish |
    | Onion | thin rings | ~6–8 | White | On fish |
    | Lemon | wedge | 1 | Yellow | On the paper |

  - **State cues**: steam from the fish; sea light.
  - **Absent on purpose**: batter, chips, tartar sauce, hand holding it.
  - **Prompt-ready line**: "A crusty half-loaf about twice the can's height
    long, split and resting on white paper on a waterfront railing, filled
    with a whole grilled mackerel fillet whose silvery charred skin pokes
    out at one end, with pale lettuce and thin white onion rings; a lemon
    wedge beside, the water softly blurred behind. No batter, no chips."

#### Hamsi tava (zone 5 — Black Sea)

- **Form**: whole fresh anchovies (hamsi), cleaned and **dredged in
  cornmeal**, fried in a pan in which they are laid in a **radial circle,
  tails to the centre**, and flipped as one with a lid; served with
  greens, spring onion, red onion, lemon and **cornbread (mısır ekmeği)**
  [MEDIUM-HIGH — Yemek.com and ekşi sözlük describe the cornmeal and
  in-pan arrangement; the radial pattern is widely photographed but only
  described in one source]. Season: winter (not re-checked).
- **Vessel & scale**: each anchovy ~10–12 cm; a round pan or plate
  ~26–30 cm holding ~25–35 fish.
- **Texture & finish**: crisp, craggy, golden-orange cornmeal crust,
  silver skin glinting through at the belly; fine tails browned.
- **Model failure**: sardines grilled whole; battered whitebait in a heap;
  fish and chips.
- **Composition & proportions (§4.7)** — one plate.
  - **What dominates**: **the radial ring of fish** (~75%), greens ~15%,
    cornbread ~10%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Hamsi | 10–12 cm, ~1.5–2 cm wide — about the can's height long, much slimmer than a finger | ~25–35 | Golden-orange cornmeal crust, crisp, silver glints | In a tight radial circle, tails inward |
    | Rocket / parsley / spring onion | sprigs, 1–2 whole onions | a small bunch | Green | Centre of the ring or side |
    | Red onion | wedges/rings | ~5 | Purple | Side |
    | Lemon | wedges | 2 | Yellow | Side |
    | Mısır ekmeği | wedges ~8 cm, 3–4 cm thick | 2 | Dense, coarse, yellow crumb, dark crust | Side plate |

  - **State cues**: just fried — oil glisten, crisp crust.
  - **Absent on purpose**: batter, a random heap, chips, tartar sauce.
  - **Prompt-ready line**: "About thirty small whole anchovies, each about
    as long as the can is tall but much slimmer than a finger, fried in a
    crisp craggy golden-orange cornmeal crust, laid in a tight circle with
    tails pointing to the centre on a round plate; a small bunch of green
    rocket and spring onion in the middle, lemon wedges and a wedge of
    dense yellow cornbread beside."

#### Midye dolma (zones 1–2 — street)

- **Form**: mussels stuffed with spiced rice (with pine nuts, currants,
  allspice, cinnamon — not re-checked), steamed in the shell, served
  cold or room temperature from a tray, **with lemon squeezed on**; the
  street vendor opens each one [MEDIUM — not independently re-checked].
- **Composition & proportions (§4.7)** — a small street plate.
  - **What dominates**: black shells ~60%, rice showing ~40%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Mussels | shell ~6–7 cm — about the can's diameter | 8–10 | Glossy blue-black shells, one half lifted to show rice | In rows on a small plate |
    | Stuffed rice | fills shell | — | Reddish-brown spiced grains, a few currants and pine nuts | Inside shells |
    | Lemon | wedges | 2–3 | Yellow | On the plate |

  - **Absent on purpose**: fries, sauce, open mussels in broth (moules).
  - **Prompt-ready line**: "Eight glossy blue-black mussel shells, each
    about as long as the can is wide, lined up on a small plate with the
    top shell lifted to show a filling of reddish-brown spiced rice with
    currants; lemon wedges beside."

#### Zeytinyağlılar and yaprak sarma (zone 2 — Aegean; national)

- **Form**: vegetables cooked in olive oil and **served at room
  temperature**: yaprak sarma (vine leaves rolled round rice with pine
  nuts and currants), taze fasulye (green beans in tomato and olive oil),
  enginar (artichoke), imam bayıldı; in the Aegean, wild greens (ot)
  sautéed or boiled with olive oil and lemon [MEDIUM — not independently
  re-checked]. **Etli sarma** (with meat) is a hot dish with yoghurt —
  a different register.
- **Composition & proportions (§4.7)** — a plate of zeytinyağlı sarma.
  - **What dominates**: **the rolls** ~85%, lemon/oil ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Yaprak sarma | ~6–7 cm × 1.5 cm — about half the can's height, thinner than a finger | 10–12 | Dark olive-green, glossy, fine leaf veins, tightly rolled | Stacked in neat rows |
    | Olive oil | a thin film | — | Golden, glossy | Pooled at the base |
    | Lemon | slices/wedges | 2–3 | Yellow | Tucked at the edge |

  - **State cues**: cool — no steam; oil glisten.
  - **Absent on purpose**: yoghurt on the olive-oil version, steam, tomato
    sauce, big fat rolls.
  - **Prompt-ready line**: "A plate of a dozen thin, tightly rolled vine
    leaves, each about half the can's height long and thinner than a
    finger, dark olive green and glossy with visible leaf veins, stacked
    in neat rows in a thin film of golden olive oil, lemon slices at the
    edge, served cool with no steam."

#### Çiğ köfte (zone 6; national street)

- **Form**: **fine bulgur kneaded for a long time with isot (Urfa
  pepper), tomato and pepper paste, onion, spices and pomegranate
  molasses** into a deep red paste, shaped by squeezing in the fist (the
  finger-ridged "sıkma" shape); eaten in lettuce leaves or as a lavaş
  dürüm with lemon and pomegranate molasses. **The commercial version is
  meatless** since the 2008 ban on selling the raw-meat form; the
  meatless çiğ köfte shop is now a national chain format [MEDIUM-HIGH —
  Yemek.com, Gurme Rehberi and search summaries agree on the ban and the
  meatless shift].
- **Composition & proportions (§4.7)** — a plate.
  - **What dominates**: the red köfte pieces ~50%, lettuce ~35%, lemon
    and greens ~15%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Çiğ köfte pieces | ~6–7 cm long, ~2.5 cm thick — about the can's width long, with finger ridges | 10–12 | Deep brick-red, matte, fine-grained, visible finger-grip ridges | Arranged in a ring |
    | Lettuce leaves | romaine hearts ~12–15 cm | 6–8 | Crisp pale green | Around or under |
    | Lemon | wedges | 2–3 | Yellow | Side |
    | Parsley, mint, spring onion | sprigs | a few | Green | Side |
    | Nar ekşisi | small dish | 1 | Dark red-brown, glossy | Side |

  - **State cues**: cool, matte, no steam.
  - **Absent on purpose**: raw meat, cooked köfte char, yoghurt.
  - **Prompt-ready line**: "Ten small elongated pieces of a deep brick-red
    bulgur paste, each about as long as the can is wide, squeezed by hand
    so they show finger ridges, matte and fine-grained, arranged in a ring
    on a plate with crisp romaine leaves, lemon wedges and a few sprigs of
    parsley and mint. No grill char."

#### Kavurma (Kurban Bayramı, first day — national)

- **Form**: fresh sacrificial meat (lamb or beef) cut in small cubes and
  **cooked slowly in its own fat, with a knob of butter**, sometimes with
  onion, green pepper or tomato at the end; served on the first morning
  of Kurban Bayramı with **buttered rice pilav** and bread [HIGH — Yemek.com,
  Hürriyet and the Diyanet Bayram Gazetesi's history piece (via search)].
- **Composition & proportions (§4.7)** — one plate on bayram morning.
  - **What dominates**: meat ~60%, pilav ~35%, pepper ~5%.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Kavurma cubes | ~2–3 cm — a third to half the can's width | ~15–20 | Deep brown, glossy with rendered fat, crisp edges | Heaped on one side |
    | Pilav | mound ~10–12 cm | 1 | Glossy white grains | Other side |
    | Green pepper | slivers | a few | Bright green | Scattered over the meat |
    | Bread | slices | 1–2 | — | Basket |

  - **State cues**: steam, fat glisten.
  - **Absent on purpose**: raw meat, whole carcass, blood, the animal,
    knives in hero position.
  - **Prompt-ready line**: "A plate with a heap of small cubes of slow-fried
    meat, each a third to half the can's width, deep brown with crisp
    edges and glossy with rendered fat, a few slivers of green pepper on
    top, beside a glossy mound of white butter rice, steam rising, morning
    light."

#### Ramazan pidesi and the iftar table (national)

- **Form**: a round, puffy flatbread, **300–400 g (up to 500 g)**, dough
  of flour, yeast, water and salt, brushed with egg yolk, **scattered with
  sesame and nigella seed**, its surface pressed with a lattice of finger
  grooves; bought hot from the bakery each Ramadan afternoon [HIGH for
  weight and toppings — Yemek.com, CarrefourSA, Safranbolu Fırını;
  lattice pattern MEDIUM — not re-checked]. See FESTIVALS for the iftar
  table and its staging rules.
- **Composition & proportions (§4.7)** — the iftar table's centre, before
  the call to prayer.
  - **What dominates**: the pide (the largest single item), then the soup
    bowls; dates and iftariyelik plates are small accents.
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Ramazan pidesi | round ~25–30 cm, ~4 cm tall (diameter not sourced) | 1–2 | Shiny egg-washed deep gold, lattice of grooves, sesame and black nigella seeds | Whole and untorn, centre |
    | Mercimek soup | 15–18 cm bowls | 1 per person | Orange, steaming | At each place |
    | Dates | ~3–4 cm | 8–12 on a small plate | Dark brown, glossy, wrinkled | Small plate near centre |
    | Iftariyelik plate | 20 cm plate | 1 | White cheese, olives, beef sucuk and pastırma slices (never pork) | Near centre |
    | Main dish | shared | 1 | e.g., a stew or karnıyarık | Centre-back |

  - **State cues**: everything full and untouched; steam from soup; dusk
    blue at the window, warm lamp light.
  - **Absent on purpose**: started plates, water and tea glasses (rule 4),
    pork, alcohol.
  - **Prompt-ready line**: "At dusk, a family table set and untouched: in
    the centre a round, puffy, shiny deep-gold flatbread more than twice
    the can's height across, its surface pressed in a lattice of grooves
    and scattered with sesame and black nigella seeds; bowls of steaming
    orange lentil soup at each place, a small plate of glossy dark dates,
    a plate of white cheese and olives. No glasses of water or tea."

### C. Sweets

#### Baklava (zone 6 — Antep; national)

- **Lineage**: Antep baklavası was registered as a Turkish GI in 2007 and
  became **Türkiye's first product registered as a GI in the EU** [HIGH —
  AB.gov.tr, GSO, Kültür Portalı]. The registered composition per kg:
  pistachio 10–11%, kaymak 12–13%, fat 15–16%, syrup 35–36%, dough 25%;
  cut as kare (square), baklava (diamond), muska (triangle) or **havuç
  dilim** (a long "carrot slice" triangle from centre to edge) [HIGH —
  GSO / GI summaries via search]. "Forty layers" is a common saying, not
  confirmed as a GI rule [LOW].
- **Vessel & scale**: a round copper or steel tray (tepsi) in the
  shop; at home 4–6 pieces on a small plate; kare pieces ~4–5 cm square,
  ~3 cm tall (not re-checked).
- **Texture & finish**: top golden to pale amber, glossy with syrup,
  crisp paper-thin layers visible on the cut sides; the cut face shows a
  bright green pistachio layer; syrup pooling slightly at the base.
- **Model failure**: Greek walnut baklava with cinnamon and honey, brown
  and dense; a flat, dark, soggy square.
- **Composition & proportions (§4.7)** — a bayram guest plate.
  - **What dominates**: pastry layers (~70% of the cut face), pistachio
    (~25%), syrup sheen (~5%).
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Baklava (kare) | ~4.5 cm square × 3 cm — about the can's width | 5 | Golden glossy top, crisp flaky sides | Two rows on a small plate |
    | Pistachio layer | ~5–8 mm band | 1 per piece | Vivid green, coarse-ground | Mid-layer on cut faces; a pinch sprinkled on top |
    | Syrup | thin sheen | — | Clear, glossy | Top and pooled at the base |

  - **State cues**: glossy, crisp — not soggy.
  - **Absent on purpose**: walnuts, cinnamon, honey drizzle, whipped cream.
  - **Prompt-ready line**: "Five small squares of layered pastry, each
    about the can's width across and a quarter of its height, in two rows
    on a small plate, their tops glossy golden with syrup, their sides
    showing dozens of crisp paper-thin layers and a bright green band of
    ground pistachio, a pinch of pistachio on top. No walnuts, no honey
    drizzle."

#### Künefe (zone 3 — Hatay/Antakya)

- **Lineage**: **Antakya künefesi** has held a GI since 2008; four
  ingredients — **tel kadayıf (shredded pastry), unsalted künefe cheese,
  butter, syrup**; baked on a **copper tray** over charcoal or in a
  baklava oven, turned; **~1–2 cm thick**; served hot with **pistachio**
  on top and kaymak or ice cream alongside [HIGH — Hatay TSO GI page,
  KÜRE, Yeni Mesaj via search].
- **Composition & proportions (§4.7)** — one portion.
  - **What dominates**: the golden kadayıf top (~85%), pistachio (~10%),
    kaymak (~5%).
  - **Component table**:

    | Component | Real size | Count | Look | Where it sits |
    |---|---|---|---|---|
    | Künefe | round ~15–18 cm (not sourced), 1–2 cm thick | 1 | Crisp, deep orange-gold shredded strands, glossy with syrup | In its small copper tray or on a plate |
    | Cheese | layer ~5–8 mm | — | White, stretchy, visible when cut | Middle |
    | Pistachio | ground | a spoonful | Vivid green | Centre, on top |
    | Kaymak | slab ~5 × 3 cm | 1 | Thick ivory | Beside or on top |

  - **State cues**: hot, steam, cheese stretch on a cut wedge, syrup gloss.
  - **Absent on purpose**: orange-dyed cream fillings, a cake look.
  - **Prompt-ready line**: "A small round copper tray, a little wider than
    the can is tall, holding a hot, flat disc of crisp deep orange-gold
    shredded pastry glossy with syrup, one wedge pulled back to show a
    stretchy white cheese layer, a spoonful of bright green ground
    pistachio in the centre and a slab of thick ivory clotted cream
    beside."

#### Compact sweets

- **Sütlaç** (baked rice pudding with a browned top, in individual clay
  or glass bowls), **güllaç** (Ramadan; paper-thin starch sheets in
  rose-milk, pomegranate seeds and nuts on top), **lokum** (Turkish
  delight, dusted cubes, at bayram visits), **aşure** (Noah's pudding,
  shared with neighbours in the month of Muharrem). [MEDIUM — not
  independently re-checked] **Composition (§4.7, sütlaç)**: one bowl
  ~10–12 cm across, filled to the rim, a mottled brown-caramelised skin
  over ~80% of the surface, pale cream showing at the edge, a light dust
  of cinnamon optional; prompt line: "A small clay bowl a little wider
  than the can, filled to the rim with creamy rice pudding under a
  mottled, caramel-brown baked skin." [EDITORIAL]

---

## EXAMPLE PROMPT LANGUAGE (illustrative — not validated by any image test)

**Adana kebab at an ocakbaşı, 2 people, zone 3:**
> Eye-level photograph at a kebab-house table in Adana, warm evening
> light, a charcoal grill softly out of focus behind. On a plain white
> cloth: two oval plates, each with a long, flattened minced-lamb kebab
> about twice the can's height long, hand-pressed with diagonal finger
> ridges, charred on the ridges and flecked with red pepper, lying on soft
> thin flatbread stained with red drippings; blistered long green peppers
> and charred tomatoes at the edge; a shared plate of purple sumac onion
> with parsley and lemon halves; a basket of folded flatbread. Beside the
> plates: two Coca-Cola Original 330 ml cans, red aluminium, not Zero
> Sugar, not any other cola brand. No tea glasses, no copper cups of
> yoghurt drink, no other drinks; no legible text or signage anywhere;
> nothing held in a hand; neutral colour grading. Pack text will be
> composited in post.

**Weekend kahvaltı at home, 3 people, zone 1 (Istanbul apartment):**
> Morning daylight on an Istanbul apartment balcony with potted plants
> and blurred apartment blocks beyond. A small table covered edge to edge
> with small white plates: crumbly white cheese, fanned pale yellow
> cheese, black and green olives, sliced tomatoes and cucumbers, amber
> honey around clotted cream, sour-cherry jam, halved boiled eggs; in the
> centre a small two-handled copper pan of soft scrambled eggs with
> tomato and green pepper, steaming; a basket of sesame bread rings each
> about as wide as the can is tall. At the table's edge, a 1.5-litre
> Coca-Cola Original plastic bottle, red label, not Zero Sugar, with three
> filled plain glasses. No tea glasses, no teapot, no bacon or ham, no
> legible text, nothing held in a hand.

*Before use: run at least two generations per prompt
(`country-file-schema.md` §7.5) and apply this file's confidence tags.*

---

## GAP LOG

- **Composition & proportions blocks (§4.7) are mostly editorial
  synthesis.** Piece sizes are sourced where tagged (mantı, simit,
  lahmacun, Adana skewer width, patlıcan kebabı counts, kayık pide,
  Ramazan pidesi weight, künefe thickness, tea glass); counts and surface
  shares are reasoned from recipes and serving norms and must be checked
  against two or more image generations per prompt-ready line.
- **Search budget exhausted mid-pass.** The shared session's WebSearch cap
  (200) was reached after ~40 searches for this file. Not checked:
  the iftar table's traditional order, İskender plating details, meze
  portion sizes, the regional cuisines of zones 2, 5 and 7, döner
  build-by-stall, köfte regional forms, testi kebabı, tantuni, cağ kebabı,
  midye dolma, zeytinyağlılar, Ramazan 2026 start date, meal clock times.
  All are tagged "not independently re-checked this pass".
- **Pack dimensions**: 330 mL can dims come from the brand file; **no
  Turkish-market heights for the 200 mL or 250 mL glass bottles, the
  250 mL can, the 450 mL PET or the multi-serve PETs**. Hold until the
  expected TCCC spec drop (`coca-cola-guidelines.md` front-matter flag).
- **Brand-file mismatch (not edited here)**: `coca-cola-guidelines.md`
  §4.4 names a "500mL" personal bottle and §4.3's glass-bottle row is a
  330 mL contour bottle; Türkiye's current personal PET is **450 mL** and
  its everyday glass bottles are **200 mL and 250 mL**. Whether a 500 mL
  PET or 330 mL glass also exists in Türkiye was not confirmed. The 330 mL
  can rule itself **fits** Türkiye.
- **One aggregator claim not verified**: a CCI profile summary mentions
  200 mL and 300 mL returnable glass SKUs for emerging markets; the
  300 mL format was not found in Turkish retail and is not used here.
- **Housing split**: TÜİK publishes households by building storeys, not
  a flat/house share (in the snippets found); the "apartment default" is
  an inference from ~71% of households living in buildings of three or
  more storeys. A direct flat/house figure is still wanted.
- **Meal clock times** (dinner ~19:00–20:00 etc.) are model knowledge;
  the Ipsos data confirms who eats where, not when.
- **Primary GI documents not read**: TÜRKPATENT, Gaziantep municipality
  and Fortune Turkey pages were blocked by the egress proxy; GI claims
  rest on search snippets.
- **TCCC portfolio pages** (Coca-Cola Türkiye "Merak Ettim", CCI) were
  blocked; brand list is from search snippets.
- **Cola Turka's current share and availability** not confirmed.
- **Breakfast in scope** is a deviation from the project default —
  needs Fernando's decision.
- **Iftar staging** and the "never the first sip" rule are editorial
  sensitivity calls, not TCCC Türkiye policy — a reviewer should confirm
  against TCCC Türkiye's own Ramadan guidance.
- **Compact entries** (testi kebabı, tantuni, cağ kebabı, sweets) would
  need full sourcing if a brief leans on them. Zones 2 (Aegean) and 7
  (Eastern Anatolia) are the thinnest.
- **Celebrations pass (2026-10-01) open items.** Wedding headcounts
  (200 to 450) come only from wedding-salon and industry sites. The
  bayram-table menu rests on food-writer and recipe sites. The New Year's
  hindi dolması is documented as a recipe-media centrepiece; how many
  households actually serve it is unknown. The birthday entry is LOW
  throughout (no searches spent). The weekend piknik entry relies on the
  file's own unverified ENVIRONMENT note. TCCC Türkiye's own Ramadan and
  bayram advertising practice is still not researched.
- **Game-night pass (2026-10-01) open items.** One search this pass
  (match-night snacks) put çekirdek, crisps and nuts at LOW-MEDIUM from
  recipe media, a retailer blog and forums; everything else is LOW and
  not verified: derby and Süper Lig kick-off times; lahmacun and pide
  delivery as derby food; çiğ köfte for national-team nights; the
  kahvehane screening and its tost and simit; okey, tavla and tombala
  food spreads; New Year's Eve tombala as a custom; EuroLeague
  basketball viewing. Tea at okey, tavla and the derby is recorded as
  authentic and kept out of frame per hard rule 4.

## CANDIDATE QUEUE

1. **Fernando decisions**: breakfast in scope; the Southeast spinout;
   the Adana/Hatay zone placement; iftar and Kurban staging rules.
2. When search budget allows: iftar table order; İskender plating; a
   direct TÜİK flat-vs-house share; meal clock times; zone 2 and zone 7
   cuisine checks; confirm whether a 500 mL PET or 330 mL glass exists.
3. Once the TCCC spec drop lands: Türkiye's 200/250 mL glass, 250 mL can,
   450 mL PET and 1/1.5/2.5 L PET dimensions into
   `coca-cola-guidelines.md` §4.3.
4. Image tests (two or more generations each), starting with Adana kebab
   (sausage-shape failure), döner dürüm (gyro failure), lahmacun (pizza
   failure), mantı (dumpling-size failure) and the kahvaltı spread
   (tea-glass intrusion).
5. Independent §8 audit of this file.
6. Celebration dishes with no catalog entry (celebrations pass
   2026-10-01): keşkek; etli pilav (düğün pilavı); hünkâr beğendi;
   hindi dolması (New Year's); yaş pasta (compact).
7. Game-night foods with no catalog entry (game-night pass 2026-10-01):
   çekirdek (sunflower seeds with a shell dish) and kuruyemiş as a compact
   snack entry; kaşarlı tost (café register).

## RESEARCH LOG

- **2026-09-27, first pass (this file).** Built directly, no scaffold.
  About 40 WebSearch queries completed before the session's shared
  200-search cap was reached (4 further queries were refused); 4 WebFetch
  attempts were blocked by the egress proxy (TÜRKPATENT Adana GI PDF,
  Gaziantep municipality GI site, Fortune Turkey, Coca-Cola Türkiye
  "Merak Ettim"). Topics searched:
  - **Packs and brand**: Coca-Cola can sizes in Türkiye (330 mL and
    250 mL); glass bottles (200 mL, 250 mL, 1 L heritage reissue); PET
    (450 mL, 1 L, 1.5 L, 2.5 L); CCI as bottler; TCCC Türkiye portfolio;
    Cola Turka history.
  - **Law and religion**: Law 6487 alcohol advertising ban; pork
    availability; Ramadan 2027 dates; Ramazan and Kurban Bayramı 2026 and
    2027 dates; Kurban kavurma; Ramazan pidesi.
  - **Housing and meals**: TÜİK 2021 building/dwelling survey; household
    size and flat size trends; Ipsos "Türkiye'nin Sofra Atlası" 2026.
  - **Drinks**: çay consumption and çaydanlık; tea-glass dimensions;
    ayran and copper cups; rakı and meze culture.
  - **Dishes**: Adana vs Urfa kebab and the Adana GI; İskender GI;
    lahmacun size and Antep GI; Karadeniz pide; serpme kahvaltı; simit
    GI; Kayseri mantı GI; çiğ köfte ban; Antakya künefe GI; Antep
    baklava GI; Urfa patlıcan and ciğer GIs; döner portions; balık ekmek
    and hamsi tava; Adana serving.
- **Access limitation**: see the blocked fetches above; affected claims
  are marked "(via search)".
- **Sources considered and down-weighted**: recipe blogs and restaurant
  blogs (tier 4) used only for sizes and forms where nothing better
  surfaced, and marked; ekşi sözlük and KizlarSoruyor treated as
  corroboration only, never as sole source.
- **No subagents were used.**
- **2026-10-01 celebrations pass (schema §5.7):** 6 searches (village
  wedding food, salon wedding size and format, sünnet feast menus, iftar
  invitation menus, bayram visits and table, New Year's Eve table).
  Added CELEBRATIONS & LARGE GATHERINGS after the FESTIVALS register with
  8 entries: iftar invitation, Ramazan Bayramı family meal, Kurban Bayramı
  family meal, New Year's Eve dinner, wedding (village and salon), sünnet
  feast, weekend mangal and piknik, birthday. Bayram mornings mentioned,
  main meals staged, per the 2026-10-01 breakfast rule. WebSearch only.
- **2026-10-01 game-night pass (schema §5.8):** built from the
  cross-market research notes (45 searches across all markets), 1 new
  search (Turkish match-night snacks: Yemek.com, Lezzet, CarrefourSA,
  Technopat). Added GAME NIGHT after CELEBRATIONS & LARGE GATHERINGS with
  three watch-party entries (derby night at home, national-team night,
  neighbourhood café or kahvehane screening staged food-led with tea out
  of frame) and three social game-night entries (family okey at home,
  tavla at a café or garden table, New Year's Eve tombala).
