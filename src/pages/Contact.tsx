
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <div className="pt-20 animate-fade-in">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
