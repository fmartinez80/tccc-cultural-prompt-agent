// Whole composer sessions, so My Projects can reopen a scene with its brief,
// choices, story and node workspace, not just the finished image. Each session
// is one JSON file in the private bucket, under the user's own folder, plus a
// small pointer per scene generation it produced. Nothing here is served by
// /media/, and every path is built from the signed-in user's id.

import { getFile, putFile } from './store.ts';

const ID = /^[A-Za-z0-9-]{8,64}$/;
/** The browser keeps the same draft in localStorage (about 5 MB), so this is generous. */
const MAX_BYTES = 8 * 1024 * 1024;

const sessionPath = (userId: string, sessionId: string) => `sessions/${userId}/${sessionId}.json`;
const pointerPath = (userId: string, generationId: string) => `sessions/${userId}/by-generation/${generationId}.json`;

export class SessionTooLargeError extends Error {}

function json(value: unknown): Uint8Array {
  return new TextEncoder().encode(JSON.stringify(value));
}

/** Saves the session and points each listed scene generation at it. */
export async function saveSession(userId: string, sessionId: string, draft: Record<string, unknown>, generationIds: string[]): Promise<void> {
  if (!ID.test(sessionId)) throw new Error('Invalid session id');
  const bytes = json({ savedAt: new Date().toISOString(), draft });
  if (bytes.byteLength > MAX_BYTES) throw new SessionTooLargeError('This session is too large to save.');
  await putFile(sessionPath(userId, sessionId), bytes, 'application/json');
  await Promise.all(
    generationIds.filter((g) => ID.test(g)).map((g) => putFile(pointerPath(userId, g), json({ sessionId }), 'application/json')),
  );
}

/** The session a scene came from, or null when none was saved (scenes made before sessions were kept). */
export async function loadSession(userId: string, generationId: string): Promise<{ savedAt: string; draft: Record<string, unknown> } | null> {
  if (!ID.test(generationId)) return null;
  let sessionId: string;
  try {
    const pointer = JSON.parse(new TextDecoder().decode((await getFile(pointerPath(userId, generationId))).bytes)) as { sessionId?: unknown };
    if (typeof pointer.sessionId !== 'string' || !ID.test(pointer.sessionId)) return null;
    sessionId = pointer.sessionId;
  } catch {
    return null;
  }
  try {
    const saved = JSON.parse(new TextDecoder().decode((await getFile(sessionPath(userId, sessionId))).bytes)) as { savedAt: string; draft: Record<string, unknown> };
    return saved?.draft && typeof saved.draft === 'object' ? saved : null;
  } catch {
    return null;
  }
}

