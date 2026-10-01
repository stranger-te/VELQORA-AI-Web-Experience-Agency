"use client";

import React, { useState } from "react";
import {
  Globe,
  Bot,
  MessageSquare,
  Workflow,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Terminal,
  Cpu,
  Database,
  Code2,
  Layers,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ServicesBentoProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export function ServicesBento({ onOpenConsultation }: ServicesBentoProps) {
  const [activeTab, setActiveTab] = useState<"code" | "preview">("preview");

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#05050A]">
      {/* Background glowing gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300 uppercase tracking-widest font-mono mb-4 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Flagship Engineering Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Bespoke AI Architecture <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
              Structured as an Asymmetric Bento.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            We don't build generic API wrappers. We architect production-grade, secure, and fully owned AI systems that run autonomously in your enterprise.
          </p>
        </ScrollReveal>

        {/* --- Asymmetric Bento Grid (2 Large, 2 Compact) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Item 1: Large Featured Card (7 cols) - Autonomous AI Websites */}
          <ScrollReveal className="lg:col-span-7 flex">
            <div className="w-full relative rounded-3xl p-8 sm:p-10 bg-[#0C0C18]/80 hover:bg-[#111122]/90 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/15 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25">
                    <div className="w-full h-full bg-[#090912] rounded-[15px] flex items-center justify-center">
                      <Globe className="w-6 h-6 text-cyan-300" />
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    Flagship 3D Web
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-space group-hover:text-indigo-200 transition-colors">
                  AI-Powered Websites & Web Apps
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Next-generation Apple-grade web applications featuring interactive 3D Spline canvases, dynamic generative UI personalization, and sub-second Lighthouse 100 architecture.
                </p>

                {/* Interactive Mini Mock Preview */}
                <div className="rounded-2xl bg-[#06060E] border border-white/10 p-4 mb-6 font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-indigo-300">
                      <Code2 className="w-3.5 h-3.5" />
                      Dynamic Generative Layout Engine
                    </span>
                    <span className="text-emerald-400">● Live Personalization: ON</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="text-slate-400"><span className="text-purple-400">visitorIntent</span> = await NexusAI.predict(<span className="text-emerald-300">'enterprise_buyer'</span>);</div>
                    <div className="text-slate-400"><span className="text-cyan-400">splineCanvas</span>.morphTo(<span className="text-emerald-300">'enterprise_core_3d'</span>);</div>
                    <div className="text-indigo-300">✓ Conversion uplift: +340% qualified pipeline</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {["3D Spline Interactive Canvas", "Real-Time Content Generation", "Next.js 15 App Router", "Full Headless CMS Sync"].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Proven Metric</div>
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-space">
                    3.4x Conversion Increase
                  </div>
                </div>
                <button
                  onClick={() => onOpenConsultation("AI-Powered Websites & Web Apps")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all group-hover:border-indigo-500/50 cursor-pointer"
                >
                  <span>Explore System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                </button>
              </div>

            </div>
          </ScrollReveal>

          {/* Bento Item 2: Large Featured Card (5 cols) - Custom Multi-Agent Swarms */}
          <ScrollReveal className="lg:col-span-5 flex" delay={0.1}>
            <div className="w-full relative rounded-3xl p-8 sm:p-10 bg-[#0C0C18]/80 hover:bg-[#111122]/90 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/15 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 p-[1px] shadow-lg shadow-purple-500/25">
                    <div className="w-full h-full bg-[#090912] rounded-[15px] flex items-center justify-center">
                      <Bot className="w-6 h-6 text-purple-300" />
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    Autonomous Swarms
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-space group-hover:text-indigo-200 transition-colors">
                  Multi-Agent Swarm Orchestration
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Specialized subagents (Planner, Lead Scout, Financial Analyst, Critic) collaborating 24/7 with zero human latency and self-healing execution.
                </p>

                {/* Subagent Mini Mesh visualization */}
                <div className="space-y-2 mb-6">
                  {[
                    { name: "Scout Agent", role: "API & Data Scraping", latency: "90ms" },
                    { name: "Reasoner Agent", role: "10-K & Financial Analysis", latency: "240ms" },
                    { name: "Executive Dispatcher", role: "CRM & Calendar Sync", latency: "65ms" },
                  ].map((sub, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-semibold text-white">{sub.name}</span>
                        <span className="text-slate-400 text-[11px] hidden sm:inline">• {sub.role}</span>
                      </div>
                      <span className="font-mono text-[10px] text-cyan-300">{sub.latency}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Proven Metric</div>
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 font-space">
                    85% Repetitive Tasks Eliminated
                  </div>
                </div>
                <button
                  onClick={() => onOpenConsultation("Custom AI Agent Swarms & Orchestration")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all group-hover:border-purple-500/50 cursor-pointer"
                >
                  <span>View Swarms</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
                </button>
              </div>

            </div>
          </ScrollReveal>

          {/* Bento Item 3: Compact Card (6 cols) - Enterprise AI Chatbots & RAG */}
          <ScrollReveal className="lg:col-span-6 flex" delay={0.2}>
            <div className="w-full relative rounded-3xl p-8 bg-[#0C0C18]/80 hover:bg-[#111122]/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 p-[1px] shadow-lg">
                    <div className="w-full h-full bg-[#090912] rounded-[11px] flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-cyan-300" />
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    Enterprise RAG
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-space group-hover:text-cyan-200 transition-colors">
                  Enterprise AI Chatbots & Knowledge Bases
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Zero-hallucination hybrid vector search (BM25 + Dense embeddings) connected directly to Notion, Jira, Zendesk, PDF manuals, and ERP databases.
                </p>

                <div className="space-y-2 mb-6">
                  {["Automated citation tracking & fact guardrails", "Omnichannel: Slack, WhatsApp, Zendesk, Web", "12-second average resolution speed"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Response Speed</div>
                  <div className="text-base font-bold text-cyan-300 font-space">&lt; 12s Average Resolution</div>
                </div>
                <button
                  onClick={() => onOpenConsultation("Enterprise AI Chatbots & Knowledge Bases")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all cursor-pointer"
                >
                  <span>Deploy RAG</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Item 4: Compact Card (6 cols) - End-to-End Workflow & Voice Automation */}
          <ScrollReveal className="lg:col-span-6 flex" delay={0.3}>
            <div className="w-full relative rounded-3xl p-8 bg-[#0C0C18]/80 hover:bg-[#111122]/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-[1px] shadow-lg">
                    <div className="w-full h-full bg-[#090912] rounded-[11px] flex items-center justify-center">
                      <Workflow className="w-5 h-5 text-emerald-300" />
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    Voice & Operations
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-space group-hover:text-emerald-200 transition-colors">
                  End-to-End Workflow & Voice Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Sub-500ms conversational voice agents, automated CRM lead enrichment, document OCR extraction, and multi-app orchestration.
                </p>

                <div className="space-y-2 mb-6">
                  {["Natural human voice cadence with zero delay", "Instant Stripe & NetSuite financial sync", "SOC2 & HIPAA compliant data handling"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Annual Payroll Reclaimed</div>
                  <div className="text-base font-bold text-emerald-300 font-space">$1.4M+ Annual Labor Saved</div>
                </div>
                <button
                  onClick={() => onOpenConsultation("End-to-End Workflow & Voice Automation")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all cursor-pointer"
                >
                  <span>Deploy Automation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

export default ServicesBento;
