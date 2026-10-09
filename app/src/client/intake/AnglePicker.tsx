import { Check } from 'lucide-react';
import { Radio, RadioGroup } from 'react-aria-components';

import { useCameraIllustration } from '../lib/cameraIllustrations.ts';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import styles from './AnglePicker.module.css';

export type AnglePickerOption = {
  id: string;
  label: string;
  pitchDeg?: number;
};

export type AnglePickerProps = {
  'aria-label': string;
  value: string | null;
  onChange: (value: string) => void;
  options: AnglePickerOption[];
  /** The currently selected look, so the angle row is shown with that look's framing. */
  lookId: string;
  lookLabel: string;
  focalMm?: number;
  /** The angle recommended for this entree: its card gets a "Recommended" tag. */
  recommendedId?: string | undefined;
};

/** Three cards, one per camera angle, each showing the same scene from that angle, framed like the currently selected look. */
export function AnglePicker({ 'aria-label': ariaLabel, value, onChange, options, lookId, lookLabel, focalMm, recommendedId }: AnglePickerProps) {
  return (
    <RadioGroup aria-label={ariaLabel} value={value ?? ''} onChange={onChange} className={styles.group}>
      {lookLabel && <p className={styles.framingNote}>Shown with the {lookLabel} framing.</p>}
      <div className={styles.grid}>
        {options.map((o) => (
          <Radio key={o.id} value={o.id} aria-label={o.id === recommendedId ? `${o.label} (recommended)` : o.label} className={styles.card}>
            {({ isSelected }) => (
              <>
                <div className={styles.media}>
                  <AngleIllustration lookId={lookId} angleId={o.id} focalMm={focalMm} pitchDeg={o.pitchDeg} label={o.label} />
                  {isSelected && <Check size={16} className={styles.check} aria-hidden />}
                </div>
                <div className={styles.label}>{o.label}</div>
                {o.id === recommendedId && <span className={styles.recommended}>Recommended</span>}
              </>
            )}
          </Radio>
        ))}
      </div>
    </RadioGroup>
  );
}

function AngleIllustration({
  lookId,
  angleId,
  focalMm,
  pitchDeg,
  label,
}: {
  lookId: string;
  angleId: string;
  focalMm?: number;
  pitchDeg?: number;
  label: string;
}) {
  const state = useCameraIllustration(lookId, angleId, focalMm, pitchDeg);

  if (state.status === 'loading') return <SkeletonBlock height="100%" />;
  if (state.status === 'error') {
    return (
      <div className={styles.fallback}>
        <div className={styles.fallbackLabel}>{label}</div>
        <div className={styles.fallbackNote}>Illustration unavailable</div>
      </div>
    );
  }
  return <img src={state.url} alt="" className={styles.image} />;
}
