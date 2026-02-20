import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4 md:px-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-8xl font-extrabold text-brand-500 mb-6 drop-shadow-sm">404</h1>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Страница не найдена</h2>
            <p className="text-lg text-slate-500 max-w-md mx-auto mb-10">
                Упс! Кажется, мы не можем найти страницу, которую вы ищете. Возможно, она была удалена или перенесена.
            </p>
            <Link
                to="/"
                className="px-8 py-4 brand-gradient text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-500/40 hover:scale-[1.02] active:scale-95 transition-all inline-block"
            >
                Вернуться на главную
            </Link>
        </div>
    );
};

export default NotFoundPage;
