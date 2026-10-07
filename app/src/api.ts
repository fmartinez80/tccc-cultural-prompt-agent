import {
  getRunwayToken,
  RunwayAuthError,
  RunwayTaskError,
  supportedAspectRatios,
  type RunwayClient,
  type RunwayProfile,
} from '@runway/bay/runway';
import { decodeJwtPayload } from '@runway/bay/runway/cookie';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { type AppProfile, resolveProfileIdentity } from './profile.ts';
import type { GatewayUser } from './trpc.ts';
import { buildTask, parseAnswer, repairTask, type AgentResult } from './server/agent.ts';
import {
  addLesson,
  approvedEditsMarkdown,
  confirmedLessons,
  dishFeedback,
  exportFeedback,
  listDishes,
  submitFeedback,
  updateKbEdit,
  updateLesson,
  type Actor,
} from './server/feedback.ts';
import { buildLearnTask, mergeLearnAnswer } from './server/learn.ts';
import { loadKnowledge } from './server/knowledge.ts';
import { glassReferenceLine, pouredGlass, productElement, skuReferenceLines, skuShots, type SkuShot } from './server/references.ts';
import { SKU_CATALOG } from './shared/registry.ts';
import {
  ANGLES,
  DEFAULT_ANGLE,
  DEFAULT_LOOK,
  LOOKS,
  glassRule,
  selectLighting,
  timeFromOccasion,
  venueAllowed,
  type GlassRule,
  type LightingPreset,
} from './shared/rules.ts';
import { needsAccent, sceneItems, type ItemKind } from './shared/scene.ts';
import { solve } from './shared/solver.ts';
import { buildSpec, skuById, type Selections } from './shared/spec.ts';
import { FeedbackInput, KbEditStatus, LessonStatus, type LearningDoc } from './shared/feedback.ts';
import { SKETCH_ASPECT_RATIO, SKETCH_IMAGE_SIZE, SKETCH_MODEL } from './shared/sketch.ts';
import { Story } from './shared/story.ts';
import {
  TURNAROUND_ASPECT_RATIO,
  TURNAROUND_IMAGE_SIZE,
  TURNAROUND_MODEL,
  turnaroundPrompt,
} from './shared/turnaround.ts';
import {
  WORKSPACE_IMAGE_SIZES,
  WORKSPACE_MAX_REFERENCES,
  WORKSPACE_MODEL,
  WORKSPACE_MODEL_LABEL,
} from './shared/workspace.ts';
import {
  AccentChoice,
  IntakeInput,
  Occasion,
  Party,
  PlatingChoice,
  PrepChoice,
  Setting,
  SidesChoice,
  Surface,
  TimeOfDay,
  Venue,
  type Blueprint,
  type SceneSpec,
} from './shared/types.ts';
import {
  publicProcedure,
  router,
  signedInProcedure,
  type Context,
} from './trpc.ts';

export type { AppProfile } from './profile.ts';
export type { AgentResult } from './server/agent.ts';

async function resolveProfile(ctx: Context): Promise<AppProfile | null> {
  const headerEmail = ctx.user?.email;
  if (!ctx.runway && !headerEmail) return null;

  let runwayProfile: RunwayProfile | undefined;
  if (ctx.runway) {
    try {
      runwayProfile = await ctx.runway.getProfile();
    } catch {
      runwayProfile = undefined;
    }
  }
  const token = getRunwayToken(ctx.req);
  return resolveProfileIdentity({
    headerEmail,
    headerName: ctx.user?.name,
    hasRunwayClient: ctx.runway !== undefined,
    runwayProfile,
    tokenEmail: token ? decodeJwtPayload(token)?.email : undefined,
  });
}

/** The intake answers so far, validated at the boundary. */
const SelectionsInput = z.object({
  prep: PrepChoice.optional(),
  plating: PlatingChoice.optional(),
  sides: SidesChoice.optional(),
  scene: z
    .object({
      setting: Setting,
      venue: Venue,
      party: Party,
      time: TimeOfDay.optional(),
      surface: Surface.optional(),
      surfaceText: z.string().optional(),
      venueType: z.string().max(64).optional(),
      environmentNote: z.string().max(600).optional(),
    })
    .optional(),
  glass: z.boolean().optional(),
  camera: z.object({ look: z.string(), angle: z.string() }).optional(),
  accent: AccentChoice.nullable().optional(),
  napkin: z.boolean().optional(),
});

