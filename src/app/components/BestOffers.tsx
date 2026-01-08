'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const offers = [
  { name: 'United Kingdom', image: '/images/ukkk.jpg', code: 'UK-044', price: 'From $1,200' },
  { name: 'Spain', image: '/images/spain.jpg', code: 'ES-034', price: 'From $950' },
  { name: 'Turkey', image: '/images/turkey.jpg', code: 'TR-090', price: 'From $800' },
  { name: 'Italy', image: '/images/italy.jpg', code: 'IT-039', price: 'From $1,100' },
  { name: 'USA', image: '/images/usa.jpg', code: 'US-001', price: 'From $1,500' },
  { name: 'Canada', image: '/images/canada.jpg', code: 'CA-001', price: 'From $1,400' },
];

export default function BestOffers() {
  return (
    <section className="px-6 py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with futuristic "Scanner" line */}
        <div className="relative mb-16 inline-block">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Prime <span className="text-yellow-500">Destinations</span>
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-yellow-500/50">
            <motion.div 
              className="w-1/3 h-full bg-yellow-500 shadow-[0_0_10px_#eab308]"
              animate={{ x: ['0%', '200%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offers.map(({ name, image, code, price }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/tours?country=${encodeURIComponent(name)}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
              >
                {/* Destination Image with Zoom on Hover */}
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] text-yellow-500 tracking-[0.3em] bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-yellow-500/30">
                      {code}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-1">
                      {name}
                    </h3>
                    <div className="overflow-hidden">
                        <p className="text-yellow-500 font-mono text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          {price}
                        </p>
                    </div>
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(234,179,8,0.2)]" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}