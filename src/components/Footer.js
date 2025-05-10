// src/components/Footer.js
import React from 'react';

const Footer = ({ showModal, setShowModal }) => {

  const handleSubmit = (e) => {
    // You can uncomment this line if using client-side validation
    // e.preventDefault();

    if (window.gtag) {
      window.gtag('event', 'form_submission', {
        event_category: 'Request Access',
        event_label: 'Early Access Modal',
      });
    }

    if (window.plausible) {
      window.plausible('request-access-submitted');
    }
  };

  return (
    <>
       {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-10 w-full max-w-lg relative shadow-2xl border border-gray-200">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 Request Early Access</h3>
            <p className="text-sm text-gray-600 text-center mb-6 max-w-xs mx-auto">
              Get priority access to InsightAgent and start transforming your expert interviews.
            </p>
            <form
              name="request-access"
              method="POST"
              data-netlify="true"
              action="/thank-you"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="request-access" />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="full-name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pt-4 text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition w-full"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer id="footer" className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <i className="fa-solid fa-robot text-blue-400 text-2xl mr-2"></i>
                <span className="text-white font-bold text-xl">InsightAgent</span>
              </div>
              <p className="mb-6">
                API-first autonomous AI agent for expert interviews, built by Productera LLC.
              </p>
              <div className="flex space-x-4">
                <span className="text-gray-400 hover:text-white transition cursor-pointer">
                  <i className="fa-brands fa-twitter text-lg"></i>
                </span>
                <span className="text-gray-400 hover:text-white transition cursor-pointer">
                  <i className="fa-brands fa-linkedin text-lg"></i>
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#for-developers" className="hover:text-white transition">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="https://productera.io/about/" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">About Productera</a></li>
                <li><a href="https://productera.io/podcast/" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">Podcast</a></li>
                <li><a href="https://productera.io/contact/" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><span className="hover:text-white transition cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-white transition cursor-pointer">Terms of Service</span></li>
                <li><span className="hover:text-white transition cursor-pointer">Security</span></li>
                <li><span className="hover:text-white transition cursor-pointer">Compliance</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center md:text-left">
            © 2025 Productera LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;