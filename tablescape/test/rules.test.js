import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { enrich, place, autofit, checks, rulesFor, ARCHETYPES } from '../src/solve.js';
import { loadScene, sceneFiles, loadRules } from '../src/scenes.js';
import { blueprintToSpec } from '../src/blueprint.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const registry = read('registry/objects.json');
const baseRules = loadRules(ROOT);

for (const f of sceneFiles(ROOT)) {
  const spec = loadScene(f);
  const rules = rulesFor(spec, baseRules);
  for (const archetype of spec.layouts || Object.keys(ARCHETYPES)) {
    test(`${spec.id} / ${archetype}: every hard rule passes before render`, () => {
      const enriched = enrich(spec, rules);
      const layout = place(enriched, spec, registry, rules, archetype);
      const camera = autofit(layout, rules);
      assert.ok(camera, 'a camera satisfies the frame and 50% table-horizon rules');
      const failed = checks(layout, camera, enriched, rules).filter((c) => c.hard && !c.pass);
      assert.deepEqual(failed, []);
    });
  }
}

test('odd/even: an even brief gets exactly one injected accent when auto is on', () => {
  const spec = { ...loadScene(path.join(ROOT, 'blueprints/scene-1-philly.json')), accompaniments: [], oddEvenAuto: true };
  const e = enrich(spec, baseRules);
  assert.equal(e.nBrief, 2);
  assert.equal(e.nFinal, 3);
  assert.equal(e.items.filter((i) => i.injected).length, 1);
});

test('deterministic: same spec gives the same layout', () => {
  const spec = loadScene(path.join(ROOT, 'blueprints/scene-3-uy.json'));
  const rules = rulesFor(spec, baseRules);
  const run = () => JSON.stringify(place(enrich(spec, rules), spec, registry, rules, 'clock-face').objects.map((o) => [o.label, o.x, o.z, o.yaw]));
  assert.equal(run(), run());
});

test('blueprint: ON_BOARD condiment shares the main vessel; clock positions map to hours', () => {
  const spec = loadScene(path.join(ROOT, 'blueprints/scene-3-uy.json'));
  assert.deepEqual(spec.entree.stack, { vessel: 'board' });
  assert.equal(spec.accompaniments.find((a) => a.text === 'chimichurri').share, 'vessel');
  assert.equal(spec.sku.clock, 1.5);
  assert.ok(spec.accompaniments.find((a) => a.text === 'chimichurri').onBase);
  assert.equal(spec.props[0].clock, 4.5);
});

test('blueprint: modes that are not built yet fail loudly', () => {
  const doc = JSON.parse(fs.readFileSync(path.join(ROOT, 'blueprints/scene-1-philly.json'), 'utf8'));
  assert.throws(() => blueprintToSpec({ ...doc.blueprint, table_dining_mode: 'SHARED_FEAST_FAMILY_STYLE' }, doc.meta), /not built yet/);
});
