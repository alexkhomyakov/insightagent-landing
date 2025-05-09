import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes InsightAgent Different</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our AI agent is designed specifically for conducting expert interviews with a focus on technical integration and autonomous operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: 'api',
              icon: 'fa-code',
              title: 'API-First Integration',
              desc: 'Seamlessly integrates with your existing systems through our comprehensive REST API, making implementation straightforward for technical teams.',
            },
            {
              id: 'rag',
              icon: 'fa-brain',
              title: 'RAG-Powered Intelligence',
              desc: 'Utilizes Retrieval Augmented Generation to reference your research objectives and domain knowledge during interviews for contextually relevant questions.',
            },
            {
              id: 'multilingual',
              icon: 'fa-language',
              title: 'Multilingual Autonomy',
              desc: 'Conducts interviews in multiple languages with native-level comprehension, eliminating the need for translators and expanding your research capabilities.',
            },
            {
              id: 'execution',
              icon: 'fa-arrows-to-circle',
              title: 'End-to-End Execution',
              desc: 'Handles the entire interview process from preparation to follow-up questions, while leaving the scheduling to your existing systems.',
            },
          ].map(({ id, icon, title, desc }) => (
            <div
              key={id}
              className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
                <i className={`fa-solid ${icon} text-blue-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;