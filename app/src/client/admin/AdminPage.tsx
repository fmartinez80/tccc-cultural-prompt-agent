// Admins: invite people (they get a magic link), set each person's monthly
// limits and role, or remove someone's access.

import { useState } from 'react';

import type { MemberRow } from '../../api.ts';
import { trpc } from '../trpc.ts';
import { Alert } from '../ui/Alert.tsx';
import { Button } from '../ui/Button.tsx';
import { PageHeader } from '../ui/PageHeader.tsx';
import { SkeletonBlock } from '../ui/Skeleton.tsx';
import { TextInput } from '../ui/TextInput.tsx';
import styles from './AdminPage.module.css';

function MemberLine({ m, isSelf }: { m: MemberRow; isSelf: boolean }) {
  const utils = trpc.useUtils();
  const [scene, setScene] = useState(String(m.sceneLimit));
  const [image, setImage] = useState(String(m.imageLimit));
  const [confirmRemove, setConfirmRemove] = useState(false);
  const refresh = () => void utils.adminMembers.invalidate();
  const update = trpc.adminSetMember.useMutation({ onSuccess: refresh });
  const remove = trpc.adminRemove.useMutation({ onSuccess: refresh });
  const changed = scene !== String(m.sceneLimit) || image !== String(m.imageLimit);
  const valid = /^\d+$/.test(scene) && /^\d+$/.test(image);
  const error = update.error ?? remove.error;

  return (
    <tr>
      <td>
        <strong>{m.name}</strong>
        <div className={styles.muted}>{m.email}</div>
      </td>
      <td>
        <select
          className={styles.select}
          value={m.role}
          disabled={isSelf || update.isPending}
          aria-label={`Role for ${m.email}`}
          onChange={(e) => update.mutate({ id: m.id, role: e.target.value as 'admin' | 'member' })}
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
      </td>
      <td className={styles.num}>
        {m.usage.scenes} / <input className={styles.limit} value={scene} onChange={(e) => setScene(e.target.value)} aria-label={`Scene limit for ${m.email}`} inputMode="numeric" />
      </td>
      <td className={styles.num}>
        {m.usage.images} / <input className={styles.limit} value={image} onChange={(e) => setImage(e.target.value)} aria-label={`Sketch and preview limit for ${m.email}`} inputMode="numeric" />
      </td>
      <td className={styles.actions}>
        {changed && (
          <Button
            size="sm"
            variant="primary"
            disabled={!valid}
            loading={update.isPending}
            onPress={() => update.mutate({ id: m.id, sceneLimit: Number(scene), imageLimit: Number(image) })}
          >
            Save
          </Button>
        )}
        {!isSelf &&
          (confirmRemove ? (
            <>
              <Button size="sm" onPress={() => setConfirmRemove(false)}>
                Cancel
              </Button>
              <Button size="sm" variant="primary" loading={remove.isPending} onPress={() => remove.mutate({ id: m.id })}>
                Remove access
              </Button>
            </>
          ) : (
            <Button size="sm" variant="ghost" onPress={() => setConfirmRemove(true)}>
              Remove
            </Button>
          ))}
        {error && <div className={styles.error}>{error.message}</div>}
      </td>
    </tr>
  );
}

export function AdminPage({ selfEmail }: { selfEmail: string }) {
  const members = trpc.adminMembers.useQuery();
  const utils = trpc.useUtils();
  const [email, setEmail] = useState('');
  const invite = trpc.adminInvite.useMutation({
    onSuccess: () => {
      setEmail('');
      void utils.adminMembers.invalidate();
    },
  });

  return (
    <div className={styles.page}>
      <PageHeader
        title="Admin"
        description="Invite people and set their monthly limits. Limits reset on the 1st of each month (UTC)."
      />
      <section className={styles.invite} aria-label="Invite someone">
        <TextInput type="email" label="Invite by email" value={email} onChange={setEmail} onPressEnter={() => invite.mutate({ email })} />
        <Button variant="primary" loading={invite.isPending} disabled={!email.includes('@')} onPress={() => invite.mutate({ email })}>
          Send invite
        </Button>
      </section>
      {invite.isSuccess && (
        <Alert tone="success" title="Invite sent">
          They'll get an email with a link to sign in.
        </Alert>
      )}
      {invite.isError && (
        <Alert tone="error" title="Couldn't send the invite">
          {invite.error.message}
        </Alert>
      )}
      {members.isError && (
        <Alert tone="error" title="Couldn't load the members">
          {members.error.message}
        </Alert>
      )}
      {members.isLoading && <SkeletonBlock height={200} />}
      {members.data && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Person</th>
              <th>Role</th>
              <th>Scenes this month / limit</th>
              <th>Sketches &amp; previews / limit</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {members.data.map((m) => (
              <MemberLine key={m.id} m={m} isSelf={m.email === selfEmail} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
