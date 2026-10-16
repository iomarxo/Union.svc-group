import React from 'react';
import { ShieldCheck, Cpu, Database, Network, ArrowRight, Lock, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface AboutSectionProps {
  onExploreTech: () => void;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreTech, lang }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 sm:py-28 relative z-10 border-t border-white/5 bg-[#09090b]">
      {/* Subtle background ambient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d8b485]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#d8b485] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8b485]" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {t.title}
          </h2>
          <div className="p-6 sm:p-8 rounded-lg bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 relative overflow-hidden backdrop-blur-md">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#d8b485]/10 rounded-full blur-2xl pointer-events-none" />
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-light">
              <strong className="text-white font-semibold">Unionsvc Group</strong> is a leading logistics technology company empowering global supply chains through a secure, highly reliable digital brokerage platform. By combining predictive AI, end-to-end communication encryption, and seamless enterprise system integration, we deliver an unprecedented logistics and resource management experience for high-stakes industries and corporate sectors.
            </p>
          </div>
        </div>

        {/* 3 Core Tenets Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.pillars.map((pillar, idx) => {
            const icons = [
              <Cpu key="0" size={24} className="text-[#d8b485]" />,
              <ShieldCheck key="1" size={24} className="text-emerald-400" />,
              <Network key="2" size={24} className="text-cyan-400" />,
            ];

            return (
              <div
                key={`pillar-${idx}`}
                className="p-6 sm:p-7 rounded-lg bg-[#0e0e14] border border-white/5 hover:border-[#d8b485]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      {icons[idx % icons.length]}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {pillar.highlight}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#d8b485] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>Standard 0{idx + 1}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check size={12} /> Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Network Visual Bar */}
        <div className="p-6 rounded-lg bg-[#0d0d12] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-[#d8b485]/10 border border-[#d8b485]/30 flex items-center justify-center shrink-0">
              <Lock size={22} className="text-[#d8b485]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Sovereign-Grade Supply Chain Resilience
              </div>
              <div className="text-xs text-zinc-400">
                Operating across North America, EMEA, and APAC with zero critical data leakage.
              </div>
            </div>
          </div>

          <button
            onClick={onExploreTech}
            className="cursor-pointer inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#d8b485] hover:text-[#ebd0ab] transition-colors uppercase whitespace-nowrap"
          >
            <span>Explore Solutions & Tech Stack</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
