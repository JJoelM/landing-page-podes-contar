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

  // Exact bottom shading gradient as specified in the uploaded image:
  // 56% -> #FFFFFF 100% | 70% -> #FFF5E3 100% | 100% -> #022848 50%
  const bottomShadingStyle = {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 56%, #FFF5E3 70%, rgba(2, 40, 72, 0.5) 100%)',
    mixBlendMode: 'multiply',
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#EE7B30] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Pill */}
        <SearchPill text="¿Cuáles son nuestras próximas actividades?" />

        {/* Section Title & Description */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Imperdibles{' '}
            <HeadingHighlight
              color="#133E68"
              bgColor="#133E68"
              textColor="text-white"
            >
              actividades del evento
            </HeadingHighlight>
          </h2>
          <p className="mt-4 text-white/95 text-base sm:text-lg font-medium leading-relaxed">
            ¡No te pierdas de las mejores actividades que traemos para vos! Desde charlas con especialistas reconocidos hasta actividades para divertirse con compañeros.
          </p>
        </div>

        {/* Bento Grid: 2 columns in desktop (Left: 5 cols double-height, Right: 7 cols with 2 rows of 281px cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Sofía Calvoe (Doble altura en escritorio ~586px = 281*2 + gap, fondo claro #FFF5E3) */}
          <div className="lg:col-span-5 bg-[#FFF5E3] text-[#133E68] rounded-[40px] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group min-h-[480px] lg:h-[586px]">
            
            {/* Top header row */}
            <div className="flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <CategoryIcon type="charla" className="w-5 h-5 shrink-0" color="#F8CBB8" />
                <span className="font-extrabold text-sm sm:text-base text-[#133E68]">Charla</span>
              </div>
              <span className="text-brand-orange font-extrabold text-sm sm:text-base tracking-wide">
                ¡Invitada estrella!
              </span>
            </div>

            {/* Imagen de Sofía Calvoe a la IZQUIERDA pegada y recortada al borde inferior (z-20 para tapar el fondo del título que va detrás) */}
            <div className="absolute left-0 bottom-0 w-48 sm:w-56 md:w-64 h-[75%] sm:h-[82%] pointer-events-none z-20">
              {/* Assets/degradado 3 10.png detrás de ella por ser fondo claro, desbordando suavemente */}
              <div className="absolute -left-16 -bottom-16 w-80 h-80 pointer-events-none z-0 opacity-80 mix-blend-multiply">
                <img
                  src="/assets/degradado-claro.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <img
                src={sofia.image}
                alt="Sofía Calvoe"
                className="w-full h-full object-contain object-left-bottom drop-shadow-xl relative z-10"
              />
            </div>

            {/* A la DERECHA: Textos y descripciones (nunca solapados por la imagen) */}
            <div className="z-20 ml-auto w-full sm:w-[58%] lg:w-[56%] space-y-4 text-left my-auto pr-1">
              
              {/* Título con inclinación de -5 grados y fondo que continúa a la izquierda desapareciendo detrás de la imagen */}
              <div className="relative inline-block transform -rotate-[5deg] origin-left my-1 z-10">
                <div className="absolute inset-y-0 right-0 -left-[600px] bg-[#133E68] rounded-r-2xl shadow-md -z-10" />
                <span className="relative z-10 block text-white text-lg sm:text-xl font-black py-2 pl-3 pr-5">
                  “{sofia.title}”
                </span>
              </div>

              <p className="text-xs sm:text-sm font-bold text-[#133E68]/90 leading-snug">
                {sofia.subtitle}
              </p>

              <div>
                <span className="block text-[11px] font-bold text-[#133E68]/60 uppercase tracking-wider">Disertante:</span>
                <span className="text-base sm:text-lg font-black text-[#133E68]">{sofia.speaker}</span>
              </div>
            </div>

            {/* Sombreado en el borde inferior según especificación de Figma */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[281px] rounded-b-[40px] z-10"
              style={bottomShadingStyle}
              aria-hidden="true"
            />

            {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 */}
            <div className="z-20 self-end flex flex-col items-end gap-1.5 pt-4">
              <button
                onClick={() => onOpenInscription(sofia.title)}
                className="bg-brand-orange hover:bg-brand-blue text-white px-6 py-2 rounded-full font-bold text-sm sm:text-base shadow-btn active:scale-95 transition-all"
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
              
              {/* Card 2: Eso no es humor (Fondo oscuro #0660AE / #133E68, alto 281px en desktop) */}
              <div className="bg-[#0660AE] text-white rounded-[40px] p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[281px] lg:h-[281px]">
                
                {/* Header Row */}
                <div className="flex items-center gap-2 mb-2 z-20">
                  <CategoryIcon type="taller" className="w-5 h-5 shrink-0" color="#D4C6E0" />
                  <span className="font-extrabold text-sm text-white">Taller</span>
                </div>

                {/* Content */}
                <div className="space-y-2 z-20 text-left">
                  {/* Título con fondo que continúa a la izquierda hasta chocarse con el borde de la card */}
                  <div className="relative inline-block transform -rotate-[5deg] origin-left my-1 z-10">
                    <div className="absolute inset-y-0 right-0 -left-[600px] bg-[#FFF5E3] rounded-r-2xl shadow-sm -z-10" />
                    <span className="relative z-10 block text-[#133E68] text-lg sm:text-xl font-black py-1.5 pl-3 pr-5">
                      “{humor.title}”
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed pr-2">
                    {humor.subtitle}
                  </p>
                </div>

                {/* Sombreado en el borde inferior */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[281px] rounded-b-[40px] z-10"
                  style={bottomShadingStyle}
                  aria-hidden="true"
                />

                {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 */}
                <div className="z-20 self-end flex flex-col items-end gap-1 pt-2">
                  <button
                    onClick={() => onOpenInscription(humor.title)}
                    className="bg-brand-orange hover:bg-white hover:text-brand-blue text-white px-5 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-btn active:scale-95 transition-all"
                  >
                    Anotarme
                  </button>
                  <span className="font-nunito font-black text-xl lg:text-[28px] xl:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                    {humor.date}
                  </span>
                </div>

              </div>

              {/* Card 3: After Class (Fondo claro #FFF5E3, alto 281px en desktop) */}
              <div className="bg-[#FFF5E3] text-[#133E68] rounded-[40px] p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[281px] lg:h-[281px]">
                
                {/* Header Row */}
                <div className="flex items-center gap-2 mb-2 z-20">
                  <CategoryIcon type="recreacion" className="w-5 h-5 shrink-0" color="#A3BBD7" />
                  <span className="font-extrabold text-sm text-[#133E68]">Recreación</span>
                </div>

                {/* Content */}
                <div className="space-y-2 z-20 text-left">
                  {/* Título con fondo que continúa a la izquierda hasta chocarse con el borde de la card */}
                  <div className="relative inline-block transform -rotate-[5deg] origin-left my-1 z-10">
                    <div className="absolute inset-y-0 right-0 -left-[600px] bg-[#133E68] rounded-r-2xl shadow-sm -z-10" />
                    <span className="relative z-10 block text-white text-lg sm:text-xl font-black py-1.5 pl-3 pr-5">
                      “{afterClass.title}”
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#133E68]/90 font-medium leading-relaxed pr-2">
                    {afterClass.subtitle}
                  </p>
                </div>

                {/* Sombreado en el borde inferior */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[281px] rounded-b-[40px] z-10"
                  style={bottomShadingStyle}
                  aria-hidden="true"
                />

                {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 */}
                <div className="z-20 self-end flex flex-col items-end gap-1 pt-2">
                  <button
                    onClick={() => onOpenInscription(afterClass.title)}
                    className="bg-brand-orange hover:bg-brand-blue text-white px-5 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-btn active:scale-95 transition-all"
                  >
                    Anotarme
                  </button>
                  <span className="font-nunito font-black text-xl lg:text-[28px] xl:text-[32px] text-[#FFF5E3] leading-none tracking-tight">
                    {afterClass.date}
                  </span>
                </div>

              </div>

            </div>

            {/* Bottom Row: Ideathón express (Fondo oscuro #0660AE / #133E68, alto 281px en desktop, imagen fija recortada abajo con degradado oscuro detrás) */}
            <div className="bg-[#0660AE] text-white rounded-[40px] p-6 sm:p-7 relative overflow-hidden shadow-xl min-h-[281px] lg:h-[281px] flex flex-col justify-between">
              
              {/* Header Row */}
              <div className="flex items-center gap-2 mb-2 z-20">
                <CategoryIcon type="grupal" className="w-5 h-5 shrink-0" color="#B4DBAC" />
                <span className="font-extrabold text-sm text-white">Actividad grupal</span>
              </div>

              {/* Imágenes de las disertantes a la IZQUIERDA pegadas y recortadas al borde inferior (z-20 para tapar el fondo del título que va detrás) */}
              <div className="absolute left-0 bottom-0 w-44 sm:w-56 h-[85%] pointer-events-none z-20">
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

              {/* A la DERECHA: Textos y descripciones (nunca solapados con las imágenes) */}
              <div className="z-20 ml-auto w-full sm:w-[60%] lg:w-[58%] space-y-2 text-left my-auto pr-1">
                {/* Título con inclinación de -5 grados y fondo que continúa a la izquierda desapareciendo detrás de las imágenes */}
                <div className="relative inline-block transform -rotate-[5deg] origin-left my-1 z-10">
                  <div className="absolute inset-y-0 right-0 -left-[600px] bg-[#FFF5E3] rounded-r-2xl shadow-sm -z-10" />
                  <span className="relative z-10 block text-[#133E68] text-lg sm:text-xl font-black py-1.5 pl-3 pr-5">
                    “{ideathon.title}”
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/95 font-medium leading-snug">
                  {ideathon.subtitle}
                </p>
              </div>

              {/* Sombreado en el borde inferior */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[281px] rounded-b-[40px] z-10"
                style={bottomShadingStyle}
                aria-hidden="true"
              />

              {/* Abajo a la derecha FIXED: Botón encima de fecha y hora en Nunito Bold 32 */}
              <div className="z-20 self-end flex flex-col items-end gap-1 pt-2">
                <button
                  onClick={() => onOpenInscription(ideathon.title)}
                  className="bg-brand-orange hover:bg-white hover:text-brand-blue text-white px-6 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-btn active:scale-95 transition-all"
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
