// Home-screen modules: the welcome with its three illustrated features, "How
// It Works" (an autoplaying walk through the six steps), and the product roadmap.

import { Fragment, useEffect, useRef, useState } from 'react';

import { ProductsIllustration, SeasoningIllustration, WorkflowIllustration } from './Illustrations.tsx';
import { ROADMAP } from './roadmap.ts';
import styles from './home.module.css';

// One fish and chips scene builds up across the six steps; ms is how long each plays.
const STEPS = [
  { title: 'Set the brief', text: 'A few requirements: market, region, product, hero meal and occasion.', ms: 4500 },
  { title: 'Time & place', text: 'Where and when the meal happens: home, restaurant, street, celebration.', ms: 4500 },
  { title: 'The meal', text: 'How the dish is prepared and plated in that market.', ms: 4500 },
  { title: 'The sides', text: 'What is served with it, from sides to condiments.', ms: 4500 },
  { title: 'Camera & sketch', text: 'Pick the angle and review a sketch before the final image.', ms: 4500 },
  { title: 'Check your work', text: 'Get the scene with a cultural accuracy check, and come back to review it later.', ms: 7000 },
];

const BRIEF = [
  ['Market', 'United Kingdom'],
  ['Region', 'England'],
  ['Product', 'Coca-Cola Original Taste 330 mL can'],
  ['Hero meal', 'Fish and chips'],
  ['Occasion', 'Weekday lunch'],
];

const FRAMES: { src: string; alt: string; chips: string[] }[] = [
  { src: '', alt: '', chips: [] },
  { src: '/how-it-works/place.jpg', alt: 'A soft, out-of-focus pub interior with a wooden table', chips: ['Time & place', 'Pub', 'Lunchtime', 'Oak table, window light'] },
  { src: '/how-it-works/meal.jpg', alt: 'Battered fish and chips on a plate comes into focus in the pub', chips: ['The meal', 'Beer-battered cod', 'Chunky chips', 'Lemon wedge', 'Stoneware plate'] },
  { src: '/how-it-works/sides.jpg', alt: 'Mushy peas, tartare, curry sauce, malt vinegar, salt and a Coca-Cola can join the plate', chips: ['The sides', 'Mushy peas', 'Tartare sauce', 'Curry sauce', 'Malt vinegar & salt'] },
  { src: '/how-it-works/sketch.jpg', alt: "A pencil sketch of the whole table from the diner's seat", chips: ['Camera & sketch', "Diner's eye 20°", '50 mm', 'About f/5.6'] },
  { src: '/how-it-works/photo.jpg', alt: 'The finished photograph of fish and chips with a Coca-Cola can in a pub', chips: ['Accuracy check 4/4', '✓ Pub fits a weekday lunch', '✓ Classic chippy sides', '✓ Malt vinegar and salt', '✓ Coke fully in view'] },
];

const FEATURES = [
  {
    Art: ProductsIllustration,
    title: 'Real Products, Real-World Scale',
    text: 'Select your exact Coca-Cola SKU and automatically lock in true-to-life dimensions, so food portions, glasses, and packaging are always perfectly proportioned.',
  },
  {
    Art: SeasoningIllustration,
    title: 'Get the Local Details Right',
    text: 'Pairs regional meals with the right plates, napkins, and dining habits so your scene looks genuine to locals.',
  },
  {
    Art: WorkflowIllustration,
    title: 'Fast Results or Deep Flexibility',
    text: 'Generate a finished photo in minutes, or jump into the node workspace to pull out individual scene segments and prompts to use in your own creative workflow.',
  },
];

