import React from 'react';
import {
  TrendingUp,
  ShieldAlert,
  Coins,
  FileSpreadsheet,
  Download,
  Lock,
  ArrowUpRight,
  PieChart,
  BarChart4,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface InvestorSectionProps {
  onRequestInvestmentDeck: () => void;
  lang: Language;
}

export const InvestorSection: React.FC<InvestorSectionProps> = ({
  onRequestInvestmentDeck,
  lang,
}) => {
  const t = translations[lang].investors;

  return (
    <section id="investors" className="py-20 sm:py-28 relative z-10 border-t border-white/5 bg-[#0a0a0f] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#d8b485]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#d8b485] uppercase mb-4">
              <TrendingUp size={12} className="text-[#d8b485]" />
              {t.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light">
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={onRequestInvestmentDeck}
            className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] transition-all uppercase rounded shadow-[0_4px_20px_rgba(216,180,133,0.25)] hover:shadow-[0_8px_25px_rgba(216,180,133,0.4)] whitespace-nowrap self-start md:self-auto"
          >
            <Download size={14} />
            <span>{t.ctaButton}</span>
          </button>
        </div>

        {/* 3 Why Invest in Unionsvc Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.points.map((point, idx) => {
            const icons = [
              <BarChart4 key="0" size={24} className="text-[#d8b485]" />,
              <Coins key="1" size={24} className="text-emerald-400" />,
              <Lock key="2" size={24} className="text-cyan-400" />,
            ];

            return (
              <div
                key={`point-${idx}`}
                className="p-7 sm:p-8 rounded-xl bg-[#0e0e16] border border-white/10 hover:border-[#d8b485]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      {icons[idx]}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#d8b485] bg-[#d8b485]/10 px-2 py-0.5 rounded border border-[#d8b485]/20">
                      PILLAR {point.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#d8b485] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-6">
                    {point.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {point.highlight}
                  </span>
                  <span className="text-zinc-600 text-xs font-mono">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Investor Metrics Bar & Institutional Confidence Panel */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-[#101017] via-[#0d0d14] to-[#101017] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8b485]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8b485] block mb-2">
                Executive Overview
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                Institutional Expansion & Financial Architecture
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                Union|svc Group is building the mission-critical transport software and encrypted brokerage layer for Fortune 500 enterprises, high-volume manufacturers, and sovereign supply networks.
              </p>
              <button
                onClick={onRequestInvestmentDeck}
                className="cursor-pointer inline-flex items-center gap-2 text-xs font-mono font-bold text-[#d8b485] hover:text-[#fae5c5] transition-colors uppercase"
              >
                <span>Request Series A Data Room Access</span>
                <ArrowUpRight size={13} />
              </button>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
              {t.metrics.map((item, mIdx) => (
                <div
                  key={`metric-stat-${mIdx}`}
                  className="p-5 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#d8b485] font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {item.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
