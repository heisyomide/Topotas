'use client';

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-blue-700 text-lg">
          Have questions or want to book a tour? Send us a message and we’ll get back to you shortly.
        </p>
      </div>

      <form
        action="https://formspree.io/f/meozdegb" // Replace with your Formspree form ID
        method="POST"
        className="max-w-xl mx-auto bg-blue-50 p-6 rounded shadow space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border rounded"
            placeholder="Tell us what you're looking for..."
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}