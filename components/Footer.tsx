import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
               <svg width="30" height="24" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 5L45 20V35H5V20L25 5Z" stroke="#CF2E4D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M25 5L25 20L45 28" stroke="#CF2E4D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               <span className="text-2xl font-bold tracking-tight">innova<span className="text-brand-cyan font-medium">decorating</span></span>
            </a>
            <p className="text-brand-light/70 leading-relaxed max-w-sm">
              Premier painting and decorating services in Queenstown. 
              We blend traditional craftsmanship with modern techniques to deliver exceptional results.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-cyan">Quick Links</h4>
            <ul className="space-y-3 text-brand-light/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-cyan">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/innovadecorating" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/innovadecorating" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-brand-light/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Innova Decorating. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Reimagined with React + Gemini</p>
        </div>
      </div>
    </footer>
  );
};