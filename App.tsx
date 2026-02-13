import React, { useState } from 'react';
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
import GovernmentBuildings from './components/Sections/GovernmentBuildings';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Preloader Overlay - Fades out when loading is false */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content - Rendered always to allow 3D assets to initialize behind scene */}
      <main className="bg-[#0f0f0f] min-h-screen text-white selection:bg-[#F58220] selection:text-white">
        <Navbar />
        <Hero />

        <div className="relative z-10 bg-[#0f0f0f]">
          <About />
          <MissionVision />
          <Leadership />
          <MajorProjects />
          <GovernmentBuildings />
          <ProjectTimeline />
          <Services />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default App;