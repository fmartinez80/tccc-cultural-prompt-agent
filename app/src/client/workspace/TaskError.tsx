// The same error rendering TurnaroundRow uses, generalized for any workspace
// Nano Banana Pro job: a sign-in prompt, a terminal "monthly limit reached"
// alert with no retry, or the server's own message with the action still armed.

import { SignInPrompt, signInRequiredFrom } from '../lib/signIn.tsx';

import { isForbidden } from '../lib/useWorkspaceTasks.ts';
import { Alert } from '../ui/Alert.tsx';

export function TaskError({ error, cause, onRetry }: { error: string; cause: unknown; onRetry: () => void }) {
  const signIn = signInRequiredFrom(cause);
  if (signIn) {
    return (
      <SignInPrompt
        onSignedIn={onRetry}
      />
    );
  }
  const forbidden = isForbidden(cause);
  return (
    <Alert tone="error" title={forbidden ? 'Monthly limit reached' : "Didn't generate"}>
      {error}
    </Alert>
  );
}
