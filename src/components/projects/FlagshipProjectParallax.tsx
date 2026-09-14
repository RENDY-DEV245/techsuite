import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  X,
  Sparkles,
  ShoppingBag,
  Bell,
  RefreshCw,
  BarChart3,
  Sliders,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { AnimatedOceanSlideBackground } from './AnimatedOceanSlideBackground';

interface FlagshipSlideCardProps {
  project: Project;
  index: number;
  yMotion?: any;
  opacityMotion?: any;
  depthLevel?: 1 | 2 | 3 | 4;
}

export const FlagshipSlideCard: React.FC<FlagshipSlideCardProps> = ({
  project,
  index,
  yMotion = '0%',
  opacityMotion = 1,
  depthLevel = 1
}) => {
  const [showEcommerceModal, setShowEcommerceModal] = useState(false);
  const zIndex = (index + 1) * 10;

  // 12 Katalog Web Klien Lengkap untuk Slide 01
  const clientWebs = [
    {
      name: 'Maqdis Group',
      subtitle: 'Travel Haji & Umroh',
      desc: 'Platform resmi agensi travel Haji & Umroh dengan jadwal keberangkatan, rincian paket ibadah, dan panduan perjalanan lengkap.',
      categoryTag: 'Travel · Haji · Umroh',
      url: 'https://maqdisgroup.com/'
    },
    {
      name: 'AFC Life Science Indonesia',
      subtitle: 'Distributor Suplemen Kesehatan Jepang',
      desc: 'Website distributor produk kesehatan dengan katalog produk & harga, sistem keranjang belanja, dan checkout langsung via WhatsApp & masih akan dikembangkan full sistem, payment gateway, ERP dll.',
      categoryTag: 'Kesehatan · Suplemen · E-Commerce',
      url: 'https://raliecare.my.id'
    },
    {
      name: 'Nafita Makeup',
      subtitle: 'Kosmetik & Kecantikan',
      desc: 'Toko online kecantikan modern dengan display katalog produk terstruktur, varian makeup lengkap, dan pemesanan instan.',
      categoryTag: 'Kecantikan · Kosmetik · Toko Online',
      url: 'https://nafita-store.clarate.id/'
    },
    {
      name: 'Baby Store',
      subtitle: 'Perlengkapan Bayi',
      desc: 'Toko online khusus perlengkapan ibu dan anak dengan pengelompokan usia, katalog produk lengkap, dan alur belanja praktis.',
      categoryTag: 'Perlengkapan Bayi · Ibu & Anak · Toko Online',
      url: 'https://baby-store.clarate.id/'
    },
    {
      name: 'UrbanWear',
      subtitle: 'Fashion Store',
      desc: 'Website toko fashion dengan foto besar, katalog produk, dan halaman brand. Untuk toko yang menjual lewat tampilan.',
      categoryTag: 'Toko · Fashion · Katalog Produk',
      url: 'https://clarate.id/templates/urbanwear',
      isPopular: true
    },
    {
      name: 'Kopi Senja',
      subtitle: 'Coffee Shop & Roastery',
      desc: 'Website coffee shop dengan menu berharga, cerita brand, galeri, jam buka, dan lokasi. Semua yang dicari calon pelanggan.',
      categoryTag: 'F&B · Coffee Shop · Cafe',
      url: 'https://clarate.id/templates/kopi-senja',
      isPopular: true
    },
    {
      name: 'Kayu Ruang',
      subtitle: 'Furniture & Interior',
      desc: 'Website furniture dengan katalog produk, koleksi, dan portofolio ruang. Untuk bisnis yang menjual barang besar dan bernilai.',
      categoryTag: 'Toko · Furniture · Interior',
      url: 'https://clarate.id/templates/kayu-ruang'
    },
    {
      name: 'Garasi Prima',
      subtitle: 'Bengkel Mobil & Servis Berkala',
      desc: 'Website bengkel dengan daftar servis berharga, estimasi waktu, dan alur pengerjaan. Untuk usaha yang dipilih karena dipercaya.',
      categoryTag: 'Otomotif · Bengkel · Servis',
      url: 'https://clarate.id/templates/garasi-prima'
    },
    {
      name: 'Forte Gym',
      subtitle: 'Gym & Pusat Kebugaran',
      desc: 'Website gym dengan area latihan, membership tanpa kontrak, dan profil pelatih. Untuk tempat yang dipilih karena alat dan keleluasaannya.',
      categoryTag: 'Kesehatan · Gym · Tanpa Kontrak',
      url: 'https://clarate.id/templates/forte-gym'
    },
    {
      name: 'Panen Langsung',
      subtitle: 'Agribisnis & Supplier Pangan',
      desc: 'Website supplier pangan B2B dengan daftar komoditas berharga per kilo, alur langganan, dan profil petani mitra.',
      categoryTag: 'Agrikultur · Supplier Pangan · B2B',
      url: 'https://clarate.id/templates/panen-langsung'
    },
    {
      name: 'Kucek Laundry',
      subtitle: 'Laundry Kiloan & Satuan',
      desc: 'Website laundry dengan harga per kilo, lama pengerjaan, dan area jemput-antar. Untuk usaha yang dipilih karena praktis.',
      categoryTag: 'Jasa · Laundry · Jemput-Antar',
      url: 'https://clarate.id/templates/kucek-laundry'
    },
    {
      name: 'Sahabat Satwa',
      subtitle: 'Klinik Hewan & Pet Care',
      desc: 'Website klinik hewan dengan tarif tindakan, jadwal praktik dokter, dan nomor darurat yang selalu terlihat.',
      categoryTag: 'Kesehatan · Klinik Hewan · Jadwal Dokter',
      url: 'https://clarate.id/templates/sahabat-satwa'
    }
  ];

  return (
    <>
      <motion.div
        style={{ y: yMotion, opacity: opacityMotion, zIndex }}
        className="absolute inset-0 w-full h-full flex flex-col justify-between overflow-hidden select-none bg-[#0284c7] shadow-[0_-8px_24px_rgba(15,23,42,0.35)]"
      >
        <AnimatedOceanSlideBackground depthLevel={depthLevel} />

        {/* Slide Header */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 sm:pt-24 px-4 sm:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-[10px] sm:text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a]">
              <span>0{index + 1} // {project.subtitle.toUpperCase()}</span>
            </div>
          </div>

          <div className="text-[10px] sm:text-xs font-mono font-black text-[#0f172a] px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a]">
            PILAR {index + 1} / 5
          </div>
        </div>

        {/* Presentation Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-12 my-auto py-1 sm:py-2 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-stretch">
            
            {/* Main Info Card (Left) */}
            <div className="lg:col-span-5 p-4 sm:p-7 rounded-2xl sm:rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[4px_4px_0px_#0f172a] sm:shadow-[8px_8px_0px_#0f172a] flex flex-col justify-between space-y-2 sm:space-y-4">
              <div>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-sm font-mono font-bold text-[#0284c7] mt-0.5">
                  {project.subtitle}
                </p>
                <p className="text-[11px] sm:text-sm text-[#334155] leading-relaxed font-medium mt-1.5 sm:mt-2.5 line-clamp-2 sm:line-clamp-none">
                  {project.summary}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-1.5 sm:p-2 rounded-xl bg-[#e0f2fe] border-2 border-[#0f172a] text-center shadow-[1.5px_1.5px_0px_#0f172a]"
                  >
                    <div className="text-[8px] sm:text-[9.5px] font-mono font-bold uppercase text-[#0369a1] leading-tight">
                      {m.label}
                    </div>
                    <div className="text-[11px] sm:text-xs font-black text-[#0f172a] mt-0.5 leading-tight truncate">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-1.5 sm:pt-2 border-t border-[#e2d3b3] flex flex-wrap gap-2 items-center">
                {index === 1 ? (
                  /* Khusus Slide 02 E-Commerce: Tahu Lebih Lanjut & Coba Gratis */
                  <>
                    <button
                      type="button"
                      onClick={() => setShowEcommerceModal(true)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex-1"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#0f172a]" />
                      <span>Tahu Lebih Lanjut</span>
                    </button>

                    <a
                      href="https://clarate.id/id/register?service_id=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-mono font-bold text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                    >
                      <span>Coba Gratis</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </>
                ) : (
                  /* Slide Lainnya */
                  project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{index === 0 ? 'Kunjungi Maqdis Group' : 'Konsultasi Sistem'}</span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Right Showcase Box */}
            <div className="lg:col-span-7 p-3.5 sm:p-6 rounded-2xl sm:rounded-[32px] bg-[#fffdf5]/95 border-2 border-[#0f172a] shadow-[4px_4px_0px_#0f172a] sm:shadow-[6px_6px_0px_#0f172a] flex flex-col justify-between">
              {index === 0 ? (
                /* Slide 01: Katalog 12 Website Klien */
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono font-black text-[#0f172a] border-b pb-1.5 border-[#0f172a]/15">
                    <span>KATALOG 12 WEBSITE &amp; DESKRIPSI</span>
                    <span className="text-[#0284c7] text-[10px] sm:text-xs">GULIR &amp; KLIK ↗</span>
                  </div>

                  <div
                    data-lenis-prevent="true"
                    style={{ touchAction: 'pan-y' }}
                    className="grid grid-cols-1 gap-2.5 h-[230px] sm:h-[280px] lg:h-[320px] overflow-y-auto overscroll-contain pr-1.5 scrollbar-thin scrollbar-thumb-[#0284c7]"
                  >
                    {clientWebs.map((cw, i) => (
                      <a
                        key={i}
                        href={cw.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl sm:rounded-2xl bg-[#fff9d4] hover:bg-[#fde047] active:bg-[#fde047] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all flex flex-col justify-between gap-1.5 group shrink-0"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs sm:text-sm font-black text-[#0f172a] group-hover:text-[#0284c7] transition-colors leading-tight">
                                {cw.name}
                              </span>
                              {cw.isPopular && (
                                <span className="text-[9px] font-mono font-black uppercase px-1.5 py-0.2 rounded bg-[#ef4444] text-white border border-[#0f172a]">
                                  Populer
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#0284c7] mt-0.5">
                              {cw.subtitle}
                            </div>
                          </div>

                          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#fffdf5] border border-[#0f172a] text-[10px] font-mono font-black text-[#0f172a] shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                            <span>Buka</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        </div>

                        <p className="text-[11px] sm:text-xs text-[#334155] font-medium leading-relaxed">
                          {cw.desc}
                        </p>

                        <div className="pt-1 border-t border-[#0f172a]/10 flex items-center justify-between text-[9.5px] sm:text-[10px] font-mono font-bold text-[#64748b]">
                          <span>{cw.categoryTag}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ) : index === 1 ? (
                /* Slide 02 E-Commerce: Showcase Toko Clarate */
                <div className="h-full flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#0284c7] block">
                        TOKO YANG SUDAH BERJALAN:
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded border border-[#16a34a]">
                        Terhubung ERP
                      </span>
                    </div>

                    <div className="space-y-2">
                      <a
                        href="https://raliecare.my.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#fff9d4] hover:bg-[#fde047] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] flex items-center justify-between group transition-all"
                      >
                        <div>
                          <div className="text-xs font-black text-[#0f172a] group-hover:text-[#0284c7]">
                            AFC Life Science (Ralie Care)
                          </div>
                          <div className="text-[10px] font-mono text-[#64748b]">
                            Distributor Suplemen Jepang · Keranjang &amp; WhatsApp
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#0f172a]" />
                      </a>

                      <a
                        href="https://nafita-store.clarate.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#fff9d4] hover:bg-[#fde047] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] flex items-center justify-between group transition-all"
                      >
                        <div>
                          <div className="text-xs font-black text-[#0f172a] group-hover:text-[#0284c7]">
                            Nafita Makeup Store
                          </div>
                          <div className="text-[10px] font-mono text-[#64748b]">
                            Kosmetik &amp; Riasan MUA Tangerang
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#0f172a]" />
                      </a>

                      <a
                        href="https://baby-store.clarate.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#fff9d4] hover:bg-[#fde047] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] flex items-center justify-between group transition-all"
                      >
                        <div>
                          <div className="text-xs font-black text-[#0f172a] group-hover:text-[#0284c7]">
                            Baby Store Online
                          </div>
                          <div className="text-[10px] font-mono text-[#64748b]">
                            Perlengkapan &amp; Kebutuhan Bayi Praktis
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#0f172a]" />
                      </a>
                    </div>
                  </div>

                  <div
                    onClick={() => setShowEcommerceModal(true)}
                    className="p-3 rounded-2xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] cursor-pointer hover:scale-[1.01] transition-transform flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="text-xs font-black">
                        Pelajari Sistem Clarate E-Commerce
                      </div>
                      <div className="text-[10px] text-white/80">
                        Tanpa Komisi · Tanpa Coding · 100% Data Milikmu
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0 text-[#fde047]" />
                  </div>
                </div>
              ) : (
                /* Slide 03 (HRIS), 04 (CAD), 05 (ERP) */
                <div className="h-full flex flex-col justify-between space-y-2 sm:space-y-3">
                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider text-[#0284c7] block">
                      FITUR &amp; HIGHLIGHT SISTEM:
                    </span>
                    <div className="space-y-1.5 sm:space-y-2">
                      {project.highlights?.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 p-2 sm:p-2.5 rounded-xl bg-[#fff9d4] border border-[#0f172a]/30 text-[11px] sm:text-xs font-bold text-[#0f172a]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16a34a] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-1.5 sm:pt-2 border-t border-[#0f172a]/15 flex flex-wrap gap-1 sm:gap-1.5">
                    {project.stack.map((st) => (
                      <span
                        key={st}
                        className="px-2 py-0.5 rounded-lg bg-[#e0f2fe] text-[9.5px] sm:text-[10px] font-mono font-bold text-[#0284c7] border border-[#0284c7]/40"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        <div className="relative z-10 h-3 w-full" />
      </motion.div>

      {/* MODAL CLARATE E-COMMERCE */}
      <AnimatePresence>
        {showEcommerceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 bg-[#071b2f]/80 backdrop-blur-md select-none"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-full max-w-4xl bg-[#fffdf5] rounded-3xl border-3 sm:border-4 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] p-5 sm:p-8 max-h-[90vh] overflow-y-auto overscroll-contain flex flex-col justify-between space-y-6"
              data-lenis-prevent="true"
              style={{ touchAction: 'pan-y' }}
            >
              {/* Header Modal */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-[#0f172a]/15">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#fde047] text-[#0f172a] text-[10px] sm:text-xs font-mono font-black border-2 border-[#0f172a]">
                      CLARATE E-COMMERCE
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#15803d]">
                      • Tanpa Komisi • Tanpa Coding
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-black text-[#0f172a] tracking-tight leading-tight">
                    Toko Online Milikmu Sendiri, Tanpa Komisi, Tanpa Coding
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-[#0284c7] mt-1">
                    Berhenti Membangun Omzet di Platform Orang Lain. Bangun Toko Online Milikmu Sendiri.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowEcommerceModal(false)}
                  className="p-2 rounded-xl bg-[#fff9d4] hover:bg-[#fee2e2] text-[#0f172a] hover:text-[#dc2626] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
                
                {/* Hero Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-3">
                  <p className="font-medium text-[#0f172a]">
                    Setiap hari jutaan transaksi di marketplace menghasilkan komisi untuk platform, bukan untuk kamu. <strong>Clarate E-Commerce</strong> hadir agar setiap penjualan masuk 100% ke bisnismu, dengan data customer yang sepenuhnya menjadi milikmu.
                  </p>
                  
                  {/* Keuntungan Ringkas */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#0f172a]/10">
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f172a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Trial gratis 14 hari</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f172a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Tanpa kartu kredit</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f172a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Data 100% milikmu</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f172a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Support tersedia</span>
                    </div>
                  </div>
                </div>

                {/* Section Masalah Penjual */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-black text-[#0f172a]">
                    Kenapa Harus Punya Toko Online Sendiri?
                  </h3>
                  <p className="font-medium text-[#64748b]">
                    Terlalu banyak penjual online kerja keras, tapi hasilnya masuk kantong platform orang lain. Marketplace memang mempermudah jual beli, tapi di balik itu kamu kehilangan margin, kehilangan data customer, dan kehilangan kontrol atas brandmu sendiri.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    {/* Penjual Marketplace */}
                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-black uppercase text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded border border-[#ef4444]/30">
                          Penjual Marketplace
                        </span>
                        <p className="text-xs italic text-[#475569] mt-2">
                          “Omzet bulan ini Rp 45 juta. Tapi setelah dikurangi komisi 12%, biaya iklan dalam platform, dan biaya layanan, margin bersihnya tinggal 8-10%. Harga ditekan terus oleh kompetitor di halaman yang sama.”
                        </p>
                      </div>
                      <div className="p-2 rounded-xl bg-[#fef2f2] border border-[#ef4444]/20 text-[11px] text-[#991b1b] font-bold">
                        💡 Komisi dan iklan marketplace menghabiskan marginmu.
                      </div>
                    </div>

                    {/* Brand Lokal */}
                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-black uppercase text-[#f59e0b] bg-[#fef3c7] px-2 py-0.5 rounded border border-[#f59e0b]/30">
                          Brand Lokal
                        </span>
                        <p className="text-xs italic text-[#475569] mt-2">
                          “Sudah bangun brand selama 3 tahun. Tapi customer yang beli hari ini, besok lihat iklan kompetitor tepat di bawah produkmu. Tidak bisa follow up, tidak bisa retarget, data customer milik marketplace.”
                        </p>
                      </div>
                      <div className="p-2 rounded-xl bg-[#fffbeb] border border-[#f59e0b]/20 text-[11px] text-[#92400e] font-bold">
                        💡 Brand yang kamu bangun bertahun-tahun justru menguntungkan marketplace.
                      </div>
                    </div>

                    {/* UMKM & Reseller */}
                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-black uppercase text-[#0284c7] bg-[#e0f2fe] px-2 py-0.5 rounded border border-[#0284c7]/30">
                          UMKM &amp; Reseller Online
                        </span>
                        <p className="text-xs italic text-[#475569] mt-2">
                          “Jualan via WhatsApp dan IG sudah ramai, tapi kewalahan manage order manual. Salah kirim, double order, bayar sudah tapi stok habis, semua karena tidak ada sistem.”
                        </p>
                      </div>
                      <div className="p-2 rounded-xl bg-[#f0f9ff] border border-[#0284c7]/20 text-[11px] text-[#0369a1] font-bold">
                        💡 Jualan manual bisa jalan di awal, tapi tidak bisa scale tanpa sistem.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Fitur Clarate */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-black text-[#0f172a]">
                    Clarate E-Commerce: Toko Online Lengkap, Terhubung ke ERP
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <ShoppingBag className="w-4 h-4 text-[#0284c7]" />
                        <span>Katalog Multi-Varian</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Tambah ribuan produk dengan kategori, varian, dan foto. Pengunjung langsung temukan apa yang mereka cari.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <Bell className="w-4 h-4 text-[#f59e0b]" />
                        <span>Pesanan Real-Time</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Notifikasi pesanan masuk otomatis ke HP. Update status satu klik: bayar → proses → kirim → selesai.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <DollarSign className="w-4 h-4 text-[#16a34a]" />
                        <span>QRIS &amp; e-Wallet Otomatis</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Checkout 30 detik. Konfirmasi bayar otomatis via QRIS, transfer bank, e-wallet tanpa cek manual.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <RefreshCw className="w-4 h-4 text-[#0284c7]" />
                        <span>Stok Selalu Sinkron ERP</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Terjual di kasir, stok online ikut berkurang seketika. Mencegah terjadinya overselling produk habis.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <BarChart3 className="w-4 h-4 text-[#7c3aed]" />
                        <span>Laporan Keuangan Otomatis</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Begitu pesanan dibayar, Sales Order di ERP terbentuk sendiri, omzet dan margin langsung masuk akuntansi.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <Sliders className="w-4 h-4 text-[#ea580c]" />
                        <span>Tampilan Toko Sesuai Brand</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Domain nama-tokomu.clarate.id, logo, warna, dan banner diatur sendiri tanpa perlu coding.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Perbandingan Clarate vs Toko Online Biasa */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#e0f2fe] border-2 border-[#0f172a] space-y-3">
                  <h4 className="text-sm sm:text-base font-black text-[#0f172a]">
                    Clarate vs Toko Online Biasa
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-[#0f172a]/20 space-y-1">
                      <div className="font-black text-[#0f172a]">1. Sinkronisasi Stok</div>
                      <p className="text-[11px] text-[#475569]">
                        Satu stok terpusat tersinkron ke toko online dan kasir fisik secara otomatis tanpa rekap manual.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#0f172a]/20 space-y-1">
                      <div className="font-black text-[#0f172a]">2. Laporan Keuangan</div>
                      <p className="text-[11px] text-[#475569]">
                        Setiap transaksi otomatis tercatat ke pembukuan laba-rugi &amp; arus kas ERP real-time.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#0f172a]/20 space-y-1">
                      <div className="font-black text-[#0f172a]">3. Data Customer Penuh</div>
                      <p className="text-[11px] text-[#475569]">
                        Database pelanggan 100% milikmu, bebas di-retarget dan di-broadcast kapan saja tanpa potongan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimoni Singkat */}
                <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a]">
                  <p className="text-xs italic text-[#334155]">
                    “Checkout cepat dan konfirmasi QRIS otomatis. Saya tidak perlu lagi cek transfer manual satu per satu, dan tidak ada pesanan yang terlewat.”
                  </p>
                  <div className="mt-2 text-xs font-black text-[#0f172a]">
                    Mega Lestari — Owner · Batik Nusantara (batik-nusantara.clarate.id)
                  </div>
                </div>

              </div>

              {/* Footer CTA Modal */}
              <div className="pt-4 border-t-2 border-[#0f172a]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs font-mono font-bold text-[#64748b] text-center sm:text-left">
                  Toko online aktif dalam hitungan menit • Tanpa kartu kredit
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowEcommerceModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#fff9d4] hover:bg-[#faeed1] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer flex-1 sm:flex-none"
                  >
                    Tutup
                  </button>

                  <a
                    href="https://clarate.id/id/register?service_id=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-mono font-black border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex-1 sm:flex-none"
                  >
                    <span>Coba Gratis 14 Hari</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const FlagshipProjectParallax = FlagshipSlideCard;
