// Image feedback and what the app learns from it.
//
// An operator rates a generated scene image (verdict, what's working, quick
// tags, a thumbs up or down on each part, a note). Each rating is saved with the prompt and choices it
// came from, grouped by country + hero dish. From a dish's feedback the agent
// drafts lessons (short corrections fed into later prompts once a person
// confirms them) and knowledge-base edits (appended to a section of a .md file
// once a person approves them).

import { z } from 'zod';

export const Verdict = z.enum(['usable', 'fixes', 'unusable']);
export type Verdict = z.infer<typeof Verdict>;

export const VERDICT_LABELS: Record<Verdict, string> = {
  usable: 'Usable',
  fixes: 'Usable with fixes',
  unusable: 'Unusable',
};

/** Positive quick tags: what the image gets right, so the learning agent keeps doing it. */
export const WORKING_TAGS: Array<{ id: string; label: string }> = [
  { id: 'authentic', label: 'Culturally authentic' },
  { id: 'appetizing', label: 'Looks delicious' },
  { id: 'product-right', label: 'Product looks right' },
  { id: 'great-lighting', label: 'Great lighting' },
  { id: 'strong-composition', label: 'Strong composition' },
  { id: 'follows-layout', label: 'Follows the layout' },
  { id: 'photoreal', label: 'Photoreal' },
  { id: 'right-setting', label: 'Right setting and mood' },
];

export const WORKING_TAG_IDS: ReadonlySet<string> = new Set(WORKING_TAGS.map((t) => t.id));

export const FEEDBACK_TAGS: Array<{ group: string; tags: Array<{ id: string; label: string }> }> = [
  {
    group: 'Food',
    tags: [
      { id: 'wrong-preparation', label: 'Wrong preparation' },
      { id: 'wrong-size', label: 'Wrong size or proportion' },
      { id: 'wrong-vessel', label: 'Wrong bread, plate or container' },
      { id: 'other-dish', label: 'Looks like another dish' },
      { id: 'unappetizing', label: 'Unappetizing' },
    ],
  },
  {
    group: 'Table',
    tags: [
      { id: 'wrong-cutlery', label: "Cutlery that doesn't belong" },
      { id: 'extra-items', label: 'Extra or duplicated items' },
      { id: 'missing-items', label: 'Missing items' },
      { id: 'wrong-props', label: 'Wrong props or tableware' },
    ],
  },
  {
    group: 'Product',
    tags: [
      { id: 'wrong-pack', label: 'Wrong pack or size' },
      { id: 'logo-distorted', label: 'Logo or label distorted' },
      { id: 'product-placement', label: 'Product placement' },
    ],
  },
  {
    group: 'Scene',
    tags: [
      { id: 'wrong-venue', label: 'Wrong venue or setting' },
      { id: 'lighting', label: 'Lighting' },
      { id: 'camera', label: 'Camera or framing' },
      { id: 'color', label: 'Color or white balance' },
      { id: 'wrong-perspective', label: 'Table angle or perspective wrong' },
      { id: 'ignores-layout', label: "Doesn't follow the layout" },
    ],
  },
  {
    group: 'Realism',
    tags: [
      { id: 'ai-artifacts', label: 'AI artifacts' },
      { id: 'impossible', label: 'Physically impossible' },
      { id: 'not-authentic', label: 'Not culturally authentic' },
      { id: 'proxy-labels', label: 'Proxy labels added' },
    ],
  },
];

export const TAG_LABELS: Record<string, string> = Object.fromEntries([...WORKING_TAGS, ...FEEDBACK_TAGS.flatMap((g) => g.tags)].map((t) => [t.id, t.label]));

/** Element chip for issues about the whole picture rather than one node. */
export const SCENE_ELEMENT = 'SCENE';

/** What a rated element is, which decides the issue tags offered when it needs work. */
export type ElementKind = 'food' | 'product' | 'table' | 'environment' | 'camera' | 'lighting' | 'color' | 'scene';

/** One element the operator can rate, named by what it is ("White rice"), not its node chip ("SIDE_1"). */
export interface RatedElement {
  /** The node chip (MAIN, SIDE_1, SKU, ENVIRONMENT, …, or SCENE): the key the image check and learning use. */
  id: string;
  name: string;
  /** Its role in plain words ("Side", "Main dish"). */
  role: string;
  kind: ElementKind;
}

