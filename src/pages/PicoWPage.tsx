
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import PicoWSection from '../components/PicoWSection';

const PicoWPage = () => {
  useEffect(() => {
    document.title = "Pico W Projects | Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <PicoWSection />
      </div>
    </Layout>
  );
};

export default PicoWPage;
