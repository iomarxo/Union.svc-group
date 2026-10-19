import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, ArrowRight, Lock } from 'lucide-react';
import { Language } from '../translations';

interface InvestorDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const InvestorDeckModal: React.FC<InvestorDeckModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [email, setEmail] = useState('');
  const [investorType, setInvestorType] = useState('venture');
  const [fundName, setFundName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0e0e15] border border-white/10 rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-left">
        <button
          onClick={onClose}
          aria-label="Close investor deck modal"
          className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">
              Investor Dossier Dispatched
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed mb-6 font-light">
              The complete <strong className="text-white">Unionsvc Group Executive Pitch Deck</strong> and <strong className="text-white">Series A Financial Projections (Q4 2024 - 2027)</strong> have been transmitted to <strong className="text-white">{email}</strong>.
            </p>

            <div className="w-full p-4 rounded-lg bg-black/50 border border-white/5 text-left font-mono text-xs text-zinc-400 mb-6 space-y-1.5">
              <div className="text-white font-semibold flex items-center justify-between">
                <span>Dossier Checklist:</span>
                <span className="text-emerald-400">PDF + Data Room Access</span>
              </div>
              <div>• Confidential Executive Overview & TAM Model ($4.2T)</div>
              <div>• Hybrid SaaS & Freight Brokerage Commission Mechanics</div>
              <div>• Cryptographic Moat & ERP Integration Architecture</div>
            </div>

            <button
              onClick={onClose}
              className="cursor-pointer px-6 py-3 min-h-[48px] rounded-lg bg-[#d8b485] hover:bg-[#c4a071] text-zinc-950 font-mono text-xs font-bold uppercase transition-all flex items-center justify-center"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-2">
              <FileText size={13} />
              <span>Series A Institutional Data Room</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Request Investment Pitch Deck
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              Access Unionsvc Group's capital architecture, proprietary technology moat, and multi-billion dollar freight addressable market.
            </p>

            <form onSubmit={handleDownload} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                  Investor / Institutional Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="partner@sequoia-capital.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-3 min-h-[48px] text-base sm:text-xs rounded-lg bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d8b485]"
                />
              </div>

              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                  Fund / Institutional Entity
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Global Growth Fund"
                  value={fundName}
                  onChange={(e) => setFundName(e.target.value)}
                  className="w-full px-3.5 py-3 min-h-[48px] text-base sm:text-xs rounded-lg bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d8b485]"
                />
              </div>

              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                  Investor Classification
                </label>
                <select
                  value={investorType}
                  onChange={(e) => setInvestorType(e.target.value)}
                  className="w-full px-3.5 py-3 min-h-[48px] text-base sm:text-xs rounded-lg bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#d8b485] cursor-pointer"
                >
                  <option value="venture" className="bg-zinc-900">Venture Capital / Growth Equity</option>
                  <option value="strategic" className="bg-zinc-900">Corporate Strategic / Logistics Operator</option>
                  <option value="family_office" className="bg-zinc-900">Family Office / Sovereign Wealth</option>
                  <option value="angel" className="bg-zinc-900">Accredited Angel / Syndicate</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full min-h-[48px] py-3 px-4 rounded-lg text-xs font-bold font-mono tracking-wider text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] transition-all uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
                >
                  {isGenerating ? (
                    'Preparing Confidential Deck...'
                  ) : (
                    <>
                      <Download size={14} />
                      <span>Download Investment Pitch Deck</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 pt-1">
                <Lock size={11} className="text-[#d8b485]" />
                <span>Protected under customary corporate confidentiality.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
