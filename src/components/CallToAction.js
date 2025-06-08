// src/components/CallToAction.js
import React from 'react';

const CallToAction = ({ setShowModal, setShowCalendly }) => {
  return (
    <section id="cta" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Scale Your Expert Network with AI-Powered Interviews</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Join leading expert networks using InsightAgent to deliver higher quality insights, ensure compliance, and maximize expert utilization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <span
            onClick={() => setShowCalendly(true)}
            className="bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition text-center cursor-pointer"
            id="demo"
          >
            Book a Technical Demo
          </span>
          <span
            onClick={() => setShowModal(true)}
            className="bg-primary/90 text-white px-8 py-4 rounded-md font-medium hover:bg-primary/80 transition border border-primary/50 text-center cursor-pointer"
            id="access"
          >
            Partner With Us
          </span>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
