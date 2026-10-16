import React, { useState } from 'react';
import { Globe, Menu, X, ArrowUpRight, Lock, Network, ShieldCheck, UserCheck } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  onRequestDemo: () => void;
  onClientLogin: () => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onRequestDemo,
  onClientLogin,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.solutions, href: '#solutions' },
    { label: t.investors, href: '#investors' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo: Union|svc Group (Modern design reflecting tech integration and network connectivity) */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-md bg-[#0e0e12] border border-white/10 group-hover:border-[#d8b485]/70 transition-all shadow-inner overflow-hidden">
            {/* Tech grid & node overlay */}
            <div className="absolute inset-0 bg-radial from-[#d8b485]/20 to-transparent opacity-60" />
            <Network size={18} className="text-[#d8b485] transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white font-mono">
                Union<span className="text-[#d8b485] font-light px-0.5">|</span>svc
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                Group
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-500 hidden sm:inline font-mono">
              {t.brandSub}
            </span>
          </div>
        </a>

        {/* Main Menu (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-semibold tracking-wider text-zinc-300 uppercase font-mono">
          {navLinks.map((link, idx) => (
            <a
              key={`nav-link-${link.href}-${idx}`}
              href={link.href}
              className="hover:text-[#d8b485] transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d8b485] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Call to Action (CTA): Request Demo | Client Login & Language */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-2 text-[10px] font-bold tracking-widest uppercase text-zinc-300 hover:text-white bg-[#0e0e12] hover:bg-[#15151a] border border-white/10 hover:border-[#d8b485]/40 transition-all cursor-pointer rounded-sm"
            title="Switch Language / تبديل اللغة"
          >
            <Globe size={13} className="text-[#d8b485]" />
            <span>{t.switchLang}</span>
          </button>

          {/* Client Login CTA */}
          <button
            onClick={onClientLogin}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-medium tracking-wide text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-zinc-400/30 transition-all uppercase rounded-sm cursor-pointer"
          >
            <Lock size={12} className="text-zinc-400" />
            <span>{t.clientLogin}</span>
          </button>

          {/* Request Demo CTA */}
          <button
            onClick={onRequestDemo}
            className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 text-[11px] font-bold tracking-wider text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] transition-all uppercase rounded-sm shadow-[0_4px_16px_rgba(216,180,133,0.2)] hover:shadow-[0_6px_20px_rgba(216,180,133,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.requestDemo}</span>
            <ArrowUpRight size={13} className="text-zinc-950" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white bg-[#0e0e12] border border-white/10 cursor-pointer rounded-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/98 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl animate-fade-in text-sm">
          <div className="flex flex-col space-y-3 font-mono">
            {navLinks.map((link, idx) => (
              <a
                key={`mobile-nav-${link.href}-${idx}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-[#d8b485] py-2 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-zinc-600 text-[10px]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                onClientLogin();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm flex items-center justify-center gap-2"
            >
              <Lock size={13} className="text-[#d8b485]" />
              <span>{t.clientLogin}</span>
            </button>

            <button
              onClick={() => {
                onRequestDemo();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] rounded-sm flex items-center justify-center gap-2"
            >
              <span>{t.requestDemo}</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>Contact@unionsvc.com</span>
            </span>
            <button
              onClick={() => {
                onToggleLang();
                setMobileMenuOpen(false);
              }}
              className="text-[#d8b485] font-bold"
            >
              {t.switchLang}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
