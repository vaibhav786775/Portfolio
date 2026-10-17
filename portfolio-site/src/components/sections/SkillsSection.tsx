"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  BookOpen,
  Layers,
} from "lucide-react";
import {
  staggerContainer,
  fadeUpItem,
  spaceTransitions,
  buttonTapMotion,
} from "@/lib/animations";

const categoryIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  languages: Code,
  frontend: Layout,
  backend: Server,
  databases: Database,
  ai_ml: Brain,
  tools_cloud: Wrench,
  cs_fundamentals: BookOpen,
};

const categoryAccentMap: Record<string, { border: string; hoverBorder: string; badge: string; glow: string }> = {
  languages: {
    border: "border-blue-500/25",
    hoverBorder: "hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.18)]",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glow: "rgba(59, 130, 246, 0.4)",
  },
  frontend: {
    border: "border-cyan-500/25",
    hoverBorder: "hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.18)]",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    glow: "rgba(6, 182, 212, 0.4)",
  },
  backend: {
    border: "border-violet-500/25",
    hoverBorder: "hover:border-violet-500/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.18)]",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  databases: {
    border: "border-indigo-500/25",
    hoverBorder: "hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgba(99,102,241,0.18)]",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    glow: "rgba(99, 102, 241, 0.4)",
  },
  ai_ml: {
    border: "border-emerald-500/25",
    hoverBorder: "hover:border-emerald-500/50 hover:shadow-[0_8px_30px_rgba(16,185,129,0.18)]",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    glow: "rgba(16, 185, 129, 0.4)",
  },
  tools_cloud: {
    border: "border-sky-500/25",
    hoverBorder: "hover:border-sky-500/50 hover:shadow-[0_8px_30px_rgba(14,165,233,0.18)]",
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    glow: "rgba(14, 165, 233, 0.4)",
  },
  cs_fundamentals: {
    border: "border-purple-500/25",
    hoverBorder: "hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgba(168,85,247,0.18)]",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    glow: "rgba(168, 85, 247, 0.4)",
  },
};

export function SkillsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const visibleCategories = skillCategories.filter((c) => c.visible);

  const filteredCategories =
    selectedFilter === "all"
      ? visibleCategories
      : visibleCategories.filter((c) => c.id === selectedFilter);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[rgba(8,12,22,0.6)] border-y border-[var(--border-subtle)]"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        <SectionReveal stagger staggerDelay={0.07}>
          <RevealItem>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={16} className="text-[var(--accent-blue-bright)]" />
              <p className="section-label mb-0">03 // Technical Arsenal</p>
            </div>
          </RevealItem>

          <RevealItem>
            <h2 id="skills-heading" className="section-heading text-white">
              Core Competencies
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-slate-400 mt-2 max-w-[540px] text-base font-light">
              Technologies, frameworks, and theoretical foundations applied across full-stack
              systems, distributed architectures, and machine learning models.
            </p>
          </RevealItem>

          {/* Interactive domain filter pill buttons */}
          <RevealItem>
            <div className="mt-8 flex flex-wrap gap-2">
              <motion.button
                onClick={() => setSelectedFilter("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  selectedFilter === "all"
                    ? "bg-[var(--accent-blue)] text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                    : "bg-[rgba(255,255,255,0.04)] text-slate-400 hover:text-white border border-[rgba(255,255,255,0.06)]"
                }`}
                whileHover={buttonTapMotion.hover}
                whileTap={buttonTapMotion.tap}
              >
                All Domains ({visibleCategories.length})
              </motion.button>
              {visibleCategories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    selectedFilter === cat.id
                      ? "bg-[var(--accent-blue)] text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                      : "bg-[rgba(255,255,255,0.04)] text-slate-400 hover:text-white border border-[rgba(255,255,255,0.06)]"
                  }`}
                  whileHover={buttonTapMotion.hover}
                  whileTap={buttonTapMotion.tap}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </RevealItem>
        </SectionReveal>

        {/* Skills Category Grid */}
        <motion.div
          key={selectedFilter}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.06, 0.05)}
          initial="hidden"
          animate="visible"
        >
          {filteredCategories.map((category) => {
            const Icon = categoryIconMap[category.id] ?? Code;
            const styling = categoryAccentMap[category.id] ?? {
              border: "border-blue-500/25",
              hoverBorder: "hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.18)]",
              badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
              glow: "rgba(59, 130, 246, 0.4)",
            };

            return (
              <motion.div
                key={category.id}
                variants={fadeUpItem}
                whileHover={{ y: -3 }}
                transition={spaceTransitions.subtleHover}
                className={`glass-card relative overflow-hidden p-6 sm:p-7 border ${styling.border} ${styling.hoverBorder} transition-all duration-300 flex flex-col group`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-lg border ${styling.badge} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon size={16} />
                    </div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      {category.label}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">
                    {category.skills.length} TECH
                  </span>
                </div>

                {category.description && (
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed font-light">
                    {category.description}
                  </p>
                )}

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] text-slate-200 group-hover:border-[rgba(255,255,255,0.12)] transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
