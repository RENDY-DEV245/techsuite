import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Code2, Database, Box } from 'lucide-react';

interface ArchitectureStageProps {
  isFlooded: boolean;
}

export const ArchitectureStage: React.FC<ArchitectureStageProps> = ({ isFlooded }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'web',
      icon: <Code2 className="w-5 h-5 text-[#0284c7]" />,
      title: 'Full Stack Web Engineering',
      subtitle: 'Modern Monolith & Reactive Frontend Ecosystem',
      desc: 'Membangun aplikasi web end-to-end dengan backend Laravel, Node.js, atau Go, dipadukan dengan frontend modern React, Next.js, dan TypeScript. Fokus pada arsitektur kode bersih, optimasi query SQL, integrasi RESTful API, dan pengalaman antarmuka yang responsif.',
      tags: ['Laravel', 'Go', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'MySQL', 'Tailwind CSS']
    },
    {
      id: 'mobile',
      icon: <Cpu className="w-5 h-5 text-[#0284c7]" />,
      title: 'Mobile App Engineering',
      subtitle: 'Cross-Platform Android & iOS Applications',
      desc: 'Mengembangkan aplikasi mobile lintas platform menggunakan Flutter/Dart dan React Native. Mengelola state management reaktif yang stabil, offline-first sync, push notifications, dan integrasi backend real-time untuk performa mulus 60 FPS.',
      tags: ['Flutter', 'Dart SDK', 'React Native', 'State Management', 'REST APIs', 'Cloud Firestore', 'FCM']
    },
    {
      id: 'erp',
      icon: <Database className="w-5 h-5 text-[#0284c7]" />,
      title: 'Custom ERP & Business Ecosystem',
      subtitle: 'Centralized Enterprise Resource Planning',
      desc: 'Merancang dan mengintegrasikan sistem ERP kustom dari nol yang menghubungkan modul Keuangan (GL & COA), Penjualan (CRM & POS), Manajemen Gudang (Stok Multi-Gudang), Purchasing, hingga Role-Based Access Control (RBAC) berkeamanan ketat.',
      tags: ['ERP Architecture', 'General Ledger', 'Inventory Engine', 'Sales & POS', 'RBAC Security', 'PostgreSQL', 'Automated Workflows']
    },
    {
      id: 'cad',
      icon: <Box className="w-5 h-5 text-[#0284c7]" />,
      title: 'CAD Modeling & Engineering Systems',
      subtitle: '2D/3D Design & Technical Drafting',
      desc: 'Perancangan gambar teknik 2D dan permodelan 3D mekanikal/arsitektur dengan presisi tinggi menggunakan software CAD industri. Terbiasa memadukan otomasi data desain dengan alur kerja manufaktur, visualisasi aset, dan spesifikasi fabrikasi terukur.',
      tags: ['AutoCAD', 'SolidWorks', '3D Modeling', 'Technical Drafting', 'Geometric Dimensioning', 'Parametric Design', 'Asset Rendering']
    },
    {
      id: 'linux',
      icon: <Terminal className="w-5 h-5 text-[#8c6239]" />,
      title: 'Linux & DevOps Workflows',
      subtitle: 'NixOS Daily Driver & Server Management',
      desc: 'Menggunakan NixOS sebagai sistem operasi harian dengan konfigurasi deklaratif Flakes. Terbiasa dengan manajemen server Linux (Debian/Arch), containerisasi Docker, otomatisasi skrip Bash, deployment CI/CD, dan workflow Git branch bertaraf tim profesional.',
      tags: ['NixOS Flakes', 'Arch Linux', 'Debian Server', 'Docker', 'CI/CD Pipelines', 'Git Branching', 'Bash CLI']
    }
  ];

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;

  return (
    <motion.div
      animate={
        isFlooded
          ? {
            rotate: isMobile ? 3 : 15,
            x: isMobile ? 0 : 28,
            y: isMobile ? 16 : 50,
            scale: 0.98,
            transition: { type: 'spring', stiffness: 150, damping: 16 }
          }
          : {
            rotate: 0,
            x: 0,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 260, damping: 18 }
          }
      }
      className="w-full flex flex-col gap-6"
    >
      {/* 5 Selector Tabs (Responsive Grid) */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] shadow-sm overflow-x-auto">
        {pillars.map((pillar, idx) => (
          <motion.button
            key={pillar.id}
            type="button"
            onClick={() => setActivePillar(idx)}
            animate={
              isFlooded
                ? {
                  rotate: idx % 2 === 0 ? -18 : 20,
                  y: idx % 2 === 0 ? 14 : -16,
                  x: idx % 2 === 0 ? -8 : 8
                }
                : { rotate: 0, y: 0, x: 0 }
            }
            className={`flex flex-col items-center justify-center py-2.5 px-1 sm:p-3 rounded-xl text-center transition-all cursor-pointer ${activePillar === idx
              ? 'bg-[#0284c7] text-white shadow-md'
              : 'hover:bg-[#fff9d4] text-[#475569] hover:text-[#0f172a]'
              }`}
          >
            <span
              className={`text-[10px] sm:text-xs font-mono font-bold block ${activePillar === idx ? 'text-white' : 'text-[#8c6239]'
                }`}
            >
              0{idx + 1}
            </span>
            <span className="text-[11px] sm:text-xs font-bold leading-tight mt-0.5 truncate w-full">
              {pillar.id.toUpperCase()}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Active Pillar Card Display */}
      <div className="relative min-h-[320px] sm:min-h-[320px] rounded-[32px] bg-[#fffdf5] border border-[#e8dbc0] shadow-xl shadow-[#8c6239]/6 overflow-hidden">
        <motion.div
          key={activePillar}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="p-6 sm:p-9 h-full flex flex-col justify-between space-y-5"
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-[#fff9d4] border border-[#e2d3b3] shadow-sm shrink-0">
                  {pillars[activePillar].icon}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#8c6239]">
                    0{activePillar + 1} // {pillars[activePillar].subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] mt-0.5">
                    {pillars[activePillar].title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-[#475569] leading-relaxed font-medium">
              {pillars[activePillar].desc}
            </p>
          </div>

          <div className="pt-4 border-t border-[#e8dbc0]">
            <span className="text-xs font-mono font-bold text-[#8c6239] block mb-2.5">
              TECH STACK & TOOLS:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {pillars[activePillar].tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-[#fff9d4] text-[11px] sm:text-xs font-mono font-semibold text-[#0f172a] border border-[#e2d3b3] shadow-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <motion.div
          animate={
            isFlooded
              ? { rotate: -24, x: -38, y: 70, scale: 0.94 }
              : { rotate: 0, x: 0, y: 0, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 160, damping: 15 }}
          className="p-4 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] shadow-sm"
        >
          <span className="text-xs font-bold text-[#0f172a] block">
            Clean Architecture & ERP
          </span>
          <p className="text-[11px] text-[#64748b] mt-1 leading-relaxed">
            Struktur kode terorganisir dengan pemisahan dependensi, modularitas tinggi, dan integrasi database terpusat.
          </p>
        </motion.div>

        <motion.div
          animate={
            isFlooded
              ? { rotate: 32, x: 18, y: 80, scale: 0.93 }
              : { rotate: 0, x: 0, y: 0, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 160, damping: 15 }}
          className="p-4 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] shadow-sm"
        >
          <span className="text-xs font-bold text-[#0f172a] block">
            CAD & High-Precision Design
          </span>
          <p className="text-[11px] text-[#64748b] mt-1 leading-relaxed">
            Drafting teknis dan pemodelan geometrik 2D/3D untuk kebutuhan rekayasa presisi tinggi.
          </p>
        </motion.div>

        <motion.div
          animate={
            isFlooded
              ? { rotate: -18, x: 48, y: -20, scale: 0.95 }
              : { rotate: 0, x: 0, y: 0, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 160, damping: 15 }}
          className="p-4 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] shadow-sm"
        >
          <span className="text-xs font-bold text-[#0f172a] block">
            Linux & DevOps Workflows
          </span>
          <p className="text-[11px] text-[#64748b] mt-1 leading-relaxed">
            Konfigurasi deklaratif NixOS, containerisasi Docker, dan efisiensi terminal Unix.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
