'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white pt-40 pb-20 px-6 overflow-hidden">
      {/* Background Ambient Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-[1px] bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Origin & Purpose</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Topota<span className="text-yellow-500">s</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Optimum Services</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed border-l border-white/10 pl-6">
            Travel is more than a destination; it’s a journey of discovery and connection. We provide the infrastructure for your most unforgettable memories.
          </p>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission Block */}
          <motion.div 
            whileHover={{ x: 10 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative group"
          >
            <div className="text-yellow-500 font-mono text-[10px] mb-4 uppercase tracking-widest">// Mission_Statement</div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Accessible Exploration</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Making global travel exciting and seamless. From Santorini sunsets to African safaris, we engineer joyful transitions across borders.
            </p>
          </motion.div>

          {/* Offerings Block */}
          <motion.div 
            whileHover={{ x: 10 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <div className="text-yellow-500 font-mono text-[10px] mb-4 uppercase tracking-widest">// Capability_Matrix</div>
            <ul className="grid grid-cols-1 gap-3">
              {['Custom Visa Packages', 'Budget-Optimized Planning', '24/7 Intelligence Support', 'Local Global Expertise'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Chosen Block */}
          <motion.div 
            whileHover={{ x: -10 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <div className="text-yellow-500 font-mono text-[10px] mb-4 uppercase tracking-widest">// Core_Values</div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Travel Intelligence</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              We aren't just agents; we are travel companions. Our dedicated team is passionate about delivering honesty and precision in every deal.
            </p>
          </motion.div>

          {/* History/CAC Block */}
          <motion.div 
            whileHover={{ x: -10 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20"
          >
            <div className="text-yellow-500 font-mono text-[10px] mb-4 uppercase tracking-widest">// Verified_Entity</div>
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight">Est. 2013</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Assisting thousands of explorers since 2013. Registered under the Corporate Affairs Commission (CAC).
            </p>
            <div className="inline-block px-4 py-2 bg-black/40 border border-yellow-500/30 rounded font-mono text-yellow-500 text-xs">
              REG_NO: 1509877
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Side Label */}
      <div className="fixed left-6 bottom-10 hidden xl:block">
        <span className="[writing-mode:vertical-lr] rotate-180 text-[8px] font-mono text-white/20 uppercase tracking-[1em]">
          About_Section_Intel_v2.0
        </span>
      </div>
    </section>
  );
}