// The landing page for anyone signed out: what Scene Composer is, then an
// email field that sends a magic link. Only invited emails get one (an admin
// invites people from the Admin page).

import { MailCheck } from 'lucide-react';
import { useState } from 'react';

import { sendMagicLink } from '../lib/auth.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { TextInput } from '../ui/TextInput.tsx';
import styles from './LoginPage.module.css';

const HOW_IT_WORKS: Array<{ title: string; text: string }> = [
  {
    title: 'Real products, real-world scale',
    text: 'Select your exact Coca-Cola SKU and automatically lock in true-to-life dimensions, so food portions, glasses, and packaging are always perfectly proportioned.',
  },
  {
    title: 'Get the local details right',
    text: 'Pairs regional meals with the right plates, napkins, and dining habits so your scene looks genuine to locals.',
  },
  {
    title: 'Arrange and preview in 3D',
    text: 'Tweak your table setup on screen, check a quick pencil sketch of your camera view, and adjust details before creating your image.',
  },
  {
    title: 'Fast results or deep flexibility',
    text: 'Generate a finished photo in minutes, or jump into the node workspace to pull out individual scene segments and prompts to use in your own creative workflow.',
  },
];

export function LoginPage({ error }: { error?: string | undefined }) {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [problem, setProblem] = useState<string | null>(error ?? null);

  const send = async () => {
    const value = email.trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      setProblem('Enter your full email address.');
      return;
    }
    setSending(true);
    setProblem(null);
    try {
      await sendMagicLink(value);
      setSentTo(value);
    } catch (err) {
      setProblem(err instanceof Error ? err.message : String(err));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.page}>
      <img src="/prodx-logo.png" alt="Prod X by Studio X" className={styles.logo} />
      <section className={styles.intro}>
        <h1 className={styles.headline}>Welcome to ProdX Scene Composer</h1>
        <p className={styles.pitch}>
          Setting the table for great brand stories just got a whole lot easier! ProdX Scene Composer helps creative teams
          design vibrant, authentic Coca-Cola meal scenes in minutes. Pick your market, select your product SKU, choose your
          menu, and build your scene with confidence.
        </p>
        <h2 className={styles.subhead}>How It Works</h2>
        <ul className={styles.points}>
          {HOW_IT_WORKS.map((p) => (
            <li key={p.title}>
              <strong>{p.title}:</strong> {p.text}
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign in</h2>
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
            <p className={styles.lead}>Sign in with your work email. We'll email you a one-click link; there's no password.</p>
            <TextInput
              type="email"
              label="Email"
              value={email}
              onChange={setEmail}
              autoFocus
              onPressEnter={() => void send()}
              disabled={sending}
            />
            <Button variant="primary" onPress={() => void send()} loading={sending}>
              Email me a sign-in link
            </Button>
          </>
        )}
        {problem && (
          <Alert tone="error" title="Couldn't send the link">
            {problem}
          </Alert>
        )}
      </div>
    </div>
  );
}
