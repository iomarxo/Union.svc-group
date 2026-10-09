import React from 'react';
import { Search, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

interface SolutionsSectionProps {
  onSelectSolution: (solutionName: string, budgetHint: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
}) => {
  return (
    <section id="solutions" className="py-16 sm:py-24 bg-white relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">
            Deployment Options
          </h2>
          <h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">
            Simple, transparent pricing.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Service 1: The Competitor Audit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full"
          >
            <div className="flex flex-col sm:p-8 bg-neutral-50 h-full z-10 rounded-[1px] pt-6 pr-6 pb-6 pl-6 relative">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-white border border-neutral-200 rounded-sm flex items-center justify-center text-emerald-600 shadow-sm">
                  <Search size={20} />
                </div>
                <span className="text-[10px] font-mono border border-neutral-200 px-2 py-1 rounded-sm text-neutral-500 bg-white">
                  AUDIT
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight mb-2">
                The Competitor Audit
              </h3>
              <p className="text-xs text-neutral-500 font-light mb-6 leading-relaxed">
                Best for businesses who aren&apos;t ready to rebuild but want answers. Get a comprehensive analysis of your competitive landscape.
              </p>
              <ul className="space-y-2 mt-auto border-t border-neutral-200 pt-4 sm:pt-6">
                <li className="text-[11px] text-neutral-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>Top 3 Competitor Analysis</span>
                </li>
                <li className="text-[11px] text-neutral-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>Actionable Recommendations</span>
                </li>
              </ul>
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onSelectSolution('The Competitor Audit', '1.5k-5k')}
                  className="w-full text-center border border-neutral-200 hover:border-neutral-900 bg-white text-neutral-900 py-2.5 px-4 text-xs font-semibold rounded-xs transition-colors cursor-pointer"
                >
                  Select Audit
                </button>
              </div>
            </div>
          </motion.div>

          {/* Service 2: The Full System Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full"
          >
            <div className="flex flex-col p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-white border border-neutral-200 rounded-sm flex items-center justify-center text-purple-600 shadow-sm">
                  <Layers size={20} />
                </div>
                <span className="text-[10px] font-mono border border-neutral-200 px-2 py-1 rounded-sm text-neutral-500 bg-white">
                  ENTERPRISE
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight mb-2">
                The Full System Architecture
              </h3>
              <p className="text-xs text-neutral-500 font-light mb-6 leading-relaxed">
                Complete multi-page digital infrastructure. CMS integration, analytics dashboard setup, and advanced SEO foundation.
              </p>
              <ul className="space-y-2 mt-auto border-t border-neutral-200 pt-4 sm:pt-6">
                <li className="text-[11px] text-neutral-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>5-Page Structure</span>
                </li>
                <li className="text-[11px] text-neutral-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>Analytics Dashboard</span>
                </li>
              </ul>
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onSelectSolution('The Full System Architecture', '5k-10k')}
                  className="w-full text-center bg-neutral-900 hover:bg-neutral-800 text-white py-2.5 px-4 text-xs font-semibold rounded-xs transition-colors cursor-pointer"
                >
                  Select Architecture
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
