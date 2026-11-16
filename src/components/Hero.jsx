import React from 'react';
import HeadingHighlight from './HeadingHighlight';

export default function Hero({ onOpenInscription }) {
  return (
    <section className="relative pt-6 sm:pt-10 pb-48 sm:pb-36 lg:pb-32 overflow-hidden bg-[#FEF6EE]">
      
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
          <span className="text-xs sm:text-sm font-extrabold text-[#193764]/80 tracking-wide mt-1.5">
            Campaña de concientización sobre el ciberacoso
          </span>
        </div>

        {/* Cartel "del 1 al 5 de Noviembre" con rotación de -2.2 grados y brillos */}
        <div className="relative inline-block transform -rotate-[2.2deg] transition-transform hover:rotate-0 duration-200 my-2">
          <img
            src="/assets/brillos-cartel.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute -top-5 -left-7 w-8 h-8 object-contain pointer-events-none select-none rotate-12"
          />
          <span className="bg-[#0660AE] text-[#FFF5E3] px-8 sm:px-14 md:px-16 py-3 sm:py-4 md:py-5 rounded-full text-xl sm:text-3xl md:text-4xl font-black shadow-xl shadow-[#0660AE]/30 inline-block tracking-tight">
            del 1 al 5 de Noviembre
          </span>
          <img
            src="/assets/brillos-cartel.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute -bottom-4 -right-6 w-8 h-8 object-contain pointer-events-none select-none -rotate-12"
          />
        </div>

        {/* Título Principal Centrado con cursor/corchetes de concientización */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#193764] tracking-tight leading-[1.15] max-w-2xl mx-auto">
          Jornada de{' '}
          <HeadingHighlight
            color="#193764"
            bgColor="#FEEBC8"
            textColor="text-[#193764]"
          >
            concientización
          </HeadingHighlight>{' '}
          sobre el Ciberacoso
        </h1>

        {/* Subtítulo Centrado */}
        <p className="text-base sm:text-xl text-[#193764]/90 max-w-lg mx-auto font-bold leading-relaxed">
          Un evento único donde podés aprender convivir de forma sana en la red.
        </p>

        {/* Contadores / Estadísticas Centradas */}
        <div className="pt-1 flex flex-col items-center relative max-w-md mx-auto">
          <div className="flex items-center justify-center gap-6 sm:gap-14">
            <div className="text-center">
              <span className="block text-4xl sm:text-5xl font-black text-[#F38739] tracking-tight leading-none">10</span>
              <span className="text-sm sm:text-base font-black text-[#193764] mt-1.5 block">Disertantes</span>
            </div>

            <div className="text-center">
              <span className="block text-4xl sm:text-5xl font-black text-[#F38739] tracking-tight leading-none">5</span>
              <span className="text-sm sm:text-base font-black text-[#193764] mt-1.5 block">Días</span>
            </div>

            <div className="text-center">
              <span className="block text-4xl sm:text-5xl font-black text-[#F38739] tracking-tight leading-none">20</span>
              <span className="text-sm sm:text-base font-black text-[#193764] mt-1.5 block">Actividades</span>
            </div>
          </div>

          {/* "Podés venir, podés contar." centrado en la página y globo diálogo.svg a su izquierda */}
          <div className="mt-5 flex justify-center pointer-events-none select-none">
            <div className="relative inline-flex items-center justify-center">
              <img
                src="/assets/globo-dialogo.svg"
                alt=""
                aria-hidden="true"
                className="absolute right-full mr-3 sm:mr-4 top-1/2 -translate-y-1/2 w-24 sm:w-44 md:w-48 h-auto object-contain"
              />
              <span className="font-handwriting text-2xl sm:text-3xl text-[#193764] font-normal leading-tight text-center whitespace-nowrap">
                Podés venir,
                <br />
                podés contar.
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Fausti en puff a la IZQUIERDA (doble de tamaño en escritorio, igualando el tamaño del puff derecho) */}
      <div className="absolute -left-6 sm:-left-10 lg:-left-14 bottom-0 z-0 pointer-events-none select-none">
        <div className="relative w-44 sm:w-72 md:w-88 lg:w-[500px] xl:w-[560px] max-w-none">
          <img
            src="/assets/fausti-puff.png"
            alt="Fausti sentado en un puff naranja"
            className="w-full h-auto object-contain object-left-bottom relative z-10"
          />
        </div>
      </div>

      {/* Puff vacío a la DERECHA (triple de tamaño en escritorio, coincidiendo con el puff de Fausti) */}
      <div className="absolute -right-10 sm:-right-14 lg:-right-16 bottom-0 z-0 pointer-events-none select-none">
        <div className="relative w-48 sm:w-80 md:w-96 lg:w-[560px] xl:w-[640px] max-w-none">
          <img
            src="/assets/puff.png"
            alt="Puff naranja"
            className="w-full h-auto object-contain object-right-bottom relative z-10"
          />
        </div>
      </div>

    </section>
  );
}
