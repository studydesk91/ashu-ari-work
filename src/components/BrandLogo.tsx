import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is for ivory navbar/drawer, 'dark' is for burgundy footer
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
}) => {
  if (variant === 'dark') {
    return (
      <div className="flex items-center gap-3 select-none">
        {/* Golden framed AT monogram matching the user's logo */}
        <div className="w-10 h-10 border border-[#C4A572] flex items-center justify-center bg-[#29151C]/60 transition-colors shrink-0">
          <span className="font-serif text-xl font-normal text-[#FAF7F2] tracking-normal leading-none pt-0.5">
            AT
          </span>
        </div>
        
        {/* Brand name and subtext */}
        <div className="flex flex-col text-left">
          <span className="font-serif text-xl font-medium tracking-tight text-[#FAF7F2] leading-tight">
            Ashwini Tupe
          </span>
          <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-[#C4A572] leading-none mt-1">
            AARI &amp; FABRIC ART
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 sm:gap-3.5 select-none">
      {/* Golden framed AT monogram matching the user's logo exactly */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 border border-[#C4A572] flex items-center justify-center bg-[#FAF7F2] transition-colors shrink-0">
        <span className="font-serif text-xl sm:text-2xl font-normal text-[#292525] tracking-normal leading-none pt-0.5">
          AT
        </span>
      </div>
      
      {/* Brand name and subtext */}
      <div className="flex flex-col text-left">
        <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#292525] leading-tight">
          Ashwini Tupe
        </span>
        <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.24em] uppercase text-[#C4A572] leading-none mt-1">
          AARI &amp; FABRIC ART
        </span>
      </div>
    </div>
  );
};
