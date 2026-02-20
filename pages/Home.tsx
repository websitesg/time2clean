import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Features from '../components/Features';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
    const { setShowModal } = useOutletContext<{ setShowModal: (val: boolean) => void }>();

    return (
        <>
            <Hero onOrderClick={() => setShowModal(true)} />
            <Calculator />
            <Features />
            <BeforeAfter />
            <Testimonials />
        </>
    );
};

export default Home;