/** Issue tags offered under an element voted "needs work", by kind. Every id is in FEEDBACK_TAGS. */
export const ELEMENT_ISSUE_TAGS: Record<ElementKind, string[]> = {
  food: ['wrong-preparation', 'wrong-size', 'wrong-vessel', 'other-dish', 'unappetizing', 'missing-items', 'extra-items', 'proxy-labels'],
  product: ['wrong-pack', 'logo-distorted', 'product-placement', 'extra-items', 'missing-items', 'proxy-labels'],
  table: ['wrong-cutlery', 'wrong-props', 'extra-items', 'missing-items', 'wrong-perspective', 'proxy-labels'],
  environment: ['wrong-venue', 'wrong-props', 'wrong-perspective', 'not-authentic', 'ai-artifacts', 'proxy-labels'],
  camera: ['camera', 'wrong-perspective', 'ignores-layout'],
  lighting: ['lighting'],
  color: ['color'],
  scene: ['proxy-labels', 'wrong-perspective', 'ai-artifacts', 'impossible', 'not-authentic', 'ignores-layout', 'extra-items', 'missing-items'],
};

/** Ratings of 1 to 5; 4 and 5 count as working, 3 and below as needs work. */
export const RATING_WORKING_MIN = 4;
export const RATING_LABELS: Record<number, string> = { 1: 'Wrong', 2: 'Poor', 3: 'Okay', 4: 'Good', 5: 'Great' };

/**
 * Where an element's look came from in the generation: only the prompt text, an image the app
 * made (a node preview, the product photo, the poured-glass reference) or the operator's own upload.
 * It separates "the prompt described it wrong" from "the model ignored the reference".
 */
export const ElementSource = z.enum(['prompt', 'preview', 'product', 'upload']);
export type ElementSource = z.infer<typeof ElementSource>;

export const SOURCE_LABELS: Record<ElementSource, string> = {
  prompt: 'Prompt only',
  preview: 'Preview image',
  product: 'Product photo',
  upload: 'Your image',
};

/** From a result's reference list ("SIDE_1 (your image)", "SKU (product photo)") to each chip's source. */
export function elementSource(references: string[], chip: string): ElementSource {
  const ref = references.find((r) => r.startsWith(`${chip} (`));
  if (!ref) return 'prompt';
  if (ref.includes('(your image)')) return 'upload';
  if (ref.includes('(preview)')) return 'preview';
  return 'product';
}

/** A voted chip in plain words: the saved item name when the rating has one ("White rice"), else the chip. */
export function elementLabel(chip: string, names?: Record<string, string>): string {
  if (chip === SCENE_ELEMENT) return 'Whole image';
  return names?.[chip] ?? chip;
}

const fold = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

/** Feedback, lessons and edits are grouped by country + hero dish: "argentina--choripan". */
export function dishKey(country: string, heroDish: string): string {
  const slug = (s: string) =>
    fold(s)
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
  return `${slug(country) || 'unknown'}--${slug(heroDish) || 'dish'}`;
}

const CheckIssue = z.object({
  element: z.string().max(64),
  severity: z.enum(['major', 'minor']),
  expected: z.string().max(2000),
  seen: z.string().max(2000),
  fix: z.string().max(2000),
});

/** What the client sends for one rated image. */
export const FeedbackInput = z.object({
  /** The workspace result (one Generate scene run) and the 1-based image within it. */
  resultId: z.string().min(1).max(80),
  imageIndex: z.number().int().min(1).max(4),
  /** The generated image's `/media/` URL. */
  imageUrl: z.string().min(1).max(500),
  verdict: Verdict,
  tags: z.array(z.string().max(40)).max(30),
  /** Node chips voted "needs work" (MAIN, SIDE_1, SKU, …, or SCENE). */
  elements: z.array(z.string().max(64)).max(20),
  /** Node chips voted "working"; absent on ratings saved before votes existed. */
  working: z.array(z.string().max(64)).max(20).optional(),
  /** What each voted chip is ("SIDE_1" → "White rice"); absent on older ratings. */
  elementNames: z.record(z.string().max(64), z.string().max(200)).optional(),
  /** Issue tags picked under each element voted "needs work". */
  elementTags: z.record(z.string().max(64), z.array(z.string().max(40)).max(12)).optional(),
  /** A short note per element voted "needs work" ("the rice should be yellow"). */
  elementNotes: z.record(z.string().max(64), z.string().max(300)).optional(),
  /** The 1–5 rating per element; `working` and `elements` are derived from it. */
  elementRatings: z.record(z.string().max(64), z.number().int().min(1).max(5)).optional(),
  /** What each rated element was generated from: prompt text only, or a reference image. */
  elementSources: z.record(z.string().max(64), ElementSource).optional(),
  note: z.string().max(2000),
  prompt: z.string().max(20_000),
  model: z.string().max(80),
  brief: z.object({
    country: z.string().max(80),
    countryLabel: z.string().max(120),
    region: z.string().max(120),
    regionLabel: z.string().max(120).optional(),
    heroDish: z.string().max(200),
    occasion: z.string().max(80),
    skuId: z.string().max(120),
  }),
  /** Plain-language summary of the choices: "Mariposa with chimichurri · on a paper napkin · …". */
  choices: z.object({
    prep: z.string().max(400).optional(),
    plating: z.string().max(400).optional(),
    sides: z.string().max(800).optional(),
    scene: z.string().max(400).optional(),
  }),
  /** The story's scene summary the image was generated from. */
  sceneSummary: z.string().max(6000).optional(),
  /** The automatic image check's verdict for this image, when the operator kept it. */
  check: z.object({ pass: z.boolean(), issues: z.array(CheckIssue).max(30) }).optional(),
});
export type FeedbackInput = z.infer<typeof FeedbackInput>;

