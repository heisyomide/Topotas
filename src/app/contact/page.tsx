'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('ESTABLISHING CONNECTION...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('TRANSMISSION SUCCESSFUL.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('LINK ERROR. PLEASE RETRY.');
      }
    } catch (error) {
      setStatus('UPLINK FAILED.');
    }
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Technical Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-yellow-500 font-mono text-xs tracking-widest uppercase">Direct Uplink</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Get in <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Touch</span>
            </h1>
            <p className="text-white/50 max-w-sm font-light leading-relaxed">
              Our agents are standing by to process your global mobility requirements. Secure your sector today.
            </p>
          </div>

          <div className="space-y-4 font-mono text-[11px] uppercase tracking-widest text-white/40">
            <div className="p-4 border border-white/5 bg-white/[0.02] rounded-lg">
              <p className="text-yellow-500 mb-1">// Email_Protocol</p>
              <p className="text-white">info@topotasoptimumservices.com</p>
            </div>
            <div className="p-4 border border-white/5 bg-white/[0.02] rounded-lg">
              <p className="text-yellow-500 mb-1">// HQ_Location</p>
              <p className="text-white">Canada Sector</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          {/* Form Glass Container */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          
          <form 
            onSubmit={handleSubmit} 
            className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl space-y-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-1">Identity_Input</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all text-sm"
                  placeholder="Full Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-1">Comms_Channel</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all text-sm"
                  placeholder="Email Address"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-1">Data_Packet</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 transition-all text-sm resize-none"
                  placeholder="Your Inquiry..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="relative w-full group overflow-hidden bg-yellow-500 text-black font-black uppercase text-xs tracking-[0.3em] py-4 rounded-xl hover:bg-yellow-400 transition-all"
            >
              <span className="relative z-10">Execute Transmission</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {status && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center font-mono text-[10px] text-yellow-500 tracking-widest pt-4 animate-pulse"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 z-[-1] opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
    </section>
  );
}