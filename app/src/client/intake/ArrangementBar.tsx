// Sketch review's arrangement controls: the best-ranked layout is picked for the
// operator (PrepareLayout in LayoutStep.tsx), and this is where they try another
// one, change the accent, or look at the 3D layout picture the sketch is drawn from.
// Anything that draws a new sketch asks first, since that counts toward the monthly limit.

import { Download, Pencil, RotateCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Dialog, Heading, Modal } from 'react-aria-components';

import type { RuleEffects } from '../../api.ts';
import { MODEL_FRAMING_WIDEN } from '../../shared/rules.ts';
import { SKETCH_MODEL_LABEL } from '../../shared/sketch.ts';
import type { Selections } from '../../shared/spec.ts';
import type { AccentChoice, Decision } from '../../shared/types.ts';
import { renderProxy } from '../lib/renderProxy.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { triggerDownload } from '../ui/DownloadCopy.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { Switch } from '../ui/Switch.tsx';
import { AccentPicker } from './AccentPicker.tsx';
import type { Brief, ComposeResult } from './types.ts';
import styles from './ArrangementBar.module.css';
import dialog from './ReviewStep.module.css';

const OPTION_LETTERS = ['A', 'B', 'C'];

type AccentAnswer = { accent: AccentChoice | null; napkin: boolean };

