'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

const destinations = [
  {
    name: 'Santorini Escape',
    category: 'GREECE',
    location: '36.3932° N, 25.4615° E',
    description: 'Bask in the beauty of whitewashed cliffs and endless blue seas. Your dream Mediterranean getaway awaits.',
  },
  {
    name: 'Spanish Escape',
    category: 'SPAIN',
    location: '40.4168° N, 3.7038° W',
    description: 'Discover vibrant cities, golden beaches, and rich culture. Tapas, flamenco, and timeless architecture await.',
  },
  {
    name: 'Tokyo Lights',
    category: 'JAPAN',
    location: '35.6762° N, 139.6503° E',
    description: 'Dive into the neon wonderland of Tokyo. Experience the perfect harmony of ancient tradition and future tech.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const duration = 8; // Seconds per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % destinations.length);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, []);

  const destination = destinations[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white px-6 md:px-20 pt-20 pb-12">
      
      {/* 1. Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/back.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* 2. Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />

      {/* 3. Restored Airplane Animation */}
      {/* We use a key based on 'current' so the plane resets its flight every time the slide changes */}
      <motion.img
        key={`plane-${current}`}
        src="/images/plane.png"
        alt="Flying Airplane"
        className="absolute w-[60px] md:w-[100px] z-20 opacity-40 pointer-events-none shadow-2xl"
        initial={{ x: '-10vw', y: '40vh', rotate: 5, opacity: 0 }}
        animate={{ x: '110vw', y: '20vh', opacity: 0.4 }}
        transition={{ duration: duration, ease: "linear" }}
      />

      {/* 4. Main Content Wrapper */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={destination.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="w-full md:max-w-2xl"
          >
            {/* Meta Info */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-yellow-500" />
              <p className="text-[10px] font-mono tracking-[0.4em] text-yellow-500 uppercase">
                {destination.location}
              </p>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">
              {destination.name.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 border-y border-white/10 py-2">
                {destination.category}
              </span>
            </h1>

            {/* Description Card */}
            <p className="text-sm md:text-base text-white/70 mb-10 max-w-md leading-relaxed border-l-2 border-yellow-500/50 pl-5 bg-white/5 py-6 pr-6 rounded-r-2xl backdrop-blur-md border shadow-2xl">
              {destination.description}
            </p>

            {/* WhatsApp & Actions */}
            <div className="relative z-50 flex flex-wrap items-center gap-8">
              <div className="hover:scale-105 transition-transform active:scale-95">
                <WhatsAppButton />
              </div>
              <button className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-yellow-500 transition-colors flex items-center gap-3 group">

                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 5. Fixed HUD Loading Indicators (Right Side) */}
        <div className="hidden lg:flex flex-col gap-8">
          {destinations.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrent(idx)}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <span className={`font-mono text-[10px] transition-colors ${current === idx ? 'text-yellow-500 font-bold' : 'text-white/20 group-hover:text-white/50'}`}>
                0{idx + 1}
              </span>
              <div className="w-32 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                {current === idx && (
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: duration, ease: "linear" }}
                    className="absolute inset-0 bg-yellow-500 shadow-[0_0_12px_#eab308]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Decorative Visual Footer */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-4 opacity-20 pointer-events-none">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-white" />
        <span className="text-[8px] font-mono tracking-[1em] uppercase">Navigation Systems Online</span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-white" />
      </div>
    </section>
  );
}