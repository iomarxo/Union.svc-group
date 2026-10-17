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
          message: `Tamper attempt blocked on IoT sensor #SN-88210 (HSM hardware boundary)`,
          status: 'BLOCKED',
        },
        {
          category: 'TELEMETRY',
          message: `Offline mobile batch reconciled from Berlin-London corridor`,
          status: 'COMMITTED',
        },
        {
          category: 'ERP',
          message: `Microsoft Dynamics 365 eBOL cryptographic manifest sealed`,
          status: 'VERIFIED',
        },
        {
          category: 'CIPHER',
          message: `AES-256-GCM authenticated payload dispatched to Singapore Gateway`,
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
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top Control Bar: Header & Live Feed Synchronizer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-white/5 border border-white/10 text-[#d8b485] relative">
              <Activity size={15} className={isPlaying ? 'animate-pulse' : ''} />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#d8b485] uppercase tracking-wider">
                <span>{t.kicker}</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-400 font-bold tabular-nums">{currentTime}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {t.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Live Throughput Gauge */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 border border-white/10 text-xs font-mono text-zinc-300">
              <Wifi size={12} className="text-cyan-400" />
              <span className="text-zinc-500 text-[10px] uppercase">Throughput:</span>
              <span className="text-white font-bold tabular-nums">{throughput} Gbps</span>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/60 border border-white/10 text-xs font-mono">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlaying ? 'bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className="text-zinc-200 text-[11px] font-medium">
                {isPlaying ? t.liveStatus : t.pausedStatus}
              </span>
            </div>

            {/* Pause / Resume Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="cursor-pointer p-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              title={isPlaying ? t.pauseTooltip : t.resumeTooltip}
              aria-label={isPlaying ? t.pauseTooltip : t.resumeTooltip}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            </button>
          </div>
        </div>

        {/* 5-Column High-Density Telemetry Ticker Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 divide-white/[0.05]"
        >
          {/* 1. Transactions Processed */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#0c0c11] border border-white/[0.06] flex flex-col justify-between relative overflow-hidden group hover:border-white/15 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="truncate pr-1">{t.transactionsLabel}</span>
              <TrendingUp size={13} className="text-[#d8b485] shrink-0" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums tracking-tight flex items-baseline gap-1">
              <span>{transactions.toLocaleString()}</span>
              {pulseMetric === 'tx' && (
                <span className="text-[10px] text-emerald-400 font-mono animate-bounce">+1</span>
              )}
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
          <div className="col-span-2 lg:col-span-1 p-4 sm:p-5 rounded-lg bg-[#0c0c11] border border-white/[0.06] flex flex-col justify-between group hover:border-white/15 transition-all">
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
        </motion.div>

        {/* Live Streaming Audit Log Stream (Continuous Real-Time Feeds) */}
        <div className="mt-4 p-3.5 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-bold uppercase tracking-wider text-[10px]">
                Real-Time Network Telemetry Stream
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500 text-[10px]">
              <CheckCircle2 size={11} className="text-emerald-400" />
              <span>Continuous FIPS-140-3 Attestation</span>
            </div>
          </div>

          <div className="space-y-1.5 overflow-hidden">
            <AnimatePresence initial={false}>
              {eventLog.map((evt) => (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0, x: -10, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, x: 10, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] py-1 border-b border-white/[0.03] last:border-0"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span
                      className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border shrink-0 ${
                        evt.category === 'SECURITY'
                          ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          : evt.category === 'CIPHER'
                          ? 'bg-[#d8b485]/10 text-[#d8b485] border-[#d8b485]/20'
                          : evt.category === 'ERP'
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      }`}
                    >
                      {evt.category}
                    </span>
                    <span className="text-zinc-200 truncate">{evt.message}</span>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] shrink-0 self-end sm:self-auto">
                    <span>{evt.timestamp}</span>
                    <span className="text-emerald-400 font-bold">{evt.status}</span>
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
