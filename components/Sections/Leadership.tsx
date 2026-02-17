import React from 'react';
import { motion } from 'framer-motion';

const Leadership: React.FC = () => {
    return (
        <section id="leadership" className="relative py-16 sm:py-24 md:py-32 bg-[#0d0d0d] overflow-hidden">

            {/* Background Architectural Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Content */}
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#F58220] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
                            Our Identity
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold tracking-tighter mb-8 sm:mb-12">
                            Who We Are
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed font-light"
                    >
                        <strong className="text-white">Dar Al Khaleej</strong> Engineering Consultants encourage a commitment to design excellence.
                        We are a practice that values and respects our staff, fellow consultants, and our clients and the shared expertise we all provide.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed font-light mt-4 sm:mt-6"
                    >
                        Our firm provides a working environment that fulfills aspiration, enhances knowledge and skills, and continuously builds a culture of excellence.
                        Established in 1989, we have grown into one of the most respected engineering consultancy firms in the region, delivering iconic projects across the UAE and beyond.
                    </motion.p>
                </div>

            </div>
        </section>
    );
};

export default Leadership;