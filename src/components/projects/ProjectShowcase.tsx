import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import { FlagshipSlideCard } from './FlagshipProjectParallax';

export const ProjectShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 5 Slide Cards
  const pWeb = projectsData[0];
  const pEcommerce = projectsData[1];
  const pHris = projectsData[2];
  const pCad = projectsData[3];
  const pErp = projectsData[4];

  // Scroll Progress pinning 5 slides
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    mass: 0.3,
    restDelta: 0.0005
  });

  // 5 Layer Curtain Wipes
  const ySlide2 = useTransform(smoothProgress, [0.18, 0.28], ['100%', '0%'], { clamp: true });
  const ySlide3 = useTransform(smoothProgress, [0.38, 0.48], ['100%', '0%'], { clamp: true });
  const ySlide4 = useTransform(smoothProgress, [0.58, 0.68], ['100%', '0%'], { clamp: true });
  const ySlide5 = useTransform(smoothProgress, [0.78, 0.88], ['100%', '0%'], { clamp: true });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative h-[650vh] bg-[#fff9d4] select-none"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* 5 Slide Progress Indicator */}
        <div className="absolute top-[76px] sm:top-24 right-4 sm:right-12 z-50 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] sm:shadow-[4px_4px_0px_#0f172a]">
          {[0, 1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className="h-2 sm:h-2.5 rounded-full bg-[#faeed1] border border-[#0f172a] overflow-hidden w-4 sm:w-8"
            >
              <motion.div
                className="h-full bg-[#0284c7]"
                style={{
                  scaleX: useTransform(
                    smoothProgress,
                    [idx * 0.2, (idx + 1) * 0.2],
                    [0, 1],
                    { clamp: true }
                  )
                }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          ))}
        </div>

        {/* SLIDE 01: WEBSITE KUSTOM (12 Klien) */}
        {pWeb && (
          <FlagshipSlideCard
            project={pWeb}
            index={0}
            yMotion="0%"
            depthLevel={1}
          />
        )}

        {/* SLIDE 02: E-COMMERCE & STORE */}
        {pEcommerce && (
          <FlagshipSlideCard
            project={pEcommerce}
            index={1}
            yMotion={ySlide2}
            depthLevel={2}
          />
        )}

        {/* SLIDE 03: HRIS WORKFORCE */}
        {pHris && (
          <FlagshipSlideCard
            project={pHris}
            index={2}
            yMotion={ySlide3}
            depthLevel={3}
          />
        )}

        {/* SLIDE 04: CAD MODELING */}
        {pCad && (
          <FlagshipSlideCard
            project={pCad}
            index={3}
            yMotion={ySlide4}
            depthLevel={3}
          />
        )}

        {/* SLIDE 05: ERP ENTERPRISE */}
        {pErp && (
          <FlagshipSlideCard
            project={pErp}
            index={4}
            yMotion={ySlide5}
            depthLevel={4}
          />
        )}
      </div>
    </section>
  );
};
