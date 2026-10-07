// The same error rendering TurnaroundRow uses, generalized for any workspace
// Nano Banana Pro job: a sign-in prompt, a terminal plan-denial alert with no
// retry, or the server's own message with the action still armed.

import { SignInPrompt, signInRequiredFrom } from '@runway/bay-react/runway-sign-in';

import { WORKSPACE_MODEL_LABEL } from '../../shared/workspace.ts';
import { isForbidden } from '../lib/useWorkspaceTasks.ts';
import { Alert } from '../ui/Alert.tsx';

export function TaskError({ error, cause, onRetry }: { error: string; cause: unknown; onRetry: () => void }) {
  const signIn = signInRequiredFrom(cause);
  if (signIn) {
    return (
      <SignInPrompt
        reauth={signIn.reauth}
        onSignedIn={onRetry}
        description={`${WORKSPACE_MODEL_LABEL} runs on your own Runway account and uses your own credits.`}
      />
    );
  }
  const forbidden = isForbidden(cause);
  return (
    <Alert tone="error" title={forbidden ? `Your plan can't run ${WORKSPACE_MODEL_LABEL}` : "Didn't generate"}>
      {forbidden ? `The signed-in Runway account's plan doesn't include ${WORKSPACE_MODEL_LABEL}, so this can't be generated.` : error}
    </Alert>
  );
}
