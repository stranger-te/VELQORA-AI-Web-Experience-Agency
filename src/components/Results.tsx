"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { CircularTestimonials, Testimonial } from "@/components/ui/circular-testimonials";

const enterpriseTestimonials: Testimonial[] = [
  {
    name: "Elena Rostova",
    designation: "VP of Digital Innovation • Luminary Health",
    quote:
      "NexusAI engineered a HIPAA-compliant autonomous RAG assistant across 14,000 clinical docs. Our query resolution dropped from 3 hours to 11 seconds with 99.4% factual accuracy.",
    src:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1368&auto=format&fit=crop",
  },
  {
    name: "Marcus Vance",
    designation: "Chief Technology Officer • ApexScale FinTech",
    quote:
      "Their autonomous quantitative research swarm scans 800+ SEC filings daily. What used to take 6 analysts 40 hours now happens in under 4 minutes with zero human latency.",
    src:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1368&auto=format&fit=crop",
  },
  {
    name: "Sarah Chen",
    designation: "Head of Operations • Novus Global Logistics",
    quote:
      "Their conversational voice AI handles 14,000 inbound freight carrier calls monthly. It auto-updates our ERP and resolves dispatch bottlenecks with zero human hold times.",
    src:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1368&auto=format&fit=crop",
  },
  {
    name: "David Sterling",
    designation: "Managing Director • Hyperion Cloud Systems",
    quote:
      "NexusAI re-architected our enterprise web platform with interactive 3D Spline experiences and generative personalization, driving a 340% increase in qualified pipeline.",
    src:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop",
  },
];

export function Results() {
  return (
    <section id="results" className="py-24 relative overflow-hidden bg-[#06060C] border-y border-white/5">
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Executive Feedback & Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by Enterprise Leaders <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Transforming with Autonomous AI.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Explore how pioneering enterprises deploy NexusAI swarms, 3D web systems, and intelligent workflows.
          </p>
        </div>

        {/* Circular Testimonials Component with Apple Dark Glass Theme */}
        <div className="rounded-3xl p-4 sm:p-10 bg-[#0B0B16]/80 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
          <CircularTestimonials
            testimonials={enterpriseTestimonials}
            autoplay={true}
            colors={{
              name: "#FFFFFF",
              designation: "#818CF8",
              testimony: "#CBD5E1",
              arrowBackground: "#131326",
              arrowForeground: "#F8FAFC",
              arrowHoverBackground: "#6366F1",
            }}
            fontSizes={{
              name: "1.75rem",
              designation: "0.95rem",
              quote: "1.15rem",
            }}
          />
        </div>

      </div>
    </section>
  );
}

export default Results;
