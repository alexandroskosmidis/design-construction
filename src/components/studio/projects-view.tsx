"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/studio/project-card";
import { projectTypeLabel, projectTypeOrder, type Project } from "@/data/projects";

export function ProjectsView({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState("Όλα");
  const categories = ["Όλα", ...projectTypeOrder.map(projectTypeLabel)];
  return (
    <div className="wrap">
      <div className="filters" role="group" aria-label="Φίλτρα έργων">
        {categories.map((c) => (
          <Button
            variant="ghost"
            className="filter"
            key={c}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </Button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => category === "Όλα" || p.category === category)
          .map((p, i) => (
            <ProjectCard project={p} index={i} key={p.slug} />
          ))}
      </div>
    </div>
  );
}
