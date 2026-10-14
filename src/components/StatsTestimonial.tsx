import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  Mail,
  Phone,
  Activity,
  Zap,
  Lock,
  Play,
  Pause,
  RefreshCw,
  Clock,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
import { Language, translations } from '../translations';

interface StatsTestimonialProps {
  onOpenCaseStudy: () => void;
  onContactClick: () => void;
  lang: Language;
}

type MetricView = 'consolidated' | 'risk' | 'velocity';
type TimeRange = '1h' | '24h' | '7d' | '30d';

interface TelemetryPoint {
  time: string;
  riskMitigation: number; // e.g. 99.98
  legacyRiskBaseline: number; // e.g. 52.4
  liquidityVelocityMs: number; // e.g. 175 ms
  volumeThroughputM: number; // e.g. 24.5 ($M)
  disputeProbability: number; // e.g. 0.002 (%)
  status: string;
}

export const StatsTestimonial: React.FC<StatsTestimonialProps> = ({
  onOpenCaseStudy,
  onContactClick,
  lang,
}) => {
  const t = translations[lang].stats;
  const isRtl = lang === 'ar';

  const [activeView, setActiveView] = useState<MetricView>('consolidated');
  const [timeRange, setTimeRange] = useState<TimeRange>('1h');
  const [isStreaming, setIsStreaming] = useState<boolean>(true);
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  // Verified institutional events log stream
  const verifiedEvents = useMemo(() => {
    if (lang === 'ar') {
      return [
        'توثيق مرحلة ضمان ملاحة بـ 18.4 مليون دولار: تطابق إحداثيات الميناء • تحرير فوري خلال 142 ملّي ثانية',
        'توجيه سيولة نقدية عابرة للحدود: 6.2 مليون EUR/USD مع صفر انزلاق سعري • تنفيذ بـ 98 ملّي ثانية',
        'تسوية صفقة عقارية مؤسسية: تأكيد إشعار التوثيق الرقمي • القيمة 32.0 مليون دولار',
        'تحقق أجهزة استشعار الأسطول: تأكيد سلامة الشحنة وصرف الدفعة الرابعة • 165 ملّي ثانية',
        'درع مخاطر الأطراف: اجتياز فحص الامتثال والرقابة آلياً (معدل التعرض للمخاطر 0.00%)',
      ];
    }
    return [
      '$18.4M Maritime Escrow Milestone Verified: Port GPS Telemetry Match • 142ms Release',
      'Cross-Border FX Liquidity Routed: $6.2M EUR/USD at 0.00% Slippage • 98ms Fill',
      'Multi-Jurisdiction Real Estate Settlement: Notary Oracle Trigger Confirmed • $32.0M',
      'Supply Fleet Telemetry Check: Sensor Temp Validated, Tranche 4 Disbursed • 165ms',
      'Counterparty Risk Shield: Automated Sanctions & AML Screening Passed (0.00% Exposure)',
    ];
  }, [lang]);

  // Initial base telemetry data points
  const generateInitialData = (range: TimeRange): TelemetryPoint[] => {
    const points: TelemetryPoint[] = [];
    const count = range === '1h' ? 12 : range === '24h' ? 14 : 10;

    for (let i = 0; i < count; i++) {
      let label = '';
      if (range === '1h') {
        const min = (i * 5).toString().padStart(2, '0');
        label = `10:${min}`;
      } else if (range === '24h') {
        const hr = (i * 2).toString().padStart(2, '0');
        label = `${hr}:00`;
      } else if (range === '7d') {
        label = `D-${7 - i}`;
      } else {
        label = `W-${Math.floor(i / 2) + 1}`;
      }

      // Realistic institutional metrics:
      // Risk mitigation is rock solid near 99.98%
      const risk = Number((99.94 + Math.sin(i * 1.3) * 0.04 + (i % 2 === 0 ? 0.01 : 0)).toFixed(2));
      const legacyRisk = Number((54.5 - Math.sin(i * 0.8) * 6.2).toFixed(1));
      const velocity = Math.round(180 + Math.sin(i * 1.7) * 35 + (i % 3 === 0 ? -15 : 20));
      const volume = Number((22.4 + Math.sin(i * 1.1) * 8.6).toFixed(1));

      points.push({
        time: label,
        riskMitigation: Math.min(99.99, Math.max(99.90, risk)),
        legacyRiskBaseline: legacyRisk,
        liquidityVelocityMs: Math.max(120, velocity),
        volumeThroughputM: volume,
        disputeProbability: 0.001,
        status: 'VERIFIED_AUDIT',
      });
    }
    return points;
  };

  const [telemetryData, setTelemetryData] = useState<TelemetryPoint[]>(() =>
    generateInitialData('1h')
  );

  // When time range changes, reseed
  useEffect(() => {
    setTelemetryData(generateInitialData(timeRange));
  }, [timeRange]);

  // Live real-time tick interval
  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      setTelemetryData((prev) => {
        const last = prev[prev.length - 1];
        const now = new Date();
        const timeLabel = `${now.getHours().toString().padStart(2, '0')}:${now
          .getMinutes()
          .toString()
          .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

        // Subtle realistic drift
        const nextRisk = Number(
          (99.95 + (Math.random() * 0.04 - 0.01)).toFixed(2)
        );
        const nextVelocity = Math.round(175 + (Math.random() * 30 - 15));
        const nextVolume = Number((26.5 + (Math.random() * 8 - 4)).toFixed(1));
        const nextLegacy = Number((52.0 + (Math.random() * 4 - 2)).toFixed(1));

        const newPoint: TelemetryPoint = {
          time: timeRange === '1h' ? timeLabel : last.time,
          riskMitigation: Math.min(99.99, Math.max(99.91, nextRisk)),
          legacyRiskBaseline: nextLegacy,
          liquidityVelocityMs: nextVelocity,
          volumeThroughputM: nextVolume,
          disputeProbability: 0.001,
          status: 'LIVE_TICK',
        };

        // Slide window
        return [...prev.slice(1), newPoint];
      });

      // Cycle events
      setActiveEventIndex((prev) => (prev + 1) % verifiedEvents.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isStreaming, timeRange, verifiedEvents.length]);

  const latestPoint = telemetryData[telemetryData.length - 1] || {
    riskMitigation: 99.98,
    liquidityVelocityMs: 185,
    volumeThroughputM: 28.4,
  };

  return (
    <section
      id="telemetry-stats"
      className="py-20 sm:py-28 z-10 bg-[#09090b] border-y border-white/5 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d8b485]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-zinc-800/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 z-10 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start mb-10 sm:mb-14 gap-6 sm:gap-10 border-b border-white/5 pb-8"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-px bg-[#d8b485]" />
              <p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
                {t.telemetry.badge}
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              {t.heading} <span className="text-[#d8b485] font-light">{t.headingAccent}</span>
            </h2>
            <p className="mt-3 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
              {t.telemetry.subtitle}
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#d8b485] border-b border-[#d8b485]/40 pb-1 hover:border-[#d8b485] hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <span>{t.startLink}</span>
            <ArrowUpRight size={14} className="text-[#d8b485]" />
          </button>
        </motion.div>

        {/* ========================================================================= */}
        {/* REAL-TIME VISUALIZATION COCKPIT (RECHARTS): RISK MITIGATION & LIQUIDITY */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xs border border-white/5 mb-10 shadow-2xl bg-[#0c0c0e]"
        >
          <div className="bg-[#0c0c0e] rounded-[1px] p-5 sm:p-7 sm:pb-6 relative overflow-hidden">
            {/* Cockpit Control Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#111114] border border-[#d8b485]/30 rounded-xs">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isStreaming ? 'bg-[#d8b485] animate-pulse shadow-[0_0_8px_#d8b485]' : 'bg-zinc-500'
                    }`}
                  />
                  <span className="text-[11px] font-mono tracking-wider text-[#d8b485] uppercase">
                    {isStreaming ? t.telemetry.liveStatus : t.telemetry.streamingPaused}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 border-l border-white/10 pl-3">
                  <Activity size={13} className="text-[#d8b485]" />
                  <span>ISO 20022 FIX Engine • 100ms Telemetry</span>
                </div>
              </div>

              {/* View Selector Tabs & Stream Pause/Play */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Metric View Tabs */}
                <div className="flex items-center bg-[#111114] p-1 rounded-xs border border-white/10">
                  <button
                    onClick={() => setActiveView('consolidated')}
                    className={`px-2.5 py-1 text-[10px] font-bold tracking-wider font-mono uppercase rounded-xs transition-all cursor-pointer ${
                      activeView === 'consolidated'
                        ? 'bg-[#d8b485] text-zinc-950 font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {t.telemetry.viewConsolidated}
                  </button>
                  <button
                    onClick={() => setActiveView('risk')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-xs transition-all cursor-pointer ${
                      activeView === 'risk'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {t.telemetry.viewRisk}
                  </button>
                  <button
                    onClick={() => setActiveView('velocity')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-xs transition-all cursor-pointer ${
                      activeView === 'velocity'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {t.telemetry.viewVelocity}
                  </button>
                </div>

                {/* Time Range */}
                <div className="flex items-center bg-black/60 p-1 rounded-xs border border-white/10">
                  {(['1h', '24h', '7d', '30d'] as TimeRange[]).map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded-xs uppercase transition-all cursor-pointer ${
                        timeRange === range
                          ? 'bg-white/20 text-white font-bold'
                          : 'text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      {range === '1h'
                        ? t.telemetry.timeRange1h
                        : range === '24h'
                        ? t.telemetry.timeRange24h
                        : range === '7d'
                        ? t.telemetry.timeRange7d
                        : t.telemetry.timeRange30d}
                    </button>
                  ))}
                </div>

                {/* Stream Pause/Resume Toggle */}
                <button
                  onClick={() => setIsStreaming((prev) => !prev)}
                  title={isStreaming ? 'Pause Real-Time Stream' : 'Resume Live Stream'}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white rounded-xs text-[11px] font-mono transition-colors cursor-pointer"
                >
                  {isStreaming ? (
                    <>
                      <Pause size={11} className="text-amber-400" />
                      <span className="hidden sm:inline">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play size={11} className="text-emerald-400" />
                      <span className="hidden sm:inline">Resume</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* KPI Cards Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
              {/* KPI 1: Risk Mitigation */}
              <div className="bg-[#111114] border border-white/5 p-3.5 sm:p-4 rounded-xs relative overflow-hidden group hover:border-[#d8b485]/40 transition-colors">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                    {t.telemetry.kpiRiskTitle}
                  </span>
                  <ShieldCheck size={14} className="text-[#d8b485] shrink-0" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                    {latestPoint.riskMitigation}%
                  </span>
                  <span className="text-[10px] font-mono text-[#d8b485] font-semibold">
                    ▲ 0.00% Breach
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 font-light mt-1 truncate">
                  {t.telemetry.kpiRiskSub}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d8b485] to-transparent" />
              </div>

              {/* KPI 2: Liquidity Velocity */}
              <div className="bg-[#111114] border border-white/5 p-3.5 sm:p-4 rounded-xs relative overflow-hidden group hover:border-[#d8b485]/40 transition-colors">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                    {t.telemetry.kpiVelocityTitle}
                  </span>
                  <Zap size={14} className="text-[#d8b485] shrink-0" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                    {latestPoint.liquidityVelocityMs}{' '}
                    <span className="text-xs font-normal text-[#d8b485]">ms</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#d8b485] font-semibold">
                    450x vs Wire
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 font-light mt-1 truncate">
                  {t.telemetry.kpiVelocitySub}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d8b485] to-transparent" />
              </div>

              {/* KPI 3: Sequestered Vault Capital */}
              <div className="bg-[#111114] border border-white/5 p-3.5 sm:p-4 rounded-xs relative overflow-hidden group hover:border-[#d8b485]/40 transition-colors">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                    {t.telemetry.kpiVolumeTitle}
                  </span>
                  <Lock size={14} className="text-[#d8b485] shrink-0" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                    {t.telemetry.kpiVolumeValue}
                  </span>
                  <span className="text-[10px] font-mono text-[#d8b485] font-semibold">
                    100% Escrowed
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 font-light mt-1 truncate">
                  {t.telemetry.kpiVolumeSub}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d8b485] to-transparent" />
              </div>

              {/* KPI 4: Pre-Execution Pricing Slippage */}
              <div className="bg-[#111114] border border-white/5 p-3.5 sm:p-4 rounded-xs relative overflow-hidden group hover:border-[#d8b485]/40 transition-colors">
                <div className="flex justify-between items-start mb-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                    {t.telemetry.kpiSlippageTitle}
                  </span>
                  <TrendingUp size={14} className="text-[#d8b485] shrink-0" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                    {t.telemetry.kpiSlippageValue}
                  </span>
                  <span className="text-[10px] font-mono text-[#d8b485] font-semibold">
                    Zero Leakage
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 font-light mt-1 truncate">
                  {t.telemetry.kpiSlippageSub}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d8b485] to-transparent" />
              </div>
            </div>

            {/* Recharts Visualization Area */}
            <div className="w-full bg-[#0a0a0c] border border-white/10 rounded-xs p-3 sm:p-5 relative">
              {/* Chart Legend & Context Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-[11px] font-mono">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  {/* Legend 1: Risk Mitigation */}
                  {(activeView === 'consolidated' || activeView === 'risk') && (
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-emerald-500/40 border border-emerald-400" />
                      <span className="text-neutral-200">
                        {t.telemetry.chartRiskLabel}
                      </span>
                      <span className="text-emerald-400 font-semibold">
                        ({latestPoint.riskMitigation}%)
                      </span>
                    </div>
                  )}

                  {/* Legend 2: Liquidity Velocity */}
                  {(activeView === 'consolidated' || activeView === 'velocity') && (
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-cyan-500/40 border border-cyan-400" />
                      <span className="text-neutral-200">
                        {t.telemetry.chartVelocityLabel}
                      </span>
                      <span className="text-cyan-400 font-semibold">
                        ({latestPoint.liquidityVelocityMs}ms)
                      </span>
                    </div>
                  )}

                  {/* Legend 3: Legacy Baseline (when in risk or velocity view) */}
                  {activeView === 'risk' && (
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-1 bg-red-400/80 rounded-xs" />
                      <span className="text-neutral-400">
                        {t.telemetry.chartBaselineLabel} (~52%)
                      </span>
                    </div>
                  )}

                  {activeView === 'velocity' && (
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-teal-500/30 border border-teal-400" />
                      <span className="text-neutral-200">
                        {t.telemetry.chartThroughputLabel} (${latestPoint.volumeThroughputM}M/hr)
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-neutral-500 hidden md:block">
                  Y1: Risk Mitigation Index (98.00% - 100.00%) • Y2: Latency (ms)
                </div>
              </div>

              {/* Responsive Container for Recharts */}
              <div className="h-[280px] sm:h-[320px] w-full min-h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={telemetryData}
                    margin={{ top: 15, right: 15, left: -10, bottom: 0 }}
                  >
                    <defs>
                      {/* Risk Mitigation Gradient: Champagne Gold #d8b485 */}
                      <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d8b485" stopOpacity={0.45} />
                        <stop offset="95%" stopColor="#d8b485" stopOpacity={0.02} />
                      </linearGradient>

                      {/* Liquidity Velocity Gradient: Crisp White / Platinum */}
                      <linearGradient id="velocityGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#ffffff" stopOpacity={0.02} />
                      </linearGradient>

                      {/* Legacy Baseline Gradient: Red/Orange warning */}
                      <linearGradient id="legacyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0} />
                      </linearGradient>

                      {/* Volume Throughput Gradient */}
                      <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d8b485" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#d8b485" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.06)"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="time"
                      stroke="#52525b"
                      fontSize={10}
                      tickLine={false}
                      fontFamily="JetBrains Mono, monospace"
                      dy={6}
                    />

                    {/* Left Y-Axis: Risk Mitigation Rate (Percentage) */}
                    <YAxis
                      yAxisId="riskAxis"
                      domain={[99.8, 100]}
                      stroke="#52525b"
                      fontSize={10}
                      tickLine={false}
                      fontFamily="JetBrains Mono, monospace"
                      tickFormatter={(v) => `${Number(v).toFixed(2)}%`}
                      orientation={isRtl ? 'right' : 'left'}
                    />

                    {/* Right Y-Axis: Liquidity Velocity Latency (ms) */}
                    <YAxis
                      yAxisId="velocityAxis"
                      domain={[0, 350]}
                      stroke="#52525b"
                      fontSize={10}
                      tickLine={false}
                      fontFamily="JetBrains Mono, monospace"
                      tickFormatter={(v) => `${v}ms`}
                      orientation={isRtl ? 'left' : 'right'}
                    />

                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (!active || !payload || !payload.length) return null;
                        const data = payload[0].payload as TelemetryPoint;

                        return (
                          <div className="bg-[#0e0e12]/95 border border-white/15 backdrop-blur-md p-3.5 rounded-xs shadow-2xl font-mono text-xs min-w-[240px]">
                            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
                              <span className="text-neutral-400 font-medium">
                                TIMESTAMP: <span className="text-white">{label}</span>
                              </span>
                              <span className="px-1.5 py-0.5 rounded-xs text-[9px] bg-emerald-500/20 text-emerald-300 font-bold">
                                {data.status}
                              </span>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-neutral-300">
                                  <ShieldCheck size={12} className="text-emerald-400" />
                                  Risk Mitigation:
                                </span>
                                <span className="font-bold text-emerald-400 text-sm">
                                  {data.riskMitigation}%
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-neutral-300">
                                  <Zap size={12} className="text-cyan-400" />
                                  Settlement Latency:
                                </span>
                                <span className="font-bold text-cyan-400 text-sm">
                                  {data.liquidityVelocityMs} ms
                                </span>
                              </div>

                              <div className="flex items-center justify-between border-t border-white/5 pt-1.5">
                                <span className="text-neutral-400">Hourly Throughput:</span>
                                <span className="font-semibold text-white">
                                  ${data.volumeThroughputM}M
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-neutral-400">Legacy Banking Delay:</span>
                                <span className="text-red-400 line-through text-[11px]">
                                  72 - 120 hrs
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }}
                    />

                    <ReferenceLine
                      yAxisId="riskAxis"
                      y={99.98}
                      stroke="#d8b485"
                      strokeDasharray="4 4"
                      strokeOpacity={0.6}
                      label={{
                        value: '99.98% CUSTODY CEILING',
                        fill: '#d8b485',
                        fontSize: 9,
                        position: 'insideTopLeft',
                      }}
                    />

                    {/* Area 1: Risk Mitigation (Champagne Gold #d8b485) */}
                    {(activeView === 'consolidated' || activeView === 'risk') && (
                      <Area
                        yAxisId="riskAxis"
                        type="monotone"
                        dataKey="riskMitigation"
                        name={t.telemetry.chartRiskLabel}
                        stroke="#d8b485"
                        strokeWidth={2.2}
                        fillOpacity={1}
                        fill="url(#riskGradient)"
                        isAnimationActive={!isStreaming}
                      />
                    )}

                    {/* Area 2: Liquidity Velocity (White) */}
                    {(activeView === 'consolidated' || activeView === 'velocity') && (
                      <Area
                        yAxisId="velocityAxis"
                        type="monotone"
                        dataKey="liquidityVelocityMs"
                        name={t.telemetry.chartVelocityLabel}
                        stroke="#ffffff"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#velocityGradient)"
                        isAnimationActive={!isStreaming}
                      />
                    )}

                    {/* Legacy baseline representation when in risk view */}
                    {activeView === 'risk' && (
                      <Area
                        yAxisId="velocityAxis"
                        type="monotone"
                        dataKey="legacyRiskBaseline"
                        name={t.telemetry.chartBaselineLabel}
                        stroke="#f43f5e"
                        strokeWidth={1.5}
                        strokeDasharray="3 3"
                        fillOpacity={1}
                        fill="url(#legacyGradient)"
                        isAnimationActive={false}
                      />
                    )}

                    {/* Volume throughput area when in velocity view */}
                    {activeView === 'velocity' && (
                      <Area
                        yAxisId="velocityAxis"
                        type="monotone"
                        dataKey="volumeThroughputM"
                        name={t.telemetry.chartThroughputLabel}
                        stroke="#14b8a6"
                        strokeWidth={1.5}
                        fillOpacity={1}
                        fill="url(#volumeGradient)"
                        isAnimationActive={false}
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Live Event Ticker Strip */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 overflow-hidden w-full">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>{t.telemetry.feedEventPrefix}</span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeEventIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs font-mono text-neutral-300 truncate"
                    >
                      {verifiedEvents[activeEventIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 shrink-0">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>Immutable Audit Log</span>
                </div>
              </div>
            </div>

            {/* Bottom Proof Note */}
            <p className="mt-4 text-[11px] font-mono text-neutral-400 leading-relaxed text-center sm:text-left">
              {t.telemetry.footerProof}
            </p>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* THREE EXECUTIVE SUPPORTING CARDS: TESTIMONIAL, BENCHMARK GAUGE, INTAKE    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Testimonial Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="theme-card p-7 sm:p-8 flex flex-col min-h-[320px] justify-between h-full"
          >
            <div>
              <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-4 leading-snug">
                {t.card1.quote}
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm font-light text-zinc-400">
                {t.card1.body}
              </p>
            </div>
            <div className="mt-8 border-t border-white/5 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex text-xs font-mono font-bold text-[#d8b485] bg-[#111114] w-10 h-10 border border-white/10 rounded-full items-center justify-center shadow-inner">
                  FF
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-0.5">
                    {t.card1.author}
                  </div>
                  <div className="text-[10px] uppercase text-[#d8b485] tracking-wider font-mono">
                    {t.card1.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats with Radial Gauge & Case Study Launcher */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="theme-card p-7 sm:p-8 flex flex-col items-center justify-between min-h-[320px] h-full"
          >
            <div className="text-center">
              <span className="uppercase block text-[10px] text-[#d8b485] tracking-widest font-mono mb-1 font-bold">
                {t.card2.badge}
              </span>
              <span className="text-sm font-medium text-white tracking-tight">
                {t.card2.title}
              </span>
            </div>

            <div className="relative w-32 h-32 flex items-center justify-center my-3">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#27272a"
                  strokeWidth="4"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#d8b485"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray="264"
                  strokeDashoffset="14"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_8px_rgba(216,180,133,0.7)]"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white tracking-tight font-mono">
                  {t.card2.metric}
                </span>
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  Score
                </span>
              </div>
            </div>

            <button
              onClick={onOpenCaseStudy}
              className="w-full bg-[#111114] hover:bg-[#18181b] border border-white/10 hover:border-[#d8b485]/40 text-white text-[10px] font-bold tracking-widest uppercase py-3 rounded-xs transition-colors cursor-pointer"
            >
              {t.card2.caseStudyBtn}
            </button>
          </motion.div>

          {/* Contact Direct Intake Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="theme-card p-7 sm:p-8 flex flex-col min-h-[320px] justify-between sm:col-span-2 lg:col-span-1 h-full border-[#d8b485]/30 hover:border-[#d8b485]/60"
          >
            <div>
              <div className="flex justify-between items-start text-white mb-3">
                <span className="text-lg font-semibold tracking-tight">
                  {t.card3.title}
                </span>
                <ArrowUpRight size={18} className="text-[#d8b485]" />
              </div>

              <p className="leading-relaxed text-xs sm:text-sm font-light text-zinc-400">
                {t.card3.body}
              </p>
            </div>

            <div className="text-xs text-zinc-300 space-y-3 font-mono pt-6 border-t border-white/5">
              <a
                href={`mailto:${t.card3.emailLabel}`}
                className="hover:text-[#d8b485] transition-colors flex gap-x-2.5 items-center"
              >
                <Mail size={13} className="text-[#d8b485] shrink-0" />
                <span className="font-semibold text-white">{t.card3.emailLabel}</span>
              </a>
              <div className="flex gap-x-2.5 items-center text-zinc-400">
                <Phone size={13} className="text-[#d8b485] shrink-0" />
                <span>{t.card3.phoneLabel}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
