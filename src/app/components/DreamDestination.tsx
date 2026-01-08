'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const countriesByRegion: Record<string, string[]> = {
  Asia: ['India', 'Japan', 'Thailand', 'UAE', 'Singapore', 'South Korea'],
  Africa: ['South Africa', 'Egypt', 'Morocco', 'Kenya', 'Nigeria', 'Mauritius'],
  Europe: ['Germany', 'France', 'Italy', 'Spain', 'Greece', 'United Kingdom', 'Switzerland'],
  Antarctica: ['Research Stations'],
  Australia: ['Australia', 'New Zealand', 'Fiji'],
  'North America': ['USA', 'Canada', 'Mexico', 'Jamaica'],
  'South America': ['Brazil', 'Argentina', 'Chile', 'Colombia'],
};

export default function DreamDestination() {
  const [visaType, setVisaType] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [budget, setBudget] = useState('');

  const selectedCountries = countriesByRegion[region] || [];
  const query = `?visaType=${visaType}&region=${region}&country=${country}&budget=${budget}`;

  const inputStyle = `
    bg-white/5 border border-white/10 backdrop-blur-md text-white px-4 py-3 rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all appearance-none
    cursor-pointer hover:bg-white/10 w-full md:w-auto min-w-[180px]
  `;

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#050505]">
      {/* Background Decor */}
      <div 
        className="absolute inset-0 opacity-30 grayscale"
        style={{ backgroundImage: "url('/images/BG.jpg')", backgroundSize: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-2 justify-center md:justify-start"
          >
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-yellow-500 font-mono text-xs tracking-widest uppercase">System Ready: Voyage Finder v2.0</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Dream Sector</span>
          </h2>
        </header>

        {/* The Interface Card */}
        <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Visa Type Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-1">Protocol</label>
              <select
                value={visaType}
                onChange={(e) => setVisaType(e.target.value)}
                className={inputStyle}
              >
                <option value="" className="bg-zinc-900">Visa Type</option>
                <option value="Visitor" className="bg-zinc-900">Visitor</option>
                <option value="Study" className="bg-zinc-900">Study</option>
                <option value="Work" className="bg-zinc-900">Work</option>
              </select>
            </div>

            {/* Region Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-1">Zone</label>
              <select
                value={region}
                onChange={(e) => { setRegion(e.target.value); setCountry(''); }}
                className={inputStyle}
              >
                <option value="" className="bg-zinc-900">Select Region</option>
                {Object.keys(countriesByRegion).map((r) => (
                  <option key={r} value={r} className="bg-zinc-900">{r}</option>
                ))}
              </select>
            </div>

            {/* Country Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-1">Destination</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={`${inputStyle} ${!region ? 'opacity-30 cursor-not-allowed' : ''}`}
                disabled={!region}
              >
                <option value="" className="bg-zinc-900">Target Country</option>
                {selectedCountries.map((c) => (
                  <option key={c} value={c} className="bg-zinc-900">{c}</option>
                ))}
              </select>
            </div>

            {/* Budget Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/50 font-bold ml-1">Allocation</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={inputStyle}
              >
                <option value="" className="bg-zinc-900">Budget Limit</option>
                <option value="500" className="bg-zinc-900">$500+</option>
                <option value="1000" className="bg-zinc-900">$1000+</option>
                <option value="3000" className="bg-zinc-900">$3000+</option>
              </select>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
            <div className="text-left hidden md:block">
              <p className="text-xs text-white/30 font-mono italic">
                {country ? `Route locked: ${country} via ${region}` : 'Awaiting flight coordinates...'}
              </p>
            </div>
            
            <Link
              href={`/tours${query}`}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-black transition-all duration-200 bg-yellow-500 rounded-full hover:bg-yellow-400 w-full md:w-auto overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                INITIATE BOOKING
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}