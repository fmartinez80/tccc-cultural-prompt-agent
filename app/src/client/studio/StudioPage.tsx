// The shared Studio: which regions are being visualized, a light view of
// activity, and the latest scenes from everyone.

import { ArrowRight, Images, Plus } from 'lucide-react';
import { useState } from 'react';

import type { StudioData } from '../../api.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { EmptyState } from '../ui/EmptyState.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { SceneGallery } from './SceneGallery.tsx';
import styles from './studio.module.css';

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value.toLocaleString()}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

/** Horizontal bars, one per row, scaled to the largest value. Each row is labeled with its number. */
function BarList({ rows, title }: { rows: Array<{ key: string; label: string; sub?: string; value: number }>; title: string }) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  return (
    <section className={styles.panel} aria-label={title}>
      <h2 className={styles.panelTitle}>{title}</h2>
      {rows.length === 0 ? (
        <p className={styles.muted}>Nothing yet.</p>
      ) : (
        <ol className={styles.bars}>
          {rows.map((r) => (
            <li key={r.key} className={styles.barRow} title={`${r.label}: ${r.value} scene${r.value === 1 ? '' : 's'}`}>
              <span className={styles.barLabel}>
                {r.label}
                {r.sub && <span className={styles.barSub}>{r.sub}</span>}
              </span>
              <span className={styles.barTrack}>
                <span className={styles.bar} style={{ width: `${(r.value / max) * 100}%` }} />
              </span>
              <span className={styles.barValue}>{r.value}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

/** Scenes per week for the last 12 weeks, as columns; hover a column for its numbers. */
function Weekly({ weeks }: { weeks: StudioData['weekly'] }) {
  const max = Math.max(1, ...weeks.map((w) => w.scenes));
  const fmt = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString(undefined, { day: 'numeric', month: 'short', timeZone: 'UTC' });
  return (
    <section className={styles.panel} aria-label="Scenes per week">
      <h2 className={styles.panelTitle}>Scenes per week</h2>
      <div className={styles.columns} role="list">
        {weeks.map((w) => (
          <div
            key={w.weekStart}
            role="listitem"
            className={styles.column}
            title={`Week of ${fmt(w.weekStart)}: ${w.scenes} scene${w.scenes === 1 ? '' : 's'} by ${w.people} ${w.people === 1 ? 'person' : 'people'}`}
          >
            <span className={styles.columnValue}>{w.scenes > 0 ? w.scenes : ''}</span>
            <span className={styles.columnBar} style={{ height: `${(w.scenes / max) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className={styles.columnAxis}>
        <span>{weeks[0] ? fmt(weeks[0].weekStart) : ''}</span>
        <span>This week</span>
      </div>
    </section>
  );
}

/** The home screen's call to action. Starting a new scene clears the draft, so with one in progress it asks first. */
function NewScene({ draftInProgress, onNewScene, onContinue }: StudioPageProps) {
  const [confirming, setConfirming] = useState(false);
  return (
    <section className={styles.hero} aria-label="Build a scene">
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Studio</h1>
        <p className={styles.heroLead}>What the team is visualizing: regions, dishes, activity and the latest scenes.</p>
      </div>
      <div className={styles.heroActions}>
        {confirming ? (
          <>
            <span className={styles.heroConfirm}>This clears the scene you're working on.</span>
            <Button onPress={() => setConfirming(false)}>Cancel</Button>
            <Button variant="primary" onPress={onNewScene}>
              Start new
            </Button>
          </>
        ) : (
          <>
            {draftInProgress && (
              <Button icon={<ArrowRight size={16} aria-hidden />} onPress={onContinue}>
                Continue your scene
              </Button>
            )}
            <Button
              variant="primary"
              icon={<Plus size={16} aria-hidden />}
              onPress={() => (draftInProgress ? setConfirming(true) : onNewScene())}
            >
              Build a new scene
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

type StudioPageProps = {
  draftInProgress: boolean;
  onNewScene: () => void;
  onContinue: () => void;
};

export function StudioPage(props: StudioPageProps) {
  const query = trpc.studio.useQuery(undefined, { refetchInterval: 60_000 });
  const data = query.data;
  return (
    <div className={styles.page}>
      <NewScene {...props} />
      {query.isError && (
        <Alert tone="error" title="Couldn't load the studio">
          {query.error.message}
        </Alert>
      )}
      {query.isLoading && <SkeletonBlock height={240} />}
      {data && (
        <>
          <div className={styles.stats}>
            <Stat value={data.totals.scenes} label="scenes generated" />
            <Stat value={data.totals.countries} label="countries" />
            <Stat value={data.totals.people} label="people" />
          </div>
          <div className={styles.grid}>
            <BarList
              title="Scenes by country"
              rows={data.byCountry.map((c) => ({
                key: c.country,
                label: c.label,
                ...(c.regions.length ? { sub: c.regions.slice(0, 3).map((r) => `${r.region} ${r.scenes}`).join(' · ') } : {}),
                value: c.scenes,
              }))}
            />
            <Weekly weeks={data.weekly} />
            <BarList
              title="Most-visualized dishes"
              rows={data.topDishes.map((d) => ({ key: `${d.country}-${d.dish}`, label: d.dish, sub: d.country, value: d.scenes }))}
            />
            <BarList title="By occasion" rows={data.byOccasion.map((o) => ({ key: o.occasion, label: o.occasion, value: o.scenes }))} />
          </div>
          <h2 className={styles.sectionTitle}>Recent scenes</h2>
          {data.recent.length ? (
            <SceneGallery scenes={data.recent} showBy />
          ) : (
            <EmptyState icon={<Images size={28} />} title="No scenes yet" hint="Finished scenes from everyone appear here." />
          )}
        </>
      )}
    </div>
  );
}
