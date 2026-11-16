import React from 'react';

/**
 * Íconos personalizados del sistema de diseño de la campaña Podés Contar
 * para los botones de "Herramientas que ofrecemos" en AboutSection.
 * Usan currentColor para adaptarse automáticamente a los estados:
 * Inactivo (#FFFFFF), Hover (#FFFFFF), On click (#0660AE) y Seleccionado (#0660AE).
 */
export default function ToolIcon({ type, className = 'w-7 h-7' }) {
  switch (type) {
    // IcoOido
    case 'ear':
      return (
        <svg
          viewBox="0 0 28 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Contorno principal de la oreja */}
          <path d="M5 12.5a7.5 7.5 0 0 1 15 0c0 3.2-1.8 4.8-3.1 6.4-1 1.2-1.4 2.4-1.4 3.8a3.8 3.8 0 0 1-7.4 1" />
          {/* Pliegue interno */}
          <path d="M9 12.8a3.6 3.6 0 0 1 7.1.8c0 1.6-1.4 2.6-2.4 3.8" />
          <path d="M9 17.5h2.8" />
          {/* Onda externa derecha */}
          <path d="M21 5.5a11.5 11.5 0 0 1 0 17" />
        </svg>
      );
    // IcoBalanza
    case 'scale':
      return (
        <svg
          viewBox="0 0 34 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Eje central y base arqueada */}
          <path d="M17 3.5v22" />
          <path d="M9.5 28.5h15" />
          <path d="M9.5 28.5c1.8-2.2 4.5-3.2 7.5-3.2s5.7 1 7.5 3.2" />
          {/* Barra superior curva */}
          <path d="M6.5 9.5c3.2-2.2 6.8-3 10.5-3s7.3.8 10.5 3" />
          {/* Platillo izquierdo */}
          <path d="M6.5 9.5 3.5 18h6l-3-8.5Z" />
          <path d="M3 18a3.5 3.5 0 0 0 7 0" />
          {/* Platillo derecho */}
          <path d="M27.5 9.5 24.5 18h6l-3-8.5Z" />
          <path d="M24 18a3.5 3.5 0 0 0 7 0" />
        </svg>
      );
    // IcoGrupo
    case 'users':
    default:
      return (
        <svg
          viewBox="0 0 40 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Persona central (más grande) */}
          <circle cx="20" cy="7.5" r="4" />
          <path d="M12.5 22.5c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7" />
          {/* Persona izquierda */}
          <circle cx="9.5" cy="9.5" r="3" />
          <path d="M3.5 20.5c.4-3.1 2.8-5.2 6-5.2 1.3 0 2.4.3 3.4.9" />
          {/* Persona derecha */}
          <circle cx="30.5" cy="9.5" r="3" />
          <path d="M36.5 20.5c-.4-3.1-2.8-5.2-6-5.2-1.3 0-2.4.3-3.4.9" />
        </svg>
      );
  }
}
