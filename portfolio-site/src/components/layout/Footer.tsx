"use client";

import { useEffect, useState } from "react";
import { navItems, socialLinks } from "@/data/navigation";
import { siteSettings } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[rgba(5,8,16,0.9)] backdrop-blur-xl">
      <div className="section-container !py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Telemetry */}
          <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
            <span className="font-mono text-sm font-semibold tracking-wider text-white">
              <span className="text-[var(--accent-blue-bright)]">VC</span>.dev // {siteSettings.name}
            </span>
            <p className="text-xs text-slate-500 font-mono">
              Exploring the Digital Universe • CS Undergrad @ Punjab Engineering College
            </p>
            <p className="text-[11px] text-slate-600 font-mono mt-1">
              © {year} {siteSettings.name}. Designed &amp; engineered with Next.js &amp; Tailwind CSS.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-5" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(item.sectionId);
                      if (el) {
                        const navOffset = 88;
                        const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
                        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
                      }
                    }}
                    className="text-xs font-mono text-slate-400 hover:text-[var(--accent-blue-bright)] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Channels */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="p-2.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-slate-400 hover:text-[var(--accent-blue-bright)] hover:border-[rgba(59,130,246,0.3)] transition-all cursor-pointer"
                >
                  {Icon && <Icon size={16} strokeWidth={1.8} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
