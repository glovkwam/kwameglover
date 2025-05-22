
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';  // Changed from './pages/Home'
import About from './pages/About';
import Art from './pages/Art';  // Changed from './pages/ArtGallery'
import YouTube from './pages/YouTube';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { CMSProvider } from './context/CMSContext';
import GlobalCMS from './components/GlobalCMS';

function App() {
  return (
    <CMSProvider>
      <div className="bg-cyber-dark">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <GlobalCMS />
      </div>
    </CMSProvider>
  );
}

export default App;
