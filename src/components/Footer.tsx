import React from 'react';
import { Mail, ArrowUp, Network, ShieldCheck, Globe, ExternalLink } from 'lucide-react';
import { Language, translations } from '../translations';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy, lang }) => {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] py-14 sm:py-16 border-t border-white/5 relative z-10 text-zinc-400 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          {/* Brand & Corporate Summary */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#0e0e12] border border-white/10">
                <Network size={16} className="text-[#d8b485]" />
              </div>
              <div className="flex items-center gap-1.5 font-mono">
                <span className="text-base font-bold text-white">
                  Union<span className="text-[#d8b485] font-light">|</span>svc
                </span>
                <span className="text-[10px] font-semibold uppercase text-zinc-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                  Group
                </span>
              </div>
            </a>

            <p className="text-xs text-zinc-400 leading-relaxed font-light max-w-sm">
              Next-generation digital freight forwarding and logistics brokerage for enterprises—powered by artificial intelligence, end-to-end encryption, and ultra-high reliability.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Global Cryptographic Nodes Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              {t.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#about" className="text-zinc-400 hover:text-[#d8b485] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-zinc-400 hover:text-[#d8b485] transition-colors">
                  Solutions & Tech
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="cursor-pointer text-zinc-400 hover:text-[#d8b485] transition-colors text-left"
                >
                  {t.terms}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="cursor-pointer text-zinc-400 hover:text-[#d8b485] transition-colors text-left"
                >
                  {t.privacy}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information & Corporate HQ */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              {t.contactInfoTitle}
            </h4>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#d8b485]" />
                <a
                  href="mailto:Contact@unionsvc.com"
                  className="text-white hover:text-[#d8b485] transition-colors"
                >
                  Contact@unionsvc.com
                </a>
              </div>

              <div className="text-zinc-400">
                <span className="text-zinc-400 block text-[10px] uppercase">{t.corporateHq}:</span>
                <span className="text-zinc-300">Tokyo // Berlin // London // Global</span>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono text-zinc-300 hover:text-white transition-colors border border-white/5"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono text-zinc-300 hover:text-white transition-colors border border-white/5"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono text-zinc-300 hover:text-white transition-colors border border-white/5"
                >
                  GitHub API
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Locations */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-400">
          <div>
            <span>{t.copyright}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400 text-[11px]">
              Tokyo // Berlin // London // Global
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#0e0e12] hover:bg-[#16161c] border border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
