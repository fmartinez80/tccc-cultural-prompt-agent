/**
 * The page is drawn at a CSS zoom (--ui-zoom in styles/global.css). Pointer
 * positions and getBoundingClientRect() are in screen pixels, while layout and
 * transforms inside the page are in CSS pixels, so divide screen distances by
 * this before using them as CSS lengths.
 */
export function uiZoom(): number {
  if (typeof document === 'undefined') return 1;
  const z = parseFloat(getComputedStyle(document.documentElement).zoom);
  return z > 0 ? z : 1;
}

let layer: HTMLDivElement | undefined;

/**
 * Where react-aria popovers render. React-aria places them from screen-pixel
 * measurements, so this layer undoes the page zoom to make those numbers land
 * where they should; each popover's contents re-apply it (see the .popover
 * rules in ui/*.module.css).
 */
export function overlayLayer(): HTMLDivElement | undefined {
  if (typeof document === 'undefined') return undefined;
  if (!layer) {
    layer = document.createElement('div');
    layer.dataset['overlayLayer'] = '';
    layer.style.zoom = 'calc(1 / var(--ui-zoom, 1))';
    document.body.appendChild(layer);
  }
  return layer;
}
