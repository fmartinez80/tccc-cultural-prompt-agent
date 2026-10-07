// A grid of generated scenes: image, dish, place, who made it and when.
// Clicking a card opens it large with its brief and prompt.

import { useState } from 'react';

import type { SceneCard } from '../../api.ts';
import { Lightbox, type LightboxState } from '../workspace/Lightbox.tsx';
import styles from './studio.module.css';

function when(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

function place(s: SceneCard): string {
  return [s.region, s.countryLabel ?? s.country].filter(Boolean).join(', ') || 'No brief recorded';
}

export function SceneGallery({ scenes, showBy }: { scenes: SceneCard[]; showBy: boolean }) {
  const [open, setOpen] = useState<LightboxState | null>(null);
  return (
    <>
      <ul className={styles.gallery}>
        {scenes.flatMap((s) =>
          s.images.map((src, i) => (
            <li key={`${s.id}-${i}`} className={styles.card}>
              <button
                type="button"
                className={styles.thumbButton}
                onClick={() => setOpen({ src, alt: s.heroDish ?? 'Scene', caption: <Caption scene={s} showBy={showBy} /> })}
              >
                <img src={src} alt={`${s.heroDish ?? 'Scene'}, ${place(s)}`} loading="lazy" className={styles.thumb} />
              </button>
              <div className={styles.cardBody}>
                <strong className={styles.dish}>{s.heroDish ?? 'Untitled scene'}</strong>
                <span className={styles.meta}>{place(s)}</span>
                <span className={styles.meta}>
                  {showBy && s.by ? `${s.by} · ` : ''}
                  {when(s.createdAt)}
                </span>
              </div>
            </li>
          )),
        )}
      </ul>
      <Lightbox state={open} onClose={() => setOpen(null)} />
    </>
  );
}

function Caption({ scene, showBy }: { scene: SceneCard; showBy: boolean }) {
  return (
    <div className={styles.caption}>
      <strong>{scene.heroDish ?? 'Scene'}</strong> · {place(scene)}
      {scene.occasion ? ` · ${scene.occasion}` : ''} · {when(scene.createdAt)}
      {showBy && scene.by ? ` · ${scene.by}` : ''}
      {scene.prompt && (
        <details className={styles.prompt}>
          <summary>Prompt</summary>
          <p>{scene.prompt}</p>
        </details>
      )}
    </div>
  );
}
