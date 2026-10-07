// Lessons an agent (or a person) proposed for this dish: short corrections
// that reach every future agent prompt once a person confirms them.

import { useMemo, useState } from 'react';

import { DIAGNOSIS_LABELS, SCENE_ELEMENT, type FeedbackView, type Lesson } from '../../shared/feedback.ts';
import { useOnRunwaySignedIn } from '../lib/useOnRunwaySignedIn.ts';
import { trpc } from '../trpc.ts';
import { Accordion } from '../ui/Accordion.tsx';
import { Button } from '../ui/Button.tsx';
import { Select, type SelectOption } from '../ui/Select.tsx';
import { TextArea } from '../ui/TextArea.tsx';
import { MutationError } from './MutationError.tsx';
import styles from './LessonsSection.module.css';

const STATUS_LABEL: Record<Lesson['status'], string> = {
  proposed: 'Proposed',
  confirmed: 'Confirmed',
  retired: 'Retired',
};

function elementLabel(element: string): string {
  return element === SCENE_ELEMENT ? 'Whole scene' : element;
}

function LessonRow({ dishKey, lesson }: { dishKey: string; lesson: Lesson }) {
  const utils = trpc.useUtils();
  const onSignedIn = useOnRunwaySignedIn();
  const [confirmingRetire, setConfirmingRetire] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(lesson.text);

  const update = trpc.lessonUpdate.useMutation({
    onSuccess: (learning) => utils.feedbackDish.setData({ dishKey }, (prev) => (prev ? { ...prev, learning } : prev)),
  });

  const dirty = editing && draft.trim() !== lesson.text;

  return (
    <div className={styles.row}>
      <div className={styles.rowTop}>
        <span className={styles.chip}>{elementLabel(lesson.element)}</span>
        <span className={styles.status} data-status={lesson.status}>
          {STATUS_LABEL[lesson.status]}
        </span>
        <span className={styles.diagnosis}>{DIAGNOSIS_LABELS[lesson.diagnosis]}</span>
      </div>

      {editing ? (
        <div className={styles.editArea}>
          <TextArea value={draft} onChange={setDraft} rows={3} aria-label={`Edit lesson for ${elementLabel(lesson.element)}`} />
          {dirty && <span className={styles.unsaved}>Unsaved changes</span>}
          <div className={styles.actions}>
            <Button
              size="sm"
              variant="primary"
              disabled={draft.trim().length < 3 || update.isPending}
              loading={update.isPending}
              onPress={() => {
                update.mutate({ dishKey, lessonId: lesson.id, text: draft.trim() });
                setEditing(false);
              }}
            >
              Save
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onPress={() => {
                setDraft(lesson.text);
                setEditing(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <>
          <p className={styles.text}>{lesson.text}</p>
          <p className={styles.meta}>
            From {lesson.sourceFeedback.length} rating{lesson.sourceFeedback.length === 1 ? '' : 's'}
            {lesson.decidedBy ? ` · decided by ${lesson.decidedBy}` : ''}
          </p>
          {confirmingRetire ? (
            <div className={styles.confirmRow}>
              <span>Retire this lesson? It stops reaching the agents.</span>
              <Button
                size="sm"
                variant="primary"
                loading={update.isPending}
                onPress={() => {
                  update.mutate({ dishKey, lessonId: lesson.id, status: 'retired' });
                  setConfirmingRetire(false);
                }}
              >
                Retire
              </Button>
              <Button size="sm" variant="ghost" onPress={() => setConfirmingRetire(false)}>
                Cancel
              </Button>
            </div>
          ) : (
            <div className={styles.actions}>
              {lesson.status !== 'confirmed' && (
                <Button size="sm" loading={update.isPending} onPress={() => update.mutate({ dishKey, lessonId: lesson.id, status: 'confirmed' })}>
                  Confirm
                </Button>
              )}
              {lesson.status !== 'retired' && (
                <Button size="sm" variant="ghost" onPress={() => setConfirmingRetire(true)}>
                  Retire
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

export function LessonsSection({ dishKey, lessons, records }: { dishKey: string; lessons: Lesson[]; records: FeedbackView[] }) {
  const utils = trpc.useUtils();
  const onSignedIn = useOnRunwaySignedIn();
  const [addElement, setAddElement] = useState<string | null>(null);
  const [addText, setAddText] = useState('');

  const elementOptions = useMemo<SelectOption[]>(() => {
    const set = new Set<string>([SCENE_ELEMENT]);
    for (const r of records) for (const el of r.elements) set.add(el);
    for (const l of lessons) set.add(l.element);
    return Array.from(set).map((id) => ({ id, label: elementLabel(id) }));
  }, [records, lessons]);

  const addLesson = trpc.lessonAdd.useMutation({
    onSuccess: (learning) => {
      utils.feedbackDish.setData({ dishKey }, (prev) => (prev ? { ...prev, learning } : prev));
      setAddText('');
      setAddElement(null);
    },
  });

  const proposed = lessons.filter((l) => l.status === 'proposed');
  const confirmed = lessons.filter((l) => l.status === 'confirmed');
  const retired = lessons.filter((l) => l.status === 'retired');
  const canAdd = !!addElement && addText.trim().length >= 3 && !addLesson.isPending;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Lessons</h2>
      <p className={styles.sectionHint}>Confirmed lessons are added to every agent prompt for this dish.</p>

      {lessons.length === 0 ? (
        <div className={styles.empty}>No lessons yet. Draft some above, or add one by hand below.</div>
      ) : (
        <>
          {proposed.length > 0 && (
            <div>
              <div className={styles.list}>
                <div className={styles.groupLabel}>Proposed ({proposed.length})</div>
                {proposed.map((l) => (
                  <LessonRow key={l.id} dishKey={dishKey} lesson={l} />
                ))}
              </div>
            </div>
          )}
          {confirmed.length > 0 && (
            <div>
              <div className={styles.list}>
                <div className={styles.groupLabel}>Confirmed ({confirmed.length})</div>
                {confirmed.map((l) => (
                  <LessonRow key={l.id} dishKey={dishKey} lesson={l} />
                ))}
              </div>
            </div>
          )}
          {retired.length > 0 && (
            <Accordion title={`Retired (${retired.length})`}>
              <div className={styles.list}>
                {retired.map((l) => (
                  <LessonRow key={l.id} dishKey={dishKey} lesson={l} />
                ))}
              </div>
            </Accordion>
          )}
        </>
      )}

      <div className={styles.addForm}>
        <div className={styles.addRow}>
          <div className={styles.addField}>
            <Select label="Element" value={addElement} onChange={setAddElement} options={elementOptions} placeholder="Choose an element" />
          </div>
        </div>
        <TextArea value={addText} onChange={setAddText} rows={2} label="Lesson text" placeholder="What should the agents do differently?" />
        <div className={styles.actions}>
          <Button size="sm" disabled={!canAdd} loading={addLesson.isPending} onPress={() => addLesson.mutate({ dishKey, element: addElement!, text: addText.trim() })}>
            Add a lesson
          </Button>
        </div>
        <MutationError error={addLesson.error} onSignedIn={() => onSignedIn()} />
      </div>
    </section>
  );
}
