---
status: LIVING TRACKER — update as each market's work progresses
---

# Market roadmap

TCCC top-markets priority order, as given 2026-09-24. Sequencing logic
(per the same conversation): the United States is being built first and in
maximum depth — both the national index layer and full regional-file
depth — specifically *because* it's the hardest, most structurally complex
case (13 planned sub-regions, heavy form-changing/style-map usage, plate-
vs-sandwich splits, deli culture, etc.). The working assumption is that if
`country-file-schema.md` holds up under the US's complexity, applying it to
every simpler, typically single-file country below should be
straightforward by comparison. This is a real assumption, not yet a
proven one — treat the schema as still provisional until at least one
additional country is completed and confirms it generalizes.

## Priority list and status

| # | Market | Status |
|---|--------|--------|
| 1 | United States | IN PROGRESS — national index (`us.md`) drafted, needs SME review. **All 13 planned regional files now complete**: `us-northeast.md`, `us-mid-atlantic.md`, `us-south.md`, `us-appalachia.md`, `us-florida.md`, `us-gulf-south.md`, `us-midwest.md`, `us-texas.md`, `us-new-mexico.md`, `us-arizona.md` (renamed from `us-desert-southwest.md`, see DECISIONS.md), `us-west-coast.md`, `us-pacific-northwest.md`, and `us-hawaii.md`. The full 13-file structure built autonomously per explicit user direction, using judgment on internal zone clustering and file-vs-callout structural calls as each region's research landed. Every file remains individually flagged `NEEDS SME/HUMAN REVIEW`; next step per `country-file-schema.md` §8 is a project-wide cross-reference/internal-consistency audit now that the full structure exists, plus image testing. |
| 2 | United Kingdom | IN PROGRESS — WebSearch verification-and-merge pass complete. Built as an index (`knowledge-base/02-culture/regions/europe/uk.md`) plus one regional file (`uk-scotland.md`) — Scotland cleared the split test on food, vocabulary, and architecture simultaneously; Wales and Northern Ireland are compact callouts in `uk.md` (Northern Ireland's placement flagged as provisional — see DECISIONS.md and `uk.md`'s own Gap Log for the market-structure evidence, Coca-Cola HBC Ireland & NI vs. CCEP GB, behind that flag). No TCCC OU code confirmed for this market. Needs SME/human review before being treated as production-ready. The scratch scaffold at `knowledge-base/scratch-uk-model-knowledge-draft.md` has been fully superseded and deleted. |
| 3 | Germany | IN PROGRESS — WebSearch verification-and-merge pass complete over an exceptionally detailed model-knowledge scaffold. Built as a single national file with a heavy internal regional map (Bavaria, Baden-Württemberg, Rhineland/NRW, Hesse/Frankfurt, the Palatinate, the North, Berlin/Brandenburg, Saxony/Thuringia/former East) and a heavy schema §4.6 coexisting-variant load (`knowledge-base/02-culture/regions/europe/germany.md`) — a single-file structural decision made by the orchestrating session, not a US/UK-style index-plus-regional split, with a documented (not yet triggered) future spinout to `germany-bavaria.md` if Bavarian-specific prompt usage ever exceeds ~30% of Germany's volume. Verified: the Wiener Schnitzel veal-naming law, the Swabian-vs-Bavarian pretzel-shape mechanism, currywurst's Berlin-vs-Ruhr origin dispute and its East Berlin skinless-casing origin, East-style Jägerschnitzel's GDR-canteen origin, Sauerbraten's three regional variants, Käsespätzle/Flammkuchen/Handkäs-mit-Musik/Labskaus, the Munich-only Oktoberfest framing, Spargelzeit's end date, Nürnberger/Thüringer Bratwurst's PGI dimensions, and German housing/rental/balcony-access/young-adult statistics. The alcohol-exclusion hard rule (accepted by the orchestrating session, not relitigated) was cross-checked against `coca-cola-guidelines.md` (which has no alcohol/children's-marketing language of its own) and independently grounded in TCCC's own real, public Responsible Marketing and Responsible Alcohol Marketing policies, cited directly in the file. No Germany-specific Coca-Cola glass-bottle dimension distinct from the existing 330mL/115.2mm/66.1mm non-US default was confirmed, so `coca-cola-guidelines.md` was not edited (per an explicit steering note); several pack-format gaps (0.2L/0.33L bottles, a possible slim-can variant) remain honestly flagged rather than guessed. No TCCC OU code confirmed for this market. Needs SME/human review and native-reviewer sign-off before being treated as production-ready. The scratch scaffold at `knowledge-base/scratch-germany-model-knowledge-draft.md` has been fully superseded and deleted. |
| 4 | Spain | IN PROGRESS — WebSearch verification-and-merge pass complete over a model-knowledge scaffold. Built as one file with six internal zones plus a Canary Islands callout (`knowledge-base/02-culture/regions/europe/spain.md`) — a structural decision made by the orchestrating session, not a US/UK-style index-plus-regional split. Verified: paella's official ingredients and lunch/Valencia anchoring, patatas bravas' Madrid origin and sauce composition, calamares andaluza/romana distinction, serranito's composition, several dish-scale figures (tortilla pan, croqueta, roscón, coca de Sant Joan, paellera, pulpo plate), Eurostat housing/parental-home-age figures, and 2026 festival dates. Found and added a genuine new Spain-specific Coca-Cola on-premise glass-bottle standard (350mL/237mL) to `coca-cola-guidelines.md` §4.3. Several items (gazpacho glass size, cachopo's exact dimension, the 237mL bottle's exact size) remain honestly unconfirmed and flagged rather than guessed. No TCCC OU code confirmed for this market. Needs SME/human review before being treated as production-ready. The scratch scaffold at `knowledge-base/scratch-spain-model-knowledge-draft.md` has been fully superseded and deleted. |
| 5 | Mexico | Not started |
| 6 | Argentina | Not started |
| 7 | Brazil | Not started |
| 8 | Turkey | Not started |
| 9 | South Africa | Not started |
| 10 | Nigeria | Not started |
| 11 | China | Not started |
| 12 | India | Not started |
| 13 | Japan | Not started |
| 14 | Thailand | Not started |
| 15 | Philippines | Not started |
| 16 | Pakistan | Not started (listed without a numbered rank in the source list — sequencing relative to 1–15 not yet clarified) |
| 17 | Bangladesh | Not started (same note as Pakistan) |
| 18 | Indonesia | Not started (same note as Pakistan) |
| 19 | Uruguay | Partial | Not as a priority but as a verifiable gastro-homogenous country

— the original pilot that the schema itself was derived from, not a TCCC
top-market per this list but kept in the KB as the schema's proof-of-concept
and ongoing prompt-testing ground.

## Notes

- This table should be updated as each market's file is drafted, tested
  against generated images, and reaches a stable state — mirroring the
  `status:` front-matter field each country/region file already carries.
- Don't start a new market's file assuming the schema is finished — check
  `country-file-schema.md`'s own status/recency before applying it, since
  it's still being actively revised based on US findings.
