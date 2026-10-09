// Every model call goes to the Gemini API with one key (GEMINI_API_KEY): the
// text agents on Gemini Flash / Pro, the images on Nano Banana 2 / Pro.

import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { env } from './env.ts';
import { getFile, mediaPath } from './store.ts';

const API = 'https://generativelanguage.googleapis.com/v1beta/models';

/** One text-agent call (what Runway called a `claude_api` task). */
export interface TextTask {
  name: string;
  /** `fast` for the option steps and JSON fixes, `pro` for story, checks and learning. */
  model: 'fast' | 'pro';
  system_prompt: string;
  prompt: string;
  temperature: number;
  max_output_tokens: number;
  /** Images the model looks at (the image check, the learn run): `/media/...` URLs. */
  images?: Array<{ url: string }>;
}

export class GeminiError extends Error {
  constructor(
    message: string,
    readonly rateLimited = false,
  ) {
    super(message);
  }
}

interface Part {
  text?: string;
  thought?: boolean;
  inlineData?: { mimeType: string; data: string };
}

interface GenerateResponse {
  candidates?: Array<{ content?: { parts?: Part[] }; finishReason?: string }>;
  promptFeedback?: { blockReason?: string };
}

async function generate(model: string, body: unknown): Promise<GenerateResponse> {
  let res: Response;
  try {
    res = await fetch(`${API}/${model}:generateContent`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': env.geminiApiKey },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(5 * 60_000),
    });
  } catch (err) {
    throw new GeminiError(`Couldn't reach Gemini: ${err instanceof Error ? err.message : String(err)}`);
  }
  if (!res.ok) {
    let detail = '';
    try {
      detail = ((await res.json()) as { error?: { message?: string } }).error?.message ?? '';
    } catch {
      // not JSON
    }
    if (res.status === 429) throw new GeminiError('Gemini is busy (rate limit). Wait a moment and try again.', true);
    throw new GeminiError(`Gemini answered ${res.status}${detail ? `: ${detail}` : ''}`);
  }
  const data = (await res.json()) as GenerateResponse;
  if (data.promptFeedback?.blockReason) {
    throw new GeminiError(`Gemini refused the request (${data.promptFeedback.blockReason}). Reword the prompt and try again.`);
  }
  return data;
}

// ---------------------------------------------------------------------------
// Reference images: product photos from the repo, or files in storage
// ---------------------------------------------------------------------------

const ASSET_ROOT = path.resolve(process.cwd(), 'references');
const MIME_BY_EXT: Record<string, string> = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

/** `asset:<path>` names a file in the repo's references/ folder (the shared product inventory). */
export function assetUrl(rel: string): string {
  return `asset:${rel}`;
}

/** Whether a reference URL is one the server can read: a repo asset or one of the app's own `/media/` files. */
export function isReadableRef(url: string): boolean {
  return url.startsWith('asset:') ? /^asset:[A-Za-z0-9._\/-]+$/.test(url) && !url.includes('..') : mediaPath(url) !== null;
}

/** The bytes behind a reference. Only repo assets and the app's own stored files, never an arbitrary URL. */
export async function readRef(url: string): Promise<{ mimeType: string; data: string }> {
  if (url.startsWith('asset:')) {
    if (!isReadableRef(url)) throw new Error('That product photo path is not allowed.');
    const file = path.join(ASSET_ROOT, url.slice('asset:'.length));
    const bytes = await readFile(file);
    return { mimeType: MIME_BY_EXT[path.extname(file).toLowerCase()] ?? 'image/jpeg', data: bytes.toString('base64') };
  }
  const p = mediaPath(url);
  if (!p) throw new Error('Only images stored by this app can be used as references.');
  const { bytes, contentType } = await getFile(p);
  return { mimeType: contentType, data: Buffer.from(bytes).toString('base64') };
}

// ---------------------------------------------------------------------------
// Text
// ---------------------------------------------------------------------------

/** Runs one text-agent call and returns the answer text (expected to be JSON). */
export async function generateText(task: TextTask): Promise<string> {
  const model = task.model === 'pro' ? env.geminiTextPro : env.geminiTextFast;
  const images = await Promise.all((task.images ?? []).map((i) => readRef(i.url)));
  const data = await generate(model, {
    systemInstruction: { parts: [{ text: task.system_prompt }] },
    contents: [{ role: 'user', parts: [{ text: task.prompt }, ...images.map((inlineData) => ({ inlineData }))] }],
    generationConfig: {
      temperature: task.temperature,
      // Thinking tokens count toward this limit on Gemini 3, so leave room above the answer itself.
      maxOutputTokens: Math.max(task.max_output_tokens * 4, 16_384),
      responseMimeType: 'application/json',
    },
  });
  const candidate = data.candidates?.[0];
  const text = (candidate?.content?.parts ?? [])
    .filter((p) => p.text && !p.thought)
    .map((p) => p.text)
    .join('');
  if (!text) throw new GeminiError(`The agent returned no answer${candidate?.finishReason ? ` (${candidate.finishReason})` : ''}. Ask again.`);
  return text;
}

// ---------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------

export interface ImageTask {
  model: 'fast' | 'pro';
  prompt: string;
  aspectRatio: string;
  imageSize: '1K' | '2K' | '4K';
  numImages: number;
  /** In prompt order: image 1 is the first reference. */
  references: Array<{ tag: string; url: string }>;
}

export interface GeneratedImage {
  bytes: Uint8Array;
  mimeType: string;
}

async function generateOneImage(model: string, task: ImageTask, refs: Array<{ mimeType: string; data: string }>): Promise<GeneratedImage> {
  const data = await generate(model, {
    contents: [{ role: 'user', parts: [{ text: task.prompt }, ...refs.map((inlineData) => ({ inlineData }))] }],
    generationConfig: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio: task.aspectRatio, imageSize: task.imageSize },
    },
  });
  const candidate = data.candidates?.[0];
  const image = (candidate?.content?.parts ?? []).find((p) => p.inlineData && !p.thought)?.inlineData;
  if (!image) throw new GeminiError(`Gemini returned no image${candidate?.finishReason ? ` (${candidate.finishReason})` : ''}. Generate again.`);
  return { bytes: new Uint8Array(Buffer.from(image.data, 'base64')), mimeType: image.mimeType || 'image/png' };
}

/** Generates `numImages` images (one request each, in parallel). Fails only when none succeed. */
export async function generateImages(task: ImageTask): Promise<GeneratedImage[]> {
  const model = task.model === 'pro' ? env.geminiImagePro : env.geminiImageFast;
  const refs = await Promise.all(task.references.map((r) => readRef(r.url)));
  const results = await Promise.allSettled(Array.from({ length: task.numImages }, () => generateOneImage(model, task, refs)));
  const ok = results.flatMap((r) => (r.status === 'fulfilled' ? [r.value] : []));
  if (!ok.length) {
    const first = results.find((r): r is PromiseRejectedResult => r.status === 'rejected');
    throw first?.reason instanceof Error ? first.reason : new GeminiError('Gemini returned no image. Generate again.');
  }
  return ok;
}
