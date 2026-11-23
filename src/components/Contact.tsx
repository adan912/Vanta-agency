import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../config/agencyData';
import {
  Sparkles,
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: preselectedService ? [preselectedService] : ['Web Development'],
    budget: '$5k – $15k',
    timeline: '1 – 3 months',
    details: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const availableServices = [
    'Web Development',
    'Software & Apps',
    'AI Automation',
    'Cloud & DevOps',
    'Data Analytics',
    'WordPress / CMS',
    'Technical SEO'
  ];

  const budgetOptions = ['< $5k', '$5k – $15k', '$15k – $30k', '$30k+'];
  const timelineOptions = ['< 1 month', '1 – 3 months', '3 – 6 months', 'Flexible'];

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      if (exists) {
        if (prev.services.length === 1) return prev; // keep at least one
        return { ...prev, services: prev.services.filter((s) => s !== srv) };
      } else {
        return { ...prev, services: [...prev.services, srv] };
      }
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or company representative.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.details.trim() || formData.details.length < 10) {
      errs.details = 'Please provide a brief outline of what you aim to build (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API integration pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4F728', '#00F0FF', '#ffffff', '#38EF7D']
      });
    }, 800);
  };

  const copyToClipboard = (text: string, key: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0C13] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4F728] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight text-white">
            HAVE A PROJECT <span className="text-[#D4F728]">IN MIND?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E93A6] max-w-xl">
            Tell us about your requirements, timeline, and architectural challenges. We typically reply within one business day with an initial technical assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Contact & Placeholders */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0F1118] border border-[#1E2333] space-y-6">
              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white">
                Direct Channels
              </h3>

              {/* Email Placeholder Slot */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E93A6]">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D4F728]" />
                    <span>AGENCY EMAIL</span>
                  </span>
                  {AGENCY_CONFIG.email && (
                    <button
                      onClick={() => copyToClipboard(AGENCY_CONFIG.email, 'email')}
                      className="text-[#D4F728] hover:underline"
                    >
                      {copiedKey === 'email' ? 'Copied' : 'Copy'}
                    </button>
                  )}
                </div>
                {AGENCY_CONFIG.email ? (
                  <a
                    href={`mailto:${AGENCY_CONFIG.email}`}
                    className="text-sm font-mono text-white hover:text-[#D4F728] transition-colors"
                  >
                    {AGENCY_CONFIG.email}
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-[#08090D] border border-dashed border-[#2E354B] text-xs font-mono text-[#5D6275] flex items-center justify-between">
                    <span>[Agency Email Configured on Launch]</span>
                    <span className="text-[10px] text-[#D4F728] uppercase font-bold">Slot Ready</span>
                  </div>
                )}
              </div>

              {/* WhatsApp Placeholder Slot */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E93A6]">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>WHATSAPP INQUIRY</span>
                  </span>
                  {AGENCY_CONFIG.whatsapp && (
                    <button
                      onClick={() => copyToClipboard(AGENCY_CONFIG.whatsapp, 'wa')}
                      className="text-[#00F0FF] hover:underline"
                    >
                      {copiedKey === 'wa' ? 'Copied' : 'Copy'}
                    </button>
                  )}
                </div>
                {AGENCY_CONFIG.whatsapp ? (
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-mono text-white hover:text-[#00F0FF] transition-colors"
                  >
                    {AGENCY_CONFIG.whatsapp}
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-[#08090D] border border-dashed border-[#2E354B] text-xs font-mono text-[#5D6275] flex items-center justify-between">
                    <span>[WhatsApp Direct Line Slot]</span>
                    <span className="text-[10px] text-[#00F0FF] uppercase font-bold">Slot Ready</span>
                  </div>
                )}
              </div>

              {/* Location Placeholder Slot */}
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#8E93A6] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#38EF7D]" />
                  <span>LOCATION / WORKSPACE</span>
                </div>
                {AGENCY_CONFIG.location ? (
                  <p className="text-sm text-white font-mono">{AGENCY_CONFIG.location}</p>
                ) : (
                  <div className="p-3 rounded-xl bg-[#08090D] border border-[#1E2333] text-xs font-mono text-[#EDEDF2] flex items-center justify-between">
                    <span>Global Remote / Engineering Hub</span>
                    <span className="text-[10px] text-[#38EF7D] uppercase font-bold">Worldwide</span>
                  </div>
                )}
              </div>

              {/* Social Channels Placeholder Note */}
              <div className="pt-4 border-t border-[#1E2333]">
                <span className="text-xs font-mono uppercase text-[#8E93A6] block mb-2">
                  Social Channels Slot
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#8E93A6]">
                  <span className="px-3 py-1 rounded bg-[#08090D] border border-[#1E2333]">GitHub [Ready]</span>
                  <span className="px-3 py-1 rounded bg-[#08090D] border border-[#1E2333]">LinkedIn [Ready]</span>
                  <span className="px-3 py-1 rounded bg-[#08090D] border border-[#1E2333]">Twitter/X [Ready]</span>
                </div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-6 rounded-2xl bg-[#08090D] border border-[#1E2333] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4F728]">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT FOUNDER RESPONSE</span>
              </div>
              <p className="text-xs text-[#8E93A6] leading-relaxed">
                Inquiries are reviewed by Anas Ali and Adan Faisal directly. We do not use aggressive sales scripts or third-party call centers.
              </p>
            </div>
          </div>

          {/* Right Column: High-Converting Project Inquiry Form */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-[#0F1118] border border-[#2E354B] relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#D4F728]/10 border border-[#D4F728] flex items-center justify-center mx-auto text-[#D4F728]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-bold uppercase text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#A1A7BC] max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been recorded. Our engineering leads will review your requirements and reach out at <strong className="text-[#D4F728]">{formData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#08090D] border border-[#1E2333] text-left max-w-lg mx-auto text-xs font-mono text-[#8E93A6] space-y-1">
                  <div className="text-[#D4F728] font-bold pb-1 border-b border-[#1E2333]">
                    RECORDED INQUIRY BRIEF:
                  </div>
                  <div>Services: {formData.services.join(', ')}</div>
                  <div>Target Budget: {formData.budget}</div>
                  <div>Desired Timeline: {formData.timeline}</div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-mono uppercase bg-[#131622] text-[#8E93A6] hover:text-white border border-[#1E2333] transition-colors"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Services Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#8E93A6] mb-3">
                    01 // What capabilities do you need? (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-150 ${
                            isSelected
                              ? 'bg-[#D4F728] text-[#08090D] font-bold shadow-[0_0_15px_rgba(212,247,40,0.25)]'
                              : 'bg-[#131622] text-[#8E93A6] hover:text-white border border-[#1E2333]'
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Budget Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#8E93A6] mb-3">
                    02 // Target Project Budget (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-mono transition-all text-center ${
                          formData.budget === opt
                            ? 'bg-[#00F0FF] text-[#08090D] font-bold'
                            : 'bg-[#131622] text-[#8E93A6] hover:text-white border border-[#1E2333]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Timeline Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#8E93A6] mb-3">
                    03 // Desired Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelineOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, timeline: opt })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-mono transition-all text-center ${
                          formData.timeline === opt
                            ? 'bg-white text-[#08090D] font-bold'
                            : 'bg-[#131622] text-[#8E93A6] hover:text-white border border-[#1E2333]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Details Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8E93A6] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#1E2333] text-white text-sm focus:outline-none focus:border-[#D4F728] transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8E93A6] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#1E2333] text-white text-sm focus:outline-none focus:border-[#D4F728] transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono uppercase text-[#8E93A6] mb-2">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Dynamics Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#1E2333] text-white text-sm focus:outline-none focus:border-[#D4F728] transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono uppercase text-[#8E93A6] mb-2">
                      Project Details & Objectives *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what you want to build, current challenges, technical preferences, or specific deliverables..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#1E2333] text-white text-sm focus:outline-none focus:border-[#D4F728] transition-colors resize-none"
                    />
                    {errors.details && (
                      <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Integration Notice & Submit */}
                <div className="pt-4 border-t border-[#1E2333] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-[#5D6275] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38EF7D]" />
                    <span>Configured for email / webhook dispatch on connection</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider bg-[#D4F728] text-[#08090D] hover:bg-[#bce31b] transition-all hover:shadow-[0_0_30px_rgba(212,247,40,0.35)] flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting Brief...' : 'Send Project Inquiry'}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
