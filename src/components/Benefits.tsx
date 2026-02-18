"use client";

import {
  Zap,
  DollarSign,
  Clock,
  HeadphonesIcon,
  TrendingUp,
  Lock,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
    <section id="benefits" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <AnimatedSection>
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
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={0.1 * (index + 1)}>
              <div className="group flex gap-4 p-4 rounded-xl hover:bg-card-bg/80 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="text-accent-light" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
