import React, { useState } from 'react';
import { PROJECTS } from '../config/agencyData';
import type { ProjectItem } from '../config/agencyData';
import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
  onStartInquiry: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onStartInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI & Cloud' | 'Web & Software' | 'E-Commerce & SEO'>('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#08090D] relative border-b border-[#1E2333]/80">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4F728]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4F728] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 / SELECTED WORK & EVIDENCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
              ENGINEERED TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8E93A6]">PERFORM.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#8E93A6] max-w-xl">
              Demonstration projects and verified technical architectures representing our capabilities across AI, full-stack software, and digital infrastructure.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#131622] border border-[#1E2333]">
            {(['All', 'AI & Cloud', 'Web & Software', 'E-Commerce & SEO'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#D4F728] text-[#08090D] font-bold shadow-[0_0_15px_rgba(212,247,40,0.3)]'
                    : 'text-[#8E93A6] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid (Asymmetrical Layout inspired by Kota) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 3;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-3xl bg-[#0F1118] border border-[#1E2333] hover:border-[#D4F728]/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative ${
                  isFeatured ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                {/* Decorative hover gradient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4F728]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Card Metadata */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#1E2333] text-[#D4F728] border border-[#2E354B]">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#8E93A6] bg-[#0A0C13]">
                        {project.clientType}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#1A1E2C] border border-[#262C40] flex items-center justify-center text-[#8E93A6] group-hover:text-[#08090D] group-hover:bg-[#D4F728] transition-all duration-300 transform group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Project Title & Pitch */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold uppercase tracking-tight text-white group-hover:text-[#D4F728] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A1A7BC] leading-relaxed mb-6">
                    {project.tagline}
                  </p>
                </div>

                {/* Card Visual / Abstract Blueprint Graphic */}
                <div className="my-4 p-5 rounded-2xl bg-[#08090D] border border-[#1A1E2C] space-y-3 font-mono text-xs text-[#8E93A6] group-hover:border-[#282F45] transition-colors">
                  <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#1A1E2C]">
                    <span className="text-[#38EF7D]">STATUS: {project.status}</span>
                    <span className="text-white font-semibold">{project.highlightStat}</span>
                  </div>
                  <p className="line-clamp-2 text-[#A1A7BC]">
                    {project.overview}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#5D6275]">
                    <span>Founders: Anas Ali · Adan Faisal</span>
                    <span className="text-[#D4F728] underline underline-offset-4">Click to inspect →</span>
                  </div>
                </div>

                {/* Bottom Tech Pills & GitHub Slot indicator */}
                <div className="pt-4 border-t border-[#1E2333]/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#161924] text-[#C1C6D9] border border-[#1E2333]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono text-[#8E93A6]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#8E93A6]">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repo Slot Ready</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub & Project Pipeline Announcement Box (As requested) */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#0F1118] via-[#131726] to-[#0F1118] border border-[#2E354B] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4F728]">
              <Terminal className="w-4 h-4" />
              <span>CENTRALIZED REPOSITORY HOOKS</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-bold uppercase text-white">
              Have real projects or custom repos ready to showcase?
            </h4>
            <p className="text-sm text-[#8E93A6] max-w-xl">
              All project cards are structured to link directly to public GitHub repositories and live deployments. Update them in a single configuration file without touching code.
            </p>
          </div>

          <button
            onClick={onStartInquiry}
            className="shrink-0 px-6 py-3.5 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-white text-[#08090D] hover:bg-[#D4F728] hover:text-[#08090D] transition-all duration-200"
          >
            Request Custom Build
          </button>
        </div>
      </div>
    </section>
  );
};
