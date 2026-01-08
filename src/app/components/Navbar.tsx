'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Book', href: '/tours' },
  { name: 'About', href: '/about' },
  { name: 'Discover', href: '/discover' },
  { name: 'Events', href: '/events' },
  { name: 'Apply', href: '/Apply' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-20 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <motion.ul 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 p-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className={`px-5 py-2 text-[11px] font-mono uppercase tracking-[0.2em] transition-colors duration-300 block
                  ${isActive ? 'text-yellow-500' : 'text-white/60 hover:text-white'}
                `}
              >
                {/* Visual prefix for tech feel */}
                <span className="opacity-30 mr-1">/</span>
                {link.name}

                {/* Active Indicator Backdrop */}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-yellow-500/10 border border-yellow-500/20 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
}