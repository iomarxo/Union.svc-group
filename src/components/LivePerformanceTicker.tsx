import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  ShieldCheck,
  Server,
  Zap,
  Radio,
  Lock,
  Pause,
  Play,
  CheckCircle2,
  TrendingUp,
  Clock,
  Cpu,
  Wifi,
} from 'lucide-react';
import { Language, translations } from '../translations';

interface LivePerformanceTickerProps {
  lang: Language;
}

interface TelemetryEvent {
  id: string;
  timestamp: string;
  category: 'CIPHER' | 'ERP' | 'TELEMETRY' | 'SECURITY';
  message: string;
  status: 'VERIFIED' | 'COMMITTED' | 'BLOCKED';
}

export const LivePerformanceTicker: React.FC<LivePerformanceTickerProps> = ({ lang }) => {
  const t = translations[lang].ticker;

  // Real-time simulated metrics state
  const [isPlaying, setIsPlaying] = useState(true);
  const [transactions, setTransactions] = useState(1849320);
  const [activeNodes, setActiveNodes] = useState(4824);
  const [incidentsBlocked, setIncidentsBlocked] = useState(142894);
  const [latency, setLatency] = useState(11.2);
  const [throughput, setThroughput] = useState(42.8);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [pulseMetric, setPulseMetric] = useState<string | null>(null);

  // Live streaming log queue
  const [eventLog, setEventLog] = useState<TelemetryEvent[]>([
    {
      id: 'evt-1',
      timestamp: 'Just now',
      category: 'CIPHER',
      message: 'Dispatched payload #USVC-9912 verified with AES-256-GCM',
      status: 'VERIFIED',
    },
    {
      id: 'evt-2',
      timestamp: '3s ago',
      category: 'ERP',
      message: 'SAP S/4HANA OData bidirectional dual-write commit verified',
      status: 'COMMITTED',
    },
    {
      id: 'evt-3',
      timestamp: '7s ago',
      category: 'SECURITY',
      message: 'Zero Trust endpoint handshake validated for Tokyo Hub 041-JP',
      status: 'VERIFIED',
    },
  ]);

  // Live real-time clock ticker
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setCurrentTime(d.toISOString().slice(11, 19) + ' UTC');
    };
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // Simulated live telemetry stream ticks
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      // Transactions increment by 1-4
      setTransactions((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setPulseMetric('tx');
      setTimeout(() => setPulseMetric(null), 500);

      // Incidents increment occasionally
      if (Math.random() > 0.55) {
        setIncidentsBlocked((prev) => prev + 1);
      }

      // Latency micro-variance between 10.8ms and 11.6ms
      setLatency(+(11 + (Math.random() * 0.6 - 0.3)).toFixed(1));

      // Throughput micro-variance
      setThroughput(+(42 + Math.random() * 2.2).toFixed(1));

      // Active nodes occasionally update
      if (Math.random() > 0.8) {
        setActiveNodes((prev) => (prev > 4830 ? 4824 : prev + 1));
      }

      // Generate a new live event
      const eventPool: Omit<TelemetryEvent, 'id' | 'timestamp'>[] = [
        {
          category: 'CIPHER',
          message: `Riyadh Sovereign Hub: AES-256-GCM payload dispatched to Cairo Gateway (KSA SAMA HSM Sealed)`,
          status: 'VERIFIED',
        },
        {
          category: 'TELEMETRY',
          message: `Cairo Gateway &rarr; Accra Terminal corridor: 18.5t MedTech batch in-transit across AfCFTA airway`,
          status: 'COMMITTED',
        },
        {
          category: 'ERP',
          message: `Accra Atlantic Terminal: Blockchain Bill of Lading cryptographic signature committed to SAP S/4HANA`,
          status: 'COMMITTED',
        },
        {
          category: 'CIPHER',
          message: `Mutual TLS 1.3 handshake re-keyed for Carrier Node 041-JP`,
          status: 'VERIFIED',
        },
        {
          category: 'ERP',
          message: `Oracle Cloud SCM shipment webhook acknowledged in 8.9ms`,
          status: 'COMMITTED',
        },
        {
          category: 'SECURITY',
          message: `Tamper attempt blocked on IoT cold-chain sensor #SN-88210 (HSM hardware boundary)`,
          status: 'BLOCKED',
        },
        {
          category: 'TELEMETRY',
          message: `Offline mobile batch reconciled from Riyadh-Dubai sovereign corridor`,
          status: 'COMMITTED',
        },
        {
          category: 'ERP',
          message: `Microsoft Dynamics 365 eBOL cryptographic manifest sealed`,
          status: 'VERIFIED',
        },
        {
          category: 'CIPHER',
          message: `AES-256-GCM authenticated payload dispatched to Tokyo Hub (HND)`,
          status: 'VERIFIED',
        },
      ];

      const newSample = eventPool[Math.floor(Math.random() * eventPool.length)];
      const newEvt: TelemetryEvent = {
        id: `evt-${Date.now()}`,
        timestamp: 'Just now',
        ...newSample,
      };

      setEventLog((prev) => [newEvt, prev[0], prev[1]]);
    }, 2400);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative z-20 border-b border-white/[0.08] bg-[#08080b] py-8 sm:py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Top Control Bar: Header & Live Feed Synchronizer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#d8b485] relative shrink-0">
              <Activity size={16} className={isPlaying ? 'animate-pulse' : ''} />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#d8b485] uppercase tracking-wider flex-wrap">
                <span>{t.kicker}</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-400 font-bold tabular-nums">{currentTime}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {t.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto flex-wrap">
            {/* Live Throughput Gauge */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-zinc-300">
              <Wifi size={13} className="text-cyan-400" />
              <span className="text-zinc-500 text-[10px] uppercase">Throughput:</span>
              <span className="text-white font-bold tabular-nums">{throughput} Gbps</span>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-2 min-h-[48px] rounded-lg bg-black/60 border border-white/10 text-xs font-mono">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlaying ? 'bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className="text-zinc-200 text-[11px] font-medium">
                {isPlaying ? t.liveStatus : t.pausedStatus}
              </span>
            </div>

            {/* Pause / Resume Button with Touch Target (min 48x48px) */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-zinc-300 hover:text-white transition-all shrink-0"
              title={isPlaying ? t.pauseTooltip : t.resumeTooltip}
              aria-label={isPlaying ? t.pauseTooltip : t.resumeTooltip}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>

        {/* High-Density Telemetry Ticker Ledger (Responsive Grid for Mobile & Desktop) - Calm & Steady */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {/* 1. Transactions Processed */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#0c0c11] border border-white/[0.06] flex flex-col justify-between relative overflow-hidden group hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="truncate pr-1">{t.transactionsLabel}</span>
              <TrendingUp size={13} className="text-[#d8b485] shrink-0" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums tracking-tight flex items-baseline gap-1">
              <span>{transactions.toLocaleString()}</span>
            </div>
            <div className="text-[10px] text-zinc-500 font-mono mt-2 pt-2 border-t border-white/5 truncate flex items-center justify-between">
              <span>{t.transactionsDetail}</span>
              <span className="text-emerald-400 font-bold">● LIVE</span>
            </div>
          </div>

          {/* 2. Active Nodes */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#0c0c11] border border-white/[0.06] flex flex-col justify-between group hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="truncate pr-1">{t.nodesLabel}</span>
              <Radio size={13} className="text-cyan-400 shrink-0" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums tracking-tight">
              {activeNodes.toLocaleString()}
            </div>
            <div className="text-[10px] text-zinc-500 font-mono mt-2 pt-2 border-t border-white/5 truncate flex items-center justify-between">
              <span>{t.nodesDetail}</span>
              <span className="text-cyan-400">100% HEALTH</span>
            </div>
          </div>

          {/* 3. Security Incidents Prevented */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#0c0c11] border border-white/[0.06] flex flex-col justify-between group hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="truncate pr-1">{t.incidentsLabel}</span>
              <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums tracking-tight">
              {incidentsBlocked.toLocaleString()}
            </div>
            <div className="text-[10px] text-emerald-400/90 font-mono mt-2 pt-2 border-t border-white/5 truncate flex items-center justify-between">
              <span>0 Critical Breaches</span>
              <span className="text-emerald-400">ZERO TRUST</span>
            </div>
          </div>

          {/* 4. Zero-Downtime Availability */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#0c0c11] border border-white/[0.06] flex flex-col justify-between group hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="truncate pr-1">{t.uptimeLabel}</span>
              <Server size={13} className="text-purple-400 shrink-0" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums tracking-tight">
              99.999%
            </div>
            <div className="text-[10px] text-zinc-500 font-mono mt-2 pt-2 border-t border-white/5 truncate">
              {t.uptimeDetail}
            </div>
          </div>

          {/* 5. Average Stream Latency */}
          <div className="sm:col-span-2 lg:col-span-1 p-4 sm:p-5 rounded-lg bg-[#0c0c11] border border-white/[0.06] flex flex-col justify-between group hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="truncate pr-1">{t.latencyLabel}</span>
              <Zap size={13} className="text-amber-400 shrink-0" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums tracking-tight">
              {latency}ms
            </div>
            <div className="text-[10px] text-zinc-500 font-mono mt-2 pt-2 border-t border-white/5 truncate">
              {t.latencyDetail}
            </div>
          </div>
        </div>

        {/* Live Streaming Audit Log Stream (Continuous Real-Time Feeds) */}
        <div className="mt-4 p-3.5 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2 border-b border-white/5 text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="text-white font-bold uppercase tracking-wider text-[10px]">
                Real-Time Network Telemetry Stream
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500 text-[10px]">
              <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
              <span>Continuous FIPS-140-3 Attestation</span>
            </div>
          </div>

          {/* Fixed-height container to eliminate all layout shifts and page moving */}
          <div className="h-[116px] min-h-[116px] overflow-hidden space-y-1.5 relative">
            <AnimatePresence initial={false}>
              {eventLog.slice(0, 3).map((evt) => (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-row items-center justify-between gap-2 text-[11px] px-2.5 py-1.5 rounded bg-black/40 border border-white/5 h-[34px] min-h-[34px] overflow-hidden"
                >
                  <div className="flex items-center gap-2 overflow-hidden min-w-0">
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-bold shrink-0 ${
                        evt.category === 'CIPHER'
                          ? 'bg-[#d8b485]/15 text-[#d8b485] border border-[#d8b485]/30'
                          : evt.category === 'ERP'
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                          : evt.category === 'SECURITY'
                          ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          : 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
                      }`}
                    >
                      {evt.category}
                    </span>
                    <span className="text-zinc-200 truncate font-mono text-[11px]">{evt.message}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 text-[10px] text-zinc-500">
                    <span className="tabular-nums hidden sm:inline">{evt.timestamp}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                        evt.status === 'VERIFIED'
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : evt.status === 'COMMITTED'
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-amber-400 bg-amber-500/10'
                      }`}
                    >
                      {evt.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
