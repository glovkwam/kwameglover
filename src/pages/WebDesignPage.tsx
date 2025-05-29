
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import GraphicDesignSection from '../components/GraphicDesignSection';

const WebDesignPage = () => {
  useEffect(() => {
    document.title = "Web Design | Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <GraphicDesignSection />
      </div>
    </Layout>
  );
};

export default WebDesignPage;
