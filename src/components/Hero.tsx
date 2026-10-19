import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileText,
  ArrowUpRight,
  Shield,
  Activity,
  Radio,
  MapPin,
  Clock,
  Gauge,
  Cpu,
  Lock,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroNetworkCanvas } from './HeroNetworkCanvas';
import { Language, translations } from '../translations';

// High-fidelity image assets for real-time corridor telematics
import heroSmartLogisticsImg from '../assets/images/hero_smart_logistics_1792232602542.jpg';
import enterpriseDataNodeImg from '../assets/images/enterprise_data_node_1792232620653.jpg';
import telematicsTransportImg from '../assets/images/telematics_transport_1792232621731.jpg';

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

  // Interactive Live Corridor Manifest selector for the hero visual
  const [activeCorridor, setActiveCorridor] = useState<number>(0);

  // Live real-time streaming state
  const [packetCounter, setPacketCounter] = useState(9482104);
  const [etaSeconds, setEtaSeconds] = useState(9845); // ~02h 44m 05s
  const [progressPct, setProgressPct] = useState(78.4);
  const [liveLatency, setLiveLatency] = useState(8.4);
  const [liveSpeed, setLiveSpeed] = useState(864);
  const [telemetryPulse, setTelemetryPulse] = useState(false);
  const [liveVolume, setLiveVolume] = useState(4218940250); // Live $ value ticking

  const corridors = [
    {
      id: 'corridor-01',
      origin: 'Tokyo Hub (HND)',
      destination: 'Berlin Cargo Gateway (BER)',
      distance: '9,140 km',
      cipher: 'AES-256-GCM',
      status: 'In-Transit · Verified',
      baseLatency: 8.4,
      carrierNode: 'Carrier Node 041-JP',
      cargo: 'High-Precision Automotive Castings',
      gps: '35.681°N, 139.767°E',
      temp: '+4.2°C',
      image: heroSmartLogisticsImg,
      fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Automated smart logistics terminal in Tokyo Hub at twilight',
    },
    {
      id: 'corridor-02',
      origin: 'Rotterdam Port (RTM)',
      destination: 'Chicago Logistics Park (ORD)',
      distance: '6,680 km',
      cipher: 'TLS 1.3 / mTLS',
      status: 'Dispatched · Autonomous',
      baseLatency: 11.2,
      carrierNode: 'Carrier Node 118-EU',
      cargo: 'Pharma Cold-Chain Vaccines',
      gps: '51.924°N, 4.477°E',
      temp: '+3.8°C',
      image: enterpriseDataNodeImg,
      fallbackImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'High-tech cold-chain facility and encrypted intermodal terminal',
    },
    {
      id: 'corridor-03',
      origin: 'London Gateway (LHR)',
      destination: 'Singapore Changi (SIN)',
      distance: '10,870 km',
      cipher: 'AES-256-GCM',
      status: 'Synchronized · Zero Trust',
      baseLatency: 9.6,
      carrierNode: 'Carrier Node 209-UK',
      cargo: 'Aerospace Titanium Assemblies',
      gps: '51.507°N, -0.127°E',
      temp: '+18.5°C',
      image: telematicsTransportImg,
      fallbackImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Connected commercial avionics and aerospace transport fleet',
    },
  ];

  // Preload images for seamless instant switching
  useEffect(() => {
    corridors.forEach((c) => {
      const img = new Image();
      img.src = c.image;
    });
  }, []);

  const current = corridors[activeCorridor];

  // Real-time ticking loops: ETA countdown, packet increment, latency jitter, speed fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      // Countdown ETA
      setEtaSeconds((prev) => (prev > 1 ? prev - 1 : 9800));

      // Micro progression
      setProgressPct((prev) => +(prev < 99.8 ? prev + 0.01 : 78.4).toFixed(2));

      // Increment live transaction volume
      setLiveVolume((prev) => prev + Math.floor(Math.random() * 45) + 10);
    }, 1000);

    const telemetryInterval = setInterval(() => {
      // Fluctuate packet ID and pulse
      setPacketCounter((prev) => prev + 1);
      setTelemetryPulse(true);
      setTimeout(() => setTelemetryPulse(false), 400);

      // Jitter latency slightly (+/- 0.3ms)
      setLiveLatency(+(current.baseLatency + (Math.random() * 0.6 - 0.3)).toFixed(1));

      // Jitter ground/air speed
      setLiveSpeed(860 + Math.floor(Math.random() * 8));
    }, 2400);

    return () => {
      clearInterval(timer);
      clearInterval(telemetryInterval);
    };
  }, [current.baseLatency]);

  // Format ETA seconds into HH:MM:SS
  const formatEta = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden border-b border-white/[0.08]">
      {/* Interactive Network Particle Canvas */}
      <HeroNetworkCanvas />

      {/* Background Architectural Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#d8b485]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Real-time Streaming Ticker Badge */}
        <motion.div
          initial={{ opacity: 0, y: -6, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono text-[#d8b485] tracking-widest uppercase mb-6 flex flex-wrap items-center gap-2 sm:gap-3"
        >
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#d8b485]/10 border border-[#d8b485]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8b485] animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wider">LIVE TELEMETRY ACTIVE</span>
          </div>
          <span className="text-zinc-600 hidden xs:inline">·</span>
          <span className="text-[11px] sm:text-xs">{t.kicker}</span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="text-zinc-400 tabular-nums text-[11px] sm:text-xs">STREAM: 24/7/365</span>
        </motion.div>

        {/* 2-Column Split: Editorial Value Proposition & Bespoke Freight Manifest */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16">
          {/* Left Column (7 Cols): Headline, Subheadline, Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start text-left">
            <div>
              {/* Subtle Staggered Word Entrance for Hero Headline */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.035,
                      delayChildren: 0.08,
                    },
                  },
                }}
                style={{ textWrap: 'balance' }}
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.14] mb-5 sm:mb-6 font-sans flex flex-wrap gap-x-2 gap-y-1 break-words"
              >
                {t.headline.split(' ').map((word, i) => (
                  <motion.span
                    key={`hero-word-${word}-${i}`}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 12,
                        filter: 'blur(4px)',
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        transition: {
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtle upward drift and clarity entrance for Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.65, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed mb-4 sm:mb-5 max-w-2xl"
              >
                {t.subHeadline}
              </motion.p>

              {/* Bullet-Point Economy: Scannable 3-5 word value badges */}
              {t.bullets && t.bullets.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6 sm:mb-8"
                >
                  {t.bullets.map((bullet, idx) => (
                    <span
                      key={`hero-bullet-${idx}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      <CheckCircle2 size={13} className="text-[#d8b485] shrink-0" />
                      <span>{bullet}</span>
                    </span>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Tactile Action Button Group with Mobile Touch Accessibility (min 48px) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2"
            >
              <button
                onClick={onExploreSolutions}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-xs font-semibold tracking-wide text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-98 transition-all rounded-lg shadow-sm w-full sm:w-auto"
              >
                <span>{t.ctaExplore}</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={onRequestPitchDeck}
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-xs font-medium text-zinc-200 bg-white/5 hover:bg-white/10 active:scale-98 border border-white/10 hover:border-white/20 transition-all rounded-lg w-full sm:w-auto"
              >
                <FileText size={15} className="text-[#d8b485]" />
                <span>{t.ctaInvestor}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column (5 Cols): Bespoke Tactical Route Manifest + Full-Bleed Photograph with Live Scanline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col justify-between rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c11]"
          >
            {/* Top Interactive Corridor Selector Tabs with Real-Time Pulse */}
            <div className="p-3 bg-black/60 border-b border-white/10 backdrop-blur-md flex items-center justify-between gap-1 z-10 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-2 px-1 sm:px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
                  Active Corridors:
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {corridors.map((c, idx) => (
                  <button
                    key={`corridor-tab-${idx}`}
                    onClick={() => setActiveCorridor(idx)}
                    title={`View Corridor 0${idx + 1}: ${c.origin} → ${c.destination}`}
                    aria-label={`Select Corridor 0${idx + 1}`}
                    className={`min-h-[48px] min-w-[48px] px-3.5 py-2.5 text-xs font-mono rounded-lg transition-all cursor-pointer flex items-center justify-center font-bold active:scale-95 ${
                      activeCorridor === idx
                        ? 'bg-[#d8b485] text-zinc-950 border border-[#d8b485] shadow-[0_0_14px_rgba(216,180,133,0.45)] ring-2 ring-[#d8b485]/30'
                        : 'text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* High-Resolution Visual Background with Real-time Radar Scanline */}
            <div className="relative flex-1 min-h-[240px] sm:min-h-[280px] overflow-hidden group bg-zinc-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.imageAlt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (current.fallbackImage && target.src !== current.fallbackImage) {
                      target.src = current.fallbackImage;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c11] via-black/25 to-transparent pointer-events-none" />

              {/* Real-time Vertical Scanline Laser Beam */}
              <div
                className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d8b485] to-transparent pointer-events-none opacity-70 animate-scanline"
                style={{
                  boxShadow: '0 0 10px rgba(216, 180, 133, 0.8)',
                }}
              />

              {/* Floating Real-Time Packet Badge */}
              <div className="absolute top-3 left-3 z-10 font-mono text-[10px] px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 flex items-center gap-2">
                <Radio size={11} className={telemetryPulse ? 'text-emerald-400 scale-125' : 'text-[#d8b485]'} />
                <span className="text-zinc-300">PKT:</span>
                <span className="text-white font-bold tabular-nums">#{packetCounter}</span>
                <span className="text-emerald-400 text-[9px] uppercase font-bold">VERIFIED</span>
              </div>

              {/* Floating Real-Time GPS Tag */}
              <div className="absolute top-3 right-3 z-10 font-mono text-[10px] px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-zinc-300 tabular-nums">
                {current.gps}
              </div>

              {/* In-Transit Progress Bar with Glowing Edge */}
              <div className="absolute bottom-3 inset-x-3 z-10 p-2.5 rounded bg-black/75 backdrop-blur-md border border-white/10 font-mono">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Clock size={11} className="text-[#d8b485]" />
                    <span>ETA:</span>
                    <span className="text-white font-bold tabular-nums">{formatEta(etaSeconds)}</span>
                  </span>
                  <span className="text-[#d8b485] font-bold tabular-nums">{progressPct}% Traversed</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-[#d8b485]/60 via-[#d8b485] to-white rounded-full transition-all duration-300 relative"
                    style={{ width: `${progressPct}%` }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white shadow-[0_0_8px_#ffffff] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Live Flight / Freight Manifest Box */}
            <div className="p-5 sm:p-6 bg-[#0c0c11] border-t border-white/10 font-mono text-xs z-10">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Activity size={13} className="text-[#d8b485] animate-pulse" />
                  <span className="text-white font-semibold tracking-wide">
                    {current.origin} &rarr; {current.destination}
                  </span>
                </div>
                <span className="text-[#d8b485] text-[11px] font-medium tabular-nums">{current.distance}</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[10px] sm:text-xs mb-3">
                <div className="p-2 rounded bg-black/40 border border-white/5 min-w-0">
                  <div className="text-[9px] text-zinc-500 uppercase truncate">Velocity</div>
                  <div className="text-white font-medium tabular-nums truncate">{liveSpeed} km/h</div>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 min-w-0">
                  <div className="text-[9px] text-zinc-500 uppercase truncate">Latency</div>
                  <div className="text-emerald-400 font-medium tabular-nums truncate">{liveLatency}ms</div>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 min-w-0">
                  <div className="text-[9px] text-zinc-500 uppercase truncate">Thermal</div>
                  <div className="text-white font-medium tabular-nums truncate">{current.temp}</div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Shield size={11} className="text-emerald-400" />
                  <span>{current.carrierNode}</span>
                </div>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{current.status}</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Continuous Telemetry Ledger (Responsive Card Grid for Mobile & Desktop) */}
        <div className="pt-8 sm:pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Metric 1: Live Audited Volume */}
            <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
              <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white mb-1 tracking-tight flex items-baseline gap-1.5">
                <span>${(liveVolume / 1000000000).toFixed(2)}B</span>
                <span className="text-xs text-emerald-400 font-mono font-normal">▲ LIVE</span>
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-0.5">
                Freight Volume Secured
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                Continuous real-time settlement
              </div>
            </div>

            {/* Metric 2: Live Latency */}
            <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
              <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-emerald-400 mb-1 tracking-tight flex items-baseline gap-1.5">
                <span>{liveLatency}ms</span>
                <span className="text-xs text-zinc-400 font-mono font-normal">avg</span>
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-0.5">
                Telemetry Stream Latency
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                Sub-second event pipeline
              </div>
            </div>

            {/* Metric 3: Zero-Downtime SLA */}
            <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
              <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white mb-1 tracking-tight">
                99.999%
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-0.5">
                Zero-Downtime SLA
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                Multi-region active-active cluster
              </div>
            </div>

            {/* Metric 4: Endpoint Verification */}
            <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
              <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#d8b485] mb-1 tracking-tight flex items-center gap-1.5">
                <Shield size={20} className="text-[#d8b485] shrink-0" />
                <span>Zero Trust</span>
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-0.5">
                Endpoint Verification
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                Mutual TLS 1.3 & HSM attestation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
