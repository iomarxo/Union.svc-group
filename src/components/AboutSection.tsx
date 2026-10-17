import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface AboutSectionProps {
  onExploreTech: () => void;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreTech, lang }) => {
  const t = translations[lang].about;
  const [activeTenet, setActiveTenet] = useState<number>(0);

  const tenetSpecs = [
    {
      sla: '< 45s Autonomous Match Latency',
      protocol: 'Predictive Heuristic Dispatch Engine',
      compliance: 'ISO 27001 / SOC 2 Type II',
      deployment: 'Edge Node Telemetry & Spot Rate Ingestion',
    },
    {
      sla: 'Zero Plaintext Exposure At Rest & In Transit',
      protocol: 'AES-256-GCM / Mutual TLS 1.3 / HSM Hardware Keys',
      compliance: 'FIPS 140-3 Cryptographic Boundary',
      deployment: 'Zero Trust Ephemeral Identity Tokens',
    },
    {
      sla: 'Bidirectional Sub-Second Event Streaming',
      protocol: 'Native OData RFC / REST Webhooks / GraphQL Federation',
      compliance: 'Certified for SAP S/4HANA, Oracle Cloud, MS Dynamics',
      deployment: 'Automated Dual-Write WMS & Ledger Ledger Sync',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative z-10 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs font-mono text-[#d8b485] tracking-widest uppercase mb-3">
            {t.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            <strong className="text-white font-semibold">Unionsvc Group</strong> is a leading logistics technology company empowering global supply chains through a secure, highly reliable digital brokerage platform. By combining predictive AI, end-to-end communication encryption, and seamless enterprise system integration, we deliver an unprecedented logistics and resource management experience for high-stakes industries and corporate sectors.
          </p>
        </motion.div>

        {/* Asymmetric Composition: Visual Operations Control + Interactive Architecture Dossier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12"
        >
          {/* Left Column (5 Cols): Operations Center Visual Anchor */}
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-white/10 relative min-h-[340px] lg:min-h-full flex flex-col justify-end group">
            <img
              src="/src/assets/images/control_tower_operations_1792232601649.jpg"
              alt="Unionsvc Group Global Control Operations Tower"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <div className="relative z-10 p-6 sm:p-7">
              <div className="text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-1">
                Global Operations Control Tower
              </div>
              <div className="text-base font-bold text-white mb-1">
                Mission-Critical Network Orchestration
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                Operating hubs: Tokyo · Berlin · London · Global
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Interactive Architecture Spec Dossier (Not repetitive cards!) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3">
            {t.pillars.map((pillar, idx) => {
              const isActive = activeTenet === idx;
              const spec = tenetSpecs[idx];

              return (
                <div
                  key={`pillar-${pillar.index}`}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'bg-[#0e0e16] border-[#d8b485]/40 shadow-lg'
                      : 'bg-[#0b0b10] border-white/[0.06] hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => setActiveTenet(idx)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-sm font-mono font-bold text-[#d8b485] mt-0.5 shrink-0">
                        {pillar.index}.
                      </span>
                      <div>
                        <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                          {pillar.highlight}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <ChevronDown
                        size={16}
                        className={`text-zinc-400 transition-transform duration-300 ${
                          isActive ? 'rotate-180 text-[#d8b485]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Architectural Specification Details */}
                  {isActive && (
                    <div className="px-6 pb-6 pt-1 border-t border-white/5 space-y-4 animate-fade-in">
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                        {pillar.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                        <div className="p-3 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-zinc-500 uppercase">Latency SLA</div>
                          <div className="text-zinc-200 mt-0.5">{spec.sla}</div>
                        </div>
                        <div className="p-3 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-zinc-500 uppercase">Cryptographic Protocol</div>
                          <div className="text-[#d8b485] mt-0.5">{spec.protocol}</div>
                        </div>
                        <div className="p-3 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-zinc-500 uppercase">Compliance Standard</div>
                          <div className="text-emerald-400 mt-0.5">{spec.compliance}</div>
                        </div>
                        <div className="p-3 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-zinc-500 uppercase">Deployment Model</div>
                          <div className="text-zinc-300 mt-0.5">{spec.deployment}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Quiet Footnote Rule */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-zinc-400">
            Engineered for high-stakes enterprise supply chains, aerospace, pharmaceuticals, and industrial manufacturing.
          </span>
          <button
            onClick={onExploreTech}
            className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold text-[#d8b485] hover:text-[#e4c9a7] transition-colors whitespace-nowrap"
          >
            <span>Explore Key Solutions & Tech Stack</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};
