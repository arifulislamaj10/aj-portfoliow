import {
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Database,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks. Responsive, fast, and SEO-friendly — from landing pages to complex platforms.",
    tech: ["React", "Next.js", "Node.js", "WordPress"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Beautiful interfaces with smooth performance that your customers will love.",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Monitor,
    title: "Desktop App Development",
    description:
      "Powerful desktop applications for Windows, macOS, and Linux. From business tools to specialized software for your industry.",
    tech: ["Electron", "C#", ".NET", "Python"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that converts visitors into customers. Clean, intuitive interfaces crafted for the best user experience.",
    tech: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description:
      "Robust server-side solutions, REST APIs, and database design. Scalable architecture that grows with your business.",
    tech: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, bug fixes, security updates, and performance optimization to keep your product running smoothly.",
    tech: ["24/7 Support", "Monitoring", "Updates"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#0a0a0a] border border-card-border rounded-xl p-8 hover:border-accent/40 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
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
          ))}
        </div>
      </div>
    </section>
  );
}
