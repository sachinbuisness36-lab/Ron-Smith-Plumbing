
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
    const { ref: contentRef, animationClass: contentAnimation } = useScrollAnimation<HTMLDivElement>('slide-up');
    
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(https://picsum.photos/seed/plumberhero/1920/1080)` }}>
            <div className="absolute inset-0 bg-blue-900/60"></div>
            <div ref={contentRef} className={`relative z-10 p-6 max-w-3xl ${contentAnimation}`}>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    Reliable Plumbing Services in Belleville
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
                    Fast, honest, and professional plumbing solutions when you need them most.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-10 text-lg">
                    <span className="flex items-center gap-2"><span className="text-yellow-400">⭐</span> 5.0 Star Rated</span>
                    <span className="flex items-center gap-2"><span className="text-green-400">✔</span> Local & Trusted</span>
                    <span className="flex items-center gap-2"><span className="text-green-400">✔</span> Fast Response Times</span>
                </div>
                <a href="tel:6139689201" className="bg-orange-500 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transform transition-transform hover:scale-105 animate-pulse">
                    📞 Call Now (613) 968-9201
                </a>
            </div>
        </section>
    );
};

export default Hero;
