import { randomUUID } from 'node:crypto';

import Router from '@koa/router';
import { strToU8, zipSync } from 'fflate';
import type Koa from 'koa';

import { env } from './server/env.ts';
import { mediaUrl, putFile } from './server/store.ts';
import { allowTry, codeLoginToken, codeMatches, CodeLoginError } from './server/codeLogin.ts';
import { refreshKbOverlay } from './server/feedback.ts';
import { knowledgeExport } from './server/knowledge.ts';

/**
 * The one boundary literal for raw routes. `mountApi`'s router prefix, the
 * `isApiPath` predicate below and the JSON gate all read it, so renaming the
 * prefix (or pointing it at `/v1`) moves the guard with it instead of leaving
 * a predicate that silently stops matching.
 */
export const API_PREFIX = '/api';

// Raw (non-tRPC) Koa routes live here, under `/api`: the browser's public
// config and binary image uploads. `index.ts` mounts this before the static
// fallback. The dev server proxies `/api` (see `vite.config.ts`).
export function isApiPath(path: string): boolean {
  // Normalize the way the router does before comparing. `@koa/router` matches
  // case-insensitively and treats a trailing slash as optional, so a literal
  // comparison would miss `/API/echo` and `/api/echo/` — requests the router
  // still answers, and whose unmatched siblings would otherwise slip past the
  // gate and come back as the SPA shell with a 200.
  const normalized = path.toLowerCase().replace(/\/+$/, '');
  const prefix = API_PREFIX.toLowerCase();
  return normalized === prefix || normalized.startsWith(`${prefix}/`);
}

/**
 * Whether some handler already owns the response. An explicit status is an
 * answer even with no body (a 204 delete, a 202 accepted); only an untouched
 * Koa 404 is an unanswered request.
 *
 * Exported so `mountStatic`'s catch-all in `routes.ts` shares this one
 * definition of the middleware contract instead of inlining its own copy.
 */
export function isAnswered(ctx: Koa.Context): boolean {
  return ctx.body != null || ctx.status !== 404;
}

/** Requests the static middleware answered — see `mountStaticFallback`. */
const staticAnswers = new WeakSet<Koa.Context>();

/**
 * Mounts the static middleware with a provenance marker wrapped around it:
 * whatever it answers (a file out of `dist/`, or the SPA shell from its
 * catch-all) is recorded, which is what lets the gate below tell the SPA
 * fallback apart from a real handler's answer.
 *
 * It takes the mount as an argument rather than being a separate `app.use`
 * line on purpose: a bare marker records everything mounted below it, so a
 * router slipped between the marker and `mountStatic` would have its own HTML
 * answers (an OAuth consent page, a rendered preview) mistaken for the shell
 * and rewritten into a JSON 404. Here the two are inseparable, and "mount
 * your router before the static fallback" is again one line to be above.
 */
export function mountStaticFallback(app: Koa, mount: (app: Koa) => void) {
  // `mount` registers its middleware with `app.use`, so collect those calls
  // instead of letting them reach the real app: they have to go on after the
  // marker, and nothing else may.
  const staticMiddleware: Koa.Middleware[] = [];
  const collector = {
    use(middleware: Koa.Middleware) {
      staticMiddleware.push(middleware);
      return collector;
    },
  };
  mount(collector as unknown as Koa);

  app.use(async (ctx, next) => {
    const answeredBefore = isAnswered(ctx);
    await next();
    if (!answeredBefore && isAnswered(ctx)) staticAnswers.add(ctx);
  });
  for (const middleware of staticMiddleware) app.use(middleware);
}

