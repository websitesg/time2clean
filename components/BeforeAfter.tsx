import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
    const examples = [
        {
            before: 'images/before-after/living_room_dirty.png',
            after: 'images/before-after/living_room_clean.png',
            alt: 'Гостиная',
            title: 'Генеральная уборка гостиной',
            desc: "Удалили сложные пятна с ковролина и мягкой мебели"
        },
        {
            before: 'images/before-after/window_dirty.png?v=2',
            after: 'images/before-after/window_clean.png?v=2',
            alt: 'Окно',
            title: 'Мойка окон',
            desc: "Вернули прозрачность и блеск окнам после ремонта"
        },
        {
            before: 'images/before-after/kitchen_dirty.png?v=2',
            after: 'images/before-after/kitchen_clean.png?v=2',
            alt: 'Кухня',
            title: 'Уборка кухни',
            desc: "Обезжирили поверхности и технику"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-50 rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/3 -translate-y-1/3"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 mb-6 border border-brand-100"
                    >
                        <Sparkles size={16} />
                        <span className="font-bold text-xs uppercase tracking-wider">Результаты работы</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
                    >
                        До и <span className="text-brand-600">После</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500"
                    >
                        Убедитесь сами в качестве нашей уборки. Мы не просто моем, мы восстанавливаем чистоту.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {examples.map((example, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col gap-6 group"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white ring-1 ring-slate-100 transform group-hover:scale-[1.02] transition-transform duration-500">
                                <BeforeAfterSlider
                                    beforeImage={example.before}
                                    afterImage={example.after}
                                    altText={example.alt}
                                />
                            </div>
                            <div className="text-center px-4">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {example.title}
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    {example.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
