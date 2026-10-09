import Router from '@koa/router';
import Koa from 'koa';

import { mountApi, mountStaticFallback } from './api-routes.ts';
import { sessionMiddleware } from './server/auth.ts';
import { refreshKbOverlay } from './server/feedback.ts';
import { mediaPath, signedFileUrl } from './server/store.ts';
import { mountStatic, mountTrpc } from './routes.ts';
import { UserSymbol } from './trpc.ts';

const app = new Koa();
app.proxy = true;

// Health check for the host. Unauthenticated, ahead of everything else.
app.use(async (ctx, next) => {
  if (ctx.path === '/healthz') {
    ctx.status = 200;
    ctx.body = 'ok';
    return;
  }
  await next();
});

// Who is signed in (a Supabase magic-link session); sets ctx.state.user.
app.use(sessionMiddleware());
app.use(async (ctx, next) => {
  ctx.req[UserSymbol] = ctx.state.user;
  await next();
});

mountTrpc(app);
mountApi(app);

// `/media/<path>` 302s to a short-lived signed URL for a stored image, for
// signed-in users only. Paths are limited to the app's own prefixes.
const mediaRouter = new Router();
mediaRouter.get('/media/{*key}', async (ctx) => {
  const path = mediaPath(ctx.path);
  if (!path || !ctx.state.user) {
    ctx.status = 404;
    ctx.body = '';
    return;
  }
  try {
    const url = await signedFileUrl(path, { expiresIn: 3600, download: ctx.query['download'] !== undefined });
    ctx.set('Cache-Control', 'private, max-age=3000');
    ctx.redirect(url);
  } catch {
    ctx.status = 404;
    ctx.body = '';
  }
});
app.use(mediaRouter.routes());

mountStaticFallback(app, mountStatic);

const port = Number(process.env['PORT'] ?? 3000);
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Keep idle connections open longer than the host's load balancer does.
server.keepAliveTimeout = 120_000;
server.headersTimeout = 125_000;

// Rebuild the knowledge-base overlay (every approved edit, across dishes) so
// agents' prompts pick up edits approved elsewhere. Runs after `listen` so a
// slow read never delays the health check, then every 5 minutes.
void refreshKbOverlay();
setInterval(() => void refreshKbOverlay(), 5 * 60 * 1000).unref();
