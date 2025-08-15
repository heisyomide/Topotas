'use client';

export default function TravelBlogPage() {
  const articles = [
    {
      title: 'Shimla’s Snowfall Boosts Tourism and Apple Farming',
      date: 'August 12, 2025',
      summary:
        'Shimla enjoyed its second light snowfall of the season, drawing tourists and giving a boost to local apple farming — a win for both economy and nature.',
      link: 'https://timesofindia.indiatimes.com/travel/travel-news',
    },
    {
      title: 'Thailand Launches Global E-Visa System',
      date: 'August 1, 2025',
      summary:
        'Thailand is making travel easier with a new global e-visa system starting January 2025, streamlining access for international visitors.',
      link: 'https://timesofindia.indiatimes.com/travel/travel-news',
    },
    {
      title: 'Cross River Acquires Aircraft to Boost Tourism',
      date: 'August 13, 2025',
      summary:
        'Nigeria’s Cross River State has acquired two aircraft to enhance tourism and economic growth, signaling a new era for regional travel.',
      link: 'https://guardian.ng/category/saturday-magazine/travel-a-tourism/',
    },
    {
      title: 'United Airlines Adds Apple TV+ Onboard Entertainment',
      date: 'August 12, 2025',
      summary:
        'Flying just got more fun — United Airlines now offers hit Apple TV+ shows onboard, making long-haul flights more enjoyable.',
      link: 'https://www.travelpulse.com/news',
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-green-900 mb-4">Topotas Travel Blog</h1>
        <p className="text-green-700 text-lg">
          Discover the bright side of travel — inspiring stories, exciting updates, and global adventures.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-green-50 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-green-900 mb-1">{article.title}</h2>
            <p className="text-sm text-green-700 mb-2">🗓 {article.date}</p>
            <p className="text-green-800 mb-4">{article.summary}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 font-medium hover:underline"
            >
              Read full article →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}