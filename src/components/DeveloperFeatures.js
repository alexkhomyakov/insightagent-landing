import React from 'react';

const DeveloperFeatures = () => {
  return (
    <section id="for-developers" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Developer Friendly Features</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Built with developers in mind, InsightAgent offers powerful APIs and tools to streamline integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">REST API</h3>
            <p className="text-gray-400">Comprehensive endpoints with client libraries and OpenAPI specs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Webhook Callbacks</h3>
            <p className="text-gray-400">Real-time event hooks for interview status and output delivery.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Context Injection</h3>
            <p className="text-gray-400">Easily pass in research briefs, key questions, or internal notes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperFeatures;