// A grid of generated scenes: image, dish, place, who made it and when.
// Clicking a card opens it large with its brief and prompt, or, where the page
// passes onOpenScene (My Projects), reopens the whole session it came from.

import { ArrowLeft, ArrowRight, ImageOff, RotateCw } from 'lucide-react';
import { useRef, useState } from 'react';

import type { SceneCard } from '../../api.ts';
import { OCCASION_LABELS } from '../intake/types.ts';
import { Flag } from '../lib/flags.tsx';
import { titleCase } from '../lib/titleCase.ts';
import { Lightbox, type LightboxState } from '../workspace/Lightbox.tsx';
import styles from './studio.module.css';

function when(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

function dishName(s: SceneCard): string {
  return s.heroDish ? titleCase(s.heroDish) : 'Untitled scene';
}

function place(s: SceneCard): string {
  return [s.region, s.countryLabel ?? s.country].filter(Boolean).join(', ') || 'No brief recorded';
}

/** `grid` wraps every card; `carousel` is one row that scrolls sideways with arrow buttons. */
export function SceneGallery({
  scenes,
  showBy,
  layout = 'grid',
  onOpenScene,
}: {
  scenes: SceneCard[];
  showBy: boolean;
  layout?: 'grid' | 'carousel';
  /** Tries to reopen the scene's session; resolves false when there is none, and the image opens large instead. */
  onOpenScene?: (scene: SceneCard) => Promise<boolean>;
}) {
  const [open, setOpen] = useState<LightboxState | null>(null);
  const [opening, setOpening] = useState<string | null>(null);
  const show = async (s: SceneCard, src: string) => {
    if (onOpenScene) {
      setOpening(s.id);
      const reopened = await onOpenScene(s).catch(() => false);
      setOpening(null);
      if (reopened) return;
    }
    setOpen({ src, alt: dishName(s), caption: <Caption scene={s} showBy={showBy} noSession={!!onOpenScene && s.kind === 'scene'} /> });
  };
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: -1 | 1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.9, behavior: 'smooth' });
  const list = (
      <ul ref={track} className={layout === 'carousel' ? styles.carouselTrack : styles.gallery}>
        {scenes.flatMap((s) =>
          s.images.map((src, i) => (
            <li key={`${s.id}-${i}`} className={styles.card}>
              <GalleryThumb
                src={src}
                alt={`Gallery item: ${dishName(s)}${s.by ? `, ${s.by}` : ''}`}
                busy={opening === s.id}
                disabled={opening !== null}
                onOpen={() => void show(s, src)}
              />
              <div className={styles.cardBody}>
                <div className={styles.cardTitleRow}>
                  <strong className={styles.dish}>{dishName(s)}</strong>
                  {s.country && <Flag country={s.country} label={s.countryLabel ?? s.country} />}
                </div>
                <span className={styles.meta}>
                  {showBy && s.by ? `${s.by} · ` : ''}
                  {when(s.createdAt)}
                  {s.takes > 1 ? ` · ${s.takes} takes` : ''}
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
          <button type="button" className={styles.carouselArrow} aria-label="Previous scenes" title="Previous scenes" onClick={() => scroll(-1)}>
            <ArrowLeft size={28} aria-hidden />
          </button>
          {list}
          <button type="button" className={styles.carouselArrow} aria-label="Next scenes" title="Next scenes" onClick={() => scroll(1)}>
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

/**
 * One gallery picture: a shimmer while it loads, and a plain "couldn't load"
 * with a retry when the stored image doesn't come back (instead of an empty
 * beige box).
 */
function GalleryThumb({
  src,
  alt,
  busy,
  disabled,
  onOpen,
}: {
  src: string;
  alt: string;
  busy: boolean;
  disabled: boolean;
  onOpen: () => void;
}) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  const url = attempt ? `${src}${src.includes('?') ? '&' : '?'}retry=${attempt}` : src;
  if (state === 'error') {
    return (
      <div className={styles.thumbError} role="group" aria-label={`${alt}, couldn't load`}>
        <ImageOff size={22} aria-hidden />
        <span>Couldn't load this image.</span>
        <button
          type="button"
          className={styles.retry}
          onClick={() => {
            setState('loading');
            setAttempt((n) => n + 1);
          }}
        >
          <RotateCw size={14} aria-hidden />
          Try again
        </button>
      </div>
    );
  }
  return (
    <button
      type="button"
      className={styles.thumbButton}
      data-loading={state === 'loading' || undefined}
      aria-busy={busy || undefined}
      disabled={disabled}
      onClick={onOpen}
    >
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className={styles.thumb}
        onLoad={() => setState('loaded')}
        onError={() => setState('error')}
      />
    </button>
  );
}

function Caption({ scene, showBy, noSession }: { scene: SceneCard; showBy: boolean; noSession?: boolean }) {
  return (
    <div className={styles.caption}>
      {noSession && <p className={styles.captionNote}>This scene was made before whole sessions were saved, so only the image and prompt are kept.</p>}
      <strong>{dishName(scene)}</strong> · {place(scene)}
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
