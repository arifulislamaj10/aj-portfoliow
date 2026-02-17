"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A typical website takes 2-4 weeks depending on complexity. Simple landing pages can be ready in under a week, while complex web applications may take 6-8 weeks. We'll give you a clear timeline during our initial consultation.",
  },
  {
    q: "How much does it cost to build a mobile app?",
    a: "Mobile app costs vary based on features and complexity. Simple apps start around $2,999, while feature-rich applications can range from $5,000-$15,000+. We offer flexible payment plans and will work within your budget.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes! All our plans include free post-launch support (1-12 months depending on your plan). After that, we offer affordable monthly maintenance packages to keep your application updated and running smoothly.",
  },
  {
    q: "Can you work with my existing website or app?",
    a: "Absolutely. We can redesign, upgrade, or add new features to your existing digital products. We'll assess your current setup and recommend the best approach — whether it's a refresh or a full rebuild.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, industry-standard technologies including React, Next.js, React Native, Flutter, Node.js, Python, and more. We choose the best tech stack based on your project requirements and business goals.",
  },
  {
    q: "How do we get started?",
    a: "Simple! Click the 'Get Started' button or fill out the contact form below. We'll schedule a free consultation call to discuss your project, understand your needs, and provide a detailed proposal with timeline and pricing.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer flexible payment plans for all our services. Typically, we work with a 50% upfront and 50% on delivery model, but we can customize payment terms to suit your situation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-card-bg/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-card-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-card-bg/50 transition-colors"
              >
                <span className="font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-muted flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
