import React from 'react';

const TargetAudience = () => {
  return (
    <section id="who-its-for" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who It's For</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            InsightAgent is designed for organizations that conduct expert interviews as part of their research process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Hedge Funds</h3>
            <p className="text-gray-700">Compliance and data-driven insights at scale.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Expert Networks</h3>
            <p className="text-gray-700">Augment human moderators, improve output consistency.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Research Teams</h3>
            <p className="text-gray-700">Run more calls, extract structured data faster.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;