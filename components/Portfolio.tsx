import React from 'react';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  { id: '1', title: 'Lake Hayes Living', category: 'Interior', imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: '2', title: 'Jacks Point Kitchen', category: 'Finishes', imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?w=800&q=80' },
  { id: '3', title: 'Alpine Master Suite', category: 'Wallpaper', imageUrl: 'https://images.unsplash.com/photo-1616594039964-40891a909639?w=800&q=80' },
  { id: '4', title: 'Queenstown Hill', category: 'Plastering', imageUrl: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80' },
  { id: '5', title: 'Arrowtown Heritage', category: 'Restoration', imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80' },
  { id: '6', title: 'Shotover Feature', category: 'Interior', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">Recent Finished Projects</h3>
          </div>
          <button className="hidden md:block text-brand-navy font-semibold hover:text-brand-red transition-colors">
            View All Projects &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-cyan text-sm font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="text-brand-navy font-semibold hover:text-brand-red transition-colors">
            View All Projects &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};