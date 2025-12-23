
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, ChevronRight } from 'lucide-react';
import { rooms } from '../data/rooms';
import Reveal from '../components/Reveal';

const RoomsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4f71132-3f14-45e5-bd20-ad169741845c_1600w.png" 
            alt="BADA Guesthouse Atmosphere" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-[#FDFCFB]"></div>
        
        <Reveal className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="reveal-item flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={12} className="text-stone-500" />
            <span>Nos Chambres</span>
          </div>
          <h1 className="reveal-item animation-delay-200 text-6xl md:text-8xl font-serif text-white mb-8">
            Demeures de <span className="italic text-emerald-100/80">caractère</span>
          </h1>
          <p className="reveal-item animation-delay-400 text-stone-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Découvrez notre sélection exclusive de chambres, suites et bungalows, conçus pour vous offrir un séjour inoubliable à San Pedro.
          </p>
        </Reveal>
      </section>

      {/* Rooms Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {rooms.map((room, idx) => (
              <Reveal key={room.id} className="h-full">
                <Link 
                  to={`/rooms/${room.slug}`}
                  className={`reveal-item animation-delay-${(idx % 3) * 150} group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:-translate-y-2`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={room.image} 
                      alt={room.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                    <div className="absolute top-6 right-6">
                      <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20 text-stone-900 text-xs font-bold uppercase tracking-widest">
                        À partir de {room.price.toLocaleString()} FCFA
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="mb-4">
                      <span className="text-emerald-800 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{room.subtitle}</span>
                      <h3 className="text-3xl font-serif text-stone-900 group-hover:text-emerald-900 transition-colors leading-tight">{room.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-8 text-stone-500 text-sm">
                      <div className="flex items-center gap-2">
                        <Home size={16} className="text-emerald-700/60" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-stone-50 flex items-center justify-between">
                      <span className="text-stone-400 font-medium text-sm group-hover:text-emerald-800 transition-colors">Voir les détails</span>
                      <div className="w-10 h-10 rounded-full bg-stone-50 group-hover:bg-emerald-800 flex items-center justify-center text-stone-400 group-hover:text-white transition-all duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-emerald-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db3d5333-0616-4358-bc95-0a46cb7e29da_3840w.png" 
            alt="Texture" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <Reveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="reveal-item text-4xl md:text-5xl font-serif text-white mb-6">Prêt à vivre l'expérience BADA ?</h2>
          <p className="reveal-item animation-delay-200 text-emerald-100/70 text-lg mb-10 font-light">
            Contactez-nous directement pour bénéficier des meilleurs tarifs garantis et d'un accueil personnalisé.
          </p>
          <div className="reveal-item animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/?room=balmer#reservation"
              className="px-10 py-4 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-xl text-sm uppercase tracking-widest"
            >
              Réserver maintenant
            </Link>
            <a 
              href="tel:+2250787958075"
              className="px-10 py-4 bg-emerald-800/40 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-emerald-800/60 transition-all text-sm uppercase tracking-widest"
            >
              Nous appeler
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default RoomsPage;
