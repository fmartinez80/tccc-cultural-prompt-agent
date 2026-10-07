// The Learning page's dish list: one row per dish with feedback, totals and
// top-level downloads. Selecting a row drills into DishDetail.

import { Download, GraduationCap } from 'lucide-react';
import { useState } from 'react';

import type { DishSummary } from '../../shared/feedback.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { triggerDownload } from '../ui/DownloadCopy.tsx';
import { EmptyState } from '../ui/EmptyState.tsx';
import { PageHeader } from '../ui/PageHeader.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { DishDetail } from './DishDetail.tsx';
import { recordsToCsv } from './csv.ts';
import styles from './LearningPage.module.css';

function DishRow({ dish, onSelect }: { dish: DishSummary; onSelect: () => void }) {
  return (
    <button type="button" className={styles.row} onClick={onSelect}>
      <div className={styles.rowHead}>
        <div className={styles.rowTitle}>
          {dish.heroDish} · {dish.countryLabel}
        </div>
        <div className={styles.rowDate}>Last feedback {new Date(dish.lastAt).toLocaleDateString()}</div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Verdicts</span>
          <span className={styles.statValue}>
            {dish.usable} usable · {dish.fixes} with fixes · {dish.unusable} unusable
          </span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Lessons</span>
          <span className={styles.statValue}>
            {dish.lessonsConfirmed} confirmed · {dish.lessonsProposed} proposed
          </span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>KB edits</span>
          <span className={styles.statValue}>
            {dish.editsApproved} approved · {dish.editsProposed} proposed
          </span>
        </div>
      </div>
    </button>
  );
}

export function LearningPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const dishesQuery = trpc.feedbackDishes.useQuery();
  const utils = trpc.useUtils();
  const [downloadError, setDownloadError] = useState<string | null>(null);

  if (selected) {
    const summary = dishesQuery.data?.find((d) => d.dishKey === selected) ?? null;
    return <DishDetail dishKey={selected} summary={summary} onBack={() => setSelected(null)} />;
  }

  const downloadAll = async (format: 'json' | 'csv') => {
    setDownloadError(null);
    try {
      const records = await utils.feedbackExport.fetch({});
      if (format === 'json') triggerDownload('feedback-all.json', JSON.stringify(records, null, 2), 'application/json');
      else triggerDownload('feedback-all.csv', recordsToCsv(records), 'text/csv');
    } catch (err) {
      setDownloadError(err instanceof Error ? err.message : "Couldn't export the feedback.");
    }
  };

  const downloadKbMarkdown = async () => {
    setDownloadError(null);
    try {
      const { markdown } = await utils.kbEditsExport.fetch();
      triggerDownload('knowledge-base-edits.md', markdown, 'text/markdown');
    } catch (err) {
      setDownloadError(err instanceof Error ? err.message : "Couldn't export the knowledge-base edits.");
    }
  };

  const [zipPending, setZipPending] = useState(false);
  const downloadKbZip = async () => {
    setDownloadError(null);
    setZipPending(true);
    try {
      const res = await fetch('/api/knowledge-base.zip');
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? `The server answered with HTTP ${res.status}.`);
      }
      const name = /filename="([^"]+)"/.exec(res.headers.get('Content-Disposition') ?? '')?.[1] ?? 'knowledge-base.zip';
      const blobUrl = URL.createObjectURL(await res.blob());
      triggerDownload(name, blobUrl);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10_000);
    } catch (err) {
      setDownloadError(`Couldn't download the knowledge base — ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setZipPending(false);
    }
  };

  return (
    <div className={styles.page}>
      <PageHeader
        title="Learning"
        description="Every rated image, grouped by dish, and what the agents have learned from it so far."
        actions={
          <>
            <Button
              size="sm"
              variant="ghost"
              icon={<Download size={14} aria-hidden />}
              onPress={() => downloadAll('json')}
              disabled={!dishesQuery.data?.length}
            >
              Download all feedback (JSON)
            </Button>
            <Button
              size="sm"
              variant="ghost"
              icon={<Download size={14} aria-hidden />}
              onPress={() => downloadAll('csv')}
              disabled={!dishesQuery.data?.length}
            >
              Download all feedback (CSV)
            </Button>
            <Button size="sm" variant="ghost" icon={<Download size={14} aria-hidden />} onPress={downloadKbMarkdown}>
              Download approved knowledge-base edits (.md)
            </Button>
            <Button
              size="sm"
              variant="ghost"
              icon={<Download size={14} aria-hidden />}
              onPress={downloadKbZip}
              loading={zipPending}
            >
              Download full knowledge base (.zip)
            </Button>
          </>
        }
      />

      {downloadError && (
        <Alert tone="error" title="Couldn't download that file">
          {downloadError}
        </Alert>
      )}

      {dishesQuery.isPending ? (
        <div className={styles.list}>
          {Array.from({ length: 3 }, (_, i) => (
            <SkeletonBlock key={i} height={88} />
          ))}
        </div>
      ) : dishesQuery.isError ? (
        <Alert tone="error" title="Couldn't load the feedback dishes">
          {dishesQuery.error.message}
          <div className={styles.retryRow}>
            <Button size="sm" onPress={() => dishesQuery.refetch()}>
              Try again
            </Button>
          </div>
        </Alert>
      ) : !dishesQuery.data || dishesQuery.data.length === 0 ? (
        <EmptyState
          icon={<GraduationCap size={28} aria-hidden />}
          title="No ratings yet."
          hint="Generate a scene in the Workspace, then press Rate on an image to start teaching the agents."
        />
      ) : (
        <ul className={styles.list}>
          {dishesQuery.data.map((d) => (
            <li key={d.dishKey}>
              <DishRow dish={d} onSelect={() => setSelected(d.dishKey)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
