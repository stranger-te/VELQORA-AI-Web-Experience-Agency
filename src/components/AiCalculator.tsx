"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Clock, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface AiCalculatorProps {
  onOpenConsultation: () => void;
}

// Consistent en-US locale number formatter to prevent SSR hydration differences
const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-US").format(num);
};

export function AiCalculator({ onOpenConsultation }: AiCalculatorProps) {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(14);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalAnnualHoursWasted = teamSize * manualHoursPerWeek * 50;
  const currentAnnualCost = totalAnnualHoursWasted * hourlyRate;
  
  const annualSavingsDollars = Math.round(currentAnnualCost * 0.75);
  const annualHoursReclaimed = Math.round(totalAnnualHoursWasted * 0.75);
  const roiMultiplier = Math.max(3.8, Math.round((annualSavingsDollars / 45000) * 10) / 10);

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-widest font-mono mb-4">
            <Calculator className="w-3.5 h-3.5 text-purple-400" />
            ROI & Efficiency Modeling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Calculate Your Organization's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Autonomous AI Advantage.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Adjust the sliders below to estimate the annual financial savings and productive hours reclaimed by deploying custom Nexus AI swarms.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0D0D18]/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Company Operational Inputs
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-slate-300">Team Size (Knowledge Workers)</label>
                  <span className="text-sm font-bold text-white font-mono bg-white/5 px-2.5 py-1 rounded-lg border border-white/10" suppressHydrationWarning>
                    {teamSize} people
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={250}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>3 employees</span>
                  <span>250+ enterprise</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-slate-300">Repetitive Hours / Week per Person</label>
                  <span className="text-sm font-bold text-white font-mono bg-white/5 px-2.5 py-1 rounded-lg border border-white/10" suppressHydrationWarning>
                    {manualHoursPerWeek} hrs/week
                  </span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={30}
                  value={manualHoursPerWeek}
                  onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>4 hrs (minimal)</span>
                  <span>30 hrs (high manual overhead)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-slate-300">Average Blended Hourly Cost ($)</label>
                  <span className="text-sm font-bold text-white font-mono bg-white/5 px-2.5 py-1 rounded-lg border border-white/10" suppressHydrationWarning>
                    ${hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={180}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$25/hr</span>
                  <span>$180/hr (Senior Specialist)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-slate-400 font-mono">
              *Model assumes 75% automation capture rate across customer support, SDR, research, and documentation pipelines.
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-[#0F0F20] to-[#0A0A16] border border-indigo-500/30 shadow-2xl backdrop-blur-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Projected Annual Value
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 font-mono" suppressHydrationWarning>
                  <TrendingUp className="w-3.5 h-3.5" />
                  {roiMultiplier}x Net ROI
                </span>
              </div>

              <div className="mb-8">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-1">Estimated Annual Savings</div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-space" suppressHydrationWarning>
                  ${formatNumber(annualSavingsDollars)}
                </div>
                <div className="text-xs text-slate-400 mt-1">Direct bottom-line payroll and operational recovery</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-indigo-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold">Hours Reclaimed</span>
                  </div>
                  <div className="text-2xl font-bold text-white font-space" suppressHydrationWarning>
                    {formatNumber(annualHoursReclaimed)} <span className="text-xs text-slate-400 font-normal">hrs/yr</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-semibold">Speed Advantage</span>
                  </div>
                  <div className="text-2xl font-bold text-white font-space">
                    24 / 7 <span className="text-xs text-slate-400 font-normal">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:opacity-95 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <span>Deploy Custom AI ROI Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
export default AiCalculator;
