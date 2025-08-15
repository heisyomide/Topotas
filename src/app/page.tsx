'use client';

import React from 'react';
import Image from 'next/image';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import BestOffers from './components/BestOffers';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './globals.css'; // Tailwind styles
import Footer from './components/Footer'; 
import DreamDestination from './components/DreamDestination';

export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <div className="mt-2 md:mt-0">
        <Header />
      </div>

      {/* Navigation */}
      <nav className="bg-white text-gray-800 px-6 py-2">
        <Navbar />
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[500px]">
        <Hero />

      </section>
      {/* Best Offers */}
      <section className="px-6 py-12">
        <BestOffers />
      </section>

      {/* Dream Destination */}
      <section className="relative h-[500px]">
        <DreamDestination />
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 px-6 py-12">
       <WhyChooseUs />
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12">
        <Testimonials />
      </section>

      <Footer />
    </main>
  );
}