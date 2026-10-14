import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = translations[lang].faq;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 sm:py-28 border-t border-white/5 bg-[#09090b] relative z-10 overflow-hidden">
      {/* Schema.org FAQPage Structured Data (JSON-LD) for Search Engine Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
            {t.heading}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light mt-3 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-white/5 border-y border-white/5">
          {t.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-6 sm:py-7"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-white group-hover:text-[#d8b485] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xs border border-white/10 bg-[#0c0c0e] flex items-center justify-center text-zinc-400 group-hover:border-[#d8b485]/50 group-hover:text-[#d8b485] transition-all shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#111114] text-[#d8b485] border-[#d8b485]/40' : ''
                    }`}
                  >
                    <ChevronDown size={15} />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 text-xs sm:text-sm font-light text-zinc-400 leading-relaxed pr-8 animate-in">
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
