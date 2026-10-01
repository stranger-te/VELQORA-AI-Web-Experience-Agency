"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface PricingProps {
  onOpenConsultation: (tierName?: string) => void;
}

export function Pricing({ onOpenConsultation }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: "Sprint AI Deployment",
      tagline: "Ideal for fast-moving businesses deploying their first autonomous AI website or chatbot system.",
      monthlyPrice: "$4,900",
      annualPrice: "$3,900",
      period: "/month",
      badge: "Fast Launch",
      isPopular: false,
      features: [
        "1 Production-Grade AI Web Experience or RAG Chatbot",
        "Spline 3D Scene Integration & Responsive Next.js UI",
        "Knowledge base indexing (up to 500 documents)",
        "Zero-hallucination guardrail configuration",
        "Sub-second response time tuning",
        "2 weeks of post-launch SLA support",
      ],
      cta: "Start Sprint Deployment",
    },
    {
      name: "Growth AI Swarm",
      tagline: "Comprehensive multi-agent autonomous infrastructure for scaling operations & sales.",
      monthlyPrice: "$9,800",
      annualPrice: "$7,900",
      period: "/month",
      badge: "Most Popular",
      isPopular: true,
      features: [
        "Up to 4 Autonomous AI Agent Swarms (Sales, Support, Ops, Research)",
        "Full 3D AI Website + Enterprise Knowledge Base",
        "Custom Tool-Calling Integrations (CRM, ERP, Slack, Databases)",
        "Conversational Voice Agent or Real-Time WhatsApp Bot",
        "Continuous fine-tuning & prompt auto-refinement",
        "Dedicated Lead AI Solutions Engineer & 24/7 Slack Channel",
      ],
      cta: "Deploy Growth Swarm",
    },
    {
      name: "Enterprise Custom",
      tagline: "Bespoke AI architectures, proprietary local model hosting, and dedicated swarms.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      period: "",
      badge: "Dedicated Architect",
      isPopular: false,
      features: [
        "Unlimited custom autonomous sub-agents & specialized swarms",
        "Private VPC / On-Premise LLM Hosting (Llama 3 / DeepSeek / Mistral)",
        "SOC2, HIPAA & GDPR enterprise compliance guarantees",
        "Custom SLM (Small Language Model) fine-tuning on proprietary data",
        "99.99% Uptime SLA with dedicated failover cluster",
        "Executive AI Strategy Board representation",
      ],
      cta: "Schedule Enterprise Briefing",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#07070E] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Predictable Pricing for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Unmatched AI Output.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            No hidden fees. Full intellectual property ownership of all custom agents, prompt architectures, and code.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-xs font-medium ${!isAnnual ? "text-white" : "text-slate-400"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 rounded-full bg-slate-800 p-1 border border-white/10 transition-colors cursor-pointer"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-md transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${isAnnual ? "text-white" : "text-slate-400"}`}>
              Annual Retainer
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between backdrop-blur-2xl ${
                tier.isPopular
                  ? "bg-gradient-to-b from-[#14142B] to-[#0A0A16] border-2 border-indigo-500/60 shadow-[0_0_50px_rgba(99,102,241,0.25)] lg:-translate-y-2"
                  : "bg-[#0B0B14]/80 border border-white/10 hover:border-white/20"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-[11px] font-bold tracking-wide uppercase shadow-lg">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white font-space">{tier.name}</h3>
                  {!tier.isPopular && (
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">{tier.tagline}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-space">
                    {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  {tier.period && (
                    <span className="text-xs text-slate-400 font-mono">{tier.period}</span>
                  )}
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Included Capabilities:</div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(tier.name)}
                className={`w-full py-3.5 rounded-2xl font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  tier.isPopular
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:opacity-95 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Pricing;
