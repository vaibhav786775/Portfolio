"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, socialLinks } from "@/data/navigation";
import { siteSettings } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";
import { spaceTransitions, buttonTapMotion } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Github,
  Linkedin,
  Mail,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Intersection observer for active section detection
  useEffect(() => {
    const sections = ["hero", ...navItems.map((item) => item.sectionId)];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25, rootMargin: "-12% 0px -40% 0px" }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating pill navigation container */}
        <nav
          className={`w-full flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 border ${
            scrolled
              ? "bg-[rgba(8,12,22,0.92)] border-[rgba(59,130,246,0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.65),0_0_24px_rgba(59,130,246,0.16)] backdrop-blur-xl"
              : "bg-[rgba(11,15,26,0.72)] border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.45)] backdrop-blur-md"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo / Monogram */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-blue)] rounded-full px-1"
            aria-label="Back to top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={spaceTransitions.subtleHover}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_10px_var(--accent-cyan)] transition-transform group-hover:scale-125" />
            <span className="font-mono text-sm font-semibold tracking-wider text-white group-hover:text-[var(--accent-blue-bright)] transition-colors">
              VC<span className="text-[var(--text-muted)]">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Nav Items with Animated Pill Indicator */}
          <ul className="hidden md:flex items-center gap-1 relative" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.href} className="relative">
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative z-10 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-colors cursor-pointer ${
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    whileTap={{ scale: 0.96 }}
                  >
                    {item.label}
                  </motion.button>

                  {/* Animated sliding active indicator pill */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 z-0 rounded-full bg-[rgba(59,130,246,0.2)] border border-[rgba(96,165,250,0.4)] shadow-[0_0_14px_rgba(59,130,246,0.28)]"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Action / Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 border-r border-[rgba(255,255,255,0.08)] pr-3">
              {socialLinks.slice(0, 2).map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="p-1.5 text-slate-400 hover:text-[var(--accent-blue-bright)] transition-colors rounded-full hover:bg-[rgba(255,255,255,0.06)] cursor-pointer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    {Icon && <Icon size={15} strokeWidth={1.8} />}
                  </motion.a>
                );
              })}
            </div>

            <motion.button
              onClick={() => handleNavClick(siteSettings.navigationSettings.ctaTarget)}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[var(--accent-blue-bright)] bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)] hover:bg-[rgba(59,130,246,0.22)] hover:border-[rgba(59,130,246,0.5)] transition-all cursor-pointer flex items-center gap-1 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
              whileHover={buttonTapMotion.hover}
              whileTap={buttonTapMotion.tap}
            >
              <span>{siteSettings.navigationSettings.ctaButtonText}</span>
              <ArrowUpRight size={13} />
            </motion.button>
          </div>

          {/* Mobile hamburger button */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-blue)]"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={spaceTransitions.gentleSpring}
            className="md:hidden mt-2 max-w-5xl mx-auto pointer-events-auto"
          >
            <div className="bg-[rgba(8,12,22,0.95)] border border-[rgba(59,130,246,0.3)] shadow-[0_12px_48px_rgba(0,0,0,0.8),0_0_24px_rgba(59,130,246,0.2)] backdrop-blur-2xl rounded-3xl p-5 flex flex-col gap-3">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.sectionId;
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl font-mono text-sm transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? "bg-[rgba(59,130,246,0.15)] text-[var(--accent-blue-bright)] border border-[rgba(59,130,246,0.3)] font-semibold"
                            : "text-slate-300 hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_6px_var(--accent-cyan)]" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer"
                      >
                        {Icon && <Icon size={16} />}
                      </a>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleNavClick(siteSettings.navigationSettings.ctaTarget)}
                  className="px-4 py-2 rounded-full text-xs font-mono font-medium text-[var(--accent-blue-bright)] bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.3)] cursor-pointer flex items-center gap-1.5"
                >
                  <span>{siteSettings.navigationSettings.ctaButtonText}</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
