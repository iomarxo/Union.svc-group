import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onStartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-neutral-900 w-3 h-3"></div>
          <span className="text-sm font-medium text-neutral-900 tracking-tight">Union.svc</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
          <a href="#process" className="hover:text-neutral-900 transition-colors">
            PROCESS
          </a>
          <a href="#calculator" className="hover:text-neutral-900 transition-colors">
            CALCULATOR
          </a>
          <a href="#solutions" className="hover:text-neutral-900 transition-colors">
            SOLUTIONS
          </a>
          <a href="#audit" className="hover:text-neutral-900 transition-colors">
            FREE AUDIT
          </a>
          <a href="#faq" className="hover:text-neutral-900 transition-colors">
            FAQ
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onStartClick}
            className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 to-neutral-300 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-full w-full bg-white/50 rounded-[1px] px-3 sm:px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="hidden sm:inline text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">
                Start Project
              </span>
              <span className="sm:hidden text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">
                Start
              </span>
            </div>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-600 hover:text-neutral-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white/95 backdrop-blur-md px-4 py-4 space-y-3 font-mono text-xs">
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-600 hover:text-neutral-900 border-b border-neutral-100"
          >
            01 // PROCESS
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-600 hover:text-neutral-900 border-b border-neutral-100"
          >
            02 // CALCULATOR
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-600 hover:text-neutral-900 border-b border-neutral-100"
          >
            03 // SOLUTIONS
          </a>
          <a
            href="#audit"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-600 hover:text-neutral-900 border-b border-neutral-100"
          >
            04 // FREE AUDIT
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-600 hover:text-neutral-900"
          >
            05 // FAQ
          </a>
        </div>
      )}
    </nav>
  );
};
