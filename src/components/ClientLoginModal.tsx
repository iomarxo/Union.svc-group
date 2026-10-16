import React, { useState } from 'react';
import { X, Lock, ShieldCheck, Key, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { Language } from '../translations';

interface ClientLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ClientLoginModal: React.FC<ClientLoginModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setIsLoggedIn(true);
    }, 700);
  };

  const handleUseDemoCredentials = () => {
    setEmail('enterprise.director@mitsubishi-logistics.jp');
    setPassword('••••••••••••••••');
    setTwoFactorCode('892041');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0e0e15] border border-white/10 rounded-xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {isLoggedIn ? (
          <div className="py-6 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 font-mono">
              Enterprise Session Authenticated
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Zero Trust Handshake: Verified (AES-256-GCM / Mutual TLS)
            </p>
            <div className="w-full p-4 rounded bg-black/60 border border-white/5 text-left font-mono text-xs text-zinc-300 space-y-1 mb-6">
              <div className="text-emerald-400 font-bold">Portal Access: GRANTED</div>
              <div>Tenant: Mitsubishi Logistics Tokyo Hub</div>
              <div>Role: Fleet Logistics Director</div>
              <div>Telemetry Stream: Active (<span className="text-[#d8b485]">4,820 Nodes</span>)</div>
            </div>
            <button
              onClick={onClose}
              className="cursor-pointer w-full py-2.5 rounded bg-[#d8b485] hover:bg-[#c4a071] text-zinc-950 font-mono text-xs font-bold uppercase transition-all"
            >
              Continue to Logistics Control Tower
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-2">
              <Lock size={13} />
              <span>Zero Trust Enterprise Gateway</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Client Portal Login
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              Authorized access for enterprise freight shippers, carriers, and supply chain directors.
            </p>

            <form onSubmit={handleLogin} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                  Corporate Identity (SSO / Email)
                </label>
                <input
                  type="email"
                  required
                  placeholder="identity@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d8b485]"
                />
              </div>

              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d8b485]"
                />
              </div>

              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>2FA Hardware / Authenticator Code</span>
                  <span className="text-[10px] text-[#d8b485]">Required</span>
                </label>
                <input
                  type="text"
                  placeholder="6-digit token (e.g. 892041)"
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d8b485]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  className="w-full py-3 px-4 rounded text-xs font-bold font-mono tracking-wider text-zinc-950 bg-[#d8b485] hover:bg-[#c4a071] transition-all uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isAuthenticating ? 'Verifying Zero Trust Auth...' : 'Authenticate & Enter Portal'}
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400">
                <button
                  type="button"
                  onClick={handleUseDemoCredentials}
                  className="text-[#d8b485] hover:underline cursor-pointer"
                >
                  Fill Demo Credentials
                </button>
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck size={11} /> TLS 1.3 Active
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
