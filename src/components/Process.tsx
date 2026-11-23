import React, { useState } from 'react';
import { PROCESS_STAGES } from '../config/agencyData';
import { Sparkles, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStage = PROCESS_STAGES[activeStepIndex];

  return (
    <section id="process" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0C13] relative border-b border-[#1E2333]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4F728] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / METHODOLOGY & EXECUTION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
            OUR DELIVERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8E93A6]">PROCESS.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E93A6] max-w-xl">
            A battle-tested six-stage engineering framework that guarantees transparency, predictable milestones, and zero unexpected surprises.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {PROCESS_STAGES.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-[#131622] border-[#D4F728] shadow-[0_4px_20px_rgba(212,247,40,0.15)]'
                    : 'bg-[#0E1017] border-[#1E2333] hover:border-[#2E354B] opacity-70 hover:opacity-100'
                }`}
              >
                <span className={`font-mono text-xs block mb-1 ${isActive ? 'text-[#D4F728]' : 'text-[#8E93A6]'}`}>
                  PHASE {stage.step}
                </span>
                <span className="font-display font-bold text-base sm:text-lg text-white block uppercase tracking-tight">
                  {stage.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F1118] border border-[#2E354B] relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4F728]/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-extrabold text-[#D4F728]">
                  {activeStage.step}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E93A6] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Timeline: {activeStage.duration}</span>
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white">
                {activeStage.name} — {activeStage.tagline}
              </h3>

              <p className="text-sm sm:text-base text-[#A1A7BC] leading-relaxed">
                {activeStage.description}
              </p>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-mono uppercase bg-[#131622] text-[#8E93A6] hover:text-white border border-[#1E2333] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <button
                  disabled={activeStepIndex === PROCESS_STAGES.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-mono uppercase bg-[#D4F728] text-[#08090D] font-bold hover:bg-[#bce31b] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Deliverables Checklist for Current Step */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#08090D] border border-[#1E2333] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4F728] mb-4">
                What You Receive in Phase {activeStage.step}
              </h4>
              <div className="space-y-2.5">
                {activeStage.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#131622]/60 border border-[#1E2333] text-xs text-[#EDEDF2]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#38EF7D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
