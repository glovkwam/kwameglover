
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Me | Digital Artist Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <AboutSection />
      </div>
    </Layout>
  );
};

export default AboutPage;
