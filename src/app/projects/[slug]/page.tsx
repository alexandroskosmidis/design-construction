import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cta } from "@/components/studio/shell";
import { pageHead } from "@/data/studio";
import { fetchProject } from "@/data/projects";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchProject(Number(slug));
  return pageHead(
    project?.title ?? "Το έργο δεν βρέθηκε",
    project?.summary ?? "Το έργο δεν είναι διαθέσιμο.",
  );
}

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const project = await fetchProject(Number(slug));
  if (!project) notFound();

  return (
    <main>
      <div className="detail-hero">
        <img
          src={project.cover}
          alt={project.title}
          width={1920}
          height={1088}
          fetchPriority="high"
        />
      </div>
      <section className="section">
        <div className="wrap">
          <Button variant="text" asChild>
            <Link href="/projects">
              <ArrowLeft /> Επιστροφή στα έργα
            </Link>
          </Button>
          <div className="detail-title">
            <div>
              <div className="eyebrow mt-10">{project.category}</div>
              <h1>{project.title}</h1>
              <p className="copy">{project.summary}</p>
            </div>
            <div>
              <p className="copy">{project.description}</p>
              <dl className="detail-data">
                <div>
                  <dt>Κατηγορία</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Χαρακτηριστικά</dt>
                  <dd>{project.characteristics}</dd>
                </div>
                {project.engineer && (
                  <div>
                    <dt>Μηχανικός έργου</dt>
                    <dd>{project.engineer}</dd>
                  </div>
                )}
                {project.year && (
                  <div>
                    <dt>Έτος</dt>
                    <dd>{project.year}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
          <h2>Η λεπτομέρεια του χώρου.</h2>
          <div className="gallery">
            {project.gallery.map((image, i) => (
              <img
                src={image.src}
                alt={image.alt}
                key={i}
                width={1400}
                height={1100}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
