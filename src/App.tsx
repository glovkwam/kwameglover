import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArtGallery from './pages/ArtGallery';
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<ArtGallery />} />
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
