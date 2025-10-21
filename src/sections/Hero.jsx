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
            Passionate about building beautiful, performant web and mobile
            applications. I specialize in creating seamless user experiences
            with modern technologies.
          </p>
          <div class="flex gap-4 pt-4">
            <button class="px-8 py-3 bg-accent animated-fill transition-colors text-white hover:text-background cursor-pointer  font-semibold">
              Download CV
            </button>
            <button class="px-8 py-3 border-2 border-accent text-accent  font-semibold hover:bg-accent cursor-pointer  hover:text-white transition-all">
              Get in Touch
            </button>
          </div>
          <div class="flex gap-6 pt-8">
            <a
              href="#"
              class="text-2xl text-secondary-text hover:text-accent transition-colors"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="#"
              class="text-2xl text-secondary-text hover:text-accent transition-colors"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              class="text-2xl text-secondary-text hover:text-accent transition-colors"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-2xl text-secondary-text hover:text-accent transition-colors"
            >
              <i class="fab fa-telegram"></i>
            </a>
          </div>
        </div>
        <div class="flex justify-center">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Profile"
            class="w-80 h-80 rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
