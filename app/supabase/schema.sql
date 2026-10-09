-- Scene Composer database. Run once in the Supabase SQL editor (or `supabase db push`).
-- Every table has row-level security switched on with no policies: only the
-- app's server (service-role key) reads and writes them.

-- One row per person with access: their role and monthly limits.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  name text,
  role text not null default 'member' check (role in ('admin', 'member')),
  scene_limit integer not null default 50 check (scene_limit >= 0),
  image_limit integer not null default 300 check (image_limit >= 0),
  created_at timestamptz not null default now()
);

-- Creates the profile when someone is invited (or first signs in).
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Every image generated: the limits, My scenes and the Studio read this.
create table if not exists public.generations (
  id uuid primary key,
  user_id uuid not null references public.profiles (id) on delete cascade,
  kind text not null check (kind in ('scene', 'element', 'environment', 'sketch', 'turnaround')),
  label text,
  model text not null,
  prompt text not null default '',
  images integer not null default 1,
  image_paths text[],
  status text not null default 'running' check (status in ('running', 'done', 'failed')),
  error text,
  country text,
  country_label text,
  region text,
  hero_dish text,
  occasion text,
  sku_id text,
  created_at timestamptz not null default now(),
  finished_at timestamptz
);
create index if not exists generations_user_month on public.generations (user_id, created_at desc);
create index if not exists generations_kind_status on public.generations (kind, status, created_at desc);

-- JSON documents: image feedback, lessons, knowledge-base edits, cached agent answers.
create table if not exists public.documents (
  collection text not null,
  key text not null,
  value jsonb not null,
  version integer not null default 1,
  updated_at timestamptz not null default now(),
  primary key (collection, key)
);

alter table public.profiles enable row level security;
alter table public.generations enable row level security;
alter table public.documents enable row level security;

-- Private bucket for generated images, uploads and rated images.
insert into storage.buckets (id, name, public)
values ('scene-composer', 'scene-composer', false)
on conflict (id) do nothing;
