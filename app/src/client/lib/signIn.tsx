// What a component shows when the server says the session has ended: a
// button that refreshes the session and retries, or goes back to the
// sign-in page when the session can't be refreshed. (Replaces Runway's popup
// sign-in.)

import { TRPCClientError } from '@trpc/client';

import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { refreshOrSignOut } from './auth.ts';

/** Truthy when the error means "sign in again". */
export function signInRequiredFrom(err: unknown): { reason: string } | null {
  if (err instanceof TRPCClientError && (err.data as { code?: string } | undefined)?.code === 'UNAUTHORIZED') {
    return { reason: err.message };
  }
  return null;
}

export function SignInPrompt({
  title = 'Your session has ended',
  description,
  onSignedIn,
}: {
  title?: string;
  description?: string;
  /** Retries the call that failed, once the session is back. */
  onSignedIn?: () => void;
}) {
  return (
    <Alert tone="info" title={title}>
      {description ?? 'Reconnect to carry on. Your draft is saved.'}
      <div style={{ marginTop: 8 }}>
        <Button
          size="sm"
          variant="primary"
          onPress={async () => {
            if (await refreshOrSignOut()) onSignedIn?.();
          }}
        >
          Reconnect
        </Button>
      </div>
    </Alert>
  );
}
