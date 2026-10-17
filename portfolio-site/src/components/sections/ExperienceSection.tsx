"use client";

import { experienceItems } from "@/data/experience";
import { achievements } from "@/data/achievements";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, ExternalLink, Award, Milestone } from "lucide-react";
import type { ExperienceItem } from "@/types/portfolio";
import { spaceTransitions } from "@/lib/animations";

const typeIcon: Record<ExperienceItem["type"], React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  work: Briefcase,
  education: GraduationCap,
  volunteer: Briefcase,
};

export function ExperienceSection() {
  const visibleExp = experienceItems.filter((e) => e.visible);
  const visibleAchievements = achievements.filter((a) => a.visible);

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left Column (7 cols): Experience & Education Timeline */}
          <div className="lg:col-span-7">
            <SectionReveal stagger staggerDelay={0.07}>
              <RevealItem>
                <div className="flex items-center gap-2 mb-3">
                  <Milestone size={16} className="text-[var(--accent-blue-bright)]" />
                  <p className="section-label mb-0">04 // Trajectory</p>
                </div>
              </RevealItem>

              <RevealItem>
                <h2 id="experience-heading" className="section-heading text-white">
                  Education &amp; Experience
                </h2>
              </RevealItem>

              <RevealItem>
                <p className="text-slate-400 mt-2 max-w-[500px] text-base font-light">
                  Academic foundations at Punjab Engineering College combined with hands-on
                  engineering projects and open-source contributions.
                </p>
              </RevealItem>
            </SectionReveal>

            <div className="mt-12 relative">
              {/* Glowing vertical timeline spine */}
              <div
                className="absolute left-[20px] top-3 bottom-6 w-[2px] bg-gradient-to-b from-[var(--accent-blue)] via-[rgba(139,92,246,0.35)] to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <ol className="space-y-10">
                {visibleExp.map((item, index) => {
                  const Icon = typeIcon[item.type];
                  return (
                    <motion.li
                      key={item.id}
                      className="relative flex gap-5 sm:gap-6 group"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {/* Node point marker */}
                      <div
                        className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[#0b101e] border-2 border-[var(--accent-blue)] flex items-center justify-center shadow-[0_0_16px_rgba(59,130,246,0.4)] group-hover:border-[var(--accent-cyan)] transition-colors duration-300"
                        aria-hidden="true"
                      >
                        <Icon size={16} className="text-[var(--accent-cyan-soft)]" />
                      </div>

                      {/* Timeline Card with Hover Elevation */}
                      <motion.div
                        whileHover={{ y: -3 }}
                        transition={spaceTransitions.subtleHover}
                        className="flex-1 glass-card p-6 sm:p-7 relative overflow-hidden card-glow-top border border-[rgba(59,130,246,0.18)] hover:border-[rgba(96,165,250,0.45)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2 pb-3 border-b border-[var(--border-subtle)]">
                          <div>
                            <h3 className="text-base font-bold text-white tracking-tight">
                              {item.role}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1">
                              {item.orgUrl ? (
                                <a
                                  href={item.orgUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs font-mono font-medium text-[var(--accent-blue-bright)] hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                  <span>{item.organization}</span>
                                  <ExternalLink size={11} strokeWidth={2} />
                                </a>
                              ) : (
                                <span className="text-xs font-mono text-slate-300">
                                  {item.organization}
                                </span>
                              )}
                              {item.location && (
                                <span className="text-[11px] font-mono text-slate-400">
                                  • {item.location}
                                </span>
                              )}
                            </div>
                          </div>

                          <span className="font-mono text-[11px] text-[var(--accent-cyan-soft)] bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] px-2.5 py-1 rounded-full whitespace-nowrap">
                            {item.period}
                          </span>
                        </div>

                        {/* Bullet points */}
                        <ul className="mt-4 space-y-2.5">
                          {item.description.map((bullet, i) => (
                            <li
                              key={i}
                              className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5 font-light"
                            >
                              <span className="text-[var(--accent-blue-bright)] mt-1 flex-shrink-0">
                                ▹
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Right Column (5 cols): Achievements with Distinct Visual Identity */}
          <div className="lg:col-span-5">
            <SectionReveal stagger staggerDelay={0.07}>
              <RevealItem>
                <div className="flex items-center gap-2 mb-3">
                  <Award size={16} className="text-[var(--accent-violet)]" />
                  <p className="section-label mb-0 text-[var(--accent-violet)]">
                    05 // Recognition
                  </p>
                </div>
              </RevealItem>

              <RevealItem>
                <h2 className="section-heading text-white">Milestones &amp; Honors</h2>
              </RevealItem>

              <RevealItem>
                <p className="text-slate-400 mt-2 text-base font-light">
                  Competitive hackathon finishes, algorithmic distinctions, and academic highlights.
                </p>
              </RevealItem>
            </SectionReveal>

            <div className="mt-12 space-y-5">
              {visibleAchievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="glass-card relative overflow-hidden p-6 border border-[rgba(139,92,246,0.3)] bg-gradient-to-br from-[rgba(15,20,35,0.75)] to-[rgba(25,18,45,0.45)] shadow-[0_4px_24px_rgba(0,0,0,0.4)] group hover:border-[rgba(139,92,246,0.6)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_24px_rgba(139,92,246,0.22)] transition-all duration-300"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Metallic Trophy Emblem */}
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border border-violet-500/30 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.25)] transition-transform duration-300 group-hover:scale-105">
                      <Trophy size={20} strokeWidth={1.8} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                          {item.title}
                        </h3>
                        {item.date && (
                          <span className="font-mono text-[10px] text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded whitespace-nowrap">
                            {item.date}
                          </span>
                        )}
                      </div>

                      {item.organization && (
                        <p className="text-xs font-mono text-[var(--accent-cyan-soft)] mb-2 font-medium">
                          {item.organization}
                        </p>
                      )}

                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
