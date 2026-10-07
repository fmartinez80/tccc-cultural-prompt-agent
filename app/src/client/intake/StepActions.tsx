// The action bar at the foot of every step: Back on the left, the step's own
// actions (Continue, Ask again, …) on the right. It sticks to the bottom of
// the window on long steps and sits at the bottom of the panel on short ones,
// so Continue is always in the same corner.

import { ArrowLeft } from 'lucide-react';
import { createContext, useContext, type ReactNode } from 'react';

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
