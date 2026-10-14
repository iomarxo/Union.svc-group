import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  const t = translations[lang].process;

  return (
    <section className="py-20 sm:py-28 bg-[#09090b] z-10 relative overflow-hidden border-b border-white/5" id="process">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/5 pb-8"
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
          <p className="text-xs sm:text-sm font-light text-zinc-400 max-w-md leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="theme-card p-8 sm:p-10 flex flex-col justify-between group"
            >
              <div>
                <div className="inline-block text-[10px] text-[#d8b485] font-bold tracking-widest font-mono bg-[#d8b485]/10 border border-[#d8b485]/30 rounded-xs mb-5 py-1 px-3 uppercase">
                  {step.num}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#d8b485] transition-colors">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm font-light text-zinc-400">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-mono text-zinc-500 flex items-center justify-between">
                <span>{step.time}</span>
                <span className="text-[#d8b485] font-semibold">{step.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal & Regulatory Footnote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 p-5 bg-[#0c0c0e] border border-white/5 rounded-xs"
        >
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={15} className="text-[#d8b485] shrink-0" />
            <span>{t.footnote}</span>
          </div>
          <a
            href="#faq"
            className="text-white hover:text-[#d8b485] flex items-center gap-1 font-bold text-[10px] tracking-wider uppercase mt-3 sm:mt-0 transition-colors"
          >
            <span>{t.footnoteLink}</span>
            <ArrowUpRight size={13} className="text-[#d8b485]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
