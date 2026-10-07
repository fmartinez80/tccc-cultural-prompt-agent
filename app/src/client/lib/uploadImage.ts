// Sends an image the browser made or picked (a data URL) to /api/upload as
// raw bytes, and returns the `/media/` URL a generation can use as a reference.

export async function uploadImage(dataUrl: string, signal?: AbortSignal): Promise<{ url: string }> {
  const blob = await (await fetch(dataUrl)).blob();
  let res: Response;
  try {
    res = await fetch('/api/upload', { method: 'POST', headers: { 'content-type': blob.type || 'image/png' }, body: blob, signal });
  } catch (err) {
    if (signal?.aborted) throw err;
    throw new Error("Couldn't reach the app's server to upload the image. Try again.");
  }
  const body = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
  if (!res.ok || !body.url) throw new Error(body.error ?? `The image upload failed (HTTP ${res.status}).`);
  return { url: body.url };
}
