/**
 * Global TypeScript Interfaces for Vaibhav Chhabra's Portfolio.
 * Ensures complete type-safety across all data sources and components.
 */

export type ProjectStatus = "Completed" | "Active" | "In Development" | "Production" | "Archived";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  technologies: string[];
  image?: string | null;
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured?: boolean;
  status?: ProjectStatus;
  highlights?: string[];
}

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface SkillItem {
  name: string;
  description?: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  id: string;
  label: string;
  description?: string;
  skills: SkillItem[];
  visible: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  orgUrl?: string | null;
  location?: string;
  period: string;
  description: string[];
  type: "work" | "education" | "volunteer";
  visible: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization?: string;
  date?: string;
  description: string;
  badge?: string;
  url?: string | null;
  visible: boolean;
}

export interface CompetitiveProfile {
  platform: "LeetCode" | "Codeforces" | "CodeChef" | string;
  handle: string;
  profileUrl?: string | null;
  rating?: string;
  rank?: string;
  stats?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "Github" | "Linkedin" | "Mail" | "MessageCircle" | string;
  ariaLabel: string;
}

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface SectionVisibility {
  hero: boolean;
  about: boolean;
  projects: boolean;
  skills: boolean;
  experience: boolean;
  achievements: boolean;
  competitive: boolean;
  contact: boolean;
}

export interface EducationSummary {
  institution: string;
  degree: string;
  period: string;
  graduationYear: string;
}

export interface StatItem {
  number: string;
  label: string;
  sub: string;
}

export interface SiteSettings {
  name: string;
  title: string;
  description: string;
  headline: string;
  subheadline: string;
  badgePill: string;
  educationSummary: EducationSummary;
  biography: {
    short: string;
    full: string[];
    currentFocus: string;
  };
  stats?: StatItem[];
  location: {
    city: string;
    state: string;
    country: string;
    coordinates: {
      lat: string;
      lng: string;
    };
  };
  profileImage: string | null;
  resumeFilePath: string | null;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterHandle?: string;
  url: string;
  ogImage?: string;
  navigationSettings: {
    ctaButtonText: string;
    ctaTarget: string;
  };
  sectionVisibility: SectionVisibility;
  animationPreferences: {
    prefersReducedMotionRespect: boolean;
    starfieldParticleDensity: number;
  };
}
