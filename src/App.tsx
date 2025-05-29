
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CMSProvider } from './context/CMSContext';
import GlobalCMS from './components/GlobalCMS';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArtPage from './pages/ArtPage';
import YouTubePage from './pages/YouTubePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PicoWPage from './pages/PicoWPage';
import ModelsPage from './pages/ModelsPage';
import WebDesignPage from './pages/WebDesignPage';
import JavaScriptArtPage from './pages/JavaScriptArtPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <CMSProvider>
      <div className="bg-cyber-dark">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/art" element={<ArtPage />} />
            <Route path="/javascript-art" element={<JavaScriptArtPage />} />
            <Route path="/youtube" element={<YouTubePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/picow" element={<PicoWPage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/web-design" element={<WebDesignPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
        <GlobalCMS />
      </div>
    </CMSProvider>
  );
}

export default App;
