import React, { useState } from 'react';
import SearchPill from './SearchPill';
import HeadingHighlight from './HeadingHighlight';
import { tools } from '../data/tools';
import { Ear, Scale, Users } from 'lucide-react';

export default function AboutSection() {
  const [selectedToolId, setSelectedToolId] = useState('escucha');

  const selectedTool = tools.find((t) => t.id === selectedToolId) || tools[0];

  const renderIcon = (type, className = 'w-6 h-6') => {
    switch (type) {
      case 'ear':
        return <Ear className={className} />;
      case 'scale':
        return <Scale className={className} />;
      case 'users':
        return <Users className={className} />;
      default:
        return <Users className={className} />;
    }
  };

  return (
    <section id="quienes-somos" className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-[#FEF6EE] text-[#133E68] overflow-visible">
      
      {/* Background ambient warm glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Campaign sub-header con logo apaisado oficial */}
        <div className="text-center mb-6">
          <div className="inline-flex flex-col items-center select-none">
            <img
              src="/assets/logo-apaisado.png"
              alt="Logo oficial Podés Contar"
              className="h-9 sm:h-12 md:h-13 w-auto object-contain"
            />
            <span className="text-xs sm:text-sm font-extrabold text-brand-blue/80 tracking-wide mt-1.5">
              Campaña de concientización sobre el ciberacoso
            </span>
          </div>
        </div>

        {/* Search Pill */}
        <SearchPill text="¿Quienes somos?" />

        {/* Top Grid: Narrative & Fausti #3 (Fausti con mate y laptop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue tracking-tight leading-tight">
              Una red universitaria{' '}
              <HeadingHighlight
                color="#EE7B30"
                bgColor="bg-orange-200/60"
                textColor="text-brand-orange"
              >
                libre de acoso
              </HeadingHighlight>
              , etiquetas denigrantes y hostigamiento en grupos.
            </h2>

            <p className="text-base sm:text-lg text-[#133E68]/90 font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Este proyecto nació para transformar los espacios digitales de la universidad en entornos seguros. Su objetivo es brindar a los estudiantes un lugar de visibilización, apoyo y contención para hablar sobre sus problemáticas sin riesgos.
            </p>
          </div>

          {/* Right Column: Fausti #3 con degradado 3 10.png detrás */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative">
            <div className="w-72 sm:w-88 md:w-96 lg:w-[420px] max-w-full relative">
              {/* Assets/degradado 3 10.png detrás de él */}
              <div className="absolute inset-0 -top-10 -left-10 -right-10 -bottom-10 pointer-events-none -z-10 opacity-75 mix-blend-multiply flex items-center justify-center">
                <img
                  src="/assets/degradado-claro.png"
                  alt=""
                  className="w-[125%] h-[125%] object-contain select-none pointer-events-none"
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

        {/* Tools Section (Frame 116 Design System) */}
        <div className="pt-8 border-t border-orange-200/60 mb-8 sm:mb-12">
          
          <span className="block text-xs sm:text-sm font-black tracking-widest text-brand-blue/80 mb-6 uppercase">
            HERRAMIENTAS QUE OFRECEMOS
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Tool Selection Buttons Column (Frame 116 Left) */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
              {tools.map((tool) => {
                const isSelected = selectedToolId === tool.id;

                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedToolId(tool.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-3xl font-black text-base sm:text-lg transition-all duration-200 text-left ${
                      isSelected
                        ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/25 scale-[1.02]'
                        : 'bg-white text-brand-blue hover:bg-brand-blue hover:text-white shadow-md shadow-slate-200/50 border border-orange-100'
                    }`}
                  >
                    <div className="p-2 rounded-2xl bg-black/5 shrink-0">
                      {renderIcon(tool.iconType, 'w-6 h-6')}
                    </div>
                    <span>{tool.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Tool Details Card (Frame 116 Right) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-100 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-orange-100 text-brand-orange">
                    {renderIcon(selectedTool.iconType, 'w-7 h-7')}
                  </div>
                  <h3 className="text-2xl font-black text-brand-blue">
                    {selectedTool.title}
                  </h3>
                </div>

                <p className="text-base sm:text-lg font-black text-[#133E68] leading-snug">
                  {selectedTool.shortDesc}
                </p>

                <p className="text-sm sm:text-base text-[#133E68]/85 font-medium leading-relaxed pt-2">
                  {selectedTool.details}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-black text-brand-orange">
                  Atención confidencial y gratuita para toda la comunidad FAU
                </span>
                <a
                  href="#contacto"
                  className="bg-brand-blue hover:bg-brand-orange text-white px-6 py-2 rounded-full font-black text-sm shadow-md transition-colors"
                >
                  Consultar ahora
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
