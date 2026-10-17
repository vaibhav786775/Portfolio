"use client";

import { useState } from "react";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { socialLinks } from "@/data/navigation";
import { siteSettings } from "@/data/site";
import { Github, Linkedin, Mail, MessageSquare, Copy, Check, Send } from "lucide-react";
import { motion } from "framer-motion";
import { buttonTapMotion, spaceTransitions } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Github,
  Linkedin,
  Mail,
  MessageCircle: MessageSquare,
};

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = siteSettings.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background ambient gradient glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionReveal stagger staggerDelay={0.07}>
          <RevealItem>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Send size={16} className="text-[var(--accent-blue-bright)]" />
              <p className="section-label mb-0 text-center">07 // Transmissions</p>
            </div>
          </RevealItem>

          <RevealItem>
            <h2 id="contact-heading" className="section-heading text-white text-center">
              Initiate Contact
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-slate-400 mt-2 max-w-[480px] text-base font-light mx-auto text-center">
              Have a project in mind, an internship opportunity, or just want to discuss software
              and AI architectures? My inbox is always open.
            </p>
          </RevealItem>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-14 max-w-[620px] mx-auto">
            {/* Terminal Card Frame */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={spaceTransitions.subtleHover}
              className="glass-card relative overflow-hidden card-glow-top p-8 sm:p-10 flex flex-col items-center gap-8 border border-[rgba(59,130,246,0.3)] hover:border-[rgba(96,165,250,0.5)] shadow-[0_12px_48px_rgba(0,0,0,0.65),0_0_24px_rgba(59,130,246,0.18)] transition-all duration-300"
            >
              {/* Header Telemetry Pill */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.25)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-slate-300 font-medium tracking-wider uppercase">
                  Ready for Opportunities • 2025
                </span>
              </div>

              {/* Message */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Let&apos;s Build Something Meaningful
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[420px] font-light">
                  Whether you have an inquiry, open role, or technical question, I usually respond
                  within 24 hours.
                </p>
              </div>

              {/* Primary Email CTA & Copy Button Row */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
                <motion.a
                  href={`mailto:${emailAddress}`}
                  className="btn-primary !px-6 !py-3 text-sm font-medium tracking-wide flex items-center gap-2 cursor-pointer"
                  whileHover={buttonTapMotion.hover}
                  whileTap={buttonTapMotion.tap}
                  transition={spaceTransitions.subtleHover}
                  aria-label={`Send email to ${siteSettings.name}`}
                >
                  <Mail size={16} strokeWidth={2} />
                  <span>Send Direct Email</span>
                </motion.a>

                <motion.button
                  onClick={handleCopyEmail}
                  className="btn-outline !px-4 !py-3 text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors"
                  whileHover={buttonTapMotion.hover}
                  whileTap={buttonTapMotion.tap}
                  transition={spaceTransitions.subtleHover}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <Check size={14} className="text-emerald-400 animate-in fade-in" />
                      <span>Copied to Clipboard!</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </span>
                  )}
                </motion.button>
              </div>

              {/* Social Channels row */}
              <div className="pt-6 border-t border-[var(--border-subtle)] w-full flex flex-col items-center gap-4">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                  Secure Communication Channels
                </span>

                <div className="flex items-center gap-6">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[var(--accent-blue-bright)] group cursor-pointer"
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={spaceTransitions.subtleHover}
                      >
                        <div className="p-2.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] group-hover:border-[var(--accent-blue)] group-hover:bg-[rgba(59,130,246,0.12)] group-hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all">
                          {Icon && <Icon size={18} strokeWidth={1.8} />}
                        </div>
                        <span className="text-[10px] font-mono tracking-wider text-slate-500 group-hover:text-slate-300 transition-colors">
                          {link.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
