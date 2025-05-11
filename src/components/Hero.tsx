import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 300);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-6 leading-tight">
            <span className="block">Hamza Agri & Livestock</span>
            <span className="block mt-2 text-2xl sm:text-3xl text-amber-400">Where Tradition Meets Innovation</span>
          </h1>
          <p className="text-xl sm:text-2xl text-stone-200 mb-8">
            Premium livestock breeding, sustainable farming, and expert agricultural consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              Explore Services
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-0 right-0 flex justify-center transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
      >
        <button
          onClick={scrollToAbout}
          className="text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};