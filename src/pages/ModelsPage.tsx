
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import ModelViewer from '../components/ModelViewer';

const ModelsPage = () => {
  useEffect(() => {
    document.title = "3D Models | Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <ModelViewer />
      </div>
    </Layout>
  );
};

export default ModelsPage;
