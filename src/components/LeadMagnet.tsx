import React, { useState } from 'react';
import { Unlock, Check, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleDownloadReport = () => {
    const reportText = `Union.svc / MI SYSTEMS - COMPETITOR INTELLIGENCE REPORT
=============================================================
Target Domain / Subject: ${url || 'Requested Entity'}
Recipient: ${email}
Generated: ${new Date().toLocaleDateString()}
Status: Complete & Verified

1. SPEED & PERFORMANCE BENCHMARKS
- First Contentful Paint: 0.42s (99th percentile)
- TTFB (Time to First Byte): 48ms edge routed
- Structural Cleanliness: Minimal DOM footprint, zero unhydrated scripts

2. CONVERSION FUNNEL ANALYSIS
- Traditional Lending Cap: ~4.5x Gross Income
- Union.svc Shared Equity Uplift: +30% to +40% purchasing power
- Debt Servicing Ratio: 0% supplemental debt obligations

3. SEO GAP IDENTIFICATION
- Top 3 Starter Pain Points: Downpayment depletion, bidding wars, outpriced in Randstad
- Remediation Vector: Union.svc Co-Investment Structure (BW Boek 3 Art. 166)

=============================================================
CONFIDENTIAL & PROPRIETARY // Union.svc SYSTEMS
`;
    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `union-svc-audit-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <section id="audit" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm"
        >
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1px]">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-emerald-50 border border-emerald-100 rounded-sm mb-4 sm:mb-6">
                  <Unlock size={12} className="text-emerald-600" />
                  <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider">
                    Free Access
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tight mb-4">
                  Unlock Your Competitor Intelligence Report
                </h2>

                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  Don&apos;t redesign your site blindly. Enter your email to get a free checklist of what your top 3 competitors are doing right.
                </p>

                <ul className="space-y-2 mb-6 sm:mb-8">
                  <li className="flex items-center gap-3 text-xs text-neutral-600">
                    <Check size={14} className="text-emerald-500" />
                    <span>Speed &amp; Performance Benchmarks</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-neutral-600">
                    <Check size={14} className="text-emerald-500" />
                    <span>Conversion Funnel Analysis</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-neutral-600">
                    <Check size={14} className="text-emerald-500" />
                    <span>SEO Gap Identification</span>
                  </li>
                </ul>
              </div>

              {/* Form Container */}
              <div className="w-full md:w-80">
                {status === 'success' ? (
                  <div className="bg-neutral-50 border border-emerald-200 rounded-sm p-6 text-center space-y-4 animate-in">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 font-mono">
                        Dossier Generated!
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1">
                        Dispatched to <span className="font-mono text-neutral-800">{email}</span>
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <button
                        onClick={handleDownloadReport}
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono py-2.5 px-3 rounded-xs transition-colors cursor-pointer"
                      >
                        <Download size={13} />
                        <span>Download Instant Copy</span>
                      </button>
                      <button
                        onClick={() => {
                          setStatus('idle');
                          setEmail('');
                          setUrl('');
                        }}
                        className="text-[11px] font-mono text-neutral-400 hover:text-neutral-700 underline cursor-pointer"
                      >
                        Request Another Site Audit
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="lm-email" className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="lm-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="lm-url" className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">
                        Company Website
                      </label>
                      <input
                        type="url"
                        id="lm-url"
                        required
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://yourcompany.com"
                        className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400"
                      />
                    </div>

                    <div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-sm">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-neutral-900 text-white px-4 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {status === 'loading' ? (
                          <span>PROCESSING REPORT...</span>
                        ) : (
                          <>
                            <span>SEND ME THE REPORT</span>
                            <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[10px] text-neutral-400 text-center">
                      Zero spam. 100% Value.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
