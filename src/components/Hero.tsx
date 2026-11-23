import React from 'react';
import { AGENCY_CONFIG } from '../config/agencyData';
import { ArrowUpRight, ArrowDown, Code2, Cpu, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden bg-noise">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#D4F728]/10 via-[#00F0FF]/10 to-transparent blur-[140px] pointer-events-none rounded-full animate-glow" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-[#D4F728]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-[#00F0FF]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto w-full my-auto z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#131622] border border-[#1E2333] mb-8 hover:border-[#D4F728]/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4F728] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4F728]"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-[#EDEDF2] uppercase">
            {AGENCY_CONFIG.statusNotice}
          </span>
        </div>

        {/* Oversized Editorial Headline */}
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-display font-extrabold uppercase tracking-tight leading-[0.94] text-white">
            <span>We build digital </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EDEDF2] to-[#8E93A6]">
              experiences
            </span>
            <br />
            <span className="text-white">that move businesses </span>
            <span className="italic font-light text-[#D4F728] tracking-normal font-sans">
              forward.
            </span>
          </h1>
        </div>

        {/* Agency Positioning & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4 pb-10 border-b border-[#1E2333]/80">
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-[#A1A7BC] leading-relaxed max-w-2xl">
              {AGENCY_CONFIG.heroSubheadline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-[#8E93A6]">
              <span className="px-2.5 py-1 rounded bg-[#131622] border border-[#1E2333]">Startups</span>
              <span className="px-2.5 py-1 rounded bg-[#131622] border border-[#1E2333]">SaaS & Tech</span>
              <span className="px-2.5 py-1 rounded bg-[#131622] border border-[#1E2333]">E-Commerce</span>
              <span className="px-2.5 py-1 rounded bg-[#131622] border border-[#1E2333]">Modernizing SMBs</span>
              <span className="px-2.5 py-1 rounded bg-[#131622] border border-[#1E2333]">AI Automation</span>
            </div>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center lg:justify-end gap-3.5">
            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-display font-bold text-sm uppercase tracking-wider bg-[#D4F728] text-[#08090D] hover:bg-[#bce31b] transition-all duration-200 hover:shadow-[0_0_35px_rgba(212,247,40,0.4)] group active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={scrollToWork}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-display font-medium text-sm text-white bg-[#131622] border border-[#1E2333] hover:border-[#D4F728]/50 hover:bg-[#191D2C] transition-all duration-200 active:scale-95"
            >
              <span>Explore Our Work</span>
              <ArrowDown className="w-4 h-4 text-[#8E93A6]" />
            </button>
          </div>
        </div>

        {/* High-End Agency Metadata & Technical Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8">
          <div className="p-4 rounded-2xl bg-[#0F1118]/60 border border-[#1E2333] backdrop-blur-sm group hover:border-[#D4F728]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-2xl font-bold text-white group-hover:text-[#D4F728] transition-colors">
                06
              </span>
              <Code2 className="w-4 h-4 text-[#8E93A6]" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EDEDF2] mb-0.5">
              Core Disciplines
            </div>
            <div className="text-[11px] text-[#8E93A6]">
              Web · Software · Data · Cloud · SEO · CMS
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0F1118]/60 border border-[#1E2333] backdrop-blur-sm group hover:border-[#00F0FF]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-2xl font-bold text-[#00F0FF]">
                AI+
              </span>
              <Sparkles className="w-4 h-4 text-[#00F0FF]" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EDEDF2] mb-0.5">
              Intelligent Automation
            </div>
            <div className="text-[11px] text-[#8E93A6]">
              LLMs · Workflows · Task Automation
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0F1118]/60 border border-[#1E2333] backdrop-blur-sm group hover:border-[#D4F728]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-2xl font-bold text-white group-hover:text-[#D4F728] transition-colors">
                2x
              </span>
              <Cpu className="w-4 h-4 text-[#8E93A6]" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EDEDF2] mb-0.5">
              Founder-Led Craft
            </div>
            <div className="text-[11px] text-[#8E93A6]">
              Direct senior technical delivery
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0F1118]/60 border border-[#1E2333] backdrop-blur-sm group hover:border-[#38EF7D]/30 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-2xl font-bold text-[#38EF7D]">
                100%
              </span>
              <ShieldCheck className="w-4 h-4 text-[#38EF7D]" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EDEDF2] mb-0.5">
              Engineering Honesty
            </div>
            <div className="text-[11px] text-[#8E93A6]">
              Verified codebases & clear scope
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#5D6275] pt-8">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#D4F728]" />
          <span>SCROLL TO EXPLORE ARCHITECTURE</span>
        </div>
        <div className="hidden sm:block">
          VANTA STUDIO © 2026 · ALL RIGHTS RESERVED
        </div>
      </div>
    </section>
  );
};
