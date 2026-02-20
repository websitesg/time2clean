
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isModal, onClose }) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      if (isModal) {
        setTimeout(() => onClose?.(), 2000);
      }
    }, 1500);
  };

  if (sent) {
    return (
      <div className="text-center py-12 px-4 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Заявка принята!</h3>
        <p className="text-slate-500">Менеджер свяжется с вами в течение 10 минут для уточнения деталей.</p>
      </div>
    );
  }

  return (
    <section className={isModal ? '' : 'py-24 bg-slate-900 text-white'}>
      <div className={isModal ? '' : 'container mx-auto px-4 md:px-6'}>
        <div className={`flex flex-col lg:flex-row gap-16 items-center ${isModal ? 'flex-col !gap-8' : ''}`}>
          {!isModal && (
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Готовы к <span className="text-accent-400">идеальной</span> чистоте?
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Оставьте заявку сейчас и получите <span className="text-white font-bold">скидку 10%</span> на первый заказ генеральной уборки!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-2xl flex items-center justify-center border border-accent-500/30">
                    <Send className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <div className="font-bold">Быстрая обработка</div>
                    <div className="text-sm text-slate-500">Отвечаем за 10 минут</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={isModal ? 'w-full' : 'lg:w-1/2 w-full max-w-lg'}>
            <div className={`p-8 md:p-10 rounded-[2.5rem] shadow-2xl ${isModal ? 'bg-white p-0 shadow-none' : 'bg-white/5 backdrop-blur-xl border border-white/10'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isModal ? 'text-slate-900 text-center' : 'text-white'}`}>Бесплатная консультация</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Ваше имя</label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Ваше имя"
                    className={`w-full px-6 py-4 rounded-2xl border focus:ring-4 transition-all outline-none ${isModal ? 'bg-slate-50 border-slate-200 focus:ring-brand-100 text-slate-900' : 'bg-white/10 border-white/10 focus:ring-brand-500/20 text-white placeholder:text-slate-500'}`}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Телефон</label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className={`w-full px-6 py-4 rounded-2xl border focus:ring-4 transition-all outline-none ${isModal ? 'bg-slate-50 border-slate-200 focus:ring-brand-100 text-slate-900' : 'bg-white/10 border-white/10 focus:ring-brand-500/20 text-white placeholder:text-slate-500'}`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-5 brand-gradient text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 pointer-events-none' : ''}`}
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Рассчитать стоимость <Send className="w-5 h-5" /></>
                  )}
                </button>
                <p className="text-[10px] text-center text-slate-500 mt-4 leading-tight">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и даете согласие на обработку персональных данных.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
