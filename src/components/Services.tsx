"use client";

import {
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Database,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks. Responsive, fast, and SEO-friendly — from landing pages to complex platforms.",
    tech: ["React", "Next.js", "Node.js", "WordPress"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Beautiful interfaces with smooth performance that your customers will love.",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Monitor,
    title: "Desktop App Development",
    description:
      "Powerful desktop applications for Windows, macOS, and Linux. From business tools to specialized software for your industry.",
    tech: ["Electron", "C#", ".NET", "Python"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that converts visitors into customers. Clean, intuitive interfaces crafted for the best user experience.",
    tech: ["Figma", "Adobe XD", "Prototyping"],
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description:
      "Robust server-side solutions, REST APIs, and database design. Scalable architecture that grows with your business.",
    tech: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, bug fixes, security updates, and performance optimization to keep your product running smoothly.",
    tech: ["24/7 Support", "Monitoring", "Updates"],
    gradient: "from-accent/20 to-purple-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Everything You Need to Go Digital
            </h2>
            <p className="max-w-2xl mx-auto text-muted text-lg">
              We offer end-to-end development services to bring your business
              online and help you reach more customers.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.1 * (index + 1)}>
              <div className="group relative bg-background border border-card-border rounded-xl p-8 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 h-full overflow-hidden">
                {/* Gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="text-accent-light" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-accent/10 text-accent-light px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
