// src/App.js
import React, { useState } from 'react';
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

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <Header setShowCalendly={setShowCalendly}/>
      <HeroSection setShowModal={setShowModal} setShowCalendly={setShowCalendly} />
      <Features />
      <HowItWorks />
      <OutputPreview />
      <DeveloperFeatures />
      <WhoItsFor />
      <CallToAction setShowModal={setShowModal} setShowCalendly={setShowCalendly} />
      <Footer showModal={showModal} setShowModal={setShowModal} />
      {showCalendly && <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />}
    </>
  );
};

export default App;
