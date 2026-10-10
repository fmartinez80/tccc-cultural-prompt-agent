// The action bar at the foot of every step: Back on the left, the step's own
// actions (Continue, Ask again, …) on the right. It sticks to the bottom of
// the window on long steps and sits at the bottom of the panel on short ones,
// so Continue is always in the same corner.

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { createContext, useContext, useId, useState, type ReactNode } from 'react';

import { Button } from '../ui/Button.tsx';
import styles from './StepActions.module.css';

/** The previous step, provided by App; undefined on the first step. */
export const StepBackContext = createContext<{ label: string; onBack: () => void } | undefined>(undefined);

export function StepActions({ children }: { children?: ReactNode }) {
  const back = useContext(StepBackContext);
  return (
    <>
      {/* Takes up the slack on short steps and keeps a gap on long ones. */}
      <div className={styles.spacer} aria-hidden />
      <div className={styles.bar}>
        <div className={styles.left}>
          {back && (
            <Button variant="default" icon={<ArrowLeft size={16} aria-hidden />} onPress={back.onBack} aria-label={`Back to ${back.label}`}>
              Back
            </Button>
          )}
        </div>
        <div className={styles.right}>{children}</div>
      </div>
    </>
  );
}

/** Why the primary action can't run yet, and where the missing input is. */
export interface Blocked {
  /** Names the missing input, e.g. "Add a hero dish to continue." */
  reason: string;
  /** Moves focus to that input when Continue is pressed anyway. */
  focus?: (() => void) | undefined;
}

/**
 * The step's primary action. When something legitimately stops it, it stays
 * focusable (`aria-disabled`) with the reason right beside it, and pressing it
 * anyway moves focus to the missing input instead of doing nothing.
 */
export function ContinueButton({
  children = 'Continue',
  icon,
  iconEnd = <ArrowRight size={16} aria-hidden />,
  blocked,
  onPress,
}: {
  children?: ReactNode;
  icon?: ReactNode;
  iconEnd?: ReactNode;
  blocked?: Blocked | null | undefined;
  onPress: () => void;
}) {
  const hintId = useId();
  // Bumped on each blocked press so the reason flashes again.
  const [attempt, setAttempt] = useState(0);
  return (
    <span className={styles.continue}>
      {blocked && (
        <span id={hintId} key={attempt} className={styles.blockedHint} data-attempt={attempt > 0 || undefined} role="status">
          {blocked.reason}
        </span>
      )}
      <Button
        variant="primary"
        icon={icon}
        iconEnd={iconEnd}
        blocked={!!blocked}
        aria-describedby={blocked ? hintId : undefined}
        onPress={() => {
          if (!blocked) return onPress();
          setAttempt((n) => n + 1);
          blocked.focus?.();
        }}
      >
        {children}
      </Button>
    </span>
  );
}

/** A small status chip that sits beside the primary action, e.g. the sketch review tally. */
export function ActionChip({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <span className={styles.chip} aria-label={label}>
      {children}
    </span>
  );
}
