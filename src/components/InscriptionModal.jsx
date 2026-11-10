import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InscriptionModal({ isOpen, onClose, defaultActivity = '' }) {
  const [activity, setActivity] = useState(defaultActivity || 'Jornada Completa');
  const [formData, setFormData] = useState({
    fullName: '',
    career: 'Arquitectura',
    email: '',
    phone: '',
    participateDraw: true,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultActivity) {
      setActivity(defaultActivity);
    }
  }, [defaultActivity]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-blue/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-[#FFFBF7] text-[#133E68] rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl border border-orange-200 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#133E68]/70 hover:text-brand-orange hover:bg-orange-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-black text-brand-blue">
              ¡Inscripción confirmada!
            </h3>

            <p className="text-sm sm:text-base font-medium text-[#133E68]/85 max-w-sm mx-auto leading-relaxed">
              Te anotaste exitosamente a <span className="font-extrabold text-brand-orange">“{activity}”</span>. Te enviamos los detalles a <span className="font-bold">{formData.email}</span>.
            </p>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs font-bold text-amber-800 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>¡Ya estás participando en el sorteo de las jornadas!</span>
            </div>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="bg-brand-blue hover:bg-brand-orange text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-md transition-colors"
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
                Jornada FAU-UNNE 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-blue mt-1">
                Inscripción a Actividades
              </h3>
              <p className="text-xs sm:text-sm text-[#133E68]/75 font-medium mt-1">
                Completá tus datos para asegurar tu lugar presencial y participar de los sorteos.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Activity selector */}
              <div>
                <label className="block text-xs font-extrabold text-[#133E68] mb-1">
                  Actividad o Jornada
                </label>
                <div className="flex items-center gap-2 bg-[#FFF2E2] px-4 py-2.5 rounded-2xl border border-orange-200 font-bold text-sm text-brand-blue">
                  <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                  <input
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full bg-transparent outline-none font-bold"
                  />
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-extrabold text-[#133E68] mb-1">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#FFF5EC] border border-orange-200 rounded-2xl px-4 py-2.5 text-sm text-[#133E68] focus:ring-2 focus:ring-brand-orange outline-none"
                />
              </div>

              {/* Career */}
              <div>
                <label className="block text-xs font-extrabold text-[#133E68] mb-1">
                  Carrera o Pertenencia
                </label>
                <select
                  value={formData.career}
                  onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                  className="w-full bg-[#FFF5EC] border border-orange-200 rounded-2xl px-4 py-2.5 text-sm font-semibold text-[#133E68] focus:ring-2 focus:ring-brand-orange outline-none cursor-pointer"
                >
                  <option value="Arquitectura">Arquitectura</option>
                  <option value="Diseño Gráfico">Diseño Gráfico</option>
                  <option value="Diseño Industrial">Diseño Industrial</option>
                  <option value="Docente / No Docente">Docente / No Docente</option>
                  <option value="Otra facultad UNNE">Otra facultad UNNE</option>
                </select>
              </div>

              {/* Email & Phone grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-[#133E68] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alumno@comunidad.unne.edu.ar"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FFF5EC] border border-orange-200 rounded-2xl px-4 py-2.5 text-sm text-[#133E68] focus:ring-2 focus:ring-brand-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#133E68] mb-1">
                    WhatsApp (opcional)
                  </label>
                  <input
                    type="tel"
                    placeholder="3624..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FFF5EC] border border-orange-200 rounded-2xl px-4 py-2.5 text-sm text-[#133E68] focus:ring-2 focus:ring-brand-orange outline-none"
                  />
                </div>
              </div>

              {/* Sorteo checkbox */}
              <label className="flex items-center gap-2 pt-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.participateDraw}
                  onChange={(e) => setFormData({ ...formData, participateDraw: e.target.checked })}
                  className="w-4 h-4 text-brand-orange rounded border-orange-300 focus:ring-brand-orange accent-brand-orange"
                />
                <span className="text-xs font-bold text-[#133E68]/80">
                  Deseo participar en el sorteo de premios de las jornadas
                </span>
              </label>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-blue text-white py-3 rounded-full font-black text-base shadow-btn hover:shadow-btn-hover active:scale-95 transition-all"
                >
                  Confirmar mi Inscripción
                </button>
              </div>

            </form>
          </div>
        )}

      </div>

    </div>
  );
}
