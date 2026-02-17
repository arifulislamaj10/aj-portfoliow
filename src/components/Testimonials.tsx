import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, GreenLeaf Co.",
    content:
      "They transformed our outdated website into a modern, conversion-focused platform. Our online sales increased by 200% in just 3 months. Incredible team!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "CEO, QuickServe",
    content:
      "The mobile app they built for our food delivery business is seamless. Our customers love it, and it's been a game-changer for our operations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Owner, StyleHouse Boutique",
    content:
      "As a small business owner, I was nervous about the cost. But they delivered a beautiful e-commerce site within my budget and on time. Best investment I've made!",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Director, DataFlow Inc.",
    content:
      "The desktop application they developed streamlined our entire workflow. What used to take hours now takes minutes. Their technical expertise is outstanding.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Founder, FitTrack",
    content:
      "They built both our website and mobile app. The coordination between platforms was seamless, and the support after launch has been exceptional.",
    rating: 5,
  },
  {
    name: "David Wright",
    role: "Manager, BuildRight Construction",
    content:
      "We needed a project management tool tailored to construction. They understood our needs perfectly and delivered exactly what we asked for. True professionals.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve
            helped grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-5">
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
