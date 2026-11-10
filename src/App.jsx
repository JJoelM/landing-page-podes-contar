import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnersRibbon from './components/PartnersRibbon';
import FeaturedActivities from './components/FeaturedActivities';
import InteractiveSchedule from './components/InteractiveSchedule';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InscriptionModal from './components/InscriptionModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState('');

  const handleOpenInscription = (activityName = 'Jornada Completa Podés Contar') => {
    setSelectedActivity(activityName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF7] selection:bg-brand-orange selection:text-white">
      {/* Top sticky navigation */}
      <Navbar onOpenInscription={handleOpenInscription} />

      {/* Main landing content */}
      <main className="flex-1">
        {/* 1. Hero Section (Fondo Crema #FEF6EE) */}
        <Hero onOpenInscription={handleOpenInscription} />

        {/* 2. Ribbon 1: Corte sin costuras entre Hero (#FEF6EE) y Actividades (#EE7B30) */}
        <PartnersRibbon
          color="blue"
          topBg="#FEF6EE"
          bottomBg="#EE7B30"
        />

        {/* 3. Featured Activities (Fondo Naranja #EE7B30) */}
        <FeaturedActivities onOpenInscription={handleOpenInscription} />

        {/* 4. Interactive Schedule (Fondo Naranja #EE7B30) */}
        <InteractiveSchedule onOpenInscription={handleOpenInscription} />

        {/* 5. Ribbon 2: Corte sin costuras entre Cronograma (#EE7B30) y Quienes Somos (#FEF6EE) */}
        <PartnersRibbon
          color="orange"
          topBg="#EE7B30"
          bottomBg="#FEF6EE"
        />

        {/* 6. About section & Tools (Fondo Crema #FEF6EE) */}
        <AboutSection />

        {/* 7. Ribbon 3 con Fausti reposado: Corte sin costuras entre Quienes Somos (#FEF6EE) y Testimonios (#EE7B30) */}
        <PartnersRibbon
          color="blue"
          withFausti={true}
          topBg="#FEF6EE"
          bottomBg="#EE7B30"
        />

        {/* 8. Testimonials Section (Fondo Naranja #EE7B30) */}
        <TestimonialsSection />

        {/* 9. Contact & Location Section (Fondo Naranja #EE7B30) */}
        <ContactSection />
      </main>

      {/* Footer (Fondo Azul #133E68) */}
      <Footer />

      {/* Registration Modal Popup */}
      <InscriptionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultActivity={selectedActivity}
      />
    </div>
  );
}
