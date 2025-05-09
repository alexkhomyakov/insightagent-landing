import React from 'react';

const OutputPreview = () => {
  return (
    <section id="output" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Output Preview</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            InsightAgent delivers comprehensive, actionable outputs immediately after each interview.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Executive Summary</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Key insights on semiconductor supply chain constraints</li>
            <li>Predictions for Q4 2025 manufacturing capacity</li>
            <li>Geopolitical implications and expert perspectives</li>
          </ul>
          <h3 className="text-xl font-semibold mt-8 mb-4">Compliance Flags</h3>
          <p className="text-red-600 text-sm">Potential MNPI at 24:15 – Reference to unannounced expansion.</p>
        </div>
      </div>
    </section>
  );
};

export default OutputPreview;
