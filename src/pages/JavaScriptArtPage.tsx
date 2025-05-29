
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import MaxMSPSection from '../components/MaxMSPSection';

const JavaScriptArtPage = () => {
  useEffect(() => {
    document.title = "JavaScript Art | Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <MaxMSPSection />
      </div>
    </Layout>
  );
};

export default JavaScriptArtPage;
