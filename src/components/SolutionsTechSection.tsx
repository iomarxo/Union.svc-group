import React, { useState } from 'react';
import {
  Cpu,
  Shield,
  Network,
  Server,
  CheckCircle2,
  Terminal,
  Zap,
  ArrowRight,
  Database,
  Lock,
  Code2,
  RefreshCw,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, translations } from '../translations';

interface SolutionsTechSectionProps {
  onRequestDemo: () => void;
  lang: Language;
}

export const SolutionsTechSection: React.FC<SolutionsTechSectionProps> = ({
  onRequestDemo,
  lang,
}) => {
  const t = translations[lang].solutions;
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>('freight-brokerage');
  const [simulatedApiStatus, setSimulatedApiStatus] = useState<string>('idle');
  const [apiResponseJson, setApiResponseJson] = useState<string>('');

  const currentItem = t.items.find((item) => item.id === selectedSolutionId) || t.items[0];

  const handleRunApiSimulation = () => {
    setSimulatedApiStatus('running');
    setTimeout(() => {
      setSimulatedApiStatus('success');
      setApiResponseJson(
        JSON.stringify(
          {
            status: 200,
            handshake: 'TLS_1_3_CHACHA20_POLY1305_SHA256',
            encryption: 'AES-256-GCM',
            carrier_dispatch: {
              cargo_demand_id: 'USVC-DEMAND-88902',
              assigned_carrier: 'Carrier-Node-Tokyo-04',
              optimization_score: 99.4,
              empty_backhaul_prevented: true,
              erp_sync: {
                sap_s4hana: 'ACK_DISPATCHED',
                oracle_cloud: 'ACK_SYNCED',
                dynamics_365: 'ACK_SYNCED',
              },
            },
            telemetry_latency_ms: 11.2,
          },
          null,
          2
        )
      );
    }, 600);
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 relative z-10 border-t border-white/5 bg-[#09090c]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#d8b485]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#d8b485] uppercase mb-4">
            <Layers size={12} className="text-[#d8b485]" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {t.items.map((item, idx) => {
            const icons = [
              <Cpu key="0" size={26} className="text-[#d8b485]" />,
              <Shield key="1" size={26} className="text-emerald-400" />,
              <Network key="2" size={26} className="text-cyan-400" />,
              <Server key="3" size={26} className="text-purple-400" />,
            ];

            const isSelected = item.id === selectedSolutionId;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedSolutionId(item.id)}
                className={`p-7 sm:p-8 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#12121a] border-[#d8b485]/60 shadow-[0_8px_30px_rgba(216,180,133,0.12)]'
                    : 'bg-[#0d0d12] border-white/5 hover:border-white/20'
                }`}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d8b485] to-transparent" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      {icons[idx]}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#d8b485] bg-[#d8b485]/10 px-2 py-0.5 rounded border border-[#d8b485]/20">
                        SOLUTION {item.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#d8b485] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mb-6 uppercase tracking-wider">
                    {item.subtitle}
                  </p>

                  {/* Bullets directly from prompt specification */}
                  <ul className="space-y-3 mb-6">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={`bullet-${bIdx}`} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-[#d8b485] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {item.techTags.map((tag, tIdx) => (
                      <span
                        key={`tech-${tIdx}`}
                        className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 bg-black/40 px-2 py-1 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">{item.metricLabel}</span>
                    <span className="text-white font-bold text-sm bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                      {item.metricValue}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Unified API & Protocol Sandbox */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#0e0e15] border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-1">
                <Terminal size={14} />
                <span>Unified Enterprise API Gateway Console</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Inspect Real-Time Payload & Cryptographic Architecture
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Currently inspecting: <strong className="text-white">{currentItem.title}</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRunApiSimulation}
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] transition-all uppercase rounded shadow"
              >
                <RefreshCw size={12} className={simulatedApiStatus === 'running' ? 'animate-spin' : ''} />
                <span>Simulate Dispatch & Sync</span>
              </button>

              <button
                onClick={onRequestDemo}
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all uppercase rounded"
              >
                <span>Request Custom Demo</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Interactive Code & Response Terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 font-mono text-xs">
            <div className="lg:col-span-5 p-4 rounded-lg bg-black/60 border border-white/5 space-y-2 text-zinc-400">
              <div className="text-[11px] text-zinc-300 uppercase tracking-wider font-semibold border-b border-white/5 pb-2 flex items-center justify-between">
                <span>POST /api/v1/brokerage/dispatch</span>
                <span className="text-emerald-400">TLS 1.3</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                // Direct two-way ERP webhook with payload encryption
              </p>
              <div className="text-zinc-300">
                <span className="text-purple-400">Authorization:</span> Bearer &lt;Zero-Trust-JWT&gt;<br />
                <span className="text-purple-400">X-Encryption-Scheme:</span> AES-256-GCM<br />
                <span className="text-purple-400">X-ERP-Target:</span> SAP S/4HANA & Oracle Cloud<br />
                <span className="text-purple-400">X-Offline-Fallback:</span> SQLite-Sync-Active
              </div>
            </div>

            <div className="lg:col-span-7 p-4 rounded-lg bg-black/80 border border-white/10 relative overflow-x-auto min-h-[140px]">
              <div className="text-[10px] uppercase tracking-wider text-zinc-400 mb-2 flex items-center justify-between">
                <span>Response Output</span>
                {simulatedApiStatus === 'success' && (
                  <span className="text-emerald-400 font-bold">200 OK • VERIFIED</span>
                )}
              </div>
              <pre className="text-[11px] text-emerald-400 leading-relaxed">
                {apiResponseJson ||
                  `// Press "Simulate Dispatch & Sync" to trigger encrypted telemetry handshake\n{\n  "status": 200,\n  "encryption": "AES-256 / TLS 1.3 Active",\n  "erp_synchronization": "SAP & Oracle Connected",\n  "message": "Platform ready for production workload"\n}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
