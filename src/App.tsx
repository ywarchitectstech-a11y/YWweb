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
import Footer from "./components/Footer/Footer";
import Form from "./pages/InquiryForm/Form.jsx";
import ScrollToTop from "./components/ScrollToTop";
import IntroScreen from "./components/IntroScreen";
import logo from "./assets/logo.png";

// projects
import ADHYARATAN from "./pages/Projects/ProjectsPages/adhyaRatan/ProjectPage.jsx";
import INFINIJAGTAPCITY from "./pages/Projects/ProjectsPages/infiniJagtapCity/ProjectPage.jsx";
import PLATINUMCITYLIGHTS from "./pages/Projects/ProjectsPages/platinumCitylights/ProjectPage.jsx";
import ADHYARADHAKRISHNA from "./pages/Projects/ProjectsPages/adhyaRadhaKrishna/ProjectPage.jsx";
import TANISHURBANIA from "./pages/Projects/ProjectsPages/tanishUrbania/ProjectPage.jsx";
import ALANDISCHOOL from "./pages/Projects/ProjectsPages/alandiSchool/ProjectPage.jsx";
import PRARAMBHSERENITY from "./pages/Projects/ProjectsPages/prarambhSerenity/ProjectPage.jsx";
import SHUBHANUGRAH from "./pages/Projects/ProjectsPages/shubhAnugrah/ProjectPage.jsx";
import VISION from "./pages/Projects/ProjectsPages/vision/ProjectPage.jsx";
import TANISHINDRAYANI from "./pages/Projects/ProjectsPages/tanishIndrayani/ProjectPage.jsx";
import PIONEER from "./pages/Projects/ProjectsPages/pioneer/ProjectPage.jsx";
import KALP99 from "./pages/Projects/ProjectsPages/kalp99/ProjectPage.jsx";
import BHOSALEGALAXY from "./pages/Projects/ProjectsPages/bhosaleGalaxy/ProjectPage.jsx";
import BHOSALEICON from "./pages/Projects/ProjectsPages/bhosaleIcon/ProjectPage.jsx";
import BESTATEAXIS from "./pages/Projects/ProjectsPages/bestateAxis/ProjectPage.jsx";
import MANTRA360 from "./pages/Projects/ProjectsPages/mantra360/ProjectPage.jsx";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/form" element={<Form />} />

        {/* Project Pages */}
        <Route path="/projects/adhya-ratan" element={<ADHYARATAN />} />
        <Route
          path="/projects/infini-jagtap-city"
          element={<INFINIJAGTAPCITY />}
        />
        <Route
          path="/projects/platinum-citylights"
          element={<PLATINUMCITYLIGHTS />}
        />
        <Route
          path="/projects/adhya-radha-krishna"
          element={<ADHYARADHAKRISHNA />}
        />
        <Route path="/projects/tanish-urbania" element={<TANISHURBANIA />} />
        <Route path="/projects/alandi-school" element={<ALANDISCHOOL />} />
        <Route
          path="/projects/prarambh-serenity"
          element={<PRARAMBHSERENITY />}
        />
        <Route path="/projects/shubh-anugrah" element={<SHUBHANUGRAH />} />
        <Route path="/projects/vision" element={<VISION />} />
        <Route
          path="/projects/tanish-indrayani"
          element={<TANISHINDRAYANI />}
        />
        <Route path="/projects/pioneer" element={<PIONEER />} />
        <Route path="/projects/kalp-99" element={<KALP99 />} />
        <Route path="/projects/bhosale-galaxy" element={<BHOSALEGALAXY />} />
        <Route path="/projects/bhosale-icon" element={<BHOSALEICON />} />
        <Route path="/projects/bestate-axis" element={<BESTATEAXIS />} />
        <Route path="/projects/mantra-360" element={<MANTRA360 />} />

        {/* 404 */}
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
