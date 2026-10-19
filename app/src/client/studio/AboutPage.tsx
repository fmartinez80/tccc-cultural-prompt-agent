// About Us: what the tool does, the files behind it and the markets it covers.
// A sticky sub-navigation sits in the rail column (desktop) or along the top
// (narrow screens); it scrolls to each section and follows the reader.

import { useEffect, useRef, useState } from 'react';
import { flagSrc } from '../lib/flags.tsx';
import { ANATOMY, FILES, MARKETS, STATS, STEPS } from './about.ts';
import styles from './about.module.css';

const SECTIONS = [
  { id: 'about-overview', label: 'Overview' },
  { id: 'about-how', label: 'How it works' },
  { id: 'about-files', label: 'The files' },
  { id: 'about-markets', label: 'Markets' },
  { id: 'about-checked', label: 'Built to be checked' },
] as const;
type SectionId = (typeof SECTIONS)[number]['id'];

/** The section nearest the top of the viewport is the current one. */
function useCurrentSection(): SectionId {
  const [current, setCurrent] = useState<SectionId>(SECTIONS[0].id);
  useEffect(() => {
    const onScroll = () => {
      let hit: SectionId = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.3) hit = s.id;
      }
      // At the very bottom the last section is current even when it is short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        hit = SECTIONS[SECTIONS.length - 1].id;
      }
      setCurrent(hit);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return current;
}

export function AboutPage() {
  const current = useCurrentSection();
  const navRef = useRef<HTMLElement>(null);

  // On narrow screens the nav is a horizontal strip: keep the current item in view.
  useEffect(() => {
    const nav = navRef.current;
    const item = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!nav || !item || nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollTo({ left: item.offsetLeft - 16, behavior: 'smooth' });
  }, [current]);

  // The app routes on the URL hash, so section links scroll instead of changing it.
  const jump = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.layout}>
      <div className={styles.navColumn}>
        <nav ref={navRef} className={styles.subnav} aria-label="About Us sections">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={styles.subnavItem}
              aria-current={current === s.id ? 'true' : undefined}
              onClick={() => jump(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>

      <article className={styles.content}>
        <section id="about-overview" className={styles.section}>
          <p className={styles.eyebrow}>About Us</p>
          <h1 className={styles.title}>
            Every scene starts with a place,
            <br />
            not a prompt.
          </h1>
          <p className={styles.lede}>
            SCENE COMPOSER builds photoreal dining scenes that hold up to a local eye. Behind every image is a cultural
            knowledge base written dish by dish, region by region, and a pipeline that checks its own work before and
            after anything is generated.
          </p>
          <dl className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statLabel}>{s.label}</dt>
                <dd className={styles.statValue}>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="about-how" className={styles.section}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <ol className={styles.steps}>
            {STEPS.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden>
                  {i + 1}
                </span>
                <div>
                  <h3 className={styles.itemTitle}>{step.title}</h3>
                  <p className={styles.body}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="about-files" className={styles.section}>
          <h2 className={styles.sectionTitle}>The files behind every scene</h2>
          <p className={styles.lede}>The knowledge base is a library of structured Markdown files. Each one has a single job.</p>

          <div className={styles.fileBlock}>
            <h3 className={styles.itemTitle}>Country and regional files</h3>
            <p className={styles.body}>
              One per market, with regional files where the food genuinely changes. Every file follows the same anatomy:
            </p>
            <dl className={styles.anatomy}>
              {ANATOMY.map((a) => (
                <div key={a.term} className={styles.anatomyRow}>
                  <dt className={styles.anatomyTerm}>{a.term}</dt>
                  <dd className={styles.body}>{a.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.files}>
            {FILES.map((f) => (
              <div key={f.title} className={styles.file}>
                <h3 className={styles.itemTitle}>{f.title}</h3>
                {f.file && <p className={styles.fileName}>{f.file}</p>}
                <p className={styles.body}>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about-markets" className={styles.section}>
          <h2 className={styles.sectionTitle}>20 markets, 120+ regions and zones</h2>
          <p className={styles.lede}>
            Each zone records its own dishes, venues, architecture and light, along with local rules such as
            halal-by-default regions.
          </p>
          <ul className={styles.markets}>
            {MARKETS.map((m) => (
              <li key={m.name} className={styles.market}>
                <div className={styles.marketHead}>
                  <img className={styles.flag} src={flagSrc(m.country)} alt="" width={36} height={27} loading="lazy" />
                  <div>
                    <h3 className={styles.marketName}>{m.name}</h3>
                    <p className={styles.marketStructure}>{m.structure}</p>
                  </div>
                </div>
                <p className={styles.marketZones}>{m.zones.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about-checked" className={styles.section}>
          <h2 className={styles.sectionTitle}>Built to be checked</h2>
          <p className={styles.body}>
            Every country file is written to be reviewed and refined by local experts. Claims carry confidence tags.
            Structural decisions, like whether a region earns its own file, are recommendations until a person signs
            off.
          </p>
          <h3 className={styles.itemTitle}>Where we are</h3>
          <p className={styles.body}>
            SCENE COMPOSER is in an invite-only alpha: a launch set of products, one meal per scene, 16:9 images. More
            formats, more dishes per table and more products follow in later phases.
          </p>
        </section>
      </article>
    </div>
  );
}
