import React, { useState } from 'react';
import SearchPill from './SearchPill';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#EE7B30] to-[#E56F24] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Pill */}
        <SearchPill text="Algunos testimonios reales..." />

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto mt-12 px-2 sm:px-12 lg:px-16">
          
          {/* Navigation Arrow Left - A los lados del carrusel */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:left-0 lg:-left-2 top-1/2 -translate-y-1/2 z-30 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#133E68] text-white flex items-center justify-center hover:bg-white hover:text-[#133E68] shadow-2xl active:scale-90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/40"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 sm:w-7 h-6 sm:h-7" />
          </button>

          {/* Navigation Arrow Right - A los lados del carrusel */}
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:right-0 lg:-right-2 top-1/2 -translate-y-1/2 z-30 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#133E68] text-white flex items-center justify-center hover:bg-white hover:text-[#133E68] shadow-2xl active:scale-90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/40"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="w-6 sm:w-7 h-6 sm:h-7" />
          </button>

          {/* Cards slider wrapper */}
          <div className="relative min-h-[500px] sm:min-h-[540px] flex items-center justify-center">
            
            {testimonials.map((item, idx) => {
              // Calculate relative offset from activeIndex
              let offset = idx - activeIndex;
              if (offset < -1) offset += testimonials.length;
              if (offset > 1) offset -= testimonials.length;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Hide other cards beyond left, center, right
              if (!isCenter && !isLeft && !isRight) return null;

              // Styles according to prompt:
              // - Central card has -5 degrees inclination: rotate(-5deg)
              // - Background cards: quotation marks Nunito Sans Regular 150 color #0660AE
              // - Central card: quotation marks Nunito Sans Regular 200 color #F38739
              const quoteFontFamily = "'Nunito Sans', 'Nunito', sans-serif";
              const quoteColor = isCenter ? '#F38739' : '#0660AE';

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isLeft) prevSlide();
                    if (isRight) nextSlide();
                  }}
                  style={{
                    transform: isCenter
                      ? 'translateX(0) scale(1) rotate(-5deg)'
                      : isLeft
                      ? 'translateX(-40%) scale(0.85) rotate(0deg)'
                      : 'translateX(40%) scale(0.85) rotate(0deg)',
                    zIndex: isCenter ? 25 : 10,
                    opacity: isCenter ? 1 : 0.65,
                    transition: 'all 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  className={`absolute w-[92%] sm:w-[440px] md:w-[480px] cursor-pointer select-none ${
                    isCenter ? 'cursor-default' : 'hover:opacity-85'
                  }`}
                >
                  <div
                    className={`bg-white text-[#133E68] rounded-[32px] p-6 sm:p-9 shadow-2xl border border-orange-100 relative min-h-[380px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                      isCenter ? 'ring-2 ring-white/60 shadow-orange-950/20' : ''
                    }`}
                  >
                    
                    {/* Opening Quote mark (Nunito Sans Regular 200 #F38739 central, 150 #0660AE fondo) - Completamente visible dentro de la tarjeta */}
                    <div
                      className="absolute top-1 sm:top-2 left-4 sm:left-6 select-none pointer-events-none font-normal leading-none opacity-90 z-0"
                      style={{
                        fontFamily: quoteFontFamily,
                        fontSize: isCenter ? '180px' : '140px',
                        color: quoteColor,
                        lineHeight: 0.85,
                      }}
                      aria-hidden="true"
                    >
                      “
                    </div>

                    {/* Testimonial Quote text */}
                    <div className="relative z-10 pt-16 sm:pt-20 pb-4">
                      <p className="text-base sm:text-lg font-bold text-[#133E68] leading-relaxed">
                        {item.quote}
                      </p>
                    </div>

                    {/* Footer Row: Author & Closing Quote mark */}
                    <div className="relative z-10 flex items-end justify-between border-t border-orange-100/70 pt-4 mt-2">
                      <div>
                        <span className="block text-base sm:text-lg font-black text-brand-orange">
                          {item.author}
                        </span>
                        <span className="block text-xs font-semibold text-[#133E68]/70">
                          {item.career}
                        </span>
                      </div>

                      {/* Closing Quote mark (Nunito Sans Regular 200 #F38739 central, 150 #0660AE fondo) */}
                      <div
                        className="select-none pointer-events-none font-normal leading-none opacity-90 translate-y-2"
                        style={{
                          fontFamily: quoteFontFamily,
                          fontSize: isCenter ? '180px' : '140px',
                          color: quoteColor,
                          lineHeight: 0.6,
                        }}
                        aria-hidden="true"
                      >
                        ”
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6 z-20 relative">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
