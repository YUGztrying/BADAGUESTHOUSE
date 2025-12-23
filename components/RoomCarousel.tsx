
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { rooms } from '../data/rooms';
import Reveal from './Reveal';

const RoomCarousel: React.FC = () => {
  // Triple the items for smooth infinite loop
  const displayRooms = [...rooms, ...rooms, ...rooms];

  return (
    <section id="rooms" className="bg-stone-50 border-stone-200 border-t pt-32 pb-32 relative z-10 overflow-hidden">
      <Reveal className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="reveal-item text-emerald-800 font-semibold text-xs tracking-[0.2em] uppercase pl-1 block">Hébergement</span>
            <h2 className="reveal-item animation-delay-100 text-4xl md:text-5xl font-normal text-stone-900">Nos Chambres & Suites</h2>
          </div>
          <p className="reveal-item animation-delay-200 text-stone-500 max-w-sm text-sm md:text-right pb-2">
            Explorez notre collection de chambres élégantes, chacune offrant une expérience unique.
          </p>
        </div>
      </Reveal>

      <div className="relative group">
        <div className="flex animate-scroll gap-8 pl-6 hover:pause-animation">
          {displayRooms.map((room, idx) => (
            <Link 
              key={`${room.id}-${idx}`}
              to={`/rooms/${room.slug}`} 
              className="group/card relative z-20 aspect-[3/4] w-80 md:w-[26rem] shrink-0 rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-stone-200 transition-all duration-700 block bg-stone-200"
            >
              <img 
                src={room.image} 
                className="transition-transform duration-1000 group-hover/card:scale-110 w-full h-full object-cover bg-center absolute inset-0" 
                alt={room.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500 z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl text-white mb-1 font-normal">{room.title}</h3>
                    <p className="text-emerald-400 font-medium mb-3">{room.price.toLocaleString()} FCFA / nuit</p>
                    <p className="text-white/80 text-sm leading-relaxed max-w-[200px] h-0 overflow-hidden group-hover/card:h-auto opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-100">
                      Découvrir les détails
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover/card:bg-emerald-800 transition-colors">
                    <ArrowRight size={22} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCarousel;
