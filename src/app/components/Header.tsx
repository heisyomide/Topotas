'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-xl border-b border-white/10 h-14 flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* Logo - Scaled down for a professional, "Fit" look */}
        <div className="relative flex items-center">
          <Image
            src="/images/topp.png"
            alt="Topotas Logo"
            width={90} // Reduced width for a tighter fit
            height={30}
            className="brightness-0 invert object-contain hover:opacity-80 transition-opacity cursor-pointer"
            priority
          />
        </div>
        
        {/* System Readout - Minimized and Sleek */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse" />
              <p className="font-mono text-[8px] tracking-[0.2em] text-yellow-500 uppercase">
                Terminal Online
              </p>
            </div>
            <p className="text-[9px] text-white/40 font-mono tracking-tighter">
              ID: RC-1509877
            </p>
          </div>

          {/* Optional: Global Menu Trigger (Simplified) */}
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <button className="group flex flex-col gap-1 items-end">
            <div className="w-4 h-0.5 bg-white group-hover:w-6 transition-all" />
            <div className="w-6 h-0.5 bg-yellow-500" />
          </button>
        </div>
      </div>
    </header>
  );
}