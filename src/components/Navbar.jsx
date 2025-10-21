import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      name: "About Me",
      link: "about",
    },
    {
      name: "Experience",
      link: "experience",
    },
    {
      name: "Education",
      link: "education",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const [isDark, setIsDark] = useState(false);

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

  return (
    <nav class="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold font-display">Dev</h1>

        <button
          id="themeToggle"
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={toggleTheme}
        >
          <i className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-lg`}></i>
        </button>
      </div>
    </nav>
  );
}
