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
        <SearchPill text="¿Cuáles son nuestras próximas actividades?" />

        {/* Section Title & Description */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFF5E3] tracking-tight leading-tight">
            Imperdibles{' '}
            <HeadingHighlight
              color="#0660AE"
              bgColor="#0660AE"
              textColor="text-[#FFF5E3]"
            >
              actividades del evento
            </HeadingHighlight>
          </h2>
          <p className="mt-4 text-[#FFF5E3]/95 text-base sm:text-lg font-medium leading-relaxed">
            ¡No te pierdas de las mejores actividades que traemos para vos! Desde charlas con especialistas reconocidos hasta actividades para divertirse con compañeros.
          </p>
        </div>

        {/* Bento Grid: 2 columns in desktop (Left: 5 cols double-height, Right: 7 cols with 2 rows of 281px cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Sofía Calvoe (1:1 con CardEvento.svg, doble altura en escritorio ~586px, fondo claro #FFF5E3) */}
          <div className="lg:col-span-5 bg-[#FFF5E3] text-[#193764] rounded-[50px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_5px_20px_rgba(0,0,0,0.25)] relative overflow-hidden group min-h-[480px] lg:h-[586px]">

            {/* Suave degradado naranja detrás del disertante (izquierda) */}
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-72 rounded-l-[50px] z-0"
              style={{
                background: 'radial-gradient(circle at 22% 52%, rgba(243, 135, 57, 0.34) 0%, rgba(243, 135, 57, 0.14) 48%, rgba(255, 245, 227, 0) 78%)',
              }}
              aria-hidden="true"
            />
            
            {/* Top header row */}
            <div className="relative flex items-center justify-between z-30">
              <div className="flex items-center gap-2">
                <CategoryIcon type="charla" variant="card" className="w-7 h-7 shrink-0" color="#F38739" />
                <span className="font-extrabold text-sm sm:text-base text-[#F38739]">Charla</span>
              </div>
              <span className="text-[#F38739] font-black text-sm sm:text-base tracking-wide">
                ¡Invitada estrella!
              </span>
            </div>

            {/* Imagen de Sofía Calvoe a la IZQUIERDA pegada y recortada al borde inferior (z-20 para tapar el fondo de la píldora z-10) */}
            <div className="absolute left-0 bottom-0 w-40 sm:w-56 md:w-64 h-[68%] sm:h-[83%] pointer-events-none z-20 overflow-hidden rounded-bl-[50px]">
              <img
                src={sofia.image}
                alt="Sofía Calvoe"
                className="w-full h-full object-contain object-left-bottom relative z-10"
              />
            </div>

            {/* A la DERECHA: Textos y descripciones (sin z-index en el wrapper para que la píldora z-10 quede detrás de Sofía z-20) */}
            <div className="relative ml-auto w-[62%] sm:w-[58%] lg:w-[56%] space-y-4 text-left my-auto pr-1">
              
              {/* Título con inclinación de -4.7deg y píldora redondeada #0660AE detrás de Sofía */}
              <div className="relative inline-block transform -rotate-[4.7deg] origin-left my-1 z-10 max-w-full">
                <div className="absolute inset-y-0 right-0 -left-[220px] bg-[#0660AE] rounded-full shadow-[0_5px_10px_rgba(0,0,0,0.25)] -z-10" />
                <span className="relative z-30 block text-[#FFF5E3] text-lg sm:text-xl font-black py-2 pl-4 pr-6 leading-tight">
                  “{sofia.title}”
                </span>
              </div>

              <p className="relative z-30 text-xs sm:text-sm font-medium text-[#193764] leading-snug">
                {sofia.subtitle}
              </p>

              <div className="relative z-30">
                <span className="block text-xs font-medium text-[#193764]">Disertante:</span>
                <span className="text-base sm:text-lg font-black text-[#0660AE] leading-tight block">{sofia.speaker}</span>
              </div>
            </div>

            {/* Sombreado en el borde inferior según CardEvento.svg */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] rounded-b-[50px] z-[25]"
              style={bottomShadingStyle}
              aria-hidden="true"
            />

            {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 color #FFF5E3 */}
            <div className="relative z-30 self-end flex flex-col items-end gap-2 pt-4">
              <button
                onClick={() => onOpenInscription(sofia.title)}
                className="bg-[#F38739] hover:bg-[#0660AE] text-[#FFF5E3] px-6 py-1.5 rounded-full font-bold text-sm sm:text-base shadow-[0_5px_3px_rgba(243,135,57,0.5)] active:scale-95 transition-all"
              >
                Anotarme
              </button>
              <span className="font-nunito font-black text-2xl lg:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                {sofia.date}
              </span>
            </div>

          </div>

          {/* Right Column: 2 filas con tarjetas de ~281px de alto en escritorio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top row: 2 cards de 281px */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 2: Eso no es humor (Fondo oscuro #0660AE, alto 281px en desktop) */}
              <div className="bg-[#0660AE] text-white rounded-[50px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_5px_20px_rgba(0,0,0,0.25)] relative overflow-hidden min-h-[281px] lg:h-[281px]">
                
                {/* Header Row */}
                <div className="relative flex items-center gap-2 mb-2 z-30">
                  <CategoryIcon type="taller" variant="card" className="w-6 h-6 shrink-0" color="#F38739" />
                  <span className="font-extrabold text-sm text-[#FFF5E3]">Taller</span>
                </div>

                {/* Content */}
                <div className="relative space-y-2 z-30 text-left">
                  {/* Título con fondo que continúa a la izquierda hasta el borde */}
                  <div className="relative inline-block transform -rotate-[4.7deg] origin-left my-1 z-10">
                    <div className="absolute inset-y-0 right-0 -left-[220px] bg-[#FFF5E3] rounded-full shadow-[0_5px_10px_rgba(0,0,0,0.25)] -z-10" />
                    <span className="relative z-10 block text-[#0660AE] text-lg sm:text-xl font-black py-1.5 pl-4 pr-6">
                      “{humor.title}”
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#FFF5E3]/95 font-medium leading-relaxed pr-2">
                    {humor.subtitle}
                  </p>
                </div>

                {/* Sombreado en el borde inferior */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[44%] rounded-b-[50px] z-[25]"
                  style={bottomShadingStyle}
                  aria-hidden="true"
                />

                {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 */}
                <div className="relative z-30 self-end flex flex-col items-end gap-1.5 pt-2">
                  <button
                    onClick={() => onOpenInscription(humor.title)}
                    className="bg-[#F38739] hover:bg-[#FFF5E3] hover:text-[#0660AE] text-[#FFF5E3] px-5 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-[0_5px_3px_rgba(243,135,57,0.5)] active:scale-95 transition-all"
                  >
                    Anotarme
                  </button>
                  <span className="font-nunito font-black text-xl lg:text-[28px] xl:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                    {humor.date}
                  </span>
                </div>

              </div>

              {/* Card 3: After Class (Fondo claro #FFF5E3, alto 281px en desktop) */}
              <div className="bg-[#FFF5E3] text-[#193764] rounded-[50px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_5px_20px_rgba(0,0,0,0.25)] relative overflow-hidden min-h-[281px] lg:h-[281px]">
                
                {/* Header Row */}
                <div className="relative flex items-center gap-2 mb-2 z-30">
                  <CategoryIcon type="recreacion" variant="card" className="w-6 h-6 shrink-0" color="#F38739" />
                  <span className="font-extrabold text-sm text-[#F38739]">Recreación</span>
                </div>

                {/* Content */}
                <div className="relative space-y-2 z-30 text-left">
                  {/* Título con fondo que continúa a la izquierda hasta el borde */}
                  <div className="relative inline-block transform -rotate-[4.7deg] origin-left my-1 z-10">
                    <div className="absolute inset-y-0 right-0 -left-[220px] bg-[#0660AE] rounded-full shadow-[0_5px_10px_rgba(0,0,0,0.25)] -z-10" />
                    <span className="relative z-10 block text-[#FFF5E3] text-lg sm:text-xl font-black py-1.5 pl-4 pr-6">
                      “{afterClass.title}”
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#193764] font-medium leading-relaxed pr-2">
                    {afterClass.subtitle}
                  </p>
                </div>

                {/* Sombreado en el borde inferior */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[44%] rounded-b-[50px] z-[25]"
                  style={bottomShadingStyle}
                  aria-hidden="true"
                />

                {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 */}
                <div className="relative z-30 self-end flex flex-col items-end gap-1.5 pt-2">
                  <button
                    onClick={() => onOpenInscription(afterClass.title)}
                    className="bg-[#F38739] hover:bg-[#0660AE] text-[#FFF5E3] px-5 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-[0_5px_3px_rgba(243,135,57,0.5)] active:scale-95 transition-all"
                  >
                    Anotarme
                  </button>
                  <span className="font-nunito font-black text-xl lg:text-[28px] xl:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                    {afterClass.date}
                  </span>
                </div>

              </div>

            </div>

            {/* Bottom Row: Ideathón express (Fondo oscuro #0660AE, alto 281px en desktop, imágenes fijas recortadas abajo con píldora detrás) */}
            <div className="bg-[#0660AE] text-white rounded-[50px] p-6 sm:p-7 relative overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.25)] min-h-[281px] lg:h-[281px] flex flex-col justify-between">
              
              {/* Header Row */}
              <div className="relative flex items-center gap-2 mb-2 z-30">
                <CategoryIcon type="grupal" variant="card" className="w-6 h-6 shrink-0" color="#F38739" />
                <span className="font-extrabold text-sm text-[#FFF5E3]">Actividad grupal</span>
              </div>

              {/* Imágenes de las disertantes a la IZQUIERDA pegadas y recortadas al borde inferior (z-20 para tapar el fondo de la píldora z-10) */}
              <div className="absolute left-0 bottom-0 w-44 sm:w-56 h-[85%] pointer-events-none z-20 overflow-hidden rounded-bl-[50px]">
                {/* Assets/degradado 3 7.png detrás por ser fondo oscuro, desbordando suavemente */}
                <div className="absolute -left-12 -bottom-12 w-72 h-72 pointer-events-none z-0 opacity-70 mix-blend-screen">
                  <img
                    src="/assets/degradado-oscuro.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-end -space-x-8 h-full relative z-10 pl-2">
                  <img
                    src={ideathon.mentors[0]}
                    alt="Mentora Ideathón"
                    className="w-24 sm:w-28 h-auto object-contain object-bottom drop-shadow-md z-10"
                  />
                  <img
                    src={ideathon.mentors[1]}
                    alt="Mentora Ideathón"
                    className="w-24 sm:w-28 h-auto object-contain object-bottom drop-shadow-md z-0"
                  />
                </div>
              </div>

              {/* A la DERECHA: Textos y descripciones (sin z-index en el wrapper para que la píldora z-10 quede detrás de las imágenes z-20) */}
              <div className="relative ml-auto w-full sm:w-[60%] lg:w-[58%] space-y-2 text-left my-auto pr-1">
                {/* Título con inclinación de -4.7deg y píldora redondeada #FFF5E3 detrás de las imágenes */}
                <div className="relative inline-block transform -rotate-[4.7deg] origin-left my-1 z-10">
                  <div className="absolute inset-y-0 right-0 -left-[220px] bg-[#FFF5E3] rounded-full shadow-[0_5px_10px_rgba(0,0,0,0.25)] -z-10" />
                  <span className="relative z-30 block text-[#0660AE] text-lg sm:text-xl font-black py-1.5 pl-4 pr-6">
                    “{ideathon.title}”
                  </span>
                </div>
                <p className="relative z-30 text-xs sm:text-sm text-[#FFF5E3]/95 font-medium leading-snug">
                  {ideathon.subtitle}
                </p>
              </div>

              {/* Sombreado en el borde inferior */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[44%] rounded-b-[50px] z-[25]"
                style={bottomShadingStyle}
                aria-hidden="true"
              />

              {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 */}
              <div className="relative z-30 self-end flex flex-col items-end gap-1.5 pt-2">
                <button
                  onClick={() => onOpenInscription(ideathon.title)}
                  className="bg-[#F38739] hover:bg-[#FFF5E3] hover:text-[#0660AE] text-[#FFF5E3] px-6 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-[0_5px_3px_rgba(243,135,57,0.5)] active:scale-95 transition-all"
                >
                  Anotarme
                </button>
                <span className="font-nunito font-black text-2xl lg:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
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
