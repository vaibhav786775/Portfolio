"use client";

import { Compass } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";

/**
 * Data-driven Projects section.
 * Renders all projects from src/data/projects.ts using the reusable ProjectCard.
 * Equipped with staggered entrance reveals and hover border illumination.
 */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        <SectionReveal stagger staggerDelay={0.07}>
          <RevealItem>
            <div className="flex items-center gap-2 mb-3">
              <Compass size={16} className="text-[var(--accent-blue-bright)]" />
              <p className="section-label mb-0">02 // Selected Works</p>
            </div>
          </RevealItem>

          <RevealItem>
            <h2 id="projects-heading" className="section-heading text-white">
              Architected &amp; Built
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-slate-400 mt-2 max-w-[540px] text-base font-light">
              A curated portfolio of full-stack platforms, machine learning pipelines,
              and distributed developer tools built for performance and scale.
            </p>
          </RevealItem>
        </SectionReveal>

        {projects.length === 0 ? (
          <div className="mt-14 glass-card p-12 text-center max-w-lg mx-auto">
            <p className="text-slate-400 text-sm font-mono">
              All project modules are currently in private staging.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
