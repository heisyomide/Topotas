'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const reasons = [
  { 
    title: 'Affordable Price Guarantee', 
    id: '01',
    label: 'COST_OPTIMIZATION',
    description: 'Advanced algorithms ensure you get the most competitive rates across all sectors.',
    icon: '/images/affordd.png' 
  },
  { 
    title: 'Wide Variety of Destinations', 
    id: '02',
    label: 'GLOBAL_NETWORK',
    description: 'Access to over 150+ restricted and open travel zones worldwide.',
    icon: '/images/wrld.png' 
  },
  { 
    title: 'Highly Qualified Service', 
    id: '03',
    label: 'EXPERT_GUIDANCE',
    description: '24/7 priority support with dedicated travel intelligence officers.',
    icon: '/images/up.png' 
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#050505] text-white py-24 px-6 overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none select-none">
        <h2 className="text-[15vw] font-black leading-none uppercase">Topota</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="text-yellow-500 font-mono text-sm tracking-[0.4em] uppercase mb-4">Core Advantage</span>
          <h2 className="text-4xl md:text-5xl font-black text-center uppercase tracking-tighter">
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Exploration</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-yellow-500/50 transition-colors duration-500"
            >
              {/* Technical Label */}
              <div className="absolute top-4 right-6 font-mono text-[10px] text-white/20 group-hover:text-yellow-500/50">
                // {reason.label}
              </div>

              {/* Icon Container with Floating Animation */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8 relative"
              >
                <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={60}
                  height={60}
                  className="relative z-10 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"
                />
              </motion.div>

              <div className="flex items-start gap-4 mb-4">
                <span className="text-yellow-500 font-mono text-lg font-bold leading-none">{reason.id}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight leading-tight">
                  {reason.title}
                </h3>
              </div>

              <p className="text-sm text-white/50 leading-relaxed font-light">
                {reason.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="absolute bottom-2 right-2 w-[2px] h-4 bg-yellow-500" />
                 <div className="absolute bottom-2 right-2 w-4 h-[2px] bg-yellow-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom decorative divider */}
      <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}