const BriefInput = IntakeInput.extend({ countryLabel: z.string().optional() });

/** Spec and blueprint round-trip from `compose`; the solver built them. */
const SpecInput = z.custom<SceneSpec>(
  (v) => typeof v === 'object' && v !== null && 'sku' in v && 'entree' in v
);
const BlueprintInput = z.custom<Blueprint>(
  (v) => typeof v === 'object' && v !== null && 'primitives' in v
);

const AgentKindInput = z.enum([
  'prep',
  'plating',
  'sides',
  'surface',
  'accent',
  'express',
  'story',
  'validate',
  'imageCheck',
]);

function withLabel(brief: z.infer<typeof BriefInput>) {
  const kb = loadKnowledge();
  const c = kb.countries.find((c) => c.id === brief.country);
  return { ...brief, countryLabel: c?.label ?? brief.country };
}

/**
 * Reclassify Runway failures for the client. A plan denial is FORBIDDEN
 * (terminal, no retry); a stale session is UNAUTHORIZED, which carries the
 * sign-in URL (see `errorFormatter` in src/trpc.ts).
 */
function runwayError(err: unknown): never {
  if (err instanceof RunwayAuthError) {
    throw new TRPCError({
      code: err.permissionDenied ? 'FORBIDDEN' : 'UNAUTHORIZED',
      message: err.reason ?? err.message,
    });
  }
  if (err instanceof RunwayTaskError) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: err.message });
  }
  if (err instanceof Error) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: err.message });
  }
  throw err;
}

export interface RuleEffects {
  venues: Array<{ venue: SceneSpec['scene']['venue']; allowed: boolean; glass: GlassRule }>;
  timeFromOccasion: SceneSpec['scene']['time'] | null;
  lighting?: LightingPreset;
  needsAccent?: boolean;
  /** What's already on the table before any accent, in solver order (the napkin set counts once). */
  items?: Array<{ kind: ItemKind; name: string }>;
}

export type AgentPoll =
  /** `taskId` is set when the server swapped in a repair task; keep polling that one. */
  | { done: false; progress: number | null; taskId?: string; repairing?: boolean }
  | { done: true; error: string }
  | { done: true; result: AgentResult };

export type TurnaroundPoll =
  | { done: false; progress: number | null }
  | { done: true; error: string }
  | { done: true; url: string };

export type LearnPoll =
  | { done: false; progress: number | null }
  | { done: true; error: string }
  | { done: true; learning: LearningDoc };

/** Who is rating or deciding: the signed-in visitor, by email. */
async function actor(ctx: Context): Promise<Actor> {
  const profile = await resolveProfile(ctx);
  if (!profile) throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Sign in to send feedback.' });
  return { email: profile.email, name: profile.name };
}

/** Storage failures as readable messages next to the thing that failed. */
function storageError(err: unknown, doing: string): never {
  if (err instanceof TRPCError) throw err;
  const message = err instanceof Error ? err.message : String(err);
  // Storage is registered on the app's first deploy with features.storage; until then the broker refuses.
  if (/doesn't declare `features\.storage`/.test(message)) {
    throw new TRPCError({
      code: 'PRECONDITION_FAILED',
      message: `Couldn't ${doing}: feedback storage switches on with the app's next deploy. Deploy once, then ratings and lessons will save here.`,
    });
  }
  throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: `Couldn't ${doing}: ${message}` });
}

const DishKeyInput = z.string().min(3).max(140).regex(/^[a-z0-9-]+$/);

export type WorkspacePoll =
  | { done: false; progress: number | null }
  | { done: true; error: string }
  | { done: true; urls: string[] };

const WORKSPACE_ASPECT_RATIOS = supportedAspectRatios(WORKSPACE_MODEL);
type WorkspaceAspectRatio = (typeof WORKSPACE_ASPECT_RATIOS)[number];
const isWorkspaceAspectRatio = (r: string): r is WorkspaceAspectRatio =>
  (WORKSPACE_ASPECT_RATIOS as readonly string[]).includes(r);
const PNG_DATA_URL = 'data:image/png;base64,';

/** Which catalog photos to add (see `productRefs` in shared/workspace.ts). */
const ProductRefsInput = z.object({ skuId: z.string().max(80).optional(), glass: z.boolean(), high: z.boolean() });

