import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01 / ASSESS',
    title: 'Understand Your Buying Power',
    desc: "We start with your situation - income, savings, and the homes you’re considering. This defines what’s possible today, and where shared equity can help.",
    time: 'Timeframe: 24–48 hours',
    benefit: '0% upfront fee',
  },
  {
    num: '02 / CO-INVEST',
    title: 'Buy Together',
    desc: 'MI co-invests in the home with you at purchase. You become the 100% homeowner. We share in the equity - so you can buy your dream home.',
    time: 'Legal title: You alone',
    benefit: 'No debt interest',
  },
  {
    num: '03 / GROW',
    title: 'Build Equity Over Time',
    desc: 'As the home grows in value, so does your ownership. You can buy out MI over time, or settle when you sell. Simple, aligned, and long-term by design.',
    time: 'Buyout flexibility',
    benefit: 'Tranches from 5%',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="sm:py-24 bg-white z-10 pt-16 pb-16 relative overflow-hidden" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 border-b border-neutral-200 pb-6 sm:pb-8"
        >
          <div>
            <h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
              Our Process
            </h2>
            <h3 className="text-2xl font-medium text-neutral-900 tracking-tighter sm:text-2xl">
              We make home ownership possible. Step by step.
            </h3>
          </div>
          <p className="text-xs font-light text-neutral-500 max-w-md sm:text-xs leading-relaxed">
            MI is designed to work alongside the existing housing and financial system - not around it.
            Each step is transparent, compliant, and built for long-term ownership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 py-1 px-2">
                  {step.num}
                </div>
                <h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">
                  {step.title}
                </h4>
                <p className="leading-relaxed text-xs font-light text-neutral-500">
                  {step.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                <span>{step.time}</span>
                <span className="text-emerald-600 font-medium">{step.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 p-4 bg-neutral-50 border border-neutral-200 rounded-sm"
        >
          <span>Fully compliant with Dutch Civil Code (BW Boek 3 Art. 166) &amp; notary standards.</span>
          <a
            href="#faq"
            className="text-neutral-900 hover:text-emerald-600 flex items-center gap-1 font-medium mt-2 sm:mt-0"
          >
            <span>Read legal framework</span>
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
