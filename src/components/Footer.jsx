import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#133E68] text-white pt-16 pb-12 border-t border-brand-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src="/assets/logo-apaisado-footer.png"
                alt="Podés Contar Logo Oficial FAU UNNE"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs font-bold text-white/80 tracking-wide uppercase">
              Campaña de concientización sobre el ciberacoso
            </p>
            <p className="text-sm text-white/85 leading-relaxed font-medium max-w-sm">
              Espacio universitario de acompañamiento, prevención y escucha activa frente al ciberacoso y hostigamiento digital. Ningún estudiante camina solo en su vida universitaria.
            </p>
            <div className="pt-2 text-xs font-extrabold text-amber-300">
              Comunidad Universitaria de Cuidado - 2026
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-base font-black text-brand-orange uppercase tracking-wider">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-white/80">
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Consultas y Guías
                </a>
              </li>
              <li>
                <a href="#cronograma" className="hover:text-white transition-colors">
                  Talleres y Actividades
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Canales de Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Channels Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-black text-brand-orange uppercase tracking-wider">
              Canales Institucionales Oficiales
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="block font-bold text-white">Secretaría de Asuntos Estudiantiles</span>
                <a
                  href="mailto:secretariaestudiantil.fauunne@gmail.com"
                  className="text-white/80 hover:text-brand-orange transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-brand-orange" />
                  secretariaestudiantil.fauunne@gmail.com
                </a>
                <span className="text-white/70 flex items-center gap-1.5 mt-0.5">
                  <Phone className="w-3.5 h-3.5 shrink-0 text-brand-orange" />
                  Tel: 3624-753225
                </span>
              </div>

              <div>
                <span className="block font-bold text-white">Gabinete Interdisciplinario</span>
                <a
                  href="mailto:sistemadetutoriasfau@gmail.com"
                  className="text-white/80 hover:text-brand-orange transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-brand-orange" />
                  sistemadetutoriasfau@gmail.com
                </a>
              </div>

              <div>
                <span className="block font-bold text-white">Protocolo de Violencia de Género</span>
                <a
                  href="mailto:protocolofau@arq.unne.edu.ar"
                  className="text-white/80 hover:text-brand-orange transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-brand-orange" />
                  protocolofau@arq.unne.edu.ar
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Logos & Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-90">
            <span className="text-xl font-black tracking-widest text-white">TR≡S</span>
            <div className="flex items-center gap-2 text-white">
              <span className="font-bold text-xs uppercase tracking-tight">FAU UNNE</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-brand-blue font-black text-xs">SAE</span>
            </div>
            <span className="text-xs font-semibold text-white/90">
              Gabinete Interdisciplinario de la FAU
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/60 font-medium max-w-md">
            © 2026 Podés Contar - Programa Integral para la Convivencia Digital Universitaria. Todos los derechos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}
