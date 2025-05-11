import React, { useState, useEffect } from 'react';
import { Menu, X, Wheat, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Wheat className="h-8 w-8 text-green-700 mr-2" />
            <span className="font-serif text-xl font-bold text-green-800">
              Malik Ameer Hamza
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-green-800 hover:text-green-600 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${isMenuOpen
            ? 'max-h-[80vh] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden transition-all duration-300 bg-white`}
      >
        <div className="container mx-auto px-4 py-3 space-y-3">
          {['home', 'about', 'services', 'gallery', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left capitalize text-green-800 hover:text-green-600 transition-colors py-2 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};