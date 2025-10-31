export default function ProjectsFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap gap-5 mb-8">
      <button
        onClick={() => onCategoryChange("all")}
        className={`border border-foreground/20 px-4 py-2 h-10 box ${
          activeCategory === "all"
            ? "bg-foreground text-background"
            : "bg-transparent text-foreground hover:bg-foreground/10"
        }`}
      >
        All Projects
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`border border-foreground/20 capitalize px-4 py-2 h-10 box ${
            activeCategory === category
              ? "bg-foreground text-background"
              : "bg-transparent text-foreground hover:bg-foreground/10"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
