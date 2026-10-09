import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 sm:py-12 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-neutral-900"></div>
          <span>Union.svc © 2024</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#process" className="hover:text-neutral-900 transition-colors">
            Process
          </a>
          <a href="#calculator" className="hover:text-neutral-900 transition-colors">
            Calculator
          </a>
          <a href="#solutions" className="hover:text-neutral-900 transition-colors">
            Solutions
          </a>
          <a href="#audit" className="hover:text-neutral-900 transition-colors">
            Free Audit
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};
