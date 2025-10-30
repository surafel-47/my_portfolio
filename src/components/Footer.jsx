import { ContactInfos } from "../data/contact-info"; // adjust path as needed

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "Certificates", href: "#certificates" },
        { label: "Contact", href: "#contact" },
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

  return (
    <footer className="border-t border-border backdrop-blur-sm">
      <div className="max-w-[80vw] mx-auto px-4 py-16">
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Surafel Zewdu
            </h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
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
                      className={`text-muted-foreground  flex items-center gap-2 ${
                        link.color || ""
                      }`}
                    >
                      {link.icon && <i className={link.icon}></i>}
                      <span class="animated-underline">{link.label} </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Surafel Zewdu.
          </p>
          <span>
            Design inspiration from{" "}
            <a
              href="https://www.fenriz-gym.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold underline hover:text-primary transition-colors duration-300"
            >
              Fenriz Gym
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
