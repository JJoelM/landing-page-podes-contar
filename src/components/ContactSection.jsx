import React, { useState } from 'react';
import SearchPill from './SearchPill';
import { Send, CheckCircle2, Clock, MapPin, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
      });
    }, 600);
  };

  return (
    <section id="contacto" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#E56F24] to-[#D9671E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Pill */}
        <SearchPill text="¿Dónde podés encontrarnos?" />

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* Left Card: Location & Hours (Slice 5 Left) */}
          <div className="lg:col-span-6 bg-[#FFFBF7] text-[#133E68] rounded-3xl p-6 sm:p-8 shadow-2xl border border-orange-100 flex flex-col justify-between">
            
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs font-black tracking-wider text-brand-orange uppercase">
                  Sede Presencial
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-blue mt-1">
                  Facultad de Arquitectura y Urbanismo
                </h3>
                <p className="text-base sm:text-lg font-bold text-[#133E68]/80">
                  Secretaría de Asuntos Estudiantiles (SAE)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF5EC] border border-orange-200/50 space-y-2">
                <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Horarios de atención</span>
                </div>
                <p className="text-sm sm:text-base font-extrabold text-brand-blue">
                  Lunes a Viernes: 9:00 a 12:00 hs y de 17:00 a 20:00 hs
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#133E68]/70 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Campus Resistencia - Av. Las Heras 727, H3500 Resistencia, Chaco</span>
                </div>
              </div>
            </div>

            {/* Map Preview with link to Google Maps */}
            <div className="relative rounded-2xl overflow-hidden border border-orange-200 shadow-inner group">
              <img
                src="/assets/map-unne.png"
                alt="Mapa Campus UNNE Resistencia"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <a
                href="https://maps.google.com/?q=Facultad+de+Arquitectura+y+Urbanismo+UNNE+Resistencia"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-brand-blue/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold text-sm backdrop-blur-xs transition-opacity duration-200"
              >
                <span className="bg-brand-blue px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  Abrir en Google Maps
                </span>
              </a>
            </div>

          </div>

          {/* Right Card: Dejanos tu consulta (Slice 5 Right) */}
          <div className="lg:col-span-6 bg-[#FFFBF7] text-[#133E68] rounded-3xl p-6 sm:p-8 shadow-2xl border border-orange-100 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-2 text-brand-orange mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-black tracking-wider uppercase">Canal Seguro & Confidencial</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-brand-blue mb-2">
                Dejanos tu consulta
              </h3>

              <p className="text-sm sm:text-base text-[#133E68]/85 font-medium leading-relaxed mb-6">
                Podés usar un seudónimo si lo preferís. Ningún dato será compartido sin tu consentimiento explícito.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 my-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-black text-emerald-800">
                    ¡Tu consulta ha sido enviada!
                  </h4>
                  <p className="text-sm font-medium text-emerald-700 leading-relaxed max-w-md mx-auto">
                    El equipo del Gabinete Interdisciplinario y la SAE se pondrán en contacto con vos a la brevedad con estricta confidencialidad.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs font-bold text-brand-blue hover:underline pt-2 inline-block"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Name or pseudonym */}
                  <div>
                    <label className="block text-xs sm:text-sm font-extrabold text-[#133E68] mb-1.5">
                      Nombre o seudónimo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Alex o Anónimo"
                      className="w-full bg-[#FFF5EC] border border-orange-200/80 rounded-2xl px-4 py-3 text-sm text-[#133E68] placeholder-[#133E68]/50 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-extrabold text-[#133E68] mb-1.5">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="estudiante@gmail.com"
                      className="w-full bg-[#FFF5EC] border border-orange-200/80 rounded-2xl px-4 py-3 text-sm text-[#133E68] placeholder-[#133E68]/50 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-extrabold text-[#133E68] mb-1.5">
                      Consulta o situación que querés compartir
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Contanos qué está pasando, qué dudas tenés o cómo podemos acompañarte..."
                      className="w-full bg-[#FFF5EC] border border-orange-200/80 rounded-2xl px-4 py-3 text-sm text-[#133E68] placeholder-[#133E68]/50 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-brand-orange hover:bg-brand-blue text-white px-9 py-3 rounded-full font-black text-base shadow-btn hover:shadow-btn-hover active:scale-95 transition-all flex items-center gap-2"
                    >
                      <span>{loading ? 'Enviando...' : 'Enviar'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
