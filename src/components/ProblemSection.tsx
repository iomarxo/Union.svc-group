import React, { useState } from 'react';
import { DoorClosed, TrendingDown, ChevronRight, Check, X, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, translations } from '../translations';

interface ProblemSectionProps {
  lang: Language;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ lang }) => {
  const [showMatrix, setShowMatrix] = useState(false);
  const t = translations[lang].problem;

  return (
    <section className="py-20 sm:py-28 border-b border-white/5 bg-[#09090b] relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4"
        >
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-px bg-[#d8b485]" />
              <p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
                {t.badge}
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              {t.heading}
            </h2>
          </div>

          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="self-start sm:self-auto text-[10px] font-bold tracking-widest uppercase text-zinc-300 hover:text-white flex items-center gap-2 bg-[#0c0c0e] hover:bg-[#111114] border border-white/10 px-5 py-2.5 hover:border-[#d8b485]/40 transition-all cursor-pointer shadow-xs"
          >
            <span>{showMatrix ? t.compareBtnHide : t.compareBtnShow}</span>
            <ChevronRight
              size={13}
              className={`transform transition-transform text-[#d8b485] ${
                showMatrix ? 'rotate-90' : ''
              }`}
            />
          </button>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="theme-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-[#111114] rounded-xs flex items-center justify-center border border-white/10 text-[#d8b485] shadow-inner">
                  <DoorClosed size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#d8b485]/10 text-[#d8b485] border border-[#d8b485]/30">
                  {t.card1.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                {t.card1.title}
              </h3>
              <p className="leading-relaxed text-sm font-light text-zinc-400">
                {t.card1.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px]">{t.card1.statLabel}</span>
              <span className="text-[#d8b485] font-semibold bg-[#d8b485]/10 px-2.5 py-0.5 rounded-xs border border-[#d8b485]/20">
                {t.card1.statValue}
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="theme-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-[#111114] rounded-xs flex items-center justify-center border border-white/10 text-rose-400 shadow-inner">
                  <TrendingDown size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  {t.card2.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                {t.card2.title}
              </h3>
              <p className="leading-relaxed text-sm font-light text-zinc-400">
                {t.card2.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px]">{t.card2.statLabel}</span>
              <span className="text-rose-400 font-semibold bg-rose-500/10 px-2.5 py-0.5 rounded-xs border border-rose-500/20">
                {t.card2.statValue}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Comparison Matrix Drawer */}
        <AnimatePresence>
          {showMatrix && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="mt-8 border border-white/10 bg-[#0c0c0e] p-6 sm:p-8 overflow-hidden shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-5 text-[11px] font-bold uppercase text-[#d8b485] tracking-widest font-mono">
                <ShieldAlert size={14} />
                <h5>{t.matrix.title}</h5>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-400">
                      <th className="py-3 pr-4 font-semibold uppercase tracking-wider text-[10px]">{t.matrix.colDimension}</th>
                      <th className="py-3 px-3 font-semibold text-zinc-400 uppercase tracking-wider text-[10px]">{t.matrix.colRent}</th>
                      <th className="py-3 px-3 font-semibold text-zinc-400 uppercase tracking-wider text-[10px]">{t.matrix.colMortgage}</th>
                      <th className="py-3 pl-3 font-bold text-[#d8b485] bg-[#d8b485]/10 border-x border-[#d8b485]/20 uppercase tracking-wider text-[10px]">
                        {t.matrix.colUnion}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-zinc-300">
                    {t.matrix.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 pr-4 text-white font-medium">{row.dimension}</td>
                        <td className="py-3.5 px-3 text-rose-400">
                          <span className="flex items-center gap-1.5">
                            <X size={12} className="text-rose-400 shrink-0" />
                            <span>{row.rent}</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-zinc-400">{row.mortgage}</td>
                        <td className="py-3.5 pl-3 font-semibold text-[#d8b485] bg-[#d8b485]/10 border-x border-[#d8b485]/20">
                          <span className="flex items-center gap-1.5">
                            <Check size={12} className="text-[#d8b485] shrink-0" />
                            <span>{row.union}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
