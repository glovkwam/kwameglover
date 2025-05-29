
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Digital Artist Portfolio";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <Contact />
      </div>
    </Layout>
  );
};

export default ContactPage;
