// src/components/OutputPreview.js
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch content-center">
          {/* Output Preview Card */}
          <div id="output-preview" className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 flex flex-col h-full justify-center">
            <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fa-solid fa-file-lines text-blue-600 mr-2"></i>
                  <h3 className="font-semibold">Interview with John Doe - Semiconductor Expert</h3>
                </div>
                <div className="text-sm text-gray-500">May 2, 2025</div>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center">
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <i className="fa-solid fa-star text-yellow-500 mr-2"></i>
                  Executive Summary
                </h4>
                <p className="text-gray-700 mb-3">
                  John Doe provided valuable insights on the semiconductor supply chain constraints, highlighting three key factors affecting production capacity in 2025:
                </p>
                <ul className="text-gray-700 space-y-2 mb-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle text-xs text-blue-600 mt-1.5 mr-2"></i>
                    <span>Raw material shortages, particularly in rare earth elements</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle text-xs text-blue-600 mt-1.5 mr-2"></i>
                    <span>Manufacturing bottlenecks at 3nm process nodes</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle text-xs text-blue-600 mt-1.5 mr-2"></i>
                    <span>Geopolitical tensions affecting distribution networks</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Expert predicts a 15-20% capacity increase by Q4 2025, with Taiwan remaining the dominant manufacturing hub.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <i className="fa-solid fa-flag text-red-500 mr-2"></i>
                  Compliance Flags
                </h4>
                <div className="bg-red-50 border border-red-100 rounded-md p-4">
                  <p className="text-red-700 text-sm">
                    <span className="font-medium">Potential MNPI at 24:15:</span> Reference to unannounced capacity expansion at TSMC's Arizona facility.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <i className="fa-solid fa-arrow-right text-green-500 mr-2"></i>
                  Follow-up Suggestions
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle text-xs text-blue-600 mt-1.5 mr-2"></i>
                    <span>Explore impact of automotive sector demand on allocation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle text-xs text-blue-600 mt-1.5 mr-2"></i>
                    <span>Request clarification on pricing trends for 5nm vs 3nm processes</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle text-xs text-blue-600 mt-1.5 mr-2"></i>
                    <span>Investigate alternative suppliers mentioned for specialized components</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Output Features Column */}
          <div id="output-features" className="flex flex-col justify-center h-full">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6">Comprehensive Output Package</h3>
              <div className="space-y-6">
                {[
                  ['fa-file-alt', 'Auto-generated Transcript', 'Full, searchable transcript with speaker identification and timestamps.'],
                  ['fa-lightbulb', 'Executive Summary', 'Concise overview of key insights, organized by topic and relevance.'],
                  ['fa-shield-alt', 'Compliance Monitoring', 'Automatic flagging of potential compliance issues with timestamp references.'],
                  ['fa-chart-line', 'Data Extraction', 'Structured data points extracted from the conversation in JSON format.'],
                  ['fa-forward', 'Follow-up Recommendations', 'AI-generated suggestions for additional research or clarification.']
                ].map(([icon, title, desc], i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4 flex-shrink-0">
                      <i className={`fa-solid ${icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-gray-700">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputPreview;