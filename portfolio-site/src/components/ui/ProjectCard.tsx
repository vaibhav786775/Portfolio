"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { spaceTransitions } from "@/lib/animations";

/**
 * Procedural Space Blueprint Fallback for projects without an uploaded screenshot.
 * Creates an aesthetic telemetry schematic rather than a broken image placeholder.
 */
function CosmicBlueprintFallback({
  title,
  category,
  technologies,
}: {
  title: string;
  category?: string;
  technologies: string[];
}) {
  const acronym = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="absolute inset-0 w-full h-full bg-[#080d1a] overflow-hidden flex flex-col items-center justify-center p-6 select-none">
      {/* Background blueprint grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="card-blueprint-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#card-blueprint-grid)" />
      </svg>

      {/* Decorative telemetry circles */}
      <div
        aria-hidden="true"
        className="absolute w-44 h-44 rounded-full border border-[rgba(59,130,246,0.18)] pointer-events-none flex items-center justify-center"
      >
        <div className="w-28 h-28 rounded-full border border-dashed border-[rgba(139,92,246,0.22)]" />
      </div>

      {/* Corner crosshairs & telemetry metadata */}
      <span className="absolute top-3 left-3 font-mono text-[9px] text-[rgba(96,165,250,0.5)]">
        + {category ?? "SYS.ARCH"}
      </span>
      <span className="absolute top-3 right-3 font-mono text-[9px] text-[rgba(96,165,250,0.5)]">
        SCHEMATIC
      </span>
      <span className="absolute bottom-3 left-3 font-mono text-[9px] text-[rgba(96,165,250,0.5)]">
        30.73° N, 76.77° E
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[9px] text-[rgba(96,165,250,0.5)]">
        {technologies[0] ?? "ENGINEERING"}
      </span>

      {/* Center Emblem */}
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.12)] border border-[rgba(59,130,246,0.3)] flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <Cpu size={22} className="text-[var(--accent-blue-bright)]" />
        </div>
        <span className="font-mono text-sm font-bold tracking-widest text-slate-200 mt-1">
          {acronym}
        </span>
        <span className="text-[10px] font-mono text-[var(--accent-cyan-soft)] uppercase tracking-wider">
          Architecture Blueprint
        </span>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Reusable data-driven ProjectCard component.
 * Features gentle elevation, border illumination, and smooth image zoom on hover.
 * Preserves accessibility and high text readability across all viewports.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="glass-card relative overflow-hidden flex flex-col h-full group border border-[rgba(59,130,246,0.18)] hover:border-[rgba(96,165,250,0.5)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_24px_rgba(59,130,246,0.2)] transition-all duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Illuminated top border beam */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[rgba(96,165,250,0.7)] to-transparent opacity-50 group-hover:opacity-100 group-hover:h-[2px] transition-all duration-300 z-20 pointer-events-none"
      />

      {/* 16:9 Aspect Ratio Media Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-elevated)] border-b border-[var(--border-subtle)] flex-shrink-0">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-103">
            <CosmicBlueprintFallback
              title={project.title}
              category={project.category}
              technologies={project.technologies}
            />
          </div>
        )}

        {/* Ambient bottom vignette for seamless contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,26,0.95)] via-[rgba(11,15,26,0.25)] to-transparent pointer-events-none"
        />

        {/* Badges row: Featured + Status */}
        <div className="absolute top-3 inset-x-3 z-10 flex items-center justify-between pointer-events-none">
          {project.featured ? (
            <div className="flex items-center gap-1.5 bg-[rgba(11,15,26,0.85)] border border-[rgba(59,130,246,0.35)] backdrop-blur-md rounded-full px-2.5 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue-bright)] animate-pulse" />
              <span className="font-mono text-[10px] text-white font-medium tracking-wider uppercase">
                Featured
              </span>
            </div>
          ) : (
            <div />
          )}

          {project.status && (
            <div className="flex items-center gap-1 bg-[rgba(11,15,26,0.85)] border border-[rgba(255,255,255,0.12)] backdrop-blur-md rounded-full px-2.5 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              <span className="font-mono text-[9px] text-slate-300 font-medium tracking-wider uppercase">
                {project.status}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Category tag */}
        {project.category && (
          <span className="text-[10px] font-mono text-[var(--accent-cyan-soft)] uppercase tracking-wider mb-1 font-medium">
            {project.category}
          </span>
        )}

        <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[var(--accent-blue-bright)] transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-sm text-slate-300/90 leading-relaxed mb-4 flex-1 font-light">
          {project.shortDescription}
        </p>

        {/* Optional highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1.5 pt-2 border-t border-[rgba(255,255,255,0.05)]">
            {project.highlights.map((highlight, hIndex) => (
              <li key={hIndex} className="text-xs text-slate-300 flex items-start gap-1.5 font-light">
                <CheckCircle2 size={13} className="text-[var(--accent-blue-bright)] mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies Tags */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="tag-pill text-[11px] group-hover:border-[rgba(59,130,246,0.35)] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Links — Gracefully handles missing URLs */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)] mt-auto">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 hover:text-[var(--accent-blue-bright)] px-2.5 py-1.5 rounded-md hover:bg-[rgba(255,255,255,0.06)] cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={spaceTransitions.subtleHover}
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github size={14} strokeWidth={1.8} />
              <span>Source</span>
            </motion.a>
          )}

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent-cyan-soft)] hover:text-white px-2.5 py-1.5 rounded-md hover:bg-[rgba(6,182,212,0.12)] ml-auto cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={spaceTransitions.subtleHover}
              aria-label={`View ${project.title} live demo`}
            >
              <span>Live System</span>
              <ExternalLink size={13} strokeWidth={1.8} />
            </motion.a>
          )}

          {!project.liveUrl && !project.githubUrl && (
            <span className="text-xs font-mono text-slate-500 italic">
              Internal Architecture
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
