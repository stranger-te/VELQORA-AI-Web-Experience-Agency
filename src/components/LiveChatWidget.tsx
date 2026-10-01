"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight, User, Minimize2, CheckCircle2 } from "lucide-react";

interface LiveChatWidgetProps {
  onOpenBooking: (service?: string) => void;
}

interface Message {
  sender: "user" | "agent";
  text: string;
  time: string;
  action?: { label: string; service?: string };
}

export function LiveChatWidget({ onOpenBooking }: LiveChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "agent",
      text: "Hello! I'm the Nexus autonomous agency agent. How can I assist you with architecting your AI website, multi-agent swarms, or enterprise RAG assistants today?",
      time: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const quickPrompts = [
    "Estimate AI Project Timeline",
    "How does Multi-Agent Swarm work?",
    "Book an Architecture Call",
    "What is your Tech Stack?",
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // AI Agent simulated reasoning response
    setTimeout(() => {
      let replyText = "";
      let actionObj: { label: string; service?: string } | undefined = undefined;

      const lower = text.toLowerCase();
      if (lower.includes("timeline") || lower.includes("how long")) {
        replyText = "Most production-grade autonomous systems — including 3D AI websites, multi-agent swarms, or enterprise RAG bots — are deployed in 2 to 4 weeks using our agile sprint framework.";
        actionObj = { label: "Schedule 30-Min Timeline Review" };
      } else if (lower.includes("swarm") || lower.includes("multi-agent")) {
        replyText = "Our multi-agent swarms utilize specialized subagents (Planner, Lead Scout, Financial Analyst, Critic) that collaborate via deep tool-calling (CRMs, SQL, APIs) with zero human latency.";
        actionObj = { label: "View Swarm Blueprint", service: "Custom AI Agent Swarms & Orchestration" };
      } else if (lower.includes("stack") || lower.includes("security")) {
        replyText = "We build with Next.js 15, Spline 3D, LangGraph, vector RAG (hybrid BM25 + dense), with strict SOC2 & HIPAA compliance and 100% intellectual property ownership.";
      } else if (lower.includes("book") || lower.includes("call") || lower.includes("price") || lower.includes("cost")) {
        replyText = "You can schedule a direct 30-minute architecture briefing with our Principal AI Architects to review your workflows and receive a custom blueprint.";
        actionObj = { label: "Open Booking Calendar" };
      } else {
        replyText = "Thank you for asking! We architect bespoke autonomous agent swarms, 3D interactive web experiences, and enterprise RAG systems. Would you like to schedule an engineering discovery call?";
        actionObj = { label: "Book AI Strategy Session" };
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          action: actionObj,
        },
      ]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Bubble */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#0C0C18]/90 hover:bg-[#121226] border border-purple-500/40 hover:border-purple-400 shadow-[0_10px_35px_rgba(124,58,237,0.35)] backdrop-blur-2xl text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Open Nexus AI Agent Assistant"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-md">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0C0C18] animate-pulse" />
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold font-space flex items-center gap-1 text-white">
              Nexus AI Agent <span className="text-[10px] text-cyan-300 font-mono">Live</span>
            </div>
            <div className="text-[10px] text-slate-400">Ask about AI websites & swarms</div>
          </div>
        </button>
      ) : (
        /* Expanded Chat Window */
        <div className="w-[360px] sm:w-[400px] h-[520px] rounded-3xl bg-[#0B0B16]/95 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="px-5 py-4 bg-[#0F0F22] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-md">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-white font-space flex items-center gap-1.5">
                  Nexus Autonomous Agent
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono">Enterprise AI Consultant</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-none shadow-md shadow-indigo-600/20"
                      : "bg-[#141428] text-slate-200 border border-white/10 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                
                {/* Action trigger button inside message */}
                {msg.action && (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBooking(msg.action?.service);
                    }}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-90 text-white text-[11px] font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-200" />
                    <span>{msg.action.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}

                <span className="text-[9px] text-slate-500 font-mono mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#141428] border border-white/10 w-20 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-4 py-2 border-t border-white/5 bg-[#090916] flex gap-2 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[10px] text-slate-300 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 bg-[#0D0D1E] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about our AI agency..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}

export default LiveChatWidget;
