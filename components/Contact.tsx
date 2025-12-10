import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Let's Discuss Your Project</h3>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Ready to transform your space? Contact us for a free, no-obligation quote. We serve Queenstown, Arrowtown, and the wider Otago region.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-brand-navy shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Phone</h4>
                  <p className="text-gray-600 hover:text-brand-red transition-colors">
                    <a href="tel:+64123456789">+64 21 123 4567</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-brand-navy shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Email</h4>
                  <p className="text-gray-600 hover:text-brand-red transition-colors">
                    <a href="mailto:info@innovadecorating.co.nz">info@innovadecorating.co.nz</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-brand-navy shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Location</h4>
                  <p className="text-gray-600">Queenstown, New Zealand</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-brand-navy shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 7:30am - 5:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg">
            <h4 className="text-2xl font-bold text-brand-navy mb-6">Request a Quote</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all" placeholder="+64 ..." />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all bg-white">
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Wallpapering</option>
                  <option>Plastering</option>
                  <option>Airless Spraying</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-cyan focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-navy text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-navy/20">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};