export function ArrangementBar({
  brief,
  sel,
  rules,
  accentDecision,
  onAccentDecision,
  compose,
  picked,
  onPick,
  hasSketch,
  onAccent,
  onNapkin,
  drawing,
}: {
  brief: Brief;
  sel: Selections;
  rules: RuleEffects | null;
  accentDecision: Decision<AccentChoice> | null;
  onAccentDecision: (d: Decision<AccentChoice>) => void;
  compose: ComposeResult;
  picked: number;
  onPick: (i: number) => void;
  /** A detailed sketch is already saved for that arrangement, so switching to it is free. */
  hasSketch: (i: number) => boolean;
  /** Changing the accent re-composes the table: the layouts and the sketch start over. */
  onAccent: (v: AccentChoice | null) => void;
  onNapkin: () => void;
  /** A sketch is drawing: switching now would leave that draw behind. */
  drawing: boolean;
}) {
  const [thumbs, setThumbs] = useState<string[] | null>(null);
  const [show3d, setShow3d] = useState(false);
  const [big, setBig] = useState<string | null>(null);
  const [confirmPick, setConfirmPick] = useState<number | null>(null);
  const [accentOpen, setAccentOpen] = useState(false);
  const [answer, setAnswer] = useState<AccentAnswer | null>(null);

  const onTheGo = sel.scene?.venue === 'on-the-go';
  const options = compose.options;
  const bp = options[picked]!.blueprint;

  // Small pictures of every arrangement, drawn after the first paint.
  useEffect(() => {
    setThumbs(null);
    const frame = requestAnimationFrame(() => {
      setThumbs(options.map((o) => renderProxy(o.blueprint, compose.lighting, { width: 480, widen: MODEL_FRAMING_WIDEN })));
    });
    return () => cancelAnimationFrame(frame);
  }, [options, compose.lighting]);

  useEffect(() => {
    if (!show3d) return;
    setBig(null);
    const frame = requestAnimationFrame(() => setBig(renderProxy(bp, compose.lighting, { width: 1280, guides: true, widen: MODEL_FRAMING_WIDEN })));
    return () => cancelAnimationFrame(frame);
  }, [show3d, bp, compose.lighting]);

  const slug = `${brief.heroDish}-${brief.country}`.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'scene';
  // Full size, no guides: the same picture the image model gets.
  const downloadLayout = () => {
    const png = renderProxy(bp, compose.lighting, { width: 1920, widen: MODEL_FRAMING_WIDEN });
    triggerDownload(`${slug}-layout-${OPTION_LETTERS[picked]!.toLowerCase()}.png`, png);
  };

  const accentLine = sel.accent?.label ?? (sel.napkin && onTheGo ? 'Plain paper napkin' : 'None');
  const current: AccentAnswer = { accent: sel.accent ?? null, napkin: !!sel.napkin && onTheGo };
  const chosen = answer ?? current;
  const accentChanged = chosen.napkin !== current.napkin || (chosen.accent?.name ?? null) !== (current.accent?.name ?? null);
  const openAccent = () => {
    setAnswer(null);
    setAccentOpen(true);
  };
  const applyAccent = () => {
    setAccentOpen(false);
    if (!accentChanged) return;
    if (chosen.napkin) onNapkin();
    else onAccent(chosen.accent);
  };

  const pick = (i: number) => {
    if (i === picked) return;
    if (hasSketch(i)) onPick(i);
    else setConfirmPick(i);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.row}>
        <span className={styles.label}>Arrangement</span>
        <div className={styles.thumbs} role="group" aria-label="Arrangements">
          {options.map((o, i) => (
            <button
              key={i}
              type="button"
              className={styles.thumb}
              aria-pressed={i === picked}
              disabled={drawing && i !== picked}
              title={o.blueprint.layout_meta.rationale}
              onClick={() => pick(i)}
            >
              {thumbs ? <img src={thumbs[i]} alt="" /> : <SkeletonBlock height="100%" />}
              <span className={styles.thumbLabel}>
                {OPTION_LETTERS[i]} · {o.blueprint.layout_meta.archetype}
                {i === 0 && <span className={styles.best}>Best fit</span>}
              </span>
            </button>
          ))}
        </div>
      </div>
      {drawing && options.length > 1 && <p className={styles.hint}>You can switch arrangements once this sketch has finished drawing.</p>}

      {rules?.needsAccent && (
        <div className={styles.row}>
          <span className={styles.label}>Accent</span>
          <span className={styles.value}>{accentLine}</span>
          <Button size="sm" variant="ghost" icon={<Pencil size={14} aria-hidden />} aria-label="Change the accent" disabled={drawing} onPress={openAccent}>
            Change
          </Button>
        </div>
      )}

      {!!compose.notes?.length && (
        <Alert tone="info" title="Adjusted to fit">
          {compose.notes.join(' ')}
        </Alert>
      )}

      <div className={styles.row}>
        <Switch isSelected={show3d} onChange={setShow3d}>
          Show the 3D layout this sketch is drawn from
        </Switch>
      </div>
      {show3d && (
        <figure className={styles.layout3d}>
          {big ? <img src={big} alt={`3D layout of arrangement ${OPTION_LETTERS[picked]}, with the center-third and horizon guides`} /> : <SkeletonBlock height="100%" />}
          <figcaption className={styles.caption}>
            <span>{bp.layout_meta.rationale}</span>
            <Button size="sm" icon={<Download size={14} aria-hidden />} onPress={downloadLayout}>
              Download PNG
            </Button>
          </figcaption>
        </figure>
      )}

      <Modal isOpen={confirmPick !== null} onOpenChange={(open) => !open && setConfirmPick(null)} isDismissable className={dialog.modalOverlay}>
        <Dialog className={dialog.dialog}>
          <Heading slot="title" className={dialog.dialogTitle}>
            Switch to arrangement {confirmPick !== null ? OPTION_LETTERS[confirmPick] : ''}?
          </Heading>
          <p className={dialog.dialogText}>
            A new pencil sketch is drawn for it, which counts toward your monthly limit ({SKETCH_MODEL_LABEL}). Your Working and Change marks on this sketch
            don't carry over.
          </p>
          {confirmPick !== null && <p className={dialog.dialogText}>{options[confirmPick]!.blueprint.layout_meta.rationale}</p>}
          <div className={dialog.dialogActions}>
            <Button onPress={() => setConfirmPick(null)}>Keep this one</Button>
            <Button
              variant="primary"
              icon={<RotateCw size={16} aria-hidden />}
              onPress={() => {
                if (confirmPick !== null) onPick(confirmPick);
                setConfirmPick(null);
              }}
            >
              Switch and draw
            </Button>
          </div>
        </Dialog>
      </Modal>

      <Modal isOpen={accentOpen} onOpenChange={setAccentOpen} isDismissable className={dialog.modalOverlay}>
        <Dialog className={`${dialog.dialog} ${styles.accentDialog}`}>
          <Heading slot="title" className={dialog.dialogTitle}>
            Change the accent
          </Heading>
          <p className={dialog.dialogText}>
            A different accent re-arranges the table and draws a new sketch, which counts toward your monthly limit ({SKETCH_MODEL_LABEL}). Your marks on
            this sketch don't carry over.
          </p>
          <AccentPicker
            brief={brief}
            sel={sel}
            items={rules?.items}
            decision={accentDecision}
            selected={chosen.napkin ? undefined : chosen.accent}
            onDecision={onAccentDecision}
            onPick={(v) => setAnswer({ accent: v, napkin: false })}
            napkin={chosen.napkin}
            onNapkin={() => setAnswer({ accent: null, napkin: true })}
          />
          <div className={dialog.dialogActions}>
            <Button onPress={() => setAccentOpen(false)}>Cancel</Button>
            <Button variant="primary" icon={<RotateCw size={16} aria-hidden />} disabled={!accentChanged} onPress={applyAccent}>
              Apply and redraw
            </Button>
          </div>
        </Dialog>
      </Modal>
    </div>
  );
}
