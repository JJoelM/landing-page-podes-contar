import React, { useState, useEffect, useRef } from 'react';
import SearchPill from './SearchPill';
import HeadingHighlight from './HeadingHighlight';
import ToolIcon from './ToolIcon';
import { tools } from '../data/tools';

export default function AboutSection() {
  const [selectedToolId, setSelectedToolId] = useState(null);
  const toolsContainerRef = useRef(null);

  const selectedTool = tools.find((t) => t.id === selectedToolId) || null;

  useEffect(() => {
    if (!selectedToolId) return;
    const handleClickOutside = (event) => {
      if (toolsContainerRef.current && !toolsContainerRef.current.contains(event.target)) {
        setSelectedToolId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedToolId]);

  return (
    <section id="quienes-somos" className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-[#FEF6EE] text-[#0660AE] overflow-visible">
      
      {/* Background ambient warm glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Search Pill encima del logo, como en Desktop - 2 */}
        <SearchPill text="¿Quienes somos?" />

        {/* Top Grid: Logo grande + Texto + Herramientas a la izquierda, Fausti con degradado 3 10 a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 sm:mb-12">
          
          {/* Left Column: Logo campaña (3x más grande) + Título (#193764) + Párrafo (#484848) y Herramientas debajo */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex flex-col items-center lg:items-start select-none mb-2">
              <img
                src="/assets/logo-apaisado.png"
                alt="Logo oficial Podés Contar"
                className="h-24 sm:h-28 lg:h-[126px] w-auto object-contain"
              />
              <span className="text-sm sm:text-base lg:text-lg font-extrabold text-brand-blue/85 tracking-wide mt-2">
                Campaña de concientización sobre el ciberacoso
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#193764] tracking-tight leading-tight">
              Una red universitaria{' '}
              <HeadingHighlight
                color="#F38739"
                bgColor="bg-orange-200/60"
                textColor="text-[#F38739]"
              >
                libre de acoso
              </HeadingHighlight>
            </h2>

            <p className="text-base sm:text-lg text-[#484848] font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Este proyecto nació para transformar los espacios digitales de la universidad en entornos seguros. Su objetivo es brindar a los estudiantes un lugar de visibilización, apoyo y contención para hablar sobre sus problemáticas sin riesgos.
            </p>

            {/* Herramientas que ofrecemos debajo del texto, lado a lado con Fausti en escritorio */}
            <div className="pt-6 border-t border-orange-200/60">
              <span className="block text-xs sm:text-sm font-black tracking-widest text-[#193764]/80 mb-4 uppercase">
                HERRAMIENTAS QUE OFRECEMOS
              </span>

              <div ref={toolsContainerRef} className="w-full">
                {selectedTool ? (
                  <button
                    type="button"
                    onClick={() => setSelectedToolId(null)}
                    className="w-full min-h-[121px] bg-[#FFF5E3] text-[#193764] rounded-[30px] px-6 py-5 shadow-xl border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left transition-all duration-300 hover:shadow-2xl cursor-pointer"
                    aria-expanded="true"
                  >
                    <div className="flex items-center gap-3.5 shrink-0 sm:w-[36%]">
                      <div className="text-[#0660AE] shrink-0">
                        <ToolIcon type={selectedTool.iconType} className="w-8 h-8" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-[#193764] leading-tight">
                        {selectedTool.title}
                      </h3>
                    </div>

                    <div className="sm:w-[64%] border-t sm:border-t-0 sm:border-l border-orange-200/70 pt-3 sm:pt-0 sm:pl-5">
                      <p className="text-sm font-bold text-[#484848] leading-relaxed">
                        {selectedTool.shortDesc}
                      </p>
                    </div>
                  </button>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                    {tools.map((tool) => (
                      <button
                        key={tool.id}
                        type="button"
                        onClick={() => setSelectedToolId(tool.id)}
                        aria-expanded="false"
                        className="group w-full h-[121px] flex items-center justify-center gap-3.5 px-5 rounded-[30px] bg-[#F38739] text-[#FFF5E3] hover:bg-[#0660AE] active:bg-[#FFF5E3] active:text-[#0660AE] active:shadow-inner shadow-[0_5px_12px_rgba(243,135,57,0.35)] font-bold text-sm sm:text-base transition-all duration-200 text-left cursor-pointer"
                      >
                        <ToolIcon type={tool.iconType} className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                        <span className="leading-snug">{tool.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Fausti #3 con degradado 3 10.png detrás */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative">
            <div className="w-72 sm:w-88 md:w-96 lg:w-[430px] max-w-full relative isolate">
              {/* Assets/degradado 3 10.png visible detrás de él */}
              <div className="absolute -inset-8 sm:-inset-12 pointer-events-none z-0 opacity-85 mix-blend-multiply flex items-center justify-center">
                <img
                  src="/assets/degradado-claro.png"
                  alt=""
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </div>
              <img
                src="/assets/fausti-pc.png"
                alt="Fausti sentado con termo, mate y laptop de la UNNE"
                className="w-full h-auto object-contain drop-shadow-xl select-none pointer-events-none relative z-10"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
