'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface Props {
  visaType?: string;
  region?: string;
  country?: string;
  budget?: string;
}

const WhatsAppButton: React.FC<Props> = ({ visaType, region, country, budget }) => {
  const phoneNumber = '2348068345693';

  const message = `Hi, I want to apply for a ${visaType || 'N/A'} visa!
Region: ${region || 'N/A'}
Country: ${country || 'N/A'}
Budget: $${budget || 'N/A'}`;

  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {/* 1. Neon Aura Effect - Makes the button "Pop" on the dark background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/10 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:border-green-500/50 transition-all shadow-2xl overflow-hidden"
      >
        {/* 2. Moving Gloss Effect */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
        
        {/* 3. Icon with Pulse */}
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
          <FaWhatsapp className="text-xl text-green-500 relative z-10" />
        </div>

        <span className="relative z-10">Contact For Appointment</span>
      </a>

      {/* 4. Technical Sub-label (Optional futuristic touch) */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full text-center">
        <span className="text-[7px] font-mono text-white/20 tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          Secure Line: Active
        </span>
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;