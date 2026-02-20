import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <img src={logo} alt="Time2Clean" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Профессиональный клининг, которому доверяют. Мы делаем чистоту доступной и технологичной.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all group shadow-sm">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all group shadow-sm">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900">Услуги</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-600 transition-colors flex items-center gap-2 group">Поддерживающая уборка <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors flex items-center gap-2 group">Генеральная уборка <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors flex items-center gap-2 group">Уборка после ремонта <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors flex items-center gap-2 group">Химчистка мебели <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors flex items-center gap-2 group">Мойка окон <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900">Клиентам</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Прайс-лист</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Преимущества</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Оферта</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900">Контакты</h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:+73510000000" className="flex items-start gap-4 text-slate-600 hover:text-brand-600 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                    <Phone className="w-5 h-5 text-slate-900 group-hover:text-brand-600 transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-1">Телефон</div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">+7 (351) 000-00-00</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1">Адрес</div>
                  <div className="text-sm font-bold text-slate-900">г. Название, ул. Название, д. 00, офис 00</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1">Email</div>
                  <div className="text-sm font-bold text-slate-900">info@cleaning.ru</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
          <div>2026 © ООО «Time2Clean» — Все права защищены</div>
          <div className="flex gap-6">
            <span>ИНН 0000000000</span>
            <span>ОГРН 0000000000000</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
