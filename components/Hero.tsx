import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Shield, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import heroBg from '../src/assets/images/hero_bg_aprons.png';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-[85vh] flex items-center">

      {/* Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-brand-100/30 rounded-full blur-[120px] mix-blend-multiply flex transition-all duration-1000"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-50/40 rounded-full blur-[120px] mix-blend-multiply flex transition-all duration-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left relative z-20"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-white/60 rounded-full text-brand-600 text-sm font-semibold mb-8 shadow-sm cursor-default select-none hidden md:inline-flex"
            >
              <Sparkles className="w-4 h-4 fill-brand-200 text-brand-500" />
              <span>Сервис премиум-класса</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Профессиональная<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">уборка квартир</span><br />
              в Москве
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto lg:mx-0">
              с гарантией идеальной чистоты и <strong>скидкой 1 500 рублей</strong> на первый заказ
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const calc = document.querySelector('.container.mx-auto.px-4.md\\:px-6')?.closest('section.py-20');
                  if (calc) {
                    calc.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onOrderClick();
                  }
                }}
                className="w-full sm:w-auto px-8 py-5 bg-brand-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:bg-brand-500 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 slant-x-12"></div>
                Рассчитать стоимость уборки
                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>

              <div className="text-sm font-bold text-slate-500 flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse outline outline-4 outline-green-100"></div>
                Свободны сейчас
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-600 font-bold flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-500" />
                Честные цены
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-500" />
                Опыт
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-500" />
                Гарантия
              </span>
            </p>
          </motion.div>

          {/* Right Visual - Blurred Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center -mr-0 lg:-mr-12"
          >
            <div className="relative w-full h-full max-w-2xl px-4 lg:px-0">
              <img
                src={heroBg}
                alt="Процесс уборки"
                className="w-full h-full object-cover object-center lg:object-right lg:scale-110"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
