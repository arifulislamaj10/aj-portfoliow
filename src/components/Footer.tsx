"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-6">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#" className="text-xl font-bold tracking-tight">
                <span className="text-accent-light">AJ</span> SoftTech
              </a>
              <p className="text-muted text-sm mt-3 leading-relaxed">
                Building digital solutions that help small businesses grow and
                succeed.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    Desktop Apps
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-foreground transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-card-bg border border-card-border rounded-lg flex items-center justify-center hover:border-accent/50 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-muted" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-card-bg border border-card-border rounded-lg flex items-center justify-center hover:border-accent/50 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-muted" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-card-bg border border-card-border rounded-lg flex items-center justify-center hover:border-accent/50 hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} className="text-muted" />
                </a>
              </div>
              <p className="text-muted text-sm mt-4">hello@ajsofttech.com</p>
            </div>
          </div>

          <div className="border-t border-card-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} AJ SoftTech Solutions. All rights reserved.
            </p>
            <p className="text-sm text-muted">
              Crafted with passion for small businesses
            </p>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}
