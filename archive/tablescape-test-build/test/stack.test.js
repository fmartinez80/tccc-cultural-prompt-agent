import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveStack, layoutStack } from '../src/stack.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const reg = read('registry/objects.json');
const stacks = read('rules/serving-stacks.json');
const ramekin = (label, share) => ({ label, role: 'SAUCE', round: true, r: reg['ramekin-small'].diameter / 2, share });
const dish = (stack, food = 'food-bun-sandwich') => ({ stackSpec: stack, food });

test('default stack is a plate with no carrier', () => {
  assert.deepEqual(resolveStack({}, stacks), { vessel: 'plate', carrier: null });
  const s = layoutStack(dish({}), [], stacks, reg);
  assert.equal(s.vesselRegistry, 'plate-round');
  assert.deepEqual(s.footprint, { round: true, r: reg['plate-round'].diameter / 2 });
});

test('a carrier only takes the vessels it is built for', () => {
  assert.throws(() => resolveStack({ stack: { vessel: 'board', carrier: 'tray' } }, stacks), /does not carry a board/);
  assert.throws(() => resolveStack({ stack: { vessel: 'platter' } }, stacks), /unknown vessel/);
});

const side = (label, registry) => ({ label, role: 'SIDE', round: true, r: reg[registry].diameter / 2 });

test('capacity: a bowl holds only the entree, a plate at most 2 condiments', () => {
  assert.throws(() => layoutStack(dish({ vessel: 'bowl' }, null), [ramekin('C1')], stacks, reg), /bowl holds 1 entree; no room for C1/);
  assert.throws(() => layoutStack(dish({}, null), [ramekin('C1'), ramekin('C2'), ramekin('C3')], stacks, reg), /no room for C3 \(condiment\)/);
});

test('a plate holds the entree plus two small sides, packed inside the rim', () => {
  const s = layoutStack(dish({}), [side('S1', 'portion-small'), side('S2', 'portion-small')], stacks, reg);
  const R = reg['plate-round'].diameter / 2;
  for (const p of s.placements) assert.ok(Math.hypot(p.lx, p.lz) + reg['portion-small'].diameter / 2 <= R);
  assert.ok(s.foodOffsetX - reg['food-bun-sandwich'].diameter / 2 >= -R, 'the entree stays on the plate');
  assert.throws(() => layoutStack(dish({}), [side('S1', 'portion-small'), side('S2', 'portion-small'), side('S3', 'portion-small')], stacks, reg), /no room for S3 \(small side\)/);
  assert.throws(() => layoutStack(dish({}), [side('S1', 'bowl-side-small')], stacks, reg), /no room for S1 \(side\)/);
});

test('a board holds the entree, one side of any size and two condiments', () => {
  const s = layoutStack(dish({ vessel: 'board' }, 'food-choripan'), [side('S1', 'portion-small'), ramekin('C1')], stacks, reg);
  assert.equal(s.placements.length, 2);
  assert.throws(() => layoutStack(dish({ vessel: 'board' }), [side('S1', 'portion-small'), side('S2', 'portion-small')], stacks, reg), /no room for S2/);
});

test('real size: food plus shared items must fit across the vessel', () => {
  assert.throws(() => layoutStack(dish({}, 'food-choripan'), [ramekin('C1'), ramekin('C2')], stacks, reg), /the plate is 27 cm across/);
});

test('carrier: shared items go on the carrier by default, and the vessel shifts to make room', () => {
  const s = layoutStack(dish({ vessel: 'plate', carrier: 'tray' }), [ramekin('C1')], stacks, reg);
  assert.equal(s.carrierRegistry, 'carrier-tray');
  assert.equal(s.placements[0].host, undefined);
  assert.ok(s.vesselOffsetX < 0 && s.placements[0].lx > 0);
  assert.throws(() => layoutStack(dish({}), [ramekin('C1', 'carrier')], stacks, reg), /has none/);
});
