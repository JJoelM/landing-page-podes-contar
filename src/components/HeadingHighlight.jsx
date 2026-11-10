import React from 'react';

/**
 * HeadingHighlight
 * Resaltador de títulos según especificación de Figma:
 * - Al inicio (izquierda): sobresale un "palito" hacia abajo y en su punta un círculo.
 * - Al final (derecha): sobresale un "palito" hacia arriba y en su punta un círculo.
 * - El color de los palitos y círculos coincide con el contexto (azul #133E68, naranja #EE7B30, etc.).
 */
export default function HeadingHighlight({
  children,
  color = '#133E68',
  bgColor = '#133E68',
  textColor = 'text-white',
  className = '',
}) {
  const isHexBg = bgColor.startsWith('#');

  return (
    <span
      className={`relative inline-block ${!isHexBg ? bgColor : ''} ${textColor} px-3 py-0.5 rounded shadow-sm mx-1 align-baseline ${className}`}
      style={isHexBg ? { backgroundColor: bgColor } : {}}
    >
      {/* Palito hacia abajo a la izquierda con circulito en el extremo inferior */}
      <span
        className="absolute left-0 top-0 bottom-[-14px] w-[3.5px] pointer-events-none select-none"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        <span
          className="absolute -left-[3.25px] -bottom-[1px] w-2.5 h-2.5 rounded-full shadow-xs"
          style={{ backgroundColor: color }}
        />
      </span>

      {/* Contenido resaltado */}
      <span className="relative z-10">{children}</span>

      {/* Palito hacia arriba a la derecha con circulito en el extremo superior */}
      <span
        className="absolute right-0 bottom-0 top-[-14px] w-[3.5px] pointer-events-none select-none"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        <span
          className="absolute -right-[3.25px] -top-[1px] w-2.5 h-2.5 rounded-full shadow-xs"
          style={{ backgroundColor: color }}
        />
      </span>
    </span>
  );
}
