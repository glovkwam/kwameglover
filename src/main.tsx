
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import "./index.css";

import Index from "./pages/Index";
import About from "./pages/About";
import Art from "./pages/Art";
import JavaScriptArt from "./pages/JavaScriptArt";
import YouTube from "./pages/YouTube";
import Game from "./pages/Game";
import WebDesign from "./pages/WebDesign";
import PicoW from "./pages/PicoW";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/js-art" element={<JavaScriptArt />} />
          <Route path="/videos" element={<YouTube />} />
          <Route path="/game" element={<Game />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/pico-w" element={<PicoW />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
