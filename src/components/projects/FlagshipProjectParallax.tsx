import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
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
  const zIndex = (index + 1) * 10;

  // 12 Katalog Web Klien Lengkap Beserta Deskripsi Asli
  const clientWebs = [
    {
      name: 'Maqdis Group',
      subtitle: 'Travel Haji & Umroh',
      type: 'Website Custom',
      desc: 'Platform resmi agensi travel Haji & Umroh dengan jadwal keberangkatan, rincian paket ibadah, dan panduan perjalanan lengkap.',
      categoryTag: 'Travel · Haji · Umroh',
      url: 'https://maqdisgroup.com/'
    },
    {
      name: 'AFC Life Science Indonesia',
      subtitle: 'Distributor Suplemen Kesehatan Jepang',
      type: 'Website Custom & E-Commerce',
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
      type: 'Showcase Store',
      desc: 'Website furniture dengan katalog produk, koleksi, dan portofolio ruang. Untuk bisnis yang menjual barang besar dan bernilai.',
      categoryTag: 'Toko · Furniture · Interior',
      url: 'https://clarate.id/templates/kayu-ruang'
    },
    {
      name: 'Garasi Prima',
      subtitle: 'Bengkel Mobil & Servis Berkala',
      type: 'Bengkel Resmi',
      desc: 'Website bengkel dengan daftar servis berharga, estimasi waktu, dan alur pengerjaan. Untuk usaha yang dipilih karena dipercaya.',
      categoryTag: 'Otomotif · Bengkel · Servis',
      url: 'https://clarate.id/templates/garasi-prima'
    },
    {
      name: 'Forte Gym',
      subtitle: 'Gym & Pusat Kebugaran',
      type: 'Membership Gym',
      desc: 'Website gym dengan area latihan, membership tanpa kontrak, dan profil pelatih. Untuk tempat yang dipilih karena alat dan keleluasaannya.',
      categoryTag: 'Kesehatan · Gym · Tanpa Kontrak',
      url: 'https://clarate.id/templates/forte-gym'
    },
    {
      name: 'Panen Langsung',
      subtitle: 'Agribisnis & Supplier Pangan',
      type: 'B2B Supplier',
      desc: 'Website supplier pangan B2B dengan daftar komoditas berharga per kilo, alur langganan, dan profil petani mitra.',
      categoryTag: 'Agrikultur · Supplier Pangan · B2B',
      url: 'https://clarate.id/templates/panen-langsung'
    },
    {
      name: 'Kucek Laundry',
      subtitle: 'Laundry Kiloan & Satuan',
      type: 'Jasa Laundry',
      desc: 'Website laundry dengan harga per kilo, lama pengerjaan, dan area jemput-antar. Untuk usaha yang dipilih karena praktis.',
      categoryTag: 'Jasa · Laundry · Jemput-Antar',
      url: 'https://clarate.id/templates/kucek-laundry'
    },
    {
      name: 'Sahabat Satwa',
      subtitle: 'Klinik Hewan & Pet Care',
      type: 'Klinik 24 Jam',
      desc: 'Website klinik hewan dengan tarif tindakan, jadwal praktik dokter, dan nomor darurat yang selalu terlihat.',
      categoryTag: 'Kesehatan · Klinik Hewan · Jadwal Dokter',
      url: 'https://clarate.id/templates/sahabat-satwa'
    }
  ];

  return (
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

            {/* CTA Button */}
            <div className="pt-1.5 sm:pt-2 border-t border-[#e2d3b3]">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{index === 0 ? 'Kunjungi Maqdis Group' : 'Konsultasi & Live Demo'}</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Showcase Box */}
          <div className="lg:col-span-7 p-3.5 sm:p-6 rounded-2xl sm:rounded-[32px] bg-[#fffdf5]/95 border-2 border-[#0f172a] shadow-[4px_4px_0px_#0f172a] sm:shadow-[6px_6px_0px_#0f172a] flex flex-col justify-between">
            {index === 0 ? (
              /* Khusus Slide 01: Daftar 12 Web Klien Lengkap Dengan Deskripsi & Badge */
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono font-black text-[#0f172a] border-b pb-1.5 border-[#0f172a]/15">
                  <span>KATALOG 12 WEBSITE &amp; DESKRIPSI</span>
                  <span className="text-[#0284c7] text-[10px] sm:text-xs">GULIR &amp; KLIK ↗</span>
                </div>

                {/* Kontainer Scroll Mandiri (Anti-Pindah Slide di HP) */}
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
                      {/* Header Item */}
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

                      {/* Deskripsi Asli Lengkap */}
                      <p className="text-[11px] sm:text-xs text-[#334155] font-medium leading-relaxed">
                        {cw.desc}
                      </p>

                      {/* Tag Kategori */}
                      <div className="pt-1 border-t border-[#0f172a]/10 flex items-center justify-between text-[9.5px] sm:text-[10px] font-mono font-bold text-[#64748b]">
                        <span>{cw.categoryTag}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              /* Untuk Slide 02 (E-Commerce), 03 (HRIS), 04 (CAD), 05 (ERP) */
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
  );
};

export const FlagshipProjectParallax = FlagshipSlideCard;
