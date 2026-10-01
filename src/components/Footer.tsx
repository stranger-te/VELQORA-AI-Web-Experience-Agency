"use client";

import React from "react";
import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#05050A] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#0A0A12] rounded-[11px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white font-space">
                Nexus<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              Pioneering enterprise autonomous AI systems, intelligent 3D web platforms, and multi-agent operations for modern industry frontrunners.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              All Autonomous Swarms Operational • 99.99% SLA
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">Capabilities</div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">3D AI Websites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Agent Swarms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Enterprise RAG Bots</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Voice Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Private LLM Hosting</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">Architecture</div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#agents-demo" className="hover:text-white transition-colors">Swarm Simulator</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">4-Week Blueprint</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & IP Terms</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">AI Research Dispatch</div>
            <p className="text-xs text-slate-400 mb-3">
              Receive our bi-weekly executive teardown on enterprise multi-agent architectures.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed to Nexus AI Research Dispatch!"); }} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="cto@company.com"
                className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 w-full"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shrink-0 cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div suppressHydrationWarning>
            © 2026 NexusAI Technologies Inc. All rights reserved. Apple-inspired minimalism.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security & SOC2</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
