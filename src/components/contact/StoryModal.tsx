import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Mencegah background scroll saat modal terbuka
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const storyPages = [
    {
      chapter: 'BAB 01',
      tag: 'PENGAKUAN & OTOMASI 24/7',
      title: 'Saya punya sebuah pengakuan. 8 jam yang lalu...',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#334155] leading-relaxed">
          <p className="font-medium">
            Sistem bisnis saya baru saja memproses <strong>47 transaksi penjualan</strong>, mencocokkan stok gudang, menerbitkan faktur pajak, dan mengirim instruksi logistik secara otomatis—<strong>tanpa ada satu pun staf yang menyentuh keyboard!</strong>
          </p>
          <p className="p-3.5 rounded-xl bg-[#e0f2fe] border-2 border-[#0284c7]/40 text-[#0369a1] font-semibold">
            ⚡ Sistem ini bekerja 24/7 tanpa henti. Cepat, presisi, dan sepenuhnya terintegrasi.
          </p>
          <p>
            Desain Company Profile-nya memancarkan kredibilitas korporat kelas atas... Toko online <em>(e-commerce)</em>-nya memiliki tingkat konversi checkout tertinggi... Dan mesin ERP di belakangnya mengelola arus kas serta inventaris secara real-time!
          </p>
          <p>
            <strong>Apa artinya bagi Anda?</strong> Kebebasan penuh menjalankan bisnis kapan pun. Saat ada pesanan masuk, stok di 3 gudang otomatis terpotong. Saat pembayaran terkonfirmasi via payment gateway, laporan laba rugi langsung terbarui detik itu juga tanpa perlu lembur karyawan atau komplain rekap manual.
          </p>
        </div>
      )
    },
    {
      chapter: 'BAB 02',
      tag: 'TITIK FRUSTRASI & JEBAKAN MANUAL',
      title: 'Kisah Kami Berawal Dari Frustrasi yang Mendalam...',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#334155] leading-relaxed">
          <p>
            Beberapa waktu yang lalu, kami berada di titik frustrasi operasional yang parah. Setiap hari diisi dengan kepanikan: rekap stok selisih puluhan juta, pesanan di WhatsApp menumpuk tanpa tindak lanjut, dan website lama kami terlihat seperti proyek amatir yang membuat klien ragu mentransfer dana besar.
          </p>
          <div className="p-3.5 rounded-xl bg-[#fee2e2] border-2 border-[#dc2626]/30 text-[#991b1b] font-medium">
            ⚠️ <em>"Saya merasa bisnis saya tampak seperti penjual amatir jalanan yang sedang mengemis perhatian pasar."</em>
          </div>
          <p className="font-black text-[#0f172a]">
            Kami Mengungkap Rahasia Arsitektur Digital Trinitas 3-in-1:
          </p>
          <p>
            Bagaimana membangun ekosistem digital terpadu yang mengubah pengunjung biasa menjadi pembeli loyal sekaligus mengotomatisasi seluruh rantai pasok Anda layaknya perusahaan bernilai miliaran rupiah.
          </p>
        </div>
      )
    },
    {
      chapter: 'BAB 03',
      tag: 'SENJATA PAMUNGKAS & POLA PSIKOLOGIS',
      title: 'Malam Di Mana Bisnis Kami Resmi Naik Kasta',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#334155] leading-relaxed">
          <div className="p-4 rounded-2xl bg-[#fde047] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a]">
            <h4 className="font-black text-[#0f172a] text-sm sm:text-base leading-tight">
              🔥 Saya telah menemukan senjata pamungkas dalam merebut kekayaan pasar yang akan mengubah nasib finansial Anda selamanya!
            </h4>
          </div>
          <p>
            Ada pola psikologis tertentu yang diam-diam sangat didambakan oleh setiap pembeli berduit tebal saat mereka membuka sebuah website.
          </p>
          <p>
            Kami pernah mencoba cara konvensional: sewa desainer freelance, pakai plugin toko online gratisan, dan catat keuangan di Excel terpisah. <strong>Hasilnya? Berantakan total.</strong> Website lambat, data transaksi tidak sinkron, dan saat promo tanggal kembar sistem langsung <em>crash</em>.
          </p>
          <p>
            Segalanya berubah saat kami menyatukannya ke dalam satu database terpusat: <strong>Compro + E-Commerce + ERP</strong>.
          </p>
        </div>
      )
    },
    {
      chapter: 'BAB 04',
      tag: 'HASIL NYATA & PERTUMBUHAN 300%',
      title: 'Penjualan Online Melonjak 300% dalam 30 Hari!',
      content: (
        <div className="space-y-3.5 text-xs sm:text-sm text-[#334155] leading-relaxed">
          <p>
            Trafik Company Profile langsung terkonversi menjadi prospek B2B bernilai tinggi berkat reputasi visual yang meyakinkan. Pengunjung ritel langsung checkout instan tanpa hambatan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-1">
            <div className="p-3 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] text-center">
              <span className="text-[10px] font-mono text-[#8c6239] block">PENJUALAN</span>
              <span className="text-base font-black text-[#15803d]">+300% / 30 Hari</span>
            </div>
            <div className="p-3 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] text-center">
              <span className="text-[10px] font-mono text-[#8c6239] block">SELISIH STOK</span>
              <span className="text-base font-black text-[#0284c7]">0% Discrepancy</span>
            </div>
            <div className="p-3 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] text-center">
              <span className="text-[10px] font-mono text-[#8c6239] block">EFISIENSI ADMIN</span>
              <span className="text-base font-black text-[#f59e0b]">Hemat 1000+ Jam</span>
            </div>
          </div>
          <p>
            Modul ERP secara otomatis menghitung HPP (COGS), membuat surat jalan, serta menyusun neraca keuangan tanpa campur tangan admin. Founder kini bisa berlibur dengan tenang tanpa interupsi telepon darurat dari tim lapangan.
          </p>
        </div>
      )
    },
    {
      chapter: 'BAB 05',
      tag: 'SOLUSI TERPADU 3-IN-1',
      title: 'Enterprise Omni-Scale Engine™',
      content: (
        <div className="space-y-3.5 text-xs sm:text-sm text-[#334155] leading-relaxed">
          <p className="font-bold text-[#0f172a]">
            Paket solusi menyeluruh yang siap melipatgandakan valuasi bisnis Anda:
          </p>
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
              <div>
                <strong>Company Profile Korporat:</strong> Desain UI/UX eksklusif, optimasi SEO standar industri, halaman profil tim, legalitas, portofolio interaktif, dan formulir prospek B2B.
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
              <div>
                <strong>E-Commerce Powerhouse:</strong> Katalog tanpa batas, Payment Gateway otomatis (BCA, Mandiri, BRI, QRIS), integrasi kurir logistik otomatis (JNE, SiCepat, J&T), dan sistem anti-abandoned cart.
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
              <div>
                <strong>Core ERP System:</strong> Manajemen stok multi-gudang, pembukuan & laporan laba rugi/neraca otomatis standar SAK ETAP, dan manajemen CRM pelanggan.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      chapter: 'BAB 06',
      tag: 'PENAWARAN & INVESTASI TERBATAS',
      title: 'Investasi Riil Rp100 Juta Menjadi Rp15 Juta!',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#334155] leading-relaxed">
          <p>
            Jika Anda membangun ekosistem terintegrasi skala korporasi ini ke software house konvensional:
          </p>
          <ul className="list-disc list-inside space-y-1 font-mono text-[11px] sm:text-xs text-[#475569] bg-[#fff9d4] p-3 rounded-xl border border-[#0f172a]/20">
            <li>Web Company Profile Korporat: min. Rp25.000.000</li>
            <li>Arsitektur E-Commerce + Payment Gateway: min. Rp35.000.000</li>
            <li>Kustomisasi Core ERP Multi-Gudang: min. Rp40.000.000</li>
            <li className="font-black text-[#0f172a] pt-1">Total Nilai Pasar Korporasi: Rp100.000.000</li>
          </ul>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0f172a] text-white border-2 border-[#fde047] text-center shadow-[4px_4px_0px_#fde047]">
            <span className="text-[11px] font-mono text-[#fde047] tracking-widest uppercase block mb-1">
              INVESTASI SEKALI BAYAR (HEMAT RP85 JUTA)
            </span>
            <div className="text-3xl sm:text-4xl font-black text-[#fde047] tracking-tight">
              Rp15.000.000 Sahaja!
            </div>
            <span className="text-[11px] text-[#cbd5e1] block mt-1">
              Tanpa biaya royalti bulanan per user • Full setup & deployment ke server Anda • Garansi purna jual
            </span>
          </div>
        </div>
      )
    }
  ];

  if (!isOpen) return null;

  const current = storyPages[currentPage];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto select-none">
        {/* Backdrop Gelap + Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071b2f]/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Tengah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative z-10 w-full max-w-2xl bg-[#fffdf5] rounded-[28px] sm:rounded-[36px] border-3 sm:border-4 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] p-5 sm:p-8 flex flex-col justify-between max-h-[90vh] overflow-hidden"
        >
          {/* Top Header */}
          <div className="flex items-start justify-between gap-3 pb-3 border-b-2 border-[#0f172a]/15">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#fde047] border-2 border-[#0f172a] text-[#0f172a]">
                <Flame className="w-4 h-4 text-[#ea580c]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-black text-[#ea580c] uppercase">
                  {current.chapter} • {current.tag}
                </span>
                <h3 className="text-base sm:text-xl font-black text-[#0f172a] leading-tight line-clamp-1">
                  {current.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-[#fff9d4] hover:bg-[#fee2e2] border-2 border-[#0f172a] text-[#0f172a] hover:text-[#dc2626] transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="py-4 overflow-y-auto max-h-[58vh] pr-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
              >
                {current.content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Controls & Pagination */}
          <div className="pt-3 border-t-2 border-[#0f172a]/15 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {storyPages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentPage === idx
                      ? 'w-6 bg-[#0284c7]'
                      : 'w-2 bg-[#dfcca8] hover:bg-[#c4ad82]'
                  }`}
                  title={`Menuju Bab ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              {currentPage > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="px-3 py-1.5 rounded-xl bg-[#fff9d4] hover:bg-[#fde047] text-[#0f172a] font-mono font-bold text-xs border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>
              )}

              {currentPage < storyPages.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="px-4 py-1.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-mono font-bold text-xs border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Lanjut</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <a
                  href="https://wa.me/6285141220521?text=Halo%20Rendy%2C%20saya%20tertarik%20dengan%20penawaran%20Enterprise%20Omni-Scale%20Engine%20Rp15%20Juta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Klaim Penawaran Ini</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
