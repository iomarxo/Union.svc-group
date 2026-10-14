import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 py-12 sm:py-16 border-t border-white/5 relative z-10 text-zinc-400">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8">
          {/* Brand & Direct Email */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#0c0c0e] border border-white/10 rounded-xs flex items-center justify-center">
                <span className="text-[#d8b485] font-serif text-sm font-bold">U</span>
              </div>
              <span className="text-white font-bold text-xs tracking-widest uppercase">
                {t.copyright}
              </span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <a
              href={`mailto:${t.directEmail}`}
              className="text-[#d8b485] hover:text-[#c2a277] text-xs transition-colors flex items-center gap-1.5 font-mono"
            >
              <Mail size={12} />
              <span>{t.directEmail}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            {t.links.map((link, idx) => (
              <a
                key={`${link.label}-${link.href}-${idx}`}
                href={link.href}
                className="hover:text-[#d8b485] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8b485] animate-pulse" />
            <span className="text-zinc-400 text-[11px] font-mono">{t.status}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-[11px] font-mono">
              Utrecht // Amsterdam // London // Global
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xs bg-[#0c0c0e] hover:bg-[#111114] border border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Back to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
