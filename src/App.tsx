
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YouTube from "./pages/YouTube";
import GraphicDesign from "./pages/GraphicDesign";
import Art from "./pages/Art";
import Models from "./pages/Models";
import PicoW from "./pages/PicoW";
import Game from "./pages/Game";
import Contact from "./pages/Contact";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/design" element={<GraphicDesign />} />
          <Route path="/art" element={<Art />} />
          <Route path="/models" element={<Models />} />
          <Route path="/picow" element={<PicoW />} />
          <Route path="/game" element={<Game />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
