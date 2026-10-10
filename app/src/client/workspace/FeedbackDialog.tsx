// The feedback dialog: rate one generated scene image. An overall verdict, then a
// good / needs-work vote on each element, named by what it is ("White rice", not
// SIDE_1). An element that needs work opens its own issue tags and a short note,
// so the learning agent knows exactly which item went wrong and how. Optional
// strengths and a note close it. The automatic check's findings show under the
// element they name and can be kept with the rating.

import { SignInPrompt, signInRequiredFrom } from '../lib/signIn.tsx';
import { Check, Download, ThumbsDown, ThumbsUp, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Dialog, Heading, Modal } from 'react-aria-components';

import {
  ELEMENT_ISSUE_TAGS,
  SCENE_ELEMENT,
  TAG_LABELS,
  VERDICT_LABELS,
  Verdict,
  WORKING_TAGS,
  type FeedbackInput,
  type RatedElement,
} from '../../shared/feedback.ts';
import type { SceneSpec } from '../../shared/types.ts';
import { venueType } from '../../shared/venues.ts';
import type { WsResult } from '../../shared/workspace.ts';
import type { Brief } from '../intake/types.ts';
import { vesselLine } from '../intake/optionText.ts';
import { useOnSignedIn } from '../lib/useOnSignedIn.ts';
import { trpc } from '../trpc.ts';
import styles from './FeedbackDialog.module.css';

const NOTE_MAX = 2000;
const ELEMENT_NOTE_MAX = 300;

type Vote = 'working' | 'needs-work';

const VERDICT_HELP: Record<Verdict, string> = {
  usable: 'Ready to use as is',
  fixes: 'Close; needs edits',
  unusable: 'Start again',
};

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

async function downloadImage(url: string, name: string) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = name;
    a.click();
    URL.revokeObjectURL(blobUrl);
  } catch {
    window.open(url, '_blank', 'noreferrer');
  }
}

/** Plain-language choice summary for the feedback record; built straight from the spec, not a selections object. */
function summarizeChoices(spec: SceneSpec): FeedbackInput['choices'] {
  const place = venueType(spec.scene.venue, spec.scene.venueType);
  return {
    prep: spec.entree.prep.label,
    plating: `${spec.entree.plating.label} — ${vesselLine(spec.entree.plating.vessel, spec.entree.plating.vesselStyle)}`,
    sides: spec.accompaniments.map((a) => a.name).join(', ') || undefined,
    scene: `${place?.label ?? spec.scene.venue}, ${spec.scene.setting}${spec.scene.time ? `, ${spec.scene.time}` : ''}`,
  };
}

const GROUPS: Array<{ title: string; kinds: RatedElement['kind'][] }> = [
  { title: 'On the table', kinds: ['food', 'product', 'table'] },
  { title: 'Scene', kinds: ['environment', 'camera', 'lighting', 'color', 'scene'] },
];

