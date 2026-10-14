import React from 'react';
import { Search, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface SolutionsSectionProps {
  onSelectSolution: (solutionName: string, budgetHint: string) => void;
  lang: Language;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
  lang,
}) => {
  const t = translations[lang].solutions;

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#09090b] relative z-10 overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-8 h-px bg-[#d8b485]" />
            <p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
              {t.badge}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
            {t.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Service 1: The Feasibility Audit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="theme-card p-8 sm:p-10 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-[#111114] border border-white/10 rounded-xs flex items-center justify-center text-[#d8b485] shadow-inner">
                  <Search size={22} />
                </div>
                <span className="text-[10px] font-mono border border-white/10 px-3 py-1 rounded-full text-zinc-400 bg-[#111114] uppercase tracking-wider">
                  {t.card1.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                {t.card1.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mb-6 leading-relaxed">
                {t.card1.desc}
              </p>
              <ul className="space-y-3 border-t border-white/5 pt-5 sm:pt-6 mb-8">
                {t.card1.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-zinc-300 flex items-center gap-2.5 font-mono">
                    <span className="w-1.5 h-1.5 bg-[#d8b485] rounded-full shadow-[0_0_6px_#d8b485]"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                onClick={() => onSelectSolution(t.card1.title, '500k-2m')}
                className="w-full text-center border border-white/20 hover:border-[#d8b485] bg-[#111114] hover:bg-[#18181b] text-white py-4 px-6 text-[10px] font-bold tracking-widest uppercase rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.card1.btnText}</span>
                <ArrowRight size={13} className="text-[#d8b485]" />
              </button>
            </div>
          </motion.div>

          {/* Service 2: The Full Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="theme-card p-8 sm:p-10 flex flex-col justify-between h-full border-[#d8b485]/40 hover:border-[#d8b485]/70"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-[#111114] border border-[#d8b485]/30 rounded-xs flex items-center justify-center text-[#d8b485] shadow-inner">
                  <Layers size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider border border-[#d8b485]/40 px-3 py-1 rounded-full text-[#d8b485] bg-[#d8b485]/10">
                  {t.card2.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                {t.card2.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mb-6 leading-relaxed">
                {t.card2.desc}
              </p>
              <ul className="space-y-3 border-t border-white/5 pt-5 sm:pt-6 mb-8">
                {t.card2.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-zinc-300 flex items-center gap-2.5 font-mono">
                    <span className="w-1.5 h-1.5 bg-[#d8b485] rounded-full shadow-[0_0_6px_#d8b485]"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                onClick={() => onSelectSolution(t.card2.title, '10m-50m')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-[10px] font-bold tracking-widest uppercase text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all cursor-pointer shadow-md hover:shadow-[0_8px_24px_rgba(216,180,133,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.card2.btnText}</span>
                <ArrowRight size={14} className="text-zinc-950" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
