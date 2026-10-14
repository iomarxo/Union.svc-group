import React from 'react';
import { X, Check, ShieldCheck, ArrowRight, Landmark } from 'lucide-react';
import { Language, translations } from '../translations';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartClick: () => void;
  lang: Language;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  onStartClick,
  lang,
}) => {
  if (!isOpen) return null;

  const t = translations[lang].caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in">
      <div className="relative w-full max-w-2xl bg-[#0c0c0e] rounded-xs border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#111114]">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-[#d8b485] rounded-[1px] shadow-[0_0_8px_#d8b485]"></div>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
              {t.badge}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d8b485]/10 text-[#d8b485] border border-[#d8b485]/30 rounded-full text-[10px] font-mono mb-2.5 uppercase tracking-wider font-semibold">
              <Check size={11} />
              <span>{t.tag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t.title}
            </h3>
            <p className="text-xs text-zinc-400 font-light mt-1 font-mono">
              {t.meta}
            </p>
          </div>

          {/* Numbers comparison table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#111114] border border-white/5 p-4 rounded-xs font-mono text-center">
            <div>
              <span className="text-[10px] text-zinc-500 block uppercase">{t.statTarget}</span>
              <span className="text-sm font-semibold text-white">€385,000</span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 block uppercase">{t.statBank}</span>
              <span className="text-sm font-semibold text-zinc-400">€261,000</span>
            </div>
            <div>
              <span className="text-[10px] text-[#d8b485] block uppercase font-bold">{t.statUnion}</span>
              <span className="text-sm font-bold text-[#d8b485]">+€102,000</span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 block uppercase">{t.statSaving}</span>
              <span className="text-sm font-semibold text-white">€610/mo</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm font-light text-zinc-300 leading-relaxed">
            <h4 className="text-xs font-mono uppercase font-bold text-[#d8b485] tracking-wider">
              {t.section1Title}
            </h4>
            <p>{t.section1Body}</p>

            <h4 className="text-xs font-mono uppercase font-bold text-[#d8b485] tracking-wider pt-2">
              {t.section2Title}
            </h4>
            <p>{t.section2Body}</p>

            <div className="p-4 bg-[#111114] border border-[#d8b485]/30 rounded-xs text-xs font-mono text-zinc-200 space-y-2">
              <div className="font-semibold flex items-center gap-1.5 text-[#d8b485]">
                <ShieldCheck size={15} />
                <span>{t.calloutTitle}</span>
              </div>
              <p className="font-sans font-light text-zinc-400">
                {t.calloutBody}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-white/5 bg-[#111114] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
            <Landmark size={12} className="text-[#d8b485]" />
            <span>{t.footerCert}</span>
          </span>
          <button
            onClick={() => {
              onClose();
              onStartClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d8b485] hover:bg-[#c2a277] text-zinc-950 text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-xs transition-colors cursor-pointer shadow-md"
          >
            <span>{t.footerCta}</span>
            <ArrowRight size={13} className="text-zinc-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
