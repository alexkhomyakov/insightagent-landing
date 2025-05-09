import React from 'react';

const steps = [
  {
    step: '1',
    title: 'Plug It In',
    description: 'Integrate InsightAgent with your systems using our REST API or pre-built connectors for popular platforms.',
    bullets: [
      'Simple API authentication',
      'Webhook support for events',
      'Secure data handling',
    ],
  },
  {
    step: '2',
    title: 'Feed It Context',
    description: 'Provide research objectives, domain knowledge, and specific areas of interest before the interview.',
    bullets: [
      'Upload research briefs',
      'Define key questions',
      'Set compliance boundaries',
    ],
  },
  {
    step: '3',
    title: 'Join & Conduct',
    description: 'InsightAgent joins your pre-scheduled expert calls and conducts the interview autonomously, adapting in real-time.',
    bullets: [
      'Adaptive questioning',
      'Real-time analysis',
      'Immediate output delivery',
    ],
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A simple three-step process to integrate InsightAgent into your research workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map(({ step, title, description, bullets }, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-6 font-bold">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <ul className="text-gray-700 space-y-2">
                  {bullets.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                  <i className="fa-solid fa-arrow-right text-blue-600 text-2xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;