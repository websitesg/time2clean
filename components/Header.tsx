
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';

interface HeaderProps {
  onOrderClick: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick, isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isScrolled ? -100 : 0,
          opacity: isScrolled ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 lg:py-3 ${isScrolled ? 'pointer-events-none' : 'pointer-events-auto'} lg:pointer-events-auto lg:!opacity-100 lg:!translate-y-0`}
      >
        <div className={`container mx-auto px-4 md:px-6 transition-all duration-300 ${isScrolled ? 'max-w-6xl' : ''}`}>
          <div className={`
            flex items-center justify-between px-6 py-2.5 rounded-full border transition-all duration-300
            bg-white/10 border-transparent md:bg-white/5 backdrop-blur-sm
            lg:data-[scrolled=true]:glass-dark lg:data-[scrolled=true]:border-slate-700/50 lg:data-[scrolled=true]:shadow-2xl lg:data-[scrolled=true]:bg-slate-900/80 lg:data-[scrolled=true]:backdrop-blur-xl
          `}
            data-scrolled={isScrolled}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="Time2Clean" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </Link>

            {/* Desktop Nav */}
            <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 lg:group-data-[scrolled=true]:text-slate-300`}>
              {[
                { name: 'Главная', path: '/' },
                { name: 'Услуги', path: '/services' },
                { name: 'О нас', path: '/about' },
                { name: 'Контакты', path: '/contact' }
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="hover:text-brand-400 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className={`hidden md:flex flex-col items-end text-slate-900 lg:group-data-[scrolled=true]:text-white`}>
                <a href="tel:+73510000000" className="font-bold hover:text-brand-400 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-500" />
                  +7 (351) 000-00-00
                </a>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOrderClick}
                className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-full font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all text-sm"
              >
                Заказать
              </motion.button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`hidden lg:hidden p-2 rounded-lg transition-colors text-slate-900 hover:bg-slate-100 placeholder-class`}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[80px] z-40 lg:hidden px-4"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 overflow-hidden">
              <nav className="flex flex-col gap-2">
                {[
                  { name: 'Главная', path: '/' },
                  { name: 'Услуги', path: '/services' },
                  { name: 'О нас', path: '/about' },
                  { name: 'Контакты', path: '/contact' }
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-4 rounded-xl hover:bg-slate-50 text-slate-900 font-medium transition-colors flex items-center justify-between group"
                  >
                    {item.name}
                    <span className="text-slate-300 group-hover:text-brand-500 transition-colors">→</span>
                  </Link>
                ))}

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a href="tel:+73510000000" className="flex items-center justify-center gap-2 py-3 text-slate-500 font-semibold mb-3">
                    <Phone className="w-4 h-4" />
                    +7 (351) 000-00-00
                  </a>
                  <button
                    onClick={() => { setIsMenuOpen(false); onOrderClick(); }}
                    className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20"
                  >
                    Оставить заявку
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
