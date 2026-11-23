import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { About } from './components/About';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { ProjectItem } from './config/agencyData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);

  const handleStartInquiry = (serviceName?: string) => {
    if (serviceName) {
      setInquiryService(serviceName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#EDEDF2] flex flex-col selection:bg-[#D4F728] selection:text-[#08090D]">
      {/* Navigation Bar */}
      <Navbar onOpenContact={() => handleStartInquiry()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onStartProject={() => handleStartInquiry()} />

        {/* Dynamic Running Marquee */}
        <Marquee />

        {/* Services & AI Capability Section */}
        <Services onStartInquiry={handleStartInquiry} />

        {/* Selected Work / Portfolio Section */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onStartInquiry={() => handleStartInquiry()}
        />

        {/* Agency Introduction & Founders Section */}
        <About onStartInquiry={() => handleStartInquiry()} />

        {/* Six-Stage Delivery Process */}
        <Process />

        {/* Working Principles & Why Us */}
        <WhyUs />

        {/* High-Converting Inquiry & Contact Section */}
        <Contact preselectedService={inquiryService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartInquiry={() => handleStartInquiry(selectedProject?.title)}
      />
    </div>
  );
}

export default App;
