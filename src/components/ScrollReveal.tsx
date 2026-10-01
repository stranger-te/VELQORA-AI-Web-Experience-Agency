"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  yOffset = 30,
  duration = 0.6,
  stagger = 0.08,
  delay = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const elements = containerRef.current?.children;
      if (!elements || elements.length === 0) return;

      gsap.from(elements, {
        opacity: 0,
        y: yOffset,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

export default ScrollReveal;
