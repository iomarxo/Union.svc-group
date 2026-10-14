import React, { useState, useMemo } from 'react';
import { ArrowUpRight, HelpCircle, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Language, translations } from '../translations';

interface CalculatorProps {
  onApplyWithBudget?: (budget: string) => void;
  lang: Language;
}

export const Calculator: React.FC<CalculatorProps> = ({ onApplyWithBudget, lang }) => {
  const [income, setIncome] = useState<number>(48000);
  const [savings, setSavings] = useState<number>(20000);
  const [coinvestRate, setCoinvestRate] = useState<number>(0.35); // 35%
  const [dualIncome, setDualIncome] = useState<boolean>(false);

  const t = translations[lang].calculator;

  const formatEuro = (val: number) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Base bank capacity: approx 4.5x gross salary
  const effectiveIncome = dualIncome ? income * 1.6 : income;
  const bankMortgage = Math.floor(effectiveIncome * 4.5);
  const soloLimit = bankMortgage;

  // Union boosts purchasing capacity via co-equity without debt
  const unionBoost = Math.floor(bankMortgage * coinvestRate);
  const totalPower = soloLimit + unionBoost + savings;

  // Wealth Growth Trajectory Data over 15 years
  const chartData = useMemo(() => {
    const years = [0, 3, 6, 9, 12, 15];
    const appreciationRate = 0.035; // 3.5% annual appreciation

    return years.map((yr) => {
      // Solo mortgage baseline: buying solo home value = soloLimit + savings
      const soloHomeBase = soloLimit + savings;
      const soloAppreciation = soloHomeBase * Math.pow(1 + appreciationRate, yr) - soloHomeBase;
      const soloPrincipalAmortized = yr * (soloLimit * 0.02); // ~2% principal amortization / yr
      const soloNetEquity = Math.round(savings + soloPrincipalAmortized + soloAppreciation);

      // Union co-investment: buying higher-tier home = totalPower
      const unionHomeBase = totalPower;
      const unionGrossAppreciation = unionHomeBase * Math.pow(1 + appreciationRate, yr) - unionHomeBase;
      // Starter owns (1 - coinvestRate) of capital appreciation + their amortized principal + initial savings
      const starterShareOfAppreciation = unionGrossAppreciation * (1 - coinvestRate * 0.5);
      const unionPrincipalAmortized = yr * (soloLimit * 0.022);
      const unionNetEquity = Math.round(savings + unionPrincipalAmortized + starterShareOfAppreciation);

      return {
        year: yr === 0 ? 'Year 0' : `Yr ${yr}`,
        solo: soloNetEquity,
        union: unionNetEquity,
      };
    });
  }, [soloLimit, savings, totalPower, coinvestRate]);

  // Breakdown percentages
  const mortgageShare = Math.round((bankMortgage / totalPower) * 100);
  const unionShare = Math.round((unionBoost / totalPower) * 100);
  const savingsShare = 100 - mortgageShare - unionShare;

  return (
    <section id="calculator" className="py-20 sm:py-28 border-b border-white/5 bg-[#09090b] relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-8 h-px bg-[#d8b485]" />
            <p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
              {t.badge}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
            {t.heading}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-3 font-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Main Calculator Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xs border border-white/5 shadow-2xl"
        >
          <div className="bg-[#0c0c0e] rounded-[1px] flex flex-col lg:flex-row overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            {/* Inputs Column */}
            <div className="w-full lg:w-1/2 p-6 sm:p-9 space-y-7">
              {/* Income Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-2.5">
                  <label
                    htmlFor="income-range"
                    className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider flex items-center gap-1.5"
                  >
                    <span>{t.incomeLabel}</span>
                    <span className="text-neutral-400 cursor-help" title={t.incomeTooltip}>
                      <HelpCircle size={12} />
                    </span>
                  </label>
                  <div className="font-semibold text-white text-base font-mono">
                    €{formatEuro(income)}
                  </div>
                </div>
                <input
                  type="range"
                  id="income-range"
                  min="30000"
                  max="150000"
                  step="1000"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1.5 font-mono">
                  <span>€30,000</span>
                  <span>€150,000</span>
                </div>

                {/* Presets */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {[38000, 48000, 65000, 85000, 110000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setIncome(preset)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-xs border transition-colors cursor-pointer ${
                        income === preset
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-xs'
                          : 'bg-neutral-900 text-neutral-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      €{preset / 1000}k
                    </button>
                  ))}
                </div>
              </div>

              {/* Savings Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-2.5">
                  <label
                    htmlFor="savings-range"
                    className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider flex items-center gap-1.5"
                  >
                    <span>{t.savingsLabel}</span>
                    <span className="text-neutral-400 cursor-help" title={t.savingsTooltip}>
                      <HelpCircle size={12} />
                    </span>
                  </label>
                  <div className="font-semibold text-white text-base font-mono">
                    €{formatEuro(savings)}
                  </div>
                </div>
                <input
                  type="range"
                  id="savings-range"
                  min="0"
                  max="80000"
                  step="2500"
                  value={savings}
                  onChange={(e) => setSavings(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1.5 font-mono">
                  <span>€0</span>
                  <span>€80,000</span>
                </div>
              </div>

              {/* Co-investment Ratio Slider */}
              <div>
                <div className="flex justify-between items-baseline mb-2.5">
                  <label
                    htmlFor="coinvest-range"
                    className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider flex items-center gap-1.5"
                  >
                    <span>{t.coinvestLabel}</span>
                  </label>
                  <div className="font-semibold text-emerald-400 text-base font-mono">
                    {Math.round(coinvestRate * 100)}%
                  </div>
                </div>
                <input
                  type="range"
                  id="coinvest-range"
                  min="0.1"
                  max="0.4"
                  step="0.05"
                  value={coinvestRate}
                  onChange={(e) => setCoinvestRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1.5 font-mono">
                  <span>10% Equity</span>
                  <span>40% Max Equity</span>
                </div>
              </div>

              {/* Dual Income Toggle */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <label
                  htmlFor="dual-income"
                  className="text-xs font-mono text-neutral-300 flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="dual-income"
                    checked={dualIncome}
                    onChange={(e) => setDualIncome(e.target.checked)}
                    className="w-4 h-4 rounded bg-neutral-900 border-white/20 text-emerald-500 focus:ring-emerald-400"
                  />
                  <span>{t.dualIncomeLabel} (+60% Bank Capacity)</span>
                </label>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-xs border border-emerald-500/20">
                  {dualIncome ? 'Active' : 'Solo'}
                </span>
              </div>
            </div>

            {/* Results Column */}
            <div className="w-full lg:w-1/2 p-6 sm:p-9 bg-[#09090b]/80 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Metrics Breakdown Cards */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="p-4 rounded-xs bg-[#0c0c0e] border border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                      {t.soloCapLabel}
                    </span>
                    <span className="text-lg sm:text-xl font-semibold text-zinc-300">
                      €{formatEuro(soloLimit)}
                    </span>
                  </div>

                  <div className="p-4 rounded-xs bg-[#d8b485]/10 border border-[#d8b485]/30">
                    <span className="text-[10px] text-[#d8b485] uppercase tracking-wider block mb-1">
                      {t.unionBoostLabel}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-[#d8b485]">
                      +€{formatEuro(unionBoost)}
                    </span>
                  </div>
                </div>

                {/* Total Purchasing Power Hero Display */}
                <div className="p-5 sm:p-6 rounded-xs bg-gradient-to-br from-[#0c0c0e] to-[#09090b] border border-[#d8b485]/30 shadow-lg relative overflow-hidden">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#d8b485] font-semibold">
                      {t.totalPowerLabel}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#d8b485]/10 text-[#d8b485] border border-[#d8b485]/30">
                      0% Extra Debt
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-mono mb-4">
                    €{formatEuro(totalPower)}
                  </div>

                  {/* Visual Stacked Ratio Bar */}
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-full rounded-full bg-zinc-800 overflow-hidden flex">
                      <div
                        style={{ width: `${mortgageShare}%` }}
                        className="bg-zinc-600 h-full"
                        title={`Bank Mortgage: ${mortgageShare}%`}
                      />
                      <div
                        style={{ width: `${unionShare}%` }}
                        className="bg-[#d8b485] h-full shadow-[0_0_10px_rgba(216,180,133,0.8)]"
                        title={`Union.svc Equity: ${unionShare}%`}
                      />
                      <div
                        style={{ width: `${savingsShare}%` }}
                        className="bg-zinc-400 h-full"
                        title={`Personal Savings: ${savingsShare}%`}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400 pt-1">
                      <span>Mortgage: {mortgageShare}%</span>
                      <span className="text-[#d8b485] font-semibold">Union: {unionShare}%</span>
                      <span>Savings: {savingsShare}%</span>
                    </div>
                  </div>
                </div>

                {/* Recharts 15-Year Wealth Trajectory Chart */}
                <div className="p-4 rounded-xs bg-[#0c0c0e] border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-white font-medium">
                      <TrendingUp size={13} className="text-[#d8b485]" />
                      <span>{t.chartTitle}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">15-Yr Model</span>
                  </div>

                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                        <defs>
                          <linearGradient id="unionGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#d8b485" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#d8b485" stopOpacity={0.0} />
                          </linearGradient>
                          <linearGradient id="soloGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#71717a" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#71717a" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="year"
                          stroke="#71717a"
                          fontSize={10}
                          tickLine={false}
                          fontFamily="JetBrains Mono, monospace"
                        />
                        <YAxis
                          stroke="#71717a"
                          fontSize={10}
                          tickLine={false}
                          fontFamily="JetBrains Mono, monospace"
                          tickFormatter={(v) => `€${Math.round(v / 1000)}k`}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0c0c0e',
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '11px',
                            color: '#fff',
                          }}
                          formatter={(value) => [`€${formatEuro(Number(value))}`, '']}
                        />
                        <Legend
                          wrapperStyle={{
                            fontSize: '10px',
                            fontFamily: 'JetBrains Mono, monospace',
                            paddingTop: '6px',
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="solo"
                          name={t.chartSoloLabel}
                          stroke="#71717a"
                          strokeWidth={1.5}
                          fillOpacity={1}
                          fill="url(#soloGrad)"
                        />
                        <Area
                          type="monotone"
                          dataKey="union"
                          name={t.chartUnionLabel}
                          stroke="#d8b485"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#unionGrad)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <p className="text-[10px] font-mono text-zinc-500 mt-2 leading-relaxed">
                    {t.chartDesc}
                  </p>
                </div>
              </div>

              {/* CTA Apply with this budget */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onApplyWithBudget && onApplyWithBudget(`€${formatEuro(totalPower)}`)}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-[10px] font-bold tracking-widest uppercase text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all cursor-pointer shadow-md hover:shadow-[0_8px_24px_rgba(216,180,133,0.25)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{t.applyCta}</span>
                  <ArrowUpRight size={14} className="text-zinc-950" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
