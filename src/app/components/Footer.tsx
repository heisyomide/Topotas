'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-12">
      <div className="text-lg font-semibold mb-2">Topotas Travel Agency</div>
      <p className="text-sm text-white/80">
        &copy; {new Date().getFullYear()} All rights reserved. Explore the world with us.
      </p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-4 text-white text-xl">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="hover:text-yellow-400 transition" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-yellow-400 transition" />
        </a>
        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
          <FaGooglePlusG className="hover:text-yellow-400 transition" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="hover:text-yellow-400 transition" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-yellow-400 transition" />
        </a>
      </div>
    </footer>
  );
}