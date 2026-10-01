"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Mail,
  Building,
  ArrowRight,
  ShieldCheck,
  Video,
  Globe,
  Bot,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string>(
    initialService || "AI-Powered Websites & Web Apps"
  );
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow (2:00 PM EST)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-50",
    budget: "$10,000 - $25,000",
    notes: "",
  });

  if (!isOpen) return null;

  const services = [
    { name: "AI-Powered Websites & Web Apps", desc: "3D Spline, Generative UI, Sub-second speed" },
    { name: "Custom AI Agent Swarms & Orchestration", desc: "Multi-agent tool calling & 24/7 automation" },
    { name: "Enterprise AI Chatbots & RAG", desc: "Zero-hallucination vector search & 100+ integrations" },
    { name: "End-to-End Workflow & Voice Automation", desc: "Conversational voice agents & ERP sync" },
  ];

  const availableSlots = [
    "Tomorrow • 11:00 AM EST",
    "Tomorrow • 2:00 PM EST",
    "Thursday • 10:00 AM EST",
    "Thursday • 3:30 PM EST",
    "Friday • 1:00 PM EST",
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0F0F1E] border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-6 sm:p-8 overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            30-Min Principal AI Architecture Call
          </div>
          <h3 className="text-2xl font-bold text-white font-space">
            {step === 1 && "Select AI Systems & Project Scope"}
            {step === 2 && "Company Details & Discovery"}
            {step === 3 && "Strategy Session Confirmed!"}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {step < 3
              ? "Meet directly with our Lead AI Architects to map out your autonomous roadmap."
              : "We've reserved your calendar slot and dispatched prep materials."}
          </p>
        </div>

        {/* --- STEP 1: Select AI Systems --- */}
        {step === 1 && (
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-300 mb-1">Select Primary Objective:</div>
            {services.map((s) => (
              <div
                key={s.name}
                onClick={() => setSelectedService(s.name)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedService === s.name
                    ? "bg-purple-950/40 border-purple-500/60 text-white shadow-md shadow-purple-500/10"
                    : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/[0.05]"
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-white">{s.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{s.desc}</div>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedService === s.name
                      ? "border-purple-400 bg-purple-500"
                      : "border-slate-600"
                  }`}
                >
                  {selectedService === s.name && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:opacity-95 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 transition-all cursor-pointer"
              >
                <span>Continue to Details & Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* --- STEP 2: Company Details & Slot Selection --- */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">Company Name</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Acme Global Logistics"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">Preferred Time Slot</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  {availableSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 mb-1 block">
                Workflow Bottlenecks or Specific Needs (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="E.g., We spend 30 hrs/week on repetitive manual lead qualification..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:opacity-95 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 transition-all cursor-pointer"
              >
                <span>Confirm Meeting Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Strict Enterprise NDA • Zero Data Sharing • Direct Lead Architect
            </div>
          </form>
        )}

        {/* --- STEP 3: Confirmation Screen --- */}
        {step === 3 && (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h4 className="text-xl font-bold text-white font-space mb-2">
              Architecture Session Confirmed!
            </h4>

            <div className="max-w-md mx-auto p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-xs text-slate-300 space-y-2 mb-6">
              <div className="flex items-center gap-2 text-indigo-300">
                <Video className="w-4 h-4" />
                <span className="font-semibold">Google Meet / Cal.com Bridge Dispatched</span>
              </div>
              <div><span className="text-slate-500">Attendee:</span> {formData.name} ({formData.email})</div>
              <div><span className="text-slate-500">Target Time:</span> {selectedDate}</div>
              <div><span className="text-slate-500">Scope:</span> {selectedService}</div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="px-7 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-slate-200 transition-all cursor-pointer"
            >
              Return to NexusAI Platform
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default BookingModal;
