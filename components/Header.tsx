
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionKey: string) => {
    setIsOpen(false);
    sectionRefs[sectionKey].current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const navLinks = [
    { name: 'Home', key: 'home' },
    { name: 'Services', key: 'services' },
    { name: 'About', key: 'about' },
    { name: 'Reviews', key: 'reviews' },
    { name: 'Contact', key: 'contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-900">
            Ron J Smith Plumbing
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button key={link.key} onClick={() => scrollToSection(link.key)} className="text-gray-600 hover:text-blue-700 transition-colors">
                {link.name}
              </button>
            ))}
          </div>
          
          <a href="tel:6139689201" className="hidden md:block bg-orange-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-600 transition-all transform hover:scale-105">
            📞 Call Now
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-xl">
                {navLinks.map((link) => (
                    <button key={link.key} onClick={() => scrollToSection(link.key)} className="w-full text-center text-gray-600 hover:text-blue-700 py-2">
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
