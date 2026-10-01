"use client";

import React from "react";
import { Search, Cpu, GitBranch, Rocket, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export function HowItWorks({ onOpenConsultation }: HowItWorksProps) {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discovery & Enterprise AI Audit",
      timeline: "Week 1",
      description:
        "We dissect your existing software stack, data silos, and human operational bottlenecks to map out highest-ROI autonomous agent opportunities.",
      deliverables: ["AI Feasibility & ROI Blueprint", "Security & Data Governance Review", "Architecture Map"],
    },
    {
      step: "02",
      icon: Cpu,
      title: "Bespoke Model & Agent Architecture",
      timeline: "Week 2 - 3",
      description:
        "We engineer tailored multi-agent orchestration swarms, customize RAG pipelines, and integrate state-of-the-art LLM backends with deterministic guardrails.",
      deliverables: ["Agent Swarm Graph & Tools", "Vector Database Indexing", "Synthetic Benchmark Testing"],
    },
    {
      step: "03",
      icon: GitBranch,
      title: "System Integration & Staging Validation",
      timeline: "Week 4",
      description:
        "Seamlessly connect our AI agents and web experiences to your production APIs, CRMs (HubSpot/Salesforce), databases, and communication channels with human-in-the-loop safety.",
      deliverables: ["Live Sandbox Testing", "API Webhook Synchronizers", "Staff Handover Training"],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Autonomous Production Launch & Continuous Learning",
      timeline: "Week 5+",
      description:
        "Deployment to enterprise-grade infrastructure with sub-second response times, automated evaluation metrics, and self-optimizing prompt refinement.",
      deliverables: ["24/7 SLA & Monitoring", "Fine-Tuning Upgrades", "Executive ROI Dashboard"],
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-[#07070F] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Engineering Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            From Concept to Production <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              In 4 Predictable Weeks.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Our agile deployment framework ensures rapid time-to-value without disrupting existing business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-3xl p-7 bg-[#0D0D1A]/80 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                        {item.timeline}
                      </span>
                      <span className="text-2xl font-bold font-space text-slate-700 group-hover:text-indigo-400/50 transition-colors">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-2">Key Deliverables</div>
                  <div className="space-y-1.5">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-200">
              Ready to automate your operations this quarter?
            </span>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-slate-200 transition-all cursor-pointer"
          >
            <span>Book 30-Min Engineering Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
export default HowItWorks;
