'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

const destinations = [
  {
    name: 'Santorini Escape',
    category: 'GREECE',
    description:
      'Bask in the beauty of whitewashed cliffs and endless blue seas. Your dream Mediterranean getaway awaits.',
  },
  {
    name: 'Safari Adventure',
    category: 'KENYA',
    description:
      'Experience the thrill of the wild. Lions, elephants, and sunsets over the savannah.',
  },
  {
    name: 'Tokyo Lights',
    category: 'JAPAN',
    description:
      'Dive into the neon wonderland of Tokyo. Culture, cuisine, and cutting-edge tech.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % destinations.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const destination = destinations[current];

  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center px-4 py-16 text-white"
      style={{
        backgroundImage: "url('/images/CGG.PNG')", // Replace with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Airplane animation */}
      <motion.img
        src="/images/plane.png" // Transparent PNG of airplane
        alt="Flying Airplane"
        className="absolute w-[70px] z-10"
        initial={{ x: '-550px' }}
        animate={{ x: '100vw' }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ top: '89%' }} // Adjust vertical position
      />

      {/* Destination Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={destination.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-xl text-center"
        >
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {destination.name} <br />
            <span className="text-yellow-300">{destination.category}</span>
          </h1>
          <p className="text-white/90 mb-6">{destination.description}</p>
          <WhatsAppButton />    
        </motion.div>
      </AnimatePresence>
    </section>
  );
}