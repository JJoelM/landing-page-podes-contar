import React from 'react';

export default function PartnersRibbon({
  color = 'blue',
  withFausti = false,
  topBg = '#FEF6EE',
  bottomBg = '#EE7B30',
  className = ''
}) {
  const isBlue = color === 'blue';
  const bgColor = isBlue ? 'bg-[#133E68]' : 'bg-[#EE7B30]';

  // Individual Partner Logo Group
  const PartnerLogoGroup = () => (
    <div className="flex items-center gap-12 sm:gap-16 lg:gap-24 shrink-0 px-6 sm:px-10">
      
      {/* TRES */}
      <div className="flex items-center">
        <span className="text-2xl sm:text-3xl font-black tracking-widest text-white select-none">
          TR<span className="tracking-tighter">≡</span>S
        </span>
      </div>

      {/* FAU UNNE */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center p-1 shrink-0">
          <svg viewBox="0 0 40 40" className="w-full h-full text-white fill-current">
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 28 L12 16 M20 28 L20 12 M28 28 L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="20" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="text-left leading-tight text-white select-none">
          <span className="block text-base sm:text-lg font-black tracking-tight">FAU</span>
          <span className="block text-[10px] sm:text-xs font-bold tracking-wider opacity-90">UNNE</span>
        </div>
      </div>

      {/* SAE */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shrink-0">
          <span className={`font-black text-xs sm:text-sm ${isBlue ? 'text-brand-blue' : 'text-brand-orange'}`}>
            SAE
          </span>
        </div>
      </div>

      {/* Gabinete Interdisciplinario */}
      <div className="flex items-center text-left text-white select-none">
        <div>
          <span className="block text-sm sm:text-base font-black leading-tight">
            Gabinete
          </span>
          <span className="block text-xs sm:text-sm font-bold opacity-90 leading-tight">
            Interdisciplinario de la FAU
          </span>
        </div>
      </div>

    </div>
  );

  return (
    <div className={`relative overflow-visible select-none z-20 ${className}`}>
      
      {/* Fondo de transición sin costuras: Mitad superior color fondo 1, mitad inferior color fondo 2 */}
      <div className="absolute inset-0 -top-6 -bottom-6 pointer-events-none -z-10 flex flex-col">
        <div className="w-full h-1/2" style={{ backgroundColor: topBg }} />
        <div className="w-full h-1/2" style={{ backgroundColor: bottomBg }} />
      </div>

      {/* Tilted container aligned with the banner rotation */}
      <div className="relative overflow-visible transform -rotate-1 sm:-rotate-2 my-1 sm:my-2">
        
        {/* Fausti #4 (Reposado sobre el banner de sponsors) */}
        {withFausti && (
          <div className="absolute top-0 right-8 sm:right-20 md:right-32 lg:right-48 pointer-events-none select-none">
            
            {/* Fausti Mano: top: -30px exacto en escritorio, apoyada sobre la cinta */}
            <div className="absolute -top-[20px] lg:-top-[30px] -left-12 sm:-left-16 md:-left-20 z-30 transform -rotate-6">
              <img
                src="/assets/fausti-mano.png"
                alt="Manos de Fausti apoyadas sobre el banner"
                className="w-14 sm:w-18 md:w-22 lg:w-24 h-auto drop-shadow-md"
              />
            </div>

            {/* Fausti Cara: z-10 por detrás del banner azul (el banner le tapa la parte superpuesta de la cara) */}
            <div className="relative z-10 -top-[95px] sm:-top-[120px] md:-top-[140px] lg:-top-[155px]">
              <img
                src="/assets/fausti-cara.png"
                alt="Fausti asomándose con la mitad de su rostro por encima del banner"
                className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto drop-shadow-xl"
              />
            </div>

          </div>
        )}

        {/* Angled Ribbon Bar: z-20 cubre la mitad inferior de la cara de Fausti */}
        <div className={`relative z-20 ${bgColor} py-4 sm:py-5 shadow-xl shadow-black/15 overflow-hidden marquee-container`}>
          
          {/* Continuous seamless marquee */}
          <div className="flex overflow-hidden w-full select-none">
            <div className="animate-marquee-track flex items-center">
              <PartnerLogoGroup />
              <PartnerLogoGroup />
              <PartnerLogoGroup />
            </div>
            <div className="animate-marquee-track flex items-center" aria-hidden="true">
              <PartnerLogoGroup />
              <PartnerLogoGroup />
              <PartnerLogoGroup />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
