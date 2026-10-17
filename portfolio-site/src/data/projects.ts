import type { Project } from "@/types/portfolio";

/**
 * ============================================================================
 * PORTFOLIO PROJECTS CONFIGURATION
 * ============================================================================
 *
 * HOW TO MAINTAIN THIS FILE:
 * - ADD A PROJECT: Append a new Project object to this array with your details.
 * - REMOVE A PROJECT: Simply delete or comment out the object.
 * - REORDER PROJECTS: Move the object up or down; display order follows array order.
 * - HIDE TEMPORARILY: Set `featured: false` or filter if needed.
 * - MISSING IMAGES/URLS: If `image` is null, the ProjectCard automatically renders
 *   a space architecture schematic blueprint. If `githubUrl` or `liveUrl` is null,
 *   the button hides gracefully.
 */
export const projects: Project[] = [
  {
    id: "videomind-ai",
    title: "VideoMind AI",
    shortDescription:
      "A video knowledge assistant that converts YouTube videos into searchable knowledge, including transcripts, summaries, key decisions, action items, and open questions.",
    fullDescription:
      "End-to-end video knowledge platform that automates video transcription and chunking from YouTube streams using yt-dlp and FFmpeg. Leveraged LangChain and Pinecone vector storage to power a semantic Retrieval-Augmented Generation (RAG) pipeline with Mistral AI and Groq AI for context-aware Q&A, structured summaries, key decisions, and action items. Built with Node.js, Express, MongoDB, and secure JWT authentication.",
    category: "AI / RAG / Full-Stack",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "LangChain",
      "Pinecone",
      "Mistral AI",
      "Groq AI",
      "yt-dlp",
      "FFmpeg",
    ],
    image: null, // Gracefully renders procedural space blueprint fallback
    githubUrl: "https://github.com/vaibhav-chhabra/videomind-ai", // Configurable placeholder
    liveUrl: null, // Not deployed publicly
    featured: true,
    status: "Completed",
    highlights: [
      "Built a Retrieval-Augmented Generation pipeline for semantic search and context-aware conversations.",
      "Automated video processing and transcription.",
      "Implemented JWT authentication and REST APIs.",
    ],
  },
  {
    id: "applysmart",
    title: "ApplySmart",
    shortDescription:
      "An AI-powered job portal and resume analyzer that helps candidates discover jobs, track applications, and improve their resumes against job descriptions.",
    fullDescription:
      "Comprehensive career acceleration platform featuring full recruiter and candidate workflows. Implemented intelligent resume analysis that parses uploaded documents via Multer and Cloudinary, identifies missing keywords against target job postings, and generates actionable ATS-focused improvement suggestions. Engineered with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and JWT authentication.",
    category: "Full-Stack / AI",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
      "Multer",
    ],
    image: null,
    githubUrl: "https://github.com/vaibhav-chhabra/applysmart",
    liveUrl: null,
    featured: true,
    status: "Completed",
    highlights: [
      "Implemented recruiter and candidate workflows.",
      "Built resume analysis with missing-keyword identification and ATS-focused suggestions.",
      "Implemented authentication, REST APIs, and cloud-based uploads.",
    ],
  },
  {
    id: "certificate-authenticity-validator",
    title: "Academic Certificate Authenticity Validator",
    shortDescription:
      "A certificate verification application developed as part of my Smart India Hackathon 2025 participation.",
    fullDescription:
      "Built as a Smart India Hackathon 2025 National Finalist solution to prevent academic credential forgery. Provides a multi-tiered verification pipeline enabling institutions and employers to validate academic credentials, issue tamper-evident digital records, and query validation statuses in real-time through secure RESTful endpoints. Implemented with React.js, Node.js, Express.js, and MongoDB.",
    category: "SIH / Full-Stack Development",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: null,
    githubUrl: "https://github.com/vaibhav-chhabra/academic-certificate-validator",
    liveUrl: null,
    featured: true,
    status: "Completed",
    highlights: [
      "Developed the frontend and backend.",
      "Implemented REST APIs and certificate verification.",
      "Participated as part of an SIH 2025 National Finalist team.",
    ],
  },
];
