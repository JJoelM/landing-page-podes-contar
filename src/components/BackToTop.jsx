import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 280);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`back-to-top-btn fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 transition-opacity duration-300 cursor-pointer focus:outline-none ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img
        src="/assets/back-to-top.png"
        alt="Volver arriba"
        className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-[0_6px_14px_rgba(2,40,72,0.3)] select-none"
      />
    </button>
  );
}
