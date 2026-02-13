
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: homeRef,
    services: servicesRef,
    about: aboutRef,
    reviews: reviewsRef,
    contact: contactRef,
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header sectionRefs={sectionRefs} />
      <main>
        <div ref={homeRef}>
          <Hero />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={reviewsRef}>
          <Reviews />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
      {/* Sticky Mobile Call Now Button */}
      <a
        href="tel:6139689201"
        className="md:hidden fixed bottom-4 right-4 bg-orange-500 text-white font-bold py-3 px-5 rounded-full shadow-lg flex items-center gap-2 z-50 transform transition-transform hover:scale-105 animate-pulse"
        aria-label="Call Now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now
      </a>
    </div>
  );
};

export default App;