export function mountApi(app: Koa) {
  const api = new Router({ prefix: API_PREFIX });

  // What the browser needs to start a magic-link sign-in. The anon key is
  // public by design: every table has row-level security with no policies.
  api.get('/config', (ctx) => {
    ctx.body = { supabaseUrl: env.supabaseUrl, supabaseAnonKey: env.supabaseAnonKey, codeLogin: Boolean(env.accessCode), envLabel: env.envLabel };
  });

  // Sign in with the team access code (see src/server/codeLogin.ts). Answers a
  // one-time token the browser exchanges for a session; no email is sent.
  api.post('/code-login', async (ctx) => {
    if (!env.accessCode) return ctx.throw(404, 'Access-code sign-in is turned off.');
    if (!allowTry(ctx.ip)) return ctx.throw(429, 'Too many tries. Wait ten minutes and try again.');
    let raw = '';
    for await (const chunk of ctx.req) {
      raw += String(chunk);
      if (raw.length > 2000) return ctx.throw(413, 'Request too large.');
    }
    let body: { email?: unknown; code?: unknown };
    try {
      body = JSON.parse(raw) as typeof body;
    } catch {
      return ctx.throw(400, 'Send JSON.');
    }
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const code = typeof body.code === 'string' ? body.code : '';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 200) return ctx.throw(400, 'Enter your full email address.');
    if (!codeMatches(code)) return ctx.throw(403, "That access code isn't right.");
    try {
      ctx.body = await codeLoginToken(email);
    } catch (err) {
      if (err instanceof CodeLoginError) return ctx.throw(400, err.message);
      throw err;
    }
  });

  // An image the browser made or picked (the layout proxy, a reference), sent
  // as raw bytes rather than base64 text inside JSON. Stored under the user's
  // uploads; the answer is its `/media/` URL.
  api.post('/upload', async (ctx) => {
    const user = ctx.state.user;
    if (!user) return ctx.throw(401, 'Sign in to continue.');
    const type = ctx.request.type.toLowerCase();
    const ext = UPLOAD_TYPES[type];
    if (!ext) ctx.throw(415, 'Use a PNG, JPEG or WebP image.');
    const chunks: Buffer[] = [];
    let total = 0;
    for await (const chunk of ctx.req) {
      const buf: Buffer = typeof chunk === 'string' ? Buffer.from(chunk) : chunk;
      total += buf.length;
      if (total > MAX_UPLOAD_BYTES) ctx.throw(413, 'That image is larger than 4 MB; use a smaller one.');
      chunks.push(buf);
    }
    if (!total) ctx.throw(400, 'The image was empty.');
    const path = `uploads/${user.id}/${randomUUID()}.${ext}`;
    await putFile(path, new Uint8Array(Buffer.concat(chunks)), type);
    ctx.body = { url: mediaUrl(path) };
  });

  // The whole knowledge base as a zip of its markdown files, with approved
  // Learning edits merged in — the files exactly as the agents read them.
  api.get('/knowledge-base.zip', async (ctx) => {
    if (!ctx.state.user) return ctx.throw(401, 'Sign in to continue.');
    await refreshKbOverlay();
    const files = knowledgeExport();
    if (!files.length) {
      ctx.status = 404;
      ctx.body = { error: 'The knowledge base is not bundled with this build.' };
      return;
    }
    const entries: Record<string, Uint8Array> = {};
    for (const f of files) entries[`knowledge-base/${f.path}`] = strToU8(f.text);
    const date = new Date().toISOString().slice(0, 10);
    ctx.set('Content-Disposition', `attachment; filename="knowledge-base-${date}.zip"`);
    ctx.set('Cache-Control', 'no-store');
    ctx.type = 'application/zip';
    ctx.body = Buffer.from(zipSync(entries, { level: 6 }));
  });

  // The gate wraps `await next()` rather than terminating, so middleware
  // mounted after `mountApi(app)` still sees `/api` requests.
  app.use(apiJsonGate(api));
  app.use(api.routes());
}

const UPLOAD_TYPES: Record<string, string> = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp' };
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;

/**
 * Keeps `/api` JSON-only: an unmatched or wrong-method API request comes back
 * as a JSON 404/405 instead of the SPA shell with a 200 (which makes a
 * caller's `res.json()` choke on `<!doctype html>` and an uptime check report
 * a healthy route that does not exist).
 *
 * It decides 405-vs-404 from `api`'s own route table only, and only once
 * nothing else has answered, so a downstream handler's own status is never
 * second-guessed (unlike the router's own `allowedMethods` middleware, which
 * rewrites a deliberate 404 into a 405 and an unusual-method probe into a
 * `501 Not Implemented`).
 *
 * A thrown error is the chain's other exit, and Koa's default handler answers
 * it as `text/plain` — so the gate catches it too: `readJsonBody`'s own
 * 415/413/400 and an unexpected 500 alike come back as JSON, or a caller that
 * always calls `res.json()` still chokes on exactly the class of response
 * this gate exists to eliminate.
 */
