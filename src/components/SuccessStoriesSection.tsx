import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
  Lock,
  Cpu,
  Clock,
  Radio,
  FileText,
} from 'lucide-react';
import { Language } from '../translations';

export interface CaseStudy {
  id: string;
  industry: string;
  clientTitle: string;
  corridor: string;
  challenge: string;
  solution: string;
  quantifiedImpact: {
    primaryStat: string;
    primaryLabel: string;
    secondaryStat: string;
    secondaryLabel: string;
    tertiaryStat: string;
    tertiaryLabel: string;
  };
  liveOperationalStatus: {
    activeLoads: number;
    latency: string;
    compliance: string;
    lastTelemetrySync: string;
  };
  hoverDetails: {
    cryptography: string;
    erpIntegration: string;
    esgReduction: string;
    carrierNode: string;
  };
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'automotive-oem',
    industry: 'Global Automotive Manufacturing',
    clientTitle: 'Tier-1 Trans-Eurasian Automotive Conglomerate',
    corridor: 'Tokyo Hub (HND) &rarr; Berlin Gateway (BER)',
    challenge:
      'Fragmented carrier communications and lack of real-time encrypted telemetry across multimodal routes caused chronic Just-In-Time component shortages, risking $14M in factory line downtime.',
    solution:
      'Deployed Union|svc Group’s autonomous predictive AI dispatch engine and Zero Trust telemetry gateway across 480 carrier nodes, integrating directly into SAP S/4HANA for automated dual-write synchronization.',
    quantifiedImpact: {
      primaryStat: '-94%',
      primaryLabel: 'Dispatch Latency Reduction',
      secondaryStat: '$4.2M',
      secondaryLabel: 'Annual OpEx Saved',
      tertiaryStat: 'Zero',
      tertiaryLabel: 'Assembly Line Stoppages',
    },
    liveOperationalStatus: {
      activeLoads: 18,
      latency: '8.4ms',
      compliance: 'ISO 27001 / FIPS 140-3',
      lastTelemetrySync: 'Just now',
    },
    hoverDetails: {
      cryptography: 'AES-256-GCM / Mutual TLS 1.3 hardware HSM attestation',
      erpIntegration: 'SAP S/4HANA OData RFC bidirectional dual-write',
      esgReduction: '-18.4% Scope 3 empty backhaul emissions',
      carrierNode: 'Carrier Fleet Cluster 041-JP / 014-EU',
    },
    image: '/src/assets/images/telematics_transport_1792232621731.jpg',
  },
  {
    id: 'biopharma-coldchain',
    industry: 'Pharmaceutical & BioTech',
    clientTitle: 'Multinational Clinical Vaccines & Cold-Chain Network',
    corridor: 'Rotterdam Port (RTM) &rarr; Chicago Intermodal (ORD)',
    challenge:
      'Severe thermal excursion risk during air-to-ground intermodal transfers threatened high-value temperature-sensitive vaccine batches, compounded by unencrypted transit paper logs.',
    solution:
      'Implemented continuous cryptographic IoT thermal monitoring with FIPS-140-3 boundary hardware sensors, automated tamper seals, and sub-second anomaly notifications.',
    quantifiedImpact: {
      primaryStat: '100%',
      primaryLabel: 'Batch Integrity Preserved',
      secondaryStat: '38,000+',
      secondaryLabel: 'Clinical Manifests Tracked',
      tertiaryStat: '-28%',
      tertiaryLabel: 'Freight Insurance Premiums',
    },
    liveOperationalStatus: {
      activeLoads: 12,
      latency: '11.2ms',
      compliance: 'FDA 21 CFR Part 11 & EMA Annex 11',
      lastTelemetrySync: '3s ago',
    },
    hoverDetails: {
      cryptography: 'Continuous +/- 0.2°C thermal attestation with RSA-4096 signature',
      erpIntegration: 'Oracle Cloud SCM real-time webhook event pipeline',
      esgReduction: '-22.8% cold-chain transit waste elimination',
      carrierNode: 'Carrier Node 118-EU (Pharma Certified)',
    },
    image: '/src/assets/images/enterprise_data_node_1792232620653.jpg',
  },
  {
    id: 'aerospace-defense',
    industry: 'Aerospace & Sovereign Logistics',
    clientTitle: 'Global Commercial Avionics & Defense Supplier',
    corridor: 'London Corporate (LHR) &rarr; Singapore Changi (SIN)',
    challenge:
      'Classified avionics shipments required strict sovereign defense compliance, Zero Trust cryptographic protection against interception, and instant automated documentation.',
    solution:
      'Implemented Unionsvc Group’s automated eBOL smart contracts, end-to-end encrypted dispatch workflows, and real-time biometric escort telemetry authentication.',
    quantifiedImpact: {
      primaryStat: '99.4%',
      primaryLabel: 'Manual Paperwork Eliminated',
      secondaryStat: '< 45s',
      secondaryLabel: 'Automated Match Latency',
      tertiaryStat: 'Zero',
      tertiaryLabel: 'Plaintext Data Interception Risk',
    },
    liveOperationalStatus: {
      activeLoads: 7,
      latency: '9.6ms',
      compliance: 'SOC 2 Type II / Sovereign ITAR Boundary',
      lastTelemetrySync: '1s ago',
    },
    hoverDetails: {
      cryptography: 'Zero Trust Ephemeral Identity Tokens & HSM root of trust',
      erpIntegration: 'Direct REST Webhooks with Microsoft Dynamics 365',
      esgReduction: '-16.7% fuel burn via AI route altitude optimization',
      carrierNode: 'Carrier Node 209-UK / Escort Protocol',
    },
    image: '/src/assets/images/control_tower_operations_1792232601649.jpg',
  },
  {
    id: 'semiconductor-high-tech',
    industry: 'High-Tech & Semiconductor',
    clientTitle: 'APAC Semiconductor Fabrication & Assembly Core',
    corridor: 'Tokyo Hub (HND) &rarr; Singapore Hub (SIN)',
    challenge:
      'High seasonal port congestion and 26% empty return container runs created massive freight cost volatility and delayed delivery of critical micro-wafers to assembly lines.',
    solution:
      'Leveraged predictive AI capacity matching to pool regional freight demands and dynamically lock reverse-corridor carrier commitments in real time.',
    quantifiedImpact: {
      primaryStat: '+24.1%',
      primaryLabel: 'Empty Backhaul Utilization',
      secondaryStat: '¥640M',
      secondaryLabel: 'Annual Logistics Waste Averted',
      tertiaryStat: '2,180t',
      tertiaryLabel: 'Verified CO2e Abated',
    },
    liveOperationalStatus: {
      activeLoads: 24,
      latency: '6.8ms',
      compliance: 'ISO 14064 Scope 3 Certified',
      lastTelemetrySync: 'Just now',
    },
    hoverDetails: {
      cryptography: 'Mutual TLS 1.3 with AES-256-GCM authenticated payload',
      erpIntegration: 'SAP NetWeaver RFC & Cloud Connector integration',
      esgReduction: '94.6% reverse return backhaul fill rate achieved',
      carrierNode: 'Carrier Node 087-SG / 094-JP',
    },
    image: '/src/assets/images/hero_smart_logistics_1792232602542.jpg',
  },
];

