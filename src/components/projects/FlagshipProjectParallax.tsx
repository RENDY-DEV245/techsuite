import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { ProjectPreviewPlaceholder } from './ProjectPreviewPlaceholder';
import { AnimatedOceanSlideBackground } from './AnimatedOceanSlideBackground';

interface FlagshipSlideCardProps {
  project: Project;
  index: number;
  yMotion?: any;
  opacityMotion?: any;
  depthLevel?: 1 | 2 | 3;
  onSelectProject?: (project: Project) => void;
}

export const FlagshipSlideCard: React.FC<FlagshipSlideCardProps> = ({
  project,
  index,
  yMotion = '0%',
  opacityMotion = 1,
  depthLevel = (index + 1) as 1 | 2 | 3
}) => {
  const zIndex = index === 0 ? 10 : index === 1 ? 20 : 30;

  return (
    <motion.div
      style={{ y: yMotion, opacity: opacityMotion, zIndex }}
      className="absolute inset-0 w-full h-full flex flex-col justify-between overflow-hidden select-none bg-[#0284c7] shadow-[0_-8px_24px_rgba(15,23,42,0.35)]"
    >
      {/* Background Ocean */}
      <AnimatedOceanSlideBackground depthLevel={depthLevel} />

      {/* Slide Metadata */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 sm:pt-24 px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a]">
            <span>0{index + 1} // {project.subtitle.toUpperCase()}</span>
          </div>
        </div>

        <div className="hidden sm:block text-xs font-mono font-black text-[#0f172a] px-3.5 py-1.5 rounded-xl bg-[#fffdf5] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a]">
          KLIEN &amp; PROYEK {index + 1} / 3
        </div>
      </div>

      {/* Project Presentation Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-12 my-auto py-2 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
          
          {/* Details Card */}
          <div className="lg:col-span-6 p-5 sm:p-8 rounded-2xl sm:rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[5px_5px_0px_#0f172a] sm:shadow-[8px_8px_0px_#0f172a] space-y-4">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-[1.08]">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono font-bold text-[#0284c7]">
                {project.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium">
              {project.summary}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-2 sm:p-3 rounded-xl bg-[#e0f2fe] border-2 border-[#0f172a] text-center shadow-[2px_2px_0px_#0f172a]"
                >
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[#0369a1] leading-tight">
                    {m.label}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#0f172a] mt-0.5 leading-tight">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button: Hanya Kunjungi Web */}
            <div className="pt-2 flex items-center gap-3 border-t border-[#e2d3b3]">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] font-mono font-black text-xs sm:text-sm border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Kunjungi Web</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Visual Frame */}
          <div className="lg:col-span-6 relative">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ProjectPreviewPlaceholder
                project={project}
                isMobileFrame={false}
                className="aspect-[16/10] w-full shadow-[8px_8px_0px_#0f172a] transition-transform hover:scale-[1.01]"
              />
            </a>
          </div>

        </div>
      </div>

      <div className="relative z-10 h-6 w-full" />
    </motion.div>
  );
};

export const FlagshipProjectParallax = FlagshipSlideCard;
