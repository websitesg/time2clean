import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Check, Info } from 'lucide-react';

const Calculator: React.FC = () => {
    const [area, setArea] = useState(40);
    const [serviceType, setServiceType] = useState<'standard' | 'general' | 'after-repair'>('general');
    const [extras, setExtras] = useState<string[]>([]);

    const services = {
        standard: { name: 'Поддерживающая', pricePerSqm: 80, minPrice: 2000 },
        general: { name: 'Генеральная', pricePerSqm: 130, minPrice: 3500 },
        'after-repair': { name: 'После ремонта', pricePerSqm: 160, minPrice: 4500 },
    };

    const extraOptions = [
        { id: 'fridge', name: 'Холодильник', price: 500 },
        { id: 'oven', name: 'Духовка', price: 500 },
        { id: 'microwave', name: 'Микроволновка', price: 300 },
        { id: 'windows', name: 'Мытье окон', price: 400 }, // Per window logic could be complex, keeping simple flat rate for demo or assuming "balcony"
        { id: 'dishes', name: 'Посуда', price: 300 },
    ];

    const toggleExtra = (id: string) => {
        setExtras(prev =>
            prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
        );
    };

    const calculateTotal = () => {
        const basePrice = Math.max(area * services[serviceType].pricePerSqm, services[serviceType].minPrice);
        const extrasPrice = extras.reduce((sum, id) => {
            const extra = extraOptions.find(opt => opt.id === id);
            return sum + (extra ? extra.price : 0);
        }, 0);
        return basePrice + extrasPrice;
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                                Рассчитайте стоимость уборки за <span className="text-brand-600">1 минуту</span>
                            </h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                Честная цена без скрытых доплат. Выберите параметры вашей квартиры и узнайте точную стоимость. Мы работаем по фиксированным тарифам.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Оплата после уборки", desc: "Вы платите только когда проверите результат" },
                                    { title: "Безопасная химия", desc: "Используем гипоаллергенные средства Kärcher" },
                                    { title: "Страхование ответственности", desc: "Компенсируем любой ущерб, если что-то случится" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-600">
                                            <Check className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Calculator Card */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>

                            <div className="space-y-8">

                                {/* Service Type */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Тип уборки</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {Object.entries(services).map(([key, value]) => (
                                            <button
                                                key={key}
                                                onClick={() => setServiceType(key as any)}
                                                className={`py-3 px-4 rounded-xl text-sm font-bold transition-all border-2 ${serviceType === key
                                                        ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                                                        : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'
                                                    }`}
                                            >
                                                {value.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Range Slider */}
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Площадь квартиры</label>
                                        <span className="text-2xl font-black text-brand-600">{area} м²</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="20"
                                        max="150"
                                        step="1"
                                        value={area}
                                        onChange={(e) => setArea(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                        <span>20 м²</span>
                                        <span>150 м²</span>
                                    </div>
                                </div>

                                {/* Extras */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Дополнительные услуги</label>
                                    <div className="flex flex-wrap gap-3">
                                        {extraOptions.map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() => toggleExtra(option.id)}
                                                className={`py-2 px-4 rounded-full text-sm font-semibold transition-all border ${extras.includes(option.id)
                                                        ? 'border-brand-500 bg-brand-500 text-white shadow-md shadow-brand-500/20'
                                                        : 'border-slate-200 bg-white text-slate-600 hover:border-brand-200'
                                                    }`}
                                            >
                                                {option.name} <span className="opacity-70 ml-1 text-xs">+ {option.price}₽</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-slate-100 my-6"></div>

                                {/* Total & Action */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div>
                                        <p className="text-slate-500 text-sm font-medium mb-1">Итоговая стоимость:</p>
                                        <div className="text-4xl font-black text-slate-900 flex items-baseline gap-1">
                                            <motion.span
                                                key={calculateTotal()}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {calculateTotal().toLocaleString()}
                                            </motion.span>
                                            <span className="text-2xl text-slate-400">₽</span>
                                        </div>
                                    </div>

                                    <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/10 active:scale-95">
                                        Заказать уборку
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
