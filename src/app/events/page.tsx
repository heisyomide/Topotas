'use client';

import { motion } from 'framer-motion';

export default function EventsPage() {
  const events = [
    {
      title: 'Summer Escape to Santorini',
      date: 'AUG 15–22, 2025',
      location: 'SANTORINI, GREECE',
      id: 'EVT-001',
      description: 'Join our guided tour through the cliffs and coastlines of Santorini. Limited spots available!',
    },
    {
      title: 'Cherry Blossom Tour in Kyoto',
      date: 'APR 02–10, 2026',
      location: 'KYOTO, JAPAN',
      id: 'EVT-002',
      description: 'Experience Japan’s iconic sakura season with cultural stops and local cuisine.',
    },
    {
      title: 'Cape Town Adventure Week',
      date: 'NOV 05–12, 2025',
      location: 'CAPE TOWN, SOUTH AFRICA',
      id: 'EVT-003',
      description: 'Hike Table Mountain, explore vineyards, and enjoy the vibrant city life.',
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-[1px] bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Scheduled Deployments</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Upcoming <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Operations</span>
          </h1>
          
          <p className="text-white/40 max-w-xl font-light leading-relaxed font-mono text-xs uppercase tracking-widest">
            // Synchronize your calendar with our global sector group trips.
          </p>
        </div>

        {/* Events Timeline/Grid */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Animated Glow Border on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-xl flex flex-col md:flex-row gap-8 items-start hover:border-white/20 transition-all">
                
                {/* Meta Data Sidebar */}
                <div className="w-full md:w-48 shrink-0">
                  <div className="text-yellow-500 font-mono text-[10px] font-bold mb-2 tracking-widest uppercase">
                    [{event.id}]
                  </div>
                  <div className="text-white text-sm font-black tracking-tight mb-1">
                    {event.date}
                  </div>
                  <div className="text-white/30 font-mono text-[9px] uppercase tracking-widest">
                    {event.location}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-yellow-500 transition-colors">
                    {event.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                    {event.description}
                  </p>
                  
                  <button className="flex items-center gap-3 text-[10px] font-mono font-black text-yellow-500 uppercase tracking-[0.3em] hover:gap-5 transition-all">
                    Register Interest <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Technical Stamp */}
        <div className="mt-20 flex justify-center opacity-20">
          <div className="h-px bg-white/20 flex-1 self-center" />
          <p className="px-6 font-mono text-[8px] uppercase tracking-[1em]">Terminal_Active</p>
          <div className="h-px bg-white/20 flex-1 self-center" />
        </div>
      </div>
    </section>
  );
}