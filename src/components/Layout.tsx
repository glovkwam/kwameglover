
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-64 h-64 top-20 -left-20 blur-3xl"></div>
      <div className="floating-orb w-96 h-96 bottom-40 -right-40 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-0 left-1/2 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
