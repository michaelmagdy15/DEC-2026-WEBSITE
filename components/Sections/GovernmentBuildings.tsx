import React from 'react';
import { motion } from 'framer-motion';
import { GOVERNMENT_PROJECTS_GALLERY } from '../../constants';

const GovernmentBuildings: React.FC = () => {
    return (
        <section className="py-24 bg-[#050505] text-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Section Header - Orange Banner Style */}
                <div className="relative mb-20 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[1px] bg-[#333]"></div>
                    </div>
                    <div className="relative bg-[#F58220] py-4 px-12 shadow-[0_10px_30px_rgba(245,130,32,0.3)] transform -skew-x-12 border border-[#ffa050]">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white transform skew-x-12 text-center">
                            Government & Office Buildings
                        </h2>
                    </div>
                </div>

                {/* Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {GOVERNMENT_PROJECTS_GALLERY.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col"
                        >
                            {/* Card Container with Dashed Border */}
                            <div className="p-3 border border-dashed border-[#333] rounded-sm hover:border-[#F58220] transition-colors duration-500 bg-[#111] hover:bg-[#161616]">
                                <div className="relative overflow-hidden aspect-[4/3] cursor-pointer">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                    {/* Scanline/Grid Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>

                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Title Below */}
                            <div className="mt-5 flex items-center justify-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="h-[1px] w-8 bg-[#F58220] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#888] group-hover:text-white transition-colors duration-300 text-center">
                                    {project.title}
                                </h3>
                                <div className="h-[1px] w-8 bg-[#F58220] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GovernmentBuildings;
