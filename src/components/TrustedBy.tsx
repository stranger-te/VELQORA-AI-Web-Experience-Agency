"use client";

import React from "react";

export function TrustedBy() {
  const logos = [
    { name: "ApexScale AI", category: "Fintech & Quant" },
    { name: "Vanguard Global", category: "Enterprise Logistics" },
    { name: "Hyperion Cloud", category: "SaaS Infrastructure" },
    { name: "Luminary Health", category: "MedTech & Bio" },
    { name: "Synthetix Labs", category: "Autonomous Robotics" },
    { name: "Novus Commerce", category: "Omnichannel Retail" },
    { name: "Aether Dynamics", category: "Aerospace Systems" },
    { name: "QuantumEdge", category: "Cybersecurity" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#07070C]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 font-mono">
          Trusted by Next-Gen Unicorns & Enterprise Leaders
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07070C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07070C] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-all group"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:scale-125 transition-transform" />
              <span className="text-sm font-semibold text-slate-300 group-hover:text-white font-space tracking-tight">
                {logo.name}
              </span>
              <span className="text-[10px] text-slate-500 font-mono border-l border-white/10 pl-2">
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TrustedBy;
