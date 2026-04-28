'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedPartners from './components/TrustedPartners';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar?.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md');
        navbar?.classList.remove('bg-transparent');
      } else {
        navbar?.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md');
        navbar?.classList.add('bg-transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedPartners />
      <About />
      <Services />
      <Benefits />
      <Calculator />
      <Projects />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}