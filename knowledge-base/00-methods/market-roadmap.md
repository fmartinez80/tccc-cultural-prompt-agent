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
| 1 | United States | IN PROGRESS — national index (`us.md`) drafted, needs SME review. Regional files: `us-northeast.md`, `us-mid-atlantic.md`, `us-south.md`, `us-appalachia.md`, `us-florida.md`, `us-gulf-south.md`, `us-midwest.md`, and `us-texas.md` complete (8 of 13); 5 regions remaining (New Mexico, Desert Southwest, West Coast, Pacific Northwest, Hawaii). Working autonomously through the full 13-file list per explicit user direction, using judgment on internal zone clustering as each region's research lands. |
| 2 | United Kingdom | Not started |
| 3 | Germany | Not started |
| 4 | Spain | Not started |
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
| — | Pakistan | Not started (listed without a numbered rank in the source list — sequencing relative to 1–15 not yet clarified) |
| — | Bangladesh | Not started (same note as Pakistan) |
| — | Indonesia | Not started (same note as Pakistan) |

Also already underway, outside this numbered list: **Uruguay** (`uruguay.md`)
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
