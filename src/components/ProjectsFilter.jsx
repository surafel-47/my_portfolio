export default function ProjectsFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <a
        variant={activeCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className="border border-foreground/20"
      >
        All Projects
      </a>
      {categories.map((category) => (
        <a
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="border border-foreground/20 capitalize"
        >
          {category}
        </a>
      ))}
    </div>
  );
}
