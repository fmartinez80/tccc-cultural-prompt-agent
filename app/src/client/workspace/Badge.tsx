import type { ReactNode } from 'react';

import nodeStyles from './NodeCard.module.css';

/** The small "Edited" / "From rules" pills shown in a node's header. */
export function Badge({ children }: { children: ReactNode }) {
  return <span className={nodeStyles.badge}>{children}</span>;
}
