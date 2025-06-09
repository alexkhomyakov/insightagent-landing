import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faChartLine, 
  faUserCheck, 
  faClock, 
  faRobot, 
  faArrowRight, 
  faTimesCircle,
  faGlobe,
  faLanguage,
  faClockRotateLeft,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const VettingAgent = ({ setShowModal, setShowCalendly }) => {
  const features = [
    {
      icon: faUserCheck,
      title: "Expert Interview",
      description: "AI-powered interviews that assess expertise, experience, and project fit. Our agent conducts natural conversations to understand the expert's capabilities and interests."
    },
    {
      icon: faRobot,
      title: "Smart Onboarding",
      description: "Automated onboarding process that explains the platform, sets expectations, and provides all necessary information about working with your expert network."
    },
    {
      icon: faClock,
      title: "24/7 Availability",
      description: "Schedule interviews at any time that works for your experts. Our AI agent is always ready to conduct interviews and handle onboarding in any time zone."
    },
    {
      icon: faChartLine,
      title: "Project Matching",
      description: "Intelligent analysis of expert responses to identify the best project fits and areas of expertise, helping you match experts with the right opportunities."
    }
  ];

  const capabilities = [
    {
      title: "24/7 Autonomous Operation",
      description: "Our AI agent works around the clock, handling vetting and onboarding interviews in any time zone without human intervention.",
      icon: faGlobe
    },
    {
      title: "Multilingual Support",
      description: "Conduct interviews in 29 languages, ensuring seamless communication with experts worldwide regardless of their native language.",
      icon: faLanguage
    },
    {
      title: "Global Time Zone Coverage",
      description: "Never miss an opportunity with experts in any time zone. Our system adapts to local schedules and business hours.",
      icon: faClockRotateLeft
    },
    {
      title: "Consistent Quality",
      description: "Maintain the same high standards of vetting and onboarding regardless of time, language, or location.",
      icon: faStar
    }
  ];

  const benefits = [
    "60% reduction in vetting time",
    "99.9% accuracy in credential verification",
    "Automated compliance monitoring",
    "Real-time expert qualification updates",
    "Seamless integration with existing systems",
    "Comprehensive audit trails"
  ];

  const processSteps = [
    {
      title: "Create Interview",
      description: "Expert Network creates a vetting interview with expert details and interview settings"
    },
    {
      title: "AI Agent Calls Expert",
      description: "Our AI agent automatically calls the expert at the scheduled time"
    },
    {
      title: "Conduct Interview",
      description: "The AI agent conducts a thorough vetting interview, gathering all necessary information"
    },
    {
      title: "Analysis & Access",
      description: "Get detailed recommendations, summary, and full interview data in your dashboard"
    }
  ];

  const comparison = {
    manual: [
      "Days to weeks for completion",
      "Prone to human error",
      "Inconsistent quality checks",
      "Limited data verification",
      "High operational costs",
      "Manual documentation"
    ],
    ai: [
      "Minutes to hours for completion",
      "99.9% accuracy rate",
      "Consistent quality standards",
      "Multi-source verification",
      "Reduced operational costs",
      "Automated documentation"
    ]
  };

  const testimonials = [
    {
      quote: "InsightAgent has revolutionized our expert vetting process. We've reduced our vetting time by 70% while improving accuracy.",
      author: "Sarah Chen",
      role: "Head of Expert Operations",
      company: "Global Expert Network"
    },
    {
      quote: "The interview process was smooth and professional. The AI agent asked relevant questions about my experience and clearly explained how the platform works. It felt like talking to a real person!",
      author: "Dr. James Wilson",
      role: "Industry Expert",
      company: "Technology Sector"
    },
    {
      quote: "What impressed me most was how the AI agent adapted to my schedule. I was able to complete the interview at 2 AM my time, and it was just as effective as any daytime interview I've had.",
      author: "Maria Rodriguez",
      role: "Financial Services Expert",
      company: "Latin American Markets"
    },
    {
      quote: "The project matching is incredibly accurate. Since joining through InsightAgent, I've been connected with projects that perfectly align with my expertise and interests.",
      author: "Dr. Alex Thompson",
      role: "Healthcare Consultant",
      company: "Pharmaceutical Industry"
    }
  ];

  const handleBookDemo = () => {
    setShowCalendly(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                New Feature
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI-Powered Expert Vetting
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Automate and streamline your expert vetting process with our intelligent verification system. Our AI agent conducts interviews 24/7 in 29 languages, ensuring quality and compliance while saving valuable time.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  24/7 Autonomous Operation
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  29 Languages Supported
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Global Time Zone Coverage
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleBookDemo}
                  className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition text-center"
                >
                  Book a Demo
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition text-center"
                >
                  Request Early Access
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faRobot} className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Vetting Process</h3>
                    <p className="text-gray-600">Automated & Intelligent</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Always On, Always Ready</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our AI agent works tirelessly to ensure your expert network grows globally
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <FontAwesomeIcon icon={capability.icon} className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-700">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A streamlined process that puts you in control while our AI handles the vetting
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-6 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FontAwesomeIcon icon={faArrowRight} className="text-gray-300 text-2xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI agent handles the entire interview process autonomously, while you maintain full control over the interview settings and have complete access to all interview data and insights.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Manual vs. AI-Powered Vetting</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              See how our AI-powered solution transforms the vetting process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Traditional Manual Vetting</h3>
              <ul className="space-y-4">
                {comparison.manual.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 mt-1 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">AI-Powered Vetting</h3>
              <ul className="space-y-4">
                {comparison.ai.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive vetting capabilities designed for expert networks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <FontAwesomeIcon icon={feature.icon} className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join leading expert networks already using our AI-powered vetting system
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Vetting Process?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join leading expert networks using InsightAgent to ensure quality and compliance while saving valuable time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleBookDemo}
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Book a Demo
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary/90 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/80 transition border border-primary/50"
            >
              Request Early Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VettingAgent; 