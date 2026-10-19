import React from 'react';
import { Download, ArrowUpRight, TrendingUp, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';
import telematicsTransportImg from '../assets/images/telematics_transport_1792232621731.jpg';
import { InvestorApplicationForm } from './InvestorApplicationForm';

interface InvestorSectionProps {
  onRequestInvestmentDeck: () => void;
  lang: Language;
}

export const InvestorSection: React.FC<InvestorSectionProps> = ({
  onRequestInvestmentDeck,
  lang,
}) => {
  const t = translations[lang].investors;

  const financialComparison = [
    {
      metric: 'Gross Margin Profile',
      traditional: '8% - 14% (Asset Heavy)',
      unionsvc: '84% (Enterprise Software Layer)',
      advantage: 'Software-grade margin expansion',
    },
    {
      metric: 'Dispatch Latency',
      traditional: '2 - 6 Hours (Manual Brokerage)',
      unionsvc: '< 45 Seconds (Autonomous AI Matching)',
      advantage: 'Autonomous algorithmic throughput',
    },
    {
      metric: 'Data & Telemetry Security',
      traditional: 'Unencrypted Emails & Spreadsheets',
      unionsvc: 'AES-256-GCM / Mutual TLS 1.3 / HSM',
      advantage: 'Defense-grade sovereign compliance',
    },
    {
      metric: 'Enterprise Switching Barrier',
      traditional: 'Low (Commoditized Price Shopping)',
      unionsvc: 'High (Direct ERP S/4HANA & WMS Lock-in)',
      advantage: 'Formidable structural moat',
    },
  ];

  return (
    <section id="investors" className="py-16 sm:py-24 relative z-10 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-[#d8b485] tracking-widest uppercase mb-3">
              {t.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={onRequestInvestmentDeck}
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-xs font-semibold tracking-wide text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-98 transition-all rounded-lg whitespace-nowrap self-start md:self-auto shadow-sm w-full sm:w-auto"
          >
            <Download size={15} />
            <span>{t.ctaButton}</span>
          </button>
        </motion.div>

        {/* Institutional Financial Memo: Theses on Left + Comparative Unit Economics on Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14"
        >
          {/* Left Column (6 Cols): The 3 Strategic Theses */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {t.points.map((point, idx) => (
              <div
                key={`thesis-${idx}`}
                className="p-6 sm:p-7 rounded-xl bg-[#0e0e15] border border-white/[0.08] hover:border-white/15 transition-all"
              >
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                  <span className="text-xs font-mono font-bold text-[#d8b485]">
                    Investment Thesis 0{point.number}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {point.highlight}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-3">
                  {point.desc}
                </p>

                {/* Bullet-Point Economy: 3-5 words per bullet */}
                {point.bullets && point.bullets.length > 0 && (
                  <div className="space-y-1.5 pt-2.5 border-t border-white/5 font-mono text-xs">
                    {point.bullets.map((bullet, bIdx) => (
                      <div key={`point-b-${bIdx}`} className="flex items-center gap-2 text-zinc-300">
                        <CheckCircle2 size={13} className="text-[#d8b485] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column (6 Cols): Financial Ledger & Unit Economics Table */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-xl bg-[#0c0c12] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#d8b485] tracking-wider uppercase mb-1">
                Comparative Unit Economics & Moat Analysis
              </div>
              <h4 className="text-lg font-bold text-white mb-4">
                Traditional Freight Forwarding vs. Unionsvc Platform
              </h4>

              <div className="divide-y divide-white/[0.06] font-mono text-xs mb-6">
                {financialComparison.map((row, rIdx) => (
                  <div key={`comp-${rIdx}`} className="py-3.5 space-y-1.5">
                    <div className="text-zinc-200 font-semibold">{row.metric}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                      <div>
                        <span className="text-zinc-500 block">Traditional:</span>
                        <span className="text-zinc-400">{row.traditional}</span>
                      </div>
                      <div>
                        <span className="text-emerald-400 block">Unionsvc Group:</span>
                        <span className="text-white font-medium">{row.unionsvc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Key Financial Metrics (Visual Metric Callouts) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-4 border-t border-white/5 font-mono text-center">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-white tabular-nums">$4.2T</div>
                <div className="text-[10px] text-zinc-500 mt-0.5 uppercase">Global TAM</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-[#d8b485] tabular-nums">84%</div>
                <div className="text-[10px] text-zinc-500 mt-0.5 uppercase">Gross Margin</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-emerald-400 tabular-nums">138%</div>
                <div className="text-[10px] text-zinc-500 mt-0.5 uppercase">Net Retention</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-white tabular-nums">3.8x</div>
                <div className="text-[10px] text-zinc-500 mt-0.5 uppercase">YoY Growth</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commercial Transport Carrier Visual + Pitch Deck Callout */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#0c0c12] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
            <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/10 shrink-0">
              <img
                src={telematicsTransportImg}
                alt="Connected fleet transport"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Series A Confidential Financial Model & Institutional Pitch Deck
              </div>
              <div className="text-xs text-zinc-400 font-light mt-0.5">
                Access verified carrier audit logs, multi-tenant SaaS margin model, and capitalization structure.
              </div>
            </div>
          </div>

          <button
            onClick={onRequestInvestmentDeck}
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-lg text-xs font-semibold text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-98 transition-all whitespace-nowrap w-full md:w-auto shadow-sm"
          >
            <Download size={14} />
            <span>{t.ctaButton}</span>
          </button>
        </div>

        {/* High-Converting Enterprise-Grade Investor Application Form Section (Desktop & Mobile) */}
        <motion.div
          id="investor-application"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16"
        >
          <InvestorApplicationForm lang={lang} />
        </motion.div>
      </div>
    </section>
  );
};
