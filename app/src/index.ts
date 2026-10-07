import Router from '@koa/router';
import { runwayAuth } from '@runway/bay/runway';
import Koa from 'koa';

import { mountApi, mountStaticFallback } from './api-routes.ts';
import { media } from './media.ts';
import { refreshKbOverlay } from './server/feedback.ts';
import { mountStatic, mountTrpc } from './routes.ts';
import { UserSymbol } from './trpc.ts';

const app = new Koa();
app.proxy = true;

// Bay injects user identity via gateway headers. Present on internal
// (Google-OIDC) cells; customer-edition cells stamp an empty name, so the
// Runway profile (via runwayAuth below) is the identity source there — see
// resolveProfile in src/api.ts.
app.use(async (ctx, next) => {
  const email = ctx.get('x-auth-request-email');
  if (email) {
    ctx.state.user = {
      email,
      // The gateway carries the display name as UTF-8 bytes in latin1;
      // decode so non-ASCII names render correctly.
      name:
        Buffer.from(ctx.get('x-auth-request-name'), 'latin1').toString(
          'utf8'
        ) || undefined,
      username: ctx.get('x-auth-request-user') || undefined,
    };
  }
  ctx.req[UserSymbol] = ctx.state.user;
  await next();
});

// Bay's readiness/liveness probe. Must stay unauthenticated and precede
// runwayAuth() — runwayAuth() also excludes this path by default, but an
// explicit 200 here avoids depending on that default and on the SPA
// fallback (which only serves 200 once dist/index.html exists).
app.use(async (ctx, next) => {
  if (ctx.path === '/__bay/health') {
    ctx.status = 200;
    ctx.body = 'ok';
    return;
  }
  await next();
});

// Runway sign-in, optional at the door: a visitor without a Runway session
// reaches the app (`ctx.state.runway` is just unset, `ctx.state.viewer` says
// who they are), so an app shared as "anyone with the link" can be looked
// at before signing in. What stays gated is anything that spends credits:
// tRPC procedures built on `signedInProcedure` (src/trpc.ts) and raw routes
// behind `requireRunwayUser()` answer `401 sign_in_required`, and the client
// renders `<SignInPrompt>` to sign the visitor in with their own Runway
// account — their credits, not the owner's. Keep every generation, upload
// and paid model call behind one of those two; never let a route call
// `ctx.state.runway!` unguarded. Whether anyone *can* reach the app without
// signing in is decided by its sharing setting at the edge, not here.
app.use(runwayAuth({ optional: true }));

mountTrpc(app);
mountApi(app);

// Mount your own routers here — above the line below, so they answer before
// the static fallback and their answer is final (`bay add agent`'s router
// goes here).

// `/media/<key>` 302s to a presigned S3 GET for the saved copy of a rated
// image — but only under `feedback-images/`, the one prefix this app ever
// serves this way; anything else is an empty 404 (the gateway's branded
// page), not a redirect to an object this route was never meant to expose.
const mediaRouter = new Router();
mediaRouter.get('/media/{*key}', (ctx, next) => {
  const raw = ctx.params['key'];
  const key = Array.isArray(raw) ? raw.join('/') : raw;
  if (!key?.startsWith('feedback-images/')) {
    ctx.status = 404;
    ctx.body = '';
    return Promise.resolve();
  }
  return media(ctx, next);
});
app.use(mediaRouter.routes());

// Mounts the static middleware, and tells the /api gate which responses came
// out of it — so the SPA shell answering an API path is rewritten as JSON
// while a real handler's answer (HTML included) is left alone.
mountStaticFallback(app, mountStatic);

const port = Number(process.env['PORT'] ?? 3000);
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Bay's gateway pools the upstream connection to this pod. Node's default
// 5s keepAliveTimeout closes idle connections before the next request
// arrives, forcing a slow cold re-dial — raise both past the gateway's
// idle window (BayApp does this automatically; raw Koa apps must set it).
server.keepAliveTimeout = 120_000;
server.headersTimeout = 125_000;

// Rebuild the knowledge-base overlay (every approved edit, across dishes) so
// agents' prompts pick up edits approved on another replica. Runs after
// `listen` so a slow storage read never delays the health check, then every
// 5 minutes; `refreshKbOverlay` never throws.
void refreshKbOverlay();
setInterval(() => void refreshKbOverlay(), 5 * 60 * 1000).unref();
