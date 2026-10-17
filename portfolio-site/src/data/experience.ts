import type { ExperienceItem } from "@/types/portfolio";

/**
 * ============================================================================
 * EXPERIENCE AND EDUCATION TIMELINE CONFIGURATION
 * ============================================================================
 * Supports education, work, and leadership roles.
 * Order in this array determines the vertical timeline display order.
 */
export const experienceItems: ExperienceItem[] = [
  {
    id: "pec-btech-cse",
    role: "B.Tech in Computer Science and Engineering",
    organization: "Punjab Engineering College, Chandigarh",
    orgUrl: "https://pec.ac.in",
    location: "Chandigarh, India",
    period: "2024 – 2028",
    description: [
      "Pursuing Bachelor of Technology in Computer Science & Engineering with coursework in Data Structures, Object-Oriented Programming, DBMS, OS, and Computer Networks.",
      "Smart India Hackathon 2025 National Finalist for developing the Academic Certificate Authenticity Validator.",
      "Executive Board Member of PEC ACM CSS Society, organizing campus hackathons and algorithmic workshops.",
    ],
    type: "education",
    visible: true,
  },
  {
    id: "acm-css-leadership",
    role: "Executive Board Member",
    organization: "PEC ACM CSS Society",
    orgUrl: "https://pec.ac.in",
    location: "Chandigarh, India",
    period: "2024 – Present",
    description: [
      "Leading technical initiatives, competitive programming practice sessions, and peer-mentorship workshops for undergraduate engineers.",
      "Coordinated hackathons and technical symposiums connecting students with industry engineering mentors.",
    ],
    type: "work",
    visible: true,
  },
  {
    id: "senior-secondary-xii",
    role: "Senior Secondary Education (Class XII)",
    organization: "CBSE Board",
    orgUrl: null,
    location: "India",
    period: "2024",
    description: [
      "Graduated with 92% aggregate in the Science and Mathematics stream.",
      "Achieved 99.14 percentile in JEE Main 2024 nationwide.",
    ],
    type: "education",
    visible: true,
  },
  {
    id: "secondary-x",
    role: "Secondary Education (Class X)",
    organization: "CBSE Board",
    orgUrl: null,
    location: "India",
    period: "2022",
    description: [
      "Graduated with 94.4% aggregate with distinction across core science and mathematics subjects.",
    ],
    type: "education",
    visible: true,
  },
];
