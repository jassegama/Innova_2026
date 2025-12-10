import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Custom House Icon Representation */}
          <svg width="40" height="35" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-105">
            <path d="M25 5L45 20V35H5V20L25 5Z" stroke="#CF2E4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25 5L25 20L45 28" stroke="#CF2E4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex flex-col leading-none">
            <span className={`text-3xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>
              innova
            </span>
            <span className={`text-lg font-medium tracking-wide -mt-1 transition-colors ${isScrolled ? 'text-brand-cyan' : 'text-brand-cyan'}`}>
              decorating
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-semibold transition-colors uppercase tracking-wide ${
                isScrolled ? 'text-brand-navy hover:text-brand-red' : 'text-white/90 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="tel:+64123456789" 
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 text-sm font-semibold ${
              isScrolled 
                ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white' 
                : 'border-white/30 text-white hover:bg-white hover:text-brand-navy'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>021 123 4567</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col space-y-4 shadow-xl">
          {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-brand-navy text-lg font-bold py-3 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:+64123456789" 
            className="text-white bg-brand-red font-bold py-4 rounded-lg flex items-center justify-center gap-2 mt-4"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      )}
    </header>
  );
};