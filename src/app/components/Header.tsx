'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py--7 px-8 flex flex-col md:flex-row justify-between items-center">
      {/* Logo as PNG */}
      <div className="flex items-center">
        <Image
          src="/images/travel.png" // Place this PNG in your public/images folder
          alt="Topotas Travel Agency"
          width={70}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Right: Search + Contact */}
      <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="px-3 bg-gray-100 py-1 rounded text-black"
          />
          <button className="bg-yellow-500 px-4 py-1 rounded">Find us</button>
        </div>
        <div className="mt-2 text-sm">CALL US FREE! +234-800-123-4567</div>
      </div>
    </header>
  );
} 