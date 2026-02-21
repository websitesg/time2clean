import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Shield, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import heroImage from '@/assets/images/hero_image.png';
import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import avatar3 from '@/assets/images/avatars/3.png';

const avatars = [avatar1, avatar2, avatar3];

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Dust particles state
  const [particles, setParticles] = useState<{ id: number, x: number, y: number, size: number }[]>([]);

  useEffect(() => {
    // Generate random dust particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-[85vh] flex items-center">

      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-brand-100/30 rounded-full blur-[120px] mix-blend-multiply transition-all duration-1000"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-50/40 rounded-full blur-[120px] mix-blend-multiply transition-all duration-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left relative"
          >
            {/* Dust Animation Overlay on Text Area (Clearing effect) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
              <AnimatePresence>
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0.4, scale: 1 }}
                    animate={{
                      opacity: [0.4, 0.8, 0],
                      scale: [1, 0],
                      x: Math.random() * 50 - 25, // drift
                      y: Math.random() * -50 - 20 // float up
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 3
                    }}
                    className="absolute rounded-full bg-slate-200"
                    style={{
                      left: `${p.x}%`,
                      top: `${p.y}%`,
                      width: p.size,
                      height: p.size
                    }}
                  />
                ))}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-white/60 rounded-full text-brand-600 text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-all cursor-default select-none animate-float"
            >
              <Sparkles className="w-4 h-4 fill-brand-200 text-brand-500" />
              <span>Сервис премиум-класса</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight max-w-4xl mx-auto lg:mx-0">
              Профессиональная<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-500 to-brand-400 animate-shimmer bg-[length:200%_auto]">уборка квартир</span><br />
              в Москве
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto lg:mx-0">
              с гарантией идеальной чистоты и <strong>скидкой 1 500 рублей</strong> на первый заказ
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-20 relative z-20">
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  // User wants this to scroll to calculator, but since they don't have refs setup,
                  // and we have `onOrderClick` opening the modal, we can scroll to the calculator.
                  const calc = document.querySelector('.container.mx-auto.px-4.md\\:px-6')?.closest('section.py-20');
                  if (calc) {
                    calc.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onOrderClick(); // Fallback to modal if calculator not found instantly
                  }
                }}
                className="w-full sm:w-auto px-10 py-5 bg-brand-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 hover:bg-brand-500 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 slant-x-12"></div>
                Рассчитать стоимость уборки
                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>

              <div className="text-sm font-medium text-slate-400 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                2 клинера свободны сейчас
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Abstract/Clean/Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 relative h-[500px] md:h-[600px] w-full flex items-center justify-center"
          >
            {/* Main Image Container with Glass Effect */}
            <motion.div
              style={{ y: y1 }}
              className="relative z-10 w-full max-w-lg aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/50 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              <img
                src={heroImage}
                className="w-full h-full object-cover"
                alt="Clean Interior"
              />

              {/* Glass Overlay Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-xl border border-white/60 p-5 rounded-3xl shadow-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2.5 rounded-full text-green-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Результат</p>
                    <p className="font-bold text-slate-800">Безупречная чистота</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div className="text-right">
                  <p className="text-2xl font-black text-brand-600">100%</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Glass Elements */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -right-8 top-20 w-48 bg-white/80 backdrop-blur-lg border border-white p-4 rounded-2xl shadow-xl shadow-brand-900/5 z-20 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {avatars.map((avatar, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={avatar} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-600">+1.2k</div>
              </div>
              <div className="text-xs text-slate-500 font-medium">Довольных клиентов<br />в вашем районе</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 bottom-32 w-40 bg-white/90 backdrop-blur-md border border-white p-4 rounded-2xl shadow-xl shadow-brand-900/5 z-20 hidden md:flex items-center gap-3"
            >
              <div className="bg-accent-100 p-2.5 rounded-full text-accent-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400">Время</p>
                <p className="font-bold text-slate-800">от 2 часов</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
