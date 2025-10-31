import { useState, useMemo } from "react";
import ProjectsFilter from "../components/ProjectsFilter";
import ProjectPreview from "../components/ProjectPreview";

import { projects } from "../data/projects.js";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Get all categories from projects object
  const categories = Object.keys(projects);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return Object.values(projects).flat();
    }
    return projects[activeCategory] || [];
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background pt-32 pb-20  md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore my portfolio of web, mobile, and desktop applications
          </p>
        </div>

        {/* Filter Buttons */}
        <ProjectsFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <ProjectPreview key={idx} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
