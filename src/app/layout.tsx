// app/layout.tsx
import './globals.css'; // Tailwind styles
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Santorini Escape',
  description: 'Romantic travel packages for dream destinations',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blush-50 font-sans text-gray-800">
        <div className="min-h-screen flex flex-col">
          {/* Header or Navbar can go here if global */}
          {children}
          {/* Footer can go here if global */}
        </div>
      </body>
    </html>
  );
}