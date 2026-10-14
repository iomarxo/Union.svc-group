import React, { useState } from 'react';
import { Globe, Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  onStartClick: () => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartClick,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { label: t.pillars, href: '#pillars' },
    { label: t.process, href: '#process' },
    { label: t.calculator, href: '#calculator' },
    { label: t.solutions, href: '#solutions' },
    { label: t.audit, href: '#audit' },
    { label: t.faq, href: '#faq' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xs bg-[#0c0c0e] border border-white/10 group-hover:border-[#d8b485]/60 transition-all shadow-inner">
            <span className="text-[#d8b485] font-serif font-bold text-base leading-none">
              U
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-[#d8b485] transition-colors">
              Union.svc
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 hidden sm:inline">
              {t.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-widest text-white/70 uppercase">
          {navLinks.map((link, idx) => (
            <a
              key={`desktop-nav-${link.href}-${idx}`}
              href={link.href}
              className="hover:text-[#d8b485] transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d8b485] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions & Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher Button */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold tracking-widest uppercase text-zinc-300 hover:text-white bg-[#0c0c0e] hover:bg-[#111114] border border-white/10 hover:border-[#d8b485]/40 transition-all cursor-pointer"
            title="Switch language / تبديل اللغة"
          >
            <Globe size={12} className="text-[#d8b485]" />
            <span>{t.switchLang}</span>
          </button>

          {/* Start CTA */}
          <button
            onClick={onStartClick}
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 text-[10px] font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all uppercase shadow-md hover:shadow-[0_8px_24px_rgba(216,180,133,0.25)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>
              <span className="hidden sm:inline">{t.startProject}</span>
              <span className="sm:hidden">{t.start}</span>
            </span>
            <ArrowUpRight size={13} className="text-zinc-950" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white bg-[#0c0c0e] border border-white/10 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl animate-fade-in text-sm">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={`mobile-nav-${link.href}-${idx}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-[#d8b485] py-2 text-[11px] font-bold tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] tracking-wider text-zinc-400 flex items-center gap-1.5 uppercase font-mono">
              <Shield size={12} className="text-[#d8b485]" />
              <span>Contact@unionsvc.com</span>
            </span>
            <button
              onClick={() => {
                onToggleLang();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-[#d8b485] font-bold tracking-wider uppercase"
            >
              {t.switchLang}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
