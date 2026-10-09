import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface CalculatorProps {
  onApplyWithBudget?: (budget: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onApplyWithBudget }) => {
  const [income, setIncome] = useState<number>(45000);
  const [savings, setSavings] = useState<number>(15000);
  const [coinvestRate, setCoinvestRate] = useState<number>(0.4); // 40%
  const [dualIncome, setDualIncome] = useState<boolean>(false);

  // Formatter
  const formatEuro = (val: number) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Base bank capacity: approx 4.5x gross salary
  const effectiveIncome = dualIncome ? income * 1.6 : income;
  const bankMortgage = Math.floor(effectiveIncome * 4.5);
  const tradLimit = bankMortgage;

  // Variant boosts the effective purchasing capacity via co-equity without debt
  const variantBoost = Math.floor(bankMortgage * coinvestRate);
  const variantTotal = tradLimit + variantBoost;
  const difference = variantTotal - tradLimit;

  // Total buying budget including personal savings:
  const totalPurchasingPower = variantTotal + savings;

  // Percentages for visualization bar
  const mortgageShare = Math.round((bankMortgage / totalPurchasingPower) * 100);
  const variantShare = Math.round((variantBoost / totalPurchasingPower) * 100);
  const savingsShare = 100 - mortgageShare - variantShare;

  return (
    <section id="calculator" className="py-16 sm:py-24 border-b border-neutral-200 bg-neutral-50 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
            Power Calculator
          </h2>
          <h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">
            See your new purchasing power.
          </h3>
          <p className="text-xs text-neutral-500 mt-2 font-light">
            Test how shared equity unlocks higher-tier housing without monthly debt interest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm"
        >
          <div className="bg-white rounded-[1px] flex flex-col md:flex-row overflow-hidden">
            {/* Inputs Column */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-neutral-100 flex flex-col justify-between space-y-6">
              <div className="space-y-7">
                {/* Income input */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label
                      htmlFor="income-range"
                      className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider flex items-center gap-1.5"
                    >
                      <span>Annual Gross Income</span>
                      <span className="text-neutral-400 font-sans cursor-help" title="Your annual gross base salary before taxes">
                        <HelpCircle size={11} />
                      </span>
                    </label>
                    <div className="font-medium text-neutral-900 text-sm font-mono">
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
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
                    <span>€30k</span>
                    <span>€150k</span>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="flex gap-1.5 mt-2.5">
                    {[38000, 45000, 65000, 90000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setIncome(preset)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-xs border transition-colors cursor-pointer ${
                          income === preset
                            ? 'bg-neutral-900 text-white border-neutral-900'
                            : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        €{preset / 1000}k
                      </button>
                    ))}
                  </div>
                </div>

                {/* Savings input */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label
                      htmlFor="savings-range"
                      className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider flex items-center gap-1.5"
                    >
                      <span>Savings Available</span>
                      <span className="text-neutral-400 font-sans cursor-help" title="Liquid personal capital available for purchase fees and deposit">
                        <HelpCircle size={11} />
                      </span>
                    </label>
                    <div className="font-medium text-neutral-900 text-sm font-mono">
                      €{formatEuro(savings)}
                    </div>
                  </div>
                  <input
                    type="range"
                    id="savings-range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={savings}
                    onChange={(e) => setSavings(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
                    <span>€0</span>
                    <span>€100k</span>
                  </div>
                </div>

                {/* Co-investment Ratio Toggle */}
                <div className="pt-2 border-t border-neutral-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-neutral-500">
                      Union.svc Co-Investment Share
                    </span>
                    <span className="text-xs font-mono font-medium text-emerald-600">
                      {Math.round(coinvestRate * 100)}% Max
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[0.2, 0.3, 0.4].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => setCoinvestRate(rate)}
                        className={`py-1.5 text-xs font-mono rounded-xs border text-center transition-all cursor-pointer ${
                          coinvestRate === rate
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-medium'
                            : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                        }`}
                      >
                        {rate * 100}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dual income toggle */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label htmlFor="dual-check" className="text-neutral-600 flex items-center gap-2 cursor-pointer font-light">
                    <input
                      id="dual-check"
                      type="checkbox"
                      checked={dualIncome}
                      onChange={(e) => setDualIncome(e.target.checked)}
                      className="rounded-xs text-neutral-900 focus:ring-emerald-500 cursor-pointer"
                    />
                    Buying with a co-borrower / partner
                  </label>
                  {dualIncome && (
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-xs">
                      +60% combined limit
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Output Column */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <div className="mb-6 pb-6 border-b border-neutral-200">
                  <span className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">
                    Standard Bank Limit
                  </span>
                  <div className="text-2xl font-medium text-neutral-400 tracking-tight font-mono">
                    €<span id="trad-result">{formatEuro(tradLimit)}</span>
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase text-emerald-600 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    With Union.svc
                  </span>
                  <div className="text-4xl font-semibold text-neutral-900 tracking-tighter mb-2 font-mono">
                    €<span id="variant-result">{formatEuro(variantTotal)}</span>
                  </div>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    You unlock{' '}
                    <span className="text-emerald-600 font-medium font-mono">
                      +€<span id="diff-result">{formatEuro(difference)}</span>
                    </span>{' '}
                    in purchasing power without increasing your monthly debt obligations.
                  </p>
                </div>

                {/* Capital Composition Bar */}
                <div className="mt-6 pt-5 border-t border-neutral-200/80">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500 mb-1.5">
                    <span>Capital Structure</span>
                    <span>Total Target: €{formatEuro(totalPurchasingPower)}</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-200 rounded-xs flex overflow-hidden">
                    <div
                      style={{ width: `${mortgageShare}%` }}
                      className="bg-neutral-800 transition-all duration-300"
                      title={`Standard Mortgage: €${formatEuro(bankMortgage)} (${mortgageShare}%)`}
                    />
                    <div
                      style={{ width: `${variantShare}%` }}
                      className="bg-emerald-500 transition-all duration-300"
                      title={`Union.svc Co-Investment: €${formatEuro(variantBoost)} (${variantShare}%)`}
                    />
                    <div
                      style={{ width: `${savingsShare}%` }}
                      className="bg-amber-400 transition-all duration-300"
                      title={`Your Savings: €${formatEuro(savings)} (${savingsShare}%)`}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-mono text-neutral-500 mt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-xs bg-neutral-800"></span>
                      <span>Bank Mortgage ({mortgageShare}%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-xs bg-emerald-500"></span>
                      <span className="text-emerald-700 font-medium">Union.svc Co-Equity ({variantShare}%)</span>
                    </div>
                    {savings > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-xs bg-amber-400"></span>
                        <span>Savings ({savingsShare}%)</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4">
                <a
                  href="#contact"
                  onClick={() => onApplyWithBudget?.(`€${formatEuro(variantTotal)}`)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-medium py-3 px-4 rounded-xs transition-colors"
                >
                  <Sparkles size={13} className="text-emerald-400" />
                  <span>Lock In This Power Limit</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-[10px] text-neutral-400 text-center mt-4 font-mono">
          Estimates only. Subject to official Dutch financial assessment &amp; notarial registration.
        </p>
      </div>
    </section>
  );
};
