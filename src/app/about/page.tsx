'use client';

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white text-blue-900 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Topotas Travel Agency</h1>
        <p className="text-lg text-blue-700 mb-8">
          At Topotas Travel Agency, we believe travel is more than just a destination — it&apos;s a journey of discovery, connection, and unforgettable memories.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-blue-800">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🌍 Our Mission</h2>
          <p>
            To make travel accessible, exciting, and seamless for everyone. Whether you&apos;re dreaming of Santorini sunsets or African safaris, we help you get there with ease and joy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">✈ What We Offer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom tour packages</li>
            <li>Budget-friendly travel planning</li>
            <li>24/7 support and guidance</li>
            <li>Global destinations with local expertise</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">💬 Why Choose Us</h2>
          <p>
            We&apos;re not just agents — we&apos;re travel companions. Our team is passionate, experienced, and dedicated to making your journey unforgettable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">📍 Our Story</h2>
          <p>
            Founded in 2020, Topotas Travel started with a simple goal: to help people explore the world without stress. Today, we&apos;ve helped thousands of travelers find their perfect escape.
          </p>
        </div>
      </div>
    </section>
  );
}