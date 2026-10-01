"use client";

import React, { useState } from "react";
import { RotateCcw, Sparkles, CheckCircle2, Bot, Cpu, Zap, Play } from "lucide-react";

export function InteractiveAgentDemo() {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const presets = [
    {
      id: "sales-swarm",
      name: "B2B Sales Autonomous Swarm",
      description: "Discovers inbound lead, scrapes company financials, crafts hyper-personalized deck, and books calendar slot.",
      target: "Inbound Prospect: Acme Logistics ($45M ARR)",
      steps: [
        { agent: "Lead Scout Agent", action: "Scanning Clearbit & LinkedIn APIs for lead technographic profile...", latency: "140ms" },
        { agent: "Financial Analyst Agent", action: "Extracting recent 10-K filing & identifying 3 operational bottlenecks...", latency: "380ms" },
        { agent: "Copywriting Synthesizer", action: "Synthesizing custom 4-slide enterprise pitch deck tailored to VP of Ops...", latency: "210ms" },
        { agent: "Calendar Executive Agent", action: "Orchestrating Calendly slot with meeting agenda & CRM synced into HubSpot...", latency: "90ms" },
      ],
      outputSummary: "SUCCESS: Meeting confirmed for Tuesday 2:00 PM EST. Personalized deck attached and HubSpot deal created ($85,000 ARR opportunity).",
    },
    {
      id: "support-rag",
      name: "Enterprise RAG Support Resolver",
      description: "Instantly debugs complex API webhook failures from internal docs and executes database self-repair.",
      target: "Ticket #4928: Webhook HMAC Signature Mismatch on Stripe V3",
      steps: [
        { agent: "Triage & Sentiment Agent", action: "Classifying priority as CRITICAL; User: Enterprise Tier Platinum...", latency: "85ms" },
        { agent: "Vector RAG Agent", action: "Querying internal vector database across 14,000 engineering docs for HMAC V3...", latency: "120ms" },
        { agent: "Code Interpreter Agent", action: "Validating payload schema & reproducing cryptographic hash check...", latency: "310ms" },
        { agent: "Auto-Fix Dispatcher", action: "Regenerating endpoint secret & dispatching verified solution to client with code fix...", latency: "160ms" },
      ],
      outputSummary: "SUCCESS: Customer ticket resolved autonomously in 675ms with 100% accuracy. Zero human escalation required.",
    },
    {
      id: "finance-audit",
      name: "Autonomous Invoice & Fraud Auditor",
      description: "Reads PDF invoices, matches against ERP PO database, checks fraud flags, and queues payment.",
      target: "Invoice Batch: 50 Vendor Invoices ($340,000 total)",
      steps: [
        { agent: "Vision OCR Agent", action: "Extracting line-item table data & tax IDs from PDF raster streams...", latency: "450ms" },
        { agent: "ERP Sync Agent", action: "Cross-referencing 50 Purchase Orders in NetSuite database...", latency: "230ms" },
        { agent: "Fraud Guardrail Agent", action: "Running Bayesian anomaly detection; 0 duplicate invoices detected...", latency: "110ms" },
        { agent: "Treasury Approval Agent", action: "Queuing approved wire batches in bank ledger with multi-sig audit trail...", latency: "95ms" },
      ],
      outputSummary: "SUCCESS: 50/50 invoices verified and approved in 885ms. Accounting cycle time reduced from 3 days to 0.9 seconds.",
    },
  ];

  const currentPreset = presets[selectedPreset];

  const startSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
    setCompletedSteps([]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < currentPreset.steps.length) {
        setCurrentStepIndex(step);
        setCompletedSteps((prev) => [...prev, step]);
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 750);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStepIndex(0);
    setCompletedSteps([]);
  };

  return (
    <section id="agents-demo" className="py-24 bg-[#080810] relative border-y border-white/10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            Live Architecture Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            See Multi-Agent Swarms <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Execute In Real Time.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Select an enterprise scenario below and trigger our autonomous agent swarm to watch live planning, subagent task delegation, and execution in sub-second latency.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {presets.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setSelectedPreset(idx);
                resetSimulation();
              }}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedPreset === idx
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40 scale-105"
                  : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/10"
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-[#0A0A14] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="px-6 py-4 bg-[#0F0F1E] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-slate-400">nexus-agent-mesh://orchestrator-v3</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetSimulation}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={startSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-90 text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50 cursor-pointer"
              >
                {isRunning ? (
                  <>
                    <Cpu className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Swarm...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Trigger Agent Swarm</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm">
            <div className="mb-6 p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5 text-indigo-400" />
                <div>
                  <div className="text-[11px] text-indigo-300 font-semibold uppercase tracking-wider">Active Target Objective</div>
                  <div className="text-white font-medium text-xs sm:text-sm">{currentPreset.target}</div>
                </div>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hidden sm:inline">
                Zero Hallucination Mode
              </span>
            </div>

            <div className="space-y-4">
              {currentPreset.steps.map((step, idx) => {
                const isCompleted = completedSteps.includes(idx);
                const isCurrent = isRunning && currentStepIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      isCompleted
                        ? "bg-emerald-950/20 border-emerald-500/30 text-slate-200"
                        : isCurrent
                        ? "bg-indigo-950/40 border-indigo-500/50 text-white shadow-lg shadow-indigo-500/10"
                        : "bg-white/[0.02] border-white/5 text-slate-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : isCurrent ? (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-slate-600 shrink-0" />
                        )}
                        <span className="font-bold text-indigo-300">{step.agent}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">{step.latency}</span>
                    </div>
                    <div className="pl-6 text-xs text-slate-300">{step.action}</div>
                  </div>
                );
              })}
            </div>

            {completedSteps.length === currentPreset.steps.length && (
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-950/50 to-teal-950/30 border border-emerald-500/40 text-emerald-200 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 font-bold mb-1 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span>SWARM EXECUTION FINISHED IN 0.82s</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">{currentPreset.outputSummary}</p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
export default InteractiveAgentDemo;
