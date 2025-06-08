// src/components/FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="pt-16 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes InsightAgent Different</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Purpose-built for expert networks, our AI agent enhances your interview process while maintaining compliance and quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition h-full">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
              <i className="fa-solid fa-code text-blue-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
            <p className="text-gray-700">
              Integrates with your expert network platform through our REST API, preserving your existing workflows while enhancing interview capabilities.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition h-full">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
              <i className="fa-solid fa-brain text-blue-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Interviews</h3>
            <p className="text-gray-700">
              Leverages advanced AI to understand client objectives, expert backgrounds, and compliance requirements for focused, productive conversations.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition h-full">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
              <i className="fa-solid fa-language text-blue-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
            <p className="text-gray-700">
              Conducts interviews in multiple languages, enabling you to expand your expert network globally while maintaining consistent quality standards.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition h-full">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
              <i className="fa-solid fa-shield-halved text-blue-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance First</h3>
            <p className="text-gray-700">
              Automatically monitors interviews for compliance issues, flags sensitive information, and maintains detailed audit trails for every conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
