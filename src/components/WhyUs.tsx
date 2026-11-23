import React from 'react';
import { WHY_US_PILLARS } from '../config/agencyData';
import { Sparkles, Terminal, Code2, Users, FileCheck, Gauge, ShieldAlert } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code2 className="w-5 h-5 text-[#D4F728]" />;
      case 1: return <Terminal className="w-5 h-5 text-[#00F0FF]" />;
      case 2: return <Gauge className="w-5 h-5 text-[#FF8A00]" />;
      case 3: return <Users className="w-5 h-5 text-[#38EF7D]" />;
      case 4: return <FileCheck className="w-5 h-5 text-[#00C2FF]" />;
      case 5: return <Gauge className="w-5 h-5 text-[#D4F728]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4F728]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#08090D] relative border-b border-[#1E2333]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4F728] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / WORKING PRINCIPLES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
            WHY PARTNER WITH <span className="text-[#D4F728]">VANTA.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E93A6] max-w-xl">
            We operate on honest engineering standards, direct founder communication, and pragmatic digital execution.
          </p>
        </div>

        {/* 6 Core Working Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="p-8 rounded-3xl bg-[#0F1118] border border-[#1E2333] hover:border-[#2E354B] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#8E93A6] group-hover:text-[#D4F728] transition-colors">
                    PRIN // {pillar.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#161924] border border-[#222738]">
                    {getPillarIcon(idx)}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-3 group-hover:text-[#D4F728] transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm text-[#8E93A6] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Realistic Trust Manifesto Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0A0C13] border border-[#1E2333] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#161924] border border-[#222738] flex items-center justify-center text-[#D4F728] shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="text-xs text-[#8E93A6]">
            <span className="text-white font-semibold">Our Policy on Transparency:</span> We will never invent fake logos, falsified case metrics, or make empty claims. We demonstrate our capability through real architectures, inspectable code repositories, and verifiable deliverables.
          </div>
        </div>
      </div>
    </section>
  );
};
