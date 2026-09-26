import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { enrich, place, autofit, checks, ARCHETYPES } from '../src/solve.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const registry = read('registry/objects.json');
const rules = read('rules/rules.json');

for (const f of fs.readdirSync(path.join(ROOT, 'specs'))) {
  const spec = read(`specs/${f}`);
  for (const archetype of Object.keys(ARCHETYPES)) {
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

test('odd/even: an even brief gets exactly one injected accent', () => {
  const spec = read('specs/scene-1-philly.json');
  const e = enrich(spec, rules);
  assert.equal(e.nBrief, 2);
  assert.equal(e.nFinal, 3);
  assert.equal(e.items.filter((i) => i.injected).length, 1);
});

test('deterministic: same spec gives the same layout', () => {
  const spec = read('specs/scene-3-uy.json');
  const run = () => JSON.stringify(place(enrich(spec, rules), spec, registry, rules, 'phi-diagonal').objects.map((o) => [o.label, o.x, o.z, o.yaw]));
  assert.equal(run(), run());
});
