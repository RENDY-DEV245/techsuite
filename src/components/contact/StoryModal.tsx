import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0f172a]/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="relative z-10 w-full max-w-2xl bg-[#fffdf5] border-3 border-[#0f172a] rounded-[24px] sm:rounded-[32px] shadow-[8px_8px_0px_#0f172a] overflow-hidden my-8"
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between p-4 sm:p-6 bg-[#071b2f] text-white border-b-3 border-[#0f172a]">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#38bdf8] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#fde047] animate-pulse" /> Rahasia Digital Trinitas
                </span>
                <h3 className="text-base sm:text-lg font-black text-white leading-none mt-1">
                  Studi Kasus &amp; Kisah Sistem
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-xl bg-[#fffdf5] hover:bg-[#fee2e2] text-[#0f172a] hover:text-[#dc2626] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer"
                title="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Konten Cerita */}
            <div className="p-5 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto font-sans text-[#0f172a]">
              {/* Highlight Quote */}
              <div className="p-4 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a]">
                <p className="text-xs sm:text-sm font-bold text-[#1e293b] leading-relaxed italic">
                  “Saya telah menemukan senjata pamungkas dalam merebut kekayaan pasar yang akan mengubah efisiensi operasional dan nasib bisnis Anda selamanya...”
                </p>
              </div>

              {/* Isi Paragraf */}
              <div className="space-y-3 text-xs sm:text-sm text-[#334155] leading-relaxed">
                <p>
                  Banyak pelaku usaha membuang waktu dan biaya karena mengelola Company Profile terpisah, aplikasi katalog penjualan yang manual, dan pencatatan stok di buku/spreadsheet yang rawan selisih.
                </p>
                <p>
                  Melalui pendekatan <strong>Sistem Terintegrasi 3-in-1 (Compro + E-Commerce + ERP Real-Time)</strong>, seluruh alur kasir, inventaris multi-gudang, hingga pembukuan otomatis disatukan dalam satu dashboard.
                </p>
              </div>

              {/* Benefit Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#dcfce7] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#15803d] text-white shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#15803d]">Penjualan Naik 300%</h4>
                    <p className="text-[11px] text-[#166534] font-medium leading-tight mt-0.5">
                      Alur checkout instan meningkatkan conversion rate pelanggan.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#e0f2fe] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#0284c7] text-white shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0369a1]">Selisih Stok 0%</h4>
                    <p className="text-[11px] text-[#075985] font-medium leading-tight mt-0.5">
                      Sinkronisasi multi-channel otomatis mencegah kehabisan stok barang.
                    </p>
                  </div>
                </div>
              </div>

              {/* Poin Checklist */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-[#fff9d4] border border-[#0f172a]/20">
                <div className="text-[11px] font-mono font-black text-[#8c6239] uppercase">
                  Hasil yang Didapatkan:
                </div>
                <div className="space-y-1.5 text-xs font-semibold text-[#1e293b]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
                    <span>Laporan keuangan otomatis berstandar SAK ETAP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
                    <span>Notifikasi real-time saat stok menyentuh batas minimum</span>
                  </div>
                </div>
              </div>

              {/* Footer Modal Action */}
              <div className="pt-3 border-t-2 border-[#0f172a]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-[#64748b]">
                  Siap mendiskusikan kebutuhan sistem Anda?
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  <span>Mulai Diskusi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
