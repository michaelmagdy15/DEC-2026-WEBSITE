import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ArchitecturalScene from '../3D/ArchitecturalScene';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* 3D Background */}
      <ArchitecturalScene />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-20 pointer-events-none">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-[#F58220] font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            Est. 1989 • Engineering Excellence
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-8xl text-white font-extrabold tracking-tighter leading-tight mix-blend-difference"
          >
            Visionary <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Structures.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-4 sm:mt-8 text-gray-300 max-w-lg text-sm sm:text-lg leading-relaxed mix-blend-difference"
          >
            We sculpt the skyline. DEC combines engineering precision with artistic innovation to create spaces that inspire.
          </motion.p>
        </div>
      </div>

      {/* Interactive CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:bottom-10 sm:right-10 z-20 pointer-events-auto"
      >
        <a href="#projects" className="group flex items-center gap-4 text-white hover:text-[#F58220] transition-colors cursor-pointer">
          <span className="uppercase text-xs tracking-widest font-bold">Explore Projects</span>
          <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#F58220] flex items-center justify-center transition-all duration-300">
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </div>
        </a>
      </motion.div>

      {/* Gradient Overlay for bottom blending */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;