/** The welcome at the top of home: headline, pitch and three illustrated features (Fernando's layout, 2026-10-07). */
export function Intro() {
  return (
    <section className={styles.intro} aria-label="About Scene Composer">
      <h1 className={styles.introTitle}>Welcome to ProdX Scene Composer</h1>
      <p className={styles.introPitch}>
        Setting the table for great brand stories just got a whole lot easier!
        <br />
        <strong>ProdX Scene Composer</strong> helps creative teams design vibrant, authentic Coca-Cola meal scenes in minutes. Pick your market, select your product SKU, choose your
        menu, and build your scene with confidence.
      </p>
      <ul className={styles.features}>
        {FEATURES.map(({ Art, title, text }) => (
          <li key={title} className={styles.feature}>
            <div className={styles.art}>
              <Art />
            </div>
            <strong className={styles.featureTitle}>{title}</strong>
            <span className={styles.featureText}>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/** The six steps as one autoplaying module (the scene, then the current step's words) with six dots below. Pointing at it or focusing it holds the step. */
export function HowItWorks() {
  const [cur, setCur] = useState(0);
  const [held, setHeld] = useState(false);
  const [reduce] = useState(prefersReducedMotion);
  const swipeX = useRef<number | null>(null);
  const go = (i: number) => setCur((i + STEPS.length) % STEPS.length);

  useEffect(() => {
    if (held || reduce) return;
    const t = window.setTimeout(() => setCur((c) => (c + 1) % STEPS.length), STEPS[cur].ms);
    return () => window.clearTimeout(t);
  }, [cur, held, reduce]);

  const step = STEPS[cur];
  return (
    <section className={styles.how} aria-label="How it works">
      <h2 className={styles.howTitle}>How It Works</h2>
      <div
        className={styles.carousel}
        aria-roledescription="carousel"
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHeld(false);
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') go(cur + 1);
          if (e.key === 'ArrowLeft') go(cur - 1);
        }}
      >
        <div className={styles.howModule}>
          <div
            className={styles.stage}
            onPointerDown={(e) => (swipeX.current = e.clientX)}
            onPointerUp={(e) => {
              if (swipeX.current === null) return;
              const dx = e.clientX - swipeX.current;
              swipeX.current = null;
              if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
            }}
          >
            {FRAMES.map((f, i) => (
              <div key={i} className={styles.frame} data-on={i === cur || undefined} aria-hidden={i !== cur}>
                {i === 0 ? (
                  <div className={styles.brief}>
                    <div className={styles.briefCard}>
                      <div className={styles.briefHead}>The brief</div>
                      <dl className={styles.briefList}>
                        {BRIEF.map(([k, v], j) => (
                          <Fragment key={k}>
                            <dt>{k}</dt>
                            <dd style={{ animationDelay: `${j * 250}ms` }}>{v}</dd>
                          </Fragment>
                        ))}
                      </dl>
                    </div>
                  </div>
                ) : (
                  <img src={f.src} alt={f.alt} loading={i === 1 ? 'eager' : 'lazy'} draggable={false} />
                )}
                {i === FRAMES.length - 1 && (
                  <>
                    <div className={styles.wipe}>
                      <img src={FRAMES[4].src} alt="" draggable={false} />
                    </div>
                    <div className={styles.wipeEdge} />
                  </>
                )}
                {f.chips.length > 0 && (
                  <div className={styles.chips}>
                    {f.chips.map((c, j) => (
                      <span
                        key={c}
                        className={`${styles.chip} ${j === 0 ? styles.chipKey : i === FRAMES.length - 1 ? styles.chipOk : ''}`}
                        style={{ animationDelay: `${(i === FRAMES.length - 1 ? 2000 : 0) + j * (i === FRAMES.length - 1 ? 300 : 120)}ms` }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.caption} aria-live="polite">
            <span className={styles.captionNo} aria-hidden>
              {cur + 1}
            </span>
            <strong className={styles.captionTitle}>{step.title}</strong>
            <p className={styles.captionText}>{step.text}</p>
          </div>
        </div>
        <div className={styles.dots} role="group" aria-label="Steps">
          {STEPS.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={styles.dot}
              aria-label={`Step ${i + 1}: ${s.title}`}
              aria-current={i === cur ? 'step' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
      <p className={styles.note}>
        At every step, the cultural knowledge base suggests options and explains them,
        <br />
        so you can make informed decisions about regions you may not know well.
      </p>
    </section>
  );
}

export function Roadmap() {
  return (
    <section className={styles.module} aria-label="Roadmap">
      <div className={styles.head}>
        <h2 className={styles.title}>Roadmap</h2>
      </div>
      <ol className={styles.phases}>
        {ROADMAP.map((p) => (
          <li key={p.title} className={styles.phase} data-current={p.current || undefined}>
            <div className={styles.phaseHead}>
              <strong className={styles.phaseTitle}>{p.title}</strong>
              <span className={styles.phaseLabel}>{p.current ? `${p.label} · Now` : p.label}</span>
            </div>
            <ul className={styles.phaseItems}>
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
