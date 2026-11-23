import React, { useState, useEffect } from 'react';
import { AGENCY_CONFIG } from '../config/agencyData';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-12 py-4 ${
          scrolled
            ? 'bg-[#08090D]/90 backdrop-blur-xl border-b border-[#1E2333]/80 shadow-2xl py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-lg bg-[#D4F728] flex items-center justify-center font-display font-extrabold text-[#08090D] text-lg tracking-tight transition-transform group-hover:scale-105">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-tight text-xl text-white group-hover:text-[#D4F728] transition-colors">
                {AGENCY_CONFIG.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8E93A6]">
                Digital Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#131622]/80 border border-[#1E2333] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-[#8E93A6] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4F728] text-[#08090D] hover:bg-[#bce31b] transition-all duration-200 hover:shadow-[0_0_25px_rgba(212,247,40,0.35)] group active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#131622] border border-[#1E2333] text-white hover:text-[#D4F728] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090D]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4F728]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE DIRECTORY</span>
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-3xl font-display font-bold text-white hover:text-[#D4F728] transition-colors flex items-center justify-between border-b border-[#1E2333] pb-4"
              >
                <span>{link.name}</span>
                <span className="font-mono text-sm text-[#8E93A6]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 rounded-xl font-display font-bold uppercase text-sm tracking-wider bg-[#D4F728] text-[#08090D] flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <div className="text-center font-mono text-xs text-[#8E93A6]">
              {AGENCY_CONFIG.officeHours}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
