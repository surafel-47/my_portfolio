import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync theme with html.dark class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const links = [
    {
      name: "ABOUT ME",
      link: "about",
    },
    {
      name: "EXPERIENCE",
      link: "experience",
    },
    {
      name: "EDUCATION",
      link: "education",
    },
    {
      name: "PROJECTS",
      link: "projects",
    },
    {
      name: "CONTACT",
      link: "contact",
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/20 backdrop-blur-[2.5px] z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold font-display">
          <NavLink href="/">
            <i className="fas fa-code mr-2"></i>Surafel Zewdu
          </NavLink>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.link}
              className={({ isActive }) =>
                `relative text-foreground text-sm font-[Roboto, sans-serif] transition-colors hover:font-bold animated-underline font-bold ${
                  isActive ? " border-b-4 border-foreground" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right side: Theme toggle and mobile menu button */}
        <div className="flex items-center gap-4">
          <button
            id="themeToggle"
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-lg`}></i>
          </button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-lg`}
            ></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.link}
                className={({ isActive }) =>
                  `text-foreground text-sm font-[Roboto, sans-serif] transition-colors hover:font-bold py-2 border-b border-border/50 last:border-b-0 ${
                    isActive ? "font-bold" : ""
                  }`
                }
                onClick={handleLinkClick}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
