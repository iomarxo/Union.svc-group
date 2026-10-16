import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight, Building, Globe } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'demo',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative z-10 border-t border-white/5 bg-[#09090b]">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-[#d8b485]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Corporate Headquarters */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#d8b485] uppercase mb-4">
              <Mail size={12} className="text-[#d8b485]" />
              {t.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              {t.title}
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
              {t.subtitle}
            </p>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="p-5 rounded-lg bg-[#0e0e15] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-md bg-[#d8b485]/10 border border-[#d8b485]/30 text-[#d8b485]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    {t.emailLabel}
                  </div>
                  <a
                    href="mailto:Contact@unionsvc.com"
                    className="text-base sm:text-lg font-mono font-bold text-white hover:text-[#d8b485] transition-colors"
                  >
                    Contact@unionsvc.com
                  </a>
                  <p className="text-xs text-zinc-400 mt-1">
                    Encrypted intake monitored 24/7 by executive team
                  </p>
                </div>
              </div>

              {/* Corporate HQ / Hubs Card */}
              <div className="p-5 rounded-lg bg-[#0e0e15] border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    {t.hqLabel}
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold text-white">
                    Tokyo // Berlin // London // Global
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Enterprise representative hubs across APAC, EMEA, and the Americas
                  </p>
                </div>
              </div>

              {/* Security SLA */}
              <div className="p-4 rounded-lg bg-black/40 border border-white/5 flex items-center gap-3 text-xs text-zinc-400 font-mono">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span>All communication secured with 256-bit encryption. Zero telemetry selling.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-xl bg-[#0e0e16] border border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">
                    Communication Encrypted & Dispatched
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md leading-relaxed mb-6 font-light">
                    {t.form.successMsg}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', inquiryType: 'demo', message: '' });
                    }}
                    className="cursor-pointer text-xs font-mono uppercase tracking-wider text-[#d8b485] hover:underline"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        {t.form.nameLabel} <span className="text-[#d8b485]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        {t.form.emailLabel} <span className="text-[#d8b485]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@enterprise.com"
                        className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        {t.form.companyLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Global Freight Logistics Corp"
                        className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        {t.form.inquiryTypeLabel}
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                      >
                        {t.form.inquiryOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-zinc-900 text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      {t.form.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your freight volume, ERP requirements (SAP/Oracle/MS), or inquiry details..."
                      className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded text-xs font-mono font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] transition-all uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(216,180,133,0.25)] hover:shadow-[0_6px_25px_rgba(216,180,133,0.35)] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t.form.submittingBtn}</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>{t.form.submitBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
