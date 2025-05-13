// src/components/TargetAudience.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faHandshake, faShieldHalved, faCheck } from '@fortawesome/free-solid-svg-icons';

const TargetAudience = () => {
  return (
    <section id="who-its-for" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Expert Networks</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            InsightAgent empowers expert networks to scale their operations while maintaining the highest quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
              <FontAwesomeIcon icon={faGears} className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Operations Teams</h3>
            <p className="text-gray-700 mb-4">
              Streamline your interview process and reduce operational overhead while maintaining full control and visibility.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Automated quality assurance</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Real-time monitoring</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Seamless integration</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
              <FontAwesomeIcon icon={faHandshake} className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Client Services</h3>
            <p className="text-gray-700 mb-4">
              Deliver exceptional value to your clients with comprehensive, consistent, and instantly available interview outputs.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Enhanced deliverables</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Rapid turnaround</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Client customization</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-6">
              <FontAwesomeIcon icon={faShieldHalved} className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance Teams</h3>
            <p className="text-gray-700 mb-4">
              Maintain rigorous compliance standards with automated monitoring and comprehensive audit trails.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Real-time monitoring</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Automated flagging</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-2" />
                <span>Complete audit trails</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;