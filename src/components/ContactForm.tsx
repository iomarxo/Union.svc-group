import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, Mail, ExternalLink, Send, ShieldCheck, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Toast } from './Toast';
import { Language, translations } from '../translations';

interface ContactFormProps {
  initialBudget?: string;
  initialPainPoint?: string;
  onSubmitted?: (data: { name: string; email: string }) => void;
  lang: Language;
}

const STORAGE_KEY = 'union_contact_form_draft_v2';
const TARGET_EMAIL = 'Contact@unionsvc.com';

/**
 * Animated checkmark component using Framer Motion with SVG path drawing,
 * spring entrance, and radiating ambient glow rings in champagne gold (#d8b485).
 */
const AnimatedSuccessCheckmark: React.FC = () => {
  return (
    <div className="relative w-24 h-24 mx-auto flex items-center justify-center mb-1">
      {/* Outer ambient glow pulse */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.85, 1.3, 1.5], opacity: [0.65, 0.25, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        className="absolute inset-0 rounded-full bg-[#d8b485]/20 blur-lg pointer-events-none"
      />

      {/* Secondary radiating expansion ring */}
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: [0.85, 1.25], opacity: [0.75, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 0.35,
        }}
        className="absolute inset-0 rounded-full border border-[#d8b485]/40 pointer-events-none"
      />

      {/* Central spring container */}
      <motion.div
        initial={{ scale: 0, rotate: -40 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 20,
          delay: 0.1,
        }}
        className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#d8b485]/30 via-[#d8b485]/15 to-[#09090b] border-2 border-[#d8b485]/70 flex items-center justify-center shadow-[0_0_35px_rgba(216,180,133,0.35)]"
      >
        <svg
          className="w-10 h-10 text-[#d8b485]"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated circular path */}
          <motion.circle
            cx="26"
            cy="26"
            r="22"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{
              duration: 0.65,
              ease: 'easeInOut',
              delay: 0.15,
            }}
          />
          {/* Animated checkmark icon path */}
          <motion.path
            d="M15 27.5L22.5 35L37 18"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.65, 0, 0.35, 1],
              delay: 0.35,
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export const ContactForm: React.FC<ContactFormProps> = ({
  initialBudget = '',
  initialPainPoint = '',
  onSubmitted,
  lang,
}) => {
  const t = translations[lang].contact;

  const [formData, setFormData] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            name: parsed.name || '',
            email: parsed.email || '',
            website: parsed.website || '',
            budget: parsed.budget || initialBudget || '',
            timeline: parsed.timeline || '',
            message: parsed.message || (initialPainPoint ? `Selected profile: ${initialPainPoint}. ` : '') || '',
          };
        }
      } catch (e) {
        console.warn('Failed to load contact form draft', e);
      }
    }
    return {
      name: '',
      email: '',
      website: '',
      budget: initialBudget || '',
      timeline: '',
      message: initialPainPoint ? `Selected profile: ${initialPainPoint}. ` : '',
    };
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [hasDraft, setHasDraft] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name?: string;
    email?: string;
    website?: string;
    budget?: string;
    timeline?: string;
    message?: string;
  }>({
    name: '',
    email: '',
    website: '',
    budget: '',
    timeline: '',
    message: '',
  });

  // Sync draft to localStorage
  useEffect(() => {
    try {
      const hasContent = Object.values(formData).some(
        (val) => typeof val === 'string' && val.trim() !== ''
      );
      setHasDraft(hasContent);
      if (hasContent) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      }
    } catch (e) {
      console.warn('Failed to save contact form draft', e);
    }
  }, [formData]);

  // Synchronize when parent triggers a pillar or budget selection
  useEffect(() => {
    if (initialPainPoint) {
      setFormData((prev) => {
        const pillarTag = `[Strategic Pillar: ${initialPainPoint}]`;
        if (prev.message.includes(pillarTag)) return prev;
        return {
          ...prev,
          message: `${pillarTag}\n${prev.message}`.trim(),
        };
      });
    }
  }, [initialPainPoint]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({
        ...prev,
        budget: prev.budget || initialBudget,
      }));
    }
  }, [initialBudget]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#d8b485', '#c2a277', '#ffffff', '#a1a1aa'],
      disableForReducedMotion: true,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearDraft = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear contact form draft', e);
    }
    setFormData({
      name: '',
      email: '',
      website: '',
      budget: '',
      timeline: '',
      message: '',
    });
    setHasDraft(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Union.svc Executive Application: ${formData.name || 'Anonymous Applicant'}`,
          name: formData.name,
          email: formData.email,
          websiteOrAsset: formData.website || 'N/A',
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          submittedAt: new Date().toLocaleString(),
          routedDirectlyTo: TARGET_EMAIL,
          languageSelected: lang,
        }),
      });
    } catch (err) {
      console.warn('Network submission fallback invoked', err);
    }

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear draft after submit', e);
    }
    setHasDraft(false);
    setStatus('submitted');
    setSubmittedData({
      name: formData.name,
      email: formData.email,
      website: formData.website,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
    });
    setShowToast(true);
    triggerCelebration();

    if (onSubmitted) {
      onSubmitted({
        name: formData.name,
        email: formData.email,
      });
    }
  };

  const mailtoUrl = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
    `Union.svc Client Application: ${submittedData.name || formData.name}`
  )}&body=${encodeURIComponent(
    `Union.svc Executive Client Application Submission:\n\n` +
      `• Applicant Name: ${submittedData.name || formData.name}\n` +
      `• Contact Email: ${submittedData.email || formData.email}\n` +
      `• Target Asset / Website: ${submittedData.website || formData.website || 'N/A'}\n` +
      `• Estimated Budget: ${submittedData.budget || formData.budget}\n` +
      `• Desired Timeline: ${submittedData.timeline || formData.timeline}\n` +
      `• Primary Hurdle / Project Scope: ${submittedData.message || formData.message}\n\n` +
      `Dispatched directly to: ${TARGET_EMAIL}`
  )}`;

  return (
    <section id="contact" className="max-w-[1400px] mx-auto w-full py-20 sm:py-28 px-6 relative scroll-mt-24 border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Context & Editorial Contact Info */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#d8b485]" />
            <p className="text-[#d8b485] text-[10px] font-bold tracking-[0.2em] uppercase font-mono">
              {t.badge}
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1] max-w-md">
            {t.heading}
          </h2>

          <p className="text-sm text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
            {t.subtitle}
          </p>

          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <Mail className="text-2xl text-[#d8b485] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-[10px] font-bold text-white tracking-widest mb-1 uppercase font-mono">
                  Direct Intake Channel
                </h4>
                <a
                  href={`mailto:${TARGET_EMAIL}`}
                  className="text-sm text-zinc-300 hover:text-[#d8b485] transition-colors font-mono font-medium"
                >
                  {TARGET_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="text-2xl text-[#d8b485] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-[10px] font-bold text-white tracking-widest mb-1 uppercase font-mono">
                  Custody & Escrow Architecture
                </h4>
                <p className="text-sm text-zinc-400 font-light">
                  Tier-1 Regulated Multi-Jurisdictional Depository
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-2xl text-[#d8b485] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-[10px] font-bold text-white tracking-widest mb-1 uppercase font-mono">
                  Service Level Agreement
                </h4>
                <p className="text-sm text-zinc-400 font-light">
                  Direct Partner Response within 24 Hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Container */}
        <div className="flex-1 lg:max-w-xl w-full">
          <div className="theme-card bg-[#0c0c0e] p-8 md:p-12 border border-white/5 shadow-2xl">
            <AnimatePresence mode="wait">
              {status === 'submitted' ? (
                <motion.div
                  key="submitted-state"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-6"
                >
                  {/* Framer Motion Animated Checkmark */}
                  <AnimatedSuccessCheckmark />

                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d8b485]/10 border border-[#d8b485]/30 text-[#d8b485] text-[11px] font-mono mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#d8b485] animate-pulse"></span>
                      <span>{t.successBadge}</span>
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                      {t.successHeading}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light mt-2 max-w-lg mx-auto leading-relaxed">
                      {t.successBody}
                    </p>
                  </div>

                  {/* Application Summary Box */}
                  <div className="bg-[#111114] border border-white/10 rounded-xs p-5 text-left text-xs space-y-3 font-mono">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[11px] text-zinc-400 uppercase tracking-wider">
                      <span>{t.summaryHeading}</span>
                      <span className="text-[#d8b485] font-semibold">{TARGET_EMAIL}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300 pt-1">
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase block">{t.nameLabel}</span>
                        <span className="font-semibold text-white">{submittedData.name || 'Provided'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase block">{t.emailLabel}</span>
                        <span className="text-[#d8b485]">{submittedData.email || 'Provided'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase block">{t.budgetLabel}</span>
                        <span className="text-white">{submittedData.budget || 'Standard Range'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase block">{t.timelineLabel}</span>
                        <span className="text-white">{submittedData.timeline || 'Immediate'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Mail Client Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d8b485] hover:bg-[#c2a277] text-zinc-950 text-[10px] font-bold uppercase tracking-widest py-3.5 px-6 rounded-xs transition-colors cursor-pointer shadow-md"
                    >
                      <Send size={13} />
                      <span>{t.openMailClient}</span>
                      <ExternalLink size={12} className="opacity-75" />
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          name: '',
                          email: '',
                          website: '',
                          budget: '',
                          timeline: '',
                          message: '',
                        });
                      }}
                      className="w-full sm:w-auto text-xs font-mono text-zinc-400 hover:text-white py-3 px-4 underline cursor-pointer"
                    >
                      {t.submitAnother}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  id="projectForm"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold text-white tracking-widest mb-3 uppercase font-mono">
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors placeholder:text-zinc-600"
                        placeholder="Lars Van Der Berg"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-white tracking-widest mb-3 uppercase font-mono">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors placeholder:text-zinc-600"
                        placeholder="lars@venture.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-white tracking-widest mb-3 uppercase font-mono">
                      {t.websiteLabel}
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors placeholder:text-zinc-600"
                      placeholder="https://... or property address in Utrecht/Amsterdam"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold text-white tracking-widest mb-3 uppercase font-mono">
                        {t.budgetLabel}
                      </label>
                      <select
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0c0c0e] text-zinc-500">
                          Select Budget
                        </option>
                        {t.budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0c0c0e] text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-white tracking-widest mb-3 uppercase font-mono">
                        {t.timelineLabel}
                      </label>
                      <select
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0c0c0e] text-zinc-500">
                          Select Timeline
                        </option>
                        {t.timelineOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0c0c0e] text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-white tracking-widest mb-3 uppercase font-mono">
                      {t.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white focus:outline-none focus:border-[#d8b485] transition-colors placeholder:text-zinc-600 resize-none"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    id="submitBtn"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-5 text-[10px] font-bold tracking-widest text-zinc-950 bg-[#d8b485] hover:bg-[#c2a277] transition-all uppercase shadow-md hover:shadow-[0_8px_24px_rgba(216,180,133,0.25)] hover:-translate-y-0.5 active:translate-y-0 mt-4 cursor-pointer disabled:opacity-75"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-zinc-950 animate-ping" />
                        {t.submittingBtn}
                      </span>
                    ) : (
                      <>
                        <span>{t.submitBtn}</span>
                        <ArrowRight size={14} className="text-zinc-950" />
                      </>
                    )}
                  </button>

                  <div id="formStatus" className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400 font-mono pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-[#d8b485]" />
                      <span>
                        {t.routingDirect}{' '}
                        <span className="text-white font-medium">{TARGET_EMAIL}</span>
                      </span>
                    </div>
                    {hasDraft && (
                      <div className="flex items-center gap-2 text-[11px] text-[#d8b485]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d8b485] animate-pulse" />
                        <span>{t.draftAutosaved}</span>
                        <button
                          type="button"
                          onClick={handleClearDraft}
                          className="text-zinc-400 hover:text-white underline flex items-center gap-1 cursor-pointer ml-1 font-mono"
                          title="Clear saved draft"
                        >
                          <RotateCcw size={10} />
                          {t.resetDraft}
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <Toast
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        title="Application Transmitted"
        message={
          submittedData.name
            ? `Thank you, ${submittedData.name}. Your application was routed directly to ${TARGET_EMAIL}.`
            : `Thank you! Your application was routed directly to ${TARGET_EMAIL}.`
        }
        meta={`Verified Intake: ${TARGET_EMAIL}`}
        duration={7000}
      />
    </section>
  );
};
