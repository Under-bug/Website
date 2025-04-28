import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Platform from '../components/Platform/Platform';
import Contact from '../components/Contact/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Platform />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;