import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight, Lock } from 'lucide-react';
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
  const [liveUtc, setLiveUtc] = useState('');
  const t = translations[lang].nav;

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setLiveUtc(d.toISOString().slice(11, 19) + ' UTC');
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.solutions, href: '#solutions' },
    { label: 'Success Stories', href: '#case-studies' },
    { label: t.investors, href: '#investors' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] transition-all">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single clean text element, no subtitle clutter) */}
        <a
          href="#home"
          className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 font-mono flex items-center gap-1 hover:text-zinc-200 transition-colors"
        >
          <span>Union</span>
          <span className="text-[#d8b485] font-light">|</span>
          <span>svc</span>
          <span className="text-zinc-400 font-normal ml-1">Group</span>
        </a>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-300">
          {navLinks.map((link, idx) => (
            <a
              key={`nav-link-${link.href}-${idx}`}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative group whitespace-nowrap shrink-0"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d8b485] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Language Switcher, Client Login, and Primary CTA) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Real-time Network Status Heartbeat Badge */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 border border-white/10 font-mono text-[11px] text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
            <span className="text-zinc-400">NET:</span>
            <span className="text-emerald-400 font-bold">LIVE</span>
            <span className="text-zinc-600">·</span>
            <span className="text-white font-medium tabular-nums">{liveUtc}</span>
          </div>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer rounded whitespace-nowrap shrink-0"
            title="Switch Language / تبديل اللغة"
            aria-label="Switch Language"
          >
            <Globe size={13} className="text-[#d8b485]" />
            <span>{t.switchLang}</span>
          </button>

          {/* Client Login Link */}
          <button
            onClick={onClientLogin}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 px-2 py-1.5"
          >
            <Lock size={12} className="text-zinc-400" />
            <span>{t.clientLogin}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onRequestDemo}
            className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 text-xs font-semibold tracking-wide text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] transition-colors rounded whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>{t.requestDemo}</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white border border-white/10 rounded cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/98 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl animate-fade-in text-sm">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={`mobile-nav-${link.href}-${idx}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-white py-2 text-xs font-medium tracking-wide transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-zinc-600 text-[11px] font-mono">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                onClientLogin();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock size={13} className="text-[#d8b485]" />
              <span>{t.clientLogin}</span>
            </button>

            <button
              onClick={() => {
                onRequestDemo();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] rounded flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.requestDemo}</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
