<div align="center">

# 🌌 Vaibhav Chhabra — Portfolio

**Full-Stack Developer • AI Enthusiast • CS Undergrad @ Punjab Engineering College (PEC)**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**Live Portfolio**](https://vaibhavchhabra.dev) • [**GitHub**](https://github.com/vaibhav786775) • [**LinkedIn**](https://linkedin.com/in/vaibhavchhabra786/) • [**Email**](mailto:vaibhav13754@gmail.com)

</div>

---

## 🚀 Overview

A personal developer portfolio designed with a celestial deep-space aesthetic. Built to showcase full-stack projects, AI/RAG integrations, algorithmic achievements, and technical background.

### ✨ Highlights & Features

- **🌠 Celestial Space Theme**: Ambient nebulae, interactive starfield background, and telemetry aesthetic.
- **⚡ Next.js App Router & Turbopack**: Blazing-fast page loads with static prerendering and route optimization.
- **🎨 Framer Motion Animations**: Smooth section reveals, floating docks, micro-interactions, and accessible reduced-motion support.
- **🧩 100% Data-Driven Architecture**: Easily update content, projects, experience, skills, and links from dedicated files in `src/data/`.
- **📱 Fully Responsive**: Tailored layout for mobile, tablet, and desktop screens with custom touch navigation.
- **🔍 Production SEO Ready**: OpenGraph social cards, dynamic `sitemap.xml`, `robots.txt`, and semantic HTML5 hierarchy.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS design tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
Portfolio/
├── package.json              # Root workspace definition
├── .gitignore                # Root Git ignore rules
└── portfolio-site/           # Next.js Application
    ├── public/
    │   ├── images/           # Profile picture & images
    │   ├── main_resume.pdf   # Downloadable resume
    │   └── ...
    ├── src/
    │   ├── app/              # Next.js App Router (pages, layout, og-image, sitemap)
    │   ├── components/
    │   │   ├── layout/       # Navbar, Footer, StarField
    │   │   ├── sections/     # Hero, About, Projects, Skills, Experience, Contact
    │   │   └── ui/           # Reusable UI components & animations
    │   ├── data/             # Configurable portfolio data
    │   │   ├── site.ts       # Global settings, bio, personal links
    │   │   ├── projects.ts   # Project list, descriptions, tech tags
    │   │   ├── skills.ts     # Categorized technical skills
    │   │   ├── experience.ts # Work experience & milestones
    │   │   └── competitive.ts# LeetCode, CodeChef, and contest profiles
    │   ├── lib/              # Animation variants & utilities
    │   └── types/            # TypeScript interfaces & types
    ├── next.config.ts        # Next.js configuration
    └── package.json          # Next.js dependencies & scripts
```

---

## 💻 Getting Started Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17+ or v20+) installed.

### 1. Clone the repository

```bash
git clone https://github.com/vaibhav786775/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
# Using root workspaces
npm install

# OR inside the portfolio-site folder directly
cd portfolio-site
npm install
```

### 3. Run the development server

```bash
# From root
npm run dev

# OR from portfolio-site directory
cd portfolio-site
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Customization

All personal details, projects, and styling configurations are modular and isolated in `portfolio-site/src/data/`:

| File | What you can configure |
| :--- | :--- |
| `src/data/site.ts` | Name, headline, bio, profile image path, resume link, contact details & section visibility toggles |
| `src/data/projects.ts` | Add, reorder, or update your projects, tech stacks, and GitHub/live links |
| `src/data/skills.ts` | Languages, frameworks, databases, developer tools, and concepts |
| `src/data/experience.ts`| Work history, internships, education, and hackathon milestones |
| `src/data/competitive.ts` | LeetCode / CodeChef ratings, ranks, and solved problem counts |

---

## 🚢 Deployment on Vercel

### Option 1: Vercel Web Dashboard (Easiest)

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New..."** → **"Project"**.
3. Select your **`Portfolio`** repository.
4. In the Project configuration:
   - **Framework Preset**: Next.js
   - **Root Directory**: `portfolio-site` *(or leave default root workspace)*
5. Click **Deploy**.

### Option 2: Vercel CLI

```bash
cd portfolio-site
npx vercel
```

For production release:
```bash
npx vercel --prod
```

---

## 👤 Author

**Vaibhav Chhabra**
- GitHub: [@vaibhav786775](https://github.com/vaibhav786775)
- LinkedIn: [in/vaibhavchhabra786](https://linkedin.com/in/vaibhavchhabra786/)
- Email: [vaibhav13754@gmail.com](mailto:vaibhav13754@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
