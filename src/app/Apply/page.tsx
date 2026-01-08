'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApplicationPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(formRef.current!);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Upload failed:', err);
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white pt-40 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-yellow-500 font-mono text-xs tracking-[0.5em] uppercase font-bold">Document Processing Hub</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Your Mission</span>
          </h1>
          <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed">
            Follow the protocols below to submit your travel documentation. Every field is a step toward your next global sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* STEP 1: DOWNLOAD */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
          >
            <span className="absolute top-4 right-6 text-4xl font-black text-white/5 group-hover:text-yellow-500/10 transition-colors">01</span>
            <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Download</h2>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              Obtain the official travel authorization protocols in PDF format.
            </p>
            <a
              href="/forms/travel-application.pdf"
              download
              className="flex items-center justify-center gap-3 w-full bg-white text-black text-[10px] font-black uppercase tracking-widest py-4 rounded-xl hover:bg-yellow-500 transition-colors"
            >
              📄 Form_Download.pdf
            </a>
          </motion.div>

          {/* STEP 2: SUBMISSION */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl relative">
              <span className="absolute top-4 right-6 text-4xl font-black text-white/5">02</span>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Secure Uplink</h2>
              <p className="text-white/40 text-sm mb-6">
                Direct transmission via Encrypted Email or Portal Upload.
              </p>

              <div className="mb-8 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                <p className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest mb-1">// Contact_Email</p>
                <p className="text-sm font-bold">info@topotasoptimumservices.com</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="group relative">
                  <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-3 ml-1">
                    Select_File_Protocol
                  </label>
                  <input
                    type="file"
                    name="applicationForm"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-8 text-xs font-mono file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-yellow-500 file:text-black hover:file:bg-yellow-400 cursor-pointer"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-black uppercase text-xs tracking-[0.3em] py-5 rounded-xl transition-all shadow-lg shadow-green-900/20 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Transmitting Data...' : 'Execute Submission'}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-mono text-[10px] text-center uppercase tracking-widest animate-pulse">
                      ✅ Transmission Successful. Sector Locked.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                      <p className="text-red-500 font-mono text-[10px] uppercase tracking-widest mb-2">❌ Link Failure Detected.</p>
                      <a href="https://wa.me/2348068345693" className="text-yellow-500 text-[10px] font-mono hover:underline">Manual WhatsApp Override →</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Checklist */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 p-8 rounded-3xl">
              <h2 className="text-xs font-mono font-black text-yellow-500 uppercase tracking-[0.3em] mb-6">
                // Required_Assets_Checklist
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Completed Primary Form',
                  'Verified Intl. Passport',
                  'High-Res Biometrics',
                  'Proof of Financial Power',
                  'Sector Itinerary'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-mono text-white/60">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}