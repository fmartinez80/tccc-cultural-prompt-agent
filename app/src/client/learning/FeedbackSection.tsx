// The raw feedback records for a dish, newest first.

import { Download } from 'lucide-react';
import { useState } from 'react';

import { SCENE_ELEMENT, TAG_LABELS, VERDICT_LABELS, type FeedbackView } from '../../shared/feedback.ts';
import { trpc } from '../trpc.ts';
import { Accordion } from '../ui/Accordion.tsx';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { CopyButton, triggerDownload } from '../ui/DownloadCopy.tsx';
import { recordsToCsv } from './csv.ts';
import { ImageModal } from './ImageModal.tsx';
import styles from './FeedbackSection.module.css';

function elementLabel(element: string): string {
  return element === SCENE_ELEMENT ? 'Whole scene' : element;
}

function choicesSummary(choices: FeedbackView['choices']): string {
  return [choices.prep, choices.plating, choices.sides, choices.scene].filter(Boolean).join(' · ');
}

function FeedbackCard({ record, onEnlarge }: { record: FeedbackView; onEnlarge: () => void }) {
  const choices = choicesSummary(record.choices);
  return (
    <div className={styles.card}>
      <button type="button" className={styles.thumbButton} onClick={onEnlarge} aria-label={`Enlarge the rated image for ${record.brief.heroDish}`}>
        <img src={record.image} alt="" loading="lazy" className={styles.thumb} />
      </button>
      <div className={styles.body}>
        <div className={styles.topRow}>
          <span className={styles.verdict} data-verdict={record.verdict}>
            {VERDICT_LABELS[record.verdict]}
          </span>
          {record.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {TAG_LABELS[t] ?? t}
            </span>
          ))}
        </div>
        {record.elements.length > 0 && <div className={styles.meta}>Elements: {record.elements.map(elementLabel).join(', ')}</div>}
        {record.note && <p className={styles.note}>{record.note}</p>}
        {choices && <p className={styles.choices}>{choices}</p>}
        <div className={styles.meta}>
          {record.by.name || record.by.email} · {new Date(record.createdAt).toLocaleString()}
        </div>
        <div className={styles.promptRow}>
          <CopyButton label="prompt" text={record.prompt} />
        </div>
        {record.check && record.check.issues.length > 0 && (
          <Accordion title={`Check issues (${record.check.issues.length})`}>
            {record.check.issues.map((issue, i) => (
              <div key={i} className={styles.issue}>
                <div className={styles.issueTitle}>
                  {elementLabel(issue.element)} · {issue.severity}
                </div>
                <div>Expected: {issue.expected}</div>
                <div>Seen: {issue.seen}</div>
                <div>Fix: {issue.fix}</div>
              </div>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}

export function FeedbackSection({ dishKey, records }: { dishKey: string; records: FeedbackView[] }) {
  const utils = trpc.useUtils();
  const [enlarged, setEnlarged] = useState<FeedbackView | null>(null);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const sorted = [...records].sort((a, b) => b.createdAt - a.createdAt);

  const download = async (format: 'json' | 'csv') => {
    setDownloadError(null);
    try {
      const data = await utils.feedbackExport.fetch({ dishKey });
      if (format === 'json') triggerDownload(`feedback-${dishKey}.json`, JSON.stringify(data, null, 2), 'application/json');
      else triggerDownload(`feedback-${dishKey}.csv`, recordsToCsv(data), 'text/csv');
    } catch (err) {
      setDownloadError(err instanceof Error ? err.message : "Couldn't export this dish's feedback.");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Feedback ({sorted.length})</h2>
        <div className={styles.headerActions}>
          <Button size="sm" variant="ghost" icon={<Download size={14} aria-hidden />} onPress={() => download('json')} disabled={sorted.length === 0}>
            Download (JSON)
          </Button>
          <Button size="sm" variant="ghost" icon={<Download size={14} aria-hidden />} onPress={() => download('csv')} disabled={sorted.length === 0}>
            Download (CSV)
          </Button>
        </div>
      </div>

      {downloadError && (
        <Alert tone="error" title="Couldn't download that file">
          {downloadError}
        </Alert>
      )}

      {sorted.length === 0 ? (
        <div className={styles.empty}>No feedback yet for this dish.</div>
      ) : (
        <div className={styles.list}>
          {sorted.map((r) => (
            <FeedbackCard key={r.id} record={r} onEnlarge={() => setEnlarged(r)} />
          ))}
        </div>
      )}

      {enlarged && (
        <ImageModal src={enlarged.image} alt={`Rated image for ${enlarged.brief.heroDish}`} onClose={() => setEnlarged(null)} />
      )}
    </section>
  );
}
