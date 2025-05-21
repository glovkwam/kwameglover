
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-96 h-96 top-20 -left-40 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 bottom-10 -right-10 blur-3xl"></div>
      <div className="floating-orb w-72 h-72 top-1/2 right-1/3 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <div className="pt-20 animate-fade-in relative z-10">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
