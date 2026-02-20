import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import avatar3 from '@/assets/images/avatars/3.png';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: "Анна Петрова",
      area: "Название р-н",
      text: "Заказывала генеральную уборку после переезда. Отмыли всё до блеска, даже духовку, которую я думала уже не спасти. Рекомендую!",
      rating: 5,
      avatar: avatar1
    },
    {
      name: "Михаил Волков",
      area: "ЖК Название",
      text: "Вызывал ребят на уборку после ремонта. Пыль была везде. Приехали с мощным пылесосом и за 5 часов сделали квартиру жилой. Сервис на высоте.",
      rating: 5,
      avatar: avatar2
    },
    {
      name: "Елена С.",
      area: "Название р-н",
      text: "Пользуюсь поддерживающей уборкой раз в неделю. Очень удобно, освободилось куча времени. Клинеры всегда вежливые и аккуратные.",
      rating: 5,
      avatar: avatar3
    }
  ];

  const next = () => setCurrent((current + 1) % reviews.length);
  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-100 rounded-full blur-[150px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900"
          >
            Нам <span className="text-brand-600">доверяют</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            Уже более 1000 жителей города стали нашими постоянными клиентами
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden min-h-[400px]">
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[3rem] p-8 md:p-16 relative shadow-2xl">
                  <div className="absolute top-8 right-8 text-brand-100 pointer-events-none">
                    <Quote className="w-24 h-24 fill-current" />
                  </div>

                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(reviews[current].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-xl md:text-3xl text-slate-700 italic mb-12 leading-relaxed font-medium relative z-10">
                    "{reviews[current].text}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-brand-300 to-purple-300">
                      <img
                        src={reviews[current].avatar}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                        alt={reviews[current].name}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-slate-900">{reviews[current].name}</div>
                      <div className="text-brand-600 font-medium text-sm">{reviews[current].area}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center md:justify-between items-center mt-12 px-4 gap-4">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-600' : 'w-2 bg-slate-300'}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="p-4 rounded-full bg-white border border-slate-200 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-lg hover:shadow-brand-500/30 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={next}
                className="p-4 rounded-full bg-white border border-slate-200 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-lg hover:shadow-brand-500/30 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
