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

**Working regional-file list (provisional — NOT yet independently validated the
way Uruguay's sub-region triage was tested against evidence; flag for a real
validation pass before treating these boundaries as final):**
`us-northeast.md`, `us-mid-atlantic.md`, `us-south.md`, `us-gulf-south.md`,
`us-midwest.md`, `us-texas.md`, `us-desert-southwest.md`, `us-west-coast.md`,
`us-pacific-northwest.md`, `us-hawaii.md`. **None of these have been created
yet** — this pass produces only `us.md`. Every pointer to a regional file below
is a forward reference to a file that does not exist yet, not a working link.
Florida is provisionally folded into `us-south.md`, but the Cuban
sandwich/Tampa entry below suggests Florida may deserve its own file — flagged,
not decided.

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

- **Not yet researched this pass**: Indian food in the US (butter chicken/naan tier), sushi/California roll, pad Thai, and the broader Tier 2/3 global-cuisine ladder items discussed in conversation but not yet built into this file.
- **Snacks are entirely unresearched this pass** despite being explicitly in scope (lunch/dinner/**snacks**) — potato chips, popcorn, pretzels, chips-and-dip, mozzarella sticks, ice cream/soda-fountain sundae, candy. This is a real, acknowledged gap, not an oversight being hidden — flagged for the next research pass.
- **New Mexican vs. Tex-Mex enchiladas/chile** (red vs. green chile as a Desert Southwest-specific identity marker, distinct from Tex-Mex) was identified in conversation as a likely form-changing case but not researched this pass.
- **Environment/staging-scenes section does not exist yet in this file.** The six-scenario Uruguay-style treatment (casual lunch at home 1/2/3 people, dinner at home, outdoor meal at home, on-the-go, away-from-home 1 vs. 2-3 people) was explicitly confirmed as in-scope for the US but has not been started. Given confirmed US car/drive-thru culture, I'd expect the "on-the-go" scenario in particular to look like close to the opposite finding from Uruguay's "grab-and-go barely exists" — a hypothesis to confirm, not yet checked.
- **The ten-region working list itself has not been validated** the way Uruguay's single-file conclusion was tested against evidence — it's a carried-over working hypothesis from conversation, not a researched triage decision. Florida's file placement is specifically flagged as unresolved.
- **No regional files exist yet.** Every "→ `us-*.md`" pointer in this file points to a file that has not been created. This file is not yet usable end-to-end for any dish flagged form-changing until at least the relevant regional file exists.
- **Sourdough bread's SF/West Coast regional identity** is asserted from general awareness in the Bread Reference section, not independently sourced this pass — explicitly flagged LOW confidence there.
- **BLT and turkey club** entries are thin (MEDIUM confidence, not independently sourced beyond common knowledge) — deprioritized in favor of the more clearly form-changing/high-value entries this pass.

## CANDIDATE QUEUE

For the next research pass, roughly in priority order: snacks (potato chips, popcorn, pretzels, ice cream/soda fountain, candy — genuinely unresearched despite being in scope), Indian-American and other Tier 2 global-cuisine entries, New Mexican green/red chile and enchilada style, the environment/staging-scenes section, and validation research on the ten-region boundary list before any regional file is started in earnest.

## RESEARCH LOG

- **Total sources consulted:** ~20 search queries this pass, yielding approximately 35-40 unique sources cited above.
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
