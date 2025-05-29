
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';

const HomePage = () => {
  useEffect(() => {
    document.title = "Kwame Glover | Cybersecurity & Cloud Computing";
  }, []);

  return (
    <Layout>
      <Hero />
      <AboutSection />
    </Layout>
  );
};

export default HomePage;
