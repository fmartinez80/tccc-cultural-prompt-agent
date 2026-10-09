import { initTRPC, TRPCError } from '@trpc/server';

import type { AppUser } from './server/auth.ts';
import { BRIEF_HEADER, briefFromHeader } from './server/generations.ts';
import type { CreateTrpcKoaContextOptions } from './vendor/trpc-koa-adapter.ts';

/** Stashes the Koa-resolved user onto the raw request so createContext
 * (which only sees the raw Node req/res, not the Koa ctx) can read it back. */
export const UserSymbol = Symbol('scene.user');

declare module 'node:http' {
  interface IncomingMessage {
    [UserSymbol]?: AppUser | undefined;
  }
}

export function createContext({ req, res }: CreateTrpcKoaContextOptions) {
  const header = req.headers[BRIEF_HEADER];
  return {
    req,
    res,
    user: req[UserSymbol],
    /** The brief the browser is working on, for labelling what gets generated. */
    brief: briefFromHeader(Array.isArray(header) ? header[0] : header),
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

export const router = t.router;

/** Only `profile` uses this: it answers "nobody" before sign-in. */
export const publicProcedure = t.procedure;

/** Everything else needs a signed-in, invited user. */
export const signedInProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.user) throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Sign in to continue.' });
  return next({ ctx: { ...ctx, user: ctx.user } });
});

/** Inviting people, changing limits, approving knowledge-base edits. */
export const adminProcedure = signedInProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') throw new TRPCError({ code: 'FORBIDDEN', message: 'Only an admin can do that.' });
  return next();
});
