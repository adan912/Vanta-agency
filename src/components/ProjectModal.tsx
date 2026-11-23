import React, { useEffect } from 'react';
import type { ProjectItem } from '../config/agencyData';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartInquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartInquiry }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#08090D]/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-[#0F1118] border border-[#1E2333] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#1E2333] bg-[#131622]/80 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#1E2333] text-[#D4F728] border border-[#D4F728]/30">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono text-[#8E93A6] bg-[#0A0C13] border border-[#1E2333]">
                {project.clientType}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono text-[#38EF7D] bg-[#38EF7D]/10 border border-[#38EF7D]/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38EF7D]"></span>
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A1A7BC] mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#1A1E2C] border border-[#262C40] text-[#8E93A6] hover:text-white hover:bg-[#262C40] transition-colors"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
          {/* Key Metrics / Highlights Bar */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0A0C13] border border-[#1E2333]">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center sm:text-left px-3 py-1 border-b sm:border-b-0 sm:border-r border-[#1E2333] last:border-0">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#D4F728]">
                    {metric.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#8E93A6] mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Visual Presentation / Interactive Abstract Blueprint */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#121520] to-[#0A0C13] border border-[#1E2333] p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E2333]/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-[#8E93A6]">
                  case-study-architecture // {project.id}.manifest
                </span>
              </div>
              <span className="font-mono text-xs text-[#D4F728]">
                {project.highlightStat}
              </span>
            </div>

            <div className="font-mono text-xs sm:text-sm text-[#A1A7BC] space-y-2 bg-[#08090D] p-4 rounded-xl border border-[#1A1E2C]">
              <p className="text-[#38EF7D]">
                $ vanta inspect --project "{project.title}" --verbose
              </p>
              <p className="text-white">
                → Status: <span className="text-[#D4F728]">{project.status}</span>
              </p>
              <p className="text-[#8E93A6]">
                → Core Pipeline: {project.technologies.slice(0, 4).join(' · ')}
              </p>
              <p className="text-[#8E93A6]">
                → Engineering Focus: Zero-downtime, verified architectural components, documented handover.
              </p>
            </div>
          </div>

          {/* Overview, Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#131622] border border-[#1E2333]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF8A00] uppercase mb-2">
                <span>01</span>
                <span>The Challenge</span>
              </div>
              <p className="text-sm text-[#A1A7BC] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#131622] border border-[#1E2333]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#38EF7D] uppercase mb-2">
                <span>02</span>
                <span>The Engineering Solution</span>
              </div>
              <p className="text-sm text-[#A1A7BC] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#8E93A6] mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#D4F728]" />
              <span>Project Deliverables & Architecture</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0A0C13] border border-[#1E2333] text-xs text-[#EDEDF2]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4F728] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Contributions (From Blueprint) */}
          <div className="p-6 rounded-2xl bg-[#131622] border border-[#1E2333]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#D4F728] mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#D4F728]" />
              <span>Founder Contributions & Roles</span>
            </h3>
            <div className="space-y-3 font-sans text-xs sm:text-sm">
              {project.founderContribution.anas && (
                <div className="p-3.5 rounded-xl bg-[#08090D] border border-[#1E2333]">
                  <span className="font-bold text-white block mb-0.5">
                    Anas Ali (Cloud & Web Engineering):
                  </span>
                  <span className="text-[#A1A7BC]">
                    {project.founderContribution.anas}
                  </span>
                </div>
              )}
              {project.founderContribution.adan && (
                <div className="p-3.5 rounded-xl bg-[#08090D] border border-[#1E2333]">
                  <span className="font-bold text-white block mb-0.5">
                    Adan Faisal (AI & Software Architecture):
                  </span>
                  <span className="text-[#A1A7BC]">
                    {project.founderContribution.adan}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#8E93A6] mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#131622] text-[#EDEDF2] border border-[#1E2333]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub & Live Demo Slots (As requested by user) */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#131622] to-[#161A28] border border-[#2E354B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[#D4F728]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CODE REPOSITORY & LIVE PROOF</span>
              </div>
              <p className="text-xs text-[#8E93A6]">
                This project slot is pre-configured for public GitHub repo and live domain links.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-[#1E2333] hover:bg-[#282F45] text-white border border-[#2E354B] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>View GitHub</span>
                </a>
              ) : (
                <div className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-[#0A0C13] text-[#8E93A6] border border-[#1E2333]">
                  <GithubIcon className="w-4 h-4 text-[#8E93A6]" />
                  <span>GitHub Slot Ready</span>
                </div>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-[#D4F728] hover:bg-[#bce31b] text-[#08090D] font-bold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-[#131622] text-[#8E93A6] border border-[#1E2333]">
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo Available on Request</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#1E2333] bg-[#0A0C13] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#8E93A6] text-center sm:text-left">
            Need a similar system engineered for your business?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-mono uppercase text-[#A1A7BC] hover:text-white border border-[#1E2333] hover:border-[#2E354B] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartInquiry();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#D4F728] text-[#08090D] hover:bg-[#bce31b] transition-all"
            >
              Discuss Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
