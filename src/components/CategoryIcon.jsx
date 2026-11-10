import React from 'react';

export const categoryColorMap = {
  charla: '#F8CBB8',
  exposicion: '#FDDE52',
  taller: '#D4C6E0',
  grupal: '#B4DBAC',
  recreacion: '#A3BBD7',
};

export default function CategoryIcon({ type, className = 'w-4 h-4', color }) {
  const fillColor = color || categoryColorMap[type] || '#F8CBB8';

  switch (type) {
    case 'charla':
      // 4-leaf flower/clover
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fillColor} aria-hidden="true">
          <circle cx="8" cy="8" r="4.5" />
          <circle cx="16" cy="8" r="4.5" />
          <circle cx="8" cy="16" r="4.5" />
          <circle cx="16" cy="16" r="4.5" />
          <circle cx="12" cy="12" r="3" fill="#FFF8EE" />
        </svg>
      );
    case 'exposicion':
      // Rounded square
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fillColor} aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        </svg>
      );
    case 'taller':
      // 4-point sparkle / diamond star
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fillColor} aria-hidden="true">
          <path d="M12 2 C12 7.5 16.5 12 22 12 C16.5 12 12 16.5 12 22 C12 16.5 7.5 12 2 12 C7.5 12 12 7.5 12 2 Z" />
        </svg>
      );
    case 'grupal':
      // 5-point star
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fillColor} aria-hidden="true">
          <path d="M12 2.5 L15 8.5 L21.5 9.5 L16.8 14.1 L17.9 20.5 L12 17.4 L6.1 20.5 L7.2 14.1 L2.5 9.5 L9 8.5 Z" />
        </svg>
      );
    case 'recreacion':
      // Rounded triangle
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fillColor} aria-hidden="true">
          <path d="M12 3.5 C12.5 2.6 13.8 2.6 14.3 3.5 L21.8 17.5 C22.3 18.5 21.6 19.8 20.4 19.8 L3.6 19.8 C2.4 19.8 1.7 18.5 2.2 17.5 Z" />
        </svg>
      );
    default:
      return (
        <div
          className={`rounded-full ${className}`}
          style={{ backgroundColor: fillColor }}
        />
      );
  }
}
