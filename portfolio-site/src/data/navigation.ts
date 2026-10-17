import type { NavItem, SocialLink } from "@/types/portfolio";
import { siteSettings } from "./site";

/**
 * ============================================================================
 * NAVIGATION AND SOCIAL LINKS CONFIGURATION
 * ============================================================================
 */
export const navItems: NavItem[] = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Competitive", href: "#competitive", sectionId: "competitive" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteSettings.githubUrl,
    icon: "Github",
    ariaLabel: "Visit Vaibhav Chhabra's GitHub profile",
  },
  {
    label: "LinkedIn",
    href: siteSettings.linkedinUrl,
    icon: "Linkedin",
    ariaLabel: "Connect with Vaibhav Chhabra on LinkedIn",
  },
  {
    label: "Email",
    href: `mailto:${siteSettings.email}`,
    icon: "Mail",
    ariaLabel: "Send an email to Vaibhav Chhabra",
  },
];
