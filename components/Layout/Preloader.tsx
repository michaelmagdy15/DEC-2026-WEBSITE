import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "Initializing Grid System...",
    "Calibrating Structural Integrity...",
    "Rendering Architectural Assets...",
    "Finalizing Environment..."
  ];

  useEffect(() => {
    // Lock body scroll during loading
    document.body.style.overflow = 'hidden';
    
    // Cycle through status texts
    const textInterval = setInterval(() => {
        setTextIndex(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    // Progress Simulation (Smooth count up)
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + 1; 
        if (next >= 100) {
          clearInterval(interval);
          clearInterval(textInterval);
          setTimeout(onComplete, 800); // Slight pause at 100% for impact
          return 100;
        }
        return next;
      });
    }, 25); // ~2.5 seconds total load time

    return () => {
        clearInterval(interval);
        clearInterval(textInterval);
        document.body.style.overflow = 'auto'; // Unlock scroll on unmount if needed
    };
  }, [onComplete]);

  // Isometric Cube Paths
  const cubePathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
        pathLength: 1, 
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0f0f0f] flex items-center justify-center overflow-hidden"
      exit={{ 
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      {/* Background Grid Pattern - Subtle Technical Feel */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
        }}
      />
      
      {/* Central Content */}
      <div className="relative z-10 w-full max-w-sm px-8 flex flex-col items-center">
        
        {/* Architectural Wireframe Animation */}
        <div className="mb-10 relative w-32 h-32">
             <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {/* Glow Filter */}
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Base / Floor Plan */}
                <motion.path 
                    d="M50 95 L90 75 L50 55 L10 75 Z" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1"
                    initial="hidden"
                    animate={count > 0 ? "visible" : "hidden"}
                    variants={cubePathVariants}
                />
                
                {/* Vertical Pillars (Building Up) */}
                <motion.line x1="10" y1="75" x2="10" y2="35" stroke="white" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: count > 20 ? 1 : 0 }} transition={{ duration: 1 }} />
                <motion.line x1="90" y1="75" x2="90" y2="35" stroke="white" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: count > 20 ? 1 : 0 }} transition={{ duration: 1 }} />
                <motion.line x1="50" y1="95" x2="50" y2="55" stroke="white" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: count > 20 ? 1 : 0 }} transition={{ duration: 1 }} />
                
                {/* Roof / Top Structure */}
                <motion.path 
                    d="M50 15 L90 35 L50 55 L10 35 Z" 
                    fill="none" 
                    stroke="#F58220" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    initial="hidden"
                    animate={count > 40 ? "visible" : "hidden"}
                    variants={cubePathVariants}
                />

                {/* Center Core Line (Abstract) */}
                <motion.line 
                    x1="50" y1="55" x2="50" y2="95" 
                    stroke="#F58220" 
                    strokeWidth="0.5" 
                    strokeDasharray="2 2"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: count > 60 ? 0.5 : 0 }} 
                />
             </svg>
        </div>

        {/* Counter and Info */}
        <div className="w-full">
            <div className="flex justify-between items-end mb-3">
                 <motion.div 
                    key={textIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest h-4"
                 >
                    {loadingTexts[textIndex]}
                 </motion.div>
                 <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter tabular-nums leading-none">
                    {count}<span className="text-sm text-[#F58220] ml-1">%</span>
                 </span>
            </div>

            {/* Technical Progress Bar */}
            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
                <motion.div 
                    className="absolute top-0 bottom-0 left-0 bg-[#F58220]"
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                    transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
                />
            </div>
            
            {/* Footer Text */}
            <div className="flex justify-between mt-2 opacity-30">
                <span className="text-[9px] uppercase tracking-widest text-white">DEC Eng.</span>
                <span className="text-[9px] uppercase tracking-widest text-white">Est. 1989</span>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;