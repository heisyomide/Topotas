'use client';

const testimonials = [
  { name: 'Remi Olaleye', text: 'Amazing experience — Topotas is the best!' },
  { name: 'Susan Johnson', text: 'Highly recommend!' },
  { name: 'David Adeyemi', text: 'The best travel agency!' },
  { name: 'Chidima Okafor', text: 'Thank you, Topotas!' },
  { name: 'Fatima Ali', text: 'Unforgettable trip!' },
  { name: 'Mary Adewale', text: 'Top-notch service and great value!' },
  { name: 'Aisha Bello', text: 'Loved every moment of my trip!' },
  { name: 'Kemi Olaniyan', text: 'Professional and friendly staff!' },
  { name: 'Sarah Olootu', text: 'Best travel agency I&apos;ve ever used!' },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-12 bg-blue-50">
      <h2 className="text-3xl text-center font-bold text-blue-900 mb-10">Testimonials</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((review) => (
          <div key={review.name} className="bg-white p-6 rounded shadow text-center">
            <p className="italic text-blue-800 mb-4">&quot;{review.text}&quot;</p>
            <p className="font-semibold text-blue-900">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}