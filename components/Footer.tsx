
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-serif italic text-white tracking-tight mb-6 block">Bada</span>
            <p className="text-sm leading-relaxed mb-6 font-light max-w-xs">Maison d'hôte de charme à San Pedro. Votre confort est notre priorité absolue.</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">Accueil</Link></li>
              <li><Link to="/rooms" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">Chambres</Link></li>
              <li><a href="/#amenities" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="/#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>Quartier Balmer, San Pedro</li>
              <li>+225 07 879 58075</li>
              <li>akwaba@badaguesthouse.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Social</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bada.guesthouse/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-emerald-800 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-stone-500">
          <p>© 2024 BADA Guesthouse — Tous droits réservés.</p>
          <p>
            Conçu & Développé par <a href="https://www.instagram.com/guy_ismael_mbengue/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Guy Ismael Mbengue</a>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
