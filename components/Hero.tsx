import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Shield, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import heroBg from '../src/assets/images/hero_bg_aprons.png';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-24 overflow-hidden min-h-[85vh] flex items-center">

      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0 bg-white">
        <img
          src={heroBg}
          alt="Профессиональная уборка квартир"
          className="w-full h-full object-cover object-[80%_center] lg:object-right"
        />
        {/* Gradient Overlay for Text Readability - Only on the left half to preserve image contrast */}
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-2/3 lg:w-7/12"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="max-w-3xl">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left relative backdrop-blur-sm bg-white/20 p-8 md:p-12 rounded-[2rem] border border-white/40 shadow-2xl shadow-slate-900/5 lg:backdrop-blur-none lg:bg-transparent lg:p-0 lg:border-none lg:shadow-none"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-white/60 rounded-full text-brand-600 text-sm font-semibold mb-8 shadow-sm cursor-default select-none hidden md:inline-flex"
            >
              <Sparkles className="w-4 h-4 fill-brand-200 text-brand-500" />
              <span>Сервис премиум-класса</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Профессиональная<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">уборка квартир</span><br />
              в Москве
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 font-medium mb-10">
              с гарантией идеальной чистоты и <strong className="text-brand-600 bg-brand-50 px-2 rounded-md">скидкой 1 500 рублей</strong> на первый заказ
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mb-12 relative z-20">
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

              <div className="text-sm font-bold text-slate-800 flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/50">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                Свободны сейчас
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-800 font-bold flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <span className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-brand-600" />
                Честные цены
              </span>
              <span className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-brand-600" />
                Опыт
              </span>
              <span className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-brand-600" />
                Гарантия
              </span>
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
