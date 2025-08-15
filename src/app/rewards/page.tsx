'use client';

export default function RewardsPage() {
  const rewards = [
    {
      title: 'Earn Points on Every Booking',
      description: 'Get 1 point for every $10 spent. Points can be redeemed for discounts, upgrades, and free tours.',
    },
    {
      title: 'Exclusive Member Perks',
      description: 'Enjoy early access to seasonal trips, priority support, and surprise travel gifts.',
    },
    {
      title: 'Refer & Earn',
      description: 'Invite friends to Topotas Travel and earn bonus points when they book their first trip.',
    },
    {
      title: 'VIP Tier Benefits',
      description: 'Reach VIP status and unlock premium experiences, luxury stays, and concierge service.',
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Topotas Travel Rewards</h1>
        <p className="text-blue-700 text-lg">
          Travel more, earn more. Our rewards program gives you benefits every step of the journey.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {rewards.map((item, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">{item.title}</h2>
            <p className="text-blue-800">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}