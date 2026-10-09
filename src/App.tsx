import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { ProblemSection } from './components/ProblemSection';
import { Calculator } from './components/Calculator';
import { ProcessSection } from './components/ProcessSection';
import { StatsTestimonial } from './components/StatsTestimonial';
import { LeadMagnet } from './components/LeadMagnet';
import { SolutionsSection } from './components/SolutionsSection';
import { ContactForm } from './components/ContactForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export default function App() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedSolution, setSelectedSolution] = useState('');

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
    setSelectedSolution(`Custom Co-Investment Power: ${targetPrice}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white relative selection:bg-emerald-500/20 selection:text-emerald-800 text-neutral-600 antialiased overflow-x-hidden">
      {/* Background Subtle Aura */}
      <div className="fixed inset-0 pointer-events-none aura-glow -z-10" />

      {/* Static Grid Overlay */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Main Navigation */}
      <Navbar onStartClick={() => scrollToSection('contact')} />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero
          onStartClick={() => scrollToSection('contact')}
          onAuditClick={() => scrollToSection('audit')}
        />

        {/* Continuous Logo Ticker */}
        <LogoMarquee />

        {/* The Current State Problem Breakdown */}
        <ProblemSection />

        {/* Interactive Purchasing Power Calculator */}
        <Calculator onApplyWithBudget={handleApplyWithBudget} />

        {/* Step-by-Step Shared Equity Process */}
        <ProcessSection />

        {/* Testimonials & Starter Metric Verification */}
        <StatsTestimonial
          onOpenCaseStudy={() => setCaseStudyOpen(true)}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Free Lead Magnet Audit Download */}
        <LeadMagnet />

        {/* Architecture & Diagnostic Packages */}
        <SolutionsSection onSelectSolution={handleSelectSolution} />

        {/* Priority Application & Booking Form */}
        <ContactForm
          initialBudget={selectedBudget}
          initialPainPoint={selectedSolution}
        />

        {/* Legal & Operational FAQs */}
        <FaqSection />

        {/* Standard Footer */}
        <Footer />
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
        onStartClick={() => scrollToSection('contact')}
      />
    </div>
  );
}
