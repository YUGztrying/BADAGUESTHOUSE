
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle, Wifi, Wind, Tv, Coffee, BedDouble, Bath,
  Shield, Layout, Trees, Home, Heart, Maximize, Crown, Monitor,
  Info, Star, Settings, Archive, ExternalLink, MapPin, Car, Plane, Clock
} from 'lucide-react';
import { rooms } from '../data/rooms';
import Reveal from '../components/Reveal';

const iconMap: Record<string, any> = {
  Wifi, Wind, Tv, Coffee, BedDouble, Bath, Shield, Layout, Trees,
  Home, Heart, Maximize, Crown, Monitor, Archive, ExternalLink,
  MapPin, Car, Plane, Clock
};

const RoomDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const room = rooms.find(r => r.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-stone-50 text-center">
        <h1 className="text-6xl font-serif mb-4">404</h1>
        <p className="text-xl text-stone-500 mb-8">Chambre introuvable.</p>
        <Link to="/" className="px-8 py-3 bg-emerald-800 text-white rounded-full hover:bg-emerald-900 transition-all">Retour à l'accueil</Link>
      </div>
    );
  }

  const otherRooms = rooms.filter(r => r.id !== room.id).slice(0, 3);

  const handleBookingClick = () => {
    navigate(`/?room=${room.slug}#reservation`);
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-20 fade-in w-full overflow-hidden">
      {/* Room Hero */}
      <div className="relative h-[75vh] w-full overflow-hidden bg-stone-900">
        <img
          src={room.image}
          className="w-full h-full object-cover opacity-80 animate-fade-in transition-transform duration-[15s] hover:scale-110"
          alt={room.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-90"></div>

        <Reveal className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
          <div className="reveal-item">
            <Link to="/rooms" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors backdrop-blur-md bg-white/10 px-6 py-2.5 rounded-full border border-white/20 text-sm group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Retour
            </Link>
          </div>
          <div className="reveal-item animation-delay-200 space-y-4 mb-8">
            <span className="text-emerald-400 font-semibold tracking-[0.3em] uppercase text-xs">{room.subtitle}</span>
            <h1 className="text-6xl md:text-8xl text-white font-serif leading-none tracking-tight">{room.title}</h1>
          </div>
          <div className="reveal-item animation-delay-400 flex flex-wrap items-center gap-4 text-white/90">

            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm">
              <Home size={14} />
              <span>{room.capacity}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 rounded-full text-sm font-semibold">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Disponible</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Photo Gallery - Moved to Top */}
            {room.gallery.length > 1 && (
              <Reveal className="space-y-8 mb-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-stone-100">
                <div className="reveal-item">
                  <h3 className="text-3xl font-serif text-stone-900 mb-2">Galerie de la chambre</h3>
                  <p className="text-stone-400 text-sm font-medium uppercase tracking-widest">Aperçus détaillés de votre espace</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {room.gallery.filter((_, idx) => idx > 0).map((img, i) => (
                    <div key={i} className={`reveal-item animation-delay-${i * 200} group relative aspect-[2/3] overflow-hidden rounded-[2.5rem] shadow-2xl border border-stone-200/50 bg-stone-100`}>
                      <img
                        src={img}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        alt={`${room.title} view ${i + 2}`}
                        loading="lazy"
                        onLoad={(e) => (e.currentTarget.parentElement?.classList.add('bg-transparent'))}
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Description Card */}
            <Reveal className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100">
              <h3 className="reveal-item text-3xl font-serif text-stone-900 mb-10 flex items-center gap-4">
                <Layout size={32} className="text-emerald-700" />
                À propos de cet espace
              </h3>
              <p className="reveal-item animation-delay-100 text-stone-600 leading-relaxed font-light text-xl mb-12">
                {room.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-stone-100">
                {room.features.map((feature, i) => {
                  const Icon = iconMap[feature.icon] || Layout;
                  return (
                    <div key={i} className={`reveal-item animation-delay-${200 + i * 100} flex flex-col gap-3 group`}>
                      <div className="text-emerald-700 bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-emerald-100">
                        <Icon size={28} />
                      </div>
                      <div>
                        <span className="text-stone-900 font-semibold text-sm">{feature.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Amenities List */}
            <Reveal className="space-y-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-stone-100">
              <div className="reveal-item">
                <h3 className="text-3xl font-serif text-stone-900 mb-2">Équipements & commodités de la chambre</h3>
                <p className="text-stone-400 text-sm mb-8 font-medium uppercase tracking-wider">Inclus dans la chambre :</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className={`reveal-item animation-delay-${i * 50} flex items-center gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                  >
                    <div className="p-2.5 bg-emerald-100/50 rounded-full text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-stone-700 font-semibold">{amenity}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Detailed Info Sections */}
            {room.details && (
              <div className="space-y-12">
                {/* Installations Section */}
                <Reveal className="space-y-8 bg-emerald-900 p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl">
                  <div className="reveal-item">
                    <h3 className="text-3xl font-serif mb-2 flex items-center gap-4">
                      <Star className="text-emerald-400" size={32} />
                      Installations disponibles
                    </h3>
                    <p className="text-emerald-100/60 text-sm uppercase tracking-widest font-bold mb-10">À votre disposition à la guesthouse :</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {room.details.installations.map((item, i) => (
                      <div key={i} className={`reveal-item animation-delay-${i * 100} flex flex-col gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:bg-white/20 transition-all group`}>
                        <div className="p-4 bg-white/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                          {item.includes('Parking') ? <Car size={32} /> : item.includes('Sécurité') ? <Shield size={32} /> : <Trees size={32} />}
                        </div>
                        <span className="text-white font-bold text-xl leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Options Section */}
                <Reveal className="space-y-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-stone-100">
                  <div className="reveal-item">
                    <h3 className="text-3xl font-serif text-stone-900 mb-2 flex items-center gap-4">
                      <Settings className="text-emerald-700" size={32} />
                      Options supplémentaires
                    </h3>
                    <p className="text-stone-400 text-sm mb-10 font-medium uppercase tracking-wider">Sur demande (en supplément possible) :</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {room.details.options.map((item, i) => (
                      <div key={i} className={`reveal-item animation-delay-${i * 50} flex items-center justify-between p-8 bg-stone-50 rounded-[2rem] border border-stone-100 group hover:border-emerald-300 hover:shadow-xl transition-all`}>
                        <div className="flex items-center gap-5">
                          <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl group-hover:bg-emerald-700 group-hover:text-white transition-all">
                            <CheckCircle size={22} />
                          </div>
                          <span className="text-stone-800 font-bold text-lg">{item}</span>
                        </div>
                        <ExternalLink size={18} className="text-stone-300 group-hover:text-emerald-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Important Info Section */}
                <Reveal className="space-y-8">
                  <div className="reveal-item">
                    <h3 className="text-3xl font-serif text-stone-900 flex items-center gap-4 mb-2">
                      <Info className="text-emerald-700" size={32} />
                      Informations importantes
                    </h3>
                    <p className="text-stone-400 text-sm uppercase tracking-widest font-bold">À savoir avant votre arrivée</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {room.details.important.map((item, i) => (
                      <div key={i} className={`reveal-item animation-delay-${i * 50} flex items-start gap-5 p-8 bg-white rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all h-full`}>
                        <div className="mt-1 p-3 bg-stone-100 rounded-2xl text-stone-500 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                          {item.includes('Check-in') || item.includes('Arrivée') ? <Clock size={20} /> :
                            item.includes('Check-out') || item.includes('Départ') ? <Clock size={20} /> :
                              item.includes('Plage') ? <Trees size={20} /> :
                                item.includes('Aéroport') ? <Plane size={20} /> : <Info size={20} />}
                        </div>
                        <span className="text-stone-700 font-semibold text-base leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            )}
          </div>

          {/* Right Sidebar (Sticky) */}
          <div className="lg:col-span-1">
            <Reveal className="sticky top-28 bg-white p-10 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-stone-100">
              <div className="reveal-item flex justify-between items-end mb-10 pb-8 border-b border-stone-100">
                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-[0.3em] font-bold block mb-4">Tarif par nuit</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-serif text-emerald-900 leading-none">{room.price.toLocaleString()}</span>
                    <span className="text-stone-400 font-serif text-2xl italic">FCFA</span>
                  </div>
                  {(room.slug === 'balmer' || room.slug === 'mangrove' || room.slug === 'ebene' || room.slug === 'suite' || room.slug === 'bungalow') && (
                    <p className="mt-4 text-xs text-stone-400 italic font-medium">
                      * Tarif haute saison : {room.slug === 'suite' ? '85 000' : room.slug === 'bungalow' ? '160 000' : '70 000'} FCFA
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <SidebarBenefit label="Annulation gratuite (48h)" delay="animation-delay-100" />
                <SidebarBenefit label="Pas de prépaiement requis" delay="animation-delay-200" />
                <SidebarBenefit label="Accès piscine inclus" delay="animation-delay-300" />
                <SidebarBenefit label="Meilleur tarif garanti" delay="animation-delay-400" />
              </div>

              <button
                onClick={handleBookingClick}
                className="reveal-item animation-delay-500 cursor-pointer block w-full py-6 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-2xl text-center transition-all shadow-2xl shadow-emerald-900/40 hover:-translate-y-1 active:scale-95 text-xl tracking-widest uppercase"
              >
                Réserver
              </button>

              <div className="reveal-item animation-delay-600 mt-10 p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 text-center">
                <p className="text-sm text-stone-500 leading-relaxed italic font-medium">
                  "Nous garantissons les tarifs les plus bas en réservation directe."
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Other Rooms Exploration */}
        <Reveal className="mt-48 pt-24 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-24">
            <div className="max-w-2xl space-y-4">
              <span className="reveal-item text-emerald-800 font-bold text-xs tracking-[0.4em] uppercase pl-1 block">Explorer plus</span>
              <h2 className="reveal-item animation-delay-100 text-5xl md:text-7xl font-normal text-stone-900">Autres atmosphères</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {otherRooms.map((r, i) => (
              <Link
                key={r.id}
                to={`/rooms/${r.slug}`}
                className={`reveal-item animation-delay-${i * 200 + 200} group relative h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-3`}
              >
                <img src={r.image} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt={r.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-12 left-12 right-12 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h4 className="text-4xl text-white font-serif mb-3 leading-tight">{r.title}</h4>
                  <p className="text-emerald-400 font-bold text-xl mb-1">{r.price.toLocaleString()} FCFA</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

const SidebarBenefit = ({ label, delay }: { label: string, delay: string }) => (
  <div className={`reveal-item ${delay} flex items-center gap-5 text-base text-stone-700 font-semibold`}>
    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100/50 shadow-sm">
      <CheckCircle size={20} className="text-emerald-700" />
    </div>
    <span>{label}</span>
  </div>
);

export default RoomDetailPage;
