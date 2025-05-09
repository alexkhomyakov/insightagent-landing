// src/components/TargetAudience.js
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
          {[ 
            {
              id: 'for-hedge-funds',
              icon: 'fa-chart-pie',
              title: 'Hedge Funds',
              desc: 'Streamline expert network calls for investment research while maintaining compliance and generating structured insights.',
              bullets: [
                'Automatic compliance monitoring',
                'Structured data extraction',
                'Consistent interview quality'
              ]
            },
            {
              id: 'for-expert-networks',
              icon: 'fa-network-wired',
              title: 'Expert Networks',
              desc: 'Scale your expert interview operations while reducing operational costs and increasing client satisfaction.',
              bullets: [
                'Increased capacity',
                'Consistent quality',
                'Enhanced deliverables'
              ]
            },
            {
              id: 'for-research-teams',
              icon: 'fa-microscope',
              title: 'Research Teams',
              desc: 'Enable your team to conduct more expert interviews while maintaining focus on analysis and insights.',
              bullets: [
                'Increased research throughput',
                'Multilingual capabilities',
                'Standardized output format'
              ]
            }
          ].map(({ id, icon, title, desc, bullets }) => (
            <div
              key={id}
              id={id}
              className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
                <i className={`fa-solid ${icon} text-blue-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-700 mb-4">{desc}</p>
              <ul className="text-gray-700 space-y-2">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
