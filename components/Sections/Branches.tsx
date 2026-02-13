import React from 'react';
import { motion } from 'framer-motion';
import { BRANCHES } from '../../content';

const Branches: React.FC = () => {
    return (
        <section id="branches" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
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
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#F58220] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
                            Our Presence
                        </span>
                        <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-8">
                            Dar Al Khaleej
                        </h2>
                    </motion.div>
                </div>

                {/* Branches Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BRANCHES.map((branch, index) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.6 }}
                            className="bg-[#151515] border border-white/5 p-8 hover:border-[#F58220]/50 transition-colors duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-[#F58220] mb-6 tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                {branch.city}
                            </h3>
                            <div className="space-y-3 font-mono text-sm text-gray-400">
                                {branch.details.map((detail, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                                        <span className="text-white/60">{detail.label}</span>
                                        <span className="text-white text-right select-all">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Branches;
