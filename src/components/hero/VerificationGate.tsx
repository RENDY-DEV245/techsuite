import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface VerificationGateProps {
  onVerified: () => void;
}

export const VerificationGate: React.FC<VerificationGateProps> = ({ onVerified }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'verified'>('idle');
  const [isDismissed, setIsDismissed] = useState(false);

  const handleVerify = () => {
    if (status !== 'idle') return;
    setStatus('loading');

    setTimeout(() => {
      setStatus('verified');
      setTimeout(() => {
        setIsDismissed(true);
        onVerified();
      }, 700);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-[#02587a]/60 backdrop-blur-xl select-none"
        >
          {/* Card Verifikasi (Proporsional di HP dan Desktop) */}
          <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[500px] bg-[#071b2f]/95 border-2 sm:border-3 border-[#38bdf8]/60 rounded-3xl p-6 sm:p-9 text-center shadow-[0_0_60px_rgba(2,132,199,0.45)] backdrop-blur-2xl">
            
            <div className="text-[11px] sm:text-xs font-mono tracking-widest text-[#94a3b8] uppercase mb-2">
              Verify to access portfolio of
            </div>

            {/* Nama TECHSUITE */}
            <div className="text-2xl sm:text-4xl font-black font-mono tracking-wider text-[#00FF88] drop-shadow-[0_0_15px_rgba(0,255,136,0.6)] mb-3 sm:mb-4 uppercase">
              TECHSUITE
            </div>

            <div className="text-[11px] sm:text-xs font-mono font-bold text-[#f59e0b] tracking-widest uppercase mb-6 sm:mb-8 inline-block bg-[#f59e0b]/10 px-3.5 py-1.5 rounded-full border border-[#f59e0b]/30">
              Security Verification
            </div>

            {/* Kotak Centang Captcha */}
            <div
              onClick={handleVerify}
              className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#030d1a]/90 border-2 transition-all cursor-pointer ${
                status === 'verified'
                  ? 'border-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                  : 'border-[#1e293b] hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-[0.98]'
              }`}
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Kotak Centang */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border-2 border-[#475569] bg-[#0b1523] flex items-center justify-center transition-all">
                  {status === 'loading' && (
                    <div className="w-5 h-5 border-2 border-[#0284c7]/30 border-t-[#38bdf8] rounded-full animate-spin" />
                  )}
                  {status === 'verified' && (
                    <span className="text-[#10b981] text-xl font-black leading-none">✓</span>
                  )}
                </div>
                <span className="text-sm sm:text-base font-semibold text-[#f8fafc] font-sans">
                  I am human
                </span>
              </div>

              {/* Icon Shield */}
              <div className="flex flex-col items-center gap-0.5 opacity-90">
                <ShieldCheck className="w-7 h-7 text-[#38bdf8]" />
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-[#38bdf8] tracking-tighter leading-tight">
                  PORTFOLIO<br />PROTECT
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
