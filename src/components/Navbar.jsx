import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dark mode toggle
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (!isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(!isDark);
  };

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll < lastScroll || currentScroll < 50);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const linkClass = ({ isActive }) =>
    `hover:text-primary transition-colors ${
      isActive ? "font-bold text-primary" : ""
    }`;

  return (
    <header
      className={`fixed w-full top-0 z-50 border-b border-white/20 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-background shadow-light`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">
            <NavLink to="/" className="flex items-center gap-2 text-primary">
              <span>&lt;/&gt;</span> Surafel Zewdu
            </NavLink>
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 ml-16">
            <li>
              <NavLink to="/#experience" className={linkClass}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/#skills" className={linkClass}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/#contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/#projects" className={linkClass}>
                Projects
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-black/20 transition-all"
          >
            {isDark ? "🌞" : "🌙"}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 py-2 border-t border-white/20 flex flex-col gap-2 bg-background">
          <NavLink
            to="/#experience"
            className={linkClass}
            onClick={() => setMobileOpen(false)}
          >
            Experience
          </NavLink>
          <NavLink
            to="/#skills"
            className={linkClass}
            onClick={() => setMobileOpen(false)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/#contact"
            className={linkClass}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/#projects"
            className={linkClass}
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </NavLink>
        </div>
      )}
    </header>
  );
}
