import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/home/HeroSection';
import DemoVideo from './components/home/DemoVideo';
import WhyWeExistSection from './components/home/WhyWeExistSection';
import FeaturesTeaserSection from './components/home/FeaturesTeaserSection';
import Features from './components/features/Features';
import Contact from './components/contact/Contact';

const Home = () => (
  <>
    <HeroSection />
    <DemoVideo />
    <WhyWeExistSection />
    <FeaturesTeaserSection />
  </>
);

const App = () => {
  const basename = process.env.NODE_ENV === 'production' ? '/severity-ai-website' : '/';

  return (
    <Router basename={basename}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;