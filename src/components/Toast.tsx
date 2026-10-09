import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Clock, ExternalLink } from 'lucide-react';

export interface ToastProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  meta?: string;
  duration?: number; // duration in ms, 0 for persistent
  type?: 'success' | 'info' | 'error';
}

export const Toast: React.FC<ToastProps> = ({
  isVisible,
  onClose,
  title = 'Application Submitted',
  message = 'Thank you! We have received your project details and will review them within 24 hours.',
  meta,
  duration = 5000,
  type = 'success',
}) => {
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isVisible || duration <= 0) return;

    setProgress(100);
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      if (!isPaused) {
        setProgress((prev) => {
          if (prev <= step) {
            clearInterval(timer);
            onClose();
            return 0;
          }
          return prev - step;
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible, duration, onClose, isPaused]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-5 right-5 z-50 pointer-events-none max-w-sm sm:max-w-md w-[calc(100%-2.5rem)] sm:w-auto"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="status"
            className="pointer-events-auto relative overflow-hidden bg-neutral-900/95 backdrop-blur-md text-white border border-neutral-700/80 rounded-lg shadow-2xl p-4 sm:p-5 flex flex-col gap-3 group"
          >
            {/* Top row: Icon, text content, close button */}
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="mt-0.5 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                <CheckCircle2 size={18} className="stroke-[2.25]" />
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-semibold tracking-tight text-white">
                    {title}
                  </h4>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {message}
                </p>

                {meta && (
                  <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700/50">
                    <Clock size={11} className="text-neutral-500 shrink-0" />
                    <span className="truncate">{meta}</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Dismiss notification"
                className="shrink-0 -mt-1 -mr-1 p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Countdown Progress bar */}
            {duration > 0 && (
              <div className="w-full h-1 bg-neutral-800/80 rounded-full overflow-hidden mt-0.5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
