import { useState, useEffect } from "react";

export default function ProjectDetailModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.media.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.media.length) % project.media.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div
          className="bg-background border border-border w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur-sm z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {project.title}
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Image Slider */}
            <div className="relative bg-muted">
              <div className="aspect-video md:aspect-auto md:h-96 overflow-hidden">
                <img
                  src={
                    project.media[currentImageIndex] || "/projectFallback.svg"
                  }
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation Arrows */}
              {project.media.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
                    aria-label="Previous image"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
                    aria-label="Next image"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {project.media.length > 1 && (
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                  {currentImageIndex + 1} / {project.media.length}
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {project.media.length > 1 && (
              <div className="flex gap-2 p-4 bg-muted/50 overflow-x-auto">
                {project.media.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded border-2 transition-all overflow-hidden ${
                      idx === currentImageIndex
                        ? "border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image || "/projectFallback.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Project Details */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  About
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 text-primary border border-primary/30  text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 box animated-fill-opp bg-foreground text-background hover:text-foreground border border-backround font-medium "
                    >
                      <i className="fas fa-external-link-alt"></i>
                      View Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 box animated-fill-opp bg-foreground text-background hover:text-foreground border border-foreground font-medium "
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
