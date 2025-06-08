// src/components/OutputPreview.js
import React from 'react';

const OutputPreview = () => {
  return (
    <section id="output" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Output Preview</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get instant access to both the full transcript and audio recording of every interview, along with AI-powered insights.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Transcript Preview Card */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fa-solid fa-file-lines text-primary mr-2"></i>
                  <h3 className="font-semibold">Interview Transcript</h3>
                </div>
                <div className="text-sm text-gray-500">May 2, 2025</div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-gray-500">Semiconductor Expert</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-700 mb-3">
                    "The semiconductor supply chain is facing unprecedented challenges in 2025. We're seeing three major bottlenecks..."
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fa-solid fa-clock mr-1"></i>
                    <span>00:45 - 01:15</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Full transcript available immediately after interview</span>
                <button className="text-primary hover:text-primary/90 font-medium">
                  View Full Transcript
                </button>
              </div>
            </div>
          </div>

          {/* Audio Recording Card */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fa-solid fa-microphone text-primary mr-2"></i>
                  <h3 className="font-semibold">Audio Recording</h3>
                </div>
                <div className="text-sm text-gray-500">45:30 duration</div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition">
                        <i className="fa-solid fa-play"></i>
                      </button>
                      <div className="ml-4">
                        <h4 className="font-medium">Interview Recording</h4>
                        <p className="text-sm text-gray-500">High-quality audio</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-500 hover:text-gray-700">
                        <i className="fa-solid fa-volume-up"></i>
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700">
                        <i className="fa-solid fa-download"></i>
                      </button>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>15:45</span>
                    <span>45:30</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Download available in multiple formats</span>
                <button className="text-primary hover:text-primary/90 font-medium">
                  Download Recording
                </button>
              </div>
            </div>
          </div>

          {/* AI Insights Card */}
          <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <i className="fa-solid fa-robot text-primary mr-2"></i>
                <h3 className="font-semibold">AI-Generated Insights</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <i className="fa-solid fa-file-alt text-primary mr-2"></i>
                    Interview Summary
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                    <p className="text-gray-700 mb-3">
                      John Doe provided a comprehensive analysis of the semiconductor industry's current challenges and future outlook. The discussion focused on supply chain constraints, manufacturing capabilities, and market dynamics.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Supply Chain</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Manufacturing</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Market Analysis</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <i className="fa-solid fa-star text-yellow-500 mr-2"></i>
                    Key Insights
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Raw material shortages affecting production capacity</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Manufacturing bottlenecks at 3nm process nodes</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Geopolitical tensions impacting distribution</span>
                    </li>
                  </ul>
                </div>
                <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputPreview;