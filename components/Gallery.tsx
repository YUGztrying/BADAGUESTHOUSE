
import React from 'react';
import Reveal from './Reveal';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4f71132-3f14-45e5-bd20-ad169741845c_1600w.png', span: 'col-span-2 row-span-2' },
    { url: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86a49765-6d7d-4606-9fb4-cf73ade3d7cc_800w.jpg', span: 'col-span-1 row-span-1' },
    { url: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56c71ed0-f987-4b52-99da-8c46102c72f6_800w.jpg', span: 'col-span-1 row-span-1' },
    { url: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d37e498b-1e0a-464a-bade-59f7b62ff4b1_1600w.jpg', span: 'col-span-2 row-span-1' },
  ];

  return (
    <section className="bg-stone-50 pt-32 pb-32 relative z-10">
      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="reveal-item text-emerald-800 font-semibold text-xs tracking-[0.2em] uppercase pl-1 block">Galerie</span>
            <h2 className="reveal-item animation-delay-100 text-4xl font-normal text-stone-900">L'atmosphère BADA</h2>
          </div>
          <p className="reveal-item animation-delay-200 text-stone-500 text-sm max-w-sm md:text-right">Découvrez les espaces communs et l'ambiance unique.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[700px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`${img.span} reveal-item animation-delay-${idx * 150 + 200} relative group overflow-hidden rounded-2xl bg-stone-200`}
            >
              <img 
                src={img.url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={`Atmosphere ${idx + 1}`} 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Gallery;
