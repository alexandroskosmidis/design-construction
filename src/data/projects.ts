import { supabase } from "@/lib/supabase";
import { images } from "@/data/studio";

export type ProjectType = "house" | "building" | "refurbishment";

export const projectTypeOrder: ProjectType[] = ["house", "building", "refurbishment"];

const typeLabels: Record<ProjectType, string> = {
  house: "Ανεξάρτητες Κατοικίες",
  building: "Πολυόροφα Κτίρια",
  refurbishment: "Ανακαινίσεις",
};

export function projectTypeLabel(type: ProjectType) {
  return typeLabels[type];
}

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  category: string;
  summary: string;
  description: string;
  cover: string;
  gallery: { src: string; alt: string }[];
  characteristics: string;
  engineer?: string;
  year?: number;
}

interface ProjectRow {
  project_id: number;
  title: string;
  description: string | null;
  project_major: string | null;
  research: boolean;
  construction: boolean;
  supervision: boolean;
  notes: string | null;
  year: number | null;
  project_type: ProjectType;
  photo: { photo_id: number; photo_url: string }[] | null;
}

const PROJECT_SELECT = "*, photo(photo_id, photo_url)";

function characteristics(row: ProjectRow) {
  const parts: string[] = [];
  if (row.research) parts.push("Μελέτη");
  if (row.construction) parts.push("Κατασκευή");
  if (row.supervision) parts.push("Επίβλεψη");
  return parts.join(" · ");
}

function toProject(row: ProjectRow): Project {
  const title = row.title.trim();
  const photos = [...(row.photo ?? [])].sort((a, b) => a.photo_id - b.photo_id);
  const fallback = { src: images.hero.src, alt: title };
  const gallery = photos.length
    ? photos.map((p) => ({ src: p.photo_url, alt: `Φωτογραφία έργου — ${title}` }))
    : [fallback];
  const description = row.description?.trim() ?? "";
  return {
    slug: String(row.project_id),
    title,
    type: row.project_type,
    category: typeLabels[row.project_type],
    summary: description,
    description,
    cover: (gallery[0] ?? fallback).src,
    gallery,
    characteristics: characteristics(row) || "—",
    ...(row.project_major?.trim() ? { engineer: row.project_major.trim() } : {}),
    ...(row.year ? { year: row.year } : {}),
  };
}

export async function fetchProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("project")
    .select(PROJECT_SELECT)
    .order("year", { ascending: false });
  if (error) throw error;
  return ((data ?? []) as ProjectRow[]).map(toProject);
}

export async function fetchProject(id: number): Promise<Project | null> {
  if (!Number.isFinite(id)) return null;
  const { data, error } = await supabase
    .from("project")
    .select(PROJECT_SELECT)
    .eq("project_id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? toProject(data as ProjectRow) : null;
}
