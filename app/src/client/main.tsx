import './styles/tokens.css';
import './styles/global.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { LoginPage } from './auth/LoginPage.tsx';
import { activeBriefHeader } from './lib/activeBrief.ts';
import { useAuth } from './lib/auth.ts';
import { trpc } from './trpc.ts';
import { EnvBand } from './ui/EnvBand.tsx';
import { ErrorBoundary } from './ui/ErrorBoundary.tsx';

// While the app's server restarts (or a gateway answers in its place) the
// reply is a plain-text page such as "Method Not Allowed", which tRPC would
// surface as a JSON parse error. Turn that into a message the operator can act on.
async function readableFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  let res: Response;
  try {
    res = await fetch(input, init);
  } catch {
    throw new Error("Couldn't reach the app's server. Check your connection and try again.");
  }
  if (!(res.headers.get('content-type') ?? '').includes('json')) {
    const status = res.status === 200 ? '' : ` (HTTP ${res.status}${res.statusText ? ` ${res.statusText}` : ''})`;
    throw new Error(`The app's server didn't answer properly${status}. It's probably restarting, so wait a few seconds and try again.`);
  }
  return res;
}

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/trpc',
      // Queries go out as POST so a large batch input
      // never overflows the request URL.
      methodOverride: 'POST',
      fetch: readableFetch,
      // The brief being worked on, so each generated image is filed under its country and dish.
      headers: () => {
        const brief = activeBriefHeader();
        return brief ? { 'x-scene-brief': brief } : {};
      },
    }),
  ],
});

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root element');

/** The app for invited, signed-in users; the magic-link page for everyone else. */
function AuthGate() {
  const auth = useAuth();
  // A single quick request (the sign-in config); show nothing rather than a flash of the login page.
  if (auth.status === 'loading') return null;
  if (auth.status === 'signed-out') return <LoginPage error={auth.error} />;
  return <App />;
}

createRoot(root).render(
  <ErrorBoundary>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <EnvBand />
        <AuthGate />
      </QueryClientProvider>
    </trpc.Provider>
  </ErrorBoundary>
);
