import { Users, Target, Lightbulb, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "A skilled team of developers, designers, and project managers ready to bring your vision to life.",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "We listen first, build second. Every project is tailored to your specific business needs and goals.",
  },
  {
    icon: Lightbulb,
    title: "Modern Tech",
    description:
      "We use the latest technologies and frameworks to ensure your product is fast, secure, and scalable.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "100+ successful projects delivered to businesses across multiple industries worldwide.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Your Trusted Technology Partner
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            Led by <span className="text-foreground font-medium">Ariful Islam</span>, AJ SoftTech Solutions is a passionate team of software engineers dedicated to helping
            small businesses and startups build their digital presence. Whether
            you need a website, mobile app, or desktop application — we&apos;ve got
            you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-accent-light" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
