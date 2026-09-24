---
country: united_states
ou: north_america (assumed — TCCC's actual OU code for the US not confirmed in this session; flag for correction)
status: DRAFT — NEEDS SME/HUMAN REVIEW — NATIONAL INDEX FILE, PARTIAL FIRST PASS
research_method: Claude web research
date_drafted: 2026-09-24
---

## FILE ROLE & METHOD

Unlike Uruguay (single national file), the US was already established as requiring
regional splitting before this file was started — this is not a re-litigated
triage decision, it's the working assumption this file operates under.

**This file is the national index and cross-cutting layer, not the full KB.**
It holds: (1) full entries for dishes/customs that are genuinely nationally
uniform, (2) thin index entries for dishes that vary by sub-national geography,
pointing to whichever regional file holds the authoritative depth, and (3) the
reusable schema/mechanism notes below, so later regional files and later
countries' files can inherit the same conventions without re-deriving them.

**Scope, per explicit direction:** lunch, dinner, and snacks only — breakfast is
intentionally excluded. Ranking/inclusion is by *staging relevance* (what a
Coca-Cola photography brief would plausibly plate a meal scene around), not raw
consumption frequency — this is why some very-high-frequency foods (cereal,
toast) are absent and some lower-frequency but iconic ones (Thanksgiving dinner)
are included. No beverage other than Coca-Cola itself is in scope; this file
does not catalog other American beverages.

**Working regional-file list — DECIDED 2026-09-24 (human sign-off received), superseding the original 10-file working hypothesis.**
A dedicated subagent validation pass (method: the same "would swapping one
region's norms into another look visibly wrong" test used in Uruguay's SUB-REGION
TRIAGE DECISION) confirmed the original ten as real categories but found the
list undercounted; the reviewer then resolved the one point the research
itself left open. **Final list: 13 regional files.**

| # | File | Status vs. original 10-file list |
|---|------|------|
| 1 | `us-northeast.md` | unchanged |
| 2 | `us-mid-atlantic.md` | unchanged (dish assignment governs the NYC/Philadelphia boundary, not census political-region lines) |
| 3 | `us-south.md` | scope narrowed — explicitly excludes Appalachia, Florida, and Louisiana Creole/Cajun; carries a Lowcountry callout pending its own review (see below) |
| 4 | `us-appalachia.md` | **NEW** — omitted from the original list without a documented reason; evidence (distinct pantry from climate/geography, distinct settlement pattern) supports adding it |
| 5 | `us-florida.md` | **NEW** — split back out of `us-south.md`; own documented "Floribbean" identity and internal North/South Florida split |
| 6 | `us-gulf-south.md` | **Unchanged name (reviewer decision, 2026-09-24) — the research-recommended rename to `us-louisiana.md` was rejected.** Reviewer's read: po'boys and this file's other anchor dishes are not confined to Louisiana in practice even though they originated there (po'boy: New Orleans, 1929), so "Gulf South" better reflects the actual reach than narrowing to a single state's name would. Same caveat as `us-desert-southwest.md` above — this is a reviewer judgment call about naming/framing, not a rebuttal of the underlying distinctness evidence (Cajun/Creole cuisine being genuinely different from mainstream Southern food is not in dispute, only what to call the file that holds it). |
| 7 | `us-midwest.md` | unchanged |
| 8 | `us-texas.md` | unchanged (internal North/South/West Texas Tex-Mex variation noted as a callout, not a further split) |
| 9 | `us-new-mexico.md` | **NEW — split out of the original `us-desert-southwest.md` slot.** Two subagent passes disagreed on this (one recommended keeping New Mexico bundled with Arizona as an internal sub-style; the chile-specific pass recommended a standalone file, citing separate Wikipedia categories, a specialist culinary school framing the comparison as "Tex-Mex vs. New Mexican" rather than "vs. Desert Southwest," and Arizona's own Sonoran style being explicitly described as its own distinct thing). **Decision (human, 2026-09-24): split them.** If New Mexico carries enough distinct, sourced material (red/green chile, the "Christmas" state question, stacked-enchilada format, Hatch chile's geographic-designation status) to warrant its own depth, it gets its own file rather than being a subsection of somewhere else. |
| 10 | `us-desert-southwest.md` | **Unchanged name (reviewer decision, 2026-09-24).** New Mexico splits out to its own file (#9 above), so this file now covers Arizona/Sonoran-style content specifically — but unlike the West Coast→California rename, the reviewer judged there isn't enough known internal variance *within* what's left to justify a more specific name; "Desert Southwest" stays. Note this is a judgment call, not an independently-researched conclusion the way the California/Louisiana renames were — flag if a future pass finds real internal Arizona-vs-elsewhere-in-the-Southwest variance that would argue otherwise. |
| 11 | `us-west-coast.md` | **Unchanged name (reviewer decision, 2026-09-24) — the research-recommended rename to `us-california.md` was rejected.** Same pattern as the two reversals above: the underlying content (California cuisine, Baja fish taco, sourdough) is not in dispute, only the file's name/framing — reviewer kept the broader "West Coast" label. |
| 12 | `us-pacific-northwest.md` | unchanged |
| 13 | `us-hawaii.md` | unchanged |

**Still open, not part of this decision:** `us-lowcountry.md` (South Carolina/coastal
Georgia — rice, she-crab soup, shrimp and grits, Gullah influence) surfaced
incidentally as a candidate 14th region but was not independently stress-tested
with the same rigor as the others — needs its own dedicated pass before a
file/no-file decision; `us-south.md` carries a labeled callout for it in the
meantime rather than treating coastal Carolina/Georgia food as generically the
same as inland BBQ-and-fried-chicken content.

**No regional files have been created yet.** This pass produces only `us.md`.
Every "→ `us-*.md`" pointer elsewhere in this document should now be read
against this finalized 13-file list.

## SCHEMA NOTE — three independent dimensions (new convention, meant to be reusable beyond the US)

A dish in this KB can vary along three separate axes, and they should not be
conflated:

1. **Cuisine lineage** (a tag, not a structural decision): native-American-tradition,
   Italian-American, Mexican-American, Chinese-American, etc. Purely informational —
   tells you what tradition a dish draws on, doesn't by itself trigger any special
   handling.
2. **Regional form variation**: `none` (nationally uniform) / `prevalence-only`
   (same dish, just eaten more or less often in a given region — gets a one-line
   note, no pointer needed) / `form-changing` (the dish's actual visual/physical
   form changes by sub-national geography, and depicting the wrong one for a
   named location would be a real, visible authenticity error). Form-changing
   dishes get a **thin index entry here** and their full, authoritative
   region-specific entries live in the regional file(s) that contain those
   variants — never duplicated in both places.
3. **Serving-format variation**: some dishes exist as genuine siblings — a
   plated version and a sandwich/handheld version — that look nothing alike
   despite sharing a name and flavor profile (chicken parmesan, meatballs).
   This is independent of region: both formats are eaten nationally. Each
   format gets its own full visual/plating entry.

**Placement rule for form-changing dishes:** the thin index entry lives in the
smallest file whose scope contains every regional variant (here, that's
`us.md`, since e.g. pizza's variants span multiple macro-regions); the full
entries live in the regional file matching each variant. A future country file
should apply the same rule at whatever grain its own evidence supports — it
does not have to bubble all the way to a national file if the variation is
genuinely confined to one region.

## TRUSTED CONTENT

### BREAD REFERENCE (cross-cutting norm — same pattern as Uruguay's bread-basket norm)

American sandwich culture spans a specific, named set of breads — not one
generic "bun." Getting the wrong bread on the wrong sandwich is as much an
authenticity error as getting the wrong bun would have been in Uruguay.

- **Sub/hoagie roll**: a long, soft-crusted white roll, the default for
  regional long sandwiches (see naming-regionalism note below). [CONFIDENCE: HIGH]
- **Kaiser roll**: round, split-top roll with a pinwheel-patterned crust,
  common for deli sandwiches and some burgers. [CONFIDENCE: MEDIUM]
- **NY-style bagel**: boiled then baked (not steamed), producing a dense,
  chewy interior and a shiny, dark golden crust; mass-produced/supermarket
  bagels are typically steamed instead, giving a distinguishable grid pattern
  on the bottom and a less shiny, less chewy result. This is a genuine
  **form-changing regional case** in its own right — a generic "bagel" outside
  the NY-metro tradition is a real, documented, lesser imitation, not just a
  stylistic variant. [CONFIDENCE: HIGH] [SOURCE: [Wikipedia: New York-style bagel](https://en.wikipedia.org/wiki/New_York%E2%80%93style_bagel); [Gotham Bagels](https://www.gothambagels.com/blog/bagel-history-origins-and-evolution-of-the-new-york-style-bagel)]
- **Ciabatta**: Italian-American deli/panini bread, airy and open-crumbed.
  [CONFIDENCE: MEDIUM]
- **Pita**: used for gyros specifically (see Gyro entry below), pocketless
  or pocketed depending on region/vendor. [CONFIDENCE: MEDIUM]
- **Rye bread**: the default for pastrami and Reuben sandwiches, tied to
  NYC Jewish deli tradition (see Deli Culture below). [CONFIDENCE: HIGH]
- **Sourdough**: San Francisco/West Coast-coded specifically — like pizza,
  this is a bread with a real regional identity, not a generic national
  option. Not fully researched this pass — flag for follow-up. [CONFIDENCE: LOW — not yet independently sourced this pass]

### TOP DISHES — LUNCH, DINNER & SNACKS

#### Burger family

##### Dish: Cheeseburger — classic stacked
- Category: Everyday
- Cuisine lineage: Native-American-tradition (German "Hamburg steak" origin, but the sandwich form is a US development)
- Regional form variation: None at the core-form level (round patty, bun, toppings), though specific chains/regions have style preferences
- Serving format: Sandwich/handheld (the only format for this entry — no plate-only version)
- Primary protein: Ground beef patty, pre-shaped before cooking
- Primary starch/accompaniment: Soft bun (sesame-seed or plain)
- Side dishes/condiments: Cheese (American, cheddar), lettuce, tomato, onion, pickles, ketchup/mustard/mayo — assembled to order or standardized per venue
- Serving vessel: Paper wrap/basket (casual/fast-food) or plate (sit-down)
- Visual/plating characteristics: Patty stays round and holds its shape; cooked to medium/medium-well with a juicy but not pink-dominant center at most US venues (contrast with steak doneness norms); toppings visible in distinct layers when cut in half for a photo.
- Confidence: HIGH
- Sources: [How to Eat Everything — Typology of American Hamburgers](https://howtoeateverything.substack.com/p/a-typology-of-american-hamburgers); [Gygi — Regular vs Smash Burger](https://www.gygiblog.com/blog/2023/07/03/regular-burger-vs-smash-burger/)

##### Dish: Smashburger
- Category: Everyday
- Cuisine lineage: Native-American-tradition
- Regional form variation: Prevalence — originated in Appalachian Kentucky (Dairy Cheer, Ashland, KY, per one origin account), re-popularized nationally in the 2000s by chains; now nationally available, not confined to one region. [CONFIDENCE: MEDIUM — a single detailed origin account; other sources note pre-existing smashing technique before this specific story]
- Serving format: Sandwich/handheld
- Primary protein: A loosely-formed ball of ground beef, pressed hard onto a hot griddle at the point of cooking (not pre-shaped)
- Visual/plating characteristics: **Thin, wide, irregular (not perfectly round) patty with heavily browned, crisp, lacy dark-edged crust from the Maillard reaction** — the visual opposite of the classic burger's clean round shape and softer sear; typically stacked two or three thin patties high rather than one thick patty; minimal toppings (cheese, onion, pickle, a simple sauce) compared to a loaded classic burger.
- Confidence: MEDIUM-HIGH for the technique/visual description; MEDIUM for the specific origin story
- Sources: [Smashburger — What Is A Smash Burger](https://smashburger.com/news/what-is-a-smash-burger); [Daily Meal — Origins of the First Smash Burger](https://www.thedailymeal.com/1313846/first-smash-burger-origins/); [Tasting Table](https://www.tastingtable.com/1529315/smash-burgers-regular-comparison/)

##### Dish: Turkey burger
- Category: Everyday, often health-motivated substitution
- Cuisine lineage: Native-American-tradition (modern health-food-driven variant)
- Regional form variation: Not confirmed by available sources this pass — presumed national, flag for review
- Serving format: Sandwich/handheld, same bun/topping format as a classic burger
- Primary protein: Ground turkey (leaner, requires more added moisture/fat than beef to avoid drying out)
- Visual/plating characteristics: Patty is typically paler gray-brown (not the deep reddish-brown of a beef patty) both raw and cooked, and has a less pronounced sear/crust than beef; often visibly thinner or drier-looking than a beef patty unless a fat-added recipe is used.
- Confidence: LOW-MEDIUM — not deeply sourced this pass, description inferred from general cooking knowledge of ground turkey rather than a dedicated source; flag for review

##### Dish: Fried chicken sandwich
- Category: Everyday, currently a major national trend/category in its own right
- Cuisine lineage: Southern-American-tradition, with the "Nashville hot" sub-style specifically Tennessee-originated
- Regional form variation: Form-changing for the specific "Nashville hot" heat-forward variant — see `us-south.md` (not yet created) for full Nashville-specific depth. Mainstream (non-Nashville-hot) fried chicken sandwich is nationally uniform.
- Serving format: Sandwich/handheld (distinct entry from plated fried chicken, see below — same protein, genuinely different visual/consumption context)
- Primary protein: Breaded, deep-fried chicken breast or thigh cutlet
- Primary starch/accompaniment: Soft bun, often brioche-style; pickle chips are a near-universal topping
- Visual/plating characteristics: Thick, craggy, deeply golden-brown breading with visible texture (not a smooth, thin coating); for Nashville hot specifically, a **cayenne-oil paste brushed onto the crust immediately after frying** gives the crust a distinctive reddish-orange sheen not present on mainstream fried chicken — the heat is baked into the crust itself, visually and texturally, not just added as a liquid sauce on top. [CONFIDENCE: HIGH for Nashville hot's crust-application method — direct, detailed sourcing]
- Confidence: HIGH for the national trend and Nashville hot's specific technique; the underlying billion-dollar-category framing is well-corroborated
- Sources: [Crimson Coward — History of Nashville Hot Chicken](https://www.crimsoncoward.com/blog/history-of-nashville-hot-chicken/); [CNBC — How Nashville Hot Chicken Became So Big](https://www.cnbc.com/2023/11/29/how-nashville-hot-chicken-became-so-big.html); [Wikipedia: Prince's Hot Chicken Shack](https://en.wikipedia.org/wiki/Prince%27s_Hot_Chicken_Shack)

##### Dish: Fried chicken — plated
- Category: Everyday to special-occasion (a classic Sunday/family-meal dish)
- Cuisine lineage: Southern-American-tradition
- Regional form variation: Prevalence — most strongly associated with and most elaborated in the South, but eaten nationally
- Serving format: Plate (bone-in pieces, not a sandwich) — sibling entry to the fried chicken sandwich above, sharing a protein tradition but a completely different visual/serving context
- Visual/plating characteristics: Bone-in pieces (breast, thigh, drumstick, wing) with the same craggy deep-golden-brown breading described above; served family-style on a platter or plated individually with sides (mashed potatoes, biscuits, greens) rather than in a bun.
- Confidence: MEDIUM — general framing well-supported, plated-specific visual detail not independently sourced this pass beyond the shared breading description above; flag for review

#### Hot dog

##### Dish: Hot dog (national index entry — form-changing, see regional files for full depth)
- Category: Everyday, strongly occasion-linked (cookouts, ballgames, casual/on-the-go)
- Cuisine lineage: Native-American-tradition (German sausage origin, American development)
- Regional form variation: **Form-changing — genuinely one of the clearest cases in the whole list.** A plain hot dog with no regional identity is itself a reasonable national default, but several named, visually distinct regional styles exist and should not be interchanged:
  - **Chicago-style** (→ `us-midwest.md`): steamed all-beef natural-casing dog in a poppy-seed bun, topped with yellow mustard, neon-green sweet pickle relish, chopped onion, tomato wedges, a dill pickle spear, spicy pickled sport peppers, and celery salt — **never ketchup**. [CONFIDENCE: HIGH]
  - **Coney dog** (→ `us-midwest.md`, Michigan specifically): despite the name, Michigan-originated, not NYC; topped with beanless all-meat chili spiced with cumin and celery seed, diced white onion, and yellow mustard. [CONFIDENCE: HIGH]
  - **Sonoran hot dog** (→ `us-desert-southwest.md`, Tucson AZ specifically): Mexican-origin (Sonora), bacon-wrapped in most versions, topped with pinto beans, chopped tomato and onion, salsa verde, mustard, and a thin mayonnaise drizzle. [CONFIDENCE: HIGH]
  - **New York cart dog** (→ `us-northeast.md`): boiled in spiced brine in a street-cart's steel tank ("dirty water dog"), topped with sauerkraut, spicy brown mustard, and a tomato-based onion sauce. [CONFIDENCE: HIGH]
- Serving format: Sandwich/handheld only
- Confidence: HIGH overall — multiple independent, detailed, consistent sources per style
- Sources: [Taste of Home — 16 Regional Hot Dog Styles](https://www.tasteofhome.com/collection/regional-hot-dog-styles/); [America's Test Kitchen — Guide to Regional Hot Dogs](https://www.americastestkitchen.com/guides/7261-a-guide-to-all-american-regional-hot-dogs); [Wikipedia: Hot dog variations](https://en.wikipedia.org/wiki/Hot_dog_variations)

#### BBQ

##### Dish: BBQ platter (national index entry — form-changing, see regional files for full depth)
- Category: Everyday to special-occasion (cookouts, dedicated BBQ restaurants)
- Cuisine lineage: Native-American-tradition (Southern-rooted, with real regional divergence)
- Regional form variation: **Form-changing.** Four dominant, well-documented regional styles:
  - **Texas** (→ `us-texas.md`): beef-focused, especially brisket; dry rub, minimal-to-no sauce; Central Texas specifically uses only salt, pepper, and post-oak smoke. [CONFIDENCE: HIGH]
  - **Carolina** (→ `us-south.md`): pork-focused; North Carolina uses a tangy vinegar-based sauce, South Carolina a distinctive mustard-based "Carolina Gold" sauce. [CONFIDENCE: HIGH]
  - **Memphis** (→ `us-south.md`): pork shoulder/butt/ribs, dry rub, pulled pork sandwiches as the dominant menu item. [CONFIDENCE: HIGH]
  - **Kansas City** (→ `us-midwest.md`): thick, sweet, tomato- and molasses-based sauce; burnt ends are the signature item; broadest range of meats (beef, pork, poultry). [CONFIDENCE: HIGH]
- Serving format: Plate (platter), though pulled-pork/brisket sandwiches are a common secondary format within several of these styles
- Visual/plating characteristics: Sauce presence/color is the single biggest visual differentiator between styles — Texas is visually dry/bark-focused (dark, crusted "bark" exterior visible, little to no sauce sheen), Carolina is thin and glossy (vinegar-clear or mustard-yellow, not thick), Kansas City is thick, dark red-brown, and glossy/clinging. Getting the sauce color/consistency wrong for a named region is a clear, checkable authenticity error.
- Confidence: HIGH
- Sources: [Sonny's BBQ — Regional BBQ Styles](https://www.sonnysbbq.com/from-the-smoker/regional-bbq-styles); [Tasting Table — Styles of Regional BBQ](https://www.tastingtable.com/695400/styles-american-bbq-barbecue/)

#### Pizza

##### Dish: Pizza (national index entry — form-changing, see regional files for full depth)
- Category: Everyday
- Cuisine lineage: Italian-American
- Regional form variation: **Form-changing, and the clearest case in this entire file — see SCHEMA NOTE above.** Named, visually distinct styles:
  - **New York-style** (→ `us-northeast.md`): large, thin, hand-tossed slice, crisp exterior/chewy interior, sturdy enough to hold toppings but soft enough to fold in half lengthwise. [CONFIDENCE: HIGH]
  - **Chicago deep-dish** (→ `us-midwest.md`): baked in a deep round pan, crust up to ~2 inches high; cheese (often Wisconsin brick cheese, not mozzarella) layered *under* the sauce, reversing the usual order, specifically to prevent a soggy crust during the longer bake. [CONFIDENCE: HIGH]
  - **Detroit-style** (→ `us-midwest.md`): baked in a shallow rectangular pan, cut into squares; airier, more focaccia-like crumb from a wetter dough; brick cheese pushed to the pan's edges caramelizes into a distinctive dark, crisp "frico" border; cheese under sauce, same logic as Chicago. [CONFIDENCE: HIGH]
  - **New Haven apizza** (→ `us-northeast.md`): thin, often oblong, coal-fired crust with characteristic charring; pecorino rather than mozzarella; limited melting cheese overall. [CONFIDENCE: HIGH]
  - **St. Louis-style** (→ `us-midwest.md`): cracker-thin, yeast-free crust; Provel (a distinctive processed cheese blend, not mozzarella); slightly sweet tomato sauce; cut into squares/rectangles, never wedges. [CONFIDENCE: HIGH]
- Serving format: Slice (handheld) or whole pie (plate/shared), depending on style and venue — deep-dish and Detroit-style are cut and eaten with a fork more often than folded by hand, unlike NY-style.
- Default when unspecified: NY-style is the most broadly recognized national default if a brief names no location — an editorial judgment call, not a sourced claim; flag for review.
- Confidence: HIGH across all five styles — multiple independent, detailed, mutually consistent sources
- Sources: [Food Republic — Chicago vs Detroit](https://www.foodrepublic.com/1465002/difference-between-chicago-detroit-deep-dish-pizza/); [Wikipedia: New Haven-style pizza](https://en.wikipedia.org/wiki/New_Haven-style_pizza); [Atlas Obscura — St. Louis-Style Pizza](https://www.atlasobscura.com/foods/st-louis-style-pizza-missouri-provel); [Two Boots — What Defines New York Style Pizza](https://twoboots.com/what-defines-new-york-style-pizza/)

#### Mexican-American

##### Dish: Tacos (national index entry — form-changing, see regional files for full depth)
- Category: Everyday
- Cuisine lineage: Mexican-American, with genuinely distinct sub-traditions
- Regional form variation: **Form-changing.**
  - **Tex-Mex** (→ `us-texas.md`): larger flour tortilla or hard shell, yellow cheese, sour cream, iceberg lettuce (all rare in Mexico itself), ground beef or skirt steak seasoned heavily with cumin. [CONFIDENCE: HIGH]
  - **Baja-style fish taco** (→ `us-west-coast.md`): soft corn tortilla, battered (often beer-battered) and fried or grilled white fish, shredded cabbage, crema or mayo-based sauce, lime — a lighter, seafood-forward, coastal style distinct from Tex-Mex's beef/dairy-heavy profile. [CONFIDENCE: HIGH]
  - **Birria tacos**: slow-braised meat (goat traditionally, now often beef) in a red guajillo/ancho chile broth, folded into a cheese-stuffed corn tortilla and griddled crispy, served with consomé for dipping — a recent, fast-spreading national trend rather than tied to one fixed US region yet; flag as prevalence/trend rather than assigning a single regional home. [CONFIDENCE: MEDIUM — trend is well-documented but not yet regionally settled in the US the way Tex-Mex/Baja are]
- Serving format: Handheld
- Confidence: HIGH for Tex-Mex and Baja; MEDIUM for birria's US regional placement
- Sources: [Cookwisdom — Baja vs Tex-Mex](https://cookwisdom.blog/baja-mexican-food-vs-tex-mex); [Wikipedia: Birria](https://en.wikipedia.org/wiki/Birria)

##### Dish: Enchiladas (national index entry — form-changing, see regional files for full depth)
- Category: Everyday to special-occasion (New Mexico's enchilada is arguably that state's single most foundational dish, on par with the fajita's role in Tex-Mex)
- Cuisine lineage: Mexican-American, with two genuinely distinct, independently-evolved US sub-traditions that share a name and a Mexican ancestor but not a common US form
- Regional form variation: **Form-changing — one of the clearest cases in this file, on the same order as pizza and hot dogs.**
  - **New Mexican** (→ `us-new-mexico.md`, now confirmed on the 13-file regional list per the 2026-09-24 human decision — see FILE ROLE & METHOD above): stacked, not rolled — corn tortillas (often blue corn in northern NM) lightly fried/softened, dipped in red or green chile sauce, layered flat like a stack of pancakes with onion, cheese, and shredded chicken/beef between layers, smothered in more sauce, traditionally crowned with a fried egg. Sauce color is a real cultural fork — green (more southern NM) and red (more northern NM) chile are both legitimate, and ordering both is "Christmas," New Mexico's official state question being literally "Red or Green?" (the only state question of any US state). [CONFIDENCE: HIGH]
  - **Tex-Mex** (→ `us-texas.md`): rolled, not stacked — corn tortillas rolled around a filling (classically yellow cheese and onion, beef also common), lined seam-side-down in a baking dish, covered in a roux-based "chili gravy" (flour-and-fat roux with chili powder and beef broth — not a fresh chile-pod sauce, not tomato-based) reading as a uniform matte reddish-brown, finished with melted shredded yellow cheese (cheddar or cheddar/Jack) on top. [CONFIDENCE: HIGH]
- Serving format: Plate in both traditions — no handheld sibling for either
- Visual/plating characteristics: **Sauce color/consistency and tortilla handling (rolled vs. stacked) are the primary, checkable visual differentiators — the same logic already established for BBQ sauce in this file.** New Mexican red chile: thin, matte, earthy brick-red, made from dried ground chile pods, not a roux. New Mexican green chile: bright yellowish-green, chunky (visible roasted chile flesh, not puréed). "Christmas": both sauces visible on the same plate at once — a distinctive two-tone presentation unique to this style. New Mexican stacking gives a flat, layered, lasagna-like cross-section when cut, topped with a fried egg (no Tex-Mex equivalent). Tex-Mex chili gravy is a single, uniform, glossy reddish-brown sauce blanketing tightly-rolled tortillas under a solid melted-cheese layer — the most "smothered/uniform" look of the two, vs. New Mexican's visibly layered, deconstructed look. These two silhouettes are not interchangeable; depicting one as the other is a real, visible authenticity error. [CONFIDENCE: HIGH]
- Sub-note — Hatch chile: "Hatch chile" is a geographic designation, not just a variety name (sources compare it to Champagne or Vidalia onions) — it refers specifically to New Mexico-pod-type chiles grown in the Hatch Valley of southern NM; peppers from Hatch seed stock grown elsewhere are properly "Hatch-style," not "Hatch," a distinction that has been litigated. A brief specifying "Hatch chile" by name is making a narrower geographic claim than "New Mexico chile" or "green chile" generically. [CONFIDENCE: MEDIUM-HIGH]
- Confidence: HIGH overall — corroborated by the Smithsonian Institution/Folklife Festival, Wikipedia, a dedicated culinary school, New Mexico's official tourism authority, and Texas food journalism (Texas Monthly, Homesick Texan); the blue-corn-harder-to-roll causal detail and the exact "Christmas"-naming origin story are the two specific sub-claims at a lower (MEDIUM) evidentiary tier, flagged individually below.
- Sources: [Smithsonian Folklife Festival — Red or Green?](https://festival.si.edu/blog/red-or-green-the-chile-pepper-and-the-makings-of-new-mexico); [Wikipedia: New Mexican cuisine](https://en.wikipedia.org/wiki/New_Mexican_cuisine); [Wikipedia: New Mexico chile](https://en.wikipedia.org/wiki/New_Mexico_chile); [Santa Fe School of Cooking — Tex-Mex vs New Mexican](https://santafeschoolofcooking.com/the-difference-between-tex-mex-and-new-mexican-cuisine/); [New Mexico True](https://www.newmexico.org/things-to-do/cuisine/iconic-chile/); [Santa Fe New Mexican — coining of "Christmas"](https://www.santafenewmexican.com/news/local_news/longtime-tia-sophias-waitress-remembered-for-coining-christmas-for-red-and-green-chiles/article_930c604c-a13f-11ef-a8e8-870d85f3f4f9.html); [Texas Monthly — Cheese Enchiladas](https://www.texasmonthly.com/food/cheese-enchiladas/); [Homesick Texan — Essence of Tex-Mex](https://www.homesicktexan.com/essence-of-tex-mex/); [Chowhound — Hatch Chiles](https://www.chowhound.com/1660397/why-are-hatch-chiles-grown-in-new-mexico/)

#### Chili

##### Dish: Chili (national index entry — form-changing, see regional files for full depth)
- Category: Everyday to special-occasion (competition/cookoff culture, especially in Texas)
- Cuisine lineage: Native-American-tradition (Texas-rooted, with a genuinely distinct Midwestern offshoot)
- Regional form variation: **Form-changing.**
  - **Texas chili** (→ `us-texas.md`): a standalone stew, beans strictly excluded (disqualifying in most competitions); Texas' official state dish. [CONFIDENCE: HIGH]
  - **Cincinnati chili** (→ `us-midwest.md`): thinner, gravy-like texture, Greek-spiced (cloves, nutmeg, cinnamon), **served over spaghetti** rather than eaten as a stand-alone stew — a completely different visual presentation from Texas chili, not just a flavor variant. Named "ways": 2-way (chili over spaghetti), 3-way (+ shredded cheddar), 4-way (+ beans or onion), 5-way (+ both). [CONFIDENCE: HIGH]
- Serving format: Bowl (Texas) vs. plate-over-pasta (Cincinnati) — this is itself a format difference layered on top of the regional one
- Confidence: HIGH
- Sources: [Tasting Table — Cincinnati vs Texas Chili](https://www.tastingtable.com/1648892/cincinnati-vs-texas-chili-difference/); [Wikipedia: Cincinnati chili](https://en.wikipedia.org/wiki/Cincinnati_chili)

#### Clam chowder

##### Dish: Clam chowder (national index entry — form-changing, see regional file for full depth)
- Category: Everyday to special-occasion (New England seafood-shack staple)
- Cuisine lineage: Native-American-tradition (New England colonial origin)
- Regional form variation: **Form-changing, but both named variants are Northeast-coded** (→ `us-northeast.md` for both):
  - **New England-style**: thick, rich, white/cream-based broth (cream or half-and-half, plus clams, potato, onion, celery, bacon); dates to 1700s New England settlers. [CONFIDENCE: HIGH]
  - **Manhattan-style**: red, tomato-based broth (crushed tomato/purée, celery, carrot, sometimes bell pepper), lighter and more acidic; first appeared in print in 1934, notably later than the New England style. [CONFIDENCE: HIGH]
- Serving format: Bowl/cup, always a soup course
- Confidence: HIGH
- Sources: [Taste of Home — New England vs Manhattan](https://www.tasteofhome.com/article/new-england-vs-manhattan-clam-chowder/); [Fine Dining Lovers](https://www.finedininglovers.com/explore/articles/new-england-clam-chowder-vs-manhattan-clam-chowder)

#### Italian-American plate/sandwich pairs

##### Dish: Chicken Parmesan — plated
- Category: Everyday to special-occasion (red-sauce restaurant staple)
- Cuisine lineage: Italian-American (not a dish found in Italy in this form)
- Regional form variation: None identified — nationally uniform
- Serving format: Plate, with spaghetti or another pasta as the starch
- Visual/plating characteristics: Breaded, fried chicken cutlet topped with tomato sauce and melted/browned mozzarella and grated hard cheese, broiled briefly to finish — same "pizza-on-a-cutlet" layered visual established for Uruguay's milanesa napolitana entry, plated alongside pasta rather than on bread.
- Confidence: HIGH
- Sources: [Wikipedia: Chicken parmesan](https://en.wikipedia.org/wiki/Chicken_parmesan)

##### Dish: Chicken Parm Hero/Sub
- Category: Everyday
- Cuisine lineage: Italian-American
- Regional form variation: None identified — nationally uniform, though the name itself follows the hoagie/hero/sub/grinder regional-naming pattern (see Deli Culture below)
- Serving format: Sandwich — same chicken/sauce/cheese preparation as the plated version above, but on a crusty long roll instead of pasta, broiled to melt the cheese onto the bread
- Visual/plating characteristics: Sauce and cheese visibly soak into/onto the cut roll in a way that doesn't happen on a plate; roll structurally needs to be sturdy (a soft hoagie roll, not a delicate one) to avoid falling apart under the sauce.
- Confidence: HIGH
- Sources: [Tasting Table — Most Iconic Italian-American Sandwiches](https://www.tastingtable.com/2130506/most-iconic-italian-american-sandwiches/)

##### Dish: Spaghetti and Meatballs — plated
- Category: Everyday
- Cuisine lineage: Italian-American — **explicitly not an Italian dish**; sources note it's largely unknown in Italy and is sometimes mocked by Italian chefs/writers as pseudo-Italian. This is a genuinely important authenticity note in the opposite direction from most of this file: the "authentic" version of this dish *is* the Americanized one.
- Regional form variation: None identified — nationally uniform
- Serving format: Plate
- Confidence: HIGH
- Sources: [Wikipedia: Spaghetti and meatballs](https://en.wikipedia.org/wiki/Spaghetti_and_meatballs)

##### Dish: Meatball Sub/Hero
- Category: Everyday
- Cuisine lineage: Italian-American
- Regional form variation: None identified — nationally uniform
- Serving format: Sandwich — meatballs and tomato sauce on a long roll, topped with melted mozzarella, broiled to finish, same visual logic as the chicken parm hero above
- Confidence: HIGH
- Sources: [Sip and Feast — Meatball Parm Hero](https://www.sipandfeast.com/meatball-parm-hero/)

#### American deli culture

##### Dish: BLT
- Category: Everyday
- Cuisine lineage: Native-American-tradition
- Regional form variation: None identified — nationally uniform
- Serving format: Sandwich
- Primary starch/accompaniment: Toasted white or wheat bread (not a specialty bread)
- Confidence: MEDIUM — well-known but not deeply sourced this pass; flag for follow-up

##### Dish: Turkey club sandwich
- Category: Everyday
- Cuisine lineage: Native-American-tradition
- Regional form variation: None identified — nationally uniform
- Serving format: Sandwich, distinctively triple-decker (three bread slices, two fillings layers), usually cut into triangles and held together with toothpicks/frilled picks — this triple-decker structure is the defining visual trait vs. a standard two-slice sandwich.
- Confidence: MEDIUM — structural detail is common knowledge but not independently sourced this pass; flag for follow-up

##### Dish: Pastrami on rye
- Category: Everyday to special-occasion (NYC Jewish deli tradition)
- Cuisine lineage: Jewish-American (Eastern European immigrant origin, NYC-developed)
- Regional form variation: Prevalence/origin-coded — strongly NYC-associated (Sussman Volk, a Lithuanian immigrant, is credited with creating pastrami on rye at his Delancey Street deli in 1888) but sold nationally now; the NYC deli register (see `us-northeast.md`, not yet created) is the most authentic staging context.
- Serving format: Sandwich
- Primary starch/accompaniment: Rye bread (see Bread Reference above)
- Visual/plating characteristics: Meat is piled extremely high — often several inches thick — which is a genuine, documented NYC deli visual convention, not exaggeration; mustard is the traditional condiment, not mayonnaise.
- Confidence: HIGH for the origin story and NYC association
- Sources: [Tasting Table — How Pastrami Took Over New York City](https://www.tastingtable.com/1634988/why-pastrami-is-associated-with-new-york/); [Wikipedia: Pastrami on rye](https://en.wikipedia.org/wiki/Pastrami_on_rye)

##### Dish: Reuben sandwich
- Category: Everyday to special-occasion
- Cuisine lineage: Jewish-American deli tradition (though not strictly kosher, since it mixes meat and cheese)
- Regional form variation: Prevalence/origin-coded — credited to Arnold Reuben, circa 1914, NYC; the exact origin is contested between at least two named claimants per some sources, worth flagging as a LOW-confidence specific-founder claim even though the dish itself is HIGH confidence.
- Serving format: Sandwich
- Primary protein/composition: Hot corned beef, melted Swiss cheese, sauerkraut, on rye bread, typically grilled/pressed
- Confidence: HIGH for composition; LOW for the exact origin story specifics
- Sources: [National Geographic — Story Behind the Reuben Sandwich](https://www.nationalgeographic.com/travel/article/what-is-reuben-sandwich-the-story-behind-the-iconic-deli-staple); [Wikipedia: Reuben sandwich](https://en.wikipedia.org/wiki/Reuben_sandwich)

##### Naming norm: Hoagie / Sub / Hero / Grinder
- **This is a naming-regionalism, not a form-changing variation** — the sandwich itself (long roll, deli meats/cheeses, lettuce/tomato/onion, oil and vinegar or condiments) is largely the same; what changes by region is *what people call it*, which still matters for scene/dialogue authenticity even though it doesn't change the plating:
  - **Hoagie** — Philadelphia specifically. [CONFIDENCE: HIGH]
  - **Hero** — New York City specifically. [CONFIDENCE: HIGH]
  - **Grinder** — Boston/New England generally. [CONFIDENCE: HIGH]
  - **Sub** — the default term across most of the rest of the US. [CONFIDENCE: HIGH]
  - **Wedge** — a minor, localized term just north of NYC. [CONFIDENCE: LOW — single mention]
- Sources: [The Kitchn — Hoagies, Heroes, Subs, and Grinders](https://www.thekitchn.com/hoagies-heroes-subs-and-grinders-whats-the-deal-with-these-sandwich-names-222944); [Hormel Foodservice](https://www.hormelfoodservice.com/2022/11/how-did-the-hoagie-hero-grinder-and-sub-get-their-names/)

#### City/region-specific sandwiches (index entries only — full depth deferred to home regional file)

- **Philly cheesesteak** (→ `us-mid-atlantic.md`): thinly sliced ribeye, molten cheese (provolone, American, or Cheez Whiz — all three are legitimate, not just Whiz as popular caricature suggests), griddled onions, on a hoagie roll. [CONFIDENCE: HIGH] [SOURCE: [Smithsonian — History of Five Uniquely American Sandwiches](https://www.smithsonianmag.com/history/history-five-uniquely-american-sandwiches-180967078/)]
- **Po'boy** (→ `us-gulf-south.md`): New Orleans-origin (1929, credited to the Martin brothers during a streetcar workers' strike), served on airy Louisiana French bread, filled with roast beef or fried shrimp/oysters/catfish. [CONFIDENCE: HIGH] [SOURCE: [Explore Louisiana — Po'Boys](https://www.explorelouisiana.com/articles/poboys-louisianas-most-famous-sandwich)]
- **Lobster roll** (→ `us-northeast.md`): two real sub-styles worth distinguishing — **Connecticut-style** (warm lobster meat, melted butter) and **Maine-style** (chilled lobster meat, lightly dressed with mayonnaise) — these are not interchangeable and should not be flattened into one generic "lobster roll." [CONFIDENCE: HIGH] [SOURCE: [Food Republic — How Lobster Rolls Became a New England Staple](https://www.foodrepublic.com/2060819/how-lobster-rolls-new-england-staple-dish-history/)]
- **Cuban sandwich** (→ Florida, file TBD — see FILE ROLE note on Florida above): despite the name, developed in Tampa, not Havana; ham, roasted pork, Swiss cheese, pickles, mustard, sometimes salami, on Cuban bread, typically pressed. [CONFIDENCE: HIGH]
- **Chicago Italian beef** (→ `us-midwest.md`): thin-sliced seasoned roast beef simmered in au jus, on an Italian-style roll, often dipped in the jus before serving. [CONFIDENCE: HIGH] [SOURCE: [Choose Chicago — Italian Beef](https://www.choosechicago.com/blog/dining/italian-beef-chicago/)]

#### Greek-American

##### Dish: Gyro
- Category: Everyday
- Cuisine lineage: Greek-American (döner kebab-derived, Ottoman/Turkish ancestry acknowledged directly by sources)
- Regional form variation: Prevalence/origin-coded — mass-produced gyro meat in the US traces to Chicago in the early 1970s (multiple competing claimants, all Chicago-area, all Greek immigrants), where traditional pork was swapped for a beef-lamb blend to suit American tastes; now sold nationally via Greek festivals and Greek-American restaurants, not confined to Chicago today.
- Serving format: Sandwich/handheld
- Primary starch/accompaniment: Pita bread
- Side dishes/condiments: Tzatziki sauce, tomato, onion
- Visual/plating characteristics: Meat is shaved in thin ribbons off a visible vertical rotating spit (when prepared fresh/traditionally) — a distinct visual from any other sandwich meat prep in this list.
- Confidence: MEDIUM-HIGH for the Chicago origin; the exact "first" claimant is contested among several named restaurants, similar to the chivito situation in Uruguay's file — flag as unresolved
- Sources: [WTTW Chicago — Gyros' Spinning American Soul](https://www.wttw.com/playlist/2025/06/03/2025/gyros-in-chicago); [Wikipedia: Gyros](https://en.wikipedia.org/wiki/Gyros)

#### Chinese-American

##### Dish: Chinese-American takeout staples
- Category: Everyday
- Cuisine lineage: Chinese-American — **explicitly and importantly its own distinct culinary tradition**, not a lower-fidelity version of cuisine in China; conflating the two would be the actual authenticity error here, the same caution flagged for spaghetti and meatballs above.
- Regional form variation: None identified this pass — mainstream American-Chinese takeout reads as fairly nationally uniform; not independently stress-tested regionally, flag for review
- Serving format: Takeout container (the format itself is part of the authentic presentation — folded white paper container or plastic container, plastic fork or chopsticks provided separately) or plated at a sit-down restaurant
- Most-ordered dishes, per order-volume data: General Tso's chicken (ranked #1), crab rangoon, egg roll, sesame chicken, wonton soup, fried rice, sweet and sour chicken, orange chicken, hot and sour soup, potsticker/dumpling. [CONFIDENCE: MEDIUM — single ordering-data source (GrubHub), not independently corroborated by a second ranking, though the individual dishes themselves are corroborated as broadly popular across multiple sources]
- Visual/plating characteristics: Orange/General Tso's chicken — battered, fried chicken pieces coated in a glossy, thick, caramelized orange-chili sauce (bright orange-red, not a thin glaze); fried rice — visibly separate grains (not mushy/clumped), flecked with egg, scallion, and small diced vegetables/protein; egg rolls — deep-fried to a uniform dark golden-brown, cylindrical, with a crackling (not soft) wrapper.
- Confidence: MEDIUM-HIGH for the dish list; MEDIUM for the specific visual details, which are inferred from preparation description rather than a dedicated visual source
- Sources: [NBC News — Data Reveals Most Popular Chinese Dish in America](https://www.nbcnews.com/news/amp/ncna299576); [Wikipedia: Orange chicken](https://en.wikipedia.org/wiki/Orange_chicken)

#### Indian-American

##### Dish: Butter chicken / Chicken tikka masala (the two-headed "gateway curry")
- Category: Everyday to special-occasion (the default order for a first-time or casual Indian-restaurant visit)
- Cuisine lineage: **Indian-American, with an important wrinkle — chicken tikka masala's own origin is itself disputed and possibly not Indian at all.** Multiple sources credit its invention to Ali Ahmed Aslam, a Pakistani-Scottish chef, at the Shish Mahal restaurant in Glasgow, Scotland, in the 1970s (he reportedly improvised a tomato-and-cream sauce from canned tomato soup and spices after a customer complained his chicken was too dry); it was declared "Britain's true national dish" by UK Foreign Secretary Robin Cook in 2001. A competing claim (from the Moti Mahal restaurant family) places a similar dish in Delhi as early as 1947, derived from butter chicken (murgh makhani), which is more confidently Delhi-originated, circa the 1950s. On American menus this distinction is invisible — both dishes are sold side by side as ordinary "Indian food." [CONFIDENCE: HIGH for the dispute existing and being genuinely unresolved; MEDIUM for which specific account is correct] [SOURCE: [Wikipedia: Chicken tikka masala](https://en.wikipedia.org/wiki/Chicken_tikka_masala); [CNN — Inventor of the UK's "true national dish" dies at 77](https://www.cnn.com/travel/article/ali-ahmed-aslam-chicken-tikka-masala-glasgow); [Britannica: Chicken tikka masala](https://www.britannica.com/topic/chicken-tikka-masala)]
- Regional form variation: Not form-changing — nationally uniform preparation; see Regional prevalence note below for restaurant-density variation
- Serving format: Plate/bowl — a curry course, always with rice and/or naan, never handheld
- Primary protein: Butter chicken — tandoor-roasted, yogurt-marinated chicken in a tomato-butter-cream sauce; chicken tikka masala — near-identical on many US menus, often coded slightly spicier/more orange-red
- Visual/plating characteristics: Thick, glossy, orange-to-brick-red sauce with visible cream/butter sheen; chunky (not shredded) chicken pieces; served in a metal or ceramic bowl/karahi with basmati rice and naan alongside. A claim that US versions run creamier/sweeter than versions in India is plausible but only LOW-MEDIUM sourced (food-blog tier, not a rigorous comparison) — flag for review. [SOURCE: [Savory Spice — Behind the Seasoning: Butter Chicken](https://www.savoryspiceshop.com/blogs/news/behind-the-seasoning-butter-chicken)]
- Confidence: HIGH that these are the most iconic/ordered "curry" items on US Indian menus; MEDIUM-LOW on the specific creaminess/sweetness delta
- Sources: [Tasting Table — 15 Popular Dishes At Indian Restaurants In The US](https://www.tastingtable.com/1591939/most-popular-indian-dishes-us/); [Wikipedia: Chicken tikka masala](https://en.wikipedia.org/wiki/Chicken_tikka_masala); [Mashed — The Untold Truth Of Chicken Tikka Masala](https://www.mashed.com/818775/the-untold-truth-of-chicken-tikka-masala/)

##### Dish: Naan (plain and garlic naan)
- Category: Everyday — near-mandatory add-on to any Indian meal in the US
- Cuisine lineage: Indian-American, with a genuinely important authenticity inversion (the mirror image of the Chinese-American and spaghetti-and-meatballs framing elsewhere in this file): **in India, naan is a restaurant/special-occasion bread**, requiring a tandoor most households don't have; the actual everyday staple is whole-wheat roti/chapati. In the US, naan (especially garlic naan) is the default, near-universal restaurant bread, while roti/chapati is comparatively rare on US menus. [CONFIDENCE: MEDIUM — consistent across several food-explainer sources, but no single heavyweight institutional citation found] [SOURCE: [Britannica: Naan](https://www.britannica.com/topic/naan); [Flavor of India — What Is Naan?](https://flavorofindia.com/what-is-naan-bread/)]
- Regional form variation: None identified — nationally uniform
- Serving format: Shared table bread, torn by hand, used to scoop curry
- Visual/plating characteristics: Plain naan — teardrop-shaped, pillowy, charred blistered spots from the tandoor wall, brushed with ghee. Garlic naan — same base, visibly flecked with chopped garlic and cilantro, glossier from butter. Served warm, folded/stacked in a small basket or bread plate.
- Confidence: HIGH for the visual description and near-mandatory-order status; MEDIUM for the India-vs-US staple-status inversion
- Sources: [Tasting Table — 15 Popular Dishes At Indian Restaurants In The US](https://www.tastingtable.com/1591939/most-popular-indian-dishes-us/)

##### Dish: Samosas
- Category: Everyday (appetizer/starter)
- Cuisine lineage: Indian-American, though the samosa has pre-Indian Central Asian/Middle Eastern ancestry — not a point of confusion on US menus
- Regional form variation: None identified — nationally uniform
- Serving format: Plate (appetizer, always shared, never a main)
- Primary composition: Deep-fried pastry triangle filled with spiced potato and pea (vegetarian is the default/most common on US menus)
- Visual/plating characteristics: Triangular, deep-fried golden-brown, blistered, flaky-crisp exterior; pale yellow-beige spiced potato-pea filling visible when cut. Almost always served with two dipping sauces — dark tamarind chutney and bright green cilantro-mint chutney.
- Confidence: HIGH
- Sources: [Saveur — Classic Indian Samosa](https://www.saveur.com/article/Recipes/Classic-Indian-Samosa/); [Tasting Table — 15 Popular Dishes At Indian Restaurants In The US](https://www.tastingtable.com/1591939/most-popular-indian-dishes-us/)

##### Dish: Biryani
- Category: Everyday to special-occasion
- Cuisine lineage: Indian-American — real internal regional variation exists inside India (Hyderabadi, Lucknowi, etc.) but is generally flattened into one generic "chicken/vegetable biryani" line item on US menus
- Regional form variation: Not confirmed as form-changing within the US specifically — presumed to read as a single generic form on most US menus; flag for review
- Serving format: Plate/bowl, a rice-forward one-dish meal
- Visual/plating characteristics: Mounded, layered rice — basmati visibly streaked/marbled with saffron or turmeric (patchy yellow-orange next to plain white, not evenly colored, when made with traditional "dum" layering), studded with meat/vegetable pieces, caramelized fried onion, and whole spices (cinnamon stick, cardamom pods, bay leaf) visible on top; garnished with cilantro, sometimes a hard-boiled egg wedge or side of yogurt raita.
- Confidence: MEDIUM — corroborated as a top-ordered dish across multiple sources, but no single authoritative ordering-data source the way the Chinese-American entry has GrubHub data
- Sources: [Wikipedia: Biryani](https://en.wikipedia.org/wiki/Biryani); [Tasting Table — 15 Popular Dishes At Indian Restaurants In The US](https://www.tastingtable.com/1591939/most-popular-indian-dishes-us/)

##### Regional prevalence note — Indian-American (prevalence-only, no regional-file pointer needed)
Indian restaurants and Indian-American population concentrate measurably by state/metro rather than spreading evenly — the dish forms don't change, but how "expected" a scene featuring Indian food reads does, by location:
- Indian restaurants concentrate most heavily in California (~17% of a sampled national total), Texas (~11%), and New York (~8%). [CONFIDENCE: MEDIUM — single restaurant-database analysis] [SOURCE: [American Bazaar](https://americanbazaaronline.com/2023/05/24/indian-restaurants-among-most-underrepresented-asian-cuisines-in-us-453675/)]
- New Jersey has the highest *proportional* Indian-origin population of any state (~4.6%); Jersey City's "India Square" is described as the highest concentration of Asian Indians in the Western Hemisphere, and the wider NYC metro contains at least 24 distinct "Little India" enclaves. [CONFIDENCE: HIGH] [SOURCE: [Wikipedia: India Square](https://en.wikipedia.org/wiki/India_Square); [Wikipedia: Indians in the New York metropolitan area](https://en.wikipedia.org/wiki/Indians_in_the_New_York_metropolitan_area)]
- The five states with the largest Indian-American populations overall: California, New York, Texas, New Jersey, Washington. [CONFIDENCE: MEDIUM] [SOURCE: [NRI to USA](https://www.nritousa.com/indian-population-in-usa)]
- Practical implication: an Indian food scene reads as most "expected" in a coastal-metro, NJ/NY-corridor, or major-Texas-city setting, and slightly more notable/less default in a small-town Midwest or rural-South setting — though nothing found suggests it's implausible anywhere, only less concentrated.

#### Sushi/Japanese-American

##### Dish: California roll — the American-invented anchor dish
- Category: Everyday (the default, low-risk order for a first-time/casual sushi diner)
- Cuisine lineage: **The clearest case in this cuisine group of an authentic American invention, not a lower-fidelity copy of Japanese cuisine** — directly parallel to spaghetti-and-meatballs elsewhere in this file. It does not exist in any traditional Japanese repertoire being imperfectly replicated; the invented version *is* the authentic form for an American context.
- Origin details: Most commonly credited to chef Ichiro Mashita at Tokyo Kaikan restaurant, Little Tokyo, Los Angeles, late 1960s/1970s — substituting avocado for tuna (mimicking toro's fattiness/texture) and adding cooked crab to sidestep raw-fish squeamishness. A competing, well-documented claim credits Vancouver chef Hidekazu Tojo with independently inventing an inside-out version in the early 1970s specifically to hide the nori that American/Canadian diners were peeling off. Both exact inventor and city are genuinely disputed — treat as unresolved, the same way this file already handles the gyro and Reuben origin disputes. [CONFIDENCE: HIGH that it's a late-1960s/70s North American invention designed to Americanize sushi; LOW-MEDIUM on the specific originator] [SOURCE: [Wikipedia: California roll](https://en.wikipedia.org/wiki/California_roll); [Today.com](https://www.today.com/food/news/california-roll-rcna154759); [Tasting Table](https://www.tastingtable.com/1814558/who-invented-california-roll-sushi-history/)]
- Regional form variation: None identified — nationally uniform, sold identically coast to coast, including grocery stores
- Serving format: Plate (sushi platter/tray), typically cut into 6-8 pieces
- Visual/plating characteristics: **Inside-out roll (uramaki)** — rice forms the visible outer surface (often coated in roe or sesame seeds), nori wrapped invisibly on the inside, reversing traditional Japanese maki construction. Cross-section shows pale green-white avocado, pink-white crab, and pale green cucumber in distinct bands. Often finished with orange-pink "spicy mayo" drizzle or orange tobiko for a bright, photogenic contrast against the white rice.
- Confidence: HIGH for the structural description and mainstreaming role; MEDIUM for the exact invention story
- Sources: [Wikipedia: California roll](https://en.wikipedia.org/wiki/California_roll); [History.com](https://www.history.com/articles/sushi-america-first-restaurant-california-rolls); [Britannica: California roll](https://www.britannica.com/topic/California-roll)

##### Dish/context: Everyday "strip-mall" and grocery-store sushi (vs. omakase)
- Category: Everyday — a context/format note as much as a dish entry, since it materially changes what a plausible "American sushi" scene looks like
- Cuisine lineage: Japanese-American, but a distinct, casual register from high-end Japanese dining — the two should not be visually conflated
- Regional form variation: None identified — both the casual-restaurant and grocery-store formats are nationally ubiquitous
- Serving format: Plate/tray (dine-in) or clear plastic clamshell (takeout/grocery)
- Visual/plating characteristics: Casual/strip-mall sushi restaurants and grocery-store sushi counters are ubiquitous and visually distinct from omakase — commonly anchor/secondary tenants in ordinary strip malls, menu dominated by cooked-and-invented rolls (California, spicy tuna, rainbow, dragon) rather than nigiri/sashimi-forward presentation. Prepackaged supermarket sushi became widespread from the mid-1980s (Advanced Fresh Concepts, founded 1986, credited with pioneering nationwide distribution) and is sold in clear plastic clamshells, pre-cut, refrigerated, with a small packet of soy sauce/wasabi/pickled ginger — the visual and contextual opposite of an omakase tasting-menu presentation (minimal decoration, fish-forward). A "casual/everyday" sushi brief should reference this register, not omakase.
- Confidence: HIGH for the ubiquity/casual-vs-omakase distinction; MEDIUM for the specific 1986/Advanced Fresh Concepts detail (single source)
- Sources: [TASTE — How America Warmed Up to Cold Grocery-Store Sushi](https://tastecooking.com/america-warmed-cold-grocery-store-sushi/); [History.com](https://www.history.com/articles/sushi-america-first-restaurant-california-rolls); [Smithsonian — Sushi Collection](https://americanhistory.si.edu/collections/object-groups/sushi-collection)

#### Thai-American

##### Dish: Pad Thai
- Category: Everyday — the default, most commonly ordered Thai dish in the US
- Cuisine lineage: Thai-American — **not an ancient or traditional Thai dish**; created and deliberately promoted by the Thai government in the 1930s-40s under PM Plaek Phibunsongkhram as a nation-building/rice-shortage campaign, with a standardized recipe distributed to street vendors nationwide. [CONFIDENCE: HIGH] [SOURCE: [Smithsonian Magazine](https://www.smithsonianmag.com/travel/the-surprising-history-of-pad-thai-180984625/); [Mental Floss](https://www.mentalfloss.com/article/650530/pad-thai-food-history)]
- Popularity data: Grubhub's "2022 Delivered" order-volume report ranked pad thai the **#4 most-delivered dish in the entire US that year across all cuisines** — behind only burritos, cheeseburgers, and cheese pizza, ahead of chicken quesadillas, California rolls, and chicken tikka masala. [CONFIDENCE: HIGH — large-scale order-volume data, not independently cross-checked against a second platform] [SOURCE: [The Takeout](https://www.thetakeout.com/grubhub-top-orders-most-delivered-foods-of-2022-1849894763/)]
- Regional form variation: None identified — nationally uniform; see prevalence note below
- Serving format: Plate — stir-fried noodle entrée, not a soup or curry
- Primary composition: Flat rice noodles, egg, protein (chicken/shrimp/tofu are standard US choices), bean sprouts, scallion, sweet-sour-salty sauce
- Visual/plating characteristics: Warm brownish-orange to reddish-orange noodles; garnished with a lime wedge, crushed peanuts on top, and a small pile of raw bean sprouts on the side rather than fully mixed in. **Sourced Americanization detail**: mainstream US pad thai often uses ketchup in place of or alongside traditional tamarind paste, producing a more saturated red-orange color and simpler sweetness than the more sour-forward, less-red traditional tamarind-and-palm-sugar version — directly analogous to the spaghetti-and-meatballs/Chinese-American framing elsewhere in this file, though here it's a documented deviation rather than a wholesale invention. [CONFIDENCE: MEDIUM — corroborated across multiple food-writing sources, no single high-authority source found this pass]
- Confidence: HIGH for ordering prominence and government-campaign origin; MEDIUM for the ketchup/color detail
- Sources: [Smithsonian Magazine](https://www.smithsonianmag.com/travel/the-surprising-history-of-pad-thai-180984625/); [The Takeout](https://www.thetakeout.com/grubhub-top-orders-most-delivered-foods-of-2022-1849894763/); [Mental Floss](https://www.mentalfloss.com/article/650530/pad-thai-food-history)

##### Regional prevalence note — Thai-American (prevalence-only, no regional-file pointer needed)
- Thai cuisine is frequently cited as one of the most popular Asian cuisines in the US and specifically associated with **on-premise (sit-down) dining**, as opposed to Chinese/Mexican food's stronger takeout association. [CONFIDENCE: MEDIUM — corroborated via secondary reporting citing NRA/Pew data; primary NRA study not directly read] [SOURCE: [Restaurant Business Online](https://www.restaurantbusinessonline.com/americans-embracing-global-flavors-menus-study-finds); [Pew Research Center](https://www.pewresearch.org/short-reads/2023/05/23/71-of-asian-restaurants-in-the-u-s-serve-chinese-japanese-or-thai-food/)]
- Los Angeles has the only official city-designated Thai neighborhood in the US ("Thai Town," East Hollywood, designated 1999) and the largest Thai population outside Thailand (~80,000) — the clearest geographic concentration point, making a Thai-food scene read as most "expected" in a Southern California setting specifically. [CONFIDENCE: HIGH] [SOURCE: [USC Libraries — Thai Town](https://libraries.usc.edu/sites/default/files/111022_thai_town_rg.pdf)]
- Outside that LA concentration, no source found suggests Thai food is regionally restricted elsewhere — the national #4 Grubhub ranking implies broad nationwide demand, not a coastal-only phenomenon.

#### Snacks

##### Dish: Potato chips (bagged/packaged)
- Category: Everyday snack — arguably the single most nationally ubiquitous packaged snack food
- Cuisine lineage: Native-American-tradition (contested founding legend — see below)
- Regional form variation: Prevalence-only, with a genuine caveat — the base product is nationally uniform in form, but real regional brand/flavor loyalty exists: **Utz "Chesapeake Old Bay" crab-seasoned chips** (Mid-Atlantic/Maryland-associated); **dill pickle-flavored chips** (sold in the US but sources are explicit this is more a Canadian regional identity marker than an American one — do not caption as a US region's signature); **Zapp's (Louisiana)** Cajun-spiced flavors tied to Gulf South cuisine. This whole sub-bullet set is thinner-sourced (retail/roundup-article level) than the hot dog/BBQ/pizza regional cases and should be flagged MEDIUM, not HIGH. [CONFIDENCE: MEDIUM]
- Serving format: Snack, eaten directly from the bag or decanted into a bowl for a party/gathering — no plated "meal" format
- Serving vessel: The bag itself (shiny foil-laminate, crinkled texture) for casual/on-the-go consumption; a bowl for shared contexts
- Visual/plating characteristics: **Classic/standard chips** are thin, flat-to-slightly-curled, pale golden-yellow, smooth-surfaced, uniform. **Kettle-cooked chips** are visually distinct — thicker, more curled/irregular (batch-fried, not continuous-line), duller matte deeper-golden surface, visible air bubbles/blistering and salt crystals clinging to ridges. Ridged/waffle-cut chips are a third distinct sub-style (thick, deeply corrugated, sturdy for dip). Getting kettle-style texture on a "classic" chip (or vice versa) is a checkable authenticity error.
- Confidence: HIGH for basic ubiquity/format; MEDIUM for regional flavor-variant claims; LOW/contested for the origin legend
- Origin note: The popular "George Crum invented the potato chip at Saratoga Springs in 1853" story is widely repeated, but historians have found no solid evidence for the specific anecdote, and a competing claimant (Catherine Wicks) and an even earlier 1849 reference exist — treat as popular legend, not verified history.
- Sources: [Daily Meal — Regional Potato Chip Brands](https://www.thedailymeal.com/1875228/regional-potato-chip-brands-to-buy/); [Wikipedia: Dill pickle chips](https://en.wikipedia.org/wiki/Dill_pickle_chips); [History.com — Who Invented the Potato Chip?](https://www.history.com/articles/who-invented-potato-chip-saratoga); [JSTOR Daily — The Invented Potato Chip Myth](https://daily.jstor.org/story-invention-potato-chip-myth)

##### Dish: Movie theater popcorn
- Category: Everyday/occasion snack — tied specifically to the cinema-going environment, not a home-food item
- Cuisine lineage: Native-American-tradition
- Regional form variation: None identified — nationally uniform; the meaningful variation here is venue/context, not geography
- Serving format: Snack, sold/eaten exclusively in a concession-stand context — the setting (lit concession counter, dark auditorium) is as diagnostic as the food
- Serving vessel: **A tall, wide-mouthed, red-and-white vertically striped paper/cardboard tub** is the classic, iconic vessel — not a bowl, not solid-color packaging. A plain (non-striped) rectangular box was the pre-1950s norm; modern chains increasingly use novelty/collectible plastic buckets tied to film releases (a real, current, but secondary trend). [CONFIDENCE: HIGH for the striped-tub default]
- Visual/plating characteristics: Loosely, generously overfilled above the rim (not level-filled); kernels visibly glossy/wet from butter or "buttery topping," yellow-tinted sheen; fine white salt specks visible.
- Confidence: HIGH — the striped tub and concession context are well-documented and give one of the most checkable visual authenticity markers in this snack set
- Historical note: Popcorn was actually banned from many respectable theaters in the silent-film/early-talkie era (1910s-late 1920s) as downmarket/messy; theater owners reversed course during the Depression (early-mid 1930s) when popcorn sales kept struggling theaters afloat. [CONFIDENCE: HIGH]
- Sources: [Laughing Squid — History of Popcorn at Movie Theaters](https://laughingsquid.com/history-of-popcorn-at-movie-theaters/); [History.com — How Popcorn Became the Ultimate Movie Snack](https://www.history.com/articles/why-popcorn-is-movie-snack); [TIME — Novelty Popcorn Bucket Took Over Movies in 2024](https://time.com/7177639/novelty-popcorn-buckets-movie-theaters/)

##### Dish: Home popcorn (stovetop/microwave)
- Category: Everyday snack — a distinct visual/contextual sibling to movie theater popcorn, same base food, different serving context
- Cuisine lineage: Native-American-tradition — home popcorn dates to 18th-19th century colonial households, popped in pans/wire baskets, sometimes molasses-sweetened. [CONFIDENCE: MEDIUM]
- Regional form variation: None identified — nationally uniform
- Serving format: Snack, home context
- Serving vessel: A plain household bowl (stovetop) or the **microwave bag itself, torn open and served from** — a flat-bottomed, expanded, printed paper bag, visually distinct from both the movie tub and a stovetop bowl. Microwave popcorn became mass-market from the late 1970s-80s (Pillsbury vending version ~1974, General Mills patent 1981, Act II shelf-stable bag 1984). [CONFIDENCE: HIGH for the timeline]
- Visual/plating characteristics: Similar kernel appearance to theater popcorn but a more matte, less uniformly glossy coating, served in smaller, level-filled, unpiled portions — this bowl-vs-tub, modest-vs-overfilled contrast is the main marker separating "home" from "movie theater" popcorn scenes.
- Confidence: MEDIUM-HIGH for the historical timeline; MEDIUM for the specific visual contrast (partly inferred)
- Sources: [Mashed — Microwave Popcorn vs. Stovetop Popcorn](https://www.mashed.com/1524540/microwave-popcorn-vs-stovetop-popcorn-guide/); [Wikipedia: Pop Secret](https://en.wikipedia.org/wiki/Pop_Secret)

##### Dish: Kettle corn
- Category: Occasion/venue-specific snack — fair, festival, and carnival culture
- Cuisine lineage: Native-American-tradition, explicit European (German/Dutch) immigrant origin
- Regional form variation: Prevalence/venue-coded, not geographically regional — tied to an *event type* (state/county fairs, festivals, carnivals) nationally, not one US region. Roots trace to Pennsylvania Dutch communities in the early 19th century, fell out of common use through most of the 20th century, then had a documented revival at fairs/living-history events starting in the early 21st century. [CONFIDENCE: MEDIUM — consistent but mostly food-blog-tier sourcing]
- Serving format: Snack, sold in large clear plastic bags from a fair/festival vendor stall with a visible kettle as part of the point-of-sale spectacle
- Visual/plating characteristics: Shiny, semi-translucent sugar-glazed coating (sugar cooked into the kernel during popping, not dusted after) giving a light caramel-tinted sheen, distinct from movie/home popcorn's matte butter-salt finish; often mixed with some unpopped/caramelized kernel clusters; sold from large (traditionally copper) kettles visible to the customer.
- Confidence: MEDIUM
- Sources: [Wikipedia: Kettle corn](https://en.wikipedia.org/wiki/Kettle_corn); [Daily Meal — Kettle Corn's Origin Story](https://www.thedailymeal.com/1563492/origin-story-kettle-corn/)

##### Dish: Soft pretzel
- Category: Everyday snack, strongly city/street-vendor and mall-food-court coded
- Cuisine lineage: German/Pennsylvania-Dutch-American — arrived with German-speaking ("Deutsch," anglicized "Dutch") immigrants settling Pennsylvania from the 18th century; the pretzel shape itself is older, tracing to European monastic bread traditions. [CONFIDENCE: HIGH]
- Regional form variation: Prevalence/origin-coded, not fully form-changing — core shape/prep is nationally consistent, but Philadelphia/Pennsylvania has a well-documented specific claim (a street vendor, Daniel Christopher Kleiss, documented selling soft pretzels in Philadelphia as early as the 1820s; German-immigrant bakeries proliferated there through the 1800s). Sold nationally today, but Philadelphia is the most authentic staging context if a brief specifies that city. [CONFIDENCE: HIGH]
- Serving format: Snack/handheld — no plated form
- Serving vessel: Typically none — held directly, or on wax paper from a street cart/mall kiosk
- Visual/plating characteristics: Classic symmetrical twisted-loop shape; glossy, deep golden-brown surface from a baking-soda or lye bath before baking (distinct from a plain baked-bread surface); coarse, unevenly-scattered salt crystals (not fine table salt); soft, dense, chewy interior. Standard dip in the Philadelphia/Mid-Atlantic tradition is yellow mustard.
- Confidence: HIGH
- Sources: [Encyclopedia of Greater Philadelphia — Pretzels](https://philadelphiaencyclopedia.org/essays/pretzels/); [Tasting Table — How the Philly Soft Pretzel Became a Unique Icon](https://www.tastingtable.com/995172/how-the-philly-soft-pretzel-became-a-unique-icon-of-the-city/)

##### Dish: Hard pretzel (bagged)
- Category: Everyday snack — a separate, nationally-distributed packaged category from the soft pretzel above, despite sharing an origin dough
- Cuisine lineage: Native-American-tradition, specifically a **Pennsylvania invention**: legend holds a baker's apprentice over-baked a batch by accident; Julius Sturgis opened the first dedicated pretzel bakery in Lititz, PA in 1861, deliberately developing a harder, lower-moisture, shelf-stable pretzel (soft pretzels stale quickly and don't ship). [CONFIDENCE: HIGH]
- Regional form variation: Prevalence, strongly skewed but not exclusive — roughly 80% of US-made pretzels are still manufactured in Pennsylvania, but the finished product is sold/eaten nationally with no regional restriction. [CONFIDENCE: HIGH]
- Serving format: Snack, eaten from a bag — the genuinely form-changing sibling to the soft pretzel: same dough lineage, completely different visual object
- Serving vessel: Printed plastic bag (grocery-aisle), or a small bowl at a bar
- Visual/plating characteristics: Small, dense, uniformly dark golden-brown, hard and matte-surfaced (not glossy like the soft pretzel), dry brittle cracker-like texture, visible fine salt crystals; typically a smaller, tightly-wound twist, or rods/sticks/nuggets — much smaller and more uniform/mass-produced-looking than the large, irregular, hand-twisted soft pretzel.
- Confidence: HIGH
- Sources: [The Conversation — How the Pretzel Went from Soft to Hard](https://theconversation.com/how-the-pretzel-went-from-soft-to-hard-and-other-little-known-facts-about-one-of-the-worlds-favorite-snacks-95409); [PA Eats — PA Food Icons: Pretzels](https://www.paeats.org/feature/pa-food-icons-pretzels/)

##### Dish: Chips and dip (guacamole; sour-cream-based dip) — snack context
- Category: Everyday/party snack — a **snack-context item, distinct from the meal-context nachos entry** (nachos are a shared restaurant/bar appetizer with melted cheese; chips-and-dip is cold, room-temperature, party/couch food with no melted cheese)
- Cuisine lineage: Mixed — tortilla-chip-and-guacamole is Mexican-American in lineage; potato-chip-and-sour-cream dip ("French onion"/"California dip") is a Native-American-tradition, a 1950s invention
- Regional form variation: None identified — nationally uniform; more an *occasion* item (parties, Super Bowl gatherings, potlucks, movie nights) than a regionally-varying dish
- Serving format: Snack, always shared/communal
- Primary components: Triangular fried corn tortilla chips (shape popularized commercially by Rebecca Webb Carranza, 1940s Los Angeles, reportedly repurposing misshapen tortillas) with mashed-avocado guacamole; or potato/corn chips with a sour-cream-and-dry-onion-soup-mix dip (a Los Angeles home cook's 1954 combination, printed on Lipton soup-mix boxes by 1958 and TV-promoted, becoming "California Dip"). [CONFIDENCE: HIGH for both origin claims]
- Serving vessel: A wide shallow bowl, or a dedicated two-part chip-and-dip tray (a servingware category that emerged alongside this snack's 1950s popularity) — chips arranged around a central dip bowl for hand-to-mouth dipping
- Visual/plating characteristics: Guacamole — pale-to-medium green, visibly chunky (not puréed), often garnished with lime wedge/cilantro/diced tomato. Sour-cream dip — off-white/cream, thick enough to hold a dip-mark, visibly flecked with dried onion. Chips — triangular, pale golden, lightly char-speckled (tortilla) or standard potato-chip appearance.
- Confidence: HIGH for both product-origin stories; MEDIUM for the "no regional variation" claim (asserted from absence of contrary evidence)
- Sources: [Wikipedia: Tortilla chips](https://en.wikipedia.org/wiki/Tortilla_chips); [Wikipedia: French onion dip](https://en.wikipedia.org/wiki/French_onion_dip); [Daily Meal — You Can Thank Lipton for Chips and Dip](https://www.thedailymeal.com/1680744/lipton-invented-chips-and-dip-history/)

##### Dish: Mozzarella sticks
- Category: Everyday snack/appetizer — casual dining and bar-food staple, not home-cooking-first
- Cuisine lineage: **American, despite the Italian-sounding name and cheese** — most likely developed by a Wisconsin cheesemaker (commonly credited to Frank Baker, 1976) as mass-produced mozzarella and practical deep-frying converged — the same "not from the cuisine its name implies" pattern flagged for spaghetti-and-meatballs and Chinese-American takeout elsewhere in this file. [CONFIDENCE: MEDIUM-HIGH — the specific "Frank Baker, 1976" attribution traces to a small cluster of similar articles, not a primary source]
- Regional form variation: None identified — nationally uniform
- Serving format: Snack/appetizer, plated for shared table service (TGI Fridays and Applebee's specifically credited with popularizing it on national chain menus in the 1980s) — no sandwich/handheld sibling
- Primary composition: Mozzarella cut into thick sticks, breaded (often double-breaded, seasoned breadcrumbs or panko), deep-fried
- Serving vessel: A plate or small basket, sticks fanned/rowed, with a separate small ramekin of marinara (occasionally ranch) for dipping
- Visual/plating characteristics: Uniform cylindrical sticks, deep golden-brown, crisp breadcrumb exterior, with a defining **visible "cheese pull"** — molten interior cheese stretches into long strings when broken or bitten rather than breaking cleanly. This stretch effect is the single most diagnostic visual trait.
- Confidence: HIGH for composition/cheese-pull signature; MEDIUM for the exact origin attribution
- Sources: [The Takeout — The Origin of Mozzarella Sticks](https://www.thetakeout.com/1736727/origin-mozzarella-sticks-explained/); [U.S. Dairy — Who Invented Mozzarella Sticks?](https://www.usdairy.com/news-articles/the-long-history-of-the-mozzarella-stick)

##### Dish: Ice cream sundae (soda fountain culture)
- Category: Special-occasion to everyday dessert/snack — strong historical tie to American soda-fountain culture
- Cuisine lineage: Native-American-tradition
- Regional form variation: Contested origin, not form-changing — the dish's physical form is nationally uniform, but its "birthplace" is a genuine multi-town dispute (structurally similar to the gyro/Reuben disputes elsewhere in this file), primarily between **Two Rivers, Wisconsin** (Edward Berner's soda fountain, 1881, working around a "blue law" restricting Sunday soda sales) and **Ithaca, New York** (Chester Platt's soda fountain, 1892, earliest documented print use of "Sunday"/"sundae" as the dessert's name). [CONFIDENCE: HIGH that both claims are real/documented; unresolvable as to which is "first" — treat as an open dispute]
- Serving format: Snack/dessert, always assembled and served on the spot — no packaged/handheld sibling
- Serving vessel: **A tall, footed, tulip-shaped glass ("sundae glass")** is the classic vessel — distinct from a plain bowl or flat plate; serving in an ordinary cereal bowl would read as visually off for a "classic soda fountain" staging. A boat-shaped dish is a secondary, still-authentic vessel for multi-scoop/banana-split-style versions. [CONFIDENCE: MEDIUM — consistent description, but no top-tier source specifically on the glassware]
- Visual/plating characteristics: One or more scoops (vanilla is the traditional base), topped with warm liquid sauce (chocolate or cherry syrup originally), a swirl of whipped cream, and a single stemmed maraschino cherry centered on top — this whipped-cream-plus-single-cherry topping is the single most identifiable, non-negotiable visual signature. Multi-scoop versions show sauce visibly pooling/dripping down the glass.
- Confidence: HIGH for composition/visual signature; MEDIUM for the glass-vessel description; LOW/contested for the specific origin town
- Context note (informational, not a beverage-catalog entry): American soda fountains originated in early-to-mid-1800s pharmacies; Coca-Cola itself was invented by pharmacist John Pemberton and first served at Jacob's Pharmacy's soda fountain in Atlanta in 1886 — meaning the ice-cream-sundae-at-a-soda-fountain scene and Coca-Cola's own origin scene are historically the same venue type (a drugstore soda-fountain counter), useful staging context even though Coca-Cola itself stays outside this file's dish catalog. [CONFIDENCE: HIGH]
- Sources: [Wikipedia: Sundae](https://en.wikipedia.org/wiki/Sundae); [Cornell Alumni Magazine — The Straight Scoop on the Origins of the Ice Cream Sundae](https://alumni.cornell.edu/cornellians/earle-sundae/); [Food & Drink Life — 2 Towns Have Been Fighting Over Who Invented the Ice Cream Sundae](https://fooddrinklife.com/who-invented-the-ice-cream-sundae/)

##### Dish: Candy bar / chocolate snack
- Category: Everyday snack — kept brief; the notable content here is environmental/context-of-consumption rather than visual complexity of the object itself
- Cuisine lineage: Native-American-tradition — the multi-ingredient molded candy bar format is a genuinely American commercial invention. Milton Hershey, inspired by German chocolate-making machinery seen at the 1893 World's Columbian Exposition, developed the first US mass-production chocolate process by 1899 and launched the Hershey's Milk Chocolate Bar in 1900, marketed as "The Great American Chocolate Bar." [CONFIDENCE: HIGH]
- Regional form variation: None identified — nationally uniform, mass-produced, branded
- Serving format: Snack, individually wrapped, eaten by hand
- Visual/plating characteristics: A rectangular, individually wrapped, segmented (score-lined) molded chocolate bar is the default generic visual; specific national brands have highly recognizable standardized wrapper/bar designs — this file does not catalog individual brand packaging.
- Environment/context cues (as relevant to staging as the object itself): **Movie theater concessions** — sold at the same lobby counter as popcorn, often a lit glass-front case, added specifically to capture impulse purchases before showtime from the mid-20th century. **Vending machines** — a top-selling vending category nationally, dispensed via coin/card-operated glass-front machines with a spiral coil. **Checkout aisle** — a standard, deliberately-placed impulse item at eye/hand level beside the register, a distinct retail cue from a snack-aisle shelf. **Wartime symbolism** — candy bars (especially Hershey) became an internationally recognized symbol of American soldiers/liberation during and after WWII, sometimes used as informal currency — historical association only, not a current staging concern. [CONFIDENCE: MEDIUM for all environment cues — industry/trade and popular-history sourcing tier, not deep journalism]
- Confidence: HIGH for Hershey/candy-bar origin history; MEDIUM for environment/context cues
- Sources: [History.com — Why the Candy Bar Market Exploded After World War I](https://www.history.com/articles/wwi-1920s-chocolate-candy-boom); [American Heritage — Land of the Candy Bar](https://www.americanheritage.com/land-candy-bar)

#### Special-occasion (included despite the lunch/dinner/snack framing, per explicit direction)

##### Dish: Thanksgiving dinner
- Category: Special-occasion (once-yearly, but extremely high staging-relevance/iconicity)
- Cuisine lineage: Native-American-tradition
- Regional form variation: **Prevalence-only** — the core dish set is national, but side-dish preference intensity varies by region: Midwesterners favor mashed potatoes most (59%) while the rest of the country favors stuffing/dressing; green bean casserole is common in the South, Midwest, and West (45-47%) but notably less anticipated in the Northeast (27%). This is real, sourced, quantified regional variation, but it's an emphasis/preference difference, not a form-changing one — no pointer to a regional file needed, just this note.
- Primary protein: Whole roasted turkey (present at 86% of Thanksgiving meals per survey data — the closest thing to a universal anchor this file has)
- Most common sides, ranked by survey data: mashed potatoes (75%), stuffing/dressing (75%), dinner rolls (69%), cranberry sauce (64%), sweet potatoes (59%). Green bean casserole is regionally common (see above) but more divisive nationally — it's simultaneously one of the more common sides *and* one of the most disliked dishes (~24% dislike it), worth knowing if a brief wants a side that reads as universally beloved rather than merely common.
- Serving format: Plate — a full multi-dish spread, family-style serving dishes on the table rather than individually plated in the kitchen
- Visual/plating characteristics: Whole roasted turkey is the visual centerpiece, typically browned/glossy-skinned and presented whole (carved tableside or in the kitchen) rather than pre-sliced when first shown; the table itself is characteristically crowded with multiple serving dishes simultaneously, more so than an everyday dinner.
- Confidence: HIGH for the national dish/side rankings (a proper polling source, not a travel blog) — a notably stronger evidentiary basis than most of this file's other prevalence claims
- Sources: [YouGov — What America Eats on Thanksgiving](https://today.yougov.com/consumer/articles/26161-what-america-eats-thanksgiving-poll); [Yahoo/Creators — Most-Loved Thanksgiving Sides by State](https://creators.yahoo.com/lifestyle/story/americas-most-loved-thanksgiving-sides-by-state-according-to-recent-study-142228768.html)

##### Dish: Apple pie
- Category: Special-occasion to everyday (dessert, but pairs naturally with a casual Coke-and-dessert scene per explicit direction to include it)
- Cuisine lineage: Native-American-tradition — though, notably, **not actually American in origin**: apple pie recipes date to 14th-century England, and apples themselves aren't native to North America; colonists imported both the fruit and the recipe tradition. The "as American as apple pie" framing is itself a 20th-century marketing/symbolic construction (a 1902 NYT article, then WWII-era "fighting for mom and apple pie" messaging), not a claim about literal origin. This is worth stating directly, the same way spaghetti-and-meatballs' non-Italian status was flagged above — the symbolism is authentically American even though the dish's origin is not.
- Regional form variation: Not confirmed by available sources this pass — presumed national, flag for review
- Serving format: Plate, slice from a whole pie; often served with a scoop of vanilla ice cream ("à la mode") or a wedge of cheddar cheese in some regions — the cheese pairing is a real but less mainstream regional custom, not independently sourced this pass
- Visual/plating characteristics: Lattice-top or full double-crust, golden-brown and flaky, visible chunky (not puréed) spiced apple filling when cut
- Confidence: HIGH for the history/symbolism; LOW for the regional cheese-pairing detail (mentioned from general awareness, not sourced this pass — flag for removal or research)
- Sources: [Food52 — Apple Pie Origin Story](https://food52.com/story/24688-apple-pie-origin-story); [Mental Floss — How Apple Pie Became Iconic](https://www.mentalfloss.com/article/627296/how-did-apple-pie-become-iconic-american-dessert)

## GAP LOG

- **RESOLVED this pass (2026-09-24, via four parallel subagent research passes)**: Snacks (9 entries added), Tier 2 global cuisine (Indian-American, Sushi/Japanese-American, Thai-American added), New Mexican vs. Tex-Mex enchiladas/chile (added as a form-changing index entry), and a full regional-boundary validation pass (see FILE ROLE & METHOD above). Each is subject to the specific lower-confidence flags listed below, but the categories themselves are no longer unresearched.
- **Environment/staging-scenes section still does not exist in this file.** The six-scenario Uruguay-style treatment (casual lunch at home 1/2/3 people, dinner at home, outdoor meal at home, on-the-go, away-from-home 1 vs. 2-3 people) remains confirmed in-scope but not started. Given confirmed US car/drive-thru culture, I'd expect the "on-the-go" scenario to look close to the opposite of Uruguay's "grab-and-go barely exists" finding — a hypothesis to confirm, not yet checked.
- **RESOLVED (2026-09-24, human decision):** the regional-file list is now final at 13 files (see FILE ROLE & METHOD above) — New Mexico splits out from Arizona into its own `us-new-mexico.md` (the one addition the reviewer accepted from the research). All three research-recommended renames were reviewed and rejected: `us-desert-southwest.md`, `us-gulf-south.md`, and `us-west-coast.md` all keep their original names — the reviewer judged each broader label still fits the actual reach of the food culture involved (e.g., po'boys aren't confined to Louisiana in practice), even though the underlying distinctness evidence behind each file is not in dispute. Lowcountry (SC/coastal GA) remains open, not independently stress-tested — carried as a callout inside `us-south.md` pending its own pass.
- **No regional files exist yet under either the old or new list.** Every "→ `us-*.md`" pointer in this file is a forward reference. This file is not yet usable end-to-end for any form-changing dish until at least the relevant regional file exists.
- **New this pass — specific lower-confidence flags carried in from the subagent research** (full detail in each entry above): potato-chip regional-flavor claims (Old Bay/Maryland, Zapp's Cajun) are retail/roundup-sourced, not journalism-tier; dill pickle chips are more a Canadian marker than a US-regional one; the George Crum potato-chip origin story is contested legend, not verified history; kettle corn and sundae-glass-vessel descriptions rely on enthusiast/specialty sourcing; mozzarella sticks' exact inventor attribution (Frank Baker, 1976) traces to a small cluster of similar articles, not a primary source; no snack item this pass turned out to be genuinely form-changing by region (all regional variation found was flavor/brand/prevalence-level) — a real finding, not an oversight; butter chicken/tikka masala's "Americans get it creamier" claim and naan's India-vs-US staple-status inversion are both MEDIUM, food-blog-adjacent sourcing; California roll's exact inventor/city remains genuinely disputed among sources (like the gyro and Reuben cases already in this file); pad thai's ketchup-substitution detail is MEDIUM, no top-tier single source; the academic paper most directly on-point for the New Mexico/Arizona regional-boundary question (Journal of the Southwest, hosted at jsw.arizona.edu) could not be read directly — network egress blocked it, only a search snippet was available, flagged for a follow-up pass with working fetch access.
- **Sourdough bread's SF/West Coast regional identity** is still asserted from general awareness in the Bread Reference section, not independently sourced — explicitly flagged LOW confidence there.
- **BLT and turkey club** entries remain thin (MEDIUM confidence, not independently sourced beyond common knowledge).
- **WebFetch access to Wikipedia, Smithsonian, and other primary-source pages was blocked by network egress restrictions across all four subagent passes**, consistent with the main session's own experience — every subagent relied on WebSearch result snippets rather than a full direct page read. Flagged as a genuine depth limitation in this environment, not a fabrication risk (snippets were used conservatively and cited, not invented).

## CANDIDATE QUEUE

For the next research pass, roughly in priority order: (1) human sign-off on the recommended 12-region list and the New Mexico/Desert-Southwest disagreement — this blocks starting any regional file; (2) the environment/staging-scenes section (six scenarios, not yet started); (3) a dedicated Lowcountry stress-test pass; (4) the jsw.arizona.edu Journal of the Southwest paper on Southwestern cuisine geography, if fetchable in a future session; (5) stronger sourcing passes on the specific MEDIUM/LOW items flagged in the Gap Log above (potato chip regional flavors, NRA's primary ethnic-cuisine dine-in/takeout study, mozzarella sticks' exact origin); (6) once the region list is confirmed, building out the actual regional files, starting with whichever region the next real staging brief needs first.

## RESEARCH LOG

- **2026-09-24 subagent research round**: four parallel subagent passes were run — (1) Snacks, (2) Tier 2 global cuisine (Indian/Sushi/Thai), (3) New Mexican vs. Tex-Mex chile, (4) regional-boundary validation. Combined, these added roughly 90+ additional cited sources and ~90 tool-uses across the four agents. Each agent's full sourcing/gaps list is preserved in its own scratch draft (not merged verbatim to keep this log readable) at `/tmp/.../scratchpad/us-snacks-draft.md`, `us-tier2-cuisine-draft.md`, `us-newmexican-chile-draft.md`, and `us-regional-validation-report.md` respectively — the specific per-entry confidence tags and sources were merged into the dish entries and FILE ROLE & METHOD section above; the raw drafts are not part of the KB but are retained as a paper trail. Notable upgrade in sourcing tier this round: the regional-validation pass drew on the American Association of Geographers, Texas State Historical Association, Southern Foodways Alliance, and major regional newsrooms (Seattle Times, Austin American-Statesman) — a stronger institutional/academic tier than most of this file's first-pass sourcing.
- **Total sources consulted:** ~20 search queries in the initial pass, plus ~90 across the four 2026-09-24 subagent passes; approximately 125-130 unique sources cited across the file as a whole.
- **Sources used and their general type:**
  - Encyclopedic/reference: Wikipedia — New York-style bagel, Chicken parmesan, Spaghetti and meatballs, Reuben sandwich, Pastrami on rye, Cincinnati chili, Birria, Gyros, Orange chicken, New Haven-style pizza, St. Louis-style pizza, Hot dog variations, Prince's Hot Chicken Shack
  - Long-form food journalism/history: Smithsonian Magazine, National Geographic, CNBC, Food Republic, Tasting Table, Taste of Home, Atlas Obscura, Mental Floss, Food52
  - Regional/local-authority sources: Explore Louisiana (state tourism body, for Po'boy), Choose Chicago (city tourism body, for Italian beef), WTTW Chicago (PBS member station, for gyro history)
  - Polling/survey data (notably stronger evidentiary tier than most sources used for Uruguay): YouGov (Thanksgiving dish/side data), GrubHub order-volume data (Chinese food rankings, via NBC News reporting)
  - Specialist/enthusiast sources: America's Test Kitchen (regional hot dogs), Sonny's BBQ and Truth BBQ (regional BBQ, industry-practitioner sources), Smashburger (brand's own account of smash-burger history — used cautiously, flagged as a single origin account, not treated as independently corroborated)
- **Sources considered but not used:** Generic recipe-blog SEO listicles turned up frequently in nearly every query (typology-of-tacos sites, generic "regional sandwiches" roundups) and were deprioritized in favor of the journalism/encyclopedic/institutional sources above wherever both were available, consistent with the sourcing discipline established for the Uruguay file.
- **Fields/claims flagged LOW confidence or unconfirmed — explicit list:**
  - Smashburger's exact origin story (Dairy Cheer/Ashland, KY) — single detailed account, other sources suggest pre-existing technique
  - Turkey burger's visual/plating detail — inferred, not sourced
  - Gyro's exact "first in America" claimant — multiple competing Chicago-area claims, unresolved (same pattern as Uruguay's chivito founding-story ambiguity)
  - Reuben sandwich's exact originator — contested between named claimants
  - Sourdough bread's regional coding — asserted, not sourced this pass
  - BLT and turkey club entries generally — common-knowledge level, not independently verified
  - Apple pie's regional cheese-pairing custom — mentioned but not sourced, candidate for removal if not confirmed next pass
  - Chinese-American takeout dish ranking — single ordering-data source (GrubHub/NBC), not cross-checked against a second ranking
