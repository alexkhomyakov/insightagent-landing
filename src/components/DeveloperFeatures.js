// src/components/DeveloperFeatures.js
import React from 'react';

const DeveloperFeatures = () => {
  return (
    <section id="for-developers" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Developer Friendly Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built with developers in mind, InsightAgent offers powerful APIs and tools to streamline integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div id="api-docs" className="col-span-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">API Documentation</div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="mb-4">
                  <span className="text-blue-400">POST</span> <span className="text-green-400">/v1/interviews</span>
                </div>
                <div className="bg-gray-900 p-4 rounded-md mb-4 overflow-auto">
                  <pre className="text-gray-300 whitespace-pre-wrap">
{`{
  "interview_id": "string",
  "scheduled_time": "2025-05-09T11:30:00Z",
  "expert": {
    "name": "string",
    "expertise": "string",
    "language": "string"
  },
  "context": {
    "research_brief": "string",
    "key_questions": ["string"],
    "compliance_rules": ["string"]
  },
  "callback_url": "string"
}`}
                  </pre>
                </div>
                <div className="mb-4">
                  <span className="text-blue-400">GET</span> <span className="text-green-400">/v1/interviews/&#123;interview_id&#125;/output</span>
                </div>
                <div className="bg-gray-900 p-4 rounded-md overflow-auto">
                  <pre className="text-gray-300 whitespace-pre-wrap">
{`{
  "interview_id": "string",
  "status": "completed",
  "transcript_url": "string",
  "summary": {
    "key_insights": ["string"],
    "topics": [{
      "name": "string",
      "highlights": ["string"]
    }]
  },
  "compliance_flags": [{
    "timestamp": "string",
    "description": "string",
    "severity": "string"
  }],
  "follow_ups": ["string"]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div id="dev-features" className="flex flex-col justify-center">
            <div className="space-y-8">
              {[ 
                ['fa-code', 'REST API', 'Comprehensive API with detailed documentation, client libraries, and example code in multiple languages.'],
                ['fa-bolt', 'Webhook Callbacks', 'Real-time event notifications for interview status changes, output availability, and compliance alerts.'],
                ['fa-clipboard-list', 'Context Injection', 'Easily provide research briefs, key questions, and domain knowledge before each interview through our API.'],
                ['fa-plug', 'Pre-built Integrations', 'Connect with popular research platforms, CRMs, and communication tools with minimal configuration.']
              ].map(([icon, title, desc], i) => (
                <div key={i}>
                  <div className="flex items-center mb-3">
                    <i className={`fa-solid ${icon} text-blue-400 mr-3 text-xl`}></i>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperFeatures;
