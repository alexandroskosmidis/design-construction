-- Schema for a civil engineer's portfolio site
-- Target: PostgreSQL (Supabase)

create table if not exists project (
  project_id     bigint generated always as identity primary key,
  title          text not null,
  description    text,
  project_major  text,
  research       boolean not null default false,
  construction   boolean not null default false,
  supervision    boolean not null default false,
  notes          text,
  year           integer,
  project_type   text check (project_type in ('house', 'building', 'refurbishment'))
);




create table if not exists photo (
  photo_id    bigint generated always as identity primary key,
  photo_url   text not null,
  project_id  bigint not null references project (project_id) on delete cascade
);


create index if not exists photo_project_id_idx on photo (project_id);

create table if not exists service (
  service_id   bigint generated always as identity primary key,
  title        text not null,
  description  text,
  photo_url    text
);

alter table project enable row level security;
alter table photo enable row level security;
alter table service enable row level security;

create policy "Public read access" on project for select using (true);
create policy "Public read access" on photo for select using (true);
create policy "Public read access" on service for select using (true);

grant usage on schema public to anon, authenticated;
grant select on project, photo, service to anon, authenticated;
