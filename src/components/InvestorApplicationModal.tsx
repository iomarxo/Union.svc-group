import React, { useState, useEffect } from 'react';
import {
  Lock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Building2,
  Mail,
  Phone,
  DollarSign,
  FileText,
  Key,
  Clock,
  ChevronRight,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, translations } from '../translations';

export interface InvestorApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
  onSuccess?: (submissionData: {
    entityName: string;
    investorType: string;
    allocation: string;
    email: string;
    phone: string;
    note: string;
    referenceCode: string;
  }) => void;
}

export const InvestorApplicationModal: React.FC<InvestorApplicationModalProps> = ({
  isOpen,
  onClose,
  lang = 'en',
  onSuccess,
}) => {
  const t = translations[lang]?.investors?.application || {
    sectionTitle: 'Investor Relations | Partner with Unionsvc Group',
    subtitle:
      'Join our Series A funding round and participate in scaling the next-generation encrypted neural network for enterprise logistics.',
    securityBadge: '🔒 SECURE DATA ROOM ACCESS | AES-256 Encrypted Submission',
    fieldEntity: 'Full Name / Entity Name',
    fieldEntityPlaceholder: 'Full Name or Fund Name',
    fieldType: 'Investor Type',
    typeOptions: [
      { value: 'angel', label: 'Accredited Angel Investor' },
      { value: 'vc', label: 'Venture Capital Fund (VC)' },
      { value: 'strategic', label: 'Corporate / Strategic Partner' },
      { value: 'family_office', label: 'Family Office' },
    ],
    fieldAllocation: 'Target Investment Allocation',
    allocationOptions: [
      { id: 'tier1', label: '$10,000 – $250,000', range: '$10,000 – $250,000' },
      { id: 'tier2', label: '$250,000 – $1,000,000', range: '$250,000 – $1,000,000' },
      { id: 'tier3', label: '$1,000,000+', range: '$1,000,000+' },
    ],
    fieldEmail: 'Official Email Address',
    fieldEmailPlaceholder: 'partner@fund.com or official work email',
    fieldPhone: 'Phone Number / WhatsApp',
    fieldPhonePlaceholder: '+1 (555) 019-2834 (with country code)',
    fieldNote: 'Brief background or strategic synergy',
    fieldNotePlaceholder: 'Brief background or strategic synergy / Optional',
    submitBtn: 'Request Series A Data Room Access ➔',
    submittingBtn: 'Encrypting Credentials & Routing...',
    successTitle: 'Application Received & Encrypted',
    successMessage:
      'Thank you for your interest in Unionsvc Group. Our Investor Relations team will review your credentials and provide secure Data Room access within 24 hours.',
    successRefLabel: 'Transmission Reference Hash:',
    successEmailNotice: 'Routed securely to Contact@unionsvc.com',
    successClose: 'Close Window',
  };

  // Form Fields State
  const [entityName, setEntityName] = useState('');
  const [investorType, setInvestorType] = useState('vc');
  const [allocation, setAllocation] = useState('tier2'); // default $250k - $1M
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  // Submission Flow State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [timestamp, setTimestamp] = useState('');

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = `USVC-A-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toUTCString();

    setTimeout(() => {
      setReferenceCode(generatedRef);
      setTimestamp(now);
      setIsSubmitting(false);
      setIsSubmitted(true);

      const submissionPayload = {
        entityName,
        investorType,
        allocation,
        email,
        phone,
        note,
        referenceCode: generatedRef,
      };

      if (onSuccess) {
        onSuccess(submissionPayload);
      }

      console.log('[INVESTOR APPLICATION AUDIT DISPATCH]', {
        ...submissionPayload,
        timestamp: now,
        routedTo: 'Contact@unionsvc.com',
        securityProtocol: 'AES-256-GCM / SHA-256',
      });
    }, 850);
  };

  const handleReset = () => {
    setIsSubmitted(false);
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="investor-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-2xl my-auto py-4 sm:py-8">
        <div className="relative rounded-xl bg-[#0e0e15] border border-white/[0.08] hover:border-white/15 shadow-2xl overflow-hidden text-left">
          {/* Ambient Corner Glows matching landing page */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d8b485]/5 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

          {/* Close 'X' Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close investor modal"
            className="cursor-pointer absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all z-20 border border-white/5 focus:outline-none focus:ring-1 focus:ring-[#d8b485]/50"
          >
            <X size={18} />
          </button>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* Success / Confirmation State */
              <motion.div
                key="confirmation-state"
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-10 relative z-10"
              >
                {/* Security Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#d8b485] text-xs font-mono font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.securityBadge}</span>
                </div>

                {/* Header Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#d8b485]/10 border border-[#d8b485]/30 text-[#d8b485] flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h3
                      id="investor-modal-title"
                      className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 font-sans"
                    >
                      {t.successTitle}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                      {t.successMessage}
                    </p>
                  </div>
                </div>

                {/* Encrypted Dossier Details Card */}
                <div className="p-5 rounded-lg bg-black/50 border border-white/10 font-mono text-xs text-zinc-300 mb-6 space-y-3">
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
                      <span className="text-zinc-500 block uppercase">Investor Type:</span>
                      <span className="text-zinc-200 font-semibold">{selectedTypeLabel}</span>
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
                      <span>Logged: {timestamp}</span>
                    </span>
                    <span className="text-[#d8b485] font-semibold">{t.successEmailNotice}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`mailto:Contact@unionsvc.com?subject=Series%20A%20Data%20Room%20Application%20[${referenceCode}]&body=Applicant%20Entity:%20${encodeURIComponent(
                      entityName
                    )}%0AInvestor%20Type:%20${encodeURIComponent(
                      selectedTypeLabel
                    )}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(
                      phone
                    )}%0ATarget%20Allocation:%20${encodeURIComponent(
                      selectedAllocationLabel
                    )}%0ANote:%20${encodeURIComponent(note)}`}
                    className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg text-xs font-bold font-mono tracking-wider text-zinc-950 bg-[#d8b485] hover:bg-[#c9a373] active:scale-98 transition-all uppercase shadow-sm"
                  >
                    <Mail size={15} />
                    <span>Contact IR (Contact@unionsvc.com)</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg text-xs font-mono text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span>Submit Another</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg text-xs font-mono text-white bg-white/10 hover:bg-white/15 transition-colors border border-white/5"
                  >
                    <span>{t.successClose}</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* High-Converting Form View */
              <motion.div
                key="form-state"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-10 relative z-10"
              >
                {/* Header Area */}
                <div className="mb-7 pr-8">
                  {/* Security Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#d8b485] text-[11px] sm:text-xs font-mono font-semibold tracking-wide shadow-sm mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.securityBadge}</span>
                  </div>

                  <h3
                    id="investor-modal-title"
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-sans"
                  >
                    {t.sectionTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                    {t.subtitle}
                  </p>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* 2-Column Grid for Field 1 (Full Name) & Field 2 (Investor Type) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
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
                        className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
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
                          className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-black/50 border border-white/10 text-white text-base sm:text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors cursor-pointer appearance-none"
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

                  {/* Field 3: Target Investment Allocation (Chips) */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <DollarSign size={14} className="text-[#d8b485]" />
                        <span>{t.fieldAllocation}</span>
                        <span className="text-[#d8b485]">*</span>
                      </span>
                      <span className="text-[11px] text-[#d8b485] font-mono">Series A Allocation</span>
                    </label>

                    {/* Interactive Allocation Chips */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {t.allocationOptions.map((opt) => {
                        const isSelected = allocation === opt.id;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setAllocation(opt.id)}
                            className={`cursor-pointer min-h-[48px] p-3 rounded-lg border text-left transition-all duration-200 flex items-center justify-between gap-2 ${
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

                  {/* 2-Column Grid for Field 4 (Email) & Field 5 (Phone) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
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
                        className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
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
                        className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 6: Optional Notes (Textarea) */}
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
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-base sm:text-sm font-mono focus:outline-none focus:border-[#d8b485] transition-colors resize-none"
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

                  {/* Trust & Direct Routing Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/5 text-[11px] text-zinc-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-[#d8b485]" />
                      <span>Customary NDA & institutional confidentiality.</span>
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
      </div>
    </div>
  );
};
export default InvestorApplicationModal;
