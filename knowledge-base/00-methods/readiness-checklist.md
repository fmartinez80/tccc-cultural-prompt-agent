---
status: LIVING TRACKER — update as items close; mirrors market-roadmap.md's
  per-market tracker but covers the whole program (content + pipeline)
---

# End-to-end readiness checklist

Everything outstanding across both halves of this program: the knowledge
base (cultural/product content) and the image-generation pipeline it feeds
(`image-generation-pipeline.md`). Nothing below is implemented/closed
unless checked — this is a gap list, not a status report of what's done.

## A. Knowledge base — per-market

### A1. Markets built, pending review/sign-off
- [ ] **United States** (13/13 regional files) — SME review
- [ ] **United States** — `country-file-schema.md` §8 cross-reference/
  internal-consistency audit (never run; check `us.md`'s pointer table
  against all 13 regional files, confirm no broken `→ us-*.md` references)
- [ ] **UK** — SME review
- [ ] **UK** — Northern Ireland placement decision (provisional; needs a
  human reviewer with TCCC's own market-structure documentation)
- [ ] **Germany** — SME review
- [ ] **Germany** — native-reviewer sign-off (flagged separately from
  general SME review in the file's own status line)
- [ ] **Spain** — SME review
- [ ] **South Africa** — SME review
- [ ] **South Africa** — settlement-register framing sign-off (suburban/
  township/urban-flat/rural-farm) — deliberately unresolved pending a
  human decision on apartheid-era sensitivity, not a research gap

### A2. Cross-market standing gaps
- [ ] **No market has a confirmed TCCC internal OU code** — every started
  file flags "not confirmed, don't guess"; needs TCCC's own org
  documentation, not further research
- [ ] **No market has had any image-generation testing** — every claim in
  every file is currently unvalidated against real output; blocked on the
  pipeline existing (see Section B)
- [ ] **Pack-dimension data (all markets) — paused pending your incoming
  TCCC SKU spec drop.** Once it lands: one integration pass over
  `coca-cola-guidelines.md` §3/§4.3 and the Germany/Spain/South Africa
  pack-dimension Gap Log items
- [ ] **Housekeeping**: `market-roadmap.md`'s intro note still frames
  `country-file-schema.md` as "provisional until at least one additional
  country is completed" — that bar has been cleared four times over
  (UK/Germany/Spain/South Africa) and the note hasn't been updated to
  reflect it

### A3. Markets not started
- [ ] Mexico, Argentina, Brazil (LATAM)
- [ ] Turkey, Nigeria (EMEA)
- [ ] China, India, Japan, Thailand, Philippines, Pakistan, Bangladesh,
  Indonesia (APAC)
- (Uruguay exists as the original schema pilot; not part of this queue)

## B. Pipeline architecture — build status

Nothing in this section is implemented yet; `image-generation-pipeline.md`
is a design/requirements document only.

### B1. Open architecture decision
- [ ] **Hybrid (agent network + node-based workflow) vs. fully agentic
  single-flow (e.g., Nano Banana 2 generating directly from prompts)** —
  under active evaluation as of this checklist; see the pipeline doc's
  "Build approach under consideration" section

### B2. Systems to build
- [ ] **Agentic interface** — Stage 1 guided Q&A, Stage 2 prompt
  generation, Stage 3 segment decomposition, Stage 4 pre-gen validation,
  Stage 7 post-gen validation. Not started.
- [ ] **Scene Creator** (Three.js layout tool, Stage 5) — in active
  development elsewhere; status outside this repo's visibility
- [ ] **Node-based workflow tool** (Stage 6) — tool selection not
  finalized (Runway named as the reference model, not confirmed as the
  actual choice); contingent on the B1 decision
- [ ] **Digital Twin PNG asset pipeline** — source/mechanism for the
  per-SKU reference image undefined (fixed asset library? generated?
  pulled per-market?)

### B3. Stage 4/7 validation — scoring methodology
- [ ] Yes/no question checklist for **Brand Guardian**
- [ ] Yes/no question checklist for **General Creative Direction**
- [ ] Yes/no question checklist for **Cultural Authenticity** (natural
  source: country-file dish descriptions, model-failure notes, §4.6
  variant disclosures)
- [ ] Yes/no question checklist for **Food Stylist / Composition QA**
  (natural source: `tableware-composition-reference.md`,
  `coca-cola-guidelines.md` §4)
- [ ] Score-rollup method (how per-question answers become a 0–100 score)
- [ ] Fail threshold per criterion (currently undefined for all four)
- [ ] Resolve the Cultural-Authenticity vs. Composition-QA overlap for
  norms that are both (e.g., South Africa's "seven colours" plate)
- [ ] Define Stage 7's fail-path targeting (full re-render vs. re-generate
  only the specific failing element/segment)
- [ ] Define what Stage 4's "re-run with notes" changes mechanically
  (full re-decomposition vs. targeted segment edit)

### B4. Not yet run, at all
- [ ] Any end-to-end pipeline execution (no stage has been connected to
  another in practice)
- [ ] Any image-generation test against a KB claim, in any market

## Suggested next actions (not sequenced/prioritized — your call)

1. Decide B1 (architecture approach) — it gates how B2/B3 get built.
2. Land the TCCC SKU spec drop → close A2's pack-dimension item across all
   markets in one pass.
3. Get SME/native-reviewer time booked for the 5 built markets (A1) —
   this doesn't block new market builds or pipeline work, so it can run
   in parallel.
4. Decide the South Africa settlement-register question (A1) — the one
   item in this whole list that only you (or TCCC brand/legal) can close.
