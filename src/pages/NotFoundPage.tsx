
import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found | Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16 text-center">
        <h1 className="text-4xl font-bold text-cyber-accent mb-4">404</h1>
        <p className="text-gray-300 mb-8">Page not found</p>
        <a href="/" className="text-cyber-accent hover:underline">
          Return to homepage
        </a>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
