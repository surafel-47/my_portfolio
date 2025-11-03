// import ProfileImage from "/profile.jpg";
import { useEffect, useState } from "react";
import ProfileImage from "../assets/react.svg";
import { ContactInfos } from "../data/contact-info.js";

export default function HeroSection() {
  const descText =
    "I'm a full-stack developer. I work with Flutter, Vue.js/React.js and Django/Express to build mobile and web apps with clean APIs and smooth frontends";
  const [typewriterText, setTypewriterText] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypewriterText(descText.slice(0, i));
      i++;
      if (i > descText.length) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" class="bg-background pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div>
            <h2 class="text-5xl md:text-6xl font-bold font-display leading-tight mb-4">
              Full-Stack Developer
            </h2>
            <p class="text-xl text-secondary-text font-display">
              Flutter · Vue.js · Django · Express · React
            </p>
          </div>
          <p class="text-lg text-secondary-text h-30 lg:h-20">
            {typewriterText}.
          </p>
          <div class="flex gap-4 pt-4">
            <a
              href="/surafel_zewdu_cv.pdf"
              download
              class="px-8 py-3 bg-foreground text-background animated-fill-opp box border hover:border-foreground transition-colors  hover:text-foreground cursor-pointer  font-semibold"
            >
              Download CV
            </a>
            <a
              href="#contact"
              class="px-8 py-3 border-1 border-foreground text-foreground box font-semibold animated-fill cursor-pointer  hover:text-background transition-all"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex gap-6 pt-8">
            {ContactInfos.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                className={`text-2xl text-foreground animated-fill hover:text-background hover:border-background border border-[#795c5caf] p-1`}
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
