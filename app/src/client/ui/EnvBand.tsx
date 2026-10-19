// Non-production copies (APP_ENV_LABEL, e.g. "Staging") show a fixed band across the top of
// every page, sign-in included, so nobody mistakes them for the live app. On production the
// label is empty and nothing renders.
import { useEffect, useState } from 'react';

import { envLabel } from '../lib/auth.ts';
import styles from './EnvBand.module.css';

export function EnvBand() {
  const [label, setLabel] = useState('');
  useEffect(() => {
    void envLabel()
      .then(setLabel)
      .catch(() => {});
  }, []);
  // The band's height (--env-band-h) pushes the page, sticky headers and overlays below it.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('has-env-band', Boolean(label));
    return () => root.classList.remove('has-env-band');
  }, [label]);
  if (!label) return null;
  return (
    <div className={styles.band} role="status">
      {label}
    </div>
  );
}