/**
 * Append the catalog's product photos to `references` for the SKU or GLASS
 * element (`label`), or for the whole `scene`, and return the prompt lines
 * that name them by image number. Never goes past the model's reference cap.
 */
async function addProductReferences(
  ctx: { runway: RunwayClient; user?: GatewayUser | undefined },
  label: string,
  product: z.infer<typeof ProductRefsInput> | undefined,
  references: Array<{ tag: string; url: string }>,
  shots: SkuShot[],
): Promise<string> {
  if (!product) return '';
  const el = label === 'scene' ? 'scene' : productElement(label);
  if (!el) return '';
  const user = ctx.user?.email ?? 'anonymous';
  const lines: string[] = [];
  if ((el === 'scene' || el === 'sku') && product.skuId) {
    const got = (await skuShots(ctx.runway, user, product.skuId, shots)).slice(0, WORKSPACE_MAX_REFERENCES - references.length);
    const start = references.length + 1;
    references.push(...got.map((g) => ({ tag: `sku_${g.shot}`, url: g.url })));
    lines.push(skuReferenceLines(got.map((g, i) => ({ shot: g.shot, n: start + i }))));
  }
  if ((el === 'scene' || el === 'glass') && product.glass && references.length < WORKSPACE_MAX_REFERENCES) {
    const url = await pouredGlass(ctx.runway, user);
    if (url) {
      references.push({ tag: 'poured_glass', url });
      lines.push(glassReferenceLine(references.length));
    }
  }
  return lines.filter(Boolean).join('\n\n');
}

