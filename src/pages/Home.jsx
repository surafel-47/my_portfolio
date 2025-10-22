import HeroSection from "../sections/Hero";
import Experience from "../sections/Experience";
import PinnedProjectsSection from "../sections/PinnedProjects";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Experience />
      <PinnedProjectsSection />
    </main>
  );
}
