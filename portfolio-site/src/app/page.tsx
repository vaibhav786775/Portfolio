import { StarField } from "@/components/layout/StarField";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CompetitiveSection } from "@/components/sections/CompetitiveSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteSettings } from "@/data/site";

/**
 * Portfolio Home Page.
 * Modular, fully data-driven architecture.
 * To toggle visibility of any section: edit `sectionVisibility` in `src/data/site.ts`.
 */
export default function Home() {
  const { sectionVisibility } = siteSettings;

  return (
    <>
      {/* Animated starfield background — fixed behind all content */}
      <StarField />

      {/* Floating navigation bar */}
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero Section */}
        {sectionVisibility.hero && <HeroSection />}

        {/* 2. About Section */}
        {sectionVisibility.about && <AboutSection />}

        {/* 3. Selected Projects */}
        {sectionVisibility.projects && <ProjectsSection />}

        {/* 4. Technical Skills */}
        {sectionVisibility.skills && <SkillsSection />}

        {/* 5. Experience & Recognition */}
        {(sectionVisibility.experience || sectionVisibility.achievements) && (
          <ExperienceSection />
        )}

        {/* 6. Competitive Programming */}
        {sectionVisibility.competitive && <CompetitiveSection />}

        {/* 7. Contact Transmissions */}
        {sectionVisibility.contact && <ContactSection />}
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
