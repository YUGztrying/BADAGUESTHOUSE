
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import RoomCarousel from '../components/RoomCarousel';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import ReservationForm from '../components/ReservationForm';

const HomePage: React.FC = () => {
  return (
    <main className="w-full relative z-0">
      <Hero />
      <About />
      <RoomCarousel />
      <Amenities />
      <Gallery />
      <Contact />
      <ReservationForm />
    </main>
  );
};

export default HomePage;
