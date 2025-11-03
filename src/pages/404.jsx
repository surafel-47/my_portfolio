import { NavLink } from "react-router-dom";

export default function NotFound() {
  const errorMessages = [
    "404: This one’s definitely your fault, not mine.",
    "Relax, the page just went on a permanent vacation.",
    "Page is in a quantum state — simultaneously here and not here.",
  ];

  const randomError =
    errorMessages[Math.floor(Math.random() * errorMessages.length)];

  return (
    <main className="flex items-center justify-center bg-background px-4 pt-32 pb-15 ">
      <div className="w-full max-w-2xl">
        {/* Error Container */}

        <div
          className="border border-foreground/20 p-8 md:p-12 mb-8 "
          style={{
            transform: "rotate(-0.3deg) translateY(-10px)",
            boxShadow: "8px 8px 1px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Error Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-1">
              <h1
                className="text-5xl md:text-6xl glitch-text mb-2"
                data-text="404"
              >
                404
              </h1>

              <p className="text-sm font-mono text-foreground/60 truncate">
                {randomError}
              </p>
            </div>
          </div>

          {/* Funny / Suggestions Section */}
          <div className="mb-8 p-4 border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-2">
              <div>
                <p className="text-sm font-semibold text-amber-900/80 mb-1">
                  Possible Solutions:
                </p>
                <ul className="text-md text-amber-900/60 space-y-1">
                  <li>• Check your URL (typos are common, we don't judge)</li>
                  <li>• Try turning it off and on again</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 box animated-fill-opp border border-foreground bg-foreground text-background hover:text-foreground"
            >
              <i className="fas fa-arrow-left"></i>
              <span>Go Home</span>
            </NavLink>
            <NavLink
              to="/projects"
              className="flex items-center justify-center gap-2 px-6 py-3 box animated-fill border border-foreground bg-background text-foreground hover:text-background"
            >
              <i className="fas fa-folder-open"></i>
              <span>View Projects</span>
            </NavLink>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <p className="text-md text-foreground/90">
            While you're here, consider this a rare achievement unlocked
          </p>
        </div>
      </div>
    </main>
  );
}
