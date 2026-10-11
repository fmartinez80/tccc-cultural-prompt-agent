// The raw feedback records for a dish, newest first, under a tally of the
// thumbs up / thumbs down votes each element got across them.

import { Download, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

import { QUALITY_LABELS, SOURCE_LABELS, TAG_LABELS, VERDICT_LABELS, WORKING_TAG_IDS, elementLabel, type FeedbackView } from '../../shared/feedback.ts';
import { trpc } from '../trpc.ts';
import { Accordion } from '../ui/Accordion.tsx';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { CopyButton, triggerDownload } from '../ui/DownloadCopy.tsx';
import { recordsToCsv } from './csv.ts';
import { ImageModal } from './ImageModal.tsx';
import styles from './FeedbackSection.module.css';

/** "Green salad 2/5 · your image": the item, its 1–5 rating and its source, when the rating has them. */
function ratedLabel(record: FeedbackView, el: string): string {
  const rating = record.elementRatings?.[el];
  const source = record.elementSources?.[el];
  return [elementLabel(el, record.elementNames) + (rating ? ` ${rating}/5` : ''), source && source !== 'prompt' ? SOURCE_LABELS[source].toLowerCase() : '']
    .filter(Boolean)
    .join(' · ');
}

/** Item names saved with the ratings, newest last so they win: "SIDE_1" → "White rice". */
function namesFrom(records: FeedbackView[]): Record<string, string> {
  return Object.assign({}, ...[...records].sort((a, b) => a.createdAt - b.createdAt).map((r) => r.elementNames ?? {}));
}

function choicesSummary(choices: FeedbackView['choices']): string {
  return [choices.prep, choices.plating, choices.sides, choices.scene].filter(Boolean).join(' · ');
}

/** Per element: how many ratings voted it working vs needing work, most-voted first. */
function voteTally(records: FeedbackView[]): Array<{ element: string; up: number; down: number }> {
  const t = new Map<string, { up: number; down: number }>();
  const at = (el: string) => t.get(el) ?? t.set(el, { up: 0, down: 0 }).get(el)!;
  for (const r of records) {
    for (const el of r.working ?? []) at(el).up++;
    for (const el of r.elements) at(el).down++;
  }
  return [...t].map(([element, v]) => ({ element, ...v })).sort((a, b) => b.up + b.down - (a.up + a.down) || a.element.localeCompare(b.element));
}

/** Positive quick tags across the ratings, most used first. */
function workingTags(records: FeedbackView[]): Array<{ id: string; n: number }> {
  const n = new Map<string, number>();
  for (const r of records) for (const t of r.tags) if (WORKING_TAG_IDS.has(t)) n.set(t, (n.get(t) ?? 0) + 1);
  return [...n].map(([id, k]) => ({ id, n: k })).sort((a, b) => b.n - a.n);
}

function VoteSummary({ records }: { records: FeedbackView[] }) {
  const tally = voteTally(records);
  const names = namesFrom(records);
  const good = workingTags(records);
  if (!tally.length && !good.length) {
    return <p className={styles.voteEmpty}>No element votes yet. Rate an image and give each element a thumbs up or down; the totals show here.</p>;
  }
  return (
    <div className={styles.votes}>
      {good.length > 0 && (
        <div className={styles.topRow}>
          <span className={styles.votesLabel}>What&rsquo;s working</span>
          {good.map((g) => (
            <span key={g.id} className={styles.tag} data-tone="good">
              {TAG_LABELS[g.id] ?? g.id} · {g.n}
            </span>
          ))}
        </div>
      )}
      {tally.length > 0 && (
        <ul className={styles.voteGrid} aria-label="Element votes">
          {tally.map((v) => (
            <li key={v.element} className={styles.voteItem}>
              <span className={styles.voteName}>{elementLabel(v.element, names)}</span>
              <span className={styles.voteBar} aria-hidden>
                <span className={styles.voteUp} style={{ flexGrow: v.up }} />
                <span className={styles.voteDown} style={{ flexGrow: v.down }} />
              </span>
              <span className={styles.voteCount} aria-label={`${v.up} working, ${v.down} needs work`}>
                <ThumbsUp size={12} aria-hidden /> {v.up}
                <ThumbsDown size={12} aria-hidden /> {v.down}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
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
            <span key={t} className={styles.tag} data-tone={WORKING_TAG_IDS.has(t) ? 'good' : undefined}>
              {TAG_LABELS[t] ?? t}
            </span>
          ))}
        </div>
        {(record.working?.length ?? 0) > 0 && <div className={styles.meta}>Working: {record.working!.map((el) => ratedLabel(record, el)).join(', ')}</div>}
        {record.elements.length > 0 && <div className={styles.meta}>Needs work: {record.elements.map((el) => ratedLabel(record, el)).join(', ')}</div>}
        {record.elements
          .filter((el) => record.elementTags?.[el]?.length || record.elementNotes?.[el])
          .map((el) => (
            <div key={el} className={styles.meta}>
              {elementLabel(el, record.elementNames)}: {[...(record.elementTags?.[el] ?? []).map((t) => TAG_LABELS[t] ?? t), record.elementNotes?.[el]].filter(Boolean).join(' · ')}
            </div>
          ))}
        {Object.entries(record.elementQualities ?? {}).map(([el, q]) => (
          <div key={`q-${el}`} className={styles.meta}>
            {elementLabel(el, record.elementNames)}: {Object.entries(q).map(([id, n]) => `${QUALITY_LABELS[id] ?? id} ${n}/5`).join(' · ')}
          </div>
        ))}
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
                  {elementLabel(issue.element, record.elementNames)} · {issue.severity}
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

      {sorted.length > 0 && <VoteSummary records={sorted} />}

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
