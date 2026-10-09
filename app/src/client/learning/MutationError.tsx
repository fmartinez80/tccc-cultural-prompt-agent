// Shared error rendering for the write mutations on the Learning page
// (lessonAdd/Update, kbEditUpdate): a sign-in prompt for a lapsed
// session, otherwise the server's message next to the control that failed.

import { SignInPrompt, signInRequiredFrom } from '../lib/signIn.tsx';

import { Alert } from '../ui/Alert.tsx';

export function MutationError({ error, onSignedIn }: { error: unknown; onSignedIn: () => void }) {
  if (!error) return null;
  const signIn = signInRequiredFrom(error);
  if (signIn) {
    return <SignInPrompt onSignedIn={onSignedIn} />;
  }
  const message = error instanceof Error ? error.message : 'Something went wrong. Try again.';
  return (
    <Alert tone="error" title="Couldn't save that change">
      {message}
    </Alert>
  );
}
