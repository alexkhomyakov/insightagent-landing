import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6 text-sm text-center">
        <p className="mb-4">© 2025 InsightAgent. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;