import React from 'react';

/**
 * Íconos personalizados del sistema de diseño de la campaña Podés Contar
 * para los botones de "Herramientas que ofrecemos" en AboutSection.
 * Usan currentColor para adaptarse automáticamente a los estados:
 * Inactivo (#FFFFFF), Hover (#FFFFFF), On click (#0660AE) y Seleccionado (#0660AE).
 */
export default function ToolIcon({ type, className = 'w-6 h-6' }) {
  switch (type) {
    case 'ear':
      return (
        <svg
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Contorno de oreja estilizada */}
          <path d="M8.5 11.5a5.5 5.5 0 0 1 11 0c0 2.5-1.5 3.8-2.5 5.1-.8 1-1.2 2-1.2 3.2a2.8 2.8 0 0 1-5.5.7" />
          <path d="M12 11.5a2.2 2.2 0 0 1 4.2.9c0 1.3-1.2 2.1-1.8 3.2" />
          {/* Ondas sonoras de escucha */}
          <path d="M5 9.5a8.5 8.5 0 0 0 0 7" />
          <path d="M22.5 9a8.5 8.5 0 0 1 0 8" />
        </svg>
      );
    case 'scale':
      return (
        <svg
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Eje central y base de balanza */}
          <path d="M14 4.5v18" />
          <path d="M9.5 22.5h9" />
          {/* Barra superior */}
          <path d="M5.5 8.5h17" />
          {/* Platillo izquierdo */}
          <path d="M5.5 8.5 3 15.5h5L5.5 8.5Z" />
          <path d="M2.5 15.5a3 3 0 0 0 6 0" />
          {/* Platillo derecho */}
          <path d="M22.5 8.5 20 15.5h5l-2.5-7Z" />
          <path d="M19.5 15.5a3 3 0 0 0 6 0" />
        </svg>
      );
    case 'users':
    default:
      return (
        <svg
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Persona principal */}
          <circle cx="11" cy="9.5" r="3.2" />
          <path d="M4.5 21.5c0-3.3 2.9-5.8 6.5-5.8s6.5 2.5 6.5 5.8" />
          {/* Persona acompañante */}
          <circle cx="19" cy="10.5" r="2.6" />
          <path d="M18.5 16c2.8.3 5 2.4 5 5.3" />
        </svg>
      );
  }
}
