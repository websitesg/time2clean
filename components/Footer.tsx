import React from 'react';
import { Phone, ArrowUp, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#242424] text-white pt-10 pb-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Column 1 */}
          <div>
            <h4 className="font-medium text-[15px] mb-4 text-[#7ca03d]">ООО «Тайм2Клин ПРО»</h4>
            <div className="text-[#e0e0e0] text-[13px] leading-relaxed mb-6 space-y-1">
              <p>Юридический адрес: ул. тер. ЖК</p>
              <p>«Бутово парк», д. 23, офис 28</p>
              <p>рп Бутово, г. Видное, Ленинский р-</p>
              <p>н, Московская область, 142702</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-medium text-[15px] mb-4 text-[#7ca03d] leading-tight">
              Клининг в Москве и<br />Московской области
            </h4>
            <ul className="space-y-3 text-[13px] text-[#e0e0e0]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#7ca03d] rounded-full shrink-0"></span>
                <Link to="/services" className="hover:text-[#7ca03d] transition-colors">Уборка коттеджа</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#7ca03d] rounded-full shrink-0"></span>
                <Link to="/services" className="hover:text-[#7ca03d] transition-colors">Клининг офисов</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#7ca03d] rounded-full shrink-0"></span>
                <Link to="/faq" className="hover:text-[#7ca03d] transition-colors">Часто задаваемые вопросы</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#7ca03d] rounded-full shrink-0"></span>
                <Link to="/privacy" className="hover:text-[#7ca03d] transition-colors">Политика конфиденциальности</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center lg:items-center text-center">
            <div className="mb-4">
              {/* As requested logo from the snapshot: "Time2Clean.pro Образовательный центр" */}
              <Link to="/" className="inline-block group">
                {/* Placeholder for the specific lemon logo since we don't have the exact asset loaded, or we use main logo. */}
                {/* Assuming the main logo 'logo.png' is the one they want or is similar enough for the root. 
                     The design has a bright lemon with text. */}
                <img src={logo} alt="Time2Clean" className="h-[75px] w-auto object-contain mx-auto group-hover:scale-105 transition-transform" />
              </Link>
            </div>

            <div className="text-[#7ca03d] text-[13px] mb-1">Time2Clean.pro</div>
            <div className="text-white text-[12px] mb-4">Образование по клинингу</div>

            {/* Payment Logos & QR */}
            <div className="flex items-center gap-4 justify-center mt-2">
              {/* МИР Logo emulation */}
              <div className="flex text-lg font-black italic tracking-tighter">
                <span className="text-[#0faf62]">М</span>
                <span className="text-[#0faf62]">И</span>
                <span className="text-[#0364b4]">Р</span>
              </div>

              {/* СБП Logo emulation */}
              <div className="flex items-center">
                <div className="flex relative w-[24px] h-[24px] mr-1">
                  <div className="absolute top-[2px] right-[4px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-[#f99b1c] rotate-[60deg]"></div>
                  <div className="absolute bottom-[2px] right-[4px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-[#00b4e6] rotate-[180deg]"></div>
                  <div className="absolute top-[7px] left-[2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-[#4caf50] -rotate-[60deg]"></div>
                </div>
                <span className="font-bold text-[13px] tracking-tight">сбп</span>
              </div>

              {/* QR Code emulation */}
              <div className="flex items-center bg-white text-black p-1 rounded-sm">
                <div className="w-5 h-5 flex flex-wrap content-between justify-between">
                  <div className="w-2 h-2 border border-black p-[1px]"><div className="w-full h-full bg-black"></div></div>
                  <div className="w-2 h-2 border border-black p-[1px]"><div className="w-full h-full bg-black"></div></div>
                  <div className="w-2 h-2 border border-black p-[1px]"><div className="w-full h-full bg-black"></div></div>
                  <div className="w-2 h-2 bg-black"></div>
                </div>
                <div className="flex flex-col ml-1 text-[7px] leading-[7px] font-bold">
                  <span>QR</span>
                  <span>SCAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1c1c1c] py-4 relative border-t border-[#111]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center h-full">
          <div className="text-[12px] text-[#7ca03d] flex flex-wrap justify-center md:justify-start gap-1">
            <span>©2018-2024 Time 2 Clean PRO. Все права защищены.</span>
            <span className="font-bold">+7 977 717 00 70</span>
          </div>

          <div className="flex items-center mt-3 md:mt-0 pr-0 md:pr-14 lg:pr-20">
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded border-2 border-[#7ca03d] text-[#7ca03d] hover:bg-[#7ca03d] hover:text-[#1c1c1c] transition-colors relative z-20">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Floating Call Button */}
        <a href="tel:+79777170070" className="absolute -top-6 right-16 md:right-20 lg:right-28 w-[52px] h-[52px] bg-[#0bc10b] rounded-full flex items-center justify-center hover:bg-[#09ad09] transition-transform hover:scale-105 shadow-[0_0_15px_rgba(11,193,11,0.5)] z-20">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute top-0 right-4 md:right-6 lg:right-12 bottom-0 w-10 h-full bg-[#181818] border-l border-r border-[#111] flex items-center justify-center hover:bg-[#222] transition-colors z-10"
          aria-label="Наверх"
        >
          <ArrowUp className="w-4 h-4 text-[#aaa]" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
