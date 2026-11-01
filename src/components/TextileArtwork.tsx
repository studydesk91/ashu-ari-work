import React, { useState } from 'react';

interface TextileArtworkProps {
  patternType: 'peacock_zari' | 'lotus_organza' | 'floral_jaal' | 'rose_botanical' | 'paisley_kundan' | 'marigold_silk' | 'hero_composition' | 'artist_portrait';
  title?: string;
  category?: 'aari' | 'painting';
  className?: string;
  imageSrc?: string;
}

export const TextileArtwork: React.FC<TextileArtworkProps> = ({
  patternType,
  title,
  category,
  className = "w-full h-full",
  imageSrc,
}) => {
  const [imageError, setImageError] = useState(false);

  // If a real image was provided and hasn't errored, display it with luxury frame
  if (imageSrc && !imageError) {
    return (
      <div className={`relative overflow-hidden bg-[#FAF7F2] ${className}`}>
        <img
          src={imageSrc}
          alt={title || "Handcrafted Textile Art"}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292525]/40 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Bespoke luxury SVG & CSS textile canvas renderers for artistic showcase
  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      {patternType === 'hero_composition' && (
        <div className="w-full h-full bg-gradient-to-br from-[#3F1D29] via-[#572B3A] to-[#29151C] relative flex items-center justify-center p-6 sm:p-10">
          {/* Subtle silk weave background grid */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(#C4A572 1px, transparent 1px), radial-gradient(#C4A572 1px, #572B3A 1px)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px'
            }}
          />

          {/* Golden Aari Needle & Zardozi Frame Vector */}
          <svg viewBox="0 0 600 400" className="w-full h-full max-h-[460px] drop-shadow-2xl" fill="none">
            {/* Outer Luxury Border */}
            <rect x="20" y="20" width="560" height="360" rx="8" stroke="#C4A572" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
            <rect x="32" y="32" width="536" height="336" rx="4" stroke="#DFCA9B" strokeWidth="1" opacity="0.4" />
            
            {/* Corner Decorative Motifs */}
            <g stroke="#C4A572" strokeWidth="1.5" opacity="0.8">
              <path d="M 20 50 Q 50 50 50 20" fill="none" />
              <path d="M 580 50 Q 550 50 550 20" fill="none" />
              <path d="M 20 350 Q 50 350 50 380" fill="none" />
              <path d="M 580 350 Q 550 350 550 380" fill="none" />
              <circle cx="50" cy="50" r="3" fill="#C4A572" />
              <circle cx="550" cy="50" r="3" fill="#C4A572" />
              <circle cx="50" cy="350" r="3" fill="#C4A572" />
              <circle cx="550" cy="350" r="3" fill="#C4A572" />
            </g>

            {/* Central Embroidered Motif: Peacock & Floral Arabesque */}
            <g transform="translate(180, 70)">
              {/* Floral Trellis */}
              <path d="M 120 220 C 60 160, 40 80, 120 40 C 200 80, 180 160, 120 220 Z" 
                    fill="rgba(87, 43, 58, 0.6)" stroke="#DFCA9B" strokeWidth="2" />
              
              {/* Petal stitches */}
              <circle cx="120" cy="130" r="36" stroke="#C4A572" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="120" cy="130" r="22" stroke="#DFCA9B" strokeWidth="2" fill="#3F1D29" />
              <circle cx="120" cy="130" r="8" fill="#C4A572" />

              {/* Vine curves */}
              <path d="M 70 180 Q 20 160 30 110 Q 50 130 80 150" stroke="#C4A572" strokeWidth="2" strokeLinecap="round" />
              <path d="M 170 180 Q 220 160 210 110 Q 190 130 160 150" stroke="#C4A572" strokeWidth="2" strokeLinecap="round" />
              
              {/* Golden Kundan Beads */}
              <circle cx="30" cy="110" r="4" fill="#DFCA9B" />
              <circle cx="210" cy="110" r="4" fill="#DFCA9B" />
              <circle cx="120" cy="40" r="5" fill="#EBCFD0" stroke="#C4A572" strokeWidth="1.5" />
            </g>

            {/* Aari Tambour Needle Graphic */}
            <g transform="translate(390, 80) rotate(32)">
              <line x1="0" y1="0" x2="0" y2="180" stroke="#DFCA9B" strokeWidth="3" strokeLinecap="round" />
              <path d="M 0 180 Q 5 188 0 195 Q -2 190 0 180" fill="#DFCA9B" />
              <rect x="-4" y="0" width="8" height="60" rx="3" fill="#A58654" />
              {/* Golden Thread Coiling from Needle */}
              <path d="M 0 195 Q -20 230 -10 260 T -40 300" stroke="#C4A572" strokeWidth="1.5" strokeDasharray="4 2" fill="none" opacity="0.9" />
            </g>

            {/* Subdued Brand Signature in Vector */}
            <text x="300" y="325" textAnchor="middle" fill="#DFCA9B" fontSize="13" letterSpacing="4" fontFamily="Cormorant Garamond, serif" fontWeight="600">
              HANDCRAFTED AARI EMBROIDERY & FABRIC ART
            </text>
            <text x="300" y="345" textAnchor="middle" fill="#EBCFD0" fontSize="11" letterSpacing="2" fontFamily="DM Sans, sans-serif" opacity="0.8">
              PUNE · MAHARASHTRA
            </text>
          </svg>
        </div>
      )}

      {patternType === 'peacock_zari' && (
        <div className="w-full h-full bg-gradient-to-br from-[#3F1D29] via-[#572B3A] to-[#201016] relative flex items-center justify-center p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#DFCA9B_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-lg" fill="none">
            {/* Peacock Body & Crown */}
            <g transform="translate(130, 40)">
              {/* Crown kalgi */}
              <line x1="70" y1="35" x2="65" y2="15" stroke="#DFCA9B" strokeWidth="1.5" />
              <circle cx="65" cy="15" r="3" fill="#C4A572" />
              <line x1="74" y1="35" x2="75" y2="10" stroke="#DFCA9B" strokeWidth="1.5" />
              <circle cx="75" cy="10" r="3" fill="#EBCFD0" />
              <line x1="78" y1="35" x2="85" y2="15" stroke="#DFCA9B" strokeWidth="1.5" />
              <circle cx="85" cy="15" r="3" fill="#DFCA9B" />

              {/* Neck & Head */}
              <path d="M 68 40 C 65 30 82 28 82 42 C 82 56 62 70 60 95 C 58 120 75 140 95 150" 
                    stroke="#DFCA9B" strokeWidth="3" strokeLinecap="round" />
              
              {/* Embroidered Body with Zari Scales */}
              <path d="M 60 95 C 40 100 20 130 25 165 C 30 195 65 210 100 195 C 130 180 140 140 95 150" 
                    fill="rgba(196, 165, 114, 0.15)" stroke="#C4A572" strokeWidth="2" />
              
              {/* Feathers Fan */}
              <g stroke="#DFCA9B" strokeWidth="1.5" strokeDasharray="4 2">
                <path d="M 25 165 Q -20 140 -50 90" />
                <path d="M 30 175 Q -10 180 -45 150" />
                <path d="M 45 190 Q 20 220 -20 220" />
                <path d="M 70 205 Q 60 250 30 260" />
                <path d="M 95 200 Q 120 250 100 270" />
              </g>

              {/* Peacock Feather Eyes */}
              <g>
                <circle cx="-50" cy="90" r="9" fill="#201016" stroke="#DFCA9B" strokeWidth="2" />
                <circle cx="-50" cy="90" r="4" fill="#C4A572" />
                <circle cx="-45" cy="150" r="9" fill="#201016" stroke="#DFCA9B" strokeWidth="2" />
                <circle cx="-45" cy="150" r="4" fill="#C4A572" />
                <circle cx="-20" cy="220" r="9" fill="#201016" stroke="#DFCA9B" strokeWidth="2" />
                <circle cx="-20" cy="220" r="4" fill="#C4A572" />
              </g>

              {/* Pearl Garland */}
              <path d="M 45 110 Q 75 125 90 140" stroke="#FAF7F2" strokeWidth="2" strokeDasharray="2 4" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      )}

      {patternType === 'lotus_organza' && (
        <div className="w-full h-full bg-gradient-to-br from-[#FAF7F2] via-[#EFE5DA] to-[#EBCFD0]/40 relative flex items-center justify-center p-6">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#C4A572_1px,transparent_1px)] [background-size:20px_20px]" />
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md" fill="none">
            {/* Soft Painted Lotus Motifs */}
            <g transform="translate(110, 40)">
              {/* Lily Pad Base */}
              <ellipse cx="90" cy="190" rx="95" ry="32" fill="#572B3A" fillOpacity="0.08" stroke="#C4A572" strokeWidth="1.2" strokeDasharray="6 3" />
              <path d="M 90 190 L 15 175" stroke="#C4A572" strokeWidth="1.2" />
              <path d="M 90 190 L 170 180" stroke="#C4A572" strokeWidth="1.2" />

              {/* Central Lotus Flower */}
              <g transform="translate(90, 130)">
                {/* Back Petals */}
                <path d="M 0 0 C -40 -30 -60 -80 0 -110 C 60 -80 40 -30 0 0 Z" fill="#EBCFD0" fillOpacity="0.6" stroke="#C4A572" strokeWidth="1.5" />
                <path d="M 0 0 C -70 -20 -80 -60 -40 -90 C -10 -70 -5 -30 0 0 Z" fill="#F7EAEB" fillOpacity="0.8" stroke="#C4A572" strokeWidth="1.2" />
                <path d="M 0 0 C 70 -20 80 -60 40 -90 C 10 -70 5 -30 0 0 Z" fill="#F7EAEB" fillOpacity="0.8" stroke="#C4A572" strokeWidth="1.2" />
                
                {/* Front Bud Petals */}
                <path d="M 0 0 C -30 -15 -35 -50 0 -75 C 35 -50 30 -15 0 0 Z" fill="#EBCFD0" stroke="#572B3A" strokeWidth="1.2" />
                
                {/* Golden Stamen and Pollen */}
                <circle cx="0" cy="-45" r="4" fill="#C4A572" />
                <circle cx="-6" cy="-40" r="2" fill="#DFCA9B" />
                <circle cx="6" cy="-40" r="2" fill="#DFCA9B" />
              </g>

              {/* Delicate Botanical Watercolor Drops */}
              <circle cx="20" cy="80" r="3" fill="#C4A572" opacity="0.7" />
              <circle cx="170" cy="60" r="4" fill="#EBCFD0" />
              <circle cx="150" cy="110" r="2.5" fill="#C4A572" opacity="0.6" />
            </g>
          </svg>
        </div>
      )}

      {patternType === 'floral_jaal' && (
        <div className="w-full h-full bg-gradient-to-br from-[#FAF7F2] via-[#EFE5DA] to-[#DFCA9B]/30 relative flex items-center justify-center p-6">
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-sm" fill="none">
            {/* Symmetrical Trellis Jaal Lattice */}
            <g stroke="#C4A572" strokeWidth="1.5" opacity="0.75">
              <path d="M 50 150 Q 125 80 200 150 Q 275 220 350 150" fill="none" />
              <path d="M 50 150 Q 125 220 200 150 Q 275 80 350 150" fill="none" />
              
              <path d="M 125 30 Q 200 100 275 30" fill="none" />
              <path d="M 125 270 Q 200 200 275 270" fill="none" />
            </g>

            {/* Floral Centers with Cutdana Nodes */}
            <g>
              {/* Center Flower */}
              <circle cx="200" cy="150" r="16" fill="#FAF7F2" stroke="#572B3A" strokeWidth="1.5" />
              <circle cx="200" cy="150" r="6" fill="#C4A572" />
              {/* Petals */}
              <circle cx="200" cy="130" r="5" fill="#EBCFD0" stroke="#C4A572" strokeWidth="1" />
              <circle cx="200" cy="170" r="5" fill="#EBCFD0" stroke="#C4A572" strokeWidth="1" />
              <circle cx="180" cy="150" r="5" fill="#EBCFD0" stroke="#C4A572" strokeWidth="1" />
              <circle cx="220" cy="150" r="5" fill="#EBCFD0" stroke="#C4A572" strokeWidth="1" />

              {/* Side Flowers */}
              <circle cx="80" cy="150" r="10" fill="#FAF7F2" stroke="#C4A572" strokeWidth="1.2" />
              <circle cx="80" cy="150" r="4" fill="#572B3A" />
              <circle cx="320" cy="150" r="10" fill="#FAF7F2" stroke="#C4A572" strokeWidth="1.2" />
              <circle cx="320" cy="150" r="4" fill="#572B3A" />
            </g>
          </svg>
        </div>
      )}

      {patternType === 'rose_botanical' && (
        <div className="w-full h-full bg-gradient-to-br from-[#FAF7F2] via-[#F7EAEB] to-[#EBCFD0] relative flex items-center justify-center p-6">
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
            {/* Delicate Botanical Hand-Painted Roses */}
            <g transform="translate(130, 50)">
              {/* Stem and Leaves */}
              <path d="M 70 200 Q 75 140 70 90" stroke="#572B3A" strokeWidth="2" strokeLinecap="round" />
              <path d="M 72 160 Q 40 150 30 135 Q 50 130 71 145" fill="#FAF7F2" fillOpacity="0.8" stroke="#572B3A" strokeWidth="1.2" />
              <path d="M 71 125 Q 105 110 115 95 Q 95 100 71 115" fill="#FAF7F2" fillOpacity="0.8" stroke="#572B3A" strokeWidth="1.2" />
              
              {/* Petals Layering */}
              <circle cx="70" cy="70" r="42" fill="#EBCFD0" fillOpacity="0.5" stroke="#C4A572" strokeWidth="1.5" />
              <path d="M 50 70 C 50 50 90 50 90 70 C 90 85 50 85 50 70 Z" fill="#572B3A" fillOpacity="0.75" />
              <path d="M 40 65 Q 70 35 100 65 Q 70 95 40 65 Z" stroke="#DFCA9B" strokeWidth="1.5" fill="none" />
              
              {/* Gold dust accents */}
              <circle cx="105" cy="45" r="2.5" fill="#C4A572" />
              <circle cx="30" cy="60" r="2" fill="#C4A572" />
              <circle cx="95" cy="95" r="2" fill="#C4A572" />
            </g>
          </svg>
        </div>
      )}

      {patternType === 'paisley_kundan' && (
        <div className="w-full h-full bg-gradient-to-br from-[#2D1620] via-[#3F1D29] to-[#25121A] relative flex items-center justify-center p-6">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C4A572_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xl" fill="none">
            {/* Traditional Indian Mango Paisley (Kalka) Motif */}
            <g transform="translate(130, 30)">
              {/* Outer Paisley Body */}
              <path d="M 70 230 C 10 230 5 130 50 80 C 70 60 100 30 110 10 C 115 5 125 15 120 30 C 110 65 140 130 120 180 C 105 220 90 230 70 230 Z" 
                    fill="rgba(196, 165, 114, 0.12)" stroke="#C4A572" strokeWidth="2.5" />

              {/* Inner Raised Padding Line */}
              <path d="M 68 210 C 25 210 25 135 60 95 C 75 75 95 50 100 35 C 95 65 115 125 100 165 C 90 195 80 210 68 210 Z" 
                    stroke="#DFCA9B" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Kundan Stone Facet Center */}
              <polygon points="68,130 82,145 68,160 54,145" fill="#FAF7F2" stroke="#DFCA9B" strokeWidth="1.5" />
              <circle cx="68" cy="145" r="3" fill="#572B3A" />

              {/* Pearl Border Drops */}
              <circle cx="70" cy="238" r="4" fill="#FAF7F2" stroke="#C4A572" strokeWidth="1" />
              <circle cx="50" cy="235" r="3.5" fill="#FAF7F2" stroke="#C4A572" strokeWidth="1" />
              <circle cx="90" cy="235" r="3.5" fill="#FAF7F2" stroke="#C4A572" strokeWidth="1" />
              <circle cx="32" cy="222" r="3" fill="#FAF7F2" stroke="#C4A572" strokeWidth="1" />
              <circle cx="108" cy="222" r="3" fill="#FAF7F2" stroke="#C4A572" strokeWidth="1" />
            </g>
          </svg>
        </div>
      )}

      {patternType === 'marigold_silk' && (
        <div className="w-full h-full bg-gradient-to-br from-[#FAF7F2] via-[#EFE5DA] to-[#DFCA9B]/40 relative flex items-center justify-center p-6">
          <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
            {/* Festive Hand-Painted Genda Phool Garland */}
            <g transform="translate(110, 40)">
              {/* Thread line */}
              <path d="M 10 70 Q 90 180 170 70" stroke="#C4A572" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Marigold 1 */}
              <g transform="translate(45, 95)">
                <circle cx="0" cy="0" r="28" fill="#C4A572" fillOpacity="0.4" stroke="#A58654" strokeWidth="1.2" />
                <circle cx="0" cy="0" r="18" fill="#DFCA9B" fillOpacity="0.8" />
                <circle cx="0" cy="0" r="8" fill="#572B3A" />
              </g>

              {/* Marigold 2 (Center) */}
              <g transform="translate(90, 130)">
                <circle cx="0" cy="0" r="34" fill="#DFCA9B" fillOpacity="0.6" stroke="#C4A572" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="22" fill="#C4A572" fillOpacity="0.9" />
                <circle cx="0" cy="0" r="10" fill="#572B3A" />
              </g>

              {/* Marigold 3 */}
              <g transform="translate(135, 95)">
                <circle cx="0" cy="0" r="28" fill="#C4A572" fillOpacity="0.4" stroke="#A58654" strokeWidth="1.2" />
                <circle cx="0" cy="0" r="18" fill="#DFCA9B" fillOpacity="0.8" />
                <circle cx="0" cy="0" r="8" fill="#572B3A" />
              </g>
            </g>
          </svg>
        </div>
      )}

      {patternType === 'artist_portrait' && (
        <div className="w-full h-full bg-gradient-to-br from-[#3F1D29] via-[#572B3A] to-[#29151C] relative flex items-center justify-center p-8">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DFCA9B_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex flex-col items-center justify-center text-center p-6 border border-[#C4A572]/40 rounded-xl bg-[#29151C]/40 backdrop-blur-sm max-w-[280px]">
            {/* Artisan Silhouette Icon / Embroidery Hoop Emblem */}
            <div className="w-24 h-24 rounded-full border-2 border-[#C4A572] flex items-center justify-center relative mb-4 bg-[#3F1D29]">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#DFCA9B]" fill="none" stroke="currentColor">
                {/* Traditional Tambour Hoop & Hook */}
                <circle cx="50" cy="50" r="38" stroke="#C4A572" strokeWidth="3" />
                <line x1="42" y1="12" x2="58" y2="12" stroke="#DFCA9B" strokeWidth="4" strokeLinecap="round" />
                <path d="M 30 50 Q 50 30 70 50 Q 50 70 30 50 Z" stroke="#EBCFD0" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="4" fill="#C4A572" />
              </svg>
              <div className="absolute -bottom-1 -right-1 bg-[#C4A572] text-[#29151C] rounded-full p-1 shadow-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h4 className="font-serif text-xl font-medium text-[#FAF7F2] tracking-wide mb-1">
              Ashwini Tupe
            </h4>
            <p className="text-xs uppercase tracking-widest text-[#C4A572] font-medium mb-3">
              Textile Artist · Pune
            </p>
            <p className="text-xs text-[#EBCFD0] font-light leading-relaxed italic">
              "Every stitch is crafted by hand with love and dedication."
            </p>
          </div>
        </div>
      )}

      {/* Decorative Category Watermark / Monogram */}
      <div className="absolute bottom-3 right-3 text-[10px] tracking-widest font-mono text-[#C4A572]/60 uppercase pointer-events-none">
        {category === 'aari' ? 'AARI NEEDLEWORK' : category === 'painting' ? 'TEXTILE ART' : 'ASHWINI TUPE'}
      </div>
    </div>
  );
};
