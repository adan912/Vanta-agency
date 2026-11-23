import React, { useState } from 'react';
import { SERVICES, AI_CAPABILITY } from '../config/agencyData';
import {
  Globe,
  Code2,
  BarChart3,
  TrendingUp,
  Cloud,
  Layers,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Bot,
  Workflow,
  Zap
} from 'lucide-react';

interface ServicesProps {
  onStartInquiry: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onStartInquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-[#D4F728]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#00F0FF]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#FF8A00]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#38EF7D]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#00C2FF]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#9D4EDD]" />;
      default: return <Zap className="w-5 h-5 text-[#D4F728]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0C13] relative border-b border-[#1E2333]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4F728] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 / CORE SERVICE SPECTRUM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
            WHAT WE <span className="text-[#D4F728]">DELIVER.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E93A6] max-w-2xl">
            Six disciplined engineering domains designed to build, automate, and scale digital products from architecture to deployment.
          </p>
        </div>

        {/* Creative Split-Screen Editorial Showcase (Kota inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Interactive Service Directory */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#131622] border-[#D4F728] shadow-[0_10px_30px_rgba(0,0,0,0.5)] translate-x-1.5'
                      : 'bg-[#0E1017]/80 border-[#1E2333] hover:border-[#2E354B] hover:bg-[#131622]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-[#8E93A6] font-semibold">
                      {service.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[#08090D] border border-[#1E2333]">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-lg uppercase tracking-tight transition-colors ${
                        isSelected ? 'text-[#D4F728]' : 'text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#8E93A6] line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                    isSelected ? 'text-[#D4F728] rotate-45' : 'text-[#5D6275]'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Service Inspector Card */}
          <div className="lg:col-span-7 sticky top-28 p-6 sm:p-10 rounded-3xl bg-[#0F1118] border border-[#2E354B] shadow-2xl relative overflow-hidden">
            {/* Top accent badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#1E2333]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-extrabold text-[#D4F728]">
                  {selectedService.number}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E93A6]">
                  DOMAIN SPECIFICATION
                </span>
              </div>

              <button
                onClick={() => onStartInquiry(selectedService.title)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#D4F728] text-[#08090D] hover:bg-[#bce31b] transition-all"
              >
                <span>Inquire About {selectedService.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
                {selectedService.title}
              </h3>
              <p className="text-sm sm:text-base text-[#A1A7BC] leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            {/* Capabilities List */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#8E93A6] mb-3">
                Included Capabilities & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#08090D] border border-[#1E2333] text-xs text-[#EDEDF2]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4F728] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Real Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#1E2333]">
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-[#8E93A6] mb-2">
                  What You Receive
                </h5>
                <ul className="space-y-1.5 text-xs text-[#A1A7BC]">
                  {selectedService.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-[#8E93A6] mb-2">
                  Technologies Utilized
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#161924] text-[#EDEDF2] border border-[#1E2333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STANDOUT SECTION: Cross-Service Capability: AI Automation */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0F1322] via-[#12182D] to-[#0A0C13] border-2 border-[#D4F728]/40 p-8 sm:p-12 overflow-hidden shadow-[0_0_50px_rgba(212,247,40,0.1)]">
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4F728]/15 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#00F0FF]/15 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            {/* Capability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4F728]/10 border border-[#D4F728]/40 text-[#D4F728] text-xs font-mono uppercase tracking-wider mb-6">
              <Bot className="w-4 h-4" />
              <span>{AI_CAPABILITY.badge}</span>
            </div>

            {/* Headline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white">
                  {AI_CAPABILITY.title}
                </h3>
                <p className="text-base sm:text-lg text-[#EDEDF2] font-medium">
                  {AI_CAPABILITY.tagline}
                </p>
                <p className="text-sm sm:text-base text-[#A1A7BC] leading-relaxed max-w-3xl">
                  {AI_CAPABILITY.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
                <button
                  onClick={() => onStartInquiry('AI Automation')}
                  className="px-8 py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider bg-[#D4F728] text-[#08090D] hover:bg-[#bce31b] transition-all hover:shadow-[0_0_30px_rgba(212,247,40,0.4)] flex items-center gap-2"
                >
                  <span>Build AI Workflows</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 4 AI Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {AI_CAPABILITY.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#08090D]/80 border border-[#1E2333] hover:border-[#D4F728]/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1A1F30] border border-[#2D3550] flex items-center justify-center text-[#D4F728] mb-3">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-base uppercase text-white mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#8E93A6] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* AI Stack Badges */}
            <div className="mt-8 pt-6 border-t border-[#1E2333]/80 flex flex-wrap items-center gap-2 text-xs font-mono text-[#8E93A6]">
              <span className="text-[#D4F728] uppercase font-bold mr-2">INTEGRATION STACK:</span>
              {AI_CAPABILITY.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded bg-[#08090D] border border-[#1E2333] text-[#EDEDF2]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
