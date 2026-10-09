import React from 'react';
import { X, Check, ShieldCheck, ArrowRight } from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartClick: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  onStartClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-900/60 backdrop-blur-xs animate-in">
      <div className="relative w-full max-w-2xl bg-white rounded-sm border border-neutral-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-neutral-900"></div>
            <span className="text-xs font-mono font-semibold tracking-wider text-neutral-900">
              CASE DOSSIER // UTRECHT 2025
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-800 p-1 cursor-pointer transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xs text-[10px] font-mono mb-2">
              <Check size={11} /> Verified Transaction
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 tracking-tight">
              Lars &amp; Sarah: Breaking the €1,950/mo Rent Cycle
            </h3>
            <p className="text-xs text-neutral-500 font-light mt-1">
              Location: Utrecht Oost • Combined Income: €58,000/yr • Savings: €22,000
            </p>
          </div>

          {/* Numbers comparison table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 border border-neutral-200 p-4 rounded-xs font-mono text-center">
            <div>
              <span className="text-[10px] text-neutral-400 block uppercase">Target Price</span>
              <span className="text-sm font-semibold text-neutral-900">€385,000</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 block uppercase">Bank Cap</span>
              <span className="text-sm font-semibold text-neutral-400">€261,000</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 block uppercase">Union.svc Share</span>
              <span className="text-sm font-semibold text-emerald-600">+€102,000</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 block uppercase">Monthly Saving</span>
              <span className="text-sm font-semibold text-neutral-900">€610/mo</span>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
            <h4 className="text-xs font-mono uppercase font-semibold text-neutral-900 tracking-wider">
              The Challenge
            </h4>
            <p>
              Lars (UX Designer, 28) and Sarah (Teacher, 27) were paying €1,950/month in non-regulated rent in Utrecht. Despite solid jobs, banks strictly capped their mortgage at €261,000. In a market where starter apartments start at €360k+, they were locked out.
            </p>

            <h4 className="text-xs font-mono uppercase font-semibold text-neutral-900 tracking-wider pt-2">
              The Union.svc Architecture
            </h4>
            <p>
              Through Union.svc&apos;s co-investment model, Lars &amp; Sarah paired their maximum bank mortgage (€261k) with €22k personal savings and €102k in Union.svc shared equity. Zero secondary debt. No interest burden.
            </p>

            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xs text-xs font-mono text-emerald-900 space-y-2">
              <div className="font-semibold flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-700" />
                <span>Long-Term Alignment</span>
              </div>
              <p className="font-sans font-light text-neutral-700">
                Lars &amp; Sarah own 100% of the home on title deeds. After 3 years, they refinanced their standard mortgage following salary raises and bought back 15% of Union.svc&apos;s share at fair market valuation.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] font-mono text-neutral-500">
            Certified by Dutch Notarial Register
          </span>
          <button
            onClick={() => {
              onClose();
              onStartClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono px-5 py-2.5 rounded-xs transition-colors cursor-pointer"
          >
            <span>Model Your Own Scenario</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
