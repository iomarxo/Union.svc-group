import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Shield,
  Lock,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  FileText,
  Network,
  Radio,
  Server,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface HeroProps {
  onExploreSolutions: () => void;
  onRequestPitchDeck: () => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSolutions,
  onRequestPitchDeck,
  lang,
}) => {
  const t = translations[lang].hero;

  // Real-time simulated telemetry ticks for high-tech fidelity
  const [telemetryTick, setTelemetryTick] = useState(0);
  const [livePackets, setLivePackets] = useState<
    { id: string; origin: string; dest: string; cipher: string; latency: string; status: string }[]
  >([
    { id: 'PKT-9041', origin: 'Tokyo Hub', dest: 'Berlin Gateway', cipher: 'AES-256-GCM', latency: '9ms', status: 'VERIFIED' },
    { id: 'PKT-9042', origin: 'Rotterdam Port', dest: 'Chicago Cargo Hub', cipher: 'TLS 1.3 / mTLS', latency: '14ms', status: 'IN-TRANSIT' },
    { id: 'PKT-9043', origin: 'London Central', dest: 'Singapore Gateway', cipher: 'AES-256-GCM', latency: '11ms', status: 'VERIFIED' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryTick((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      {/* Dynamic Background Network Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#d8b485]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Decorative Network Grid lines */}
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top Intelligence Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d8b485] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d8b485]" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
            {t.badge}
          </span>
        </motion.div>

        {/* Headline & Subtitle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Headline, Sub-Headline, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              <span className="text-white">Redefining Smart Logistics </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b485] via-[#edd8bb] to-[#d8b485]">
                Through Encrypted Communications
              </span>{' '}
              <span className="text-white">and Advanced Tech Integration.</span>
            </motion.h1>

            {/* Sub-Headline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 max-w-2xl"
            >
              <strong className="text-white font-semibold">Unionsvc Group</strong> delivers the next generation of digital freight forwarding and logistics brokerage for enterprises and large corporations—powered by artificial intelligence, end-to-end encryption, and ultra-high reliability to secure and manage complete supply chains.
            </motion.p>

            {/* CTA Buttons: Explore Solutions | Investor Pitch Deck */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={onExploreSolutions}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] transition-all uppercase rounded shadow-[0_4px_24px_rgba(216,180,133,0.3)] hover:shadow-[0_8px_30px_rgba(216,180,133,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.ctaExplore}</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={onRequestPitchDeck}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#d8b485]/50 transition-all uppercase rounded backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 font-mono"
              >
                <FileText size={15} className="text-[#d8b485]" />
                <span>{t.ctaInvestor}</span>
              </button>
            </motion.div>

            {/* Quick Micro-Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono border-t border-white/10 pt-6 w-full">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-emerald-400" />
                <span>AES-256 / TLS 1.3 End-to-End</span>
              </div>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-[#d8b485]" />
                <span>Autonomous Predictive AI Matching</span>
              </div>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Server size={14} className="text-cyan-400" />
                <span>Zero-Downtime 99.999% SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry HUD & Interactive Architecture Stream */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#0e0e13]/90 border border-white/10 rounded-lg p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Circuit lines gradient header */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d8b485] to-transparent opacity-75" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Activity size={15} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                      {t.telemetryTitle}
                    </h3>
                    <p className="text-[10px] font-mono text-zinc-500">Live Encrypted Stream</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ONLINE
                </span>
              </div>

              {/* Status metrics grid */}
              <div className="grid grid-cols-2 gap-3 mb-4 font-mono">
                <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Active Telemetry Nodes</span>
                    <Radio size={11} className="text-[#d8b485]" />
                  </div>
                  <div className="text-lg font-bold text-white">4,820</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 size={10} /> 100% Zero Trust Verified
                  </div>
                </div>

                <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Cryptographic SLA</span>
                    <Lock size={11} className="text-cyan-400" />
                  </div>
                  <div className="text-lg font-bold text-white">99.999%</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">
                    Zero-Downtime Pipeline
                  </div>
                </div>
              </div>

              {/* Simulated Live Encrypted Stream Feed */}
              <div className="space-y-2 mb-4 font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase pb-1 border-b border-white/5">
                  <span>Packet Routing</span>
                  <span>Encryption Standard</span>
                  <span>Latency</span>
                </div>
                {livePackets.map((pkt, idx) => (
                  <div
                    key={`${pkt.id}-${idx}-${telemetryTick}`}
                    className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between transition-colors hover:border-[#d8b485]/40"
                  >
                    <div>
                      <div className="text-[11px] font-semibold text-zinc-200">
                        {pkt.origin} &rarr; {pkt.dest}
                      </div>
                      <div className="text-[9px] text-zinc-500">{pkt.id} • Verified Handshake</div>
                    </div>
                    <div className="text-center">
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#d8b485]/10 text-[#d8b485] border border-[#d8b485]/20 font-mono">
                        {pkt.cipher}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-emerald-400 font-mono">{pkt.latency}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ERP Unified Integration Bar */}
              <div className="p-3 rounded bg-gradient-to-r from-white/[0.02] to-white/[0.05] border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Network size={14} className="text-[#d8b485]" />
                  <span className="text-zinc-300 font-mono text-[11px]">
                    Unified API Sync: <strong className="text-white">SAP / Oracle / MS Dynamics</strong>
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                  SYNCHRONIZED
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Bottom Metric Callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10"
        >
          {t.metrics.map((metric, idx) => (
            <div
              key={`metric-${idx}`}
              className="p-4 sm:p-5 rounded bg-[#0d0d12]/60 border border-white/5 hover:border-[#d8b485]/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#d8b485] mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-light">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
