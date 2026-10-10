// Home-screen modules: the welcome with its three illustrated features, "How
// It Works" (the six steps), and the product roadmap.


import { ProductsIllustration, SeasoningIllustration, WorkflowIllustration } from './Illustrations.tsx';
import { ROADMAP } from './roadmap.ts';
import styles from './home.module.css';

const STEPS = [
  { title: 'Set the brief', text: 'A few requirements: market, region, product, hero meal and occasion.' },
  { title: 'Time & place', text: 'Where and when the meal happens: home, restaurant, street, celebration.' },
  { title: 'The meal', text: 'How the dish is prepared and plated in that market.' },
  { title: 'The sides', text: 'What is served with it, from sides to condiments.' },
  { title: 'Camera & sketch', text: 'Pick the angle and review a sketch before the final image.' },
  { title: 'Check your work', text: 'Get the scene with a cultural accuracy check, and come back to review it later.' },
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
    </section>
  );
}

/** The three illustrated features, under the way into a new scene. */
export function Features() {
  return (
    <section aria-label="What it does">
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

/** The six steps as tiles under a centred heading, with the knowledge-base note. */
export function HowItWorks() {
  return (
    <section className={styles.how} aria-label="How it works">
      <h2 className={styles.howTitle}>How It Works</h2>
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li key={s.title} className={styles.step}>
            <span className={styles.stepNo} aria-hidden>
              {i + 1}
            </span>
            <div className={styles.stepHead}>
              <strong className={styles.stepTitle}>{s.title}</strong>
            </div>
            <p className={styles.stepText}>{s.text}</p>
          </li>
        ))}
      </ol>
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
