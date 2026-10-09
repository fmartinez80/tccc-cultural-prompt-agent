// The shared product inventory every scene draws from, and how to add to it.
// Product photos live in the repo for now, so adding one is a pull request.

import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { PageHeader } from '../ui/PageHeader.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import styles from './SkusPage.module.css';

const REPO = 'https://github.com/fmartinez80/tccc-cultural-prompt-agent';

export function SkusPage() {
  const config = trpc.config.useQuery();
  return (
    <div className={styles.page}>
      <PageHeader title="Adding SKUs" description="The products everyone can use in a scene, and how to add a new one." />
      {config.isError && (
        <Alert tone="error" title="Couldn't load the products">
          {config.error.message}
        </Alert>
      )}
      {config.isLoading && <SkeletonBlock height={200} />}
      {config.data && (
        <ul className={styles.grid} aria-label="Products in the inventory">
          {config.data.skus.map((s) => (
            <li key={s.id} className={styles.card}>
              <div className={styles.photo}>{s.image && <img src={s.image} alt={s.displayName} loading="lazy" />}</div>
              <div className={styles.body}>
                <strong>{s.shortName}</strong>
                <span className={styles.meta}>{s.displayName}</span>
                <span className={styles.meta}>
                  {s.volumeMl} mL · {s.package.replace(/-/g, ' ')}
                  {s.markets?.length ? ` · ${s.markets.join(', ')}` : ''}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <section className={styles.howTo} aria-label="How to add a SKU">
        <h2 className={styles.title}>Add a product</h2>
        <ol>
          <li>
            Shoot three photos on white: <strong>front</strong>, <strong>side</strong> and <strong>top</strong>, saved as{' '}
            <code>front.jpg</code>, <code>side.jpg</code> and <code>top.jpg</code>.
          </li>
          <li>
            Put them in a folder named after the product's GTIN under <code>app/references/sku/</code> in{' '}
            <a href={REPO} target="_blank" rel="noreferrer">
              the GitHub repo
            </a>
            , and a small thumbnail at <code>app/public/sku/&lt;GTIN&gt;.jpg</code>.
          </li>
          <li>
            Add the product's entry (name, package, volume, size and a one-line appearance) to <code>SKU_CATALOG</code> in{' '}
            <code>app/src/shared/registry.ts</code>, or ask Claude in the project to do it.
          </li>
          <li>Merge the pull request. The product appears here and in the brief after the next deploy.</li>
        </ol>
      </section>
    </div>
  );
}
