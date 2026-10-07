// Two home-screen modules: "How it works" (a visual overview of the steps for
// new users, which can be folded away) and the product roadmap.

import { CheckCheck, ChefHat, ClipboardList, Eye, MapPin, Salad } from 'lucide-react';
import { useState } from 'react';

import { ROADMAP } from './roadmap.ts';
import styles from './home.module.css';

const STEPS = [
  { icon: ClipboardList, title: 'Set the brief', text: 'A few requirements: market, region, product, hero meal and occasion.' },
  { icon: MapPin, title: 'Time & place', text: 'Where and when the meal happens: home, restaurant, street, celebration.' },
  { icon: ChefHat, title: 'The meal', text: 'How the dish is prepared and plated in that market.' },
  { icon: Salad, title: 'The sides', text: 'What is served with it, from sides to condiments.' },
  { icon: Eye, title: 'Camera & sketch', text: 'Pick the angle and review a sketch before the final image.' },
  { icon: CheckCheck, title: 'Check your work', text: 'Get the scene with a cultural accuracy check, and come back to review it later.' },
];

const FOLD_KEY = 'scene-composer:how-it-works-folded';

function readFolded(): boolean {
  try {
    return localStorage.getItem(FOLD_KEY) === '1';
  } catch {
    return false;
  }
}

export function HowItWorks() {
  const [folded, setFolded] = useState(readFolded);
  const toggle = () => {
    const next = !folded;
    setFolded(next);
    try {
      localStorage.setItem(FOLD_KEY, next ? '1' : '0');
    } catch {
      // Private mode: the panel just reopens next visit.
    }
  };
  return (
    <section className={styles.module} aria-label="How it works">
      <div className={styles.head}>
        <h2 className={styles.title}>How it works</h2>
        <button type="button" className={styles.fold} onClick={toggle} aria-expanded={!folded}>
          {folded ? 'Show' : 'Hide'}
        </button>
      </div>
      {!folded && (
        <>
          <ol className={styles.steps}>
            {STEPS.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.stepNo} aria-hidden>
                  {i + 1}
                </span>
                <s.icon size={28} aria-hidden className={styles.stepIcon} />
                <strong className={styles.stepTitle}>{s.title}</strong>
                <span className={styles.stepText}>{s.text}</span>
              </li>
            ))}
          </ol>
          <p className={styles.note}>
            At every step, the cultural knowledge base suggests options and explains them, so you can make informed decisions
            about regions you may not know well.
          </p>
        </>
      )}
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
