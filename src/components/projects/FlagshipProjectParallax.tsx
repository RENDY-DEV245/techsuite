import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  X,
  Sparkles,
  ShoppingBag,
  Bell,
  DollarSign,
  ArrowRight,
  Users,
  MapPin,
  Calendar,
  Receipt,
  UserCheck,
  Star, 
  Play, 
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
  const [showHrisModal, setShowHrisModal] = useState(false);
  const [showErpModal, setShowErpModal] = useState(false);
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
      type: 'Toko Online',
      desc: 'Toko online kecantikan modern dengan display katalog produk terstruktur, varian makeup lengkap, dan pemesanan instan.',
      categoryTag: 'Kecantikan · Kosmetik · Toko Online',
      url: 'https://nafita-store.clarate.id/'
    },
    {
      name: 'Baby Store',
      subtitle: 'Perlengkapan Bayi',
      type: 'Toko Online',
      desc: 'Toko online khusus perlengkapan ibu dan anak dengan pengelompokan usia, katalog produk lengkap, dan alur belanja praktis.',
      categoryTag: 'Perlengkapan Bayi · Ibu & Anak · Toko Online',
      url: 'https://baby-store.clarate.id/'
    },
    {
      name: 'UrbanWear',
      subtitle: 'Fashion Store',
      type: 'Populer',
      desc: 'Website toko fashion dengan foto besar, katalog produk, dan halaman brand. Untuk toko yang menjual lewat tampilan.',
      categoryTag: 'Toko · Fashion · Katalog Produk',
      url: 'https://clarate.id/templates/urbanwear',
      isPopular: true
    },
    {
      name: 'Kopi Senja',
      subtitle: 'Coffee Shop & Roastery',
      type: 'Populer',
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
                  /* Slide 02 E-Commerce: Tahu Lebih Lanjut & Coba Gratis */
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
                ) : index === 2 ? (
                  /* Slide 03 HRIS: Tahu Lebih Lanjut & Coba Gratis */
                  <>
                    <button
                      type="button"
                      onClick={() => setShowHrisModal(true)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex-1"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#0f172a]" />
                      <span>Tahu Lebih Lanjut</span>
                    </button>

                    <a
                      href="https://clarate.id/id/register?service_id=3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-mono font-bold text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                    >
                      <span>Coba Gratis</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </>
                ) : index === 3 ? (
                  /* Slide 04 CAD: 5 Link Prototype YouTube */
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] font-mono font-black text-xs border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] w-fit">
                      <Play className="w-3.5 h-3.5 fill-[#0f172a]" />
                      <span>Lihat Prototype (5 Video)</span>
                    </div>

                    <div
                      data-lenis-prevent="true"
                      style={{ touchAction: 'pan-y' }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[140px] overflow-y-auto overscroll-contain pr-1 scrollbar-thin"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=yVHtIviLXOE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between gap-1.5 px-3 py-1.5 rounded-xl bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] font-mono font-bold text-[11px] border border-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a] transition-all"
                      >
                        <span className="truncate">Demo 1: AutoLISP Wire Cut</span>
                        <Play className="w-3 h-3 fill-[#0f172a] shrink-0" />
                      </a>
                      <a
                        href="https://youtu.be/ZOpubFYgGWQ?si=DIj1XHhmxRDsvAML"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between gap-1.5 px-3 py-1.5 rounded-xl bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] font-mono font-bold text-[11px] border border-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a] transition-all"
                      >
                        <span className="truncate">Demo 2: Excel to AutoCAD</span>
                        <Play className="w-3 h-3 fill-[#0f172a] shrink-0" />
                      </a>
                      <a
                        href="LINK_YT_3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between gap-1.5 px-3 py-1.5 rounded-xl bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] font-mono font-bold text-[11px] border border-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a] transition-all"
                      >
                        <span className="truncate">Demo 3: Prototype CAD 3</span>
                        <Play className="w-3 h-3 fill-[#0f172a] shrink-0" />
                      </a>
                      <a
                        href="LINK_YT_4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between gap-1.5 px-3 py-1.5 rounded-xl bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] font-mono font-bold text-[11px] border border-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a] transition-all"
                      >
                        <span className="truncate">Demo 4: Prototype CAD 4</span>
                        <Play className="w-3 h-3 fill-[#0f172a] shrink-0" />
                      </a>
                      <a
                        href="LINK_YT_5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between gap-1.5 px-3 py-1.5 rounded-xl bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] font-mono font-bold text-[11px] border border-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a] transition-all sm:col-span-2"
                      >
                        <span className="truncate">Demo 5: Prototype CAD 5</span>
                        <Play className="w-3 h-3 fill-[#0f172a] shrink-0" />
                      </a>
                    </div>
                  </div>
) : (
                  /* Slide 05 ERP: Tahu Lebih Lanjut & Coba Gratis */
                  <>
                    <button
                      type="button"
                      onClick={() => setShowErpModal(true)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex-1"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#0f172a]" />
                      <span>Tahu Lebih Lanjut</span>
                    </button>

                    <a
                      href="https://clarate.id/id/register?service_id=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-mono font-bold text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                    >
                      <span>Coba Gratis</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </>
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
              ) : index === 2 ? (
                /* Slide 03 HRIS: Showcase Fitur & Callout Modal */
                <div className="h-full flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#0284c7] block">
                        FITUR UTAMA CLARATE HRIS:
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded border border-[#16a34a]">
                        PPh 21 TER Otomatis
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="p-2.5 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] flex items-center gap-2.5 text-xs font-bold text-[#0f172a]">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>Payroll 2 Hari Selesai dalam 2 Jam (Tanpa Salah Formula)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] flex items-center gap-2.5 text-xs font-bold text-[#0f172a]">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>Absensi GPS Anti Fake-GPS &amp; Shift Multi-Cabang</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#fff9d4] border-2 border-[#0f172a] flex items-center gap-2.5 text-xs font-bold text-[#0f172a]">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                        <span>Portal Karyawan Mandiri: Cuti, Slip Gaji &amp; Reimburse</span>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => setShowHrisModal(true)}
                    className="p-3 rounded-2xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] cursor-pointer hover:scale-[1.01] transition-transform flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="text-xs font-black">
                        Pelajari Sistem Clarate HRIS &amp; Payroll
                      </div>
                      <div className="text-[10px] text-white/80">
                        Otomasi PPh 21 TER · Slip Gaji Digital · Presensi GPS
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0 text-[#fde047]" />
                  </div>
                </div>
              ) : (
                /* Slide 04 (CAD), 05 (ERP) */
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

      {/* MODAL 01: CLARATE E-COMMERCE */}
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

              <div className="space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-3">
                  <p className="font-medium text-[#0f172a]">
                    Setiap hari jutaan transaksi di marketplace menghasilkan komisi untuk platform, bukan untuk kamu. <strong>Clarate E-Commerce</strong> hadir agar setiap penjualan masuk 100% ke bisnismu, dengan data customer yang sepenuhnya menjadi milikmu.
                  </p>
                  
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2">
                      <span className="text-[10px] font-mono font-black uppercase text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded border border-[#ef4444]/30">
                        Penjual Marketplace
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “Omzet bulan ini Rp 45 juta. Tapi setelah dikurangi komisi 12%, biaya iklan dalam platform, dan biaya layanan, margin bersihnya tinggal 8-10%.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#fef2f2] border border-[#ef4444]/20 text-[11px] text-[#991b1b] font-bold">
                        💡 Komisi dan iklan marketplace menghabiskan marginmu.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2">
                      <span className="text-[10px] font-mono font-black uppercase text-[#f59e0b] bg-[#fef3c7] px-2 py-0.5 rounded border border-[#f59e0b]/30">
                        Brand Lokal
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “Sudah bangun brand selama 3 tahun. Tapi customer yang beli hari ini, besok lihat iklan kompetitor tepat di bawah produkmu. Data milik marketplace.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#fffbeb] border border-[#f59e0b]/20 text-[11px] text-[#92400e] font-bold">
                        💡 Brand yang kamu bangun menguntungkan marketplace.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2">
                      <span className="text-[10px] font-mono font-black uppercase text-[#0284c7] bg-[#e0f2fe] px-2 py-0.5 rounded border border-[#0284c7]/30">
                        UMKM &amp; Reseller
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “Jualan via WhatsApp dan IG sudah ramai, tapi kewalahan manage order manual. Salah kirim, double order, bayar sudah tapi stok habis.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#f0f9ff] border border-[#0284c7]/20 text-[11px] text-[#0369a1] font-bold">
                        💡 Jualan manual tidak bisa scale tanpa sistem.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fitur Clarate E-Commerce */}
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
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a]">
                  <p className="text-xs italic text-[#334155]">
                    “Checkout cepat dan konfirmasi QRIS otomatis. Saya tidak perlu lagi cek transfer manual satu per satu, dan tidak ada pesanan yang terlewat.”
                  </p>
                  <div className="mt-2 text-xs font-black text-[#0f172a]">
                    Mega Lestari — Owner · Batik Nusantara (batik-nusantara.clarate.id)
                  </div>
                </div>
              </div>

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

      {/* MODAL 02: CLARATE HRIS & PAYROLL */}
      <AnimatePresence>
        {showHrisModal && (
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
              <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-[#0f172a]/15">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#fde047] text-[#0f172a] text-[10px] sm:text-xs font-mono font-black border-2 border-[#0f172a]">
                      CLARATE HRIS &amp; PAYROLL
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#15803d]">
                      • PPh 21 TER DJP • Absensi GPS
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-black text-[#0f172a] tracking-tight leading-tight">
                    Payroll &amp; HR Otomatis untuk Bisnis Indonesia
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-[#0284c7] mt-1">
                    Payroll 2 Hari Selesai dalam 2 Jam. Tanpa Salah Hitung. Tanpa Rekap Manual.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowHrisModal(false)}
                  className="p-2 rounded-xl bg-[#fff9d4] hover:bg-[#fee2e2] text-[#0f172a] hover:text-[#dc2626] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-3">
                  <p className="font-medium text-[#0f172a]">
                    <strong>Clarate HRIS</strong> menghitung gaji, PPh 21 metode TER, lembur, dan tunjangan secara otomatis setiap bulan. Absensi GPS yang tidak bisa diakali, dan slip gaji terkirim langsung ke HP karyawan tanpa perlu diprint satu per satu.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#0f172a]/10">
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f172a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>PPh 21 TER Otomatis</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f172a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Presensi Anti Fake-GPS</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f172a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Slip Gaji Digital HP</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f172a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Trial Gratis 14 Hari</span>
                    </div>
                  </div>
                </div>

                {/* Section Kenapa Clarate HRIS? */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-black text-[#0f172a]">
                    Kenapa Clarate HRIS?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2">
                      <span className="text-[10px] font-mono font-black uppercase text-[#ef4444] bg-[#fee2e2] px-2 py-0.5 rounded border border-[#ef4444]/30">
                        Pemilik UMKM
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “20 karyawan, payroll masih manual di Excel. PPh 21 dihitung satu per satu. Setiap awal bulan, owner ikut bantu HR sampai jam 10 malam. Satu formula Excel salah, semua slip gaji harus diulang.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#fef2f2] border border-[#ef4444]/20 text-[11px] text-[#991b1b] font-bold">
                        💡 Satu kesalahan formula Excel cukup untuk mengulang payroll dari awal.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2">
                      <span className="text-[10px] font-mono font-black uppercase text-[#f59e0b] bg-[#fef3c7] px-2 py-0.5 rounded border border-[#f59e0b]/30">
                        HR Manager
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “Absensi dari fingerprint harus di-export manual lalu di-paste ke Excel payroll. Karyawan minta slip gaji harus cetak manual. Cuti diajukan via WhatsApp sering lupa di-approve.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#fffbeb] border border-[#f59e0b]/20 text-[11px] text-[#92400e] font-bold">
                        💡 Sistem terpisah memaksa HR jadi operator data entry, bukan strategic partner.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2">
                      <span className="text-[10px] font-mono font-black uppercase text-[#0284c7] bg-[#e0f2fe] px-2 py-0.5 rounded border border-[#0284c7]/30">
                        Multi-Cabang
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “Karyawan di 3 cabang berbeda kota. Tidak ada cara audit absensi real-time. Laporan kehadiran baru masuk di akhir bulan, sudah terlambat untuk tindakan.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#f0f9ff] border border-[#0284c7]/20 text-[11px] text-[#0369a1] font-bold">
                        💡 Tanpa visibilitas real-time, masalah SDM baru diketahui setelah berdampak.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6 Fitur Utama HRIS */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-black text-[#0f172a]">
                    Clarate HRM: Semua yang Dibutuhkan HR dalam Satu Sistem
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <DollarSign className="w-4 h-4 text-[#16a34a]" />
                        <span>Payroll &amp; PPh 21 TER</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Gaji, tunjangan, lembur, dan PPh 21 metode TER DJP terbaru terhitung otomatis. Transfer massal ke semua bank satu klik.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <MapPin className="w-4 h-4 text-[#ef4444]" />
                        <span>Absensi GPS Anti Titip</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Check-in GPS dengan radius akurat. Tidak bisa absen dari luar lokasi kantor atau shift yang ditentukan. Data langsung masuk payroll.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <UserCheck className="w-4 h-4 text-[#0284c7]" />
                        <span>Portal Mandiri Karyawan</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Karyawan cek slip gaji, ajukan cuti, dan klaim reimburse langsung dari HP tanpa chat HR. Approval digital berjenjang.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <Calendar className="w-4 h-4 text-[#ea580c]" />
                        <span>Cuti &amp; Izin Otomatis</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Saldo cuti otomatis berkurang setelah disetujui manager. Tidak ada lagi riwayat pengajuan cuti yang hilang di WhatsApp.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <Receipt className="w-4 h-4 text-[#7c3aed]" />
                        <span>Reimburse &amp; Pinjaman</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Upload bukti struk digital dari HP. Alur approval multi-level transparan langsung terkoneksi ke rekap keuangan.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-[#0f172a]">
                        <Users className="w-4 h-4 text-[#0284c7]" />
                        <span>Database Karyawan Lengkap</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Dokumen kontrak, riwayat jabatan, dan struktur organisasi tersimpan rapi dalam satu tempat terpusat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Ulasan Bintang 5 */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-base sm:text-lg font-black text-[#0f172a]">
                    Sebelum dan Sesudah Punya Sistem yang Terhubung
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] space-y-1.5">
                      <div className="flex items-center gap-1 text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                        ))}
                      </div>
                      <p className="text-xs italic text-[#334155]">
                        “Payroll 20 karyawan yang biasanya butuh 2 hari, sekarang selesai dalam 2 jam. PPh 21-nya sudah dihitung otomatis.”
                      </p>
                      <div className="text-[11px] font-black text-[#0f172a]">
                        Sari Dewi — HR Manager · PT Kreasi Digital Nusantara
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] space-y-1.5">
                      <div className="flex items-center gap-1 text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                        ))}
                      </div>
                      <p className="text-xs italic text-[#334155]">
                        “Akhirnya bisa tahu cabang mana yang paling untung, tanpa harus tanya satu per satu ke kasir. Dashboard-nya langsung kelihatan dari HP.”
                      </p>
                      <div className="text-[11px] font-black text-[#0f172a]">
                        Andi Kurniawan — Founder · Warung Makan Bu Sri (6 Cabang)
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] space-y-1.5">
                      <div className="flex items-center gap-1 text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                        ))}
                      </div>
                      <p className="text-xs italic text-[#334155]">
                        “Dulu orderan dari WhatsApp dan IG sering double, dan saya harus cek stok manual. Sekarang semua masuk satu dashboard, stok berkurang otomatis.”
                      </p>
                      <div className="text-[11px] font-black text-[#0f172a]">
                        Nafita — Owner · Jasa Makeup &amp; Attire
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] space-y-1.5">
                      <div className="flex items-center gap-1 text-[#f59e0b]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                        ))}
                      </div>
                      <p className="text-xs italic text-[#334155]">
                        “Dulu rekap penjualan sampai jam 10 malem setiap hari. Sekarang tutup toko, laporan sudah ada. Saya nggak nyangka bisa secepat ini.”
                      </p>
                      <div className="text-[11px] font-black text-[#0f172a]">
                        Budi Santoso — Owner · Toko Elektronik Maju Jaya
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              



            {/* MODAL 03: CLARATE ERP (100% TEKS LENGKAP) */}
      <AnimatePresence>
        {showErpModal && (
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
              className="relative w-full max-w-4xl bg-[#fffdf5] rounded-3xl border-3 sm:border-4 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] sm:shadow-[12px_12px_0px_#0f172a] p-5 sm:p-8 max-h-[90vh] overflow-y-auto overscroll-contain flex flex-col justify-between space-y-6 text-[#0f172a]"
              data-lenis-prevent="true"
              style={{ touchAction: 'pan-y' }}
            >
              {/* Header Modal */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-[#0f172a]/15">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#fde047] text-[#0f172a] text-[10px] sm:text-xs font-mono font-black border-2 border-[#0f172a]">
                      CLARATE ERP
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#15803d]">
                      • Kasir • Stok • Pembelian • Penjualan • Akuntansi
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-black text-[#0f172a] tracking-tight leading-tight">
                    Sistem Operasional Bisnis ,Bukan Sekadar Akuntansi
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-[#0284c7] mt-1">
                    Setiap Transaksi Langsung Jadi Laporan. Tanpa Rekap. Tanpa Akuntan. Tanpa Excel.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowErpModal(false)}
                  className="p-2 rounded-xl bg-[#fff9d4] hover:bg-[#fee2e2] text-[#0f172a] hover:text-[#dc2626] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Isi Konten Lengkap */}
              <div className="space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
                {/* Intro & Trial Badges */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] space-y-3">
                  <p className="font-medium text-[#0f172a]">
                    Clarate ERP menghubungkan kasir, stok, pembelian, penjualan, dan akuntansi dalam satu sistem. Setiap kali ada transaksi, laporan keuangan langsung terupdate ,tanpa kamu harus input apapun dua kali.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href="https://clarate.id/id/register?service_id=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a]"
                    >
                      <span>Coba Gratis 14 Hari</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://clarate.id/id/register?service_id=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#fffdf5] text-[#0f172a] font-mono font-bold text-xs border border-[#0f172a]"
                    >
                      <span>Lihat Harga</span>
                    </a>
                  </div>

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

                {/* Section 1: Kenapa Clarate ERP? */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-black text-[#0f172a]">
                    Kenapa Clarate ERP?
                  </h3>
                  <p className="text-xs text-[#475569]">
                    Terlalu banyak pengusaha kerja keras, tapi tidak tahu bisnisnya untung atau rugi. Karena data bisnis mereka tersebar di buku kas, Excel, dan aplikasi yang tidak terhubung satu sama lain.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2 flex flex-col justify-between">
                      <span className="text-[10px] font-mono font-black uppercase text-[#0284c7] bg-[#e0f2fe] px-2 py-0.5 rounded border border-[#0284c7]/30 w-fit">
                        Retail
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “Stok laptop terakhir terjual Sabtu malam. Senin pagi, 3 customer datang ,dan baru ketahuan habis. Padahal kalau ada notifikasi, sudah bisa restock Jumat.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#fef2f2] border border-[#ef4444]/20 text-[11px] text-[#991b1b] font-bold space-y-1">
                        <div>Dampak: 3 customer kecewa. 1 pindah ke kompetitor.</div>
                        <div className="text-[#8c6239] font-normal">💡 Data ada , tapi tersebar di kasir dan Excel yang tidak terhubung.</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2 flex flex-col justify-between">
                      <span className="text-[10px] font-mono font-black uppercase text-[#f59e0b] bg-[#fef3c7] px-2 py-0.5 rounded border border-[#f59e0b]/30 w-fit">
                        F&amp;B
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “Restoran ramai sepanjang bulan. Tapi pas laporan akhir bulan keluar, food cost ternyata 52% ,jauh di atas target 35%. Margin sudah terkikis, dan baru ketahuan sekarang.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#fffbeb] border border-[#f59e0b]/20 text-[11px] text-[#92400e] font-bold space-y-1">
                        <div>Dampak: Terlambat mengambil tindakan. Margin bulan ini hilang.</div>
                        <div className="text-[#8c6239] font-normal">💡 Tanpa cost tracking real-time, kamu tahu masalah setelah sudah terlambat.</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-2 flex flex-col justify-between">
                      <span className="text-[10px] font-mono font-black uppercase text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded border border-[#15803d]/30 w-fit">
                        B2B / Distributor
                      </span>
                      <p className="text-xs italic text-[#475569]">
                        “Ada 12 invoice ke customer yang sudah lewat tempo. Tidak ada yang mengingatkan. Baru ketahuan saat butuh bayar supplier , cashflow mendadak kritis.”
                      </p>
                      <div className="p-2 rounded-xl bg-[#f0fdf4] border border-[#15803d]/20 text-[11px] text-[#166534] font-bold space-y-1">
                        <div>Dampak: Harus tarik pinjaman darurat untuk bayar supplier.</div>
                        <div className="text-[#8c6239] font-normal">💡 Piutang tidak terpantau = cashflow yang tidak bisa diprediksi.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Keputusan Lebih Cepat */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-3">
                  <div>
                    <div className="text-[10px] font-mono font-black uppercase text-[#0284c7]">
                      Keputusan Lebih Cepat
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0f172a] mt-0.5">
                      Saat Kompetitor Masih Rekap, Kamu Sudah Tahu Hasilnya.
                    </h3>
                    <p className="text-xs text-[#475569] mt-1">
                      Dashboard real-time bukan sekadar grafik cantik ,ini adalah keunggulan kompetitif. Tahu jam berapa produk paling laku, cabang mana yang underperform, dan kapan harus restock, sebelum masalah muncul.
                    </p>
                  </div>

                  <div className="space-y-1 text-xs text-[#1e293b] font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Profit per produk, per cabang, per karyawan, real-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Deteksi otomatis transaksi tidak wajar berdasarkan aturan yang kamu set</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Akses dari HP kapan saja, dari mana saja</span>
                    </div>
                  </div>

                  {/* Dashboard Visual Mock */}
                  <div className="p-3.5 rounded-xl bg-[#0f172a] text-white space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8]">
                      <span>Dashboard</span>
                      <span>30 hari terakhir</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-[#1e293b] border border-[#334155]">
                        <div className="text-[9px] text-[#94a3b8]">Pendapatan</div>
                        <div className="text-xs font-black text-[#38bdf8] mt-0.5">Rp48.500.000</div>
                        <div className="text-[8px] text-[#4ade80] font-bold">+12%</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#1e293b] border border-[#334155]">
                        <div className="text-[9px] text-[#94a3b8]">Pengeluaran</div>
                        <div className="text-xs font-black text-[#fb7185] mt-0.5">Rp21.200.000</div>
                        <div className="text-[8px] text-[#4ade80] font-bold">−4%</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#1e293b] border border-[#334155]">
                        <div className="text-[9px] text-[#94a3b8]">Laba Bersih</div>
                        <div className="text-xs font-black text-[#4ade80] mt-0.5">Rp27.300.000</div>
                        <div className="text-[8px] text-[#4ade80] font-bold">+18%</div>
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-[#94a3b8] text-center pt-1 border-t border-[#334155]">
                      Grafik Pendapatan: Setiap transaksi kasir, penjualan, dan pembelian langsung membentuk angka ini , tanpa rekap.
                    </div>
                  </div>
                </div>

                {/* Section 3: Tidak Lagi Kehabisan Stok */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-3">
                  <div>
                    <div className="text-[10px] font-mono font-black uppercase text-[#0284c7]">
                      Tidak Lagi Kehabisan Stok
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0f172a] mt-0.5">
                      Kehabisan Stok di Momen Ramai Adalah Kerugian yang Bisa Dicegah.
                    </h3>
                    <p className="text-xs text-[#475569] mt-1">
                      Clarate memantau pergerakan stokmu dan memberi peringatan otomatis saat stok menyentuh titik minimum yang kamu tetapkan , bahkan bisa langsung siapkan draf purchase order ke supplier. Tidak ada lagi customer kecewa karena kehabisan.
                    </p>
                  </div>

                  <div className="space-y-1 text-xs text-[#1e293b] font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Peringatan dini otomatis saat stok mendekati titik minimum</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Kelola stok di banyak gudang dari satu tampilan</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Draf PO ke supplier siap kirim , tidak perlu buat dari awal</span>
                    </div>
                  </div>

                  {/* Inventory Visual Table */}
                  <div className="p-3.5 rounded-xl bg-[#fff9d4] border border-[#0f172a] space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#8c6239]">
                      <span>Inventory</span>
                      <span>234 produk</span>
                    </div>
                    <table className="w-full text-[11px] font-mono text-left">
                      <thead>
                        <tr className="border-b border-[#0f172a]/20 text-[#64748b]">
                          <th className="py-1">Stok Produk</th>
                          <th className="py-1">Stok</th>
                          <th className="py-1">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#0f172a]/10">
                        <tr>
                          <td className="py-1 font-bold">Laptop Asus VivoBook (LPT-001)</td>
                          <td className="py-1">24pcs</td>
                          <td className="py-1 text-[#16a34a] font-bold">Aman</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-bold">Mouse Wireless Logitech (MSE-024)</td>
                          <td className="py-1">5pcs</td>
                          <td className="py-1 text-[#eab308] font-bold">Menipis</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-bold">Keyboard Mechanical (KBD-012)</td>
                          <td className="py-1">0pcs</td>
                          <td className="py-1 text-[#dc2626] font-bold">Habis</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-bold">Monitor 24 inch IPS (MNT-008)</td>
                          <td className="py-1">12pcs</td>
                          <td className="py-1 text-[#16a34a] font-bold">Aman</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="p-2 rounded-lg bg-[#fef9c3] border border-[#ca8a04] text-[10.5px] text-[#854d0e] font-bold">
                      Alert Stok: MSE-024 di bawah titik minimum. Draf PO siap dikirim ke supplier.
                    </div>
                    <div className="text-[9.5px] font-mono text-[#64748b]">
                      Stok berkurang saat surat jalan diposting, bukan saat pesanan dibuat.
                    </div>
                  </div>
                </div>

                {/* Section 4: Laporan Otomatis */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-3">
                  <div>
                    <div className="text-[10px] font-mono font-black uppercase text-[#0284c7]">
                      Laporan Otomatis
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0f172a] mt-0.5">
                      Laporan yang Biasanya 3 Hari , Sekarang Terbuat Sendiri.
                    </h3>
                    <p className="text-xs text-[#475569] mt-1">
                      Setiap transaksi otomatis membuat jurnal, mengupdate stok, dan masuk ke laporan keuangan. Tidak perlu akuntan untuk bikin laporan bulanan. Tidak perlu Excel yang bisa salah formula. Data akurat, audit trail lengkap ,siap untuk bank, investor, atau pajak.
                    </p>
                  </div>

                  <div className="space-y-1 text-xs text-[#1e293b] font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Standar SAK ETAP , sesuai regulasi UMKM Indonesia</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Export ke Excel, PDF, atau langsung ke konsultan pajak</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                      <span>Audit trail lengkap, siap untuk due diligence investor</span>
                    </div>
                  </div>

                  {/* Laporan Laba Rugi Visual Mock */}
                  <div className="p-3.5 rounded-xl bg-[#fff9d4] border border-[#0f172a] space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#8c6239]">
                      <span>Laporan Keuangan</span>
                      <span>Maret 2025</span>
                    </div>
                    <div className="text-xs font-black text-[#0f172a] border-b border-[#0f172a]/20 pb-1">
                      Laporan Laba Rugi
                    </div>
                    <div className="space-y-1 text-[11px] font-mono">
                      <div className="flex justify-between">
                        <span>Pendapatan Penjualan</span>
                        <span className="font-bold">48.500.000</span>
                      </div>
                      <div className="flex justify-between text-[#dc2626]">
                        <span>HPP</span>
                        <span>(21.200.000)</span>
                      </div>
                      <div className="flex justify-between font-bold border-t border-[#0f172a]/10 pt-0.5">
                        <span>Laba Kotor</span>
                        <span>27.300.000</span>
                      </div>
                      <div className="flex justify-between text-[#dc2626]">
                        <span>Biaya Operasional</span>
                        <span>(8.500.000)</span>
                      </div>
                      <div className="flex justify-between font-black text-xs text-[#16a34a] border-t-2 border-[#0f172a] pt-1">
                        <span>Laba Bersih</span>
                        <span>Rp 18.800.000</span>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <span className="px-2 py-0.5 rounded bg-[#fffdf5] border border-[#0f172a] text-[9.5px] font-mono font-bold">
                        Export Excel
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#fffdf5] border border-[#0f172a] text-[9.5px] font-mono font-bold">
                        Export PDF
                      </span>
                    </div>
                    <div className="text-[9.5px] font-mono text-[#64748b]">
                      Dihitung dari jurnal yang sama dengan Neraca,angkanya tidak mungkin berbeda.
                    </div>
                  </div>
                </div>

                {/* Section 5: Serba Otomatis */}
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] font-mono font-black uppercase text-[#0284c7]">
                      Serba Otomatis
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0f172a] mt-0.5">
                      Bukan Sekadar Catat Transaksi
                    </h3>
                    <p className="text-xs text-[#475569] mt-0.5">
                      Clarate ERP mengotomatiskan pekerjaan berulang , laporan, jurnal, dan peringatan stok berjalan sendiri setiap hari.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-[#fff9d4] border border-[#0f172a] space-y-1">
                      <div className="text-xs font-black text-[#0f172a]">Laporan Biaya Otomatis</div>
                      <p className="text-[11px] text-[#475569]">
                        Rincian pengeluaran per kategori terhitung otomatis, lengkap dengan tren bulanannya
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#fff9d4] border border-[#0f172a] space-y-1">
                      <div className="text-xs font-black text-[#0f172a]">Deteksi Selisih</div>
                      <p className="text-[11px] text-[#475569]">
                        Sistem menandai transaksi di luar batas wajar berdasarkan aturan yang kamu set
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#fff9d4] border border-[#0f172a] space-y-1">
                      <div className="text-xs font-black text-[#0f172a]">Alert Stok Menipis</div>
                      <p className="text-[11px] text-[#475569]">
                        Peringatan otomatis saat stok menyentuh titik minimum yang kamu tetapkan
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#fff9d4] border border-[#0f172a] space-y-1">
                      <div className="text-xs font-black text-[#0f172a]">Jurnal Otomatis</div>
                      <p className="text-[11px] text-[#475569]">
                        Setiap transaksi otomatis masuk ke akun akuntansi yang tepat , tidak perlu input manual
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 6: Clarate ERP - Satu Sistem, Semua Terhubung */}
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] font-mono font-black uppercase text-[#0284c7]">
                      Clarate ERP
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0f172a] mt-0.5">
                      Satu Sistem, Semua Terhubung
                    </h3>
                    <p className="text-xs text-[#475569] mt-0.5">
                      Kasir → stok → akuntansi ,semuanya terintegrasi. Input sekali di kasir, semua modul langsung terupdate otomatis.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-[#fffdf5] border border-[#0f172a] space-y-0.5">
                      <div className="flex items-center gap-1.5 font-black text-xs text-[#0f172a]">
                        <span className="px-1.5 py-0.2 rounded bg-[#e0f2fe] text-[#0284c7] font-mono text-[9px]">SAK ETAP</span>
                        <span>Laporan Keuangan Otomatis</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Jurnal terbuat sendiri setiap ada transaksi. Laporan Laba Rugi, Neraca, dan Arus Kas tersedia kapan saja tanpa rekap manual, tanpa formula Excel yang bisa salah.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#fffdf5] border border-[#0f172a] space-y-0.5">
                      <div className="flex items-center gap-1.5 font-black text-xs text-[#0f172a]">
                        <span className="px-1.5 py-0.2 rounded bg-[#dcfce7] text-[#15803d] font-mono text-[9px]">Real-time</span>
                        <span>Kasir yang Terhubung ke Segalanya</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Setiap penjualan di kasir langsung tercatat ke stok dan akuntansi bersamaan. Tidak ada rekap malam hari. Tidak ada data yang tidak nyambung.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#fffdf5] border border-[#0f172a] space-y-0.5">
                      <div className="flex items-center gap-1.5 font-black text-xs text-[#0f172a]">
                        <span className="px-1.5 py-0.2 rounded bg-[#fef3c7] text-[#d97706] font-mono text-[9px]">Multi-gudang</span>
                        <span>Stok Tidak Pernah Keliru</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Pantau stok di semua lokasi dari satu layar. Notifikasi otomatis sebelum stok habis bukan setelah customer sudah kecewa dan minta refund.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#fffdf5] border border-[#0f172a] space-y-0.5">
                      <div className="flex items-center gap-1.5 font-black text-xs text-[#0f172a]">
                        <span className="px-1.5 py-0.2 rounded bg-[#e0f2fe] text-[#0284c7] font-mono text-[9px]">Terintegrasi</span>
                        <span>Pembelian Tidak Ada yang Terlewat</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Dari PO ke penerimaan barang semua terdokumentasi. Hutang supplier selalu akurat. Tidak ada pembelian yang terlewat atau tidak tercatat.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#fffdf5] border border-[#0f172a] space-y-0.5">
                      <div className="flex items-center gap-1.5 font-black text-xs text-[#0f172a]">
                        <span className="px-1.5 py-0.2 rounded bg-[#dcfce7] text-[#15803d] font-mono text-[9px]">Otomatis</span>
                        <span>Piutang Terpantau, Tidak Ada yang Lupa Ditagih</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        Dari penawaran ke invoice ke pelunasan dalam satu alur. Piutang customer terpantau otomatis. Tidak ada invoice yang lupa ditagih atau terlewat.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#fffdf5] border border-[#0f172a] space-y-0.5">
                      <div className="flex items-center gap-1.5 font-black text-xs text-[#0f172a]">
                        <span className="px-1.5 py-0.2 rounded bg-[#fef3c7] text-[#d97706] font-mono text-[9px]">20+ Laporan</span>
                        <span>Laporan yang Dulu 3 Hari Sekarang Tersedia Setiap Saat</span>
                      </div>
                      <p className="text-[11px] text-[#475569]">
                        20+ laporan siap pakai: neraca, laba rugi, arus kas, omzet per produk. Export ke Excel atau PDF kapanpun dengan satu klik.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Modal */}
              <div className="pt-4 border-t-2 border-[#0f172a]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs font-mono font-bold text-[#64748b] text-center sm:text-left">
                  Sistem ERP siap pakai • Bebas coba 14 hari tanpa komitmen
                </div>
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowErpModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#fff9d4] hover:bg-[#faeed1] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer flex-1 sm:flex-none"
                  >
                    Tutup
                  </button>
                  <a
                    href="https://clarate.id/id/register?service_id=1"
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
export default FlagshipSlideCard;
