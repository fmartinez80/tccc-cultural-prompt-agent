// Downloads the knowledge base (country files, brand and tableware references)
// from GitHub into ./knowledge-base. Runs at build time (Heroku) or on demand:
//   npm run kb:sync
// Configure with KB_REPO (owner/name) and KB_BRANCH. Set KB_SKIP_SYNC=1 to skip.
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, existsSync, cpSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const repo = process.env.KB_REPO || "fmartinez80/tccc-cultural-prompt-agent";
const branch = process.env.KB_BRANCH || "claude/quirky-mayer-m01mg7";
const dest = process.env.KNOWLEDGE_DIR || "knowledge-base";

if (process.env.KB_SKIP_SYNC === "1") {
  console.log("[kb:sync] KB_SKIP_SYNC=1, skipping");
  process.exit(0);
}

const url = `https://codeload.github.com/${repo}/tar.gz/refs/heads/${branch}`;
console.log(`[kb:sync] downloading ${repo}@${branch}`);
const res = await fetch(url);
if (!res.ok) {
  console.error(`[kb:sync] download failed: HTTP ${res.status}`);
  process.exit(existsSync(dest) ? 0 : 1);
}
const work = mkdtempSync(join(tmpdir(), "kb-"));
const tgz = join(work, "kb.tgz");
writeFileSync(tgz, Buffer.from(await res.arrayBuffer()));
execFileSync("tar", ["-xzf", tgz, "-C", work]);
const top = execFileSync("tar", ["-tzf", tgz]).toString().split("\n")[0].replace(/\/$/, "");
const src = join(work, top, "knowledge-base");
if (!existsSync(src)) {
  console.error("[kb:sync] no knowledge-base/ folder in that branch");
  process.exit(1);
}
rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
writeFileSync(join(dest, ".source"), `${repo}@${branch}\n${new Date().toISOString()}\n`);
rmSync(work, { recursive: true, force: true });
console.log(`[kb:sync] knowledge base ready in ./${dest}`);
