import React from 'react';

export const categoryColorMap = {
  charla: '#F8CBB8',
  exposicion: '#FDDE52',
  taller: '#D4C6E0',
  grupal: '#B4DBAC',
  recreacion: '#A3BBD7',
};

export const categoryIconMap = {
  card: {
    charla: '/assets/card-charla.png',
    exposicion: '/assets/icono-exposicion.png',
    taller: '/assets/card-taller.png',
    grupal: '/assets/card-actividad-grupal.png',
    recreacion: '/assets/card-recreacion.png',
  },
  filter: {
    charla: '/assets/icono-charla.png',
    exposicion: '/assets/icono-exposicion.png',
    taller: '/assets/icono-taller.png',
    grupal: '/assets/icono-actividad-grupal.png',
    recreacion: '/assets/icono-recreacion.png',
  },
};

export default function CategoryIcon({
  type,
  variant = 'filter',
  className = 'w-4 h-4',
  color,
}) {
  const variantMap = categoryIconMap[variant] || categoryIconMap.filter;
  const src = variantMap[type];

  if (src) {
    return (
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={`object-contain select-none shrink-0 ${className}`}
      />
    );
  }

  const fillColor = color || categoryColorMap[type] || '#F8CBB8';
  return (
    <div
      className={`rounded-full shrink-0 ${className}`}
      style={{ backgroundColor: fillColor }}
    />
  );
}
