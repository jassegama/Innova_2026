import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2669&auto=format&fit=crop" 
          alt="Luxury Interior Living Room" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white pt-20">
        <div className="max-w-3xl fade-in-up">
          <div className="inline-block px-4 py-1.5 mb-6 border border-brand-cyan/50 rounded-full text-brand-cyan text-sm font-bold tracking-widest uppercase bg-brand-navy/60 backdrop-blur-md">
            Based in Queenstown, NZ
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Mastering the Art of <span className="text-brand-cyan">Finish.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed font-light">
            Innova Decorating delivers premium painting, plastering, and wallpapering services. We transform spaces with precision, quality materials, and an eye for detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-brand-red hover:bg-rose-700 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center transition-all shadow-lg hover:shadow-brand-red/30"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 rounded-lg font-bold flex items-center justify-center border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};