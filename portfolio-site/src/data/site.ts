import type { SiteSettings } from "@/types/portfolio";

/**
 * Global Site Settings & Profile Configuration
 * Edit this file to update personal details, bio, links, and toggle section visibility.
 */
export const siteSettings: SiteSettings = {
  name: "Vaibhav Chhabra",
  title: "Vaibhav Chhabra — Full-Stack Developer | AI Enthusiast",
  description:
    "I build full-stack web applications and AI-powered tools, with an interest in backend engineering, scalable systems, and practical AI integration. Computer Science undergraduate at Punjab Engineering College, Chandigarh.",
  headline: "Full-Stack Developer | AI Enthusiast",
  subheadline: "Building scalable web platforms, robust backend systems, and practical AI solutions.",
  badgePill: "PEC '28",

  educationSummary: {
    institution: "Punjab Engineering College, Chandigarh",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 – 2028",
    graduationYear: "2028",
  },

  biography: {
    short:
      "I build full-stack web applications and AI-powered tools, with an interest in backend engineering, scalable systems, and practical AI integration.",
    full: [
      "I'm a Computer Science undergraduate at Punjab Engineering College, Chandigarh (Class of 2028). I specialize in developing full-stack web applications and AI-powered developer tools, with a deep interest in backend engineering, scalable architectures, and practical AI integrations.",
      "My technical focus centers on engineering reliable REST APIs, WebSockets, and asynchronous pipelines, combined with modern Retrieval-Augmented Generation (RAG) workflows using LangChain, Pinecone, and LLM APIs.",
      "Beyond building applications, I am a Smart India Hackathon 2025 National Finalist, have solved 500+ DSA problems across algorithmic platforms, and serve as an Executive Board Member of the PEC ACM CSS Society.",
    ],
    currentFocus: "Smart India Hackathon 2025 National Finalist • Exploring Summer Internships & Technical Collaborations",
  },

  stats: [
    { number: "2028", label: "Graduation Year", sub: "Punjab Engineering College" },
    { number: "500+", label: "DSA Challenges Solved", sub: "LeetCode & CodeChef" },
    { number: "99.14%", label: "JEE Main 2024", sub: "Percentile Milestone" },
  ],

  location: {
    city: "Chandigarh",
    state: "Punjab / UT",
    country: "India",
    coordinates: {
      lat: "30.7333° N",
      lng: "76.7794° E",
    },
  },

  profileImage: "/images/image.png",
  resumeFilePath: "/main_resume.pdf", // Uploaded to /public/resume.pdf
  email: "vaibhav13754@gmail.com", // Configurable email
  githubUrl: "https://github.com/vaibhav786775", // Configurable GitHub
  linkedinUrl: "https://linkedin.com/in/vaibhavchhabra786/", // Configurable LinkedIn
  twitterHandle: "@vaibhav_chhabra",
  url: "https://vaibhavchhabra.dev",
  ogImage: "/og-image.png",

  navigationSettings: {
    ctaButtonText: "Say Hello",
    ctaTarget: "#contact",
  },

  sectionVisibility: {
    hero: true,
    about: true,
    projects: true,
    skills: true,
    experience: true,
    achievements: true,
    competitive: true,
    contact: true,
  },

  animationPreferences: {
    prefersReducedMotionRespect: true,
    starfieldParticleDensity: 6500, // Area (sq px) per star particle
  },
};

// Aliases for backward compatibility
export const siteConfig = {
  name: siteSettings.name,
  title: siteSettings.title,
  description: siteSettings.description,
  url: siteSettings.url,
  twitterHandle: siteSettings.twitterHandle,
  ogImage: siteSettings.ogImage,
  resumePath: siteSettings.resumeFilePath,
  profileImagePath: siteSettings.profileImage,
};

export const sectionVisibility = siteSettings.sectionVisibility;
