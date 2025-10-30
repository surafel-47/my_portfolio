import { ContactInfos } from "../data/contact-info";
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 max-w-[80vw] mx-auto px-4">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Feel free to reach out through any of these channels. I'd love to hear
          from you!
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ContactInfos.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target={
              contact.link.startsWith("mailto:") ||
              contact.link.startsWith("tel:")
                ? undefined
                : "_blank"
            }
            rel={
              contact.link.startsWith("mailto:") ||
              contact.link.startsWith("tel:")
                ? undefined
                : "noopener noreferrer"
            }
            className="group border border-border p-4 hover:border-primary animated-fill text-foreground hover:text-background "
          >
            {/* Icon */}
            <div className="mb-4">
              <i
                className={`${contact.icon} text-3xl text-primary ${contact.color} transition-colors duration-300`}
              ></i>
            </div>

            {/* Label */}
            <p className="text-sm  mb-2">{contact.label}</p>

            {/* Value */}
            <p className="text-lg font-semibold">{contact.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
