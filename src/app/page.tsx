'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'; 

import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const BestOffers = dynamic(() => import('./components/BestOffers'), { ssr: false });
const DreamDestination = dynamic(() => import('./components/DreamDestination'), { ssr: false });
const WhyChooseUs = dynamic(() => import('./components/WhyChooseUs'), { ssr: false });
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Duration slightly increased for a smoother "high-tech" feel
    AOS.init({ once: true, duration: 1000, easing: 'ease-out-quart' });
  }, []);

  return (
    <>
      <Head>
        <title>Topotas Travel Agency | Global Intelligence</title>
        <meta name="description" content="Access global travel sectors and mission-critical travel planning." />
      </Head>

      {/* 1. Main Wrapper: Forcing black background across the entire viewport */}
      <main className="bg-black text-white font-sans min-h-screen selection:bg-yellow-500/30">
        
        {/* 2. Header & Navigation: Stick them to the top and ensure they are black */}
        <div className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5">
          <Header />
          <nav className="border-t border-white/5">
            <Navbar />
          </nav>
        </div>

        {/* 3. Hero Section: Removed h-[500px] to allow Hero to control its own min-h-screen */}
        <section className="relative w-full" data-aos="fade">
          <Hero />
        </section>

        {/* 4. Best Offers: Changed bg-white to bg-black and updated spacing */}
        <section className="relative bg-black px-6 py-24 z-20" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <BestOffers />
          </div>
        </section>

        {/* 5. Dream Destination: Use overflow-hidden to prevent image bleed */}
        <section className="relative w-full overflow-hidden bg-black py-20" data-aos="zoom-out">
          <DreamDestination />
        </section>

        {/* 6. Why Choose Us: Removed bg-gray-100 (which caused the white gap) */}
        <section className="bg-[#050505] border-y border-white/5 px-6 py-24 z-20" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <WhyChooseUs />
          </div>
        </section>

        {/* 7. Testimonials: Ensuring dark background and consistent padding */}
        <section className="bg-black px-6 py-24 z-20" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <Testimonials />
          </div>
        </section>

        {/* 8. Footer: Integrated into the dark theme */}
        <footer className="bg-black border-t border-white/5">
          <Footer />
        </footer>

        {/* Decorative Grid Overlay (Optional: adds subtle texture to the background) */}
        <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </main>
    </>
  );
}