"use client";

import React from "react";
import { Sparkles, ArrowRight, Bot, ShieldCheck, Zap } from "lucide-react";

interface CTAProps {
  onOpenConsultation: () => void;
}

export function CTA({ onOpenConsultation }: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-10 sm:p-16 bg-gradient-to-b from-[#14142B] via-[#0C0C18] to-[#07070E] border border-indigo-500/30 shadow-[0_0_80px_rgba(99,102,241,0.2)] overflow-hidden text-center backdrop-blur-2xl">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono text-slate-300">
              Q3 Client Intake Open (3 Strategy Slots Remaining)
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Ready to Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-400">
              Autonomous AI Advantage?
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing hours to manual workflows. Partner with NexusAI to engineer custom autonomous agent swarms and next-gen 3D web systems that compound your business growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:opacity-95 shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Schedule 30-Min Architecture Briefing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer"
            >
              <span>Explore ROI Calculator</span>
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Full IP Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              Production in 4 Weeks
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
export default CTA;
