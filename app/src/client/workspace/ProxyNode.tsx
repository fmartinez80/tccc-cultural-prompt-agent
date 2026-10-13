// The layout proxy: image 1 for every scene generation. Shown at once
// (rendered client-side), uploaded lazily the first time a scene
// is generated.

import { CircleCheck, LoaderCircle } from 'lucide-react';

import { Alert } from '../ui/Alert.tsx';
import { useCanvasContext } from './context.ts';
import { NodeCard } from './NodeCard.tsx';
import { PROXY_NODE_ID } from './layout.ts';
import styles from './ProxyNode.module.css';

export type ProxyUploadStatus = 'idle' | 'uploading' | 'uploaded' | 'error';

export function ProxyNode({
  x,
  y,
  proxyDataUrl,
  uploadStatus,
  uploadError,
  sketchUrl,
}: {
  x: number;
  y: number;
  proxyDataUrl: string;
  /** The approved sketch: image 1 instead of the proxy when there is one. */
  sketchUrl?: string | undefined;
  uploadStatus: ProxyUploadStatus;
  uploadError: string | null;
}) {
  const ctx = useCanvasContext();
  if (sketchUrl) {
    return (
      <NodeCard id={PROXY_NODE_ID} x={x} y={y} chip="IMAGE 1" title="Approved sketch" ariaLabel="Image 1, approved sketch node">
        <button
          type="button"
          className={styles.frame}
          onClick={() => ctx.openLightbox(sketchUrl, 'Approved sketch, image 1 for the scene')}
          aria-label="View the approved sketch full size"
        >
          <img className={styles.img} src={sketchUrl} alt="The approved pencil sketch: the photo keeps its camera, framing and placement" />
        </button>
        <div className={styles.status} role="status">
          <CircleCheck size={13} aria-hidden />
          The photo keeps this sketch's camera, framing and placement
        </div>
      </NodeCard>
    );
  }
  return (
    <NodeCard id={PROXY_NODE_ID} x={x} y={y} chip="IMAGE 1" title="Layout proxy" ariaLabel="Image 1, layout proxy node">
      <button
        type="button"
        className={styles.frame}
        onClick={() => ctx.openLightbox(proxyDataUrl, 'Labeled layout proxy, image 1 for the scene')}
        aria-label="View the layout proxy full size"
      >
        <img className={styles.img} src={proxyDataUrl} alt="Labeled layout proxy: where every item goes in the frame" />
      </button>
      <div className={styles.status} role="status" aria-live="polite">
        {uploadStatus === 'uploading' ? (
          <>
            <LoaderCircle size={13} className={styles.spinner} aria-hidden />
            Uploading as image 1…
          </>
        ) : uploadStatus === 'uploaded' ? (
          <>
            <CircleCheck size={13} aria-hidden />
            Uploaded — ready as image 1
          </>
        ) : (
          'Uploads automatically as image 1 when you generate the scene'
        )}
      </div>
      {uploadStatus === 'error' && uploadError && (
        <Alert tone="error" title="Couldn't upload the proxy">
          {uploadError}
        </Alert>
      )}
    </NodeCard>
  );
}
