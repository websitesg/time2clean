import React from 'react';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-8 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 mb-12 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    О компании
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto mt-4">
                    Мы стремимся предоставлять лучший сервис и заботиться о вашем комфорте
                </p>
            </div>
            <Team />
            <Testimonials />
        </div>
    );
};

export default AboutPage;
