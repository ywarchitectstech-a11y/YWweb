import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects/Project";
import ADHYARATAN from "./pages/Projects/ProjectsPages/SHUBHANUGRAHA/ProjectPage.jsx";
import Footer from "./components/Footer/Footer";
import Form from "./pages/InquiryForm/Form.jsx";
import ScrollToTop from "./components/ScrollToTop";
import IntroScreen from "./components/IntroScreen";
import logo from "./assets/logo.png";
const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/adhyaratan" element={<ADHYARATAN />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [ready, setReady] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!ready && (
          <IntroScreen
            logo={<img src={logo} width={"40%"} />}
            onComplete={() => setReady(true)}
            duration={2400}
          />
        )}

        {ready && (
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
