// Sketch review's side panel, beside the sketch: the 3D layout guide the sketch is
// drawn from (so the two can be compared at a glance), the other arrangements when
// there is more than one, and the accent. The best-ranked layout is picked for the
// operator (PrepareLayout in LayoutStep.tsx). Pressing an arrangement previews it in
// the layout guide; Draw switches to it, with a note that it counts toward the monthly limit.

import { Pencil, RotateCw } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Dialog, Heading, Modal } from "react-aria-components";

import type { RuleEffects } from "../../api.ts";
import { MODEL_FRAMING_WIDEN } from "../../shared/rules.ts";
import { SKETCH_MODEL_LABEL } from "../../shared/sketch.ts";
import type { Selections } from "../../shared/spec.ts";
import type { AccentChoice, Decision } from "../../shared/types.ts";
import { renderProxy } from "../lib/renderProxy.ts";
import { Alert } from "../ui/Alert.tsx";
import { Button } from "../ui/Button.tsx";
import { SkeletonBlock } from "../ui/Skeleton.tsx";
import { AccentPicker } from "./AccentPicker.tsx";
import type { Brief, ComposeResult } from "./types.ts";
import styles from "./ArrangementBar.module.css";
import dialog from "./ReviewStep.module.css";

const OPTION_LETTERS = ["A", "B", "C"];

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
  const [big, setBig] = useState<string | null>(null);
  // The arrangement shown in the layout guide before switching to it; null shows the picked one.
  const [preview, setPreview] = useState<number | null>(null);
  const [accentOpen, setAccentOpen] = useState(false);
  const [answer, setAnswer] = useState<AccentAnswer | null>(null);

  const onTheGo = sel.scene?.venue === "on-the-go";
  const options = compose.options;
  const shown = preview ?? picked;
  const bp = options[shown]!.blueprint;

  // A new set of layouts, or a switch, ends the preview.
  useEffect(() => setPreview(null), [options, picked]);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => setExpanded(false), [shown]);
  // Read more only appears when the clamped text is actually cut off.
  const rationaleRef = useRef<HTMLParagraphElement>(null);
  const [overflows, setOverflows] = useState(false);
  useLayoutEffect(() => {
    const el = rationaleRef.current;
    if (!el || expanded) return;
    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [bp.layout_meta.rationale, expanded]);

  // Small pictures of every arrangement, drawn after the first paint. One arrangement has nothing to pick between.
  useEffect(() => {
    setThumbs(null);
    if (options.length < 2) return;
    const frame = requestAnimationFrame(() => {
      setThumbs(
        options.map((o) =>
          renderProxy(o.blueprint, compose.lighting, {
            width: 480,
            widen: MODEL_FRAMING_WIDEN,
          }),
        ),
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [options, compose.lighting]);

  // The shown arrangement's layout guide, without the composition guides: the same picture the sketch is drawn from.
  useEffect(() => {
    setBig(null);
    const frame = requestAnimationFrame(() =>
      setBig(
        renderProxy(bp, compose.lighting, {
          width: 960,
          widen: MODEL_FRAMING_WIDEN,
        }),
      ),
    );
    return () => cancelAnimationFrame(frame);
  }, [bp, compose.lighting]);

  const accentLine =
    sel.accent?.label ??
    (sel.napkin && onTheGo ? "Plain paper napkin" : "None");
  const current: AccentAnswer = {
    accent: sel.accent ?? null,
    napkin: !!sel.napkin && onTheGo,
  };
  const chosen = answer ?? current;
  const accentChanged =
    chosen.napkin !== current.napkin ||
    (chosen.accent?.name ?? null) !== (current.accent?.name ?? null);
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

  const previewing = preview !== null && preview !== picked;
  const switchTo = () => {
    if (preview !== null) onPick(preview);
  };

  return (
    <aside className={styles.bar} aria-label="Layout guide and arrangement">
      <figure className={styles.guide} data-preview={previewing || undefined}>
        <figcaption className={styles.guideHead}>
          <h3 className={styles.previewTitle}>Preview</h3>
          <span className={styles.guideLine}>
            <span
              className={styles.guideName}
              title={`Layout guide ${OPTION_LETTERS[shown]} · ${bp.layout_meta.archetype}`}
            >
              Layout guide {OPTION_LETTERS[shown]} · {bp.layout_meta.archetype}
            </span>
            {shown === picked && options.length > 1 && (
              <span className={styles.inUse}>Drawn</span>
            )}
          </span>
        </figcaption>
        <div className={styles.guideImage}>
          {big ? (
            <img
              src={big}
              alt={`3D layout guide of arrangement ${OPTION_LETTERS[shown]}, the shapes the sketch is drawn from`}
            />
          ) : (
            <SkeletonBlock height="100%" />
          )}
        </div>
        {/* Clamped to a fixed number of lines so switching arrangements never changes the panel's height; Read more opens it up. */}
        <div className={styles.rationaleWrap}>
          <p
            ref={rationaleRef}
            id="layout-rationale"
            className={styles.rationale}
            data-expanded={expanded || undefined}
            aria-live="polite"
          >
            {bp.layout_meta.rationale}
          </p>
          {(overflows || expanded) && (
            <button
              type="button"
              className={styles.more}
              aria-expanded={expanded}
              aria-controls="layout-rationale"
              onClick={() => setExpanded((e) => !e)}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </figure>

      {options.length > 1 && (
        <div className={styles.section}>
          <span className={styles.label}>Arrangement</span>
          <div className={styles.thumbs} role="group" aria-label="Arrangements">
            {options.map((o, i) => (
              <button
                key={i}
                type="button"
                className={styles.thumb}
                aria-pressed={i === shown}
                aria-label={`Preview arrangement ${OPTION_LETTERS[i]}: ${o.blueprint.layout_meta.archetype}${i === 0 ? ", best fit" : ""}${i === picked ? ", drawn" : ""}`}
                title={o.blueprint.layout_meta.rationale}
                onClick={() => setPreview(i === picked ? null : i)}
              >
                {thumbs ? (
                  <img src={thumbs[i]} alt="" />
                ) : (
                  <SkeletonBlock height="100%" />
                )}
                <span className={styles.thumbLabel}>{OPTION_LETTERS[i]}</span>
              </button>
            ))}
          </div>
          <Button
            variant="primary"
            icon={<RotateCw size={16} aria-hidden />}
            disabled={!previewing || drawing}
            onPress={switchTo}
          >
            {previewing
              ? hasSketch(preview)
                ? `Use ${OPTION_LETTERS[preview]}`
                : `Draw ${OPTION_LETTERS[preview]}`
              : `${OPTION_LETTERS[picked]} Is Drawn`}
          </Button>
          <p className={styles.hint}>
            {drawing && previewing
              ? "You can draw this once the current sketch has finished."
              : previewing && !hasSketch(preview)
                ? `Counts toward your monthly limit (${SKETCH_MODEL_LABEL}). Your marks on this sketch don't carry over.`
                : previewing
                  ? "Already drawn, so switching back is free."
                  : "Press an arrangement to preview it."}
          </p>
        </div>
      )}

      {rules?.needsAccent && (
        <div className={styles.accentRow}>
          <span className={styles.label}>Accent</span>
          <span className={styles.value}>{accentLine}</span>
          <Button
            size="sm"
            variant="ghost"
            icon={<Pencil size={14} aria-hidden />}
            aria-label="Change the accent"
            disabled={drawing}
            onPress={openAccent}
          >
            Change
          </Button>
        </div>
      )}

      {!!compose.notes?.length && (
        <Alert tone="info" title="Adjusted to fit">
          {compose.notes.join(" ")}
        </Alert>
      )}

      <Modal
        isOpen={accentOpen}
        onOpenChange={setAccentOpen}
        isDismissable
        className={dialog.modalOverlay}
      >
        <Dialog className={`${dialog.dialog} ${styles.accentDialog}`}>
          <div className={styles.accentHead}>
            <Heading slot="title" className={dialog.dialogTitle}>
              Change the Accent
            </Heading>
            <p className={dialog.dialogText}>
              A different accent re-arranges the table and draws a new sketch,
              which counts toward your monthly limit ({SKETCH_MODEL_LABEL}). Your marks
              on this sketch don't carry over.
            </p>
          </div>
          <div className={styles.accentBody}>
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
              inDialog
            />
          </div>
          <div className={`${dialog.dialogActions} ${styles.accentFoot}`}>
            <Button onPress={() => setAccentOpen(false)}>Cancel</Button>
            <Button
              variant="primary"
              icon={<RotateCw size={16} aria-hidden />}
              disabled={!accentChanged}
              onPress={applyAccent}
            >
              Apply and redraw
            </Button>
          </div>
        </Dialog>
      </Modal>
    </aside>
  );
}
