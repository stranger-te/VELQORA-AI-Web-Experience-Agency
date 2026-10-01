"use client";

import React from "react";
import { ArrowRight, Sparkles, Bot, Zap, Play, ShieldCheck, CheckCircle2, Star, Cpu, Layers, Terminal } from "lucide-react";
import { SplineScene } from "./SplineScene";

interface HeroProps {
  onOpenConsultation: () => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[92vh] flex items-center">
      
      {/* --- Ambient Glowing Stage Lights --- */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Subtle Developer Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '3.5rem 3.5rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- Left Column: Value Prop, Copy & CTAs --- */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            
            {/* Top Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] backdrop-blur-xl mb-6 hover:border-indigo-500/50 transition-all shadow-[0_0_25px_rgba(99,102,241,0.2)] group cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-200 tracking-wide font-mono">
                Nexus 3.4 • Enterprise Autonomous Mesh
              </span>
              <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                Read Release →
              </span>
            </div>

            {/* Apple-Grade Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.06] mb-6 font-space">
              Autonomous AI Systems{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
                Engineered for Scale.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              We design, build, and deploy production-grade AI infrastructure: autonomous multi-agent swarms, bespoke 3D web platforms, and custom LLM workflows that scale your business 24/7 with zero human latency.
            </p>

            {/* Core Capability Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Custom 3D Web Apps",
                "Autonomous Agent Swarms",
                "Enterprise RAG Chatbots",
                "Voice Automation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Dual CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:opacity-95 shadow-[0_0_35px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-200 animate-spin" />
                <span>Schedule AI Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#agents-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-slate-300 bg-[#0E0E1C]/80 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all active:scale-95 cursor-pointer shadow-lg"
              >
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Live Swarm Simulator</span>
              </a>
            </div>

            {/* Social Proof & Metrics Bar */}
            <div className="pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-space">85%+</div>
                <div className="text-xs text-slate-400 mt-0.5">Tasks Automated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-space">4.8x</div>
                <div className="text-xs text-slate-400 mt-0.5">Revenue Velocity</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-space">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Client IP Ownership</div>
              </div>
            </div>

          </div>

          {/* --- Right Column: Dedicated Real-Developer 3D Stage --- */}
          <div className="lg:col-span-5 relative w-full h-[480px] sm:h-[560px] lg:h-[640px]">
            
            {/* Apple-style Framed 3D Stage with Specular Glass */}
            <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl border border-white/15 group overflow-hidden">
              
              {/* Inner 3D Container */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#090912]/95">
                <SplineScene
                  scene="https://prod.spline.design/v-OLT2eBEaVFXs7O/scene.splinecode"
                  className="w-full h-full"
                />
              </div>

              {/* Floating Top-Left Status HUD */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080812]/85 backdrop-blur-md border border-white/15 text-xs text-slate-200 pointer-events-none shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-slate-200 font-semibold">
                  SPLINE 3D ENGINE • LIVE
                </span>
              </div>

              {/* Floating Top-Right Latency Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#080812]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 pointer-events-none shadow-xl hidden sm:flex">
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>12ms Latency</span>
              </div>

              {/* Floating Bottom-Left Agent Status Overlay */}
              <div className="absolute bottom-4 left-4 z-20 p-3 rounded-2xl bg-[#0B0B18]/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3 hidden sm:flex pointer-events-none">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-md">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Autonomous Agent Swarm</div>
                  <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Orchestrating Sub-Agents
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;
