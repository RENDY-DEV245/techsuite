import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, Download, ExternalLink, ChevronDown, Globe, Smartphone, Users, Box, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { OceanHeroCanvas } from './OceanHeroCanvas';
import type { OceanHeroHandle } from './OceanHeroCanvas';
import { HeroPhysicsStage } from './HeroPhysicsStage';
import type { HeroPhysicsStageHandle } from './HeroPhysicsStage';
import { SwimmingDuck } from './SwimmingDuck';
import type { DuckExpression } from './SwimmingDuck';
import { FlyingSeagull } from './FlyingSeagull';
import { BeachCrab } from './BeachCrab';
import type { BeachCrabHandle } from './BeachCrab';
import { BeachDecorations } from './BeachDecorations';
import { TactileButton } from '../ui/TactileButton';

export const HeroSection: React.FC = () => {
  const oceanRef = useRef<OceanHeroHandle | null>(null);
  const stageRef = useRef<HeroPhysicsStageHandle | null>(null);
  const crabRef = useRef<BeachCrabHandle | null>(null);
  const [duckExpression, setDuckExpression] = useState<DuckExpression>('normal');

  const collisionCooldownRef = useRef<boolean>(false);

  // State untuk menu pilihan proposal
  const [showProposalMenu, setShowProposalMenu] = useState<boolean>(false);
  const proposalDropdownRef = useRef<HTMLDivElement | null>(null);

  // Deteksi klik di luar menu untuk menutup popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (proposalDropdownRef.current && !proposalDropdownRef.current.contains(event.target as Node)) {
        setShowProposalMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Data 5 Pilihan Proposal dengan Direct Download Link
  const proposalList = [
    {
      label: 'Proposal Web Development',
      url: 'https://drive.google.com/uc?export=download&id=10ou8F8gUu363hdm7gq0WWuKb9M29ls-n',
      icon: Globe
    },
    {
      label: 'Proposal APK / Mobile App',
      url: 'https://drive.google.com/uc?export=download&id=1urmpbgH0kmDEI4EbiyEaQiP0U8ojFOX7',
      icon: Smartphone
    },
    {
      label: 'Proposal HRIS System',
      url: 'https://drive.google.com/uc?export=download&id=10qtP0XZY_UEiMIH2Bg55LJ3sjkf03VZb',
      icon: Users
    },
    {
      label: 'Proposal CAD & 3D Design',
      url: 'https://drive.google.com/uc?export=download&id=1MY1qHHpT5BBKSN6Nv8a083PhXZQx8iWg',
      icon: Box
    },
    {
      label: 'Proposal ERP System',
      url: 'https://drive.google.com/uc?export=download&id=1YdiiYZFK8wL2XCjLQzUmB1x4BppcD3iP',
      icon: Database
    },
  ];

  // Fungsi trigger download langsung tanpa menutup/mengalihkan web
  const handleDirectDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowProposalMenu(false);
  };

  const handleSplash = (clientX: number, clientY: number, intensity: number) => {
    if (oceanRef.current) {
      oceanRef.current.triggerSplash(clientX, clientY, intensity);
    }
  };

  const handleRipple = (clientX: number, clientY: number, size?: number) => {
    if (oceanRef.current) {
      oceanRef.current.triggerRipple(clientX, clientY, size);
    }
  };

  const checkDuckCrabCollision = (duckRect: DOMRect) => {
    if (collisionCooldownRef.current || !crabRef.current) return;
    const crabRect = crabRef.current.getCrabRect();
    if (!crabRect) return;

    const duckCenterX = duckRect.left + duckRect.width / 2;
    const duckCenterY = duckRect.top + duckRect.height / 2;
    const crabCenterX = crabRect.left + crabRect.width / 2;
    const crabCenterY = crabRect.top + crabRect.height / 2;

    const dx = Math.abs(duckCenterX - crabCenterX);
    const dy = Math.abs(duckCenterY - crabCenterY);

    if (dx < 60 && dy < 48) {
      collisionCooldownRef.current = true;
      crabRef.current.triggerStun(duckCenterX < crabCenterX ? 'right' : 'left');
      setDuckExpression('impact');

      setTimeout(() => {
        setDuckExpression('normal');
      }, 2000);

      setTimeout(() => {
        collisionCooldownRef.current = false;
      }, 3200);
    }
  };

  const handleDuckDrop = (clientX: number, clientY: number, velocity: number, duckRect?: DOMRect) => {
    if (duckRect) {
      checkDuckCrabCollision(duckRect);
    }

    if (stageRef.current) {
      stageRef.current.handleDuckDrop(clientX, clientY, velocity);
    } else {
      handleSplash(clientX, clientY, velocity);
    }
  };

  const handleDuckSwim = (duckX: number, duckY: number) => {
    if (stageRef.current) {
      stageRef.current.handleDuckSwim(duckX, duckY);
    } else {
      handleRipple(duckX, duckY, 45);
    }
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between pt-16 pb-10 overflow-hidden select-none">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <OceanHeroCanvas ref={oceanRef} />
      </div>

      <FlyingSeagull />

      <SwimmingDuck
        expression={duckExpression}
        onDuckDrop={handleDuckDrop}
        onDuckSwim={handleDuckSwim}
        onDuckSplash={(x, y) => handleSplash(x, y, 1.3)}
        onDuckWaddle={checkDuckCrabCollision}
      />

      <BeachCrab ref={crabRef} />

      <BeachDecorations />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col items-center justify-center -translate-y-16 sm:-translate-y-24">
        <div className="w-full flex flex-col items-center text-center">
          <HeroPhysicsStage
            ref={stageRef}
            onSplash={handleSplash}
            onRipple={handleRipple}
            onDuckExpressionChange={setDuckExpression}
          />

          <p className="mt-3 sm:mt-4 max-w-xl text-center text-xs sm:text-base text-[#f8fafc] font-medium leading-relaxed drop-shadow-md px-2">
            Full Stack Software Engineer. Merancang dan membangun website, aplikasi, CAD hingga sistem ERP dari nol untuk startup, dan enterprise.
          </p>

          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 px-2">
            <TactileButton
              variant="primary"
              onClick={handleScrollToProjects}
              icon={<ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              Lihat Proyek
            </TactileButton>

            {/* Tombol Pilihan Download Proposal */}
            <div className="relative inline-block" ref={proposalDropdownRef}>
              <button
                type="button"
                onClick={() => setShowProposalMenu((prev) => !prev)}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0d2844] hover:bg-[#123559] text-[#f8fafc] border border-[#224c75] hover:border-[#dfcca8]/60 font-medium text-xs sm:text-sm transition-all select-none cursor-pointer hover:-translate-y-0.5 shadow-md"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#38bdf8]" />
                <span>Download Proposal</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#38bdf8] transition-transform duration-200 ${showProposalMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Menu Pilihan Popup */}
              <AnimatePresence>
                {showProposalMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 w-64 p-1.5 rounded-2xl bg-[#071b2f] border-2 border-[#224c75] shadow-2xl z-50 flex flex-col gap-1 backdrop-blur-xl"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-[#94a3b8] uppercase tracking-wider border-b border-[#224c75]/50">
                      Pilih Jenis Proposal:
                    </div>
                    {proposalList.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleDirectDownload(item.url)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#f8fafc] hover:bg-[#123559] hover:text-[#38bdf8] transition-colors group/item text-left cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-[#0d2844] border border-[#224c75] group-hover/item:border-[#38bdf8]">
                              <Icon className="w-3.5 h-3.5 text-[#38bdf8]" />
                            </div>
                            <span>{item.label}</span>
                          </div>
                          <Download className="w-3.5 h-3.5 text-[#64748b] group-hover/item:text-[#38bdf8] group-hover/item:translate-y-0.5 transition-transform" />
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0d2844] hover:bg-[#123559] text-[#f8fafc] border border-[#224c75] hover:border-[#dfcca8]/60 font-medium text-xs sm:text-sm transition-all select-none cursor-pointer hover:-translate-y-0.5"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#dfcca8]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
