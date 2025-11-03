export default function SkillsSection() {
  const skills = [
    {
      icon: "fab fa-react",
      title: "React & Zustand",
      description:
        "Modern React with hooks, context, and lightweight state management using Zustand",
    },

    {
      icon: "fab fa-vuejs",
      title: "Vue.js",
      description: "Vue 3 Composition API, state management with Pinia",
    },
    {
      icon: "fab fa-python",
      title: "Python & Django",
      description: "REST APIs, ORM, authentication and authorization",
    },
    {
      icon: "fab fa-flutter",
      title: "Flutter",
      description: "Cross-platform mobile development for iOS and Android",
    },
    {
      icon: "fas fa-database",
      title: "Databases",
      description: "PostgreSQL, MongoDB, Firebase, Redis",
    },
    {
      icon: "fas fa-tools",
      title: "Tools & More",
      description: "Git, Vite, CI/CD, Vercel deployment,Vite",
    },
  ];

  return (
    <section className="pt-30 px-6 bg-background text-foreground">
      <div class="max-w-[80vw]  mx-auto bg-foreground h-[1px] mb-15"></div>

      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">
          Skills & Technologies I've Learned
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-background p-6 border border-foreground box animated-fill hover:text-background`}
            >
              <div className="text-4xl mb-4">
                <i className={skill.icon}></i>
              </div>
              <h4 className="text-lg font-bold font-display mb-2">
                {skill.title}
              </h4>
              <p className="text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
