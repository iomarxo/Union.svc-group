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

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#09090b]/95 backdrop-blur-md border-b border-white/[0.08] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="text-base sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 font-mono flex items-center gap-1 hover:text-zinc-200 transition-colors py-2 min-h-[48px]"
        >
          <span>Union</span>
          <span className="text-[#d8b485] font-light">|</span>
          <span>svc</span>
          <span className="text-zinc-400 font-normal ml-1 text-sm sm:text-base">Group</span>
        </a>

        {/* Zone 2: Desktop text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-medium tracking-wide text-zinc-300">
          {navLinks.map((link, idx) => (
            <a
              key={`nav-link-${link.href}-${idx}`}
              href={link.href}
              className="hover:text-white transition-colors py-2 relative group whitespace-nowrap shrink-0"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d8b485] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Language Switcher, Client Login, and Primary CTA) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Real-time Network Status Heartbeat Badge */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1.5 rounded bg-black/60 border border-white/10 font-mono text-[11px] text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
            <span className="text-zinc-400">NET:</span>
            <span className="text-emerald-400 font-bold">LIVE</span>
            <span className="text-zinc-600">·</span>
            <span className="text-white font-medium tabular-nums">{liveUtc}</span>
          </div>

          {/* Language Switcher with comfortable tap target (min 48px) */}
          <button
            onClick={onToggleLang}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[48px] text-xs font-mono text-zinc-200 hover:text-white bg-white/5 sm:bg-transparent border border-white/10 hover:border-white/20 transition-all cursor-pointer rounded-lg whitespace-nowrap shrink-0 active:scale-95"
            title="Switch Language / تبديل اللغة"
            aria-label="Switch Language"
          >
            <Globe size={15} className="text-[#d8b485]" />
            <span className="font-semibold">{t.switchLang}</span>
          </button>

          {/* Client Login Link (Hidden on mobile, accessible in drawer) */}
          <button
            onClick={onClientLogin}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 px-3.5 py-2.5 min-h-[48px]"
          >
            <Lock size={13} className="text-zinc-400" />
            <span>{t.clientLogin}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onRequestDemo}
            className="hidden sm:inline-flex cursor-pointer items-center justify-center gap-1.5 px-5 py-3 min-h-[48px] text-xs font-semibold tracking-wide text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-95 transition-all rounded-lg whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>{t.requestDemo}</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Hamburger Toggle — Accessible 48x48px Touch Target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-200 hover:text-white transition-all cursor-pointer active:scale-95 shrink-0"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={22} className="text-[#d8b485]" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with full touch optimization */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed top-18 sm:top-20 inset-x-0 bottom-0 bg-[#09090b]/98 border-t border-white/10 p-5 overflow-y-auto backdrop-blur-2xl flex flex-col justify-between animate-fade-in z-50"
        >
          <div className="flex flex-col space-y-1">
            <div className="text-[11px] font-mono text-[#d8b485] uppercase tracking-widest px-3 py-2 flex items-center justify-between">
              <span>Menu Navigation</span>
              <span className="text-zinc-500 font-normal">Union|svc</span>
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={`mobile-nav-${link.href}-${idx}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-white px-4 py-3.5 min-h-[48px] rounded-lg hover:bg-white/5 active:bg-white/10 text-sm font-medium tracking-wide transition-colors flex items-center justify-between border-b border-white/[0.04]"
              >
                <span>{link.label}</span>
                <span className="text-zinc-500 text-xs font-mono">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 mt-6">
            {/* Live Network Badge in Mobile View */}
            <div className="flex items-center justify-between px-4 py-3 min-h-[48px] rounded-lg bg-black/60 border border-white/5 font-mono text-xs text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>USVC Infrastructure</span>
              </span>
              <span className="text-emerald-400 font-bold tabular-nums">{liveUtc}</span>
            </div>

            {/* In-Drawer Language Switcher (min 48px touch height) */}
            <button
              onClick={() => {
                onToggleLang();
              }}
              className="w-full min-h-[48px] px-4 text-xs font-semibold font-mono uppercase tracking-wider text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-between cursor-pointer active:scale-98 transition-all"
            >
              <span className="flex items-center gap-2">
                <Globe size={15} className="text-[#d8b485]" />
                <span>Language / اللغة</span>
              </span>
              <span className="text-[#d8b485] font-bold">{t.switchLang}</span>
            </button>

            {/* Mobile Client Login Button (min 48px touch height) */}
            <button
              onClick={() => {
                onClientLogin();
                setMobileMenuOpen(false);
              }}
              className="w-full min-h-[48px] px-4 text-xs font-semibold font-mono uppercase tracking-wider text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
            >
              <Lock size={14} className="text-[#d8b485]" />
              <span>{t.clientLogin}</span>
            </button>

            {/* Mobile Request Demo Button (min 48px touch height) */}
            <button
              onClick={() => {
                onRequestDemo();
                setMobileMenuOpen(false);
              }}
              className="w-full min-h-[48px] px-4 text-xs font-bold font-mono uppercase tracking-wider text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] rounded-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all shadow-md"
            >
              <span>{t.requestDemo}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
