'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TourClient() {
  const searchParams = useSearchParams();

  const [visaType, setVisaType] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [budget, setBudget] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setVisaType(searchParams.get('visaType') || '');
    setRegion(searchParams.get('region') || '');
    setCountry(searchParams.get('country') || '');
    setBudget(searchParams.get('budget') || '');
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!visaType || !region || !country || !budget) {
      return; // Add custom error handling here if needed
    }

    setIsProcessing(true);

    const phoneNumber = '2348068345693';
    const message = `[MISSION INITIATED]\nVisa Type: ${visaType}\nRegion: ${region}\nCountry: ${country}\nBudget: $${budget}\nStatus: Requesting Appointment.`;
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.location.href = link;
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background Tech Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Protocol Selection</span>
            <span className="w-8 h-[1px] bg-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Visa <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Parameters</span>
          </h1>
          <p className="text-white/40 text-sm font-light uppercase tracking-widest font-mono">
            // Establish journey metadata to begin processing.
          </p>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto relative z-10 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            
            {/* Input Groups */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Visa_Type</label>
              <input
                type="text"
                value={visaType}
                onChange={(e) => setVisaType(e.target.value)}
                placeholder="e.g. Study, Work"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Assigned_Region</label>
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Select Region"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Target_Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Select Country"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-1">Credit_Allocation ($)</label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter Budget"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-500/50 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="md:col-span-2 group relative overflow-hidden bg-yellow-500 text-black font-black uppercase text-xs tracking-[0.3em] py-5 rounded-2xl transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="relative z-10">
                {isProcessing ? 'Synchronizing Data...' : 'Submit Mission Brief'}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </form>

        <AnimatePresence>
          {isProcessing && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 text-center"
            >
              <p className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.5em] animate-pulse">
                Establishing Secure Link to WhatsApp...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Side HUD Decoration */}
      <div className="fixed right-6 bottom-10 hidden xl:block">
        <p className="[writing-mode:vertical-lr] text-[8px] font-mono text-white/20 uppercase tracking-[1em]">
          Topotas_Deployment_Module
        </p>
      </div>
    </section>
  );
}