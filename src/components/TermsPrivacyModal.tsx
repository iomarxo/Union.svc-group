import React from 'react';
import { X, ShieldCheck, FileCheck } from 'lucide-react';
import { Language } from '../translations';

interface TermsPrivacyModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy';
  onClose: () => void;
  lang: Language;
}

export const TermsPrivacyModal: React.FC<TermsPrivacyModalProps> = ({
  isOpen,
  type,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0e0e15] border border-white/10 rounded-xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl text-left max-h-[85vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-2">
          {isTerms ? <FileCheck size={14} /> : <ShieldCheck size={14} />}
          <span>Legal & Regulatory Framework</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          {isTerms ? 'Terms of Service — Unionsvc Group' : 'Privacy & Data Governance Policy'}
        </h3>

        <div className="overflow-y-auto pr-2 space-y-4 text-xs font-light text-zinc-300 leading-relaxed font-mono">
          {isTerms ? (
            <>
              <p>
                <strong className="text-white font-semibold">1. Scope of Agreement:</strong> These Terms of Service govern the use of the Unionsvc Group digital freight brokerage, encrypted communications network, and enterprise ERP integration APIs.
              </p>
              <p>
                <strong className="text-white font-semibold">2. Smart Freight Brokerage & Carrier Standards:</strong> All carriers participating in the automated dispatch protocol must maintain verified insurance, strict compliance with national transport authorities, and maintain active IoT telemetry sensors with tamper-detection enabled.
              </p>
              <p>
                <strong className="text-white font-semibold">3. Cryptographic Data Transmission:</strong> Telemetry, bills of lading, and financial settlements are encrypted using AES-256 and TLS 1.3 standards. Tampering with cryptographic payload integrity results in immediate protocol termination.
              </p>
              <p>
                <strong className="text-white font-semibold">4. Zero-Downtime SLA:</strong> Platform uptime commitment is 99.999% for core API endpoints and real-time streaming services.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-white font-semibold">1. Zero Telemetry Monetization:</strong> Unionsvc Group strictly does not sell, license, or monetize enterprise freight data, route logs, or pricing telemetry to third parties.
              </p>
              <p>
                <strong className="text-white font-semibold">2. End-to-End Encryption:</strong> All freight dispatch data and driver location packets are encrypted in transit and at rest using defense-grade cryptographic protocols.
              </p>
              <p>
                <strong className="text-white font-semibold">3. Enterprise Access Control:</strong> Strict Zero Trust Architecture dictates role-based access control, requiring mutual TLS (mTLS) and hardware-backed multi-factor authentication.
              </p>
              <p>
                <strong className="text-white font-semibold">4. Compliance & Inquiries:</strong> For data protection or governance requests, contact our Compliance Office at <span className="text-[#d8b485]">Contact@unionsvc.com</span>.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] text-zinc-500 font-mono">
            © 2024 Unionsvc Group • Tokyo // Berlin // London // Global
          </span>
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 rounded bg-white/10 hover:bg-white/15 text-xs text-white font-mono uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
