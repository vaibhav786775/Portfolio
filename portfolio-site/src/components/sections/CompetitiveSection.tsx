"use client";

import { cpProfiles } from "@/data/competitive";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";
import { ExternalLink, Code2, TrendingUp, Terminal } from "lucide-react";
import { spaceTransitions } from "@/lib/animations";

const platformBadges: Record<string, { bg: string; border: string; text: string; glow: string; hoverBorder: string }> = {
  LeetCode: {
    bg: "rgba(251, 191, 36, 0.1)",
    border: "rgba(251, 191, 36, 0.3)",
    text: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.15)",
    hoverBorder: "hover:border-[rgba(251,191,36,0.6)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(251,191,36,0.2)]",
  },
  Codeforces: {
    bg: "rgba(239, 68, 68, 0.1)",
    border: "rgba(239, 68, 68, 0.3)",
    text: "#f87171",
    glow: "rgba(239, 68, 68, 0.15)",
    hoverBorder: "hover:border-[rgba(239,68,68,0.6)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(239,68,68,0.2)]",
  },
  CodeChef: {
    bg: "rgba(168, 85, 247, 0.1)",
    border: "rgba(168, 85, 247, 0.3)",
    text: "#c084fc",
    glow: "rgba(168, 85, 247, 0.15)",
    hoverBorder: "hover:border-[rgba(168,85,247,0.6)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(168,85,247,0.2)]",
  },
};

export function CompetitiveSection() {
  return (
    <section
      id="competitive"
      className="relative py-24 sm:py-32 bg-[rgba(8,12,22,0.6)] border-t border-[var(--border-subtle)]"
      aria-labelledby="competitive-heading"
    >
      <div className="section-container">
        <SectionReveal stagger staggerDelay={0.07}>
          <RevealItem>
            <div className="flex items-center gap-2 mb-3">
              <Terminal size={16} className="text-[var(--accent-blue-bright)]" />
              <p className="section-label mb-0">06 // Competitive Programming</p>
            </div>
          </RevealItem>

          <RevealItem>
            <h2 id="competitive-heading" className="section-heading text-white">
              Algorithmic Benchmarks
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-slate-400 mt-2 max-w-[540px] text-base font-light">
              Testing computational efficiency, data structures, and mathematical intuition across
              rigorous competitive platforms.
            </p>
          </RevealItem>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cpProfiles.map((profile, index) => {
            const styling =
              platformBadges[profile.platform] ?? {
                bg: "rgba(59,130,246,0.1)",
                border: "rgba(59,130,246,0.3)",
                text: "var(--accent-blue-bright)",
                glow: "rgba(59,130,246,0.15)",
                hoverBorder: "hover:border-[var(--accent-blue)]",
              };

            return (
              <motion.div
                key={profile.platform}
                className={`glass-card relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between group ${styling.hoverBorder} transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div>
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full border transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: styling.bg,
                        borderColor: styling.border,
                        color: styling.text,
                        boxShadow: `0 0 12px ${styling.glow}`,
                      }}
                    >
                      {profile.platform}
                    </span>

                    {profile.profileUrl && (
                      <motion.a
                        href={profile.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${profile.platform} profile`}
                        className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-colors cursor-pointer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.92 }}
                      >
                        <ExternalLink size={14} strokeWidth={1.8} />
                      </motion.a>
                    )}
                  </div>

                  {/* Handle */}
                  <div className="flex items-center gap-2 mb-6">
                    <Code2 size={16} className="text-slate-500" />
                    <span className="font-mono text-sm text-slate-200 font-medium">
                      @{profile.handle}
                    </span>
                  </div>

                  {/* Rating & Rank */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[rgba(5,8,16,0.6)] border border-[rgba(255,255,255,0.05)]">
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                        Rating
                      </p>
                      <p
                        className="text-xl font-bold font-mono tracking-tight"
                        style={{ color: styling.text }}
                      >
                        {profile.rating}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                        Tier / Rank
                      </p>
                      <p className="text-xs font-bold font-mono text-white mt-1">
                        {profile.rank}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats summary */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-start gap-2">
                  <TrendingUp size={14} className="text-[var(--accent-blue-bright)] mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {profile.stats}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
