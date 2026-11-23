import React from 'react';
import { FOUNDERS, AGENCY_CONFIG } from '../config/agencyData';
import { Sparkles, ArrowUpRight, Cpu, Server, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';

interface AboutProps {
  onStartInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onStartInquiry }) => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#08090D] relative border-b border-[#1E2333]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4F728] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / AGENCY ETHOS & LEADERSHIP</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white max-w-4xl">
            COMBINING <span className="text-[#D4F728]">CREATIVE INGENUITY</span> WITH PRACTICAL ENGINEERING.
          </h2>
          <p className="text-lg sm:text-xl text-[#A1A7BC] max-w-2xl leading-relaxed">
            {AGENCY_CONFIG.missionStatement}
          </p>
        </div>

        {/* 3 Strategic Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-3xl bg-[#0F1118] border border-[#1E2333]">
            <span className="font-mono text-xs text-[#D4F728] uppercase tracking-widest block mb-4">
              01 // ENGINEERING INTEGRITY
            </span>
            <h3 className="text-xl font-display font-bold uppercase text-white mb-2">
              Architecture Built to Scale
            </h3>
            <p className="text-sm text-[#8E93A6] leading-relaxed">
              We engineer maintainable codebases with clean separation of concerns, containerized deployments, and typed safety. No brittle hacks or shortcuts.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0F1118] border border-[#1E2333]">
            <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest block mb-4">
              02 // MEASURABLE BUSINESS OUTCOMES
            </span>
            <h3 className="text-xl font-display font-bold uppercase text-white mb-2">
              Results Over Vanity Metrics
            </h3>
            <p className="text-sm text-[#8E93A6] leading-relaxed">
              Whether accelerating page speeds to boost e-commerce conversion or building automated AI pipelines to reclaim hours, our work solves commercial problems.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0F1118] border border-[#1E2333]">
            <span className="font-mono text-xs text-[#38EF7D] uppercase tracking-widest block mb-4">
              03 // RELIABLE PARTNERSHIP
            </span>
            <h3 className="text-xl font-display font-bold uppercase text-white mb-2">
              Direct Senior Ownership
            </h3>
            <p className="text-sm text-[#8E93A6] leading-relaxed">
              You collaborate directly with our engineering founders. Transparent scope, documented deliverables, and ongoing post-launch technical support.
            </p>
          </div>
        </div>

        {/* Founders Spotlight Cards (From Blueprint) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1E2333] pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
                Leadership & Delivery Architects
              </h3>
              <p className="text-xs sm:text-sm text-[#8E93A6]">
                One unified agency delivering across web, systems, DevOps, and machine learning.
              </p>
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-mono text-[#D4F728] bg-[#131622] border border-[#1E2333]">
              Shared Delivery Standards
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={founder.name}
                className="p-8 sm:p-10 rounded-3xl bg-[#0F1118] border border-[#1E2333] hover:border-[#2E354B] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="font-mono text-xs text-[#D4F728] uppercase tracking-wider block mb-1">
                        0{idx + 1} // CO-FOUNDER PROFILE
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white">
                        {founder.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-[#00F0FF] mt-0.5">
                        {founder.role}
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#161924] border border-[#222738] flex items-center justify-center text-[#D4F728]">
                      {idx === 0 ? <Server className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                    </div>
                  </div>

                  <p className="text-sm text-[#A1A7BC] leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  {/* Skills Grid */}
                  <div className="mb-6">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-[#8E93A6] mb-3">
                      Confirmed Technical Strengths
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {founder.coreSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#08090D] text-[#EDEDF2] border border-[#1E2333]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Links & Projects */}
                <div className="pt-6 border-t border-[#1E2333] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#8E93A6]">
                    Key Works: <span className="text-white">{founder.featuredProjects.join(', ')}</span>
                  </div>

                  {/* Placeholder slots for profile links */}
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-[#08090D] border border-[#1E2333] text-[11px] font-mono text-[#8E93A6] flex items-center gap-1.5">
                      <LinkedinIcon className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>Verified Profile</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#08090D] border border-[#1E2333] text-[11px] font-mono text-[#8E93A6] flex items-center gap-1.5">
                      <GithubIcon className="w-3.5 h-3.5 text-[#D4F728]" />
                      <span>Repo Contributor</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shared Capabilities Callout */}
          <div className="p-6 rounded-2xl bg-[#131622] border border-[#1E2333] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#38EF7D]" />
              <span className="text-xs sm:text-sm text-[#EDEDF2]">
                <strong>Joint Delivery Workflow:</strong> Synchronized project planning, peer code reviews, continuous testing, and documented client handover.
              </span>
            </div>
            <button
              onClick={onStartInquiry}
              className="text-xs font-mono uppercase tracking-wider text-[#D4F728] hover:underline flex items-center gap-1"
            >
              <span>Schedule a technical discussion</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
