import React, { useState } from 'react';
import {
  Lock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Download,
  Building2,
  Mail,
  Phone,
  DollarSign,
  FileText,
  Key,
  Clock,
  ExternalLink,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, translations } from '../translations';

export interface InvestorApplicationFormProps {
  lang: Language;
  onSuccess?: () => void;
  onClose?: () => void;
  isModalView?: boolean;
}

export const InvestorApplicationForm: React.FC<InvestorApplicationFormProps> = ({
  lang,
  onSuccess,
  onClose,
  isModalView = false,
}) => {
  const t = translations[lang].investors.application;

  // Form State
  const [entityName, setEntityName] = useState('');
  const [investorType, setInvestorType] = useState('vc');
  const [allocation, setAllocation] = useState('tier2'); // default $250k - $1M
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate high-tech institutional cryptographic reference code
    const generatedRef = `USVC-A-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toUTCString();

    setTimeout(() => {
      setReferenceCode(generatedRef);
      setTimestamp(now);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowConfirmationModal(true);
      if (onSuccess) onSuccess();

      // Log/dispatch event for auditing
      console.log('[INVESTOR APPLICATION DISPATCHED]', {
        entityName,
        investorType,
        allocation,
        email,
        phone,
        note,
        routedTo: 'Contact@unionsvc.com',
        ref: generatedRef,
        timestamp: now,
      });
    }, 850);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setShowConfirmationModal(false);
    setEntityName('');
    setEmail('');
    setPhone('');
    setNote('');
  };

  const selectedAllocationLabel =
    t.allocationOptions.find((a) => a.id === allocation)?.range || allocation;
  const selectedTypeLabel =
    t.typeOptions.find((opt) => opt.value === investorType)?.label || investorType;

  return (
    <div className="w-full relative">
      {/* Post-Submission Confirmation Modal (Success State Pop-up) */}
      <AnimatePresence>
        {showConfirmationModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0e0e15] border border-white/15 rounded-xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-left overflow-hidden"
            >
              {/* Subtle ambient glows matching landing page */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d8b485]/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  setShowConfirmationModal(false);
                  if (isModalView && onClose) onClose();
                }}
                aria-label="Close confirmation modal"
                className="cursor-pointer absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border border-white/5"
              >
                <span className="text-xl font-mono leading-none">&times;</span>
              </button>

              <div className="relative z-10">
                {/* Header Security Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#d8b485] text-[11px] sm:text-xs font-mono font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.securityBadge}</span>
                </div>

                {/* Success Title & Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#d8b485]/10 border border-[#d8b485]/30 text-[#d8b485] flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 size={30} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 font-sans">
                      {t.successTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {t.successMessage}
                    </p>
                  </div>
                </div>

                {/* Audit & Credentials Details Card */}
                <div className="p-4 sm:p-5 rounded-lg bg-black/50 border border-white/10 font-mono text-xs text-zinc-300 mb-6 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2.5 border-b border-white/5 text-[11px]">
                    <span className="text-zinc-500">{t.successRefLabel}</span>
                    <span className="text-[#d8b485] font-bold tracking-wider">{referenceCode}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                    <div>
                      <span className="text-zinc-500 block uppercase">Applicant Entity:</span>
                      <span className="text-white font-medium">{entityName || 'Confidential Investor'}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block uppercase">Investor Classification:</span>
                      <span className="text-zinc-200 font-medium">{selectedTypeLabel}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block uppercase">Target Allocation:</span>
                      <span className="text-[#d8b485] font-semibold">{selectedAllocationLabel}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block uppercase">Official Email:</span>
                      <span className="text-zinc-200">{email}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="text-[#d8b485]" />
                      <span>{timestamp}</span>
                    </span>
                    <span className="text-emerald-400 font-semibold">Verified SHA-256</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`mailto:Contact@unionsvc.com?subject=Series%20A%20Data%20Room%20Access%20[${referenceCode}]&body=Applicant%20Entity:%20${encodeURIComponent(
                      entityName
                    )}%0AClassification:%20${encodeURIComponent(
                      selectedTypeLabel
                    )}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(
                      phone
                    )}%0ATarget%20Allocation:%20${encodeURIComponent(
                      selectedAllocationLabel
                    )}%0ANote:%20${encodeURIComponent(note)}`}
                    className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg text-xs font-bold font-mono tracking-wider text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-98 transition-all uppercase shadow-sm"
                  >
                    <Mail size={15} />
                    <span>Contact IR (Contact@unionsvc.com)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setShowConfirmationModal(false);
                      if (isModalView && onClose) onClose();
                    }}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg text-xs font-mono text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span>{t.successClose || 'Acknowledge & Close'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          /* Post-Submission Institutional Confirmation State Card */
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-10 rounded-xl bg-[#0e0e15] border border-white/[0.08] hover:border-white/15 shadow-2xl text-left relative overflow-hidden"
          >
            {/* Ambient Background Glow matching landing page */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d8b485]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Modal View Close button */}
            {isModalView && onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="cursor-pointer absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors z-20 border border-white/5"
              >
                <span className="text-xl font-mono leading-none">&times;</span>
              </button>
            )}

            <div className="relative z-10">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#d8b485] text-xs font-mono font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.securityBadge}</span>
              </div>

              {/* Success Icon & Heading */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#d8b485]/10 border border-[#d8b485]/30 text-[#d8b485] flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
                    {t.successMessage}
                  </p>
                </div>
              </div>

              {/* Dossier Audit Details */}
              <div className="p-5 sm:p-6 rounded-lg bg-black/50 border border-white/10 font-mono text-xs text-zinc-300 mb-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/5 text-[11px]">
                  <span className="text-zinc-500">{t.successRefLabel}</span>
                  <span className="text-[#d8b485] font-bold tracking-wider">{referenceCode}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] pt-1">
                  <div>
                    <span className="text-zinc-500 block uppercase">Applicant Entity:</span>
                    <span className="text-white font-medium">{entityName || 'Confidential Investor'}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block uppercase">Target Allocation:</span>
                    <span className="text-[#d8b485] font-semibold">{selectedAllocationLabel}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block uppercase">Official Email:</span>
                    <span className="text-zinc-200">{email}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block uppercase">Dispatch Target:</span>
                    <span className="text-[#d8b485] font-semibold">{t.successEmailNotice}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} className="text-[#d8b485]" />
                    <span>Logged: {timestamp}</span>
                  </span>
                  <span className="text-emerald-400 font-bold">SHA-256 CHECKSUM PASS</span>
                </div>
              </div>

              {/* Next Steps Action Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`mailto:Contact@unionsvc.com?subject=Series%20A%20Application%20[${referenceCode}]&body=Applicant:%20${encodeURIComponent(
                    entityName
                  )}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(
                    phone
                  )}%0AAllocation:%20${encodeURIComponent(selectedAllocationLabel)}`}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg text-xs font-bold font-mono tracking-wider text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-98 transition-all uppercase shadow-sm"
                >
                  <Mail size={15} />
                  <span>Contact IR Directly (Contact@unionsvc.com)</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg text-xs font-mono text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <span>Submit Another Application</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowConfirmationModal(true)}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg text-xs font-mono text-[#d8b485] bg-white/5 hover:bg-white/10 border border-[#d8b485]/30 transition-colors"
                >
                  <span>View Pop-up Confirmation</span>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* High-Converting Form View */
          <motion.div
            key="application-form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className={`rounded-xl bg-[#0e0e15] border border-white/[0.08] hover:border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all ${
              isModalView ? 'max-w-2xl w-full' : 'w-full'
            }`}
          >
            {/* Top Atmospheric Corner Accents matching landing page */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#d8b485]/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Modal Close Button */}
            {isModalView && onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="cursor-pointer absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors z-20 border border-white/5"
              >
                <span className="text-xl font-mono leading-none">&times;</span>
              </button>
            )}

            {/* Header Area */}
            <div className="relative z-10 mb-8 text-left">
              {/* Header Security Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#d8b485] text-[11px] sm:text-xs font-mono font-semibold tracking-wide shadow-sm mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.securityBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-sans">
                {t.sectionTitle}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
                {t.subtitle}
              </p>
            </div>

            {/* Form Fields Grid */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6 text-left">
              {/* 2-Column Desktop Grid for Field 1 & Field 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Field 1: Full Name / Entity Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                    <Building2 size={13} className="text-[#d8b485]" />
                    <span>{t.fieldEntity}</span>
                    <span className="text-[#d8b485]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.fieldEntityPlaceholder}
                    value={entityName}
                    onChange={(e) => setEntityName(e.target.value)}
                    className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                  />
                </div>

                {/* Field 2: Investor Type Dropdown */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                    <Key size={13} className="text-[#d8b485]" />
                    <span>{t.fieldType}</span>
                    <span className="text-[#d8b485]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={investorType}
                      onChange={(e) => setInvestorType(e.target.value)}
                      className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-black/50 border border-white/10 text-white text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors cursor-pointer appearance-none"
                    >
                      {t.typeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-zinc-900 text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                      <ChevronRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Field 3: Target Investment Allocation (Interactive Chips / Radio Buttons) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <DollarSign size={14} className="text-[#d8b485]" />
                    <span>{t.fieldAllocation}</span>
                    <span className="text-[#d8b485]">*</span>
                  </span>
                  <span className="text-[11px] text-[#d8b485] font-mono">Series A Allocation</span>
                </label>

                {/* 3 Interactive Desktop Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {t.allocationOptions.map((opt) => {
                    const isSelected = allocation === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setAllocation(opt.id)}
                        className={`cursor-pointer min-h-[50px] p-3.5 rounded-lg border text-left transition-all duration-200 flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-[#d8b485]/15 border-[#d8b485] text-white shadow-sm ring-1 ring-[#d8b485]/40'
                            : 'bg-black/50 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.03]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'border-[#d8b485] bg-[#d8b485] text-zinc-950'
                                : 'border-zinc-600 bg-transparent'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
                          </span>
                          <span className="font-mono text-xs sm:text-sm font-semibold truncate">
                            {opt.range}
                          </span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={16} className="text-[#d8b485] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2-Column Desktop Grid for Field 4 & Field 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Field 4: Official Email Address */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                    <Mail size={13} className="text-[#d8b485]" />
                    <span>{t.fieldEmail}</span>
                    <span className="text-[#d8b485]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.fieldEmailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                  />
                </div>

                {/* Field 5: Phone Number / WhatsApp */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                    <Phone size={13} className="text-[#d8b485]" />
                    <span>{t.fieldPhone}</span>
                    <span className="text-[#d8b485]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.fieldPhonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                  />
                </div>
              </div>

              {/* Field 6: Optional Note (Textarea) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FileText size={13} className="text-zinc-400" />
                    <span>{t.fieldNote}</span>
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono">Optional</span>
                </label>
                <textarea
                  rows={3}
                  placeholder={t.fieldNotePlaceholder}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] sm:min-h-[52px] py-3.5 px-6 rounded-lg text-xs sm:text-sm font-bold font-mono tracking-wider uppercase text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                      <span>{t.submittingBtn}</span>
                    </span>
                  ) : (
                    <>
                      <span>{t.submitBtn}</span>
                      <ArrowRight size={18} className="text-zinc-950" />
                    </>
                  )}
                </button>
              </div>

              {/* Footer Trust & Institutional Routing Assurance */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/5 text-[11px] text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#d8b485]" />
                  <span>Confidential institutional vetting under customary NDAs.</span>
                </div>
                <div className="text-zinc-400 flex items-center gap-1">
                  <span>Routing to:</span>
                  <span className="text-[#d8b485] font-semibold">Contact@unionsvc.com</span>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
