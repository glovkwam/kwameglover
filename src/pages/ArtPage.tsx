
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import ArtGallery from '../components/ArtGallery';

const ArtPage = () => {
  useEffect(() => {
    document.title = "Digital Art | Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <ArtGallery />
      </div>
    </Layout>
  );
};

export default ArtPage;
