import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';
import ProjectDetail from './ProjectDetail';

const ProjectCard: React.FC<{ project: Project; onClick: (p: Project) => void }> = ({ project, onClick }) => {
    return (
        <motion.div
            layoutId={`project-card-${project.id}`}
            onClick={() => onClick(project)}
            className="relative group w-[85vw] md:w-[45vw] h-[40vh] sm:h-[50vh] md:h-[60vh] flex-shrink-0 mx-3 sm:mx-4 md:mx-10 overflow-hidden cursor-pointer bg-gray-900 border border-white/5"
        >
            <motion.div layoutId={`project-image-${project.id}`} className="w-full h-full">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            <motion.div
                className="absolute bottom-0 left-0 w-full p-4 sm:p-8 md:p-12"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[#F58220] font-mono text-xl">{project.year}</span>
                    <div className="h-[1px] w-12 bg-[#F58220]"></div>
                </div>
                <h3 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">{project.title}</h3>
                <p className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                    Tap to Explore
                </p>
            </motion.div>
        </motion.div>
    );
};

const ProjectTimeline: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Transform vertical scroll into horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <>
            <section id="projects" ref={targetRef} className="relative h-[300vh] bg-[#0f0f0f]">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                    {/* Section Header */}
                    <div className="absolute top-20 sm:top-24 left-4 sm:left-6 md:left-20 z-10 pointer-events-none">
                        <h2 className="text-[#F58220] uppercase tracking-widest text-xs sm:text-sm font-bold mb-1 sm:mb-2">Selected Works</h2>
                        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">The Archive</h3>
                    </div>

                    {/* Horizontal Container */}
                    <motion.div style={{ x }} className="flex items-center pl-4 sm:pl-6 md:pl-20">
                        {/* Intro Card */}
                        <div className="w-[60vw] sm:w-[30vw] md:w-[20vw] flex-shrink-0 mr-6 sm:mr-10">
                            <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-light italic">
                                "Each project is a unique response to its context, culture, and climate."
                            </p>
                            <div className="w-20 h-1 bg-[#F58220] mt-8"></div>
                        </div>

                        {/* Project Cards */}
                        {PROJECTS.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={setSelectedProject}
                            />
                        ))}

                        {/* Outro Card */}
                        <div className="w-[85vw] sm:w-[40vw] flex-shrink-0 flex items-center justify-center ml-6 sm:ml-10">
                            <div className="text-center">
                                <h4 className="text-xl sm:text-3xl text-white font-bold mb-4">Explore More</h4>
                                <a href="#major-projects" className="px-8 py-3 bg-[#F58220] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors inline-block">
                                    All Projects
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-6 sm:bottom-10 left-4 right-4 sm:left-6 sm:right-6 md:left-20 md:right-20 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleX: scrollYProgress }}
                            className="h-full bg-[#F58220] origin-left"
                        />
                    </div>
                </div>
            </section>

            {/* Fullscreen Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetail
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectTimeline;