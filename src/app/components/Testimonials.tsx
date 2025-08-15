'use client';

const testimonials = [
  { name: 'Remi Olaleye', text: 'Amazing experience Topotas is the best!' },
  { name: 'Susan Johnson', text: 'Highly recommend!' },
  { name: 'David Adeyemi', text: 'The best travel agency!' },
  { name: 'Chidima Okafor', text: 'Thank you Topotas!' },
  { name: 'Fatima Ali', text: 'Unforgettable trip!' },
  { name: 'Mary Adewale', text: 'Top-notch service and great value!' },
  { name: 'Aisha Bello', text: 'Loved every moment of my trip!' },
  { name: 'Kemi Olaniyan', text: 'Professional and friendly staff!' },
  { name: 'Sarah Olootu', text: 'Best travel agency I have ever used!' },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl text-center font-bold mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {testimonials.map((review) => (
          <div key={review.name} className="bg-white p-4 rounded shadow">
            <p className="italic">"{review.text}"</p>
            <p className="mt-2 font-semibold">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}