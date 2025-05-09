import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './components/Layout';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import OutputPreview from './components/OutputPreview';
import DeveloperFeatures from './components/DeveloperFeatures';
import TargetAudience from './components/TargetAudience';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <OutputPreview />
      <DeveloperFeatures />
      <TargetAudience />
      <CallToAction />
      <Footer />
    </Layout>
  );
};

export default App;