import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LivePerformanceTicker } from './components/LivePerformanceTicker';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { SolutionsTechSection } from './components/SolutionsTechSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { InvestorSection } from './components/InvestorSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RequestDemoModal } from './components/RequestDemoModal';
import { ClientLoginModal } from './components/ClientLoginModal';
import { InvestorApplicationModal } from './components/InvestorApplicationModal';
import { TermsPrivacyModal } from './components/TermsPrivacyModal';
import { Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('union_lang');
      if (saved === 'en' || saved === 'ar') return saved;
    }
    return 'en';
  });

  // Smooth scroll depth progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Modal states
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [investorDeckModalOpen, setInvestorDeckModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ open: boolean; type: 'terms' | 'privacy' }>({
    open: false,
    type: 'terms',
  });

  // Sync document direction and lang attribute whenever lang changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('union_lang', lang);
    } catch (e) {
      console.warn('Failed to save language preference', e);
    }
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] relative text-zinc-300 antialiased selection:bg-[#d8b485]/30 selection:text-white overflow-x-hidden font-sans flex flex-col">
      {/* Subtle Slim Scroll Depth Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d8b485] via-[#f3e3ce] to-[#d8b485] z-[60] pointer-events-none shadow-[0_0_8px_rgba(216,180,133,0.5)]"
        style={{
          scaleX,
          transformOrigin: lang === 'ar' ? '100% 50%' : '0% 50%',
        }}
        aria-hidden="true"
      />

      {/* Background Ambience & Atmospheric Grid */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="fixed top-[-15%] right-[-10%] w-[55%] h-[55%] bg-[#d8b485]/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-15%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* 1. Navigation Bar (Header) */}
      <Navbar
        onRequestDemo={() => setDemoModalOpen(true)}
        onClientLogin={() => setLoginModalOpen(true)}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* 2. Hero Section — First Impression */}
        <Hero
          onExploreSolutions={() => scrollToSection('solutions')}
          onRequestPitchDeck={() => setInvestorDeckModalOpen(true)}
          lang={lang}
        />

        {/* Live Performance Ticker — Real-Time Infrastructure Telemetry */}
        <LivePerformanceTicker lang={lang} />

        {/* 3. About Unionsvc Group */}
        <AboutSection
          onExploreTech={() => scrollToSection('solutions')}
          lang={lang}
        />

        {/* 4. Vision, Mission & Societal Impact */}
        <VisionMissionSection lang={lang} />

        {/* 5. Key Solutions & Tech Stack */}
        <SolutionsTechSection
          onRequestDemo={() => setDemoModalOpen(true)}
          lang={lang}
        />

        {/* Logistics Success Stories — Enterprise Case Studies Carousel */}
        <SuccessStoriesSection
          onRequestDemo={() => setDemoModalOpen(true)}
          lang={lang}
        />

        {/* 6. Investor Relations */}
        <InvestorSection
          onRequestInvestmentDeck={() => setInvestorDeckModalOpen(true)}
          lang={lang}
        />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection lang={lang} />

        {/* 7. Footer */}
        <Footer
          onOpenTerms={() => setLegalModal({ open: true, type: 'terms' })}
          onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })}
          lang={lang}
        />
      </main>

      {/* Interactive Modals */}
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        lang={lang}
      />

      <ClientLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        lang={lang}
      />

      <InvestorApplicationModal
        isOpen={investorDeckModalOpen}
        onClose={() => setInvestorDeckModalOpen(false)}
        lang={lang}
      />

      <TermsPrivacyModal
        isOpen={legalModal.open}
        type={legalModal.type}
        onClose={() => setLegalModal({ open: false, type: 'terms' })}
        lang={lang}
      />
    </div>
  );
}
