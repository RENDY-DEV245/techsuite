import React, { useState } from 'react';
import { profileData } from '../../data/portfolioData';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  withText = false
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeMap = {
    sm: { box: 'w-8 h-8', text: 'text-xs', font: 'text-xs' },
    md: { box: 'w-10 h-10', text: 'text-sm', font: 'text-sm' },
    lg: { box: 'w-14 h-14', text: 'text-base', font: 'text-lg' },
    xl: { box: 'w-24 h-24', text: 'text-lg', font: 'text-2xl' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center transition-transform group-hover:scale-105 select-none shrink-0">
        {!hasError ? (
          <img
            src={profileData.avatarUrl}
            alt="RENDY Logo"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            onError={() => setHasError(true)}
            className={`${currentSize.box} rounded-full object-cover border-2 border-white/60 bg-[#0f172a] shadow-md`}
            loading="eager"
          />
        ) : (
          /* Fallback Logo Keren jika hosting gambar bermasalah */
          <div className={`${currentSize.box} rounded-full bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] border-2 border-white/80 flex items-center justify-center shadow-md`}>
            <span className={`font-black text-white font-mono ${currentSize.font}`}>
              R
            </span>
          </div>
        )}
      </div>

      {withText && (
        <div className="flex flex-col text-left">
          <span className={`font-bold text-white tracking-wide leading-tight drop-shadow-sm ${currentSize.text}`}>
            RENDY
          </span>
          <span className="text-[11px] text-[#fff9d4] font-mono font-medium flex items-center gap-1 drop-shadow-xs">
            &gt;_ Full-Stack &amp; Mobile
          </span>
        </div>
      )}
    </div>
  );
};
