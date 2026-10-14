import React from 'react';
import { ShieldCheck, Landmark, Building2, Scale, BarChart3, Binary, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface LogoMarqueeProps {
  lang: Language;
}

const partners = [
  { name: 'KADASTER VERIFIED', icon: Landmark, note: 'Dutch Land Registry' },
  { name: 'STIBBE LEGAL', icon: Scale, note: 'Civil Code Structuring' },
  { name: 'APEX CO-EQUITY', icon: Building2, note: 'Institutional Tranche' },
  { name: 'NWWI CERTIFIED', icon: ShieldCheck, note: 'Independent Appraisals' },
  { name: 'DELFT QUANT', icon: Binary, note: 'Valuation Modeling' },
  { name: 'EU PROPTECH', icon: Layers, note: 'Shared Equity Standards' },
  { name: 'RANDSTAD HOUSING', icon: BarChart3, note: 'Market Analytics' },
];

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({ lang }) => {
  const t = translations[lang].marquee;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8 }}
      className="py-8 sm:py-10 border-y border-white/5 bg-[#09090b]/80 relative overflow-hidden pause-on-hover"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 text-center">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-500">
          {t.title}
        </span>
      </div>

      {/* Fade Masks */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-scroll hover:pause py-1">
        {/* Loop 1 */}
        <div className="flex items-center gap-12 sm:gap-16 px-6 min-w-max">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={`p1-${index}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-200 select-none group"
              >
                <div className="w-8 h-8 rounded-xs bg-[#0c0c0e] border border-white/10 flex items-center justify-center text-[#d8b485] group-hover:border-[#d8b485]/50 transition-colors shadow-xs">
                  <Icon size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold tracking-wider uppercase text-zinc-300 group-hover:text-white">
                    {partner.name}
                  </span>
                  <span className="text-[9px] text-zinc-500 font-mono">
                    {partner.note}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Loop 2 Duplicate */}
        <div className="flex items-center gap-12 sm:gap-16 px-6 min-w-max" aria-hidden="true">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={`p2-${index}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-200 select-none group"
              >
                <div className="w-8 h-8 rounded-xs bg-[#0c0c0e] border border-white/10 flex items-center justify-center text-[#d8b485] group-hover:border-[#d8b485]/50 transition-colors shadow-xs">
                  <Icon size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold tracking-wider uppercase text-zinc-300 group-hover:text-white">
                    {partner.name}
                  </span>
                  <span className="text-[9px] text-zinc-500 font-mono">
                    {partner.note}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
