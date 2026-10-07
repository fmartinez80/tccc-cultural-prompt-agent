// Knowledge-base edits an agent (or a person) proposed for this dish: a
// Markdown snippet to append to a knowledge-base section, once approved.

import { useState } from 'react';

import type { KbEdit } from '../../shared/feedback.ts';
import { useOnRunwaySignedIn } from '../lib/useOnRunwaySignedIn.ts';
import { trpc } from '../trpc.ts';
import { Accordion } from '../ui/Accordion.tsx';
import { Button } from '../ui/Button.tsx';
import { CodeBlock } from '../ui/CodeBlock.tsx';
import { TextArea } from '../ui/TextArea.tsx';
import { TextInput } from '../ui/TextInput.tsx';
import { MutationError } from './MutationError.tsx';
import styles from './KbEditsSection.module.css';

const STATUS_LABEL: Record<KbEdit['status'], string> = {
  proposed: 'Proposed',
  approved: 'Approved',
  rejected: 'Rejected',
};

function KbEditRow({ dishKey, edit }: { dishKey: string; edit: KbEdit }) {
  const utils = trpc.useUtils();
  const onSignedIn = useOnRunwaySignedIn();
  const [confirmingReject, setConfirmingReject] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draftHeading, setDraftHeading] = useState(edit.heading);
  const [draftText, setDraftText] = useState(edit.text);

  const update = trpc.kbEditUpdate.useMutation({
    onSuccess: (learning) => utils.feedbackDish.setData({ dishKey }, (prev) => (prev ? { ...prev, learning } : prev)),
  });

  const dirty = editing && (draftHeading.trim() !== edit.heading || draftText.trim() !== edit.text);

  return (
    <div className={styles.row}>
      <div className={styles.rowTop}>
        <span className={styles.fileHeading}>
          {edit.file} · {edit.heading}
        </span>
        <span className={styles.status} data-status={edit.status}>
          {STATUS_LABEL[edit.status]}
        </span>
      </div>

      {editing ? (
        <div className={styles.editArea}>
          <TextInput value={draftHeading} onChange={setDraftHeading} label="Section heading" />
          <TextArea value={draftText} onChange={setDraftText} rows={5} label="Markdown text" />
          {dirty && <span className={styles.unsaved}>Unsaved changes</span>}
          <div className={styles.actions}>
            <Button
              size="sm"
              variant="primary"
              disabled={draftText.trim().length < 3 || draftHeading.trim().length < 1 || update.isPending}
              loading={update.isPending}
              onPress={() => {
                update.mutate({ dishKey, editId: edit.id, heading: draftHeading.trim(), text: draftText.trim() });
                setEditing(false);
              }}
            >
              Save
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onPress={() => {
                setDraftHeading(edit.heading);
                setDraftText(edit.text);
                setEditing(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <>
          <CodeBlock code={edit.text} label={`knowledge-base edit for ${edit.heading}`} />
          <p className={styles.rationale}>{edit.rationale}</p>
          <p className={styles.meta}>
            From {edit.sourceFeedback.length} rating{edit.sourceFeedback.length === 1 ? '' : 's'}
            {edit.decidedBy ? ` · decided by ${edit.decidedBy}` : ''}
          </p>
          {confirmingReject ? (
            <div className={styles.confirmRow}>
              <span>Reject this edit? It will not be added to the knowledge base.</span>
              <Button
                size="sm"
                variant="primary"
                loading={update.isPending}
                onPress={() => {
                  update.mutate({ dishKey, editId: edit.id, status: 'rejected' });
                  setConfirmingReject(false);
                }}
              >
                Reject
              </Button>
              <Button size="sm" variant="ghost" onPress={() => setConfirmingReject(false)}>
                Cancel
              </Button>
            </div>
          ) : (
            <div className={styles.actions}>
              {edit.status !== 'approved' && (
                <Button size="sm" loading={update.isPending} onPress={() => update.mutate({ dishKey, editId: edit.id, status: 'approved' })}>
                  Approve
                </Button>
              )}
              {edit.status !== 'rejected' && (
                <Button size="sm" variant="ghost" onPress={() => setConfirmingReject(true)}>
                  Reject
                </Button>
              )}
              <Button size="sm" variant="ghost" onPress={() => setEditing(true)}>
                Edit
              </Button>
            </div>
          )}
        </>
      )}

      <MutationError error={update.error} onSignedIn={() => onSignedIn()} />
    </div>
  );
}

export function KbEditsSection({ dishKey, edits }: { dishKey: string; edits: KbEdit[] }) {
  const proposed = edits.filter((e) => e.status === 'proposed');
  const approved = edits.filter((e) => e.status === 'approved');
  const rejected = edits.filter((e) => e.status === 'rejected');

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Knowledge-base edits</h2>
      <p className={styles.sectionHint}>
        Approved edits are added to the knowledge base the agents read, and can be downloaded to merge into the source files.
      </p>

      {edits.length === 0 ? (
        <div className={styles.empty}>No knowledge-base edits yet. Draft some above once there is feedback to learn from.</div>
      ) : (
        <>
          {proposed.length > 0 && (
            <div className={styles.list}>
              <div className={styles.groupLabel}>Proposed ({proposed.length})</div>
              {proposed.map((e) => (
                <KbEditRow key={e.id} dishKey={dishKey} edit={e} />
              ))}
            </div>
          )}
          {approved.length > 0 && (
            <div className={styles.list}>
              <div className={styles.groupLabel}>Approved ({approved.length})</div>
              {approved.map((e) => (
                <KbEditRow key={e.id} dishKey={dishKey} edit={e} />
              ))}
            </div>
          )}
          {rejected.length > 0 && (
            <Accordion title={`Rejected (${rejected.length})`}>
              <div className={styles.list}>
                {rejected.map((e) => (
                  <KbEditRow key={e.id} dishKey={dishKey} edit={e} />
                ))}
              </div>
            </Accordion>
          )}
        </>
      )}
    </section>
  );
}
