import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'Do I still hold 100% legal title to the property?',
    a: 'Yes. You are registered as the sole legal homeowner on the notarial deed in the Kadaster (Land Registry). Union.svc / MI co-invests alongside you under a registered shared-equity partnership covenant. You enjoy full privacy, occupancy rights, and control of your home.',
  },
  {
    q: 'How does the 0% interest structure work?',
    a: 'Unlike a second mortgage, bank loan, or mezzanine debt, there is zero monthly interest or compounding repayment. Union.svc participates purely in equity: we provide upfront capital (up to 40%), and our return is tied solely to the future value of the asset when you sell or choose to buy us out.',
  },
  {
    q: 'When and how can I buy out Union.svc’s equity share?',
    a: 'You can buy out Union.svc’s equity at any time in increments starting from 5%, with zero prepayment penalties. The valuation is determined by a certified independent appraiser (NWWI registered in the Netherlands).',
  },
  {
    q: 'What happens if house prices decline?',
    a: 'We share both the upside and downside. If property market values decline at the time of sale, Union.svc absorbs its proportional share of that drop. You are never stuck with forced top-ups or debt collection for market fluctuations.',
  },
  {
    q: 'Can I renovate, remodel, or add solar panels to the home?',
    a: 'Yes! Any value created directly by your personal renovations (e.g. new kitchen, solar installation, extension) is credited 100% to you. We take a pre-renovation baseline appraisal so you retain all the fruits of your improvements.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-neutral-200 bg-white relative z-10 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Clarity &amp; Compliance
          </h2>
          <h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-neutral-500 font-light mt-2">
            Clear answers on the legal mechanics, financial alignment, and starter protections.
          </p>
        </motion.div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-4 sm:py-5"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-medium text-neutral-900 group-hover:text-emerald-700 transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-neutral-400 transition-all shrink-0 ${
                      isOpen ? 'rotate-180 bg-neutral-100 text-neutral-700' : ''
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm font-light text-neutral-600 leading-relaxed pr-8 animate-in">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
