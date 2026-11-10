import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenInscription }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '¿Quiénes somos?', href: '#quienes-somos' },
    { label: 'Cronograma', href: '#cronograma' },
    { label: 'Consultas', href: '#consultas' },
    { label: 'Contactanos', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFBF7]/90 backdrop-blur-md border-b border-orange-100/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Oficial para la barra de navegación */}
        <a href="#" className="flex items-center group select-none">
          <img
            src="/assets/logo-barra-navegacion.png"
            alt="Logo Podés Contar"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#133E68] text-base font-bold hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenInscription()}
            className="bg-brand-orange hover:bg-brand-blue text-white px-7 py-2.5 rounded-full font-bold text-base shadow-btn hover:shadow-btn-hover active:scale-95 transition-all duration-200"
          >
            Inscribirme
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onOpenInscription()}
            className="bg-brand-orange text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-sm"
          >
            Inscribirme
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-blue hover:text-brand-orange"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-orange-100 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-brand-blue text-lg font-bold py-2 border-b border-orange-50 hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
