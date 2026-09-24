# Country/Region File Schema & Criteria

**Purpose:** this document extracts the reusable methodology established
across the Uruguay (`knowledge-base/02-culture/regions/latam/uruguay.md`) and
United States (`knowledge-base/02-culture/regions/usa/us.md`) builds, so the
next country or region can start from a template rather than re-deriving
every decision from scratch. It is a living document — update it when a new
country's build surfaces a genuinely new pattern, the same way the US build
added the three-dimension dish schema and the demographic-lens principle on
top of what Uruguay established.

This is process documentation, not content. It does not itself contain any
country's cultural claims.

---

## 1. Scoping decisions to make first, before any research

### 1.1 Does this country need splitting into regional files?

Run the same test every time, regardless of prior assumptions about the
country: **would applying one region's norms, dishes, or dishware to another
region look visibly inauthentic to someone who knows the place?**

- If genuinely uniform (Uruguay's outcome): one national file, with internal
  "emphasis, not structural split" callouts for any minor regional variation
  found (e.g., Uruguay's coastal/interior distinction lived as a callout
  inside the one file, not a separate file).
- If genuinely diverse (the US's outcome, known going in): a national index
  file plus regional files, per §2 below.
- **Do this test with real research, not assumption or a tourist-brochure
  regional map.** The US regional-boundary validation pass used: (a) whether
  a dedicated Wikipedia article/category exists treating the candidate region
  as its own named tradition, (b) whether specialist/institutional sources
  (culinary schools, state historical associations, food-culture nonprofits,
  academic geography) frame comparisons at that regional grain rather than a
  broader or narrower one, (c) whether the region has documented causal
  reasons for its distinctness (climate/geography restricting certain
  ingredients, a distinct settlement/immigration pattern, a specific
  founding-chef/movement history) rather than just a different name for
  similar food.
- **A validation pass is a recommendation, not a decision.** The human
  reviewer has final say on scope, naming, and structure — see §7.

### 1.2 What is the file's scope (which meals, which occasions)?

Get explicit direction on:
- Which meal occasions are in scope (the US build was scoped to lunch,
  dinner, and snacks — breakfast excluded; a future country might get
  different scoping).
- Ranking/inclusion criterion: **staging relevance** (what a Coca-Cola
  photography brief would plausibly plate a meal scene around) rather than
  raw consumption frequency. This is why very-high-frequency foods can be
  excluded (cereal) while lower-frequency but iconic ones are included
  (Thanksgiving dinner).
- Whether other beverages besides Coca-Cola are in scope (default: no — the
  file documents food and setting, not a beverage catalog).

---

## 2. File structure

### 2.1 Single-file countries (Uruguay pattern)

One file per country: `knowledge-base/02-culture/regions/{ou}/{country}.md`.

### 2.2 Multi-region countries (US pattern)

- One **national index file** (`{country}.md`) — see §2.3 for what it holds.
- One file per confirmed region: `{country}-{region}.md`.
- **Regional files are built after and separately from the national index.**
  It is normal and expected for the national file to exist with zero
  regional files built yet — this is not itself a defect, provided the
  national file's index entries carry enough detail to be usable on their
  own in the meantime (see §4.3 on the style-map/pointer mechanism, and §8 on
  auditing whether that's actually true).

### 2.3 What the national index file holds vs. defers

- Full entries for dishes/customs/environment norms that are genuinely
  nationally uniform.
- Thin **index entries** for anything that varies by sub-national geography,
  each pointing to the regional file(s) that will eventually hold the full
  depth (see §4.3).
- The reusable schema/mechanism notes themselves (so later regional files —
  and later countries — inherit the conventions without re-deriving them).
- Regional files, once built, add: region-native content that wouldn't crack
  a national list at all, plus the authoritative full entries for whichever
  national-index dishes pointed out to them.

---

## 3. Document sections, in order

1. **Front matter**: `country`, `ou` (flag if the exact OU code isn't
   confirmed — don't guess silently), `status` (`DRAFT — NEEDS SME/HUMAN
   REVIEW`, plus a note if it's a partial/first pass), `research_method`,
   `date_drafted`.
2. **Triage/File-role section** — for a single-file country, this is the
   **SUB-REGION TRIAGE DECISION**: the §1.1 test applied with cited evidence,
   concluding split or no-split. For a multi-region country, this is **FILE
   ROLE & METHOD**: what the file's job is, the scope decisions from §1.2,
   and the current regional-file list with its status (working hypothesis /
   validated / human-decided — see §7).
3. **SCHEMA NOTE** (only needed the first time a new mechanism is
   introduced, e.g. the three-dimension dish schema in §4) — written once,
   referenced by later files rather than re-explained.
4. **TRUSTED CONTENT**, containing, in this order:
   - **General/region-wide norms** (table setting, bread/starch norms,
     condiment norms, mate-equivalent rituals — whatever is true broadly
     across most dishes/meals, stated once rather than repeated per dish).
   - **VISUAL & PLATING NORMS** — cross-cutting authenticity markers that
     apply to photography specifically: doneness/color conventions, grill-
     mark or char patterns, plating style (rustic/communal vs. individually
     composed), overall color palette. This section exists because the
     ingredient-level facts above it don't, by themselves, tell you what a
     photo should look like.
   - **ENVIRONMENT & STAGING SCENES** — see §5.
   - **Dish catalog** (called "DISH CATALOG" for a single-file country,
     "TOP DISHES" or similar for a national index file) — see §4.
5. **GAP LOG** — explicit, honest listing of what's unresolved, thin, or
   contested. Update it every pass; don't let it go stale (see §8's finding
   about a stale pointer that had already been resolved elsewhere in the
   same document).
6. **CANDIDATE QUEUE** — prioritized list of what the next research pass
   should tackle, kept current as items resolve.
7. **RESEARCH LOG** — sources consulted (by type/tier), sources considered
   and excluded (and why), explicit access-limitation disclosures (e.g., a
   network egress block that prevented a direct source read), and a
   running log of each research pass/round with a date.

---

## 4. Dish-entry schema

Every dish entry considers three **independent** dimensions. Keep them
separate — conflating them was an early mistake this project corrected.

### 4.1 Cuisine lineage (a tag, not a structural decision)

Which tradition a dish draws from (native-to-this-country, or
Italian-American-style, Mexican-American-style, etc., for a country whose
food culture absorbs other cuisines). Purely informational — doesn't trigger
special handling on its own. Where a dish's popular name implies an origin
it doesn't actually have (spaghetti and meatballs isn't Italian; the
California roll isn't Japanese; mozzarella sticks aren't Italian either),
say so explicitly — this is itself a recurring, useful authenticity note.

### 4.2 Regional form variation

- **None**: nationally/uniformly consistent — full entry lives in one place.
- **Prevalence-only**: same dish, just more or less common in a given place
  — a one-line note, no pointer needed.
- **Form-changing**: the dish's actual visual/physical form changes by
  sub-national (or, in a single-file country, sub-regional) geography, and
  depicting the wrong variant for a named location would be a visible
  authenticity error. This triggers the style-map/pointer mechanism, §4.3.

### 4.3 The style-map/pointer mechanism (for form-changing dishes)

- **Placement rule**: the full, authoritative entry for each named variant
  lives in the smallest file whose scope contains that variant. A thin
  **index entry** in the broader/national file names each variant, gives
  just enough compact visual detail to be usable on its own (a real finding
  from this project's own audit: compact index entries with real sourced
  visual detail — sauce color, crust construction, tortilla handling — can
  be sufficient to stage a scene correctly even before the regional file
  exists; a bare ingredient list without that detail is not), and points to
  where the fuller entry will eventually live: `→ region-file.md`.
- **Never duplicate** a full entry in both the index file and the regional
  file — one is authoritative, the other points to it.
- **Default/fallback**: state explicitly what to render when a brief doesn't
  name a specific place — flagged as an editorial judgment call, not
  presented as a sourced fact.
- **Decision test for whether a dish needs this mechanism at all**: the same
  "would depicting the wrong variant look visibly wrong to someone who knows
  the place" test from §1.1, applied at the dish level instead of the
  country level.

### 4.4 Serving-format variation

Independent of region: some dishes exist as genuine siblings with completely
different visual presentations despite sharing a name and flavor profile —
most commonly a **plated** version and a **sandwich/handheld** version
(chicken parmesan vs. a chicken parm sandwich; meatballs plated with pasta
vs. a meatball sub). Give each format its own full visual/plating entry
rather than a single entry that tries to describe both.

### 4.5 Standard per-dish fields

- Category (everyday / special-occasion)
- Cuisine lineage (§4.1)
- Regional form variation status (§4.2) + pointer if form-changing
- Serving format (§4.4)
- Primary protein / starch / accompaniment
- Side dishes/condiments, and **how** they're served (on the table vs.
  pre-applied by the cook, etc.)
- Serving vessel (named specifically where possible, not "a bowl")
- Venue variation (home vs. casual restaurant vs. street/fast-casual, if it
  differs)
- Utensils/eating customs (only if different from the general norms already
  stated once above)
- **Visual/plating characteristics** — mandatory, not optional. This is the
  field the whole document exists to support: color, texture, shape,
  cross-section, exact serving vessel. If two dishes could plausibly be
  confused with each other (a neighboring country's version, a same-name
  dish elsewhere, a similar-looking but different dish), name the specific
  confusable alternative and state what rules it out. If nothing rules it
  out — say so explicitly (see §4.1's spaghetti/meatballs-style honesty
  norm, and the Uruguay milanesa napolitana / pizza a la piedra fix in §8).
- Common confusion (with neighboring countries/cultures specifically)
- Confidence (§6)
- Sources (§6)

---

## 5. ENVIRONMENT & STAGING SCENES: the six-scenario structure

Every country file covers the same six Coca-Cola staging scenarios, so
results are comparable across countries:

1. Casual lunch at home, indoors — 1 person
2. Casual lunch at home, indoors — 2 people
3. Casual lunch at home, indoors — 3 people
4. Dinner at home, indoors
5. Meal outdoors at home
6. Meal on the go — 1 person
7. Away from home — 1 person at a restaurant/cafe
8. Away from home — 2-3 people at a restaurant/cafe

(Eight numbered items above map to the "six scenarios" as originally framed,
since the at-home lunch scenario splits by party size and away-from-home
splits by party size — keep this framing consistent across countries.)

### 5.1 Structure within the section

- **General environmental norms** first: climate/light, housing-type mix,
  materials, and an explicit **caricature-avoidance note** — before the
  per-scenario detail, since these apply across all eight.
- For a single-climate/single-architecture country (Uruguay), this can be
  fairly compact. For a large, climatically/architecturally diverse country
  (the US), **state explicitly that there is no single national default**
  and defer region-specific architecture/materials to the regional files —
  don't invent a fake national vernacular to fill the gap.
- Each scenario should produce **actual stageable detail** — materials,
  furniture, light, vessel, arrangement — not just demographic or
  statistical reasoning. A finding from this project's own audit: a
  scenario can be "data-rich" (cites a real percentage) while being
  "image-poor" (gives nothing concrete to actually stage) — both halves are
  needed, not just the sourced statistic.
- **Caricature-avoidance guidance is editorial judgment, not a sourced
  claim** — tag it as such distinctly from the sourced bullets around it.
  State the two (or more) extremes to avoid explicitly (for the US: not
  every home is a suburban McMansion, and not every alternative is a
  diner-and-drive-thru cliché; for a Gen Z-specific reweight: not every
  young-adult scene is a chaotic thrifted dorm room, and not every
  alternative is a sterile, generic apartment).

### 5.2 Cross-country contrasts are worth naming explicitly

When a new country's finding sharply contrasts with an already-built
country's finding on the same scenario (US drive-thru culture vs. Uruguay's
"grab-and-go barely exists"; US ~6:19pm dinner vs. Uruguay's 9:30pm+), state
the contrast directly rather than leaving two countries' files to be
compared silently by a reader. This both documents a genuinely useful
cross-market insight and forces the researcher to actually check the
comparable claim rather than assume.

### 5.3 The demographic-lens principle

Before defaulting an environment/staging scenario to one household
type, ask explicitly: **who is actually being staged, and is that the only
plausible household for this scenario?** This project's default first pass
skewed toward a general/traditional-family framing without being asked to;
a later round corrected this by adding a specific demographic lens (Gen Z:
decor, hangout venues, roommate/shared-living arrangements) as **co-equal
alternatives**, not replacements.

- **Distinguish demographic-agnostic facts from demographic-specific
  framing.** A national statistic (drive-thru share, dinner timing, grill
  type, housing-stock composition) is true regardless of who's staged and
  doesn't need to be re-researched when the demographic lens changes. What
  needs revision is the "likely setting / who lives here / what does it
  look like" narrative layered on top of that statistic.
- **Add, don't replace**, unless explicitly told to replace. A reviewer
  asking to "prioritize" one demographic is not necessarily asking to delete
  another that was already correctly sourced.
- **Expect a real asymmetry in source quality** between structural/
  statistical claims about a demographic (housing arrangements, spending
  patterns — often well-covered by institutional sources like a national
  census bureau or a major research nonprofit) and aesthetic/trend claims
  about a demographic (decor trends, "vibe" — often only covered by
  retailer content and lifestyle blogs, exactly the source tier this
  project otherwise deprioritizes). Keep those two tiers honestly separate
  in the confidence tagging rather than letting a well-sourced housing claim
  lend borrowed credibility to a thin decor claim sitting next to it.

---

## 6. Sourcing and confidence discipline

- **Confidence tags**: HIGH = 2+ independent corroborating sources; MEDIUM =
  1 credible source; LOW = weak, inferred, or contradicted between sources.
- **Source hierarchy** (prefer higher, use lower only when nothing better
  exists, and flag when you do): (1) encyclopedic/institutional/primary —
  Wikipedia, national statistical agencies, government bodies, major
  research nonprofits (Pew Research-tier); (2) long-form journalism and
  specialist/practitioner sources (culinary schools, trade press, named
  chefs/food historians); (3) industry/market-research and proprietary
  survey data — real and usable, but flag commercial self-interest when the
  source sells something related to the claim; (4) generic recipe blogs and
  SEO listicles — last resort only, and say so when used.
- **Never invent a source or a plausible-sounding claim.** If nothing
  supports a claim, write "Not confirmed by available sources — flag for
  review" rather than filling the gap with something that sounds right.
- **Confidence tags must match how the prose reads.** A LOW-confidence claim
  written with unhedged, authoritative language is a real defect this
  project's own audit specifically checked for — write LOW/MEDIUM claims
  with visible tentativeness, not just a tag that contradicts the sentence
  around it.
- **Disclose tool/access limitations directly** (e.g., a network egress
  block that forced reliance on search snippets instead of a full page
  read) rather than silently presenting the resulting claim as if it had
  been fully verified.
- **Verify a subagent's or a prior pass's specific factual claim before
  building on it**, especially before writing it into the file — this
  project's own practice was to re-run a quick verification search on a
  suggested fix before accepting it, not to take a delegated agent's word
  as final just because it came with a citation.

---

## 7. Human sign-off and disagreement handling

- **Research produces recommendations; the human reviewer makes decisions.**
  This applies especially to structural/strategic choices: whether to split
  a region out, what to name a file, whether a borderline case (Lowcountry)
  clears the bar for its own file. Present the recommendation with its
  evidence and confidence level, then wait for a decision rather than
  applying it unilaterally — this project's regional-file renames were
  proposed by research, then reviewed and reverted by the human on naming
  grounds even where the underlying distinctness evidence wasn't in dispute.
- **When two independent research passes disagree, surface the
  disagreement — don't referee it yourself.** This happened once in this
  project (New Mexico: one pass recommended keeping it bundled with
  Arizona, another recommended splitting it out) and the right move was to
  present both conclusions with their evidence and let the human decide,
  not to pick whichever sounded more confident.
- **Log every judgment call**, in a project-level `DECISIONS.md` at the
  repo root (append-only, one dated section per round): what was decided,
  why, what alternative was rejected and why. This is a durable record
  independent of any single file's own Gap Log/Research Log, and it's what
  let this project answer "why does this file say X" months of edits later
  without re-deriving the reasoning from scratch.

---

## 8. Independent audit, before calling a file done

Before treating a file as finished, run a **skeptical, independent** review
against the actual end goal — not another content-generation pass, and not
self-graded. The test: *if this document alone briefed an image-generation
system with no other context, would the resulting scene be true to the
place, and would the food be unmistakably the named dish — not a generic
approximation, not confusable with a neighboring country's or region's
version?*

Concretely check for:
- **Environment sufficiency**: does each staging scenario have actual
  stageable visual detail, or does it stay abstract/statistical?
- **Food description sufficiency**: does each dish entry have enough
  specific, checkable visual detail to be verified against a generated
  image? Does the confidence tag match how authoritatively the entry reads?
- **Internal consistency**: grep every cross-reference/pointer against the
  current, final structure — renames and reversals leave stragglers if not
  checked mechanically. (This project's audit found one: a stale pointer
  that referenced an already-superseded placeholder even though the
  authoritative table elsewhere in the same document had already resolved
  it.)
- **The "unmistakable" bar, spot-checked**: for a sample of entries, name
  the single most likely confusable alternative (a neighboring country's
  version, a similarly-named but different dish) and check whether the
  entry's actual text rules it out — not just whether it exists.
- **Gaps that matter vs. gaps that don't**: distinguish a cosmetic unsourced
  detail (an exact founding date) from a gap that would actually break the
  authenticity goal (a confidently-HIGH-tagged entry with no visual content
  at all). Fix the latter; note and move on from the former.

Act on what's fixable immediately (this project fixed a stale pointer, added
missing visual fields, and added an explicit honesty caveat within the same
session the audit ran), and log what isn't yet fixable as a prioritized,
dated Candidate Queue item rather than leaving it implicit.

---

## 9. When to delegate to a subagent vs. do it directly

- **Delegate**: well-specified, independent, self-contained research chunks
  that don't require back-and-forth judgment calls with the reviewer — a
  single cuisine's dish research, a regional-boundary validation pass, a
  full environment-section draft, an independent audit. Each of these
  worked well as a background subagent task in this project once the
  surrounding schema was already established.
- **Don't delegate**: scope and schema negotiation itself. The three-
  dimension dish schema, the six-scenario environment structure, and the
  demographic-lens principle were all worked out through direct back-and-
  forth with the reviewer — a subagent starting cold can't make those calls
  on the reviewer's behalf, and trying to delegate that stage risks
  flattening hard-won distinctions the reviewer specifically asked for.
- **Mechanics**: have each subagent write its output to its own scratch
  file, never edit the canonical `.md` file directly. Merge sequentially
  yourself, reading each draft in full rather than merging on the strength
  of the agent's own summary — the summary describes intent, not
  necessarily what actually landed in the file.
- **Only spawn a subagent when the user has asked for one, or has
  established that pattern for the current task.** Don't default to
  delegation for its own sake.

---

## 10. Quick-start checklist for a new country

1. Confirm the meal-occasion and beverage scope with the reviewer (§1.2).
2. Run the split-vs-no-split test with real evidence (§1.1). Document the
   decision and reasoning at the top of the file, whichever way it goes.
3. If splitting: propose a candidate regional list, then validate it with
   real research before treating it as final (§1.1, §7). Get explicit
   human sign-off before building any regional file.
4. Set up the document skeleton in the order from §3, including a Gap Log,
   Candidate Queue, and Research Log from the start.
5. Research and write dish entries using the three-dimension schema (§4),
   with mandatory Visual/plating characteristics on every entry.
6. Build the ENVIRONMENT & STAGING SCENES section covering all eight
   scenario slots (§5), checking explicitly for demographic-default bias
   (§5.3) and any notable contrast with already-built countries (§5.2).
7. Log every judgment call in the root `DECISIONS.md` as you go, not
   retroactively.
8. Before calling any version "done," run an independent audit against the
   actual end goal (§8), and act on what it finds.