export interface FeedbackRecord extends FeedbackInput {
  id: string;
  createdAt: number;
  by: { email: string; name: string };
  dishKey: string;
  /** Storage path of the rated image (under generations/ or uploads/). */
  imageKey: string;
}

/** A record as the Learning page sees it: `image` is the app's stable `/media/…` URL for the saved copy. */
export interface FeedbackView extends FeedbackRecord {
  image: string;
}

export const Diagnosis = z.enum(['kb-missing', 'kb-wrong', 'prompt-lost', 'model-ignored']);
export type Diagnosis = z.infer<typeof Diagnosis>;

export const DIAGNOSIS_LABELS: Record<Diagnosis, string> = {
  'kb-missing': 'Knowledge base is missing this',
  'kb-wrong': 'Knowledge base is wrong',
  'prompt-lost': 'Knowledge base has it, the prompt lost it',
  'model-ignored': 'Prompt had it, the image model ignored it',
};

export const LessonStatus = z.enum(['proposed', 'confirmed', 'retired']);
export type LessonStatus = z.infer<typeof LessonStatus>;

export interface Lesson {
  id: string;
  /** Node chip it applies to (MAIN, SIDE_1, SKU, …) or SCENE. */
  element: string;
  /** One or two plain sentences an agent can follow: what to do, and what to avoid. */
  text: string;
  diagnosis: Diagnosis;
  status: LessonStatus;
  sourceFeedback: string[];
  createdAt: number;
  updatedAt: number;
  /** Email of whoever last confirmed, retired or edited it; absent for an agent draft nobody touched. */
  decidedBy?: string | undefined;
}

export const KbEditStatus = z.enum(['proposed', 'approved', 'rejected']);
export type KbEditStatus = z.infer<typeof KbEditStatus>;

export interface KbEdit {
  id: string;
  /** Knowledge-base file name, e.g. "argentina.md". */
  file: string;
  /** Exact heading text of the section the text is appended to, e.g. "Choripán (national; street, stadium, asado starter)". */
  heading: string;
  /** Markdown appended at the end of that section. */
  text: string;
  rationale: string;
  status: KbEditStatus;
  sourceFeedback: string[];
  createdAt: number;
  updatedAt: number;
  decidedBy?: string | undefined;
}

/** Everything learned for one dish; one storage document per dish. */
export interface LearningDoc {
  dishKey: string;
  country: string;
  countryLabel: string;
  heroDish: string;
  /** The agent's last plain-language read of what keeps going wrong. */
  summary: string;
  lessons: Lesson[];
  kbEdits: KbEdit[];
  /** The last learn task merged in, so a repeated poll never adds its drafts twice. */
  lastTaskId?: string | undefined;
  updatedAt: number;
}

/** One row of the Learning page's dish list. */
export interface DishSummary {
  dishKey: string;
  country: string;
  countryLabel: string;
  heroDish: string;
  total: number;
  usable: number;
  fixes: number;
  unusable: number;
  lastAt: number;
  lessonsConfirmed: number;
  lessonsProposed: number;
  editsProposed: number;
  editsApproved: number;
}

/** The learn agent's answer (the JSON Schema of this goes into its prompt). */
export const LearnAnswer = z.object({
  summary: z.string(),
  lessons: z.array(
    z.object({
      element: z.string(),
      text: z.string(),
      diagnosis: Diagnosis,
      sourceFeedback: z.array(z.string()),
    })
  ),
  kbEdits: z.array(
    z.object({
      file: z.string(),
      heading: z.string(),
      text: z.string(),
      rationale: z.string(),
      sourceFeedback: z.array(z.string()),
    })
  ),
});
export type LearnAnswer = z.infer<typeof LearnAnswer>;

/** A confirmed lesson as the agents receive it. */
export interface PromptLesson {
  element: string;
  text: string;
}
