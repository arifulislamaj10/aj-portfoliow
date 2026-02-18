"use client";

import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses getting started online.",
    features: [
      "Responsive landing page",
      "Up to 5 pages",
      "Contact form integration",
      "Mobile-friendly design",
      "Basic SEO setup",
      "1 month free support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$2,999",
    description: "For growing businesses that need custom solutions.",
    features: [
      "Custom web or mobile app",
      "UI/UX design included",
      "Admin dashboard",
      "API integration",
      "Payment gateway setup",
      "3 months free support",
      "Performance optimization",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale digital solutions for ambitious businesses.",
    features: [
      "Web + Mobile + Desktop apps",
      "Custom architecture design",
      "Team of dedicated developers",
      "CI/CD pipeline setup",
      "Cloud deployment",
      "12 months priority support",
      "Scalable infrastructure",
      "Training & documentation",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-2xl mx-auto text-muted text-lg">
              Choose the plan that fits your needs. All plans include free
              consultation and project planning.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={0.15 * (index + 1)} animation="scale">
              <div
                className={`group relative rounded-xl p-8 border transition-all duration-300 hover:shadow-xl h-full ${
                  plan.highlighted
                    ? "bg-accent/5 border-accent scale-[1.02] shadow-lg shadow-accent/10"
                    : "bg-background border-card-border hover:border-accent/30 hover:-translate-y-1"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted text-sm"> / project</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <Check
                        size={16}
                        className="text-accent-light flex-shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    plan.highlighted
                      ? "bg-accent hover:bg-accent-light text-white hover:shadow-lg hover:shadow-accent/25"
                      : "border border-card-border hover:border-accent/50 text-foreground"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
