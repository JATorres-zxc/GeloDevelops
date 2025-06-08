
import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import SellingPoints from '../components/SellingPoints';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <HowItWorks />
      <SellingPoints />
    </div>
  );
};

export default Home;
