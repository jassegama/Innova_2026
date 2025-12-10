import React from 'react';
import { Paintbrush, Home, Ruler, SprayCan, Layers, PenTool } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'interior',
    title: 'Interior Painting',
    description: 'Flawless finishes for walls, ceilings, and trims using premium low-VOC paints.',
    icon: Paintbrush
  },
  {
    id: 'exterior',
    title: 'Exterior Protection',
    description: 'Weather-resistant coatings designed to withstand the harsh Queenstown alpine climate.',
    icon: Home
  },
  {
    id: 'wallpaper',
    title: 'Wallpapering',
    description: 'Expert installation of feature walls, vinyls, fabrics, and bespoke wall coverings.',
    icon: Layers
  },
  {
    id: 'plastering',
    title: 'Gib Stopping & Plastering',
    description: 'Level 5 skim coating and seamless stopping for the perfect canvas.',
    icon: Ruler
  },
  {
    id: 'spraying',
    title: 'Airless Spraying',
    description: 'High-end spray finishes for a factory-smooth look on doors and joinery.',
    icon: SprayCan
  },
  {
    id: 'consultation',
    title: 'Color Consultation',
    description: 'Professional advice to help you select the perfect palette for your space.',
    icon: PenTool
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Comprehensive Decorating Services</h3>
          <p className="text-gray-600">
            From new builds to heritage restorations, we bring a level of craftsmanship that sets the standard in Queenstown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-brand-navy text-brand-cyan rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};