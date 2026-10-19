import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Network, Sparkles, Building2 } from 'lucide-react';
import { Language } from '../translations';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    freightVolume: '100-500',
    preferredSystem: 'sap',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0e0e15] border border-white/10 rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-left">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">
              Demo Access Scheduled
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed mb-6 font-light">
              Your credentials for the Union|svc Group Sandbox and a direct executive calendar invitation have been transmitted to <strong className="text-white">{formData.email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="cursor-pointer px-6 py-3 min-h-[48px] rounded-lg bg-[#d8b485] hover:bg-[#c4a071] text-zinc-950 font-mono text-xs font-bold uppercase transition-all"
            >
              Return to Platform
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Enterprise Sandbox & Live Walkthrough</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Request Platform Demo
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              Experience Union|svc Group's AI freight brokerage, end-to-end encrypted communications, and unified ERP integration in real-time.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Hayes"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#d8b485] transition-colors"
                />
              </div>

              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jordan@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#d8b485] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                    Monthly Shipments
                  </label>
                  <select
                    value={formData.freightVolume}
                    onChange={(e) => setFormData({ ...formData, freightVolume: e.target.value })}
                    className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#d8b485] transition-colors cursor-pointer"
                  >
                    <option value="50-100" className="bg-zinc-900">50 - 100 loads</option>
                    <option value="100-500" className="bg-zinc-900">100 - 500 loads</option>
                    <option value="500+" className="bg-zinc-900">500+ loads / mo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                    Primary ERP
                  </label>
                  <select
                    value={formData.preferredSystem}
                    onChange={(e) => setFormData({ ...formData, preferredSystem: e.target.value })}
                    className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#d8b485] transition-colors cursor-pointer"
                  >
                    <option value="sap" className="bg-zinc-900">SAP S/4HANA</option>
                    <option value="oracle" className="bg-zinc-900">Oracle Cloud ERP</option>
                    <option value="dynamics" className="bg-zinc-900">MS Dynamics 365</option>
                    <option value="custom" className="bg-zinc-900">Custom / REST API</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-lg text-xs font-bold font-mono tracking-wider text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] active:scale-98 transition-all uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                >
                  {submitting ? 'Generating Sandbox Environment...' : 'Access Live Platform Demo'}
                  <ArrowRight size={15} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 pt-1">
                <ShieldCheck size={12} className="text-emerald-400" />
                <span>Zero spam. Direct compliance under NDA.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
