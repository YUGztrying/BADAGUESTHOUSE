
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white relative z-10 overflow-hidden">
      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-item animation-delay-300 order-2 md:order-1 flex overflow-hidden group bg-stone-100 w-full h-[450px] border-stone-200 border rounded-3xl relative items-center justify-center shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              className="group-hover:grayscale-0 transition-all duration-1000 opacity-80 w-full h-full object-cover absolute inset-0 grayscale scale-110 group-hover:scale-100" 
              alt="San Pedro Map Texture" 
            />
            <div className="group-hover:bg-stone-900/0 transition-colors bg-stone-900/20 absolute inset-0"></div>
            <div className="z-10 flex flex-col gap-3 relative items-center">
              <div className="p-5 bg-white rounded-full shadow-2xl text-emerald-700 animate-bounce">
                <MapPin size={32} />
              </div>
              <span className="text-sm font-semibold text-stone-900 bg-white/95 backdrop-blur px-6 py-2.5 rounded-full shadow-lg border border-stone-100">
                San Pedro, Côte d'Ivoire
              </span>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <span className="reveal-item text-emerald-800 font-semibold text-xs tracking-[0.2em] uppercase pl-1 block mb-2">Localisation</span>
              <h2 className="reveal-item animation-delay-100 text-4xl md:text-5xl font-normal text-stone-900 leading-tight">Au cœur du quartier Balmer.</h2>
            </div>
            <div className="space-y-6">
              <p className="reveal-item animation-delay-200 text-stone-600 text-lg font-light leading-relaxed">
                Situé à quelques minutes du port et des plages, dans un cadre calme et verdoyant. Profitez de la tranquillité de notre résidence tout en restant proche des commodités de la ville.
              </p>
              <div className="reveal-item animation-delay-400 flex items-start gap-4 pt-6 border-t border-stone-100">
                <div className="mt-1 text-emerald-800 bg-emerald-50 p-3 rounded-full">
                  <Navigation size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Adresse</h4>
                  <p className="text-stone-500">Quartier Balmer, San Pedro, Côte d’Ivoire.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
