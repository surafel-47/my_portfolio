import { projects } from "../data/projects";
import { useState, useEffect } from "react";

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
    <section id="pinned-projects" className="py-20 max-w-[80vw] mx-auto px-4">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my pinned projects showcasing expertise in full-stack
          development, mobile apps, and automation solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {pinnedProjects.map((project) => (
          <PinnedProjectPreview key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="#projects"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
        >
          <span>View All Projects</span>
          <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
        </a>
      </div>
    </section>
  );
}

function PinnedProjectPreview({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.media || project.media.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.media.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project.media]);

  const currentImage = project.media?.[currentImageIndex] || "/placeholder.svg";

  return (
    <div className="group glass-effect  border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Image Carousel Container */}
      <div className="relative h-64 md:h-[500px] bg-muted overflow-hidden">
        {/* Current Image */}
        <img
          src={currentImage || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-125 transition-opacity duration-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
          {/* Top section: Title and Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 text-balance">
              {project.title}
            </h3>
            <p className="text-sm text-white/80 mb-4 line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Bottom section: Tech stack and Links */}
          <div>
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech_stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-primary/30 text-white rounded-full border border-primary/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 text-foreground rounded-lg hover:bg-background  transition-colors text-sm font-medium border"
                >
                  <i className="fas fa-external-link-alt text-xs"></i>
                  Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 text-white rounded-lg hover:bg-primary/40 transition-colors text-sm font-medium border border-primary/50"
                >
                  <i className="fab fa-github text-xs"></i>
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
