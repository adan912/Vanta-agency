import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    "WEB DEVELOPMENT",
    "CUSTOM SOFTWARE",
    "AI AUTOMATION",
    "CLOUD & DEVOPS",
    "DATA ANALYTICS",
    "TECHNICAL SEO",
    "WORDPRESS ARCHITECTURE",
    "HIGH-VELOCITY CODE",
    "INTELLIGENT WORKFLOWS"
  ];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-[#1E2333] bg-[#0A0C13] select-none">
      {/* Side gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08090D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08090D] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* First repetition */}
        {items.map((item, idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-8">
            <span className="font-display font-extrabold text-lg sm:text-2xl uppercase tracking-wider text-[#A1A7BC] hover:text-[#D4F728] transition-colors cursor-default">
              {item}
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4F728] shadow-[0_0_10px_#D4F728]" />
          </div>
        ))}

        {/* Second repetition for seamless loop */}
        {items.map((item, idx) => (
          <div key={`m2-${idx}`} className="flex items-center gap-8">
            <span className="font-display font-extrabold text-lg sm:text-2xl uppercase tracking-wider text-[#A1A7BC] hover:text-[#D4F728] transition-colors cursor-default">
              {item}
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4F728] shadow-[0_0_10px_#D4F728]" />
          </div>
        ))}
      </div>
    </div>
  );
};
