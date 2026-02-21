import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Services from '../components/Services';
import Features from '../components/Features';
import BeforeAfter from '../components/BeforeAfter';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
    const { setShowModal } = useOutletContext<{ setShowModal: (val: boolean) => void }>();

    return (
        <>
            <Hero onOrderClick={() => setShowModal(true)} />
            <Calculator />
            <Services />
            <Features />
            <BeforeAfter />
            <Team />
            <Testimonials />
            <ContactForm />
        </>
    );
};

export default Home;
