
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import YouTubeSection from '../components/YouTubeSection';

const YouTubePage = () => {
  useEffect(() => {
    document.title = "YouTube Videos | Digital Artist Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <YouTubeSection />
      </div>
    </Layout>
  );
};

export default YouTubePage;