function apiJsonGate(api: Router): Koa.Middleware {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      if (!isApiPath(ctx.path) || ctx.headerSent || !ctx.writable) throw err;
      answerErrorAsJson(ctx, err);
      return;
    }
    if (!isApiPath(ctx.path)) return;
    // Same exit as the catch branch: once the response has started, every
    // answer below is unwritable — `clearResponseHeaders` calls
    // `res.removeHeader()` on flushed headers and throws
    // ERR_HTTP_HEADERS_SENT. A handler that streamed raw bytes with
    // `ctx.res.write()` without setting `ctx.status` looks unanswered here.
    if (ctx.headerSent || !ctx.writable) return;

    // Exactly two responses get rewritten: a request nothing answered, and the
    // SPA shell answering an API path. The shell is recognised by provenance
    // (`mountStaticFallback` records what the static middleware produced), not
    // by "HTML from a path this router doesn't own" — otherwise a later /api
    // mount that deliberately answers HTML (an OAuth consent page, a rendered
    // preview) would be clobbered into a JSON 404.
    const spaFallback = staticAnswers.has(ctx) && ctx.response.is('html');
    if (isAnswered(ctx) && !spaFallback) return;

    const matched = api.match(ctx.path, ctx.method);
    const allowed = [
      ...new Set(matched.path.flatMap((layer) => layer.methods)),
    ];
    if (allowed.length > 0 && matched.pathAndMethod.length === 0) {
      // Strip first, then re-set `Allow`: the header belongs to the answer the
      // gate is writing, not to the handler it is replacing.
      clearResponseHeaders(ctx);
      ctx.set('Allow', allowed.join(', '));
      if (ctx.method === 'OPTIONS') {
        ctx.status = 200;
        ctx.body = '';
        return;
      }
      ctx.status = 405;
      ctx.body = { error: 'Method Not Allowed' };
      return;
    }

    clearResponseHeaders(ctx);
    ctx.status = 404;
    ctx.body = { error: 'Not Found' };
  };
}

/**
 * Discards every response header already set, the way Koa's `ctx.onerror`
 * does before it writes an error. Every answer the gate synthesizes over a
 * partially-run request goes through this first: a middleware under `/api`
 * that set `Cache-Control: public, max-age=3600` or a `Content-Disposition`
 * attachment filename and then delegated would otherwise have a CDN cache the
 * gate's JSON 404, or a browser save the JSON error as `report.csv`.
 */
function clearResponseHeaders(ctx: Koa.Context): void {
  for (const name of ctx.res.getHeaderNames()) ctx.res.removeHeader(name);
}

/**
 * Mirrors Koa's own error handling, in JSON: keep the error's status, use its
 * message only when it is meant to be public (`http-errors` sets `expose` on
 * the 4xx that `ctx.throw` mints), and fall back to the status' standard
 * reason phrase otherwise. Server errors still reach the app's `error`
 * listeners so they keep being logged.
 *
 * Like Koa's `ctx.onerror`, it discards every response header the failed
 * handler already set before writing the error — otherwise a route that set
 * `Cache-Control: public, max-age=3600` or a `Content-Disposition` attachment
 * filename and then threw would hand a CDN a cacheable 500, or a browser a
 * JSON error saved as `report.csv`. The error's own `headers` (a 405's
 * `Allow`, a 401's `WWW-Authenticate`) are then reapplied, again as Koa does.
 */
function answerErrorAsJson(ctx: Koa.Context, err: unknown): void {
  const e = err as {
    status?: unknown;
    expose?: unknown;
    message?: unknown;
    headers?: unknown;
  };
  const status =
    typeof e.status === 'number' &&
    Number.isInteger(e.status) &&
    e.status >= 400 &&
    e.status <= 599
      ? e.status
      : 500;
  if (status >= 500) ctx.app.emit('error', err, ctx);
  clearResponseHeaders(ctx);
  if (e.headers !== null && typeof e.headers === 'object') {
    ctx.set(e.headers as Record<string, string>);
  }
  ctx.status = status;
  ctx.body = {
    // `ctx.message` is the standard reason phrase for the status just set.
    error:
      e.expose === true && typeof e.message === 'string' && e.message !== ''
        ? e.message
        : ctx.message,
  };
}
