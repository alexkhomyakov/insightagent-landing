// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import OutputPreview from './components/OutputPreview';
import DeveloperFeatures from './components/DeveloperFeatures';
import WhoItsFor from './components/TargetAudience';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

const Home = ({ setShowModal, setShowCalendly }) => (
  <>
    <HeroSection setShowModal={setShowModal} setShowCalendly={setShowCalendly} />
    <Features />
    <HowItWorks />
    <OutputPreview />
    <Testimonials setShowCalendly={setShowCalendly} />
    <DeveloperFeatures />
    <WhoItsFor />
    <CallToAction setShowModal={setShowModal} setShowCalendly={setShowCalendly} />
  </>
);

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <Router>
      <Header setShowCalendly={setShowCalendly}/>
      <Routes>
        <Route path="/" element={<Home setShowModal={setShowModal} setShowCalendly={setShowCalendly} />} />
        <Route path="/pricing" element={<Pricing setShowModal={setShowModal} />} />
      </Routes>
      <Footer showModal={showModal} setShowModal={setShowModal} />
      {showCalendly && <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />}
    </Router>
  );
};

export default App;
