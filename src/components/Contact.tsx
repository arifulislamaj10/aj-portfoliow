"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="max-w-2xl mx-auto text-muted text-lg">
              Ready to start your project? Reach out and let&apos;s discuss how we can
              help your business grow.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection animation="slide-left">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-5 mb-8">
                <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-card-bg/80 transition-all duration-300">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="text-accent-light" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="font-medium">hello@ajsofttech.com</p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-card-bg/80 transition-all duration-300">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="text-accent-light" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-card-bg/80 transition-all duration-300">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="text-accent-light" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-medium">Available Worldwide (Remote)</p>
                  </div>
                </div>
              </div>

              <div className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                <h4 className="font-semibold mb-2">Free Consultation</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Not sure where to start? Book a free 30-minute consultation
                  call. We&apos;ll discuss your needs, suggest the best approach, and
                  give you a clear roadmap — no commitment required.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-right">
            <div className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/30 transition-all duration-300">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <Send className="text-green-400" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all duration-300 focus:shadow-sm focus:shadow-accent/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all duration-300 focus:shadow-sm focus:shadow-accent/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      required
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all duration-300 focus:shadow-sm focus:shadow-accent/20"
                    >
                      <option value="">Select a service</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Desktop App Development</option>
                      <option>UI/UX Design</option>
                      <option>Full Package (Web + Mobile + Desktop)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all duration-300 resize-none focus:shadow-sm focus:shadow-accent/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
