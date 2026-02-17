import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, ArrowDown } from 'lucide-react';
import { Project } from '../../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress of the container
  const { scrollY } = useScroll({
    container: containerRef,
  });

  // Parallax Animations
  // 1. Image zooms in slightly (1 -> 1.2)
  // 2. Image moves vertically (parallax) to create depth. 
  //    Positive Y moves it down relative to the scrolling container, making it appear to move slower than the foreground.
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const imageY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, 100]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[60] bg-[#0f0f0f] overflow-y-auto overflow-x-hidden no-scrollbar"
      ref={containerRef}
    >
      {/* Close Button - Sticky/Fixed */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[70] p-3 md:p-4 bg-black/50 hover:bg-[#F58220] text-white rounded-full backdrop-blur-md transition-all duration-300 group border border-white/10"
      >
        <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
      </button>

      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[75vh] md:h-[85vh] w-full overflow-hidden">
        <motion.div
          className="w-full h-full relative"
          style={{ scale: imageScale, y: imageY }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0f0f0f]" />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-20 z-10"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#F58220] font-mono text-sm tracking-widest uppercase mb-4 block"
            >
              Project Overview
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-white mb-4 sm:mb-6 leading-none"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 text-white/60"
            >
              <ArrowDown className="w-5 h-5 animate-bounce text-[#F58220]" />
              <span className="text-sm uppercase tracking-widest">Scroll to Explore</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 bg-[#0f0f0f] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-12 sm:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16">
            {/* Main Narrative */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 sm:mb-10 leading-tight">
                Redefining the skyline through <span className="text-[#F58220]">{project.category.toLowerCase()}</span> excellence.
              </h2>
              <div className="space-y-6 sm:space-y-8 text-gray-400 text-base sm:text-lg leading-relaxed font-light">
                <p>{project.description}</p>
                <p>
                  Context was the primary driver for the design. By analyzing the site conditions, solar orientation, and urban fabric, we developed a solution that not only meets the client's brief but enhances the surrounding public realm.
                </p>
                <p>
                  The structural system was developed in close collaboration with our engineering teams to ensure efficiency and elegance in the final built form.
                </p>
              </div>
            </div>

            {/* Project Data */}
            <div className="lg:col-span-4 space-y-10 lg:pl-10 lg:border-l border-white/10 h-fit">
              {project.stats?.map((stat, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-gray-500 uppercase text-xs tracking-wider mb-2 group-hover:text-[#F58220] transition-colors">{stat.label}</h4>
                  <p className="text-xl sm:text-3xl text-white font-mono">{stat.value}</p>
                </div>
              ))}
              <div className="group">
                <h4 className="text-gray-500 uppercase text-xs tracking-wider mb-2 group-hover:text-[#F58220] transition-colors">Year</h4>
                <p className="text-xl sm:text-3xl text-white font-mono">{project.year}</p>
              </div>
              <div className="group">
                <h4 className="text-gray-500 uppercase text-xs tracking-wider mb-2 group-hover:text-[#F58220] transition-colors">Location</h4>
                <p className="text-xl sm:text-3xl text-white font-mono">{project.location}</p>
              </div>
            </div>
          </div>

          {/* Gallery Images */}
          <div className="mt-16 sm:mt-32 space-y-16 sm:space-y-32">
            {project.gallery?.map((img, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8 }}
                  className={`w-full ${index % 2 === 0 ? 'md:w-[90%]' : 'md:w-[80%]'} relative`}
                >
                  <div className="overflow-hidden bg-[#1a1a1a]">
                    <img
                      src={img}
                      alt={`Detail ${index}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.5s]"
                    />
                  </div>
                  <span className="absolute -bottom-8 left-0 text-xs text-gray-600 font-mono">
                    FIG. 0{index + 1} — VISUALIZATION
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer/Next */}
        <div className="py-20 border-t border-white/10 text-center">
          <button onClick={onClose} className="text-[#F58220] uppercase tracking-widest text-sm font-bold hover:text-white transition-colors">
            Back to Projects
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;