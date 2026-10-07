import { ArrowRight, Lightbulb } from 'lucide-react';

import { recommendAngle } from '../../shared/rules.ts';
import type { Selections } from '../../shared/spec.ts';
import { useCameraIllustration } from '../lib/cameraIllustrations.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { ChoiceCardGroup } from '../ui/ChoiceCard.tsx';
import { SkeletonBlock, SkeletonText } from '../ui/Skeleton.tsx';
import { AnglePicker } from './AnglePicker.tsx';
import styles from './CameraStep.module.css';
import sceneStyles from './SceneStep.module.css';
import { StepActions } from './StepActions.tsx';

export function CameraStep({
  dish,
  sel,
  onCamera,
  onNext,
}: {
  /** The brief's hero dish, for the recommended angle. */
  dish: string;
  sel: Selections;
  onCamera: (c: { look: string; angle: string }) => void;
  onNext: () => void;
}) {
  const config = trpc.config.useQuery();

  if (config.isPending) {
    return (
      <section>
        <h1>Camera</h1>
        <SkeletonText rows={5} />
      </section>
    );
  }
  if (config.isError) {
    return (
      <section>
        <h1>Camera</h1>
        <Alert tone="error" title="Couldn't load the camera options">
          {config.error.message}
        </Alert>
      </section>
    );
  }

  const cfg = config.data;
  const rec = recommendAngle({ dish, prep: sel.prep, plating: sel.plating });
  const recAngle = rec && cfg.angles.find((a) => a.id === rec.angle);
  // Until the operator picks, the recommended angle is the selection.
  const cam = sel.camera ?? { ...cfg.defaults, angle: recAngle ? recAngle.id : cfg.defaults.angle };
  const selectedLook = cfg.looks.find((l) => l.id === cam.look);
  const selectedAngle = cfg.angles.find((a) => a.id === cam.angle);

  return (
    <section>
      <h1>Camera</h1>
      <p>Pick a look and an angle. The lens and aperture behind each look are handled for you.</p>
      <div className={sceneStyles.field}>
        <ChoiceCardGroup
          label="Look"
          value={cam.look}
          onChange={(look) => onCamera({ ...cam, look })}
          options={cfg.looks.map((l) => ({
            id: l.id,
            value: l.id,
            label: l.label,
            summary: l.help,
            media: <LookIllustration lookId={l.id} focalMm={l.focalMm} angleId={cam.angle} pitchDeg={selectedAngle?.pitchDeg} label={l.label} />,
          }))}
        />
      </div>
      <div className={sceneStyles.field}>
        <label className={sceneStyles.fieldLabel}>Angle</label>
        {rec && recAngle && (
          <p className={styles.recommendation}>
            <Lightbulb size={16} aria-hidden className={styles.recommendationIcon} />
            <span>
              <strong>Recommended for {dish || 'this dish'}: {recAngle.label.replace(/\s*\(default\)$/, '')}.</strong> {rec.reason}
              {cam.angle !== recAngle.id && (
                <>
                  {' '}
                  <button type="button" className={styles.recommendationLink} onClick={() => onCamera({ ...cam, angle: recAngle.id })}>
                    Use it
                  </button>
                </>
              )}
            </span>
          </p>
        )}
        <AnglePicker
          aria-label="Angle"
          lookId={cam.look}
          lookLabel={selectedLook?.label ?? ''}
          focalMm={selectedLook?.focalMm}
          value={cam.angle}
          onChange={(angle) => onCamera({ ...cam, angle })}
          options={cfg.angles.map((a) => ({ id: a.id, label: a.label, pitchDeg: a.pitchDeg }))}
          recommendedId={recAngle?.id}
        />
      </div>
      {cfg.looks.some((l) => l.placeholder) && (
        <div className={sceneStyles.hint}>Lens and angle values are placeholders until the team finalizes them.</div>
      )}
      <StepActions>
        <Button
          variant="primary"
          iconEnd={<ArrowRight size={16} aria-hidden />}
          onPress={() => {
            if (!sel.camera) onCamera(cam);
            onNext();
          }}
        >
          Continue
        </Button>
      </StepActions>
    </section>
  );
}

function LookIllustration({
  lookId,
  focalMm,
  angleId,
  pitchDeg,
  label,
}: {
  lookId: string;
  focalMm?: number;
  angleId: string;
  pitchDeg?: number;
  label: string;
}) {
  const state = useCameraIllustration(lookId, angleId, focalMm, pitchDeg);

  if (state.status === 'loading') return <SkeletonBlock height="100%" />;
  if (state.status === 'error') return <div className={sceneStyles.hint}>Illustration unavailable</div>;
  return <img src={state.url} alt={`${label} framing`} />;
}
