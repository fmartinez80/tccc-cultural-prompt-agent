// Reads an image file the operator picked and scales it down so the upload
// stays small: at most 2048 px on the long edge. PNG and WebP keep their
// transparency (a cut-out product shot stays cut out); JPEG stays JPEG.

const MAX_EDGE = 1600;
const MAX_FILE_BYTES = 25 * 1024 * 1024;
const TYPES = ['image/png', 'image/jpeg', 'image/webp'];

export async function prepareImage(file: File): Promise<string> {
  if (!TYPES.includes(file.type)) throw new Error('Use a PNG, JPEG or WebP image.');
  if (file.size > MAX_FILE_BYTES) throw new Error('That image is over 25 MB; use a smaller one.');
  const src = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("That file couldn't be read as an image."));
      el.src = src;
    });
    const scale = Math.min(1, MAX_EDGE / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const g = canvas.getContext('2d');
    if (!g) throw new Error("This browser couldn't prepare the image.");
    g.drawImage(img, 0, 0, w, h);
    return file.type === 'image/jpeg' ? canvas.toDataURL('image/jpeg', 0.92) : canvas.toDataURL('image/png');
  } finally {
    URL.revokeObjectURL(src);
  }
}
