import React, { useState } from 'react';
import { DoorClosed, Euro, ChevronRight, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProblemSection: React.FC = () => {
  const [showMatrix, setShowMatrix] = useState(false);

  return (
    <section className="py-16 sm:py-24 border-b border-neutral-200 bg-white relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4"
        >
          <div>
            <h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
              The Current State
            </h2>
            <h3 className="sm:text-3xl md:text-4xl text-2xl font-medium text-neutral-900 tracking-tighter">
              Why the &quot;Old Way&quot; is failing your equity.
            </h3>
          </div>

          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="self-start sm:self-auto text-xs font-mono text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 border border-neutral-200 px-3 py-1.5 rounded-sm hover:border-neutral-400 transition-colors cursor-pointer"
          >
            <span>{showMatrix ? 'Hide Model Comparison' : 'Compare 3 Models'}</span>
            <ChevronRight
              size={13}
              className={`transform transition-transform ${showMatrix ? 'rotate-90' : ''}`}
            />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full"
          >
            <div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 sm:mb-6 text-orange-500 shadow-sm">
                  <DoorClosed size={18} className="text-orange-500" />
                </div>
                <h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">
                  A Closed Door to Ownership
                </h4>
                <p className="leading-relaxed text-xs font-light text-neutral-500">
                  The housing market increasingly rewards those who already own.
                  Starters rent longer, paying monthly without building equity of their own.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Avg Starter Delay:</span>
                <span className="text-orange-600 font-medium">+3.8 Years</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full"
          >
            <div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 sm:mb-6 text-red-500 shadow-sm">
                  <Euro size={18} className="text-red-500" />
                </div>
                <h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">
                  The Equity Gap
                </h4>
                <p className="leading-relaxed text-xs font-light text-neutral-500">
                  Incomes tend to rise gradually. Home prices don&apos;t. Over time, the gap between what people earn and what homes cost keeps widening.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Income vs Price Ratio:</span>
                <span className="text-red-600 font-medium">9.4x (Dutch Avg)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Matrix Drawer */}
        <AnimatePresence>
          {showMatrix && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="mt-6 border border-neutral-200 rounded-sm bg-neutral-50 p-5 sm:p-6 overflow-hidden"
            >
              <h5 className="text-xs font-mono font-semibold uppercase text-neutral-800 tracking-wider mb-4">
                Structural Comparison: Rent vs Bank Debt vs Union.svc Shared Equity
              </h5>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-neutral-200 text-neutral-500">
                      <th className="py-2 pr-4 font-medium">Dimension</th>
                      <th className="py-2 px-3 font-medium text-neutral-600">Pure Rental</th>
                      <th className="py-2 px-3 font-medium text-neutral-600">Max Solo Mortgage</th>
                      <th className="py-2 pl-3 font-semibold text-emerald-700 bg-emerald-50/70">
                        Union.svc Co-Investment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700">
                    <tr>
                      <td className="py-2.5 pr-4 text-neutral-900 font-medium">Equity Accumulation</td>
                      <td className="py-2.5 px-3 text-red-600 flex items-center gap-1">
                        <X size={12} /> 0% (Sunk cost)
                      </td>
                      <td className="py-2.5 px-3">Slow (Interest-heavy)</td>
                      <td className="py-2.5 pl-3 font-medium text-emerald-800 bg-emerald-50/70">
                        100% Starter Equity Growth
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-neutral-900 font-medium">Extra Debt Burden</td>
                      <td className="py-2.5 px-3">No asset, perpetual rent</td>
                      <td className="py-2.5 px-3 text-red-600">High leverage & risk</td>
                      <td className="py-2.5 pl-3 font-medium text-emerald-800 bg-emerald-50/70 flex items-center gap-1">
                        <Check size={12} /> €0 Extra Debt
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-neutral-900 font-medium">Purchasing Power</td>
                      <td className="py-2.5 px-3">N/A</td>
                      <td className="py-2.5 px-3">Capped at ~4.5x salary</td>
                      <td className="py-2.5 pl-3 font-medium text-emerald-800 bg-emerald-50/70">
                        Up to +40% Boost (€80k-€150k+)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-neutral-900 font-medium">Ownership Rights</td>
                      <td className="py-2.5 px-3 text-neutral-400">None</td>
                      <td className="py-2.5 px-3">Full Owner</td>
                      <td className="py-2.5 pl-3 font-medium text-emerald-800 bg-emerald-50/70">
                        100% Homeowner on Deeds
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
