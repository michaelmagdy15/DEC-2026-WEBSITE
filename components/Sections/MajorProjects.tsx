import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MAJOR_PROJECTS_CATEGORIES } from '../../constants';

const MajorProjects: React.FC = () => {
    const [activeId, setActiveId] = useState(MAJOR_PROJECTS_CATEGORIES[0].id);
    const activeCategory = MAJOR_PROJECTS_CATEGORIES.find(cat => cat.id === activeId) || MAJOR_PROJECTS_CATEGORIES[0];

    // UPDATED: Theme based on Dark + Orange aesthetic
    const getColors = (id: string) => {
        const isActive = activeId === id;
        // If active, use Orange accent. If not, use Dark Grey scales.
        if (isActive) {
            return { numberBg: "#F58220", contentBg: "#1a1a1a", text: "white", border: "#F58220" };
        }

        switch (id) {
            case "01": return { numberBg: "#333", contentBg: "#111", text: "#888", border: "#333" };
            case "02": return { numberBg: "#444", contentBg: "#161616", text: "#888", border: "#333" };
            case "03": return { numberBg: "#222", contentBg: "#0f0f0f", text: "#888", border: "#333" };
            case "04": return { numberBg: "#3a3a3a", contentBg: "#141414", text: "#888", border: "#333" };
            case "05": return { numberBg: "#2a2a2a", contentBg: "#121212", text: "#888", border: "#333" };
            default: return { numberBg: "#333", contentBg: "#111", text: "#888", border: "#333" };
        }
    };

    return (
        <section className="py-16 sm:py-24 bg-[#050505] min-h-screen flex items-center relative overflow-hidden">
            {/* Background Texture/Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* Left Side: Featured Image & Title */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-6 relative">
                        {/* Decorative line */}
                        <div className="absolute -left-4 top-10 bottom-10 w-1 bg-gradient-to-b from-[#F58220] to-transparent opacity-50 hidden lg:block" />

                        <div className="relative h-[280px] sm:h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeId}
                                    src={activeCategory.image}
                                    alt={activeCategory.title}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>

                            {/* Overlay Title Block */}
                            <div className="absolute bottom-4 sm:bottom-10 left-0 bg-[#0a0a0a]/95 backdrop-blur-md p-4 sm:p-8 max-w-[90%] shadow-2xl border-r-4 border-[#F58220]">
                                <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#888] uppercase mb-1 sm:mb-2">Dar Al Khalij</h3>
                                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-none text-white">
                                    MAJOR <br /> PROJECTS
                                </h2>
                                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-none text-[#F58220] mt-1">
                                    REFERENCES
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Category Blocks */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center gap-2 sm:gap-4 pl-0 lg:pl-4 mt-4 lg:mt-0">
                        {MAJOR_PROJECTS_CATEGORIES.map((category) => {
                            const colors = getColors(category.id);
                            const isActive = activeId === category.id;

                            return (
                                <motion.div
                                    key={category.id}
                                    onMouseEnter={() => setActiveId(category.id)}
                                    className={`relative flex cursor-pointer transition-all duration-300 transform ${isActive ? 'sm:scale-105 z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'opacity-70 hover:opacity-100 hover:scale-[1.02]'}`}
                                >
                                    {/* Number Block */}
                                    <div
                                        className="w-14 sm:w-24 flex items-center justify-center text-xl sm:text-3xl font-bold transition-colors duration-300"
                                        style={{ backgroundColor: colors.numberBg, color: '#fff' }}
                                    >
                                        {category.id}
                                    </div>

                                    {/* Content Block */}
                                    <div
                                        className="flex-1 p-3 sm:p-6 border-l border-white/5 transition-colors duration-300"
                                        style={{ backgroundColor: colors.contentBg, color: colors.text }}
                                    >
                                        <h3 className={`text-sm sm:text-lg font-bold uppercase mb-2 tracking-wide ${isActive ? 'text-white' : 'text-[#888]'}`}>
                                            {category.title}
                                        </h3>
                                        {isActive && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="space-y-1"
                                            >
                                                {category.items.map((item, idx) => (
                                                    <li key={idx} className="text-sm opacity-90 flex items-start gap-2 text-gray-300">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F58220]"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                        {!isActive && (
                                            <p className="text-sm opacity-50 truncate">
                                                {category.items[0]} {category.items.length > 1 && `+ ${category.items.length - 1} more`}
                                            </p>
                                        )}
                                    </div>

                                    {/* Active Selection Indicator */}
                                    {isActive && (
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#F58220]" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MajorProjects;
