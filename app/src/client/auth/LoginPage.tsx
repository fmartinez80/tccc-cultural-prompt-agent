// The sign-in page: work email plus the team access code when one is set on
// the server (no email sent), otherwise an emailed magic link for invited
// people (an admin invites them from the Admin page).

import { MailCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

import { codeLoginEnabled, sendMagicLink, signInWithCode } from '../lib/auth.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { TextInput } from '../ui/TextInput.tsx';
import styles from './LoginPage.module.css';

export function LoginPage({ error }: { error?: string | undefined }) {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [problem, setProblem] = useState<string | null>(error ?? null);
  // With a team access code set on the server, sign-in uses it and sends no email.
  const [useCode, setUseCode] = useState(false);
  const [code, setCode] = useState('');
  useEffect(() => {
    codeLoginEnabled().then(setUseCode, () => {});
  }, []);

  const send = async () => {
    const value = email.trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      setProblem('Enter your full email address.');
      return;
    }
    if (useCode && !code.trim()) {
      setProblem('Enter the access code your team shared with you.');
      return;
    }
    setSending(true);
    setProblem(null);
    try {
      if (useCode) await signInWithCode(value, code);
      else {
        await sendMagicLink(value);
        setSentTo(value);
      }
    } catch (err) {
      setProblem(err instanceof Error ? err.message : String(err));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <img src="/prodx-logo.png" alt="Prod X by Studio X" className={styles.logo} />
        <h1 className={styles.title}>Scene Composer</h1>
        {sentTo ? (
          <div className={styles.sent}>
            <MailCheck size={28} aria-hidden />
            <p>
              We sent a sign-in link to <strong>{sentTo}</strong>. Open it on this device to come straight back here
              signed in.
            </p>
            <Button size="sm" variant="ghost" onPress={() => setSentTo(null)}>
              Use a different email
            </Button>
          </div>
        ) : (
          <>
            <p className={styles.lead}>
              {useCode
                ? 'Sign in with your work email and the access code your team shared with you.'
                : "Sign in with your work email. We'll email you a one-click link; there's no password."}
            </p>
            <TextInput
              type="email"
              label="Email"
              value={email}
              onChange={setEmail}
              autoFocus
              onPressEnter={() => void send()}
              disabled={sending}
            />
            {useCode && (
              <TextInput
                type="password"
                label="Access code"
                value={code}
                onChange={setCode}
                onPressEnter={() => void send()}
                disabled={sending}
              />
            )}
            <Button variant="primary" onPress={() => void send()} loading={sending}>
              {useCode ? 'Sign in' : 'Email me a sign-in link'}
            </Button>
          </>
        )}
        {problem && (
          <Alert tone="error" title={useCode ? "Couldn't sign you in" : "Couldn't send the link"}>
            {problem}
          </Alert>
        )}
      </div>
    </div>
  );
}
