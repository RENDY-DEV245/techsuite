import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  AlertTriangle,
  Building2,
  ShoppingCart,
  Database,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  ChevronDown
} from 'lucide-react';

export const StorySection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const whatsappMessage = encodeURIComponent(
    'Halo Rendy, saya telah membaca Kisah Rahasia Digital Trinitas (Enterprise Omni-Scale Engine™) dan tertarik untuk konsultasi implementasi sistem untuk bisnis saya.'
  );

  return (
    <section id="story" className="relative z-20 -mt-1 w-full bg-[#02587a] select-none py-20 sm:py-28 overflow-hidden text-[#0f172a]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02587a] via-[#024968] to-[#013852] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-12 space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, type: 'spring', stiffness: 220, damping: 24 }}
          className="p-5 sm:p-12 rounded-[28px] sm:rounded-[40px] bg-[#fffdf5] border-3 sm:border-4 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] space-y-6 sm:space-y-8"
        >
          {/* Header Section */}
          <div className="space-y-3 pb-6 border-b-2 sm:border-b-3 border-[#0f172a]/15">
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a]">
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>STUDI KASUS EKSKLUSIF // RAHASIA DIGITAL TRINITAS</span>
              </div>
              <span className="px-3 py-1 rounded-xl bg-[#dcfce7] text-[#15803d] border-2 border-[#0f172a] text-[11px] font-mono font-black shadow-[2px_2px_0px_#0f172a]">
                ENTERPRISE OMNI-SCALE ENGINE™
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.12]">
              “Saya Telah Menemukan Senjata Pamungkas dalam Merebut Pasar yang Mengubah Efisiensi Bisnis Selamanya...”
            </h2>
            <p className="text-xs sm:text-base font-semibold text-[#0284c7] font-mono leading-relaxed">
              Kisah nyata bagaimana integrasi 3-in-1 (Compro + E-Commerce + ERP) mendongkrak penjualan 300% dan menekan selisih stok hingga 0%.
            </p>
          </div>

          {/* Bab 1: Pengakuan & Otomasi Penuh */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#071b2f] text-white border-2 sm:border-3 border-[#0f172a] shadow-[4px_4px_0px_#0f172a] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#38bdf8]">
              <Clock className="w-4 h-4 text-[#fde047]" />
              <span>Pengakuan Nyata (8 Jam yang Lalu)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#e2e8f0] leading-relaxed">
              Sistem bisnis kami baru saja memproses <strong>47 transaksi penjualan</strong>, mencocokkan stok gudang, menerbitkan faktur pajak, dan mengirim instruksi logistik secara otomatis — <strong>tanpa ada satu pun staf yang menyentuh keyboard!</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-2.5 rounded-xl bg-[#0c233c] border border-[#224c75] text-center">
                <span className="text-[10px] font-mono text-[#38bdf8] block">Company Profile</span>
                <span className="text-xs font-black text-white">Kredibilitas Korporat</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0c233c] border border-[#224c75] text-center">
                <span className="text-[10px] font-mono text-[#38bdf8] block">E-Commerce</span>
                <span className="text-xs font-black text-white">Konversi Checkout Tinggi</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0c233c] border border-[#224c75] text-center">
                <span className="text-[10px] font-mono text-[#38bdf8] block">Core ERP</span>
                <span className="text-xs font-black text-white">Real-Time Cashflow &amp; Stok</span>
              </div>
            </div>
          </div>

          {/* Bab 2 & 4: Frustrasi Lama vs Solusi Trinitas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#fee2e2] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-black text-[#dc2626]">
                <AlertTriangle className="w-4 h-4" />
                <span>MASALAH CARA LAMA (TERPISAH-PISAH)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#7f1d1d] leading-relaxed">
                Menyewa freelance terpisah untuk web profil, plugin e-commerce gratisan, dan Excel terpisah untuk stok. Hasilnya: sistem lambat, stok fisik selisih puluhan juta, dan crash saat lonjakan pesanan tanggal kembar.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#dcfce7] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-black text-[#15803d]">
                <Zap className="w-4 h-4" />
                <span>SOLUSI ARSITEKTUR TRINITAS</span>
              </div>
              <p className="text-xs sm:text-sm text-[#14532d] leading-relaxed">
                Menyatukan ketiga pilar dalam satu database terpusat: pesanan masuk langsung memotong stok multi-gudang, pembayaran terkonfirmasi otomatis membuat jurnal laba rugi, dan profil instansi tampil dengan otoritas tinggi.
              </p>
            </div>
          </div>

          {/* Bab 5 & 6: Metrik & Dampak */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono font-black text-[#8c6239] uppercase tracking-wider">
              Hasil Nyata Implementasi Selama 18 Bulan:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] text-center">
                <div className="text-xl sm:text-3xl font-black text-[#15803d]">+300%</div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-[#0f172a] mt-0.5">Penjualan 30 Hari Pertama</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] text-center">
                <div className="text-xl sm:text-3xl font-black text-[#0284c7]">0%</div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-[#0f172a] mt-0.5">Selisih Stok (Discrepancy)</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] text-center">
                <div className="text-xl sm:text-3xl font-black text-[#f59e0b]">1000+ Jam</div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-[#0f172a] mt-0.5">Hemat Waktu Admin Manual</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] text-center">
                <div className="text-xl sm:text-3xl font-black text-[#0f172a]">5 Cabang</div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-[#0f172a] mt-0.5">Pantau dari Smartphone</div>
              </div>
            </div>
          </div>

          {/* Accordion Rincian */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsExpanded((prev: boolean) => !prev)}
              className="w-full py-3 px-4 rounded-2xl bg-[#fff9d4] hover:bg-[#fde047] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] text-xs font-mono font-black text-[#0f172a] flex items-center justify-between transition-all cursor-pointer"
            >
              <span>{isExpanded ? 'Tutup Rincian Spesifikasi & Bab Cerita' : 'Lihat Seluruh Rincian Paket & Spesifikasi Teknis (Bab 7 - 13)'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6 pt-5 overflow-hidden"
                >
                  {/* Paket 3 Pilar */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] space-y-2">
                      <div className="p-2 w-fit rounded-xl bg-[#e0f2fe] text-[#0284c7] border border-[#0f172a]">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-black text-[#0f172a]">Company Profile Korporat</h4>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        UI/UX eksklusif, optimasi SEO standar industri, profil tim &amp; legalitas, serta formulir prospek B2B terintegrasi.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] space-y-2">
                      <div className="p-2 w-fit rounded-xl bg-[#fef9c3] text-[#854d0e] border border-[#0f172a]">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-black text-[#0f172a]">E-Commerce Powerhouse</h4>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Katalog tanpa batas, Payment Gateway otomatis (QRIS, VA, Kartu Kredit), kurir logistik instan, dan checkout anti-batal.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] space-y-2">
                      <div className="p-2 w-fit rounded-xl bg-[#dcfce7] text-[#15803d] border border-[#0f172a]">
                        <Database className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-black text-[#0f172a]">Core ERP &amp; Akuntansi</h4>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Manajemen multi-gudang, pembukuan standar SAK ETAP (Laba Rugi, Neraca, Arus Kas), dan invoice faktur otomatis.
                      </p>
                    </div>
                  </div>

                  {/* Fitur Keamanan */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-2">
                    <div className="text-xs font-mono font-black text-[#0f172a] uppercase flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#15803d]" />
                      <span>Standar Keamanan &amp; Kemudahan</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#334155]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                        <span>Enkripsi SSL &amp; Perlindungan Firewall server</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                        <span>Loading cepat di bawah 2 detik</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                        <span>Role-Based Access Control (Staf, Manager, Owner)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                        <span>Mudah digunakan tanpa butuh tim IT programmer</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bab 12 & 13: Skema Harga & CTA WhatsApp */}
          <div className="p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-[#fff9d4] via-[#fef08a] to-[#fde047] border-3 border-[#0f172a] shadow-[6px_6px_0px_#0f172a] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#0f172a]/20 pb-3">
              <div>
                <span className="text-[10px] font-mono font-black text-[#854d0e] uppercase">
                  PENAWARAN AKSELERASI TERBATAS
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Skema Investasi Sistem Terintegrasi
                </h3>
              </div>
              <span className="px-3 py-1 rounded-xl bg-[#dc2626] text-white text-xs font-mono font-black border border-[#0f172a] self-start sm:self-auto">
                HEMAT RP 85.000.000
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="space-y-1.5 text-xs font-mono text-[#64748b]">
                <div>• Web Company Profile Korporat: <span className="line-through">Rp25.000.000</span></div>
                <div>• Portal E-Commerce &amp; Payment: <span className="line-through">Rp35.000.000</span></div>
                <div>• Core ERP Multi-Gudang Terintegrasi: <span className="line-through">Rp40.000.000</span></div>
                <div className="pt-1 font-bold text-[#334155]">Total Nilai Investasi Asli: <span className="line-through font-black text-red-600">Rp100.000.000</span></div>
              </div>

              <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] text-center space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#64748b] uppercase">Investasi Satu Kali Saja:</span>
                <div className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
                  Rp 15.000.000
                </div>
                <span className="text-[10px] font-mono font-bold text-[#15803d] block">
                  ✓ Tanpa Biaya Royalti / Langganan Bulanan (No Recurring Fee)
                </span>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono font-bold text-[#1e293b] flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>✓ Full Setup &amp; Deployment</span>
              <span>✓ Garansi &amp; Dukungan Teknis Purna-Jual</span>
              <span>✓ Data 100% Milik Server Anda Sendiri</span>
            </div>

            <div className="pt-3 border-t-2 border-[#0f172a]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold text-[#475569]">
                Ambil alih dominasi pasar Anda sekarang juga.
              </span>
              <a
                href={`https://wa.me/6285141220521?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#0f172a] hover:bg-[#1e293b] text-[#fde047] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] transition-all cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                <span>Konsultasikan Sistem via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
