import type { SkillCategory } from "@/types/portfolio";

/**
 * ============================================================================
 * TECHNICAL SKILLS CONFIGURATION
 * ============================================================================
 * Grouped categorically from resume without arbitrary proficiency percentages.
 * Add, remove, or reorder categories and skills freely.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Programming Languages",
    description: "Core languages used for systems programming, web engineering, and algorithmic tasks.",
    skills: [
      { name: "C++" },
      { name: "JavaScript" },
      { name: "Python" },
    ],
    visible: true,
  },
  {
    id: "frontend",
    label: "Frontend Development",
    description: "Interactive client-side architectures, component design, and responsive interfaces.",
    skills: [
      { name: "React.js" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    visible: true,
  },
  {
    id: "backend",
    label: "Backend Development",
    description: "Server-side architectures, asynchronous runtimes, secure APIs, and real-time pipelines.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "WebSockets" },
    ],
    visible: true,
  },
  {
    id: "databases",
    label: "Databases and Storage",
    description: "Document, relational, in-memory, and vector storage engines with optimized retrieval.",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "Pinecone" },
    ],
    visible: true,
  },
  {
    id: "ai_ml",
    label: "AI and Generative AI",
    description: "Retrieval-Augmented Generation (RAG) pipelines, semantic embeddings, and LLM orchestration.",
    skills: [
      { name: "RAG" },
      { name: "LangChain" },
      { name: "OpenAI API" },
    ],
    visible: true,
  },
  {
    id: "tools_cloud",
    label: "Tools and Cloud",
    description: "Containerization, cloud asset pipelines, collaboration platforms, and version control.",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Cloudinary" },
    ],
    visible: true,
  },
  {
    id: "cs_fundamentals",
    label: "Computer Science Fundamentals",
    description: "Core theoretical pillars and algorithmic foundations mastered at Punjab Engineering College.",
    skills: [
      { name: "Data Structures & Algorithms (DSA)" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Database Management Systems (DBMS)" },
      { name: "Operating Systems (OS)" },
      { name: "Computer Networks" },
    ],
    visible: true,
  },
];
