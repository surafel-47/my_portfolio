import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ContactInfos } from "../data/contact-info";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", link: "/" },
        { label: "Projects", link: "/projects" },
        { label: "Certificates", link: "#certificates" },
        { label: "Contact", link: "#contact" },
      ],
    },
    {
      title: "Social",
      links: ContactInfos.map((info) => ({
        label: info.label,
        href: info.link,
        icon: info.icon,
      })),
    },
  ];

  const scrollToSection = (hash) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-[#121212] text-white backdrop-blur-sm ">
      <div className="max-w-[80vw] mx-auto px-4 py-16">
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold  mb-2">Surafel Zewdu</h3>
            <p className="">Full Stack Developer</p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold  mb-4 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-2"
                      >
                        {link.icon && <i className={link.icon}></i>}
                        <span className="animated-underline-white">
                          {link.label}
                        </span>
                      </a>
                    ) : link.link.startsWith("#") ? (
                      <NavLink
                        to="/"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.link);
                        }}
                        className=" flex items-center gap-2"
                      >
                        <span className="animated-underline-white">
                          {link.label}
                        </span>
                      </NavLink>
                    ) : (
                      <NavLink
                        to={link.link}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <span className="animated-underline-white">
                          {link.label}
                        </span>
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {currentYear} Surafel Zewdu.
            <br />
            <p className="text-xs">I made this with React and Tailwind CSS.</p>
          </p>
          <span className="text-[15px]">
            Design inspiration from{" "}
            <a
              href="https://www.fenriz-gym.com/en"
              target="_blank"
              className="text-accent font-bold underline hover:text-primary transition-colors duration-300"
            >
              Fenriz Gym
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
