import { projects } from "../data/projects";
import ProjectPreview from "../components/ProjectPreview.jsx";
import { NavLink } from "react-router-dom";

export default function PinnedProjectsSection() {
  const pinnedProjects = [];

  for (const category in projects) {
    for (const project of projects[category]) {
      if (project.pinned === true) {
        pinnedProjects.push({
          category,
          ...project,
        });
      }
    }
  }

  return (
    <section id="pinned-projects" className="py-15 max-w-[80vw] mx-auto px-4">
      <div class="max-w-[80vw] mx-auto bg-foreground h-[1px] mb-7"></div>

      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
          My Pinned Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my pinned projects showing my experience in full-stack and
          mobile development projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {pinnedProjects.map((project) => (
          <ProjectPreview key={project.title} project={project} />
        ))}
      </div>

      <div className="flex justify-center">
        <NavLink
          to={"projects"}
          className="group inline-flex items-center box gap-3 px-8 py-4 animated-fill-opp transition-colors bg-foreground text-background border border-foreground hover:text-foreground cursor-pointer"
        >
          <span>View All Projects</span>
          <i className="fas fa-arrow-right"></i>
        </NavLink>
      </div>
    </section>
  );
}
