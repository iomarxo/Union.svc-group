import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatsTestimonialProps {
  onOpenCaseStudy: () => void;
  onContactClick: () => void;
}

export const StatsTestimonial: React.FC<StatsTestimonialProps> = ({
  onOpenCaseStudy,
  onContactClick,
}) => {
  return (
    <section className="sm:py-24 z-10 bg-white border-neutral-200 border-b pt-16 pb-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 gap-6 sm:gap-10 border-b border-neutral-200 pb-6 sm:pb-8"
        >
          <h2 className="sm:text-3xl md:text-4xl leading-[1.1] text-2xl font-medium text-neutral-900 tracking-tight max-w-2xl">
            Helping starters enter the <span className="text-neutral-400">housing market</span> three years earlier.
          </h2>
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-1 hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={16} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 transition-all duration-300 h-full"
          >
            <div className="sm:p-8 flex flex-col min-h-[320px] z-10 bg-neutral-50 h-full rounded-[1px] pt-6 pr-6 pb-6 pl-6 relative justify-between">
              <div>
                <h3 className="sm:text-lg leading-tight text-base font-medium text-neutral-900 tracking-tight mb-4">
                  &quot;Buying later has become the norm.&quot;
                </h3>
                <p className="leading-relaxed sm:text-sm text-xs font-light text-neutral-500">
                  &quot;More people are financially ready to buy, yet ownership keeps moving out of reach. The gap isn’t confidence - it’s structure.&quot;
                </p>
              </div>
              <div className="mt-6 border-t border-neutral-200 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex text-sm font-medium text-neutral-900 bg-white w-10 h-10 border-neutral-200 border rounded-full items-center justify-center">
                    FF
                  </div>
                  <div>
                    <div className="leading-none text-sm font-medium text-neutral-900 mb-1">
                      Ference Feenstra
                    </div>
                    <div className="text-[10px] uppercase text-neutral-500 tracking-wider font-mono">
                      co-Founder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats with Radial Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 transition-all duration-300 h-full"
          >
            <div className="bg-neutral-50 p-6 sm:p-8 rounded-[1px] flex flex-col items-center justify-between min-h-[320px] h-full relative z-10">
              <div className="text-center">
                <span className="uppercase block text-xs text-neutral-500 tracking-widest font-mono mb-2">
                  OWNERSHIP MODEL
                </span>
                <span className="text-sm font-medium text-neutral-900 tracking-tight">
                  Shared Equity
                </span>
              </div>

              <div className="relative w-32 h-32 flex items-center justify-center my-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#e5e5e5"
                    strokeWidth="3.5"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    fill="transparent"
                    strokeDasharray="264"
                    strokeDashoffset="12"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-medium text-neutral-900 tracking-tighter">
                    98/100
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenCaseStudy}
                className="w-full bg-white border border-neutral-200 text-neutral-900 text-xs font-semibold tracking-wide py-3 rounded-sm hover:bg-neutral-100 transition-colors cursor-pointer font-mono"
              >
                VIEW CASE STUDY
              </button>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-800 to-neutral-700 sm:col-span-2 lg:col-span-1 h-full"
          >
            <div className="flex flex-col bg-neutral-900 min-h-[320px] h-full rounded-[1px] p-6 sm:p-8 justify-between relative z-10">
              <div className="flex justify-between items-start text-white">
                <span className="sm:text-lg text-base font-medium tracking-tight">
                  Start Exploring
                </span>
                <ArrowUpRight size={18} className="text-neutral-500" />
              </div>

              <p className="leading-relaxed text-base font-light text-neutral-300">
                Whether you’re actively looking or just curious,
                MI helps you understand what’s possible - clearly and calmly.
              </p>

              <div className="text-sm text-neutral-400 space-y-3 font-mono">
                <a
                  href="mailto:contact@unionsvc.com"
                  className="hover:text-white transition-colors flex gap-x-3 items-center text-sm text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                  contact@unionsvc.com
                </a>
                <div className="flex gap-x-3 items-center text-sm text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                  +1 (555) 019-2834
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
