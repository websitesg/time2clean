import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import standardImage from '@/assets/images/services/standard.png';
import generalImage from '@/assets/images/services/general.png';
import repairImage from '@/assets/images/services/repair.png';

const Services = () => {
  const services = [
    {
      title: "Уборка квартир",
      subtitle: "Регулярная чистота",
      price: "от 3500 ₽",
      image: standardImage,
      benefits: [
        "Сухая и влажная уборка помещений",
        "Очистка всех поверхностей",
        "Удаление пятен от еды и напитков",
        "Мытье и дезинфекция санузлов",
        "Сбор и вывоз мусора"
      ],
      color: "from-brand-500 to-accent-400",
      delay: 0
    },
    {
      title: "Уборка после ремонта",
      subtitle: "Тотальное обновление",
      price: "от 9000 ₽",
      image: repairImage,
      video: true, // Placeholder for future video background
      benefits: [
        "Очистка от строительных смесей и пыли",
        "Удаление загрязнений с окон и мебели",
        "Чистка напольных покрытий с KARCHER",
        "Вынос строительного мусора из квартиры"
      ],
      color: "from-brand-600 to-violet-600",
      popular: true,
      delay: 0.1
    },
    {
      title: "Клининг офисов",
      subtitle: "Для бизнеса",
      price: "от 3500 ₽",
      image: generalImage,
      benefits: [
        "Сухая и влажная уборка полов",
        "Влажная уборка туалетов",
        "Удаление пыли с поверхностей мебели и оргтехники",
        "Мытье холодильника и микроволновки",
        "Сбор и вынос мусора"
      ],
      color: "from-slate-700 to-slate-900",
      delay: 0.2
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 mb-6 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-brand-500" />
              <span className="font-semibold text-xs uppercase tracking-wider">Выбор услуги</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Выберите свой <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-400">идеальный пакет</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <button className="group flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-brand-600 transition-colors">
              Весь прайс-лист
              <div className="bg-slate-100 rounded-full p-2 group-hover:bg-brand-50 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-5 h-5 pointer-events-none" />
              </div>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 h-[600px] flex flex-col ${service.popular ? 'lg:-mt-8 lg:h-[640px] ring-4 ring-brand-50/50' : ''}`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
              </div>

              {/* Special Badge for Popular */}
              {service.popular && (
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Star className="w-3 h-3 fill-white" />
                    Хит продаж
                  </div>
                </div>
              )}

              {/* Content Overlay */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4">
                    <p className="text-white/80 font-medium mb-1">{service.subtitle}</p>
                    <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
                    <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${service.color} font-bold text-lg mb-6 shadow-lg`}>
                      {service.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/90">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 rounded-2xl bg-white text-slate-900 font-bold text-lg hover:bg-brand-50 transition-colors flex items-center justify-center gap-2 group/btn">
                    Заказать
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <button className="text-slate-900 font-bold flex items-center gap-2 mx-auto">
            Посмотреть все услуги
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Helper components
const Star = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export default Services;
