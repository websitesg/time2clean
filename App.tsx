
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Features from './components/Features';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import MobileBottomNav from './components/MobileBottomNav';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative">
      <Header
        onOrderClick={() => setShowModal(true)}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Hero onOrderClick={() => setShowModal(true)} />
        <Calculator />
        <Features />
        <BeforeAfter />
        <Services />
        <Team />
        <Testimonials />
        <div id="order-form">
          <ContactForm />
        </div>
      </main>

      <Footer />
      <div className="hidden lg:block">
        <StickyCTA onOrderClick={() => setShowModal(true)} />
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        onOrderClick={() => setShowModal(true)}
        onMenuClick={toggleMenu}
        isMenuOpen={isMenuOpen}
      />

      {/* Simple Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ContactForm isModal onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
