import React, { useState } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Truck,
  Radio,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Lock,
  Layers,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, translations } from '../translations';

interface CorePillarsSectionProps {
  onSelectPillar: (pillarTitle: string, budgetHint?: string) => void;
  lang: Language;
}

export const CorePillarsSection: React.FC<CorePillarsSectionProps> = ({
  onSelectPillar,
  lang,
}) => {
  const t = translations[lang].pillars;
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedSpecId, setExpandedSpecId] = useState<string | null>(null);

  const pillars = t.items;

  const filteredPillars =
    activeTab === 'all'
      ? pillars
      : pillars.filter((p) => p.id === activeTab);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'escrow':
        return <ShieldCheck className="text-emerald-400" size={24} />;
      case 'brokerage':
        return <TrendingUp className="text-cyan-400" size={24} />;
      case 'logistics':
        return <Truck className="text-amber-400" size={24} />;
      case 'telecom':
        return <Radio className="text-violet-400" size={24} />;
      default:
        return <Layers className="text-emerald-400" size={24} />;
    }
  };

  const getPillarColorTheme = (_id: string) => {
    return {
      border: 'hover:border-[#d8b485]/60',
      gradient: 'from-[#d8b485]/20 via-white/5 to-white/10',
      badgeBg: 'bg-[#d8b485]/10 text-[#d8b485] border-[#d8b485]/30',
      takeawayBg: 'bg-[#09090b] border-[#d8b485]/30 text-zinc-200',
      dot: 'bg-[#d8b485] shadow-[0_0_8px_rgba(216,180,133,0.8)]',
      btnBg: 'bg-[#d8b485] hover:bg-[#c2a277] text-zinc-950 font-bold uppercase tracking-widest',
    };
  };

  return (
    <section
      id="pillars"
      className="py-20 sm:py-32 bg-[#09090b] relative z-10 overflow-hidden border-b border-white/5"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#d8b485]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#d8b485]" />
            <p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
              {t.badge}
            </p>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-[1.12]">
            {t.heading}
          </h2>

          <div className="mt-4 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0c0c0e] border border-white/10 max-w-2xl mx-auto backdrop-blur-md shadow-sm transition-all duration-300 hover:border-[#d8b485]/40">
            <p className="text-xs sm:text-sm font-sans text-zinc-300 font-normal tracking-tight leading-snug text-center">
              {t.leadThesis}
            </p>
          </div>

          {/* Interactive Pillar Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8 sm:mt-10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xs text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#d8b485] text-zinc-950 font-bold shadow-md'
                  : 'bg-[#0c0c0e] text-zinc-400 hover:text-white border border-white/10 hover:border-[#d8b485]/40'
              }`}
            >
              {t.filterAll}
            </button>
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-3.5 py-2 rounded-xs text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === pillar.id
                    ? 'bg-white text-zinc-950 font-bold shadow-md'
                    : 'bg-[#0c0c0e] text-zinc-400 hover:text-white border border-white/10 hover:border-[#d8b485]/40'
                }`}
              >
                <span className="text-[#d8b485] font-mono">{pillar.number}</span>
                <span>{pillar.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPillars.map((pillar, index) => {
              const theme = getPillarColorTheme(pillar.id);
              const isSpecExpanded = expandedSpecId === pillar.id;

              return (
                <motion.div
                  key={pillar.id}
                  id={`pillar-${pillar.id}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative rounded-sm p-[1px] bg-gradient-to-b ${theme.gradient} transition-all duration-300 shadow-xl h-full flex flex-col`}
                >
                  <div className="p-7 sm:p-9 bg-[#0c0c0e] hover:bg-[#111114] transition-colors rounded-[1px] h-full flex flex-col justify-between relative z-10 border border-white/5 hover:border-[#d8b485]/40">
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xs bg-[#111114] border border-white/10 flex items-center justify-center text-[#d8b485] shadow-inner">
                            {getPillarIcon(pillar.id)}
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">
                              PILLAR {pillar.number}
                            </span>
                            <span
                              className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mt-1 ${theme.badgeBg}`}
                            >
                              {pillar.kicker}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-[#d8b485] bg-[#111114] border border-white/10 px-2 py-1 rounded-xs">
                          {pillar.number}
                        </span>
                      </div>

                      {/* Main Title & Investor Headline */}
                      <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-white/90 leading-snug mb-4 border-l-2 border-[#d8b485] pl-3">
                        {pillar.headline}
                      </p>

                      {/* Executive Summary */}
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        {pillar.summary}
                      </p>

                      {/* Strategic Capabilities */}
                      <div className="border-t border-white/10 pt-5 pb-5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center justify-between">
                          <span>
                            {lang === 'ar'
                              ? 'القدرات الاستراتيجية'
                              : 'Strategic Capabilities'}
                          </span>
                          <span className="text-neutral-400 text-[10px]">
                            {pillar.capabilities.length} Verified
                          </span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {pillar.capabilities.map((cap, capIdx) => (
                            <li
                              key={`${pillar.id}-cap-${capIdx}`}
                              className="text-xs text-neutral-200 flex items-start gap-2 font-mono leading-tight bg-neutral-900/50 p-2 rounded-xs border border-white/5"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${theme.dot}`}
                              />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Core Takeaway Quote Box */}
                      <div
                        className={`p-3.5 sm:p-4 rounded-sm border mb-6 relative overflow-hidden ${theme.takeawayBg}`}
                      >
                        <div className="text-[10px] font-mono uppercase tracking-wider opacity-75 mb-1 flex items-center gap-1.5">
                          <Sparkles size={11} />
                          <span>
                            {lang === 'ar'
                              ? 'الخلاصة الجوهرية للمستثمر'
                              : 'Investor Core Takeaway'}
                          </span>
                        </div>
                        <blockquote className="text-xs sm:text-sm font-semibold tracking-tight italic">
                          {pillar.takeaway}
                        </blockquote>
                      </div>
                    </div>

                    {/* Technical Specifications Expandable Drawer */}
                    <div>
                      {isSpecExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-neutral-950 border border-white/10 rounded-sm p-4 text-xs font-mono space-y-2 mb-4"
                        >
                          <div className="text-[11px] text-emerald-400 uppercase font-semibold border-b border-white/10 pb-1.5 mb-2 flex items-center justify-between">
                            <span>
                              {lang === 'ar'
                                ? 'المواصفات التقنية واتفاقية مستوى الخدمة'
                                : 'Technical Architecture & SLA Specs'}
                            </span>
                            <Lock size={11} className="text-neutral-400" />
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div>
                              <span className="text-neutral-400 block text-[9px] uppercase">
                                SLA Latency / Target
                              </span>
                              <span className="text-white">
                                {pillar.specDetails.sla}
                              </span>
                            </div>
                            <div>
                              <span className="text-neutral-400 block text-[9px] uppercase">
                                Protocol Architecture
                              </span>
                              <span className="text-white">
                                {pillar.specDetails.protocol}
                              </span>
                            </div>
                            <div>
                              <span className="text-neutral-400 block text-[9px] uppercase">
                                Regulatory Compliance
                              </span>
                              <span className="text-white">
                                {pillar.specDetails.compliance}
                              </span>
                            </div>
                            <div>
                              <span className="text-neutral-400 block text-[9px] uppercase">
                                Custody & Execution
                              </span>
                              <span className="text-white">
                                {pillar.specDetails.custodyOrLatency}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-white/10">
                        <button
                          onClick={() =>
                            onSelectPillar(
                              `${pillar.number}. ${pillar.title} (${pillar.kicker})`,
                              '10k+'
                            )
                          }
                          className={`w-full sm:w-2/3 py-3 px-4 rounded-xs text-xs font-mono font-semibold tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md ${theme.btnBg}`}
                        >
                          <span>{pillar.ctaText}</span>
                          <ArrowRight size={13} />
                        </button>

                        <button
                          onClick={() =>
                            setExpandedSpecId(isSpecExpanded ? null : pillar.id)
                          }
                          className="w-full sm:w-1/3 py-3 px-3 rounded-xs text-xs font-mono text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-white/10 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>
                            {isSpecExpanded ? t.closeSpecs : t.inspectSpecs}
                          </span>
                          {isSpecExpanded ? (
                            <ChevronUp size={12} />
                          ) : (
                            <ChevronDown size={12} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Multi-Pillar Cohesive Architecture Callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-sm bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Layers size={24} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                {lang === 'ar'
                  ? 'منظومة تشغيلية موحدة وشاملة'
                  : 'Unified Multi-Pillar Operating Fabric'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 max-w-2xl leading-relaxed">
                {lang === 'ar'
                  ? 'تتكامل ركائزنا الأربع بسلاسة: يضمن الضمان المالي الأمان الرأسمالي، وتوفر الوساطة السيولة، وترصد اللوجستيات الأصول، بينما تربط الاتصالات المنظومة بالكامل عبر واجهات برمجة فائقة السرعة.'
                  : 'Our four pillars operate synergistically: Escrow secures capital, Brokerage injects liquidity, Logistics tracks physical assets, and Telecom/Integration connects enterprise data via low-latency APIs.'}
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              onSelectPillar(
                lang === 'ar'
                  ? 'المنظومة المؤسسية الشاملة (جميع الركائز الأربع)'
                  : 'Full Multi-Pillar Enterprise Suite (All 4 Pillars)',
                '10k+'
              )
            }
            className="w-full md:w-auto flex-shrink-0 bg-white hover:bg-neutral-200 text-black text-xs font-mono font-semibold py-3.5 px-6 rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>
              {lang === 'ar'
                ? 'طلب تكامل المنظومة الكاملة'
                : 'Engage Multi-Pillar Suite'}
            </span>
            <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
