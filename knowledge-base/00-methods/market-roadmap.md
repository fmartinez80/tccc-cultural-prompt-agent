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

**OU column note**: this is TCCC's broad, publicly reported operating-segment
grouping (North America / EMEA / Latin America / Asia Pacific), not a
confirmed internal OU code — every started market's own country file
independently flags "no confirmed TCCC OU code" in its front matter, and
this table doesn't resolve that gap. Treat this column as a directional
regional grouping for sequencing/reviewer-assignment purposes only, not as
verified TCCC market-structure documentation.

| # | Market | OU (segment) | Status |
|---|--------|---------------|--------|
| 1 | United States | NAOU | IN PROGRESS<br><ul><li>National index (`us.md`) drafted, needs SME review.</li><li>**All 13 planned regional files complete**: `us-northeast.md`, `us-mid-atlantic.md`, `us-south.md`, `us-appalachia.md`, `us-florida.md`, `us-gulf-south.md`, `us-midwest.md`, `us-texas.md`, `us-new-mexico.md`, `us-arizona.md` (renamed from `us-desert-southwest.md`, see DECISIONS.md), `us-west-coast.md`, `us-pacific-northwest.md`, `us-hawaii.md`.</li><li>Built autonomously per explicit user direction, using judgment on internal zone clustering and file-vs-callout structural calls as each region's research landed — see DECISIONS.md for each call's reasoning.</li><li>Every file individually flagged `NEEDS SME/HUMAN REVIEW`.</li><li>Next: a project-wide cross-reference/internal-consistency audit (`country-file-schema.md` §8), then image testing.</li></ul> |
| 2 | United Kingdom | EMEA | IN PROGRESS<br><ul><li>WebSearch verification-and-merge pass complete over a model-knowledge scaffold.</li><li>Built as an index (`uk.md`) plus one regional file (`uk-scotland.md`) — Scotland cleared the split test on food, vocabulary, and architecture simultaneously.</li><li>Wales and Northern Ireland are compact callouts in `uk.md`; Northern Ireland's placement is flagged provisional (see DECISIONS.md and `uk.md`'s Gap Log — Coca-Cola HBC Ireland & NI vs. CCEP GB market-structure evidence).</li><li>No TCCC OU code confirmed for this market.</li><li>Scratch scaffold superseded and deleted.</li><li>Needs SME/human review before production-ready.</li></ul> |
| 3 | Germany | EMEA | IN PROGRESS<br><ul><li>WebSearch verification-and-merge pass complete over an exceptionally detailed model-knowledge scaffold.</li><li>Built as a single national file with a heavy internal regional map (Bavaria, Baden-Württemberg, Rhineland/NRW, Hesse/Frankfurt, the Palatinate, the North, Berlin/Brandenburg, Saxony/Thuringia/former East) and a heavy §4.6 coexisting-variant load — a single-file decision, not a US/UK-style index-plus-regional split, with a documented (not yet triggered) `germany-bavaria.md` spinout if Bavarian-specific usage ever exceeds ~30%.</li><li>Verified: the Wiener Schnitzel veal-naming law, the Swabian-vs-Bavarian pretzel mechanism, currywurst's Berlin-vs-Ruhr dispute and East Berlin skinless-casing origin, East-style Jägerschnitzel's GDR origin, Sauerbraten's three regional variants, Käsespätzle/Flammkuchen/Handkäs-mit-Musik/Labskaus, the Munich-only Oktoberfest framing, Spargelzeit's end date, Nürnberger/Thüringer Bratwurst's PGI dimensions, and German housing/rental/balcony-access statistics.</li><li>The alcohol-exclusion hard rule is independently grounded in TCCC's own real, public Responsible Marketing and Responsible Alcohol Marketing policies, cited directly in the file.</li><li>No Germany-specific Coca-Cola pack dimension confirmed to differ from the non-US 330mL default, so `coca-cola-guidelines.md` was left untouched for this market; several pack-format gaps remain honestly flagged.</li><li>No TCCC OU code confirmed for this market.</li><li>Needs SME/human review and native-reviewer sign-off before production-ready.</li></ul> |
| 4 | Spain | EMEA | IN PROGRESS<br><ul><li>WebSearch verification-and-merge pass complete over a model-knowledge scaffold.</li><li>Built as one file with six internal zones plus a Canary Islands callout — a single-file decision, not a US/UK-style split.</li><li>Verified: paella's official ingredients and lunch/Valencia anchoring, patatas bravas' Madrid origin and paprika-based (no-tomato) sauce, calamares andaluza/romana distinction, serranito's composition, several dish-scale figures (tortilla pan, croqueta, roscón, coca de Sant Joan, paellera, pulpo plate), Eurostat housing/parental-home-age figures, and 2026 festival dates.</li><li>Found and added a genuine Spain-specific Coca-Cola on-premise glass-bottle standard (350mL/237mL) to `coca-cola-guidelines.md` §4.3.</li><li>Several items (gazpacho glass size, cachopo's exact dimension, the 237mL bottle's exact size) remain honestly unconfirmed rather than guessed.</li><li>No TCCC OU code confirmed for this market.</li><li>Needs SME/human review before production-ready.</li></ul> |
| 5 | Mexico | LATAM | Not started |
| 6 | Argentina | LATAM | Not started |
| 7 | Brazil | LATAM | Not started |
| 8 | Turkey | EMEA | Not started |
| 9 | South Africa | EMEA | Not started |
| 10 | Nigeria | EMEA | Not started |
| 11 | China | APAC | Not started |
| 12 | India | APAC | Not started |
| 13 | Japan | APAC | Not started |
| 14 | Thailand | APAC | Not started |
| 15 | Philippines | APAC | Not started |
| 16 | Pakistan | APAC | Not started (numbered 16 in this tracker for consistency; the original source list left these three unranked relative to 1–15) |
| 17 | Bangladesh | APAC | Not started (same note as Pakistan) |
| 18 | Indonesia | APAC | Not started (same note as Pakistan) |
| 19 | Uruguay | LATAM | Built — pilot/proof-of-concept<br><ul><li>`uruguay.md` is the original pilot market — the file `country-file-schema.md` itself was derived from.</li><li>Not one of the numbered TCCC top-markets from the original priority list; numbered 19 here for tracker consistency only.</li><li>Kept in the KB as the schema's proof-of-concept and ongoing prompt-testing ground, not as a priority-sequence build.</li></ul> |

## Notes

- This table should be updated as each market's file is drafted, tested
  against generated images, and reaches a stable state — mirroring the
  `status:` front-matter field each country/region file already carries.
- Don't start a new market's file assuming the schema is finished — check
  `country-file-schema.md`'s own status/recency before applying it, since
  it's still being actively revised based on US findings.
- **Status-cell formatting**: multi-point statuses use an HTML `<ul>` list
  (via `<br>` before the list) rather than one long paragraph, for table
  legibility. Keep this convention for future entries — a single "Not
  started" or one-line status doesn't need list formatting, but anything
  with more than one distinct fact should use bullets.
- **OU (segment) column**: see the note above the table — this is a
  directional public-segment grouping (NAOU/EMEA/LATAM/APAC), not a
  confirmed internal TCCC OU code. Don't treat it as authoritative market
  structure without independent confirmation.
