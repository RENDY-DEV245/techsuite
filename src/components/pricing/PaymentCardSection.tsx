import React from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Zap,
  QrCode
} from 'lucide-react';

export const PaymentCardSection: React.FC = () => {
  const checkoutUrl = "https://lynk.id/rendyajahstore/s/82dd297kmjp3/checkout";

  return (
    <section
      id="payment-card"
      className="relative z-20 -mt-1 w-full bg-[#02587a] select-none py-10 sm:py-14 text-[#0f172a] flex justify-center items-center"
    >
      <div className="relative z-10 w-full max-w-md sm:max-w-lg px-4 sm:px-6">
        
        {/* Kontainer Card Payment Mandiri */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 220, damping: 20 }}
          className="relative rounded-[32px] p-5 sm:p-7 bg-[#fffdf5] border-3 sm:border-4 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] space-y-5"
        >
          {/* Header Card Payment */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#0f172a]/15 text-xs font-mono font-black text-[#0f172a]">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#22c55e] text-white border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a]">
              <CreditCard className="w-3.5 h-3.5" />
              <span>PEMBAYARAN INSTAN</span>
            </div>
            
            <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#0284c7] bg-[#e0f2fe] px-2.5 py-1 rounded-xl border-2 border-[#0284c7] font-bold shadow-[2px_2px_0px_#0284c7]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>LYNK.ID VERIFIED</span>
            </div>
          </div>

          {/* Judul & Deskripsi Pembayaran */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#8c6239] uppercase">
              <Zap className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Direct Checkout Gateway</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight leading-tight">
              Selesaikan Transaksi &amp; Akses Layanan
            </h3>
            <p className="text-xs text-[#475569] font-medium leading-relaxed">
              Klik tautan checkout di bawah untuk pembayaran langsung, konfirmasi otomatis real-time, dan penerbitan invoice resmi.
            </p>
          </div>

          {/* Box Rincian Metode & Keamanan */}
          <div className="p-4 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-3">
            <div className="text-[11px] font-mono font-black text-[#0f172a] flex items-center gap-1.5 uppercase">
              <QrCode className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Metode Pembayaran yang Didukung:</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px] font-mono font-bold text-[#1e293b]">
              <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#fffdf5] border border-[#0f172a]/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                <span>QRIS All Payment</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#fffdf5] border border-[#0f172a]/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                <span>Virtual Account (VA)</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#fffdf5] border border-[#0f172a]/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                <span>E-Wallet &amp; Transfer</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#fffdf5] border border-[#0f172a]/30">
                <Lock className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
                <span>Enkripsi Aman 100%</span>
              </div>
            </div>
          </div>

          {/* Tombol CTA Checkout Lynk.id */}
          <div className="space-y-2 pt-1">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[4px_4px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Bayar Sekarang / Buka Checkout</span>
              </div>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>

            <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#8c6239] px-1">
              <div className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>Otomatis Verifikasi 24/7</span>
              </div>
              <span className="truncate max-w-[180px]">lynk.id/rendyajahstore</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
