import { useCallback } from 'react';

import { trpc } from '../trpc.ts';

/**
 * What every `<SignInPrompt onSignedIn>` in this app does once the session is
 * back: every cached query is refetched and then the failed call is retried:
 * `onSignedIn(() => generate.mutate(input))`.
 */
export function useOnSignedIn(): (retry?: () => void) => Promise<void> {
  const utils = trpc.useUtils();
  return useCallback(
    async (retry?: () => void) => {
      const refreshed = utils.invalidate();
      retry?.();
      await refreshed;
    },
    [utils]
  );
}
