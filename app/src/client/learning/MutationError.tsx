// Shared error rendering for the write mutations on the Learning page
// (lessonAdd/Update, kbEditUpdate): a sign-in prompt for a lapsed Runway
// session, otherwise the server's message next to the control that failed.

import { SignInPrompt, signInRequiredFrom } from '@runway/bay-react/runway-sign-in';

import { Alert } from '../ui/Alert.tsx';

export function MutationError({ error, onSignedIn }: { error: unknown; onSignedIn: () => void }) {
  if (!error) return null;
  const signIn = signInRequiredFrom(error);
  if (signIn) {
    return <SignInPrompt reauth={signIn.reauth} onSignedIn={onSignedIn} description="Sign in to your Runway account to save this change." />;
  }
  const message = error instanceof Error ? error.message : 'Something went wrong. Try again.';
  return (
    <Alert tone="error" title="Couldn't save that change">
      {message}
    </Alert>
  );
}
