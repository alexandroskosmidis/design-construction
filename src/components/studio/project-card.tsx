"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="project-card"
          aria-label={`Προβολή έργου — ${project.title}`}
        >
          <div className="project-image">
            <img src={project.cover} alt={project.title} width={1400} height={1100} loading="lazy" />
            <div className="project-overlay">
              <span>
                Δείτε το έργο <ArrowUpRight size={16} />
              </span>
            </div>
          </div>
          <div className="project-info">
            <div>
              <h3>{project.title}</h3>
              <p>
                {project.category}
                {project.year ? ` · ${project.year}` : ""}
              </p>
            </div>
            <span className="project-number">
              0{index + 1} <ArrowUpRight size={16} />
            </span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="project-modal max-w-none w-[92vw] sm:w-[880px] max-h-[88vh] overflow-y-auto gap-0 p-0 rounded-md">
        <div className="detail-hero">
          <img src={project.cover} alt={project.title} width={1920} height={1088} />
        </div>
        <div className="project-modal-body">
          <div className="eyebrow">{project.category}</div>
          <DialogTitle asChild>
            <h1>{project.title}</h1>
          </DialogTitle>
          <DialogDescription className="sr-only">{project.summary}</DialogDescription>
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
          {project.gallery.length > 1 && (
            <div className="gallery">
              {project.gallery.map((image, i) => (
                <img src={image.src} alt={image.alt} key={i} width={1400} height={1100} loading="lazy" />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
