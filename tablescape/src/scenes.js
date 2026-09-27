// Loads scenes from blueprints/ (ErgonomicSpatialLayoutBlueprint) and specs/ (raw SceneSpec).
import fs from 'node:fs';
import path from 'node:path';
import { blueprintToSpec } from './blueprint.js';

export function loadScene(file) {
  const doc = JSON.parse(fs.readFileSync(file, 'utf8'));
  return doc.blueprint ? blueprintToSpec(doc.blueprint, doc.meta) : doc;
}

export function sceneFiles(root) {
  return ['blueprints', 'specs']
    .map((d) => path.join(root, d))
    .filter((d) => fs.existsSync(d))
    .flatMap((d) => fs.readdirSync(d).filter((f) => f.endsWith('.json')).map((f) => path.join(d, f)));
}
