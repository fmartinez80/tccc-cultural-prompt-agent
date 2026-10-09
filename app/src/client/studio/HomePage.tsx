// The home screen everyone lands on after signing in (the welcome and its
// features, how it works, the way into a new scene, a carousel of the latest
// scenes), plus the Insights and What's New pages.

import { ArrowRight, Clock, Images } from 'lucide-react';
import { useState } from 'react';

import type { StudioData } from '../../api.ts';
import { OCCASION_LABELS, SESSION_LINE } from '../intake/types.ts';
import { Flag } from '../lib/flags.tsx';
import { titleCase } from '../lib/titleCase.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { EmptyState } from '../ui/EmptyState.tsx';
import { SegmentedControl } from '../ui/SegmentedControl.tsx';
import { SkeletonBlock, SkeletonText } from '../ui/Skeleton.tsx';
import { Features, HowItWorks, Intro, Roadmap } from './HomeExtras.tsx';
import { SceneGallery } from './SceneGallery.tsx';
import { BarList } from './SnapshotPage.tsx';
import home from './home.module.css';
import styles from './studio.module.css';

type HomePageProps = {
  name: string;
  draftInProgress: boolean;
  onNewScene: () => void;
  onContinue: () => void;
  onSnapshot: () => void;
};

/** Regions with scenes, each labeled with its country; a country's scenes with no region count as the country itself. */
function regionRows(data: StudioData) {
  const rows = data.byCountry.flatMap((c) => {
    const inRegions = c.regions.reduce((n, r) => n + r.scenes, 0);
    const rest = c.scenes - inRegions;
    return [
      ...c.regions.map((r) => ({ key: `${c.country}-${r.region}`, label: r.region, sub: c.label, icon: <Flag country={c.country} label={c.label} />, value: r.scenes })),
      ...(rest > 0 ? [{ key: c.country, label: c.label, icon: <Flag country={c.country} label={c.label} />, value: rest }] : []),
    ];
  });
  return rows.sort((a, b) => b.value - a.value).slice(0, 6);
}

function ProjectData({ onSnapshot }: { onSnapshot: () => void }) {
  const query = trpc.studio.useQuery(undefined, { refetchInterval: 60_000 });
  const [by, setBy] = useState<'meals' | 'regions'>('meals');
  const data = query.data;
  return (
    <section className={`${styles.panel} ${styles.homeData}`} aria-label="Project data">
      <div className={styles.panelHead}>
        <h2 className={styles.panelTitle}>Project Data</h2>
        <SegmentedControl
          aria-label="Show most popular"
          value={by}
          onChange={(v) => setBy(v as 'meals' | 'regions')}
          options={[
            { value: 'meals', label: 'Meals' },
            { value: 'regions', label: 'Regions' },
          ]}
        />
      </div>
      {query.isError && (
        <Alert tone="error" title="Couldn't load the project data">
          {query.error.message}
        </Alert>
      )}
      {query.isLoading && <SkeletonText rows={6} />}
      {data && (
        <>
          <p className={styles.muted}>
            {data.totals.scenes.toLocaleString()} scene{data.totals.scenes === 1 ? '' : 's'} across {data.totals.countries}{' '}
            {data.totals.countries === 1 ? 'country' : 'countries'} by {data.totals.people} {data.totals.people === 1 ? 'person' : 'people'}
          </p>
          <BarList
            bare
            title={by === 'meals' ? 'Most popular meals' : 'Most popular regions'}
            rows={
              by === 'meals'
                ? data.topDishes.slice(0, 6).map((d) => ({
                    key: `${d.countryId}-${d.dish}`,
                    label: titleCase(d.dish),
                    sub: d.country,
                    icon: <Flag country={d.countryId} label={d.country} />,
                    value: d.scenes,
                  }))
                : regionRows(data)
            }
          />
          <button type="button" className={styles.textLink} onClick={onSnapshot}>
            See the global snapshot <ArrowRight size={14} aria-hidden />
          </button>
        </>
      )}
    </section>
  );
}

function GetStarted({ draftInProgress, onNewScene, onContinue }: Pick<HomePageProps, 'draftInProgress' | 'onNewScene' | 'onContinue'>) {
  const [confirming, setConfirming] = useState(false);
  return (
    <section className={`${styles.panel} ${styles.getStarted}`} aria-label="Build a scene">
      {confirming ? (
        <>
          <span className={styles.heroConfirm}>This clears the scene you're working on.</span>
          <div className={styles.heroActions}>
            <Button onPress={() => setConfirming(false)}>Cancel</Button>
            <Button onPress={onNewScene}>Start new</Button>
          </div>
        </>
      ) : (
        <>
          <p className={styles.getStartedText}>Build a culturally grounded scene from a brief.</p>
          <div className={styles.heroActions}>
            {draftInProgress && <Button onPress={onContinue}>Continue your scene</Button>}
            <Button onPress={() => (draftInProgress ? setConfirming(true) : onNewScene())}>
              {draftInProgress ? 'Start a new scene' : 'Get Started'}
            </Button>
          </div>
          <p className={styles.sessionLine}>
            <Clock size={16} aria-hidden />
            {SESSION_LINE}
          </p>
        </>
      )}
    </section>
  );
}

function Occasions() {
  const query = trpc.studio.useQuery(undefined, { refetchInterval: 60_000 });
  const rows = (query.data?.byOccasion ?? []).map((o) => ({ key: o.occasion, label: OCCASION_LABELS[o.occasion] ?? o.occasion, value: o.scenes }));
  return (
    <section className={styles.panel} aria-label="Occasions">
      <h2 className={styles.panelTitle}>Occasions</h2>
      {query.isLoading ? <SkeletonText rows={3} /> : <BarList bare title="Scenes by occasion" rows={rows} />}
    </section>
  );
}

function Gallery() {
  const query = trpc.studio.useQuery(undefined, { refetchInterval: 60_000 });
  return (
    <section className={styles.panel} aria-label="Gallery">
      <h2 className={styles.titleBar}>Gallery</h2>
      {query.isLoading && <SkeletonBlock height={180} />}
      {query.data &&
        (query.data.recent.length ? (
          <SceneGallery scenes={query.data.recent} showBy layout="carousel" />
        ) : (
          <EmptyState icon={<Images size={28} />} title="No scenes yet" hint="Finished scenes from everyone appear here." />
        ))}
    </section>
  );
}

export function HomePage({ draftInProgress, onNewScene, onContinue }: Omit<HomePageProps, 'onSnapshot'>) {
  return (
    <div className={styles.page}>
      <Intro />
      <GetStarted draftInProgress={draftInProgress} onNewScene={onNewScene} onContinue={onContinue} />
      <Features />
      <HowItWorks />
      <Gallery />
    </div>
  );
}

/** Insights: the team's most popular meals and regions, and scenes by occasion. */
export function InsightsPage({ onSnapshot }: { onSnapshot: () => void }) {
  return (
    <div className={styles.page}>
      <h1 className={home.pageTitle}>Insights</h1>
      <ProjectData onSnapshot={onSnapshot} />
      <Occasions />
    </div>
  );
}

/** What's New: the product roadmap. */
export function WhatsNewPage() {
  return (
    <div className={styles.page}>
      <h1 className={home.pageTitle}>What's New</h1>
      <Roadmap />
    </div>
  );
}
