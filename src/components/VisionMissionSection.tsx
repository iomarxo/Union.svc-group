import React, { useState } from 'react';
import { Compass, Target, TrendingDown, Leaf, Layers, Sliders } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface VisionMissionSectionProps {
  lang: Language;
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({ lang }) => {
  const t = translations[lang].visionMission;

  // Interactive Freight Volume Estimator (Loads per year)
  const [annualLoads, setAnnualLoads] = useState<number>(12500);

  // Calculated estimates
  // Average freight load cost ~$2,400; average OpEx savings ~18.5% with AI dispatch
  const estSavings = Math.round(annualLoads * 2400 * 0.185);
  // Average empty backhaul reduction: ~0.16 tons CO2e per load saved
  const estCo2Saved = Math.round(annualLoads * 0.38);
  // Empty runs eliminated: ~22% of total loads
  const estEmptyRuns = Math.round(annualLoads * 0.22);

  return (
    <section className="py-16 sm:py-24 relative z-10 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <div className="text-xs font-mono text-[#d8b485] tracking-widest uppercase mb-3">
            {t.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Vision & Mission Symmetrical Editorial Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Card 1: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-10 rounded-xl bg-[#0e0e15] border border-white/[0.08] flex flex-col justify-between hover:border-[#d8b485]/30 transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#d8b485]">
                  <Compass size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">
                    Strategic Destination
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {t.visionLabel}
                  </h3>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed mb-6">
                “{t.visionText}”
              </blockquote>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Goal: Sovereign Neural Backbone</span>
              <span className="text-white">Pillar 01</span>
            </div>
          </motion.div>

          {/* Card 2: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-xl bg-[#0e0e15] border border-white/[0.08] flex flex-col justify-between hover:border-emerald-500/30 transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                  <Target size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">
                    Operational Mandate
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {t.missionLabel}
                  </h3>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed mb-6">
                “{t.missionText}”
              </blockquote>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Mandate: Zero Waste & Parity</span>
              <span className="text-white">Pillar 02</span>
            </div>
          </motion.div>
        </div>

        {/* Societal & Economic Impact: 3 Concrete Proof Pillars with Staggered Entrance */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-8"
          >
            <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2">
              {t.impactKicker}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t.impactTitle}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              {t.impactSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.impactItems.map((item, idx) => (
              <motion.div
                key={`impact-col-${idx}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 sm:p-7 rounded-xl bg-[#0c0c11] border border-white/[0.07] flex flex-col justify-between hover:border-white/15 transition-all shadow-md group"
              >
                <div>
                  <div className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider mb-2">
                    {item.category}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white mb-1 group-hover:text-[#d8b485] transition-colors">
                    {item.stat}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    {item.statLabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Macro ROI & Carbon Savings Estimator with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 rounded-xl bg-[#0e0e15] border border-white/[0.08] shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-1">
                <Sliders size={13} />
                <span>{t.simulator.title}</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Simulate Operational Scale & Carbon Footprint Abatement
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                {t.simulator.desc}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400">
                {t.simulator.sliderLabel}:
              </span>
              <span className="text-sm font-mono font-bold text-white bg-white/5 px-3 py-1 rounded border border-white/10 tabular-nums">
                {annualLoads.toLocaleString()} {t.simulator.unit}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <div className="py-3 min-h-[48px] flex items-center">
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={annualLoads}
                onChange={(e) => setAnnualLoads(Number(e.target.value))}
                className="w-full accent-[#d8b485] h-2 bg-zinc-800 rounded-lg cursor-pointer"
                aria-label="Annual freight loads slider"
              />
            </div>
            <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-zinc-500 mt-1 flex-wrap gap-1">
              <span>1k (Regional)</span>
              <span className="hidden xs:inline">25k (Mid-Tier)</span>
              <span>50k+ (Enterprise)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mb-1">
                {t.simulator.costSavings}
              </div>
              <div className="text-2xl font-bold text-white tabular-nums">
                ${(estSavings / 1000000).toFixed(2)}M
              </div>
              <div className="text-[10px] text-emerald-400 mt-1">
                ~18.5% Net Freight Efficiency
              </div>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mb-1">
                {t.simulator.co2Reduced}
              </div>
              <div className="text-2xl font-bold text-white tabular-nums">
                {estCo2Saved.toLocaleString()} t
              </div>
              <div className="text-[10px] text-zinc-400 mt-1">
                Verified GHG Scope 3 Abatement
              </div>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mb-1">
                {t.simulator.emptyRunsSaved}
              </div>
              <div className="text-2xl font-bold text-white tabular-nums">
                {estEmptyRuns.toLocaleString()}
              </div>
              <div className="text-[10px] text-[#d8b485] mt-1">
                Automated Return Matching
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
