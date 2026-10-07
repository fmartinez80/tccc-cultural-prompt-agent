// The global snapshot: which regions are being visualized, a light view of
// activity, and the latest scenes from everyone.

import { Images } from 'lucide-react';

import type { StudioData } from '../../api.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { EmptyState } from '../ui/EmptyState.tsx';
import { PageHeader } from '../ui/PageHeader.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { SceneGallery } from './SceneGallery.tsx';
import styles from './studio.module.css';

export function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value.toLocaleString()}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

/** Horizontal bars, one per row, scaled to the largest value. Each row is labeled with its number. */
export function BarList({
  rows,
  title,
  bare = false,
}: {
  rows: Array<{ key: string; label: string; sub?: string; value: number }>;
  title: string;
  /** No panel or heading of its own: for a list inside another panel. */
  bare?: boolean;
}) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  const list =
      rows.length === 0 ? (
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
      );
  if (bare) return <div aria-label={title}>{list}</div>;
  return (
    <section className={styles.panel} aria-label={title}>
      <h2 className={styles.panelTitle}>{title}</h2>
      {list}
    </section>
  );
}

/** Scenes per week for the last 12 weeks, as columns; hover a column for its numbers. */
export function Weekly({ weeks }: { weeks: StudioData['weekly'] }) {
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

export function SnapshotPage() {
  const query = trpc.studio.useQuery(undefined, { refetchInterval: 60_000 });
  const data = query.data;
  return (
    <div className={styles.page}>
      <PageHeader title="Global snapshot" description="What the whole team is visualizing: regions, dishes, occasions, activity and the latest scenes." />
      {query.isError && (
        <Alert tone="error" title="Couldn't load the snapshot">
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
