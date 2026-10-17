"use client";

import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { siteSettings } from "@/data/site";
import { Code2, Cpu, GraduationCap, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeUpItem,
  fadeSlideRight,
  spaceTransitions,
} from "@/lib/animations";

const highlights = [
  {
    icon: Code2,
    label: "Full-Stack Web Engineering",
    description:
      "Crafting production-grade architectures with React.js, Node.js, Express.js, and MongoDB with a relentless focus on clean REST APIs and sub-second performance.",
  },
  {
    icon: Cpu,
    label: "Practical AI & RAG Systems",
    description:
      "Designing Retrieval-Augmented Generation (RAG) pipelines with LangChain, Pinecone, and LLM APIs that transform unstructured content into searchable knowledge.",
  },
  {
    icon: GraduationCap,
    label: "CS Undergraduate @ PEC",
    description:
      `Gaining strong algorithmic, systems, and theoretical foundations at ${siteSettings.educationSummary.institution} (Class of ${siteSettings.educationSummary.graduationYear}).`,
  },
];

const stats = siteSettings.stats ?? [
  { number: "2028", label: "Graduation Year", sub: "Punjab Engineering College" },
  { number: "500+", label: "DSA Challenges Solved", sub: "LeetCode & CodeChef" },
  { number: "99.14%", label: "JEE Main 2024", sub: "Percentile Milestone" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[rgba(8,12,22,0.5)] border-t border-[var(--border-subtle)]"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <SectionReveal stagger staggerDelay={0.08}>
          <RevealItem>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-[var(--accent-blue-bright)]" />
              <p className="section-label mb-0">01 // Identity &amp; Philosophy</p>
            </div>
          </RevealItem>

          <RevealItem>
            <h2 id="about-heading" className="section-heading text-white">
              Engineering with Intent
            </h2>
          </RevealItem>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Bio text (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              variants={staggerContainer(0.08, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
            >
              {siteSettings.biography.full.map((paragraph, pIndex) => (
                <motion.p key={pIndex} variants={fadeUpItem}>
                  {paragraph}
                </motion.p>
              ))}

              {/* Status and Location Bar */}
              <motion.div
                variants={fadeUpItem}
                className="pt-4 flex flex-wrap items-center gap-3.5 text-xs font-mono text-slate-400"
              >
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(59,130,246,0.3)] transition-colors">
                  <MapPin size={13} className="text-[var(--accent-blue-bright)]" />
                  {siteSettings.location.city}, {siteSettings.location.country}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {siteSettings.biography.currentFocus}
                </span>
              </motion.div>
            </motion.div>

            {/* Quick Stats Grid with Stagger & Micro-Elevation */}
            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={staggerContainer(0.08, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUpItem}
                  whileHover={{ y: -3 }}
                  transition={spaceTransitions.subtleHover}
                  className="glass-card p-5 border border-[rgba(59,130,246,0.2)] hover:border-[rgba(96,165,250,0.45)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] transition-all duration-300 group"
                >
                  <p className="text-2xl font-bold font-mono text-white mb-1 group-hover:text-[var(--accent-blue-bright)] transition-colors">
                    {s.number}
                  </p>
                  <p className="text-xs font-semibold text-[var(--accent-cyan-soft)] uppercase tracking-wider mb-0.5">
                    {s.label}
                  </p>
                  <p className="text-[11px] text-slate-400 font-light">{s.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Highlight cards (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              className="space-y-4"
              variants={staggerContainer(0.09, 0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {highlights.map(({ icon: Icon, label, description }) => (
                <motion.div
                  key={label}
                  variants={fadeSlideRight}
                  whileHover={{ y: -3 }}
                  transition={spaceTransitions.subtleHover}
                  className="glass-card relative overflow-hidden card-glow-top flex items-start gap-4 p-6 hover:border-[rgba(96,165,250,0.45)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.18)] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mt-0.5 p-3 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] text-[var(--accent-blue-bright)] shadow-[0_0_12px_rgba(59,130,246,0.2)] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5 tracking-tight group-hover:text-[var(--accent-blue-bright)] transition-colors">
                      {label}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