export const AppRouter = router({
  profile: publicProcedure.query(({ ctx }) => resolveProfile(ctx)),

  /** Everything the brief and the scene/camera steps need to render. */
  config: publicProcedure.query(() => {
    const kb = loadKnowledge();
    return {
      knowledge: { available: kb.available, source: kb.source },
      countries: kb.countries.map((c) => ({
        id: c.id,
        label: c.label,
        ou: c.ou,
        regions: c.regions.map((r) => ({ id: r.id, label: r.label })),
      })),
      skus: SKU_CATALOG.filter((s) => !s.retired).map((s) => ({
        id: s.id,
        displayName: s.displayName,
        shortName: s.shortName,
        package: s.package,
        volumeMl: s.volumeMl,
        markets: s.markets ?? null,
        image: s.gtin ? `/sku/${s.gtin}.jpg` : null,
      })),
      occasions: Occasion.options,
      looks: LOOKS.map((l) => ({
        id: l.id,
        label: l.label,
        help: l.help,
        /** For the camera-step illustrations only; never shown as a number. */
        focalMm: l.hidden.focal_length_mm,
        placeholder: l.status === 'placeholder',
      })),
      angles: ANGLES.map((a) => ({
        id: a.id,
        label: a.label,
        pitchDeg: a.hidden.pitch_deg,
        placeholder: a.status === 'placeholder',
      })),
      defaults: { look: DEFAULT_LOOK, angle: DEFAULT_ANGLE },
    };
  }),

  /** Rule effects that follow the answers: venue limits, glass lock, lighting, accent. */
  rules: publicProcedure
    .input(z.object({ brief: BriefInput, selections: SelectionsInput }))
    .query(({ input }): RuleEffects => {
      const sku = skuById(input.brief.skuId);
      if (!sku) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Unknown product SKU.' });
      const sel: Selections = input.selections;
      const venues = Venue.options.map((v) => ({
        venue: v,
        allowed: venueAllowed(sku, v),
        glass: glassRule(sku, v),
      }));
      const out: RuleEffects = {
        venues,
        timeFromOccasion: timeFromOccasion(input.brief.occasion),
      };
      if (sel.scene) {
        const time = sel.scene.time ?? out.timeFromOccasion ?? 'midday';
        out.lighting = selectLighting({
          ...sel.scene,
          time,
          surface: sel.scene.surface ?? 'table-4top',
        });
      }
      if (sel.prep && sel.plating && sel.sides && sel.scene && sel.camera) {
        const spec = buildSpec(withLabel(input.brief), { ...sel, accent: null, napkin: false });
        out.needsAccent = needsAccent(spec);
        out.items = sceneItems(spec).map((i) => ({ kind: i.kind, name: i.name }));
      }
      return out;
    }),

  /** Solve the layout: up to 3 rule-compliant options from the same elements. */
  compose: publicProcedure
    .input(z.object({ brief: BriefInput, selections: SelectionsInput }))
    .mutation(({ input }) => {
      try {
        const spec = buildSpec(withLabel(input.brief), input.selections);
        const result = solve(spec);
        // `result.spec` can differ from `spec`: the accent is dropped when no layout has room for it.
        return { lighting: selectLighting(spec.scene), ...result };
      } catch (err) {
        runwayError(err);
      }
    }),

  /**
   * Submit one agent step as a Runway Claude task and return its id at once;
   * the client polls `agentPoll`. Billed to the visitor's Runway credits, so
   * a signed-in procedure.
   */
  agentStart: signedInProcedure
    .input(
      z.object({
        kind: AgentKindInput,
        brief: BriefInput,
        selections: SelectionsInput.optional(),
        spec: SpecInput.optional(),
        blueprint: BlueprintInput.optional(),
        // Stories saved before the brief summary existed still validate.
        story: Story.extend({ briefSummary: Story.shape.briefSummary.default('') }).optional(),
        notes: z.array(z.string()).optional(),
        directions: z.array(z.string().max(1200)).max(40).optional(),
        custom: z.string().max(800).optional(),
        shownOptions: z.array(z.string().max(1200)).max(4).optional(),
        imageUrls: z.array(z.string().url()).min(1).max(4).optional(),
        prompt: z.string().max(20_000).optional(),
        elements: z.array(z.string().max(64)).max(20).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        // Lessons the team confirmed for this dish go into every agent step.
        const lessons = await confirmedLessons(input.brief.country, input.brief.heroDish);
        const options = buildTask({ ...input, lessons });
        const task = await ctx.runway.createTask('claude_api', options);
        return { taskId: task.id };
      } catch (err) {
        runwayError(err);
      }
    }),

  /** One status check of an agent task; parses the answer once it lands. */
  agentPoll: signedInProcedure
    .input(z.object({ taskId: z.string().min(1), kind: AgentKindInput, repair: z.boolean().optional() }))
    .mutation(async ({ ctx, input }): Promise<AgentPoll> => {
      try {
        const snap = await ctx.runway.taskSnapshot(input.taskId, { includeText: true });
        if (!snap.done) return { done: false, progress: snap.progress ?? null };
        if (snap.status !== 'SUCCEEDED') {
          return {
            done: true,
            error: snap.error
              ? `The cultural agent failed: ${snap.error}`
              : 'The cultural agent stopped before answering. Ask again.',
          };
        }
        if (!snap.text) {
          return { done: true, error: 'The cultural agent returned an empty answer. Ask again.' };
        }
        try {
          return { done: true, result: parseAnswer(input.kind, snap.text) };
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          console.warn(
            `[agent] ${input.kind} answer unreadable (task ${input.taskId}${input.repair ? ', repair' : ''}): ${message} — ${snap.text.length} chars, ends ${JSON.stringify(snap.text.slice(-160))}`
          );
          if (input.repair) return { done: true, error: message };
          // One automatic fix-up pass before the operator sees an error.
          const problem = /cut off/.test(message) ? 'it was cut off before the end' : `it could not be used (${message.replace(/ Ask again\.$/, '')})`;
          const repair = await ctx.runway.createTask('claude_api', repairTask(input.kind, snap.text, problem));
          return { done: false, progress: null, taskId: repair.id, repairing: true };
        }
      } catch (err) {
        runwayError(err);
      }
    }),

  /**
   * Submit one view of an element's turnaround sheet (Nano Banana 2) and
   * return the task id at once; the client polls `turnaroundPoll`. The 30°
   * and top-down views pass the profile image as a reference.
   */
  turnaroundStart: signedInProcedure
    .input(
      z.object({
        label: z.string().min(1).max(64),
        text: z.string().min(1).max(4000),
        view: z.enum(['profile', 'angled', 'top']),
        referenceUrl: z.string().url().optional(),
        product: ProductRefsInput.optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const references = input.referenceUrl ? [{ tag: 'profile', url: input.referenceUrl }] : [];
        // The SKU's profile view also gets the side shot, its top-down view the top shot.
        const shots: SkuShot[] = input.view === 'profile' ? ['front', 'side'] : input.view === 'top' ? ['top', 'front'] : ['front'];
        const extra = await addProductReferences(ctx, input.label, input.product, references, shots);
        const task = await ctx.runway.createTask(TURNAROUND_MODEL, {
          name: `turnaround-${input.label}-${input.view}`.toLowerCase(),
          text_prompt: [turnaroundPrompt(input.text, input.view, Boolean(input.referenceUrl)), extra].filter(Boolean).join('\n\n'),
          aspect_ratio: TURNAROUND_ASPECT_RATIO,
          image_size: TURNAROUND_IMAGE_SIZE,
          num_images: 1,
          ...(references.length ? { reference_images: references } : {}),
        });
        return { taskId: task.id };
      } catch (err) {
        // At the account's concurrent-task ceiling, nothing was created: the client waits and resubmits.
        if (err instanceof RunwayTaskError && err.rateLimited) {
          throw new TRPCError({ code: 'TOO_MANY_REQUESTS', message: err.message });
        }
        runwayError(err);
      }
    }),

  /**
   * Submit the detailed sketch for Sketch review (Nano Banana 2): the labeled proxy,
   * uploaded first via workspaceProxyUpload, drawn as a pencil sketch of the finished
   * scene through the same camera. Returns the task id at once; the client polls
   * `turnaroundPoll`, which reads any Nano Banana 2 image task.
   */
  sketchStart: signedInProcedure
    .input(z.object({ prompt: z.string().min(1).max(12_000), proxyUrl: z.string().url() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const task = await ctx.runway.createTask(SKETCH_MODEL, {
          name: 'layout-sketch',
          text_prompt: input.prompt,
          aspect_ratio: SKETCH_ASPECT_RATIO,
          image_size: SKETCH_IMAGE_SIZE,
          num_images: 1,
          reference_images: [{ tag: 'layout', url: input.proxyUrl }],
        });
        return { taskId: task.id };
      } catch (err) {
        if (err instanceof RunwayTaskError && err.rateLimited) {
          throw new TRPCError({ code: 'TOO_MANY_REQUESTS', message: err.message });
        }
        runwayError(err);
      }
    }),

  /** One status check of a turnaround view; the image URL once it lands. */
  turnaroundPoll: signedInProcedure
    .input(z.object({ taskId: z.string().min(1) }))
    .mutation(async ({ ctx, input }): Promise<TurnaroundPoll> => {
      try {
        const snap = await ctx.runway.taskSnapshot(input.taskId);
        if (!snap.done) return { done: false, progress: snap.progress ?? null };
        if (snap.status !== 'SUCCEEDED') {
          return {
            done: true,
            error: snap.error
              ? `Nano Banana 2 failed: ${snap.error}`
              : 'Nano Banana 2 stopped before finishing. Generate again.',
          };
        }
        if (!snap.url) return { done: true, error: 'Nano Banana 2 returned no image. Generate again.' };
        return { done: true, url: snap.url };
      } catch (err) {
        runwayError(err);
      }
    }),

  /** Aspect ratios and sizes the workspace's scene generator offers (Nano Banana Pro's own list). */
  workspaceOptions: publicProcedure.query(() => ({
    aspectRatios: WORKSPACE_ASPECT_RATIOS,
    imageSizes: [...WORKSPACE_IMAGE_SIZES],
  })),

  /**
   * Upload the proxy PNG (rendered in the browser) so it can be image 1 of a
   * scene generation. Task references must be hosted URLs, never data: URIs.
   */
  workspaceProxyUpload: signedInProcedure
    .input(z.object({ png: z.string().startsWith(PNG_DATA_URL).max(40_000_000) }))
    .mutation(async ({ ctx, input }) => {
      try {
        const bytes = Buffer.from(input.png.slice(PNG_DATA_URL.length), 'base64');
        const { url } = await ctx.runway.uploadAsset(new Uint8Array(bytes), { filename: 'layout-proxy.png' });
        return { url };
      } catch (err) {
        runwayError(err);
      }
    }),

  /**
   * Upload an image the operator chose for a workspace node (a reference to
   * generate from, or a stand-in for the node's preview). The browser has
   * already scaled it down; this only hosts it so a task can use it.
   */
  workspaceImageUpload: signedInProcedure
    .input(
      z.object({
        dataUrl: z
          .string()
          .regex(/^data:image\/(png|jpeg|webp);base64,/, 'Use a PNG, JPEG or WebP image.')
          .max(30_000_000, 'That image is too large; use one under about 20 MB.'),
        name: z.string().max(200).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const [head, body] = input.dataUrl.split(',', 2);
        const ext = head!.includes('png') ? 'png' : head!.includes('webp') ? 'webp' : 'jpg';
        const bytes = Buffer.from(body!, 'base64');
        const base = (input.name ?? 'reference').replace(/\.[a-z0-9]+$/i, '').replace(/[^a-z0-9_-]+/gi, '-').slice(0, 60) || 'reference';
        const { url } = await ctx.runway.uploadAsset(new Uint8Array(bytes), { filename: `${base}.${ext}` });
        return { url };
      } catch (err) {
        runwayError(err);
      }
    }),

  /**
   * Submit one Nano Banana Pro generation from the workspace — a segment
   * preview or the full scene — and return the task id at once; the client
   * polls `workspacePoll`.
   */
  workspaceStart: signedInProcedure
    .input(
      z.object({
        purpose: z.enum(['element', 'environment', 'scene']),
        label: z.string().min(1).max(64),
        prompt: z.string().min(1).max(20_000),
        aspectRatio: z.string().refine(isWorkspaceAspectRatio, {
          message: `${WORKSPACE_MODEL_LABEL} doesn't offer that aspect ratio.`,
        }),
        imageSize: z.enum(WORKSPACE_IMAGE_SIZES),
        numImages: z.union([z.literal(1), z.literal(4)]),
        references: z
          .array(z.object({ tag: z.string().min(1).max(64), url: z.string().url() }))
          .max(WORKSPACE_MAX_REFERENCES),
        product: ProductRefsInput.optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const references = [...input.references];
        const extra =
          input.purpose === 'environment'
            ? ''
            : await addProductReferences(ctx, input.purpose === 'scene' ? 'scene' : input.label, input.product, references, [
                'front',
                ...(input.purpose === 'scene' && input.product?.high ? (['top'] as const) : []),
              ]);
        const task = await ctx.runway.createTask(WORKSPACE_MODEL, {
          name: `workspace-${input.purpose}-${input.label}`.toLowerCase().replace(/[^a-z0-9_-]+/g, '-'),
          text_prompt: [input.prompt, extra].filter(Boolean).join('\n\n'),
          aspect_ratio: input.aspectRatio,
          image_size: input.imageSize,
          num_images: input.numImages,
          ...(references.length ? { reference_images: references } : {}),
        });
        return { taskId: task.id };
      } catch (err) {
        // At the account's concurrent-task ceiling, nothing was created: the client waits and resubmits.
        if (err instanceof RunwayTaskError && err.rateLimited) {
          throw new TRPCError({ code: 'TOO_MANY_REQUESTS', message: err.message });
        }
        runwayError(err);
      }
    }),

  /** One status check of a workspace generation; every image URL once it lands. */
  workspacePoll: signedInProcedure
    .input(z.object({ taskId: z.string().min(1) }))
    .mutation(async ({ ctx, input }): Promise<WorkspacePoll> => {
      try {
        const snap = await ctx.runway.taskSnapshot(input.taskId);
        if (!snap.done) return { done: false, progress: snap.progress ?? null };
        if (snap.status !== 'SUCCEEDED') {
          return {
            done: true,
            error: snap.error
              ? `${WORKSPACE_MODEL_LABEL} failed: ${snap.error}`
              : `${WORKSPACE_MODEL_LABEL} stopped before finishing. Generate again.`,
          };
        }
        const task = await ctx.runway.getTask(input.taskId);
        const urls = task.artifacts.filter((a) => !a.isDirectory && a.url).map((a) => a.url);
        if (!urls.length) return { done: true, error: `${WORKSPACE_MODEL_LABEL} returned no image. Generate again.` };
        return { done: true, urls };
      } catch (err) {
        runwayError(err);
      }
    }),

  // -------------------------------------------------------------------------
  // Image feedback and learning (src/server/feedback.ts, src/server/learn.ts)
  // -------------------------------------------------------------------------

  /** Save one image rating. Free (no credits); signed in so it records who sent it. */
  feedbackSubmit: signedInProcedure.input(FeedbackInput).mutation(async ({ ctx, input }) => {
    const by = await actor(ctx);
    try {
      return await submitFeedback(input, by);
    } catch (err) {
      storageError(err, 'save the feedback');
    }
  }),

  /** Every dish with feedback, for the Learning page. */
  feedbackDishes: publicProcedure.query(async () => {
    try {
      return await listDishes();
    } catch (err) {
      storageError(err, 'load the feedback');
    }
  }),

  /** One dish's feedback and what has been learned from it. */
  feedbackDish: publicProcedure.input(z.object({ dishKey: DishKeyInput })).query(async ({ input }) => {
    try {
      return await dishFeedback(input.dishKey);
    } catch (err) {
      storageError(err, "load this dish's feedback");
    }
  }),

  /** Raw feedback records for a JSON/CSV download; every dish when dishKey is omitted. */
  feedbackExport: publicProcedure.input(z.object({ dishKey: DishKeyInput.optional() })).query(async ({ input }) => {
    try {
      return await exportFeedback(input.dishKey);
    } catch (err) {
      storageError(err, 'export the feedback');
    }
  }),

  /**
   * Submit a learn run over one dish's feedback (a Claude task on the
   * visitor's credits) and return its id at once; the client polls `learnPoll`.
   */
  learnStart: signedInProcedure.input(z.object({ dishKey: DishKeyInput })).mutation(async ({ ctx, input }) => {
    try {
      const options = await buildLearnTask(input.dishKey);
      const task = await ctx.runway.createTask('claude_api', options);
      return { taskId: task.id };
    } catch (err) {
      runwayError(err);
    }
  }),

  /** One status check of a learn run; merges its drafts into the dish's learning once it lands. */
  learnPoll: signedInProcedure
    .input(z.object({ taskId: z.string().min(1), dishKey: DishKeyInput }))
    .mutation(async ({ ctx, input }): Promise<LearnPoll> => {
      try {
        const snap = await ctx.runway.taskSnapshot(input.taskId, { includeText: true });
        if (!snap.done) return { done: false, progress: snap.progress ?? null };
        if (snap.status !== 'SUCCEEDED') {
          return { done: true, error: snap.error ? `The learning agent failed: ${snap.error}` : 'The learning agent stopped before answering. Try again.' };
        }
        if (!snap.text) return { done: true, error: 'The learning agent returned an empty answer. Try again.' };
        try {
          return { done: true, learning: await mergeLearnAnswer(input.dishKey, input.taskId, snap.text) };
        } catch (err) {
          return { done: true, error: err instanceof Error ? err.message : String(err) };
        }
      } catch (err) {
        runwayError(err);
      }
    }),

  /** Write a lesson by hand (starts proposed). */
  lessonAdd: signedInProcedure
    .input(z.object({ dishKey: DishKeyInput, element: z.string().min(1).max(64), text: z.string().trim().min(3).max(1200) }))
    .mutation(async ({ ctx, input }) => {
      const by = await actor(ctx);
      try {
        return await addLesson(input.dishKey, { element: input.element, text: input.text }, by);
      } catch (err) {
        storageError(err, 'save the lesson');
      }
    }),

  /** Confirm, retire or edit a lesson. Only confirmed lessons reach the agents. */
  lessonUpdate: signedInProcedure
    .input(
      z.object({
        dishKey: DishKeyInput,
        lessonId: z.string().min(1).max(80),
        status: LessonStatus.optional(),
        text: z.string().trim().min(3).max(1200).optional(),
        element: z.string().min(1).max(64).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const by = await actor(ctx);
      try {
        return await updateLesson(input.dishKey, input.lessonId, { status: input.status, text: input.text, element: input.element }, by);
      } catch (err) {
        storageError(err, 'update the lesson');
      }
    }),

  /** Approve, reject or edit a knowledge-base edit. Approved edits are read by the agents straight away. */
  kbEditUpdate: signedInProcedure
    .input(
      z.object({
        dishKey: DishKeyInput,
        editId: z.string().min(1).max(80),
        status: KbEditStatus.optional(),
        text: z.string().trim().min(3).max(4000).optional(),
        heading: z.string().trim().min(1).max(300).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const by = await actor(ctx);
      try {
        return await updateKbEdit(input.dishKey, input.editId, { status: input.status, text: input.text, heading: input.heading }, by);
      } catch (err) {
        storageError(err, 'update the knowledge-base edit');
      }
    }),

  /** Every approved knowledge-base edit as Markdown, to merge into the source knowledge base. */
  kbEditsExport: publicProcedure.query(async () => {
    try {
      return { markdown: await approvedEditsMarkdown() };
    } catch (err) {
      storageError(err, 'export the knowledge-base edits');
    }
  }),
});

export type AppRouterType = typeof AppRouter;
