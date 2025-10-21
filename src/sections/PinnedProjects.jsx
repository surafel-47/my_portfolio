import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function PinnedProjectCard(props) {
  return <div class="w-100px bg-background">Project</div>;
}
export default function PinnedProjects() {
  return (
    <section id="projects">
      <h2>Pinned Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <PinnedProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
