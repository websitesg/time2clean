import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Leaf, Zap, Smartphone } from 'lucide-react';
import ecoImage from '@/assets/images/features/eco.png';

const Features = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Больше, чем просто <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-400">клининг</span>
          </h2>
          <p className="text-xl text-slate-500">
            Технологичный подход к чистоте. Мы объединили качественный сервис с удобством цифровых продуктов.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Large Card - Eco Friendly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-green-100 transition-colors duration-700"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Эко-безопасность</h3>
              <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                Используем только сертифицированные гипоаллергенные средства. Безопасно для детей и домашних животных.
              </p>
            </div>
            <div className="mt-8 relative h-40 rounded-2xl overflow-hidden">
              {/* Visual representation could be an image or abstract shape */}
              <div className="absolute inset-0 bg-green-50/50 flex items-center justify-center">
                <img src={ecoImage} className="opacity-80 hover:opacity-100 transition-opacity duration-700 w-full h-full object-cover" alt="Eco" />
              </div>
            </div>
          </motion.div>

          {/* Medium Card - Insurance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 bg-brand-600 rounded-[2.5rem] p-8 shadow-xl shadow-brand-900/20 text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-accent-500 opacity-100 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-1">
                <Shield className="w-12 h-12 mb-4 text-brand-200" />
                <h3 className="text-2xl font-bold mb-2">Страхование</h3>
                <p className="text-brand-100">Ответственность застрахована на 5 млн ₽.</p>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold border border-white/20">
                  AIG Insurance
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Card - Speed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-colors group"
          >
            <div className="w-12 h-12 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-4 group-hover:rotate-12 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Молниеносно</h3>
            <p className="text-slate-500">Приезд клинера возможен через 2 часа после заказа.</p>
          </motion.div>

          {/* Small Card - App */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 rounded-[2.5rem] p-8 shadow-xl shadow-slate-900/20 text-white group"
          >
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-white mb-4">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Удобство</h3>
            <p className="text-slate-400">Управление заказом в 2 клика через сайт или телефон.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
