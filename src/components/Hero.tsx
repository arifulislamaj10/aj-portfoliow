import { ArrowRight, Code2, Smartphone, Monitor } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card-bg border border-card-border rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-muted">
            Available for new projects
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          We Build Digital
          <br />
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
            Solutions That Work
          </span>
        </h1>

        <p className="text-muted text-sm mb-4">
          Founded by <span className="text-foreground font-medium">Ariful Islam</span> &mdash; Backend Developer & Tech Lead
        </p>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted mb-10 leading-relaxed">
          From stunning websites to powerful mobile and desktop apps — we help
          small businesses and startups launch, grow, and succeed in the digital
          world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Start Your Project <ArrowRight size={20} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-card-border hover:border-accent/50 text-foreground font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            View Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="flex flex-col items-center gap-2">
            <Code2 className="text-accent-light" size={28} />
            <span className="text-2xl font-bold">50+</span>
            <span className="text-sm text-muted">Web Apps</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Smartphone className="text-accent-light" size={28} />
            <span className="text-2xl font-bold">30+</span>
            <span className="text-sm text-muted">Mobile Apps</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Monitor className="text-accent-light" size={28} />
            <span className="text-2xl font-bold">20+</span>
            <span className="text-sm text-muted">Desktop Apps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
