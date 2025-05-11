import React from 'react';
import { Wheat, Facebook, Instagram, } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/malikhamza.nissoana?mibextid=ZbWKwL", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/itxhamzah103?igsh=MWhtdWN2Njgzenh6bw==", label: "Instagram" },

  ];

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Wheat className="h-7 w-7 text-amber-400 mr-2" />
              <span className="font-serif text-xl font-bold">Malik Ameer Hamza</span>
            </div>
            <p className="text-green-100 mb-4 leading-relaxed">
              Premium livestock and quality agricultural products from a trusted farm in Pakistan.
            </p>
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'gallery', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-green-100 hover:text-white transition-colors capitalize"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Our Services</h3>
            <ul className="space-y-2">
              {['Livestock Sales', 'Crop Farming', 'Seed Supply', 'Agricultural Consultation'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h3>
            <address className="not-italic text-green-100 space-y-3">
              <p>Chak 3/1r Tehsil Haroonabad, District Bahawalnagar, Punjab, Pakistan</p>
              <p>
                <a href="tel:+923001234567" className="hover:text-white transition-colors">
                  +92 309 5435417
                </a>
              </p>
              <p>
                <a href="mailto:contact@ameerhamza.com" className="hover:text-white transition-colors">
                  nissowana60@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-green-800 text-center text-green-200">
          <p>© {currentYear} Malik Ameer Hamza Livestock & Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};