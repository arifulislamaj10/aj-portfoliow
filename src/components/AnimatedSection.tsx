"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

const animationClasses = {
  "fade-up": "animate-on-scroll",
  "slide-left": "animate-slide-left",
  "slide-right": "animate-slide-right",
  scale: "animate-scale",
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
