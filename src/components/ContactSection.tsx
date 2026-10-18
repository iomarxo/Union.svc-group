import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Language, translations } from '../translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang].contact;

  const [activeHub, setActiveHub] = useState<'tokyo' | 'berlin' | 'london' | 'global'>('tokyo');

  const hubs = {
    tokyo: {
      city: 'Tokyo Hub (APAC)',
      tz: 'JST · UTC+9',
      address: 'Marunouchi Chiyoda-ku, Tokyo 100-0005',
      focus: 'APAC Maritime & Automated Carrier Routing',
      email: 'Contact@unionsvc.com',
    },
    berlin: {
      city: 'Berlin Gateway (EMEA)',
      tz: 'CET · UTC+1',
      address: 'Friedrichstraße 68, 10117 Berlin',
      focus: 'European Multimodal Corridor & ESG Abatement',
      email: 'Contact@unionsvc.com',
    },
    london: {
      city: 'London Corporate (UK & Global)',
      tz: 'GMT · UTC+0',
      address: '100 Bishopsgate, London EC2N 4AG',
      focus: 'Global Treasury & Institutional Relations',
      email: 'Contact@unionsvc.com',
    },
    global: {
      city: 'Global Autonomous Network',
      tz: '24/7/365 Non-stop',
      address: 'Distributed Active-Active Cloud Boundary',
      focus: 'Zero Trust Telemetry & Unified API Ingestion',
      email: 'Contact@unionsvc.com',
    },
  };

  const curHub = hubs[activeHub];

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
    }, 700);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10 border-b border-white/[0.08] bg-[#09090b]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (5 Cols): Interactive Operations Hubs & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="text-xs font-mono text-[#d8b485] tracking-widest uppercase mb-3">
              {t.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              {t.title}
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 sm:mb-8">
              {t.subtitle}
            </p>

            {/* Interactive Hub Segmented Bar with 48px Touch Targets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl mb-4 font-mono text-xs">
              <button
                onClick={() => setActiveHub('tokyo')}
                className={`min-h-[48px] py-2 px-3 rounded-lg transition-colors cursor-pointer flex items-center justify-center ${
                  activeHub === 'tokyo'
                    ? 'bg-white/15 text-white font-medium border border-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Tokyo
              </button>
              <button
                onClick={() => setActiveHub('berlin')}
                className={`min-h-[48px] py-2 px-3 rounded-lg transition-colors cursor-pointer flex items-center justify-center ${
                  activeHub === 'berlin'
                    ? 'bg-white/15 text-white font-medium border border-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Berlin
              </button>
              <button
                onClick={() => setActiveHub('london')}
                className={`min-h-[48px] py-2 px-3 rounded-lg transition-colors cursor-pointer flex items-center justify-center ${
                  activeHub === 'london'
                    ? 'bg-white/15 text-white font-medium border border-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                London
              </button>
              <button
                onClick={() => setActiveHub('global')}
                className={`min-h-[48px] py-2 px-3 rounded-lg transition-colors cursor-pointer flex items-center justify-center ${
                  activeHub === 'global'
                    ? 'bg-white/15 text-white font-medium border border-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Global
              </button>
            </div>

            {/* Hub Details Card */}
            <div className="p-5 rounded-lg bg-[#0e0e15] border border-white/[0.08] mb-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-white font-semibold">{curHub.city}</span>
                <span className="text-[#d8b485] flex items-center gap-1 text-[11px]">
                  <Clock size={11} /> {curHub.tz}
                </span>
              </div>
              <div className="text-zinc-300">{curHub.address}</div>
              <div className="text-[11px] text-zinc-400 pt-1 border-t border-white/5">
                Primary Focus: <span className="text-zinc-200">{curHub.focus}</span>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-lg bg-[#0e0e15] border border-white/[0.08] flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#d8b485]">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-0.5">
                  Direct Encrypted Channel
                </div>
                <a
                  href="mailto:Contact@unionsvc.com"
                  className="text-base font-mono font-medium text-white hover:text-[#d8b485] transition-colors"
                >
                  Contact@unionsvc.com
                </a>
                <p className="text-xs text-zinc-400 font-light mt-0.5">
                  Direct dispatch to executive logistics directors within 4 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Enterprise Intake Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-xl bg-[#0e0e15] border border-white/[0.08] shadow-xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-mono">
                    Communication Received & Encrypted
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed mb-6 font-light">
                    {t.form.successMsg}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', inquiryType: 'demo', message: '' });
                    }}
                    className="cursor-pointer min-h-[48px] px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#d8b485] hover:underline flex items-center justify-center"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        {t.form.nameLabel} <span className="text-[#d8b485]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        {t.form.emailLabel} <span className="text-[#d8b485]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@enterprise.com"
                        className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        {t.form.companyLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Global Freight Logistics Corp"
                        className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        {t.form.inquiryTypeLabel}
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors cursor-pointer"
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
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      {t.form.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your freight volume, ERP requirements (SAP/Oracle/MS), or inquiry details..."
                      className="w-full min-h-[110px] px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] py-3.5 px-6 rounded-lg text-xs font-bold font-mono tracking-wider uppercase text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
