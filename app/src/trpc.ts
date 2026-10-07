import {
  type BayViewerKind,
  getBayViewer,
  getRunwayClient,
  getRunwaySignInUrl,
  runwayAuthGated,
  SIGN_IN_REQUIRED,
} from '@runway/bay/runway';
import { initTRPC, TRPCError } from '@trpc/server';

import type { CreateTrpcKoaContextOptions } from './vendor/trpc-koa-adapter.ts';

/** Gateway-header identity, set by the auth middleware in src/index.ts. */
export interface GatewayUser {
  email: string;
  name?: string | undefined;
  username?: string | undefined;
}

/** Stashes the Koa-resolved gateway user onto the raw request so createContext
 * (which only sees the raw Node req/res, not the Koa ctx) can read it back. */
export const UserSymbol = Symbol('bay.gatewayUser');

declare module 'node:http' {
  interface IncomingMessage {
    [UserSymbol]?: GatewayUser | undefined;
  }
}

declare module 'koa' {
  interface DefaultState {
    user?: GatewayUser | undefined;
  }
}

export function createContext({ req, res }: CreateTrpcKoaContextOptions) {
  return {
    // SDK helpers that talk to the platform on the user's behalf (e.g.
    // getMcpClient from @runway/bay/mcp) need the inbound request for its
    // gateway cookies, so keep req/res on the context.
    req,
    res,
    user: req[UserSymbol],
    // runwayAuth() (src/index.ts) attaches the authenticated RunwayClient to
    // the raw request; this reads the same instance for tRPC. Unset for a
    // visitor with no Runway session — see `signedInProcedure`.
    runway: getRunwayClient(req),
    // Who is looking, per the edge: a `member` of this workspace, a `guest`
    // (another Runway account — only on an app shared with anyone), or
    // `anonymous` (no session — same). Branch on it for member-only data.
    viewer: (getBayViewer(req) ?? 'member') as BayViewerKind,
    // The sign-in URL for this request; `errorFormatter` hands it to the
    // client with every UNAUTHORIZED error so `<SignInPrompt>` can open it.
    signInUrl: getRunwaySignInUrl(req),
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create({
  // An UNAUTHORIZED error — from `signedInProcedure` below, or from a stale
  // session `src/api.ts` reclassifies — carries the sign-in URL as
  // `data.reauth`. The client's `signInRequiredFrom()` reads that shape and
  // `<SignInPrompt>` opens it in a popup, then retries the call. A FORBIDDEN
  // (plan) denial deliberately gets none: signing in again can't clear it.
  errorFormatter({ shape, error, ctx }) {
    if (error.code !== 'UNAUTHORIZED' || !ctx?.signInUrl) return shape;
    return { ...shape, data: { ...shape.data, reauth: ctx.signInUrl } };
  },
});

export const router = t.router;

/** A procedure any visitor can call — browsing, listing, public reads. */
export const publicProcedure = t.procedure;

/**
 * A procedure that spends the visitor's Runway credits (or reads their
 * account): generations, uploads, task history. Without a Runway session it
 * answers UNAUTHORIZED with the sign-in URL attached (see `errorFormatter`),
 * which the client turns into a sign-in prompt; with one, `ctx.runway` is
 * narrowed to a present `RunwayClient` for the resolver. Never downgrade a
 * credit-spending procedure to `publicProcedure` to make a preview or an
 * anonymous visitor "work" — there is no account to bill.
 */
export const signedInProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.runway) {
    // Same refusal as `requireRunwayUser()`: on a path `runwayAuth()` never
    // gated (mounted first, or in its `exclude` list) nobody can have a
    // session, so a sign-in prompt would loop a signed-in member forever.
    // Say it's a wiring problem instead.
    if (!runwayAuthGated(ctx.req)) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message:
          'runway_auth_not_configured: mount runwayAuth() before tRPC and keep /trpc out of its exclude list',
      });
    }
    throw new TRPCError({ code: 'UNAUTHORIZED', message: SIGN_IN_REQUIRED });
  }
  return next({ ctx: { ...ctx, runway: ctx.runway } });
});
