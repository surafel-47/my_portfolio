import { useState, useEffect } from "react";
import ProjectDetailModal from "../components/ProjectDetails";

export default function ProjectPreview({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!project.media || project.media.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.media.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project.media]);

  const currentImage =
    project.media?.[currentImageIndex] || "/project-showcase.jpg";

  return (
    <>
      <div
        className="group border-[1px] overflow-hidden box cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Carousel Container */}
        <div className="relative h-64 md:h-[500px] overflow-hidden">
          <img
            src={currentImage || "../assets/react.svg"}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/90 opacity-0 group-hover:opacity-200 transition-opacity duration-500 flex flex-col justify-between p-6">
            <div>
              <p className="text-sm text-white/80 line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-primary/30 text-white border border-primary/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Title + Buttons */}
        <div className="p-4 border-t border-border">
          <h3 className="text-lg font-bold text-foreground mb-3 text-balance">
            {project.title}
          </h3>

          <div className="flex gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-foreground text-background hover:text-foreground animated-fill-opp transition-colors text-sm font-medium border border-primary/50"
              >
                <i className="fas fa-external-link-alt text-xs"></i>
                Live
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-foreground text-background hover:text-foreground animated-fill-opp transition-colors text-sm font-medium border border-primary/50"
              >
                <i className="fab fa-github text-xs"></i>
                Code
              </a>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectDetailModal
          project={project}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
