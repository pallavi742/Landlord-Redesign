import React from 'react';
import HeroSection from '../components/HeroSection';
import ResultsSection from '../components/ResultsSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PracticeAreasSection from '../components/PracticeAreasSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ResultsSection />
      <PracticeAreasSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;