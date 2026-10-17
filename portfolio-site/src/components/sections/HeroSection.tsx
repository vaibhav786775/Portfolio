"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Sparkles,
  MapPin,
  GraduationCap,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import { siteSettings } from "@/data/site";
import { socialLinks } from "@/data/navigation";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  staggerContainer,
  fadeUpItem,
  fadeUpSubtle,
  buttonTapMotion,
  spaceTransitions,
} from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Github,
  Linkedin,
  Mail,
};

/**
 * Procedural Celestial Fallback for portrait
 * Displayed if profileImage is missing or fails to load.
 */
function PortraitFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c1324] via-[#080d1a] to-[#120f26] relative select-none">
      {/* Background blueprint grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="fallback-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(96,165,250,0.35)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fallback-grid)" />
      </svg>

      {/* Concentric radar rings */}
      <div className="w-36 h-36 rounded-full border border-[rgba(59,130,246,0.25)] flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border border-dashed border-[rgba(139,92,246,0.3)] flex items-center justify-center">
          <Cpu size={28} className="text-[var(--accent-blue-bright)]" />
        </div>
      </div>

      <span className="font-display text-2xl font-bold gradient-text mt-3 tracking-wider">
        VC
      </span>
      <span className="font-mono text-[10px] text-[var(--accent-cyan-soft)] uppercase tracking-widest mt-1">
        Punjab Engineering College
      </span>
    </div>
  );
}

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const hasValidImage = siteSettings.profileImage && !imageError;

  return (
    <section
      id="hero"
      className="nebula-bg relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-32 lg:pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background nebula atmospheres */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[380px] rounded-full pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.35) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column — Introduction & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            animate="visible"
          >
            {/* Status indicator pill */}
            <motion.div
              variants={fadeUpItem}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[rgba(59,130,246,0.25)] bg-[rgba(15,23,42,0.75)] backdrop-blur-md mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] font-medium tracking-wider text-slate-300 uppercase">
                Exploring the Digital Universe
              </span>
              <span className="text-[rgba(255,255,255,0.2)]">|</span>
              <span className="font-mono text-[11px] text-[var(--accent-blue-bright)] font-semibold">
                {siteSettings.badgePill}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-heading"
              variants={fadeUpItem}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.9rem] font-bold tracking-tight leading-[1.08] mb-4 text-white"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text drop-shadow-[0_0_30px_rgba(96,165,250,0.35)]">
                {siteSettings.name}
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.div
              variants={fadeUpItem}
              className="flex items-center gap-2 text-base sm:text-lg font-mono text-[var(--accent-cyan-soft)] mb-5 font-medium"
            >
              <Sparkles size={16} className="text-[var(--accent-blue-bright)] flex-shrink-0" />
              <span>{siteSettings.headline}</span>
            </motion.div>

            {/* Readable Bio */}
            <motion.p
              variants={fadeUpItem}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-[560px] mb-8 font-light"
            >
              {siteSettings.biography.short}
            </motion.p>

            {/* Quick telemetry badges */}
            <motion.div
              variants={fadeUpSubtle}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8 text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(59,130,246,0.35)] transition-colors">
                <MapPin size={13} className="text-[var(--accent-blue-bright)]" />
                <span>{siteSettings.location.city}, {siteSettings.location.country}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(139,92,246,0.35)] transition-colors">
                <GraduationCap size={13} className="text-[var(--accent-violet)]" />
                <span>{siteSettings.educationSummary.degree} ({siteSettings.educationSummary.period})</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUpItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8 w-full sm:w-auto"
            >
              <motion.button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary group cursor-pointer shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
                whileHover={buttonTapMotion.hover}
                whileTap={buttonTapMotion.tap}
                transition={spaceTransitions.subtleHover}
              >
                <span>Explore Featured Work</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.button>

              {siteSettings.resumeFilePath ? (
                <motion.a
                  href={siteSettings.resumeFilePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Vaibhav_Chhabra_Resume.pdf"
                  className="btn-outline cursor-pointer"
                  whileHover={buttonTapMotion.hover}
                  whileTap={buttonTapMotion.tap}
                  transition={spaceTransitions.subtleHover}
                  aria-label="Download Vaibhav Chhabra's Resume"
                >
                  <Download size={15} strokeWidth={2} />
                  <span>Resume</span>
                </motion.a>
              ) : (
                <motion.button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-outline cursor-pointer"
                  whileHover={buttonTapMotion.hover}
                  whileTap={buttonTapMotion.tap}
                  transition={spaceTransitions.subtleHover}
                >
                  <Mail size={15} strokeWidth={2} />
                  <span>Get In Touch</span>
                </motion.button>
              )}
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              variants={fadeUpSubtle}
              className="flex items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider hidden sm:inline mr-1">
                Connect //
              </span>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-[var(--accent-blue-bright)] p-1.5 rounded transition-colors cursor-pointer"
                    whileHover={{ y: -2, color: "#60a5fa" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {Icon && <Icon size={18} strokeWidth={1.8} />}
                    <span className="text-xs font-mono">{link.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column — Space Portrait Frame with Orbital Rings Behind */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Portrait Wrapper with Orbital Guides */}
            <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 lg:w-88 lg:h-88 flex items-center justify-center">
              {/* 1. Restrained Breathing Nebula Glow BEHIND Portrait */}
              <div
                aria-hidden="true"
                className="absolute inset-[-20px] rounded-full pointer-events-none animate-pulse-glow z-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.18) 45%, transparent 72%)",
                  filter: "blur(36px)",
                }}
              />

              {/* 2. Primary Inner Orbital Ellipse (Clockwise) BEHIND Portrait */}
              <div
                aria-hidden="true"
                className="absolute inset-[-18px] sm:inset-[-22px] rounded-full border border-[rgba(59,130,246,0.24)] pointer-events-none z-0"
              >
                {/* Celestial Particle A: Cyan Probe orbiting cleanly around */}
                <motion.div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_10px_var(--accent-cyan)]"
                  animate={{
                    x: [0, 110, 0, -110, 0],
                    y: [0, 45, 90, 45, 0],
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* 3. Secondary Outer Orbital Ellipse (Counter-Clockwise) BEHIND Portrait */}
              <div
                aria-hidden="true"
                className="absolute inset-[-38px] sm:inset-[-46px] rounded-full border border-dashed border-[rgba(139,92,246,0.18)] pointer-events-none z-0"
              >
                {/* Celestial Particle B: Violet Orb traversing outer track */}
                <motion.div
                  className="absolute -bottom-1 right-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent-violet)] shadow-[0_0_10px_var(--accent-violet)]"
                  animate={{
                    x: [0, -130, 0, 130, 0],
                    y: [0, -50, -100, -50, 0],
                  }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Celestial Particle C: Distant micro-beacon */}
                <motion.div
                  className="absolute top-1/4 -right-1 w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_6px_#93c5fd]"
                  animate={{
                    opacity: [0.2, 0.85, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* 4. Main Portrait Frame Container — Softly Rounded / Circular, Unobstructed */}
              <div className="relative z-10 w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-[rgba(59,130,246,0.5)] via-[rgba(139,92,246,0.35)] to-[rgba(6,182,212,0.5)] shadow-[0_0_35px_rgba(59,130,246,0.22),0_16px_48px_rgba(0,0,0,0.65)] group">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#080d1a] border border-[rgba(255,255,255,0.12)]">
                  {hasValidImage ? (
                    <Image
                      src={siteSettings.profileImage!}
                      alt={`${siteSettings.name} — ${siteSettings.headline}`}
                      fill
                      priority
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 310px, 360px"
                      className="object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-104 select-none"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <PortraitFallback />
                  )}
                </div>
              </div>
            </div>

            {/* Floating Telemetry Dock BELOW the portrait (Zero obstruction of face) */}
            <motion.div
              className="mt-6 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(11,15,26,0.85)] border border-[rgba(59,130,246,0.25)] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent-blue-bright)] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-white tracking-wide">
                {siteSettings.name}
              </span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-[11px] font-mono text-[var(--accent-cyan-soft)]">
                {siteSettings.location.city}, {siteSettings.location.country}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-blue-bright)] transition-colors group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-label="Scroll down to About section"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} strokeWidth={2} />
        </motion.div>
      </motion.button>
    </section>
  );
}
