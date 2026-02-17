import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import ProjectTimeline from './components/Sections/ProjectTimeline';
import Services from './components/Sections/Services';
import Contact from './components/Sections/Contact';
import Preloader from './components/Layout/Preloader';
import About from './components/Sections/About';
import MissionVision from './components/Sections/MissionVision';
import Leadership from './components/Sections/Leadership';
import MajorProjects from './components/Sections/MajorProjects';
import Clients from './components/Sections/Clients';
import GovernmentBuildingsPage from './components/Pages/GovernmentBuildingsPage';
import TermsOfService from './components/Pages/TermsOfService';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-[#0f0f0f]">
        <About />
        <MissionVision />
        <Leadership />
        <MajorProjects />
        <ProjectTimeline />
        <Services />
        <Clients />
        <Contact />
      </div>
    </>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Preloader Overlay */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <main className="bg-[#0f0f0f] min-h-screen text-white selection:bg-[#F58220] selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/government-buildings" element={<GovernmentBuildingsPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </>
  );
};

export default App;