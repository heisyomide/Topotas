'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'Santorini, Greece',
    image: '/images/santorini.jpg',
    coords: '36.3932° N, 25.4615° E',
    description: 'Whitewashed cliffs, blue domes, and sunsets that steal your breath.',
  },
  {
    name: 'Kyoto, Japan',
    image: '/images/kyoto.jpg',
    coords: '35.6762° N, 139.6503° E',
    description: 'Temples, cherry blossoms, and timeless tradition.',
  },
  {
    name: 'Cape Town, South Africa',
    image: '/images/capetown.jpg',
    coords: '33.9249° S, 18.4241° E',
    description: 'Mountains meet ocean in this vibrant coastal gem.',
  },
  {
    name: 'Bali, Indonesia',
    image: '/images/bali.jpg',
    coords: '8.3405° S, 115.0920° E',
    description: 'Tropical paradise with culture, surf, and serenity.',
  },
];

export default function DiscoverPage() {
  return (
    <section className="min-h-screen bg-[#050505] text-white pt-40 pb-20 px-6 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-[500px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-[1px] bg-yellow-500" />
              <span className="text-yellow-500 font-mono text-[10px] tracking-[0.4em] uppercase">Global Database</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Explore <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">The Unseen</span>
            </h1>
          </div>
          <p className="text-white/40 text-sm max-w-xs font-light font-mono uppercase tracking-widest leading-relaxed">
            // Accessing handpicked sector intelligence for primary travel units.
          </p>
        </div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinations.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Large Entry Number Backdrop */}
              <span className="absolute -top-10 -left-6 text-[10rem] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-yellow-500/[0.05] transition-colors">
                0{index + 1}
              </span>

              <div className="relative bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-yellow-500/30 transition-all duration-500 shadow-2xl">
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />
                  {/* Digital HUD Overlay on Image */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    <p className="text-[9px] font-mono text-yellow-500 uppercase tracking-tighter">
                      LOC: {place.coords}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">
                    {place.name}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                    {place.description}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest hover:gap-4 transition-all">
                    Initialize Route <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Side Element */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 items-center">
        <div className="h-20 w-px bg-white/10" />
        <span className="[writing-mode:vertical-lr] text-[8px] font-mono text-white/20 uppercase tracking-[1em]">Discover_Module_v4.0</span>
        <div className="h-20 w-px bg-white/10" />
      </div>
    </section>
  );
}