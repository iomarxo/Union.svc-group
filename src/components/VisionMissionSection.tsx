import React, { useState } from 'react';
import {
  Compass,
  Target,
  Globe2,
  TrendingDown,
  Leaf,
  Layers,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  BarChart3,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface VisionMissionSectionProps {
  lang: Language;
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({ lang }) => {
  const t = translations[lang].visionMission;
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  return (
    <section className="py-20 sm:py-28 relative z-10 border-t border-white/5 bg-[#0a0a0e] overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#d8b485]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#d8b485] uppercase mb-4">
            <Sparkles size={12} className="text-[#d8b485]" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Vision & Mission Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Our Vision */}
          <div className="p-8 sm:p-10 rounded-xl bg-gradient-to-b from-[#111118] to-[#0c0c11] border border-white/10 hover:border-[#d8b485]/40 transition-all duration-300 relative group overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d8b485]/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-3 rounded-lg bg-[#d8b485]/10 border border-[#d8b485]/30 text-[#d8b485]">
                <Compass size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#d8b485] block">
                  Direction & Trajectory
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {t.visionLabel}
                </h3>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-zinc-100 font-light leading-relaxed mb-6 border-l-2 border-[#d8b485] pl-4">
              “{t.visionText}”
            </p>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Goal: Sovereign Neural Backbone</span>
              <span className="text-emerald-400">Pillar A01</span>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="p-8 sm:p-10 rounded-xl bg-gradient-to-b from-[#111118] to-[#0c0c11] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Target size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block">
                  Execution Mandate
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {t.missionLabel}
                </h3>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-zinc-100 font-light leading-relaxed mb-6 border-l-2 border-emerald-500 pl-4">
              “{t.missionText}”
            </p>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Outcome: Zero Capital Waste & Eco-Parity</span>
              <span className="text-[#d8b485]">Pillar A02</span>
            </div>
          </div>
        </div>

        {/* Societal & Economic Impact Sub-Section */}
        <div className="mt-8 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 mb-2">
                {t.impactLabel}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {t.impactTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              {t.impactSubtitle}
            </p>
          </div>

          {/* 3 Impact Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.impactItems.map((item, idx) => {
              const icons = [
                <TrendingDown key="0" size={22} className="text-[#d8b485]" />,
                <Leaf key="1" size={22} className="text-emerald-400" />,
                <Layers key="2" size={22} className="text-cyan-400" />,
              ];

              return (
                <div
                  key={`impact-${idx}`}
                  className="p-6 sm:p-7 rounded-xl bg-[#0e0e15] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded bg-white/5 border border-white/10">
                        {icons[idx]}
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-0.5">
                      {item.stat}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono">
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
