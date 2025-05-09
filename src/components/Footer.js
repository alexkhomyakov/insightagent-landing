// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <i className="fa-solid fa-robot text-blue-400 text-2xl mr-2"></i>
              <span className="text-white font-bold text-xl">InsightAgent</span>
            </div>
            <p className="mb-6">
              API-first autonomous AI agent for expert interviews.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fa-brands fa-twitter text-lg"></i>
              </span>
              <span className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </span>
              <span className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fa-brands fa-github text-lg"></i>
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><span className="hover:text-white transition cursor-pointer">Features</span></li>
              <li><span className="hover:text-white transition cursor-pointer">How It Works</span></li>
              <li><span className="hover:text-white transition cursor-pointer">API</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Pricing</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><span className="hover:text-white transition cursor-pointer">About</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Blog</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Careers</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Contact</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><span className="hover:text-white transition cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Security</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; 2025 InsightAgent. All rights reserved.
          </div>
          <div>
            <span className="text-sm hover:text-white transition cursor-pointer">Status</span>
            <span className="mx-2">•</span>
            <span className="text-sm hover:text-white transition cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
