// src/components/CallToAction.js
import React from 'react';

const CallToAction = ({ setShowModal, setShowCalendly }) => {
  return (
    <section id="cta" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Expert Interviews?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Join leading research teams using InsightAgent to conduct more efficient, insightful, and compliant expert interviews.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <span
            onClick={() => setShowCalendly(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition text-center cursor-pointer"
            id="demo"
          >
            Book a Technical Demo
          </span>
          <span
            onClick={() => setShowModal(true)}
            className="bg-blue-700 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition border border-blue-500 text-center cursor-pointer"
            id="access"
          >
            Get Early Access
          </span>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
