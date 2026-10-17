import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Shield,
  Network,
  Server,
  CheckCircle2,
  ArrowRight,
  Database,
  Lock,
  Layers,
  Zap,
  Code2,
  RefreshCw,
  Sliders,
  Radio,
  Activity,
  Sparkles,
} from 'lucide-react';
import { Language, translations } from '../translations';
import { GlobalNetworkGlobe } from './GlobalNetworkGlobe';

interface SolutionsTechSectionProps {
  onRequestDemo: () => void;
  lang: Language;
}

export const SolutionsTechSection: React.FC<SolutionsTechSectionProps> = ({
  onRequestDemo,
  lang,
}) => {
  const t = translations[lang].solutions;

  // Interactive cargo demo for Solution 01
  const [cargoType, setCargoType] = useState<'automotive' | 'pharma' | 'aerospace'>('automotive');
  const [isMatching, setIsMatching] = useState(false);
  const [matchDone, setMatchDone] = useState(true);

  // Live real-time dispatch events simulation
  const [liveOrderTicker, setLiveOrderTicker] = useState('Tokyo Port &rarr; Nagoya: 28.4t Castings matched in 34s (Carrier 094-JP)');
  const [liveMatchesCount, setLiveMatchesCount] = useState(1482);
  const [erpSyncCounter, setErpSyncCounter] = useState(892014);
  const [liveErpLatency, setLiveErpLatency] = useState(11.4);
  const [erpTimestamp, setErpTimestamp] = useState(new Date().toISOString());

  // Selected ERP for Solution 03
  const [selectedErp, setSelectedErp] = useState<'sap' | 'oracle' | 'dynamics'>('sap');

  const cargoConfigs = {
    automotive: {
      load: '28.4 Ton Specialized Component Castings',
      route: 'Tokyo Port &rarr; Nagoya Assembly Complex',
      carrier: 'Carrier 094-JP (Air-Ride Air Suspended)',
      rateIndex: '¥482,000 (Dynamic Real-Time Locked)',
      matchTime: '34 Seconds',
      co2eReduction: '18.4%',
    },
    pharma: {
      load: '14.2 Ton Temperature-Controlled Vaccines (2°C - 8°C)',
      route: 'Frankfurt Gateway &rarr; Zurich Distribution Hub',
      carrier: 'Carrier 112-EU (Pharma Cold-Chain Certified)',
      rateIndex: '€3,840 (Dynamic Real-Time Locked)',
      matchTime: '22 Seconds',
      co2eReduction: '24.1%',
    },
    aerospace: {
      load: '8.8 Ton Avionics & High-Precision Titanium Assemblies',
      route: 'London Stansted &rarr; Toulouse Aerospace Park',
      carrier: 'Carrier 031-UK (High-Security Escort Protocol)',
      rateIndex: '£5,200 (Dynamic Real-Time Locked)',
      matchTime: '41 Seconds',
      co2eReduction: '16.7%',
    },
  };

  // Real-time dispatch and ERP synchronization loops
  useEffect(() => {
    const liveMatchInterval = setInterval(() => {
      setLiveMatchesCount((prev) => prev + 1);
      setErpSyncCounter((prev) => prev + 1);
      setErpTimestamp(new Date().toISOString());

      // Slight latency oscillation
      setLiveErpLatency(+(11 + (Math.random() * 0.8 - 0.4)).toFixed(1));

      const samples = [
        'Tokyo Port &rarr; Nagoya: 28.4t Castings matched in 34s (Carrier 094-JP, ¥482,000)',
        'Frankfurt Gateway &rarr; Zurich: 14.2t Vaccines locked in 22s (Carrier 112-EU, €3,840)',
        'London Stansted &rarr; Toulouse: 8.8t Titanium matched in 41s (Carrier 031-UK, £5,200)',
        'Rotterdam &rarr; Berlin: 22.0t Precision Robotics matched in 18s (Carrier 188-DE, €2,950)',
        'Singapore &rarr; Tokyo: 12.5t Semiconductor Wafers matched in 28s (Carrier 087-SG, $8,400)',
      ];
      setLiveOrderTicker(samples[Math.floor(Math.random() * samples.length)]);
    }, 3200);

    return () => clearInterval(liveMatchInterval);
  }, []);

  const handleSimulateMatch = (type: 'automotive' | 'pharma' | 'aerospace') => {
    setCargoType(type);
    setIsMatching(true);
    setTimeout(() => {
      setIsMatching(false);
      setMatchDone(true);
    }, 450);
  };

  const erpPayloads = {
    sap: {
      name: 'SAP S/4HANA Enterprise Cloud',
      method: 'OData RFC / Real-Time Dual-Write',
      latency: `${liveErpLatency}ms`,
      json: `{
  "sap_s4hana_order": "4900${erpSyncCounter}",
  "purchase_order": "PO-GLOBAL-99120",
  "assigned_carrier": "UNIONSVC_CARRIER_NODE_891",
  "encryption_layer": "AES-256-GCM / Mutual TLS 1.3",
  "commit_timestamp": "${erpTimestamp}",
  "sync_state": "SYNCHRONIZED_ZERO_ENTRY"
}`,
    },
    oracle: {
      name: 'Oracle Cloud ERP (SCM Webhook)',
      method: 'REST Webhook Event Stream',
      latency: `${(liveErpLatency - 1.6).toFixed(1)}ms`,
      json: `{
  "oracle_shipment": "ORCL-SHIP-${erpSyncCounter}",
  "telemetry": {
    "temperature_celsius": 4.2,
    "tamper_seal": "UNCOMPROMISED",
    "geo": [35.6762, 139.6503]
  },
  "commit_timestamp": "${erpTimestamp}",
  "zero_trust_ticket": "ZTT_AUTHENTICATED",
  "sync_state": "AUTO_SETTLED"
}`,
    },
    dynamics: {
      name: 'Microsoft Dynamics 365 Supply Chain',
      method: 'Dataverse Event Integration',
      latency: `${(liveErpLatency + 0.7).toFixed(1)}ms`,
      json: `{
  "dynamics_id": "D365-SO-${erpSyncCounter}",
  "automated_bol": "eBOL_VERIFIED_7712",
  "rate_locked_eur": 3450.00,
  "commit_timestamp": "${erpTimestamp}",
  "azure_key_vault": "HSM_MANAGED_KEY_VERIFIED",
  "sync_state": "DISPATCH_COMMITTED"
}`,
    },
  };

  const curCargo = cargoConfigs[cargoType];
  const curErp = erpPayloads[selectedErp];

  return (
    <section id="solutions" className="py-20 sm:py-28 relative z-10 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs font-mono text-[#d8b485] tracking-widest uppercase mb-3 flex items-center gap-2">
            <Radio size={13} className="animate-pulse text-[#d8b485]" />
            <span>{t.kicker}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-emerald-400 font-bold tabular-nums">LIVE AI ENGINE ACTIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Dynamic Bento-Grid Architecture (Asymmetric & Non-Repetitive) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12">
          {/* BENTO TILE 1 (Col-Span-7): AI-Powered Smart Freight Brokerage + Live Dispatch Matcher */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-7 sm:p-8 rounded-xl bg-[#0e0e16] border border-white/[0.08] flex flex-col justify-between group hover:border-[#d8b485]/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <Cpu size={18} className="text-[#d8b485]" />
                  <span className="text-xs font-mono text-zinc-400">Solution 01</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-white bg-white/5 px-2.5 py-0.5 rounded border border-white/10 tabular-nums">
                    &lt; 45s Dispatch Latency
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                AI-Powered Smart Freight Brokerage
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-6 uppercase tracking-wider">
                Precision matching connecting cargo demand with optimal carrier capacity
              </p>

              {/* Exact Bullets */}
              <ul className="space-y-2.5 mb-6 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#d8b485] shrink-0 mt-0.5" />
                  <span>Precision AI matching connecting cargo demand with optimal carrier capacity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#d8b485] shrink-0 mt-0.5" />
                  <span>Real-time dynamic pricing driven by live market analytics and variable cost factors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#d8b485] shrink-0 mt-0.5" />
                  <span>Automated end-to-end documentation, dispatching, and order workflows.</span>
                </li>
              </ul>
            </div>

            {/* Interactive Live Cargo Dispatch Simulator with Real-Time Stream */}
            <div className="p-4 rounded-lg bg-black/50 border border-white/5 font-mono text-xs">
              {/* Live Streaming Ticker of Algorithmic Matches */}
              <div className="mb-3 p-2 rounded bg-black/60 border border-white/5 flex items-center justify-between gap-2 text-[11px]">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-zinc-400 shrink-0 uppercase text-[9px] font-bold">MATCH STREAM:</span>
                  <span className="text-zinc-200 truncate" dangerouslySetInnerHTML={{ __html: liveOrderTicker }} />
                </div>
                <span className="text-[#d8b485] font-bold shrink-0 tabular-nums">#{liveMatchesCount}</span>
              </div>

              <div className="flex items-center justify-between mb-2 text-[11px] text-zinc-400">
                <span>Test Algorithmic Capacity Allocation:</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Activity size={11} className="animate-pulse" />
                  <span>USVC-Neural-v4 (Live)</span>
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={() => handleSimulateMatch('automotive')}
                  className={`px-3 py-1.5 rounded text-[11px] transition-colors cursor-pointer ${
                    cargoType === 'automotive'
                      ? 'bg-[#d8b485] text-zinc-950 font-bold'
                      : 'bg-white/5 text-zinc-300 hover:text-white'
                  }`}
                >
                  Automotive Castings
                </button>
                <button
                  onClick={() => handleSimulateMatch('pharma')}
                  className={`px-3 py-1.5 rounded text-[11px] transition-colors cursor-pointer ${
                    cargoType === 'pharma'
                      ? 'bg-[#d8b485] text-zinc-950 font-bold'
                      : 'bg-white/5 text-zinc-300 hover:text-white'
                  }`}
                >
                  Pharma Cold-Chain
                </button>
                <button
                  onClick={() => handleSimulateMatch('aerospace')}
                  className={`px-3 py-1.5 rounded text-[11px] transition-colors cursor-pointer ${
                    cargoType === 'aerospace'
                      ? 'bg-[#d8b485] text-zinc-950 font-bold'
                      : 'bg-white/5 text-zinc-300 hover:text-white'
                  }`}
                >
                  Aerospace Titanium
                </button>
              </div>

              <div className="p-3 rounded bg-zinc-950/70 border border-white/5 space-y-1.5 text-zinc-300">
                <div className="text-white font-medium flex items-center justify-between">
                  <span dangerouslySetInnerHTML={{ __html: curCargo.route }} />
                  <span className="text-emerald-400 tabular-nums flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    <span>{curCargo.matchTime}</span>
                  </span>
                </div>
                <div className="text-zinc-400 text-[11px]">Assigned: {curCargo.carrier}</div>
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/5">
                  <span className="text-[#d8b485]">{curCargo.rateIndex}</span>
                  <span className="text-zinc-400">CO2e Saved: {curCargo.co2eReduction}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BENTO TILE 2 (Col-Span-5): Ultra-Secure & Encrypted Communications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-7 sm:p-8 rounded-xl bg-[#0c0c12] border border-white/[0.08] flex flex-col justify-between group hover:border-emerald-500/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <Shield size={18} className="text-emerald-400" />
                  <span className="text-xs font-mono text-zinc-400">Solution 02</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  AES-256 / TLS 1.3
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                Ultra-Secure & Encrypted Communications
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-6 uppercase tracking-wider">
                Defense-grade telemetry protection & zero trust controls
              </p>

              {/* Exact Bullets */}
              <ul className="space-y-2.5 mb-6 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>End-to-end encryption for all shipment data, telemetry, and financial transactions (AES-256 / TLS 1.3).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Advanced IoT and telematics security protecting fleet sensors against tampering and cyber threats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strict Zero Trust Architecture controlling system access across all endpoints.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-zinc-400 space-y-2">
              <div className="text-[11px] text-zinc-300 font-semibold border-b border-white/5 pb-1 flex items-center justify-between">
                <span>Cryptographic Envelope Standards:</span>
                <span className="text-emerald-400 text-[10px]">Active Validation</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span>Symmetric Cipher:</span>
                <span className="text-white">AES-256-GCM Authenticated</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span>Transport Protocol:</span>
                <span className="text-white">Mutual TLS 1.3 Strict</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span>Hardware Protection:</span>
                <span className="text-emerald-400">FIPS 140-3 HSM Root of Trust</span>
              </div>
            </div>
          </motion.div>

          {/* BENTO TILE 3 (Col-Span-5): High Reliability & Zero-Downtime Operations */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-7 sm:p-8 rounded-xl bg-[#0c0c12] border border-white/[0.08] flex flex-col justify-between group hover:border-purple-500/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <Server size={18} className="text-purple-400" />
                  <span className="text-xs font-mono text-zinc-400">Solution 04</span>
                </div>
                <span className="text-xs font-mono text-white bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                  99.999% SLA
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                High Reliability & Zero-Downtime Operations
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-6 uppercase tracking-wider">
                Fault-tolerant event stream with offline edge sync
              </p>

              {/* Exact Bullets */}
              <ul className="space-y-2.5 mb-6 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                  <span>Sub-second real-time data streaming and event processing powered by robust event-driven architectures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                  <span>Offline-first mobile capabilities enabling drivers to log critical telemetry seamlessly during connectivity blackouts.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs">
              <div className="text-[11px] text-zinc-400 mb-2 flex items-center justify-between">
                <span>High-Availability Infrastructure State:</span>
                <span className="text-purple-400 text-[10px]">Zero Loss</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span>Kafka Event Clusters:</span>
                  <span className="text-emerald-400">Multi-Region Synchronized</span>
                </div>
                <div className="flex justify-between">
                  <span>Offline Driver App Queue:</span>
                  <span className="text-white">Active Local SQLite / IndexedDB</span>
                </div>
                <div className="flex justify-between">
                  <span>Auto Failover RTO:</span>
                  <span className="text-[#d8b485] tabular-nums">&lt; 250 milliseconds</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BENTO TILE 4 (Col-Span-7): Enterprise System Integration (Unified API) + ERP Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-7 sm:p-8 rounded-xl bg-[#0e0e16] border border-white/[0.08] flex flex-col justify-between group hover:border-cyan-500/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <Network size={18} className="text-cyan-400" />
                  <span className="text-xs font-mono text-zinc-400">Solution 03</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono text-white bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                    99.4% Manual Entry Removed
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                Enterprise System Integration (Unified API)
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-6 uppercase tracking-wider">
                Direct two-way synchronization with global ERP platforms
              </p>

              {/* Exact Bullets */}
              <ul className="space-y-2.5 mb-6 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>Seamless, direct API integration with leading ERP platforms (SAP, Oracle, Microsoft Dynamics).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>Automated real-time synchronization of inventory, warehouse management (WMS), and shipment tracking without manual data entry.</span>
                </li>
              </ul>
            </div>

            {/* Interactive ERP Payload View with Real-time Ingestion Stream */}
            <div className="p-4 rounded-lg bg-black/60 border border-white/5 font-mono text-xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedErp('sap')}
                    className={`px-3 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                      selectedErp === 'sap'
                        ? 'bg-white/15 text-white font-medium border border-white/10'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    SAP S/4HANA
                  </button>
                  <button
                    onClick={() => setSelectedErp('oracle')}
                    className={`px-3 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                      selectedErp === 'oracle'
                        ? 'bg-white/15 text-white font-medium border border-white/10'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Oracle Cloud ERP
                  </button>
                  <button
                    onClick={() => setSelectedErp('dynamics')}
                    className={`px-3 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                      selectedErp === 'dynamics'
                        ? 'bg-white/15 text-white font-medium border border-white/10'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    MS Dynamics 365
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-white font-bold tabular-nums">#{erpSyncCounter}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                <span className="text-zinc-200">{curErp.name}</span>
                <span className="text-emerald-400 tabular-nums">Real-Time Ingestion: {curErp.latency}</span>
              </div>

              <pre className="text-[11px] text-emerald-400 leading-relaxed overflow-x-auto bg-black/40 p-2.5 rounded border border-white/5">
                {curErp.json}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Interactive Global Network & Corridors Visualization (D3.js Globe & Equirectangular Map) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlobalNetworkGlobe lang={lang} />
        </motion.div>

        {/* Action Callout with whileInView reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]"
        >
          <span className="text-xs font-mono text-zinc-400">
            Certified integration adapters available for enterprise SAP NetWeaver, Oracle Fusion SCM, and Microsoft Dataverse.
          </span>
          <button
            onClick={onRequestDemo}
            className="cursor-pointer inline-flex items-center gap-2 text-xs font-semibold text-[#d8b485] hover:text-[#ebd1b0] transition-colors whitespace-nowrap font-mono"
          >
            <span>Request Full API Documentation & Sandbox</span>
            <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
