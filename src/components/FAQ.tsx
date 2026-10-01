"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "How long does it take to build and deploy our custom AI systems?",
      answer:
        "Most production-grade systems — including 3D AI websites, multi-agent swarms, or enterprise RAG assistants — are fully architected, tested in staging, and deployed in 2 to 4 weeks. We follow an iterative sprint structure with weekly client demos.",
    },
    {
      question: "Who owns the intellectual property and code of the AI agents?",
      answer:
        "You own 100% of all code, prompt architectures, database schemas, custom fine-tuned model weights, and 3D assets. There is zero vendor lock-in. Everything is deployed directly to your GitHub repository and cloud infrastructure (AWS, GCP, or Vercel).",
    },
    {
      question: "How do you prevent hallucinations in enterprise AI agents?",
      answer:
        "We implement deterministic multi-layer verification: Hybrid Vector Search (BM25 + Dense embeddings) + Cross-encoder reranking, Strict Context Grounding guardrails, tool execution sandboxing, and Automated Critic Subagents that independently verify facts before dispatching output.",
    },
    {
      question: "Can your AI agents integrate with our existing CRM, ERP, and internal databases?",
      answer:
        "Yes. We build native bidirectional connectors with HubSpot, Salesforce, NetSuite, Stripe, PostgreSQL, Snowflake, Zendesk, Notion, Slack, Jira, and any REST/GraphQL or gRPC API.",
    },
    {
      question: "How is our enterprise customer data protected?",
      answer:
        "We enforce zero-data-retention agreements with enterprise AI providers. Your company data is never used to train public models. We also offer private on-premise VPC hosting of open-weight models (Llama 3, Mistral, DeepSeek) for complete air-gapped security.",
    },
    {
      question: "Can I customize or swap the Spline 3D scene on our website later?",
      answer:
        "Absolutely. Our Spline 3D wrapper is designed for easy updates. You can replace the scene URL with any new exported .splinecode link from your Spline editor account at any time with a single line change.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Clarity & Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Everything you need to know about partnering with NexusAI.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D0D1A]/80 border border-white/10 hover:border-white/20 transition-all overflow-hidden backdrop-blur-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-semibold text-white font-space">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-indigo-500/20 text-indigo-300 border-indigo-500/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default FAQ;
