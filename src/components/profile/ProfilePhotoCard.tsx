import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ShieldCheck,
  ZoomIn,
  X,
  Sparkles
} from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { useCardTilt } from '../../hooks/useCardTilt';

interface ProfilePhotoCardProps {
  isFlooded: boolean;
}

interface ProofItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  imageUrl: string;
}

export const ProfilePhotoCard: React.FC<ProfilePhotoCardProps> = ({ isFlooded }) => {
  const { tiltProps } = useCardTilt(6);
  const [activePreviewImage, setActivePreviewImage] = useState<ProofItem | null>(null);

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;

  // 3 Bukti Valid Transaksi & Kerjasama
  const proofList: ProofItem[] = [
    {
      id: 'mou',
      title: 'Kesepakatan Kerjasama',
      subtitle: 'Surat Kontrak & SPK',
      badge: 'OFFICIAL MOU',
      imageUrl: 'https://i.ibb.co.com/4wB0Cg5v/IMG-20260913-WA0002.jpg'
    },
    {
      id: 'dp90',
      title: 'Bukti Transfer DP 90%',
      subtitle: 'Pembayaran Uang Muka',
      badge: 'DP 90% VERIFIED',
      imageUrl: 'https://i.ibb.co.com/KcmSz54M/IMG-20260913-WA0003.jpg'
    },
    {
      id: 'pelunasan10',
      title: 'Bukti Pelunasan 10%',
      subtitle: 'Serah Terima & Selesai',
      badge: '100% COMPLETED',
      imageUrl: 'https://i.ibb.co.com/My7pC0TR/IMG-20260913-WA0004.jpg'
    }
  ];

  // Daftar Klien Portofolio + Klien CAD
  const clientsRow1 = [
    'IAI Jakarta (Architect Association)',
    'PT. Twintech Precision Cikarang',
    'Maqdis Group (Travel Haji & Umroh)',
    'PT. Boccard Indonesia',
    'AFC Life Science (Ralie Care)',
    'Jaya Giri Aluminium Tangerang',
    'UrbanWear Fashion Store'
  ];

  const clientsRow2 = [
    'Shakil Akhtar (India - Personal CAD)',
    'Clarate ERP Enterprise Ecosystem',
    'Nafita Store (Beauty Care)',
    'Kayu Ruang (Furniture & Interior)',
    'Garasi Prima Otomotif',
    'Kucek Laundry Jemput-Antar',
    'Sahabat Satwa 24 Jam',
    'Forte Gym Center'
  ];

  return (
    <>
      <motion.div
        animate={
          isFlooded
            ? {
                rotate: isMobile ? -5 : -24,
                x: isMobile ? 0 : -32,
                y: isMobile ? 20 : 70,
                scale: isMobile ? 0.98 : 0.94,
                transition: { type: 'spring', stiffness: 160, damping: 16 }
              }
            : {
                rotate: 0,
                x: 0,
                y: 0,
                scale: 1,
                transition: { type: 'spring', stiffness: 260, damping: 18 }
              }
        }
        className="relative w-full flex flex-col items-center lg:items-start gap-4"
      >
        {/* Kartu Foto Profil */}
        <div
          {...tiltProps}
          className="relative w-full max-w-sm rounded-[32px] p-3.5 bg-[#fffdf5] border border-[#e8dbc0] shadow-2xl shadow-[#8c6239]/8 group cursor-pointer"
        >
          <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden bg-[#faeed1] border border-[#e2d3b3] flex items-center justify-center p-1">
            <img
              src={profileData.avatarUrl || 'https://i.ibb.co.com/tMN6mPt9/IMG-20260914-140952.png'}
              alt={profileData.name}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              className="w-full h-full object-contain object-center rounded-[20px] transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://i.ibb.co.com/tMN6mPt9/IMG-20260914-140952.png';
              }}
            />
          </div>

          <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono text-[#8c6239]">
            <span>FOTO PROFIL</span>
            <span>ID // RENDY RAMDANI</span>
          </div>
        </div>

        {/* Lokasi & Status */}
        <motion.div
          animate={isFlooded ? { rotate: 12, x: 24, y: 30 } : { rotate: 0, x: 0, y: 0 }}
          className="w-full max-w-sm p-4 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] flex items-center justify-between text-xs font-mono text-[#0f172a] shadow-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#8c6239]" />
            <span>Indonesia</span>
          </div>
          <span className="text-[#0284c7] font-bold">Linux Enthusiasts</span>
        </motion.div>

        {/* ========================================================
            SESI SOCIAL PROOF / KESEPAKATAN KERJASAMA & BUKTI TF
           ======================================================== */}
        <motion.div
          animate={isFlooded ? { rotate: -8, x: -14, y: 25 } : { rotate: 0, x: 0, y: 0 }}
          className="w-full max-w-sm p-3.5 sm:p-4 rounded-3xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[4px_4px_0px_#0f172a] space-y-3"
        >
          {/* Header Social Proof */}
          <div className="flex items-center justify-between border-b border-[#0f172a]/10 pb-2">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#15803d]" />
              <span className="text-xs font-mono font-black text-[#0f172a] uppercase tracking-wide">
                Social Proof &amp; Verified Deals
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#dcfce7] text-[#15803d] border border-[#16a34a]">
              VERIFIED
            </span>
          </div>

          <p className="text-[11px] text-[#475569] font-medium leading-relaxed">
            Dokumentasi resmi kesepakatan kontrak kerja &amp; transparansi pelunasan transaksi proyek.
          </p>

          {/* 3 Kartu Bukti (Klik untuk Preview/Zoom) */}
          <div className="grid grid-cols-3 gap-2">
            {proofList.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePreviewImage(item)}
                className="group/proof relative flex flex-col justify-between p-2 rounded-xl bg-[#fff9d4] hover:bg-[#fde047] border border-[#0f172a] shadow-[2px_2px_0px_#0f172a] cursor-pointer transition-all hover:-translate-y-0.5 select-none"
                title="Klik untuk melihat bukti foto"
              >
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#0f172a] relative border border-[#0f172a]/20 mb-1.5">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover/proof:scale-110 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-[9px] font-mono font-black text-[#0f172a] truncate leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[8px] font-mono text-[#0284c7] font-bold mt-0.5 truncate">
                    {item.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ========================================================
              ANIMASI RUNNING TEXT KLIEN (2 ARAH)
             ======================================================== */}
          <div className="pt-2 border-t border-[#0f172a]/10 space-y-1.5 overflow-hidden">
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#8c6239] uppercase">
              <Sparkles className="w-3 h-3 text-[#f59e0b]" />
              <span>Daftar Klien &amp; Instansi:</span>
            </div>

            {/* Baris 1: KANAN KE KIRI */}
            <div className="relative overflow-hidden w-full py-0.5 select-none flex">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                className="flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                {[...clientsRow1, ...clientsRow1].map((client, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#fffdf5] text-[10px] font-mono font-bold text-[#0f172a] border border-[#0f172a] shadow-[1px_1px_0px_#0f172a]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                    {client}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Baris 2: KIRI KE KANAN */}
            <div className="relative overflow-hidden w-full py-0.5 select-none flex">
              <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                {[...clientsRow2, ...clientsRow2].map((client, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#fffdf5] text-[10px] font-mono font-bold text-[#0f172a] border border-[#0f172a] shadow-[1px_1px_0px_#0f172a]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803d]" />
                    {client}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ========================================================
          MODAL LIGHTBOX PREVIEW BUKTI FOTO (ZOOM DIALOG)
         ======================================================== */}
      <AnimatePresence>
        {activePreviewImage && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePreviewImage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-lg bg-[#fffdf5] rounded-3xl border-3 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] p-4 sm:p-6 space-y-4 max-h-[90vh] flex flex-col justify-between overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-2 border-b-2 border-[#0f172a]/15">
                <div>
                  <div className="text-[10px] font-mono font-black text-[#0284c7] uppercase">
                    {activePreviewImage.badge}
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-[#0f172a] leading-tight">
                    {activePreviewImage.title}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => setActivePreviewImage(null)}
                  className="p-1.5 rounded-xl bg-[#fff9d4] hover:bg-[#fee2e2] border-2 border-[#0f172a] text-[#0f172a] hover:text-[#dc2626] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image Preview */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#071b2f] border-2 border-[#0f172a] flex items-center justify-center p-1">
                <img
                  src={activePreviewImage.imageUrl}
                  alt={activePreviewImage.title}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between pt-1 text-xs font-mono text-[#475569]">
                <span>{activePreviewImage.subtitle}</span>
                <button
                  type="button"
                  onClick={() => setActivePreviewImage(null)}
                  className="px-4 py-1.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-bold border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
