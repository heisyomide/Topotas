'use client';

export default function EventsPage() {
  const events = [
    {
      title: 'Summer Escape to Santorini',
      date: 'August 15–22, 2025',
      location: 'Santorini, Greece',
      description: 'Join our guided tour through the cliffs and coastlines of Santorini. Limited spots available!',
    },
    {
      title: 'Cherry Blossom Tour in Kyoto',
      date: 'April 2–10, 2026',
      location: 'Kyoto, Japan',
      description: 'Experience Japan’s iconic sakura season with cultural stops and local cuisine.',
    },
    {
      title: 'Cape Town Adventure Week',
      date: 'November 5–12, 2025',
      location: 'Cape Town, South Africa',
      description: 'Hike Table Mountain, explore vineyards, and enjoy the vibrant city life.',
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Travel Events</h1>
        <p className="text-blue-700 text-lg">
          Join exclusive group trips and seasonal experiences curated by Topotas Travel.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-blue-900 mb-1">{event.title}</h2>
            <p className="text-sm text-blue-700 mb-2">
              📅 {event.date} | 📍 {event.location}
            </p>
            <p className="text-blue-800">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}