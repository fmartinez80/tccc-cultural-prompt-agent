// CLI: node src/run.js [--out dir] [spec.json ...]
// For every spec and archetype: enrich -> place -> camera auto-fit -> checks -> headless render.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { enrich, place, autofit, checks, ARCHETYPES } from './solve.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const outIdx = args.indexOf('--out');
const OUT = outIdx >= 0 ? path.resolve(args.splice(outIdx, 2)[1]) : path.join(ROOT, 'out');
const specFiles = args.length ? args : fs.readdirSync(path.join(ROOT, 'specs')).map((f) => path.join(ROOT, 'specs', f));
const W = 1920, H = 1080;

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const registry = readJson(path.join(ROOT, 'registry/objects.json'));
const rules = readJson(path.join(ROOT, 'rules/rules.json'));

function serve() {
  const types = { '.js': 'text/javascript', '.html': 'text/html' };
  const server = http.createServer((req, res) => {
    const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
    if (!p.startsWith(ROOT) || !fs.existsSync(p)) return res.writeHead(404).end();
    res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' });
    fs.createReadStream(p).pipe(res);
  });
  return new Promise((r) => server.listen(0, '127.0.0.1', () => r(server)));
}

const PAGE = `<!doctype html><html><head><meta charset="utf-8">
<script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js"}}</script>
<script type="module">import * as R from '/src/render/page.js'; window.R = R; window.ready = true;</script>
</head><body style="margin:0"></body></html>`;

const png = (dataUrl, file) => fs.writeFileSync(file, Buffer.from(dataUrl.split(',')[1], 'base64'));

async function main() {
  const server = await serve();
  const port = server.address().port;
  fs.writeFileSync(path.join(ROOT, 'src/render/index.html'), PAGE);
  const launch = { args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] };
  let browser;
  try {
    browser = await chromium.launch(launch);
  } catch {
    browser = await chromium.launch({ ...launch, executablePath: '/opt/pw-browsers/chromium' });
  }
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  page.on('console', (m) => m.type() === 'error' && console.error('[page]', m.text()));
  await page.goto(`http://127.0.0.1:${port}/src/render/index.html`);
  await page.waitForFunction(() => window.ready);

  const summary = [];
  const tiles = [];
  for (const file of specFiles) {
    const spec = readJson(file);
    const enriched = enrich(spec, rules);
    for (const archetype of Object.keys(ARCHETYPES)) {
      const dir = path.join(OUT, spec.id, archetype);
      fs.mkdirSync(dir, { recursive: true });
      const layout = place(enriched, spec, registry, rules, archetype);
      const camera = autofit(layout, rules);
      if (!camera) {
        summary.push({ spec: spec.id, archetype, pass: false, reason: 'no camera satisfies the frame + horizon rules' });
        continue;
      }
      const results = checks(layout, camera, enriched, rules);
      const doc = {
        spec: spec.id,
        brief: spec.brief,
        archetype,
        archetypeTitle: ARCHETYPES[archetype].title,
        rulesSource: ARCHETYPES[archetype].source,
        camera,
        table: layout.table,
        objects: layout.objects.map(({ poly, unplaced, ...o }) => ({ ...o, x: +o.x.toFixed(4), z: +o.z.toFixed(4) })),
      };
      const r = await page.evaluate((a) => window.R.render(a), { layout: doc, registry, width: W, height: H });
      for (const [label, px] of Object.entries(r.pixels)) {
        const o = doc.objects.find((x) => x.label === label);
        const occ = px.solo ? 1 - px.visible / px.solo : 1;
        const max = rules.maxOcclusion[o.role] ?? rules.maxOcclusion.other;
        results.push({ id: `occlusion:${label}`, pass: occ <= max, hard: true, detail: `${(occ * 100).toFixed(1)}% hidden (max ${max * 100}%)` });
      }
      const byLayer = { 1: 0, 2: 0, 3: 0 };
      for (const o of doc.objects) byLayer[o.layer] += r.pixels[o.label].visible;
      const total = byLayer[1] + byLayer[2] + byLayer[3];
      results.push({ id: 'visual-mass', pass: true, hard: false, detail: `L1 ${((byLayer[1] / total) * 100).toFixed(0)}% / L2 ${((byLayer[2] / total) * 100).toFixed(0)}% / L3 ${((byLayer[3] / total) * 100).toFixed(0)}% (target 50/30/20, soft)` });

      const pass = results.every((c) => c.pass || !c.hard);
      png(r.labeled, path.join(dir, 'labeled.png'));
      png(r.clean, path.join(dir, 'clean.png'));
      fs.writeFileSync(path.join(dir, 'layout.json'), JSON.stringify(doc, null, 2));
      fs.writeFileSync(path.join(dir, 'report.json'), JSON.stringify({ pass, checks: results }, null, 2));
      summary.push({ spec: spec.id, archetype, pass, failed: results.filter((c) => c.hard && !c.pass).map((c) => `${c.id}: ${c.detail}`) });
      tiles.push({ src: r.labeled, caption: `${spec.id} · ${ARCHETYPES[archetype].title} · ${pass ? 'all hard checks pass' : 'FAILS checks'}`, pass });
      console.log(`${pass ? 'PASS' : 'FAIL'} ${spec.id} ${archetype}`);
      for (const c of results) console.log(`   ${c.pass ? 'ok  ' : c.hard ? 'FAIL' : 'note'} ${c.id}: ${c.detail}`);
    }
  }
  const sheet = await page.evaluate((a) => window.R.contactSheet(a.tiles, 2, 960, 540, 'Tablescape test build: 30° / 50% table horizon'), { tiles });
  png(sheet, path.join(OUT, 'contact-sheet.png'));
  fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(summary, null, 2));
  await browser.close();
  server.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
