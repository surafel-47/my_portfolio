export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 max-w-6xl mx-auto bg-gradient-to-b from-background to-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground font-[Roboto, sans-serif]">
          Experience &amp; Education
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <i className="fas fa-laptop-code text-foreground"></i>Work
              Experience
            </h3>
            <div className="border-l-4 border-foreground pl-6 space-y-8">
              {/* MMCY Tech */}
              <div className="glass-effect p-6 box">
                <div className="flex justify-between items-start mb-3">
                  <a
                    href="https://www.mmcyltd.com"
                    target="_blank"
                    className="text-foreground hover:text-accent underline transition-colors font-semibold text-md"
                  >
                    Software Developer - MMCY Tech
                    <i className="ml-3 fas fa-external-link-alt"></i>
                  </a>
                  <div className="flex items-center gap-2 text-sm font-bold text-secondary-text">
                    <i className="fas fa-calendar-alt"></i>
                    <span>2024 - Present</span>
                  </div>
                </div>
                <p className="text-secondary-text text-sm">
                  Developing internal tools and automating processes for
                  improved productivity and workflow.
                </p>
              </div>

              {/* Ethiopian Road Authority */}
              <div className="glass-effect p-6 box">
                <div className="flex justify-between items-start mb-3">
                  <a
                    href="https://www.era.gov.et"
                    target="_blank"
                    className="text-foreground hover:text-accent underline transition-colors font-semibold text-md"
                  >
                    Full Stack Developer - Ethiopian Road Authority
                    <i className="ml-3 fas fa-external-link-alt"></i>
                  </a>
                  <div className="flex items-center gap-2 text-sm font-bold text-secondary-text">
                    <i className="fas fa-calendar-alt"></i>
                    <span>2024 (Contractual)</span>
                  </div>
                </div>
                <p className="text-secondary-text mb-3 text-sm">
                  Developed a Python-based web portal for Heavy Vehicles Load
                  registration system used throughout the country.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-secondary-text">
                  <li>Developed Axle Load Management Module</li>
                  <li>Implemented Road Condition Inspection System</li>
                  <li>Integrated Telebirr Payment System</li>
                  <li>Enhanced Reporting Dashboard</li>
                </ul>
              </div>

              {/* Crooze Company */}
              <div className="glass-effect p-6 box">
                <div className="flex justify-between items-start mb-3">
                  <a
                    href="https://www.crooze.com"
                    target="_blank"
                    className="text-foreground hover:text-accent underline transition-colors font-semibold text-md"
                  >
                    Mobile App Developer - Crooze Company
                    <i className="ml-3 fas fa-external-link-alt"></i>
                  </a>
                  <div className="flex items-center gap-2 text-sm font-bold text-secondary-text">
                    <i className="fas fa-calendar-alt"></i>
                    <span>2023 - 2024</span>
                  </div>
                </div>
                <p className="text-secondary-text text-sm">
                  Worked on mobile applications with React Native and Flutter
                  for Crooze Shared Ride School App
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <i className="fas fa-graduation-cap text-accent"></i>Education
            </h3>
            <div className="border-l-4 border-accent pl-6 space-y-8">
              {/* MMCY Bootcamp */}
              <div className="glass-effect p-6 box">
                <div className="flex justify-between items-start mb-3">
                  <a
                    href="https://www.mmcy.com/bootcamp"
                    target="_blank"
                    className="text-foreground hover:text-accent underline transition-colors font-semibold text-md"
                  >
                    MMCY FullStack Developer Bootcamp
                    <i className="ml-3 fas fa-external-link-alt"></i>
                  </a>
                  <div className="flex items-center gap-2 text-sm font-bold text-secondary-text">
                    <i className="fas fa-calendar-alt"></i>
                    <span>2024</span>
                  </div>
                </div>
                <p className="text-secondary-text text-sm">
                  FullStack Development Training in Vue.js and Node.js(Express)
                </p>
              </div>

              {/* BSc Computer Science */}
              <div className="glass-effect p-6 box">
                <div className="flex justify-between items-start mb-3">
                  <a
                    href="https://www.hilcoe.edu.et"
                    target="_blank"
                    className="text-foreground hover:text-accent underline transition-colors font-semibold text-md"
                  >
                    BSc in Computer Science
                    <i className="ml-3 fas fa-external-link-alt"></i>
                  </a>
                  <div className="flex items-center gap-2 text-sm font-bold text-secondary-text">
                    <i className="fas fa-calendar-alt"></i>
                    <span>2020 - 2024</span>
                  </div>
                </div>
                <p className="text-secondary-text text-sm">
                  HiLCoE College, Addis Ababa
                </p>
              </div>

              {/* Microsoft Azure */}
              <div className="glass-effect p-6 box">
                <div className="flex justify-between items-start mb-3">
                  <a
                    href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
                    target="_blank"
                    className="text-foreground hover:text-accent underline transition-colors font-semibold text-md"
                  >
                    Microsoft Azure Fundamentals
                    <i className="ml-3 fas fa-external-link-alt"></i>
                  </a>
                  <div className="flex items-center gap-2 text-sm font-bold text-secondary-text">
                    <i className="fas fa-calendar-alt"></i>
                    <span>2023</span>
                  </div>
                </div>
                <p className="text-secondary-text text-sm">
                  Cloud computing fundamentals and Azure services training
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
