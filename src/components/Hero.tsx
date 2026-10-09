import React from 'react';
import { FileBarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onStartClick: () => void;
  onAuditClick: () => void;
}

const trustMetrics = [
  { value: 'Up to 40%', label: 'That we will co-invest' },
  { value: '0% interest', label: 'No extra debt' },
  { value: 'Regulated', label: 'By Dutch law' },
  { value: 'Only for starters', label: 'To get them on the market quicker' },
];

export const Hero: React.FC<HeroProps> = ({ onStartClick, onAuditClick }) => {
  return (
    <section className="sm:pt-32 sm:pb-24 sm:px-6 max-w-6xl z-10 mr-auto ml-auto pt-24 pr-4 pb-12 pl-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-200 border-l pb-20 pl-6 relative gap-y-6 items-start"
      >
        {/* Decorator Dots */}
        <div
          className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white border border-neutral-200"
          aria-hidden="true"
        />

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 rounded-full shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span className="inline-flex bg-amber-400 w-2 h-2 rounded-full relative"></span>
          </span>
          <span className="text-[10px] uppercase font-medium text-amber-500 tracking-wide font-mono">
            Pilot launch soon
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="sm:text-5xl md:text-7xl leading-[1.1] text-3xl font-medium text-neutral-900 tracking-tighter"
        >
          Own. Together. Smarter.
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl text-neutral-400 font-normal">
            A smarter way to buy a home, without doing it alone.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:text-base leading-relaxed text-sm font-light text-neutral-500 max-w-xl"
        >
          MI co-invests alongside you, lowering the barrier to homeownership.
          No extra debt. No hidden incentives. Just aligned interests.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 w-full sm:w-auto shadow-sm">
            <button
              onClick={onStartClick}
              className="cursor-pointer block hover:bg-neutral-800 transition-colors text-xs font-semibold text-white tracking-wide text-center bg-neutral-900 w-full h-full rounded-[1px] py-3.5 px-6 font-mono"
            >
              START YOUR PROJECT
            </button>
          </div>

          {/* Secondary Button */}
          <div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 w-full sm:w-auto shadow-sm hover:from-neutral-300 hover:to-neutral-400 transition-all">
            <button
              onClick={onAuditClick}
              className="cursor-pointer hover:text-black transition-colors flex items-center justify-center gap-2 text-xs font-medium text-neutral-600 text-center bg-white/90 w-full h-full rounded-[1px] py-3.5 px-6 backdrop-blur-sm font-mono"
            >
              <FileBarChart2 size={14} className="text-neutral-500" />
              <span>GET FREE SITE AUDIT</span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Fade Overlay for smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Trust/Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-neutral-200 bg-white/60 backdrop-blur-sm"
      >
        {trustMetrics.map((metric, i) => (
          <div
            key={metric.value}
            className={`p-4 sm:p-8 text-center ${
              i % 2 === 0 ? 'border-r border-neutral-200' : ''
            } ${i === 1 ? 'md:border-r border-neutral-200' : ''} ${
              i >= 2 ? 'border-t md:border-t-0 border-neutral-200' : ''
            }`}
          >
            <div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">
              {metric.value}
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">
              {metric.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
