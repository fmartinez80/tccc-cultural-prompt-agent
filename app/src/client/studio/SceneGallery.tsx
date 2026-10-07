// A grid of generated scenes: image, dish, place, who made it and when.
// Clicking a card opens it large with its brief and prompt.

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

import type { SceneCard } from '../../api.ts';
import { OCCASION_LABELS } from '../intake/types.ts';
import { Lightbox, type LightboxState } from '../workspace/Lightbox.tsx';
import styles from './studio.module.css';

function when(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

function place(s: SceneCard): string {
  return [s.region, s.countryLabel ?? s.country].filter(Boolean).join(', ') || 'No brief recorded';
}

/** `grid` wraps every card; `carousel` is one row that scrolls sideways with arrow buttons. */
export function SceneGallery({ scenes, showBy, layout = 'grid' }: { scenes: SceneCard[]; showBy: boolean; layout?: 'grid' | 'carousel' }) {
  const [open, setOpen] = useState<LightboxState | null>(null);
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: -1 | 1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.9, behavior: 'smooth' });
  const list = (
      <ul ref={track} className={layout === 'carousel' ? styles.carouselTrack : styles.gallery}>
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
  );
  return (
    <>
      {layout === 'carousel' ? (
        <div className={styles.carousel}>
          <button type="button" className={styles.carouselArrow} aria-label="Previous scenes" onClick={() => scroll(-1)}>
            <ArrowLeft size={28} aria-hidden />
          </button>
          {list}
          <button type="button" className={styles.carouselArrow} aria-label="More scenes" onClick={() => scroll(1)}>
            <ArrowRight size={28} aria-hidden />
          </button>
        </div>
      ) : (
        list
      )}
      <Lightbox state={open} onClose={() => setOpen(null)} />
    </>
  );
}

function Caption({ scene, showBy }: { scene: SceneCard; showBy: boolean }) {
  return (
    <div className={styles.caption}>
      <strong>{scene.heroDish ?? 'Scene'}</strong> · {place(scene)}
      {scene.occasion ? ` · ${OCCASION_LABELS[scene.occasion] ?? scene.occasion}` : ''} · {when(scene.createdAt)}
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
