import React from 'react';
import { Search, Mic, Camera } from 'lucide-react';

export default function SearchPill({ text, onSearch, placeholder, className = '' }) {
  return (
    <div className={`w-full max-w-2xl mx-auto mb-8 ${className}`}>
      <div className="flex items-center gap-3 bg-white/95 backdrop-blur px-5 py-3.5 rounded-full border border-orange-200/60 shadow-lg shadow-orange-950/5 hover:border-brand-orange/40 transition-all duration-300">
        <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white shrink-0 shadow-sm">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => onSearch && onSearch(e.target.value)}
          placeholder={placeholder || text}
          readOnly={!onSearch}
          className="w-full bg-transparent text-[#133E68] text-base md:text-lg font-bold placeholder-[#133E68]/80 outline-none cursor-default"
        />
        <div className="flex items-center gap-2 text-brand-blue/70 shrink-0">
          <button type="button" aria-label="Búsqueda por voz" className="p-1 hover:text-brand-orange transition-colors">
            <Mic className="w-4 h-4" />
          </button>
          <button type="button" aria-label="Búsqueda visual" className="p-1 hover:text-brand-orange transition-colors">
            <Camera className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
