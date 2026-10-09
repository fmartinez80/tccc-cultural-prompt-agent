// The signed-in user's own work: every finished scene (or every image,
// sketches and previews included), with this month's use against their limits.

import { Images } from 'lucide-react';
import { useState } from 'react';

import type { SceneCard } from '../../api.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { EmptyState } from '../ui/EmptyState.tsx';
import { PageHeader } from '../ui/PageHeader.tsx';
import { SegmentedControl } from '../ui/SegmentedControl.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { SceneGallery } from './SceneGallery.tsx';
import styles from './studio.module.css';

function Meter({ used, limit, label }: { used: number; limit: number; label: string }) {
  const pct = limit > 0 ? Math.min(100, (used / limit) * 100) : 100;
  return (
    <div className={styles.meter}>
      <span className={styles.meterText}>
        <strong>
          {used} of {limit}
        </strong>{' '}
        {label}
      </span>
      <span className={styles.barTrack}>
        <span className={styles.bar} data-full={pct >= 100 || undefined} style={{ width: `${pct}%` }} />
      </span>
    </div>
  );
}

export function MyScenesPage({
  onNewScene,
  currentSessionId,
  draftInProgress,
  onOpenSession,
}: {
  onNewScene: () => void;
  currentSessionId: string;
  draftInProgress: boolean;
  onOpenSession: (draft: Record<string, unknown>) => void;
}) {
  const [include, setInclude] = useState<'scenes' | 'all'>('scenes');
  const utils = trpc.useUtils();
  // A final scene reopens the whole session it came from: brief, choices, story and node workspace.
  const openScene = async (scene: SceneCard): Promise<boolean> => {
    if (scene.kind !== 'scene') return false;
    const saved = await utils.sessionFor.fetch({ generationId: scene.id });
    if (!saved) return false;
    const replacing = saved.draft['sessionId'] !== currentSessionId && draftInProgress;
    if (replacing && !window.confirm('Open this project? It replaces the scene you are building now. Scenes you already generated stay in My projects.')) {
      return true;
    }
    onOpenSession(saved.draft);
    return true;
  };
  const scenes = trpc.myScenes.useQuery({ include });
  const usage = trpc.usage.useQuery();
  return (
    <div className={styles.page}>
      <PageHeader title="My projects" description="Everything you've generated. Click a final scene to reopen its whole session; other images open large with their prompt." />
      {usage.data && (
        <div className={styles.meters} aria-label="This month">
          <Meter used={usage.data.scenes} limit={usage.data.sceneLimit} label="scenes this month" />
          <Meter used={usage.data.images} limit={usage.data.imageLimit} label="sketches and previews this month" />
        </div>
      )}
      <SegmentedControl
        aria-label="Show"
        value={include}
        onChange={(v) => setInclude(v as 'scenes' | 'all')}
        options={[
          { value: 'scenes', label: 'Final scenes' },
          { value: 'all', label: 'Everything' },
        ]}
      />
      {scenes.isError && (
        <Alert tone="error" title="Couldn't load your scenes">
          {scenes.error.message}
        </Alert>
      )}
      {scenes.isLoading && <SkeletonBlock height={240} />}
      {scenes.data &&
        (scenes.data.length ? (
          <SceneGallery scenes={scenes.data} showBy={false} onOpenScene={openScene} />
        ) : (
          <EmptyState
            icon={<Images size={28} />}
            title="Nothing here yet"
            hint="Scenes you generate are saved here."
            action={
              <button type="button" className={styles.linkButton} onClick={onNewScene}>
                Start a scene
              </button>
            }
          />
        ))}
    </div>
  );
}
