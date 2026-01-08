'use client';

import { motion } from 'framer-motion';

const articles = [
  {
    title: 'Shimla’s Snowfall Boosts Tourism and Apple Farming',
    date: 'JAN 08, 2026',
    category: 'ECO-TOURISM',
    summary:
      'Shimla enjoyed its second light snowfall of the season, drawing tourists and giving a boost to local apple farming — a win for both economy and nature.',
    link: 'https://timesofindia.indiatimes.com/travel/travel-news',
  },
  {
    title: 'Thailand Launches Global E-Visa System',
    date: 'JAN 01, 2026',
    category: 'VISA-UPDATE',
    summary:
      'Thailand is making travel easier with a new global e-visa system, streamlining access for international visitors through a digital-first protocol.',
    link: 'https://timesofindia.indiatimes.com/travel/travel-news',
  },
  {
    title: 'Cross River Acquires Aircraft to Boost Tourism',
    date: 'DEC 28, 2025',
    category: 'AVIATION',
    summary:
      'Nigeria’s Cross River State has acquired two aircraft to enhance tourism and economic growth, signaling a new era for regional travel connectivity.',
    link: 'https://guardian.ng/category/saturday-magazine/travel-a-tourism/',
  },
  {
    title: 'United Airlines Adds Apple TV+ Onboard Entertainment',
    date: 'DEC 15, 2025',
    category: 'IN-FLIGHT',
    summary:
      'Flying just got more fun — United Airlines now offers hit Apple TV+ shows onboard, making long-haul flights a premium cinematic experience.',
    link: 'https://www.travelpulse.com/news',
  },
];

export default function TravelBlogPage() {
  return (
    <section className="min-h-screen bg-[#050505] text-white pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-[1px] bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-white/60">
              Live Intel Feed
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Travel <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Bulletins</span>
          </h1>
          <p className="text-white/40 max-w-xl font-light leading-relaxed">
            Latest transmissions from the global travel sector. Stay updated with logistics, climate shifts, and entry protocols.
          </p>
        </div>

        {/* Blog Feed */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-md flex flex-col md:flex-row gap-6 items-start">
                {/* Meta Column */}
                <div className="w-full md:w-40 shrink-0">
                  <div className="text-yellow-500 font-mono text-[10px] font-bold tracking-widest mb-1 uppercase">
                    [{article.category}]
                  </div>
                  <div className="text-white/30 font-mono text-[11px]">
                    {article.date}
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors mb-4 uppercase tracking-tight">
                    {article.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                    {article.summary}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 hover:text-white group"
                  >
                    Open Full Report 
                    <span className="text-yellow-500 group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Technical Stamp */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20">
          <p className="text-[10px] font-mono tracking-widest uppercase">Encryption Mode: AES-256</p>
          <p className="text-[10px] font-mono tracking-widest uppercase">Verified by Topotas Intelligence</p>
        </div>
      </div>
    </section>
  );
}