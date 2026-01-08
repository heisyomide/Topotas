'use client';

import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Remi Olaleye', text: 'Amazing experience — Topotas is the best!', status: 'Verified Traveler' },
  { name: 'Susan Johnson', text: 'Highly recommend!', status: 'Elite Member' },
  { name: 'David Adeyemi', text: 'The best travel agency!', status: 'Verified Traveler' },
  { name: 'Chidima Okafor', text: 'Thank you, Topotas!', status: 'Frequent Flyer' },
  { name: 'Fatima Ali', text: 'Unforgettable trip!', status: 'Verified Traveler' },
  { name: 'Mary Adewale', text: 'Top-notch service and great value!', status: 'VIP Access' },
  { name: 'Aisha Bello', text: 'Loved every moment of my trip!', status: 'Verified Traveler' },
  { name: 'Kemi Olaniyan', text: 'Professional and friendly staff!', status: 'Global Explorer' },
  { name: 'Sarah Olootu', text: 'Best travel agency ever!', status: 'Verified Traveler' },
];

// Helper to duplicate items for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-xs tracking-widest uppercase">Community Transmissions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Traveler <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Feedback</span>
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex flex-col gap-8">
        {/* Row 1: Moving Left */}
        <div className="flex overflow-hidden select-none group">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-8"
          >
            {duplicatedTestimonials.map((review, idx) => (
              <TestimonialCard key={idx} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex overflow-hidden select-none group">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-8"
          >
            {duplicatedTestimonials.map((review, idx) => (
              <TestimonialCard key={`row2-${idx}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scanning Line Decoration */}
      <div className="mt-20 relative h-[1px] w-full bg-white/5">
        <motion.div 
          animate={{ left: ['0%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 w-24 h-full bg-yellow-500 shadow-[0_0_15px_#eab308]"
        />
      </div>
    </section>
  );
}

function TestimonialCard({ review }: { review: any }) {
  return (
    <div className="w-[350px] flex-shrink-0 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative group hover:border-yellow-500/30 transition-all duration-500">
      {/* Visual background element */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21Z" />
        </svg>
      </div>

      <p className="text-lg text-white/80 italic mb-6 leading-relaxed relative z-10">
        &quot;{review.text}&quot;
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-200 flex items-center justify-center text-black font-bold">
          {review.name[0]}
        </div>
        <div>
          <p className="font-bold text-white uppercase text-sm tracking-tight">{review.name}</p>
          <p className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest">{review.status}</p>
        </div>
      </div>
    </div>
  );
}