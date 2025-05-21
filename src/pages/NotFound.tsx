
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark animated-bg">
      <div className="floating-orb w-96 h-96 top-20 -left-40 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-20 -right-40 blur-3xl"></div>
      
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-cyber-accent animate-glow">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <a href="/" className="px-6 py-2 bg-cyber-accent text-cyber-dark rounded-md hover:bg-cyber-accent/80 transition-all duration-300">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
