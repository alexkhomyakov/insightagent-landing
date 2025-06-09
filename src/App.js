// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import OutputPreview from './components/OutputPreview';
import DeveloperFeatures from './components/DeveloperFeatures';
import WhoItsFor from './components/TargetAudience';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import Testimonials from './components/Testimonials';
import VettingAgent from './pages/VettingAgent';
import Pricing from './components/Pricing';

const Home = ({ setShowModal, setShowCalendly }) => (
  <>
    <HeroSection setShowModal={setShowModal} setShowCalendly={setShowCalendly} />
    <Features />
    <HowItWorks />
    <OutputPreview />
    <Testimonials />
    <DeveloperFeatures />
    <WhoItsFor />
    <CallToAction setShowModal={setShowModal} setShowCalendly={setShowCalendly} />
  </>
);

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header setShowModal={setShowModal} setShowCalendly={setShowCalendly} />
        <Routes>
          <Route path="/" element={<Home setShowModal={setShowModal} setShowCalendly={setShowCalendly} />} />
          <Route path="/vetting-agent" element={<VettingAgent setShowModal={setShowModal} setShowCalendly={setShowCalendly} />} />
          <Route path="/pricing" element={<Pricing setShowModal={setShowModal} />} />
        </Routes>
        <Footer />
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
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="request-access" />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="full-name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="pt-4 text-right">
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition w-full"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showCalendly && (
          <div className="fixed inset-0 z-50">
            <CalendlyModal onClose={() => setShowCalendly(false)} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
