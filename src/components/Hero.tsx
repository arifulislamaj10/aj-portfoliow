"use client";

import { ArrowRight, Code2, Smartphone, Monitor } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-32 right-[15%] w-4 h-4 border-2 border-accent/30 rounded-sm rotate-45 animate-float hidden lg:block" />
      <div className="absolute top-48 left-[12%] w-3 h-3 bg-purple-400/40 rounded-full animate-float-slow hidden lg:block" />
      <div className="absolute bottom-32 left-[20%] w-5 h-5 border-2 border-accent/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-48 right-[18%] w-3 h-3 bg-accent/30 rounded-sm rotate-12 animate-float-slow hidden lg:block" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-card-bg border border-card-border rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted">
              Available for new projects
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            We Build Digital
            <br />
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              Solutions That Work
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-muted text-sm mb-4">
            Founded by <span className="text-foreground font-medium">Ariful Islam</span> &mdash; Backend Developer & Tech Lead
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted mb-10 leading-relaxed">
            From stunning websites to powerful mobile and desktop apps — we help
            small businesses and startups launch, grow, and succeed in the digital
            world.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-card-border hover:border-accent/50 text-foreground font-semibold px-8 py-4 rounded-lg transition-all text-lg hover:scale-105"
            >
              View Services
            </a>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.5}>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Code2 className="text-accent-light" size={28} />
              </div>
              <span className="text-2xl font-bold">50+</span>
              <span className="text-sm text-muted">Web Apps</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Smartphone className="text-accent-light" size={28} />
              </div>
              <span className="text-2xl font-bold">30+</span>
              <span className="text-sm text-muted">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Monitor className="text-accent-light" size={28} />
              </div>
              <span className="text-2xl font-bold">20+</span>
              <span className="text-sm text-muted">Desktop Apps</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