export function FeedbackDialog({
  result,
  imageIndex,
  elements,
  brief,
  spec,
  model,
  sceneSummary,
  onClose,
  onSaved,
}: {
  /** The result being rated; null when the dialog is closed. */
  result: WsResult | null;
  /** 1-based image number within the result. */
  imageIndex: number;
  /** The elements to rate, named by what they are (workspace.ts ratedElements), the whole image last. */
  elements: RatedElement[];
  brief: Brief;
  spec: SceneSpec;
  model: string;
  sceneSummary: string;
  onClose: () => void;
  onSaved: (imageIndex: number, record: { id: string; verdict: Verdict; at: number }) => void;
}) {
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [strengths, setStrengths] = useState<Set<string>>(new Set());
  // One vote per element: working, needs work, or not voted (absent).
  const [votes, setVotes] = useState<Map<string, Vote>>(new Map());
  const [issueTags, setIssueTags] = useState<Map<string, Set<string>>>(new Map());
  const [elementNotes, setElementNotes] = useState<Map<string, string>>(new Map());
  const [note, setNote] = useState('');
  const [includeCheck, setIncludeCheck] = useState(true);
  const prevKeyRef = useRef<string | null>(null);

  const imageUrl = result?.urls[imageIndex - 1] ?? '';
  const existing = result?.feedback?.[imageIndex];
  const checkForImage = result?.check?.images.find((img) => img.image === imageIndex);
  const key = result ? `${result.id}:${imageIndex}` : null;

  const allElements = useMemo(
    () => (elements.some((e) => e.id === SCENE_ELEMENT) ? elements : [...elements, { id: SCENE_ELEMENT, name: 'Whole image', role: 'Anything not tied to one item', kind: 'scene' as const }]),
    [elements],
  );
  const checkIssuesFor = (id: string) => checkForImage?.issues.filter((i) => i.element === id) ?? [];

  useEffect(() => {
    if (!key || key === prevKeyRef.current) return;
    prevKeyRef.current = key;
    setVerdict(checkForImage?.pass === false ? 'unusable' : null);
    setStrengths(new Set());
    setVotes(new Map(checkForImage?.issues.filter((i) => i.severity === 'major').map((i) => [i.element, 'needs-work' as const]) ?? []));
    setIssueTags(new Map());
    setElementNotes(new Map());
    setNote('');
    setIncludeCheck(!!checkForImage);
    // Resetting the form is tied to a new (result, image) target, not to every change of the check itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const vote = (el: string, v: Vote) =>
    setVotes((prev) => {
      const next = new Map(prev);
      if (next.get(el) === v) next.delete(el);
      else next.set(el, v);
      return next;
    });
  const votedWith = (v: Vote) => allElements.filter((el) => votes.get(el.id) === v).map((el) => el.id);
  const markRestWorking = () =>
    setVotes((prev) => {
      const next = new Map(prev);
      for (const el of allElements) if (!next.has(el.id)) next.set(el.id, 'working');
      return next;
    });
  const rated = allElements.filter((el) => votes.has(el.id)).length;

  const submit = trpc.feedbackSubmit.useMutation({
    onSuccess: (res, variables) => {
      onSaved(variables.imageIndex, { id: res.id, verdict: variables.verdict, at: Date.now() });
    },
  });
  const onSignedIn = useOnSignedIn();

  const buildInput = (): FeedbackInput | null => {
    if (!result || !verdict) return null;
    const needsWork = votedWith('needs-work');
    const elTags: Record<string, string[]> = {};
    const elNotes: Record<string, string> = {};
    for (const id of needsWork) {
      const t = [...(issueTags.get(id) ?? [])];
      if (t.length) elTags[id] = t;
      const n = (elementNotes.get(id) ?? '').trim();
      if (n) elNotes[id] = n;
    }
    const issueUnion = new Set(Object.values(elTags).flat());
    return {
      resultId: result.id,
      imageIndex,
      imageUrl,
      verdict,
      // Strengths plus every element's issue tags, so older readers of `tags` still see them.
      tags: [...strengths, ...issueUnion].slice(0, 30),
      elements: needsWork,
      working: votedWith('working'),
      elementNames: Object.fromEntries(allElements.filter((el) => votes.has(el.id)).map((el) => [el.id, el.name.slice(0, 200)])),
      elementTags: Object.keys(elTags).length ? elTags : undefined,
      elementNotes: Object.keys(elNotes).length ? elNotes : undefined,
      note: note.trim(),
      prompt: result.prompt,
      model,
      brief: {
        country: brief.country,
        countryLabel: brief.countryLabel,
        region: brief.region ?? '',
        heroDish: brief.heroDish,
        occasion: brief.occasion,
        skuId: brief.skuId,
      },
      choices: summarizeChoices(spec),
      sceneSummary,
      check: includeCheck && checkForImage ? { pass: checkForImage.pass, issues: checkForImage.issues } : undefined,
    };
  };

  const handleSubmit = () => {
    const input = buildInput();
    if (!input) return;
    submit.mutate(input);
  };

  const signIn = signInRequiredFrom(submit.error);
  const slug = `${brief.heroDish}-${brief.country}`.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'scene';
  const choices = summarizeChoices(spec);
  const context: Array<[string, string | undefined]> = [
    ['Preparation', choices.prep],
    ['Plating', choices.plating],
    ['Sides', choices.sides],
    ['Setting', choices.scene],
  ];

  return (
    <Modal
      isOpen={result !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      isDismissable
      className={styles.overlay}
    >
      <Dialog className={styles.dialog}>
        {result && (
          <>
            <header className={styles.head}>
              <div>
                <Heading slot="title" className={styles.title}>
                  Rate image {imageIndex}
                </Heading>
                <p className={styles.subtitle}>
                  {[brief.heroDish, brief.countryLabel].filter(Boolean).join(' · ')}
                </p>
              </div>
              <button type="button" className={styles.iconBtn} aria-label="Close" onClick={onClose}>
                <X size={18} aria-hidden />
              </button>
            </header>

            <div className={styles.body}>
              <aside className={styles.side}>
                <img className={styles.thumb} src={imageUrl} alt={`Scene image ${imageIndex}`} />
                <button type="button" className={styles.linkBtn} onClick={() => downloadImage(imageUrl, `${slug}-scene-${imageIndex}.png`)}>
                  <Download size={14} aria-hidden /> Download image
                </button>
                <dl className={styles.context}>
                  {context
                    .filter(([, v]) => v)
                    .map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                </dl>
                {checkForImage && (
                  <div className={styles.checkBox} data-pass={checkForImage.pass || undefined}>
                    <strong>
                      Automatic check: {checkForImage.pass ? 'passed' : `${checkForImage.issues.length} issue${checkForImage.issues.length === 1 ? '' : 's'}`}
                    </strong>
                    {!checkForImage.pass && <span>Its findings show under each item below.</span>}
                    <label className={styles.checkToggle}>
                      <input type="checkbox" checked={includeCheck} onChange={(e) => setIncludeCheck(e.target.checked)} />
                      Save its findings with my rating
                    </label>
                  </div>
                )}
              </aside>

              <div className={styles.form}>
                {existing && (
                  <p className={styles.notice}>
                    You rated this {VERDICT_LABELS[existing.verdict]} on {new Date(existing.at).toLocaleDateString()}. Sending again adds a new rating.
                  </p>
                )}

                <section className={styles.section} aria-labelledby="fb-overall">
                  <h3 id="fb-overall" className={styles.sectionTitle}>
                    <span className={styles.step}>1</span> Overall
                  </h3>
                  <div className={styles.verdicts} role="radiogroup" aria-labelledby="fb-overall">
                    {Verdict.options.map((v) => (
                      <button
                        key={v}
                        type="button"
                        role="radio"
                        aria-checked={verdict === v}
                        className={styles.verdict}
                        data-verdict={v}
                        onClick={() => setVerdict(v)}
                      >
                        <span className={styles.verdictLabel}>{VERDICT_LABELS[v]}</span>
                        <span className={styles.verdictHelp}>{VERDICT_HELP[v]}</span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className={styles.section} aria-labelledby="fb-items">
                  <div className={styles.sectionHead}>
                    <h3 id="fb-items" className={styles.sectionTitle}>
                      <span className={styles.step}>2</span> Each item
                    </h3>
                    <span className={styles.progress}>
                      {rated} of {allElements.length} rated
                    </span>
                    <button type="button" className={styles.linkBtn} disabled={rated === allElements.length} onClick={markRestWorking}>
                      <Check size={14} aria-hidden /> {rated === 0 ? 'Mark all good' : 'Mark the rest good'}
                    </button>
                  </div>
                  {GROUPS.map((g) => {
                    const items = allElements.filter((el) => g.kinds.includes(el.kind));
                    if (!items.length) return null;
                    return (
                      <div key={g.title} className={styles.group}>
                        <h4 className={styles.groupTitle}>{g.title}</h4>
                        <ul className={styles.rows}>
                          {items.map((el) => {
                            const v = votes.get(el.id);
                            const issues = checkIssuesFor(el.id);
                            const picked = issueTags.get(el.id) ?? new Set<string>();
                            return (
                              <li key={el.id} className={styles.row} data-vote={v}>
                                <div className={styles.rowMain}>
                                  <div className={styles.rowText}>
                                    <span className={styles.rowName}>{el.name}</span>
                                    <span className={styles.rowRole}>{el.role}</span>
                                  </div>
                                  <div className={styles.voteGroup} role="group" aria-label={el.name}>
                                    <button
                                      type="button"
                                      className={styles.voteBtn}
                                      data-kind="working"
                                      aria-pressed={v === 'working'}
                                      onClick={() => vote(el.id, 'working')}
                                    >
                                      <ThumbsUp size={14} aria-hidden /> Good
                                    </button>
                                    <button
                                      type="button"
                                      className={styles.voteBtn}
                                      data-kind="needs-work"
                                      aria-pressed={v === 'needs-work'}
                                      onClick={() => vote(el.id, 'needs-work')}
                                    >
                                      <ThumbsDown size={14} aria-hidden /> Needs work
                                    </button>
                                  </div>
                                </div>
                                {issues.length > 0 && (
                                  <ul className={styles.checkIssues}>
                                    {issues.map((i, n) => (
                                      <li key={n}>
                                        <span className={styles.severity} data-severity={i.severity}>
                                          {i.severity}
                                        </span>
                                        Expected {i.expected}; saw {i.seen}.
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {v === 'needs-work' && (
                                  <div className={styles.detail}>
                                    <div className={styles.tags}>
                                      {ELEMENT_ISSUE_TAGS[el.kind].map((t) => (
                                        <button
                                          key={t}
                                          type="button"
                                          className={styles.tag}
                                          aria-pressed={picked.has(t)}
                                          onClick={() => setIssueTags((prev) => new Map(prev).set(el.id, toggle(picked, t)))}
                                        >
                                          {TAG_LABELS[t] ?? t}
                                        </button>
                                      ))}
                                    </div>
                                    <input
                                      className={styles.input}
                                      type="text"
                                      aria-label={`What's wrong with ${el.name}`}
                                      placeholder={`What's wrong with ${el.name.toLowerCase()}? (optional)`}
                                      maxLength={ELEMENT_NOTE_MAX}
                                      value={elementNotes.get(el.id) ?? ''}
                                      onChange={(e) => {
                                        const value = e.target.value;
                                        setElementNotes((prev) => new Map(prev).set(el.id, value));
                                      }}
                                    />
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </section>

                <section className={styles.section} aria-labelledby="fb-strengths">
                  <h3 id="fb-strengths" className={styles.sectionTitle}>
                    <span className={styles.step}>3</span> Strengths <span className={styles.optional}>optional</span>
                  </h3>
                  <div className={styles.tags}>
                    {WORKING_TAGS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        className={styles.tag}
                        data-tone="good"
                        aria-pressed={strengths.has(t.id)}
                        onClick={() => setStrengths((prev) => toggle(prev, t.id))}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </section>

                <section className={styles.section}>
                  <label className={styles.sectionTitle} htmlFor="fb-note">
                    <span className={styles.step}>4</span> Note <span className={styles.optional}>optional</span>
                  </label>
                  <textarea
                    id="fb-note"
                    className={styles.textarea}
                    value={note}
                    onChange={(e) => setNote(e.target.value.slice(0, NOTE_MAX))}
                    rows={3}
                    placeholder="Anything else worth recording about this image"
                  />
                  <span className={styles.counter}>
                    {note.length}/{NOTE_MAX}
                  </span>
                </section>

                {signIn ? (
                  <SignInPrompt onSignedIn={() => onSignedIn(handleSubmit)} description="Feedback is saved under your own sign-in." />
                ) : (
                  submit.isError && (
                    <p className={styles.error} role="alert">
                      Couldn&rsquo;t save this rating. {submit.error.message}
                    </p>
                  )
                )}
              </div>
            </div>

            <footer className={styles.actions}>
              <span className={styles.status}>{verdict ? `${VERDICT_LABELS[verdict]} · ${rated} of ${allElements.length} items rated` : 'Choose an overall rating to submit'}</span>
              <button type="button" className={styles.btn} onClick={onClose}>
                Cancel
              </button>
              <button type="button" className={styles.btn} data-primary disabled={!verdict || submit.isPending} onClick={handleSubmit}>
                {submit.isPending ? 'Saving…' : 'Submit rating'}
              </button>
            </footer>
          </>
        )}
      </Dialog>
    </Modal>
  );
}
