"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to the container and all animated children
            entry.target.classList.add("animate-visible");
            const children = entry.target.querySelectorAll(
              ".animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale"
            );
            children.forEach((child) => child.classList.add("animate-visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
