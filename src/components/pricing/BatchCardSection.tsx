import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Sparkles, AlertCircle } from 'lucide-react';

export const BatchCardSection: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const imageUrl = "https://i.ibb.co.com/whPTJVLp/file-000000009d0c8207a4ce69aad00cf100.png";

  return (
    <section
      id="batch-card"
      className="relative z-20 -mt-1 w-full bg-[#02587a] select-none py-12 sm:py-16 text-[#0f172a] flex justify-center items-center"
    >
      <div className="relative z-10 w-full max-w-md sm:max-w-lg px-4 sm:px-6">
        
        {/* Kontainer ID Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 220, damping: 20 }}
          className="relative rounded-[32px] p-4 sm:p-6 bg-[#fffdf5] border-3 sm:border-4 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] space-y-3.5"
        >
          {/* Gantungan / Slot Lubang ID Card */}
          <div className="flex justify-center -mt-2">
            <div className="w-14 h-3.5 rounded-full bg-[#0f172a]/20 border-2 border-[#0f172a]" />
          </div>

          {/* Header ID Card */}
          <div className="flex items-center justify-between pb-2 border-b-2 border-[#0f172a]/15 text-xs font-mono font-black text-[#0f172a]">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#fde047] border border-[#0f172a]">
              <AlertCircle className="w-3.5 h-3.5 text-[#ef4444]" />
              <span>TIER PASS // BATCH 1</span>
            </div>
            <span className="text-[10px] sm:text-xs text-[#64748b] tracking-wider uppercase">
              STATUS: AKTIF
            </span>
          </div>

          {/* Frame Foto (Mirip Photo Card Profil) */}
          <div
            onClick={() => setIsZoomed(true)}
            className="group relative w-full rounded-2xl overflow-hidden bg-[#faeed1] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] cursor-pointer"
            title="Klik untuk memperbesar gambar"
          >
            <img
              src={imageUrl}
              alt="Batch Pricing Roadmap"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay Hover Zoom Icon */}
            <div className="absolute inset-0 bg-[#0f172a]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 font-mono font-bold text-xs">
              <ZoomIn className="w-5 h-5" />
              <span>Klik untuk Zoom</span>
            </div>
          </div>

          {/* Footer ID Card */}
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono font-bold text-[#8c6239] border-t-2 border-[#0f172a]/10">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>TERBATAS</span>
            </div>
            <span>ID // TECHSUITE-PASS</span>
          </div>
        </motion.div>
      </div>

      {/* Modal Zoom Lightbox */}
      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 sm:p-8 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-lg bg-[#fffdf5] rounded-3xl border-3 border-[#0f172a] shadow-[10px_10px_0px_#0f172a] p-4 sm:p-6 space-y-3 max-h-[90vh] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between pb-2 border-b-2 border-[#0f172a]/15">
                <span className="text-xs font-mono font-black text-[#0f172a]">
                  PREVIEW BATCH INFO
                </span>
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="p-1.5 rounded-xl bg-[#fff9d4] hover:bg-[#fee2e2] border-2 border-[#0f172a] text-[#0f172a] hover:text-[#dc2626] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-[#071b2f] border-2 border-[#0f172a] p-1 flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt="Batch Pricing Zoom"
                  className="w-full h-auto object-contain max-h-[65vh]"
                />
              </div>

              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="w-full py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] cursor-pointer text-center"
              >
                Tutup
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
