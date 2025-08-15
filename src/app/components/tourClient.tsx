'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TourClient() {
  const searchParams = useSearchParams();

  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [budget, setBudget] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setRegion(searchParams.get('region') || '');
    setCountry(searchParams.get('country') || '');
    setBudget(searchParams.get('budget') || '');
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!region || !country || !budget) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    setShowToast(true);

    const phoneNumber = '2349151602921';
    const message = `Hi, I want to book a tour!\nRegion: ${region}\nCountry: ${country}\nBudget: ${budget}`;
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.location.href = link;
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-blue-50 p-6 relative">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Your Tour Preferences
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Region"
            className="w-full text-gray-700 px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className="w-full text-gray-700 px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">Budget</label>
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Budget"
            className="w-full px-4 text-gray-700 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition w-full"
        >
          Submit & Chat on WhatsApp
        </button>
      </form>

      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
          ✅ Tour request sent! Redirecting to WhatsApp...
        </div>
      )}
    </section>
  );
}