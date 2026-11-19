import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function TestimonialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    author: '',
    career: 'Arquitectura',
    quote: '',
    anonymous: false,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.quote.trim()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      author: '',
      career: 'Arquitectura',
      quote: '',
      anonymous: false,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-blue/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFBF7] text-[#193764] rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl border border-orange-200 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#193764]/70 hover:text-brand-orange hover:bg-orange-100 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-[#193764]">
              ¡Gracias por compartir tu testimonio!
            </h3>

            <p className="text-sm sm:text-base font-medium text-[#193764]/90 max-w-sm mx-auto leading-relaxed">
              Tu mensaje fue recibido y pasará a evaluación por el equipo de la campaña antes de publicarse.
            </p>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="bg-brand-blue hover:bg-brand-orange text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 text-left">
              <span className="text-xs font-black tracking-widest text-brand-orange uppercase">
                Tu voz suma · Podés Contar
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#193764] mt-1">
                Dar mi testimonio
              </h3>
              <p className="text-xs sm:text-sm text-[#193764]/80 font-medium mt-1">
                Contanos tu experiencia para acompañar a otros estudiantes. Los testimonios enviados se evalúan antes de mostrarse en la web.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-extrabold text-[#193764] mb-1">
                  Nombre o seudónimo
                </label>
                <input
                  type="text"
                  disabled={formData.anonymous}
                  required={!formData.anonymous}
                  placeholder={formData.anonymous ? 'Se enviará como Anónimo' : 'Ej. Sofía o Seudónimo'}
                  value={formData.anonymous ? '' : formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full bg-[#FFF5EC] border border-orange-200 rounded-2xl px-4 py-2.5 text-sm text-[#193764] placeholder-[#193764]/50 focus:ring-2 focus:ring-brand-orange outline-none disabled:opacity-60"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.anonymous}
                  onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                  className="w-4 h-4 rounded border-orange-300 focus:ring-brand-orange accent-brand-orange"
                />
                <span className="text-xs font-bold text-[#193764]/85">
                  Prefiero enviarlo de forma anónima
                </span>
              </label>

              <div>
                <label className="block text-xs font-extrabold text-[#193764] mb-1">
                  Carrera o Pertenencia
                </label>
                <select
                  value={formData.career}
                  onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                  className="w-full bg-[#FFF5EC] border border-orange-200 rounded-2xl px-4 py-2.5 text-sm font-semibold text-[#193764] focus:ring-2 focus:ring-brand-orange outline-none cursor-pointer"
                >
                  <option value="Arquitectura">Arquitectura</option>
                  <option value="Diseño Gráfico">Diseño Gráfico</option>
                  <option value="Diseño Industrial">Diseño Industrial</option>
                  <option value="Docente / No Docente">Docente / No Docente</option>
                  <option value="Otra facultad UNNE">Otra facultad UNNE</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#193764] mb-1">
                  Tu testimonio
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Compartí qué viviste o qué te gustaría decirle a quien esté pasando por algo similar..."
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full bg-[#FFF5EC] border border-orange-200 rounded-2xl px-4 py-2.5 text-sm text-[#193764] placeholder-[#193764]/50 focus:ring-2 focus:ring-brand-orange outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-blue text-white py-3 rounded-full font-black text-base shadow-btn hover:shadow-btn-hover active:scale-95 transition-all cursor-pointer"
                >
                  Enviar para evaluación
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
