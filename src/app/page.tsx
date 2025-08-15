'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'; // Tailwind styles

// Lazy-loaded components
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const BestOffers = dynamic(() => import('./components/BestOffers'), { ssr: false });
const DreamDestination = dynamic(() => import('./components/DreamDestination'), { ssr: false });
const WhyChooseUs = dynamic(() => import('./components/WhyChooseUs'), { ssr: false });
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: false });

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Head>
        <title>Topotas Travel Agency | Explore Paradise</title>
        <meta name="description" content="Discover dream destinations, exclusive offers, and unforgettable travel experiences with Topotas." />
        <meta name="keywords" content="travel, vacation, tours, dream destinations, Topotas, tourism" />
        <meta name="author" content="Topotas Travel Agency" />
        <meta property="og:title" content="Topotas Travel Agency" />
        <meta property="og:description" content="Your gateway to unforgettable travel experiences." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://topotas.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-white text-gray-800 font-sans">
        {/* Header & Navigation */}
        <header className="mb-4">
          <Header />
          <nav className="bg-white px-6 py-2">
            <Navbar />
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative h-[500px]" data-aos="fade-up">
          <Hero />
        </section>

        {/* Best Offers */}
        <section className="px-6 py-12" data-aos="fade-up">
          <BestOffers />
        </section>

        {/* Dream Destination */}
        <section className="relative h-[500px]" data-aos="zoom-in">
          <DreamDestination />
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 px-6 py-12" data-aos="fade-up">
          <WhyChooseUs />
        </section>

        {/* Testimonials */}
        <section className="px-6 py-12" data-aos="fade-up">
          <Testimonials />
        </section>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}