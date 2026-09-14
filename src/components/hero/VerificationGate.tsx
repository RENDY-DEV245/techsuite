import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface VerificationGateProps {
  onVerified: () => void;
}

export const VerificationGate: React.FC<VerificationGateProps> = ({ onVerified }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'verified'>('idle');

  const handleVerify = () => {
    if (status !== 'idle') return;
    setStatus('loading');

    setTimeout(() => {
      setStatus('verified');
      setTimeout(() => {
        onVerified();
      }, 700);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {status !== 'verified' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          /* Efek Kaca Blur (Transparan melihat pantai di belakang) */
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#02587a]/35 backdrop-blur-xl select-none"
        >
          {/* Card Verifikasi */}
          <div className="relative w-full max-w-[420px] bg-[#071b2f]/85 border-2 border-[#38bdf8]/40 rounded-2xl p-7 text-center shadow-[0_0_50px_rgba(2,132,199,0.35)] backdrop-blur-2xl">
            
            <div className="text-[11px] font-mono tracking-widest text-[#94a3b8] uppercase mb-2">
              Verify to access portfolio of
            </div>

            {/* Nama diubah menjadi TECHSUITE */}
            <div className="text-2xl font-black font-mono tracking-wider text-[#00FF88] drop-shadow-[0_0_12px_rgba(0,255,136,0.6)] mb-3 uppercase">
              TECHSUITE
            </div>

            <div className="text-[11px] font-mono font-bold text-[#f59e0b] tracking-widest uppercase mb-6 inline-block bg-[#f59e0b]/10 px-3 py-1 rounded-full border border-[#f59e0b]/30">
              Security Verification
            </div>

            {/* Kotak Captcha */}
            <div
              onClick={handleVerify}
              className={`flex items-center justify-between p-3.5 px-4 rounded-xl bg-[#030d1a]/80 border transition-all cursor-pointer ${
                status === 'verified'
                  ? 'border-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'border-[#1e293b] hover:border-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] active:scale-[0.98]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                {/* Kotak Centang */}
                <div className="w-7 h-7 rounded-md border-2 border-[#475569] bg-[#0b1523] flex items-center justify-center transition-all">
                  {status === 'loading' && (
                    <div className="w-4 h-4 border-2 border-[#0284c7]/30 border-t-[#38bdf8] rounded-full animate-spin" />
                  )}
                  {status === 'verified' && (
                    <span className="text-[#10b981] text-lg font-black leading-none">✓</span>
                  )}
                </div>
                <span className="text-sm font-medium text-[#f8fafc] font-sans">
                  I am human
                </span>
              </div>

              {/* Icon Shield */}
              <div className="flex flex-col items-center gap-0.5 opacity-85">
                <ShieldCheck className="w-6 h-6 text-[#38bdf8]" />
                <span className="text-[7.5px] font-mono font-bold text-[#38bdf8] tracking-tighter leading-tight">
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
