'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DreamDestination() {
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [budget, setBudget] = useState('');

  const query = `?region=${region}&country=${country}&budget=${budget}`;

  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: "url('/images/BG.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 text-center max-w-xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          LET US TAKE YOU TO YOUR DREAM DESTINATIONS
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-4 py-2 rounded text-black bg-white"
          >
            <option value="">Select Region</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="Australia">Australia</option>
          </select>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="px-4 py-2 rounded text-black bg-white"
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Greece">Greece</option>
            <option value="Spain">Spain</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="Italy">Italy</option>
          </select>

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="px-4 py-2 rounded text-black bg-white"
          >
            <option value="">Your Budget ($)</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
            <option value="2000">$2000</option>
            <option value="3000">$3000</option>
          </select>
        </div>

        <Link
          href={`/tours${query}`}
          className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
        >
          FIND YOUR TOURS
        </Link>
      </div>
    </section>
  );
}