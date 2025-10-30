// import ProfileImage from "/profile.jpg";
import ProfileImage from "../assets/react.svg";
import ContactInfo from "../data/contact-info.js";

export default function HeroSection() {
  return (
    <section id="hero" class="bg-background pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div>
            <h2 class="text-5xl md:text-6xl font-bold font-display leading-tight mb-4">
              Full-Stack Developer
            </h2>
            <p class="text-xl text-secondary-text font-display">
              Flutter · Vue.js · Django · Express
            </p>
          </div>
          <p class="text-lg text-secondary-text leading-relaxed">
            I'm a full-stack developer specializing in Flutter, Vue.js, Django,
            and Express. I build mobile-first and web applications that are
            fast, scalable, and focused on solving real-world problems with
            clean code and smooth UX.
          </p>
          <div class="flex gap-4 pt-4">
            <button class="px-8 py-3 bg-accent animated-fill transition-colors text-white hover:text-background cursor-pointer  font-semibold">
              Download CV
            </button>
            <button class="px-8 py-3 border-2 border-accent text-accent  font-semibold hover:bg-accent cursor-pointer  hover:text-white transition-all">
              Get in Touch
            </button>
          </div>
          <div className="flex gap-6 pt-8">
            {ContactInfo.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-secondary-text hover:text-accent transition-colors ${info.color}`}
              >
                <i className={info.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div class="flex justify-center">
          <img
            src={ProfileImage}
            alt="Profile"
            class="w-80  p-2 border border-[#0000000c] shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
