'use client';

import Image from 'next/image';
import Link from 'next/link';

const offers = [
  { name: 'United Kingdom', price: '$5,000', image: '/images/ukkk.jpg' },
  { name: 'Spain', price: '$4,000', image: '/images/spain.jpg' },
  { name: 'Turkey', price: '$2,000', image: '/images/turkey.jpg' },
  { name: 'Italy', price: '$3,000', image: '/images/italy.jpg' },
  { name: 'USA', price: '$4,000', image: '/images/usa.jpg' },
  { name: 'Canada', price: '$4,000', image: '/images/canada.jpg' },
];

export default function BestOffers() {
  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-3xl text-center font-bold mb-10 text-blue-900">Best Offers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {offers.map((offer) => (
          <Link
            key={offer.name}
            href={`/tours?country=${offer.name}&budget=${offer.price.replace('$', '')}`}
            className="block text-center hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={offer.image}
              alt={offer.name}
              width={300}
              height={200}
              className="rounded shadow mx-auto"
            />
            <p className="mt-3 text-lg font-semibold text-blue-800">{offer.name}</p>
            <p className="text-yellow-600 font-medium">{offer.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}