'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Decorative Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent shadow-[0_0_20px_rgba(234,179,8,0.4)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter uppercase leading-none">
                Topota<span className="text-yellow-500">s</span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase mt-1">
                Optimum Services
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Redefining global mobility through cutting-edge travel logistics and immersive experiences. 
              Your portal to the world’s most exclusive sectors.
            </p>
          </div>

          {/* Quick Links / Status */}
          <div className="grid grid-cols-2 gap-4 font-mono text-xs uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-yellow-500 transition-colors opacity-60 hover:opacity-100">// Exploration</a>
              <a href="#" className="hover:text-yellow-500 transition-colors opacity-60 hover:opacity-100">// Visa Protocols</a>
              <a href="#" className="hover:text-yellow-500 transition-colors opacity-60 hover:opacity-100">// Archives</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-yellow-500 transition-colors opacity-60 hover:opacity-100">// Agency Info</a>
              <a href="#" className="hover:text-yellow-500 transition-colors opacity-60 hover:opacity-100">// Support Desk</a>
              <a href="#" className="hover:text-yellow-500 transition-colors opacity-60 hover:opacity-100">// Privacy Policy</a>
            </div>
          </div>

          {/* Connect / Social Nodes */}
          <div className="flex flex-col md:items-end gap-6">
            <div className="text-right">
              <p className="text-[10px] font-mono text-yellow-500 mb-4 uppercase tracking-[0.2em]">Signal Channels:</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, url: 'https://facebook.com' },
                  { icon: <FaTwitter />, url: 'https://twitter.com' },
                  { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
                  { icon: <FaInstagram />, url: 'https://instagram.com' },
                  { icon: <FaYoutube />, url: 'https://youtube.com' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all text-lg"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="flex items-center gap-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <span>&copy; {currentYear} Topotas Services</span>
            <span className="hidden md:block">|</span>
            <span className="text-yellow-500/50 animate-pulse">System Online</span>
          </div>
          
          <div className="text-[10px] font-mono text-white/20 uppercase">
            Designed by Yomide
          </div>
        </div>
      </div>
    </footer>
  );
}