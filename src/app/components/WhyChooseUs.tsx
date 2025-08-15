'use client';

import Image from 'next/image';

const reasons = [
  { title: 'Affordable Price Guarantee', icon: '/images/affordd.png' },
  { title: 'Wide Variety of Destinations', icon: '/images/wrld.png' },
  { title: 'Highly Qualified Service', icon: '/images/up.png' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 text-gray-800 text-center px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {reasons.map((reason) => (
          <div key={reason.title}>
            <Image
              src={reason.icon}
              alt={reason.title}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold">{reason.title}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}