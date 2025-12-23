
import React from 'react';
import { Waves, Wifi, Car, ShieldCheck, Wind, Coffee, Trees, Anchor } from 'lucide-react';
import Reveal from './Reveal';

const Amenities: React.FC = () => {
  const items = [
    { icon: <Waves size={28} />, label: 'Piscine' },
    { icon: <Wifi size={28} />, label: 'Wi-Fi Fibre' },
    { icon: <Car size={28} />, label: 'Parking sécurisé' },
    { icon: <ShieldCheck size={28} />, label: 'Sécurité 24h/24' },
    { icon: <Wind size={28} />, label: 'Climatisation' },
    { icon: <Coffee size={28} />, label: 'Rooftop' },
    { icon: <Trees size={28} />, label: 'Jardin tropical' },
    { icon: <Anchor size={28} />, label: 'Proche port' },
  ];

  return (
    <section id="amenities" className="border-y bg-white border-stone-200 pt-24 pb-24 relative z-10">
      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`reveal-item animation-delay-${idx * 100} flex flex-col items-center text-center gap-4 group`}
            >
              <div className="flex group-hover:text-emerald-700 group-hover:bg-emerald-50 transition-all duration-300 text-stone-400 bg-stone-50 w-16 h-16 rounded-full items-center justify-center">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-stone-800">{item.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Amenities;
