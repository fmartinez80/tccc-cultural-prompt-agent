// The feedback dialog: rate one generated scene image (verdict, quick tags,
// what's wrong, a note), optionally keeping the automatic check's findings,
// and send it to the Learning page.

import { SignInPrompt, signInRequiredFrom } from '../lib/signIn.tsx';
import { Download, ThumbsDown, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Dialog, Heading, Modal } from 'react-aria-components';

import { FEEDBACK_TAGS, SCENE_ELEMENT, VERDICT_LABELS, Verdict, type FeedbackInput } from '../../shared/feedback.ts';
import type { SceneSpec } from '../../shared/types.ts';
import { venueType } from '../../shared/venues.ts';
import type { WsResult } from '../../shared/workspace.ts';
import type { Brief } from '../intake/types.ts';
import { vesselLine } from '../intake/optionText.ts';
import { useOnSignedIn } from '../lib/useOnSignedIn.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { SegmentedControl } from '../ui/SegmentedControl.tsx';
import { Switch } from '../ui/Switch.tsx';
import { TextArea } from '../ui/TextArea.tsx';
import styles from './FeedbackDialog.module.css';

const NOTE_MAX = 2000;

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
  /** Node chips the "what's wrong" picker offers, besides SCENE. */
  elements: string[];
  brief: Brief;
  spec: SceneSpec;
  model: string;
  sceneSummary: string;
  onClose: () => void;
  onSaved: (imageIndex: number, record: { id: string; verdict: Verdict; at: number }) => void;
}) {
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [tags, setTags] = useState<Set<string>>(new Set());
  const [elementsSel, setElementsSel] = useState<Set<string>>(new Set());
  const [note, setNote] = useState('');
  const [includeCheck, setIncludeCheck] = useState(true);
  const prevKeyRef = useRef<string | null>(null);

  const imageUrl = result?.urls[imageIndex - 1] ?? '';
  const existing = result?.feedback?.[imageIndex];
  const checkForImage = result?.check?.images.find((img) => img.image === imageIndex);
  const key = result ? `${result.id}:${imageIndex}` : null;

  const allElements = useMemo(() => Array.from(new Set([...elements, SCENE_ELEMENT])), [elements]);

  useEffect(() => {
    if (!key || key === prevKeyRef.current) return;
    prevKeyRef.current = key;
    setVerdict(checkForImage?.pass === false ? 'unusable' : null);
    setTags(new Set());
    setElementsSel(new Set(checkForImage?.issues.filter((i) => i.severity === 'major').map((i) => i.element) ?? []));
    setNote('');
    setIncludeCheck(!!checkForImage);
    // Resetting the form is tied to a new (result, image) target, not to every change of the check itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const submit = trpc.feedbackSubmit.useMutation({
    onSuccess: (res, variables) => {
      onSaved(variables.imageIndex, { id: res.id, verdict: variables.verdict, at: Date.now() });
    },
  });
  const onSignedIn = useOnSignedIn();

  const buildInput = (): FeedbackInput | null => {
    if (!result || !verdict) return null;
    return {
      resultId: result.id,
      imageIndex,
      imageUrl,
      verdict,
      tags: Array.from(tags),
      elements: Array.from(elementsSel),
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
            <div className={styles.head}>
              <Heading slot="title" className={styles.title}>
                Image {imageIndex} of this scene
              </Heading>
              <Button size="sm" variant="ghost" icon={<X size={16} aria-hidden />} aria-label="Close" onPress={onClose} />
            </div>

            <div className={styles.body}>
              <div className={styles.mediaCol}>
                <img className={styles.thumb} src={imageUrl} alt={`Scene image ${imageIndex}`} />
                <div className={styles.mediaActions}>
                  <Button
                    size="sm"
                    variant="ghost"
                    icon={<Download size={14} aria-hidden />}
                    onPress={() => downloadImage(imageUrl, `${slug}-scene-${imageIndex}.png`)}
                  >
                    Download
                  </Button>
                  <Button size="sm" variant="ghost" icon={<ThumbsDown size={14} aria-hidden />} onPress={() => setVerdict('unusable')}>
                    Mark unusable
                  </Button>
                </div>
              </div>

              <div className={styles.formCol}>
                {existing && (
                  <Alert tone="info" title={`You rated this ${VERDICT_LABELS[existing.verdict]} on ${new Date(existing.at).toLocaleDateString()}.`}>
                    Sending again adds a new rating.
                  </Alert>
                )}

                <section className={styles.field}>
                  <span className={styles.fieldLabel}>How does this image look?</span>
                  <SegmentedControl
                    aria-label="Verdict"
                    value={verdict}
                    onChange={(v) => setVerdict(v as Verdict)}
                    options={Verdict.options.map((v) => ({ value: v, label: VERDICT_LABELS[v] }))}
                  />
                  {verdict === null && <p className={styles.hint}>Choose one to continue.</p>}
                </section>

                <section className={styles.field}>
                  <span className={styles.fieldLabel}>Quick tags</span>
                  <div className={styles.tagGroups}>
                    {FEEDBACK_TAGS.map((group) => (
                      <div key={group.group} className={styles.tagGroup}>
                        <span className={styles.tagGroupLabel}>{group.group}</span>
                        <div className={styles.chipRow}>
                          {group.tags.map((t) => {
                            const active = tags.has(t.id);
                            return (
                              <button
                                key={t.id}
                                type="button"
                                className={styles.chip}
                                aria-pressed={active}
                                data-active={active || undefined}
                                onClick={() => setTags((prev) => toggle(prev, t.id))}
                              >
                                {t.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={styles.field}>
                  <span className={styles.fieldLabel}>What&rsquo;s wrong</span>
                  <div className={styles.chipRow}>
                    {allElements.map((el) => {
                      const active = elementsSel.has(el);
                      return (
                        <button
                          key={el}
                          type="button"
                          className={styles.chip}
                          aria-pressed={active}
                          data-active={active || undefined}
                          onClick={() => setElementsSel((prev) => toggle(prev, el))}
                        >
                          {el}
                        </button>
                      );
                    })}
                  </div>
                </section>

                {checkForImage && (
                  <Switch isSelected={includeCheck} onChange={setIncludeCheck}>
                    Include the automatic check&rsquo;s findings
                  </Switch>
                )}

                <section className={styles.field}>
                  <TextArea
                    label="Note"
                    value={note}
                    onChange={(v) => setNote(v.slice(0, NOTE_MAX))}
                    rows={3}
                    placeholder="Anything else worth recording about this image…"
                  />
                  <span className={styles.counter}>
                    {note.length}/{NOTE_MAX}
                  </span>
                </section>

                {signIn ? (
                  <SignInPrompt
                    onSignedIn={() => onSignedIn(handleSubmit)}
                    description="Feedback is saved under your own sign-in."
                  />
                ) : (
                  submit.isError && (
                    <Alert tone="error" title="Couldn't save this rating">
                      {submit.error.message}
                    </Alert>
                  )
                )}
              </div>
            </div>

            <div className={styles.actions}>
              <Button variant="default" onPress={onClose}>
                Cancel
              </Button>
              <Button variant="primary" loading={submit.isPending} disabled={!verdict} onPress={handleSubmit}>
                Submit rating
              </Button>
            </div>
          </>
        )}
      </Dialog>
    </Modal>
  );
}
