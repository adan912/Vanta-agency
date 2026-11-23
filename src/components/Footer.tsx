import React from 'react';
import { AGENCY_CONFIG, SERVICES } from '../config/agencyData';
import { ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#06070A] text-white border-t border-[#1E2333] pt-20 pb-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D4F728] flex items-center justify-center font-display font-black text-[#08090D] text-lg">
                V
              </div>
              <span className="font-display font-extrabold tracking-tight text-2xl text-white">
                {AGENCY_CONFIG.name}
              </span>
            </div>

            <p className="text-sm text-[#8E93A6] max-w-sm leading-relaxed">
              {AGENCY_CONFIG.heroSubheadline}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#D4F728]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FOUNDED BY ANAS ALI & ADAN FAISAL</span>
            </div>

            {/* Social Link Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <div className="p-2.5 rounded-full bg-[#131622] border border-[#1E2333] text-[#8E93A6] hover:text-[#D4F728] hover:border-[#D4F728]/40 transition-colors cursor-pointer" title="GitHub Repository Slot">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="p-2.5 rounded-full bg-[#131622] border border-[#1E2333] text-[#8E93A6] hover:text-[#00F0FF] hover:border-[#00F0FF]/40 transition-colors cursor-pointer" title="LinkedIn Profile Slot">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="p-2.5 rounded-full bg-[#131622] border border-[#1E2333] text-[#8E93A6] hover:text-white hover:border-white/40 transition-colors cursor-pointer" title="Twitter/X Profile Slot">
                <TwitterIcon className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#5D6275]">
              Directory
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A1A7BC] hover:text-[#D4F728] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Index */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#5D6275]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-[#A1A7BC]">
              {SERVICES.map((srv) => (
                <li key={srv.id} className="hover:text-white transition-colors">
                  <a href="#services">{srv.title}</a>
                </li>
              ))}
              <li className="text-[#D4F728] font-mono text-xs pt-1 flex items-center gap-1">
                <span>+ AI Automation Engine</span>
              </li>
            </ul>
          </div>

          {/* Back to top & Details */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="group p-4 rounded-full bg-[#131622] border border-[#1E2333] hover:border-[#D4F728] hover:bg-[#D4F728] text-white hover:text-[#08090D] transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </button>

            <div className="text-left lg:text-right text-xs font-mono text-[#5D6275] space-y-1">
              <div>GLOBAL / REMOTE STUDIO</div>
              <div>{AGENCY_CONFIG.officeHours}</div>
            </div>
          </div>
        </div>

        {/* Massive Editorial Brand Typography (Kota aesthetic watermark) */}
        <div className="pt-8 border-t border-[#1E2333]/60 overflow-hidden select-none">
          <div className="font-display font-black text-6xl sm:text-8xl md:text-[9.5rem] lg:text-[12rem] xl:text-[14rem] tracking-tighter text-white/[0.04] uppercase leading-none text-center">
            VANTA STUDIO
          </div>
        </div>

        {/* Bottom Bar: Copyright & Placeholders notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5D6275] pt-4">
          <div>
            © {new Date().getFullYear()} {AGENCY_CONFIG.name}. Engineered for scalable growth.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#8E93A6] cursor-pointer">Privacy Framework</span>
            <span className="hover:text-[#8E93A6] cursor-pointer">Engagement Terms</span>
            <span className="text-[#D4F728]">Clean Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
