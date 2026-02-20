import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Award, Clock } from 'lucide-react';
import cleaner1 from '@/assets/images/team/cleaner_1.png';
import cleaner2 from '@/assets/images/team/cleaner_2.png';
import cleaner3 from '@/assets/images/team/cleaner_3.png';

const Team = () => {
    const team = [
        {
            name: "Анна Смирнова",
            role: "Старший клинер",
            experience: "5 лет",
            rating: 5.0,
            reviews: 142,
            image: cleaner3,
            specialty: "Генеральная уборка"
        },
        {
            name: "Дмитрий Ковалев",
            role: "Специалист химчистки",
            experience: "4 года",
            rating: 4.9,
            reviews: 98,
            image: cleaner2,
            specialty: "Химчистка мебели"
        },
        {
            name: "Елена Волкова",
            role: "Клинер-универсал",
            experience: "3 года",
            rating: 4.9,
            reviews: 115,
            image: cleaner1,
            specialty: "Поддерживающая уборка"
        }
    ];

    return (
        <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 translate-x-1/2"></div>
                <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-30 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-brand-600 mb-6"
                    >
                        <Shield size={16} className="fill-brand-100" />
                        <span className="font-bold text-xs uppercase tracking-wider">Наша команда</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
                    >
                        Профессионалы, которым <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">доверяют</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500"
                    >
                        Каждый сотрудник проходит строгий отбор, обучение и проверку службы безопасности.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 transform transition-transform duration-500 group-hover:-translate-y-2"></div>

                            <div className="relative p-6 flex flex-col items-center">
                                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-brand-100 to-accent-50 mb-6 relative group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                                    />
                                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md border border-slate-100">
                                        <Shield className="w-4 h-4 text-green-500 fill-green-100" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-brand-600 font-medium text-sm mb-4">{member.role}</p>

                                <div className="w-full bg-slate-50 rounded-xl p-4 mb-6">
                                    <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-3">
                                        <span className="text-sm text-slate-500">Рейтинг</span>
                                        <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md shadow-sm border border-slate-100">
                                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                            <span className="font-bold text-slate-900 text-sm">{member.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-500">Опыт</span>
                                        <span className="font-bold text-slate-900 text-sm">{member.experience}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 w-full">
                                    <div className="flex-1 bg-brand-50 rounded-lg py-2 px-3 flex flex-col items-center text-center">
                                        <Award className="w-5 h-5 text-brand-500 mb-1" />
                                        <span className="text-[10px] uppercase font-bold text-brand-400 tracking-wide">Топ-клинер</span>
                                    </div>
                                    <div className="flex-1 bg-accent-50 rounded-lg py-2 px-3 flex flex-col items-center text-center">
                                        <Clock className="w-5 h-5 text-accent-500 mb-1" />
                                        <span className="text-[10px] uppercase font-bold text-accent-400 tracking-wide">{member.reviews} отзывов</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
