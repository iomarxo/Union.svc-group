import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { ProblemSection } from './components/ProblemSection';
import { Calculator } from './components/Calculator';
import { ProcessSection } from './components/ProcessSection';
import { StatsTestimonial } from './components/StatsTestimonial';
import { LeadMagnet } from './components/LeadMagnet';
import { CorePillarsSection } from './components/CorePillarsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ContactForm } from './components/ContactForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('union_lang');
      if (saved === 'en' || saved === 'ar') return saved;
    }
    return 'en';
  });

  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedSolution, setSelectedSolution] = useState('');

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

  const handleSelectSolution = (name: string, budget: string) => {
    setSelectedSolution(name);
    setSelectedBudget(budget);
    scrollToSection('contact');
  };

  const handleApplyWithBudget = (targetPrice: string) => {
    setSelectedBudget('10k+');
    setSelectedSolution(
      lang === 'ar'
        ? `ملف القدرة الشرائية التشاركية: ${targetPrice}`
        : `Custom Co-Investment Purchasing Power: ${targetPrice}`
    );
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#09090b] relative text-zinc-300 antialiased selection:bg-[#d8b485]/30 selection:text-white overflow-x-hidden font-sans flex flex-col">
      {/* Theme Atmospheric Texture & Gradient Layers */}
      <div className="absolute top-0 left-0 w-full h-[100vh] min-h-[750px] z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.08] mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/60"></div>
      </div>

      {/* Fixed Background Glow Effects */}
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#d8b485]/5 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-[-10%] left-[-10%] w-[45%] h-[45%] bg-zinc-800/15 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Static Executive Grid Overlay */}
      <div
        className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Sticky Navigation */}
      <Navbar
        onStartClick={() => scrollToSection('contact')}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Content Container */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onStartClick={() => scrollToSection('contact')}
          onAuditClick={() => scrollToSection('audit')}
          lang={lang}
        />

        {/* Institutional Standards Logo Marquee */}
        <LogoMarquee lang={lang} />

        {/* The Four Core Pillars - Core of the Landing Page */}
        <CorePillarsSection
          onSelectPillar={(pillarTitle, budgetHint) => {
            setSelectedSolution(pillarTitle);
            if (budgetHint) setSelectedBudget(budgetHint);
            scrollToSection('contact');
          }}
          lang={lang}
        />

        {/* Problem Section & Counterparty Risk Matrix */}
        <ProblemSection lang={lang} />

        {/* Interactive Purchasing Power Calculator & Wealth Growth Curve */}
        <Calculator
          onApplyWithBudget={handleApplyWithBudget}
          lang={lang}
        />

        {/* Shared Equity Protocol & Process Steps */}
        <ProcessSection lang={lang} />

        {/* Testimonials & Starter Metric Verification */}
        <StatsTestimonial
          onOpenCaseStudy={() => setCaseStudyOpen(true)}
          onContactClick={() => scrollToSection('contact')}
          lang={lang}
        />

        {/* Free Executive Feasibility & Intelligence Lead Magnet */}
        <LeadMagnet lang={lang} />

        {/* Architecture & Diagnostic Deployment Packages */}
        <SolutionsSection
          onSelectSolution={handleSelectSolution}
          lang={lang}
        />

        {/* Priority Application & Direct Intake Form */}
        <ContactForm
          initialBudget={selectedBudget}
          initialPainPoint={selectedSolution}
          lang={lang}
        />

        {/* Legal & Operational FAQs with JSON-LD Schema */}
        <FaqSection lang={lang} />

        {/* Footer */}
        <Footer lang={lang} />
      </main>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
        onStartClick={() => scrollToSection('contact')}
        lang={lang}
      />
    </div>
  );
}
