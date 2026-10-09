import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Toast } from './Toast';

interface ContactFormProps {
  initialBudget?: string;
  initialPainPoint?: string;
  onSubmitted?: (data: { name: string; email: string }) => void;
}

const STORAGE_KEY = 'union_contact_form_draft';

export const ContactForm: React.FC<ContactFormProps> = ({
  initialBudget = '',
  initialPainPoint = '',
  onSubmitted,
}) => {
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
            message: parsed.message || (initialPainPoint ? `Selected plan: ${initialPainPoint}. ` : '') || '',
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
      message: initialPainPoint ? `Selected plan: ${initialPainPoint}. ` : '',
    };
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [hasDraft, setHasDraft] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string }>({
    name: '',
    email: '',
  });

  // Sync draft to localStorage on changes
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

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#34d399', '#f59e0b', '#171717', '#ffffff'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.65 },
        colors: ['#10b981', '#059669', '#f59e0b'],
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.65 },
        colors: ['#10b981', '#059669', '#f59e0b'],
        disableForReducedMotion: true,
      });
    }, 200);
  };

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
    if (initialPainPoint) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? prev.message : `Selected plan: ${initialPainPoint}. `,
      }));
    }
  }, [initialBudget, initialPainPoint]);

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
      console.warn('Failed to remove draft', e);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      // Clear draft on successful submission
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        console.warn('Failed to remove draft on submit', e);
      }
      setHasDraft(false);
      setStatus('submitted');
      setSubmittedData({
        name: formData.name,
        email: formData.email,
      });
      setShowToast(true);
      triggerCelebration();

      if (onSubmitted) {
        onSubmitted({
          name: formData.name,
          email: formData.email,
        });
      }
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-neutral-200 bg-white relative z-10 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">
            Secure Your Slot
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 tracking-tighter mb-4">
            Ready to stop guessing?
          </h3>
          <p className="text-neutral-500 text-xs sm:text-sm font-light">
            We limit our active builds to ensure we hit our 72-hour delivery standard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm"
        >
          {status === 'submitted' ? (
            <div className="bg-neutral-50 p-8 sm:p-12 rounded-[1px] text-center space-y-4 animate-in">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={26} />
              </div>
              <h4 className="text-xl font-medium text-neutral-900 tracking-tight">
                APPLICATION RECEIVED
              </h4>
              <p className="text-xs sm:text-sm text-emerald-600 font-light">
                Success. We will review your application within 24 hours.
              </p>
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
                className="text-xs text-neutral-400 hover:text-neutral-700 underline cursor-pointer pt-2"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form
              id="projectForm"
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 bg-neutral-50 p-6 sm:p-8 rounded-[1px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full input-base px-3 py-3 rounded-sm text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full input-base px-3 py-3 rounded-sm text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">
                  Company Website (Optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full input-base px-3 py-3 rounded-sm text-sm"
                  placeholder="https://"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-600"
                  >
                    <option value="" disabled>Select Range</option>
                    <option value="1.5k-5k">$1,500 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-600"
                  >
                    <option value="" disabled>Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1month">Within 1 Month</option>
                    <option value="quarter">This Quarter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">
                  Primary Pain Point
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full input-base px-3 py-3 rounded-sm text-sm"
                  placeholder="What is wrong with your current site?"
                />
              </div>

              <div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-sm mt-4">
                <button
                  type="submit"
                  id="submitBtn"
                  disabled={status === 'submitting'}
                  className="w-full bg-neutral-900 text-white py-4 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {status === 'submitting' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>SUBMIT APPLICATION</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>

              <div id="formStatus" className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400 font-mono">
                <span>We review applications within 24 hours.</span>
                {hasDraft && (
                  <div className="flex items-center gap-2 text-[11px] text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Draft autosaved</span>
                    <button
                      type="button"
                      onClick={handleClearDraft}
                      className="text-neutral-400 hover:text-neutral-700 underline flex items-center gap-1 cursor-pointer ml-1 font-mono"
                      title="Clear saved draft"
                    >
                      <RotateCcw size={10} />
                      Reset
                    </button>
                  </div>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>

      {/* Floating Toast Notification */}
      <Toast
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        title="Application Successfully Sent"
        message={
          submittedData.name
            ? `Thank you, ${submittedData.name}. Your application was delivered to Union.svc.`
            : 'Thank you! Your application was delivered to Union.svc.'
        }
        meta={
          submittedData.email
            ? `Confirmation sent to: ${submittedData.email}`
            : 'Priority queue status: Active'
        }
        duration={6000}
      />
    </section>
  );
};
