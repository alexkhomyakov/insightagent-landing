import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Autonomous Expert Interviews. Embedded Into Your Workflow.
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              InsightAgent integrates with your systems, understands your research objectives,
              and conducts multilingual expert interviews—start to finish, with zero operational lift.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition text-center cursor-pointer">
                Book a Demo
              </span>
              <span className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition text-center cursor-pointer">
                Request Access
              </span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                className="rounded-lg shadow-xl"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4b19d85f94-92c6ee5a552b74c91ebb.png"
                alt="AI agent conducting a professional interview with a business expert"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                <i className="fa-solid fa-code-branch mr-2"></i> API-First Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;