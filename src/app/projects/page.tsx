import type { Metadata } from "next";
import { Cta, PageHeading } from "@/components/studio/shell";
import { ProjectsView } from "@/components/studio/projects-view";
import { pageHead } from "@/data/studio";
import { fetchProjects } from "@/data/projects";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return pageHead(
    "Έργα",
    "Αρχιτεκτονική συλλογή της DESIGN CONSTRUCTION. Έργα κατοικίας, κτιρίων και ανακαίνισης.",
  );
}

export default async function Projects() {
  const projects = await fetchProjects();
  return (
    <main>
      <PageHeading
        eyebrow="ΤΟ ΑΠΟΤΕΛΕΣΜΑ ΤΗΣ ΣΚΕΨΗΣ"
        title="Χώροι που αφηγούνται μια ιστορία."
        description="Μια συλλογή αρχιτεκτονικών προσεγγίσεων, με τη λεπτομέρεια και τον άνθρωπο στο επίκεντρο."
      />
      <section className="section">
        <ProjectsView projects={projects} />
      </section>
      <Cta />
    </main>
  );
}
