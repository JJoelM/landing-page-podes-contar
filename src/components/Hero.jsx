import React from 'react';
import HeadingHighlight from './HeadingHighlight';

export default function Hero({ onOpenInscription }) {
  return (
    <section className="relative pt-6 sm:pt-10 pb-36 sm:pb-36 lg:pb-32 overflow-hidden bg-[#FEF6EE]">
      
      {/* Background soft ambient warm glow */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container - Centered Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-7">
        
        {/* Top Campaign Sub-brand con logo apaisado */}
        <div className="flex flex-col items-center justify-center select-none mb-1">
          <img
            src="/assets/logo-apaisado.png"
            alt="Logo oficial Podés Contar"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
          <span className="text-xs sm:text-sm font-extrabold text-brand-blue/80 tracking-wide mt-1.5">
            Campaña de concientización sobre el ciberacoso
          </span>
        </div>

        {/* Cartel "del 1 al 5 de Noviembre" con rotación de -2.2 grados y el DOBLE de su tamaño */}
        <div className="inline-block transform -rotate-[2.2deg] transition-transform hover:rotate-0 duration-200 my-2">
          <span className="bg-brand-blue text-white px-10 sm:px-14 md:px-16 py-3.5 sm:py-4 md:py-5 rounded-full text-2xl sm:text-3xl md:text-4xl font-black shadow-xl shadow-brand-blue/30 inline-block tracking-tight">
            del 1 al 5 de Noviembre
          </span>
        </div>

        {/* Título Principal Centrado con cursor/corchetes de concientización */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#133E68] tracking-tight leading-[1.15] max-w-2xl mx-auto">
          Jornada de{' '}
          <HeadingHighlight
            color="#133E68"
            bgColor="#FEEBC8"
            textColor="text-[#133E68]"
          >
            concientización
          </HeadingHighlight>{' '}
          sobre el Ciberacoso
        </h1>

        {/* Subtítulo Centrado */}
        <p className="text-base sm:text-xl text-[#133E68]/90 max-w-lg mx-auto font-bold leading-relaxed">
          Un evento único donde podés aprender convivir de forma sana en la red.
        </p>

        {/* Contadores / Estadísticas Centradas con "¡Y mucho más!" */}
        <div className="pt-1 flex flex-col items-center relative max-w-md mx-auto">
          <div className="flex items-center justify-center gap-6 sm:gap-14">
            <div className="text-center">
              <span className="block text-4xl sm:text-5xl font-black text-brand-orange tracking-tight leading-none">10</span>
              <span className="text-sm sm:text-base font-black text-brand-blue mt-1.5 block">Disertantes</span>
            </div>

            <div className="text-center">
              <span className="block text-4xl sm:text-5xl font-black text-brand-orange tracking-tight leading-none">5</span>
              <span className="text-sm sm:text-base font-black text-brand-blue mt-1.5 block">Días</span>
            </div>

            <div className="text-center">
              <span className="block text-4xl sm:text-5xl font-black text-brand-orange tracking-tight leading-none">20</span>
              <span className="text-sm sm:text-base font-black text-brand-blue mt-1.5 block">Actividades</span>
            </div>
          </div>

          {/* "¡Y mucho más!" con fuente Caveat Regular en el espacio abierto a la derecha de los números */}
          <div className="hidden lg:flex flex-col items-center absolute -right-36 xl:-right-44 -top-1 z-20 pointer-events-none select-none">
            <span className="font-handwriting text-3xl sm:text-4xl text-[#133E68] font-normal leading-none transform -rotate-6">
              ¡Y mucho más!
            </span>
            <svg className="w-24 h-10 text-[#133E68]/80 mt-0.5 ml-4" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 8 Q 50 36 90 20" strokeLinecap="round" />
              <path d="M78 12 L 90 20 L 80 28" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Mobile Call to Action */}
        <div className="pt-2 block sm:hidden">
          <button
            onClick={() => onOpenInscription()}
            className="w-full bg-brand-orange text-white py-3 rounded-full font-black text-lg shadow-btn"
          >
            Inscribirme
          </button>
        </div>

      </div>

      {/* Fausti en el Hero: Siempre pegado al margen derecho y al borde inferior (banner de patrocinadores) */}
      <div className="absolute right-0 bottom-0 z-0 flex items-end justify-end pointer-events-none select-none">
        
        {/* Fausti Container con degradado detrás */}
        <div className="relative w-44 sm:w-60 md:w-72 lg:w-[350px] xl:w-[400px] max-w-full">
          
          {/* Assets/degradado 3 10.png detrás de Fausti */}
          <div className="absolute inset-0 -top-12 sm:-top-16 -left-12 sm:-left-20 w-[140%] h-[140%] pointer-events-none z-0 opacity-80 mix-blend-multiply">
            <img
              src="/assets/degradado-claro.png"
              alt="Aura de degradado de Fausti"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Fausti ilustración */}
          <img
            src="/assets/fausti-hero.png"
            alt="Fausti saludando en el Hero"
            className="w-full h-auto object-contain object-right-bottom drop-shadow-xl relative z-10"
          />
        </div>

      </div>

    </section>
  );
}
