import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Target, ArrowRight } from 'lucide-react';

const MissionVision: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<'believe' | 'aim' | null>(null);

  return (
    <section className="relative w-full min-h-[80vh] bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden border-t border-white/5">
      
      {/* "We Believe" Section - Mission */}
      <div 
        className="relative flex-1 group border-b md:border-b-0 md:border-r border-white/5 transition-all duration-700 ease-in-out hover:flex-[1.5]"
        onMouseEnter={() => setHoveredSection('believe')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        {/* Background Image - Subtle & Architectural */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        
        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-end p-10 md:p-20 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-auto mt-10 md:mt-0"
          >
             <div className="w-16 h-16 rounded-full bg-[#F58220]/10 flex items-center justify-center mb-6 border border-[#F58220]/20 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-500">
                <Scale className={`w-8 h-8 text-[#F58220] group-hover:text-white transition-colors duration-500`} />
             </div>
             <h2 className="text-sm font-mono text-[#F58220] uppercase tracking-widest mb-2">Our Philosophy</h2>
             <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">We Believe.</h3>
          </motion.div>

          <div className="max-w-md">
            <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
              We strongly believe that it is important to achieve a <span className="text-[#F58220] font-bold">balance</span> between the purely technical approach to project management and the wider planning, social, and commercial implications of the work.
            </p>
            <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: hoveredSection === 'believe' ? 'auto' : 0, opacity: hoveredSection === 'believe' ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="text-gray-400 text-lg leading-relaxed mt-4 pt-4 border-t border-white/10">
                    Our philosophy is that architecture should be enduring and thoughtfully aligned with its surroundings.
                </p>
            </motion.div>
            
            <div className="mt-8 flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 group-hover:text-[#F58220] transition-colors">
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* "We Aim" Section - Vision */}
      <div 
        className="relative flex-1 group transition-all duration-700 ease-in-out hover:flex-[1.5]"
        onMouseEnter={() => setHoveredSection('aim')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-10 md:p-20 z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="mb-auto mt-10 md:mt-0"
          >
             <div className="w-16 h-16 rounded-full bg-[#F58220]/10 flex items-center justify-center mb-6 border border-[#F58220]/20 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-500">
                <Target className={`w-8 h-8 text-[#F58220] group-hover:text-white transition-colors duration-500`} />
             </div>
             <h2 className="text-sm font-mono text-[#F58220] uppercase tracking-widest mb-2">Our Vision</h2>
             <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">We Aim.</h3>
          </motion.div>

          <div className="max-w-md">
            <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
               To confirm solutions and fulfill our clients' needs through <span className="text-[#F58220] font-bold">creativity</span> and effective teamwork.
            </p>
             <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: hoveredSection === 'aim' ? 'auto' : 0, opacity: hoveredSection === 'aim' ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="text-gray-400 text-lg leading-relaxed mt-4 pt-4 border-t border-white/10">
                   We build spaces by understanding the functionality of the users while ensuring they are aesthetically appealing.
                </p>
            </motion.div>

            <div className="mt-8 flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 group-hover:text-[#F58220] transition-colors">
                <span>View Strategy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MissionVision;
