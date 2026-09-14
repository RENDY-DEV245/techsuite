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

  // Daftar 12 web klien untuk Slide 01
  const clientWebs = [
    { name: 'Maqdis Group', tag: 'Travel Haji & Umroh', url: 'https://maqdisgroup.com/' },
    { name: 'UrbanWear', tag: 'Fashion Store', url: 'https://clarate.id/templates/urbanwear' },
    { name: 'Kopi Senja', tag: 'Coffee Shop & Cafe', url: 'https://clarate.id/templates/kopi-senja' },
    { name: 'Kayu Ruang', tag: 'Furniture & Interior', url: 'https://clarate.id/templates/kayu-ruang' },
    { name: 'Garasi Prima', tag: 'Bengkel & Servis', url: 'https://clarate.id/templates/garasi-prima' },
    { name: 'Forte Gym', tag: 'Pusat Kebugaran', url: 'https://clarate.id/templates/forte-gym' },
    { name: 'Panen Langsung', tag: 'Supplier Pangan B2B', url: 'https://clarate.id/templates/panen-langsung' },
    { name: 'Kucek Laundry', tag: 'Laundry Jemput-Antar', url: 'https://clarate.id/templates/kucek-laundry' },
    { name: 'Sahabat Satwa', tag: 'Klinik Hewan 24 Jam', url: 'https://clarate.id/templates/sahabat-satwa' }
  ];

  return (
    <motion.div
      style={{ y: yMotion, opacity: opacityMotion, zIndex }}
      className="absolute inset-0 w-full h-full flex flex-col justify-between overflow-hidden select-none bg-[#0284c7] shadow-[0_-8px_24px_rgba(15,23,42,0.35)]"
    >
      <AnimatedOceanSlideBackground depthLevel={depthLevel} />

      {/* Slide Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 sm:pt-24 px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a]">
            <span>0{index + 1} // {project.subtitle.toUpperCase()}</span>
          </div>
        </div>

        <div className="hidden sm:block text-xs font-mono font-black text-[#0f172a] px-3.5 py-1.5 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a]">
          PILAR {index + 1} / 5
        </div>
      </div>

      {/* Presentation Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-12 my-auto py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-stretch">
          
          {/* Main Info Card */}
          <div className="lg:col-span-6 p-5 sm:p-7 rounded-2xl sm:rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[5px_5px_0px_#0f172a] sm:shadow-[8px_8px_0px_#0f172a] flex flex-col justify-between space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight leading-[1.08]">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono font-bold text-[#0284c7] mt-1">
                {project.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium mt-3">
                {project.summary}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-[#e0f2fe] border-2 border-[#0f172a] text-center shadow-[2px_2px_0px_#0f172a]"
                >
                  <div className="text-[8.5px] sm:text-[9.5px] font-mono font-bold uppercase text-[#0369a1] leading-tight">
                    {m.label}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#0f172a] mt-0.5 leading-tight">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 border-t border-[#e2d3b3]">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{index === 0 ? 'Kunjungi Maqdis Group' : 'Konsultasi & Live Demo'}</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Showcase Box */}
          <div className="lg:col-span-6 p-4 sm:p-6 rounded-2xl sm:rounded-[32px] bg-[#fffdf5]/95 border-2 border-[#0f172a] shadow-[5px_5px_0px_#0f172a] flex flex-col justify-between">
            {index === 0 ? (
              /* Khusus Slide 01: Daftar Web Klien Interaktif */
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono font-black text-[#0f172a] border-b pb-2 border-[#0f172a]/15">
                  <span>KATALOG 12 WEBSITE KLIEN</span>
                  <span className="text-[#0284c7]">KLIK UNTUK BUKA ↗</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[280px] sm:max-h-[320px] overflow-y-auto pr-1">
                  {clientWebs.map((cw, i) => (
                    <a
                      key={i}
                      href={cw.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#fff9d4] hover:bg-[#fde047] border border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-black text-[#0f172a] group-hover:text-[#0284c7] transition-colors">
                          {cw.name}
                        </div>
                        <div className="text-[10px] font-mono font-bold text-[#64748b]">
                          {cw.tag}
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#0f172a] shrink-0 opacity-70 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              /* Untuk Slide 02 (E-Commerce), 03 (HRIS), 04 (CAD), 05 (ERP) */
              <div className="h-full flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#0284c7] block">
                    FITUR &amp; HIGHLIGHT SISTEM:
                  </span>
                  <div className="space-y-2">
                    {project.highlights?.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-[#fff9d4] border border-[#0f172a]/30 text-xs font-bold text-[#0f172a]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#0f172a]/15 flex flex-wrap gap-1.5">
                  {project.stack.map((st) => (
                    <span
                      key={st}
                      className="px-2 py-0.5 rounded-lg bg-[#e0f2fe] text-[10px] font-mono font-bold text-[#0284c7] border border-[#0284c7]/40"
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

      <div className="relative z-10 h-4 w-full" />
    </motion.div>
  );
};

export const FlagshipProjectParallax = FlagshipSlideCard;
