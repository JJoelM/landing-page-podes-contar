import React from 'react';
import SearchPill from './SearchPill';
import CategoryIcon from './CategoryIcon';
import HeadingHighlight from './HeadingHighlight';
import { featuredActivities } from '../data/activities';

export default function FeaturedActivities({ onOpenInscription }) {
  const sofia = featuredActivities.find((a) => a.id === 'detras-del-chiste');
  const humor = featuredActivities.find((a) => a.id === 'eso-no-es-humor');
  const afterClass = featuredActivities.find((a) => a.id === 'after-class');
  const ideathon = featuredActivities.find((a) => a.id === 'ideathon-express');

  // Exact bottom shading gradient as specified in CardEvento.svg:
  // subtle fade into #022848 at 50% opacity at the bottom edge so #FFF5E3 date/time pops
  const bottomShadingStyle = {
    background: 'linear-gradient(180deg, rgba(2, 40, 72, 0) 0%, rgba(2, 40, 72, 0.12) 45%, rgba(2, 40, 72, 0.5) 100%)',
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#F38739] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Pill */}
        <SearchPill text="Actividades principales" />

        {/* Bento Grid: 2 columns in desktop (Left: 5 cols double-height, Right: 7 cols with 2 rows of 281px cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Sofía Calvoe (1:1 con Frame 146 de Figma) */}
          <div className="lg:col-span-5 bg-[#FFF5E3] text-[#193764] rounded-[50px] shadow-[0_5px_20px_rgba(0,0,0,0.25)] relative overflow-hidden group min-h-[540px] sm:h-[574px]">

            {/* Degradado 3 8 detrás de Sofía: exacto a Frame 146 (2556:16815) */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[90%] overflow-hidden rounded-[50px] z-0" aria-hidden="true">
              <img
                src="/assets/degradado-claro.png"
                alt=""
                className="absolute h-[145.6%] left-[-86.25%] top-[-3.77%] w-[189.04%] max-w-none select-none pointer-events-none"
              />
            </div>

            {/* Top header row: Charla (left-[15.3%]) + ¡Invitada estrella! (24px) */}
            <div className="relative z-30 flex items-center justify-between pt-8 sm:pt-[38px] pl-10 sm:pl-[15.3%] pr-7 sm:pr-[34px]">
              <div className="flex items-center gap-2.5">
                <CategoryIcon type="charla" variant="card" className="w-8 h-8 sm:w-9 sm:h-[33px] shrink-0" color="#F38739" />
                <span className="font-bold text-sm text-[#F38739]">Charla</span>
              </div>
              <span className="text-[#F38739] font-bold text-lg sm:text-2xl leading-none">
                ¡Invitada estrella!
              </span>
            </div>

            {/* Bastón azul #0660AE + Título “Detrás del chiste” en un único contenedor rotado (z-10 detrás de Sofía z-20) */}
            <div className="absolute right-4 sm:right-6 top-[166px] sm:top-[158px] z-10 -rotate-[4.73deg] origin-right">
              <div className="relative inline-flex items-center">
                <div
                  className="absolute inset-y-0 right-0 -left-[90px] sm:-left-[110px] bg-[#0660AE] rounded-[30px] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] -z-10"
                  aria-hidden="true"
                />
                <span className="text-[#FFF5E3] text-xl sm:text-2xl xl:text-[28px] 2xl:text-[30px] font-bold leading-none whitespace-nowrap py-2.5 pl-3 pr-5">
                  “{sofia.title}”
                </span>
              </div>
            </div>

            {/* Imagen de Sofía Calvoe (z-20 encima del bastón z-10, exacto a Frame 146 2531:16804) */}
            <div className="absolute left-0 bottom-0 w-[55%] sm:w-[56.1%] h-[82%] sm:h-[86.4%] pointer-events-none z-20 overflow-hidden rounded-bl-[50px]">
              <img
                src={sofia.image}
                alt="Sofía Calvoe"
                className="absolute h-full left-[-28.69%] top-0 w-[128.71%] max-w-none select-none"
              />
            </div>

            {/* Textos a la derecha: descripción, Disertante y Modalidad (z-30, left-[50.5%]) */}
            <div className="absolute left-[49%] sm:left-[50.5%] right-5 sm:right-[30px] top-[248px] sm:top-[258px] z-30 text-left">
              <p className="text-sm sm:text-[16px] text-[#193764] leading-[1.35]">
                <span className="font-bold">El acoso disfrazado de crítica: </span>
                <span className="font-normal">el feedback académico frente a la burla, la difamación y hostigamiento.</span>
              </p>

              <div className="mt-4 sm:mt-5">
                <span className="block text-[14px] sm:text-[15px] font-medium text-[#193764] leading-normal">Disertante:</span>
                <span className="block text-xl sm:text-[24px] font-bold text-[#0660AE] leading-[30px]">{sofia.speaker}</span>
              </div>

              <div className="mt-1">
                <span className="block text-[14px] sm:text-[15px] font-medium text-[#193764] leading-[18px]">Modalidad:</span>
                <span className="block text-[15px] sm:text-[16px] font-bold text-[#0660AE] leading-[18px]">
                  {sofia.modality || 'híbrida'}
                </span>
              </div>
            </div>

            {/* Sombreado inferior mix-blend-multiply exacto a Frame 146 (2549:16813) */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[281px] rounded-b-[50px] z-[25] mix-blend-multiply"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 55.769%, #FFF5E3 69.712%, rgba(2, 40, 72, 0.5) 100%)',
              }}
              aria-hidden="true"
            />

            {/* Abajo a la derecha: Botón Anotarme y fecha Jue 04 - 09:00hs */}
            <div className="absolute right-6 sm:right-[36px] bottom-6 sm:bottom-[24px] z-30 flex flex-col items-end gap-2">
              <button
                onClick={() => onOpenInscription(sofia.title)}
                className="bg-[#F38739] hover:bg-[#0660AE] text-[#FFF5E3] w-[103px] h-[33px] rounded-[30px] font-bold text-[16px] shadow-[0_5px_3px_0_rgba(243,135,57,0.5)] active:scale-95 transition-all flex items-center justify-center"
              >
                Anotarme
              </button>
              <span className="font-nunito font-bold text-2xl sm:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                {sofia.date}
              </span>
            </div>

          </div>

          {/* Right Column: 2 filas con tarjetas de 281px de alto en escritorio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top row: 2 cards de 281px */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 2: Eso no es humor (Fondo oscuro #0660AE, 281px) */}
              <div className="bg-[#0660AE] text-white rounded-[50px] shadow-[0_5px_20px_rgba(0,0,0,0.25)] relative overflow-hidden min-h-[281px] sm:h-[281px]">
                
                {/* Header Row */}
                <div className="relative z-30 flex items-center gap-2 pt-7 pl-9 pr-6">
                  <CategoryIcon type="taller" variant="card" className="w-7 h-7 shrink-0" color="#F38739" />
                  <span className="font-bold text-sm text-[#FFF5E3]">Taller</span>
                </div>

                {/* Bastón crema #FFF5E3 + Título en un único contenedor rotado */}
                <div className="relative z-30 mt-3 pl-7 sm:pl-9">
                  <div className="relative inline-flex items-center -rotate-[4.73deg] origin-left">
                    <div
                      className="absolute inset-y-0 right-0 -left-16 bg-[#FFF5E3] rounded-[30px] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] -z-10"
                      aria-hidden="true"
                    />
                    <span className="text-[#0660AE] text-xl sm:text-[24px] xl:text-[26px] font-bold leading-none whitespace-nowrap py-2.5 pl-2 pr-6">
                      “{humor.title}”
                    </span>
                  </div>
                </div>

                {/* Descripción con holgura debajo del bastón */}
                <p className="relative z-30 pl-8 sm:pl-9 pr-8 mt-5 text-xs sm:text-[14px] text-[#FFF5E3]/95 font-normal leading-snug max-w-[270px]">
                  {humor.subtitle}
                </p>

                {/* Sombreado en el borde inferior mix-blend-multiply */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[145px] rounded-b-[50px] z-[25] mix-blend-multiply"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5E3 30%, rgba(2, 40, 72, 0.5) 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Abajo a la derecha: Botón y fecha */}
                <div className="absolute right-7 bottom-5 z-30 flex flex-col items-end gap-1.5">
                  <button
                    onClick={() => onOpenInscription(humor.title)}
                    className="bg-[#F38739] hover:bg-[#FFF5E3] hover:text-[#0660AE] text-[#FFF5E3] w-[103px] h-[33px] rounded-[30px] font-bold text-[16px] shadow-[0_5px_3px_0_rgba(243,135,57,0.5)] active:scale-95 transition-all flex items-center justify-center"
                  >
                    Anotarme
                  </button>
                  <span className="font-nunito font-bold text-2xl xl:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                    {humor.date}
                  </span>
                </div>

              </div>

              {/* Card 3: ¡After Class! (Fondo claro #FFF5E3, 281px) */}
              <div className="bg-[#FFF5E3] text-[#193764] rounded-[50px] shadow-[0_5px_20px_rgba(0,0,0,0.25)] relative overflow-hidden min-h-[281px] sm:h-[281px]">
                
                {/* Header Row */}
                <div className="relative z-30 flex items-center gap-2 pt-7 pl-9 pr-6">
                  <CategoryIcon type="recreacion" variant="card" className="w-7 h-7 shrink-0" color="#F38739" />
                  <span className="font-bold text-sm text-[#F38739]">Recreación</span>
                </div>

                {/* Bastón azul #0660AE + Título ¡After Class! en un único contenedor rotado */}
                <div className="relative z-30 mt-3 pl-7 sm:pl-9">
                  <div className="relative inline-flex items-center -rotate-[4.73deg] origin-left">
                    <div
                      className="absolute inset-y-0 right-0 -left-16 bg-[#0660AE] rounded-[30px] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] -z-10"
                      aria-hidden="true"
                    />
                    <span className="text-[#FFF5E3] text-xl sm:text-[24px] xl:text-[26px] font-bold leading-none whitespace-nowrap py-2.5 pl-2 pr-7">
                      {afterClass.title}
                    </span>
                  </div>
                </div>

                {/* Descripción con holgura debajo del bastón */}
                <p className="relative z-30 pl-8 sm:pl-9 pr-8 mt-5 text-xs sm:text-[14px] text-[#193764] font-normal leading-snug max-w-[260px]">
                  {afterClass.subtitle}
                </p>

                {/* Sombreado en el borde inferior mix-blend-multiply */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[145px] rounded-b-[50px] z-[25] mix-blend-multiply"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5E3 30%, rgba(2, 40, 72, 0.5) 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Abajo a la derecha: Botón y fecha */}
                <div className="absolute right-7 bottom-5 z-30 flex flex-col items-end gap-1.5">
                  <button
                    onClick={() => onOpenInscription(afterClass.title)}
                    className="bg-[#F38739] hover:bg-[#0660AE] text-[#FFF5E3] w-[103px] h-[33px] rounded-[30px] font-bold text-[16px] shadow-[0_5px_3px_0_rgba(243,135,57,0.5)] active:scale-95 transition-all flex items-center justify-center"
                  >
                    Anotarme
                  </button>
                  <span className="font-nunito font-bold text-2xl xl:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                    {afterClass.date}
                  </span>
                </div>

              </div>

            </div>

            {/* Bottom Row: Ideas que cuentan (Fondo oscuro #0660AE, 281px, exacto a Desktop - 2) */}
            <div className="bg-[#0660AE] text-white rounded-[50px] relative overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.25)] min-h-[281px] sm:h-[281px]">
              
              {/* Degradado 3 7 detrás de las disertantes */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[59%] overflow-hidden rounded-l-[50px] z-0" aria-hidden="true">
                <img
                  src="/assets/degradado-oscuro.png"
                  alt=""
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

              {/* Header Row */}
              <div className="relative z-30 flex items-center gap-2 pt-7 pl-10 sm:pl-[9%] pr-6">
                <CategoryIcon type="grupal" variant="card" className="w-7 h-7 shrink-0" color="#F38739" />
                <span className="font-bold text-sm text-[#FFF5E3]">Actividad grupal</span>
              </div>

              {/* Bastón crema #FFF5E3 + Título Ideas que cuentan en un único contenedor rotado (z-10 detrás de la imagen z-20) */}
              <div className="absolute left-6 sm:left-[38%] top-[62px] sm:top-[54px] z-10 -rotate-[4.73deg] origin-left">
                <div className="relative inline-flex items-center">
                  <div
                    className="absolute inset-y-0 right-0 -left-[80px] sm:-left-[95px] bg-[#FFF5E3] rounded-[30px] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] -z-10"
                    aria-hidden="true"
                  />
                  <span className="text-[#0660AE] text-2xl sm:text-[28px] xl:text-[32px] font-bold leading-none whitespace-nowrap py-2.5 pl-2 sm:pl-4 pr-7">
                    Ideas que cuentan
                  </span>
                </div>
              </div>

              {/* Imagen unificada de ambas disertantes: oculta en móvil, visible desde sm (z-20 para cortar el bastón z-10 detrás) */}
              <img
                src={ideathon.mentors[0]}
                alt="Mentoras Ideathón"
                className="hidden sm:block pointer-events-none select-none absolute left-0 bottom-0 h-[78%] w-auto object-contain object-left-bottom z-20"
              />

              {/* Descripción a la derecha con holgura debajo del bastón (z-30) */}
              <p className="relative sm:absolute sm:left-[45.4%] sm:right-[32px] sm:top-[122px] mt-20 sm:mt-0 px-8 sm:px-0 pb-24 sm:pb-0 z-30 text-xs sm:text-[15px] text-[#FFF5E3] leading-snug text-left">
                Te invitamos a participar de una <span className="font-bold">Ideathón Express</span> dónde las tres carreras <span className="font-bold">proponen soluciones rápidas</span> contra el ciberacoso.
              </p>

              {/* Sombreado en el borde inferior mix-blend-multiply */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[155px] rounded-b-[50px] z-[25] mix-blend-multiply"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5E3 30%, rgba(2, 40, 72, 0.5) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Abajo a la derecha: Botón y fecha */}
              <div className="absolute right-7 bottom-5 z-30 flex flex-col items-end gap-1.5">
                <button
                  onClick={() => onOpenInscription(ideathon.title)}
                  className="bg-[#F38739] hover:bg-[#FFF5E3] hover:text-[#0660AE] text-[#FFF5E3] w-[103px] h-[33px] rounded-[30px] font-bold text-[16px] shadow-[0_5px_3px_0_rgba(243,135,57,0.5)] active:scale-95 transition-all flex items-center justify-center"
                >
                  Anotarme
                </button>
                <span className="font-nunito font-bold text-2xl xl:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                  {ideathon.date}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
