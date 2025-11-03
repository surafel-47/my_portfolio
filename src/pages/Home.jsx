import HeroSection from "../sections/Hero";
import Experience from "../sections/Experience";
import PinnedProjectsSection from "../sections/PinnedProjects";
import CertificatesSection from "../sections/Certificates";
import ContactSection from "../sections/Contact";
import SkillsSection from "../sections/Skills";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Experience />
      <PinnedProjectsSection />
      <CertificatesSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