interface SuccessStoriesSectionProps {
  lang: Language;
  onRequestDemo: () => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({
  lang,
  onRequestDemo,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto cycle through case studies when not actively hovered
  useEffect(() => {
    if (!isAutoCycling || hoveredCardId !== null) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoCycling, hoveredCardId]);

  const handleNext = () => {
    setIsAutoCycling(false);
    setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    setIsAutoCycling(false);
    setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <section id="case-studies" className="py-20 sm:py-28 relative z-10 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="text-xs font-mono text-[#d8b485] tracking-widest uppercase mb-3 flex items-center gap-2">
              <Sparkles size={13} className="text-[#d8b485]" />
              <span>Verified Enterprise Deployments · Production Evidence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Logistics Success Stories
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Explore how leading aerospace, pharmaceutical, and automotive enterprises secure multi-billion dollar supply chain operations using Union|svc Group’s encrypted brokerage ecosystem.
            </p>
          </motion.div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-3 font-mono text-xs self-start md:self-auto">
            <span className="text-zinc-500 text-[11px] tabular-nums">
              0{activeIndex + 1} / 0{CASE_STUDIES.length}
            </span>

            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/5 border border-white/10">
              <button
                onClick={handlePrev}
                className="p-2 rounded bg-black/40 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Previous Case Study"
                aria-label="Previous Case Study"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded bg-black/40 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Next Case Study"
                aria-label="Next Case Study"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Viewport with Hover-Activated Details */}
        <div ref={containerRef} className="relative overflow-hidden mb-10">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] gap-6"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {CASE_STUDIES.map((study) => {
              const isHovered = hoveredCardId === study.id;

              return (
                <div
                  key={study.id}
                  onMouseEnter={() => setHoveredCardId(study.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="w-full shrink-0 rounded-xl bg-[#0c0c12] border border-white/[0.08] hover:border-[#d8b485]/40 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col lg:flex-row group"
                >
                  {/* Left Column (5 Cols on Desktop): Visual Showcase & Real-Time Operational HUD */}
                  <div className="lg:w-5/12 relative min-h-[280px] lg:min-h-full flex flex-col justify-between p-6 sm:p-7 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.clientTitle}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />

                    {/* Top Tag: Industry & Real-time Active Pulse */}
                    <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                      <span className="text-[11px] font-bold text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-md border border-white/15 uppercase">
                        {study.industry}
                      </span>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/15 text-emerald-400 text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE IN-TRANSIT</span>
                      </div>
                    </div>

                    {/* Bottom Floating Tactical Metrics HUD */}
                    <div className="relative z-10 p-4 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 font-mono text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px]">
                        <span className="text-zinc-400">Active Pipeline Corridor:</span>
                        <span className="text-white font-bold" dangerouslySetInnerHTML={{ __html: study.corridor }} />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div>
                          <span className="text-zinc-500 block uppercase">Transit Telemetry</span>
                          <span className="text-emerald-400 font-bold tabular-nums">
                            {study.liveOperationalStatus.latency} latency
                          </span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block uppercase">Active In-Flight Loads</span>
                          <span className="text-white font-bold tabular-nums">
                            {study.liveOperationalStatus.activeLoads} Convoys Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (7 Cols on Desktop): Challenge, Solution & Hover-Activated Deep Ledger */}
                  <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between bg-[#0e0e16]">
                    <div>
                      {/* Client Wordmark & Corridor Header */}
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="text-[#d8b485] uppercase tracking-wider">
                          Enterprise Implementation Brief
                        </span>
                        <span className="text-zinc-400 text-[11px]">
                          Compliance: {study.liveOperationalStatus.compliance}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                        {study.clientTitle}
                      </h3>

                      {/* Challenge & Solution Dossier */}
                      <div className="space-y-4 mb-6">
                        <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                          <div className="text-[11px] font-mono font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <Lock size={12} />
                            <span>The Enterprise Challenge</span>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                          <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <ShieldCheck size={12} />
                            <span>The Unionsvc Group Solution</span>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* 3 Concrete Quantified Metrics Strip */}
                      <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-[#0c0c11] border border-white/5 font-mono text-center mb-6">
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                            {study.quantifiedImpact.primaryStat}
                          </div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">
                            {study.quantifiedImpact.primaryLabel}
                          </div>
                        </div>

                        <div className="border-x border-white/5">
                          <div className="text-xl sm:text-2xl font-bold text-[#d8b485] tabular-nums">
                            {study.quantifiedImpact.secondaryStat}
                          </div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">
                            {study.quantifiedImpact.secondaryLabel}
                          </div>
                        </div>

                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">
                            {study.quantifiedImpact.tertiaryStat}
                          </div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">
                            {study.quantifiedImpact.tertiaryLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover-Activated Architecture Drawer */}
                    <div className="pt-4 border-t border-white/5">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-[#d8b485]">
                          <Cpu size={12} />
                          <span>Hover Details · Architecture Specifications:</span>
                        </span>
                        <span className="text-[10px] text-zinc-500">Live Telemetry Synchronized</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        <div className="p-2.5 rounded bg-black/60 border border-white/5">
                          <span className="text-[10px] text-zinc-500 block uppercase">Cryptographic Layer:</span>
                          <span className="text-zinc-200 text-[11px] font-medium">{study.hoverDetails.cryptography}</span>
                        </div>

                        <div className="p-2.5 rounded bg-black/60 border border-white/5">
                          <span className="text-[10px] text-zinc-500 block uppercase">ERP Integration:</span>
                          <span className="text-emerald-400 text-[11px] font-medium">{study.hoverDetails.erpIntegration}</span>
                        </div>

                        <div className="p-2.5 rounded bg-black/60 border border-white/5">
                          <span className="text-[10px] text-zinc-500 block uppercase">Scope 3 Abatement:</span>
                          <span className="text-zinc-300 text-[11px] font-medium">{study.hoverDetails.esgReduction}</span>
                        </div>

                        <div className="p-2.5 rounded bg-black/60 border border-white/5">
                          <span className="text-[10px] text-zinc-500 block uppercase">Carrier Allocation:</span>
                          <span className="text-[#d8b485] text-[11px] font-medium">{study.hoverDetails.carrierNode}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators & Schedule Walkthrough Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={`indicator-${i}`}
                onClick={() => {
                  setIsAutoCycling(false);
                  setActiveIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? 'w-8 bg-[#d8b485]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to case study ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={onRequestDemo}
            className="cursor-pointer inline-flex items-center gap-2 text-xs font-semibold text-[#d8b485] hover:text-[#ebd1b0] transition-colors font-mono"
          >
            <span>Request In-Depth Technical Case Study & Architecture Blueprint</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};
