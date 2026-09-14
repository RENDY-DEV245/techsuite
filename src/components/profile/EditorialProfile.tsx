import React, { useState, useRef, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FloodWaveOverlay } from './FloodWaveOverlay';
import { ProfileDuneBackground } from './ProfileDuneBackground';
import { ProfilePhotoCard } from './ProfilePhotoCard';
import { ArchitectureStage } from './ArchitectureStage';
import { FloodActionButton } from './FloodActionButton';
import { RebuildConstructionOverlay } from './RebuildConstructionOverlay';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05
    }
  }
};

const headerRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 18
    }
  }
};

export const EditorialProfile: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [floodState, setFloodState] = useState<'pristine' | 'flooding' | 'flooded' | 'rebuilding'>('pristine');
  const [rebuildProgress, setRebuildProgress] = useState<number>(0);

  const handleTriggerFlood = () => {
    if (floodState !== 'pristine') return;
    setFloodState('flooding');
    setTimeout(() => {
      setFloodState('flooded');
    }, 1000);
  };

  const handleTriggerRebuild = () => {
    if (floodState !== 'flooded') return;
    setFloodState('rebuilding');
  };

  useEffect(() => {
    if (floodState !== 'rebuilding') return;

    let currentVal = 0;
    setRebuildProgress(0);

    const stepMs = 40;
    const totalDurationMs = 2000;
    const stepIncrement = 100 / (totalDurationMs / stepMs);

    const interval = setInterval(() => {
      currentVal += stepIncrement;
      if (currentVal >= 100) {
        clearInterval(interval);
        setRebuildProgress(100);
        setTimeout(() => {
          setFloodState('pristine');
          setRebuildProgress(0);
        }, 300);
      } else {
        setRebuildProgress(Math.floor(currentVal));
      }
    }, stepMs);

    return () => clearInterval(interval);
  }, [floodState]);

  const isFlooded = floodState === 'flooded' || floodState === 'flooding';

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 bg-[#fff9d4] overflow-hidden select-none"
    >
      <RebuildConstructionOverlay
        isRebuilding={floodState === 'rebuilding'}
        progress={rebuildProgress}
      />

      <FloodWaveOverlay isFlooding={floodState === 'flooding'} />

      <ProfileDuneBackground isFlooded={isFlooded} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12"
      >
        {/* Header Profil */}
        <motion.div
          variants={headerRevealVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b-2 border-[#e2d3b3]"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#8c6239] block mb-2">
              PROFIL &amp; SOLUSI
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.08]">
              Techsuite
            </h2>
            <div className="mt-2 text-xs sm:text-sm font-mono font-bold text-[#0284c7] tracking-wider leading-relaxed">
              WEB • MOBILE • ERP • HRIS • E-COMMERCE • CAD
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FloodActionButton
              floodState={floodState}
              rebuildProgress={rebuildProgress}
              onTriggerFlood={handleTriggerFlood}
              onTriggerRebuild={handleTriggerRebuild}
            />

            <p className="max-w-xs text-xs text-[#475569] leading-relaxed font-medium">
              Menyediakan solusi teknologi end-to-end untuk membantu bisnis membangun sistem digital yang terintegrasi, efisien, dan sesuai kebutuhan operasional.
            </p>
          </div>
        </motion.div>

        {/* 2 Kolom Seimbang di Layar Desktop */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 relative z-10 w-full">
            <ProfilePhotoCard isFlooded={isFlooded} />
          </div>

          <div className="lg:col-span-7 relative z-10 w-full">
            <ArchitectureStage isFlooded={isFlooded} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
