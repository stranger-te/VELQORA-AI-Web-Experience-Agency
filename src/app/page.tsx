"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ServicesBento } from "@/components/ServicesBento";
import { InteractiveAgentDemo } from "@/components/InteractiveAgentDemo";
import { AiCalculator } from "@/components/AiCalculator";
import { HowItWorks } from "@/components/HowItWorks";
import { Results } from "@/components/Results";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { LiveChatWidget } from "@/components/LiveChatWidget";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#050508] text-[#F8FAFC] overflow-x-hidden selection:bg-indigo-500 selection:text-white relative">
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />
      <Hero onOpenConsultation={() => handleOpenConsultation()} />
      
      <ScrollReveal>
        <TrustedBy />
      </ScrollReveal>

      <ServicesBento onOpenConsultation={handleOpenConsultation} />

      <ScrollReveal>
        <InteractiveAgentDemo />
      </ScrollReveal>

      <ScrollReveal>
        <AiCalculator onOpenConsultation={() => handleOpenConsultation()} />
      </ScrollReveal>

      <ScrollReveal>
        <HowItWorks onOpenConsultation={() => handleOpenConsultation()} />
      </ScrollReveal>

      <ScrollReveal>
        <Results />
      </ScrollReveal>

      <ScrollReveal>
        <Pricing onOpenConsultation={handleOpenConsultation} />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <CTA onOpenConsultation={() => handleOpenConsultation()} />
      </ScrollReveal>

      <Footer />

      {/* Floating 24/7 AI Agent Consultation Widget */}
      <LiveChatWidget onOpenBooking={handleOpenConsultation} />

      {/* Multi-Step Discovery & Cal.com Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </main>
  );
}
