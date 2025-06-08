import React from 'react';
import { useNavigate } from 'react-router-dom';

const Testimonials = ({ setShowCalendly }) => {
  const navigate = useNavigate();

  const handleBookDemo = () => {
    navigate('/book-demo');
  };

  const testimonials = [
    {
      quote: "The AI interviewer was well-prepared and asked relevant follow-up questions. The transcript captured all the technical details accurately.",
      role: "Semiconductor Industry Expert",
      color: "blue",
      category: "expert"
    },
    {
      quote: "The structured output format makes it easy to extract actionable insights. The compliance flags are particularly helpful for our team.",
      role: "Research Analyst",
      color: "green",
      category: "analyst"
    },
    {
      quote: "I was impressed by how the AI adapted to complex medical terminology and maintained a professional yet engaging conversation.",
      role: "Healthcare Industry Expert",
      color: "purple",
      category: "expert"
    },
    {
      quote: "The AI-generated insights have significantly improved our research efficiency. The follow-up suggestions are spot-on and help us dig deeper into key topics.",
      role: "Investment Analyst",
      color: "orange",
      category: "analyst"
    }
  ];

  const stats = [
    { value: "98%", label: "Accuracy Score", icon: "fa-bullseye" },
    { value: "500+", label: "Interviews Conducted", icon: "fa-microphone" },
    { value: "95%", label: "User Satisfaction", icon: "fa-heart" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See what experts and analysts are saying about their experience with InsightAgent
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <i className={`fa-solid ${stat.icon} text-primary text-xl`}></i>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-xl overflow-hidden shadow-lg border-l-4 border-${testimonial.color}-500 hover:shadow-xl transition-shadow`}
            >
              <div className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gray-200 text-4xl">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                
                {/* Testimonial Content */}
                <div className="pr-12">
                  <blockquote className="text-gray-700 text-lg mb-6 relative z-10">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Role and Category */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.role}</h4>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <i className={`fa-solid ${
                          testimonial.category === 'expert' ? 'fa-user-tie' : 'fa-chart-line'
                        } mr-1`}></i>
                        {testimonial.category === 'expert' ? 'Industry Expert' : 'Research Professional'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Transform Your Research Process?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join leading expert networks and research teams who are already using InsightAgent to deliver higher quality insights.
            </p>
            <button 
              onClick={() => setShowCalendly(true)}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 