'use client';

export default function DiscoverPage() {
  const destinations = [
    {
      name: 'Santorini, Greece',
      image: '/images/santorini.jpg',
      description: 'Whitewashed cliffs, blue domes, and sunsets that steal your breath.',
    },
    {
      name: 'Kyoto, Japan',
      image: '/images/kyoto.jpg',
      description: 'Temples, cherry blossoms, and timeless tradition.',
    },
    {
      name: 'Cape Town, South Africa',
      image: '/images/capetown.jpg',
      description: 'Mountains meet ocean in this vibrant coastal gem.',
    },
    {
      name: 'Bali, Indonesia',
      image: '/images/bali.jpg',
      description: 'Tropical paradise with culture, surf, and serenity.',
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Discover Your Next Destination</h1>
        <p className="text-blue-700 text-lg">
          Explore handpicked locations that promise unforgettable experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {destinations.map((place, index) => (
          <div key={index} className="bg-blue-50 rounded shadow overflow-hidden">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-900">{place.name}</h2>
              <p className="text-blue-700 mt-2">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}