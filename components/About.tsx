
import React from 'react';
import { Waves, Wifi, ShieldCheck, Sun } from 'lucide-react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#FDFCFB] relative z-10 overflow-hidden">
      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="reveal-item text-emerald-800 font-semibold text-xs tracking-[0.2em] uppercase pl-1 block">Découverte</span>
              <h2 className="reveal-item animation-delay-100 text-4xl md:text-5xl font-normal text-stone-900 leading-[1.15]">
                Un havre de paix <span className="italic text-stone-500">tropical</span> au cœur de Balmer.
              </h2>
              <p className="reveal-item animation-delay-200 text-stone-600 leading-loose text-base md:text-lg font-light">
                Loin de l'agitation mais proche de tout, BADA Guesthouse redéfinit l'hospitalité à San Pedro. Avec ses chambres lumineuses, sa suite junior et son bungalow privatif, nous offrons une expérience authentique.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <FeatureItem icon={<Waves size={20} />} title="Piscine" subtitle="Détente au soleil" delay="animation-delay-300" />
              <FeatureItem icon={<Wifi size={20} />} title="Wi-Fi Fibre" subtitle="Connexion ultra-rapide" delay="animation-delay-400" />
              <FeatureItem icon={<ShieldCheck size={20} />} title="Sécurité" subtitle="Gardiennage 24h/24" delay="animation-delay-500" />
              <FeatureItem icon={<Sun size={20} />} title="Plage" subtitle="À 5 min à pied" delay="animation-delay-600" />
            </div>
          </div>
          <div className="relative reveal-item animation-delay-500">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a7c6f1f-3b40-45d9-a951-4fb02ecf361a_800w.jpg" 
                alt="Interior" 
                className="rounded-2xl object-cover h-80 w-full shadow-xl shadow-stone-200/50 hover:scale-[1.02] transition-transform duration-700" 
              />
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3d18d69-31d9-47f1-a848-93908e56cb8c_320w.jpg" 
                alt="Pool" 
                className="rounded-2xl object-cover h-80 w-full translate-y-12 shadow-xl shadow-stone-200/50 hover:scale-[1.02] transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

const FeatureItem = ({ icon, title, subtitle, delay }: { icon: React.ReactNode, title: string, subtitle: string, delay: string }) => (
  <div className={`reveal-item ${delay} flex items-start gap-4 group`}>
    <div className="p-2.5 rounded-xl bg-stone-100 text-stone-900 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
      {icon}
    </div>
    <div>
      <span className="text-sm font-semibold text-stone-900 block mb-1">{title}</span>
      <span className="text-xs text-stone-500 leading-snug">{subtitle}</span>
    </div>
  </div>
);

export default About;
