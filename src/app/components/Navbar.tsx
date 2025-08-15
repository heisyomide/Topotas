'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white-700 text-gray-800 px-6 py-2">
      <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
        <li>
          <Link href="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/tours" className="hover:text-gray-300">Tours</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
        </li>
        <li>
          <Link href="/discover" className="hover:text-gray-300">Discover</Link>
        </li>
        <li>
          <Link href="/events" className="hover:text-gray-300">Events</Link>
        </li>
        <li>
          <Link href="/rewards" className="hover:text-gray-300">Rewards</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-300">Travel Blog</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}