import {
  Zap,
  DollarSign,
  Clock,
  HeadphonesIcon,
  TrendingUp,
  Lock,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "High-quality development at prices small businesses can afford. No hidden fees — transparent pricing from day one.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "We understand time is money. Get your project delivered on schedule without compromising on quality.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Lightning-fast apps optimized for speed. Your customers won't wait — and neither will your software.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Get a dedicated project manager and direct communication with your development team throughout the process.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Built to grow with your business. Start small and scale up seamlessly as your customer base expands.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description:
      "Industry-standard security practices. Your data and your customers' data are always protected.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Benefits of Working With Us
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            We don&apos;t just build software — we build partnerships. Here&apos;s what
            makes us different.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <benefit.icon className="text-accent-light" size={22} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
