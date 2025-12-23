
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed z-50 start-0 w-full border-b transition-all duration-500 ease-in-out top-0 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-stone-100 py-3 shadow-sm' : 'bg-transparent border-white/10 py-5'
    }`}>
      <div className="flex flex-wrap max-w-7xl mx-auto px-6 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group z-50">
          <span className={`text-2xl font-medium tracking-tight font-serif italic transition-colors ${
            scrolled || !isHome ? 'text-stone-900 group-hover:text-emerald-800' : 'text-white'
          }`}>Bada</span>
        </Link>

        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            onClick={() => scrollToSection('reservation')}
            className="cursor-pointer text-white bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-100 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Réserver
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-stone-100/10 focus:outline-none ${
              scrolled || !isHome ? 'text-stone-500' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block mt-4' : 'hidden'}`}>
          <ul className={`flex flex-col p-4 md:p-0 font-medium border rounded-2xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ${
            isOpen ? 'bg-white border-stone-100 shadow-xl' : ''
          }`}>
            <li>
              <Link 
                to="/"
                onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`block w-full text-left py-2 px-3 transition-colors text-sm ${
                  isOpen ? 'text-stone-700' : (scrolled || !isHome ? 'text-stone-500 hover:text-emerald-800' : 'text-stone-200 hover:text-white')
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/rooms"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left py-2 px-3 transition-colors text-sm ${
                  isOpen ? 'text-stone-700' : (scrolled || !isHome ? 'text-stone-500 hover:text-emerald-800' : 'text-stone-200 hover:text-white')
                } ${location.pathname === '/rooms' ? 'text-emerald-800 font-bold' : ''}`}
              >
                Chambres
              </Link>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('amenities')}
                className={`w-full text-left py-2 px-3 transition-colors text-sm ${
                  isOpen ? 'text-stone-700' : (scrolled || !isHome ? 'text-stone-500 hover:text-emerald-800' : 'text-stone-200 hover:text-white')
                }`}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`w-full text-left py-2 px-3 transition-colors text-sm ${
                  isOpen ? 'text-stone-700' : (scrolled || !isHome ? 'text-stone-500 hover:text-emerald-800' : 'text-stone-200 hover:text-white')
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
