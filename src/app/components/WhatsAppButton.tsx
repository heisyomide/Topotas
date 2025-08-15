'use client';

import React from 'react';

interface Props {
  region?: string;
  country?: string;
  budget?: string;
}

const WhatsAppButton: React.FC<Props> = ({ region, country, budget }) => {
  const phoneNumber = '2349151602921';

  const message = `Hi, I want to book a trip!
Region: ${region || 'N/A'}
Country: ${country || 'N/A'}
Budget: ${budget || 'N/A'}`;

  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex justify-center mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition"
      >
        💬 Contact Us
      </a>
    </div>
  );
};

export default WhatsAppButton;