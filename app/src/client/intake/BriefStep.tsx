import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { Select } from '../ui/Select.tsx';
import { SkeletonText } from '../ui/Skeleton.tsx';
import { TextInput } from '../ui/TextInput.tsx';
import { briefOk, OCCASION_LABELS, type Brief } from './types.ts';
import styles from './BriefStep.module.css';
import { SkuCarousel } from './SkuCarousel.tsx';
import { StepActions } from './StepActions.tsx';

const OTHER_REGION = '__other';

export function BriefStep({ brief, onSave, onNext }: { brief: Brief; onSave: (b: Brief) => void; onNext: () => void }) {
  const config = trpc.config.useQuery();
  const [b, setB] = useState(brief);
  const set = (patch: Partial<Brief>) => setB((x) => ({ ...x, ...patch }));
  // "Other…" in the region list: the operator types a region the knowledge base has no file for.
  const [otherRegion, setOtherRegion] = useState(false);

  const submit = () => {
    if (!briefOk(b)) return;
    onSave(b);
    onNext();
  };

  if (config.isPending) {
    return (
      <section>
        <h1>Let&rsquo;s Make a Scene</h1>
        <p>
          Based on your brief, tell us your country, SKU, hero meal and occasion. <strong>Scene&nbsp;Composer</strong> takes it from there, one question at a time. Pick
          preparation, plating and sides, then place the table and confirm the shot.
        </p>
        <SkeletonText rows={6} />
      </section>
    );
  }

  if (config.isError) {
    return (
      <section>
        <h1>Let&rsquo;s Make a Scene</h1>
        <Alert tone="error" title="Couldn't load the country and product catalog">
          {config.error.message}
        </Alert>
      </section>
    );
  }

  const cfg = config.data;
  const country = cfg.countries.find((c) => c.id === b.country);
  const customRegion = !!b.region && !!country && country.regions.length > 0 && !country.regions.some((r) => r.id === b.region);
  if (customRegion && !otherRegion) setOtherRegion(true);

  return (
    <section>
      <h1>Let&rsquo;s Make a Scene</h1>
      <p>
        Based on your brief, tell us your country, SKU, hero meal and occasion. Scene Composer takes it from there, one question at a
        time. Pick preparation, plating and sides, then place the table and confirm the shot.
      </p>
      <div className={styles.grid}>
        <Select
          label="Country"
          value={b.country || null}
          onChange={(country) => {
            const c = cfg.countries.find((x) => x.id === country);
            setOtherRegion(false);
            set({
              country,
              countryLabel: c?.label ?? '',
              region: '',
              // No longer asked for: taken from the country file when it names one.
              operatingUnit: c && c.ou !== 'not confirmed' ? c.ou : '',
            });
          }}
          options={cfg.countries.map((c) => ({ id: c.id, label: c.label }))}
          placeholder="Choose a country…"
        />
        {country && country.regions.length > 0 ? (
          <div className={styles.regionField}>
            <Select
              label="Local region (optional)"
              value={otherRegion ? OTHER_REGION : b.region || null}
              onChange={(region) => {
                if (region === OTHER_REGION) {
                  setOtherRegion(true);
                  set({ region: '' });
                } else {
                  setOtherRegion(false);
                  set({ region });
                }
              }}
              options={[
                { id: '', label: 'National (no specific region)' },
                ...country.regions.map((r) => ({ id: r.id, label: r.label })),
                { id: OTHER_REGION, label: 'Other…' },
              ]}
              placeholder="National (no specific region)"
            />
            {otherRegion && (
              <TextInput
                aria-label="Other local region"
                value={b.region}
                onChange={(region) => set({ region })}
                placeholder="Type a region, city or area"
                autoFocus
                onPressEnter={submit}
              />
            )}
          </div>
        ) : (
          <TextInput
            label="Local region (optional)"
            value={b.region}
            onChange={(region) => set({ region })}
            placeholder="e.g. a city or area"
            onPressEnter={submit}
          />
        )}
        <div className={styles.skuField}>
          <SkuCarousel
            skus={cfg.skus.filter((s) => !s.markets || s.markets.some((m) => b.country.includes(m) || (m === 'us' && b.country === 'united_states')))}
            value={b.skuId}
            onChange={(skuId) => set({ skuId })}
          />
        </div>
        <TextInput
          label="Hero dish"
          value={b.heroDish}
          onChange={(heroDish) => set({ heroDish })}
          placeholder="e.g. paella, tacos al pastor, bobotie"
          onPressEnter={submit}
        />
        <TextInput
          label="Side dish request (optional)"
          value={b.sideDishRequest ?? ''}
          onChange={(sideDishRequest) => set({ sideDishRequest })}
          placeholder="e.g. patatas bravas"
          onPressEnter={submit}
        />
        <Select
          label="Occasion"
          value={b.occasion}
          onChange={(occasion) => set({ occasion: occasion as Brief['occasion'] })}
          options={cfg.occasions.map((o) => ({
            id: o,
            label: OCCASION_LABELS[o] ?? o,
          }))}
        />
      </div>
      <StepActions>
        <Button
          variant="primary"
          iconEnd={<ArrowRight size={16} aria-hidden />}
          disabled={!briefOk(b)}
          onPress={submit}
        >
          Continue
        </Button>
      </StepActions>
    </section>
  );
}
