import React from 'react';
import { FileBarChart2, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface HeroProps {
  onStartClick: () => void;
  onAuditClick: () => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick, onAuditClick, lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="max-w-[1400px] mx-auto px-6 flex flex-col items-start text-left pt-36 sm:pt-40 pb-16 sm:pb-24 relative w-full z-10">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#d8b485]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-zinc-800/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Rotated Edge Watermark */}
      <div className="absolute right-2 top-[55%] -translate-y-1/2 rotate-90 origin-right text-[9px] tracking-[0.5em] text-zinc-500 uppercase hidden xl:block pointer-events-none font-mono">
        {lang === 'ar' ? 'معايير أمناء الحفظ الدولية' : 'Institutional Tier-1 Infrastructure'}
      </div>

      {/* Circular Heritage Insignia Seal */}
      <div className="absolute right-8 sm:right-12 bottom-28 w-32 h-32 rounded-full border border-[#d8b485]/30 hidden lg:flex items-center justify-center backdrop-blur-sm pointer-events-none z-10">
        <div className="text-center flex flex-col items-center justify-center">
          <span className="block text-[#d8b485] text-[9px] font-bold tracking-widest mb-1 uppercase font-mono">
            UNION
          </span>
          <span className="block text-3xl font-serif text-[#d8b485] leading-none mb-1">
            U
          </span>
          <span className="block text-zinc-500 text-[8px] tracking-widest uppercase font-mono">
            EST. 2024
          </span>
        </div>
      </div>

      {/* Kicker with Champagne Gold Divider */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="w-12 h-px bg-[#d8b485]" />
        <p className="text-[#d8b485] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase leading-relaxed font-mono">
          {t.pilotBadge} &bull; {lang === 'ar' ? 'معايير أمناء الحفظ الدولية' : 'Tier-1 Programmable Escrow'}
        </p>
      </motion.div>

      {/* Massive Architectural Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-2 leading-none uppercase"
      >
        {t.titlePrimary}
      </motion.h1>

      {/* Subtitle with Horizontal Gold Rule */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 w-full max-w-3xl"
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-light tracking-[0.25em] text-zinc-300 uppercase whitespace-nowrap">
          {t.titleSecondary}
        </h2>
        <div className="hidden sm:block flex-grow h-px bg-[#d8b485]/40" />
      </motion.div>

      {/* Paragraph Summary */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-sm md:text-base text-zinc-300 max-w-xl font-light mb-10 sm:mb-12 leading-relaxed"
      >
        {t.subtitle}
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 mb-16 w-full sm:w-auto"
      >
        <button
          onClick={onStartClick}
          className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all uppercase shadow-md hover:shadow-[0_8px_24px_rgba(216,180,133,0.25)] hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{t.startBtn}</span>
          <ArrowRight size={14} className="text-zinc-950" />
        </button>

        <button
          onClick={onAuditClick}
          className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase border-b border-white/30 pb-1 hover:border-[#d8b485] hover:text-[#d8b485] transition-colors"
        >
          <FileBarChart2 size={13} className="text-[#d8b485]" />
          <span>{t.auditBtn}</span>
        </button>
      </motion.div>

      {/* Institutional Metrics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full border-y border-white/5 bg-[#09090b]/80 backdrop-blur-md py-6 sm:py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        {t.metrics.map((metric, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-2 group hover:bg-white/[0.02] transition-colors"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#d8b485] mt-2.5 shrink-0" />
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-1 font-mono group-hover:text-[#d8b485] transition-colors">
                {metric.value}
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-zinc-400 tracking-widest uppercase">
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
