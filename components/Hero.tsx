
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[95vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Image */}
      <div className="z-0 absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db3d5333-0616-4358-bc95-0a46cb7e29da_3840w.png" 
          alt="BADA Guesthouse Roof" 
          className="animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-[20s] opacity-60 w-full h-full object-cover scale-105"
        />
        <div className="bg-gradient-to-t from-black/80 via-black/20 to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
      </div>

      {/* Content */}
      <Reveal className="text-center max-w-5xl mx-auto px-4 relative z-10 space-y-8">
        <div className="reveal-item">
          <div className="inline-flex uppercase transition-all duration-700 hover:bg-white/20 hover:border-white/40 hover:scale-105 cursor-default group text-xs font-medium text-white tracking-wider bg-white/10 border-white/20 border rounded-full mb-4 pt-1.5 pr-4 pb-1.5 pl-4 shadow-lg backdrop-blur-md gap-x-2 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse"></span>
            Bienvenue à San Pedro
          </div>
        </div>
        <h1 className="reveal-item animation-delay-200 md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-normal text-white tracking-tight">
          Akwaba chez BADA Guesthouse 
          <br /> <span className="italic text-white/90">Confort & Sérénité</span>
        </h1>
        <p className="reveal-item animation-delay-400 text-lg md:text-xl text-stone-200/90 max-w-xl mx-auto font-light leading-relaxed">
          Une maison d’hôte chaleureuse au cœur du quartier Balmer, où chaque détail invite au repos et à l'évasion.
        </p>
        <div className="reveal-item animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button 
            onClick={scrollToReservation}
            className="group w-full sm:w-auto px-8 py-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-full font-medium transition-all shadow-[0_2px_20px_rgba(6,78,59,0.4)] hover:-translate-y-1 text-sm flex items-center justify-center gap-2"
          >
            Réserver maintenant
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white rounded-full font-medium transition-all text-sm"
          >
            Découvrir les lieux
          </button>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
