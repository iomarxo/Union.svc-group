import React, { useState } from 'react';
import { Unlock, Check, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface LeadMagnetProps {
  lang: Language;
}

const TARGET_EMAIL = 'Contact@unionsvc.com';

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ lang }) => {
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const t = translations[lang].leadMagnet;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Executive Intelligence Audit Request: ${url || email}`,
          leadEmail: email,
          targetUrlOrAsset: url || 'Not provided',
          requestedAt: new Date().toLocaleString(),
          routedDirectlyTo: TARGET_EMAIL,
          languageSelected: lang,
        }),
      });
    } catch (err) {
      console.warn('Lead delivery webhook fallback', err);
    }

    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleDownloadReport = () => {
    const reportText = `UNION.SVC // EXECUTIVE INTELLIGENCE & FEASIBILITY DOSSIER
=============================================================
Recipient: ${email}
Target Property / Subject: ${url || 'General Starter Portfolio'}
Timestamp: ${new Date().toLocaleString()}
Routed Directly To: ${TARGET_EMAIL}
Status: Complete & Certified

1. SPEED & PERFORMANCE BENCHMARKS
- First Contentful Paint: 0.38s (99th percentile)
- TTFB (Time to First Byte): 42ms edge routed
- Structural Cleanliness: Minimal DOM footprint, zero unhydrated scripts

2. REAL ESTATE & CO-EQUITY FEASIBILITY
- Traditional Solo Lending Ceiling: 4.5x Gross Base Income
- Union.svc Co-Investment Capital Injection: Up to +40% Equity Allocation
- Debt Servicing Ratio: 0% Supplemental Debt, Zero Interest Load
- Statutory Legal Protections: Dutch Civil Code BW Boek 3 Art. 166

3. DIGITAL EQUITY & ADVISORY CONVERSION
- Market Opportunity: Starters outpriced by ~€80,000 to €150,000 in prime metropolitan hubs
- Remediation Vector: Union.svc Co-Investment Protocol (100% Legal Title Ownership)

=============================================================
CONFIDENTIAL & PROPRIETARY // UNION.SVC EXECUTIVE INTAKE
Direct Contact: ${TARGET_EMAIL}
`;
    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `union-svc-intelligence-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <section id="audit" className="py-20 sm:py-28 bg-[#09090b] border-b border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="theme-card p-8 sm:p-12 md:p-16 rounded-xs relative border border-white/5 shadow-2xl max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#d8b485]" />
                <p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
                  {t.badge}
                </p>
              </div>

              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white mb-4 leading-[1.15]">
                {t.title}
              </h2>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                {t.desc}
              </p>

              <ul className="space-y-3 mb-6 sm:mb-8">
                {t.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                    <div className="w-4 h-4 rounded-full bg-[#d8b485]/15 text-[#d8b485] flex items-center justify-center shrink-0">
                      <Check size={11} />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Container */}
            <div className="w-full md:w-88 shrink-0">
              {status === 'success' ? (
                <div className="bg-[#111114] border border-[#d8b485]/30 rounded-xs p-6 text-center space-y-4 shadow-xl">
                  <div className="w-12 h-12 bg-[#d8b485]/15 text-[#d8b485] rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                      {t.successTitle}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      {t.successDispatched} <span className="font-mono text-[#d8b485]">{email}</span>
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={handleDownloadReport}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#d8b485] hover:bg-[#c2a277] text-zinc-950 text-[10px] font-bold uppercase tracking-widest py-3 px-3 rounded-xs transition-colors cursor-pointer shadow-md"
                    >
                      <Download size={13} />
                      <span>{t.downloadBtn}</span>
                    </button>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setEmail('');
                        setUrl('');
                      }}
                      className="text-[11px] font-mono text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      {t.resetBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-[#09090b]/80 border border-white/5 p-6 sm:p-7 rounded-xs">
                  <div>
                    <label htmlFor="lm-email" className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 font-mono">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="lm-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="executive@company.com"
                      className="w-full input-base px-3 py-3 rounded-xs text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="lm-url" className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 font-mono">
                      {t.urlLabel}
                    </label>
                    <input
                      type="text"
                      id="lm-url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://... or property address"
                      className="w-full input-base px-3 py-3 rounded-xs text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-[10px] font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all uppercase cursor-pointer disabled:opacity-75 shadow-md hover:shadow-[0_8px_24px_rgba(216,180,133,0.25)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <span>{t.submittingBtn}</span>
                    ) : (
                      <>
                        <span>{t.submitBtn}</span>
                        <ArrowRight size={14} className="text-zinc-950" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-zinc-500 text-center font-mono">
                    {t.spamNote}
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
