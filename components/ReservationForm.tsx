
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { rooms } from '../data/rooms';
import Reveal from './Reveal';

const ReservationForm: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].slug);
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const roomParam = searchParams.get('room');
    if (roomParam && rooms.some(r => r.slug === roomParam)) {
      setSelectedRoom(roomParam);
      // Wait for mount and scroll
      setTimeout(() => {
        const el = document.getElementById('reservation');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [location]);

  /* 
   * EMAIL AUTOMATION IMPLEMENTATION
   * To enable real emails:
   * 1. Install emailjs: npm install @emailjs/browser
   * 2. Sign up at https://www.emailjs.com/
   * 3. Create a Service and a Template.
   * 4. Replace the values below with your Service ID, Template ID, and Public Key.
   */
  const sendEmail = (formData: any) => {
    // SIMULATION MODE
    console.group("📧 Email Simulation");
    console.log("Recipient: akwaba@badaguesthouse.com");
    console.log("Subject: Nouvelle demande de réservation");
    console.log("Data:", formData);
    console.groupEnd();

    // FOR REAL IMPLEMENTATION:
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
    //   .then(...)

    return new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Gather form data
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      room: selectedRoom,
      arrival: (form.elements.namedItem('arrival') as HTMLInputElement).value,
      departure: (form.elements.namedItem('departure') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value || 'Aucun message',
    };

    await sendEmail(formData);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="py-32 bg-stone-50 relative z-10 overflow-hidden">
      <Reveal className="max-w-4xl mx-auto px-6">
        <div className="reveal-item bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden transform transition-all duration-700">
          <div className="p-8 md:p-16">
            <div className="text-center mb-12">
              <h2 className="reveal-item animation-delay-100 text-4xl font-normal text-stone-900 mb-4">Demande de réservation</h2>
              <p className="reveal-item animation-delay-200 text-stone-500 font-light">Remplissez ce formulaire pour vérifier la disponibilité.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center animate-fade-in">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle size={48} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-2">Demande envoyée !</h3>
                  <p className="text-stone-500 max-w-sm">Notre équipe vous contactera dans les plus brefs délais pour confirmer votre séjour.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="reveal-item animation-delay-300 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormInput label="Nom complet" id="name" placeholder="Votre nom" required />
                  <FormInput label="Email" id="email" type="email" placeholder="votre@email.com" required />
                </div>

                <div className="reveal-item animation-delay-400 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormInput label="Téléphone" id="phone" type="tel" placeholder="+225 ..." required />
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider pl-1">Type de chambre</label>
                    <select
                      value={selectedRoom}
                      onChange={(e) => setSelectedRoom(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-base bg-stone-50/50 hover:bg-white text-stone-700 appearance-none cursor-pointer"
                    >
                      {rooms.map(room => (
                        <option key={room.id} value={room.slug}>{room.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="reveal-item animation-delay-500 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormInput label="Arrivée" id="arrival" type="date" required />
                  <FormInput label="Départ" id="departure" type="date" required />
                </div>

                <div className="reveal-item animation-delay-600 space-y-2">
                  <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider pl-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-base bg-stone-50/50 hover:bg-white placeholder:text-stone-300" placeholder="Demande spéciale..."></textarea>
                </div>

                <button type="submit" className="reveal-item animation-delay-700 group w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-xl shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                  <span>Envoyer la demande</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}

            <div className="reveal-item animation-delay-800 mt-12 pt-10 border-t border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Téléphone</p>
                  <p className="text-stone-900 font-medium text-base hover:text-emerald-700 cursor-pointer">+225 07 879 58075</p>
                  <p className="text-stone-900 font-medium text-base hover:text-emerald-700 cursor-pointer">+225 27 34 743 531</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-stone-900 font-medium text-base hover:text-emerald-700 cursor-pointer">akwaba@badaguesthouse.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

const FormInput = ({ label, id, ...props }: any) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-xs font-semibold text-stone-500 uppercase tracking-wider pl-1">{label}</label>
    <input
      id={id}
      {...props}
      className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-base bg-stone-50/50 hover:bg-white placeholder:text-stone-300"
    />
  </div>
);

export default ReservationForm;
