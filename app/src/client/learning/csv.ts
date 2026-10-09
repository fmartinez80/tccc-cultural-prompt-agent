// CSV/JSON export helpers for feedback records, shared by the dish list's
// "download all" buttons and a dish's own "download this dish's feedback".

import type { FeedbackRecord, FeedbackView } from '../../shared/feedback.ts';

type ExportableRecord = FeedbackRecord | FeedbackView;

function hasImageUrl(r: ExportableRecord): r is FeedbackView {
  return typeof (r as Partial<FeedbackView>).image === 'string';
}

function csvCell(value: string): string {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

const CSV_HEADERS = ['id', 'createdAt', 'by', 'country', 'heroDish', 'verdict', 'tags', 'working', 'elements', 'note', 'image', 'prompt'];

/** One row per record, newest-first order preserved from the input. */
export function recordsToCsv(records: ExportableRecord[]): string {
  const rows = records.map((r) => {
    const image = hasImageUrl(r) ? `${window.location.origin}${r.image}` : r.imageKey;
    return [
      r.id,
      new Date(r.createdAt).toISOString(),
      r.by.email,
      r.brief.country,
      r.brief.heroDish,
      r.verdict,
      r.tags.join(';'),
      (r.working ?? []).join(';'),
      r.elements.join(';'),
      r.note,
      image,
      r.prompt,
    ]
      .map(csvCell)
      .join(',');
  });
  return [CSV_HEADERS.join(','), ...rows].join('\r\n');
}
